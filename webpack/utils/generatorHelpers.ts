import { existsSync, writeFileSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const metaFolder = resolve(__dirname, '..', '..', 'meta');

export const createMetaFolder = (): void => {
	if (existsSync(metaFolder)) {
		return;
	}

	mkdirSync(metaFolder);
};

const getGeneratorDataPath = (generatorIdentifier: string) => resolve(metaFolder, `${generatorIdentifier}.json`);

export const getGeneratorData = (generatorIdentifier: string) => {
	const path = getGeneratorDataPath(generatorIdentifier);

	return existsSync(path) ? require(path) : {};
};

export const saveGeneratorData = (generatorIdentifier: string, uniqIds: string) => {
	const path = getGeneratorDataPath(generatorIdentifier);
	const data = JSON.stringify(uniqIds, null, 2);

	writeFileSync(path, data, 'utf-8');
};

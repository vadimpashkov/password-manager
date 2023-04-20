import incstr from 'incstr';
import { createMetaFolder, getGeneratorData, saveGeneratorData } from './generatorHelpers';

const createUniqueIdGenerator = (generatorIdentifier: string) => {
	createMetaFolder();

	const uniqIds = getGeneratorData(generatorIdentifier);

	const generateNextId = incstr.idGenerator({
		alphabet: 'abcefghijklmnopqrstuvwxyzABCEFGHJKLMNOPQRSTUVWXYZ',
	});

	return (name: string) => {
		if (!uniqIds[name]) {
			uniqIds[name] = generateNextId();

			// TODO: Заменить на debounce для оптимизации
			saveGeneratorData(generatorIdentifier, uniqIds);
		}

		return uniqIds[name];
	};
};

const localNameIdGenerator = createUniqueIdGenerator('localName');

const componentNameIdGenerator = createUniqueIdGenerator('componentName');

export const getScopedName = (localName: string, resourcePath: string) => {
	const componentName = resourcePath.split('/').slice(-2, -1)[0] ?? resourcePath.split('\\').slice(-2, -1)[0];

	const localId = localNameIdGenerator(localName);
	const componentId = componentNameIdGenerator(componentName);

	return `${componentId}_${localId}`;
};

/**
 * Получить содержимое файла в виде текста
 */
export const getFileContentsAsText = async (file: File): Promise<string> =>
	new Promise((resolve, rejects) => {
		// Если не передали файл
		if (file === undefined) {
			// Вернем ошибку
			return rejects('File not found');
		}

		/** Конструктор чтения содержимого файла */
		const reader = new FileReader();

		// Читаем содержимое файла как строку
		reader.readAsText(file);

		// Событие окончания чтения без ошибок
		reader.onload = () => {
			// Вернем содержимое файла в виде строки
			resolve(<string>reader.result);
		};

		// Событие ошибки при чтении
		reader.onerror = () => {
			// Вернем ошибку
			rejects(reader.error);
		};
	});

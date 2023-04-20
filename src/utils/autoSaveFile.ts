/**
 * Сохранить данные для файла
 * @param fileData Данные для файла
 * @param type Тип файла - по умолчанию сохраняем как сломанный
 */
export const autoSaveFile = (fileName: string, fileData: string, type = 'image/empty'): void => {
	/** Файл в виде бинарного массива */
	const fileAsBlob = new Blob([fileData], { type });

	/** Элемент ссылки */
	const linkDOMElement = document.createElement('a');

	/** URL для скачивания подготовленного файла */
	const blobURL = URL.createObjectURL(fileAsBlob);

	// Установим откуда будем качать файл
	linkDOMElement.setAttribute('href', blobURL);

	// Укажем, что по ссылке скачивается файл
	linkDOMElement.setAttribute('download', fileName);

	// Имитируем клик по элементу ссылки, чтобы файл скачался автоматически
	linkDOMElement.click();
};

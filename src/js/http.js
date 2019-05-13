export default function httpGet(url) {
  const xhr = new XMLHttpRequest();

  // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
  xhr.open('GET', url, false);

  // 3. Отсылаем запрос
  xhr.send();

  // 4. Если код ответа сервера не 200, то это ошибка
  if (xhr.status !== 200) {
    // обработать ошибку
    throw new Error('http error'); // пример вывода: 404: Not Found
  } else {
    // вывести результат
    return xhr.responseText; // responseText -- текст ответа.
  }
}

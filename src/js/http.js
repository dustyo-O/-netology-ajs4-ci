export function httpGet(url) {
    var xhr = new XMLHttpRequest();

    // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
    xhr.open('GET', url, false);

    // 3. Отсылаем запрос
    xhr.send();

    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
      // обработать ошибку
      throw ( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    } else {
      // вывести результат
      return( xhr.responseText ); // responseText -- текст ответа.
    }
}

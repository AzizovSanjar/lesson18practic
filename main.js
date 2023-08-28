//Задание 1: Простая форма обратной связи

//Создайте веб-страницу с простой формой обратной связи. Форма должна содержать следующие поля:
//Имя (текстовое поле)
//Электронная почта (текстовое поле с проверкой на корректный формат)
//Комментарий (текстовое поле или текстовая область)
//Оценка (выбор оценки от 1 до 5 с использованием радиокнопок или выпадающего списка)
//Кнопка "Отправить"
//При отправке формы, данные должны быть обработаны с помощью JavaScript, и содержимое всех полей должно быть выведено на странице ниже формы.

// const form = document.getElementById('form');
// let p = document.getElementById("p");
// let sel = document.getElementById("sel")

// function registerUser(event) {
//     event.preventDefault()
// const formData = new FormData(form)
// const values = Object.fromEntries(formData.entries ())

// console.log(values);

// p.innerHTML = values.name
// email.innerHTML = values.email
// message.innerHTML = values.message
// }

// form.addEventListener('submit', registerUser)



//Задание 2: Расчет процента скидки

//Создайте веб-страницу, на которой пользователь может ввести начальную цену товара и процент скидки. По нажатию кнопки "Рассчитать", страница должна отобразить итоговую цену с учетом скидки.
//Шаги для выполнения задания:
//Создайте HTML-форму с двумя полями ввода:
//Начальная цена товара (число)
//Процент скидки (число)
//Добавьте кнопку "Рассчитать".
//Используя JavaScript, обработайте данные, введенные пользователем:
//Получите значения начальной цены товара и процента скидки из полей ввода.
//Рассчитайте сумму скидки как процент от начальной цены (начальная цена * процент скидки / 100).
//Вычтите сумму скидки из начальной цены, чтобы получить итоговую цену.
//Выведите итоговую цену с учетом скидки на странице.
//Пример: Если начальная цена товара 1000 рублей, а процент скидки 20%, итоговая цена будет 800 рублей.

function multiplyBy() {
    one = document.getElementById("one").value
    two = document.getElementById("two").value
    document.getElementById("result").innerHTML = one * two
}
function divideBy() {
    one = document.getElementById("one").value
    two = document.getElementById("two").value
    document.getElementById("result").innerHTML = one / two
}
function Subtract() {
    one = document.getElementById("one").value
    two = document.getElementById("two").value
    document.getElementById("result").innerHTML = one - two
}













// Задача 2: Получить от пользователя два числа и 
//вывести в диалоговое окно сумму значений, которые 
//ввел пользователь, вывод должен выглядеть так (пример): 
//Результат сложения чисел 5 и 2 равен 7.
//const a = Number.parseFloat(prompt("Введите первое число:"));
//const b = Number.parseFloat(prompt("Введите второе число:"));
//alert(`Результат сложение чисел ${a} и ${b} равен ${sumOfNumbers(a, b).toFixed(2)}`);
//function sumOfNumbers(number1, number2) {
//    return number1 + number2;
//}

//Задача 4: вывести на экран в диалоговом окне текст с сообщением “Вам хорошо живется?”
//и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
//- При нажатии на кнопку “ОК” вывести в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.
//- При нажатии на кнопку “Отмена” вывести в диалоговом окне текст с сообщением “Ну вы держитесь там!”.
//const choice = confirm("Вам хороше живется?");
//if (choice) {
//    alert("Тогда мы идем к вам!");
//} else {
//    alert("Ну вы держитесь!");
//}
//Задача 5: перепишите код, используя конструкцию switch-case, запрашивая возраст пользователя через диалоговое окно.
const message = Number.parseInt(prompt("Сколько вам лет?"));
switch (message) {
    case 18:
        alert("Вы совершеннотний, все можно!");
        break;
    case 10:
        alert("Вам надо учить уроки!");
        break;
    case 30:
        alert('Ложитесь спать, завтра на работу');
        break;
    default:
        alert("Мы не знаем что Вам делать");
}
// Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// реализовать функцию так, чтобы она возвращала значение большего элемента массива, 
// который записан в четном индексе включая 0.
 
function getMaxEvenElement(arr) {
    let maxValue = arr[0];
    for (let index = 2; index < arr.length; index += 2) {
        //maxValue = Math.max(arr[index], arr[index + 2]);
        if (maxValue < arr[index]) {
            maxValue = arr[index];
        }
    }
    return maxValue;
}
console.log(getMaxEvenElement([-5, -7, -1, -12, -3, -10])); // 5
console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31
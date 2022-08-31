import './css/styles.css';

import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import { fetchCountries } from './js/fetchCountries';
import { renderCountryMarkup } from './js/renderCountryMarkup';
import { renderCountryListMarkup } from './js/renderCountryListMarkup';


const DEBOUNCE_DELAY = 300;

const refs = {
    counrtyCards: document.querySelector('.country-list'),
    input: document.querySelector('#search-box')
}

refs.input.addEventListener('input', debounce(onFind, DEBOUNCE_DELAY))

//необходимо реализовать функцию которая будет видеть
//1)если пользователь полностью очищает поле поиска, то HTTP - запрос не выполняется,
// а разметка списка стран или информации о стране пропадает.
//2) не знаю как Выполнить санитизацию введенной строки методом trim(), 
//это решит проблему когда в поле ввода только пробелы или они есть в начале и в конце строки.
function onFind(event) {
    let inputValue = event.target.value.trim()
    fetchCountries(inputValue).then(console.log)

}

//1)Если результат запроса это массив с одной страной, 
//тогда возвращаем рез-т функции renderCountryMurkup
//2)Если результат запроса от 2-х до 10-х стран
//тогда возвращаем рез-т функции renderCountryListMarkup
//3)Если в ответе бэкенд вернул больше чем 10 стран,
//тогда выводим сообщение"Too many matches found. Please enter a more specific name."
//4)Если пользователь ввёл имя страны которой не существует,
//тогда выводим ее в catch "Oops, there is no country with that name"
// fetchCountries()
//     .then()
// .catch()


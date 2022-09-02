import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { renderCountryMarkup } from './js/renderCountryMarkup';
import { renderCountryListMarkup } from './js/renderCountryListMarkup';


const DEBOUNCE_DELAY = 1300;

const refs = {
    counrtyCards: document.querySelector('.country-list'),
    input: document.querySelector('#search-box'),
    info: document.querySelector('.country-info')
}

refs.input.addEventListener('input', debounce(onFind, DEBOUNCE_DELAY))


function onFind(event) {
    let inputValue = event.target.value.trim()
    if (!inputValue) {
        renderMarkup()
        Notiflix.Notify.info('Please, enter the country name')
        return
    }
    fetchCountries(inputValue).then(data => 
        checkCountryList(data))
        .catch(error => Notiflix.Notify.failure('Oops, there is no country with that name'))

}

function renderMarkup(countryList = '', country = '') {
    refs.counrtyCards.innerHTML = countryList
    refs.info.innerHTML = country
}

function checkCountryList(countryies) {
    if (countryies.length > 10) {
        renderMarkup()
        Notiflix.Notify.failure('Too many matches found. Please enter a more specific name.')
        return
    }
    if (countryies.length > 1) {
        renderMarkup(renderCountryListMarkup(countryies))
        return
    }
    
    if (countryies.length === 1) {
        renderMarkup('', renderCountryMarkup(...countryies))
        return
    }
    }

    // fetchCountries(`swe`).then(console.log)


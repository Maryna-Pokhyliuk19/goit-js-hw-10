export function renderCountryListMarkup(countryies) {
    return countryies.map(({ name:{ official },  flags: {svg}}) => {
        return `<li class='country-list__item'>
        <p class='country-list_text'><img class='country-list__img' src=${svg} alt=${official} width="40"></img>${official}</p>
        </li>`
    }).join("");
    }

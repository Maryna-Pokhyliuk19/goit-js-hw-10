export function renderCountryMarkup(country) {
    const { name: { official }, capital, population, flags: { svg }, languages } = country;
    const listOfLanguages = Object.values(languages)
    
    return `<h3 class="country_name"><img class='country-list__img' src=${svg} alt=${official} width="40"></img>${official}</h3>
    <ul class='country_titles_list'>
<li>
    <p class='country_title_name'>Capital:
    <span class='country_title_value'>${capital}</span>
    </p>
</li>
<li>
    <p class='country_title_name'>Population:
    <span class='country_title_value'>${population}</span>
    </p>
</li>
<li>
    <p class='country_title_name'>Language: ${listOfLanguages.join(', ')}
    </p>
</li>
</ul>`
}

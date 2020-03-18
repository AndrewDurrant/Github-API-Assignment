/*eslint-env jquery*/

function getRepos(name) {
  fetch(`https://api.github.com/users/${name}/repos`).then(response => response.json()).then(responseJson => {
    console.log(responseJson);
    displayResults(responseJson);
  });
}

function displayResults(responseJson) {
  
  console.log(responseJson);
  
  let finalDisplay = responseJson.map(item => {
    return `
      <p>${item.name}</p>
      <a href="${item.url}">Repo Link</a>
    `;
  });

  $('#results').html(finalDisplay);

}

function watchForm() {
  $('.container').on('submit', '.js-search-form', (e) => {
    e.preventDefault();

    let candidate = $('.js-query-name').val();

    getRepos(candidate);
  });
}

$(watchForm);
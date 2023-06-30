// This document initiates the dynamic search function on the Wines of Italy website.

//set array for regions
const regions = [
  {
    name: 'Veneto',
    page: '/~davidza13/rootfolder_winesofitaly/italian_regions/veneto.html'
  },
  {
    name: 'Sicily',
    page: '/~davidza13//rootfolder_winesofitaly/italian_regions/sicily.html'
  },
  {
    name: 'Tuscany',
    page: '/~davidza13//rootfolder_winesofitaly/italian_regions/tuscany.html'
  },
  {
    name:'Piedmont',
    page: '/~davidza13/rootfolder_winesofitaly/italian_regions/piedmont.html'
  }
]

//set array for wines
const wines = [
  {
    name: 'Amarone',
    page: '/~davidza13/rootfolder_winesofitaly/italian_regions/italian_regional_wines/veneto_amarone.html'
  },
  {
    name: 'Bardolino',
    page: '/~davidza13/rootfolder_winesofitaly/italian_regions/italian_regional_wines/veneto_bardolino.html'
  },
  {
    name: 'Valpolicella',
    page: '/~davidza13/rootfolder_winesofitaly/italian_regions/italian_regional_wines/veneto_valpolicella.html'
  },
  {
    name: 'Merlot',
    page: '/~davidza13/rootfolder_winesofitaly/italian_regions/italian_regional_wines/veneto_merlot.html'
  },
  {
    name: 'Soave',
    page: '/~davidza13/rootfolder_winesofitaly/italian_regions/italian_regional_wines/veneto_soave.html'
  },
  {
    name: 'Pinot Grigio',
    page: '/~davidza13/rootfolder_winesofitaly/italian_regions/italian_regional_wines/veneto_pinot-grigio.html'
  },
  {
    name: 'Prosecco',
    page: '/~davidza13/rootfolder_winesofitaly/italian_regions/italian_regional_wines/veneto_prosecco.html'
  },
  {
    name: 'Chardonnay',
    page: '/~davidza13/rootfolder_winesofitaly/italian_regions/italian_regional_wines/veneto_chardonnay.html'
  },
]

//set array for blog articles
const blogs = [
  {
    name: 'Pairing Wine with Pasta',
    page: '/~davidza13/rootfolder_winesofitaly/blogpost-pasta.html'
  },
  {
    name: 'Best Place to See - Sicily',
    page: '/~davidza13/rootfolder_winesofitaly/blogpost-pasta.html'
  }
]

//concatinate arrays into one variable - searchPool
const searchPool = regions.concat(wines, blogs);

//searchForm is equal to the searchform id in HTML file
const searchForm = $('#searchform');
const searchResultsDiv = $('#searchResults');

//define the form function by listening for submit event to run function
searchForm.submit(function(e){
  e.preventDefault();
  const textInput = $('#searchInput').val().trim();
  const searchResults = textInput.length === 0 ? [] : search(textInput);
  renderSearchResults(searchResults);
})

//define the search function with query parameter - make the function flexible by allowing both the candidate and query to be recognized in lowercase.
function search(query){
  const searchResults = [];
  for (const candidate of searchPool){
    if (candidate.name.toLowerCase().includes(query.toLowerCase())){
      searchResults.push(candidate);
    }
  }
  return searchResults;
}

//define the renderSearch Results function that displays the search results using the searchResults parameter
function renderSearchResults(searchResults){
  searchResultsDiv.html("");
  const h2Text = searchResults.length === 0 ? 'No Search Results':'Search Results:';
  const h2 = $(`<h2>${h2Text}</h2>`);
  searchResultsDiv.append(h2);
  for (const searchResult of searchResults){
    const searchResultDiv = $(`<div class="searchResult"><a href="${searchResult.page}">${searchResult.name}</a></div>`);
    searchResultsDiv.append(searchResultDiv);
  }
}

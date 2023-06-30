// This document initiates the dynamic search function on the Wines of Italy website.

//set array for regions with the region name and corresponding page links
const regions = [
  {
    name: 'Veneto',
    page: '/rootfolder_winesofitaly/italian_regions/veneto.html'
  },
  {
    name: 'Sicily',
    page: '/rootfolder_winesofitaly/italian_regions/sicily.html'
  },
  {
    name: 'Tuscany',
    page: '/rootfolder_winesofitaly/italian_regions/tuscany.html'
  },
  {
    name:'Piedmont',
    page: '/rootfolder_winesofitaly/italian_regions/piedmont.html'
  }
];

//set array for wines with the wine name and corresponding page links
const wines = [
  {
    name: 'Amarone',
    page: '/rootfolder_winesofitaly/italian_regions/italian_regional_wines/veneto_amarone.html'
  },
  {
    name: 'Bardolino',
    page: '/rootfolder_winesofitaly/italian_regions/italian_regional_wines/veneto_bardolino.html'
  },
  {
    name: 'Valpolicella',
    page: '/rootfolder_winesofitaly/italian_regions/italian_regional_wines/veneto_valpolicella.html'
  },
  {
    name: 'Merlot',
    page: '/rootfolder_winesofitaly/italian_regions/italian_regional_wines/veneto_merlot.html'
  },
  {
    name: 'Soave',
    page: '/rootfolder_winesofitaly/italian_regions/italian_regional_wines/veneto_soave.html'
  },
  {
    name: 'Pinot Grigio',
    page: '/rootfolder_winesofitaly/italian_regions/italian_regional_wines/veneto_pinot-grigio.html'
  },
  {
    name: 'Prosecco',
    page: '/rootfolder_winesofitaly/italian_regions/italian_regional_wines/veneto_prosecco.html'
  },
  {
    name: 'Chardonnay',
    page: '/rootfolder_winesofitaly/italian_regions/italian_regional_wines/veneto_chardonnay.html'
  },
];

//set array for blog articles with the blog article name and corresponding page links
const blogs = [
  {
    name: 'Pairing Wine with Pasta',
    page: 'blogpost-pasta.html'
  }
];

//concatinate arrays into one object - searchPool
const searchPool = regions.concat(wines, blogs);


//define variables to be used in search function
const searchForm = document.getElementById('searchform');
const searchResultsDiv = document.getElementById('searchResults');

//define the form function by listening for submit event to run function
searchForm.addEventListener("submit",function(e){
  //prevent default refresh event action
  e.preventDefault();
  //obtain the search text input value and remove whitespace
  const textInput = document.getElementById('searchInput').value.trim();
  //if the text input length is equal to zero then it is an array otherwise execute search function with textInput parameter and execute renderSearchResults function with searchResults parameter.
  const searchResults = textInput.length === 0 ? [] : search(textInput);
  renderSearchResults(searchResults);
})

//define the search function with query parameter - make the function flexible by allowing both the candidate and query to be recognized in lowercase.
function search(query){
  const searchResults = [];
  for (const candidate of searchPool){
    // if the candidate name includes the same values as the query, push the candidate into the search results array to be displayed.
    if (candidate.name.toLowerCase().includes(query.toLowerCase())){
      searchResults.push(candidate);
    }
  }
  return searchResults;
}

//define the renderSearch Results function that displays the search results using the searchResults parameter
function renderSearchResults(searchResults){
  //the searchResults Div is equal to an empty string
  searchResultsDiv.innerHTML = "";
  //insert h2 element to display the No Search Results or Search Results heading
  const h2 = document.createElement('h2');
  //for the h2.innerHTML if the searchResults length is equal to zero than display 'No Search Results Found' otherwise display 'Search Results'
  h2.innerHTML = searchResults.length === 0 ? 'No Search Results':'Search Results:';
  //add h2 as a child to the searchResultsDiv
  searchResultsDiv.appendChild(h2);
  //iterate the SearchResult over objects within the SearchResults in order to create html elements for each result to be displayed.
  for (const searchResult of searchResults){
    const searchResultDiv = document.createElement('div');
    //create an anchor tag
    const link = document.createElement('a');
    //set the link's innerHTML to the searchResult name
    link.innerHTML = searchResult.name;
    //set an href attribute to the searchResultpage
    link.setAttribute('href', searchResult.page);
    //add the link as a child to the searchResultDiv
    searchResultDiv.appendChild(link);
    //add the 'searchResult' to the searchResultDiv
    searchResultDiv.classList.add('searchResult');
    //add searchResultDiv as a child to the searchResultsDiv
    searchResultsDiv.appendChild(searchResultDiv);
  }
}

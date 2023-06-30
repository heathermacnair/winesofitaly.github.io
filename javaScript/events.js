//This document pertains to the function displaying the news articles on the Resources page
//API from https://rapidapi.com/connexun-srl-connexun-srl-default/api/news67?endpoint=apiendpoint_e0f19e54-10ed-4270-adde-eda5b7fb0cbd
//Accessed: April 28, 2021

const find = 'italy wine';
const limit = 10;
const from = 04/01/2021;
const langs = 'en';
const api= `https://news67.p.rapidapi.com/topic-research?search=${find}&limit=${limit}&from=${from}&langs=${langs}`;

const headers = {
	"x-rapidapi-key": "e3e5165b90msh8d7a007859da175p115f9bjsn33d5d84ac4a5",
	"x-rapidapi-host": "news67.p.rapidapi.com",
	"useQueryString": true
};

fetch(api,{headers:headers})
.then(response => response.json())
.then(data => {
  const eventsDiv = document.getElementById('events');
  for (const event of data.news){
      const imgTag = document.createElement('img');
      imgTag.setAttribute('src', event.image);
      imgTag.setAttribute('class', 'newsImage')
      const anchor = document.createElement('a');
      anchor.setAttribute('href', `${event.url}`);
      anchor.appendChild(imgTag);
      eventsDiv.appendChild(anchor);
      const div = document.createElement('div');
      div.innerHTML = event.title;
      div.setAttribute('class', 'eventTitle');
      eventsDiv.appendChild(div);
      const summaryDiv = document.createElement('div');
      summaryDiv.innerHTML = event.summarization;
      summaryDiv.setAttribute('class', 'description');
      eventsDiv.appendChild(summaryDiv);
    }
 });

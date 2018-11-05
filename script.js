function appendMovieElement () { 
  // create a new div element 
  console.log("Adding Element to Page");

  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode("douban"); 
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
	let titleElement = document.querySelector(".title");
	titleElement.appendChild(newDiv);	

	var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
      	console.log (xmlHttp)
      }
          // callback(xmlHttp.responseText);
  }
  theUrl = "https://api.douban.com/v2/movie/search?q=before_sunrise";
  xmlHttp.open("GET", theUrl, true); // true for asynchronous 
  xmlHttp.send(null);
}

setTimeout(function(){
	appendMovieElement()
}, 5000); 
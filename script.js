function appendMovieElement() {
  // create a new div element 
  // console.log("Adding Element to Page");

  var newDiv = document.createElement("div");
  var rotten = document.createElement("a");
  rotten.setAttribute("style", "margin-right:10px;float:right;padding-bottom:5px;");
  rotten.setAttribute("id", "rotten");
  var imdb = document.createElement("a");
  imdb.setAttribute("style", "margin-right:10px;float:right;padding-bottom:5px;");
  imdb.setAttribute("id", "imdb");
  var Metacritic = document.createElement("a");
  Metacritic.setAttribute("style", "margin-right:10px;float:right;padding-bottom:5px;");
  Metacritic.setAttribute("id", "Metacritic");
  var douban = document.createElement("a");
  douban.setAttribute("id", "douban");
  douban.setAttribute("style", "margin-right:10px;float:right;padding-bottom:5px;text-decoration:none");
  douban.innerHTML = "Douban";
  rotten.innerHTML = "Rotten";
  imdb.innerHTML="IMDB";
  Metacritic.innerHTML="Metacritic";

  newDiv.appendChild(imdb);
  newDiv.appendChild(rotten);
  newDiv.appendChild(douban);
  newDiv.appendChild(Metacritic);

  
  let titleElement = document.querySelector(".title");
  var name = titleElement.textContent;
  titleElement.appendChild(newDiv);
  console.log(name);
  
  async function getDoubanAW(name){
    try{
      const result = await fetch(`https://cors-anywhere.herokuapp.com/https://api.douban.com/v2/movie/search?q=${name}`);
      const data = await result.json();
      if(data.subjects[0]){
        const rating = data.subjects[0].rating;
        const link = data.subjects[0].alt;
        douban.setAttribute("href", `${link}`);
        douban.setAttribute("target", "_blank");
        douban.setAttribute("style", "color:black;margin-right:10px;float:right;padding-bottom:5px;text-decoration:none");
        douban.innerHTML = `Douban ${rating.average} / ${rating.max}`;
      }
      else{
        // no rating found
        douban.innerHTML = "";
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  getDoubanAW(`${name}`);
  async function getRottenAW(name){
    try{
      //fetch by movie name
      var result = await fetch(`https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=190a4deb&t=${name}`);
      var data = await result.json();
      if(data.Response == "False"){
        //try The Movie Database to get IMDB id
        const moviedb = await fetch(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=d0ecd4e957bdc2579eeb5385373b254c&query=${name}`);
        const moviejson = await moviedb.json();
        console.log(moviejson);
        const id = moviejson.results.id;
        const getInfo = await fetch(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/${id}?api_key=d0ecd4e957bdc2579eeb5385373b254c&language=en-US`);
        const detail = await getInfo.json();
        console.log(detail);
        const imdbID = detail.imdb_id;
        console.log(imdbID);
        result = await fetch(`https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=190a4deb&i=${imdbID}`);
        data = await result.json();
      }
      console.log(data);
      if(data.Response = "False"){
        const imdbR = data.Ratings[0].Value;
        const rottenR = data.Ratings[1].Value;
        const metaR = data.Ratings[2].value;
        const id = data.imdbID;
        const imdbUrl = `https://www.imdb.com/title/${id}`;
        imdb.setAttribute("href", `${imdbUrl}`);
        imdb.setAttribute("target", "_blank");
        imdb.setAttribute("style", "color:black;margin-right:10px;float:right;padding-bottom:5px;text-decoration:none");
        imdb.innerHTML = `IMDB ${imdbR}`;
        rotten.innerHTML = `Rotten ${rottenR}`;
        if(data.Ratings[2].value){
          Metacritic.innerHTML=`Metacritic ${metaR}`;
        }
        else{
          Metacritic.innerHTML=`Metacritic N/A`;
        }
      }
      else{
        
        // no rating found
        imdb.innerHTML="";
        rotten.innerHTML="";
        Metacritic.innerHTML="";
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  getRottenAW(`${name}`);

}

setTimeout(function () {
  appendMovieElement()
}, 1000); 
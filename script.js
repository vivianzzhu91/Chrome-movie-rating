function appendMovieElement() {
  // create a new div element 
  console.log("Adding Element to Page");

  var newDiv = document.createElement("div");
  var douban = document.createElement("a");
  douban.setAttribute("id", "douban");
  douban.setAttribute("style", "margin-right:10px;float:right;padding-bottom:5px;text-decoration:none;color:#404C78;");
  var rotten = document.createElement("a");
  rotten.setAttribute("style", "margin-right:10px;float:right;padding-bottom:5px;");
  rotten.setAttribute("id", "rotten");
  douban.innerHTML = "Douban";
  rotten.innerHTML = "Rotten";

  newDiv.appendChild(douban);
  newDiv.appendChild(rotten);

  let titleElement = document.querySelector(".title");
  var name = titleElement.textContent;
  console.log(name);
  
  async function getDoubanAW(name){
    try{
      const result = await fetch(`https://cors-anywhere.herokuapp.com/https://api.douban.com/v2/movie/search?q=${name}`);
      const data = await result.json();
      console.log(data);
      if(data.subjects[0]){
        titleElement.appendChild(newDiv);
        const rating = data.subjects[0].rating;
        console.log(rating);
        // let douban = document.querySelector("#douban");
        const link = data.subjects[0].alt;
        console.log(link);
        douban.setAttribute("href", `${link}`);
        douban.setAttribute("target", "_blank");
        douban.innerHTML = `Douban: ${rating.average} / ${rating.max}`;
      }
      else{
        // no rating found
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  getDoubanAW(`${name}`);

  // async function getIMDBAW(id){
  //   try{
  //     const result = await fetch(`https://cors-anywhere.herokuapp.com/https://innocentabi-imdb-grabber-v1.p.rapidapi.com/imdb/tt${id}`;
  //     const data = await result.json();
  //     console.log(data);
  //     // if(data.subjects[0]){
  //     //   const rating = data.subjects[0].rating;
  //     //   console.log(rating);
  //     //   // let douban = document.querySelector("#douban");
  //     //   douban.innerHTML = `Douban: ${rating.average} / ${rating.max}`;
  //     // }
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }
  // r.get("https://innocentabi-imdb-grabber-v1.p.rapidapi.com/imdb/tt0112471")
  // .header("X-RapidAPI-Key", "74311a6f4amsh9ee14bd8498d69cp1e5c67jsncd626ecb6098")
  // .end(function (result) {
  //   console.log(result.status, result.headers, result.body);
  // });
  // https://api.douban.com/v2/movie/search?q=

	// var xmlHttp = new XMLHttpRequest();
  // xmlHttp.onreadystatechange = function() { 
  //     if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
  //     	console.log (xmlHttp)
  //     }
  //         // callback(xmlHttp.responseText);
  // }
  // theUrl = "https://cors-anywhere.herokuapp.com/https://api.douban.com/v2/movie/search?q=before_sunrise";
  // xmlHttp.open("GET", theUrl, true); // true for asynchronous 
  // xmlHttp.send(null);
}

setTimeout(function () {
  appendMovieElement()
}, 5000); 
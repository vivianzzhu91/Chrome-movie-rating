function appendMovieElement() {
  // create a new div element 
  // console.log("Adding Element to Page");

  var newDiv = document.createElement("div");
  var review = document.createElement("a");
  review.setAttribute("style", "margin-right:10px;float:right;padding-bottom:5px;");
  review.setAttribute("id", "review");
  var douban = document.createElement("a");
  douban.setAttribute("id", "douban");
  douban.setAttribute("style", "margin-right:10px;float:right;padding-bottom:5px;text-decoration:none;color:#404C78;");
  douban.innerHTML = "Douban";
  review.innerHTML = "Viewed";

  newDiv.appendChild(review);
  newDiv.appendChild(douban);

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
        // console.log(rating);
        const link = data.subjects[0].alt;
        // console.log(link);
        douban.setAttribute("href", `${link}`);
        douban.setAttribute("target", "_blank");
        const count = data.subjects[0].collect_count;
        douban.innerHTML = `Douban: ${rating.average} / ${rating.max}`;
        review.innerHTML=`${count} viewed`;
      }
      else{
        // no rating found
        douban.innerHTML = "";
        review.innerHTML="";
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  getDoubanAW(`${name}`);
}

setTimeout(function () {
  appendMovieElement()
}, 1000); 
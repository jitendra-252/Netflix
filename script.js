let movies = [
    {
        name:"Titanic",
        poster:"https://img.fruugo.com/product/6/31/14366316_max.jpg",
        rating:9.5

    },
    {
      name:"Avatar",
      poster:"https://i.pinimg.com/1200x/8a/46/ae/8a46ae4c8e1b6a136a5ace51a7c81591.jpg",
      rating: 9.6

  },
  {
    name:"Pathan",
    poster:"https://m.media-amazon.com/images/I/91uzbH0vmcL._AC_UF1000,1000_QL80_.jpg",
    rating:8.5

},
{
  name:"Spiderman",
  poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJYMggAM0n9oA4b8jSQ-MwyCI9CN2L5vza05jfmcicO2rt1rHQ_HD46Z-hRBiq9hrMicg&usqp=CAU",
  rating:9.1

},
{
  name:"Moonlight",
  poster:"https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
  rating:8.7

},
{
  name:"Avengers Endgame",
  poster:"https://i.ebayimg.com/images/g/TuoAAOSw4ARhoMr~/s-l1600.jpg",
  rating:8.7

},
{
  name:"Lagaan",
  poster:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg",
  rating: 9.1

},
{
  name:"Openheimer",
  poster:"https://i.etsystatic.com/41234894/r/il/01d73b/5125027974/il_570xN.5125027974_md2d.jpg",
  rating:9.2
},
{
  name:"Iron Man",
  poster:"https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg",
  rating:9.4
},
{
  name:"Leo",
  poster:"https://pbs.twimg.com/media/F4rWXX_bgAA44fo.jpg:large",
  rating: 8.9
},
{
  name:"RRR",
  poster:"https://m.media-amazon.com/images/M/MV5BYjcyNDNkMzMtNWVjOC00ZTdjLTg1YTAtODMzMjMzZjJlNzEzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
  rating:9.5
},
{
  name:"Jailer",
  poster:"https://cdn.bollywoodmdb.com/fit-in/movies/largethumb/2023/jailer/poster.jpg",
  rating:9.1
}

];

function searchMovie()
{
  let movieName = document.getElementById("search").value;
  
  if(movieName!=="")
  {
    let result = movies.filter(function(movie)
    {
      return movie.name.toUpperCase().includes(movieName.toUpperCase());
    })

    // if(result.length==0)
    // {
    //   displayMovies("Not found");
    // }

    // console.log(result);
    displayMovies(result);

 }
 else
 {
    displayMovies(movies);
 }


}

function displayMovies(data)
{

    document.getElementById("movies").innerHTML="";

    let htmlString = ``;

    for(let i=0; i<data.length; i++)
    {
        htmlString = htmlString + `
        
        <div class="movie">
    <div class="overlay">

        <div class="video">

        </div>

        <div class="details">

            <h1>${data[i].name}</h1>
            <h2>${data[i].rating}</h2>
            <p>Leonardo DiCaprio . Billy Zane . Kate Winslet</p>

        </div>

    </div>
    <img class="poster" src="${data[i].poster}" alt="">

</div> 
        `;


    }
    console.log(htmlString);

    document.getElementById("movies").innerHTML = htmlString;
  
}

displayMovies(movies);

    
















// let movieDiv = document.createElement("div");
  // movieDiv.classList.add("movie");

  // let overlayDiv = document.createElement("div");
  // overlayDiv.classList.add("overlay");

  // movieDiv.appendChild(overlayDiv);

  // console.log(movieDiv);
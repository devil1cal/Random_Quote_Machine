//change the limit to however many images to use
const url = `https://api.thecatapi.com/v1/images/search`;
const api_key = "DEMO_API_KEY";

fetch(url, {
  headers: {
    "x-api-key": api_key
  }
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let imagesData = data;
    imagesData.map(function (imageData, index) {
      let image = document.createElement("img");
      //use the url from the image object
      image.src = `${imageData.url}`;
      let gridCell = document.createElement("div");
      gridCell.appendChild(image);
      document.getElementById("grid").appendChild(gridCell);
    });
  })
  .catch(function (error) {
    console.log(error);
  });

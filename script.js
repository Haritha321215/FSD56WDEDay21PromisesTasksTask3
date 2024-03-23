async function getFood() {
  let url="https://foodish-api.com/api/";
  let div = document.createElement("div");
  div.className =
    "container d-flex flex-column align-items-center justify-content-center";

  let header = document.createElement("h1");
  header.innerText = "Delicious Food";
  header.className = "header1";

  let header2 = document.createElement("h3");
  header2.className = "header2";

  let img = document.createElement("img");
  img.className = "img-fluid rounded m-2";

  let btn = document.createElement("button");
  btn.className = "btn btn-outline-primary btn-sm";
  btn.innerText = "Refresh";

  function handleClick() {
    window.location.reload();
  }

  btn.addEventListener("click", handleClick);
  // get the random food from api
  try {
    let data = await fetch(url);
    let result = await data.json();
    img.src = `${result.image}`;
    let food = result.image.split("/")[4];
    img.alt = food;
    header2.innerText = food[0].toUpperCase() + food.slice(1);
    console.log(result.image);
    console.log(result.image.split("/")[4]);
    div.append(header, header2, btn, img);
    document.body.append(div);
  } catch (error) {
    console.error(error);
  }
}
getFood();

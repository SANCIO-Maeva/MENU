const card = document.querySelector(".card");
document.addEventListener("mousemove", function (e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

const images = document.querySelectorAll(".flip");

console.log(images);

images.forEach((image) => {
  image.addEventListener("click", function () {
    console.log("coucou");
    image.style.backgroundImage = "url('img/po2.png')";
  });
});

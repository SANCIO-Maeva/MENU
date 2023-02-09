const images = document.querySelectorAll(".flip");

console.log(images);

images.forEach((image) => {
  image.addEventListener("click", function () {
    console.log("coucou");
    image.style.backgroundImage = "url('img/po2.png')";
  });
});

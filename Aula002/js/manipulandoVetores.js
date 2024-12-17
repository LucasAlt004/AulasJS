const tagsP = document.querySelectorAll(".teste");

tagsP.forEach(function (elementos, index) {
  elementos.addEventListener("click", function () {
    console.log(`cliquei no p de index: ${index}`);
  });
});

console.log(tagsP);

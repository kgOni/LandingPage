const cont = document.querySelector(".container");
console.log(cont);
const rect = cont.getBoundingClientRect();
console.log(rect);

window.addEventListener("scoll", function () {
  console.log("hier" + window.innerHeight);
});

// creating and counting all the section
let el = 0;
const createSection = () => {
  el++;
  const content = `<section id="section${el}" data-nav="Section ${el}">
    <div class="container">
    <h2>Section ${el}</h2>
    <div id="message">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
    reprehenderit eos consectetur earum neque dolor necessitatibus
    tempora quam in, dicta distinctio repellendus aut enim excepturi
    eveniet iste et. Odit magnam doloremque facilis maxime, ea qui vero
    quod minima saepe fugit aliquid, esse facere quisquam corporis optio
    reprehenderit saepe fugit aliquid, esse facere quisquam corporis
    optio reprehenderit saepe fugit aliquid, esse facere quisquam
    corporis optio reprehenderit necessitatibus, natus, iure dicta
    assumenda vel dolore.
    </div>
    </div>
    </section>`;
  document.querySelector("main").insertAdjacentHTML("beforeend", content); //print them in the html page
};

//creat the NavBar with the section on the page
const navbar = document.getElementById("navbarlist"); //get all the Elements insight navbarlist
const createNavBarItems = () => {
  navbar.innerHTML = "";
  document.querySelectorAll("section").forEach((section) => {
    const navbaritems = `<li><a href="#${section.id}" data-nav="${section.id}" class="menulink">${section.dataset.nav}</a></li>`;
    navbar.insertAdjacentHTML("beforeend", navbaritems);
  });
};

// call the functions to create 
for (let i = 0; i < 4; i++) createSection();
createNavBarItems();

//creat new Section and new NavBarItems
document.getElementById("button").addEventListener("click", () => {
  createSection();
  createNavBarItems();
});

navbar.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(event.target.dataset.nav)
      .scrollIntoView({ behavior: "smooth" });
  }
});

window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (active) {
    let activeLink = navbar.querySelector(`[data-nav=${active.id}]`);
    if (
      active.getBoundingClientRect().top >= -400 &&
      active.getBoundingClientRect().top <= 150
    ) {
      active.classList.add("active");
      activeLink.classList.add("active");
    } else {
      active.classList.remove("active");
      activeLink.classList.remove("active");
    }
  });
};

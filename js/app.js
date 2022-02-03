// creating and counting all the section
let el = "";
const createSection = () => {
  //define the function for creating the new content and the new sections
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

// call the functions to create 4 section on first load
for (let i = 0; i < 4; i++) createSection();
createNavBarItems();

//creat new Section and new NavBarItems
document.getElementById("button").addEventListener("click", () => {
  createSection();
  createNavBarItems();
});

//on click you scroll to the section you chose
navbar.addEventListener("click", (event) => {
  //clicked element form the navbar starts the event
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(event.target.dataset.nav)
      .scrollIntoView({ behavior: "smooth" }); //define to scroll smooth to the section
  }
});

//Viewport: When the Section/ class is in the viewport the class active will be added and removed
//activelink will be activate, too. whne the section is in the viewport you can change for example the color of the navbar icon
window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (active) {
    let activeLink = navbar.querySelector(`[data-nav=${active.id}]`);
    if (
      active.getBoundingClientRect().top >= -600 &&
      active.getBoundingClientRect().top <= 50
    ) {
      active.classList.add("active");
      activeLink.classList.add("active");
    } else {
      active.classList.remove("active");
      activeLink.classList.remove("active");
    }
  });
};

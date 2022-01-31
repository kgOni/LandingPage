// creating and counting all the section
let counter = 0;
const createSection = () => {
  counter++;
  const content = `<section id="section${counter}" data-nav="Section ${counter}">
    <div class="container">
    <h2>Section ${counter}</h2>
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

const navBar = document.getElementById("listnavbar");
const createNavItems = () => {
  navBar.innerHTML = "";
  document.querySelectorAll("section").forEach((section) => {
    const navbaritems = `<li><a href="#${section.id}" data-nav="${section.id}" class="menulink">${section.dataset.nav}</a></li>`;
    navBar.insertAdjacentHTML("beforeend", navbaritems);
  });
};

//
for (let i = 1; i < 5; i++) createSection();
createNavItems();

document.getElementById("button").addEventListener("click", () => {
  createSection();
  createNavItems();
});

navBar.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${event.target.dataset.nav}`;
    }, 200);
  }
});

window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (active) {
    let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);
    if (
      active.getBoundingClientRect().top >= -400 &&
      active.getBoundingClientRect().top <= 150
    ) {
      active.classList.add("active");
      activeLink.classList.add("active-");
    } else {
      active.classList.remove("active");
      activeLink.classList.remove("active");
    }
  });
};

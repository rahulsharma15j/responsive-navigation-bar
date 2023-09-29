const mobileMenu = document.querySelector(".mobile-nav");
const navLinks = document.querySelectorAll(".links li a");
const mobileNavLinks = mobileMenu.querySelectorAll("li");

//function to show or hide the mobile menu
const toggle = () => {
  //toggle 'show' class on mobile menu
  mobileMenu.classList.toggle("show");
};

//function to add an 'active' class to the nav link
const addActive = (array, activeLink) => {
  //looping through the links
  array.forEach((link) => {
    //adding an event listener to the link
    link.addEventListener("click", () => {
      //removing 'active' class from the current active link
      document.querySelector(`${activeLink}`).classList.remove("active");
      //adding an 'active' class to the clicked link
      link.classList.add("active");
    });
  });
};

//calling 'addActive()' for desktop nav links
addActive(navLinks, ".links li a.active");

//calling 'addActive()' for mobile nav links
addActive(mobileNavLinks, "li.active");

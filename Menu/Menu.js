/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out",
];

/*
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/

function menuMaker(menuArray) {
  // Create the HTML elements
  const menuDiv = document.createElement("div");
  const menuList = document.createElement("ul");

  // Add the corresponding CSS classes
  menuDiv.classList.add("menu");

  // Nest them appropriately
  menuDiv.appendChild(menuList);

  // Loop through the list of menu items, create a list element for each one and assign it the correct text
  for (let i = 0; i < menuArray.length; i++) {
    const menuListItem = document.createElement("li");
    menuList.appendChild(menuListItem);
    menuListItem.textContent = menuArray[i];
  }

  // Grab the menu button and listen for when it's clicked to show the menu items
  const menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function (event) {
    console.log("I'm being clicked");
    menuDiv.classList.toggle("menu--open");
  });

  return menuDiv;
}

const headerDiv = document.querySelector(".header");
const newMenu = menuMaker(menuItems);
headerDiv.appendChild(newMenu);

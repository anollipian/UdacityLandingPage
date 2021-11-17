/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Selects All sections in the page
const sectionsList = document.querySelectorAll('section');

/**
 * End Global Variables
 * Begin Main Functions
 * 
*/


/**
 * Builds Dynamic Navigation Bar using the 
 * sections of the Page.
*/
function buildTheNav() {
  const navBarMenu = document.querySelector('#navbar__list');
  sectionsList.forEach(function (section) {
    const sectionName = section.id;
    const newListNode = document.createElement("li");
    const aref = document.createElement("a");
    aref.appendChild(document.createTextNode(sectionName));
    aref.setAttribute("class", "menu__link");
    aref.setAttribute("href", '#' + sectionName);     // To Scroll to anchor ID
    newListNode.appendChild(aref);
    newListNode.setAttribute("class", sectionName + 'node');
    navBarMenu.appendChild(newListNode);
  });
}

// Set sections as active
function updateState() {
  sectionsList.forEach(function (section) {
    const currentListItem = section.id + "node";
    const listMenu = document.getElementsByClassName(currentListItem)[0];
    const CheckedSectionData = section.getBoundingClientRect();
    if (CheckedSectionData.top <= 150 && CheckedSectionData.bottom >= 150) {
      section.setAttribute("class", "your-active-class");
      //Add active status to the nav bar item 
      listMenu.classList.add("active__link");
    }
    else {
      CheckedSectionData.top == 0 && CheckedSectionData.bottom == 0;
      // Remove class 'active' from section when you are no longer browsing it
      section.removeAttribute("class", "your-active-class");
      listMenu.classList.remove("active__link");
    }
  });
}
//minimize Sections
function minimize(current) {

  const currentSection = current.parentElement;
  const childDiv = currentSection.children[1];
  var displaystyle = childDiv.style.display;
  if (childDiv.offsetWidth > 0 && childDiv.offsetHeight > 0) {
    childDiv.style.display = 'none';
    current.textContent = '+';
  }
  else {
    childDiv.style.display = 'block';
    current.textContent = '-';
  }
}



buildTheNav();


//Call the Updating Function When Scrolling Happens
document.addEventListener('scroll', updateState);





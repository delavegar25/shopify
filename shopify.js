//Logic to handle opening and closing of the two  modals
const popupAlert = document.querySelector(".popup-alert");
const dropdown = document.querySelector(".menu-dropdown");
const alertTrigger = document.querySelector(".profile");
const dropdownTrigger = document.querySelector(".profile-dropdown");
//functions to open and close modals
alertTrigger.addEventListener("click", () => {
  const expanded =
    alertTrigger.getAttribute("aria-expanded") === "true" || false;
  alertTrigger.setAttribute("aria-expanded", !expanded);
  popupAlert.classList.toggle("hidden");
  //Close the other modal
  popupAlert.setAttribute("aria-expanded", false);
  dropdown.classList.add("hidden");
});
dropdownTrigger.addEventListener("click", () => {
  const expanded =
    dropdownTrigger.getAttribute("aria-expanded") === "true" || false;
  dropdownTrigger.setAttribute("aria-expanded", !expanded);
  dropdown.classList.toggle("hidden");
  //Close the other modal
  popupAlert.setAttribute("aria-expanded", false);
  popupAlert.classList.add("hidden");
});


//to open and close modals with Escape keys



// to cancel the header

  const plan = document.querySelector('.select-plan');
  const cancelIcon = document.querySelector('.close-btn');
  cancelIcon.addEventListener("click", () => {
  plan.classList.add('hidden');
});

cancelIcon.addEventListener('keydown', (event) => {
   if(event.key === 'Enter') {
    plan.classList.add('hidden');
   }
})


// close and open setup guide
// open setup guide
chevron.ariaExpanded = "false";
chevron.focus();

// close setup guide
chevron.ariaExpanded = "true";
guideContent.forEach((element) => {});

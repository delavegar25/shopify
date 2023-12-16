//Logic to handle opening and closing of the two  modals
const alertModal = document.querySelector(".alert-modal");
const dropdown = document.querySelector(".dropdown");
const alertTrigger = document.querySelector(".noti-section");
const dropdownTrigger = document.querySelector(".name-section");
//functions to open and close modals
alertTrigger.addEventListener("click", () => {
  const expanded =
    alertTrigger.getAttribute("aria-expanded") === "true" || false;
  alertTrigger.setAttribute("aria-expanded", !expanded);
  alertModal.classList.toggle("hidden");
  //Close the other modal
  alertModal.setAttribute("aria-expanded", false);
  dropdown.classList.add("hidden");
});
dropdownTrigger.addEventListener("click", () => {
  const expanded =
    dropdownTrigger.getAttribute("aria-expanded") === "true" || false;
  dropdownTrigger.setAttribute("aria-expanded", !expanded);
  dropdown.classList.toggle("hidden");
  //Close the other modal
  alertModal.setAttribute("aria-expanded", false);
  alertModal.classList.add("hidden");
});

//Logic to open and close modals with enter keys
alertTrigger.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.target.click();
  }
});
dropdownTrigger.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.target.click();
  }
});

//Logic to close header
const header = document.querySelector("header");
const cancelIcon = document.querySelector(".cancel");
cancelIcon.addEventListener("click", () => {
  header.classList.add("hidden");
});

//Logic to handle opening and closing of the setup guides wrapper
const arrow = document.querySelector(".arrow");
const guides = document.querySelector(".guides");

arrow.addEventListener("click", () => {
  arrow.classList.toggle("rotateArrow");
  guides.classList.toggle("shrink");
});

//Automatically close the guides apart from the first guide when browser loads
const guideList = document.querySelectorAll(".guide");
guideList.forEach((guide, index) => index > 0 && guide.classList.add("hide"));

//To open and close a specific guide
const toggleGuide = (i) => {
  guideList.forEach((guide, index) => {
    const showGuide = index == i;
    showGuide ? guide.classList.remove("hide") : guide.classList.add("hide");
  });
};

let checkedGuidescount = 0;

//To open each guide with enter key
guideList.forEach((guide) => {
  guide.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.target.click();
    }
  });
});

//Add and remove checkmark
guideList.forEach((guide) => {
  guide.children[0].addEventListener("click", () => {
    if (guide.children[0].children[0].classList.contains("expand")) {
      guide.children[0].children[2].style.display = "block";
      guide.children[0].children[3].style.display = "block";

      guide.children[0].children[0].classList.remove("expand");

      checkedGuidescount--;
      updateProgress();
    } else {
      guide.children[0].children[2].style.display = "none";
      guide.children[0].children[3].style.display = "none";

      guide.children[0].children[0].classList.add("expand");

      checkedGuidescount++;
      updateProgress();
    }
  });
});

//Progressbar functionality
const progressThumb = document.querySelector(".progress-thumb");
const progressCount = document.querySelector(".progress span");
const updateProgress = () => {
  progressThumb.style.width = 20 * checkedGuidescount + "%";
  progressCount.textContent = checkedGuidescount;
};



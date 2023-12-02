
const aHidden = 'hidden';
const MARKED_AS_DONE = 'checkbox-done';
// the cancel button
// users that is not interested

const wrapper = document.querySelector(".wrapper");
const cancelIcon = document.querySelector(".cancel");
cancelIcon.addEventListener("click", () => {
  wrapper.classList.add("hidden");
});

// onclick, hide the empty checkbox 
// show the spinner
// 3 seconds later, show the check icon
// get the button and all the icons

const checkboxButton = document.querySelector("#item-checkbox")

//get the button 
// not completed icon and loading spinner icon
const notCompletedIcon = checkboxButton.querySelector('#not-completed-icon');

const checkboxButtonStatus = document.querySelector('#item-status');

const loadingSpinnerIcon = checkboxButton.querySelector('#spinner-icon');

const completedIcon = checkboxButton.querySelector('#completed-icon');
console.log(checkboxButton, 
    notCompletedIcon, 
    loadingSpinnerIcon, 
    completedIcon);




function handleMarkAsDone() {
    notCompletedIcon.classList.add(aHidden);

    loadingSpinnerIcon.classList.remove(aHidden);

    checkboxButton.ariaLabel = 'Loading, Please wait...'

    setTimeout(() => {
        loadingSpinnerIcon.classList.add(aHidden);
        completedIcon.classList.remove(aHidden);
        
        checkboxButton.ariaLabel = checkboxButton.ariaLabel.replace('as done',
         "as not done");

        checkboxButton.ariaLabel ='Successfully marked the box as done'

        checkboxButton.classList.add(MARKED_AS_DONE);
    }, 3000);

}

function handleMarkAsNotDone() {
   completedIcon.classList.add(aHidden);
   loadingSpinnerIcon.classList.remove(aHidden);
   
   checkboxButton.ariaLabel = 
   "Loading, Pease wait..."

   setTimeout(() => {
      loadingSpinnerIcon.classList.add(aHidden);

      notCompletedIcon.classList.remove(aHidden);
      
      checkboxButton.ariaLabel = checkboxButton.ariaLabel.replace('as done',
      "as not done");

      checkboxButton.ariaLabel = "Successfully marked your box as not done."

   }, 3000);

}


//on click, hide the empty checkbox
function itemCheckDoneOrNotDone() {
    const markedAAsDone = checkboxButton.classList.contains(MARKED_AS_DONE);

    if(markedAAsDone) {
        itemCheckDoneOrNotDone()
    }
    else {
        handleMarkAsDone();
    }
}

checkboxButton.addEventListener('click', itemCheckDoneOrNotDone);

// 3 seconds later show the check icon




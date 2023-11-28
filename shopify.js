function app() {
// the cancel button
// users that is not interested

const cancelBtn = document.getElementById("cancel-btn");
const planNotification = document.getElementById("shopify-pricing");

cancelBtn.addEventListener('click', () => {
  planNotification.style.display = 'none';
})

    // the button toggle
document.addEventListener('DOMContentLoader', function() {
        const card = document.getElementById('#item-checkbox');
        const toggleButton = document.getElementById('#button-guide') 
    
        toggleButton.addEventListener('click',  function() {
            card.classList.toggle('closed');
        })
    
    })
}

app()
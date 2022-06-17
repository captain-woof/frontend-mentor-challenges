// Handles rating submission
function handleSubmit(e){
    e.preventDefault();
    let rating = document.querySelector(".rating-input:checked").value;    
    document.querySelector(".rating-form").classList.add("submitted");
    document.querySelector(".thank-you-container").classList.add("submitted");
    document.querySelector(".thank-you-rating-indicator").innerText = `You selected ${rating} out of 5`;
}

// Add event listener to form
function addRatingSubmitListener(){
    document.querySelector(".rating-form").addEventListener("submit", handleSubmit);
    console.log("Rating submission handler attached");
}
addRatingSubmitListener();


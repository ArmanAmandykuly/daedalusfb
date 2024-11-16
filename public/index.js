// Store feedback data
let feedbackData = {
    name: '',
    number: '',
    service: ''
};

function submitFeedback() {
    const apiUrl = 'https://daedalus.kz/api'; // Replace with your API endpoint

    readData()

    // alert("READING AND FETCHING")

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedbackData)
    })
    .then(response => {
        if (response.ok) {
            console.log('Feedback successfully sent');
            // alert("SUCCESSFUL")
            return response.json()
        } else {
            // alert("ERROR")
            throw new Error('Failed to submit feedback');
        }
    })
    .catch(error => {
        alert(error)
        console.error('Error:', error);
    });
    
    const modal = document.getElementById("thankYouModal");
    modal.style.display = "block";
} 

function readData() {
    feedbackData.name = document.getElementById('input').value
    feedbackData.number = document.getElementById('input1').value
    feedbackData.service = document.getElementById('input2').value
}

function scrollDown() {
    document.getElementById("target").scrollIntoView({
        behavior: "smooth"
    });
};
  
function closeModal() {
    // Hide the modal
    const modal = document.getElementById("thankYouModal");
    modal.style.display = "none";
}
  
// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("thankYouModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
};
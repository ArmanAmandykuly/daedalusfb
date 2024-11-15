// Store feedback data
let feedbackData = {
    name: '',
    number: '',
    service: ''
};

function submitFeedback() {
    const apiUrl = 'https://daedalus.kz/api'; // Replace with your API endpoint

    readData()

    alert("READING AND FETCHING")

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
            alert("SUCCESSFUL")
        } else {
            alert("ERROR")
            throw new Error('Failed to submit feedback');
        }
    })
    .catch(error => {
        alert(error)
        console.error('Error:', error);
    });
} 

function readData() {
    feedbackData.name = document.getElementsByClassName('input').value
    feedbackData.number = document.getElementsByClassName('input1').value
    feedbackData.service = document.getElementsByClassName('input2').value
}

function scrollDown() {
    document.getElementById("target").scrollIntoView({
        behavior: "smooth"
    });
};
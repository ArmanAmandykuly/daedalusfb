// Store feedback data
let feedbackData = {
    name: '',
    number: '',
    service: ''
};

function submitFeedback() {
    const apiUrl = 'https://localhost:8000/api'; // Replace with your API endpoint

    readData()

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
        } else {
            throw new Error('Failed to submit feedback');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
} 

function readData() {
    feedbackData.name = document.getElementsByClassName('input').value
    feedbackData.number = document.getElementsByClassName('input1').value
    feedbackData.service = document.getElementsByClassName('input2').value
}
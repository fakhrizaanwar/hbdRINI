// Get all quiz box elements
const quizBoxes = document.querySelectorAll('.quiz-box');
const resultMessage = document.getElementById('result-message');

// Add event listener to each quiz box
quizBoxes.forEach(box => {
    box.addEventListener('click', function() {
        // Check if the selected box is correct
        const isCorrect = box.getAttribute('data-correct') === 'true';

        if (isCorrect) {
            resultMessage.textContent = 'BETULLL!! Ponten 100 !!!';
            resultMessage.classList.add('correct');
            // Redirect to section3/index.html after a delay
            setTimeout(() => {
                window.location.href = "../section3/index.html"; // Redirect to section3
            }, 2000); // Delay of 2 seconds before redirecting
        } else {
            resultMessage.textContent = 'Salahhhh WLEEEE !!!';
            resultMessage.classList.remove('correct');
        }
    });
});

window.addEventListener('load', () => {
  // Delay to allow transition to be visible
  setTimeout(() => {
    document.querySelector('.container').style.visibility = 'visible';
    document.querySelector('.container').style.opacity = '1';
    document.querySelector('button').style.visibility = 'visible';
    document.querySelector('button').style.opacity = '1';
  }, 500);

  // Button click event to navigate back to index.html
  document.getElementById('goBackBtn').addEventListener('click', () => {
    window.location.href = '../index.html'; // Redirect to index.html
  });
});

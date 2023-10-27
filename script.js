document.getElementById('openLetterBtn').addEventListener('click', function() {
    document.getElementById('letter').style.display = 'block'; // Show the letter
    this.style.display = 'none'; // Hide the button
});

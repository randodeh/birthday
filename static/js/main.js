document.addEventListener('DOMContentLoaded', function() {
    console.log('Script running');
    
    // Debugging code
    const iframe = document.querySelector('iframe');
    if (iframe) {
        console.log('Iframe found:', iframe);
    } else {
        console.log('No iframe found');
    }

    const heartContainer = document.getElementById('heart-container');
    const numHearts = 30; // Number of hearts to create

    for (let i = 0; i < numHearts; i++) {
        createHeart();
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        heart.style.animationDuration = `${Math.random() * 10 + 5}s`; // Random animation duration between 5-15s
        heart.style.animationDelay = `${Math.random() * 5}s`; // Random animation delay up to 5s
        heartContainer.appendChild(heart);

        // Remove the heart after animation ends
        heart.addEventListener('animationend', function() {
            heart.remove();
            createHeart(); // Create a new heart after removing the old one
        });
    }
});

function openLetter(letterId) {
    document.getElementById('overlay').style.display = 'flex';
    document.getElementById(letterId).style.display = 'block';
}

function closeLetter() {
    document.getElementById('overlay').style.display = 'none';
    const letters = document.getElementsByClassName('letter-content');
    for (let letter of letters) {
        letter.style.display = 'none';
    }
}

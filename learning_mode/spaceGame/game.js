const spaceship = document.getElementById('spaceship');
const planets = document.querySelectorAll('.planet');
let currentPlanet = 0;

const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', moveSpaceship);

spaceship.style.position = 'absolute';
spaceship.style.left = '0px'; // Initial position
spaceship.style.top = '0px';  // Initial position
spaceship.style.transition = 'left 2s ease, top 2s ease'; // 2-second smooth movement

function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
}

function moveToPlanet(planetIndex) {
    const planet = planets[planetIndex];
    const planetRect = planet.getBoundingClientRect();
    const spaceshipRect = spaceship.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let centerX = planetRect.left + planetRect.width / 2;
    let centerY = planetRect.top - spaceshipRect.height; // Position spaceship just above the planet

    // Ensure the spaceship stays within the viewport boundaries
    centerX = clamp(centerX - spaceshipRect.width / 2, 0, viewportWidth - spaceshipRect.width);
    centerY = clamp(centerY, 0, viewportHeight - spaceshipRect.height);

    // Move the spaceship to the calculated position
    spaceship.style.left = `${centerX}px`;
    spaceship.style.top = `${centerY}px`;
}

function moveSpaceship() {
    if (currentPlanet < planets.length - 1) {
        currentPlanet++; // Move to the next planet
        moveToPlanet(currentPlanet);
    } else {
        alert('YOU COMPLETED ALL THE TASKS'); // Alert when reaching the last planet
    }
}


// Initial position
moveToPlanet(currentPlanet);

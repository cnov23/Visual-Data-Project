document.addEventListener('DOMContentLoaded', () => {
  const gameContainer = document.getElementById('gameContainer');
  const pngContainer = document.getElementById('pngContainer');
  const totalDots = 800;

  // Generate random index for the red dot
  const redDotIndex = Math.floor(Math.random() * totalDots);

  // Function to create the grid of dots
  function createDots() {
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');

      // Assign the red dot to the random index
      if (i === redDotIndex) {
        dot.classList.add('red');

        // Add click event for the red dot
        dot.addEventListener('click', () => {
          console.log('Red dot clicked!'); // Debugging log
          // Hide the game container and show the PNG image
          gameContainer.style.display = 'none';
          pngContainer.style.display = 'flex'; // Show the PNG container
        });
      }

      // Add the dot to the game container
      gameContainer.appendChild(dot);
    }
  }

  // Initialize the game
  createDots();
});

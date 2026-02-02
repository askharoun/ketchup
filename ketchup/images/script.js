document.addEventListener('DOMContentLoaded', () => {
    
    const bottle = document.getElementById('ketchupBottle');
    const buyBtn = document.getElementById('buyBtn');

    // 1. Shake Effect
    // When the user clicks the bottle, add the CSS shake class
    bottle.addEventListener('click', () => {
        // Prevent double-click glitch
        if (bottle.classList.contains('shake')) return;

        bottle.classList.add('shake');
        
        // Remove the class after animation completes (0.5s)
        setTimeout(() => {
            bottle.classList.remove('shake');
        }, 500);
    });

    // 2. Buy Button Interaction
    buyBtn.addEventListener('click', () => {
        const originalText = buyBtn.innerText;
        
        buyBtn.innerText = "Added to Cart!";
        buyBtn.style.backgroundColor = "#2E7D32"; // Green color
        buyBtn.disabled = true;

        // Reset button after 2 seconds
        setTimeout(() => {
            buyBtn.innerText = originalText;
            buyBtn.style.backgroundColor = ""; // Revert to CSS default
            buyBtn.disabled = false;
        }, 2000);
    });
});
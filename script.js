//your JS code here. If required.
const squares = document.querySelectorAll('.square'); // Assuming your squares have a class 'square'

squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        squares.forEach(s => {
            if (s !== square) {
                s.style.backgroundColor = '#6F4E37'; // Change to Coffee
            }
        });
    });

    square.addEventListener('mouseleave', () => {
        squares.forEach(s => {
            s.style.backgroundColor = '#E6E6FA'; // Change back to Lavender
        });
    });
});
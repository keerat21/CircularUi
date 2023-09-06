const buttons = document.querySelectorAll('.circle-btn');
const radius = 115;  // You can adjust this to change the spread of buttons around the central button

buttons.forEach((button, index) => {
    const angle = (360 / buttons.length) * index * (Math.PI / 180);  // Convert degrees to radians
    const x = radius * Math.cos(angle) + 125;  // 125 is half of the circle container's size
    const y = radius * Math.sin(angle) + 125;
    
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

document.querySelectorAll('.circle-btn, .central-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Button ${button.innerText} clicked!`);
    });
});

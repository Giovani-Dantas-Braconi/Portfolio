const canvas = document.getElementById('pizzaCanvas');
const ctx = canvas.getContext('2d');

// Function to draw a pizza pie chart
function drawPizza() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 150;

    // Define the toppings/colors (this can be customized)
    const toppings = [
        { color: 'purple', label: 'Tomato', value: 40 },
        { color: '#00ffff', label: 'Programador', value: 60 }
    ];

    let startAngle = 0; // Start angle of the pie chart

    toppings.forEach(topping => {
        // Calculate the end angle of the slice
        const endAngle = startAngle + (Math.PI * 2 * (topping.value / 100));

        // Draw the slice (pizza topping)
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.lineTo(centerX, centerY);
        ctx.fillStyle = topping.color;
        ctx.fill();
        ctx.stroke();

        // Update startAngle for the next slice
        startAngle = endAngle;
    });
}

// Call the function to draw the pizza
drawPizza();

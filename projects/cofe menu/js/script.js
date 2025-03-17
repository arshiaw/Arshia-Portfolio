const canvas = document.getElementById('chessCanvas');
const ctx = canvas.getContext('2d');
const squareSize = 50; // Size of each square
let squares = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeSquares();
    drawChessboard();
}

function initializeSquares() {
    const cols = Math.floor(canvas.width / squareSize);
    const rows = Math.floor(canvas.height / squareSize);

    squares = [];
    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            squares.push({
                x: col * squareSize,
                y: row * squareSize,
                state: 'inactive', // 'inactive', 'activating', 'active', 'deactivating'
                timer: Math.random() * 5000, // Random delay up to 5 seconds
                alpha: 0
            });
        }
    }
}

function drawChessboard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    squares.forEach(square => {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.strokeRect(square.x, square.y, squareSize, squareSize);

        if (square.state !== 'inactive') {
            ctx.save();
            ctx.shadowColor = 'rgba(255, 0, 0, 1)';
            ctx.shadowBlur = 20;
            ctx.fillStyle = `rgba(255, 0, 0, ${square.alpha})`;
            ctx.fillRect(square.x, square.y, squareSize, squareSize);
            ctx.restore();
        }
    });
}

function updateSquares(deltaTime) {
    squares.forEach(square => {
        switch (square.state) {
            case 'inactive':
                square.timer -= deltaTime;
                if (square.timer <= 0) {
                    square.state = 'activating';
                    square.timer = 2000; // 2 seconds to activate
                }
                break;
            case 'activating':
                square.alpha += deltaTime / 1500; // سرعت افزایش شفافیت رنگ
                if (square.alpha >= 1) {
                    square.alpha = 1;
                    square.state = 'active';
                    square.timer = 1500; // Stay active for 1.5 seconds
                }
                break;
            case 'active':
                square.timer -= deltaTime;
                if (square.timer <= 0) {
                    square.state = 'deactivating';
                    square.timer = 2000; // 2 seconds to deactivate
                }
                break;
            case 'deactivating':
                square.alpha -= deltaTime / 2500; // سرعت کاهش شفافیت رنگ
                if (square.alpha <= 0) {
                    square.alpha = 0;
                    square.state = 'inactive';
                    square.timer = Math.random() * 7000; // Reset timer with random delay
                }
                break;
        }
    });
}

let lastTimestamp = 0;
function animate(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const deltaTime = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    updateSquares(deltaTime);
    drawChessboard();

    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    resizeCanvas();
    drawChessboard();
});

resizeCanvas();
animate(0);
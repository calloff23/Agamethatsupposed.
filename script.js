let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');

let gameRunning = false;
let player = {
    x: 50,
    y: 300,
    width: 50,
    height: 50,
    speed: 5,
    velocityY: 0,
    gravity: 1,
    jumping: false,
};

let keys = {};

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startGame() {
    gameRunning = true;
    document.getElementById('menu').style.display = 'none';
    gameLoop();
}

function gameLoop() {
    if (!gameRunning) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    player.velocityY += player.gravity;
    player.y += player.velocityY;

    if (player.y >= canvas.height - player.height) {
        player.y = canvas.height - player.height;
        player.velocityY = 0;
        player.jumping = false;
    }

    if (keys['ArrowUp'] && !player.jumping) {
        player.velocityY = -15;
        player.jumping = true;
    }

    if (keys['ArrowDown']) {
        player.height = 30; // Sliding
    } else {
        player.height = 50;
    }

    ctx.fillStyle = 'green';
    ctx.fillRect(player.x, player.y, player.width, player.height);

    requestAnimationFrame(gameLoop);
}

window.addEventListener('keydown', function(e) {
    keys[e.key] = true;
});

window.addEventListener('keyup', function(e) {
    keys[e.key] = false;
});

function openSettings() {
    document.getElementById('settings').style.display = 'block';
}

function closeSettings() {
    document.getElementById('settings').style.display = 'none';
}

function openInfo() {
    document.getElementById('info').style.display = 'block';
}

function closeInfo() {
    document.getElementById('info').style.display = 'none';
}

function openPolicy() {
    document.getElementById('policy').style.display = 'block';
}

function closePolicy() {
    document.getElementById('policy').style.display = 'none';
}

function openCopyright() {
    document.getElementById('copyright').style.display = 'block';
}

function closeCopyright() {
    document.getElementById('copyright').style.display = 'none';
}

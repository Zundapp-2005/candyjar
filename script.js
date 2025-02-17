const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiParticles = [];
const confettiCount = 300;
const colors = ['#fe4181', '#42fdc6', '#d8c3fe', '#fdf8da', '#d7f6f9'];

class Confetti {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 10 + 5;
        this.speed = Math.random() * 3 + 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.angle = Math.random() * 360;
        this.spin = Math.random() * 0.2 - 0.1;
    }

    update() {
        this.y += this.speed;
        this.angle += this.spin;
        if (this.y > canvas.height) {
            this.y = -this.size;
        }
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        ctx.fillRect(0, 0, this.size, this.size);
        ctx.restore();
    }
}

function createConfetti() {
    for (let i = 0; i < confettiCount; i++) {
        confettiParticles.push(new Confetti());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles.forEach(confetti => {
        confetti.update();
        confetti.draw();
    });
    requestAnimationFrame(animate);
}

createConfetti();
animate();


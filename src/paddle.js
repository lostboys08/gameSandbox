export default class Paddle {

    constructor(gameWidth, gameHeight) {

        this.width = 150;

        this.height = 20;

        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.heght - 10
        };
    }

    draw(ctx) {
        ctx.fillStyle = '#0f0';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        //
    }
}
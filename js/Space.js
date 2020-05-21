class Space {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.space = `space-${x}-${y}`;
        this.token = null;
    }
}
class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }

    /** 
     * Creates two player objects
     * @return  {Array}    An array of two Player objects.
     */
    createPlayers() {
        const player1 = new Player("Player 1", 1, "#e15258", true);
        const player2 = new Player("Player 2", 2, "#e59a13");
        return [player1, player2];
    }
}
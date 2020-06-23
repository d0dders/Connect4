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

    /**
     * Initialize game
     */
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    get activePlayer() {
        return this.players.find(player => player.active);
    }

    /**
    * Branches code, depending on what key player presses
    * @param   {Object}    e - Keydown event object
    */
    handleKeydown(e) {
        if (this.ready = false) {return};

        if (e.key == 'ArrowLeft') {
            this.activePlayer.activeToken.moveLeft();
        } else if (e.key == 'ArrowRight') {
            this.activePlayer.activeToken.moveRight(this.board.columns);
        } else if (e.key == 'ArrowDown') {
            console.log("Token Down");
        }
    }
}
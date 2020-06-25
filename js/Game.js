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

    playToken() {
        const column = this.activePlayer.activeToken.columnLocation;
        const emptySpace = this.board.spaces[column].slice().reverse().find(space => space.token === null);
        console.log(emptySpace);
        const game = this;
        const token =  this.activePlayer.activeToken;
        if (emptySpace != null) {
            this.ready = false;
            this.activePlayer.activeToken.drop(emptySpace, () => {game.updateGameState(token, emptySpace)});
        }
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
            this.playToken();
        }
    }

    /** 
    * Switches active player. 
    */
    switchPlayers() {
        this.players.forEach(player => {
            player.active = !player.active;
        });
    }


    /** 
     * Checks if there a winner on the board after each token drop.
     * @param   {Object}    Targeted space for dropped token.
     * @return  {boolean}   Boolean value indicating whether the game has been won (true) or not (false)
     */
    checkForWin(target){
        const owner = target.token.owner;
        let win = false;

        // vertical
        for (let x = 0; x < this.board.columns; x++ ){
            for (let y = 0; y < this.board.rows - 3; y++){
                if (this.board.spaces[x][y].owner === owner && 
                    this.board.spaces[x][y+1].owner === owner && 
                    this.board.spaces[x][y+2].owner === owner && 
                    this.board.spaces[x][y+3].owner === owner) {
                        win = true;
                }           
            }
        }

        // horizontal
        for (let x = 0; x < this.board.columns - 3; x++ ){
            for (let y = 0; y < this.board.rows; y++){
                if (this.board.spaces[x][y].owner === owner && 
                    this.board.spaces[x+1][y].owner === owner && 
                    this.board.spaces[x+2][y].owner === owner && 
                    this.board.spaces[x+3][y].owner === owner) {
                        win = true;
                }           
            }
        }

        // diagonal
        for (let x = 3; x < this.board.columns; x++ ){
            for (let y = 0; y < this.board.rows - 3; y++){
                if (this.board.spaces[x][y].owner === owner && 
                    this.board.spaces[x-1][y+1].owner === owner && 
                    this.board.spaces[x-2][y+2].owner === owner && 
                    this.board.spaces[x-3][y+3].owner === owner) {
                        win = true;
                }           
            }
        }

        // diagonal
        for (let x = 3; x < this.board.columns; x++ ){
            for (let y = 3; y < this.board.rows; y++){
                if (this.board.spaces[x][y].owner === owner && 
                    this.board.spaces[x-1][y-1].owner === owner && 
                    this.board.spaces[x-2][y-2].owner === owner && 
                    this.board.spaces[x-3][y-3].owner === owner) {
                        win = true;
                }           
            }
        }

        return win;
    }

    /** 
    * Displays game over message.
    * @param {string} message - Game over message.      
    */
    gameOver(message) {
        const gameover = document.querySelector('#game-over');
        gameover.style.display = 'block';
        gameover.textContent = message;
    }

     /** 
    * Updates game state after token is dropped. 
    * @param   {Object}  token  -  The token that's being dropped.
    * @param   {Object}  target -  Targeted space for dropped token.
    */
    updateGameState(token, target) {
        target.mark(token);
        if (this.checkForWin(target)) {
            this.gameOver(`${target.owner.name} wins!`);
        } else {
            this.switchPlayers();
            if(!this.activePlayer.checkTokens()) {
                this.gameOver('No more tokens!');
            } else {
                this.activePlayer.activeToken.drawHTMLToken();
                this.ready = true;
            }
        }
    }



}
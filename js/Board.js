class Board {
    constructor() {
        this.columns = 7;
        this.rows = 6;
        this.spaces = this.createSpaces();
    }


    /**
     * Generates 2D array of spaces. 
     * @return  {Array}     An array of space objects
     */
    createSpaces() {
        const spaces = [];
        for(let x = 0; x < this.columns; x++) {
            const column = []
            for(let y = 0; y < this.rows; y++) {
                column.push(new Space(x, y));
            }
            spaces.push(column);
        }

        return spaces;
    }

    /**
     * Draws all the spaces on the board
     */
    drawHTMLBoard() {
        this.spaces.forEach(column => column.forEach(space => space.drawSVGSpace()));
    }
}
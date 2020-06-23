class Token {

    constructor(owner, id) {
        this.owner = owner;
        this.id = `token-${id}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
    }

    /**
     * Draw token
     */
    drawHTMLToken() {
        const tokenDiv = document.createElement("DIV");
        const boardUnderlay = document.querySelector('#game-board-underlay');
        boardUnderlay.append(tokenDiv);
        tokenDiv.setAttribute("id", this.id);
        tokenDiv.setAttribute("class", "token");
        tokenDiv.style.backgroundColor = this.owner.color;
    }

    get htmlToken() {
        return document.querySelector(`#${this.id}`);
    }

    /** 
    * Gets left offset of html element.
    * @return  {number}   Left offset of token object's htmlToken.
    */
    get offsetLeft() {
        return this.htmlToken.offsetLeft;
    }

    /** 
    * Moves html token one column to left.
    */
    moveLeft() {
        if (this.columnLocation > 0) {
            this.htmlToken.style.left = this.offsetLeft - 76;
            this.columnLocation -= 1;
        }
    }

    moveRight() {
        if (this.columnLocation < 6) {
            this.htmlToken.style.left = this.offsetLeft + 76;
            this.columnLocation += 1;
        }
    }
}
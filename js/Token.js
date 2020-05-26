class Token {

    constructor(owner, id) {
        this.owner = owner;
        this.id = `token-${id}-${owner.id}`;
        this.dropped = false;
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
        return querySelector(`#${this.id}`);
    }
}
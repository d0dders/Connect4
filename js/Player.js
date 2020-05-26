class Player {
    constructor(name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    /**
    * Creates token objects for player
    * @param   {integer}   num - Number of token objects to be created
    * @returns  {array}     tokens - an arary of new token objects
    */
    createTokens(num) {
        const tokens = []
        for(let i = 0; i < num; i++) {
            tokens.push(new Token(this, i));
        }

        return tokens;
    }
    
    get unusedTokens() {
        return this.tokens.filter(token => token.dropped = true);
    }

    get activeToken() {
        return this.unusedTokens[0];
    }
}
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
            const token = new Token(this, i);
            tokens.push(token);
        }

        return tokens;
    }
    
    get unusedTokens() {
        console.log(this.tokens);
        return this.tokens.filter(token => token.dropped == false);
    }

    get activeToken() {
        return this.unusedTokens[0];
    }

    checkTokens() {
        return this.tokens.length > 0 ? true : false;    
    }
}
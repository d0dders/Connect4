class Token {

    constructor(owner, id) {
        this.owner;
        this.id = `token-${id}-${owner.id}`;
        this.dropped = false;
    }
}
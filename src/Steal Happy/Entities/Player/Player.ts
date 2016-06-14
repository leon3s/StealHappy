class Player extends Entity {

    constructor() {
        super(0, 0, 0, 0, "");
    }

    public interact(): boolean {
        return false;
    }
}
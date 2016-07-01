class Player extends Entity {

    private name: string;

    constructor() {
        super(0, 0, 0, 0, "");
    }

    /**
     * Retourne nom de du joueur
     */
    public Name(): string {
        return name;
    }

    /**
     * Permet de choisir le nom du joueur
     **/
    public setName(name: string): void {
        this.name = name;
    }



    public interact(): boolean {
        return false;
    }
}
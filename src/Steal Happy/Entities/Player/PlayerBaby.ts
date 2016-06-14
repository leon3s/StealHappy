/**
 * Implémentation concrète de player, pour l'age bébé
 */
class PlayerBaby extends Player {

    constructor() {
        super();
        this.setSprite(new Sprite(this.X(), this.Y(), 205, 205, "Assets/Entities/Player/Baby.png"));
        this.getSprite().setOrigin(64, 64);
        this.setSize(78, 128);
    }

}
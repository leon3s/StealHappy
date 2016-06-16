/**
 * Implémentation concrète de player, pour l'age bébé
 */
class PlayerBaby extends Player {

    constructor() {
        super();
        this.setSprite(new Sprite(this.X(), this.Y(), 205, 205, "Assets/Entities/Player/Baby.png"));
        this.getSprite().setOrigin(64, 64);
        this.setSize(78, 128);
        this.sprite.setFrameSpeed(0.1);
    }

    /**
     * Actions à effectuer lors du clic sur le personnage
     */
    public interact(): boolean {
        if (super.interact() == true)
            return true;
        FactoryScene.instance.addEntity(FactoryPlayer.CreatePlayer(EnumPlayerAge.Baby, Greeter.Width / 2, 0));
        if (this.VelocityY() == 0)
            this.setVelocity(this.VelocityX(), this.VelocityY() - 100);
        return true;
    }

}
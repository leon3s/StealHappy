/**
 * Décorateur concret pour player, implémente le comportement d'un bébé
 */
class PlayerBaby extends PlayerAge {

    constructor(player: Player) {
        super(player);
        this.player = player;
        this.player.setSprite(new Sprite(this.player.X(), this.player.Y(), 205, 205, "Assets/Entities/Player/Baby.png"));
        this.player.getSprite().setOrigin(64, 64);
        this.player.setSize(78, 128);
    }

}
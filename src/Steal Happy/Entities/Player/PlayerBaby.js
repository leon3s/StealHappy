var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Implémentation concrète de player, pour l'age bébé
 */
var PlayerBaby = (function (_super) {
    __extends(PlayerBaby, _super);
    function PlayerBaby() {
        _super.call(this);
        this.setSprite(new Sprite(this.X(), this.Y(), 205, 205, "Assets/Entities/Player/Baby.png"));
        this.getSprite().setOrigin(64, 64);
        this.setSize(78, 128);
        this.sprite.setFrameSpeed(0.1);
    }
    /**
     * Actions à effectuer lors du clic sur le personnage
     */
    PlayerBaby.prototype.interact = function () {
        if (_super.prototype.interact.call(this) == true)
            return true;
        FactoryScene.instance.addEntity(FactoryPlayer.CreatePlayer(EnumPlayerAge.Baby, Greeter.Width / 2, 0));
        if (this.VelocityY() == 0)
            this.setVelocity(this.VelocityX(), this.VelocityY() - 100);
        return true;
    };
    return PlayerBaby;
}(Player));
//# sourceMappingURL=PlayerBaby.js.map
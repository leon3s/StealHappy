var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Décorateur concret pour player, implémente le comportement d'un bébé
 */
var PlayerBaby = (function (_super) {
    __extends(PlayerBaby, _super);
    function PlayerBaby(player) {
        _super.call(this, player);
        this.player = player;
        this.player.setSprite(new Sprite(this.player.X(), this.player.Y(), 205, 205, "Assets/Entities/Player/Baby.png"));
        this.player.getSprite().setOrigin(64, 64);
        this.player.setSize(78, 128);
    }
    return PlayerBaby;
}(PlayerAge));
//# sourceMappingURL=PlayerBaby.js.map
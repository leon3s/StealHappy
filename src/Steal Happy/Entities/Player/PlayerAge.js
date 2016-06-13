var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Décorateur abstrait pour player, permet de décliner des ages tout en restant extensible
 */
var PlayerAge = (function (_super) {
    __extends(PlayerAge, _super);
    function PlayerAge(player) {
        _super.call(this);
        this.player = player;
    }
    /**
     * Met à jour l'objet décoré
     */
    PlayerAge.prototype.update = function () {
        this.player.update();
    };
    /**
     * Dessine l'objet décoré
     */
    PlayerAge.prototype.draw = function () {
        this.player.draw();
    };
    PlayerAge.prototype.setVelocity = function (x, y) {
        this.player.setVelocity(x, y);
    };
    PlayerAge.prototype.VelocityX = function () {
        return this.player.VelocityX();
    };
    PlayerAge.prototype.VelocityY = function () {
        return this.player.VelocityY();
    };
    PlayerAge.prototype.setZ = function (z) {
        this.player.setZ(z);
    };
    PlayerAge.prototype.setPosition = function (x, y) {
        this.player.setPosition(x, y);
    };
    PlayerAge.prototype.X = function () {
        return this.player.X();
    };
    PlayerAge.prototype.Y = function () {
        return this.player.Y();
    };
    PlayerAge.prototype.Width = function () {
        return this.player.Width();
    };
    PlayerAge.prototype.Height = function () {
        return this.player.Height();
    };
    PlayerAge.prototype.setSize = function (w, h) {
        this.player.setSize(w, h);
    };
    PlayerAge.prototype.getSprite = function () {
        return this.player.getSprite();
    };
    PlayerAge.prototype.setSprite = function (sprite) {
        this.player.setSprite(sprite);
    };
    PlayerAge.prototype.bounceX = function () {
        this.player.bounceX();
    };
    PlayerAge.prototype.bounceY = function () {
        this.player.bounceY();
    };
    return PlayerAge;
}(Player));
//# sourceMappingURL=PlayerAge.js.map
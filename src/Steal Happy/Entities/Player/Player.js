var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        _super.call(this, 0, 0, 0, 0, "");
    }
    /**
     * Retourne nom de du joueur
     */
    Player.prototype.Name = function () {
        return name;
    };
    /**
     * Permet de choisir le nom du joueur
     **/
    Player.prototype.setName = function (name) {
        this.name = name;
    };
    Player.prototype.interact = function () {
        return false;
    };
    return Player;
}(Entity));
//# sourceMappingURL=Player.js.map
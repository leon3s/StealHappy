var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SceneLivingRoom = (function (_super) {
    __extends(SceneLivingRoom, _super);
    function SceneLivingRoom() {
        _super.call(this);
        //Image de fond
        this.background = null;
        this.collider = new Collider(SceneLivingRoom.Gravity, SceneLivingRoom.Ground);
    }
    /**
     * Met à jour la scene
     */
    SceneLivingRoom.prototype.update = function () {
        _super.prototype.update.call(this);
        this.collider.do(this.entities);
    };
    /**
     * Dessine la scene
     */
    SceneLivingRoom.prototype.draw = function () {
        this.background.draw(Greeter.Context);
        _super.prototype.draw.call(this);
    };
    /**
     * Action réalisée lors de l'entrée dans la scene
     */
    SceneLivingRoom.prototype.onEnter = function () {
        if (this.background == null)
            this.background = new Sprite(0, 0, Greeter.Width, Greeter.Height, "Assets/Background/Bedroom.png");
        else
            this.background.load();
        //instanciation du joueur
        //TODO: revoir l'instanciation en fonction de l'état réel 
        this.addEntity(FactoryPlayer.CreatePlayer(EnumPlayerAge.Baby, Greeter.Width / 2 + 2, 0));
    };
    /**
     * Action réalisée lors de la sortie de la scene
     */
    SceneLivingRoom.prototype.onLeave = function () {
        this.background.unload();
    };
    /**
     * Gère les interractions avec les elements
     * @param x position x du clic
     * @param y position y du clic
     */
    SceneLivingRoom.prototype.interact = function (x, y) {
        for (var i = 0; i != this.entities.length; i++) {
            var entity = this.entities[i];
            if (entity != null && entity.getBox().contains(new Point(x, y)) && entity.interact() == true)
                break;
        }
    };
    //Importance de la gravité
    SceneLivingRoom.Gravity = 4;
    //Position du sol
    SceneLivingRoom.Ground = 700;
    return SceneLivingRoom;
}(Scene));
//# sourceMappingURL=SceneLivingRoom.js.map
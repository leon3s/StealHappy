var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SceneLivingRoom = (function (_super) {
    __extends(SceneLivingRoom, _super);
    function SceneLivingRoom() {
        _super.apply(this, arguments);
        //Image de fond
        this.background = null;
    }
    /**
     * Met à jour la scene
     */
    SceneLivingRoom.prototype.update = function () {
        _super.prototype.update.call(this);
        this.physics();
    };
    /**
     * Gère la physique dans la scene
     */
    SceneLivingRoom.prototype.physics = function () {
        this.entities.forEach(function (entity) {
            //Gestion de la gravité
            if (entity.Y() + entity.Height() >= SceneLivingRoom.Ground && entity.VelocityY() != 0)
                entity.bounceY();
            else
                entity.setVelocity(entity.VelocityX(), entity.VelocityY() + SceneLivingRoom.Gravity);
        });
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
        _super.prototype.onEnter.call(this);
        if (this.background == null)
            this.background = new Sprite(0, 0, Greeter.Width, Greeter.Height, "Assets/Background/Bedroom.png");
        else
            this.background.load();
        //instanciation du joueur
        //TODO: revoir l'instanciation en fonction de l'état réel 
        this.addEntity(FactoryPlayer.CreatePlayer(EnumPlayerAge.Baby));
    };
    /**
     * Action réalisée lors de la sortie de la scene
     */
    SceneLivingRoom.prototype.onLeave = function () {
        _super.prototype.onLeave.call(this);
        this.background.unload();
    };
    //Importance de la gravité
    SceneLivingRoom.Gravity = 0.6;
    //Position du sol
    SceneLivingRoom.Ground = 700;
    return SceneLivingRoom;
}(Scene));
//# sourceMappingURL=SceneLivingRoom.js.map
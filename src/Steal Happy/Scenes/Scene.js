var Scene = (function () {
    function Scene() {
        this.entities = new Array();
    }
    Scene.prototype.addEntity = function (entity) {
        if (entity != null)
            this.entities.push(entity);
    };
    Scene.prototype.removeEntity = function (entity) {
        for (var x; x != this.entities.length; x++) {
            if (this.entities[x] == entity) {
                this.entities.splice(x, 1);
            }
        }
    };
    Scene.prototype.startTransition = function (dir, callback) {
        if (this.transition == null) {
            this.transition = new Transition(dir, callback);
        }
    };
    Scene.prototype.update = function () {
        if (this.transition != null)
            this.transition = this.transition.update();
        this.entities.forEach(function (entity) {
            entity.update();
        });
    };
    Scene.prototype.draw = function () {
        if (this.transition != null)
            this.transition.draw(Greeter.Context);
        this.entities.forEach(function (entity) {
            entity.draw();
        });
    };
    //Doit être appelé lors de l'entrée dans la scene
    Scene.prototype.onEnter = function () {
    };
    //Doit être appelé lors de la sortie de la scene
    Scene.prototype.onLeave = function () {
    };
    return Scene;
}());
//# sourceMappingURL=Scene.js.map
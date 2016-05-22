var Scene = (function () {
    function Scene() {
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
    Scene.prototype.update = function () {
        this.entities.forEach(function (entity) {
            entity.update();
        });
    };
    Scene.prototype.draw = function () {
        this.entities.forEach(function (entity) {
            entity.draw();
        });
    };
    return Scene;
}());
//# sourceMappingURL=Scene.js.map
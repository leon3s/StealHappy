var Scene = (function () {
    function Scene() {
        this.entities = new Array();
    }
    /**
     * Ajoute une nouvelle entité dans la scene
     * @param entity entité à ajouter
     */
    Scene.prototype.addEntity = function (entity) {
        if (entity != null)
            this.entities.push(entity);
    };
    /**
     * Supprime une entité de la scene
     * @param entity entité à supprimer
     */
    Scene.prototype.removeEntity = function (entity) {
        for (var x; x != this.entities.length; x++) {
            if (this.entities[x] == entity) {
                this.entities.splice(x, 1);
            }
        }
    };
    /**
     * Démare une transition pour changer de salle
     * @param dir direction de la transition
     * @param callback action à réalisé en milieu de parcours de la transition
     */
    Scene.prototype.startTransition = function (dir, callback) {
        if (this.transition == null) {
            this.transition = new Transition(dir, callback);
        }
    };
    /**
     * Met à jour la scene
     */
    Scene.prototype.update = function () {
        if (this.transition != null)
            this.transition = this.transition.update();
        this.entities.forEach(function (entity) {
            entity.update();
        });
    };
    /**
     * Dessine la scene
     */
    Scene.prototype.draw = function () {
        if (this.transition != null)
            this.transition.draw(Greeter.Context);
        this.entities.forEach(function (entity) {
            entity.draw();
        });
    };
    return Scene;
}());
//# sourceMappingURL=Scene.js.map
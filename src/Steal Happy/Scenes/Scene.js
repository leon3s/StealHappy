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
        this.entities.sort(function (a, b) {
            if (a.Z() > b.Z())
                return 1;
            else if (a.Z() < b.Z())
                return -1;
            else
                return 0;
        });
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
        this.organize();
        this.entities.forEach(function (entity) {
            entity.update();
        });
    };
    Scene.prototype.organize = function () {
        var index;
        //on selectionne une entité au hasard
        index = Math.round(Math.random() * (this.entities.length - 1) + 1);
        var current;
        current = this.entities[index];
        if (current == null)
            return;
        if (current.Z() < this.entities[index - 1].Z()) {
            this.entities.slice(index, 1);
            this.addEntity(current);
        }
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
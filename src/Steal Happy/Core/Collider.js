var Collider = (function () {
    function Collider() {
    }
    /**
     * Gère les collisions entre plusieurs entités
     * @param entities Liste des entités à gérer
     */
    Collider.prototype.do = function (entities) {
        var vectors = new Array();
        entities.forEach(function (entity) {
            entities.forEach(function (other) {
                if (this.collid(entity, other))
                    this.calculatePosition(entity, other);
            });
        });
    };
    /**
     * Reéalise le teste de collision entre deux entités
     * @param current
     * @param other
     */
    Collider.prototype.collid = function (current, other) {
        var current_box = current.getBox();
        var current_vector = current.getVector();
        var other_box = other.getBox();
        var other_vector = other.getVector();
        current_vector.multiply(0.03);
        other_vector.multiply(0.03);
        current_box.apply(current_vector);
        other_box.apply(other_vector);
        return current_box.intersects(other_box);
    };
    /**
     * Change les paramètres des entités afin d'éviter ou de corriger une collision
     * @param current première entité
     * @param other seconde entité
     */
    Collider.prototype.calculatePosition = function (current, other) {
    };
    return Collider;
}());
//# sourceMappingURL=Collider.js.map
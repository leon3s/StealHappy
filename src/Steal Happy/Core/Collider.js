var Collider = (function () {
    function Collider(gravity, ground) {
        this.Gravity = 0;
        this.Ground = 0;
        this.Gravity = gravity;
        this.Ground = ground;
    }
    /**
     * Gère les collisions entre plusieurs entités de manière prédictive
     * @param entities Liste des entités à gérer
     */
    Collider.prototype.do = function (entities) {
        var self = this;
        entities.forEach(function (entity) {
            //gestion de la gravité
            if (entity.gravity && entity.Y() + entity.Height() < self.Ground) {
                entity.setVelocity(entity.getVector().X(), entity.getVector().Y() + (self.Ground * 0.03));
            }
            else if (entity.gravity) {
                entity.setPosition(entity.getBox().X(), self.Ground - entity.Height());
                entity.bounceY();
                entity.setVelocity(entity.getVector().X() / 2, entity.getVector().Y());
            }
            //gestion des collision entre entités
            entities.forEach(function (other) {
                if (entity != other && self.collid(entity, other)) {
                    console.log("Collid");
                    self.calculatePosition(entity, other);
                }
            });
        });
    };
    /**
     * Reéalise le teste de collision entre deux entités de manière prédictive
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
        //Récupération des valeurs dans le futur 
        var current_box = current.getBox();
        var current_vector = current.getVector();
        var other_box = other.getBox();
        var other_vector = other.getVector();
        current_vector.multiply(0.03);
        other_vector.multiply(0.03);
        current_box.apply(current_vector);
        other_box.apply(other_vector);
        //Détermination de la pénétration
        var rect = other_box.caculatePenetration(current_box);
        var vx = current.getVector().X();
        var vy = current.getVector().Y();
        console.log(current);
        console.log(rect);
        //détermination des valeurs de gauche 
        if (rect.X() < 0 && Math.abs(rect.X()) < Math.abs(rect.Y())) {
            vx = current.getVector().X() - Math.abs(rect.X()) - 1;
        }
        //détermination des valeurs du haut
        if (rect.Y() < 0) {
            vy = current.getVector().Y() - Math.abs(rect.Y() / 0.03);
        }
        //détermination des valeurs de droite
        if (rect.Width() < 0 && Math.abs(rect.Width()) < Math.abs(rect.Y())) {
            vx = current.getVector().X() + Math.abs(rect.Width()) + 1;
        }
        //détermination des valeurs du bas
        if (rect.Height() < 0) {
            vy = current.getVector().Y() - Math.abs(rect.Height() / 0.03);
        }
        current.setVelocity(vx, vy);
    };
    return Collider;
}());
//# sourceMappingURL=Collider.js.map
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
            entity.setOnCollid(false);
            //gestion des collision entre entités
            entities.forEach(function (other) {
                if (entity != other && self.collid(entity, other)) {
                    entity.setOnCollid(true);
                    self.calculatePosition(entity, other);
                }
            });
            self.gravity(entity);
        });
    };
    Collider.prototype.gravity = function (entity) {
        //gestion de la gravité
        if (entity.gravity && entity.Y() + entity.Height() < this.Ground) {
            if (entity.OnCollid() == false)
                entity.setVelocity(entity.getVector().X(), entity.getVector().Y() + (this.Ground * 0.03));
        }
        else if (entity.gravity) {
            entity.setPosition(entity.getBox().X(), this.Ground - entity.Height());
            entity.bounceY();
            entity.setVelocity(entity.getVector().X() / 2, entity.getVector().Y());
        }
    };
    /**
     * Reéalise le teste de collision entre deux entités de manière prédictive
     * @param current
     * @param other
     */
    Collider.prototype.collid = function (current, other) {
        if (current.Collision() == false || other.Collision() == false)
            return false;
        if (current.Z() != other.Z())
            return false;
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
            vx = rect.X() - 1;
        }
        //détermination des valeurs du haut
        if (rect.Y() < 0) {
            vy = current.getVector().Y();
            if (vy > 0)
                vy = 0;
            vy += -Math.abs(rect.Y());
        }
        //détermination des valeurs de droite
        if (rect.Width() < 0 && Math.abs(rect.Width()) < Math.abs(rect.Y())) {
            vx = Math.abs(rect.Width()) + 1;
        }
        //détermination des valeurs du bas
        if (rect.Height() < 0) {
            vy = current.getVector().Y();
            if (vy < 0)
                vy = 0;
            vy += Math.abs(rect.Height()) + 1;
        }
        current.setVelocity(vx, vy);
    };
    return Collider;
}());
//# sourceMappingURL=Collider.js.map
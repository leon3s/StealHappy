﻿class Collider {

	/**
	 * Gère les collisions entre plusieurs entités
	 * @param entities Liste des entités à gérer
	 */
    public do(entities: any): void {
        var vectors: Array<Entity> = new Array();
        entities.forEach(function (entity) {
            entities.forEach(function (other) {
                if (this.collid(entity, other))
                    this.calculatePosition(entity, other);
            });
        });
    }

    /**
     * Reéalise le teste de collision entre deux entités
     * @param current
     * @param other
     */
    private collid(current: Entity, other: Entity): boolean {
        var current_box: Rect = current.getBox();
        var current_vector: Vector = current.getVector();
        var other_box: Rect = other.getBox();
        var other_vector: Vector = other.getVector();

        current_vector.multiply(0.03);
        other_vector.multiply(0.03);

        current_box.apply(current_vector);
        other_box.apply(other_vector);

        return current_box.intersects(other_box);
    }

    /**
     * Change les paramètres des entités afin d'éviter ou de corriger une collision
     * @param current première entité
     * @param other seconde entité
     */
    private calculatePosition(current: Entity, other: Entity) {

    }
}
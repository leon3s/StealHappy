class Scene {
    protected entities: Array<Entity>;

    public addEntity(entity: Entity): void {
        if(entity != null)
            this.entities.push(entity);
    }

    public removeEntity(entity: Entity): void {
        for (var x: number; x != this.entities.length; x++) {
            if (this.entities[x] == entity) {
                this.entities.splice(x, 1);
            }
        }
    }

    public update() : void
    {
        this.entities.forEach(function (entity) {
            entity.update();
        });
    }

    public draw(): void {
        this.entities.forEach(function (entity) {
            entity.draw();
        });
    }
}
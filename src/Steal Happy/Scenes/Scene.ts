class Scene {
    protected entities: Array<Entity>;
    protected transition: Transition;

    constructor() {
        this.entities = new Array<Entity>();
    }

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

    public startTransition(dir: Transition_Direction, callback : any) {
        if (this.transition == null) {
            this.transition = new Transition(dir, callback);
        }
    }

    public update() : void
    {
        if (this.transition != null)
            this.transition = this.transition.update();
        this.entities.forEach(function (entity) {
            entity.update();
        });
    }

    public draw(): void {
        if (this.transition != null)
            this.transition.draw(Greeter.Context);
        this.entities.forEach(function (entity) {
            entity.draw();
        });
    }

    //Doit être appelé lors de l'entrée dans la scene
    public onEnter(): void {

    }

    //Doit être appelé lors de la sortie de la scene
    public onLeave(): void {

    }
}
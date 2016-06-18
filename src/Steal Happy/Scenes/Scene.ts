abstract class Scene {
    protected entities: Array<Entity>;
    protected transition: Transition;


    constructor() {
        this.entities = new Array<Entity>();
    }

    /**
     * Ajoute une nouvelle entité dans la scene
     * @param entity entité à ajouter
     */
    public addEntity(entity: Entity): void {
        if(entity != null)
            this.entities.push(entity);
    }

    /**
     * Supprime une entité de la scene
     * @param entity entité à supprimer
     */
    public removeEntity(entity: Entity): void {
        for (var x: number; x != this.entities.length; x++) {
            if (this.entities[x] == entity) {
                this.entities.splice(x, 1);
            }
        }
    }

    /**
     * Démare une transition pour changer de salle
     * @param dir direction de la transition
     * @param callback action à réalisé en milieu de parcours de la transition
     */
    public startTransition(dir: Transition_Direction, callback : any) {
        if (this.transition == null) {
            this.transition = new Transition(dir, callback);
        }
    }

    /**
     * Met à jour la scene
     */
    public update() : void
    {
        if (this.transition != null)
            this.transition = this.transition.update();
        this.entities.forEach(function (entity) {
            entity.update();
        });
    }

    /**
     * Dessine la scene
     */
    public draw(): void {
        if (this.transition != null)
            this.transition.draw(Greeter.Context);
        this.entities.forEach(function (entity) {
            entity.draw();
        });
    }

    //Doit être appelé lors de l'entrée dans la scene
    public abstract onEnter(): void;

    //Doit être appelé lors de la sortie de la scene
    public abstract onLeave(): void;

    /**
     * Gère l'action sur les clics
     * @param x position x du clic
     * @param y position y du clic
     */
    public abstract interact(x:number, y :number): void;


}
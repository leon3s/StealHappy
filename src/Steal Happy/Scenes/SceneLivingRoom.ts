class SceneLivingRoom extends Scene {

    //Importance de la gravité
    private static Gravity: number = 4;
    //Position du sol
    private static Ground: number = 700;

    //Image de fond
    private background : Sprite = null;

    //Objet de gestion de collisions
    private collider : Collider;


    constructor() 
    {
    	super();
    	this.collider = new Collider();
    }

    /**
     * Met à jour la scene
     */
    public update(): void {
        super.update();
        this.collider.do(this.entities);
    }

    /**
     * Dessine la scene
     */
    public draw(): void {
        this.background.draw(Greeter.Context);
        super.draw();
    }

    /**
     * Action réalisée lors de l'entrée dans la scene
     */
    public onEnter(): void {
        if (this.background == null)
            this.background = new Sprite(0, 0, Greeter.Width, Greeter.Height, "Assets/Background/Bedroom.png");
        else
            this.background.load();
        //instanciation du joueur
        //TODO: revoir l'instanciation en fonction de l'état réel 
        this.addEntity(FactoryPlayer.CreatePlayer(EnumPlayerAge.Baby, Greeter.Width/2, 0));
    }

    /**
     * Action réalisée lors de la sortie de la scene
     */
    public onLeave(): void {
        this.background.unload();
    }

    /**
     * Gère les interractions avec les elements
     * @param x position x du clic
     * @param y position y du clic
     */
    public interact(x: number, y: number) {
        for (var i: number = 0; i != this.entities.length; i++) {
            var entity: Entity = this.entities[i];
            
            if (entity != null && entity.contains(x,y) && entity.interact() == true)
                break;
        }
    }
}
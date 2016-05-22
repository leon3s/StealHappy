class SceneLivingRoom extends Scene {

    //Importance de la gravité
    private static Gravity: number = 0.6;
    //Position du sol
    private static Ground: number = 400;

    private background : Sprite = null;

    public update(): void {
        super.update();
        this.physics();
    }

    public physics(): void {
        this.entities.forEach(function (entity) {

            //Gestion de la gravité
            if (entity.Y() + entity.Height() >= SceneLivingRoom.Ground && entity.VelocityY() != 0)
                entity.bounceY();
            else 
                entity.setVelocity(entity.VelocityX(), entity.VelocityY() + SceneLivingRoom.Gravity);
        });
    }

    public draw(): void {
        this.background.draw(Greeter.Context);
        super.draw();
    }

    public onEnter(): void {
        super.onEnter();
        if (this.background == null)
            this.background = new Sprite(0, 0, Greeter.Width, Greeter.Height, "Assets/Background/Bedroom.png");
        else
            this.background.load();
    }

    public onLeave(): void {
        super.onLeave();
        this.background.unload();
    }
}
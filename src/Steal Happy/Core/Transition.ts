enum Transition_Direction
{
    Up, 
    Down, 
    Left, 
    Right,
}


class Transition extends Sprite {
    //TODO: revoir le système de transitions
    private static Speed : number = 10;

    private timer: any;
    private callback: any;
    constructor(dir: Transition_Direction, callback : any) {
        super(0, 0, Greeter.Width, Greeter.Height, "Assets/Transition.png");
        this.callback = callback;
        switch (dir) {
            //TODO: implémenter les autres directions
            case Transition_Direction.Right:
                this.setPosition(-Greeter.Width, -105);
                this.timer = setInterval(() => {
                    this.update(dir);
                }, 20);

                break;

        }
       
    }

    public update(dir: Transition_Direction): void {
        switch (dir) {
            //TODO: implémener les autres directions
            case Transition_Direction.Right:
                this.setPosition(this.X() + Transition.Speed, -105);
                if (this.X() >= 0 && this.callback != null) {
                    this.callback();
                }
                if (this.X() >= Greeter.Width) {
                    clearInterval(this.timer);
                    
                }
        }
        this.draw(Greeter.Context);
    }

}
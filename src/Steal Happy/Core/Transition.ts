enum Transition_Direction
{
    Up, 
    Down, 
    Left, 
    Right,
}


class Transition extends Sprite {

    private static Speed : number = 10;

    private dir: Transition_Direction;
    private callback: any;
    constructor(dir: Transition_Direction, callback : any) {
        super(0, 0, Greeter.Width, Greeter.Height, "Assets/Transition.png");
        this.callback = callback;
        this.dir = dir;
        switch (dir) {
            //TODO: implémenter les autres directions
            case Transition_Direction.Right:
                this.setPosition(-Greeter.Width, -105);
                break;

        }
       
    }

    public update(): Transition {
        switch (this.dir) {
            //TODO: implémener les autres directions
            case Transition_Direction.Right:
                this.setPosition(this.X() + Transition.Speed, -105);
                if (this.X() >= 0 && this.callback != null) {
                    this.callback();
                }
                if (this.X() >= Greeter.Width) {
                    return null;
                }

        }
        return this;
    }



}
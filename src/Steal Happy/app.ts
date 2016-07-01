class Greeter {
    public static CanvasName: string = 'canvas';

    public static Context: CanvasRenderingContext2D;
    public static Width: number;
    public static Height: number; 
    private timer: any;

    constructor(ctx: HTMLCanvasElement) {
        Greeter.Context = ctx.getContext("2d");
        Greeter.Width = ctx.width;
        Greeter.Height = ctx.height;
    }

    public start(): void {
        this.timer = setInterval(() => { this.update() }, 30);
        FactoryScene.SetScene(new SceneLivingRoom());
        document.getElementById(Greeter.CanvasName).addEventListener('click', function (e) {
        	var xpos : number;
        	var ypos : number; 
			if(e.offsetX==undefined) // this works for Firefox
			{
			    xpos = e.pageX-document.getElementById(Greeter.CanvasName).offsetLeft;
			    ypos = e.pageY-document.getElementById(Greeter.CanvasName).offsetTop;
			}             
			else                     // works in Google Chrome
			{
				xpos = e.offsetX;
				ypos = e.offsetY;
			}
            FactoryScene.instance.interact(xpos, ypos);
        });
    }

    public stop(): void {
        clearInterval(this.timer);
    }

    public update(): void {
        if (FactoryScene.Scene() != null) {
            FactoryScene.Scene().update();
            FactoryScene.Scene().draw();
        }
    }

}

window.onload = () => {
    var el = <HTMLCanvasElement>document.getElementById(Greeter.CanvasName);
    var greeter = new Greeter(el);
    greeter.start();
};
class Greeter {
    public static Context: CanvasRenderingContext2D;
    private timer: any;

    constructor(ctx: HTMLCanvasElement) {
        Greeter.Context = ctx.getContext("2d");
    }

    public start(): void {
        this.timer = setInterval(() => { this.update() }, 100);
    }

    public stop(): void {
        clearInterval(this.timer);
    }

    public update(): void {
        FactoryScene.instance.update();
        FactoryScene.instance.draw();
    }

}

window.onload = () => {
    var el = <HTMLCanvasElement>document.getElementById('canvas');
    var greeter = new Greeter(el);
    greeter.start();
};
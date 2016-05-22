class Sprite {
    private x: number;
    private y: number;
    private width: number; 
    private height: number;
    private file: string;
    private image: HTMLImageElement;
    private frame: number;

    constructor(x: number, y: number, width: number, height: number, file: string) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.file = file;
        this.image = document.createElement("img");
        this.image.src = file;
        this.frame = 0;
    }

    public setPosition(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    public X(): number {
        return this.x;
    }

    public Y(): number {
        return this.y;
    }

    public draw(context: CanvasRenderingContext2D) {
        context.drawImage(this.image, -this.x, -this.y, this.width, this.height, Math.floor(this.frame) * this.width, 0, this.width, this.height);
    }

    public load(): void {
        this.image = document.createElement("img");
        this.image.src = this.file;
    }

    public unload(): void {
        this.image = null;
        //TODO: Trouver un moyen d'appeler garbage collect
    }
}
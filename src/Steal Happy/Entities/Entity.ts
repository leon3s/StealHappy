class Entity {
    protected x: number;
    protected y: number;
    protected z: number;
    protected width: number;
    protected height: number; 

    protected velocity_x: number;
    protected velocity_y: number; 

    public gravity: boolean;

    protected sprite: Sprite;

    constructor(x: number, y: number, width: number, height: number, file: string) {
        this.gravity = true;
        this.velocity_x = 0;
        this.velocity_y = 0;
        this.x = x;
        this.y = y;
        this.z = 0;
        this.width = width;
        this.height = height;
        this.sprite = new Sprite(this.x, this.y, this.width, this.height, file);
    }

    public setVelocity(x:number, y : number): void {
        this.velocity_x = x;
        this.velocity_y = y;
    }

    public setZ(z: number): void {
        this.z = z;
    }

    public setPosition(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    public update(): void {
        this.x += 0.03 * this.velocity_x;
        this.y += 0.03 * this.velocity_y;

        this.sprite.setPosition(this.x, this.y);
    }

    public draw(): void {
        this.sprite.draw(Greeter.Context);
    }


}
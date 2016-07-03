/**
 * Représente une entité interactive 
 */
abstract class Entity {
    protected x: number;
    protected y: number;
    protected z: number;
    protected width: number;
    protected height: number; 
    protected onCollid: boolean;

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

    
    public setOnCollid(collid: boolean): void {
        this.onCollid = collid;
    }

    public OnCollid(): boolean {
        return this.onCollid;
    }

    /**
     * Détermine la vitesse de l'entité
     * @param x nouvelle vitesse x 
     * @param y nouvelle vitesse y
     */
    public setVelocity(x:number, y : number): void {
        this.velocity_x = x;
        this.velocity_y = y;
    }

    /**
     * Retourne la vitesse x de l'entité
     */
    public VelocityX(): number {
        return this.velocity_x;
    }

    /**
     * Retourne la vitesse y de l'entité
     */
    public VelocityY(): number {
        return this.velocity_y;
    }

    /**
     * Détermine la position sur l'axe z de l'entité
     * @param z position z
     */
    public setZ(z: number): void {
        this.z = z;
    }

    /**
     * Détermine la position de l'entité
     * @param x nouvelle position x
     * @param y nouvelle position y
     */
    public setPosition(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }

    /**
     * Retourne la position x
     */
    public X(): number {
        return this.x;
    }

    /**
     * Retourne la position y 
     */
    public Y(): number {
        return this.y
    }

    /**
     * Retourne la largeur de l'entité
     */
    public Width(): number {
        return this.width;
    }

    /**
     * Retourne la hauteur de l'entité
     */
    public Height(): number {
        return this.height
    }

    /**
     * Paramètre la taille de l'entité
     * @param w nouvelle largeur
     * @param h nouvelle hauteur
     */
    public setSize(w: number, h: number): void {
        this.width = w;
        this.height = h;
    }

    /**
     * Retourne le sprite représentant cette entité
     */
    public getSprite(): Sprite {
        return this.sprite;
    }

    /**
     * Détermine le sprite représentant cette entité
     * @param sprite sprite à affecter
     */
    public setSprite(sprite: Sprite): void {
        this.sprite = sprite;
    }

    /**
     * Met à jour l'entité
     */
    public update(): void {
        //console.log("y " + this.velocity_y);
        if (Math.abs(this.velocity_x) < 2) this.velocity_x = 0;
        if (Math.abs(this.velocity_y) < 2) this.velocity_y = 0;
        this.x += 0.03 * this.velocity_x;
        this.y += 0.03 * this.velocity_y;

       this.sprite.setPosition(this.x, this.y);
    }

    /**
     * Fait rebondir l'entité sur l'axe x
     */
    public bounceX(): void {
        this.velocity_x = this.velocity_x * -0.5;
        if (Math.abs(this.getVector().X()) * 0.03 < 1)
            this.setVelocity(0, this.getVector().Y());
    }

    /**
     * Fait rebondir l'entité sur l'axe y 
     */
    public bounceY(): void {
        this.velocity_y = this.velocity_y * - 0.5;
        if (Math.abs(this.getVector().Y()) * 0.03 < 1)
            this.setVelocity(this.getVector().X(), 0);
    }

    /**
     * Dessine l'entité
     */
    public draw(): void {
        this.sprite.draw(Greeter.Context);
    }

    /**
     * Détermine l'interracion sur le personnage
     */
    public abstract interact(): boolean;

    /**
     * Retourne la bounding box sous la forme d'un objet rectangle
     */
    public getBox(): Rect {
        return new Rect(this.x, this.y, this.width, this.height); 
    }

    /**
     * Retourne le vecteur de velocité
     */
    public getVector(): Vector {
        return new Vector(this.velocity_x, this.velocity_y);
    }




}
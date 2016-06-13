/**
 * Décorateur abstrait pour player, permet de décliner des ages tout en restant extensible 
 */
class PlayerAge extends Player {

    protected player: Player;

    constructor(player: Player) {
        super();
        this.player = player;
    }

    /**
     * Met à jour l'objet décoré
     */
    public update(): void {
        this.player.update();
    }

    /**
     * Dessine l'objet décoré
     */
    public draw(): void {
        this.player.draw();
    }

    public setVelocity(x: number, y: number): void {
        this.player.setVelocity(x, y);
    }

    public VelocityX(): number {
        return this.player.VelocityX();
    }

    public VelocityY(): number {
        return this.player.VelocityY();
    }

    public setZ(z: number): void {
        this.player.setZ(z);
    }

    public setPosition(x: number, y: number): void {
        this.player.setPosition(x, y);
    }

    public X(): number {
        return this.player.X();
    }

    public Y(): number {
        return this.player.Y();
    }

    public Width(): number {
        return this.player.Width();
    }

    public Height(): number {
        return this.player.Height();
    }

    public setSize(w: number, h: number): void {
        this.player.setSize(w, h);
    }

    public getSprite(): Sprite {
        return this.player.getSprite();
    }

    public setSprite(sprite: Sprite): void {
        this.player.setSprite(sprite);
    }

    public bounceX(): void {
        this.player.bounceX();
    }

    public bounceY(): void {
        this.player.bounceY();
    }

}
class Sprite {
    private x: number;
    private y: number;
    private width: number; 
    private height: number;
    private file: string;
    private image: HTMLImageElement;
    private frame: number;
    private origin_x: number;
    private origin_y: number;

    /**
     * Créer un nouveau sprite
     * @param x position x
     * @param y position y
     * @param width taille d'une frame dans le fichier d'image
     * @param height taille d'une frame dans le ficher d'image
     * @param file ficher d'image 
     */
    constructor(x: number, y: number, width: number, height: number, file: string) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.file = file;
        this.image = document.createElement("img");
        this.image.src = file;
        this.frame = 0;
        this.origin_x = 0;
        this.origin_y = 0;
    }

    /**
     * Met à jour le point à partir duquel le sprite est dessiné
     * @param x nouvelle position x origine
     * @param y nouvelle position y origine
     */
    public setOrigin(x: number, y: number) {
        this.origin_x = x;
        this.origin_y = y;
    }

    /**
     * Met à jour le position du sprite
     * @param x nouvelle position x 
     * @param y nouvelle position y
     */
    public setPosition(x: number, y: number): void {
        this.x = Math.floor(x);
        this.y = Math.floor(y);
    }

    /**
     * Retourne la position x du sprite
     */
    public X(): number {
        return this.x;
    }

    /**
     * Retourne la position y du sprite
     */
    public Y(): number {
        return this.y;
    }

    /**
     * Dessine le spirte
     * @param context Contexte  2D de canvas
     */
    public draw(context: CanvasRenderingContext2D) {

        /*context.fillStyle = "#FF0000";
        context.fillRect(this.x, this.y, this.width, this.height);
        context.fillStyle = "#00FF00";
        context.fillRect(this.x, this.y, this.width - this.origin_x, this.height - this.origin_y);*/
        context.drawImage(this.image, Math.floor(this.frame) * this.width, 0, this.width, this.height, this.x - this.origin_x, this.y - this.origin_y, this.width, this.height);
        //context.drawImage(this.image, this.x, this.y, this.width, this.height + this.y, Math.floor(this.frame) * this.width - this.origin_x, -this.origin_y, this.width, this.height);
        //console.log(this.x + " " + this.y + " " + this.width + " " + this.height);
    }

    /**
     * Charge l'image en mémoire
     */
    public load(): void {
        this.image = document.createElement("img");
        this.image.src = this.file;
    }

    /**
     * Décharge l'image
     */
    public unload(): void {
        this.image = null;
        //TODO: Trouver un moyen d'appeler garbage collect
    }
}
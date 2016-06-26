
class Point implements Geometry {

    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * Retourne la position x du point
     */
    public X(): number {
        return this.x;
    }

    /**
     * Retourne la position y du point
     */
    public Y(): number {
        return this.y;
    }

	/**
	 * Calcule le dot product de ce point avec le point passé
	 * @param other point passé
	 */
    public multiply(other: Point): number {
        return (this.X() * other.X() + this.Y() * other.Y());
    }

    /**
     * Retourne un nouveau point issu de la soustraction des deux points
     * @param other point à soustraire
     */
    public substract(other: Point): Point {
        return new Point(this.X() - other.X(), this.Y() - other.Y());
    }

    /**
     * Retourne la distance entre deux point
     * @param other point à calculer
     */
    public distance(other: Point): number {
        return Math.abs(this.X() - other.X()) + Math.abs(this.Y() - other.Y());
    }

    /**
     * Détermine la valeur de x
     * @param x 
     */
    public setX(x: number): void {
        this.x = x;
    }

    /**
     * Détermine la valeur de y
     * @param y
     */
    public setY(y: number): void {
        this.y = y;
    }
}

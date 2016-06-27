class Vector implements Geometry {
    x: number;
    y: number;

    /**
     * Créer un vecteur allant du point first au point second
     * @param first
     * @param second
     */
    public static CreateFromPoints(first: Point, second: Point): Vector {
        return new Vector(second.X() - first.X(), second.Y() - first.Y());
    }

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * Retourne la position x du point d'orrigine du vecteur
     */
    public X(): number {
        return this.x;
    }

    /**
     * Retourne la position y du point d'origine du vecteur
     */
    public Y(): number {
        return this.y;
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


    /**
     * Multiplie le vecteur pas la constante passée en paramètre
     * @param po constante
     */
    public multiply(po: number): void {
        this.x *= po;
        this.y *= po;
    }

}

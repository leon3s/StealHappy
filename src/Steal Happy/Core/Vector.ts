﻿class Vector implements Geometry {
    x: number;
    y: number;

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
     * Multiplie le vecteur pas la constante passée en paramètre
     * @param po constante
     */
    public multiply(po: number): void {
        this.x *= po;
        this.y *= po;
    }

}
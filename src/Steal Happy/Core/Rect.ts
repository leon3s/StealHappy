﻿class Rect implements Geometry {

    x: number;
    y: number;

    width: number;
    height: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    /**
     * Retourne la position X du rectangle
     */
    public X(): number {
        return this.x;
    }

    /**
     * Retourne la position Y du rectangle
     */
    public Y(): number {
        return this.y;
    }

    /**
     * Retourne la largeur du rectangle 
     */
    public Width(): number {
        return this.width;
    }

    /**
     * Retourne la hauteur du rectangle 
     */
    public Height(): number {
        return this.height;
    }

    /**
     * Applique un vecteur au rectangle et effectue une translation
     * @param vector vecteur à appliquer
     */
    public apply(vector: Vector): void {
        this.x += vector.X();
        this.y += vector.Y();
    }

    /**
     * Teste si deux rectangles se supreposent 
     * @param other Rectangle à tester
     */
    public intersects(other: Rect): boolean {
        if (other.X() + other.Width() >= this.x && other.X() <= this.x + this.width && other.Y() + other.Height() >= this.y && other.Y() < this.y + this.height)
            return true;
        return false;
    }

    /**
    * Retourne si le point passé en paramètre est contenu dans la bounding box de l'entité
    * @param x position xu point à tester
    * @param y position y du point à tester
    */
    public contains(point: Point): boolean {
        if (point.X() >= this.X() && point.X() <= this.X() + this.Width() && point.Y() >= this.Y() && point.Y() <= this.Y() + this.Height())
            return true;
        return false;
    }
}

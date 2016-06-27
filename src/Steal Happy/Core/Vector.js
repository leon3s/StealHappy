var Vector = (function () {
    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * Créer un vecteur allant du point first au point second
     * @param first
     * @param second
     */
    Vector.CreateFromPoints = function (first, second) {
        return new Vector(second.X() - first.X(), second.Y() - first.Y());
    };
    /**
     * Retourne la position x du point d'orrigine du vecteur
     */
    Vector.prototype.X = function () {
        return this.x;
    };
    /**
     * Retourne la position y du point d'origine du vecteur
     */
    Vector.prototype.Y = function () {
        return this.y;
    };
    /**
     * Détermine la valeur de x
     * @param x
     */
    Vector.prototype.setX = function (x) {
        this.x = x;
    };
    /**
     * Détermine la valeur de y
     * @param y
     */
    Vector.prototype.setY = function (y) {
        this.y = y;
    };
    /**
     * Multiplie le vecteur pas la constante passée en paramètre
     * @param po constante
     */
    Vector.prototype.multiply = function (po) {
        this.x *= po;
        this.y *= po;
    };
    return Vector;
}());
//# sourceMappingURL=Vector.js.map
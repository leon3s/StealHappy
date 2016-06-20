var Vector = (function () {
    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }
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
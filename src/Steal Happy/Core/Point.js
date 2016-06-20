var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * Retourne la position x du point
     */
    Point.prototype.X = function () {
        return this.x;
    };
    /**
     * Retourne la position y du point
     */
    Point.prototype.Y = function () {
        return this.y;
    };
    /**
     * Calcule le dot product de ce point avec le point passé
     * @param other point passé
     */
    Point.prototype.multiply = function (other) {
        return (this.X() * other.X() + this.Y() * other.Y());
    };
    /**
     * Retourne un nouveau point issu de la soustraction des deux points
     * @param other point à soustraire
     */
    Point.prototype.substract = function (other) {
        return new Point(this.X() - other.X(), this.Y() - other.Y());
    };
    /**
     * Retourne la distance entre deux point
     * @param other point à calculer
     */
    Point.prototype.distance = function (other) {
        return Math.abs(this.X() - other.X()) + Math.abs(this.Y() - other.Y());
    };
    return Point;
}());
//# sourceMappingURL=Point.js.map
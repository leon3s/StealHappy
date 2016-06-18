/**
 * Représente une entité interactive
 */
var Entity = (function () {
    function Entity(x, y, width, height, file) {
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
    /**
     * Détermine la vitesse de l'entité
     * @param x nouvelle vitesse x
     * @param y nouvelle vitesse y
     */
    Entity.prototype.setVelocity = function (x, y) {
        this.velocity_x = x;
        this.velocity_y = y;
    };
    /**
     * Retourne la vitesse x de l'entité
     */
    Entity.prototype.VelocityX = function () {
        return this.velocity_x;
    };
    /**
     * Retourne la vitesse y de l'entité
     */
    Entity.prototype.VelocityY = function () {
        return this.velocity_y;
    };
    /**
     * Détermine la position sur l'axe z de l'entité
     * @param z position z
     */
    Entity.prototype.setZ = function (z) {
        this.z = z;
    };
    /**
     * Détermine la position de l'entité
     * @param x nouvelle position x
     * @param y nouvelle position y
     */
    Entity.prototype.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    };
    /**
     * Retourne la position x
     */
    Entity.prototype.X = function () {
        return this.x;
    };
    /**
     * Retourne la position y
     */
    Entity.prototype.Y = function () {
        return this.y;
    };
    /**
     * Retourne la largeur de l'entité
     */
    Entity.prototype.Width = function () {
        return this.width;
    };
    /**
     * Retourne la hauteur de l'entité
     */
    Entity.prototype.Height = function () {
        return this.height;
    };
    /**
     * Paramètre la taille de l'entité
     * @param w nouvelle largeur
     * @param h nouvelle hauteur
     */
    Entity.prototype.setSize = function (w, h) {
        this.width = w;
        this.height = h;
    };
    /**
     * Retourne le sprite représentant cette entité
     */
    Entity.prototype.getSprite = function () {
        return this.sprite;
    };
    /**
     * Détermine le sprite représentant cette entité
     * @param sprite sprite à affecter
     */
    Entity.prototype.setSprite = function (sprite) {
        this.sprite = sprite;
    };
    /**
     * Met à jour l'entité
     */
    Entity.prototype.update = function () {
        //console.log("y " + this.velocity_y);
        if (Math.abs(this.velocity_x) < 1)
            this.velocity_x = 0;
        if (Math.abs(this.velocity_y) < 1)
            this.velocity_y = 0;
        this.x += 0.03 * this.velocity_x;
        this.y += 0.03 * this.velocity_y;
        this.sprite.setPosition(this.x, this.y);
    };
    /**
     * Fait rebondir l'entité sur l'axe x
     */
    Entity.prototype.bounceX = function () {
        this.velocity_x = this.velocity_x * -0.5;
    };
    /**
     * Fait rebondir l'entité sur l'axe y
     */
    Entity.prototype.bounceY = function () {
        this.velocity_y = this.velocity_y * -0.5;
    };
    /**
     * Dessine l'entité
     */
    Entity.prototype.draw = function () {
        this.sprite.draw(Greeter.Context);
    };
    /**
     * Retourne si le point passé en paramètre est contenu dans la bounding box de l'entité
     * @param x position xu point à tester
     * @param y position y du point à tester
     */
    Entity.prototype.contains = function (x, y) {
        if (x >= this.X() && x <= this.X() + this.Width() && y >= this.Y() && y <= this.Y() + this.Height())
            return true;
        return false;
    };
    /**
     * Indique si l'entité entre en collision avec cette entité
     * @param other Entité à tester
     */
    Entity.prototype.intersectWith = function (other) {
        return this.intersect(other.X(), other.Y(), other.Width(), other.Height());
    };
    /**
     * Indique si le carré passé en paramètre rentre en collision avec la bouding box de l'entité
     * @param x
     * @param y
     * @param width
     * @param height
     */
    Entity.prototype.intersect = function (x, y, width, height) {
        if (x + width >= this.x && x <= this.x + this.width && y + height >= this.y && y <= this.y + this.height)
            return true;
        return false;
    };
    return Entity;
}());
//# sourceMappingURL=Entity.js.map
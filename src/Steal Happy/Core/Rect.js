var Rect = (function () {
    function Rect(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    /**
     * Retourne la position X du rectangle
     */
    Rect.prototype.X = function () {
        return this.x;
    };
    /**
     * Retourne la position Y du rectangle
     */
    Rect.prototype.Y = function () {
        return this.y;
    };
    /**
     * Détermine la valeur de x
     * @param x
     */
    Rect.prototype.setX = function (x) {
        this.x = x;
    };
    /**
     * Détermine la valeur de y
     * @param y
     */
    Rect.prototype.setY = function (y) {
        this.y = y;
    };
    /**
     * Retourne la largeur du rectangle
     */
    Rect.prototype.Width = function () {
        return this.width;
    };
    /**
     * Retourne la hauteur du rectangle
     */
    Rect.prototype.Height = function () {
        return this.height;
    };
    /**
     * Applique un vecteur au rectangle et effectue une translation
     * @param vector vecteur à appliquer
     */
    Rect.prototype.apply = function (vector) {
        this.x += vector.X();
        this.y += vector.Y();
    };
    /**
     * Teste si deux rectangles se supreposent
     * @param other Rectangle à tester
     */
    Rect.prototype.intersects = function (other) {
        if (other.X() + other.Width() >= this.x && other.X() <= this.x + this.width && other.Y() + other.Height() >= this.y && other.Y() < this.y + this.height)
            return true;
        return false;
    };
    /**
    * Retourne si le point passé en paramètre est contenu dans la bounding box de l'entité
    * @param x position xu point à tester
    * @param y position y du point à tester
    */
    Rect.prototype.contains = function (point) {
        if (point.X() >= this.X() && point.X() <= this.X() + this.Width() && point.Y() >= this.Y() && point.Y() <= this.Y() + this.Height())
            return true;
        return false;
    };
    /**
     * Calcule la pénétration d'un rectangle dans un autre
     * @param other Rectangle contenant les informations de pénétration x: par la gauche, y: par le haut, w : par la droite, h : par le bas
     */
    Rect.prototype.caculatePenetration = function (other) {
        var res = new Rect(0, 0, 0, 0);
        //Calculation des points
        var this_top_left = new Point(this.x, this.y);
        var this_top_right = new Point(this.x + this.width, this.y);
        var this_bottom_left = new Point(this.x, this.y + this.height);
        var this_bottom_right = new Point(this.x + this.width, this.y + this.height);
        var other_top_left = new Point(other.X(), other.Y());
        var other_top_right = new Point(other.X() + other.Width(), other.Y());
        var other_bottom_left = new Point(other.X(), other.Y() + other.Height());
        var other_bottom_right = new Point(other.X() + other.Width(), other.Y() + other.Height());
        //pénétration par la gauche 
        if (this.contains(other_bottom_right)) {
            res.x = Vector.CreateFromPoints(other_bottom_right, this_top_left).X();
        }
        //pénétration par la droite
        if (this.width != other.width && this.contains(other_top_left)) {
            res.width = Vector.CreateFromPoints(this_bottom_right, other_top_left).X();
        }
        //pénétration par le haut
        if (this.contains(other_top_right)) {
            res.y = Vector.CreateFromPoints(this_bottom_left, other_top_right).Y();
        }
        //pénétration par le bas
        if (this.contains(other_bottom_left)) {
            res.height = Vector.CreateFromPoints(other_bottom_left, this_top_right).Y();
        }
        /*if (other.X() < this.x + this.width / 2)
            res.x =  this.x - (other.X() + other.Width());
        //pénétration par le haut
        if (other.Y() < this.y + this.height / 2)
            res.y = this.y - (other.Y() + other.Height()) ;
        //pénétration par la droite
        if (other.X() >= this.x + this.width/2)
            res.width = other.X() - this.x + this.width;
        //pénétration par le bas
        if (other.Y() >= this.y + this.height / 2)
            res.height = this.y + this.height - other.Y();*/
        return res;
    };
    return Rect;
}());
//# sourceMappingURL=Rect.js.map
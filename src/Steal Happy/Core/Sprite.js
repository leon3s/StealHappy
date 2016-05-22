var Sprite = (function () {
    function Sprite(x, y, width, height, file) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.file = file;
        this.image = document.createElement("img");
        this.image.src = file;
        this.frame = 0;
    }
    Sprite.prototype.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Sprite.prototype.X = function () {
        return this.x;
    };
    Sprite.prototype.Y = function () {
        return this.y;
    };
    Sprite.prototype.draw = function (context) {
        context.drawImage(this.image, -this.x, -this.y, this.width, this.height, Math.floor(this.frame) * this.width, 0, this.width, this.height);
    };
    Sprite.prototype.load = function () {
        this.image = document.createElement("img");
        this.image.src = this.file;
    };
    Sprite.prototype.unload = function () {
        this.image = null;
        //TODO: Trouver un moyen d'appeler garbage collect
    };
    return Sprite;
}());
//# sourceMappingURL=Sprite.js.map
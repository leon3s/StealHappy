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
    Entity.prototype.setVelocity = function (x, y) {
        this.velocity_x = x;
        this.velocity_y = y;
    };
    Entity.prototype.setZ = function (z) {
        this.z = z;
    };
    Entity.prototype.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Entity.prototype.update = function () {
        this.x += 0.03 * this.velocity_x;
        this.y += 0.03 * this.velocity_y;
        this.sprite.setPosition(this.x, this.y);
    };
    Entity.prototype.draw = function () {
        this.sprite.draw(Greeter.Context);
    };
    return Entity;
}());
//# sourceMappingURL=Entity.js.map
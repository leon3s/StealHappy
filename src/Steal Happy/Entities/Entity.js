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
    Entity.prototype.VelocityX = function () {
        return this.velocity_x;
    };
    Entity.prototype.VelocityY = function () {
        return this.velocity_y;
    };
    Entity.prototype.setZ = function (z) {
        this.z = z;
    };
    Entity.prototype.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Entity.prototype.X = function () {
        return this.x;
    };
    Entity.prototype.Y = function () {
        return this.y;
    };
    Entity.prototype.Width = function () {
        return this.width;
    };
    Entity.prototype.Height = function () {
        return this.height;
    };
    Entity.prototype.setSize = function (w, h) {
        this.width = w;
        this.height = h;
    };
    Entity.prototype.getSprite = function () {
        return this.sprite;
    };
    Entity.prototype.setSprite = function (sprite) {
        this.sprite = sprite;
    };
    Entity.prototype.update = function () {
        if (Math.round(this.velocity_x) < 0.05)
            this.velocity_x = 0;
        if (Math.round(this.velocity_y) < 0.05)
            this.velocity_y = 0;
        this.x += 0.03 * this.velocity_x;
        this.y += 0.03 * this.velocity_y;
        this.sprite.setPosition(this.x, this.y);
    };
    Entity.prototype.bounceX = function () {
        this.velocity_x = this.velocity_x * -0.5;
    };
    Entity.prototype.bounceY = function () {
        this.velocity_y = this.velocity_y * -0.5;
    };
    Entity.prototype.draw = function () {
        this.sprite.draw(Greeter.Context);
    };
    return Entity;
}());
//# sourceMappingURL=Entity.js.map
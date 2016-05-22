var Greeter = (function () {
    function Greeter(ctx) {
        Greeter.Context = ctx.getContext("2d");
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timer = setInterval(function () { _this.update(); }, 100);
    };
    Greeter.prototype.stop = function () {
        clearInterval(this.timer);
    };
    Greeter.prototype.update = function () {
        FactoryScene.instance.update();
        FactoryScene.instance.draw();
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById('canvas');
    var greeter = new Greeter(el);
    greeter.start();
};
//# sourceMappingURL=app.js.map
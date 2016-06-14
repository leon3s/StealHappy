var Greeter = (function () {
    function Greeter(ctx) {
        Greeter.Context = ctx.getContext("2d");
        Greeter.Width = ctx.width;
        Greeter.Height = ctx.height;
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timer = setInterval(function () { _this.update(); }, 20);
        FactoryScene.SetScene(new SceneLivingRoom());
        document.getElementById(Greeter.CanvasName).addEventListener('click', function (e) {
            FactoryScene.instance.interact(e.offsetX, e.offsetY);
        });
    };
    Greeter.prototype.stop = function () {
        clearInterval(this.timer);
    };
    Greeter.prototype.update = function () {
        if (FactoryScene.Scene() != null) {
            FactoryScene.Scene().update();
            FactoryScene.Scene().draw();
        }
    };
    Greeter.CanvasName = 'canvas';
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById(Greeter.CanvasName);
    var greeter = new Greeter(el);
    greeter.start();
};
//# sourceMappingURL=app.js.map
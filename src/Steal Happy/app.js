var Greeter = (function () {
    function Greeter(ctx) {
        Greeter.Context = ctx.getContext("2d");
        Greeter.Width = ctx.width;
        Greeter.Height = ctx.height;
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timer = setInterval(function () { _this.update(); }, 30);
        FactoryScene.SetScene(new SceneLivingRoom());
        document.getElementById(Greeter.CanvasName).addEventListener('click', function (e) {
            var xpos;
            var ypos;
            if (e.offsetX == undefined) {
                xpos = e.pageX - document.getElementById(Greeter.CanvasName).offsetLeft;
                ypos = e.pageY - document.getElementById(Greeter.CanvasName).offsetTop;
            }
            else {
                xpos = e.offsetX;
                ypos = e.offsetY;
            }
            FactoryScene.instance.interact(xpos, ypos);
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
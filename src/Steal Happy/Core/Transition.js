var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Transition_Direction;
(function (Transition_Direction) {
    Transition_Direction[Transition_Direction["Up"] = 0] = "Up";
    Transition_Direction[Transition_Direction["Down"] = 1] = "Down";
    Transition_Direction[Transition_Direction["Left"] = 2] = "Left";
    Transition_Direction[Transition_Direction["Right"] = 3] = "Right";
})(Transition_Direction || (Transition_Direction = {}));
var Transition = (function (_super) {
    __extends(Transition, _super);
    function Transition(dir, callback) {
        _super.call(this, 0, 0, Greeter.Width, Greeter.Height, "Assets/Transition.png");
        this.callback = callback;
        this.dir = dir;
        switch (dir) {
            //TODO: implémenter les autres directions
            case Transition_Direction.Right:
                this.setPosition(-Greeter.Width, -105);
                break;
        }
    }
    Transition.prototype.update = function () {
        switch (this.dir) {
            //TODO: implémener les autres directions
            case Transition_Direction.Right:
                this.setPosition(this.X() + Transition.Speed, -105);
                if (this.X() >= 0 && this.callback != null) {
                    this.callback();
                }
                if (this.X() >= Greeter.Width) {
                    return null;
                }
        }
        return this;
    };
    Transition.Speed = 10;
    return Transition;
}(Sprite));
//# sourceMappingURL=Transition.js.map
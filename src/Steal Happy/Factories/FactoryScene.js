var FactoryScene = (function () {
    function FactoryScene() {
    }
    FactoryScene.Scene = function () {
        return FactoryScene.instance;
    };
    FactoryScene.SetScene = function (scene) {
        FactoryScene.next = scene;
        if (FactoryScene.instance == null) {
            FactoryScene.DoSetScene();
            return;
        }
        FactoryScene.instance.startTransition(Transition_Direction.Right, FactoryScene.DoSetScene);
    };
    FactoryScene.DoSetScene = function () {
        if (FactoryScene.instance != null)
            FactoryScene.instance.onLeave();
        FactoryScene.instance = FactoryScene.next;
        FactoryScene.instance.onEnter();
    };
    return FactoryScene;
}());
//# sourceMappingURL=FactoryScene.js.map
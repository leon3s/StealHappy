var FactoryScene = (function () {
    function FactoryScene() {
    }
    FactoryScene.Scene = function () {
        return FactoryScene.instance;
    };
    FactoryScene.SetScene = function (scene) {
        FactoryScene.instance = scene;
    };
    return FactoryScene;
}());
//# sourceMappingURL=FactoryScene.js.map
var Factory = (function () {
    function Factory() {
    }
    Factory.Scene = function () {
        if (Factory.scene == null)
            Factory.scene = new FactoryScene();
        return Factory.scene;
    };
    return Factory;
}());
//# sourceMappingURL=Factory.js.map
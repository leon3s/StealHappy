class FactoryScene {
    public static instance: Scene;

    public static Scene(): Scene {
        return FactoryScene.instance;
    }

    public static SetScene(scene: Scene): void {
        FactoryScene.instance = scene;
    }
}
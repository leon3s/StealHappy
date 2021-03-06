﻿class FactoryScene {
    public static instance: Scene;
    private static next: Scene;


    public static Scene(): Scene {
        return FactoryScene.instance;
    }

    public static SetScene(scene: Scene): void {
        FactoryScene.next = scene;
        if (FactoryScene.instance == null) {
            FactoryScene.DoSetScene();
            return;
        }
        FactoryScene.instance.startTransition(Transition_Direction.Right, FactoryScene.DoSetScene);
    }

    public static DoSetScene(): void {
        if (FactoryScene.instance != null)
            FactoryScene.instance.onLeave();
        FactoryScene.instance = FactoryScene.next;
        FactoryScene.instance.onEnter();
    }
}
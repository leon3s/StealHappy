enum EnumPlayerAge {
    Baby, 
}

class FactoryPlayer {

    /**
     * Créer une nouvelle instance de player en fonction d'un type donné
     * @param type age du joueur à instancier
     * @param x position xu centre du joueur 
     * @param y position y du centre du joueur
     */
    public static CreatePlayer(type: EnumPlayerAge, x: number, y:number): Player {
        var player: Player;

        //implémenter ici les autres types
        switch (type) {
            case EnumPlayerAge.Baby:
                player = new PlayerBaby();
                break;
        }
        player.setPosition(x - player.Width() / 2, y - player.Height() / 2);
        player.setName("First");
        return player;
    }
}
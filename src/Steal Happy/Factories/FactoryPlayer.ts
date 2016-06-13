enum EnumPlayerAge {
    Baby, 
}

class FactoryPlayer {

    /**
     * Créer une nouvelle instance de player en fonction d'un type donné
     * @param type
     */
    public static CreatePlayer(type: EnumPlayerAge): Player {
        var player: Player = new Player();

        //implémenter ici les autres types
        switch (type) {
            case EnumPlayerAge.Baby:
                player = new PlayerBaby(player);
                break;
        }

        return player;
    }
}
var EnumPlayerAge;
(function (EnumPlayerAge) {
    EnumPlayerAge[EnumPlayerAge["Baby"] = 0] = "Baby";
})(EnumPlayerAge || (EnumPlayerAge = {}));
var FactoryPlayer = (function () {
    function FactoryPlayer() {
    }
    /**
     * Créer une nouvelle instance de player en fonction d'un type donné
     * @param type age du joueur à instancier
     * @param x position xu centre du joueur
     * @param y position y du centre du joueur
     */
    FactoryPlayer.CreatePlayer = function (type, x, y) {
        var player;
        //implémenter ici les autres types
        switch (type) {
            case EnumPlayerAge.Baby:
                player = new PlayerBaby();
                break;
        }
        player.setPosition(x - player.Width() / 2, y - player.Height() / 2);
        player.setName("First");
        return player;
    };
    return FactoryPlayer;
}());
//# sourceMappingURL=FactoryPlayer.js.map
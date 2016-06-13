var EnumPlayerAge;
(function (EnumPlayerAge) {
    EnumPlayerAge[EnumPlayerAge["Baby"] = 0] = "Baby";
})(EnumPlayerAge || (EnumPlayerAge = {}));
var FactoryPlayer = (function () {
    function FactoryPlayer() {
    }
    /**
     * Créer une nouvelle instance de player en fonction d'un type donné
     * @param type
     */
    FactoryPlayer.CreatePlayer = function (type) {
        var player = new Player();
        //implémenter ici les autres types
        switch (type) {
            case EnumPlayerAge.Baby:
                player = new PlayerBaby(player);
                break;
        }
        return player;
    };
    return FactoryPlayer;
}());
//# sourceMappingURL=FactoryPlayer.js.map
(function(){
    var app = angular.module('Game', []);
    app.controller('GameController', function(){
        this.gameList = gameList;
    });

    var gameList = [
    {
        "game_id":"1",
        "game_title":"2020 Super Baseball",
        "game_desc":"Jogo de baseball futuristico.",
        "game_developer":null,
        "game_type_id":"Esporte",
        "system_id":"1"
    },
    {
        "game_id":"2",
        "game_title":"3 Ninjas Kick Back",
        "game_desc":"Game adventure de ninjas e fases.",
        "game_developer":null,
        "game_type_id":"Adventure",
        "system_id":"1"
    },
    {
        "game_id":"3",
        "game_title":"3x3 Eyes - Seima Kourinden",
        "game_desc":"Jogo futuristico de naves",
        "game_developer":null,
        "game_type_id":"naves",
        "system_id":"1"
    },
    {
        "game_id":"1",
        "game_title":"2020 Super Baseball",
        "game_desc":"Jogo de baseball futuristico.",
        "game_developer":null,
        "game_type_id":"Esporte",
        "system_id":"1"
    },
    {
        "game_id":"2",
        "game_title":"3 Ninjas Kick Back",
        "game_desc":"Game adventure de ninjas e fases.",
        "game_developer":null,
        "game_type_id":"Adventure",
        "system_id":"1"
    },
    {
        "game_id":"3",
        "game_title":"3x3 Eyes - Seima Kourinden",
        "game_desc":"Jogo futuristico de naves",
        "game_developer":null,
        "game_type_id":"naves",
        "system_id":"1"
    },    
	];

})();
var path = require('path'),
    _ = require('lodash'),
    pconfig = require("./mods/config.json"),
    pUtil = require("./pluginUtils.js"),
    plugger = null;
module.exports = {
    init:function(lana,colors){
        var args = {
            lana: lana,
            //            _: _,
            //            config:pconfig,
            //            pUtil: pUtil,
            //            version:config.version,
            //            colors: colors,
        };
        plugger = require('plug').create(args);
        // handle plugin connection
        plugger.on('connect', function(pluginName, pluginData, modulePath) {
            console.log('loaded plugin "' + pluginName + '" with data',  pluginData);
        });
        plugger.on('drop', function(pluginName, pluginData, modulePath) {
            console.log('unloaded plugin "' + pluginName);
        });

        plugger.find(path.resolve(__dirname, 'mods/'));

    },
    unload: function(){

            plugger.drop('mumble');

    }
    // reload module function
//    Load/unload/reload
}


var notif = require('./lana'),
    pluginSystem = require('./pluginSystem'),
    lana = new notif.Lana();
//console.log(lana)







pluginSystem.init(lana);
//pluginSystem.unload();
//lana.something()
//lana.on('on',function(){
//    console.log('sas')
//});
//lana.emit('app-notif')

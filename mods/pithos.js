var l,_,s,v,p,conf,util,hex;
var dbus = require('dbus-native');

exports.connect = function(args,cb) {
    //    _ = args.underscore,
    l = args.lana,
        //        s = args.config.cmdStart,
        //        conf = args.config,
        //        util = args.pUtil;
        //        v = args.version;
        //    c.on("message",channelmsg)
        // init the pithos msg listner here
        // and on event call lana.msg
        sessionBus = dbus.sessionBus();
    sessionBus.getService('net.kevinmehall.Pithos').getInterface(
        '/net/kevinmehall/Pithos',
        'net.kevinmehall.Pithos', function(err, pithos) {
            if(err) return console.log(err);
            hex = pithos;
                        console.log(pithos)
            // dbus signals are EventEmitter events
            pithos.on('SongChanged', function(val) {
//                console.log(val)
                l.appMsg({
                    type: 'pithos',
                    dataType: 'SongChanged',
                    data:val
                })
//                console.log('ServerSignal', arguments);
            });
            pithos.on('PlayStateChanged', function() {
                console.log('PlayStateChanged', arguments);
            });
//            setInterval(function(){
//            pithos.PlayPause()
//            },1000)
            pithos.GetCurrentSong()
//
            cb("pithos data");
        });
};
function channelmsg(from, to, message){
}

exports.drop = function(args){
    console.log('remove mumble js listners')
}

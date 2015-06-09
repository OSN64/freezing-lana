var c,_,s,v,p,conf,util,hex;
var dbus = require('dbus-native');

exports.connect = function(args,cb) {
cb();
}

exports.connect00 = function(args,cb) {
    //    _ = args.underscore,
    c = args.lana,
        //        s = args.config.cmdStart,
        //        conf = args.config,
        //        util = args.pUtil;
        //        v = args.version;
        //    c.on("message",channelmsg)
        // init the hexchat msg listner here
        // and on event call lana.msg
        sessionBus = dbus.sessionBus();
    sessionBus.getService('org.hexchat.service').getInterface(
        '/org/hexchat/Remote',
        'org.hexchat.plugin', function(err, hexchat) {
            if(err) return console.log(err);
            hex = hexchat;
            //            console.log(hexchat)
            // dbus signals are EventEmitter events
            hexchat.on('ServerSignal', function(word,word_eol,hid) {
                console.log(word,word_eol,hid)
                return 0;
//                console.log('ServerSignal', arguments);
            });
            hexchat.on('CommandSignal', function() {
                console.log('CommandSignal', arguments);
            });
            hexchat.on('PrintSignal', function() {
                console.log('PrintSignal', arguments);
            });
            hexchat.on('UnloadSignal', function() {
                console.log('UnloadSignal', arguments);
            });
            hex.Unhook(1)
            //            hex.HookServer('PRIVMSG',function(){})
//            hex.Print('nigger from plugins');

//            hex.HookServer('PRIVMSG',127,'9')
//            hex.HookPrint("Private Message",127,1,function(err,d,e){console.log(err,d,e); return 0;})
//            hex.GetInfo("channel",function(err,d){console.log(err,d)})
            // works
//            hex.HookCommand('nig',127,'',2,function(err,d){console.log(err,d)})
            //            hex.Command('nick pseudo');
            //            console.log(hex.GetInfo("host"))
            cb("hexchat data");
        });
};
function channelmsg(from, to, message){
}

exports.drop = function(args){
    console.log('remove mumble js listners')
}

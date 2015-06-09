var c,_,s,v,p,conf,util;

exports.connect = function(args,cb) {
//    _ = args.underscore,
        c = args.lana,
//        s = args.config.cmdStart,
//        conf = args.config,
//        util = args.pUtil;
//        v = args.version;
//    c.on("message",channelmsg)
    // init the mumble msg listner here
    // and on event call lana.msg
    cb("mumble data");
};
function channelmsg(from, to, message){
}

exports.drop = function(args){
    console.log('remove mumble js listners')
}
// cant really use mumble cause the mumble client deosnt support retreiving message events

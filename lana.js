/*
    BLAH BLAH

*/
exports.Lana = Lana;

var util = require('util');
var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;

function Lana(){
    var self = this;
    console.log('init')


//    self.on('app-notif',function(){
//        console.log('app notified lana')
//        self.emit('on')
//    })
    EventEmitter.call(this);
}
util.inherits(Lana, EventEmitter);
Lana.prototype.icr= 0;
Lana.prototype.appMsg = function(data){
//    console.log(util.inspect(data,{ showHidden: true, depth: null }))
    _.each(data.data,function(elem){
        console.log(elem)
    })
    // send data to client
    return;
}

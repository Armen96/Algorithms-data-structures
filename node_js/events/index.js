const EventEmitter = require('events');
const target = new EventEmitter();


target.on('customEvent', () => {
    console.log(' Custom event triggered ');
})

target.emit('customEvent')

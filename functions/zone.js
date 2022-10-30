// ZONE ASYNC EXAMPLE
let oldSetTimeout = setTimeout;
setTimeout =  (handler, timer) => {
    console.log('START ZONE')
    oldSetTimeout(() => {
        handler();
        console.log('FINISH ZONE');
    }, timer);
}

setTimeout(() => {
    console.log(' render code ')
}, 2000);


/**
 * Zone JS has hooks
 * onEnter onLeave and onStable
 *
 * onEnter increments inner counter whenever async operation is happening
 * onLeave decrement it and runs onStable function
 *
 * if counter is 0 then Zone js runs tick method
 *
 * tick() => runs Angular Change Detector
 */


/**
 * Zone js uses Monkey Patching to override all async functions timers, ajax, etc...
 */

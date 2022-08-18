console.log(' JS START RENDER ');


window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM Content Loaded Event');
});


// new IntersectionObserverEntry()

class Human {
    talk() {
        return 'talking';
    }
}

class HumanWithHumor extends Human {
    makeLaugh() {
        return 'laughing';
    }
}

class SuperHuman extends HumanWithHumor {
    fly() {
        return 'flying';
    }
}

const ben = new SuperHuman();
console.log(ben);
console.log(ben.talk());

// Mark and Sweep Algorithm

let HEAP = [];

const A = {
    language: 'JavaScript'
};

HEAP.push(A);

const root = () => HEAP[0];

const B = {
    language: 'Rust'
};

HEAP.push(B);

A.B = B;


const C = {
    language: 'Elm'
};

HEAP.push(C);

A.C = C;


delete A.C;

const D = {
    language: 'PHP'
};

HEAP.push(D);

B.D = D;

delete A.B;



function mark() {
    let reachables = [ root() ];

    while (reachables.length) {
        let current = reachables.pop();

        if(!current.__markBit__) {
            current.__markBit__ = 1;

            for (let i in current) {
                if ( typeof(current[i]) === 'object') {
                    reachables.push(current[i]);
                }

            }
        }
    }
}

function sweep() {
    console.log(HEAP);
    HEAP = HEAP.filter( (current) => {
        if (current.__markBit__ === 1) {
            current.__markBit__ = 0;
            return true;
        }

        return false;
    })
}

function gc() {

    mark();

    sweep();

}

function main() {

    console.log('before', HEAP);

    gc();

    console.log('after', HEAP);
}

main();

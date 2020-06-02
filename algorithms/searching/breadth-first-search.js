const airports = ['SMCA', 'ZWAT', 'ABW', 'LTBJ', 'SKYA', 'YAYR', 'OIAW'];

const routes = [
    ['SMCA', 'ZWAT'],
    ['SMCA', 'YAYR'],
    ['ZWAT', 'OIAW'],
    ['YAYR', 'ZWAT'],
    ['ABW', 'LTBJ'],
    ['LTBJ', 'SKYA'],
    ['OIAW', 'SKYA'],
];

const adjacencyList = new Map();

function addNode(airport) {
    adjacencyList.set(airport, []);
}

function addEdge(origin, destination) {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
}

airports.map((airport) => {
    addNode(airport);
});

routes.map((route) => {
    addEdge(route[0], route[1]);
})

function bfs(start) {
    const queue = [start];
    const visited = new Set();

    while (queue.length > 0) {
        const airport = queue.shift();

        const destinations = adjacencyList.get(airport)

        for (let destination of destinations) {
            if (destination === 'YAYR') {
                console.log('found it');
            }

            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
                console.log(destination)
            }
        }
    }
}

bfs('SMCA');

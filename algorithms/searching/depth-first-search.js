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

function dfs(start, visited = new Set()) {
    visited.add(start);

    const destinations = adjacencyList.get(start);

    for (let destination of destinations) {

        if(destination === 'YAYR') {
            console.log('DFS found YAYR');
            return;
        }

        if(!visited.has(destination)) {
            dfs(destination, visited);
        }
    }
}

dfs('SMCA');

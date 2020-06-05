/**
 * What is a Mother Vertex?
 * A mother vertex in a graph G = (V,E) is a vertex v such that all other vertices in G can be reached by a path from v.
 *
 * Steps
 *
 * 1. Generate adjacency list from directed graph
 * 2. DO DFS search and create an array for each Vertex with nested vertexes
 * 3. Check if that very arrays contain all vertexes or not.
 */

const ADJACENCY_LIST = new Map();
const VERTEXES = [0, 1, 2, 3, 4, 5, 6];
const CONNECTIONS = [
    [0, 1],
    [0, 2],
    [1, 3],
    [4, 1],
    [6, 4],
    [5, 6],
    [5, 2],
    [6, 0],
];

const addNode = (v) => {
    ADJACENCY_LIST.set(v, []);
}

const addEdge = (v, w) => {
    ADJACENCY_LIST.get(v).push(w);
}

VERTEXES.forEach(v => { addNode(v) });
CONNECTIONS.forEach(connection => { addEdge(connection[0], connection[1]) });

const DFS = (startingNode, visited = []) => {

    const connects = ADJACENCY_LIST.get(startingNode);

    visited.push(startingNode)

    for (let i = 0; i < connects.length; i++) {
        if (visited.indexOf(connects[i]) === -1) {
            DFS(connects[i], visited);
        }
    }
}

const findMotherVertex = (VERTEXES) => {
    const result = {
        vertex: null,
        count: null,
        items: null
    };

    for (let i = 0; i < VERTEXES.length; i++) {
        let nestedConnections = [];

        DFS(VERTEXES[i], nestedConnections);

        if(nestedConnections.length === VERTEXES.length) {
            result.vertex = VERTEXES[i];
            result.count = nestedConnections.length;
            result.items = nestedConnections.join(' | ');

            break;
        }
    }

    return result;
}

const result = findMotherVertex(VERTEXES);
console.log(result); // { vertex: 5, count: 7, items: '5 | 6 | 4 | 1 | 3 | 0 | 2' }


/**
 * Given an undirected graph, print all connected components line by line.
 * Example: Given 6 points 'A', 'B', 'C', 'D', 'E', 'F'
 *
 * A => B  B => C  C => A  ( A - B - C ) is a component
 * D => E ( D - E ) is a component
 * F => F Circle graph ( F ) is a component
 *
 * Steps
 * 1. Undirected graph => Adjacency List
 * 2. Do DFS or BFS search to understand connected components
 */

const VERTEX = ['A', 'B', 'C', 'D', 'E', 'F'];
const ROUTES = [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'A'],
    ['D', 'E'],
    ['F', 'F'],
];

const adjacencyList = new Map();

const addNode = (v) => {
    adjacencyList.set(v, []);
}

const addEdge = (v, w) => {
    adjacencyList.get(v).push(w);

    if (v !== w) {
        adjacencyList.get(w).push(v);
    }
}

VERTEX.forEach(v => { addNode(v) });
ROUTES.forEach(route => { addEdge(route[0], route[1]) });

/**
 * Depth First Search algorithm
 *
 * @param startingNode
 * @param component
 * @param checkedVertexes
 * @constructor
 */
const DFS = (startingNode, component= [], checkedVertexes= []) => {
    if (component.indexOf(startingNode) === -1) {
        component.push(startingNode);
        checkedVertexes.push(startingNode);

        const destinations = adjacencyList.get(startingNode);

        for (let i = 0; i < destinations.length; i++) {
            if (component.indexOf(destinations[i]) === -1) {
                DFS(destinations[i], component, checkedVertexes);
            }
        }
    }
}

/**
 * Loop over all Vertexes and separate all components
 *
 * @param VERTEX
 * @returns {[]}
 */
const connectedComponents = (VERTEX) => {
    const checkedVertexes = [];
    const components = [];

    VERTEX.forEach(v => {
        let component = [];

        if (checkedVertexes.indexOf(v) === -1) {
            DFS(v, component, checkedVertexes);

            components.push(component)
        }
    })

    return components;
}

const components = connectedComponents(VERTEX);
console.log(components); // [ [ 'A', 'B', 'C' ], [ 'D', 'E' ], [ 'F' ] ]




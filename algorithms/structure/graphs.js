/**
 *
 */
class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v) {
        this.AdjList.set(v, []);
    }

    addEdge(v, w) {
        this.AdjList.get(v).push(w);

        this.AdjList.get(w).push(v);
    }

    printGraph() {
        let get_keys = this.AdjList.keys();

        for (let i of get_keys) {
            let get_values = this.AdjList.get(i);
            let concatenate  = "";

            for (let j of get_values)
                concatenate  += j + " ";

            console.log(i + " -> " + concatenate );
        }
    }
}


const g = new Graph(6);

const vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

for (let i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}

g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.printGraph();

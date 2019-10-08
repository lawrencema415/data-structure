// graph is a non-linear data structure. A graph G contains a set of vertices
// V and set of Edges E. Graphs has a lot of application in computer science.
class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;

    // Map is a collection of elements where each element is stored as a Key,
    // value pair. Map object can hold both objects and primitive values as
    // either key or value. When we iterate over the map object it returns
    // the key,value pair in the same order as inserted.
    this.AdjacentList = new Map();
  }

  // add Vertex(v)
  addVertex(v) {
    this.AdjacentList.set(v,[]);
  }
  // add Edge (v, w)
  addEdge(v,w) {

    this.AdjacentList.get(v).push(w);

    this.AdjacentList.get(w).push(v);
  }
  // print Graph()
  printGraph() {
    let get_keys = this.AdjacentList.keys();
    for( let i of get_keys) {
      let getValues = this.AdjacentList.get(i);
      let conc = "";

      for(let j of getValues) {
        conc += j + ' ';
      }
      console.log(i + " -> " + conc);
    }
  }
  // bfs(v)
  // DFS - to go forward in depth while there is any such possibility, if not then, backtrack
  // dfs(v)
}


var g = new Graph(6);
// vertex - highest point; the top or apex. Each angular point of a polygon, polyhedron, or other figure.
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
// output A -> B D E, B -> A , D -> A, E -> A, F and C -> none

g.addEdge('B', 'C');
// now C connected to B

g.addEdge('D', 'E');
// output will include D-> A E and E -> A D since D and E connected
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.printGraph();

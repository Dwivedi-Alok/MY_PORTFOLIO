#include <iostream>
using namespace std;

#define N 4  // Number of nodes (example graph)

// Warshall's Algorithm to compute transitive closure
void warshallTransitiveClosure(int graph[N][N]) {
    int closure[N][N];

    // Copy the input graph into closure matrix
    for (int i = 0; i < N; i++)
        for (int j = 0; j < N; j++)
            closure[i][j] = graph[i][j];

    // Apply Warshall’s Algorithm
    for (int k = 0; k < N; k++) {  // Intermediate node
        for (int i = 0; i < N; i++) {  // Start node
            for (int j = 0; j < N; j++) {  // End node
                closure[i][j] = closure[i][j] || (closure[i][k] && closure[k][j]);
            }
        }
    }

    // Print the Transitive Closure matrix
    cout << "Transitive Closure Matrix:\n";
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            cout << closure[i][j] << " ";
        }
        cout << endl;
    }
}

// Main function
int main() {
    int graph[N][N] = {
        {1, 1, 0, 1},
        {0, 1, 1, 0},
        {0, 0, 1, 1},
        {1, 0, 0, 1}


    };

    warshallTransitiveClosure(graph);
    return 0;
}

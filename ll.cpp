#include <iostream>
#include <vector>
#include <algorithm>

void rotateArray(std::vector<int>& arr, int k) {
    k = k - 1; // Rotate by k-1 positions
    int n = arr.size();
    k = k % n; // Handle cases where k is larger than the array size
    std::reverse(arr.begin(), arr.begin() + k);
    std::reverse(arr.begin() + k, arr.end());
    std::reverse(arr.begin(), arr.end());
}

int main() {
    std::vector<int> arr = {3, 2, 1, 4};
    int k = 3;

    // Step 1: Rotate the array by k-1 positions
    rotateArray(arr, k);

    // Step 2: Sort the array in ascending order
    std::sort(arr.begin(), arr.end());

    // Step 3: Store the value of k in the array
    arr.push_back(k);

    // Step 4: Output the value of k
    std::cout << "The value of k is: " << k << std::endl;

    // Optional: Print the final array
    std::cout << "The final array is: ";
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
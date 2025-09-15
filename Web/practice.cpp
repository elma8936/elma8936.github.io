#include <iostream>
#include <string>

int main() {
    std::string str = "a";  // The string
    int sum = 0;  // Variable to hold the sum of ASCII values

    // Loop through each character in the string
    for (char c : str) {
        sum += static_cast<int>(c);  // Add the ASCII value of each character to sum
    }

    // Output the sum of ASCII values
    std::cout << "Sum of ASCII values: " << sum << std::endl;

    return 0;
}
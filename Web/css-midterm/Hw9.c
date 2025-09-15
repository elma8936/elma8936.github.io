#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>

// Uniform Hash Function
unsigned int uniform_hash(const char *key, int num_buckets) {
    unsigned int hash = 0;
    
    // Simple hash function: Sum the ASCII values of all characters
    for (int i = 0; key[i] != '\0'; i++) {
        hash = (hash * 31) + key[i]; // Using 31 as a multiplier is a common technique
    }
    
    // Return the modulo to ensure the hash value fits within the number of buckets
    return hash % num_buckets;
}

// Function to simulate uniformly random bucket assignment
void test_hash_function(const char *keys[], int num_keys, int num_buckets) {
    // Array to count how many times each bucket is assigned a key
    int bucket_count[num_buckets];
    
    // Initialize all bucket counts to 0
    for (int i = 0; i < num_buckets; i++) {
        bucket_count[i] = 0;
    }
    
    // Apply the hash function to each key and count which bucket it falls into
    for (int i = 0; i < num_keys; i++) {
        unsigned int bucket = uniform_hash(keys[i], num_buckets);
        bucket_count[bucket]++;
    }
    
    // Print the distribution of keys across the buckets
    printf("Bucket distribution:\n");
    for (int i = 0; i < num_buckets; i++) {
        printf("Bucket %d: %d keys\n", i, bucket_count[i]);
    }
}

int main() {
    // Set the number of buckets (for example, 10 buckets)
    int num_buckets = 10;
    
    // Set of keys (could be last names, etc.)
    const char *keys[] = {
        "Smith", "Johnson", "Williams", "Brown", "Jones",
        "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"
    };
    
    // Number of keys
    int num_keys = sizeof(keys) / sizeof(keys[0]);
    
    // Seed the random number generator (optional, for simulation of randomness)
    srand(time(NULL));
    
    // Test the uniform hash function with the set of keys
    test_hash_function(keys, num_keys, num_buckets);
    
    return 0;
}
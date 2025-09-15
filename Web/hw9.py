import numpy as np
import matplotlib.pyplot as plt
from sympy import primerange


def hasFunction1(name, buckets):
    sum = 0
    for letter in name:
        sum += ord(letter) - 64

    sum = sum % buckets

    return sum



def hasFunction2(name, buckets, randomNumber):
    sum = 0
    for letter in name:
        sum += (ord(letter) - 64) * randomNumber

    sum = sum % buckets

    return sum



def plotResults(collisionCounter):
    x = np.arange(len(collisionCounter))
    y = collisionCounter

    # plt.bar(x, y)
    plt.plot(x, y, color='r')
    plt.xlabel('# of buckets')
    plt.ylabel('Frequency of collisions')
    plt.title('Frequency of collisions vs number of buckets')
    plt.show()
    


def plotLongestChainXn(n_values, longestChain):
    print('n_values: ', len(n_values))
    print('Longest Chain: ', len(longestChain))
    plt.plot(n_values, longestChain)
    plt.xlabel('Number of strings')
    plt.ylabel('Longest Chain Length')
    plt.title('Longest Chain Length vs Number of strings function')
    plt.show()


buckets = 5701

# Load the data
data = np.loadtxt('dist.all.last.txt', delimiter='\t', dtype=str)
data = data[:,0]

# Choose 50% of the data randomly
sample_size = len(data) // 2
random_sample = np.random.choice(data, sample_size, replace=False)

# Choose a random number form 0 to buckets-1
randomNumber = np.random.randint(0, buckets -1)
hashResults = np.zeros(buckets)



# n_buckets = list(primerange(1, 5000))
n_buckets = list(primerange(1, 200))
collisionCounter = []
print('n_buckets: ', len(n_buckets))

numberOfCollisions = 0
for ntempBuckets in n_buckets:
    print(ntempBuckets)
    for name in random_sample:
        temp = hasFunction2(name, ntempBuckets, randomNumber)
        if hashResults[temp] != 0:
            numberOfCollisions += 1
        hashResults[temp] += 1
    collisionCounter.append(numberOfCollisions)
    hashResults = np.zeros(buckets)
    numberOfCollisions = 0

collisionCounter = np.array(collisionCounter)

plotResults(collisionCounter)
# plotLongestChainXn(n_values, longestChain)


# for name in random_sample:
#     temp = hasFunction2(name, buckets, randomNumber)
#     hashResults[temp] += 1

# plotResults(hashResults)




# n_values = range(10, len(random_sample) + 1, 10)
# longestChain = []

# print('Looping until: ', n_values)
# for n in n_values:
#     print(n)
#     for name in random_sample[:n]:
#         temp = hasFunction2(name, buckets, randomNumber)
#         hashResults[temp] += 1
#     longestChain.append(max(hashResults))
#     hashResults = np.zeros(buckets)

# # Convert longestChain to a numpy array
# longestChain = np.array(longestChain)
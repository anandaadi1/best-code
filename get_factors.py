from math import sqrt

def get_factors(number):
    factors = []
    square_root = round(sqrt(number))
    for i in range(1, square_root + 1):
        if number % i == 0:
            factors.append(int(number / i))
            factors.append(i)

    return factors

n = int(input("Enter number: "))
print(get_factors(n))

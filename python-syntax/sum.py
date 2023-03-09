def sum_nums(nums):
    """Given list of numbers, return sum of those numbers.

    For example:
      sum_nums([1, 2, 3, 4])

    Should return (not print):
      10
    """  

    # Python has a built-in function `sum()` for this, but we don't
    # want you to use it. Please write this by hand.

    # YOUR CODE HERE
    total = 0
    for i in range(len(nums)):
        total += nums[i]
    return total


print("sum_nums returned", sum_nums([1, 2, 3, 4]))
print("sum_nums returned", sum_nums([10,20,30,40]))
print("sum_nums returned", sum_nums([10,30,50,70]))

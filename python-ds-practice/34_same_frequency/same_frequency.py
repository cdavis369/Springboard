def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    return getFrequency(num1) == getFrequency(num2)

def getFrequency(num):
    freq = {}
    for c in str(num):
        freq[c] = freq[c] + 1 if c in freq else 1
    return freq

# print(same_frequency(551122, 221515))
# print(same_frequency(321142, 3212215))
# print(same_frequency(1212, 2211))
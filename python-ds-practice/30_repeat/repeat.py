def repeat(phrase, num):
    """Return phrase, repeated num times.

        >>> repeat('*', 3)
        '***'

        >>> repeat('abc', 2)
        'abcabc'

        >>> repeat('abc', 0)
        ''

    Ignore illegal values of num and return None:

        >>> repeat('abc', -1) is None
        True

        >>> repeat('abc', 'nope') is None
        True
    """
    string = ""
    if isinstance(num, int) and num > -1:
        for i in range(num):
            string += phrase
        return string
    return None

# print(repeat('*', 3))
# print(repeat('abc', 2))
# print(repeat('abc', 0))
# print(repeat('abc', -1))
# print(repeat('abc', 'nope'))
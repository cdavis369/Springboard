def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """
    frequency = {}
    for char in phrase:
        if char not in frequency:
            frequency[char] = 1
        else:
            frequency[char] += 1
    return frequency
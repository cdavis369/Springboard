def includes(collection, sought, start=None):
    """Is sought in collection, starting at index start?

    Return True/False if sought is in the given collection:
    - lists/strings/sets/tuples: returns True/False if sought present
    - dictionaries: return True/False if *value* of sought in dictionary

    If string/list/tuple and `start` is provided, starts searching only at that
    index. This `start` is ignored for sets/dictionaries, since they aren't
    ordered.

        >>> includes([1, 2, 3], 1)
        True

        >>> includes([1, 2, 3], 1, 2)
        False

        >>> includes("hello", "o")
        True

        >>> includes(('Elmo', 5, 'red'), 'red', 1)
        True

        >>> includes({1, 2, 3}, 1)
        True

        >>> includes({1, 2, 3}, 1, 3)  # "start" ignored for sets!
        True

        >>> includes({"apple": "red", "berry": "blue"}, "blue")
        True
    """
    print(type(collection))
    # print(isinstance(collection, dict))
    if isinstance(collection, dict):
        return sought in collection.values()
    elif isinstance(collection, set) or start is None and isinstance(collection, list) or isinstance(collection, str):
        return sought in collection
    elif sought is not None and isinstance(collection, list) or isinstance(collection, str) or isinstance(collection, tuple):
        return sought in collection[start:]
    return None

# print(f"{includes([1, 2, 3], 1)} should be True")
# print(f"{includes([1, 2, 3], 1, 2)} should be False")
# print(f'{includes("hello", "o")} should be True')
# print(f"{includes(('Elmo', 5, 'red'), 'red', 1)} should be True")
# print(f"{includes({1, 2, 3}, 1)} should be True")
# print(f"{includes({1, 2, 3}, 1, 3)} should be True")
# print(f'{includes({"apple": "red", "berry": "blue"}, "blue")} should be True')
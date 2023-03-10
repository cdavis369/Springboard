def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """
    phrase = phrase.split(" ")
    result = []
    for word in phrase:
        result.append(word.capitalize())
    return " ".join(result)

# print(titleize("the cow jumped"))
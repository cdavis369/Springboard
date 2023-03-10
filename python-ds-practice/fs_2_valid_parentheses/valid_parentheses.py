def valid_parentheses(parens):
    """Are the parentheses validly balanced?

        >>> valid_parentheses("()")
        True

        >>> valid_parentheses("()()")
        True

        >>> valid_parentheses("(()())")
        True

        >>> valid_parentheses(")()")
        False

        >>> valid_parentheses("())")
        False

        >>> valid_parentheses("((())")
        False

        >>> valid_parentheses(")()(")
        False
    """
    parensCheck = []
    
    if len(parens) is not 0 and parens[0] is ')' or parens[-1] is '(':
        return False

    for char in parens:
        if char is '(':
            parensCheck.append(char)
        elif char is ')' and len(parensCheck) is not 0 and parensCheck[-1] is '(':
            parensCheck.pop()
        else:
            parensCheck.append(char)
            
    if len(parensCheck) is not 0:
        return False
    return True
            
# print(valid_parentheses("()"))
# print(valid_parentheses("()()"))
# print(valid_parentheses("(()())"))
# print(valid_parentheses(")()"))
# print(valid_parentheses("())"))
# print(valid_parentheses("((())"))
# print(valid_parentheses(")()("))
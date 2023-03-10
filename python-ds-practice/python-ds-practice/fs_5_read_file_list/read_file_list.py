import os

def read_file_list(filename):
    """Read file and print out each line separately with a "-" before it.

    For example, if we have a file, `dogs`, containing:
        Fido
        Whiskey
        Dr. Sniffle

    This should work:

        >>> read_file_list("dogs")
        - Fido
        - Whiskey
        - Dr. Sniffle

    It will raise an error if the file cannot be found.
    """

    path = f"{os.getcwd()}/python-ds-practice/fs_5_read_file_list/{filename}"
    file = open(path, "r")
    print(f"======== {filename} ========")
    for line in file:
        line = line.strip('\n')
        print(f"- {line}")
        
read_file_list("dogs")
read_file_list("cats")
import random
import os
"""Word Finder: finds random words from a dictionary."""


class WordFinder:
    def __init__(self, file):
        self.file = file
        self.lines = self.getLines()
        print(f"{len(self.lines)} words read")
        
    def getLines(self):
        path =  f"{os.getcwd()}/python-oo-practice/{self.file}"
        return open(path, "r").readlines()    
     
    def random(self):
        return random.choice(self.lines).strip("\n")
        


word = WordFinder("words.txt")
word.random()

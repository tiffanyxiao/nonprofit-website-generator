'''
Author: Tiffany Xiao
Version: 4.14.18
Python version: Python 3
Description of Program: Python program to help strip html code of white space and escape quotation marks. Automatically reads html.txt file.
'''
def writeFile(replaceText):
    ''' Function to write a new html file with replaced text'''
    file = open('htmlCondensed.txt', 'w')
    for line in replaceText:
        file.write(line)
    file.close()

def replaceHtml(text):
    ''' Function to strip new line characters and escape white space'''
    replaceText = []
    for line in text:
        replacePart = line.replace('"','\\"')
        replaceText.append(replacePart)
    return replaceText

def readFile():
    ''' Function to read the file '''
    file = open('html.text', 'r')
    lines = file.readlines()
    text = []
    for line in lines:
        textpart = line.strip()
        text.append(textpart)
    file.close()
    return text

def main():
    text = readFile()
    replaceText = replaceHtml(text)
    writeFile(replaceText)
    for line in replaceText:
        print(line, end = "")
main()

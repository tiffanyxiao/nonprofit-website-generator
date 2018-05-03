'''
Author: Tiffany Xiao
Version: 4.14.18
Python version: Python 3
Description of Program: Python program to help strip html code of white space and escape quotation marks. Automatically reads html.txt file.
'''
def write_file(replace_text):
    ''' Function to write a new html file with replaced text'''
    file = open('htmlCondensed.txt', 'w')
    for line in replace_text:
        file.write(line)
    file.close()

def replace_html(text):
    ''' Function to strip new line characters and escape white space'''
    replace_text = []
    for line in text:
        replace_part = line.replace('"','\\"')
        replace_text.append(replace_part)
    return replace_text

def read_file():
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
    ''' Main function to run all helper functions and print replaced text'''
    text = read_file()
    replace_text = replace_html(text)
    write_file(replace_text)
    for line in replace_text:
        print(line, end = "")

main()

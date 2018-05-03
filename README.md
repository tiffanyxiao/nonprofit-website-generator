# nonprofit-website-generator
A project aimed to help nonprofit organizations generate a basic website for their organization.

## GenNow
The name of our project is currently "GenNow" (although the repository is "nonprofit-website-generator"). "Gen"erate your website "Now"!

## Authors
Tiffany Xiao and Khadidja Fares

## Description of Project
The main function of this project is to provide the client with a simple form that they fill out, and then after submitting the form an HTML chunk will be generated for the client to copy and paste.

## How to Run
* Method #1: See website hosted live at: https://tiffanyxiao.github.io/nonprofit-website-generator/
* Method #2: Click on "index.html" in main directory to open home page.

## What's Included

### Main files
The main files of this repo is the main website (index.html) and its components (other pages, javascript and style files). This is the GUI that the client will utilize, with a javascript backend.

### Templates
The templates folder contains all templates utilized - all theme, color and html templates for the client's generated website.

### htmlStrip
The htmlStrip folder contains a python program that strips a text document of its white space and escapes all quotation marks. This is useful to clean the templates utilized in the main javascript file - simply copy and paste the outputted strings by the htmlStrip program and utilize them as the string variables that will be replaced with the inputted field information.

Python version: python 3

Run the python program using: python htmlStrip.py

### Template Test
Before implementing the GUI, the files in this folder was used to test the replacement functionalities.

### Themes
Contains all color themes utilized in the project.
Source for these themes: http://blog.visme.co/website-color-schemes/

## Logical Errors
Some issues we identified in FP3 include:
* Addressing empty fields - currently the form does not have any "empty" fields since we utilize values/placeholders (the user would have to physically remove the placeholder). This causes a logical error, as fields would be missing but there may still be headers (i.e. a header called "Founder" but no description of the founder).
* Optional fields - implement the functionality of allowing the user to skip certain fields on the form.

All of these issues have since been resolved.

## Choices for Elegance and Efficiency
* Use of single html file containing all pages (instead of multiple pages) - this makes it easier for the client to copy and paste the generated html code onto an external hosting service. It also helps creating a preview simpler. We utilized this "single html file, multiple pages" again as a trick to display the "preview" of the generated website, which is actually just a hidden page on the main page.
* Efficiency - to reduce the amount of hard coding required for changes in the templates, we created the htmlStrip python programs which can help make pasting hard coded templates into the javascript code faster.

## Independent Learning
Skills that were not covered in the class that were learned/utilized in this project:
* Form submission vs. onlick submission, and how to handle function overriding others in Javascript.
* Dealing with user entered information (requiring inputs, catching empty inputs, invalid links, etc.) on a form/html
* CSS styling (a large portion of the project is creating a user-friendly interface)
* Page hiding/showing and multiple "pages" on one html file (this is used in a couple of places throughout the project for elegance, as it is simpler for both the client and the programmer to put all the pages on one single html file)

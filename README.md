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

### Template Test
Before implementing the GUI, the files in this folder was used to test the replacement functionalities.

### Themes
Contains all color themes utilized in the project.

## Logical Errors
Some issues we will attempt to address in our next version include:
* Addressing empty fields - currently the form does not have any "empty" fields since we utilize values/placeholders (the user would have to physically remove the placeholder). This causes a logical error, as fields would be missing but there may still be headers (i.e. a header called "Founder" but no description of the founder).
* Optional fields - implement the functionality of allowing the user to skip certain fields on the form.

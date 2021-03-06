"use strict"; // enable modern JS features

// get user entered information
// homePage parts
let orgName = "Tiffany's Charity";
let styleSheet = "style.css"
let image = "pic.png"
let description = "LOREN IPSUM"
// aboutPage parts
let missionStatement = "Mission Statement text";
let founderPic = "founderpic.png";
let founderDescript = "Founder Description text";
let dateFounded = "11/03/98";
let historyDescript = "History description text";
let partnerships = "Mom Dad Sister"
// contactPage parts
let email = "email@email.com";
let phoneNumber = "888-888-8888";
// get selected theme and color
let theme = "Emphasis";
let colorScheme = "Professional";

// select theme css code
let themeCode = "";
if (theme == "Basic"){
  themeCode = ".logo{position:absolute;top:20px;left:20px;height:40px;overflow:hidden;color: #color1;font-size:2vw;}.org-name2{font-size:5vw;color:#color2;}.about-header{font-size:5vw;color:#color2;}.about-descript{margin-left: 5%;margin-right:5%}img{width:70%;height:60%;}body{background-color: #color3;}* {padding: 0;margin: 0;font-family: 'Helvetica';color: #color6;}h2 {color: #color4;}nav{background-color: #color7;text-align: right;padding: 20px;}nav li {display: inline-block;margin: 0 8px;padding-top: 1px;}nav li a{color: #color4;padding: 11px;text-decoration: none;}nav li a:hover{background-color: white;color: #color5;}";
} else if (theme == "Emphasis"){
  themeCode = ".logo{text-align:center;top:10px;left:10px;height:40px;padding: 10px;padding-top: 15px;color: #color1;font-size:4vw;}.org-name2{font-size:5vw;color:#color2;}.about-header{font-size:5vw;color:#color2;}.about-descript{margin-left: 5%;margin-right:5%}body{background-color: #color3;}* {padding: 0;margin: 0;font-family: Helvetica;color: black;}h2 {color: #color4;}nav{text-align: center;padding: 10px;padding-top: 20px;}nav li {display: inline-block;margin: 0 8px;padding-top: 1px;}nav li a{color: #color4;padding: 11px;text-decoration: none;}nav li a:hover{background-color: white;color: #color5;}";
}

// select colors (default = simple colors)
let color1 = "C0B283";
let color2 = "373737";
let color3 = "ECECEC";
let color4 = "DCD0C0";
let color5 = "5DA2D5";
let color6 = "000000";
let color7 = "FFFFFF";
if (colorScheme == "Colorful"){
  color1 = "F78888";
  color2 = "90CCF4";
  color3 = "F4F4F4";
  color4 = "F3D250";
  color5 = "373737";
  color6 = "000000";
  color7 = "FFFFFF";
} else if (colorScheme == "Professional"){
  color1 = "FFFFFF";
  color2 = "112D32";
  color3 = "88BDBC";
  color4 = "6E6658";
  color5 = "373737";
  color6 = "000000";
  color7 = "254E58";
}

// store current text into variable text
let head = "<html><head><title> ##ORG NAME## </title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><link rel = \"stylesheet\" type = \"text/css\" href = \"style.css\" /><script>function show(shown, hidden) {document.getElementById(shown).style.display='block';document.getElementById(hidden).style.display='none';return false;}</script><style>";
let cssCode = "</style></head><body id = \"pages\">";
let homePage = "<div id=\"Page1\"><h1 class = \"logo\">##ORG NAME##</h1><nav><div class=\"nav-wrapper\"><ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\"><li><a href=\"#\">HOME</a></li><li><a href=\"#\" onclick=\"return show('Page2','Page1');\">ABOUT</a></li><li><a href=\"#\" onclick=\"return show('Page3','Page1');\">CONTACT</a></li></ul></div></nav><div><center><br><img src=\"placeholder.png\"><br><h1 class = \"org-name2\"> ##ORG NAME## </h1><br><p style = \"margin-left: 5%; margin-right:5%\"> ##ORG DESCRIPTION##</p></center></div></div>";
let aboutPage = "<div id=\"Page2\" style=\"display:none\"><h1 class = \"logo\">##ORG NAME##</h1><nav><div class=\"nav-wrapper\"><ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\"><li><a href=\"#\" onclick=\"return show('Page1','Page2');\">HOME</a></li><li><a href=\"#\">ABOUT</a></li><li><a href=\"#\" onclick=\"return show('Page3','Page2');\">CONTACT</a></li></ul></div></nav><div><center><br><h1 class =\"about-header\"> ABOUT ##ORG NAME CAPS## </h1><br><h2> Mission Statement </h2><p class = \"about-descript\"> ##MISSION STATEMENT## </p><br><h2> Founder </h2><div><img id = \"founder-pic\" src=\"founder-pic.png\"><p class = \"about-descript\"> ##FOUNDER DESCRIPT##</p></div><h3> Date Founded: ##DATE FOUNDED## </h3><h2> History </h2><p class = \"about-descript\"> ##HISTORY DESCRIPT## </p><h2> Partnerships </h2><h3> ##PARTNERS## <h3></center></div></div>";
let contactPage = "<div id=\"Page3\" style=\"display:none\"><h1 class = \"logo\">##ORG NAME##</h1><nav><div class=\"nav-wrapper\"><ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\"><li><a href=\"#\" onclick=\"return show('Page1','Page3');\">HOME</a></li><li><a href=\"#\" onclick=\"return show('Page2','Page3');\">ABOUT</a></li><li><a href=\"#\">CONTACT</a></li></ul></div></nav><div><center><br><h1 class=\"org-name2\"> CONTACT ##ORG NAME CAPS## </h1><br><h3> Email: ##EMAIL## </h3><br><h3> Phone Number: ##PHONE NUMBER## </h3><br><h6> Website Generated by Tiffany Xiao and Khadidja Fares </h6></center></div></div></body></html>"

// create replaceAll function
String.prototype.replaceAll = function(search, replacement) {
    let target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

// replace page text with user entered information
head = head.replaceAll("##ORG NAME##",orgName).replace("style.css", styleSheet);
themeCode = themeCode.replaceAll("color1", color1).replaceAll("color2", color2).replaceAll("color3", color3).replaceAll("color4", color4).replaceAll("color5", color5).replaceAll("color6", color6).replaceAll("color7", color7);
homePage = homePage.replaceAll("##ORG NAME##", orgName).replace("placeholder.png", image).replace("##ORG DESCRIPTION##", description);
aboutPage = aboutPage.replaceAll("##ORG NAME CAPS##", orgName.toUpperCase()).replaceAll("##ORG NAME##", orgName).replaceAll("##MISSION STATEMENT##", missionStatement).replaceAll("founder-pic.png", founderPic).replaceAll("##FOUNDER DESCRIPT##", founderDescript).replaceAll("##DATE FOUNDED##",dateFounded).replaceAll("##HISTORY DESCRIPT##", historyDescript).replaceAll("##PARTNERS##", partnerships);
contactPage = contactPage.replaceAll("##ORG NAME CAPS##", orgName.toUpperCase()).replaceAll("##ORG NAME##", orgName).replaceAll("##EMAIL##", email).replaceAll("##PHONE NUMBER##", phoneNumber);

// get current div
let div = document.getElementById('html-code-holder');

// create paragraph element
let textHolder = document.createElement('p');

textHolder.textContent = head+themeCode+cssCode+homePage+aboutPage+contactPage;

div.appendChild(textHolder);

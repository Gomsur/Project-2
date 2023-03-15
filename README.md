# **Row of 3**
## **Site Overview**
I decided to make a game called three in a row or row of three, a classic board game where two players challenge eachother in a game of whoever gets three of their markers in a row first.
However it can also end up being a draw game, where both players cant put more of their markers on the game board and would have to challenge eachother in another game.
There is also clear instructions mentioned under the instruction tab on how the game is played.
Most important is to have fun!

![responive-all](/assets/images/Responsive.all.png)
![winningmsg](/assets/images/Winning%20screen.png)​
![instructions](/assets/images/Instructions.png)

## Table of contents:
1. [**Site Overview**](#site-overview)
1. [**Planning stage**](#planning-stage)
    * [***Target Audiences***](#target-audiences)
    * [***User Stories***](#user-stories)
    * [***Site Aims***](#site-aims)
    * [***Color Scheme***](#color-scheme)
    * [***Typography**](#typography)
1. [**Current Features Common to all pages**](#current-features-common-to-all-pages)
    * [***The rest of your features***](#features)
1. [**Future-Enhancements**](#future-enhancements)
1. [**Testing Phase**](#testing-phase)
1. [**Deployment**](#deployment)
1. [**Tech**](#tech)
1. [**Credits**](#credits)
    * [**Honorable mentions**](#honorable-mentions)
    * [**General reference**](#general-reference)
    * [**Content**](#content)
​
## **Planning stage**

### **Target Audiences:**
* Users interested in retro gaming 
* Users interested in a challenging one versus one game
* Users who wants a simple quick game

​
### **User Stories:**
* As a user, I want the game to be quick and easy to navigate
* As a user, I want the game to be repeatable (play again option)
* As a user, I want the retro feeling of a game
* As a user, I want clear instructions on how to play the game

​
### **Site Aims:**
* Give the user a retro playable game
* 1 versus 1 game type
* Repeatable game type

​
### **Color Scheme:**
​
For "X" symbol I went with a red color
For "O" symbol I went with a blue color
The winning message button I wanted to have a solid white (white) background, to make it easy for the end user to navigate.
The text of the winning player I went with green, so here I chose (rgb(1, 121, 67);).
Instruction button is solid black but hovering is set to green.
When clicking the instruction button, the text is green and the background turns black for the user to navigate easier.
When the user is ready to play, they press the white "PLAY" button.

* rgb(1, 121, 67);
* (black, #030100;)
* (white)
* #ff3300;
* Blue
​

## **Typography**
* Throughout the page, these fonts were used:
  * 'Courier New', Courier, monospace; - for the winning message
  * Times new roman - For instructions

​
## **Current Features Common to all pages**
​
#### **features**
​
## **Future-Enhancements**
* A scoreboard would be possible to make, keeping track of both 'X' and 'O's scores, for users who wants to play three games for example.
​
* It would be possible to make the board even bigger, for the game to be playable even harder or just make the game play last longer.

* Making hovering before placing your marker would be another option to consider.
​

## **Testing Phase**
* Responsiveness -  I checked the responsiveness with the inspect tool, seeing that it is responsive on all different phones, tablets and computers, but also checked it with AmIResponsive which is mentioned below.
​
* Functionality - Everything regarding functionality works without bugs.
​
* Validators - I used jshint for java, jigsaw for css & for HTML I used validator.w3

![jshint](/assets/images/jshint.png)
![jigsaw](/assets/images/Jigsaw.png)
![W3C](/assets/images/W3C.html.png)

## **Bugs**
* Issue - I was not able to place the different markers, making them stick to the board game.
* Cause - I placed my javascript files to overrun
* Resolution - Swapped lines on the javascript files so that the other one did not overrun the first one.

* Issue - When 'X' for example won, you could still place more markers on the board, not ending the game
* Cause - The game ended but I needed something to make the player aware of it
* Resolution - Added a winning message that caught the players attention.
​
***
## **Deployment**
I deployed the page on GitHub pages via the following procedure: -
​
1. From the project's [repository](https://github.com/Gomsur/Project-2), go to the **Settings** tab.
2. From the left-hand menu, select the **Pages** tab.
3. Under the **Source** section, select the **Main** branch from the drop-down menu and click **Save**.
4. A message will be displayed to indicate a successful deployment to GitHub pages and provide the live link.
​
You  can find the live site via the following URL - [live webpage](https://gomsur.github.io/Project-2/)
***
​
## **Tech**
- Javascript
- CSS
- HTML
- README
​

## **Credits**
### **Honorable mentions**
* Alex Lee on youtube helped me out a lot with this youtube video. https://www.youtube.com/watch?v=gQb3dE-y1S4
* Stackoverflow for tips and tricks
* geeksforgeeks for tips and tricks
* My fantastic mentor Antonio helped me with any questions I had during my project.
* Also took help from a friend in class named Fredrik.
* Help from my real life friend who works with programming.
* Took inspiration from here https://www.youtube.com/watch?v=Y-GkMjUZsmM

### **Content:**
I listened a lot to a guy on youtube called Alex Lee.
https://www.youtube.com/watch?v=gQb3dE-y1S4

Also used Geeksforgeeks a lot.
https://www.geeksforgeeks.org/tic-tac-toe-game-in-java/

Took some help from this, following him with my own adjustments.
https://www.youtube.com/watch?v=Y-GkMjUZsmM

Responsiveness was checked here
https://ui.dev/amiresponsive
​
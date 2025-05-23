# Homework #2

Total Points: 10

The aims of this assignment are:

1. To improve your muscle-memory with the essentials of CSS selectors
2. To recognize when an HTML should change to accommodate the needs of CSS
3. To get practice at researching new CSS techniques
4. To get practice at modifying the DOM with JavaScript

### The Challenge

1. Try to create what you see in [target](target.png) and [target-extra](target-extra.png).
2. We all know that weather in Chicago can change any minute.  Clicking on the large weather icon should generate a new random icon. Similarly, clicking on an specific metric such as the temperature text, then humidity icon or text, or the wind icon or text should cause that metric's text to be updated with a new, random value. However, these values must be reasonable for Chicago at any time of year (i.e -100F is not reasonable, nor is 200% humidity, etc.)

Some starter HTML and CSS code has been provided, as well as the set of icons you should use.

I've also provided plain, non-spec versions called [target-plain](target-plain.png) and [target-extra-plain](target-extra-plain.png) in case it's helpful to visualize the final page without the specifications in the way.

Please note:

* Your solution is NOT intended to display the real weather.  This is just a "mockup" of a typical weather widget. 
* Your solution does NOT need to be "pixel-perfect" to the target. But it should be reasonably close, in terms of overall layout and adhering to all of the specifications as shown in in the target images.

Add code wherever you want. Your goal is to build a web page that resembles the target as closely as possible.

### Hints

Can you "see" how to divide the page into rows and columns?  If so, then `display: flex` to help make a multi-column layout is your friend :-)

Some CSS concepts you will likely need to research:

* box-shadow
* text-align
* various flex-related properties
* border-radius
* The `auto` value option for the margin property
* gradient background colors

One final hint: `margin` values can be positive... and negative!

### Warnings

* Please stick to the CSS approaches we've taken in class. Specifically, do not use any prewritten CSS frameworks. 
* Make sure you make your final commit before the deadline.

Please do not copy/paste solutions from the internet.  You MAY google and use any online resources (including AI) to research and to learn. Just don't copy/paste! At least hand-type the code yourself. Sounds funny but that's actually the best way to learn this material properly.

### Rubric

* 3 points for "standard" appearance: Overall layout is reasonably close and follows the specifications of the `target.png` image
* 3 points for "extra" appearance: Reasonably close to the extra specifications of the `target-extra.png` image
* 4 points: 1 pt each for clicking to change the current weather icon, temperature, wind, and humidity values.

### File organization: 
* target_plain.html has the overall layout from target.png
* target-extra.html has the extra appearance 
* weather-icon.js contains the functions for the clicking changes


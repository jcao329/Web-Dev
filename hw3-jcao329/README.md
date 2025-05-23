# Homework #3

Total Points: 20

The aims of this assignment are:

1. To learn how to use background event loops to improve the user experience
2. To improve your analysis skills of legacy JS code
3. To get practice at researching new CSS animation techniques

### The Challenge

For this assignment, we will imagine that you have inherited the code of a Javascript-based game that simulates a card game called "Blackjack", where a human player plays against the computer.

But the code isn't perfect, and so the game doesn't function correctly!

PLEASE WATCH THE ACCOMPANYING VIDEO for overall directions.

We further image that have already shipped this game to the public, and that
bug reports have been pouring in.  There are so many bugs that the game is nearly 
unplayable. 

You have been assigned a set of bugs to fix, so that the game can become playable again.
For each bug, you will need to determine what might
be causing the symptom that's being reported, and then you will need to modify the code to fix the 
underlying problem.

In addition, a recent code review on your team yielded a couple of suggestions: one on how to improve
the code, and another on how to improve the user experience.  

These are listed below.  Happy coding!

**BUG REPORTS (15 points):**

Each bugfix below is worth 3 points. Solve them in any order that you feel best.

1. "The game does not recognize that I should win instantly if my cards sum up to exactly 21, nor does not recognize that I should lose instantly if my cards sum to more than 21"
2. "When starting a new game, any leftover cards from a previous game should be cleared away."
3. "The computer's cards seem to appear all at once, rather than appearing to be slowly dealt from the deck one card at a time."
4. "The Hit and Stand buttons should disappear while it's the computer's turn, but they remain on the screen."
5. "The computer claims to have won when I took 3 cards for a sum of 17, and the computer took four cards for a sum 22. The computer should have lost, because it went over 21."

Plus, there were two suggestions during code review from your coding team.

**CODE REVIEW FEEDBACK (5 points)**

1. (3 pts) "The three event handler functions `onHitClicked`, `onStandClicked`, `onResetClicked` seem unnecessary. Can you remove them and yet ensure the game continues to work without them."
2. (2 pts) "It would be nice if there was some kind of animation or visual effect whenever a new card is being dealt. Maybe have each card slowly appear in-place, or maybe fly in from an edge of the screen, or anything that would make the game more visually interesting"



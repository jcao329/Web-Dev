# Homework #1

Total Points: 10

The aims of this assignment are:

1. To become familiar with the primary purpose of HTML5: _semantic markup_.
2. To be introduced to the difference between the _state_ of an HTML document and 
its onscreen appearance, often referred to as its _rendered representation_.

### The Challenge

Your challenge is to write code that transforms the provided source file, `syllabus.md`, into an HTML file so that your output exactly matches the HTML code in `target.html` (whitespace differences are acceptable).

Write code in Python, Ruby, C, or C++ to transform syllabus.md into a file that exactly matches what you see in `target.html`.  Find the standard rules of the Markdown language to do the conversion.  

Note: you may not completely hardcode the resulting HTML.  Grading will consist of modifying the original syllabus.md in some way to ensure that the corresponding `<body>` element is modified appropriately.

Be assured that you do NOT need to implement a full Markdown processor.  You only need to support the markup you see in `syllabus.md`.

Finally, please include instructions for how to run your transformation program by modifying this README file
or by providing comments at the top of your Python/Ruby/C file.

(If you want to use a different programming language, please confirm with the instructor or TA first.)

If you have questions, feel free to post them in the Ed discussion tool that you can launch from within Canvas.

### Rubric

* 3 points: The resulting HTML constitutes a valid HTML5 document.
* 2 points: Your code recognizes when to use `h1` and `h2` tags
* 2 points: Your code recognizes when to use `p` and `b` tags
* 2 points: Your code recognizes when to use `ul` and `li` tags
* 1 point: Your code outputs the final document to stdout (the screen) or a file named `syllabus.html` in the same directory as this README.md file.



### HOW TO USE:
While in the directory containing syllabus.md and parse.py, in the command line run: 'python parse.py' or 'python3 parse.py' depending on the version of python you have installed on your computer. A file 'syllabus.html' should be created in the same directory. 
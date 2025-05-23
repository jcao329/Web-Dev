import re


HEADER = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homework #1</title>
    <link rel="stylesheet" href="styles.css">
</head> 
        """


class Parser():
    def __init__(self, filename):
        with open(filename) as f:
            self.lines = self.preprocess(f)
    
    def preprocess(self, file):
        lines = []
        for line in file:
            clean_line = line.strip()
            if clean_line != "":
                lines.append(clean_line)
        return lines
    
    def assemble_line(self, line):
        if line.startswith("#"):
            return HeaderInstruction(line)
        elif line.startswith("*"):
            if line.startswith("**"):
                return ParagraphInstruction(line)
            return ListInstruction(line)
        else:
            return ParagraphInstruction(line)

    
    def get_body(self):
        html_lines = []
        inside_ul = False

        for line in self.lines:
            instruction = self.assemble_line(line)
            if isinstance(instruction, ListInstruction) and not inside_ul:
                html_lines.append("<ul>\n")
                inside_ul = True
            
            if not isinstance(instruction, ListInstruction) and inside_ul:
                html_lines.append("</ul>\n")
                inside_ul = False
            
            html_lines.append(str(instruction))
        if inside_ul:
            html_lines.append("</ul>\n")

        return html_lines
    
class HeaderInstruction():
    def __init__(self, line):
        self.line = line

    def __str__(self):
        count = 0
        i = 0
        while self.line[i] == "#":
            i += 1
            count += 1
        
        return f"<h{count}>" + self.line[i:] + f"</h{count}>"
        
class ParagraphInstruction(): 
    def __init__(self, line):
        self.line = line
    

    def convert_links(self, text):
        r = re.compile(r"(https://[^ ]+)")
        return r.sub(r'<a href="\1">\1</a>', text)
    
    def __str__(self):
        if_link = self.convert_links(self.line)
        if if_link.startswith("**") and if_link.endswith("**"):
            return "<p><b>" + if_link[2:-2] + "</p></b>"
        
        return "<p>" + if_link + "</p>"


class ListInstruction():
    def __init__(self, line):
        self.line = line

    def __str__(self):
        return "<li>" + self.line[1:] + "</li>"


if __name__ == "__main__":
    with open("syllabus.html", "w") as f:
        f.write(HEADER)
        f.write("<body>\n")
        lines = Parser("syllabus.md").get_body()
        for line in lines:
            f.write(line + '\n')
        f.write("</body>\n</html>")
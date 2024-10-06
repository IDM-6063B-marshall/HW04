# p5.js multi sketch template

By putting different sketch.js and index.html files in directories we can more easily switch between multiple experiments.

---
SKETCH A

I started with my HW03B code from last week and experimented with randomizing different portions of the code. I liked the color randomization from last week and decided to keep the background and fill colors white. 

I wanted the whole window filled so I kept the starting point of the loop at between (0, 0) and (5, 5), randomly generated. I tried to create some randomized variables but re-used them too much, which just recreated the grid. I had some success with rectangles but it still wasn't as varied as I wanted so I swapped them out with ellipses. 
---
SKETCH B

I decided to recreate Wall Drawing #45 (1970)" "Straight lines 25 cm long, not touching, covering the wall evenly."

I initially tried to set up the loops using proper lines, but they didn't replicate correctly so I decided to stick with a very very skinny rectangle that looks like a line. I decided 25 centimeters could just be 25 pixels (I also tried 250 but I didn't like how long they were compared to the width). I was trying to imitate hand-drawing these so I randomizes the length of the line between 20 and 20 pixels. Since the instructions say the lines cover the wall "evenly" I didn't randomize how much the x and y values increase by, but kept those as constant while randomizing the rx/ry coordinates of each new line. This created some variation without having the lines run into each other. I realized at the end the lines didn't have to be vertical so I tried rotating them but actually vertical lines are what first occured to me so I stuck with them. 


---
This is a README file that can be used to describe and document your assignment.

Markdown Cheatsheet (from [https://www.markdownguide.org/cheat-sheet/](https://www.markdownguide.org/cheat-sheet/)):

---
---

# Heading1
## Heading2
### Heading3
#### Heading4
##### Heading5
###### Heading6

**bold text**

*italicized text*

~~strikethrough text~~

Ordered List:
1. First item
2. Second item
3. Third item

Unordered List:
- First item
- Second item
- Third item

`short code block`

```
extended code block
fun() {
  return 0
}
```

Link:  
[linked text](https://www.example.com)


Image with url:  
![image description](https://dm-gy-6063-2024f-b.github.io/assets/homework/02/clark-espaco-modulado-00.jpg)


Image on repo:  
![image description](./file-name.jpg)


To start a new line, add two spaces at the end of a line, like this:  
this is a new line.


To start a new paragraph, leave an empty line between two lines of text.

This is a new paragraph.

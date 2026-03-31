# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

Answer: The sidebar started to break away from its default positioning. The other elements did not change their position.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

Answer: Although the page is not large enough to be scrolled, setting it to a fixed position locks its placement in the viewport, meaning that scrolling has no effect. Position relative only uses offsets based on its initial static position, which is also dependent on document flow.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

Answer: Absolute positioning moves it relative to its nearest positioned (with a position property) ancestor. In this case, the content div has none, so it falls back to the root positioning. That means that its positioning is relative to 0, 0 on the document root. It is different from fixed because it can be scrolled, since it is not fixed to the viewport.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

Answer: elements with higher z-index property values appear on top of elements with lower z-index property values. Swapping the values for .notice and .content will result in the content div appearing in front of the notice div.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).

    Answer: I first changed the padding of the notice box to only affect the top and bottom of the boxes, so that there are no unwanted shifts in the right side of the notice box because of the padding. I also gave it a defined width property value of 100px. Then, i positioned it, aligning the top and the left properties.

    * Try to change the position of .content to relative then to fixed. What do you observed each time?

    Answer: Relative moves it down closer to where it was if it were static, and fixed keeps it where it was when it was absolute, but scrolling has no effect on its position anymore.

    * What do you observe on about the effect of z-index on .notice and .content boxes?

    Answer: Changing their z-index affects the overlapping parts of the elements. If content has a higher z-index than notice, then it will show up in front of notice, and vice versa.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 

    Static positioning keeps it in the normal document flow. (top-bottom, left-right), and is affected by scrolling. Relative positioning is just like static, except it can be shifted using the positioning properties (top, bottom, left, right). Absolute positioning works like relative, but in relation to a positioned ancestor, instead of the static positioning, and finally, fixed positioning keeps the element in the same place relative to the viewport, meaning it cannot be affected by scrolling.

    b. How does absolute positioning depend on its parent element?

    An absolute positioned element positions itself with top, bottom, left, right properties, relative not to itself like with relative positioning, but to its nearest positioned ancestor, i.e. the closest parent up its family tree that has a position property other than static. It positions itself relative to its parents padding border.

    c. How do you differentiate sticky from fixed (you can research on sticky)?

    Sticky acts like relative positioning until you scroll past a certain threshold defined by its position properties (top: 20px for example). After that, it locks into place, becoming fixed in the viewport.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.

    I would use absolute positioning for large content boxes, to keep them exactly where I want them to be and not have them affected by document flow shenanigans. For moving elements, giving them position: relative and editing their css position property values with JS could be convenient, such as with moving cards and visuals. Sticky positioning can be used for buttons or interactable widgets that you want the user to always be able to interact with, such as with chatboxes, and fixed positioning could serve the same purpose, but with less hassle if you don't want any scrolling to occur.
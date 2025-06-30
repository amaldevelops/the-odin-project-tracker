# Methods for Adding CSS: Excercise COMPLETED on 20/09/2022
In this exercise, you're going to practice adding CSS to an HTML file using all three methods: external CSS, internal CSS, and inline CSS. You should only be using type selectors for this exercise when adding styles via the external and internal methods. You should also use keywords for colors (e.g. "blue") instead of using RGB or HEX values.

There are three elements for you to add styles to, each of which uses a different method of adding CSS to it, as noted in the outcome image below. All other exercises in this section will have a CSS file provided and linked for you, but for this exercise you will have to create the file and link it in the HTML file yourself. This is all about practicing using these different methods and getting the syntax right.

> ## quick tip:
> Do not worry about details in these exercises that are not specifically mentioned in the exercise or self check section. Because the desired outcomes are screenshots, your browser may show a different font, the colors may appear different on your machine, or the spacing between elements may look different. Only concern yourself with the specific items you are supposed to be learning for each exercise.

The properties you need to add to each element are:

* `div`: a red background, white text, a font size of 32px, center aligned, and bold
* `p`: a green background, white text, and a font size of 18px
* `button`: an orange background and a font size of 18px

## Desired Outcome
![desired outcome](./desired-outcome.png)


### Self Check
- Did you use all three methods of adding CSS to an HTML file?
- Did you properly link the external CSS file in the HTML file?
- Does the `div` element have CSS added via the external method?
- Does the `p` element have CSS added via the internal method?
- Does the `button` element have CSS added via the inline method?


## Adding CSS to HTML

Okay, we went over quite a bit so far. The only thing left for now is to go over how to add all this CSS to our HTML. There are three methods to do so.
External CSS

External CSS is the most common method you will come across, and it involves creating a separate file for the CSS and linking it inside of an HTML’s opening and closing <head> tags with a self-closing <link> element:
```
<!-- index.html -->

<head>
  <link rel="stylesheet" href="styles.css">
</head>

/* styles.css */

div {
  color: white;
  background-color: black;
}

p {
  color: red;
}
```
First, we add a self-closing <link> element inside of the opening and closing <head> tags of the HTML file. The href attribute is the location of the CSS file, either an absolute URL or, what you’ll be utilizing, a URL relative to the location of the HTML file. In our example above, we are assuming both files are located in the same directory. The rel attribute is required, and it specifies the relationship between the HTML file and the linked file.

Then inside of the newly created styles.css file, we have the selector (the div and p), followed by a pair of opening and closing curly braces, which create a “declaration block”. Finally, we place any declarations inside of the declaration block. color: white; is one declaration, with color being the property and white being the value, and background-color: black; is another declaration.

A note on file names: styles.css is just what we went with as the file name here. You can name the file whatever you want as long as the file type is .css, though “style” or “styles” is most commonly used.

A couple of the pros to this method are:

    It keeps our HTML and CSS separated, which results in the HTML file being smaller and making things look cleaner.
    We only need to edit the CSS in one place, which is especially handy for websites with many pages that all share similar styles.

#### Internal CSS

Internal CSS (or embedded CSS) involves adding the CSS within the HTML file itself instead of creating a completely separate file. With the internal method, you place all the rules inside of a pair of opening and closing <style> tags, which are then placed inside of the opening and closing <head> tags of your HTML file. Since the styles are being placed directly inside of the <head> tags, we no longer need a <link> element that the external method requires.

Besides these differences, the syntax is exactly the same as the external method (selector, curly braces, declarations):
```
<head>
  <style>
    div {
      color: white;
      background-color: black;
    }

    p {
      color: red;
    }
  </style>
</head>
<body>...</body>
```
This method can be useful for adding unique styles to a single page of a website, but it doesn’t keep things separate like the external method, and depending on how many rules and declarations there are it can cause the HTML file to get pretty big.
Inline CSS

Inline CSS makes it possible to add styles directly to HTML elements, though this method isn’t as recommended:
```
<body>
  <div style="color: white; background-color: black;">...</div>
</body>
```
The first thing to note is that we don’t actually use any selectors here, since the styles are being added directly to the opening <div> tag itself. Next, we have the style= attribute, with its value within the pair of quotation marks being the declarations.

If you need to add a unique style for a single element, this method can work just fine. Generally, though, this isn’t exactly a recommended way for adding CSS to HTML for a few reasons:

    It can quickly become pretty messy once you start adding a lot of declarations to a single element, causing your HTML file to become unnecessarily bloated.
    If you want many elements to have the same style, you would have to copy + paste the same style to each individual element, causing lots of unnecessary repetition and more bloat.
    Any inline CSS will override the other two methods, which can cause unexpected results. (While we won’t dive into it here, this can actually be taken advantage of).

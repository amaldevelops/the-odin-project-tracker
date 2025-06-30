# Class and ID Selectors: Excercise COMPLETED on 24/09/2022
Knowing how to add class and ID attributes to HTML elements, as well as use their respective selectors, is invaluable. It's important to practice using them.

There are several elements in the HTML file provided, which you will have to add either class or ID attributes to, as noted in the outcome image below. You will then have to add rules in the CSS file provided using the correct selector syntax. Look over the outcome image carefully, and try to keep in mind which elements look similarly styled (classes), which ones may be completely unique from the rest (ID), and which ones have slight variations from others (multiple classes).

It isn't entirely important which class or ID values you use, as the focus here is on being able to add the attributes and use the correct selector syntax to style elements. For the colors in this exercise, try using a non-keyword value (RGB, HEX, or HSL). The properties you need to add to each element are:

* **All odd numbered elements**: a light red/pink background, and a list of fonts containing `Verdana` and `DejaVu Sans` with `sans-serif` as a fallback
* **The second element**: blue text and a font size of 36px
* **The third element**: in addition to the styles for all odd numbered elements, add a font size of 24px
* **The fourth element**: a light green background, a font size of 24px, and bold

Quick tip: in VS Code, you can change which format colors are displayed in RGB, HEX, or HSL by hovering over the color value in the CSS and clicking the top of the popup that appears!

> ### Note:
> Part of your task is to add a font to _some_ of these items. Do not worry about the font of the rest of them. Your browser's default font might be different than the one displayed and that's OK for this exercise.

## Desired Outcome
![desired outcome](./desired-outcome.png)


### Self Check
- Do the odd numbered `p` elements share a class?
- Do the even numbered `div` elements have unique IDs?
- Does the Number 3 element have multiple classes?


## Class Selectors

Class selectors will select all elements with the given class, which is just an attribute you place on an HTML element. Here’s how you add a class to an HTML tag and select it in CSS:
```
<!-- index.html -->

<div class="alert-text">
  Please agree to our terms of service.
</div>
```
```
/* styles.css */

.alert-text {
  color: red;
}
```
Note the syntax for class selectors: a period immediately followed by the case-sensitive value of the class attribute. Classes aren’t required to be unique, so you can use the same class on as many elements as you want.

Another thing you can do with the class attribute is to add multiple classes to a single element as a space-separated list, such as class="alert-text severe-alert". Since whitespace is used to separate class names like this, you should never use spaces for multi-worded names and should use a hyphen instead.
ID Selectors

ID selectors are similar to class selectors. They select an element with the given ID, which is another attribute you place on an HTML element:
```
<!-- index.html -->

<div id="title">My Awesome 90's Page</div>

/* styles.css */

#title {
  background-color: red;
}
```
Instead of a period, we use a hashtag immediately followed by the case-sensitive value of the ID attribute. A common pitfall is people overusing the ID attribute when they don’t necessarily need to, and when classes will suffice. While there are cases where using an ID makes sense or is needed, such as taking advantage of specificity or having links redirect to a section on the current page, you should use IDs sparingly (if at all).

The major difference between classes and IDs is that an element can only have one ID. An ID cannot be repeated on a single page, and the ID attribute should not contain any whitespace at all.
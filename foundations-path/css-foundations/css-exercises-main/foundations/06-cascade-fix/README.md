# CSS Methods
This final exercise for CSS Foundations is going to give you a closer look at the cascade, in particular specificity and rule order. Both the HTML and CSS files are filled out for you, so instead of adding rules yourself, you will simply be editing what is provided.

There are a few elements that have some sort of specificity or rule order issue in the provided CSS file. It's up to you to figure out what issue is affecting an element, and how to fix it. You can edit the CSS file by adding, removing, or editing selectors for a declaration block, or by moving declaration blocks around. **You should not edit the HTML file or any of the actual styles in the CSS**.

There are multiple ways to solve this exercise, and we did our best to include all of the possible solutions for each element.

Issues with the cascade can be the bane of their existence for many when it comes to CSS. While you won't become a cascade expert from this exercise alone, and there are other ways to deal with these issues, it is still super helpful to see how these issues affect our final styles and why it's important to order rules carefully.

## Desired Outcome
![desired outcome](./desired-outcome.png)

### Self Check
- Did you make sure to not edit the HTML file?
- If you added selectors to the CSS, do they target a valid HTML element?

_Note: for accessibility reasons, the style in this exercise has changed. For new and old students, we propose to carry out the exercise noting how important it is to pay attention to the accessibility of the web, and we encourage more and more practices like this._


## The Cascade of CSS

Sometimes we may have rules that conflict with one another, and we end up with some unexpected results. “But I wanted these paragraphs to be blue, why are they red like these other paragraphs?!” As frustrating as this can be, it’s important to understand that CSS doesn’t just do things against our wishes. CSS only does what we tell it to do. One exception to this is the default styles that are provided by a browser. These default styles vary from browser to browser, and they are why some elements create a large “gap” between themselves and other elements, or why buttons look the way they do, despite us not writing any CSS rules to style them that way.

So if you end up with some unexpected behavior like this it’s either because of these default styles or due to not understanding how a property works or not understanding this little thing called the cascade.

The cascade is what determines which rules actually get applied to our HTML. There are different factors that the cascade uses to determine this, three of which we’ll go over to hopefully help you avoid (as many of) those frustrating “I hate CSS” moments.
Specificity

A CSS declaration that is more specific will take precedence over less specific ones. Inline styles, which we will go over more in the Adding CSS to HTML section towards the end of the lesson, have the highest specificity compared to selectors, while each type of selector has its own specificity level that contributes to how specific a declaration is. Other selectors contribute to specificity, but we’re focusing only on the ones mentioned in this lesson:

    ID selectors (most specific selector)
    Class selectors
    Type selectors

Specificity will only be taken into account when an element has multiple, conflicting declarations targeting it, sort of like a tie-breaker. An ID selector will always beat any number of class selectors, a class selector will always beat any number of type selectors, and a type selector will always beat any number of anything less specific than it. When no declaration has a selector with a higher specificity, a larger amount of a single selector will beat a smaller amount of that same selector.

Let’s take a look at a few quick examples to visualize how specificity works. Consider the following HTML and CSS code:
```
<!-- index.html -->

<div class="main">
  <div class="list subsection"></div>
</div>

/* rule 1 */
.subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```
In the example above, both rules are using only class selectors, but rule 2 is more specific because it is using more class selectors, so the color: red; declaration would take precedence.

Now, let’s change things a little bit:
```
<!-- index.html -->

<div class="main">
  <div class="list" id="subsection"></div>
</div>

/* rule 1 */
#subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```
In the example above, despite rule 2 having more class selectors than ID selectors, rule 1 is more specific because ID beats class. In this case, the color: blue; declaration would take precedence.
```
/* rule 1 */
#subsection .list {
  background-color: yellow;
  color: blue;
}

/* rule 2 */
#subsection .main .list {
  color: red;
}
```
In this final example, both rules are using ID and class selectors, so neither rule is using a more specific selector than the other. The cascade then checks the amounts of each selector type. Both rules only have one ID selector, but rule 2 has more class selectors, so rule 2 has a higher specificity!

While the color: red declaration would take precedence, the background-color: yellow declaration would still be applied since there’s no conflicting declaration for it.

Note: When comparing selectors, you may come across special symbols for the universal selector (*) as well as combinators (+, ~, >, and an empty space). These symbols do not add any specificity in and of themselves.
```
/* rule 1 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 */
.class .second-class {
  font-size: 24px;
}
```
Here both rule 1 and rule 2 have the same specificity. Rule 1 uses a chaining selector (no space) and rule 2 uses a descendant combinator (the empty space). But both rules have two classes and the combinator symbol itself does not add to the specificity.
```
/* rule 1 */
.class.second-class {
  font-size: 12px;
}

/* rule 2 */
.class > .second-class {
  font-size: 24px;
}
```
This example shows the same thing. Even though rule 2 is using a child combinator (>), this does not change the specificity value. Both rules still have two classes so they have the same specificity values.
```
/* rule 1 */
* {
  color: black;
}

/* rule 2 */
h1 {
  color: orange;
}
```
In this example, rule 2 would have higher specificity and the orange value would take precedence for this element. Rule 2 uses a type selector, which has the lowest specificity value. But rule 1 uses the universal selector (*) which has no specificity value.
Inheritance

Inheritance refers to certain CSS properties that, when applied to an element, are inherited by that element’s descendants, even if we don’t explicitly write a rule for those descendants. Typography based properties (color, font-size, font-family, etc.) are usually inherited, while most other properties aren’t.

The exception to this is when directly targeting an element, as this always beats inheritance:
```
<!-- index.html -->

<div id="parent">
  <div class="child"></div>
</div>

/* styles.css */

#parent {
  color: red;
}

.child {
  color: blue;
}
```
Despite the parent element having a higher specificity with an ID, the child element would have the color: blue style applied since that declaration directly targets it, while color: red from the parent is only inherited.
Rule Order

The final factor, the end of the line, the tie-breaker of the tie-breaker. Let’s say that after every other factor has been taken into account, there are still multiple conflicting rules targeting an element. How does the cascade determine which rule to apply?

Really simply, actually. Whichever rule was the last defined is the winner.
```
/* styles.css */

.alert {
  color: red;
}

.warning {
  color: yellow;
}
```
For an element that has both the alert and warning classes, the cascade would run through every other factor, including inheritance (none here) and specificity (neither rule is more specific than the other). Since the .warning rule was the last one defined, and no other factor was able to determine which rule to apply, it’s the one that gets applied to the element.
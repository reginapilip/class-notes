# Attribute Selectors

The CSS attribute selector matches elements based on the presence or value of a given attribute.

```css
/* from MDN */
/* <a> elements with a title attribute */
a[title] {
  color: purple;
}

/* <a> elements with an href matching "https://example.org" */
a[href="https://example.org"] {
  color: green;
}

/* <a> elements with an href containing "example" */
a[href*="example"] {
  font-size: 2em;
}

/* <a> elements with an href ending ".org" */
a[href$=".org"] {
  font-style: italic;
}

/* <a> elements whose class attribute contains the word "logo" */
a[class~="logo"] {
  padding: 2px;
}
```
### Resources:
[See docs for syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)
- `[attr], [attr=value], [attr~=value],` etc.
Accessing and updating the DOM involves two steps:

1: locate the node that represents the element you want to work with.
2: Use its text content, child element, and attributes.

STEP 1: Access Those Elements

- select an individual element node
  : getElementById()
  : querySelector() - uses a CSS selector, and returns the first matching element.

- select multiple elements
  : getElementsByClassName()
  : getElementsByTagName()
  : querySelectorAll()

- traversing between element nodes

  : parentNode
  : previousSibling / nextSibling
  : firstChild / lastChild

STEP 2: Work with those elements

- Access / Update text nodes

  : nodeValue

- Work with HTML content

 : innerHTML - One property that allows access to child elements and text content
 : textContent - just the text

-Create Nodes

  : createElement()
  : createTextNode()
  : appendChild() / removeChild()

- Access or update attribute values

  : className / id - lets you get or update the value of the class and id attribute
  : hasAttribute() - checks that it exists
  : getAttribute() - gets the value
  : setAttribute() - updates the value
  : removeAttribute() - removes an attribute



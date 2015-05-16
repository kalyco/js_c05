Caching DOM queries:

Methods that find elements in the DOM tree are called DOM queries.
When you need to work with a variable more than once you, you should use a variable
to store the result of the query.

- when a script selects an element to access or update, the interpreter must
find the elements in the DOM tree.

- once it locates the node, that represents the element, you can work with that node, its parent, or its children.


When people talk about storing elements in variables, they are really storing the
location of the element(s) within the DOM tree in a variable. The properties and methods
of that element node work on the variable.

saving an element as a variable is known a "caching" the selection.

The variable is storing a reference to the DOM tree. (It is known as the location of the node.)

itemOne does not store the <li> element, it stores a reference to where that node is in the DOM tree. To access the text content of the element, you might use the variable name: itemOne.textContent

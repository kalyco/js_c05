var elements = document.getElementsByClassName('hot')
if (elements.length >= 1) {
  var firstItem = elements.item(0);
}

// Node lists have a method called item() for returning individual nodes
// Using the .length check saves resources in case there is no element


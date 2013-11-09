// Adapted from http://userscripts.org/scripts/review/68645 by Jeff Johnson http://lapcatsoftware.com/
// Originally written by Andreas Huber http://andunix.net/ under http://creativecommons.org/licenses/by/3.0/de/deed.en

function removeAutocomplete(element) {
	var autocompleteNode = element.getAttributeNode("autocomplete");
	if (autocompleteNode != null) {
		element.removeAttributeNode(autocompleteNode);
	}
}

function removeAllAutocomplete(elements) {
	for (var i = 0; i < elements.length; i++) {
		removeAutocomplete(elements[i]);
	}
}
removeAllAutocomplete(document.getElementsByTagName('form'));
removeAllAutocomplete(document.getElementsByTagName('input'));

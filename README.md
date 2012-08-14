jQuery Stringify Plugin
=======================

Ever try to do console.log( object ) and get [Object object]?
_Did it make you **angry**?_

If you've ever wanted to print a nicely formatted string representing an
Object or Array, you'll like this plugin.

This plugin has two parts. First, there is a recursive formatter that allows
you to loop through the keys in an Object or Array and print their value to any
depth you please. Second, there is a string repeater used for padding the
output with tabs for readability. You can use this for other things too.


Usage
-----
	$.stringify( object, depthLimit,  );


Example 1
---------
	var testObject = { dog:"brown", cat:"gray", mice:["blind","blind","blind"] };
	$.stringify( testObject );
### Output ###
	Object
		{
			dog: "brown",
			cat: "gray",
			mice: Array (3)
				[
					"blind",
					"blind",
					"blind"
				]
		}

Example 2 (depth limit)
-----------------------
	var testObject = { depth:1, nextLevel:{ depth:2, nextLevel:{ depth:3, nextLevel:{ depth:4, nextLevel:undefined } } } };
	$.stringify( testObject, 2 );
### Output ###
	Object
		{
			depth: 1,
			nextLevel: Object
				{
					depth: 2,
					nextLevel: Object {...}
				}
		}

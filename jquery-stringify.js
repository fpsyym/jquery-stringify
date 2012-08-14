/*
 * jQuery Stringify Plugin
 *
 * A useful utility for printing Javascript objects à la print_r() in PHP.
 * Comes with a function to repeat strings of text for padding purposes!
 *
 * http://keithmcknight.net/
 * Copyright (c) 2012 Keith McKnight
 * Version: 0.8
 *
 * Dual licensed under the MIT and GPL licenses.
 */

(function($){

/**
 * Converts anything into a readable string format.
 *
 * @param o Object or Array to iterate over
 * @param l (optional) depth limit or 0 for no depth limit
 * @param d (optional) current depth, used for recursive calls
 * @param t (optional) tab depth, used for formatting
 * @return Transformed object or array
 */
$.stringify = function ( o, l, d, t ) {
	if ( typeof d === 'undefined' ) d = 0;
	if ( typeof t === 'undefined' ) t = 0;

	switch ( typeof o )
	{
		case 'undefined':
			return 'undefined';
		case 'string':
			return '"' + o + '"';
		case 'number':
		case 'boolean':
			return o;
		case 'function':
		default:
			return o.toString();
		case 'object':
			if ( o === null ) return 'null';
			var s = '';
			var f = true;
			if ( $.isArray( o ) )
			{
				s += 'Array (' + o.length + ')';
				if ( o.length < 1 ) return s + ' []';
				if ( l > 0 && d >= l ) return s + ' [...]';
				s += '\n' + $.repeat( '\t', t + 1 ) + '[\n';
				$.each( o, function( k, v ) {
					if ( f ) f = false;
					else s += ',\n';
					s += $.repeat( '\t', t + 2 ) + $.stringify( v, l, d + 1, t + 2 );
				});
				s += '\n' + $.repeat( '\t', t + 1 ) + ']';
			}
			else
			{
				if ( $.isPlainObject( o ) ) s += 'Object';
				else s += 'Thing';
				if ( l > 0 && d >= l ) return s + ' {...}';
				s += '\n' + $.repeat( '\t', t + 1 ) + '{\n';
				var f = true;
				$.each( o, function( k, v ) {
					if ( f ) f = false;
					else s += ',\n';
					s += $.repeat( '\t', t + 2 ) + k + ': ' + $.stringify( v, l, d + 1, t + 2 );
				});
				s += '\n' + $.repeat( '\t', t + 1 ) + '}';
			}
			return s;
	}
};

/**
 * Repeats a string until a minimum string length is met. Optionally truncates
 * to exactly that length.
 *
 * @param s string to repeat
 * @param l desired length
 * @param c if set, the repeated string will be trimmed to the desired length
 * @return Transformed object or array
 */
$.repeat = function( s, l, c ) {
	if ( s.length < 1 ) return false;
	var r = s;
	while ( r.length < l )
		r += s;
	if ( typeof c === 'undefined' || c ) return r.substr( 0, l );
	else return r;
};

})(jQuery);
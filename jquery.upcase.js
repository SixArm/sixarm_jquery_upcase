// jQuery.upcase plugin 
//
// Convert text to uppercase. This is a simple demo plugin.
//
// Example:
//   $('.foo').upcase();

(function( $ ){
    $.fn.upcase = function(options) {

        var settings = {
        };
        
        if ( options ) { 
            $.extend( settings, options );
        }

 	      return this.each(function() {
	          var $this = $(this);
            var text = $this.text(); // shorthand
            $this.text(text.toUpperCase());

        });
    };
})( jQuery );



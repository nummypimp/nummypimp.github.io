(function($){
		
		 $.fn.myplugin = function(options) {
			 
	
		  var $jquery=this;
		  
		  
		  $jquery.each(function(){
      var $this = $(this);
      var code = $this.html();
      // to display in <pre> block, <br /> has been "htmlentitised"
	  console.log(code);
      var exe = code.replace(new RegExp("&lt;","g"), "<");
	  console.log(exe);
      var exe = exe.replace(new RegExp("&gt;","g"), ">");
      console.log(exe);
      if (window.execScript){
          window.execScript(exe);
      } else {
          window.eval(exe);
      }
      code = code.replace(/\s+$/,""); // remove last empty lines
      console.log(code);
      // ie :X
      $this.before("<pre class='code'>" + code + "</pre>").remove();
  });
		  
		  	 
		 }
		 
		 
		
		})(jQuery);
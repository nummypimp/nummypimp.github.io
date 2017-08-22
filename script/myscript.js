

(function($){
   
    $.fn.curlcssjs = function(options) {
       // console.log('start');
        var settings = jQuery.extend({
            url:'value',
			pagename:'value',
			c_url:'value',
			need:[],
			
        }, options);
      //console.log(settings);
        var $jquery=this;

        var output={
            //Setup our plugin functions as an object elements
            'loadcssjs':function(settings){
				  console.log('loadcssjs');
				 
                $.ajax({
					url: "curl1.php?url="+settings.url,
					type: 'GET',
					success: function(data) { 
					//console.log('get Data');
					var dom = $(data);
					var dom2 = $(data);
		
		 dom2.filter('link').each(function(a,b){
			 // console.log('link');
			// console.log(this);
			 
			 	var a = {page:settings.pagename,css:this.href };
			output.senddata(a);
		 });
		 
		  dom2.filter('style').each(function(a,b){
			  //console.log('style');
			// console.log(this.innerText);
			 var a = {page:settings.pagename,css_ex:this.innerText };
			 
			output.senddata(a);
		 });
		 
		 
        dom.filter('script').each(function(a,b){
			// console.log('script');
			originalJavaScript = $(b);
      					
			checkchildnode  = this.childNodes.length;
			//console.log(checkchildnode);
			if (checkchildnode>=1) {
				newJavaScript      = this.innerText;
				
				var a = {page:settings.pagename,java_ex:newJavaScript};
			output.senddata(a);
				
			} else if (originalJavaScript.src!='') {
				x = originalJavaScript.src;
			var a = {page:settings.pagename,java:this.src};
			output.senddata(a);
			}
			
            
        });
					
					}
				});
				
				
				
            },
           
            'senddata':function(a){
               
					
			console.log(a);
			$.post(settings.c_url, a)
					  .done(function( data ) {
						  
						 
							
							
					 
					  });
					
					 
				
              }
			  
			 
        };
		
		 output.loadcssjs(settings);
       return output;
    };
	

})(jQuery);


function loadcssjs2(ss){
	
	
var url = urla;
$.ajax({
    url: url,
    type: 'POST',
    success: function(data) {

        var dom = $(data);
		var dom2 = $(data);
		 dom2.filter('link').each(function(a,b){
			 
			// console.log(this);
			 
			 	var a = {page:$('#page').val(),css:this.href };
			senddata(a);
		 });
		 
		  dom2.filter('style').each(function(a,b){
			 
			// console.log(this.innerText);
			 var a = {page:$('#page').val(),css_ex:this.innerText };
			 
			senddata(a);
		 });
		 
		 
        dom.filter('script').each(function(a,b){
			
			originalJavaScript = $(b);
      					
			checkchildnode  = this.childNodes.length;
			//console.log(checkchildnode);
			if (checkchildnode>=1) {
				newJavaScript      = this.innerText;
				
				var a = {page:$('#page').val(),java_ex:newJavaScript};
			senddata(a);
				
			} else if (originalJavaScript.src!='') {
				x = originalJavaScript.src;
			var a = {page:$('#page').val(),java:this.src};
			senddata(a);
			}
			
            
        });

     

    }
});	
	
}

function senddata(a) {
	 var now = new Date().getTime();
	
	console.log(a);
	
$.post("curl2.php", a)
  .done(function( data ) {
	  
	 
		
		
 
  });	
}



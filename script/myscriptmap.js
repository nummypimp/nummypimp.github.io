$.gmap3({
    key: 'AIzaSyClX54WWlxohhbtQESFzUZSkCOU63gcwYM',
	Region:'TH'
  });

  $(function () {
	  
	  $MENU_TOGGLE.click();
	  
	  var deco_var = '';
	 if(""!=decodeURI(S_GET("location"))) deco_var=decodeURI(S_GET("location"));else  deco_var="bangkok";
	 console.log(deco_var);
	   $('#gmap')
      .gmap3() // no options = no start map for now...
        .latlng({
          address: deco_var
        })
        .then(function (latlng) {
          console.log(latlng);
        })
        .map(function (latlng) {
          return {
            center: latlng,
            zoom: 16,
            mapTypeId : google.maps.MapTypeId.ROADMAP
          }
        }) .on('click', function (event) {
           console.log(event); 
        });
  
	
	var wh = $(window).innerHeight();
	  $('#gmap').height(wh-68);
	 	$('.right_col').height(wh);
		
	$('.b_right_col').css('height',wh-68+'px');	
	
	 $('.right_col').on('resize',function(){
		// console.log(this); 
		  $('#gmap').gmap3();
		 
	 });
	  $(window).on('resize',function(){
	   
	  var wh = $(window).innerHeight();
	  $('#gmap').height(wh-68);
	  $('.right_col').height(wh);
	  $('.b_right_col').css('height',wh-68+'px');	
	 console.log(wh); 
	   $('#gmap').gmap3();
	   });
	
  });
  
  
  function S_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : '';	
	}
	return vars;
}
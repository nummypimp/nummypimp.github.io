	var nfile = 1;
	var gallery;
	Dropzone.autoDiscover = false;
	$(function() {


	    var myDropzone = new Dropzone('#my-dropzone', {
	        maxFilesize: 3.0,
	        maxFiles: 10,
	        parallelUploads: 10,
	        paramName: "files",
	        uploadMultiple: true,
	        autoProcessQueue: false,
	        dictDefaultMessage: 'โพสรูปคลิ๊กตรงนี้.........',
	        params: {
	            foldername: $('#imageFolder').val()
	        },
	        previewTemplate: ' <div data-theme="a"  class="file-row "><div>' +
	            ' <span class="preview"><img data-dz-thumbnail /></span>' +
	            '  </div>' +
	            '  <div class="hidden-xs" >' +
	            '   <p class="name" data-dz-name></p>' +
	            '<div class="name2" data-dz-name2></div>' +
	            '   <strong class="error text-danger" data-dz-errormessage></strong>' +
	            '   </div>' +
	            '  <div class="hidden-xs">' +
	            '    <p class="size" data-dz-size></p>' +
	            '    <div class="fileurl" data-dz-id></div>' +
	            '  <div class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">' +
	            '  <div class="progress-bar progress-bar-success" style="width:0%;" data-dz-uploadprogress></div>' +
	            ' </div>' +
	            ' </div>' +
	            ' <div>' +
	            ' <button dz-started class="btn btn-primary start">' +
	            '   <i class="glyphicon glyphicon-upload"></i>' +
	            '   <span>Start</span>' +
	            ' </button>' +
	            ' <button data-dz-remove class="btn btn-warning cancel">' +
	            '   <i class="glyphicon glyphicon-ban-circle"></i>' +
	            '  <span>Cancel</span>' +
	            '  </button>' +
	            ' <button  class="btn btn-danger delete">' +
	            ' <i class="glyphicon glyphicon-trash"></i>' +
	            ' <span >Delete</span>' +
	            ' </button>' +
	            ' </div></div>',
	        previewsContainer: "#previews",
	        init: function() {

	            $.ajax({
	                url: "images/index.php",
	                data: {
	                    foldername: $('#imageFolder').val()
	                },
	                cache: false,
	                dataType: "json",
	                method: "GET",

	                success: function(data) {
	                    var file = data.files;


	                    if ($('#itemId').val() != '') {

	                        var id = $('#itemId').val() + '/images/images';
	                        sendtogg2(id, data.files);
	                    }
	                    $.each(data.files, function(k, v) {

	                        var myFile = {
	                            name: v.name,
	                            name2: v.thumbnailUrl,
	                            size: v.size,
	                            deleteUrl: v.deleteUrl,
	                            thumbnailUrl: v.thumbnailUrl,
	                            href: v.thumbnailUrl
	                        };

	                        var size = v.size / 1000;

	                        var tem = '<div  class="file-row dz-processing dz-success dz-complete dz-image-preview"><div> <span class="preview" data-id="' + v.name + '">	 <a class="visible-xs-inline hidden-sm hidden-md hidden-lg" href="' + v.url + '" target="_blank"><img data-dz-thumbnail="" alt="' + v.name + '" src="' + v.thumbnailUrl + '"></a>					 <img class="hidden-xs" data-dz-thumbnail="" alt="' + v.name + '" src="' + v.thumbnailUrl + '">	</span>  </div>  <div class="hidden-xs">   <p class="name" data-dz-name=""><a href="' + v.url + '" target="_blank">' + v.name + '</a></p><div class="name2" data-dz-name2=""></div>   <strong class="error text-danger" data-dz-errormessage=""></strong>   </div>  <div class="hidden-xs">    <p class="size" data-dz-size=""><strong>' + size + '</strong> KB</p>    <div class="fileurl" data-dz-id=""></div>  <div class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">  <div class="progress-bar progress-bar-success" style="width:0%;" data-dz-uploadprogress=""></div> </div> </div> <div> <button dz-started="" class="btn btn-primary start">   <i class="glyphicon glyphicon-upload"></i>   <span>Start</span> </button> <button data-dz-remove="" class="btn btn-warning cancel">   <i class="glyphicon glyphicon-ban-circle"></i>  <span>Cancel</span>  </button> <button class="btn btn-danger delete" onClick="deletethisfile(\'' + v.name + '\',this)" type="button"> <i class="glyphicon glyphicon-trash"></i> <span>Delete</span> </button> <button class="btn btn-danger delete" onClick="rotateimage(\'' + v.name + '\',this)"   type="button"> <i class="glyphicon glyphicon-refresh"></i> <span>Rotate</span> </button>  <button class="btn btn-danger delete" onClick="saveimage(\'' + v.name + '\',this)"   type="button"> <i class="glyphicon glyphicon-save-file"></i> <span>save</span> </button> </div></div>';

	                        $('#previews2').prepend(tem);
	                        //	myDropzone.emit("addedfile", myFile);
	                        //myDropzone.emit("success", myFile);
	                        //myDropzone.emit("complete", myFile);



	                        nfile++;
	                        // console.log(nfile);
	                    })
	                    gallery = $('#previews2 a:visible').simpleLightbox();


	                }

	            });

	            this.on("uploadprogress", function(file) {
	                $('#upload').hide();
	                $('#uploadprocessbar').show();
	            });
	            this.on("addedfile", function(file) {
	                //  console.log(nfile);
	                if (nfile > 10) {
	                    this.removeFile(file);
	                    alert('Over Limit Upload');
	                    return;
	                }

	                nfile++;
	                $('#upload').show();
	                $('button.start').on('click', function(file) {
	                    myDropzone.processQueue();
	                    // var value = $("#Files").val();

	                });




	            });

	        }

	    });



	    $('button.btn.btn-danger.delete').on('click', function(file) {

	        //console.log($(this));
	        // console.log(file);
	        // myDropzone.removeFile(file);
	        // var value = $("#Files").val();

	    });
	    $('#upload').on('click', function(file) {
	        myDropzone.processQueue();
	        // var value = $("#Files").val();

	    });
	    myDropzone.on("complete", function(file) {
	        $('#uploadprocessbar').hide();
	    });
	    myDropzone.on("completemultiple", function(file) {
	        //console.log(file);



	        if (file[0].accepted) {
	            var data = $(file[0].xhr);
	            // console.log(data[0].responseText);
	            var obj = $.parseJSON(data[0].responseText);
	            //console.log(obj);

	            if ($('#itemId').val() != '') {

	                var id = $('#itemId').val() + '/images/images';
	                // sendtogg2(id,obj.files);  
	            }

	            $.each(obj.files, function(a, b) {

	                var v = b;
	                //console.log(v);
	                var size = v.size / 1000;

	                var tem = '<div  class="file-row dz-processing dz-success dz-complete dz-image-preview"><div> <span class="preview" data-id="' + v.name + '"> <a class="visible-xs-inline hidden-sm hidden-md hidden-lg" href="' + v.url + '" target="_blank"><img data-dz-thumbnail="" alt="' + v.name + '" src="' + v.thumbnailUrl + '"></a>					 <img class="hidden-xs" data-dz-thumbnail="" alt="' + v.name + '" src="' + v.thumbnailUrl + '">	</span>  </div>  <div class="hidden-xs">   <p class="name" data-dz-name=""><a href="' + v.url + '" target="_blank">' + v.name + '</a></p><div class="name2" data-dz-name2=""></div>   <strong class="error text-danger" data-dz-errormessage=""></strong>   </div>  <div class="hidden-xs">    <p class="size" data-dz-size=""><strong>' + size + '</strong> KB</p>    <div class="fileurl" data-dz-id=""></div>  <div class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">  <div class="progress-bar progress-bar-success" style="width:0%;" data-dz-uploadprogress=""></div> </div> </div> <div> <button dz-started="" class="btn btn-primary start">   <i class="glyphicon glyphicon-upload"></i>   <span>Start</span> </button> <button data-dz-remove="" class="btn btn-warning cancel">   <i class="glyphicon glyphicon-ban-circle"></i>  <span>Cancel</span>  </button> <button class="btn btn-danger delete" onClick="deletethisfile(\'' + v.name + '\',this)" type="button"> <i class="glyphicon glyphicon-trash"></i> <span>Delete</span> </button>  <button class="btn btn-danger delete" onClick="rotateimage(\'' + v.name + '\',this)" type="button"> <i class="glyphicon glyphicon-refresh"></i> <span>rotate</span> </button> <button class="btn btn-danger delete" onClick="saveimage(\'' + v.name + '\',this)"   type="button"> <i class="glyphicon glyphicon-save-file"></i> <span>save</span> </button> </div></div>';



	                $('#previews2').prepend(tem);




	            })

	            $('#upload').hide();
	            gallery = $('#previews2 a:visible').simpleLightbox();
	        }
	    });

	    //  and setup the on success event listeners
	    myDropzone.on("success", function(file) {
	        $('div[data-theme="a"]').hide();

	        //console.log(file);

	    });




	});

	function saveimage(a, b) {
	    var $this = $(b);

	    var d = '../../post/images/' + $('#imageFolder').val();
	    var c = {
	        file: a,
	        path: d,
	        type: 'save'
	    };
	    $.post("../plugin/rotate/index.php", c)
	        .done(function(data) {
	            var $thisset = $('span.preview[data-id="' + a + '"]');
	            //attrid = $($spanprev.children('span.preview_temp').attr('data-id'));
	            $thisset.html('');
	            setTimeout(function() {
	                $thisset.html('<a class="visible-xs-inline hidden-sm hidden-md hidden-lg" href="' + data.image + '" target="_blank"> <img data-dz-thumbnail="" src="' + data.image + '"></a>	<img class="hidden-xs" data-dz-thumbnail=""  src="' + data.image + '">');
	            }, 1000);




	        });

	}
	var firstspanview = 0;

	function rotateimage(a, b) {
	    var $this = $(b);
	    var attrid = '';
	    var $mainparent = $this.parent('div').parent('div.file-row');
	    var $spanprev = $mainparent.children('div').children('span.preview');


	    var d = '../../post/images/' + $('#imageFolder').val();
	    var c = {
	        file: a,
	        path: d,
	        type: 'rotate'
	    };
	    $.post("../plugin/rotate/index.php", c)
	        .done(function(data) {
	            var $thisset = $('span.preview[data-id="' + a + '"]');
	            //attrid = $($spanprev.children('span.preview_temp').attr('data-id'));
	            $thisset.html('');
	            setTimeout(function() {
	                $thisset.html('<a class="visible-xs-inline hidden-sm hidden-md hidden-lg" href="' + data.image + '" target="_blank"> <img data-dz-thumbnail="" src="' + data.image + '"></a>	<img class="hidden-xs" data-dz-thumbnail=""  src="' + data.image + '">');
	            }, 1000);




	        });

	}

	function deletethisfile(a, b) {
	    if (nfile > 1) {
	        nfile--;
	    } else {
	        nfile = 1;
	    }
	    // console.log(nfile);

	    var $this = $(b);
	    var d = '../../post/images/' + $('#imageFolder').val();
	    var c = {
	        file: a,
	        path: d
	    };
	    $.post("../plugin/_upload/delete.php", c)
	        .done(function(data) {

	            $this.parent('div').parent('div.file-row').hide('slow');
	            $this.parent('div').parent('div.file-row').html('');
	            gallery = $('#previews2 a:visible').simpleLightbox();

	        });



	}

	
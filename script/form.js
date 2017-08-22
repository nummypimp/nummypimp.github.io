	var $defaults = {
	    title: '',
	    itemDesc: '',
	    category: '',
	    price: '',
	    province: '',
	    amphur: '',
	    district: '',
	    email: '',
	    name: '',
	    phone: '',
	    owner_cookie: $('#usid').val()
	};
	var options = {};
	var settings;
	var $defaultsp = {
	    province: $('input[data-id="province"]').val(),
	    amphur: $('input[data-id="amphur"]').val(),
	    district: $('input[data-id="district"]').val(),
	    gid: $('input[data-id="gid"]').val(),
	    pid: $('input[data-id="pid"]').val(),
	    aid: $('input[data-id="aid"]').val(),
	    did: $('input[data-id="did"]').val()
	};
	var uuinfo = {};
	var $defaultsu = {
	    name: $('#name').val(),
	    email: $('#email').val(),
	    phone: $('#phone').val(),
	    lineid: $('#lineid').val(),
	    password: $('#password').val()
	};

	var setu;
	$(document).ready(function(e) {




	    var hhhh = $('*[disabled]').each(function(index, element) {
	        var hhr = $(this);
	        //console.log(hhr);

	        $(this).parent('div').on('click', function() {
	            //	alert('please start the first step')

	        })
	    });

	    $('#geox2').autocomplete({
	        serviceUrl: 'thai.address.php',
	        params: {
	            auto: 'hello'
	        },
	        width: 400,
	        type: "POST",
	        onSelect: function(suggestion) {

	            var dda = $(suggestion.data);


	            $.each(dda[0], function(k, v) {
	                var $this = $('#' + k);



	                //console.log(v);		
	            })
	            alert('You selected: ' + suggestion.value + ', ' + suggestion.data);
	        }
	    });


	    $('#askforregister').on('show.bs.modal', function(event) {

	        var modal = $(this);
	        //console.log(modal);
	        $('#email_register').val($('#email').val());
	        $('#pass_register').val($('#password').val());

	    });
	    $('#askforregister').on('hide.bs.modal', function(e) {

	        setTimeout(function() {

	            window.location = 'post.form3.php?id=' + $('#itemId').val();

	        }, 1000);

	    });


	    if ($('input[data-id="category"]').val() != '') {

	        $('input[name="categ"]').each(function(i, e) {
	            var vv = $(this);
	            if (vv.val() == $('input[data-id="category"]').val()) {
	                vv.attr('checked', 'checked');
	                vv.parent('label').addClass('active');
	            }

	        });
	    }
	    if ($('input[data-id="itemFor"]').val() != '') {
	        $('input[name="itemFor"]').each(function(i, e) {
	            var vv = $(this);
	            if (vv.val() == $('input[data-id="itemFor"]').val()) {
	                vv.attr('checked', 'checked');
	                vv.parent('label').addClass('active');
	            }

	        });

	    }




	    $('#title,#price').change(function(event) {
	        var ab = {
	            title: $('#title').val().trim(),
	            price: $('#price').val().trim(),
	            itemDesc: $('div.note-editable.panel-body').html()
	        };
	        var a = {
	            step: 'second',
	            data: ab,
	            id: $('#itemId').val()
	        };
	        updatedata(a);
	    });



	    $('#postdetail').bind('click', function() {
	        var ab = {
	            title: $('#title').val().trim(),
	            itemDesc: $('div.note-editable.panel-body').html()
	        };
	        var a = {
	            step: 'second',
	            data: ab,
	            id: $('#itemId').val()
	        };

	        updatedata(a);
	    });

	    $('label.btn').bind('change', function() {
	        var aa = $('input[name="itemFor"]:checked').val();
	        var bb = $('input[name="categ"]:checked').val();
	        var aa2 = $('input[name="itemFor"]:checked').parent('label').text().trim();
	        var bb2 = $('input[name="categ"]:checked').parent('label').text().trim();
	        var $radio = $(this);
	        $('h2.itemFor,h2.categ').remove();
	        $('div.x_title>h2:first').after('<h2 class="itemFor"></h2>');
	        $('div.x_title>h2:eq(2)').after('<h2 class="categ"></h2>');
	        $('h2.itemFor:first').html(aa2);
	        $('h2.categ:first').html(aa2 + bb2);

	        var as2 = {
	            category: bb,
	            itemFor: aa,
	            category2: bb2,
	            itemFor2: aa2
	        }

	        //console.log($('#itemId').val());
	        if ($('#itemId').val() == '') {
	            var as = {
	                category: bb,
	                itemFor: aa,
	                owner_cookie: $('#usid').val(),
	                imageFolder: $('#imageFolder').val()
	            }
	            var a = {
	                step: 'first',
	                data: as
	            };
	            senddata(a);
	        } else {
	            var as = {
	                category: bb,
	                itemFor: aa
	            }
	            var a = {
	                step: 'second',
	                data: as,
	                id: $('#itemId').val()
	            };
	            updatedata(a);
	        }

	        $.each(as, function(k, v) {

	            $('input[data-id="' + k + '"]').val(v);
	        })
	    });




	    $('#submitbutton').click(function(e) {
			
			 $('form#main').bind('submit',function(e) {
				 
			
			
	        $('#email,#password').removeAttr('readonly');

	        e.preventDefault();



	        var submit = (
	            $('#itemId').val() != '' &&
	            $('input[data-id="category"]').val() != '' &&
	            $('input[data-id="itemFor"]').val() != '' &&
	            $('#title').val() != '' &&
	            $('#email').val() != '' &&
	            $('#password').val() != ''

	        ) ? true : false;



	        if (submit) {
	            if ($('#user_id').val() != '') {
	                var as = {
	                    creation_in_progress: 2,
	                    email: $('#email').val(),
	                    memberid: $('#user_id').val(),
	                    name: $('#name').val(),
	                    phone: $('#phone').val(),
	                    lineid: $('#lineid').val()
	                }
	            } else {
	                var as = {
	                    creation_in_progress: 2,
	                    email: $('#email').val(),
	                    name: $('#name').val(),
	                    phone: $('#phone').val(),
	                    lineid: $('#lineid').val()
	                }

	            }
	            var a = {
	                step: 'second',
	                data: as,
	                id: $('#itemId').val()
	            };
	            updatedata(a);

	            //console.log(a)
	            //
	            if ($('#user_id').val() == '') {
	                $('#askforregister').modal();
	            } else {
	                setTimeout(function() {

	                    window.location = 'post.form3.php?id=' + $('#itemId').val();

	                }, 1000);

	            }


	            return false;
	        }
	    });

 });

	});





	$('#password,#password2').one('blur', function(e) {
	    var $this = $(this);
	    //console.log($this);

	});
	$('#password.edit').one('blur', function(e) {
	    //$('#password.edit').after('<span style="float:right">helloooo</span>');
	});







	$('#name,#phone,#lineid').change(function() {

	    var $add = $(this);
	    var key = $add[0].id;

	    // console.log($add);
	    uuinfo[key] = $add.val();

	    setu = $.extend({}, $defaultsu, uuinfo);

	    $defaultsu = setu;

	    var a = {
	        step: 'second',
	        data: setu,
	        id: $('#itemId').val()
	    };
	    updatedata(a);
	    //console.log($defaultsu);
	})

	function senddata(a) {


	    $.ajax({
	        url: "index.php",
	        data: a,
	        cache: false,
	        dataType: "json",
	        method: "POST",

	        success: function(data) {
	            $('#itemId').val(data.id);
	            $('#imageFolder').val(data.imageFolder);
	            // console.log(data);
	            // $('#linktoedit').html('<a href="?id='+data.id+'"> view edit</a>');
	            $('#userdetail').show('slow');

	            $('*').removeAttr('disabled');
	           

	            sendtogg(data.id, data);
	        }

	    });

	}

	function updatedata(a) {

	    if (a['id'] != '') {
	        sendtogg(a.id, a.data);
	        $.ajax({
	            url: "index.php",
	            data: a,
	            cache: false,
	            dataType: "json",
	            method: "POST",

	            success: function(data) {

	                //console.log(data);


	            }

	        });
	    }
	    return false;

	}

	setTimeout(function() {



	    $.each(settings, function(k, v) {

	        $('input[data-id="' + k + '"]').val(v);
	    })


	    //$('#password,#password2').trigger('blur');
	    //$('#password.edit').trigger('blur');

	    $('#boxpass').show();

	    $('#password,#email').on('focus', function() {
	        $('#password,#email').removeAttr('readonly');

	        $('#password,#password2').attr('type', 'password');
	    });

	    if ($('#itemId').val() != '') {
	        $('#userdetail').show('slow');
	        readitemsfile();
	    }

	}, 2000);

	$('#checkpass').on('click', function() {
	    if ($('#password').attr('type') == 'password') {
	        $('#password,#password2').attr('type', 'text');
	        $('#checkpass').text('hidepass');
	    } else {
	        $('#password,#password2').attr('type', 'password');
	        $('#checkpass').text('checkpass');
	    }


	});


	$('#summernote').summernote({
	    lang: 'th-TH', // set editor height
	    minHeight: 300, // set minimum height of editor
	    maxHeight: null, // set maximum height of editor
	    focus: false,
	    toolbar: [
	        // [groupName, [list of button]]

	        ['fontsize', ['fontsize', 'color']],
	        ['style', ['bold', 'italic', 'underline', 'clear']],
	        ['font', ['ol', 'ul', 'paragraph']],
	        ['Insert', ['link', 'video', 'table', 'hr']],
	        ['extra', ['fullscreen', 'codeview', 'undo', 'redo', 'help']]

	    ],
	    callbacks: {
	        onBlur: function() {

	            var ab = {
	                title: $('#title').val().trim(),
	                itemDesc: $('div.note-editable.panel-body').html()
	            };
	            var a = {
	                step: 'second',
	                data: ab,
	                id: $('#itemId').val()
	            };
	            updatedata(a);
	            makrup = $('#summernote').summernote('code');
	        },
	        onFocus: function() {
	            // console.log('Editable area is focused');
	        },
	        onEnter: function() {
	            // console.log('Enter/Return key pressed');
	        },
	        onInit: function() {
	            // console.log('Summernote is launched');
	        }
	    } // set focus to editable area after initializing summernote
	});

	function askregister() {


	    var abc = {
	        email: $('#email_register').val(),
	        name: $('#name').val(),
	        password: $('#pass_register').val()
	    }
	    var a = {
	        step: 'register',
	        data: abc
	    }
	    $.ajax({
	        url: "index.php",
	        data: a,
	        cache: false,
	        dataType: "json",
	        method: "POST",

	        success: function(data) {
	            //console.log(data);
	            if (data.register) {
	                $('#askforregister').modal('hide');

	            } else {

	                alert('check your password');

	            }

	        }

	    });
	}
! function(a) {
    a.fn.thaiaddress = function(e) {
        function t(e) {
            a.ajax({
                url: "thai.address.php",
                data: {
                    addr: e
                },
                dataType: "json",
                method: "POST",
                success: function(e) {
                    var t = a("#" + e.group);
                    t.html('<option value="" data-id="0"> Select</option></select>'),
                        a.each(e.data, function(a, n) {

                            var sel = '';
                            if (n.id == $('input[data-id="' + e.group + '1"]').val()) {
                                sel = 'selected="selected"';
                            }
                            var o = '<option value="' + e.group + "," + n.id + '" data-id="' + n.id + '" ' + sel + '>	' + n.name + "</option>";
                            t.append(o)
                        })
                }
            })
        }
        var n = a(this),
            o = ["gid", "pid", "aid", "did"],
            i = [];
        var diss = 'disabled="disabled"';
        if ($('input[data-id="category"]').val() != '') {
            diss = '';
        }
        var req = 'required';
        a.each(o, function(e, t) {
                if (t == 'aid' || t == 'did') {
                    req = '';
                }
                n.append('<div class="col-md-3 col-sm-3 col-xs-12 form-group has-feedback">   <select name="' + t + '" id="' + t + '" ' + diss + ' class="form-control" ' + req + ' ><option value="" data-id="0"> Select</option></select></div>'), i[e] = a("#" + t)
            }), t(""),
            a("#gid,#pid,#aid,#did").change(function(e) {
                var t = a(this),
                    key = t[0].id,
                    n = t.children("option:selected").val();
                t.children("option:selected").attr('selected', 'selected');


                if (key == 'gid') {

                    if ($('input[data-id="gid1"]').val() == 0) {

                        //$('#aid,#did').attr('disabled','disabled');
                    }
                }
                if (key == 'pid') {
                    if ($('input[data-id="pid1"]').val() == 0) {
                        //$('#did').attr('disabled','disabled');
                        //$('#aid').removeAttr('disabled');
                    }
                }

                if (key == 'aid') {
                    if ($('input[data-id="aid1"]').val() == 0) {
                        //$('#did').removeAttr('disabled');
                    }
                }
                if (key == 'did') {

                }

                a.ajax({
                    url: "thai.address.php",
                    data: {
                        addr: n
                    },
                    dataType: "json",
                    method: "POST",
                    success: function(e) {
                        var t = a("#" + e.group);
                        t.html('<option value="" data-id="0"> Select</option></select>'),
                            a.each(e.data, function(a, n) {
                                var sel = '';
                                if (n.id == $('input[data-id="' + e.group + '1"]').val()) {
                                    sel = 'selected';
                                }
                                var o = '<option value="' + e.group + "," + n.id + '" data-id="' + n.id + '" ' + sel + ' >	' + n.name + "</option>";
                                t.append(o)
                            })
                    }
                })
            })
    }
}(jQuery);

setTimeout(function() {

    if ($('input[data-id="gid1"]').val() != 0) {

        $('#gid').prepend('<option value="gid,' + $('input[data-id="gid1"]').val() + '" data-id="' + $('input[data-id="gid1"]').val() + '" selected> ' + $('input[data-id="geo1"]').val() + '</option>');
        $('#gid').trigger('change');
    }
    if ($('input[data-id="pid1"]').val() != 0) {

        $('#pid').prepend('<option value="pid,' + $('input[data-id="pid1"]').val() + '" data-id="' + $('input[data-id="pid1"]').val() + '" selected> ' + $('input[data-id="province1"]').val() + '</option>');
        $('#pid').trigger('change');
    }
    if ($('input[data-id="aid1"]').val() != 0) {
        $('#aid').prepend('<option value="aid,' + $('input[data-id="aid1"]').val() + '" data-id="' + $('input[data-id="aid1"]').val() + '" selected> ' + $('input[data-id="amphur1"]').val() + '</option>');
        $('#aid').trigger('change');
    }
    if ($('input[data-id="did1"]').val() != 0) {
        $('#did').prepend('<option value="did,' + $('input[data-id="did1"]').val() + '" data-id="' + $('input[data-id="did1"]').val() + '" selected> ' + $('input[data-id="district1"]').val() + '</option>');
        $('#did').trigger('change');
    }

    /* $('#gid>option').each(function(i, e) {
                var vv = $(this);
				//console.log(vv);
				if (vv.attr('data-id') == $('input[data-id="gid"]').val()) {
					vv.attr('selected','selected');
					
				}
            });	*/

}, 1000);

setTimeout(function() {
    $("#gid,#pid,#aid,#did").change(function(e) {

        var $add = $(this);
        var key = $add[0].id;
        var address = {};
        if (key == 'gid') {
            $('#aid,#did').children('option').removeAttr('selected');
            $('#aid,#did').children('option[data-id="0"]').attr('selected', 'selected');

            //$('#aid>option[data-id="0"]','#did>option[data-id="0"]').attr('selected','selected');				//$('#aid,#did').attr('disabled','disabled');
            //$("#aid>option,#did>option").removeAttr('selected');
            address = {
                gid: $add.children('option:selected').attr('data-id'),
                geo: $add.children('option:selected').text().trim(),
                amphur: '',
                district: '',
                aid: 0,
                did: 0,
                pid: 0,
                province: ''
            }
            settings = $.extend({}, $defaultsp, address);
            $defaultsp = settings;
            var a = {
                step: 'second',
                data: $defaultsp,
                id: $('#itemId').val()
            };
            console.log($defaultsp);
            updatedata(a);
        }
        if (key == 'pid') {
            //$("#did>option").removeAttr('selected');
            $('#did').children('option').removeAttr('selected');
            $('#did').children('option[data-id="0"]').attr('selected', 'selected');
            address = {
                pid: $add.children('option:selected').attr('data-id'),
                province: $add.children('option:selected').text().trim(),
                amphur: '',
                district: '',
                aid: 0,
                did: 0
            }
            settings = $.extend({}, $defaultsp, address);
            $defaultsp = settings;
            var a = {
                step: 'second',
                data: $defaultsp,
                id: $('#itemId').val()
            };
            updatedata(a);
        }
        if (key == 'aid') {
            address = {
                aid: $add.children('option:selected').attr('data-id'),
                amphur: $add.children('option:selected').text().trim(),
                district: '',
                did: 0
            }
            settings = $.extend({}, $defaultsp, address);
            $defaultsp = settings;
            var a = {
                step: 'second',
                data: $defaultsp,
                id: $('#itemId').val()
            };
            updatedata(a);
        }
        if (key == 'did') {
            address = {
                did: $add.children('option:selected').attr('data-id'),
                district: $add.children('option:selected').text().trim()
            }
            settings = $.extend({}, $defaultsp, address);
            $defaultsp = settings;
            var a = {
                step: 'second',
                data: $defaultsp,
                id: $('#itemId').val()
            };
            updatedata(a);



        }
    });

}, 2000);

$('#divgeo').thaiaddress({});
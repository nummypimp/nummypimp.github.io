function readitemsfile() {

    var id = $('#itemId').val();
    var $desgg = {};
    var optgg = {};
    var settingsgg;

    var dd = '';
    $.get("https://numwk2.firebaseio.com/items/" + id + ".json", dd)
        .done(function(data) {


            $.each(data, function(k, b) {
                datagg = b;
                settingsgg = $.extend({}, $desgg, datagg);
                $desgg = settingsgg;


            });

            //console.log($desgg);  
            // $(this).parent('td').hide();
            sendtogg3(id, $desgg);

        });
}

function sendtogg3(a, b) {

    //console.log(a); 
    //console.log(b); 
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://numwk2.firebaseio.com/data/items/" + a + ".json",
        "method": "PUT",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json",
            "cache-control": "no-cache",
            "postman-token": "e2775ff2-c38c-49ac-664d-d1346cc19592"
        },
        "processData": false,
        "data": JSON.stringify(b)
    }

    $.ajax(settings).done(function(response) {
        //console.log(response);
    });





}

function sendtogg(a, b) {

    //console.log(a); 
    //console.log(b); 
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://numwk2.firebaseio.com/items/" + a + ".json",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json",
            "cache-control": "no-cache",
            "postman-token": "e2775ff2-c38c-49ac-664d-d1346cc19592"
        },
        "processData": false,
        "data": JSON.stringify(b)
    }

    $.ajax(settings).done(function(response) {
        //console.log(response);
    });





}

function sendtogg2(a, b) {

    //console.log(a); 
    //console.log(b); 
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://numwk2.firebaseio.com/items/" + a + ".json",
        "method": "PUT",
        "headers": {
            "content-type": "application/json",
            "accept": "application/json",
            "cache-control": "no-cache",
            "postman-token": "e2775ff2-c38c-49ac-664d-d1346cc19592"
        },
        "processData": false,
        "data": JSON.stringify(b)
    }

    $.ajax(settings).done(function(response) {
        //console.log(response);
    });





}
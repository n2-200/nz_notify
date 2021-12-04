window.addEventListener('message', function (event) {
    var edata = event.data;

    function notify(name, time, title, msg) {
        $(name+" .title b").text(title);
        $(name+" .msg").text(msg);
        $(".w").animate({ left: '20px' }).show();
        $(name).show()
        setTimeout(function () {
            $(".w").animate({ left: '-200px' }, function () {
                $(".w").hide()
                $(name).hide()
            });
        }, time);
    }

    if (edata.type == 'notify') {
        notify('.notify', edata.time, edata.title, edata.msg)
    }
    if (edata.type == 'warn') {
        notify('.warn', edata.time, edata.title, edata.msg)
    }
    if (edata.type == 'success') {
        notify('.success', edata.time, edata.title, edata.msg)
    }
    if (edata.type == 'error') {
        notify('.error', edata.time, edata.title, edata.msg)
    }
    
});
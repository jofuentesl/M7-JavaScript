$(document).ready(function(){
    $(".button").click(function(){
        $('input:radio[name="taste"]').removeAttr('checked');
                $('input:radio[name="taste"]').prop('checked', false);
    });
});
/**
 * Created by Nick on 2/20/2017.
 */
//var n = N$('John', 'Doe');

$('#login').click(function() {
    var loginGrtr = N$('John', 'Don');

    $('#logindiv').hide();

    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

})
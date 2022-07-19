$(document).ready(function() {
    let arr =[];
    if (localStorage.getItem('users') == null)
        arr = [];
    else
        arr = JSON.parse(localStorage.getItem('users'));

    $('#signup').submit(function(r){
        const myObj = {
            ad: $('#firstname').val(),
            telefon: $('#mobil').val(),
            isdifadeciAdi: $('#username').val(),
            sifre: $('#password').val()
        };
        
        arr.push(myObj);
        
        let myJsontext = JSON.stringify(arr);
        localStorage.setItem('user',myJsontext);
    });
});
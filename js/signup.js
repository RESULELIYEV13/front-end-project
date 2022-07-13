$(document).ready(function() {
    const arr =[];

    $('#signup').submit(function(e){
        const myObj = {
            ad: $('#firstname').val(),
            telefon: $('#mobil').val(),
            isdifadeciAdi: $('#username').val(),
            sifre: $('#password').val()
        };
        // mastivimiz var 1 dene icinde obyekler JSON sayesinde
        arr.push(myObj);
        console.log(arr);
        let myJsontext = JSON.stringify(arr);
        localStorage.setItem('user',myJsontext);
    });
});
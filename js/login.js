$(document).ready(function(){

    $("#login").submit(function(){
        let usernames = $('#username').val();
        let passwords = $('#password').val();
        let userpas = JSON.parse(localStorage.getItem('users'));
        let useryoxla = false;
        for(let i=0; i<userpas.length; i++){
            if(userpas[i].isdifadeciAdi==usernames){
                useryoxla = true;
                if(userpas[i].sifre==passwords)
                    alert('hesaba giris edildi');
                else
                    alert('yanlis parol daxil eldilib');
                
            }
        }
        if (!useryoxla)
            alert('isdifaddeci yoxdur');
        
    });
});
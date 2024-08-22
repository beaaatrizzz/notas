function calcular (){
    var Not1, Not2, Not3, media;


Not1 = document.getElementById ('Not1').value;
Not2 = document.getElementById ('Not2').value;
Not3 = document.getElementById ('Not3').value;


    
   media = (parseFloat (Not1) + parseFloat (Not2) + parseFloat (Not3)) /3

         document.getElementById('media').innerHTML = media.toFixed(2)
    
         if (media >= 7 && media <= 10 ){
            document.getElementById ('status').innerHTML = " Aprovado "
         } 
         else {
            document.getElementById ('status').innerHTML = " Reprovado "
         }
}    
        

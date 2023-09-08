// var r=0;
// for (var k = 0; k < 3; k++) {
//     r=r+1;
// }; 
// alert(r);

// var affiche= alert("Bienvenue à la calculatrice_JS");
// affiche;
// var aff = alert("Cliquez sur l'écran de la calculatrice pour l'activer.");
// aff;  

// var result;   
// result=;
var apres = document.getElementById("apres_result");
var screenn = document.getElementById("sortie");
var clavier = document.getElementsByTagName("button");
    
// Affichage des touches || Fonctionnement de quelques touches
  
(function () {
    for (var i = 0 ; i < clavier.length ; i++) {
        // screenn.onfocus=function (e) {
            clavier[0].onclick=function (e) {
                e = e || window.event;
                screenn.value = "";
                apres.value = 0;
                screenn.style.height="170px";
                screenn.style.borderRadius="8%"
                apres.setAttribute('type','hidden');
            };
            clavier[1].onclick=function (e) {
                e = e || window.event;
                screenn.value ="-" + screenn.value  ;
            };
            clavier[2].onclick=function (e) {
                e = e || window.event;
                screenn.value =screenn.value + e.target.innerHTML;
            };
            for (var i = 3 ; i < 12 ; i++) {
                    clavier[i].onclick=function (e) {
                        e = e || window.event;
                        screenn.value =screenn.value + parseInt(e.target.innerHTML);
                    };
            };
            clavier[13].onclick=function (e) {
                e = e || window.event;
                screenn.value =screenn.value +parseInt(e.target.innerHTML);
            };
            for (var i = 15 ; i < 20 ; i++) {
                clavier[i].onclick=function (e) {
                    e = e || window.event;
                    screenn.value = screenn.value + e.target.innerHTML;
                }; 
            };
            clavier[19].onclick=function (e) {
                e = e || window.event;
                screenn.style.height="85px";
                screenn.style.borderRadius="13%"
                apres.setAttribute('type','text');
                // alert(screenn.value);
                // alert(screenn.value.length);
                var sep = screenn.value;
                if (sep.length==1) { 
                    // si l'operation n'est pas une chaine de caractere
                    apres.value = Number(sep);
                }else {
                    sep = screenn.value.split(' ');
                    // si l'operation est une chaine de caractere
                // var sep = screenn.value.split(' ');
                // alert(sep);
                var result=0; 
                result=parseInt(sep[0]); // attribution de la premiere valeur de l'operation a result
                    for (var j = 0; j < sep.length; j++) {
                        // alert(sep[j])
                        if ( sep[j]==="+") {
                            result= result + parseInt(sep[j+1]) ; // seconde valeur est égale à la première valeur + le signe + la valeur suivante 
                        };
                        if (sep[j]==="-") {
                            result= result - parseInt(sep[j+1]) ;
                        };
                        if (sep[j]==="×") { 
                            result= result * parseInt(sep[j+1]);
                        };
                        if (sep[j]==="÷") {
                            result= result / parseInt(sep[j+1]) ;
                        };
                        if (sep[j]==="±") {
                            result= (- parseInt(sep[j-1]) + parseInt(sep[j+1]));
                        };
                        if (sep[j]===".") {
                            var results;
                            results= parseFloat(result) . parseFloat(sep[j+1]);
                            result=parseFloat(results);

                        };
                        if (sep[j]==="%") {
                            result= result % parseInt(sep[j+1]);
                        };
                    };
                    apres.value = result;
                };

            };   
            clavier[12].onclick=function (e) { 
                e = e || window.event;
                var sep = screenn.value.split(' '); // rendre l'operation qui est sur une forme str en un tableau
                var sepa ;
                var separ;
                // var separe;
                    // alert(sep);
                    sepa = sep.pop(); // supprimer le dernier element du tableau
                    // alert(sep);
                    separ = sep.join(' '); // retransformer le tableau en un str 
                    // alert(separ);
                    // separe = separ.push(' ');
                    screenn.value = separ;
            }; 
            // clavier[12].onclick=function (e) {
            //     e = e || window.event;
            //     screenn.value = screenn.value + e.target.innerHTML ;
            // };
            clavier[14].onclick=function (e) {
                e = e || window.event;
                screenn.value =screenn.value + e.target.innerHTML;
            };
            
            
           
        // };
    };
    // for (var i = 0 ; i < clavier.length ; i++) {
    //     if () {
            
    //     };
    // };
    

})();



    // 


    
  
  



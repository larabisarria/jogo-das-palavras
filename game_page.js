nome1=localStorage.getItem("nome1");
nome2=localStorage.getItem("nome2");

pontos1=0;
pontos2=0;

document.getElementById("nome1").innerHTML=nome1;
document.getElementById("nome2").innerHTML=nome2;


document.getElementById("ponto1").innerHTML=pontos1;
document.getElementById("ponto2").innerHTML=pontos2;

function send(){
    palavra1=document.getElementById("palavra").value;
    palavra=palavra1.toLowerCase();
    character1=palavra.charAt(1);
    metade=Math.floor(palavra.length/2);
    character2=palavra.charAt(metade);
    ultimo=palavra.length-1;
    character3=palavra.charAt(ultimo);
    troca1=palavra.replace(character1,"_");
    troca2=troca1.replace(character2,"_");
    troca3=troca2.replace(character3,"_");
    linha1="<h4 id='palavradisplay'>"+troca3+"</h4>";
    linha2="<br>Resposta: <input type='text' id='resposta'>";
    linha3="<br> <br> <button onclick='checar()' class='btn btn-info'>checar</button>";
    codigo=linha1+linha2+linha3;
    document.getElementById("caixaderesposta").innerHTML=codigo;
    document.getElementById("palavra").value="";
    }

    pergunta="jogador1";
    responde="jogador2";

    function checar(){
        resposta1=document.getElementById("resposta").value;
        resposta=resposta1.toLowerCase();

        if (palavra == resposta) {
            if (responde == "jogador1") {
                pontos1=pontos1+1;
                document.getElementById("ponto1").innerHTML = pontos1;
            }  
            else{
                pontos2=pontos2+1;
                document.getElementById("ponto2").innerHTML = pontos2;
            }
        }
        if (pergunta == "jogador1") {
            pergunta="jogador2";
            responde="jogador1";
            document.getElementById("pergunta").innerHTML ="turno de pergunta: " +nome2;
            document.getElementById("responde").innerHTML ="turno de resposta: " +nome1;
        }
        else{
            pergunta="jogador1";
            responde="jogador2";
            document.getElementById("pergunta").innerHTML ="turno de pergunta: " +nome1;
            document.getElementById("responde").innerHTML ="turno de resposta: " +nome2;
        }
            document.getElementById("caixaderesposta").innerHTML="";

    }
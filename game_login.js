function adduser(){
    var nomesusuarios1= document.getElementById("nome1").value;
    var nomesusuarios2= document.getElementById("nome2").value;

    localStorage.setItem("nome1",nomesusuarios1)
    localStorage.setItem("nome2",nomesusuarios2)

    window.location="game_page.html"
    
}
function closeSideMenu(){
    document.getElementById("sideMenu").style.width = "0px";
    
}

function openSideMenu(){

    document.getElementById("sideMenu").style.width = "260px";

}

function gpt(){
    document.getElementById("gptanswer").value() = fetch("/api/user"); 
}
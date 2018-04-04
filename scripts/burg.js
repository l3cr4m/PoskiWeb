function bigmac(){
    var btn = document.getElementById("butt");
    
    var obj = document.getElementById("left");
    
    btn.onclick = function() {
        
        if(obj.style.visibility === "visible"){
            obj.style.visibility = "hidden";  
        }
        
        else{
            obj.style.visibility = "visible";
        }
    };
}

window.onload = function() {
    form();
    dropdownmenu();
    switcher(); 
    bigmac();
}
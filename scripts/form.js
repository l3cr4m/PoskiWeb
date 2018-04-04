function form(){
    var btn = document.getElementById("a");
    
    var obj = document.getElementById("form");
    
    btn.onclick = function() {
        
        if(obj.style.visibility === "visible"){
            obj.style.visibility = "hidden";  
        }
        
        else{
            obj.style.visibility = "visible";
        }
    };
}

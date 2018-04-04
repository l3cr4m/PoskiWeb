function switcher(){  
    var button = document.getElementById("buttons").getElementsByTagName("BUTTON");
    var content = document.getElementById("content").getElementsByTagName("P");
 
    button[0].onclick = function() {
        button[0].className = "tvar02_on";
        button[1].className = "tvar02_off";
        button[2].className = "tvar02_off";
        
        content[0].innerHTML = "Lorem ipsum dolor sit amet, consectetur Elit, sed eiusmod termpor incidunt ut labore ed Dolor magna aliqua. Ut enim veniam, Uis nostrud exercitation";
        
        content[1].innerHTML = "ullamco laboris ut enim ad minim veniam, uis nostrud exercitation ullamco laboris nisi. Lorem upsum dolor sit amet, consectetur";
        
        content[2].innerHTML = "Elit, sed eiusmod tempor incidunt ut labore et Dolore magna aliqua. Ut eim vaniam, Uis nostrud exerciion ullamco laboris Ut enim ad minim veniam, is.";
    };
    
    button[1].onclick = function() {
        button[1].className = "tvar02_on";
        button[0].className = "tvar02_off";
        button[2].className = "tvar02_off";
        
        content[1].innerHTML = "Lorem ipsum dolor sit amet, consectetur Elit, sed eiusmod termpor incidunt ut labore ed Dolor magna aliqua. Ut enim veniam, Uis nostrud exercitation";
        
        content[0].innerHTML = "ullamco laboris ut enim ad minim veniam, uis nostrud exercitation ullamco laboris nisi. Lorem upsum dolor sit amet, consectetur";
        
        content[2].innerHTML = "Elit, sed eiusmod tempor incidunt ut labore et Dolore magna aliqua. Ut eim vaniam, Uis nostrud exerciion ullamco laboris Ut enim ad minim veniam, is.";
    };
    
    button[2].onclick = function() {
        button[2].className = "tvar02_on";
        button[0].className = "tvar02_off";
        button[1].className = "tvar02_off";
        
        content[2].innerHTML = "Lorem ipsum dolor sit amet, consectetur Elit, sed eiusmod termpor incidunt ut labore ed Dolor magna aliqua. Ut enim veniam, Uis nostrud exercitation";
        
        content[1].innerHTML = "ullamco laboris ut enim ad minim veniam, uis nostrud exercitation ullamco laboris nisi. Lorem upsum dolor sit amet, consectetur";
        
        content[0].innerHTML = "Elit, sed eiusmod tempor incidunt ut labore et Dolore magna aliqua. Ut eim vaniam, Uis nostrud exerciion ullamco laboris Ut enim ad minim veniam, is.";
    };
}
        
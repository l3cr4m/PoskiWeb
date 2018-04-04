function dropdownmenu(){
    var dropdown0 = document.getElementsByClassName("dropdown-btn0");
    var dropdown1 = document.getElementsByClassName("dropdown-btn1");
    var i;

    for (i = 0; i < dropdown0.length; i++) {
        dropdown0[i].addEventListener("click", function() {
            this.classList.toggle("active0");
            var dropdown0Content = this.nextElementSibling;
            if (dropdown0Content.style.display === "block"){
                dropdown0Content.style.display = "none";
            }
            else {
                dropdown0Content.style.display = "block";
            }
        });
    }
    
    for (i = 0; i < dropdown1.length; i++) {
        dropdown1[i].addEventListener("click", function() {
            this.classList.toggle("active1");
            var dropdown1Content = this.nextElementSibling;
            if (dropdown1Content.style.display === "block"){
                dropdown1Content.style.display = "none";
            }
            else {
                dropdown1Content.style.display = "block";
            }
        });
    }
}
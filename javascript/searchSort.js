function mySearch() { 
    var pencarian = document.getElementById("pencarian").value; 
    if(pencarian == "Dilan" || pencarian == "dilan"){ 
        window.location.replace("dilan.html")
        return false; 
    }
    else if(pencarian == "Stephen King" || pencarian == "stephen" || pencarian == "stephen king")
    { 
        window.location.replace("stephen.html")
        return false;  
    }else if(pencarian == "9780060754013"){
        window.location.replace("john.html")
        return false;  
    }else{
        alert("Tidak ada daftar buku pada pencarian!");
    }
}
function mySort() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
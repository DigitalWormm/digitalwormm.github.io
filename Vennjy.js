function openNav(){ 
    document.getElementById("mySideNav").style.width = "250px"; 
    document.getElementById("mainContents").style.marginLeft = "250px";
    document.getElementById("sideNavBtn").style.marginLeft = "250px";

    let navbar = document.getElementById("navbar");
    let cpf = document.getElementById("codingprofiles");
    navbar.style.marginLeft = "250px";
}
function closeNav(){ 
    document.getElementById("mySideNav").style.width = "0px";  
    document.getElementById("mainContents").style.marginLeft = "0px";
    document.getElementById("sideNavBtn").style.marginLeft = "0px";
    document.getElementById("navbar").style.marginLeft = "0px";
}
function toggleNavBar(){
    let arw = document.getElementById("sideNavArrow");
    if (arw.innerText === ">"){
        arw.innerHTML = "<";
        openNav();
    }
    else {
        arw.innerHTML = ">";
        closeNav();
    }
}

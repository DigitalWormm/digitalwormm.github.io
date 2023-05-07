function openNav(){ 
    document.getElementById("mySideNav").style.width = "250px"; 
    document.getElementById("mainContents").style.marginLeft = "250px";
    document.getElementById("sideNavBtn").style.marginLeft = "250px";
    document.getElementById("navbar").style.marginLeft = "250px";

    document.body.style.backgroundColor = "rgba(0,0,0,.4)";
}
function closeNav(){ 
    document.getElementById("mySideNav").style.width = "0px";  
    document.getElementById("mainContents").style.marginLeft = "0px";
    document.getElementById("sideNavBtn").style.marginLeft = "0px";
    document.getElementById("navbar").style.marginLeft = "0px";

    document.body.style.backgroundColor = "white";
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

function open_tab (evt, tabName){

    var i, tabs_content, tab_links;

    tabs_content = document.getElementsByClassName("tabs_content");

    for (i = 0; i < tabs_content.length; i++){

        tabs_content[i].style.display = "none";
    }


    tab_links = document.getElementsByClassName("tab_links");

    for (i = 0; i < tab_links.length; i++){
    
        tab_links[i].className = tab_links[i].className.replace(" active ","");

    }


    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";



}

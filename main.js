function open_tab (evt, tabName){

    var i, tabs_content, tab_links;

    tabs_content = document.getElementsByClassName("tabs_content");

    for (i = 0; i < tabs_content.length; i++){

        tabs_content[i].style.display = "none";
    }


    tab_links = document.getElementsByClassName("tab_links");

    for (i = 0; i < tab_links.length; i++){
    
        tab_links[i].className = tab_links[i].className.replace("active","");

    }


    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += "active";



}


async function load_blog (){
    const container = document.getElementById("blog_post");

    const response = await fetch('posts.json');
    const posts = await response.json();

    posts.sort((a,b) => b.date.localeCompare(a.date));

    for (const post of posts){

        const file_response = await fetch("posts/" + post.file);
        const content = await file_response.text();

        const article = document.createElement("article");
        article.className = "blog_post_class";
        article.innerHTML = "<h3>"+ post.title +"</h3>"
                            +"<p class='post_date'>" + post.date +"</p>"
                            + marked.parse(content);
        container.appendChild(article);

    }





}

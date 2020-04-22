var categ = JSON.parse(jsonCateg);
var posts = JSON.parse(jsonPosts);

var menu = document.getElementById("posts");
var folder = document.getElementById("folder");


var quotes = JSON.parse(quote);



document.getElementById("quot").innerHTML = quotes[Math.floor(Math.random() * quotes.length)][0];

var menuTitle = document.createElement('h1');
menuTitle.appendChild(document.createTextNode("Posts"));
menu.appendChild(menuTitle);

for (var key in posts) {
    if (!posts.hasOwnProperty(key)) continue;

    //var lista = document.createElement('li');

    var link = document.createElement('div');
    link.setAttribute("class", "link");
    var linkA = document.createElement('a');
    linkA.setAttribute("href", "#" + key);

    linkH = document.createElement('h2');

    linkH.appendChild(document.createTextNode(posts[key][0]));

    var linkP = document.createElement('p');
    linkP.appendChild(document.createTextNode(posts[key][4]));


    var linkT = document.createElement('small');
    //date
    var postDate = new Date(posts[key][2]);
    postDate = postDate.toLocaleString();
    linkT.appendChild(document.createTextNode(postDate));

    linkA.appendChild(linkH);
    linkA.appendChild(linkP);
    linkA.appendChild(linkT);

    link.appendChild(linkA);

    var linkD = document.createElement('div');
    linkD.setAttribute("class", "categ");
    var linkC = document.createElement('a');
    linkC.setAttribute("href", "#categ" + posts[key][1][0]);
    linkC.appendChild(document.createTextNode(categ[posts[key][1][0]]));

    linkD.appendChild(linkC);
    link.appendChild(linkD);


    menu.appendChild(link);



    var page = document.createElement('div');

    page.setAttribute("class", "tab-content");
    page.setAttribute("id", key);

    var titulo = document.createElement('h1');
    titulo.innerHTML = posts[key][0];
    //var back = document.createElement('a');

    page.appendChild(titulo);
    page.innerHTML = posts[key][6];

    folder.prepend(page);

}

/*

    console.log(key);


page.innerHTML = ;
*/

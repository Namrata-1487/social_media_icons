let menubar = document.getElementsByClassName(menubar);
let facebook = document.getElementsByClassName(facebook);
let twitter = document.getElementsByClassName(twitter);
let insta = document.getElementsByClassName(insta);
let github = document.getElementsByClassName(github);


function show() {
    let menubar = document.getElementsByClassName(menubar);
    let facebook = document.getElementsByClassName(facebook);
    let twitter = document.getElementsByClassName(twitter);
    let insta = document.getElementsByClassName(insta);
    let github = document.getElementsByClassName(github);
    var x = menubar + facebook + twitter + insta + github;

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
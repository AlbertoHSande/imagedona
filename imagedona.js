url = "https://www.google.com/search?q="
url_add = "&client=firefox-b-d&hl=es&tbm=isch"

function GetCellValues() {
    setTimeout(function () {
        var body = document.getElementById('mainFrame').contentWindow.document.getElementById('TaulaLlista');
        //console.log(body);
        var tr = body.getElementsByTagName('tr');
        //console.log(tr);
        for (i = 1; i < tr.length; i++) {
            //console.log(tr[i]);
            //console.log(tr[i].children[0].children[0].innerText);
            //console.log(url+tr[i].children[0].children[0].innerText+url_add);
            tr[i].children[0].children[0].innerHTML = '<a href="'+ url+tr[i].children[0].children[0].innerText+url_add + '"target="_blank">' + tr[i].children[0].children[0].innerText + '</a';
        }
    }, 1000);
}

const observer = new MutationObserver((mutations, observer) => {
    console.log(mutations, observer);
    GetCellValues();
});

observer.observe(document, {
    subtree: true,
    attributes: true
});

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
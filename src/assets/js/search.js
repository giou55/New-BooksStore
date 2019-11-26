function test(msg) {
    alert(msg);
}

function doSearch() {
    let message = "";
    let results = [];
    let textOutput = "";
    let txt = document.getElementById("myInput").value.toLowerCase();
    let myBooks = products;

    if (txt == "" || txt.length < 5) {
        document.getElementById("message").innerHTML = "";
        document.getElementById("results").innerHTML = "";
        return;
    }

    txt = txt.replace(/ά/g, "α");
    txt = txt.replace(/έ/g, "ε");
    txt = txt.replace(/ή/g, "η");
    txt = txt.replace(/ί/g, "ι");
    txt = txt.replace(/ό/g, "ο");
    txt = txt.replace(/ύ/g, "υ");
    txt = txt.replace(/ώ/g, "ω");

    myBooks.forEach(myFunction);

    function myFunction(book) {
        let tempBookname = book.name.toLowerCase();
        tempBookname = tempBookname.replace(/ά/g, "α");
        tempBookname = tempBookname.replace(/έ/g, "ε");
        tempBookname = tempBookname.replace(/ή/g, "η");
        tempBookname = tempBookname.replace(/ί/g, "ι");
        tempBookname = tempBookname.replace(/ό/g, "ο");
        tempBookname = tempBookname.replace(/ύ/g, "υ");
        tempBookname = tempBookname.replace(/ώ/g, "ω");

        if (tempBookname.includes(txt)) {
            results.push(book.name); 
        }
    }

    for (x of results) {
        textOutput += x + "<br >";
    }

    if (results.length == 1) {
        message = "Βρέθηκε " + results.length + " βιβλίο:";
    } else if (results.length > 1) {
        message = "Βρέθηκαν " + results.length + " βιβλία:";
    } else {
        message = "Δεν βρέθηκαν βιβλία με τον τίτλο αυτό!";
    }

    document.getElementById("message").innerHTML = message;
    document.getElementById("results").innerHTML = textOutput;
}
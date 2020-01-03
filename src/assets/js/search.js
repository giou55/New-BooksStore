function doSearch(products, text) {
    let results = [];
    let txt = text.toLowerCase();
    let myBooks = products;

    if (txt == "" || txt.length < 5) {
        return;
    }

    function myFunction(book) {
        let tempBookname = book.name.toLowerCase();
        if (tempBookname.includes(txt)) {
            results.push(book); 
        }
    }

    myBooks.forEach(myFunction);

    return results;
}
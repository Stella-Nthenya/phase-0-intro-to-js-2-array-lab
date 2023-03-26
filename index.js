const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {

    return cats.push(name);

};

function destructivelyPrependCat(name) {

    return cats.unshift(name);

};

function destructivelyRemoveLastCat(name) {

    return cats.pop(name);

};

function destructivelyRemoveFirstCat(name) {

    return cats.shift(name);

};

function appendCat(name){

    const newCatsList = [...cats, name];

    return newCatsList;

}

function prependCat(name) {

    const newCatsList = [name, ...cats]

    return newCatsList;

};

function removeLastCat(name) {

    const newCatsList = cats.slice(0, -1)

    return newCatsList;

};

function removeFirstCat() {

    const newCatsList = cats.slice(1)

    return newCatsList;

};
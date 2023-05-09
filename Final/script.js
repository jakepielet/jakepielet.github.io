function slides() {
    let start = randomItem(['cats', ' go dog dog', ' go bears'])
    let colors =['DD', 'FF', '33', 'CC', '00']
    console.log("heeeeere", start)

    let i = 1;
    do {
        console.log("show", "slide" + i)
        let element = document.getElementById("slide" + i)

        setTimeout(function () {
            let newColor = "#" + randomItem(colors) + randomItem(colors) +randomItem(colors);

            element.getElementsByClassName('slogan')[0].style.background= newColor;
            show(element)
        }, i*1000);

        let block = window.getComputedStyle(element, null).visibility
        // if (block === "hidden" ) {
        //     show(element)
        // }
        // else
            i = i+1;
        // if (x === 4 )
        //     x=0;
    } while (i < 7);
}

const randomItem = function(items) {  //Send array, recieve back random item
    const max = items.length;
    const x = Math.floor((Math.random() * max));
    return items[x];
};

    // Show an element
    let show = function (elem) {
        elem.style.display = 'inline-block';
        elem.style.visibility = 'visible';
    };

// Hide an element
    let hide = function (elem) {

        elem.style.visibility  = 'hidden';
    };
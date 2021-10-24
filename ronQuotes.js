
let demo1elementop = 1;
let demo2elementop = 1;
let demo3elementop = 1;

let imageOfRon = [
    "ronAssets/ron1.jpg",
    "ronAssets/ron2.jpg",
    "ronAssets/ron3.jpg",
    "ronAssets/ron4.jpg",
    "ronAssets/ron5.jpg",
    "ronAssets/ron6.jpg",
    "ronAssets/ron7.jpg",
    "ronAssets/ron8.jpg",
    "ronAssets/ron9.jpg",
    "ronAssets/ron10.jpg"
];

let doc = document.getElementById("searcher").addEventListener("keydown", seachQuote);
let slideShower = Math.floor(Math.random(10));
loadQuotes(setInterval(fadeinout,10000));



function loadQuotes(nextfunc){

    const xhttp = new XMLHttpRequest();
    slideShower = Math.floor(Math.random() * 10);


    xhttp.onload = function(){

    
        let quote = JSON.parse(this.response);
        document.getElementById("demo").innerHTML = quote[0];
        document.getElementById("demo1").innerHTML = quote[1];
        document.getElementById("demo2").innerHTML = quote[2];

        document.getElementById("picturesOfRon").src= imageOfRon[slideShower]

    }
    xhttp.open('GET', "https://ron-swanson-quotes.herokuapp.com/v2/quotes/3");
    xhttp.send();     
    nextfunc();
    
    


}

function fadeinout(){

    setTimeout(() =>{

            for (let index = 0; index < 100; index++) {
                setTimeout(() => {
                    document.getElementById("demo").style.opacity = demo1elementop;
                    document.getElementById("demo1").style.opacity = demo2elementop;
                    document.getElementById("demo2").style.opacity = demo3elementop;
                    document.getElementById("picturesOfRon").style.opacity = demo1elementop
                    demo1elementop -= 0.01;
                    demo2elementop -= 0.01;
                    demo3elementop -= 0.01;
                }, index*20);

    }}, 2000);

    setTimeout(() => {
    
                    xhttp = new XMLHttpRequest();
                    xhttp.onload = function(){
                    slideShower = Math.floor(Math.random() * 10);

                    let quote = JSON.parse(this.response);
                    document.getElementById("demo").innerHTML = quote[0];
                    document.getElementById("demo1").innerHTML = quote[1];
                    document.getElementById("demo2").innerHTML = quote[2];

                    document.getElementById("picturesOfRon").src= imageOfRon[slideShower];
                    }


                    xhttp.open('GET', "https://ron-swanson-quotes.herokuapp.com/v2/quotes/3");
                    xhttp.send();

        }, 4000);



    setTimeout(() => {

            for (let index = 0; index < 100; index++) {
                setTimeout(() => {
                    document.getElementById("demo").style.opacity = demo1elementop;
                    document.getElementById("demo1").style.opacity = demo2elementop;
                    document.getElementById("demo2").style.opacity = demo3elementop;
                    document.getElementById("picturesOfRon").style.opacity = demo1elementop
                    demo1elementop += 0.01;
                    demo2elementop += 0.01;
                    demo3elementop += 0.01;
                }, index*20);
                
    }}, 6000);

}

function seachQuote(){


    xhttp = new XMLHttpRequest();
    xhttp.onload = function(){

    let quoteS = JSON.parse(this.response);
    document.getElementById("searchQ1").innerHTML = quoteS[0];
    document.getElementById("searchQ2").innerHTML = quoteS[1];
    document.getElementById("searchQ3").innerHTML = quoteS[2];
    
    }


    xhttp.open('GET', "https://ron-swanson-quotes.herokuapp.com/v2/quotes/3");
    xhttp.send();


}




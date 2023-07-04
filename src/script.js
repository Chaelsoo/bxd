
let categoryarr = [['leopard','elephant','eagle','crow','monkey','panda','tiger','bear','wolf','fox','cat','dog'],['argentina','france','switzerland','greece','algeria','guatemala','austria','brazil','peru','chile','canada','mexico','norway','senegal','ethiopia','costarica','ecuador','ukraine']]
let categories = ["animals","flags"];
let randcat = Math.floor(Math.random()*2);  
let randimg = Math.floor(Math.random()*categoryarr[randcat].length);

let past = window.localStorage.getItem("pic");
if(past == categoryarr[randcat][randimg]){
    location.reload()
    console.log("doing...");
}


localStorage.setItem("pic",categoryarr[randcat][randimg]);



let category = document.querySelector(".category");
category.textContent = categories[randcat];


let img = document.querySelector(".image img");
if(categories[randcat] == "animals"){
img.setAttribute("src",`images/${categories[randcat]}/${categoryarr[randcat][randimg]}.avif`)
}else{
    img.setAttribute("src",`images/${categories[randcat]}/${categoryarr[randcat][randimg]}.jpg`)
}

let solution = document.querySelector(".solution");
for(let i = 0 ; i<categoryarr[randcat][randimg].length; i++){
    let span = document.createElement("span");
    let p = document.createElement("p");
    p.className = "letter";
    span.className = "hide";
    span.textContent = categoryarr[randcat][randimg][i];
    p.appendChild(span);
    solution.appendChild(p);
}

    let alphabet = "azertyuiopqsdfghjklmwxcvbn";

    let set = Array(35).fill('');

    for(let i=0  ; i<35; i++){
        let rand = Math.floor(Math.random()*26);
        set[i]=alphabet[rand];
        }
        
 
        let indices = Array.from({ length: 35 }, (_, i) => i);
        
        for (let i=0;i<categoryarr[randcat][randimg].length ; i++){
        let rand = Math.floor(Math.random()*indices.length);
        let selectedIndex = indices[rand];
        console.log(indices[rand]);
        set[selectedIndex] = categoryarr[randcat][randimg][i];
        indices.splice(rand, 1);
    }
  



    for (let y=0; y<35;y++){
        let div = document.querySelector(".letters")
        let span = document.createElement('span');
        span.textContent = set[y];
        div.append(span)
    };
   
    if (window.localStorage.getItem("Tries") != null){
        var Tries = window.localStorage.getItem("Tries");
    }else{
        var Tries = 0;
    }



    let word = "";
    let letters = document.querySelectorAll(".letters span");
    let found = document.querySelectorAll(".letter span");
    let i = 0 ;
    let myarray = categoryarr[randcat][randimg].split("");



    letters.forEach((span) => {
        span.addEventListener("click",function(element){    
        
        let index = set.indexOf(span.textContent);
        if (index !== -1) {
        set.splice(index, 1);
        }

            if (span.textContent == myarray[i].toLowerCase()){
            span.className = "right";
            found[i].className = "found";
            i++;    
            let pop = document.querySelector(".pop");
            let points = pop.querySelector(".text");
            Tries++;
            
            index = myarray.indexOf(span.textContent);
            if (index !== -1) {
            myarray.splice(index, 1);
            };
            
            //checking for if the entire solution was found 
            if (i == categoryarr[randcat][randimg].length){
            window.localStorage.setItem("Tries",Tries);
            pop.classList.add("done");
            points.textContent = ` TOTAL POINTS ${Tries}`;
            }

            } else{
                span.className = "wrong";
                Tries--;
            }
            let pop = document.querySelector(".pop");
            let points = pop.querySelector(".text");
            let show = pop.querySelector(".show");
            for (let i = 0; i < myarray.length; i++) {
            if (!set.includes(myarray[i])) {
            window.localStorage.setItem("Tries",Tries);
            pop.classList.add("done");
            show.textContent = "WRONG!";
            points.textContent = ` TOTAL POINTS ${Tries}`;
            break; 
                }
            }

        })
    });




    let reset = document.querySelector(".repeat");
    reset.addEventListener("click",function(element){
        i = 0;
        window.localStorage.setItem("Tries",0);
        Tries=0;
        let letters = document.querySelectorAll(".letters span");
        for (let j = 0 ; j<letters.length; j++){
            letters[j].className = "";
        };
        let found = document.querySelectorAll(".letter span");
        for (let n = 0 ; n<categoryarr[randcat][randimg].length; n++){
            found[n].className = "hide";
        };
    });



    let pop = document.querySelector(".pop");
    let btn = pop.querySelector("button");
    btn.addEventListener("click",function(e){
        location.reload();
    })
;
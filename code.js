    let newUl = document.createElement("ul")
    let smartPeoples =
    ['Cameron', 'Mikhail', 'Reagan', 'Joshé', 'Amanda','Bulelani', 'Emile'];

    function smartPeople(){
    let ul = document.body.appendChild(newUl);
    smartPeoples.forEach( (item )=>{
        ul.innerHTML +=
        `<li>${item}</li>`;
    });
    }
    smartPeople();

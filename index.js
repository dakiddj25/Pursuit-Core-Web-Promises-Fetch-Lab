document.addEventListener("DOMContentLoaded", () => {
    fetch(" https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_ten").then(joke => {
        if(!joke.ok){
            throw Error(res.statusText + " was the error ")    
        }                     
        return joke.json();
    }).then(joke => {
        let ol = document.createElement("ol")
        let id = 1
        let jokeid =1
       for(let key in joke){
           let li = document.createElement("li");
           li.id = ""+id++
           jokeid++
           console.log(id)
           let blankLi = document.createElement("li");
           blankLi.id = "blankli"
           li.innerText = joke[key]["setup"]
           blankLi.innerText = ""
           ol.appendChild(li)
        //    ol.appendChild(blankLi)

        ol.addEventListener("click", (e)=> {
           
            let target = e.target
            let newOl = document.createElement("ol")
         //    for(let key in joke){
             let newli = document.createElement("li");
             newli.innerText = joke[jokeid]["punchline"]
            newOl.appendChild(newli)
         //    ol.appendChild(newOl)
     // }
     target.appendChild(newOl)
        })

       }
     
       document.body.appendChild(ol)
    }).catch(err => {
        debugger
    })  

    })

    
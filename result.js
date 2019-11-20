$(document).ready(function(){
    
    /***RECUPERATION SESSION STORAGE */
    var ss = sessionStorage.getItem("imagesIdLike")
    var imagesIdLike = JSON.parse(ss)
    console.log(imagesIdLike);
    

    
    /*****SORTING ALGO triage du plus grand nombres de vote au plus petit */
    function compare(a,b) {
        if (a.votes > b.votes){
           return -1
        }
        if (a.votes < b.votes){
            return 1
        }
        return 0;
    }
    /**liste rangée */
    var x = imagesIdLike.sort(compare)
    console.log(x);
    

    /******génération classement */
    for (i=0;i<x.length;i++){
        /****SIMPLE FUNCTION pour différencier les 3 1ers */
       function podium(COULEUR,PLACE){
            var top=$('<div class="col-12 col-md-4 card mx-4 '+COULEUR+'">')
            $('.top').append(top)
            var img = $('<img src="'+x[i].image+'" class="card-img-top " >')
            top.append(img)
            var cardBodyDiv = $('<div class="card-body">')
            top.append(cardBodyDiv)
            var title = $('<h5 class="card-title">')
            title.html(PLACE)
            var subtCard = $('<p class="card-text">')
            subtCard.html("Classement= "+(i+1))
            var subtCard2 = $('<p class="card-text">')
            subtCard2.html("Votes= "+x[i].votes)
            var subtCard3 = $('<p class="card-text">')
            subtCard3.html("ID= "+x[i].id)
            cardBodyDiv.append(title,subtCard,subtCard2,subtCard3)
        }


        if (i==0){
            
            podium("bg-warning","1er")
        }
        else if(i==1){
            
            podium("bg-secondary","2eme")
        }
        else if(i==2){
            
            podium("bg-danger","3eme")
        }

        /****generation du reste du classement */
        else{
            
            var top=$('<div class="col-12 col-md-3 card p-0 my-0 mx-0">')
            $('.top').append(top)
            var img = $('<img src="'+x[i].image+'" class="card-img-top p-0" >')
            top.append(img)
            var cardBodyDiv = $('<div class="card-body">')
            top.append(cardBodyDiv)
            var title = $('<h5 class="card-title">')
            title.html(x[i].title)
            var subtCard = $('<p class="card-text">')
            subtCard.html("Classement= "+(i+1))
            var subtCard2 = $('<p class="card-text">')
            subtCard2.html("Votes= "+x[i].votes)
            var subtCard3 = $('<p class="card-text">')
            subtCard3.html("ID= "+x[i].id)
                    
            
            /***BG 1 CARD SUR 2 */

            cardBodyDiv.append(title,subtCard,subtCard2,subtCard3)
            if (i%2!=0){
                cardBodyDiv.attr("class","card-body bg-dark")
                cardBodyDiv.css("color","white")
            }
        }



    }
    

    
    
    
    
    
    
        
    })

    
    
    
    
    
    
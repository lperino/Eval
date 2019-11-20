$(document).ready(function(){
    
    
    var ss = sessionStorage.getItem("imagesIdLike")
    var imagesIdLike = JSON.parse(ss)
    console.log(imagesIdLike);
    

    
    
    function compare(a,b) {
        if (a.votes > b.votes){
           return -1
        }
        if (a.votes < b.votes){
            return 1
        }
        return 0;
    }
    var x = imagesIdLike.sort(compare)
    console.log(x);
    
    for (i=0;i<x.length;i++){

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

            cardBodyDiv.append(title,subtCard,subtCard2,subtCard3)
            if (i%2!=0){
                cardBodyDiv.attr("class","card-body bg-dark")
                cardBodyDiv.css("color","white")
            }
        }



    }
    

    
    
    
    
    
    
        
    })

    
    
    
    
    
    
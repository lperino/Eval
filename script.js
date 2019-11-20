$(document).ready(function(){
    
    for (i=0;i<pictures.length ;i++){
        var colCardDiv = $('<div class="col-12 col-md-3 card  p-0 ">')
        $(".photoarea").append(colCardDiv)
        // var cardDiv = $('<div class="card">')
        var imgCard = $('<img src="'+pictures[i].url+'" class="card-img-top " >')
        var roundImg = $('<img src="'+pictures[i].url+'" class="card-img-top  img2" >')
        colCardDiv.append(imgCard,roundImg)
        var cardBodyDiv = $('<div class="card-body">')
        colCardDiv.append(cardBodyDiv)   
        var titleCard =$('<h5 class="card-title">')
        cardBodyDiv.html(pictures[i].title)
        var subtCard = $('<p class="card-text">')
        subtCard.html(pictures[i].subtile)
        cardBodyDiv.append(subtCard)
        var voteCardDiv = $('<div class="d-flex justify-content-center">')
        cardBodyDiv.append(voteCardDiv)
        var shitBtnCard =$('<button id="shit'+pictures[i].id+'"><i class="fas fa-poo"></i></button>')
        var voteCptDiv =$('<div id="votes'+pictures[i].id+'">')
        voteCptDiv.html(pictures[i].votes)
        var likeBtnCard = $('<button id="like'+pictures[i].id+'"><i class="fas fa-heart"></i></button>')
        voteCardDiv.append(shitBtnCard,voteCptDiv,likeBtnCard)
        
        if (i%2!=0){
            cardBodyDiv.attr("class","card-body bg-dark")
            cardBodyDiv.css("color","white")
        }


    }
    
    var imagesIdLike = []
    for (i=0;i < pictures.length ;i++){
        var object={
           id: pictures[i].id,
           votes: pictures[i].votes,
           image: pictures[i].url,
           title: pictures[i].title
        }
        imagesIdLike.push(object)
        sessionStorage.setItem("imagesIdLike",JSON.stringify(imagesIdLike))
        
    }
    
    $('button[id*="shit"]').click(function (){
        
        var idbtnShit =$(this).attr('id').replace("shit","")
        $("#votes"+idbtnShit).html(parseInt($("#votes"+idbtnShit).html()) -1)
        
        var ok = imagesIdLike.findIndex(x => x.id === parseInt($(this).attr('id').replace("shit","")))
        imagesIdLike[ok].votes = parseInt($("#votes"+idbtnShit).html())
        console.log(imagesIdLike);
        sessionStorage.setItem("imagesIdLike",JSON.stringify(imagesIdLike))
        


        
    })
    $('button[id*="like"]').click(function (){

        
        var idbtnlike =$(this).attr('id').replace("like","")
        $("#votes"+idbtnlike).html(parseInt($("#votes"+idbtnlike).html()) +1)

        var ok = imagesIdLike.findIndex(x => x.id === parseInt($(this).attr('id').replace("like","")))
        imagesIdLike[ok].votes = parseInt($("#votes"+idbtnlike).html())
        console.log(imagesIdLike);
        sessionStorage.setItem("imagesIdLike",JSON.stringify(imagesIdLike))
        
    })


    

})


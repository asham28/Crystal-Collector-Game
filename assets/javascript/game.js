$("document").ready(function(){

// =====================================
// MAJOR TASK 1: Generate Random Number
// =====================================

var randomNumComp = Math.floor(Math.random() * (120-19)+19); 

$("#randomNum").text(randomNumComp); 


// =====================================
// MAJOR TASK 2: Generate Random Number
// =====================================

var btnNum = function() {
    var randomNumGem1 = Math.floor(Math.random() * (12-1) + 1 );  
    $("#gemBtn1").text(randomNumGem1);     

    var randomNumGem2 = Math.floor(Math.random() * (12-1) + 1 );  
    $("#gemBtn2").text(randomNumGem2);     

    var randomNumGem3 = Math.floor(Math.random() * (12-1) + 1 );  
    $("#gemBtn3").text(randomNumGem3);     

    var randomNumGem4 = Math.floor(Math.random() * (12-1) + 1 );  
    $("#gemBtn4").text(randomNumGem4);     
}

btnNum(); 

// =====================================================
// MAJOR TASK 3: Button Click Gets Added to Player Score
// =====================================================






}); 
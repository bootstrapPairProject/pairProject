//Global Varibal
var idForp=1
// Code For Adding TodoList
$(".btn-add").click(function(){
var i = $(".todo-input").val()
var Strg = `<li class="big${idForp}"> <p>${i}</p> <button class="done${idForp}"> Done </button> <button class="delete${idForp}">Delete </button>`
//</p> <button> </button> <button> </button>
$(".todo-list").append(Strg)
idForp++
})
///////////////////
// Code For Deleting Element
$(document).on('click',`.delete1`,function() {
$(".big1").empty()
})
$(document).on('click',`.delete2`,function() {
    $(".big2").remove()
    })
    $(document).on('click',`.delete3`,function() {
        $(".big3").remove()
        })
        $(document).on('click',".delete4",function() {
            $(".big4").remove()
            })
 // Done Elements
            $(document).on('click',`.done1`,function() {
                $(".big1").css("text-decoration-line"," line-through")
                })
                $(document).on('click',`.done2`,function() {
                    $(".big2").css("text-decoration-line"," line-through")
                    })
                    $(document).on('click',`.done3`,function() {
                        $(".big3").css("text-decoration-line"," line-through")
                        })
                        $(document).on('click',".done4",function() {
                            $(".big4").css("text-decoration-line"," line-through")
                            })
//////////////////////////////
//// Compeleted Select Now
$(".select-btn").change(function(){
    if($(".select-btn").val()=="All")
for (var i = 1 ; i<=idForp ; i ++){
    console.log("Wow")
$(`.big${i}`).show()
}
else
if($(".select-btn").val()=="Uncompleted")
{
    for (var i = 1 ; i<=idForp ; i ++){
    $(`.big${i}`).hide()
    }
    for (var i = 1 ; i<=idForp ; i ++){
        if($(`.big${i}`).css("text-decoration-line")==="none")
    $(`.big${i}`).show()
}
}
else
if($(".select-btn").val()=="Completed")
{
    for (var i = 1 ; i<=idForp ; i ++){
    $(`.big${i}`).hide()
    }
    for (var i = 1 ; i<=idForp ; i ++){
        if($(`.big${i}`).css("text-decoration-line")=="line-through")
           $(`.big${i}`).show()
}
}})
////
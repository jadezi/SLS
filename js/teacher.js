var $$=mdui.JQ

$$('.mdui-click-captured').on("click",function () {
    $(this).addClass("mdui-list-item-active");
    $(this).siblings().removeClass("mdui-list-item-active");
});

$$(".open-btn").on("click",function(){
    $$("#history .mdui-card-content").removeClass("mdui-hidden");
    $$(this).parent().addClass("mdui-hidden");
});

$$("#history .mdui-card-actions .retract-btn").on("click",function(){
    $$("#history .mdui-card-content").addClass("mdui-hidden");
    $$(".open-btn").parent().removeClass("mdui-hidden");
    //$$("#history .mdui-card").append("<div class='mdui-card-actions'><button class='mdui-btn mdui-btn-icon mdui-float-right open-btn'><i class='mdui-icon material-icons'>expand_more</i></button></div>");
});

$$(".retract-btn").css("-webkit-transform","rotate(180deg)");
$$(".retract-btn").css("transform","rotate(180deg)");
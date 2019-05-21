var $$=mdui.JQ

$$('.mdui-click-captured').on("click",function () {
    $$("#new").show();
    $$("#history").show();
    $$(".pwd").addClass("mdui-hidden");
    $$(".tel").addClass("mdui-hidden");
    $$("#count").addClass("mdui-hidden");
    $$(this).addClass("mdui-list-item-active");
    $$(this).siblings().removeClass("mdui-list-item-active");
    $$(this).parent().parent().siblings().children().find(".mdui-click-captured").removeClass("mdui-list-item-active");
});

$$(".open-btn").on("click",function(){
    $$("#history .mdui-card-content").removeClass("mdui-hidden");
    $$(this).parent().addClass("mdui-hidden");
});

$$("#history .mdui-card-actions .retract-btn").on("click",function(){
    $$("#history .mdui-card-content").addClass("mdui-hidden");
    $$(".open-btn").parent().removeClass("mdui-hidden");
});

$$(".retract-btn").css("-webkit-transform","rotate(180deg)");
$$(".retract-btn").css("transform","rotate(180deg)");

$$(".pwdchange").on("click",function(){
    $$(".pwd").removeClass("mdui-hidden");
    $$(".tel").addClass("mdui-hidden");
    $$("#new").hide();
    $$("#history").hide();
});

$$(".count").on("click",function(){
    $$(".tel").addClass("mdui-hidden");
    $$(".pwd").addClass("mdui-hidden");
    $$("#new").hide();
    $$("#history").hide();
    $$("#count").removeClass("mdui-hidden");
});

$$(".telchange").on("click",function(){
    $$(".tel").removeClass("mdui-hidden");
    $$(".pwd").addClass("mdui-hidden");
    $$("#new").hide();
    $$("#history").hide();
});
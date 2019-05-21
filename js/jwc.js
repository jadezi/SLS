var $$ = mdui.JQ;

$$(".mdui-click-captured").on("click", function () {
    $$(this).addClass("mdui-list-item-active");
    $$(this).siblings().removeClass("mdui-list-item-active");
    $$(this).parent().parent().siblings().children().find(".mdui-click-captured").removeClass("mdui-list-item-active");

    var $isExist = $$(this).parent().is('.mdui-list-dense');
    var index = $$(this).index()
    if (!$isExist) {
        switch (index) {
            case 0:
                $$("#newsubmit").show();
                $$("#newsubmit").siblings().hide();
                break;
            case 1:
                $$("#historyvocation").show();
                $$("#historyvocation").siblings().hide();
                break;
            case 2:
                $$("#countvocation").show();
                $$("#countvocation").siblings().hide();
                break;
        }
    } else {
        switch (index) {
            case 0:
                $$("#bdqx").show();
                $$("#bdqx").siblings().hide();
                break;
            case 1:
                $$("#xgb").show();
                $$("#xgb").siblings().hide();
                break;
            case 2:
                $$("#jgb").show();
                $$("#jgb").siblings().hide();
                break;
        }
    }
});

$$(".open-btn").on("click",function(){
    $$("#historyvocation .mdui-card-content").removeClass("mdui-hidden");
    $$(this).parent().addClass("mdui-hidden");
});

$$("#historyvocation .mdui-card-actions .retract-btn").on("click",function(){
    $$("#historyvocation .mdui-card-content").addClass("mdui-hidden");
    $$(".open-btn").parent().removeClass("mdui-hidden");
});

$$(".retract-btn").css("-webkit-transform","rotate(180deg)");
$$(".retract-btn").css("transform","rotate(180deg)");
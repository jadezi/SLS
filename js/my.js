function refresh() {
    window.location.reload();
}
$(".main .year .list").each(function (e, target) {
    var $target = $(target),
        $ul = $target.find("ul");
    $target.height($ul.outerHeight()), $ul.css("position", "absolute");
    console.log($ul.outerHeight());
});
$(".main .year>h2>a").click(function (e) {
    e.preventDefault();
    $(this).parents(".year").toggleClass("close");
});

$(".mdui-panel-item").click(function(){
    var num=$(".mdui-panel").find(".mdui-panel-item-open").length;
    console.log(num);
});
$(".main .year .list")
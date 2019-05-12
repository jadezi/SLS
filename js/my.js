function refresh() {
    window.location.reload();
}
$(".main .year>h2>a").click(function (e) {
    e.preventDefault();
    $(this).parents(".year").toggleClass("close");
});

$(".mdui-panel-item").click(function(){
    var num=$(".mdui-panel").find(".mdui-panel-item-open").length;
});
$(".main .year .list")
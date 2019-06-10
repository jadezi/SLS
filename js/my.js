
var $$ = mdui.JQ;
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

function loadProcess(content) {
    $("#progress").append(content);
}

function loadMessage(content) {
    $("#message").append(content);
}
//function tix() {
function tips() {
    $$.throttle(function () {
      mdui.alert('已提醒老师尽快审核','提示');
}, 1000)
}

//$$.throttle(function () {
//    $$("#message").children(".tips").on("click", function () {
//        mdui.alert("已提醒老师尽快审核", "提示");
//    })
//}, 1000)

mdui.JQ(document).ready(function () {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "my.aspx/GetProcess",
        data: "{}",
        dataType: "json",
        success: function (data) {
            console.log(data.d.length);
            for (var i = 0; i < data.d.length; i++) {
                loadProcess(data.d[i]);
            }
        }
    });
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "my.aspx/GetMessage",
        data: "{}",
        dataType: "json",
        success: function (data) {
            console.log(data.d.length);
            for (var i = 0; i < data.d.length; i++) {
                loadMessage(data.d[i]);
            }
        }
    });
})


var $$=mdui.JQ;
function resetbtn(){
    $$("input[type='text'],input[type='password']").val("");
    $$("mdui-card-content").removeClass("mdui-textfield-focus,mdui-textfield-invalid-html5");
}
$('.mdui-click-captured').click(function () {
    $(this).addClass("mdui-list-item-active");
    $(this).siblings().removeClass("mdui-list-item-active");

})
//后期通过session 修改列表
var url=document.referrer
var index=url.lastIndexOf("/");
url=url.substr(index+1,url.length);
if(url=="teacher.html"){
    $$(".mdui-list").children(".classguidance").remove();
}

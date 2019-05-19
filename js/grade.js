var $$ = mdui.JQ;

var progress=10;//进度条初始化10%
var inputfocus=false;//输入框获得焦点前状态
var inputblur=false;//输入框失去焦点状态
var startclassIndex=0;//请假日期开始被选中序号
var endclassIndex=0;//请假日期结束被选中序号

$$(".mdui-card .mdui-card-content .mdui-textfield-input").on("focus",function(e){
    var startdate=$(this).val();
    if(startdate!=""){
        inputfocus=true;
    }else{
        inputfocus=false;
    }
});
$$(".mdui-card .mdui-card-content .mdui-textfield-input").on("blur",function (e) { 
    var startdate=$(this).val();
    if(startdate!=""){
        inputblur=true;
    }else{
        inputblur=false;
    }
    if(inputblur!=inputfocus){
        if(inputblur==true){
            progress+=10;
        }if(inputblur==false){
            progress+=-10;
        }
        loadProgress2(50);
    }
});


//提交请假单
$$(".btn-next").on("click",function(){
    $$(".card-content").addClass("mdui-hidden");
    $$(".card-sure").removeClass("mdui-hidden");
});

$$(".btn-over").on("click",function(){
    $$(".card-sure").addClass("mdui-hidden");
    $$(".card-content").removeClass("mdui-hidden");
});



function jurisdiction() {
    mdui.prompt('请输入班级管理密码', '权限确认',
        function (value) {
            if (value == 123) {
                $$(".card-content").removeClass("mdui-hidden");
            } else {
                mdui.alert('权限不足！');
            }
        },
        function (value) {

        }
    );
};

function loadProgress2(e){
    var percent='%';
    if(progress>=10){
        $$(".mdui-progress-determinate").css("width",progress+percent);
        $$(".progress-text").text(progress+percent);
    }
    btnInit2(e);   
}

function btnInit2(e) {
    if(progress==e){
        $$(".mdui-card-actions button").removeAttr("disabled");
    }else{
        $$(".mdui-card-actions button").attr("disabled"); 
    }
}
//权限认证
// function access() {
//     var access = $$(".mdui-container-fluid").find(".mdui-hidden");
//     if (access.length != 0) {
//         jurisdiction();
//     }
// }

// access();

function getFileName(){
    var filename=$$(".uploadfile").val();
    var index=filename.lastIndexOf("\\");
    filename=filename.substr(index+1,filename.length);
    $$("#filename").text(filename);
}


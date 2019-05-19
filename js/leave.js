var $$=mdui.JQ;//mdui框架

var progress=10;//进度条初始化10%
var inputfocus=false;//输入框获得焦点前状态
var inputblur=false;//输入框失去焦点状态
var startclassIndex=0;//请假日期开始被选中序号
var endclassIndex=0;//请假日期结束被选中序号
var radioinit=false;//单选初始状态
var endselect=new mdui.Select("#endclass");//下拉菜单初始化

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
        loadProgress(90);
    }
});


$$("#startclass").on("closed.mdui.select",function(){
    selectedIndex=$("#startclass option:selected").val();
    var endclassSelected=$("#endclass option:selected").val();
    if(selectedIndex==0){
        $$("#endclass").children().remove();
        var content='<option value="0" >请选择</option><option value="1">第一节课</option><option value="2">第二节课</option><option value="3">第三节课</option><option value="4">第四节课</option><option value="5">第五节课</option><option value="6">第六节课</option><option value="7">第七节课</option><option value="8">第八节课</option><option value="9">第九节课</option><option value="10">第十节课</option><option value="11">第十一节课</option><option value="12">第十二节课</option>';
        $$("#endclass").append(content);
        endselect.handleUpdate();
    }else{
        for(var i=0;i<selectedIndex;i++){
            $("#endclass option[value='"+i+"']").remove();
        }
        endselect.handleUpdate();
    }
    if(selectedIndex!=0){
        progress+=10;
    }else{
        progress+=-10;
    }
    loadProgress(90);
});

$$("#endclass").on("closed.mdui.select",function(){
    var endclassSelected=$("#endclass option:selected").val();
    console.log(endclassSelected);
    if(endclassSelected!=0){
        progress+=10;
    }else{
        progress+=-10;
    }
    loadProgress(90);
});

$$("input[type='radio']").on("click",function(){
    if(!radioinit){
        progress+=10;
        loadProgress(90);
    }
    radioinit=true;
})

//提交请假单
$$(".btn-next").on("click",function(){
    $$(".card-content").addClass("mdui-hidden");
    $$(".card-sure").removeClass("mdui-hidden");
});

$$(".btn-over").on("click",function(){
    $$(".card-sure").addClass("mdui-hidden");
    $$(".card-content").removeClass("mdui-hidden");
});



function loadProgress(e){
    var percent='%';
    if(progress>=10){
        $$(".mdui-progress-determinate").css("width",progress+percent);
        $$(".progress-text").text(progress+percent);
    }
    btnInit(e);   
}

function btnInit(e) {
    if(progress==e){
        $$(".mdui-card-actions button").removeAttr("disabled");
    }else{
        $$(".mdui-card-actions button").attr("disabled"); 
    }
}
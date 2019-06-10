var $$ = mdui.JQ; //mdui框架

var progress = 20; //进度条初始化20%
var inputfocus = false; //输入框获得焦点前状态
var inputblur = false; //输入框失去焦点状态
var selectedIndex = 0; //请假日期开始被选中序号
var startSelectedFlag = false;
var endSelectedFlag = false;
var endclassIndex = 0; //请假日期结束被选中序号
var radioinit = false; //单选初始状态
var endselect = new mdui.Select("#endclass"); //下拉菜单初始化
//var startselect = new mdui.Select("#startclass"); //下拉菜单初始化

$$(".mdui-card .mdui-card-content .mdui-textfield-input").on("focus", function (e) {
    var startdate = $(this).val();
    if (startdate != "") {
        inputfocus = true;
    } else {
        inputfocus = false;
    }
});
$$(".mdui-card .mdui-card-content .mdui-textfield-input").on("blur", function (e) {
    var startdate = $(this).val();
    if (startdate != "") {
        inputblur = true;
    } else {
        inputblur = false;
    }
    if (inputblur != inputfocus) {
        if (inputblur == true) {
            progress += 10;
        }
        if (inputblur == false) {
            progress += -10;
        }
        loadProgress();
    }
});


$$("#startclass").on("closed.mdui.select", function () {
    selectedIndex = $("#startclass option:selected").val();
    endclassSelected = $("#endclass option:selected").val();
    if (selectedIndex == 0) {
        $$("#endclass").children().remove();
        var content = '<option value="0" >请选择</option><option value="1">第一节课</option><option value="2">第二节课</option><option value="3">第三节课</option><option value="4">第四节课</option><option value="5">第五节课</option><option value="6">第六节课</option><option value="7">第七节课</option><option value="8">第八节课</option><option value="9">第九节课</option><option value="10">第十节课</option><option value="11">第十一节课</option><option value="12">第十二节课</option>';
        $$("#endclass").append(content);
        endselect.handleUpdate();
        startSelectedFlag = false;
    } else {
        for (var i = 0; i < selectedIndex; i++) {
            $("#endclass option[value='" + i + "']").remove();
        }
        endselect.handleUpdate();
    }
    if (selectedIndex != 0 && !startSelectedFlag) {
        progress += 20;
        startSelectedFlag = true;
    } else if(selectedIndex==0){
        progress += -20;
        startSelectedFlag = false;
    }
    loadProgress();
    console.log(getLeaveType());
    
});

//单选按钮被选中触发进度条更新
$$("input[type='radio']").on("click", function () {
    if (!radioinit) {
        progress += 10;
        loadProgress();
    }
    radioinit = true;
})

//提交请假单
$$(".btn-next").on("click", function () {
    $$(".card-content").addClass("mdui-hidden");
    $$(".card-sure").removeClass("mdui-hidden");
    console.log(getSwitchValue());
});

$$(".btn-over").on("click", function () {
    $$(".card-sure").addClass("mdui-hidden");
    $$(".card-content").removeClass("mdui-hidden");
    $$("input,textarea").val("");
    $$(".btn-next").attr("disabled","disabled");
    progress=40;
    $$(".mdui-progress-determinate").css("width", "40%");
    $$(".progress-text").text("40%");
});


//进度条
function loadProgress() {
    var percent = '%';
    if (progress >= 20) {
        $$(".mdui-progress-determinate").css("width", progress + percent);
        $$(".progress-text").text(progress + percent);
    }
    btnInit();
}

//按钮状态初始化
function btnInit() {
    if (progress == 100) {
        $$(".mdui-card-actions button").removeAttr("disabled");
    } else {
        $$(".mdui-card-actions button").attr("disabled");
    }
}

//获取请假开始时间
function getLeaveStartTime(){
    return $$("input[name='startdate']").val();
}

//获取请假结束时间
function getLeaveEndTime(){
    return $$("input[name='enddate']").val();
}

//获得请假类型
function getLeaveType(){
    return $$("input[name='vacation']:checked").val();
}

//获取请假理由
function getLeaveReason(){
    return $$("input[name='stureason']").val();
}

//获取父母手机号
function getParentTel(){
    return $$("input[name='urgenttel']").val();
}

//获取自己手机号
function getSelfTel(){
    return $$("input[name='selftel']").val();
}

//获取请假所影响课程startclass
function getStartClass() {
    return $$("#startclass").val();
}

//获取请假所影响课程endclass
function getEndClass() {
    return $$("#endclass").val();
}

//获取通知开关值
function getSwitchValue(){
    var str='';
    $$("input[type='checkbox']:checked").each(function(){
        str+=$$(this).text()+",";
    });
    return str;
}

//获取请假开始日期
function getLeaveStartDate(){
    return $$("input[name='startdate']").val();
}

//获取返校日期
function getLeaveEndDate(){
    return $$("input[name='enddate']").val()
}

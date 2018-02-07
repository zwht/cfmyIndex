function modifyItem(){
    if(document.getElementById("itemName").value==""){
        alert("物料名称不能为空！");
        document.getElementById("itemName").focus();
        return;
    }
    with(document.getElementById("itemForm")){
        method="post";
        action="add";
        submit();
    }
}
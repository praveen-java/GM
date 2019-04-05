function addTabs(){
    console.log("In Add Tabs Function....");
    for( var i =0;i<tab_array.length;i++){
        var aTab = `<a class = "tabsIn" id = "${tab_array[i]}">${tabN_Array[i]}</a>`;
        console.log(aTab);
        var tabsList =  $("<span></span>").append(aTab);
        $('#tabsId').append(tabsList);
    }
}
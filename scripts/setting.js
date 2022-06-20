'use strict'

var inputPage = $("#input-page-size");
var inputCategory = $("#input-category");
var btnSetting = $("#btn-submit")

class Setting {
    constructor (pageSize, category) {
        this.pageSize = pageSize;
        this.category = category;
    }
}

btnSetting.click(function() {
    let setting = new Setting();
    setting.pageSize = inputPage.val();
    setting.category = inputCategory.val();
    setToLocalStorage("setting", setting);
    inputPage.val("");
    inputCategory.val("general");
});


function setToLocalStorage(value, data) {
    localStorage.setItem(value, JSON.stringify(data));
}



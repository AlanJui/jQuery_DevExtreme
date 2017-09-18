DevExpress.viz.currentTheme("generic.light");
$(function(){
    $("#gridContainer").dxDataGrid({
        dataSource: "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/data/customers.json",
        columns: ["CompanyName", "City", "State", "Phone", "Fax"]
    });
});
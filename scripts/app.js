$(function(){
    $("#gridContainer").dxDataGrid({
        dataSource: "http://192.168.66.11:5000/api/Customers",
        columns: ["companyName", "contactName", "contactTitle", "address", "city", "region", "country"]
    });
});
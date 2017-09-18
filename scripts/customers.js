const SERVICE_URL = 'http://127.0.0.1:5000/api/Customers';

var myStore = new DevExpress.data.CustomStore({
    load: function(loadOptions) {
        return $.getJSON(SERVICE_URL);
    },
 
    byKey: function(key) {
        return $.getJSON(SERVICE_URL + "/" + encodeURIComponent(key));
    },
 
    insert: function(values) {
        return $.post(SERVICE_URL, values);
    },
 
    update: function(key, values) {
        return $.ajax({
            url: SERVICE_URL + "/" + encodeURIComponent(key),
            method: "PUT",
            data: values
        });
    },
 
    remove: function(key) {
        return $.ajax({
            url: SERVICE_URL + "/" + encodeURIComponent(key),
            method: "DELETE",
        });
    }
});
 
var customers = new DevExpress.data.DataSource({
    store: myStore
});

$(function(){
    $("#gridContainer").dxDataGrid({
        dataSource: customers,
        columns: ['companyName', 'city', 'state', 'phone', 'fax']
    });
 });
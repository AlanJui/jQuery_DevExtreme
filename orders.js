$(function() {
    $("#grid").dxDataGrid({

        dataSource: DevExpress.data.AspNet.createStore({
            key: "orderID",
            loadUrl: "http://127.0.0.1:5000/api/orders",
            updateUrl: "http://127.0.0.1:5000/api/update-order",
            insertUrl: "http://127.0.0.1:5000/api/insert-order",
            deleteUrl: "http://127.0.0.1:5000/api/delete-order",

            onBeforeSend: function(operation, ajaxSettings) {
                // operation - any of "load", "update", "insert", "delete"
                // ajaxSettings - http://api.jquery.com/jquery.ajax/
            }
        }),

        columns: [
            {
                dataField: "customerID",
                caption: "Customer",
                lookup: {
                    valueExpr: "value",
                    displayExpr: "text",
                    dataSource: DevExpress.data.AspNet.createStore({
                        key: "value",
                        loadUrl: "http://127.0.0.1:5000/api/customers-lookup"
                    })
                }
            },
            {
                dataField: "orderDate",
                dataType: "date",
                headerFilter: {
                    groupInterval: "quarter"
                }
            },
            {
                dataField: "freight",
                headerFilter: {
                    groupInterval: 100
                }
            },
            "shipCountry",
            "shipRegion",
            {
                dataField: "shipVia",
                lookup: {
                    valueExpr: "value",
                    displayExpr: "text",
                    dataSource: DevExpress.data.AspNet.createStore({
                        key: "value",
                        loadUrl: "http://127.0.0.1:5000/api/shippers-lookup"
                    })
                }
            }
        ],

        groupPanel: { visible: true },
        filterRow: { visible: true },
        headerFilter: { visible: true },
        editing: {
            allowUpdating: true,
            allowAdding: true,
            allowDeleting: true
        },
        remoteOperations: true,
        grouping: {
            autoExpandAll: false
        },
        summary: {
            totalItems: [
                { column: "freight", summaryType: "sum" }
            ],
            groupItems: [
                { column: "freight", summaryType: "sum" },
                { summaryType: "count" }
            ]
        },

        masterDetail: {
            enabled: true,
            template: function(container, options) {
                $("<div>")
                    .dxDataGrid({
                        dataSource: DevExpress.data.AspNet.createStore({
                            loadUrl: "http://127.0.0.1:5000/api/order-details",
                            loadParams: { orderID: options.data.orderID }
                        })
                    })
                    .appendTo(container);
            }
        }
    });
});
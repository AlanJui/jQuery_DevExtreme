$(function(){
    $("#gridContainer").dxDataGrid({
        dataSource: {
            store: {
                type: 'odata',
                url: 'http://services.odata.org/V4/Northwind/Northwind.svc/Categories',
                version: 4
            }
        },
        columns: ['CategoryID', 'CategoryName'],
        remoteOperations: {
            filtering: true,
            sorting: true,
            paging: true,
            grouping: true,
            summary: true
        },
        editing: {
          allowUpdating: true, 
          allowDeleting: true, 
          allowAdding: true
        }
    });
});


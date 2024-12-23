const editor = new DataTable.Editor({
    ajax: '../php/staff.php',
    fields: [
        {
            label: 'First name:',
            name: 'first_name'
        },
        {
            label: 'Last name:',
            name: 'last_name'
        },
        {
            label: 'Position:',
            name: 'position'
        },
        {
            label: 'Office:',
            name: 'office'
        },
        {
            label: 'Extension:',
            name: 'extn'
        },
        {
            label: 'Start date:',
            name: 'start_date',
            type: 'datetime'
        },
        {
            label: 'Salary:',
            name: 'salary'
        }
    ],
    table: '#example'
});
 
const table = new DataTable('#example', {
    ajax: '../php/staff.php',
    columns: [
        { data: 'first_name' },
        { data: 'last_name' },
        { data: 'position' },
        { data: 'office' },
        { data: 'start_date' },
        { data: 'salary', render: DataTable.render.number(null, null, 0, '$') },
        {
            data: null,
            defaultContent: '<i class="fa fa-pencil"/>',
            className: 'row-edit dt-center',
            orderable: false
        },
        {
            data: null,
            defaultContent: '<i class="fa fa-trash"/>',
            className: 'row-remove dt-center',
            orderable: false
        }
    ],
    layout: {
        topStart: {
            buttons: [
                {
                    extend: 'createInline',
                    editor: editor,
                    formOptions: {
                        submitTrigger: -2,
                        submitHtml: '<i class="fa fa-play"/>'
                    }
                }
            ]
        }
    },
    select: {
        style: 'os',
        selector: 'td:first-child'
    }
});
 
// Activate an inline edit on click of a table cell
table.on('click', 'tbody td.row-edit', function (e) {
    editor.inline(table.cells(this.parentNode, '*').nodes(), {
        submitTrigger: -2,
        submitHtml: '<i class="fa fa-play"/>'
    });
});
 
// Delete row
table.on('click', 'tbody td.row-remove', function (e) {
    editor.remove(this.parentNode, {
        title: 'Delete record',
        message: 'Are you sure you wish to delete this record?',
        buttons: 'Delete'
    });
});
var rows = [
  [
    parseInt((Math.random()*9)),
    (Math.random()*9).toString().slice(0,5),
    '<button id="mnb">DEL</button>',
    '<p>asdasddas</p>',
    (Math.random()*9).toString().slice(0,5),
    (Math.random()*9).toString().slice(0,5),
    (Math.random()*9).toString().slice(0,5)
  ],
  [
    parseInt((Math.random()*9)),
    (Math.random()*9).toString().slice(0,5),
    (Math.random()*9).toString().slice(0,5),
    (Math.random()*9).toString().slice(0,5),
    (Math.random()*9).toString().slice(0,5),
    (Math.random()*9).toString().slice(0,5),
    '<button class="delBtn">DEL</button>'
  ],
  [
    parseInt((Math.random()*9)),
    (Math.random()*9).toString().slice(0,5),
    (Math.random()*9).toString().slice(0,5),
    (Math.random()*9).toString().slice(0,5),
    (Math.random()*9).toString().slice(0,5),
    (Math.random()*9).toString().slice(0,5),
    '<button class="delBtn">DEL</button>'
  ]
];

        $('#tableContainer').useDataTable({
          columns: [
            {title: 'ID'},
            {title: 'NOMBRE'},
            {title: 'USERNAME'},
            {title: 'EMAIL'},
            {title: 'WEBSITE'},
            {title: 'PHONE'}
        ],
        rowGroup: true,
          data: rows,
          info: true,
          initComplete: function(){

          },
          use: {
            selection: {
              enabled: true,
              callback: function(row, data, index){
                $(this).toggleClass('action')
              }
            }
          }
        })

        // $('#tableContainer').useDataTable('addRow', ['asd', 'asd', 'asd', 'asd', 'asd', 'asd'])
        // $('#tableContainer').useDataTable('delRow', '2')
        // var allDataResult = $('#tableContainer').useDataTable('data')
        // console.log(allDataResult)
        // var dataResult = $('#tableContainer').useDataTable('data', '1')
        // console.log(dataResult)
        // var myTable = $('#tableContainer').DataTable();
 
        // $('#tableContainer').on( 'click', 'tbody td', function () {
        //     myTable.cell( this ).edit( 'bubble' );
        // } );
        /* Init DataTables */

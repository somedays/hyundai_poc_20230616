document.write('<!-- Modal Large -->');
document.write('<div class="modal fade" id="nik-search-modal" tabindex="-1" role="dialog" aria-hidden="true">');
document.write('    <div class="modal-dialog modal-lg" role="document">');
document.write('        <div class="modal-content">');
document.write('            <div class="modal-header">');
document.write('                <h5 class="modal-title">NIK Search </h5>');
document.write('                <button type="button" class="close" data-dismiss="modal" aria-label="Close">');
document.write('                    <span aria-hidden="true"><i class="fal fa-times"></i></span>');
document.write('                </button>');
document.write('            </div>');
document.write('            <div class="modal-body">');
document.write('                ');
document.write('                <div class="col-xl-12">');
document.write('                    <div class="panel">');
document.write('                        <div class="panel-hdr">');
document.write('                            <h2>');
document.write('                                Requester <span class="fw-300"><i> </i></span>');
document.write('                            </h2>');
document.write('                        </div>');
document.write('                        <div class="panel-container show">');
document.write('                            <div class="panel-content p-0">');
document.write('                                <form class="needs-validation" novalidate>');
document.write('                                    <div class="panel-content">');
document.write('                                        <div class="form-row">');
document.write('                                            <div class="col-md-4 mb-3">');
document.write('                                                <label class="form-label" for="simpleinput">NIK</label>');
document.write('                                                <input type="text" id="simpleinput" class="form-control" placeholder="62200147">');
document.write('                                            </div>');
document.write('                                            <div class="col-md-4 mb-3">');
document.write('                                                <label class="form-label" for="simpleinput">Name</label>');
document.write('                                                <input type="text" id="simpleinput" class="form-control" placeholder="Daniel">');
document.write('                                            </div>');
document.write('                                        </div>');
document.write('                                        <div class="form-row">');
document.write('                                            <div class="col-md-12 ">');
document.write('                                                <table id="nik-search-table" class="table table-bordered table-hover table-striped w-100">');
document.write('                                                    <thead>');
document.write('                                                        <tr>');
document.write('                                                            <th>NO</th>');
document.write('                                                            <th>ID Number</th>');
document.write('                                                            <th>Name</th>');
document.write('                                                            <th>Position</th>');
document.write('                                                            <th>Dept. Name</th>');
document.write('                                                            <th>Group Name</th>');
document.write('                                                        </tr>');
document.write('                                                    </thead>');
document.write('                                                    <tbody>');
document.write('                                                        <tr>');
document.write('                                                            <td>1</td>');
document.write('                                                            <td>62200147</td>');
document.write('                                                            <td>Daniel</td>');
document.write('                                                            <td>Sr. Spec</td>');
document.write('                                                            <td>BS</td>');
document.write('                                                            <td>Business Administrator</td>');
document.write('                                                        </tr>');
document.write('                                                        <tr>');
document.write('                                                            <td>2</td>');
document.write('                                                            <td>62200147</td>');
document.write('                                                            <td>Daniel</td>');
document.write('                                                            <td>Sr. Spec</td>');
document.write('                                                            <td>BS</td>');
document.write('                                                            <td>Business Administrator</td>');
document.write('                                                        </tr>');
document.write('                                                        <tr>');
document.write('                                                            <td>3</td>');
document.write('                                                            <td>62200147</td>');
document.write('                                                            <td>Daniel</td>');
document.write('                                                            <td>Sr. Spec</td>');
document.write('                                                            <td>BS</td>');
document.write('                                                            <td>Business Administrator</td>');
document.write('                                                        </tr>');
document.write('                                                       ');
document.write('                                                        ');
document.write('                                                    </tbody>');
document.write('                                                    ');
document.write('                                                </table>');
document.write('                                                <!-- datatable end -->');
document.write('                                            </div>');
document.write('                                        </div>');
document.write('                                    </div>');
document.write('                                </form>');
document.write('                            </div>');
document.write('                        </div>');
document.write('                    </div>');
document.write('                </div>');
document.write('            </div>');
document.write('            <!-- <div class="modal-footer">');
document.write('                <button type="button" class="btn btn-secondary" data-dismiss="modal"> <i class="fal fa-times mr-1"></i> Close</button>');
document.write('                <button type="button" class="btn btn-success" id="btn_save"> <i class="fal fa-save mr-1"></i> Save </button>');
document.write('            </div> -->');
document.write('        </div>');
document.write('    </div>');
document.write('</div>');



$(document).ready(function(){

    $('#nik-search-table').dataTable({
        responsive: true,
        dom:
            /*  --- Layout Structure 
                --- Options
                l   -   length changing input control
                f   -   filtering input
                t   -   The table!
                i   -   Table information summary
                p   -   pagination control
                r   -   processing display element
                B   -   buttons
                R   -   ColReorder
                S   -   Select

                --- Markup
                < and >             - div element
                <"class" and >      - div with a class
                <"#id" and >        - div with an ID
                <"#id.class" and >  - div with an ID and a class

                --- Further reading
                https://datatables.net/reference/option/dom
                --------------------------------------
             */
            "<'row mb-3'<'col-sm-12 col-md-6 d-flex align-items-center justify-content-start'><'col-sm-12 col-md-6 d-flex align-items-center justify-content-end'B>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",


        buttons: [
            // {
            //     extend: 'colvis',
            //     text: 'Column Visibility',
            //     titleAttr: 'Col visibility',
            //     className: 'btn-outline-default'
            // },
            // {
            //     extend: 'excelHtml5',
            //     text: 'Excel',
            //     titleAttr: 'Generate CSV',
            //     className: 'btn-outline-default'
            // },
            // {
            //     extend: 'copyHtml5',
            //     text: 'Copy',
            //     titleAttr: 'Copy to clipboard',
            //     className: 'btn-outline-default'
            // },
            // {
            //     extend: 'print',
            //     text: 'Print',
            //     titleAttr: 'Print Table',
            //     className: 'btn-outline-default'
            // },
            {
                text: '<i class="fal fa-search mr-1"></i> Search',
                name: 'search',
                className: 'btn-primary btn-sm mr-1',
                action: function ( e, dt, node, config ) {
                    
                    alert('search user nik!');

                }
            }

        ]
    });


    // 더블클릭시 edit modal 오픈
    $('#nik-search-table').on('dblclick', 'tr', function () {
        var id = $('td', this).eq(1).text();
        var name = $('td', this).eq(2).text();
        alert('id : ' + id  + ' name : ' + name);
        
        $('#nik-search-modal').modal('hide');

        $('#default-example-modal-lg').modal('show');

    });

    $('#btn_nik_search').on('click', function(){

        $('#default-example-modal-lg').modal('hide');

        $('#nik-search-modal').modal('show');
        
        setTimeout(function(){
            $('#nik-search-table').DataTable().columns.adjust().draw();
        },300);
        
    });

});


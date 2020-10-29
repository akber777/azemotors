$(document).ready(function () {

    let allTable = $('table');


    $.each(allTable, function (key, item) {

        item.classList.add('table')
        item.classList.add('table-dark')


    })


    let dataTable = []


    let myTable = $('.information__table table')

    $.each(myTable, function (key, table) {

        let tabHeight = table.clientHeight;

        dataTable.push(tabHeight);

    })


    let mathMAxTable = Math.max(...dataTable)

    myTable.css({
        'min-height': mathMAxTable
    })


    $(window).keydown(function (e) {

        if (e.ctrlKey && e.keyCode == 80) {

            $('.information__search').hide();

            $('.header__title').hide();

            $('.header__hideTitle').show();

        }

    })


})
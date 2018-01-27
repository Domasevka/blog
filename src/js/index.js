"use strict";
$(document).ready(function () {

//sidebar fix
    $(function () {
        var sidebar = $('.catalog__toolbar');
        var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));

        $(window).scroll(function (event) {
            var y = $(this).scrollTop();
            if (y >= top) {
                sidebar.addClass('fixed');
            } else {
                sidebar.removeClass('fixed');
            }
        });
    });


// pagination
    $(function () {
        window.pagObj = $('.js-pagination').twbsPagination({
            totalPages: 2,
            visiblePages: 0,
            first: '',
            prev: 'Prev',
            next: 'Next',
            last: false,
            onPageClick: function (event, page) {
                console.info(page + ' (from options)');
            }
        }).on('page', function (event, page) {
            console.info(page + ' (from event listening)');
        });
    });
})


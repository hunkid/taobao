var main = {
    initEvent: function() {
        $('body').on('mouseenter', '.header1 .nav .nav-item', function() {
            if ($(this).find('.toggle')[0]) {
                $(this).css({ 'backgroundColor': '#fff' });
                $(this).find('.toggle').show();
            }
        });
        $('body').on('mouseleave', '.header1 .nav .nav-item', function() {
            if ($(this).find('.toggle')[0]) {
                $(this).css({ 'backgroundColor': '#f5f5f5' });
                $(this).find('.toggle').hide();
            }
        });
        $('body').on('click', '.search-item li', function() {
            $(this).parent().find('li').removeClass('active');
            $(this).addClass('active');
            $('.searchwrap').removeClass('active-tmall');
        });
        $('body').on('click', '.search-item-tmall', function() {
            $('.searchwrap').addClass('active-tmall');
            $('.search-placeholder').find('span').addClass('hide');
            $('.placeholder-tmall').removeClass('hide');
            $('.search-icon').addClass('hide');
        });
        $('body').on('click', '.search-item-dotery', function() {
            $('.searchwrap').addClass('active-item');
            $('.search-placeholder').find('span').addClass('hide');
            $('.placeholder-dotery').removeClass('hide');
            $('.search-icon').removeClass('hide');
        });
        $('body').on('click', '.search-item-shop', function() {
            $('.searchwrap').addClass('active-shop');
            $('.search-placeholder').find('span').addClass('hide');
            $('.placeholder-shop').removeClass('hide');
            $('.search-icon').addClass('hide');
        });
        $('#myfavorite').hover(function() {
            /* Stuff to do when the mouse enters the element */
            $('#myfavorite .nav-icon').addClass('hover');
        }, function() {
            /* Stuff to do when the mouse leaves the element */
            $('#myfavorite .nav-icon').removeClass('hover');
        });
        $('#ser').focus(function() {
            $('.search-placeholder').hide();
        });
        $('#ser').blur(function() {
            $('.search-placeholder').show();
        });

        //左侧导航栏
        $('.nav-service .row').hover(function() {
            /* Stuff to do when the mouse enters the element */
            var num = $(this).attr('class').split('row-')[1];
            var navClsName = 'navpl-'+num;
            $('.'+navClsName).removeClass('hide');
        }, function() {
            /* Stuff to do when the mouse leaves the element */
            var num = $(this).attr('class').split('row-')[1];
            var navClsName = 'navpl-'+num;
            $('.'+navClsName).addClass('hide');
        });
        $('.nav-panel').hover(function() {
            /* Stuff to do when the mouse enters the element */
            $(this).removeClass('hide');
        }, function() {
            /* Stuff to do when the mouse leaves the element */
            $(this).addClass('hide');
        });

    }
};

$(function() {
    main.initEvent();
});

define(function(require, exports, module) {
    var eventIn = {
        initEvent: function() {
            $('body').on('mouseenter', '.header1 .nav .nav-item', function() {
                if ($(this).find('.toggle')[0]) {
                    $(this).css({ 'backgroundColor': '#fff' });
                    $(this).find('.toggle').show();
                }
                return false;
            });
            $('body').on('mouseleave', '.header1 .nav .nav-item', function() {
                if ($(this).find('.toggle')[0]) {
                    $(this).css({ 'backgroundColor': '#f5f5f5' });
                    $(this).find('.toggle').hide();
                }
                return false;
            });
            $('body').on('click', '.search-item li', function() {
                $(this).parent().find('li').removeClass('active');
                $(this).addClass('active');
                $('.searchwrap').removeClass('active-tmall');
                return false;
            });
            $('body').on('click', '.search-item-tmall', function() {
                $('.searchwrap').addClass('active-tmall');
                $('.search-placeholder').find('span').addClass('hide');
                $('.placeholder-tmall').removeClass('hide');
                $('.search-icon').addClass('hide');
                return false;
            });
            $('body').on('click', '.search-item-dotery', function() {
                $('.searchwrap').addClass('active-item');
                $('.search-placeholder').find('span').addClass('hide');
                $('.placeholder-dotery').removeClass('hide');
                $('.search-icon').removeClass('hide');
                return false;
            });
            $('body').on('click', '.search-item-shop', function() {
                $('.searchwrap').addClass('active-shop');
                $('.search-placeholder').find('span').addClass('hide');
                $('.placeholder-shop').removeClass('hide');
                $('.search-icon').addClass('hide');
                return false;
            });
            $('#myfavorite').hover(function() {
                /* Stuff to do when the mouse enters the element */
                $('#myfavorite .nav-icon').addClass('hover');
                return false;
            }, function() {
                /* Stuff to do when the mouse leaves the element */
                $('#myfavorite .nav-icon').removeClass('hover');
                return false;
            });
            $('#ser').focus(function() {
                $('.search-placeholder').hide();
                return false;
            });
            $('#ser').blur(function() {
                $('.search-placeholder').show();
                return false;
            });

            //左侧导航栏
            $('.nav-service .row').hover(function() {
                /* Stuff to do when the mouse enters the element */
                var num = $(this).attr('class').split('row-')[1];
                var navClsName = 'navpl-' + num;
                $('.' + navClsName).removeClass('hide');
                return false;
            }, function() {
                /* Stuff to do when the mouse leaves the element */
                var num = $(this).attr('class').split('row-')[1];
                var navClsName = 'navpl-' + num;
                $('.' + navClsName).addClass('hide');
                return false;
            });
            $('.nav-panel').hover(function() {
                /* Stuff to do when the mouse enters the element */
                $(this).removeClass('hide');
            }, function() {
                /* Stuff to do when the mouse leaves the element */
                $(this).addClass('hide');
            });
            //轮播
            $('.adlunbo').hover(function() {
                $(this).find($('.turnLorR')).show();
                return false;
            }, function() {
                $(this).find($('.turnLorR')).hide();
                return false;
            });
            $('.news .nav li').hoverDelay({
                hoverDuring: 800,
                hoverEvent: function() {
                    $(this).siblings().removeClass('select');
                    $(this).addClass('select');
                    var index = $(this).index();
                    $('.newsshow').find('ul').addClass('hide');
                    $('.newsshow').find('ul:eq(' + index + ')').removeClass('hide');
                    return false;
                }
            });
            $('body').on('mouseenter', '.multiplay .firstline', function() {
                $(this).siblings().removeClass('select');
                $(this).addClass('select');
                var index = $(this).index();
                $('.flwrap').hide();
                $('.multi-' + index).show();
                return false;
            });
            $('body').on('click', '.close', function() {
                var target = $(this).attr('data-target');
                $('.' + target).hide();
                return false;
            });
            $('body').on('click', '.flwrap .close', function() {
                $('.firstline').removeClass('select');
            });
            $('#bill li').hover(function() {
                $(this).addClass('selecting');
            }, function() {
                $(this).removeClass('selecting');
            });
            $('body').on('click', '#bill li', function() {
                $('#bill').hide();
                $('#payacount').val($(this).find('em').text() + '元');
                $(this).siblings().removeClass('selected');
                $(this).addClass('selected');
                return false;
            });
            $('body').on('click', '.account', function() {
                $('#bill').show();
                return false;
            });
        }
    };
    module.exports = eventIn;
});

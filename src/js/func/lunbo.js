// define(function(require, exports, module) {
require(['jqextend']); //requireJS好像只能有一个入口，所以这里就没办法用require了？
var lunboSetting = {
    sec: 3000,
    timerAd1: null,
    timerAd2: null
};

/**
 * 展示小圆点图标，和对应轮播图
 * @{jQuery} $ad: 轮播容器jQuery对象
 * @return null
 */
function showSelect($ad) {
    var showIndex = $ad.find('.lunbo-nav').find('.select').index();
    var lenOff = -showIndex * 520 + 'px';
    $ad.find('.ad-item').css('left', lenOff);
}
//返回下一个圆点的index，不改变任何class
function navSlide($ad, rFlag) {
    var navSum = $ad.find('.lunbo-nav li').length;
    var showIndex = $ad.find('.lunbo-nav .select').index();
    var nextIndex;
    if (rFlag) {
        nextIndex = showIndex + 1 === navSum ? 0 : showIndex + 1;
    } else {
        nextIndex = showIndex - 1 === -1 ? navSum - 1 : showIndex - 1;
    }
    return nextIndex;
}

function run($ad) {
    var timer = setInterval(function() {
        var nextIndex = navSlide($ad, true);
        toggleSelect($ad, nextIndex);
        showSelect($ad);
    }, lunboSetting.sec);
    if ($ad.hasClass('ad1')) {
        lunboSetting.timerAd1 = timer;
    } else if ($ad.hasClass('ad2')) {
        lunboSetting.timerAd2 = timer;
    }
}
//将nextIndex的圆点设置上select
function toggleSelect($ad, nextIndex) {
    $ad.find('.lunbo-nav').find('li').delay(lunboSetting.sec).removeClass('select');
    $ad.find('.lunbo-nav').find('li:eq(' + nextIndex + ')').addClass('select');
}

var lunboEvent = {
    initEvent: function() {
        $('body').on('click', '.turnLorR .left', function() {
            var adIndex = $(this).parents('.adlunbo').hasClass('ad1') === true ? 1 : 2;
            var $ad = adIndex === 1 ? $('.ad1') : $('.ad2');
            var timer = adIndex === 1 ? lunboSetting.timerAd1 : lunboSetting.timerAd2;
            clearInterval(timer);
            var nextIndex = navSlide($ad, false);
            toggleSelect($ad, nextIndex);
            showSelect($ad);
            run($ad);
        });
        $('body').on('click', '.turnLorR .right', function() {
            var adIndex = $(this).parents('.adlunbo').hasClass('ad1') === true ? 1 : 2;
            var $ad = adIndex === 1 ? $('.ad1') : $('.ad2');
            var timer = adIndex === 1 ? lunboSetting.timerAd1 : lunboSetting.timerAd2;
            clearInterval(timer);
            var nextIndex = navSlide($ad, true);
            toggleSelect($ad, nextIndex);
            showSelect($ad);
            run($ad);
        });
        $('body').on('click', '.lunbo-nav li', function() {
            var nextIndex = $(this).index();
            var $ad = $(this).parents('.adlunbo');
            var adIndex = $ad.hasClass('ad1') === true ? 1 : 2;
            var timer = adIndex === 1 ? lunboSetting.timerAd1 : lunboSetting.timerAd2;
            clearInterval(timer);
            toggleSelect($ad, nextIndex);
            showSelect($ad);
            run($ad);
        });
    }
};

$(function() {
    run($('.ad1'));
    setTimeout(function() { run($('.ad2')) }, 1800);
    lunboEvent.initEvent();
});
// });

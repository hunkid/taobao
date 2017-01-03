require.config({
    paths: {
        'jquery': 'lib/jquery-1.10.1.min',
        'eventIn': 'func/eventIn',
        'jqextend': 'func/jQextend',
        'lunbo': 'func/lunbo'
    }
});

$(function() {
    require(['jqextend', 'eventIn','lunbo'], function(jqextend, eventIn) {
        eventIn.initEvent();
    });
});

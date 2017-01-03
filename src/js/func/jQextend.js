define(function(require, exports, module) {
    $(function() {
        $.fn.hoverDelay = function(options) {
            var defaults = {
                hoverDuring: 200,
                outDuring: 1000,
                hoverEvent: function() {
                    $.noop();
                },
                outEvent: function() {
                    $.noop();
                }
            };
            var sets = $.extend(defaults, options || {});
            var hoverTimer, outTimer;
            return $(this).each(function() {
                $(this).hover(function() {
                    var that = this;
                    clearTimeout(outTimer);
                    // hoverTimer = setTimeout(sets.hoverEvent.apply(that), sets.hoverDuring);
                    hoverTimer = setTimeout(function() { sets.hoverEvent.apply(that) }, sets.hoverDuring);
                }, function() {
                    var that = this;
                    clearTimeout(hoverTimer);
                    outTimer = setTimeout(function() { sets.outEvent.apply(that) }, sets.outDuring);
                });
            });
        }
    });
});

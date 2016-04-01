/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-29 10:22:39
 * @version $Id$
 */

 ;(function ($, window, document, undefined) {
    var Beautifier = function(ele, opt) {
        this.$element = ele;
        this.defaults = {
            color: '#000',
            fontSize: '14px',
            textDecoration: 'none'
        };

        this.settings = $.extend({}, this.defaults, opt);
    }

    Beautifier.prototype = {
        beautify: function() {
            return this.$element.css({
                color: this.settings.color,
                fontSize: this.settings.fontSize,
                textDecoration: this.settings.textDecoration
            });
        }
    }

    $.fn.myPlugin = function(options) {

        // 创建Beautifier的实体
        var beautifier = new Beautifier(this, options);

        // 调用其方法
        return beautifier.beautify();
    }
 })(jQuery, window, document)
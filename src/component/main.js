import './mini-msg';
const MiniMsg = function(ops) {
    const defaults = {
        content: '',
        type: 'info',
        container: document.body,
        stay: 1,
        duration: 0.2,
        top: 16
    };

    $.extend(this, defaults, ops);
    this.init();
};

MiniMsg.prototype = {
    constructor: MiniMsg,
    classForType: {
        success: 'mini-msg-success',
        warning: 'mini-msg-warning',
        error: 'mini-msg-error',
        info: 'mini-msg-info'
    },
    iconForType: {
        success: 'glyphicon-ok-sign',
        warning: 'glyphicon-exclamation-sign',
        error: 'glyphicon-remove-circle',
        info: 'glyphicon-info-sign'
    },
    /**
     * 设置msgBox的样式来显示/隐藏它
     * @param {string} showOrHide "show" | "hide"
     */
    setBoxStyle: function(showOrHide) {
        const style = {};

        if (showOrHide === 'show') {
            style.transform = `translateY(${this.top}px)`;
            style.opacity = 1;
        } else {
            style.transform = `translateY(-100%)`;
            style.opacity = 0;
        }
        this.msgBox.css(style);
    },
    init: function() {
        //  生成一个dom，并插入到页面中
        //  根据type设置它的样式
        const html = `<div class="mini-msg" style="transition: transform ${this.duration}s, opacity ${this.duration}s;">
             <div class="mini-msg-notice">
            <div class="mini-msg-notice-content ${this.classForType[this.type]}">
            <i class="glyphicon ${this.iconForType[this.type]}"></i>
            ${this.content}
            </div>
            </div>
            </div>`;
        const $miniMsg = $(html);
        let styleForContainer;

        $(this.container).append($miniMsg);

        if (this.container !== document.body) {
            styleForContainer = {
                'position': 'relative',
                'overflow-x': 'hidden'
            };
        } else {
            styleForContainer = {
                'overflow-x': 'hidden'
            };
        }
        $(this.container).css(styleForContainer);
        this.msgBox = $miniMsg;
        this.setBoxStyle('hide');
    },
    show: function() {
        //显示
        this.setBoxStyle('show');
    },
    hide: function() {
        //隐藏
        this.setBoxStyle('hide');
    },
    destroy: function() {
        //销毁
        if (typeof this.timer !== 'undefined') {
            clearTimeout(this.timer);
        }
        this.msgBox.remove();
    },
    /**
     * 执行动画
     * @param {Function} callback 执行完之后的回调函数
     */
    animation: function(callback) {
        const that = this;

        that.timer = setTimeout(()=>{
            this.show();
            this.timer = setTimeout(()=>{
                this.hide();
                this.timer = setTimeout(()=>{
                    if (typeof callback === 'function') {
                        callback();
                    }
                    this.destroy();
                }, 1000 * this.duration);
            }, 1000 * this.duration + 1000 * this.stay);
        }, 1000 * this.duration);
        return this;
    }
};

MiniMsg.install = function(Vue) {
    Vue.prototype.$minimsg = function(options, callback) {
        return new MiniMsg(options).animation(() => {
            if (typeof callback === 'function') {
                callback();
            }
        });
    };
};
export default MiniMsg;

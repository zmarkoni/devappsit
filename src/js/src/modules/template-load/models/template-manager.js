// var widgetManager = function(opts) {
//
//
// };

function Widget (opts) {
    if(!(this instanceof Widget)) return new Widget(opts);
    this.element = document.createElement('div');
}

Widget.prototype.appendTo = function (target) {
    if (typeof target === 'string') target = document.querySelector(target);
    target.appendChild(this.element);
};

module.exports = Widget;
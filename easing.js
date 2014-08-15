/**-----------------------------------------------------------------------------
 *  Framer.easing.js
 *
 *  @url https://github.com/takuhito-h/framer.easing
 *  @license MIT License
 * ----------------------------------------------------------------------------*/
!(function(root){
    "use strict";

    Framer.easing = {
        easeInSine     : "bezier-curve(0.47, 0, 0.745, 0.715)",
        easeOutSine    : "bezier-curve(0.39, 0.575, 0.565, 1)",
        easeInOutSine  : "bezier-curve(0.39, 0.575, 0.565, 1)",
        
        easeInQuad     : "bezier-curve(0.55, 0.085, 0.68, 0.53)",
        easeOutQuad    : "bezier-curve(0.25, 0.46, 0.45, 0.94)",
        easeInOutQuad  : "bezier-curve(0.25, 0.46, 0.45, 0.94)",
        
        easeInCubic    : "bezier-curve(0.55, 0.055, 0.675, 0.19)",
        easeOutCubic   : "bezier-curve(0.215, 0.61, 0.355, 1)",
        easeInOutCubic : "bezier-curve(0.215, 0.61, 0.355, 1)",
        
        easeInQuart    : "bezier-curve(0.895, 0.03, 0.685, 0.22)",
        easeOutQuart   : "bezier-curve(0.165, 0.84, 0.44, 1)",
        easeInOutQuart : "bezier-curve(0.165, 0.84, 0.44, 1)",
        
        easeInQuint    : "bezier-curve(0.755, 0.05, 0.855, 0.06)",
        easeOutQuint   : "bezier-curve(0.23, 1, 0.32, 1)",
        easeInOutQuint : "bezier-curve(0.23, 1, 0.32, 1)",
        
        easeInExpo     : "bezier-curve(0.95, 0.05, 0.795, 0.035)",
        easeOutExpo    : "bezier-curve(0.19, 1, 0.22, 1)",
        easeInOutExpo  : "bezier-curve(0.19, 1, 0.22, 1)",
        
        easeInCirc     : "bezier-curve(0.6, 0.04, 0.98, 0.335)",
        easeOutCirc    : "bezier-curve(0.075, 0.82, 0.165, 1)",
        easeInOutCirc  : "bezier-curve(0.075, 0.82, 0.165, 1)",
        
        easeInBack     : "bezier-curve(0.6, -0.28, 0.735, 0.045)",
        easeOutBack    : "bezier-curve(0.175, 0.885, 0.32, 1.275)",
        easeInOutBack  : "bezier-curve(0.68, -0.55, 0.265, 1.55)",
        
        easeInOutFast  : "bezier-curve(1, 0, 0, 1)",
        
        easeSwiftOut   : "bezier-curve(0.55, 0, 0.1, 1)"
    };

})(this);
function roundFractional(n,r){return Math.round(n*Math.pow(10,r))/Math.pow(10,r)}function Rectangle(n,r){var t=Number(n),a=Number(r);this.area=function(){return roundFractional(t*a,10)},this.perimeter=function(){return roundFractional(2*t+2*a,4)}}
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.air = function() {
	this.initialize(img.air);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,291,247);


(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,900);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,900);


(lib.box = function() {
	this.initialize(img.box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,206);


(lib.cta_03 = function() {
	this.initialize(img.cta_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,849,311);


(lib.cursor = function() {
	this.initialize(img.cursor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,285);


(lib.explore = function() {
	this.initialize(img.explore);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,1440);


(lib.feel = function() {
	this.initialize(img.feel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.ghw = function() {
	this.initialize(img.ghw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,450,900);


(lib.royal_03 = function() {
	this.initialize(img.royal_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,326,337);


(lib.splash = function() {
	this.initialize(img.splash);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.the = function() {
	this.initialize(img.the);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.tropical_03 = function() {
	this.initialize(img.tropical_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,374,315);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.air();
	this.instance.setTransform(-155,-104,1.0206,1.0206);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,-104,297,252.1);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.explore();
	this.instance.setTransform(-160,-240,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,320,480);


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cursor();
	this.instance.setTransform(-34.15,-29.4,0.2065,0.2065);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.1,-29.4,68.30000000000001,58.9);


(lib.Tween18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cta_03();
	this.instance.setTransform(-85.2,-31.2,0.2007,0.2007);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.2,-31.2,170.4,62.4);


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.splash();
	this.instance.setTransform(-160,-240,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,300,600);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.the();
	this.instance.setTransform(-160,-240,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,300,600);


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.feel();
	this.instance.setTransform(-160,-240,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,300,600);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.royal_03();
	this.instance.setTransform(-55.65,-57.55,0.3415,0.3415);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-57.5,111.30000000000001,115.1);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tropical_03();
	this.instance.setTransform(-61.45,-51.75,0.3286,0.3286);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.4,-51.7,122.9,103.5);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bg1();
	this.instance.setTransform(-479,-240,0.6667,0.6667);

	this.instance_1 = new lib.bg2();
	this.instance_1.setTransform(-179,-240,0.6667,0.6667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-479,-240,600,600);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AD3DlIAKhLIBJAKIgLBLgAA5DLIApkoIg2gHIALhQIC1AZIgLBQIg3gIIgpEogAhOC9QgNAAgQgDQgigEgQgJQgQgKgHgSQgDgJgCgLQgCgLABgRQAAgSADgcIAJhHQAGgtAFgbQAFgcAEgRQAFgRAEgKIALgRQAFgIAIgFQAHgGAKgCQAJgDANABQANAAAQACQAhAFAQAJQAQAKAGASQAEAKACAKQABAKAAASQAAASgDAcIgJBHIgMBIQgDAcgFARQgEARgFAKQgFAKgFAHQgGAIgHAFQgHAFgKADQgIACgKAAIgEAAgAhMh8QgFABgCAFIgDAJIgEAQIgFAeIgHAzIgHAvIgDAeIgBAQIABAKQABAFADADQAEACAJABQAJABADgBQAEgBADgFIADgJIADgQIAFgeIAHgvIAHgzIADgeIACgQIgBgKQgBgFgDgDQgEgDgJgBIgFAAQgEAAgDABgAkGCeIg2jUIgDgBIgcDJIhCgJIA1l3IBGAKIAfCJIACAAIATiCIBCAJIg1F3gAEMB2IADgXIAEgeQACgUAKgLQAJgLAUgNIANgJQAFgDACgEQADgFACgHIADgTQACgSgCgHQgDgHgNgCQgOgCgFAHQgEAGgDARIgBAKIgBAHIg8gJQgBgHABgJIADgZQADgXAHgQQAGgPALgIQALgJARgBQARgCAXADQAaAEAPAHQAQAHAIANQAIAMACATQABATgEAaIgFAhIgGAXQgDAJgEAGQgFAHgGAGQgKAJgIAEQgJAFgIAGIgFAFIgDAJIgEAQIgEAcg");
	this.shape.setTransform(0.01,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.3,-23.9,82.69999999999999,47.9);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADCDoIATiOIgcj+IAAgCIBJAKIAEA8IACAkIABAVIABANIAEABIAEgNIAHgTIAMgiIAUg5IBIAKIgBACIhdDsIgVCPgAApDTIAWihIgtgGIgVChIhJgLIA2mFIBJAKIgVCXIAsAGIAViXIBJALIg2GFgAjkCtIAKjyIgGAAIg6DrIhmgPIAYmJIBIAKIgVEKIAFABIBEkEIBIAKIgFENIAFABIA1kHIBEAKIhVGBg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-24.3,77,48.7);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.box();
	this.instance.setTransform(-50,-61,0.5428,0.5428);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-61,108.6,111.9);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween24("synched",0);
	this.instance.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(5,136,297,252.10000000000002), null);


(lib.pop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// not_
	this.instance = new lib.Tween6("synched",0);
	this.instance.setTransform(297.2,144.7,0.2524,0.1866,9.2004);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(115).to({_off:false},0).wait(1).to({scaleX:0.2445,scaleY:0.1828,rotation:8.5626,x:290.951,y:143.6319},0).wait(1).to({scaleX:0.2365,scaleY:0.179,rotation:7.9118,x:284.5744,y:142.542},0).wait(1).to({scaleX:0.2284,scaleY:0.1751,rotation:7.2509,x:278.0997,y:141.4353},0).wait(1).to({scaleX:0.2202,scaleY:0.1712,rotation:6.5843,x:271.5686,y:140.319},0).wait(1).to({scaleX:0.2119,scaleY:0.1672,rotation:5.9176,x:265.0363,y:139.2024},0).wait(1).to({scaleX:0.2038,scaleY:0.1634,rotation:5.2579,x:258.5723,y:138.0976},0).wait(1).to({scaleX:0.1959,scaleY:0.1596,rotation:4.6135,x:252.259,y:137.0185},0).wait(1).to({scaleX:0.1882,scaleY:0.1559,rotation:3.9938,x:246.1873,y:135.9807},0).wait(1).to({scaleX:0.181,scaleY:0.1525,rotation:3.4082,x:240.45,y:135},0).to({scaleX:0.175,scaleY:0.1496,rotation:2.9179,x:233.1,y:155.65,alpha:0.7813},1).wait(1).to({scaleX:0.3842,scaleY:0.3801,rotation:2.1675,x:236.6723,y:154.436,alpha:0.8361},0).wait(1).to({scaleX:0.5611,scaleY:0.575,rotation:1.5327,x:239.6946,y:153.4089,alpha:0.8825},0).wait(1).to({scaleX:0.7047,scaleY:0.7332,rotation:1.0177,x:242.1462,y:152.5757,alpha:0.9201},0).wait(1).to({regX:0.3,regY:0.1,scaleX:0.8157,scaleY:0.8556,rotation:0.6192,x:244.05,y:151.9,alpha:0.9492},0).wait(1).to({regX:0,regY:0,scaleX:0.7879,scaleY:0.8093,rotation:0.3317,x:244.0667,y:152.8391,alpha:0.9728},0).wait(1).to({scaleX:0.7694,scaleY:0.7784,rotation:0.1403,x:244.2443,y:153.5309,alpha:0.9885},0).wait(1).to({scaleX:0.759,scaleY:0.7612,rotation:0.0334,x:244.3435,y:153.9172,alpha:0.9973},0).wait(1).to({regX:0.2,regY:0.2,scaleX:0.7558,scaleY:0.7558,rotation:0,x:244.6,y:154.15,alpha:1},0).wait(94));

	// why
	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.setTransform(238,122.8,0.1831,0.1405,27.7232,0,0,0.2,-0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(115).to({_off:false},0).wait(1).to({regX:0,regY:0,scaleX:0.192,scaleY:0.1565,rotation:27.2271,x:238.9181,y:127.3297},0).wait(1).to({scaleX:0.201,scaleY:0.1729,rotation:26.7182,x:239.9112,y:131.9765},0).wait(1).to({scaleX:0.2102,scaleY:0.1895,rotation:26.2021,x:240.9184,y:136.6891},0).wait(1).to({scaleX:0.2194,scaleY:0.2062,rotation:25.6872,x:241.9232,y:141.3907},0).wait(1).to({scaleX:0.2283,scaleY:0.2224,rotation:25.1848,x:242.9035,y:145.9774},0).wait(1).to({scaleX:0.2368,scaleY:0.2377,rotation:24.7087,x:243.8327,y:150.3252},0).wait(1).to({regX:0.2,regY:-0.1,scaleX:0.2445,scaleY:0.2518,rotation:24.2727,x:244.75,y:154.3},0).to({regX:0.5,regY:0,scaleX:0.2506,scaleY:0.2628,rotation:23.9351,x:246.95,y:144.85,alpha:0.7383},1).wait(1).to({regX:0,scaleX:0.4367,scaleY:0.4568,rotation:15.9127,x:246.1472,y:135.1525,alpha:0.826},0).wait(1).to({scaleX:0.5815,scaleY:0.6077,rotation:9.6694,x:245.5982,y:127.6608,alpha:0.8943},0).wait(1).to({scaleX:0.6866,scaleY:0.7173,rotation:5.1379,x:245.1999,y:122.2323,alpha:0.9438},0).wait(1).to({scaleX:0.7559,scaleY:0.7895,rotation:2.1517,x:244.9382,y:118.6592,alpha:0.9765},0).wait(1).to({scaleX:0.7941,scaleY:0.8292,rotation:0.5066,x:244.7943,y:116.6921,alpha:0.9945},0).wait(1).to({regX:0.5,regY:0.4,scaleX:0.8058,scaleY:0.8415,rotation:0,x:245.15,y:116.1,alpha:1},0).to({regX:0.4,regY:0.2,scaleX:0.7505,scaleY:0.7837,x:246.55,y:120.3},4).wait(94));

	// block
	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.setTransform(197.45,179.55,0.0691,0.0729,93.4461,0,0,-51.9,50.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(115).to({_off:false},0).to({regY:51.1,scaleX:0.8069,scaleY:0.8123,rotation:-1.9818,x:198.35,y:182.6},14,cjs.Ease.sineOut).to({regX:-52.1,regY:51,scaleX:0.7817,scaleY:0.7817,rotation:0,x:198.3},4).wait(94));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,307.8,215.8);


// stage content:
(lib._300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ghw
	this.instance = new lib.ghw();
	this.instance.setTransform(0,0,0.6667,0.6667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(227));

	// Layer_14
	this.instance_1 = new lib.Tween20("synched",0);
	this.instance_1.setTransform(151.85,322.35,1.0341,1.0341,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120).to({_off:false},0).to({alpha:1},27).wait(80));

	// Layer_13
	this.instance_2 = new lib.Tween19("synched",0);
	this.instance_2.setTransform(259.15,550.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(133).to({_off:false},0).to({x:220.65,y:473.8},14).to({startPosition:0},11).to({scaleX:0.7568,scaleY:0.7568,x:213.25,y:468},10).to({scaleX:1,scaleY:1,x:220.65,y:473.8},10).to({startPosition:0},26).to({scaleX:0.7568,scaleY:0.7568,x:213.25,y:468},11).to({scaleX:1,scaleY:1,x:220.65,y:473.8},11).wait(1));

	// Layer_12
	this.instance_3 = new lib.Tween18("synched",0);
	this.instance_3.setTransform(153.85,451.6,0.09,0.09);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.2887,scaleY:1.2887,x:153.8,y:451.75},13).to({regY:0,scaleX:1.0404,scaleY:1.0404,x:153.75,y:451.6},14).to({startPosition:0},11).to({regY:0.1,scaleX:0.9087,scaleY:0.9087,x:153.8,y:451.7},10).to({regY:0,scaleX:1.0404,scaleY:1.0404,x:153.75,y:451.6},10).to({startPosition:0},26).to({regY:0.1,scaleX:0.9087,scaleY:0.9087,x:153.8,y:451.7},11).to({regY:0,scaleX:1.0404,scaleY:1.0404,x:153.75,y:451.6},11).wait(1));

	// Layer_11
	this.instance_4 = new lib.Tween17("synched",0);
	this.instance_4.setTransform(160,240);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(93).to({_off:false},0).to({alpha:1},10).wait(124));

	// Layer_10
	this.instance_5 = new lib.Tween16("synched",0);
	this.instance_5.setTransform(75.2,262.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(83).to({_off:false},0).to({x:160,y:240},10).wait(134));

	// Layer_9
	this.instance_6 = new lib.Tween15("synched",0);
	this.instance_6.setTransform(47.05,272);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(73).to({_off:false},0).to({x:160,y:240},10).wait(144));

	// tropical
	this.instance_7 = new lib.Tween12("synched",0);
	this.instance_7.setTransform(482.1,291.6,1.3942,1.3942,-1.2668);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(37).to({_off:false},0).to({x:199.9,y:287.55},21,cjs.Ease.quintIn).to({scaleX:1.3941,scaleY:1.3941,rotation:2.7},20).to({scaleX:1.3942,scaleY:1.3942,rotation:-4.2449},22).wait(127));

	// royal
	this.instance_8 = new lib.Tween13("synched",0);
	this.instance_8.setTransform(400.65,307.05,1.354,1.354,-2.7181,0,0,0.1,0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(37).to({_off:false},0).to({x:118.45,y:303},21,cjs.Ease.quintIn).to({rotation:4.2364,y:303.05},15).to({rotation:-5.4599},22).wait(132));

	// Layer_15
	this.instance_9 = new lib.Symbol4();
	this.instance_9.setTransform(143.3,269.85,0.575,0.575,0,0,0,160,240);
	this.instance_9.compositeOperation = "screen";
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(116).to({_off:false},0).to({scaleX:1,scaleY:1,x:152.3,y:256.75},32).wait(79));

	// pop
	this.instance_10 = new lib.pop();
	this.instance_10.setTransform(-49.45,110.85,0.6418,0.6418,0,0,0,-0.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(227));

	// bg
	this.instance_11 = new lib.Tween10("synched",0);
	this.instance_11.setTransform(492.95,240,1.051,1.051);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1,scaleY:1,x:478.95},37,cjs.Ease.quintIn).to({x:178.6},21,cjs.Ease.quintIn).to({startPosition:0},136).wait(33));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgY/gwbMAx/AAAMAAABg3Mgx/AAAg");
	this.shape.setTransform(150,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgY/AwcMAAAhg3MAx/AAAMAAABg3g");
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(227));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-150.4,287.8,770.6,344.2);
// library properties:
lib.properties = {
	id: '93C52A4AB9539E4BB135B83CC768FBF6',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/air.png", id:"air"},
		{src:"images/bg1.jpg", id:"bg1"},
		{src:"images/bg2.jpg", id:"bg2"},
		{src:"images/box.png", id:"box"},
		{src:"images/cta_03.png", id:"cta_03"},
		{src:"images/cursor.png", id:"cursor"},
		{src:"images/explore.png", id:"explore"},
		{src:"images/feel.png", id:"feel"},
		{src:"images/ghw.png", id:"ghw"},
		{src:"images/royal_03.png", id:"royal_03"},
		{src:"images/splash.png", id:"splash"},
		{src:"images/the.png", id:"the"},
		{src:"images/tropical_03.png", id:"tropical_03"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['93C52A4AB9539E4BB135B83CC768FBF6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
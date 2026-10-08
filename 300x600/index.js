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



(lib.asterix = function() {
	this.initialize(img.asterix);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,1800);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,600);


(lib.caritau = function() {
	this.initialize(img.caritau);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.cta_03 = function() {
	this.initialize(img.cta_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,455,156);


(lib.cursor_03 = function() {
	this.initialize(img.cursor_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,235);


(lib.gantungan_02 = function() {
	this.initialize(img.gantungan_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,424,417);


(lib.harga = function() {
	this.initialize(img.harga);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,1800);


(lib.kretekmodern = function() {
	this.initialize(img.kretekmodern);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.limabelas_ribu = function() {
	this.initialize(img.limabelas_ribu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,1800);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,1200);


(lib.Tween72 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.asterix();
	this.instance.setTransform(-150,-300,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.Tween71 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cursor_03();
	this.instance.setTransform(-18.3,-24,0.2043,0.2043);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-24,36.6,48);


(lib.Tween70 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-227.5,-78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.5,-78,455,156);


(lib.Tween69 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.caritau();
	this.instance.setTransform(-160,-240,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,300,600);


(lib.Tween68 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.limabelas_ribu();
	this.instance.setTransform(-320,-480);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-480,900,1800);


(lib.Tween67 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.harga();
	this.instance.setTransform(-160,-240,0.3333,0.3333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,300,600);


(lib.Tween64 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.kretekmodern();
	this.instance.setTransform(-160,-240,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-240,240,480);


(lib.Tween61 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.gantungan_02();
	this.instance.setTransform(-212,-208.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212,-208.5,424,417);


(lib.Tween60 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bg();
	this.instance.setTransform(-190,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-190,-240,480,600);


(lib.Tween52 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.494,1],-30.7,0,30.8,0).s().p("AlzHnQhQAAAXhQIDzstQAYhRBQAAIHGAAQBQAAgYBRIjzMtQgXBQhQAAg");
	this.shape.setTransform(0.0351,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.4,-48.7,86.9,97.5);


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

	// Layer_2
	this.instance = new lib.Tween72("synched",0);
	this.instance.setTransform(150,300);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({_off:false},0).to({alpha:1},7).wait(135));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(195));

	// Layer_14
	this.instance_2 = new lib.Tween69("synched",0);
	this.instance_2.setTransform(160,240);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).to({alpha:1},7).wait(94));

	// _5000
	this.instance_3 = new lib.Tween68("synched",0);
	this.instance_3.setTransform(106.7,305,0.3333,0.3333,0,0,0,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},0).to({regX:0,regY:0,x:106.65,y:160},8,cjs.Ease.sineIn).to({regX:0.1,scaleX:0.3631,scaleY:0.3631,x:99.2,y:132.1},5).to({regX:0,scaleX:0.3333,scaleY:0.3333,x:106.65,y:160},6).wait(128));

	// Layer_12
	this.instance_4 = new lib.Tween67("synched",0);
	this.instance_4.setTransform(160,387.05);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48).to({_off:false},0).to({y:240},8,cjs.Ease.sineIn).wait(139));

	// Layer_16
	this.instance_5 = new lib.Tween71("synched",0);
	this.instance_5.setTransform(332.65,530.75,1.3438,1.3438);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(101).to({_off:false},0).to({x:222.25,y:382.9},9).to({startPosition:0},55).to({scaleX:0.965,scaleY:0.965,x:209.5,y:376.4},12).to({scaleX:1.3438,scaleY:1.3438,x:222.25,y:382.9},12).wait(6));

	// Layer_15
	this.instance_6 = new lib.Tween70("synched",0);
	this.instance_6.setTransform(147.95,370.85,0.0179,0.0179);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(94).to({_off:false},0).to({regY:0.1,scaleX:0.541,scaleY:0.541,y:370.9},7).to({regY:0,scaleX:0.4576,scaleY:0.4576,y:370.85},9).to({startPosition:0},55).to({regX:0.1,scaleX:0.3678,scaleY:0.3678,x:148},12).to({regX:0,scaleX:0.4576,scaleY:0.4576,x:147.95},12).wait(6));

	// mask1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_48 = new cjs.Graphics().p("Av8WuIgNioQgJhrCMgLMAgegClQCLgLAIBsIANCnQAJBriLALMggeAClIgZABQhzAAgIhhg");
	var mask_graphics_49 = new cjs.Graphics().p("Av8WuIgNioQgJhrCMgLMAgegClQCLgLAIBsIANCnQAJBriLALMggeAClIgZABQhzAAgIhhg");
	var mask_graphics_50 = new cjs.Graphics().p("Av8WuIgNioQgJhrCMgLMAgegClQCLgLAIBsIANCnQAJBriLALMggeAClIgZABQhzAAgIhhg");
	var mask_graphics_51 = new cjs.Graphics().p("Av8WuIgNioQgJhrCMgLMAgegClQCLgLAIBsIANCnQAJBriLALMggeAClIgZABQhzAAgIhhg");
	var mask_graphics_52 = new cjs.Graphics().p("Av8WuIgNioQgJhrCMgLMAgegClQCLgLAIBsIANCnQAJBriLALMggeAClIgZABQhzAAgIhhg");
	var mask_graphics_53 = new cjs.Graphics().p("Av8WuIgNioQgJhrCMgLMAgegClQCLgLAIBsIANCnQAJBriLALMggeAClIgZABQhzAAgIhhg");
	var mask_graphics_54 = new cjs.Graphics().p("Av8WuIgNioQgJhrCMgLMAgegClQCLgLAIBsIANCnQAJBriLALMggeAClIgZABQhzAAgIhhg");
	var mask_graphics_55 = new cjs.Graphics().p("Av8WuIgNioQgJhrCMgLMAgegClQCLgLAIBsIANCnQAJBriLALMggeAClIgZABQhzAAgIhhg");
	var mask_graphics_56 = new cjs.Graphics().p("Av8WuIgNioQgJhrCMgLMAgegClQCLgLAIBsIANCnQAJBriLALMggeAClIgZABQhzAAgIhhg");
	var mask_graphics_57 = new cjs.Graphics().p("Av8WuIgNioQgJhrCMgLMAgegClQCLgLAIBsIANCnQAJBriLALMggeAClIgZABQhzAAgIhhg");
	var mask_graphics_58 = new cjs.Graphics().p("Av8WuIgNioQgJhrCMgLMAgegClQCLgLAIBsIANCnQAJBriLALMggeAClIgZABQhzAAgIhhg");
	var mask_graphics_59 = new cjs.Graphics().p("Av8WuIgNioQgJhrCMgLMAgegClQCLgLAIBsIANCnQAJBriLALMggeAClIgZABQhzAAgIhhg");
	var mask_graphics_60 = new cjs.Graphics().p("Av8WuIgNioQgJhrCMgLMAgegClQCLgLAIBsIANCnQAJBriLALMggeAClIgZABQhzAAgIhhg");
	var mask_graphics_61 = new cjs.Graphics().p("Av8WuIgNioQgJhrCMgLMAgegClQCLgLAIBsIANCnQAJBriLALMggeAClIgZABQhzAAgIhhg");
	var mask_graphics_62 = new cjs.Graphics().p("Av8WuIgNioQgJhrCMgLMAgegClQCLgLAIBsIANCnQAJBriLALMggeAClIgZABQhzAAgIhhg");
	var mask_graphics_63 = new cjs.Graphics().p("Av8WuIgNioQgJhrCMgLMAgegClQCLgLAIBsIANCnQAJBriLALMggeAClIgZABQhzAAgIhhg");
	var mask_graphics_64 = new cjs.Graphics().p("Av8WuIgNioQgJhrCMgLMAgegClQCLgLAIBsIANCnQAJBriLALMggeAClIgZABQhzAAgIhhg");
	var mask_graphics_65 = new cjs.Graphics().p("Av8WuIgNioQgJhrCMgLMAgegClQCLgLAIBsIANCnQAJBriLALMggeAClIgZABQhzAAgIhhg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_graphics_48,x:133.6851,y:155.1381}).wait(1).to({graphics:mask_graphics_49,x:133.6853,y:155.1382}).wait(1).to({graphics:mask_graphics_50,x:133.6853,y:155.1382}).wait(1).to({graphics:mask_graphics_51,x:133.6853,y:155.1382}).wait(1).to({graphics:mask_graphics_52,x:133.6853,y:155.1382}).wait(1).to({graphics:mask_graphics_53,x:133.6853,y:155.1382}).wait(1).to({graphics:mask_graphics_54,x:133.6853,y:155.1382}).wait(1).to({graphics:mask_graphics_55,x:133.6853,y:155.1382}).wait(1).to({graphics:mask_graphics_56,x:133.6853,y:155.1382}).wait(1).to({graphics:mask_graphics_57,x:133.6853,y:155.1382}).wait(1).to({graphics:mask_graphics_58,x:133.6853,y:155.1382}).wait(1).to({graphics:mask_graphics_59,x:133.6853,y:155.1382}).wait(1).to({graphics:mask_graphics_60,x:133.6853,y:155.1382}).wait(1).to({graphics:mask_graphics_61,x:133.6853,y:155.1382}).wait(1).to({graphics:mask_graphics_62,x:133.6853,y:155.1382}).wait(1).to({graphics:mask_graphics_63,x:133.6853,y:155.1382}).wait(1).to({graphics:mask_graphics_64,x:133.6853,y:155.1382}).wait(1).to({graphics:mask_graphics_65,x:133.6851,y:155.1381}).wait(130));

	// sweep
	this.instance_7 = new lib.Tween52("synched",0);
	this.instance_7.setTransform(0.85,304.95,0.6726,0.6726,-22.2014);
	this.instance_7.alpha = 0.4492;
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(48).to({_off:false},0).to({x:371.3,y:250.95},17).to({_off:true},1).wait(129));

	// kretek
	this.instance_8 = new lib.Tween64("synched",0);
	this.instance_8.setTransform(306.65,367.3,3.6049,3.6049,0,0,0,0,0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(38).to({_off:false},0).to({regY:0,scaleX:1.25,scaleY:1.25,x:200,y:300},4).wait(43).to({startPosition:0},0).to({alpha:0},9).wait(101));

	// flash0_ai (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_48 = new cjs.Graphics().p("A0LHjQAPgZgBgTQAAglggjFQgjjKgLgPQgGgJgYgPQgYgNgFgNQAngCBKgVQBQgXAdgDQAVgDBMAIQBNAHAHAGIAeAzQAXAnAdABQACgqgfgiQgmgkgQgZIE4g7QAJgCAuAXQAsAWANAMQA+A6gIBXQgIBbhLAeQgGAQBFBIQBABCAaAQQAyAbAugPIhYnRQgUgOgOgMQgcgVAGgbIF0hPIEEFkICGmoICPgxIASAhQgTAFgBAEQgFAQAnDTQAlDEAPA4QAEALABASQAEAKATgHQAPgBAHgNQAEgIAFgTQANghA6kUQAyj9ATgKQAegQA7BPQBHBdAPAJQAOAEAIgYQAKgjAGgFQAgglAwgCIBOgEQAigJCZg5QAsgNAhgHQBNgPAXAXIgCCIIgoAHIgmhzIgSAFQhZAZgwAWQhgArAYBHIBFgNIAJAtQgsAEg2A9QgyA5g8gHQgBAdBiBjQBcBcgNAXIjhAaQAjgugphFQgohHg1AFQgMABhRAYQhTAZgEAFQgTAQgFA/QgEBDAbASIkVA1IhGlxIiOGpQgaALhtigQh0iqgpgIQgMAIAMAPQAGAGAJAGIA1EYQABAEAUAVQATATgCADQgtAHjAA2QicAthQgDQglgDhThMQhZhXgbgWIgRgRQgLgIgQAIIBLD2IjBAlQgFgUAPgYQAQgbgBgSQgBgwgOhbQgUh5gCgRIhXB6IikBBIAaDeIipALQgDgOAPgYgAlKjEQABAxAjC2QAlC8APAbQAGAIAPAJIAWAOIA0gSIhfn2IhNgCQgLAFAAAogAyjAAIAZDBQA/AFAighQAfgegFgsQgEgrglgbQgggXgtAAQgOAAgQACgAscg6IARClQA5gFAggeQAegbgCgjQgDghghgWQgcgPgnAAQgOAAgRACgAK6kmQACAMgDAIQgEAUgGA8QgHBDAFADQANgEA5gJQAygMAAgVIhSiCQgXABgCAFg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_1_graphics_48,x:161.325,y:226.0789}).wait(147));

	// sweep
	this.instance_9 = new lib.Tween52("synched",0);
	this.instance_9.setTransform(-4.6,266.9,1.0568,1.0568,-22.202);
	this.instance_9.alpha = 0.7109;
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(48).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.0567,scaleY:1.0567,rotation:-22.2016,x:344.65,y:199.25},17).to({_off:true},1).wait(129));

	// Layer_6
	this.instance_10 = new lib.Tween61("synched",0);
	this.instance_10.setTransform(166,176.55,0.6071,0.6071,-41.907,0,0,163.2,-135.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:0,regY:0,rotation:-41.8579,x:147.1742,y:303.9418},0).wait(1).to({scaleX:0.6073,scaleY:0.6073,rotation:-41.7103,x:147.0967,y:303.9158},0).wait(1).to({scaleX:0.6075,scaleY:0.6075,rotation:-41.4638,x:146.9674,y:303.8706},0).wait(1).to({scaleX:0.6078,scaleY:0.6078,rotation:-41.1181,x:146.786,y:303.8031},0).wait(1).to({scaleX:0.6081,scaleY:0.6081,rotation:-40.673,x:146.5524,y:303.7092},0).wait(1).to({scaleX:0.6086,scaleY:0.6086,rotation:-40.1279,x:146.2666,y:303.5834},0).wait(1).to({scaleX:0.6091,scaleY:0.6091,rotation:-39.4826,x:145.9285,y:303.4193},0).wait(1).to({scaleX:0.6098,scaleY:0.6098,rotation:-38.7368,x:145.5384,y:303.2089},0).wait(1).to({scaleX:0.6105,scaleY:0.6105,rotation:-37.8902,x:145.0968,y:302.9433},0).wait(1).to({scaleX:0.6113,scaleY:0.6113,rotation:-36.9423,x:144.6045,y:302.6119},0).wait(1).to({scaleX:0.6122,scaleY:0.6122,rotation:-35.8929,x:144.0627,y:302.2033},0).wait(1).to({scaleX:0.6131,scaleY:0.6131,rotation:-34.7415,x:143.4732,y:301.7045},0).wait(1).to({scaleX:0.6142,scaleY:0.6142,rotation:-33.488,x:142.8383,y:301.1014},0).wait(1).to({scaleX:0.6153,scaleY:0.6153,rotation:-32.132,x:142.1614,y:300.3786},0).wait(1).to({scaleX:0.6165,scaleY:0.6165,rotation:-30.6731,x:141.4465,y:299.5195},0).wait(1).to({scaleX:0.6179,scaleY:0.6179,rotation:-29.1111,x:140.6989,y:298.5061},0).wait(1).to({scaleX:0.6192,scaleY:0.6192,rotation:-27.4456,x:139.925,y:297.3196},0).wait(1).to({scaleX:0.6207,scaleY:0.6207,rotation:-25.6762,x:139.1327,y:295.9397},0).wait(1).to({scaleX:0.6223,scaleY:0.6223,rotation:-23.8028,x:138.3317,y:294.3454},0).wait(1).to({scaleX:0.624,scaleY:0.624,rotation:-21.8249,x:137.5333,y:292.5147},0).wait(1).to({scaleX:0.6257,scaleY:0.6257,rotation:-19.7423,x:136.7509,y:290.4247},0).wait(1).to({scaleX:0.6276,scaleY:0.6276,rotation:-17.5547,x:136.0001,y:288.052},0).wait(1).to({scaleX:0.6295,scaleY:0.6295,rotation:-15.2617,x:135.2991,y:285.3727},0).wait(1).to({scaleX:0.6315,scaleY:0.6315,rotation:-12.8632,x:134.6687,y:282.3625},0).wait(1).to({scaleX:0.6336,scaleY:0.6336,rotation:-10.3587,x:134.1326,y:278.9975},0).wait(1).to({scaleX:0.6358,scaleY:0.6358,rotation:-7.748,x:133.7176,y:275.2537},0).wait(1).to({scaleX:0.6381,scaleY:0.6381,rotation:-5.0308,x:133.4537,y:271.1078},0).wait(1).to({scaleX:0.6404,scaleY:0.6404,rotation:-2.2069,x:133.3745,y:266.5377},0).wait(1).to({scaleX:0.6429,scaleY:0.6429,rotation:0.724,x:133.5172,y:261.5225},0).wait(1).to({scaleX:0.6454,scaleY:0.6454,rotation:3.7623,x:133.9227,y:256.0431},0).wait(1).to({scaleX:0.6481,scaleY:0.6481,rotation:6.9081,x:134.6356,y:250.083},0).wait(1).to({scaleX:0.6508,scaleY:0.6508,rotation:10.1617,x:135.7045,y:243.6284},0).wait(1).to({scaleX:0.6536,scaleY:0.6536,rotation:13.5234,x:137.1817,y:236.6691},0).wait(1).to({scaleX:0.6565,scaleY:0.6565,rotation:16.9934,x:139.1234,y:229.199},0).wait(1).to({scaleX:0.6595,scaleY:0.6595,rotation:20.5719,x:141.5892,y:221.2168},0).wait(1).to({scaleX:0.6626,scaleY:0.6626,rotation:24.2593,x:144.642,y:212.7266},0).wait(1).to({scaleX:0.6658,scaleY:0.6658,rotation:28.0556,x:148.3479,y:203.7388},0).wait(1).to({regX:163.5,regY:-135.7,scaleX:0.6691,scaleY:0.6691,rotation:31.9612,x:293.4,y:175.1},0).wait(1).to({regX:0,regY:0,rotation:31.9387,x:152.56,y:194.3052},0).wait(1).to({rotation:31.8713,x:152.5847,y:194.4718},0).wait(1).to({rotation:31.7587,x:152.6264,y:194.7496},0).wait(1).to({rotation:31.6008,x:152.6858,y:195.1391},0).wait(1).to({rotation:31.3976,x:152.7639,y:195.6402},0).wait(1).to({rotation:31.1489,x:152.8619,y:196.2532},0).wait(1).to({rotation:30.8546,x:152.9812,y:196.9781},0).wait(1).to({rotation:30.5146,x:153.1237,y:197.8148},0).wait(1).to({rotation:30.1287,x:153.2914,y:198.7635},0).wait(1).to({rotation:29.6969,x:153.4866,y:199.8238},0).wait(1).to({regX:163.6,regY:-135.6,rotation:29.219,x:293.55,y:175.2},0).wait(1).to({regX:0,regY:0,rotation:29.2328,x:153.6923,y:200.9162},0).wait(1).to({rotation:29.2745,x:153.6724,y:200.8142},0).wait(1).to({rotation:29.3439,x:153.6393,y:200.6439},0).wait(1).to({rotation:29.4413,x:153.5932,y:200.4053},0).wait(1).to({rotation:29.5665,x:153.5345,y:200.098},0).wait(1).to({rotation:29.7198,x:153.4635,y:199.7219},0).wait(1).to({rotation:29.9012,x:153.3809,y:199.2767},0).wait(1).to({rotation:30.1106,x:153.2872,y:198.7622},0).wait(1).to({rotation:30.3483,x:153.1832,y:198.1781},0).wait(1).to({rotation:30.6142,x:153.0697,y:197.5241},0).wait(1).to({rotation:30.9083,x:152.9476,y:196.7999},0).wait(1).to({rotation:31.2309,x:152.818,y:196.0053},0).wait(1).to({rotation:31.5818,x:152.6821,y:195.14},0).wait(1).to({regX:163.5,regY:-135.7,rotation:31.9612,x:293.4,y:175.1},0).wait(132));

	// Layer_3
	this.instance_11 = new lib.Tween60("synched",0);
	this.instance_11.setTransform(116.85,223.65,1.0096,1.0096,0,0,0,16.4,-6.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:50,regY:60,scaleX:1.0099,scaleY:1.0099,rotation:0.0308,x:150.75,y:290.5},0).wait(1).to({scaleX:1.0105,scaleY:1.0105,rotation:0.1236,x:150.8,y:290.45},0).wait(1).to({scaleX:1.0116,scaleY:1.0116,rotation:0.2788,x:151},0).wait(1).to({scaleX:1.0131,scaleY:1.0131,rotation:0.4969,x:151.15,y:290.5},0).wait(1).to({scaleX:1.015,scaleY:1.015,rotation:0.7784,x:151.45,y:290.45},0).wait(1).to({scaleX:1.0175,scaleY:1.0175,rotation:1.1237,x:151.75,y:290.5},0).wait(1).to({scaleX:1.0203,scaleY:1.0203,rotation:1.5334,x:152.1,y:290.45},0).wait(1).to({scaleX:1.0236,scaleY:1.0236,rotation:2.0077,x:152.5,y:290.5},0).wait(1).to({scaleX:1.0273,scaleY:1.0273,rotation:2.5473,x:152.95},0).wait(1).to({scaleX:1.0315,scaleY:1.0315,rotation:3.1524,x:153.45,y:290.45},0).wait(1).to({scaleX:1.0362,scaleY:1.0362,rotation:3.8236,x:154},0).wait(1).to({scaleX:1.0413,scaleY:1.0413,rotation:4.5612,x:154.6,y:290.4},0).wait(1).to({scaleX:1.0469,scaleY:1.0469,rotation:5.3656,x:155.2,y:290.35},0).wait(1).to({scaleX:1.0529,scaleY:1.0529,rotation:6.2372,x:155.85,y:290.25},0).wait(1).to({scaleX:1.0594,scaleY:1.0594,rotation:7.1764,x:156.5,y:290.15},0).wait(1).to({scaleX:1.0664,scaleY:1.0664,rotation:8.1835,x:157.25},0).wait(1).to({scaleX:1.0739,scaleY:1.0739,rotation:9.2589,x:157.95,y:290},0).wait(1).to({scaleX:1.0818,scaleY:1.0818,rotation:10.4027,x:158.7,y:289.8},0).wait(1).to({scaleX:1.0902,scaleY:1.0902,rotation:11.6154,x:159.45,y:289.6},0).wait(1).to({scaleX:1.0991,scaleY:1.0991,rotation:12.8972,x:160.2,y:289.4},0).wait(1).to({scaleX:1.1085,scaleY:1.1085,rotation:14.2482,x:160.95,y:289.15},0).wait(1).to({scaleX:1.1183,scaleY:1.1183,rotation:15.6688,x:161.7,y:288.8},0).wait(1).to({scaleX:1.1287,scaleY:1.1287,rotation:17.159,x:162.35,y:288.4},0).wait(1).to({scaleX:1.1395,scaleY:1.1395,rotation:18.719,x:163.1,y:287.95},0).wait(1).to({scaleX:1.1508,scaleY:1.1508,rotation:20.3489,x:163.85,y:287.4},0).wait(1).to({scaleX:1.1626,scaleY:1.1626,rotation:22.0487,x:164.5,y:286.7},0).wait(1).to({scaleX:1.1749,scaleY:1.1749,rotation:23.8185,x:165.15,y:286},0).wait(1).to({scaleX:1.1876,scaleY:1.1876,rotation:25.6582,x:165.7,y:285.15},0).wait(1).to({scaleX:1.2009,scaleY:1.2009,rotation:27.5677,x:166.25,y:284.15},0).wait(1).to({scaleX:1.2146,scaleY:1.2146,rotation:29.547,x:166.75,y:283.05},0).wait(1).to({scaleX:1.2288,scaleY:1.2288,rotation:31.5957,x:167.15,y:281.8},0).wait(1).to({scaleX:1.2435,scaleY:1.2435,rotation:33.7137,x:167.55,y:280.3},0).wait(1).to({scaleX:1.2587,scaleY:1.2587,rotation:35.9006,x:167.9,y:278.65},0).wait(1).to({scaleX:1.2743,scaleY:1.2743,rotation:38.156,x:168.15,y:276.8},0).wait(1).to({scaleX:1.2904,scaleY:1.2904,rotation:40.4795,x:168.4,y:274.8},0).wait(1).to({scaleX:1.307,scaleY:1.307,rotation:42.8705,x:168.55,y:272.4},0).wait(1).to({scaleX:1.3241,scaleY:1.3241,rotation:45.3285,x:168.65,y:269.9},0).wait(1).to({regX:16.5,regY:-6,scaleX:1.3416,scaleY:1.3416,rotation:47.8526,x:204.25,y:174},0).wait(1).to({regX:50,regY:60,rotation:48.2444,x:168.1,y:265.55},0).wait(1).to({rotation:48.6376,x:167.55,y:264.4},0).wait(1).to({rotation:49.03,x:166.85,y:263.25},0).wait(1).to({rotation:49.4194,x:166.25,y:262.05},0).wait(1).to({rotation:49.8035,x:165.65,y:260.9},0).wait(1).to({rotation:50.1796,x:165.05,y:259.75},0).wait(1).to({rotation:50.5451,x:164.5,y:258.65},0).wait(1).to({rotation:50.8972,x:163.9,y:257.55},0).wait(1).to({rotation:51.233,x:163.4,y:256.55},0).wait(1).to({rotation:51.5496,x:162.85,y:255.6},0).wait(1).to({regX:16.5,regY:-6,rotation:51.8439,x:204.35,y:164.7},0).wait(146));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-202.9,-198.2,886.1999999999999,1430.4);
// library properties:
lib.properties = {
	id: 'C741CC4284BF344EB192A29A7B17EB02',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/asterix.png", id:"asterix"},
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/caritau.png", id:"caritau"},
		{src:"images/cta_03.png", id:"cta_03"},
		{src:"images/cursor_03.png", id:"cursor_03"},
		{src:"images/gantungan_02.png", id:"gantungan_02"},
		{src:"images/harga.png", id:"harga"},
		{src:"images/kretekmodern.png", id:"kretekmodern"},
		{src:"images/limabelas_ribu.png", id:"limabelas_ribu"},
		{src:"images/logo.png", id:"logo"}
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
an.compositions['C741CC4284BF344EB192A29A7B17EB02'] = {
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
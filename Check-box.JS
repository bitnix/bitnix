(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,445,445);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4EA0F8").ss(2,1,1).p("AAAAYIAAgv");
	this.shape.setTransform(1,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,-1,2,6.9), null);


(lib.Checkmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.137,0.137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Checkmc, new cjs.Rectangle(0,0,61,61), null);


(lib.Bolinha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#65B7F4").s().p("AijCkQhEhEgBhgQABhfBEhEQBEhEBfgBQBgABBEBEQBFBEAABfQAABghFBEQhEBFhgAAQhfAAhEhFg");
	this.shape.setTransform(23.3,23.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Bolinha, new cjs.Rectangle(0,0,46.5,46.5), null);


(lib.TraçoShine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0,12.6,1,2.927,0,0,0,1,5.3);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.TraçoShine, new cjs.Rectangle(-1,-5.9,2,20.1), null);


// stage content:
(lib.Checkbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada_6
	this.instance = new lib.Bolinha();
	this.instance.parent = this;
	this.instance.setTransform(265.2,187.3,1,1,0,0,0,23.2,23.2);
	this.instance.alpha = 0.73;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.6,scaleY:1.6,y:187.2},4).to({regX:23.4,scaleX:2.42,scaleY:2.42,x:265.6,alpha:0},4).wait(32));

	// Camada_1
	this.instance_1 = new lib.Checkmc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(265.6,186.6,0.07,0.07,0,0,0,30.5,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.49,scaleY:1.49,x:265.5,y:186.5},8,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(27));

	// Modo de isolamento
	this.instance_2 = new lib.TraçoShine();
	this.instance_2.parent = this;
	this.instance_2.setTransform(255,190,1,1,-90,0,0,0,12.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:207.5},4).to({x:195,alpha:0},4).wait(26));

	// Modo de isolamento
	this.instance_3 = new lib.TraçoShine();
	this.instance_3.parent = this;
	this.instance_3.setTransform(275,190,1,1,90,0,0,0,12.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({x:322.5},4).to({x:335,alpha:0},4).wait(26));

	// Modo de isolamento
	this.instance_4 = new lib.TraçoShine();
	this.instance_4.parent = this;
	this.instance_4.setTransform(265,200,1,1,180,0,0,0,12.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({y:237.5},4).to({y:260,alpha:0},4).wait(26));

	// Modo de isolamento
	this.instance_5 = new lib.TraçoShine();
	this.instance_5.parent = this;
	this.instance_5.setTransform(265,180,1,1,0,0,0,0,12.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({y:132.5},4).to({y:120,alpha:0},4).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(517,364.1,46.5,46.5);
// library properties:
lib.properties = {
	id: '503D4415F1E9417891A2276BFCFB91D0',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap2.png", id:"Bitmap2"}
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
an.compositions['503D4415F1E9417891A2276BFCFB91D0'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;

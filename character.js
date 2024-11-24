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
// helper functions:

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


(lib.skirt_fill = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EFF1EC").s().p("AA5NgIiLgHQhVgEg3AIIggABQgugHgegIIg/gCQhwgGhLgXQgtgHgagMIgDAAIgEgBQgYgDgggHIgygMIgTgFQgTACgcgGIgtgMQgrgMgTgJQgjgPgSgUQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIg8gVQgggNgQgOQgXgWAWgUQgBgOADgNIAIgyIgCgJQgDgSAEgRQABgxALg/QAFghARhQQArjVAjh6QAoiSAihbQAziFA+hcIAEgJQAFgMALgGIAQgWQAYg4AJgSQAWgoAcgWIAHgEQAcg/Amg9QAGgJAMABQAMgFAPAFQBCATApAFQAMABAmAIQAUgHAYgDIAAABQAMANAUAFIAPgGIAFgBQAsANA1gBIAGAGIABAAQBAgBAnASQAYgIAfgBIAKgBQAngDA/ACIBoADIA8AAQA7gFB1gQIAOgDIBJgSQAsgLAdgKQAJgDAJAGQAIAGACAKQAHAFAIAKQADABACADQAiA1AgA8QAnAoAkBNQAVArAiBVIAXAvIADADQAYAuATAuQADgCACADIAxBlQAcA+AIAvIAWBFIASA6QAKAkAEAZQARAfAKA2QAGAfAIA3QAFAdAPA/QAKA4gKAkIAMBUIAJA/QADAkgMAYQAAABAAAAQgBABAAAAQgBAAAAAAQgBABgBAAQgDAAgCgCIgEgFIgJAJQgCAHgFADQg3AjgWALQgiAagpADQgGAQgnAMIgzALIhuAiQhEAUgsgDQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAAgBIgPABQggANgYAEQgVAEgigCQgtgCgLABIgTADQhCAPhYAFIgYAEQgwAGgSgBIgKACIgsABIgtgBg");
	this.shape.setTransform(111.1617,86.4875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.skirt_fill, new cjs.Rectangle(0,0,222.3,173), null);


(lib.shoe_04 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#384663").ss(2.6,1).p("AiyGqQANhYAQgwQAYhHArgwQAXgZA6gqIBuhOQATgOAGgGQAOgKAIgLQAhgtgOhLQgFgZgLgjQgMgogGgUQgUhHgEhj");
	this.shape.setTransform(20.4213,48.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#384663").ss(2.6,1).p("AhLgLQAiASApAEQAnAFAlgL");
	this.shape_1.setTransform(38.7,41.2903);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#384663").ss(2.6,1).p("AlSHJQC8gLC4goQAqgIAWgOQAXgOAXgjQAkg2ACgDQASgWAggYQATgOAlgaQBFg0AMg2QAHgggLgiQgKgegWgdQgVgYgLgMQgTgXgBgSQAAgNAFgXQAFgWAFgNQAbhEAFgPQAJgaALg4QAFgbgBghQgBgjgJgKQAAgBhRAZQhhAfhJAAQhTAAhagPQhHgLgCABQgQAKARBtQASB3AtA9QAXAhAGANQAMAegNAWQgFAHgQAOQgeAVgMAJQgYAQgUAKQgNAGgmAQQggAMgSALQgpAZgaAwQgYArgGA1QgFAtAIA3QAGApAPA5");
	this.shape_2.setTransform(37.0991,45.8481);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#10264F").s().p("AgBB7QhFgBgggWQgNgKgJgVIgMglQgYhMADg2QAAgMAMgIQAMgIAKAIQALAIAEAFQAMgHAPADQA5ALBmAFQAfACAHABQAUAEALAPQAWAdgVA9QgTA5gfAYQgeAXhDAAIgCAAg");
	this.shape_3.setTransform(36.7652,15.4255);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#10264F").s().p("AjMCAQgKgHgBgNQgGg2AAgcQgBgwAWgVQADgGADgCQATgQAggRIA2gaQAZgMAUgEQAWgGAYACIAEAAQA5ARAZAGIBKASQAuAQANAbIACADIgXAWQhDBBh/AtIgYAHQgmANhHAMIgjAHIgSgCIgCABQgFAEgGAAQgFAAgGgDg");
	this.shape_4.setTransform(26.4494,63.4173);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#070F21").s().p("AlMG7IgEgLQgLgIgDgOQgShJACgzQAChEAjgyIANgQQgCgMAHgMQAHgLAMgIQAWgPAbgEQAbgSAsgUIA6gcIALgGIAagjQAbgjgUgwQgfg4gMgbQgghKgOhMQgGgkAAgJQAAgZAQgOQAHgGAJAAQAJgBAGAHIAGAFQAbgNAjAOQAXAKAXAHIAEgCQAOgHATACQALABAXAFQAuAJA7gVQAJgCAJABIAJgJQASAAAogMIAXgIIACACQAWgPASABQAhADgDAlQgCAOgOArIgCAHIgEASQgCAigRAsIgKAkIgNAtQgJAagKAQIgCAJIABABQAWATAQAXQACAKAMAQQAPAVAOAHIAAACIAFARQASAtgFAeIgBADIABgBQAAAwgkAgIgJAHIgGAIQgIAKgVAPIAAgBQgNAJgPADQghAfgTAHIgTAXQgDASgOAUQgJAMgTAUQgWAYgaAQQgCAKgRAJQgNAIgKABQgKACgjAEIgWAFIgBAAQgSAEgIAAIgDgBQgoAKgpAGQhEAKgTABQg0AFgkgHIgQAEIgEABQgIAAgEgHg");
	this.shape_5.setTransform(37.3984,45.4122);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shoe_04, new cjs.Rectangle(-2.6,-2.2,78.19999999999999,95.2), null);


(lib.shoe_03 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("Ah1gEQAbgCA2ADQBnAEAzAF");
	this.shape.setTransform(46.975,10.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6,1).p("AhGgHQBJAPBEAA");
	this.shape_1.setTransform(45.7,19.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6,1).p("AAIAzQAJgagGgbQgGgcgSgU");
	this.shape_2.setTransform(54.02,76.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6,1).p("AgBBlQgLgGgLgWQgYgsgZhBQgbhDAFgGQAEgFA2AHQAaAEAZAEQAgBrAwBo");
	this.shape_3.setTransform(35.9603,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6,1).p("AgtBXIBbit");
	this.shape_4.setTransform(78.375,8.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.6,1).p("Ai6B2ICKi/IBZgMQBjgOAvgS");
	this.shape_5.setTransform(63.875,11.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6,1).p("AjABUIBPAaIBUAGQBXAFAbgDQAbgDAsgmQAWgTARgTIgEiPQhJA+gaAHQgQAEhVgCIhTgEIhlgPg");
	this.shape_6.setTransform(54.9477,28.5461);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F1806").ss(2.6,1).p("AgtgMQAtAIAuAR");
	this.shape_7.setTransform(13.875,63.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6,1).p("AgogQQAoAXApAK");
	this.shape_8.setTransform(11.4,70.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5F1806").ss(2.6,1).p("AgpgSQAAADAGADQAjAVAqAK");
	this.shape_9.setTransform(11.2,78.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6,1).p("AgkgIQAmACAjAP");
	this.shape_10.setTransform(40.75,47.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5F1806").ss(2.6,1).p("AglgIIA+AQQAJACAEgB");
	this.shape_11.setTransform(35.375,54.0667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(2.6,1).p("AhDBaQA2gjAfgqQAhgrARg7");
	this.shape_12.setTransform(36.75,49.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5F1806").ss(2.6,1).p("AgOChQgUhBgFgkQgIg5ANgsQAHgXAPgbQAKgRATgfQANgUANgC");
	this.shape_13.setTransform(15.132,72.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5F1806").ss(2.6,1).p("AgwAFQgRgPgZgOQgPgIgggOQgdgNgQgFQgZgIgVABQgaAAgmARQg0AWgKADQgXAHgFACQgPAHgFALQgFAIABAUQAEBHAJAiQAPA7AlAgQAeAbA8AQQBEARA9AAQA3gBBkgXQApgJARgKQAQgKAdggQBZhgBihNQAagUAIgGQASgQALgPQAOgTAFgUQAFgXgGgUQgEgOgNgRQgQgTgIgKQgjgvgFg7");
	this.shape_14.setTransform(41.1974,62.7507);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#5F1806").ss(2.6,1).p("ABIhYIiLCsIgEAF");
	this.shape_15.setTransform(31.4,47.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CA2C2B").s().p("AgTBZQglAHgbgBQgigBgZgNIgBAAQgGgBgGgCQgNgBgKgHQgVgPAHgrQgEgcABgPQABgJAFgGQAFgHAIgCQAYgFAYALQASgJAdAIQAeAIAzgCQA/gEATACIAKADQANgPASgCQARgMAOgQQAFgGAIACQAEgHAGgCQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIACAFIABACQALAcACAuQgKAggBAYQgFAEgFACIgFAAQgIAGgKAEQgGAagtAPQgXAIgaAAQghAAgmgNg");
	this.shape_16.setTransform(55.3813,30.2451);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F49C3B").s().p("AgFAgQgLABgEgLIgOguQgCgGAFgFQAEgDAGABQAEgEACAFIAGAJQABAAAAABQAAABAAAAQAAAAAAABQgBAAAAAAIADAIQAEABACADIANARIABgBQAQgEAFAQQAEARgQAFQgGACgFAAQgLAAgGgIg");
	this.shape_17.setTransform(37.0208,19.1651);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F49C3B").s().p("AA5BuQgagDgVgUQgKgJgWghQgigygVhXQgBgHAHgDQAHgDADAGIAEAHIADgEQAogkAhBCQAJATAaBOQAZAkgBAVQAAAJgGAGQgGAHgIAAIgBAAg");
	this.shape_18.setTransform(35.7373,12.6695);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F49C3B").s().p("AhpB8QgSgBgKgQIgCAAQgMgBgFgJQgIgBgEgIQgEgIAHgHQAdggAng6IAXgkQAOgTAOgLQAhgYA7gHQAigEBBgFQALgCAEAIQAFAIgGAJIgGAHQgCAXgXAlIAAACQgFAYgTAXQgPAUgLAEQgQAcgUANQgkAZg/AEQgXAPgXAAIgGgBg");
	this.shape_19.setTransform(63.8325,14.022);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F49C3B").s().p("AhOAiQgFgLALgGQAqgXAsgTIAHgGQAIgGAKACIAUgHQAJgDAHAIQAIAIgDAJQgSAqhAAFQgbAMgfAFIgEAAQgKAAgEgKg");
	this.shape_20.setTransform(45.2893,85.197);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F49C3B").s().p("AAXAsIgPgPQgHAFgGgEQgSgKgLgUQgJgRgBgWQAAgJAJgBQAJgBACAIQACAKAEAIIAGAGQADAAACADIACAEIANALQAGAFAMAHIAIAEQADADABAFQABAFgEADQAIAHACAHQABAEgEAAIgBAAQgJAAgJgGg");
	this.shape_21.setTransform(8.435,82.0404);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F49C3B").s().p("Ag0A1QgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAgBQgFgOAHgVQAGgRAKgNQAJgLALgGQACgJAIgFQAPgIAPABQAQABAMAKQAKAJgFALQgGAMgMABQgDAHgHACQgIACgIgDQgKgFgMAGQgLAGgHALIgJASQgFAMgGAFIgCACIgCgBg");
	this.shape_22.setTransform(14.8055,61.6111);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F49C3B").s().p("AjFEJQg8gIgfgSQgIACgKgFQgJgEgGgHQgOgRgMgYQgQgNgNgdQgFgJgDgQIgGgcQgJgEgIgJIgCgPQgEgwAMgcQASgTAdAEQANgIARgEIAhgHQAXgEALABQASAAANAIIAYglIAKAAQAQADAbgOQAWgLALgLQARgRAbgoQAMgQAGgKQAMgRgEgMIASgFQAJgKAPACQA5AIAbADQAuAEAngCQBHgEAhgQQAJgSAUgDQAJgFAIAHIAFACQAIADAGAFIAAAAQgBAJAEALQAFAPAQARQAIAIAMAKIACAMQASAIAEAZIABAJQAPAPgNAsQgHAYgRAOQgSApgpALQgTAUgcAXIgzAnIgdAWQgHANgOAPQgkAnhDAgIgOAIQg2AchGAJQgfAEggAAQgiAAghgFg");
	this.shape_23.setTransform(41.1283,63.4151);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shoe_03, new cjs.Rectangle(-6.9,-1.2,93.4,93.4), null);


(lib.shoe_02 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.3,1).p("AAFAkIgJhH");
	this.shape.setTransform(39.8,8.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.3,1).p("ADWAdQAJgPAGgQQANghgOgIQgNgHhAAaQhUAhgLADQgZAHg9gGQhGgGgSACQgWACgmgWQgggUgOALQgRANALAaQAFAOAIAM");
	this.shape_1.setTransform(52.2694,4.5008);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.3,1).p("AgvAfQAygcAtgg");
	this.shape_2.setTransform(33.875,16.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.3,1).p("AhJgiQAJATAfAcQAPAOAOAKIBOhN");
	this.shape_3.setTransform(46.575,17.7763);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.3,1).p("AgigiQALAQAWAUQAMALAYAW");
	this.shape_4.setTransform(72.525,13.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.3,1).p("AhEgZQAVAcA1AvIAXgoQAagsAOgW");
	this.shape_5.setTransform(60.575,16.0665);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.3,1).p("Ag2AnQAXglAlgmIAVAFQAXAIAFAO");
	this.shape_6.setTransform(69.05,29.5914);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F1806").ss(2.3,1).p("AhPAsQAZgiAygyIAgASQAkAVAQAS");
	this.shape_7.setTransform(54.725,32.7401);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.3,1).p("AhIAaQALgGAUgeQATgcAOgEQAnAsAqAr");
	this.shape_8.setTransform(39.375,33.0866);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5F1806").ss(2.3,1).p("AgWgKIAtAV");
	this.shape_9.setTransform(57.55,62.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.3,1).p("ADsAyQAQgKgEhbQgFhagPgLQgLgIg2AWQhIAdgUAFQgjAIhWAAIhQgCQgXgOgZgLQgzgWgKAMQgPAQALBrQAMBtAYATQAWARAhAMQARAFAMADIBKgKQBOgKAXgBQAmgBBEglQAXgMA3gig");
	this.shape_10.setTransform(52.586,22.8604);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5F1806").ss(2.3,1).p("AgNggQATAfAIAj");
	this.shape_11.setTransform(42.85,75.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(2.3,1).p("AAKguQAAAvgTAu");
	this.shape_12.setTransform(32.075,75.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5F1806").ss(2.3,1).p("ABDhbQgOACglAYQgqAdgRAbQgPAYgFApQgDAVABAP");
	this.shape_13.setTransform(17.8958,71.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5F1806").ss(2.3,1).p("ABEh8Ig2CPIhRBq");
	this.shape_14.setTransform(33.3,50.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#5F1806").ss(2.3,1).p("ACzkMIgbDwIiFBtIhOgEIhfhhIinAgIgnAoQgnAyAAAtQAAA7AbAwQAeA2A3ATQDlBOC9i2QA6g3A7hWQA5hSADgCQAFgFAggUQAYgPAMgPQAjgtgehcQgFgMgTghQgSgegBgHQgBgJABghIACgf");
	this.shape_15.setTransform(40.0047,63.97);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5F1806").ss(2.3,1).p("ABliIIhGCqIiDBo");
	this.shape_16.setTransform(22.15,49.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F1DFC7").s().p("AhKB1QgLgOg5hDQgEAGgLAKIgHAHIgTAXIAAAEQAEAPgPAEQgPAEgFgPQgGgPgDgOIgMgiQgLgdAHgRIABgCIAAgBQgBgIAIgDQAJgOAPgMQAPgNAOgGQALgFALADQALACAFAKQAWADAQAbQAFABAFAEQAJAGAHAHIAFgCQAOAHAFgNQAEgEAHgNQAOgSARgQQAIgHAKACQAKADADAJQAFACADADIAUAXQAOAPAKAEQAEAHADgBIAMgTQAjg4AJgWQAFgLANAAQALABAHAJQAGACAEAGQARAcAHAHQAGAFAMAJQANAHADADQACAEAAAEQAAAEgDADQAGAbgRAeQgEAGgIABQgJACgEgGIgEgEIgEABIgHABQgTADgHgPIgDAEQgQAggPAWQgFAJgLABQgDAKgLADQgLAEgJgJIgDgEIgBgBIgFgHQgOgRgrgXQgJARgGAJQgKAMgNADIgEAAQgLAKgIAKIACAGQADANgLAEIgHABQgHAAgFgHg");
	this.shape_17.setTransform(53.0043,23.5832);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CA2C2B").s().p("AgiAqQgOgDAAgOIABgvQABgKAHgGQAIgGAKACQAcAGAYALQAGADADAHIACgBQAGgBABAIQACAGgHACIgHABIgGAGIgrAbIgBABQgHAJgJAAIgFgBg");
	this.shape_18.setTransform(32.7972,14.2555);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CA2C2B").s().p("AgCAlQgEAAgDgDIgLgLQgIgFgHgJQgQgPgIgNQgEgGAGgEQAGgFAGAFIACACQAHgHAJAAQAKAAAFAIIgBgCIAGgBIAMgCIAigFQAPgCAGANQAGANgNAJQgIAEgQAQQgOANgJAGQgDABgDAAIgCAAg");
	this.shape_19.setTransform(45.8897,16.7417);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CA2C2B").s().p("AgBAvQgIgBgDgGIgPgbIgGABQgMABgFgNQgFgMAJgHQAHgGAKgCIASgEQAOgEAWgLQANgGAJAKQAKAJgHANQgGALgQATIgJAQQgFAKgFAFQgDAEgGAAIgBAAg");
	this.shape_20.setTransform(60.3277,15.4422);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CA2C2B").s().p("AAMAmQgdgcgNgbQgCgEACgDQACgDADAAQACgIAJgCIAFgCQAJgDAGAEQAEgDAFABQAFABACAFIAEAPIADAHQACAFgBAEQgBADgEABIAGAaQADAIgIAFQgDABgDAAQgEAAgEgDg");
	this.shape_21.setTransform(73.3063,12.0231);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CA2C2B").s().p("AgtAkQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBABAAQADgIAIgKQAAgHAGgGIARgNIAJgKQAFgIADgCQAGgFAHAAIAJADIAAABIACgBQAOAAAEAOQAEAPgMAGQgaAPgOAMQgNALgNgKQgGAFgIADIgBABIgDgCg");
	this.shape_22.setTransform(69.1857,29.9144);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CA2C2B").s().p("AAlAoQgSgBgOgCIgPgEIgQgEQgQgBgDgOQgHgBACgGQADgIAJgMIAPgUQAIgLAKAJQASAPAiAiQAHAHgEAKQgDAJgJAAIgBAAg");
	this.shape_23.setTransform(39.2337,34.1443);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#5F1806").ss(2.3,1).p("AChiMIglDWIhAA+IhUhPIiIAb");
	this.shape_24.setTransform(34.275,51.1643);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EC6C3B").s().p("AADBAQgIgCgHgHQgQABgdgEQgKAMgQgFQgIgCgQgBQgSAAgHgBQgKACgJgFQgtgXgMgLQgggaASgbQAGgJAJgBQAJgBAIAHQAGAEAJALQAIgEAJADQALADAKAKQALgIAPAEQANADAJAFQAGADAGABQAEgCADAAIAIgBIAAgBIAUABIAmAFQAWACAPgBIAOgDIAJAAIAGgIQAYgUAYAHIALgKQAOgMAWgGQAKgCAHAEQASgJAPgEQAIgCAHAFQAIAGgBAIQgEAoghAWQgfAVgqgBQgEAAgFgCQgNAGgWAGQgbAGgJAEIgRAHQgGADgHAAIgGgBg");
	this.shape_25.setTransform(52.316,7.0131);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EC6C3B").s().p("AATCGQgjgUgUgkQgEgDgFgBQgRgBgKgLQgJgLAAgOQgOAAgIgIQgJgKAFgPQAahBAKg0QADgQARgFQASgEALAMIAWASIAEgDQAOgJAMALIAegCQARgCAKgFQAJgFAIAGQAIAGgDAJQgKAlgJA+QADAHgCAKQgEAPgEAMIgDAQQgDASgPAUQgVAagFAJQgCAEgFABIgEABQgDAAgDgCg");
	this.shape_26.setTransform(38.4755,49.9765);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EC6C3B").s().p("AhkBWQgEgJAGgFQAjgeAlgrQAXgaApg3QALgPAPAHQAPAFgBAPIABAAQAMAAAHAMQAIAMgIAKQgEAHgFADQACACgBAEQgEAMgFAXQAIAOgBAPQgCAQgLAKQgLAKgQAAIgIgCQACADAAADQgBAEgDABQgJAEgLgDQgQgGgEAAQgTAAgZADIgrAGIgCAAQgGAAgDgHgAAJAwQAHACAEADIAAgFIgCgHg");
	this.shape_27.setTransform(30.9069,49.6797);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CA2C2B").s().p("AgkDTQgTgFACgSIgGgEQgWgWgLgQQgQgKgGgQIgEABQgHADgHgEQgGgDgDgHQghADgzAJQgGABgBgGQgCgFAGgCIA6gVIA6gUQAHgDAHAEQAOgCAHAIQAJgEAJACQAKADAGAJQAIANAFAMQANgCAKAIIAAAAQAHAGAFAJQAIAHAIADIBIg7QgCgGABgGIAOhGIAAgCQAAgYAKgrQAEgdAGgXQADgMANgDQgNAAgGgJQgHADgHAAIgBgBQgBgHAEgJIAIgOQARgbAMgJQAMgJAOAIIAYAQQAUAIAHAGQAOALgIAPQgEAHgKADIgRADIgYACQAQAEgBAQQgDA+gUBbIADASQACAcgRAYQgOARgdASIgBABQgdAngkATQgdAPgbAAQgOAAgNgDg");
	this.shape_28.setTransform(38.4294,50.5882);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EC6C3B").s().p("Aj2FCQgdgDgXgOQgOgEgMgMQgLAAgJgHQgJgJADgLQgngvgEg8QgCgLABgJIABgHQACgUAFgSQACgKAJgIQAOgrAbgKQAGgIAMgDQAVgGAhgCQABgEADgBQAfgJAJAEIARgDIABAAIADgCQANgHAOAFQANgBAKAEQAHAEAAAJQAVAGAGAUIAAAAIACADQAVAIAMAPQAJAKAGAPQAegLAgAMIABABIARgCQAQgRAXgNQAkguAtgUIAPgOIADgMIAHgWQgFhbALhLQAEgdAKgMQAMgRAZAEIADABQANgIAKgFQADgDAEgBQAhgOAegRQAPgJALAOQAKAOgLANIgPAQIALAXQAMAOAKAVIAPAlQAKAcABALQATAXgNAgQgMAggbALIgHABQgMANgZAVQgGAFgIABQgIAVgUAeIgeAtQgaAqgQATQgaAegfAPQgzBAgwAZQgEADgDgFQgfAZggAOQg3AZg6AAQgxAAgzgRg");
	this.shape_29.setTransform(40.5199,64.9587);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shoe_02, new cjs.Rectangle(-3.7,-3.1,88.3,103.19999999999999), null);


(lib.shoe_01 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("AilinQgEAwAVA6QAVA3AiAlQAvA3BGAiQA6AcBVAU");
	this.shape.setTransform(20.4861,37.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6,1).p("AABAxIgBhh");
	this.shape_1.setTransform(64.825,31.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6,1).p("AhwBZIBbAQIBrhVIgFgrQgEgMASgkIASgh");
	this.shape_2.setTransform(67.1,26.1895);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6,1).p("AhBgMICDAZ");
	this.shape_3.setTransform(58.375,10.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6,1).p("AlCggQgYgXgdgeIgQAbQgQAgAAAdQAAAkAMAoQANAnAWAkQAUAfAmAbQAUAOAjARQAbAOA5AKQBEANAtgJQApgJAzgmQAagTASgRQAJgLAKgRQAUggAEgZQAEgYB6hkQA9gyA8guQAJgNAJgSQARgigDgRQgIgcgLgVQgWgrgTAfQgPAYguAqQgpAlgJAEQgDABhrBkQhuBmgtAWQgjARgegBQgSgBgvgNQgfgIghgWIgbgVAlCggQAnAFAxgMQAwgNAggYQAdgUAdghQATgUAggpQAIgKAIgDQAGgDALACQA+AIA8APQg2BJhIA+QiLB1hegwQgEgCgDgCQgcgRgmgig");
	this.shape_4.setTransform(40.8225,27.439);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DAB27F").s().p("AhOBUQgLgCAAgJQgBgJAGgKIAMgPQAYgfAOgNQAGgHAQgMQAOgMAHgHQAEgEAKgRQAHgMAJgFQAIgFAIAEQAIADAEAJIAEANQASAEABATQACAigTAYQgJAMgNgCIgGAEQgOAIgLgLQgLgMAGgNQgeATgLAJIgXARQgQANgCAIQgBAJgHAAIgDgBg");
	this.shape_5.setTransform(71.9787,9.3144);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5F1806").s().p("AgCAeQgDgDgBgFQgLADgIgCQgIgBgCgIQgCgJAJgCQAAgDACgCQAMgUATgMQAIgEAHAEQAGAEABAIQABAMgBAKQAHAFACAHQACAJgIAGQgEAFgGADQgGACgEAAQgIAAgEgHg");
	this.shape_6.setTransform(61.277,32.7341);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B8912A").s().p("AgmBKQgOgEAAgOIgBgeQAAgTAGgJQAHgJAJABQAfgnAZgUQAMgJALAIQALAIgHAOQgCAGAAANQABAPgBAFQgDALgJAKIgeAZQgRAPgIAOQgFAJgKAAIgGgBg");
	this.shape_7.setTransform(70.4457,27.3921);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B8912A").s().p("ACECgQgwgDgxgXQgDAFgFADQgHADgFgDQgrgWgoggIgCgCQgHgFAEgIQg2gzgMhOIAAgDQgGghACg3QAAgMAMAAQAMAAAAAMQAAAcAGAeQAGgEAGAEQAFAFgDAHQgFAHAHAUIAKAaIABAGQA3BCA+A0IAAABIA3ARQAfAKAVAKQAIADgCAKQgDAJgIAAIgBAAg");
	this.shape_8.setTransform(15.5637,38.1263);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FBDCB0").s().p("AiKBwQgcADgZgHQgGgCgBgHQAAgHAHgBQBIgPBNgxQAIgTARgTIAegkIApgsQAZgaAWgLQAIgEAHADQADgDAFABIAoAHIACABIAIgBQAGgBAFAEQAFAFgBAGQAHAAACAGQADAGgEAFQgUAYghAZQgBAMgOAOIgWAVQgUAVgOAGQgoArgsAaQgoAYgZAGQgNADgKAAQgaAAgNgUg");
	this.shape_9.setTransform(41.9981,23.0408);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F1DFC7").s().p("AhsBvQgugCgggcQgGgFAEgHQADgHAHgBQApgDAqgMQBEg8AYgYQALgLAXgbQAWgWATgIQAcgLAXAPQAXgJAZAGQAPADAEAPQADAQgKAKQgjAhgLAJQABAAAAABQABAAAAAAQAAABAAABQAAAAgBABQgHANgPALIgbAUIgbATQgRAMgNADIgEAFQgIAHgOAJIgWAOQgFADgDgFQgnAPgkAAIgJAAg");
	this.shape_10.setTransform(30.9793,18.8778);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DAB27F").s().p("Ag/DeQgQgEgLgIQgTgCglgLQg0gSgngYQg4gjgMgnQgKgDgFgDQgMgIgGgNQgDgIgDgRQgHgFgDgHQgDgJADgJQgPgggMglQgEgMALgHQAMgHAIAJIA0A+IBfAsIA0AZQAgANAWAAQArABAygfQAhgVAsgnQARgQAwgyQAogqAagVQAhgZAqgPQAhgMAxgHQARgDAHAPQAIAQgQAJIgLAHIgPAWQgEAGgHABQgGAHgNAJIgTAOIhRBFQgDADgFAAIgSARIggAoIgfAoQgKAOgOgEIgTA1QgMAdgRATQg7A/gzgCIgCAAIgHgBg");
	this.shape_11.setTransform(42.3457,30.8405);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shoe_01, new cjs.Rectangle(-1.2,-10.2,88.10000000000001,68.4), null);


(lib.shirt_same = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AoLm2IAdBXIBCA+Ig9B/IBbBIIgvBrIBrBKIgqB7IBaAdIgmCAIB2gXIBHBYIBag+IBABNIBbhWIBbBFIAthcIBSgKIghhxIBbg3Igih0IBphOIgrhsIBPhUIg8hZIA9g5IAhhWIkFANQgmChhlHTQgeAYhWAFQhjAHgxgqQhum6ghiug");
	this.shape.setTransform(67.1,46.4,1,1,0,0,0,0.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EEBA33").s().p("AAHG2IgbgiIgXgMQgMgHgFgKIgQAWQgOAVgRABQgEAIgIADQgJADgIgCQgGABgFgDQgGgDgDgHIgFgMQgTgUgNgaIgUABQguAGgWAAQgOAGgKgBQgEAAAAgEIACgLIgLAKQgDACgDgCQgDgCACgEIAghJQAFgLADgWQgPgMgKgFQgPgGgPACQgNADgLgJQgMgKAFgOIAohkQgQgNgPgRIgbgQQgQgKgJgKQgJgKgCgKQgCgJAEgMQACgLALgUQANgYANgPIhKhDIAAAAQgLgDgEgLQgEgLAFgKQAQgjAZgjQgBgGACgKQADgRgBgGIgTgYQgPgKgHgHQgRgQgKgZQgHgRgHgfQAAgFADgDQAEgDAEABQAOgGAVABIAlAFIADABQACgHAGAAQAFgHAIABIAbAFQARAEAMAFQARgBAKAFQAKACAIAGQACgFAFgCQAGgBADAEQAOAOAFAXQAFAWgEAWIARBRQAPADAdAJIAXAFQBGAQBZAEQBjAEBcgQIA/gNIABgEIAJg7QAGgjAKgYIAMg1QADgKAKACQAcgUAygCQAdgCA2ACQAKAAAGAEQAWgFAOABQANABACALIABAIIAAAFQgHAjgmAnQAAAFgEADIgNAMIgOANQgFAFgFABQAtAqAHAnIAAAEQAGAHABAIQAAAJgHAGQgmAjgjAbQAPAnAWAtQAEAKgCAIQgCAJgJAFIgsAeQgbATgTAJIAGAYIAQAsQAKAegCAQQgDAXgjATQgZAOghAIIAVA6QANAEAFAOQAEAOgLAJQAEAFAAAFQgBAGgFADQgKAHgPgCQgMgCgMgIIgCgBIgVAUIgKAIIgGANQgEAYgNAQQgHAIgMgDQgTgEgWgaQgLgCgHgIQgIgJgDgKQgkAngaASQACAQgRAIQgHADgFAAQgJAAgHgIgAjgh3IANA8IANA7IAAABQAMAmAFAXQAWAtAdBdQAIAAAGAEQApAdA7gDIAzAAQAigCASgJIAUgOQALgVAbgsQgCg3APg9QAPg5Adg2IALg7QgjALgxAEQgcACg4AAQgwABhIgEQg3ACgrgDQgIAAgGgEIgogCg");
	this.shape_1.setTransform(66.6969,45.5686);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6).p("Ao9A+QBJgjBVgbQBwgkBygRQBfgOBYAAQBeAABkAQQB0ASByAmQBWAdBGAj");
	this.shape_2.setTransform(67.675,7.2327);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#070F21").ss(2.6).p("AJFr5IAgARQAeARALAQQALARABAjQAGCFgjB/QgOA2ggBVQgpBqgKAfQhEDLAOC7QAIBmAgBdQAhBhA6BOQgeAchFAeQiLA8jIAKQhJAEhzAAQhvgBg6gDQjIgKiLg8QgrgTghgVIgXgSQA6hOAhhhQAghdAIhmQAOi5hEjNQgLgggohpQgghVgPg2QgiiAAGiEQABgjALgRQALgQAegRQAYgOAWgK");
	this.shape_3.setTransform(66.9744,90.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6).p("AiYgHQCYAdCagZ");
	this.shape_4.setTransform(65.1347,53.9956);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.6).p("Ai3gLQAQAHAUAEQANABAZACQBeAIA0AAQBVABA+gM");
	this.shape_5.setTransform(65.425,42.6924);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6).p("AjSgKQDSAnDTgg");
	this.shape_6.setTransform(65.1545,32.6198);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F1806").ss(2.6).p("AjhgRQBuAfBzADQBzADBvga");
	this.shape_7.setTransform(64.925,22.4659);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6).p("Aj5gRQB6AgB/ACQB/ACB6gc");
	this.shape_8.setTransform(64.9,13.3029);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#070F21").ss(2.6).p("AHJFuQgbAThAARQhrAciUAAQiRAAiHgeIhqgfQgIhWhIi5QhJivgGgYQgUhOgChxQgChkAMgl");
	this.shape_9.setTransform(56.9602,55.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#070F21").ss(2.6).p("AhnGJQgRheA4h5QAOggAlhDQAhg/AQgjQBCiZAGjo");
	this.shape_10.setTransform(112.9167,54.4474);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D438A").s().p("AAcBIQgUACgagBQgmgEhCgJQhKgLgdgDQgSgCgKgOQgJgOADgPQgEgGgBgQQgBgJAIgIQAIgIAJABIAaAAQANgEAlgDQAlgEAbACQAGgQARgDQAfgGAZAGQA1ACAiAIQAWgIATAAQAOABAVAGIAkAKQAIABAaAAQAWAAALAFQAQAIADARQADAPgGARQgHAWgNAKQgNAKgWADIgjADQgMAMgSgKIgHAFQgFAEgIAAQgIAAgFgEIgEgDQgdAQgXAAQgNAAgLgFg");
	this.shape_11.setTransform(65.2708,7.7304);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D438A").s().p("AA9A2Ig3gEIg9AAQgpABgVgBQgJAAgGgGIgDABQgHADgIgEQgHgFgCgHIgPg/QgCgJAGgHQAFgHAJAAQAUgBAPAHIAGgCQAOgCAMACIAaAGQAPAEAUgCIAhgEQAQgCAgABQAfACAQgCIAcgEQAPgBAMADQAHABAFAGQAFAFACAGQAGAfgQAYQgQAYgfAFQgOACgTAAIgXgBg");
	this.shape_12.setTransform(65.5422,48.5096);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CA2C2B").s().p("AADA7QgKAAgHgJIgBAAQgiACgSgBQgfAAgVgHQglgBgegHQgdgHgQgSQgSgRAAgdQAAgLAKgHQAJgHALADQAjALAaANQANgNARAGQAZAKAeAGQAJgIALAAQAzgCA1AMQAbgDAOAAIAFgCQA8gUBFgHQAMgBAHALQAGAJgBAMQgFAdgXAQQgSANghAGQhZAShCAAIgNAAg");
	this.shape_13.setTransform(65.79,18.3286);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CA2C2B").s().p("AAuA8QhQgHgegBQgiABgSgBQgigDgNgPQgJgBgDgHQgUgigEggQgBgJAJgGQAIgGAIACQAYAIANAIQAHgJAKgCQAMgDAMAGQA1AZBSgIICMgPQALAAAHAJQAGAJgCALQgDARgIAOIAAACIgHAVQgDAIgHABQgFABgLgBQggARg8AAIgSAAg");
	this.shape_14.setTransform(65.3447,38.0578);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CA2C2B").s().p("AhKA+QgJAEgJgCQgJgDgFgIQgKgCgEgHQgcguABgqQAAgKAIgEQAUgJAXAPQAegMA3AEQAoACBcgKQANgBAIALQAIAMgDALIgNArQgKAagPALQgSAOgdAEQgOACgkAAIgrAEIgKAAQgUAAgNgHg");
	this.shape_15.setTransform(66.0744,60.665);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CA2C2B").s().p("AgCGvIgcABQgRAAgMADQgNAEgJgIQgSABgLgQIgaAAIgCAAQgKADgIgFIgVgBQgDAAgDgDQg6AEgegOQgFgBgDgDIgDgCQgbAIgQgQQgKgBgJgFQgKAHgKgCQgMgDgCgMQgJg6gJgjQgMgzgSgmQgUgqgIgWQgMgigCggIgWgzQgHgEgCgGIgHgfIgHgdQgIgBgCgFIgGgNQgMgLgFgfQgEgcgBg8IgCgmIABgEQgFgYAAgJQgCgSAGgNQgDg6AIggQAMgsAeALQALAEAPAXQADACADAFIACADQAHgCAEAHIAKAQQAIANAAAFQAAAFgEACQgEADgFgCQgEAMgLAWIgRAeQgMAVgEAMIBGA6QAFACAHAAQANgBAHAMQAHAMgHAKQgZAjgPAmQgDAJgIAEIgDANQAPAQAXAQQARABAFAOIAXAOQAGgBAEAGQAGAAAAAGIAAACIACABQAEACACAGQABAGgDAEQgCAFgFABQgBAbgEAPQgGAXgPAKQAAABgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBIgCgEIgIAVIABABQAGgCAFACIA1ALQAeALgBAbQAAAPgJAbQgMAigCAJIgDAVQAPgEAjgEQAfgDALgEQAHgDAHAEQAHADAEAGQANAIAPAYQAUAdAUAVIAVgOQANgIAHgGQAQgQAJgHQAQgLAOAEQAMADACALIABASIAiAYIALAHQABgHAFgFQAngjARgMQAGgFAHABIAGgNQADgJAJACQAKACgCAJQADAAACACQAGgBAFABQALADAQAOIAZAWIALAGQANgYAVgcQAGgRAKgGQABgFAEgDQAEgDAFACIAPAFQAPgEAPACIALgcQAFgQgFgQQgBgGgJgMQgIgLgCgHQgHgeAegTQARgLAmgQIAIgCIgMg0QgIgegCgVIAAgJQgFgNALgJQAdgXA3gyIgBgEQgFgUABgWIgLgYIgIgPQgFgKABgGQACgSAYgWIAngfIABgBIACgCIgFgFQgOgWgjg8QgEgHABgIQABgIAFgFQAdgaAnACQAsACAEApIABAcIABACQAGBCAAANQgBAxgTAZIgRB2QgDARgRAAIgMAeIgKAfQgHATgJAJQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAIgIAMIgjBWQgEAKgNACQgZBEgPBEQgBAHgGAFQgDARAAANIAAArQgCAXgPAOQgUAVgcgKQgCAJgGAGQgIAGgKAAIgcACQgKABgIgHQgfAShLALIhVAJIgDAAQgPAAgGgNg");
	this.shape_16.setTransform(67.3839,55.421);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D438A").s().p("ABqMAQgqgCgggNQg5AEhfAAQiPAAhUgNQh6gUhag3QgHgEgCgIIgKgIIgIgBQgLAAgEgKQgEgKAHgJIAPgRQACgRAKgXIATglIARglQAKgWAKgNQAGguALgpIANg1IADgsQADhegKhmIgEgnIgRg9QgKgkgLg4QgKgGgEgLQgkhigbhoIgBgBIgHgVQgWgrgIhAIgGgYIABgIIgCgQQgGgbgCgVQgOhDAHgsQAGggAVgWQAQgSAigTQAGgDAHACQAGABAEAFQAHgBAFADQAGAEgBAHQgFA+gIAyQALBCgFAzIAKBBIACAJIAWA7QAWAeAXA+QAXAxAIAeQAqBPgCA7IAIAcIAKAhQAIAWACAPQAHgBAFADIAUAJIgBAAQAEACADAEQAVAKAeAGQARAEAkAGICbAZQAPgLAUACIBIAIQArADAfgEQARgDA0gNQArgKAbgBIgBABQAHAAAJADQAwgIAvgYIACgCIADgfQgCgHACgHIAGgoQgJg5AnhSQAyhbATgpQA0h0AahhQAMgsAKhDIAQhvQABgIAJABQAIAAACAHIADAOQAFgEAEADQASAKAJARQAkArADBCQABA7gZBAIAAABQgMBvgrBaQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQgMAigNAcIgUBBIgFAQQgNA0gUAvQgPBJgLBIQAAAcgCAzIgDBPIgBAPQADADABADQAHAuAeB8QAFASAGARIBJB/QAFAIgHAIIAQACIACACQABAAAAABQAAAAAAAAQAAABgBAAQAAAAAAABQgQANgZAMIgtAUQgEACgEgBQgbAOgyARQg5AUhIAOQgxAIhTAKQgjADgbAAIgPAAg");
	this.shape_17.setTransform(67.1014,90.8407);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt_same, new cjs.Rectangle(-6,-0.8,140.9,169.3), null);


(lib.shirt_12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#384663").s().p("AgfgcIAngMQAOAoAKAYIgmAQQgPgggKgkg");
	this.shape.setTransform(107.675,130.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#384663").s().p("AgjgVIAlgTQALAWAXAmIgkAVQgYgpgLgVg");
	this.shape_1.setTransform(112.975,141.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#384663").s().p("AglgRIAkgXIAnA5IgjAYg");
	this.shape_2.setTransform(119.6,152.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#384663").s().p("AgcAfIARhFIAoALIgQBCg");
	this.shape_3.setTransform(106.35,92.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#384663").s().p("AgXAkQABgkAFgkIApAFQgFAkgBAgg");
	this.shape_4.setTransform(104.35,104.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#384663").s().p("AgZgjIAqgCIAJBDIgpAIg");
	this.shape_5.setTransform(104.6,117.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#384663").s().p("AgfAZIAXhAIAoANIgYBCg");
	this.shape_6.setTransform(118.575,56.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#384663").s().p("AgfAaIAZhBIAmAOIgYBCg");
	this.shape_7.setTransform(114.175,68.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#384663").s().p("AgfAcIAXhDIAnAOIgWBBg");
	this.shape_8.setTransform(109.9,80.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#384663").s().p("AgSAkIgFhCIAqgFIADAjIABAkg");
	this.shape_9.setTransform(125.3,19.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#384663").s().p("AgZAeIAGghIADghIAqADIgFAjIgFAjg");
	this.shape_10.setTransform(124.85,31.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#384663").s().p("AgcAcQALgmAGgdIAoAKQgJAmgJAfg");
	this.shape_11.setTransform(122.35,44.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#384663").s().p("AgfAYQALgZANgmIAnAMQgLAlgNAeg");
	this.shape_12.setTransform(26.65,129.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#384663").s().p("AgjAUQATgfAPgdIAlATQgRAggSAeg");
	this.shape_13.setTransform(21.45,141.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#384663").s().p("AgkARQASgZAUggIAjAXQgMATgaAng");
	this.shape_14.setTransform(14.825,151.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#384663").s().p("AgcgbIAogLIARBFIgpAIg");
	this.shape_15.setTransform(27.925,92.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#384663").s().p("AgXgeIApgFQAGAjAAAkIgpAAQgBgfgFgjg");
	this.shape_16.setTransform(29.9,104.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#384663").s().p("AgZAdIAJhCIAqAEIgKBHg");
	this.shape_17.setTransform(29.65,117.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#384663").s().p("AgfgaIAngNIAYBBIgnAPg");
	this.shape_18.setTransform(15.775,56.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#384663").s().p("AgfgZIAngOIAYBBIgmAPg");
	this.shape_19.setTransform(20.125,68.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#384663").s().p("AgegZIAngOIAWBCIgnANg");
	this.shape_20.setTransform(24.425,80.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#384663").s().p("AgXAlIACglIADgkIAqAGIgFBDg");
	this.shape_21.setTransform(8.95,19.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#384663").s().p("AgVACIgEgjIAqgEIADAiIAGAiIgpAHIgGgkg");
	this.shape_22.setTransform(9.425,32.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#384663").s().p("AgdgdIApgKIASBDIgoAMQgMgogHgdg");
	this.shape_23.setTransform(11.925,44.525);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#5F1806").ss(2.6).p("AJlqnQAeARALAQQAKAQACAkQAGCFgiB/QgPA2ggBVQgpBsgKAdQhDDMANC6QAIBmAgBdQAiBhA5BOQgdAchGAeQiLA8jIAKQhJAEhzAAQhvgBg6gDQjIgKiLg8QgrgTgggVIgYgSQA6hOAhhhQAhhdAHhmQAOi7hEjLQgKgfgphqQgghVgOg2Qgjh/AGiFQABgiALgSQAKgPAfgSQBcg0CEgpQDFg9C/AAQDAAADFA9QCFApBbA0g");
	this.shape_24.setTransform(66.9438,83.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#CA2C2B").ss(3.4).p("AhkAQIA1gTQAegKAQgBQAMAAAQACQArAGAUAH");
	this.shape_25.setTransform(77.9184,119.3386);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CA2C2B").ss(3.4).p("AB0gPQg2gRhFAQQgbAHghALQgQAGgrAS");
	this.shape_26.setTransform(57.0641,122.2245);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#CA2C2B").ss(3.4).p("AgQAvQASATASAHQAYAIATgLQAGgDACgFQADgFgBgHQgDgcgLgRQgMgQgcgQQglgVgvgRQANAwAEAMQAMAeAUAWg");
	this.shape_27.setTransform(74.2597,127.0366);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CA2C2B").ss(3.4).p("AgnAHQgOARgDAMQgCAJACAIQACAJAGAFQALAJAQgEQALgDAMgLQAYgVARgfQASghgDgdQgCgWgQAJQgDABgYAUQgeAcgWAbg");
	this.shape_28.setTransform(62.377,128.2309);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#A3250C").ss(3.4).p("Ag9A1QARgPAsgmQAsgjASgR");
	this.shape_29.setTransform(73,115.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#CA2C2B").ss(3.4).p("ACBiFQgfAghhBmQhSBXgvAu");
	this.shape_30.setTransform(67.6,98.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#A3250C").ss(3.4).p("AhCgzICFBn");
	this.shape_31.setTransform(61.55,115.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#CA2C2B").ss(3.4).p("ACDiIQiECHiHCE");
	this.shape_32.setTransform(66.3535,74.1535);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#A3250C").ss(3.4).p("Ah9iDQB/CCCCB/");
	this.shape_33.setTransform(66.3464,98.9536);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#A3250C").ss(3.4).p("Ah4h+QB6B9B9B6");
	this.shape_34.setTransform(66.8462,73.1538);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B8912A").s().p("AgJgIIANgFIAGAXIgNADg");
	this.shape_35.setTransform(85.25,156.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B8912A").s().p("AgKgIIANgFIAIAWIgOAEg");
	this.shape_36.setTransform(86.525,160.15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B8912A").s().p("AgKgIIANgFIAIAWIgNAFg");
	this.shape_37.setTransform(87.85,164.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B8912A").s().p("AgJgJIAOgDIAFAWIgOADg");
	this.shape_38.setTransform(82.075,143.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B8912A").s().p("AgJgJIANgDIAGAWIgNADg");
	this.shape_39.setTransform(83.025,147.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B8912A").s().p("AgJgJIANgDIAGAVIgNAFg");
	this.shape_40.setTransform(84.075,152);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B8912A").s().p("AgIgKIAOgCIADAWIgOADg");
	this.shape_41.setTransform(79.775,131.225);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B8912A").s().p("AgIgJIANgDIAEAWIgNADg");
	this.shape_42.setTransform(80.425,135.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B8912A").s().p("AgIgJIANgDIAFAWIgOADg");
	this.shape_43.setTransform(81.2,139.575);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B8912A").s().p("AgHgKIAOgBIABAWIgOABg");
	this.shape_44.setTransform(78.375,118.525);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B8912A").s().p("AgIgLIAOAAIADAWIgOACg");
	this.shape_45.setTransform(78.725,122.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B8912A").s().p("AgIgKIAOgCIADAXIgOACg");
	this.shape_46.setTransform(79.2,126.975);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B8912A").s().p("AgHAMIAAgXIAPAAIAAAXg");
	this.shape_47.setTransform(77.9,105.775);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B8912A").s().p("AgHgLIAOAAIABAXIgOAAg");
	this.shape_48.setTransform(77.975,110);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B8912A").s().p("AgHgKIAOgBIABAWIgNABIgCgWg");
	this.shape_49.setTransform(78.1,114.25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B8912A").s().p("AgHAMIABgXIAOAAIgBAXg");
	this.shape_50.setTransform(78.075,93);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B8912A").s().p("AgHALIAAgWIAOAAIAAAXg");
	this.shape_51.setTransform(78,97.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B8912A").s().p("AgGAMIAAgXIAOAAIAAAXg");
	this.shape_52.setTransform(77.95,101.475);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B8912A").s().p("AgHAMIABgXIAOABIgBAWg");
	this.shape_53.setTransform(78.275,80.25);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B8912A").s().p("AgHAMIABgXIAOAAIgBAXg");
	this.shape_54.setTransform(78.225,84.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B8912A").s().p("AgHAMIABgXIAOAAIgBAXg");
	this.shape_55.setTransform(78.125,88.75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B8912A").s().p("AgHAMIABgXIAOAAIgBAXg");
	this.shape_56.setTransform(78.525,67.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B8912A").s().p("AgHAMIABgXIAOAAIgBAXg");
	this.shape_57.setTransform(78.425,71.75);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B8912A").s().p("AgHALIABgWIAOAAIgBAXg");
	this.shape_58.setTransform(78.375,76);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B8912A").s().p("AgHAMIABgXIAOAAIgBAXg");
	this.shape_59.setTransform(78.725,54.75);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B8912A").s().p("AgHALIABgWIAOAAIgBAXg");
	this.shape_60.setTransform(78.675,59);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B8912A").s().p("AgHALIABgWIAOAAIgBAXg");
	this.shape_61.setTransform(78.575,63.25);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#3F7745").s().p("AgHgLIAOAAIABAXIgOAAg");
	this.shape_62.setTransform(85.125,60.325);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3F7745").s().p("AgHgLIAOAAIABAXIgOAAg");
	this.shape_63.setTransform(85.075,56.025);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3F7745").s().p("AgIgIIAOgEQADALAAAOIgOAAQAAgNgDgIg");
	this.shape_64.setTransform(84.875,51.575);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3F7745").s().p("AgGAMIgBgXIAOAAIABAXg");
	this.shape_65.setTransform(85.325,73.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3F7745").s().p("AgGAMIgBgXIAOAAIABAXg");
	this.shape_66.setTransform(85.275,69);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3F7745").s().p("AgHgLIAOAAIAAAXIgOAAg");
	this.shape_67.setTransform(85.2,64.675);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3F7745").s().p("AgGAMIgBgXIAOAAIABAXg");
	this.shape_68.setTransform(85.525,86.275);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3F7745").s().p("AgHgLIAPAAIAAAXIgPAAg");
	this.shape_69.setTransform(85.45,81.975);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3F7745").s().p("AgGAMIAAgXIANAAIAAAXg");
	this.shape_70.setTransform(85.4,77.65);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3F7745").s().p("AgHgLIAOAAIABAXIgOAAg");
	this.shape_71.setTransform(85.725,99.275);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3F7745").s().p("AgHgLIAOAAIAAAXIgOAAg");
	this.shape_72.setTransform(85.65,94.975);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3F7745").s().p("AgGAMIgBgXIAOAAIABAXg");
	this.shape_73.setTransform(85.575,90.625);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3F7745").s().p("AgHAMIAAgXIAPAAIAAAXg");
	this.shape_74.setTransform(85.9,112.25);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3F7745").s().p("AgGAMIgBgXIAOAAIABAXg");
	this.shape_75.setTransform(85.825,107.95);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3F7745").s().p("AgHgLIAOAAIABAXIgOAAg");
	this.shape_76.setTransform(85.775,103.625);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3F7745").s().p("AgHgLIAOAAIABAXIgOAAg");
	this.shape_77.setTransform(86.125,125.225);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3F7745").s().p("AgHgLIAOAAIABAXIgOAAg");
	this.shape_78.setTransform(86.025,120.925);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3F7745").s().p("AgGAMIgBgXIAOAAIABAXg");
	this.shape_79.setTransform(85.975,116.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3F7745").s().p("AgJgJIAOgDIAFAWIgOADg");
	this.shape_80.setTransform(87.575,138.075);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#3F7745").s().p("AgIgKIAOgCIADAXIgOACg");
	this.shape_81.setTransform(86.85,133.85);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3F7745").s().p("AgHgLIANgBIACAXIgNACg");
	this.shape_82.setTransform(86.375,129.575);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#3F7745").s().p("AgKgIIAOgFIAHAWIgNAFg");
	this.shape_83.setTransform(90.95,150.575);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3F7745").s().p("AgKgJIAOgEIAHAWIgOAFg");
	this.shape_84.setTransform(89.675,146.475);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3F7745").s().p("AgJgJIAOgEIAFAXIgNADg");
	this.shape_85.setTransform(88.525,142.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3F7745").s().p("AgKgIIANgFIAIAVIgNAGg");
	this.shape_86.setTransform(95.325,162.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3F7745").s().p("AgKgIIANgFIAIAVIgNAGg");
	this.shape_87.setTransform(93.825,158.75);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3F7745").s().p("AgKgIIANgFIAIAWIgNAFg");
	this.shape_88.setTransform(92.35,154.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B8912A").s().p("AgJAJIAGgWIAOAFIgHAVg");
	this.shape_89.setTransform(47.8,156);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#B8912A").s().p("AgKAJIAHgWIAOAFIgIAWg");
	this.shape_90.setTransform(46.55,160.025);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B8912A").s().p("AgKAIIAIgUIANAEIgIAWg");
	this.shape_91.setTransform(45.2,164.05);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B8912A").s().p("AgJAKIAFgWIAOADIgFAWg");
	this.shape_92.setTransform(50.975,143.675);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B8912A").s().p("AgJAKIAGgWIANADIgGAWg");
	this.shape_93.setTransform(50.025,147.775);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B8912A").s().p("AgJAJIAGgVIANAEIgGAVg");
	this.shape_94.setTransform(48.975,151.875);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#B8912A").s().p("AgIALIADgXIAOACIgDAXg");
	this.shape_95.setTransform(53.275,131.125);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#B8912A").s().p("AgIALIAEgXIANADIgEAWg");
	this.shape_96.setTransform(52.625,135.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#B8912A").s().p("AgIAKIAEgWIAOACIgFAXg");
	this.shape_97.setTransform(51.85,139.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#B8912A").s().p("AgHALIABgWIAOABIgBAWg");
	this.shape_98.setTransform(54.675,118.475);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#B8912A").s().p("AgIALIADgXIAOACIgDAWg");
	this.shape_99.setTransform(54.325,122.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#B8912A").s().p("AgIALIADgWIAOABIgDAXg");
	this.shape_100.setTransform(53.85,126.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#B8912A").s().p("AgGAMIAAgXIANAAIAAAXg");
	this.shape_101.setTransform(55.15,105.775);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#B8912A").s().p("AgHAMIABgXIAOAAIgBAXg");
	this.shape_102.setTransform(55.075,110);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#B8912A").s().p("AgHALIABgWIAOAAIgBAXg");
	this.shape_103.setTransform(54.925,114.225);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#B8912A").s().p("AgGAMIgBgXIAOAAIABAXg");
	this.shape_104.setTransform(54.975,93);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B8912A").s().p("AgHgLIAOAAIAAAWIgOABg");
	this.shape_105.setTransform(55.05,97.25);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#B8912A").s().p("AgHAMIAAgXIAPAAIAAAXg");
	this.shape_106.setTransform(55.1,101.475);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#B8912A").s().p("AgHAMIAAgWIAPgBIAAAXg");
	this.shape_107.setTransform(54.75,80.25);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#B8912A").s().p("AgHgLIAOAAIABAXIgOAAg");
	this.shape_108.setTransform(54.825,84.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B8912A").s().p("AgGgLIANAAIAAAXIgNAAg");
	this.shape_109.setTransform(54.9,88.75);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#B8912A").s().p("AgGAMIgBgXIAOAAIABAXg");
	this.shape_110.setTransform(54.525,67.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#B8912A").s().p("AgHgLIAOAAIABAXIgOAAg");
	this.shape_111.setTransform(54.625,71.75);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#B8912A").s().p("AgHgLIAOAAIABAWIgOABg");
	this.shape_112.setTransform(54.675,76);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B8912A").s().p("AgGAMIgBgXIAOAAIABAXg");
	this.shape_113.setTransform(54.325,54.75);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B8912A").s().p("AgHgKIAOgBIABAWIgOABg");
	this.shape_114.setTransform(54.375,59);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B8912A").s().p("AgHgLIAOAAIABAWIgOABg");
	this.shape_115.setTransform(54.475,63.25);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3F7745").s().p("AgHAMIABgXIAOAAIgBAXg");
	this.shape_116.setTransform(48.775,60.325);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3F7745").s().p("AgGAMIAAgXIANAAIAAAXg");
	this.shape_117.setTransform(48.85,56.025);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3F7745").s().p("AgIAMQABgQACgIIAOAEQgDAKAAALg");
	this.shape_118.setTransform(49.025,51.675);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#3F7745").s().p("AgHAMIABgXIAOAAIgBAXg");
	this.shape_119.setTransform(48.575,73.325);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3F7745").s().p("AgHAMIAAgXIAOAAIAAAXg");
	this.shape_120.setTransform(48.65,69);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#3F7745").s().p("AgHAMIABgXIAOAAIgBAXg");
	this.shape_121.setTransform(48.725,64.675);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3F7745").s().p("AgGAMIAAgXIANAAIAAAXg");
	this.shape_122.setTransform(48.4,86.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#3F7745").s().p("AgHAMIABgXIAOAAIgBAXg");
	this.shape_123.setTransform(48.475,81.975);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#3F7745").s().p("AgHAMIABgXIAOAAIgBAXg");
	this.shape_124.setTransform(48.525,77.675);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#3F7745").s().p("AgHAMIABgXIAOAAIgBAXg");
	this.shape_125.setTransform(48.225,99.275);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#3F7745").s().p("AgHAMIABgXIAOAAIgBAXg");
	this.shape_126.setTransform(48.275,94.975);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#3F7745").s().p("AgHAMIABgXIAOAAIgBAXg");
	this.shape_127.setTransform(48.325,90.65);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#3F7745").s().p("AgHAMIABgXIAOAAIgBAXg");
	this.shape_128.setTransform(48.025,112.25);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#3F7745").s().p("AgHAMIABgXIAOAAIgBAXg");
	this.shape_129.setTransform(48.075,107.95);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#3F7745").s().p("AgGAMIAAgXIANAAIAAAXg");
	this.shape_130.setTransform(48.15,103.625);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#3F7745").s().p("AgHALIABgWIAOAAIgBAXg");
	this.shape_131.setTransform(47.8,125.25);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#3F7745").s().p("AgHAMIABgXIAOAAIgBAXg");
	this.shape_132.setTransform(47.875,120.925);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#3F7745").s().p("AgHAMIABgXIAOAAIgBAXg");
	this.shape_133.setTransform(47.975,116.625);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#3F7745").s().p("AgJAKIAFgWIAOACIgFAXg");
	this.shape_134.setTransform(46.325,138.175);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#3F7745").s().p("AgIALIADgXIAOACIgDAXg");
	this.shape_135.setTransform(47.075,133.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#3F7745").s().p("AgHALIABgXIAPABIgCAYg");
	this.shape_136.setTransform(47.55,129.625);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#3F7745").s().p("AgKAJIAHgWIAOAFIgIAWg");
	this.shape_137.setTransform(42.95,150.725);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#3F7745").s().p("AgKAJIAHgVIAOADIgHAXg");
	this.shape_138.setTransform(44.225,146.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#3F7745").s().p("AgJAKIAGgXIANAEIgGAXg");
	this.shape_139.setTransform(45.375,142.425);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3F7745").s().p("AgKAJIAIgWIANAFIgIAWg");
	this.shape_140.setTransform(38.575,162.95);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3F7745").s().p("AgKAJIAIgWIANAGIgIAVg");
	this.shape_141.setTransform(40.075,158.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#3F7745").s().p("AgKAJIAIgWIANAFIgIAWg");
	this.shape_142.setTransform(41.55,154.85);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#CB645F").s().p("AgfAjIAYhQIAnALIgYBQg");
	this.shape_143.setTransform(101.825,59.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#CB645F").s().p("AggAhIAahPIAnANIgaBQg");
	this.shape_144.setTransform(97.35,74.375);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CB645F").s().p("AgiAkQAIgcAWg2IAnAQQgYA6gFATg");
	this.shape_145.setTransform(92.175,88.525);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#CB645F").s().p("AgVApQACgngBgqIApgCQACAtgCAog");
	this.shape_146.setTransform(110.5321,15.45);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#CB645F").s().p("AgbAkQAJgqAEgmIAqAFQgFAkgJAwg");
	this.shape_147.setTransform(109.275,30.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#CB645F").s().p("AgeAjIAVhQIAoAKQgIAigOAvg");
	this.shape_148.setTransform(106.025,45.225);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#CB645F").s().p("AgogUIAjgYIAuBAIgiAZIgvhBg");
	this.shape_149.setTransform(110.05,154.475);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#CB645F").s().p("AgngXIAlgWIAqBDIgkAYg");
	this.shape_150.setTransform(101.925,142.525);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#CB645F").s().p("AgighIAogKQAGAbAXAnIgkAVQgZgsgIghg");
	this.shape_151.setTransform(94.875,130.15);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#CB645F").s().p("AgggiIAogMIAZBRIgoAMg");
	this.shape_152.setTransform(29.675,60.975);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#CB645F").s().p("AghgiIAogNIAbBQIgnAPIgchSg");
	this.shape_153.setTransform(34.275,75.675);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#CB645F").s().p("AgSAJIgRgmIAmgRIARAnQAKAXAGARIgnAOQgFgPgKgXg");
	this.shape_154.setTransform(39.775,89.975);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#CB645F").s().p("AgUgrIApACQgBArACAoIgqACQgCgpACgug");
	this.shape_155.setTransform(20.7179,15.575);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#CB645F").s().p("AgbgoIApgFQAFAkAJAvIgpAIQgJgtgFgpg");
	this.shape_156.setTransform(22.05,31);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#CB645F").s().p("AgfgkIApgKIAWBRIgoAMIgXhTg");
	this.shape_157.setTransform(25.375,46.05);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#CB645F").s().p("AgoAUQAVgaAZgmIAjAYIgvBBg");
	this.shape_158.setTransform(24.425,155.225);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#CB645F").s().p("AgnAXQAVgeAWgmIAkAWQgYAngTAeg");
	this.shape_159.setTransform(32.575,143.175);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#CB645F").s().p("AgjAZQAYgoAGgeIApAKQgJAigaAvg");
	this.shape_160.setTransform(39.775,130.625);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#384663").ss(2.6).p("AAfoiIALIWQADCqAABWQAABQgKAuQgHAfgcA4QgQAfgeA1");
	this.shape_161.setTransform(62.7055,112.0969);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#384663").ss(2.6).p("AlpkCQAJBiAhCPQAfCFAHgHQB/BfCTA2IEQiFQBHi0AajC");
	this.shape_162.setTransform(67.25,31.8541);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#384663").ss(4.3).p("AgUpWQghCBgGCcQgEBeAGDDQADBhACAqQAFBOAJA9QAMBSAVBLQAcBlApBX");
	this.shape_163.setTransform(96.8436,103.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#384663").ss(4.3).p("AAVpWQAhCBAGCcQAEBcgGDFQgCBZgDAyQgFBNgJA+QgLBNgWBQQgaBggrBc");
	this.shape_164.setTransform(36.629,103.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#10264F").ss(2.6).p("Ag3hPQA2BPA7BK");
	this.shape_165.setTransform(71.756,158.9096);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#CB645F").s().p("AA4LCQg2gMgog/QgQgZgnhYQgdg/gMgsQgThDAKgxQgOhGARhbQABgpAFgZQAHglATgVQAihzAfhbQAOgwAJgZQAOgrAVgXQARhgAbhhIAAgBQAIhSgIhKQgCgPAPgFQAPgFAKAKQA+A5gKB9QgGBEglCBQgNAsgYA/IgpBqQgUA3gkBvQgbDeAxDTIAAAIQAgBIA6BiQAJAPgLANQgIAKgLAAIgHgBg");
	this.shape_166.setTransform(118.6288,85.4595);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#CB645F").s().p("AgzLFIgDABQgTACgJgQQgJgPAEgSQADgRAMgZIASgoQAPgmARgyQAehdAOhGQAEhYgDhZIgIg1QgEgjgEgRQgMg/gVhRQgNgTgMgbIgVgzQgjhhgUhjQgWhuAAhRQgBgsAFgTQAIgiAagQQAFgDAGABIAGgJQAGgIAJACQAKADAAAKQAABxAYB9QAUBnAmCCIAHAVQAFAAACAGIAbBBQAPAnAEAeQASApALAvQAPAmAFAaQARBCAHA0QAEAjAAAKQAAAagMAQQgCADgEgBQgDAsgMA3QgFAXgHAXQgOAXgUApIggA/QgMAXgbAvQgWArgKAfIgHABQgGAAgGgCg");
	this.shape_167.setTransform(16.5225,85.9197);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#122313").s().p("AivJfIAAAAQgEABgFgBQgSgEgMgGQgHACgGgBQg7AHg3gPQgNgDgBgNQAAgNAKgGIADgJIAFgIQAZhMAQhAQAAgHAFgEQAMg1APgzIACgPQABguAOgnIABgFQACgqAGglQABgyAFhEQgBgEAAgFIADh9QgEgFAAgIIAGhvQAAgjgBgqIgNh9QAAgEACgEQgHgogIggQgCgHAHgBIgBgEIgBgBQgHgFAEgJIgEgPQgCgEAFgCQAFgCACAEIAHARQBUAfBaAtIAnATQAYALAMALIAOgKQALgMATgNIAhgVIA5gmQAlgWAbAEIACABIALgIQACgLAMABIACgBQAEgDAEACQAKgFAJAHQAKAGgEAMQgLArgPBTIgEA0IgGA+QADBJAGBaQACAkAFA0IAJBXQAFA5AAAPQABAqgJAfQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgFgJIAEAoQAEAZAQBNQAOBAADAmIAWA2QAMAgAEAXQABAFgCAEQAQAhARAaQAIAMgIAMQgIAMgOABIhCAKQgtAGgagFQgIAFgKAAQgqgFgYgLQgggQgQgfQgFgKAEgJIgJgLQgHgCgEgEQgfgfgPgfIgCgGIgBAAIgSAjQgcA6gVAeIACAAQAEACgBAEIgBABQACAEgCAFQgBAEgDADQgbAXgtAAQgNAAgOgCg");
	this.shape_168.setTransform(66.6863,105.6782);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#10264F").s().p("AhQMPQgLgEgEgJIgVgxQgEgIABgJQgOglgJgfQgCgFABgGQgPgpgKgmQgfhZgHhgQgCgTATgGQgIgrgEgzIAAgCQgHg6AEg4IAAgpQgLgLABgSQABgxAGg2QgChHADg1IABgHQAAhUAPhOQgFgIADgMQAtiDAWhVQADgMAMgFIALggQAPhOgHguQgCgPAKgLQAKgMAPAFQAdAJAQAcQAGgJAMgDQAOgDAJAGQA0AnAqAPIAaAGQAUAEALAUQAoAUgEBeQAAAMgQBxQgdDBhaCgQgVBFgMBAQgVB3ABBYQAAAVAHA2QAFAxAAAbIAAAAQAOA/AhBLQAMAcAyBoQAFALgGAIQgFAIgJABQgEAEgFACIgUAJQgLAHgGABQgIAPgQAGQguAQhPANIgIAAQgFAAgFgBg");
	this.shape_169.setTransform(112.0421,84.4415);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#10264F").s().p("AAiMUQgZgFgagQQgQgGgLgNIgCgDIgKgBQgFAAgGgGQgdgJgdgZIgBgBIgMADQgMACgGgKQgGgKAIgKIATgXQABgQALgZIASgnQANgeAHgHIAUhLQALgsALg6QgBggAGg2IAHg6QAAgugPhGIgYhyIgLgfIgshkQgbg9gKgpIgdhsQgRhBgGgsQgHg9AAgjQAAg+AUgeQAHgKAJgDQAXgnBRglQAZgMBTgfQAfgLARAIQATAJgCAgIgDAoQAQAFACAOQAMBXAPBZIAAACQAJARAHAbQAGAEAEAFQARAYAGAsQAEAZAFAxQAJBEAGBEQAGALAAANQAEA0ACCBIADBVQgBAygRAgIgEAGIAAADQABAEAAAFQgKDdg7DSIgFAIIgJAkIgMAyQgKAhgPALQgMAIgRAAQgIAAgKgCg");
	this.shape_170.setTransform(22.1984,84.5609);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#EFF1EC").s().p("ABLM9QgTAAgigDIgOgBQg0AKg8gOQhbAIhogXQhEANhWggQg/gYhNgyQgFgDABgIQgEgGABgGQAAgGAFgFIAXgZQAhhCAbhPQAHgjAKgeQgCgJAAgGIAKiFQAFhNgBg5QgEghgCgbQgHgjgJglIgShDQgMgpgEgbQgcg+gVg5IgCgCQgkhGgKhHIAAgKIgCgIIgQhwIgFgVQgFgUAJgUQgGghABgSQABgdAPgPQAFgQANgJQA4goBKgbQA7gUBTgQQAigOAkACIAIgCIALAAQBSgeBwgGQAVgBAeACIAyAEQATACAggBIAygBQAeABAuAIIBLAMQAuAdBdAFQAaAMA2AWIAzAbIACADQAXgBATAIQAUAKAJATQAGgCAFADQAJAGAFAOQAEAMAAAMIAAAIQADAggDAjQAKAagDAmQgCAUgJAsIgHAmQgFAVgIAOQgFAYgIAOQgKA9gFASQgMAtgWAaIgQA0QgIAdgUBiQgRBQgSAtIgJBwQgBAYACAxIAABKQAGARAKAkIAPA1IASAtQAKAbAEATIANAXQAFAEAFAJIAIAOQAMATASAZQADAEgCAFQgBAEgFACIAAAEQgEAMgTABQgJAKgTAJIggAOQgeANgZAGQgOAEgRABIgLAEQgrATgZgBIgEADQivALheAPg");
	this.shape_171.setTransform(67.0067,83.7333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt_12, new cjs.Rectangle(-1,-1.2,141,170.89999999999998), null);


(lib.shirt_11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F1DFC7").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape.setTransform(67.4,124.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1DFC7").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEQAAAFgDADQgEAEgFAAQgEAAgDgEg");
	this.shape_1.setTransform(82.5,100.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1DFC7").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDADQgEAEgFAAQgEAAgDgEg");
	this.shape_2.setTransform(55.05,103.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1DFC7").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_3.setTransform(90.2,79.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1DFC7").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_4.setTransform(42.35,80.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006E91").s().p("AgPAQQgHgHAAgJQAAgJAHgGQAHgHAIAAQAKAAAGAHQAHAGAAAJQAAAJgHAHQgGAHgKAAQgIAAgHgHg");
	this.shape_5.setTransform(66.85,125.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006E91").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgJAAgGgHg");
	this.shape_6.setTransform(89.575,80.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006E91").s().p("AgPAQQgHgHAAgJQAAgJAHgGQAHgHAIAAQAKAAAGAHQAHAGAAAJQAAAJgHAHQgGAHgKAAQgIAAgHgHg");
	this.shape_7.setTransform(81.8,101.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006E91").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAGAFQAFAGABAHQgBAIgFAFQgGAHgIgBQgHABgGgHg");
	this.shape_8.setTransform(54.7,103.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006E91").s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_9.setTransform(41.675,81.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2E2014").s().p("AgqArQgSgSAAgZQAAgYASgSQASgRAYAAQAZAAASARQASASAAAYQAAAZgSASQgSARgZAAQgYAAgSgRg");
	this.shape_10.setTransform(52.65,106.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2E2014").s().p("AgqArQgRgSAAgZQAAgYARgSQASgSAYAAQAZAAASASQARASABAYQgBAZgRASQgSASgZAAQgYAAgSgSg");
	this.shape_11.setTransform(65.55,128.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2E2014").s().p("AgqArQgSgSAAgZQAAgYASgSQASgRAYAAQAZAAASARQASASAAAYQAAAZgSASQgSARgZAAQgYAAgSgRg");
	this.shape_12.setTransform(80.075,103.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2E2014").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQARASABAYQgBAZgRASQgSARgZAAQgYAAgSgRg");
	this.shape_13.setTransform(40.85,84);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2E2014").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSg");
	this.shape_14.setTransform(88.075,83.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2E2014").s().p("AgagfIApgGQADAbAJAmIgoAKQgIgjgFgig");
	this.shape_15.setTransform(110.325,129.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2E2014").s().p("AgfgaIAogNQAOApAJAVIgnARQgOgjgKgfg");
	this.shape_16.setTransform(113.575,140.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2E2014").s().p("AgjgUIAmgTQAHAPAZApIgjAYQgYgpgLgUg");
	this.shape_17.setTransform(118.75,152.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2E2014").s().p("AgZAfQAFgkAGgfIAoAHQgGAjgEAfg");
	this.shape_18.setTransform(110.275,92.175);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2E2014").s().p("AgXAiIAFhEIAqADIgFBDg");
	this.shape_19.setTransform(108.9,104.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2E2014").s().p("AgWgiIApgBQABAnADAcIgpADQgEgmAAgfg");
	this.shape_20.setTransform(108.825,116.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2E2014").s().p("AgdAbIAThBIAoAMIgUBBg");
	this.shape_21.setTransform(119.35,56.525);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2E2014").s().p("AgdAbIAThBIAoAMIgTBBg");
	this.shape_22.setTransform(115.85,68.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2E2014").s().p("AgbAdQAGgeAKgkIAnAKIgPBBg");
	this.shape_23.setTransform(112.7,80.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2E2014").s().p("AgTAiQAAgegDgiIAqgEQADAkgBAhg");
	this.shape_24.setTransform(125.4536,20.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2E2014").s().p("AgZAdIAJhAIApADIgIBFg");
	this.shape_25.setTransform(124.85,32.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2E2014").s().p("AgcAbIAQhAIApAJIgRBCg");
	this.shape_26.setTransform(122.575,44.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2E2014").s().p("AgUAgIAAhAIApABIAAA/g");
	this.shape_27.setTransform(95.975,121.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2E2014").s().p("AgVAgIAChAIApACIgCA/g");
	this.shape_28.setTransform(96.2,110.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2E2014").s().p("AgVAgIABhAIAqACIgBA/g");
	this.shape_29.setTransform(96.45,98.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2E2014").s().p("AgdgaIApgKQAHAcALAfIgoAOQgJgdgKgig");
	this.shape_30.setTransform(99.75,156.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2E2014").s().p("AgYgdIAogFQAEAeAFAfIgoAIQgHgmgCgag");
	this.shape_31.setTransform(97.35,145.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2E2014").s().p("AgWgfIAqgBIADA+IgqADIgDhAg");
	this.shape_32.setTransform(96.25,133.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2E2014").s().p("AgYApIAIhVIApAEIgIBVg");
	this.shape_33.setTransform(98.625,69.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2E2014").s().p("AgaAoIALhUIAqAFIgLBVg");
	this.shape_34.setTransform(100.35,54.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2E2014").s().p("AgbAnIAOhUIApAHIgOBUg");
	this.shape_35.setTransform(102.575,39.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2E2014").s().p("AgXAoIAFhSIApACIgEBTg");
	this.shape_36.setTransform(78,120);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2E2014").s().p("AgZAmQAGgkAEgtIApAEQgGA5gEAag");
	this.shape_37.setTransform(76.75,134.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2E2014").s().p("AgdAiQAMgtAGgiIApAJQgIAqgLAog");
	this.shape_38.setTransform(74.225,149.775);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2E2014").s().p("AgagmIApgGIAMBTIgpAFg");
	this.shape_39.setTransform(75.4,75.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2E2014").s().p("AgaglIApgGIAMBSIgpAFg");
	this.shape_40.setTransform(77.55,89.925);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#2E2014").s().p("AgVApQACgxgBggIAqgBQABAigDAxg");
	this.shape_41.setTransform(78.6143,104.85);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2E2014").s().p("AgYAhIAEgjIAEgjIApADIgHBIg");
	this.shape_42.setTransform(50.4,133.575);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2E2014").s().p("AgbAfQADgLAEgXIAHgkIApAHIgHAjIgHAlg");
	this.shape_43.setTransform(48.575,146.425);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2E2014").s().p("AgeAbIALghIAKgiIAoALIgVBGg");
	this.shape_44.setTransform(45.5,159.075);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2E2014").s().p("AgUAkIAAgjIgBgjIApgCQADAkgBAlg");
	this.shape_45.setTransform(51.8143,94.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2E2014").s().p("AgVAkIABhIIAqABIgBBIg");
	this.shape_46.setTransform(51.775,107.375);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#2E2014").s().p("AgWAjIADhHIAqABIgEBJg");
	this.shape_47.setTransform(51.375,120.45);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2E2014").s().p("AgdgcIAogMQANAsAGAbIgpAJQgIghgKgjg");
	this.shape_48.setTransform(46.175,55.65);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2E2014").s().p("AgagfIAogIQAGAbAHAtIgpAGIgMhGg");
	this.shape_49.setTransform(48.875,68.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2E2014").s().p("AgYggIAogFIAJBHIgpAEg");
	this.shape_50.setTransform(50.8,81.25);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2E2014").s().p("AgZAfQAEgWAFguIAqAEIgKBHg");
	this.shape_51.setTransform(31.175,130.475);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2E2014").s().p("AgcAdIAQhDIApAIIgIAjIgJAjg");
	this.shape_52.setTransform(28.875,143);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2E2014").s().p("AgfAaIAXhCIAoANIgYBEg");
	this.shape_53.setTransform(25.275,155.275);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2E2014").s().p("AgZgeIApgHIAKBGIgpAFIgKhEg");
	this.shape_54.setTransform(30.85,91.975);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2E2014").s().p("AgUACIgCgiIAqgEIABAkQACARAAATIgqABQAAgSgBgRg");
	this.shape_55.setTransform(32.1,104.675);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#2E2014").s().p("AgVAiIAChGIAqABIgBAjIgDAkg");
	this.shape_56.setTransform(32.25,117.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2E2014").s().p("AgdgdIAogLQAIAiALAiIgnAMQgPgwgFgVg");
	this.shape_57.setTransform(21.275,54.75);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#2E2014").s().p("AgegZIAngPIAWBFIgoALIgVhBg");
	this.shape_58.setTransform(25.15,66.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#2E2014").s().p("AgcgcIApgLIAQBGIgpAJIgQhEg");
	this.shape_59.setTransform(28.525,79.275);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2E2014").s().p("AgUgkIAqACIgBBGIgqAAg");
	this.shape_60.setTransform(15.825,16.35);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#2E2014").s().p("AgYgiIApgDQADAgAFAmIgqAFQgGg5gBgPg");
	this.shape_61.setTransform(16.4,29.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#2E2014").s().p("AgbgfIApgHIAOBEIgpAKg");
	this.shape_62.setTransform(18.225,42.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#5F1806").ss(2.6).p("AjoEDIFrjpQAVgOAHgJQAIgJAIgZQAlh0APh4");
	this.shape_63.setTransform(85.7188,34.5828);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#5F1806").ss(2.6).p("AhkMSQCCgVA4gqQAVgQAgg2QBKh6BOkXQBBjoAQiCQiRgeiphiQhmg8i2iDQgSgOgggbIgcgZQhCiQgDie");
	this.shape_64.setTransform(61.5163,87.8274);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#5F1806").ss(2.6).p("AJlqnQAeARALAQQAKAQACAkQAGCFgiB/QgPA2ggBVQgoBpgLAgQhEDNAOC5QAIBmAgBdQAhBhA6BOQgdAchGAeQiLA8jIAKQhJAEhzAAQhvgBg6gDQjIgKiLg8QgrgTgggVIgYgSQA6hOAhhhQAghdAIhmQAOi7hEjLQgKgfgphqQgghVgOg2Qgjh/AGiFQABgiALgSQALgQAegRQBcg0CEgpQDFg9C/AAQDAAADFA9QCFApBbA0g");
	this.shape_65.setTransform(66.6938,83.375);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#B8912A").ss(2.6).p("ABBroQANAwgEA+QgCAqgNBEQgHAng8EYQgqDCgOB+QgrF+CCD/");
	this.shape_66.setTransform(109.85,84.4779);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#B8912A").ss(2.6).p("AAYCIQgFAAgCgIQgPg6gJhIQgIhFgBhA");
	this.shape_67.setTransform(86.25,145.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#B8912A").ss(2.6).p("AAChxQgGAkADBLIAECA");
	this.shape_68.setTransform(82.5794,58.2147);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#B8912A").ss(2.6).p("AgyoVQAZA2ASBHQAJAqAPBYQAQBcAHAzQAKBPAABAQgBBIgOBhQgaC5g1C1");
	this.shape_69.setTransform(61.234,110.5213);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#B8912A").ss(2.6).p("AhHqIQAVAxAQBAQAMArAPBKQAiClAQBoQAXCUAEB7QALE0hmDj");
	this.shape_70.setTransform(35.6787,97.8759);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#B8912A").ss(2.6).p("AhUrMQgWCuA2CnQAFAPAkBgQBjEIADDhQACCCgeB4QgfB/hABo");
	this.shape_71.setTransform(14.7128,86.0825);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#5F1806").ss(2.6).p("AiwgrQBRAyBfAVQBeAVBfgL");
	this.shape_72.setTransform(93.3358,158.2356);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#CA2C2B").s().p("AjXMZIhJgGQg4gIgTgRIgGAAIgBgBIgBAAQgUgBgVgGQg8gNhAgaQgFABgDgCQgbgLgQgMQgJgGgCgKQgDgKAFgJQAvhSAnh9QAFgOAGgcIAKguQAFhJAKg9IgBgzIgIg1IgShvIgEgOQgNgmgGgmIgkhVQgTgwgJgmQghhOgRhOQgCgHACgGQgGgcgCgQQgGgGAAgKIgDhuIgDgqQgBgbAEgPQAJgeAogUQAQgIA0gSQAIgDAIAEQATgRAdACQAFgLAGgIQAKgQAUAFQAVAEgDAUIgFA/QAJAhAKBCIASA6IANAoQAHAZAEARIArAlIBgA9IBBApQAnAaAWAXIA2AeQBKhBB6hMQBGgrCLhTQAehxAXiOQABgIAIgBQAHgBAFAGQAYgDAeANIAzAYIAwARQAcAMAMARQAbAeAABMQAAAmgKBDQgHA3gTBFIgkB6QgIAigJAbQgCAMgLAEIgdBjQgJAegKBHQgJBCgMAiIgFAHIgDBGQgCAjAABIIABADQANARAAAXIABAAQACAWgCAZIAAADIAHAhIAIAiQAtAjAdBZQAbBZgkgFIgBACQgRAagtARQgqAQgkgDIgaAHQgoAIgZAAQgsAAgSgTQhZgIhUg8QgFgDgDgGIgIgGQglA/gtALQgpAng/AMQgfAGgpAAQgWAAgZgBg");
	this.shape_73.setTransform(66.8063,86.497);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EFF1EC").s().p("AiyM+QjIgKiLg8QgrgTgggVIgYgSQA6hOAhhhQAghdAIhmQAOi7hEjLQgKgfgphqQgghVgOg2Qgjh/AGiFQABgiALgSQALgQAegRQBcg0CEgpQDFg9C/AAQDAAADFA9QCFApBbA0QAeARALAQQAKAQACAkQAGCFgiB/QgPA2ggBVQgoBpgLAgQhEDNAOC5QAIBmAgBdQAhBhA6BOQgdAchGAeQiLA8jIAKQhJAEhzAAQhvgBg6gDg");
	this.shape_74.setTransform(66.6938,83.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt_11, new cjs.Rectangle(-6.3,-1.2,146,169.29999999999998), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A3250C").s().p("AiRDrQgFgCgBgDIgHgRQgGgDgDgFQgWgpgGhRQgCgiADgOQgFgzAEhJQABgpAPgXQARgbAlgKQAKgDAJAAIAlgcQAVgSAYAHQAYAGAJAaQAPAmA1BOQAxBHANAuIANAOQAJAHAGALQADAGAAAHQAMADAIAFQAHAFABAHQAAAHgEAGQgMAQgVAFIgoAHQgrAKgpAOQgjAMg1AXIhXAlIgEAAIgDAAg");
	this.shape.setTransform(19.7759,23.5395);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,39.6,47.1), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A3250C").s().p("ACLDYQhTgniGgZIgRgBQgKgBgIgEIhYgOQgHgBABgIQACgIAHAAIAHABIABgDQAJgZASgTIAOgYIAEgEIADgEQAggsAVgsQAfgwAPgbQAXgqAJgjQAEgIAJgFQAKgEAIADIBxAnQBEAgAFAzQAGA/gOBXQgHAsgXBpQgCAKgJAEIgHABQgGAAgFgDg");
	this.shape.setTransform(20.7611,21.8707);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,41.6,43.8), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A3250C").s().p("AikCvQgOgBgVgGQgXgBgdgDQhUgFg8gQQhGgTgpgPQg/gYgmgfQgCgBgBgDQgHgJAGgKIA1hUQAfgyAPgoQAEgKAJgEQAJgEAKAFQAzAWBFAPQArAJBSANQBTANAnAEQBEAIA2AAQBtgBCJghQAhgIDPg9QAOgEAMAJQAMAJgBAOIAAAGQAIAFACAJQAKA0AbArIAVAfQALAQADAQQACAIgDAIQgDAIgHAEQhcAyhxAcQhhAYh3AKQg0AFhHABIh5ABIgeAAQgxAAgXgDg");
	this.shape.setTransform(61.4397,17.7496);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,122.9,35.5), null);


(lib.shirt_09 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#B8912A").ss(3.4,1).p("AgXg9QARBAAeA7");
	this.shape.setTransform(71.125,147.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B8912A").ss(3.4,1).p("AAKhRQAGBSgaBR");
	this.shape_1.setTransform(66.7545,149.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B8912A").ss(3.4,1).p("AAKAxQAOATANgHQAEgCACgGQAHgMgBgPQgBgPgHgMQgMgUgcgYQgigcgNAUQgMAUBEBSg");
	this.shape_2.setTransform(72.6858,141.3819);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B8912A").ss(3.4,1).p("AgpAyQgDAcAPAFQANAEAPgRQAXgeAOgrQARg2gYgWQgcASgTAnQgSAigFAmg");
	this.shape_3.setTransform(63.3496,142.5058);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B8912A").ss(3.4,1).p("AhnAAIDQAA");
	this.shape_4.setTransform(68.3,133.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FBC85B").ss(3.4,1).p("ABfl7IisC5ICWDRIiiDDIC6Cr");
	this.shape_5.setTransform(68.1498,94.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#B8912A").ss(3.4,1).p("AhTmBIClC5IiWDYICfC8Ii7C2");
	this.shape_6.setTransform(66.7391,94.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#B8912A").ss(3.4,1).p("AhNAAICbAA");
	this.shape_7.setTransform(67.325,56.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6).p("AgYAWQgGguAOglQAIgTAMgBQAKAAAHALQAEAIABAOQAEA4gSAzQgNAlgLgXQgHgQgFgjg");
	this.shape_8.setTransform(109.435,119.9766);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5F1806").ss(2.6).p("AAVBJQgvg3gahDQgMgeAOgNQAGgGAIAAQAIgBAIAEQAMAGAKARQAkAxAMA5QABAHAFAXQAEAWgEAHQgHAMgKgKQgMgQgGgGg");
	this.shape_9.setTransform(92.6105,85.4869);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6).p("AA7ggQANgXgLgKQgFgFgKAAQgYgBgWATQgQAMgSAbQgTAbgJAgQgMAoAngYQA9goAhg2g");
	this.shape_10.setTransform(104.9359,102.6611);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5F1806").ss(2.6).p("AgGAoQgdgFgNgIQgXgNgCgVQgBgMAGgKQAHgKALgCQAGgBAJABQAdAEAbAMQAjAPANASQAQAZgkAHQgbAFgcgFg");
	this.shape_11.setTransform(95.7002,121.28);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(2.6).p("AAvBNQAQgiAEgmQADglgKgkQgBgFgCgCQgDgCgFABQg1AIgfAfQgSASgIAVQgIAYAEAX");
	this.shape_12.setTransform(106.9425,60.4833);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5F1806").ss(2.6).p("AAagXQgGgTgIgJQgNgPgPAEQgIADgGAGQgJAKgCAPQgCAOAFANQAHASAUAXQAXAaAQgDQATgFgGgjQgCgJgNglg");
	this.shape_13.setTransform(97.8543,68.7022);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5F1806").ss(2.6).p("AATggQALgIAIABQAOAAAGAQQAEAJgBARQgBAPgEAGQgLASgogCQgUgBgLAAQgTgBgKgGQALgSAWgSQAWgSATgKg");
	this.shape_14.setTransform(107.4392,72.5587);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#5F1806").ss(2.6).p("ABeFMIiBjFQgWghgJgRQgPgdgGgZQgIgjAIhFIAekI");
	this.shape_15.setTransform(107.1444,109.5295);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5F1806").ss(2.6).p("AAZAWQAGgugOglQgIgTgMgBQgKAAgHALQgEAIgBAOQgEA4ASAzQANAlALgXQAIgQAEgjg");
	this.shape_16.setTransform(25.565,119.9766);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#5F1806").ss(2.6).p("AgUBJQAwg3AZhDQAMgfgOgMQgFgGgJAAQgIgBgIAEQgMAGgKARQgjAvgNA7QgBAHgFAXQgEAWAEAHQAHAMALgKQAMgQAFgGg");
	this.shape_17.setTransform(42.3895,85.4869);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#5F1806").ss(2.6).p("Ag6ggQgNgXALgKQAFgFAKAAQAYgBAWATQAQAMASAbQATAbAJAgQAMAogngYQg9goghg2g");
	this.shape_18.setTransform(30.0641,102.6611);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#5F1806").ss(2.6).p("AAHAoQAcgFAOgIQAXgNACgVQABgMgHgKQgHgKgKgCQgGgBgKABQgdAEgbAMQgjAPgMASQgQAZAkAHQAaAFAdgFg");
	this.shape_19.setTransform(39.3105,121.28);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#5F1806").ss(2.6).p("AguBNQgQgigEgmQgDglAKgkQABgFACgCQADgCAFABQA1AIAfAfQASARAIAWQAIAYgEAX");
	this.shape_20.setTransform(28.0575,60.4833);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#5F1806").ss(2.6).p("AgZgXQAGgTAJgJQALgPAQAEQAIADAGAGQAJAKACAPQACAOgFANQgHASgUAXQgXAagQgDQgTgFAGgjQACgJANglg");
	this.shape_21.setTransform(37.1457,68.7022);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#5F1806").ss(2.6).p("AgSggQgLgIgIABQgGAAgGAFQgFAEgDAHQgEAJABARQABAOAEAHQALASAogCQAIgBAXAAQAUgBAJgGQgLgSgWgSQgWgSgTgKg");
	this.shape_22.setTransform(27.5539,72.5587);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#5F1806").ss(2.6).p("AhdFMICBjFQAWghAJgRQAPgdAGgZQAIgjgIhFIgekI");
	this.shape_23.setTransform(27.8556,109.5295);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#5F1806").ss(2.6).p("AgTMGIiulQQgRgfgEgSQgDgRAAgZIAAoHQAAgyAFgbQAGgrAUgcQAVgdAqgVQAagNAzgRQA8gTAfgOQAxgXAggdQA5g2AVhPQAShEgGhb");
	this.shape_24.setTransform(97.0612,88.3984);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#5F1806").ss(2.6).p("AAVMIQAfg8A3hsQA5hxAdg3QAQgfAEgSQADgOAAgcIAAoHQAAgygEgbQgHgrgTgcQgWgdgpgVQgagNg0gRQg7gTgggOQgxgXgfgdQhnhhAQjP");
	this.shape_25.setTransform(38.3674,88.1633);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3F7745").s().p("AgFBMQgIgBAAgJIgCgbQgGgCgCgFQgNgkAWgdQAAgQACgHQACgNAKgEQAagLACAyQABAPgFAwQgBAMgIAEIgIADIAAAOQAAAFgDABIAAABQgCAHgFAAIgCAAg");
	this.shape_26.setTransform(109.4069,119.5239);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3F7745").s().p("AAxAlQgJgCgnAAQgcgBgRgGQgRgHgIgQQgJgQANgPQASgVA8AVQAeAKAPAQIABAAQATACgFATQgFAQgOAAIgFAAg");
	this.shape_27.setTransform(95.4897,121.1016);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3F7745").s().p("AgjBCQgGgBgEgGQgGADgEgDQgFgEACgGQAEgSAPgWQAIgLAUgYIAXgbQARgQAPAFQAQAGgBAPQAAAMgLANQgoAvgfAgQgFAFgGAAIgBAAg");
	this.shape_28.setTransform(105.1091,102.3661);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3F7745").s().p("AAYBYQgfgtgagtIgUgmQgJgWAEgTQACgLAMgDQAMgDAIAIQALAKADAOQAHACACAFQAOAZARAkIAcBBQAIASgQAJQgGADgFAAQgIAAgHgJg");
	this.shape_29.setTransform(93.338,85.5494);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3F7745").s().p("AgmAmQgIADgIgDIgIgFQgHgCgBgGQgCgFADgGQABgMALgHQApgeAogFQAUgDANAHQAQAHgCAUQgBAQgQANQgNALgTAGQgNAFgQAAQgOAAgRgEg");
	this.shape_30.setTransform(39.5564,121.2036);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3F7745").s().p("AACBKQgLgHgFgSIgGgeQgHgmAFgtQABgKALgBQAKAAAAALIAAACQAEAAADADQAJAJADARIADAeQAFAdgDAjQgBAIgHAFQgDACgEAAQgEAAgDgCg");
	this.shape_31.setTransform(25.783,119.8875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3F7745").s().p("AAgBEQgkgogNgQQgbgggQgcQgFgJAGgJQAHgJAKADQAJADAFAEQADADAFAHQALgEAHAJQAcAdANATQAWAeACAbQABAMgMAFQgFACgDAAQgHAAgFgGg");
	this.shape_32.setTransform(30.52,103.0801);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3F7745").s().p("AgwBbQgLgHAFgLIAHgPQgCgHACgFQAUhJAtg6QAFgHAHAAQAGAAAGAGQAMABACAOQABASgHATQgFAMgMAWIgRAhQgMAUgNAEQgEAIgHADIgKASQgEAHgGAAQgEAAgEgCg");
	this.shape_33.setTransform(42.1094,85.4174);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C6EAE6").s().p("AgVA3QgEAAgCgEQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBABAAQAAgBAAAAIAEgPQACgaAJgSIgBgHQAAgKAFgIQAFgGAHgDQAFgFAIgCQAJgCADAHQAFAJABAJQACADgBADIAAACIAAABQABADgBADIgFAQQgIAbgPAUQgHALgLgFQgCACgEAAIgBAAg");
	this.shape_34.setTransform(37.2612,68.6319);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C6EAE6").s().p("AAcAjQgNgDgNgHQgEADgGABQgJABgHgEQgIgEgEgHQgLgIAAgNQABgOALgHQAEgEAFAAQAFgFAHACQAHABAEAGQAdAFAFAQQABADgBADQAEAAADADIACADQALAIgFAMQgDAKgKAAIgFgBg");
	this.shape_35.setTransform(26.7175,72.9863);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C6EAE6").s().p("AgiAlQgIgFgCgJQgHAAgCgIQgDgIAHgEQAKgEARgQQAPgQAKgEQANgGANAEQANADAIALQAHAKgCANQgDALgKAIQgKAIgPACIgGABQgMAKgPADIgFABQgHAAgGgFg");
	this.shape_36.setTransform(108.1984,72.7819);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C6EAE6").s().p("AALA2QgXgQgNgZQgNgYACgcQABgJAIgEQAIgFAHAEQANgIAIANQAEAHADAMIAGATIAOAsQAEALgKAHQgGAFgFAAQgEAAgEgDg");
	this.shape_37.setTransform(98.2316,68.9585);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#006E91").s().p("AghBjQgKgDgEgKQgHgUgCgPQgFgGgBgJQgBgRAGgQIAAgCQgEgaAWgYQASgUAegOIAUgNQANgHAKAKQAKAEAAALQADBCgRAlQgHANgOALQgOASgdAcQgGAFgGAAIgFgBg");
	this.shape_38.setTransform(106.6648,62.9759);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#006E91").s().p("AAeBhQgNAAgFgNIgIgRQgEAFgIAAQgHgBgHgFIgNgNQgLgBgBgKIgBgJIgEgjIgDgkIABgDIAAgEQgIgVAKgUQADgGAGgCQAHgBAFAEQAPgLALAOQAIALAKAPIAYATQAMAOAFASQAHAUgDAbQgCATgJAdQgEANgMAAIgBAAg");
	this.shape_39.setTransform(28.2672,62.9962);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#5F1806").ss(2.6).p("AJlqnQAeARALAQQAKAQACAkQAGCFgiB/QgPA2ggBVQgoBpgLAgQhEDNAOC5QAIBmAgBdQAhBhA6BOQgdAchGAeQiLA8jIAKQhJAEhzAAQhvgBg6gDQjIgKiLg8QgrgTgggVIgYgSQA6hOAhhhQAghdAIhmQAOi7hEjLQgKgfgphqQgghVgOg2Qgjh/AGiFQABgiALgSQALgQAegRQBcg0CEgpQDFg9C/AAQDAAADFA9QCFApBbA0g");
	this.shape_40.setTransform(66.7438,83.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#B8912A").ss(2.6).p("AC7rqIAqB8IgqAyIAGBnIhZAZIgUBFIhKgFIgqBJIhOgWIgQBNIhHAFIAgA9Ig4A+IA5BiIg5BGIBQBcIhTBQIBSBLIhDBOIA+BDIgKBRIBDAqIgDBMIBDAFIgSBRIBLAQIAZhXIBQArIAdhSIA2AmIgRhL");
	this.shape_41.setTransform(101.0894,86.5901);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#B8912A").ss(2.6).p("ABPkyIg0BDIAdBgIg5BEIAWBXIg4A2IATBPIg7AyIAPB3");
	this.shape_42.setTransform(125.6777,48.7883);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#B8912A").ss(2.6).p("Aiyr0Ig0CQIAqAyIgGBnIBZAZIAUBFIBKgFIAqBJIBOgWIAQBNIBHAFIggA9IBCA+IhDBiIA5BGIhQBcIBTBQIhSBLIBDBOIg+BDIAUBRIhNAqIADBMIhDAFIASBRIhLAQIgZhXIhQArIgdhSIhAAmIAHhL");
	this.shape_43.setTransform(34.1488,85.5784);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#B8912A").ss(2.6).p("AhJk3IA0BDIgdBgIA5BEIgWBXIA4A2IgTBPIAxA8IgPB3");
	this.shape_44.setTransform(8.8132,49.2883);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CA2C2B").s().p("AhcC8QgGgFgIgNQgqhBg3htQgGgHgEgJIgDgMIgOgcQgIgCACgHQABgIAIAAQBPgBBXgjQA4gXBfg3QAMgHANAHQAMAHAAAPQACBMAXA4QAaATACAbIAPAYIAAAAIACAGIAJANQAFAGAEAAQAOABAGANQAGAOgLAJQgqAjgoAHIgXADIgYADQgiAVgnALQgoALgggEIgIAEQgNAIgGABIgCAAQgLAAgIgHg");
	this.shape_45.setTransform(105.0082,144.8306);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CA2C2B").s().p("ABXCzQgPgDgVgKIgkgQQgagJgxgKIg6gHQglgGgSgOQgKgJgFgJQgWADgNgRQgNgSALgUIAkhGQAVgsASgaIAAgEQAIgaAFgKIACgKIABgCIgBgBQgHgIAIgIQAHgHAHAIQASATASALIAUAJQANAFAHAEQAAAAABAAQAAABABAAQAAABAAAAQABABAAAAQAeAOAMAFQAYAJAXADQAiAFApgEIAkgBQAXAAANgEQARgEAMAPQAMAOgKAQQgNAVgUAmQgWAsgKAQQgEASgBAaQgKAHgLAPIgPAYIgOAZIgIABIgLgBg");
	this.shape_46.setTransform(29.1252,147.8386);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CA2C2B").s().p("AkUDoQgHgUANgNQAuguA+gLQAcgWA7gWQBRggA2g9QBBhKAPhIIALgvQgJgLgDgWQgBgPAMgIQAMgHANACQAZADAVAVQAEAEADAGIALADQATAJAJAWQAKAWACAkIAAA8QgDCHguBlQgXAxgyAMQgQAEhUABIiZACQhaACg/AHIgEAAQgQAAgHgSg");
	this.shape_47.setTransform(104.5211,37.7119);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CA2C2B").s().p("AioEVQgWgIgLgTQgLgSACgXQAAgGADgIQgMgMgEgZIgFgIQgEgEAAgFIgCgJQgSg3gJgzQgihUANhRQACgSAIgSIgCgHQgCgMAGgLQAFgKALgEQAVgrAhAJIAngZQAPgIAPALQAPALgFARQgLAhANArQADAKAbA/QAWA1ARA6IADgCQAGgEAKAAQAIAAAHAEQArAYAcAfQAoABAaAJQANAFANAJIAXATQA8AJAyAxQAJAJgDAOQgEAOgLAEQgJAIgMgBQiGgGimAxQgnAOgTAGQgRAEgPAAQgPAAgNgFg");
	this.shape_48.setTransform(28.6791,40.5212);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A3250C").s().p("AhHL4QgMgCgGgKQgzhKgahWIgUgmQgIgIgCgKIgCgGIgPgjQgEgDgDgEQgNgUgNgbQgFgDgDgGIgDgGIAAgBIgMgfQgDgEgBgGIgEgSQgHgbgCgUIgBgBIgBgHQgBgMAIgGIAAglQgDgpAFgnQAAgIAFgGQABgXAEghQgJgpgBgxIgBgJIgBAAIADgoIABgUQgNgnAFg9QABgYAMhMQACgJAGgFQAKgjATgXQAUgZAegRQAYgOAlgLQAzgRAlgTQAkgbAggQQAGgEAGgCIAUgUQAEgFAFgCQAfg5ARgkQAYg0AMgsIgGgbQgEgSAOgLQAPgMAQAJQAPAIAZAKQAVAJAMATIACAEQALAGACAVIACAMQADAPACASQAFAugGAwQACASgCAiIgCAXQgBANgEAJQgDAogOAdQgLArgTAlQgUBWgiA8IgVBHQgMAqgNAcQgKArgJAdIgEArQgFBBgBAgIAFBBQAEAvAQBcQAEAFACAGQAaBQAgA6IAMAVQAHAMABAKQAMARABANIABAAQAGgCADAEQAEAFgEAFQgUAZgoAVQgSAKg0AVQgiAQgVAIQgoAPgSgJIgDABQgNADgaACQgHAFgJAAIgFgBg");
	this.shape_49.setTransform(103.7328,88.726);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A3250C").s().p("AA2L+QgRgBgTgKQgigCgjgMQgGAEgGgCQhIgXhFggQgTAEgOgTQgOgUALgRQAeguAOgXQAVgnANgkQADgLALgFIAFgJIADgRQAVhvAAiDQAAgEACgGQgKiAgIg/IgPg8QgKgdgMgnQgQgggHgYIgBgCQgZg/gRg7QgIgEgDgKQgph/gCiCQgBgDAAgEIgFgyIgBAAQgDgGAAgHQAAgIADgFIACgDIAJgIIABgPQACgTASgEQAGgIAKgJQAZgVA3gWQAMgFALAKQAJAIACANQAHA+gEA5IAAADIAAAKIBNByQAJAMANAPIAEACQAUAQARAMQAPAFAUALIAgATQARACATAFQAigCAoAbIAEgBQAhAGAiA0QAcAsALApQAGAZABAhIABA7IACA/QgBAlgNAWIAAAMIACA4QABAigCAXQAAA9gEAtQAKA7gIAqIgBAPQgJBFgcApIhWC7QgHAPgSgCIgeBQQgEAJgKAAIgDACQgRAGgPAAIgGgBg");
	this.shape_50.setTransform(30.525,88.2279);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EFF1EC").s().p("ABLM9QgTAAgigDIgOgBQg1AKg6gOQhcAIhogXQhDANhXggQg+gYhNgyQgGgEABgHQgDgGAAgGQABgGAEgFIAYgZQAihHAahKQAIgoAIgZQgCgGAAgJIAKiFQAFhNgBg5IgGg8QgGgggKgoIgShDQgLgqgFgaQgdhDgUg0IgBgCQglhGgJhHIgBgKIgCgIIgQhwIAAgCIgEgTQgGgVAJgTQgFghAAgSQABgdAPgPQAGgRAMgIQA5goBKgbQA7gUBTgQQAigOAjACIAJgCIAKAAQBTgeBvgGQAWgBAeACIAyAEQATACAfgBIAzgBQAdABAvAIIBLAMQAtAdBeAFIAnARIAoARIA0AbIACADQAWgBATAIQAUAKAKATQAGgCAEADQASALABAhIgBAIQAEAggDAjQAJAagDAmQgCARgIAvIgIAmQgFAVgHAOQgFAYgJAOQgKA9gFASQgMAtgVAaIgQA0QgJAdgUBiQgQBQgTAtIgIBwQgBAYABAxIABBKIAPA1IAQA1IARAtQALAbAEATIANAXQAFAEAFAJIAHAOQANAUARAYQADAEgBAFQgCAEgEACIAAAEQgEAMgTABQgJAKgTAJIghAOQgeANgYAGQgOAEgSABIgKAEQgsATgZgBIgEADQiuALheAPg");
	this.shape_51.setTransform(66.7714,83.7333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt_09, new cjs.Rectangle(-6.3,-1.2,146.10000000000002,169.29999999999998), null);


(lib.shirt_08 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FBDCB0").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgHAJAAQALAAAHAHQAHAIAAAJQAAAKgHAIQgHAHgLAAQgJAAgIgHg");
	this.shape.setTransform(65.8,96.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#70AEA3").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_1.setTransform(57.425,102.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#70AEA3").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_2.setTransform(55.95,91.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#70AEA3").s().p("AgMANQgHgFABgIQgBgHAHgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAHgIgBQgHABgFgHg");
	this.shape_3.setTransform(66.8,111.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#70AEA3").s().p("AgNAOQgFgGgBgIQABgHAFgGQAGgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape_4.setTransform(77.35,101.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#70AEA3").s().p("AgMAOQgGgGgBgIQABgHAGgFQAFgHAHAAQAIAAAGAHQAGAFAAAHQAAAIgGAGQgGAFgIABQgHgBgFgFg");
	this.shape_5.setTransform(77.1,92.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#70AEA3").s().p("AgOAPQgFgHAAgIQAAgIAFgGQAHgGAHAAQAIAAAHAGQAFAGAAAIQAAAIgFAHQgHAGgIAAQgHAAgHgGg");
	this.shape_6.setTransform(66.8,83.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBDCB0").s().p("AgNAPQgHgGAAgJQAAgIAHgFQAFgHAIAAQAJAAAGAHQAFAFABAIQgBAJgFAGQgGAFgJABQgIgBgFgFg");
	this.shape_7.setTransform(56.75,71.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBDCB0").s().p("AgOAPQgFgHAAgIQAAgIAFgGQAHgGAHAAQAIAAAHAGQAFAGAAAIQAAAIgFAHQgHAGgIAAQgHAAgHgGg");
	this.shape_8.setTransform(66.35,69.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#70AEA3").s().p("AgLALQgEgEAAgHQAAgGAEgEQAGgFAFAAQAHAAAFAFQAEAEAAAGQAAAHgEAEQgFAFgHAAQgFAAgGgFg");
	this.shape_9.setTransform(46.5,44.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#70AEA3").s().p("AgOAPQgGgHAAgIQAAgHAGgHQAHgFAHAAQAJAAAGAFQAGAHAAAHQAAAIgGAHQgGAFgJAAQgHAAgHgFg");
	this.shape_10.setTransform(87.825,45.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FBDCB0").s().p("AgPAQQgHgHAAgJQAAgJAHgGQAHgHAIAAQAKAAAGAHQAHAGAAAJQAAAJgHAHQgGAHgKAAQgIAAgHgHg");
	this.shape_11.setTransform(49.425,78.65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FBDCB0").s().p("AgPAQQgHgHAAgJQAAgJAHgGQAHgHAIAAQAKAAAGAHQAHAGAAAJQAAAJgHAHQgGAHgKAAQgIAAgHgHg");
	this.shape_12.setTransform(39.825,51.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FBDCB0").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgGAHgKAAQgIAAgHgHg");
	this.shape_13.setTransform(76.625,71.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FBDCB0").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgGAHgKAAQgIAAgHgHg");
	this.shape_14.setTransform(77.075,61.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#70AEA3").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_15.setTransform(66.675,56.125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FBDCB0").s().p("AgNAPQgHgGABgJQgBgHAHgHQAFgGAIAAQAIAAAHAGQAFAHAAAHQAAAJgFAGQgHAGgIAAQgIAAgFgGg");
	this.shape_16.setTransform(57.9,48.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FBDCB0").s().p("AgQARQgHgHAAgKQAAgIAHgIQAIgHAIAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_17.setTransform(42.9,26.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#70AEA3").s().p("AgMANQgFgGAAgHQAAgHAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAHQAAAHgFAGQgGAFgHAAQgHAAgFgFg");
	this.shape_18.setTransform(53.325,26.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FBDCB0").s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape_19.setTransform(91.375,27.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#70AEA3").s().p("AgNAOQgHgFAAgJQAAgIAHgFQAFgHAIAAQAIAAAHAHQAFAFABAIQgBAJgFAFQgHAGgIABQgIgBgFgGg");
	this.shape_20.setTransform(79.15,27.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FBDCB0").s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgGAIgBQAJABAGAGQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_21.setTransform(66.925,27.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FBDCB0").s().p("AgNAOQgGgFAAgJQAAgIAGgFQAGgHAHAAQAIAAAGAHQAGAFAAAIQAAAJgGAFQgGAHgIAAQgHAAgGgHg");
	this.shape_22.setTransform(56.825,61.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FBDCB0").s().p("AgNAOQgGgFAAgJQAAgHAGgGQAFgGAIAAQAIAAAGAGQAGAGAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGg");
	this.shape_23.setTransform(67.575,39.575);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FBDCB0").s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAJgFAHQgHAGgJAAQgIAAgGgGg");
	this.shape_24.setTransform(75.6,49.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#122313").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_25.setTransform(65.7,58.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3F7745").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_26.setTransform(65.7,58.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#070F21").ss(2.6).p("AChrKQgMGghBE/QhQGGimEq");
	this.shape_27.setTransform(82.4308,75.1921);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#070F21").ss(2.6).p("Ai8syQgrFkBwGpQAtCqBKDMQA0CJBfDlQAPAjAKATQAPAeARAU");
	this.shape_28.setTransform(54.3698,85.6101);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#B8912A").ss(2.6).p("AAgguQgUgCgOAMQgPAMgDAUQgCATAMAPQALAQAUAC");
	this.shape_29.setTransform(90.6116,53.5857);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FDD888").s().p("AgPAeQgMgPACgTQACgUAPgMQAPgMAUACIgLBeQgTgCgMgQg");
	this.shape_30.setTransform(91.1857,53.5857);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#B8912A").ss(2.6).p("AgfguQAUgCAOAMQAQAMACAUQACATgMAPQgMAQgTAC");
	this.shape_31.setTransform(40.1449,53.5857);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FDD888").s().p("AgaguQAUgCAPAMQAPAMACAUQADATgNAPQgMAQgTACg");
	this.shape_32.setTransform(39.5708,53.5857);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#B8912A").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_33.setTransform(90.15,29.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FDD888").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_34.setTransform(90.15,29.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#122313").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_35.setTransform(77.95,29.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3F7745").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_36.setTransform(77.95,29.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#B8912A").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_37.setTransform(41,29.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FDD888").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_38.setTransform(41,29.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#122313").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_39.setTransform(52.45,29.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3F7745").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_40.setTransform(52.45,29.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#B8912A").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_41.setTransform(75.5,63.85);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FDD888").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_42.setTransform(75.5,63.85);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#B8912A").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_43.setTransform(74.5,51.85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FDD888").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_44.setTransform(74.5,51.85);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#122313").ss(2.6).p("AAigtQgTgEgQAKQgRALgEATQgEASAKARQALARASAF");
	this.shape_45.setTransform(93.3137,43.8948);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3F7745").s().p("AgVAaQgKgRAEgSQAEgTARgLQAQgKATAEIgVBdQgSgFgLgRg");
	this.shape_46.setTransform(93.8198,43.8948);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#122313").ss(2.6).p("AAigtQgTgFgQALQgRAKgEAUQgFASALARQAKARATAE");
	this.shape_47.setTransform(89.9133,65.6075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3F7745").s().p("AgVAaQgLgRAFgSQAEgUARgKQAQgLATAFIgVBcQgTgEgKgRg");
	this.shape_48.setTransform(90.4075,65.6075);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#122313").ss(2.6).p("AgvAAQAAAUAOAOQAOAOATAAQAUAAAOgOQAOgOAAgUQAAgTgOgOQgOgOgUAAQgTAAgOAOQgOAOAAATg");
	this.shape_49.setTransform(86.7,57.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3F7745").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_50.setTransform(86.7,57.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#122313").ss(2.6).p("AgvAAQAAAUAOAOQAOAOATAAQAUAAAOgOQAOgOAAgUQAAgTgOgOQgOgOgUAAQgTAAgOAOQgOAOAAATg");
	this.shape_51.setTransform(86.95,48);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3F7745").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_52.setTransform(86.95,48);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#122313").ss(2.6).p("AgigtQAUgEAQAKQAQALAFATQAEASgKARQgLARgSAF");
	this.shape_53.setTransform(38.5019,43.8948);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3F7745").s().p("AgcgtQATgEAQAKQARALAEATQAFASgLARQgLARgSAFg");
	this.shape_54.setTransform(37.9925,43.8948);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#122313").ss(2.6).p("AghgtQATgFAQALQARAKAEAUQAEASgKARQgLARgSAE");
	this.shape_55.setTransform(41.9208,65.6075);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3F7745").s().p("AgcgtQATgFAQALQARAKAEAUQAEASgKARQgLARgSAEg");
	this.shape_56.setTransform(41.4302,65.6075);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#122313").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_57.setTransform(45.1,57.35);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#3F7745").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_58.setTransform(45.1,57.35);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#122313").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_59.setTransform(44.9,48);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3F7745").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_60.setTransform(44.9,48);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#B8912A").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_61.setTransform(56.45,51.85);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FDD888").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_62.setTransform(56.45,51.85);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#B8912A").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_63.setTransform(83.9,81.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FDD888").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_64.setTransform(83.9,81.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#B8912A").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_65.setTransform(47.9,81.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FDD888").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_66.setTransform(47.9,81.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#B8912A").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_67.setTransform(65.3,98.65);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FDD888").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_68.setTransform(65.3,98.65);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#B8912A").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_69.setTransform(75.6,73.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FDD888").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_70.setTransform(75.6,73.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#B8912A").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_71.setTransform(55.55,73.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FDD888").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_72.setTransform(55.55,73.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#B8912A").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_73.setTransform(55.45,64.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FDD888").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_74.setTransform(55.45,64.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#122313").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_75.setTransform(56.15,105.65);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3F7745").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_76.setTransform(56.15,105.65);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#122313").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_77.setTransform(76.05,104.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3F7745").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_78.setTransform(76.05,104.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#122313").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_79.setTransform(75.65,94.65);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#3F7745").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_80.setTransform(75.65,94.65);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#122313").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_81.setTransform(55,94.65);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#3F7745").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_82.setTransform(55,94.65);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#122313").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_83.setTransform(65.55,85.65);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#3F7745").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_84.setTransform(65.55,85.65);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#122313").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_85.setTransform(65.55,113.85);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3F7745").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_86.setTransform(65.55,113.85);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#B8912A").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_87.setTransform(65.55,72.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FDD888").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_88.setTransform(65.55,72.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#B8912A").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_89.setTransform(65.55,42.35);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FDD888").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_90.setTransform(65.55,42.35);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#B8912A").ss(2.6).p("AAwAAQAAAUgOAOQgOAOgUAAQgTAAgOgOQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATg");
	this.shape_91.setTransform(65.55,29.85);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FDD888").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_92.setTransform(65.55,29.85);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#070F21").ss(2.6).p("Ak5AAIJzAA");
	this.shape_93.setTransform(66.125,20.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#070F21").ss(2.6).p("AJlqnQAeARALAQQAKAQACAkQAGCFgiB/QgPA2ggBVQgoBpgLAgQhEDNAOC5QAIBmAgBdQAhBhA6BOQgdAchGAeQiLA8jIAKQhJAEhzAAQhvgBg6gDQjIgKiLg8QgrgTgggVIgYgSQA6hOAhhhQAghdAIhmQAOi7hEjLQgKgfgphqQgghVgOg2Qgjh/AGiFQABgiALgSQAKgPAfgSQBcg0CEgpQDFg9C/AAQDAAADFA9QCFApBbA0g");
	this.shape_94.setTransform(67.2438,83.375);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#EFF1EC").s().p("AAeBcQgyAIhagEQgPgBg/AFQgxADgcgHQgDAAgEgDIgSAGQgWAHgOgSQAAgtAJggQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgkAIgSQAMgaAggHQBvgZBvAGIAHABQAWgGAlACIA7AFQBsADA1AIQAdAEARAHQAYALAJAUQAQAjgWBDIACAAIgMArQgLACgIgHQgEgDgCgEQheACiCAMIgEAAQgOAAgIgLg");
	this.shape_95.setTransform(66.5913,10.621);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#10264F").s().p("AjCMcQhEADhCgSQhNgGhEgWQgHgDgEgFIgCAAIgBgBQgcgIgkgNQgJgDgDgJIgYgLQgKgEAAgKQgFgFgBgFQgBgHAEgFIABgBQABgIAFgHQAng7AchEQAchEAMhGQAQhggIhsIgBgFQgJg7gIhTQglhvhEjBQgCgJABgIIgMgdQgMgFgDgMQgfhvgHgqQgOhhAfg5QgEgLAHgOQAFgKAMgGQAIgDAQgEQASgNAbgNIAvgVQAcgNA0gSQA5gTAXgKIACgBQACgJAJAAQAJABABAKIAAAKIACAHIgCArQAAAqgCAhIgDB4IAAABQAJAkACA7IAEBhQANAmANA5IAVBgIAWBXQAMA1gEAjIADAIQAhBQAfBwQATBEALAiIAVAyQAJASAOAkIAWAyIAmBKQAVAsAEAhIADgGIAEgJQAFgSASABIAhhLQAQgzAehDIA1hyIABgEIAqh+IAihxIAaiNIABgDQgIhAAShjIAeijQANhqAGhHQAIhigBhQQAAgOALgDQAEgJALAAQAfABAYANQAMACANAJQAGAFAGAHQAkABAsAQQAPAGA9AcQAqATANALQAYAUADAhQAJBegpCJQgFAogKAkQgMAugVAsQAKAOgHAPQgvBsgcBJQgVBNgJBzIgFBTIACBGQAIBeAVBIQAaBXAwBCQAHAKgHALIAMAPQAHAHgBAKQgBAKgJAFQi2BljSADQgJAAgHgGIhJAHQgNAAgFgKQgaADgVABQgHAGgKABQgeABgdAAQhUAAhUgNg");
	this.shape_96.setTransform(67.2059,85.5862);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#070F21").s().p("AgNJkIgqhwQgCgCgDgHIhhkFIAAAAIgCgHIgOglIgBgEQgihggahmQgLgJgEgOQgOg+gFhOQgghvgMhdQgPhtALhlQABgMALgFQAKgGAJAGQAKgHAMABIAkAHQALgPARABIBGABQAoABAeAEQARgCAJAPQAJgMAMAAQAvgGA3AEQAqACA7AJQAzgCAtgIQANgCALAHQAMAIgBAOQgKBhgRBhQAKAegHAyQgEAcgKAzQgMBGgcBYQgCBEgcBJQgEApgIAlQgLA4gMAkQgRA2gZAhIgYA9IgCAEIgmBuQgZA/gbAoIgBAKQgBAPgOACIgDAAQgKAAgFgMg");
	this.shape_97.setTransform(65.9961,82.3067);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt_08, new cjs.Rectangle(-0.7,-1.2,141,169.29999999999998), null);


(lib.shirt_07 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AJlqnQAeARALAQQALARABAjQAGCEgiCAQgPA2ggBVQgoBpgLAgQhEDNAOC5QAIBmAgBdQAhBhA6BOQgdAchGAeQiLA8jIAKQhJAEhzAAQhvgBg6gDQjIgKiLg8QgrgTgggVIgYgSQA6hOAhhhQAghdAIhmQAOi7hEjLQgKgfgphqQgghVgOg2Qgjh/AGiFQABgjALgRQALgQAegRQBcg0CEgpQDFg9C/AAQDAAADFA9QCFApBbA0g");
	this.shape.setTransform(66.6756,83.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFF1EC").s().p("ABLM9QgTAAgigDIgOgBQg0AKg7gOQhcAIhogXQhDANhXggQg+gYhNgyQgGgEABgHQgDgGAAgGQABgHAEgEIAYgZQAihHAahKQAGgiAKgfQgCgGAAgJIAKiFQAFhNgBg5IgGg8QgGgggKgoIgShDQgLgqgFgaQgdhDgUg0IgBgCQglhGgJhHIgBgKIgCgIIgQhwIAAgCIgEgTQgGgVAJgTQgFgiAAgRQABgdAPgPQAGgRAMgIQA5goBKgbQA7gUBTgQQAhgOAkACIAJgCIAKAAQBTgfBvgFQAWgBAeACIAyAEQATACAfgBIAzgBQAdABAvAIIBLAMQAtAdBeAFIAnARIAoARIA0AbIACADQAWgBATAIQAUAKAKATQAGgCAEADQASALABAhIgBAIQAEAggDAjQAJAagDAmQgCARgIAvIgIAmQgFAVgHAOQgFAYgJAOQgLBBgEAOQgMAtgWAaIgPA0QgJAdgUBiQgQBQgTAtIgIBwQgBAYABAxIABBKIAPA1IAQA1IARAtQALAbAEATIANAXQAFAEAFAJIAHAOQANAUARAYQADAEgBAFQgCAEgEACIgBAEQgDAMgTABQgKAKgSAJIghAOQgeANgYAGQgOAEgSABIgKAEQgsATgZgBIgEADQiuALheAPg");
	this.shape_1.setTransform(66.7175,83.7333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt_07, new cjs.Rectangle(-6.3,-1.2,146,169.29999999999998), null);


(lib.shirt_06 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AhqhdQAnASBHAPQAkA1BGBq");
	this.shape.setTransform(61.4952,9.5463);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6).p("ABggxQgqAKgVAFQgjAJgeAFQg4BLADgG");
	this.shape_1.setTransform(75.7617,5.0627);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6).p("ABINJQCAAABXg2QAygfAfgwQAhgxAEg3QACgjgLguQgCgJgUhHQgdhogFiQQAAiogDhWQgChJAehfQAkhwADgYQARiNABgeQAChLgcgbQgZgZichFQijhIh/gnQh9DIgQAHQgdANg/ANQhEANgbAKQgURiACBsQABAkATBVQAJArAKAkg");
	this.shape_2.setTransform(92.1679,84.2873);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6).p("AFLNMQguAChwgCQiAgDgaAAQh/AAhXg2QgygfgfgwQghgxgEg3QgCgjAKguQACgKAUhGQAfhrAIiNQAFioAChWQAChKggheQgqh3gDgRQgnjiAvgvQAYgYChhGQClhHCBgoIB4Di");
	this.shape_3.setTransform(33.5481,84.2796);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgYAAgSgSQgRgRAAgZQAAgXARgSQATgSAXAAQAZAAASASQARARAAAYg");
	this.shape_4.setTransform(70.15,89.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAQQgGgHgBgJQABgIAGgHQAGgGAJAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgJAAgGgGg");
	this.shape_5.setTransform(71.4,88.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EEBA33").s().p("AgqAqQgRgRAAgZQAAgXARgSQASgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgSgSgAgDgiQgGAGAAAJQAAAKAGAGQAGAGAJAAQAKAAAHgGQAGgGAAgKQAAgJgGgGQgHgHgKAAQgJAAgGAHg");
	this.shape_6.setTransform(70.15,89.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FDD888").ss(2.4).p("AhfgJIBbgfIBkAeQADABAAACQAAACgCABIhbAsIhmgrQgCgBAAgCQAAgCADgBg");
	this.shape_7.setTransform(70.375,90.7551);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgXAAgTgSQgRgRAAgZQAAgYARgRQASgSAYAAQAZAAASASQARARAAAYg");
	this.shape_8.setTransform(70.85,111.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAKAAAGAGQAGAHAAAIQAAAJgGAHQgGAGgKAAQgIAAgHgGg");
	this.shape_9.setTransform(72.075,109.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EEBA33").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSgAgDgjQgGAHAAAJQAAAJAGAHQAGAFAKAAQAJAAAGgFQAHgHgBgJQABgJgHgHQgGgGgJAAQgKAAgGAGg");
	this.shape_10.setTransform(70.85,111.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FDD888").ss(2.4).p("AhfgKIBbgeIBkAdQADABAAADQAAACgCABIhbAsIhmgrQgCgBAAgCQAAgDADgBg");
	this.shape_11.setTransform(71.075,112.156);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgXAAgTgSQgRgRAAgZQAAgYARgRQASgSAYAAQAZAAASASQARARAAAYg");
	this.shape_12.setTransform(70.15,131.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgPAQQgGgHgBgJQABgIAGgHQAGgGAJAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgJAAgGgGg");
	this.shape_13.setTransform(71.4,129.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EEBA33").s().p("AgqAqQgRgRAAgZQAAgYARgRQASgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgSgSgAgDgjQgGAHAAAJQAAAJAGAHQAGAFAJAAQAKAAAHgFQAGgHAAgJQAAgJgGgHQgHgGgKAAQgJAAgGAGg");
	this.shape_14.setTransform(70.15,131.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FDD888").ss(2.4).p("AhfgKIBbgeIBkAdQADABAAADQAAACgCABIhbAsIhmgrQgCgBAAgCQAAgDADgBg");
	this.shape_15.setTransform(70.375,132.406);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgYAAgSgSQgRgRAAgZQAAgXARgSQATgSAXAAQAZAAASASQARASAAAXg");
	this.shape_16.setTransform(70.85,152.975);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPAQQgGgHAAgJQAAgJAGgGQAHgGAIAAQAKAAAGAGQAGAGAAAJQAAAJgGAHQgGAGgKAAQgIAAgHgGg");
	this.shape_17.setTransform(72.075,151.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EEBA33").s().p("AgpAqQgSgRAAgZQAAgXASgSQARgSAYAAQAZAAARASQASASAAAXQAAAZgSARQgRASgZAAQgYAAgRgSgAgDgiQgGAGAAAJQAAAKAGAGQAGAGAKAAQAJAAAGgGQAHgGgBgKQABgJgHgGQgGgHgJAAQgKAAgGAHg");
	this.shape_18.setTransform(70.85,152.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FDD888").ss(2.4).p("AhfgJIBbgfIBkAeQADABAAACQAAACgCABIhbAsIhmgrQgCgBAAgCQAAgCADgBg");
	this.shape_19.setTransform(71.075,153.7551);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FBC85B").s().p("AgJLRIgviuIAAl1IAUtyIApgMQAqgMAAAFQABAPgQJgQgPJhABAkQACAoASBOQAKAnAJAfg");
	this.shape_20.setTransform(55.525,96.5015);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#070F21").s().p("AgXAZIALg4IAkAHIgLA4g");
	this.shape_21.setTransform(109.55,41.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#070F21").s().p("AgXAZIAKg4IAlAGIgKA5g");
	this.shape_22.setTransform(111.375,30.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#070F21").s().p("AgXAaIAKg5IAlAGIgKA5g");
	this.shape_23.setTransform(113.125,20.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#070F21").s().p("AgXAZIALg5IAkAIIgLA5g");
	this.shape_24.setTransform(103.35,72);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#070F21").s().p("AgYAYIAMg4IAlAIIgMA4g");
	this.shape_25.setTransform(105.425,61.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#070F21").s().p("AgYAZIAMg4IAkAHIgLA4g");
	this.shape_26.setTransform(107.5,51.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#070F21").s().p("AgUgbIAlgDIAEA6IglADg");
	this.shape_27.setTransform(102.3,103.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#070F21").s().p("AgUgbIAlgCIAEA5IglACg");
	this.shape_28.setTransform(101.525,92.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#070F21").s().p("AgVALIAAgIIAHghIAlAHIgGAbIgBADIAAAEIAAADIAAARIglAAg");
	this.shape_29.setTransform(101.45,82.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#070F21").s().p("AgUgbIAlgDIAEA5IglAEg");
	this.shape_30.setTransform(105,134.725);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#070F21").s().p("AgUgaIAlgEIAEA5IglAEg");
	this.shape_31.setTransform(104.1,124.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#070F21").s().p("AgUgaIAlgEIAEA6IglADg");
	this.shape_32.setTransform(103.2,113.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#070F21").s().p("AgdAOQAOgVAKgaIAjAOQgKAYgRAdg");
	this.shape_33.setTransform(103.725,165.475);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#070F21").s().p("AgTAZQACgOAAgLIgBgbIAmgCIAAAoIgCATg");
	this.shape_34.setTransform(106.275,155.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#070F21").s().p("AgUgbIAlgCIAEA5IglADg");
	this.shape_35.setTransform(105.825,145.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F3DFC6").s().p("AgXAZIAKg4IAlAGIgKA5g");
	this.shape_36.setTransform(108.4,35.825);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F3DFC6").s().p("AgWAaIAIg5IAlAGIgIA5g");
	this.shape_37.setTransform(110.075,25.475);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F3DFC6").s().p("AgWAaIAIg5IAlAGIgIA5g");
	this.shape_38.setTransform(111.625,15.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F3DFC6").s().p("AgYAZIAMg4IAlAIIgMA3g");
	this.shape_39.setTransform(102.125,66.65);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F3DFC6").s().p("AgXAZIALg5IAkAIIgLA5g");
	this.shape_40.setTransform(104.25,56.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F3DFC6").s().p("AgYAYIAMg4IAlAIIgMA4g");
	this.shape_41.setTransform(106.375,46.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F3DFC6").s().p("AgUgbIAlgDIAEA6IglADg");
	this.shape_42.setTransform(100.675,98.075);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F3DFC6").s().p("AgUgbIAlgCIAEA5IgmACg");
	this.shape_43.setTransform(99.975,87.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F3DFC6").s().p("AgXAeIABgRIABgCIAAgCIAIgoIAlAIIgJApIAAANg");
	this.shape_44.setTransform(100.125,76.95);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F3DFC6").s().p("AgUgaIAlgEIAEA6IglACg");
	this.shape_45.setTransform(103.075,129.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F3DFC6").s().p("AgUgbIAlgDIAEA6IglADg");
	this.shape_46.setTransform(102.275,119.075);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F3DFC6").s().p("AgVgbIAmgDIAFA6IgmADg");
	this.shape_47.setTransform(101.45,108.625);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F3DFC6").s().p("AgaATQAKgWAGgdIAlAIIgSA5g");
	this.shape_48.setTransform(102.875,160.725);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F3DFC6").s().p("AgSAbIAAgDIgBgzIAlgCIACA0IgBAHg");
	this.shape_49.setTransform(104.375,150.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F3DFC6").s().p("AgUgbIAlgCIAEA5IgmACg");
	this.shape_50.setTransform(103.85,140.05);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#EE3D29").ss(2.6).p("ACDrbIgKBNQgNBZgOA4QgRBEgYCOQgYCQgGBJQgGA+AVE2QALCgAOC+QADArgVA5QgLAcgLAUIiUAFQAJgVAHgfQAQg9gDgsQgFhhgJkIQgLk8AFg1QAEg4AgitQAaiSARhMQAKgwARhmIANhdg");
	this.shape_51.setTransform(104.9945,88.605);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EE3D29").s().p("AhwLjQAQg9gCgsQgGhigJkIQgKk7AEg2QAFg3AfitQAaiSARhNQAKgvARhmIAOhdIB/A5IgKBNQgNBYgOA4QgRBFgYCOQgXCQgHBJQgGA+AWE2QAKCgAOC+QADArgVA4QgLAdgLATIiUAGQAJgWAHgeg");
	this.shape_52.setTransform(105.25,88.85);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#070F21").s().p("AgXgYIAlgHIAKA4IgkAHg");
	this.shape_53.setTransform(23.975,41.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#070F21").s().p("AgXgZIAlgGIAKA4IglAHg");
	this.shape_54.setTransform(22.175,30.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#070F21").s().p("AgXgZIAlgGIAKA5IglAGg");
	this.shape_55.setTransform(20.425,20.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#070F21").s().p("AgYgYIAlgIIAMA5IglAIg");
	this.shape_56.setTransform(30.2,72);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#070F21").s().p("AgYgYIAlgIIAMA4IglAIg");
	this.shape_57.setTransform(28.125,61.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#070F21").s().p("AgYgYIAlgHIALA4IgkAHg");
	this.shape_58.setTransform(26.05,51.525);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#070F21").s().p("AgVAcIAFg6IAmADIgGA6g");
	this.shape_59.setTransform(31.25,103.375);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#070F21").s().p("AgUAcIAEg5IAlACIgEA5g");
	this.shape_60.setTransform(32.025,92.975);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#070F21").s().p("AgPAfIAAgRIgBgDIAAgEIgBgDIgFgbIAlgHIAHAlIAAAEIAAAEIAAAQg");
	this.shape_61.setTransform(32.1,82.275);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#070F21").s().p("AgVAbIAGg5IAlADIgGA6g");
	this.shape_62.setTransform(28.55,134.725);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#070F21").s().p("AgVAbIAGg5IAlAEIgGA5g");
	this.shape_63.setTransform(29.45,124.325);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#070F21").s().p("AgVAcIAGg6IAlAEIgGA5g");
	this.shape_64.setTransform(30.35,113.875);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#070F21").s().p("AgdgTIAjgOQAKAaAOAVIggAUQgRgdgKgYg");
	this.shape_65.setTransform(29.825,165.475);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#070F21").s().p("AgTALIAAgoIAmACIgBAbQAAALACAOIglAFg");
	this.shape_66.setTransform(27.275,155.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#070F21").s().p("AgUAcIAEg5IAlACIgEA6g");
	this.shape_67.setTransform(27.725,145.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F3DFC6").s().p("AgXgZIAlgGIAKA4IglAHg");
	this.shape_68.setTransform(25.15,35.825);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F3DFC6").s().p("AgWgZIAlgGIAIA5IglAGg");
	this.shape_69.setTransform(23.475,25.475);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F3DFC6").s().p("AgWgZIAlgGIAIA5IglAGg");
	this.shape_70.setTransform(21.925,15.125);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F3DFC6").s().p("AgYgXIAlgIIAMA4IglAHg");
	this.shape_71.setTransform(31.425,66.65);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F3DFC6").s().p("AgYgYIAlgIIAMA5IglAIg");
	this.shape_72.setTransform(29.275,56.425);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F3DFC6").s().p("AgYgYIAlgIIAMA4IglAIg");
	this.shape_73.setTransform(27.175,46.15);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F3DFC6").s().p("AgUAcIAEg6IAlADIgEA6g");
	this.shape_74.setTransform(32.875,98.075);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F3DFC6").s().p("AgUAcIAEg5IAlACIgDA5g");
	this.shape_75.setTransform(33.575,87.625);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F3DFC6").s().p("AgOASIgJgpIAlgIIAIAoIAAACIABACIABARIgmABg");
	this.shape_76.setTransform(33.425,76.95);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F3DFC6").s().p("AgUAcIAEg6IAlAEIgEA4g");
	this.shape_77.setTransform(30.475,129.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F3DFC6").s().p("AgUAcIAEg6IAlADIgEA6g");
	this.shape_78.setTransform(31.275,119.075);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F3DFC6").s().p("AgUAcIAEg6IAlADIgEA6g");
	this.shape_79.setTransform(32.1,108.625);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F3DFC6").s().p("AgSAFQgFgPgDgOIAlgIQAGAdAKAWIgjAOg");
	this.shape_80.setTransform(30.675,160.725);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F3DFC6").s().p("AgSAaIgBgDIACg0IAlACIgBAzIAAADIglADg");
	this.shape_81.setTransform(29.175,150.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F3DFC6").s().p("AgUAcIAEg5IAlACIgEA5g");
	this.shape_82.setTransform(29.7,140.05);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#EE3D29").ss(2.6).p("AiCrbIAKBNQAOBZANA4QARBEAYCOQAYCQAGBJQAFA+gUE2QgLCggOC+QgDArAWA5QAKAcALAUICUAFQgJgVgHgfQgQg9ACgsQAGhVAJkUQALk7gFg2QgEg4ggitQgaiSgRhMQgKgwgRhmIgNhdg");
	this.shape_83.setTransform(28.5555,88.605);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EE3D29").s().p("AgTMRQgLgTgLgdQgVg4ACgrQAPi+ALigQAUk2gFg+QgHhJgXiQQgYiOgRhFQgOg4gNhYIgLhNICAg5IAOBdQAQBmALAvQARBNAaCSQAfCtAFA3QAFA2gLE7QgJEUgGBWQgCAsAPA9QAIAeAIAWg");
	this.shape_84.setTransform(28.3,88.85);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EC6C3B").s().p("AmlKEQgChsAUxiQAbgKBEgNQA/gMAegOQAQgHB9jIQB/AnCjBIQCbBFAaAZQAbAbgCBLQgBAegRCNQgDAYgjBwQgeBfACBJQACBWABCnQAECRAeBoIAWBQQALAugDAjQgDA2giAyQgfAvgxAfQhYA4iAgBInGADQgliOgCg5g");
	this.shape_85.setTransform(92.2477,85.375);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EC6C3B").s().p("ACwNMQhygFglAAQiAAAhXg3QgxgfgggvQghgygDg2QgDgkALguIAWhQQAehqAJiOIAHj9QAChKghheQgph3gDgSQgojiAvguQAZgZCghFQClhICCgnIB3DhIAaWwQghAGhDAAIgyAAg");
	this.shape_86.setTransform(32.5429,84.4391);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EFF1EC").s().p("AgdBkQgNAAgKgTIgOgaIgXgvQgJgLgQgcQgNgWgNgjQgBgEADgCQADgCADACQACgEADgBQADAAADADIAIAJIABAAQARgCAfARQAIABAGAIQAIAKAKAYQALAXAIAJIAJAKIAOgXQAMgYAOgXQAMgfA9gLQAGgBAFAEIAFgCQAIgEAEAIQAAgBABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABAAAAABQAAAAgBABQAAAAAAABIgCADQgBAFgCACIgKAKIgbAmQAHAJgFAJQgjAvgbAeQADAJgFAHQgFAHgJAAQgMAAgNAFIgNAHQgGACgGAAIgCAAg");
	this.shape_87.setTransform(67.5875,11.6729);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt_06, new cjs.Rectangle(-1.1,-1.4,142.9,175), null);


(lib.shirt_05 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgYAAgSgSQgRgRAAgZQAAgXARgSQATgSAXAAQAZAAASASQARARAAAYg");
	this.shape.setTransform(67.05,149.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgYAAgSgSQgRgRAAgZQAAgXARgSQATgSAXAAQAZAAASASQARARAAAYg");
	this.shape_1.setTransform(67.05,95.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgXAAgTgSQgRgRAAgZQAAgYARgRQASgSAYAAQAZAAASASQARARAAAYg");
	this.shape_2.setTransform(67.05,43.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAQQgGgGgBgKQABgIAGgHQAHgHAIAAQAKAAAGAHQAGAHAAAIQAAAKgGAGQgGAHgKgBQgIABgHgHg");
	this.shape_3.setTransform(68.3,147.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAQQgGgHgBgJQABgIAGgHQAHgGAIAAQAKAAAGAGQAGAHAAAIQAAAJgGAHQgGAGgKAAQgIAAgHgGg");
	this.shape_4.setTransform(68.3,93.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAQQgGgGgBgKQABgIAGgHQAHgGAIAAQAKAAAGAGQAGAHAAAIQAAAKgGAGQgGAGgKAAQgIAAgHgGg");
	this.shape_5.setTransform(68.3,41.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EEBA33").s().p("AgqAqQgRgRAAgZQAAgXARgSQATgSAXAAQAZAAASASQARARAAAYQAAAZgRARQgSASgZAAQgYAAgSgSgAgDgjQgGAHAAAJQAAAKAGAGQAGAGAJAAQAKAAAHgGQAGgGAAgKQAAgJgGgHQgHgGgKAAQgJAAgGAGg");
	this.shape_6.setTransform(67.05,149.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EEBA33").s().p("AgqAqQgRgRAAgZQAAgXARgSQATgSAXAAQAZAAASASQARARAAAYQAAAZgRARQgSASgZAAQgYAAgSgSgAgDglQgGAGAAAJQAAAKAGAGQAGAGAJAAQAKAAAHgGQAGgGAAgKQAAgJgGgGQgHgHgKAAQgJAAgGAHg");
	this.shape_7.setTransform(67.05,95.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EEBA33").s().p("AgqAqQgRgRAAgZQAAgYARgRQASgSAYAAQAZAAASASQARARAAAYQAAAZgRARQgSASgZAAQgXAAgTgSgAgDglQgGAGAAAKQAAAJAGAGQAGAGAJAAQAKAAAHgGQAGgGAAgJQAAgKgGgGQgHgHgKAAQgJAAgGAHg");
	this.shape_8.setTransform(67.05,43.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5F1806").ss(2.6,1).p("ABINJQCAAABXg2QAygfAfgwQAhgxAEg3QACgjgLguQgCgJgUhHQgdhogFiQQAAiogDhWQgChJAehfQAkhwADgYQARiNABgeQAChLgcgbQgZgZichFQijhIh/gnIgTAbQgZAighAhQhrBqiQA4QgURiACBsQABAkATBVQAJArAKAkg");
	this.shape_9.setTransform(92.1179,84.9443);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6,1).p("AFFNJQg8AEhnAAQhdgBg4gEQhEgFgrgJQg9gNgrgbQgxgfgggwQghgxgDg3QgDgjALguQACgKAUhGQAehrAJiNQAEioADhWQAChKghheQgph3gDgRQgojiAvgvQAZgYCghGQClhHCCgoIA/BGQBGBJAkAP");
	this.shape_10.setTransform(34.1481,85.0114);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006E91").s().p("AliA2QgaABgOgCQACgIgJgZQgIgVAFgFQAygSBNgDQBwgDALgCIBegCQDLgECqgNQAngDAogBIACAIIAMA1IABAIQg8AChoAJQh0ALgxACIidAMQhZAEhFABIhOABQgNgBgagBg");
	this.shape_11.setTransform(91.2656,136.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006E91").s().p("AB5AxQhSgCgtgEQg7gEhFgJQg+gJg0gJIAJgtIAHgUIBcAIQC9ARDHAFIABBMQgjgChdgCg");
	this.shape_12.setTransform(27.1,136.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FBC85B").s().p("AmOA2QgFAAgCgaQgCgcAJgNQAEgIAQgCQAGgBAWAAQHagXEQgUIAKBRQkMAeiGANQhuALhfAAQhsAAhZgOg");
	this.shape_13.setTransform(92.281,143.9149);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FBC85B").s().p("ACjA8QjlAAgdgCIhVgGQh9gJh0gdIgBgLIAFg3IABgJIB2AMIB2AKIBVAGQAhADDhAAIEDABIABBbQgdgCjnAAg");
	this.shape_14.setTransform(43.875,143.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EE3D29").s().p("AmUBJIAAhnQCnAJDtgUQCHgMEOgaIAAAaIgDAcIgMAVQgFAJgJAMQlBA/kbAAQhaAAhWgHg");
	this.shape_15.setTransform(90.9333,152.513);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EE3D29").s().p("AChBHQg9gEgbgBIhWgGQhqgJhjgXIgDgCIgMgkQgIgbgEgVQAAgDgDgFIgBgIQAsAEBKAIIB2AMIBWAIIBYAHQA0AEAlAAIAABqQgggBg5gDg");
	this.shape_16.setTransform(26.675,152.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006E91").s().p("AgQgiIAGAAQADAKAIAQIAIAMIgBgCQACADACAKIAEAOIABAFIghABg");
	this.shape_17.setTransform(129.15,128.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006E91").s().p("AgagiIA0gCIAABGIgzADg");
	this.shape_18.setTransform(121.8,128.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006E91").s().p("AgagiIA0gDIABBHIg0AEg");
	this.shape_19.setTransform(113.5,129.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006E91").s().p("AgagjIA0gDIABBKIg0ACg");
	this.shape_20.setTransform(96.925,130.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006E91").s().p("AgagiIA0gEIABBJIg0AEg");
	this.shape_21.setTransform(105.225,129.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#006E91").s().p("AgaglIA0AAIABBJIg0ACg");
	this.shape_22.setTransform(87.25,130.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006E91").s().p("AgagmIA0gBIABBNIg0ACg");
	this.shape_23.setTransform(78.925,131.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006E91").s().p("AgagmIA0gBIABBOIg0ABg");
	this.shape_24.setTransform(70.6,131.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#006E91").s().p("AgZAmIAAhKIAzgBIABBLg");
	this.shape_25.setTransform(53.9,131.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#006E91").s().p("AgaglIA0gCIABBOIg0ABg");
	this.shape_26.setTransform(62.25,131.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#006E91").s().p("AgZAkIAAhIIAzAAIABBJg");
	this.shape_27.setTransform(44.45,131.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#006E91").s().p("AgaAjIAAhIIA1ADIAABIg");
	this.shape_28.setTransform(36.1,131.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#006E91").s().p("AgZAiIgBhIIA0AFIAABIg");
	this.shape_29.setTransform(27.75,130.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#006E91").s().p("AgMAjQAPgrAIgbIACAAIAABHg");
	this.shape_30.setTransform(4.6,128.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#006E91").s().p("AgaAiIAAhIIA0AFIAABIg");
	this.shape_31.setTransform(11.1,129.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#006E91").s().p("AgZAiIgBhIIA0AFIAABIg");
	this.shape_32.setTransform(19.4,130.025);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EE3D29").s().p("AgIgKIARgBIgMARIAAABIgFAFg");
	this.shape_33.setTransform(129.525,154.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EE3D29").s().p("AgZgnIAzgGIAAA0IgWAUIAAABIgBAAIgCABQgJAIgNAGIgEADg");
	this.shape_34.setTransform(123,158.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EE3D29").s().p("AgZgpIAzgGIAABZIgzAGg");
	this.shape_35.setTransform(114.775,159.825);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EE3D29").s().p("AgZgpIAzgFIAABYIgzAFg");
	this.shape_36.setTransform(98.275,161.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EE3D29").s().p("AgZgpIAzgGIAABZIgzAGg");
	this.shape_37.setTransform(106.525,160.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EE3D29").s().p("AgZgpIAzgFIAABZIgzADg");
	this.shape_38.setTransform(88.625,162.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EE3D29").s().p("AgZgpIAzgEIAABYIgzACg");
	this.shape_39.setTransform(80.325,163.05);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EE3D29").s().p("AgagqIA0gBIAABWIg0ABg");
	this.shape_40.setTransform(71.95,163.375);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EE3D29").s().p("AgaAqIAAhVIA0ACIAABVg");
	this.shape_41.setTransform(55.2,163.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EE3D29").s().p("AgZArIAAhWIAzABIAABWg");
	this.shape_42.setTransform(63.6,163.425);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EE3D29").s().p("AgaAqIABhWIA0ADIAABWg");
	this.shape_43.setTransform(45.675,162.75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EE3D29").s().p("AgaApIAAhVIA0AEIAABWg");
	this.shape_44.setTransform(37.3,162.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EE3D29").s().p("AgZAqIAAhXIAzAFIAABWg");
	this.shape_45.setTransform(28.95,161.425);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EE3D29").s().p("AgLgJIgBgDIAAgCIAaACIAAAbIgZgYg");
	this.shape_46.setTransform(5.7,155.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EE3D29").s().p("AATArQABAAAAAAQAAAAABAAQAAAAgBAAQAAAAgBAAIgFgDIgEgCIgSgLIgSgVIAAg0IA1AGIAABXIgIgEg");
	this.shape_47.setTransform(12.25,159.575);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EE3D29").s().p("AgZAqIAAhYIA0AGIAABXg");
	this.shape_48.setTransform(20.6,160.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#006E91").s().p("ABZAbQhkgCjrACQhTAAhcgEQgJgHANggQANghAPgBQAzgCEgAJQFMAKCPARIAABEQiUgUi8gFg");
	this.shape_49.setTransform(91.6659,28.2978);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#006E91").s().p("AkAAMQAAgWADgBQB6gcCEgIQAvgDAmAAQAZAAA8ABQA3ABAfgBIAABJQgcABg6gBQg4AAgdABIhWAEQg6AEjFASIgBgng");
	this.shape_50.setTransform(25.7469,27.9938);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FBC85B").s().p("AARAvQkvgChxgEQgMAAgPgxQgQgyAjAAQAZgBBLADQBLADAYgBQFVAAErAgIAAAvIgGAiQiXgKkCgCg");
	this.shape_51.setTransform(90.5871,35.1625);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FBC85B").s().p("Aj+gDQAAgMADgBQBzgeCIgHQA4gCAcAAICqACIABBfIiqgBIhVACQg7ACi5ALQgEgkgGgXg");
	this.shape_52.setTransform(25.5,35.195);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EE3D29").s().p("AmXBBIgBiCQCJAAEOgFQDrACCvAgIgGAmIgDAcIAAABIgHARQiwAVjgABIghABQh2AAj5gGg");
	this.shape_53.setTransform(92.275,44.9567);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EE3D29").s().p("AClBCIhXgEQisgGiJACIgFgSQgCgGgFgGIAAgEIgIg+QBqgcCHgCQAlAAAxABIBXADQA1ACAigBIACCEQgsgBgrgCg");
	this.shape_54.setTransform(26.125,44.3188);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#006E91").s().p("AgZAgIAAhEIAVACQALAVATAQIAAAig");
	this.shape_55.setTransform(130.2,24.075);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#006E91").s().p("AgZAgIAAhFIAzAGIAABFg");
	this.shape_56.setTransform(121.95,23.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#006E91").s().p("AgZAgIAAhEIAzAFIAABEg");
	this.shape_57.setTransform(113.725,22.475);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#006E91").s().p("AgZAiIAAhFIAzACIAABFg");
	this.shape_58.setTransform(97.225,21.225);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#006E91").s().p("AgZAgIAAhDIAzADIAABFg");
	this.shape_59.setTransform(105.475,21.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#006E91").s().p("AgaAiIAAhEIA1ABIAABEg");
	this.shape_60.setTransform(87.5,21.05);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#006E91").s().p("AgaAiIAAhEIA1ABIAABEg");
	this.shape_61.setTransform(71.55,20.95);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#006E91").s().p("AgaAiIAAhEIA1ABIAABEg");
	this.shape_62.setTransform(79.05,20.95);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#006E91").s().p("AgZAjIgBhFIA1AAIAABFg");
	this.shape_63.setTransform(63.15,20.85);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#006E91").s().p("AgaAjIAAhFIA1AAIAABFg");
	this.shape_64.setTransform(53.45,20.85);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#006E91").s().p("AgagiIA0gBIABBGIg1ABg");
	this.shape_65.setTransform(43.875,20.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#006E91").s().p("AgagiIA0gBIAABGIgzABg");
	this.shape_66.setTransform(35.5,20.975);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#006E91").s().p("AgZghIAzgDIAABGIgzADg");
	this.shape_67.setTransform(27.225,21.35);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#006E91").s().p("AgZgNQAOgKAUgLIARgDIAABFIgzAGg");
	this.shape_68.setTransform(3.1,23.65);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#006E91").s().p("AgZgfIAzgGIAABFIgzAGg");
	this.shape_69.setTransform(10.8,22.875);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#006E91").s().p("AgZgfIAzgGIAABGIgzAFg");
	this.shape_70.setTransform(19,22.025);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EE3D29").s().p("AgPgrIAfAAQgVAzgKAkg");
	this.shape_71.setTransform(130.175,53.75);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EE3D29").s().p("AgZgyIA0AAIgBBhIg0AEg");
	this.shape_72.setTransform(122.95,54.45);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EE3D29").s().p("AgZg0IAzgBIAABnIg0AEg");
	this.shape_73.setTransform(114.7,54.825);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EE3D29").s().p("AgZg4IA0gBIgBBwIg0ADg");
	this.shape_74.setTransform(98.125,55.575);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EE3D29").s().p("AgZg2IAzgCIAABtIg0AEg");
	this.shape_75.setTransform(106.4,55.225);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EE3D29").s().p("AgZg5IA0gBIgBBzIg0ACg");
	this.shape_76.setTransform(88.425,55.85);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EE3D29").s().p("AgZg7IA0gBIgBB2Ig0ADg");
	this.shape_77.setTransform(80.075,56.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EE3D29").s().p("Agag9IA1AAIgBB5Ig0ACg");
	this.shape_78.setTransform(71.725,56.375);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EE3D29").s().p("AgZA7IgBh4IA0ABIACB6g");
	this.shape_79.setTransform(54.9,56.225);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EE3D29").s().p("AgZA9IgBh6IA0AAIABB7g");
	this.shape_80.setTransform(63.3,56.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EE3D29").s().p("AgZA5IgCh0IA0ABIACB2g");
	this.shape_81.setTransform(45.4,55.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EE3D29").s().p("AgYA4IgDhyIA0ACIADBzg");
	this.shape_82.setTransform(37.05,55.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EE3D29").s().p("AgZA2IgBhvIAzACIACBxg");
	this.shape_83.setTransform(28.725,55);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#EE3D29").s().p("AADAwIgBgBIgNgrQgCgYgIgaIApgCIABBgg");
	this.shape_84.setTransform(4.85,54);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EE3D29").s().p("AgZAwIgBhjIA0AAIABBng");
	this.shape_85.setTransform(12.125,54.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EE3D29").s().p("AgYAzIgChpIAzABIACBsg");
	this.shape_86.setTransform(20.4,54.575);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FCC85B").s().p("AgEACIAAgDIAJADg");
	this.shape_87.setTransform(101.55,6.575);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EE3D29").s().p("AgcAhIgBhFIAFABIARAHIADAAIAEAEQALAIATAIIAAAsg");
	this.shape_88.setTransform(104.25,10.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FCC85B").s().p("AgqASIgBgjQAYAJAaAGQAMACAMAAIAMAEIAAAOg");
	this.shape_89.setTransform(91.75,4.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EE3D29").s().p("AgoAiIAAhEIBRABIAABDg");
	this.shape_90.setTransform(91.85,9.85);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EE3D29").s().p("AgeAhIAEgRIA4gxIABBDg");
	this.shape_91.setTransform(77.925,9.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FCC85B").s().p("AgfAZIAAgtIAfgFQAKAKAXAJIAAAgg");
	this.shape_92.setTransform(51.6,3.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EE3D29").s().p("AgeAiIABhDIA8AAIAABDg");
	this.shape_93.setTransform(51.6,9.525);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FCC85B").s().p("AgYAQIAxgfIAAAfg");
	this.shape_94.setTransform(40.825,4.55);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#EE3D29").s().p("AgogPIAjgTIAuAAIgBBEIhQABg");
	this.shape_95.setTransform(39.025,9.525);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EE3D29").s().p("AgdAKIA7gcIAAAhIg7AEg");
	this.shape_96.setTransform(25.25,11.775);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FCC85B").s().p("AgqgtIBVgJIAABnIhVAGg");
	this.shape_97.setTransform(116.775,106.425);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#006E91").s().p("Agfg1IA/gHIAABwIg/AKg");
	this.shape_98.setTransform(117.075,71.55);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#1D438A").s().p("AgfgxIA/gJIAABrIg/AJg");
	this.shape_99.setTransform(121.075,81.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#1D438A").s().p("AgegwIA+gKIAABrIg/AJg");
	this.shape_100.setTransform(112.55,83.15);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EE3D29").s().p("AgogeIBRgGIAABEIhRAFg");
	this.shape_101.setTransform(116.825,114.975);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#1D438A").s().p("AgngbIBQgLIAABEIhRAJg");
	this.shape_102.setTransform(116.85,97.975);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3F7745").s().p("AgXgfIAvgGQgBAfABAnIgvAFg");
	this.shape_103.setTransform(122.675,90.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#3F7745").s().p("AgfgdIA/gJIAABFIg/AIg");
	this.shape_104.setTransform(110.25,91.975);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FCC85B").s().p("AgfguIA/gFIgBBjIg+AEg");
	this.shape_105.setTransform(103.95,107.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EE3D29").s().p("AgdgfIA7gEIAABDIg7AEg");
	this.shape_106.setTransform(103.95,115.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#006E91").s().p("AgdglIA7gGIAABQIg7AHg");
	this.shape_107.setTransform(104.05,71.325);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#1D438A").s().p("AgdgcIA7gHIAABCIg7AFg");
	this.shape_108.setTransform(104,99.425);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FCC85B").s().p("AgqgsIBVgFIAABhIhVACg");
	this.shape_109.setTransform(91.475,108.25);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#006E91").s().p("Agfg7IA/gDIAAB3Ig/AGg");
	this.shape_110.setTransform(91.8,74.225);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#1D438A").s().p("AgfgxIA/gGIAABqIg/AFg");
	this.shape_111.setTransform(95.775,85.125);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#1D438A").s().p("AgegyIA+gFIAABqIg/AFg");
	this.shape_112.setTransform(87.25,85.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EE3D29").s().p("AgoggIBRgCIAABDIhRACg");
	this.shape_113.setTransform(91.5,116.45);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#1D438A").s().p("AgngbIBQgGIAAA/IhRAFg");
	this.shape_114.setTransform(91.55,100.35);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3F7745").s().p("AgfgdIA/gHIAABEIg/AEg");
	this.shape_115.setTransform(98.15,93.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3F7745").s().p("AgfgdIA/gFIAABBIg/AEg");
	this.shape_116.setTransform(84.95,94.425);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FCC85B").s().p("AgegsIA+gCIAABcIg/ABg");
	this.shape_117.setTransform(77.7,108.825);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#EE3D29").s().p("AgdgfIA7gBIAABAIg7ABg");
	this.shape_118.setTransform(77.725,116.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#006E91").s().p("AgdgpIA7gDIAABWIg7ADg");
	this.shape_119.setTransform(77.825,73.225);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#1D438A").s().p("AgdgcIA7gDIAAA9Ig7ACg");
	this.shape_120.setTransform(77.775,101.225);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FCC85B").s().p("AgqgtIBVgBIAABbIhVACg");
	this.shape_121.setTransform(65.225,109.175);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#006E91").s().p("Agfg9IA/AAIAAB6Ig+ABg");
	this.shape_122.setTransform(65.55,75.475);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#1D438A").s().p("Agfg0IA/gBIAABqIg/ABg");
	this.shape_123.setTransform(69.55,86.825);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#1D438A").s().p("AgfA2IAAhrIA/ABIAABrg");
	this.shape_124.setTransform(61,86.85);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#EE3D29").s().p("AgogfIBRgCIAABBIhRACg");
	this.shape_125.setTransform(65.225,116.975);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#1D438A").s().p("AgngdIBQgBIAAA8IhRABg");
	this.shape_126.setTransform(65.3,101.575);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#3F7745").s().p("AgfgfIA/gCIgBBBIg+ACg");
	this.shape_127.setTransform(71.9,95.125);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#3F7745").s().p("AgfAgIABhAIA+ABIAABAg");
	this.shape_128.setTransform(58.7,95.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FCC85B").s().p("AgfAyIAAhkIA/ACIgBBig");
	this.shape_129.setTransform(52,109.25);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#EE3D29").s().p("AgdghIA7gBIAABDIg7ACg");
	this.shape_130.setTransform(52,117.325);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#006E91").s().p("AgdApIgBhVIA8AEIAABVg");
	this.shape_131.setTransform(52.1,73.125);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#1D438A").s().p("AgdAfIAAg+IA7ACIAAA9g");
	this.shape_132.setTransform(52.075,101.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FCC85B").s().p("AgqAyIAAhoIBVAEIAABpg");
	this.shape_133.setTransform(39.525,109.15);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#006E91").s().p("AgfA6IAAh5IA/AEIAAB7g");
	this.shape_134.setTransform(39.775,74.125);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#1D438A").s().p("AgfA1IAAhuIA/AGIAABsg");
	this.shape_135.setTransform(43.825,85.95);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#1D438A").s().p("AgfA0IAAhtIA/AGIAABtg");
	this.shape_136.setTransform(35.25,85.175);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EE3D29").s().p("AgoAiIAAhFIBRADIAABDg");
	this.shape_137.setTransform(39.55,117.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#1D438A").s().p("AgoAfIAAhBIBRAGIAAA/g");
	this.shape_138.setTransform(39.6,100.825);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#3F7745").s().p("AgfAgIAAhDIA/AFIAABBg");
	this.shape_139.setTransform(46.2,94.65);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3F7745").s().p("AgfAgIAAhFIA/AHIAABEg");
	this.shape_140.setTransform(32.95,93.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FCC85B").s().p("AgfAvIABhnIA+AJIAABog");
	this.shape_141.setTransform(25.7,108.375);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#EE3D29").s().p("AgdAgIAAhFIA7AHIAABEg");
	this.shape_142.setTransform(25.725,116.375);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#006E91").s().p("AgdAlIAAhRIA7AHIAABSg");
	this.shape_143.setTransform(25.75,70.825);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#1D438A").s().p("AgdAeIAAhCIA7AIIAABBg");
	this.shape_144.setTransform(25.775,99.575);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FCC85B").s().p("AgrAxIABgXQAGgKAAgJQAAgigBgdIBRALIgBBng");
	this.shape_145.setTransform(13.05,106.25);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#006E91").s().p("AgfA0IAAhxIA/AIIAABzg");
	this.shape_146.setTransform(13.45,71);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#1D438A").s().p("AgfAyIAAhtIA/AKIAABtg");
	this.shape_147.setTransform(17.5,82.725);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#1D438A").s().p("AgMA0IACg1QACgigBgVIAXAEIAABtg");
	this.shape_148.setTransform(10.75,81.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#EE3D29").s().p("AgoAgIAAhGIBRAIIAABFg");
	this.shape_149.setTransform(13.25,115.15);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#1D438A").s().p("AgmAeIgCgxIABgRIABgDIBPAMIAABDg");
	this.shape_150.setTransform(13.275,97.875);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#3F7745").s().p("AgfAfIAAhGIA/AKIAABGg");
	this.shape_151.setTransform(19.85,91.85);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#3F7745").s().p("AgBAkIAAhDIAAgEIADAAIAABHg");
	this.shape_152.setTransform(9.575,90.275);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#EFF1EC").s().p("AmlKDQgChrAUxjQAggMA7ghQBDgkAXgLQAPgGARgTIBziKQCAAnCjBIQCbBFAZAZQAcAbgCBLQgBAegRCMQgDAZgkBwQgeBfACBJQADBWAACnQAFCQAeBpIAWBQQAKAtgCAkQgEA2ghAyQgfAwgxAfQhZA2h/AAInGADQgmiOgBg6g");
	this.shape_153.setTransform(91.8179,84.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#EFF1EC").s().p("AABNKQiAgBhXg2QgxgfgfgvQgigygDg3QgCgjAKguIAWhQQAfhqAIiOIAHj9QAChLgdheQgmh7gDgNQgmjZAxgwQAbgaCZhHQCkhOB9gmQgDADBLBFQBNBFAiAYIgbXkQguAJhtABIidAAg");
	this.shape_154.setTransform(34.2201,84.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#5F1806").ss(2.6).p("AhqhdQAnASBHAPQAkA1BGBq");
	this.shape_155.setTransform(61.4452,10.1963);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#5F1806").ss(2.6).p("ABggxQgqAKgVAFQgjAJgeAFQg4BLADgG");
	this.shape_156.setTransform(75.7117,5.7127);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EFF1EC").s().p("AgdBkQgNAAgKgTIgOgaIgXgvQgJgLgQgcQgNgWgNgjQgBgEADgCQADgCADACQACgEADgBQADAAADADIAIAJIABAAQARgCAfARQAIABAGAIQAIAKAKAYQALAXAIAJIAJAKIAOgXQAMgYAOgXQAMgfA9gLQAGgBAFAEIAFgCQAIgEAEAIQAAgBABAAQAAAAABAAQAAAAABAAQAAABABAAQAAABAAAAQABAAAAABQAAAAgBABQAAAAAAABIgCADQgBAFgCACIgKAKIgbAmQAHAJgFAJQgjAvgbAeQADAJgFAHQgFAHgJAAQgMAAgNAFIgNAHQgGACgGAAIgCAAg");
	this.shape_157.setTransform(67.5375,12.3229);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt_05, new cjs.Rectangle(-1.2,-0.7,143,183), null);


(lib.shirt_04 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape.setTransform(57.7,137.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#407F74","#F7E3B5","#FDD888"],[0,0.588,1],2.2,-3.4,-4.1,6.4).s().p("AgtAuQgUgTAAgbQAAgbAUgTQATgSAagBQAbABATASQAUATAAAbQAAAbgUATQgTAUgbAAQgaAAgTgUg");
	this.shape_1.setTransform(56.375,139.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#377C8B").s().p("AgtAuQgUgTAAgbQAAgaAUgTQATgUAaAAQAbAAAUAUQATATAAAaQAAAbgTATQgUAUgbAAQgaAAgTgUg");
	this.shape_2.setTransform(55.525,142.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_3.setTransform(87.2,137.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#407F74","#F7E3B5","#FDD888"],[0,0.588,1],2.2,-3.4,-4.1,6.4).s().p("AgtAuQgUgTAAgbQAAgbAUgTQATgSAagBQAbABATASQAUATAAAbQAAAbgUATQgTAUgbAAQgaAAgTgUg");
	this.shape_4.setTransform(85.825,139.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#377C8B").s().p("AgtAuQgUgTAAgbQAAgaAUgTQATgUAaAAQAbAAAUAUQATATAAAaQAAAbgTATQgUAUgbAAQgaAAgTgUg");
	this.shape_5.setTransform(84.975,142.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_6.setTransform(57.7,94.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#407F74","#F7E3B5","#FDD888"],[0,0.588,1],2.2,-3.3,-4.1,6.5).s().p("AgtAuQgUgSAAgcQAAgaAUgTQATgUAaABQAbgBATAUQAUATAAAaQAAAcgUASQgTAUgbgBQgaABgTgUg");
	this.shape_7.setTransform(56.375,96.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#377C8B").s().p("AgtAuQgUgTAAgbQAAgaAUgUQATgSAagBQAbABAUASQATAUAAAaQAAAbgTATQgUAUgbAAQgaAAgTgUg");
	this.shape_8.setTransform(55.525,99.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_9.setTransform(87.2,94.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#407F74","#F7E3B5","#FDD888"],[0,0.588,1],2.2,-3.3,-4.1,6.5).s().p("AgtAuQgUgSAAgcQAAgaAUgTQATgUAaABQAbgBATAUQAUATAAAaQAAAcgUASQgTAUgbgBQgaABgTgUg");
	this.shape_10.setTransform(85.825,96.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#377C8B").s().p("AgtAuQgUgTAAgbQAAgaAUgUQATgSAagBQAbABAUASQATAUAAAaQAAAbgTATQgUAUgbAAQgaAAgTgUg");
	this.shape_11.setTransform(84.975,99.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_12.setTransform(57.7,51.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#407F74","#F7E3B5","#FDD888"],[0,0.588,1],2.2,-3.4,-4.1,6.4).s().p("AgtAvQgUgUAAgbQAAgaAUgTQATgUAaAAQAbAAATAUQAUATAAAaQAAAbgUAUQgTATgbAAQgaAAgTgTg");
	this.shape_13.setTransform(56.375,53.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#377C8B").s().p("AgtAuQgUgTAAgbQAAgaAUgTQATgUAaAAQAbAAAUAUQATATAAAaQAAAbgTATQgUAUgbAAQgaAAgTgUg");
	this.shape_14.setTransform(55.525,56.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_15.setTransform(87.2,51.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#407F74","#F7E3B5","#FDD888"],[0,0.588,1],2.2,-3.4,-4.1,6.4).s().p("AgtAvQgUgUAAgbQAAgaAUgTQATgUAaAAQAbAAATAUQAUATAAAaQAAAbgUAUQgTATgbAAQgaAAgTgTg");
	this.shape_16.setTransform(85.825,53.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#377C8B").s().p("AgtAuQgUgTAAgbQAAgaAUgTQATgUAaAAQAbAAAUAUQATATAAAaQAAAbgTATQgUAUgbAAQgaAAgTgUg");
	this.shape_17.setTransform(84.975,56.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#407F74").ss(2.6).p("ABSNFQhHAAhCgKQhXgOgqgaQgygfgfgwQghgxgEg3QgCgjAKguQACgKAUhGQAfhrAIiNQAFioAChWQAChKggheQgqh3gDgRQgnjiAvgvQAXgXCYhCQCbhECCgqQAIgDAHAEQAHAEABAIQASBJAaA1QAqBWA3AI");
	this.shape_18.setTransform(32.896,84.2019);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#407F74").ss(2.6).p("ACDNCQCAAABXg3QAygfAfgvQAhgyAEg2QACgkgLguQgCgIgUhIQgdhogFiQQAAingDhWQgChJAehfQAkhwADgZQARiMABgeQAChLgcgbQgYgYiUhDQichFh/gpQgHgCgGADQgGADgDAHQgSAqgbAqQgrBAg4AuQg4AuhwBXQhgBKgPAOIgcJOQgUJZAmA4QAOAVEEgGQCGgDCygHg");
	this.shape_19.setTransform(86.712,84.9529);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#70AEA3","#FDD888","#CED6CB"],[0,0.494,1],0,-5.5,0,145.4).s().p("AgXBjQgngLgWguQgNgbADgaQACgfAWgPIADgCIBvgpQALgEAGAJQAYAeAHAiQAIAigKAeQgJAfgbATQgaAUgcAAQgNAAgKgEg");
	this.shape_20.setTransform(28.5696,15.9385);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#70AEA3","#FDD888","#CED6CB"],[0,0.494,1],0,-59.1,0,90.7).s().p("AkQKhQgLgDgBgKQgEgqgUgjQgFgKgNgUQgQgYgGgNQgLgVgDgUQgIguAdg5QAXguAYgLQgNgYgUgWIh9ABQgGAAgFgEQgEgEAAgHQgBgGAFgFQAEgEAHAAIB4gBQAUgmAJgnIgFgDQgGgGgEgKIgHgVIgFgSQgIgcgEgPQgFgZACgWQAIhEBQg5QAUgOAYgOQA0ggAVgTIAAgBQAFgEAGAAQAGAAAFAFQAEAEAAAHQAAAGgFAEIAAABQgdAbAVBKIAAACQANArACAWQADAmgQAaQgKAQgZAUIgQAOQgcAYgPAKQgaARgTADIgJABQgJAlgPAgQCugCA0gNQA1gNAqgXQAghagKhbQgigEgZgrQgUgigKguQgJgqABg2QAAgfAEhCQABgHAFgEQAGgEAHABQBAAOAyAuQAbAZAPAfQAVAtgIA/QgIBFgpAcQgJAGgGACQAIBTgVBPQAggXAXgeQAvg7AahyQAjiYgghkQgSg4gogrQgtgyg4gLIgEACIgEAAQgIAAgFgIQgHgFACgIIAAgDQgHgfgCgSQgCgcAEgXQAHgbAcgVQAZgTAhgHIAIgBIA+AaIAHACQADABAAAEQAEAegIAWQgIAVgXAcQgYAegjAQQAlARAhAfQAzAyAVBFIAEAMQAKgQANgKIgCgDQgOgaAPgdQAPgdAogZQApgaBOgOQAFgCAGAEQAFADACAHQALBBgeA5QgQAhgZAMQgPAJgcAAQgVAAgXgGQgMgEgJgFQgYARgMAnQAJBKgRBcQALgdAigiQAjgiAdgEQAQgDAeAHIASACQAeAEAMAGQAbANgEAdQgCARgXAUQgSAPgoAYIgEACQgpAZghACIgJABQgkAAgagWQgDACgFAAIgGgBQgNA2gOAlQgVA2gfAmIgIALIAOAIQAbgkA7APQAYAGAzBSQAYAmAVAnQAEAHgEAHQgEAIgIAAQgGACg1AAIgWAAQg2gBgagKQgTgHgGgMQgOgZgFgdQgHgfAGgZIgZgNQgaAYglAWQgEAJgKAAIgCgBQgXAMgaAKQANAHAIAMQAcgFATAOQAiAbgGBVQgDAngIAjQgCAIgHADIgGABQgEAAgEgCQgkgWgbgaQg3gyABgnQABghAlgUIAHgEQgJgHgbgIIgDgBQg3AOioACQAPAUAOAaQAXAJAVAlQAkA9AAA4QABAugXAyQgQAjgnA6QgFAGgIAAg");
	this.shape_21.setTransform(84.9233,70.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#70AEA3","#FDD888","#CED6CB"],[0,0.494,1],0,-43.3,0,107.6).s().p("AhFC5QgGAAgEgFQgEgFABgGIAPkUQABgHAGgEIBfhAQAFgFAIADQAHACACAHQAaBBAAA0QAABGgoAuQgKALgRAPIgRAPQgqAqgJAhQgEAMgLAAg");
	this.shape_22.setTransform(47.5722,53.7554);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#70AEA3","#FDD888","#CED6CB"],[0,0.494,1],0,-24.4,0,126.5).s().p("AA/CYQgJgBgEgIQgJgUgVgTQgMgMgdgWQgigZgPgOQgZgYgKgbQgEgKAIgGIB5huQAFgFAGABQAGAAAFAFQA1A5AKBSQAKBRgmBFQgEAIgJAAg");
	this.shape_23.setTransform(67.3759,34.8475);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#70AEA3","#FDD888","#CED6CB"],[0,0.494,1],0,-135.1,0,15.8).s().p("AgwDSQgLgBgBgMIgXj5QgBgEACgEIBKiOQAGgIAHAAQAJAAAEAIQAdAvATAzQAUA3gBAqQgCApgUAlQgMAWghApQgiAqgPAbQgEAIgJAAg");
	this.shape_24.setTransform(46.0881,145.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#70AEA3","#FDD888","#CED6CB"],[0,0.494,1],0,-125.3,0,25.6).s().p("AlTEVQgMgBgCgLQgDgMALgFQB3g5BNh5QARgbAXgqQAhg6AWgdQAkgxAygqQA+gyBDgVQApgNBVgKIAogFQAHgBAFAEQAFAEABAHIAKB2QABAHgFAGQgFAEgIAAQghgDgbAeQgaAbgDAlQgEAjAOAoQALAeAXAoQAFAJgGAHQgFAJgKgCQgrgGgZgGQgngKgcgPQgxgbgVgsQgzBqhhBEQg3AmhBAVQhAAUhCAAg");
	this.shape_25.setTransform(93.0352,135.79);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#70AEA3","#FDD888","#CED6CB"],[0,0.494,1],0,-43.3,0,107.6).s().p("AAzGYQgLgCgBgNQgCiDhNh5QgSgcghgqQgsg6gVgtQgcg7AAg7IgLAAIANiWQAAgKACgCIAKgFIAEgIIAEgIIB9hIQALgGAHAJQAIAJgGAJQgQAdAPAlQAPAjAeASQAfASArAEQAgADAugEQAJgBAFAJQAFAIgFAIQgYAlgPAUQgZAfgaAUQgsAhgxAAQBLBaAUB1QANBGgKBGQgKBGgeA+QgEAIgKAAg");
	this.shape_26.setTransform(19.569,53.717);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#70AEA3","#FDD888","#CED6CB"],[0,0.494,1],0,-118.1,0,29.7).s().p("ABoF4QgIgFgCAAIgDACQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAIhZgPQgJgEAAgLQABgfgRgdQgQgdgcgPQgIgFgZgKQgjgNgQgLQgGgFAAgIIAEiWQAAgGAEgEQAEgEAGgBQAvgCAugXQANgGACgHQACgGgKgMQgegogigRQgJgFABgKIAZkFQABgHAEgEQAFgEAHABQBFAHAsBGQAMASACAVQACAVgJATQgPAjgmAFIgGABIgHABQgEABgBAFQgCALAGAIQAJAKAeAKIADABQBlAgAcBBQAKAXgEAbQgDAbgQAVQgZAkgogCQgLgBgUgGQgWgHgJACQgKABgFALQgGAJACAKQADALALAJQAGAEATALIANAHQAmAVAXAeQAYAeAGAjQAGAfgFAYQgFAagVAbIgBABQgDAAgEgEg");
	this.shape_27.setTransform(18.3204,130.2686);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#70AEA3","#CED6CB"],[0,1],2.4,83.6,-1.3,-40.8).s().p("AnHM9Qgmg4AUpZIAcpOQAPgOBghKQBwhXA4guQA4guArhAQAbgqASgqQADgHAGgDQAGgDAHACQB/ApCcBFQCUBDAYAYQAcAbgCBLQgBAegRCMQgDAZgkBwQgeBfACBJQADBWAACnQAFCQAdBoIAWBQQALAugCAkQgEA2ghAyQgfAvgyAfQhXA3iAAAQiyAHiGADIhpABQieAAgLgQg");
	this.shape_28.setTransform(86.712,84.9529);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#70AEA3","#CED6CB"],[0,1],2.9,85.7,-0.8,-38.7).s().p("AATNFQhOAAghgFQg9gLgqgkQg0gtgaglQgkgygEgzQgCgjAKguIAWhQQAfhrAIiNIAHj+QAChKggheQgqh3gDgRQgnjiAvgvQAXgXCZhCQCbhECDgqQAIgCAHADQAGAEACAIQAQBIAaA2QAqBWA3AIIALWaQguAJhtAAIidgCg");
	this.shape_29.setTransform(33.9981,84.4136);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#5F1806").ss(2.6).p("AhqhdQAnASBHAPQAkA1BGBq");
	this.shape_30.setTransform(61.9452,9.4963);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#5F1806").ss(2.6).p("ABggxQgqAKgVAFQgjAJgeAFQg4BLADgG");
	this.shape_31.setTransform(76.2117,5.0127);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EFF1EC").s().p("AgdB3QgLAAgLgEQgOgEgEgGIgUgkQgEgHgOgHQgNgHgEgIQgFgHgGgWQgHgXgDgFQgGgLgGggQgIglgDgIQgBgDAOACQANABAEACQACgDADgBQAEgBADADIAIAKIAAAAQARgCAfARQAJAAAGAJQAHAKALAXQAKAXAJALIAJAIIAOgWQAMgZAOgXQALgeA9gMQAGAAAFAEIAGgDQANgGACAEIANgGQALgEgCACQAHAJgBABIgFAPQgEAOACAAQATADgIACIgPACQgEAGgCAGQgCAHgEAFIgCAdQADADgPAHQgQAIgBACQgLAPgTARQgXAWgJAJQADAIgLAIQgJAHgKAAQgFAAgCAHQgDAHgDACIgRAJQgMAGgGAAIgBAAg");
	this.shape_32.setTransform(68.5865,12.4935);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt_04, new cjs.Rectangle(-0.7,-1.2,142.89999999999998,172), null);


(lib.shirt_03 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgYAAgSgSQgRgRAAgZQAAgXARgSQATgSAXAAQAZAAASASQARARAAAYg");
	this.shape.setTransform(67.65,148.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgYAAgSgSQgRgRAAgZQAAgXARgSQATgSAXAAQAZAAASASQARARAAAYg");
	this.shape_1.setTransform(67.65,94.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgXAAgTgSQgRgRAAgZQAAgYARgRQASgSAYAAQAZAAASASQARARAAAYg");
	this.shape_2.setTransform(67.65,43.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAQQgGgGgBgKQABgIAGgHQAHgHAIAAQAKAAAGAHQAGAHAAAIQAAAKgGAGQgGAHgKgBQgIABgHgHg");
	this.shape_3.setTransform(68.9,146.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAQQgGgHgBgJQABgIAGgHQAHgGAIAAQAKAAAGAGQAGAHAAAIQAAAJgGAHQgGAGgKAAQgIAAgHgGg");
	this.shape_4.setTransform(68.9,92.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAQQgGgGgBgKQABgIAGgHQAHgGAIAAQAKAAAGAGQAGAHAAAIQAAAKgGAGQgGAGgKAAQgIAAgHgGg");
	this.shape_5.setTransform(68.9,40.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EEBA33").s().p("AgqAqQgRgRAAgZQAAgXARgSQATgSAXAAQAZAAASASQARARAAAYQAAAZgRARQgSASgZAAQgYAAgSgSgAgDgjQgGAHAAAJQAAAKAGAGQAGAGAJAAQAKAAAHgGQAGgGAAgKQAAgJgGgHQgHgGgKAAQgJAAgGAGg");
	this.shape_6.setTransform(67.65,148.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EEBA33").s().p("AgqAqQgRgRAAgZQAAgXARgSQATgSAXAAQAZAAASASQARARAAAYQAAAZgRARQgSASgZAAQgYAAgSgSgAgDglQgGAGAAAJQAAAKAGAGQAGAGAJAAQAKAAAHgGQAGgGAAgKQAAgJgGgGQgHgHgKAAQgJAAgGAHg");
	this.shape_7.setTransform(67.65,94.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EEBA33").s().p("AgqAqQgRgRAAgZQAAgYARgRQASgSAYAAQAZAAASASQARARAAAYQAAAZgRARQgSASgZAAQgXAAgTgSgAgDglQgGAGAAAKQAAAJAGAGQAGAGAJAAQAKAAAHgGQAGgGAAgJQAAgKgGgGQgHgHgKAAQgJAAgGAHg");
	this.shape_8.setTransform(67.65,43.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5F1806").ss(2.6).p("Ah2tGQhwAygTATQgLALgGAVQgKAhACA9QABAbAEAjQAFAnAIAuIABAHQAFAXANAkQAHAUAQArQATA2AIAsQADAQAAAJIADAaIgCBdQAABDgDA+QgBA0gEAqQgHBNgLA7QgIAlgEAQQgCAMgEALIAAABIgSBIQgHAggJAyQgHAjgHAoQgHAugCATIAdA5QAmA/AsAcQA4AiBHAeQBCAdgMgLIEaj5");
	this.shape_9.setTransform(28.5388,97.51);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6).p("AF1GVIgMgvQgGgZgFgZQgLg/gEhQQgDg1AAgrIgBi5QgBgUACgWIAHg0QAHgiAOgsQAQgvAHgWQALglADgaIAMhhQAEgkACgeQADhGgUgdQgDgGgFgFQgWgViAg7QiwhQiRgtIhgAlQgNAFgIAMQgHANABAOIAHBQIAAAGQAAANgGALQgHALgMAFQgdANgtAKQgjAHgSAEQgeAHgWAIIgQSHIACBbIEgEkIBrgPQB7gVBVggQBhglBMg/IA5g3QgCgYgFgmQgGgpgHgqQgGgjgHgkQgEgTgIglg");
	this.shape_10.setTransform(93.3976,89.9498);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5F1806").ss(2.6).p("ADqgCQjlgRjjAcIgLAB");
	this.shape_11.setTransform(38.913,12.7449);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(2.6).p("AjagCQDagQDbAb");
	this.shape_12.setTransform(95.4827,11.714);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5F1806").ss(2.6).p("AEEATIgDAAIoBglIgDAA");
	this.shape_13.setTransform(27.45,25.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5F1806").ss(2.6).p("AmTAXIMngt");
	this.shape_14.setTransform(93.975,23.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#5F1806").ss(2.6).p("AmXARQAEgBAGAAIMxgf");
	this.shape_15.setTransform(92.7878,33.1941);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5F1806").ss(2.6).p("Aj+gNIH9Ab");
	this.shape_16.setTransform(26.15,34.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#5F1806").ss(2.6).p("AkDgTIIHAn");
	this.shape_17.setTransform(26.8,41.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#5F1806").ss(2.6).p("AmWAQIAFAAQGWAPGSgy");
	this.shape_18.setTransform(93.0974,40.0755);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#5F1806").ss(2.6).p("AD8ATQj6AGj2grIgFgB");
	this.shape_19.setTransform(27.4153,50.423);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#5F1806").ss(2.6).p("AmVANIAHABQGUApGPhS");
	this.shape_20.setTransform(92.6829,49.68);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#5F1806").ss(2.6).p("Al2AYQCrARDMgTQCdgODYgn");
	this.shape_21.setTransform(89.8793,72.0873);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#5F1806").ss(2.6).p("Al2AYQCqARDKgSQCbgPDWgmIAHgC");
	this.shape_22.setTransform(89.8868,77.1002);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#729BAF").ss(2.6).p("Al3AZIAFAAQCrAQDJgTQCegODWgn");
	this.shape_23.setTransform(89.4421,74.5319);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#5F1806").ss(2.6).p("AjKgfQBcAkBxAPQBcAMB5gB");
	this.shape_24.setTransform(30.6928,78.7242);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#5F1806").ss(2.6).p("AjKgfQBbAkByAPQBcAMB5gB");
	this.shape_25.setTransform(30.7178,73.5742);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#729BAF").ss(2.6).p("AjKgfQBbAkByAPQBcAMB5gC");
	this.shape_26.setTransform(30.7204,76.1048);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#5F1806").ss(2.6).p("ApggdQDdArDqAMQGCATF5hI");
	this.shape_27.setTransform(67.9464,63.7826);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#5F1806").ss(2.6).p("ApIgUIAGABQDPAtDVAKQF7ASFshc");
	this.shape_28.setTransform(68.0393,86.9157);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F3775F").ss(2.6).p("AjSgsQCGAqBGAQQBzAcBeAD");
	this.shape_29.setTransform(31.3475,102.529);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F3775F").ss(2.6).p("Al2AnQC8AXC9gWQC+gXCxhDIACgB");
	this.shape_30.setTransform(89.6327,101.9209);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#5F1806").ss(2.6).p("AjghKQA4AyCRArQCDApB7AMIAGAA");
	this.shape_31.setTransform(28.5404,138.6388);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#5F1806").ss(2.6).p("AjkhLIACADQA7AxCPArQCBAoB6ALIAGAB");
	this.shape_32.setTransform(28.95,133.5595);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#729BAF").ss(2.6).p("AjghKQA4AyCQArQCEApB7ALIAGAB");
	this.shape_33.setTransform(28.5404,136.2138);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#5F1806").ss(2.6).p("AmKBDQDuAIC1ggQC0ggC5hQ");
	this.shape_34.setTransform(91.1087,137.4333);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#5F1806").ss(2.6).p("AmKBDQDsAIC0ggQCygfC3hOIAHgD");
	this.shape_35.setTransform(91.1059,132.4237);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#729BAF").ss(2.6).p("AmJBDQDtAIC2ggQCzggC5hP");
	this.shape_36.setTransform(91.0342,134.8992);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#5F1806").ss(2.6).p("ADXAvIgDAAQjZgWjNhI");
	this.shape_37.setTransform(30.5098,112.1124);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#5F1806").ss(2.6).p("Al0AkQC7AVC8gVQC+gVCxg+");
	this.shape_38.setTransform(89.2406,111.205);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#5F1806").ss(2.6).p("ADgA3IgDAAQjkgTjThc");
	this.shape_39.setTransform(29.5924,126.6544);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#5F1806").ss(2.6).p("Al/ApQGHAaF1hx");
	this.shape_40.setTransform(90.3194,125.4193);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#5F1806").ss(2.6).p("AD8BQQiEAAh9gqQiAgqhphO");
	this.shape_41.setTransform(27.9899,144.1019);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#5F1806").ss(2.6).p("AmLBRIAIABQDJAVDIgtQDJgsCuhmIADgB");
	this.shape_42.setTransform(92.956,144.9156);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#5F1806").ss(2.6).p("Ak4BmIAFAAQCvAECcg0QCmg2Buho");
	this.shape_43.setTransform(103.8125,162.0897);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#5F1806").ss(2.6).p("Ai3hrQBFBWBgA0QBeA2ByASIAFAA");
	this.shape_44.setTransform(19.7079,162.435);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#5F1806").ss(2.6).p("ADrB3IgKiVQgBgMgHgKQgHgKgLgFIhUgnQhMAYhkAnQhbAkhSAk");
	this.shape_45.setTransform(40.0736,10.661);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#F3775F").ss(4.6).p("AjRhuQBKBXB6A2QBhAsCRAc");
	this.shape_46.setTransform(23.6225,155.1795);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#F3775F").ss(4.6).p("AlZBqQDvgQB9ghQDBgzBwh2");
	this.shape_47.setTransform(100.4732,154.4118);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#5F1806").s().p("AAtCAQhGgeg4giQgtgcgmg+Igdg5IAKhBIAEABQBEBWBgA1QBfA1ByASIhfBTQABAAABABQAAABAAAAQAAAAAAABQAAAAgBAAQgHAAgwgVg");
	this.shape_48.setTransform(19.375,166.4282);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3F7745").s().p("Ag7BIQhgg2hEhUIgFgBIAOhMIADABQBKBXB7A3QBhArCQAdIABABIhPBHQhxgShfg2g");
	this.shape_49.setTransform(23.8,158.35);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5F1806").s().p("AjaAMIgCAAQALg6AHhOIABAAQDMBKDaAWIgBCZQjkgUjShdg");
	this.shape_50.setTransform(29.625,119.75);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3F7745").s().p("AjTAAIgBAAQAEgqABg0IAEABQCGAqBFARQB0AcBeADIADAAIgCBhQjZgVjNhJg");
	this.shape_51.setTransform(30.625,107.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#5F1806").s().p("AjPAhIgXg/QgNgjgFgXQD3AsD5gGIABAAIgCCMQjqgNjcgsg");
	this.shape_52.setTransform(27.825,57.45);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3F7745").s().p("AjyAaIgBgHQgIgsgEgnIH/AoIABAAIgCBZIgBAAIg7AAQjbAAjagng");
	this.shape_53.setTransform(27.2,45.8856);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F3775F").s().p("AECAzIn/goQgEgigCgbIH5AbIAEgKIAKAAIgBBUg");
	this.shape_54.setTransform(27,38.225);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#5F1806").s().p("ACnCUQiQgdhhgsQh7g3hKhWIgDgBIARhRIABAAQBpBOCAAqQB9ApCDABIAqAqIhrBdg");
	this.shape_55.setTransform(29.8,150.75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#5F1806").s().p("Al8BxIgDAAIACiSIABAAQC7AVC9gVQC9gVCxg/IAGAAQAEBQAMA+QkwBdk7AAQhIAAhJgFg");
	this.shape_56.setTransform(90.025,118.2414);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#5F1806").s().p("AkVCRIh1h3QDJAVDIgtQDJgrCuhnQAIAkAFAjIgDAAQhwB2jBAzQh8AhjvAQg");
	this.shape_57.setTransform(93.65,150.525);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#5F1806").s().p("AmSBgIACiZQGUAqGQhTIgBAJQgEAagLAlIgXBEIgEgBQksA6kxAAQhPAAhPgDg");
	this.shape_58.setTransform(92.85,56.8451);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3F7745").s().p("AmWA6IABhdQGWAPGSgzIAEABIgKBWQkKA4kMAAQiGAAiHgOg");
	this.shape_59.setTransform(93.5,45.2667);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3F7745").s().p("AkOCSIhIhJIABAAQDvgQB8ghQDBgyBwh3IADAAQAIArAFApIgGABQhvBoilA2QiRAwiiAAIgYAAg");
	this.shape_60.setTransform(100.15,157.6893);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#5F1806").s().p("Ak2BCQCvAECdg0QClg1BvhpIAGgBIAHA9Ig5A4QhMA+hhAlQhUAgh8AVIhrAOg");
	this.shape_61.setTransform(104.075,165.675);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F3775F").s().p("AmZAxIABhEIMyggQgCAegEAjIgFgBQk3Ank4AAQhcAAhdgDg");
	this.shape_62.setTransform(93.875,36.7955);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#5F1806").s().p("AkEAhQgBg8AJggIIBAlIgCBIIgKABIgEAJg");
	this.shape_63.setTransform(27.0648,29.775);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#5F1806").s().p("AmXgVIMfgsQAUAdgDBGIsyAgg");
	this.shape_64.setTransform(93.9511,28.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F3775F").s().p("Ak0ApQAGgVALgLQATgSBwgyQDjgdDlARIAFgBIAHBmIABAEIg0ALQgeAHgWAIIgBATg");
	this.shape_65.setTransform(32.725,19.6475);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F3775F").s().p("AmPBIQAWgIAegHIA1gLQAtgKAcgNQANgFAGgLQAHgKAAgNIAAgGIgEgvIAEAAQDZgQDcAcIAAgBQCAA6AVAVIAJALIsfAsg");
	this.shape_66.setTransform(93.2,18.4441);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#5F1806").s().p("AjXAzIgDAAIgDghQgBgOAHgLQAHgMANgGIBgglQCRAuCwBOIAAABQjbgcjaAQg");
	this.shape_67.setTransform(95.1188,6.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#5F1806").s().p("Ag5gEQBjgnBNgYIBUAnQALAFAHAJQAHAKAAAMIADAvIgFABQjkgQjkAcQBSglBbgjg");
	this.shape_68.setTransform(39.725,6.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#5F1806").s().p("AlyBsIgDAAIADiYQF7ASFshdIAACJQiwBEi+AXQhcALhdAAQhgAAhggMg");
	this.shape_69.setTransform(89.25,95.0003);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5F1806").s().p("ADOBuQhdgDhzgcQhGgRiHgqIgDAAQACg/ABhCQDOAtDUAKIgCCkg");
	this.shape_70.setTransform(30.975,95.975);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3F7745").s().p("Al1BVIgBAAIABhaIACAAQC8AXC9gWQC+gXCxhDQAAAqACA1IgGAAQixA+i+AVQheALhfAAQhdAAhdgKg");
	this.shape_71.setTransform(89.325,106.3688);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F3775F").s().p("AmABAIABhQQGCASF5hJIAFABQgOAsgHAhQjYApicAOQhsAKhjAAQhYAAhRgIg");
	this.shape_72.setTransform(90.875,68.1264);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F3775F").s().p("AlzAlIgBAAIAAgZQCrAQDKgTQCdgNDWgoIABAAIgDAbQjWAmicAPQhnAJhfAAQhaAAhTgIg");
	this.shape_73.setTransform(89.575,75.8129);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F3775F").s().p("AjSATIAChcIABgBQBcAlByAPQBaAMB5gBIgBBWQjUgKjPgug");
	this.shape_74.setTransform(31.2,83.025);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F3775F").s().p("AlzBRIAChtIAAAAQCrARDIgSQCdgODVgoQgBAXAAAUIABAuQkxBOk7AAQg+AAg9gDg");
	this.shape_75.setTransform(89.325,82.3959);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F3775F").s().p("AgBAhQhygPhcgjIgBAAIgCgaIADAAQBcAlByANQBbAMB5gBIAAAaIgTAAQhtAAhUgLg");
	this.shape_76.setTransform(31.175,77.3788);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F3775F").s().p("AAAAhQhxgOhcgkIgEAAIgDgYIAHgCQBcAlBxAOQBcAMB5gBIAAAZIgbAAQhoAAhSgLg");
	this.shape_77.setTransform(31,74.7833);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F3775F").s().p("AAMBEQhxgPhcgkIgHABQgHgrgUg2QDeAtDpAMIgCBlIgTABQhuAAhVgMg");
	this.shape_78.setTransform(29.75,68.7038);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F3775F").s().p("Al2AlIAAgZQCsARDLgTQCegNDYgoIgFAYIAAAAQjWAnicAPQhtAJhkAAQhWAAhPgHg");
	this.shape_79.setTransform(89.8,73.296);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F3775F").s().p("AmEBbIAAhfIADAAQGHAZF1hxIAKAyQi3BOiyAfQiRAai2AAIhZgCg");
	this.shape_80.setTransform(90.525,130.0221);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F3775F").s().p("AmKBQIAAgZQDtAHC2ggQCzgeC5hRIAGAZIgFAAQi5BQi0AgQiRAai1AAQguAAgvgCg");
	this.shape_81.setTransform(91.125,136.13);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F3775F").s().p("AmHBPIAAgZQDsAIC0ggQCzgeC2hPIAGAWQi5BQizAfQiTAai4AAIhYgBg");
	this.shape_82.setTransform(90.8,133.7462);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F3775F").s().p("AgZAvQiPgrg6gxIAMg1IACABQDTBdDkASIgBBVQh5gMiCgog");
	this.shape_83.setTransform(28.975,130.825);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F3775F").s().p("AgZAhQiRgqg3gzIgEgBIAAgBQAFgLACgLQA5AxCPAqQCDAoB5AMIAAAbQh7gMiEgpg");
	this.shape_84.setTransform(28.65,134.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F3775F").s().p("Al3BvIgYgYIgBhCQDuAIC1gfQC0ggC5hRIAFgBIAMA5QiuBmjJAsQiIAeiKAAQg/AAhAgGg");
	this.shape_85.setTransform(91.725,142.0983);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F3775F").s().p("AgLBAQiAgqhphOIgBAAIALgxIAKACQA3AyCSAtQCDAoB7ALIABAxIAOAPQiEgBh9gqg");
	this.shape_86.setTransform(28.55,141.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F3775F").s().p("AgVAiQiSgsg3gyIgKgCIAGgXIAEABQA3AzCRAqQCEApB7AMIAAAYQh7gLiDgpg");
	this.shape_87.setTransform(28.35,137.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#5F1806").ss(2.6).p("AgxABIBjgB");
	this.shape_88.setTransform(67.2,11.025);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EFF1EC").s().p("AgtA5IgIhyIBdgCIAJgBIAFA1IAAAGQAAAMgHALQgGALgNAFQgcANgsAKg");
	this.shape_89.setTransform(68.2,16.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt_03, new cjs.Rectangle(-2.9,-1.3,140.3,186.70000000000002), null);


(lib.shirt_02 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AgxABIBjgB");
	this.shape.setTransform(66.2,11.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6).p("AgTrTQgDDOgKGaQgHFqAFD9QACA+AQAxQATA8AnAg");
	this.shape_1.setTransform(60.5209,96.4032);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(3.6).p("AA5MIIgEgFQggg0gRhJQgNg/gBhHQAAgtAWiJQAXiJAAgsQgBiQgtkYQgrkOACjvIAAgD");
	this.shape_2.setTransform(26.4852,90.3875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(3.6).p("AA4LyIgEgGQg9hjgBiOQgBgtAWiJQAYiKAAgrQgBhsgPhuQgGgugXiUQgskCACjv");
	this.shape_3.setTransform(18.939,91.6051);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgYAAgSgSQgRgRAAgZQAAgXARgSQATgSAXAAQAZAAASASQARARAAAYg");
	this.shape_4.setTransform(66.65,148.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgYAAgSgSQgRgRAAgZQAAgXARgSQATgSAXAAQAZAAASASQARARAAAYg");
	this.shape_5.setTransform(66.65,94.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgXAAgTgSQgRgRAAgZQAAgYARgRQASgSAYAAQAZAAASASQARARAAAYg");
	this.shape_6.setTransform(66.65,43.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F1806").ss(2.6).p("AAYrHIhSATIgSTqQAFAvARAdQAZAtAYAWQAFAFAJgEIBQgF");
	this.shape_7.setTransform(49.8226,96.8468);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6).p("AkSNCQEHAIBOAAIAbgBQAogBAkgIQBAgOAwgeQAygfAfgwQAhgxAEg3QACgjgLguQgCgJgUhHQgdhogFiQQAAiogDhWQgChJAehfQAkhwADgYQARiNABgeQAChLgcgbQgMgMg/ggQhPgohsgsQh3gxhagcIhgAlQgNAFgHAMQgHANABAOIAHBQIAAAGQAAANgHALQgHALgMAFQgcANguAKIgpAIQgqAKgVAIQgWShAHBBQAHA8AbAzQAQAfAUAUIADADg");
	this.shape_8.setTransform(92.2364,84.1384);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5F1806").ss(2.6).p("AEFM/QgeAGgtADQgeACgsAAQgyAAgZAAIgcgBQgjgBgpgIQhAgPgugdQgygfgfgwQghgxgEg3QgCgjAKguQACgKAUhGQAfhrAIiNQAFioAChWQAChKggheQgqh3gDgRQgnjiAvgvQAMgMA+gfQBQgnBwguQB5gxBcgcIBUAnQALAFAHAJQAHAKABAMIAKCX");
	this.shape_9.setTransform(31.2717,84.1312);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#EC6C3B").ss(3.1).p("ABTMUIAlABQhBhkgCigQgBgtAXiJQAYiJgBgsQgBiQgtkeQgskVACjwIiPA8QgCDwAsD7QAYCPAGAtQAPBrABBsQAAAsgXCKQgYCJABAsQABBGAPA2QAQA8AkA1g");
	this.shape_10.setTransform(23.483,88.6954);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5F1806").ss(3.6).p("Ag3MIIADgFQAgg0ARhJQANg/ABhHQABgtgWiJQgYiKAAgrQABiRAtkXQAskOgCjvIAAgD");
	this.shape_11.setTransform(107.2808,90.3875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(3.6).p("Ag3LyIAEgGQA8hhADiQQAAgtgWiJQgXiJAAgsQABiQAskMQArkCgCjv");
	this.shape_12.setTransform(114.8372,91.6051);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#EC6C3B").ss(3.1).p("AhTMUIgkABQBBhjACihQABgtgYiJQgXiJAAgsQABiQAukeQAskVgCjwICPA8QACDwgsD7QgtECgBCRQAAAsAXCKQAYCJgBAsQgBBFgPA3QgQA7gkA2g");
	this.shape_13.setTransform(110.3145,88.6964);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EC6C3B").s().p("AAnLxQgjg2gQg7QgPg3gBhFQAAgtAXiJQAXiJgBgsQgBhsgOhsQgFgsgZiQQgrj7ACjvIAjgPQgCDvArECQAYCUAGAuQAPBuABBsQAAArgYCKQgXCJABAtQABCOA+Bjg");
	this.shape_14.setTransform(17.1206,90.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3F7745").s().p("AAMLHQgxgfgfgvQghgygEg2QgCgkAKguIAWhQQAfhqAIiOIAHj9QAChLggheQgqh3gDgRQgnjiAvguQAMgMA+gfIABACQgCDwArD7QAYCPAGAtQAPBrABBsQAAAsgXCKQgYCJABAsQABBGAPA2QAQA8AkA1IAfAEIAEAHIgBACQhAgOgugeg");
	this.shape_15.setTransform(12.2731,91.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EC6C3B").s().p("AAPL/Qg9higCiPQAAgtAXiIQAYiKgBgsQgBhsgOhtQgGgugZiUQgskDACjuIBMggQgCDvAqEOQAuEYABCQQAAAsgXCJQgXCJAAAtQABBHAOA/QARBJAgA0g");
	this.shape_16.setTransform(22.6957,89.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EC6C3B").s().p("AAjMPQghg0gPhJQgOg/gBhHQgBgtAXiJQAXiJgBgtQgBiPgskYQgskOACjvIAigPQgCDwAqEWQAuEeABCPQAAAtgXCJQgXCJAAAtQABBJAPBAQASBKAiA0g");
	this.shape_17.setTransform(28.3206,89.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPAQQgGgGgBgKQABgIAGgHQAHgHAIAAQAKAAAGAHQAGAHAAAIQAAAKgGAGQgGAHgKgBQgIABgHgHg");
	this.shape_18.setTransform(67.9,146.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgPAQQgGgHgBgJQABgIAGgHQAHgGAIAAQAKAAAGAGQAGAHAAAIQAAAJgGAHQgGAGgKAAQgIAAgHgGg");
	this.shape_19.setTransform(67.9,92.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPAQQgGgGgBgKQABgIAGgHQAHgGAIAAQAKAAAGAGQAGAHAAAIQAAAKgGAGQgGAGgKAAQgIAAgHgGg");
	this.shape_20.setTransform(67.9,40.975);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EEBA33").s().p("AgqAqQgRgRAAgZQAAgXARgSQATgSAXAAQAZAAASASQARARAAAYQAAAZgRARQgSASgZAAQgYAAgSgSgAgDgjQgGAHAAAJQAAAKAGAGQAGAGAJAAQAKAAAHgGQAGgGAAgKQAAgJgGgHQgHgGgKAAQgJAAgGAGg");
	this.shape_21.setTransform(66.65,148.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EEBA33").s().p("AgqAqQgRgRAAgZQAAgXARgSQATgSAXAAQAZAAASASQARARAAAYQAAAZgRARQgSASgZAAQgYAAgSgSgAgDglQgGAGAAAJQAAAKAGAGQAGAGAJAAQAKAAAHgGQAGgGAAgKQAAgJgGgGQgHgHgKAAQgJAAgGAHg");
	this.shape_22.setTransform(66.65,94.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EEBA33").s().p("AgqAqQgRgRAAgZQAAgYARgRQASgSAYAAQAZAAASASQARARAAAYQAAAZgRARQgSASgZAAQgXAAgTgSgAgDglQgGAGAAAKQAAAJAGAGQAGAGAJAAQAKAAAHgGQAGgGAAgJQAAgKgGgGQgHgHgKAAQgJAAgGAHg");
	this.shape_23.setTransform(66.65,43.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EC6C3B").s().p("AgDIMQAAgtgXiJQgXiJAAgtQABiPAtkeQArkWgCjwIAiAPQACDvgsEOQgtEXgBCQQAAAsAXCKQAXCJgBAtQgBBHgOA/QgQBJggA0IglAEQBBhiADilg");
	this.shape_24.setTransform(105.4794,89.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EC6C3B").s().p("AgpKNQAOg/ABhHQABgtgXiJQgYiKAAgrQABiRAukXQArkOgCjvIBLAgQACDvgsECQgtELgBCQQAAAsAXCKQAYCJgBAsQgCCQg8BhIhNALQAgg0ARhJg");
	this.shape_25.setTransform(111.0544,89.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EC6C3B").s().p("AgGIEQABgtgYiJQgXiJAAgsQABiRAtkLQArkCgCjvIAjAPQACDvgrD7QgsEDgBCRQgBAsAXCJQAXCJgBAtQgBBEgPA4QgPA7gjA2IgfAEQA9hhACiQg");
	this.shape_26.setTransform(116.6794,90.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F3DFC6").s().p("AAELMIgDgDQgTgVgQgfQgbgygHg8QgHhCAWygQAVgJApgJIAAACQgDDOgJGaQgHFqAFD8QACA+APAyQAUA7AnAgg");
	this.shape_27.setTransform(57.6297,95.675);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3F7745").s().p("Ah7LxIAFgGIAfgEQAjg2AQg7QAPg4ABhEQABgtgXiJQgYiJABgsQABiQAtkEQAqj7gCjvIACgEQA/AgAMAMQAbAbgCBLQgBAegRCNQgDAYgjBwQgeBfACBJQACBXABCnQAECQAeBoIAWBQQALAugDAjQgDA3giAxQgfAwgwAfQgwAehAAOg");
	this.shape_28.setTransform(121.5568,91.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5F1806").s().p("Ag3KBQgRgdgFgvIASzqIBSgTQgWShAIBBQAGA8AbAzQARAfATAVIgEACQgdAGgtADQgighgVgmg");
	this.shape_29.setTransform(49.9,96.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3F7745").s().p("Aj/NBQgngggUg7QgQgygCg+QgFj8AHlrQAKmZADjOIAAgCIApgJQAugKAcgMQAMgFAHgLQAHgLAAgNIAAgGIgHhRQgBgOAHgMQAHgMANgGIBgglQBaAcB3AxQBsAtBPAoIgBADIiQg8QACDwgsEVQguEegBCQQAAAsAXCJQAYCJgBAtQgDClhABjIAkgFIgDAFIAAADIgbABQhPgBkGgIgAkWJaQgSASAAAZQAAAYASASQARARAZAAQAZAAASgRQARgRAAgZQAAgZgRgSQgSgRgZAAQgYAAgSARgAkWBBQgSASAAAYQAAAZASARQARASAZAAQAZAAASgSQARgRAAgZQAAgZgRgRQgSgSgZAAQgYAAgSASgAkWnDQgSASAAAYQAAAZASASQASARAYAAQAZAAASgRQARgSAAgZQAAgZgRgRQgSgRgZAAQgZAAgRARg");
	this.shape_30.setTransform(90.329,84.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3F7745").s().p("AgMNKIgdgBIAAgDIgDgFIAlAFQgig0gRhLQgQhAgBhJQAAgtAXiJQAYiJgBgsQgBiQgukeQgrkVACjwIiQA8IgCgCQBRgoBwgtQB4gxBdgdIBUAnQALAFAHAKQAHAKABAMIAKCWIABAEIgqAJQgqAJgVAJIhTASIgSTqQAFAvARAeQAVAlAjAiQgeACgtAAIhJAAg");
	this.shape_31.setTransform(36.3,84.175);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EFF1EC").s().p("AgtA5IgIhyIBdgCIAJgBIAFA1IAAAGQAAAMgHALQgGALgNAFQgcANgsAKg");
	this.shape_32.setTransform(67.2,16.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt_02, new cjs.Rectangle(-1.6,-5.8,137.1,178.5), null);


(lib.shirt_01 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgYAAgSgSQgRgRAAgZQAAgXARgSQASgSAYAAQAZAAASASQARARAAAYg");
	this.shape.setTransform(62,136.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#729BAF").s().p("AgqAqQgRgRAAgZQAAgXARgSQATgSAXAAQAZAAASASQARARAAAYQAAAZgRARQgSASgZAAQgYAAgSgSg");
	this.shape_1.setTransform(62,136.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgYAAgSgSQgRgRAAgZQAAgYARgRQASgSAYAAQAZAAASASQARASAAAXg");
	this.shape_2.setTransform(61.85,87.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#729BAF").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASASAAAXQAAAZgSARQgRASgZAAQgYAAgRgSg");
	this.shape_3.setTransform(61.85,87.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgXAAgTgSQgRgRAAgZQAAgYARgRQASgSAYAAQAZAAASASQARARAAAYg");
	this.shape_4.setTransform(61.45,43.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#729BAF").s().p("AgqAqQgRgRAAgZQAAgYARgRQASgSAYAAQAZAAASASQARARAAAYQAAAZgRARQgSASgZAAQgXAAgTgSg");
	this.shape_5.setTransform(61.45,43.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6).p("ABINIQCAAABXg2QAygfAfgwQAhgxAEg3QACgjgLguQgCgJgUhHQgdhogFiQQAAiogDhWQgChJAehfQAkhwADgYQARiNABgeQAChLgcgbQgZgZichFQijhIh/gnIhgAlQgNAFgHAMQgHANABAOIAHBQIAAAGQAAANgHALQgHALgMAFQgdANg/ANQhEANgbAKQgURiACBsQABAkATBVQAJArAKAkg");
	this.shape_6.setTransform(91.7179,84.317);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFF1EC").s().p("AmRL9QgThVgBglQgChsAUxhQAbgLBEgMQA/gNAdgNQAMgFAHgLQAHgLAAgNIAAgGIgHhRQgBgOAHgMQAHgMANgGIBgglQB/AoCjBIQCcBFAZAZQAcAbgCBLQgBAegRCMQgDAZgkBwQgeBfACBJQADBWAACnQAFCRAdBoIAWBQQALAugCAjQgEA2ghAyQgfAvgyAfQhXA3iAAAInGADQgKgjgJgrg");
	this.shape_7.setTransform(91.7179,84.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6).p("AFLNAQguAJhtABQh3AAgmAAQh/AAhXg3QgygfgfgvQghgygEg2QgCgkAKguQACgJAUhHQAfhqAIiOQAFinAChWQAChLggheQgqh3gDgRQgnjiAvguQAYgZChhFQClhICBgoIBUAnQALAFAHAKQAHAKABAMIAKCW");
	this.shape_8.setTransform(33.0981,84.1561);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFF1EC").s().p("AATNKQh/AAhXg3QgygfgfgvQghgygEg3QgCgjAKguIAWhQQAfhqAIiOIAHj+QAChKggheQgqh3gDgRQgnjiAvgvQAYgYChhFQClhICBgoIBUAnQALAFAHAJQAHAKABANIAKCWIAkWnQguAJhtABIidAAg");
	this.shape_9.setTransform(33.0981,84.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt_01, new cjs.Rectangle(-1.6,-1.3,143,174.9), null);


(lib.pants_neutral_fill = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EFF1EC").s().p("An+P2Ig1gIQhDhMgmhkQgihfgFhrIgDg3QgFl2Aal1QAPjcAZiPQAkjFBEiWIgChmICzgRQDVgQCvAAQCnAADFAQQBjAJBBAIIgDBrIAAgGQBFCXAkDFQAaCPAODcQAaF1gEF2IgGBuQgHB4gSA2QgOAug1A4QgbAdgYATQgaAEgoABQhwADhZgfQgOgLgQgSQggglgMghQgUg1gViCIgTh5Ih0wjQguAEgugFIAAAGIhzQeIggCfQgoCrgtBAQgRAKgaALQg1AWguACIgLAAQgdAAgygGg");
	this.shape.setTransform(71.2,102.0125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pants_neutral_fill, new cjs.Rectangle(0,0,142.4,204.1), null);


(lib.pants_decoration_tassels_01 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("AgSAfQgoASgpgOQgpgOgVglQgGgNAAgIQgBgMAIgHIAHgBQAUgHAWAOQALAHAWAWQA9A7A3AQQAjALAjgHQAlgHAYgZ");
	this.shape.setTransform(120.0447,6.9962);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6,1).p("ADEA1QgjAUg5gbQgUgKgbgSQgfgTgPgKQg2gjgtgKQg/gNgsAe");
	this.shape_1.setTransform(129.1,6.1435);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6,1).p("ABjAfQglgpg2gOQg1gPg1AS");
	this.shape_2.setTransform(137.8,5.8015);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6,1).p("AABh+QAUA2ALBGQAKBDgCA8IhIgLQARh1gYh6");
	this.shape_3.setTransform(154.474,24.6244);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6,1).p("AhGhyQA+AcApA4QArA4AKBDIg+ATIhvjX");
	this.shape_4.setTransform(162.5773,21.4564);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EEBA33").s().p("AAKB8QgKgFgPABQgIAAgEgGQgEgGABgIQAJgwAAgkQAAgXgCgRQgGgdgBgOQAAgGADgEIgFglQAAgIAIgCQAIgCADAHQAHANAHAlIAEASIAGAQQAGAQABAVQACAPAAAPIANBKQACAKgIAGQgFADgFAAQgDAAgEgBg");
	this.shape_5.setTransform(155.0446,24.6479);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EEBA33").s().p("AA0A1QgzgKgjgbQgXgQgFgQQgEgNADgKQAEgMAMgCQATgCAUAVIAHAIIAcAZIAUARQAMALAFAKQADAHgEAFQgDAFgFAAIgDgBg");
	this.shape_6.setTransform(110.175,6.5531);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EEBA33").s().p("ABEAqQghgEgngTIhFgiQgIgEABgJQACgKAIgCQAcgFAqAQIAfAOQAYAKAIAHQACACABAEQAIAGAFAIQAEAGgEAHQgDAHgHAAIgBAAg");
	this.shape_7.setTransform(139.3941,7.4156);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CA2C2B").s().p("AAQA5QgggFgVgMQgNgHgagYQgYgUgRgIQgGgDgCgHQgBgHADgGQAHgLANAFIADgDQAWgOAiALIAaAIQAVAFAQAFQAaAIAXAQIAXAQQANAKALAEQAKAEABAIQABALgJAEQgTAIgUgBQAAAAAAABQgBAAAAAAQAAABgBAAQAAABgBAAQgNAFgRAAQgOAAgQgDg");
	this.shape_8.setTransform(122.9078,6.7408);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CA2C2B").s().p("AAGBXQgHgOgMgXQgJgVgUg2IAAgBIgCgEIgBgCQgCgEgQgUQgOgSgDgSQgBgKAJgCQAJgDAHAFIAmAgQAUATANAPQATAYASAqQAOAQAGAMQAHALABAHQACALgIAHQgDACgOAFIgUAFIgCAAQgRAAgMgTg");
	this.shape_9.setTransform(162.464,20.7772);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6,1).p("AAMAhQgSAHgQgNQgLgHgMgbQgHgRAHgHQAHgGAOAFQAhAMAZAbQgGAAgDAB");
	this.shape_10.setTransform(151.9049,8.5475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CA2C2B").s().p("AAEAZQgSgHgIgMQgEgFgBgHIgCgCQgEgEACgGQABgFAGgCIAGgBQAKgDALAKQADAAACACQALAJAFAGQAKAJgCAJQgCAJgJACIgFAAQgGAAgGgCg");
	this.shape_11.setTransform(150.8046,9.0546);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(2.6,1).p("AATAfQAoASApgOQApgOAVglQAGgNAAgIQABgMgIgHIgHgBQgUgHgWAOQgNAIgUAVQg9A7g3AQQgjALgjgHQglgHgYgZ");
	this.shape_12.setTransform(51.1553,6.9962);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5F1806").ss(2.6,1).p("AjCA1QAiAUA4gbQAVgKAbgSQAfgTAQgKQA2gjAtgKQA+gNArAe");
	this.shape_13.setTransform(42.1,6.1435);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5F1806").ss(2.6,1).p("AhiAfQAlgpA2gOQA1gPA1AS");
	this.shape_14.setTransform(33.4,5.8015);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#5F1806").ss(2.6,1).p("AAAh+QgUA2gLBGQgKBDACA8IBIgLQgRh1AYh6");
	this.shape_15.setTransform(16.726,24.6244);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5F1806").ss(2.6,1).p("ABHhyQg+AcgpA4QgrA4gKBDIA9ATIBwjX");
	this.shape_16.setTransform(8.6268,21.4572);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EEBA33").s().p("AgaB6QgHgGABgKIAOhKQAAgPABgPQACgVAFgQIAGgQIAEgSQAHglAHgNQAEgHAIACQAIACgBAIIgFAlQADAEAAAGQAAAOgGAdQgDARAAAXQAAAoAKAsQABAIgEAGQgFAGgHAAQgQgBgJAFQgEABgEAAQgFAAgFgDg");
	this.shape_17.setTransform(16.139,24.6479);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EEBA33").s().p("Ag+AxQgFgFAEgHQAFgKAMgLIAUgRIAcgZIAHgIQAUgVATACQAMACAEAMQAEAKgFANQgGAQgWAQQgjAbgzAKIgDABQgFAAgDgFg");
	this.shape_18.setTransform(61.025,6.5531);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EEBA33").s().p("AhOAjQgEgHAEgGQAGgIAHgGQABgEADgCQAHgHAYgKIAggOQApgQAcAFQAJACABAKQABAKgIADIhEAiQgoATghAEIgBAAQgGAAgEgHg");
	this.shape_19.setTransform(31.7989,7.4156);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CA2C2B").s().p("AhLA3QgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgUABgUgIQgIgEABgLQACgIAJgEQALgFANgJIAXgQQAXgQAagIQARgGAUgEIAagIQAigLAWAOIADADQANgFAHALQADAGgBAHQgCAHgGADQgQAIgYAUQgbAYgNAHQgVAMggAFQgRADgNAAQgRAAgNgFg");
	this.shape_20.setTransform(48.2919,6.7408);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CA2C2B").s().p("AgkBqIgUgFQgOgFgDgCQgIgHACgLQABgGAGgMQAHgMAOgQQASgqATgYQANgPAVgTIAlggQAHgFAIADQAJACgBAKQgCASgOASIgKALIgIANIgBACIgCAEIAAABQgUA2gJAVQgMAXgHAOQgMATgRAAIgCAAg");
	this.shape_21.setTransform(8.711,20.7772);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#5F1806").ss(2.6,1).p("AgLAhQASAHAQgNQALgIAMgaQAHgRgHgHQgHgGgOAFQghAMgZAbQAGAAADAB");
	this.shape_22.setTransform(19.2951,8.5475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CA2C2B").s().p("AgUAbQgJgCgCgJQgCgKAKgIQAGgIAKgHQACgCADAAQALgKAKADIAGABQAGACABAFQACAGgEAEIgCACQgBAGgFAGQgHAMgSAHQgGACgGAAIgFAAg");
	this.shape_23.setTransform(20.3788,9.0546);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pants_decoration_tassels_01, new cjs.Rectangle(-1.4,-5,174,43.6), null);


(lib.pants_decoration_ribbons_01 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("AAFAWIgJgr");
	this.shape.setTransform(138.675,53.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6,1).p("AgCgWIAFAt");
	this.shape_1.setTransform(134.8,55.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6,1).p("AAAgUIABAp");
	this.shape_2.setTransform(129.6,54.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6,1).p("AADgUQgDAOgCAb");
	this.shape_3.setTransform(124.15,54.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6,1).p("ABPgJQhMAWhRgD");
	this.shape_4.setTransform(132.125,51.1673);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.6,1).p("AAKh4IgTDx");
	this.shape_5.setTransform(125.35,39.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6,1).p("AgEgbQADAJABASQABATAEAJ");
	this.shape_6.setTransform(142.475,59.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F1806").ss(2.6,1).p("AgHgZIAPAz");
	this.shape_7.setTransform(145.8,59.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6,1).p("AgLgaQAFAeASAX");
	this.shape_8.setTransform(149.925,57.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5F1806").ss(2.6,1).p("AgMgcIAZA5");
	this.shape_9.setTransform(153.9,56.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6,1).p("AgSgbIAlA3");
	this.shape_10.setTransform(158.125,54.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5F1806").ss(2.6,1).p("ABIgWQhFAhhKAN");
	this.shape_11.setTransform(149.05,53.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(2.6,1).p("Ag1iUQBOCMAdCd");
	this.shape_12.setTransform(136.075,40.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5F1806").ss(2.6,1).p("Ag+iXQBcCLAhCk");
	this.shape_13.setTransform(149.75,35.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5F1806").ss(2.6,1).p("AhShoQBCgbAyAPQAXAIAMAbQAGAQAEAiQAGAugDAZQgGAqgbAUQgRAOgbAEQgQADgggB");
	this.shape_14.setTransform(135.7895,12.2242);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#5F1806").ss(2.6,1).p("AgehzIAFAAQAOACALAQQAHAKAHAXQAYBYgLBc");
	this.shape_15.setTransform(128.0098,13.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5F1806").ss(2.6,1).p("ABrh1IjwgGIAJC4QAJATA/AWQA1ASAhADQAvAFA2gP");
	this.shape_16.setTransform(116.9924,13.6691);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#3F7745").ss(4.6,1).p("AB6ANQg+ASg4gKQgvgJhOgk");
	this.shape_17.setTransform(117.7,20.5036);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#3F7745").ss(4.6,1).p("ABuADQhpABgKAAQgxgBg3gG");
	this.shape_18.setTransform(115.8,4.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F3DFC6").ss(4.6,1).p("AB5AIQg+AMg8gHQg2gGhBgV");
	this.shape_19.setTransform(116.975,11.8789);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F3DFC6").s().p("AgEBQQgJgBgGgHQgGgIAAgJIALh9QABgGACgEQAFAMAIAKIAKAWIAAAAIAIAUQABAFAFAGIAAACIgGA/QAAAIgHAGQgHAHgIgBg");
	this.shape_20.setTransform(136.6731,45.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#3F7745").ss(4.6,1).p("AAKh7IgTD3");
	this.shape_21.setTransform(128.625,39);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F3DFC6").s().p("AA3EJQgghzgVg5QgLgjgdgvIgcgpIgFgIIABgJQAEgcAEgVQAKgtgKgyQgEgXgMgVIgMgRQgGgHAAgJIAXAGIAqAWQAAAQAJAYIAFARIABAFIABAIIgDAoIAAAMIgBAFQgFAkADAOIgCAOQAwBFAVA5QAYBHAbBiIgoAXg");
	this.shape_22.setTransform(146.575,27);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#3F7745").ss(4.6,1).p("AhMkBIARAPQARAUAFAcQALA6AAABQAEAcgDANQgEAVgLAjIAaArQAdA0ANAlQAVA7AbBp");
	this.shape_23.setTransform(136.95,28.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CA2C2B").s().p("AB8EKIgLgtIgDABIgUADQgFAIgIADQgIACgGgHQgCACgFACQgEABgGgCQgJAIgLgDIgOACQgZAEgYgDQgFgBgFgFQgEgGABgFIAGhAQACgQAKgxQAGgegDgeQgDglABgOQgtADg/gNQgNgCgSgIIgfgNIgbgLQgIgFgEgKQgCgGgBgNIgNh1QgEgYAEgQQACgGAFgEQAFgEAHAAQA0ACBGAHIA9AGIAoAFIAEgHQALgNAVgEQAMgDAbAAQAZgBASAGQATAHAHAaQALAqgCAqQgBApgLAgIATAaQAkAzAMAWQARAhAVAwQAMAbAEAOQAHAYAAAUIgCAYIACABQAAAAABAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABQAAABAAAAQgEAGgIAEIgCADQgIAHgLgBIgBAAIgoASIgUAIQgOAEgHgGQAAAIgJABIgCAAQgGAAgCgHg");
	this.shape_24.setTransform(129.4633,27.4992);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5F1806").s().p("AgJApQgEgEABgFIABgjIgBgRQAAgLACgGQACgGAFAAIAAAAQAHgBACAGQADAFABALIACAQQACAWgBAQQgCAMgLABQgFAAgEgEg");
	this.shape_25.setTransform(134.3754,15.4929);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#5F1806").ss(2.6,1).p("AgEAWIAJgr");
	this.shape_26.setTransform(21.35,54.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#5F1806").ss(2.6,1).p("AADgWIgFAt");
	this.shape_27.setTransform(25.2,55.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#5F1806").ss(2.6,1).p("AABgUIgBAp");
	this.shape_28.setTransform(30.425,55.175);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#5F1806").ss(2.6,1).p("AgBgVQABAPACAc");
	this.shape_29.setTransform(35.875,54.825);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#5F1806").ss(2.6,1).p("AhOgJQBOAWBPgD");
	this.shape_30.setTransform(27.9,51.3481);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#5F1806").ss(2.6,1).p("AgJh4IATDy");
	this.shape_31.setTransform(34.675,39.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#5F1806").ss(2.6,1).p("AAFgbQgEAJgBASQgBATgDAJ");
	this.shape_32.setTransform(17.575,59.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#5F1806").ss(2.6,1).p("AAIgZIgPAz");
	this.shape_33.setTransform(14.2,59.475);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#5F1806").ss(2.6,1).p("AANgaQgGAegTAX");
	this.shape_34.setTransform(10.1,58.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#5F1806").ss(2.6,1).p("AANgbIgZA3");
	this.shape_35.setTransform(6.15,56.575);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#5F1806").ss(2.6,1).p("AATgbIglA3");
	this.shape_36.setTransform(1.9,54.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#5F1806").ss(2.6,1).p("AhHgXQBHAjBIAL");
	this.shape_37.setTransform(10.975,53.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#5F1806").ss(2.6,1).p("AA1iUQhOCNgcCc");
	this.shape_38.setTransform(23.95,40.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#5F1806").ss(2.6,1).p("AA/iXQhcCNghCi");
	this.shape_39.setTransform(10.275,35.425);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#5F1806").ss(2.6,1).p("ABThoQhAgcgzAQQgXAHgMAcQgHAPgEAiQgFAyADAVQAFApAbAWQARAOAbAEQARADAfgB");
	this.shape_40.setTransform(24.2438,12.4127);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#5F1806").ss(2.6,1).p("AAfhzIgFAAQgPADgLAPQgFAJgIAYQgYBaAKBa");
	this.shape_41.setTransform(32.0175,13.525);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#5F1806").ss(2.6,1).p("Ahqh1IDxgGIgJC4QgKATg/AWQg1ASggAEQgsAEg6gP");
	this.shape_42.setTransform(43.0326,13.8337);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#3F7745").ss(4.6,1).p("Ah5ANQA9ASA5gKQAvgJBOgj");
	this.shape_43.setTransform(42.325,20.6934);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#3F7745").ss(4.6,1).p("AhtADQAxAABCAAQAyAAA2gG");
	this.shape_44.setTransform(44.225,4.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#F3DFC6").ss(4.6,1).p("Ah4AIQA+AMA8gHQA2gGBBgW");
	this.shape_45.setTransform(43.075,12.0539);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F3DFC6").s().p("AACBQQgHAAgHgGQgGgGgBgIIgGg/IAAgCQAEgEACgHIAIgUIAAAAIAAgBIAKgVQAHgJAGgMQADAFAAAEIAKB9QABAKgGAHQgGAIgJAAg");
	this.shape_46.setTransform(23.3571,45.225);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#3F7745").ss(4.6,1).p("AgJh6IATD1");
	this.shape_47.setTransform(31.375,39.175);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F3DFC6").s().p("AheD3IgDgBQAoiGAMgjQAUg2AxhJIgCgNQADgPgFgjIgBgEIAAgBIgBgMIgCgoIAAgIIAIgVQAIgZAAgQIAIgFIAlgSIAUgFQAAAKgGAGIgMARQgMAVgEAXQgKAzAKAsIAJA7IgFAHIgbAoQgeAwgLAiQgVA6ggBzIgBAEg");
	this.shape_48.setTransform(13.45,27.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#3F7745").ss(4.6,1).p("ABMkBIgQAOQgQAVgFAcQgKA0gBAHQgEAbADAOQAEAVALAiIgbAsQgcA0gNAlQgVA6gcBq");
	this.shape_49.setTransform(22.975,28.275);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CA2C2B").s().p("AiFEQQgJgBAAgHQgHAGgOgEIgUgJIgogRIgBgBQgLACgIgIIgCgCQgHgEgFgGQAAAAAAgBQgBAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAIACgBQgCgMAAgNQAAgUAHgXQAEgOAMgbQAXg1APgcQALgUAlg1IATgbQgLgfgBgqQgCgsALgoQAHgZATgHQAPgGAcAAQAbABAMACQAVAFALANQADADABADQANgCAbgCIA9gGQBIgHAygCQAHgBAFAFQAFAEACAGQADANgDAbIgNB1QgBANgDAGQgDAJgIAFQgFADgWAJIgfANQgSAHgNADQg8AMgwgCQABANgBAMIgCAZQgDAfAGAeQALAxABAPIAGBBQABAFgEAGQgFAFgFABQgYADgZgEIgOgDQgLAEgJgIQgFACgFgCQgFgBgCgCQgFAHgJgCQgJgDgEgIIgUgDIgDgBQgHAZgEAUQgCAHgGAAIgCgBg");
	this.shape_50.setTransform(30.9742,27.8059);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#5F1806").s().p("AgMAfQgCgSADgUIACgQQABgKADgFQACgHAHACIAAAAQAEAAACAGQACAGAAALIAAARQAAARABARQABAFgFAEQgEAEgFAAQgKAAgCgNg");
	this.shape_51.setTransform(25.6625,15.6528);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pants_decoration_ribbons_01, new cjs.Rectangle(-1.2,-14.2,162.5,77.7), null);


(lib.pants_decoration_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9EFE5").s().p("AprO9QAVgnAQgeQAXgtgWgrQgMgVghgZQgngcgMgOQgUgZgIgoQgFgbAAgwQgFl2Aal1QAPjcAZiPQAkjFBEiWIgChmICzgRQDVgQCvAAQCnAADFAQQBjAJBBAIIgDBqIAAgFQBFCXAkDFQAaCPAODcQAaF1gEF2QgBAwgFAbQgIAogVAZQgLAOgnAcQgiAZgLAVQgWAqAWAuQAQAeAGAnQhsBciMgqQgrgNgpgZIgigXQAGgWAEgdQAIg6gJgiQgFgUgTgXQgVgcgGgOQgZg3gJhTIh0wjQguAEgugFIAAAGIhzQeQgJBRgZA5QgGAOgaAgQgWAbgGAVQgIAiADA5QACAcADAWQgvAmhHATQgpALgmAAQhbAAhMhAg");
	this.shape.setTransform(71.2,102.1429);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pants_decoration_fill, new cjs.Rectangle(0,0,142.4,204.3), null);


(lib.pants_decoration_buttons_01 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgYAAgSgSQgRgRAAgZQAAgXARgSQASgSAYAAQAZAAASASQARASAAAXg");
	this.shape.setTransform(124.5,5.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAQQgGgHAAgJQAAgJAGgGQAHgGAIAAQAJAAAHAGQAGAGAAAJQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_1.setTransform(125.725,4.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEBA33").s().p("AgpAqQgSgRAAgZQAAgXASgSQARgSAYAAQAZAAARASQASASAAAXQAAAZgSARQgRASgZAAQgYAAgRgSgAgDgiQgGAGAAAJQAAAKAGAGQAGAGAJAAQAKAAAGgGQAHgGgBgKQABgJgHgGQgGgHgKAAQgJAAgGAHg");
	this.shape_2.setTransform(124.5,5.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgYAAgSgSQgRgRAAgZQAAgXARgSQASgSAYAAQAZAAASASQARASAAAXg");
	this.shape_3.setTransform(6,5.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAQQgGgHAAgJQAAgJAGgGQAHgGAIAAQAJAAAHAGQAGAGAAAJQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_4.setTransform(7.225,4.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EEBA33").s().p("AgqAqQgRgRAAgZQAAgXARgSQATgSAXAAQAZAAASASQARASAAAXQAAAZgRARQgSASgZAAQgYAAgSgSgAgCgiQgHAGAAAJQAAAKAHAGQAFAGAJAAQAJAAAHgGQAGgGABgKQgBgJgGgGQgHgHgJAAQgJAAgFAHg");
	this.shape_5.setTransform(6,5.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgYAAgSgSQgRgRAAgZQAAgXARgSQASgRAYAAQAZAAASARQARASAAAXg");
	this.shape_6.setTransform(124.4,24.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_7.setTransform(125.625,22.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EEBA33").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRARgZAAQgYAAgRgRgAgDgiQgGAGAAAJQAAAJAGAHQAGAFAKAAQAJAAAGgFQAHgHgBgJQABgJgHgGQgGgHgJAAQgKAAgGAHg");
	this.shape_8.setTransform(124.4,24.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgYAAgSgSQgRgRAAgZQAAgXARgSQASgRAYAAQAZAAASARQARASAAAXg");
	this.shape_9.setTransform(6.55,24.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_10.setTransform(7.775,22.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EEBA33").s().p("AgqAqQgRgRAAgZQAAgYARgRQASgSAYAAQAZAAASASQARARAAAYQAAAZgRARQgSARgZAAQgYAAgSgRgAgCgiQgHAGAAAJQAAAJAHAHQAFAFAJAAQAJAAAHgFQAGgHABgJQgBgJgGgGQgHgHgJAAQgJAAgFAHg");
	this.shape_11.setTransform(6.55,24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pants_decoration_buttons_01, new cjs.Rectangle(-1.2,-1.2,133,32.7), null);


(lib.pants_boxers = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("AIhBLIADh0QhBgIhigIQjGgRinAAQiuAAjWARIizAQIADBxIAAAD");
	this.shape.setTransform(67.7741,2.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6,1).p("AInAYIgGgBQjLglkCgIQlTgJkhA2IgGAB");
	this.shape_1.setTransform(67.8,7.7806);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6).p("AgEAlIAJhI");
	this.shape_2.setTransform(118.35,129.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6).p("AADAjIgFhF");
	this.shape_3.setTransform(100.025,130.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6).p("AgHAmIAPhL");
	this.shape_4.setTransform(35.65,129.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.6).p("AAGAnIgLhM");
	this.shape_5.setTransform(14.875,128.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6).p("AikgKQClAoCkgl");
	this.shape_6.setTransform(67.5139,48.1022);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFF1EC").s().p("AikgKIFJAEQhOARhPAAQhWAAhWgVg");
	this.shape_7.setTransform(67.525,48.0832);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6).p("AoippQggAlgPApIgMAkQgOAwgNA9QgnDCgGD4QgFEJAOBtQANBfAmAmQAiAiA7APQAnAJBHADQBNAEAugIQBDgMAkgnQAWgXAOglQAJgXAKgsQAsi/BDnVIAtAAQA+HAAxDUQAKArAKAYQAOAlAVAXQAkAnBDAMQAuAIBNgEQBHgDAngJQA7gPAigiQAngnAMheQAPhtgGkJQgGj4gnjCQgNg9gOgwIgMgkQgPgngegk");
	this.shape_8.setTransform(67.9372,72.1542);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFF1EC").s().p("AEkKxQhDgMgkgnQgVgXgOglQgKgYgKgrQgxjUg+nAIgtAAQhDHVgsC/QgKAsgJAXQgOAlgWAXQgkAnhDAMQguAIhNgEQhHgDgngJQg7gPgigiQgmgmgNhfQgOhtAFkJQAGj4AnjCQANg9AOgwIAMgkQAZg1ANgkQAYhEgTgiQgKgTCpgLQCWgKDkgBQIvgBABAlQACAvgLBAIALAKQAeAkAPAnIAMAkQAOAwANA9QAnDCAGD4QAGEJgPBtQgMBegnAnQgiAig7APQgnAJhHADIgwACQgtAAgegGg");
	this.shape_9.setTransform(67.9372,64.4653);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pants_boxers, new cjs.Rectangle(-1.2,-5.8,140.79999999999998,144.3), null);


(lib.nose = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// nose
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("ABcAqQATgOgEgOQgCgGgMgIQgggZgQgNQgdgXgQACQgPACgdAWIgwAjQgMAIgCAGQgFAPAUANQAWAQBAACQBEACAdgUg");
	this.shape.setTransform(10.7672,5.9809);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC6C3B").s().p("AgFA8QhAgCgWgQQgUgNAFgPQACgGAMgIIAwgjQAdgWAPgCQAQgCAdAXIAwAmQAMAIACAGQAEAOgTAOQgaASg5AAIgOAAg");
	this.shape_1.setTransform(10.7672,5.9809);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nose, new cjs.Rectangle(-1.2,-1.2,24.2,15), null);


(lib.neck = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// neck
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("ACxB9QgFhCgRhvQgTh8gOgfQgdhEhagCQhbgCgwBIQgTAdgNCKQgMCBAHA1QAHA0A9AtQA4ApAvgBQAzgBBBg1QBCg2gDgug");
	this.shape.setTransform(17.6946,27.8485);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAA86E").s().p("AhpDvQg9gtgHg0QgHg1AMiBQANiKATgdQAwhIBbACQBaACAdBEQAOAfATB8QARBvAFBCQADAuhCA2QhBA1gzABIgCAAQguAAg3gog");
	this.shape_1.setTransform(17.6946,27.8485);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.neck, new cjs.Rectangle(-3.9,-4.3,43.6,61.3), null);


(lib.mouth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5F1806").s().p("AifAJQgHgCgEgHQgDgGACgHQADgHAGgDQAHgDAGACQBKAXBNgBQBOgCBIgaQAHgDAGAEQAGADABAGIABABQACAMgLAFQhMAfhVADIgRAAQhLAAhGgXg");
	this.shape.setTransform(17.2961,3.2384);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth, new cjs.Rectangle(0,0,34.6,6.5), null);


(lib.jacket_short_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFF1EC").s().p("AqiM8QgegSgagVIgVgSQALhdAnh6QAxiKAWhIQAihuAKhyQAKh1gQhuQgHg5gVhOQgahYgMgtQgUhKgIhZQgKhhAQgOQAlgfAVgPQgNg7ABgKQACgMBygdICsgsQA5gRAegIQAxgNAhgCIAAACQhMAxgiAyQg7BWgdCtQgmDigdF7QgVEBgOEuQgICXgDBkQhbgChfg6gAG7BMQgemBgljaQgditg7hWQgigyhMgxIABgCQAgACAyANQAdAIA6ARICrAsQByAdACAMQABAJgMA8QAXAQAjAeQAQAOgKBhQgJBZgUBKIgmCFQgVBOgHA5QgPBvAKB0QAKBzAhBtQAWBIAwCKQAoB7ALBcIhNA4QhfA4haACQgOmOghmbg");
	this.shape.setTransform(75.2,88.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jacket_short_fill, new cjs.Rectangle(0,0,150.4,177.6), null);


(lib.jacket_long_fill = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFF1EC").s().p("ArESPQgbgUgXgWIgRgTQgGgtgFg+QgKh9AEhnQAFhxAViMIAUh5QAOhTAlhzQAuiAAUhDQAihtAKhyQAKh1gPhvQgIg5gVhOQgahZgMgsQgThKgJheQgKhlAQgOQARgPAPgKIAZgPQgMg7ABgHQADgNBygcICrgsQA5gSAegHQAygNAggCIAAACQhMAxgiAyQg7BWgdCtQgjDTgnGOQgRCwgZEsQgUD3gGAxQgMBegDFBQgCChAACOQhagChVg9gAH3OWQgElBgLheQgHg2gNjtQgSk+gKiWQgcmNgljaQgdiug6hVQgjgyhMgwIAAgBQAhABA0ANQAdAHA9ATICsAsQBxAcADANQABAJgMA7IAWANQAOAJAPAOQAQAOgJBmQgJBdgUBKIglCFQgWBOgHA5QgPBvAKB1QAKByAhBsQAVBEAtCAQAmBzANBTIAVB5QAVCLAEBzQAEBmgKB9QgFA/gFAsIhSA5QhlA6haACQABiOgCihg");
	this.shape.setTransform(79.4396,123);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jacket_long_fill, new cjs.Rectangle(0,0,158.9,246), null);


(lib.hat_10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#EFF1EC").ss(4.3).p("AgggjQAiAnAaAr");
	this.shape.setTransform(207.9086,176.042);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#EFF1EC").ss(4.3).p("AhQgFQASgDApAEIB5AM");
	this.shape_1.setTransform(194.0251,145.2374);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#EFF1EC").ss(4.3).p("AgCg9IAFB7");
	this.shape_2.setTransform(54.925,156.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#EFF1EC").ss(4.3).p("AgSBAQAWhHAOhJ");
	this.shape_3.setTransform(132.0024,142.7456);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#EFF1EC").ss(4.3).p("AAUBVQgahKgLhRQgDgNAIgB");
	this.shape_4.setTransform(83.2073,143.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#EFF1EC").ss(4.3).p("AiNiSQAVALAVASQAOAMAXAYQBuByBeB6");
	this.shape_5.setTransform(186.975,160.186);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#EFF1EC").ss(4.3).p("AgdAvQAmgwAQg9");
	this.shape_6.setTransform(119.657,97.7179);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#EFF1EC").ss(4.3).p("AAWA6Igrhz");
	this.shape_7.setTransform(94.525,98.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#EFF1EC").ss(4.3).p("AhHAWQAXAKAegJQATgFAdgRQAkgUAGgX");
	this.shape_8.setTransform(164.875,112.3688);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#EFF1EC").ss(4.3).p("Ag4BLQA0g3AngzQARgWgBgP");
	this.shape_9.setTransform(153.3184,98.7177);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#EFF1EC").ss(4.3).p("AhPgcQBUAqBdAN");
	this.shape_10.setTransform(42.904,116.5383);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#EFF1EC").ss(4.3).p("AiBAmQAYAHAmgGQArgFAjgJQAfgHASgIQAfgOAugr");
	this.shape_11.setTransform(158.5381,124.2624);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#EFF1EC").ss(4.3).p("AjhhoQA/AQAmAZQATAOAkAfQAoAfA4AaQAkAQBGAZQAvASAeAH");
	this.shape_12.setTransform(168.326,140.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#EFF1EC").ss(4.3).p("AgqBnQAThUAmhHQAOgaAOgH");
	this.shape_13.setTransform(153.125,143.691);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#EFF1EC").ss(4.3).p("AgwhrQgBADAFAEQAmATAUAVQAdAdAFAgQAFAcgMAhQgJAXgUAh");
	this.shape_14.setTransform(140.5787,131.1421);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#EFF1EC").ss(4.3).p("AkuBqQAHgYAZgmQAWgiAMgPQAVgaAWgQQAYgRAigLQAYgIAogIQA2gLAigCQAxgEAnAKQBRAUAvAqQAyAqAUBK");
	this.shape_15.setTransform(105.825,113.0279);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#EFF1EC").ss(4.3).p("AgIBgQgVgKgGggQgHghAHggQAHgiAUgaQAJgNAMgHQAOgHAMAF");
	this.shape_16.setTransform(72.806,134.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#EFF1EC").ss(4.3).p("Agxg3QAyA1ArAz");
	this.shape_17.setTransform(61.6433,102.4296);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#EFF1EC").ss(4.3).p("AiCCSQAxhWBGhGQBEhIBUg0");
	this.shape_18.setTransform(25.4742,163.6158);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#EFF1EC").ss(4.3).p("AgLh9QAKApAEAzQAEAhADA7QADAsgHAX");
	this.shape_19.setTransform(62.0709,142.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#EFF1EC").ss(4.3).p("AimgsQAcAWAnAUQAYALAwAVQAVAJALABQASADAbgIQBCgTAzgw");
	this.shape_20.setTransform(59.575,125.9464);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#EFF1EC").ss(4.3).p("AjGBcQA2AWBBgLQA7gKA1gjQAugdAugxQAfghAvg9");
	this.shape_21.setTransform(42.2567,141.0257);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#EFF1EC").ss(4.3).p("AgSAvQgDABgBgDQgBgEABgDQAOgyAngi");
	this.shape_22.setTransform(4.8314,179.0725);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#EFF1EC").ss(4.3).p("AhQAZQAogZAugMQAvgLAvAE");
	this.shape_23.setTransform(18.0267,144.0984);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#EFF1EC").ss(4.3).p("AuCGAQAxg7A8iWQA8iTAzg7QAlgrBBgxQAfgXAWgLQAfgOAcACQASACAOAKQAPAMAAAQQABAVgkAdQgkAdADAWQABAMALAJQAKAIANACQARAEAigHQBHgQAmgQQA5gYAggmQANgPAEgRQAEgTgKgMQgIgKgYgGQgpgKgVgMQgggRgCgcQgDgaAZgWQATgRAhgNQCXg6CIgGQCfgHB6BBQAiASAMAUQAJANABAPQACARgJAMQgKAPgoALQgmAKgKARQgGANABAQQAEAyBIArQAxAeA4AWQATAGARgBQAUgCAFgOQAFgNgLgPQgPgRgHgJQgNgPgEgUQgEgTAFgTQASgTAjAAQArgBAzAhQCNBYCSEi");
	this.shape_24.setTransform(103.8382,167.066);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#EFF1EC").ss(4.3).p("AK7DmQAFAlgFAyQgBAMgLBLQgIA1AAAjQgBAxAOAlQAPAsAiAdQAlAfAqAAQAtAAAegoQAfgogTgnQgTgegJgPQgQgaAIgTQAJgTAcgEQAIgBArAAQAoABAVgUQANgLADgRQADgSgJgNQgJgLgSgHQgWgFgKgDQgSgFgLgNQgNgOAGgPQAHgRAdABQAxACACgBQAWgEAPgWQAMgUAEgaQAHg1gWgyQgWgzgrggQgRgMgMADQgHABgHAIQgIALgEAFQgZAigvABQgvABgaghQgZghAQgsQARguApgIQAKgCAWgBQASgDAJgJQANgMgDgXQgDgRgMgUQg0hUhTgyQgigXgVgNQgogYgTAAQgSABAGA3QAIBFgBADQhEALhPhBQgogkgUgRQglgggdgPQgXgMgogNQgzgQgNgFQhPgfgRg6QAMgQAVgFQAUgEAVAFQAQADAVALQANAFAYAMQAxAWA4ADQA3ACAzgSQAFgTgTgRQgOgOgZgJQiBgzhqgaQiAghhygDQiBgDh0AiQh9AkhcBMQgRAOgIAPQgJATAKAOQARAXAygYQBvg2B9gHQAWgBARAKQATALgGARQgEAHgLAIQgdATg4ATQhAAVgXAMQgrAWhGBAQhIBCgoAWQghASgggBQgmAAgQgaQgDgGgGgQQgGgPgFgHQgSgVgiAJQgcAIgdAXQgdAXgOAPQgXAWgLAXQgMAcADAdQAEAfAVARQAJAGASAIQATAJAIAGQAWAQAFAdQAFAdgQAWQgQAWgeAFQgdAFgXgQQgEgDgLgKQgKgJgHgEQgdgPghAWQgdAUgRAkQgiBHACBQQABAXAHAJQAMARAyADQAvACAIAVQADAPgSAJQgCABghAMQgUAIgMATQgNAUACAVQABAWAPARQAPARAVAFQAFABAZgBQAXAAAGADQASAKgJAiQgNAxAAAIQADAxAzAaQAxAZAvgTQAtgRAcguQAagqAHg0QAFgqgGg5QgIhCgEghQgHg3AEgjQAFg1AbgW");
	this.shape_25.setTransform(107.6313,144.2591);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F1DFC7").ss(4.3).p("AggAaIBBgz");
	this.shape_26.setTransform(169.325,148.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F1DFC7").ss(4.3).p("AgTANQASgOANgU");
	this.shape_27.setTransform(178.1192,152.4928);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F1DFC7").ss(4.3).p("AgMAZIAZgx");
	this.shape_28.setTransform(163.925,143.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F1DFC7").ss(4.3).p("AhQASQAOgWAXgOQAYgNAagBQAPgBALAEQAZAHANAZQALAVgBAe");
	this.shape_29.setTransform(158.459,149.0815);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F1DFC7").ss(4.3).p("AgKgGQAQAGAWAF");
	this.shape_30.setTransform(181.1452,160.905);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F1DFC7").ss(4.3).p("AgWg1QgNAQgDAVQgEAVAIATQAIAVAQAGQAYAKAigb");
	this.shape_31.setTransform(188.7715,163.4701);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F1DFC7").ss(4.3).p("AgSAVIAlgp");
	this.shape_32.setTransform(195.025,173.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F1DFC7").ss(4.3).p("AgyhEQATgJAWAIQAUAHAPASQATAVAEAaQAHAngXAg");
	this.shape_33.setTransform(189.4317,179.8311);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F1DFC7").ss(4.3).p("Ag5gmQAFgSAXgFQAQgCATAIQANAEALAIQAWAQAFAeQAEAfgRAWQgDADABACQABACADgB");
	this.shape_34.setTransform(174.3221,159.7274);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F1DFC7").ss(4.3).p("AgigLQApAOAtAI");
	this.shape_35.setTransform(200.6103,159.7672);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#F1DFC7").ss(4.3).p("AgdAzQgBADADACQAfgNAQgiQAQgigKgh");
	this.shape_36.setTransform(194.6705,157.7887);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#F1DFC7").ss(4.3).p("AAhhAQgRgDgQAIQgRAHgJAPQgKAPAAASQAAARAJAQQAIAPAPAKQAOAKASACQADABADgCQAEgCgCgD");
	this.shape_37.setTransform(209.7114,162.8391);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#F1DFC7").ss(4.3).p("AAhAbQgggcgagh");
	this.shape_38.setTransform(174.251,123.9897);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#F1DFC7").ss(4.3).p("AAGAYQgKggAAgk");
	this.shape_39.setTransform(165.4194,129.8977);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#F1DFC7").ss(4.3).p("AgOhAQAKA5AVA2");
	this.shape_40.setTransform(188.599,130.27);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#F1DFC7").ss(4.3).p("AgngBQAvgDAyAH");
	this.shape_41.setTransform(179.4906,140.9708);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#F1DFC7").ss(4.3).p("AgvAuIBfhb");
	this.shape_42.setTransform(176.8,128.575);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#F1DFC7").ss(4.3).p("AhKgWQAHgTAVgIQANgFAbgCQAZgCAMAEQAPAFALAPQAKANAFARQAKAngVAW");
	this.shape_43.setTransform(167.3389,138.4667);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#F1DFC7").ss(4.3).p("Agkg8QgRATgFAZQgDAMACALQACAUAQAQQAQAQAVACQATACATgLQATgLAIgT");
	this.shape_44.setTransform(186.0469,118.6982);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#F1DFC7").ss(4.3).p("Ag5gCQApgDAmAHQANADADgF");
	this.shape_45.setTransform(194.7609,202.5091);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#F1DFC7").ss(4.3).p("AgDA+IAHhfQABgJAEAA");
	this.shape_46.setTransform(183.4782,189.8198);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#F1DFC7").ss(4.3).p("Ag1gWQgHADAIAJQARARAKAGQAUAMAXgDQAYgDAPgR");
	this.shape_47.setTransform(183.4293,183.23);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#F1DFC7").ss(4.3).p("AhHhMQAxgGAiAXQAQALALARQALASADASQAFApgaAh");
	this.shape_48.setTransform(183.3827,203.389);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#F1DFC7").ss(4.3).p("AgaAmIA1hL");
	this.shape_49.setTransform(145.175,147.25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#F1DFC7").ss(4.3).p("AgdgcQADAGACANQACAMADAFQAIARASADQAQAEASgI");
	this.shape_50.setTransform(148.2489,140.0307);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#F1DFC7").ss(4.3).p("AhAgXQAcgaAegDQAQgCAPAGQAQAGAKANQAPASgBAdQgBARgKAh");
	this.shape_51.setTransform(137.7782,156.1206);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#F1DFC7").ss(4.3).p("AgMAqQAMgjAPgh");
	this.shape_52.setTransform(124.2684,100.2321);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#F1DFC7").ss(4.3).p("AgUANQAZgOAfgI");
	this.shape_53.setTransform(136.1685,112.0155);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#F1DFC7").ss(4.3).p("AAKAUIgTgn");
	this.shape_54.setTransform(149.475,117.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#F1DFC7").ss(4.3).p("AhFAqQgIgCAFgOQAPgkAXgRQAOgKAQgDQARgDAPAHQAKAEAJAIQAVAUAHAb");
	this.shape_55.setTransform(152.9289,123.7276);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#F1DFC7").ss(4.3).p("Ag0g9QgHgBgGAMQgIASACAVQABAUALARQALARATAJQASAKATAAQAUgBASgLQARgLAKgS");
	this.shape_56.setTransform(145.8382,108.6679);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#F1DFC7").ss(4.3).p("Ag5gXQA9AUBDAd");
	this.shape_57.setTransform(144.2244,98.906);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#F1DFC7").ss(4.3).p("AgbAYQAKAEAOgKQAOgLAJgQQAIgRAAgT");
	this.shape_58.setTransform(135.1764,97.2917);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#F1DFC7").ss(4.3).p("AguguQAzAuAjA6");
	this.shape_59.setTransform(141.808,88.6988);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#F1DFC7").ss(4.3).p("AhAAzQA1grBVg+");
	this.shape_60.setTransform(116.121,88.9595);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#F1DFC7").ss(4.3).p("AhBgoQgHALAFAXQAEASAGAIQAEAFAJAFQAPAJASABQARABARgGQAQgGANgNQANgNAFgQ");
	this.shape_61.setTransform(131.025,83.0571);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#F1DFC7").ss(4.3).p("AgtAkQAvgkA3gf");
	this.shape_62.setTransform(75.2342,88.255);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#F1DFC7").ss(4.3).p("AgqgYQAqAXAgAf");
	this.shape_63.setTransform(94.9272,87.8058);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#F1DFC7").ss(4.3).p("AhDgbQAJAqAiASQASAJATgCQAVgCANgNQAdgagLg4");
	this.shape_64.setTransform(85.2663,82.9541);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#F1DFC7").ss(4.3).p("AgDAbQACgTAHgP");
	this.shape_65.setTransform(105.1758,87.0211);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#F1DFC7").ss(4.3).p("AhMAYQAKgYAQgSQAOgQAQgHQAUgHAVAHQAVAIAOARQAZAegFAz");
	this.shape_66.setTransform(102.7093,94.8934);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#F1DFC7").ss(4.3).p("AhMgvQgGAPADARQADAPAKANQAKALAUALQAgAQAUgEQAUgEAWgYQAbgdgFga");
	this.shape_67.setTransform(105.6855,80.89);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#F1DFC7").ss(4.3).p("AAjATQgggTgagX");
	this.shape_68.setTransform(86.9443,112.65);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#F1DFC7").ss(4.3).p("AghAQQAogWAugG");
	this.shape_69.setTransform(121.9764,108.9668);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#F1DFC7").ss(4.3).p("AAmAtQgbgrgjgjIAGgE");
	this.shape_70.setTransform(115.8185,109.9851);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#F1DFC7").ss(4.3).p("AgDAuIAFhCQAAgCACgCQABgCACAC");
	this.shape_71.setTransform(104.2786,113.0929);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#F1DFC7").ss(4.3).p("AgxBAQAwhBA6g1");
	this.shape_72.setTransform(90.8479,114.2113);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#F1DFC7").ss(4.3).p("AhhgdQgBAYATAPQAOALAaAEQAtAHAlgPQAUgJAOgOQAQgRAFgU");
	this.shape_73.setTransform(104.7725,107.5521);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#F1DFC7").ss(4.3).p("AhPAfQASgkAjgOQARgHASABQAUABAQAJQAQAKAKAQQAKARgBAT");
	this.shape_74.setTransform(118.3546,117.5386);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#F1DFC7").ss(4.3).p("ABBA/QAJglgBgoQAAgMgDgIQgFgNgOgHQgMgHgPgBQgfgBgcAXQgWATgOAiQgBADABAB");
	this.shape_75.setTransform(129.8352,127.0745);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#F1DFC7").ss(4.3).p("AhYA3QgCgbAPgeQALgXARgNQATgPAagBQAZgCAVANQAVAMANAXQAMAWgBAZ");
	this.shape_76.setTransform(103.011,123.567);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#F1DFC7").ss(4.3).p("AhXBGQgEgIAAgQQgCg4AUgbQAMgPATgJQASgIAVAAQAmACAhAcQAeAbgHAZ");
	this.shape_77.setTransform(84.574,128.4986);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#F1DFC7").ss(4.3).p("AgXgmQAVALAIAWQAKAWgHAW");
	this.shape_78.setTransform(69.2016,88.875);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#F1DFC7").ss(4.3).p("AhNAZQAZAFAqgRQAvgTApgW");
	this.shape_79.setTransform(69.875,99.0711);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#F1DFC7").ss(4.3).p("AgFglQgGgCgDAKQgFATAIASQAIATAQAJQADgBABgD");
	this.shape_80.setTransform(78.9038,95.4021);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#F1DFC7").ss(4.3).p("AgwAPIBhgd");
	this.shape_81.setTransform(80.475,105.95);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#F1DFC7").ss(4.3).p("AAbArQgagJgJgaQgJgaAOgXIAFgB");
	this.shape_82.setTransform(86.0796,102.2645);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#F1DFC7").ss(4.3).p("AhMAHIBWgKQAggEAQAD");
	this.shape_83.setTransform(71.3785,120.8272);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#F1DFC7").ss(4.3).p("AgegLIA9AX");
	this.shape_84.setTransform(76.375,113.375);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#F1DFC7").ss(4.3).p("AgeAtQAhgxAYgf");
	this.shape_85.setTransform(65.4548,117.2789);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#F1DFC7").ss(4.3).p("AhJAOQAfgaAVgIQAjgOAYATQAQAMALAjIADAJ");
	this.shape_86.setTransform(59.3767,124.1021);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#F1DFC7").ss(4.3).p("Ag8AfQAZAUAaACQAfACATgXQAHgIAHgYQAMgkgNgQ");
	this.shape_87.setTransform(68.9755,108.3332);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#F1DFC7").ss(4.3).p("AgaAWQAYgWAWgd");
	this.shape_88.setTransform(79.1858,152.9592);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#F1DFC7").ss(4.3).p("AAZAOQgUgKgPgLQgCgBAAgDQgBgCACAA");
	this.shape_89.setTransform(64.1557,156.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#F1DFC7").ss(4.3).p("AAVBIQgCgcgRgsQgSgygEgV");
	this.shape_90.setTransform(67.925,145.75);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#F1DFC7").ss(4.3).p("AgaAAQgCAAACACQABACACAAQAdAGAWgV");
	this.shape_91.setTransform(65.4179,137.6672);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#F1DFC7").ss(4.3).p("AhLBGQAIgtAXgoQAQgcASgGQANgFAQAHQAOAFAMANQAVAUAKAa");
	this.shape_92.setTransform(71.95,158.6927);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#F1DFC7").ss(4.3).p("AgrAMQASgQAZgBQAaAAASAQ");
	this.shape_93.setTransform(57.9,143.2888);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#F1DFC7").ss(4.3).p("AguAIQApgJAkgF");
	this.shape_94.setTransform(36.1357,120.8447);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#F1DFC7").ss(4.3).p("Ag2ABQAvAEArgH");
	this.shape_95.setTransform(33.3112,139.3231);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#F1DFC7").ss(4.3).p("AABgxQgJArAMAo");
	this.shape_96.setTransform(27.1589,135.8442);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#F1DFC7").ss(4.3).p("AgIAxQAIgrALgl");
	this.shape_97.setTransform(44.6495,126.4568);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#F1DFC7").ss(4.3).p("AgwAdQAxgXAkgq");
	this.shape_98.setTransform(52.7856,132.6203);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#F1DFC7").ss(4.3).p("Ag/AjQBCgYAvg1");
	this.shape_99.setTransform(33.3066,146.3192);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#F1DFC7").ss(4.3).p("AAoAbIhEguQgCgDAAAA");
	this.shape_100.setTransform(34.4858,129.5877);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#F1DFC7").ss(4.3).p("AgzgPQgIAYAMAWQAHAKALAGQALAGAMgBQALgBAQgNQAPgMAJgLQAKgMAAgJQAAgOgQgNQgbgUgYACQgdADgKAhg");
	this.shape_101.setTransform(42.24,137.2261);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#F1DFC7").ss(4.3).p("Ag/AvQgCABACADQABADACABQAlAXAigHQATgEAPgNQAPgNAEgSQADgQgEgPQgFgUgMgRQgMgRgRgK");
	this.shape_102.setTransform(24.9821,123.9172);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#F1DFC7").ss(4.3).p("AAMA5QgMgygKgv");
	this.shape_103.setTransform(9.3402,167.9574);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#F1DFC7").ss(4.3).p("AglAXIBLgt");
	this.shape_104.setTransform(13.725,151.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#F1DFC7").ss(4.3).p("AgVgEIArAK");
	this.shape_105.setTransform(12.825,160.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#F1DFC7").ss(4.3).p("AgqBFQgQgTgDgZQgDgZALgWQALgVAWgNQAVgNAZABQANABAKAGQAMAHACAL");
	this.shape_106.setTransform(21.0429,162.7172);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#F1DFC7").ss(4.3).p("AgZhDQAVACAPANQAQAOAFATQAGATgIAUQgHAUgRALQgGAGgMAEQgUAHgXAA");
	this.shape_107.setTransform(6.8288,158.775);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#F1DFC7").ss(4.3).p("AgtA9QA1g8AghK");
	this.shape_108.setTransform(52.5228,145.3729);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#F1DFC7").ss(4.3).p("AAngCQgrACg2AE");
	this.shape_109.setTransform(31.6136,160.3454);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#F1DFC7").ss(4.3).p("Ag1A/QgHgaAGgcQAHgaASgUQAWgZAZAAQAOAAAMAJQAMAIACAN");
	this.shape_110.setTransform(41.6991,155.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#F1DFC7").ss(4.3).p("AAOAMQgQgMgRgR");
	this.shape_111.setTransform(21.7472,169.1254);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#F1DFC7").ss(4.3).p("ABDgWQg9AShWAc");
	this.shape_112.setTransform(12.4498,184.7449);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#F1DFC7").ss(4.3).p("AgaBhQgdgTAAgvQgBgxAdgoQAQgZAUgIQAMgFAMABQAOABAJAH");
	this.shape_113.setTransform(24.9483,178.4917);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#F1DFC7").ss(4.3).p("AA9gLQgzAGgxAPQgCABAAAB");
	this.shape_114.setTransform(20.8116,201.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#F1DFC7").ss(4.3).p("AAQBNIgciHIAHgI");
	this.shape_115.setTransform(30.535,180.7958);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#F1DFC7").ss(4.3).p("AABBfQglgXgQgnQgIgUAAgUQABgWAJgTQAJgTASgNQASgNAUgBQAQgCAMAHQAKAGALAS");
	this.shape_116.setTransform(33.1814,197.9109);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#070F21").ss(2.6).p("ADZhDQgFgZgfgVQgagTgXgDQgYgDgfALQgkARgRAHQhLAihTgHQgbgCgEAAQgRAAgMAFQgOAGgGAPQgHARAKALQAFAFAJAEQAFACALADQAeAKAfAjQAwA2AGAFQAvApA9ACQAUAAAPgHQASgJADgQQACgPgNgNQgMgMgSgFQgWgFgLgDQgTgFgJgJQgRgOAEgQQAEgPAVgJQAhgOAiAAQARAABHAHQA9gCgHgqg");
	this.shape_117.setTransform(61.6087,28.8357);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#070F21").ss(2.6).p("AhxgUQATgkAKgSQARgeATgRQAXgWAdgHQAggIAZAPQAHAEACAGQAHANgWASIg9AwQgPAMgFAKQgEAHABAIQABAJAGAEQAIAGARgDQAtgKApgZQAKgGASgMQAQgLANgFQAQgHAQABQASAAANAJQASANACAZQACAXgMATQgUAfg1ASQgkAMhRANQhMANgnAOQgjARgTAIQgiARgWgCQgSgCgJgKQgKgLAIgQQAGgLAUgOQAXgRAGgGQAagdAfg6g");
	this.shape_118.setTransform(69.0309,66.033);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#070F21").ss(2.6).p("ABigFQgJgWgRgQQgSgRgVgHQgYgJg2ABQguABgNAWQgFAKABANQACAaAXAVQAPAQAeAQQAaAPASAGQAaAIAWgFQACAAAagIQAQgFALAC");
	this.shape_119.setTransform(164.3417,72.2373);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#070F21").ss(2.6).p("AgXByQgUhXgDg9QgEhSAWhAQACgHAEgDQAFgDAKAEQAgARANA7QARBNgLBPQgKBQgjBF");
	this.shape_120.setTransform(177.3984,42.915);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#070F21").ss(2.6).p("AhniyQArAdAjA3QAVAiAfBFQAwBqAXBA");
	this.shape_121.setTransform(165.8282,56.25);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#070F21").ss(2.6).p("Ah4iDQBOAPBMBWQBMBUALBO");
	this.shape_122.setTransform(165.875,50.725);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#070F21").ss(2.6).p("AhYhPIgEAFQAPA2AVAeQAQAWAlAgQAOANAKADQAHADAPABQAVAAAKgIQAJgGAFgOQAHgTgBgWQgCgUgKgSQgFgJgPgSIgfgm");
	this.shape_123.setTransform(147.8278,44.7063);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#070F21").ss(2.6).p("AiYgFQAGgmA2gjQA+gqAxgIQAggEAeAIQAfAJAUAXQAJAKADAKQADANgGAJQgDAGgJAEQgLAFgFACQgIAEgFAGQgGAIACAHQAAAFAFADQAFAIAMAKQAOAMAEAEQAWAXgGAWQgFASgcAOQgyAWhCgDQgzgDhDgT");
	this.shape_124.setTransform(150.9741,22.7398);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#070F21").ss(2.6).p("AgxgeQARARAkgDQADAAAagEQASgDALABQAhACAZAZQAYAZADAhQADAYgLAOQgGAIgKADQgLADgIgFQgGgDgFgJQgFgKgCgFQgKgSgTgNQgSgMgWgFQgggHg1AIQgUADgHAAQgPAAgLgFQgOgIgHgRQgGgOABgSQABgXAKgTQAKgVARgLQASgLAPgEQAVgEADAPQABAGgIAdQgGAUAQAQg");
	this.shape_125.setTransform(93.7169,49.0543);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#070F21").ss(2.6).p("AjmhfQBAAMAvAOQAvANAJAZQADAKgBANQAAAFgDARQgJA3ANA2QAKAmASATQAWAaApAKQA0ALA0gYQAzgYAZgvQAIgQABgPQABgRgKgKQgGgHgOgEQgtgPg/AMQgXAFgJgGQgHgEgCgKQgCgJADgIQAFgPASgKQAKgFAjgNQAdgKAOgNQAegbgCgyQgBgegTgzIgKgf");
	this.shape_126.setTransform(120.1737,44.9558);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#070F21").ss(2.6).p("AB/hjQgdgNgVABQgPAAgYAJQhtAkhpA+QgpAXgEAaQgDAQAKAQQAJAQAQAIQAYAMAsAAQCMAACDgtQAggKARgPQArglgjguQgcglg0gWg");
	this.shape_127.setTransform(113.4681,24.999);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#070F21").ss(2.6).p("AlrESQhJhSgjhsQgRg0gBgmQgBgqAOgqQAOgoAbgiQA2hEBXgaQAugNA7gCQAngBBDAFQDXAOA3ACQCaAGB1gLQAYgCAJgJ");
	this.shape_128.setTransform(73.7468,31.3159);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#070F21").ss(2.6).p("AGGItQgriMgIhtQgKiGAlhzQAMglAehEQAghHAMgjQAWhAgCgxQgCg5geg1QgcgzgwglQhUhBiDgPQisgVjrBPQhPAagaAGQg9APgvgH");
	this.shape_129.setTransform(142.0333,55.3022);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#070F21").ss(2.6).p("AA2F1IgEiAQgCg6gFgjQgFgmgThKIg0jPQgQg+gEgkQgEg2AQgp");
	this.shape_130.setTransform(38.2014,68.7348);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#070F21").ss(2.6).p("AgjDQQAniFAOhEQAXhxgHhc");
	this.shape_131.setTransform(36.7323,92.2711);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#3F7745").s().p("AAABJQglgGgEgdQgZgIgPgNQgWgRgBgYQAAgZAZgNQAsgWAzASQA0ASATAsQAEAEAEAPQAFABADAEQADAFgBAFIgFAKQgBACgHAGIgPAMQgFADgFgDQgWAPgbAAQgJAAgJgCg");
	this.shape_132.setTransform(165.197,72.2186);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#3F7745").s().p("AgKCfQgPgdgGguIgGhOQgEhCAAgQQAAgxANghQAFgMANAAQALgBAFANIABAFQAPAFAGATQAEAOgBAYQAHATACArQADAhgBANQAAAcgIASQAAAqgBAqQgBARgRAGIgIABQgKAAgHgMg");
	this.shape_133.setTransform(177.0292,41.6694);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#3F7745").s().p("AgUDPQgOgLgUgZIgGgFQgIgHgFgNIgBgBQgagfgJgfQgLgfAEgpQAAgFAFgFIgCgDQgWg2gDgMQgJgoASgbQAQgYAlgUIBBgbQAFgDAGACQAGgEAHgCQAdgKAZAHQAWAGAaAWQAJAIgCALQALAIABAMQAAAOgMAGIgPAGQgLAEgEADQgFAGABALIABAUIgBACIAVAMIAOAKQAZAWgIAWQgBAEgCADIgBAGQgEAPgPAHQgJAEgWADQg/ALgqgDIAqArQAWAZAHAaQAIAegFAXQgHAegcAEIgHAAQgQAAgRgNg");
	this.shape_134.setTransform(150.8829,31.1296);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#3F7745").s().p("AgwBhQgJgHg9g6QgrgngigKQgRgGAAgSQgBgTASgFQAdgIAeAFQAIgNAPgBQBpgDBCgdQAPgJASgHIABAAQATgKAXAFQAXAFAPASQADADACAGQAmAOgCAkQgBAwhLgHIhpgWIgZAQQgNAJgIAKQgRAYAbAKQAOAGAhAIQAbAMANATQASAYgVAVQgNANgVAAQgkAAg6gpg");
	this.shape_135.setTransform(61.8793,28.6493);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#3F7745").s().p("AjXCRQgVgMAMgVQAJgOAUgNIAGgEQACgKAFgFQAcgcAfgvIA0hQQAwhBBBAFQARACAFAQQAFARgPAJQg5AigkAxQAEADAEAEQAOAPAzgIQAkgTAfgOIAlgQQAXgIAPABQAYADAIARQANADAGAKQAGAMgIALQgkA2g/ASQgIACgHgEQgUAHgVAEIhGAMQgFADgFABIgCAAQgtAThDAVQgJADgJgFQggAXgXAAQgKAAgIgFg");
	this.shape_136.setTransform(69.2909,66.1105);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#CA2C2B").s().p("ABnBnQgGgHgIgVQgIgUgIgGQgFgDgLgCIgSgDQgNgEgMgMIgEgEQghgCgZAFIgPADQgMACgEgBQgHgCgEgEQgSADgQgIQgegQALgtQAKgrAegPQAigRAKAaQAFAMgGAQQAFAFAAAJIAAAIQAGABAFADQAIAGADAIQAMAAAVADQAWAEALAAIAUgBQAKAAAKAEIAEADIABAAIAHgBQASgEAIALQAMANAIASQAKAEAEATQAFAVgHALIABAGQABAPgQAHQgGACgFAAQgJAAgGgHg");
	this.shape_137.setTransform(93.5629,49.6404);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#CA2C2B").s().p("AgTC6QgcgGgZgZQgagZgIgeQgHgSgCgZQgEggALgmQgCgQABgOQgTgNgOgPIgCgCQgSgJABgUQAAgUAVgHQASgFAOAIQBpgTBUgnQASgIAOALQAOAKgDATQgHAhgGAPQgKAXgUAPQg1AogyARIgHABIABABQADAMAAALQAIAFAIAJQAPAFAaABIAqACQAQgFAPgBQATgBAOAGQARAHAFARQAJAbgeAlQgdAigWABQgXASgbAHQgQAEgPAAQgNAAgNgDg");
	this.shape_138.setTransform(126.0769,47.545);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F3775F").s().p("AimBlQgbgEgMgVQgXgmAqgnQAggeAugOIASgEQAsgaA0gOQA4gPAsAEQAuAEAjAeQAoAigUApQgSAnhDAUQgfAJhNALQgxAHhTAGIgeABIgSgBg");
	this.shape_139.setTransform(112.759,25.5897);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#10264F").s().p("AsFLnQgHgJADgKQgOgKACgTIASiFIAAgDQgBgaAKghIABgFQAHgwAEgVQAIgmAMgdIABgIQAIgkAUhgQAQhUANgwQAHgdANghIgNhKQgKgGgFgMQgWhAgGhBQhOhMgZhxQgch7A+hKIAFgFQgBgIAFgGQBPhjB/gNQAlgDAqAFIAlgEQAdgEAjANQAfgBAxAEQA+AFASABQAMAAAfAFQAbADAQAAIAjgCQAUAAAOABQApgGAYAAQALABAhAJQAPgEAZgFIAogHICHgdQBTgTAtgEQAsgEAZATQAngGAjAMIAHACQAGgEAGAEIAEACQAEAAADACIALAFQALgBAYAKQAKAEAJAFIAMAFQASAGAdAUIACABIANAJQAWARALANQAJgDASAZQAKAMAKAQIAQAUQAJAMADAKIACALQAQAcgDAkQgCAZgOAuQgQA3gPAiQgWA1gcAdIgPAkIgjDDQACAEAAADQAMBMgBBhQAIARALAqIANA0QAUApgEA1QAEAygPBbQgRBlgBAjQgBARgOAHQgOAIgPgHQg0gbhPgzQhnhBgbgQQgugagSgkQgTgGgPgQQgQgTgGgcIg6g/QgjgigngOQg+gWhVADQgrAChpAOQgFABgEgBQgbARgUAQQgfAZggArIg3BLQgKAMgNAHIgHAHQgUATgiAKQgoAIgTAGQgtBbhhBEQguAggkAQQggAOgVAAQgVAAgLgNg");
	this.shape_140.setTransform(107.3113,75.5715);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat_10, new cjs.Rectangle(-5,-0.8,222.4,224.70000000000002), null);


(lib.hat_09 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#070F21").ss(4.3).p("ANWDxQgaiHhbhwQhZhvh/g9QhTgohTgHQhcgIhJAkQgQAIgeATQgfAUgPAHQgZANhJABQhJACgYgMQgPgIgfgTQgegTgRgIQhJgkhcAIQhSAHhTAoQh/A8hZBwQhaBwgbCH");
	this.shape.setTransform(85.525,75.9981);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#070F21").ss(2.6).p("AG2BsQgugVg6gqQhAgxghgXQhjhFhfgMQiJgQiOBlQhBAvghAYQg6AqgtAV");
	this.shape_1.setTransform(85.5,11.3901);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#070F21").ss(2.6).p("ADYGIQAHhtgThtQgWh1g0hsQg0hthNhbQgrgzgmgYQgbgRgogOQgugPgYgH");
	this.shape_2.setTransform(149.1792,59.6311);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#070F21").ss(2.6).p("AjSGKQgIhxAUhtQAVh1A0hsQA0htBNhbQAsg0AmgXQAagQAogPIBGgW");
	this.shape_3.setTransform(21.3803,60.1855);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#EFF1EC").ss(2.6).p("ACrAUQgFAfgQAbQgRAbgZASQgZASgfAHQgeAIgegFQgagEgngRQg5gYgUgfQgQgYgEgzQgCgfAMgvQAMgtAQgd");
	this.shape_4.setTransform(129.4612,29.8344);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#EFF1EC").ss(2.6).p("AiqAbQAFAfAQAbQAQAaAZATQAZASAfAHQAfAIAdgFQAbgEAngSQAbgLAQgKQAWgPAMgSQARgaADgyQACgfgMg1QgMg1gQgc");
	this.shape_5.setTransform(41.5708,29.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#070F21").ss(2.6).p("AADhWQgHAJABAYQADBHAFBF");
	this.shape_6.setTransform(85.192,8.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#3F7745").ss(4.3).p("AiFiEQAvANAoA4QALAPAUAhQASAfALAPQAkAxBNA5");
	this.shape_7.setTransform(154.6963,53.6934);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6).p("ABdgMQAJAVgSAhQgRAcgVAIQgNAFgWgBQgngCgUgKQgSgKgNgRQgMgRgDgUQgEgSAKgbQAIgXAOgT");
	this.shape_8.setTransform(128.5158,27.3091);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#3F7745").ss(4.3).p("ACGiEQgvANgoA4QgKAOgUAhQgSAfgMAQQgkAyhNA4");
	this.shape_9.setTransform(16.3008,54.0737);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6).p("AhcgHQgKAWATAgQARAdAVAHQAMAFAXgBQAlgBAWgLQASgJAMgSQAMgRAEgUQAEgVgFgdQgGgfgLgQ");
	this.shape_10.setTransform(42.5387,27.1841);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#EFF1EC").ss(4.3).p("AMnCfQgFARgTAGQgSAHgRgIQgegMgLgqQgEgOgCgVQgCgYgBgMQgHg4gbgpQgVghgagGQgSgFgZAIQgbALgOAEQgfAKgegEQgigFgUgVQgFgGgHgLQgIgMgFgGQgegsg3gSQg2gSgzAQQg1ARgtAhQg0Amg1ACQg4ACgwgnQgmgfg7gSQg0gQg2ASQg2ASgfAsQgEAGgIAMQgHAKgGAHQgVAVghAFQgdAEgggKQgbgLgOgEQgZgIgSAFQgaAGgVAgQgbApgHA5QgBAMgCAXQgCAVgDAOQgMAqgeANQgRAIgSgHQgTgHgFgQ");
	this.shape_11.setTransform(85.5,106.6744);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#EFF1EC").ss(4.3).p("AgaB0QArh4AJiD");
	this.shape_12.setTransform(168.189,112.469);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#EFF1EC").ss(4.3).p("AAbBzQgrh2gJiC");
	this.shape_13.setTransform(2.8341,112.9891);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F1DFC7").ss(4.3).p("ABKgeQgZgQgMgIQgYgOgRADQgNACgLAJQgKAJgHANQgHAOgGAlQgCAMgDA3");
	this.shape_14.setTransform(92.7206,89.161);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F1DFC7").ss(4.3).p("AAzAvQgvAHgWgaQgPgQABgaQACgVALgY");
	this.shape_15.setTransform(98.7549,80.9444);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F1DFC7").ss(4.3).p("ABRgZQgNAagzAKQgnAIgWgHQgQgGgKgLQgLgOABgP");
	this.shape_16.setTransform(99.5958,72.3483);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F1DFC7").ss(4.3).p("AAlgEIhJAJ");
	this.shape_17.setTransform(159.85,112.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F1DFC7").ss(4.3).p("AAZA9Igxh5");
	this.shape_18.setTransform(163.55,99.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F1DFC7").ss(4.3).p("AAlhAQgUAEgQAQQgPAQgEAVQgHAgAaA0");
	this.shape_19.setTransform(166.0922,109.8699);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F1DFC7").ss(4.3).p("ABLhDQACgGgLgDQgsgFgoAEQgNABgKAFQgSAIgIAbQgKAdAEAlQACAWAKAt");
	this.shape_20.setTransform(161.4381,100.2942);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F1DFC7").ss(4.3).p("AAKBBIgTiB");
	this.shape_21.setTransform(108.175,62.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F1DFC7").ss(4.3).p("AAmgTQgRgDgRAJQgQAJgHAQQgEAIgEAA");
	this.shape_22.setTransform(146.142,84.3125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F1DFC7").ss(4.3).p("ABgBIQAGgDgEgNQgIgfgUgZQgTgagbgSQgagRgggHQgggGggAF");
	this.shape_23.setTransform(136.3395,88.4163);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F1DFC7").ss(4.3).p("AAAhEQARADAKASQAHALADAVQADAXgHANQgFAMgRALQgcAVgmAE");
	this.shape_24.setTransform(123.1849,79.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F1DFC7").ss(4.3).p("ABdg4QALAegOAbQgPAdgeAJQgZAIgugKQgxgLgWgS");
	this.shape_25.setTransform(120.375,68.1146);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F1DFC7").ss(4.3).p("ABUBFQgeACgdgMQgdgMgVgWQgVgWgKgdQgKgeADgf");
	this.shape_26.setTransform(136.0616,66.8307);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F1DFC7").ss(4.3).p("ABFBNQgOAMgWgGQgPgDgSgOIghgZQgYgTgGgOQgLgWANgcQAJgVAXgUIgGgB");
	this.shape_27.setTransform(151.9676,76.8401);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F1DFC7").ss(4.3).p("ACOhjQAJAJAbAWQAWAQALARQApA7gEAsQgCAcgYAqQgSAfgTAMQgVAOgqgBQgugBg4gNQglgKg9gUQgdgKgPgHQgXgKgQgOQgYgUgXgoQgnhBgBgvQAAgcALgSQAKgSAbgSQA4gkA4gJQA6gJA8AT");
	this.shape_28.setTransform(134.9678,77.095);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F1DFC7").ss(4.3).p("AheiOQAygKA7AfQAmAUAPAPQAbAZAAAeQAAAcgfAmQgxA9g5Ax");
	this.shape_29.setTransform(101.55,77.5045);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F1DFC7").ss(4.3).p("AhEgeQANgHAYgRQAXgNASACQAaAEAOAdQAJARAFAiQABANAEA2");
	this.shape_30.setTransform(77.8221,89.5457);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F1DFC7").ss(4.3).p("AgyAvQAvAGAWgZQAPgRgBgaQgCgUgLgY");
	this.shape_31.setTransform(72.2451,81.3369);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F1DFC7").ss(4.3).p("AhQgZQANAaAzAKQAlAJAYgIQAQgFAKgMQALgOgBgP");
	this.shape_32.setTransform(71.409,72.6757);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F1DFC7").ss(4.3).p("AhCgrQAHAhAaAWQAKAJAKAEQANAGARgFQAQgEAMgMQAVgVABgl");
	this.shape_33.setTransform(84.225,68.5701);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F1DFC7").ss(4.3).p("AgjgEIBIAJ");
	this.shape_34.setTransform(11.2,112.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F1DFC7").ss(4.3).p("AgYA8IAxh3");
	this.shape_35.setTransform(7.5,99.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#F1DFC7").ss(4.3).p("AgkhAQAVAFAPAQQAPAQAEAUQAHAhgaAz");
	this.shape_36.setTransform(4.9089,110.2274);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#F1DFC7").ss(4.3).p("AhKhDQgBgDADgDQADgCAFgBQApgFAqAEQAQACAHADQASAJAJAbQAJAdgEAkQgCAYgKAr");
	this.shape_37.setTransform(9.5765,100.669);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#F1DFC7").ss(4.3).p("AgJBBIATiB");
	this.shape_38.setTransform(62.825,63.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#F1DFC7").ss(4.3).p("AglgSQARgDARAJQAQAJAHAPQADAIAFAA");
	this.shape_39.setTransform(24.858,84.6875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#F1DFC7").ss(4.3).p("AheBIQgHgEAEgMQAIgfAUgaQATgaAbgRQAagRAhgHQAggGAfAF");
	this.shape_40.setTransform(34.6638,88.8163);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#F1DFC7").ss(4.3).p("AAAhEQgPADgLARQgHANgCAUQgEAWAHAOQAFALARAMQAeAVAkAE");
	this.shape_41.setTransform(47.8342,79.875);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#F1DFC7").ss(4.3).p("Ahcg4QgKAeAOAbQAOAdAeAJQAZAIAvgKQAwgKAWgT");
	this.shape_42.setTransform(50.6417,68.4793);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#F1DFC7").ss(4.3).p("AhTBEQAeACAegLQAcgMAVgWQAVgXAKgdQAKgdgDgf");
	this.shape_43.setTransform(34.9383,67.2062);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#F1DFC7").ss(4.3).p("AhEBNQAPAMAVgGQAOgEATgOQAOgJATgPQAWgRAHgQQALgXgMgbQgIgVgYgVIAGAA");
	this.shape_44.setTransform(19.063,77.2037);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#F1DFC7").ss(4.3).p("AiLhzQgNANgZAYQgUAVgNATQgpA6AEAtQACAcAZAqQASAgASALQAWAOApgBQAvgBA3gOQAkgJA+gVQAdgKAPgGQAYgLAQgNQAVgRAZgrQAnhBABgvQABgbgLgTQgKgTgcgRQg2gjhEgGQhAgGhAAU");
	this.shape_45.setTransform(36.0364,77.784);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#F1DFC7").ss(4.3).p("ABfiTQgagEgfAKQgVAGgfASQgmAVgPANQgbAaAAAdQAAASAKARQAGANAPATQAwA7A6Az");
	this.shape_46.setTransform(69.4738,77.5052);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B8912A").s().p("AgfBOQg1gLgNg1QgMg0AqgjQAJgHALABQAMAAAGALQAEAJACAJQAOgOAOADQAKAAAKAFQALAFAGAKQARAHAPACQANABAIAKQAIAKgDALQgMAngcAYQgIAIgKABQgKAAgIgFQgRANgVAAQgIAAgJgCg");
	this.shape_47.setTransform(129.0349,27.6553);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B8912A").s().p("AgxBFQgZgOgLgZQgMgeAVgSQARgPAbAJQAOgOAagPIAsgYQAPgJANALQANALgEAQQgCAKABAZQABAUgFANQgJAagXARQgWARgcACIgEAAQgZAAgWgNg");
	this.shape_48.setTransform(42.4573,27.4298);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FBC85B").s().p("AgZCPQgegIgPgTIgBAAQgOgBgKgJIgBgCIgIgEQgegOgOgXQgPgYAFgeQgBgDAAgEQgJhcAhgtQAHgKAMgBQALAAAHALIAEAFQAHALgLAKIgIAYIgGAYQgFAfAEAgIAAAAIA0AqIAdAVIAAAAQAegCASgHQAYgJAQgSQAFgGANgZQALgWAMgGQAWgMAWAQQAUAOABAYQAAAVgMAVQgGAQgUASIgMALIgKALQghAegpAGIgUABQgQAAgRgEg");
	this.shape_49.setTransform(129.764,29.9477);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FBC85B").s().p("Ag8CNQgpgGgTgVQgTgWgIgaQgJgJgBgNQgBgPAHgGIAEgLQAMgVAVgCQAWgBAPARQAFAHAJAUQAKAVAFAHIAAAAQALgEAKAHQAJAAAJAEQASAKAVgDQADgHAGgFQAZgSAggLQAMguABgUQABgRgEgZIgGgpQAAgFADgCIADgDQAEgFAJgBIAAgEQAAgHAHgBQAGAAACAGIAFAOQAMALAEAXIACAnQAFBEgQAxQgCALgLACQgTAdgcARQgeARgfgDQgHAGgKAAQgygBgSgDg");
	this.shape_50.setTransform(41.6286,29.2731);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#10264F").s().p("ANEHeQgGgBgBgGIgCgjQgNgCgFgOQgFgRgHgQQgJgTgQgZIgdgrIgIgMQgGgFgHgKIgNgTQgRgVgTgRQgQgJgVgRIgigcQgdgTgLgJIg0gjIg4gUQg9gRgSgEQgvgLgiADQgRABgXAHIgoANQgDAGgFACIg0AQQglAdgcALQgDAHgKAEQg8AVgtgPIgPAFQgMAFgMgFQgLgEgHgLIgHgEIhCgpQgmgWgggNQgegNgZABIgnAIQg4AOgfAHQg1ALgjgEIgUAIIg7AiQghAUgXASQgBABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBIhSBSIgDADQgoA1geAtQgEAOgQAgQgOAdgFARIgCAEIgJAbQgBAEgEAAQgEgBgBgEQAAgUAEgdQgIgFAAgKQAQiBAniQQADgKAJgDQAOglAWgnIAEgFQAgg7ArgyIAkg6QAJgPARAFQARAEABAQQAFAAAEADQAEADgBAFQgDAhAuAWQAlARAlABQAfABAjgJQAigJAcgQQAfgRAVgdQALgzAFgvQgMgxgJgTQgDgIAFgGIgBgCQgMgRAGgZQAHgaATgIQAPgHBDgmQAzgdAigKIAKgDQAcgTAkAAQAKgCAHAFQAZgFApAIQAcAGAbAJQAoAQAZANQAmATAXAWQAFgBADADIAYAVQAaANgFApIgSBKIgKArQAEAUAGApQAHAkARAUQAOAMAfAIIAwALIBFAUIAEgBQAwgLA7gkQAWgZAHgjQAEgOAQgDQARgCAGANIAUAxIABAAQAtAPAeA+IAnBpQAeBQAWBJIAJAaQAFAPACAKIABADQANA2AEA5QAAAGgDAEQgBAGgFADQAAAWgGAVQgCAFgEAAIgCAAg");
	this.shape_51.setTransform(85.8772,47.8644);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat_09, new cjs.Rectangle(-9.5,-1.1,182.6,138.6), null);


(lib.hat_08 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AhPhwQAhgPApAKQApALAVAcQAVAcABAmQABAkgSAfQgSAeghASQgfASgjAB");
	this.shape.setTransform(62.3526,51.4338);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6).p("AhHhzQAMgNAWgLQAUgKAUgFQAQgDAKADQANAFAEAPQAEAOgFAOQgHATgdAYQATgNAYAJQAYAJAGAWQAHAWgPAUQgOAVgWADQAOAKAJAUQAFANAGAYQAFAVgDAKQgFARgVAHQgmANgogcQgVgQgjgt");
	this.shape_1.setTransform(49.3599,54.7045);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6).p("AgGg1QgsAUgTAPQghAZgFAiQgDATAIARQAIASAQAIQANAGAQgBQAPgBAOgIQAVgMAXgeQAegmAOgfQAPgdAIgQQAOgeACgRQgWAFgkARQgmAVgRAIg");
	this.shape_2.setTransform(91.0419,44.0793);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6).p("AgZg2QgoABgcAMQgkAQgMAfQgHAXAKAOQANARAkgFQAagEAigKQATgGAmgMQATgGAogGQAogFASgGQgBgchJgQQg1gMgrACg");
	this.shape_3.setTransform(95.9768,26.4995);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6).p("AhFgsQAPApAjAdQAjAeArAIQAGABACgCQADgDAAgFQACgegHgPQgGgLgPgKQgJgHgTgJQg6gcgEgCQgSgHgCABQgDABAAASg");
	this.shape_4.setTransform(170.6972,66.5108);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.6).p("Ag3gTQAEATATAOQATANAUgDQAVgDAOgSQAPgRgCgV");
	this.shape_5.setTransform(149.307,59.8213);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6).p("AAGgvQgWAMgRAVQgIAKgCAIQgDAPAMANQALANAQADQAUAEAogO");
	this.shape_6.setTransform(117.5397,49.6944);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F1806").ss(2.6).p("AgdAkQgFACgLgJQgLgIgBgHQgBgLAJgLQAUgZAggCQAfgDAYAX");
	this.shape_7.setTransform(123.7898,25.9147);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6).p("Ag2gbQAsAFATALQAPAIAKANQAKAPgBAP");
	this.shape_8.setTransform(156.3659,30.5081);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5F1806").ss(2.6).p("AhxAsQABAYApAQQAsARAeAAQAdgBAagPQAagQAOgZQAPgYABgeQAAgegNgaQgHgNgLgIQgJgHgSgEQgegFgaAIQgeAJgOAX");
	this.shape_9.setTransform(157.1759,45.4795);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6).p("Ag2hOQgUAGgNATQgJAOgIAbQgJAfALAVQAGALANAJQAdAWAqgEQAhgCAmgTQAXgNAKgMQALgOADgTQADgOAAgZ");
	this.shape_10.setTransform(134.5725,53.924);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5F1806").ss(2.6).p("ABshQQgWgBgYACQgcAFgRACQgVAEgLADQgRAEgNAIQgUAMgVAcQgaAhAFAXQADAMAJAJQAJAIAMAEQAUAHAcgDQA3gGAwgc");
	this.shape_11.setTransform(118.9597,37.2052);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(2.6).p("Ag4A4QgcgTgQgeQgEgHAAgFQACgJALgHQAhgUAVgIQAhgMAYAHQALADAUAUQAUAWAKADQAJADAGAEQAGAFACAJQACAJgDAJQgEAMgNAR");
	this.shape_12.setTransform(139.4667,26.8127);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5F1806").ss(2.6).p("Ag8hEQgfARgPAPQgWAZADAZQADAcAcATQASANAjAIQAuALAjgEQAugGAZgfQANgQACgVQADgVgKgSQgGgLgUgRQgnghgjgEQgkgDgrAYg");
	this.shape_13.setTransform(139.892,40.5793);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5F1806").ss(2.6).p("AAIhcQgOAtAAAvQAAAxAOAt");
	this.shape_14.setTransform(181.4673,466.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#5F1806").ss(2.6).p("AgchTQAXAVALAlQAJAYAHAqQAFAcgEAP");
	this.shape_15.setTransform(189.3215,465.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5F1806").ss(2.6).p("AAmCUQg2g6gNhTQgNhTAjhH");
	this.shape_16.setTransform(177.8471,471.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#5F1806").ss(2.6).p("AAHjPQAaAWASAeQARAfAGAiQAOBOgsBRQgeA7hGBIQgagoAHg0QAIg0Algf");
	this.shape_17.setTransform(189.5759,475.6027);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#5F1806").ss(2.6).p("AAwgtQANAIAHANQAIANAAAOQAAAIgEARQgCAJgCACQgEAIgSADQguAHgugJQgTgDgGgKQgCgEgBgHQgEgbATgWQAQgRAkgHQAigHAVALg");
	this.shape_18.setTransform(183.5687,451.538);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#5F1806").ss(2.6).p("AAhApQgpgFgKgVQgLgUAZgo");
	this.shape_19.setTransform(180.3198,442.4996);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#5F1806").ss(2.6).p("AglA8IAdgQQAUgLAGgHQAKgNADgfQACghgQgH");
	this.shape_20.setTransform(188.5271,440.1018);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#5F1806").ss(2.6).p("AAgBMQglgYgOgsQgNgqASgp");
	this.shape_21.setTransform(182.0386,438.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#5F1806").ss(2.6).p("AgmBlQAFgNANgPQAQgRAHgIQAXgcAJgjQAIglgJgjQgBgGgEgEQgEgEgEAB");
	this.shape_22.setTransform(187.2814,432.8313);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#5F1806").ss(2.6).p("AAtBnQgdgVgSgfQgUgggMgvQgNgzAVgX");
	this.shape_23.setTransform(182.4123,426.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#5F1806").ss(2.6).p("AgqBVQAHgIAYgZQATgUAKgOQAggsgJgoQgBgJgGgFQgGgHgHAD");
	this.shape_24.setTransform(186.2892,422.1026);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#5F1806").ss(2.6).p("AAsBiQgigYgVglQgWglgEgpQgCgUAEgMQAGgSAOgG");
	this.shape_25.setTransform(182.2938,414.025);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#5F1806").ss(2.6).p("AgtBdQAKgMAMgRQAZgkAMgVQAUgfAJgdQAFgRgDgJQgDgHgGgDQgHgEgGAD");
	this.shape_26.setTransform(187.0063,410.3357);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#5F1806").ss(2.6).p("AAkBjQgdgrgMgbQgVgngGgkQgFgjATgM");
	this.shape_27.setTransform(183.0397,403.9161);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#5F1806").ss(2.6).p("AgmBoQAIgOATgbQARgbAJgPQAdgzgGgqQgCgOgGgIQgJgKgMAC");
	this.shape_28.setTransform(187.6587,397.784);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#5F1806").ss(2.6).p("AA2BjIgygyQgNgOgGgHQghgogBg0QAAgWAKgI");
	this.shape_29.setTransform(183.0655,391.436);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#5F1806").ss(2.6).p("AggBbQAVglASgmQAWgqACgaQACgOgEgKQgGgNgMgB");
	this.shape_30.setTransform(186.6304,387.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#5F1806").ss(2.6).p("AA1BmIgSgVQglgrgQgbQgagogFgmQgBgLADgIQADgJAIgC");
	this.shape_31.setTransform(181.3159,380.2089);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#5F1806").ss(2.6).p("AgjBcIArhLQAXglACgXQACgSgHgLQgEgHgHgDQgIgEgHAC");
	this.shape_32.setTransform(186.1071,375.796);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#5F1806").ss(2.6).p("AA5BUQgJgZgkgdQgSgOgJgIQgPgMgJgMQgLgPgEgSQgEgSAHgQ");
	this.shape_33.setTransform(180.9273,369.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#5F1806").ss(2.6).p("AgiBIQAbgdALgQQAUgbAGgaQAEgUgHgKQgEgHgHgDQgIgDgHAD");
	this.shape_34.setTransform(184.9011,365.1569);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#5F1806").ss(2.6).p("ABGBgQgtgdgxg7QgngtgGgiQgCgNAGgHQADgEAGABQAFAAACAE");
	this.shape_35.setTransform(177.9733,359.2972);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#5F1806").ss(2.6).p("AgmBmIAegnQAVgfAHgMQASgkgCgnQgBgRgGgKQgJgOgOAAQgBAAgIAD");
	this.shape_36.setTransform(183.1148,353.3972);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#5F1806").ss(2.6).p("ABTBeQhPhDhEhPQgKgLgCgJQgCgGACgGQADgHAFgC");
	this.shape_37.setTransform(175.5924,348.625);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#5F1806").ss(2.6).p("AgnBiQANggAXgeQAUgaAEgGQAIgOAIgfQAGgWgFgMQgDgIgIgEQgJgFgHAF");
	this.shape_38.setTransform(180.9386,342.0149);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#5F1806").ss(2.6).p("AgoBgQAeglAVghQASgZAFgRQAJgagKgWQgFgLgKgIQgLgHgLAA");
	this.shape_39.setTransform(178.6207,331.5407);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#5F1806").ss(2.6).p("ABUBbQg7ghg2grQgbgTgLgRQgQgbAKgYQAHgQAPgC");
	this.shape_40.setTransform(172.3258,336.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#5F1806").ss(2.6).p("ABUBYQgXgcg2gpQg4gqgWgYQgLgNgBgIQgBgHAEgFQADgHAGAA");
	this.shape_41.setTransform(170.415,327.65);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#5F1806").ss(2.6).p("AgqBXQAlgmAagrQAOgXADgOQAFgYgLgQQgGgJgKgEQgKgEgJAE");
	this.shape_42.setTransform(175.8339,321.5433);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#5F1806").ss(2.6).p("ABfBaQgfgcgogbQgjgWgSgMQgegTgTgTQgOgOgBgKQgCgIAEgHQADgHAHgC");
	this.shape_43.setTransform(167.1275,317.5321);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#5F1806").ss(2.6).p("AgnBfQAngzAag7QANgcgCgRQgBgMgHgKQgIgKgLgBQgHgBgNAE");
	this.shape_44.setTransform(173.5689,311.59);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#5F1806").ss(2.6).p("AgzBaQA+gwAehIQAIgWgCgNQgBgKgGgHQgHgHgJAAQgEAAgJACQgIACgEgB");
	this.shape_45.setTransform(169.5946,301.575);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#5F1806").ss(2.6).p("ABpBZQhlguhThHQgMgLgDgGQgFgKAEgMQADgLAKgGQAEgCAAgC");
	this.shape_46.setTransform(163.0058,307.275);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#5F1806").ss(2.6).p("AgsBVQAcgWAbgZQARgOAGgLQAMgSgBgsQAAgKgBgFQgDgKgKgGQgLgGgKADQgKACgCgC");
	this.shape_47.setTransform(165.729,291.8382);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#5F1806").ss(2.6).p("ABpBQIhQgoQgrgWgUgOQgUgNgQgQQgcgeAHgX");
	this.shape_48.setTransform(159.9434,297.4577);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#5F1806").ss(2.6).p("ABpBPQg2gVhEggQgsgWgTgQQgSgPgFgQQgCgKACgKQADgKAJgF");
	this.shape_49.setTransform(156.1625,288.15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#5F1806").ss(2.6).p("ABgBIQg3gdg7gUQgZgJgIgDQgSgIgLgKQgMgNgDgTQgCgTAMgM");
	this.shape_50.setTransform(151.7857,278.1264);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#5F1806").ss(2.6).p("AgxBbIBDhGQAPgQAFgJQAIgNABgRQAAgQgIgNQgJgOgPgGQgPgGgOAG");
	this.shape_51.setTransform(162.2787,282.0486);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#5F1806").ss(2.6).p("AglBdIAog5QAVgeAFgMQAKgbgGgWQgEgMgKgJQgKgJgLgBIgHAH");
	this.shape_52.setTransform(158.5186,272.6866);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#5F1806").ss(2.6).p("AgsBWQAmghAaglQALgNAEgMQADgHACgJQADgbgLgQQgIgMgPgDQgOgEgMAHQgDABgDABQgDAAgBgD");
	this.shape_53.setTransform(153.6617,263.6888);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#5F1806").ss(2.6).p("ABnBOQgUgNghgLQgmgMgSgHQhGgbgWgqQgFgMABgIQAAgGAEgEQAEgEAFAAQAAAAAEAAQACAAABgBQACgBAAgCQABgCgCgB");
	this.shape_54.setTransform(148.1173,269.1759);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#5F1806").ss(2.6).p("ABeBeQgNgNgXgKQgGgDgjgNQgcgKgggPQgWgLgIgKQgKgJgEgRQgDgKgDgUQgDghAOgJ");
	this.shape_55.setTransform(144.1227,258.1383);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#5F1806").ss(2.6).p("AgYBZQAgg6ANg+QAFgZgGgNQgEgKgJgFQgIgFgJAD");
	this.shape_56.setTransform(149.4786,255.0471);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#5F1806").ss(2.6).p("ABNAzQg7gWgagRQgtgdgPgp");
	this.shape_57.setTransform(141.8602,253.2074);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#5F1806").ss(2.6).p("AAIg/QAEABACgEQAOAOgDAYQgDAPgLAVQgRAjgVAf");
	this.shape_58.setTransform(145.5684,247.3296);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#5F1806").ss(2.6).p("AA/gVQgWAagkAJQgiAJghgO");
	this.shape_59.setTransform(123.4,248.4353);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#5F1806").ss(2.6).p("AABhZQgMgUgJgHQgIgFgIgBQgKAAgHAFQgFADAIASQAJAUAAAEQgDAfgGAzQgCAsAOAkQAOAjAVgDQAIgBAMgMQAdgdAIgpIgKgG");
	this.shape_60.setTransform(116.9261,237.3561);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#5F1806").ss(2.6).p("ABWAgQAeAWgHATQgFAMgTAFQgWAGgagGQgYgGgVgOQgigYgggwQgagogHgdQgKgnAxAhQA6AoBgBFg");
	this.shape_61.setTransform(126.9891,237.3563);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#5F1806").ss(2.6).p("ABOhOQARALAGAVQAHAUgGAVQgLAjgpAYQgiAVgpADQgpAEgmgP");
	this.shape_62.setTransform(172.219,221.934);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#5F1806").ss(2.6).p("ABkhgQAOAXACAcQACAcgLAYQgMAbgXAVQgtAog8ACQgVABgggFIgogF");
	this.shape_63.setTransform(191.8254,204.9275);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#5F1806").ss(2.6).p("AAdBYQgSAEgTgRQgSgPgIgUQgLgfAOgsQARgxAegDQAMgCAHAHQAEADAAAFQABAGgDAD");
	this.shape_64.setTransform(202.7082,187.7405);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#5F1806").ss(2.6).p("AAniTQAgAGAXAxQAUArAEApQAEAugSAkQgPAegcAUQgdATggAEQghAEgggOQgggNgUga");
	this.shape_65.setTransform(203.8864,181.986);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#5F1806").ss(2.6).p("AA4BMQgYAMgbgIQgagHgQgVQgQgVgCgcQgCgaAMgYQANgdAXgG");
	this.shape_66.setTransform(213.4102,153.8692);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#5F1806").ss(2.6).p("AgGisQAGgFAPAHQAcAOAXAbQAVAZALAgQAWA9gPBFQgGAcgLATQgTAdguAWQgiARghACQgnADgbgT");
	this.shape_67.setTransform(211.3703,149.5857);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#5F1806").ss(2.6).p("AhrBjQAZgOANgGQAPgHAmgOQAhgMASgJQAbgPARgVQAUgWACgbQACgTgJgOQgLgQgSAB");
	this.shape_68.setTransform(187.7623,180.5875);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#5F1806").ss(2.6).p("AgjA9QANgCAMgJQANgNAIgGQANgJAGgOQAHgOgCgOQgEgQgNgNQgPgPgMAG");
	this.shape_69.setTransform(189.9079,191.5994);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#5F1806").ss(2.6).p("AhZA9QA+gPAzgSQAggMANgKQAWgSgCgYQgBgGgCgDQgDgFgMgDQhRgShPAb");
	this.shape_70.setTransform(180.2582,203.09);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#5F1806").ss(2.6).p("AgXAiQAUAHAagCQAbgCASgKQAIgEABgFQACgGgGgIQgPgagOgHQgMgGgbgBIhdgD");
	this.shape_71.setTransform(172.4456,213.8725);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#5F1806").ss(2.6).p("AgpA4QAcAAAdgFQAggHAWgLQAOgHAEgHQAEgIgDgKQgDgIgIgGQgKgIgYgFIiPgd");
	this.shape_72.setTransform(163.9361,219.8151);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#5F1806").ss(2.6).p("AgoA2QAtAFAugJQANgCAHgFQAJgGACgNQACgMgGgLQgIgQgagOQgagOgigHQgigGggAC");
	this.shape_73.setTransform(154.4517,228.6294);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#5F1806").ss(2.6).p("Ag/hBQBQASA6A6QAOANABAMQAAAKgHAIQgGAHgKADQgLAEgcgDQgogHgYgFQglgHgQgL");
	this.shape_74.setTransform(142.7767,233.6192);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#5F1806").ss(2.6).p("AA5gUQACgGgHgMQgGgLgHgGQgGgGgTgIQgOgFgIAAQgWADgNAkQgGAVgEAhQgEAfAAAZ");
	this.shape_75.setTransform(131.8535,225.6229);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#5F1806").ss(2.6).p("AA/hkQgBgKgKgEQgMgFgJAEQgNAGgNAYQgvBcgUB6");
	this.shape_76.setTransform(140.2,224.6841);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#5F1806").ss(2.6).p("AgnB5QAFgOABggQADhLAQhLQAGgbAKgKQAHgHALgBQALgBAHAHQACADgBADQAAAEgDAB");
	this.shape_77.setTransform(148.8741,219.0733);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#5F1806").ss(2.6).p("AglByQgJhUAJhWQAEgdAIgMQAMgPAVgBQAWgBAMAOQAAADgCABQgCACgCAA");
	this.shape_78.setTransform(158.1561,212.7718);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#5F1806").ss(2.6).p("AgaCFIgEhJQgHhgAGg0QACgTAIgHQAIgIASACQAPABAPAG");
	this.shape_79.setTransform(166.4685,203.664);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#5F1806").ss(2.6).p("AgGCOQAEgKgCgUIgVjOQgCgZAHgKQAOgTAqAN");
	this.shape_80.setTransform(172.2748,195.79);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#5F1806").ss(2.6).p("AgJCBQABhZgMhdQgFgjAGgRQAGgNANgHQAMgGALAG");
	this.shape_81.setTransform(178.5663,184.531);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#5F1806").ss(2.6).p("AgFCIQgKhlgEhcQgBgeAGgOQAFgLAJgGQAKgHALAC");
	this.shape_82.setTransform(183.6929,173.9421);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#5F1806").ss(2.6).p("ABCh4QAMgEALAMQAEAGAGASQAHAagDAOQgEASgZAVQhSBLhlA4");
	this.shape_83.setTransform(193.2224,166.8265);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#5F1806").ss(2.6).p("Aglg0QArggAZgvQACgDADAAQAFgBACgBQAKgGAKADQAKACAEAKQARAmgaA2QgWAwguAwQgbAfg8A0");
	this.shape_84.setTransform(197.6214,151.1572);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#5F1806").ss(2.6).p("ABGBCQgFiHgqhNQgIgVgGgNQgLgZgIgDQgLgEgRAaQgDAEgTAjQgMAVAEAjQAEAvAjBnQAfBfAAA3");
	this.shape_85.setTransform(188.5842,153.2168);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#5F1806").ss(2.6).p("AgGhcQANAtAAAvQAAAxgOAt");
	this.shape_86.setTransform(41.0327,466.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#5F1806").ss(2.6).p("AAdhTQgXAVgMAlQgJAZgHApQgEAeAEAN");
	this.shape_87.setTransform(33.2158,465.45);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#5F1806").ss(2.6).p("AglCUQA2g6ANhTQANhSgjhI");
	this.shape_88.setTransform(44.6529,471.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#5F1806").ss(2.6).p("AgFjPQg3AtgNBIQgOBNAsBSQAfA7BGBIQAagogIg0QgIg0glgf");
	this.shape_89.setTransform(32.9342,475.6027);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#5F1806").ss(2.6).p("AgvgtQgMAIgIANQgIANAAAOQAAAFAEAUQACAIACADQAFAIASADQAtAHAugJQATgDAGgKQADgEABgHQADgbgTgWQgQgRgjgHQgjgHgVALg");
	this.shape_90.setTransform(38.9455,451.538);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#5F1806").ss(2.6).p("AggAoQAogFAKgUQAHgNgFgRQgEgMgLgT");
	this.shape_91.setTransform(42.2199,442.5117);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#5F1806").ss(2.6).p("AAmA8IgdgPQgTgKgHgJQgKgMgDggQgDghARgG");
	this.shape_92.setTransform(33.9838,440.0997);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#5F1806").ss(2.6).p("AgeBMQAlgYANgsQANgqgRgp");
	this.shape_93.setTransform(40.486,438.075);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#5F1806").ss(2.6).p("AAnBlQgEgNgNgPQgRgRgGgIQgYgcgJgjQgIglAJgjQAFgQAJAD");
	this.shape_94.setTransform(35.2436,432.8186);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#5F1806").ss(2.6).p("AgsBnQAcgVATgfQAUggAMgvQANg0gVgW");
	this.shape_95.setTransform(40.1197,426.325);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#5F1806").ss(2.6).p("AArBVQgGgHgZgaQgSgUgKgOQgggrAIgpQABgJAGgFQAHgHAGAD");
	this.shape_96.setTransform(36.22,422.1026);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#5F1806").ss(2.6).p("AgrBiQAigYAVglQAVglAFgpQACgTgEgNQgFgSgPgG");
	this.shape_97.setTransform(40.2532,414.025);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#5F1806").ss(2.6).p("AAuBdQgKgMgMgRQgYgjgNgWQgUgfgJgdQgFgQADgKQADgHAGgDQAGgEAGAD");
	this.shape_98.setTransform(35.5069,410.3357);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#5F1806").ss(2.6).p("AgjBjQAegtAMgZQAUgnAGgkQAFgjgTgM");
	this.shape_99.setTransform(39.492,403.9134);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#5F1806").ss(2.6).p("AAnBoQgHgMgUgdQgRgagJgQQgdgyAGgrQACgOAGgIQAJgLALAD");
	this.shape_100.setTransform(34.8743,397.7769);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#5F1806").ss(2.6).p("Ag1BjIAxgyQANgOAGgHQAhgnACg1QABgVgLgJ");
	this.shape_101.setTransform(39.4615,391.4337);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#5F1806").ss(2.6).p("AAhBbQgVglgSgmQgWgpgDgbQgBgQAEgIQAGgNAMgB");
	this.shape_102.setTransform(35.9007,387.325);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#5F1806").ss(2.6).p("Ag0BmIASgVQAlgsAQgaQAagoAFgmQABgLgDgIQgEgJgIgC");
	this.shape_103.setTransform(41.2216,380.2089);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#5F1806").ss(2.6).p("AAjBcIgqhLQgXgmgCgWQgDgSAIgLQAEgHAHgDQAHgEAIAC");
	this.shape_104.setTransform(36.4077,375.796);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#5F1806").ss(2.6).p("Ag4BUQAKgZAjgdQASgOAJgIQAPgMAJgMQAMgPAEgSQAEgSgHgQ");
	this.shape_105.setTransform(41.5977,369.75);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#5F1806").ss(2.6).p("AAjBIQgbgcgMgRQgTgbgGgaQgEgSAGgMQAEgHAIgDQAIgDAHAD");
	this.shape_106.setTransform(37.6294,365.1608);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#5F1806").ss(2.6).p("AhFBgQAtgcAxg8QATgVAJgQQAOgWADgUQACgNgFgHQgEgEgFABQgGAAgCAE");
	this.shape_107.setTransform(44.5286,359.2972);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#5F1806").ss(2.6).p("AAnBmIgegnQgUgcgHgPQgSgjABgoQABgRAGgKQAJgOAOAAQACAAAIAD");
	this.shape_108.setTransform(39.3925,353.3931);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#5F1806").ss(2.6).p("AhSBeQBShFBBhNQALgMABgIQACgGgCgGQgDgHgFgC");
	this.shape_109.setTransform(46.9077,348.625);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#5F1806").ss(2.6).p("AAoBiQgPgjgVgbQgUgagEgGQgJgOgIgfQgFgXAEgLQAEgIAIgEQAJgFAHAF");
	this.shape_110.setTransform(41.6111,342.0261);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#5F1806").ss(2.6).p("AApBgQgeglgVghQgRgagGgQQgIgbAJgVQAFgLAKgIQALgHALAA");
	this.shape_111.setTransform(43.8986,331.5407);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#5F1806").ss(2.6).p("AhQBbQA5gfA4gtQAagSALgSQARgagKgZQgHgPgPgD");
	this.shape_112.setTransform(49.9005,336.625);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#5F1806").ss(2.6).p("AhTBYQAXgcA3gpQA3gpAWgZQALgNABgIQABgHgDgFQgEgHgGAA");
	this.shape_113.setTransform(52.0861,327.65);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#5F1806").ss(2.6).p("AArBZQgngpgYgoQgOgWgDgPQgFgYALgQQAGgJAKgEQALgEAIAE");
	this.shape_114.setTransform(46.6713,321.3452);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#5F1806").ss(2.6).p("AheBaQAigeAlgZQAjgWASgMQAfgTASgTQANgNADgLQABgIgDgHQgEgHgHgC");
	this.shape_115.setTransform(55.3875,317.5409);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#5F1806").ss(2.6).p("AAoBfQgmgwgcg+QgMgbABgSQABgMAIgKQAIgKALgBQAHgBANAE");
	this.shape_116.setTransform(48.9585,311.59);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#5F1806").ss(2.6).p("AA0BaQg9gwgehIQgJgUACgPQABgKAHgHQAHgHAIAAQAEAAAJACQAIACAEgB");
	this.shape_117.setTransform(52.9076,301.575);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#5F1806").ss(2.6).p("AhoBaQBlguBThIQALgJAEgIQAFgKgEgLQgEgMgJgFQgFgDABgCQAAgCACAC");
	this.shape_118.setTransform(59.5214,307.2179);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#5F1806").ss(2.6).p("AAtBVQgTgPgkggQgRgOgGgLQgMgSABgsQAAgKACgFQACgKALgGQAKgGAKADQAHABAAAAQADABACgC");
	this.shape_119.setTransform(56.7962,291.8382);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#5F1806").ss(2.6).p("AhoBQIBRgoQAsgXASgNQAUgNAQgQQAcgdgHgY");
	this.shape_120.setTransform(62.558,297.4584);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#5F1806").ss(2.6).p("AhoBPQA6gXA/geQArgVAVgRQASgQAFgPQACgKgDgKQgDgKgIgF");
	this.shape_121.setTransform(66.3568,288.15);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#5F1806").ss(2.6).p("AhfBIQA3gdA7gUQAYgIAJgEQASgIALgKQANgNACgTQACgTgMgM");
	this.shape_122.setTransform(70.7216,278.1275);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#5F1806").ss(2.6).p("AAyBbIhChGQgPgPgGgKQgIgNgBgRQAAgQAIgNQAJgOAPgGQAPgGAPAG");
	this.shape_123.setTransform(60.223,282.0469);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#5F1806").ss(2.6).p("AAmBdIgog5QgUgcgGgOQgLgaAHgXQAEgMAKgJQAKgJALgBIAHAH");
	this.shape_124.setTransform(64.0195,272.6877);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#5F1806").ss(2.6).p("AAtBWQglghgbglQgMgPgEgKQgCgFgCgLQgEgcAMgPQAIgMAPgDQANgEANAHQAIAFABgG");
	this.shape_125.setTransform(68.8784,263.6888);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#5F1806").ss(2.6).p("AhnBOQAVgNAhgLQATgHAkgMQBHgbAVgqQAHgLgCgJQgCgNgLgBQgFAAgDgBQgBgBgBgCQAAgDACAA");
	this.shape_126.setTransform(74.4141,269.1759);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#5F1806").ss(2.6).p("AheBeQAOgNAXgKQAHgDAigNQAggMAbgNQAVgKAKgLQAJgJAFgRQADgKACgUQAFghgPgJ");
	this.shape_127.setTransform(78.4019,258.1383);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#5F1806").ss(2.6).p("AAZBZQgfg4gNhAQgGgXAGgPQAEgKAJgFQAIgFAJAD");
	this.shape_128.setTransform(73.0285,255.0471);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#5F1806").ss(2.6).p("AhMAzQA7gWAZgRQAugdAOgp");
	this.shape_129.setTransform(80.6648,253.2074);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#5F1806").ss(2.6).p("AgHhAQgDABgEgEQgNANADAZQACANAMAXQARAjAVAf");
	this.shape_130.setTransform(76.9701,247.4109);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#5F1806").ss(2.6).p("Ag9gVQAWAaAjAJQAjAJAfgO");
	this.shape_131.setTransform(99.125,248.4353);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#5F1806").ss(2.6).p("AgFhZQAKgUALgHQAHgFAJgBQAKAAAGAFQALAHABAXQAIBcgiBVQgNAjgVgDQgKgBgLgMQgdgdgJgpIALgG");
	this.shape_132.setTransform(106.1405,237.3561);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#5F1806").ss(2.6).p("AhUAgQgfAWAIATQAEAMATAFQAXAGAZgGQAYgGAVgOQAhgWAhgyQAagnAHgeQAKgngxAhQhNA2hMA3g");
	this.shape_133.setTransform(95.5277,237.3563);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#5F1806").ss(2.6).p("AhOhOQgQALgGAVQgHAUAHAVQAKAiApAZQAjAVAoADQApAEAmgP");
	this.shape_134.setTransform(50.3,221.934);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#5F1806").ss(2.6).p("AhjhgQgOAXgCAcQgCAcALAYQALAaAYAWQAtAoA8ACQAVABAggFIAogF");
	this.shape_135.setTransform(30.6752,204.9275);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#5F1806").ss(2.6).p("AgZBSQATAEAQgLQARgMAHgTQANgfgQgsQgGgUgLgNQgNgRgRgBQgLgCgHAGQgEAEgBAFQAAAFADAE");
	this.shape_136.setTransform(19.8254,187.2531);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#5F1806").ss(2.6).p("AgmiTQggAGgXAxQgUArgDApQgFAuATAkQAOAeAdAUQAcATAgAEQAhAEAggOQAggNAUga");
	this.shape_137.setTransform(18.631,181.986);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#5F1806").ss(2.6).p("Ag3BMQAXAMAcgIQAagHAQgVQAQgVACgcQABgagLgYQgOgdgXgG");
	this.shape_138.setTransform(9.1337,153.8692);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#5F1806").ss(2.6).p("AgOisQgdAOgWAbQgVAZgLAgQgWA8APBGQAGAcALATQASAdAuAWQAjARAhACQAnADAbgT");
	this.shape_139.setTransform(11.183,149.7899);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#5F1806").ss(2.6).p("ABsBjQgdgQgJgEQgPgHgmgOQghgMgSgJQgcgPgRgVQgUgWgCgbQgBgTAJgOQAEgHAIgEQAIgEAIAA");
	this.shape_140.setTransform(34.7523,180.597);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#5F1806").ss(2.6).p("AAuAzQglgFgTgPQgMgJgHgOQgHgOADgOQACgPAOgJQAPgKANAG");
	this.shape_141.setTransform(32.5646,191.5742);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#5F1806").ss(2.6).p("ABaA9Qg8gOg2gTQgggMgMgKQgXgTADgXQAAgFADgEQADgFALgDQBSgSBPAb");
	this.shape_142.setTransform(42.2827,203.09);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#5F1806").ss(2.6).p("AAOAiQgTAHgVgCQgWgCgTgKQgHgEgCgFQgBgFAFgJQAPgZAOgIQAMgGAbgBIBegD");
	this.shape_143.setTransform(50.0883,213.8725);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#5F1806").ss(2.6).p("AAgA4Qg2ABgvgYQgPgHgDgHQgEgIADgKQADgIAIgGQAJgHAZgGICPgd");
	this.shape_144.setTransform(58.6012,219.815);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#5F1806").ss(2.6).p("AAqA2QgsAFgugJQgOgCgGgFQgKgGgBgNQgCgMAFgLQAIgPAagPQA2gdA+AEQAHABAAADQAAACgDAA");
	this.shape_145.setTransform(67.9233,228.629);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#5F1806").ss(2.6).p("AA3hBQhQASg6A6QgOAOgBALQAAAKAGAIQAHAHAKADQALAEAbgDQArgHAWgFQAJgBAcgFQAYgFAKgH");
	this.shape_146.setTransform(80.6732,233.6192);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#5F1806").ss(2.6).p("Ag3gYQgCgFAHgIQAJgJAEgDQAHgHASgHQAMgFAJAAQAXADAMAkQANAmgBBJ");
	this.shape_147.setTransform(90.5575,225.0442);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#5F1806").ss(2.6).p("Ag9hkQAAgKALgEQAKgFAKAEQAOAGAMAYQAvBcATB6");
	this.shape_148.setTransform(82.325,224.6919);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#5F1806").ss(2.6).p("AAoB5QgEgNgBghQgDhNgRhJQgGgbgJgKQgIgHgKgBQgMgBgGAHQgDACABAEQAAAEADAB");
	this.shape_149.setTransform(73.6358,219.0733);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#5F1806").ss(2.6).p("AAmB4QAKhYgKhSQgDgcgJgNQgMgQgUgBQgWgBgNAPQABAGAFgB");
	this.shape_150.setTransform(64.318,212.2063);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#5F1806").ss(2.6).p("AASCFIAEhJQAGhjgGgxQgCgTgIgHQgMgMghAN");
	this.shape_151.setTransform(56.9538,203.6885);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#5F1806").ss(2.6).p("AAHCOQgEgKACgUIAVjOQACgZgGgKQgPgTgpAN");
	this.shape_152.setTransform(50.2496,195.79);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#5F1806").ss(2.6).p("AAKCHQgBheAMhYQAFgjgHgRQgFgNgNgHQgNgGgLAG");
	this.shape_153.setTransform(43.9542,183.9037);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#5F1806").ss(2.6).p("AABCCQAKhcAEhlQABgegGgOQgFgLgIgGQgLgHgKAC");
	this.shape_154.setTransform(39.322,174.5171);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#5F1806").ss(2.6).p("AhBh4QgMgEgLAMQgFAIgEAQQgHAaACAOQAFARAYAWQBSBLBlA4");
	this.shape_155.setTransform(29.2908,166.8355);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#5F1806").ss(2.6).p("AAmg0QgrgggagvQgBgDgEAAQgEgBgDgBQgKgGgKADQgKACgEAKQgPAmAYA2QAXAvAtAxQAbAeA9A1");
	this.shape_156.setTransform(24.905,151.1549);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#5F1806").ss(2.6).p("AhFBCQAGiIAohMQAJgVAGgNQAKgZAJgDQALgEARAaQAJAOANAZQALAUgDAkQgEAugjBoQgfBfAAA3");
	this.shape_157.setTransform(33.9571,153.2168);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#5F1806").ss(2.6).p("AARjNQg4AKgzA5QgpAsgTA2QgUA5AMA1QAMAzApAlQAoAmA0AIQAyAIAygXQAygYAbgs");
	this.shape_158.setTransform(21.2846,116.7379);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#5F1806").ss(2.6).p("AAtivQglgJgXAAQgjAAgUASQgNAOgKAaQghBVALBIQAGApAWAjQAWAkAhAVQAiAVAqAAQArAAAggY");
	this.shape_159.setTransform(31.5764,111.025);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#5F1806").ss(2.6).p("ABZi+QgngQgtAKQgrAKghAdQg9A2gPBhQgKBAARAvQAJAcATAWQATAXAZALQAlARA4gHQArgGAhgTQAlgWANgj");
	this.shape_160.setTransform(46.5014,106.487);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#5F1806").ss(2.6).p("AhvgzQgJAIAMASQAhAsAaAPQAYANAiADQAnAFAYgJQAQgFAMgLQAMgMAEgP");
	this.shape_161.setTransform(65.8366,115.5279);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#5F1806").ss(2.6).p("ACIiPQg2gGg8AdQgsAWg2AuQg7AyAAAqQAAAZARAbQAOAWATAOQAVAQAXABQAYABAVgPQAVgOALgXQALgYgHgS");
	this.shape_162.setTransform(60.2,96.2017);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#5F1806").ss(2.6).p("AiRBhQgDAiAZAdQAZAcAkAGQA+AMBGgtQAhgUARgWQAWgdADgoQAEgmgNgkQgKgggWgkQgOgWgegoQgOgSgggOQgigOgTAH");
	this.shape_163.setTransform(200.9172,117.5985);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#5F1806").ss(2.6).p("AgZifQATgLAWAFQAWAEASAQQAaAYAPA0QAJAgAFAlQAEAegDASQgEAlgYAfQgYAfgjAMQgiANgmgIQgmgIgbga");
	this.shape_164.setTransform(190.1231,110.9505);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#5F1806").ss(2.6).p("Agvi2QATgKAaAFQARAEAbANQAbANAOAJQAWAPAMARQAaAiABBHQABBvg1AzQgXAVggAKQgfAKgggEQg+gHg0gwQgDgDABgCQAAgCACAA");
	this.shape_165.setTransform(173.9474,106.4609);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#5F1806").ss(2.6).p("AiHCAQADAVAOARQAOASAVAHQAjALA1gVQA7gYAfglQAjgoAFg6QAEg4gagwQgZgvgxgeQgugdg3gFQgNgCgKAFQgMAFAAAK");
	this.shape_166.setTransform(159.2582,101.1347);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#5F1806").ss(2.6).p("AAxg8QAOAIAGARQAGAQgDARQgHAdggAVQgNAKgNACQgUAEgWgNQgSgLgQgVQgEgDACgDQABgBACAA");
	this.shape_167.setTransform(157.292,103.2471);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#5F1806").ss(2.6).p("AjHiUQAdgqBOgSQBJgRBAAOQBKAQAoAyQAqAzACBQQACA2gVBUQgHAdgIANQgRAbgqANQg4AThHgKQg0gHhNgaQgegKgLgKQgJgIgEgLQgEgLADgL");
	this.shape_168.setTransform(130.6696,96.3291);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#5F1806").ss(2.6).p("AglgMQgIgVALgXQAKgXAVgLQAlgUA0AQQAdAKANAPQAOAQAAAaQAAAWgLAVQgSAmgmAYQglAYgqAAQgqgBgmgYQglgYgSgnQgEgKAGgD");
	this.shape_169.setTransform(126.6786,98.2521);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#5F1806").ss(2.6).p("Ai6BBQgJgIgGgKQgQgXgDgeQgDgdAJgdQASgzA0gpQAwglA+gOQA9gNA8AOQAwALAeAaQAxApAHBOQAEAygRBUQgFAbgFAOQgHAWgLAPQgYAhgzAMQgkAJg5gCQgtgCgcgFQgpgHgcgRQghgUgQgjQgQghAJgegAhNhFQAcgRAggFQAggFAgAIQAdAGAMASQAOAVgIAhQgPA8g/AiQg7AghBgNQgygKgcgcQABgEABgE");
	this.shape_170.setTransform(89.8611,97.1368);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#5F1806").ss(2.6).p("AMRBuQiOhWh0gtQighAiogQQmngroxD2");
	this.shape_171.setTransform(109.4484,76.1208);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#5F1806").ss(2.6).p("AqaBgQBHg8BkgqQBYgnBogVQBagTBogFQBYgEBsAFQC0AICAAhQCjAsBsBa");
	this.shape_172.setTransform(109.65,24.7412);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#5F1806").ss(2.6).p("AszHPQBAiAASgrQAphgAPhUQAKg0AHhpIAOjmQBCgwB3gvQDwhgEPAAQEQAADEBcQBhAuAsAuQAKCDAaCfQA0FABNCS");
	this.shape_173.setTransform(108.9928,46.7349);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#CA2C2B").s().p("ArKK4QgHgBgFgGQgGAEgJABQg4AFgsgjQgGABgFgCQgVgLgPgWQgQgXADgXQgMgcgHgdIgBgJQgKgDgHgKIgEgGQgEABgXgPQgWgOgEgEQgagfgFgsQgHgwAUgtQAKgYAmg5QgvgKgTgTQgegMgOgYQgPgZADgeIgEgXQgTgLAGgUQAIgYAJgTQgKgQAOgQIAMgPIARgdQAGgLALgDQAMgLAHgEIAMgPQADgEAFgBQgSgPgOgkQgahGAThKQAUhNA7grQAKgHAWgLQAWgKAKgIIAXgVQAOgMAPAAQAFAAAGABIAMgZQAUAHAXgGQALAQAUgEQAUgEABgVQAZgNAUgPQArgCA0gNIAWALQAHAEAHAAQAIgBAEgGQAQgVAWgLIAzgQIAygGQAegEATgGQAVgHAcgMIAugWIACAAQAjgFASgEIgHASQAmgMAuALQAaAGAUAQQAYgBAWASQAIgIAGgEQAFADAEgEIAIgHIADgBQATgDATADQAEgEAHgEQAngUArgBQAOgGAYgBIAkgBQAZgCASADQAVAEASAMQAVANAVAVQAWAXAOAYQAVgYAyAAQAfABAdAMQAUAKAgAWIAVAQQAjgNA4AfQATACAXAQQANAIAXATIAKAJIAJAGIAFgDQAAgLAJgFQAagNAmAdQASANAFAMIAHAFQAWgHAWAPQAEgFAGAAQAigBAfAnQAMARAFAQQAFAUgLAOIABACQAoAeAFBNQAFBMglAiQALADAJAGQA9AoAKBaQAIBQggBHQgFALgKADQgKADgKgEIgLATQgJARgSACIgOASQATAdAIAiQAJAHAEALQASA2gXA/QgYBEg3ARQgQAFgPgEIABAKQANAdgVAwQgQAkgeAOQgsAsgngNQgSAEgXABQglABgLgQIgPgDQgIgCAAgIQgJgDgCgJQgCgJAJgHIAJgHQAGgEAIAEQAmgLATgKQAJgFAbgTIAHghQgKgOAFgRQAGgSATgCQALgQANgFIAHgbQgGgBgEgEIgNgLQgQgKAHgQQAHgRAQACIADgBQACgGADgCQAXgWAJgPQANgWgGgXIgLgVQgGgMACgLQACgPAOgPQANgOAPgGQALgEAIAAQAEgeAKgeQgHgQgJgLIgEgHQgHAAgDgFQgEgFAEgGIADgFIABgEQAHgOALgSIAEgNQAFgNAGgIIASg4IABgDIgJgWQgGgOABgLQABgQAIgJIgBgBQgOAPgRAKQgKAHgOgCIgEAOQgFgKgKAAIgYACQgBgJgJgCQgJgBgFAHQgHgBgEAGQgIADgEAFQgEAHADAIIAIAaQAFAPAGAKQgEgDgCgEIgGgNIgGgOIAAgHIgCgEQgMgbgHgXQgHgFgEgHIgGgOQgHgKgFgQIgHgcIgBgLQgSAKgUgJIgIAAQgSABgOgQQgcADgagCQgJAAgIgFQgUACgQgCQgXgDgWgPQgPgKgWgXIgDgDQglATgggEQglgEgUgjIgDgHQh6Avisg8QgvgQgXgcQg+BMhUAIQhBAHhBgbQgTgCgRgEIgJgCQgbAkgkAMQgTAGgcgEQgcgFgXgNQgwA+hLAQQgQAEgRABQgHALgQAHQgMAFgOgBQgRAAgGgKIgBgDQgIAOgNAMQgFAEgIADIgYAZIgJAFIgCAGQgHgIgJAFQgKAFgLANIgcAGQgDgEgFABQgGABgBAEQgHABgCAHQgCAGADAGQAFALASASQADAEAIgBIAFAIQACAEAGAAQAGAAACgEIADgEQAHAJgJAJQgKAHgIgIIg2g+QgGgHACgGQgLgCgIADIgOAJQgKAGgJgDQgEAjADAVIAFARIAAAAIAAABQAKAcAkAvQAEAFgCAGQgBAGgGAEQADAHgCAGIgNAxIgDAHIAIALQAJAMgDAMQAEAHAAAHQAIgBAGADQAOAGAHANIAVAEQAGABAFAFQAFAGgCAGQgCAGgGACQgEAKgKgFIgMgCQgCAJgEAHIAAAoIABAEIAAABQAIAEAHAJIANARIAVANQAOAIACAQQADARgMALQgJAHgKAEIACAFQAEAHADANQADAPACAEIADAIQAHgDAFAGQAGAKAHAEQAMABANAIQADACAAAEQAAAEgDACQgFADgFAAIgCAVIABAQIgBAHIADAIIAGAGQAIgLAKAHIBEArIAJADQAYgFALATQAFAJgHAJQgHAJgKgCIgNgEQgKAJgXAPQgFAEgFAAIgEgBgAGkn0QgUgTgNgHIAAABIAhAZIAAAAg");
	this.shape_174.setTransform(110.6751,144.9188);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#CA2C2B").s().p("AhOA8IgEgCQgQgDgGgHQgEgFAAgFQABgGAFgDIADgCIAAAAQAGgBAGACQAFgFAFAAQAQABARgJIAfgPIAQgHIAFgKIAFgKQADgGAEgEQAKgKASgIQATgJAOgCQAmgEgOAoQgLAegUAWQgEAEgIABQgXAbgqAJQgSAEgQAAQgWAAgTgHg");
	this.shape_175.setTransform(172.3107,222.4124);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#CA2C2B").s().p("AAHBEQgfgIgagaQgGgBgEgEQgNgOgKgRQgMgGgDgMQgEgMAJgOIAAAAIAAgBQgDgSAQgEQARgFAHARIAEAMIABgDQACgLAMgBQAMgCAGAKQAEAGAFAXQADARAPAHQALAGAYAHQAYAHALAGQAFADADAGIAEAAQALABgBAHQgBALgOAAQgCAEgFACQgYAKgWAAQgNAAgMgDg");
	this.shape_176.setTransform(50.3751,222.7784);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#CA2C2B").s().p("AglAkQgTgNALgVQACgEAXgdQAEgEAFAAQAEgKAHgEQAJgGALADQAFACAEAEQAYAGgDAcQgDATgOAXQgNAXgRABIgBAAQgOAAgZgSg");
	this.shape_177.setTransform(161.4322,279.4227);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#CA2C2B").s().p("AgVA1QgQgEgPgMQgIgHAHgKQgFgMAKgJQAqgmAlgNQAKgEAKAJQAJAKgEAKIgSAoQgNAYgPALQgJAGgLAAIgLgBg");
	this.shape_178.setTransform(168.9762,297.7458);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#CA2C2B").s().p("AgFAsQgEABgEgCQgQgIgFgOQgBgDABgDQABgEACgCIACgBQADgDAFABQACgNADgGQANgiARABIADABQAIgBAFADQAGAFgBAIIgCAMQAAAOgHATQgFAPgGAKQgEAHgIAAQgDAAgFgDg");
	this.shape_179.setTransform(175.4321,318.381);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#CA2C2B").s().p("AgCMaQgIg0gOgmIgRglIgUgiQgLgUgCgPQgDgVAHgdIAAgFQgCggAHgfQAHglASgUQgFgFgDgGQgIgIgCgKQgCgKAGgKIACgEQAIgNAOgCIADgDQAMgOAJgFIgFgCQgPgEgIgOQgIgOAHgOIACgEIAAgBIAAAAIgBgHQgCgMALgHIAAgNQAAgOgDgbQgBgJAFgIQAFgHAJgDQgCgLgHgSIgJgZQgHggACgfQABgPAMgHQgKgjgDgSQgEgeAIgZQADgNAKgEIgJhIQgCgSARgHIgSg3QgJggAAgZQAAgLAJgHIgTgnQgKgSgCgPQgDgQAGgSQADgIAHgGQgPgSgGgcQgDgLADgJQACgMAIgCIgGgPQgMgZgNgOIgLgLQgGgGgCgHQgGgOAFgNQAGgPAQgBIAFABQgkg3gUgbQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAIgCgCQgEgFACgHQACgFAEgDIAFgCQAFgBADACIABABIAGAFQADACAAAEQAYAKAPAUQAJgkApg7QAIgMAOAAQANAAAHAMQAJAPgCAQQgCALgKAUQgMAagGAeQAEgFAEgGQAGgGAKACQALACABAJQADAWgEAcIgKAyIgCAcQAGABAEACQAOAJgDAaQgDAYgMAuQAKgEAJAAQAGAAAFAFQAFAFAAAGQgFAlgMAwIAGAHQADAAACACQAJAFACAIQACAGgDAOIgBACQACALgCALQgGAZgCAFQAMAFAGAIQAJAOgDAVQgBANgGAYIgKArIAIAGIACADQAQARgNApQgJAfgUAeQAGgBAEACQADAAACABQAUAOgHAsQgEAegSAKIAAAHQAFgJAKABQALACAAALQgEA8gNAzQAMgGAMAIQAMAKgEAOQgEAKgIALIgOAUQgPATgHAGQgIAHgMAGIALAEQANAFAIAJQAPABAKANQALANgGAPQgGAOgFATIACACQAoA5AKAoQArA+hEB3IgBACQgDAMgJAGIgCAEIAAABQgQAggVASIgBAAIgEASQgFARgUABIgCAAQgSAAgCgSgAAfAQIADAKIAFgSQgEAGgEACg");
	this.shape_180.setTransform(182.8215,413.5266);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#CA2C2B").s().p("AggAnQgPgSAEgcQgEgPAFgOQAFgLAKgBQAFgFAGADQAHADAAAGQAfAUAUAWQAFAFgBAHQAAAGgEAGQgRATgTAGQgGACgGAAQgPAAgLgNg");
	this.shape_181.setTransform(58.1884,289.3885);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#CA2C2B").s().p("AADA4QgUgHgJgUQgIgUgCgPQgKgDgCgLQgCgNAGgKQAFgKANgDQAWgGARAYQAaAiADAGQAPAcgQARQgLALgOAAQgGAAgHgCg");
	this.shape_182.setTransform(50.218,308.3385);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#CA2C2B").s().p("AgTAwQgLgFgHgPQgFgNAAgOQAAgMAKgLIABgIQACgLANgIQAFgDAGACQAGABACAFQAFAMAAADIAAAQQACgBADABQAMABAMAOQAIAJgCAMQgDALgMAEQgHACgHAFQgFADgGAAQgEAEgFAAQgGAAgHgEg");
	this.shape_183.setTransform(45.0798,328.8065);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#CA2C2B").s().p("AgtL0IgEgVQgLgUgJgVQgNgDgHgMQgagrgIgwIgFgJQgLgKAAgPIABgKQgHgnAQgqQAWg4AhggQgMgpAgghQAGgGAJgBQgCgLgGgMQgKAAgLgJQgKgJgFgLQgHgRAFgRQgEgJADgKQAEgKAJgGQgJgsADgXQAAgYANgZQgMg2ANgZQAAgGACgHQADgSAKgMIAAgBQgUgbgNgiQgFgMAGgKQAFgJALgEIgMg5QgEgYACgPQAEgSAOgRQAFgGAGgBIgKg7QgEgUAQgLIgIgUQgFgMgBgJQgEgbANgaQADgGAHgEQAHgEAHAAIABABIAAgDQgEgEgDgGQgIgVADgWQgDgZALgOQADgFAHgFQgNglAAgeQAAglATgSQAKgKANADQAOAEAEAOIACAIIBZhCQADgDADgBQADgEAEgBQAFgBADAEQADACgCAFQAJAJgJALIgfAoQgUAXgRAMIAAAAIAIAAQAEgHAHgFQAHgFAIABQAEABABAEQADAJgHANQAFAJgCAIQgQAugkAmQAOACAGANQAHAPgLAMQgPATgOAYQAIADAEAHQAFAHgCAIIgKAdQAAAFgDAEIgBACQgMAggSAeIAAAEQAHgKAMAEQAMAFgEAMIgHAYQABAQgDAMIgKAnQgDAJgGAKQAHgBAHAFQAGAEABAHQAEAVgDAIQgCAIgMALQgDAVgGAQQAIgBAGAEQAHAFgBAJIAAAAQANAHgDAPIgHAmQgFAYgIANIAAADQAIgBAGAFQAGAFABAHQACA6gYAqIgHAeQAFADACAGQAGAcgGA0IgBAGQAHgCAHAEQAHAEACAHQAFASgQAQIgFAHQgHAIgKgGQgFgBgEgCIAAAOIADABQAHgHAJABQAKAAAGAJQAXAiAAArQABAJgHAHQAdAlgBA8QAAA7gdAqQgGAVgHAOQgOAhgVALQgDACgCgCQACAmgIA1QgBAOgQADg");
	this.shape_184.setTransform(39.881,417.715);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#A3250C").s().p("AqxRBQgGABgGgEQgIgFgGgKIgJgSIgSgrQgDgJAGgKQAFgJAKgDQAMgDAMAEQgLgrAAghQgBgRALgJQALgJAPABIgKglQgDgVAGgPQAEgMANgHQANgIAMAEIgMgnQgGgWgBgPQgCgTAPgIQAPgIAQAFQgNgTgFgMQgNghAUgTQAUgTATAGIgFg8QAAgLAJgJQAJgKALACQAFAAAHACQgIgUgBgOQgDgSAFgRQAFgPAPgOQAQgOARgCIAAgCQgLgbAIgVQALgeAmgOQgIgfABgMQACgVAagLQAQgGAOADIAFg/QACgOAJgJQAJgJAMAAQAHgjAWgbQgUACgQgBQgOAAgHgMQgHgMAHgMQAFgIAGgFQgVgHgMgMIgPAAIgGgBIgmAMQgQAFgKgMQgKgLACgPQAEgVAVgLQgBgKAEgJQgagFgSgIQgfAQgcgNQgbgNgGghQgTgDgKgGQgHgEgGgHQgTgEgDgTQgDgUAHgOIAAgBIADgEIAAgBIAGgGQgOgLgTgWQgHANgQADQgRAEgKgMQgcgggVg0QgLgagVhEQgZgxgmhFQgOgZASgTQgJgIgDgJQhNjNAEjhQABgeAdgEQAdgDAJAbQAJAZAIAdQAOAFAFAOIAHgEIAlgOQALgEAJAGIACgCIAEgbQACgRAUgBQATgCAIAOQAiA/AEAMQAPApgMApQgLApgZBBIgCADQAEARADAXIACAAQALABAGADQAGADAGAJQAHALgHALQAIAfACAoQAJgEAKADQAJADAHANQADAEACAIIAFASQACAJgCAHIACAZIAMASQAOgKAPABQANACAJARQAKAWAAAKIgCAIQAAAQgBAPQAMAGAKAIQAPgBALAMQAJAKAEAUQABAFADAbIAGAjQAIgJALgCQANgDAMAGQALAFAGAMQAKAUAEAlIAAAEIAFADIAMgVQAGgIAKgCQALgCAGAIQATAVAJAmQAIgGAIACQAqAKATAvQAIATAEAPQAGgLAKgNQAVgZAZgEQAegEAMAgQAGAPABAXIAAAmIAEBCQA5goApgOIASgZQAMgQARgCQARgEANAOIAPAQQAWgLAWALQATAKAVASIAlAhQAAgNAFgdIAHhAQAKgrAagCQAPgBATALQATALAMAQQAHgJAJgEIAAAAIAHgRQAJgZAKgLQALgMAXgJIAHgCIABgCQAHgkAegUQAJgFAMABQANACAHAIIABABQAGgZAMgOQAOgRAXgHQALgDALAFIABgCIAAgBQACgTAEgOQAFgYACgVQACgZAagEQAYgDAHAUIAFgCQAKgFgDgJIgHgXQgCgQAEgOIgFgKQgEgKAIgKQAIgKALAAQALAAAJAGQALgCALABQAHguAGgZQADgMAKgHQAKgGAMABQABgsAJgbQANgjAbABIAEgDQgahigKhGQgOhnBWgrQAIgEAIAFQAHAFgCAJIgDAJIAAAAIgBADQAPgBAMAIQAOAIAEAOIACAGQAGgJAGgDQAEgbAWgQQAUgOAZABQAZAAAPAPQARARgDAcIgIBRQgFAxgIAhQAPAegaAYIgmAkQAXgJATAWQATAXgMAYQgMAXgaAnQgdArgKATQgiA7ghBHQgDAHgGAFIgBAFIACABQgFAZgXAaQgHAJgjAgIgVATQAGAKAAAKIABAAQABAOgIANQgFAIgOAOIgEALIgIAVQgFALgJAGQgJAIgMgCIgBABIAGAMQAHAYgJAZQgJAYgSARQgRAPgVAHQgXAHgUgIIgXgHQgIAQgWAKQggAPgXgFQgkALgegDQAJAKAFAKQAFALgFAKQgGAKgNABQgSACgRgHIgJAEIACAHIAAgBQADgEAGAAQAFAAADAEQAFAJABAMIABAWIABATQAHAAAIALIAKAEIADACQAHAEAEAIQAFALAAASIgCAeIgBAFIAFAEQAPgDAOALQAMgBADAMQALApgJAWQAIgBAGACQAgAFABAhQAAARgMAnQAKgDALAIQAJgCAJACQAKACAGAHQANAOgEAbIgNAqIgDAJQAKgDAIAAQAkgCgBAhQgBAYgTAiQAEAJACAKQAKgMAKgCQAMgBAFAIIAHgBQABAAAAAAQABABABAAQAAAAAAABQABAAAAAAQAHAQgHAWQgDANgKAYQgEAOgDAGQATgKAPAJQALgDAJAHQAJAHgDANIgQA/IgHARQAMgFAKAEQAMAEAGANQADAIgBAKIgFASQgHAUgBATQANgDAJAJIACACQAJAAAGAFQAHAGgBAJQgEAqgOAhIgEAGIADAMQgVAagKAcQgLABgJgFQgIAIgOgDQgkgLgWgdQgNgQgFgRQgGgVAKgOQALgSAUAFIACAAQgMgVgNgOQgQgKgNgPIAAgBQgIgKgBgMQgCgLAGgKIgHgGQgUgUgSghQgGgMAGgMQAHgLAOgBIADAAQgWgWgfgUQgRgKgBgTQAAgTAOgNQgYgSgRgiQgLgWAKgYQgPgIgSgHQgUgJAAgbQAAgcAUgJIACAAQgOgKgUgLQgRgKgBgSQgBgRANgNIgvgrQgMgKAAgPQAAgOAKgMIgSgVQgIgNgEgLQgHgYABgiIAGg7QgLAFgbAEQgPACgKgEQgSARgcAHQgbAHgYgHQgKgEgIgIQgOAGgNgFQgPgFgFgQIgKgjIgGAGIgHAGQgUAngWAIQgTAIgQgFQgZAQgZgGQgcgGgNgfQgDgKgBgJQgbAMgdAHQgCAPgLA5QgFAXgPAZQgJAPgTAdQAQAFADATQACATgPALQgUANgYAaQANATgIAWQgJAYgcAOQgFADgIAAQgEAFgBAAQARgCAFARQAFARgKAMIglAvQAEAHAAAJQgBAIgGAGIgnAhQgWAUgSALIgKATIAhgUQANgIAKALQAJAKgGANQgGANgQATQgRAUgSAOQALADAFAKQAFAKgIALQgIALgOAMIgYAUQgMAMACAHQACAFAJAOQAIARgQAYQgJANgVAYQAGAAABAFQAKAVgCAcQgDAggTAKQgIADgGgFQgPAQgPABIgDANQgFAXgWABQgRANgYAKIgCAAIgDAAgAokLmIgBAOIATgOQgJAAgGgCgADiAhQgHAHgIACIAAACQALgHAOADIAIgDQACgIADgHIgJgFg");
	this.shape_185.setTransform(112.0602,235.4677);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#3F7745").s().p("AAhA3QgKgHgMgKQgigQgbgtIgFgGQgEgFAAgGIgCgFQgDgHAHgDQAHgDAFAEIARAOQAGgGAKACQAHABAJAHIARAKQAVALAJAKQALAMABARQABARgMAMQgEADgFABIgCAAQgFAAgDgCg");
	this.shape_186.setTransform(171.4339,67.0649);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#3F7745").s().p("AhZAyQgGABgGgBQgWgCgKgSQgJgTAMgRQARgZAngOQAfgKAlgCQBwgFAeAsQACADgBAEQgBAEgDACQgIAEgGABQgCANgOADQgiAGgyANIhTAWQgEACgEAAQgKAAgHgJg");
	this.shape_187.setTransform(95.4616,26.0815);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#3F7745").s().p("AhdBHQgLgZAOgbQALgVAZgSQAUgOAsgUQAsgTAUgPIACgBIAEgHQAGgIAIAFQAIAFgFAIIgFAIQABAGgFADIgDADIgHAOQAIAMgIALQgwBHgdAcQggAggYAAQgXAAgPgfg");
	this.shape_188.setTransform(90.4737,44.4853);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FBC85B").s().p("AAKCYQgUgFgUgQQgSgQgNgWQgQgLAAgZIAAgBIgBgJQgCgGABgFIABgIQAAgLADgJIAAAAIABgKIAKguIAAglQACgWAKgLQACgEAMgGQAFgHAIgDQAIgDAJACIANgDIAGgFQAQgNAMARQAMARgSAJIgEAIQgDANgGAKIgBAAQAWAFABATIAHACQAGADAFAGQAKABAGAFQAGAHgBALQgEAcgRAOQgOALgTgFQA+BUgmAhIgEAEQgMALgPAAIgKgBg");
	this.shape_189.setTransform(49.2998,54.8027);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FBC85B").s().p("AgWBGQgIACgKgBQgIgBgHgFQgUABgMgFQgagMgEgbQgDgZARgYQALgPASgLQARgKATgEQAigUAuARQATAIAKAMQAHAAACAGIADAHIABABQAhAJABArQABAsgjAEQgFABgFgEQgUAPgbACIgJAAQgUAAgUgIg");
	this.shape_190.setTransform(140.3056,40.7011);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#CA2C2B").s().p("AggB0QgQgFgIgPQgIgOACgRQABgJAEgJIAJgRQAMgTgDgSQgEgUgVgJQgKgEgDgKQgCgJAHgHQgIgPAIgMQAVgdAjAGQAcAEAcAaQAeAbAHAmQAGAlgVAiQgEAHgIADQgMAegVAQQgQAMgRAAQgIAAgIgCg");
	this.shape_191.setTransform(61.7783,51.4224);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#CA2C2B").s().p("ABmDJQgKgFgEgKQgKgCgHgKQgIgKgCgNQgkAdgzAJQgcAEgigKQgmgNgDgYQgMgaATgTIAAgBQgXAJgNgBQggAQgVgJQgIABgGgDIgNgMQgIgIACgLQABgLAKgGIgBABIABgCIAJgGQAHgLAPgMIAZgRIABgBQgZAKgUgCQghARgRgRQgNgLgBgQQgKgEgEgLQgFgQAOgWQARgYARgHIAIgDQAWgTAhgKQgIgIAAgMQgBgMAFgLQAGgLAKgDQAFgRAOgGQAPgIAQAEQASAEAEAPQAMADALAIQATgCAVgEQAYgQAWAAQAHgIANABQAMABAJAHQALAHAHAOIACAHIAEAFIAAABQAWAEAUALQAQAJAJAJQAMgLAUAGQASAGALAOQAWAaAMAVQAHAAAHADQA8AXABA5QAAA1gtAtQgMANgPgIQgYAOgegKQgIAXgLAUIAAACQgGASgNAFQgLAKgMAAQgGAAgHgDgAhcAhQAwAyBLAAQAkgHAbgIIAPgFIAPgEIADgDIAKgJIABgGIAGgVQACgUAFgVQgIgGgHgOIgMgWQgDgFgHgHQgDABgEgCIhUgmQgXAJgSAEIgkAQQgJAGgWARQgGATgWAVQgBANADATIAAACQAGAEADAIQACADAAAEIADgBQADAAACADg");
	this.shape_192.setTransform(138.1497,41.8424);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#CA2C2B").s().p("AqACaQgPgCgGgRQgHgSAMgNIAAAAIAFgFQgBgiAGgRQAKgXAegOIAhgMQAPgNAZgMIAqgTQBEgfA+gQQA6gPAvgGQAFgKAKgCQB1gdCVAHQgBgDACgDQACgDADABIBIAGQBwgDBKAbQBkAPB5A4QABgDADgCQADgCAEAAQAkAIAXAPQAPAKAFAFQALALgBAKQAWAEALAPQAOARADAgQABAQgDAmIABAAQADABACAEQABADgCADQgCAFgFAAIgBABQgFAEgEgBIgDgBQgFABgFgEIg/guIgOgIQgGADgFgCIgigOIgbgMQgrAIg5gTQgogNg4geIhGgFIgBABQgaABgrgFQiVgBhMgDQgnAJhRAIQhVAJghAEQhCAKgyAOQhyA2hHAvQgCAHgIACIgFABQgEAAgFgCg");
	this.shape_193.setTransform(109.018,15.9114);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#A3250C").s().p("AraDKQgegCgagTQgcgVgJgoQgKgpAVgdQBEhbB3gLQApgEArgKQBbgvBtgaQBpgYBrgBQAWgQA0gKQAhgHAbgDQAkgDAqAHQAaAEAzAOIAFgCQBRgKBeAXQBKATBcAqQBCAeBjA4IAdAPQAWAKANAKIgBgBQAAgGAFgBQAGgCADADQALAJAKARIAQAdQAJAQAEALIADAIQAWAhAEAdQADAZgZACQgYABgIgUIAAgBQABAPgOAHQgNAIgNgHQgUgLgWgWIglgnQgjgjgkgbQgRAXgbgKQgsgRhVgpQhVgogtgRQg/gYhFgLQAbAsgXAqQgFAKgNAGQgNAFgLgEQgYgHgiAFQgUADgoALQgYASgYAIQgXAHghACIhJAHQghAFg0APIhUAYIhgAZQg6AQgnAFQgdAEgiAHQgUAFgYADIgWADQgZAOgbAAIgDAAgAAegUIAOgFIgLgHQgBAGgCAGg");
	this.shape_194.setTransform(110.3628,84.3224);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#070F21").s().p("Ar/FYQgPgLAKgPQAuhOAXhWQAFgSAUAAQAUAAAEASQAFAWAXAPQAVANAZABQAaABAQgOQASgPgDgcQgBgIAHgHQAHgGAIgBIAtgBQBFhLgBgWIgDgKQgHgQAOgJIgCgVQgMgFgJgNQgHgLgEgNQgTgHgPgVIgHgMQgggBghAFQgMACgJgGQgzAEgvATQgPAGgMgNQgMgMAEgPQAQguBCgbQAIgaArgPQAhgLAkgKQgBgVASgIQBBgeBVACQAYgQAqgKQAegIAMgBQAagEAQAHQAdAAAkAFIAEgCQAXgLAjAIQAqAJAQgBQAkgEAhAGIACgBQAggEANABQAFgEAIgDQAZgHAeAGQAeAGAWAPQAMgCAOAAQARABAJADQAOAEAIAKIABACQAJACAJAFQBcADBfAqQAbAMAYAPQAoAbADAUQAHADAEAFQAFACAEAFIAHAMIAEANQADAOgJAJIABAcIAAAEQANAnAPBSIAKAvQAFAcgDATIAGAWQAIAOADATIAAAAIAAAFQABAEgCAEIALAfQAJAXAHAaQACAHgDAFQAQANAMANQALAMgKAMQgJANgOgIIgcgRIgcgSQgLAHgMgHIgigWQgdgLgWgMIgFgCQghgOgYgUQgNAHgLgKIgEgDQgHAGgIgEIgVgLIgfgPQgTAIgSgDQgSgEgVgQIgRgOQgkAEhPgXIgCAFQgDAGgGAEQgHAEgGgBQgXgBg7gLQg0gJgeABIglADQgWABgNgBIgZAEIgZACIhIAIQgTASgkACQgpAAgUABQggADgwANQg2AQgaAGIgpAMQhpA9hgARQgLAJgIAFQgMAHgMgHIgQAPQgHAHgHAAQgHAAgHgGgAI4BiQgHACgJAAIgSAhIAdAlQAdAeBBAkQADgIAJAAIAKgOQgBgHAFgFIgNgoQgFAAgEgDQgigVgkgLQgLgEgEgJQgDgIADgKgAFZBgQAHAEgDAIIgBABQADAEgBAFQAhAKAagGQAegIAGgeQADgNALgEQALgDAKAFIABAAQANgKATgFIAigKIAFgDIAcgvQADgFAFgBIAAgVQgGgfgBgfIgFgGIgWgcIgEgDIgOgIQgJgEgEgFQgJgIgCgSIhKgjIgJgDQgRgEgOgLQgLgHgPgQIgQgNQgrgEgygUIgCACQgaANgSADIgBACQgCADgFAAQgEABgDgDIgCgDIgMgCIgogLQgEACgEAAIgQADQgHAHgRAKIgWAOIgBAFIAAABIAHABQAQACAAATQAAATgQACQgIABgOAEIgGAIIghAhQgVATgRAJIgJAPIgCASIACgBQACAAADABQAFABAEAFIAUAaQAFAFAAAJQAMACAFADQAOAHgDAPQgDAOgMAEIAGAUQACAJgBAFIAGAHIACAAQAkAMAlgKQAJgCAGAHQAGAGgBAJIgDAMQAQAMAJAEIANAGQAIAEAEADQAFAEAFAIIAKADIBRgNIAUgFQALgDAIAAIAIgDIAGgCQAEAAAEADgAhriTIgiARQgWALgNAHIgBABIhVAZIgVAbQgKAQgEAOQgFAXAEAbQARAVAlgCQAfgBAcgOQAbgWAngzIADgDIAghdIgSAIIACgBQADgEgDgEQgCgDgDAAIgCABgAjakhQgTAVgkAOQgNAYAIAXQAHAWAWAOQAQgJAZgFIAsgEIACAAIAsgRQAMgEAfgOQAcgKAPAIQANgHARgEQgngrg8gNQgXgEgYAAQghAAglAIg");
	this.shape_195.setTransform(109.7164,49.9371);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat_08, new cjs.Rectangle(-4.1,-1.2,229.79999999999998,500.4), null);


(lib.hat_07 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AgZBQQAVgOAPgVQAbglgIgkQgEgTgQgOQgPgOgTABQgGAAgBgCQAAgCACAA");
	this.shape.setTransform(8.336,152.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6).p("AgFBhQApgsAHg8QACgQgDgNQgFgQgXgXQgQgQgLgEQgIgCgJACQgJADgEAH");
	this.shape_1.setTransform(9.8364,169.8056);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6).p("ABCBQQABhEgYg+QgFgLgFgDQgLgGgQAMQgsAhgbAx");
	this.shape_2.setTransform(16.577,179.8996);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6).p("ABAgIIgVgaQgWgdgTgJQgMgGgPACQgPADgIALQgEAHgDANQgNA8AUA7");
	this.shape_3.setTransform(29.3774,179.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6).p("Ag1A6QgGAAgDgHQgCgFAAgIQADg0AcgaQARgPAWgCQAYgBAOAQQADAEAHALQAGAJAFAE");
	this.shape_4.setTransform(55.2458,162.5971);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.6).p("Ag8BQQgKgeALgmQAHgZAUgoQANgdASADQAEABAKAJIA5A1");
	this.shape_5.setTransform(42.7461,170.8857);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6).p("AA6AvQgIgugbgVQgQgNgTgCQgWgCgPAMQgEAEgDgCQgBgBACgB");
	this.shape_6.setTransform(264.0429,162.2634);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F1806").ss(2.6).p("AgNAQQANgVAZgE");
	this.shape_7.setTransform(327.1613,123.4765);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6).p("Ag/A5QgFgcAggoQAQgWAOgKQASgOATACQAKABAKAGQAJAGAFAK");
	this.shape_8.setTransform(322.8412,131.1927);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5F1806").ss(2.6).p("AgzBgQgLgcABgfQACgfAOgaQAOgbAYgTQAYgTAegGQAJgCASgC");
	this.shape_9.setTransform(309.6993,146.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6).p("AgxA3QgHgWAGgXQAFgXAQgQQAPgQAXgGQAXgGAWAG");
	this.shape_10.setTransform(298.574,160.506);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5F1806").ss(2.6).p("AguArQAEgmAKgOQAIgMANgGQANgGAMAGQAIADALAMIARAS");
	this.shape_11.setTransform(288.1064,166.0986);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(2.6).p("Ag+ALQATgWANgHQAOgIAQAAQASABAOAJQAOAIAIAPQAHAPgBAR");
	this.shape_12.setTransform(276.0769,166.9746);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5F1806").ss(2.6).p("AgzgoQgGAUAIAUQAJAVARALQASALAVgCQAXgCAPgO");
	this.shape_13.setTransform(222.063,22.9404);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5F1806").ss(2.6).p("Aggg3QgRATACAcQACAbAUAQQAMAJAVAGQAaAHAbgB");
	this.shape_14.setTransform(234.788,34.5882);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#5F1806").ss(2.6).p("Aglg4QgJAEgEALQgEAJABALQACAPAPAVQAUAcATAJQAOAGAOgCQAPgDAIgL");
	this.shape_15.setTransform(253.5046,52.6618);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5F1806").ss(2.6).p("AgggpQgLAVAMAbQAKAYAUAJQAJAEAMgDQAMgDAGgJ");
	this.shape_16.setTransform(267.2744,68.235);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#5F1806").ss(2.6).p("AgagqQgJADgEALQgEAKABALQACAOAJALQAIAMAMAHQAMAGAOAAQAPAAANgG");
	this.shape_17.setTransform(279.4546,82.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#5F1806").ss(2.6).p("AgHgsQgVAGgIAXQgIAWAMASQALASAXACQAZABAOgQ");
	this.shape_18.setTransform(290.74,98.2064);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#5F1806").ss(2.6).p("AgWg1QgQAKgHASQgHATAFASQAFASAQAMQARAMASAAQAUAAAbgQ");
	this.shape_19.setTransform(304.0539,116.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#5F1806").ss(2.6).p("AghgpQgQAGgFASQgGARAKAOQAOASAlACQAcABABAAQAQACALAG");
	this.shape_20.setTransform(183.6524,4.716);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#5F1806").ss(2.6).p("Ag2AQQgNgMACgTQACgUAPgMQAOgLAUAAQASgBAQAJQAeAPAMAhQAMAigSAb");
	this.shape_21.setTransform(197.3495,8.2736);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#5F1806").ss(2.6).p("AgqAdQgBADgEAAQgEgBgCgDQgNgQAEgUQADgVARgLQAPgKAUACQASACARALQAYAPAIAVQALAbgQAV");
	this.shape_22.setTransform(211.2487,12.8576);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#5F1806").ss(2.6).p("AgjAPQAAAHAJAHQAHAEAPADIAuAHQAGABADgBQAGgDABgIQAEgXgngUIgxgaQgMgHgIACQgHACgDAKQgDAIACAJQAGASAQAKgAgiAJQgBADAAAD");
	this.shape_23.setTransform(231.0116,23.8438);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#5F1806").ss(2.6).p("AgnAbQAbATAdALQAVAIAOgFQAJgEAGgKQAFgJgBgLQgBgRgQgTQgegmgugLQgPgEgOAFQgPAEgDANQgCAIAGANQAJAYARAXgAgoAaQAAAAABAB");
	this.shape_24.setTransform(247.5966,39.091);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#5F1806").ss(2.6).p("AAAA+QgJAEgJgPQgTggAAgZQgBgQAIgOQAHgPAOgGQATgKAlAN");
	this.shape_25.setTransform(314.2473,116.8497);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#5F1806").ss(2.6).p("AgfAxQASAOAWACQAYACATgLQANgHADgLQADgNgNgTQgagjgUgRQgigegbARQgbARALAnQAKAhAYATg");
	this.shape_26.setTransform(303.5159,103.0579);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#5F1806").ss(2.6).p("AgtASQALAUATAMQASANAWACQAPACAIgGQAHgEACgJQADgIgDgJQgCgLgOgSQgYgegJgKQgZgbgSAAQgXABAAAhQAAAcANAVg");
	this.shape_27.setTransform(290.3625,85.7745);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#5F1806").ss(2.6).p("AADAxQANAJAOABQAQABAHgLQADgGAAgLQABgWgMgTQgLgTgSgLQgbgRgSgCQgagDAAAbQAAAVAVAaQARAWAUAOg");
	this.shape_28.setTransform(276.026,69.6142);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#5F1806").ss(2.6).p("Ag+gqQgMAfAYAlQALASAQALQASANASABQAUABARgNQARgOAAgUQgBgjg2gmQg4gngSAvg");
	this.shape_29.setTransform(265.6757,55.3482);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#5F1806").ss(2.6).p("AirlgQgwCiAHCtQAICrA9CeQAJAXANAGQAKAEAQgEQAfgGAigTQAVgLAmgbIC+iB");
	this.shape_30.setTransform(32.6709,138.5005);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#5F1806").ss(2.6).p("ApaoxQBFAnBOASQAVAFArAJQAkAJAYAOQAXANAkAhQCzCkB+CDQCfCjB4CaQAmAwAnA7QAVAgAmA6QBCBgBdBM");
	this.shape_31.setTransform(253.4646,67.4558);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#5F1806").ss(2.6).p("AAXAYQgYgHgHgLQgGgHADgLQADgKAIgB");
	this.shape_32.setTransform(251.9344,143.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#5F1806").ss(2.6).p("AAVhEQgVAMgOAWQgNAXAAAYQABAaAOAQQAIAIAKAEQAMADAKgD");
	this.shape_33.setTransform(252.15,152.5625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#5F1806").ss(2.6).p("AgcgsQgLAEgEAOQgEAMADANQAHAbAeANQAcANAagN");
	this.shape_34.setTransform(258.8433,163.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#5F1806").ss(2.6).p("AgugrQgLAMgBATQgBARAKAOQAJAOARAHQAQAGAQgDQARgDAOgMQANgLAGgQ");
	this.shape_35.setTransform(268.4205,170.9113);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#5F1806").ss(2.6).p("AhBgtQgGAcATAYQATAaAdACQAbACAXgWQAXgVgBgc");
	this.shape_36.setTransform(281.2404,175.2524);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#5F1806").ss(2.6).p("AgzBFQAIALANAGQANAGANgBQAdgBAQgYQAOgVgFgeQgFgZgRgaQgMgRgFgJQgKgQgCgN");
	this.shape_37.setTransform(340.2006,141.5519);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#5F1806").ss(2.6).p("AhHAfQASATAbAFQAaAFAXgKQAXgLAOgXQAOgXgCgZQgCgQAAgI");
	this.shape_38.setTransform(327.0939,154.0307);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#5F1806").ss(2.6).p("AhYAHQATAeAnAHQAmAHAcgVQAQgMAMgTQAJgNALgZIAGgN");
	this.shape_39.setTransform(311.3413,162.6173);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#5F1806").ss(2.6).p("Ag3gbQAEASAPAMQAOANASACQARACARgJQASgJAIgP");
	this.shape_40.setTransform(334.375,133.4719);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#5F1806").ss(2.6).p("AhIA9QAWAUAigDQAggDAXgWQAVgVAJggQAHgdgFggQgBgGACgFQACgGAFAB");
	this.shape_41.setTransform(320.975,137.4676);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#5F1806").ss(2.6).p("AhGBYQAgADAegPQAegPARgbQASgaACghQACghgPgd");
	this.shape_42.setTransform(308.275,152.2929);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#5F1806").ss(2.6).p("AhCAiQAXAWAcAEQAfAGAXgUQAVgTAGguQADgYgJgLIAHgO");
	this.shape_43.setTransform(294.186,168.3633);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#5F1806").ss(2.6).p("AlfBqQATAmAjAbQAkAaAqAIQAuAIA8gPQA5gOAqgbQAvgfAvg+QAbgkAxhLQBjiSBsgO");
	this.shape_44.setTransform(290.2166,139.5141);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#5F1806").ss(2.6).p("AASBoQgegSgHgtQgDgbAJgxQAGgeAGgMQAMgXAVgD");
	this.shape_45.setTransform(2.0885,146.125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#5F1806").ss(2.6).p("AAoBVQgUAAgRgOQgQgNgIgUQgNgjAPguQAKgfASgK");
	this.shape_46.setTransform(2.9587,165.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#5F1806").ss(2.6).p("AAPhLQgpASgOAmQgHATADAVQADAVANAPQAOAPAVAEQAWADARgL");
	this.shape_47.setTransform(5.555,181.0922);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#5F1806").ss(2.6).p("Agsg3QgWAaATAwQAOAhAWAEQARADARgRQAJgKALgXIAPge");
	this.shape_48.setTransform(15.9138,193.4481);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#5F1806").ss(2.6).p("Ag8AFQAHAQANAMQAOAMARAEQAQAEARgGQASgHAJgPQAHgLACgQQADgggQgQ");
	this.shape_49.setTransform(28.3064,189.5762);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#5F1806").ss(2.6).p("Ag+AXQAPAXAdAGQAcAGAXgPQAXgPAFgcQAGgegPgW");
	this.shape_50.setTransform(38.9337,181.1857);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#5F1806").ss(2.6).p("Ag+AMQAeAfAoAKQAOAEAJgDQASgDAJgWQAGgPgCgWQgCgbgJgc");
	this.shape_51.setTransform(49.85,173.4058);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#5F1806").ss(2.6).p("AhEAKIAgAXQATAOALADQASAFASgLQASgKAIgTQANgdgKgu");
	this.shape_52.setTransform(61.9729,165.8924);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#5F1806").ss(2.6).p("AaGFeQiPiBi8jdQk5lwAAAAQi3jMiqiBQjQifjWhDQhOgZg1AFQgdADgoAOQgtARgVAHQgsAOg5AKQgkAGhDAIQimADh6ACQjsAFgqAgQipCBjIDUQjQDdhpCpQhwC1gyDCQg1DRAaDEQAHA2ATBXQAIAmAIATQAMAfAVAQQAWARAfABQAdABAdgLQAYgKAagUQAOgKAfgbQCdiGCthm");
	this.shape_53.setTransform(171.3895,95.0123);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#5F1806").ss(2.6).p("AgRDKQA6gyBIhtQBbiKBAgtQAngbAhgEQAVgCATAGQAUAHAMAPQATAWgDAjQgDAegSAdQgfAyg5AnQgvAfhEAbQhRAagoANQg9AVgnAYgAlOkAQg1BDgfCZQgcCEA1BFQAZAgAuAVQAhAPA2AMQAkAIAWADQAgADAagFQAkgGAngaQAIgFAIgGQAFgEAGgF");
	this.shape_54.setTransform(297.959,145.4313);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#5F1806").ss(2.6).p("Am4IKQCskmDIkmQBjiTBIhRQBoh2Bwg/QBEgnA0gB");
	this.shape_55.setTransform(66.3124,65.6847);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#5F1806").ss(2.6).p("AjGEfQBMigBkiMQBniVB6h1");
	this.shape_56.setTransform(80.1047,49.0125);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#5F1806").ss(2.6).p("ADUHbQhlg1g6gUQgbgJhUgYQhHgTgogSQg6gZgngoQgtgugKg2QgIgsAQgtQAPgsAhghQAggeAsgSQAqgRAvgDQANgBAlAAQAgAAASgCQA9gIAaglQATgagBgqQAAgZgLgwQgJgsABgeQADgpAXgYQAPgPAkgOQBRggBbgR");
	this.shape_57.setTransform(51.2956,114.352);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#5F1806").ss(2.6).p("AlVlZQDPCNCpCrQC1C2B4DI");
	this.shape_58.setTransform(232.8295,49.9515);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#5F1806").ss(2.6).p("AiTIOIDLkhQA2hMAYgnQAphCAYg4QA9iUgih7QgLgpgUgYQgTgYgugbQixhmjJge");
	this.shape_59.setTransform(245.9618,117.0306);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#5F1806").ss(2.6).p("AA4JQQlUgNkdBqQiOA0hKA4QgNhQABhgQABhIAKhoQAxn5CXnlQAbhYAfgzQAshHA+gXQAkgOBCgCQAngCD7AFQCvADBwgSQA4gIAOgBQAogDAdAJQAlALAiAgQAYAXAfArQA6BQAdA+QAdA8ATBRQALAyAQBiQA7FoAVC0QAkEugDDzQhegziMg2QkXhrjkgIg");
	this.shape_60.setTransform(151.9504,92.2202);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F3DFC6").s().p("Ah5H2QgPgEAFgOIAMgkIABgEQgHgGgDgJQgKgjAAgvIAEhUQACgqgHg4IgOhiIgHhCQgOgigIg0QgEgfgEg2QgCgoAAg4QgPhRgFgvQgYg1gGgcQgDgMAKgEQAKgEAHAJIAEAGIABAAIABgOQABgHAGgBQAHgBADAHIAGATIAQAEQADgJAHgFQAIgFAJADQBgAiAnARQAMACALAFQA4AbAwAsQAbAHAaAOQAaAOAPARQAUAYAIApQAFAbABAsQABBRgdBOQgcBLg1BAQhACFh5CvQgHAJgJADQgJACgIgEIgSAwQgFALgJAAIgGgBg");
	this.shape_61.setTransform(244.4767,114.9632);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F3DFC6").s().p("ACbHGQgfgXg2gSQg+gSgcgLIg6gYQgOgBgNgDQgpAIg1gYQgygXgSgfQgHgMAHgMIABgCIgCgCQgKgGgJgJQglglACg8QACg3AfgtQAdgqAtgYQAwgaAxADQAZgRBWAFQAbgeApACQASgOAQgUIgBgEIgHipQAAgqADgPQAGggAYgNQAKgFAIgCQADgSARgDIAYgGQAPgDAKAJIBEghQAVgLARAQQARARgMAVQgUAmgQAsIgZD6QgCANgIAIQgIAHgLABQgFBLgSCUQgTCWgFBKQAHAJAHAQQAGAQgQANQgJAGgIAAQgHAAgGgEg");
	this.shape_62.setTransform(52.356,113.7317);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F9EFE5").s().p("A3kNaQgKgFgEgLQg9iTAFiHIgBgMQgMgFAAgMQAAgsAFgvQgGhiAGhGQAGg3Abg4QATgoAog7IAdgoQBNiJBtiMIAEgFQAHgJAJABQChjcC4iKQAGgFAHABQAUgSARgNIAegWQgGgCgCgGQgCgGAFgGQAigjAwgKQAHgBAEAEQAwgQAiACQAGABACAEQAygGA/AAQBHgMBrAGQCMgLBIgDIAqgBQgEgVAkgEIAFAAQAOgJAMgEQAbgHAPALQASgGAZgBIAAgBQAUgcAggGQAbgGAnAKIBaAVQA0ANAhARQAjARA1AhQARADAXAKIAoASQA6AaBDAyQBBAxAoAxQA5AuA/A+QBMApBhBrQAqAwASAYQAhArARAmQAtA0A2BFIARATQAYATARATQAZAdAuA8QAzBCApAwQAKAGAMANIATAXQApAuAIAHIAFgCQANgBAFAKQAFAKgHAKQASAKAIAGQAEAEAAAGQAAAGgEAEQgKAJgJgJIgPgRIgDgDIgDAAQgFABgEgBQgTAHgJAGQgTAMgWAUQgEAEgEgCIgHAIIAAABQgDAcgGAFIACAJQAFARgRALQgRAKgLgOIgBAAQgVATgbAIIgIABQgZAcgLAlQgCAbAAASQAAAHgDADQgEAEgGAAIABABQAGAIgEAKQgEAKgKAAQgjgCgdAWIgCAAQgNAZgFAcQgBAHgIADQgHADgGgEQgrgSgJAgQgDAEgEgBIAAAEQgBAVgWAAQgVAAACgVQAAgEgDgGQgHgIgggFIgNAMQgEAEgFAAQgGABgEgDQgFAKgMgBQgMAAgEgMQgEgNABgNQgDgWgOgGIgWgGQgQgHAFgEIgDABQgLADgHgGQgIgFgBgKQgxgDAIhhQgGgvAQg1QAMgoAdg1QAfg6ATgZIAPgbIABg4IABhQQACgxgDgfQgFg9gTg2IgzhJQgegrgYgdQgmgthrh2IhBhFQglgpgVggIhAguQgcgUhVhDIgtgjIgNgDQgEAAgCgEQgBgEABgEIgEgDQhqhMiQgrQACAMgCAJQAZABAWAFQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQgPAJgWAIQAbgDAaAGQAFgIALgBQA0gDAvAqQAqAlAcA9QAbAgARAcQBEBqAGB/QAhBXASCBQABAJgHAFQgHAEgHgEIgCgGQgmhEgwgpIgDgEIgCAAQghgcgogPIhsgnQgjgNg1gKQg8gJgdgGQg4gMhUAKIg+AGQglADgYAFQjyAsiaA8QhWAig6ApQhJAygjBCQgEgHAFgGIABgBQgNgHAEgMIA1ilQgDgHABgHQAKgtARgjQAHgZAHgSQAThgAQg0QAYhSAjg5QATgfAkgUQgaAFgYALQg0AAg3AzQgsApgnBCIgFAEQgzAqgzA2QgmBAgQAUQgNARgaAfIgpAvQgiAqgiAxQgkBHg9BaIgjBJQgIABgDAIQglBahGCAQgFAJAIAGQAJAHAHgKIATghIgWBHQALAIAAAPIgEBsIAHgMQANgUAbAGQAbAFgDAaQgIBBgTBCQAvgyApgRQAXgJANAUQAOATgIAUIAhgaQATgOAPgHQANgGAVgEQAcgFAGgCQAEgBADADQACAEgBAEIgaAuQgOAXgWAQIgEADIAEACIAIAGQACADABAHQACAGgCAHQgBAIgGAEQgaAXgtAhIhJA2QgrAjgMAHQggAWgfAGQgYAEgOgRIgQALQgFADgGAAQgEAAgFgCgAReL1IAAAAIADAHQACgLAFgHIgEgGQgGAIAAAJgAW3FeQAFACADAFIADgBIgJgJgASLCkIADgCIADgCIgFgIgAr1qnQgaAKgcAQIAogRIAYgMg");
	this.shape_63.setTransform(171.5,86.1452);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EFF1EC").s().p("A3hNwQgRgUAAgXIgCAAQgHgDgFgGQgYAVgbATQgDACgDgDQgDgDACgDIARgjQgHgHAAgLQABgfgPgXQgNgSgcgVQgFgEABgGQACgGAHgBIAFABIAAgCQAGgjAYgwIgOgeQgIgMgOgIIgagMQgKgEABgMQABgNAKgDQgMguAXg9QgFgbAKglQAHgWARgnQAHgSALgXQAPhEAmhKQAcg2AzhNQBrihBhh1QB0iNB8hyQBQhLA1gkIAPgKQAFgOANgRIACgEIAAABIACgBIgCAAQAMgXAYgLQAXgKAbADQAYgOAfgHQAWgFAdgDQAkgJAuAGQAeAAAoAEQAKgEALADQAUAGAWgEIARgEIAmgLQAXgGARAAIAJAAQBEgKAwAKIgBACQAMAEALAHQAdgKA8gOIBIgVQAsgNAbgGQAJgDAKAEQAggaA6AMQAJgJALgDQANgDANAGQAWALA1AVQAwAUAZANQBcATBiBKIBAAuQAoAcAXAUQAgADAsAkQATAPAsAqQAeAeAYAfQARAJASAQQAfAeAIAVQArAlAlAqQAvA2AbApQAaAPAeAkQARAVAeAnIAjAoQAWAbALAUQANALAOAaQAdAfAsAzIBIBTQAHAHABAHIAaAiQAHAGAOAKIASAOIA2AwQAtArAgApIALARQAJgFAKACQAKACAGAKQAbAsgeAxQgCAigXAbQgJALgPADQgJANgKAHQgHAGgNAGQgMAJgaARQgrAcgWAKQgnASghgCIAAAAQghAMgVAGQgeAHgXgCQghAhghAWQgLAIgPAHQgSglgdAAQgbAAgUAeQgIAMgBARQgNgXgYgNQgUgMgUAAQgXgBgNAPQgHgVgPgQQgSgTgSACQgHgGgJgCQgKgEgLAEQgKACgIAIQgcghgGgjQgDgXAIgSQgFgUAHgZQgCgiAPgwIAchMQAKgcAOgbIgYABQghBCgyBMQg6BdgfAvQg3BSgzAtIgBAAIgEAmQgFAWgNAKQgEAEgEgEQgGgEgFgIQgGAAgGgDQhLgohvgrQgJADgIgDQhLgdgrgOQhEgVg3gHQgQgCgHgOIgOgEIgOACQgWgCgPgPIgzgDIgzgCQhJgFhUACQgkABhRAFQhMAFgpABQg+ANgvANQhlAahdAiQgeALg1AXQg5AZgZAJIgGALQgFAIgKABIAAAEQgBAHgIACQgIABgBgIIgFgZQgCgRgBgVQgFgQgDgTQgQABgWgQIgKAGIgBgCQgkAVgmgFQgKgRgQgJQgRgKgQAHQgMgMgJgPQgfArgCAqQgBAQgQAFQgRAFgIgPQgGgUgXAAQgFACgFgBQgFgCgCgFQgfA/gNA1QgCAJgKABQgJABgEgHIgNgVIgCABQgIAAgHgEQgHgEgEgHIgGgQIgMAQIgWAaQgOAPgGAMQgBACgDABIgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBgAYDGGQAEABACAEQACADgDAEIgEAGIAAALIAGAOQAIgLAMgFQgKgOgTgWg");
	this.shape_64.setTransform(172.8672,88.18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat_07, new cjs.Rectangle(-4.8,-1.1,351.40000000000003,201.4), null);


(lib.hat_06 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("Aq4mLQC9iMDIiCQApgaAYgNQAlgVAggKQArgNAzgDQAqgBA1AFQCcARCTA+QCTA+B5BkQAXATAtAmQAoAfAiAQQAlASBSAaQBFAbAZAsQAaAtgPBIQgJApgbBTQgJAjgEAwQgDAcgDA5QgbFZiLEVQhghRiAhVQj/ioicgPQhLgHhQAFQjVALi6BQQjGBXiBCWQgxh2guioQhclQAQj3QAAgKACgwQABglADgWQAEgiAMgQQAIgLAUgMQA7giBqgQQAYgEAUgDQBrgRAXgGQArgMAxgWQAggPA4gdIDmh4ArBmEQAEgDAFgE");
	this.shape.setTransform(184.8627,75.2056);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6).p("AnSk2QBngGB2AfQBeAYB1A0QCKA9BTBAQC0CLBkEJ");
	this.shape_1.setTransform(225.025,74.9873);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6).p("AreFoQAhiCBJhzQBIhzBmhWQB+hrCvhFQDVhTDqgEQDqgFDYBL");
	this.shape_2.setTransform(169.4962,76.9094);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6).p("AkPgiQA9AhBSAQQA+AMBYAEQB/AGB7gG");
	this.shape_3.setTransform(65.125,85.5977);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6).p("AIBExQhchOiigBQgzgBhUAJQhoAKgeACQgQABgKgEQgIgDgNgMQikibhMhRQiAiJhRh+QBRglBkAJQBbAIBaArQBJAjBTBAQAiAaBvBdQBZBJA9AoQBWA5BQAa");
	this.shape_4.setTransform(50.6815,106.8107);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.6).p("AmHB+QASgdAvggQCfhrC9gxQC+gwC/AT");
	this.shape_5.setTransform(318.4006,47.7806);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6).p("AoAEqQAohUBLhTQA5g+BehNQBThFBFgvQBUg6BQglQDChZCxAXQAzAHAVAV");
	this.shape_6.setTransform(325.45,64.5713);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F1806").ss(2.6).p("AoZGoQAbgiBHgSQBQgVBpgIQA+gFB9gDQBWjnCejDQCejEDRiF");
	this.shape_7.setTransform(322.4798,79.0872);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFF1EC").s().p("AHPEaQgwgkhBgMQg1gKhHAFIhCAHIhBAIIg6AGQgjABgWgHQgOABgQgLQgpgcgnghIgQgNQg3gwhDhJQgQgEgRgWIgZgjIhDhRQgDgEABgEQABgEADgCIgKgOQgCgDABgFQgug0gnggQgLgKAHgPQAGgPAOAAIAVADIAEgHQAWgbA1AOIAhAKIAZADQAhgGAzATIANAFQAPAEAQAHQAlAIAeANQBGAfAmA6QApAcA8ArIBlBHIA6AlQAtAhgFATIAGACIAMAIQBOAmAZAOQAIAEABAJIAdAQQAPAKAKARIARAhQAJAMgMAMQgHAIgHAAQgFAAgGgEg");
	this.shape_8.setTransform(51.2688,105.4522);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFF1EC").s().p("An6GMQgFgJAHgHIALgKQgGgJACgLQAKhKAXhDQgVgbBDhYQApg3AwguIAiggIACgCQBihgB0hKIAKgEQAFgNAJgGQB0hXCNgxQA/gWBQgGQA1gFBcACQATgBAAATQAAAUgTABIgeADQgRAFgPAIQABAMgIAHQg8A2hOBBQgJAPgQAUIgcAjIhrCKQg7BQgaApQgoBDgVBBQgHAUgGAMIgCALQgEAWgGAKQgIAPgQAHQgJADgJgCQgJgCgFgGQgRADgcgCQgyALhGgFIgTAIQgPAFgMgMIggAHQgWAEgyATQguASgaADIgCAAQgJAAgEgGg");
	this.shape_9.setTransform(321.5458,76.8621);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFF1EC").s().p("AK5IpIgBgCQgIgCgGgEQgJgFgQgMQhhg/gygiQhXg8g4gyIAAAAIgEgCQgOAKgQgIQgmgUgigOQh+ghiBgGQgGAAAAgFQgCgFADgEQgwAAgmAFQg0AGhAASQgiAJhQAbIhUAbQgyAPgmAEQgRARghATIg2AeIg/AnQgyAqgjAaQgDAPgRAEQgRAEgHgPQg4h5gPhVIgSgpQgDgJAHgIQgBgIABgJQghg+AMhMQg7hWA3h9IAGgdQACgIAIAEQAlhFA6g4QBFhDBxg2QBDghCIgyQBHgZCMg5QB7gpBjATQAZAFAWAKIAqACQA7gCA9ARICJAYQAmAHATAFQAeAIAZAMQAlASA4AnQASAMBGA7QA2AtAnASQBLAiAUAOQAsAgANA1QAEASgNAOQgOAPgRgHQgKgEgRgCIgbgFQgOgDgfgOQAUA/gNBKIgBAGQAbAjALAYQARAlgDAeQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIAMAaQAQAmgLAjIAAABQABAAAAAAQABAAAAABQABAAAAAAQABABAAABQAFAQgFAWIgLAlIgCAIQgHAYgHARQgDAHgGAKIgwB3QgFAOgNAHIAEAZIAAABIAAAAIABAJQAEAcgfADIgGABQgZAAgHgYgAsWiLQgXAdgSAhQgUAogIAjIABAIQAlhOBMheQAVggAXgaQg0AnglAug");
	this.shape_10.setTransform(184.2703,88.3122);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9EFE5").s().p("AKuLgQgDgBgDgDQgHgDgCgHIgDgOIgFgCQgWgJgNgTIgrgaQgagQgPgMQgJABgIgGIhkhFQg7gmgxgTQgJgEgngLQgegIgRgMQgMgIgfgfIgqgNQgYgGgUgBIgoAAQgaABgPgDQgdgEgLgEQg7ADg7AJIgIADQg7ALiSAlQgSAEgMgNQgrASgzAeQgcARg8ApIggAUQgHAFgHACQgnAYg5ApIhfBEQgFAEgEgEQgFgEACgFIACgFQgKgGgEgKIgZhDQgJACgJgGQgKgHgSgFIgdgLQgPgHgQgLQhIgNgZgDQg2gHgrACQgXABglAGIg9AIIg8ACQgjACgYAJQgRAFgOgMQgMgKgBgRQgMgHgIgMIgCgCQgEgEgCgFQgTACgMgOIhJhYIg7guQgQgNACgSQg4g1gogpQgGgHAAgKQhOhGgihGQgEgJACgJQACgLAJgEQAVgJAZAIIACgCQAagQANgEQAUgIAWAFQAKACANAHIAXALQAUgIAZAFQAmAIA2AaIBYArIAKAEIAUgCQAjgBAeAJIAZAMQAQAIAIABQAEABAMgDIASgEQAPgDASABIAhADQATACAkgDQAkgCASABQAXACAXAIQAkgLAhAFIgFgbQgDgQAMgKIgJhQQgIhRgCgqQgEhKAIgyQAIgqAggcQAegaAogFQAFgMAJgIQAYgXApgGQAegEAuAEQA3g/A1gUQAHgCAFACQAWgWAggMIDUiYQBFgyA4gJQAxgeAcAKQAMgDAKAAQAWAAAiAIQA7gOBWAZIAWAEIAHADIBFANQAoAJAXAPQAJAHAEAKQCJAgBlBmQAQAIASAPIAfAaIAnAmQAPgEALALQAbAZAOALIAKgFQAJgEAMAKQAYATAeAOIAEgBQAXgCATAVIAdAKQAxARAUAZQAOATAEAhQAIAXgEAZIgCAMQgBAYgHAZQB8h8CfguQAFgbAbgIQBZgbBIgPQAugLAUgCQAlgDAeAIIAKADQARgFAWgDIAAAAIAIgBQARgCAJAOIADgBQAvgNAVABQAWAAAmAIQAegCAdACQAKAAAIAGIARgDQAXgIAKAZQALAZgWALQgeAOgdAFQAAAJgHAFQgdAZgSANQgZATgZALIgKAIQgJAOgPAPIgbAaIglAqQgFAGgIgCIggArQgMAxg/AsQgKAigKAXQgMAbgXAcQgLANgiAjQgXAYgKAQIgSAoIgGAmQgDAYgGAOQgQAlglALQgHADgKAAQgQABgGgMQgoABgsAHQgLACgKgGIg4AJIhEAPQgMACgLgHQg4AegtgHQgaAOgYAKIgfBiIgNAmQgSBKgcAtQgIASgKAJIgEAEQgCAEgEAAIgBgBg");
	this.shape_11.setTransform(188.0742,73.9517);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat_06, new cjs.Rectangle(-1.8,-1.2,379.90000000000003,152.79999999999998), null);


(lib.hat_05 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("AAEBCQAEg7gJg2IgDgS");
	this.shape.setTransform(90.8093,76.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6,1).p("AgBA/IABgDIACh6");
	this.shape_1.setTransform(73.225,77.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6,1).p("ABuD6IB0gfQgUhOgMgnQgUhAgXgwQg6h9hbg+Qgzgjg7gMQg/gMg5AR");
	this.shape_2.setTransform(185.9897,39.0809);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6,1).p("AiWi6IAFAFQBdBhAwCAQAwCBgICGIBsguQAUgHAHgJQAQgRgDgpQgCgYgCgMQgViZhkh+Qhhh+iSg7");
	this.shape_3.setTransform(177.9737,49.0259);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6,1).p("AhAjEIgJG4ICSAAQgIjnhUjSIgUgu");
	this.shape_4.setTransform(165.3615,50.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.6,1).p("AgaAOIA1gb");
	this.shape_5.setTransform(107.075,24.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6,1).p("AhmhZQAUAuAfApQARAWATAVIAPARQAhAjAbgDQAMgCAKgIQAUgRABgeQABgRgIgUQgEgMgMgX");
	this.shape_6.setTransform(150.1766,22.8907);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F1806").ss(2.6,1).p("AiXAiQAegMAughIAGgEQAvgjAcgMIAGgCQA0gTApASQAUAIANAUQANAUABAUIgBALIimA9");
	this.shape_7.setTransform(147.2503,14.8122);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6,1).p("AhzhbQAaAgAiAnIA5BFQAXAbAWAKQASAIATgDQAVgEALgP");
	this.shape_8.setTransform(136.575,20.476);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5F1806").ss(2.6,1).p("AiUBNIBShSQAhgiAYgPQAXgRAZgEQAhgFAfAQQAfAQAPAd");
	this.shape_9.setTransform(132.975,10.3547);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6,1).p("AiAhHIB8BkIABAAQAnAgAXAHQATAGATgDQAUgEAMgO");
	this.shape_10.setTransform(123.625,20.2395);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5F1806").ss(2.6,1).p("AiABeIB7iRQANgSAKgIQAPgNAQgCQAVgEAWAOQAQAIAVAV");
	this.shape_11.setTransform(118.35,9.364);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(2.6,1).p("AiPg1QA2ACAuAcIAJAGQASAMAeAaIAHAFQAjAaAdACQASABAQgIQASgJAHgP");
	this.shape_12.setTransform(108.475,21.2306);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5F1806").ss(2.6,1).p("AiLBYQAsgBAkg5IAGgKQAKgQASghQATgcATgOQAcgUAmAEQAlAEAYAa");
	this.shape_13.setTransform(100.05,12.8587);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5F1806").ss(2.6,1).p("AhjBNQAKgwAcgnQAfguAogOQAYgIAYAEQAZAFARAR");
	this.shape_14.setTransform(87.3,14.844);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#5F1806").ss(2.6,1).p("AgxAgIAFgEQAygqAsgR");
	this.shape_15.setTransform(66.6,75.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5F1806").ss(2.6,1).p("AgxgXQA2APAtAg");
	this.shape_16.setTransform(96.725,74);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#5F1806").ss(2.6,1).p("ABTAfIgJgFQhLgrhRgN");
	this.shape_17.setTransform(99.675,85.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#5F1806").ss(2.6,1).p("ABVgiIgDAAQhbAcg4AeIgTAL");
	this.shape_18.setTransform(64.875,86.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#5F1806").ss(2.6,1).p("AhwgKQAHARAXAHQARAGAZgBQBRgGBIgf");
	this.shape_19.setTransform(91.475,135.865);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#5F1806").ss(2.6,1).p("ABDggQgGATgPAPQgOAPgTAIQggAOgigJIgNgG");
	this.shape_20.setTransform(112.575,75.042);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#5F1806").ss(2.6,1).p("AAvhrQgpAjgYAzQgYAxgDA2IgBAb");
	this.shape_21.setTransform(106.9,66.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#5F1806").ss(2.6,1).p("ABMgpIgBADQgQArgsAWQgqAWgwgJ");
	this.shape_22.setTransform(103.7,58.0828);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#5F1806").ss(2.6,1).p("Ag8AUIAEgEQAmgmAqAEQATABASAI");
	this.shape_23.setTransform(102.775,47.5854);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#5F1806").ss(2.6,1).p("AAYBqIADgdQAFhAgNhBQgCgMgEgJQgDgKgFgGIgCgCQgNgRgSAE");
	this.shape_24.setTransform(85.5194,31.0444);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#5F1806").ss(2.6,1).p("ABTAiQg/g0hTgNIgTgC");
	this.shape_25.setTransform(96.95,42.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#5F1806").ss(2.6,1).p("AguBEIBdiI");
	this.shape_26.setTransform(95.575,51.35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#5F1806").ss(2.6,1).p("AAihTQgKAOgJAPQgmA+gKBM");
	this.shape_27.setTransform(87,47.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#5F1806").ss(2.6,1).p("ABeA5IgCABQg/AKgzghQgvgdgUg0IgEgO");
	this.shape_28.setTransform(96.075,28.2003);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#5F1806").ss(2.6,1).p("ABYA5IACgHQAHgjgdggQgOgQgVgKQgagLgigCQgXgBgoAD");
	this.shape_29.setTransform(97.026,28.2275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#5F1806").ss(2.6,1).p("ABkBHQgTgngMgVQgUgfgXgUQgagWgggGQgjgHgaAPIgFAD");
	this.shape_30.setTransform(115.45,39.3267);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#5F1806").ss(2.6,1).p("ABqA9IgMgDQg5gRg0gfQgigUgdgZIgagZ");
	this.shape_31.setTransform(115.95,40.975);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#5F1806").ss(2.6,1).p("ABJBdQgNgkgYgnQgagrgdgeQgbgbgagK");
	this.shape_32.setTransform(116.35,47.525);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#5F1806").ss(2.6,1).p("ABXDQIgCgDQgegegagpQguhHgghYIgFgNQgNgngIgmQgLgzAAgp");
	this.shape_33.setTransform(116.675,58.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#5F1806").ss(2.6,1).p("ABdBBQgVgsgnggQglgggwgNQgUgGgUgC");
	this.shape_34.setTransform(112.45,83.975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#5F1806").ss(2.6,1).p("AAPANIgOgLQgHgFgIgJ");
	this.shape_35.setTransform(108.6,89.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#5F1806").ss(2.6,1).p("AAXA3QgmgrgHg7IAAgG");
	this.shape_36.setTransform(104.8,82.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#5F1806").ss(2.6,1).p("ABYBhIgEgTQgShJg7gyQgpglg1gO");
	this.shape_37.setTransform(93.85,66.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#5F1806").ss(2.6,1).p("ABMgHQgkAQgoAAQgogBgjgQ");
	this.shape_38.setTransform(93.425,103.625);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#5F1806").ss(2.6,1).p("AB1hDIgJgBQhHgIg9AkQg3AhgcA5IgIAQIgBAF");
	this.shape_39.setTransform(97.375,96.1281);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#5F1806").ss(2.6,1).p("ABLB/QAJg7gRg6QgQg6glguQgOgQgNgJQgSgKgQAFIgCABQgUAHgHAZQgDAQAFAcIAFAVQARA5AtA0IACAC");
	this.shape_40.setTransform(130.7724,59.4302);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#5F1806").ss(2.6,1).p("ABGBoQABgzgTgxQgTgvgjgkQgRgTgPgEQgKgCgKADQgLADgEAI");
	this.shape_41.setTransform(145.0525,69.3682);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#5F1806").ss(2.6,1).p("AAZi1QgNAUgJATQgbA3gFA/IAAAZQABBEAcA9QAMAcATAY");
	this.shape_42.setTransform(124.8999,93);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#5F1806").ss(2.6,1).p("AgTBUIAEgIQAmhLgDhU");
	this.shape_43.setTransform(132.8356,99.75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#5F1806").ss(2.6,1).p("ABhBZQgCg9gYg5QgYg5grgtQgMgNgQgOQgZgUgTACQgGABgFADQgOAHgCAUQgDAPAFAUIACAFQAVBXA1BMQAsBEBBAz");
	this.shape_44.setTransform(136.8583,85.3909);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#5F1806").ss(2.6,1).p("AA5APQALgbAAgdQAAgggNgTQgIgLgMgHQgMgHgNACQgLACgJAIQgQAOgLAeQgTA4gIAtQgLBGAbAGQAKABANgGQAbgMAXgbQAVgZALggg");
	this.shape_45.setTransform(153.1658,90.3178);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#5F1806").ss(2.6,1).p("AgIB9QAhg5gDhFQgEhGgng1");
	this.shape_46.setTransform(162.3663,104.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#5F1806").ss(2.6,1).p("ABRgcQgRASgUALQgvAdg4gBIgUgC");
	this.shape_47.setTransform(136.15,112.9286);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#5F1806").ss(2.6,1).p("AiMBAIACgJIAAAAQABgFACgGQAMglAbgaQANgMAPgKQAdgRAigEQAhgEAfALIgLgH");
	this.shape_48.setTransform(140.9236,109.3198);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#5F1806").ss(2.6,1).p("ABHAtIgIgCQgTgGgPgGQg7gagogx");
	this.shape_49.setTransform(120.55,111.175);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#5F1806").ss(2.6,1).p("ABbCFIgFgcQgKgngSglQgyhnhig6");
	this.shape_50.setTransform(118.775,103.25);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#5F1806").ss(2.6,1).p("AgeCJIgFgUQgKg8APg9QAThNAzg3");
	this.shape_51.setTransform(104.1588,103.325);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#5F1806").ss(2.6,1).p("AgECAQAUgoAEgtQAFgsgLgsQgLgtgYgk");
	this.shape_52.setTransform(111.2531,102.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#5F1806").ss(2.6,1).p("ABZAYQgtANgugNQg2gPgggm");
	this.shape_53.setTransform(122.9,128.8939);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#5F1806").ss(2.6,1).p("AA9guQAkAnAJAZQAHAUgEAUQgEAVgPAMQgVARgdgGQgWgEgZgTQgWgQgQgSQgcgegQgmQgRgngDgp");
	this.shape_54.setTransform(149.7727,146.605);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#5F1806").ss(2.6,1).p("AgkgoQAigWAagFQAUgEARAFQAQAFAKAJQAUASgBAeQgCAcgTATQgSASgdAGQgaAFgbgHQgggJgjgbIgXgU");
	this.shape_55.setTransform(151.9552,134.7026);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#5F1806").ss(2.6,1).p("Ag9AEQAXAhAfAhQAbAcAPAKQALAHAGACQAJAFAJAAQAKABAJgFQAJgFADgJQADgJgGgSQgKgagXgnQgfg2gfgjQgngsgdAAQgHAAgEACIgHADQgbAQAOAqQAJAbAaAjg");
	this.shape_56.setTransform(154.5722,115.8333);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#5F1806").ss(2.6,1).p("AA1AtQgcg0gzgaQgRgIgJgD");
	this.shape_57.setTransform(132.8,119.225);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#5F1806").ss(2.6,1).p("AgXBpQAYggAMgnQAWhFgWhF");
	this.shape_58.setTransform(146.55,127.025);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#5F1806").ss(2.6,1).p("AAbB7IgGgIQgqgzgFhIQgDg5AYgxIAEgI");
	this.shape_59.setTransform(141.133,124.525);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#5F1806").ss(2.6,1).p("ABLBtIgEAAQgRAAgOgEQgogKgcgkQgJgLgHgNQgZgqgEhBIgCgXIAAgN");
	this.shape_60.setTransform(134.85,125.225);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#5F1806").ss(2.6,1).p("AByBgQgygFgugZQgsgYgignQglgqgQg4");
	this.shape_61.setTransform(133.675,141.725);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#5F1806").ss(2.6,1).p("ACEBHQgpAPgtgFQgtgEgkgWQgtgagbgtQgSgggGgi");
	this.shape_62.setTransform(114.1,135.3533);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#5F1806").ss(2.6,1).p("AB3g3IAEAEIABADIADAGQACAHgBAKQgCAKgFAJQgMARgeAOQgpATgsAHQg9AKg8gM");
	this.shape_63.setTransform(114.6667,120.4523);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#5F1806").ss(2.6,1).p("AiWAtIAGgOQAVgqA1gVIAYgHQAqgKA7AIIAkAGIACAAIgOgF");
	this.shape_64.setTransform(117.9443,118.4171);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#5F1806").ss(2.6,1).p("ABLAHQAJANAJATQAKASAAAQQAAAIgEAGQgCAGgHAGQgMAJgQgBQgTAAgYgPQgOgIgLgLQgfgagVgmQgUgigGgNQgUgoACgRQABgGAEgCQAEgEAIABQATACAlAUQAdAQAOAMQAkAbAZAkg");
	this.shape_65.setTransform(93.1111,114.2937);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#5F1806").ss(2.6,1).p("AgmhCIAEACQAaANAUApQAQAfAJAoIACAG");
	this.shape_66.setTransform(86.825,63.825);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#5F1806").ss(2.6,1).p("AAjhtIgBAMQgMBggnBQIgSAf");
	this.shape_67.setTransform(87.85,93.025);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#5F1806").ss(2.6,1).p("AhCggQAHATAOAPQAPAPASAIQAgAOAigJIANgG");
	this.shape_68.setTransform(52.175,75.042);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#5F1806").ss(2.6,1).p("AguhrQALAKAMANQAeAiATAsQASAqACAuQABAPAAAIIAAAE");
	this.shape_69.setTransform(57.8583,66.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#5F1806").ss(2.6,1).p("AhMgtQAIAZATAUQAXAZAhAMQAhAMAigFIADgB");
	this.shape_70.setTransform(60.95,57.709);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#5F1806").ss(2.6,1).p("ABGAUIgDgEQgggfgxgDQgegCgZAL");
	this.shape_71.setTransform(61,47.5906);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#5F1806").ss(2.6,1).p("AgXBqIgDgdQgFhAANhBQACgMAEgJQADgKAFgGQAFgIAJgEQAJgFAKAC");
	this.shape_72.setTransform(79.2306,31.0464);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#5F1806").ss(2.6,1).p("AhSAiQA/g0BTgNIATgC");
	this.shape_73.setTransform(67.8,42.225);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#5F1806").ss(2.6,1).p("AAvBEIhdiI");
	this.shape_74.setTransform(69.175,51.35);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#5F1806").ss(2.6,1).p("AghhTIAQAYQApBAAKBP");
	this.shape_75.setTransform(77.75,47.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#5F1806").ss(2.6,1).p("AhdA5IACABQA/AKAzghQAvgdAUg0IAEgO");
	this.shape_76.setTransform(68.675,28.2003);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#5F1806").ss(2.6,1).p("AhXA5IgCgHQgGgbASgbQARgaAcgNQAagLAigCQAXgBAoAD");
	this.shape_77.setTransform(67.725,28.2275);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#5F1806").ss(2.6,1).p("AhjBHQATgnANgVQAUgfAXgUQAYgWAhgGQAjgHAbAPIAFAD");
	this.shape_78.setTransform(49.3,39.3267);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#5F1806").ss(2.6,1).p("AhoA9IALgDQBTgYBEgzQAXgSAYgZ");
	this.shape_79.setTransform(48.8,40.975);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#5F1806").ss(2.6,1).p("AhLBZQAFgQAGgKQAWgtAignQAlgsAkgSIALgF");
	this.shape_80.setTransform(48.05,47.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#5F1806").ss(2.6,1).p("AhLDGIACgCQAdgdAZgoQAyhQAahqQAIgeAFgjQAFgkABgiIAAgE");
	this.shape_81.setTransform(46.975,59);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#5F1806").ss(2.6,1).p("AhcBBQAVgsAnggQAlggAwgNQAUgGAUgC");
	this.shape_82.setTransform(52.3,83.975);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#5F1806").ss(2.6,1).p("AglBEIAOgLQAwgqALg/IACgT");
	this.shape_83.setTransform(58.45,83.625);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#5F1806").ss(2.6,1).p("AhXBhIAEgTQAShHA4gxQAUgTAYgOQAYgMAUgGIAJgD");
	this.shape_84.setTransform(70.9,66.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#5F1806").ss(2.6,1).p("AhLgGQAkAPAnAAQApgBAjgQ");
	this.shape_85.setTransform(71.375,103.625);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#5F1806").ss(2.6,1).p("Ah0hCIAEgBQAPgCAHAAQA+gCA1AgQBAAmAbBEIABAD");
	this.shape_86.setTransform(67.35,96.0659);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#5F1806").ss(2.6,1).p("AhKB/QgIg7AQg6QAQg6AlguQANgQAOgJQASgKAQAFIACABQAUAHAHAZQADAPgEAYIgBAFQgHAkgRAfQgQAcgbAg");
	this.shape_87.setTransform(33.9932,59.4302);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#5F1806").ss(2.6,1).p("AhFBoQgBgzATgxQATgvAjgkQARgTAPgEQAKgCAKADQALADAEAI");
	this.shape_88.setTransform(19.6975,69.3682);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#5F1806").ss(2.6,1).p("AgYi1QANAUAJATQAbA3AFA/IAAAZQAABEgeA9QgLAcgTAY");
	this.shape_89.setTransform(39.85,93);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#5F1806").ss(2.6,1).p("AAUBUIgEgIQgmhLADhU");
	this.shape_90.setTransform(31.9144,99.75);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#5F1806").ss(2.6,1).p("AhgBZQABg8AYg4QAXg5ApgsQARgSAPgMQAZgUASACQAHABAEADQAOAHADAUQACAPgFAUIgBAFQgWBYg0BLQgtBEhAAz");
	this.shape_91.setTransform(27.9036,85.3909);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#5F1806").ss(2.6,1).p("Ag5AMQgKgZAAgcQAAggANgTQAIgLAMgHQAMgHANACQALACAJAIQAQAOALAeQATA4AIAtQAMBMghAAQgIAAgKgFQgcgMgXgcQgVgagLghg");
	this.shape_92.setTransform(11.5967,90.3278);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#5F1806").ss(2.6,1).p("AAJB9Qghg5ADhFQAEhGAng1");
	this.shape_93.setTransform(2.3837,104.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#5F1806").ss(2.6,1).p("AhPgcQAQASAVALQAvAdA3gBIAVgC");
	this.shape_94.setTransform(28.6,112.9286);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#5F1806").ss(2.6,1).p("ACNBAIgCgJIAAAAQgBgFgCgGQgMglgbgaQgMgMgQgKQgdgRgigEQghgEgfALIALgH");
	this.shape_95.setTransform(23.8264,109.3198);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#5F1806").ss(2.6,1).p("AhGAtIAIgCQATgGAPgGQA7gaAogx");
	this.shape_96.setTransform(44.2,111.175);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#5F1806").ss(2.6,1).p("AhaCFIAFgcQAKgnASglQAZgxAlgqQAmgqAwgc");
	this.shape_97.setTransform(45.975,103.25);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#5F1806").ss(2.6,1).p("AAfCFIACgIQAOg+gPg/QgRhIgzg5IgDgD");
	this.shape_98.setTransform(60.6129,102.875);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#5F1806").ss(2.6,1).p("AAFCAQgUgogEgtQgFgsALgsQALgtAYgk");
	this.shape_99.setTransform(53.4969,102.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#5F1806").ss(2.6,1).p("AhYAYQAtANAvgNQA1gPAggm");
	this.shape_100.setTransform(41.85,128.8875);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#5F1806").ss(2.6,1).p("Ag8guQgkAngJAZQgGAUADAUQAEAVAPAMQAVARAegGQAVgEAZgTQAWgQAQgSQAcgeAQgmQARgnADgp");
	this.shape_101.setTransform(14.9888,146.605);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#5F1806").ss(2.6,1).p("AAlgoQgjgWgagFQgbgFgVALQgIADgHAGQgTASABAeQABAcAUAUQARASAdAGQAbAFAagHQAggJAhgaIAagW");
	this.shape_102.setTransform(12.8196,134.6985);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#5F1806").ss(2.6,1).p("AA9AGQgYAggfAgQgaAcgOAKQgOAKgOADIgHABQgKABgJgFQgJgFgDgJQgDgJAGgSQAJgaAXgnQAegzAdgiQAlgsAdgEQAIgBAJADQADAAAEADQAbAQgOAqQgJAbgbAlg");
	this.shape_103.setTransform(10.2003,115.8333);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#5F1806").ss(2.6,1).p("AgzAtQAag0AzgaQARgIAJgD");
	this.shape_104.setTransform(31.975,119.225);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#5F1806").ss(2.6,1).p("AAYBpIgDgEQgVgcgMgnQgWhFAWhF");
	this.shape_105.setTransform(18.2,127.025);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#5F1806").ss(2.6,1).p("AgaB7QAwg2AFhNQADg5gYgxIgEgI");
	this.shape_106.setTransform(23.617,124.525);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#5F1806").ss(2.6,1).p("AhLBtIAFAAQAKAAAGgBQAvgGAkgrQAJgLAHgNQAYgqAFhCIABgj");
	this.shape_107.setTransform(29.9,125.225);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#5F1806").ss(2.6,1).p("AhxBgQAxgFAtgYQArgXAhglQAqgtAPg5");
	this.shape_108.setTransform(31.075,141.725);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#5F1806").ss(2.6,1).p("AiDBHQApAPAtgFQAsgEAlgWQAYgOAWgXQAogrAKg5");
	this.shape_109.setTransform(50.65,135.3533);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#5F1806").ss(2.6,1).p("Ah2g3IgEAEIgCADIgCAGQgCAHABAKQABAKAGAJQAMARAeAOQAqATArAHQA8ALA9gN");
	this.shape_110.setTransform(50.1083,120.4647);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#5F1806").ss(2.6,1).p("ACOAtIgFgOQgVgqg1gVQgMgEgMgDQgqgKg8AIIgkAGIgBAAIABAAIANgF");
	this.shape_111.setTransform(47.687,118.4171);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#5F1806").ss(2.6,1).p("AhhAHQAmAOA+gHQBBgHAegX");
	this.shape_112.setTransform(80.975,123.064);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#5F1806").ss(2.6,1).p("AihBJQArAQAugEQAvgEAngXIAVgMQBxhEANg8IABgD");
	this.shape_113.setTransform(75.425,130.04);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#5F1806").ss(2.6,1).p("AhNAPQgKAPgGAOQgKAUAAANQAAAIAEAHQAFALALAEQAKAGALgBQARgBAXgNIADgBQAwgeAdg2QAMgTANgZQATgoACgUQABgOgGgEQgFgEgOAEIgHACQgiANg1AqQgmAdgZAmg");
	this.shape_114.setTransform(71.7327,113.826);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#5F1806").ss(2.6,1).p("AAphGQgIADgGAFQgYASgTAsQgQAigIAl");
	this.shape_115.setTransform(77.525,64.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#5F1806").ss(2.6,1).p("AgihnQACA4AQAvQAOAoAfA0IAHAM");
	this.shape_116.setTransform(76.9,93.575);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EE3D29").s().p("AgwB+Qgig5ADhFQAEhFAog1IAMgEQALAhAUAaQAXAbAdANQAKAFAIAAIACARQgdAEglAqQgdAjgdAzg");
	this.shape_117.setTransform(8.1837,104.275);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#A3250C").s().p("AAAAsQgagFgWAKIgQgFQAOgDAOgKQAOgKAagbQAgggAXggIAGABQgWBFAWBFIgEACQgjgWgagFg");
	this.shape_118.setTransform(10.4,123.525);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#407F74").s().p("AAaBvQgcgMgXgcQgVgagLghQgKgZAAgcQAAggANgTQAIgLAMgHQAMgHANACQALACAJAIQAQAOALAeQATA4AIAtQAMBMghAAQgIAAgKgFg");
	this.shape_119.setTransform(11.5967,90.3278);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#407F74").s().p("AhYB2QgJgFgDgJQgDgJAGgSQAKgaAWgnQAegzAdgiQAlgsAdgEQAIgBAJADIAHADQAbAQgOAqQgJAbgbAlQgYAggfAgQgaAcgOAKQgOAKgOADIgHABIgDAAQgJAAgHgEg");
	this.shape_120.setTransform(10.2003,115.8333);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#EE3D29").s().p("AgZBEQgdgGgRgSQgUgUgBgcQgBgeATgSQAHgGAIgDQAVgLAbAFQAaAFAjAWIAEgBQANAmAVAbIADAEIACADQghAaggAJQgQAEgPAAQgLAAgLgCg");
	this.shape_121.setTransform(11.5446,134.6985);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#EE3D29").s().p("AhZBcQgPgMgEgVQgDgUAGgUQAJgZAkgnIABgFQAaAFAcgHQAfgJAhgZIATgRIAQgBIAQACQgDApgRAnQgQAmgcAeQgQASgWAQQgZATgVAEQgIACgIAAQgUAAgPgNg");
	this.shape_122.setTransform(14.9888,146.505);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#EE3D29").s().p("AgpBGQgWhGAWhFIgGgBQAcgmAIgbIAHACQAPARAVAMQAXAxgDA4QgFBPgwA1IgFADQgWgcgNgmg");
	this.shape_123.setTransform(21.067,123.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#EE3D29").s().p("AgtBLQgLgegQgOQgBgyATgwQATgwAjglQARgSAPgEQAKgDAKADQALADAEAJIAGABQgQA6AIA7IAHAEQgpArgYA4QgWA5gCA8IgBABQgIgugTg4g");
	this.shape_124.setTransform(19.9725,76.6432);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#407F74").s().p("AAyA6QgdgRghgDQgigEgfAKIAIgFIAAgBQBAgyAthEIACACQgDBUAnBLQgMgNgQgKg");
	this.shape_125.setTransform(25.725,99.275);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#A3250C").s().p("AgeA1QADg5gYgwQAwAdA3gBQg0AZgaA1g");
	this.shape_126.setTransform(29.425,118.35);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#407F74").s().p("AghAkQgVgMgQgRIgGgCQAOgpgbgQIgHgDIAAgBQAfgKAiAEQAhADAcARQAQAKANANQAbAaALAlIgCAKQgIACgSAIIgFAAQg0AAgtgcg");
	this.shape_127.setTransform(27.65,109.3735);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#407F74").s().p("AhpCzIgCgRQAhAAgNhMIACgBQABg8AYg4QAXg4AogsQASgSAPgMQAZgUASACQAHABAEACQAOAHADAUQACAQgFAUIgBAEQgWBYg0BMQgtBEhAAzIAAAAIgIAGIAAABQgJgDgIABg");
	this.shape_128.setTransform(26.8036,85.7409);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#EE3D29").s().p("AhUB1IgCgEIAFgDQAxg1AFhNIAFAAQAZg0A0gbQARgIAJgCIACgKQADAFAAAFIgBABIABAAIABAEIgBADIgCAAIgBAGQgCAHABAKQgEBCgYAqQgIANgJALQgkArgvAGIgQABIgTAQg");
	this.shape_129.setTransform(29.075,125.775);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#EE3D29").s().p("AhKB9QgIg7AQg6QAQg6AlguQANgQAOgJQASgKAQAFIACABQAUAHAHAZQADAPgEAYIgBAFQgHAkgRAfQgQAcgbAgIAAADQgSgCgZAUQgOAMgSASg");
	this.shape_130.setTransform(33.9932,59.6302);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#EE3D29").s().p("AhyBjQAcgeARgnQARgmADgpIgQgCQAvgGAkgrIABABQAtAOAwgOIADAJQgQA5gpAtQgiAlgrAXQgtAYgxAFg");
	this.shape_131.setTransform(31.025,141.225);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EE3D29").s().p("AgaCDQgohLADhUIgCgCQA0hMAWhYIACAAQANAVAJASQAcA3AEA/IABAbQgBBCgdA+IADABQgTAlgJAnQgLglgagbg");
	this.shape_132.setTransform(36.3,94.25);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#A3250C").s().p("AhYBAIgBgBQAJgLAIgNQAXgqAFhCQABAKAGAJQAMASAdAOQAqASAsAHIAAADQghAng1APQgWAGgYAAQgXAAgXgGg");
	this.shape_133.setTransform(41.8,124.8875);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#A3250C").s().p("AAnAjQgpgJg8AIQA7gaAogyIABAAQAFAsAUApIgYgIg");
	this.shape_134.setTransform(47.625,110.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EE3D29").s().p("AhICdIgCAAIABgFQAFgUgCgPQgDgUgOgHQgFgDgGgBIABgDQAbgfAPgcQARgfAHglIABgEQAWgtAhgoQAmgrAkgTQgBAjgFAkQgFAigIAeQgaBqgyBQQgZApgcAdQgKgTgNgUg");
	this.shape_135.setTransform(44.65,59.075);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#A3250C").s().p("AgxAkQgHgZgUgIIgCgBIAGgBQBSgWBFg1IAAADQgkATgmAsQghAmgWAtQAEgYgDgPg");
	this.shape_136.setTransform(46.675,46.65);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EE3D29").s().p("AhXB+QgBgFgDgGQAKgnATglQAYgxAmgqQAmgpAvgdIABABIAGgEIAAAAQgaAlgLAsQgLAsAFAsIgBAAQgpAzg6AZIgkAGg");
	this.shape_137.setTransform(46.55,102.225);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#A3250C").s().p("Ag5BeQgEg/gcg2QAcgdAagpIAFAAQAGAUAPAPQAOAQASAIQAhAOAhgKIABADQgwANgmAfQgmAhgVAsg");
	this.shape_138.setTransform(48.6,81.075);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#EE3D29").s().p("AhkBGQATgoAMgVQAUgfAXgTQAagWAggHQAigGAbAPIACAHIADAAIADAAIgCAJQgYAZgYASQhDAzhTAYg");
	this.shape_139.setTransform(49.425,39.4767);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#EE3D29").s().p("AhvCOQAeg+ABhDIgBgaIACAAQAUgsAnggQAmggAwgOQATgGAUgBIAGAAIgBAMQgLBAgxAqIgJAHIgBgBQguAcgnApQgmAqgYAyg");
	this.shape_140.setTransform(51.05,91.825);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#EE3D29").s().p("AgcB3QgSgIgPgQQgOgPgHgUIgFAAQAzhPAahrIAGACQAHAYATAVIgFACQAfAiATArQASArACAuIABAXIgDAAIgBAHIgGgBQgUACgUAGIAAgDQgOAEgOAAQgSAAgUgIg");
	this.shape_141.setTransform(53.7833,65.692);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#EE3D29").s().p("AAFA4QgrgHgqgTQgegOgMgRQgGgJgBgKIABgRIACgGIACgBQAUgGAPgGQA8gIAqAJIAXAIQA1AVAWAqQAAAIADAGQAFALALAFIgEAIQghAHghAAQgcAAgbgFg");
	this.shape_142.setTransform(50.3,119.9818);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#EE3D29").s().p("AgnBiQgUgogFgtQgFgsALgsQALgsAaglIAAAAIADgDIAVgCIgMAIQAzA4ARBKQAPA+gOA9QgKAPgGAOQgKAUAAANQgVgrg0gVg");
	this.shape_143.setTransform(57.9348,105.325);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#A3250C").s().p("AgVgEQgTgrgfgjIAFgCQAXAaAiAMQAgAMAhgFIAQADQg4AxgRBIQgDgugRgrg");
	this.shape_144.setTransform(62.7,66.125);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#EE3D29").s().p("AgagWQAzgrAsgRIASAAIgDBoQhcAcg4AfIgVACQAxgqAKg/g");
	this.shape_145.setTransform(64.7,80.975);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#EE3D29").s().p("AAwBRQgiAFgggMQgigMgXgaQgTgUgIgYIgGgBQAIgeAFgjQAZgKAfABQAwAEAgAgIBEBjQgZAOgVASg");
	this.shape_146.setTransform(63.575,54.0406);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#407F74").s().p("AgoA9QgRhIg0g5IANgIQA+gCA2AgQA/AmAbBEQgjARgoAAQgoAAgjgQg");
	this.shape_147.setTransform(67.925,96.7909);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EE3D29").s().p("AhWA4IgCAAIgDAAIgCgHQgGgcASgaQAQgbAcgMQAagMAigBQAXgCApAEIAJAEIgBADQgUA0gvAdQgnAagtAAQgPAAgPgDg");
	this.shape_148.setTransform(68.175,28.3778);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#EE3D29").s().p("AhxAtIAAgEQAYgSAYgXIACgJQA+AJA0ggQAvgdATg1IADABQgEAJgCAMQgNBCAFA/IgXADQhTANg/A1QgfgBgZAKQAFgkABgig");
	this.shape_149.setTransform(65.925,35.025);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#A3250C").s().p("AhLg9QAjARAogBQAoAAAjgRIABADQgiANg1AqQgmAcgZAnQAOg+gPg+g");
	this.shape_150.setTransform(71.425,109.05);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#A3250C").s().p("ABjBhQgbhFg/glQg1ggg/ACQA4gfBcgcIADgBQACA5AQAtQAOAqAgA0IgIACg");
	this.shape_151.setTransform(69,93.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#EE3D29").s().p("AhYBYIADAAIgBgWQAThHA4gyQATgSAZgOQAXgNAVgGIAOAGQgYASgUAsQgQAjgIAkIgBAAIAAAOIgSgBQgrARgzAsg");
	this.shape_152.setTransform(71.15,68.025);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#EE3D29").s().p("AgcABQgggfgxgEQA/g1BTgNIAAADIARAYQAqBCAKBNIAEAKQgHAEgGAEIgOgGQgVAHgXAMg");
	this.shape_153.setTransform(70.575,49.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#407F74").s().p("AhTBrQgLgEgFgLQgEgHAAgIQAAgNAKgUQAGgOAKgPQAZgmAmgdQA1gqAigNIAHgCQAOgEAFAEQAGAEgBAOQgCAUgTAoQgNAZgMATQgdA2gwAeIgDABQgXANgRABIgDAAQgJAAgJgFg");
	this.shape_154.setTransform(71.7327,113.826);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#EE3D29").s().p("AgFC3IgEgKQgLhOgqhCIAJAAIgDgdQgFg/ANhCQACgNAEgJQADgKAFgFQAGgIAJgFQAJgFAKACIAEAAQASgDAOAQIACADQAFAFADAKQAEAJACANQANBCgFA/IgDAdIAGAFQgoBAgKBLIgGAKg");
	this.shape_155.setTransform(82.225,38.7694);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#407F74").s().p("AAADtQAAgOgFgDQgFgEgOADQgfg0gOgqQgQgugDg5IgCABIADh2IAAAAQAIglAQgjQAUgrAYgTQAGgEAIgEIAMAAIAEACQAaANAVApQAQAgAJAoIgCAAIADATQAKA2gEA6IAAABQgLBggpBRIgPAbQgIgBgEAEQgEACgBAGg");
	this.shape_156.setTransform(82.2093,80.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EE3D29").s().p("AkLBkIgGgBQAqguAPg4IgDgJQA1gOAhgoIAAgCQA8AKA9gMIAEgJQAJAGALgBQARgBAYgNIARABQAmAPA/gHQBBgHAdgYIAJAAIgBADQgNA8hxBEIgVAMQgnAXgwAEQgtAEgrgQIgDgCQgWAXgYAPQgmAWgsAEIgWABQghAAgggLg");
	this.shape_157.setTransform(64.2,132.5033);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#A3250C").s().p("AhhBbIgRgBIACgCQAygeAdg1QAMgTANgaQARgoACgUIAIABQgDARAVAoIAaAvQAUAmAgAaIgJABIABgCIgJgBQgeAYhBAHQgTADgSAAQglAAgagKg");
	this.shape_158.setTransform(80.95,114.664);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#EE3D29").s().p("AhgBRIADgKIgHAAQALgwAbgmQAfguApgPQAXgIAZAFQAZAEAQARIACAEIgcAyIgGAJQgkA5grABIgCABQgPgQgSADIgFAAQgKgCgJAFQgJAFgGAIQgEAFgEAKg");
	this.shape_159.setTransform(87.4,15.394);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#A3250C").s().p("AARAGQgOgLgcgPQglgVgUgCIAQgbIAFACIgIARQAkARAnAAQAoAAAlgQQgPA8AKA9QgZgmgkgbg");
	this.shape_160.setTransform(92.8,107.95);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#EE3D29").s().p("AgKAxIgLACIgDgTIADAAQgKgogQgfQgVgpgagNIASgCQA0AOApAkQA7AyASBKIAAARIgFAAQgtggg2gPg");
	this.shape_161.setTransform(92.8,66.75);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#407F74").s().p("AA+BrQgTAAgYgPQgOgIgLgLQgfgagVgmIgagvQgUgoACgRQABgGAEgCQAEgEAIABQATACAlAUQAdAQAOAMQAkAbAZAkQAJANAJATQAKASAAAQQAAAIgEAGQgCAGgHAGQgLAIgOAAIgDAAg");
	this.shape_162.setTransform(93.1111,114.2937);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#EE3D29").s().p("AhKAXIAAABIgBALIgBAAQAEg7gJg2IAKgCQA3AQAtAgIAEAAIAAAFIADAAIABAHQAGA6AnArQhMgshQgOg");
	this.shape_163.setTransform(98.875,79.675);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#EE3D29").s().p("AgbAhQgvgdgTg0IgDgGIALgBQAogEAXACQAiABAaAMQAVAJAOAQQAdAggHAkIgCAHIgDAAIgDAAQgOADgPAAQguAAgngag");
	this.shape_164.setTransform(96.501,28.3778);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#407F74").s().p("AhvA8IAIgRQAcg5A3ggQA9glBHAIIAAAEQg0A3gTBNQgkAQgnAAQgpAAgkgRg");
	this.shape_165.setTransform(96.975,96.7781);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#A3250C").s().p("AhwBdQAohQAMhfIABgMIAAgBQBQAOBMAsQAIAJAIAGIgFgBQhHgHg9AjQg3AggcA6g");
	this.shape_166.setTransform(97.375,91.55);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#EE3D29").s().p("ABIBqQg/g2hTgNIgWgCQAFg/gNhCQgDgNgDgJIACgBQAUA1AvAdQAzAhA/gJIABAJIAaAXQAAApALAzIgCABQgSgJgTgBg");
	this.shape_167.setTransform(97.975,35.05);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#EE3D29").s().p("AgJByIgQABQgpglg1gOIgRACIgEgCIAGgKQAKhKAnhAQAJgPALgOIAAgDQBTANA/A2QATABASAIIACAAQAIAlANAmQgQAsgsAWQgfAQggAAQgOAAgNgDg");
	this.shape_168.setTransform(97.075,50.6578);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#A3250C").s().p("AAZAbQgZgLgjgCQgXgBgpADIgKABIACAHIgCABQgEgKgEgGIgCgCIACgBQAsgCAkg4QA1ACAuAcIAJAGQASAMAfAaIgBABIg2AdIgGABQgNgQgVgKg");
	this.shape_169.setTransform(97.875,21.125);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#A3250C").s().p("AhVgVIAQgBQAwAIAqgVQAsgWAQgsIAFANIgBAAQgpAkgZAzQgXAxgDA2QgThJg7gyg");
	this.shape_170.setTransform(103.075,64.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#EE3D29").s().p("AgrCAQgJgTgJgNQgLg8APg8QAThOAzg3IAAgEIAGABIADADIAAABQAaAkALAtQALAsgFAsQgFAtgUAoQg0AVgVArQAAgQgKgSg");
	this.shape_171.setTransform(106.812,105.375);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#EE3D29").s().p("AhmAsIAFgJIAdgyQASgcAUgOQAdgUAkAFQAmAEAXAZIAHAGIhdBuIgMABQgugcg2gCg");
	this.shape_172.setTransform(104.425,11.4337);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#EE3D29").s().p("AgkBuIAAADQgUgGgUgCIgGABIgBgHIgDAAIABgXQADg2AYgxQAZgzAogjIABAAQAgBYAvBHIgDABQgGAUgPAPQgOAQgTAIQgUAIgTAAQgNAAgOgEg");
	this.shape_173.setTransform(110.875,66.967);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#A3250C").s().p("AglgqIABAAQAoAyA7AaQg8gIgpAJIgYAIQAUgpAFgsg");
	this.shape_174.setTransform(117.125,110.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#A3250C").s().p("AA4BeQgVgrgmghQgmgfgwgNIAAgDQAiAJAhgNQATgJANgPQAPgPAGgUIADgCQAaApAeAeQgcA2gFA/g");
	this.shape_175.setTransform(116.15,81);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#EE3D29").s().p("AAhBFQgdgCgigaIgGgFQgggbgRgLIgJgGIANgBIAyg7IB+BmIgDAEQgHAPgRAJQgOAHgRAAIgEAAg");
	this.shape_176.setTransform(113.625,19.7056);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#EE3D29").s().p("AgogSIAAABIgJgHQgIgHgIgJQgngrgHg7IAGAAQAVABATAGQAwAOAmAgQAmAgAWAsIABAAIAAAaQABBDAcA+IgCABQgyhnhjg6g");
	this.shape_177.setTransform(113.7,91.825);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#EE3D29").s().p("AgJAZQgigVgdgYIgagZIgCgJIADAAIADAAIACgHQAbgPAjAGQAfAHAaAWQAXATAUAfQAMAVATAoIgBADQg5gRg0gfg");
	this.shape_178.setTransform(115.325,39.4767);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#A3250C").s().p("AgBAAQgagsgegdQA0AfA5ARIAGABIgCABQgUAHgGAZQgEAPAFAcIAFAWIgCAAQgMgjgXgng");
	this.shape_179.setTransform(120.15,49.375);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#EE3D29").s().p("AA1B4Qg7gZgpgzIgBAAQAFgsgLgsQgLgsgZglIAAAAIAFAEIAAgBQBjA7AyBmQASAlAKAnIgDALIAAAAg");
	this.shape_180.setTransform(118.2,102.225);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#EE3D29").s().p("Ah/A2IADgMQAGgGADgGQADgGABgIQAUgqA2gVIAYgIQApgJA8AIQAPAGAUAGIABABIADAGIABARQgBAKgGAJQgMARgeAOQgpATgsAHQgcAFgbAAQghAAghgHg");
	this.shape_181.setTransform(114.65,119.9694);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#EE3D29").s().p("ACbBtQgtgEglgWQgtgbgbguIgFADQhIAghSAGQgZACgRgGQgXgIgHgSIgMgBQBxhEANg8IAJgBQAMAKAOAJQAYAOASABQAQABANgKIgDANQA7AMA9gKIABACQAgAoA1APIgDAIQAQA3AmArIgEAFQgfALghAAIgVgBg");
	this.shape_182.setTransform(103.25,132.6033);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#EE3D29").s().p("AAGCHQguhHgghYIgFgNQgNgngIgmQgLgyAAgqQAdAaAjAUQAdAeAaAsQAYAoAMAjIACAAQARA5AtAzQgGABgFACQgOAIgCATQgDAQAFAUIACAFIgDAAQgNAUgJASQgegegagpg");
	this.shape_183.setTransform(118.975,58);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#EE3D29").s().p("AhrAjIBKhVQAOgSAKgIQAOgNAQgCQAUgEAXAOQAPAIAWAVIAHAJQgYAPghAhIhWBYg");
	this.shape_184.setTransform(121.175,9.289);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#A3250C").s().p("AgDBAQg1gPghgoIAAgCQAtgHApgTQAdgOAMgSQAFgIACgKQAEBBAZAqQAHANAJALIgCABQgWAHgYAAQgXAAgWgGg");
	this.shape_185.setTransform(122.975,124.9189);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#EE3D29").s().p("AgmB3IADgBQgdg+gBhCIAAgbQAFg/Acg3QAJgSANgVIADAAQAVBYA0BMIgCACQADBUgnBLQgbAbgLAlQgKgngSglg");
	this.shape_186.setTransform(128.45,94.25);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#A3250C").s().p("AAYBNQgYgHgmggIgBAAIg4gsIBJhKIABABIA7BHIA6BFIgDABQgMAOgUAEIgNABQgMAAgMgEg");
	this.shape_187.setTransform(127.175,19.3145);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#EE3D29").s().p("AAkBkQgZgUgSACQgtgzgRg5IgFgWQgFgcADgPQAHgaAUgHIACgBQAQgEASAKQANAIAOARQAlAtAQA7QARA6gJA6IgKABQgNgNgQgOg");
	this.shape_188.setTransform(130.7724,59.4802);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#A3250C").s().p("AgzgYQA3ABAwgdQgYAwADA5IgEABQgbg1gzgZg");
	this.shape_189.setTransform(135.325,118.35);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#EE3D29").s().p("AAmBsQgngKgdgkQgJgLgHgNQgZgqgEhCQABgKgCgHIgBgFIgCgBIgBgDIABgEIABAAIgBAAIADgLIACAKQAJACARAJQAzAaAbA1IAEgBQAFBHAqA0IgMABQgRAAgOgEg");
	this.shape_190.setTransform(135.075,124.95);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#EE3D29").s().p("AASBHQgsgYgignQgmgqgQg4IADgIQAwANAtgOIACgBQAcAkAoAKIgCAFQADApARAmQARAnAcAeIgBACQgygFgugZg");
	this.shape_191.setTransform(133.725,141.225);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#A3250C").s().p("AgphOIACgCQAtBEBAAyIAAABIAIAFQgfgKgiAEQghADgdARQgPAKgNANQAnhLgDhUg");
	this.shape_192.setTransform(139.025,99.275);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#407F74").s().p("AhFBAQgQgIgKgCIgBgKQALglAbgaQANgNAPgKQAdgRAhgDQAigEAgAKIAAABIgHADQgcAQAOApIgGACQgQARgVAMQgtAcg0AAIgGAAg");
	this.shape_193.setTransform(137.1,109.3735);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#EE3D29").s().p("AhxAIIgBgBIAOgNQAhgjAYgPQAYgQAYgEQAhgGAfAQQAfAQAPAeIAAABQgdAMgvAiIgGAEQgtAigeAMIgLACIg8hHg");
	this.shape_194.setTransform(136.375,10.5297);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#407F74").s().p("ABbC0IgIgGIAAAAQhAgzgthEQg0hMgWhYIgBgEQgFgUACgQQADgUAOgHQAEgCAGgBQATgCAZAUQARAOANANQApAsAYA6QAZA4ABA9IACABQgLBGAbAGIgEARQgGAAgFACg");
	this.shape_195.setTransform(137.7333,85.7409);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#407F74").s().p("AgQB8IAMgBQgqg0gFhHQgDg6AXgwQAVgNAPgRIAHgCQAJAbAaAlIgFADQAWBEgWBGQgMAngZAgIgFAAg");
	this.shape_196.setTransform(143.683,123.75);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#EE3D29").s().p("AAPBKQgVgKgXgbIg6hFIALgCQAegMAughIABACQAUAuAfAoQASAXASAVIgEAHQgKAPgVAEIgMABQgNAAgNgGg");
	this.shape_197.setTransform(139.75,21.651);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#EE3D29").s().p("AATCwQgCg9gXg5QgYg6grgrIAKgBQAJg7gRg6IAGgBQAEgJALgDQAKgDAKADQAPAEAQASQAkAlATAwQATAwgBAyQgQAOgLAeQgTA4gIAug");
	this.shape_198.setTransform(144.6775,76.6432);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#A3250C").s().p("Ag6BGQAVhGgVhEIAEgDQAXAhAfAhQAcAbAPAKIARAJIgRAFQgRgFgUAEQgaAFgiAWg");
	this.shape_199.setTransform(153.8,123.425);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#407F74").s().p("AgwB0QgbgGALhGQAIgtATg4QALgeAQgOQAJgIALgCQANgCAMAHQAMAHAIALQANATAAAgQAAAdgLAbQgLAggVAZQgXAbgbAMQgKAFgJAAIgEAAg");
	this.shape_200.setTransform(153.1658,90.3178);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#EE3D29").s().p("AAoBoQgWgEgZgSQgWgQgQgSQgcgfgQglQgRgngDgpIABgFQAOAEARAAIARAOQAjAcAfAJQAcAHAagFIABAEQAkAoAJAZQAHAUgEATQgEAWgPAMQgPAMgUAAQgHAAgIgCg");
	this.shape_201.setTransform(149.7727,146.355);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#A3250C").s().p("AgZAjIgQgRQgSgUgSgWIBzgrIARAFQALAXAFANQAHAUAAARQgBAdgVASQgJAIgMABIgFABQgaAAgdghg");
	this.shape_202.setTransform(152.7266,25.1157);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#EE3D29").s().p("AgaBBQghgJgjgbIAFgBQAZgfAMgnIAFACQAigWAagFQAUgEARAFQAPAFALAJQAUASgCAeQgBAcgUATQgRASgdAGQgLADgLAAQgPAAgQgFg");
	this.shape_203.setTransform(153.1052,134.7026);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#EE3D29").s().p("AgNAkQgogrgdAAIADgRQAKABANgGQAcgMAXgbQAUgZALggIANABQAoA1AEBGQADBFgiA4IgEACQgfg3gegjg");
	this.shape_204.setTransform(156.2663,104.425);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#407F74").s().p("AhvgKIgCgCIAGgFQAwgiAcgMIAGgDQAzgTApASQAUAJANATQANAUABAUIgBALIitBAQgfgpgUgtg");
	this.shape_205.setTransform(151.05,14.9622);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#407F74").s().p("ABGB6QgJAAgJgFIgRgJQgPgKgbgcQgfghgXghQgagjgJgbQgOgqAbgQIAHgDQAEgCAHAAQAdAAAnAsQAfAjAfA2QAXAnAKAaQAGASgDAJQgDAJgJAFQgIAEgIAAIgDAAg");
	this.shape_206.setTransform(154.5722,115.8333);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#407F74").s().p("AhJD0IAJm4IgFAAQAVgSAAgdIAJAAIAUAvQBUDSAJDmg");
	this.shape_207.setTransform(165.35,50.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#EE3D29").s().p("AAKAyQgviBhdhgIgUgvIgJAAQABgRgIgUQgEgNgMgXIgRgFIAggMIgCAFQCSA7BhB+QBkB9AVCaIAEAkQADApgQARQgHAJgUAHIhsAuQAIiGgxiBg");
	this.shape_208.setTransform(176.4737,48.45);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#407F74").s().p("AgBgdQhih+iSg7IACgFIAbgJIABgLIAGAAQA5gSA/AMQA7AMA0AjQBbA+A5B9QAXAwAUBBQAMAmAVBPIh1AfIgJAAQgWiahjh9g");
	this.shape_209.setTransform(184.05,39.1059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat_05, new cjs.Rectangle(-3.1,-1.2,213.2,159.39999999999998), null);


(lib.hat_04 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#070F21").ss(2.6,1).p("AD7CzQhwAOjUgyQhrgZhUgcQAjhXBHinQAUAmAqAgQAfAYA1AaQCJBFCQAx");
	this.shape.setTransform(26.4682,55.2128);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#070F21").ss(2.6,1).p("ADnFOQgpgHgrgRQhdgmhThTQgtgtheiFIhVh8QCMiZAvgxQAGCkBeC3QBdCyCCBu");
	this.shape_1.setTransform(38.6268,31.628);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#070F21").ss(2.6,1).p("ABCDsQhXhXgth3Qgth2AJh8ICrgUQg0BoAKB5QAKB5BEBe");
	this.shape_2.setTransform(57.775,40.0935);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#070F21").ss(2.6,1).p("ADKhOQgdAagQAKQgRAKgNAAQgJAAgNgFQgFgDgWgMQgkgUglgOQgPgFgTACQgPABgMAEQgIACgQAHQgwAXgxA0IgSAUQgTAuAqASQAoARAkgbIADgCQARgKBAg5QAwgrAogI");
	this.shape_3.setTransform(70.2671,73.223);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#070F21").ss(2.6,1).p("AhnAoQAeAPAkgCQAigCAegRQAcgOAUgWQAVgXAIgc");
	this.shape_4.setTransform(72.95,76.8118);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#070F21").ss(2.6,1).p("ACMA6QgQgJgegcQgYgVgMgLQgUgSgRgKQgagRgbgBQgWgBgcALQgdAKgQARQgNAOABAP");
	this.shape_5.setTransform(81.2175,63.1457);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#070F21").ss(2.6,1).p("ABaAOQgbgahBgDQhHgEgQAj");
	this.shape_6.setTransform(103.525,56.48);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#070F21").ss(2.6,1).p("ABUAgQgegfgcgOQgmgWgoAGQgHgDgOALQgNAKAFADIADAB");
	this.shape_7.setTransform(91.7824,59.644);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#070F21").ss(2.6,1).p("AgUgJQABAJAPAGQAOAHAJgFIACgB");
	this.shape_8.setTransform(90.65,79.6792);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#070F21").ss(2.6,1).p("AhyBSQA0AUAwgmQATgQAXgcQAMgPAagkQAggqARgP");
	this.shape_9.setTransform(88.65,72.1728);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#070F21").ss(2.6,1).p("AAfALIgGgBQgKgDgRgHQgSgHgKgD");
	this.shape_10.setTransform(103.725,64.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#070F21").ss(2.6,1).p("AgWAyQAcgmARg+");
	this.shape_11.setTransform(104.475,70.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#070F21").ss(2.6,1).p("AhRAsQAFgFAVgVQASgSAMgLIAOgLQA8gtAhAz");
	this.shape_12.setTransform(114.475,60.9508);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#070F21").ss(2.6,1).p("AATAoQgCgOgRgeQgSgeABgE");
	this.shape_13.setTransform(114.3993,63.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#070F21").ss(2.6,1).p("AhFAXIABgDQAFgfATgTQARgRAXgDQAmgGAXAdQAZAfgXAw");
	this.shape_14.setTransform(123.4954,65.7243);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#070F21").ss(2.6,1).p("ABbAFIgLgFQgogSgrAEQgtADgkAXIgGAE");
	this.shape_15.setTransform(129.275,96.4958);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#070F21").ss(2.6,1).p("ABnA2QgIgSgOgRQgjgpgxgPQgSgGgvgGIgigE");
	this.shape_16.setTransform(148.725,101.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#070F21").ss(2.6,1).p("ABSADIhXgXQgagHgNAEQgMADgJAMQgIAKgGASIgCAF");
	this.shape_17.setTransform(167.775,104.5023);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#070F21").ss(2.6,1).p("AA2gpQgSAsgrAXQgVAMgZAD");
	this.shape_18.setTransform(203.875,126.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#070F21").ss(2.6,1).p("ABNBxQgngsgggtQgtg/glhJ");
	this.shape_19.setTransform(212.475,140.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#070F21").ss(2.6,1).p("AhSAcQApgHAjgLQAxgPAogX");
	this.shape_20.setTransform(204.725,145.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#070F21").ss(2.6,1).p("AA2BQQgYgcgSgYQgkgygdg5");
	this.shape_21.setTransform(209.575,155.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#070F21").ss(2.6,1).p("ABTgFQg9APg/gHQgUgCgVgE");
	this.shape_22.setTransform(201.6,158.7565);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#070F21").ss(2.6,1).p("AAhA/Qgug3gThG");
	this.shape_23.setTransform(200.625,166.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#070F21").ss(2.6,1).p("AgCA0QAIgWABgZQAAgYgJgXIgEgJ");
	this.shape_24.setTransform(153.525,89.575);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#070F21").ss(2.6,1).p("AgSBLIAHgLQAKgQAEgNQAWg0gHg5");
	this.shape_25.setTransform(160.9345,100.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#070F21").ss(2.6,1).p("ADiCeQg3g9g3guQgvgpgvgfQhdhChigtQgJgFgigPIgNgF");
	this.shape_26.setTransform(151.075,87.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#070F21").ss(2.6,1).p("ACuAvQhbANhagZQhbgZhHg5IgEgD");
	this.shape_27.setTransform(164.6,162.4445);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#070F21").ss(2.6,1).p("ABIBZIgCgCIgBAAIgJgHQhVhGguhi");
	this.shape_28.setTransform(176.1,158.425);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#070F21").ss(2.6,1).p("AhvAnQA2ADAzgPQBDgUAzgt");
	this.shape_29.setTransform(167.875,146.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#070F21").ss(2.6,1).p("ABbB5QhJhJg2hQQgcgogbgw");
	this.shape_30.setTransform(183.05,145.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#070F21").ss(2.6,1).p("ABTg4QgbAwguAdQgpAcgzAI");
	this.shape_31.setTransform(171.475,131.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#070F21").ss(2.6,1).p("AB5CmQhYhihHhoQgsg/gmhC");
	this.shape_32.setTransform(183.925,129.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#070F21").ss(2.6,1).p("AAyhaIgBAGQgFAtgVApQgaA2guAj");
	this.shape_33.setTransform(168.475,112.575);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#070F21").ss(2.6,1).p("ABtCDQgihQg4hCQg3hDhIgw");
	this.shape_34.setTransform(186.175,117.75);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#070F21").ss(2.6,1).p("AAHAFIgNgJ");
	this.shape_35.setTransform(174.575,104.175);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#070F21").ss(2.6,1).p("ABwA5IgKgKQgsgpg3gaQg2gbg7gJ");
	this.shape_36.setTransform(140.7,88.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#070F21").ss(2.6,1).p("AAqhDQgyA0gcBGIgFAO");
	this.shape_37.setTransform(124.45,90.15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#070F21").ss(2.6,1).p("ABTCNQgqg4gphGIgBgCQgrhIgkhNIgCgE");
	this.shape_38.setTransform(129.375,81.35);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#070F21").ss(2.6,1).p("ABghgQgTAjgcAhQg9BMhTAx");
	this.shape_39.setTransform(131,125.85);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#070F21").ss(2.6,1).p("ABThmIgCAEQgSAjgTAcQgzBNhLA9");
	this.shape_40.setTransform(129.175,106.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#070F21").ss(2.6,1).p("ACIgKIgDABIgFADQg9AbhEgCQhFgDg7gfIgGgD");
	this.shape_41.setTransform(134,158.0067);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#070F21").ss(2.6,1).p("ABEA5IgEgCQgpgPgigdQgigcgWgn");
	this.shape_42.setTransform(140.975,151.525);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#070F21").ss(2.6,1).p("AB3BuQhdiBiIhVIgIgF");
	this.shape_43.setTransform(149.475,106.65);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#070F21").ss(2.6,1).p("ACNCwQgng0hAhFQhLhQgUgaQg1hAgeg8");
	this.shape_44.setTransform(147.75,120.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#070F21").ss(2.6,1).p("ABnCDQhehJhAhkQgbgrgUgt");
	this.shape_45.setTransform(146.5,136.325);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#070F21").ss(2.6,1).p("AiylMQCvA9BQBPIADADQA1A1AdBBQAfBFgDBEQAAAUgEAUQgMBBgoA1QgmAzg3AeQgQAJgGACQg0AWgzgGQgigFgcgSQgdgTgPgc");
	this.shape_46.setTransform(202.0632,141.1228);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#070F21").ss(2.6,1).p("Ahxk6QAvAOAkATIALAGQAsAaAeAjQAcAgAKAjQAPAzAEAvIAAADQAEAugEAuQgCAdgGAgIgFAUQgKApgOAjIgKAWQgkBEg6AW");
	this.shape_47.setTransform(186.125,135.525);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#070F21").ss(2.6,1).p("AkCipIAcALQCRA8B1BOQB8BRBoBt");
	this.shape_48.setTransform(157.2,90.075);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#070F21").ss(2.6,1).p("AjSnBIAFACQAiAQAhAUIASAKQB8BQBWB/IANAUQAaAoAVAuQAKAVAIAXQARAsAMAzIAIAsQAMBUgMBGIgCAGQgCAPgGASQgOAtgbAnIgHAJQgjAugwAX");
	this.shape_49.setTransform(141.8875,112.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#070F21").ss(2.6,1).p("AhjB6IAIgFQBHgsA0g/QAagcAUgjQAZgngEgd");
	this.shape_50.setTransform(130.3526,144.625);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#070F21").ss(2.6,1).p("AhbAFIAMgFQAngSAsAEQAtADAkAXIAHAE");
	this.shape_51.setTransform(112.25,96.4958);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#070F21").ss(2.6,1).p("AhmA2QAIgSAOgRQAjgpAxgPQASgGAvgGIAigE");
	this.shape_52.setTransform(92.775,101.575);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#070F21").ss(2.6,1).p("AhRADIBXgXQAagHANAEQAMADAJAMQAIAKAGASIACAF");
	this.shape_53.setTransform(73.725,104.5023);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#070F21").ss(2.6,1).p("Ag1gpQAPAlAjAXQAbATAeAD");
	this.shape_54.setTransform(37.625,126.25);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#070F21").ss(2.6,1).p("AhMBxQAngsAggtQAtg/AlhJ");
	this.shape_55.setTransform(29.025,140.275);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#070F21").ss(2.6,1).p("ABTAcQgpgHgjgLQgxgPgogX");
	this.shape_56.setTransform(36.775,145.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#070F21").ss(2.6,1).p("Ag1BQQAYgcASgYQAlgyAcg5");
	this.shape_57.setTransform(31.925,155.125);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#070F21").ss(2.6,1).p("AhTgFQA+APA/gHQASgCAYgE");
	this.shape_58.setTransform(39.925,158.7565);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#070F21").ss(2.6,1).p("AggA/QAug3AThG");
	this.shape_59.setTransform(40.875,166.45);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#070F21").ss(2.6,1).p("AADA0QgIgWgBgZQAAgYAJgXIAEgJ");
	this.shape_60.setTransform(87.975,89.575);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#070F21").ss(2.6,1).p("AATBLIgHgLQgKgQgEgNQgWg0AHg5");
	this.shape_61.setTransform(80.5655,100.15);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#070F21").ss(2.6,1).p("AjhCeQA1g6A5gxQAvgpAvgfQBchCBigtQAPgHAdgNIANgF");
	this.shape_62.setTransform(90.425,87.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#070F21").ss(2.6,1).p("AitAvQBaANBYgYQBagZBHg3IAIgG");
	this.shape_63.setTransform(76.9,162.439);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#070F21").ss(2.6,1).p("AhHBZIACgCIABAAQBbhIAxhn");
	this.shape_64.setTransform(65.4,158.425);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#070F21").ss(2.6,1).p("ABwAnQg/AEg6gWQg7gVgrgm");
	this.shape_65.setTransform(73.65,146.7814);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#070F21").ss(2.6,1).p("AhaB5QBIhIA4hRQAcgpAagv");
	this.shape_66.setTransform(58.45,145.975);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#070F21").ss(2.6,1).p("AhSg4QAZAsAoAbQAtAhA3AJ");
	this.shape_67.setTransform(70.025,131.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#070F21").ss(2.6,1).p("Ah4CmQBYhiBHhoQAsg/AmhC");
	this.shape_68.setTransform(57.575,129.575);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#070F21").ss(2.6,1).p("AgxhaIABAGQAFAqATAqQAaA3AwAk");
	this.shape_69.setTransform(73.025,112.575);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#070F21").ss(2.6,1).p("AhsCDQAihQA4hCQA3hDBIgw");
	this.shape_70.setTransform(55.325,117.75);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#070F21").ss(2.6,1).p("AgGAFIANgJ");
	this.shape_71.setTransform(66.925,104.175);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#070F21").ss(2.6,1).p("AhuA5IAKgKQArgpA3gaQA2gbA7gJ");
	this.shape_72.setTransform(100.8,88.175);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#070F21").ss(2.6,1).p("AgphDQAyA1AcBEIAAABIAFAO");
	this.shape_73.setTransform(117.05,90.15);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#070F21").ss(2.6,1).p("AhSCNQAqg6AohEIACgCQAphEAjhMIAFgJ");
	this.shape_74.setTransform(112.15,81.35);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#070F21").ss(2.6,1).p("AhfhjQAXAmAaAjQBABRBOAt");
	this.shape_75.setTransform(110.5,125.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#070F21").ss(2.6,1).p("AhShmIADAEQAOAdAWAiQAzBNBLA9");
	this.shape_76.setTransform(112.325,106.25);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#070F21").ss(2.6,1).p("AiGgKIAHAEQA9AbBEgCQBGgDA6gfIAGgD");
	this.shape_77.setTransform(107.5,158.0067);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#070F21").ss(2.6,1).p("AhDA5IAFgCQApgQAhgcQAigdAWgm");
	this.shape_78.setTransform(100.525,151.525);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#070F21").ss(2.6,1).p("Ah2BuQBdiBCIhVIAIgF");
	this.shape_79.setTransform(92.025,106.65);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#070F21").ss(2.6,1).p("AiLCwQAmg0BAhFQBLhQAUgaQA1hAAeg8");
	this.shape_80.setTransform(93.75,120.225);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#070F21").ss(2.6,1).p("AhmCDQBehJA/hkQAcgrAUgt");
	this.shape_81.setTransform(95,136.325);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#070F21").ss(2.6,1).p("ACzlMQivA9hQBPIgDADQg1A1gdBBQgfBFADBEQABAUADAUQALA9AmA1QAnA3A5AeQAQAJAGACQA0AWAzgGQAigFAcgSQAdgTAPgc");
	this.shape_82.setTransform(39.4368,141.1228);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#070F21").ss(2.6,1).p("AByk6QgtANgmAUIgLAGQgsAageAjQgcAggKAjQgOAvgFAzIAAADQgEAuAEAuQACAfAHAeIAEAUQAKApAOAjIAKAWIABAAQAjBDA6AX");
	this.shape_83.setTransform(55.3875,135.525);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#070F21").ss(2.6,1).p("AEEipIhOAgQg0AYgtAXQjDBniVCd");
	this.shape_84.setTransform(84.3,90.075);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#070F21").ss(2.6,1).p("ADTnBIgFACIgdAPQgdAOgbARQh8BQhWB/IgQAZQgYAngUAqQgJAVgJAXQgRAsgMAzIgIAsQgMBUAMBGIACAGQACAPAGASQAOAtAbAnIAHAJQAlAuAuAX");
	this.shape_85.setTransform(99.6125,112.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#070F21").ss(2.6,1).p("AADG4IgFtv");
	this.shape_86.setTransform(120.85,112.425);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#070F21").ss(2.6,1).p("ABkB6IgGgEQhIgsg1hAQgagcgUgjQgZgnAEgd");
	this.shape_87.setTransform(111.1474,144.625);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3F7745").s().p("AhTBuQgDhGAfhDQAdhCA0g0IADgEIAFAEQAPAlAjAXIgFAIQglBJgtA/QggAtgnAsIgFABQgDgTgBgUg");
	this.shape_88.setTransform(28.8118,136.75);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3F7745").s().p("AhSgLIAFgBQAngtAggsIAAAAQAnAWAyAQIgCAHQgbA4gnAzQgQAYgYAbIgIABQgmg2gLg8g");
	this.shape_89.setTransform(29.175,152.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#3F7745").s().p("AADA/Qg3gegng2IAIAAQAYgcARgYIAJADQA9AQA/gHIABALQgTBFgvA3IgXgLg");
	this.shape_90.setTransform(34.975,165.325);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#122313").s().p("AhoBBQAwg3AThFIgBgLQASgCAXgFIAGgEQAjBDA8AWIABABIgBAAIABACQgPAcgdATQgcASghAFIgXABQgoAAgpgRg");
	this.shape_91.setTransform(48.025,166.2478);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#3F7745").s().p("Ah3CHQhrgZhUgcQAjhWBHipQAUAnAqAgQAfAXA1AaQCJBFCQAxQArASAoAHIAFAFQgwAXgxA1IgJAAQgYADgeAAQhpAAilgng");
	this.shape_92.setTransform(31.075,56.0781);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#3F7745").s().p("ADkFDQgpgHgrgSQhdgmhThTQgtgsheiFIhVh9QCMiZAvgxQAGCkBeC3QBdCyCCBuIADALQgJACgQAHg");
	this.shape_93.setTransform(38.925,32.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#122313").s().p("AhMChIgLgXQgOgjgKgoIgEgUIAEgBQBYhhBIhpIACACQAZArAoAdIgGAHQgaAugcAoQg4BShIBIg");
	this.shape_94.setTransform(56.625,141.95);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3F7745").s().p("ABBDlQhXhWgth4Qgth2AJh7ICrgUQg0BnAKB6QAKB4BEBeIACACQgOAOACAPIAAACQgPABgMAFg");
	this.shape_95.setTransform(57.875,40.75);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#122313").s().p("AiCCVQgEguAEgvIADABQAihPA4hDQA3hDBHgwIAUgGQAEAqAUAqIgJAFQgmBCgsA+QhHBphYBiIgEABQgHgfgCgfg");
	this.shape_96.setTransform(57.2625,125.175);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#122313").s().p("AgXB5Qg7gWgkhEIAEAAQBIhHA4hRIACABQAsAoA7AVIgBAGQgxBnhbBIg");
	this.shape_97.setTransform(60.8,154.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#3F7745").s().p("AhuBUQgqgSATguIASgUQAxg0AwgXQAQgHAHgCQAMgEAPgBQATgCAQAFQAlAOAkAUIgCAGQgoAIgxArQg/A5gRAKIgDACQgWARgYAAQgOAAgQgHg");
	this.shape_98.setTransform(64.0921,73.223);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#3F7745").s().p("Ag7A0IgCgDQA1g5A3gwQgHA4AXA1QgJgMgMgEQgNgEgbAIIg8ARg");
	this.shape_99.setTransform(74.05,98.35);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#3F7745").s().p("AgUBTQgogdgZgrIgCgCQAsg+AmhBIAHgGQAbA4AwAkIALACQgMBUAMBFIgIACQg3gJgtghg");
	this.shape_100.setTransform(70.325,124.925);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#3F7745").s().p("AhfA6IgQgEQARgLBAg4QAwgrAogJIACgFIAbAOQAMAGAKAAIAEAPQgJAbgVAXQgUAWgbAPQggARggACIgJAAQgfAAgbgNg");
	this.shape_101.setTransform(72.1,75.0618);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3F7745").s().p("AgIBFQg7gVgrgnIgDgCQAdgoAZgvIAGgHQAuAiA3AIIAIgBIABAGQADAPAGASQANAsAcAnIAHAKIgBABIgUABQg0AAgxgTg");
	this.shape_102.setTransform(73.575,141.9564);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3F7745").s().p("AATA6IgagPQgkgUglgOQgRgFgTACIAAgCQgBgPANgOQAQgRAdgKQAcgLAWABQAaABAbARQARAKAUASIAkAgIgCABQgcAagQAKQgRAKgNAAQgKAAgMgFg");
	this.shape_103.setTransform(78.9175,63.6457);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#3F7745").s().p("AikBZIgKACIgBgCIABAAQBchIAxhnIABgGQA6AVA/gEIABgBQAkAuAuAWIAEAGQhIA3hZAZQg6APg7AAQgfAAgfgEg");
	this.shape_104.setTransform(75.975,158.239);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3F7745").s().p("AhSBIIgPgBQAbgOAVgXQAUgXAJgbIgDgPQANAAAPgKQAQgKAdgaIABgBQAfAcAPAJIABABQgaAlgMAOQgXAcgUAQQgeAYghAAQgSAAgSgHg");
	this.shape_105.setTransform(85.45,73.1478);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#3F7745").s().p("AAiA+QgPgJgegcIgjggQgVgSgQgKIACgEQgFgDANgKQAPgLAGADQAogGAmAWQAcAPAeAeIAAAFQgRAOggArg");
	this.shape_106.setTransform(91.75,62.744);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3F7745").s().p("AgrBTQgJAGgPgIQgPgHgBgJIgOgBQAUgQAXgcQAMgPAagjQAfgrARgPIAFAAQAKADASAIQASAHAKADIAFACIAAAAQgRA/gdAlIADAHQgzAXgtAYg");
	this.shape_107.setTransform(96.975,72.15);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#3F7745").s().p("AhvBuQgKgXAAgZQAAgZAJgWQBdhBBhgtIAsgUQh8BQhWB9IgQAag");
	this.shape_108.setTransform(99.525,83.825);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#3F7745").s().p("AgcB8QgugWglguIgGgKIAEgBQBehJBAhkIAGADQgEAdAZAoQAVAjAaAcIgHACQgWAmgiAdQgiAdgoAQIAFADIgEAAIgHAFg");
	this.shape_109.setTransform(96.1,144.95);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#3F7745").s().p("Ah9AtIgGgCQAqgQAhgcQAjgdAVgmIAGgCQA2BABHArQg6AghGACIgIAAQhAAAg4gag");
	this.shape_110.setTransform(107.35,152.7817);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#3F7745").s().p("AheAYIARgYQAsgpA2gcQA2gaA8gJIADACIgBACQgpBEgqA4IABADIgBAAIgIAFIgiAEQguAGgSAFQgyAQgjAqQATgqAYgng");
	this.shape_111.setTransform(98.475,93);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#3F7745").s().p("AgDAqQgSgIgKgCIgFAAIAAgFQgegegcgPIABgBQARgkBGAEQBCADAbAaIAHAIIgNAMIgfAcIgaAaQgKgCgRgIg");
	this.shape_112.setTransform(103.85,60.105);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#3F7745").s().p("AA/hPQAbgRAdgOIAdgPIgDAGQgjBLgpBFIgEgCQg7AIg2AbQg3AbgsApQBWh+B8hPg");
	this.shape_113.setTransform(105.425,80.25);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#3F7745").s().p("AgjAOIgHgEIABgCQAphEAjhMIAGACIACEPQgchGgyg1g");
	this.shape_114.setTransform(116.475,81.875);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3F7745").s().p("AAEAvQgsgEgnASIgEgHIABAAIgBgCQAqg5AphEIAFAEQA0A1AbBFIAAAVQgkgYgsgDg");
	this.shape_115.setTransform(112.325,90.275);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#122313").s().p("ABQBsQhKg9g0hNQgWgigOgdQAngRAsADQAsAEAkAXIACC8g");
	this.shape_116.setTransform(112.6,105.7208);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#3F7745").s().p("AgLA4QgBgOgTgfQgRgdAAgEIgGgBIAOgLQA8gtAhAzIACANQgXAEgQAQQgSATgGAgg");
	this.shape_117.setTransform(117.425,62.1508);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3F7745").s().p("AgoiCIgGgCIADgGIAFgCIABAAIAFACQAjBOArBIIABACIgHAEQgyA0gcBHg");
	this.shape_118.setTransform(124.625,81.525);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#3F7745").s().p("AgVASIgFgCIgBAAIgFACIgdAPIgIgLIABgDQAFgfATgTQARgRAXgDQAmgGAXAdQAZAfgXAwIgOADQghgUghgQg");
	this.shape_119.setTransform(123.4954,65.8493);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#122313").s().p("AhShQQAlgXAsgEQAsgDAnARQgSAjgSAcQg0BNhKA9g");
	this.shape_120.setTransform(129,105.7208);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#3F7745").s().p("AhUA1QAchFA0g1IAFgEQAqBGAqA3IgCACIABAAIgEAHQgngSgsAEQgsADglAYg");
	this.shape_121.setTransform(129.2,90.275);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#122313").s().p("AhnCkIgBi8QBKg9A0hOIABAAQAdA7A1BBIgNALQgUAigbAiQg9BMhTAwg");
	this.shape_122.setTransform(131.4,119.05);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#3F7745").s().p("AgDBHQhFgCg7ggIACgBQBHgrA1g/IAFACQAWAmAiAdQAjAcApAQIgGACQg5AahAAAIgIAAg");
	this.shape_123.setTransform(134.175,152.7817);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#3F7745").s().p("AAxA6Qg2gbg7gIIgEACQgrhJgkhNQAiAQAhATIASALQB8BPBWB+Qgsgpg3gbg");
	this.shape_124.setTransform(136.075,80.25);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#3F7745").s().p("ABZBdQhWh+h8hPIArATQBhAuBeBAQAJAXAAAZQAAAZgKAWIgKABg");
	this.shape_125.setTransform(141.975,83.575);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#3F7745").s().p("AA1AvQgSgFgugGIgigEIgIgFIgBAAIABgDQgpg3gqhFIgBgCIADgCQA8AJA2AaQA2AcAsApIAOATQAZAoAVAuQgjgqgygQg");
	this.shape_126.setTransform(143.025,93);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#3F7745").s().p("AASB9IgEAAIAGgCQgpgQgigdQgigdgWgnIgHgCQAagcAVgjQAZgngEgdIAHgEQA/BlBeBIIAFACIgHAKQgjAtgwAWIgHADg");
	this.shape_127.setTransform(145.4,144.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#3F7745").s().p("ABNCrQhdhJhAhkQgcgrgUgtIgCgCQAbgiATgiIANgMQAVAaBKBRQBABEAnA0IAEABQgCAOgGATQgOAtgbAng");
	this.shape_128.setTransform(149.075,132.325);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#3F7745").s().p("ACHDSQgng0hAhFQhKhRgVgZQg0hAgeg8IgBAAQATgbASgkIADgGIAIAFQCIBUBdCBIACgBIAIAsQAMBUgMBGIgCAGg");
	this.shape_129.setTransform(148.2875,116.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#3F7745").s().p("AgsA4QgLgzgSgtIAEgBIAHgMQAKgQAFgNQAJgMALgDQANgEAaAHIA+ARQgFAsgVApQgcA2gsAjIgMACg");
	this.shape_130.setTransform(166,111.9023);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#3F7745").s().p("AgCApQgagIgNAEQgMAEgIAMQAWg1gIg4QA2AuA3A7IgCADIgBAGg");
	this.shape_131.setTransform(167.45,98.35);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#3F7745").s().p("AhwBUIgBgBIAHgJQAcgnANgsQAGgTADgOIABgHIAIACQAygIAqgdIAPACQAaAwAcAnIgDABQgzAuhDAUQgqANgtAAIgSgBg");
	this.shape_132.setTransform(167.95,142.225);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#3F7745").s().p("AhXB6QAMhGgMhTIALgCQAugjAbg2IAJACQAmBCAsA+IgCABQgbAwguAeQgpAdgzAHg");
	this.shape_133.setTransform(171.175,125.075);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#3F7745").s().p("AgKBKQhagZhIg5IAHgDQAwgWAjguIABABQA2ADAygPIARABQAvBiBWBGIgBAHQgfAFgfAAQg8AAg8gRg");
	this.shape_134.setTransform(164.85,158.5195);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#3F7745").s().p("AChCFIgBACIAHAEIgUgFIABgGIADgDQg4g8g2guQgvgogvggQhdhChiguQCRA8B1BOQB8BRBnBuIgBABQgkgSgvgOg");
	this.shape_135.setTransform(158.625,90.75);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#122313").s().p("ABNChQhJhIg3hSQgbgngbgvIgOgCQAtgeAcgvIACgCQBHBpBZBhIAEABIgEAUQgLAogOAjIgKAXg");
	this.shape_136.setTransform(184.5,141.95);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#122313").s().p("AB3DSQhYhihIhpQgsg+gmhCIgKgCQAVgqAFgtIATAGQBIAwA3BDQA4BDAiBPIADgBQAEAvgEAuQgCAdgHAhg");
	this.shape_137.setTransform(184.175,125.175);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#122313").s().p("AABBRQghgFgcgSQgdgTgPgcIABgCIgBAAIABgBQA7gVAkhEIAHAEQAVAFATACIgBALQATBFAwA3QgpARgoAAIgXgBg");
	this.shape_138.setTransform(193.475,166.2478);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#122313").s().p("AgqA+QgUgCgVgFIgHgEIAKgWQAOgiALgpIADABQAqgHAhgLIACAGQAcA5AmAyIgJADQgrALgqAAQgUAAgTgCg");
	this.shape_139.setTransform(201.7,152.9065);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#122313").s().p("AhUBgIAFgUQAGggACgdQAEgugEguIAAgDIALgBQAZgDAVgMIARAAQAkBJAuA/IgBAAQgnAXgyAQQgiALgpAHg");
	this.shape_140.setTransform(204.55,138.625);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#3F7745").s().p("AhagyIABgLQBAAHA9gQIAIgDQASAYAYAcIAFAEQgmAyg2AeIgWALQgwg3gThFg");
	this.shape_141.setTransform(206.375,165.325);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#3F7745").s().p("AAaBkQgYgbgQgYQgmgzgcg4IgCgHQAygQAngWIAAAAQAgAsAnAtIAFABQgMBAgoA1g");
	this.shape_142.setTransform(212.325,153.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#3F7745").s().p("ABQCUQgngsgggtQgsg/glhJIgRgBQArgYATgrIAFgEIADAEQA0A0AdBCQAfBDgDBGQgBAUgEATg");
	this.shape_143.setTransform(212.1132,136.75);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#122313").s().p("AhSA1IgIgDQAmgyAcg5IACgGQAhALApAHIAEgBQAKApAOAiIALAWIAAAAIgGAEQgYAFgSACQgUACgTAAQgrAAgrgLg");
	this.shape_144.setTransform(39.825,152.9065);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#122313").s().p("AAVgMQg3hDhIgwIgHgEIABgCQAvAOAlASIAKAHQAtAZAeAkQAbAgALAiQAPAyADAwIABACIgDABQgihPg4hDg");
	this.shape_145.setTransform(185.975,117.45);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#3F7745").s().p("AAZBhQgugkgcg4QgTgogEgqIA9gRQAagHANAEQALADAJAMQAFANAKAQIAHAMIADABQgQAtgMAzIgIArg");
	this.shape_146.setTransform(75.5,111.9023);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#122313").s().p("AhjgpIAEAAQBTgwA+hNIACACQAUAuAcAqIgHAEQAEAdgZAoQgUAhgaAeQg0A/hHAsg");
	this.shape_147.setTransform(130.975,139.675);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#3F7745").s().p("Aj0CkQCUieDEhmQAtgYAzgXIAxgWQhiAuhdBCQgvAggvAoQg4Awg1A6IACADIABAGIgUAFIAIgEIgBgCQguANgmATg");
	this.shape_148.setTransform(82.85,90.75);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#122313").s().p("AAWBzQhUhGgvhiIgRgBQBEgTAzgvIACgBQA3BRBJBHIAEAAQgkBEg7AWIgBABg");
	this.shape_149.setTransform(179.9,154.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#3F7745").s().p("AgMBvIgIgLQgGgTgIgLQgWg0AHg5QAvgoAughQgJAXAAAZQAAAZAKAWIAHAGQgYAmgUAqQgIAVgJAXg");
	this.shape_150.setTransform(83.8155,96.575);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#122313").s().p("AhxCFIABgCQAEgzAOgvQALgiAbggQAegkAtgZIAKgHQAngTAtgNIABACIgHAEQhIAwg3BDQg4BDgiBPg");
	this.shape_151.setTransform(55.525,117.45);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#3F7745").s().p("AgGBFQgVgugZgnIAKgBQAJgWABgZQAAgZgKgXQAuAhAwAoQAHA5gWA0QgJALgGATIgHALIgEACQgIgXgJgVg");
	this.shape_152.setTransform(157.5345,96.575);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#3F7745").s().p("AhLBMQAegmARg+IAAAAIgGgCIAagaIAegeIAGABQAAAEARAeQATAgABANIADAAIAAACIAIALQgdAOgbARIgrATIgxAWg");
	this.shape_153.setTransform(109.725,68.05);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#122313").s().p("AgOBxQgegEgcgTQgjgXgQglIgEgEQBRhOCug8IAAABQgtAZgeAkQgcAggKAiQgOAvgDAzg");
	this.shape_154.setTransform(44.55,119.15);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#3F7745").s().p("AhzhqIAiAEQAvAGASAFQAyAQAjAqQAKAVAIAVQARAuAMAzIgCABQhdiBiIhUg");
	this.shape_155.setTransform(149.975,106.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#3F7745").s().p("AhzBqQAMgzARguQAJgVAJgVQAjgqAygQQASgFAvgGIAigEQiIBUhdCBg");
	this.shape_156.setTransform(91.525,106.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#122313").s().p("AgOAQQgLgigbggQgegkgugZIABgBQCuA8BSBOIgFAEQgTArgsAYQgVANgZADIgLABQgEgwgOgyg");
	this.shape_157.setTransform(196.95,119.15);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#122313").s().p("AAFBSQgxgQgogWIAAAAQAtg/AlhJIAFgIQAcATAeADIAMABIgBADQgDAvADAtQADAfAGAfIAEAUIgEABQgpgHgjgMg");
	this.shape_158.setTransform(36.95,138.275);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#3F7745").s().p("Ah7BZQgGgTgDgOIAEgBQAng0BAhEQBKhRAVgaIANAFQAXAmAbAjIgGAEQgUAtgbArQhBBkhdBJIgEACQgcgngNgtg");
	this.shape_159.setTransform(92.575,132.325);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#3F7745").s().p("AiMDNQgMhGAMhUIAIgsIACABQBdiBCIhUIAIgFIAEAGQAOAdAWAiIgBAAQgeA8g0BAQgVAZhKBRQhABFgnA0IgEABg");
	this.shape_160.setTransform(93.2125,116.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#122313").s().p("ABjCnIgDABQhHgsg1hAQgagdgVgiQgYgnAEgdIgHgEQAcgrATgtIAGgEQBABSBOAtIAJAAIABDPIgBABg");
	this.shape_161.setTransform(110.85,139.625);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#122313").s().p("ABiCkQhOgsg/hTQgcgigWgmIgNgEQA1hBAdg7IABAAQA0BOBKA9IADAAIABC8g");
	this.shape_162.setTransform(110.3,119.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat_04, new cjs.Rectangle(-1.6,-3.8,225.7,181.3), null);


(lib.hat_03 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("ADulHQjEAoiCBMQhCAmgaAeIgBAAQggBIgKBPQgKBPANBPQAHAoAYA9QAUA2AHAH");
	this.shape.setTransform(22.8226,133.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#070F21").ss(2.6,1).p("AgYARQADAEASgOQAUgRAIgH");
	this.shape_1.setTransform(9.075,164.7283);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#070F21").ss(2.6,1).p("AgfgpQAKAOAVAbQAUAZAKAOIACAD");
	this.shape_2.setTransform(158.475,160.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6).p("AA5EcQAQhJAFhHQAKihgxiaIgDgFQgkgwhRgtIgCgB");
	this.shape_3.setTransform(155.9905,135.949);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6).p("AAfBNQgIhRg4g8");
	this.shape_4.setTransform(148.0984,79.1498);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.6).p("AgdAoIA7hP");
	this.shape_5.setTransform(148.2,90.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6).p("AC7gQQgpgSgwgHQhOgKhKAXQhNAYg3A1");
	this.shape_6.setTransform(132.05,45.3823);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F1806").ss(2.6).p("AgSBWIAliq");
	this.shape_7.setTransform(148.875,52.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6).p("AgyBUIBlin");
	this.shape_8.setTransform(144.325,73.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5F1806").ss(2.6).p("AiggWQAogWAvgGQAvgGArALQBEARAyAzQAOAOAPAW");
	this.shape_9.setTransform(132.841,58.6631);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6).p("AgQg+QAjBAgEBJ");
	this.shape_10.setTransform(140.3074,33.7267);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5F1806").ss(2.6).p("AhaAqIAnhaQA8ARAeAUQAUAMANATQAPAUADAW");
	this.shape_11.setTransform(119.7016,11.4542);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(2.6).p("AAOArIgBgDQgXgxgqgnQgqgmg0gUIDkhIQA6BDAWBaQAZBngfBj");
	this.shape_12.setTransform(94.121,17.9279);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5F1806").ss(2.6).p("ADDhQQgDggg2gfIg0gYIgcALQgkAQgNAKQhUBAg4BdQgpBFgVBOIgBAF");
	this.shape_13.setTransform(122.8874,33.3067);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5F1806").ss(2.6).p("AiZCMIATgcQBmiOCYhVIAngU");
	this.shape_14.setTransform(126.5135,38.8879);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#5F1806").ss(2.6).p("AD7DHIAAgGQAAhUgHgvQgLhGgggxQgNgTgSgSQhChBhsgTQg1gJhEACQgpABhSAIIgDC5");
	this.shape_15.setTransform(78.3501,31.4115);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5F1806").ss(2.6).p("ABOBqIgBgDQgThWg3hDQgSgXgQgKIgJgEQgSgIgSAB");
	this.shape_16.setTransform(89.6413,35.3805);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#5F1806").ss(2.6).p("AD9AkIgCgCQgnglhcAUQiNAgh7BSQgFgRgJgRQgeg3g2geQAvgzA8giQBLgrBVgOQBXgPBTAR");
	this.shape_17.setTransform(66.8732,39.9199);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#5F1806").ss(2.6).p("ABqhsQh4AthOBlIBPBK");
	this.shape_18.setTransform(40.3407,60.5041);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#5F1806").ss(2.6).p("ADHiEQhtAIhjAyQhkAyhIBSIAMANQAOAPAOAOIAEADQAWAVAQAJ");
	this.shape_19.setTransform(63.893,58.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#5F1806").ss(2.6).p("AgsARIBYgh");
	this.shape_20.setTransform(143.1,110.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#5F1806").ss(2.6).p("AhyjRQBSBBA3BYQAoA+AWBFQAVBEAEBD");
	this.shape_21.setTransform(136.718,87.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#5F1806").ss(2.6).p("AECh4QgNgjgmgTQgZgNgegBQgGgBgNABQgbACggAOQgkAQgpAeQh/BchcB8QgLAOgTAcQARALAZAMQBBAfBGADIAeAB");
	this.shape_22.setTransform(76.6815,63.1916);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#5F1806").ss(2.6).p("ADOjLIgJAHQgXASgSAQQg9A4gwBGQhNBzgaCEIgngQQhHgcgjgBQAGggANgrQAsiZA3g1QAngnAygYQAygZA3gIIALgBQArgFAoAG");
	this.shape_23.setTransform(91.3619,72.9452);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#5F1806").ss(2.6).p("AiRjrQAxA7AdBOQAbBLAEBOIAAAjQAABVgSBtIgOBTQAcgIBuglIBJgZQgBgigEgxQgUj9g0hoQgXgvgogxQgogyg7gxQgBgBgagWQgLgIABgB");
	this.shape_24.setTransform(124.6839,90.5351);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#5F1806").ss(2.6).p("AAeiHIgCAFQgrCAgMCBIgBAN");
	this.shape_25.setTransform(93.2813,82.3871);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#5F1806").ss(2.6).p("AhnB8IgBAFQgFBHAEBHICzgbQAPg2AIg0QAYicggiYQgKg1gRgx");
	this.shape_26.setTransform(100.805,84.0225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#5F1806").ss(2.6).p("AAUjvIgOAXQgyBdgeBlQgTA9gNBFQgJA1gHBGIC4ADQAAhDAIg6QAJhCAWhCQALgiAOgh");
	this.shape_27.setTransform(88.8839,118.5786);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#5F1806").ss(2.6).p("AgFjOQhCB2gcCBQgOBCgEA5IgCAnICYADQAAgpADgVQAOhrAvhgQAOgbAKgR");
	this.shape_28.setTransform(69.6176,103.0625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#5F1806").ss(2.6).p("AAjiNQgcA1gVA3QgWA5gPA3QgFAQgEATQAwAJBVAT");
	this.shape_29.setTransform(52.0031,92.9106);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#5F1806").ss(2.6).p("AAyhmQg+BZgfBNIBZAj");
	this.shape_30.setTransform(44.964,79.2753);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#10264F").ss(2.6,1).p("ABHB6QAZhTgSgnQgJgWgcgXQgjgdgUgOQgdgTgggLIgKgD");
	this.shape_31.setTransform(153.6724,105.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#10264F").ss(2.6,1).p("AiYB6QADgyAgguQAdgpAugeQAngZA0gTQAmgOBDgR");
	this.shape_32.setTransform(34.1,80.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#10264F").ss(2.6,1).p("AiTCYQgdgkgCgxQgBgyAaglQAggsBRggIAigNQBbggBegK");
	this.shape_33.setTransform(19.496,104.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#5F1806").ss(2.6).p("AAzAJQghgHgQgCQgZgFgcgC");
	this.shape_34.setTransform(115.9405,98.688);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#5F1806").ss(2.6).p("AA1AAQgDgBgFAAIgvABQgdAAgVAC");
	this.shape_35.setTransform(85.025,97.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#5F1806").ss(2.6).p("ACcCMQgthhhchIQhNg+hqgo");
	this.shape_36.setTransform(148.1115,135.9844);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#5F1806").ss(2.6).p("ABpAOQhngVhggF");
	this.shape_37.setTransform(108.6428,117.5366);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#5F1806").ss(2.6).p("AAvgFQgVABgTAEQgbAEgOAC");
	this.shape_38.setTransform(76.7329,116.875);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#5F1806").ss(2.6).p("AEciVQgUAEgyAPQh1Aih7BGQiHBKh6Bq");
	this.shape_39.setTransform(29.175,134.8456);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#070F21").ss(2.6,1).p("ACEkLQEHAOC5B4QBhA/AuBDIABABQiMCGisBAQilA9jqAKQjOAIkRhhQhYgfhUgnQgwgWgcgPIAAAAQA3hPCKhaQDSiJEAgb");
	this.shape_40.setTransform(82.8716,156.3092);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CA2C2B").s().p("AhKBAQAfhMA/hZIAAgBQAXAUAPAJIAFADIgeAqQARAMAZAMIAAABQgcAzgWA4g");
	this.shape_41.setTransform(48.05,79.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CA2C2B").s().p("AASCOIiEgcQAEgTAFgQQAOg3AWg5QAXg3Abg1IABAAQA/AfBHADIAAADQhCB0gdCCg");
	this.shape_42.setTransform(57.5,92.925);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CA2C2B").s().p("Ah4DOIACgoQAEg5AOhCQAdiBBCh2IAAgDIAdABIAKgBQgNArgGAfQAjABBHAcIgBAEQgKAQgOAbQguBggPBrQgFAkAAAag");
	this.shape_43.setTransform(69.7,102.85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EE3D29").s().p("AhtCDQgPgJgXgUIgEgEIgcgdIgMgNQBIhRBkgyQBjgyBtgJIADAHQgkAQgqAeQh+BbhcB9g");
	this.shape_44.setTransform(64.85,58.675);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CA2C2B").s().p("AjgCaIhQhKQBOhlB6guQAJASAFAQQB6hRCOghQBcgUAnAmIgBAJIgTAAQgbACggAOIgDgHQhtAJhkAyQhjAyhIBRIAMANIAcAdIgCADQhDARgmAOg");
	this.shape_45.setTransform(61.475,56.3658);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EE3D29").s().p("Ai9BkQgeg3g2geQAvgyA9giQBKgrBWgPQBWgOBTARIAAgBQARAKATAXQA3BEATBVQgZgNgegBIABgJQgngmhcAUQiNAhh6BRQgGgQgJgSg");
	this.shape_46.setTransform(69.95,39.5663);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CA2C2B").s().p("Ah7DfQAHhHAJg1QAMhFAUg9QAehkAyhdIAIAAQgFBHAEBHIBxgRQgOAhgLAiQgWBDgJBCQgJA5AABDg");
	this.shape_47.setTransform(89,119.425);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EE3D29").s().p("ABKB7QgMhIgggwQgNgTgRgRQgXgygqgnQgqgmg0gUIDkhIQA6BDAWBaQAZBngfBjQgqBFgUBNQAAhTgHgvg");
	this.shape_48.setTransform(95.433,25.35);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EE3D29").s().p("AhoCDIACgTQAMiBAriBQAvhGA9g4IABABQARAxAKA2QAgCYgYCbQgIA0gPA3IizAbQgEhIAFhGg");
	this.shape_49.setTransform(100.805,83.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1D438A").s().p("AAICaQgagFgbgDIgCAAQAXicgfiYIADAAQAxA7AcBOQAbBKAEBPIAAAjIgwgJg");
	this.shape_50.setTransform(115.375,83.225);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CA2C2B").s().p("AhYg3IADAAIAnhbQA8AQAeAUQAUAOAOASQAOAVADAVQgkAQgOAKQhTA/g4BeQAfhjgZhng");
	this.shape_51.setTransform(119.2,21.325);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CA2C2B").s().p("AiPBxQBmiOCYhVIABACQAkBAgEBIQhOgKhKAXQhNAYg3A2g");
	this.shape_52.setTransform(127.4247,38.775);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EE3D29").s().p("AhuCwQgogGgrAFIgBgDIAAgGQAVhOAphFQA4hdBUhAQAOgKAjgQIAcgLIA0AYQA2AfADAgIABABIgnAUQiZBThlCPIgLARg");
	this.shape_53.setTransform(122.95,34.125);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EE3D29").s().p("AhFgLIgCACQgqgxg6gxIARgDQAogWAvgGQAvgGArALQBFARAxA0QAOAOAPAWIACABIhlCnIgDACQg3hZhShAg");
	this.shape_54.setTransform(132.2,67.4941);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EE3D29").s().p("AAkAfQgrgLgvAGQgvAGgoAWIgRADIgcgXQgKgIAAgBIgBgCIABgBIgBgCIATgcIADACQA3g1BNgYQBKgYBOALQAwAGApATIglCqIgHABQgygzhEgSg");
	this.shape_55.setTransform(130.925,50.9129);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CA2C2B").s().p("Ag8gUIADgBIA1hZIABAAQA3A8AJBRIAAABIg8BPQgVhEgog/g");
	this.shape_56.setTransform(145.1,83.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CA2C2B").s().p("AgyiAQgWgwgpgxIACgCQBTBBA3BYQAoBAAWBDQAUBEAFBEIgCAAIhZAjIgCAAQgUj8gzhog");
	this.shape_57.setTransform(136.35,89.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EEBA33").s().p("AklBZQAKhQAghHIABAAQAageBCgmQCDhMDDgoIACAAQgFAQgEATICGAcIADABQgOBCgEA5IgCAAQgRADgTAHIgiAMQh2Ajh7BEQiGBMh7BpQgNhPAKhPg");
	this.shape_58.setTransform(29.8076,125.475);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EEBA33").s().p("AhQBnQAOhqAvhiIAEACIAwgCIAxgBQg0BdgdBjQgUACgUAEIgpAHg");
	this.shape_59.setTransform(81.35,107.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EEBA33").s().p("AhsBPIgBgBQALgiAOghIBDgKQAPg1AIg1IACABQAbACAbAFIAwAKQAABUgTBtQhlgWhigFg");
	this.shape_60.setTransform(110,108.35);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EEBA33").s().p("AAXAmQhOg9hpgoIBJgZQgBgigEgyIACAAIBZgjIABACQBRAtAlAwIADAEQAxCZgKCjQguhhhbhJg");
	this.shape_61.setTransform(147.7855,129.175);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#1D438A").s().p("AjVD+QgdgkgCgxQgBgyAagmQAggsBRggIAigMQADgyAgguQAdgqAtgeQAngZA1gTQAmgOBDgRIACgDIAEAEIgBABQg/BagfBNIBkAnQgXA5gOA3IgCgBQjEAoiDBNQhBAmgbAeg");
	this.shape_62.setTransform(26.071,93.825);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1D438A").s().p("Ag7AcIAAgCQgEhDgVhEIAIgLQAgALAeATQAUAOAiAdQAcAXAKAWQASAngaBTIgLABQglgwhRgtg");
	this.shape_63.setTransform(153.7224,105.775);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EE3D29").s().p("ADxC8QgNgjgmgTQgThWg3hDQgUgXgQgKIAAABQhSgRhXAOQhWAPhLAqIgBgCIADi5QBSgIApgBQBEgDA1AKQBsASBCBCQASARANAUQAgAwALBHQAHAuAABUIAAAGIABADIgLACg");
	this.shape_64.setTransform(78.375,32.274);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EE3D29").s().p("AhOC9QhGgDhBgfQgZgMgRgLIAegqQBch8B/hcQApgeAkgQQAggOAbgCIATAAQAeABAZANQAmATANAjIAAAHQg3AIgxAYQg0AZgmAmQg4A1grCZIgKACg");
	this.shape_65.setTransform(76.95,63.1917);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EE3D29").s().p("AglEfQAShtABhUIgBgkQgDhOgchLQgdhNgwg8IgEABQgLg2gRgxIAAgBQASgQAYgSIABACQgBABALAJIAbAWQA7AyAoAxQApAxAWAwQA0BoAUD8QAEAxABAjIhJAZQhuAkgcAIg");
	this.shape_66.setTransform(122.95,90.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EE3D29").s().p("AhgDFQhHgcgkgBQAHggAMgrQAtiYA3g2QAngmAygZQAygYA3gIIAKgCQAsgEAnAFIABAAIgIAMIABACIgBABQgXASgTARQg9A3gwBHQhMBzgaCDg");
	this.shape_67.setTransform(91.525,72.6988);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1D438A").s().p("AhTCKQAOgbAKgQIABgDIAnAQQAZiDBOh0QgsCAgMCCIgKASIgvAAIgyADg");
	this.shape_68.setTransform(87.7,83.225);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#070F21").s().p("AnWCzQhYgfhUgnQgwgWgcgPIgBAAQA4hPCKhaQDSiJEAgbIAJgHQgJA1gHBHIC3ACQAAhDAJg5IACAAQEHAOC4B4QBiA/AuBDIAAABQiLCGisBAQimA9jpAKIghABQjEAAj6hag");
	this.shape_69.setTransform(83.3,156.2092);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EE3D29").s().p("AD+CbIAAABQguhDhig/Qi3h3kIgOIgBgBQAJhCAWhDIABAAQBhAGBnAVIgOBTQAcgHBuglQBqAoBOA+QBcBJAtBgQgEBHgQBJIgEACg");
	this.shape_70.setTransform(129.825,140.375);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EE3D29").s().p("AmSBVQB6hpCHhLQB8hGB0gjIAjgLQASgIARgDIACAAIgCAoICXACQABgaAEgkIABAAIApgGQATgEAVgCQgTA+gNBFIgJAGQkAAbjRCIQiKBbg3BQIAAAAIgvAmQgshPgPhbg");
	this.shape_71.setTransform(41.075,141.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat_03, new cjs.Rectangle(-1.9,-1.4,167.1,185.70000000000002), null);


(lib.hat_02 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#070F21").ss(2.6).p("ApmBqIANgHQEoihFYgiQFKggD3Bf");
	this.shape.setTransform(126.5277,67.7612);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#070F21").ss(2.6).p("ALVDEIgBgGQgWifgNhMQgThygPgsQgnhvi2hDQing+jggDQjigDixA8QjDBBg+B5QgZAxgYClQgOBhgbDeQgIBAgIA1");
	this.shape_1.setTransform(137.1492,44.6928);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#070F21").ss(2.6).p("AUvDbQBAgCAVhaQAWhhg5hoQg7hshwhMQhohHiDghQiAgginAAQhOAAiHAJIgBAAQrJA2oIDCQjSBOi6BnQg8AhgmAbQgzAlgiAoQglArgRA0QgTA3AIAzIACAMQAPADAjgGQBGgMBRgzQDNiAFwh9QGHiFEUgXQEYgXGGBZQCpAmB7AwQCAAxAnAsQAtAyAkAHQAAAABZgCg");
	this.shape_2.setTransform(141.8628,103.1645);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D438A").s().p("ApYAsQEoiiFYghQFKghD3BgIAAACIgBAAQrIA1oIDCQAIg2AIg/g");
	this.shape_3.setTransform(126.425,73.3374);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#384663").s().p("AqiBGQAYilAZgyQA+h4DDhCQCxg7DiADQDgADCnA9QC2BDAnBvQAPAsATBxQANBNAWCfQhPAAiHAKIAAgCQj3hglJAhQlZAhkoCjQAbjeAOhhg");
	this.shape_4.setTransform(137.925,38.8428);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#070F21").s().p("A2NGEQgIgzATg3QARg0AlgrQAigoAzglQAmgbA8ghQC6hnDShOQIIjCLJg2IABAAQCHgJBOAAQCnAACAAgQCDAhBoBHQBwBMA7BsQA9BugIA0QgIA0hbBXQhVADglgXQgjgigdgWQjniKkugxQjxgplRAKQkHAIkxBcQjfBFlCCOIiHBKQg9AiglANQgwASgpAAIgOgBg");
	this.shape_5.setTransform(142.4782,102.5505);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat_02, new cjs.Rectangle(-1.2,-1.2,286.2,145.2), null);


(lib.hat_01 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("AgkgkQgOAngIArQgFAYgIAsICEgDIgBh0QABhMAOgh");
	this.shape.setTransform(106.5955,41.9675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6,1).p("AAxhjQg9AYgyAtIgaAaIBGBbQAahAAmgyQAWgeAZgY");
	this.shape_1.setTransform(98.0473,40.8846);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6,1).p("Ak8BSQAzABAvAGQBdALBUAbIAcAJQA1ASAggCIAEAAQAggEAogYIANgJQAegVAZgZQAMgNAOgRQBChWAJho");
	this.shape_2.setTransform(87.325,66.035);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6,1).p("ADUpCQgxgKg2AWQgvASgtAmQgWAUg3A6QgxAyggAZQgeAXgtAXQgOAIhqAvQhKAhgrAeQhTA5g4BiQg0BXgYBuQgUBcgDBxQgCBGAFCLQAkgWA5geQBlg1BagoQD0hqCcgLQAggCAhgBQB0gDBwAPQBXAMBUAZQBCAUA7AcQA9AfAsAlQADg2AAhCQAAiEgPg7QgbhpgPgrQgdhQgpg1QhChVhQgSIADgDIADgE");
	this.shape_3.setTransform(69.2964,92.4786);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#A3250C").ss(4.6).p("AAWDrQAfh2gSh7QgSh7g9hp");
	this.shape_4.setTransform(105.4688,103.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#A3250C").ss(4.6).p("AgRDHQAsjNgMjW");
	this.shape_5.setTransform(89.0273,103.8108);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#A3250C").ss(4.6).p("AiRBzQBZgfBIhAQBIg+AqhU");
	this.shape_6.setTransform(88.9022,65.4857);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#A3250C").ss(4.6).p("Ag3D3QgCh7Adh4QAch4A7hs");
	this.shape_7.setTransform(69.0763,99.3234);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#A3250C").ss(4.6).p("AhWEjQgPiXAxiUQAwiVBkhx");
	this.shape_8.setTransform(48.7156,101.3596);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#A3250C").ss(4.6).p("AiHF5QAGiJAIhEQAMhxAahWQAfhpA3hRQA9hbBTgz");
	this.shape_9.setTransform(32.0244,102.0045);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#A3250C").ss(4.6).p("AjoBlQARATAcAIQAZAHAcgFQAngGA6gkQCWhdB4iG");
	this.shape_10.setTransform(66.85,54.151);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#A3250C").ss(4.6).p("AjVCGQB/gRBthLQBuhKA9hx");
	this.shape_11.setTransform(71.9774,58.9503);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#A3250C").ss(4.6).p("AgkDmQgJjkBUjR");
	this.shape_12.setTransform(79.0233,100.0204);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#A3250C").ss(4.6).p("AgijZIADADQA6BDAACJQAABLgDAmQgFA/gOAx");
	this.shape_13.setTransform(97.7016,102.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#A3250C").ss(4.6).p("AA/EBQAliAgsiVQgtiVhihX");
	this.shape_14.setTransform(113.4808,103.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#A3250C").ss(4.6).p("AhwklQBHAqA1BJQA3BJASBQQAQBGABBjQABA3gGB1");
	this.shape_15.setTransform(120.2393,102.3589);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#A3250C").ss(4.6).p("ABVjvQhrBqgkCCQgeBsARCb");
	this.shape_16.setTransform(59.7962,99.5008);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#A3250C").ss(4.6).p("AB4kwQh/B2g9CqQg9CpAZCs");
	this.shape_17.setTransform(39.3246,102.8372);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#A3250C").ss(4.6).p("Ah+B/IAEgCQBRgpA+hFQA+hEAghV");
	this.shape_18.setTransform(98.2044,67.1469);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#A3250C").ss(4.6).p("AiaB3QBbgkBMhAQBNhAAzhU");
	this.shape_19.setTransform(81.0489,62.6989);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#A3250C").ss(4.6).p("AjUB8QBtgkA2gvQAfgbAug6QArguAqgRQAogRA+ABIAFAA");
	this.shape_20.setTransform(67.9598,52.3472);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#A3250C").ss(4.6).p("Ai3GkQABibAIhOQAMh+AmhjQAshzBThdQBTheBug5");
	this.shape_21.setTransform(26.256,103.4074);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#5F1806").ss(2.6,1).p("AgBgtQgGAbAFAjQACAPAFAO");
	this.shape_22.setTransform(90.7185,32.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#5F1806").ss(2.6,1).p("ACGAkQhEhJhggdQgmgLgmgDIgYB4QAogIAoAAQBBACA7AYQAWAJAXANIADAC");
	this.shape_23.setTransform(95.5765,24.5324);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#5F1806").ss(2.6,1).p("AASgdIgjA7");
	this.shape_24.setTransform(95.9,14.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#5F1806").ss(2.6,1).p("ABCCAQgWg+hahnIgPgQQAwg1AqgTQAQAMAPAq");
	this.shape_25.setTransform(102.8041,15.0739);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#5F1806").ss(2.6,1).p("AgKAkIAEgGQASgegBgj");
	this.shape_26.setTransform(137.2804,29.675);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#5F1806").ss(2.6,1).p("AhIAtQAkg5A5giQAnApANA3");
	this.shape_27.setTransform(131.75,7.5846);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#5F1806").ss(2.6,1).p("AhLgiIAIhNICLABIg/De");
	this.shape_28.setTransform(120.4289,11.1709);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#5F1806").ss(2.6,1).p("AgoBjQgQhgAGhgIADAAIBigEQgNBhgGBBIgDAg");
	this.shape_29.setTransform(113.62,18.0487);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#5F1806").ss(2.6,1).p("AhHBYQBBgcBFgQQAngJAggEIgThzIgqANQheAfhTA5QgOAJgQAN");
	this.shape_30.setTransform(131.8972,20.6201);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#5F1806").ss(2.6,1).p("Ag1AWIBqA8IA1hkIgYgKQgzgVhAgSQgkgKgpgJ");
	this.shape_31.setTransform(127.8224,37.013);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#5F1806").ss(2.6,1).p("Ag+BlIB6gQQgMg3gcgwQgbgvgngk");
	this.shape_32.setTransform(119.8599,41.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CA2C2B").s().p("ArVIcQAEhxAUhcQAYhuAzhYQA5hiBTg4QAqgeBKghQBqgvAPgIQAsgXAfgXQAggZAwgyQA3g6AYgUQArgmAvgSQA3gWAwAKQgFgjAGgcIAAgFQgogBgoAIIAYh5QAmADAlAMIARgCIAjg8IAFgEIgPgQQAwg1ArgTQAQAMAPAqIAAAHIAogCIAAgHIAIhNICMABIgiB4IACAAQAkg6A6giQAnApANA4IABAIIAqgMIATBzQgfAFgoAIIACALQACAjgUAfIgFAOIAYALIg1BlIhrg8IgGADQAdAxAMA2IhFAKQgJBohCBWIgCADQBQASBBBUQAqA1AdBRQAPArAaBpQAQA7AACEQAABCgDA2Qgsglg7gdQAAAAgBgBQAAAAAAgBQgBAAABgBQAAgBAAAAQAIhvACg3QADhfgPhFQgThSgxhHQgmg4gxglQAvAkAjA5QArBEATBVQAQBIACBcQABA5gGBtIgBACQg8gchBgUQhVgZhXgMQhvgPh1ADIhAADQicALj0BqQhbAohkA1Qg6AegkAWQgFiLAChGgAm6ARQgqAvggA1QAhg0AqguQBThZBvg5IgBgGQhuA5hUBdgABalOQgeANghAdQBag3AxgBIAAAAQgrAAghAOg");
	this.shape_33.setTransform(72.6214,74.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat_01, new cjs.Rectangle(-2.1,-1.2,148.79999999999998,153.1), null);


(lib.hand = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AhWBiQASBnAvBcIAFAIQAbA0AhgFQAegEgNg7QgHgkgWgjQgOgUgDgZQgDgYAIgXQAJgaARgMQATgNAQARQAGAHAVAsQARAhASAFQAPAEANgPQAMgOgCgRQgBgPgJgQQgFgKgOgSQhNhpgKhgQgEgkAPhpQAEgegOgWQgNgUgYgGQg4gPgoA9QghA0gZBPQgNAngFAdQgNAngOBbQgPBlAHAbQAIAeAYAcQAYAeAcAJ");
	this.shape.setTransform(18.1444,34.8499);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6).p("Ag1hZQABAkAPAiQAPAhAZAZQAaAZAhAN");
	this.shape_1.setTransform(9.5133,56.5036);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FAA86E","#FBDCB0"],[0,1],1.3,26.8,-2,-6.5).s().p("AgQEtIgFgJIgCABQghgMgagaIgMABQgcgJgYgeQgYgcgIgfQgHgbAPhkQAOhbANgnQAFgdANgnQAZhPAhg0QAog9A4AOQAYAHANAUQAOAWgEAeQgPBpAEAkQAKBfBNBpQAOATAFAJQAJARABAPQACARgMAOQgNAPgPgFQgSgEgRgiQgVgrgGgHQgQgRgTANQgRAMgJAZQgIAYADAYQADAZAOAUQAWAjAHAkQANA7geAEIgGAAQgeAAgYgvg");
	this.shape_2.setTransform(18.1444,34.8499);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(-5.6,-4.6,43.1,75.6), null);


(lib.hair_middle_right_gray = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#384663").ss(2.6).p("AgCi+Qh+BLg9BPQgnAygSA5QgTA+AKA6QAFAeAOAVQARAZAZAEQAhAFArgkQAfgZAxg0QA1g4AZgWQAHgGBPg+QAzgoAcgiQAjgrAOg8QAShLgsgaQgogYhQAiQgjAPhLAug");
	this.shape.setTransform(25.9618,27.1562);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CED6CB").s().p("AjCEPQgZgEgRgZQgOgVgFgeQgKg6ATg+QASg5AngyQA9hPB+hLQBLguAjgPQBQgiAoAYQAsAagSBLQgOA8gjArQgcAigzAoIhWBEQgZAWg1A4QgxA0gfAZQglAggeAAIgJgBg");
	this.shape_1.setTransform(25.9618,27.1562);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_middle_right_gray, new cjs.Rectangle(-3.7,-1.2,64,63.800000000000004), null);


(lib.hair_middle_right_brown_girl = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("AB/gzQAQASAHAYQAHAXgDAYQgDAYgNAVQgNAVgUAOQAWAjgEAsQgEArgcAfQgFAHgBADQgBACACALQAHAXgDAZQgEAZgOAUQgSAbgbAGQgaAGgagRQgXgOgTgaQgegqgCgoQgCgXAJgVQAKgWASgLQgxgrgXg/QgYg+AIg/QAGg6AhgVQglg5AIhnQAEhEAagjQAQgVAdgRQArgZAoAHQAWADASAPQASAOAFAV");
	this.shape.setTransform(15.5083,43.2267);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A3250C").s().p("AghGWQgNgLgIgMQgOgEgKgNQgUgbACguQACgvAYgeQgJgSgHgXQgbgkgIgRQg+iOBFg8QgJgfgCgmIAAgHQgHgkgDggQgHhNAdghIAFgNQAOggAbgWQAegYAigBQASAAAPAIQAOAIAGAOQAOAFAJAMQAHAIALAXQAEALAKAQQAMATAEAHQAXAtgCA6QgCAugSA6QASAkAGAYQAJAhgFAfQgKA4guAfQAXAngDArQgEArgfAcQAEAjgCAdQAAAJgFAJQgEAVgIAPQgQAegdACIgEABQgYAAgYgVg");
	this.shape_1.setTransform(15.379,42.6569);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_middle_right_brown_girl, new cjs.Rectangle(-3.8,-0.2,36.099999999999994,93.4), null);


(lib.hair_middle_right_brown = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AAOjQQgUAVgNAcQgNAcgBAeQglgCgjARQgkAQgWAeQgWAegGAlQgHAmAMAkQgXAKgNAZQgMAZAFAZQAFAZAVASQAVASAaABQArABAigoQAXgbASg0QAvABAvgQQAugRAlggQAlgfAXgrQAYgrAGgwQAIg7gXgoQgMgXgXgOQgYgOgYACQgWADgaAGQgzANgSARg");
	this.shape.setTransform(23.1568,24.8152);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A3250C").s().p("AicD4QgagBgVgSQgVgSgFgZQgFgZAMgZQANgZAXgKQgMgkAHgmQAGglAWgeQAWgeAkgQQAjgRAlACQABgeANgcQANgcAUgVQASgRAzgNQAagGAWgDQAYgCAYAOQAXAOAMAXQAXAogIA7QgGAwgYArQgXArglAfQglAgguARQgvAQgvgBQgSA0gXAbQghAngpAAIgDAAg");
	this.shape_1.setTransform(23.1568,24.8152);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_middle_right_brown, new cjs.Rectangle(-1.8,-1.2,49.4,52.1), null);


(lib.hair_middle_right_blond_girl = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("AhElNQgvDfAgDbQASB7AnBkQAagIAbgSQA4glANg2");
	this.shape.setTransform(10.9519,33.9894);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC85B").s().p("AANDSQgKgJgDgUIgFghIgCgOIAAgBQgVhWgDg9QgFhRAXhCQACgXAFgWQABgFAFABQADAAABAEIAIAZQAIACAEAHQAFAHgCAJIgEAZQAJA1ABBNQABAqgBBWQABAKgHAGQgHAFgJAAQABAqAKAKQAFAFgFAFQgCACgDAAQgCAAgCgCg");
	this.shape_1.setTransform(3.2958,30.6475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBC85B").s().p("AiDCEQgNhmADhlIAAggIgCgNIgKhSQgFgxACgiIAQg4IABgCQADgBACACQAKgFALACQALgEAMACQAbACAaAYQAMALAcAiQBNBdAcAnQAXAgAWApQAFAmAAAkQgWCKg7BWQgaAkgmAdQgdAQghANIgnAUQgZhOgSiHg");
	this.shape_2.setTransform(17.5733,34.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_middle_right_blond_girl, new cjs.Rectangle(0,-0.7,33.4,73.4), null);


(lib.hair_middle_right_blond = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("ADfg3QAhgmAKgeQAPgtgVgiQgLgRgVgKQgTgKgWgBQgVgBgfAFQgdAFgVAIQiCAyiDDFQgxBLgcBAQgaA/ALALQAXAYC6hpQDBhuBZhlg");
	this.shape.setTransform(27.2262,24.1399);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F49C3B").s().p("AkMDtQgLgLAag/QAchAAxhLQCDjFCCgyQAVgIAdgFQAfgFAVABQAWABATAKQAVAKALARQAVAigPAtQgKAeghAmQhZBljBBuQiXBWgsAAQgKAAgEgFg");
	this.shape_1.setTransform(27.2262,24.1399);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_middle_right_blond, new cjs.Rectangle(-1.2,-1.2,62.300000000000004,50.800000000000004), null);


(lib.hair_middle_left_gray = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#384663").ss(2.6).p("AA8DOQAzAnAlAGQAaAFAYgIQAagJAMgVQAMgUgEgeQgCgVgLgfQgghYggg3QgrhLg3gsQhJg6hKgeQhrgqgtA2QgnAvBEBvQArBGBCBEQBABEBYBAg");
	this.shape.setTransform(24.5254,25.3067);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CED6CB").s().p("ACUD7QglgGgzgnQhYhAhAhEQhChEgrhGQhEhvAngvQAtg2BrAqQBKAeBJA6QA3AsArBLQAgA3AgBYQALAfACAVQAEAegMAUQgMAVgaAJQgPAFgQAAQgJAAgKgCg");
	this.shape_1.setTransform(24.5254,25.3067);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_middle_left_gray, new cjs.Rectangle(-3.3,-7.6,60,62.1), null);


(lib.hair_middle_left_brown_girl = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("Ah+gzQgQASgHAYQgIAXAEAYQADAYANAVQANAVAUAOQgWAjADAsQAEArAcAfQAHAHAAADQABAEgDAJQgHAXAEAZQAEAZAOAUQATAbAaAGQAaAGAagRQAXgOASgaQAfgqACgoQABgXgJgVQgJgWgSgLQAwgrAYg/QAYg+gIg/QgHg6ghgVQAlg5gHhnQgFhFgagiQgQgVgcgRQgsgZgnAHQgXADgRAPQgTAOgFAV");
	this.shape.setTransform(15.5086,43.2267);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A3250C").s().p("AgSGqQgdgCgQgeQgIgPgEgVQgFgJAAgJQgCgdAEgjQgfgcgEgrQgDgrAXgnQgugfgJg4QgGgfAJghQAHgYARgkQgnh+AohRIAQgaQAKgQAFgLQAIgVAJgKQAKgMANgFQAGgOAOgIQAPgIASAAQAiABAeAYQAbAWAPAgIAEANQAdAhgHBNQgBAbgJApIAAAHQgCAmgJAfQBFA8g+COQgIARgbAkQgGAXgKASQAYAeADAvQACAugVAbQgJAMgPAFQgKAOgLAJQgYAVgYAAIgEgBg");
	this.shape_1.setTransform(15.631,42.6569);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_middle_left_brown_girl, new cjs.Rectangle(-1.2,-0.2,36.6,86.9), null);


(lib.hair_middle_left_brown = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AgNjQQAVAVAMAcQANAcABAeQAlgCAjARQAjAQAXAeQAWAeAHAlQAGAngMAjQAXALANAYQAMAZgFAZQgFAZgVASQgVASgaABQgVAAgWgKQgTgLgPgSQgWgZgTg2QgwABgugQQgugRglgfQglgggYgqQgXgsgGgwQgIg7AXgoQANgXAWgOQAYgOAYADIAwAJQAzAMASARg");
	this.shape.setTransform(23.1432,24.7822);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A3250C").s().p("AByDuQgTgLgPgSQgWgZgTg2QgwABgugQQgugRglgfQglgggYgqQgXgsgGgwQgIg7AXgoQANgXAWgOQAYgOAYADIAwAJQAzAMASARQAVAVAMAcQANAcABAeQAlgCAjARQAjAQAXAeQAWAeAHAlQAGAngMAjQAXALANAYQAMAZgFAZQgFAZgVASQgVASgaABIgCAAQgUAAgVgKg");
	this.shape_1.setTransform(23.1432,24.7822);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_middle_left_brown, new cjs.Rectangle(-1.2,-6.8,48.800000000000004,63), null);


(lib.hair_middle_left_blond_girl = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("ABAlNQAvDgggDbQgSB5gnBlQgVAGgXgPQgygdgThj");
	this.shape.setTransform(22.8731,33.9756);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC85B").s().p("AAwFFQgpgQgVgNQgmgcgaglQg8hXgViJQAAgqAFgfQAUgnAZgjQAegqBLhaQAdgjALgKQAagXAbgDQANgBAKADQAJgCAMAFQAEgDAFACQAFACABAFIABAGQAQATgIAVIgCAGQACAigFAwIgLBSIgBANIAAAgQADBmgNBmQgSCEgaBQQgXgOgPgGg");
	this.shape_1.setTransform(15.9833,34.4875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBC85B").s().p("AAECiQgBAAAAAAQgBAAAAgBQAAAAAAgBQgBAAABgBQAGhRgKhdIgRhIQgLgtAJgZQAAgBAAgBQABAAAAgBQAAAAABAAQAAgBABAAQADgBACACQAXATAJAvQACAOAEA/QAGBPgXBiQgBABAAAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgBAAg");
	this.shape_2.setTransform(29.1379,27.6375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_middle_left_blond_girl, new cjs.Rectangle(0,-0.7,33.4,69.7), null);


(lib.hair_middle_left_blond = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("Ajeg3QghgmgLgeQgGgUABgUQABgWAKgRQALgRAVgKQATgKAXgBQAVgBAfAFQAdAFAVAIQCBAyCDDFQAyBLAbBAQAbA/gLALQgYAYi5hpQjBhuhZhlg");
	this.shape.setTransform(27.2047,24.1399);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F49C3B").s().p("AA8CcQjBhuhZhlQghgmgLgeQgGgUABgUQABgWAKgRQALgRAVgKQATgKAXgBQAVgBAfAFQAdAFAVAIQCBAyCDDFQAyBLAbBAQAbA/gLALQgEAFgKAAQgsAAiXhWg");
	this.shape_1.setTransform(27.2047,24.1399);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_middle_left_blond, new cjs.Rectangle(-4.3,-7.5,60,57.1), null);


(lib.hair_front_gray = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#384663").ss(2.6).p("AnljaQhqBKhZBhQhUBbAWBEQAJAaAXATQAWATAcAHQAwANA/gTQBHgWBIg5QAygnBGhKQBVhcAegcQBDhABBghQANgFAFgBQAPgBAKAPQAKAOgDARQgCAOgJAPQgGAJgOAQQh+CPgWCBQgFAhAHAbQAIAfAZALQAQAHAUgFQARgFAPgMQAMgKANgQQAPgUAHgKQAkgvAxggQAyghA4gMQA6gMA6APQA8APAqAmQAJAIAUAWQATAUALAJQAoAhA7ALQAzAJA7gKQAZgFAOgHQAcgOANghQAMgfgGghQgFgagkgkQgrgkgPgQQgTgVgrhFQgegxgxgf");
	this.shape.setTransform(102.2079,36.9723);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#384663").ss(2.6).p("ADlkIQgxANgrAWQgkASgtAgQgTANhLAnQg9AggeAeQguAugQAaQgaArgBA8QgBAXAMAqQAMArAOASQAfApBkgQQAjgGBJgjQBJgjAKgO");
	this.shape_1.setTransform(21.9221,37.3746);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CED6CB").s().p("AsiE4QgjgJgPgdQgKgMgIgUQgOglAFguQAGgxAWgrQAlhHBYgzIA1gdIARgGIAHgEIAagOQAqgaAzgdQAggTAVgJIAMgGQAKgLALgHQAMgJAUgIQAZgKAhgIQBdgXCcgZIBGgJQAvgGANgBQA4gDBCAJIAfADIANgBQAMgBAKAIQAiAIAXALQAmAFA1AaQAbAEAZAHIBKAUQAvAOAeASIAgATIAKAGQARADALAHQAJAFAPANQARAOASATQAPAPATAXIASAYQAKANADANIBSBfQAbAdAKAYQALAbgRASQAAAMgHANQgMAXgeAKQgWAHgpAFIgMABIgDAAIAAAAQgHAAgGgCIgHgCIgDABQgTAGgcgOIgOgGQgPAAgNgHIgEgDQgOABgJgHIgRgNQgHgDgGgFIgHgHQgGgGgEgJIgVgaIgagXQgXgHgWgSIgNgCIgEAAQgZgCgJgDQgMgEgJgIIgkgFIgNAAIgDABQAOgEgRADIgxAKIggAKIgRAGIgHADQgWAKgjATIgHAHIgEADIhfCCQgKANgOAEQgOAEgPgHIgDgDIgEAAQgYgFgMgYQgKgVACgbQADgkAIggQAOg2Aig1IAhgtIAhguQAQgWANgXIAKgUQAEgHgEAGIADgHIABgEIADgVIAAgGIAAgCIAAAAIgFgGIgJgFIAEABQgBgBgKgCIgCAAIgUAAQgLAAgKgHIgnAeIgBABIgrApIgsAqQghAhgyA3QgGAIgMACQg0A5g6AzQgmAigcAWIgVAQIhHAcIgGgCIgQAIIgQABQgUAAgOAEIgEgDQgSACgSgFQgJgDgHgHIgOAKQgFAFgLABQgfAXgbAMQgfAPgUAEIgQADQgPAFgRACQgQADgPAAQgSAAgQgEg");
	this.shape_2.setTransform(89.077,31.5843);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_front_gray, new cjs.Rectangle(-1.2,0,179.39999999999998,71.8), null);


(lib.hair_front_brown_girl = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("AhKDnQgZgNgJgyQgNhKAOgwQAIgfAUgWQAVgZAcgJQgKghAHgkQAHgkAVgbQAUgbAhgQQAggPAjAB");
	this.shape.setTransform(11.5311,48.9219);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6,1).p("AlzjTQAFATANAQQAOAQASAHQATAIAVgCQAUgCARgLQgMAdAGAiQAHAhAWAXQAXAXAhAHQAhAHAegMQADAsALAsQAHAXAIAKQAMAPAeAIQAtAOAzgBQgGAeAGAaQAFAeATATQAUAVAfABQAgAAAPgWQAEAnAEAUQAHAgAOAWQAQAaAcAMQAeANAagLQAqgSAKhEQAHgmgHggQgHglgZgVQAXgqACgzQABgygUgsQgTgmgagFQAPgkAFgVQAJgggDgaQgEgfgXgWQgYgYgcAEQAMgagBgdQgBgegOgZQgOgYgZgRQgYgQgdgD");
	this.shape_1.setTransform(109.4625,56.1271);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6,1).p("AkYA1QgeAcgTAlQgTAlgGApQgIA/AbApQAOAVATAJQAVAJAZgIQAYgHAOgUQANgUACgZQABgYgJgXQAgAMAjgIQAjgIAYgZQATgVADg4IgBgzIAYAMQAaALAOgCQAegDAcgQQAbgQASgYQASgYAHgfQAHgfgGgeQATAPAaACQAZADAZgKQAmgPAnguQAngtAMgqQAHgZgDgaQgEgagOgU");
	this.shape_2.setTransform(36.7786,61.3579);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A3250C").s().p("AJDG0QgYgugGg+QgRAQgUAEQgqAHgXgoQgWgjABg1QgJgBgIgDQgQgFgIgHQgSAAgRgGIgEAAQgpgBgVgrQgMgYgKg4IgDgTQgZAFgcgFQgTAMgagPQgWgMgLgWQgMgXABgYQgHgSAAgRQgBgLAEgOQgVALgbgEQgygIgUg5IgCgBQgFgCgHgFQgEAPgFAPQgQBHgxArQgQATgRAMQguAkgogNQgTgGgJgLQAAA9gkA1QgSAbgdAPQgeAQghAAQgZgBgUgLQAGAdgIAhQgGAfgQAZQgQAYgbANQggAPgRgWQgMAHgMAAQgNgBgIgHIgBACQAVAcgLAoQgMApgjAHQgKACgKgDQgKADgKgGQgGgEgHgKQgVgNgJgZQgEgKABgPIAAgDQAFg9AGgaQgBgDABgEQAEgSAIgQIAEgJQgYgWgJgkQgEgSgFg0QgBgHADgIIAAgBQgBgUAIgVQANgqAgghQALgKAQABIABgCIAFgDQgMgLgCgRQgCgrAYgmQAcg9A0gHIAGgDQAWgIASACQAHgxAogiQAnghA6gBQARgyAygmQAwgjA2gIQApgGAqAMQAoALAhAZQAfgpBEgJQA/gJAyAUQAwAUAcAnQAigQA4AKQAsAHAnASQAvAVAbAxQA+gEAlA4QAmA3gaA9QAPADAPAQIAIAFQAIgDAEAHQAYAqgCAwQAAAPgEANQgFASgLAEIgFARQAXAAARAdQAOAYADAcQAJBLgVA9QAhAYACA+QACA5gVAkQgNAWgRAOQgWAUgTgDIgIABQgeAAgZgvg");
	this.shape_3.setTransform(73.8694,48.2644);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_front_brown_girl, new cjs.Rectangle(-4.7,0,158,103.4), null);


(lib.hair_front_brown = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AnNjOQhcAJhlBCQhbA7hABRQgsgYggAPQgZANgkAwQghAsAKA6QAJA7AuAcQAtAdA5gTQA5gUAQg0QAMAwArAfQArAeAwgFQAxgEAlgnQAkgmACgxQAiAmA1AIQA2AIArgbQArgaARg0QARgzgTgvQAuAiA6AHQA7AHA1gVQAzgWAlgtQAlguAKg4QAWAaAgAOQAhAOAigDQAigCAegSQAegSASgdQgZAqADAzQAEA0AeAlQAfAnAxAPQAxAQAvgPQgOAjAKAmQAJAnAdAYQAdAXAoADQAnACAfgUQAPAxAyAbQAxAbAxgQQAxgPAagyQAagygQgxQgRg0hfhAQhihBgvAQQANgdgTgjQgcgogOgUQgFgHghhOQgZg8gigWQgqgbg1gEQg0gDguAU");
	this.shape.setTransform(97.501,43.3071);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A3250C").s().p("AM7F0QgLADgKgCQgagCgVgQQgVgPgMgZIgHgQQgtAXgsgLQgcgIgVgTQgVgTgKgaQgHgTABgVQABgVAIgSIgBgJQgeAJgcgDQgkgGgtghQgagUgJgQQgQgPgIgRQgXgyAJg3QADgSADgFIABgDIgJADQgeAoglALQgnAMgrgOQgXgIgPgKQgOgKgHgMIgBgCIgCACIgDAJQAGAJAAALQAAALgGALIgOASIgEAFIAAgBIgFAHIgKAJQgMALgkAbQgdAWgTAIIgfALQgeAQgXAEQgWAFgQgEQgQgDgRgPIgDgDIgIgCQgZgGgRgLIgBACQgBAIgFALQADAugTAlQgLAjgfAUQgUALgSAEIgXADIgNACQg+AJgegfQgHgHgEgHQgKgBgKgFIgBAHQgCAkgNAVQgNAUgZATQgQALgaAKQgKAEgUADQgOABgHgCIgBgBIACAAIgDAAIABAAIgHgBQgZgFgZgUQgZgUgCgVQgQgNgLgOQgLANgKAKQgTAUgdASQgdATgdgMQgWACgRgIQgfgMgTgYQgUgaABghQAAgXALgiQAKgjAKgOQAbgpAcgFIAdgFQASgDAMgBQAKAAgEADQgGAGAKAHIADADQAAgHAPgKQAQgLACgFQAFgPAbgQIAqgUQAHgEAGAAQApg6BKgkQAwgXAggFIAVgCIABAAIAHgHQABgMAEgMQALgjAagXQAugrBHgSQA+gQA+AMQASAEAQAGQAJgPAMgLQAYgWAjgJQAggJAlAEQA2ggBBgDQBEgCA6AhIAFADQAlgCAiAQQAcANAWAbIALAPQAogFAvAKIAPAEIABAAQAQgDAUADQAXAFAXANQA/AnAYBYIAEAiQALAGAFAMIACAGQALACAFAKQALAWAMAdQAMAhACAQIAiAIQAWAFAMAEIAUAIQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAIAFACIAAACIAKAGQAQAKALAKIAhAfQA/AjAKA8QAIApgUAfQgDAFgIAJQgGAOgGALQgGAKgLADQgKAJgLAEQgUAJgUAAQgOAAgOgFg");
	this.shape_1.setTransform(97.0267,37.6983);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_front_brown, new cjs.Rectangle(-5.8,0,201.8,81.7), null);


(lib.hair_front_blond_girl = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("ABNEnQgBiZgoiWQgmiXhKiH");
	this.shape.setTransform(130.525,64.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6,1).p("AC4EsQgoiuhfibQhfibiJhz");
	this.shape_1.setTransform(119.8,65.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6,1).p("AihFyQgDjTBVjAQBTi9CeiS");
	this.shape_2.setTransform(20.5931,55.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6,1).p("AkEFnQA8jgCGi4QCFi5DCh8");
	this.shape_3.setTransform(30.675,57.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6,1).p("AlolLQApBhBeBZQA/A8CABXQCWBpAxAoQBrBWA3BYQATgeAKhJQATiRgvjXQgKgsgIgWQgMgkgSgY");
	this.shape_4.setTransform(105.2235,62.6819);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.6,1).p("AkeiAQg7B2gHCpQgGCQAeB7QC4h1CwimQFhlMgjj0");
	this.shape_5.setTransform(36.7536,51.3131);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FBC85B").s().p("AqPHMQgNgIgIgMQgJgKgEgPQgFgPADgPIADgOQgGgSAEgTQgQgVAEgdQAUiiAYhSQAlh/BMhaQBPhdB2hIQBphBCAgsQAQgGARAAQAbgHAqAFQAgAAAlAGIABAAQBSAJBUAaQCqA1BaBfQAVAPATARQATAOAXAaQAqAjAYBLQAWAsAIArQAdBOAJBrQAGBFgBB5QAAAGgFAHIgDAGIAEAJQALAYgUARQgVARgTgUIgxg0IgwgzQgKgEgGgJIgGgKIgVgUQgOgNgkgbQghgZgQgQQgpAGgZgfIgSgTIgGgEQABACgHgDQgggMgSgRIgVgfIgIgFQgQgJgKgIQgcgTgQgXQghgYgbgZQhmhmgShTQgYAwgiAyQgdAwgVAdQgeApgfAZQg/BSgqArIgyA1QggAggcAJQgmAmgaAWQgnAigjARQAAAHgBAHIgBAEQgnAOg8AsIgNAJg");
	this.shape_6.setTransform(70.4181,46.2337);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_front_blond_girl, new cjs.Rectangle(0,0,142.7,97.6), null);


(lib.hair_front_blond = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("AIMkGQA6AtBBBOQAmAtBJBcQBBBNA6AwQBKA8BNAXQgcAog2ATQgoAOhAABQhyAChhglQg4gWgqgfQg3gogth8IgjhyQg+CCh8BWQh8BWiQAMQBahjA2h/QA2h9AIiGQhABOhWBbQiqC1hrBAQjLB5i5AGIgoAAQhggEhVglQhagng7hEQBQgxCghsQCdhqBTgz");
	this.shape.setTransform(103.2425,39.7788);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCC85B").s().p("Aq8FVQhhgEhVglQhagng7hEQBQgxCghtQCdhpBTgzQEhivDygjQCTgVCLAdQCVAgBtBWQA6AtBBBOQAmAtBKBbQBABOA6AwQBKA8BNAXQgbAog3ATQgoAOhAABQhyAChhglQg4gWgqgfQg3gogth8IgjhyQg+CCh8BWQh8BWiPAMQBZhjA2h/QA2h9AIiGQhABOhWBbQiqC1hrBAQjLB5i5AGg");
	this.shape_1.setTransform(103.2,34.0968);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_front_blond, new cjs.Rectangle(-1.8,0,210.20000000000002,71.6), null);


(lib.hair_bottom_brown_girl_straight = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("ADvqhQAvADAnAgQAnAfANAuQBMALA8A5QA7A5APBMQAvALAgArQAgAqgCAxQAcAWAQAgQAQAhABAjQABAjgOAiQgOAggaAYQAfAvgOA9QgNA8gvAfQAKAZgDAcQgCAdgPAWQgPAXgZAOQgYAOgbABQAHAogOAnQgNAogeAcQgdAcgpAKQgpAKgogKQgQAvgxAYQgxAYgvgQQggAogtAYQguAYgyAEIgwAAQgygEgugYQgugYgggoQgvAQgxgYQgxgYgQgvQgoAKgogKQgpgKgegcQgegcgNgoQgNgnAHgoQgcgBgYgOQgZgOgPgXQgPgWgCgdQgDgcAKgZQgvgfgNg8QgNg9AegvQgagYgOggQgOgiABgjQABgjAQghQARggAbgWQgCgxAggqQAggrAwgLQAOhMA8g5QA7g5BMgLQANguAngfQAoggAvgDIBDghQBUgiBSgCQBQgCBaAjQAsASAdASg");
	this.shape.setTransform(75.725,74.2696);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A3250C").s().p("AAJLXIAAAAQgpAGgngJQgqgJgggWQgYgTgVgeQgwAQg0gdQgzgcgSgxQg0APgvgTQgMAHgNgGQgcgMgSgXQgTgWgFgfIgBgLQgGgQgDgMQgGgZAAgTIgJgDQgugRgZguQgZgvASgoQgpgbgPgpQgLgcACgfQADggARgXIgGgRIgRgZQgXgrgBgwQgBg0AYgoQANgVATgSQABgkATgfQAOgXAWgSQAXgUAagGQAXhXA/g7QBAg8A1gBIADAAQAehNAzgVQAOgSAZgBIAeAAQAugdA/gPQA4gNA6gBQA/gBAdAMIABAAQAKACAMAEQAxAHAhAWIAGAEQAKAFANAJQAFgFAIAAQAigEAkAWQAfATAXAfQASAaALAcQAWAEASAJQAxAQAoAtIAOAPQAaAVAPAvIAKAdQAWAAASANQAUAOAJAdIACAIQALAOAGAPQALAYADAjIAEAAQAPgBAJAOQAJAPAEAKIAHAPQAaAggEBCQgBAPgMAFQgKAugZAbQATAXAEAgQADAegMAdQgZA8gjAQQAKAhgHAeQgGAcgXAdQgTAZgKAKQgTARgTADQgDA2glA1QgWAfgYASQgbAUgiAEQguAGgagNQgXArgmAYQgtAdgngRIgSAPQgfAYgpARIgQAKQgbASgNAEQgJADgIAAQgOAAgMgJg");
	this.shape_1.setTransform(76.1997,74.8552);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_bottom_brown_girl_straight, new cjs.Rectangle(-5.1,-1.2,157.79999999999998,154), null);


(lib.hair_bottom_brown_girl_braids = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("ABUAfQhUAThRAkQgDhRAChfQBOAGBEAp");
	this.shape.setTransform(135.6229,87.6702);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6,1).p("AhegQQARgGATgPQALgJAVgSQApgjAiACQAHAAAEADQADACAFAIQAUAqAFAvQAFAvgLAtQhUgHhPgaQgIgDABgE");
	this.shape_1.setTransform(159.1508,83.1592);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6,1).p("AgSAoQgHAAgCgBQgCgCgCgGIgPg2QgBgDABgCQABgCAEgBQAkgIAnAAQAFAAAGAdQAFAcgEAGQgGALgXADQgaABgJABg");
	this.shape_2.setTransform(146.4471,86.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6,1).p("AgEA5QgJgOgDgRQgDgSAFgPQADgMALgNQAOgRAFgH");
	this.shape_3.setTransform(141.3938,95.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6,1).p("ABtgEQAMAUgHAcQgFAZgRAWQgQAUgZAJQgZAJgZgFQgQgEgUgNQgbgSgUgaQgTgbgJgfQgQg6AbgnQAPgWAagHQAbgJAVAN");
	this.shape_4.setTransform(149.6197,113.7823);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.6,1).p("AggiFQAfANAYAXQAZAYAPAeQAbA1gPAyQgHAbgUATQgUAVgaAFQgbAGgWgNQgLgIgIgLQgSgYAFgX");
	this.shape_5.setTransform(154.7035,103.6306);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6,1).p("AJDCzQglgPglgpQgkgngCgYQgBgSg2gKQhCgMgSgNQghgWgSggQgUgkAFgkQgqAKgtgKQgqgJgmgaQgkgYg7AAQg6AAgkAYQgmAagqAJQgtAKgpgKQAEAkgUAkQgSAgghAWQgcAUgmANQgcAKgtAKQgFAtgdAbQgTARg7Ae");
	this.shape_6.setTransform(84.325,65.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F1806").ss(2.6,1).p("AKLGaQAagfAKgPQAQgbADgbQAEgagSglIgSgfQASghAQgpQAghTgIgsQgKg0gsgkQguglg0AHQgUhqhEg2QgngdgvgGQgzgFgmAXQhZhXhjgbQg1gPhKAAQhJAAg1APQhiAbhaBXQgmgXgyAFQgwAGgmAdQhFA2gUBqQg5gHgjAYQgnAcgVBJQgRBAAhBCQARAiASAeQgBAIgOAhQgOAjAEAZQADAbAQAbQAJAOAbAg");
	this.shape_7.setTransform(84.1018,41.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6,1).p("AhTAfQBUATBRAkQAEhbgDhVQhOAGhEAp");
	this.shape_8.setTransform(33.0393,87.6705);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5F1806").ss(2.6,1).p("ABfgQQgQgGgUgPQgBgBgfgaQgpgjgiACQgHAAgEADQgDACgFAIQgUAqgFAvQgFAvALAtQBVgHBOgaQAIgCgBgF");
	this.shape_9.setTransform(9.4992,83.1587);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6,1).p("AATAoQAHAAACgBQACgBACgHIAPg2QABgDgBgCQgBgCgEgBQgkgIgnAAQgFAAgFAdQgGAcAEAGQAGALAXADQANACAWAAg");
	this.shape_10.setTransform(22.2069,86.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5F1806").ss(2.6,1).p("AAKA5QAKgOACgRQADgSgFgPQgEgQgMgNQgLgNgQgH");
	this.shape_11.setTransform(26.7563,95.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(2.6,1).p("AhtgEQgLAUAGAcQAGAZARAWQAPAUAZAJQAZAJAZgFQARgEAUgNQAbgSATgaQAUgbAJgfQAQg5gcgoQgPgWgZgHQgbgJgWAN");
	this.shape_12.setTransform(19.0519,113.7823);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5F1806").ss(2.6,1).p("AAhiFQgfANgZAXQgZAYgPAeQgbA0APAzQAIAbATATQAVAVAZAFQAbAGAXgNQALgIAIgLQASgYgFgX");
	this.shape_13.setTransform(13.9615,103.6306);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#377C8B").s().p("AjIBbQgIhPAIgvQADgPAPgCQAPgCAJAKQANgCAUAGIAgALQAbAKAMAUQAQgLAWgFQAXgHARAGQANgSAlgWQAEgCAlghQAYgUAXACQATABABASIABAKQAKAIgBAOIAAAQQARArgGAjIABAFQADALgHAJQgHAKgMgBQgQAAgcgFQgigHgLgBQgTgCgJgDQgOgEgKgIIgCgBQgoAIgigEIgJACIAAAFQAAAIgFAGQgFAHgIACIgPAFQgDgEgFgBQgLAAgQAEIgaAIQghALgOAMIgDADQgJgIgCgMg");
	this.shape_14.setTransform(147.664,84.7411);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#377C8B").s().p("ACeBoQgJgCglgPIgbgKQgRgIgKgIIgggEQgWgCgPgGQgPAGgZABQgHADgLACIgUAEQguAKgkAPQgLAEgJgIQgJgIgBgLQgEg1AKg/QAAgXAIgRQAKgSATADQASACAIARQALAAAGADQA3AXAhA9IABACQAGgGAGgCQAegJAiAQQAHgOANgIQATgLAegFIAygHQAKgBAHAFQAHAFAAAJQABAfAEAgIAEAaQACARgFAJQgHAPgUAAIgOgCg");
	this.shape_15.setTransform(21.3082,83.8353);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A3250C").s().p("AgdCxQgMgGgKgNQgLgMgEgOIgBgCQgjgfgMglQgOgqATgmQAJgQAHgKQgIgMgEgLQgJgYAEgYQAEgZARgRQAJgJAOgEQAPgFAMAFIABAAQABgGAGgCQAcgOAjAWQAhAUARAjQATASAKAZQALAagBAaQgCAmgVAWIACAGQAKA9gyAxQgUATgWAHQgKADgJAAQgOAAgOgIg");
	this.shape_16.setTransform(150.4118,108.1957);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A3250C").s().p("AgxC4QgggKgOgmQgHgIgEgIQgKgTAGgYIAEgJIAAgOIABgCQgcg5ARg1QAFgOAIgKIABgDQAMgfAUgYQAZgfAbAAQASgRAhADQAiACAPASQANAPgBAWQgBAMgIAbIgKAkQAmAZAIA1QAJA3gjAbIgHAFQgLAXgRARQgSAUgUAHQgNAEgLgEQgOAHgPAAQgJAAgJgCg");
	this.shape_17.setTransform(19.2583,108.2664);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A3250C").s().p("AI3GWQgVgJgSgXQgXgdgbgtIgWgiQgYgEgQgJQg7gBgughQgygkgJg4IgBgNQg5ADgtgRQgOgFgcgPQgcgPgPgFIgXgIQgRgBgaACIgrADQgYAPgZAMQgzAZgNAFQgmAOgfgEQgYgDgPgIQgCAWgFARQgOAtgVAQQgXAkgcASQghAVgkgIIAAAAQgUAKgPACIgMAfQgHARgLAMQgMAPgOAAQgXAcgeAJQgaAHgWgDQgagEgPgSQgQgSgLgiQgPgbADghQAAgMAGgIQAEgqAUgUQgdgXgPgsQgMglgBgsQgCg7AbgqQAeguA4gQQAYgHAZAGQAHgqATgdQAqg/A1gfQBDgnA6AiIAIAGQAvg0BvgoIBAgWQAngLAcAEQA5gNBDAbQAqgBAgALQA0AUAeAlQAPgGAnAyIADAEQAKgHAPgEIABgBQATgZAiAEQAcAEAgAWQAbACAZAbQAYAbAJAgQAXApAKAvQAcgCAQAPQADgCAFABQAdAFAVAXIAIADQAcAMAMArQALAmgEAzIgYAiQgHAqgWAkIACAMQABAEAEAEIgKALQAaAPADAlQADAcgLAlQgFATgQAUQgUAZgQgJQgFAFgNAHQgMAFgMAAQgNAAgNgFg");
	this.shape_18.setTransform(84.5085,41.6164);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_bottom_brown_girl_braids, new cjs.Rectangle(-2.4,-3,173.5,135.5), null);


(lib.hair_bottom_blond_girl_straight = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.5,1).p("AHNrJQClCPA3D1QAzDjg5DvQg6DxiPCaQicCojQAGIi/AEQjVACijinQiViYg/j0Qg/jyAxjmQA1j5CniR");
	this.shape.setTransform(70.5025,87.0012);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC85B").s().p("AjGMXIgkgIQgNgFgWgFQgMgHgKgMQgogDgZgqQgegPgbgSQgkgRgGgqQgRgNgLgPQglgngig1QgZgogfg+QgGgLADgNQgmhFgUhNQgFgRALgLIgDgLQgFgFgCgHIgKg0IAAgBQgLg/gCg9QgBgFADgGQgGg8AFg6QAAgLAGgIIAGglQADhpAphFQAliABFg7IAIgEQABgTALgOIgBgBIAWgWIBOgyQBkg9BpgoQAugRAvgNIAigCQA2gBBTAFQA3AGAsALQBOATBSArQA/AgBUA5QAuAfAUATQAhAdARAkQAOAbAFAZQAcAnAQBIQAGAFACAGQAlBeAMBpQALBogOBkQgNBkggBvQgJAegOAiIgcA9QgaBShHBQQg8BDhSA4QgrAeg8AWQgtARhDARIgGAFIgvgCQgqgDgTABQgoAAgXALIgJgJIgSAFIAAAAIgMACQgOACgLgIQgIADgIACQgYAFgaAAQgQAAgRgCg");
	this.shape_1.setTransform(70.8081,79.3055);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_bottom_blond_girl_straight, new cjs.Rectangle(-1.5,0,143.9,159.6), null);


(lib.hair_bottom_blond_girl_braids = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.5,1).p("AlhhAQAwBIB1AlQCOAsCSgeQCXgeBnhj");
	this.shape.setTransform(174.775,48.329);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.5,1).p("ABbgfQgKAegcARQgdATgegDQgrgEgpgo");
	this.shape_1.setTransform(330.525,86.4772);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.5,1).p("AiZC9QBmAPBDgVQArgMAhgbQAkgdAPgmQATgwgOg6QgMgzgigxQgigygmgMQgVgHgPAHQgJAEgGAIQgGAJABAJQACAKAJAFQAJAGAIgE");
	this.shape_2.setTransform(334.4804,59.4004);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.5,1).p("AiUBQQAUADAKAUQAOAZAdAOQARAIAtgFQAogFAWgJQA1gWAcg4QAcg3gPg4QgJghgYgYQgYgagggFQgTgCgSAFQgRAFgPAMQgWASACAWQACALAKAIQALAHAKgE");
	this.shape_3.setTransform(335.1012,70.1045);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.5,1).p("AgXB3QAXgYAJgOQAPgVAAgUQACgigFgwQgGg2gKgW");
	this.shape_4.setTransform(310.7923,98.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.5,1).p("AAiiEQAVAjAzBSQApBEgBAPQgBAOgKAMQgKAKgNAHQgTAIidANQgjADgQgJQgPgIgIgSQgIgQACgSQABgTAog8QAjg4gFg1");
	this.shape_5.setTransform(317.2902,97.3125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.5,1).p("Aghh2QAfAPALAvQAFAUAFAnIAPB0");
	this.shape_6.setTransform(305,66.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F1806").ss(2.5,1).p("ABUBiQAOgdARhTQAShYgIgPQgKgUgYgIQgWgIgZAEQiTAVgPAdQgJASAAAcQABAdAKARQANAWApA4QAkAwAOAg");
	this.shape_7.setTransform(310.0218,66.0193);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.5,1).p("Ag0APQgKgUACgMQADgQAQgKQAKgFAVgGQAggKANANQAFAEAEAJQAIATAGAUQAHAbgJANQgIANgSADQgNADgQAAQgSAAgJgFQgKgEgGgNQgBgCgJgVg");
	this.shape_8.setTransform(314.3615,80.9994);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5F1806").ss(2.5,1).p("AA1gcQABAkgSAMQgGAEgcAEQgLACgZgFQgPgDgDgI");
	this.shape_9.setTransform(304.1526,87.0286);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.5,1).p("AA+AXQgRgFgWgWQgSgTgWABQgPgBgIAAQgNABgIAF");
	this.shape_10.setTransform(302.9,80.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5F1806").ss(2.5,1).p("ABgAtQgKAKgDACQgFAEgLABQgRAAgIgBQgOgBgJgGQgJgFgKgOQgRgVgTgdQgKgPgFgGQgJgLgKgEQgRgFgIgF");
	this.shape_11.setTransform(298.85,79.6833);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(2.5,1).p("ABQgJQgBAVgYANQgRAJgWAAQgUgBgTgJQghgRgXgo");
	this.shape_12.setTransform(291.05,87.5263);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5F1806").ss(2.5,1).p("ACSAuQgLAKgOACQgPADgNgGQgFgCgKgGQgKgHgFgCQgNgGgUABQgYACgKAAQgtACgogbQgogagQgq");
	this.shape_13.setTransform(285.875,80.4641);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5F1806").ss(2.5,1).p("AApBZQgFhKgRguQgIgYgMgPQgRgSgWAA");
	this.shape_14.setTransform(285.375,72.675);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#5F1806").ss(2.5,1).p("AA5BqQAEgOgCgYQgCglgEgWQgGgfgNgXQgOgcgYgQQgagSgdAC");
	this.shape_15.setTransform(274.7833,61.5647);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5F1806").ss(2.5,1).p("ACWBXQgSgYgLgMQgRgTgSgKQgdgRg8gFQghgBgOgCQgagEgTgJQgWgKgPgSQgQgUgBgW");
	this.shape_16.setTransform(275.475,74.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#5F1806").ss(2.5,1).p("ACqBVQgFgsgjggQgkgfgsgBQgLAAgQACQgSADgIABQg0AGgqgOQgxgSgXgp");
	this.shape_17.setTransform(263.725,66.775);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#5F1806").ss(2.5,1).p("ABbBwQgDhlgng3QgYgjgkgSQgogUgnAJ");
	this.shape_18.setTransform(260.275,49.1829);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#5F1806").ss(2.5,1).p("ADGBBQgeg8g5glQgSgMgPgDQgPgCgTAGQgIADgXAKQgmAPgnAIQgcAEgPgBQgZgEgZgSQgQgMgYga");
	this.shape_19.setTransform(252.35,58.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#5F1806").ss(2.5,1).p("ABQB3QglgFgggaQgdgXgUgkQgdgzgMhh");
	this.shape_20.setTransform(238.4,33.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#5F1806").ss(2.5,1).p("ADuA5QgWgkgSgRQgagZgggBQgVAAgeANQhRAggHADQgzARgogFQhNgJhGhV");
	this.shape_21.setTransform(234.7,47.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#5F1806").ss(2.5,1).p("AMMDmQgKhLhJhSQhGhQhKgaQgvgthcgvQi3hfjfgIQjegJjCBnQg8AggzAnIgmAhQhJAahFBOQhGBRgKBL");
	this.shape_22.setTransform(174.975,23.2675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#5F1806").ss(2.5,1).p("AhagfQAKAeAcARQAdATAfgDQAqgEApgo");
	this.shape_23.setTransform(19.425,86.4772);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#5F1806").ss(2.5,1).p("ACaC9QhmAPhDgVQgrgMghgbQgjgdgQgmQgTgwAOg6QAMgzAigxQAjgyAlgMQAVgHAPAHQAKAEAFAIQAGAJgBAJQgCAKgJAFQgJAGgIgE");
	this.shape_24.setTransform(15.4696,59.4004);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#5F1806").ss(2.5,1).p("ACVBQQgTADgLAUQgOAZgdAOQgRAIgtgFQgogFgWgJQg1gWgcg4Qgcg3APg4QAKghAXgYQAZgaAfgFQATgCASAFQASAFAOAMQAWASgCAWQgBALgLAIQgLAIgKgF");
	this.shape_25.setTransform(14.8489,70.1045);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#5F1806").ss(2.5,1).p("AAYB3QgYgZgIgNQgPgVAAgUQgBgjAFgvQAFg2AKgW");
	this.shape_26.setTransform(39.1667,98.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#5F1806").ss(2.5,1).p("AghiEQgVAjgzBSQgpBEABAPQACAOAKAMQAJAKANAHQATAICdANQAjADAQgJQAPgIAIgSQAIgQgCgSQgBgTgog8Qgjg4AFg1");
	this.shape_27.setTransform(32.6599,97.3125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#5F1806").ss(2.5,1).p("AAih2QgeAPgMAvQgGAUgFAnIgOB0");
	this.shape_28.setTransform(44.975,66.775);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#5F1806").ss(2.5,1).p("AhTBiQgOgdgRhTQgShYAIgPQAKgUAYgIQAWgIAZAEQCTAVAPAdQAKASgBAcQgBAdgKARQgNAWgpA4QgkAwgOAg");
	this.shape_29.setTransform(39.934,66.0193);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#5F1806").ss(2.5,1).p("AA1APQAKgUgCgMQgDgQgQgKQgKgFgVgGQgggKgNANQgDACgGALQgJAXgFAQQgHAbAJANQAIANASADQANADAQAAQASAAAJgFQAKgEAGgNQABgCAJgVg");
	this.shape_30.setTransform(35.5885,80.9994);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#5F1806").ss(2.5,1).p("Ag0gcQgBAkASAMQAGADAbAFQAMACAZgFQAPgDADgI");
	this.shape_31.setTransform(45.8224,87.0286);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#5F1806").ss(2.5,1).p("Ag9AYQARgFAWgXQASgTAWABQAHABAQgBQANAAAIAF");
	this.shape_32.setTransform(47.05,80.5992);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#5F1806").ss(2.5,1).p("AhfAtQAIAGAFAGQAFAEAMABQAQAAAJgBQANgBAKgGQAHgFALgOQASgXATgbQAJgPAFgGQAJgLAKgEQASgFAHgF");
	this.shape_33.setTransform(51.1,79.6833);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#5F1806").ss(2.5,1).p("AhPgJQABAVAYANQARAJAWAAQAUgBATgJQAigRAWgo");
	this.shape_34.setTransform(58.925,87.5263);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#5F1806").ss(2.5,1).p("AiQAuQAKAKAOACQAPADANgGQAFgCAKgGQAKgHAFgCQANgGAVABQALAAAWACQAtACAogbQAogaAPgq");
	this.shape_35.setTransform(64.1,80.4641);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#5F1806").ss(2.5,1).p("AgoBZQAFhKARguQAJgZALgOQAQgSAXAA");
	this.shape_36.setTransform(64.575,72.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#5F1806").ss(2.5,1).p("Ag4BqQgEgOACgYQACglAEgWQAGgfANgXQAOgbAYgRQAbgSAcAC");
	this.shape_37.setTransform(75.1667,61.5647);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#5F1806").ss(2.5,1).p("AiVBXQAkgxAcgQQAdgRA9gFQAhgBANgCQAagEATgJQAXgKAOgSQARgUAAgW");
	this.shape_38.setTransform(74.475,74.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#5F1806").ss(2.5,1).p("AipBVQAFgsAjggQAkgfAsgBQALAAAQACQAIABARADQA0AGArgOQAxgSAXgp");
	this.shape_39.setTransform(86.25,66.775);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#5F1806").ss(2.5,1).p("AhaBwQADhkAmg4QAYgjAmgSQAogUAmAJ");
	this.shape_40.setTransform(89.7,49.1829);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#5F1806").ss(2.5,1).p("AjFBBQAdg7A5gmQATgMAPgDQAPgCATAGQAJADAWAKQAmAPAnAIQAbAEAQgBQAZgEAYgSQAQgMAZga");
	this.shape_41.setTransform(97.625,58.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#5F1806").ss(2.5,1).p("AhPB3QAlgFAhgaQAdgXAUgkQARgeAKgpQAIgfAFgu");
	this.shape_42.setTransform(111.55,33.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#5F1806").ss(2.5,1).p("AjtA5QAZgnAOgOQAdgZAegBQAUAAAeANQBRAgAIADQAzARAogFQBMgJBHhV");
	this.shape_43.setTransform(115.25,47.775);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A3250C").s().p("AgcBgIgEgIQgRgTAHgXIAAAAQABgtAngyQACgFAFgBIABgDIAKgmQADgLAKAEQADgCAEACQADACABAEIADAdQABASgCAMQAJBLgXAqQADAIgFAFQgPAOgSgDQgFACgEAAQgIAAgEgJg");
	this.shape_44.setTransform(308.2096,98.9152);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A3250C").s().p("AAYBdQgMgKgQgZQgSgcgMgcIgEgFQgMgWABgRIAAgDQgEgpAegKQAGgCAFAEQAEADABAGQADABABADIADAEIAAAAQAOgBAEAOIACAHIAPAzQAHAfgFAUIgBACIAMAbIABABIABADQADALgKAGQgFADgEAAQgFAAgFgFg");
	this.shape_45.setTransform(302.8807,64.9874);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A3250C").s().p("AgHBjQgXgSgLhAQgDgPAAgMQgEgTAFgdQAEgYAIgRQADgGAGACQAGACAAAGIAAAKQADADAAAEQADAAACACQADACgBADIAAAXIAEAFQAFAGAFAIQAJAMAHAMQAWAjABAWQAAAJgHAFIgEAGIgEANQgFAOgLAEQgFABgEAAQgHAAgHgFg");
	this.shape_46.setTransform(41.8434,100.0262);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A3250C").s().p("AgjBtQgNgDACgNIAEgbIAAgDIAQhhIABgEQAFgaAbgkQAFgHAJAAQAJgEAIAEQADACACAFIACAIQACAKgBAEQAFAogcAyQglBGgFASQgDAKgIAAIgFgBg");
	this.shape_47.setTransform(46.8564,66.3246);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CA2C2B").s().p("Ag8EeQgLgSASgIQAUgMAHgXIAAgPQgPgWAKg4QgHgdgOgfQgFgLAIgIQgIgPgHgYIgDgEQgKgUADgXIgDgHIgEgjQgNgogDgcQgDgogEgTQgGgggVgTQgHgGACgJQADgIAJgDQAagJATAJQACgHAIgEQAigPAaAOQALAAAIADIAKgEQAMgCALAIQAIAGADAKQACALgEAHQABAKgFAHIACAIQACAVgEAiIgHA3IgDAmQgDAWgJANQgEAFgHAEIABAOIABAAQAPAJADAVQACAMABAaQAdAdAUAqQAMAaACAMQAKAQAGAEQAIAFADADQAEAFACAIQAJAfgNATQgNATgVgBIgEAAQgIAHgLAAQgOAAgcAGQgcAHgPgBQgIAHgMAFQgFACgFAAQgLAAgHgMg");
	this.shape_48.setTransform(316.9427,81.3042);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CA2C2B").s().p("AA2EqQgNgEgHgFIgKAAQgMAEgSACIgXADQgPACgIgLQgQAEgPgEQgRgEgMgNQgNADgKgJQgKgJADgPQAXhhBEhRIAFgNQACgGAFgEQgBgQAJgXQAMgcACgLIAAgBQgGgGgCgKIgFghIgShvIgFgoQgBgXAKgPQASgbAoAGQAjAFAZAYIACgDQAJgHALAAQAKABAHAHQAIgCAHAAQAKAAAEAKQAEAJgHAIIgRAWQgIAMgFAOIgXBPIgDAGQACA4gDAcQgFAsgSAfQgDAFgGAEIAAABQgCAJgGAFIAAAOQAFABACAEQADAEgBAEIgKAnQgCA4gGAuIAIAMQAOADABAPIAJALQAFAGgEAIQgDAFgFAAIgEgBg");
	this.shape_49.setTransform(33.479,80.2298);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FBC85B").s().p("AgfBbIgOADQgFAAgDgDQgPAEgLgLQgjgDgTgWQgWgZAPghQAFgJALAEQAEgFAIAAQAHAAAGAFQAEgBAEABQAXAIAxgQQA2gSAVABIAKgGIAZgVIAVgcQAKgOAPAJQAPAIgJAPIgDADQgEARgQAOIgDAFIgMATQgIAKgKADQgDABgEgBQgKAHgMADQADASgQATQgJAMgVAQQgTAOgPAAQgGAAgGgDg");
	this.shape_50.setTransform(335.201,79.3469);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FBC85B").s().p("ASWHEIgCgBQgVADgUgLQgSgLgNgOQgPgRgDgSQgMADgNgCQgYgGgVgWQgGgDgFgGQgOgOgIgVQgIgSABgJIgDgHQgYABgMgBQgUgDgOgHQgegRgSgqIgDgKQgbAEgigPQgMABgIgFQgzgbgQgqQgkARgfgOQgUgIgSgSQgTgTgHgVIglAFQgdACgcgMQgUgIgfgWIglgZQgZgSgRgRQgSAPgjAXQhZA1g3AOQgwAWgcgDQhQAYhUgLQhEgKgqgXQgYgIgdgQQgFAAgIgFIhIg0IgGgGQgfAageARQgYAPg8ATQhKAYgcgMIgRAPQg5AugmgEQgbAdgrAWQgoAUgkAEQgVAfgpAeQghAXgZAAQgHAOgIAJIgGAKIgTAZQgMAOgNAEIgDgBQgbAWgYAFQgMAZgZAQQgOAKgQAFQgOAMgWAEQgPADgLgJQgLgJACgPQghAPgZgHIgQABIgFAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBIgGABQgKAAgHgIIgCgBIgCgDQgHgNAIgKQAaglAJgIQAbgbAUAOQAWgMATAKQALgQAXgRQAJgGAJAAQAOgIANAHQARg2APglIAFgJQAEgJAJgBQAJgBAJAFIAJgJQAEgDAHABIABgBQgDgIACgKQAUhFA9giQAPgKAQAMQAFgWASgZQAOgTARgQQA5g0A9AJIAMgHQAJgiAXggQAWgfAcgVIA9g0QACACAEgBQAagLAZgSQASgMAcgYIACgCQAHgDAJgCQAbgYAZgTQAEABACgBQAYgLA0gTQA1gTAZgLQAHAAAGABQB5hBDTAuQAHgIAMADIBdAcQBWAIBRAjQBTAjBBA4IAmAgQAMAFARALQAEgDAGACQAiASAjAhQAWAWAkArIAOARIApAgQAJgBAMACQAMgMAQAEQARADAUATQAZALAmAuQAZAgAHAaQAEAAADACIAFAFQANgCATAHQAPAGAJAIQAUAQAOAlQAFAMAAAMQAKASAEANQAEgCAFABQAEgCADADIADAEQAUATAUAiQAPAaADAOQALgEAKAJIAPAOQAIAAADAGIASAfIAQAPIAAgHQgFgIAFgJQAGgJALADIATAFQAYgDAGABQARABAKAMQAOARgMAQIAAABIAMAAQAGAAAEAEIAFAAQAEAAAAAEQAAAkgkALQgkAKgZgZQgIgHACgKQACgJAHgFIgIgIIgJgDQADAHgDAHQgEAHgHAEIAAADIABAEQADAJgEALQgGANgOADIgJABQgIAAgJgCgAR3F7IgLgQIgHAFIAAAAIAAABQAGAAAEAEQACAEAGACg");
	this.shape_51.setTransform(175.6186,45.3949);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FBC85B").s().p("AAbBbQgRgBgOgMQgSgEgNgMQgCgCACgDQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABABQAGAEAIADQgEgHgBgIQAAgFACgDQgrgSghggQAAAEgEACQgFACgCgEIglhFQgFgJAJgFQAJgFAFAJQAGAMALAPQAIgGAJAHQA2AoAaANQAIgCARAEIAWAEIAEgBQATgBAGACIAGgBQAMgJAQAFIABABIAJgBQAHgBACAFIAAgBQADgIAGgEQAHgFAIAFQAGADAAAHQgBAGgGACIgFAJQACAFgBAEQgGAcgVAOQgEANgMAGQgNAHgOgHIgCgCIgGADQgBABAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIADgDIgBgBQgJAMgRAAIgDAAg");
	this.shape_52.setTransform(15.6376,79.7185);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_bottom_blond_girl_braids, new cjs.Rectangle(-3.9,-0.9,358.2,117.10000000000001), null);


(lib.hair_bottom_blond = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AMCgZQgIBEADA2QADA+ATA5QAOArBGAyQA9ArgGASQgEAPgtALQgtALg8ABQiZAChIhAQAJAkADATQAEAfgDAYQgEAdgQAXQgSAZgaAHQgWAHgdgHQgTgEgfgOQhxg4g4gZQhhgrhfgLQh4gOhoASQh0AVhVA7Qg0AkgPAHQgnAVgigGQgagEgXgUQgUgTgNgbQgPgjgHhKQgtA4h6AOQgvAFglgEQglgEgDgKQgDgKA1iBQA7iRAKhGQAQhwAkhPQAwhrBihaQB8hwCUguQCjgzEKACQB5ABB/AsQB8ArBlBJQBoBMA2BZQA6BhgLBeg");
	this.shape.setTransform(92.6649,54.3462);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F49C3B","#FBC85B"],[0,0.792],-0.6,54.9,3.4,-54.5).s().p("AG9IcQgTgEgfgOQhxg4g4gZQhhgrhfgLQh4gOhoASQh0AVhVA7Qg0AkgPAHQgnAVgigGQgagEgXgUQgUgTgNgbQgPgjgHhKQgtA4h6AOQgvAFglgEQglgEgDgKQgDgKA1iBQA7iRAKhGQAQhwAkhPQAwhrBihaQB8hwCUguQCjgzEKACQB5ABB/AsQB8ArBlBJQBoBMA2BZQA6BhgLBeQgIBEADA2QADA+ATA5QAOArBGAyQA9ArgGASQgEAPgtALQgtALg8ABQiZAChIhAQAJAkADATQAEAfgDAYQgEAdgQAXQgSAZgaAHQgLAEgNAAQgMAAgPgEg");
	this.shape_1.setTransform(92.6649,54.3462);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_bottom_blond, new cjs.Rectangle(-9,-1.3,195.7,113.89999999999999), null);


(lib.hair_botom_gray = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#384663").ss(2.6).p("AkQlKQjTA2iHBtQg3ArgdAtQg8BaAKCFQAEAsAPASQAKAOARAEQASAEANgKQAFgEAIgLQAHgLAGgEQAJgGANABQALABAKAGQANAJASAZQAeAqAVAWQAfAhAhAQQAjARBCAGQBLAFEogCQFMgDBKgPQA+gMAkgTQAzgcASguQAFgPACgHQAFgNAFgIQAHgJAMgDQANgEAIAHQACACAHAKQANAQAYgBQAXgBAPgPQAZgZADg2QAEhRglhIQgNgbgYghQhch8iOhFQiHhBirgLQhJAAhYAEQiyAIhNAUg");
	this.shape.setTransform(75.4791,36.3391);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CED6CB").s().p("AlnFoQhCgGgjgRQghgQgfghQgVgWgegqQgSgZgNgJQgKgGgLgBQgNgBgJAGQgGAEgHALQgIALgFAEQgNAKgSgEQgRgEgKgOQgPgSgEgsQgKiFA8haQAdgtA3grQCHhtDTg2QBNgUCygIQBYgEBJAAQCrALCHBBQCOBFBcB8QAYAhANAbQAlBIgEBRQgDA2gZAZQgPAPgXABQgYABgNgQIgJgMQgIgHgNAEQgMADgHAJQgFAIgFANIgHAWQgSAugzAcQgkATg+AMQhKAPlMADIijAAQicAAg0gDg");
	this.shape_1.setTransform(75.4791,36.3391);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_botom_gray, new cjs.Rectangle(-1.2,-1.3,154,76.5), null);


(lib.hair_botom_brown = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AMFBOQABgwghg6Qgeg3gpgiQhNhAh+AKQgoADgoALIgfAJQgghLhHgwQhIgwhSgBQhSAAhHAvQhJAvggBLQgkgMgtgKQhagUgsAPQg1ARgqAmQgrAngXAyQgjgCgVAGQgqANgfAmQgdAmgFAvQgUgDgSAbQgjA0gBA/QAAAgAMAQQAOATAfAGQAuAIAngXQAUgMAQgVQAMgQAGgSQALgjgNgaQgJgRgSgJQgSgIgTADQgTAEgNAPQgNAPgCAT");
	this.shape.setTransform(77.3254,32.0513);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6).p("ApagHQgNAaADAjQAEAkATAXQAOAQAVALQAUAKAXACQAsAEApgZQAggUAWhBIAQg8QAyAFAWgBQAogCAagRQAfgVAQgSQATgVAKgfIAqAIQAzAHAugCQA3gCAogRQAVgJAJgIIAEAKQAHAOANAUQAdAuA8AaQAlAQBLAPIAPAqQAYAtAoAUQAXAMApgHQAngHAVgRQAagUAOgWQAKgNAMgcIACgF");
	this.shape_1.setTransform(87.6237,59.6407);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6).p("AhehkQgYAogEAwQgDAvARAqQAMAfATALQAUALAegEQA4gIAqgoQApgpAJg4QAFgegIgaQgJgdgZgOQgUgLgaAEQgYAFgSAQQgJAJgGAIQgNASgCAVQgDARAGAQQAFAPALALQALAMAPAFQAQAFAQgE");
	this.shape_2.setTransform(156.6163,48.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6).p("AhJBAQAMANASADQARAEARgGQAQgGANgLQANgJANgRQAYggADgaQACgRgGgPQgGgRgNgJ");
	this.shape_3.setTransform(25.225,52.6181);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A3250C").s().p("AngF2QgWgCgUgKQgVgLgOgQQgTgXgEgkQgEgjANgbIAAgBQgNALgRAGQgRAGgSgEQgSgDgLgNQgQAWgUALQgoAYgtgIQgggHgOgTQgMgQAAggQABg/AjgzQATgbAUACQAFguAdglQAegnArgNQAUgGAkACQAXgzAqgmQArgnA1gRQAsgOBZATQAtAKAkANQAhhMBIgvQBJgvBRABQBRAABIAwQBIAwAfBMIAggKQAogKAngDQB+gLBOBBQAoAhAfA4QAgA7AAAuQAFgIAKgJQATgPAYgFQAZgEAVALQAZANAJAdQAIAagFAeQgJA5gqApQgqAog4AIQgfAEgTgLQgNAcgJANQgPAWgZAUQgWARgnAHQgoAHgXgMQgpgUgXgtIgQgqQhKgQglgQQg9gagcguQgNgUgHgOIgFgKQgJAIgUAJQgpARg4ACQgsACgzgHIgrgIQgKAfgTAVQgPASggAVQgZARgpACQgVABgygFIgQA9QgXBBggAUQgjAVgmAAIgMAAg");
	this.shape_4.setTransform(84.4712,37.4273);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_botom_brown, new cjs.Rectangle(-3.5,-3.4,173.8,85.10000000000001), null);


(lib.hair_beind_brown_girl = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AkPpPQgigshPALQhFAJghAhQgNANgVAyQgLAZgIAWQgeANgjATQhFAmgaAeQggAngGAxQgGA0AbAlQgmAKgdAdQgcAcgLAlQgLAmAKAnQAJAnAaAcQgeAmgJAyQgIAyAQAuQAQAuAmAhQAmAiAvAKQgNAnATApQARAoAlAVQAjAUAsAAQApAAAogRQAoBMBUAjQBUAjBSgZQAVgHAJACQAJACAPAMQA5ArBNgEQBNgEA1gxQBMAlBYgbQBYgbArhJQBGABAngEQA8gHArgVQA0gZAcgxQAeg0gPgxQAhgVAVgiQAWgjAEgmQAEgngNgmQgOglgbgcQAng2gRhaQgShehBgXQAPgsAEgTQAGgggKgfQgPgtgUgSQgdgcg5AGQACgigLgeQgMgggZgUQgdgYghgFQgmgHgRAZQgJhBhYgZQglgLgnANQgnALgZAeQANgQglgZQgjgZgngHQgfgFg3AQIgxAQQgOgKgYgKQgwgSgxAGQgdADgjAZQggAXgUAcg");
	this.shape.setTransform(83.0746,67.2936);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A3250C").s().p("AApKXQgxAAgMgBQghgDgcgNQgbgNgXgUQgKAAgMgFQgOAEgNABQgfALgZAAQg3ABg3gUQg8gWgigmQgPgSgIgdQgxAbg5gKQg1gKgngzQgqg1ARgwIgBAAQgegCgjgcQgegYgRgbQgTgfgHgpQgIgtAOggQgCgJAHgPIALgVIAMgYIgEgEQgfglAAg0QAAg0AcgqQAUggAtgVIAGgEQgZhvA1hHQgBAEAFACQAFABADgFQAihABzgmQALg1AbgkQAXgfAngUQAngUAngBQA0gBAoAvQALgQAGgHQAagbAigOQAkgPAkACQAwADAdAbQAGABAHAEQAIgDANgHIARgJQAbgKAcgBQAvgDAyAVQAhAPARAZQALgJAMgGQAigRAsACQAoABAnAQQAjAQAOAjQAKAEALAIQAagRAcANQAXALAWAdQAZAOARAcQAQAbADAfQAVgCAWAOQAEgDADAAQAPgDAHAJQAVAZAFAkIABAMQAEAKAAAGQAEAdgJAlQAEARADAZIACACQA6AqAIBPQAHBDgeBIQALAJAJAMQAKADAJALQAXAcgGA3QgFAvgTAlQgHAOgPASQgUAYgOADQADAigGAZQgRBChIArQhBAohQADIgCABIgBgBQgXAOgZgJQgQADgRgHQgUAYgdAaQgZAWgeANQgiAPgegCQgmAKgWgKQgEABgHgCIAAABIgFgCIgCgBQgFgCgGgGIgMALIgQgCQghgBgxAmg");
	this.shape_1.setTransform(83.6531,67.2629);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_beind_brown_girl, new cjs.Rectangle(-1.2,-5.4,171.7,141.3), null);


(lib.hair_behind_gray = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#384663").ss(2.6).p("AtpEqQgCAjAJAdQABACABACQAKAdAVAYQAwAzBQADQE2hWFtgJQGGgJEqBWQDmgWgPj8QgLi4h1jWQhViFikgeQilgdh9BgQggg4g2gnQg2gnhAgMQiegFinA+QinA+iDBxQgDADgEAEQiEB0g/COQg4CAAGCEgAp0jcQhLBIg6BYQh5C1AKCmQAAAGgBAFADXlGQh4iVjEADQiwADi8B5QhaA5hJBH");
	this.shape.setTransform(87.4089,47.2737);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CED6CB").s().p("AtBGjQgVgYgKgdIgBAAIgBgEQgJgdACgjQgGiEA4iAQA/iOCEh0QBJhHBag5QC8h5CwgDQDEgDB4CVIgMAHIADAGQB9hgClAdQCkAeBVCFQB1DWALC4QAPD8jmAWQkqhWmGAJQltAJk2BWQhQgDgwgzg");
	this.shape_1.setTransform(87.4089,47.271);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_behind_gray, new cjs.Rectangle(-1.2,-2.9,177.89999999999998,102.30000000000001), null);


(lib.hair_behind_brown = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("Ag2HBQg0A4hVgGQhVgGgrhAQhbAthpgfQhrgfgzhYQg5AUg9gXQg9gYgdg1QhCgQgnhAQgmhBAShCQAThBBBgkQBCgjBBAUQgLgvAMgwQALgxAegmQAeglAtgWQAsgVAxAAQAKgzAhgqQAhgpAugWQAvgVA1ADQA2ACAsAZQAVgvAtgfQAtgfA0gCQA0gCAuAcQAvAcAXAvQA8gWA9AmQA9AlAIA/QAEgDBIgzQAmgbAtgIQBVgPBDApQA+AnALA8QAlgYAwAFQAvAGAfAgQAeAgAEAwQADAvgaAkQBFAJAqBAQAqBAgUBBQAcAOARAcQASAdgBAfQgBAfgTAcQgSAbgdAMQAQAwgMAyQgLAzgjAlQgiAkgyAOQgzANgwgNQgWAngnAaQgmAbgtAGQgtAHgsgOQgtgOghgfQgbArgwAYQgwAZgzgEQgzgDgsgeQgsgfgWguQgLAVgYAKQgXALgWgHQgXgHgPgWQgOgVADgY");
	this.shape.setTransform(101.2884,60.4431);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A3250C").s().p("ADsJcQgzgDgsgeQgsgfgWguQgLAVgYAKQgXALgWgHQgXgHgPgWQgOgVADgYIAAgGQg0A4hVgGQhVgGgrhAQhbAthpgfQhrgfgzhYQg5AUg9gXQg9gYgdg1QhCgQgnhAQgmhBAShCQAThBBBgkQBCgjBBAUQgLgvAMgwQALgxAegmQAeglAtgWQAsgVAxAAQAKgzAhgqQAhgpAugWQAvgVA1ADQA2ACAsAZQAVgvAtgfQAtgfA0gCQA0gCAuAcQAvAcAXAvQA8gWA9AmQA9AlAIA/IBMg2QAmgbAtgIQBVgPBDApQA+AnALA8QAlgYAwAFQAvAGAfAgQAeAgAEAwQADAvgaAkQBFAJAqBAQAqBAgUBBQAcAOARAcQASAdgBAfQgBAfgTAcQgSAbgdAMQAQAwgMAyQgLAzgjAlQgiAkgyAOQgzANgwgNQgWAngnAaQgmAbgtAGQgtAHgsgOQgtgOghgfQgbArgwAYQgqAWgsAAIgNgBg");
	this.shape_1.setTransform(101.2884,60.4431);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_behind_brown, new cjs.Rectangle(-1.3,-1.3,205.70000000000002,124.5), null);


(lib.hair_behind_blond_girl = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AAErJQC5hkCeAEQCRAEBuBaQBnBUA8CTQA5CNAICsQAICsgsCnQgvCwhgCJQjgE/mQAKQmogFjuk9QhniJgyiwQgwinAHitQAGisA6iOQA9iTBohVQBwhcCSgFQChgFC5Bkg");
	this.shape.setTransform(83.1472,80.9905);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FBC85B").s().p("Ap7HoQhniJgyiwQgwinAHitQAGisA6iOQA9iTBohVQBwhcCSgFQChgFC5BkQC5hkCeAEQCRAEBuBaQBnBUA8CTQA5CNAICsQAICsgsCnQgvCwhgCJQjgE/mQAKQmogFjuk9g");
	this.shape_1.setTransform(83.1472,80.9904);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_behind_blond_girl, new cjs.Rectangle(-1.3,-1.3,169.4,164.60000000000002), null);


(lib.hair_behind_blond = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AOIGjQBfg7AOiWQAMh7goh7Qgkhvg6hRQhChdhbgxQhtg8hXgIQhvgKhtBEQgIgmgggnQg+hOh1gHQitgKh+AjQhcAYhDAcQhTAjg+AuQg4AqhCBJQgmArhJBWQhBBKg6AsQhKA3hLAUQBiDHFpB9QEcBjHEA1QE5AlDDgyQBGgSA8gfQAUgKA8gmg");
	this.shape.setTransform(101.028,54.5111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FBC85B","#F49C3B"],[0,1],0.9,-11.4,-1.9,63.2).s().p("AC3IRQnEg1kchjQlph9hijHQBLgUBKg3QA6gsBBhKIBviBQBChJA4gqQA+guBTgjQBDgcBcgYQB+gjCtAKQB1AHA+BOQAgAnAIAmQBthEBvAKQBXAIBtA8QBbAxBCBdQA6BRAkBvQAoB7gMB7QgOCWhfA7Qg8AmgUAKQg8AfhGASQhwAdiYAAQhvAAiFgQg");
	this.shape_1.setTransform(101.3135,54.5111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_behind_blond, new cjs.Rectangle(-1.8,-1.9,206.60000000000002,112.2), null);


(lib.freckles_right = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// freckles_right
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5F1806").s().p("AgJAKQgEgEAAgGQAAgEAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAEQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(15,6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5F1806").s().p("AgJAKQgEgFAAgFQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_1.setTransform(7.5,8.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5F1806").s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_2.setTransform(1.575,4.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F1806").s().p("AgLANQgFgFAAgIQAAgGAFgGQAFgEAGAAQAHAAAFAEQAFAGAAAGQAAAIgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_3.setTransform(11.575,1.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.freckles_right, new cjs.Rectangle(0,0,16.4,9.6), null);


(lib.freckles_left = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// freckles_left
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5F1806").s().p("AgJAKQgEgFAAgFQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(1.375,6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5F1806").s().p("AgJAKQgEgFAAgFQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_1.setTransform(8.875,8.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5F1806").s().p("AgKALQgEgEgBgHQABgGAEgEQAEgEAGgBQAGABAFAEQAFAEAAAGQAAAHgFAEQgFAFgGgBQgGABgEgFg");
	this.shape_2.setTransform(14.8,4.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F1806").s().p("AgMAMQgEgFAAgHQAAgGAEgGQAGgEAGAAQAIAAAEAEQAFAGABAGQgBAHgFAFQgEAGgIAAQgGAAgGgGg");
	this.shape_3.setTransform(4.8,1.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.freckles_left, new cjs.Rectangle(0,0,16.4,9.6), null);


(lib.foot_sock = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("AgDBlQANhlgKhk");
	this.shape.setTransform(48.142,11.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6,1).p("AAABhIAAjB");
	this.shape_1.setTransform(40.225,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6,1).p("AAJhdQgWAIAGArIAOCJ");
	this.shape_2.setTransform(28.6719,12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6,1).p("Ag4gPIBxAf");
	this.shape_3.setTransform(14.45,67.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6).p("AisCeIAAgBQAqgVAngeQBThAAIhnQACgogGhAQgIhNgEgrIAAgBIAHADQA5AUBHgEQBGgEA5gYQAKgFAJgLQADApgJBAQgLBRgBAsQgBAMAEARIgDAAQgZAIgSAZQgQAVgFAdQgFAYADAfQACAUAHAiIACACQgOALgIAJQgKALgyBGQghAvgkAWQggATgtABQgVABhAgIQgzgGgsgbQgzggADgnQABgSAagTQAcgVAlgFg");
	this.shape_4.setTransform(26.5452,50.0771);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFF1EC").s().p("Ah5E7QgzgGgsgcQgzgfADgoQABgRAagTQAcgVAlgGIAAgBQAqgUAngfQBTg/AIhoQACgngGhBIgMh4IAAgBIAHADQA5AUBHgEQBGgDA5gZQAKgEAJgLQADAogJBBQgLBQgBAsQgBANAEAQIgDAAQgZAJgSAYQgQAWgFAcQgFAYADAfQACAUAHAjIACACQgOALgIAJQgKAKgyBHQghAugkAWQggAUgtABIgDAAQgWAAg8gHg");
	this.shape_5.setTransform(26.5452,51.1016);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6).p("AAWhjQAFATAOAmQALAigFATQgGAXgbAXQgPAOgjAZIgCgCQgGgjgCgUQgDgfAEgXQAFgdARgWQARgYAYgJg");
	this.shape_6.setTransform(49.3681,54.7201);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EFF1EC").s().p("AgmBgQgGgjgCgUQgDgfAEgXQAFgdARgWQARgYAYgJIAEAAQAFATAOAmQALAigFATQgGAXgbAXQgPAOgjAZg");
	this.shape_7.setTransform(49.3681,54.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6).p("ACSBIQgJALgKAFQg5AYhGAEQhGAEg6gUIgHgDQgTgLgDgXIgKhxQgCgXASgOQASgPAWAHQA6AQAqgFQArgDBFgZQAYgIAVAKQAXALgBAWIgGB2QgBAOgPARg");
	this.shape_8.setTransform(38.4421,11.6682);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EFF1EC").s().p("AiABkIgHgDQgTgLgDgXIgKhxQgCgXASgOQASgPAWAHQA6AQAqgFQArgDBFgZQAYgIAVAKQAXALgBAWIgGB2QgBAOgPARQgJALgKAFQg5AYhGAEIgXAAQg5AAgwgQg");
	this.shape_9.setTransform(38.4421,11.6682);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.foot_sock, new cjs.Rectangle(-1.2,-8.9,58.300000000000004,93.5), null);


(lib.face = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AKdiLQgCC2gtCJQgtCHhfBuQj+EmkrgxQh3gUhyhJQhjg+hNhaQhdhsgxiKQgxiKAEiNQAEgkAOg2QAdhtA8hZQDDkgHMAAQFeAACOEKQAqBRAWBnQALAzAHAkg");
	this.shape.setTransform(66.8849,67.6755);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FAA86E","#FBDCB0","#EC6C3B"],[0,0.525,1],0,98.5,0,-71.5).s().p("AhHKeQh3gUhyhJQhjg+hNhaQhdhsgxiKQgxiKAEiNQAEgkAOg2QAdhtA8hZQDDkgHMAAQFeAACOEKQAqBRAWBnIASBXQgCC2gtCJQgtCHhfBuQjaD8j7AAQgpAAgrgHg");
	this.shape_1.setTransform(66.8849,67.6755);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.face, new cjs.Rectangle(-1.2,-1.2,136.2,139.39999999999998), null);


(lib.eyebrow_right_brown = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#5F1806").s().p("AiwA2QgDgCAZgZIApglQATgTAKgHQAQgLATgDQAPgDAgABQAnADBAANQA8ANAIAGQAIAGAAANQAAAPgHAEQgCAChPgSQhWgTgmADQggADg5AgIg0AeIAAAAg");
	this.shape.setTransform(17.7089,5.3879);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrow_right_brown, new cjs.Rectangle(0,0,35.4,10.8), null);


(lib.eyebrow_left_brown = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#5F1806").s().p("AB9AYQg4ggghgDQgmgDhXATQhPASgCgCQgGgEAAgPQAAgNAHgGQAJgGA7gNQBAgNAogDQAggBAPADQATADAQALQAKAHATATIApAlQAYAZgDACIAAAAIgzgeg");
	this.shape.setTransform(17.6664,5.3879);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrow_left_brown, new cjs.Rectangle(0,0,35.4,10.8), null);


(lib.eye_right = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9EFE5").s().p("AgUAUQgIgIAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(14.375,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// pupil
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5F1806").s().p("AhEBFQgdgcAAgpQAAgnAdgdQAcgdAoAAQApAAAdAdQAcAdAAAnQAAApgcAcQgdAdgpAAQgoAAgcgdg");
	this.shape_1.setTransform(22.175,13.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// base
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9EFE5").s().p("AgLBvQgpgCglgOQgpgPhAguQAcgpA4gvQAvgoAYgKQASgIASADQALABAgALQAXAIBDA0QAiAZAcAXIADAAQgLAQgoAfQguAiggAJQgiAKgiAAIgJAAg");
	this.shape_2.setTransform(22.2,15.8274);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F1806").s().p("AjQBMQAxhMA4gtQBBg1A5ADQAtACBMBOQBGBGgBAPIgCADIgCAAQgcgYgigZQhDgzgXgIQghgLgLgBQgRgDgSAIQgYAKgwAnQg3AvgcAqg");
	this.shape_3.setTransform(20.9016,9.617);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye_right, new cjs.Rectangle(0,0,41.8,26.9), null);


(lib.eye_left = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// highlight
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9EFE5").s().p("AgUAUQgIgIAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAIQgJAJgMAAQgLAAgJgJg");
	this.shape.setTransform(12.525,11.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// pupil
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5F1806").s().p("AhEBFQgdgcAAgpQAAgnAdgdQAdgdAnAAQApAAAdAdQAcAdAAAnQAAApgcAcQgdAdgpAAQgnAAgdgdg");
	this.shape_1.setTransform(19.6,13.275);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// base
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9EFE5").s().p("AhBBlQgggJgtgiQgpgfgKgQIACAAQAcgXAigZQBCg0AYgIQAggLALgBQASgDASAIQAYAKAwAoQA3AvAbApQg+AtgqAQQgrAQgrAAQgiAAgjgKg");
	this.shape_2.setTransform(19.575,15.8447);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F1806").s().p("ABjAHQgwgngYgKQgSgIgRADQgMABggALQgYAIhCAzQgiAZgcAYIgCAAIgCgDQgBgPBGhGQBMhOAsgCQA5gDBCA1QA4AtAxBMIgcAUQgbgqg3gvg");
	this.shape_3.setTransform(20.8734,9.617);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye_left, new cjs.Rectangle(0,0,41.8,27), null);


(lib.ear_right = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ear_right
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("Ah3BrQAuA3BHARQAvALApgNQAvgOAWgnQAWgogLhFQgJg7gYgsQgdg1gugZQgjgSgoABQgpAAgiAUQhFApgHBSQgHBPA4BEg");
	this.shape.setTransform(17.006,18.4173);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAA86E").s().p("AgCCzQhHgRgug3Qg4hEAHhPQAHhSBFgpQAigUApAAQAogBAjASQAuAZAdA1QAYAsAJA7QALBFgWAoQgWAngvAOQgWAHgYAAQgVAAgVgFg");
	this.shape_1.setTransform(17.006,18.4173);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ear_right, new cjs.Rectangle(-4,-1.2,40.8,41.7), null);


(lib.ear_left = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AB4BrQguA3hHARQgvALgpgNQgvgOgWgnQgWgoALhFQAJg7AYgsQAdg1AugZQAjgSAoABQApAAAiAUQBFApAHBSQAHBPg4BEg");
	this.shape.setTransform(16.994,18.4173);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAA86E").s().p("AhVCxQgvgOgWgnQgWgoALhFQAJg7AYgsQAdg1AugZQAjgSAoABQApAAAiAUQBFApAHBSQAHBPg4BEQguA3hHARQgVAFgVAAQgYAAgWgHg");
	this.shape_1.setTransform(16.994,18.4173);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ear_left, new cjs.Rectangle(-2.7,-1.2,40.7,41.5), null);


(lib.cuff_same = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("ACbAOQAHgygCgaQAAgVgBgIQgBgNgJgOQgaAAghADQhDAFghAMQhAAYguApQgjAfgCAKQgGA8AHA+");
	this.shape.setTransform(22.5877,12.1647,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6).p("ADqiPQAKgEgYBIQgYBFgQAbQggA3hcAnQhwAyhGgkQgegQgrg0QgqgzAGgJQADgGAzAcQA2AeAIgBQAJgCAIg1QAIg3AKgDQAKgCAxAdQAvAeALgDQALgDAUgxQAUgxAJgCQAKgDAcAWQAcAXAIgBQAJgBAZgiQAagkAHgDg");
	this.shape_1.setTransform(23.6796,21.3197,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CA2C2B").s().p("AiWByQgEhAgBgtQAAgFAGgCQABgKAEgIQAJgXAagOQASgKAggFQABgEADgCQAfgZAbgMQAOgGAQAKQAcgRAXACQAMADAIADQAGgEAGgBQAGgBAKABQAIACAFAIQAEAIgCAIIAAABQAEAGACAQQADAQgGAHIABALIgBAEIAEANQAFAOgOAIQgOAHgKgKQgQgUgIgIQgBADgIAFQgSAIgIAAQgKAogIATQgPAhgVABQgIABgHgEIgMgKQgegXgVgKQgPgFgKgGQgJAFgJgCIgBAGIgIBXQgBANgNAAQgNAAgBgNg");
	this.shape_2.setTransform(22.2342,12.7344,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EEBA33").s().p("AiaBXQglgggcg1QgCgEAEgEQAFgDAEAEQAQAPAUAQQAEgEAEABQASAHATADIACgLQAHgeAFgQQAHgZAMgSQACgEAFgBQAFAAADADQAFAAADACIALALIAEABIAIACIAIAAIAXAIIA7ARIAJgjIAJgjQAIgTAQgFQAFgCAEADQAFACABAFQAFgBAGABQAKABAIAEIARAJQAOAJAJgDQAHgDAMgPQAKgLANAIQAOAJgEANQgYBLgqAmQgvAsgnARQgZAOgdAEQgqAVgdADIgMABQgsAAgpglg");
	this.shape_3.setTransform(23.1239,23.1225,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cuff_same, new cjs.Rectangle(-4.8,-1,58.4,39), null);


(lib.cuff_01_fill = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EFF1EC").s().p("ABsC0IgZgTQgMADgKgFQgZgMgzgbQgDACgIACQgSgMgjgJIgEgKIgBgGQgkgOgcgHQgIgCgGgHQgFgHAAgJIgDhlQgBg9AGgoQgBgDABgIQADgJgBgFIABABIAIABIAMADIANADIAKABIANAEQAIACAGgCQAEgCACgDIATALQAWADAsAPIA7AUQAjAOAUAOQALAHAIALQALADAJAGQAOALAEASQACAIgCANQgDAOAAAGQABAFACAFQABAdgJBDIgCAMIgEAFIAAABQgBAdgMAbQgFAKgLAAIgCABQgJAAgIgHg");
	this.shape.setTransform(17.1294,18.6518);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cuff_01_fill, new cjs.Rectangle(0,0,34.3,37.3), null);


(lib.collar_white = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AiigJICXCMQA3gOBEg9QBDg6gMgTQgCgDgwgoQhAg2gLgJQgFgEgHAAQgGAAgGAEQgjAigiAZQgPALgmAHQguAJgGACQgJAEgCAJQgCAKAHAHg");
	this.shape.setTransform(61.0939,13.243);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFF1EC").s().p("AiigIQgHgHACgKQACgKAJgDQAGgCAugJQAmgIAPgLQAigZAjghQAGgFAGAAQAHAAAFAFIBLA/QAwAnACAEQAMAThDA6QhEA8g3APg");
	this.shape_1.setTransform(61.0939,13.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6).p("ACjgJIiXCMQg3gOhEg9QhDg6AMgTQACgDAwgoQBAg2ALgJQAFgEAHAAQAGAAAFAEQAoAlAeAWQAPALAmAHQAuAJAFACQAKAEACAJQACAKgHAHg");
	this.shape_2.setTransform(16.8561,13.243);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFF1EC").s().p("AhvA5QhDg6AMgTQACgEAwgnIBLg/QAFgFAHAAQAGAAAFAFQAoAkAeAWQAPALAmAIQAuAJAFACQAKADACAKQACAKgHAHIiXCMQg3gPhEg8g");
	this.shape_3.setTransform(16.8561,13.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.collar_white, new cjs.Rectangle(-1.2,-8.9,80.4,37.2), null);


(lib.btn_yellow = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FBC85B").s().p("AkXG1Qh0h0AAikQAAiJDQkrQBniWBnh7QBeB7BfCWQC8ErAACJQAACkh0B0Qh0B0ikAAQijAAh0h0g");
	this.shape.setTransform(39.6,23.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_yellow, new cjs.Rectangle(0,-31.4,79.2,110.6), null);


(lib.btn_white = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AkXGcQh0h0AAikQAAhMBBiGQA3hyBWh/QBQhzA5g7QA7g+gJAyQgJAtA7BRQAeAoBsB6QBkBvAsBCQBCBjAABJQAACkh0B0Qh0B0ikAAQijAAh0h0g");
	this.shape.setTransform(39.6,26.3213);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_white, new cjs.Rectangle(0,-26.5,79.2,105.7), null);


(lib.btn_reset = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9EFE5").s().p("ABHBRIAAhkQAAgOgFgGQgGgGgNAAQgTAAgHASIAABsIgqAAIAAhkQAAgOgFgGQgGgGgNAAQgRAAgJAPIAABvIgpAAIAAieIAnAAIABASQARgVAdAAQAdAAAMAYQARgYAeAAQAaAAANAPQAMAPAAAfIAABkg");
	this.shape.setTransform(137.6,28.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9EFE5").s().p("Ag2A8QgUgWAAgmIAAAAQAAgYAJgTQAJgSARgKQARgKAWAAQAgAAAUATQAUAUADAiIAAAKQAAAkgUAWQgVAWgiAAQghAAgVgWgAgXgjQgJAMAAAZQAAAWAJAMQAIAMAPAAQAPAAAJgMQAJgMAAgZQAAgWgJgMQgJgMgPAAQgPAAgIAMg");
	this.shape_1.setTransform(116.125,28.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9EFE5").s().p("Ag2BFQgQgOAAgUQAAgZATgNQATgNAigBIATAAIAAgJQABgLgGgGQgFgHgMAAQgLAAgFAFQgHAFAAAJIgqAAQAAgNAIgMQAJgMAPgGQAQgHASAAQAdAAASAPQARAOAAAbIAABEQAAAWAHAMIAAACIgsAAQgCgFgBgJQgQARgYAAQgXAAgPgNgAgbAdIAAADQAAAIAFAFQAGAFAJAAQAJAAAIgEQAIgFADgHIAAgbIgPAAQgfAAgCAWg");
	this.shape_2.setTransform(92.2,28.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9EFE5").s().p("AgXA3IAAhUIgXAAIAAgfIAXAAIAAgnIApAAIAAAnIAbAAIAAAfIgbAAIAABOQABAJADAEQADADAJAAIANgBIAAAgQgMAEgNAAQgsAAgBgtg");
	this.shape_3.setTransform(78.9,26.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9EFE5").s().p("AgsBRIAAieIAoAAIABATQAMgWAWAAQAIAAAGACIgBApIgPgBQgYAAgHAQIAABng");
	this.shape_4.setTransform(69.275,28.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9EFE5").s().p("Ag2BFQgPgOgBgUQABgZASgNQATgNAigBIAUAAIAAgJQAAgLgGgGQgGgHgLAAQgKAAgHAFQgFAFAAAJIgrAAQAAgNAJgMQAIgMAPgGQAQgHASAAQAdAAASAPQARAOAAAbIAABEQAAAWAGAMIAAACIgrAAQgDgFAAgJQgQARgYAAQgXAAgPgNgAgbAdIAAADQAAAIAGAFQAFAFAJAAQAJAAAIgEQAIgFAEgHIAAgbIgQAAQgfAAgCAWg");
	this.shape_5.setTransform(55.15,28.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9EFE5").s().p("AgXA3IAAhUIgXAAIAAgfIAXAAIAAgnIAqAAIAAAnIAbAAIAAAfIgbAAIAABOQAAAJADAEQADADAJAAIANgBIAAAgQgNAEgMAAQgsAAgBgtg");
	this.shape_6.setTransform(41.85,26.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9EFE5").s().p("AgnBkQgUgIgLgQQgLgQAAgUIAsAAQAAAiAqABQAPgBAJgFQAJgHAAgLQAAgNgJgGQgJgHgWgIQgWgHgOgHQgkgTAAghQAAgRAKgOQAJgNATgIQASgHAWgBQAWAAASAJQASAIAKAPQAKAPAAATIgsAAQAAgPgJgHQgJgJgRAAQgPABgJAGQgJAHAAALQAAAKAKAIQALAHATAFQAmAMARAPQARARAAAaQAAAbgVAQQgVAPgjAAQgYAAgUgJg");
	this.shape_7.setTransform(27.775,25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9EFE5").s().p("AMeEjQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIAPAAIAAgQQAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGIAAAfQAAAGgEAFQgFAEgGAAgAKmEjQgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAIuEjQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAG2EjQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAE+EjQgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgADGEjQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgABOEjQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAgpEjQgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA7AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAihEjQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAkZEjQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAmREjQgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAoJEjQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAqBEjQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAr5EjQgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAsyEVQgGgBgEgFQgOgQAAgdIAAgZQAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAAZQAAARAHAJQAEAFgBAGQAAAEgDAEIgCACQgEAEgFAAIgCAAgAMxDEQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgFgEgAtGCYQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgFgEgAMxBLQgEgEAAgGIAAg8QAAgFAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAFIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgAtGAfQgEgEAAgGIAAg7QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA7QAAAGgEAEQgFAFgGAAQgGAAgFgFgAMxgrQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgFgEgAtGhYQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgFgFgAMxijQgEgFAAgGIAAgzIAAgHQAAgGAEgEQAEgDAEgBIADgBQAGABAFAEQAEAEAAAGIAAAHIAAAzQAAAGgEAFQgFAEgGAAQgGAAgFgEgAtGjPQgEgFAAgGIAAg5QAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAIgtAAIAAAqQAAAGgEAFQgFAEgGAAQgGAAgFgEgAMWkDIgMgBIguAAQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIAuAAIAQABQAGABAEAFQAEAFgBAGIgBADQgBAEgEADQgEADgFAAIgCAAgAJkkEQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAHskEQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAF0kEQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAD8kEQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgACEkEQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAAMkEQgGAAgEgFQgEgEAAgGQAAgGAEgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAhrkEQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAjjkEQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAlbkEQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAnTkEQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgApLkEQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgArDkEQgGAAgEgFQgFgEAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAg");
	this.shape_8.setTransform(82.8,25.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(114,144,131,0.008)").s().p("ALxEUQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgFgFQgEgEgGAAIg8AAQgGAAgFAEQgEAFAAAGIgeAAQAAgGgFgFQgEgEgGAAIg8AAQgGAAgFAEQgEAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgFgFQgEgEgGAAIg8AAQgGAAgFAEQgEAFAAAGIgeAAQAAgGgFgFQgEgEgGAAIg8AAQgGAAgFAEQgEAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg7AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgFgFQgEgEgGAAIg8AAQgGAAgFAEQgEAFAAAGIgeAAQAAgGgFgFQgEgEgGAAIg8AAQgGAAgFAEQgEAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgFgFQgEgEgGAAIg8AAQgGAAgFAEQgEAFAAAGIgeAAQAAgGgFgFQgEgEgGAAIg8AAQgGAAgFAEQgEAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgBAAQgQAAgMgFQADgEAAgEQABgGgEgFQgHgJAAgRIAAgZQAAgGgEgFQgFgEgGAAIAAgeQAGAAAFgEQAEgFAAgGIAAg8QAAgGgEgEQgFgFgGAAIAAgeQAGAAAFgFQAEgEAAgGIAAg7QAAgGgEgFQgFgEgGAAIAAgeQAGAAAFgFQAEgEAAgGIAAg8QAAgGgEgFQgFgEgGAAIAAgeQAGAAAFgEQAEgFAAgGIAAgqIAtAAQAGAAAEgFQAFgEAAgGIAeAAQAAAGAFAEQAEAFAGAAIA8AAQAGAAAFgFQAEgEAAgGIAeAAQAAAGAEAEQAFAFAGAAIA8AAQAGAAAEgFQAFgEAAgGIAeAAQAAAGAEAEQAFAFAGAAIA8AAQAGAAAEgFQAFgEAAgGIAeAAQAAAGAFAEQAEAFAGAAIA8AAQAGAAAFgFQAEgEAAgGIAeAAQAAAGAEAEQAFAFAGAAIA8AAQAGAAAEgFQAFgEAAgGIAeAAQAAAGAEAEQAFAFAGAAIA8AAQAGAAAEgFQAFgEAAgGIAeAAQAAAGAEAEQAEAFAGAAIA8AAQAGAAAFgFQAEgEAAgGIAeAAQAAAGAEAEQAFAFAGAAIA8AAQAGAAAEgFQAFgEAAgGIAeAAQAAAGAEAEQAFAFAGAAIA8AAQAGAAAEgFQAFgEAAgGIAeAAQAAAGAFAEQAEAFAGAAIA8AAQAGAAAFgFQAEgEAAgGIAeAAQAAAGAEAEQAFAFAGAAIA8AAQAGAAAEgFQAFgEAAgGIAeAAQAAAGAEAEQAFAFAGAAIA8AAQAGAAAEgFQAFgEAAgGIAeAAQAAAGAFAEQAEAFAGAAIAuAAIAMABQAGABAFgEQAEgDABgEQAOAHAFAQQgEABgEADQgEAEAAAGIAAAHIAAAzQAAAGAEAFQAFAEAGAAIAAAeQgGAAgFAFQgEAEAAAGIAAA8QAAAGAEAFQAFAEAGAAIAAAeQgGAAgFAEQgEAFAAAFIAAA8QAAAGAEAEQAFAFAGAAIAAAeQgGAAgFAFQgEAEAAAGIAAA8QAAAGAEAFQAFAEAGAAIAAAeQgGAAgFAFQgEAEAAAGIAAAQIgPAAQgGAAgFAEQgEAFAAAGg");
	this.shape_9.setTransform(82.8,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_reset, new cjs.Rectangle(-1.5,-3.6,168.6,58.2), null);


(lib.btn_pants_decoration_tassels_01 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("AATAfQAoASApgOQApgOAVglQAGgNAAgIQABgMgIgHIgHgBQgUgHgWAOQgNAIgUAVQg9A7g3AQQgjALgjgHQglgHgYgZ");
	this.shape.setTransform(51.1553,6.9962);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6,1).p("AjCA1QAiAUA4gbQAVgKAbgSQAfgTAQgKQA2gjAtgKQA+gNArAe");
	this.shape_1.setTransform(42.1,6.1435);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6,1).p("AhiAfQAlgpA2gOQA1gPA1AS");
	this.shape_2.setTransform(33.4,5.8015);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6,1).p("AAAh+QgUA2gLBGQgKBDACA8IBIgLQgRh1AYh6");
	this.shape_3.setTransform(16.726,24.6244);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6,1).p("ABHhyQg+AcgpA4QgrA4gKBDIA9ATIBwjX");
	this.shape_4.setTransform(8.6268,21.4572);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EEBA33").s().p("AgaB6QgHgGABgKIAOhKQAAgPABgPQACgVAFgQIAGgQIAEgSQAHglAHgNQAEgHAIACQAIACgBAIIgFAlQADAEAAAGQAAAOgGAdQgDARAAAXQAAAoAKAsQABAIgEAGQgFAGgHAAQgQgBgJAFQgEABgEAAQgFAAgFgDg");
	this.shape_5.setTransform(16.139,24.6479);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EEBA33").s().p("Ag+AxQgFgFAEgHQAFgKAMgLIAUgRIAcgZIAHgIQAUgVATACQAMACAEAMQAEAKgFANQgGAQgWAQQgjAbgzAKIgDABQgFAAgDgFg");
	this.shape_6.setTransform(61.025,6.5531);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EEBA33").s().p("AhOAjQgEgHAEgGQAGgIAHgGQABgEADgCQAHgHAYgKIAggOQApgQAcAFQAJACABAKQABAKgIADIhEAiQgoATghAEIgBAAQgGAAgEgHg");
	this.shape_7.setTransform(31.7989,7.4156);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CA2C2B").s().p("AhLA3QgBAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQgUABgUgIQgIgEABgLQACgIAJgEQALgFANgJIAXgQQAXgQAagIQARgGAUgEIAagIQAigLAWAOIADADQANgFAHALQADAGgBAHQgCAHgGADQgQAIgYAUQgbAYgNAHQgVAMggAFQgRADgNAAQgRAAgNgFg");
	this.shape_8.setTransform(48.2919,6.7408);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CA2C2B").s().p("AgkBqIgUgFQgOgFgDgCQgIgHACgLQABgGAGgMQAHgMAOgQQASgqATgYQANgPAVgTIAlggQAHgFAIADQAJACgBAKQgCASgOASIgKALIgIANIgBACIgCAEIAAABQgUA2gJAVQgMAXgHAOQgMATgRAAIgCAAg");
	this.shape_9.setTransform(8.711,20.7772);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6,1).p("AgLAhQASAHAQgNQALgIAMgaQAHgRgHgHQgHgGgOAFQghAMgZAbQAGAAADAB");
	this.shape_10.setTransform(19.2951,8.5475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CA2C2B").s().p("AgUAbQgJgCgCgJQgCgKAKgIQAGgIAKgHQACgCADAAQALgKAKADIAGABQAGACABAFQACAGgEAEIgCACQgBAGgFAGQgHAMgSAHQgGACgGAAIgFAAg");
	this.shape_11.setTransform(20.3788,9.0546);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_pants_decoration_tassels_01, new cjs.Rectangle(-1.4,-3.4,70.7,42), null);


(lib.btn_pants_decoration_ribbons_01 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("AgEAWIAJgr");
	this.shape.setTransform(21.35,54.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6,1).p("AADgWIgFAt");
	this.shape_1.setTransform(25.2,55.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6,1).p("AABgUIgBAp");
	this.shape_2.setTransform(30.425,55.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6,1).p("AgBgVQABAPACAc");
	this.shape_3.setTransform(35.875,54.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6,1).p("AhOgJQBOAWBPgD");
	this.shape_4.setTransform(27.9,51.3481);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.6,1).p("AgJh4IATDy");
	this.shape_5.setTransform(34.675,39.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6,1).p("AAFgbQgEAJgBASQgBATgDAJ");
	this.shape_6.setTransform(17.575,59.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F1806").ss(2.6,1).p("AAIgZIgPAz");
	this.shape_7.setTransform(14.2,59.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6,1).p("AANgaQgGAegTAX");
	this.shape_8.setTransform(10.1,58.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5F1806").ss(2.6,1).p("AANgbIgZA3");
	this.shape_9.setTransform(6.15,56.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6,1).p("AATgbIglA3");
	this.shape_10.setTransform(1.9,54.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5F1806").ss(2.6,1).p("AhHgXQBHAjBIAL");
	this.shape_11.setTransform(10.975,53.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(2.6,1).p("AA1iUQhOCNgcCc");
	this.shape_12.setTransform(23.95,40.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5F1806").ss(2.6,1).p("AA/iXQhcCNghCi");
	this.shape_13.setTransform(10.275,35.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5F1806").ss(2.6,1).p("ABThoQhAgcgzAQQgXAHgMAcQgHAPgEAiQgFAyADAVQAFApAbAWQARAOAbAEQARADAfgB");
	this.shape_14.setTransform(24.2438,12.4127);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#5F1806").ss(2.6,1).p("AAfhzIgFAAQgPADgLAPQgFAJgIAYQgYBaAKBa");
	this.shape_15.setTransform(32.0175,13.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5F1806").ss(2.6,1).p("Ahqh1IDxgGIgJC4QgKATg/AWQg1ASggAEQgsAEg6gP");
	this.shape_16.setTransform(43.0326,13.8337);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#3F7745").ss(4.6,1).p("Ah5ANQA9ASA5gKQAvgJBOgj");
	this.shape_17.setTransform(42.325,20.6934);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#3F7745").ss(4.6,1).p("AhtADQAxAABCAAQAyAAA2gG");
	this.shape_18.setTransform(44.225,4.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F3DFC6").ss(4.6,1).p("Ah4AIQA+AMA8gHQA2gGBBgW");
	this.shape_19.setTransform(43.075,12.0539);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F3DFC6").s().p("AACBQQgHAAgHgGQgGgGgBgIIgGg/IAAgCQAEgEACgHIAIgUIAAAAIAAgBIAKgVQAHgJAGgMQADAFAAAEIAKB9QABAKgGAHQgGAIgJAAg");
	this.shape_20.setTransform(23.3571,45.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#3F7745").ss(4.6,1).p("AgJh6IATD1");
	this.shape_21.setTransform(31.375,39.175);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F3DFC6").s().p("AheD3IgDgBQAoiGAMgjQAUg2AxhJIgCgNQADgPgFgjIgBgEIAAgBIgBgMIgCgoIAAgIIAIgVQAIgZAAgQIAIgFIAlgSIAUgFQAAAKgGAGIgMARQgMAVgEAXQgKAzAKAsIAJA7IgFAHIgbAoQgeAwgLAiQgVA6ggBzIgBAEg");
	this.shape_22.setTransform(13.45,27.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#3F7745").ss(4.6,1).p("ABMkBIgQAOQgQAVgFAcQgKA0gBAHQgEAbADAOQAEAVALAiIgbAsQgcA0gNAlQgVA6gcBq");
	this.shape_23.setTransform(22.975,28.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CA2C2B").s().p("AiFEQQgJgBAAgHQgHAGgOgEIgUgJIgogRIgBgBQgLACgIgIIgCgCQgHgEgFgGQAAAAAAgBQgBAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQABgBAAAAQABAAAAgBQABAAAAAAIACgBQgCgMAAgNQAAgUAHgXQAEgOAMgbQAXg1APgcQALgUAlg1IATgbQgLgfgBgqQgCgsALgoQAHgZATgHQAPgGAcAAQAbABAMACQAVAFALANQADADABADQANgCAbgCIA9gGQBIgHAygCQAHgBAFAFQAFAEACAGQADANgDAbIgNB1QgBANgDAGQgDAJgIAFQgFADgWAJIgfANQgSAHgNADQg8AMgwgCQABANgBAMIgCAZQgDAfAGAeQALAxABAPIAGBBQABAFgEAGQgFAFgFABQgYADgZgEIgOgDQgLAEgJgIQgFACgFgCQgFgBgCgCQgFAHgJgCQgJgDgEgIIgUgDIgDgBQgHAZgEAUQgCAHgGAAIgCgBg");
	this.shape_24.setTransform(30.9742,27.8059);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5F1806").s().p("AgMAfQgCgSADgUIACgQQABgKADgFQACgHAHACIAAAAQAEAAACAGQACAGAAALIAAARQAAARABARQABAFgFAEQgEAEgFAAQgKAAgCgNg");
	this.shape_25.setTransform(25.6625,15.6528);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_pants_decoration_ribbons_01, new cjs.Rectangle(-1.2,-14.2,67.60000000000001,77.7), null);


(lib.btn_pants_decoration_buttons_01 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgYAAgSgSQgRgRAAgZQAAgXARgSQASgSAYAAQAZAAASASQARASAAAXg");
	this.shape.setTransform(6,5.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAQQgGgHAAgJQAAgJAGgGQAHgGAIAAQAJAAAHAGQAGAGAAAJQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_1.setTransform(7.225,4.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEBA33").s().p("AgqAqQgRgRAAgZQAAgXARgSQATgSAXAAQAZAAASASQARASAAAXQAAAZgRARQgSASgZAAQgYAAgSgSgAgCgiQgHAGAAAJQAAAKAHAGQAFAGAJAAQAJAAAHgGQAGgGABgKQgBgJgGgGQgHgHgJAAQgJAAgFAHg");
	this.shape_2.setTransform(6,5.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6).p("AA8AAQAAAZgRARQgSASgZAAQgYAAgSgSQgRgRAAgZQAAgXARgSQASgRAYAAQAZAAASARQARASAAAXg");
	this.shape_3.setTransform(6.55,24.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_4.setTransform(7.775,22.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EEBA33").s().p("AgqAqQgRgRAAgZQAAgYARgRQASgSAYAAQAZAAASASQARARAAAYQAAAZgRARQgSARgZAAQgYAAgSgRgAgCgiQgHAGAAAJQAAAJAHAHQAFAFAJAAQAJAAAHgFQAGgHABgJQgBgJgGgGQgHgHgJAAQgJAAgFAHg");
	this.shape_5.setTransform(6.55,24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_pants_decoration_buttons_01, new cjs.Rectangle(-1.2,-1.2,15,32.7), null);


(lib.btn_green = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#3F7745").s().p("AkXFiQh0h0AAikQAAiIC+jZQBfhtBehRQBmBRBoBtQDODZAACIQAACkh0B0Qh0B0ikAAQijAAh0h0g");
	this.shape.setTransform(39.575,32.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_green, new cjs.Rectangle(0,-14.8,79.2,94), null);


(lib.btn_gray = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CED6CB").s().p("AkXGQQh0h0AAikQAAiIC7kHQBeiDBdhpQBoBpBoCDQDREHAACIQAACkh0B0Qh0B0ikAAQijAAh0h0g");
	this.shape.setTransform(39.6,27.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_gray, new cjs.Rectangle(0,-24,79.2,103.2), null);


(lib.btn_girl = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgmDOIAAmbIBNAAIAAGbg");
	this.shape.setTransform(145.325,124.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhRCUIAAkiIBJAAIACAjQAXgoApAAQANAAALAEIgBBKIgcgCQgsAAgMAeIAAC9g");
	this.shape_1.setTransform(129.2,130);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmDLIAAkiIBMAAIAAEigAgeiFQgMgLgBgSQAAgRAMgLQALgMAUAAQAUAAAMAMQALALABARQgBASgLALQgMALgUAAQgTAAgLgLg");
	this.shape_2.setTransform(110.75,124.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhOCzQgmgXgVgpQgVgrgBg4IAAgaQAAg7AUgqQAUgsAlgWQAlgXAxAAQBGAAAnAiQAnAgAIBAIhPAAQgFgigTgPQgSgQggAAQgoAAgWAfQgVAfgBA9IAAAYQAAA9AYAgQAXAfAsAAQAuAAATgTIAAhDIhJAAIAAg7ICaAAIAACbQgWAagoAPQgoAOgwAAQgyAAgmgWg");
	this.shape_3.setTransform(84.475,125.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F9EFE5").ss(1,1,1).p("A0J0JMAoTAAAMAAAAoTMgoTAAAg");
	this.shape_4.setTransform(128.975,128.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9EFE5").s().p("A0JUKMAAAgoTMAoTAAAMAAAAoTg");
	this.shape_5.setTransform(128.975,128.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_girl, new cjs.Rectangle(-1,-1,260,260), null);


(lib.btn_brown = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A3250C").s().p("AkXGkQh0h0AAikQAAiIDQkbQBniOBnhyQBeByBfCOQC8EbAACIQAACkh0B0Qh0B0ikAAQijAAh0h0g");
	this.shape.setTransform(39.6,25.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_brown, new cjs.Rectangle(0,-28,79.2,107.2), null);


(lib.btn_boy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AhqDHIAAg7IAMAAQAWAAALgHQALgGAGgQIAJgYIhlkiIBTAAIA1C1IA2i1IBTAAIh1FPIgGAPQgZA5g8AAQgRAAgSgFg");
	this.shape.setTransform(179.975,136.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhjBuQgmgoAAhFIAAgDQAAgrARgiQARgiAfgSQAfgTApAAQA7AAAlAkQAlAkAEA+IABATQAABDgmAoQglApg/AAQg+AAglgpgAgrhBQgQAWAAAuQAAApAQAWQAPAWAcAAQAcAAAQgWQAQgVAAgvQAAgpgQgWQgQgWgcAAQgcAAgPAWg");
	this.shape_1.setTransform(150.625,130.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiQDEIAAmHICJAAQBGAAAlAcQAkAbAAA0QAAAdgOAWQgPAWgaALQAeAGARAXQARAXAAAgQAAA5gkAdQgkAdhCABgAhACDIBEAAQAdAAAQgOQAQgOAAgXQAAg2g4gBIhJAAgAhAgeIA8AAQA8gCAAgwQAAgagPgLQgQgMggAAIg5AAg");
	this.shape_2.setTransform(118.025,125.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F9EFE5").ss(1,1,1).p("A0J0JMAoTAAAMAAAAoTMgoTAAAg");
	this.shape_3.setTransform(128.975,128.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9EFE5").s().p("A0JUKMAAAgoTMAoTAAAMAAAAoTg");
	this.shape_4.setTransform(128.975,128.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_boy, new cjs.Rectangle(-1,-1,260,260), null);


(lib.btn_blue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#1D438A").s().p("AkXGAQh0h0AAikQAAhKA4hUQAog8BVhYQB4h7ANgPQBChKAMg1QAOg6BBAwQA7AsBNBtQBMBuAzByQA5B+AABOQAACkh0B0Qh0B0ikAAQijAAh0h0g");
	this.shape.setTransform(39.6,29.2382);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_blue, new cjs.Rectangle(0,-20.7,79.2,99.9), null);


(lib.btn_black = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#070F21").s().p("AkXGcQh0h0AAikQAAhMBBiGQA3hyBWh/QBQhzA5g7QA7g+gJAyQgJAtA7BRQAeAoBsB6QBkBvAsBCQBCBjAABJQAACkh0B0Qh0B0ikAAQijAAh0h0g");
	this.shape.setTransform(39.6,26.3213);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_black, new cjs.Rectangle(0,-26.5,79.2,105.7), null);


(lib.btn_back = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AAtDOIhJh0IgcAcIAABYIhOAAIAAmbIBOAAIAADjIAPgTIBKhWIBcAAIhpB4IByCpg");
	this.shape.setTransform(161.7,33.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhbBvQgkgoAAhFIAAgFQAAhDAkgoQAkgoA+AAQA2AAAhAfQAhAfAAA0IhJAAQAAgXgNgOQgOgOgWAAQgaAAgOAUQgNATAAAtIAAAHQAAAtANATQAOAUAbAAQAVAAAOgMQANgMAAgTIBJAAQAAAdgQAZQgQAYgbAOQgbAOgiAAQg9AAglgog");
	this.shape_1.setTransform(131.1,39.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhkB+QgcgZAAglQAAgvAigXQAigZBAAAIAjAAIAAgRQABgUgLgMQgKgMgWAAQgTAAgLAJQgLAKAAAQIhOAAQAAgZAQgWQAPgVAdgMQAcgNAjAAQA1AAAgAbQAfAbABAxIAAB9QAAApALAWIAAAEIhPAAQgFgKgCgQQgcAggtAAQgqAAgcgZgAgzA1IAAAFQAAAOAKAKQALAJARAAQAQAAAPgHQAPgIAGgNIAAgyIgcAAQg5AAgFAog");
	this.shape_2.setTransform(101.9,39.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiQDEIAAmHICJAAQBGABAlAbQAkAbAAA0QAAAdgOAXQgPAVgaAKQAeAHARAXQARAWAAAiQAAA4gkAdQgkAdhCABgAhACDIBEAAQAdAAAQgNQAQgOAAgYQAAg2g4gBIhJAAgAhAgfIA8AAQA8gBAAgvQAAgbgPgLQgQgNggAAIg5AAg");
	this.shape_3.setTransform(70.075,34.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9EFE5").s().p("AP9F3QgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAOFF3QgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAMNF3QgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAKVF3QgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAIdF3QgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAGlF3QgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAEtF3QgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAC1F3QgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAA9F3QgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAg6F3QgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA7AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAiyF3QgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAkqF3QgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAmiF3QgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAoaF3QgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAqSF3QgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAsKF3QgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAuCF3QgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAv6F3QgGAAgEgEQgFgFAAgGQAAgGAFgFQAEgEAGAAIA8AAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgAxfF3QgGAAgFgEQgEgFAAgGIAAgTQAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAAEIAaAAQAGAAAFAEQAEAFAAAGQAAAGgEAFQgFAEgGAAgARWFdQgFgEAAgGIAAg8QAAgGAFgFQAEgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgEgFgAxqEkQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgARWDmQgFgFAAgGIAAg8QAAgGAFgFQAEgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgEgEgAxqCsQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgARWBuQgFgFAAgGIAAg8QAAgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgEgEgAxqAzQgEgEAAgGIAAg7QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA7QAAAGgFAEQgEAFgGAAQgGAAgFgFgARWgKQgFgEAAgGIAAg8QAAgGAFgFQAEgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgEgFgAxqhDQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgARWiCQgFgEAAgGIAAg8QAAgGAFgFQAEgEAGAAQAGAAAFAEQAEAFAAAGIAAA8QAAAGgEAEQgFAFgGAAQgGAAgEgFgAxqi7QgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgARWj5QgFgFAAgGIAAg8QAAgGAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAGIAAA8QAAAGgEAFQgFAEgGAAQgGAAgEgEgAxqk0QgEgEAAgGIAAgpQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAIgtAAIAAAaQAAAGgFAEQgEAFgGAAQgGAAgFgFgAQQlYQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAOYlYQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAMglYQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAKolYQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAIwlYQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAG4lYQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAFAlYQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgADIlYQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgABQlYQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAgnlYQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA7AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAiflYQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAkXlYQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAmPlYQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAoHlYQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAp/lYQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAr3lYQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAtvlYQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAgAvnlYQgGAAgFgEQgEgFAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAFQgEAEgGAAg");
	this.shape_4.setTransform(112.025,36);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ARIFoQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg7AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIg8AAQgGAAgEAEQgFAFAAAGIgeAAQAAgGgEgFQgFgEgGAAIgaAAIAAgEQAAgGgFgFQgEgEgGAAIAAgeQAGAAAEgEQAFgFAAgGIAAg8QAAgGgFgEQgEgFgGAAIAAgeQAGAAAEgEQAFgFAAgGIAAg8QAAgGgFgEQgEgFgGAAIAAgeQAGAAAEgFQAFgEAAgGIAAg7QAAgGgFgFQgEgEgGAAIAAgeQAGAAAEgEQAFgFAAgGIAAg8QAAgGgFgEQgEgFgGAAIAAgeQAGAAAEgEQAFgFAAgGIAAg8QAAgGgFgEQgEgFgGAAIAAgeQAGAAAEgFQAFgEAAgGIAAgaIAtAAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA7AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAeAAQAAAGAEAFQAFAEAGAAIA8AAQAGAAAEgEQAFgFAAgGIAFAAIAAAYQgGAAgEAFQgFAEAAAGIAAA8QAAAGAFAFQAEAEAGAAIAAAeQgGAAgEAEQgFAFAAAGIAAA8QAAAGAFAEQAEAFAGAAIAAAeQgGAAgEAEQgFAFAAAGIAAA8QAAAGAFAEQAEAFAGAAIAAAdQgGAAgEAFQgFAEAAAGIAAA8QAAAGAFAFQAEAEAGAAIAAAeQgGAAgEAEQgFAFAAAGIAAA8QAAAGAFAFQAEAEAGAAIAAAeQgGAAgEAEQgFAFAAAGIAAA8QAAAGAFAEQAEAFAGAAIAAAGg");
	this.shape_5.setTransform(112.025,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_back, new cjs.Rectangle(-1.5,-5.6,227.1,79.1), null);


(lib.beard_gray = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#384663").ss(2.6).p("ApIhCQgmkjgLhiQgFgogMgSQgJgOgPgFQgQgGgNAHQgXAMAAAxQAAAkAJBHQAFAoAMBWQASCfgeBCQgXAwArBYQAOAdAYAVQAYAVAeAKQgOAXADAfQADAcAPAZQAhA5ApATQAZAMAggCQARgBALgDIALAdQANAgAJAMQAwA/A6ALQAiAHAhgNQAigNAVgbQATASAnAnQAqAeBFACQA6ACAugeQAggWAlguQAhAgAvAKQAvAJArgQQArgQAeglQAegnAEgtQAjADAdgJQAggKATgYQAVgZAHghQAGghgJgfQAvgKAlgjQAlgiANgvQANgugNgxQgNgvgjgiQAYhOALh9QAKhugEhhQgCgwgOgWQgLgQgSgGQgUgHgPAJQgNAIgHATQgEANgBAYQgEBCgGCkQgGClgEBCQg+AKgoA2QgpA3AJA+QhCgJg+AlQg+AlgYA/Qg3gchBAJQhBAIgvApQg4glhFgKQhFgJhBASQgYg/g+glQg/gkhDAKQgFhfg4g4QgSgRgVgMg");
	this.shape.setTransform(72.6689,58.4254);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CED6CB").s().p("AgEJIQhFgCgqgeIg6g5QgVAbgiANQghANgigHQg6gLgwg/QgJgMgNggIgLgdQgLADgRABQggACgZgMQgpgTghg5QgPgZgDgcQgDgfAOgXQgegKgYgVQgYgVgOgdQgrhYAXgwQAehCgSifIgRh+QgJhHAAgkQAAgxAXgMQANgHAQAGQAPAFAJAOQAMASAFAoQALBiAmEjIARAIQAVAMASARQA4A4AFBfQBDgKA/AkQA+AlAYA/QBBgSBFAJQBFAKA4AlQAvgpBBgIQBBgJA3AcQAYg/A+glQA+glBCAJQgJg+Apg3QAog2A+gKQAEhCAGilQAGikAEhCQABgYAEgNQAHgTANgIQAPgJAUAHQASAGALAQQAOAWACAwQAEBhgKBuQgLB9gYBOQAjAiANAvQANAxgNAuQgNAvglAiQglAjgvAKQAJAfgGAhQgHAhgVAZQgTAYggAKQgdAJgjgDQgEAtgeAnQgeAlgrAQQgrAQgvgJQgvgKghggQglAuggAWQgsAcg4AAIgEAAg");
	this.shape_1.setTransform(72.6689,58.4254);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.beard_gray, new cjs.Rectangle(-7.1,-5.9,159,124.2), null);


(lib.arm_girl_fill = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EFF1EC").s().p("ADyLEQgrgCgpgXQgJACgJgBIgBAAIgzgUQgdgNgUgLQgJgBgFgGIgJgEQgJgFgGgFQgpgUgfgoQgOgSgHgOIgBgBQgDgFgOgoQgPgsgGgVQgUgfgQg3QgPg+gJgcQgjhegghdQg/i2AEghQgQg1gNhgQgIg/gBgQQgDguAJghQgBglAIgaQAJiNBRAEQARgLAXgEQAUgZAhACQBQADBAA6QBLBIAdAsQAWAhBGChQBECbAJAgQAoBYAYBuQATBYAMB4QAHBLgJECQgBAGgPAnQgQArgGAHQgWAXgpAAIgIAAg");
	this.shape.setTransform(35.6529,70.8069);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm_girl_fill, new cjs.Rectangle(0,0,71.3,141.6), null);


(lib.arm_fill = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EFF1EC").s().p("AEyK7QgSgBgOgCQgSgEghgMIh3gqQg2gUgkgEQgniFhqlMQhslOgoiDQgQgzgKhBQgUiCAjhCQArhSBCAOQAgAHAYAYQBFBSAvBUQAqBMAqBsQDAHqAuIMIgHAAg");
	this.shape.setTransform(31.3386,69.9354);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm_fill, new cjs.Rectangle(0,0,62.7,139.9), null);


(lib.apron_same = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#CA2C2B").ss(2.6).p("AgOhUQgKAKgHAYQgLAnABAYQACAmAWAWQAKAKAKABQAKABAJgGQAIgFAEgKQAHgNABgZQABgkgBgu");
	this.shape.setTransform(76.2408,24.4071);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CA2C2B").ss(2.6).p("AAcAyQgMABgMgHQgKgHgGgLQgLgVAIgcQAHgWANgDQABAAAHgBQAEgBADgC");
	this.shape_1.setTransform(69.4316,11.9779);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CA2C2B").ss(2.6).p("AA2g9QgNgCgTAKQgjASgRATQgZAbACAeQABAMAFAFQALAKAYgMIAsgWQAGgEAAgD");
	this.shape_2.setTransform(67.8176,22.8282);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F49C3B").s().p("AgCAaQgOgGgGgPQgGgPALgKQAMgMAMANQAGAHAKASQAFAJgHAHQgHAGgIgDQgCACgDAAIgDgBg");
	this.shape_3.setTransform(71.0335,13.8697);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F49C3B").s().p("AgSAhQgMgDgEgLQgEgKAFgKQAFgJAKgGIAVgLIAKgEQAFgCAFADQAEADAAAFIAEADQAEAEABAGQABAGgDAEQgJAMgZAPQgIAFgHAAIgDAAg");
	this.shape_4.setTransform(70.2154,20.2391);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CA2C2B").ss(2.6).p("AgvgxQAXACAVAMQATANANATQALAQgHALQgCAFgHAFQgXAQgZAA");
	this.shape_5.setTransform(174.203,19.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CA2C2B").ss(2.6).p("AglggQACgOAOgIQAOgIAMAEQAOADAKAMQAJALACAPQAEAZgQAVQgRAVgYADQgJAAgEABQgHABgEADQgEgCACgD");
	this.shape_6.setTransform(172.4661,8.9806);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CA2C2B").ss(2.6).p("AAGCLQAahJgHhDQgIhNgug0");
	this.shape_7.setTransform(221.7568,128.2014);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CA2C2B").ss(2.6).p("Agih2QgEAlAOA0QAUBNApBH");
	this.shape_8.setTransform(219.2069,130.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#CA2C2B").ss(2.6).p("AgqhyQgBAaATAcQAKAQAXAfQAUAdAIAlQAJAkgGAk");
	this.shape_9.setTransform(209.7026,133.7075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CA2C2B").ss(2.6).p("AATCBQAGgDABgMQADgsABgWQAAgkgEgcQgMhKgvgm");
	this.shape_10.setTransform(212.3443,133.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#CA2C2B").ss(2.6).p("AA4B+Qg/gmgbhGQgbhEAVhIQABgCABgB");
	this.shape_11.setTransform(209.2036,133.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CA2C2B").ss(2.6).p("AgbAQQAIAMAGAEQALAIAIgFQADgCAFgHQASgZgJgNQgCgEgIgGIgWgQ");
	this.shape_12.setTransform(215.571,114.793);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#CA2C2B").ss(2.6).p("AgOgXQgNARgFAWQAAADAAACQACADAHAAIAcAAQAJAAAEgBQANgFACga");
	this.shape_13.setTransform(206.55,118.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CA2C2B").ss(2.6).p("AhGAAQAmAYAsAQQALAEAHgBQAQgCAJgbQANggADgk");
	this.shape_14.setTransform(207.35,113.1108);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#CA2C2B").ss(2.6).p("Ag3htQAIAKARALQAcASAAABQAoAfANA3QALAvgMA5");
	this.shape_15.setTransform(198.5825,148.5991);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CA2C2B").ss(2.6).p("Ag1iOQAcAEAZAmQAiA1AHBBQAHBBgXA8");
	this.shape_16.setTransform(200.8151,148.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#CA2C2B").ss(2.6).p("Agwh9QgFgBgCAGQgDAGABAGQAGBFAjAnQAEAFAYAXQARARAHANQAHALAHAfIAJAk");
	this.shape_17.setTransform(197.9783,149.2288);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CA2C2B").ss(2.6).p("AggAEQAEAWAPARQAEADACABQADAAAFgEIAagTQAFgGABgDQABgDgBgGQgIgZgXgSQgCgBgBgDQgBgEACgB");
	this.shape_18.setTransform(192.5333,131.7278);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#CA2C2B").ss(2.6).p("AAHB8QAXg9gIhBQgIhDgkg2IABgG");
	this.shape_19.setTransform(190.292,156.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CA2C2B").ss(2.6).p("AgNiBQgMCAArB3");
	this.shape_20.setTransform(189.1322,157.153);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#CA2C2B").ss(2.6).p("AgahyQgFAHgCAPQgIA4AUA4QAUA4ApAn");
	this.shape_21.setTransform(185.862,156.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CA2C2B").ss(2.6).p("AgYgQQgHAUABAMQABAJAGAHQAFAHAIACQAIABAPgGQANgGADgHQACgEgBgLQgDgZgNgX");
	this.shape_22.setTransform(184.4011,140.3891);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#CA2C2B").ss(2.6).p("AAPh2QgXA4gEA+QgEA9AQA6");
	this.shape_23.setTransform(172.1111,152.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CA2C2B").ss(2.6).p("AgjB3QAFACAEgHQA7hUAChoQABgfgMgN");
	this.shape_24.setTransform(173.8037,153.6329);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#CA2C2B").ss(2.6).p("AAfiGQgeARgNAtQgRA0AIA3QAIA3AeAu");
	this.shape_25.setTransform(169.2307,152.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CA2C2B").ss(2.6).p("AgTgcQgQAYAHANQAHAMAaACQAHAAACgBQACgCADgDQALgNABgS");
	this.shape_26.setTransform(175.0053,138.1537);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#CA2C2B").ss(2.6).p("AgPhjQhHAHgiAmQgUAXgDAeQgCAfASAWQAMANAgAPQA7AZA2AQQAIACAFgBQAFgBAHgHQAtgqAbg4QATgngDgfQgCgWgOgSQgOgTgUgJ");
	this.shape_27.setTransform(178.5056,125.555);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CA2C2B").ss(2.6).p("AhyAvQAKAWAhACQAVABAegHIAFgBQBPgVAjghQAZgWgIgaQgIgZgegGQgegGgwARQgpANghAVQgVANgMAQQgPAXAIATg");
	this.shape_28.setTransform(205.1729,105.4763);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#CA2C2B").ss(2.6).p("AhXhLQgmADgZAhQgZAgAHAkQAEAQAHAIQAJAKAXAFQBfAVB/goQAlgLARgRQAMgLAFgOQAFgQgFgO");
	this.shape_29.setTransform(175.8773,108.3508);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#CA2C2B").ss(2.6).p("AhBARIAhgEQARgBAPgEQAfgHAYgU");
	this.shape_30.setTransform(182.1358,96.8238);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#CA2C2B").ss(2.6).p("Aggg4QgmAHgeAVQgeAWgJAZQgFAPADAQQAEARALAKQAVATAxgJQBRgQBHgrQAYgOAKgNQAQgTgEgUQgFgZgegNQgegPgkAD");
	this.shape_31.setTransform(200.8063,95.1723);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#CA2C2B").ss(2.6).p("Aggg6QgsAGgnAZQgoAbgHAfQgFAUAIATQAJATASAGQANAFAbgFQBvgWBig0QAzgagDgfQgCgggvgQQgegLgggB");
	this.shape_32.setTransform(195.5499,82.5816);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#CA2C2B").ss(2.6).p("AAxhnQg5ANgfARQgwAagOArQgHAWAFAYQAGAYARAPQANALAXAHQAjAJAsgGQAegEAygP");
	this.shape_33.setTransform(163.5221,90.782);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#CA2C2B").ss(2.6).p("AhgguQgaAPgTAYQgUAXgJAdQgFATADAJQAJAXAsgDQCFgMB0hBQAtgYgBgdQAAgTgTgNQgPgMgXgFQgogJgoAD");
	this.shape_34.setTransform(189.929,70.0086);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#CA2C2B").ss(2.6).p("AgNhVQg2ASgfAxQgWAiAJAbQAEAQAPALQANAKARAEQAZAGApgIQA6gLA1gS");
	this.shape_35.setTransform(159.9296,73.8413);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#CA2C2B").ss(2.6).p("AgiAJQAfgDAagQ");
	this.shape_36.setTransform(169.6251,61.9658);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#CA2C2B").ss(2.6).p("Ag9AMQArgYAxADQANAAAIAEQAMAGgCAL");
	this.shape_37.setTransform(161.2837,28.2564);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#CA2C2B").ss(2.6).p("AgIhDQgfALgmAbQgsAfgDAXQgDATAIASQAIATARAEQAOADAagJICEgvQAggLAJgQQAHgLAAgUQACgigPgMQgGgFgPgDQgegGgcAC");
	this.shape_38.setTransform(183.9709,58.124);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#CA2C2B").ss(2.6).p("AglhJQggAGgYAYQgXAYgGAfQgDAWAGAQQAFAOAMAKQAMAJAPACQATADAigNQBEgZAngVQAbgOAIgOQAJgRgJgUQgHgUgSgLQgQgJgWgEQgOgDgagB");
	this.shape_39.setTransform(177.742,46.7952);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#CA2C2B").ss(2.6).p("AhtAMQgKAVAJAPQAFAIAKAEQAPAHAUgCQAMgBAXgGIBXgYQAugNAGgXQAEgSgOgQQgKgMgUgIQgtgSg5AVQg7AWgWArg");
	this.shape_40.setTransform(171.4533,35.1134);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#CA2C2B").ss(2.6).p("AgfhAQgVAAgSAOQgRANgHAUQgDAKAAASQAAATAEAKQAFALAMAHQALAGANABQARACAhgJIA7gPQAcgHANAD");
	this.shape_41.setTransform(156.3,60.0932);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#CA2C2B").ss(2.6).p("AAnhDQgGACgnAGQggAGgKAIQgOALgEAIQgEAHgDASQgFAhAKAPQAKAPAdAFQAaAEAfgGQAUgEAlgL");
	this.shape_42.setTransform(152.8905,46.9395);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#CA2C2B").ss(2.6).p("AjImmQBYBsA0B/QAQAoAcBQQAQAsAlBUQAcBAA1B1QAxBuAfBH");
	this.shape_43.setTransform(187.9183,68.275);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#CA2C2B").ss(2.6).p("AAQAZQgFADgGgBQgFgBgEgEQgHgHgCgNQgCgIABgHQACgJAHgE");
	this.shape_44.setTransform(145.0929,30.0875);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#CA2C2B").ss(2.6).p("AAbgvQgVADgcASQgTANgIAMQgEAHgBAJQAAAKAFAHQAJAMAYACQAkAEAjgK");
	this.shape_45.setTransform(150.6977,34.9571);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#CA2C2B").ss(2.6).p("AiWorIB9FRQAgBZANAuQAbBbAiDhQAfDOAnBt");
	this.shape_46.setTransform(168.1771,82.9669);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#CA2C2B").ss(2.6).p("AhBgvQADAfASAZQATAbAbANIAMAEQAQAEAQgKQAPgKAEgRQAFgVgRgWQgLgOgYgT");
	this.shape_47.setTransform(166.1818,21.2397);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#CA2C2B").ss(2.6).p("AgtAaQgFgfACgTQADgcARgRQALgKAMAAQAIABAMAKQAXAWAIAiQAIAggMAfQgEALgGAFQgJAHgVAEQgUAEgKgFQgLgFgDgRQgCgVgBgIg");
	this.shape_48.setTransform(164.0673,7.9754);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#CA2C2B").ss(2.6).p("AgxA+QAIATARALQATALARgFQAWgGAMgXQAIgQADgdIACgiQAAgpgOgVQgIgPgPgHQgQgIgOAFQgkAKgKA8QgKA1APAkg");
	this.shape_49.setTransform(153.2658,16.9198);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#CA2C2B").ss(2.6).p("AARhTQgEgHgDgCQgHgDgHADQgPAHgIAdQgQA1ACAdQACAWALASQAMATARAIQAEACADgBQACAAAEgDQAPgKAHgbQAJgjgEgjQgFgmgTgdg");
	this.shape_50.setTransform(143.1386,18.0675);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#CA2C2B").ss(2.6).p("AgmAuQgBgVAIgTQAJgTAQgNQALgLALACQAJABAHAKQAFAJABALQAAADAAARQAAANACAI");
	this.shape_51.setTransform(134.6907,15.5406);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#CA2C2B").ss(2.6).p("AgtBKQgJgyARgxQAKgbARgIQAMgFAPAHQAOAIAIAOQAGALADARQABAJAAAVIAAAt");
	this.shape_52.setTransform(125.0192,13.4341);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#CA2C2B").ss(2.6).p("Ag1A/QgBgdAAgXQABgjAKgSQAGgOAMgIQAMgJANAAQAMABALAIQALAHAHAMQAKARADAfQACAkgEAj");
	this.shape_53.setTransform(113.8168,13.375);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#CA2C2B").ss(2.6).p("AgtBAQgFgIACgPQAEgkAJgmQAEgQAFgJQAJgNANgBQASgCAPAfQAUAnAAAiQAAAIgBAOQAAAMACAJ");
	this.shape_54.setTransform(103.2773,12.3689);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#CA2C2B").ss(2.6).p("AgzA+QACgvANgyQAFgNADgEQAGgJALgCQALgDAJAEQATAGALAXQAGAOADAaQAFAhgBAm");
	this.shape_55.setTransform(92.4341,11.6274);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#CA2C2B").ss(2.6).p("AglA6QgHgNgBgiQgBgXACgNQAEgUAKgMQAGgIAJgEQAJgEAIACQANAEAKASQAbAugHA2QgCAPADAG");
	this.shape_56.setTransform(82.8831,11.0667);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#CA2C2B").ss(2.6).p("AgKA6QgTgmgFguQgBgQADgHQAEgHAKgDQAJgDAJADQAPAFAIAUQAFANACAWIAFA6QAAADACAA");
	this.shape_57.setTransform(75.2639,10.575);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#CA2C2B").ss(2.6).p("AgoAkQAVAOAigNQAJgDAGgGQAGgGADgQQAEgZgCgY");
	this.shape_58.setTransform(133.9455,24.0064);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#CA2C2B").ss(2.6).p("Agug8QgFA0AWAuQALAYARADQAJACALgIQAIgHAGgMQANgYABggQACgWgEgm");
	this.shape_59.setTransform(124.9664,28.7158);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#CA2C2B").ss(2.6).p("Agug/IgBBNQAAARACAKQADAOAJAIQAIAHAMAAQAMABAJgFQARgKALgXQAMgegCgpQgBgYAGgH");
	this.shape_60.setTransform(115.5943,28.5327);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#CA2C2B").ss(2.6).p("Ag2hVQgGA3AQA0QAJAfAQAMQAKAIANABQAOABAJgIQAIgHAEgRQAUg/gDhA");
	this.shape_61.setTransform(105.0203,28.6173);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#CA2C2B").ss(2.6).p("AgohTIgDAlQgEAmADAVQAFAiAXASQANAKAKgDQAPgCAJgYQAVg1gIg6");
	this.shape_62.setTransform(95.1268,28.2775);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#CA2C2B").ss(2.6).p("Ag0hWIACBPQAAAXAEAOQAEAVANALQAKAKAOACQAOACAMgGQAEgBADgDQADgDADgKQAUg/gBhD");
	this.shape_63.setTransform(85.4526,27.1831);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#CA2C2B").ss(2.6).p("AlAgWQBTAOBoAKQBEAGB4AJQAzAEAoABQBZADBhgP");
	this.shape_64.setTransform(106.2854,19.0339);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#5F1806").ss(2.6).p("AhGBKQAgg8Aqg7QATgZAQgCQAPgCAWAQ");
	this.shape_65.setTransform(237.557,229.3436);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#5F1806").ss(2.6).p("AhbBPQAWhRA8g+QAFgFAEAAQABABAFADQAqAnAwA0");
	this.shape_66.setTransform(220.1392,235.5006);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#5F1806").ss(2.6).p("AhbBGQgBgEAEgKQAgg/AtgzQAJgLAHAAQAGAAAIAHQAUATAVAbQALAQAXAk");
	this.shape_67.setTransform(200.5594,241.05);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#5F1806").ss(2.6).p("AhuBHQAbhKA7gyQAJgHAEgBQALgDAQAPQAzAtAsAw");
	this.shape_68.setTransform(179.85,244.379);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#5F1806").ss(2.6).p("AhyBHQAJgKApg/QAeguAdgTQAEgDACAAQADAAADACQBLAsAhBO");
	this.shape_69.setTransform(156.775,247.175);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#5F1806").ss(2.6).p("Ah7BIQAxhIA+g6QAFgFAEgCQAIgCANAKQA8AxAnBEQADAFADgBQACgBgCgC");
	this.shape_70.setTransform(133.275,248.242);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#5F1806").ss(2.6).p("AhwBCQAohQBIg2QAFgEAEABQACAAADAEQAbAcAMAPQAVAZAMAWQAFAJAJASQAIAOAJAI");
	this.shape_71.setTransform(109.7231,248.4159);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#5F1806").ss(2.6).p("AhvAyQAohBA2g0QAIgIAGABQADABAGAHQA7BDAuBQ");
	this.shape_72.setTransform(87.3,248.0012);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#5F1806").ss(2.6).p("AhuAZIBxhfQACgCACAAQAEgBAEAIQAKAWAmAuQAjApAIAd");
	this.shape_73.setTransform(65.5258,246.8735);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#5F1806").ss(2.6).p("AhJAWQAhgwAugkQAFgDABAAQAEABACAGIA5CD");
	this.shape_74.setTransform(45.7228,242.1652);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#5F1806").ss(2.6).p("AhgADQA0gXAsgpQAPgOAIAHQADADACAGQAaBFAmA9");
	this.shape_75.setTransform(27.8989,237.0333);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#5F1806").ss(2.6).p("AhSAKQAYgzAtgnQAPAEALASQAHALAJAYQAVA5AjAw");
	this.shape_76.setTransform(10.1794,229.7631);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#070F21").ss(2.6).p("AS2hyQkHBeigArQjsBCjHAPQhMAGi0ADQivAChPgBQiPgChxgKQmXgjl7ii");
	this.shape_77.setTransform(123.0144,210.8542);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#5F1806").ss(2.6).p("AzPh/QDOBXBrAnQCxA+CTAdQCDAZCcAIQB9AGClgEQFggKEegzQFRg9ERh5");
	this.shape_78.setTransform(124.3629,243.1711);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#070F21").ss(2.6).p("AiEnfQBNCkAsBzQA7CbAeCFQAiCYAUD0");
	this.shape_79.setTransform(230.2604,152.4561);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#5F1806").ss(2.6).p("AgLidIAXE7");
	this.shape_80.setTransform(244.625,216.65);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#070F21").ss(2.6).p("AFctoQk+FqixHHQiwHBgUHn");
	this.shape_81.setTransform(35.8921,114.0811);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#5F1806").ss(2.6).p("AAAiWQgGCVAJCY");
	this.shape_82.setTransform(1.5242,217.341);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#070F21").ss(2.6).p("AgMkpQAhEngLEt");
	this.shape_83.setTransform(121.965,61.6262);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#070F21").ss(2.6).p("ABgk3QhPCRgvCgQgwCegPCl");
	this.shape_84.setTransform(73.1973,64.626);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#F49C3B").s().p("AAOB0QgNgcgHgnIgCgDQgUgigJgqQgLgzAOgdQAEgHAIgEQAJgDAHACQATAHALAeQAFANAGAjQAMA5gHBZQgBAKgKAEIgFABQgHAAgDgIg");
	this.shape_85.setTransform(220.1754,128.3183);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F49C3B").s().p("AAUB5Qg1gogMhAQgFgcgBgPQgCgZAFgSQgOgNAEgPQAEgNAQgJQAPgIANAEQAOAEADATQADATAJAbIAPAuIAZBiQAEARgOAMQgIAGgIAAQgHAAgGgEg");
	this.shape_86.setTransform(210.49,132.4864);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F49C3B").s().p("AAeBsQgPgKgNgUIgTgmQgVgmgMgeQgNgOgCgYQgCgYAMgPQAJgKAPAHIAEADQAFACAAAGQAWgDAHAWIAeBOQATAwAJAhQAFAOgNALQgIAFgHAAQgGAAgGgDg");
	this.shape_87.setTransform(199.1436,145.6587);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F49C3B").s().p("AAYBvQgLgPgHgZQgdgegNgoQgMgoAIgtQACgNAMgEQALgQATAFQAUAEgBAVQAAASAJAfQAJAhABAOQAEA2gEAUIAAAEQgDANgFALQgCADgDAAQgEAAgBgDg");
	this.shape_88.setTransform(187.3064,154.9256);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F49C3B").s().p("AgYByQgqhYAih4QADgLAKgFQAJgEAKADQAPgKAXAMQAIAEACAIQABAHgFAGQACAGgBAEQgDA1gGAfQgJAwgSAfQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBQgDgOgDgYIgJA+QAAAEgFABIgCAAQgDAAgCgDg");
	this.shape_89.setTransform(171.9028,152.4451);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F49C3B").s().p("AByISQgIAAgFgFQgjgggRgWQgZgigFgjQgCgUAEgTQAFgVAMgOQgngMgIg7QgHg3AXghQglgFgZgoQgYglACgpQABgPAJgYQAKgaAOgTQgcgGgRgbQgQgaAAggQgDglAQgJIAJgNIACgDQgSAAgKgBQgOgDgLgIQgXgTABggQABgPAHgOQAHgOALgIQgrgGgFgrQgCgRAFgVQAGgYANgLIADgMIgKgGQgNgPACgVQABgRALgTQAEgFAFgCQAIgHAPACQANACAKAHQARALAGAQQAHASgKAQQgHALgNAAIgCACIACAYQAIgJAMADQANACAEAMIAEALIANgHQAOgFAIANQAHAOgJAKQACAGgCAIIADAGQACAOgFAPIgBACIABABQAGAKALAXQALATAOAFIAHAEIANgFQAGgDAFAFQAFAEgEAGQgHAKgIAHQAAADgDAFQAAAGgDALQgBAUAFAJQADAFAQAOQAUASgJAYQgFANgQAgQgEARgTACIAAACIACABQAFADABAEQALAFAEALQAJgEALACQAJACAJAFIARgNQAPgKALANQALANgHAOIAAAAIgKANQgJANgJAZIAOAXQAHANACANIAEAEQADAHAGADIAHAEIAYgJQAFgDAFABQAHAAABAFIABABIACAFQABANgPAGQgLAFgSAAIABAHIAAAIQAVgCAHAeQAGAWgDAYQgBALgDAKIgBACQgGAdgRAUQASAKAJAbQAGAQAEAhQAFAugIAdQABAogUAbQgLAPgSgFQgFADgGAAIgBAAgAgyjQIAAAAQAGgEAHgBIgBgBIgGgEQgCAFgEAFgAiGn2QgKAUAGAKQACAEADAAIAGgDQgBgJAHgGIACgBQAAAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgEgGgHQgDgEgDgCg");
	this.shape_90.setTransform(168.8266,82.8702);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F49C3B").s().p("AB9GgQgagIgKgZQgEgNABgRQABgTAIgNQgSAGgSgHQgWgJgJgXQgJgVAFgZQADgRAIgMQgBgGAAgIQgFABgGgBQgUAGgPgWQgPgTgCgWIABgNQAAgSAFgNQgCgJABgIQgDgFAAgGQgVABgRgLQgSgMgGgUQgHgUAFgXQAGgWAOgTIAAAAQgQABgMgGQgTgLgEgXQgEgVAJgWQAGgPAJgIIgCgIQgbAEgYgVQgWgTgIgcQgDgMABgSQABgUAGgQQgRACgLgGQgegSAIgpQAIgqAkAAIAAAAQAFgMAOgBQAMgBAKAJQAHAGAFAIQAKAEAHAJQASAWAEAsQAWAFASAWQAPAUAHAZQAJAcgGAXQATAEAMAWQAIAPADAQQAQAfgFAeQAdAEAVAtQATAqgFAlQAOAGANASQALALAGAMQAVAnACAhQAGAEAHAJIAEAIQAKAKAJAdQANAogJAXIgCAEIAAAEQANgCAMALQAWAWgMAzQgDAMgLAEQgLADgKgGIgHgBQgFgBgFgFQgDAIgDADQgNAQgSAAQgHAAgHgCgACkFmIAHALIACgFQACgEAAgEQgFACgGAAgAg7ieQALAeAQAcIAAgHQgDgGAAgEIgCgOIgBgDQgDgFgGgHIgJgNg");
	this.shape_91.setTransform(189.4006,70.2687);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F49C3B").s().p("AjMB4QgQgBgPgIQgQgHgIgNIgBACQgSATgVgBQgagBgVgXIgGAHQgUAUgcgGQgbgGgOgXQgPAbgagIQgLgDgHgPQgCgFgFgVQgEgNAEgKIAGgKIAGgKQgPgJAEgTQAFgUATgGQANgDAMAGIAHAEQARgWAbAAQAPAAALAKQALAIAGAOIAFABIAEABQARgUARgBQARgBAQAPQAPAOAEARIAFgCQAGgKANgHQALgGANgCQAWgDAQARQAFAEAFAIIAagBQAPgQAPgGQAQgGATAFQAVAEAKANQAGAHACAIIAHgCQAOgTAWgFQAZgGARASQAMAMgDATQAMgCAMACIAAgBQAFgNAOgFQAGgCAHAAQAUgFAPAMIAEAGQAAgPAMgLQALgMAOgBQANgCAKAHQAmgTAgACQAIgDALgBQASAAASALQACgIAIgDIACAAQADgUASgeQAKgRAOgIQAQgJAQAIQAQAIACAQQAAAGgCAGQAEACADAEQAWgLAPAFQAKgEAJAFQAKAFAAAMQAAAOgKALQgHAHgPAJQgIAGgJACQgRADgHgOQgJAOgOAFQgJADgJgHQgPAGgMgLQgJAFgIAEQABAEAAAGQgBAMgIAGQgIAGgLgBQgKAHgNAEQgMAEgLAAIgZAGQgoAKgVAAQgqgBgDgeIAAgEIgBgDQgBAHgHAFQADAFAAAFQABAIgHAHQgEAEgJAGQgnAagVgLQgKgFgCgNIgFADQgBAQgNAMQgOANgQACQgQACgOgMIgIgHQgGgBgGgEQgWAYgaAAQgLABgLgGQgMgFgHgKQgOANgSAHQgQAGgPAAIgEAAgAlEAcQgCAMgIAHQAMgIAVgKIgOgBIgJAAgAF0A+QgHgKAEgLQgGgIACgKQACgKAMgDIASgDIAggFQALgCAIAKQAIAKgIAJQgBAHgEAEQgQAPgRADIgTAJIgGABQgIAAgFgGgAHcAoQgOgPgLgQQgCgEABgEQABgDADgDQAHgFAIAGQAMAJAQAIQAGAEACAIQABAHgFAGQgEAGgIAAIgBAAQgHAAgFgEg");
	this.shape_92.setTransform(124.6195,15.593);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EE3D29").s().p("AAYBTQgdgagTgsQgMgdgMg2QgDgLAMgEQAMgDADAMIADAKQADgBACABQABAAABABQAAAAABAAQAAABAAAAQABABAAABIADAOQAJgCAFAKIAUAnQALAZABASIALAbQAFALgLAFQgEACgEAAQgFAAgFgEg");
	this.shape_93.setTransform(208.921,134.6442);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#EE3D29").s().p("AAcBGIgLgSIgGgCQgqgZgJgvQgLgVgFgVQgDgJAJgEQAJgDAFAIIAHANQAHgDAGABQAHABAFAFQAcAlAgBIQAGAOgNAIQgFADgEAAQgHAAgFgJg");
	this.shape_94.setTransform(198.8312,147.0172);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#EE3D29").s().p("AAOCCQgJgSgGgRIgBgCQgQgVgGgYQgHgbAGgVIgBgMIAAgBQgBgPABgMQADgTAEgPIADgGQgGAEgGgEQgGgDgBgHQgBgPAFgOQAGgRAPABQAQACgDAXQABACAAAFIAEAFQADADgCAEQgCAEgDABQgEABgCgCIgBABQADAAACADQALAFgCANIgFA2QAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAJA5AUBJQACAKgJAEIgGABQgGAAgDgGg");
	this.shape_95.setTransform(185.8837,151.3941);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#EE3D29").s().p("AiCMjQgLgSgGgWQgHgdAKgNIAAAAIACgOQAGg0AUgxQADgIAIgBQAFgYALgOQABgLAHgHQAFgHAJAFQAEgDAEgBQiOgoAnhQQAJgSAagTQAbgVAcgIIAAgGIgBAAIgIAAIgagCQgIgBgGgCIgDAAIggAFQgTABgNgEQgbgKgGgbQgGgZAOgZQATglAqgVQgqAFgbgKQgigNgRgnQgKgXAEgYQADgYARgSQAKgMAagOQAbgOAKgKQgvAKghgFQgpgEgLgeQgMggAXgiQAVgeAjgNIAFgMQgtAKgZgFQgkgIgBgqQgCgwA3gfQgSgBgOgKQgRgLgHgSQgHgSAGgTQAJgbAcgTIgDgOQgRgCgHgHQgKgLgBgPQgBgOAGgOQgEgCgFgFQgMgOgCgMQgEgRALgKIAEgEQADgHAHgIIAAgKQgFAIgEAEQgJAIgMgCQgMgBgIgLQgTgaADguQACgbAMgwQAEgPASAAQASgBADAQIADAYQAGAIgDAKIAAAAIgDALQAMgHAMgFQAEgfAOgSIABgBQAFgOALgIQALgIAPACQAVACAHARIAJAiIAIAfQAEARABAMIAIgVIABgCQgLgWABgnQAEgsABgTQAAgPAQgHQADgHAIgBQAJAAADAHIABABQAKgDAJAEQAKAEADALQANAmAAAdQACAjgQAdQAMAAALAHQAKAHAGAMQAHAOAAARQABATgJALQgMAOgPgFQgTAGgLgOIgDgEQgFACgGgCIgGASIAIANIADgBQgCgJAJgCQAIgDAEAJIAKAYIAGgDQAogMAsAOIAFACQAcgEASAMQAMAJAGAOQAHAQgKALQgHAIgLgGQgJAOgMAJIgEADQAEAFACAGIABAAQAOgMASACQAUADAMAOQAaAHAHAgQAHAhgSATIgFAEQAJgFALAAQARgBAPAKQAFADAIAJQASACAKAUQAKAUgJARQgHALgIAAIgDALQgEALgKAFIgBAFQAcgDAKAAQAWABANAKQANgEALADQANADAIAKQAEAAADACQAKAIAEAMQAEAMgDAOQgEAMgKAIQgKAIgMAAIgPATQAKAGAGAHQAHABAEADQAhADAMAMQAHAAADAGQAEAJABAIQAEAKgGAOQgFAPgKAIQgLAKgPgCIgBABIgHAMQAEgBAEACQAiANANAHQAcAPAGAUQAFAQgMAZQgMAXgSAOIAKAEQAEgCADADQAEACAKACQAQgFAPAOQAJAJAAASQAAAUgOAKQgIAFgKgDIAAAAQgFAEgEAAIAAACQgDAagFAaQAIgJALAGQAGAAAHADIALAFQAGAFABAGQACALgIAEIgFACIAAABIABACQACgFAHABQAHAAACAGIAAABQAHABAGAGQAgAjAEA/QADAkgCBIQABAOgPACQgOABgDgNQgIgfgGgbQgWgUgIgsQgGggADgnQAAgFADgFIgHACQgOACgLgQQgHgJABgMIgFAFQgBAEgGAIQgHAIgGALQgDAFgEABIgEADQABAFgFAGQgEAJgKACQgMACgNgCQgHgBABgIQAAgIAHgBIgBgDQgGgDgBgHQAAgHAHgCIAYgEIACgEIADgEQgbgIgKgFQgVgJgIgNQgNAFgQgCQgggFgCgnIgBgaIgGAHQgMAUgeAUQgUANgGACIgEACQgPAMgJgCIgGAHIAAADIAHACQAIgSAaAZIACABIACACIAGABQAJACAGAJQADAEAEANIAIAUIABACQAIAWgCAYQgDAYgMASIADAAQADgDAFgBQALgCAGAKIABAAIAEAMIABAFIAAAJIABAAQAKACgCAMQgBAKgJAHQgEAEgEgBQgFAEgHAAQgGAAgFgFQgJgLgCgPQgHgLADgMQgLAIgMADIgPAVIgEAKQABAKgMAHQgKAHgLgBQgFAAgJgCQgJgDgFgEIgbgHQAEAEgBAFQgDAGAAAEIgBAKQgDAMgFAKQgCADgEAAQgEAAgCgDIgBgDQgDABgEgBQgIAPgDAKIAAACQgBATgQAnQgPBDAGA9QAAAGgGACIgCAAQgEAAgCgEgAhVg6IACgRIgGgJgAAtk6IgFADIADABIAIgHIgGADgAlYpfQgBAOgDAMQAGgIAMgCQgDgKgBgLQgEABgGAEg");
	this.shape_96.setTransform(181.8614,81.3841);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EE3D29").s().p("AgUBOQgNgDgEgOQgKgbAJgVQABgNAHgKQgDgGACgHQAFgRAOgMIABgFQABgVATAAQAUABACAUIAEAbQADASgCALQAMAMgIAOIgKAQIgCAFQgEAKgKAEIgNAMQgHAHgIAAIgGgBg");
	this.shape_97.setTransform(134.5843,20.6125);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EE3D29").s().p("AAmCcQgHgIgEgHQgJAAgHgFQgHgFgDgKIgCgLIgIgrQgMgJgEgEQAAAcAFAbQACAMgFAKQgGAKgLAEQgfAJgQgZQgLgQgHgnQgBAfgUAZQgGAIgJABQgJABgIgFQgRAEgIgPQgKgUgIgXQgLAfgTAKQgKAFgLgEQgMgEgCgMIgDgOQgEgGgEgLQgKgcAGgcQAAgYAKgbIAEgGIgKgsIgKgrQgCgNAKgIQAKgJAMAHQAYAOAMAcQADgRAGgVQAGgUAVAAQAVAAAGAUIAWBNIACAAQgBgnASgbQAIgLAMgEQAOgEALAIQATAOAMAUQANAVABAWQAFgFAJgFQAAgcAMgZQAFgNARAAQAQAAAGANQAPAeAEAhIALgBIACgNQAFghAVgQQAYgRAcAWQAcAXAGA1IAKgQIABgEQADgXAGgIQAHgKALgGQAMgGAMACQArAHgUBHQAHAHABAGIAAACQAFAFABAHQAEAQgDAPQAEA9gVA6QgGARgQAAQgQgBgGgQIgDgHIgGgGQgRgYgMggIgCgHQgCAkgKAUQgNAcgdAIQgIADgHgEQgHgEgDgIQgJgegCgqIABgGIgIgNQgCAugJA0QgDAMgOAEIgJACQgJAAgFgIgAC7A3QABgJAIgGIAAgBIgJAAgABHgXIAAgOIgHAIIAAAEIAHACg");
	this.shape_98.setTransform(101.3192,20.3675);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#EE3D29").s().p("Ag9BBQgDgCABgEQAMgwAngqQAUgWAIgGQASgLATAMQAJAFACAKQABAFAAAOIgBAWQgBANgEAHQgEAIgLAHIgTAKQgaANgeAEQgJACgIgGIgHAIIgDACIgDgBg");
	this.shape_99.setTransform(238.5951,229.7381);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EE3D29").s().p("AhLA9QgPgUARgNIALgKIAPgcQASgmAOgPQAPgRAVAQIAfAgQAWAVAFAKQALAUgUAOQgQAMgpAFQgmAFgRAMQgHAFgHAAQgJAAgKgLg");
	this.shape_100.setTransform(219.8686,236.1721);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EE3D29").s().p("AhOBDQgEgDADgFIAMgVQgCgOANgGIABgBIANgWIAOgcQAJgRAJgIQAXgWAcAfQAQASAUAiQAIAMgIAMQgHALgNABQgjAEgmAKQgNAIgPgBQgGAAgGgEIgNALQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgEgBg");
	this.shape_101.setTransform(200.265,241.2419);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EE3D29").s().p("AhlA1QgGgWATgJQACgFAEgEQAFgHALgFQANgQAHgOIALgWQAHgMALgDQAdgJBKBEQALAJgHANIACABIACABIAFACQAFADgBAGQAAAGgGACQgHADgJgHIgEgEIgHABIgEAAQAAADgDADQgIAKgPACIgcABQgnACgwAQQgFACgFAAQgMAAgEgPg");
	this.shape_102.setTransform(179.4567,245.6309);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EE3D29").s().p("AhaA+QgIgFgCgJQgGgHAHgHQAegeAbgtQAHgNAFgEQAHgHAMgBQAggDAZAZIAuAsQAPAJgFAQQgEAPgRACQhEAHhWARIgEABQgHAAgGgFg");
	this.shape_103.setTransform(156.8022,247.8535);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EE3D29").s().p("AhjA6QgHgMAHgKIAXgcQAOgQAHgLIAPgZQAJgMAMgIQAPgKARAPIAHAGIAAAAIAHABQAiAIAFAdQAYAWAMAdQAFALgKAJQgJAJgKgEQgRgFgZACIgpADQgPgBgXADIgmAGIgCAAQgKAAgGgLg");
	this.shape_104.setTransform(133.0848,248.6999);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#EE3D29").s().p("AgBBOQgIgEgDgJIgfAIQgQAFgJgOIgBABQgDAEgHAAQgGAAgEgEQgLgLADgKQADgJANgHQAYgoALgQQAWgfAYgRQAEgDAIAAQAIABADAFQAZAeAvBOQAHAKgHAMQgHALgLgBQgHAFgIABIgQAAQgKgBgGACIgLAEQgGACgEAAQgGAAgEgCg");
	this.shape_105.setTransform(109.1642,248.291);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EE3D29").s().p("AAdBCQgKgGgFgFIgWADQgJAAgagDQgVgDgNADQgLACgIgHQgHgGAAgKQgEgEABgEQAAgEAEgDQAjgTAagjIANgUQAIgNAJgCQALgCAHAIQAFAFAGANQAUAlAWAcIADABQAHADAPAEQANADAHAMQADAGgCAGQgDAFgGACQgMAFgPgHIgFgCQAAADgCAFQgGAGgJAAQgIAAgLgFg");
	this.shape_106.setTransform(87.5537,248.5721);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#EE3D29").s().p("AAwA4IgFgGQgBAEgJgDIgLgDIgUgGQgLgDgNgBQgaAFgPgKQgFgDgEgHIgIACQgJACgEgIQgFgIAGgHQAOgNAZgSIAqgdQAHgFAIAAQAKABAEAIQATAmAgAiQAJAGADAJIAFAAQADABAEADQAFAEgDAFQgGALgNgDQgGAGgIAAIgBAAQgIAAgFgGg");
	this.shape_107.setTransform(65.6192,247.2248);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EE3D29").s().p("AAXA4IgBAAQgNAAgKgFQgJgGgGgCIgNAAQgOAAgHgNIgFgCIgCgBQgJgEAEgLQADgHAHgGQAUgWAQgeQAGgLANACQAOACADAMIAIAlQAJAFAJAMIAOAVQALAQgRAOQgJAHgHAAQgIAAgHgIg");
	this.shape_108.setTransform(46.0373,241.9299);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#EE3D29").s().p("AAqA3IgDgEQgJgBgEgHIgCgBIgKgBIgJgCIgCgBQgKAEgKgHQgJgGgGgMIglgCQgJAAAAgKQAAgIAJgBIAEAAQABgDACgCQAlggAigUQAIgFAIAEQAHAEADAIQAFADADAIIAOAnQAJAXAJANQALAPgRAKQgGAEgGAAQgJAAgGgKg");
	this.shape_109.setTransform(27.3411,237.027);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#EE3D29").s().p("AAkA9QgIgFgFgHIgagNQgQAGgOgIQgJgFgEgJQgIAFgHgHQgIgHAFgJQAWgjALgRQAQgXARAKQAJAFAIAOIALAYQAMAZAHAYQACAJgFAGIABAAIAJACQAFABADADQAFAEgDAFQgFAIgIAAQgHAAgKgGg");
	this.shape_110.setTransform(9.923,229.0058);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EEBA33").s().p("ADkENQgLgBgEgMQgJgggWgeIgDgBQgogUgaghIgqAmIgbAVQgRANgJAIIgKALIAAAKQABALgJAGQgLAFgIgFQgQgLgMgYQgMgcgIgNQgOgCgKgGQgUgNgFgZIgBgBQgoAYgaAcQgfAhgHAiQgCALgMABQgLABgGgJQgGgIgNgbQgMgWgKgMIgMgMQgUADgRgMQgSgMgBgTIgIAFQgRAKgWAQQgMAVgBAFQgDAMgPACQAGAPgRALQgRALgLgOIgvg1QgfgigOgYIgBAAQgQAMgfAhIg0A3QgIAJgLgFQgKgFgBgMQgBgSgEgUIAAAAQgFgIgGgRIgMgSQgPgYgDgQQgJgGgDgBIgRAOIgOASQgEAFgFADQgKAOgMAXQgHAPgRgDQgRgDgFgPIgSgxQgKgcgKgTQgKgUgKgDQgKgDgQAJIgSAKQgFAEgFAAQgPAQgKAVQgHANgRAAQgSABgGgOQgkhUgggsQgJgMgFgLIgUAfQgIANgOgBIgCAQQgCAJgKAAQgLgBgCgIQgJABgHgFQgHgGABgJQADgnALgpQgIhGANg8QACgKALgCQALgCAGAHQAJAAANAIIAUANQADACACADIAGABQAeAIBKALQBBAOAfAYIAHAGQAQgFAPAIQAWALAxALQAtAKARAMQASgPAZAIQAFACAHAFIALAIQAJAEAKABIATADQAjAEAXAMQAMgRAUAGIA/AUQAkAKAcAAIAfAAQASAAAMAHIAFgBQAbgCAmABIBIAFIABAAQAPgBAkgGQAggGATACIALABQAKgFAKABQAsACBdgCQBZgBAwADIAzABQAWgDAUABIAEAAIAhgEQBSgPA1ABQARABAMAOQAdgUAtgJQAbgFA3gDQAWgKAhgIIA6gNQA6gMBcghQB0grAggJQAQgFAQAGQA0gdArgPQALgEAJAFQAIADAFAJQAGACABAIQAEAQACAYIAEApIADAeQAAAQgFAMIAIAkQADAOgMALQgNALgNgKIgMgNQgEAGgNALIgEAFIgQAdQgTAigUAdIAAACQAHAbgaAHQgaAGgLgZIgBgEQgDAAgEgEQgTgUgNgSQgNgFgtgBQggA0gRA+QgEAPgQACQgQACgJgNIgXgoQgOgGgJgLQgKgMgDgNQgHgCgPAFIgLANIg7BhQgDAFgEADQgBAJgKACIAAAAQAAAIgJgBQgIgBgGgHIgJgPQgHgKgIgRIgMgOQgRgLgtgUIgDgBQgqArgsBTQgHAOgQgFQgPgEgBgPQAAgNgLgNQgGgJgQgPQgMgDgIgJQgJgJgBgLQgUgHgSgJIgLAQQgmA6gdAjQgBAPgJANQgHAJgKAAIgCAAg");
	this.shape_111.setTransform(122.5366,227.0782);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#1D438A").s().p("AA9PYQg3ACg7gEQgHgBgGgEQgOABgOgBQgHAGgJAAQhkAEhogQQgaAAgkgFQghAAgXgEQgTAAgdgDQhNAGhDgXIgFgBQgXAMgsgHIhBgOQgugHgbgIQgzgOgKgYQhxgchngrIgHgFIgSgEIgBgBIgFgBQgFgBgVACQgPACgKgGQgSgMAAgaQAAgUAMglQgEgQADgZQgDgtABgcQADgxAUghQAOhtAVhhQA6kIBPjAQAYg7AmhHQAviRBXiSQA6hjBGhZIAqg8QAegnAZgOQAggpAPgWQAMgTASALQASALgJAUQASAdAZgKQANgEAMgGQAKgEAJAHQAJAGABALIAJAFQAPADAKgCQALgDAMgKQAGgFAGAAQADgGAHAAQAGgBAEAGQAIALANAJIANACQAFgGAFgDQAFgDgBAEQAEgPAPgEQAQgFALAMQAIAJAEALQAJAAAIAEIAJAHIAPgCQAJgCAHgEIABAAQABgOANgDQAOgEAJAMQAMAQASgBQALgEANAAIAFAAIAGgCIAAgDIACgMQABgDAHgFQAEgEAFABQAFAAACAEQAKgFALAHIAgAVQAVgTAIgJQAOgQAAgOQABgKAIgGQAHgGALACQAMADAKAGIAIgFQALgJAGgOQAHgPATAEQASAEAAARIACAGIACACQAIAQAPAQQAJALgFAMQAJADAEAJQADAIgBAKQgCAKAEAYIABAEIAAABIABAAIADACQAEgGAIAEQAIADgCAJQgCAIgIADQgGABgIgDIgBgBIAAAAIgNAnQgBAWgCAWIADAGIATAUQALAEAEAKQAFAKgGAKQgPAYgEANQgKAVAFAWIAkAaQAHAAAEAFQAFAAAEACQADACABAFQABAEgDADQgEADgHABQgEAEgDAAIgBABIgBAEQgVAmAHAnQAIAuAwgEQAMgCAIAMQAFgBAFABQAGABABAHQABAHgGADIgIACQgCAHgFAEQgbAYgIAiQAOAFAFAQQAKAaAHAcQAFADAJACQAKADAEADQADABACADQAGABACACQALAFgBAMQgBAMgJAHIgSALQABADAAADQAAAQACAhQAZASAGAXQAOAFAOAAQAGABADACIAUgCQAKgBAAAMQAAALgKgBIgKgBQAAANgNAFIgCAEQgMAUgHAjQAIABADAJQAIAgAkAjIAGADQAKgGALAAQAGAAAEAEQAEAEAAAGQAAAHgHAFIgBAGIgDAFQAEAIgGAFQgcAXgQAkQACAVgCAjIgDA4IADAwQALAOAcAqQAMgKAHgIQAHgSAJgSQAFgIAIgEQAKgiADgOQADgVgBg8QgBgyAJgcQAAgDAEgDQAEgGAIgBIAEAAQAJgBAGAJQAEAHAAAMIAAAUIADATQAIABABAJQAAAKgEAIIAAACIABAxQAAAfABASIACATQADAMAKAVQAQATASAdIAWAPIAUgDQgCgOAGgfIALgvQgBgbgFgZQgCgGACgFQgRgrgEgZIgGACQgRACgGgRQgFgOADgSIgCgXQgJgMABgRQAAgNALgEQALgFAKAIIAHAJQATAFACARQABALgJAIQADAbgCALQAEACABADIAgA9QARAOATAUQANAKAKARQARAUALAUQAJgWAKgQIACgDQgEg7gUg0QgJgYgSgaIgigtQgGgJgIgPIgNgXIgEgFQgJgLgMgHQgGgEgBgHQgBgHAFgFIAIgPQAAgCADgEQAFgpgbglIgJgJQgFgGgCgFQgEgMAFgLQAEgLALgGQAdgQAbAnQAGgBAFABQAcAKAMAHQATAOABAVQABAUgFASQAEAFABAHQACAngMAkIANAoIAQAlIAnAvIAaAZQARAQAIALIACgFQANg6gNhDQgGgjgbhVIgBgBQgEgDgCgDQgFgDgCgFQgCgNABgFQABgGAGgKQAEgGAIAAQAIgBAEAHIAEAJQAHgCAHADQAHADADAGQAEAFgDAGQACAJgFAEQgEADgGABIAVA/QALAkAFAdQADAAAEADQAQASARAZQAKgOALgHIAEgPQgDgjAAgSQAAgEAEgBQADgBADACIgJgoQgBgHAHgCQAIgCACAHQATA5AKArQAKgBADAKQAOAtALA0QAHACACAHIAbBmQAOA8AIAuIAGAcIASBhQAJA5gFApQANAhAGAYQACALgFAKQgGALgKACQgKACg7AXQgoAPgdgEQixBMi6ApQhnAXiUAZQhAALgjADQg2AGgsgGQgFADgFAAQg1ADhoADQgIAAgHgFg");
	this.shape_112.setTransform(122.6667,123.6981);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#1D438A").s().p("AATA1QgZgRgRgRQgKgKgDgFQgHgJACgJQACgHAEgEQABgGAEgDIADgJQADgLAMAAQAMAAACALQAMAqAaAhQAGAJgJAJQgFAFgGAAQgEAAgDgCg");
	this.shape_113.setTransform(218.3878,110.67);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EE3D29").s().p("AgIAiQgIgHgLgWQgIgUABgMQABgHAHgEQAHgEAGAGIAOAXIAGAIQARgFAHANQALATgRANQgJAGgIAAQgIAAgIgHg");
	this.shape_114.setTransform(174.2702,18.9427);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EE3D29").s().p("AgYA5QgMgFgBgOQgBgLABgPIAAAAQgHgUAJgVIAAgCQABgFAFgDQAIgOAOgEQALgEALAHQAJAGAFAMIAHAOQADAIABAHQACAOgFANQgJAagdALQgHADgGAAQgFAAgFgDg");
	this.shape_115.setTransform(172.506,8.3589);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EE3D29").s().p("AgVA7QgRgDgJgPQgSgfAegfQAZgbAigJQAKgDAFAHIABABQACACABADQACAEgCAEQAHAEADAHQAEAJgEAIQgTApgZAUQgLAJgOAAIgFAAg");
	this.shape_116.setTransform(67.6442,23.0307);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EE3D29").s().p("AgIAlQgIgNgBgRIAAgJQgHgNABgNQABgHAEgEQAFgGAHABQAUACABAYQACAhADAFQAJANgOAJQgGADgEAAQgHAAgGgIg");
	this.shape_117.setTransform(70.2598,11.9121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.apron_same, new cjs.Rectangle(0,-5.9,248.8,264), null);


(lib.apron_06 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("AoOgxQANAJAUAIQALAEAZAGIDaA2QAvALAcAEQAgAEA1gBQCagBBQgFQCDgIBmgWQBagUAxgg");
	this.shape.setTransform(101.2,28.51);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6,1).p("AgHh4QgFAAgBALQgFA+AHA2QAIA0AUA+");
	this.shape_1.setTransform(153.4,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6,1).p("An/gtQAcAMA7AQQBoAbAyALQBXATBGAEQAtACA0gBQCugEC5gZQA4gHAigJQAwgPAfga");
	this.shape_2.setTransform(101.1,5.0071);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6,1).p("AAFh2QAYB4gpBxQgBADABABQABABABgD");
	this.shape_3.setTransform(49.6614,12.6393);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#070F21").ss(2.6,1).p("AA2KDQAslXhMkXQgNgugCgUQgCgRACgZQACgbABgOQAEgtAAhKQAAgwgEgeQgEgbgKgpIhBj5");
	this.shape_4.setTransform(185.5967,123.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#070F21").ss(2.6,1).p("AD4sOQh2B0hWC5Qg6CAhDDcQgPAwgFAXQgKAogCAgQgBAPgBAdQAAAegCAPQgEA5ggBYQgoBxgIAeQgMAygLBoIgXDy");
	this.shape_5.setTransform(24.8,102.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#070F21").ss(2.6,1).p("AkGryQAyAvAyBGQAgAsA1BWQBnCoAuBiQBGCaALCGQAAAJADB1QABBMAMAwQAHAeAQApQAKAYASAuQA4CbgSCi");
	this.shape_6.setTransform(180.9189,100.275);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#070F21").ss(2.6,1).p("AQIiKQhkBsiFA4QiHA5iQgGQgwgChGgKQhOgMgmgFQiNgThaAaQgaAHhYAoQhIAfgvAEQg0AGhSgVQhsgbgbgDQgbgCgOgBQgYgCgRgFQgWgHgkgVQgogWgTgHQgjgNg4ABQhXAAgHgBQg3gFg1gWQg3gYglgl");
	this.shape_7.setTransform(103.65,189.6082);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#070F21").ss(2.6,1).p("AhotPIBXEsQAXBVAJAqQAQBIACA6QABAogLByQgJBhAIA3QAFAhANAuQAHAaAPA0QAoCSACC9QACB0gRDg");
	this.shape_8.setTransform(164.4561,109.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#070F21").ss(2.6,1).p("Ag8s3QgfBMAgB3QACAHAbBYQARA6AGAnQAKBRgcCwQgbCpARBXQAGAfAQAuQAWBBADALQAWBHANB9QAWDHAIDH");
	this.shape_9.setTransform(143.4998,113.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#070F21").ss(2.6,1).p("AglsfQgTBLAQBzQAIBAASCBQAGBVgVCOQgYCngCA6QgEB9AhChQAHAhAPBBQALA6AFAoQAHAwgBBkQAEBWAjAw");
	this.shape_10.setTransform(124.7287,113.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#070F21").ss(2.6,1).p("AgmsdQASC9AFBgQAICfgLB+QgCASgIBLQgGA4gCAkQgIB1ARCCQAFAfASBrQAOBWAFA1QAEA6AABgQAAAwADAfQAFAwANAj");
	this.shape_11.setTransform(117.2245,113.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#070F21").ss(2.6,1).p("Agas7QgOA2gFBWQgFBHgBAnQAAA8AGAxQAEAeAKAtQAGAZALAyQAIAnAPBtIAYC3QALBVAEArQAGBHgDA6QgCAggHA1QgJBAgCAWQgEAtgCBaIgGD8");
	this.shape_12.setTransform(92.3845,116.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#070F21").ss(2.6,1).p("AAEtOQgqBWgMAvQgeBwApCfQAKAnAdBdQAaBTALAxQAsC7gcFCIgWEBQgJCUAHBu");
	this.shape_13.setTransform(84.2282,117.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#070F21").ss(2.6,1).p("AAztLQg7B0gZCGQgZCCALCHQAFBGAhCyQAcCbABBcQACBAgKBYQgFA0gLBlQgRC7ANC5");
	this.shape_14.setTransform(65.0175,114.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#070F21").ss(2.6,1).p("ABNtGQhkD0gfEKQgIBAAEAnQACAPANA8QAYBqAABQQgBBFgWByQgaCHgFAwQgJBhAOB6QAJBMAcCO");
	this.shape_15.setTransform(45.612,109.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#070F21").ss(2.6,1).p("AhaMHQgUi6AAhjQAAieAmh5QARgwAIgYQAPgrAFgfQAGgjgDgxQgEg4gCgdQgMitAlisQAjirBRia");
	this.shape_16.setTransform(29.025,112.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FBC85B").ss(2.6,1).p("AhpsVQBlEiA5EBQALAxAEAdQAGArgDAjQgBAUgKAwQgIAqAAAZQgBAeAIAnQAFAWALAtQAeCEABCpQABBngPDJ");
	this.shape_17.setTransform(172.8758,112.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F3DFC6").ss(2.6,1).p("Ag3srQgSBMAcB2QAnCtADAYQAIBYggCxQggCvAJBYQAFA0AVBKQAMApAWBTQAdB0AMC/QAFBTgBA2QAAAJAFABQADAAgBgEQgBgEgBAD");
	this.shape_18.setTransform(137.4065,113.4778);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F3DFC6").ss(2.6,1).p("Ag1soQgJBIATBvQAaCfACAZQAJBogjDkQghDWAQBzQAGAqANA2QAEAOAVBQQAyC9AaDCQABAIABAI");
	this.shape_19.setTransform(131.3773,113.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#B8912A").ss(2.6,1).p("AgKseQgHAKgDAJQgCAHgBAOQgUEoAhHhQAJCCAREEQAPDgABCm");
	this.shape_20.setTransform(107.7476,114);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#B8912A").ss(2.6,1).p("AAAsoQghBpgFB7QgFBmAPCDQAHBBAYCqQAWCTAHBYQAHBZABBwQACD0gUDx");
	this.shape_21.setTransform(99.0603,115.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F3DFC6").ss(2.6,1).p("AAXtLQgsBOgTBaQgTBaAJBaQAFA1AZBmQAhCJAKAyQAWBqAGBSQAKCGgeEPQgeEMAMCI");
	this.shape_22.setTransform(77.2564,117.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F3DFC6").ss(2.6,1).p("AAptMQgXAygPBDQgIAogOBSQgSBugCA+QgEBkAfCgQAlDKAGA6QALB9gWD+QgWD8AMB/");
	this.shape_23.setTransform(70.032,116);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FBC85B").ss(2.6,1).p("AhRM3QgdimgBiGQgBifAmiKQAKglAFgTQAJggADgXQAFgngEg1QgGg8gDgfQgSjEArjCQAqjDBkip");
	this.shape_24.setTransform(38.7237,107.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CA2C2B").s().p("AjDPcIgFgCQgLgDgEgKQgDgJAFgJQgRgsAFhKIAMh1IAPiTQAKhaADg6QAJimgbiLQgShUgHgqQgOhKgBg2IgEgdQgEgFgBgIIgCg6QgCguAAgiQAAgFACgDQAAgyAJggIAAgBIAAAAIAAgDIADgFIAEgNIACgCQAFhQALgxQAOg+AKgZQAVg3AggNQgfgIg1gQIhVgaQAAAKgHAHQgWAYgZAiQgqB4gWCEQgWCCAACAQAAA2ANBbQAOBnADApQAEBFgTA8IgQA3QAAARgFAZIgIAoQgIAxgGAZIgJBIIABAjIAKBZIACAcIABAcQAIBAANA9QACANgGAKIAMARQANARgSARQgRARgSgMQgNgIgdgFQgdgGgNgIIgCABIgyAHQgPADgKgIQgKgIgCgPQgFhCAAg7QgNg/AGg/QgMgiACgoQABgWABgJQADgSAGgLQgDgQAFgSQAFgSALgPQAFg0ARhHIAMg8QALgvAOgXIACgPQADgjABhFIAAgBIgGg2QgDgiABgWQgFgsAJg+QASh8AZhpQAyjYCJiXQgCgEAAgEQAGhGAPhZQgTgMALgVQALgWAWAFQAUAEAVAPQAOAAAUADIAiAGQAiAGBMAPIBvAXQA/AMAxACQA1ACBEgIQAhgEBXgPIBLgOQAugHAeAIQAugQAPgEQAkgJAZACQAHABADAFQADAFgDAGIgEAJQAHAcACAuIACAGIACASQAEAeALAMQAKALgBAOQAAANgJALQgbAfgoACQgIADgJABIhfALIAAAHIgEAMIgBABQgFA5ABAbQAAAtALAmQAIAYAVA1QAUAxAIAcQAQA/ADBDQACBOgSA4QgGAmgOBBIgPBRIABAdQAEADgCAMIAMA/QAIAgATA/IADAOQANAgAKAuQAFAVAKA2IAUBdQAKA6gJAmQAJBHADBHQABAXgBAyQAEAFABAJIACAzIgBAGIADAJQACAIgGAEQgHAEgGgDQgGgDgNACQgOACgHgEQgLgFAEgMQgJgPAAgeIABgwQAAgVgEgqQgFgqAAgVIABgQQgZgngIhQQgEhXgHgjQgEgWgUgyQgTgtgDgcQgFgmADgmIgFgYQgGggACgpQABgaAHgvIAPhYIAQhZIAJg6IABg3QAChPgYhiIgfiAQgPhSARgzIAAAAQABgRAGgMIAEgIQg3AHguAEQAGACABAGQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIACAFQADAAACADQADADgCAEQgDAHACASIACAbIABA7IAWB1QADALgHAJQAYBRgCBBQACAdgCAmQgCAVgGAvIgEAcQAEAjgLAwIgTBTIgSBkIAEB0IAEAuQACAegBASQAIAaAJAuIANBGIARA5QALAkADAZQAKAXAHAfIAJA4IAIAlIAAABIAOAvQAIAcADAUIABARIAHAQQAEAKgIAKQgIAJgKAAQgNgBgJgEQgNABgRgNQgGgFAAgHQgBgHAEgHQgFgOgHgtQgNhUgDgaQgFgggDgtQgNgYgJgkQgGgVgHgnIgLhIIgKg+QgQhjADhgIABgCQgEguAIg5IAJhEQAFgoAIgbIAFgwQAFggABgPIADhEQABgpAHgZQgCgYAAgfQgJgcgGgtIgKhIQgBgHAEgHQgIgrACgsQgEgIAAgOIABgXQABgXACgMQADgUAIgMIAEgDIhgAGQAFAcAGA2QALBVAEBcQADBRgGBhQgFBHgNBpIAAAHQgNBtgCBkQAQCfAfCjQACAGgDAHQAFATAFAuIABAIQAHAHAAALQgBBSABBCIABAlQAAAVgCAOQAHA4ALAnQACAHgCAGQAHAFgEAHQgEAIgIgCIgCAAQgPAOgRgLIgtAQQgbAIgPgEQgIAKgMAAQgVAAgQAIQgNAHgRASQgKAKgOgGQgOgFAAgPQgCiFAPiiQgBgyANhLQgEg2ABgOQABgpANgXQgHhqgBg1QgMgygGhCQgDgcgFhZQgGhUgRhDIgRg2QgIggAFgYIAAgBIgJgrIgCgGIgJg3QgEgIgCgJQgFg0AEg0QABgKADgIQACgxAGgzQAHhBANgiQhCgDhJgMIgngIQADAPgFASIgMAgQgZBAgIAiQgPA/gIBOIABADQAAASgCAaIgFAsQgBAFgCADQAABHAGBGQAAAHgDAFQAOAxAQBPIAbCAQAfCOgECEQgCA8gIBSIgPCPQgIBOgDA3QgBAYgHA6QgEA1ANAbQAKATgQAMQgIAGgHAAQgJAAgJgHgADrN6IgCgDIgFgFIAAACQAAAEADACIAEAAg");
	this.shape_25.setTransform(86.0175,101.4184);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CA2C2B").s().p("AggMlQgHguARhSQgJiAAbh7IABgBQAAgfACgwIAChPQACg5ADgcQgDgMgBgOQgCgfABhTQAChzggiGQgEgTgdhhQgVhIgGguQgNhXATh7QAJg9ANgqQASg4AcgnQAFgHAIADQAHADgCAJQgJAkgVBGQgSA+gGAtQAEAfADBQQANAyAgBkQAQAyARBFIAdB5QAiCGgCBqQgBBAgEAoQgHA8gQArIgLBVQAAAzgDAhQAAAbgBAlIgDA/QgBAdAFBAQACA5gPAgIgCADIAFAZQACAIgEAHQgEAHgJADQgLAEgKAAQggAAgHgyg");
	this.shape_26.setTransform(81.8785,117.6862);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CA2C2B").s().p("AAAM6QgHgGAAgHQAEgoAChCIADhqQACgmgBhKIgBgrQABgZAGgQIAAgBIgHhlQgCg/gThcIgfhhQgSg5AAgpQgKg8AIgrQAMhCgBhSQgCg7gKhaQgJgYgJgjIgMg4QgLgygchQQgghfgJghQgCgGAFgCQAGgCADAFIAoAzQAzAtArBGQAlA9AbBIIAJAbQAQAXAMAmIASBAQAIAfAEApQASAmAFA+IAEAyQABAcgGAUQACAsgGAdIAAAYQAAAdgFAMQABATgDASQANAaAFAvQATApAEAyQAGAWADAgIADA2IAFAxIAFAxQALATABAiQABATgCAiQAABGgLBIIgHAzQgHAbgUAOQgVAOgnANQgrANgUAIIgEAAQgFAAgEgDg");
	this.shape_27.setTransform(174.3046,111.8333);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#070F21").s().p("Aj/PlIgNgBQiNgWhFgOQgdACglgJQgPgEglgPIgBgBQgVgagZgMQgcgNgSAOIgBABQgvgQggAJQgFgFABgEIgKgCQgsALgpgCQgrgDgWgQIgJgIQghAGgagaQgYgYgEglQgDgYAFgkIAKg9IAPiBQAAgFAEgGQAChJAKgwQAGgcAOgiIAbg8QAQgjAXhKQgCgIACgJIACgIIAAgOQAAgUADgPIgCgJQAAhkAghvQAYhWAzh0QAIgkAMgdQAShEAmhBIAJgOQAUgpAVgTQA4htBGgvIAAgBQAEglAPguIgCguQAAgbABgTQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQgKgkAKgYQACgFAFgCQAEgBAEADQAHgBAFADIBcArQAbADAsABIBmANQBeALBxAIQA5ADArAAQAhgIA3gEIA0gCQAjAAASgCQBEgMA9gXIAHgCIAUgOQAHgEAIADQAJADADAHQAFAAADAEQAEAEgBAFQgFAcADAlQAQA1AVBTQAFgBAFADQAkAbAYAxQAPASATAaIAfAqQAtA9AZAlQAlA2AZAxQAvBaAiBkQASAXAMAiQAFARAMAuIAJArQAEAYgCATIAJAuQAMBDADAkQAGA4gFAuQAFALACAcIAEAdIAVA+QAQAcANAfQAOAmADAfQAGAXABAUIABABQAJA4gFAaQADAGAAAGIAAAmQADAJAAAIIACAHQABASgDALQgCAFgEAFQgFAFgGACIgFAJQgCADgEAAQgDAAgCgCIgJAKQgrAxhEAbQgyAkgiAIQgsAbgyAQQgxARgyADQg9AFgogSIgeAEQgmAEgxgMQgPgEhFgWIgPABQgxAMgqgHIgPgDQgqgBgqgCIgCgBQgZAMgYAHQgWAQgYAFQgKAJgPAHQgfAOgjADQgDAAgCgBQgzAUgvAAQgdAAgbgIg");
	this.shape_28.setTransform(103.6596,101.8321);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.apron_06, new cjs.Rectangle(-1.2,-1.2,209.7,207.1), null);


(lib.apron_05 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#10264F").ss(2.6,1).p("AgLhtQgEA4AMA1QADASAJAlQAGAfgDAY");
	this.shape.setTransform(154.486,16.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#10264F").ss(2.6,1).p("AgDhyQAJB3gCBu");
	this.shape_1.setTransform(133.5667,19.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#10264F").ss(2.6,1).p("AgEBrIAEiPQACgvADgX");
	this.shape_2.setTransform(112,20.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#10264F").ss(2.6,1).p("AgMBqQgFglARhFQAQhHgDgi");
	this.shape_3.setTransform(90.6638,18.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#10264F").ss(2.6,1).p("AgHBtQgCggALhNQALhFgHgn");
	this.shape_4.setTransform(72.8973,15.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#10264F").ss(2.6,1).p("AkuBpQBNADAqgEQBCgGAwgYQAZgMAogeQArggAVgLQA6ghBggKQAngEAPgHQAggOADga");
	this.shape_5.setTransform(200.525,169.8893);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#10264F").ss(2.6,1).p("AoHgrQAYAkCoAZQCgAZDBABQEcACDShM");
	this.shape_6.setTransform(115.85,27.3264);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#10264F").ss(2.6,1).p("ANPAJQgDALgCAdQgCAZgHANQgIARgTALQgQAJgWADQgRABgWgDQgEAAgjgGQhbgShggEQhYgDhDAMQgXAEgrAKQgtALgVAEQh8AViagfQhigVivg8QgkgNgOgGQgcgLgVgMQgQgIgngdQgigZgWgKQgsgWhsgLQhmgMgvgc");
	this.shape_7.setTransform(84.675,178.5611);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#10264F").ss(2.6,1).p("ADErYQh9CNgvCcQgSA6gEA0QgCAkAEA2QACAeAGA8QAICGglCkQgWBkg/C/IhdEZ");
	this.shape_8.setTransform(57.575,101.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#10264F").ss(2.6,1).p("AhMghQBHAvBSAU");
	this.shape_9.setTransform(55.125,46.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#10264F").ss(2.6,1).p("ABrAiQhYg1hmgNQgQgCgHAE");
	this.shape_10.setTransform(47.025,66.1667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#10264F").ss(4.3,1).p("Aj0qwQgGBXA4BlQATAjAhAwQATAbAmA2QCLDOBVEcQBEDlAmEy");
	this.shape_11.setTransform(184.3207,97.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#10264F").ss(4.3,1).p("AhtsXQgJBqABBDQABBfATBMQAOA5AgBJQASAqAnBSQBPCtATCHQAIA+ABB9IAGHq");
	this.shape_12.setTransform(145.8987,111.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#10264F").ss(2.6,1).p("AjDo1QAXA6A/BSQBRBoASAeQAqBIAgBiQAWBBAbByQAkCeARBfQAZCMAFBz");
	this.shape_13.setTransform(167.325,121.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#10264F").ss(4.3,1).p("AgwsAQgqB7ApCwQAMAyAeBfQAdBhAMAwQAgCHAECsQACBogKDQIgQFJ");
	this.shape_14.setTransform(121.3229,109.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#10264F").ss(2.6,1).p("AAysWQg2ArgaBNQgXBDAEBRQADA5ASBaQAZB4ADAZQAOBbgBBzQgBBEgKCJIgoJi");
	this.shape_15.setTransform(111.7019,110.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#10264F").ss(2.6,1).p("ACosJQgKAVgWAkQgVAkgLAVQglBHgRAmQgcA9gOA1QgTBLgCBqQgBA9ACB7QABG3icGd");
	this.shape_16.setTransform(85.45,109.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#10264F").ss(4.3,1).p("AisHpQAdhPAbhyQAciDAPhCQA2jwBRiCQBRh/Aeha");
	this.shape_17.setTransform(39.375,118.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#10264F").ss(2.6,1).p("AicrnQAbBDAWBXQAOA4AVBlQASBXAQAqQAKAbASAkQAKAVAVAoQBgDCAcD+QATCwgKEr");
	this.shape_18.setTransform(154.3945,105.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#10264F").ss(2.6,1).p("Ak0qcQCiCJB4DqQAwBdAvB4QAfBOAyCOIBQDjQAhBiAPA1QAYBVAHBG");
	this.shape_19.setTransform(199.35,91.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#10264F").ss(2.6,1).p("An4gdQDiA9EeAHQFQAIChhV");
	this.shape_20.setTransform(115.2,4.538);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#10264F").ss(2.6,1).p("AgNh9QgEAmADAwQACAeAHA2QAEAcACAOQAGAXAJAQ");
	this.shape_21.setTransform(167.3234,12.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#10264F").ss(2.6,1).p("AgMBvQAohsgWhw");
	this.shape_22.setTransform(64.4455,13.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#10264F").ss(2.6,1).p("AFBq5QgvAbgsAyQgdAigpA/QhRB9heCnQhFB2gfBFQgfBBgvCBQhBCwgZBdQgoCZADB+");
	this.shape_23.setTransform(32.3609,94.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#10264F").ss(2.6,1).p("AGpA0IiUgBQgVAAgLACQgCAAggAJQgjAJgsAAQgdABg0gFIikgNQhBgFglgIQgzgNg6ggQgkgUhAgu");
	this.shape_24.setTransform(100.475,37.9775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#10264F").ss(2.6,1).p("AGgAGIjoAVQi3ASh8gJQirgNh5g9");
	this.shape_25.setTransform(104.825,59.2278);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#10264F").ss(2.6,1).p("Aneg2QBMA8CAAKQAtAEBAgCQAlgBBJgDQCfgECeAdQBPAPAiABQBAABAogc");
	this.shape_26.setTransform(106.025,83.3268);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#10264F").ss(2.6,1).p("AikAxQAfAFAngFQAZgDAugLQBDgQAjgNQA3gVAfgj");
	this.shape_27.setTransform(159.175,36.2316);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#10264F").ss(2.6,1).p("Ai3BHQArAXBCgSQBCgRBGgwQAsgcBOhC");
	this.shape_28.setTransform(164.825,48.7281);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#10264F").ss(2.6,1).p("AjYBmQAygaCLglQB5giA6gqQAlgbAcgl");
	this.shape_29.setTransform(174.875,70.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#10264F").ss(2.6,1).p("AjRBqQAFgOAOgJQANgIAQgBQAVgBApAFQA6ACBMgrQBjg3BMhX");
	this.shape_30.setTransform(183.875,89.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#10264F").ss(2.6,1).p("AjeBsQAeAGAmgGQAXgDAsgLQAfgIAPgFQAZgJASgLQAJgGATgNQASgOAKgFQANgIAYgJQAcgJAJgFQAfgQAYgaQAYgbAMgh");
	this.shape_31.setTransform(190.3,111.7065);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#10264F").ss(2.6,1).p("AkBBlQBZgIBQgMQAfgEASgFQAbgIATgLQALgGAUgOQAWgQAJgFQAUgMAhgKQAygQAEgBQBDgZAPgw");
	this.shape_32.setTransform(197,140.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#10264F").ss(2.6,1).p("ALCBiQhAAchjgVQgQgDhBgQQgxgNgggEQg3gGhqAMQhtAMgzgEQhAgGhOgcQgsgQhbgpQhNgjgxgSQhGgbg8gMQh0gYh0AV");
	this.shape_33.setTransform(93,97.7974);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#10264F").ss(2.6,1).p("AMOA4QgkA+g7AHQgeADgtgLQhCgPgJgBQgfgFg4ADQh3AIg7ADQhqAGhJgDQjPgIiHhSIhvhLQhDgugzgPQgfgIgogDQgagBguABIigAC");
	this.shape_34.setTransform(90.15,123.9222);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#10264F").ss(2.6,1).p("AM2A+QgFAkgrAZQgmAWgrAAQggAAgugMQg0gOgagGQhjgWitAZQjKAchIgEQjMgLjuihQhDgtgIgFQgrgbglgNQgtgQg9gEQglgDhIAB");
	this.shape_35.setTransform(87.525,151.951);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#CA2C2B").ss(2.6,1).p("AkHqqQgBBEAwBOQAEAGBcB9QA7BQA1BtQAjBJA1CBQBUDPAnCGQA4DAAGCk");
	this.shape_36.setTransform(189.349,95.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#CA2C2B").ss(2.6,1).p("AjzrDQAABCADAfQAEA2APAoQAPAmAeAsQAHALAyBBQCtDmBQEVQAUBHASBZQALA2ATBsIAqDt");
	this.shape_37.setTransform(178.025,99.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#CA2C2B").ss(2.6,1).p("AjTILQAWhLAsi9QAnioAehdQAlh0BUiTQA8hmBrib");
	this.shape_38.setTransform(36.825,115.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#B8912A").ss(2.6,1).p("ABUMMQAKjsABhnQADi7gKiZQgFhEgHgjQgIgngTgwQgGgPgdhGQhEiogZiDQgginAgiL");
	this.shape_39.setTransform(139.151,111.45);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#B8912A").ss(2.6,1).p("AhFsIQgbDOA0DLQAMAwAgBjQAgBgAMA0QAeB4AECdQADBggHC5QgEBbgHDI");
	this.shape_40.setTransform(132.5172,109.475);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#CA2C2B").ss(2.6,1).p("AiNHDQAKgnARhUQAShVAKgnQAiiCA/i0QAqhzBZjl");
	this.shape_41.setTransform(43.425,124.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CA2C2B").s().p("ADOJuQgHhEgEgSIgkjTQgYhfgmh+IhGjaIgLgQQgTgRgSgeIgcg1QgjhCgOgtQgTgMgXgnQgVgjgIgRQgGAAgGgEQgZgUgPgZQgRgcgBgcQggg+gFgtQgCgUAWgDQAWgCADATQAHAjATAsQAKAXAcA0IBDBeQAHALAWAZQASAYAFARQASAQAPAaQAKARAOAfQAbA7AEAMQAQAoADAhQAhBMAfBZQAKACAFAKQB8EoAPEeQABAKgIAHQgHAHgKAAIgBAAQgiAAgMg6g");
	this.shape_42.setTransform(188.0682,98.1623);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FBC85B").s().p("ADaKzQgcjEgUhmQgGgegUhUQgShJgHgrIgVhCQgMgogHgbQgTgggZg5QghhJgIgSIgBgCQgMgIgLgQIgSgdQgQgZgKgbQgIgHgKgNIgQgYIgmg0QgWgfgNgWQgMgUgGgTQgQgDgLgVQgEgIgJgcQgMgjgBgWQgKghADgfQgEgIgDgUQgDgQAAgHQAAgMAFgKQAFgKALAAQALgBAHAIQAGADAAAGIABAdQAIAEACAJQAEAVADAsQAJAXAHAYIAPAdQADgBADADQAaAaAaAtQAQAaAcAzIAXAlIAWAmQAlA7AbAzIAzBkQAbA7ALAuQAXA3ALAlQAeBJAYBoQAUBWAQBrIAPBgQAIA4gDAoQgBAVgXAEIgHABQgRAAgDgTg");
	this.shape_43.setTransform(180.7063,98.9542);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#CA2C2B").s().p("AiFHdQgLAHgNgHQgNgHABgOQABgVANgmQANgoADgUQAGgnAHgdQgFgJADgJQASguAMgXIADgEQASiGAhhIQADgPAIgVIANgiIANghQACgXALgeIAXgyQAUgoAKgRQASgeAWgUQAthQACg4QAAgIAIAAQAHgBADAHQAMAjgLAsQgIAggYAtQADAZgRAkQgJAVgTAlIgYA6QgOAkgNAVQgFAfgQArIgaBGQgxCOgNBjQgCAJgJAEIgGAmQAKAUgHArQgDAXgKAnQgCANgOABIgDAAQgLAAgHgJg");
	this.shape_44.setTransform(39.8789,121.5731);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FBC85B").s().p("AizH4QgLAGgLgJQgEgDABgFQAAgFADgEIgCgFQgBgWAHgcIAOgxQAPgvAVgaIAWiJQACgKAHgGIAFgeQANhOAFgSQAPg4AbgeQALgsAQgnQAVg0AJgTQATgmAZgXQAXg4AVgnQAdgzAVgHIAQgiQAMgTAMgGIAGgTQACgIAIADQAIADgEAIQgEAKgJAMQAAANgIARQgDAHgOAVQAHAOgSAbQgKAOgQAUQgLARgWAlQgUAkgMASQgIAYgSAlIgcA9IglBeQgBAegMAtIgVBIIgMAvIAAAJQgUCRgjCBQgFAWgOARQgKANgKAAQgGAAgGgGg");
	this.shape_45.setTransform(36.9889,117.1544);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#CA2C2B").s().p("ABtMaQgdgEgLgDQgVgFgFgYQgHgcAFgtIALhKIgBg6QgCgUABgYQAAgHAEgGIAAgFQgBg+AAg/QgLgSgBgfIABg0IAAhJQABgpAFgfIgCgXQgOhLgCglIgIgdIglhsQgMgXgSgxQgPghgGgWQgXg0gKgdQgRgyAEgjQgQgcgFgxQgCgNgChCQgDgpAAgWQgBgoAJgZQgGgXATgkQAEgIAJAEQAKAEgDAJQACACAAADIgHAiIAAABQAAAPgEAIIgBAEIAOB1QAHBFgGAwIACAKIAOBFQAKAdAFALQAOAeAeA6IAZAzQAOAfAEAYQASAnAVA+QAXA/AHAWQAPAyADAoQAMA/ADBKIADA9QABAmgFAaQADAqgHAaIAAAVIAGDPIAOBlQACALgMAIQgIAGgIAAIgGgBg");
	this.shape_46.setTransform(144.0823,110.9789);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CA2C2B").s().p("ABCMIQgEgDgSAEQgVAFgFgBQgOgDgIgKQgLgPAEggQAHgkABgOQABgVgDhUQgChBAFgnQgBgdAFg0IAEgjQgCgdABgoIAAhDQABjSgdilQgBgDADgFQgKgdgFglQg1iDgUiHQgEgNgGgbQgKgtAGgeIABgXQgCg4AEgzQAAgKAHgIQAHgIALABIANABQAHABAFAEQARgWAZARQAOAJgIAQQgQAlgFAmQAEAZADAkIAEA8QADAZAJAyQAHAugDAdIABAEQAPA8ARA3IAHAUQAyCEAVCBQAKA8ADAbQAFAygBAnQANAlABAqQACAtgLAlIgGBaQAAAHgDAFIgDAuQAIAIAAAOIgBBIQACAWgCAeIgCA0QgBAIgDAGIAABCQAAAQgOAFQgFACgFAAQgJAAgHgHg");
	this.shape_47.setTransform(128.0896,109.9157);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#407F74").s().p("ABEMRIgJgDIgJgCQgNAGgLgOQgLgNAHgNIAHgKQgCgGABgGIACgXQgNgVACgrIAHhBQABgVAFglIAIg6IAAgoQgCgUABgfIACgrQABg5ADg3QgDgYgEg7QgDg0gFgeIgOhVQgOgagKgiQgIgXgLgrQgNgvgLgtQgVgjgKhDQgZglgFhAQgCgPAAhdIgBhuQAAgpABgHQACgbAMgSQACgEAFACIAHgIQAHgJAMAHQALAGgEALQgIAUgBAOQAAAIgEAHQADAbgCAtIgDBDQAAATADAoQAIA5ANA9IAOA1QAXA6AeBoIADAJQAKAQAIAYIANAqIAJAjQAEAAACACQAXAUAIAmQACAIAHA6IAJBCQAEAmgFAbQABAOgDAsQgBAwgEBhIgDB3IABAGQgCDJAAAoQAAANgLAHQgGADgGAAQgFAAgGgDg");
	this.shape_48.setTransform(137.1592,110.0217);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F9EFE5").s().p("AieOuIgJABQgkAThDgIIhkgTQg3gKgkgKQgzgOglgUQhjgWhcgzIgHgHQhLgbg2gxQhqgbhsgHIgFgCQgMAEgLgFQgNgGgFgOQgQguALhDQAGgpAWhIQAFgRAHgSQAfiNA3iEIAJgaQAbhKAihRQA2iBBeirQAJgQAUABQBIiSA/hSQBOhhA8ggIAHg6QABgLACgKIAAgDIADgjIgBgNQgCgUABgUIAAgCQgDgDgBgFQAAgFAEgEIACgBIgDgbQAAgGAFgCQAFgDAEADQALAGAJALQAogNBFAPQATACAOADQALADAUAIIAJACQBvAWDBADIAWAAQAUgBAOABQBqgCAmADIAogJQAYgFAQgCIA4gEQANgEAbgNQAYgLATACIADABQABgIADgIQAGgRARACQASADABASQACAYADBKQACA8AFAlIAOAZIAPAZQAfAPAjAfQATAQAlAlQBMBNAwCCIAbBHQBABFAuB+QAbBJAqCOIAwCNQAcBRARA8IAmB+QAUBKgBA3QAAANgJAJQgIAIgOABQg6AEgdAFQgyAHgiARQgZANgkAZIg7ApQg9AohFAOQhGAOhGgOQgMgCgIgMIgBAeIABANQAAARgLAKIgBACQADAKgDAJQgDAKgLAFQgTAJgRABQgRAFgSgBQgGACgFAAQgpgCgsgNIg2gEQgIAIgLgCQh2gMh2AAQgGAAgEgBIhDANQgDAJgGAFQgHAFgJgBIgKgBQgMAQgcAAIgBAAQgbAAgKgQg");
	this.shape_49.setTransform(115.0694,96.9351);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.apron_05, new cjs.Rectangle(-1.2,-4.2,233.29999999999998,200.39999999999998), null);


(lib.apron_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("AiFDxQAgiIBFh7QBEh7Bihj");
	this.shape.setTransform(57.275,66.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6,1).p("Aoog9QBTApBwAbQBMATCAAUQBhAPA3ABQA2AABRgLQDUgeDPhG");
	this.shape_1.setTransform(101.1,30.376);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6,1).p("AIRgxQgQAQgZALQgRAIgeAJQjqBDj4gJQj4gKjlhVQgMgFADgG");
	this.shape_2.setTransform(100.944,22.9579);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6,1).p("AICgoQhOArh/AaQjVAsjOgVQjagVi5hZ");
	this.shape_3.setTransform(100.625,14.3283);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6,1).p("ABqAzQgUAEglgKQg6gPgegQQgwgYgSgp");
	this.shape_4.setTransform(10.625,174.9321);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.6,1).p("ACOAaQgTgCgYABQgdABgOABQhMABhIgZQgigKgPgT");
	this.shape_5.setTransform(36.15,187.2292);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6,1).p("AGngyQhaBIhxAeQhvAfh0gPQgogFhBgPIicghQg3gNgWgIQgqgSggghIAHgP");
	this.shape_6.setTransform(91.5401,199.9336);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F1806").ss(2.6,1).p("AEXg+QgaAhgKAKQgUATgZAMQgZAMg4AIIiiAWQg5AJgdAAQgVAAgsgFIhSgK");
	this.shape_7.setTransform(161.85,185.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6,1).p("AiprLQBaCHAtBMQBFB3ApBoQClGeh9JH");
	this.shape_8.setTransform(178.4567,105.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5F1806").ss(2.6,1).p("Ai7pqQAGBRAnBFQAOAZAXAfQAOASAcAkQCaDPA+EBQA+EDguD+");
	this.shape_9.setTransform(171.6842,98.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6,1).p("AismMQgDBlAZA8QALAcAlA3QCnEBBsEl");
	this.shape_10.setTransform(158.9589,80.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5F1806").ss(2.6,1).p("AibmnQAJBdA0BGQARAXAnArQAmAvAlBOQByDuAFD+");
	this.shape_11.setTransform(161.3,82);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(2.6,1).p("AkIqlQgRBKATBPQAQBEAsBMQAgA4A7BNQAhAqBBBVQEJFvAVGv");
	this.shape_12.setTransform(162.9041,110.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5F1806").ss(2.6,1).p("AkLrGQgcBxA8CJQAYA2ApA+QAWAhA3BNQAvBBBEBkQBWB7AsBTQA/B2AYBsQAMA5AKB2IAQCt");
	this.shape_13.setTransform(153.9821,115.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5F1806").ss(2.6,1).p("AkFpzQAAA+AOA4QAPA9AeAtQAZAmAuAyQAZAcAzA3QCRCqBRD0QAkBtAWBvQAVBnAMB7");
	this.shape_14.setTransform(137.775,126.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#5F1806").ss(2.6,1).p("AknquQAHCCBtCQQAdAmBEBOQBBBKAeAqQB+CqBGD+QAdBpAWBzQAQBZAUCG");
	this.shape_15.setTransform(142.025,119.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5F1806").ss(2.6,1).p("AjUokQASBWA/BoQAkA7BNB0QCADRA7EcQAJAsAPBYQAGAnAOBE");
	this.shape_16.setTransform(135,136);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#5F1806").ss(2.6,1).p("AipnaQAYCfBdCRQAIALAbAoQAVAfANAUQAYArAcBPQBRDmAICsQAAAIACAFQAEAHAFgB");
	this.shape_17.setTransform(131.1,143.9268);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#5F1806").ss(2.6,1).p("Ah1liQBuDRAxCHQBHDAAFCs");
	this.shape_18.setTransform(127.7,155.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#5F1806").ss(2.6,1).p("AhirrQgUCGAJCEQADAnAKBSQAKBOADAqQABAXACBCQABA3ADAiQALCGBYEOQBVECAFCU");
	this.shape_19.setTransform(122.5746,120.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#5F1806").ss(2.6,1).p("AggsXQg2DWgGDdQgCBLAHA1QAMBYAzCGQBCCuAMAsQAjCAAECgQACBxgPCz");
	this.shape_20.setTransform(108.6206,124.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#5F1806").ss(2.6,1).p("AgDslQhMCzABDLQAADCBFC/QAMAlAcBGQAYBAAKAvQAMA4ACBGQAAAzgFBNQgKB+geD2");
	this.shape_21.setTransform(97.4019,126.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#5F1806").ss(2.6,1).p("AAKslQhACLgGC3QgFCRAiC/QAUBuArDbQAiDAgFCMQgCBDgLBQQgIA5gQBY");
	this.shape_22.setTransform(88.2942,125.95);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#5F1806").ss(2.6,1).p("AA0sYQg8BagaCLQgjC+AjE6QAKBTAUCpQAOCTgCBsQgBBPgKBeQgCAOgWCe");
	this.shape_23.setTransform(79.3125,123.65);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#5F1806").ss(2.6,1).p("ABPsRQgyBJgcBhQgUBIgPByQgLBTgDA3QgFBNAHA+QACASAHAuQAHAoACAYQAEAvgCA9QgCApgHBEQgLBlgWDDQgPCoAHCB");
	this.shape_24.setTransform(71.2767,122.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#5F1806").ss(2.6,1).p("AicJCIAOjdQAFhUAGgqQAJhGAVg1QAJgYAohOQAhg+AKgpQAHgeAEg+QAMh+AdhTQAnhwBLhD");
	this.shape_25.setTransform(44.525,130.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#5F1806").ss(2.6,1).p("AhXFnQgBiTAHhJQALh4AjhcQAOgnAzhmQArhWAPg6");
	this.shape_26.setTransform(47.3732,153.575);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#5F1806").ss(2.6,1).p("AB0rwQhzDFgsDKQghCWAKB4QAEAoALA/QAOBQAEAYQAWCsgrCoQgMAwgdBfQgWBVACA9");
	this.shape_27.setTransform(61.7625,118.575);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#5F1806").ss(2.6,1).p("ABumvQgVBjgNAwQgXBRgeA7QgKATgZAtQgYAogLAXQguBegMB9QgHBOAECZ");
	this.shape_28.setTransform(21.0156,134.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#5F1806").ss(2.6,1).p("AjLHSQAIikBHjCQAsh2BqjbQAdg8AVghQA9hhBDgu");
	this.shape_29.setTransform(27.825,82.325);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#5F1806").ss(2.6,1).p("AiwHjQAEiLAJhJQAPh1AohWQAQgjAkg7QAnhBAPgeQARgkAWg6QAghVAFgLQAYg8ASggQAbgwAigf");
	this.shape_30.setTransform(18.45,122.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#5F1806").ss(2.6,1).p("ADTrRQhmBCgoCNQgOAwgNBRQgRBjgHAfQgTBWgzCEQhCCqgOAsQhFDXgJD8QgCA0AKAa");
	this.shape_31.setTransform(42.9083,112.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#5F1806").ss(2.6,1).p("AB6mvQh5CIg+CvQg/CuAHC1QABAhAEBCQABA5gKAp");
	this.shape_32.setTransform(43.65,81.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#5F1806").ss(2.6,1).p("ACtnHQgnAUgkAmQgaAdggAwQhtCsg3DHQg3DIAIDN");
	this.shape_33.setTransform(24.7046,77.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#5F1806").ss(2.6,1).p("AIeAfQgTgwgOhtQgHg2gEgsQiVBHiuAaQilAZitgRQjVgWiRhOQgEA4gLBCQgWCEgmA3QCABMDVAoQGpBRGpivQgqgzgLgeg");
	this.shape_34.setTransform(101.9468,22.4989);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B8912A").s().p("AhYBYIgggBIgdgBQgQAAgGgNQgmAAgSgCQgggCgYgHQgKgDgGgIQgygIgngLQgqgDgjgZQgFgDgEgGIgHACQgHACgHgEQgHgEgCgHIgEgRIAAgJQgBgLADgRQADgQAPACQAPABAEAOIAHACIALAHQAMgFAPAEQAfAJAiATIAFADQAiANAoAIIAHAAIBoAMIBoAMQADgKAJAAQAQgBAeAGQAfAHAOAAIApgCQAagIAdAFQAigEBDgPIBogfQBBgSAngPIAIgDQASgLAYgJQAGgCAFAEQAGAEgBAGIgCAcQADAKgDALIAAAAQABANgCAJQgBAHgGACQgGABgGgDQgVAPgrAOIg9ARQh3AnhegCIgCABQgeAHgmACIhFABIgCAAQgSAGgWAAQgZAAgfgIg");
	this.shape_35.setTransform(100.7188,10.3836);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#244B46").s().p("AAbBLIgEAAQgWABgVgBQhNAGhNgTIh1gIQgJAAgHgHQhigNhLgiIgBAAQgSgCgGgMIgBgCQgKgIgEgLQgEgKADgNQgDgFACgFQADgGAGgBIAIgHIAJgEQAHgHAKACQBLAUBGAjQADABADAFIAkALIA3AKQAEgDAHABIB2ANQBGAJAvAIQAIgJAMABQBmABCGgOQAygZArgKQAHgCApgEQAsgXApgOQATgGAJARQAKARgLAOQAFAlg2AXQgLAFhMAWQgGACgEgBIgYADQgeANgiAJQgKADgJgFQgJgFgEgJQgtARhDAOQgOADgLgKQgeAIggABIgDAAQgQAAgHgRg");
	this.shape_36.setTransform(100.6188,19.2833);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A3250C").s().p("AhfBQIgPAAQgIAAgGgGQgKACgLgFQgLgEg0gFQgxgEgUgMQgSAGgWgIQgLgDgHgJQgRABgZgJIgogOQhEgWgegTQgHACgGgHIgJgMQgLgOALgNQAKgMAPAIQAFgJAYALQAMAFAPAJIAHADQAFgFAIACQAKADAKAGQAkgDA1APQAeAIA4ARQAIACAGAHQAjAAATADQAeAEAUAJICUACQBWAAA/gIQCugWCchBQAdgMAJAgQAJAhgeALQiuBDipASIglAEQgdAVhFgIQgeAIggAAQgkAAgogJg");
	this.shape_37.setTransform(101.2488,27.9434);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FBDCB0").s().p("AApBcQgGACgEAAQieAJimgnIhSgTQgugMgigOIgagKQgQgHgGgIIgIgCQgdgHgOgKQgUgOADgYQACgYATgHQARgGAVAKIApATQAcANAMANQAlAIAfAMQAXgDAjAIIA5AOQBJALBLAHQBdAJA2gFQAWgCAogJQAjgGAaAIQAzgHBIgUIB4gjIAxgPQAfgIAVACIAAgBQgCgLAKgDQALgDAEALIALAdQAGAJAEABQALADADALQACAKgHAJQgRATgsAKIhGAMIgfAJIghAJQgVAWgxAKQgLAChBAIQg5AHgwAAQgsAAgkgFg");
	this.shape_38.setTransform(101.8544,35.0831);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CB645F").s().p("AC3I5IgDgdIgHgjQgJgMgGgQQgDgLgFgYIgHgeIgahJIgIgXQgTgygFhDQgKgngCguIgOhBQgihygvhqQguhkhAhgQguhGgJgPQgcg1ACgrIAAgCIgCgGQgDgJAKgDQAKgCADAJIAAAAIACABQACgIADgHQAFgLANACQAMADAEALQAFAMADAWQADAaADAJIAJAeQAEARgHAMIAhAwIAiAxIANAVIgCgGQgBgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAIADAAQAWAQAXAfQAHAJAcAtQAqBCAcBEQAcBCASBMQAJAkACALQAcBUAOBWQAVCKgMA5QAPA8gEA1QgBAQgPAAQgQAAgBgQg");
	this.shape_39.setTransform(168.5471,94.9277);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#244B46").s().p("ACKFCQgfg3hGhdQhQhsgbgqQh3i2AbieQACgLALgDQAKgBAIAHQAGAAAAAEIABAJIABAAIAAABQABAMgCAKIAAAGIAjBWQATA1AKAoIBMCPIBOCPQAwBJAXAyQAHAOgNAIQgFADgEAAQgHAAgFgJg");
	this.shape_40.setTransform(153.619,74.6606);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A3250C").s().p("AEILNIgGgEQgIgBgGgGQgGgGgBgKQgChhgNhgQgphcgBhZIgGggQgZgPgNg0QgKg7gGgVIgJgdQgdgagbg9QgbhDgNgbIgTgnQgXgRgYglQgagqgOgTQgigvg6hFQgagZgLgRQgRgOgXghIgHgLQg4hOgJhPQgMgsAAgsQAAgLAHgHQAHgHALgBQAjgCArAFIAAAAIACgCIAKgEQAEgBAIAAQAJABADAKQACAJgJAEQADAIgCAIQgHAYgBAaQAKAYANAjIAUA9QAEALAQAmQAOAgAEAUIAJAOIAfAqQATAbAAASIAJALQAHAJgDAMIAJANIAtAwQA6A+AyBgIAYAxQA6A5AzBvQAUAsALAhQASAgAHAiQAgBBANByQAEAXAAALIADAhQAJBOgBAQQgEA/gugCQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAQgKAJgKAAQgFAAgEgCg");
	this.shape_41.setTransform(147.4553,116.625);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B8912A").s().p("ADPIBQgnAFgCg7IgXhrQgWgrgNg6QgJgngKhFQgLgVgNgyQgNgpgFgKQgmhVgqhQQg2hjiUj4QgEgIAFgGQAGgGAHACQAGgGAEAFQA6BAA2BPQAWAQAZAfIAlAyQAyBIAwBlQAWAtAVBHIABACIAIATQARAgALAlIABACQAYA4AQBWQAKAxAPBhQACAHgFAHQAOAvgCAZQgDAcgWAAIgGAAg");
	this.shape_42.setTransform(139.5927,138.0715);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CB645F").s().p("ACLGYQgogCgLgqQgFg1gEgYQgMhIgWhtQgPgOgKggQgIgkgGgQIgUg9QgMgkgMgZIgHgMIgCgHIgDgHIgnhGQgUgfgPgkQgag4gKgxQgEgTATgFQASgFAFATQAQA5AbBEQANAcAWApIAFgBQADAAACADQAVAdASAlQBEBgAlCUQAVBWAeCyQADALgHAKQgGAJgLAAIgBAAg");
	this.shape_43.setTransform(130.8819,150.2231);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A3250C").s().p("AjmG2QgHgCACgHIAQg3QAEgrAPg1QAEgYAKggIATg2QAchVAlhWIAZg4QAsh5A0hZQAFgIAIgDIAggrIAXgdIAigrQAWgYATgLQASgLANADQAJACAVAKQAIADACAIQAEAFgCAFIgGAQIgDAGQgGAIgJgCIgBABQgEAPgPARIgbAcQg6BTgoBhQgCADgDABQgZBJgTAnQgFAKgLADQgOAhghBDIguBkIgwBkQgMAggQAWIgGAFIgQAeIgMAeQgCAFgFABIgBACIgDACIgHANQgCAEgEAAIgEgBg");
	this.shape_44.setTransform(31.6572,79.2167);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#244B46").s().p("AgnFrIgCgBIgGgEIgcABQgLAAgIgJQgHgHgBgMQgDhMAMhPQgOhXAfhuQAUhjAshEQAGgJAKgDIASgvIANgkQAJgWAKgMQALgeAMgUQACgDAEABQAEAAABADQADATgBARIAFADQAHAFAAAHQgBAOACAnQACAhgDAUQgEAagKAgIgSA4IgUA9QgMAjgKAYIgGApQgFAdgLBQQgHBGgJAnIADAvQAAAHgEAHIAAAAQAKACgBAMQgCALgKgBIgNABIgCAAQgHAAgDgHg");
	this.shape_45.setTransform(21.5323,142.2767);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#244B46").s().p("AhbCeQgGgBACgHIAKghIAAgEQAXhtAVgsQAkhPBFgkQAQgIALAMQAKALgGAPQgKAYgcAhQgGAPgRATIgeAgQgVAjgIAKQgRA5gOAaQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAgCQgDAFgHAAIgLAZQgCAFgEAAIgCgBg");
	this.shape_46.setTransform(57.5993,56.6509);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CB645F").s().p("AhwI5QghgMABgQQAAgGAFgEQgQglAJhKQAFgrAJgeIAIg4QAHgzAThKQAVhTAKgqQAFgYAXgCQAMgoANgaQAAgUAFgdIAGglQAKhGALgvIAJgiIAVheIAGgZQAch/AtgTIAEgMQAEgJAIACQAIADgBAJQgHAxgMBHIgUB4IgGA0QgCAdAAAeQACAQAPBKQAEAOgHAKQgHAJgMADIgqBcQgYA2gUAlIgaBEQgKBKgKBtIgPC5QgCALgFAGQABAFgCAGQgDAGgGABQgKACgJAAQgPAAgMgEg");
	this.shape_47.setTransform(43.2081,131.9609);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B8912A").s().p("Ag8MPIgLgPQghgOgQgUQgJgEgDgKQgIgiALgdIADgFQAQhYAGgsQACgLAJgHQAHhDAHgzQALhDAGgfIAEgnQADgVAGgQIACgwQABhCgJg9QgJgQgEgPQgIgZgFhAIgCgdQgOhuAahQQALhYARhCQAnjJBuh/QADgDADABIAGgFQAHgGAHAIQAHAIgEAIQgQAbgOAtIgXBLQgUA9gaA9IgHAiQgJAwgGAuQACAdAICSIAIBPQAFAzgCAgIADBLQABBbgGA9QgDAdgIAXQgCAXgGAbQgGAhAAAIQgHBDgCBMQgBAxgGBjQgDBXAGA9QACAXgXAEIgIABQgQAAgKgNg");
	this.shape_48.setTransform(64.5946,121.6105);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A3250C").s().p("AgNMkQgGgDgEgHQgFgHAAgHIgDgBIgOAFQgJACgIgFQgIgGAAgKQAChOAdhKIACgUQgQhSAXhNQgBgQACgxQgIg0gHhOQgGhXgFgrQgRibgEhPIgCgbQgJgmgEgzIgFhVQgBgwADg7QgPgiACgvQACgeALg2QAMg1AGgSQAMgoAVgXQAJglAZgXIAFgKQAEgKANgBQAJAAAIAFIABAAQAIgBAFAHQAGAHgFAJQgSAcgUApQgPBCgKBUQgGA1gIBiIAaC7QADAVAJAzQAlBsAXCpQAIA6AFBIQAlBpgNBVIABADQADAlABAmQACAPgNAKIgBADQgBAJgIAGIgECJQgCAsgBALQgGAfgTAQQgPANgTABIgCAAQgQAAgQgKg");
	this.shape_49.setTransform(84.1904,125.8012);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#244B46").s().p("AAIMeQgJgDgCgMIAAgBQgJgIABgRIAFgdIACgJQAChJATg5QAEgoAHglIAAgVQgHgeAHhCIgGipQgHgrgKghQgHgYgqhtQgghRgJg2QgLgRgIgaIgNgrQgbhZgBhpQAAiAAtiOIALglQAJgeALgVIAGgNQgHgHAGgHIAOgOQAGgFAHABQAHABAFAGQAJgDALABQALAAAHAJQAIAKgEALQgWBOgWBkQgJBsgOBjIgBAHQAAAJgIAEIALBYQAHA4AGAgIAEASIAAABQAxCDAdBWQAaA1ALAvQBdDsgvCjIACBgQAOA6gJAuQgCAPgMAIQgLAHgOgFQgRAOgYAAIgYALQgFACgGAAQgHAAgHgEg");
	this.shape_50.setTransform(103.2861,126.1337);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#10264F").s().p("AhAQHQghAAgUgFQgcgGgOgRQgYgGgUgKQgYgCgigGIg5gMQgLgBgIgDQgHgCgHgHQghAAgagFQgjgHgQgPQgNgNgDgQQgDgQAHgPIgEAAQhfAEhTgdQgjgBgXgIQgSgHgJgLQgQgBAAgPIABgMIgDgPQgagEgRgMQgRgFgRgJQgagCgTgNQgSgCgUgGQgLgDgFgLQgLgFgGgKIgCgCQgQgOgDgUQgDgRAKgPQgEh4AYh0IAEgcQgJgPAHgZQADgJAMgeIAQgmQAKgYAJgOQgGhBAAg1IgCgKQgChQAOhVQABgIAGgIQAdioBLioQA1h3A5hGQBDhQAygIQAmh9AaiVQABgHAFgFIABgPQAAgKAJABQAJAAABAJIAAAFQAQgBAIAKIAHAHQAIgBAGADQBnAPAYAfQANAAATAEIAfAFIBkAUQAHgIAMAAICaADQBYAABBgHQBWgJBOgZIBBgTQAngNAWgNQAKgFAJAGQAKgCABAJIABAFQAEADABAEIABAHQALAJAFANQAFANgDAOIgIAgIABAKIAPBQQAGgFADAHQAOAoAQAmQAbAdAeAoIAcAoQAQAYAHAUQAvBFAhBNQAVAgARApQAWAqAQAlQAsA3AWBKQARA7AFBUIALAjQAGAUACAQQACATgCAxQAQBzgHCeQgFBogHAzQgLBVgYBCQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAIgBgCQgGA3gsAbQgJAGgPAHQgSAQgWAJQgYAJgVgDIgMADQg3ANgZgCQgpAJg1AGQgfAEgVgEQhSAKhFgNQgGAQgMAQIgYAfQgPARgQAFIgBAAQgOAKgMAEQgcAZgnASQgjASgkAGQgpAIg5ACIhiAAg");
	this.shape_51.setTransform(98.6969,104.0488);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.apron_4, new cjs.Rectangle(-5.2,-3,201.89999999999998,212.6), null);


(lib.apron_03 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("ACPthQkCESi0FRQi0FRhTFwIACADQA7B0BUBlQAPASALAIQAPAMAQACQAPACASgHQABAAAfgOQAqgTAvgCQAvgCArAPIADAIIgJBtQgBAPApgIQAygKAOALQAGAEAMALQALAKAHAFQATANAeAGQAUADAhABQAdABATgBQAagCAUgGQAdgJAkgYQAogdAVgOQAyggA7gOQA6gOA8AF");
	this.shape.setTransform(55.8611,106.0491);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6).p("AoJgzQAQANAXAJQAPAGAcAIQEABGDHgEQANAABAgCQCTgHBNgPQB7gXBSg4");
	this.shape_1.setTransform(121.925,24.2473);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#006E91").ss(2.6).p("AjvqIQCbD4CLF8QCNF+ArEk");
	this.shape_2.setTransform(182.6469,93.9291);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6).p("AiBLXQAmgfAxgLQAxgLAwANQAMAEAZAHQAWAGAPgDQAYgFAgggQBBhCA3hOQgbhxgoiLQhQkVhDiEQiRkij+ko");
	this.shape_3.setTransform(204.9523,92.1979);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F3DFC6").ss(2.6).p("ADtK2QgFgjgKgsQgGgXgPg3Qg5jQgihtQg4iug8iFQhljHgthmQhNixgHiM");
	this.shape_4.setTransform(197.8,90.6329);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#006E91").ss(2.6).p("AioqxQBmD4BMFHQAvDGBHGLQAFAYAkC9");
	this.shape_5.setTransform(173.8369,94.8012);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6).p("AgMg/IAZB/");
	this.shape_6.setTransform(191.975,170.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F1806").ss(2.6).p("AGThJQgHASgXACQgdAAgQADQgWAEgaAUQgcAZgOAKQg0ArhGALQhGALg+gZQgcgNgPgGQgagKgTgBQgTAAgaAIQgdALgPAFQgqANhPgPIhHgRQgLgFgGgM");
	this.shape_7.setTransform(152.975,184.239);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6).p("AAEAWQgGgOABgYIAAgS");
	this.shape_8.setTransform(112.3304,182.6875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#006E91").ss(2.6).p("AgJLxIAS3h");
	this.shape_9.setTransform(113.05,103.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#006E91").ss(2.6).p("ADHJjQhCksh6lZQiNmAhEi+");
	this.shape_10.setTransform(197.675,99.9979);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F3DFC6").ss(2.6).p("Ai8o3QD6I5B3InQABAHAEAAQACABAAgDQAAgDgCAB");
	this.shape_11.setTransform(184.1793,104.7087);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F3DFC6").ss(2.6).p("AhCrZQCCMMADKq");
	this.shape_12.setTransform(168.6338,111.7978);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#006E91").ss(2.6).p("AAIMVQAbkvgZnmQgPkGgGiDQgLjkABio");
	this.shape_13.setTransform(135.8343,108.6039);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F3DFC6").ss(2.6).p("AAtMaQgTsbhGsX");
	this.shape_14.setTransform(142.6526,108.7582);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F3DFC6").ss(2.6).p("ABHpgQiGJagHJq");
	this.shape_15.setTransform(106.9345,118.7426);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#006E91").ss(2.6).p("AheLBQgFlnAxlhQAvlPBjlm");
	this.shape_16.setTransform(103.7038,111.1382);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#006E91").ss(2.6).p("AhxMhQgFmVA5mSQA6mTB2mD");
	this.shape_17.setTransform(91.9979,108.7465);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F3DFC6").ss(2.6).p("AiQM3IAGhqQAPkBAKiHQASjZAaisQBCmyCVk/");
	this.shape_18.setTransform(85.9659,110.6158);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#006E91").ss(2.6).p("AjZMSQAUliA+kWQBJlMCLkGQA8hqAag3QAtheAKhO");
	this.shape_19.setTransform(49.525,96.7985);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F3DFC6").ss(2.6).p("Aj4MZQAZlYAcixQAvkeBfjUQAthlBoixQBvi7AqhZ");
	this.shape_20.setTransform(45.45,97.4337);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#5F1806").ss(2.6).p("AoKBlQAQhDAAiCQDyBGD+AAQD9AADyhFQAFAsAHAvQAOBbAMAK");
	this.shape_21.setTransform(121.7685,9.6907);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F3DFC6").ss(2.6).p("AC6r3QinErhOFKQghCJgdDGQgbC3gjF5");
	this.shape_22.setTransform(63.2966,98.6976);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#006E91").ss(2.6).p("Agnn3QAnEgASDXQAYEagDDg");
	this.shape_23.setTransform(177.922,129.9992);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F3DFC6").s().p("AgeAMIATgpIApASIgSApg");
	this.shape_24.setTransform(196.85,58.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F3DFC6").s().p("AgdAMIASgpIApASIgSApg");
	this.shape_25.setTransform(210.375,88.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F3DFC6").s().p("AgdAMIASgpIApASIgSApg");
	this.shape_26.setTransform(221.175,118.175);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F3DFC6").s().p("AgdAMIASgpIApASIgSApg");
	this.shape_27.setTransform(226.85,140.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F3DFC6").s().p("AgrAEIAogwIAwApIgpAwg");
	this.shape_28.setTransform(160.85,171.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F3DFC6").s().p("AgsAEIApgvIAwAoIgpAvg");
	this.shape_29.setTransform(159.25,139.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F3DFC6").s().p("AgsAEIApgvIAvAoIgoAvg");
	this.shape_30.setTransform(156.95,106.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F3DFC6").s().p("AgrAEIAogvIAwAoIgpAvg");
	this.shape_31.setTransform(153.3,73.325);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F3DFC6").s().p("AghgEIAmgdIAdAmIgmAdg");
	this.shape_32.setTransform(28.675,84.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F3DFC6").s().p("AghgEIAmgeIAdAnIgmAeg");
	this.shape_33.setTransform(17.525,115.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F3DFC6").s().p("AghgEIAmgdIAdAmIgmAdg");
	this.shape_34.setTransform(9.975,146);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F3DFC6").s().p("AgrgGIAyglIAlAyIgyAlg");
	this.shape_35.setTransform(57.075,167.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F3DFC6").s().p("AgrgGIAyglIAlAyIgyAlg");
	this.shape_36.setTransform(60.725,133.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F3DFC6").s().p("AgrgGIAyglIAlAyIgyAlg");
	this.shape_37.setTransform(65.525,100.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F3DFC6").s().p("AgrgGIAyglIAlAyIgyAlg");
	this.shape_38.setTransform(72.4,69.45);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F3DFC6").s().p("AgrgGIAxglIAmAyIgxAlg");
	this.shape_39.setTransform(84.05,38.575);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F3DFC6").s().p("AgigGIAogcIAdApIgoAcg");
	this.shape_40.setTransform(79.475,11.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F3DFC6").s().p("AgigDIAmgfIAfAmIglAfg");
	this.shape_41.setTransform(101.975,15.375);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F3DFC6").s().p("AgigCIAlggIAgAlIgkAhg");
	this.shape_42.setTransform(127.925,15.95);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F3DFC6").s().p("AgiADIAgglIAlAgIggAlg");
	this.shape_43.setTransform(153.325,14.575);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F3DFC6").s().p("AgsADIApguIAwAoIgpAwg");
	this.shape_44.setTransform(151.25,42.25);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#006E91").ss(2.6,1).p("AgPgsQADAEAOAJQAMAHACAIQABAEgEALQgIAWADAY");
	this.shape_45.setTransform(182.4861,48.575);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#006E91").ss(2.6,1).p("AgPAgIAfg+");
	this.shape_46.setTransform(199.075,157.25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#006E91").ss(2.6,1).p("AgEgqIgMApQgEAJADAGQACAEAGAEIAcAV");
	this.shape_47.setTransform(191.3607,124.15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#006E91").ss(2.6,1).p("AgRgfIAeAQQgOAWgHAZ");
	this.shape_48.setTransform(217.6738,135.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#006E91").ss(2.6,1).p("AgTgrQARAHAPAJQAGADABADQABADgCAGIgSA4");
	this.shape_49.setTransform(209.3417,108.875);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#006E91").ss(2.6,1).p("AgYglIAvAWIgLA1");
	this.shape_50.setTransform(196.7933,77.025);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#006E91").ss(2.6,1).p("AgQAaQAMgbAVgY");
	this.shape_51.setTransform(141.075,31.925);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#006E91").ss(2.6,1).p("AADAeIgOgyIAbgJ");
	this.shape_52.setTransform(22.0467,137.475);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#006E91").ss(2.6,1).p("AgbASQAfgPAYgU");
	this.shape_53.setTransform(17.75,171.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#006E91").ss(2.6,1).p("AgQgZQAMAeAVAV");
	this.shape_54.setTransform(46.7,183.225);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#006E91").ss(2.6,1).p("AgWAaQAWgXAXgb");
	this.shape_55.setTransform(68.675,189);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#006E91").ss(2.6,1).p("AAFAyIgYg2QgCgEAAgCQABgDAEgEIAmgf");
	this.shape_56.setTransform(71.77,155.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#006E91").ss(2.6,1).p("AALAtQgLgegRgbQAWgNASgT");
	this.shape_57.setTransform(74.2471,121.525);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#006E91").ss(2.6,1).p("AgXAsQARgTAYgSQgVgVgMgd");
	this.shape_58.setTransform(50.2882,149.75);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#006E91").ss(2.6,1).p("AgSAzQANgaAVgTIgbg4");
	this.shape_59.setTransform(53.435,116.475);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#006E91").ss(2.6,1).p("AgYAvIAtgrIgbgx");
	this.shape_60.setTransform(59.5157,84.65);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#006E91").ss(2.6,1).p("AgYAtQAVgSAXgLQgPgbAAgh");
	this.shape_61.setTransform(68.8587,52.675);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#006E91").ss(2.6,1).p("AAAAnIgQg+QATgFARgK");
	this.shape_62.setTransform(86.9743,57.55);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#006E91").ss(2.6,1).p("AAIArQgSgegJgfQAYgIASgQ");
	this.shape_63.setTransform(79.2325,90.25);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#006E91").ss(2.6,1).p("AgPApQAMgqATgn");
	this.shape_64.setTransform(172.425,182.95);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#006E91").ss(2.6,1).p("AgaghQAiAbATAo");
	this.shape_65.setTransform(150.375,185.05);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#006E91").ss(2.6,1).p("AABgqQgIAEgGAJQgFAJABAKQAAARAQASQAIALAMAH");
	this.shape_66.setTransform(163.4923,56.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#006E91").ss(2.6,1).p("AgPgiIAXASQAIAHAAADQAAADgDAEIgVAi");
	this.shape_67.setTransform(142.65,58.725);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#006E91").ss(2.6,1).p("AAQgxQgQAUgNAWQgFAIABAFQAAAHAIAIIAcAd");
	this.shape_68.setTransform(166.2977,88.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#006E91").ss(2.6,1).p("AgTgoQAWAKAPAVIgbAy");
	this.shape_69.setTransform(144.8622,92.775);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#006E91").ss(2.6,1).p("AAQgwQgWAWgQAWQAWAeAbAX");
	this.shape_70.setTransform(169.79,122.775);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#006E91").ss(2.6,1).p("AgWg0IApAwQgVAZgLAg");
	this.shape_71.setTransform(147.5306,124.85);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#006E91").ss(2.6,1).p("AARgwQgUARgOAWQgDAFAAACQABACADADIAlAu");
	this.shape_72.setTransform(171.775,153.975);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#006E91").ss(2.6,1).p("AgRgsQARANANAUQAFAGAAAEQAAADgFAIIgVAj");
	this.shape_73.setTransform(148.2,156.175);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#006E91").s().p("AAEBNIgBgEQgDgEAAgFIgDgfQgMAEgCgLIgDgfQgHgDgDgGQgDgHAEgHIANgYIAAgEQAAgJAJgEIAHgOQAGgKALADQAKADABALIAECZQABAOgOAAQgOAAgBgOg");
	this.shape_74.setTransform(109.6716,105.4546);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#006E91").s().p("AASBpIgkguQgYgdgEgWQAAgGADgEIgBgGQgBgHAFgEQAFgDAHABIAFgCQADgSAOgYIAXgmQAFgLANAEQANADgBAMQgKBgAIBgQABAMgLACIgFABQgIAAgEgHg");
	this.shape_75.setTransform(108.1256,131.6173);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#006E91").s().p("AAPB0QgcgkgJgOQgWgjgCgaQgGgMACgQQADgQALgGIAEgCQAHgOAQgUIAWgdQAIgMAQADQAQADgCAQQgPBvAIBdQABAKgMAFIgIACQgGAAgEgFg");
	this.shape_76.setTransform(107.4764,158.976);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#006E91").s().p("AgCCMQgQgzgNhZQgOhogJglQgBgEAFgCQAEgDACAFQAHANAEAKQAGgCAGABQAGACADAGIAEAJQALgFAKAGQAhAVAEAfQAFAHAAALQAAAPgHAVIgNAkQgQA9ADAnQABALgMABIgCAAQgJAAgCgJg");
	this.shape_77.setTransform(190.8409,145.6849);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#006E91").s().p("AgDBqQgDgugJg9IgRhrQAAgHAGgCQAGgBACAGIAEALQAGgDAHABQAGABAFAGIARAcQAHAPgDANQAEAdgEArIgKBKQgBAMgMAAIgBAAQgKAAAAgMg");
	this.shape_78.setTransform(183.2856,114.1119);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#006E91").s().p("AgKA2QgRgvgBg0QgBgLAIgFIAAgBQAAgEAFgBQAEgBACAEQAIgBAFAFQAHAGAAAJQAFACABAFQAEAWgBAZIAJAiQAFATgTAFIgHABQgMAAgFgOg");
	this.shape_79.setTransform(178.0103,90.9932);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#006E91").s().p("AAlBPQgSgGgPgNQgHAFgGgHIgFgGQgHABgDgGIgNgTQgLgTAFgGIgGgJQgDgGAEgFQgGgXABgYQABgKAKgEQAKgDAFAJQAWAsAbAjIAWAbQALAQgBAQQgBAHgEAEQgEADgEAAIgEgBg");
	this.shape_80.setTransform(183.672,34.6337);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#006E91").s().p("AAVBNIgVgTQgNgLgIgJQgDgBgBgDIAAAAQgNgRgEgNQgCgGAEgEQAEgFAGAAIAEgYQABgKAKACQADgMAGgPQADgIAKgBQAKgBACAKQADAVADAuQAFApAMAXQAFAKgJAGQgEADgEAAQgEAAgFgDg");
	this.shape_81.setTransform(168.8843,11.1271);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#006E91").s().p("Ag6BMQgEgEACgEQAphEA+hIQAGgHAHAFQAHAFgCAIQgEAXgXAfQgcAhgKAPQgEAFgGAAQgGgBgEgEIgbAiQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgDgBg");
	this.shape_82.setTransform(58.6652,34.348);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#006E91").s().p("AgxBmQgJgFADgJQgEgEAAgFQAHgrAigxQApg2ARgeQAFgJAJAFQAIAFgEAJIgPAbQAHAFgEAIIgKAVQABAEgCAEIgRAaQgbA0gZAmQgEAGgFAAIgGgCg");
	this.shape_83.setTransform(42.5504,59.1824);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#006E91").ss(2.6,1).p("AgqggQAjAgAoAeQAIAFACgE");
	this.shape_84.setTransform(168.9,16.6816);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#006E91").ss(2.6,1).p("AgXA2QgBAAgBgDQAAgCABgCIAvhhQABgDACAA");
	this.shape_85.setTransform(166.775,6.65);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#006E91").ss(2.6,1).p("Ag5gmIBzBN");
	this.shape_86.setTransform(158.175,8.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#006E91").ss(2.6,1).p("AgpA4QAtg0Amg7");
	this.shape_87.setTransform(160.075,18.825);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#006E91").ss(2.6,1).p("AhCg1QAyA6BAAnIASAK");
	this.shape_88.setTransform(148.95,20.65);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#006E91").ss(2.6,1).p("Ag6A0QACgEAJgIIBqhb");
	this.shape_89.setTransform(147.925,9.525);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#006E91").ss(2.6,1).p("AA/AmQg/ggg+gr");
	this.shape_90.setTransform(135.5,10.875);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#006E91").ss(2.6,1).p("Ag7ApQA4gsA/gl");
	this.shape_91.setTransform(122.375,11.65);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#006E91").ss(2.6,1).p("Ag9A/QgBgIALgIQA/gvAyg+");
	this.shape_92.setTransform(135.6739,21.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#006E91").ss(2.6,1).p("AhAg9IADAEQA8A5BCA+");
	this.shape_93.setTransform(122.025,22.075);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#006E91").ss(2.6,1).p("AhHAxICPhh");
	this.shape_94.setTransform(108.225,21.375);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#006E91").ss(2.6,1).p("Agyg/IACAFQAoBHA7Az");
	this.shape_95.setTransform(95.125,20.05);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#006E91").ss(2.6,1).p("AgxgvQA2AqArAzIACAC");
	this.shape_96.setTransform(110.725,11.85);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#006E91").ss(2.6,1).p("AhMAkQBOgkBEggIAGgD");
	this.shape_97.setTransform(98.7,10.425);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#006E91").ss(2.6,1).p("AgggwIBBBh");
	this.shape_98.setTransform(74.3,16);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#006E91").ss(2.6,1).p("AAmAxQgIgUgcgcQgdgdgIgRIgCgE");
	this.shape_99.setTransform(86.325,8.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#006E91").ss(2.6,1).p("Ag8AnIACgCQA2goBCgj");
	this.shape_100.setTransform(84.1,18.025);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#006E91").ss(2.6,1).p("Ag7AkIB4hG");
	this.shape_101.setTransform(76.5,7.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#006E91").ss(2.6,1).p("AgyAuQAzgyAygp");
	this.shape_102.setTransform(55.3,41.25);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#006E91").ss(2.6,1).p("AgBAvIAAhSQAAgKADgB");
	this.shape_103.setTransform(36.675,67.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#006E91").ss(2.6,1).p("AgQBIQAOhNAThC");
	this.shape_104.setTransform(47.95,52.35);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#006E91").ss(2.6,1).p("AgtA9QAlhCA2g3");
	this.shape_105.setTransform(41.175,66.375);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#006E91").ss(2.6,1).p("AgPBcQAHhdAYha");
	this.shape_106.setTransform(24.025,91.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#006E91").ss(2.6,1).p("AguAkIBdhH");
	this.shape_107.setTransform(30.825,77.375);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#006E91").ss(2.6,1).p("AgLBOQALgmAIhQIAEgm");
	this.shape_108.setTransform(34.6,81.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#006E91").ss(2.6,1).p("Ag0A5QA0g2Ayg4IADgD");
	this.shape_109.setTransform(28.5,95.025);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#006E91").ss(2.6,1).p("Ag0A8QAog6A9g8QADgBABAA");
	this.shape_110.setTransform(17.35,107.575);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#006E91").ss(2.6,1).p("AgOhnIgBAKQgDAZAEAeIAaCJQAAADACACQABAAACgB");
	this.shape_111.setTransform(12.9558,122.9333);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#006E91").ss(2.6,1).p("AgOhcQAOA9AGAfQAJAzAAAq");
	this.shape_112.setTransform(24.5263,111.325);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#006E91").ss(2.6,1).p("Ag2A/IAAgEQAAgBADgEQA0g/A2g1");
	this.shape_113.setTransform(19.9101,127.35);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#006E91").ss(2.6,1).p("Ag2AiQAvgsA9gX");
	this.shape_114.setTransform(8.55,137.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#006E91").ss(2.6,1).p("AgahlQAHBlAmBhQAEAHAEgC");
	this.shape_115.setTransform(5.65,150.9313);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#006E91").ss(2.6,1).p("AAgBZQgmhWgZhb");
	this.shape_116.setTransform(18.075,143);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#006E91").ss(2.6,1).p("AhEA1IAMgMQA4g3BFgm");
	this.shape_117.setTransform(14.675,157.725);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#006E91").ss(2.6,1).p("AAmAZQglgaglgWIAAAAIgBgBIAAAA");
	this.shape_118.setTransform(228.3,132.4875);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#006E91").ss(2.6,1).p("AgNBGQAHhFAUhEIABgC");
	this.shape_119.setTransform(231.05,141.825);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#006E91").ss(2.6,1).p("AgxgLQAtARAxAFIAFAA");
	this.shape_120.setTransform(225.125,148.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#006E91").ss(2.6,1).p("AAXhXIgBAEIAAABIgBACIAAACQgYBPgTBX");
	this.shape_121.setTransform(222.4,138.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#006E91").ss(2.6,1).p("AgvgsIBSBQQAIAIAFAB");
	this.shape_122.setTransform(222.225,109.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#006E91").ss(2.6,1).p("AAPhMIgBABIgaCMQgCAHABAF");
	this.shape_123.setTransform(225.9429,122.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#006E91").ss(2.6,1).p("AAAAAIABAB");
	this.shape_124.setTransform(224.725,130.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#006E91").ss(2.6,1).p("Ag2gaIADACQA5AXAxAb");
	this.shape_125.setTransform(218.875,127.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#006E91").ss(2.6,1).p("AAShmIgBAFQgPBOgTB6");
	this.shape_126.setTransform(215.525,114.55);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#006E91").ss(2.6,1).p("AAEAYQgBgZgGgW");
	this.shape_127.setTransform(188.85,42.025);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#006E91").ss(2.6,1).p("Ag0ggIBAAjQAdAQAMAO");
	this.shape_128.setTransform(183.65,41.025);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#006E91").ss(2.6,1).p("AgDg/QAAA3ADA9QABAJADAC");
	this.shape_129.setTransform(178.575,31.475);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#006E91").ss(2.6,1).p("AhHhMIAEAGQAGAHAaAYQA3AzA0BA");
	this.shape_130.setTransform(196.025,51.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#006E91").ss(2.6,1).p("AAQA/IgBgDIgeh7");
	this.shape_131.setTransform(204.45,66.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#006E91").ss(2.6,1).p("AhQgvQAKAJASAIQAKAFAVAIQAoAQAyAoIAMAK");
	this.shape_132.setTransform(197.425,69);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#006E91").ss(2.6,1).p("AgBhdQgEBfAIBc");
	this.shape_133.setTransform(189.0885,54.575);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#006E91").ss(2.6,1).p("Ag7g/QAzBEBEA7");
	this.shape_134.setTransform(211.95,79.575);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#006E91").ss(2.6,1).p("AgCBbIAFi1");
	this.shape_135.setTransform(217.75,95.375);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#006E91").ss(2.6,1).p("AhLg7QAvAvBgBCIAIAG");
	this.shape_136.setTransform(210.375,99.275);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#006E91").ss(2.6,1).p("AAOheQgdBcADBh");
	this.shape_137.setTransform(204.3364,82.925);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#006E91").ss(2.6,1).p("AAfAkQgHgDgGgJQgGgMgDgGQgGgIgLgKQgNgLgGgGQgCgBAAgDQgBgCACAA");
	this.shape_138.setTransform(177.145,84.025);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#006E91").ss(2.6,1).p("AgCBBQAAg+AFhD");
	this.shape_139.setTransform(180.15,93.675);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#006E91").ss(2.6,1).p("AAvAwIgCgDQgqgzgxgp");
	this.shape_140.setTransform(183.125,104.05);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#006E91").ss(2.6,1).p("AgNBsIABgHQAKhrAPhhIABgE");
	this.shape_141.setTransform(186.375,119.025);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#006E91").ss(2.6,1).p("AA7A2Qg7gwg4g4IgCgD");
	this.shape_142.setTransform(190.725,134.25);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#006E91").ss(2.6,1).p("AgdB9QAdiGAehz");
	this.shape_143.setTransform(194.175,151.45);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#006E91").ss(2.6,1).p("AgmA4IBNhv");
	this.shape_144.setTransform(109.975,97.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#006E91").ss(2.6,1).p("AgjhAIBICB");
	this.shape_145.setTransform(109.5,110.175);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#006E91").ss(2.6,1).p("AgxBJQAthLA1hG");
	this.shape_146.setTransform(107.8,124.175);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#006E91").ss(2.6,1).p("Agug9QAfApA+BS");
	this.shape_147.setTransform(107.575,138.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#006E91").ss(2.6,1).p("Ag3BAQAJgRAYgbIBOhT");
	this.shape_148.setTransform(106.725,151.225);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#006E91").ss(2.6,1).p("Ag6hbIAGAQQASAqAgAtQASAbArA1");
	this.shape_149.setTransform(106.4,165.25);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#006E91").ss(2.6,1).p("AhJhEIAEAEQBBBBBDA/IAFAEQADABADgB");
	this.shape_150.setTransform(167.575,161.8125);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#006E91").ss(2.6,1).p("Ag2BwQAwhwA4hmIAFgJ");
	this.shape_151.setTransform(169.375,178.95);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#006E91").ss(2.6,1).p("AhQhcIChC5");
	this.shape_152.setTransform(155.725,181.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#006E91").ss(2.6,1).p("ABDhXIhXBvQggApgOAX");
	this.shape_153.setTransform(154.75,162.925);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#006E91").ss(2.6,1).p("Ag5BaIAFgHQAvhUA9hWIACgC");
	this.shape_154.setTransform(167.3,146.175);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#006E91").ss(2.6,1).p("AhKhCIAEAGQA9BLBUA0");
	this.shape_155.setTransform(153.525,148);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#006E91").ss(2.6,1).p("AhJhHIABAAQBABKBLA/IAHAG");
	this.shape_156.setTransform(166.175,130.825);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#006E91").ss(2.6,1).p("AhBBfIADgFQAuhVA+hQQAGgJAJgHIAFgE");
	this.shape_157.setTransform(152.775,132.85);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#006E91").ss(2.6,1).p("AhMhHIB4BtQAXAVAKAN");
	this.shape_158.setTransform(163.2,98.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#006E91").ss(2.6,1).p("Ag4BYIArg7QAbgnAIgQQAHgNAJgTQAHgOAMgP");
	this.shape_159.setTransform(165.225,114.225);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#006E91").ss(2.6,1).p("AhFhEQBABKBMA/");
	this.shape_160.setTransform(151.55,116.35);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#006E91").ss(2.6,1).p("AA5hZIgFAHQg/BRgtBb");
	this.shape_161.setTransform(150.675,99.85);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#006E91").ss(2.6,1).p("AhJhMIAFADQATAOAhAiIBGBHQAOAPAEAIIACAH");
	this.shape_162.setTransform(159.075,64.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#006E91").ss(2.6,1).p("Ag0BkIAohHQAthQAPgjIAFgN");
	this.shape_163.setTransform(161.45,80.275);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#006E91").ss(2.6,1).p("AhCg/IABADQADAKAKAKQABACARAPIAhAiQAdAfAnAW");
	this.shape_164.setTransform(149,84.275);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#006E91").ss(2.6,1).p("AAzhqIgFAHQhABfggBv");
	this.shape_165.setTransform(147.475,67.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#006E91").ss(2.6,1).p("AgwBWQAwhLAohNIAJgT");
	this.shape_166.setTransform(157.5,48.275);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#006E91").ss(2.6,1).p("Ag7g5IACACQA5A7A8A2");
	this.shape_167.setTransform(146.025,51.675);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#006E91").ss(2.6,1).p("Ag+hGQBJA4AuBMIAGAK");
	this.shape_168.setTransform(155.8,35.35);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#006E91").ss(2.6,1).p("AguBaQABgKAJgYQAkhKAlg9QAFgIAFgB");
	this.shape_169.setTransform(144.875,37.15);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#006E91").ss(2.6,1).p("Ag7hrQgEAEAEAIQA+BuA2BVIAFAI");
	this.shape_170.setTransform(65.1809,162);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#006E91").ss(2.6,1).p("AhJBPQBChTBOhGIADgD");
	this.shape_171.setTransform(63.775,179.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#006E91").ss(2.6,1).p("Ag2hdQAqA3ATAgQAgAyAOAtQABACABAD");
	this.shape_172.setTransform(50.975,178.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#006E91").ss(2.6,1).p("ABBhHIh6B/QgJAJACAH");
	this.shape_173.setTransform(52.9568,157.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#006E91").ss(2.6,1).p("Ag1hdIBrC7");
	this.shape_174.setTransform(68.675,127.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#006E91").ss(2.6,1).p("AhPBLICfiV");
	this.shape_175.setTransform(67.35,143.825);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#006E91").ss(2.6,1).p("AgvhjIAFAMQAqBiAuBVIACAE");
	this.shape_176.setTransform(54.475,141.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#006E91").ss(2.6,1).p("ABFhIIgGAFQhCA/g/BMIgCAB");
	this.shape_177.setTransform(56.925,125.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#006E91").ss(2.6,1).p("AAuBVIhaimIAAAAIgBgD");
	this.shape_178.setTransform(73.9,95.575);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#006E91").ss(2.6,1).p("AhHBEQBGhEBJhD");
	this.shape_179.setTransform(71.325,110.85);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#006E91").ss(2.6,1).p("AgwhUIBhCo");
	this.shape_180.setTransform(58.85,109.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#006E91").ss(2.6,1).p("ABNg/Qg9AzhVBKQgEADgBgBIgBAAQgCgBACgC");
	this.shape_181.setTransform(61.5929,93.8792);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#006E91").ss(2.6,1).p("AAAABIABgB");
	this.shape_182.setTransform(69.2,87.55);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#006E91").ss(2.6,1).p("AhTBZICnix");
	this.shape_183.setTransform(77.875,78.425);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#006E91").ss(2.6,1).p("AgehmIABAIQARBlAqBeIABAC");
	this.shape_184.setTransform(66.3,77.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#006E91").ss(2.6,1).p("AglhdIABAFQAHAhAYAxQAeA8AGATIAHAV");
	this.shape_185.setTransform(81.65,63.825);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#006E91").ss(2.6,1).p("AhLBDIAFgFQBEhABOhA");
	this.shape_186.setTransform(70.425,61.65);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#006E91").ss(2.6,1).p("AhPA+QBIg1BRhAIAHgG");
	this.shape_187.setTransform(86.75,47.175);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#006E91").ss(2.6,1).p("AgRhRIADAPQASBWAPA+");
	this.shape_188.setTransform(76.6,44.825);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#006E91").ss(2.6,1).p("AgchLQAiBFAVBMIACAG");
	this.shape_189.setTransform(91.375,34.525);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#006E91").ss(2.6,1).p("AhIA/IAHgJQA4hGBNgrIAFgD");
	this.shape_190.setTransform(81.675,32.775);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#006E91").s().p("AgnCGQgEACgDgIQgnhggHhmIABgCQAvgsA9gYIAIAFQAaBbAnBWIADAFQhFAmg5A4g");
	this.shape_191.setTransform(12.3,147.75);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#006E91").s().p("AgrCaIgciKQgDgeADgZIAHABQAng6A+g8IADgBIAAABIgBAAIAFADQAPA8AGAgQAJA0AAApIgGAEQg2A1g0BAIgDAFQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_192.setTransform(18.632,117.45);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#006E91").s().p("AhCCEQAHhdAahZIAEgLIBdhJIADAAIgEAmQgJBRgLAlIACACQgxA5g2A2g");
	this.shape_193.setTransform(29.1,87.225);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#006E91").s().p("AgSC3QgPgtgfgzQgUgggqg3IAJgqQgCgGAKgKIB2h8IABAEIgBAAQgEAEAFAIQA/BvA2BUQhPBGhCBUg");
	this.shape_194.setTransform(58.2,169.075);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#006E91").s().p("AgcCjIgBAAIgBgEQgvhVgqhhQA/hMBDhAIAAAAIBsC7IABABIiTCLg");
	this.shape_195.setTransform(62.2,134.875);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#006E91").s().p("AhqggQBEhCBOhAQAFAhAZAxQAeA+AHASIiYChIgBAAIAAACQgrhegRhlg");
	this.shape_196.setTransform(74.05,71.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#006E91").s().p("AgYCXIhiioIABgEQACAAAEgCQBWhLA8gzIABgCIAAAAIBbCnQhKBDhFBEg");
	this.shape_197.setTransform(66.225,102.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#006E91").s().p("Ag8CBQgPg+gThVQA4hHBNgrIAAABQAjBFAVBNQhRBAhIA2g");
	this.shape_198.setTransform(84.6,40.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#006E91").s().p("AgeBQIhBhiIAAgBIByhEIACAAQAIARAeAeQAcAcAIATIgBABIACAEQhDAjg0Apg");
	this.shape_199.setTransform(80.625,12.925);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#006E91").s().p("Ah9gZIABgBIAHgBQBOgjBDghQA4ApArAzIiQBiIgJABQg8gzgnhGg");
	this.shape_200.setTransform(102.9,16.75);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#006E91").s().p("AiDgNIAFgFQA4guBAgkIAHgFQA+AsBBAgIACABIgBACIADADIAAAAIgEADQgyA9hAAvQgLAIABAIIgIACQhEg+g7g5g");
	this.shape_201.setTransform(129.075,17.675);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#006E91").s().p("AhpAgQAAgKAKgWQAkhMAlg8QAFgIAFgCQBJA5AtBNQgoBNgwBLIgBAAIgFAHQg8g3g5g8g");
	this.shape_202.setTransform(150.825,42.85);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#006E91").s().p("Ag2BxIghgjIgTgQQgKgKgCgKQAghvBAhfIABgCQATAOAhAiIBGBIQAOAPAEAIQgOAhguBRIgpBHIgFAFQglgWgeggg");
	this.shape_203.setTransform(154.325,74.025);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#006E91").s().p("AhrABIgBAAIgDgCIABgCQACgEAJgIIBghTIBvBLIAEAFQgmA7gvA0IgVAGQhAgngxg7g");
	this.shape_204.setTransform(153.125,15.125);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#006E91").s().p("AAJCdQhLg/hBhLIAFgGQAshbBBhSIB0BqQAXAVAKANQgMAOgHAOIgPAfQgJAQgcApIgqA6IgIAHg");
	this.shape_205.setTransform(157.7,107.575);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#006E91").s().p("AiDAbQAuhUA/hRQAGgJAJgHQA/BKBMA/Qg9BVgwBVIgFgDIgFAFQhTg0g9hMg");
	this.shape_206.setTransform(159.675,139.175);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#006E91").s().p("AiFgHIAEgDQAOgXAggpIBPhlQBBBCBEBAIAFADQg6BmgvBwIgEADg");
	this.shape_207.setTransform(161.025,172.85);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#006E91").s().p("AgUBVIgfgMQgSgIgLgKIABgBQgJhbAEhhIAEgHIAAAAIAfAfQA3A0A1A/IgEAJIAfB8IgQAEQgzgpgngQg");
	this.shape_208.setTransform(197.3635,58.625);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#006E91").s().p("AhLArIACgIQgDhhAehdIACgCQAzBGBFA6IABAEIgHCzIgBgBIgBAEQhhhDgugvg");
	this.shape_209.setTransform(210.4,88.95);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#006E91").s().p("AAnCAQgxgcg6gYIABgCQAUh6APhPIACACIAAABIBSBSQAIAHAFABIAEAEIgBABIgbCMQgCAHABAFIgCABIACABIgBADg");
	this.shape_210.setTransform(220.525,117.475);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#006E91").s().p("Ag8BKIgBgBQAUhWAYhQIABgCIABABIAAAAQAlAWAlAbIADAAQgVBEgHBGIAAADQgxgFgtgRg");
	this.shape_211.setTransform(226.225,139.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#CF533B").ss(2.6).p("AielJQCvFACNFU");
	this.shape_212.setTransform(181.0059,57.9357);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#CF533B").ss(2.6).p("AAFMYQgNgwAGhFQAKhQADgoQAFgzgBhnQgElWgQqsQgDhvgHg3");
	this.shape_213.setTransform(128.4634,109.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#CF533B").ss(2.6).p("AgIMSQANkzADlBIABlOQABjRgChfQgDiqgKiG");
	this.shape_214.setTransform(119.5319,108.8771);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#CF533B").ss(2.6).p("AhrMJQgHsVDfr5");
	this.shape_215.setTransform(98.2385,107.7009);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#CF533B").ss(2.6).p("AjALqQgCgqAEg0QADghAJg+IAfjlQAcjIAShhQAgijAth9QAchRBCiOIB9kR");
	this.shape_216.setTransform(56.136,98.4212);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#CB645F").s().p("AEELBQgLAEgQgDQgWgEgLgOQgJgLgHgZQgShGgThhQgMg9gBgdQgIgSgSg5IgwiUIgviSQgbhRgZg9Ig5iHQgcglgbg5IgshkIgRgmQg3hcgWgxQgDgGACgFQADgFAFgCQABgOAMgCQAIgBAggOQAXgKANAGQAPgbAVgDQAHAAAEAGQAIAOgBAZIAIgDQAEgBABAEQAAABAAAAQAAABAAABQgBAAAAAAQgBABgBAAIgLAFIgCATQAFATAEAXIAAgCQAAgBAAgBQABAAAAAAQAAgBABAAQAAAAABAAQABAAABAAQAAAAABAAQAAAAABABQAAABAAAAIAbBvIAQAzIABACIAEAOQAGgBACAHIA9CnQAIAVATAwQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIAQAtQAPAeAEAKQAIAXgBAUIAKAgIABABQAWAmAWBAIAjBqIAaBGQAOAoAHAfQAoBkALBHIgBAEQAUBBALBLIAKAVQAHAPgLAMQgIAJgIAAQgFAAgEgDg");
	this.shape_217.setTransform(187.8256,90.9207);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#CB645F").s().p("AgRFhQgIgFADgIIABgDIgBgEIAAgSQgGgOgBgJQgDgUAGgSIADgGIgSkCIgEhKIgChKQgMhxgRhHQgCgJAIgCQAIgCADAIQAKAbADAjIAbCFQAOBMAFA7IAAARQALADACAKQAYBnAoDRQACAIgGAFQgFAFgHgBQgFAJgKAAQgRABgQgHIAAABQgBAFgGAAQgFAAgBgFIgEAFQgDADgEAAQgDAAgDgBg");
	this.shape_218.setTransform(185.331,143.2373);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#CB645F").s().p("AB+MbQgLgHgHgIQgQANgYABQgNABgKgKQgJgKAAgNQgDi+AEjKIgCgzQgCg8AEhOQADhSAIg6QgLg/AKiEIgBhIQgBi+ALhlQgNhAAJg9QgHgqgBgcIgNA9IgBADIgHAbQgCAIgGABIgIAoQgHA2gZBYQggBtgHAhQgiChgNCoQgBAHgHACIgFATIgCAfQgJB3gEBnQgBAHgHACQgBAtgFBcQgCAeABBDQADA+gMBOIgBALIgCADQgHASgcARQgdATgIAQQgEAHgJABQgJABgGgFIgCAAIgGAJIgDABIgCgCQgHgMAAgSIADggIACgZIABgFQgJhiAKhuQABgHACgCQgFgeAFgrQABgQAJg1QgDgsAHg/IANhkQAKhZAljHQAChfAniKQABgEAEAAQAQhLAKgpIApioIAShAQAEgoAMgOQAGgHAJgDIABgCQAAAAABAAQAAgBABAAQAAAAABAAQABgBAAAAQABAAAAAAQABAAABABQAAAAAAAAQABAAAAABQATgEAVAFQAWAEALAJQACgKAJABIAdAEQAJgEAGABQA1gSAfAJQAHADADACQALgGARgDQAKgCAHAFQAHAFAAAKQAFA9ABBeIABC6QAEAIAAAIIgBCQQAQBgAGCtQAJA8ACBXIABCVQADD7gTCYQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAEA2gCApQgBAHgFAGQgFAFgIAAIg7gBQgPAHgPAAQgTAAgSgKg");
	this.shape_219.setTransform(109.3709,108.5575);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#CB645F").s().p("Aj3LyQgNgKABgPQABhhAbiTIACgGQAIhaAUhPQACgGADgFQALhMAKgzIAXhxQABgZAKgjIAQg2QASg9Aeg2QAIgaAkhfQAPgoASgoQAIgWAIgPQAZgxAYgoIAlhPQAWgtASggQgFgTAKgeQAHgWANgVIADgEQAAgFAEgEQADgEAGACIAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAWAIIAAAAQALAAAKADQADgDAEAAQAFABACACIAFgCQAEgDAEADQAEADgBAFQgUBBgsA+QgyCmgPArQgoB1gvBRIgBACIgVBsIgJA+QgGAogHAYQgYC5gjCnQAAAXgFAlIgGA6IgUDlQgBANgKAJQgKAJgNgFQgtgPgzAVQgEACgFAAQgJAAgJgIg");
	this.shape_220.setTransform(53.8695,97.6445);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#F3DFC6").s().p("Ao2OuQgCgDgBgEQgRgDgPgNIgLgLQgGgIgFgDQgLgIgPgBIgcgBQgGAAgEgFQgMAJgKAEQgKADgGgHQgGgHABgKIADgUQgBgFABgEIACgJIAGgsQABgEACgDIABgHQhqgrhaAnIgHABQgTALgUAAQgHAIgKACQgLADgJgGQgZgQgMgXQg0gxgeg+QgGgDgEgFIgEgFIgBgBQgUgbgGgaQgPgnAFgmQAEghAVg1QgJgMAFgRQAviZBZiXIASgoQgHgLAFgNIAfg/QAYg9Akg2IABgFQAjhEAxhKIAcgrQAWg3AhgyIAhgvQAVgcAUgNIANgVQADgEAFgDQA4hOAsg3IAAgBIAEgEQAIgLAOAEIARgTIAIgGIACgKIAEhBQAFgrAMgWIACg/QAAgKAKgDQALgDAFAJIADAHIABgCQACgEAGgCQAFgBAEADQAKAFAJALQATAABGAKQA3AHAjgEQBVAfBsgPIA7APIADAAQAkgGA4gFIBcgIQBwgMB5gdQAMgCAKAHIAFgJQADgGAGABQAHgDAIAEQAIAEAAAIIADAvQAGAUAFAfIAGA0QACgCADAAQAEAAACADQAZAoAaAmQAsAzAbAlIApA7QASAFAQAVQAJAMAPAaQAoBAAjBEQApAsAhA6QAcAwAbBDIAKAbQADAAACADQAlBJAWA8IASAzQAJAdgBAWQAmBjAKBBIAFATQAHAUADASIABAFQAGATAPApQALAlgCAZQAAAEgEACQABASgOAVQgIAMgTAUQgQARgSANQgGAYgPAWQgQAVgVAMQgUAMgZgCQgbgCgQgPIgJgDIgsgGIgRgDQgKgCgHACQgDACgFgCIgpAMIgLADIgDAHQgUAigmATQAEAFABADQAJAdAEAfIAEALQADAIgDAHQgCAIgHAFQgHAGgJABQgRAIgOgKQgsAMgKAEIgXAKIgUAUQghAigkAUQgyAdgggOQhkAggfg1QgZAHglgEQgfgDgdgJQgQAHgKABQgLAFgNAEQghAMgdACQgkACgWgPQgoASgdgiQgdghAYgnIAAgMQghAEgRgQIgIACIhGATQgpALgeAFQghAWgVAQQhYBFhBATQg3gIgaAKQgSgHgPgPg");
	this.shape_221.setTransform(117.6507,97.1933);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.apron_03, new cjs.Rectangle(-1.3,-10.4,238.10000000000002,206.4), null);


(lib.apron_02 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AhphMQAbA7BCAmQAvAbBQAV");
	this.shape.setTransform(17.1734,121.5704);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6).p("AhrhWQAdA9BBArQA2AnBNAX");
	this.shape_1.setTransform(12.9461,153.0831);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6).p("AldACQAegnA6gJQA0gIA4ASQAdAJBFAfQA8AdAmAJQBDAQBFgQQAcgHA6gRQAzgMAiAO");
	this.shape_2.setTransform(66.225,119.8458);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6).p("AlwgjQAogYA3ACQAuACA0AUQAXAJBDAgQA4AbAjALQA0APA3gBQA3gCAygSQBGgZAHgCQAtgKAdAS");
	this.shape_3.setTransform(63.425,150.9739);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6).p("AipA0QARAHAXgCQAOgBAcgFQAzgKAUgFQAmgJAdgLQBNgcAqgx");
	this.shape_4.setTransform(118.025,138.9814);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.6).p("Ai1AnQA9AHBLgNQAtgIBXgYQAigIASgHQAcgMAPgS");
	this.shape_5.setTransform(118.175,169.894);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6).p("AhlA+QAXAEAfgJQBSgZBDhj");
	this.shape_6.setTransform(187.65,121.5936);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F1806").ss(2.6).p("AjKAvQA5gtBKgWQBGgWBMgBQArAAAaAHQAhAJAaAV");
	this.shape_7.setTransform(154.45,118.2667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6).p("AhYAtQAxgFAsgZQAsgYAdgo");
	this.shape_8.setTransform(193.2734,154.1383);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5F1806").ss(2.6).p("AjhArQBugzB0gWQBCgMAyACQA/AEAuAb");
	this.shape_9.setTransform(159.45,148.3928);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6).p("An+BpQAPg0AEgjQAEgmgFgyIB+AgQCqAfDXADQCvADBwgaQAygMCFgzQAIB6AOAz");
	this.shape_10.setTransform(99.8272,9.0716);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#5F1806").ss(2.6).p("AIFg1QgqAqidAdQh8AXiDAGQjVALiagZQiIgVhMgt");
	this.shape_11.setTransform(100.55,22.4295);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(2.6).p("AjusPQA+BaA8CJQBGCiA7DVQAlCEA7D/QA5D1BHFX");
	this.shape_12.setTransform(165.0755,100.6676);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5F1806").ss(2.6).p("ABgMlQAVjYgZkPQgPijgylBQgejMgXh1Qgli3gqiE");
	this.shape_13.setTransform(126.085,107.0162);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5F1806").ss(2.6).p("AgUNBIAgtIQALkTgDiKQgFjmgii0");
	this.shape_14.setTransform(100.7245,110.4767);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#5F1806").ss(2.6).p("AjYMZQANjOARicQAXjCAiikQBTmHCokfQAjg5AQgdQAdgyAPgn");
	this.shape_15.setTransform(45.65,103.4777);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5F1806").ss(2.6).p("AgIAvQAAgWAGgZQAIgdAEgR");
	this.shape_16.setTransform(36.25,184.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#5F1806").ss(2.6).p("AADA8QgIg4AFg1");
	this.shape_17.setTransform(83.1026,195.6137);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#5F1806").ss(2.6).p("AAEA1IgHhp");
	this.shape_18.setTransform(148.375,188.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#5F1806").ss(2.6).p("AAJBBQgGgWgEgoQgEgugCgV");
	this.shape_19.setTransform(172.9275,184.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#5F1806").ss(2.6).p("AH1upQA2AnAqAyQAVAZAyBHQDREsA/GFQAZCTATDjQAeFZADAgQgmAcgyAdQhjA8g9AIQgSACgOgFQgRgGAAgOQgBgVAngKQAogLAngSQAggPACgVQABgSgVgLQgRgJgYgBQjjgKjWBUQgTAIgFAJQgIAQAPAOQAPANATABQAMAAAZgDQAVgBANAHQAOAHAAAMQAAANgVALQhnA2iPAYQhZAOiqAKQhrAFgWg1IB6gtQAcgLAGgOQAGgMgHgOQgHgMgMgHQgRgIglACQhrALg2ADQhdAFhBgSQgfgIh7g7QhegshAADQgUABgPALQgRANAHAPQAEAIASAJIBIAhQAVAIgBANQgBAMgWAGQhTATiEhjQgpgfgpgnIghghQATnxB3mrQA5jQBHiEQBgixCJhi");
	this.shape_20.setTransform(101.801,112.0259);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#5F1806").ss(1.4).p("AgdAKQAMgKAQgFQAPgEAQAE");
	this.shape_21.setTransform(195.625,135.2639);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#5F1806").ss(1.4).p("AgtgQQAtAcA0AE");
	this.shape_22.setTransform(184.6013,137.6049);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#5F1806").ss(1.4).p("AAPgqIgdBV");
	this.shape_23.setTransform(183.425,140.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#5F1806").ss(1.4).p("AhBgoQgCAHALAJQA7ArBFAW");
	this.shape_24.setTransform(189.5451,149.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#5F1806").ss(1.4).p("AgQAfQAOgfAUga");
	this.shape_25.setTransform(192.3238,153.0667);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#5F1806").ss(1.4).p("AgdBAQAXhAAlg6");
	this.shape_26.setTransform(188.9674,151.3434);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#5F1806").ss(1.4).p("AglBJQAKgoAQghQAVgxAggS");
	this.shape_27.setTransform(187.2946,145.7628);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#5F1806").ss(1.4).p("AA1AnQggAHgXgHQgOgEgLgJQgMgKgFgMQgFgPAFgeQAggCAZAW");
	this.shape_28.setTransform(186.0297,132.5266);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#5F1806").ss(1.4).p("AgUhMQAUAjAIAUQAMAeAAAbQAAAPgEAd");
	this.shape_29.setTransform(195.2221,144.9742);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#5F1806").ss(1.4).p("AgIhOQgGgCgDALQgKAtAJAkQAMAsAgAX");
	this.shape_30.setTransform(193.8167,144.7277);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#5F1806").ss(1.4).p("AgNgzQAYAzACA7");
	this.shape_31.setTransform(191.3839,129.5647);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#5F1806").ss(1.4).p("AAeAyQgVgGgNgVQgKgQgIgbQgFgUAHgJ");
	this.shape_32.setTransform(189.0326,130.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#5F1806").ss(1.4).p("AgfgXQAJAUAUALQATANAWgB");
	this.shape_33.setTransform(195.933,138.4323);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#5F1806").ss(1.4).p("AgSBVQAYglAIgtQAIgsgKgr");
	this.shape_34.setTransform(195.2785,125.575);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#5F1806").ss(1.4).p("AgOBTQgBgCgBgHQgGg0AOgxQAJglAUgS");
	this.shape_35.setTransform(194.5159,125.875);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#5F1806").ss(1.4).p("AgvAnQAAgGAHgHQAogmA0ga");
	this.shape_36.setTransform(152.88,119.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#5F1806").ss(1.4).p("AhBBUQARg0AkgpQAigrAwga");
	this.shape_37.setTransform(142.2181,123.4876);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#5F1806").ss(1.4).p("AgtgeQArAeAzAg");
	this.shape_38.setTransform(156.3092,118.9226);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#5F1806").ss(1.4).p("AgcgaIAxAwQAEAEACgD");
	this.shape_39.setTransform(146.205,120.8521);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#5F1806").ss(1.4).p("AgUgcQARAeAaAX");
	this.shape_40.setTransform(138.9245,124.8126);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#5F1806").ss(1.4).p("AglgbQArATAcAn");
	this.shape_41.setTransform(152.1349,126.9507);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#5F1806").ss(1.4).p("AgygqQAvAxA5Ai");
	this.shape_42.setTransform(146.202,132.7379);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#5F1806").ss(1.4).p("AhIhDQAFAOASAXQA0A9BKAl");
	this.shape_43.setTransform(142.9832,139.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#5F1806").ss(1.4).p("AgjA2QAYg8Axgq");
	this.shape_44.setTransform(148.2017,143.6767);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#5F1806").ss(1.4).p("AhkCSQAehHAlhDQAeg3AbggQAlgtAtgR");
	this.shape_45.setTransform(147.7781,137.0632);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#5F1806").ss(1.4).p("AhABiQAUhMAshDQAaglAZgFIgEAE");
	this.shape_46.setTransform(143.0457,132.3857);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#5F1806").ss(1.4).p("AghBIQAmhGAchK");
	this.shape_47.setTransform(156.9443,138.0722);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#5F1806").ss(1.4).p("AAvhkQAAgEgGADQgaANgTAXQgTAWgLAcQgVA1ANA+QABADABAA");
	this.shape_48.setTransform(156.9015,134.6857);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#5F1806").ss(1.4).p("AgMArQANgSAGgWQAHgXgDgX");
	this.shape_49.setTransform(163.8433,119.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#5F1806").ss(1.4).p("AAVAtQgdgfgJgpQgCgGACgFQABgGAFAA");
	this.shape_50.setTransform(160.487,119.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#5F1806").ss(1.4).p("AAOhNQgEBQgYBK");
	this.shape_51.setTransform(165.8177,135.8906);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#5F1806").ss(1.4).p("AAGhdQgWAggDA4QgBATABAKQADAVAMATQAKATASAL");
	this.shape_52.setTransform(161.9434,134.225);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#5F1806").ss(1.4).p("Ag1hPQA9BLAtBW");
	this.shape_53.setTransform(175.4295,137.2894);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#5F1806").ss(1.4).p("Ag2hTQgOAZALAoQAOA1AmAZQALAIAbALQATAIALgF");
	this.shape_54.setTransform(173.458,136.1462);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#5F1806").ss(1.4).p("AgvAAQAegFARAAQAZAAARAM");
	this.shape_55.setTransform(172.9564,126.0521);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#5F1806").ss(1.4).p("AguAdQAKAIAVgIQAUgKARgRQARgRAIgW");
	this.shape_56.setTransform(170.175,122.2088);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#5F1806").ss(1.4).p("Ag2AZQATgaAhgMQAfgNAgAH");
	this.shape_57.setTransform(168.7998,120.3758);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#5F1806").ss(1.4).p("AgZAVQAYgZAfgN");
	this.shape_58.setTransform(9.5629,123.5899);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#5F1806").ss(1.4).p("AgRg4QAAAdAJAbQAJAcASAX");
	this.shape_59.setTransform(8.7191,122.594);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#5F1806").ss(1.4).p("AgNhOQACBQAZBL");
	this.shape_60.setTransform(6.0057,134.5538);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#5F1806").ss(1.4).p("AgeAoQAWguAqgc");
	this.shape_61.setTransform(5.9176,139.6484);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#5F1806").ss(1.4).p("AgyAQQANAGAQgBQAPAAANgHQAYgLAUga");
	this.shape_62.setTransform(9.975,146.4686);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#5F1806").ss(1.4).p("AApgnQgPgBgOAIQgNAHgKALQgRATgKAjQAEABACgD");
	this.shape_63.setTransform(8.2627,144.3609);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#5F1806").ss(1.4).p("AgQg2QAjA1gEA+");
	this.shape_64.setTransform(15.1565,128.9722);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#5F1806").ss(1.4).p("AABBTQgVglAEguQAEgsAaghIAFAH");
	this.shape_65.setTransform(12.338,130.8095);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#5F1806").ss(1.4).p("AgdAwQARgDANgNQANgMAFgRQACgHABgSQAAgQADgJ");
	this.shape_66.setTransform(16.0402,151.35);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#5F1806").ss(1.4).p("AAZg0QgRgDgKAPQgJAKgEATQgGAdAJAgQABADACAB");
	this.shape_67.setTransform(13.1454,150.3321);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#5F1806").ss(1.4).p("AADAHIgFgN");
	this.shape_68.setTransform(14.325,156.475);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#5F1806").ss(1.4).p("Agag/QgIAgANAdQAIARAPARQAJAKAWAT");
	this.shape_69.setTransform(21.7329,153.1774);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#5F1806").ss(1.4).p("AgbBZQAeglANgvQAOgugGgv");
	this.shape_70.setTransform(21.308,136.475);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#5F1806").ss(1.4).p("AgbBXQgGgyALgzQALg0AdgSQAJgEAEAC");
	this.shape_71.setTransform(18.9471,135.7167);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#5F1806").ss(1.4).p("AgqAIQAWAIAXgHQAYgGAQgR");
	this.shape_72.setTransform(23.325,145.4647);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#5F1806").ss(1.4).p("AgtA0QAhhBA+gi");
	this.shape_73.setTransform(23.2941,140.2075);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#5F1806").ss(2.3).p("AhliUQAOA4AMAjQARAyAXAjQAaArAkAdQAnAfAsAK");
	this.shape_74.setTransform(14.9219,135.6807);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#5F1806").ss(2.3).p("AhTBdQA5gfAqgyQArgyAUg9");
	this.shape_75.setTransform(190.7471,135.1885);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#5F1806").ss(2.3).p("AjXAtQAzhDBAgbQAkgPAlgBQAngBAiAOQAgAOA1AsQA1AvAfAN");
	this.shape_76.setTransform(157.25,128.843);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#5F1806").ss(1.4).p("AAzBMQglgegZgoQgagogKgu");
	this.shape_77.setTransform(107.5414,154.1471);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#5F1806").ss(1.4).p("AgpApQAcgiAcgbQAPgQAMgB");
	this.shape_78.setTransform(105.075,149.8498);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#5F1806").ss(1.4).p("AggAjQAbgqApgY");
	this.shape_79.setTransform(107.0221,157.2102);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#5F1806").ss(1.4).p("AhjBBQBvgxBWhS");
	this.shape_80.setTransform(109.9297,166.4239);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#5F1806").ss(1.4).p("AgZgMQAaARAeAG");
	this.shape_81.setTransform(115.973,163.7579);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#5F1806").ss(1.4).p("Ahkg2QAyAtArAZQA2AfA0AG");
	this.shape_82.setTransform(111.2409,165.6399);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#5F1806").ss(1.4).p("Ag5ggQAUAfAhAQQAhARAkgC");
	this.shape_83.setTransform(105.9694,169.6936);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#5F1806").ss(1.4).p("AgXAeQAUgHAMgTQAMgSgDgV");
	this.shape_84.setTransform(123.9634,167.7336);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#5F1806").ss(1.4).p("AAGg6QgPAmgBAUQgBARAGAOQAFAQAMAIQABABACgB");
	this.shape_85.setTransform(119.7929,165.2475);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#5F1806").ss(1.4).p("AguhDQgKAVAGAjQAEATAIARQAOAZAbALQAcAMAbgI");
	this.shape_86.setTransform(114.5663,151.898);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#5F1806").ss(1.4).p("AA/A+QgkgvgWgVQgigkgkgQ");
	this.shape_87.setTransform(116.1587,150.2128);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#5F1806").ss(1.4).p("AgihAQAaAXATAdQAeArgLAi");
	this.shape_88.setTransform(130.7284,160.875);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#5F1806").ss(1.4).p("Ag0gyQgBAqAlAfQAQAOARAFQAVAGAQgI");
	this.shape_89.setTransform(128.1497,162.4494);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#5F1806").ss(1.4).p("AAYA5QgBghgMgkQgPgpgagD");
	this.shape_90.setTransform(124.2165,147.725);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#5F1806").ss(1.4).p("AAQBNQgKgEgHgRQgOgkAGg1QACgfAMgM");
	this.shape_91.setTransform(120.6274,148.525);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#5F1806").ss(1.4).p("AgtgPQAOAUAdAGQAaAGAWgO");
	this.shape_92.setTransform(131.45,155.2569);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#5F1806").ss(1.4).p("AglBNQAsgWASgtQASgtgSgu");
	this.shape_93.setTransform(131.0291,143.9506);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#5F1806").ss(1.4).p("AgcBXQgGgTAFgaQANhJAyg3");
	this.shape_94.setTransform(129.9554,144.55);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#5F1806").ss(2.3).p("AixAtQAcAZAoAGQAmAGAngMQA8gTBAhBQAfggAIgHQAYgUAXgE");
	this.shape_95.setTransform(118.2,154.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#5F1806").ss(1.4).p("AgigWQgBABAAABQAGAWAQATIAFADQABABAEgCQAPgHALgPQALgOACgR");
	this.shape_96.setTransform(72.4188,154.0154);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#5F1806").ss(1.4).p("AgcALQAGgZAWgSQAAgCADAAQABAAACACQANAPAGASQAGAUgEAT");
	this.shape_97.setTransform(72.5681,128.6618);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#5F1806").ss(1.4).p("AgmAVQAlgdAtgL");
	this.shape_98.setTransform(60.0771,125.3186);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#5F1806").ss(1.4).p("AgoAnQALgXAagTQAPgNAhgT");
	this.shape_99.setTransform(33.2996,127.5782);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#5F1806").ss(1.4).p("AhSh6QBrBrA4CM");
	this.shape_100.setTransform(57.9542,128.9036);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#5F1806").ss(1.4).p("AhGgqQABgDAGACQAlAPASAJQAeANARAMQAaAUAGAY");
	this.shape_101.setTransform(44.025,121.3812);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#5F1806").ss(1.4).p("Ag0gcQAlAMATALQAdAPAPAW");
	this.shape_102.setTransform(36.8157,124.0397);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#5F1806").ss(1.4).p("AgpAVQAnggAygH");
	this.shape_103.setTransform(54.8721,122.5672);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#5F1806").ss(1.4).p("AhMBQQADgTARgZQA1hKBTgp");
	this.shape_104.setTransform(41.5513,124.375);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#5F1806").ss(1.4).p("Ag6iMQA3BPAVA9QAMAjATBJIAIAj");
	this.shape_105.setTransform(56.3014,139.6097);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#5F1806").ss(1.4).p("Ag8h1QBPBvAoB9");
	this.shape_106.setTransform(47.9665,138.7503);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#5F1806").ss(1.4).p("Aghg7QAlA5AdBC");
	this.shape_107.setTransform(37.8834,138.564);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#5F1806").ss(1.4).p("AhZAfQA+glBHgTQAdgHARAE");
	this.shape_108.setTransform(56.7,144.3133);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#5F1806").ss(1.4).p("AhwA3QBEgxAmgTQA8ghA4gH");
	this.shape_109.setTransform(48.9218,139.36);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#5F1806").ss(1.4).p("Ah/BbQArhFBGguQBEgvBQgQ");
	this.shape_110.setTransform(41.2412,136.5617);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#5F1806").ss(1.4).p("AAGg6QgQAEgOAUQgdAoAGAyQAggKAZgXQAZgWAOge");
	this.shape_111.setTransform(67.5413,149.0603);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#5F1806").ss(1.4).p("AgBBdQgQgSgLgpQgNgsgCgcQgEgqAOgeQAFABAGAIQAhAwASA4QARA6gBA6");
	this.shape_112.setTransform(68.4699,134.3857);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#5F1806").ss(1.4).p("AhZgkQAHAZAVASQAUATAaAEQASAEAigFQAmgGAPAB");
	this.shape_113.setTransform(81.525,150.1044);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#5F1806").ss(1.4).p("Agrg0QA3AsAdBB");
	this.shape_114.setTransform(94.9588,145.6669);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#5F1806").ss(1.4).p("AhagdQAHAXAYAOQAVAOAcACQATACAfgFQArgGAIAA");
	this.shape_115.setTransform(90.625,149.3004);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#5F1806").ss(1.4).p("AgwgEQAHAKAPADQANACAPgDQAXgFAXgN");
	this.shape_116.setTransform(95.5,140.7252);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#5F1806").ss(1.4).p("AgdAlQAGgXASgSQAQgTAYgI");
	this.shape_117.setTransform(96.8628,125.8933);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#5F1806").ss(1.4).p("AgNBRQAXg1ADg5QACgigNgR");
	this.shape_118.setTransform(92.42,130.85);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#5F1806").ss(1.4).p("Ag6BQQAfhaBLg9QAJgHADAG");
	this.shape_119.setTransform(87.05,129.6129);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#5F1806").ss(1.4).p("AgyBkQAzgXAYhBQAKgYAFghQADgUADgo");
	this.shape_120.setTransform(78.7034,135.7949);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#5F1806").ss(1.4).p("AgzBtQgGgvANguQANgtAeglQAbgiAcgB");
	this.shape_121.setTransform(78.5182,134.9911);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#5F1806").ss(2.3).p("AlyA8QAhhIA+gzQAkgdAmgLQAsgMAjARQAVAKAXAbQANAQAcAmQAaAjAQARQA3A+A8ACQAxABAxglQASgOAUgWQALgLAYgcQAUgYAPgLQAXgRAWAB");
	this.shape_122.setTransform(64.9,136.0131);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FBDCB0").s().p("AglCcIgPicQgJhYgKhDQABgCAEAAQADAAABADIABAIQAJgDAIAFQATAKALAKQAFgGAGAGIASAQQAJgCAHAEQAIAEACAJIASBXQAJAyACAkQABALgJAGQAHAYADAUQABAHgDAEQgEAFgGAAQgYAAgWgLIgEgCQgOAAgQAFQAAAHgGACIgEAAQgEAAgDgCgAgUB8IAJgCQgGgKgDgNIgBgBg");
	this.shape_123.setTransform(172.3375,128.5364);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FBDCB0").s().p("AgSCeQgMgGABgMIABgLIgBgLIgBgTIAAgFQgBgWABgcIgDgoIgCgXQgNgZABgoQgIgZAIgOQAFgMAbgVQAKgJALAIQADgCAEABQAEABAAAEQAJAsgCAVQAIAgAFAuIAJBMIAGAoQACAbgKAMQgGAIgOABQgQABgGAEQgEADgFAAQgFAAgGgEg");
	this.shape_124.setTransform(139.7936,135.2182);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FBDCB0").s().p("AhMCkQAHiAAJhlIAPhUIARAEQAKgJARgBIAFgEQAIgDAIABIAIACIAHgDQAOgHAOAIQAOAHAAAQQgDCPgVBuQgCAJgIAGQgIAGgJAAQgdAAgfAQIgTAKQgGAEgHAAQgFAAgFgCg");
	this.shape_125.setTransform(93.2758,137.7731);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FBDCB0").s().p("Ag9CYQgJgHADgLQAIgfAHgoQABgdAHgcIACgNIAAgXQAAgIAEgGIADgXQAEgYAIgRQALgZASgCQAOgCAIAIIAHgHQAFgGAIAAIADgIQADgHAHACQAHACgCAHIgDAJQAGAGAAAIQgIBkgRCeQgCAQgQACQgQADgEgOQgLAFgSgDIgSAKQgFACgEAAQgGAAgFgEg");
	this.shape_126.setTransform(35.0894,129.7238);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FBDCB0").s().p("AhDAsQgEgSgBgXIABgqQABgJAJgDQAJgDAFAHQAFgKAMgBQAMgBAIAHIAZAAQAbgBAOAGQARAHAAASQgBAQgNAMIgMAJQgXAVgeAKQgMADgHgHQgDAQgRABIgDAAQgQAAgDgPg");
	this.shape_127.setTransform(180.6757,182.5004);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FBDCB0").s().p("AAcAkQgFgDgDgFIgBAAQgJAJgMAAQgIgBgGgDIgJgCQgIAGgHgCQgOgDgBgPQAAgOAKgIIABAAQABgHADgFQAHgJALgCQALgCAIAIIABAAQAGgHAKADQAGgOAPACQAPABgBAQIgBAJIAAAGIADAGQADAIAAAHQADAHgCAEIgBACQgDAIgIADIgFAAQgFAAgFgDg");
	this.shape_128.setTransform(143.0638,186.2711);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FBDCB0").s().p("Ag4A0QgJgBgDgJQgKghAJgjQACgHAGgCQAFgCAGADIACgDQAJgOARAEQAHgEAJADQAHADAEAHQAIgGAJgEQATgIAQANQARAMgIATQAGABACAGQACAFgFAEQgDAEgGACQgGACgMABQgFAFgKACQgFADgDABQgGABgFAAIgiAUQgIAGgJgDQgGAEgGAAIgDAAg");
	this.shape_129.setTransform(90.7431,194.2994);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FBDCB0").s().p("AAcAoQgKAAgCgJQgGgCgDgEIgHgDQgDAEgGgBQgFgBgDgEQgNACgNgRIgEgFQgHgFgCgJQgCgHAFgFQAGgFAHACIAFgFQAGgEAHAFQACgCADAAQAEgFAGABQAGABADAFQAEgEAGAAQAFABAEAEQAEgGAKABQAJACACAIQAGAAADAEQAEAFgCAHIgQAqQgDAJgJAAIgBAAg");
	this.shape_130.setTransform(30.7714,182.4102);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F9EFE5").s().p("Ag7EpQg6AKghgOQgEgCgEgFQgVgDgDgVIgKhfQAAgHAEgHIAAgOQgzAQgygLIgKgCQgjAFglgHQgHADgIgBQgbgGgegJQgngJgogRIgBAAIgHgDQgMgGgDgKIgEgCQgGgDgFgIQgGAAgDgBIgHgDIgugWIgagMQgLAxgIAeQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQABAVgRALQgQAMgRgFIgHgCQgLAHgOgDQgOgDgIgMQgLACgLgFQgKgFgHgJQhCgkgjgZQg1glgigrQgQgVgEgWQgDgTAEgdIAQiaQAAgEAEgCIgDgLQgBgGAGgDQAFgEAFAFQAmApAXAUQAjAeAkASQATAJAdAGIAwAJQAGgkABgoQgIgLAEgOQADgLAJgLQApgtBeAmQASACASALQAxAEBKAkQBmAzAQAGIAPgCIAqgIQAYgEARAAQAjABAigLQAMgEA1gVQAGgCAGABQAVgKAUAFQAWAEAHAVQAGATgEAhQgDASgHAiQgEAYgFAUIgCA8IAGgBQAFgCAFAAQAPgDATgCQANgEAWgCQARgCAOABQBFgLAigHQBDgNAzgXQAbgNARgFIAAgCQgGguAAgSQgBglALgaQACgGAIACQACgJAEgGQAEgFAIABQASgNAbgFIAWgIQAFgKAMgEQAVgGAdgEQALgEAKAFIAKgBQAhgSAcgFIABAAQAlgBAzADIASACQAmAHANAAQAFAGAFAJIAEACQADgFAFAAQAFAAACAFQAWAvAUBJQASgFAXgMQANgHANAKIAHgFQAegYAGgDQAFgIAHgFQAGgEAGAFIADgNQADgIAJABQAIABAAAJIACBCIAAAAQAIAMADAVIACAkQABALgBAKIAEAsIADArQAJAYgXAQIg3ApQghAZgZAMQgoATgTABQgxAcgjAEQgOACgIgPQgOgVALgXIgBgCQgOg9ABgfIgBgLIg8ACQgxADgyAKIhOAUIgJADIgDBTQgBAHgFAEIgDAGQALAFADAMQADAMgJAIQgXASgjAPQgXAJgpANIgmALQgXAGgRgBQggAUgogDIAEADIg0gBQgnAJgfAFQgtAIgTABIgEAAQgjAAgVgNgAgeAzQAAgFADgEIAGgEQgHgGgDgHIgBAAIACAaIAAAAg");
	this.shape_131.setTransform(101.7949,175.2241);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#F9EFE5").s().p("AAKLOQgJgCgBgIIgBgiQgDgFAAgGQgCgQADgQQgChCAKg4IgCgTQg8gQgmACQgTABgeAHQgjAJgNABQgSASgpgEQgRgCgugNQg9gPgcgQIgUgHQg9gXgdgWIgEgBQg0AAg2gIQgdAIgkARQgPANgMADIgOA/IgCADIgBAGQAJAEAFADQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQgJAFgPAAIgJgBIgMgCQgJAEgJgFIgEgDQgKADgOgEQgWgHgNgTQgHgDgDgDIhHhCIgNgNQgHgIgDgIQgDgMAFgUIAKgfIAJgiQAFgVAHgXQAQhjAOg9QAUhXAchCQARg2ATgwQBgjsCuiNIAEgCQAGg6AShJIABgEIgOgHQgEgCAAgGQABgGAFgBQAKgDAJAAQABgCAEgBQADgDAFABQAEAAADAEQAbABAwAMQA1AOAUACIA/AIQBigFAyAGIA3AIIA3AKQAGgGAJgCQBBgPA6ABQARgCAKAMQAUgIATAAIAcADIBngYQA7gOAqgTQAMgFAHAKQADgCADAAIABAAIABABQADADAAAEIACAEIALBHQAJAHAEALIABAAQAGAbAGAgQASALATAUQALANATAaQBQA8A4BxQASAmAoBMQAjBEASAwIALAbIgEgVQAAgEADgBQABAAABAAQAAAAABABQAAAAABABQAAAAAAABQAJAeAWA9IAHAYQAdAvAHA2QAIAVAKAjIAPA3QAMAoACAIQAFAZgFAYIgCACIgDgBIgCgCQAFAVAAAPIgBAHIABAFQAAASgWAVQgOAXgiAaQgPANgKACQgpAggdgCQgEAHgJgBQgIAAgDgJQgGgTgFgVIAAAAQgLghgFgkQgUgDgegHIgigIIgEAAQhDgCghAAQgoADgmAJQgYANgoASIhBAdIgZANIgCABIABAJQAIAsAFAsIAAAAQAAAJgHAIQgFAIgGAEQgqAfhAATQgiASgqALQgoALgggBQgNAHgOgFIgDALQgCAIgGAAIgCAAg");
	this.shape_132.setTransform(101.9938,73.9024);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.apron_02, new cjs.Rectangle(-1.2,-2.3,206.1,209.70000000000002), null);


(lib.apron_01 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AA1smQg0BtgFC0QAAAIgCCPQgCBcgGA8QgBAHgXCdQgOBiACBBQACAlAHAzQAEAdAJA7QAoEHgTEL");
	this.shape.setTransform(37.946,115.3089);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6).p("AQGh+QgZAsgrAdQgrAcgyAFQgiADhOgLQhIgLgnAHQggAGgmATQgWALgrAZQiYBVizAPQiyAPijg6Qg4gWgcgLQgygTgjgIQhkgVh+AfQgyAPgaAGQgsAKghAAQhEgBhJgtQgwgdhJhCQgogkgSgV");
	this.shape_1.setTransform(102.975,190.8281);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FBC85B").ss(2.6).p("ABqtSQhoCegpCrQgiCNACC6QAAA0gRB6QgRBzACA5QACAlAHAzQAEAdAJA7QApEHgUEL");
	this.shape_2.setTransform(45.6097,111.5467);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6).p("AoNgiQAxASBAAKQAmAGBOAGIDkAVQBMAHAuAAQATAAA/gDQCCgIBDgIQBtgOBTgZ");
	this.shape_3.setTransform(99.95,26.5898);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#006E91").ss(2.6).p("Ai8sYQAsCHAXBgQAdB7AIByQACAbAdBnQAGAZAVAoQAMAWAVAoQArBQAaBaQAQA9AWB5QAyEWAZDp");
	this.shape_4.setTransform(154.7318,106.9192);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#006E91").ss(2.6).p("AA6s9Qg5B6gaCrQgRBtgMDGQgFBdAFAuQAEAfAKApQAFAWAMAvQAwDBAADJQABDJguDC");
	this.shape_5.setTransform(79.2151,111.988);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CB645F").ss(2.2).p("AgJtMQgrDJAhE2QAJBWAVCsQATCZADBpQAFCOgUC+QgJBhggDq");
	this.shape_6.setTransform(90.9587,114.2608);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F1806").ss(2.6).p("APTOwQARmGiFnyQg4jOhEiqQhCilg6hQQhMhogZiFQgNhCADguQgmAQhNAQQiZAfjBgCQjAgBi3glIiRgkQgCC0hJCmQgXAzgrBNQg4BkgOAbQhLCSg1DCQgkCBgsDlQg9E8gWC3");
	this.shape_7.setTransform(98.5463,92.8127);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6).p("AB/HrQAHj5hCkBQhEkNiBjH");
	this.shape_8.setTransform(192.6321,130.2943);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#006E91").ss(2.6).p("ADhMsQgJjMg1klQgnjZg4jnQhel/jIkh");
	this.shape_9.setTransform(172.3387,105.9146);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CB645F").ss(2.2).p("AjEsjQCqG/BZFaQByGzATF+");
	this.shape_10.setTransform(163.3109,107.0075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#407F74").ss(4.3).p("AjCsdQAVBABZDuQBPDSAaBcQAbBcAjCaQAgCOATBsQATBsAQCUQAJBVASCt");
	this.shape_11.setTransform(165.3446,106.5194);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FBC85B").ss(2.2).p("AjCseQBpFABREWQBkFVAaCXQA1EmAYDX");
	this.shape_12.setTransform(159.7277,108.5126);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#407F74").ss(4.3).p("AjDshQBsFGBPEQQBjFVAbCWQAyEYAaDv");
	this.shape_13.setTransform(162.1533,107.8848);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5F1806").ss(2.6).p("AC6MkQgfkfgdiRQgwjthYiqQgcg1gBgBQgPgfgJgZQgPgsgEhGQgDhOgFgnQgFgzgbhsQgqivgVhS");
	this.shape_14.setTransform(153.0714,107.855);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#5F1806").ss(2.6).p("AizsjIBTGEQAWBoAHA1QADAYAGAyQAFArAJAeQAJAdASAoQALAWAUAsQAZA5AUBIQAOAyARBUQA4EHAhD+");
	this.shape_15.setTransform(145.264,109.5006);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5F1806").ss(2.6).p("AiHtGQA+CiAUDNQAPCggKDbQgDA3AAAYQAAAsAGAiQAGAhAPApQAGATAUA2QCIFYgDEf");
	this.shape_16.setTransform(130.57,113.8261);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FBC85B").ss(2.2).p("Aijs3QAEAYAPArQAIAYARAqQAWA/ANBNQALA9AGBTQAGBLAACOQAEB8AiBUQAJAXAVAqQALAYAVApQAVApARA4QAGAVAUBQQAXBcANCRQAUDPAFAh");
	this.shape_17.setTransform(135.55,112.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#5F1806").ss(2.6).p("AijstQADAZALAgQAAABATA3QA0CSALCKQAGBLAACYQAECGAjBUQAJAYAPAfQAJATATAkQAvBeAaBoQAWBbAOCSQAUDNAFAj");
	this.shape_18.setTransform(137.45,110.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#5F1806").ss(2.6).p("AhatqQAPDkApDfQAEAaAKAyQAHAsADAgQAGA8gEDCQgECeAXBcQAIAgAYBCQAXA/AIAiQAUBTgECFQgFC0ACAn");
	this.shape_19.setTransform(120.0833,116.672);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#5F1806").ss(2.6).p("AhItoQBUEYAWEjQAMCYgFG1QgDFxAiDZ");
	this.shape_20.setTransform(109.8694,116.5156);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#006E91").ss(2.6).p("AgytoIAQFgQAHCZAIBcQAGBAAhDpQAaC3AEBzQADBzgNCiQgBARgZEC");
	this.shape_21.setTransform(100.7628,116.1824);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FBC85B").ss(2.2).p("AgJtRQgrDJAhE7QAJBXAVCuQATCbADBoQAFCSgRC7QgLCEgbDH");
	this.shape_22.setTransform(96.5647,114.9852);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#407F74").ss(4.3).p("AgJtJQgrDJAhE7QAJBXAVCvQATCaADBpQAFCRgQC8QgMCCgbDJ");
	this.shape_23.setTransform(93.4746,113.7591);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FBC85B").ss(2.2).p("AgJtMQgrDJAhE2QAJBWAVCsQATCZADBpQAFCRgRC7QgLCEgbDH");
	this.shape_24.setTransform(84.5647,114.4352);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#407F74").ss(4.3).p("AgJtEQgrDJAhE3QAKBWAVCsQASCZADBoQAFCSgQC7QgMCGgbDF");
	this.shape_25.setTransform(87.9869,113.2344);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#5F1806").ss(2.6).p("ABBs4QhZDngbD6QgbD6AoD1QAAACAOBRQAJAyAEAiQAMB3gQCIQgNBngkCW");
	this.shape_26.setTransform(70.6238,110.3667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#CA2C2B").ss(2.6).p("ABVs3QhMBwgnCXQgfB3gPCqQgLCFAJChQAGB0AVCyQAQCIADA1QALCsgdCc");
	this.shape_27.setTransform(64.6287,109.8521);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#5F1806").ss(2.6).p("ABfs8QiYDggcFMQgLCFAJChQAGByAVC0QAPB+AEA/QALCogdCg");
	this.shape_28.setTransform(60.5864,109.9522);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#CA2C2B").ss(2.6).p("ABmtLQiTDmgcDOQgTCLgFBgQgGCAAOBpQATCFAKCRQAGBVAKC9QAEBQgkCc");
	this.shape_29.setTransform(57.0983,110.8494);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#5F1806").ss(2.6).p("ABWtSQhzCzgkEFQgOBpgDCBQgCBXADCTQAHEqAPEXQADBIAAAiQgBA7gLAu");
	this.shape_30.setTransform(51.4616,111.4915);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#5F1806").ss(2.6).p("AhREpQgYitA/ipQAphtBciJ");
	this.shape_31.setTransform(46.1849,53.7032);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#5F1806").ss(2.6).p("AAJo9QAAAaAGBXQAFBRgCAgQgCAvgGAyQgEAegHBDQgKBdAHCIQAKC9AAAqQAAA+gHBOQgEAvgMBc");
	this.shape_32.setTransform(21.4977,134.345);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#5F1806").ss(2.6).p("ABFsFQguBpgXBUQgeBqgBBdQgBAaADA/QADA5gCAgQgCArgMBHQgPBVgDAbQgKBbAMCUQAPC8AAA1QAAA/gHBNQgFAygMBZ");
	this.shape_33.setTransform(33.3272,118.5774);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#5F1806").ss(2.6).p("ABeqGQggAxgZBUQgZBTABA6QAAAnADBOQACBFgIAwQgEAggNAxQgUBHgCAIQgSBKgPCCQgXDVgGDc");
	this.shape_34.setTransform(21.0713,122.9548);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#CA2C2B").ss(2.2).p("AAKBBQgKABgKgCQgRgEAAgOQgBg0ABgrQABgNARgCQAJgBAKACQARADABANQACA4gCAoQAAAPgSABg");
	this.shape_35.setTransform(97.0871,19.0476);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#CA2C2B").ss(2.2).p("AAJA/QgIAAgMgDQgRgFAAgMQABgtACgwQAAgNARABIATABQARADAAANQACAygCAtQgBAOgSgBg");
	this.shape_36.setTransform(91.3071,18.6248);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#CA2C2B").ss(2.2).p("AAIBBIgUgCQgRgDAAgOQACg0ADgsQACgNAQgBQAKAAAJADQAQAFAAANQAAA1gCAoQgCANgRACg");
	this.shape_37.setTransform(85.7,17.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#CA2C2B").ss(2.2).p("AAHBAQgKAAgKgEQgRgFAAgNQAAgXAHhFQACgMARgBQAJgBAKACQAQAEAAANQgDA+gCAiQgCAOgRgBg");
	this.shape_38.setTransform(80.025,17.4639);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#CA2C2B").ss(2.2).p("AAGA/QgIABgNgCQgSgEABgNQADgmAIg4QACgMARgBQAKAAAJADQAQAGAAAMQgDArgFAxQAAAHgGACQgEACgJABg");
	this.shape_39.setTransform(74.82,16.6393);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#CA2C2B").ss(2.2).p("AADBAQgLgBgKgEQgRgGACgOQAGg5AHghQADgLARgBQAKAAAJACQAQAEgBAOQgFAygGAsQgCAOgSgBg");
	this.shape_40.setTransform(69.4503,16.0033);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#CA2C2B").ss(2.2).p("AACA9IgVgEQgRgFACgOQAIgvAJgrQACgOAQAGIAUAGQAQAFgCAMQgFAegJA7QgCAOgRgFg");
	this.shape_41.setTransform(63.3256,14.5595);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#CA2C2B").ss(2.2).p("AgBBCQgKgBgKgFQgPgHACgOQAFgTAEgbQAFgfADgQQACgOARAEQAIABAMAGQAPAJgCANQgFAigLA4QgDANgRgCg");
	this.shape_42.setTransform(58.3436,12.9778);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#CA2C2B").ss(2.2).p("AgCA/QgMgDgHgGQgNgJACgNQAEgRACgXQACgbABgPQABgHAGgEQAGgDAIABQATADACABQAQAFgCAPQgFAzgLAqQgEAOgPgFg");
	this.shape_43.setTransform(53.5869,11.6065);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#CA2C2B").ss(2.2).p("AAXA6QgLAGgKABQgRACgEgMQgLgugDgxQgCgOARgGQAIgDAMgBQAIgBAGAEQAFAEABAHQACAiABAKQADAXAGAUQADAMgOAJg");
	this.shape_44.setTransform(146.278,13.2108);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#CA2C2B").ss(2.2).p("AAVA9QgKADgLACQgRADgCgOQgKgzgFguQgCgOASgFQAOgEAFAAQARgCACAOQAHA2AIApQADANgRAGg");
	this.shape_45.setTransform(140.6851,14.5873);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#CA2C2B").ss(2.2).p("AATBAQgLADgJAAQgSAAgDgNQgHg2gFgpQgBgOAQgGQAJgEAKgBQARgBACAOIAPBiQACANgRAGg");
	this.shape_46.setTransform(135.2041,15.6467);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#CA2C2B").ss(2.2).p("AAPA8IgUAFQgRACgCgNQgFgxgCguQgBgMAQgGQAJgEAJgBQAQgBACANQAKBCACAdQACANgTAEg");
	this.shape_47.setTransform(129.5799,16.7868);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#CA2C2B").ss(2.2).p("AAPA/QgLADgKAAQgRAAgCgOQgEglgBg6QAAgNAQgFQAKgEAJAAQARABABANQAFAxADAtQAAAOgQAGg");
	this.shape_48.setTransform(124.4257,17.725);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#CA2C2B").ss(2.2).p("AAMA+IgVADQgRADgBgQQgDg3ADgqQAAgNAQgEQAJgCAKAAQAPAAACANIAFBgQAAANgSAEg");
	this.shape_49.setTransform(119.1375,18.4924);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#CA2C2B").ss(2.2).p("AAYAzQAAAAADAIQgGAHgJAAIgUgBQgJAAgGgJQgDgEAAgFIgChfQAAgEADgFQAGgIAJAAIAVgBQAJAAAHAHQgDAHAAABg");
	this.shape_50.setTransform(107.6522,19);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#CA2C2B").ss(2.2).p("AAcgyIABBiQAAAPgSAEQgDABgRAAQgJABgFgJQgDgEAAgFQgCg4ABgtQAAgFADgEQAGgIAJAAQAGABAPAAQAQACAAAOg");
	this.shape_51.setTransform(112.8938,18.9803);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#CA2C2B").ss(2.2).p("AALA/IgVAAQgRgBAAgPQgBg/AAggQAAgNARgBQAGgBAOABQARACABANQACAvgBAwQAAAOgRABg");
	this.shape_52.setTransform(102.556,18.8667);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F3775F").s().p("AgOMpQgGAHgKgEQgLgDABgKQABgUACgPIAJhSIABgaQACgPAEgJIAKitQgBg6ACgeQACg1AQgeIgHi1IgEg6QgOiUgMiNQgSjIgHhkQgFhJAAg/IgChFQAAgoAIgbIABgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAGAaAAAqIABBEQADA4AIBQQARCeAPCEQASCeAOCDIAPCIIAEAdQAJAgABAwQABAbgBA1IABBjQgBA8gNAkQACBOgKBYIgEAqQgEAXgMALQgDAMgPABIgDAAIgCAAQgGAAgFgFg");
	this.shape_53.setTransform(99.725,121.0317);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F3775F").s().p("AgILnIgDgDQgIgCgEgJQgDgIAFgJQABgEAEgBQgBgWAFggQAGgjACgRIAKhQIgCh2QgChOAGhTQgEg2ABg3QgDgIgCgPIgGgYQgXhSgKgoQgQhHgGgqQgJhBAFgyIgBgUQgCgDAAgFIAAgGIAAgHQgBgEADgEIALiSIABgzQABgeAJgSQAJhaAbhfQABgDAEAAQAEABgBADIgKB3QAGAzAEBGIAIB6QACAiAKBOQACACABAEQAMAzAEAcQAIAvgDAjQAJAhACATQAEAfgFAVQAEAYABAcIACAbQAIAGAAALIAACGQgDBRgOA2QgFCTgGBJQgDApgPA+IgDAUQgDANgFAHQABAJgIAFQgDACgCAAQgEAAgEgEg");
	this.shape_54.setTransform(81.1708,121.926);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FBC85B").ss(2.2).p("ADIMrQgJgogCg+QgChFgCgiQgZk/h1mvQg1jKg4iaQg8iqhKiS");
	this.shape_55.setTransform(168.2703,108.8284);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F3775F").s().p("AC0MfQgKgBgGgGQgHgGAAgKQgEjTgpjyQggi/hAj+QgKgogKgiIgUhBQgIgDgDgKQg6jihtkAQgHgFgDgGIgKgWQgCgFAFgDQAEgDAEAFIAOAUIACAEQAqBHAdA5IATAiQALAVAEAPQAKAAAEAJQALAeAUA8QAVgCAFAUIAxDPQAhBqAXBoQAyC7AdCcQAcCaARCaIANBuQACBNgpAAIgEAAg");
	this.shape_56.setTransform(172.7108,108.8281);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F3775F").s().p("ACvMYQgRgSgFglQgDgrgDgSIgpk3QgHgCgCgHQgHgtgQhAIgchsQgVhXgRhCQgEgEgCgGQgOgpgVgpIgGgLIgCgCQgmg+gXhIQgDgNAJgJQgXhVgEhcQggibgvizQgCgJAIgCQAJgCADAIQAqCAApCbQAKgBAHAFQAIAFADAKIBLEsIABAHQALAlAKApQAJAEADAKQAmCGARBSIAKA5QAIACAAAHQAOBhAeDCIAeDVIAEAmQACAZAKAKQALALgMAMQgGAGgGAAQgGAAgFgGg");
	this.shape_57.setTransform(158.344,107.706);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CB645F").s().p("AgQM1QgVgIgbABQgNABgHgLQgHgKACgMIAgi/QABgFADgEIAFgnQABgMAKgFIADhRQgUhEAQgiQgLhLgLhpQgIgegLhKQAAgBAAAAQAAgBABAAQAAgBAAgBQABAAAAAAQgHgygChAQgDgegBgqQgDgGgBgHQgEhGAKhcQAFgoASh5QACgZAEgUIABgKIACgGIAMg2QAZh0Avh2QAGgPAPgBQAPgCAHALIAGgLQABgBAAAAQAAgBABAAQABAAAAAAQABAAABAAQAAAAABABQABAAAAAAQAAABAAAAQABABAAABIgBAMIABgCQACgFAFADQAFACgBAFIgSBAQgLAmgPAWIgnCpQgFBPgIBgIgDBFQgCArgFAaQACAwAIBhIAAABIAIBFIALBAQAKAjAGAeIAJAmQAFAWgBAPQAGAcABAWQAKAxACAPQAFAogGAZIAAAqIgGDTQAAAKgGAIQgIBbgOBGQgEASgUAAQgTAAgFgQg");
	this.shape_58.setTransform(74.3352,111.0857);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#CB645F").s().p("AAtNiQgIgBgIgEIgXACQgOACgMgIQgOgIABgQQAIhbAakZIAAgoQgCgWADgoQgEgGAAgIIgMjCQgLg1gMhyQgCgJAFgHQgIhDgMg8IgQhHQgDgOAHgKIAAgEQgMhDgCgTQgFg0AJggQgHgzAAhoQgLgogBg5QgBglAEg7QgKgpADgXQABgTARgFQAggJAPAkQAMAaAIAsIANBIQAOBDAQBbIADANQARBLAKBPQAEAHAAAJIACB8QAFBNAAAfQAIAqgGA3QAQA+gOBmQAGAGgBALIgPD3QAKAGAAAQQgBB5gEA8IgBADIABAdQAIAqADAdIAHAtQAEAbgCASIAEALQAJAJgBANQABAOgIAKQgIALgPAAg");
	this.shape_59.setTransform(106.4798,116.611);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FBC85B").ss(2.2).p("AijsyQADAXAQAnQAIAVAQAoQAoBvANCtQAGBLAFCYQAJCEAiBWQAJAXAQAgQAJATATAkQAUApARA4QAEAPAWBWQAWBbAOCSQAUDNAFAj");
	this.shape_60.setTransform(139.2,110.825);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#CA2C2B").ss(2.6).p("AhctnQAMC/AvEBQAUBtAFAuQAGA9gHDBQgFCeAXBcQAIAgAaBFQAYBCAJAiQAUBTgEB/QgFCvACAm");
	this.shape_61.setTransform(116.2083,117.9974);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#CA2C2B").ss(2.6).p("AhctnQAMDBAvD+QAVB1AEAnQAGA9gHDBQgFCeAXBcQAIAfAaBGQAYBBAJAjQAUBSgECAQgFCvACAm");
	this.shape_62.setTransform(124.0083,116.6479);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FBC85B").ss(2.6).p("Ag8NjQATkLgokHQgKg6gEgdQgHgzgBglQgDhCAPhhQARhuAGg3IAklLIAShIQAGgeAJgkQAShHARgZQAagoAsha");
	this.shape_63.setTransform(40.7906,110.9389);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F3775F").s().p("Ah5NUIgLgGIgCAAIgDAEQgGAGgGgGQgHgHAHgFIAAgBIABgFQgMgRAHgUIABgUQABgSAFgMQAAg6AOg/QgCgWAAgkIgCg2IgJjMQgKgGAAgMQgDhaABgvQABhSAQg1IABgBQAHg0AOhNIAAiVQgPgvAVhaQAIhJAUg6QACgaASg1QACgFAFABQAGAAgBAGIAAAGIAQgcQACgDAEABQAEACgBAEQgFAfgOBAQgOA/gFAhIAHgYQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAAAQANAqACBDIAFgnQAUiPAfhkQAriEBFhZIAAAAIABAAIACgDQAHgJAKAIQAKAIgGAKIgiA4QgjBCgYBlQgqCrgKBaQgGA2gBBJIAAB/QAAAfAFBIQABBBgPAlQAJA8AAA8IAAAyQgBAdgEAWQAHBJAEA7IAAADQAGAxACA3IAIBwQABALgGAIIAAAJIgCAHIACAPQACAMgGAIIAAACQADAXABAhQAAAPgLAJQgKAHgMgCQgRAMgkAKQgKADgLAAQgSAAgRgIg");
	this.shape_64.setTransform(43.2333,112.0711);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#006E91").ss(2.6).p("AA2oKQAEC0gLBDQgFAhgNAwIgWBRQgRBJgPCBQgXDVgGDd");
	this.shape_65.setTransform(15.3302,135.7781);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FBC85B").ss(2.6).p("ABVnCQgLBHguC6QghCIgKBZQgHA6ggCXQgcCBgCBR");
	this.shape_66.setTransform(11.4,134.325);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F3775F").s().p("AgqG8Qg0g5AOhMQADgKAJgCQgFhDADg7QABgQAPgGIAukOIAgisIANhOQAKgvAOgcQAFgJAJADQAIADABAJQACAdgJArQADCeg0BXIAAACIgNCPQgJBWgQA5QgIBKgBBLQAEAwALA5QAEARgPAJQgHAEgFAAQgIAAgHgHg");
	this.shape_67.setTransform(11.6372,140.5614);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CB645F").s().p("ADQLxQgPgVgCgoQAAgugCgVQgGhOgJhNQgIg8gKg/QgJgCgCgIQgbhjgEhnIABgEIgBgCQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgXgYgLgtQgKg0gGgYIgThaIgHgeQgzi7gyh9QhDikhah9QgEgFAFgGQAEgFAGABQADgDADAEIAVAaQACACAAAEQBNBkA6CJQAsBqArCcQAJABACAJIAYBcQAQA8AHAgIANAvQAIAeADAUQAJAVALAgQADADABAFQAlCdAUCjQALBSAGBcIAGBCQABAogNAWQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape_68.setTransform(173.7093,100.7058);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#CB645F").s().p("ABeEqQgJgQgEgaIgFgsQgDgVgCgWIgLgmQgLgPgIgaQgJgdgFgOQgOgmgKgVIAAgBQgLgLgJgXIgNgmIgEgJQgphPgGgQQgXg4AFgwQAAgEAFgBQAEgBACAFIASBAQAMAjAOAbIAeA4QAQAhALAYIArBcQAYA8gHAmQAQBHADAQIAHAlQAEAWgDAQQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_69.setTransform(155.5817,110.9725);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CB645F").s().p("AArHZQgKgFAAgLQAAgPACgOIgBgFIABhOQgHgGgCgJQgEgagBghQgEgUgCghIgCguQgMhygPhnQgmj9g5imQgCgHAHgDQAIgDADAGIAVA2QAIgBADAHQAuBxAbBUQAkBrASBfQAUBmALBhIALBgQAFA4gGAnIgBAEQAEAcgLAXQgMAZgaAPQgEADgFAAQgEAAgFgDg");
	this.shape_70.setTransform(193.6676,137.6151);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#CB645F").s().p("AAAFVQghgOgHgrQgCgMAChBQABh4ALhAQgDgdAGguIAJhIQANhvAbhpQABgEAFABQAFABgBAEIgEA5IABADQALAxAABKQABAqgCBTIAAB/IABAuQAAAbgIARQgDBnABAhQABANgLAFQgGADgFAAQgFAAgGgDg");
	this.shape_71.setTransform(16.8979,158.165);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F3775F").s().p("AAZNFQgOgJAEgPQAJgggGgvIgOhOQgKg/gPhBQgFgTgchfQgVhGgFgtQgchLgKgmIgIgeQgjhHgFhiQgEhTARheIgBgBQgEhdABg3QAChBgKhmQgIgMgEgVIgHgjQgMg3gEg9QAAgFAFAAQAFAAABAEIAPAuQABAAABAAQAAAAABAAQABAAAAABQABAAAAABIAKAaQgCgYAAgTIgFgNQgKgLgEgVIgEgjQgHg0AGgrQABgFAFAAQAFABABAEIABADIAAgDQABgEAEABQAEAAABADQAMAkALBNQAGAqAAATIAKA0QAmB4ASBZIARBOQAIAugFAhQAEATAFArQAVAfARAqQALAcAQAyIAWBCQATAyAKAtQATA4ABAmIAVBKQARBCgBAjIAUBiIALAyQAFAegCAVQAWBUAJAtQADAMgKAIQgIAHgLgDQgRAQggAJQgXAVgmARQgGAKgIAIQgGAIgHAAQgGAAgGgEgAAnG2QAUArAIBEQAFAnAHBLQAFAoAAAYQABAjgJAaQAPgOAHgJQAKgOABgOQABgOgJgZIgNgoQgLg0gEgcQgGguAFgjQACgKAJgHIgHgqIgIgRQgUgBgLgMQACASAAAMgAhehgQgIhFgDglQgEg+AEgvIgVhgIAEAoQADAaAKCDIAFA6QABAfgJAZQAKgEAIAEIAAAAg");
	this.shape_72.setTransform(142.6587,113.5012);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F9EFE5").s().p("ABIP0QhNgBgvgXIgHgFQghAAgjgKQhVgKhBgbQg2gVgWgVIgLABIhAAFQgoACgZgHIgUAEQgYAHgUACIgqAMIgqAPQgVAGgVgFIgBAAQgIADgKACQgPABgIgCIgKAEQgRAEgOgGQgLgEgMgMQgmgIg8grQgYgFgTgSQgIgGgBgKQgtgegigpQgFgFABgIQAAgHAEgFQgBgOAEgfIAMhqQAJg9APgrQARh1AehtQAQhiAJgjIABgGQAEhgAghmQAahWAyhnQAEggANgsIANgoQAIgYAJgQIAGgPIA7hqIApg/QgEAMgTAoIgXA2IAMgWIAVgrQAOgaAPgOQAWgyAPgTQAehDATg9QgEgJACgKQAOhKAAhTQAAgQANgJQAMgKAPAEICjAnIAHACQBbgBBXATQAIABAHAGQAXgHAYgBQAdgBAPAKQAhAAAfADQANgDATgCQAOgFASAAIAiADIAwgBIAogGQAWgCAPAEQAwgTAgAHIAFAAIAAAAQAagOAQgDQAUgFAJACIACgHQACgGAHgCQAFgBAFADQAIgCAEAJQACAFgBAHIgBAMIAAAZIgCAGQAEACAAAEIAOBiIADAXIALAnIABABQA9BKArBLQAiA5ALAeQAQAeAMAbIAdA6QAPAkABAaQAYAhATA8QALAiARBCIAIAZQAGgBACAEIARAkQAoArAeBLQASAuAXBXQAdBEAQA1QAgBiACALQAQBAgKAvQAPBNAFA4IAHBCQgCALAAAmIAAAVQgLAbgXAVQgSASgfATQgQgEgPgIQgVAOgWAGQgUAFgbAAQgPABgJgLIhGgBQgwgCgWAAQgoACgeAIQgcAIgkAUIg9AiQh6BAiIASQhKAKgyAAIgEAAgAF2u2IAEAHIACACIAEgKg");
	this.shape_73.setTransform(104.8225,102.904);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F9EFE5").s().p("ABIP0QhNgBgvgXIgHgFQghAAgjgJQhVgLhBgaIgogSQgWgLgOgNIgLAAIhAAFQgoACgZgGIgUADQgYAIgUACQgUAFgWAHIgqAPQgVAGgVgFIgBgBIgSAFQgNACgKgDIgKAEQgRAEgOgGQgLgEgMgMQgngIg7grQgWgFgVgRQgHgGgCgLQgvgfgggoQgFgFABgIQAAgHAEgEQAAgHADgnIANhqQAJg9AOgrQASh3AdhqQAOhbALgrIABgGQAEhgAghmQAahUAyhpQAFgjAMgpQATg6ALgWIAGgPIA7hpIAphAIgWA0IgYA2IAMgWIAVgrQAPgaAOgOQAWgxAPgTQAdhCAUg+QgDgIABgLQAOhLAAhTQAAgQANgJQAMgKAPAEICjAnIAHADIABAAQBZgCBZAUQAIABAGAGQAXgHAYgBQAdgBAPAKQAdAAAjACQAPgDARgCQAOgFASABIAiACIAwgBIAogGQAWgCAQAEQAvgSAgAHIAFgBIAAAAQAbgOAPgDQAWgEAHABIACgHQACgGAHgBQAFgCAFADQAEgBADADQAEACABADQACAFgBAHIgBANIAAAYIgBAGQADADAAADIAOBjIADAXIALAnIABABQA9BJArBLQAiA8ALAbQAPAcANAdIAdA7QAPAjABAbQAYAhATA8QALAiARBBIAIAaQAFgCADAFIARAkQAoAqAeBMQASAsAYBYQAZA9AUA9QAGAVARBXQATBhgDAPQAQBRAEAzIAEAeQACAIABAcQgCALAAAnIAAAUQgMAbgWAWQgTASgdASQgTgEgNgHQgnAYgzABQgPAAgJgKQgNAAg5gCQgygCgUABQgoABgdAJQgdAIgkATIg9AiQh4BAiKASQhKAKgyAAIgEAAgAF2u1IAFAGIABADIAEgLg");
	this.shape_74.setTransform(106.4725,101.9919);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.apron_01, new cjs.Rectangle(-4.5,-3.5,215,208.8), null);


(lib.skirt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("AAmh8QgjBDgPA2QgOAugLBS");
	this.shape.setTransform(92.4,20.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6,1).p("ABLh5Qg2A2giA7QgfAzgeBP");
	this.shape_1.setTransform(61.275,15.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6,1).p("Aglh8QAiBDAPA2QAOAuAMBS");
	this.shape_2.setTransform(130.55,20.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6,1).p("AhKh0QA4A4AgA0QAhAyAcBL");
	this.shape_3.setTransform(161.675,15.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6,1).p("AtvL1Qg2gQhggxIhVgtQATmWCHmFQCHmFDslMIDIAnQDtAnC1AAQC2AADQgnQBngTBEgUQDsFMCHGFQCHGFATGWQglAVgwAYQhgAxg2AQQlkBonGAKQoIAMmth+g");
	this.shape_4.setTransform(111.4743,86.9979);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fill
	this.fill = new lib.skirt_fill();
	this.fill.name = "fill";
	this.fill.setTransform(111.4,87.55,1,1,0,0,0,111.2,86.5);

	this.timeline.addTween(cjs.Tween.get(this.fill).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.skirt, new cjs.Rectangle(-1.2,-1.4,227.5,176.9), null);


(lib.shirt_10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AnNi3QAXBXBoCTQA1BKAwA4QAEgCAFAEIHYAAQCOimBIjO");
	this.shape.setTransform(65.9,27.8987);

	this.instance = new lib.Path_1();
	this.instance.setTransform(66.35,149.25,1,1,0,0,0,61.4,17.8);
	this.instance.alpha = 0.1406;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B8912A").s().p("AgQgLIATgIIAOAfIgTAIg");
	this.shape_1.setTransform(94.775,148.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B8912A").s().p("AgQgKIATgJIAOAfIgSAIg");
	this.shape_2.setTransform(97.275,154.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B8912A").s().p("AgQgLIATgIIAOAeIgTAJg");
	this.shape_3.setTransform(99.825,159.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B8912A").s().p("AgMgPIAUgDIAFAhIgUAEg");
	this.shape_4.setTransform(89.325,130.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B8912A").s().p("AgOgOIAUgEIAIAfIgTAHIgJgig");
	this.shape_5.setTransform(90.6,136.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B8912A").s().p("AgPgMIATgHIAMAgIgTAHQgHgRgFgPg");
	this.shape_6.setTransform(92.45,142.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B8912A").s().p("AgKARIAAghIAUAAIAAAhg");
	this.shape_7.setTransform(88.05,111.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B8912A").s().p("AgKgQIAUgBIABAiIgUABg");
	this.shape_8.setTransform(88.15,117.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B8912A").s().p("AgLgQIAUgBIADAhIgUACg");
	this.shape_9.setTransform(88.525,124.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B8912A").s().p("AgKARIACgiIATACIgBAhg");
	this.shape_10.setTransform(88.65,92.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B8912A").s().p("AgKARIABgiIAUABIgBAig");
	this.shape_11.setTransform(88.375,99.15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B8912A").s().p("AgKARIABgiIAUABIgBAig");
	this.shape_12.setTransform(88.15,105.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B8912A").s().p("AgLAQIADghIAVACIgFAig");
	this.shape_13.setTransform(90.2,74.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B8912A").s().p("AgLARIADgiIAUACIgDAig");
	this.shape_14.setTransform(89.575,80.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B8912A").s().p("AgLARIACgiIAVACIgDAhg");
	this.shape_15.setTransform(89.05,86.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B8912A").s().p("AgNAPIAHghIAUAEIgHAhg");
	this.shape_16.setTransform(93.15,55.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B8912A").s().p("AgMAPIAFghIAVAEIgHAhg");
	this.shape_17.setTransform(92,61.75);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B8912A").s().p("AgMAQIAFgiIAUADIgFAig");
	this.shape_18.setTransform(91,67.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B8912A").s().p("AgOANIALggIASAHIgKAgg");
	this.shape_19.setTransform(98.05,37.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B8912A").s().p("AgOAOIAJghIAUAGIgKAhg");
	this.shape_20.setTransform(96.2,43.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B8912A").s().p("AgNAOIAIggIATAFIgIAgg");
	this.shape_21.setTransform(94.55,49.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B8912A").s().p("AgLAPIADggIAUABIgDAig");
	this.shape_22.setTransform(126.275,30.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B8912A").s().p("AgKAQIABggIAUAAIgBAhg");
	this.shape_23.setTransform(126.65,24.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B8912A").s().p("AgKgPIATgCIACAiIgUAAg");
	this.shape_24.setTransform(126.55,18.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B8912A").s().p("AgOANQAFgOAEgRIAUAFIgJAgg");
	this.shape_25.setTransform(122.825,48.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B8912A").s().p("AgNAOIAHggIAUAEIgIAhg");
	this.shape_26.setTransform(124.35,42.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B8912A").s().p("AgMAPIAFghIAUADIgFAhg");
	this.shape_27.setTransform(125.5,36.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B8912A").s().p("AgPAMIAMgfIATAIIgMAfg");
	this.shape_28.setTransform(116.85,65.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B8912A").s().p("AgPAMIAMgfIATAIIgMAfg");
	this.shape_29.setTransform(119,60.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B8912A").s().p("AgOANIAKggIATAHIgKAfg");
	this.shape_30.setTransform(121.025,54.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B8912A").s().p("AgOAOIAKggIATAGQgFAOgEARg");
	this.shape_31.setTransform(110.55,82.925);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B8912A").s().p("AgPANIAMggIATAIIgMAeg");
	this.shape_32.setTransform(112.425,77.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B8912A").s().p("AgPAMIANgfIASAIIgMAfg");
	this.shape_33.setTransform(114.6,71.525);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B8912A").s().p("AgKARIABgiIAUACIgBAgg");
	this.shape_34.setTransform(108.1,100.95);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B8912A").s().p("AgLAQIADghIAUACIgDAhg");
	this.shape_35.setTransform(108.525,94.925);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B8912A").s().p("AgMAQIAFghIAUAEQgEAUgBALg");
	this.shape_36.setTransform(109.25,88.875);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B8912A").s().p("AgLgPIAUgCIADAgIgUADg");
	this.shape_37.setTransform(108.55,119.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B8912A").s().p("AgKgQIAUgBIABAhIgUABg");
	this.shape_38.setTransform(108.075,113.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B8912A").s().p("AgKARIAAghIAVAAIAAAhg");
	this.shape_39.setTransform(107.95,107.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B8912A").s().p("AgOgMIATgHIAKAfIgSAHIgLgfg");
	this.shape_40.setTransform(112.35,137.05);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B8912A").s().p("AgNgOIATgEIAJAfIgUAGIgIghg");
	this.shape_41.setTransform(110.65,131.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B8912A").s().p("AgNgOIAUgDIAGAfIgTAFg");
	this.shape_42.setTransform(109.4,125.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B8912A").s().p("AgSgHIASgMIASAbIgRAMg");
	this.shape_43.setTransform(120.25,153.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B8912A").s().p("AgQgJIASgKIAQAcIgSALg");
	this.shape_44.setTransform(117.15,148.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B8912A").s().p("AgQgLIAUgIIAMAeIgSAJg");
	this.shape_45.setTransform(114.5,142.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B8912A").s().p("AgNAPIAHgjIAVAFIgJAkg");
	this.shape_46.setTransform(44.75,148.25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B8912A").s().p("AgOAPIAKgjIATAGIgKAjg");
	this.shape_47.setTransform(43.125,154.675);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B8912A").s().p("AgPAOIAMgiIATAGIgMAjg");
	this.shape_48.setTransform(41.225,161.075);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B8912A").s().p("AgMARIAFgkIAUADIgFAkg");
	this.shape_49.setTransform(48.125,128.575);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B8912A").s().p("AgMARIAFgkIAUADIgFAkg");
	this.shape_50.setTransform(47.225,135.15);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B8912A").s().p("AgNAQIAHgjIAUADIgHAkg");
	this.shape_51.setTransform(46.125,141.725);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B8912A").s().p("AgKASIABgkIAUABIgBAkg");
	this.shape_52.setTransform(49.525,108.625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B8912A").s().p("AgKASIABgkIAUABIgBAkg");
	this.shape_53.setTransform(49.25,115.275);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B8912A").s().p("AgLASIADgkIAUACIgDAjg");
	this.shape_54.setTransform(48.8,121.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B8912A").s().p("AgLgRIAVgBIABAkIgTABg");
	this.shape_55.setTransform(49.3,88.65);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B8912A").s().p("AgKgRIAUgBIABAkIgVABg");
	this.shape_56.setTransform(49.55,95.275);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B8912A").s().p("AgKASIAAgjIAVgBIAAAlg");
	this.shape_57.setTransform(49.625,101.925);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B8912A").s().p("AgMgPIAUgEIAFAlIgUACg");
	this.shape_58.setTransform(47.65,68.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B8912A").s().p("AgMgRIAVgBIADAjIgUACg");
	this.shape_59.setTransform(48.4,75.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B8912A").s().p("AgLgRIAUgBIADAkIgUABg");
	this.shape_60.setTransform(48.925,81.925);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B8912A").s().p("AgPgNIATgHIAMAiIgTAHg");
	this.shape_61.setTransform(43.35,49.25);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B8912A").s().p("AgOgOIAUgFIAJAjIgUAEg");
	this.shape_62.setTransform(45.225,55.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B8912A").s().p("AgNgPIAUgEIAHAjIgUAEg");
	this.shape_63.setTransform(46.625,62.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B8912A").s().p("AgLgPIAUgCIADAhIgUACg");
	this.shape_64.setTransform(6.3,30.425);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B8912A").s().p("AgKgQIAUAAIABAgIgUABg");
	this.shape_65.setTransform(5.95,24.375);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B8912A").s().p("AgKARIABghIAUABIgCAgg");
	this.shape_66.setTransform(6.05,18.275);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#B8912A").s().p("AgOgNIAUgFIAJAfIgUAGg");
	this.shape_67.setTransform(9.725,48.325);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B8912A").s().p("AgNgOIATgEIAIAgIgUAFIgHghg");
	this.shape_68.setTransform(8.25,42.45);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B8912A").s().p("AgMgPIAUgCIAFAgIgUADg");
	this.shape_69.setTransform(7.05,36.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B8912A").s().p("AgPgLIATgIIAMAfIgTAIg");
	this.shape_70.setTransform(15.7,65.575);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B8912A").s().p("AgPgLIATgHIAMAeIgTAHg");
	this.shape_71.setTransform(13.525,59.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B8912A").s().p("AgOgMIATgGIAKAeIgTAHIgKgfg");
	this.shape_72.setTransform(11.525,54.15);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B8912A").s().p("AgOgMIAUgGIAJAgIgTAFg");
	this.shape_73.setTransform(22,82.775);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B8912A").s().p("AgPgLIATgIIAMAgIgTAHg");
	this.shape_74.setTransform(20.125,76.975);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B8912A").s().p("AgPgLIATgIIAMAfIgTAIg");
	this.shape_75.setTransform(17.95,71.275);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B8912A").s().p("AgLgQIAVgBIACAiIgUAAg");
	this.shape_76.setTransform(24.45,100.95);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B8912A").s().p("AgLgOIAUgDIADAhIgUACg");
	this.shape_77.setTransform(24.05,94.85);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B8912A").s().p("AgMgNIAUgFIAFAiIgUADIgFggg");
	this.shape_78.setTransform(23.325,88.75);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B8912A").s().p("AgLAQIADghIAUACIgDAhg");
	this.shape_79.setTransform(24.025,119.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#B8912A").s().p("AgKAQIABghIAUABIgBAig");
	this.shape_80.setTransform(24.5,113.225);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B8912A").s().p("AgKARIAAghIAVAAIAAAhg");
	this.shape_81.setTransform(24.625,107.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B8912A").s().p("AgOAMIALgfIASAHIgKAgg");
	this.shape_82.setTransform(20.2,137.25);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B8912A").s().p("AgNAOQAEgOAEgSIAUAFIgJAgg");
	this.shape_83.setTransform(21.9,131.375);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B8912A").s().p("AgMAOIAFgfIAUACIgFAig");
	this.shape_84.setTransform(23.175,125.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B8912A").s().p("AgSAIIATgbIASALIgTAcg");
	this.shape_85.setTransform(12.2,153.75);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#B8912A").s().p("AgQAJIAPgcIASAJIgQAeg");
	this.shape_86.setTransform(15.35,148.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B8912A").s().p("AgPALIANgeIASAIIgNAfg");
	this.shape_87.setTransform(18.025,143);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3F7745").s().p("AgVAyQgLAAgJgIQgJgIAAgMIAAgrQAAgMAJgIQAJgIALAAIArAAQAMAAAIAIQAJAIAAAMIAAArQAAAMgJAIQgIAIgMAAg");
	this.shape_88.setTransform(66.25,153.625);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#3F7745").s().p("AgVAyQgLAAgJgIQgJgIAAgMIAAgrQAAgMAJgIQAJgIALAAIArAAQAMAAAIAIQAJAIAAAMIAAArQAAAMgJAIQgIAIgMAAg");
	this.shape_89.setTransform(66.25,132.825);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#3F7745").s().p("AgVAyQgLAAgJgIQgJgJAAgLIAAgrQAAgMAJgIQAJgIALAAIArAAQAMAAAIAIQAJAIAAAMIAAArQAAALgJAJQgIAIgMAAg");
	this.shape_90.setTransform(66.25,109.975);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#3F7745").s().p("AgVAyQgLAAgJgIQgJgIAAgMIAAgrQAAgMAJgIQAJgIALAAIArAAQAMAAAIAIQAJAIAAAMIAAArQAAAMgJAIQgIAIgMAAg");
	this.shape_91.setTransform(66.25,86.875);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#3F7745").s().p("AgVAyQgLAAgJgIQgJgIAAgMIAAgrQAAgMAJgIQAJgIALAAIArAAQAMAAAIAIQAJAIAAAMIAAArQAAAMgJAIQgIAIgMAAg");
	this.shape_92.setTransform(66.25,64.025);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#5F1806").ss(2.6).p("AJlqnQAeARALAQQAKAQACAkQAGCFgiB/QgPA1ggBWQgoBogLAhQhEDNAOC5QAIBmAgBdQAhBhA6BOQgdAchGAeQiLA8jIAKQhJAEhzAAQhvgBg6gDQjIgKiLg8QgrgTgggVIgYgSQA6hOAhhhQAghdAIhmQAOi7hEjLQgLgfgohqQgghVgOg2Qgjh/AGiFQABgiALgSQALgQAegRQBcg0CEgpQDFg9C/AAQDAAADFA9QCFApBbA0g");
	this.shape_93.setTransform(66.6938,83.375);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#CA2C2B").s().p("AggA+QgLgGgEgLIgRgxQgFgMAGgLQAGgMALgEIA4gUQAMgEALAGQALAFAEAMIARAyQAFAMgGAKQgGAMgMAEIg2ATQgGACgEAAQgHAAgHgDg");
	this.shape_94.setTransform(108,138.75);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CA2C2B").s().p("AgoA5QgKgHgDgMIgKg0QgCgMAGgLQAHgJANgDIA5gLQANgDAKAHQAKAHADAMIAKAzQACAMgGALQgHAKgNADIg5ALIgHABQgIAAgIgFg");
	this.shape_95.setTransform(102.9612,111.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#CA2C2B").s().p("AAMA/Ig4gSQgMgDgGgLQgGgLAEgMIAPgyQAEgMALgGQALgGAMAEIA4ARQAMAEAGALQAGALgEAMIgPAyQgEAMgLAGQgHADgHAAQgEAAgFgBg");
	this.shape_96.setTransform(105.7214,81.8619);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#CA2C2B").s().p("AAHBAIg3gWQgLgEgFgMQgFgLAEgMIAUgwQAEgMAMgFQALgFAMAEIA2AWQAMAFAFALQAFAMgFALIgTAxQgFALgLAGQgGACgGAAQgFAAgGgCg");
	this.shape_97.setTransform(115.3184,54.1934);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#CA2C2B").s().p("AAVA9Ig6gJQgNgCgHgKQgHgKACgNIAHgzQACgNAKgHQAKgIANACIA6AJQAMADAIAKQAHAKgCAMIgIAzQgCAMgKAIQgIAGgJAAIgFAAg");
	this.shape_98.setTransform(121.725,29.05);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#CA2C2B").s().p("AgMA0QgMgIgEgOIgLgpQgEgOAHgNQAHgMAOgEIACAAQANgEANAHQAMAHAEAOIALAqQAEAOgHANQgHAMgOAEIgCAAIgKACQgIAAgIgFg");
	this.shape_99.setTransform(93.7362,143.5362);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#3F7745").s().p("AgLA0QgMgHgEgOIgNgpQgEgOAHgMQAHgNAOgEIACgBQANgEAMAHQANAGAEAOIAMAqQAEAOgGANQgHANgOADIgCABIgKABQgIAAgIgEg");
	this.shape_100.setTransform(89.6035,156.55);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#3F7745").s().p("AgSAyQgLgJgCgOIgGgrQgCgPAIgLQAJgMAOgCIACAAQANgBAMAIQAMAJACAOIAGArQACAOgJALQgJAMgOACIgCABIgFAAQgLAAgJgHg");
	this.shape_101.setTransform(83.9491,133.75);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#CA2C2B").s().p("AgVAwQgLgJgBgPIgDgrQgBgOAJgLQAKgLAOgBIACAAQANgBAMAKQAKAJABAOIADAsQABAOgKALQgIALgPABIgCAAIgDAAQgMAAgJgJg");
	this.shape_102.setTransform(88.4,120.025);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#3F7745").s().p("AAAA5QgOAAgLgKQgKgKAAgOIAAgsQAAgPAKgKQALgKAOAAIABAAQAPAAAKAKQAKAKAAAPIAAAsQAAAOgKAKQgKAKgPAAg");
	this.shape_103.setTransform(81.875,108.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#CA2C2B").s().p("AgCA5IgCgBQgOAAgJgLQgKgLABgOIADgsQABgOAKgJQALgKAOABIACAAQAOABAKALQAJALgBAOIgDArQgBAPgLAJQgJAJgNAAIgCAAg");
	this.shape_104.setTransform(88.9285,97.4035);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#3F7745").s().p("AgDA5IgBAAQgPgBgKgLQgIgLAAgPIAEgrQABgPALgJQAMgJANABIABAAQAPABAKALQAIALAAAPIgEArQgBAPgLAJQgKAIgMAAIgDAAg");
	this.shape_105.setTransform(82.4,86.075);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#3F7745").s().p("AgHA4IgCAAQgOgCgJgMQgIgMACgOIAHgrQADgOALgIQAMgJANACIACABQAOACAJAMQAIALgCAOIgHArQgCAPgMAIQgJAHgKAAIgGgBg");
	this.shape_106.setTransform(84.9834,63.8094);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CA2C2B").s().p("AgHA4IgCAAQgOgCgIgMQgJgMACgOIAHgrQADgOALgIQAMgJANADIACAAQAPACAIAMQAIAMgCAOIgHArQgCAOgMAIQgKAHgJAAIgGgBg");
	this.shape_107.setTransform(90.2844,75.975);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#CA2C2B").s().p("AgKA4IgDgBQgNgDgJgMQgHgMADgOIAKgrQADgOAMgHQANgIANADIABABQAOADAJAMQAHAMgDAOIgKArQgEAOgLAHQgJAGgJAAIgHgBg");
	this.shape_108.setTransform(94.05,55.5646);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#CA2C2B").s().p("AAJA/Ig2gTQgMgEgGgMQgGgKAFgMIARgyQAEgMALgFQAMgGALAEIA4AUQALAEAGAMQAGALgFAMIgRAxQgEALgLAGQgHADgHAAQgEAAgGgCg");
	this.shape_109.setTransform(23.95,138.75);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#CA2C2B").s().p("AASA9Ig5gLQgNgDgGgKQgIgLADgMIAKgzQACgMALgHQAKgHAMADIA6ALQAMADAIAJQAGALgCAMIgLA0QgBAMgLAHQgIAFgJAAIgGgBg");
	this.shape_110.setTransform(29,111.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CA2C2B").s().p("AgiA9QgLgGgEgMIgPgyQgEgMAGgLQAGgLAMgEIA4gRQAMgEALAGQALAGAEAMIAPAyQAEAMgGALQgGALgMADIg4ASQgFABgFAAQgHAAgGgDg");
	this.shape_111.setTransform(26.2619,81.8619);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#CA2C2B").s().p("AgdBAQgLgGgFgLIgTgxQgFgLAFgMQAFgLAMgFIA2gWQALgEAMAFQALAFAFAMIATAwQAFAMgFALQgFAMgMAEIg2AWQgGACgFAAQgGAAgGgCg");
	this.shape_112.setTransform(16.65,54.1934);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#CA2C2B").s().p("AgrA3QgKgIgBgMIgIgzQgDgMAIgKQAHgKANgDIA6gJQANgCAKAIQAJAHADANIAIAzQABANgHAKQgIAKgMACIg6AJIgFAAQgKAAgIgGg");
	this.shape_113.setTransform(10.25,29.05);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#CA2C2B").s().p("AgMA3IgCAAQgOgEgIgMQgHgNAEgOIALgqQAEgOAMgHQAMgHAOAEIACAAQAOAEAHAMQAHANgEAOIgLApQgDAOgNAIQgIAFgIAAIgJgCg");
	this.shape_114.setTransform(38.2362,143.5362);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#3F7745").s().p("AgOA3IgCgBQgOgDgHgNQgHgNAEgOIANgqQAEgOANgGQALgHAOAEIACABQAOAEAHANQAGAMgEAOIgMApQgEAOgNAHQgHAEgIAAIgKgBg");
	this.shape_115.setTransform(42.3535,156.55);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3F7745").s().p("AgGA5IgCgBQgOgCgJgMQgJgLACgOIAHgrQACgOALgJQAMgIANABIACAAQAOACAJAMQAJAMgDAOIgGArQgCAOgLAJQgJAHgKAAIgGAAg");
	this.shape_116.setTransform(48.009,133.75);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#CA2C2B").s().p("AgCA5IgCAAQgOgBgKgLQgJgLABgOIADgsQABgOALgJQAKgKAOABIACAAQAOABAKALQAJALgBAOIgDArQgBAPgLAJQgJAJgNAAIgCAAg");
	this.shape_117.setTransform(43.575,120.025);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3F7745").s().p("AAAA5QgOAAgLgKQgKgKAAgOIAAgsQAAgPAKgKQALgKAOAAIABAAQAOAAALAKQAKAKAAAPIAAAsQAAAOgKAKQgLAKgOAAg");
	this.shape_118.setTransform(50.075,108.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#CA2C2B").s().p("AgVAwQgLgJgCgPIgCgrQgBgOAJgLQAKgLAPgBIABAAQAOgBALAKQALAJAAAOIADAsQABAOgKALQgJALgOAAIgCABIgDAAQgMAAgJgJg");
	this.shape_119.setTransform(43.05,97.4035);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#3F7745").s().p("AgVAxQgLgJgBgPIgEgrQgBgOAKgMQAJgLAOgBIACAAQAOgBALAJQALAKABAOIAEArQAAAPgJALQgJALgOABIgCAAIgDAAQgMAAgKgIg");
	this.shape_120.setTransform(49.5502,86.075);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#3F7745").s().p("AgRAyQgLgIgDgPIgHgrQgCgOAJgLQAIgMAOgCIACgBQANgCAMAJQAMAIACAOIAHArQACAOgIAMQgIAMgPACIgCAAIgGABQgKAAgJgHg");
	this.shape_121.setTransform(46.9844,63.8094);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#CA2C2B").s().p("AgRAyQgLgIgDgOIgHgrQgCgPAIgLQAJgMAOgCIACAAQANgDAMAJQAMAIACAOIAHArQACAPgIALQgJAMgOACIgCAAIgGABQgKAAgJgHg");
	this.shape_122.setTransform(41.6834,75.975);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#CA2C2B").s().p("AgOAzQgLgHgEgOIgKgrQgDgOAHgMQAJgMAOgDIACgBQANgDAMAIQAMAHADAOIAKArQADAOgIAMQgIAMgNADIgCABIgIABQgJAAgJgGg");
	this.shape_123.setTransform(37.9,55.5646);

	this.instance_1 = new lib.Path_2();
	this.instance_1.setTransform(112.95,31.45,1,1,0,0,0,20.8,21.9);
	this.instance_1.alpha = 0.1406;

	this.instance_2 = new lib.Path_3();
	this.instance_2.setTransform(21,33.5,1,1,0,0,0,19.8,23.5);
	this.instance_2.alpha = 0.1406;

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#CA2C2B").s().p("AgOgTIAYgEIAFArIgYAEg");
	this.shape_124.setTransform(72.625,146.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#CA2C2B").s().p("AgPgTIAYgEIAHArIgYAEg");
	this.shape_125.setTransform(73.7,154.275);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#CA2C2B").s().p("AgQgTIAYgEIAJAqIgYAFIgJgrg");
	this.shape_126.setTransform(75.1,162.125);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#CA2C2B").s().p("AgMgVIAYgBIACAsIgZABg");
	this.shape_127.setTransform(70.85,122.575);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#CA2C2B").s().p("AgNgVIAZgBIACArIgZACg");
	this.shape_128.setTransform(71.25,130.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#CA2C2B").s().p("AgOgUIAZgCIADArIgXACg");
	this.shape_129.setTransform(71.8,138.425);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#CA2C2B").s().p("AgMAWIAAgrIAZAAIAAArg");
	this.shape_130.setTransform(70.525,98.675);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#CA2C2B").s().p("AgMgVIAYAAIABArIgZAAg");
	this.shape_131.setTransform(70.55,106.625);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#CA2C2B").s().p("AgMgVIAYAAIABArIgYAAg");
	this.shape_132.setTransform(70.625,114.575);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#CA2C2B").s().p("AgMAWIAAgrIAZAAIgBArg");
	this.shape_133.setTransform(70.55,74.825);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#CA2C2B").s().p("AgMAWIAAgrIAZAAIAAArg");
	this.shape_134.setTransform(70.525,82.725);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#CA2C2B").s().p("AgMAWIAAgrIAZAAIAAArg");
	this.shape_135.setTransform(70.525,90.675);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#CA2C2B").s().p("AgMAWIABgrIAYAAIAAArg");
	this.shape_136.setTransform(70.6,50.925);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#CA2C2B").s().p("AgMAWIAAgrIAZAAIAAArg");
	this.shape_137.setTransform(70.575,58.875);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#CA2C2B").s().p("AgMAWIAAgrIAZAAIAAArg");
	this.shape_138.setTransform(70.575,66.825);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#CA2C2B").s().p("AgOAUIAFgrIAYADIgFAsg");
	this.shape_139.setTransform(58.1,146.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#CA2C2B").s().p("AgPAUIAHgrIAYADIgGAsg");
	this.shape_140.setTransform(57.05,154.35);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#CA2C2B").s().p("AgQATIAIgqIAZAEIgIArg");
	this.shape_141.setTransform(55.8,162.275);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CA2C2B").s().p("AgNAVIACgrIAZABIgCAsg");
	this.shape_142.setTransform(60.125,122.35);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#CA2C2B").s().p("AgNAVIADgrIAYABIgDAsg");
	this.shape_143.setTransform(59.625,130.375);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#CA2C2B").s().p("AgOAVIAEgrIAZACIgFArg");
	this.shape_144.setTransform(58.975,138.35);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CA2C2B").s().p("AgMAXIAAgsIAZAAIAAAsg");
	this.shape_145.setTransform(60.775,98.25);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#CA2C2B").s().p("AgMAWIABgsIAYABIgBArg");
	this.shape_146.setTransform(60.675,106.25);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#CA2C2B").s().p("AgNAWIACgsIAZABIgCAsg");
	this.shape_147.setTransform(60.475,114.275);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#CA2C2B").s().p("AgMgVIAYgBIACAsIgZABg");
	this.shape_148.setTransform(60.5,74.125);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#CA2C2B").s().p("AgMgVIAYgBIABAsIgYABg");
	this.shape_149.setTransform(60.675,82.125);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#CA2C2B").s().p("AgLAXIgBgsIAYAAIABAsg");
	this.shape_150.setTransform(60.75,90.15);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#CA2C2B").s().p("AgMgVIAYgBIACAsIgZABg");
	this.shape_151.setTransform(59.7,50);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#CA2C2B").s().p("AgNgVIAZgBIABAsIgYABg");
	this.shape_152.setTransform(60,58);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#CA2C2B").s().p("AgMgVIAYgBIACAsIgZABg");
	this.shape_153.setTransform(60.25,66.025);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FBDCB0").s().p("AgQgTIAYgFIAJArIgYAGIgJgsg");
	this.shape_154.setTransform(85.85,145.15);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FBDCB0").s().p("AgRgSIAYgGIALAqIgYAHIgLgrg");
	this.shape_155.setTransform(87.675,152.925);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FBDCB0").s().p("AgSgRIAYgHIANApIgXAIIgOgqg");
	this.shape_156.setTransform(89.875,160.65);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FBDCB0").s().p("AgOgVIAZgCIAEAsIgZACg");
	this.shape_157.setTransform(82.45,121.35);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FBDCB0").s().p("AgOgUIAYgDIAFAsIgYADg");
	this.shape_158.setTransform(83.225,129.275);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FBDCB0").s().p("AgPgTIAYgEIAHArIgYAEg");
	this.shape_159.setTransform(84.375,137.225);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FBDCB0").s().p("AgMAWIAAgsIAZABIgBArg");
	this.shape_160.setTransform(81.7,97.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FBDCB0").s().p("AgMgVIAYAAIABArIgZABg");
	this.shape_161.setTransform(81.7,105.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FBDCB0").s().p("AgNgVIAZgBIACAsIgZABg");
	this.shape_162.setTransform(81.925,113.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FBDCB0").s().p("AgOAWIAFgsIAYACIgFAsg");
	this.shape_163.setTransform(83.075,73.25);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FBDCB0").s().p("AgNAWIADgsIAYACIgDArg");
	this.shape_164.setTransform(82.4,81.225);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FBDCB0").s().p("AgNAWIACgsIAZABIgCAsg");
	this.shape_165.setTransform(81.925,89.225);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FBDCB0").s().p("AgSASQAGgUAIgWIAXAIIgNApg");
	this.shape_166.setTransform(87.75,49.675);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FBDCB0").s().p("AgQAUQAFgbAFgRIAXAHIgJAqg");
	this.shape_167.setTransform(85.625,57.375);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FBDCB0").s().p("AgPAVIAHgsIAYAEIgHArg");
	this.shape_168.setTransform(84.125,65.25);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FBDCB0").s().p("AgOASIAFgnIAYADIgFAog");
	this.shape_169.setTransform(116.525,29.575);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FBDCB0").s().p("AgMATIABgnIAZAAIgCApg");
	this.shape_170.setTransform(117.1,22.275);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FBDCB0").s().p("AgNgTIAZgBIACApIgZAAg");
	this.shape_171.setTransform(117.125,14.85);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FBDCB0").s().p("AgRAQIALgmIAYAHQgFASgHAUg");
	this.shape_172.setTransform(111.85,51.125);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FBDCB0").s().p("AgQAQIAJgmIAYAGIgKAng");
	this.shape_173.setTransform(113.825,44.075);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FBDCB0").s().p("AgQARIAIgmIAYAEIgIAog");
	this.shape_174.setTransform(115.4,36.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FBDCB0").s().p("AgSAPIAOgmIAXAJIgOAlg");
	this.shape_175.setTransform(104.65,71.95);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FBDCB0").s().p("AgSAOIAOglIAXAJIgOAlg");
	this.shape_176.setTransform(107.15,65.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FBDCB0").s().p("AgSAPIAOglIAXAIIgNAlg");
	this.shape_177.setTransform(109.575,58.15);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FBDCB0").s().p("AgOATIAEgoIAZADIgEAog");
	this.shape_178.setTransform(99.275,93.125);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FBDCB0").s().p("AgQATIAJgpIAYAHIgIAlg");
	this.shape_179.setTransform(100.325,85.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FBDCB0").s().p("AgRAQQAEgQAIgWIAXAIIgMAlg");
	this.shape_180.setTransform(102.275,78.925);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FBDCB0").s().p("AgNgTIAZgBIACAnIgZACg");
	this.shape_181.setTransform(98.675,115.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FBDCB0").s().p("AgMgTIAZAAIAAAnIgZAAg");
	this.shape_182.setTransform(98.5,107.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FBDCB0").s().p("AgNAUIACgoIAZACIgCAng");
	this.shape_183.setTransform(98.7,100.45);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FBDCB0").s().p("AgRgQIAYgGIAKAmIgXAHg");
	this.shape_184.setTransform(101.9,136.775);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FBDCB0").s().p("AgPgRIAYgEIAHAmIgYAFg");
	this.shape_185.setTransform(100.325,129.675);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FBDCB0").s().p("AgOgSIAZgDIAEAnIgYAEg");
	this.shape_186.setTransform(99.25,122.425);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FBDCB0").s().p("AgQgBIgFgJIAVgNIAWAgIgVAPg");
	this.shape_187.setTransform(110.475,156.825);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FBDCB0").s().p("AgTgNIAWgKIARAjIgVAMg");
	this.shape_188.setTransform(106.925,150.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FBDCB0").s().p("AgSgPIAXgHIAOAkIgXAKQgJgWgFgRg");
	this.shape_189.setTransform(104.1,143.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FBDCB0").s().p("AgTANQAKgTAGgRIAWAJIgPAmg");
	this.shape_190.setTransform(37.55,145.85);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FBDCB0").s().p("AgTAOIAQglIAXALIgRAkg");
	this.shape_191.setTransform(34.7,152.475);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FBDCB0").s().p("AgTANIARgkIAWAKIgQAlg");
	this.shape_192.setTransform(31.7,159.15);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FBDCB0").s().p("AgOATIAEgoIAZACIgEApg");
	this.shape_193.setTransform(42.675,124.75);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FBDCB0").s().p("AgPARIAHgmIAYAEIgHAng");
	this.shape_194.setTransform(41.675,131.925);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FBDCB0").s().p("AgRAPIAMglIAXAGIgMAng");
	this.shape_195.setTransform(40,138.975);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FBDCB0").s().p("AgMgTIAYgBIACAoIgZABg");
	this.shape_196.setTransform(43.05,102.875);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FBDCB0").s().p("AgLAUIgBgnIAYAAIABAng");
	this.shape_197.setTransform(43.2,110.125);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FBDCB0").s().p("AgMAUIABgoIAZABIgCAog");
	this.shape_198.setTransform(43.15,117.425);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FBDCB0").s().p("AgOgSIAZgDIADApIgXACg");
	this.shape_199.setTransform(41.75,81);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FBDCB0").s().p("AgNgSIAZgCIACAnIgZACg");
	this.shape_200.setTransform(42.35,88.25);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FBDCB0").s().p("AgNgTIAZgBIABAoIgYABg");
	this.shape_201.setTransform(42.75,95.525);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FBDCB0").s().p("AgPgQIAYgFIAHAnIgYAEg");
	this.shape_202.setTransform(38.825,59.325);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FBDCB0").s().p("AgPgRIAYgEIAHAnIgYAEg");
	this.shape_203.setTransform(40.05,66.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FBDCB0").s().p("AgOgSIAZgCIAEAnIgYADg");
	this.shape_204.setTransform(41,73.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FBDCB0").s().p("AgSgOIAYgIIAMAlIgXAIg");
	this.shape_205.setTransform(33.4,38.175);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FBDCB0").s().p("AgRgPIAYgHIALAmIgYAHg");
	this.shape_206.setTransform(35.575,45.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FBDCB0").s().p("AgQgPIAYgHIAJAnIgYAFg");
	this.shape_207.setTransform(37.35,52.15);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FBDCB0").s().p("AgOgSIAYgDIAFAnIgYAEg");
	this.shape_208.setTransform(16.175,29.475);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FBDCB0").s().p("AgMgUIAYAAIACAnIgZACg");
	this.shape_209.setTransform(15.6,22.25);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FBDCB0").s().p("AgNAUIADgoIAYACIgCAng");
	this.shape_210.setTransform(15.575,14.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FBDCB0").s().p("AgRgPIAXgHIAMAlIgXAIIgMgmg");
	this.shape_211.setTransform(20.825,50.925);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FBDCB0").s().p("AgQgQIAXgGIAKAmIgYAHg");
	this.shape_212.setTransform(18.875,43.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FBDCB0").s().p("AgQgRIAYgFIAIAoIgYAEg");
	this.shape_213.setTransform(17.3,36.75);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FBDCB0").s().p("AgSgOIAXgJIAOAmIgXAJg");
	this.shape_214.setTransform(28,71.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FBDCB0").s().p("AgSgOIAXgJIAOAmIgXAJg");
	this.shape_215.setTransform(25.5,64.85);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FBDCB0").s().p("AgSgOIAYgIIANAlIgXAIg");
	this.shape_216.setTransform(23.075,57.925);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FBDCB0").s().p("AgOgSIAZgCIAEAnIgZADg");
	this.shape_217.setTransform(33.425,93.05);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FBDCB0").s().p("AgQgQIAYgGIAJAoIgZAFg");
	this.shape_218.setTransform(32.35,85.775);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FBDCB0").s().p("AgRgOIAXgIIANAmIgYAHg");
	this.shape_219.setTransform(30.4,78.675);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FBDCB0").s().p("AgNAUIACgoIAZABIgCAog");
	this.shape_220.setTransform(34.025,115.125);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FBDCB0").s().p("AgMAUIAAgnIAZgBIAAApg");
	this.shape_221.setTransform(34.225,107.775);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FBDCB0").s().p("AgNgSIAZgCIACAoIgZABg");
	this.shape_222.setTransform(34,100.425);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FBDCB0").s().p("AgRAQIAKgmIAYAGIgKAng");
	this.shape_223.setTransform(30.8,136.975);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FBDCB0").s().p("AgPASIAHgoIAYAFIgHAng");
	this.shape_224.setTransform(32.375,129.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FBDCB0").s().p("AgOASIAEgnIAZADIgFAog");
	this.shape_225.setTransform(33.45,122.525);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FBDCB0").s().p("AgVAKIARgYIAEgJIAWANIgWAig");
	this.shape_226.setTransform(22.1,157.225);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FBDCB0").s().p("AgUAMIASgjIAXAKIgTAlg");
	this.shape_227.setTransform(25.7,150.825);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FBDCB0").s().p("AgSAOIAOglIAXAJIgOAmg");
	this.shape_228.setTransform(28.55,144.025);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#5F1806").s().p("Ai3MIQgDgCgBgEQhAACgkgJQgOgDgNgEIgHABQgYgBgggJIg3gPQgrgMgTgPQgZgIgLgJQgcAHghgaQgIgGgBgNQgBgLAFgKQAjhDASgnQAcg7ARgyQASheAGhiQgTgdgCgiQgCgkASgfIgYhoQgOg+gQgpQgshqgVg2QgjhfgKhHQgLgogFgoQgFgzACg9IACghQACgUAIgLQAMgTAVgBQAUgYAegDQAVgUAigMIAGgBQALgKANAAQAOAAAGAOIAvBjQAIADAIAFQAOA1AhAoIAEAkQA2AxA1BEIACACQAlgMAugEQAuAMAYAEQApAFAegGIABACQAygEAOAAQAKABAbAGQAegQAfATIAAAAIApgGQAWgBASALQAPgTAUgOQATgmAfgqQATgaAogxQANgZAMgVQAYhAAIgTIAUgyQAEgJAJgEQAIgFAKAGQALAHAaAMQAOgFAXALQAUAKARASQAHgDAIACQAXAEARAVQAZAfgMAUQAGD5hYCjQgFAUgJAYIgKAaIgRAyIgRAxIgZBYIgICtQgCAvACBKQAAAegDAOIADALIAMAyQAHAfABATQAIADAFAJIAmBcIAfAgQAMAPADANQADAPgHARQgPAgguAOIhOAQQgSAEgcAPQgeASgOAEQgUAHgYABQgPABgfgBQgUAFgVgDIgpAFIgpAHQgKABg7gNQhAANhAADQgvAFgbAAIgEAAQguAAgUgOg");
	this.shape_229.setTransform(66.6443,88.6246);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#EFF1EC").s().p("AiyM+QjIgKiLg8QgrgTgggVIgYgSQA6hOAhhhQAghdAIhmQAOi7hEjLQgLgfgohqQgghVgOg2Qgjh/AGiFQABgiALgSQALgQAegRQBcg0CEgpQDFg9C/AAQDAAADFA9QCFApBbA0QAeARALAQQAKAQACAkQAGCFgiB/QgPA1ggBWQgoBogLAhQhEDNAOC5QAIBmAgBdQAhBhA6BOQgdAchGAeQiLA8jIAKQhJAEhzAAQhvgBg6gDg");
	this.shape_230.setTransform(66.6938,83.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.instance_2},{t:this.instance_1},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt_10, new cjs.Rectangle(-6.3,-1.2,146,169.29999999999998), null);


(lib.shirt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shirt_same
	this.shirt_same = new lib.shirt_same();
	this.shirt_same.name = "shirt_same";
	this.shirt_same.setTransform(65.5,84.7,1,1,0,0,0,64.5,83.9);

	this.timeline.addTween(cjs.Tween.get(this.shirt_same).wait(1));

	// shirt_12
	this.shirt_12 = new lib.shirt_12();
	this.shirt_12.name = "shirt_12";
	this.shirt_12.setTransform(70.5,85.45,1,1,0,0,0,69.5,84.2);

	this.timeline.addTween(cjs.Tween.get(this.shirt_12).wait(1));

	// shirt_11
	this.shirt_11 = new lib.shirt_11();
	this.shirt_11.name = "shirt_11";
	this.shirt_11.setTransform(68,84.65,1,1,0,0,0,66.7,83.4);

	this.timeline.addTween(cjs.Tween.get(this.shirt_11).wait(1));

	// shirt_10
	this.shirt_10 = new lib.shirt_10();
	this.shirt_10.name = "shirt_10";
	this.shirt_10.setTransform(68,84.65,1,1,0,0,0,66.7,83.4);

	this.timeline.addTween(cjs.Tween.get(this.shirt_10).wait(1));

	// shirt_09
	this.shirt_09 = new lib.shirt_09();
	this.shirt_09.name = "shirt_09";
	this.shirt_09.setTransform(67.95,84.65,1,1,0,0,0,66.7,83.4);

	this.timeline.addTween(cjs.Tween.get(this.shirt_09).wait(1));

	// shirt_08
	this.shirt_08 = new lib.shirt_08();
	this.shirt_08.name = "shirt_08";
	this.shirt_08.setTransform(70.55,84.65,1,1,0,0,0,69.8,83.4);

	this.timeline.addTween(cjs.Tween.get(this.shirt_08).wait(1));

	// shirt_07
	this.shirt_07 = new lib.shirt_07();
	this.shirt_07.name = "shirt_07";
	this.shirt_07.setTransform(68,84.65,1,1,0,0,0,66.7,83.4);

	this.timeline.addTween(cjs.Tween.get(this.shirt_07).wait(1));

	// shirt_06
	this.shirt_06 = new lib.shirt_06();
	this.shirt_06.name = "shirt_06";
	this.shirt_06.setTransform(70.85,86.65,1,1,0,0,0,70.3,86);

	this.timeline.addTween(cjs.Tween.get(this.shirt_06).wait(1));

	// shirt_05
	this.shirt_05 = new lib.shirt_05();
	this.shirt_05.name = "shirt_05";
	this.shirt_05.setTransform(70.8,90.8,1,1,0,0,0,70.2,90.8);

	this.timeline.addTween(cjs.Tween.get(this.shirt_05).wait(1));

	// shirt_04
	this.shirt_04 = new lib.shirt_04();
	this.shirt_04.name = "shirt_04";
	this.shirt_04.setTransform(70.9,85.5,1,1,0,0,0,70.8,84.8);

	this.timeline.addTween(cjs.Tween.get(this.shirt_04).wait(1));

	// shirt_03
	this.shirt_03 = new lib.shirt_03();
	this.shirt_03.name = "shirt_03";
	this.shirt_03.setTransform(67.2,92.7,1,1,0,0,0,67.2,92);

	this.timeline.addTween(cjs.Tween.get(this.shirt_03).wait(1));

	// shirt_02
	this.shirt_02 = new lib.shirt_02();
	this.shirt_02.name = "shirt_02";
	this.shirt_02.setTransform(67.9,84.1,1,1,0,0,0,66.9,83.4);

	this.timeline.addTween(cjs.Tween.get(this.shirt_02).wait(1));

	// shirt_01
	this.shirt_01 = new lib.shirt_01();
	this.shirt_01.name = "shirt_01";
	this.shirt_01.setTransform(70.9,86.8,1,1,0,0,0,69.9,86.1);

	this.timeline.addTween(cjs.Tween.get(this.shirt_01).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt, new cjs.Rectangle(-5,-5.1,147.4,191.2), null);


(lib.pants_neutral = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("AAPAsQgdgoAAgv");
	this.shape.setTransform(105.425,197.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6,1).p("AgKAcQAUgZABge");
	this.shape_1.setTransform(121.975,200.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6,1).p("AAOAqQgcglABgu");
	this.shape_2.setTransform(19.7464,198.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6,1).p("AgJAyQAXgugEg1");
	this.shape_3.setTransform(36.0786,197.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6,1).p("ACmu0QBFCXAjDBQAaCOAPDZQAaF2gFF9IgFBuQgIB4gRA2QgOAug2A4QgaAdgYATQgbAEgoABQhvADhYgfQgOgLgQgSQggglgMghQgUg1gWiCIgSh5Ih0we");
	this.shape_4.setTransform(109.1338,108.3384);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.6,1).p("Ailu4QhFCXgjDFQgaCPgPDcQgaF1AFF2IADA3QAFBrAjBfQAlBkBDBMIA1AIQA8AHAegBQAugCA0gWQAbgLAQgKQAthAApirIAfifIB0we");
	this.shape_5.setTransform(33.2663,108.7375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6,1).p("AihgOQA4ATA+AGQAtAGAugEQA7gEA3gQ");
	this.shape_6.setTransform(71,52.8592);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F1806").ss(2.6,1).p("AIhBLIADh0QhBgIhigIQjGgRinAAQiuAAjWARIizAQIADBxIAAAD");
	this.shape_7.setTransform(71.1741,7.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6,1).p("AInAYIgGgBQjLglkCgIQlTgJkhA2IgGAB");
	this.shape_8.setTransform(71.2,12.3306);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fill
	this.fill = new lib.pants_neutral_fill();
	this.fill.name = "fill";
	this.fill.setTransform(71.2,102,1,1,0,0,0,71.2,102);

	this.timeline.addTween(cjs.Tween.get(this.fill).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pants_neutral, new cjs.Rectangle(-1.2,-1.2,145.6,206.5), null);


(lib.pants_decoration = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("AgqBsQgJgfAZgkQAHgJAQgSQAPgRAGgKQAdgrgCgz");
	this.shape.setTransform(126.0346,175.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6,1).p("AAMBsQAPgegNgrQgEgNgJgWQgJgXgDgLQgOgrAMge");
	this.shape_1.setTransform(101.0944,176.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6,1).p("AgiBjQAEgXAPgbQASgeAJgQQAkg8gTgp");
	this.shape_2.setTransform(39.1812,175.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6,1).p("AAqBcQAGgQgHgSQgFgPgNgPQgGgGgTgSQgQgOgIgLQgWghAGgl");
	this.shape_3.setTransform(16.6308,175.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6,1).p("AihgOQA4ATA+AGQAtAGAugEQA7gEA3gQ");
	this.shape_4.setTransform(71,52.8592);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.6,1).p("AIhBLIADh0QhBgIhigIQjGgRinAAQiuAAjWARIizAQIADBxIAAAD");
	this.shape_5.setTransform(71.1741,7.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6,1).p("AInAYIgGgBQjLglkCgIQlTgJkhA2IgGAB");
	this.shape_6.setTransform(71.2,12.3306);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F1806").ss(2.6,1).p("ACmu4QBFCWAjDFQAaCQAPDcQAaF0gFF3QAAAvgFAbQgIApgVAZQgLANgnAdQgiAYgLAWQgWAqAWAtQAQAfAGAmQhsBciLgqQgrgNgqgZIghgWQAGgWAEgdQAIg6gJgiQgGgVgSgXQgVgbgGgPQgZg3gJhSIh0we");
	this.shape_7.setTransform(109.1338,108.7832);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6,1).p("Ailu5QhFCWgjDFQgaCQgPDcQgaF0AFF3QAAAvAFAbQAIApAVAZQALANAnAdQAhAYAMAWQAWArgXAsQgPAfgWAmQBsBcCKgmQBGgTAwgmQgEgWgCgdQgDg5AJgiQAFgUAWgcQAagfAGgPQAZg5AJhQIB0we");
	this.shape_8.setTransform(33.2663,108.8679);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fill
	this.fill = new lib.pants_decoration_fill();
	this.fill.name = "fill";
	this.fill.setTransform(71.2,102.2,1,1,0,0,0,71.2,102.2);

	this.timeline.addTween(cjs.Tween.get(this.fill).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pants_decoration, new cjs.Rectangle(-5.5,-1.2,153.4,208.79999999999998), null);


(lib.pants = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// skirt
	this.skirt = new lib.skirt();
	this.skirt.name = "skirt";
	this.skirt.setTransform(72.6,100.3,1,1,0,0,0,112.5,87);

	this.timeline.addTween(cjs.Tween.get(this.skirt).wait(1));

	// pants_neutral
	this.pants_neutral = new lib.pants_neutral();
	this.pants_neutral.name = "pants_neutral";
	this.pants_neutral.setTransform(71.5,102,1,1,0,0,0,71.5,102);

	this.timeline.addTween(cjs.Tween.get(this.pants_neutral).wait(1));

	// pants_decoration
	this.pants_decoration = new lib.pants_decoration();
	this.pants_decoration.name = "pants_decoration";
	this.pants_decoration.setTransform(71.2,103.2,1,1,0,0,0,71.2,103.2);

	this.timeline.addTween(cjs.Tween.get(this.pants_decoration).wait(1));

	// pants_boxers
	this.pants_boxers = new lib.pants_boxers();
	this.pants_boxers.name = "pants_boxers";
	this.pants_boxers.setTransform(72.3,73.5,1,1,0,0,0,69.2,68.2);

	this.timeline.addTween(cjs.Tween.get(this.pants_boxers).wait(1));

	// legs
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AhYJCQgSh3hktCQgJhPADgsQAFhEAfgsQAng1BKgOQBFgNBAAeQAyAXAkAtQAkAsAOA1QAJAogCA0QgBAfgIA+IhrMMQgTCFgWApQgWApgzgEQgbgBgPgTQgVgZgIg6g");
	this.shape.setTransform(29.3064,180.8649);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAA86E").s().p("AgRKpQgbgBgPgTQgVgZgIg6QgSh3hktCQgJhPADgsQAFhEAfgsQAng1BKgOQBFgNBAAeQAyAXAkAtQAkAsAOA1QAJAogCA0QgBAfgIA+IhrMMQgTCFgWApQgUAmgtAAIgIgBg");
	this.shape_1.setTransform(29.3064,180.8649);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6).p("ABaJCQASh/Bjs6QAJhOgDgtQgEhEgggsQgng1hKgOQhFgNhAAeQgyAXgkAtQgkAsgNA1QgKAoACA0QABAgAJA9IBqMMQATCFAWApQAWApAzgEQAbgBAQgTQAUgZAJg6g");
	this.shape_2.setTransform(112.6943,180.8543);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAA86E").s().p("Ag3KEQgWgpgTiFIhqsMQgJg9gBggQgCg0AKgoQANg1AkgsQAkgtAygXQBAgeBFANQBKAOAnA1QAgAsAEBEQADAtgJBOQhjM6gSB/QgJA6gUAZQgQATgbABIgIABQgtAAgUgmg");
	this.shape_3.setTransform(112.6943,180.8543);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pants, new cjs.Rectangle(-41.1,-1.2,227.5,258.7), null);


(lib.jacket_short = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AAhADQgCAZgMAQQgMARgMgCQgOgBgIgTQgIgSADgYQADgZALgPQAMgRANACQAOABAHATQAIASgDAXg");
	this.shape.setTransform(21.2403,119.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F49C3B").s().p("AgFA8QgOgDgIgSQgIgTADgXQADgZALgPQAMgRANABQAOACAHATQAIASgDAXQgCAZgMARQgLAPgLAAIgCAAg");
	this.shape_1.setTransform(21.2403,119.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6).p("AAHg6QAOABAHATQAIASgDAXQgCAZgMAQQgMARgMgCQgOgBgIgTQgIgSADgYQADgZALgPQAMgRANACg");
	this.shape_2.setTransform(21.2403,119.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F49C3B").s().p("AgFA8QgOgDgIgSQgIgTADgXQADgZALgPQAMgRANABQAOACAHATQAIASgDAXQgCAZgMARQgLAPgLAAIgCAAg");
	this.shape_3.setTransform(21.2403,119.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6).p("AAmAEQgCAZgNAQQgNAQgPgCQgQgBgJgTQgKgSACgYQADgZANgQQANgQAPACQAQABAJATQAKASgDAYg");
	this.shape_4.setTransform(18.3087,138.5706);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F49C3B").s().p("AgFA7QgQgBgJgTQgKgSACgYQADgZANgQQANgQAPACQAQABAJATQAKASgDAYQgCAZgNAQQgMAOgNAAIgDAAg");
	this.shape_5.setTransform(18.3087,138.5706);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6).p("AAGg6QAQABAJATQAKASgDAYQgCAZgNAQQgNAQgPgCQgQgBgJgTQgKgSACgYQADgZANgQQANgQAPACg");
	this.shape_6.setTransform(18.3087,138.5706);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F49C3B").s().p("AgFA7QgQgBgJgTQgKgSACgYQADgZANgQQANgQAPACQAQABAJATQAKASgDAYQgCAZgNAQQgMAOgNAAIgDAAg");
	this.shape_7.setTransform(18.3087,138.5706);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6).p("AAtABQAAAZgOARQgNARgSAAQgSAAgOgSQgNgRABgZQAAgYAOgRQANgSASAAQASABANARQANASAAAYg");
	this.shape_8.setTransform(15.6241,159.5257);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F49C3B").s().p("AAAA8QgSAAgOgSQgNgRABgZQAAgYAOgRQANgSASAAQASABANARQANASAAAYQAAAZgOARQgNARgSAAIAAAAg");
	this.shape_9.setTransform(15.6241,159.5257);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6).p("AABg7QASABANARQANASAAAYQAAAZgOARQgNARgSAAQgSAAgOgSQgNgRABgZQAAgYAOgRQANgSASAAg");
	this.shape_10.setTransform(15.6241,159.5257);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F49C3B").s().p("AAAA8QgSAAgOgSQgNgRABgZQAAgYAOgRQANgSASAAQASABANARQANASAAAYQAAAZgOARQgNARgSAAIAAAAg");
	this.shape_11.setTransform(15.6241,159.5257);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F49C3B").ss(2.6).p("AAmgKQgDgNglABQgmABADAZQAEAdAkgPQAlgPgCgNg");
	this.shape_12.setTransform(129.1182,121.4772);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AglAEQgDgZAmgBQAlgBADANQACANglAPQgLAFgJAAQgRAAgDgTg");
	this.shape_13.setTransform(129.1182,121.4772);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F49C3B").ss(2.6).p("AA1gPQgDgOg0AGQg1AFAEAaQAEAeAzgUQA0gTgDgOg");
	this.shape_14.setTransform(131.6973,139.214);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgzAIQgEgaA1gFQA0gGADAOQADAOg0ATQgUAIgOAAQgTAAgCgSg");
	this.shape_15.setTransform(131.6973,139.214);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F49C3B").ss(2.6).p("AA8gSQgDgOg7AJQg8AIADAaQAEAdA6gWQA7gWgCgOg");
	this.shape_16.setTransform(134.4704,156.8773);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag7ALQgDgaA8gIQA7gJADAOQACAOg7AWQgYAKgQAAQgTAAgDgRg");
	this.shape_17.setTransform(134.4704,156.8773);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#5F1806").ss(2.6).p("ACYq3IAEADQAXAQAiAeQAQAOgJBgQgJBagUBJQgMAtgaBZQgVBOgIA5QgPBuALB0QAKBzAhBtQAWBIAwCLQAoB6ALBcIhNA4QhfA5haABQgOmOggmaQgemBgljaQgdiug7hVQgigyhMgx");
	this.shape_18.setTransform(122.0301,88.7353);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#5F1806").ss(2.6).p("AjqnhIAHAAQAgACAyANQAeAIA5ARQACABCoArQByAdACAMQACAJgNA8QgTBZgXBRQgcBfgLgBQgTgCgpgaQgigVgIAJQgGAGAxBBQA0BHgKAeQgVBIgaBuQgjCUACArIABAJ");
	this.shape_19.setTransform(115.883,48.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#5F1806").ss(2.6).p("AiXq4IgDACQgVAPglAfQgQAOAKBhQAIBZAUBKQAMAtAaBYQAVBOAIA5QAPBugKB1QgKBygiBuQgWBIgwCKQgoB6gLBdIAVASQAbAVAdASQBfA6BbACQADhkAIiXQANkuAVkBQAdl7AmjiQAditA7hWQAigyBMgx");
	this.shape_20.setTransform(28.3728,88.8853);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#5F1806").ss(2.6).p("ADrniIgGAAQghACgxANQgeAHg5ASQgDABioArQhyAcgCANQgCAKANA7QATBYAYBSQAbBfALgBQATgCApgaQAigVAJAIQAGAHgxBBQg1BHAKAeQAWBJAbBvQAkCVgDAqIgBAG");
	this.shape_21.setTransform(34.5422,48.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fill
	this.fill = new lib.jacket_short_fill();
	this.fill.name = "fill";
	this.fill.setTransform(28.7,88.8,1,1,0,0,0,28.7,88.8);

	this.timeline.addTween(cjs.Tween.get(this.fill).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jacket_short, new cjs.Rectangle(-1.3,-1.2,153,180.5), null);


(lib.jacket_long = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F49C3B").ss(2.6).p("AAmgKQgDgNglABQgmABADAZQAEAdAkgPQAlgPgCgNg");
	this.shape.setTransform(133.4682,121.4772);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglAEQgDgZAmgBQAlgBADANQACANglAPQgLAFgJAAQgRAAgDgTg");
	this.shape_1.setTransform(133.4682,121.4772);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F49C3B").ss(2.6).p("AA1gPQgDgOg0AGQg1AFAEAaQAEAeAzgUQA0gTgDgOg");
	this.shape_2.setTransform(136.0473,139.214);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgzAIQgEgaA1gFQA0gGADAOQADAOg0ATQgUAIgOAAQgTAAgCgSg");
	this.shape_3.setTransform(136.0473,139.214);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F49C3B").ss(2.6).p("AA8gSQgDgOg7AJQg8AIADAaQAEAdA6gWQA7gWgCgOg");
	this.shape_4.setTransform(138.8204,156.8773);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7ALQgDgaA8gIQA7gJADAOQACAOg7AWQgYAKgQAAQgTAAgDgRg");
	this.shape_5.setTransform(138.8204,156.8773);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6).p("AAhADQgCAZgMAQQgMARgMgCQgOgBgIgTQgIgSADgYQADgZALgPQAMgRANACQAOABAHATQAIASgDAXg");
	this.shape_6.setTransform(25.5903,119.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F49C3B").s().p("AgFA8QgOgDgIgSQgIgTADgXQADgZALgPQAMgRANABQAOACAHATQAIASgDAXQgCAZgMARQgLAPgLAAIgCAAg");
	this.shape_7.setTransform(25.5903,119.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6).p("AAHg6QAOABAHATQAIASgDAXQgCAZgMAQQgMARgMgCQgOgBgIgTQgIgSADgYQADgZALgPQAMgRANACg");
	this.shape_8.setTransform(25.5903,119.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F49C3B").s().p("AgFA8QgOgDgIgSQgIgTADgXQADgZALgPQAMgRANABQAOACAHATQAIASgDAXQgCAZgMARQgLAPgLAAIgCAAg");
	this.shape_9.setTransform(25.5903,119.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6).p("AAmAEQgCAZgNAQQgNAQgPgCQgQgBgJgTQgKgSACgYQADgZANgQQANgQAPACQAQABAJATQAKASgDAYg");
	this.shape_10.setTransform(22.6587,138.5706);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F49C3B").s().p("AgFA7QgQgBgJgTQgKgSACgYQADgZANgQQANgQAPACQAQABAJATQAKASgDAYQgCAZgNAQQgMAOgNAAIgDAAg");
	this.shape_11.setTransform(22.6587,138.5706);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(2.6).p("AAGg6QAQABAJATQAKASgDAYQgCAZgNAQQgNAQgPgCQgQgBgJgTQgKgSACgYQADgZANgQQANgQAPACg");
	this.shape_12.setTransform(22.6587,138.5706);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F49C3B").s().p("AgFA7QgQgBgJgTQgKgSACgYQADgZANgQQANgQAPACQAQABAJATQAKASgDAYQgCAZgNAQQgMAOgNAAIgDAAg");
	this.shape_13.setTransform(22.6587,138.5706);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5F1806").ss(2.6).p("AAtABQAAAZgOARQgNARgSAAQgSAAgOgSQgNgRABgZQAAgYAOgRQANgSASAAQASABANARQANASAAAYg");
	this.shape_14.setTransform(19.9741,159.5257);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F49C3B").s().p("AAAA8QgSAAgOgSQgNgRABgZQAAgYAOgRQANgSASAAQASABANARQANASAAAYQAAAZgOARQgNARgSAAIAAAAg");
	this.shape_15.setTransform(19.9741,159.5257);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#5F1806").ss(2.6).p("AABg7QASABANARQANASAAAYQAAAZgOARQgNARgSAAQgSAAgOgSQgNgRABgZQAAgYAOgRQANgSASAAg");
	this.shape_16.setTransform(19.9741,159.5257);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F49C3B").s().p("AAAA8QgSAAgOgSQgNgRABgZQAAgYAOgRQANgSASAAQASABANARQANASAAAYQAAAZgOARQgNARgSAAIAAAAg");
	this.shape_17.setTransform(19.9741,159.5257);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#5F1806").ss(2.6).p("ACCwPIAKAHQAIAFAOAJQAOAJAPANQAQAOgJBmQgJBdgUBKQgMAtgZBYQgWBOgHA5QgPBwAKB0QAKBzAhBsQAVBDAtCBQAmByANBUQAAADAVB1QAVCMAEByQAEBmgKB9QgFA/gFAsIhSA6QhlA5haACQABiOgCigQgElCgKheQgHg1gNjuQgSk+gKiWQgcmMgljaQgdiug6hWQgjgyhMgw");
	this.shape_18.setTransform(128.3017,122.5894);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#5F1806").ss(2.6).p("AjmnlQAgABA0ANQAeAHA8ATQADABCoAqQByAdACANQACAIgNA7QgTBZgXBRQgcBhgLgBQgTgCgpgaQgigWgJAJQgGAHAxBBQA1BGgKAfQgdBggYBbQgpCaAEAoIABAG");
	this.shape_19.setTransform(120.283,48.625);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#5F1806").ss(2.6).p("AiBwSIgFADQgJAGgQAJQgOAKgRAPQgQAOAJBlQAJBeAUBJQAMAtAaBZQAVBOAHA5QAPBvgKB0QgKBzghBsQgVBDgtCBQgmBzgNBTQAAADgVB2QgVCLgEByQgFBnALB9QAFA+AFAtIASATQAXAWAbAUQBVA9BaACQgBiOACihQAElBALheQAGgxAVj3QAYksARiwQAmmOAkjTQAdiuA7hVQAigyBMgx");
	this.shape_20.setTransform(30.5904,123.1144);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#5F1806").ss(2.6).p("ADrnkIgGAAQghACgxANQgeAIg5ARQgDABioArQhyAdgCAMQgCAHAMA7QATBZAYBSQAcBhALgBQATgCApgaQAigVAJAJQAGAGgxBBQg1BHAKAfQATA/AbB7QAhCXgEApIgBAF");
	this.shape_21.setTransform(38.8917,48.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fill
	this.fill = new lib.jacket_long_fill();
	this.fill.name = "fill";
	this.fill.setTransform(30.9,123,1,1,0,0,0,30.9,123);

	this.timeline.addTween(cjs.Tween.get(this.fill).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jacket_long, new cjs.Rectangle(-2.5,-1.2,162.6,259), null);


(lib.jacket = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// jacket_long
	this.jacket_long = new lib.jacket_long();
	this.jacket_long.name = "jacket_long";
	this.jacket_long.setTransform(78.8,128.2,1,1,0,0,0,78.8,128.2);

	this.timeline.addTween(cjs.Tween.get(this.jacket_long).wait(1));

	// jacket_short
	this.jacket_short = new lib.jacket_short();
	this.jacket_short.name = "jacket_short";
	this.jacket_short.setTransform(79.55,89,1,1,0,0,0,75.2,89);

	this.timeline.addTween(cjs.Tween.get(this.jacket_short).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.jacket, new cjs.Rectangle(-2.5,-1.2,162.6,259), null);


(lib.hat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hat_10
	this.hat_10 = new lib.hat_10();
	this.hat_10.name = "hat_10";
	this.hat_10.setTransform(140.9,143.65,1,1,0,0,0,106.2,111.5);

	this.timeline.addTween(cjs.Tween.get(this.hat_10).wait(1));

	// hat_09
	this.hat_09 = new lib.hat_09();
	this.hat_09.name = "hat_09";
	this.hat_09.setTransform(138.05,164.05,1,1,0,0,0,81.8,68.2);

	this.timeline.addTween(cjs.Tween.get(this.hat_09).wait(1));

	// hat_08
	this.hat_08 = new lib.hat_08();
	this.hat_08.name = "hat_08";
	this.hat_08.setTransform(141,309.9,1,1,0,0,0,110.8,249);

	this.timeline.addTween(cjs.Tween.get(this.hat_08).wait(1));

	// hat_07
	this.hat_07 = new lib.hat_07();
	this.hat_07.name = "hat_07";
	this.hat_07.setTransform(160.7,133.15,1,1,0,0,0,170.9,99.6);

	this.timeline.addTween(cjs.Tween.get(this.hat_07).wait(1));

	// hat_06
	this.hat_06 = new lib.hat_06();
	this.hat_06.name = "hat_06";
	this.hat_06.setTransform(148.5,141.1,1,1,0,0,0,188.2,75.2);

	this.timeline.addTween(cjs.Tween.get(this.hat_06).wait(1));

	// hat_05
	this.hat_05 = new lib.hat_05();
	this.hat_05.name = "hat_05";
	this.hat_05.setTransform(159.75,94,1,1,0,0,0,103.5,78.5);

	this.timeline.addTween(cjs.Tween.get(this.hat_05).wait(1));

	// hat_04
	this.hat_04 = new lib.hat_04();
	this.hat_04.name = "hat_04";
	this.hat_04.setTransform(131.95,86.8,1,1,0,0,0,111.2,86.8);

	this.timeline.addTween(cjs.Tween.get(this.hat_04).wait(1));

	// hat_03
	this.hat_03 = new lib.hat_03();
	this.hat_03.name = "hat_03";
	this.hat_03.setTransform(135.1,95.9,1,1,0,0,0,81.6,91.5);

	this.timeline.addTween(cjs.Tween.get(this.hat_03).wait(1));

	// hat_02
	this.hat_02 = new lib.hat_02();
	this.hat_02.name = "hat_02";
	this.hat_02.setTransform(141.8,149.25,1,1,0,0,0,141.8,71.4);

	this.timeline.addTween(cjs.Tween.get(this.hat_02).wait(1));

	// hat_01
	this.hat_01 = new lib.hat_01();
	this.hat_01.name = "hat_01";
	this.hat_01.setTransform(140.5,92.25,1,1,0,0,0,72.3,75.3);

	this.timeline.addTween(cjs.Tween.get(this.hat_01).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hat, new cjs.Rectangle(-41.5,-3.8,379.9,563.9), null);


(lib.hair_middle_right = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hair_middle_right_blond_girl
	this.hair_middle_right_blond_girl = new lib.hair_middle_right_blond_girl();
	this.hair_middle_right_blond_girl.name = "hair_middle_right_blond_girl";
	this.hair_middle_right_blond_girl.setTransform(49.85,46.45,1,1,0,0,0,16.6,36);

	this.timeline.addTween(cjs.Tween.get(this.hair_middle_right_blond_girl).wait(1));

	// hair_middle_right_brown_girl
	this.hair_middle_right_brown_girl = new lib.hair_middle_right_brown_girl();
	this.hair_middle_right_brown_girl.name = "hair_middle_right_brown_girl";
	this.hair_middle_right_brown_girl.setTransform(44.8,52.45,1,1,0,0,0,14.2,46.5);

	this.timeline.addTween(cjs.Tween.get(this.hair_middle_right_brown_girl).wait(1));

	// hair_middle_right_brown
	this.hair_middle_right_brown = new lib.hair_middle_right_brown();
	this.hair_middle_right_brown.name = "hair_middle_right_brown";
	this.hair_middle_right_brown.setTransform(22.9,36.3,1,1,0,0,0,22.9,24.8);

	this.timeline.addTween(cjs.Tween.get(this.hair_middle_right_brown).wait(1));

	// hair_middle_right_gray
	this.hair_middle_right_gray = new lib.hair_middle_right_gray();
	this.hair_middle_right_gray.name = "hair_middle_right_gray";
	this.hair_middle_right_gray.setTransform(41.1,30.7,1,1,0,0,0,28.3,30.7);

	this.timeline.addTween(cjs.Tween.get(this.hair_middle_right_gray).wait(1));

	// hair_middle_right_blond
	this.hair_middle_right_blond = new lib.hair_middle_right_blond();
	this.hair_middle_right_blond.name = "hair_middle_right_blond";
	this.hair_middle_right_blond.setTransform(31,30.15,1,1,0,0,0,29.9,24.2);

	this.timeline.addTween(cjs.Tween.get(this.hair_middle_right_blond).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_middle_right, new cjs.Rectangle(-1.8,-1.2,74.89999999999999,100.3), null);


(lib.hair_middle_left = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hair_middle_left_blond_girl
	this.hair_middle_left_blond_girl = new lib.hair_middle_left_blond_girl();
	this.hair_middle_left_blond_girl.name = "hair_middle_left_blond_girl";
	this.hair_middle_left_blond_girl.setTransform(19.2,35.85,1,1,0,0,0,16.6,34.1);

	this.timeline.addTween(cjs.Tween.get(this.hair_middle_left_blond_girl).wait(1));

	// hair_middle_left_brown_girl
	this.hair_middle_left_brown_girl = new lib.hair_middle_left_brown_girl();
	this.hair_middle_left_brown_girl.name = "hair_middle_left_brown_girl";
	this.hair_middle_left_brown_girl.setTransform(29.95,46.2,1,1,0,0,0,17.1,43.2);

	this.timeline.addTween(cjs.Tween.get(this.hair_middle_left_brown_girl).wait(1));

	// hair_middle_left_brown
	this.hair_middle_left_brown = new lib.hair_middle_left_brown();
	this.hair_middle_left_brown.name = "hair_middle_left_brown";
	this.hair_middle_left_brown.setTransform(46.35,32.45,1,1,0,0,0,23.2,24.7);

	this.timeline.addTween(cjs.Tween.get(this.hair_middle_left_brown).wait(1));

	// hair_middle_left_gray
	this.hair_middle_left_gray = new lib.hair_middle_left_gray();
	this.hair_middle_left_gray.name = "hair_middle_left_gray";
	this.hair_middle_left_gray.setTransform(42.3,27.4,1,1,0,0,0,26.7,23.4);

	this.timeline.addTween(cjs.Tween.get(this.hair_middle_left_gray).wait(1));

	// hair_middle_left_blond
	this.hair_middle_left_blond = new lib.hair_middle_left_blond();
	this.hair_middle_left_blond.name = "hair_middle_left_blond";
	this.hair_middle_left_blond.setTransform(38.55,25.95,1,1,0,0,0,25.7,21);

	this.timeline.addTween(cjs.Tween.get(this.hair_middle_left_blond).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_middle_left, new cjs.Rectangle(2.6,-3.6,69.7,93.3), null);


(lib.hair_front = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hair_front_blond_girl
	this.hair_front_blond_girl = new lib.hair_front_blond_girl();
	this.hair_front_blond_girl.name = "hair_front_blond_girl";
	this.hair_front_blond_girl.setTransform(99.6,44,1,1,0,0,0,71.3,48.8);

	this.timeline.addTween(cjs.Tween.get(this.hair_front_blond_girl).wait(1));

	// hair_front_brown_girl
	this.hair_front_brown_girl = new lib.hair_front_brown_girl();
	this.hair_front_brown_girl.name = "hair_front_brown_girl";
	this.hair_front_brown_girl.setTransform(102.6,45.9,1,1,0,0,0,74.3,51.7);

	this.timeline.addTween(cjs.Tween.get(this.hair_front_brown_girl).wait(1));

	// hair_front_brown
	this.hair_front_brown = new lib.hair_front_brown();
	this.hair_front_brown.name = "hair_front_brown";
	this.hair_front_brown.setTransform(100.35,40.8,1,1,0,0,0,95,40.8);

	this.timeline.addTween(cjs.Tween.get(this.hair_front_brown).wait(1));

	// hair_front_gray
	this.hair_front_gray = new lib.hair_front_gray();
	this.hair_front_gray.name = "hair_front_gray";
	this.hair_front_gray.setTransform(101.1,46.55,1,1,0,0,0,88.5,35.9);

	this.timeline.addTween(cjs.Tween.get(this.hair_front_gray).wait(1));

	// hair_front_blond
	this.hair_front_blond = new lib.hair_front_blond();
	this.hair_front_blond.name = "hair_front_blond";
	this.hair_front_blond.setTransform(103.2,38.75,1,1,0,0,0,103.2,35.8);

	this.timeline.addTween(cjs.Tween.get(this.hair_front_blond).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_front, new cjs.Rectangle(-1.8,-5.8,210.20000000000002,103.39999999999999), null);


(lib.hair_bottom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hair_bottom_blond_girl_straight
	this.hair_bottom_blond_girl_straight = new lib.hair_bottom_blond_girl_straight();
	this.hair_bottom_blond_girl_straight.name = "hair_bottom_blond_girl_straight";
	this.hair_bottom_blond_girl_straight.setTransform(89.15,79.2,1,1,0,0,0,70.5,79.8);

	this.timeline.addTween(cjs.Tween.get(this.hair_bottom_blond_girl_straight).wait(1));

	// hair_bottom_brown_girl_straight
	this.hair_bottom_brown_girl_straight = new lib.hair_bottom_brown_girl_straight();
	this.hair_bottom_brown_girl_straight.name = "hair_bottom_brown_girl_straight";
	this.hair_bottom_brown_girl_straight.setTransform(87.15,91.6,1,1,0,0,0,73.8,75.8);

	this.timeline.addTween(cjs.Tween.get(this.hair_bottom_brown_girl_straight).wait(1));

	// hair_bottom_blond_girl_braids
	this.hair_bottom_blond_girl_braids = new lib.hair_bottom_blond_girl_braids();
	this.hair_bottom_blond_girl_braids.name = "hair_bottom_blond_girl_braids";
	this.hair_bottom_blond_girl_braids.setTransform(88.5,91.55,1,1,0,0,0,175.2,57.6);

	this.timeline.addTween(cjs.Tween.get(this.hair_bottom_blond_girl_braids).wait(1));

	// hair_bottom_brown_girl_braids
	this.hair_bottom_brown_girl_braids = new lib.hair_bottom_brown_girl_braids();
	this.hair_bottom_brown_girl_braids.name = "hair_bottom_brown_girl_braids";
	this.hair_bottom_brown_girl_braids.setTransform(94.4,73.7,1,1,0,0,0,84.3,64.7);

	this.timeline.addTween(cjs.Tween.get(this.hair_bottom_brown_girl_braids).wait(1));

	// hair_bottom_brown
	this.hair_bottom_brown = new lib.hair_botom_brown();
	this.hair_bottom_brown.name = "hair_bottom_brown";
	this.hair_bottom_brown.setTransform(86.05,73.05,1,1,0,0,0,83.4,39.1);

	this.timeline.addTween(cjs.Tween.get(this.hair_bottom_brown).wait(1));

	// hair_bottom_gray
	this.hair_bottom_gray = new lib.hair_botom_gray();
	this.hair_bottom_gray.name = "hair_bottom_gray";
	this.hair_bottom_gray.setTransform(89.15,75.2,1,1,0,0,0,75.8,36.9);

	this.timeline.addTween(cjs.Tween.get(this.hair_bottom_gray).wait(1));

	// hair_bottom_blond
	this.hair_bottom_blond = new lib.hair_bottom_blond();
	this.hair_bottom_blond.name = "hair_bottom_blond";
	this.hair_bottom_blond.setTransform(88.8,55.6,1,1,0,0,0,88.8,55.6);

	this.timeline.addTween(cjs.Tween.get(this.hair_bottom_blond).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_bottom, new cjs.Rectangle(-90.6,-1.3,358.20000000000005,169.9), null);


(lib.hair_behind = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hair_behind_blond_girl
	this.hair_behind_blond_girl = new lib.hair_behind_blond_girl();
	this.hair_behind_blond_girl.name = "hair_behind_blond_girl";
	this.hair_behind_blond_girl.setTransform(111.35,85,1,1,0,0,0,83.4,81);

	this.timeline.addTween(cjs.Tween.get(this.hair_behind_blond_girl).wait(1));

	// hair_behind_brown_girl
	this.hair_behind_brown_girl = new lib.hair_beind_brown_girl();
	this.hair_behind_brown_girl.name = "hair_behind_brown_girl";
	this.hair_behind_brown_girl.setTransform(114.1,60.1,1,1,0,0,0,84.6,65.2);

	this.timeline.addTween(cjs.Tween.get(this.hair_behind_brown_girl).wait(1));

	// hair_behind_brown
	this.hair_behind_brown = new lib.hair_behind_brown();
	this.hair_behind_brown.name = "hair_behind_brown";
	this.hair_behind_brown.setTransform(107.85,60.9,1,1,0,0,0,101.5,60.9);

	this.timeline.addTween(cjs.Tween.get(this.hair_behind_brown).wait(1));

	// hair_behind_gray
	this.hair_behind_gray = new lib.hair_behind_gray();
	this.hair_behind_gray.name = "hair_behind_gray";
	this.hair_behind_gray.setTransform(109.65,62.1,1,1,0,0,0,87.7,48.2);

	this.timeline.addTween(cjs.Tween.get(this.hair_behind_gray).wait(1));

	// hair_behind_blond
	this.hair_behind_blond = new lib.hair_behind_blond();
	this.hair_behind_blond.name = "hair_behind_blond";
	this.hair_behind_blond.setTransform(101.5,56.4,1,1,0,0,0,101.5,54.1);

	this.timeline.addTween(cjs.Tween.get(this.hair_behind_blond).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_behind, new cjs.Rectangle(-1.8,-10.5,212.5,177.8), null);


(lib.foot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shoe_04
	this.shoe_04 = new lib.shoe_04();
	this.shoe_04.name = "shoe_04";
	this.shoe_04.setTransform(25.8,52.7,1,1,0,0,0,36.5,45.4);

	this.timeline.addTween(cjs.Tween.get(this.shoe_04).wait(1));

	// shoe_03
	this.shoe_03 = new lib.shoe_03();
	this.shoe_03.name = "shoe_03";
	this.shoe_03.setTransform(20.95,54.7,1,1,0,0,0,39.8,45.5);

	this.timeline.addTween(cjs.Tween.get(this.shoe_03).wait(1));

	// shoe_02
	this.shoe_02 = new lib.shoe_02();
	this.shoe_02.name = "shoe_02";
	this.shoe_02.setTransform(22.55,53.65,1,1,0,0,0,40.4,48.5);

	this.timeline.addTween(cjs.Tween.get(this.shoe_02).wait(1));

	// shoe_01
	this.shoe_01 = new lib.shoe_01();
	this.shoe_01.name = "shoe_01";
	this.shoe_01.setTransform(23.05,71.15,1,1,0,0,0,42.8,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shoe_01).wait(1));

	// sock
	this.foot_sock = new lib.foot_sock();
	this.foot_sock.name = "foot_sock";
	this.foot_sock.setTransform(27.9,37.8,1,1,0,0,0,27.9,37.8);

	this.timeline.addTween(cjs.Tween.get(this.foot_sock).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.foot, new cjs.Rectangle(-25.7,-8.9,93.4,114.30000000000001), null);


(lib.eyebrow_right = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eyebrow_right_brown
	this.eyebrow_right_brown = new lib.eyebrow_right_brown();
	this.eyebrow_right_brown.name = "eyebrow_right_brown";
	this.eyebrow_right_brown.setTransform(17.7,5.4,1,1,0,0,0,17.7,5.4);

	this.timeline.addTween(cjs.Tween.get(this.eyebrow_right_brown).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrow_right, new cjs.Rectangle(0,0,35.4,10.8), null);


(lib.eyebrow_left = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eyebrow_left_brown
	this.eyebrow_left_brown = new lib.eyebrow_left_brown();
	this.eyebrow_left_brown.name = "eyebrow_left_brown";
	this.eyebrow_left_brown.setTransform(17.7,5.4,1,1,0,0,0,17.7,5.4);

	this.timeline.addTween(cjs.Tween.get(this.eyebrow_left_brown).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eyebrow_left, new cjs.Rectangle(0,0,35.4,10.8), null);


(lib.decoration_pants = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// buttons_01
	this.buttons_01 = new lib.pants_decoration_buttons_01();
	this.buttons_01.name = "buttons_01";
	this.buttons_01.setTransform(85.7,15.1,1,1,0,0,0,65.2,15.1);

	this.timeline.addTween(cjs.Tween.get(this.buttons_01).wait(1));

	// ribbons_01
	this.ribbons_01 = new lib.pants_decoration_ribbons_01();
	this.ribbons_01.name = "ribbons_01";
	this.ribbons_01.setTransform(85.7,62.3,1,1,0,0,0,80,24.6);

	this.timeline.addTween(cjs.Tween.get(this.ribbons_01).wait(1));

	// tassels_01
	this.tassels_01 = new lib.pants_decoration_tassels_01();
	this.tassels_01.name = "tassels_01";
	this.tassels_01.setTransform(85.6,55.8,1,1,0,0,0,85.6,16.8);

	this.timeline.addTween(cjs.Tween.get(this.tassels_01).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.decoration_pants, new cjs.Rectangle(-1.4,-1.2,174,102.4), null);


(lib.cuff_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AiOC+QAFACBwgwQBugwBKgkQAKhbAEhIQAEhQgHgFQgIgGifA0QikA2gKAhQgHAWAQBvQAPBtAFADg");
	this.shape.setTransform(-25.7267,6.7796,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill
	this.fill = new lib.cuff_01_fill();
	this.fill.name = "fill";
	this.fill.setTransform(-25.6,7.1,1,1,0,0,0,17.1,18.7);

	this.timeline.addTween(cjs.Tween.get(this.fill).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cuff_01, new cjs.Rectangle(-44.8,-16.4,45.099999999999994,43.8), null);


(lib.collar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// collar_white
	this.collar_white = new lib.collar_white();
	this.collar_white.name = "collar_white";
	this.collar_white.setTransform(39,9.7,1,1,0,0,0,39,9.7);

	this.timeline.addTween(cjs.Tween.get(this.collar_white).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.collar, new cjs.Rectangle(-1.2,-8.9,80.4,37.2), null);


(lib.btn_pants_tassels = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.btn_pants_decoration_tassels_01();
	this.instance.setTransform(-69.5,89.65,0.6774,0.6774,0,0,0,85.6,16.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hitbox
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(247,248,246,0.008)").ss(3,1,1).p("Ak/jhIJNAAQAyAAAAAyIAAGRIpNAAQgyAAAAgyg");
	this.shape.setTransform(-103.225,90.1425,0.851,0.851);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AkNDiQgyAAAAgyIAAmRIJNAAQAyAAAAAyIAAGRg");
	this.shape_1.setTransform(-103.225,90.1425,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_pants_tassels, new cjs.Rectangle(-132,69.5,57.599999999999994,41.400000000000006), null);


(lib.btn_pants_ribbons = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.btn_pants_decoration_ribbons_01();
	this.instance.setTransform(54.2,30.8,0.6774,0.6774,0,0,0,80,24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hitbox
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(247,248,246,0.008)").ss(3,1,1).p("AkekeIILAAQAyAAAAAyIAAILIoLAAQgyAAAAgyg");
	this.shape.setTransform(20.575,33.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AjsEeQgyAAAAgxIAAoLIILAAQAyAAAAAyIAAIKg");
	this.shape_1.setTransform(20.575,33.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_pants_ribbons, new cjs.Rectangle(-9.6,3,60.4,60.3), null);


(lib.btn_pants_buttons = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.btn_pants_decoration_buttons_01();
	this.instance.setTransform(50.2,10.3,0.6774,0.6774,0,0,0,65.3,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hitbox
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(247,248,246,0.008)").ss(3,1,1).p("Ai4i4IE/AAQAyAAAAAyIAAE/Ik/AAQgyAAAAgyg");
	this.shape.setTransform(11.05,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("AiGC5QgyAAAAgyIAAk/IE/AAQAyAAAAAyIAAE/g");
	this.shape_1.setTransform(11.05,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_pants_buttons, new cjs.Rectangle(-8.9,-9.6,40,40), null);


(lib.beard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// beard_gray
	this.beard_gray = new lib.beard_gray();
	this.beard_gray.name = "beard_gray";
	this.beard_gray.setTransform(72.4,56.2,1,1,0,0,0,72.4,56.2);

	this.timeline.addTween(cjs.Tween.get(this.beard_gray).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.beard, new cjs.Rectangle(-7.1,-5.9,159,124.2), null);


(lib.arm_girl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5F1806").ss(2.6,1).p("AgHAuIAPhb");
	this.shape.setTransform(36.85,130.125,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F1806").ss(2.6,1).p("AANAwIgZhf");
	this.shape_1.setTransform(49.975,133.725,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6,1).p("AAQA2Igfhr");
	this.shape_2.setTransform(63.5,135.75,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F1806").ss(2.6).p("AA+JHQAcgbA9iqQBJjVAhhfQBEjAAbitQAljsg6hxQgOgchJgaQhOgcgwASQiaA8hyDQQhJCGgyCqQgoCLgdC3QgRBvgEBNQgGBmANBVQAJA/AWAkQAMAUAWAJQAPAGAgAFQBmgPBCgbQA6gXAZgPQAbgQAcgdg");
	this.shape_3.setTransform(36.6097,71.2133,1,1,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6,1).p("AhCCJICFkR");
	this.shape_4.setTransform(7.125,43.875,1,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F1806").ss(2.6,1).p("ACAhVQhGAmhjBGQgyAjgkAc");
	this.shape_5.setTransform(13.35,24.15,1,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6,1).p("ABegbQgwgBhKAcIhBAd");
	this.shape_6.setTransform(17.075,7.3996,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// fill
	this.fill = new lib.arm_girl_fill();
	this.fill.name = "fill";
	this.fill.setTransform(37.4,70.8,1,1,0,0,0,35.9,70.8);

	this.timeline.addTween(cjs.Tween.get(this.fill).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm_girl, new cjs.Rectangle(-1.7,-4.3,78.60000000000001,147.60000000000002), null);


(lib.arm_boy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AE5K9IgIAAQg4gXhIgYQhkghg/gIQgniFhrlNQhslNgniDQgRg0gKhBQgTiBAjhDQArhSBBAOQAhAIAYAXQBEBTAvBUQArBMAqBsQDAHrAuIOg");
	this.shape.setTransform(31.3511,70.0979);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// fill
	this.fill = new lib.arm_fill();
	this.fill.name = "fill";
	this.fill.setTransform(32.1,81.9,1,1,0,0,0,32.1,81.9);

	this.timeline.addTween(cjs.Tween.get(this.fill).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm_boy, new cjs.Rectangle(-4.7,-1.2,68.8,142.7), null);


(lib.arm = function(mode,startPosition,loop,reversed) {
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
	this.cuff_same = new lib.cuff_same();
	this.cuff_same.name = "cuff_same";
	this.cuff_same.setTransform(51.75,148.9,1,1,0,0,0,24.4,18.4);

	this.timeline.addTween(cjs.Tween.get(this.cuff_same).wait(1));

	// cuff_01
	this.cuff_01 = new lib.cuff_01();
	this.cuff_01.name = "cuff_01";
	this.cuff_01.setTransform(94.6,158.9,1,1,0,0,0,20.8,20);

	this.timeline.addTween(cjs.Tween.get(this.cuff_01).wait(1));

	// girl
	this.arm_girl = new lib.arm_girl();
	this.arm_girl.name = "arm_girl";
	this.arm_girl.setTransform(36.6,66.3,1,1,0,0,0,37.6,69.5);

	this.timeline.addTween(cjs.Tween.get(this.arm_girl).wait(1));

	// boy
	this.arm_boy = new lib.arm_boy();
	this.arm_boy.name = "arm_boy";
	this.arm_boy.setTransform(30.4,82,1,1,0,0,0,30.4,82);

	this.timeline.addTween(cjs.Tween.get(this.arm_boy).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arm, new cjs.Rectangle(-4.7,-7.5,85.60000000000001,176), null);


(lib.apron = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// apron_06
	this.apron_06 = new lib.apron_06();
	this.apron_06.name = "apron_06";
	this.apron_06.setTransform(104.9,103.6,1,1,0,0,0,103.6,102.3);

	this.timeline.addTween(cjs.Tween.get(this.apron_06).wait(1));

	// apron_05
	this.apron_05 = new lib.apron_05();
	this.apron_05.name = "apron_05";
	this.apron_05.setTransform(100.35,97.8,1,1,0,0,0,115.4,96);

	this.timeline.addTween(cjs.Tween.get(this.apron_05).wait(1));

	// apron_04
	this.apron_04 = new lib.apron_4();
	this.apron_04.name = "apron_04";
	this.apron_04.setTransform(97,105.25,1,1,0,0,0,95.7,103.3);

	this.timeline.addTween(cjs.Tween.get(this.apron_04).wait(1));

	// apron_03
	this.apron_03 = new lib.apron_03();
	this.apron_03.name = "apron_03";
	this.apron_03.setTransform(98.05,94.6,1,1,0,0,0,117.7,92.8);

	this.timeline.addTween(cjs.Tween.get(this.apron_03).wait(1));

	// apron_02
	this.apron_02 = new lib.apron_02();
	this.apron_02.name = "apron_02";
	this.apron_02.setTransform(102.1,104.3,1,1,0,0,0,101.8,102.5);

	this.timeline.addTween(cjs.Tween.get(this.apron_02).wait(1));

	// apron_01
	this.apron_01 = new lib.apron_01();
	this.apron_01.name = "apron_01";
	this.apron_01.setTransform(103,100.9,1,1,0,0,0,103,100.9);

	this.timeline.addTween(cjs.Tween.get(this.apron_01).wait(1));

	// apron_same
	this.apron_same = new lib.apron_same();
	this.apron_same.name = "apron_same";
	this.apron_same.setTransform(104.75,116.5,1,1,0,0,0,124.4,126.1);

	this.timeline.addTween(cjs.Tween.get(this.apron_same).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.apron, new cjs.Rectangle(-20.9,-15.5,250,264), null);


(lib.characterai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hat
	this.hat = new lib.hat();
	this.hat.name = "hat";
	this.hat.setTransform(143.05,112.05,1,1,0,0,0,141.8,109);

	this.timeline.addTween(cjs.Tween.get(this.hat).wait(1));

	// hair_front
	this.hair_front = new lib.hair_front();
	this.hair_front.name = "hair_front";
	this.hair_front.setTransform(144.45,173.9,1,1,0,0,0,103.2,41.6);

	this.timeline.addTween(cjs.Tween.get(this.hair_front).wait(1));

	// beard
	this.beard = new lib.beard();
	this.beard.name = "beard";
	this.beard.setTransform(140.35,239.9,1,1,0,0,0,72.4,56.2);

	this.timeline.addTween(cjs.Tween.get(this.beard).wait(1));

	// eyebrow_right
	this.eyebrow_right = new lib.eyebrow_right();
	this.eyebrow_right.name = "eyebrow_right";
	this.eyebrow_right.setTransform(105.65,194.55,1,1,0,0,0,17.7,5.4);

	this.timeline.addTween(cjs.Tween.get(this.eyebrow_right).wait(1));

	// eyebrow_left
	this.eyebrow_left = new lib.eyebrow_left();
	this.eyebrow_left.name = "eyebrow_left";
	this.eyebrow_left.setTransform(180.65,194.55,1,1,0,0,0,17.7,5.4);

	this.timeline.addTween(cjs.Tween.get(this.eyebrow_left).wait(1));

	// eyeRight
	this.eye_right = new lib.eye_right();
	this.eye_right.name = "eye_right";
	this.eye_right.setTransform(106.65,219.2,1,1,0,0,0,20.9,13.5);

	this.timeline.addTween(cjs.Tween.get(this.eye_right).wait(1));

	// eyeLeft
	this.eye_left = new lib.eye_left();
	this.eye_left.name = "eye_left";
	this.eye_left.setTransform(179.2,219.2,1,1,0,0,0,20.9,13.5);

	this.timeline.addTween(cjs.Tween.get(this.eye_left).wait(1));

	// freckles_right
	this.freckles_right = new lib.freckles_right();
	this.freckles_right.name = "freckles_right";
	this.freckles_right.setTransform(116.7,239.75,1,1,0,0,0,8.2,4.8);

	this.timeline.addTween(cjs.Tween.get(this.freckles_right).wait(1));

	// freckles_left
	this.freckles_left = new lib.freckles_left();
	this.freckles_left.name = "freckles_left";
	this.freckles_left.setTransform(168.75,238.25,1,1,0,0,0,8.2,4.8);

	this.timeline.addTween(cjs.Tween.get(this.freckles_left).wait(1));

	// nose
	this.nose = new lib.nose();
	this.nose.name = "nose";
	this.nose.setTransform(142.65,236.15,1,1,0,0,0,10.8,6.2);

	this.timeline.addTween(cjs.Tween.get(this.nose).wait(1));

	// mouth
	this.mouth = new lib.mouth();
	this.mouth.name = "mouth";
	this.mouth.setTransform(142,253.2,1,1,0,0,0,17.3,3.2);

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(1));

	// face
	this.face = new lib.face();
	this.face.name = "face";
	this.face.setTransform(141.05,214.35,1,1,0,0,0,66.8,68.5);

	this.timeline.addTween(cjs.Tween.get(this.face).wait(1));

	// hair_middle_left
	this.hair_middle_left = new lib.hair_middle_left();
	this.hair_middle_left.name = "hair_middle_left";
	this.hair_middle_left.setTransform(209.75,208.8,1,1,0,0,0,34.3,28.8);

	this.timeline.addTween(cjs.Tween.get(this.hair_middle_left).wait(1));

	// hair_middle_right
	this.hair_middle_right = new lib.hair_middle_right();
	this.hair_middle_right.name = "hair_middle_right";
	this.hair_middle_right.setTransform(72.3,201.4,1,1,0,0,0,35.6,30.7);

	this.timeline.addTween(cjs.Tween.get(this.hair_middle_right).wait(1));

	// ear_left
	this.ear_left = new lib.ear_left();
	this.ear_left.name = "ear_left";
	this.ear_left.setTransform(211.05,223.1,1,1,0,0,0,17.6,19.5);

	this.timeline.addTween(cjs.Tween.get(this.ear_left).wait(1));

	// ear_right
	this.ear_right = new lib.ear_right();
	this.ear_right.name = "ear_right";
	this.ear_right.setTransform(72.4,223.2,1,1,0,0,0,16.4,19.6);

	this.timeline.addTween(cjs.Tween.get(this.ear_right).wait(1));

	// collar
	this.collar = new lib.collar();
	this.collar.name = "collar";
	this.collar.setTransform(140.65,296.5,1,1,0,0,0,39,9.7);

	this.timeline.addTween(cjs.Tween.get(this.collar).wait(1));

	// jacket
	this.jacket = new lib.jacket();
	this.jacket.name = "jacket";
	this.jacket.setTransform(140.85,421.95,1,1,0,0,0,78.8,128.2);

	this.timeline.addTween(cjs.Tween.get(this.jacket).wait(1));

	// apron
	this.apron = new lib.apron();
	this.apron.name = "apron";
	this.apron.setTransform(143.1,500.75,1,1,0,0,0,103,100.9);

	this.timeline.addTween(cjs.Tween.get(this.apron).wait(1));

	// shirt
	this.shirt = new lib.shirt();
	this.shirt.name = "shirt";
	this.shirt.setTransform(142.75,384.1,1,1,0,0,0,69.7,90.5);

	this.timeline.addTween(cjs.Tween.get(this.shirt).wait(1));

	// arm_right
	this.arm_right = new lib.arm();
	this.arm_right.name = "arm_right";
	this.arm_right.setTransform(61.9,396.1,1,1,0,0,180,30.4,82);

	this.timeline.addTween(cjs.Tween.get(this.arm_right).wait(1));

	// arm_left
	this.arm_left = new lib.arm();
	this.arm_left.name = "arm_left";
	this.arm_left.setTransform(222.25,396.1,1,1,0,0,0,30.4,82);

	this.timeline.addTween(cjs.Tween.get(this.arm_left).wait(1));

	// neck
	this.neck = new lib.neck();
	this.neck.name = "neck";
	this.neck.setTransform(142.4,291.45,1,1,0,0,0,17.9,26.3);

	this.timeline.addTween(cjs.Tween.get(this.neck).wait(1));

	// hair_bottom
	this.hair_bottom = new lib.hair_bottom();
	this.hair_bottom.name = "hair_bottom";
	this.hair_bottom.setTransform(138.65,222.95,1,1,0,0,0,88.8,57.1);

	this.timeline.addTween(cjs.Tween.get(this.hair_bottom).wait(1));

	// hair_behind
	this.hair_behind = new lib.hair_behind();
	this.hair_behind.name = "hair_behind";
	this.hair_behind.setTransform(134.2,158.85,1,1,0,0,0,104.5,60.9);

	this.timeline.addTween(cjs.Tween.get(this.hair_behind).wait(1));

	// decoration_pants
	this.decoration_pants = new lib.decoration_pants();
	this.decoration_pants.name = "decoration_pants";
	this.decoration_pants.setTransform(140.5,620.8,1,1,0,0,0,85.6,50);

	this.timeline.addTween(cjs.Tween.get(this.decoration_pants).wait(1));

	// foot_right
	this.foot_right = new lib.foot();
	this.foot_right.name = "foot_right";
	this.foot_right.setTransform(88.25,669.55,1,1,0,0,0,27.9,37.8);

	this.timeline.addTween(cjs.Tween.get(this.foot_right).wait(1));

	// foot_left
	this.foot_left = new lib.foot();
	this.foot_left.name = "foot_left";
	this.foot_left.setTransform(195.1,669.55,1,1,0,0,180,27.9,37.8);

	this.timeline.addTween(cjs.Tween.get(this.foot_left).wait(1));

	// pants
	this.pants = new lib.pants();
	this.pants.name = "pants";
	this.pants.setTransform(141.2,558.9,1,1,0,0,0,71.2,128.1);

	this.timeline.addTween(cjs.Tween.get(this.pants).wait(1));

	// hand_right
	this.hand_right = new lib.hand();
	this.hand_right.name = "hand_right";
	this.hand_right.setTransform(44.1,487.7,1,1,0,0,0,15.9,33.1);

	this.timeline.addTween(cjs.Tween.get(this.hand_right).wait(1));

	// hand_left
	this.hand_left = new lib.hand();
	this.hand_left.name = "hand_left";
	this.hand_left.setTransform(239.55,487.7,1,1,0,0,180,15.9,33.1);

	this.timeline.addTween(cjs.Tween.get(this.hand_left).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.7,-0.7,380.4,737.9000000000001);


(lib.btn_jacket_short = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AAhADQgCAZgMAQQgMARgMgCQgOgBgIgTQgIgSADgYQADgZALgPQAMgRANACQAOABAHATQAIASgDAXg");
	this.shape.setTransform(21.2403,119.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F49C3B").s().p("AgFA8QgOgDgIgSQgIgTADgXQADgZALgPQAMgRANABQAOACAHATQAIASgDAXQgCAZgMARQgLAPgLAAIgCAAg");
	this.shape_1.setTransform(21.2403,119.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6).p("AAHg6QAOABAHATQAIASgDAXQgCAZgMAQQgMARgMgCQgOgBgIgTQgIgSADgYQADgZALgPQAMgRANACg");
	this.shape_2.setTransform(21.2403,119.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F49C3B").s().p("AgFA8QgOgDgIgSQgIgTADgXQADgZALgPQAMgRANABQAOACAHATQAIASgDAXQgCAZgMARQgLAPgLAAIgCAAg");
	this.shape_3.setTransform(21.2403,119.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6).p("AAmAEQgCAZgNAQQgNAQgPgCQgQgBgJgTQgKgSACgYQADgZANgQQANgQAPACQAQABAJATQAKASgDAYg");
	this.shape_4.setTransform(18.3087,138.5706);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F49C3B").s().p("AgFA7QgQgBgJgTQgKgSACgYQADgZANgQQANgQAPACQAQABAJATQAKASgDAYQgCAZgNAQQgMAOgNAAIgDAAg");
	this.shape_5.setTransform(18.3087,138.5706);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6).p("AAGg6QAQABAJATQAKASgDAYQgCAZgNAQQgNAQgPgCQgQgBgJgTQgKgSACgYQADgZANgQQANgQAPACg");
	this.shape_6.setTransform(18.3087,138.5706);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F49C3B").s().p("AgFA7QgQgBgJgTQgKgSACgYQADgZANgQQANgQAPACQAQABAJATQAKASgDAYQgCAZgNAQQgMAOgNAAIgDAAg");
	this.shape_7.setTransform(18.3087,138.5706);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6).p("AAtABQAAAZgOARQgNARgSAAQgSAAgOgSQgNgRABgZQAAgYAOgRQANgSASAAQASABANARQANASAAAYg");
	this.shape_8.setTransform(15.6241,159.5257);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F49C3B").s().p("AAAA8QgSAAgOgSQgNgRABgZQAAgYAOgRQANgSASAAQASABANARQANASAAAYQAAAZgOARQgNARgSAAIAAAAg");
	this.shape_9.setTransform(15.6241,159.5257);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6).p("AABg7QASABANARQANASAAAYQAAAZgOARQgNARgSAAQgSAAgOgSQgNgRABgZQAAgYAOgRQANgSASAAg");
	this.shape_10.setTransform(15.6241,159.5257);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F49C3B").s().p("AAAA8QgSAAgOgSQgNgRABgZQAAgYAOgRQANgSASAAQASABANARQANASAAAYQAAAZgOARQgNARgSAAIAAAAg");
	this.shape_11.setTransform(15.6241,159.5257);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(2.6).p("AiXq4IgDACQgVAPglAfQgQAOAKBhQAIBZAUBKQAMAtAaBYQAVBOAIA5QAPBugKB1QgKBygiBuQgWBIgwCKQgoB6gLBdIAVASQAbAVAdASQBfA6BbACQADhkAIiXQANkuAVkBQAdl7AmjiQAditA7hWQAigyBMgx");
	this.shape_12.setTransform(28.3728,88.8853);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5F1806").ss(2.6).p("ADrniIgGAAQghACgxANQgeAHg5ASQgDABioArQhyAcgCANQgCAKANA7QATBYAYBSQAbBfALgBQATgCApgaQAigVAJAIQAGAHgxBBQg1BHAKAeQAWBJAbBvQAkCVgDAqIgBAG");
	this.shape_13.setTransform(34.5422,48.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFF1EC").s().p("AhOLbQgegSgbgVIgUgSQALhdAnh6QAxiKAWhIQAhhuAJhyQAKh0gPhvQgGg5gVhOQgahYgMgtQgUhKgJhZQgJhhAQgOQAkgfAVgPQATBYAXBSQAbBfALgBQATgCApgaQAigVAJAJQAGAGgxBCQg1BHAKAfQAWBJAbBuQAkCWgDApIAAAAQgUEAgPEuQgHCXgEBkQhagCheg6g");
	this.shape_14.setTransform(15.6327,98.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFF1EC").s().p("AgkHjQADgqgkiVQgbhugWhKQgKgeA1hHQAxhBgGgGQgJgKgiAWQgpAagTACQgLABgbhfQgYhSgThYQgNg7ACgKQACgMBygdICrgsQA5gSAegHQAxgNAhgCIAAACQhMAxgiAyQg7BVgdCuQglDhgeF8g");
	this.shape_15.setTransform(34.5422,48.3);

	this.instance = new lib.arm();
	this.instance.setTransform(-7.15,106.9,1,1,0,0,180,30.4,82);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_jacket_short, new cjs.Rectangle(-57.6,-1.2,116.9,194.6), null);


(lib.btn_jacket_long = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#5F1806").ss(2.6).p("AAhADQgCAZgMAQQgMARgMgCQgOgBgIgTQgIgSADgYQADgZALgPQAMgRANACQAOABAHATQAIASgDAXg");
	this.shape.setTransform(25.5903,119.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F49C3B").s().p("AgFA8QgOgDgIgSQgIgTADgXQADgZALgPQAMgRANABQAOACAHATQAIASgDAXQgCAZgMARQgLAPgLAAIgCAAg");
	this.shape_1.setTransform(25.5903,119.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F1806").ss(2.6).p("AAHg6QAOABAHATQAIASgDAXQgCAZgMAQQgMARgMgCQgOgBgIgTQgIgSADgYQADgZALgPQAMgRANACg");
	this.shape_2.setTransform(25.5903,119.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F49C3B").s().p("AgFA8QgOgDgIgSQgIgTADgXQADgZALgPQAMgRANABQAOACAHATQAIASgDAXQgCAZgMARQgLAPgLAAIgCAAg");
	this.shape_3.setTransform(25.5903,119.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F1806").ss(2.6).p("AAmAEQgCAZgNAQQgNAQgPgCQgQgBgJgTQgKgSACgYQADgZANgQQANgQAPACQAQABAJATQAKASgDAYg");
	this.shape_4.setTransform(22.6587,138.5706);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F49C3B").s().p("AgFA7QgQgBgJgTQgKgSACgYQADgZANgQQANgQAPACQAQABAJATQAKASgDAYQgCAZgNAQQgMAOgNAAIgDAAg");
	this.shape_5.setTransform(22.6587,138.5706);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F1806").ss(2.6).p("AAGg6QAQABAJATQAKASgDAYQgCAZgNAQQgNAQgPgCQgQgBgJgTQgKgSACgYQADgZANgQQANgQAPACg");
	this.shape_6.setTransform(22.6587,138.5706);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F49C3B").s().p("AgFA7QgQgBgJgTQgKgSACgYQADgZANgQQANgQAPACQAQABAJATQAKASgDAYQgCAZgNAQQgMAOgNAAIgDAAg");
	this.shape_7.setTransform(22.6587,138.5706);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5F1806").ss(2.6).p("AAtABQAAAZgOARQgNARgSAAQgSAAgOgSQgNgRABgZQAAgYAOgRQANgSASAAQASABANARQANASAAAYg");
	this.shape_8.setTransform(19.9741,159.5257);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F49C3B").s().p("AAAA8QgSAAgOgSQgNgRABgZQAAgYAOgRQANgSASAAQASABANARQANASAAAYQAAAZgOARQgNARgSAAIAAAAg");
	this.shape_9.setTransform(19.9741,159.5257);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5F1806").ss(2.6).p("AABg7QASABANARQANASAAAYQAAAZgOARQgNARgSAAQgSAAgOgSQgNgRABgZQAAgYAOgRQANgSASAAg");
	this.shape_10.setTransform(19.9741,159.5257);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F49C3B").s().p("AAAA8QgSAAgOgSQgNgRABgZQAAgYAOgRQANgSASAAQASABANARQANASAAAYQAAAZgOARQgNARgSAAIAAAAg");
	this.shape_11.setTransform(19.9741,159.5257);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#5F1806").ss(2.6).p("AiBwSIgFADQgJAGgQAJQgOAKgRAPQgQAOAJBlQAJBeAUBJQAMAtAaBZQAVBOAHA5QAPBvgKB0QgKBzghBsQgVBDgtCBQgmBzgNBTQAAADgVB2QgVCLgEByQgFBnALB9QAFA+AFAtIASATQAXAWAbAUQBVA9BaACQgBiOACihQAElBALheQAGgxAVj3QAYksARiwQAmmOAkjTQAdiuA7hVQAigyBMgx");
	this.shape_12.setTransform(30.5904,123.1144);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5F1806").ss(2.6).p("ADrnkIgGAAQghACgxANQgeAIg5ARQgDABioArQhyAdgCAMQgCAHAMA7QATBZAYBSQAcBhALgBQATgCApgaQAigVAJAJQAGAGgxBBQg1BHAKAfQATA/AbB7QAhCXgEApIgBAF");
	this.shape_13.setTransform(38.8917,48.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EFF1EC").s().p("AhcQvQgbgTgXgWIgRgUQgGgsgFg+QgKh+AEhnQAFhxAViMIAUh4QAOhTAlhzQAuiAAUhDQAhhuAKhyQAKh1gPhuQgIg5gUhOQgahZgMgtQgThKgJheQgKhkAQgOQARgQAPgJIAZgQQASBaAXBRQAcBhALAAQATgCAqgaQAigWAIAJQAGAGgxBCQg0BHAJAfQAUBAAbB6QAhCXgFApIABAAQgRCvgZEtQgUD3gGAwQgMBegDFCQgCChAACNQhZgBhVg+g");
	this.shape_14.setTransform(17.8152,132.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFF1EC").s().p("AgrHlQAEgpghiXQgbh7gTg/QgKgfA1hHQAxhBgGgGQgJgJgiAVQgpAagTACQgLABgchhQgYhSgThZQgMg7ACgHQACgMBygdICrgsQA5gRAegIQAxgNAhgCIAAACQhMAxgiAyQg7BWgdCtQgjDSgmGPg");
	this.shape_15.setTransform(38.8917,48.475);

	this.instance = new lib.arm();
	this.instance.setTransform(-0.95,103.8,1,1,0,0,180,30.4,82);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_jacket_long, new cjs.Rectangle(-51.4,-1.2,115,248.5), null);


(lib.scene = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {boy:1,girl:2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_2
	this.btn_girl = new lib.btn_girl();
	this.btn_girl.name = "btn_girl";
	this.btn_girl.setTransform(376.95,397.8,1,1,0,0,0,128.9,128.9);

	this.btn_boy = new lib.btn_boy();
	this.btn_boy.name = "btn_boy";
	this.btn_boy.setTransform(707.15,407.65,1,1,0,0,0,128.9,128.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_boy},{t:this.btn_girl}]}).to({state:[]},1).wait(2));

	// btn_navigation
	this.btn_back = new lib.btn_back();
	this.btn_back.name = "btn_back";
	this.btn_back.setTransform(112,44,1,1,0,0,0,112,36);
	this.btn_back.visible = false;

	this.btn_reset_boy = new lib.btn_reset();
	this.btn_reset_boy.name = "btn_reset_boy";
	this.btn_reset_boy.setTransform(915,704.3,1,1,0,0,0,94.5,31.5);
	this.btn_reset_boy.visible = false;
	new cjs.ButtonHelper(this.btn_reset_boy, 0, 1, 1);

	this.btn_reset_girl = new lib.btn_reset();
	this.btn_reset_girl.name = "btn_reset_girl";
	this.btn_reset_girl.setTransform(749.35,704.3,1,1,0,0,0,94.5,31.5);
	this.btn_reset_girl.visible = false;
	new cjs.ButtonHelper(this.btn_reset_girl, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_reset_girl,p:{x:749.35,visible:false}},{t:this.btn_reset_boy,p:{x:915,visible:false}},{t:this.btn_back,p:{x:112,y:44,visible:false}}]}).to({state:[{t:this.btn_reset_boy,p:{x:881,visible:true}},{t:this.btn_back,p:{x:96,y:34,visible:true}}]},1).to({state:[{t:this.btn_reset_boy,p:{x:881,visible:true}},{t:this.btn_reset_girl,p:{x:881,visible:true}},{t:this.btn_back,p:{x:96,y:34,visible:true}}]},1).wait(1));

	// btn
	this.btn_shoe_boy_01 = new lib.shoe_01();
	this.btn_shoe_boy_01.name = "btn_shoe_boy_01";
	this.btn_shoe_boy_01.setTransform(-81.25,629.8,1,1,0,0,0,42.8,23.9);
	new cjs.ButtonHelper(this.btn_shoe_boy_01, 0, 1, 1);

	this.btn_shoe_boy_02 = new lib.shoe_02();
	this.btn_shoe_boy_02.name = "btn_shoe_boy_02";
	this.btn_shoe_boy_02.setTransform(-95.25,757.4,1,1,0,0,0,40.4,48.5);
	new cjs.ButtonHelper(this.btn_shoe_boy_02, 0, 1, 1);

	this.btn_shoe_boy_03 = new lib.shoe_03();
	this.btn_shoe_boy_03.name = "btn_shoe_boy_03";
	this.btn_shoe_boy_03.setTransform(-90,1021.1,1,1,0,0,0,39.8,45.5);
	new cjs.ButtonHelper(this.btn_shoe_boy_03, 0, 1, 1);

	this.btn_shoe_boy_04 = new lib.shoe_04();
	this.btn_shoe_boy_04.name = "btn_shoe_boy_04";
	this.btn_shoe_boy_04.setTransform(-93.3,887.85,1,1,0,0,0,36.5,45.4);
	new cjs.ButtonHelper(this.btn_shoe_boy_04, 0, 1, 1);

	this.btn_pants_white = new lib.btn_white();
	this.btn_pants_white.name = "btn_pants_white";
	this.btn_pants_white.setTransform(67.7,697.35,0.5429,0.5429,0,0,0,39.8,26.5);
	this.btn_pants_white.visible = false;
	new cjs.ButtonHelper(this.btn_pants_white, 0, 1, 1);

	this.btn_apron_same = new lib.apron_same();
	this.btn_apron_same.name = "btn_apron_same";
	this.btn_apron_same.setTransform(452.95,829.65,0.6469,0.6469,0,0,0,124.5,126.2);
	this.btn_apron_same.visible = false;
	new cjs.ButtonHelper(this.btn_apron_same, 0, 1, 1);

	this.btn_apron_06 = new lib.apron_06();
	this.btn_apron_06.name = "btn_apron_06";
	this.btn_apron_06.setTransform(626.7,768.15,0.6469,0.6469,0,0,0,103.7,102.5);
	this.btn_apron_06.visible = false;
	new cjs.ButtonHelper(this.btn_apron_06, 0, 1, 1);

	this.btn_apron_05 = new lib.apron_05();
	this.btn_apron_05.name = "btn_apron_05";
	this.btn_apron_05.setTransform(778.35,776.8,0.6469,0.6469,0,0,0,115.4,96);
	this.btn_apron_05.visible = false;
	new cjs.ButtonHelper(this.btn_apron_05, 0, 1, 1);

	this.btn_apron_04 = new lib.apron_4();
	this.btn_apron_04.name = "btn_apron_04";
	this.btn_apron_04.setTransform(940.85,791.65,0.6469,0.6469,0,0,0,95.9,103.5);
	this.btn_apron_04.visible = false;
	new cjs.ButtonHelper(this.btn_apron_04, 0, 1, 1);

	this.btn_apron_03 = new lib.apron_03();
	this.btn_apron_03.name = "btn_apron_03";
	this.btn_apron_03.setTransform(740.9,946.2,0.6469,0.6469,0,0,0,117.8,92.8);
	this.btn_apron_03.visible = false;
	new cjs.ButtonHelper(this.btn_apron_03, 0, 1, 1);

	this.btn_apron_02 = new lib.apron_02();
	this.btn_apron_02.name = "btn_apron_02";
	this.btn_apron_02.setTransform(1071.5,960.8,0.6469,0.6469,0,0,0,101.8,102.5);
	this.btn_apron_02.visible = false;
	new cjs.ButtonHelper(this.btn_apron_02, 0, 1, 1);

	this.btn_apron_01 = new lib.apron_01();
	this.btn_apron_01.name = "btn_apron_01";
	this.btn_apron_01.setTransform(903.35,965.55,0.6469,0.6469,0,0,0,103,101);
	this.btn_apron_01.visible = false;
	new cjs.ButtonHelper(this.btn_apron_01, 0, 1, 1);

	this.btn_hat_10 = new lib.hat_10();
	this.btn_hat_10.name = "btn_hat_10";
	this.btn_hat_10.setTransform(-173.05,100.5,0.6585,0.659,0,0,0,106.2,111.8);
	this.btn_hat_10.visible = false;
	new cjs.ButtonHelper(this.btn_hat_10, 0, 1, 1);

	this.btn_hat_09 = new lib.hat_09();
	this.btn_hat_09.name = "btn_hat_09";
	this.btn_hat_09.setTransform(-178.6,212.1,0.6606,0.6608,0,0,0,81.9,68.5);
	this.btn_hat_09.visible = false;
	new cjs.ButtonHelper(this.btn_hat_09, 0, 1, 1);

	this.btn_hat_08 = new lib.hat_08();
	this.btn_hat_08.name = "btn_hat_08";
	this.btn_hat_08.setTransform(-164.35,656.35,0.6148,0.6151,0,0,0,111.2,250.3);
	this.btn_hat_08.visible = false;
	new cjs.ButtonHelper(this.btn_hat_08, 0, 1, 1);

	this.btn_hat_07 = new lib.hat_07();
	this.btn_hat_07.name = "btn_hat_07";
	this.btn_hat_07.setTransform(-157.9,333.7,0.6027,0.6028,0,0,0,171.2,100);
	this.btn_hat_07.visible = false;
	new cjs.ButtonHelper(this.btn_hat_07, 0, 1, 1);

	this.btn_hat_06 = new lib.hat_06();
	this.btn_hat_06.name = "btn_hat_06";
	this.btn_hat_06.setTransform(-169.7,439.15,0.5544,0.5546,0,0,0,188.2,75.3);
	this.btn_hat_06.visible = false;
	new cjs.ButtonHelper(this.btn_hat_06, 0, 1, 1);

	this.btn_shirt_same = new lib.shirt_same();
	this.btn_shirt_same.name = "btn_shirt_same";
	this.btn_shirt_same.setTransform(981.3,577.75,0.6934,0.6932,0,0,0,64.5,83.9);
	this.btn_shirt_same.visible = false;
	new cjs.ButtonHelper(this.btn_shirt_same, 0, 1, 1);

	this.btn_shirt_07 = new lib.shirt_07();
	this.btn_shirt_07.name = "btn_shirt_07";
	this.btn_shirt_07.setTransform(1259.8,715.25,0.6978,0.6975,0,0,0,66.7,83.5);
	this.btn_shirt_07.visible = false;
	new cjs.ButtonHelper(this.btn_shirt_07, 0, 1, 1);

	this.btn_shirt_08 = new lib.shirt_08();
	this.btn_shirt_08.name = "btn_shirt_08";
	this.btn_shirt_08.setTransform(1142.9,715.85,0.6923,0.692,0,0,0,69.8,83.5);
	this.btn_shirt_08.visible = false;
	new cjs.ButtonHelper(this.btn_shirt_08, 0, 1, 1);

	this.btn_shirt_09 = new lib.shirt_09();
	this.btn_shirt_09.name = "btn_shirt_09";
	this.btn_shirt_09.setTransform(1259.7,576.35,0.6965,0.6963,0,0,0,66.7,83.5);
	this.btn_shirt_09.visible = false;
	new cjs.ButtonHelper(this.btn_shirt_09, 0, 1, 1);

	this.btn_shirt_10 = new lib.shirt_10();
	this.btn_shirt_10.name = "btn_shirt_10";
	this.btn_shirt_10.setTransform(1132.45,577.3,0.696,0.6958,0,0,0,66.8,83.5);
	this.btn_shirt_10.visible = false;
	new cjs.ButtonHelper(this.btn_shirt_10, 0, 1, 1);

	this.btn_shirt_11 = new lib.shirt_11();
	this.btn_shirt_11.name = "btn_shirt_11";
	this.btn_shirt_11.setTransform(1257.85,438.9,0.6975,0.6974,0,0,0,66.8,83.5);
	this.btn_shirt_11.visible = false;
	new cjs.ButtonHelper(this.btn_shirt_11, 0, 1, 1);

	this.btn_shirt_12 = new lib.shirt_12();
	this.btn_shirt_12.name = "btn_shirt_12";
	this.btn_shirt_12.setTransform(1131,435.85,0.6962,0.696,0,0,0,69.5,84.2);
	this.btn_shirt_12.visible = false;
	new cjs.ButtonHelper(this.btn_shirt_12, 0, 1, 1);

	this.btn_hair_brown_braids_girl = new lib.btn_brown();
	this.btn_hair_brown_braids_girl.name = "btn_hair_brown_braids_girl";
	this.btn_hair_brown_braids_girl.setTransform(81.45,268.95,0.5986,0.5986,0,0,0,39.6,39.6);
	this.btn_hair_brown_braids_girl.visible = false;
	new cjs.ButtonHelper(this.btn_hair_brown_braids_girl, 0, 1, 1);

	this.btn_hair_blond__braids_girl = new lib.btn_yellow();
	this.btn_hair_blond__braids_girl.name = "btn_hair_blond__braids_girl";
	this.btn_hair_blond__braids_girl.setTransform(11.6,268.95,0.5986,0.5986,0,0,0,39.6,39.6);
	this.btn_hair_blond__braids_girl.visible = false;
	new cjs.ButtonHelper(this.btn_hair_blond__braids_girl, 0, 1, 1);

	this.btn_hair_brown_straight_girl = new lib.btn_brown();
	this.btn_hair_brown_straight_girl.name = "btn_hair_brown_straight_girl";
	this.btn_hair_brown_straight_girl.setTransform(81.45,193.95,0.5986,0.5986,0,0,0,39.6,39.6);
	this.btn_hair_brown_straight_girl.visible = false;
	new cjs.ButtonHelper(this.btn_hair_brown_straight_girl, 0, 1, 1);

	this.btn_hair_blond_straight_girl = new lib.btn_yellow();
	this.btn_hair_blond_straight_girl.name = "btn_hair_blond_straight_girl";
	this.btn_hair_blond_straight_girl.setTransform(11.6,193.95,0.5986,0.5986,0,0,0,39.6,39.6);
	this.btn_hair_blond_straight_girl.visible = false;
	new cjs.ButtonHelper(this.btn_hair_blond_straight_girl, 0, 1, 1);

	this.btn_pants_blue = new lib.btn_blue();
	this.btn_pants_blue.name = "btn_pants_blue";
	this.btn_pants_blue.setTransform(105.75,628.2,0.5432,0.5432,0,0,0,39.6,39.6);
	this.btn_pants_blue.visible = false;
	new cjs.ButtonHelper(this.btn_pants_blue, 0, 1, 1);

	this.btn_pants_black = new lib.btn_black();
	this.btn_pants_black.name = "btn_pants_black";
	this.btn_pants_black.setTransform(32.2,707.45,0.5432,0.5432,0,0,0,39.8,39.6);
	this.btn_pants_black.visible = false;
	new cjs.ButtonHelper(this.btn_pants_black, 0, 1, 1);

	this.btn_pants_brown = new lib.btn_brown();
	this.btn_pants_brown.name = "btn_pants_brown";
	this.btn_pants_brown.setTransform(110.6,707.55,0.5432,0.5432,0,0,0,39.6,39.8);
	this.btn_pants_brown.visible = false;
	new cjs.ButtonHelper(this.btn_pants_brown, 0, 1, 1);

	this.btn_pants_yellow = new lib.btn_yellow();
	this.btn_pants_yellow.name = "btn_pants_yellow";
	this.btn_pants_yellow.setTransform(32.2,627.85,0.5432,0.5432,0,0,0,39.8,39.6);
	this.btn_pants_yellow.visible = false;
	new cjs.ButtonHelper(this.btn_pants_yellow, 0, 1, 1);

	this.btn_pants_ribbons = new lib.btn_pants_ribbons();
	this.btn_pants_ribbons.name = "btn_pants_ribbons";
	this.btn_pants_ribbons.setTransform(615.05,674.15,1.2757,1.2757,0,0,0,23.6,26.2);
	this.btn_pants_ribbons.visible = false;
	new cjs.ButtonHelper(this.btn_pants_ribbons, 0, 1, 1);

	this.btn_pants_tassels = new lib.btn_pants_tassels();
	this.btn_pants_tassels.name = "btn_pants_tassels";
	this.btn_pants_tassels.setTransform(818.7,590.75,1.2757,1.2757,0,0,0,58,72);
	this.btn_pants_tassels.visible = false;
	new cjs.ButtonHelper(this.btn_pants_tassels, 0, 1, 1);

	this.btn_pants_buttons = new lib.btn_pants_buttons();
	this.btn_pants_buttons.name = "btn_pants_buttons";
	this.btn_pants_buttons.setTransform(620.05,573.2,1.2757,1.2757,0,0,0,14.6,20.5);
	this.btn_pants_buttons.visible = false;
	new cjs.ButtonHelper(this.btn_pants_buttons, 0, 1, 1);

	this.btn_pants_neutral = new lib.pants_neutral();
	this.btn_pants_neutral.name = "btn_pants_neutral";
	this.btn_pants_neutral.setTransform(925.9,111.4,0.698,0.698,0,0,0,71.7,102);
	this.btn_pants_neutral.visible = false;
	new cjs.ButtonHelper(this.btn_pants_neutral, 0, 1, 1);

	this.btn_jacket_green = new lib.btn_green();
	this.btn_jacket_green.name = "btn_jacket_green";
	this.btn_jacket_green.setTransform(107.7,503.45,0.5911,0.5911,0,0,0,39.6,39.6);
	this.btn_jacket_green.visible = false;
	new cjs.ButtonHelper(this.btn_jacket_green, 0, 1, 1);

	this.btn_jacket_black = new lib.btn_black();
	this.btn_jacket_black.name = "btn_jacket_black";
	this.btn_jacket_black.setTransform(28.85,406.4,0.5911,0.5911,0,0,0,39.6,39.6);
	this.btn_jacket_black.visible = false;
	new cjs.ButtonHelper(this.btn_jacket_black, 0, 1, 1);

	this.btn_jacket_blue = new lib.btn_blue();
	this.btn_jacket_blue.name = "btn_jacket_blue";
	this.btn_jacket_blue.setTransform(28.85,502.9,0.5911,0.5911,0,0,0,39.6,39.6);
	this.btn_jacket_blue.visible = false;
	new cjs.ButtonHelper(this.btn_jacket_blue, 0, 1, 1);

	this.btn_jacket_brown = new lib.btn_brown();
	this.btn_jacket_brown.name = "btn_jacket_brown";
	this.btn_jacket_brown.setTransform(104.7,406.4,0.5911,0.5911,0,0,0,39.6,39.6);
	this.btn_jacket_brown.visible = false;
	new cjs.ButtonHelper(this.btn_jacket_brown, 0, 1, 1);

	this.btn_jacket_long = new lib.btn_jacket_long();
	this.btn_jacket_long.name = "btn_jacket_long";
	this.btn_jacket_long.setTransform(788.7,118.4,0.7976,0.7976,0,0,0,79,128.4);
	this.btn_jacket_long.visible = false;
	new cjs.ButtonHelper(this.btn_jacket_long, 0, 1, 1);

	this.btn_jacket_short = new lib.btn_jacket_short();
	this.btn_jacket_short.name = "btn_jacket_short";
	this.btn_jacket_short.setTransform(873.15,111.35,0.7976,0.7976,0,0,0,75.2,89.2);
	this.btn_jacket_short.visible = false;
	new cjs.ButtonHelper(this.btn_jacket_short, 0, 1, 1);

	this.btn_shirt_06 = new lib.shirt_06();
	this.btn_shirt_06.name = "btn_shirt_06";
	this.btn_shirt_06.setTransform(924.65,433.65,0.6922,0.6922,0,0,0,70.5,86.2);
	this.btn_shirt_06.visible = false;
	new cjs.ButtonHelper(this.btn_shirt_06, 0, 1, 1);

	this.btn_shirt_05 = new lib.shirt_05();
	this.btn_shirt_05.name = "btn_shirt_05";
	this.btn_shirt_05.setTransform(781.8,575.35,0.6922,0.6922,0,0,0,70.5,91);
	this.btn_shirt_05.visible = false;
	new cjs.ButtonHelper(this.btn_shirt_05, 0, 1, 1);

	this.btn_shirt_04 = new lib.shirt_04();
	this.btn_shirt_04.name = "btn_shirt_04";
	this.btn_shirt_04.setTransform(781.7,435.95,0.6922,0.6922,0,0,0,70.9,84.8);
	this.btn_shirt_04.visible = false;
	new cjs.ButtonHelper(this.btn_shirt_04, 0, 1, 1);

	this.btn_shirt_03 = new lib.shirt_03();
	this.btn_shirt_03.name = "btn_shirt_03";
	this.btn_shirt_03.setTransform(922.5,294.25,0.6922,0.6922,0,0,0,67.4,92.2);
	this.btn_shirt_03.visible = false;
	new cjs.ButtonHelper(this.btn_shirt_03, 0, 1, 1);

	this.btn_shirt_02 = new lib.shirt_02();
	this.btn_shirt_02.name = "btn_shirt_02";
	this.btn_shirt_02.setTransform(779.75,292.4,0.6922,0.6922,0,0,0,67.1,83.6);
	this.btn_shirt_02.visible = false;
	new cjs.ButtonHelper(this.btn_shirt_02, 0, 1, 1);

	this.btn_shirt_01 = new lib.shirt_01();
	this.btn_shirt_01.name = "btn_shirt_01";
	this.btn_shirt_01.setTransform(924.3,572.55,0.6922,0.6922,0,0,0,70,86.2);
	this.btn_shirt_01.visible = false;
	new cjs.ButtonHelper(this.btn_shirt_01, 0, 1, 1);

	this.btn_hair_brown = new lib.btn_brown();
	this.btn_hair_brown.name = "btn_hair_brown";
	this.btn_hair_brown.setTransform(93.55,268.95,0.5986,0.5986,0,0,0,39.6,39.6);
	this.btn_hair_brown.visible = false;
	new cjs.ButtonHelper(this.btn_hair_brown, 0, 1, 1);

	this.btn_hair_gray = new lib.btn_gray();
	this.btn_hair_gray.name = "btn_hair_gray";
	this.btn_hair_gray.setTransform(18.65,268.95,0.5986,0.5986,0,0,0,39.5,39.6);
	this.btn_hair_gray.visible = false;
	new cjs.ButtonHelper(this.btn_hair_gray, 0, 1, 1);

	this.btn_hair_blond = new lib.btn_yellow();
	this.btn_hair_blond.name = "btn_hair_blond";
	this.btn_hair_blond.setTransform(55.95,200.5,0.5986,0.5986,0,0,0,39.6,39.6);
	this.btn_hair_blond.visible = false;
	new cjs.ButtonHelper(this.btn_hair_blond, 0, 1, 1);

	this.btn_hat_01 = new lib.hat_01();
	this.btn_hat_01.name = "btn_hat_01";
	this.btn_hat_01.setTransform(610.2,280.9,0.6142,0.6142,0,0,0,72.5,75.5);
	this.btn_hat_01.visible = false;
	new cjs.ButtonHelper(this.btn_hat_01, 0, 1, 1);

	this.btn_hat_02 = new lib.hat_02();
	this.btn_hat_02.name = "btn_hat_02";
	this.btn_hat_02.setTransform(610.15,492.95,0.6142,0.6142,0,0,0,142.1,71.5);
	this.btn_hat_02.visible = false;
	new cjs.ButtonHelper(this.btn_hat_02, 0, 1, 1);

	this.btn_hat_03 = new lib.hat_03();
	this.btn_hat_03.name = "btn_hat_03";
	this.btn_hat_03.setTransform(607.6,164.75,0.6142,0.6142,0,0,0,81.9,91.6);
	this.btn_hat_03.visible = false;
	new cjs.ButtonHelper(this.btn_hat_03, 0, 1, 1);

	this.btn_hat_04 = new lib.hat_04();
	this.btn_hat_04.name = "btn_hat_04";
	this.btn_hat_04.setTransform(607.55,48.3,0.6142,0.6142,0,0,0,111.5,87);
	this.btn_hat_04.visible = false;
	new cjs.ButtonHelper(this.btn_hat_04, 0, 1, 1);

	this.btn_hat_05 = new lib.hat_05();
	this.btn_hat_05.name = "btn_hat_05";
	this.btn_hat_05.setTransform(1008.65,646,0.6142,0.6142,0,0,0,737.4,495.6);
	this.btn_hat_05.visible = false;
	new cjs.ButtonHelper(this.btn_hat_05, 0, 1, 1);

	this.btn_hair_brown_braids = new lib.btn_brown();
	this.btn_hair_brown_braids.name = "btn_hair_brown_braids";
	this.btn_hair_brown_braids.setTransform(93.55,283.4,0.5986,0.5986,0,0,0,39.6,39.6);
	new cjs.ButtonHelper(this.btn_hair_brown_braids, 0, 1, 1);

	this.btn_hair_blond_braids = new lib.btn_yellow();
	this.btn_hair_blond_braids.name = "btn_hair_blond_braids";
	this.btn_hair_blond_braids.setTransform(23.7,283.4,0.5986,0.5986,0,0,0,39.6,39.6);
	new cjs.ButtonHelper(this.btn_hair_blond_braids, 0, 1, 1);

	this.btn_hair_brown_straight = new lib.btn_brown();
	this.btn_hair_brown_straight.name = "btn_hair_brown_straight";
	this.btn_hair_brown_straight.setTransform(93.55,208.4,0.5986,0.5986,0,0,0,39.6,39.6);
	new cjs.ButtonHelper(this.btn_hair_brown_straight, 0, 1, 1);

	this.btn_hair_blond_straight = new lib.btn_yellow();
	this.btn_hair_blond_straight.name = "btn_hair_blond_straight";
	this.btn_hair_blond_straight.setTransform(23.7,208.4,0.5986,0.5986,0,0,0,39.6,39.6);
	new cjs.ButtonHelper(this.btn_hair_blond_straight, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_hat_05,p:{visible:false}},{t:this.btn_hat_04,p:{visible:false}},{t:this.btn_hat_03,p:{visible:false}},{t:this.btn_hat_02,p:{visible:false}},{t:this.btn_hat_01,p:{visible:false}},{t:this.btn_hair_blond,p:{visible:false}},{t:this.btn_hair_gray,p:{visible:false}},{t:this.btn_hair_brown,p:{visible:false}},{t:this.btn_shirt_01,p:{visible:false}},{t:this.btn_shirt_02,p:{visible:false}},{t:this.btn_shirt_03,p:{visible:false}},{t:this.btn_shirt_04,p:{visible:false}},{t:this.btn_shirt_05,p:{visible:false}},{t:this.btn_shirt_06,p:{visible:false}},{t:this.btn_jacket_short,p:{visible:false}},{t:this.btn_jacket_long,p:{visible:false}},{t:this.btn_jacket_brown,p:{visible:false}},{t:this.btn_jacket_blue,p:{visible:false}},{t:this.btn_jacket_black,p:{visible:false}},{t:this.btn_jacket_green,p:{visible:false}},{t:this.btn_pants_neutral,p:{visible:false}},{t:this.btn_pants_buttons,p:{visible:false}},{t:this.btn_pants_tassels,p:{visible:false}},{t:this.btn_pants_ribbons,p:{visible:false}},{t:this.btn_pants_yellow,p:{visible:false,x:32.2,y:627.85}},{t:this.btn_pants_brown,p:{visible:false,x:110.6,y:707.55}},{t:this.btn_pants_black,p:{visible:false}},{t:this.btn_pants_blue,p:{visible:false,x:105.75,y:628.2}},{t:this.btn_hair_blond_straight_girl},{t:this.btn_hair_brown_straight_girl},{t:this.btn_hair_blond__braids_girl},{t:this.btn_hair_brown_braids_girl},{t:this.btn_shirt_12,p:{x:1131,y:435.85,visible:false}},{t:this.btn_shirt_11,p:{x:1257.85,y:438.9,visible:false}},{t:this.btn_shirt_10,p:{x:1132.45,y:577.3,visible:false}},{t:this.btn_shirt_09,p:{x:1259.7,y:576.35,visible:false}},{t:this.btn_shirt_08,p:{x:1142.9,y:715.85,visible:false}},{t:this.btn_shirt_07,p:{x:1259.8,y:715.25,visible:false}},{t:this.btn_shirt_same,p:{x:981.3,y:577.75,visible:false}},{t:this.btn_hat_06,p:{x:-169.7,y:439.15,visible:false}},{t:this.btn_hat_07,p:{x:-157.9,y:333.7,visible:false}},{t:this.btn_hat_08,p:{x:-164.35,y:656.35,visible:false}},{t:this.btn_hat_09,p:{x:-178.6,y:212.1,visible:false}},{t:this.btn_hat_10,p:{regY:111.8,x:-173.05,y:100.5,visible:false}},{t:this.btn_apron_01,p:{x:903.35,y:965.55,visible:false}},{t:this.btn_apron_02,p:{regY:102.5,x:1071.5,y:960.8,visible:false}},{t:this.btn_apron_03,p:{regX:117.8,x:740.9,y:946.2,visible:false}},{t:this.btn_apron_04,p:{regX:95.9,regY:103.5,x:940.85,y:791.65,visible:false}},{t:this.btn_apron_05,p:{x:778.35,y:776.8,visible:false}},{t:this.btn_apron_06,p:{regY:102.5,x:626.7,y:768.15,visible:false}},{t:this.btn_apron_same,p:{x:452.95,y:829.65,visible:false}},{t:this.btn_pants_white,p:{x:67.7,y:697.35,visible:false}},{t:this.btn_shoe_boy_04,p:{x:-93.3,y:887.85}},{t:this.btn_shoe_boy_03,p:{x:-90,y:1021.1}},{t:this.btn_shoe_boy_02,p:{x:-95.25,y:757.4}},{t:this.btn_shoe_boy_01,p:{x:-81.25,y:629.8}}]}).to({state:[{t:this.btn_hat_05,p:{visible:true}},{t:this.btn_hat_04,p:{visible:true}},{t:this.btn_hat_03,p:{visible:true}},{t:this.btn_hat_02,p:{visible:true}},{t:this.btn_hat_01,p:{visible:true}},{t:this.btn_hair_blond,p:{visible:true}},{t:this.btn_hair_gray,p:{visible:true}},{t:this.btn_hair_brown,p:{visible:true}},{t:this.btn_shirt_01,p:{visible:true}},{t:this.btn_shirt_02,p:{visible:true}},{t:this.btn_shirt_03,p:{visible:true}},{t:this.btn_shirt_04,p:{visible:true}},{t:this.btn_shirt_05,p:{visible:true}},{t:this.btn_shirt_06,p:{visible:true}},{t:this.btn_jacket_short,p:{visible:true}},{t:this.btn_jacket_long,p:{visible:true}},{t:this.btn_jacket_brown,p:{visible:true}},{t:this.btn_jacket_blue,p:{visible:true}},{t:this.btn_jacket_black,p:{visible:true}},{t:this.btn_jacket_green,p:{visible:true}},{t:this.btn_pants_neutral,p:{visible:true}},{t:this.btn_pants_buttons,p:{visible:true}},{t:this.btn_pants_tassels,p:{visible:true}},{t:this.btn_pants_ribbons,p:{visible:true}},{t:this.btn_pants_yellow,p:{visible:true,x:32.2,y:627.85}},{t:this.btn_pants_brown,p:{visible:true,x:110.6,y:707.55}},{t:this.btn_pants_black,p:{visible:true}},{t:this.btn_pants_blue,p:{visible:true,x:105.75,y:628.2}},{t:this.btn_shoe_boy_04,p:{x:1060,y:383.5}},{t:this.btn_shoe_boy_03,p:{x:1063.3,y:516.75}},{t:this.btn_shoe_boy_02,p:{x:1058.05,y:253.05}},{t:this.btn_shoe_boy_01,p:{x:1072.05,y:125.45}}]},1).to({state:[{t:this.btn_hair_blond_straight},{t:this.btn_hair_brown_straight},{t:this.btn_pants_yellow,p:{visible:true,x:40.65,y:538.85}},{t:this.btn_pants_brown,p:{visible:true,x:119.05,y:618.55}},{t:this.btn_pants_blue,p:{visible:true,x:114.2,y:539.2}},{t:this.btn_hair_blond_braids},{t:this.btn_hair_brown_braids},{t:this.btn_shirt_12,p:{x:794.2,y:302.35,visible:true}},{t:this.btn_shirt_11,p:{x:921.05,y:305.4,visible:true}},{t:this.btn_shirt_10,p:{x:795.65,y:443.8,visible:true}},{t:this.btn_shirt_09,p:{x:922.9,y:442.85,visible:true}},{t:this.btn_shirt_08,p:{x:806.1,y:582.35,visible:true}},{t:this.btn_shirt_07,p:{x:923,y:581.75,visible:true}},{t:this.btn_shirt_same,p:{x:810.35,y:50.55,visible:true}},{t:this.btn_hat_06,p:{x:629.05,y:419.4,visible:true}},{t:this.btn_hat_07,p:{x:640.85,y:313.95,visible:true}},{t:this.btn_hat_08,p:{x:634.4,y:636.6,visible:true}},{t:this.btn_hat_09,p:{x:620.15,y:192.35,visible:true}},{t:this.btn_hat_10,p:{regY:111.7,x:625.7,y:80.7,visible:true}},{t:this.btn_apron_01,p:{x:1264.6,y:279.7,visible:true}},{t:this.btn_apron_02,p:{regY:102.7,x:1112.4,y:434.1,visible:true}},{t:this.btn_apron_03,p:{regX:117.7,x:1102.1,y:260.35,visible:true}},{t:this.btn_apron_04,p:{regX:95.8,regY:103.4,x:1302.05,y:105.75,visible:true}},{t:this.btn_apron_05,p:{x:1139.6,y:90.95,visible:true}},{t:this.btn_apron_06,p:{regY:102.4,x:987.95,y:82.25,visible:true}},{t:this.btn_apron_same,p:{x:814.2,y:143.8,visible:true}},{t:this.btn_pants_white,p:{x:40.65,y:615.85,visible:true}}]},1).wait(1));

	// character
	this.btn_shoe_girl_01 = new lib.shoe_01();
	this.btn_shoe_girl_01.name = "btn_shoe_girl_01";
	this.btn_shoe_girl_01.setTransform(-568.45,807.35,1,1,0,0,0,42.8,23.9);
	new cjs.ButtonHelper(this.btn_shoe_girl_01, 0, 1, 1);

	this.btn_shoe_girl_02 = new lib.shoe_02();
	this.btn_shoe_girl_02.name = "btn_shoe_girl_02";
	this.btn_shoe_girl_02.setTransform(-398.85,831.95,1,1,0,0,0,40.4,48.5);
	new cjs.ButtonHelper(this.btn_shoe_girl_02, 0, 1, 1);

	this.btn_shoe_girl_03 = new lib.shoe_03();
	this.btn_shoe_girl_03.name = "btn_shoe_girl_03";
	this.btn_shoe_girl_03.setTransform(-202.2,800.1,1,1,0,0,0,39.8,45.5);
	new cjs.ButtonHelper(this.btn_shoe_girl_03, 0, 1, 1);

	this.btn_shoe_girl_04 = new lib.shoe_04();
	this.btn_shoe_girl_04.name = "btn_shoe_girl_04";
	this.btn_shoe_girl_04.setTransform(-341.85,675.05,1,1,0,0,0,36.5,45.4);
	new cjs.ButtonHelper(this.btn_shoe_girl_04, 0, 1, 1);

	this.character = new lib.characterai();
	this.character.name = "character";
	this.character.setTransform(328.4,363.35,1,1,0,0,0,143.1,358.4);
	this.character.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.character,p:{visible:false}},{t:this.btn_shoe_girl_04,p:{x:-341.85,y:675.05}},{t:this.btn_shoe_girl_03,p:{x:-202.2,y:800.1}},{t:this.btn_shoe_girl_02,p:{x:-398.85,y:831.95}},{t:this.btn_shoe_girl_01,p:{x:-568.45,y:807.35}}]}).to({state:[{t:this.character,p:{visible:true}}]},1).to({state:[{t:this.character,p:{visible:true}},{t:this.btn_shoe_girl_04,p:{x:1295.35,y:632.45}},{t:this.btn_shoe_girl_03,p:{x:1435,y:757.5}},{t:this.btn_shoe_girl_02,p:{x:1238.35,y:789.35}},{t:this.btn_shoe_girl_01,p:{x:1068.75,y:764.75}}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9EFE5").s().p("AgdA2IAAhpIAbAAIABANQAHgPAPAAIAJABIgBAcIgKgBQgQAAgEALIAABEg");
	this.shape.setTransform(38.575,554.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9EFE5").s().p("AgkAoQgNgPAAgZIAAAAQAAgQAGgMQAGgMALgHQAMgHAOAAQAVAAAOANQANANACAXIAAAGQAAAYgOAPQgNAPgXAAQgWAAgOgPgAgPgXQgGAIAAAQQAAAPAGAIQAFAIAKAAQAKAAAGgIQAGgIAAgQQAAgPgGgIQgGgIgKAAQgKAAgFAIg");
	this.shape_1.setTransform(28.85,554.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9EFE5").s().p("AATA1IgTghIgSAhIgeAAIAfg1Igeg0IAeAAIARAgIASggIAeAAIgeA0IAfA1g");
	this.shape_2.setTransform(18.175,554.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9EFE5").s().p("AgmBJIAAgWIAFAAQAIAAAEgDQADgCADgGIADgIIglhpIAeAAIATBCIAUhCIAeAAIgrB5IgCAGQgIAUgWAAIgNgBg");
	this.shape_3.setTransform(8.075,556.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F9EFE5").s().p("Ag0BHIAAiNIAyAAQAZAAAOAKQANAJgBAUQABAKgGAIQgFAIgJAEQALABAGAJQAGAIAAAMQAAAUgNAMQgNAKgYAAgAgWAvIAYAAQAKAAAGgEQAFgGAAgIQAAgUgTAAIgaAAgAgWgKIAVAAQAVgBABgRQgBgKgFgEQgGgFgLABIgUAAg");
	this.shape_4.setTransform(-3.15,552.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F9EFE5").s().p("AgdA2IAAhpIAbAAIABANQAHgPAPAAIAJABIgBAcIgKgBQgQAAgEALIAABEg");
	this.shape_5.setTransform(10.725,119.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9EFE5").s().p("AgjBHQgLgJAAgNQAAgRAMgJQANgJAWAAIAOAAIAAgGQAAgIgEgDQgEgEgHAAQgHAAgEADQgEADgBAFIgcAAQABgIAFgIQAGgHAKgFQALgEAMAAQATAAALAJQAMAKAAARIAAAuQAAAPAEAIIAAABIgdAAIgCgJQgLALgPAAQgPAAgKgJgAgRAtIAAACQAAAFADADQAEAEAGAAQAFAAAGgDQAFgDADgFIAAgSIgLAAQgUAAgBAPgAgOguQgHgFABgIQgBgJAHgGQAGgFAJAAQAJAAAGAFQAGAGAAAJQAAAIgGAGQgGAFgJAAQgJAAgGgGgAgGhDQgDADAAAFQAAAEACADQAEADAEAAQAEAAADgDQADgDAAgEQAAgFgDgDQgDgDgEAAQgEAAgDADg");
	this.shape_6.setTransform(1.3,117.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F9EFE5").s().p("AAcBHIAAg9Ig4AAIAAA9IgdAAIAAiNIAdAAIAAA5IA4AAIAAg5IAeAAIAACNg");
	this.shape_7.setTransform(-11.1,117.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9EFE5").s().p("AgjAuQgLgJAAgOQAAgRAMgIQANgJAXAAIAMAAIAAgGQAAgHgDgFQgEgEgHAAQgHAAgEADQgEAEgBAGIgbAAQAAgJAFgIQAGgIAKgEQALgFAMAAQATAAALAKQAMAKAAASIAAAsQAAAPAEAIIAAACIgcAAIgDgKQgLAMgPAAQgPAAgKgJgAgRATIAAACQgBAFAEAEQAEADAGAAQAFAAAGgDQAFgCACgFIAAgSIgKAAQgUAAgBAOg");
	this.shape_8.setTransform(36.3,330.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9EFE5").s().p("AARBLIgbgrIgKALIAAAgIgcAAIAAiVIAcAAIAABSIAGgHIAZgfIAjAAIgmAsIApA9g");
	this.shape_9.setTransform(26.3,327.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F9EFE5").s().p("AggAoQgNgOAAgZIAAgBQAAgZANgOQANgPAVAAQAUAAAMALQAMAMAAASIgaAAQAAgIgFgFQgFgFgIAAQgJAAgFAHQgFAHAAAQIAAACQAAARAFAHQAFAHAJAAQAIAAAFgEQAFgFAAgHIAaAAQAAALgGAJQgFAJgKAFQgKAFgMAAQgWAAgNgPg");
	this.shape_10.setTransform(15.175,330.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9EFE5").s().p("AgkAuQgKgJAAgOQAAgRAMgIQANgJAWAAIAOAAIAAgGQAAgHgEgFQgEgEgHAAQgHAAgEADQgEAEgBAGIgcAAQABgJAFgIQAGgIAKgEQALgFALAAQAUAAAMAKQALAKAAASIAAAsQAAAPAEAIIAAACIgdAAIgCgKQgKAMgQAAQgPAAgLgJgAgRATIAAACQAAAFADAEQAEADAGAAQAFAAAGgDQAFgCADgFIAAgSIgLAAQgUAAgBAOg");
	this.shape_11.setTransform(4.55,330.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F9EFE5").s().p("AgiA9QgNgMAAgVIAeAAQAAAKAEAGQAEAEAJAAQAIAAAFgFQAFgGAAgKIAAhiIAeAAIAABiQAAANgGALQgGAJgLAGQgLAGgOAAQgWAAgMgLg");
	this.shape_12.setTransform(-6.775,328.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9EFE5").s().p("EApGA2EQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGA0NQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGAyUQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAwcQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAulQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGAssQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAq0QgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAo9QgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGAnEQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAlMQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAjVQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGAhcQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEgPjAgyQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIABAAQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAFgGAAgEgRbAgyQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgEgTTAgyQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgEgVLAgyQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgEgXDAgyQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgEgY7AgyQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgEgazAgyQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgEgcrAgyQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgEgejAgyQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgEggbAgyQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgEgiTAgyQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgEgkLAgyQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgEgmDAgyQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgEgn7AgyQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgEApGAfkQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAdtQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGAb0QgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAZ8QgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAYFQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGAWMQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAUUQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGASdQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGAQkQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAOsQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAM1QgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGAK8QgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAJEQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAHNQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGAFUQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGADcQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGABlQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgATQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgCLQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgAvjiPQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIABAAQAGAAAFAFQAEAEAAAGQAAAGgEAEQgFAFgGAAgAxbiPQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgAzTiPQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgA1LiPQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgA3DiPQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgA47iPQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgA6ziPQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgA8riPQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgA+jiPQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgEggbgCPQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgEgiTgCPQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgEgkLgCPQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgEgmDgCPQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgEgn7gCPQgGAAgFgFQgEgEAAgGQAAgGAEgEQAFgFAGAAIA8AAQAGAAAEAFQAFAEAAAGQAAAGgFAEQgEAFgGAAgEApGgECQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgF7QgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgHzQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgJqQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgLjQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgNbQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgPSQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgRLQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgTDQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgU6QgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgWzQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgYrQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgaiQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgcbQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgeTQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGggKQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgiDQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEgQ4gjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIACAAQAGAAAEAEQAFAEAAAHQAAAGgFAEQgEAEgGAAgEgSwgjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgUogjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgWggjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgYYgjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgaQgjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgcIgjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgeAgjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgf4gjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEghwgjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgjogjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEglggjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgnYgjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgpQgjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEApGgj7QgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGglyQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgnrQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgpjQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgraQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgtTQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgvLQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgxCQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgy7QgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGg0zQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFg");
	this.shape_13.setTransform(247.925,361);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9EFE5").s().p("AgNBLIAAiVIAbAAIAACVg");
	this.shape_14.setTransform(22.05,467.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9EFE5").s().p("AgkAoQgNgPAAgZIAAAAQAAgQAGgMQAGgMALgHQAMgHAOAAQAVAAAOANQAOANABAXIAAAGQAAAYgOAPQgNAPgXAAQgWAAgOgPgAgPgXQgGAIAAAQQAAAPAGAIQAFAIAKAAQALAAAFgIQAGgIAAgQQAAgPgGgIQgFgIgLAAQgKAAgFAIg");
	this.shape_15.setTransform(13.75,469.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F9EFE5").s().p("AgZBdIAAgWIAJABQANAAAAgOIAAhuIAbAAIAABuQAAARgJAKQgJAKgRAAIgOgCgAgBhFQgEgEAAgGQAAgHAEgEQADgEAIAAQAHAAAEAEQAFAEAAAHQAAAGgFAEQgEAEgHAAQgHAAgEgEg");
	this.shape_16.setTransform(4.575,470);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F9EFE5").s().p("AAYBHIgkg5IgPARIAAAoIgeAAIAAiNIAeAAIAABAIAMgSIAjguIAkAAIgyA/IA0BOg");
	this.shape_17.setTransform(-2.65,468.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F9EFE5").s().p("EApGA2EQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGA0NQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGAyUQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAwcQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAulQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGAssQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAq0QgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAo9QgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGAnEQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAlMQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAjVQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGAhcQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAfkQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAdtQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGAb0QgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAZ8QgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAYFQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGAWMQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAUUQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgAvjTmQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIABAAQAGAAAFAEQAEAFAAAGQAAAGgEAEQgFAFgGAAgAxbTmQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgAzTTmQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgA1LTmQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgA3DTmQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgA47TmQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgA6zTmQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgA8rTmQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgA+jTmQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgEggbATmQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgEgiTATmQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgEgkLATmQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgEgmDATmQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgEgn7ATmQgGAAgFgFQgEgEAAgGQAAgGAEgFQAFgEAGAAIA8AAQAGAAAEAEQAFAFAAAGQAAAGgFAEQgEAFgGAAgEApGASdQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGAQkQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAOsQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAM1QgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGAK8QgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAJEQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGAHNQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGAFUQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGADcQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGABlQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgATQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgCLQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgECQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgF7QgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgHzQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgJqQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgLjQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgNbQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgPSQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgRLQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgTDQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgU6QgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgWzQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgYrQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgaiQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgcbQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgeTQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGggKQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgiDQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEgQ4gjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIACAAQAGAAAEAEQAFAEAAAHQAAAGgFAEQgEAEgGAAgEgSwgjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgUogjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgWggjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgYYgjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgaQgjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgcIgjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgeAgjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgf4gjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEghwgjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgjogjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEglggjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgnYgjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEgpQgjfQgGAAgEgEQgFgEAAgGQAAgHAFgEQAEgEAGAAIA8AAQAGAAAFAEQAEAEAAAHQAAAGgEAEQgFAEgGAAgEApGgj7QgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGglyQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgnrQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgpjQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgraQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgtTQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgvLQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGgxCQgEgFAAgGIAAg8QAAgGAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAGIAAA8QAAAGgFAFQgEAEgGAAQgGAAgFgEgEApGgy7QgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFgEApGg0zQgEgEAAgGIAAg8QAAgGAEgFQAFgEAGAAQAGAAAEAEQAFAFAAAGIAAA8QAAAGgFAEQgEAFgGAAQgGAAgFgFg");
	this.shape_18.setTransform(247.925,361);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:38.575,y:554.275}}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_7},{t:this.shape_6},{t:this.shape,p:{x:10.725,y:119.575}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-612.5,-8.3,2094.2,1079.3);


// stage content:
(lib.character = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// scene
	this.scene = new lib.scene();
	this.scene.name = "scene";
	this.scene.setTransform(498.75,386,1,1,0,0,0,463.9,363.6);

	this.timeline.addTween(cjs.Tween.get(this.scene).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(382.4,554.9,963.1999999999999,535.3000000000001);
// library properties:
lib.properties = {
	id: '9A70AC701BA1E245BCC9BD39994BFEE7',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#70AEA3",
	opacity: 1.00,
	manifest: [],
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
an.compositions['9A70AC701BA1E245BCC9BD39994BFEE7'] = {
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
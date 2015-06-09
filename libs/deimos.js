/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(s,p){var m={},l=m.lib={},n=function(){},r=l.Base={extend:function(b){n.prototype=this;var h=new n;b&&h.mixIn(b);h.hasOwnProperty("init")||(h.init=function(){h.$super.init.apply(this,arguments)});h.init.prototype=h;h.$super=this;return h},create:function(){var b=this.extend();b.init.apply(b,arguments);return b},init:function(){},mixIn:function(b){for(var h in b)b.hasOwnProperty(h)&&(this[h]=b[h]);b.hasOwnProperty("toString")&&(this.toString=b.toString)},clone:function(){return this.init.prototype.extend(this)}},
q=l.WordArray=r.extend({init:function(b,h){b=this.words=b||[];this.sigBytes=h!=p?h:4*b.length},toString:function(b){return(b||t).stringify(this)},concat:function(b){var h=this.words,a=b.words,j=this.sigBytes;b=b.sigBytes;this.clamp();if(j%4)for(var g=0;g<b;g++)h[j+g>>>2]|=(a[g>>>2]>>>24-8*(g%4)&255)<<24-8*((j+g)%4);else if(65535<a.length)for(g=0;g<b;g+=4)h[j+g>>>2]=a[g>>>2];else h.push.apply(h,a);this.sigBytes+=b;return this},clamp:function(){var b=this.words,h=this.sigBytes;b[h>>>2]&=4294967295<<
32-8*(h%4);b.length=s.ceil(h/4)},clone:function(){var b=r.clone.call(this);b.words=this.words.slice(0);return b},random:function(b){for(var h=[],a=0;a<b;a+=4)h.push(4294967296*s.random()|0);return new q.init(h,b)}}),v=m.enc={},t=v.Hex={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++){var k=a[j>>>2]>>>24-8*(j%4)&255;g.push((k>>>4).toString(16));g.push((k&15).toString(16))}return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j+=2)g[j>>>3]|=parseInt(b.substr(j,
2),16)<<24-4*(j%8);return new q.init(g,a/2)}},a=v.Latin1={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++)g.push(String.fromCharCode(a[j>>>2]>>>24-8*(j%4)&255));return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j++)g[j>>>2]|=(b.charCodeAt(j)&255)<<24-8*(j%4);return new q.init(g,a)}},u=v.Utf8={stringify:function(b){try{return decodeURIComponent(escape(a.stringify(b)))}catch(g){throw Error("Malformed UTF-8 data");}},parse:function(b){return a.parse(unescape(encodeURIComponent(b)))}},
g=l.BufferedBlockAlgorithm=r.extend({reset:function(){this._data=new q.init;this._nDataBytes=0},_append:function(b){"string"==typeof b&&(b=u.parse(b));this._data.concat(b);this._nDataBytes+=b.sigBytes},_process:function(b){var a=this._data,g=a.words,j=a.sigBytes,k=this.blockSize,m=j/(4*k),m=b?s.ceil(m):s.max((m|0)-this._minBufferSize,0);b=m*k;j=s.min(4*b,j);if(b){for(var l=0;l<b;l+=k)this._doProcessBlock(g,l);l=g.splice(0,b);a.sigBytes-=j}return new q.init(l,j)},clone:function(){var b=r.clone.call(this);
b._data=this._data.clone();return b},_minBufferSize:0});l.Hasher=g.extend({cfg:r.extend(),init:function(b){this.cfg=this.cfg.extend(b);this.reset()},reset:function(){g.reset.call(this);this._doReset()},update:function(b){this._append(b);this._process();return this},finalize:function(b){b&&this._append(b);return this._doFinalize()},blockSize:16,_createHelper:function(b){return function(a,g){return(new b.init(g)).finalize(a)}},_createHmacHelper:function(b){return function(a,g){return(new k.HMAC.init(b,
g)).finalize(a)}}});var k=m.algo={};return m}(Math);
(function(s){function p(a,k,b,h,l,j,m){a=a+(k&b|~k&h)+l+m;return(a<<j|a>>>32-j)+k}function m(a,k,b,h,l,j,m){a=a+(k&h|b&~h)+l+m;return(a<<j|a>>>32-j)+k}function l(a,k,b,h,l,j,m){a=a+(k^b^h)+l+m;return(a<<j|a>>>32-j)+k}function n(a,k,b,h,l,j,m){a=a+(b^(k|~h))+l+m;return(a<<j|a>>>32-j)+k}for(var r=CryptoJS,q=r.lib,v=q.WordArray,t=q.Hasher,q=r.algo,a=[],u=0;64>u;u++)a[u]=4294967296*s.abs(s.sin(u+1))|0;q=q.MD5=t.extend({_doReset:function(){this._hash=new v.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(g,k){for(var b=0;16>b;b++){var h=k+b,w=g[h];g[h]=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360}var b=this._hash.words,h=g[k+0],w=g[k+1],j=g[k+2],q=g[k+3],r=g[k+4],s=g[k+5],t=g[k+6],u=g[k+7],v=g[k+8],x=g[k+9],y=g[k+10],z=g[k+11],A=g[k+12],B=g[k+13],C=g[k+14],D=g[k+15],c=b[0],d=b[1],e=b[2],f=b[3],c=p(c,d,e,f,h,7,a[0]),f=p(f,c,d,e,w,12,a[1]),e=p(e,f,c,d,j,17,a[2]),d=p(d,e,f,c,q,22,a[3]),c=p(c,d,e,f,r,7,a[4]),f=p(f,c,d,e,s,12,a[5]),e=p(e,f,c,d,t,17,a[6]),d=p(d,e,f,c,u,22,a[7]),
c=p(c,d,e,f,v,7,a[8]),f=p(f,c,d,e,x,12,a[9]),e=p(e,f,c,d,y,17,a[10]),d=p(d,e,f,c,z,22,a[11]),c=p(c,d,e,f,A,7,a[12]),f=p(f,c,d,e,B,12,a[13]),e=p(e,f,c,d,C,17,a[14]),d=p(d,e,f,c,D,22,a[15]),c=m(c,d,e,f,w,5,a[16]),f=m(f,c,d,e,t,9,a[17]),e=m(e,f,c,d,z,14,a[18]),d=m(d,e,f,c,h,20,a[19]),c=m(c,d,e,f,s,5,a[20]),f=m(f,c,d,e,y,9,a[21]),e=m(e,f,c,d,D,14,a[22]),d=m(d,e,f,c,r,20,a[23]),c=m(c,d,e,f,x,5,a[24]),f=m(f,c,d,e,C,9,a[25]),e=m(e,f,c,d,q,14,a[26]),d=m(d,e,f,c,v,20,a[27]),c=m(c,d,e,f,B,5,a[28]),f=m(f,c,
d,e,j,9,a[29]),e=m(e,f,c,d,u,14,a[30]),d=m(d,e,f,c,A,20,a[31]),c=l(c,d,e,f,s,4,a[32]),f=l(f,c,d,e,v,11,a[33]),e=l(e,f,c,d,z,16,a[34]),d=l(d,e,f,c,C,23,a[35]),c=l(c,d,e,f,w,4,a[36]),f=l(f,c,d,e,r,11,a[37]),e=l(e,f,c,d,u,16,a[38]),d=l(d,e,f,c,y,23,a[39]),c=l(c,d,e,f,B,4,a[40]),f=l(f,c,d,e,h,11,a[41]),e=l(e,f,c,d,q,16,a[42]),d=l(d,e,f,c,t,23,a[43]),c=l(c,d,e,f,x,4,a[44]),f=l(f,c,d,e,A,11,a[45]),e=l(e,f,c,d,D,16,a[46]),d=l(d,e,f,c,j,23,a[47]),c=n(c,d,e,f,h,6,a[48]),f=n(f,c,d,e,u,10,a[49]),e=n(e,f,c,d,
C,15,a[50]),d=n(d,e,f,c,s,21,a[51]),c=n(c,d,e,f,A,6,a[52]),f=n(f,c,d,e,q,10,a[53]),e=n(e,f,c,d,y,15,a[54]),d=n(d,e,f,c,w,21,a[55]),c=n(c,d,e,f,v,6,a[56]),f=n(f,c,d,e,D,10,a[57]),e=n(e,f,c,d,t,15,a[58]),d=n(d,e,f,c,B,21,a[59]),c=n(c,d,e,f,r,6,a[60]),f=n(f,c,d,e,z,10,a[61]),e=n(e,f,c,d,j,15,a[62]),d=n(d,e,f,c,x,21,a[63]);b[0]=b[0]+c|0;b[1]=b[1]+d|0;b[2]=b[2]+e|0;b[3]=b[3]+f|0},_doFinalize:function(){var a=this._data,k=a.words,b=8*this._nDataBytes,h=8*a.sigBytes;k[h>>>5]|=128<<24-h%32;var l=s.floor(b/
4294967296);k[(h+64>>>9<<4)+15]=(l<<8|l>>>24)&16711935|(l<<24|l>>>8)&4278255360;k[(h+64>>>9<<4)+14]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360;a.sigBytes=4*(k.length+1);this._process();a=this._hash;k=a.words;for(b=0;4>b;b++)h=k[b],k[b]=(h<<8|h>>>24)&16711935|(h<<24|h>>>8)&4278255360;return a},clone:function(){var a=t.clone.call(this);a._hash=this._hash.clone();return a}});r.MD5=t._createHelper(q);r.HmacMD5=t._createHmacHelper(q)})(Math);

/**
 *
 * org.dbyzero.tools.Inherit Object
 *
 * @author dbyzero
 * @date : 2014/03/22
 * @description : Inherit tools
 * 
 */

var org = org || {} ;
org.dbyzero = org.dbyzero || {} ;
org.dbyzero.tools = org.dbyzero.tools || {} ;

(function(tools,document,undefined) {

	tools.Inherit = function(obj, parent) {

		for (var prop in parent) {
			obj[prop] = parent[prop];
		}

		obj._super = parent;
		obj.prototype = Object.create(parent.prototype, {
			constructor: {
				value: obj,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
	}
})(org.dbyzero.tools,document);
/**
 * org.dbyzero.tools.Loop Object
 *
 * @author dbyzero
 * @date : 2013/07/28
 * @description : Loop tools
 * 
 */

var org = org || {} ;
org.dbyzero = org.dbyzero || {} ;
org.dbyzero.tools = org.dbyzero.tools || {} ;

(function(tools,document,undefined) {

	/**
	 * Loop constructor
	 * @params desc string 		Description of the loop, usefull for debug
	 * @params delay int 		time in ms, wainting time between each loop
	 * @params ttl int|optional	time in ms, Max time to loop before stopping
	 *
	 * */
	tools.Loop = function(desc,delay,ttl) {

		//default value for ttl
		ttl = typeof ttl !== 'undefined' ? ttl : 0;

		this.description = desc ;
		this.loopId = 0 ;
		this.lastUpdate = new Date().getTime() ;
		this.delay = delay ;
		this.active = false ;
		this.ttl = ttl ;
	}

	/**
	 * Loop methods
	 *
	 * */
	tools.Loop.prototype = {
		"start" : function(loopedFunction) {
			this.active = true ;
			loopedFunction.bind(this) ;

			//loopiiiing
			(function loop(){
				loopedFunction();
				this.loopId = setTimeout(loop.bind(this),this.delay) ;
			}).call(this) ;

			//ttl manage
			if(this.ttl > 0) {
				var safeFunction = function(){
					if(this.active) {
						Log.warning('TTL reach for loop '+this.description);
						this.stop();
					}
				} ;
				setTimeout(safeFunction.bind(this),this.ttl) ;
			}
		},
		"stop" : function() {
			this.active = false ;
			clearTimeout(this.loopId) ;
		}
	}
})(org.dbyzero.tools, document);
/**
 *
 * org.dbyzero.tools.Log Object
 *
 * @author dbyzero
 * @date : 2013/07/28
 * @description : Log model
 * 
 */
var org = org || {} ;
org.dbyzero = org.dbyzero || {} ;
org.dbyzero.tools = org.dbyzero.tools || {} ;

(function(tools,document,undefined) {

	//private
	var getDate = function(msg) {
		var d = new Date() ;
		return '('+
			d.getFullYear() + '/' + 
			str_pad(d.getMonth(),2,'0') + '/' + 
			str_pad(d.getDate(),2,'0') + ' ' + 
			str_pad(d.getHours(),2,'0') + ':' + 
			str_pad(d.getMinutes(),2,'0') + ':' + 
			str_pad(d.getSeconds(),2,'0') + ')' ;
	};
	var str_pad = function (input, pad_length, pad_string, pad_type) {
		// http://kevin.vanzonneveld.net
		// +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
		// + namespaced by: Michael White (http://getsprink.com)
		// +      input by: Marco van Oort
		// +   bugfixed by: Brett Zamir (http://brett-zamir.me)
		// *     example 1: str_pad('Kevin van Zonneveld', 30, '-=', 'STR_PAD_LEFT');
		// *     returns 1: '-=-=-=-=-=-Kevin van Zonneveld'
		// *     example 2: str_pad('Kevin van Zonneveld', 30, '-', 'STR_PAD_BOTH');
		// *     returns 2: '------Kevin van Zonneveld-----'
		var half = '',
		pad_to_go;

		var str_pad_repeater = function (s, len) {
		var collect = '',
		i;

		while (collect.length < len) {
		collect += s;
		}
		collect = collect.substr(0, len);

		return collect;
		};

		input += '';
		pad_string = pad_string !== undefined ? pad_string : ' ';

		if (pad_type !== 'STR_PAD_LEFT' && pad_type !== 'STR_PAD_RIGHT' && pad_type !== 'STR_PAD_BOTH') {
			pad_type = 'STR_PAD_LEFT';
		}
		if ((pad_to_go = pad_length - input.length) > 0) {
			if (pad_type === 'STR_PAD_LEFT') {
				input = str_pad_repeater(pad_string, pad_to_go) + input;
			} else if (pad_type === 'STR_PAD_RIGHT') {
				input = input + str_pad_repeater(pad_string, pad_to_go);
			} else if (pad_type === 'STR_PAD_BOTH') {
				half = str_pad_repeater(pad_string, Math.ceil(pad_to_go / 2));
				input = half + input + half;
				input = input.substr(0, pad_length);
			}
		}

		return input;
	}

	/**
	 * Log methods
	 *
	 * */
	tools.Log = {
		"gay" : function(msg) {
			console.log('rainbow:' + ' ' + getDate() + ' : ' + msg)
		},
		"success" : function(msg) {
			console.log('success:' + ' ' + getDate() + ' : ' + msg)
		},
		"info" : function(msg) {
			console.log('info:' + '    ' + getDate() + ' : ' + msg)
		},
		"debug" : function(msg) {
			console.log('debug:' + '   ' + getDate() + ' : ' + msg)
		},
		"warning" : function(msg) {
			console.warn('warning:' + ' ' + getDate() + ' : ' + msg)
		},
		"error" : function(msg) {
			console.error('error:' + '   ' + getDate() + ' : ' + msg)
		},
		"alert" : function(msg) {
			console.error('alert:' + '   ' + getDate() + ' : ' + msg)
		}
	}
})(org.dbyzero.tools, document);
/**
 *
 * org.dbyzero.tools.Vector util class
 *
 * @author dbyzero
 * @date : 2013/08/09
 * @description : Vector tools
 *
 */
 
var org = org || {} ;
org.dbyzero = org.dbyzero || {} ;
org.dbyzero.tools = org.dbyzero.tools || {} ;

(function(tools,document,undefined) {

	/**
	 * Vector constructor
	 */

	tools.Vector = function(x,y) {
		this.x = x ;
		this.y = y ;
	}

	tools.Vector.Zero = function() {
		return new tools.Vector(0,0);
	}

	tools.Vector.Sum = function(vector1,vector2) {
		return new tools.Vector(parseFloat(vector1.x) + parseFloat(vector2.x), parseFloat(vector1.y) + parseFloat(vector2.y)) ;
	}

	tools.Vector.Sub = function(vector1,vector2) {
		return new tools.Vector(parseFloat(vector1.x) - parseFloat(vector2.x), parseFloat(vector1.y) - parseFloat(vector2.y)) ;
	}

	tools.Vector.Dot = function(vector1,vector2) {
		return new tools.Vector(parseFloat(vector1.x) * parseFloat(vector2.x), parseFloat(vector1.y) * parseFloat(vector2.y)) ;
	}

	tools.Vector.Scalar = function(vector1,scal) {
		return new tools.Vector(parseFloat(vector1.x) * scal, parseFloat(vector1.y) * scal) ;
	}

	tools.Vector.prototype.add = function(vectorToAdd) {
		this.x = vectorToAdd.x + this.x ;
		this.y = vectorToAdd.y + this.y ;
	}

	tools.Vector.prototype.sub = function(vectorToAdd) {
		this.x = vectorToAdd.x - this.x ;
		this.y = vectorToAdd.y - this.y ;
	}

	tools.Vector.prototype.dot = function(vec_) {
		this.x = vec_.x * this.x ; 
		this.y = vec_.y * this.y ;
	}

	tools.Vector.prototype.scalar = function(scal) {
		this.x = scal * this.x ;
		this.y = scal * this.y ;
	}

	tools.Vector.prototype.duplicate = function() {
		return new tools.Vector(this.x,this.y) ;
	}

	tools.Vector.prototype.lengthSquare = function() {
		return (this.x*this.x + this.y*this.y) ;
	}

	//if possible, prefeatr lengthSquare who is faster
	tools.Vector.prototype.length = function() {
		return Math.sqrt(this.x*this.x + this.y*this.y) ;
	}

	tools.Vector.prototype.toString = function() {
		return this.x+"x"+this.y;
	}
})(org.dbyzero.tools, document);
/**
 *
 * org.dbyzero.tools.EventManager Object
 *
 * @author dbyzero
 * @date : 2013/09/01
 * @description : Event Manager
 *
 */

var org = org || {} ;
org.dbyzero = org.dbyzero || {} ;
org.dbyzero.tools = org.dbyzero.tools || {} ;

(function(tools,document,undefined) {
	tools = org.dbyzero.tools || {} ;

	tools.EventManager = {} ;
	tools.EventManager.events = {} ;

	tools.EventManager.register = function(eventName,eventFunction) {
		tools.EventManager.events[eventName] = tools.EventManager.events[eventName] || {} ;
		if(tools.EventManager.events[eventName].listeners === undefined) {
			tools.EventManager.events[eventName].listeners = [] ;
		}
		tools.EventManager.events[eventName].listeners.push(eventFunction) ;
	}

	tools.EventManager.unregister = function(eventName) {
		delete tools.EventManager.events[eventName] ;
	}

	tools.EventManager.unregisterAll = function() {
		tools.EventManager.events = {} ;
	}

	tools.EventManager.fire = function(eventName,e) {
		if(tools.EventManager.events[eventName] == undefined) {
			//org.dbyzero.tools.Log.error('event ' + eventName + ' do not exists.') ;
			return ;
		}
		var listListener = tools.EventManager.events[eventName].listeners ;
		for(var i=0;i<listListener.length;i++) {
		if(listListener[i] === undefined) {
		org.dbyzero.tools.Log.error('function added to listener '+ eventName + ' is undefined') ;
		continue;
		}
			listListener[i](e) ;
		}
	}
})(org.dbyzero.tools, document);
/**
 *
 * org.dbyzero.tools.KeyboardController Object
 *
 * @author dbyzero
 * @date : 2013/10/29
 * @description : Handler keyboard event
 * 
 */

var org = org || {} ;
org.dbyzero = org.dbyzero || {} ;
org.dbyzero.tools = org.dbyzero.tools || {} ;

(function(tools,document,undefined) {

	var EventManager = tools.EventManager;
	/**
	 * Keyboard constructor
	 *
	 * */
	tools.KeyboardController = {};

	tools.KeyboardController.addManagedKey = function(key) {
		tools.KeyboardController.managedKeys[key] = true;
	}

	tools.KeyboardController.removeManagedKey = function(key) {
		delete tools.KeyboardController.managedKeys[key];
	}

	tools.KeyboardController.keyPressed = function(e) {
		var evtobj = window.event? event : e;
		var key = evtobj.keyCode;
		if(key in tools.KeyboardController.managedKeys){
			if(tools.KeyboardController.keyStatus[key] === true) return;
			tools.KeyboardController.keyStatus[key] = true;
			//console.log('pressed '+key);
			EventManager.fire("org.dbyzero.tools.KeyboardController.keyPressed."+key);
		}
	}

	tools.KeyboardController.keyReleased = function(e) {
		var evtobj = window.event? event : e;
		var key = evtobj.keyCode;
		if(key in tools.KeyboardController.managedKeys){
			if(tools.KeyboardController.keyStatus[key] === false) return;
			tools.KeyboardController.keyStatus[key] = false;
			//console.log('released '+key);
			EventManager.fire("org.dbyzero.tools.KeyboardController.keyReleased."+key);
		}
	}

	tools.KeyboardController.keyStatus = {};
	tools.KeyboardController.managedKeys = {};
	
	tools.KeyboardController.keys = {};
	tools.KeyboardController.keys.ENTER = 13;
	tools.KeyboardController.keys.SPACE = 32;
	tools.KeyboardController.keys.ARROW_LEFT = 37;
	tools.KeyboardController.keys.ARROW_RIGHT = 39;
	tools.KeyboardController.keys.ARROW_DOWN = 40;
	tools.KeyboardController.keys.ARROW_UP = 38;
	tools.KeyboardController.keys.n1 = 49;
	tools.KeyboardController.keys.n2 = 50;
	tools.KeyboardController.keys.n3 = 51;
	tools.KeyboardController.keys.n4 = 52;
	tools.KeyboardController.keys.n5 = 53;
	tools.KeyboardController.keys.X = 88;

	document.onkeydown  = tools.KeyboardController.keyPressed;
	document.onkeyup    = tools.KeyboardController.keyReleased;

   
})(org.dbyzero.tools, document);
/**
 *
 * org.dbyzero.deimos.Config Object
 *
 * @author dbyzero
 * @date : 2013/08/09
 * @description : Config of the application
 *
 * */

var org = org || {} ;
org.dbyzero = org.dbyzero || {} ;
org.dbyzero.deimos = org.dbyzero.deimos || {} ;

(function(deimos,document,undefined) {
	deimos.Config = {};
	deimos.Config.FPS = 60;
	deimos.Config.mode = "debug",
	deimos.Config.messageLevel = "verbose",
	deimos.Config.FPS = 60;
	deimos.Config.GAME_SPEED = 33;
	deimos.Config.SQUARE_AUTHORITY = 100*100;
	deimos.Config.DELTA_SERVER_SYNC = 5000;
	deimos.Config.showOwnMirror = false;

	/******
	 * UI
	 *****/
	deimos.Config.ui = {};

	deimos.Config.ui.chatDomId = 'org.dbyzero.deimos.messageArea';
	deimos.Config.ui.disconnectDomId = 'org.dbyzero.deimos.gamePopup.disconnect';

	deimos.Config.ui.indication = {};
	deimos.Config.ui.indication.lag = 'org.dbyzero.deimos.gamePopup.indicatorLag';
	deimos.Config.ui.indication.fps = 'org.dbyzero.deimos.gamePopup.indicatorFps';
	deimos.Config.ui.indication.connectionStatus = 'org.dbyzero.deimos.gamePopup.indicatorConnected';
	deimos.Config.ui.indication.serverStatus = 'org.dbyzero.deimos.gamePopup.indicatorServer';

	deimos.Config.ui.login = {};
	deimos.Config.ui.login.formDomId = 'org.dbyzero.deimos.gamePopup.loginForm';
	deimos.Config.ui.login.sectionDomId = 'org.dbyzero.deimos.gamePopup.sectionLogin';
	deimos.Config.ui.login.inputLoginDomId = 'org.dbyzero.deimos.gamePopup.loginInput';
	deimos.Config.ui.login.inputPasswordDomId = 'org.dbyzero.deimos.gamePopup.passwordInput';

	deimos.Config.ui.chooseAvatar = {};
	deimos.Config.ui.chooseAvatar.sectionDomId = 'org.dbyzero.deimos.gamePopup.sectionChooseAvatar';
	deimos.Config.ui.chooseAvatar.formDomId = 'org.dbyzero.deimos.gamePopup.formChooseAvatar';
	deimos.Config.ui.chooseAvatar.avatarListDomId = 'org.dbyzero.deimos.gamePopup.avatarList';
	deimos.Config.zone = {};

})(org.dbyzero.deimos, document);
/**
 *
 * org.dbyzero.deimos.Engine Object
 *
 * @author dbyzero
 * @date : 2013/08/04
 * @description : Engine class manage the application
 *
 **/

(function(deimos,document,undefined) {

	/**
	 * org.dbyzero.deimos.Engine initializer
	 * 
	 * @param string wsUrl URL of websocket server
	 * @param string wsPort port of websocket server
	 * @param EngineMode Mode of the client, can be EngineMode.DEBUG to show logs
	 *
	 * */

	var KeyboardController = org.dbyzero.tools.KeyboardController;
	var EventManager = org.dbyzero.tools.EventManager;

	//used to translation
	var _t = null;

	deimos.Engine = {
		running : false,
		start : function (config){
			deimos.Engine.running = false;

			//making UI
			deimos.Engine.ui = new deimos.render.UI() ;
			deimos.Engine.lastUpdate = null;
			deimos.Engine.lastSync = null;
			deimos.Engine.needSync = false;
			deimos.Engine.itemTemplates = {}; 
			deimos.Engine.pastFPS = [];

			//stocking asset access
			deimos.Engine.assetURL = config.serverAssetURL;

			deimos.Engine._t = deimos.network.Message.CODE[deimos.Config.messageLevel];

			//set runlevel
			deimos.Engine.mode = ( 
				deimos.Config.mode == "debug" ? 
				deimos.Engine.Mode.DEBUG 
				: deimos.Engine.Mode.PROD 
			) ;

			//making network manager
			deimos.Engine.networkManager = new deimos.network.Manager();
			deimos.Engine.networkManager.init();

			//making main loop
			deimos.Engine.loop = new org.dbyzero.tools.Loop('main_loop',parseInt(1000/deimos.Config.FPS)) ;


			//setting websocket server
			deimos.Engine.wsUrl = config.serverURL;
			deimos.Engine.wsPort = config.serverPort ;
			deimos.Engine.wsClient = new deimos.network.WebsocketClient(deimos.Engine.wsUrl,deimos.Engine.wsPort,deimos.Engine.mode);

			//making scene
			deimos.Engine.scene = new deimos.render.Scene();

			bindEngineEvent();

			//login by token
			deimos.Engine.wsClient.connect() ;
			deimos.Engine.wsClient.session_id = config.sessionId;
			var _t = deimos.Engine._t;
			var message = {};
			message[_t['ACTION']] = _t['AUTH_BY_TOKEN'];
			message[_t['MESSAGE']] = {};
			deimos.Engine.networkManager.sendMessage(message);
		},

		stop: function (){
			//do nothing if already stopped
			if(deimos.Engine.running === false) return;

			deimos.Engine.running = false;
			unbindGameEventKey() ;
			deimos.Engine.loop.stop() ;

			if(deimos.Engine.avatar)
				deimos.Engine.avatar.cleanDom();

			if(deimos.Engine.scene)
				deimos.Engine.scene.destroy();

			if(deimos.Engine.networkManager)
				deimos.Engine.networkManager.destroy();

			if(deimos.Engine.ui)
				deimos.Engine.ui.loggout() ;

			if(deimos.Engine.zone)
				deimos.Engine.zone.destroy() ;

			if(deimos.Engine.wsClient)
				deimos.Engine.wsClient.close();

			delete deimos.Engine.avatar;
			delete deimos.Engine.zone;
			delete deimos.Engine.ui;
			delete deimos.Engine.pastFPS;
			delete deimos.Engine.itemTemplates; 
			delete deimos.Engine.needSync;
			delete deimos.Engine.lastSync;
			delete deimos.Engine.lastUpdate;
			delete deimos.Engine.assetURL;
			delete deimos.Engine._t;
			delete deimos.Engine.mode;
			delete deimos.Engine.networkManager;
			delete deimos.Engine.wsClient;
			delete deimos.Engine.scene;
			delete deimos.Engine.wsPort;
			delete deimos.Engine.wsUrl;
			delete deimos.Engine.loop;
		},

		keyHandlerUp: function(e){
			evtobj = window.event? event : e
			keyCode = evtobj.keyCode ;
		},

		keyHandlerDown: function(e){
		},

		/**
		 * MAIN GAME LOOP
		 */
		update: function(){
			if(deimos.Engine.running === false) return;

			//time things
			if(deimos.Engine.lastUpdate === null)
			{
				deimos.Engine.lastUpdate = new Date().getTime();
			}
			var now = new Date().getTime();
			var dt = now - deimos.Engine.lastUpdate;
			deimos.Engine.scene.update(dt,now) ;
			deimos.Engine.lastUpdate += dt;

			//sync things
			if(deimos.Engine.lastSync === null)
			{
				deimos.Engine.lastSync = new Date().getTime();
			}
			if(deimos.Engine.lastSync + deimos.Config.DELTA_SERVER_SYNC < now)
			{
				if(deimos.Engine.avatar !== undefined) {
					EventManager.fire("org.dbyzero.deimos.network.sendSync");
					deimos.Engine.lastSync = now;
				}
			}
		},

		initGameArea: function(e) {
			var _t = deimos.Engine._t;
			deimos.Engine.zone = new deimos.element.Zone(
				e[_t.MESSAGE][_t.MESSAGE_GAME_AREA_NAME],
				e[_t.MESSAGE][_t.MESSAGE_GAME_AREA_DOM_ID],
				e[_t.MESSAGE][_t.MESSAGE_GAME_AREA_WIDTH],
				e[_t.MESSAGE][_t.MESSAGE_GAME_AREA_HEIGHT],
				e[_t.MESSAGE][_t.MESSAGE_GAME_AREA_BLOCKS]
			);
		},

		startGame: function(e) {
			var _t = deimos.Engine._t;
			var skin					= e[_t.MESSAGE][_t.MESSAGE_CHAR][_t.MESSAGE_SKIN];
			var id						= e[_t.MESSAGE][_t.MESSAGE_CHAR][_t.MESSAGE_ELEMENT_ID];
			var name					= e[_t.MESSAGE][_t.MESSAGE_CHAR][_t.NAME];
			var size					= e[_t.MESSAGE][_t.MESSAGE_CHAR][_t.MESSAGE_SIZE];
			var deltashow				= e[_t.MESSAGE][_t.MESSAGE_CHAR][_t.MESSAGE_DELTASHOW];
			var position				= e[_t.MESSAGE][_t.MESSAGE_CHAR][_t.MESSAGE_POSITION];
			var move_speed				= e[_t.MESSAGE][_t.MESSAGE_CHAR][_t.MESSAGE_MOVE_SPEED];
			var jump_speed				= e[_t.MESSAGE][_t.MESSAGE_CHAR][_t.MESSAGE_JUMP_SPEED];
			var item_slot_head			= e[_t.MESSAGE][_t.MESSAGE_CHAR][_t.ITEM_SLOT_HEAD];
			var item_slot_foot			= e[_t.MESSAGE][_t.MESSAGE_CHAR][_t.ITEM_SLOT_FOOT];
			var item_slot_chest			= e[_t.MESSAGE][_t.MESSAGE_CHAR][_t.ITEM_SLOT_CHEST];
			var item_slot_left_hand		= e[_t.MESSAGE][_t.MESSAGE_CHAR][_t.ITEM_SLOT_LEFT_HAND];
			var item_slot_right_hand	= e[_t.MESSAGE][_t.MESSAGE_CHAR][_t.ITEM_SLOT_RIGHT_HAND];
			var oriented				= e[_t.MESSAGE][_t.MESSAGE_CHAR][_t.MESSAGE_ANIMATION][_t.MESSAGE_DIRECTION];
			//make avatar
			deimos.Engine.avatar = new deimos.element.Avatar(name,
				new org.dbyzero.tools.Vector(
					parseInt(position.x),
					parseInt(position.y)
				),
				//size from server because it's needed for collisions
				new org.dbyzero.tools.Vector(
					parseInt(size.x),
					parseInt(size.y)
				),
				id,
				deltashow,
				e[_t.MESSAGE][_t.MESSAGE_CHAR][_t.MESSAGE_MASS]
			);
			deimos.Engine.avatar.maxHP = e[_t.MESSAGE][_t.MESSAGE_CHAR][_t.MESSAGE_HP];
			deimos.Engine.avatar.HP = e[_t.MESSAGE][_t.MESSAGE_CHAR][_t.MESSAGE_CURRENT_HP];

			if(parseInt(item_slot_head) > 0)
			{
				deimos.Engine.storeItemFromServer(e[_t.MESSAGE][_t.MESSAGE_ITEMS][_t.ITEM_SLOT_HEAD]);
			}
			if(parseInt(item_slot_foot) > 0)
			{
				deimos.Engine.storeItemFromServer(e[_t.MESSAGE][_t.MESSAGE_ITEMS][_t.ITEM_SLOT_FOOT]);
			}
			if(parseInt(item_slot_chest) > 0)
			{
				deimos.Engine.storeItemFromServer(e[_t.MESSAGE][_t.MESSAGE_ITEMS][_t.ITEM_SLOT_CHEST]);
			}
			if(parseInt(item_slot_left_hand) > 0)
			{
				deimos.Engine.storeItemFromServer(e[_t.MESSAGE][_t.MESSAGE_ITEMS][_t.ITEM_SLOT_LEFT_HAND]);
			}
			if(parseInt(item_slot_right_hand) > 0)
			{
				deimos.Engine.storeItemFromServer(e[_t.MESSAGE][_t.MESSAGE_ITEMS][_t.ITEM_SLOT_RIGHT_HAND]);
			}

			deimos.Engine.avatar.move_speed = move_speed;
			deimos.Engine.avatar.jump_speed = jump_speed;
			deimos.Engine.avatar.item_slot_head = item_slot_head;
			deimos.Engine.avatar.item_slot_foot = item_slot_foot;
			deimos.Engine.avatar.item_slot_chest = item_slot_chest;
			deimos.Engine.avatar.item_slot_left_hand = item_slot_left_hand;
			deimos.Engine.avatar.item_slot_right_hand = item_slot_right_hand;
			deimos.Engine.avatar.oriented = oriented;
			deimos.Engine.avatar.skin = skin;
			deimos.Engine.avatar.init();
			bindGameEventKey();

			//starting
			deimos.Engine.running = true;
			deimos.Engine.scene.dataToParse = e[_t.MESSAGE][_t.ACTION_SYNC];
			deimos.Engine.loop.start(deimos.Engine.update.bind(deimos.Engine));
		},

		getItemTemplate : function(itemId, callback) {
			//if not yet get, we ask for it, else, load the callback
			if(deimos.Engine.itemTemplates[itemId] === undefined) {
				deimos.Engine.networkManager.askItemTemplate(itemId);
				EventManager.register('org.dbyzero.deimos.Engine.newItemStored.'+itemId,function(item) {
					EventManager.unregister('org.dbyzero.deimos.Engine.newItemStored.'+itemId);
					callback(item);
				});
			} else {
				callback(deimos.Engine.itemTemplates[itemId]);
			}
		},

		onAvatarSelected : function(avatar) {
			var _t = deimos.Engine._t;
			var e = {} ;
			e[_t.ACTION] = _t.ACTION_CHOOSE_CHAR;
			e[_t.MESSAGE] = {};
			e[_t.MESSAGE][_t.MESSAGE_CHAR] = avatar;
			deimos.Engine.networkManager.sendMessage(e);
		},

		//avatar is selected and confirmed by the backend
		avatarSelectionConfirmed: function(e) {
			var _t = deimos.Engine._t;
			if(!!e[_t.MESSAGE][_t.MESSAGE_CHAR][_t.MESSAGE_ELEMENT_ID]) {
				document.getElementById(deimos.Config.ui.chooseAvatar.sectionDomId).style.display = 'none' ;
				EventManager.fire("org.dbyzero.deimos.engine.gameStarted",e);
			} else {
				EventManager.fire("org.dbyzero.deimos.console.write",{"detail":{"message":"Avatar has no id "}});
			}
		}
	}

	//private function
	var unbindEngineEvent = function(){
		EventManager.unregister('org.dbyzero.deimos.engine.gameStarted');
		EventManager.unregister('org.dbyzero.deimos.network.connected');
		EventManager.unregister('org.dbyzero.deimos.network.disconnected');
		EventManager.unregister('org.dbyzero.deimos.network.loggout');
		EventManager.unregister('org.dbyzero.deimos.network.logged') ;
		EventManager.unregister('org.dbyzero.deimos.ui.avatarSelected') ;
		EventManager.unregister('org.dbyzero.deimos.network.avatarSelectionConfirmed') ;
	}


	var bindEngineEvent = function(){
		EventManager.register('org.dbyzero.deimos.network.connected',function() {
			//for now we restart loop when it's needed
			// deimos.Engine.loop.start(deimos.Engine.update.bind(deimos.Engine)) ;
		});

		EventManager.register('org.dbyzero.deimos.engine.gameStarted',deimos.Engine.startGame);

		EventManager.register('org.dbyzero.deimos.network.disconnected',deimos.Engine.stop);
		EventManager.register('org.dbyzero.deimos.network.loggout',deimos.Engine.stop);

		EventManager.register('org.dbyzero.deimos.network.logged',deimos.Engine.initGameArea) ;


		EventManager.register('org.dbyzero.deimos.ui.avatarSelected',deimos.Engine.onAvatarSelected) ;
		EventManager.register('org.dbyzero.deimos.network.avatarSelectionConfirmed',deimos.Engine.avatarSelectionConfirmed) ;
	}


	//private function
	var unbindGameEventKey = function(){
		EventManager.unregister('org.dbyzero.tools.KeyboardController.keyPressed.'+KeyboardController.keys.ENTER);
		EventManager.unregister('org.dbyzero.tools.KeyboardController.keyPressed.'+KeyboardController.keys.SPACE);
		EventManager.unregister('org.dbyzero.tools.KeyboardController.keyPressed.'+KeyboardController.keys.ARROW_LEFT);
		EventManager.unregister('org.dbyzero.tools.KeyboardController.keyPressed.'+KeyboardController.keys.ARROW_RIGHT);
		EventManager.unregister('org.dbyzero.tools.KeyboardController.keyPressed.'+KeyboardController.keys.ARROW_DOWN);
		EventManager.unregister('org.dbyzero.tools.KeyboardController.keyPressed.'+KeyboardController.keys.ARROW_UP);
		EventManager.unregister('org.dbyzero.tools.KeyboardController.keyPressed.'+KeyboardController.keys.X);
		EventManager.unregister('org.dbyzero.tools.KeyboardController.keyPressed.'+KeyboardController.keys.n1);
		EventManager.unregister('org.dbyzero.tools.KeyboardController.keyPressed.'+KeyboardController.keys.n2);
		EventManager.unregister('org.dbyzero.tools.KeyboardController.keyReleased.'+KeyboardController.keys.ARROW_LEFT);
		EventManager.unregister('org.dbyzero.tools.KeyboardController.keyReleased.'+KeyboardController.keys.ARROW_RIGHT);
		EventManager.unregister('org.dbyzero.tools.KeyboardController.keyReleased.'+KeyboardController.keys.ARROW_DOWN);
		EventManager.unregister('org.dbyzero.deimos.avatar.move.left');
		EventManager.unregister('org.dbyzero.deimos.avatar.move.right');
		EventManager.unregister('org.dbyzero.deimos.avatar.move.left.stop');
		EventManager.unregister('org.dbyzero.deimos.avatar.move.right.stop');
		EventManager.unregister('org.dbyzero.deimos.avatar.jump');
		EventManager.unregister('org.dbyzero.deimos.avatar.speak');
		EventManager.unregister('org.dbyzero.deimos.avatar.speak.stop');

		/**
		 * For Test
		 */
		EventManager.unregister('org.dbyzero.deimos.test.popitem');
	}


	//private function
	var bindGameEventKey = function(){
		//LEFT
		KeyboardController.addManagedKey(KeyboardController.keys.ENTER);
		KeyboardController.addManagedKey(KeyboardController.keys.SPACE);
		KeyboardController.addManagedKey(KeyboardController.keys.ARROW_LEFT);
		KeyboardController.addManagedKey(KeyboardController.keys.ARROW_RIGHT);
		KeyboardController.addManagedKey(KeyboardController.keys.ARROW_DOWN);
		KeyboardController.addManagedKey(KeyboardController.keys.ARROW_UP);
		KeyboardController.addManagedKey(KeyboardController.keys.X);
		KeyboardController.addManagedKey(KeyboardController.keys.n1);
		KeyboardController.addManagedKey(KeyboardController.keys.n2);

		EventManager.register('org.dbyzero.tools.KeyboardController.keyPressed.'+KeyboardController.keys.ENTER,function(){
			if(deimos.Engine.avatar.speaking) {
				EventManager.fire("org.dbyzero.deimos.avatar.speak.stop",{'action':'speak_stop'});
			} else {
				EventManager.fire("org.dbyzero.deimos.avatar.speak",{'action':'speak'});
			}
		});

		EventManager.register('org.dbyzero.tools.KeyboardController.keyPressed.'+KeyboardController.keys.ARROW_RIGHT,function(){
			if(!deimos.Engine.avatar.speaking) {
				EventManager.fire("org.dbyzero.deimos.avatar.move.right",{'action':'move_right'});
			}
		});

		EventManager.register('org.dbyzero.tools.KeyboardController.keyPressed.'+KeyboardController.keys.ARROW_LEFT,function(){
			if(!deimos.Engine.avatar.speaking) {
				EventManager.fire("org.dbyzero.deimos.avatar.move.left",{'action':'move_left'});
			}
		});

		//note : event is synchronizide on Avatar class when the engine really finish the move
		EventManager.register('org.dbyzero.tools.KeyboardController.keyReleased.'+KeyboardController.keys.ARROW_RIGHT,function(){
			if(!deimos.Engine.avatar.speaking) {
				EventManager.fire("org.dbyzero.deimos.avatar.move.right.stop",{'action':'move_right_stop'});
			}
		});

		//note : event is synchronizide on Avatar class when the engine really finish the move
		EventManager.register('org.dbyzero.tools.KeyboardController.keyReleased.'+KeyboardController.keys.ARROW_LEFT,function(){
			if(!deimos.Engine.avatar.speaking) {
				EventManager.fire("org.dbyzero.deimos.avatar.move.left.stop",{'action':'move_left_stop'});
			}
		});

		EventManager.register('org.dbyzero.tools.KeyboardController.keyPressed.'+KeyboardController.keys.ARROW_DOWN,function(){
			if(!deimos.Engine.avatar.speaking) {
				EventManager.fire("org.dbyzero.deimos.avatar.go.down",{'action':'go_down_active'});
			}
		});

		EventManager.register('org.dbyzero.tools.KeyboardController.keyReleased.'+KeyboardController.keys.ARROW_DOWN,function(){
			if(!deimos.Engine.avatar.speaking) {
				EventManager.fire("org.dbyzero.deimos.avatar.go.down.stop",{'action':'go_down_inactive'});
			}
		});

		EventManager.register('org.dbyzero.tools.KeyboardController.keyPressed.'+KeyboardController.keys.ARROW_UP,function(){
			if(!deimos.Engine.avatar.speaking) {
				EventManager.fire("org.dbyzero.deimos.avatar.jump",{'action':'jump'});
			}
		});

		EventManager.register('org.dbyzero.tools.KeyboardController.keyPressed.'+KeyboardController.keys.SPACE,function(){
			if(!deimos.Engine.avatar.speaking) {
				deimos.Engine.avatar.attack();
			}
		});
	}

	/**
	 * A Kind of enum for different modes
	 * 
	 * DEBUG shows a lot of log in browser
	 * PROD remove logs
	 *
	 * */
	deimos.Engine.Mode = {
		DEBUG : {value: 0, name:'debug'},
		PROD : {value: 1, name:'prod'}
	}
})(org.dbyzero.deimos, document);
/**
 * Important : Actuellement deprecated mais on le garde si besoin en reto compat
 * 
 * org.dbyzero.deimos.render.Animation Object
 *
 * @author dbyzero
 * @date : 2013/08/10
 * @description : Animation model
 *
 * */

(function(deimos,document,undefined) {

	deimos.render = deimos.render || {} ;

	/**
	 * Animation constructor
	 * 
	 * @param spritesheet string of the animation spritesheet link
	 * @param speed integer delay between each animation in ms
	 *
	 * */
	deimos.render.Animation = {}

	deimos.render.Animation.Type = {
		WALK_RIGHT : {value: 0, type:'walk', direction:'right'},
		WALK_LEFT : {value: 1, type:'walk', direction:'left'},

		JUMP_RIGHT : {value: 2, type:'jump', direction:'right'},
		JUMP_LEFT : {value: 3, type:'jump', direction:'left'},
		
		SEE_RIGHT : {value: 4, type:'see', direction:'right'},
		SEE_LEFT : {value: 5, type:'see', direction:'left'},
		
		FLY_RIGHT : {value: 6, type:'fly', direction:'right'},
		FLY_LEFT : {value: 7, type:'fly', direction:'left'},
	}

	deimos.render.Animation.factory = function(type, direction, value) {
		var anim = null;
		for(var k in animation) {
			anim = animation[k];
			if(anim.value === value) return anim;
			if(anim.direction === direction && anim.type === type) return anim;
		}
		throw new Execption("Animation not find, args:"+Array.slice(arguments).join(','));
	}

})(org.dbyzero.deimos, document);
/**
 *
 * org.dbyzero.deimos.render.UI Object
 *
 * @author dbyzero
 * @date : 2013/08/04
 * @description : UI to show things !
 *
 * */

(function(deimos,document,undefined) {

	var EventManager = org.dbyzero.tools.EventManager;

	deimos.render = deimos.render || {} ;

	deimos.render.UI = function(){

		//HTML
		var gamePopupHTML = ''+
		'<section id="org.dbyzero.deimos.gamePopup.main" style="background-color:#ebd3ad;width:200px;position:fixed;top:0px;left:0px;border:1px solid #9e6111;border-radius:5px;z-index:1000000;cursor:pointer">'+
			'<header style="width:194px;background-color:#fee895;height:20px;font-family:Arial;padding:3px;font-size:15px;border-radius:5px">'+
				'Deimos'+
				'<div id="org.dbyzero.deimos.gamePopup.message" style="transition:background-color 0.25s, border 0.25s;float:right;background-color:#ebd3ad;width:13px;height: 18px;border-right: 5px #AF9D7F solid;cursor:pointer"></div>'+
			'</header>'+
			'<section id="org.dbyzero.deimos.gamePopup.sectionChooseAvatar">'+
				'<select id="org.dbyzero.deimos.gamePopup.avatarList" name="choose_avatar" style="border:1px solid #333;background-color:#fff;margin:8px 0 8px 5px;width:105px" size="5"></select>'+
				'<input id="org.dbyzero.deimos.gamePopup.formChooseAvatar" type="button" value="Choose" style="border:1px solid #333;background-color:#fff;margin:0x; position: absolute; bottom: 55px; right: 4px;"> '+
			'</section>'+
			'<footer style="width:194px;background-color:#FFFAED;height:20px;font-family:Arial;padding:3px;font-size:10px;border-radius:5px;margin-bottom:0px;">'+
				'<span>FPS : <span id="org.dbyzero.deimos.gamePopup.indicatorFps">n/a</span></span> | '+
				'<span>LAG : <span id="org.dbyzero.deimos.gamePopup.indicatorLag">n/a</span></span>'+
			'</footer>'+
		'</section>';

		var popupContainerElement = document.createElement('div');
		popupContainerElement.innerHTML = gamePopupHTML;
		document.body.appendChild(popupContainerElement);

		var messageAreaElement = document.createElement('ul');
		messageAreaElement.id = 'org.dbyzero.deimos.messageArea';
		messageAreaElement.style.backgroundColor = 'rgb(255, 239, 219)';
		messageAreaElement.style.width = '0px';
		messageAreaElement.style.height = '98%';
		messageAreaElement.style.position = 'fixed';
		messageAreaElement.style.top = '0px';
		messageAreaElement.style.right = '0px';
		messageAreaElement.style.border = '1px solid #ccc';
		messageAreaElement.style.zIndex = '1000000';
		messageAreaElement.style.fontFamily = 'monospace';
		messageAreaElement.style.fontSize = '10px';
		messageAreaElement.style.overflow = 'auto';
		messageAreaElement.style.overflowX = 'hidden';
		messageAreaElement.style.listStyle = 'none';
		messageAreaElement.style.margin = '0';
		messageAreaElement.style.padding = '5px 5px 0 5px';
		messageAreaElement.style.transition = 'width 0.5s linear';
		messageAreaElement.style.display = 'none';
		document.body.appendChild(messageAreaElement);

		//EVENTS
		var popup = document.getElementById("org.dbyzero.deimos.gamePopup.main");
		var dragEnable = false;
		var oldX = null;
		var oldY = null;
		popup.onmousedown = function(e){
			dragEnable = true;
			oldX = e.x;
			oldY = e.y;
		};
		document.onmouseup = function(e){
			dragEnable = false;
			oldX = null;
			oldY = null;
		};
		document.onmousemove = function(e){
			if(dragEnable) {
				popup.style.top = parseInt(popup.style.top.slice(0,-2)) + (e.y - oldY) +"px";
				popup.style.left = parseInt(popup.style.left.slice(0,-2)) + (e.x - oldX) +"px";
				oldX = e.x;
				oldY = e.y;
			}
			e.preventDefault();
			return false;
		};
		document.getElementById("org.dbyzero.deimos.gamePopup.message").onclick = function(e){
			if(document.getElementById("org.dbyzero.deimos.messageArea").style.width === "190px") {
				document.getElementById("org.dbyzero.deimos.messageArea").style.width = "0px";
				setTimeout(function(){
					document.getElementById("org.dbyzero.deimos.messageArea").style.display = "none";
				}
				,500);
			} else {
				document.getElementById("org.dbyzero.deimos.messageArea").style.display = "block";
				setTimeout(function(){
					document.getElementById("org.dbyzero.deimos.messageArea").style.width = "190px";
				}
				,0);
			}
		};

		this.bind();
		this.maxConsoleRow = 100 ;
	}

	deimos.render.UI.prototype = {
		bind: function() {
			EventManager.register('org.dbyzero.deimos.console.write',this.addmessage.bind(this)) ;
			EventManager.register('org.dbyzero.deimos.console.writeError',this.addmessageError.bind(this)) ;
			EventManager.register('org.dbyzero.deimos.network.logged',this.onLogged.bind(this)) ;
			document.getElementById('org.dbyzero.deimos.gamePopup.formChooseAvatar').onclick = this.onAvatarChoosed.bind(this) ;
		},

		unbind : function(e) {
			EventManager.unregister('org.dbyzero.deimos.console.write');
			EventManager.unregister('org.dbyzero.deimos.console.writeError');
			EventManager.unregister('org.dbyzero.deimos.network.avatar_selected');
			EventManager.unregister('org.dbyzero.deimos.network.logged');
			// document.getElementById(deimos.Config.ui.disconnectDomId).onclick = null ;
		},

		loggout : function() {
			this.unbind();
			var mainDom = document.getElementById('org.dbyzero.deimos.gamePopup.main');
			var messageDom = document.getElementById('org.dbyzero.deimos.gamePopup.message');
			mainDom.parentNode.removeChild(mainDom);
			messageDom.parentNode.removeChild(messageDom);
		},

		//add a message to ui log
		addmessage : function(e) {
			var msgZone = document.getElementById(deimos.Config.ui.chatDomId) ;

			var dom_elem = document.createElement("li");
			dom_elem.innerText = e.detail.message ;
				msgZone.appendChild(dom_elem) ;
			this.cropConsoleRow(this.maxConsoleRow) ;
		},

		//add error message on ui
		addmessageError : function(e) {
			var msgZone = document.getElementById(deimos.Config.ui.chatDomId) ;
			document.getElementById('org.dbyzero.deimos.gamePopup.message').style.backgroundColor = 'red' ;
			document.getElementById('org.dbyzero.deimos.gamePopup.message').style.borderColor = 'red' ;
			setTimeout(function(){
				document.getElementById('org.dbyzero.deimos.gamePopup.message').style.backgroundColor = '#ebd3ad' ;
				document.getElementById('org.dbyzero.deimos.gamePopup.message').style.borderColor = '#AF9D7F' ;
			},250);

			var dom_elem = document.createElement("li");
			dom_elem.className = 'error' ;
			dom_elem.innerText = e.detail.message ;
				msgZone.appendChild(dom_elem) ;
			this.cropConsoleRow(this.maxConsoleRow) ;
		},

		//clear what I cannot see
		cropConsoleRow : function(max) {
			var msgZone = document.getElementById(deimos.Config.ui.chatDomId) ;
			while(msgZone.getElementsByTagName('li').length > max) {
				msgZone.childNodes[0].remove();
			}
			msgZone.scrollTop = msgZone.scrollHeight;
		},

		updateLag : function(lag) {
			document.getElementById(deimos.Config.ui.indication.lag).innerHTML = lag+'ms';
		},

		updateFPS : function(fps) {
			var nbrIntegrate = 50;
			deimos.Engine.pastFPS.unshift(fps);
			deimos.Engine.pastFPS.length = Math.min(deimos.Engine.pastFPS.length,nbrIntegrate);
			var interpolatedFPS = parseInt(deimos.Engine.pastFPS.reduce(function(p,c){return p+c;})/nbrIntegrate);
			document.getElementById(deimos.Config.ui.indication.fps).innerHTML = interpolatedFPS;
		},

		//show list of avatar
		onLogged: function(e) {
			var _t = deimos.Engine._t;

			//adding avatar choice
			var i = 0 ;
			var avatars = e[_t.MESSAGE][_t.AVATARS];
			for(avatar in avatars) {
				var option = new Option(avatars[avatar][_t.NAME],avatars[avatar][_t.ID]);;
				document.getElementById('org.dbyzero.deimos.gamePopup.avatarList').appendChild(option) ;
				i++;
			}

			document.getElementById('org.dbyzero.deimos.gamePopup.avatarList').selectedIndex = 0;
			// document.getElementById(deimos.Config.ui.chooseAvatar.sectionDomId).style.display = 'block' ;
			EventManager.fire("org.dbyzero.deimos.console.write",{"detail":{"message":"Authenticated to the server"}});
		},

		onAvatarChoosed : function(event){
			var _t = deimos.Engine._t;
			var avatar = null;
			
			var list_avatar = document.getElementById('org.dbyzero.deimos.gamePopup.avatarList');
			if(!!list_avatar.options[list_avatar.selectedIndex]) {
				avatar = list_avatar.options[list_avatar.selectedIndex].value;
			}

			if(!!avatar) {
				EventManager.fire("org.dbyzero.deimos.ui.avatarSelected",avatar);
			} else {
				EventManager.fire("org.dbyzero.deimos.console.write",{"detail":{"message":"Unknow avatar"}});
			}
		},
	}
})(org.dbyzero.deimos, document);
/**
 *
 * org.dbyzero.deimos.render.Scene Object
 *
 * @author dbyzero
 * @date : 2013/08/09
 * @description : Scene where action appends !
 *
 **/

var org = org || {} ;
org.dbyzero = org.dbyzero || {} ;

(function(deimos, document, undefined) {
	var Vector = org.dbyzero.tools.Vector;
	var EventManager = org.dbyzero.tools.EventManager;

	deimos.render = org.dbyzero.deimos.render || {} ;

	deimos.render.Scene = function() {
		this.items			= {};
		this.avatars		= {};
		this.projectiles	= {};
		this.attackZones	= {};
		this.monsters		= {};
		this.dataToParse	= {};
		this.addListener();
	}

	deimos.render.Scene.prototype.destroy = function() {

		//clean avatars
		for(var av_id in deimos.Engine.scene.avatars) {
			this.avatars[av_id].destroy();
		}

		//clean items
		for(var item_id in deimos.Engine.scene.items) {
			this.items[item_id].cleanDom();
			delete this.items[item_id];
		}

		//clean items
		for(var monster_id in this.monsters) {
			this.monsters[monster_id].cleanDom();
			delete this.monsters[monster_id];
		}

		//clean items
		for(var projectile_id in this.projectiles) {
			this.projectiles[projectile_id].cleanDom();
			delete this.projectiles[projectile_id];
		}

		this.removeListener();
	}

	deimos.render.Scene.prototype.parseData = function(data) {
		if(!deimos.Engine.running) return false;
		var _t = deimos.Engine._t;

		/**
		 * AVATARS 
		 */
		//sync avatars
		var avatarUpdated = [];
		var avatars = data[_t.MESSAGE][_t.AVATARS];
		for(var k in avatars) {
			if(this.syncAvatar(avatars[k])) {
				avatarUpdated.push(parseInt(avatars[k][_t['MESSAGE_ELEMENT_ID']]));
			}
		}

		//clean avatar
		for(var i in deimos.Engine.scene.avatars) {
			var av_id = deimos.Engine.scene.avatars[i].serverid;
			if(avatarUpdated.indexOf(av_id) === -1) {
				this.avatars[av_id].destroy();
			}
		}

		/**
		 * ITEMS 
		 */
		//sync items
		var items = data[_t.MESSAGE][_t.ITEMS];
		var itemUpdated = [];
		for(var id in items) {
			this.syncItem(items[id]);
			itemUpdated.push(id);
		}

		//clean items
		for(var item_id in deimos.Engine.scene.items) {
			if(itemUpdated.indexOf(item_id) === -1) {
				this.items[item_id].cleanDom();
				delete this.items[item_id];
			}
		}

		/**
		 * MONSTERS 
		 */
		//sync items
		var monsters = data[_t.MESSAGE][_t.MONSTERS];
		var monsterUpdated = [];
		for(var id in monsters) {
			this.syncMonster(monsters[id]);
			monsterUpdated.push(id);
		}

		//clean items
		for(var monster_id in this.monsters) {
			if(monsterUpdated.indexOf(monster_id) === -1) {
				this.monsters[monster_id].cleanDom();
				delete this.monsters[monster_id];
			}
		}

		/**
		 * PROJECTILES 
		 */
		//sync items
		var projectiles = data[_t.MESSAGE][_t.PROJECTILES];
		var projectileUpdated = [];
		for(var id in projectiles) {
			this.syncProjectile(projectiles[id]);
			projectileUpdated.push(id);
		}

		//clean items
		for(var projectile_id in this.projectiles) {
			if(projectileUpdated.indexOf(projectile_id) === -1) {
				this.projectiles[projectile_id].cleanDom();
				delete this.projectiles[projectile_id];
			}
		}
	}
	
	//@return total periode integrated
	deimos.render.Scene.prototype.update = function(dt,now) {
		if(!!this.dataToParse) {
			var _t = deimos.Engine._t;
			var data = {};
			data[_t['MESSAGE']] = this.dataToParse;
			this.parseData(data);
			this.dataToParse = undefined;
		}

		deimos.Engine.ui.updateFPS(parseInt(1000/dt));

		//update
		var keys,i,avatar,monster;
		keys = Object.keys(this.items);
		for(i=0;i<keys.length;i++) {
			this.items[keys[i]].update(dt,now);
		}
		keys = Object.keys(this.avatars);
		for(i=0;i<keys.length;i++) {
			this.avatars[keys[i]].update(dt,now);
		}
		keys = Object.keys(this.projectiles);
		for(i=0;i<keys.length;i++) {
			this.projectiles[keys[i]].update(dt,now);
		}
		keys = Object.keys(this.monsters);
		for(i=0;i<keys.length;i++) {
			this.monsters[keys[i]].update(dt,now);
		}
		keys = Object.keys(this.attackZones);
		for(i=0;i<keys.length;i++) {
			if(this.attackZones[keys[i]].update(dt,now) == false){
				this.attackZones[keys[i]].destroy();
				delete this.attackZones[keys[i]];
			};
		}
		if(deimos.Engine.avatar !== undefined) {
			deimos.Engine.avatar.update(dt,now) ;
		}

		//move and render entities !
		keys = Object.keys(this.avatars);
		for(i=0;i<keys.length;i++) {
			avatar = this.avatars[keys[i]];
			avatar.move();
			avatar.updateAnimation();
		}
		//move and render projectiles !
		keys = Object.keys(this.projectiles);
		for(i=0;i<keys.length;i++) {
			this.projectiles[keys[i]].move();
		}
		//move and render entities !
		keys = Object.keys(this.items);
		for(i=0;i<keys.length;i++) {
			this.items[keys[i]].move();
		}
		//move and render monsters !
		keys = Object.keys(this.monsters);
		for(i=0;i<keys.length;i++) {
			monster = this.monsters[keys[i]];
			monster.move();
			monster.updateAnimation();
		}

		//avatar move+render+things
		if(deimos.Engine.avatar !== undefined) {
			deimos.Engine.avatar.updateAnimation() ;
			deimos.Engine.avatar.move() ;
			deimos.Engine.avatar.addingWaitingForces() ;
		}
	}

	deimos.render.Scene.prototype.addListener = function() {
		EventManager.register('org.dbyzero.deimos.network.syncItem',this.syncItem.bind(this)) ;
		EventManager.register('org.dbyzero.deimos.network.syncAvatar',this.syncAvatar.bind(this)) ;
		EventManager.register('org.dbyzero.deimos.network.syncMonster',this.syncMonster.bind(this)) ;
		EventManager.register('org.dbyzero.deimos.network.actionCollide',this.elementCollision.bind(this)) ;
		EventManager.register('org.dbyzero.deimos.network.syncProjectile',this.syncProjectile.bind(this)) ;
		EventManager.register('org.dbyzero.deimos.network.syncAttackZone',this.syncAttackZone.bind(this)) ;
		EventManager.register('org.dbyzero.deimos.network.itemGrabbed',this.itemGrabbed.bind(this)) ;
		EventManager.register('org.dbyzero.deimos.render.parseScene',this.parseData.bind(this));
	}

	deimos.render.Scene.prototype.removeListener = function() {
		EventManager.unregister('org.dbyzero.deimos.network.syncItem') ;
		EventManager.unregister('org.dbyzero.deimos.network.syncAvatar') ;
		EventManager.unregister('org.dbyzero.deimos.network.syncMonster') ;
		EventManager.unregister('org.dbyzero.deimos.network.actionCollide') ;
		EventManager.unregister('org.dbyzero.deimos.network.syncProjectile') ;
		EventManager.unregister('org.dbyzero.deimos.network.syncAttackZone') ;
		EventManager.unregister('org.dbyzero.deimos.network.itemGrabbed') ;
		EventManager.unregister('org.dbyzero.deimos.render.parseScene') ;
	}

	deimos.render.Scene.prototype.addItem = function(item) {
		this.items[item.serverid] = item;
	}

	deimos.render.Scene.prototype.syncAvatar = function(e) {
		//wait game start before start..
		if(!deimos.Engine.running) return;

		var _t = deimos.Engine._t;
		var avatar;
		//si on recoit la requete et pas que l'avatar on l'extrait
		if(e[_t['MESSAGE']] !== undefined) {
			avatar = e[_t['MESSAGE']];
		} else {
			avatar = e;
		}

		var av_id = avatar[_t.MESSAGE_ELEMENT_ID];

		//make special sync if it is the current avatar
		if( deimos.Engine.avatar !== undefined && 
			av_id === deimos.Engine.avatar.serverid
		) {
			deimos.Engine.avatar.positionServer.x = avatar[_t.MESSAGE_POSITION].x;
			deimos.Engine.avatar.positionServer.y = avatar[_t.MESSAGE_POSITION].y;
			deimos.Engine.currentLag = new Date().getTime() - avatar[_t.MESSAGE_TIMESTAMP];
			deimos.Engine.ui.updateLag(deimos.Engine.currentLag);
			deimos.Engine.avatar.correctPositionWithServer();

			//stop here if we don't want to show mirror
			if( deimos.Config.showOwnMirror === false )	return false;
		}

		var local_avatar = this.avatars[avatar[_t['MESSAGE_ELEMENT_ID']]];
		//make it if needed
		if(local_avatar === undefined) {
			local_avatar = this.avatars[av_id] = new deimos.element.ServerAvatar(
				avatar[_t.NAME],
				new org.dbyzero.tools.Vector(avatar[_t.MESSAGE_POSITION].x, avatar[_t.MESSAGE_POSITION].y),
				new org.dbyzero.tools.Vector(avatar[_t.MESSAGE_VELOCITY].x, avatar[_t.MESSAGE_VELOCITY].y),
				new org.dbyzero.tools.Vector(avatar[_t.MESSAGE_ACCELERATION].x, avatar[_t.MESSAGE_ACCELERATION].y),
				new org.dbyzero.tools.Vector(avatar[_t.MESSAGE_SIZE].x, avatar[_t.MESSAGE_SIZE].y),
				avatar[_t.MESSAGE_MASS],
				new org.dbyzero.tools.Vector(avatar[_t.MESSAGE_USER_INPUT_VELOCITY].x, avatar[_t.MESSAGE_USER_INPUT_VELOCITY].y),
				av_id,
				avatar[_t.MESSAGE_DELTASHOW]
			) ;
			local_avatar.oriented = avatar[_t.MESSAGE_ANIMATION][_t.MESSAGE_DIRECTION];

			var skin = avatar[_t.MESSAGE_SKIN];

			local_avatar.HP = avatar[_t.MESSAGE_CURRENT_HP];
			local_avatar.maxHP = avatar[_t.MESSAGE_HP];
			local_avatar.skin = skin;
			local_avatar.initAnimation();

			local_avatar.deltashow = avatar[_t.MESSAGE_DELTASHOW];

			local_avatar.init();
		}

		//synchro des infos
		local_avatar.moveSpeed				= avatar[_t.MESSAGE_MOVE_SPEED];
		local_avatar.jumpSpeed				= avatar[_t.MESSAGE_JUMP_SPEED];
		local_avatar.goingDown				= avatar[_t.MESSAGE_GOING_DOWN];
		local_avatar.velocity.x				= avatar[_t.MESSAGE_VELOCITY].x;
		local_avatar.velocity.y				= avatar[_t.MESSAGE_VELOCITY].y;
		// do not synchro position on fly to get smoothy movement
		local_avatar.isLanded = avatar[_t.MESSAGE_LANDED];
		if(local_avatar.isLanded === true)
		{
			local_avatar.position.x				= avatar[_t.MESSAGE_POSITION].x;
			local_avatar.position.y				= avatar[_t.MESSAGE_POSITION].y;
			local_avatar.acceleration.x			= avatar[_t.MESSAGE_ACCELERATION].x;
			local_avatar.acceleration.y			= avatar[_t.MESSAGE_ACCELERATION].y;
		}
		local_avatar.userInputVelocity.x	= avatar[_t.MESSAGE_USER_INPUT_VELOCITY].x;
		local_avatar.userInputVelocity.y	= avatar[_t.MESSAGE_USER_INPUT_VELOCITY].y;
		local_avatar.saying					= avatar[_t.MESSAGE_SAYING];
		local_avatar.item_slot_head			= avatar[_t.ITEM_SLOT_HEAD];
		local_avatar.item_slot_chest		= avatar[_t.ITEM_SLOT_CHEST];
		local_avatar.item_slot_foot			= avatar[_t.ITEM_SLOT_FOOT];
		local_avatar.item_slot_left_hand	= avatar[_t.ITEM_SLOT_LEFT_HAND];
		local_avatar.item_slot_right_hand	= avatar[_t.ITEM_SLOT_RIGHT_HAND];

		local_avatar.HP = avatar[_t.MESSAGE_CURRENT_HP];
		local_avatar.maxHP = avatar[_t.MESSAGE_HP];

		local_avatar.render();
		return true;
	}

	deimos.render.Scene.prototype.syncItem = function(e) {
		//wait game start before start..
		if(!deimos.Engine.running) return;

		var _t = deimos.Engine._t;
		var item;

		//si on recoit la requete et pas que l'avatar on l'extrait
		if(e[_t['MESSAGE']] !== undefined) {
			item = e[_t['MESSAGE']];
		} else {
			item = e;
		}

		var local_item = this.items[item[_t['ID']]];

		//if item is not on the scene we nake it
		if(local_item === undefined) {
			local_item = new deimos.element.Item(
				item[_t.ID],
				new Vector(item[_t.MESSAGE_POSITION].x,item[_t.MESSAGE_POSITION].y), //position
				new Vector(item[_t.MESSAGE_VELOCITY].x,item[_t.MESSAGE_VELOCITY].y), //velocity
				new Vector(item[_t.MESSAGE_ACCELERATION].x,item[_t.MESSAGE_ACCELERATION].y), //acceleration
				new Vector(item[_t.MESSAGE_SIZE].x,item[_t.MESSAGE_SIZE].y), //size
				item[_t.MESSAGE_MASS], //name
				item[_t.MESSAGE_ELEMENT_ID], //name
				item[_t.MESSAGE_SKIN], //skin
				item[_t.MESSAGE_COLOR], //skin
				item[_t.NAME], //skin
				item[_t.MESSAGE_ORIENTATION], //skin
				item[_t.MESSAGE_DELTASHOW] //skin
			);
			local_item.init();
			deimos.Engine.scene.addItem(local_item);
		} else {
			local_item.position .x = item[_t.MESSAGE_POSITION].x;
			local_item.position.y = item[_t.MESSAGE_POSITION].y;
			local_item.velocity.x = item[_t.MESSAGE_VELOCITY].x;
			local_item.velocity.y = item[_t.MESSAGE_VELOCITY].y;
			local_item.acceleration.x = item[_t.MESSAGE_ACCELERATION].x;
			local_item.acceleration.y = item[_t.MESSAGE_ACCELERATION].y;
		}
	}

	deimos.render.Scene.prototype.syncProjectile = function(e) {
		//wait game start before start..
		if(!deimos.Engine.running) return;

		var _t = deimos.Engine._t;
		var msg;

		if(e[_t['MESSAGE']] !== undefined) {
			msg = e[_t['MESSAGE']];
		} else {
			msg = e;
		}

		//make it if needed
		if(this.projectiles[msg[_t['ID']]] === undefined) {
			var projectile = new deimos.element.Projectile(
				msg[_t['ID']],
				new Vector(msg[_t['MESSAGE_POSITION']].x,msg[_t['MESSAGE_POSITION']].y),
				new Vector(msg[_t['MESSAGE_VELOCITY']].x,msg[_t['MESSAGE_VELOCITY']].y),
				new Vector(msg[_t['MESSAGE_ACCELERATION']].x,msg[_t['MESSAGE_ACCELERATION']].y),
				msg[_t['MESSAGE_SIZE']],
				msg[_t['MESSAGE_MASS']],
				msg[_t['MESSAGE_ELEMENT_ID']],
				msg[_t['MESSAGE_SKIN']],
				msg[_t['MESSAGE_COLOR']],
				msg[_t['MESSAGE_DAMAGE']],
				msg[_t['MESSAGE_ORIENTATION']],
				msg[_t['MESSAGE_OWNER']],
				msg[_t['MESSAGE_DELTASHOW']]
			);
			projectile.init();
			projectile.name = 'Projectile '+msg[_t['ID']];
			this.projectiles[msg[_t['ID']]] = projectile;
			if(this.avatars[msg[_t['MESSAGE_OWNER']]] !== undefined) {
				this.avatars[msg[_t['MESSAGE_OWNER']]].lastAttack = new Date().getTime();
			}
		} else {
			var projectile				= this.projectiles[msg[_t['ID']]];
			projectile.velocity.x		= msg[_t.MESSAGE_VELOCITY].x;
			projectile.velocity.y		= msg[_t.MESSAGE_VELOCITY].y;
			projectile.position.x		= msg[_t.MESSAGE_POSITION].x;
			projectile.position.y		= msg[_t.MESSAGE_POSITION].y;
			projectile.acceleration.x	= msg[_t.MESSAGE_ACCELERATION].x;
			projectile.acceleration.y	= msg[_t.MESSAGE_ACCELERATION].y;
			projectile.orientation		= msg[_t.MESSAGE_ORIENTATION];
		}
	}

	deimos.render.Scene.prototype.syncMonster = function(e) {
		//wait game start before start..
		if(!deimos.Engine.running) return;

		var _t = deimos.Engine._t;
		var msg;

		if(e[_t['MESSAGE']] !== undefined) {
			msg = e[_t['MESSAGE']];
		} else {
			msg = e;
		}

		//make it if needed
		if(this.monsters[msg[_t['ID']]] === undefined) {
			var monster = new deimos.element.Monster(
				msg[_t['ID']],
				new Vector(msg[_t['MESSAGE_POSITION']].x,msg[_t['MESSAGE_POSITION']].y),
				new Vector(msg[_t['MESSAGE_VELOCITY']].x,msg[_t['MESSAGE_VELOCITY']].y),
				new Vector(msg[_t['MESSAGE_ACCELERATION']].x,msg[_t['MESSAGE_ACCELERATION']].y),
				msg[_t['MESSAGE_SIZE']],
				msg[_t['MESSAGE_MASS']],
				msg[_t['MESSAGE_ELEMENT_ID']],
				msg[_t['MESSAGE_SKIN']],
				msg[_t['MESSAGE_COLOR']],
				msg[_t['NAME']],
				msg[_t['MESSAGE_DAMAGE']],
				msg[_t['MESSAGE_ORIENTATION']],
				msg[_t['MESSAGE_DELTASHOW']]
			);
			monster.HP = msg[_t['MESSAGE_CURRENT_HP']];
			monster.maxHP = msg[_t['MESSAGE_HP']];
			monster.init();
			this.monsters[msg[_t['ID']]] = monster;
		} else {
			var monster				= this.monsters[msg[_t['ID']]];
			monster.velocity.x		= msg[_t.MESSAGE_VELOCITY].x;
			monster.velocity.y		= msg[_t.MESSAGE_VELOCITY].y;
			monster.position.x		= msg[_t.MESSAGE_POSITION].x;
			monster.position.y		= msg[_t.MESSAGE_POSITION].y;
			monster.acceleration.x	= msg[_t.MESSAGE_ACCELERATION].x;
			monster.acceleration.y	= msg[_t.MESSAGE_ACCELERATION].y;
			monster.orientation		= msg[_t.MESSAGE_ORIENTATION];
			monster.HP = msg[_t['MESSAGE_CURRENT_HP']];
			monster.maxHP = msg[_t['MESSAGE_HP']];
		}
	}

	deimos.render.Scene.prototype.syncAttackZone = function(e) {
		//wait game start before start..
		if(!deimos.Engine.running) return;

		var _t = deimos.Engine._t;
		var msg;

		if(e[_t['MESSAGE']] !== undefined) {
			msg = e[_t['MESSAGE']];
		} else {
			msg = e;
		}

		//add it if needed
		var attackZone = new deimos.element.AttackZone(
			msg[_t['MESSAGE_ELEMENT_ID']],
			msg[_t['MESSAGE_POSITION']],
			msg[_t['MESSAGE_SIZE']],
			msg[_t['MESSAGE_OWNER']],
			msg[_t['MESSAGE_DURATION']]
		);
		this.attackZones[attackZone.id] = attackZone;

		if(this.avatars[msg[_t['MESSAGE_OWNER']]] !== undefined) {
			this.avatars[msg[_t['MESSAGE_OWNER']]].lastAttack = new Date().getTime();
		}

		attackZone.render();
	}

	deimos.render.Scene.prototype.itemGrabbed = function(e) {
		//wait game start before start..
		if(!deimos.Engine.running) return;

		//clear item
		var _t = deimos.Engine._t;
		var item = this.items[e[_t['MESSAGE']][_t['MESSAGE_ITEM']]];
		item.cleanDom();
		delete this.items[item.serverid];
		//TODO add it to list of item in client side

		//correct avatar position
		var av_id = e[_t['MESSAGE']][_t['MESSAGE_TO']];
		var avatar = null;
		if( deimos.Engine.avatar !== undefined && 
			av_id === deimos.Engine.avatar.serverid
		) {
			avatar = deimos.Engine.avatar;
		} else {
			avatar = deimos.Engine.scene.avatars[av_id];
		}
		avatar.position.x = e[_t['MESSAGE']][_t['MESSAGE_TO_POSITION']].x;
		avatar.position.y = e[_t['MESSAGE']][_t['MESSAGE_TO_POSITION']].y;
		avatar.render();
		avatar.onMove();
	}

	deimos.render.Scene.prototype.destroyProjectile = function(projectile) {
		//if exsists
		if(!!this.projectiles[projectile.serverid]) {
			this.projectiles[projectile.serverid].cleanDom();
			delete this.projectiles[projectile.serverid];
		}
	}

	deimos.render.Scene.prototype.elementCollision = function(e) {
		var _t = deimos.Engine._t;
		var message = e[_t['MESSAGE']];
		var fromElement = null;
		var toElement = null;
		var isDead = message[_t.MESSAGE_IS_DEAD];
		switch(message[_t.MESSAGE_FROM_TYPE])
		{
			case _t.MESSAGE_MONSTER:
				fromElement = this.monsters[message[_t.MESSAGE_FROM]];
				break;
			case _t.MESSAGE_ITEM:
				fromElement = this.items[message[_t.MESSAGE_FROM]];
				break;
			case _t.MESSAGE_PROJECTILE:
				fromElement = this.projectiles[message[_t.MESSAGE_FROM]];
				break;
			case _t.MESSAGE_AVATAR:
				var id = message[_t.MESSAGE_FROM];
				if(id === deimos.Engine.avatar.serverid) {
					fromElement = deimos.Engine.avatar;
				} else {
					fromElement = this.avatars[id];
				}
				break;
		}
		if(!fromElement) return;

		switch(message[_t.MESSAGE_TO_TYPE])
		{
			case _t.MESSAGE_MONSTER:
				toElement = this.monsters[message[_t.MESSAGE_TO]];
				break;
			case _t.MESSAGE_ITEM:
				toElement = this.items[message[_t.MESSAGE_TO]];
				break;
			case _t.MESSAGE_PROJECTILE:
				toElement = this.projectiles[message[_t.MESSAGE_TO]];
				break;
			case _t.MESSAGE_AVATAR:
				var id = message[_t.MESSAGE_TO];
				if(id === deimos.Engine.avatar.serverid) {
					toElement = deimos.Engine.avatar;
				} else {
					toElement = this.avatars[id];
				}
				break;
		}
		if(!toElement) return;

		fromElement.position.x = message[_t.MESSAGE_FROM_POSITION].x;
		fromElement.position.y = message[_t.MESSAGE_FROM_POSITION].y;
		toElement.position.x = message[_t.MESSAGE_TO_POSITION].x;
		toElement.position.y = message[_t.MESSAGE_TO_POSITION].y;
		fromElement.render();
		toElement.render();

		toElement.touched(fromElement);
		if(isDead) {
			toElement.die();
		}
	}

})(org.dbyzero.deimos, document);
/**
 *
 * Element Object
 *
 * @author dbyzero
 * @date : 2014/03/22
 * @description : Element model
 *
 **/

(function(deimos,document,undefined) {

	var Vector = org.dbyzero.tools.Vector;
	deimos.element = deimos.element || {};

	/**
	 * Avatar constructor
	 *
	 **/
	deimos.element.Element = function (position,size,serverid,deltashow) {
		this.class = 'element';
		this.name = null;
		this.nameWidth = null;
		this.nameHeight = null;
		this.position = position;
		this.velocity = new org.dbyzero.tools.Vector(0,0);
		this.acceleration = new org.dbyzero.tools.Vector(0,0);
		this.width = size.x;
		this.height = size.y;
		this.lastUpdate = null;
		this.mass = 1;
		this.toMove = Vector.Zero();
		this.deltashow = deltashow; //translatoin vector applied to the render
		this.dictClass = {}; //dictonnairy linking DOM css class and states
		this.positionServer = {x:0,y:0};
		this.attackRate = 100;
		this.inMove = false;
		this.isLanded = false;
		this.landedBlock = null;
		this.skin = null;
		this.goingDown = false;
		this.oriented = 'right';
		this.serverid = serverid;
		this.currentAction = null;
		this.domElemName = null;
		this.domElemHP = null;
		this.speaker = null;
		this.damage = null;
		this.projectileTranslation = {};
		this.projectileTranslation.left = {'x':0,'y':0};
		this.projectileTranslation.right = {'x':0,'y':0};
		//map to set with what elements are collidable
		this.collisionTypeEnabled = {};

		this.collisionTypeEnabled['blocks'] = true;
		this.collisionTypeEnabled['gameArea'] = true;
		this.collisionTypeEnabled['plateforme'] = true;

		//object collisions are managed by server
		this.collisionTypeEnabled['bonus'] = false;
		this.collisionTypeEnabled['projectiles'] = false;
		this.collisionTypeEnabled['monsters'] = false;
		this.collisionTypeEnabled['avatars'] = false;
		this.maxHP = null;
		this.HP = null;

		//store information for collisions
		this.vertexTL = new Vector(this.position.x, this.position.y);
		this.vertexBL = new Vector(this.position.x, this.position.y + this.height);
		this.vertexTR = new Vector(this.position.x + this.width, this.position.y);
		this.vertexBR = new Vector(this.position.x + this.width, this.position.y + this.height);

		this.skipNextUpdateAndMove = false;
	}


	deimos.element.Element.prototype = {
		init: function() {
			//make dom element
			var dom_elem = document.createElement("div");
			dom_elem.setAttribute("id",this.domId);

			dom_elem.style.width = parseInt(this.width + this.deltashow.x*2)+'px';
			dom_elem.style.height  = parseInt(this.height + this.deltashow.y*2)+'px';

			dom_elem.style.display  = 'block';
			dom_elem.style.position  = 'absolute';

			var translation = "translate3d("+(this.position.x-this.deltashow.x)+"px,"+(this.position.y-this.deltashow.y)+"px,0px)";
			dom_elem.style.transform = translation;
			dom_elem.style.webkitTransform = translation;

			deimos.Engine.zone.area.appendChild(dom_elem);

			this.domElem = document.getElementById(this.domId);
			this.domElemWidth = this.domElem.offsetWidth;//usefull for positionning name and speaker
			this.domElemHeight = this.domElem.offsetHeight;//usefull for positionning name and speaker

			this.initAnimation();

			if(!!this.HP) {
				this.initHP();
			}
		},

		destroy: function() {
			this.cleanDom();
		},

		initAnimation: function() {
			this.dictClass['walking_right']		= this.skin+'AnimationWalkingRight';
			this.dictClass['walking_left']		= this.skin+'AnimationWalkingLeft';
			this.dictClass['standing_right']	= this.skin+'AnimationStandingRight';
			this.dictClass['standing_left']		= this.skin+'AnimationStandingLeft';
			this.dictClass['flying_right']		= this.skin+'AnimationFlyingRight';
			this.dictClass['flying_left']		= this.skin+'AnimationFlyingLeft';
			this.dictClass['shooting_right']	= this.skin+'AnimationShootingRight';
			this.dictClass['shooting_left']		= this.skin+'AnimationShootingLeft';
			this.dictClass['front']				= this.skin+'AnimationFront';
		},

		getDomElem: function() {
			return this.domElem;
		},

		update: function(dt, now) {
			if(!!this.skipNextUpdateAndMove) {
				return;
			}

			//fly if we have a negative vertical deplacement OR we leave our blocks
			if((this.isLanded && this.velocity.y < 0) ||
				(!!this.landedBlock && (this.position.x + this.width < this.landedBlock.vertexTL.x || this.position.x > this.landedBlock.vertexTR.x ))) {
				this.unlanded();
			}

			//adding gravity if we are not landed or outside of our landed block
			if(!this.isLanded) {
				this.acceleration = deimos.physic.Gravity.duplicate();
				this.acceleration.y *=  this.mass;
			} else {
				this.acceleration.y = 0;
			}

			var returnIntegrate = org.dbyzero.tools.Physics.integrateKM4(this.position,this.velocity,this.acceleration,dt/1000);
			this.toMove.x += returnIntegrate.dx.x;
			this.toMove.y += returnIntegrate.dx.y;
			this.velocity.x += returnIntegrate.dv.x;
			this.velocity.y += returnIntegrate.dv.y;
			this.toMove.x += (this.velocity.x * dt/1000);
			this.toMove.y += (this.velocity.y * dt/1000);

			this.toMove.x = this.toMove.x;
			this.toMove.y = this.toMove.y;

			this.lastUpdate = now;
		},

		move: function() {
			if(!!this.skipNextUpdateAndMove) {
				this.skipNextUpdateAndMove = false;
				return;
			}

			if( this.toMove.x === 0 && this.toMove.y ===0) {
				this.currentAction = 'stand';
				return false;
			} else {
				var currentMovement = this.toMove;
			}

			var initialPosition = {x:this.position.x,y:this.position.y};
			var domElem = this.domElem;

			//move ~~~~~
			this.position.add(currentMovement);

			//check collision with Zone
			if(this.position.x < 0) {
				this.position.x = 0;
				this.onAreaCollisionLeft();
			}
			if(this.position.x + this.width > deimos.Engine.zone.width) {
				this.position.x = deimos.Engine.zone.width - this.width;
				this.onAreaCollisionRight();
			}
			if(this.position.y < 0) {
				this.position.y = 0;
				this.onAreaCollisionTop();
			}
			if(this.position.y + this.height > deimos.Engine.zone.height) {
				this.position.y = deimos.Engine.zone.height - this.height;
				this.onAreaCollisionBottom();
			}

			//colision with bloacks
			if(this.collisionTypeEnabled['blocks']) this.checkBlocksCollision( currentMovement );
			if(this.collisionTypeEnabled['bonus']) this.checkElementCollision( currentMovement, deimos.Engine.scene.items );
			if(this.collisionTypeEnabled['monsters']) this.checkElementCollision( currentMovement, deimos.Engine.scene.monsters );
			if(this.collisionTypeEnabled['projectiles']) this.checkElementCollision( currentMovement, deimos.Engine.scene.projectiles );

			var deltaMove = org.dbyzero.tools.Vector.Sub(this.position,initialPosition);
			if(deltaMove.x != 0 || deltaMove.y !=0) {
				//send sync when move
				this.inMove = true;
				this.render();
				this.onMove();
			} else {
				this.inMove = false
			}

			//reset movement
			this.toMove = Vector.Zero();

			//set animation
			this.currentAction;
			if(deltaMove.x !== 0) {
				this.currentAction = 'walk';
				if(deltaMove.x > 0) this.oriented = 'right';
				if(deltaMove.x < 0) this.oriented = 'left';
			} else {
				this.currentAction = 'stand';
			}
			if(deltaMove.y != 0) this.currentAction = 'fly';

		},

		checkBlocksCollision: function( currentMovement ) {
			//check for collision
			var blocks = org.dbyzero.deimos.Engine.zone.blocks;
			var testCollision = null;
			var keys = Object.keys(blocks);
			var block,i;
			for(i = 0; i < keys.length; i++) {
				block = blocks[keys[i]];
				//do not check if we not collide on plateforme
				if(block.type.type === 'plateform' && !this.collisionTypeEnabled['plateforme']) {
					continue;
				}
				//we dont check for collision if avatar go bottom and block is a plateform
				//collision from avatar bottom
				if(block.type.type != 'plateform' || (block.type.type == 'plateform' && this.goingDown == false)) {
					if(currentMovement.y > 0) {
						testCollision = org.dbyzero.tools.Physics.SegmentsCollision(
							this.vertexBL,
							{x:this.position.x,y:this.position.y + this.height},
							block.vertexTL,
							block.vertexTR
						);
						
						if(testCollision !== false) {
							this.onBlockCollisionBottom(testCollision,block);
							continue;
						}

						testCollision = org.dbyzero.tools.Physics.SegmentsCollision(
							this.vertexBR,
							{x:this.position.x + this.width,y:this.position.y + this.height},
							block.vertexTL,
							block.vertexTR
						);
						
						if(testCollision !== false) {
							this.onBlockCollisionBottom(testCollision,block);
							continue;
						}
					}
				}

				//we stop here for plateforme
				if(block.type.type == 'plateform') continue;

				//collision from avatar top
				if(currentMovement.y < 0) {
					testCollision = org.dbyzero.tools.Physics.SegmentsCollision(
						this.vertexTL,
						{x:this.position.x,y:this.position.y},
						block.vertexBL,
						block.vertexBR
					);
					
					if(testCollision !== false) {
						this.onBlockCollisionTop(testCollision,block);
						continue;
					}

					testCollision = org.dbyzero.tools.Physics.SegmentsCollision(
						this.vertexTR,
						{x:this.position.x + this.width,y:this.position.y},
						block.vertexBL,
						block.vertexBR
					);
					
					if(testCollision !== false) {
						this.onBlockCollisionTop(testCollision,block);
						continue;
					}
				}

				//collision from avatar left
				if(currentMovement.x < 0) {
					testCollision = org.dbyzero.tools.Physics.SegmentsCollision(
						this.vertexTL,
						{x:this.position.x,y:this.position.y},
						block.vertexTR,
						block.vertexBR
					);
					
					if(testCollision !== false) {
						this.onBlockCollisionLeft(testCollision,block);
						continue;
					}

					testCollision = org.dbyzero.tools.Physics.SegmentsCollision(
						this.vertexBL,
						{x:this.position.x,y:this.position.y + this.height},
						block.vertexTR,
						block.vertexBR
					);
					
					if(testCollision !== false) {
						this.onBlockCollisionLeft(testCollision,block);
						continue;
					}
				}

				//collision from avatar right
				if(currentMovement.x > 0) {
					testCollision = org.dbyzero.tools.Physics.SegmentsCollision(
						this.vertexTR,
						{x:this.position.x + this.width,y:this.position.y},
						block.vertexTL,
						block.vertexBL
					);
					
					if(testCollision !== false) {
						this.onBlockCollisionRight(testCollision,block);
						continue;
					}

					testCollision = org.dbyzero.tools.Physics.SegmentsCollision(
						this.vertexBR,
						{x:this.position.x + this.width,y:this.position.y + this.height},
						block.vertexTL,
						block.vertexBL
					);
					
					if(testCollision !== false) {
						this.onBlockCollisionRight(testCollision,block);
						continue;
					}
				}
			}
		},

		checkElementCollision: function( currentMovement, elements ) {
			var testCollision = null;
			var keys = Object.keys(elements);
			var i,element;
			for(i = 0; i < keys.length; i++) {
				element = elements[keys[i]];
				//collision from avatar bottom
				if(currentMovement.y > 0) {
					testCollision = org.dbyzero.tools.Physics.SegmentsCollision(
						this.vertexBL,
						{x:this.position.x,y:this.position.y + this.height},
						element.vertexTL,
						element.vertexTR
					);
					
					if(testCollision !== false) {
						this.onElementCollisionBottom(testCollision,element);
						continue;
					}

					testCollision = org.dbyzero.tools.Physics.SegmentsCollision(
						this.vertexBR,
						{x:this.position.x + this.width,y:this.position.y + this.height},
						element.vertexTL,
						element.vertexTR
					);
					
					if(testCollision !== false) {
						this.onElementCollisionBottom(testCollision,element);
						continue;
					}
				}

				//collision from avatar top
				if(currentMovement.y < 0) {
					testCollision = org.dbyzero.tools.Physics.SegmentsCollision(
						this.vertexTL,
						{x:this.position.x,y:this.position.y},
						element.vertexBL,
						element.vertexBR
					);
					
					if(testCollision !== false) {
						this.onElementCollisionTop(testCollision,element);
						continue;
					}

					testCollision = org.dbyzero.tools.Physics.SegmentsCollision(
						this.vertexTR,
						{x:this.position.x,y:this.position.y},
						element.vertexBL,
						element.vertexBR
					);
					
					if(testCollision !== false) {
						this.onElementCollisionTop(testCollision,element);
						continue;
					}
				}

				//collision from avatar left
				if(currentMovement.x < 0) {
					testCollision = org.dbyzero.tools.Physics.SegmentsCollision(
						this.vertexTL,
						{x:this.position.x,y:this.position.y},
						element.vertexTR,
						element.vertexBR
					);
					
					if(testCollision !== false) {
						this.onElementCollisionLeft(testCollision,element);
						continue;
					}

					testCollision = org.dbyzero.tools.Physics.SegmentsCollision(
						this.vertexBL,
						{x:this.position.x,y:this.position.y + this.height},
						element.vertexTR,
						element.vertexBR
					);
					
					if(testCollision !== false) {
						this.onElementCollisionLeft(testCollision,element);
						continue;
					}
				}

				//collision from avatar right
				if(currentMovement.x > 0) {
					testCollision = org.dbyzero.tools.Physics.SegmentsCollision(
						this.vertexTR,
						{x:this.position.x + this.width,y:this.position.y},
						element.vertexTL,
						element.vertexBL
					);
					
					if(testCollision !== false) {
						this.onElementCollisionRight(testCollision,element);
						continue;
					}

					testCollision = org.dbyzero.tools.Physics.SegmentsCollision(
						this.vertexBR,
						{x:this.position.x + this.width,y:this.position.y + this.height},
						element.vertexTL,
						element.vertexBL
					);
					
					if(testCollision !== false) {
						this.onElementCollisionRight(testCollision,element);
						continue;
					}
				}
			}
		},

		render: function() {
			var dom_elem = this.domElem;
			if(this.position !== undefined) {
				var translation = "translate3d("+parseInt(this.position.x - parseInt(this.deltashow.x))+"px,"+parseInt(this.position.y - parseInt(this.deltashow.y))+"px,0px)";
				dom_elem.style.transform = translation;
				dom_elem.style.webkitTransform = translation;

				if(!!this.HP) {
					this.renderHP();
				}

				return true;
			}
			return false;
		},

		landed: function(element) {
			this.isLanded = true;
			this.landedBlock = element;
			this.onJustLand()
		},

		unlanded: function() {
			this.isLanded = false;
			this.landedBlock = null;
			this.onUnland()
		},

		onJustLand: function() {
			//stub
		},

		onUnland: function() {
			//stub
		},

		onMove: function() {
			this.vertexTL.x = this.position.x;
			this.vertexTL.y = this.position.y;
			this.vertexBL.x = this.position.x;
			this.vertexBL.y = this.position.y + this.height;
			this.vertexTR.x = this.position.x + this.width;
			this.vertexTR.y = this.position.y;
			this.vertexBR.x = this.position.x + this.width;
			this.vertexBR.y = this.position.y + this.height;
		},

		onBlockCollision: function( collisionCoord, collisionElement ) {
		},

		onAreaCollision: function() {
			//stub
		},

		onElementCollision: function(collisionCoord, collisionElement) {
			collisionElement.destroy();
		},

		onAreaCollisionRight: function() {
			this.velocity.x = 0;
			this.onAreaCollision();
		},

		onAreaCollisionLeft: function() {
			this.velocity.x = 0;
			this.onAreaCollision();
		},

		onAreaCollisionTop: function() {
			this.velocity.y = 0;
			this.onAreaCollision();
		},

		onAreaCollisionBottom: function() {
			this.velocity.y = 0;
			this.onAreaCollision();
			this.landed(false);
		},

		onElementCollisionRight: function(collisionCoord, collisionElement) {
			this.onElementCollision(collisionCoord, collisionElement);
		},

		onElementCollisionLeft: function(collisionCoord, collisionElement) {
			this.onElementCollision(collisionCoord, collisionElement);
		},

		onElementCollisionTop: function(collisionCoord, collisionElement) {
			this.onElementCollision(collisionCoord, collisionElement);
		},

		onElementCollisionBottom: function(collisionCoord, collisionElement) {
			this.onElementCollision(collisionCoord, collisionElement);
		},

		onBlockCollisionBottom: function( collisionCoord, collisionElement ) {
			this.landedBlock = collisionElement;
			this.position.y = collisionCoord.y - this.height;
			this.velocity.y = 0;
			this.landed(collisionElement);
			this.onBlockCollision(collisionCoord, collisionElement );
		},

		onBlockCollisionTop: function( collisionCoord, collisionElement ) {
			this.position.y = collisionCoord.y;
			this.velocity.y = 0;
			this.onBlockCollision(collisionCoord, collisionElement );
		},

		onBlockCollisionLeft: function( collisionCoord, collisionElement ) {
			this.position.x = collisionCoord.x;
			this.velocity.x = 0;
			this.onBlockCollision(collisionCoord, collisionElement );
		},

		onBlockCollisionRight: function( collisionCoord, collisionElement ) {
			this.position.x = collisionCoord.x - this.width;
			this.velocity.x = 0;
			this.onBlockCollision(collisionCoord, collisionElement );
		},

		correctPositionWithServer:function(timestamp){
			//fix position from server
			var stepInPast = parseInt((deimos.Engine.currentLag)  / deimos.Config.INTERPOLATION_TIMESTEP);

			var deltaX = this.positionServer.x - parseInt(this.position.x);
			var deltaY = this.positionServer.y - parseInt(this.position.y);
			var squareHypothenus = deltaX*deltaX + deltaY*deltaY;
			if(deimos.Config.SQUARE_AUTHORITY < squareHypothenus) {
				this.position.x = this.positionServer.x;
				this.position.y = this.positionServer.y;
				this.skipNextUpdateAndMove = true;
				this.onMove();
				this.render();
				//we unland it to check collision with new position
				this.unlanded();
			}
		},

		bindEvent : function() {
			//stub
		},

		unbindEvent : function() {
			//stub
		},

		updateAnimation : function() {
			if(this.oriented !== 'right' && this.oriented !== 'left') throw 'Unknow direction '+this.oriented;
			var domElem = this.domElem;
			var classAnimation = null;

			if(this.isAttacking()) {
				classAnimation = this.dictClass['shooting_'+this.oriented];
			} else {
				switch(this.currentAction){
					case "fly":
						classAnimation = this.dictClass['flying_'+this.oriented];
						break;
					case "jump":
						classAnimation = this.dictClass['jumping_'+this.oriented];
						break;
					case "walk":
						classAnimation = this.dictClass['walking_'+this.oriented];
						break;
					default:
						classAnimation = this.dictClass['standing_'+this.oriented];
						break;
				}
			}

			domElem.className = classAnimation;
		},

		/**
		 * Name
		 */
		initName : function (main) {
			var dom_elem_name = document.createElement("div");
			dom_elem_name.setAttribute("id",this.domId+'_name') ;

			dom_elem_name.style.position = "absolute";
			dom_elem_name.innerHTML = this.name;
			dom_elem_name.style.display  = 'none' ;
			dom_elem_name.style.fontSize = '16px';
			dom_elem_name.style.fontWeight = 'bold';
			dom_elem_name.style.color = !!main ? 'rgb(128, 151, 224)' : 'rgb(224, 128, 128)';
			dom_elem_name.style.zIndex = 10;
			dom_elem_name.style.textShadow = 'white -2px -2px 2px, white 2px 2px 2px, white -2px 2px 2px, white 2px -2px 2px';

			deimos.Engine.zone.area.appendChild(dom_elem_name) ;
			dom_elem_name.style.display  = 'block' ;

			this.domElemName = document.getElementById(this.domId+'_name');

			this.nameWidth = dom_elem_name.offsetWidth;
			this.nameHeight = dom_elem_name.offsetHeight;

			this.renderName.call(this);
		},

		/**
		 * Name
		 */
		initHP : function () {
			var domElemHP = document.createElement("div");
			domElemHP.setAttribute("id",this.domId+'_hp') ;

			domElemHP.style.position = "absolute";
			domElemHP.style.display  = 'none' ;
			domElemHP.style.zIndex = 10;
			domElemHP.style.width = ((this.HP/this.maxHP) * this.nameWidth)+'px';
			domElemHP.style.height = '3px';
			domElemHP.style.backgroundColor = '#A4C3A0';

			deimos.Engine.zone.area.appendChild(domElemHP) ;
			domElemHP.style.display  = 'block' ;

			this.domElemHP = document.getElementById(this.domId+'_hp');

			this.renderHP.call(this);
		},

		renderHP : function () {
			domElemHP = this.domElemHP ;
			var left = parseInt(this.position.x+(parseInt((this.domElemWidth-(2*this.deltashow.x))/2)-parseInt(this.nameWidth/2)));
			var top = parseInt(this.position.y-6);
			var translation = "translate3d("+left+"px,"+top+"px,0px)";
			domElemHP.style.transform = translation;
			domElemHP.style.webkitTransform = translation;
			domElemHP.style.width = ((this.HP/this.maxHP) * this.nameWidth)+'px';
		},

		renderName : function () {
			dom_elem_name = this.domElemName ;
			var left = parseInt(this.position.x+(parseInt((this.domElemWidth-(2*this.deltashow.x))/2)-parseInt(this.nameWidth/2)));
			var top = parseInt(this.position.y-this.nameHeight-6);
			var translation = "translate3d("+left+"px,"+top+"px,0px)";
			dom_elem_name.style.transform = translation;
			dom_elem_name.style.webkitTransform = translation;
		},

		/**
		 * Speaker
		 */
		initSpeaker : function (readonly) {
			this.speaker = new deimos.element.Speaker(this.domId, readonly) ;
			this.speaker.init();
		},

		renderSpeaker : function () {
			this.speaker.render(this.position.x - 50 ,this.position.y - 74);
		},

		setSpeaking : function (bool) {
			this.speaking = bool ;
			if(bool) {
				this.renderSpeaker();
				this.speaker.show();
			} else {
				this.lastSayed = new Date().getTime();
				this.speaker.leaveFocus();
				if(this.saying.length === 0) this.speaker.hide();
			}
		},

		isAttacking : function() {
			return (
				!!this.attack && //if has attack 
				(this.lastAttack + this.attackRate > new Date().getTime()) //and attack in timer
			);
		},

		attack : function(whichOne) {
			if(!whichOne) {
				if(!this.isAttacking()) {
					this.lastAttack = new Date().getTime();
					var _t = deimos.Engine._t;
					var message = {};
					message[_t['ACTION']] = _t['ACTION_ATTACK'];
					message[_t['MESSAGE']] = {};
					message[_t['MESSAGE']][_t['MESSAGE_DIRECTION']] = this.oriented;
					message[_t['MESSAGE']][_t['MESSAGE_POSITION']] = {};
					message[_t['MESSAGE']][_t['MESSAGE_POSITION']].x = parseInt(this.position.x);
					message[_t['MESSAGE']][_t['MESSAGE_POSITION']].y = parseInt(this.position.y);
					deimos.Engine.networkManager.sendMessage(message);
				} else {
					Log.info('Have to wait');
				}
				
			} else {
				Log.error('Only main attack is implemented');
			}
		},

		touched: function(elementCollision) {
			var damage = elementCollision.damage;
			if(isFinite(damage)) {
				this.HP -= damage;
				this.renderHP();
			}
		},

		die: function(elementCollision) {
			this.destroy();
		},

		cleanDom: function() {
			this.unbindEvent();
			if(!!this.speaker) this.cleanDomSpeaker();
			if(this.domElemHP) this.cleanDomHP();
			if(this.domElemName) this.cleanDomName();
			if(this.domElem) this.cleanDomElem();
		},

		cleanDomElem : function() {
			var nodeAvatar = this.domElem;
			var parentNode = nodeAvatar.parentNode;
			if(parentNode) parentNode.removeChild(nodeAvatar);
		},

		cleanDomName : function() {
			var dom_elem_name = this.domElemName ;
			var parentNode = dom_elem_name.parentNode;
			if(parentNode) parentNode.removeChild(dom_elem_name);
		},

		cleanDomHP : function() {
			var dom_elem_hp = this.domElemHP ;
			var parentNode = dom_elem_hp.parentNode;
			if(parentNode) parentNode.removeChild(dom_elem_hp);
		},

		cleanDomSpeaker : function() {
			var speakingBox = this.speaker.domElem;
			var parentNode = speakingBox.parentNode;
			if(parentNode) parentNode.removeChild(speakingBox);
		}
	}

})(org.dbyzero.deimos, document);
/**
 *
 * Speaker Object
 *
 * @author dbyzero
 * @date : 2013/08/29
 * @description : Speaker model
 *
 **/

(function(deimos,document,undefined) {

	deimos.element = deimos.element || {} ;

	/***
	 * Speaker constructor
	 * 
	 **/
	deimos.element.Speaker = function (avId, readonly) {
		this.id = 'speaker_' + avId + '_' + Math.floor((Math.random()*1000000)+1);
		this.readonly = readonly;
	}


	deimos.element.Speaker.prototype = {
		init: function() {
			var gamezone = deimos.Engine.zone.area ;
				
			//make dom element
			var dom_elem = document.createElement("div");
			dom_elem.setAttribute("class","speaker") ;
			dom_elem.setAttribute("id",this.id) ;
			//dom_elem.style.backgroundColor = 'red' ;

			if(this.readonly) {
				dom_elem.style.backgroundPosition = '0px -100px' ;
			}
			var textArea = document.createElement("textarea") ;
			if(this.readonly) {
				textArea.readOnly = true; 
			}
			dom_elem.appendChild(textArea) ;
			gamezone.appendChild(dom_elem) ;
			this.domElem = document.getElementById(this.id);
		},

		getText: function() {
			var domElem = this.domElem;
			return domElem.childNodes[0].value ;
		},

		setText: function(txt) {
			var domElem = this.domElem;
			domElem.childNodes[0].value = txt;
		},

		show: function() {
			var domElem =  this.domElem;
			domElem.style.display = 'block';
			if(this.readonly !== true)
			{
				domElem.childNodes[0].focus() ;
			}
		},

		hide: function() {
			var domElem =  this.domElem;
			domElem.style.display = 'none';
			domElem.childNodes[0].value = '';
			if(this.readonly !== true)
			{
				this.leaveFocus();
			}
		},

		leaveFocus: function() {
			var domElem =  this.domElem;
			domElem.childNodes[0].blur() ;
		},

		render: function(x,y) {
			var domElem =  this.domElem;
			var translation = "translate3d("+x+"px,"+y+"px,0px)";
			domElem.style.transform = translation;
			domElem.style.webkitTransform = translation;
		}
	}

})(org.dbyzero.deimos, document);
/**
 *
 * Avatar Object
 *
 * @author dbyzero
 * @date : 2013/08/09
 * @description : Avatar model
 *
 **/

(function(deimos,document,undefined) {

	var EventManager = org.dbyzero.tools.EventManager;
	deimos.element = deimos.element || {} ;

	/**
	 * Avatar constructor
	 *
	 **/
	var Avatar = deimos.element.Avatar = function (name,position,size,serverid,deltashow,mass) {
		Avatar._super.call(this,position,size,serverid,deltashow);
		this.domId = 'avatar_' + serverid + '_' + new Date().getTime() + '_' + Math.floor((Math.random()*1000000)+1); ;
		this.speaking = false ;
		this.speaker = null;
		this.move_speed = 0;
		this.jump_speed = 0;
		this.saying = "";
		this.lastSayed = 0;
		this.waitingForce = [];
		this.userInputs = {};
		this.item_slot_head = null;
		this.item_slot_foot = null;
		this.item_slot_chest = null;
		this.item_slot_left_hand = null;
		this.item_slot_right_hand = null;
		this.name = name;
		this.mass = mass;
		//object collisions are managed by server
		// this.collisionTypeEnabled['bonus'] = true;
	}

	org.dbyzero.tools.Inherit(deimos.element.Avatar, deimos.element.Element);

	deimos.element.Avatar.prototype.init = function(){
		Avatar._super.prototype.init.call(this);

		//set spritesheet
		this.domElem.style.backgroundImage = "url("+deimos.Engine.assetURL+"/spritesheet/char/"+this.serverid+"/spritesheet.png)";

		//add speaker
		this.initSpeaker(false);

		//events
		this.bindEvent();

		//show main name
		this.initName(true);

		//redraw HP to apply correct name width
		this.renderHP();

	}

	deimos.element.Avatar.prototype.bindEvent = function() {
		var _t = deimos.Engine._t;

		//bind speek event
		EventManager.register("org.dbyzero.deimos.avatar.speak",(function(e){
			this.setSpeaking(true) ;
			event.preventDefault();
		}).bind(this));

		EventManager.register("org.dbyzero.deimos.avatar.speak.stop",(function(){
			this.setSpeaking(false) ;
			event.preventDefault();
		}).bind(this));

		//bind movement event

		EventManager.register("org.dbyzero.deimos.avatar.move.left",(function(e){
			var force = new deimos.physic.UserMovement(
				new org.dbyzero.tools.Vector(-1 * this.move_speed,0),
				_t['LEFT']
			);
			this.addUserInputs(force);
			this.sendActionMessage(_t['ACTION_MOVE_START'],force);
			this.oriented = 'left';
		}).bind(this));

		EventManager.register("org.dbyzero.deimos.avatar.move.right",(function(e){
			var force = new deimos.physic.UserMovement(
				new org.dbyzero.tools.Vector(this.move_speed,0),
				_t['RIGHT']
			);
			this.addUserInputs(force);
			this.sendActionMessage(_t['ACTION_MOVE_START'],force);
			this.oriented = 'right';
		}).bind(this));

		EventManager.register("org.dbyzero.deimos.avatar.move.left.stop",(function(e){
			this.removeUserInputs(_t['LEFT']);
		}).bind(this));

		EventManager.register("org.dbyzero.deimos.avatar.move.right.stop",(function(e){
			this.removeUserInputs(_t['RIGHT']);
		}).bind(this));

		//bind jump event
		EventManager.register("org.dbyzero.deimos.avatar.jump",(function(e){
			if(!this.isLanded == false && this.speaking == false) {
				var force = new deimos.physic.UserMovement(
					new org.dbyzero.tools.Vector(0,parseInt('-'+this.jump_speed)),
					_t['JUMP']
				);
				this.addForceNextStep(force.movement) ;
				this.sendActionMessage(_t['ACTION_JUMP'],force);

			}
		}).bind(this));

		EventManager.register("org.dbyzero.deimos.avatar.go.down",(function(e){
			this.goingDown = true;
			this.unlanded();
			this.sendActionMessage(_t['ACTION_GOING_DOWN']);
		}).bind(this));

		EventManager.register("org.dbyzero.deimos.avatar.go.down.stop",(function(e){
			this.goingDown = false;
			this.sendActionMessage(_t['ACTION_GOING_DOWN_STOP']);
		}).bind(this));
	}

	deimos.element.Avatar.prototype.unbindEvent = function() {
		//bind speek event
		EventManager.unregister("org.dbyzero.deimos.avatar.speak");
		EventManager.unregister("org.dbyzero.deimos.avatar.speak");
		EventManager.unregister("org.dbyzero.deimos.avatar.move.left.stop");
		EventManager.unregister("org.dbyzero.deimos.avatar.move.right.stop");
		EventManager.unregister("org.dbyzero.deimos.avatar.move.left");
		EventManager.unregister("org.dbyzero.deimos.avatar.move.right");
		EventManager.unregister("org.dbyzero.deimos.avatar.jump");
		EventManager.unregister("org.dbyzero.deimos.avatar.go.down");
		EventManager.unregister("org.dbyzero.deimos.avatar.go.down.stop");
	}

	deimos.element.Avatar.prototype.sendActionMessage = function(type, force) {
		var _t = deimos.Engine._t;
		var message = {};
		message[_t['ACTION']] = type;
		message[_t['MESSAGE']] = {};
		if(force !== undefined) {
			message[_t['MESSAGE']][_t['MESSAGE_MOVE_ID']] = force.id;
			message[_t['MESSAGE']][_t['MESSAGE_MOVE_TYPE']] = force.type;
			message[_t['MESSAGE']][_t['MESSAGE_MOVE_START']] = force.startTimestamp;
			message[_t['MESSAGE']][_t['MESSAGE_DURATION']] = force.duration;
		}
		message[_t['MESSAGE']][_t['MESSAGE_POSITION']] = {};
		message[_t['MESSAGE']][_t['MESSAGE_POSITION']].x = parseInt(this.position.x);
		message[_t['MESSAGE']][_t['MESSAGE_POSITION']].y = parseInt(this.position.y);
		deimos.Engine.networkManager.sendMessage(message);
	}

	//adding user keyboard (or other input ?) events
	deimos.element.Avatar.prototype.addUserInputs = function(mvt) {
		this.userInputs[mvt.id] = mvt ;
	}


	//removing user keyboard (or other input ?) events
	deimos.element.Avatar.prototype.removeUserInputs = function(type) {
		for(id in this.userInputs) {
			var input = this.userInputs[id];
			if(input.type === type) {
				input.duration = new Date().getTime() - input.startTimestamp;
			}
		}
	}

	//adding force next step
	deimos.element.Avatar.prototype.addForceNextStep = function(force) {
		this.waitingForce.push(force) ;
	}

	deimos.element.Avatar.prototype.addingWaitingForces = function() {
		var forces = this.waitingForce;
		for(force in forces) {
			this.velocity.add(forces[force]);
			this.waitingForce.splice(0,1);
		}
	}

	deimos.element.Avatar.prototype.update = function(dt, now) {

		//toggle speaker if needed
		if(this.speaking) {
			var new_saying = this.getSaying();
			if(this.saying !== new_saying) {
				this.saying = new_saying;
				EventManager.fire('org.dbyzero.deimos.network.sendSync');
			}
		} else {
			if(this.lastSayed + 5000 < now && this.saying !== '') {
				this.speaker.hide();
				this.speaker.setText('');
				this.saying = '';
				EventManager.fire('org.dbyzero.deimos.network.sendSync');
			} 
		}

		//call parent update
		Avatar._super.prototype.update.call(this,dt,now);

		//adding user action through keyboard to the movement
		for(id in this.userInputs) {
			var input = this.userInputs[id];
			this.toMove.x += parseFloat(input.movement.x * dt/1000 * Math.min(1,input.durationIntegrated/100));//to make possible small mvt
			this.toMove.y += parseFloat(input.movement.y * dt/1000);
			input.durationIntegrated = input.durationIntegrated + dt;


			//finish the interpolation
			if(input.duration !== null) {
				//si on a trop integrer, on change le total integrer a la l'integration reel
				//pour ne pas faire de retour
				input.duration = Math.max(input.durationIntegrated,input.duration);
				var missingIntegration = input.duration - input.durationIntegrated;

				this.toMove.x += parseFloat((input.movement.x * missingIntegration/1000));
				this.toMove.y += parseFloat((input.movement.y * missingIntegration/1000));

				this.sendActionMessage(deimos.Engine._t['ACTION_MOVE_STOP'],input);
				delete this.userInputs[id];
			}
		}
	}

	deimos.element.Avatar.prototype.onMove = function() {
		Avatar._super.prototype.onMove.call(this);
		this.renderName();
		this.renderSpeaker();
	}

	deimos.element.Avatar.prototype.onJustLand = function() {
		EventManager.fire("org.dbyzero.deimos.network.sendSync");
	}

	deimos.element.Avatar.prototype.onUnland = function() {
		EventManager.fire("org.dbyzero.deimos.network.sendSync");
	}

	deimos.element.Avatar.prototype.render = function() {
		if(Avatar._super.prototype.render.call(this)) {
			this.renderName();
			this.renderSpeaker();
			if(!!this.HP) this.renderHP();
		}
	}

	deimos.element.Avatar.prototype.getSaying = function() {
		var txt = this.speaker.getText();
		txt = txt.replace(/<(?:.|\n)*?>/gm, '');
		txt = txt.replace(/'/gm, "\'");
		txt = txt.replace(/"/gm, '\"');
		txt = txt.replace(/\{/gm, "(");
		txt = txt.replace(/\}/gm, ")");
		return txt;
	};


})(org.dbyzero.deimos, document);
/**
 *
 * Avatar Object
 *
 * @author dbyzero
 * @date : 2013\asc sxz08/09
 * @description : ServerAvatar model
 *
 **/

(function(deimos,document,undefined) {

	deimos.element = deimos.element || {} ;

	/**
	 * ServerAvatar constructor
	 *
	 **/
	var ServerAvatar = deimos.element.ServerAvatar = function (name,position,velocity,acceleration,size,mass,userInputVelocity,serverid,deltashow) {
		ServerAvatar._super.call(this,position,size,serverid,deltashow);
		this.domId = 'server_avatar_' + serverid + '_' + new Date().getTime() + '_' + Math.floor((Math.random()*1000000)+1); ;
		this.userInputVelocity = userInputVelocity ;
		this.name = name;
		this.mass = mass;
		//used for smooth move
		this.dtIntegrationInput = 0;
		this.lastUserInputVelocityX = 0;
	}

	org.dbyzero.tools.Inherit(deimos.element.ServerAvatar, deimos.element.Element);

	deimos.element.ServerAvatar.prototype.init = function() {
		ServerAvatar._super.prototype.init.call(this);

		this.domElem.style.backgroundImage = "url("+deimos.Engine.assetURL+"/spritesheet/char/"+this.serverid+"/spritesheet.png)";

		this.initSpeaker(true);
		this.initName();

		//load weapon
		if(!!this.item_slot_right_hand) {
			this.initWeapon(this.item_slot_right_hand.id);
		}

		if(!!this.HP) this.initHP();
		//object collisions are managed by server
		// this.collisionTypeEnabled['bonus'] = true;
	};

	deimos.element.ServerAvatar.prototype.update = function(dt,now) {

		ServerAvatar._super.prototype.update.call(this,dt,now);

		if(this.lastUserInputVelocityX !== this.userInputVelocity.x) {
			this.dtIntegrationInput = 0;
			this.lastUserInputVelocityX = this.userInputVelocity.x;
		}
		// this.toMove.x += parseFloat(this.userInputVelocity.x * this.dtIntegrationInput/1000)/;
		// this.toMove.y += parseFloat(this.userInputVelocity.y * dt/1000)/;
		this.toMove.x = parseFloat(this.toMove.x + this.userInputVelocity.x * dt/1000 * Math.min(1,this.dtIntegrationInput/100));//to make possible small mvt
		this.toMove.y = parseFloat(this.toMove.y + this.userInputVelocity.y * dt/1000);
		this.dtIntegrationInput += dt;

		this.speaker.setText(this.saying);
		if( this.saying.length > 0 ) {
			this.speaker.show();
		} else {
			this.speaker.hide();
		}
	};

	deimos.element.ServerAvatar.prototype.onMove = function() {
		ServerAvatar._super.prototype.onMove.call(this);
		this.renderName();
		this.renderSpeaker();
		if(!!this.HP) this.renderHP();
	};

	deimos.element.ServerAvatar.prototype.render = function() {
		if(ServerAvatar._super.prototype.render.call(this))	{
			this.renderName();
			this.renderSpeaker();
		}
	}

	deimos.element.ServerAvatar.prototype.destroy = function() {
		ServerAvatar._super.prototype.destroy.call(this);
		delete deimos.Engine.scene.avatars[this.serverid];
	}

})(org.dbyzero.deimos, document);
/**
 *
 * org.dbyzero.deimos.element.Block Object
 *
 * @author dbyzero
 * @date : 2013/08/21
 * @description : Block game
 *
 **/


(function(deimos,document,undefined) {
	var Vector = org.dbyzero.tools.Vector;
	deimos.element = deimos.element || {} ;

	/**
	 * Block constructon
	 * 
	 * @param position Vector position of the block inside the zone
	 * @param size Vector size of the block inside the zone
	 *
	 * */
	deimos.element.Block = function(position,size,type) {
		this.position 	= position ;
		this.height	= size.y ;
		this.width	= size.x ;
		this.type	= type ;
		this.id = 'block_'+position.x+'_'+position.y+'_'+size.x+'_'+size.y+'_'+Math.floor(Math.random() * 100000 + 1) ;
		this.vertexTL = new Vector(position.x,                  position.y);
		this.vertexTR = new Vector(position.x + size.x,         position.y);
		this.vertexBL = new Vector(position.x,                  position.y + size.y);
		this.vertexBR = new Vector(position.x + size.x,         position.y + size.y);
	}

	deimos.element.Block.type = {
		BLOCK : {value: 0, type:'block'},
		PLATEFORM : {value: 1, type:'plateform'},
	}

})(org.dbyzero.deimos, document);
/**
 *
 * org.dbyzero.deimos.element.Zone Object
 *
 * @author dbyzero
 * @date : 2013/08/04
 * @description : Zone game
 *
 **/


(function(deimos,document,undefined) {
	deimos.element = deimos.element || {} ;
	
	/**
	 * Zone constructon
	 * 
	 * @param domId document id of the gamezone, where the action append !
	 *
	 * */
	deimos.element.Zone = function(name, domId, width, height, blocks) {
		this.area = document.getElementById(domId) ;
		this.width = width;
		this.height = height;
		this.name = name ;
		this.blocks = [] ;
		this.domBlocks = [] ;
		var keys = Object.keys(blocks);
		for (var i = 0; i < keys.length; i++) {
			var block = blocks[keys[i]];
			this.addBlock(block);
		};
	}

	deimos.element.Zone.prototype = {
		addBlockById : function(blockId,type) {
			var domElem = document.getElementById(blockId) ;
			var position = new org.dbyzero.tools.Vector(domElem.offsetLeft,domElem.offsetTop) ;
			var size = new org.dbyzero.tools.Vector(domElem.offsetWidth,domElem.offsetHeight) ;

			var type = (type == 'plateforme' ? deimos.element.Block.type.PLATEFORM : deimos.element.Block.type.BLOCK) ;
			var block = new deimos.element.Block(position,size,type) ;
			this.addBlock(block) ;
		},

		addBlock : function(block) {
			var domBlock = document.createElement('div');
			domBlock.style.position = 'absolute';
			domBlock.style.backgroundColor = 'red';
			domBlock.style.width = block.width+'px';
			domBlock.style.height = block.height+'px';
			domBlock.style.left = block.position.x+'px';
			domBlock.style.top = block.position.y+'px';
			domBlock.style.backgroundColor = 'rgb(186, 186, 186)';
			this.area.appendChild(domBlock);
			this.blocks.push(block) ;
			this.domBlocks.push(domBlock) ;
		},

		destroy : function(block) {
			console.log('destroying zone');
			var keys = Object.keys(this.domBlocks);
			for (var i = 0; i < keys.length; i++) {
				var domBlock = this.domBlocks[keys[i]];
				var parentNode = domBlock.parentNode;
				if(parentNode) parentNode.removeChild(domBlock);
			};
			delete this.blocks;
			delete this.domBlocks;
		}
	}

})(org.dbyzero.deimos, document);
/**
 *
 * Avatar Object
 *
 * @author dbyzero
 * @date : 2014/11/07
 * @description : Projectile model
 *
 **/

(function(deimos,document,undefined) {

	deimos.element = deimos.element || {} ;

	/**
	 * Projectile constructor
	 *
	 **/
	var Projectile = deimos.element.Projectile = function (serverid,position,velocity,acceleration,size,mass,templateId,skin,color,damage,orientation,ownerId,deltashow) {
		Projectile._super.call(this,position,size,serverid,deltashow);
		this.domId = 'projectile_' + serverid + '_' + new Date().getTime() + '_' + Math.floor((Math.random()*1000000)+1); ;
		this.owner = null;
		this.velocity = velocity;
		this.acceleration = acceleration;
		this.skin = skin;
		this.orientation = orientation;
		this.damage = damage;
		this.mass = mass;
	}

	org.dbyzero.tools.Inherit(deimos.element.Projectile, deimos.element.Element);

	deimos.element.Projectile.prototype.init = function() {
		Projectile._super.prototype.init.call(this);
		this.domElem.style.backgroundImage = "url("+deimos.Engine.assetURL+"/images/spritesheet/"+this.skin+".png)";
		if(this.orientation === 'left'){
			this.domElem.style.backgroundPositionY = '-'+(this.height)+'px';
		}
		//object collisions are managed by server
		// this.collisionTypeEnabled['avatars'] = true;
		// this.collisionTypeEnabled['monsters'] = true;
		this.collisionTypeEnabled['plateforme'] = false;
	};
	deimos.element.Projectile.prototype.onAreaCollisionTop = function(collisionCoord, collisionElement) {
		//do nothing !
	}

	deimos.element.Projectile.prototype.onAreaCollision = function(collisionCoord, collisionElement) {
		this.onBlockCollision(collisionCoord, collisionElement);
	};

	deimos.element.Projectile.prototype.onBlockCollision = function(collisionCoord, collisionElement) {
		deimos.Engine.scene.destroyProjectile(this);
	};

	deimos.element.Projectile.prototype.destroy = function() {
		Projectile._super.prototype.destroy.call(this);
		delete deimos.Engine.scene.projectiles[this.serverid];
	}

})(org.dbyzero.deimos, document);
/**
 *
 * Monster Object
 *
 * @author dbyzero
 * @date : 2014/11/24
 * @description : Monster model
 *
 **/

(function(deimos,document,undefined) {

	deimos.element = deimos.element || {} ;

	/**
	 * Monster constructor
	 *
	 **/
	var Monster = deimos.element.Monster = function (serverid,position,velocity,acceleration,size,mass,templateid,skin,color,name,damage,orientation,deltashow) {
		Monster._super.call(this,position,size,serverid,deltashow);
		this.domId = 'monster_' + serverid + '_' + new Date().getTime() + '_' + Math.floor((Math.random()*1000000)+1); ;
		this.velocity = velocity;
		this.acceleration = acceleration;
		this.speaking = false ;
		this.speaker = null;
		this.move_speed = 0;
		this.jump_speed = 0;
		this.saying = "";
		this.lastSayed = 0;
		this.skin = skin;
		this.templateId = templateid;
		this.color = color;
		this.name = name;
		this.damage = damage;
		this.mass = mass;
	}

	org.dbyzero.tools.Inherit(deimos.element.Monster, deimos.element.Element);

	deimos.element.Monster.prototype.init = function(){
		Monster._super.prototype.init.call(this);
		this.domElem.className = "monster_"+this.skin;

		//set spritesheet
		this.domElem.style.backgroundImage = "url("+deimos.Engine.assetURL+"/spritesheet/monster/"+this.templateId+"/color/"+this.color+"/spritesheet.png)";

		//add speaker
		this.initSpeaker(false);

		//show main name
		if(!!this.name) {
			this.initName(true);

			//redraw HP to apply correct name width
			this.renderHP();
		}

		this.nameWidth = dom_elem_name.offsetWidth;
		this.nameHeight = dom_elem_name.offsetHeight;

		//load weapon
		if(!!this.weaponId) {
			this.initWeapon(this.weaponId);
		}
		//object collisions are managed by server
		// this.collisionTypeEnabled['avatars'] = true;
	}

	deimos.element.Monster.prototype.update = function(dt, now) {
		//call parent update
		Monster._super.prototype.update.call(this,dt,now);

		//toggle speaker if needed
		if(this.speaking) {
			var new_saying = this.getSaying();
			if(this.saying !== new_saying) {
				this.saying = new_saying;
				EventManager.fire('org.dbyzero.deimos.network.sendSync');
			}
		} else {
			if(this.lastSayed + 5000 < now && this.saying !== '') {
				this.speaker.hide();
				this.speaker.setText('');
				this.saying = '';
				EventManager.fire('org.dbyzero.deimos.network.sendSync');
			} 
		}
	}

	deimos.element.Monster.prototype.onMove = function() {
		Monster._super.prototype.onMove.call(this);
		if(!!this.name) this.renderName();
		if(this.saying.length > 0) this.renderSpeaker();
	}

	deimos.element.Monster.prototype.render = function() {
		if(Monster._super.prototype.render.call(this)) {
			if(!!this.name) this.renderName();
			if(this.saying.length > 0) this.renderSpeaker();
		}
	}

	deimos.element.Monster.prototype.onBlockCollisionLeft = function() {
		this._tempBlockCollisionLeftRight();
	}

	deimos.element.Monster.prototype.onBlockCollisionRight = function() {
		this._tempBlockCollisionLeftRight();
	}

	deimos.element.Monster.prototype.onAreaCollisionLeft = function() {
		this._tempBlockCollisionLeftRight();
	}

	deimos.element.Monster.prototype.onAreaCollisionRight = function() {
		this._tempBlockCollisionLeftRight();
	}

	deimos.element.Monster.prototype._tempBlockCollisionLeftRight = function() {
		this.velocity.x = -1*parseInt(this.velocity.x);
	}

	/**
	 * Name
	 */
	deimos.element.Monster.prototype.initName = function () {
		var dom_elem_name = document.createElement("div");
		dom_elem_name.setAttribute("id",this.domId+'_name') ;

		dom_elem_name.style.position = "absolute";
		dom_elem_name.innerHTML = this.name;
		dom_elem_name.style.display  = 'none' ;
		dom_elem_name.style.fontSize = '12px';
		dom_elem_name.style.fontWeight = 'bold';
		dom_elem_name.style.color = '#'+this.color;
		dom_elem_name.style.zIndex = 10;
		dom_elem_name.style.opacity = 0.7;
		dom_elem_name.style.textShadow = 'white -2px -2px 2px, white 2px 2px 2px, white -2px 2px 2px, white 2px -2px 2px';

		deimos.Engine.zone.area.appendChild(dom_elem_name) ;
		dom_elem_name.style.display  = 'block' ;

		this.domElemName = document.getElementById(this.domId+'_name');

		this.renderName.call(this);
	}

	deimos.element.Monster.prototype.destroy = function() {
		Monster._super.prototype.destroy.call(this);
		delete deimos.Engine.scene.monsters[this.serverid];
	}

})(org.dbyzero.deimos, document);
/**
 *
 * Item Object
 *
 * @author dbyzero
 * @date : 2014/11/27
 * @description : Item model
 *
 **/

(function(deimos,document,undefined) {

	deimos.element = deimos.element || {} ;

	/**
	 * Item constructor
	 *
	 **/
	var Item = deimos.element.Item = function (serverid,position,velocity,acceleration,size,mass,templateid,skin,color,name,orientation,deltashow) {
		Item._super.call(this,position,size,serverid,deltashow);
		this.domId = 'item_' + serverid + '_' + new Date().getTime() + '_' + Math.floor((Math.random()*1000000)+1); ;
		this.velocity = velocity;
		this.acceleration = acceleration;
		this.move_speed = 0;
		this.jump_speed = 0;
		this.skin = skin;
		this.templateId = templateid;
		this.color = color;
		this.name = name;
		this.deltashow = deltashow;
		this.mass = mass;
	}

	org.dbyzero.tools.Inherit(deimos.element.Item, deimos.element.Element);


	deimos.element.Item.prototype.init = function(){
		Item._super.prototype.init.call(this);
		this.domElem.className = "item_"+this.skin;

		//set spritesheet
		this.domElem.style.backgroundImage = "url("+deimos.Engine.assetURL+"/spritesheet/item/"+this.templateId+"/"+this.color+"/spritesheet.png)";
		this.domElem.style.backgroundPositionX = "-800px";

		//show main name
		if(!!this.name) this.initName(true);

		this.nameWidth = dom_elem_name.offsetWidth;
		this.nameHeight = dom_elem_name.offsetHeight;
	}

	deimos.element.Item.prototype.onMove = function() {
		Item._super.prototype.onMove.call(this);
		if(!!this.name) this.renderName();
	}

	deimos.element.Item.prototype.render = function() {
		if(Item._super.prototype.render.call(this)) {
			if(!!this.name) this.renderName();
		}
	}

	/**
	 * Name
	 */
	deimos.element.Item.prototype.initName = function () {
		if(this.name !== '') {
			var dom_elem_name = document.createElement("div");
			dom_elem_name.setAttribute("id",this.domId+'_name') ;

			dom_elem_name.style.position = "absolute";
			dom_elem_name.innerHTML = this.name;
			dom_elem_name.style.display  = 'none' ;
			dom_elem_name.style.fontSize = '12px';
			dom_elem_name.style.fontWeight = 'bold';
			dom_elem_name.style.color = '#'+this.color;
			dom_elem_name.style.zIndex = 10;
			dom_elem_name.style.opacity = 0.7;
			dom_elem_name.style.textShadow = 'white -2px -2px 2px, white 2px 2px 2px, white -2px 2px 2px, white 2px -2px 2px';

			deimos.Engine.zone.area.appendChild(dom_elem_name) ;
			dom_elem_name.style.display  = 'block' ;

			this.domElemName = document.getElementById(this.domId+'_name');

			this.renderName.call(this);
		}
	}

	deimos.element.Item.prototype.destroy = function() {
		Item._super.prototype.destroy.call(this);
		delete deimos.Engine.scene.items[this.serverid];
	}

})(org.dbyzero.deimos, document);
/**
 *
 * org.dbyzero.deimos.element.AttackZone Object
 *
 * @author dbyzero
 * @date : 2015/01/21
 * @description : Attack zone create to damage other entities
 *
 **/


(function(deimos,document,undefined) {
	var Vector = org.dbyzero.tools.Vector;
	deimos.element = deimos.element || {} ;

	/**
	 * AttackZone constructon
	 * 
	 * @param position Vector position of the block inside the zone
	 * @param size Vector size of the block inside the zone
	 *
	 * */
	deimos.element.AttackZone = function(id,position,size,ownerId,duration) {
		this.id			= id;
		this.domId		= 'attackzone-'+id;
		this.position	= position;
		this.size		= size;
		this.ownerId	= ownerId;
		this.duration	= duration;
		this.vertexTL = new Vector(position.x,				position.y);
		this.vertexTR = new Vector(position.x + size.x,		position.y);
		this.vertexBL = new Vector(position.x,				position.y + size.y);
		this.vertexBR = new Vector(position.x + size.x,		position.y + size.y);
		this.lastUpdate = new Date().getTime();
	}

	deimos.element.AttackZone.prototype.render = function(dt, now) {
		var dom_elem = document.createElement("div");
		dom_elem.setAttribute("id",this.domId);

		dom_elem.style.width = parseInt(this.size.x)+'px';
		dom_elem.style.height  = parseInt(this.size.y)+'px';

		dom_elem.style.display  = 'block';
		dom_elem.style.position  = 'absolute';

		dom_elem.style.backgroundColor  = '#333';
		dom_elem.style.opacity  = '0.5';

		var translation = "translate3d("+(this.position.x)+"px,"+(this.position.y)+"px,0px)";
		dom_elem.style.transform = translation;
		dom_elem.style.webkitTransform = translation;

		deimos.Engine.zone.area.appendChild(dom_elem);

		this.domElem = document.getElementById(this.domId);
		this.domElemWidth = this.domElem.offsetWidth;//usefull for positionning name and speaker
		this.domElemHeight = this.domElem.offsetHeight;//usefull for positionning name and speaker
	}

	deimos.element.AttackZone.prototype.update = function(dt, now) {
		this.duration += (this.lastUpdate - new Date().getTime());
		if(this.duration < 0) {
			return false;
		}
	}

	deimos.element.AttackZone.prototype.destroy = function() {
		this.cleanDom();
	}

	deimos.element.AttackZone.prototype.cleanDom = function() {
		var parentNode =  this.domElem.parentNode;
		if(parentNode) parentNode.removeChild(this.domElem);
	}

})(org.dbyzero.deimos, document);
/****
 *
 * org.dbyzero.deimos.network.WebsocketClient Object
 *
 * @author dbyzero
 * @date : 2013/05/04
 * @description : Use websocket to connect to distant server
 *
 **/
(function(deimos,document,undefined) {
	
	var EventManager = org.dbyzero.tools.EventManager;
	deimos.network = deimos.network || {} ;

	/**
	 * WebsocketClient constructor
	 * 
	 * @param string hostname of the remote websocket server
	 * @param int port of the remote websocket server
	 * @param WebsocketClientMode Mode of the client, can be WebsocketClientMode.DEBUG to show logs
	 *
	 * */
	deimos.network.WebsocketClient = function(hostname,port,mode) {
		this.retryConnection = null;
		this.server_hostname = hostname;
		this.server_port = port;
		this.connection_stream = 'ws://'+this.server_hostname+':'+this.server_port;

		this.server_connected = false;
		this.session_id = null;
	}


	deimos.network.WebsocketClient.prototype =  {
		/***
		 * Connection Method
		 * Use to connect to remote websocket server
		 *
		 * @return void
		 *
		 **/
		connect : function () {
			// if user is running mozilla then use it's built-in WebSocket
			window.WebSocket = window.WebSocket || window.MozWebSocket;

			var server_hostname = this.server_hostname ;
			var server_port = this.server_port ;

			var connection = new WebSocket(this.connection_stream);

			connection.onopen = this.onopen.bind(this) ;
			connection.onclose = this.onclose.bind(this) ;
			connection.onerror = this.onerror.bind(this) ;
			connection.onmessage = this.onmessage.bind(this) ;

			this.connection = connection ;
		},

		close : function () {
			// if user is running mozilla then use it's built-in WebSocket
			window.WebSocket = window.WebSocket || window.MozWebSocket;

			this.connection.close() ;
			delete this.connection ;
		},

		/***
		 * Send Message Method
		 *
		 * bind to Event org.dbyzero.deimos.network.sendMessage
		 * 
		 * @param Object trigged event
		 * @return void
		 *
		 **/
		send: function(e) {
			this.connection.send(JSON.stringify(e.message)) ;
		},

		tryRelog: function() {
			//try to reconnect each second
			//if(this.connection != null) this.connection.close() ;
			this.connection = new WebSocket(this.connection_stream);
			var relog = function(){
				EventManager.fire("org.dbyzero.deimos.console.write",{"detail":{"message":"Trying to reconnecting..."}});
				if(this.connection.readyState !== WebSocket.OPEN) {
					this.connection = new WebSocket(this.connection_stream);
				} else {
					this.connection.onopen = this.onopen.bind(this) ;
					this.connection.onclose = this.onclose.bind(this) ;
					this.connection.onerror = this.onerror.bind(this) ;
					this.connection.onmessage = this.onmessage.bind(this) ;

					EventManager.fire("org.dbyzero.deimos.network.connected",{});
					
					clearInterval(setintercalId) ;
				}
			} ;
			var setintercalId = setInterval(relog.bind(this),1000) ;
		},
		onopen: function (e) {
			EventManager.fire("org.dbyzero.deimos.network.connected",{});
			this.server_connected = true ;

			//check connection each 3s
			var poolAlive = function() {
				if(this.connection.readyState !== 1 && this.connection.server_connected == true) {
					EventManager.fire("org.dbyzero.deimos.console.write",{"detail":{"message":"Connection closed"}},{});
					EventManager.fire("org.dbyzero.deimos.network.disconnected",{});
					this.server_connected = false ;
				}
			} ;
			setInterval(poolAlive.bind(this), 3000);

		},
		onclose : function (e) {
			EventManager.fire("org.dbyzero.deimos.console.write",{"detail":{"message":"Connection closed"}});
			EventManager.fire("org.dbyzero.deimos.network.disconnected");
			this.session_id = null ;
			this.tryRelog() ;
			
		},
		onerror: function (error) {
			EventManager.fire("org.dbyzero.deimos.console.write",{"detail":{"message":"An error accured with the server"}});
			EventManager.fire("org.dbyzero.deimos.network.disconnected");
			this.session_id = null ;
			this.tryRelog() ;
		},
		onmessage: function (message) {
			var json_msg = JSON.parse(message.data) ;
			EventManager.fire("org.dbyzero.deimos.network.receivedMessage",json_msg) ;
		}
	}
})(org.dbyzero.deimos, document);
/**
 *
 * org.dbyzero.deimos.network.Manager Object
 *
 * @author dbyzero
 * @date : 2013/08/09
 * @description : Config of the application
 *
 * */

var org = org || {} ;
org.dbyzero = org.dbyzero || {} ;
org.dbyzero.deimos = org.dbyzero.deimos || {} ;

(function(deimos,document,undefined) {

	var EventManager = org.dbyzero.tools.EventManager;

	deimos.network = org.dbyzero.deimos.network || {} ;
	
	deimos.network.Manager = function() {
		//stub
	}

	//Can be use as an id too
	deimos.network.Manager.count = 0 ;

	deimos.network.Manager.prototype = {
		"init" : function() {
			//connection events
			EventManager.register('org.dbyzero.deimos.network.receivedMessage',this.receivedMessage.bind(this)) ;
			EventManager.register('org.dbyzero.deimos.network.sendMessage',this.sendMessage.bind(this)) ;
			EventManager.register('org.dbyzero.deimos.network.sendSync',this.sendSync.bind(this)) ;
		},
		"destroy" : function() {
			EventManager.unregister('org.dbyzero.deimos.network.receivedMessage') ;
			EventManager.unregister('org.dbyzero.deimos.network.sendMessage') ;
			EventManager.unregister('org.dbyzero.deimos.network.sendSync') ;
		},
		"receivedMessage" : function(e) {
			var _t = deimos.Engine._t;
			switch(e[_t.ACTION]) {
				case _t.ACTION_LOGGED_OK :
					if(e[_t.MESSAGE][_t.SESSION_ID] === undefined) {
						EventManager.fire("org.dbyzero.deimos.console.writeError",{"detail":{"message":"Error : Auth but no session id ? wtf ?"}});
						return ;
					}
					deimos.Engine.wsClient.session_id = e[_t.MESSAGE][_t.SESSION_ID];
					EventManager.fire('org.dbyzero.deimos.network.logged',e);
					break ;
				case _t.ACTION_CHOOSE_CHAR_OK :
					EventManager.fire("org.dbyzero.deimos.network.avatarSelectionConfirmed",e);
					break ;
				case _t.ACTION_ERROR :
					EventManager.fire("org.dbyzero.deimos.console.writeError",{"detail":{"message":"Error : "+JSON.stringify(e[_t.MESSAGE])}});
					break ;
				case _t.ACTION_SYNC :
					EventManager.fire("org.dbyzero.deimos.render.parseScene",e);
					break ;
				case _t.ACTION_SYNC_AVATAR :
					EventManager.fire("org.dbyzero.deimos.network.syncAvatar",e);
					break ;
				case _t.ACTION_SYNC_ITEM :
					EventManager.fire("org.dbyzero.deimos.network.syncItem",e);
					break ;
				case _t.ACTION_GET_ITEM_TEMPLATE :
					this.receivedItem(e);
					break ;
				case _t.ACTION_SYNC_PROJECTILE :
					EventManager.fire("org.dbyzero.deimos.network.syncProjectile",e);
					break ;
				case _t.ACTION_SYNC_MONSTER :
					EventManager.fire("org.dbyzero.deimos.network.syncMonster",e);
					break ;
				case _t.ACTION_REMOVE_PROJECTILE :
					EventManager.fire("org.dbyzero.deimos.network.removeProjectile",e);
					break ;
				case _t.ACTION_COLLIDE :
					EventManager.fire("org.dbyzero.deimos.network.actionCollide",e);
					break ;
				case _t.ACTION_ITEM_GRABBED :
					EventManager.fire("org.dbyzero.deimos.network.itemGrabbed",e);
					break ;
				case _t.ACTION_SYNC_ATTACK_ZONE :
					EventManager.fire("org.dbyzero.deimos.network.syncAttackZone",e);
					break ;
				default :
					EventManager.fire("org.dbyzero.deimos.console.writeError",{"detail":{"message":"Unknow status : "+JSON.stringify(e)}});
					break ;
			}
		},

		receivedItem: function(msg){
			var _t = deimos.Engine._t;
			var m = msg[_t['MESSAGE']];
			this.storeItemFromServer(m);
		},

		storeItemFromServer: function(item){
			var _t = deimos.Engine._t;
			var i = {};
			i.id = item[_t['ID']];
			i.name = item[_t['NAME']];
			i.kind = item[_t['MESSAGE_KIND']];
			i.size = item[_t['MESSAGE_SIZE']];
			i.skin = item[_t['MESSAGE_SKIN']];
			i.attack = item[_t['MESSAGE_ATTACK']];
			i.deltashow = item[_t['MESSAGE_DELTASHOW']];
			EventManager.fire("org.dbyzero.deimos.Engine.newItemStored."+i.id,i);
			deimos.Engine.itemTemplates[i.id] = i;
		},


		"sendActionMessage" : function(e) {
			if(typeof e.action !== 'string') {
				Log.error('Keyboard event not set to send message to server') ;
				return false;
			}
			this.sendMessage({'message':{'action':{'type':'keyboardEvent','event':e.action}}});
		},



		"sendMessage" : function(e) {
			//set date et session_id
			var _t = deimos.Engine._t;
			e[_t.SESSION_ID]	= deimos.Engine.wsClient.session_id;
			e[_t.TRACE_ID]		= deimos.network.Manager.count++;
			e[_t.DATE]			= Date.now();

			var data = {};
			data.message = e;

			//putting it at the end of the queue
			setTimeout(function(){ 
				if(deimos.Engine.wsClient === undefined) return;
				deimos.Engine.wsClient.send(data)
			}, 0);
		},


		"askItemTemplate" : function(item_id, callback) {
			var _t = deimos.Engine._t;
			var message = {};
			message[_t.ACTION] = _t.ACTION_GET_ITEM_TEMPLATE;
			message[_t.MESSAGE] = {};
			message[_t.MESSAGE][_t.MESSAGE_ITEM_ID] = item_id;
			this.sendMessage(message);
		},


		"sendSync" : function(e) {
			var _t = deimos.Engine._t;
			var message = {};
			message[_t.ACTION] = _t.ACTION_SYNC;
			message[_t.MESSAGE] = {};
			message[_t.MESSAGE][_t.MESSAGE_SAYING] = deimos.Engine.avatar.saying;
			message[_t.MESSAGE][_t.MESSAGE_POSITION] = {
				'x':parseInt(deimos.Engine.avatar.position.x),
				'y':parseInt(deimos.Engine.avatar.position.y)
			};
			this.sendMessage(message);
		},


		//Handle success action from server here
		"successAction" : function(e) {
			switch(e.action) {
				case "info" :
					EventManager.fire("org.dbyzero.deimos.console.write",{"detail":{"message":"Info from server : "+JSON.stringify(data.message)}});
					break;
				default :
					EventManager.fire("org.dbyzero.deimos.console.write",{"detail":{"message":"Unknow action : "+JSON.stringify(data)}});
					break;
			}
		}
	}
})(org.dbyzero.deimos, document);
/**
 *
 * org.dbyzero.deimos.network.Message Object
 *
 * @author dbyzero
 * @date : 2013/02/02
 * @description : Network message
 *
 * */

var org = org || {};
org.dbyzero = org.dbyzero || {};
org.dbyzero.deimos = org.dbyzero.deimos || {};

(function(deimos,document,undefined) {
	deimos.network = org.dbyzero.deimos.network || {};
	
	deimos.network.Message = {};

	deimos.network.Message.CODE = {
		"text":{
			"DATE":"d",
			"ID":"i",
			"ACTION":"t",
			"ACTION_ERROR":"e",
			"ACTION_LOGGED_OK":"o",
			"ACTION_LOGGED_NOK":"n",
			"ACTION_SYNC":"=",
			"ACTION_SYNC_AVATAR":"#",
			"ACTION_SYNC_ITEM":"[",
			"ACTION_SYNC_MONSTER":"{",
			"ACTION_CHOOSE_CHAR":"r",
			"ACTION_CHOOSE_CHAR_OK":"+",
			"ACTION_MOVE_START":"a",
			"ACTION_MOVE_STOP":"6",
			"ACTION_JUMP":"j",
			"ACTION_GET_ITEM_TEMPLATE":"F",
			"ACTION_SYNC_PROJECTILE":"L",
			"ACTION_REMOVE_PROJECTILE":"Q",
			"ACTION_LOGOUT":"V",
			"ACTION_COLLIDE":"@",
			"ACTION_ITEM_GRABBED":"á",
			"ACTION_SYNC_ATTACK_ZONE":"è",
			"MESSAGE":"m",
			"MESSAGE_MOVE_ID":"9",
			"MESSAGE_MOVE_TYPE":"7",
			"MESSAGE_MOVE_START":"f",
			"MESSAGE_CHAR":"c",
			"MESSAGE_CHARNAME":"_",
			"MESSAGE_POSITION":"p",
			"MESSAGE_VELOCITY":"v",
			"MESSAGE_USER_INPUT_VELOCITY":"y",
			"MESSAGE_ACCELERATION":"z",
			"MESSAGE_SIZE":"/",
			"MESSAGE_SKIN":"~",
			"MESSAGE_SPEAK":"s",
			"MESSAGE_SHOOT":"x",
			"MESSAGE_DETAIL":">",
			"MESSAGE_MOVE_SPEED":"1",
			"MESSAGE_JUMP_SPEED":"2",
			"MESSAGE_ANIMATION":"3",
			"MESSAGE_SAYING":"4",
			"MESSAGE_TIMESTAMP":"b",
			"MESSAGE_DIRECTION":"5",
			"MESSAGE_DURATION":"(",
			"MESSAGE_ELEMENT_ID":")",
			"MESSAGE_BGCOLOR":"8",
			"MESSAGE_ITEM_ID":"G",
			"MESSAGE_KIND":"H",
			"MESSAGE_ITEMS":"I",
			"MESSAGE_DAMAGE":"J",
			"MESSAGE_DAMAGE_TYPE":"K",
			"MESSAGE_ORIENTATION":"N",
			"MESSAGE_MASS":"O",
			"MESSAGE_DELTA":"P",
			"MESSAGE_OWNER":"S",
			"MESSAGE_DELTASHOW":"W",
			"MESSAGE_CURRENT_URL":"Y",
			"MESSAGE_GAME_AREA_DOM_ID":"Z",
			"MESSAGE_GAME_AREA_WIDTH":"-",
			"MESSAGE_GAME_AREA_HEIGHT":"|",
			"MESSAGE_GAME_AREA_BLOCKS":"?",
			"MESSAGE_GAME_AREA_NAME":"!",
			"MESSAGE_GAME_MAX_INSTANCE":"ú",
			"MESSAGE_GAME_MAX_USER":"ã",
			"MESSAGE_GOING_DOWN":"*",
			"MESSAGE_ATTACK":"T",
			"MESSAGE_COLOR":"`",
			"MESSAGE_MONSTER":"<",
			"MESSAGE_AVATAR":">",
			"MESSAGE_PROJECTILE":"ù",
			"MESSAGE_ITEM":"/",
			"MESSAGE_FROM":"ñ",
			"MESSAGE_FROM_TYPE":".",
			"MESSAGE_FROM_POSITION":",",
			"MESSAGE_TO":"÷",
			"MESSAGE_TO_TYPE":"å",
			"MESSAGE_TO_POSITION":"ò",
			"MESSAGE_IS_DEAD":"ð",
			"MESSAGE_HP":"U",
			"MESSAGE_CURRENT_HP":"R",
			"MESSAGE_LANDED":"ä",
			"NAME":"h",
			"TRACE_ID":"q",
			"SESSION_ID":"k",
			"LOGIN":"l",
			"AUTH_BY_TOKEN":"^",
			"PASSWORD":"w",
			"AVATARS":"u",
			"ITEMS":"]",
			"LEFT":"0",
			"RIGHT":"é",
			"JUMP":"'",
			"PROJECTILES":"M",
			"MONSTERS":"}",
			"MESSAGE_ATTACK_TYPE":"T",
			"MESSAGE_ATTACK_MAIN":";",
			"ACTION_ATTACK":"X",
			"ITEM_SLOT_HEAD":"A",
			"ITEM_SLOT_CHEST":"B",
			"ITEM_SLOT_FOOT":"C",
			"ITEM_SLOT_LEFT_HAND":"D",
			"ITEM_SLOT_RIGHT_HAND":"E",
			"ACTION_GOING_DOWN_STOP":"&",
			"ACTION_GOING_DOWN":"%"
		},
		"verbose":{
			"DATE":"date",
			"ID":"id",
			"MESSAGE":"message",
			"ACTION":"action",
			"ACTION_ERROR":"error",
			"ACTION_LOGGED_OK":"login_ok",
			"ACTION_LOGGED_NOK":"loggued_nok",
			"ACTION_SYNC":"sync",
			"ACTION_SYNC_AVATAR":"avatar_sync",
			"ACTION_SYNC_ITEM":"item_sync",
			"ACTION_CHOOSE_CHAR":"return_charater",
			"ACTION_CHOOSE_CHAR_OK":"avatar_selected",
			"ACTION_MOVE_START":"move_start",
			"ACTION_MOVE_STOP":"move_stop",
			"ACTION_JUMP":"jump",
			"ACTION_REMOVE_PROJECTILE":"remove_projectile",
			"ACTION_GET_ITEM_TEMPLATE":"get_item",
			"ACTION_SYNC_PROJECTILE":"sync_projectile",
			"ACTION_LOGOUT":"logout",
			"ACTION_SYNC_MONSTER":"sync_monster",
			"ACTION_COLLIDE":"action_collide",
			"ACTION_ITEM_GRABBED":"item_grabbed",
			"ACTION_SYNC_ATTACK_ZONE":"attack_zone",
			"MESSAGE_MOVE_ID":"move_id",
			"MESSAGE_MOVE_TYPE":"move_type",
			"MESSAGE_MOVE_START":"move_start",
			"MESSAGE_CHAR":"character",
			"MESSAGE_CHARNAME":"character_name",
			"MESSAGE_POSITION":"position",
			"MESSAGE_VELOCITY":"velocity",
			"MESSAGE_USER_INPUT_VELOCITY":"user_input_velocity",
			"MESSAGE_ACCELERATION":"acceleration",
			"MESSAGE_SPEAK":"speak",
			"MESSAGE_SHOOT":"shoot",
			"MESSAGE_SIZE":"size",
			"MESSAGE_SKIN":"skin",
			"MESSAGE_DETAIL":"detail",
			"MESSAGE_MOVE_SPEED":"move_speed",
			"MESSAGE_JUMP_SPEED":"jump_speed",
			"MESSAGE_ANIMATION":"animation",
			"MESSAGE_SAYING":"saying",
			"MESSAGE_TIMESTAMP":"timestamp",
			"MESSAGE_DIRECTION":"direction",
			"MESSAGE_DURATION":"duration",
			"MESSAGE_ELEMENT_ID":"element_id",
			"MESSAGE_BGCOLOR":"bg_color",
			"MESSAGE_ITEM_ID":"item_id",
			"MESSAGE_KIND":"kind",
			"MESSAGE_ITEMS":"items",
			"MESSAGE_DAMAGE":"damage",
			"MESSAGE_DAMAGE_TYPE":"damage_type",
			"MESSAGE_ORIENTATION":"orientation",
			"MESSAGE_MASS":"mass",
			"MESSAGE_DELTA":"delta",
			"MESSAGE_OWNER":"owner",
			"MESSAGE_DELTASHOW":"delta_show",
			"MESSAGE_CURRENT_URL":"current_url",
			"MESSAGE_GAME_AREA_DOM_ID":"game_area_dom_id",
			"MESSAGE_GAME_AREA_WIDTH":"game_area_width",
			"MESSAGE_GAME_AREA_HEIGHT":"game_area_height",
			"MESSAGE_GAME_AREA_BLOCKS":"game_area_blocks",
			"MESSAGE_GAME_AREA_NAME":"game_area_name",
			"MESSAGE_GAME_MAX_INSTANCE":"max_instance",
			"MESSAGE_GAME_MAX_USER":"max_user",
			"MESSAGE_GOING_DOWN":"going_down",
			"MESSAGE_ATTACK":"attack",
			"MESSAGE_COLOR":"color",
			"MESSAGE_MONSTER":"monster",
			"MESSAGE_AVATAR":"avatar",
			"MESSAGE_PROJECTILE":"projectile",
			"MESSAGE_ITEM":"item",
			"MESSAGE_FROM":"from",
			"MESSAGE_FROM_TYPE":"from_type",
			"MESSAGE_FROM_POSITION":"from_position",
			"MESSAGE_TO":"to",
			"MESSAGE_TO_TYPE":"to_type",
			"MESSAGE_TO_POSITION":"to_position",
			"MESSAGE_IS_DEAD":"is_dead",
			"MESSAGE_HP":"hp",
			"MESSAGE_CURRENT_HP":"current_hp",
			"MESSAGE_LANDED":"landed",
			"TRACE_ID":"trace_id",
			"SESSION_ID":"session_id",
			"LOGIN":"login",
			"AUTH_BY_TOKEN":"auth_by_token",
			"NAME":"name",
			"PASSWORD":"password",
			"AVATARS":"avatars",
			"ITEMS":"items",
			"LEFT":"left",
			"RIGHT":"right",
			"JUMP":"jump",
			"PROJECTILES":"projectiles",
			"MONSTERS":"monsters",
			"MESSAGE_ATTACK_TYPE":"attack_type",
			"MESSAGE_ATTACK_MAIN":"attack_main",
			"ACTION_ATTACK":"action_attack",
			"ITEM_SLOT_HEAD":"item_slot_head",
			"ITEM_SLOT_CHEST":"item_slot_chest",
			"ITEM_SLOT_FOOT":"item_slot_foot",
			"ITEM_SLOT_LEFT_HAND":"item_slot_left_hand",
			"ITEM_SLOT_RIGHT_HAND":"item_slot_right_hand",
			"ACTION_GOING_DOWN_STOP":"action_going_down",
			"ACTION_GOING_DOWN":"action_going_down_stop"
		}
	}
})(org.dbyzero.deimos, document);
/**
 *
 * org.dbyzero.tools.Physics util class
 *
 * @author dbyzero
 * @date : 2013/09/27
 * @description : Physics tools
 *
 */
 
var org = org || {} ;
org.dbyzero = org.dbyzero || {} ;
org.dbyzero.tools = org.dbyzero.tools || {} ;

(function(tools,document,undefined) {
	var Vector = tools.Vector;

	tools.Physics = {};

	//Fourth params are org.dbyzero.tools.Vector
	tools.Physics.SegmentsCollision = function(a1,a2,b1,b2) {

		intersection = Vector.Zero();

		var b = Vector.Sub(a2,a1);
		var d = Vector.Sub(b2,b1);
		var bDotDPerp = b.x * d.y - b.y * d.x;

		// if b dot d == 0, it means the lines are parallel so have infinite intersection points
		if (bDotDPerp == 0)
		return false;

		var c = Vector.Sub(b1,a1);
		var t = (c.x * d.y - c.y * d.x) / bDotDPerp;

		if (t < 0 || t > 1) return false;

		var u = (c.x * b.y - c.y * b.x) / bDotDPerp;
		if (u < 0 || u > 1) return false;
		b.scalar(t);
		return Vector.Sum(a1, b);

	}

	/**
	 * @param position      Vector  position at t0
	 * @param velocity      Vector  
	 * @param force         Vector  sum of all force applied 
	 * @param dt            Numeric timestep
	 *
	 * @return  Vector  new position at t0 + dt
	 *
	 * equation : position = vitesse * dt + 0.5 * force * dt²
	 */
	tools.Physics.MotionIntegration = function(position,velocity,force,dt) {
		var v = velocity.duplicate();
		v.scalar(dt);
		
		var a = force.duplicate();
		a.scalar(0.5 * dt * dt);
		
		return Vector.Sum( position.duplicate(), Vector.Sum( v, a ) );
	}

	/**
	 * @param position      Vector
	 * @param velocity      Vector  
	 * @param force         Vector
	 * @param dt            Numeric timestep
	 * @return Object {dx:dx,dv:dv}
	 *
	 * equation : position = vitesse * dt + 0.5 * force * dt²
	 */
	tools.Physics.integrateKM4 = function(position, velocity, force, dt) {

		var a = _evaluateMK4( velocity, force, 0.0,    new _state() );
		var b = _evaluateMK4( velocity, force, dt*0.5, a );
		var c = _evaluateMK4( velocity, force, dt*0.5, b );
		var d = _evaluateMK4( velocity, force, dt,      c );
		var output = {};
		output['dx'] = Vector.Scalar(
			Vector.Sum(
				a.position,
				Vector.Sum(
					Vector.Scalar(
						Vector.Sum(
							b.position, 
							c.position
						),
						2
					),
					d.position
				)
			),
			dt * 0.166666666667 
		);
		output['dv'] = Vector.Scalar(
			Vector.Sum(
				a.velocity,
				Vector.Sum(
					Vector.Scalar(
						Vector.Sum(
							b.velocity,
							c.velocity
						),
						2
					),
					d.velocity
				)
			),
			dt * 0.166666666667
		);

		return output;
	}

	var _evaluateMK4 = function ( velocity, force, dt, derivate ) {
		var output = new _state();
		var deriv = derivate.velocity.duplicate();
		deriv.scalar(dt);
		output.position = Vector.Sum(velocity, deriv);
		output.velocity = force;
		return output;
	}

	var _state = function () {
		this.position = new Vector(0,0);
		this.velocity = new Vector(0,0);
	}

})(org.dbyzero.tools, document);
/**
 *
 * User movement Object
 *
 * @author dbyzero
 * @date : 2013/10/28
 * @description : User movement force
 *
 **/

(function(deimos,document,undefined) {

	deimos.physic = deimos.physic || {} ;

	/**
	 * User Movement constructor
	 * 
	 * @param Vector physic
	 * 
	 **/

	deimos.physic.UserMovement = function (physic, type) {
		this.id = deimos.physic.UserMovement.lastid++;
		this.movement = physic;
		this.startTimestamp = new Date().getTime();
		this.durationIntegrated = 0;
		this.duration = null;
		this.type = type;
	}

	deimos.physic.UserMovement.lastid = 0;

})(org.dbyzero.deimos, document);
/**
 *
 * Gravity Object
 *
 * @author dbyzero
 * @date : 2014/02/10
 * @description : Gravity
 *
 **/

(function(deimos,document,undefined) {
	deimos.physic = deimos.physic || {} ;
	deimos.physic.Gravity = new org.dbyzero.tools.Vector(0, 300);
})(org.dbyzero.deimos, document);
/**
 *
 * org.dbyzero.deimos.analyse.Manual
 *
 * @author dbyzero
 * @date : 2014/08/30
 * @description : Analyser by manually game area by browser
 *
 * */

var org = org || {} ;
org.dbyzero = org.dbyzero || {} ;
org.dbyzero.deimos = org.dbyzero.deimos || {} ;
org.dbyzero.deimos.analyser = org.dbyzero.deimos.analyser || {} ;

(function(deimos,document,undefined) {
	deimos.analyser.Manual = function(domID){
		this.areaDomId = domID;
		this.areaZone = document.getElementById(domID);
		this.blocksById = [];
		this.blocksByClass = [];
		this.blocksByTag = [];
		this.blocksParsed = [];
	}
	deimos.analyser.Manual.prototype.addBlock = function(selector, plateforme){
		//if ID
		var regex = new RegExp('^#','i');
		if(regex.test(selector)) {
			this.addBlockById(selector.substr(1),plateforme);
			return;
		}
		//if Class
		var regex = new RegExp('^\.','i');
		if(regex.test(selector)) {
			this.addBlockByClass(selector.substr(1),plateforme);
			return;
		}
		//if sector
		this.addBlockByTag(selector,plateforme);
		return this;
	}
	deimos.analyser.Manual.prototype.addBlockById = function(domId, plateforme){
		this.blocksById.push({'selector':domId,'plateforme':!!plateforme});
		return this;
	}
	deimos.analyser.Manual.prototype.addBlockByClass = function(className, plateforme){
		this.blocksByClass.push({'selector':className,'plateforme':!!plateforme});
		return this;
	}
	deimos.analyser.Manual.prototype.addBlockByTag = function(tagName, plateforme){
		this.blocksByTag.push({'selector':tagName,'plateforme':!!plateforme});
		return this;
	}
	deimos.analyser.Manual.prototype.getCoords = function(domContent,domBlock){
		//browse all parent to domContent to add there coord
		var left = 0;
		var top = 0;
		var domBrowse = domBlock; 
		while(domBrowse.offsetParent != domContent) {
			if(domBrowse.offsetParent == null) {
				return null;
			}
			left += domBrowse.offsetLeft;
			top += domBrowse.offsetTop;
			domBrowse = domBrowse.offsetParent;
		}
		left += domBrowse.offsetLeft;
		top += domBrowse.offsetTop;
		return {'left':left,'top':top};
	}
	deimos.analyser.Manual.prototype.addDomBlock = function(domBlock,id,block){
		//temp var used on process
		var coords,blockLeft,blockTop,blockHeight,blockWidth,blockJson;

		coords = this.getCoords(this.areaZone,domBlock);
		if(coords === null) {
			console.log('block is not a child of the area');
			return;
		}
		blockLeft = coords.left;
		blockTop = coords.top;
		blockHeight = domBlock.offsetHeight;
		blockWidth = domBlock.offsetWidth;
		blockJson = {
			"position":{"x":blockLeft,"y":blockTop},
			"height":blockHeight,"width":blockWidth,
			"type":{"value":0,"type":((block.plateforme)?'plateform':'blocks')},
			"id":"block-"+id+"-by-id-"+block.selector,
			"vertexTL":{"x":blockLeft,"y":blockTop},
			"vertexTR":{"x":blockLeft + blockWidth,"y":blockTop},
			"vertexBL":{"x":blockLeft,"y":blockTop + blockHeight},
			"vertexBR":{"x":blockLeft + blockWidth,"y":blockTop + blockHeight}
		}
		this.blocksParsed.push(blockJson);
	}
	deimos.analyser.Manual.prototype.exec = function(){
		console.log('...parsing');
		this.blocksParsed = [];

		//temp var used on process
		var blockId = 1;
		var domBlock,domBlocks,coords;

		//by id
		for (var i = 0; i < this.blocksById.length; i++) {
			domBlock = document.getElementById(this.blocksById[i].selector);
			this.addDomBlock(domBlock,blockId++,this.blocksById[i]);
		};

		//by class
		for (var iClass = 0; iClass < this.blocksByClass.length; iClass++) {
			domBlocks = document.getElementsByClassName(this.blocksByClass[iClass].selector);
			for (var j = 0; j < domBlocks.length; j++) {
				var domBlock = domBlocks[j];
				this.addDomBlock(domBlock,blockId++,this.blocksByClass[iClass]);
			};
		};

		//by section 
		//TODO
		console.log('done!');
		console.log(JSON.stringify(this.blocksParsed));
	}

})(org.dbyzero.deimos, document);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1kNS5qcyIsIkluaGVyaXQuanMiLCJMb29wLmpzIiwiTG9nLmpzIiwiVmVjdG9yLmpzIiwiRXZlbnRNYW5hZ2VyLmpzIiwiS2V5Ym9hcmRDb250cm9sbGVyLmpzIiwiQ29uZmlnLmpzIiwiRW5naW5lLmpzIiwiQW5pbWF0aW9uLmpzIiwiVUkuanMiLCJTY2VuZS5qcyIsIkVsZW1lbnQuanMiLCJTcGVha2VyLmpzIiwiQXZhdGFyLmpzIiwiU2VydmVyQXZhdGFyLmpzIiwiQmxvY2suanMiLCJab25lLmpzIiwiUHJvamVjdGlsZS5qcyIsIk1vbnN0ZXIuanMiLCJJdGVtLmpzIiwiQXR0YWNrWm9uZS5qcyIsIldlYnNvY2tldENsaWVudC5qcyIsIk1hbmFnZXIuanMiLCJNZXNzYWdlLmpzIiwiUGh5c2ljcy5qcyIsIlVzZXJNb3ZlbWVudC5qcyIsIkdyYXZpdHkuanMiLCJNYW51YWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeGFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25sQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzN5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImRlaW1vcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5DcnlwdG9KUyB2My4xLjJcbmNvZGUuZ29vZ2xlLmNvbS9wL2NyeXB0by1qc1xuKGMpIDIwMDktMjAxMyBieSBKZWZmIE1vdHQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5jb2RlLmdvb2dsZS5jb20vcC9jcnlwdG8tanMvd2lraS9MaWNlbnNlXG4qL1xudmFyIENyeXB0b0pTPUNyeXB0b0pTfHxmdW5jdGlvbihzLHApe3ZhciBtPXt9LGw9bS5saWI9e30sbj1mdW5jdGlvbigpe30scj1sLkJhc2U9e2V4dGVuZDpmdW5jdGlvbihiKXtuLnByb3RvdHlwZT10aGlzO3ZhciBoPW5ldyBuO2ImJmgubWl4SW4oYik7aC5oYXNPd25Qcm9wZXJ0eShcImluaXRcIil8fChoLmluaXQ9ZnVuY3Rpb24oKXtoLiRzdXBlci5pbml0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pO2guaW5pdC5wcm90b3R5cGU9aDtoLiRzdXBlcj10aGlzO3JldHVybiBofSxjcmVhdGU6ZnVuY3Rpb24oKXt2YXIgYj10aGlzLmV4dGVuZCgpO2IuaW5pdC5hcHBseShiLGFyZ3VtZW50cyk7cmV0dXJuIGJ9LGluaXQ6ZnVuY3Rpb24oKXt9LG1peEluOmZ1bmN0aW9uKGIpe2Zvcih2YXIgaCBpbiBiKWIuaGFzT3duUHJvcGVydHkoaCkmJih0aGlzW2hdPWJbaF0pO2IuaGFzT3duUHJvcGVydHkoXCJ0b1N0cmluZ1wiKSYmKHRoaXMudG9TdHJpbmc9Yi50b1N0cmluZyl9LGNsb25lOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaW5pdC5wcm90b3R5cGUuZXh0ZW5kKHRoaXMpfX0sXG5xPWwuV29yZEFycmF5PXIuZXh0ZW5kKHtpbml0OmZ1bmN0aW9uKGIsaCl7Yj10aGlzLndvcmRzPWJ8fFtdO3RoaXMuc2lnQnl0ZXM9aCE9cD9oOjQqYi5sZW5ndGh9LHRvU3RyaW5nOmZ1bmN0aW9uKGIpe3JldHVybihifHx0KS5zdHJpbmdpZnkodGhpcyl9LGNvbmNhdDpmdW5jdGlvbihiKXt2YXIgaD10aGlzLndvcmRzLGE9Yi53b3JkcyxqPXRoaXMuc2lnQnl0ZXM7Yj1iLnNpZ0J5dGVzO3RoaXMuY2xhbXAoKTtpZihqJTQpZm9yKHZhciBnPTA7ZzxiO2crKyloW2orZz4+PjJdfD0oYVtnPj4+Ml0+Pj4yNC04KihnJTQpJjI1NSk8PDI0LTgqKChqK2cpJTQpO2Vsc2UgaWYoNjU1MzU8YS5sZW5ndGgpZm9yKGc9MDtnPGI7Zys9NCloW2orZz4+PjJdPWFbZz4+PjJdO2Vsc2UgaC5wdXNoLmFwcGx5KGgsYSk7dGhpcy5zaWdCeXRlcys9YjtyZXR1cm4gdGhpc30sY2xhbXA6ZnVuY3Rpb24oKXt2YXIgYj10aGlzLndvcmRzLGg9dGhpcy5zaWdCeXRlcztiW2g+Pj4yXSY9NDI5NDk2NzI5NTw8XG4zMi04KihoJTQpO2IubGVuZ3RoPXMuY2VpbChoLzQpfSxjbG9uZTpmdW5jdGlvbigpe3ZhciBiPXIuY2xvbmUuY2FsbCh0aGlzKTtiLndvcmRzPXRoaXMud29yZHMuc2xpY2UoMCk7cmV0dXJuIGJ9LHJhbmRvbTpmdW5jdGlvbihiKXtmb3IodmFyIGg9W10sYT0wO2E8YjthKz00KWgucHVzaCg0Mjk0OTY3Mjk2KnMucmFuZG9tKCl8MCk7cmV0dXJuIG5ldyBxLmluaXQoaCxiKX19KSx2PW0uZW5jPXt9LHQ9di5IZXg9e3N0cmluZ2lmeTpmdW5jdGlvbihiKXt2YXIgYT1iLndvcmRzO2I9Yi5zaWdCeXRlcztmb3IodmFyIGc9W10saj0wO2o8YjtqKyspe3ZhciBrPWFbaj4+PjJdPj4+MjQtOCooaiU0KSYyNTU7Zy5wdXNoKChrPj4+NCkudG9TdHJpbmcoMTYpKTtnLnB1c2goKGsmMTUpLnRvU3RyaW5nKDE2KSl9cmV0dXJuIGcuam9pbihcIlwiKX0scGFyc2U6ZnVuY3Rpb24oYil7Zm9yKHZhciBhPWIubGVuZ3RoLGc9W10saj0wO2o8YTtqKz0yKWdbaj4+PjNdfD1wYXJzZUludChiLnN1YnN0cihqLFxuMiksMTYpPDwyNC00KihqJTgpO3JldHVybiBuZXcgcS5pbml0KGcsYS8yKX19LGE9di5MYXRpbjE9e3N0cmluZ2lmeTpmdW5jdGlvbihiKXt2YXIgYT1iLndvcmRzO2I9Yi5zaWdCeXRlcztmb3IodmFyIGc9W10saj0wO2o8YjtqKyspZy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYVtqPj4+Ml0+Pj4yNC04KihqJTQpJjI1NSkpO3JldHVybiBnLmpvaW4oXCJcIil9LHBhcnNlOmZ1bmN0aW9uKGIpe2Zvcih2YXIgYT1iLmxlbmd0aCxnPVtdLGo9MDtqPGE7aisrKWdbaj4+PjJdfD0oYi5jaGFyQ29kZUF0KGopJjI1NSk8PDI0LTgqKGolNCk7cmV0dXJuIG5ldyBxLmluaXQoZyxhKX19LHU9di5VdGY4PXtzdHJpbmdpZnk6ZnVuY3Rpb24oYil7dHJ5e3JldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKGEuc3RyaW5naWZ5KGIpKSl9Y2F0Y2goZyl7dGhyb3cgRXJyb3IoXCJNYWxmb3JtZWQgVVRGLTggZGF0YVwiKTt9fSxwYXJzZTpmdW5jdGlvbihiKXtyZXR1cm4gYS5wYXJzZSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoYikpKX19LFxuZz1sLkJ1ZmZlcmVkQmxvY2tBbGdvcml0aG09ci5leHRlbmQoe3Jlc2V0OmZ1bmN0aW9uKCl7dGhpcy5fZGF0YT1uZXcgcS5pbml0O3RoaXMuX25EYXRhQnl0ZXM9MH0sX2FwcGVuZDpmdW5jdGlvbihiKXtcInN0cmluZ1wiPT10eXBlb2YgYiYmKGI9dS5wYXJzZShiKSk7dGhpcy5fZGF0YS5jb25jYXQoYik7dGhpcy5fbkRhdGFCeXRlcys9Yi5zaWdCeXRlc30sX3Byb2Nlc3M6ZnVuY3Rpb24oYil7dmFyIGE9dGhpcy5fZGF0YSxnPWEud29yZHMsaj1hLnNpZ0J5dGVzLGs9dGhpcy5ibG9ja1NpemUsbT1qLyg0KmspLG09Yj9zLmNlaWwobSk6cy5tYXgoKG18MCktdGhpcy5fbWluQnVmZmVyU2l6ZSwwKTtiPW0qaztqPXMubWluKDQqYixqKTtpZihiKXtmb3IodmFyIGw9MDtsPGI7bCs9ayl0aGlzLl9kb1Byb2Nlc3NCbG9jayhnLGwpO2w9Zy5zcGxpY2UoMCxiKTthLnNpZ0J5dGVzLT1qfXJldHVybiBuZXcgcS5pbml0KGwsail9LGNsb25lOmZ1bmN0aW9uKCl7dmFyIGI9ci5jbG9uZS5jYWxsKHRoaXMpO1xuYi5fZGF0YT10aGlzLl9kYXRhLmNsb25lKCk7cmV0dXJuIGJ9LF9taW5CdWZmZXJTaXplOjB9KTtsLkhhc2hlcj1nLmV4dGVuZCh7Y2ZnOnIuZXh0ZW5kKCksaW5pdDpmdW5jdGlvbihiKXt0aGlzLmNmZz10aGlzLmNmZy5leHRlbmQoYik7dGhpcy5yZXNldCgpfSxyZXNldDpmdW5jdGlvbigpe2cucmVzZXQuY2FsbCh0aGlzKTt0aGlzLl9kb1Jlc2V0KCl9LHVwZGF0ZTpmdW5jdGlvbihiKXt0aGlzLl9hcHBlbmQoYik7dGhpcy5fcHJvY2VzcygpO3JldHVybiB0aGlzfSxmaW5hbGl6ZTpmdW5jdGlvbihiKXtiJiZ0aGlzLl9hcHBlbmQoYik7cmV0dXJuIHRoaXMuX2RvRmluYWxpemUoKX0sYmxvY2tTaXplOjE2LF9jcmVhdGVIZWxwZXI6ZnVuY3Rpb24oYil7cmV0dXJuIGZ1bmN0aW9uKGEsZyl7cmV0dXJuKG5ldyBiLmluaXQoZykpLmZpbmFsaXplKGEpfX0sX2NyZWF0ZUhtYWNIZWxwZXI6ZnVuY3Rpb24oYil7cmV0dXJuIGZ1bmN0aW9uKGEsZyl7cmV0dXJuKG5ldyBrLkhNQUMuaW5pdChiLFxuZykpLmZpbmFsaXplKGEpfX19KTt2YXIgaz1tLmFsZ289e307cmV0dXJuIG19KE1hdGgpO1xuKGZ1bmN0aW9uKHMpe2Z1bmN0aW9uIHAoYSxrLGIsaCxsLGosbSl7YT1hKyhrJmJ8fmsmaCkrbCttO3JldHVybihhPDxqfGE+Pj4zMi1qKStrfWZ1bmN0aW9uIG0oYSxrLGIsaCxsLGosbSl7YT1hKyhrJmh8YiZ+aCkrbCttO3JldHVybihhPDxqfGE+Pj4zMi1qKStrfWZ1bmN0aW9uIGwoYSxrLGIsaCxsLGosbSl7YT1hKyhrXmJeaCkrbCttO3JldHVybihhPDxqfGE+Pj4zMi1qKStrfWZ1bmN0aW9uIG4oYSxrLGIsaCxsLGosbSl7YT1hKyhiXihrfH5oKSkrbCttO3JldHVybihhPDxqfGE+Pj4zMi1qKStrfWZvcih2YXIgcj1DcnlwdG9KUyxxPXIubGliLHY9cS5Xb3JkQXJyYXksdD1xLkhhc2hlcixxPXIuYWxnbyxhPVtdLHU9MDs2ND51O3UrKylhW3VdPTQyOTQ5NjcyOTYqcy5hYnMocy5zaW4odSsxKSl8MDtxPXEuTUQ1PXQuZXh0ZW5kKHtfZG9SZXNldDpmdW5jdGlvbigpe3RoaXMuX2hhc2g9bmV3IHYuaW5pdChbMTczMjU4NDE5Myw0MDIzMjMzNDE3LDI1NjIzODMxMDIsMjcxNzMzODc4XSl9LFxuX2RvUHJvY2Vzc0Jsb2NrOmZ1bmN0aW9uKGcsayl7Zm9yKHZhciBiPTA7MTY+YjtiKyspe3ZhciBoPWsrYix3PWdbaF07Z1toXT0odzw8OHx3Pj4+MjQpJjE2NzExOTM1fCh3PDwyNHx3Pj4+OCkmNDI3ODI1NTM2MH12YXIgYj10aGlzLl9oYXNoLndvcmRzLGg9Z1trKzBdLHc9Z1trKzFdLGo9Z1trKzJdLHE9Z1trKzNdLHI9Z1trKzRdLHM9Z1trKzVdLHQ9Z1trKzZdLHU9Z1trKzddLHY9Z1trKzhdLHg9Z1trKzldLHk9Z1trKzEwXSx6PWdbaysxMV0sQT1nW2srMTJdLEI9Z1trKzEzXSxDPWdbaysxNF0sRD1nW2srMTVdLGM9YlswXSxkPWJbMV0sZT1iWzJdLGY9YlszXSxjPXAoYyxkLGUsZixoLDcsYVswXSksZj1wKGYsYyxkLGUsdywxMixhWzFdKSxlPXAoZSxmLGMsZCxqLDE3LGFbMl0pLGQ9cChkLGUsZixjLHEsMjIsYVszXSksYz1wKGMsZCxlLGYsciw3LGFbNF0pLGY9cChmLGMsZCxlLHMsMTIsYVs1XSksZT1wKGUsZixjLGQsdCwxNyxhWzZdKSxkPXAoZCxlLGYsYyx1LDIyLGFbN10pLFxuYz1wKGMsZCxlLGYsdiw3LGFbOF0pLGY9cChmLGMsZCxlLHgsMTIsYVs5XSksZT1wKGUsZixjLGQseSwxNyxhWzEwXSksZD1wKGQsZSxmLGMseiwyMixhWzExXSksYz1wKGMsZCxlLGYsQSw3LGFbMTJdKSxmPXAoZixjLGQsZSxCLDEyLGFbMTNdKSxlPXAoZSxmLGMsZCxDLDE3LGFbMTRdKSxkPXAoZCxlLGYsYyxELDIyLGFbMTVdKSxjPW0oYyxkLGUsZix3LDUsYVsxNl0pLGY9bShmLGMsZCxlLHQsOSxhWzE3XSksZT1tKGUsZixjLGQseiwxNCxhWzE4XSksZD1tKGQsZSxmLGMsaCwyMCxhWzE5XSksYz1tKGMsZCxlLGYscyw1LGFbMjBdKSxmPW0oZixjLGQsZSx5LDksYVsyMV0pLGU9bShlLGYsYyxkLEQsMTQsYVsyMl0pLGQ9bShkLGUsZixjLHIsMjAsYVsyM10pLGM9bShjLGQsZSxmLHgsNSxhWzI0XSksZj1tKGYsYyxkLGUsQyw5LGFbMjVdKSxlPW0oZSxmLGMsZCxxLDE0LGFbMjZdKSxkPW0oZCxlLGYsYyx2LDIwLGFbMjddKSxjPW0oYyxkLGUsZixCLDUsYVsyOF0pLGY9bShmLGMsXG5kLGUsaiw5LGFbMjldKSxlPW0oZSxmLGMsZCx1LDE0LGFbMzBdKSxkPW0oZCxlLGYsYyxBLDIwLGFbMzFdKSxjPWwoYyxkLGUsZixzLDQsYVszMl0pLGY9bChmLGMsZCxlLHYsMTEsYVszM10pLGU9bChlLGYsYyxkLHosMTYsYVszNF0pLGQ9bChkLGUsZixjLEMsMjMsYVszNV0pLGM9bChjLGQsZSxmLHcsNCxhWzM2XSksZj1sKGYsYyxkLGUsciwxMSxhWzM3XSksZT1sKGUsZixjLGQsdSwxNixhWzM4XSksZD1sKGQsZSxmLGMseSwyMyxhWzM5XSksYz1sKGMsZCxlLGYsQiw0LGFbNDBdKSxmPWwoZixjLGQsZSxoLDExLGFbNDFdKSxlPWwoZSxmLGMsZCxxLDE2LGFbNDJdKSxkPWwoZCxlLGYsYyx0LDIzLGFbNDNdKSxjPWwoYyxkLGUsZix4LDQsYVs0NF0pLGY9bChmLGMsZCxlLEEsMTEsYVs0NV0pLGU9bChlLGYsYyxkLEQsMTYsYVs0Nl0pLGQ9bChkLGUsZixjLGosMjMsYVs0N10pLGM9bihjLGQsZSxmLGgsNixhWzQ4XSksZj1uKGYsYyxkLGUsdSwxMCxhWzQ5XSksZT1uKGUsZixjLGQsXG5DLDE1LGFbNTBdKSxkPW4oZCxlLGYsYyxzLDIxLGFbNTFdKSxjPW4oYyxkLGUsZixBLDYsYVs1Ml0pLGY9bihmLGMsZCxlLHEsMTAsYVs1M10pLGU9bihlLGYsYyxkLHksMTUsYVs1NF0pLGQ9bihkLGUsZixjLHcsMjEsYVs1NV0pLGM9bihjLGQsZSxmLHYsNixhWzU2XSksZj1uKGYsYyxkLGUsRCwxMCxhWzU3XSksZT1uKGUsZixjLGQsdCwxNSxhWzU4XSksZD1uKGQsZSxmLGMsQiwyMSxhWzU5XSksYz1uKGMsZCxlLGYsciw2LGFbNjBdKSxmPW4oZixjLGQsZSx6LDEwLGFbNjFdKSxlPW4oZSxmLGMsZCxqLDE1LGFbNjJdKSxkPW4oZCxlLGYsYyx4LDIxLGFbNjNdKTtiWzBdPWJbMF0rY3wwO2JbMV09YlsxXStkfDA7YlsyXT1iWzJdK2V8MDtiWzNdPWJbM10rZnwwfSxfZG9GaW5hbGl6ZTpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX2RhdGEsaz1hLndvcmRzLGI9OCp0aGlzLl9uRGF0YUJ5dGVzLGg9OCphLnNpZ0J5dGVzO2tbaD4+PjVdfD0xMjg8PDI0LWglMzI7dmFyIGw9cy5mbG9vcihiL1xuNDI5NDk2NzI5Nik7a1soaCs2ND4+Pjk8PDQpKzE1XT0obDw8OHxsPj4+MjQpJjE2NzExOTM1fChsPDwyNHxsPj4+OCkmNDI3ODI1NTM2MDtrWyhoKzY0Pj4+OTw8NCkrMTRdPShiPDw4fGI+Pj4yNCkmMTY3MTE5MzV8KGI8PDI0fGI+Pj44KSY0Mjc4MjU1MzYwO2Euc2lnQnl0ZXM9NCooay5sZW5ndGgrMSk7dGhpcy5fcHJvY2VzcygpO2E9dGhpcy5faGFzaDtrPWEud29yZHM7Zm9yKGI9MDs0PmI7YisrKWg9a1tiXSxrW2JdPShoPDw4fGg+Pj4yNCkmMTY3MTE5MzV8KGg8PDI0fGg+Pj44KSY0Mjc4MjU1MzYwO3JldHVybiBhfSxjbG9uZTpmdW5jdGlvbigpe3ZhciBhPXQuY2xvbmUuY2FsbCh0aGlzKTthLl9oYXNoPXRoaXMuX2hhc2guY2xvbmUoKTtyZXR1cm4gYX19KTtyLk1ENT10Ll9jcmVhdGVIZWxwZXIocSk7ci5IbWFjTUQ1PXQuX2NyZWF0ZUhtYWNIZWxwZXIocSl9KShNYXRoKTtcbiIsIi8qKlxuICpcbiAqIG9yZy5kYnl6ZXJvLnRvb2xzLkluaGVyaXQgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTQvMDMvMjJcbiAqIEBkZXNjcmlwdGlvbiA6IEluaGVyaXQgdG9vbHNcbiAqIFxuICovXG5cbnZhciBvcmcgPSBvcmcgfHwge30gO1xub3JnLmRieXplcm8gPSBvcmcuZGJ5emVybyB8fCB7fSA7XG5vcmcuZGJ5emVyby50b29scyA9IG9yZy5kYnl6ZXJvLnRvb2xzIHx8IHt9IDtcblxuKGZ1bmN0aW9uKHRvb2xzLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXG5cdHRvb2xzLkluaGVyaXQgPSBmdW5jdGlvbihvYmosIHBhcmVudCkge1xuXG5cdFx0Zm9yICh2YXIgcHJvcCBpbiBwYXJlbnQpIHtcblx0XHRcdG9ialtwcm9wXSA9IHBhcmVudFtwcm9wXTtcblx0XHR9XG5cblx0XHRvYmouX3N1cGVyID0gcGFyZW50O1xuXHRcdG9iai5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHBhcmVudC5wcm90b3R5cGUsIHtcblx0XHRcdGNvbnN0cnVjdG9yOiB7XG5cdFx0XHRcdHZhbHVlOiBvYmosXG5cdFx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxuXHRcdFx0XHR3cml0YWJsZTogdHJ1ZSxcblx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0pKG9yZy5kYnl6ZXJvLnRvb2xzLGRvY3VtZW50KTsiLCIvKipcbiAqIG9yZy5kYnl6ZXJvLnRvb2xzLkxvb3AgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTMvMDcvMjhcbiAqIEBkZXNjcmlwdGlvbiA6IExvb3AgdG9vbHNcbiAqIFxuICovXG5cbnZhciBvcmcgPSBvcmcgfHwge30gO1xub3JnLmRieXplcm8gPSBvcmcuZGJ5emVybyB8fCB7fSA7XG5vcmcuZGJ5emVyby50b29scyA9IG9yZy5kYnl6ZXJvLnRvb2xzIHx8IHt9IDtcblxuKGZ1bmN0aW9uKHRvb2xzLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBMb29wIGNvbnN0cnVjdG9yXG5cdCAqIEBwYXJhbXMgZGVzYyBzdHJpbmcgXHRcdERlc2NyaXB0aW9uIG9mIHRoZSBsb29wLCB1c2VmdWxsIGZvciBkZWJ1Z1xuXHQgKiBAcGFyYW1zIGRlbGF5IGludCBcdFx0dGltZSBpbiBtcywgd2FpbnRpbmcgdGltZSBiZXR3ZWVuIGVhY2ggbG9vcFxuXHQgKiBAcGFyYW1zIHR0bCBpbnR8b3B0aW9uYWxcdHRpbWUgaW4gbXMsIE1heCB0aW1lIHRvIGxvb3AgYmVmb3JlIHN0b3BwaW5nXG5cdCAqXG5cdCAqICovXG5cdHRvb2xzLkxvb3AgPSBmdW5jdGlvbihkZXNjLGRlbGF5LHR0bCkge1xuXG5cdFx0Ly9kZWZhdWx0IHZhbHVlIGZvciB0dGxcblx0XHR0dGwgPSB0eXBlb2YgdHRsICE9PSAndW5kZWZpbmVkJyA/IHR0bCA6IDA7XG5cblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gZGVzYyA7XG5cdFx0dGhpcy5sb29wSWQgPSAwIDtcblx0XHR0aGlzLmxhc3RVcGRhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSA7XG5cdFx0dGhpcy5kZWxheSA9IGRlbGF5IDtcblx0XHR0aGlzLmFjdGl2ZSA9IGZhbHNlIDtcblx0XHR0aGlzLnR0bCA9IHR0bCA7XG5cdH1cblxuXHQvKipcblx0ICogTG9vcCBtZXRob2RzXG5cdCAqXG5cdCAqICovXG5cdHRvb2xzLkxvb3AucHJvdG90eXBlID0ge1xuXHRcdFwic3RhcnRcIiA6IGZ1bmN0aW9uKGxvb3BlZEZ1bmN0aW9uKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZSA9IHRydWUgO1xuXHRcdFx0bG9vcGVkRnVuY3Rpb24uYmluZCh0aGlzKSA7XG5cblx0XHRcdC8vbG9vcGlpaWluZ1xuXHRcdFx0KGZ1bmN0aW9uIGxvb3AoKXtcblx0XHRcdFx0bG9vcGVkRnVuY3Rpb24oKTtcblx0XHRcdFx0dGhpcy5sb29wSWQgPSBzZXRUaW1lb3V0KGxvb3AuYmluZCh0aGlzKSx0aGlzLmRlbGF5KSA7XG5cdFx0XHR9KS5jYWxsKHRoaXMpIDtcblxuXHRcdFx0Ly90dGwgbWFuYWdlXG5cdFx0XHRpZih0aGlzLnR0bCA+IDApIHtcblx0XHRcdFx0dmFyIHNhZmVGdW5jdGlvbiA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0aWYodGhpcy5hY3RpdmUpIHtcblx0XHRcdFx0XHRcdExvZy53YXJuaW5nKCdUVEwgcmVhY2ggZm9yIGxvb3AgJyt0aGlzLmRlc2NyaXB0aW9uKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSA7XG5cdFx0XHRcdHNldFRpbWVvdXQoc2FmZUZ1bmN0aW9uLmJpbmQodGhpcyksdGhpcy50dGwpIDtcblx0XHRcdH1cblx0XHR9LFxuXHRcdFwic3RvcFwiIDogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLmFjdGl2ZSA9IGZhbHNlIDtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLmxvb3BJZCkgO1xuXHRcdH1cblx0fVxufSkob3JnLmRieXplcm8udG9vbHMsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBvcmcuZGJ5emVyby50b29scy5Mb2cgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTMvMDcvMjhcbiAqIEBkZXNjcmlwdGlvbiA6IExvZyBtb2RlbFxuICogXG4gKi9cbnZhciBvcmcgPSBvcmcgfHwge30gO1xub3JnLmRieXplcm8gPSBvcmcuZGJ5emVybyB8fCB7fSA7XG5vcmcuZGJ5emVyby50b29scyA9IG9yZy5kYnl6ZXJvLnRvb2xzIHx8IHt9IDtcblxuKGZ1bmN0aW9uKHRvb2xzLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXG5cdC8vcHJpdmF0ZVxuXHR2YXIgZ2V0RGF0ZSA9IGZ1bmN0aW9uKG1zZykge1xuXHRcdHZhciBkID0gbmV3IERhdGUoKSA7XG5cdFx0cmV0dXJuICcoJytcblx0XHRcdGQuZ2V0RnVsbFllYXIoKSArICcvJyArIFxuXHRcdFx0c3RyX3BhZChkLmdldE1vbnRoKCksMiwnMCcpICsgJy8nICsgXG5cdFx0XHRzdHJfcGFkKGQuZ2V0RGF0ZSgpLDIsJzAnKSArICcgJyArIFxuXHRcdFx0c3RyX3BhZChkLmdldEhvdXJzKCksMiwnMCcpICsgJzonICsgXG5cdFx0XHRzdHJfcGFkKGQuZ2V0TWludXRlcygpLDIsJzAnKSArICc6JyArIFxuXHRcdFx0c3RyX3BhZChkLmdldFNlY29uZHMoKSwyLCcwJykgKyAnKScgO1xuXHR9O1xuXHR2YXIgc3RyX3BhZCA9IGZ1bmN0aW9uIChpbnB1dCwgcGFkX2xlbmd0aCwgcGFkX3N0cmluZywgcGFkX3R5cGUpIHtcblx0XHQvLyBodHRwOi8va2V2aW4udmFuem9ubmV2ZWxkLm5ldFxuXHRcdC8vICsgICBvcmlnaW5hbCBieTogS2V2aW4gdmFuIFpvbm5ldmVsZCAoaHR0cDovL2tldmluLnZhbnpvbm5ldmVsZC5uZXQpXG5cdFx0Ly8gKyBuYW1lc3BhY2VkIGJ5OiBNaWNoYWVsIFdoaXRlIChodHRwOi8vZ2V0c3ByaW5rLmNvbSlcblx0XHQvLyArICAgICAgaW5wdXQgYnk6IE1hcmNvIHZhbiBPb3J0XG5cdFx0Ly8gKyAgIGJ1Z2ZpeGVkIGJ5OiBCcmV0dCBaYW1pciAoaHR0cDovL2JyZXR0LXphbWlyLm1lKVxuXHRcdC8vICogICAgIGV4YW1wbGUgMTogc3RyX3BhZCgnS2V2aW4gdmFuIFpvbm5ldmVsZCcsIDMwLCAnLT0nLCAnU1RSX1BBRF9MRUZUJyk7XG5cdFx0Ly8gKiAgICAgcmV0dXJucyAxOiAnLT0tPS09LT0tPS1LZXZpbiB2YW4gWm9ubmV2ZWxkJ1xuXHRcdC8vICogICAgIGV4YW1wbGUgMjogc3RyX3BhZCgnS2V2aW4gdmFuIFpvbm5ldmVsZCcsIDMwLCAnLScsICdTVFJfUEFEX0JPVEgnKTtcblx0XHQvLyAqICAgICByZXR1cm5zIDI6ICctLS0tLS1LZXZpbiB2YW4gWm9ubmV2ZWxkLS0tLS0nXG5cdFx0dmFyIGhhbGYgPSAnJyxcblx0XHRwYWRfdG9fZ287XG5cblx0XHR2YXIgc3RyX3BhZF9yZXBlYXRlciA9IGZ1bmN0aW9uIChzLCBsZW4pIHtcblx0XHR2YXIgY29sbGVjdCA9ICcnLFxuXHRcdGk7XG5cblx0XHR3aGlsZSAoY29sbGVjdC5sZW5ndGggPCBsZW4pIHtcblx0XHRjb2xsZWN0ICs9IHM7XG5cdFx0fVxuXHRcdGNvbGxlY3QgPSBjb2xsZWN0LnN1YnN0cigwLCBsZW4pO1xuXG5cdFx0cmV0dXJuIGNvbGxlY3Q7XG5cdFx0fTtcblxuXHRcdGlucHV0ICs9ICcnO1xuXHRcdHBhZF9zdHJpbmcgPSBwYWRfc3RyaW5nICE9PSB1bmRlZmluZWQgPyBwYWRfc3RyaW5nIDogJyAnO1xuXG5cdFx0aWYgKHBhZF90eXBlICE9PSAnU1RSX1BBRF9MRUZUJyAmJiBwYWRfdHlwZSAhPT0gJ1NUUl9QQURfUklHSFQnICYmIHBhZF90eXBlICE9PSAnU1RSX1BBRF9CT1RIJykge1xuXHRcdFx0cGFkX3R5cGUgPSAnU1RSX1BBRF9MRUZUJztcblx0XHR9XG5cdFx0aWYgKChwYWRfdG9fZ28gPSBwYWRfbGVuZ3RoIC0gaW5wdXQubGVuZ3RoKSA+IDApIHtcblx0XHRcdGlmIChwYWRfdHlwZSA9PT0gJ1NUUl9QQURfTEVGVCcpIHtcblx0XHRcdFx0aW5wdXQgPSBzdHJfcGFkX3JlcGVhdGVyKHBhZF9zdHJpbmcsIHBhZF90b19nbykgKyBpbnB1dDtcblx0XHRcdH0gZWxzZSBpZiAocGFkX3R5cGUgPT09ICdTVFJfUEFEX1JJR0hUJykge1xuXHRcdFx0XHRpbnB1dCA9IGlucHV0ICsgc3RyX3BhZF9yZXBlYXRlcihwYWRfc3RyaW5nLCBwYWRfdG9fZ28pO1xuXHRcdFx0fSBlbHNlIGlmIChwYWRfdHlwZSA9PT0gJ1NUUl9QQURfQk9USCcpIHtcblx0XHRcdFx0aGFsZiA9IHN0cl9wYWRfcmVwZWF0ZXIocGFkX3N0cmluZywgTWF0aC5jZWlsKHBhZF90b19nbyAvIDIpKTtcblx0XHRcdFx0aW5wdXQgPSBoYWxmICsgaW5wdXQgKyBoYWxmO1xuXHRcdFx0XHRpbnB1dCA9IGlucHV0LnN1YnN0cigwLCBwYWRfbGVuZ3RoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gaW5wdXQ7XG5cdH1cblxuXHQvKipcblx0ICogTG9nIG1ldGhvZHNcblx0ICpcblx0ICogKi9cblx0dG9vbHMuTG9nID0ge1xuXHRcdFwiZ2F5XCIgOiBmdW5jdGlvbihtc2cpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdyYWluYm93OicgKyAnICcgKyBnZXREYXRlKCkgKyAnIDogJyArIG1zZylcblx0XHR9LFxuXHRcdFwic3VjY2Vzc1wiIDogZnVuY3Rpb24obXNnKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnc3VjY2VzczonICsgJyAnICsgZ2V0RGF0ZSgpICsgJyA6ICcgKyBtc2cpXG5cdFx0fSxcblx0XHRcImluZm9cIiA6IGZ1bmN0aW9uKG1zZykge1xuXHRcdFx0Y29uc29sZS5sb2coJ2luZm86JyArICcgICAgJyArIGdldERhdGUoKSArICcgOiAnICsgbXNnKVxuXHRcdH0sXG5cdFx0XCJkZWJ1Z1wiIDogZnVuY3Rpb24obXNnKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZGVidWc6JyArICcgICAnICsgZ2V0RGF0ZSgpICsgJyA6ICcgKyBtc2cpXG5cdFx0fSxcblx0XHRcIndhcm5pbmdcIiA6IGZ1bmN0aW9uKG1zZykge1xuXHRcdFx0Y29uc29sZS53YXJuKCd3YXJuaW5nOicgKyAnICcgKyBnZXREYXRlKCkgKyAnIDogJyArIG1zZylcblx0XHR9LFxuXHRcdFwiZXJyb3JcIiA6IGZ1bmN0aW9uKG1zZykge1xuXHRcdFx0Y29uc29sZS5lcnJvcignZXJyb3I6JyArICcgICAnICsgZ2V0RGF0ZSgpICsgJyA6ICcgKyBtc2cpXG5cdFx0fSxcblx0XHRcImFsZXJ0XCIgOiBmdW5jdGlvbihtc2cpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ2FsZXJ0OicgKyAnICAgJyArIGdldERhdGUoKSArICcgOiAnICsgbXNnKVxuXHRcdH1cblx0fVxufSkob3JnLmRieXplcm8udG9vbHMsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBvcmcuZGJ5emVyby50b29scy5WZWN0b3IgdXRpbCBjbGFzc1xuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA4LzA5XG4gKiBAZGVzY3JpcHRpb24gOiBWZWN0b3IgdG9vbHNcbiAqXG4gKi9cbiBcbnZhciBvcmcgPSBvcmcgfHwge30gO1xub3JnLmRieXplcm8gPSBvcmcuZGJ5emVybyB8fCB7fSA7XG5vcmcuZGJ5emVyby50b29scyA9IG9yZy5kYnl6ZXJvLnRvb2xzIHx8IHt9IDtcblxuKGZ1bmN0aW9uKHRvb2xzLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBWZWN0b3IgY29uc3RydWN0b3Jcblx0ICovXG5cblx0dG9vbHMuVmVjdG9yID0gZnVuY3Rpb24oeCx5KSB7XG5cdFx0dGhpcy54ID0geCA7XG5cdFx0dGhpcy55ID0geSA7XG5cdH1cblxuXHR0b29scy5WZWN0b3IuWmVybyA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBuZXcgdG9vbHMuVmVjdG9yKDAsMCk7XG5cdH1cblxuXHR0b29scy5WZWN0b3IuU3VtID0gZnVuY3Rpb24odmVjdG9yMSx2ZWN0b3IyKSB7XG5cdFx0cmV0dXJuIG5ldyB0b29scy5WZWN0b3IocGFyc2VGbG9hdCh2ZWN0b3IxLngpICsgcGFyc2VGbG9hdCh2ZWN0b3IyLngpLCBwYXJzZUZsb2F0KHZlY3RvcjEueSkgKyBwYXJzZUZsb2F0KHZlY3RvcjIueSkpIDtcblx0fVxuXG5cdHRvb2xzLlZlY3Rvci5TdWIgPSBmdW5jdGlvbih2ZWN0b3IxLHZlY3RvcjIpIHtcblx0XHRyZXR1cm4gbmV3IHRvb2xzLlZlY3RvcihwYXJzZUZsb2F0KHZlY3RvcjEueCkgLSBwYXJzZUZsb2F0KHZlY3RvcjIueCksIHBhcnNlRmxvYXQodmVjdG9yMS55KSAtIHBhcnNlRmxvYXQodmVjdG9yMi55KSkgO1xuXHR9XG5cblx0dG9vbHMuVmVjdG9yLkRvdCA9IGZ1bmN0aW9uKHZlY3RvcjEsdmVjdG9yMikge1xuXHRcdHJldHVybiBuZXcgdG9vbHMuVmVjdG9yKHBhcnNlRmxvYXQodmVjdG9yMS54KSAqIHBhcnNlRmxvYXQodmVjdG9yMi54KSwgcGFyc2VGbG9hdCh2ZWN0b3IxLnkpICogcGFyc2VGbG9hdCh2ZWN0b3IyLnkpKSA7XG5cdH1cblxuXHR0b29scy5WZWN0b3IuU2NhbGFyID0gZnVuY3Rpb24odmVjdG9yMSxzY2FsKSB7XG5cdFx0cmV0dXJuIG5ldyB0b29scy5WZWN0b3IocGFyc2VGbG9hdCh2ZWN0b3IxLngpICogc2NhbCwgcGFyc2VGbG9hdCh2ZWN0b3IxLnkpICogc2NhbCkgO1xuXHR9XG5cblx0dG9vbHMuVmVjdG9yLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbih2ZWN0b3JUb0FkZCkge1xuXHRcdHRoaXMueCA9IHZlY3RvclRvQWRkLnggKyB0aGlzLnggO1xuXHRcdHRoaXMueSA9IHZlY3RvclRvQWRkLnkgKyB0aGlzLnkgO1xuXHR9XG5cblx0dG9vbHMuVmVjdG9yLnByb3RvdHlwZS5zdWIgPSBmdW5jdGlvbih2ZWN0b3JUb0FkZCkge1xuXHRcdHRoaXMueCA9IHZlY3RvclRvQWRkLnggLSB0aGlzLnggO1xuXHRcdHRoaXMueSA9IHZlY3RvclRvQWRkLnkgLSB0aGlzLnkgO1xuXHR9XG5cblx0dG9vbHMuVmVjdG9yLnByb3RvdHlwZS5kb3QgPSBmdW5jdGlvbih2ZWNfKSB7XG5cdFx0dGhpcy54ID0gdmVjXy54ICogdGhpcy54IDsgXG5cdFx0dGhpcy55ID0gdmVjXy55ICogdGhpcy55IDtcblx0fVxuXG5cdHRvb2xzLlZlY3Rvci5wcm90b3R5cGUuc2NhbGFyID0gZnVuY3Rpb24oc2NhbCkge1xuXHRcdHRoaXMueCA9IHNjYWwgKiB0aGlzLnggO1xuXHRcdHRoaXMueSA9IHNjYWwgKiB0aGlzLnkgO1xuXHR9XG5cblx0dG9vbHMuVmVjdG9yLnByb3RvdHlwZS5kdXBsaWNhdGUgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gbmV3IHRvb2xzLlZlY3Rvcih0aGlzLngsdGhpcy55KSA7XG5cdH1cblxuXHR0b29scy5WZWN0b3IucHJvdG90eXBlLmxlbmd0aFNxdWFyZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAodGhpcy54KnRoaXMueCArIHRoaXMueSp0aGlzLnkpIDtcblx0fVxuXG5cdC8vaWYgcG9zc2libGUsIHByZWZlYXRyIGxlbmd0aFNxdWFyZSB3aG8gaXMgZmFzdGVyXG5cdHRvb2xzLlZlY3Rvci5wcm90b3R5cGUubGVuZ3RoID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIE1hdGguc3FydCh0aGlzLngqdGhpcy54ICsgdGhpcy55KnRoaXMueSkgO1xuXHR9XG5cblx0dG9vbHMuVmVjdG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLngrXCJ4XCIrdGhpcy55O1xuXHR9XG59KShvcmcuZGJ5emVyby50b29scywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIG9yZy5kYnl6ZXJvLnRvb2xzLkV2ZW50TWFuYWdlciBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxMy8wOS8wMVxuICogQGRlc2NyaXB0aW9uIDogRXZlbnQgTWFuYWdlclxuICpcbiAqL1xuXG52YXIgb3JnID0gb3JnIHx8IHt9IDtcbm9yZy5kYnl6ZXJvID0gb3JnLmRieXplcm8gfHwge30gO1xub3JnLmRieXplcm8udG9vbHMgPSBvcmcuZGJ5emVyby50b29scyB8fCB7fSA7XG5cbihmdW5jdGlvbih0b29scyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblx0dG9vbHMgPSBvcmcuZGJ5emVyby50b29scyB8fCB7fSA7XG5cblx0dG9vbHMuRXZlbnRNYW5hZ2VyID0ge30gO1xuXHR0b29scy5FdmVudE1hbmFnZXIuZXZlbnRzID0ge30gO1xuXG5cdHRvb2xzLkV2ZW50TWFuYWdlci5yZWdpc3RlciA9IGZ1bmN0aW9uKGV2ZW50TmFtZSxldmVudEZ1bmN0aW9uKSB7XG5cdFx0dG9vbHMuRXZlbnRNYW5hZ2VyLmV2ZW50c1tldmVudE5hbWVdID0gdG9vbHMuRXZlbnRNYW5hZ2VyLmV2ZW50c1tldmVudE5hbWVdIHx8IHt9IDtcblx0XHRpZih0b29scy5FdmVudE1hbmFnZXIuZXZlbnRzW2V2ZW50TmFtZV0ubGlzdGVuZXJzID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHRvb2xzLkV2ZW50TWFuYWdlci5ldmVudHNbZXZlbnROYW1lXS5saXN0ZW5lcnMgPSBbXSA7XG5cdFx0fVxuXHRcdHRvb2xzLkV2ZW50TWFuYWdlci5ldmVudHNbZXZlbnROYW1lXS5saXN0ZW5lcnMucHVzaChldmVudEZ1bmN0aW9uKSA7XG5cdH1cblxuXHR0b29scy5FdmVudE1hbmFnZXIudW5yZWdpc3RlciA9IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuXHRcdGRlbGV0ZSB0b29scy5FdmVudE1hbmFnZXIuZXZlbnRzW2V2ZW50TmFtZV0gO1xuXHR9XG5cblx0dG9vbHMuRXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXJBbGwgPSBmdW5jdGlvbigpIHtcblx0XHR0b29scy5FdmVudE1hbmFnZXIuZXZlbnRzID0ge30gO1xuXHR9XG5cblx0dG9vbHMuRXZlbnRNYW5hZ2VyLmZpcmUgPSBmdW5jdGlvbihldmVudE5hbWUsZSkge1xuXHRcdGlmKHRvb2xzLkV2ZW50TWFuYWdlci5ldmVudHNbZXZlbnROYW1lXSA9PSB1bmRlZmluZWQpIHtcblx0XHRcdC8vb3JnLmRieXplcm8udG9vbHMuTG9nLmVycm9yKCdldmVudCAnICsgZXZlbnROYW1lICsgJyBkbyBub3QgZXhpc3RzLicpIDtcblx0XHRcdHJldHVybiA7XG5cdFx0fVxuXHRcdHZhciBsaXN0TGlzdGVuZXIgPSB0b29scy5FdmVudE1hbmFnZXIuZXZlbnRzW2V2ZW50TmFtZV0ubGlzdGVuZXJzIDtcblx0XHRmb3IodmFyIGk9MDtpPGxpc3RMaXN0ZW5lci5sZW5ndGg7aSsrKSB7XG5cdFx0aWYobGlzdExpc3RlbmVyW2ldID09PSB1bmRlZmluZWQpIHtcblx0XHRvcmcuZGJ5emVyby50b29scy5Mb2cuZXJyb3IoJ2Z1bmN0aW9uIGFkZGVkIHRvIGxpc3RlbmVyICcrIGV2ZW50TmFtZSArICcgaXMgdW5kZWZpbmVkJykgO1xuXHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRcdGxpc3RMaXN0ZW5lcltpXShlKSA7XG5cdFx0fVxuXHR9XG59KShvcmcuZGJ5emVyby50b29scywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIG9yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlciBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxMy8xMC8yOVxuICogQGRlc2NyaXB0aW9uIDogSGFuZGxlciBrZXlib2FyZCBldmVudFxuICogXG4gKi9cblxudmFyIG9yZyA9IG9yZyB8fCB7fSA7XG5vcmcuZGJ5emVybyA9IG9yZy5kYnl6ZXJvIHx8IHt9IDtcbm9yZy5kYnl6ZXJvLnRvb2xzID0gb3JnLmRieXplcm8udG9vbHMgfHwge30gO1xuXG4oZnVuY3Rpb24odG9vbHMsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0dmFyIEV2ZW50TWFuYWdlciA9IHRvb2xzLkV2ZW50TWFuYWdlcjtcblx0LyoqXG5cdCAqIEtleWJvYXJkIGNvbnN0cnVjdG9yXG5cdCAqXG5cdCAqICovXG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlciA9IHt9O1xuXG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5hZGRNYW5hZ2VkS2V5ID0gZnVuY3Rpb24oa2V5KSB7XG5cdFx0dG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLm1hbmFnZWRLZXlzW2tleV0gPSB0cnVlO1xuXHR9XG5cblx0dG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLnJlbW92ZU1hbmFnZWRLZXkgPSBmdW5jdGlvbihrZXkpIHtcblx0XHRkZWxldGUgdG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLm1hbmFnZWRLZXlzW2tleV07XG5cdH1cblxuXHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UHJlc3NlZCA9IGZ1bmN0aW9uKGUpIHtcblx0XHR2YXIgZXZ0b2JqID0gd2luZG93LmV2ZW50PyBldmVudCA6IGU7XG5cdFx0dmFyIGtleSA9IGV2dG9iai5rZXlDb2RlO1xuXHRcdGlmKGtleSBpbiB0b29scy5LZXlib2FyZENvbnRyb2xsZXIubWFuYWdlZEtleXMpe1xuXHRcdFx0aWYodG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVN0YXR1c1trZXldID09PSB0cnVlKSByZXR1cm47XG5cdFx0XHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5U3RhdHVzW2tleV0gPSB0cnVlO1xuXHRcdFx0Ly9jb25zb2xlLmxvZygncHJlc3NlZCAnK2tleSk7XG5cdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkLlwiK2tleSk7XG5cdFx0fVxuXHR9XG5cblx0dG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVJlbGVhc2VkID0gZnVuY3Rpb24oZSkge1xuXHRcdHZhciBldnRvYmogPSB3aW5kb3cuZXZlbnQ/IGV2ZW50IDogZTtcblx0XHR2YXIga2V5ID0gZXZ0b2JqLmtleUNvZGU7XG5cdFx0aWYoa2V5IGluIHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5tYW5hZ2VkS2V5cyl7XG5cdFx0XHRpZih0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5U3RhdHVzW2tleV0gPT09IGZhbHNlKSByZXR1cm47XG5cdFx0XHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5U3RhdHVzW2tleV0gPSBmYWxzZTtcblx0XHRcdC8vY29uc29sZS5sb2coJ3JlbGVhc2VkICcra2V5KTtcblx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVJlbGVhc2VkLlwiK2tleSk7XG5cdFx0fVxuXHR9XG5cblx0dG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVN0YXR1cyA9IHt9O1xuXHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIubWFuYWdlZEtleXMgPSB7fTtcblx0XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlzID0ge307XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlzLkVOVEVSID0gMTM7XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlzLlNQQUNFID0gMzI7XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlzLkFSUk9XX0xFRlQgPSAzNztcblx0dG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfUklHSFQgPSAzOTtcblx0dG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfRE9XTiA9IDQwO1xuXHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5cy5BUlJPV19VUCA9IDM4O1xuXHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5cy5uMSA9IDQ5O1xuXHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5cy5uMiA9IDUwO1xuXHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5cy5uMyA9IDUxO1xuXHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5cy5uNCA9IDUyO1xuXHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5cy5uNSA9IDUzO1xuXHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5cy5YID0gODg7XG5cblx0ZG9jdW1lbnQub25rZXlkb3duICA9IHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkO1xuXHRkb2N1bWVudC5vbmtleXVwICAgID0gdG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVJlbGVhc2VkO1xuXG4gICBcbn0pKG9yZy5kYnl6ZXJvLnRvb2xzLCBkb2N1bWVudCk7IiwiLyoqXG4gKlxuICogb3JnLmRieXplcm8uZGVpbW9zLkNvbmZpZyBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxMy8wOC8wOVxuICogQGRlc2NyaXB0aW9uIDogQ29uZmlnIG9mIHRoZSBhcHBsaWNhdGlvblxuICpcbiAqICovXG5cbnZhciBvcmcgPSBvcmcgfHwge30gO1xub3JnLmRieXplcm8gPSBvcmcuZGJ5emVybyB8fCB7fSA7XG5vcmcuZGJ5emVyby5kZWltb3MgPSBvcmcuZGJ5emVyby5kZWltb3MgfHwge30gO1xuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXHRkZWltb3MuQ29uZmlnID0ge307XG5cdGRlaW1vcy5Db25maWcuRlBTID0gNjA7XG5cdGRlaW1vcy5Db25maWcubW9kZSA9IFwiZGVidWdcIixcblx0ZGVpbW9zLkNvbmZpZy5tZXNzYWdlTGV2ZWwgPSBcInZlcmJvc2VcIixcblx0ZGVpbW9zLkNvbmZpZy5GUFMgPSA2MDtcblx0ZGVpbW9zLkNvbmZpZy5HQU1FX1NQRUVEID0gMzM7XG5cdGRlaW1vcy5Db25maWcuU1FVQVJFX0FVVEhPUklUWSA9IDEwMCoxMDA7XG5cdGRlaW1vcy5Db25maWcuREVMVEFfU0VSVkVSX1NZTkMgPSA1MDAwO1xuXHRkZWltb3MuQ29uZmlnLnNob3dPd25NaXJyb3IgPSBmYWxzZTtcblxuXHQvKioqKioqXG5cdCAqIFVJXG5cdCAqKioqKi9cblx0ZGVpbW9zLkNvbmZpZy51aSA9IHt9O1xuXG5cdGRlaW1vcy5Db25maWcudWkuY2hhdERvbUlkID0gJ29yZy5kYnl6ZXJvLmRlaW1vcy5tZXNzYWdlQXJlYSc7XG5cdGRlaW1vcy5Db25maWcudWkuZGlzY29ubmVjdERvbUlkID0gJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAuZGlzY29ubmVjdCc7XG5cblx0ZGVpbW9zLkNvbmZpZy51aS5pbmRpY2F0aW9uID0ge307XG5cdGRlaW1vcy5Db25maWcudWkuaW5kaWNhdGlvbi5sYWcgPSAnb3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5pbmRpY2F0b3JMYWcnO1xuXHRkZWltb3MuQ29uZmlnLnVpLmluZGljYXRpb24uZnBzID0gJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAuaW5kaWNhdG9yRnBzJztcblx0ZGVpbW9zLkNvbmZpZy51aS5pbmRpY2F0aW9uLmNvbm5lY3Rpb25TdGF0dXMgPSAnb3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5pbmRpY2F0b3JDb25uZWN0ZWQnO1xuXHRkZWltb3MuQ29uZmlnLnVpLmluZGljYXRpb24uc2VydmVyU3RhdHVzID0gJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAuaW5kaWNhdG9yU2VydmVyJztcblxuXHRkZWltb3MuQ29uZmlnLnVpLmxvZ2luID0ge307XG5cdGRlaW1vcy5Db25maWcudWkubG9naW4uZm9ybURvbUlkID0gJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAubG9naW5Gb3JtJztcblx0ZGVpbW9zLkNvbmZpZy51aS5sb2dpbi5zZWN0aW9uRG9tSWQgPSAnb3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5zZWN0aW9uTG9naW4nO1xuXHRkZWltb3MuQ29uZmlnLnVpLmxvZ2luLmlucHV0TG9naW5Eb21JZCA9ICdvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLmxvZ2luSW5wdXQnO1xuXHRkZWltb3MuQ29uZmlnLnVpLmxvZ2luLmlucHV0UGFzc3dvcmREb21JZCA9ICdvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLnBhc3N3b3JkSW5wdXQnO1xuXG5cdGRlaW1vcy5Db25maWcudWkuY2hvb3NlQXZhdGFyID0ge307XG5cdGRlaW1vcy5Db25maWcudWkuY2hvb3NlQXZhdGFyLnNlY3Rpb25Eb21JZCA9ICdvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLnNlY3Rpb25DaG9vc2VBdmF0YXInO1xuXHRkZWltb3MuQ29uZmlnLnVpLmNob29zZUF2YXRhci5mb3JtRG9tSWQgPSAnb3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5mb3JtQ2hvb3NlQXZhdGFyJztcblx0ZGVpbW9zLkNvbmZpZy51aS5jaG9vc2VBdmF0YXIuYXZhdGFyTGlzdERvbUlkID0gJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAuYXZhdGFyTGlzdCc7XG5cdGRlaW1vcy5Db25maWcuem9uZSA9IHt9O1xuXG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBvcmcuZGJ5emVyby5kZWltb3MuRW5naW5lIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA4LzA0XG4gKiBAZGVzY3JpcHRpb24gOiBFbmdpbmUgY2xhc3MgbWFuYWdlIHRoZSBhcHBsaWNhdGlvblxuICpcbiAqKi9cblxuKGZ1bmN0aW9uKGRlaW1vcyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblxuXHQvKipcblx0ICogb3JnLmRieXplcm8uZGVpbW9zLkVuZ2luZSBpbml0aWFsaXplclxuXHQgKiBcblx0ICogQHBhcmFtIHN0cmluZyB3c1VybCBVUkwgb2Ygd2Vic29ja2V0IHNlcnZlclxuXHQgKiBAcGFyYW0gc3RyaW5nIHdzUG9ydCBwb3J0IG9mIHdlYnNvY2tldCBzZXJ2ZXJcblx0ICogQHBhcmFtIEVuZ2luZU1vZGUgTW9kZSBvZiB0aGUgY2xpZW50LCBjYW4gYmUgRW5naW5lTW9kZS5ERUJVRyB0byBzaG93IGxvZ3Ncblx0ICpcblx0ICogKi9cblxuXHR2YXIgS2V5Ym9hcmRDb250cm9sbGVyID0gb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyO1xuXHR2YXIgRXZlbnRNYW5hZ2VyID0gb3JnLmRieXplcm8udG9vbHMuRXZlbnRNYW5hZ2VyO1xuXG5cdC8vdXNlZCB0byB0cmFuc2xhdGlvblxuXHR2YXIgX3QgPSBudWxsO1xuXG5cdGRlaW1vcy5FbmdpbmUgPSB7XG5cdFx0cnVubmluZyA6IGZhbHNlLFxuXHRcdHN0YXJ0IDogZnVuY3Rpb24gKGNvbmZpZyl7XG5cdFx0XHRkZWltb3MuRW5naW5lLnJ1bm5pbmcgPSBmYWxzZTtcblxuXHRcdFx0Ly9tYWtpbmcgVUlcblx0XHRcdGRlaW1vcy5FbmdpbmUudWkgPSBuZXcgZGVpbW9zLnJlbmRlci5VSSgpIDtcblx0XHRcdGRlaW1vcy5FbmdpbmUubGFzdFVwZGF0ZSA9IG51bGw7XG5cdFx0XHRkZWltb3MuRW5naW5lLmxhc3RTeW5jID0gbnVsbDtcblx0XHRcdGRlaW1vcy5FbmdpbmUubmVlZFN5bmMgPSBmYWxzZTtcblx0XHRcdGRlaW1vcy5FbmdpbmUuaXRlbVRlbXBsYXRlcyA9IHt9OyBcblx0XHRcdGRlaW1vcy5FbmdpbmUucGFzdEZQUyA9IFtdO1xuXG5cdFx0XHQvL3N0b2NraW5nIGFzc2V0IGFjY2Vzc1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hc3NldFVSTCA9IGNvbmZpZy5zZXJ2ZXJBc3NldFVSTDtcblxuXHRcdFx0ZGVpbW9zLkVuZ2luZS5fdCA9IGRlaW1vcy5uZXR3b3JrLk1lc3NhZ2UuQ09ERVtkZWltb3MuQ29uZmlnLm1lc3NhZ2VMZXZlbF07XG5cblx0XHRcdC8vc2V0IHJ1bmxldmVsXG5cdFx0XHRkZWltb3MuRW5naW5lLm1vZGUgPSAoIFxuXHRcdFx0XHRkZWltb3MuQ29uZmlnLm1vZGUgPT0gXCJkZWJ1Z1wiID8gXG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUuTW9kZS5ERUJVRyBcblx0XHRcdFx0OiBkZWltb3MuRW5naW5lLk1vZGUuUFJPRCBcblx0XHRcdCkgO1xuXG5cdFx0XHQvL21ha2luZyBuZXR3b3JrIG1hbmFnZXJcblx0XHRcdGRlaW1vcy5FbmdpbmUubmV0d29ya01hbmFnZXIgPSBuZXcgZGVpbW9zLm5ldHdvcmsuTWFuYWdlcigpO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5uZXR3b3JrTWFuYWdlci5pbml0KCk7XG5cblx0XHRcdC8vbWFraW5nIG1haW4gbG9vcFxuXHRcdFx0ZGVpbW9zLkVuZ2luZS5sb29wID0gbmV3IG9yZy5kYnl6ZXJvLnRvb2xzLkxvb3AoJ21haW5fbG9vcCcscGFyc2VJbnQoMTAwMC9kZWltb3MuQ29uZmlnLkZQUykpIDtcblxuXG5cdFx0XHQvL3NldHRpbmcgd2Vic29ja2V0IHNlcnZlclxuXHRcdFx0ZGVpbW9zLkVuZ2luZS53c1VybCA9IGNvbmZpZy5zZXJ2ZXJVUkw7XG5cdFx0XHRkZWltb3MuRW5naW5lLndzUG9ydCA9IGNvbmZpZy5zZXJ2ZXJQb3J0IDtcblx0XHRcdGRlaW1vcy5FbmdpbmUud3NDbGllbnQgPSBuZXcgZGVpbW9zLm5ldHdvcmsuV2Vic29ja2V0Q2xpZW50KGRlaW1vcy5FbmdpbmUud3NVcmwsZGVpbW9zLkVuZ2luZS53c1BvcnQsZGVpbW9zLkVuZ2luZS5tb2RlKTtcblxuXHRcdFx0Ly9tYWtpbmcgc2NlbmVcblx0XHRcdGRlaW1vcy5FbmdpbmUuc2NlbmUgPSBuZXcgZGVpbW9zLnJlbmRlci5TY2VuZSgpO1xuXG5cdFx0XHRiaW5kRW5naW5lRXZlbnQoKTtcblxuXHRcdFx0Ly9sb2dpbiBieSB0b2tlblxuXHRcdFx0ZGVpbW9zLkVuZ2luZS53c0NsaWVudC5jb25uZWN0KCkgO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS53c0NsaWVudC5zZXNzaW9uX2lkID0gY29uZmlnLnNlc3Npb25JZDtcblx0XHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0XHR2YXIgbWVzc2FnZSA9IHt9O1xuXHRcdFx0bWVzc2FnZVtfdFsnQUNUSU9OJ11dID0gX3RbJ0FVVEhfQllfVE9LRU4nXTtcblx0XHRcdG1lc3NhZ2VbX3RbJ01FU1NBR0UnXV0gPSB7fTtcblx0XHRcdGRlaW1vcy5FbmdpbmUubmV0d29ya01hbmFnZXIuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG5cdFx0fSxcblxuXHRcdHN0b3A6IGZ1bmN0aW9uICgpe1xuXHRcdFx0Ly9kbyBub3RoaW5nIGlmIGFscmVhZHkgc3RvcHBlZFxuXHRcdFx0aWYoZGVpbW9zLkVuZ2luZS5ydW5uaW5nID09PSBmYWxzZSkgcmV0dXJuO1xuXG5cdFx0XHRkZWltb3MuRW5naW5lLnJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdHVuYmluZEdhbWVFdmVudEtleSgpIDtcblx0XHRcdGRlaW1vcy5FbmdpbmUubG9vcC5zdG9wKCkgO1xuXG5cdFx0XHRpZihkZWltb3MuRW5naW5lLmF2YXRhcilcblx0XHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIuY2xlYW5Eb20oKTtcblxuXHRcdFx0aWYoZGVpbW9zLkVuZ2luZS5zY2VuZSlcblx0XHRcdFx0ZGVpbW9zLkVuZ2luZS5zY2VuZS5kZXN0cm95KCk7XG5cblx0XHRcdGlmKGRlaW1vcy5FbmdpbmUubmV0d29ya01hbmFnZXIpXG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUubmV0d29ya01hbmFnZXIuZGVzdHJveSgpO1xuXG5cdFx0XHRpZihkZWltb3MuRW5naW5lLnVpKVxuXHRcdFx0XHRkZWltb3MuRW5naW5lLnVpLmxvZ2dvdXQoKSA7XG5cblx0XHRcdGlmKGRlaW1vcy5FbmdpbmUuem9uZSlcblx0XHRcdFx0ZGVpbW9zLkVuZ2luZS56b25lLmRlc3Ryb3koKSA7XG5cblx0XHRcdGlmKGRlaW1vcy5FbmdpbmUud3NDbGllbnQpXG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUud3NDbGllbnQuY2xvc2UoKTtcblxuXHRcdFx0ZGVsZXRlIGRlaW1vcy5FbmdpbmUuYXZhdGFyO1xuXHRcdFx0ZGVsZXRlIGRlaW1vcy5FbmdpbmUuem9uZTtcblx0XHRcdGRlbGV0ZSBkZWltb3MuRW5naW5lLnVpO1xuXHRcdFx0ZGVsZXRlIGRlaW1vcy5FbmdpbmUucGFzdEZQUztcblx0XHRcdGRlbGV0ZSBkZWltb3MuRW5naW5lLml0ZW1UZW1wbGF0ZXM7IFxuXHRcdFx0ZGVsZXRlIGRlaW1vcy5FbmdpbmUubmVlZFN5bmM7XG5cdFx0XHRkZWxldGUgZGVpbW9zLkVuZ2luZS5sYXN0U3luYztcblx0XHRcdGRlbGV0ZSBkZWltb3MuRW5naW5lLmxhc3RVcGRhdGU7XG5cdFx0XHRkZWxldGUgZGVpbW9zLkVuZ2luZS5hc3NldFVSTDtcblx0XHRcdGRlbGV0ZSBkZWltb3MuRW5naW5lLl90O1xuXHRcdFx0ZGVsZXRlIGRlaW1vcy5FbmdpbmUubW9kZTtcblx0XHRcdGRlbGV0ZSBkZWltb3MuRW5naW5lLm5ldHdvcmtNYW5hZ2VyO1xuXHRcdFx0ZGVsZXRlIGRlaW1vcy5FbmdpbmUud3NDbGllbnQ7XG5cdFx0XHRkZWxldGUgZGVpbW9zLkVuZ2luZS5zY2VuZTtcblx0XHRcdGRlbGV0ZSBkZWltb3MuRW5naW5lLndzUG9ydDtcblx0XHRcdGRlbGV0ZSBkZWltb3MuRW5naW5lLndzVXJsO1xuXHRcdFx0ZGVsZXRlIGRlaW1vcy5FbmdpbmUubG9vcDtcblx0XHR9LFxuXG5cdFx0a2V5SGFuZGxlclVwOiBmdW5jdGlvbihlKXtcblx0XHRcdGV2dG9iaiA9IHdpbmRvdy5ldmVudD8gZXZlbnQgOiBlXG5cdFx0XHRrZXlDb2RlID0gZXZ0b2JqLmtleUNvZGUgO1xuXHRcdH0sXG5cblx0XHRrZXlIYW5kbGVyRG93bjogZnVuY3Rpb24oZSl7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIE1BSU4gR0FNRSBMT09QXG5cdFx0ICovXG5cdFx0dXBkYXRlOiBmdW5jdGlvbigpe1xuXHRcdFx0aWYoZGVpbW9zLkVuZ2luZS5ydW5uaW5nID09PSBmYWxzZSkgcmV0dXJuO1xuXG5cdFx0XHQvL3RpbWUgdGhpbmdzXG5cdFx0XHRpZihkZWltb3MuRW5naW5lLmxhc3RVcGRhdGUgPT09IG51bGwpXG5cdFx0XHR7XG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUubGFzdFVwZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdFx0dmFyIGR0ID0gbm93IC0gZGVpbW9zLkVuZ2luZS5sYXN0VXBkYXRlO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5zY2VuZS51cGRhdGUoZHQsbm93KSA7XG5cdFx0XHRkZWltb3MuRW5naW5lLmxhc3RVcGRhdGUgKz0gZHQ7XG5cblx0XHRcdC8vc3luYyB0aGluZ3Ncblx0XHRcdGlmKGRlaW1vcy5FbmdpbmUubGFzdFN5bmMgPT09IG51bGwpXG5cdFx0XHR7XG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUubGFzdFN5bmMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHRcdH1cblx0XHRcdGlmKGRlaW1vcy5FbmdpbmUubGFzdFN5bmMgKyBkZWltb3MuQ29uZmlnLkRFTFRBX1NFUlZFUl9TWU5DIDwgbm93KVxuXHRcdFx0e1xuXHRcdFx0XHRpZihkZWltb3MuRW5naW5lLmF2YXRhciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zZW5kU3luY1wiKTtcblx0XHRcdFx0XHRkZWltb3MuRW5naW5lLmxhc3RTeW5jID0gbm93O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGluaXRHYW1lQXJlYTogZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblx0XHRcdGRlaW1vcy5FbmdpbmUuem9uZSA9IG5ldyBkZWltb3MuZWxlbWVudC5ab25lKFxuXHRcdFx0XHRlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfR0FNRV9BUkVBX05BTUVdLFxuXHRcdFx0XHRlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfR0FNRV9BUkVBX0RPTV9JRF0sXG5cdFx0XHRcdGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9HQU1FX0FSRUFfV0lEVEhdLFxuXHRcdFx0XHRlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfR0FNRV9BUkVBX0hFSUdIVF0sXG5cdFx0XHRcdGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9HQU1FX0FSRUFfQkxPQ0tTXVxuXHRcdFx0KTtcblx0XHR9LFxuXG5cdFx0c3RhcnRHYW1lOiBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdFx0dmFyIHNraW5cdFx0XHRcdFx0PSBlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuTUVTU0FHRV9TS0lOXTtcblx0XHRcdHZhciBpZFx0XHRcdFx0XHRcdD0gZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0NIQVJdW190Lk1FU1NBR0VfRUxFTUVOVF9JRF07XG5cdFx0XHR2YXIgbmFtZVx0XHRcdFx0XHQ9IGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9DSEFSXVtfdC5OQU1FXTtcblx0XHRcdHZhciBzaXplXHRcdFx0XHRcdD0gZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0NIQVJdW190Lk1FU1NBR0VfU0laRV07XG5cdFx0XHR2YXIgZGVsdGFzaG93XHRcdFx0XHQ9IGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9DSEFSXVtfdC5NRVNTQUdFX0RFTFRBU0hPV107XG5cdFx0XHR2YXIgcG9zaXRpb25cdFx0XHRcdD0gZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0NIQVJdW190Lk1FU1NBR0VfUE9TSVRJT05dO1xuXHRcdFx0dmFyIG1vdmVfc3BlZWRcdFx0XHRcdD0gZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0NIQVJdW190Lk1FU1NBR0VfTU9WRV9TUEVFRF07XG5cdFx0XHR2YXIganVtcF9zcGVlZFx0XHRcdFx0PSBlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuTUVTU0FHRV9KVU1QX1NQRUVEXTtcblx0XHRcdHZhciBpdGVtX3Nsb3RfaGVhZFx0XHRcdD0gZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0NIQVJdW190LklURU1fU0xPVF9IRUFEXTtcblx0XHRcdHZhciBpdGVtX3Nsb3RfZm9vdFx0XHRcdD0gZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0NIQVJdW190LklURU1fU0xPVF9GT09UXTtcblx0XHRcdHZhciBpdGVtX3Nsb3RfY2hlc3RcdFx0XHQ9IGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9DSEFSXVtfdC5JVEVNX1NMT1RfQ0hFU1RdO1xuXHRcdFx0dmFyIGl0ZW1fc2xvdF9sZWZ0X2hhbmRcdFx0PSBlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuSVRFTV9TTE9UX0xFRlRfSEFORF07XG5cdFx0XHR2YXIgaXRlbV9zbG90X3JpZ2h0X2hhbmRcdD0gZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0NIQVJdW190LklURU1fU0xPVF9SSUdIVF9IQU5EXTtcblx0XHRcdHZhciBvcmllbnRlZFx0XHRcdFx0PSBlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuTUVTU0FHRV9BTklNQVRJT05dW190Lk1FU1NBR0VfRElSRUNUSU9OXTtcblx0XHRcdC8vbWFrZSBhdmF0YXJcblx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyID0gbmV3IGRlaW1vcy5lbGVtZW50LkF2YXRhcihuYW1lLFxuXHRcdFx0XHRuZXcgb3JnLmRieXplcm8udG9vbHMuVmVjdG9yKFxuXHRcdFx0XHRcdHBhcnNlSW50KHBvc2l0aW9uLngpLFxuXHRcdFx0XHRcdHBhcnNlSW50KHBvc2l0aW9uLnkpXG5cdFx0XHRcdCksXG5cdFx0XHRcdC8vc2l6ZSBmcm9tIHNlcnZlciBiZWNhdXNlIGl0J3MgbmVlZGVkIGZvciBjb2xsaXNpb25zXG5cdFx0XHRcdG5ldyBvcmcuZGJ5emVyby50b29scy5WZWN0b3IoXG5cdFx0XHRcdFx0cGFyc2VJbnQoc2l6ZS54KSxcblx0XHRcdFx0XHRwYXJzZUludChzaXplLnkpXG5cdFx0XHRcdCksXG5cdFx0XHRcdGlkLFxuXHRcdFx0XHRkZWx0YXNob3csXG5cdFx0XHRcdGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9DSEFSXVtfdC5NRVNTQUdFX01BU1NdXG5cdFx0XHQpO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIubWF4SFAgPSBlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuTUVTU0FHRV9IUF07XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5IUCA9IGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9DSEFSXVtfdC5NRVNTQUdFX0NVUlJFTlRfSFBdO1xuXG5cdFx0XHRpZihwYXJzZUludChpdGVtX3Nsb3RfaGVhZCkgPiAwKVxuXHRcdFx0e1xuXHRcdFx0XHRkZWltb3MuRW5naW5lLnN0b3JlSXRlbUZyb21TZXJ2ZXIoZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0lURU1TXVtfdC5JVEVNX1NMT1RfSEVBRF0pO1xuXHRcdFx0fVxuXHRcdFx0aWYocGFyc2VJbnQoaXRlbV9zbG90X2Zvb3QpID4gMClcblx0XHRcdHtcblx0XHRcdFx0ZGVpbW9zLkVuZ2luZS5zdG9yZUl0ZW1Gcm9tU2VydmVyKGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9JVEVNU11bX3QuSVRFTV9TTE9UX0ZPT1RdKTtcblx0XHRcdH1cblx0XHRcdGlmKHBhcnNlSW50KGl0ZW1fc2xvdF9jaGVzdCkgPiAwKVxuXHRcdFx0e1xuXHRcdFx0XHRkZWltb3MuRW5naW5lLnN0b3JlSXRlbUZyb21TZXJ2ZXIoZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0lURU1TXVtfdC5JVEVNX1NMT1RfQ0hFU1RdKTtcblx0XHRcdH1cblx0XHRcdGlmKHBhcnNlSW50KGl0ZW1fc2xvdF9sZWZ0X2hhbmQpID4gMClcblx0XHRcdHtcblx0XHRcdFx0ZGVpbW9zLkVuZ2luZS5zdG9yZUl0ZW1Gcm9tU2VydmVyKGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9JVEVNU11bX3QuSVRFTV9TTE9UX0xFRlRfSEFORF0pO1xuXHRcdFx0fVxuXHRcdFx0aWYocGFyc2VJbnQoaXRlbV9zbG90X3JpZ2h0X2hhbmQpID4gMClcblx0XHRcdHtcblx0XHRcdFx0ZGVpbW9zLkVuZ2luZS5zdG9yZUl0ZW1Gcm9tU2VydmVyKGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9JVEVNU11bX3QuSVRFTV9TTE9UX1JJR0hUX0hBTkRdKTtcblx0XHRcdH1cblxuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIubW92ZV9zcGVlZCA9IG1vdmVfc3BlZWQ7XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5qdW1wX3NwZWVkID0ganVtcF9zcGVlZDtcblx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLml0ZW1fc2xvdF9oZWFkID0gaXRlbV9zbG90X2hlYWQ7XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5pdGVtX3Nsb3RfZm9vdCA9IGl0ZW1fc2xvdF9mb290O1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIuaXRlbV9zbG90X2NoZXN0ID0gaXRlbV9zbG90X2NoZXN0O1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIuaXRlbV9zbG90X2xlZnRfaGFuZCA9IGl0ZW1fc2xvdF9sZWZ0X2hhbmQ7XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5pdGVtX3Nsb3RfcmlnaHRfaGFuZCA9IGl0ZW1fc2xvdF9yaWdodF9oYW5kO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIub3JpZW50ZWQgPSBvcmllbnRlZDtcblx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLnNraW4gPSBza2luO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIuaW5pdCgpO1xuXHRcdFx0YmluZEdhbWVFdmVudEtleSgpO1xuXG5cdFx0XHQvL3N0YXJ0aW5nXG5cdFx0XHRkZWltb3MuRW5naW5lLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5zY2VuZS5kYXRhVG9QYXJzZSA9IGVbX3QuTUVTU0FHRV1bX3QuQUNUSU9OX1NZTkNdO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5sb29wLnN0YXJ0KGRlaW1vcy5FbmdpbmUudXBkYXRlLmJpbmQoZGVpbW9zLkVuZ2luZSkpO1xuXHRcdH0sXG5cblx0XHRnZXRJdGVtVGVtcGxhdGUgOiBmdW5jdGlvbihpdGVtSWQsIGNhbGxiYWNrKSB7XG5cdFx0XHQvL2lmIG5vdCB5ZXQgZ2V0LCB3ZSBhc2sgZm9yIGl0LCBlbHNlLCBsb2FkIHRoZSBjYWxsYmFja1xuXHRcdFx0aWYoZGVpbW9zLkVuZ2luZS5pdGVtVGVtcGxhdGVzW2l0ZW1JZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRkZWltb3MuRW5naW5lLm5ldHdvcmtNYW5hZ2VyLmFza0l0ZW1UZW1wbGF0ZShpdGVtSWQpO1xuXHRcdFx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5FbmdpbmUubmV3SXRlbVN0b3JlZC4nK2l0ZW1JZCxmdW5jdGlvbihpdGVtKSB7XG5cdFx0XHRcdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5FbmdpbmUubmV3SXRlbVN0b3JlZC4nK2l0ZW1JZCk7XG5cdFx0XHRcdFx0Y2FsbGJhY2soaXRlbSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2FsbGJhY2soZGVpbW9zLkVuZ2luZS5pdGVtVGVtcGxhdGVzW2l0ZW1JZF0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRvbkF2YXRhclNlbGVjdGVkIDogZnVuY3Rpb24oYXZhdGFyKSB7XG5cdFx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdFx0dmFyIGUgPSB7fSA7XG5cdFx0XHRlW190LkFDVElPTl0gPSBfdC5BQ1RJT05fQ0hPT1NFX0NIQVI7XG5cdFx0XHRlW190Lk1FU1NBR0VdID0ge307XG5cdFx0XHRlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl0gPSBhdmF0YXI7XG5cdFx0XHRkZWltb3MuRW5naW5lLm5ldHdvcmtNYW5hZ2VyLnNlbmRNZXNzYWdlKGUpO1xuXHRcdH0sXG5cblx0XHQvL2F2YXRhciBpcyBzZWxlY3RlZCBhbmQgY29uZmlybWVkIGJ5IHRoZSBiYWNrZW5kXG5cdFx0YXZhdGFyU2VsZWN0aW9uQ29uZmlybWVkOiBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdFx0aWYoISFlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuTUVTU0FHRV9FTEVNRU5UX0lEXSkge1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWltb3MuQ29uZmlnLnVpLmNob29zZUF2YXRhci5zZWN0aW9uRG9tSWQpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgO1xuXHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5lbmdpbmUuZ2FtZVN0YXJ0ZWRcIixlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmNvbnNvbGUud3JpdGVcIix7XCJkZXRhaWxcIjp7XCJtZXNzYWdlXCI6XCJBdmF0YXIgaGFzIG5vIGlkIFwifX0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vcHJpdmF0ZSBmdW5jdGlvblxuXHR2YXIgdW5iaW5kRW5naW5lRXZlbnQgPSBmdW5jdGlvbigpe1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MuZW5naW5lLmdhbWVTdGFydGVkJyk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmNvbm5lY3RlZCcpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5kaXNjb25uZWN0ZWQnKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsubG9nZ291dCcpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5sb2dnZWQnKSA7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy51aS5hdmF0YXJTZWxlY3RlZCcpIDtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuYXZhdGFyU2VsZWN0aW9uQ29uZmlybWVkJykgO1xuXHR9XG5cblxuXHR2YXIgYmluZEVuZ2luZUV2ZW50ID0gZnVuY3Rpb24oKXtcblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmNvbm5lY3RlZCcsZnVuY3Rpb24oKSB7XG5cdFx0XHQvL2ZvciBub3cgd2UgcmVzdGFydCBsb29wIHdoZW4gaXQncyBuZWVkZWRcblx0XHRcdC8vIGRlaW1vcy5FbmdpbmUubG9vcC5zdGFydChkZWltb3MuRW5naW5lLnVwZGF0ZS5iaW5kKGRlaW1vcy5FbmdpbmUpKSA7XG5cdFx0fSk7XG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5lbmdpbmUuZ2FtZVN0YXJ0ZWQnLGRlaW1vcy5FbmdpbmUuc3RhcnRHYW1lKTtcblxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuZGlzY29ubmVjdGVkJyxkZWltb3MuRW5naW5lLnN0b3ApO1xuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsubG9nZ291dCcsZGVpbW9zLkVuZ2luZS5zdG9wKTtcblxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsubG9nZ2VkJyxkZWltb3MuRW5naW5lLmluaXRHYW1lQXJlYSkgO1xuXG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy51aS5hdmF0YXJTZWxlY3RlZCcsZGVpbW9zLkVuZ2luZS5vbkF2YXRhclNlbGVjdGVkKSA7XG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5hdmF0YXJTZWxlY3Rpb25Db25maXJtZWQnLGRlaW1vcy5FbmdpbmUuYXZhdGFyU2VsZWN0aW9uQ29uZmlybWVkKSA7XG5cdH1cblxuXG5cdC8vcHJpdmF0ZSBmdW5jdGlvblxuXHR2YXIgdW5iaW5kR2FtZUV2ZW50S2V5ID0gZnVuY3Rpb24oKXtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVByZXNzZWQuJytLZXlib2FyZENvbnRyb2xsZXIua2V5cy5FTlRFUik7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuU1BBQ0UpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UHJlc3NlZC4nK0tleWJvYXJkQ29udHJvbGxlci5rZXlzLkFSUk9XX0xFRlQpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UHJlc3NlZC4nK0tleWJvYXJkQ29udHJvbGxlci5rZXlzLkFSUk9XX1JJR0hUKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVByZXNzZWQuJytLZXlib2FyZENvbnRyb2xsZXIua2V5cy5BUlJPV19ET1dOKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVByZXNzZWQuJytLZXlib2FyZENvbnRyb2xsZXIua2V5cy5BUlJPV19VUCk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuWCk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMubjEpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UHJlc3NlZC4nK0tleWJvYXJkQ29udHJvbGxlci5rZXlzLm4yKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVJlbGVhc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfTEVGVCk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlSZWxlYXNlZC4nK0tleWJvYXJkQ29udHJvbGxlci5rZXlzLkFSUk9XX1JJR0hUKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVJlbGVhc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfRE9XTik7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIubW92ZS5sZWZ0Jyk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIubW92ZS5yaWdodCcpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLm1vdmUubGVmdC5zdG9wJyk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIubW92ZS5yaWdodC5zdG9wJyk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIuanVtcCcpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLnNwZWFrJyk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIuc3BlYWsuc3RvcCcpO1xuXG5cdFx0LyoqXG5cdFx0ICogRm9yIFRlc3Rcblx0XHQgKi9cblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLnRlc3QucG9waXRlbScpO1xuXHR9XG5cblxuXHQvL3ByaXZhdGUgZnVuY3Rpb25cblx0dmFyIGJpbmRHYW1lRXZlbnRLZXkgPSBmdW5jdGlvbigpe1xuXHRcdC8vTEVGVFxuXHRcdEtleWJvYXJkQ29udHJvbGxlci5hZGRNYW5hZ2VkS2V5KEtleWJvYXJkQ29udHJvbGxlci5rZXlzLkVOVEVSKTtcblx0XHRLZXlib2FyZENvbnRyb2xsZXIuYWRkTWFuYWdlZEtleShLZXlib2FyZENvbnRyb2xsZXIua2V5cy5TUEFDRSk7XG5cdFx0S2V5Ym9hcmRDb250cm9sbGVyLmFkZE1hbmFnZWRLZXkoS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfTEVGVCk7XG5cdFx0S2V5Ym9hcmRDb250cm9sbGVyLmFkZE1hbmFnZWRLZXkoS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfUklHSFQpO1xuXHRcdEtleWJvYXJkQ29udHJvbGxlci5hZGRNYW5hZ2VkS2V5KEtleWJvYXJkQ29udHJvbGxlci5rZXlzLkFSUk9XX0RPV04pO1xuXHRcdEtleWJvYXJkQ29udHJvbGxlci5hZGRNYW5hZ2VkS2V5KEtleWJvYXJkQ29udHJvbGxlci5rZXlzLkFSUk9XX1VQKTtcblx0XHRLZXlib2FyZENvbnRyb2xsZXIuYWRkTWFuYWdlZEtleShLZXlib2FyZENvbnRyb2xsZXIua2V5cy5YKTtcblx0XHRLZXlib2FyZENvbnRyb2xsZXIuYWRkTWFuYWdlZEtleShLZXlib2FyZENvbnRyb2xsZXIua2V5cy5uMSk7XG5cdFx0S2V5Ym9hcmRDb250cm9sbGVyLmFkZE1hbmFnZWRLZXkoS2V5Ym9hcmRDb250cm9sbGVyLmtleXMubjIpO1xuXG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UHJlc3NlZC4nK0tleWJvYXJkQ29udHJvbGxlci5rZXlzLkVOVEVSLGZ1bmN0aW9uKCl7XG5cdFx0XHRpZihkZWltb3MuRW5naW5lLmF2YXRhci5zcGVha2luZykge1xuXHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIuc3BlYWsuc3RvcFwiLHsnYWN0aW9uJzonc3BlYWtfc3RvcCd9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5zcGVha1wiLHsnYWN0aW9uJzonc3BlYWsnfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfUklHSFQsZnVuY3Rpb24oKXtcblx0XHRcdGlmKCFkZWltb3MuRW5naW5lLmF2YXRhci5zcGVha2luZykge1xuXHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIubW92ZS5yaWdodFwiLHsnYWN0aW9uJzonbW92ZV9yaWdodCd9KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVByZXNzZWQuJytLZXlib2FyZENvbnRyb2xsZXIua2V5cy5BUlJPV19MRUZULGZ1bmN0aW9uKCl7XG5cdFx0XHRpZighZGVpbW9zLkVuZ2luZS5hdmF0YXIuc3BlYWtpbmcpIHtcblx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLm1vdmUubGVmdFwiLHsnYWN0aW9uJzonbW92ZV9sZWZ0J30pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly9ub3RlIDogZXZlbnQgaXMgc3luY2hyb25pemlkZSBvbiBBdmF0YXIgY2xhc3Mgd2hlbiB0aGUgZW5naW5lIHJlYWxseSBmaW5pc2ggdGhlIG1vdmVcblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlSZWxlYXNlZC4nK0tleWJvYXJkQ29udHJvbGxlci5rZXlzLkFSUk9XX1JJR0hULGZ1bmN0aW9uKCl7XG5cdFx0XHRpZighZGVpbW9zLkVuZ2luZS5hdmF0YXIuc3BlYWtpbmcpIHtcblx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLm1vdmUucmlnaHQuc3RvcFwiLHsnYWN0aW9uJzonbW92ZV9yaWdodF9zdG9wJ30pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly9ub3RlIDogZXZlbnQgaXMgc3luY2hyb25pemlkZSBvbiBBdmF0YXIgY2xhc3Mgd2hlbiB0aGUgZW5naW5lIHJlYWxseSBmaW5pc2ggdGhlIG1vdmVcblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlSZWxlYXNlZC4nK0tleWJvYXJkQ29udHJvbGxlci5rZXlzLkFSUk9XX0xFRlQsZnVuY3Rpb24oKXtcblx0XHRcdGlmKCFkZWltb3MuRW5naW5lLmF2YXRhci5zcGVha2luZykge1xuXHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIubW92ZS5sZWZ0LnN0b3BcIix7J2FjdGlvbic6J21vdmVfbGVmdF9zdG9wJ30pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UHJlc3NlZC4nK0tleWJvYXJkQ29udHJvbGxlci5rZXlzLkFSUk9XX0RPV04sZnVuY3Rpb24oKXtcblx0XHRcdGlmKCFkZWltb3MuRW5naW5lLmF2YXRhci5zcGVha2luZykge1xuXHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIuZ28uZG93blwiLHsnYWN0aW9uJzonZ29fZG93bl9hY3RpdmUnfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlSZWxlYXNlZC4nK0tleWJvYXJkQ29udHJvbGxlci5rZXlzLkFSUk9XX0RPV04sZnVuY3Rpb24oKXtcblx0XHRcdGlmKCFkZWltb3MuRW5naW5lLmF2YXRhci5zcGVha2luZykge1xuXHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIuZ28uZG93bi5zdG9wXCIseydhY3Rpb24nOidnb19kb3duX2luYWN0aXZlJ30pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UHJlc3NlZC4nK0tleWJvYXJkQ29udHJvbGxlci5rZXlzLkFSUk9XX1VQLGZ1bmN0aW9uKCl7XG5cdFx0XHRpZighZGVpbW9zLkVuZ2luZS5hdmF0YXIuc3BlYWtpbmcpIHtcblx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLmp1bXBcIix7J2FjdGlvbic6J2p1bXAnfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuU1BBQ0UsZnVuY3Rpb24oKXtcblx0XHRcdGlmKCFkZWltb3MuRW5naW5lLmF2YXRhci5zcGVha2luZykge1xuXHRcdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5hdHRhY2soKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBBIEtpbmQgb2YgZW51bSBmb3IgZGlmZmVyZW50IG1vZGVzXG5cdCAqIFxuXHQgKiBERUJVRyBzaG93cyBhIGxvdCBvZiBsb2cgaW4gYnJvd3NlclxuXHQgKiBQUk9EIHJlbW92ZSBsb2dzXG5cdCAqXG5cdCAqICovXG5cdGRlaW1vcy5FbmdpbmUuTW9kZSA9IHtcblx0XHRERUJVRyA6IHt2YWx1ZTogMCwgbmFtZTonZGVidWcnfSxcblx0XHRQUk9EIDoge3ZhbHVlOiAxLCBuYW1lOidwcm9kJ31cblx0fVxufSkob3JnLmRieXplcm8uZGVpbW9zLCBkb2N1bWVudCk7IiwiLyoqXG4gKiBJbXBvcnRhbnQgOiBBY3R1ZWxsZW1lbnQgZGVwcmVjYXRlZCBtYWlzIG9uIGxlIGdhcmRlIHNpIGJlc29pbiBlbiByZXRvIGNvbXBhdFxuICogXG4gKiBvcmcuZGJ5emVyby5kZWltb3MucmVuZGVyLkFuaW1hdGlvbiBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxMy8wOC8xMFxuICogQGRlc2NyaXB0aW9uIDogQW5pbWF0aW9uIG1vZGVsXG4gKlxuICogKi9cblxuKGZ1bmN0aW9uKGRlaW1vcyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblxuXHRkZWltb3MucmVuZGVyID0gZGVpbW9zLnJlbmRlciB8fCB7fSA7XG5cblx0LyoqXG5cdCAqIEFuaW1hdGlvbiBjb25zdHJ1Y3RvclxuXHQgKiBcblx0ICogQHBhcmFtIHNwcml0ZXNoZWV0IHN0cmluZyBvZiB0aGUgYW5pbWF0aW9uIHNwcml0ZXNoZWV0IGxpbmtcblx0ICogQHBhcmFtIHNwZWVkIGludGVnZXIgZGVsYXkgYmV0d2VlbiBlYWNoIGFuaW1hdGlvbiBpbiBtc1xuXHQgKlxuXHQgKiAqL1xuXHRkZWltb3MucmVuZGVyLkFuaW1hdGlvbiA9IHt9XG5cblx0ZGVpbW9zLnJlbmRlci5BbmltYXRpb24uVHlwZSA9IHtcblx0XHRXQUxLX1JJR0hUIDoge3ZhbHVlOiAwLCB0eXBlOid3YWxrJywgZGlyZWN0aW9uOidyaWdodCd9LFxuXHRcdFdBTEtfTEVGVCA6IHt2YWx1ZTogMSwgdHlwZTond2FsaycsIGRpcmVjdGlvbjonbGVmdCd9LFxuXG5cdFx0SlVNUF9SSUdIVCA6IHt2YWx1ZTogMiwgdHlwZTonanVtcCcsIGRpcmVjdGlvbjoncmlnaHQnfSxcblx0XHRKVU1QX0xFRlQgOiB7dmFsdWU6IDMsIHR5cGU6J2p1bXAnLCBkaXJlY3Rpb246J2xlZnQnfSxcblx0XHRcblx0XHRTRUVfUklHSFQgOiB7dmFsdWU6IDQsIHR5cGU6J3NlZScsIGRpcmVjdGlvbjoncmlnaHQnfSxcblx0XHRTRUVfTEVGVCA6IHt2YWx1ZTogNSwgdHlwZTonc2VlJywgZGlyZWN0aW9uOidsZWZ0J30sXG5cdFx0XG5cdFx0RkxZX1JJR0hUIDoge3ZhbHVlOiA2LCB0eXBlOidmbHknLCBkaXJlY3Rpb246J3JpZ2h0J30sXG5cdFx0RkxZX0xFRlQgOiB7dmFsdWU6IDcsIHR5cGU6J2ZseScsIGRpcmVjdGlvbjonbGVmdCd9LFxuXHR9XG5cblx0ZGVpbW9zLnJlbmRlci5BbmltYXRpb24uZmFjdG9yeSA9IGZ1bmN0aW9uKHR5cGUsIGRpcmVjdGlvbiwgdmFsdWUpIHtcblx0XHR2YXIgYW5pbSA9IG51bGw7XG5cdFx0Zm9yKHZhciBrIGluIGFuaW1hdGlvbikge1xuXHRcdFx0YW5pbSA9IGFuaW1hdGlvbltrXTtcblx0XHRcdGlmKGFuaW0udmFsdWUgPT09IHZhbHVlKSByZXR1cm4gYW5pbTtcblx0XHRcdGlmKGFuaW0uZGlyZWN0aW9uID09PSBkaXJlY3Rpb24gJiYgYW5pbS50eXBlID09PSB0eXBlKSByZXR1cm4gYW5pbTtcblx0XHR9XG5cdFx0dGhyb3cgbmV3IEV4ZWNwdGlvbihcIkFuaW1hdGlvbiBub3QgZmluZCwgYXJnczpcIitBcnJheS5zbGljZShhcmd1bWVudHMpLmpvaW4oJywnKSk7XG5cdH1cblxufSkob3JnLmRieXplcm8uZGVpbW9zLCBkb2N1bWVudCk7IiwiLyoqXG4gKlxuICogb3JnLmRieXplcm8uZGVpbW9zLnJlbmRlci5VSSBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxMy8wOC8wNFxuICogQGRlc2NyaXB0aW9uIDogVUkgdG8gc2hvdyB0aGluZ3MgIVxuICpcbiAqICovXG5cbihmdW5jdGlvbihkZWltb3MsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0dmFyIEV2ZW50TWFuYWdlciA9IG9yZy5kYnl6ZXJvLnRvb2xzLkV2ZW50TWFuYWdlcjtcblxuXHRkZWltb3MucmVuZGVyID0gZGVpbW9zLnJlbmRlciB8fCB7fSA7XG5cblx0ZGVpbW9zLnJlbmRlci5VSSA9IGZ1bmN0aW9uKCl7XG5cblx0XHQvL0hUTUxcblx0XHR2YXIgZ2FtZVBvcHVwSFRNTCA9ICcnK1xuXHRcdCc8c2VjdGlvbiBpZD1cIm9yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAubWFpblwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjojZWJkM2FkO3dpZHRoOjIwMHB4O3Bvc2l0aW9uOmZpeGVkO3RvcDowcHg7bGVmdDowcHg7Ym9yZGVyOjFweCBzb2xpZCAjOWU2MTExO2JvcmRlci1yYWRpdXM6NXB4O3otaW5kZXg6MTAwMDAwMDtjdXJzb3I6cG9pbnRlclwiPicrXG5cdFx0XHQnPGhlYWRlciBzdHlsZT1cIndpZHRoOjE5NHB4O2JhY2tncm91bmQtY29sb3I6I2ZlZTg5NTtoZWlnaHQ6MjBweDtmb250LWZhbWlseTpBcmlhbDtwYWRkaW5nOjNweDtmb250LXNpemU6MTVweDtib3JkZXItcmFkaXVzOjVweFwiPicrXG5cdFx0XHRcdCdEZWltb3MnK1xuXHRcdFx0XHQnPGRpdiBpZD1cIm9yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAubWVzc2FnZVwiIHN0eWxlPVwidHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzLCBib3JkZXIgMC4yNXM7ZmxvYXQ6cmlnaHQ7YmFja2dyb3VuZC1jb2xvcjojZWJkM2FkO3dpZHRoOjEzcHg7aGVpZ2h0OiAxOHB4O2JvcmRlci1yaWdodDogNXB4ICNBRjlEN0Ygc29saWQ7Y3Vyc29yOnBvaW50ZXJcIj48L2Rpdj4nK1xuXHRcdFx0JzwvaGVhZGVyPicrXG5cdFx0XHQnPHNlY3Rpb24gaWQ9XCJvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLnNlY3Rpb25DaG9vc2VBdmF0YXJcIj4nK1xuXHRcdFx0XHQnPHNlbGVjdCBpZD1cIm9yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAuYXZhdGFyTGlzdFwiIG5hbWU9XCJjaG9vc2VfYXZhdGFyXCIgc3R5bGU9XCJib3JkZXI6MXB4IHNvbGlkICMzMzM7YmFja2dyb3VuZC1jb2xvcjojZmZmO21hcmdpbjo4cHggMCA4cHggNXB4O3dpZHRoOjEwNXB4XCIgc2l6ZT1cIjVcIj48L3NlbGVjdD4nK1xuXHRcdFx0XHQnPGlucHV0IGlkPVwib3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5mb3JtQ2hvb3NlQXZhdGFyXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQ2hvb3NlXCIgc3R5bGU9XCJib3JkZXI6MXB4IHNvbGlkICMzMzM7YmFja2dyb3VuZC1jb2xvcjojZmZmO21hcmdpbjoweDsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDU1cHg7IHJpZ2h0OiA0cHg7XCI+ICcrXG5cdFx0XHQnPC9zZWN0aW9uPicrXG5cdFx0XHQnPGZvb3RlciBzdHlsZT1cIndpZHRoOjE5NHB4O2JhY2tncm91bmQtY29sb3I6I0ZGRkFFRDtoZWlnaHQ6MjBweDtmb250LWZhbWlseTpBcmlhbDtwYWRkaW5nOjNweDtmb250LXNpemU6MTBweDtib3JkZXItcmFkaXVzOjVweDttYXJnaW4tYm90dG9tOjBweDtcIj4nK1xuXHRcdFx0XHQnPHNwYW4+RlBTIDogPHNwYW4gaWQ9XCJvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLmluZGljYXRvckZwc1wiPm4vYTwvc3Bhbj48L3NwYW4+IHwgJytcblx0XHRcdFx0JzxzcGFuPkxBRyA6IDxzcGFuIGlkPVwib3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5pbmRpY2F0b3JMYWdcIj5uL2E8L3NwYW4+PC9zcGFuPicrXG5cdFx0XHQnPC9mb290ZXI+Jytcblx0XHQnPC9zZWN0aW9uPic7XG5cblx0XHR2YXIgcG9wdXBDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0cG9wdXBDb250YWluZXJFbGVtZW50LmlubmVySFRNTCA9IGdhbWVQb3B1cEhUTUw7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cENvbnRhaW5lckVsZW1lbnQpO1xuXG5cdFx0dmFyIG1lc3NhZ2VBcmVhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cdFx0bWVzc2FnZUFyZWFFbGVtZW50LmlkID0gJ29yZy5kYnl6ZXJvLmRlaW1vcy5tZXNzYWdlQXJlYSc7XG5cdFx0bWVzc2FnZUFyZWFFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjU1LCAyMzksIDIxOSknO1xuXHRcdG1lc3NhZ2VBcmVhRWxlbWVudC5zdHlsZS53aWR0aCA9ICcwcHgnO1xuXHRcdG1lc3NhZ2VBcmVhRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnOTglJztcblx0XHRtZXNzYWdlQXJlYUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuXHRcdG1lc3NhZ2VBcmVhRWxlbWVudC5zdHlsZS50b3AgPSAnMHB4Jztcblx0XHRtZXNzYWdlQXJlYUVsZW1lbnQuc3R5bGUucmlnaHQgPSAnMHB4Jztcblx0XHRtZXNzYWdlQXJlYUVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjY2NjJztcblx0XHRtZXNzYWdlQXJlYUVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzEwMDAwMDAnO1xuXHRcdG1lc3NhZ2VBcmVhRWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gJ21vbm9zcGFjZSc7XG5cdFx0bWVzc2FnZUFyZWFFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gJzEwcHgnO1xuXHRcdG1lc3NhZ2VBcmVhRWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdhdXRvJztcblx0XHRtZXNzYWdlQXJlYUVsZW1lbnQuc3R5bGUub3ZlcmZsb3dYID0gJ2hpZGRlbic7XG5cdFx0bWVzc2FnZUFyZWFFbGVtZW50LnN0eWxlLmxpc3RTdHlsZSA9ICdub25lJztcblx0XHRtZXNzYWdlQXJlYUVsZW1lbnQuc3R5bGUubWFyZ2luID0gJzAnO1xuXHRcdG1lc3NhZ2VBcmVhRWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzVweCA1cHggMCA1cHgnO1xuXHRcdG1lc3NhZ2VBcmVhRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gJ3dpZHRoIDAuNXMgbGluZWFyJztcblx0XHRtZXNzYWdlQXJlYUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lc3NhZ2VBcmVhRWxlbWVudCk7XG5cblx0XHQvL0VWRU5UU1xuXHRcdHZhciBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5tYWluXCIpO1xuXHRcdHZhciBkcmFnRW5hYmxlID0gZmFsc2U7XG5cdFx0dmFyIG9sZFggPSBudWxsO1xuXHRcdHZhciBvbGRZID0gbnVsbDtcblx0XHRwb3B1cC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKGUpe1xuXHRcdFx0ZHJhZ0VuYWJsZSA9IHRydWU7XG5cdFx0XHRvbGRYID0gZS54O1xuXHRcdFx0b2xkWSA9IGUueTtcblx0XHR9O1xuXHRcdGRvY3VtZW50Lm9ubW91c2V1cCA9IGZ1bmN0aW9uKGUpe1xuXHRcdFx0ZHJhZ0VuYWJsZSA9IGZhbHNlO1xuXHRcdFx0b2xkWCA9IG51bGw7XG5cdFx0XHRvbGRZID0gbnVsbDtcblx0XHR9O1xuXHRcdGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oZSl7XG5cdFx0XHRpZihkcmFnRW5hYmxlKSB7XG5cdFx0XHRcdHBvcHVwLnN0eWxlLnRvcCA9IHBhcnNlSW50KHBvcHVwLnN0eWxlLnRvcC5zbGljZSgwLC0yKSkgKyAoZS55IC0gb2xkWSkgK1wicHhcIjtcblx0XHRcdFx0cG9wdXAuc3R5bGUubGVmdCA9IHBhcnNlSW50KHBvcHVwLnN0eWxlLmxlZnQuc2xpY2UoMCwtMikpICsgKGUueCAtIG9sZFgpICtcInB4XCI7XG5cdFx0XHRcdG9sZFggPSBlLng7XG5cdFx0XHRcdG9sZFkgPSBlLnk7XG5cdFx0XHR9XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAubWVzc2FnZVwiKS5vbmNsaWNrID0gZnVuY3Rpb24oZSl7XG5cdFx0XHRpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZy5kYnl6ZXJvLmRlaW1vcy5tZXNzYWdlQXJlYVwiKS5zdHlsZS53aWR0aCA9PT0gXCIxOTBweFwiKSB7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JnLmRieXplcm8uZGVpbW9zLm1lc3NhZ2VBcmVhXCIpLnN0eWxlLndpZHRoID0gXCIwcHhcIjtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JnLmRieXplcm8uZGVpbW9zLm1lc3NhZ2VBcmVhXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHQsNTAwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JnLmRieXplcm8uZGVpbW9zLm1lc3NhZ2VBcmVhXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZy5kYnl6ZXJvLmRlaW1vcy5tZXNzYWdlQXJlYVwiKS5zdHlsZS53aWR0aCA9IFwiMTkwcHhcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHQsMCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHRoaXMuYmluZCgpO1xuXHRcdHRoaXMubWF4Q29uc29sZVJvdyA9IDEwMCA7XG5cdH1cblxuXHRkZWltb3MucmVuZGVyLlVJLnByb3RvdHlwZSA9IHtcblx0XHRiaW5kOiBmdW5jdGlvbigpIHtcblx0XHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLmNvbnNvbGUud3JpdGUnLHRoaXMuYWRkbWVzc2FnZS5iaW5kKHRoaXMpKSA7XG5cdFx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5jb25zb2xlLndyaXRlRXJyb3InLHRoaXMuYWRkbWVzc2FnZUVycm9yLmJpbmQodGhpcykpIDtcblx0XHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsubG9nZ2VkJyx0aGlzLm9uTG9nZ2VkLmJpbmQodGhpcykpIDtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLmZvcm1DaG9vc2VBdmF0YXInKS5vbmNsaWNrID0gdGhpcy5vbkF2YXRhckNob29zZWQuYmluZCh0aGlzKSA7XG5cdFx0fSxcblxuXHRcdHVuYmluZCA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MuY29uc29sZS53cml0ZScpO1xuXHRcdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5jb25zb2xlLndyaXRlRXJyb3InKTtcblx0XHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5hdmF0YXJfc2VsZWN0ZWQnKTtcblx0XHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5sb2dnZWQnKTtcblx0XHRcdC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlaW1vcy5Db25maWcudWkuZGlzY29ubmVjdERvbUlkKS5vbmNsaWNrID0gbnVsbCA7XG5cdFx0fSxcblxuXHRcdGxvZ2dvdXQgOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMudW5iaW5kKCk7XG5cdFx0XHR2YXIgbWFpbkRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLm1haW4nKTtcblx0XHRcdHZhciBtZXNzYWdlRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAubWVzc2FnZScpO1xuXHRcdFx0bWFpbkRvbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1haW5Eb20pO1xuXHRcdFx0bWVzc2FnZURvbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1lc3NhZ2VEb20pO1xuXHRcdH0sXG5cblx0XHQvL2FkZCBhIG1lc3NhZ2UgdG8gdWkgbG9nXG5cdFx0YWRkbWVzc2FnZSA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBtc2dab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVpbW9zLkNvbmZpZy51aS5jaGF0RG9tSWQpIDtcblxuXHRcdFx0dmFyIGRvbV9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdFx0ZG9tX2VsZW0uaW5uZXJUZXh0ID0gZS5kZXRhaWwubWVzc2FnZSA7XG5cdFx0XHRcdG1zZ1pvbmUuYXBwZW5kQ2hpbGQoZG9tX2VsZW0pIDtcblx0XHRcdHRoaXMuY3JvcENvbnNvbGVSb3codGhpcy5tYXhDb25zb2xlUm93KSA7XG5cdFx0fSxcblxuXHRcdC8vYWRkIGVycm9yIG1lc3NhZ2Ugb24gdWlcblx0XHRhZGRtZXNzYWdlRXJyb3IgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgbXNnWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlaW1vcy5Db25maWcudWkuY2hhdERvbUlkKSA7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5tZXNzYWdlJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCcgO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAubWVzc2FnZScpLnN0eWxlLmJvcmRlckNvbG9yID0gJ3JlZCcgO1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5tZXNzYWdlJykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNlYmQzYWQnIDtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAubWVzc2FnZScpLnN0eWxlLmJvcmRlckNvbG9yID0gJyNBRjlEN0YnIDtcblx0XHRcdH0sMjUwKTtcblxuXHRcdFx0dmFyIGRvbV9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdFx0ZG9tX2VsZW0uY2xhc3NOYW1lID0gJ2Vycm9yJyA7XG5cdFx0XHRkb21fZWxlbS5pbm5lclRleHQgPSBlLmRldGFpbC5tZXNzYWdlIDtcblx0XHRcdFx0bXNnWm9uZS5hcHBlbmRDaGlsZChkb21fZWxlbSkgO1xuXHRcdFx0dGhpcy5jcm9wQ29uc29sZVJvdyh0aGlzLm1heENvbnNvbGVSb3cpIDtcblx0XHR9LFxuXG5cdFx0Ly9jbGVhciB3aGF0IEkgY2Fubm90IHNlZVxuXHRcdGNyb3BDb25zb2xlUm93IDogZnVuY3Rpb24obWF4KSB7XG5cdFx0XHR2YXIgbXNnWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlaW1vcy5Db25maWcudWkuY2hhdERvbUlkKSA7XG5cdFx0XHR3aGlsZShtc2dab25lLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpLmxlbmd0aCA+IG1heCkge1xuXHRcdFx0XHRtc2dab25lLmNoaWxkTm9kZXNbMF0ucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0XHRtc2dab25lLnNjcm9sbFRvcCA9IG1zZ1pvbmUuc2Nyb2xsSGVpZ2h0O1xuXHRcdH0sXG5cblx0XHR1cGRhdGVMYWcgOiBmdW5jdGlvbihsYWcpIHtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlaW1vcy5Db25maWcudWkuaW5kaWNhdGlvbi5sYWcpLmlubmVySFRNTCA9IGxhZysnbXMnO1xuXHRcdH0sXG5cblx0XHR1cGRhdGVGUFMgOiBmdW5jdGlvbihmcHMpIHtcblx0XHRcdHZhciBuYnJJbnRlZ3JhdGUgPSA1MDtcblx0XHRcdGRlaW1vcy5FbmdpbmUucGFzdEZQUy51bnNoaWZ0KGZwcyk7XG5cdFx0XHRkZWltb3MuRW5naW5lLnBhc3RGUFMubGVuZ3RoID0gTWF0aC5taW4oZGVpbW9zLkVuZ2luZS5wYXN0RlBTLmxlbmd0aCxuYnJJbnRlZ3JhdGUpO1xuXHRcdFx0dmFyIGludGVycG9sYXRlZEZQUyA9IHBhcnNlSW50KGRlaW1vcy5FbmdpbmUucGFzdEZQUy5yZWR1Y2UoZnVuY3Rpb24ocCxjKXtyZXR1cm4gcCtjO30pL25ickludGVncmF0ZSk7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWltb3MuQ29uZmlnLnVpLmluZGljYXRpb24uZnBzKS5pbm5lckhUTUwgPSBpbnRlcnBvbGF0ZWRGUFM7XG5cdFx0fSxcblxuXHRcdC8vc2hvdyBsaXN0IG9mIGF2YXRhclxuXHRcdG9uTG9nZ2VkOiBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXG5cdFx0XHQvL2FkZGluZyBhdmF0YXIgY2hvaWNlXG5cdFx0XHR2YXIgaSA9IDAgO1xuXHRcdFx0dmFyIGF2YXRhcnMgPSBlW190Lk1FU1NBR0VdW190LkFWQVRBUlNdO1xuXHRcdFx0Zm9yKGF2YXRhciBpbiBhdmF0YXJzKSB7XG5cdFx0XHRcdHZhciBvcHRpb24gPSBuZXcgT3B0aW9uKGF2YXRhcnNbYXZhdGFyXVtfdC5OQU1FXSxhdmF0YXJzW2F2YXRhcl1bX3QuSURdKTs7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLmF2YXRhckxpc3QnKS5hcHBlbmRDaGlsZChvcHRpb24pIDtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fVxuXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5hdmF0YXJMaXN0Jykuc2VsZWN0ZWRJbmRleCA9IDA7XG5cdFx0XHQvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWltb3MuQ29uZmlnLnVpLmNob29zZUF2YXRhci5zZWN0aW9uRG9tSWQpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snIDtcblx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmNvbnNvbGUud3JpdGVcIix7XCJkZXRhaWxcIjp7XCJtZXNzYWdlXCI6XCJBdXRoZW50aWNhdGVkIHRvIHRoZSBzZXJ2ZXJcIn19KTtcblx0XHR9LFxuXG5cdFx0b25BdmF0YXJDaG9vc2VkIDogZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblx0XHRcdHZhciBhdmF0YXIgPSBudWxsO1xuXHRcdFx0XG5cdFx0XHR2YXIgbGlzdF9hdmF0YXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5hdmF0YXJMaXN0Jyk7XG5cdFx0XHRpZighIWxpc3RfYXZhdGFyLm9wdGlvbnNbbGlzdF9hdmF0YXIuc2VsZWN0ZWRJbmRleF0pIHtcblx0XHRcdFx0YXZhdGFyID0gbGlzdF9hdmF0YXIub3B0aW9uc1tsaXN0X2F2YXRhci5zZWxlY3RlZEluZGV4XS52YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoISFhdmF0YXIpIHtcblx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MudWkuYXZhdGFyU2VsZWN0ZWRcIixhdmF0YXIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MuY29uc29sZS53cml0ZVwiLHtcImRldGFpbFwiOntcIm1lc3NhZ2VcIjpcIlVua25vdyBhdmF0YXJcIn19KTtcblx0XHRcdH1cblx0XHR9LFxuXHR9XG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBvcmcuZGJ5emVyby5kZWltb3MucmVuZGVyLlNjZW5lIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA4LzA5XG4gKiBAZGVzY3JpcHRpb24gOiBTY2VuZSB3aGVyZSBhY3Rpb24gYXBwZW5kcyAhXG4gKlxuICoqL1xuXG52YXIgb3JnID0gb3JnIHx8IHt9IDtcbm9yZy5kYnl6ZXJvID0gb3JnLmRieXplcm8gfHwge30gO1xuXG4oZnVuY3Rpb24oZGVpbW9zLCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cdHZhciBWZWN0b3IgPSBvcmcuZGJ5emVyby50b29scy5WZWN0b3I7XG5cdHZhciBFdmVudE1hbmFnZXIgPSBvcmcuZGJ5emVyby50b29scy5FdmVudE1hbmFnZXI7XG5cblx0ZGVpbW9zLnJlbmRlciA9IG9yZy5kYnl6ZXJvLmRlaW1vcy5yZW5kZXIgfHwge30gO1xuXG5cdGRlaW1vcy5yZW5kZXIuU2NlbmUgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLml0ZW1zXHRcdFx0PSB7fTtcblx0XHR0aGlzLmF2YXRhcnNcdFx0PSB7fTtcblx0XHR0aGlzLnByb2plY3RpbGVzXHQ9IHt9O1xuXHRcdHRoaXMuYXR0YWNrWm9uZXNcdD0ge307XG5cdFx0dGhpcy5tb25zdGVyc1x0XHQ9IHt9O1xuXHRcdHRoaXMuZGF0YVRvUGFyc2VcdD0ge307XG5cdFx0dGhpcy5hZGRMaXN0ZW5lcigpO1xuXHR9XG5cblx0ZGVpbW9zLnJlbmRlci5TY2VuZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly9jbGVhbiBhdmF0YXJzXG5cdFx0Zm9yKHZhciBhdl9pZCBpbiBkZWltb3MuRW5naW5lLnNjZW5lLmF2YXRhcnMpIHtcblx0XHRcdHRoaXMuYXZhdGFyc1thdl9pZF0uZGVzdHJveSgpO1xuXHRcdH1cblxuXHRcdC8vY2xlYW4gaXRlbXNcblx0XHRmb3IodmFyIGl0ZW1faWQgaW4gZGVpbW9zLkVuZ2luZS5zY2VuZS5pdGVtcykge1xuXHRcdFx0dGhpcy5pdGVtc1tpdGVtX2lkXS5jbGVhbkRvbSgpO1xuXHRcdFx0ZGVsZXRlIHRoaXMuaXRlbXNbaXRlbV9pZF07XG5cdFx0fVxuXG5cdFx0Ly9jbGVhbiBpdGVtc1xuXHRcdGZvcih2YXIgbW9uc3Rlcl9pZCBpbiB0aGlzLm1vbnN0ZXJzKSB7XG5cdFx0XHR0aGlzLm1vbnN0ZXJzW21vbnN0ZXJfaWRdLmNsZWFuRG9tKCk7XG5cdFx0XHRkZWxldGUgdGhpcy5tb25zdGVyc1ttb25zdGVyX2lkXTtcblx0XHR9XG5cblx0XHQvL2NsZWFuIGl0ZW1zXG5cdFx0Zm9yKHZhciBwcm9qZWN0aWxlX2lkIGluIHRoaXMucHJvamVjdGlsZXMpIHtcblx0XHRcdHRoaXMucHJvamVjdGlsZXNbcHJvamVjdGlsZV9pZF0uY2xlYW5Eb20oKTtcblx0XHRcdGRlbGV0ZSB0aGlzLnByb2plY3RpbGVzW3Byb2plY3RpbGVfaWRdO1xuXHRcdH1cblxuXHRcdHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcblx0fVxuXG5cdGRlaW1vcy5yZW5kZXIuU2NlbmUucHJvdG90eXBlLnBhcnNlRGF0YSA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRpZighZGVpbW9zLkVuZ2luZS5ydW5uaW5nKSByZXR1cm4gZmFsc2U7XG5cdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblxuXHRcdC8qKlxuXHRcdCAqIEFWQVRBUlMgXG5cdFx0ICovXG5cdFx0Ly9zeW5jIGF2YXRhcnNcblx0XHR2YXIgYXZhdGFyVXBkYXRlZCA9IFtdO1xuXHRcdHZhciBhdmF0YXJzID0gZGF0YVtfdC5NRVNTQUdFXVtfdC5BVkFUQVJTXTtcblx0XHRmb3IodmFyIGsgaW4gYXZhdGFycykge1xuXHRcdFx0aWYodGhpcy5zeW5jQXZhdGFyKGF2YXRhcnNba10pKSB7XG5cdFx0XHRcdGF2YXRhclVwZGF0ZWQucHVzaChwYXJzZUludChhdmF0YXJzW2tdW190WydNRVNTQUdFX0VMRU1FTlRfSUQnXV0pKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvL2NsZWFuIGF2YXRhclxuXHRcdGZvcih2YXIgaSBpbiBkZWltb3MuRW5naW5lLnNjZW5lLmF2YXRhcnMpIHtcblx0XHRcdHZhciBhdl9pZCA9IGRlaW1vcy5FbmdpbmUuc2NlbmUuYXZhdGFyc1tpXS5zZXJ2ZXJpZDtcblx0XHRcdGlmKGF2YXRhclVwZGF0ZWQuaW5kZXhPZihhdl9pZCkgPT09IC0xKSB7XG5cdFx0XHRcdHRoaXMuYXZhdGFyc1thdl9pZF0uZGVzdHJveSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIElURU1TIFxuXHRcdCAqL1xuXHRcdC8vc3luYyBpdGVtc1xuXHRcdHZhciBpdGVtcyA9IGRhdGFbX3QuTUVTU0FHRV1bX3QuSVRFTVNdO1xuXHRcdHZhciBpdGVtVXBkYXRlZCA9IFtdO1xuXHRcdGZvcih2YXIgaWQgaW4gaXRlbXMpIHtcblx0XHRcdHRoaXMuc3luY0l0ZW0oaXRlbXNbaWRdKTtcblx0XHRcdGl0ZW1VcGRhdGVkLnB1c2goaWQpO1xuXHRcdH1cblxuXHRcdC8vY2xlYW4gaXRlbXNcblx0XHRmb3IodmFyIGl0ZW1faWQgaW4gZGVpbW9zLkVuZ2luZS5zY2VuZS5pdGVtcykge1xuXHRcdFx0aWYoaXRlbVVwZGF0ZWQuaW5kZXhPZihpdGVtX2lkKSA9PT0gLTEpIHtcblx0XHRcdFx0dGhpcy5pdGVtc1tpdGVtX2lkXS5jbGVhbkRvbSgpO1xuXHRcdFx0XHRkZWxldGUgdGhpcy5pdGVtc1tpdGVtX2lkXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBNT05TVEVSUyBcblx0XHQgKi9cblx0XHQvL3N5bmMgaXRlbXNcblx0XHR2YXIgbW9uc3RlcnMgPSBkYXRhW190Lk1FU1NBR0VdW190Lk1PTlNURVJTXTtcblx0XHR2YXIgbW9uc3RlclVwZGF0ZWQgPSBbXTtcblx0XHRmb3IodmFyIGlkIGluIG1vbnN0ZXJzKSB7XG5cdFx0XHR0aGlzLnN5bmNNb25zdGVyKG1vbnN0ZXJzW2lkXSk7XG5cdFx0XHRtb25zdGVyVXBkYXRlZC5wdXNoKGlkKTtcblx0XHR9XG5cblx0XHQvL2NsZWFuIGl0ZW1zXG5cdFx0Zm9yKHZhciBtb25zdGVyX2lkIGluIHRoaXMubW9uc3RlcnMpIHtcblx0XHRcdGlmKG1vbnN0ZXJVcGRhdGVkLmluZGV4T2YobW9uc3Rlcl9pZCkgPT09IC0xKSB7XG5cdFx0XHRcdHRoaXMubW9uc3RlcnNbbW9uc3Rlcl9pZF0uY2xlYW5Eb20oKTtcblx0XHRcdFx0ZGVsZXRlIHRoaXMubW9uc3RlcnNbbW9uc3Rlcl9pZF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogUFJPSkVDVElMRVMgXG5cdFx0ICovXG5cdFx0Ly9zeW5jIGl0ZW1zXG5cdFx0dmFyIHByb2plY3RpbGVzID0gZGF0YVtfdC5NRVNTQUdFXVtfdC5QUk9KRUNUSUxFU107XG5cdFx0dmFyIHByb2plY3RpbGVVcGRhdGVkID0gW107XG5cdFx0Zm9yKHZhciBpZCBpbiBwcm9qZWN0aWxlcykge1xuXHRcdFx0dGhpcy5zeW5jUHJvamVjdGlsZShwcm9qZWN0aWxlc1tpZF0pO1xuXHRcdFx0cHJvamVjdGlsZVVwZGF0ZWQucHVzaChpZCk7XG5cdFx0fVxuXG5cdFx0Ly9jbGVhbiBpdGVtc1xuXHRcdGZvcih2YXIgcHJvamVjdGlsZV9pZCBpbiB0aGlzLnByb2plY3RpbGVzKSB7XG5cdFx0XHRpZihwcm9qZWN0aWxlVXBkYXRlZC5pbmRleE9mKHByb2plY3RpbGVfaWQpID09PSAtMSkge1xuXHRcdFx0XHR0aGlzLnByb2plY3RpbGVzW3Byb2plY3RpbGVfaWRdLmNsZWFuRG9tKCk7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLnByb2plY3RpbGVzW3Byb2plY3RpbGVfaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0Ly9AcmV0dXJuIHRvdGFsIHBlcmlvZGUgaW50ZWdyYXRlZFxuXHRkZWltb3MucmVuZGVyLlNjZW5lLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkdCxub3cpIHtcblx0XHRpZighIXRoaXMuZGF0YVRvUGFyc2UpIHtcblx0XHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0XHR2YXIgZGF0YSA9IHt9O1xuXHRcdFx0ZGF0YVtfdFsnTUVTU0FHRSddXSA9IHRoaXMuZGF0YVRvUGFyc2U7XG5cdFx0XHR0aGlzLnBhcnNlRGF0YShkYXRhKTtcblx0XHRcdHRoaXMuZGF0YVRvUGFyc2UgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0ZGVpbW9zLkVuZ2luZS51aS51cGRhdGVGUFMocGFyc2VJbnQoMTAwMC9kdCkpO1xuXG5cdFx0Ly91cGRhdGVcblx0XHR2YXIga2V5cyxpLGF2YXRhcixtb25zdGVyO1xuXHRcdGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLml0ZW1zKTtcblx0XHRmb3IoaT0wO2k8a2V5cy5sZW5ndGg7aSsrKSB7XG5cdFx0XHR0aGlzLml0ZW1zW2tleXNbaV1dLnVwZGF0ZShkdCxub3cpO1xuXHRcdH1cblx0XHRrZXlzID0gT2JqZWN0LmtleXModGhpcy5hdmF0YXJzKTtcblx0XHRmb3IoaT0wO2k8a2V5cy5sZW5ndGg7aSsrKSB7XG5cdFx0XHR0aGlzLmF2YXRhcnNba2V5c1tpXV0udXBkYXRlKGR0LG5vdyk7XG5cdFx0fVxuXHRcdGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb2plY3RpbGVzKTtcblx0XHRmb3IoaT0wO2k8a2V5cy5sZW5ndGg7aSsrKSB7XG5cdFx0XHR0aGlzLnByb2plY3RpbGVzW2tleXNbaV1dLnVwZGF0ZShkdCxub3cpO1xuXHRcdH1cblx0XHRrZXlzID0gT2JqZWN0LmtleXModGhpcy5tb25zdGVycyk7XG5cdFx0Zm9yKGk9MDtpPGtleXMubGVuZ3RoO2krKykge1xuXHRcdFx0dGhpcy5tb25zdGVyc1trZXlzW2ldXS51cGRhdGUoZHQsbm93KTtcblx0XHR9XG5cdFx0a2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuYXR0YWNrWm9uZXMpO1xuXHRcdGZvcihpPTA7aTxrZXlzLmxlbmd0aDtpKyspIHtcblx0XHRcdGlmKHRoaXMuYXR0YWNrWm9uZXNba2V5c1tpXV0udXBkYXRlKGR0LG5vdykgPT0gZmFsc2Upe1xuXHRcdFx0XHR0aGlzLmF0dGFja1pvbmVzW2tleXNbaV1dLmRlc3Ryb3koKTtcblx0XHRcdFx0ZGVsZXRlIHRoaXMuYXR0YWNrWm9uZXNba2V5c1tpXV07XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRpZihkZWltb3MuRW5naW5lLmF2YXRhciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci51cGRhdGUoZHQsbm93KSA7XG5cdFx0fVxuXG5cdFx0Ly9tb3ZlIGFuZCByZW5kZXIgZW50aXRpZXMgIVxuXHRcdGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmF2YXRhcnMpO1xuXHRcdGZvcihpPTA7aTxrZXlzLmxlbmd0aDtpKyspIHtcblx0XHRcdGF2YXRhciA9IHRoaXMuYXZhdGFyc1trZXlzW2ldXTtcblx0XHRcdGF2YXRhci5tb3ZlKCk7XG5cdFx0XHRhdmF0YXIudXBkYXRlQW5pbWF0aW9uKCk7XG5cdFx0fVxuXHRcdC8vbW92ZSBhbmQgcmVuZGVyIHByb2plY3RpbGVzICFcblx0XHRrZXlzID0gT2JqZWN0LmtleXModGhpcy5wcm9qZWN0aWxlcyk7XG5cdFx0Zm9yKGk9MDtpPGtleXMubGVuZ3RoO2krKykge1xuXHRcdFx0dGhpcy5wcm9qZWN0aWxlc1trZXlzW2ldXS5tb3ZlKCk7XG5cdFx0fVxuXHRcdC8vbW92ZSBhbmQgcmVuZGVyIGVudGl0aWVzICFcblx0XHRrZXlzID0gT2JqZWN0LmtleXModGhpcy5pdGVtcyk7XG5cdFx0Zm9yKGk9MDtpPGtleXMubGVuZ3RoO2krKykge1xuXHRcdFx0dGhpcy5pdGVtc1trZXlzW2ldXS5tb3ZlKCk7XG5cdFx0fVxuXHRcdC8vbW92ZSBhbmQgcmVuZGVyIG1vbnN0ZXJzICFcblx0XHRrZXlzID0gT2JqZWN0LmtleXModGhpcy5tb25zdGVycyk7XG5cdFx0Zm9yKGk9MDtpPGtleXMubGVuZ3RoO2krKykge1xuXHRcdFx0bW9uc3RlciA9IHRoaXMubW9uc3RlcnNba2V5c1tpXV07XG5cdFx0XHRtb25zdGVyLm1vdmUoKTtcblx0XHRcdG1vbnN0ZXIudXBkYXRlQW5pbWF0aW9uKCk7XG5cdFx0fVxuXG5cdFx0Ly9hdmF0YXIgbW92ZStyZW5kZXIrdGhpbmdzXG5cdFx0aWYoZGVpbW9zLkVuZ2luZS5hdmF0YXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIudXBkYXRlQW5pbWF0aW9uKCkgO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIubW92ZSgpIDtcblx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLmFkZGluZ1dhaXRpbmdGb3JjZXMoKSA7XG5cdFx0fVxuXHR9XG5cblx0ZGVpbW9zLnJlbmRlci5TY2VuZS5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbigpIHtcblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnN5bmNJdGVtJyx0aGlzLnN5bmNJdGVtLmJpbmQodGhpcykpIDtcblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnN5bmNBdmF0YXInLHRoaXMuc3luY0F2YXRhci5iaW5kKHRoaXMpKSA7XG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zeW5jTW9uc3RlcicsdGhpcy5zeW5jTW9uc3Rlci5iaW5kKHRoaXMpKSA7XG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5hY3Rpb25Db2xsaWRlJyx0aGlzLmVsZW1lbnRDb2xsaXNpb24uYmluZCh0aGlzKSkgO1xuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc3luY1Byb2plY3RpbGUnLHRoaXMuc3luY1Byb2plY3RpbGUuYmluZCh0aGlzKSkgO1xuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc3luY0F0dGFja1pvbmUnLHRoaXMuc3luY0F0dGFja1pvbmUuYmluZCh0aGlzKSkgO1xuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuaXRlbUdyYWJiZWQnLHRoaXMuaXRlbUdyYWJiZWQuYmluZCh0aGlzKSkgO1xuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLnJlbmRlci5wYXJzZVNjZW5lJyx0aGlzLnBhcnNlRGF0YS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGRlaW1vcy5yZW5kZXIuU2NlbmUucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24oKSB7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnN5bmNJdGVtJykgO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zeW5jQXZhdGFyJykgO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zeW5jTW9uc3RlcicpIDtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuYWN0aW9uQ29sbGlkZScpIDtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc3luY1Byb2plY3RpbGUnKSA7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnN5bmNBdHRhY2tab25lJykgO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5pdGVtR3JhYmJlZCcpIDtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLnJlbmRlci5wYXJzZVNjZW5lJykgO1xuXHR9XG5cblx0ZGVpbW9zLnJlbmRlci5TY2VuZS5wcm90b3R5cGUuYWRkSXRlbSA9IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHR0aGlzLml0ZW1zW2l0ZW0uc2VydmVyaWRdID0gaXRlbTtcblx0fVxuXG5cdGRlaW1vcy5yZW5kZXIuU2NlbmUucHJvdG90eXBlLnN5bmNBdmF0YXIgPSBmdW5jdGlvbihlKSB7XG5cdFx0Ly93YWl0IGdhbWUgc3RhcnQgYmVmb3JlIHN0YXJ0Li5cblx0XHRpZighZGVpbW9zLkVuZ2luZS5ydW5uaW5nKSByZXR1cm47XG5cblx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdHZhciBhdmF0YXI7XG5cdFx0Ly9zaSBvbiByZWNvaXQgbGEgcmVxdWV0ZSBldCBwYXMgcXVlIGwnYXZhdGFyIG9uIGwnZXh0cmFpdFxuXHRcdGlmKGVbX3RbJ01FU1NBR0UnXV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0YXZhdGFyID0gZVtfdFsnTUVTU0FHRSddXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXZhdGFyID0gZTtcblx0XHR9XG5cblx0XHR2YXIgYXZfaWQgPSBhdmF0YXJbX3QuTUVTU0FHRV9FTEVNRU5UX0lEXTtcblxuXHRcdC8vbWFrZSBzcGVjaWFsIHN5bmMgaWYgaXQgaXMgdGhlIGN1cnJlbnQgYXZhdGFyXG5cdFx0aWYoIGRlaW1vcy5FbmdpbmUuYXZhdGFyICE9PSB1bmRlZmluZWQgJiYgXG5cdFx0XHRhdl9pZCA9PT0gZGVpbW9zLkVuZ2luZS5hdmF0YXIuc2VydmVyaWRcblx0XHQpIHtcblx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLnBvc2l0aW9uU2VydmVyLnggPSBhdmF0YXJbX3QuTUVTU0FHRV9QT1NJVElPTl0ueDtcblx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLnBvc2l0aW9uU2VydmVyLnkgPSBhdmF0YXJbX3QuTUVTU0FHRV9QT1NJVElPTl0ueTtcblx0XHRcdGRlaW1vcy5FbmdpbmUuY3VycmVudExhZyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gYXZhdGFyW190Lk1FU1NBR0VfVElNRVNUQU1QXTtcblx0XHRcdGRlaW1vcy5FbmdpbmUudWkudXBkYXRlTGFnKGRlaW1vcy5FbmdpbmUuY3VycmVudExhZyk7XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5jb3JyZWN0UG9zaXRpb25XaXRoU2VydmVyKCk7XG5cblx0XHRcdC8vc3RvcCBoZXJlIGlmIHdlIGRvbid0IHdhbnQgdG8gc2hvdyBtaXJyb3Jcblx0XHRcdGlmKCBkZWltb3MuQ29uZmlnLnNob3dPd25NaXJyb3IgPT09IGZhbHNlIClcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR2YXIgbG9jYWxfYXZhdGFyID0gdGhpcy5hdmF0YXJzW2F2YXRhcltfdFsnTUVTU0FHRV9FTEVNRU5UX0lEJ11dXTtcblx0XHQvL21ha2UgaXQgaWYgbmVlZGVkXG5cdFx0aWYobG9jYWxfYXZhdGFyID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGxvY2FsX2F2YXRhciA9IHRoaXMuYXZhdGFyc1thdl9pZF0gPSBuZXcgZGVpbW9zLmVsZW1lbnQuU2VydmVyQXZhdGFyKFxuXHRcdFx0XHRhdmF0YXJbX3QuTkFNRV0sXG5cdFx0XHRcdG5ldyBvcmcuZGJ5emVyby50b29scy5WZWN0b3IoYXZhdGFyW190Lk1FU1NBR0VfUE9TSVRJT05dLngsIGF2YXRhcltfdC5NRVNTQUdFX1BPU0lUSU9OXS55KSxcblx0XHRcdFx0bmV3IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3RvcihhdmF0YXJbX3QuTUVTU0FHRV9WRUxPQ0lUWV0ueCwgYXZhdGFyW190Lk1FU1NBR0VfVkVMT0NJVFldLnkpLFxuXHRcdFx0XHRuZXcgb3JnLmRieXplcm8udG9vbHMuVmVjdG9yKGF2YXRhcltfdC5NRVNTQUdFX0FDQ0VMRVJBVElPTl0ueCwgYXZhdGFyW190Lk1FU1NBR0VfQUNDRUxFUkFUSU9OXS55KSxcblx0XHRcdFx0bmV3IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3RvcihhdmF0YXJbX3QuTUVTU0FHRV9TSVpFXS54LCBhdmF0YXJbX3QuTUVTU0FHRV9TSVpFXS55KSxcblx0XHRcdFx0YXZhdGFyW190Lk1FU1NBR0VfTUFTU10sXG5cdFx0XHRcdG5ldyBvcmcuZGJ5emVyby50b29scy5WZWN0b3IoYXZhdGFyW190Lk1FU1NBR0VfVVNFUl9JTlBVVF9WRUxPQ0lUWV0ueCwgYXZhdGFyW190Lk1FU1NBR0VfVVNFUl9JTlBVVF9WRUxPQ0lUWV0ueSksXG5cdFx0XHRcdGF2X2lkLFxuXHRcdFx0XHRhdmF0YXJbX3QuTUVTU0FHRV9ERUxUQVNIT1ddXG5cdFx0XHQpIDtcblx0XHRcdGxvY2FsX2F2YXRhci5vcmllbnRlZCA9IGF2YXRhcltfdC5NRVNTQUdFX0FOSU1BVElPTl1bX3QuTUVTU0FHRV9ESVJFQ1RJT05dO1xuXG5cdFx0XHR2YXIgc2tpbiA9IGF2YXRhcltfdC5NRVNTQUdFX1NLSU5dO1xuXG5cdFx0XHRsb2NhbF9hdmF0YXIuSFAgPSBhdmF0YXJbX3QuTUVTU0FHRV9DVVJSRU5UX0hQXTtcblx0XHRcdGxvY2FsX2F2YXRhci5tYXhIUCA9IGF2YXRhcltfdC5NRVNTQUdFX0hQXTtcblx0XHRcdGxvY2FsX2F2YXRhci5za2luID0gc2tpbjtcblx0XHRcdGxvY2FsX2F2YXRhci5pbml0QW5pbWF0aW9uKCk7XG5cblx0XHRcdGxvY2FsX2F2YXRhci5kZWx0YXNob3cgPSBhdmF0YXJbX3QuTUVTU0FHRV9ERUxUQVNIT1ddO1xuXG5cdFx0XHRsb2NhbF9hdmF0YXIuaW5pdCgpO1xuXHRcdH1cblxuXHRcdC8vc3luY2hybyBkZXMgaW5mb3Ncblx0XHRsb2NhbF9hdmF0YXIubW92ZVNwZWVkXHRcdFx0XHQ9IGF2YXRhcltfdC5NRVNTQUdFX01PVkVfU1BFRURdO1xuXHRcdGxvY2FsX2F2YXRhci5qdW1wU3BlZWRcdFx0XHRcdD0gYXZhdGFyW190Lk1FU1NBR0VfSlVNUF9TUEVFRF07XG5cdFx0bG9jYWxfYXZhdGFyLmdvaW5nRG93blx0XHRcdFx0PSBhdmF0YXJbX3QuTUVTU0FHRV9HT0lOR19ET1dOXTtcblx0XHRsb2NhbF9hdmF0YXIudmVsb2NpdHkueFx0XHRcdFx0PSBhdmF0YXJbX3QuTUVTU0FHRV9WRUxPQ0lUWV0ueDtcblx0XHRsb2NhbF9hdmF0YXIudmVsb2NpdHkueVx0XHRcdFx0PSBhdmF0YXJbX3QuTUVTU0FHRV9WRUxPQ0lUWV0ueTtcblx0XHQvLyBkbyBub3Qgc3luY2hybyBwb3NpdGlvbiBvbiBmbHkgdG8gZ2V0IHNtb290aHkgbW92ZW1lbnRcblx0XHRsb2NhbF9hdmF0YXIuaXNMYW5kZWQgPSBhdmF0YXJbX3QuTUVTU0FHRV9MQU5ERURdO1xuXHRcdGlmKGxvY2FsX2F2YXRhci5pc0xhbmRlZCA9PT0gdHJ1ZSlcblx0XHR7XG5cdFx0XHRsb2NhbF9hdmF0YXIucG9zaXRpb24ueFx0XHRcdFx0PSBhdmF0YXJbX3QuTUVTU0FHRV9QT1NJVElPTl0ueDtcblx0XHRcdGxvY2FsX2F2YXRhci5wb3NpdGlvbi55XHRcdFx0XHQ9IGF2YXRhcltfdC5NRVNTQUdFX1BPU0lUSU9OXS55O1xuXHRcdFx0bG9jYWxfYXZhdGFyLmFjY2VsZXJhdGlvbi54XHRcdFx0PSBhdmF0YXJbX3QuTUVTU0FHRV9BQ0NFTEVSQVRJT05dLng7XG5cdFx0XHRsb2NhbF9hdmF0YXIuYWNjZWxlcmF0aW9uLnlcdFx0XHQ9IGF2YXRhcltfdC5NRVNTQUdFX0FDQ0VMRVJBVElPTl0ueTtcblx0XHR9XG5cdFx0bG9jYWxfYXZhdGFyLnVzZXJJbnB1dFZlbG9jaXR5LnhcdD0gYXZhdGFyW190Lk1FU1NBR0VfVVNFUl9JTlBVVF9WRUxPQ0lUWV0ueDtcblx0XHRsb2NhbF9hdmF0YXIudXNlcklucHV0VmVsb2NpdHkueVx0PSBhdmF0YXJbX3QuTUVTU0FHRV9VU0VSX0lOUFVUX1ZFTE9DSVRZXS55O1xuXHRcdGxvY2FsX2F2YXRhci5zYXlpbmdcdFx0XHRcdFx0PSBhdmF0YXJbX3QuTUVTU0FHRV9TQVlJTkddO1xuXHRcdGxvY2FsX2F2YXRhci5pdGVtX3Nsb3RfaGVhZFx0XHRcdD0gYXZhdGFyW190LklURU1fU0xPVF9IRUFEXTtcblx0XHRsb2NhbF9hdmF0YXIuaXRlbV9zbG90X2NoZXN0XHRcdD0gYXZhdGFyW190LklURU1fU0xPVF9DSEVTVF07XG5cdFx0bG9jYWxfYXZhdGFyLml0ZW1fc2xvdF9mb290XHRcdFx0PSBhdmF0YXJbX3QuSVRFTV9TTE9UX0ZPT1RdO1xuXHRcdGxvY2FsX2F2YXRhci5pdGVtX3Nsb3RfbGVmdF9oYW5kXHQ9IGF2YXRhcltfdC5JVEVNX1NMT1RfTEVGVF9IQU5EXTtcblx0XHRsb2NhbF9hdmF0YXIuaXRlbV9zbG90X3JpZ2h0X2hhbmRcdD0gYXZhdGFyW190LklURU1fU0xPVF9SSUdIVF9IQU5EXTtcblxuXHRcdGxvY2FsX2F2YXRhci5IUCA9IGF2YXRhcltfdC5NRVNTQUdFX0NVUlJFTlRfSFBdO1xuXHRcdGxvY2FsX2F2YXRhci5tYXhIUCA9IGF2YXRhcltfdC5NRVNTQUdFX0hQXTtcblxuXHRcdGxvY2FsX2F2YXRhci5yZW5kZXIoKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGRlaW1vcy5yZW5kZXIuU2NlbmUucHJvdG90eXBlLnN5bmNJdGVtID0gZnVuY3Rpb24oZSkge1xuXHRcdC8vd2FpdCBnYW1lIHN0YXJ0IGJlZm9yZSBzdGFydC4uXG5cdFx0aWYoIWRlaW1vcy5FbmdpbmUucnVubmluZykgcmV0dXJuO1xuXG5cdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblx0XHR2YXIgaXRlbTtcblxuXHRcdC8vc2kgb24gcmVjb2l0IGxhIHJlcXVldGUgZXQgcGFzIHF1ZSBsJ2F2YXRhciBvbiBsJ2V4dHJhaXRcblx0XHRpZihlW190WydNRVNTQUdFJ11dICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGl0ZW0gPSBlW190WydNRVNTQUdFJ11dO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpdGVtID0gZTtcblx0XHR9XG5cblx0XHR2YXIgbG9jYWxfaXRlbSA9IHRoaXMuaXRlbXNbaXRlbVtfdFsnSUQnXV1dO1xuXG5cdFx0Ly9pZiBpdGVtIGlzIG5vdCBvbiB0aGUgc2NlbmUgd2UgbmFrZSBpdFxuXHRcdGlmKGxvY2FsX2l0ZW0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bG9jYWxfaXRlbSA9IG5ldyBkZWltb3MuZWxlbWVudC5JdGVtKFxuXHRcdFx0XHRpdGVtW190LklEXSxcblx0XHRcdFx0bmV3IFZlY3RvcihpdGVtW190Lk1FU1NBR0VfUE9TSVRJT05dLngsaXRlbVtfdC5NRVNTQUdFX1BPU0lUSU9OXS55KSwgLy9wb3NpdGlvblxuXHRcdFx0XHRuZXcgVmVjdG9yKGl0ZW1bX3QuTUVTU0FHRV9WRUxPQ0lUWV0ueCxpdGVtW190Lk1FU1NBR0VfVkVMT0NJVFldLnkpLCAvL3ZlbG9jaXR5XG5cdFx0XHRcdG5ldyBWZWN0b3IoaXRlbVtfdC5NRVNTQUdFX0FDQ0VMRVJBVElPTl0ueCxpdGVtW190Lk1FU1NBR0VfQUNDRUxFUkFUSU9OXS55KSwgLy9hY2NlbGVyYXRpb25cblx0XHRcdFx0bmV3IFZlY3RvcihpdGVtW190Lk1FU1NBR0VfU0laRV0ueCxpdGVtW190Lk1FU1NBR0VfU0laRV0ueSksIC8vc2l6ZVxuXHRcdFx0XHRpdGVtW190Lk1FU1NBR0VfTUFTU10sIC8vbmFtZVxuXHRcdFx0XHRpdGVtW190Lk1FU1NBR0VfRUxFTUVOVF9JRF0sIC8vbmFtZVxuXHRcdFx0XHRpdGVtW190Lk1FU1NBR0VfU0tJTl0sIC8vc2tpblxuXHRcdFx0XHRpdGVtW190Lk1FU1NBR0VfQ09MT1JdLCAvL3NraW5cblx0XHRcdFx0aXRlbVtfdC5OQU1FXSwgLy9za2luXG5cdFx0XHRcdGl0ZW1bX3QuTUVTU0FHRV9PUklFTlRBVElPTl0sIC8vc2tpblxuXHRcdFx0XHRpdGVtW190Lk1FU1NBR0VfREVMVEFTSE9XXSAvL3NraW5cblx0XHRcdCk7XG5cdFx0XHRsb2NhbF9pdGVtLmluaXQoKTtcblx0XHRcdGRlaW1vcy5FbmdpbmUuc2NlbmUuYWRkSXRlbShsb2NhbF9pdGVtKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bG9jYWxfaXRlbS5wb3NpdGlvbiAueCA9IGl0ZW1bX3QuTUVTU0FHRV9QT1NJVElPTl0ueDtcblx0XHRcdGxvY2FsX2l0ZW0ucG9zaXRpb24ueSA9IGl0ZW1bX3QuTUVTU0FHRV9QT1NJVElPTl0ueTtcblx0XHRcdGxvY2FsX2l0ZW0udmVsb2NpdHkueCA9IGl0ZW1bX3QuTUVTU0FHRV9WRUxPQ0lUWV0ueDtcblx0XHRcdGxvY2FsX2l0ZW0udmVsb2NpdHkueSA9IGl0ZW1bX3QuTUVTU0FHRV9WRUxPQ0lUWV0ueTtcblx0XHRcdGxvY2FsX2l0ZW0uYWNjZWxlcmF0aW9uLnggPSBpdGVtW190Lk1FU1NBR0VfQUNDRUxFUkFUSU9OXS54O1xuXHRcdFx0bG9jYWxfaXRlbS5hY2NlbGVyYXRpb24ueSA9IGl0ZW1bX3QuTUVTU0FHRV9BQ0NFTEVSQVRJT05dLnk7XG5cdFx0fVxuXHR9XG5cblx0ZGVpbW9zLnJlbmRlci5TY2VuZS5wcm90b3R5cGUuc3luY1Byb2plY3RpbGUgPSBmdW5jdGlvbihlKSB7XG5cdFx0Ly93YWl0IGdhbWUgc3RhcnQgYmVmb3JlIHN0YXJ0Li5cblx0XHRpZighZGVpbW9zLkVuZ2luZS5ydW5uaW5nKSByZXR1cm47XG5cblx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdHZhciBtc2c7XG5cblx0XHRpZihlW190WydNRVNTQUdFJ11dICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdG1zZyA9IGVbX3RbJ01FU1NBR0UnXV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1zZyA9IGU7XG5cdFx0fVxuXG5cdFx0Ly9tYWtlIGl0IGlmIG5lZWRlZFxuXHRcdGlmKHRoaXMucHJvamVjdGlsZXNbbXNnW190WydJRCddXV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFyIHByb2plY3RpbGUgPSBuZXcgZGVpbW9zLmVsZW1lbnQuUHJvamVjdGlsZShcblx0XHRcdFx0bXNnW190WydJRCddXSxcblx0XHRcdFx0bmV3IFZlY3Rvcihtc2dbX3RbJ01FU1NBR0VfUE9TSVRJT04nXV0ueCxtc2dbX3RbJ01FU1NBR0VfUE9TSVRJT04nXV0ueSksXG5cdFx0XHRcdG5ldyBWZWN0b3IobXNnW190WydNRVNTQUdFX1ZFTE9DSVRZJ11dLngsbXNnW190WydNRVNTQUdFX1ZFTE9DSVRZJ11dLnkpLFxuXHRcdFx0XHRuZXcgVmVjdG9yKG1zZ1tfdFsnTUVTU0FHRV9BQ0NFTEVSQVRJT04nXV0ueCxtc2dbX3RbJ01FU1NBR0VfQUNDRUxFUkFUSU9OJ11dLnkpLFxuXHRcdFx0XHRtc2dbX3RbJ01FU1NBR0VfU0laRSddXSxcblx0XHRcdFx0bXNnW190WydNRVNTQUdFX01BU1MnXV0sXG5cdFx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9FTEVNRU5UX0lEJ11dLFxuXHRcdFx0XHRtc2dbX3RbJ01FU1NBR0VfU0tJTiddXSxcblx0XHRcdFx0bXNnW190WydNRVNTQUdFX0NPTE9SJ11dLFxuXHRcdFx0XHRtc2dbX3RbJ01FU1NBR0VfREFNQUdFJ11dLFxuXHRcdFx0XHRtc2dbX3RbJ01FU1NBR0VfT1JJRU5UQVRJT04nXV0sXG5cdFx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9PV05FUiddXSxcblx0XHRcdFx0bXNnW190WydNRVNTQUdFX0RFTFRBU0hPVyddXVxuXHRcdFx0KTtcblx0XHRcdHByb2plY3RpbGUuaW5pdCgpO1xuXHRcdFx0cHJvamVjdGlsZS5uYW1lID0gJ1Byb2plY3RpbGUgJyttc2dbX3RbJ0lEJ11dO1xuXHRcdFx0dGhpcy5wcm9qZWN0aWxlc1ttc2dbX3RbJ0lEJ11dXSA9IHByb2plY3RpbGU7XG5cdFx0XHRpZih0aGlzLmF2YXRhcnNbbXNnW190WydNRVNTQUdFX09XTkVSJ11dXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuYXZhdGFyc1ttc2dbX3RbJ01FU1NBR0VfT1dORVInXV1dLmxhc3RBdHRhY2sgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHByb2plY3RpbGVcdFx0XHRcdD0gdGhpcy5wcm9qZWN0aWxlc1ttc2dbX3RbJ0lEJ11dXTtcblx0XHRcdHByb2plY3RpbGUudmVsb2NpdHkueFx0XHQ9IG1zZ1tfdC5NRVNTQUdFX1ZFTE9DSVRZXS54O1xuXHRcdFx0cHJvamVjdGlsZS52ZWxvY2l0eS55XHRcdD0gbXNnW190Lk1FU1NBR0VfVkVMT0NJVFldLnk7XG5cdFx0XHRwcm9qZWN0aWxlLnBvc2l0aW9uLnhcdFx0PSBtc2dbX3QuTUVTU0FHRV9QT1NJVElPTl0ueDtcblx0XHRcdHByb2plY3RpbGUucG9zaXRpb24ueVx0XHQ9IG1zZ1tfdC5NRVNTQUdFX1BPU0lUSU9OXS55O1xuXHRcdFx0cHJvamVjdGlsZS5hY2NlbGVyYXRpb24ueFx0PSBtc2dbX3QuTUVTU0FHRV9BQ0NFTEVSQVRJT05dLng7XG5cdFx0XHRwcm9qZWN0aWxlLmFjY2VsZXJhdGlvbi55XHQ9IG1zZ1tfdC5NRVNTQUdFX0FDQ0VMRVJBVElPTl0ueTtcblx0XHRcdHByb2plY3RpbGUub3JpZW50YXRpb25cdFx0PSBtc2dbX3QuTUVTU0FHRV9PUklFTlRBVElPTl07XG5cdFx0fVxuXHR9XG5cblx0ZGVpbW9zLnJlbmRlci5TY2VuZS5wcm90b3R5cGUuc3luY01vbnN0ZXIgPSBmdW5jdGlvbihlKSB7XG5cdFx0Ly93YWl0IGdhbWUgc3RhcnQgYmVmb3JlIHN0YXJ0Li5cblx0XHRpZighZGVpbW9zLkVuZ2luZS5ydW5uaW5nKSByZXR1cm47XG5cblx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdHZhciBtc2c7XG5cblx0XHRpZihlW190WydNRVNTQUdFJ11dICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdG1zZyA9IGVbX3RbJ01FU1NBR0UnXV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1zZyA9IGU7XG5cdFx0fVxuXG5cdFx0Ly9tYWtlIGl0IGlmIG5lZWRlZFxuXHRcdGlmKHRoaXMubW9uc3RlcnNbbXNnW190WydJRCddXV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dmFyIG1vbnN0ZXIgPSBuZXcgZGVpbW9zLmVsZW1lbnQuTW9uc3Rlcihcblx0XHRcdFx0bXNnW190WydJRCddXSxcblx0XHRcdFx0bmV3IFZlY3Rvcihtc2dbX3RbJ01FU1NBR0VfUE9TSVRJT04nXV0ueCxtc2dbX3RbJ01FU1NBR0VfUE9TSVRJT04nXV0ueSksXG5cdFx0XHRcdG5ldyBWZWN0b3IobXNnW190WydNRVNTQUdFX1ZFTE9DSVRZJ11dLngsbXNnW190WydNRVNTQUdFX1ZFTE9DSVRZJ11dLnkpLFxuXHRcdFx0XHRuZXcgVmVjdG9yKG1zZ1tfdFsnTUVTU0FHRV9BQ0NFTEVSQVRJT04nXV0ueCxtc2dbX3RbJ01FU1NBR0VfQUNDRUxFUkFUSU9OJ11dLnkpLFxuXHRcdFx0XHRtc2dbX3RbJ01FU1NBR0VfU0laRSddXSxcblx0XHRcdFx0bXNnW190WydNRVNTQUdFX01BU1MnXV0sXG5cdFx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9FTEVNRU5UX0lEJ11dLFxuXHRcdFx0XHRtc2dbX3RbJ01FU1NBR0VfU0tJTiddXSxcblx0XHRcdFx0bXNnW190WydNRVNTQUdFX0NPTE9SJ11dLFxuXHRcdFx0XHRtc2dbX3RbJ05BTUUnXV0sXG5cdFx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9EQU1BR0UnXV0sXG5cdFx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9PUklFTlRBVElPTiddXSxcblx0XHRcdFx0bXNnW190WydNRVNTQUdFX0RFTFRBU0hPVyddXVxuXHRcdFx0KTtcblx0XHRcdG1vbnN0ZXIuSFAgPSBtc2dbX3RbJ01FU1NBR0VfQ1VSUkVOVF9IUCddXTtcblx0XHRcdG1vbnN0ZXIubWF4SFAgPSBtc2dbX3RbJ01FU1NBR0VfSFAnXV07XG5cdFx0XHRtb25zdGVyLmluaXQoKTtcblx0XHRcdHRoaXMubW9uc3RlcnNbbXNnW190WydJRCddXV0gPSBtb25zdGVyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgbW9uc3Rlclx0XHRcdFx0PSB0aGlzLm1vbnN0ZXJzW21zZ1tfdFsnSUQnXV1dO1xuXHRcdFx0bW9uc3Rlci52ZWxvY2l0eS54XHRcdD0gbXNnW190Lk1FU1NBR0VfVkVMT0NJVFldLng7XG5cdFx0XHRtb25zdGVyLnZlbG9jaXR5LnlcdFx0PSBtc2dbX3QuTUVTU0FHRV9WRUxPQ0lUWV0ueTtcblx0XHRcdG1vbnN0ZXIucG9zaXRpb24ueFx0XHQ9IG1zZ1tfdC5NRVNTQUdFX1BPU0lUSU9OXS54O1xuXHRcdFx0bW9uc3Rlci5wb3NpdGlvbi55XHRcdD0gbXNnW190Lk1FU1NBR0VfUE9TSVRJT05dLnk7XG5cdFx0XHRtb25zdGVyLmFjY2VsZXJhdGlvbi54XHQ9IG1zZ1tfdC5NRVNTQUdFX0FDQ0VMRVJBVElPTl0ueDtcblx0XHRcdG1vbnN0ZXIuYWNjZWxlcmF0aW9uLnlcdD0gbXNnW190Lk1FU1NBR0VfQUNDRUxFUkFUSU9OXS55O1xuXHRcdFx0bW9uc3Rlci5vcmllbnRhdGlvblx0XHQ9IG1zZ1tfdC5NRVNTQUdFX09SSUVOVEFUSU9OXTtcblx0XHRcdG1vbnN0ZXIuSFAgPSBtc2dbX3RbJ01FU1NBR0VfQ1VSUkVOVF9IUCddXTtcblx0XHRcdG1vbnN0ZXIubWF4SFAgPSBtc2dbX3RbJ01FU1NBR0VfSFAnXV07XG5cdFx0fVxuXHR9XG5cblx0ZGVpbW9zLnJlbmRlci5TY2VuZS5wcm90b3R5cGUuc3luY0F0dGFja1pvbmUgPSBmdW5jdGlvbihlKSB7XG5cdFx0Ly93YWl0IGdhbWUgc3RhcnQgYmVmb3JlIHN0YXJ0Li5cblx0XHRpZighZGVpbW9zLkVuZ2luZS5ydW5uaW5nKSByZXR1cm47XG5cblx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdHZhciBtc2c7XG5cblx0XHRpZihlW190WydNRVNTQUdFJ11dICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdG1zZyA9IGVbX3RbJ01FU1NBR0UnXV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1zZyA9IGU7XG5cdFx0fVxuXG5cdFx0Ly9hZGQgaXQgaWYgbmVlZGVkXG5cdFx0dmFyIGF0dGFja1pvbmUgPSBuZXcgZGVpbW9zLmVsZW1lbnQuQXR0YWNrWm9uZShcblx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9FTEVNRU5UX0lEJ11dLFxuXHRcdFx0bXNnW190WydNRVNTQUdFX1BPU0lUSU9OJ11dLFxuXHRcdFx0bXNnW190WydNRVNTQUdFX1NJWkUnXV0sXG5cdFx0XHRtc2dbX3RbJ01FU1NBR0VfT1dORVInXV0sXG5cdFx0XHRtc2dbX3RbJ01FU1NBR0VfRFVSQVRJT04nXV1cblx0XHQpO1xuXHRcdHRoaXMuYXR0YWNrWm9uZXNbYXR0YWNrWm9uZS5pZF0gPSBhdHRhY2tab25lO1xuXG5cdFx0aWYodGhpcy5hdmF0YXJzW21zZ1tfdFsnTUVTU0FHRV9PV05FUiddXV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5hdmF0YXJzW21zZ1tfdFsnTUVTU0FHRV9PV05FUiddXV0ubGFzdEF0dGFjayA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdH1cblxuXHRcdGF0dGFja1pvbmUucmVuZGVyKCk7XG5cdH1cblxuXHRkZWltb3MucmVuZGVyLlNjZW5lLnByb3RvdHlwZS5pdGVtR3JhYmJlZCA9IGZ1bmN0aW9uKGUpIHtcblx0XHQvL3dhaXQgZ2FtZSBzdGFydCBiZWZvcmUgc3RhcnQuLlxuXHRcdGlmKCFkZWltb3MuRW5naW5lLnJ1bm5pbmcpIHJldHVybjtcblxuXHRcdC8vY2xlYXIgaXRlbVxuXHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0dmFyIGl0ZW0gPSB0aGlzLml0ZW1zW2VbX3RbJ01FU1NBR0UnXV1bX3RbJ01FU1NBR0VfSVRFTSddXV07XG5cdFx0aXRlbS5jbGVhbkRvbSgpO1xuXHRcdGRlbGV0ZSB0aGlzLml0ZW1zW2l0ZW0uc2VydmVyaWRdO1xuXHRcdC8vVE9ETyBhZGQgaXQgdG8gbGlzdCBvZiBpdGVtIGluIGNsaWVudCBzaWRlXG5cblx0XHQvL2NvcnJlY3QgYXZhdGFyIHBvc2l0aW9uXG5cdFx0dmFyIGF2X2lkID0gZVtfdFsnTUVTU0FHRSddXVtfdFsnTUVTU0FHRV9UTyddXTtcblx0XHR2YXIgYXZhdGFyID0gbnVsbDtcblx0XHRpZiggZGVpbW9zLkVuZ2luZS5hdmF0YXIgIT09IHVuZGVmaW5lZCAmJiBcblx0XHRcdGF2X2lkID09PSBkZWltb3MuRW5naW5lLmF2YXRhci5zZXJ2ZXJpZFxuXHRcdCkge1xuXHRcdFx0YXZhdGFyID0gZGVpbW9zLkVuZ2luZS5hdmF0YXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF2YXRhciA9IGRlaW1vcy5FbmdpbmUuc2NlbmUuYXZhdGFyc1thdl9pZF07XG5cdFx0fVxuXHRcdGF2YXRhci5wb3NpdGlvbi54ID0gZVtfdFsnTUVTU0FHRSddXVtfdFsnTUVTU0FHRV9UT19QT1NJVElPTiddXS54O1xuXHRcdGF2YXRhci5wb3NpdGlvbi55ID0gZVtfdFsnTUVTU0FHRSddXVtfdFsnTUVTU0FHRV9UT19QT1NJVElPTiddXS55O1xuXHRcdGF2YXRhci5yZW5kZXIoKTtcblx0XHRhdmF0YXIub25Nb3ZlKCk7XG5cdH1cblxuXHRkZWltb3MucmVuZGVyLlNjZW5lLnByb3RvdHlwZS5kZXN0cm95UHJvamVjdGlsZSA9IGZ1bmN0aW9uKHByb2plY3RpbGUpIHtcblx0XHQvL2lmIGV4c2lzdHNcblx0XHRpZighIXRoaXMucHJvamVjdGlsZXNbcHJvamVjdGlsZS5zZXJ2ZXJpZF0pIHtcblx0XHRcdHRoaXMucHJvamVjdGlsZXNbcHJvamVjdGlsZS5zZXJ2ZXJpZF0uY2xlYW5Eb20oKTtcblx0XHRcdGRlbGV0ZSB0aGlzLnByb2plY3RpbGVzW3Byb2plY3RpbGUuc2VydmVyaWRdO1xuXHRcdH1cblx0fVxuXG5cdGRlaW1vcy5yZW5kZXIuU2NlbmUucHJvdG90eXBlLmVsZW1lbnRDb2xsaXNpb24gPSBmdW5jdGlvbihlKSB7XG5cdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblx0XHR2YXIgbWVzc2FnZSA9IGVbX3RbJ01FU1NBR0UnXV07XG5cdFx0dmFyIGZyb21FbGVtZW50ID0gbnVsbDtcblx0XHR2YXIgdG9FbGVtZW50ID0gbnVsbDtcblx0XHR2YXIgaXNEZWFkID0gbWVzc2FnZVtfdC5NRVNTQUdFX0lTX0RFQURdO1xuXHRcdHN3aXRjaChtZXNzYWdlW190Lk1FU1NBR0VfRlJPTV9UWVBFXSlcblx0XHR7XG5cdFx0XHRjYXNlIF90Lk1FU1NBR0VfTU9OU1RFUjpcblx0XHRcdFx0ZnJvbUVsZW1lbnQgPSB0aGlzLm1vbnN0ZXJzW21lc3NhZ2VbX3QuTUVTU0FHRV9GUk9NXV07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBfdC5NRVNTQUdFX0lURU06XG5cdFx0XHRcdGZyb21FbGVtZW50ID0gdGhpcy5pdGVtc1ttZXNzYWdlW190Lk1FU1NBR0VfRlJPTV1dO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgX3QuTUVTU0FHRV9QUk9KRUNUSUxFOlxuXHRcdFx0XHRmcm9tRWxlbWVudCA9IHRoaXMucHJvamVjdGlsZXNbbWVzc2FnZVtfdC5NRVNTQUdFX0ZST01dXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIF90Lk1FU1NBR0VfQVZBVEFSOlxuXHRcdFx0XHR2YXIgaWQgPSBtZXNzYWdlW190Lk1FU1NBR0VfRlJPTV07XG5cdFx0XHRcdGlmKGlkID09PSBkZWltb3MuRW5naW5lLmF2YXRhci5zZXJ2ZXJpZCkge1xuXHRcdFx0XHRcdGZyb21FbGVtZW50ID0gZGVpbW9zLkVuZ2luZS5hdmF0YXI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZnJvbUVsZW1lbnQgPSB0aGlzLmF2YXRhcnNbaWRdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRpZighZnJvbUVsZW1lbnQpIHJldHVybjtcblxuXHRcdHN3aXRjaChtZXNzYWdlW190Lk1FU1NBR0VfVE9fVFlQRV0pXG5cdFx0e1xuXHRcdFx0Y2FzZSBfdC5NRVNTQUdFX01PTlNURVI6XG5cdFx0XHRcdHRvRWxlbWVudCA9IHRoaXMubW9uc3RlcnNbbWVzc2FnZVtfdC5NRVNTQUdFX1RPXV07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBfdC5NRVNTQUdFX0lURU06XG5cdFx0XHRcdHRvRWxlbWVudCA9IHRoaXMuaXRlbXNbbWVzc2FnZVtfdC5NRVNTQUdFX1RPXV07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBfdC5NRVNTQUdFX1BST0pFQ1RJTEU6XG5cdFx0XHRcdHRvRWxlbWVudCA9IHRoaXMucHJvamVjdGlsZXNbbWVzc2FnZVtfdC5NRVNTQUdFX1RPXV07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBfdC5NRVNTQUdFX0FWQVRBUjpcblx0XHRcdFx0dmFyIGlkID0gbWVzc2FnZVtfdC5NRVNTQUdFX1RPXTtcblx0XHRcdFx0aWYoaWQgPT09IGRlaW1vcy5FbmdpbmUuYXZhdGFyLnNlcnZlcmlkKSB7XG5cdFx0XHRcdFx0dG9FbGVtZW50ID0gZGVpbW9zLkVuZ2luZS5hdmF0YXI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dG9FbGVtZW50ID0gdGhpcy5hdmF0YXJzW2lkXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0aWYoIXRvRWxlbWVudCkgcmV0dXJuO1xuXG5cdFx0ZnJvbUVsZW1lbnQucG9zaXRpb24ueCA9IG1lc3NhZ2VbX3QuTUVTU0FHRV9GUk9NX1BPU0lUSU9OXS54O1xuXHRcdGZyb21FbGVtZW50LnBvc2l0aW9uLnkgPSBtZXNzYWdlW190Lk1FU1NBR0VfRlJPTV9QT1NJVElPTl0ueTtcblx0XHR0b0VsZW1lbnQucG9zaXRpb24ueCA9IG1lc3NhZ2VbX3QuTUVTU0FHRV9UT19QT1NJVElPTl0ueDtcblx0XHR0b0VsZW1lbnQucG9zaXRpb24ueSA9IG1lc3NhZ2VbX3QuTUVTU0FHRV9UT19QT1NJVElPTl0ueTtcblx0XHRmcm9tRWxlbWVudC5yZW5kZXIoKTtcblx0XHR0b0VsZW1lbnQucmVuZGVyKCk7XG5cblx0XHR0b0VsZW1lbnQudG91Y2hlZChmcm9tRWxlbWVudCk7XG5cdFx0aWYoaXNEZWFkKSB7XG5cdFx0XHR0b0VsZW1lbnQuZGllKCk7XG5cdFx0fVxuXHR9XG5cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIEVsZW1lbnQgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTQvMDMvMjJcbiAqIEBkZXNjcmlwdGlvbiA6IEVsZW1lbnQgbW9kZWxcbiAqXG4gKiovXG5cbihmdW5jdGlvbihkZWltb3MsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0dmFyIFZlY3RvciA9IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3Rvcjtcblx0ZGVpbW9zLmVsZW1lbnQgPSBkZWltb3MuZWxlbWVudCB8fCB7fTtcblxuXHQvKipcblx0ICogQXZhdGFyIGNvbnN0cnVjdG9yXG5cdCAqXG5cdCAqKi9cblx0ZGVpbW9zLmVsZW1lbnQuRWxlbWVudCA9IGZ1bmN0aW9uIChwb3NpdGlvbixzaXplLHNlcnZlcmlkLGRlbHRhc2hvdykge1xuXHRcdHRoaXMuY2xhc3MgPSAnZWxlbWVudCc7XG5cdFx0dGhpcy5uYW1lID0gbnVsbDtcblx0XHR0aGlzLm5hbWVXaWR0aCA9IG51bGw7XG5cdFx0dGhpcy5uYW1lSGVpZ2h0ID0gbnVsbDtcblx0XHR0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG5cdFx0dGhpcy52ZWxvY2l0eSA9IG5ldyBvcmcuZGJ5emVyby50b29scy5WZWN0b3IoMCwwKTtcblx0XHR0aGlzLmFjY2VsZXJhdGlvbiA9IG5ldyBvcmcuZGJ5emVyby50b29scy5WZWN0b3IoMCwwKTtcblx0XHR0aGlzLndpZHRoID0gc2l6ZS54O1xuXHRcdHRoaXMuaGVpZ2h0ID0gc2l6ZS55O1xuXHRcdHRoaXMubGFzdFVwZGF0ZSA9IG51bGw7XG5cdFx0dGhpcy5tYXNzID0gMTtcblx0XHR0aGlzLnRvTW92ZSA9IFZlY3Rvci5aZXJvKCk7XG5cdFx0dGhpcy5kZWx0YXNob3cgPSBkZWx0YXNob3c7IC8vdHJhbnNsYXRvaW4gdmVjdG9yIGFwcGxpZWQgdG8gdGhlIHJlbmRlclxuXHRcdHRoaXMuZGljdENsYXNzID0ge307IC8vZGljdG9ubmFpcnkgbGlua2luZyBET00gY3NzIGNsYXNzIGFuZCBzdGF0ZXNcblx0XHR0aGlzLnBvc2l0aW9uU2VydmVyID0ge3g6MCx5OjB9O1xuXHRcdHRoaXMuYXR0YWNrUmF0ZSA9IDEwMDtcblx0XHR0aGlzLmluTW92ZSA9IGZhbHNlO1xuXHRcdHRoaXMuaXNMYW5kZWQgPSBmYWxzZTtcblx0XHR0aGlzLmxhbmRlZEJsb2NrID0gbnVsbDtcblx0XHR0aGlzLnNraW4gPSBudWxsO1xuXHRcdHRoaXMuZ29pbmdEb3duID0gZmFsc2U7XG5cdFx0dGhpcy5vcmllbnRlZCA9ICdyaWdodCc7XG5cdFx0dGhpcy5zZXJ2ZXJpZCA9IHNlcnZlcmlkO1xuXHRcdHRoaXMuY3VycmVudEFjdGlvbiA9IG51bGw7XG5cdFx0dGhpcy5kb21FbGVtTmFtZSA9IG51bGw7XG5cdFx0dGhpcy5kb21FbGVtSFAgPSBudWxsO1xuXHRcdHRoaXMuc3BlYWtlciA9IG51bGw7XG5cdFx0dGhpcy5kYW1hZ2UgPSBudWxsO1xuXHRcdHRoaXMucHJvamVjdGlsZVRyYW5zbGF0aW9uID0ge307XG5cdFx0dGhpcy5wcm9qZWN0aWxlVHJhbnNsYXRpb24ubGVmdCA9IHsneCc6MCwneSc6MH07XG5cdFx0dGhpcy5wcm9qZWN0aWxlVHJhbnNsYXRpb24ucmlnaHQgPSB7J3gnOjAsJ3knOjB9O1xuXHRcdC8vbWFwIHRvIHNldCB3aXRoIHdoYXQgZWxlbWVudHMgYXJlIGNvbGxpZGFibGVcblx0XHR0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkID0ge307XG5cblx0XHR0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkWydibG9ja3MnXSA9IHRydWU7XG5cdFx0dGhpcy5jb2xsaXNpb25UeXBlRW5hYmxlZFsnZ2FtZUFyZWEnXSA9IHRydWU7XG5cdFx0dGhpcy5jb2xsaXNpb25UeXBlRW5hYmxlZFsncGxhdGVmb3JtZSddID0gdHJ1ZTtcblxuXHRcdC8vb2JqZWN0IGNvbGxpc2lvbnMgYXJlIG1hbmFnZWQgYnkgc2VydmVyXG5cdFx0dGhpcy5jb2xsaXNpb25UeXBlRW5hYmxlZFsnYm9udXMnXSA9IGZhbHNlO1xuXHRcdHRoaXMuY29sbGlzaW9uVHlwZUVuYWJsZWRbJ3Byb2plY3RpbGVzJ10gPSBmYWxzZTtcblx0XHR0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkWydtb25zdGVycyddID0gZmFsc2U7XG5cdFx0dGhpcy5jb2xsaXNpb25UeXBlRW5hYmxlZFsnYXZhdGFycyddID0gZmFsc2U7XG5cdFx0dGhpcy5tYXhIUCA9IG51bGw7XG5cdFx0dGhpcy5IUCA9IG51bGw7XG5cblx0XHQvL3N0b3JlIGluZm9ybWF0aW9uIGZvciBjb2xsaXNpb25zXG5cdFx0dGhpcy52ZXJ0ZXhUTCA9IG5ldyBWZWN0b3IodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xuXHRcdHRoaXMudmVydGV4QkwgPSBuZXcgVmVjdG9yKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQpO1xuXHRcdHRoaXMudmVydGV4VFIgPSBuZXcgVmVjdG9yKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgsIHRoaXMucG9zaXRpb24ueSk7XG5cdFx0dGhpcy52ZXJ0ZXhCUiA9IG5ldyBWZWN0b3IodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCwgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQpO1xuXG5cdFx0dGhpcy5za2lwTmV4dFVwZGF0ZUFuZE1vdmUgPSBmYWxzZTtcblx0fVxuXG5cblx0ZGVpbW9zLmVsZW1lbnQuRWxlbWVudC5wcm90b3R5cGUgPSB7XG5cdFx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL21ha2UgZG9tIGVsZW1lbnRcblx0XHRcdHZhciBkb21fZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRkb21fZWxlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLHRoaXMuZG9tSWQpO1xuXG5cdFx0XHRkb21fZWxlbS5zdHlsZS53aWR0aCA9IHBhcnNlSW50KHRoaXMud2lkdGggKyB0aGlzLmRlbHRhc2hvdy54KjIpKydweCc7XG5cdFx0XHRkb21fZWxlbS5zdHlsZS5oZWlnaHQgID0gcGFyc2VJbnQodGhpcy5oZWlnaHQgKyB0aGlzLmRlbHRhc2hvdy55KjIpKydweCc7XG5cblx0XHRcdGRvbV9lbGVtLnN0eWxlLmRpc3BsYXkgID0gJ2Jsb2NrJztcblx0XHRcdGRvbV9lbGVtLnN0eWxlLnBvc2l0aW9uICA9ICdhYnNvbHV0ZSc7XG5cblx0XHRcdHZhciB0cmFuc2xhdGlvbiA9IFwidHJhbnNsYXRlM2QoXCIrKHRoaXMucG9zaXRpb24ueC10aGlzLmRlbHRhc2hvdy54KStcInB4LFwiKyh0aGlzLnBvc2l0aW9uLnktdGhpcy5kZWx0YXNob3cueSkrXCJweCwwcHgpXCI7XG5cdFx0XHRkb21fZWxlbS5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2xhdGlvbjtcblx0XHRcdGRvbV9lbGVtLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zbGF0aW9uO1xuXG5cdFx0XHRkZWltb3MuRW5naW5lLnpvbmUuYXJlYS5hcHBlbmRDaGlsZChkb21fZWxlbSk7XG5cblx0XHRcdHRoaXMuZG9tRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZG9tSWQpO1xuXHRcdFx0dGhpcy5kb21FbGVtV2lkdGggPSB0aGlzLmRvbUVsZW0ub2Zmc2V0V2lkdGg7Ly91c2VmdWxsIGZvciBwb3NpdGlvbm5pbmcgbmFtZSBhbmQgc3BlYWtlclxuXHRcdFx0dGhpcy5kb21FbGVtSGVpZ2h0ID0gdGhpcy5kb21FbGVtLm9mZnNldEhlaWdodDsvL3VzZWZ1bGwgZm9yIHBvc2l0aW9ubmluZyBuYW1lIGFuZCBzcGVha2VyXG5cblx0XHRcdHRoaXMuaW5pdEFuaW1hdGlvbigpO1xuXG5cdFx0XHRpZighIXRoaXMuSFApIHtcblx0XHRcdFx0dGhpcy5pbml0SFAoKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0ZGVzdHJveTogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLmNsZWFuRG9tKCk7XG5cdFx0fSxcblxuXHRcdGluaXRBbmltYXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5kaWN0Q2xhc3NbJ3dhbGtpbmdfcmlnaHQnXVx0XHQ9IHRoaXMuc2tpbisnQW5pbWF0aW9uV2Fsa2luZ1JpZ2h0Jztcblx0XHRcdHRoaXMuZGljdENsYXNzWyd3YWxraW5nX2xlZnQnXVx0XHQ9IHRoaXMuc2tpbisnQW5pbWF0aW9uV2Fsa2luZ0xlZnQnO1xuXHRcdFx0dGhpcy5kaWN0Q2xhc3NbJ3N0YW5kaW5nX3JpZ2h0J11cdD0gdGhpcy5za2luKydBbmltYXRpb25TdGFuZGluZ1JpZ2h0Jztcblx0XHRcdHRoaXMuZGljdENsYXNzWydzdGFuZGluZ19sZWZ0J11cdFx0PSB0aGlzLnNraW4rJ0FuaW1hdGlvblN0YW5kaW5nTGVmdCc7XG5cdFx0XHR0aGlzLmRpY3RDbGFzc1snZmx5aW5nX3JpZ2h0J11cdFx0PSB0aGlzLnNraW4rJ0FuaW1hdGlvbkZseWluZ1JpZ2h0Jztcblx0XHRcdHRoaXMuZGljdENsYXNzWydmbHlpbmdfbGVmdCddXHRcdD0gdGhpcy5za2luKydBbmltYXRpb25GbHlpbmdMZWZ0Jztcblx0XHRcdHRoaXMuZGljdENsYXNzWydzaG9vdGluZ19yaWdodCddXHQ9IHRoaXMuc2tpbisnQW5pbWF0aW9uU2hvb3RpbmdSaWdodCc7XG5cdFx0XHR0aGlzLmRpY3RDbGFzc1snc2hvb3RpbmdfbGVmdCddXHRcdD0gdGhpcy5za2luKydBbmltYXRpb25TaG9vdGluZ0xlZnQnO1xuXHRcdFx0dGhpcy5kaWN0Q2xhc3NbJ2Zyb250J11cdFx0XHRcdD0gdGhpcy5za2luKydBbmltYXRpb25Gcm9udCc7XG5cdFx0fSxcblxuXHRcdGdldERvbUVsZW06IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZG9tRWxlbTtcblx0XHR9LFxuXG5cdFx0dXBkYXRlOiBmdW5jdGlvbihkdCwgbm93KSB7XG5cdFx0XHRpZighIXRoaXMuc2tpcE5leHRVcGRhdGVBbmRNb3ZlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly9mbHkgaWYgd2UgaGF2ZSBhIG5lZ2F0aXZlIHZlcnRpY2FsIGRlcGxhY2VtZW50IE9SIHdlIGxlYXZlIG91ciBibG9ja3Ncblx0XHRcdGlmKCh0aGlzLmlzTGFuZGVkICYmIHRoaXMudmVsb2NpdHkueSA8IDApIHx8XG5cdFx0XHRcdCghIXRoaXMubGFuZGVkQmxvY2sgJiYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPCB0aGlzLmxhbmRlZEJsb2NrLnZlcnRleFRMLnggfHwgdGhpcy5wb3NpdGlvbi54ID4gdGhpcy5sYW5kZWRCbG9jay52ZXJ0ZXhUUi54ICkpKSB7XG5cdFx0XHRcdHRoaXMudW5sYW5kZWQoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly9hZGRpbmcgZ3Jhdml0eSBpZiB3ZSBhcmUgbm90IGxhbmRlZCBvciBvdXRzaWRlIG9mIG91ciBsYW5kZWQgYmxvY2tcblx0XHRcdGlmKCF0aGlzLmlzTGFuZGVkKSB7XG5cdFx0XHRcdHRoaXMuYWNjZWxlcmF0aW9uID0gZGVpbW9zLnBoeXNpYy5HcmF2aXR5LmR1cGxpY2F0ZSgpO1xuXHRcdFx0XHR0aGlzLmFjY2VsZXJhdGlvbi55ICo9ICB0aGlzLm1hc3M7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmFjY2VsZXJhdGlvbi55ID0gMDtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHJldHVybkludGVncmF0ZSA9IG9yZy5kYnl6ZXJvLnRvb2xzLlBoeXNpY3MuaW50ZWdyYXRlS000KHRoaXMucG9zaXRpb24sdGhpcy52ZWxvY2l0eSx0aGlzLmFjY2VsZXJhdGlvbixkdC8xMDAwKTtcblx0XHRcdHRoaXMudG9Nb3ZlLnggKz0gcmV0dXJuSW50ZWdyYXRlLmR4Lng7XG5cdFx0XHR0aGlzLnRvTW92ZS55ICs9IHJldHVybkludGVncmF0ZS5keC55O1xuXHRcdFx0dGhpcy52ZWxvY2l0eS54ICs9IHJldHVybkludGVncmF0ZS5kdi54O1xuXHRcdFx0dGhpcy52ZWxvY2l0eS55ICs9IHJldHVybkludGVncmF0ZS5kdi55O1xuXHRcdFx0dGhpcy50b01vdmUueCArPSAodGhpcy52ZWxvY2l0eS54ICogZHQvMTAwMCk7XG5cdFx0XHR0aGlzLnRvTW92ZS55ICs9ICh0aGlzLnZlbG9jaXR5LnkgKiBkdC8xMDAwKTtcblxuXHRcdFx0dGhpcy50b01vdmUueCA9IHRoaXMudG9Nb3ZlLng7XG5cdFx0XHR0aGlzLnRvTW92ZS55ID0gdGhpcy50b01vdmUueTtcblxuXHRcdFx0dGhpcy5sYXN0VXBkYXRlID0gbm93O1xuXHRcdH0sXG5cblx0XHRtb3ZlOiBmdW5jdGlvbigpIHtcblx0XHRcdGlmKCEhdGhpcy5za2lwTmV4dFVwZGF0ZUFuZE1vdmUpIHtcblx0XHRcdFx0dGhpcy5za2lwTmV4dFVwZGF0ZUFuZE1vdmUgPSBmYWxzZTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdGhpcy50b01vdmUueCA9PT0gMCAmJiB0aGlzLnRvTW92ZS55ID09PTApIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50QWN0aW9uID0gJ3N0YW5kJztcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGN1cnJlbnRNb3ZlbWVudCA9IHRoaXMudG9Nb3ZlO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaW5pdGlhbFBvc2l0aW9uID0ge3g6dGhpcy5wb3NpdGlvbi54LHk6dGhpcy5wb3NpdGlvbi55fTtcblx0XHRcdHZhciBkb21FbGVtID0gdGhpcy5kb21FbGVtO1xuXG5cdFx0XHQvL21vdmUgfn5+fn5cblx0XHRcdHRoaXMucG9zaXRpb24uYWRkKGN1cnJlbnRNb3ZlbWVudCk7XG5cblx0XHRcdC8vY2hlY2sgY29sbGlzaW9uIHdpdGggWm9uZVxuXHRcdFx0aWYodGhpcy5wb3NpdGlvbi54IDwgMCkge1xuXHRcdFx0XHR0aGlzLnBvc2l0aW9uLnggPSAwO1xuXHRcdFx0XHR0aGlzLm9uQXJlYUNvbGxpc2lvbkxlZnQoKTtcblx0XHRcdH1cblx0XHRcdGlmKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiBkZWltb3MuRW5naW5lLnpvbmUud2lkdGgpIHtcblx0XHRcdFx0dGhpcy5wb3NpdGlvbi54ID0gZGVpbW9zLkVuZ2luZS56b25lLndpZHRoIC0gdGhpcy53aWR0aDtcblx0XHRcdFx0dGhpcy5vbkFyZWFDb2xsaXNpb25SaWdodCgpO1xuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5wb3NpdGlvbi55IDwgMCkge1xuXHRcdFx0XHR0aGlzLnBvc2l0aW9uLnkgPSAwO1xuXHRcdFx0XHR0aGlzLm9uQXJlYUNvbGxpc2lvblRvcCgpO1xuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgPiBkZWltb3MuRW5naW5lLnpvbmUuaGVpZ2h0KSB7XG5cdFx0XHRcdHRoaXMucG9zaXRpb24ueSA9IGRlaW1vcy5FbmdpbmUuem9uZS5oZWlnaHQgLSB0aGlzLmhlaWdodDtcblx0XHRcdFx0dGhpcy5vbkFyZWFDb2xsaXNpb25Cb3R0b20oKTtcblx0XHRcdH1cblxuXHRcdFx0Ly9jb2xpc2lvbiB3aXRoIGJsb2Fja3Ncblx0XHRcdGlmKHRoaXMuY29sbGlzaW9uVHlwZUVuYWJsZWRbJ2Jsb2NrcyddKSB0aGlzLmNoZWNrQmxvY2tzQ29sbGlzaW9uKCBjdXJyZW50TW92ZW1lbnQgKTtcblx0XHRcdGlmKHRoaXMuY29sbGlzaW9uVHlwZUVuYWJsZWRbJ2JvbnVzJ10pIHRoaXMuY2hlY2tFbGVtZW50Q29sbGlzaW9uKCBjdXJyZW50TW92ZW1lbnQsIGRlaW1vcy5FbmdpbmUuc2NlbmUuaXRlbXMgKTtcblx0XHRcdGlmKHRoaXMuY29sbGlzaW9uVHlwZUVuYWJsZWRbJ21vbnN0ZXJzJ10pIHRoaXMuY2hlY2tFbGVtZW50Q29sbGlzaW9uKCBjdXJyZW50TW92ZW1lbnQsIGRlaW1vcy5FbmdpbmUuc2NlbmUubW9uc3RlcnMgKTtcblx0XHRcdGlmKHRoaXMuY29sbGlzaW9uVHlwZUVuYWJsZWRbJ3Byb2plY3RpbGVzJ10pIHRoaXMuY2hlY2tFbGVtZW50Q29sbGlzaW9uKCBjdXJyZW50TW92ZW1lbnQsIGRlaW1vcy5FbmdpbmUuc2NlbmUucHJvamVjdGlsZXMgKTtcblxuXHRcdFx0dmFyIGRlbHRhTW92ZSA9IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3Rvci5TdWIodGhpcy5wb3NpdGlvbixpbml0aWFsUG9zaXRpb24pO1xuXHRcdFx0aWYoZGVsdGFNb3ZlLnggIT0gMCB8fCBkZWx0YU1vdmUueSAhPTApIHtcblx0XHRcdFx0Ly9zZW5kIHN5bmMgd2hlbiBtb3ZlXG5cdFx0XHRcdHRoaXMuaW5Nb3ZlID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5yZW5kZXIoKTtcblx0XHRcdFx0dGhpcy5vbk1vdmUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuaW5Nb3ZlID0gZmFsc2Vcblx0XHRcdH1cblxuXHRcdFx0Ly9yZXNldCBtb3ZlbWVudFxuXHRcdFx0dGhpcy50b01vdmUgPSBWZWN0b3IuWmVybygpO1xuXG5cdFx0XHQvL3NldCBhbmltYXRpb25cblx0XHRcdHRoaXMuY3VycmVudEFjdGlvbjtcblx0XHRcdGlmKGRlbHRhTW92ZS54ICE9PSAwKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudEFjdGlvbiA9ICd3YWxrJztcblx0XHRcdFx0aWYoZGVsdGFNb3ZlLnggPiAwKSB0aGlzLm9yaWVudGVkID0gJ3JpZ2h0Jztcblx0XHRcdFx0aWYoZGVsdGFNb3ZlLnggPCAwKSB0aGlzLm9yaWVudGVkID0gJ2xlZnQnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50QWN0aW9uID0gJ3N0YW5kJztcblx0XHRcdH1cblx0XHRcdGlmKGRlbHRhTW92ZS55ICE9IDApIHRoaXMuY3VycmVudEFjdGlvbiA9ICdmbHknO1xuXG5cdFx0fSxcblxuXHRcdGNoZWNrQmxvY2tzQ29sbGlzaW9uOiBmdW5jdGlvbiggY3VycmVudE1vdmVtZW50ICkge1xuXHRcdFx0Ly9jaGVjayBmb3IgY29sbGlzaW9uXG5cdFx0XHR2YXIgYmxvY2tzID0gb3JnLmRieXplcm8uZGVpbW9zLkVuZ2luZS56b25lLmJsb2Nrcztcblx0XHRcdHZhciB0ZXN0Q29sbGlzaW9uID0gbnVsbDtcblx0XHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXMoYmxvY2tzKTtcblx0XHRcdHZhciBibG9jayxpO1xuXHRcdFx0Zm9yKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRibG9jayA9IGJsb2Nrc1trZXlzW2ldXTtcblx0XHRcdFx0Ly9kbyBub3QgY2hlY2sgaWYgd2Ugbm90IGNvbGxpZGUgb24gcGxhdGVmb3JtZVxuXHRcdFx0XHRpZihibG9jay50eXBlLnR5cGUgPT09ICdwbGF0ZWZvcm0nICYmICF0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkWydwbGF0ZWZvcm1lJ10pIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvL3dlIGRvbnQgY2hlY2sgZm9yIGNvbGxpc2lvbiBpZiBhdmF0YXIgZ28gYm90dG9tIGFuZCBibG9jayBpcyBhIHBsYXRlZm9ybVxuXHRcdFx0XHQvL2NvbGxpc2lvbiBmcm9tIGF2YXRhciBib3R0b21cblx0XHRcdFx0aWYoYmxvY2sudHlwZS50eXBlICE9ICdwbGF0ZWZvcm0nIHx8IChibG9jay50eXBlLnR5cGUgPT0gJ3BsYXRlZm9ybScgJiYgdGhpcy5nb2luZ0Rvd24gPT0gZmFsc2UpKSB7XG5cdFx0XHRcdFx0aWYoY3VycmVudE1vdmVtZW50LnkgPiAwKSB7XG5cdFx0XHRcdFx0XHR0ZXN0Q29sbGlzaW9uID0gb3JnLmRieXplcm8udG9vbHMuUGh5c2ljcy5TZWdtZW50c0NvbGxpc2lvbihcblx0XHRcdFx0XHRcdFx0dGhpcy52ZXJ0ZXhCTCxcblx0XHRcdFx0XHRcdFx0e3g6dGhpcy5wb3NpdGlvbi54LHk6dGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHR9LFxuXHRcdFx0XHRcdFx0XHRibG9jay52ZXJ0ZXhUTCxcblx0XHRcdFx0XHRcdFx0YmxvY2sudmVydGV4VFJcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmKHRlc3RDb2xsaXNpb24gIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMub25CbG9ja0NvbGxpc2lvbkJvdHRvbSh0ZXN0Q29sbGlzaW9uLGJsb2NrKTtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHRlc3RDb2xsaXNpb24gPSBvcmcuZGJ5emVyby50b29scy5QaHlzaWNzLlNlZ21lbnRzQ29sbGlzaW9uKFxuXHRcdFx0XHRcdFx0XHR0aGlzLnZlcnRleEJSLFxuXHRcdFx0XHRcdFx0XHR7eDp0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLHk6dGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHR9LFxuXHRcdFx0XHRcdFx0XHRibG9jay52ZXJ0ZXhUTCxcblx0XHRcdFx0XHRcdFx0YmxvY2sudmVydGV4VFJcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmKHRlc3RDb2xsaXNpb24gIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMub25CbG9ja0NvbGxpc2lvbkJvdHRvbSh0ZXN0Q29sbGlzaW9uLGJsb2NrKTtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly93ZSBzdG9wIGhlcmUgZm9yIHBsYXRlZm9ybWVcblx0XHRcdFx0aWYoYmxvY2sudHlwZS50eXBlID09ICdwbGF0ZWZvcm0nKSBjb250aW51ZTtcblxuXHRcdFx0XHQvL2NvbGxpc2lvbiBmcm9tIGF2YXRhciB0b3Bcblx0XHRcdFx0aWYoY3VycmVudE1vdmVtZW50LnkgPCAwKSB7XG5cdFx0XHRcdFx0dGVzdENvbGxpc2lvbiA9IG9yZy5kYnl6ZXJvLnRvb2xzLlBoeXNpY3MuU2VnbWVudHNDb2xsaXNpb24oXG5cdFx0XHRcdFx0XHR0aGlzLnZlcnRleFRMLFxuXHRcdFx0XHRcdFx0e3g6dGhpcy5wb3NpdGlvbi54LHk6dGhpcy5wb3NpdGlvbi55fSxcblx0XHRcdFx0XHRcdGJsb2NrLnZlcnRleEJMLFxuXHRcdFx0XHRcdFx0YmxvY2sudmVydGV4QlJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmKHRlc3RDb2xsaXNpb24gIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9uQmxvY2tDb2xsaXNpb25Ub3AodGVzdENvbGxpc2lvbixibG9jayk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0ZXN0Q29sbGlzaW9uID0gb3JnLmRieXplcm8udG9vbHMuUGh5c2ljcy5TZWdtZW50c0NvbGxpc2lvbihcblx0XHRcdFx0XHRcdHRoaXMudmVydGV4VFIsXG5cdFx0XHRcdFx0XHR7eDp0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLHk6dGhpcy5wb3NpdGlvbi55fSxcblx0XHRcdFx0XHRcdGJsb2NrLnZlcnRleEJMLFxuXHRcdFx0XHRcdFx0YmxvY2sudmVydGV4QlJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmKHRlc3RDb2xsaXNpb24gIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9uQmxvY2tDb2xsaXNpb25Ub3AodGVzdENvbGxpc2lvbixibG9jayk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvL2NvbGxpc2lvbiBmcm9tIGF2YXRhciBsZWZ0XG5cdFx0XHRcdGlmKGN1cnJlbnRNb3ZlbWVudC54IDwgMCkge1xuXHRcdFx0XHRcdHRlc3RDb2xsaXNpb24gPSBvcmcuZGJ5emVyby50b29scy5QaHlzaWNzLlNlZ21lbnRzQ29sbGlzaW9uKFxuXHRcdFx0XHRcdFx0dGhpcy52ZXJ0ZXhUTCxcblx0XHRcdFx0XHRcdHt4OnRoaXMucG9zaXRpb24ueCx5OnRoaXMucG9zaXRpb24ueX0sXG5cdFx0XHRcdFx0XHRibG9jay52ZXJ0ZXhUUixcblx0XHRcdFx0XHRcdGJsb2NrLnZlcnRleEJSXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZih0ZXN0Q29sbGlzaW9uICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkJsb2NrQ29sbGlzaW9uTGVmdCh0ZXN0Q29sbGlzaW9uLGJsb2NrKTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRlc3RDb2xsaXNpb24gPSBvcmcuZGJ5emVyby50b29scy5QaHlzaWNzLlNlZ21lbnRzQ29sbGlzaW9uKFxuXHRcdFx0XHRcdFx0dGhpcy52ZXJ0ZXhCTCxcblx0XHRcdFx0XHRcdHt4OnRoaXMucG9zaXRpb24ueCx5OnRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0fSxcblx0XHRcdFx0XHRcdGJsb2NrLnZlcnRleFRSLFxuXHRcdFx0XHRcdFx0YmxvY2sudmVydGV4QlJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmKHRlc3RDb2xsaXNpb24gIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9uQmxvY2tDb2xsaXNpb25MZWZ0KHRlc3RDb2xsaXNpb24sYmxvY2spO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly9jb2xsaXNpb24gZnJvbSBhdmF0YXIgcmlnaHRcblx0XHRcdFx0aWYoY3VycmVudE1vdmVtZW50LnggPiAwKSB7XG5cdFx0XHRcdFx0dGVzdENvbGxpc2lvbiA9IG9yZy5kYnl6ZXJvLnRvb2xzLlBoeXNpY3MuU2VnbWVudHNDb2xsaXNpb24oXG5cdFx0XHRcdFx0XHR0aGlzLnZlcnRleFRSLFxuXHRcdFx0XHRcdFx0e3g6dGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCx5OnRoaXMucG9zaXRpb24ueX0sXG5cdFx0XHRcdFx0XHRibG9jay52ZXJ0ZXhUTCxcblx0XHRcdFx0XHRcdGJsb2NrLnZlcnRleEJMXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZih0ZXN0Q29sbGlzaW9uICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkJsb2NrQ29sbGlzaW9uUmlnaHQodGVzdENvbGxpc2lvbixibG9jayk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0ZXN0Q29sbGlzaW9uID0gb3JnLmRieXplcm8udG9vbHMuUGh5c2ljcy5TZWdtZW50c0NvbGxpc2lvbihcblx0XHRcdFx0XHRcdHRoaXMudmVydGV4QlIsXG5cdFx0XHRcdFx0XHR7eDp0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLHk6dGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHR9LFxuXHRcdFx0XHRcdFx0YmxvY2sudmVydGV4VEwsXG5cdFx0XHRcdFx0XHRibG9jay52ZXJ0ZXhCTFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYodGVzdENvbGxpc2lvbiAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdHRoaXMub25CbG9ja0NvbGxpc2lvblJpZ2h0KHRlc3RDb2xsaXNpb24sYmxvY2spO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGNoZWNrRWxlbWVudENvbGxpc2lvbjogZnVuY3Rpb24oIGN1cnJlbnRNb3ZlbWVudCwgZWxlbWVudHMgKSB7XG5cdFx0XHR2YXIgdGVzdENvbGxpc2lvbiA9IG51bGw7XG5cdFx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKGVsZW1lbnRzKTtcblx0XHRcdHZhciBpLGVsZW1lbnQ7XG5cdFx0XHRmb3IoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGVsZW1lbnQgPSBlbGVtZW50c1trZXlzW2ldXTtcblx0XHRcdFx0Ly9jb2xsaXNpb24gZnJvbSBhdmF0YXIgYm90dG9tXG5cdFx0XHRcdGlmKGN1cnJlbnRNb3ZlbWVudC55ID4gMCkge1xuXHRcdFx0XHRcdHRlc3RDb2xsaXNpb24gPSBvcmcuZGJ5emVyby50b29scy5QaHlzaWNzLlNlZ21lbnRzQ29sbGlzaW9uKFxuXHRcdFx0XHRcdFx0dGhpcy52ZXJ0ZXhCTCxcblx0XHRcdFx0XHRcdHt4OnRoaXMucG9zaXRpb24ueCx5OnRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0fSxcblx0XHRcdFx0XHRcdGVsZW1lbnQudmVydGV4VEwsXG5cdFx0XHRcdFx0XHRlbGVtZW50LnZlcnRleFRSXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZih0ZXN0Q29sbGlzaW9uICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkVsZW1lbnRDb2xsaXNpb25Cb3R0b20odGVzdENvbGxpc2lvbixlbGVtZW50KTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRlc3RDb2xsaXNpb24gPSBvcmcuZGJ5emVyby50b29scy5QaHlzaWNzLlNlZ21lbnRzQ29sbGlzaW9uKFxuXHRcdFx0XHRcdFx0dGhpcy52ZXJ0ZXhCUixcblx0XHRcdFx0XHRcdHt4OnRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgseTp0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodH0sXG5cdFx0XHRcdFx0XHRlbGVtZW50LnZlcnRleFRMLFxuXHRcdFx0XHRcdFx0ZWxlbWVudC52ZXJ0ZXhUUlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYodGVzdENvbGxpc2lvbiAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdHRoaXMub25FbGVtZW50Q29sbGlzaW9uQm90dG9tKHRlc3RDb2xsaXNpb24sZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvL2NvbGxpc2lvbiBmcm9tIGF2YXRhciB0b3Bcblx0XHRcdFx0aWYoY3VycmVudE1vdmVtZW50LnkgPCAwKSB7XG5cdFx0XHRcdFx0dGVzdENvbGxpc2lvbiA9IG9yZy5kYnl6ZXJvLnRvb2xzLlBoeXNpY3MuU2VnbWVudHNDb2xsaXNpb24oXG5cdFx0XHRcdFx0XHR0aGlzLnZlcnRleFRMLFxuXHRcdFx0XHRcdFx0e3g6dGhpcy5wb3NpdGlvbi54LHk6dGhpcy5wb3NpdGlvbi55fSxcblx0XHRcdFx0XHRcdGVsZW1lbnQudmVydGV4QkwsXG5cdFx0XHRcdFx0XHRlbGVtZW50LnZlcnRleEJSXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZih0ZXN0Q29sbGlzaW9uICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkVsZW1lbnRDb2xsaXNpb25Ub3AodGVzdENvbGxpc2lvbixlbGVtZW50KTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRlc3RDb2xsaXNpb24gPSBvcmcuZGJ5emVyby50b29scy5QaHlzaWNzLlNlZ21lbnRzQ29sbGlzaW9uKFxuXHRcdFx0XHRcdFx0dGhpcy52ZXJ0ZXhUUixcblx0XHRcdFx0XHRcdHt4OnRoaXMucG9zaXRpb24ueCx5OnRoaXMucG9zaXRpb24ueX0sXG5cdFx0XHRcdFx0XHRlbGVtZW50LnZlcnRleEJMLFxuXHRcdFx0XHRcdFx0ZWxlbWVudC52ZXJ0ZXhCUlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYodGVzdENvbGxpc2lvbiAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdHRoaXMub25FbGVtZW50Q29sbGlzaW9uVG9wKHRlc3RDb2xsaXNpb24sZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvL2NvbGxpc2lvbiBmcm9tIGF2YXRhciBsZWZ0XG5cdFx0XHRcdGlmKGN1cnJlbnRNb3ZlbWVudC54IDwgMCkge1xuXHRcdFx0XHRcdHRlc3RDb2xsaXNpb24gPSBvcmcuZGJ5emVyby50b29scy5QaHlzaWNzLlNlZ21lbnRzQ29sbGlzaW9uKFxuXHRcdFx0XHRcdFx0dGhpcy52ZXJ0ZXhUTCxcblx0XHRcdFx0XHRcdHt4OnRoaXMucG9zaXRpb24ueCx5OnRoaXMucG9zaXRpb24ueX0sXG5cdFx0XHRcdFx0XHRlbGVtZW50LnZlcnRleFRSLFxuXHRcdFx0XHRcdFx0ZWxlbWVudC52ZXJ0ZXhCUlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYodGVzdENvbGxpc2lvbiAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdHRoaXMub25FbGVtZW50Q29sbGlzaW9uTGVmdCh0ZXN0Q29sbGlzaW9uLGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGVzdENvbGxpc2lvbiA9IG9yZy5kYnl6ZXJvLnRvb2xzLlBoeXNpY3MuU2VnbWVudHNDb2xsaXNpb24oXG5cdFx0XHRcdFx0XHR0aGlzLnZlcnRleEJMLFxuXHRcdFx0XHRcdFx0e3g6dGhpcy5wb3NpdGlvbi54LHk6dGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHR9LFxuXHRcdFx0XHRcdFx0ZWxlbWVudC52ZXJ0ZXhUUixcblx0XHRcdFx0XHRcdGVsZW1lbnQudmVydGV4QlJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmKHRlc3RDb2xsaXNpb24gIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9uRWxlbWVudENvbGxpc2lvbkxlZnQodGVzdENvbGxpc2lvbixlbGVtZW50KTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vY29sbGlzaW9uIGZyb20gYXZhdGFyIHJpZ2h0XG5cdFx0XHRcdGlmKGN1cnJlbnRNb3ZlbWVudC54ID4gMCkge1xuXHRcdFx0XHRcdHRlc3RDb2xsaXNpb24gPSBvcmcuZGJ5emVyby50b29scy5QaHlzaWNzLlNlZ21lbnRzQ29sbGlzaW9uKFxuXHRcdFx0XHRcdFx0dGhpcy52ZXJ0ZXhUUixcblx0XHRcdFx0XHRcdHt4OnRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgseTp0aGlzLnBvc2l0aW9uLnl9LFxuXHRcdFx0XHRcdFx0ZWxlbWVudC52ZXJ0ZXhUTCxcblx0XHRcdFx0XHRcdGVsZW1lbnQudmVydGV4Qkxcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmKHRlc3RDb2xsaXNpb24gIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9uRWxlbWVudENvbGxpc2lvblJpZ2h0KHRlc3RDb2xsaXNpb24sZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0ZXN0Q29sbGlzaW9uID0gb3JnLmRieXplcm8udG9vbHMuUGh5c2ljcy5TZWdtZW50c0NvbGxpc2lvbihcblx0XHRcdFx0XHRcdHRoaXMudmVydGV4QlIsXG5cdFx0XHRcdFx0XHR7eDp0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLHk6dGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHR9LFxuXHRcdFx0XHRcdFx0ZWxlbWVudC52ZXJ0ZXhUTCxcblx0XHRcdFx0XHRcdGVsZW1lbnQudmVydGV4Qkxcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmKHRlc3RDb2xsaXNpb24gIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9uRWxlbWVudENvbGxpc2lvblJpZ2h0KHRlc3RDb2xsaXNpb24sZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0cmVuZGVyOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkb21fZWxlbSA9IHRoaXMuZG9tRWxlbTtcblx0XHRcdGlmKHRoaXMucG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR2YXIgdHJhbnNsYXRpb24gPSBcInRyYW5zbGF0ZTNkKFwiK3BhcnNlSW50KHRoaXMucG9zaXRpb24ueCAtIHBhcnNlSW50KHRoaXMuZGVsdGFzaG93LngpKStcInB4LFwiK3BhcnNlSW50KHRoaXMucG9zaXRpb24ueSAtIHBhcnNlSW50KHRoaXMuZGVsdGFzaG93LnkpKStcInB4LDBweClcIjtcblx0XHRcdFx0ZG9tX2VsZW0uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNsYXRpb247XG5cdFx0XHRcdGRvbV9lbGVtLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zbGF0aW9uO1xuXG5cdFx0XHRcdGlmKCEhdGhpcy5IUCkge1xuXHRcdFx0XHRcdHRoaXMucmVuZGVySFAoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cblx0XHRsYW5kZWQ6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRcdHRoaXMuaXNMYW5kZWQgPSB0cnVlO1xuXHRcdFx0dGhpcy5sYW5kZWRCbG9jayA9IGVsZW1lbnQ7XG5cdFx0XHR0aGlzLm9uSnVzdExhbmQoKVxuXHRcdH0sXG5cblx0XHR1bmxhbmRlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLmlzTGFuZGVkID0gZmFsc2U7XG5cdFx0XHR0aGlzLmxhbmRlZEJsb2NrID0gbnVsbDtcblx0XHRcdHRoaXMub25VbmxhbmQoKVxuXHRcdH0sXG5cblx0XHRvbkp1c3RMYW5kOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vc3R1YlxuXHRcdH0sXG5cblx0XHRvblVubGFuZDogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL3N0dWJcblx0XHR9LFxuXG5cdFx0b25Nb3ZlOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMudmVydGV4VEwueCA9IHRoaXMucG9zaXRpb24ueDtcblx0XHRcdHRoaXMudmVydGV4VEwueSA9IHRoaXMucG9zaXRpb24ueTtcblx0XHRcdHRoaXMudmVydGV4QkwueCA9IHRoaXMucG9zaXRpb24ueDtcblx0XHRcdHRoaXMudmVydGV4QkwueSA9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0O1xuXHRcdFx0dGhpcy52ZXJ0ZXhUUi54ID0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aDtcblx0XHRcdHRoaXMudmVydGV4VFIueSA9IHRoaXMucG9zaXRpb24ueTtcblx0XHRcdHRoaXMudmVydGV4QlIueCA9IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGg7XG5cdFx0XHR0aGlzLnZlcnRleEJSLnkgPSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodDtcblx0XHR9LFxuXG5cdFx0b25CbG9ja0NvbGxpc2lvbjogZnVuY3Rpb24oIGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50ICkge1xuXHRcdH0sXG5cblx0XHRvbkFyZWFDb2xsaXNpb246IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly9zdHViXG5cdFx0fSxcblxuXHRcdG9uRWxlbWVudENvbGxpc2lvbjogZnVuY3Rpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQpIHtcblx0XHRcdGNvbGxpc2lvbkVsZW1lbnQuZGVzdHJveSgpO1xuXHRcdH0sXG5cblx0XHRvbkFyZWFDb2xsaXNpb25SaWdodDogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnZlbG9jaXR5LnggPSAwO1xuXHRcdFx0dGhpcy5vbkFyZWFDb2xsaXNpb24oKTtcblx0XHR9LFxuXG5cdFx0b25BcmVhQ29sbGlzaW9uTGVmdDogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnZlbG9jaXR5LnggPSAwO1xuXHRcdFx0dGhpcy5vbkFyZWFDb2xsaXNpb24oKTtcblx0XHR9LFxuXG5cdFx0b25BcmVhQ29sbGlzaW9uVG9wOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMudmVsb2NpdHkueSA9IDA7XG5cdFx0XHR0aGlzLm9uQXJlYUNvbGxpc2lvbigpO1xuXHRcdH0sXG5cblx0XHRvbkFyZWFDb2xsaXNpb25Cb3R0b206IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy52ZWxvY2l0eS55ID0gMDtcblx0XHRcdHRoaXMub25BcmVhQ29sbGlzaW9uKCk7XG5cdFx0XHR0aGlzLmxhbmRlZChmYWxzZSk7XG5cdFx0fSxcblxuXHRcdG9uRWxlbWVudENvbGxpc2lvblJpZ2h0OiBmdW5jdGlvbihjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCkge1xuXHRcdFx0dGhpcy5vbkVsZW1lbnRDb2xsaXNpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQpO1xuXHRcdH0sXG5cblx0XHRvbkVsZW1lbnRDb2xsaXNpb25MZWZ0OiBmdW5jdGlvbihjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCkge1xuXHRcdFx0dGhpcy5vbkVsZW1lbnRDb2xsaXNpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQpO1xuXHRcdH0sXG5cblx0XHRvbkVsZW1lbnRDb2xsaXNpb25Ub3A6IGZ1bmN0aW9uKGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50KSB7XG5cdFx0XHR0aGlzLm9uRWxlbWVudENvbGxpc2lvbihjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCk7XG5cdFx0fSxcblxuXHRcdG9uRWxlbWVudENvbGxpc2lvbkJvdHRvbTogZnVuY3Rpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQpIHtcblx0XHRcdHRoaXMub25FbGVtZW50Q29sbGlzaW9uKGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50KTtcblx0XHR9LFxuXG5cdFx0b25CbG9ja0NvbGxpc2lvbkJvdHRvbTogZnVuY3Rpb24oIGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50ICkge1xuXHRcdFx0dGhpcy5sYW5kZWRCbG9jayA9IGNvbGxpc2lvbkVsZW1lbnQ7XG5cdFx0XHR0aGlzLnBvc2l0aW9uLnkgPSBjb2xsaXNpb25Db29yZC55IC0gdGhpcy5oZWlnaHQ7XG5cdFx0XHR0aGlzLnZlbG9jaXR5LnkgPSAwO1xuXHRcdFx0dGhpcy5sYW5kZWQoY29sbGlzaW9uRWxlbWVudCk7XG5cdFx0XHR0aGlzLm9uQmxvY2tDb2xsaXNpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQgKTtcblx0XHR9LFxuXG5cdFx0b25CbG9ja0NvbGxpc2lvblRvcDogZnVuY3Rpb24oIGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50ICkge1xuXHRcdFx0dGhpcy5wb3NpdGlvbi55ID0gY29sbGlzaW9uQ29vcmQueTtcblx0XHRcdHRoaXMudmVsb2NpdHkueSA9IDA7XG5cdFx0XHR0aGlzLm9uQmxvY2tDb2xsaXNpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQgKTtcblx0XHR9LFxuXG5cdFx0b25CbG9ja0NvbGxpc2lvbkxlZnQ6IGZ1bmN0aW9uKCBjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCApIHtcblx0XHRcdHRoaXMucG9zaXRpb24ueCA9IGNvbGxpc2lvbkNvb3JkLng7XG5cdFx0XHR0aGlzLnZlbG9jaXR5LnggPSAwO1xuXHRcdFx0dGhpcy5vbkJsb2NrQ29sbGlzaW9uKGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50ICk7XG5cdFx0fSxcblxuXHRcdG9uQmxvY2tDb2xsaXNpb25SaWdodDogZnVuY3Rpb24oIGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50ICkge1xuXHRcdFx0dGhpcy5wb3NpdGlvbi54ID0gY29sbGlzaW9uQ29vcmQueCAtIHRoaXMud2lkdGg7XG5cdFx0XHR0aGlzLnZlbG9jaXR5LnggPSAwO1xuXHRcdFx0dGhpcy5vbkJsb2NrQ29sbGlzaW9uKGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50ICk7XG5cdFx0fSxcblxuXHRcdGNvcnJlY3RQb3NpdGlvbldpdGhTZXJ2ZXI6ZnVuY3Rpb24odGltZXN0YW1wKXtcblx0XHRcdC8vZml4IHBvc2l0aW9uIGZyb20gc2VydmVyXG5cdFx0XHR2YXIgc3RlcEluUGFzdCA9IHBhcnNlSW50KChkZWltb3MuRW5naW5lLmN1cnJlbnRMYWcpICAvIGRlaW1vcy5Db25maWcuSU5URVJQT0xBVElPTl9USU1FU1RFUCk7XG5cblx0XHRcdHZhciBkZWx0YVggPSB0aGlzLnBvc2l0aW9uU2VydmVyLnggLSBwYXJzZUludCh0aGlzLnBvc2l0aW9uLngpO1xuXHRcdFx0dmFyIGRlbHRhWSA9IHRoaXMucG9zaXRpb25TZXJ2ZXIueSAtIHBhcnNlSW50KHRoaXMucG9zaXRpb24ueSk7XG5cdFx0XHR2YXIgc3F1YXJlSHlwb3RoZW51cyA9IGRlbHRhWCpkZWx0YVggKyBkZWx0YVkqZGVsdGFZO1xuXHRcdFx0aWYoZGVpbW9zLkNvbmZpZy5TUVVBUkVfQVVUSE9SSVRZIDwgc3F1YXJlSHlwb3RoZW51cykge1xuXHRcdFx0XHR0aGlzLnBvc2l0aW9uLnggPSB0aGlzLnBvc2l0aW9uU2VydmVyLng7XG5cdFx0XHRcdHRoaXMucG9zaXRpb24ueSA9IHRoaXMucG9zaXRpb25TZXJ2ZXIueTtcblx0XHRcdFx0dGhpcy5za2lwTmV4dFVwZGF0ZUFuZE1vdmUgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLm9uTW92ZSgpO1xuXHRcdFx0XHR0aGlzLnJlbmRlcigpO1xuXHRcdFx0XHQvL3dlIHVubGFuZCBpdCB0byBjaGVjayBjb2xsaXNpb24gd2l0aCBuZXcgcG9zaXRpb25cblx0XHRcdFx0dGhpcy51bmxhbmRlZCgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRiaW5kRXZlbnQgOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vc3R1YlxuXHRcdH0sXG5cblx0XHR1bmJpbmRFdmVudCA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly9zdHViXG5cdFx0fSxcblxuXHRcdHVwZGF0ZUFuaW1hdGlvbiA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYodGhpcy5vcmllbnRlZCAhPT0gJ3JpZ2h0JyAmJiB0aGlzLm9yaWVudGVkICE9PSAnbGVmdCcpIHRocm93ICdVbmtub3cgZGlyZWN0aW9uICcrdGhpcy5vcmllbnRlZDtcblx0XHRcdHZhciBkb21FbGVtID0gdGhpcy5kb21FbGVtO1xuXHRcdFx0dmFyIGNsYXNzQW5pbWF0aW9uID0gbnVsbDtcblxuXHRcdFx0aWYodGhpcy5pc0F0dGFja2luZygpKSB7XG5cdFx0XHRcdGNsYXNzQW5pbWF0aW9uID0gdGhpcy5kaWN0Q2xhc3NbJ3Nob290aW5nXycrdGhpcy5vcmllbnRlZF07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzd2l0Y2godGhpcy5jdXJyZW50QWN0aW9uKXtcblx0XHRcdFx0XHRjYXNlIFwiZmx5XCI6XG5cdFx0XHRcdFx0XHRjbGFzc0FuaW1hdGlvbiA9IHRoaXMuZGljdENsYXNzWydmbHlpbmdfJyt0aGlzLm9yaWVudGVkXTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgXCJqdW1wXCI6XG5cdFx0XHRcdFx0XHRjbGFzc0FuaW1hdGlvbiA9IHRoaXMuZGljdENsYXNzWydqdW1waW5nXycrdGhpcy5vcmllbnRlZF07XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwid2Fsa1wiOlxuXHRcdFx0XHRcdFx0Y2xhc3NBbmltYXRpb24gPSB0aGlzLmRpY3RDbGFzc1snd2Fsa2luZ18nK3RoaXMub3JpZW50ZWRdO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGNsYXNzQW5pbWF0aW9uID0gdGhpcy5kaWN0Q2xhc3NbJ3N0YW5kaW5nXycrdGhpcy5vcmllbnRlZF07XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRkb21FbGVtLmNsYXNzTmFtZSA9IGNsYXNzQW5pbWF0aW9uO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBOYW1lXG5cdFx0ICovXG5cdFx0aW5pdE5hbWUgOiBmdW5jdGlvbiAobWFpbikge1xuXHRcdFx0dmFyIGRvbV9lbGVtX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLHRoaXMuZG9tSWQrJ19uYW1lJykgO1xuXG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5pbm5lckhUTUwgPSB0aGlzLm5hbWU7XG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmRpc3BsYXkgID0gJ25vbmUnIDtcblx0XHRcdGRvbV9lbGVtX25hbWUuc3R5bGUuZm9udFNpemUgPSAnMTZweCc7XG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmNvbG9yID0gISFtYWluID8gJ3JnYigxMjgsIDE1MSwgMjI0KScgOiAncmdiKDIyNCwgMTI4LCAxMjgpJztcblx0XHRcdGRvbV9lbGVtX25hbWUuc3R5bGUuekluZGV4ID0gMTA7XG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLnRleHRTaGFkb3cgPSAnd2hpdGUgLTJweCAtMnB4IDJweCwgd2hpdGUgMnB4IDJweCAycHgsIHdoaXRlIC0ycHggMnB4IDJweCwgd2hpdGUgMnB4IC0ycHggMnB4JztcblxuXHRcdFx0ZGVpbW9zLkVuZ2luZS56b25lLmFyZWEuYXBwZW5kQ2hpbGQoZG9tX2VsZW1fbmFtZSkgO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5kaXNwbGF5ICA9ICdibG9jaycgO1xuXG5cdFx0XHR0aGlzLmRvbUVsZW1OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kb21JZCsnX25hbWUnKTtcblxuXHRcdFx0dGhpcy5uYW1lV2lkdGggPSBkb21fZWxlbV9uYW1lLm9mZnNldFdpZHRoO1xuXHRcdFx0dGhpcy5uYW1lSGVpZ2h0ID0gZG9tX2VsZW1fbmFtZS5vZmZzZXRIZWlnaHQ7XG5cblx0XHRcdHRoaXMucmVuZGVyTmFtZS5jYWxsKHRoaXMpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBOYW1lXG5cdFx0ICovXG5cdFx0aW5pdEhQIDogZnVuY3Rpb24gKCkge1xuXHRcdFx0dmFyIGRvbUVsZW1IUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRkb21FbGVtSFAuc2V0QXR0cmlidXRlKFwiaWRcIix0aGlzLmRvbUlkKydfaHAnKSA7XG5cblx0XHRcdGRvbUVsZW1IUC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0XHRcdGRvbUVsZW1IUC5zdHlsZS5kaXNwbGF5ICA9ICdub25lJyA7XG5cdFx0XHRkb21FbGVtSFAuc3R5bGUuekluZGV4ID0gMTA7XG5cdFx0XHRkb21FbGVtSFAuc3R5bGUud2lkdGggPSAoKHRoaXMuSFAvdGhpcy5tYXhIUCkgKiB0aGlzLm5hbWVXaWR0aCkrJ3B4Jztcblx0XHRcdGRvbUVsZW1IUC5zdHlsZS5oZWlnaHQgPSAnM3B4Jztcblx0XHRcdGRvbUVsZW1IUC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0E0QzNBMCc7XG5cblx0XHRcdGRlaW1vcy5FbmdpbmUuem9uZS5hcmVhLmFwcGVuZENoaWxkKGRvbUVsZW1IUCkgO1xuXHRcdFx0ZG9tRWxlbUhQLnN0eWxlLmRpc3BsYXkgID0gJ2Jsb2NrJyA7XG5cblx0XHRcdHRoaXMuZG9tRWxlbUhQID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kb21JZCsnX2hwJyk7XG5cblx0XHRcdHRoaXMucmVuZGVySFAuY2FsbCh0aGlzKTtcblx0XHR9LFxuXG5cdFx0cmVuZGVySFAgOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRkb21FbGVtSFAgPSB0aGlzLmRvbUVsZW1IUCA7XG5cdFx0XHR2YXIgbGVmdCA9IHBhcnNlSW50KHRoaXMucG9zaXRpb24ueCsocGFyc2VJbnQoKHRoaXMuZG9tRWxlbVdpZHRoLSgyKnRoaXMuZGVsdGFzaG93LngpKS8yKS1wYXJzZUludCh0aGlzLm5hbWVXaWR0aC8yKSkpO1xuXHRcdFx0dmFyIHRvcCA9IHBhcnNlSW50KHRoaXMucG9zaXRpb24ueS02KTtcblx0XHRcdHZhciB0cmFuc2xhdGlvbiA9IFwidHJhbnNsYXRlM2QoXCIrbGVmdCtcInB4LFwiK3RvcCtcInB4LDBweClcIjtcblx0XHRcdGRvbUVsZW1IUC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2xhdGlvbjtcblx0XHRcdGRvbUVsZW1IUC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2xhdGlvbjtcblx0XHRcdGRvbUVsZW1IUC5zdHlsZS53aWR0aCA9ICgodGhpcy5IUC90aGlzLm1heEhQKSAqIHRoaXMubmFtZVdpZHRoKSsncHgnO1xuXHRcdH0sXG5cblx0XHRyZW5kZXJOYW1lIDogZnVuY3Rpb24gKCkge1xuXHRcdFx0ZG9tX2VsZW1fbmFtZSA9IHRoaXMuZG9tRWxlbU5hbWUgO1xuXHRcdFx0dmFyIGxlZnQgPSBwYXJzZUludCh0aGlzLnBvc2l0aW9uLngrKHBhcnNlSW50KCh0aGlzLmRvbUVsZW1XaWR0aC0oMip0aGlzLmRlbHRhc2hvdy54KSkvMiktcGFyc2VJbnQodGhpcy5uYW1lV2lkdGgvMikpKTtcblx0XHRcdHZhciB0b3AgPSBwYXJzZUludCh0aGlzLnBvc2l0aW9uLnktdGhpcy5uYW1lSGVpZ2h0LTYpO1xuXHRcdFx0dmFyIHRyYW5zbGF0aW9uID0gXCJ0cmFuc2xhdGUzZChcIitsZWZ0K1wicHgsXCIrdG9wK1wicHgsMHB4KVwiO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2xhdGlvbjtcblx0XHRcdGRvbV9lbGVtX25hbWUuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNsYXRpb247XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFNwZWFrZXJcblx0XHQgKi9cblx0XHRpbml0U3BlYWtlciA6IGZ1bmN0aW9uIChyZWFkb25seSkge1xuXHRcdFx0dGhpcy5zcGVha2VyID0gbmV3IGRlaW1vcy5lbGVtZW50LlNwZWFrZXIodGhpcy5kb21JZCwgcmVhZG9ubHkpIDtcblx0XHRcdHRoaXMuc3BlYWtlci5pbml0KCk7XG5cdFx0fSxcblxuXHRcdHJlbmRlclNwZWFrZXIgOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLnNwZWFrZXIucmVuZGVyKHRoaXMucG9zaXRpb24ueCAtIDUwICx0aGlzLnBvc2l0aW9uLnkgLSA3NCk7XG5cdFx0fSxcblxuXHRcdHNldFNwZWFraW5nIDogZnVuY3Rpb24gKGJvb2wpIHtcblx0XHRcdHRoaXMuc3BlYWtpbmcgPSBib29sIDtcblx0XHRcdGlmKGJvb2wpIHtcblx0XHRcdFx0dGhpcy5yZW5kZXJTcGVha2VyKCk7XG5cdFx0XHRcdHRoaXMuc3BlYWtlci5zaG93KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmxhc3RTYXllZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdFx0XHR0aGlzLnNwZWFrZXIubGVhdmVGb2N1cygpO1xuXHRcdFx0XHRpZih0aGlzLnNheWluZy5sZW5ndGggPT09IDApIHRoaXMuc3BlYWtlci5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGlzQXR0YWNraW5nIDogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQhIXRoaXMuYXR0YWNrICYmIC8vaWYgaGFzIGF0dGFjayBcblx0XHRcdFx0KHRoaXMubGFzdEF0dGFjayArIHRoaXMuYXR0YWNrUmF0ZSA+IG5ldyBEYXRlKCkuZ2V0VGltZSgpKSAvL2FuZCBhdHRhY2sgaW4gdGltZXJcblx0XHRcdCk7XG5cdFx0fSxcblxuXHRcdGF0dGFjayA6IGZ1bmN0aW9uKHdoaWNoT25lKSB7XG5cdFx0XHRpZighd2hpY2hPbmUpIHtcblx0XHRcdFx0aWYoIXRoaXMuaXNBdHRhY2tpbmcoKSkge1xuXHRcdFx0XHRcdHRoaXMubGFzdEF0dGFjayA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdFx0XHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0XHRcdFx0dmFyIG1lc3NhZ2UgPSB7fTtcblx0XHRcdFx0XHRtZXNzYWdlW190WydBQ1RJT04nXV0gPSBfdFsnQUNUSU9OX0FUVEFDSyddO1xuXHRcdFx0XHRcdG1lc3NhZ2VbX3RbJ01FU1NBR0UnXV0gPSB7fTtcblx0XHRcdFx0XHRtZXNzYWdlW190WydNRVNTQUdFJ11dW190WydNRVNTQUdFX0RJUkVDVElPTiddXSA9IHRoaXMub3JpZW50ZWQ7XG5cdFx0XHRcdFx0bWVzc2FnZVtfdFsnTUVTU0FHRSddXVtfdFsnTUVTU0FHRV9QT1NJVElPTiddXSA9IHt9O1xuXHRcdFx0XHRcdG1lc3NhZ2VbX3RbJ01FU1NBR0UnXV1bX3RbJ01FU1NBR0VfUE9TSVRJT04nXV0ueCA9IHBhcnNlSW50KHRoaXMucG9zaXRpb24ueCk7XG5cdFx0XHRcdFx0bWVzc2FnZVtfdFsnTUVTU0FHRSddXVtfdFsnTUVTU0FHRV9QT1NJVElPTiddXS55ID0gcGFyc2VJbnQodGhpcy5wb3NpdGlvbi55KTtcblx0XHRcdFx0XHRkZWltb3MuRW5naW5lLm5ldHdvcmtNYW5hZ2VyLnNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdExvZy5pbmZvKCdIYXZlIHRvIHdhaXQnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdExvZy5lcnJvcignT25seSBtYWluIGF0dGFjayBpcyBpbXBsZW1lbnRlZCcpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHR0b3VjaGVkOiBmdW5jdGlvbihlbGVtZW50Q29sbGlzaW9uKSB7XG5cdFx0XHR2YXIgZGFtYWdlID0gZWxlbWVudENvbGxpc2lvbi5kYW1hZ2U7XG5cdFx0XHRpZihpc0Zpbml0ZShkYW1hZ2UpKSB7XG5cdFx0XHRcdHRoaXMuSFAgLT0gZGFtYWdlO1xuXHRcdFx0XHR0aGlzLnJlbmRlckhQKCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGRpZTogZnVuY3Rpb24oZWxlbWVudENvbGxpc2lvbikge1xuXHRcdFx0dGhpcy5kZXN0cm95KCk7XG5cdFx0fSxcblxuXHRcdGNsZWFuRG9tOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMudW5iaW5kRXZlbnQoKTtcblx0XHRcdGlmKCEhdGhpcy5zcGVha2VyKSB0aGlzLmNsZWFuRG9tU3BlYWtlcigpO1xuXHRcdFx0aWYodGhpcy5kb21FbGVtSFApIHRoaXMuY2xlYW5Eb21IUCgpO1xuXHRcdFx0aWYodGhpcy5kb21FbGVtTmFtZSkgdGhpcy5jbGVhbkRvbU5hbWUoKTtcblx0XHRcdGlmKHRoaXMuZG9tRWxlbSkgdGhpcy5jbGVhbkRvbUVsZW0oKTtcblx0XHR9LFxuXG5cdFx0Y2xlYW5Eb21FbGVtIDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbm9kZUF2YXRhciA9IHRoaXMuZG9tRWxlbTtcblx0XHRcdHZhciBwYXJlbnROb2RlID0gbm9kZUF2YXRhci5wYXJlbnROb2RlO1xuXHRcdFx0aWYocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlQXZhdGFyKTtcblx0XHR9LFxuXG5cdFx0Y2xlYW5Eb21OYW1lIDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZG9tX2VsZW1fbmFtZSA9IHRoaXMuZG9tRWxlbU5hbWUgO1xuXHRcdFx0dmFyIHBhcmVudE5vZGUgPSBkb21fZWxlbV9uYW1lLnBhcmVudE5vZGU7XG5cdFx0XHRpZihwYXJlbnROb2RlKSBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvbV9lbGVtX25hbWUpO1xuXHRcdH0sXG5cblx0XHRjbGVhbkRvbUhQIDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZG9tX2VsZW1faHAgPSB0aGlzLmRvbUVsZW1IUCA7XG5cdFx0XHR2YXIgcGFyZW50Tm9kZSA9IGRvbV9lbGVtX2hwLnBhcmVudE5vZGU7XG5cdFx0XHRpZihwYXJlbnROb2RlKSBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvbV9lbGVtX2hwKTtcblx0XHR9LFxuXG5cdFx0Y2xlYW5Eb21TcGVha2VyIDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc3BlYWtpbmdCb3ggPSB0aGlzLnNwZWFrZXIuZG9tRWxlbTtcblx0XHRcdHZhciBwYXJlbnROb2RlID0gc3BlYWtpbmdCb3gucGFyZW50Tm9kZTtcblx0XHRcdGlmKHBhcmVudE5vZGUpIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3BlYWtpbmdCb3gpO1xuXHRcdH1cblx0fVxuXG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBTcGVha2VyIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA4LzI5XG4gKiBAZGVzY3JpcHRpb24gOiBTcGVha2VyIG1vZGVsXG4gKlxuICoqL1xuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXG5cdGRlaW1vcy5lbGVtZW50ID0gZGVpbW9zLmVsZW1lbnQgfHwge30gO1xuXG5cdC8qKipcblx0ICogU3BlYWtlciBjb25zdHJ1Y3RvclxuXHQgKiBcblx0ICoqL1xuXHRkZWltb3MuZWxlbWVudC5TcGVha2VyID0gZnVuY3Rpb24gKGF2SWQsIHJlYWRvbmx5KSB7XG5cdFx0dGhpcy5pZCA9ICdzcGVha2VyXycgKyBhdklkICsgJ18nICsgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSoxMDAwMDAwKSsxKTtcblx0XHR0aGlzLnJlYWRvbmx5ID0gcmVhZG9ubHk7XG5cdH1cblxuXG5cdGRlaW1vcy5lbGVtZW50LlNwZWFrZXIucHJvdG90eXBlID0ge1xuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGdhbWV6b25lID0gZGVpbW9zLkVuZ2luZS56b25lLmFyZWEgO1xuXHRcdFx0XHRcblx0XHRcdC8vbWFrZSBkb20gZWxlbWVudFxuXHRcdFx0dmFyIGRvbV9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGRvbV9lbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJzcGVha2VyXCIpIDtcblx0XHRcdGRvbV9lbGVtLnNldEF0dHJpYnV0ZShcImlkXCIsdGhpcy5pZCkgO1xuXHRcdFx0Ly9kb21fZWxlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJyA7XG5cblx0XHRcdGlmKHRoaXMucmVhZG9ubHkpIHtcblx0XHRcdFx0ZG9tX2VsZW0uc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gJzBweCAtMTAwcHgnIDtcblx0XHRcdH1cblx0XHRcdHZhciB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKSA7XG5cdFx0XHRpZih0aGlzLnJlYWRvbmx5KSB7XG5cdFx0XHRcdHRleHRBcmVhLnJlYWRPbmx5ID0gdHJ1ZTsgXG5cdFx0XHR9XG5cdFx0XHRkb21fZWxlbS5hcHBlbmRDaGlsZCh0ZXh0QXJlYSkgO1xuXHRcdFx0Z2FtZXpvbmUuYXBwZW5kQ2hpbGQoZG9tX2VsZW0pIDtcblx0XHRcdHRoaXMuZG9tRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xuXHRcdH0sXG5cblx0XHRnZXRUZXh0OiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkb21FbGVtID0gdGhpcy5kb21FbGVtO1xuXHRcdFx0cmV0dXJuIGRvbUVsZW0uY2hpbGROb2Rlc1swXS52YWx1ZSA7XG5cdFx0fSxcblxuXHRcdHNldFRleHQ6IGZ1bmN0aW9uKHR4dCkge1xuXHRcdFx0dmFyIGRvbUVsZW0gPSB0aGlzLmRvbUVsZW07XG5cdFx0XHRkb21FbGVtLmNoaWxkTm9kZXNbMF0udmFsdWUgPSB0eHQ7XG5cdFx0fSxcblxuXHRcdHNob3c6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGRvbUVsZW0gPSAgdGhpcy5kb21FbGVtO1xuXHRcdFx0ZG9tRWxlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRcdGlmKHRoaXMucmVhZG9ubHkgIT09IHRydWUpXG5cdFx0XHR7XG5cdFx0XHRcdGRvbUVsZW0uY2hpbGROb2Rlc1swXS5mb2N1cygpIDtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0aGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZG9tRWxlbSA9ICB0aGlzLmRvbUVsZW07XG5cdFx0XHRkb21FbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRkb21FbGVtLmNoaWxkTm9kZXNbMF0udmFsdWUgPSAnJztcblx0XHRcdGlmKHRoaXMucmVhZG9ubHkgIT09IHRydWUpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMubGVhdmVGb2N1cygpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRsZWF2ZUZvY3VzOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkb21FbGVtID0gIHRoaXMuZG9tRWxlbTtcblx0XHRcdGRvbUVsZW0uY2hpbGROb2Rlc1swXS5ibHVyKCkgO1xuXHRcdH0sXG5cblx0XHRyZW5kZXI6IGZ1bmN0aW9uKHgseSkge1xuXHRcdFx0dmFyIGRvbUVsZW0gPSAgdGhpcy5kb21FbGVtO1xuXHRcdFx0dmFyIHRyYW5zbGF0aW9uID0gXCJ0cmFuc2xhdGUzZChcIit4K1wicHgsXCIreStcInB4LDBweClcIjtcblx0XHRcdGRvbUVsZW0uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNsYXRpb247XG5cdFx0XHRkb21FbGVtLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zbGF0aW9uO1xuXHRcdH1cblx0fVxuXG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBBdmF0YXIgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTMvMDgvMDlcbiAqIEBkZXNjcmlwdGlvbiA6IEF2YXRhciBtb2RlbFxuICpcbiAqKi9cblxuKGZ1bmN0aW9uKGRlaW1vcyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblxuXHR2YXIgRXZlbnRNYW5hZ2VyID0gb3JnLmRieXplcm8udG9vbHMuRXZlbnRNYW5hZ2VyO1xuXHRkZWltb3MuZWxlbWVudCA9IGRlaW1vcy5lbGVtZW50IHx8IHt9IDtcblxuXHQvKipcblx0ICogQXZhdGFyIGNvbnN0cnVjdG9yXG5cdCAqXG5cdCAqKi9cblx0dmFyIEF2YXRhciA9IGRlaW1vcy5lbGVtZW50LkF2YXRhciA9IGZ1bmN0aW9uIChuYW1lLHBvc2l0aW9uLHNpemUsc2VydmVyaWQsZGVsdGFzaG93LG1hc3MpIHtcblx0XHRBdmF0YXIuX3N1cGVyLmNhbGwodGhpcyxwb3NpdGlvbixzaXplLHNlcnZlcmlkLGRlbHRhc2hvdyk7XG5cdFx0dGhpcy5kb21JZCA9ICdhdmF0YXJfJyArIHNlcnZlcmlkICsgJ18nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAnXycgKyBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpKjEwMDAwMDApKzEpOyA7XG5cdFx0dGhpcy5zcGVha2luZyA9IGZhbHNlIDtcblx0XHR0aGlzLnNwZWFrZXIgPSBudWxsO1xuXHRcdHRoaXMubW92ZV9zcGVlZCA9IDA7XG5cdFx0dGhpcy5qdW1wX3NwZWVkID0gMDtcblx0XHR0aGlzLnNheWluZyA9IFwiXCI7XG5cdFx0dGhpcy5sYXN0U2F5ZWQgPSAwO1xuXHRcdHRoaXMud2FpdGluZ0ZvcmNlID0gW107XG5cdFx0dGhpcy51c2VySW5wdXRzID0ge307XG5cdFx0dGhpcy5pdGVtX3Nsb3RfaGVhZCA9IG51bGw7XG5cdFx0dGhpcy5pdGVtX3Nsb3RfZm9vdCA9IG51bGw7XG5cdFx0dGhpcy5pdGVtX3Nsb3RfY2hlc3QgPSBudWxsO1xuXHRcdHRoaXMuaXRlbV9zbG90X2xlZnRfaGFuZCA9IG51bGw7XG5cdFx0dGhpcy5pdGVtX3Nsb3RfcmlnaHRfaGFuZCA9IG51bGw7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm1hc3MgPSBtYXNzO1xuXHRcdC8vb2JqZWN0IGNvbGxpc2lvbnMgYXJlIG1hbmFnZWQgYnkgc2VydmVyXG5cdFx0Ly8gdGhpcy5jb2xsaXNpb25UeXBlRW5hYmxlZFsnYm9udXMnXSA9IHRydWU7XG5cdH1cblxuXHRvcmcuZGJ5emVyby50b29scy5Jbmhlcml0KGRlaW1vcy5lbGVtZW50LkF2YXRhciwgZGVpbW9zLmVsZW1lbnQuRWxlbWVudCk7XG5cblx0ZGVpbW9zLmVsZW1lbnQuQXZhdGFyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKXtcblx0XHRBdmF0YXIuX3N1cGVyLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyk7XG5cblx0XHQvL3NldCBzcHJpdGVzaGVldFxuXHRcdHRoaXMuZG9tRWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIitkZWltb3MuRW5naW5lLmFzc2V0VVJMK1wiL3Nwcml0ZXNoZWV0L2NoYXIvXCIrdGhpcy5zZXJ2ZXJpZCtcIi9zcHJpdGVzaGVldC5wbmcpXCI7XG5cblx0XHQvL2FkZCBzcGVha2VyXG5cdFx0dGhpcy5pbml0U3BlYWtlcihmYWxzZSk7XG5cblx0XHQvL2V2ZW50c1xuXHRcdHRoaXMuYmluZEV2ZW50KCk7XG5cblx0XHQvL3Nob3cgbWFpbiBuYW1lXG5cdFx0dGhpcy5pbml0TmFtZSh0cnVlKTtcblxuXHRcdC8vcmVkcmF3IEhQIHRvIGFwcGx5IGNvcnJlY3QgbmFtZSB3aWR0aFxuXHRcdHRoaXMucmVuZGVySFAoKTtcblxuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuQXZhdGFyLnByb3RvdHlwZS5iaW5kRXZlbnQgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXG5cdFx0Ly9iaW5kIHNwZWVrIGV2ZW50XG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5zcGVha1wiLChmdW5jdGlvbihlKXtcblx0XHRcdHRoaXMuc2V0U3BlYWtpbmcodHJ1ZSkgO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9KS5iaW5kKHRoaXMpKTtcblxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3RlcihcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIuc3BlYWsuc3RvcFwiLChmdW5jdGlvbigpe1xuXHRcdFx0dGhpcy5zZXRTcGVha2luZyhmYWxzZSkgO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9KS5iaW5kKHRoaXMpKTtcblxuXHRcdC8vYmluZCBtb3ZlbWVudCBldmVudFxuXG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5tb3ZlLmxlZnRcIiwoZnVuY3Rpb24oZSl7XG5cdFx0XHR2YXIgZm9yY2UgPSBuZXcgZGVpbW9zLnBoeXNpYy5Vc2VyTW92ZW1lbnQoXG5cdFx0XHRcdG5ldyBvcmcuZGJ5emVyby50b29scy5WZWN0b3IoLTEgKiB0aGlzLm1vdmVfc3BlZWQsMCksXG5cdFx0XHRcdF90WydMRUZUJ11cblx0XHRcdCk7XG5cdFx0XHR0aGlzLmFkZFVzZXJJbnB1dHMoZm9yY2UpO1xuXHRcdFx0dGhpcy5zZW5kQWN0aW9uTWVzc2FnZShfdFsnQUNUSU9OX01PVkVfU1RBUlQnXSxmb3JjZSk7XG5cdFx0XHR0aGlzLm9yaWVudGVkID0gJ2xlZnQnO1xuXHRcdH0pLmJpbmQodGhpcykpO1xuXG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5tb3ZlLnJpZ2h0XCIsKGZ1bmN0aW9uKGUpe1xuXHRcdFx0dmFyIGZvcmNlID0gbmV3IGRlaW1vcy5waHlzaWMuVXNlck1vdmVtZW50KFxuXHRcdFx0XHRuZXcgb3JnLmRieXplcm8udG9vbHMuVmVjdG9yKHRoaXMubW92ZV9zcGVlZCwwKSxcblx0XHRcdFx0X3RbJ1JJR0hUJ11cblx0XHRcdCk7XG5cdFx0XHR0aGlzLmFkZFVzZXJJbnB1dHMoZm9yY2UpO1xuXHRcdFx0dGhpcy5zZW5kQWN0aW9uTWVzc2FnZShfdFsnQUNUSU9OX01PVkVfU1RBUlQnXSxmb3JjZSk7XG5cdFx0XHR0aGlzLm9yaWVudGVkID0gJ3JpZ2h0Jztcblx0XHR9KS5iaW5kKHRoaXMpKTtcblxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3RlcihcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIubW92ZS5sZWZ0LnN0b3BcIiwoZnVuY3Rpb24oZSl7XG5cdFx0XHR0aGlzLnJlbW92ZVVzZXJJbnB1dHMoX3RbJ0xFRlQnXSk7XG5cdFx0fSkuYmluZCh0aGlzKSk7XG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLm1vdmUucmlnaHQuc3RvcFwiLChmdW5jdGlvbihlKXtcblx0XHRcdHRoaXMucmVtb3ZlVXNlcklucHV0cyhfdFsnUklHSFQnXSk7XG5cdFx0fSkuYmluZCh0aGlzKSk7XG5cblx0XHQvL2JpbmQganVtcCBldmVudFxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3RlcihcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIuanVtcFwiLChmdW5jdGlvbihlKXtcblx0XHRcdGlmKCF0aGlzLmlzTGFuZGVkID09IGZhbHNlICYmIHRoaXMuc3BlYWtpbmcgPT0gZmFsc2UpIHtcblx0XHRcdFx0dmFyIGZvcmNlID0gbmV3IGRlaW1vcy5waHlzaWMuVXNlck1vdmVtZW50KFxuXHRcdFx0XHRcdG5ldyBvcmcuZGJ5emVyby50b29scy5WZWN0b3IoMCxwYXJzZUludCgnLScrdGhpcy5qdW1wX3NwZWVkKSksXG5cdFx0XHRcdFx0X3RbJ0pVTVAnXVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0aGlzLmFkZEZvcmNlTmV4dFN0ZXAoZm9yY2UubW92ZW1lbnQpIDtcblx0XHRcdFx0dGhpcy5zZW5kQWN0aW9uTWVzc2FnZShfdFsnQUNUSU9OX0pVTVAnXSxmb3JjZSk7XG5cblx0XHRcdH1cblx0XHR9KS5iaW5kKHRoaXMpKTtcblxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3RlcihcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIuZ28uZG93blwiLChmdW5jdGlvbihlKXtcblx0XHRcdHRoaXMuZ29pbmdEb3duID0gdHJ1ZTtcblx0XHRcdHRoaXMudW5sYW5kZWQoKTtcblx0XHRcdHRoaXMuc2VuZEFjdGlvbk1lc3NhZ2UoX3RbJ0FDVElPTl9HT0lOR19ET1dOJ10pO1xuXHRcdH0pLmJpbmQodGhpcykpO1xuXG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5nby5kb3duLnN0b3BcIiwoZnVuY3Rpb24oZSl7XG5cdFx0XHR0aGlzLmdvaW5nRG93biA9IGZhbHNlO1xuXHRcdFx0dGhpcy5zZW5kQWN0aW9uTWVzc2FnZShfdFsnQUNUSU9OX0dPSU5HX0RPV05fU1RPUCddKTtcblx0XHR9KS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50LkF2YXRhci5wcm90b3R5cGUudW5iaW5kRXZlbnQgPSBmdW5jdGlvbigpIHtcblx0XHQvL2JpbmQgc3BlZWsgZXZlbnRcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3RlcihcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIuc3BlYWtcIik7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLnNwZWFrXCIpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5tb3ZlLmxlZnQuc3RvcFwiKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3RlcihcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIubW92ZS5yaWdodC5zdG9wXCIpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5tb3ZlLmxlZnRcIik7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLm1vdmUucmlnaHRcIik7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLmp1bXBcIik7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLmdvLmRvd25cIik7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLmdvLmRvd24uc3RvcFwiKTtcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50LkF2YXRhci5wcm90b3R5cGUuc2VuZEFjdGlvbk1lc3NhZ2UgPSBmdW5jdGlvbih0eXBlLCBmb3JjZSkge1xuXHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0dmFyIG1lc3NhZ2UgPSB7fTtcblx0XHRtZXNzYWdlW190WydBQ1RJT04nXV0gPSB0eXBlO1xuXHRcdG1lc3NhZ2VbX3RbJ01FU1NBR0UnXV0gPSB7fTtcblx0XHRpZihmb3JjZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRtZXNzYWdlW190WydNRVNTQUdFJ11dW190WydNRVNTQUdFX01PVkVfSUQnXV0gPSBmb3JjZS5pZDtcblx0XHRcdG1lc3NhZ2VbX3RbJ01FU1NBR0UnXV1bX3RbJ01FU1NBR0VfTU9WRV9UWVBFJ11dID0gZm9yY2UudHlwZTtcblx0XHRcdG1lc3NhZ2VbX3RbJ01FU1NBR0UnXV1bX3RbJ01FU1NBR0VfTU9WRV9TVEFSVCddXSA9IGZvcmNlLnN0YXJ0VGltZXN0YW1wO1xuXHRcdFx0bWVzc2FnZVtfdFsnTUVTU0FHRSddXVtfdFsnTUVTU0FHRV9EVVJBVElPTiddXSA9IGZvcmNlLmR1cmF0aW9uO1xuXHRcdH1cblx0XHRtZXNzYWdlW190WydNRVNTQUdFJ11dW190WydNRVNTQUdFX1BPU0lUSU9OJ11dID0ge307XG5cdFx0bWVzc2FnZVtfdFsnTUVTU0FHRSddXVtfdFsnTUVTU0FHRV9QT1NJVElPTiddXS54ID0gcGFyc2VJbnQodGhpcy5wb3NpdGlvbi54KTtcblx0XHRtZXNzYWdlW190WydNRVNTQUdFJ11dW190WydNRVNTQUdFX1BPU0lUSU9OJ11dLnkgPSBwYXJzZUludCh0aGlzLnBvc2l0aW9uLnkpO1xuXHRcdGRlaW1vcy5FbmdpbmUubmV0d29ya01hbmFnZXIuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG5cdH1cblxuXHQvL2FkZGluZyB1c2VyIGtleWJvYXJkIChvciBvdGhlciBpbnB1dCA/KSBldmVudHNcblx0ZGVpbW9zLmVsZW1lbnQuQXZhdGFyLnByb3RvdHlwZS5hZGRVc2VySW5wdXRzID0gZnVuY3Rpb24obXZ0KSB7XG5cdFx0dGhpcy51c2VySW5wdXRzW212dC5pZF0gPSBtdnQgO1xuXHR9XG5cblxuXHQvL3JlbW92aW5nIHVzZXIga2V5Ym9hcmQgKG9yIG90aGVyIGlucHV0ID8pIGV2ZW50c1xuXHRkZWltb3MuZWxlbWVudC5BdmF0YXIucHJvdG90eXBlLnJlbW92ZVVzZXJJbnB1dHMgPSBmdW5jdGlvbih0eXBlKSB7XG5cdFx0Zm9yKGlkIGluIHRoaXMudXNlcklucHV0cykge1xuXHRcdFx0dmFyIGlucHV0ID0gdGhpcy51c2VySW5wdXRzW2lkXTtcblx0XHRcdGlmKGlucHV0LnR5cGUgPT09IHR5cGUpIHtcblx0XHRcdFx0aW5wdXQuZHVyYXRpb24gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGlucHV0LnN0YXJ0VGltZXN0YW1wO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vYWRkaW5nIGZvcmNlIG5leHQgc3RlcFxuXHRkZWltb3MuZWxlbWVudC5BdmF0YXIucHJvdG90eXBlLmFkZEZvcmNlTmV4dFN0ZXAgPSBmdW5jdGlvbihmb3JjZSkge1xuXHRcdHRoaXMud2FpdGluZ0ZvcmNlLnB1c2goZm9yY2UpIDtcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50LkF2YXRhci5wcm90b3R5cGUuYWRkaW5nV2FpdGluZ0ZvcmNlcyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBmb3JjZXMgPSB0aGlzLndhaXRpbmdGb3JjZTtcblx0XHRmb3IoZm9yY2UgaW4gZm9yY2VzKSB7XG5cdFx0XHR0aGlzLnZlbG9jaXR5LmFkZChmb3JjZXNbZm9yY2VdKTtcblx0XHRcdHRoaXMud2FpdGluZ0ZvcmNlLnNwbGljZSgwLDEpO1xuXHRcdH1cblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50LkF2YXRhci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZHQsIG5vdykge1xuXG5cdFx0Ly90b2dnbGUgc3BlYWtlciBpZiBuZWVkZWRcblx0XHRpZih0aGlzLnNwZWFraW5nKSB7XG5cdFx0XHR2YXIgbmV3X3NheWluZyA9IHRoaXMuZ2V0U2F5aW5nKCk7XG5cdFx0XHRpZih0aGlzLnNheWluZyAhPT0gbmV3X3NheWluZykge1xuXHRcdFx0XHR0aGlzLnNheWluZyA9IG5ld19zYXlpbmc7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zZW5kU3luYycpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZih0aGlzLmxhc3RTYXllZCArIDUwMDAgPCBub3cgJiYgdGhpcy5zYXlpbmcgIT09ICcnKSB7XG5cdFx0XHRcdHRoaXMuc3BlYWtlci5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuc3BlYWtlci5zZXRUZXh0KCcnKTtcblx0XHRcdFx0dGhpcy5zYXlpbmcgPSAnJztcblx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnNlbmRTeW5jJyk7XG5cdFx0XHR9IFxuXHRcdH1cblxuXHRcdC8vY2FsbCBwYXJlbnQgdXBkYXRlXG5cdFx0QXZhdGFyLl9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyxkdCxub3cpO1xuXG5cdFx0Ly9hZGRpbmcgdXNlciBhY3Rpb24gdGhyb3VnaCBrZXlib2FyZCB0byB0aGUgbW92ZW1lbnRcblx0XHRmb3IoaWQgaW4gdGhpcy51c2VySW5wdXRzKSB7XG5cdFx0XHR2YXIgaW5wdXQgPSB0aGlzLnVzZXJJbnB1dHNbaWRdO1xuXHRcdFx0dGhpcy50b01vdmUueCArPSBwYXJzZUZsb2F0KGlucHV0Lm1vdmVtZW50LnggKiBkdC8xMDAwICogTWF0aC5taW4oMSxpbnB1dC5kdXJhdGlvbkludGVncmF0ZWQvMTAwKSk7Ly90byBtYWtlIHBvc3NpYmxlIHNtYWxsIG12dFxuXHRcdFx0dGhpcy50b01vdmUueSArPSBwYXJzZUZsb2F0KGlucHV0Lm1vdmVtZW50LnkgKiBkdC8xMDAwKTtcblx0XHRcdGlucHV0LmR1cmF0aW9uSW50ZWdyYXRlZCA9IGlucHV0LmR1cmF0aW9uSW50ZWdyYXRlZCArIGR0O1xuXG5cblx0XHRcdC8vZmluaXNoIHRoZSBpbnRlcnBvbGF0aW9uXG5cdFx0XHRpZihpbnB1dC5kdXJhdGlvbiAhPT0gbnVsbCkge1xuXHRcdFx0XHQvL3NpIG9uIGEgdHJvcCBpbnRlZ3Jlciwgb24gY2hhbmdlIGxlIHRvdGFsIGludGVncmVyIGEgbGEgbCdpbnRlZ3JhdGlvbiByZWVsXG5cdFx0XHRcdC8vcG91ciBuZSBwYXMgZmFpcmUgZGUgcmV0b3VyXG5cdFx0XHRcdGlucHV0LmR1cmF0aW9uID0gTWF0aC5tYXgoaW5wdXQuZHVyYXRpb25JbnRlZ3JhdGVkLGlucHV0LmR1cmF0aW9uKTtcblx0XHRcdFx0dmFyIG1pc3NpbmdJbnRlZ3JhdGlvbiA9IGlucHV0LmR1cmF0aW9uIC0gaW5wdXQuZHVyYXRpb25JbnRlZ3JhdGVkO1xuXG5cdFx0XHRcdHRoaXMudG9Nb3ZlLnggKz0gcGFyc2VGbG9hdCgoaW5wdXQubW92ZW1lbnQueCAqIG1pc3NpbmdJbnRlZ3JhdGlvbi8xMDAwKSk7XG5cdFx0XHRcdHRoaXMudG9Nb3ZlLnkgKz0gcGFyc2VGbG9hdCgoaW5wdXQubW92ZW1lbnQueSAqIG1pc3NpbmdJbnRlZ3JhdGlvbi8xMDAwKSk7XG5cblx0XHRcdFx0dGhpcy5zZW5kQWN0aW9uTWVzc2FnZShkZWltb3MuRW5naW5lLl90WydBQ1RJT05fTU9WRV9TVE9QJ10saW5wdXQpO1xuXHRcdFx0XHRkZWxldGUgdGhpcy51c2VySW5wdXRzW2lkXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5BdmF0YXIucHJvdG90eXBlLm9uTW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdEF2YXRhci5fc3VwZXIucHJvdG90eXBlLm9uTW92ZS5jYWxsKHRoaXMpO1xuXHRcdHRoaXMucmVuZGVyTmFtZSgpO1xuXHRcdHRoaXMucmVuZGVyU3BlYWtlcigpO1xuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuQXZhdGFyLnByb3RvdHlwZS5vbkp1c3RMYW5kID0gZnVuY3Rpb24oKSB7XG5cdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zZW5kU3luY1wiKTtcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50LkF2YXRhci5wcm90b3R5cGUub25VbmxhbmQgPSBmdW5jdGlvbigpIHtcblx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnNlbmRTeW5jXCIpO1xuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuQXZhdGFyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcblx0XHRpZihBdmF0YXIuX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKSkge1xuXHRcdFx0dGhpcy5yZW5kZXJOYW1lKCk7XG5cdFx0XHR0aGlzLnJlbmRlclNwZWFrZXIoKTtcblx0XHRcdGlmKCEhdGhpcy5IUCkgdGhpcy5yZW5kZXJIUCgpO1xuXHRcdH1cblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50LkF2YXRhci5wcm90b3R5cGUuZ2V0U2F5aW5nID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHR4dCA9IHRoaXMuc3BlYWtlci5nZXRUZXh0KCk7XG5cdFx0dHh0ID0gdHh0LnJlcGxhY2UoLzwoPzoufFxcbikqPz4vZ20sICcnKTtcblx0XHR0eHQgPSB0eHQucmVwbGFjZSgvJy9nbSwgXCJcXCdcIik7XG5cdFx0dHh0ID0gdHh0LnJlcGxhY2UoL1wiL2dtLCAnXFxcIicpO1xuXHRcdHR4dCA9IHR4dC5yZXBsYWNlKC9cXHsvZ20sIFwiKFwiKTtcblx0XHR0eHQgPSB0eHQucmVwbGFjZSgvXFx9L2dtLCBcIilcIik7XG5cdFx0cmV0dXJuIHR4dDtcblx0fTtcblxuXG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBBdmF0YXIgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTNcXGFzYyBzeHowOC8wOVxuICogQGRlc2NyaXB0aW9uIDogU2VydmVyQXZhdGFyIG1vZGVsXG4gKlxuICoqL1xuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXG5cdGRlaW1vcy5lbGVtZW50ID0gZGVpbW9zLmVsZW1lbnQgfHwge30gO1xuXG5cdC8qKlxuXHQgKiBTZXJ2ZXJBdmF0YXIgY29uc3RydWN0b3Jcblx0ICpcblx0ICoqL1xuXHR2YXIgU2VydmVyQXZhdGFyID0gZGVpbW9zLmVsZW1lbnQuU2VydmVyQXZhdGFyID0gZnVuY3Rpb24gKG5hbWUscG9zaXRpb24sdmVsb2NpdHksYWNjZWxlcmF0aW9uLHNpemUsbWFzcyx1c2VySW5wdXRWZWxvY2l0eSxzZXJ2ZXJpZCxkZWx0YXNob3cpIHtcblx0XHRTZXJ2ZXJBdmF0YXIuX3N1cGVyLmNhbGwodGhpcyxwb3NpdGlvbixzaXplLHNlcnZlcmlkLGRlbHRhc2hvdyk7XG5cdFx0dGhpcy5kb21JZCA9ICdzZXJ2ZXJfYXZhdGFyXycgKyBzZXJ2ZXJpZCArICdfJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgJ18nICsgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSoxMDAwMDAwKSsxKTsgO1xuXHRcdHRoaXMudXNlcklucHV0VmVsb2NpdHkgPSB1c2VySW5wdXRWZWxvY2l0eSA7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm1hc3MgPSBtYXNzO1xuXHRcdC8vdXNlZCBmb3Igc21vb3RoIG1vdmVcblx0XHR0aGlzLmR0SW50ZWdyYXRpb25JbnB1dCA9IDA7XG5cdFx0dGhpcy5sYXN0VXNlcklucHV0VmVsb2NpdHlYID0gMDtcblx0fVxuXG5cdG9yZy5kYnl6ZXJvLnRvb2xzLkluaGVyaXQoZGVpbW9zLmVsZW1lbnQuU2VydmVyQXZhdGFyLCBkZWltb3MuZWxlbWVudC5FbGVtZW50KTtcblxuXHRkZWltb3MuZWxlbWVudC5TZXJ2ZXJBdmF0YXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcblx0XHRTZXJ2ZXJBdmF0YXIuX3N1cGVyLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyk7XG5cblx0XHR0aGlzLmRvbUVsZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIrZGVpbW9zLkVuZ2luZS5hc3NldFVSTCtcIi9zcHJpdGVzaGVldC9jaGFyL1wiK3RoaXMuc2VydmVyaWQrXCIvc3ByaXRlc2hlZXQucG5nKVwiO1xuXG5cdFx0dGhpcy5pbml0U3BlYWtlcih0cnVlKTtcblx0XHR0aGlzLmluaXROYW1lKCk7XG5cblx0XHQvL2xvYWQgd2VhcG9uXG5cdFx0aWYoISF0aGlzLml0ZW1fc2xvdF9yaWdodF9oYW5kKSB7XG5cdFx0XHR0aGlzLmluaXRXZWFwb24odGhpcy5pdGVtX3Nsb3RfcmlnaHRfaGFuZC5pZCk7XG5cdFx0fVxuXG5cdFx0aWYoISF0aGlzLkhQKSB0aGlzLmluaXRIUCgpO1xuXHRcdC8vb2JqZWN0IGNvbGxpc2lvbnMgYXJlIG1hbmFnZWQgYnkgc2VydmVyXG5cdFx0Ly8gdGhpcy5jb2xsaXNpb25UeXBlRW5hYmxlZFsnYm9udXMnXSA9IHRydWU7XG5cdH07XG5cblx0ZGVpbW9zLmVsZW1lbnQuU2VydmVyQXZhdGFyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkdCxub3cpIHtcblxuXHRcdFNlcnZlckF2YXRhci5fc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMsZHQsbm93KTtcblxuXHRcdGlmKHRoaXMubGFzdFVzZXJJbnB1dFZlbG9jaXR5WCAhPT0gdGhpcy51c2VySW5wdXRWZWxvY2l0eS54KSB7XG5cdFx0XHR0aGlzLmR0SW50ZWdyYXRpb25JbnB1dCA9IDA7XG5cdFx0XHR0aGlzLmxhc3RVc2VySW5wdXRWZWxvY2l0eVggPSB0aGlzLnVzZXJJbnB1dFZlbG9jaXR5Lng7XG5cdFx0fVxuXHRcdC8vIHRoaXMudG9Nb3ZlLnggKz0gcGFyc2VGbG9hdCh0aGlzLnVzZXJJbnB1dFZlbG9jaXR5LnggKiB0aGlzLmR0SW50ZWdyYXRpb25JbnB1dC8xMDAwKS87XG5cdFx0Ly8gdGhpcy50b01vdmUueSArPSBwYXJzZUZsb2F0KHRoaXMudXNlcklucHV0VmVsb2NpdHkueSAqIGR0LzEwMDApLztcblx0XHR0aGlzLnRvTW92ZS54ID0gcGFyc2VGbG9hdCh0aGlzLnRvTW92ZS54ICsgdGhpcy51c2VySW5wdXRWZWxvY2l0eS54ICogZHQvMTAwMCAqIE1hdGgubWluKDEsdGhpcy5kdEludGVncmF0aW9uSW5wdXQvMTAwKSk7Ly90byBtYWtlIHBvc3NpYmxlIHNtYWxsIG12dFxuXHRcdHRoaXMudG9Nb3ZlLnkgPSBwYXJzZUZsb2F0KHRoaXMudG9Nb3ZlLnkgKyB0aGlzLnVzZXJJbnB1dFZlbG9jaXR5LnkgKiBkdC8xMDAwKTtcblx0XHR0aGlzLmR0SW50ZWdyYXRpb25JbnB1dCArPSBkdDtcblxuXHRcdHRoaXMuc3BlYWtlci5zZXRUZXh0KHRoaXMuc2F5aW5nKTtcblx0XHRpZiggdGhpcy5zYXlpbmcubGVuZ3RoID4gMCApIHtcblx0XHRcdHRoaXMuc3BlYWtlci5zaG93KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc3BlYWtlci5oaWRlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGRlaW1vcy5lbGVtZW50LlNlcnZlckF2YXRhci5wcm90b3R5cGUub25Nb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0U2VydmVyQXZhdGFyLl9zdXBlci5wcm90b3R5cGUub25Nb3ZlLmNhbGwodGhpcyk7XG5cdFx0dGhpcy5yZW5kZXJOYW1lKCk7XG5cdFx0dGhpcy5yZW5kZXJTcGVha2VyKCk7XG5cdFx0aWYoISF0aGlzLkhQKSB0aGlzLnJlbmRlckhQKCk7XG5cdH07XG5cblx0ZGVpbW9zLmVsZW1lbnQuU2VydmVyQXZhdGFyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcblx0XHRpZihTZXJ2ZXJBdmF0YXIuX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKSlcdHtcblx0XHRcdHRoaXMucmVuZGVyTmFtZSgpO1xuXHRcdFx0dGhpcy5yZW5kZXJTcGVha2VyKCk7XG5cdFx0fVxuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuU2VydmVyQXZhdGFyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0U2VydmVyQXZhdGFyLl9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuXHRcdGRlbGV0ZSBkZWltb3MuRW5naW5lLnNjZW5lLmF2YXRhcnNbdGhpcy5zZXJ2ZXJpZF07XG5cdH1cblxufSkob3JnLmRieXplcm8uZGVpbW9zLCBkb2N1bWVudCk7IiwiLyoqXG4gKlxuICogb3JnLmRieXplcm8uZGVpbW9zLmVsZW1lbnQuQmxvY2sgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTMvMDgvMjFcbiAqIEBkZXNjcmlwdGlvbiA6IEJsb2NrIGdhbWVcbiAqXG4gKiovXG5cblxuKGZ1bmN0aW9uKGRlaW1vcyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblx0dmFyIFZlY3RvciA9IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3Rvcjtcblx0ZGVpbW9zLmVsZW1lbnQgPSBkZWltb3MuZWxlbWVudCB8fCB7fSA7XG5cblx0LyoqXG5cdCAqIEJsb2NrIGNvbnN0cnVjdG9uXG5cdCAqIFxuXHQgKiBAcGFyYW0gcG9zaXRpb24gVmVjdG9yIHBvc2l0aW9uIG9mIHRoZSBibG9jayBpbnNpZGUgdGhlIHpvbmVcblx0ICogQHBhcmFtIHNpemUgVmVjdG9yIHNpemUgb2YgdGhlIGJsb2NrIGluc2lkZSB0aGUgem9uZVxuXHQgKlxuXHQgKiAqL1xuXHRkZWltb3MuZWxlbWVudC5CbG9jayA9IGZ1bmN0aW9uKHBvc2l0aW9uLHNpemUsdHlwZSkge1xuXHRcdHRoaXMucG9zaXRpb24gXHQ9IHBvc2l0aW9uIDtcblx0XHR0aGlzLmhlaWdodFx0PSBzaXplLnkgO1xuXHRcdHRoaXMud2lkdGhcdD0gc2l6ZS54IDtcblx0XHR0aGlzLnR5cGVcdD0gdHlwZSA7XG5cdFx0dGhpcy5pZCA9ICdibG9ja18nK3Bvc2l0aW9uLngrJ18nK3Bvc2l0aW9uLnkrJ18nK3NpemUueCsnXycrc2l6ZS55KydfJytNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAgKyAxKSA7XG5cdFx0dGhpcy52ZXJ0ZXhUTCA9IG5ldyBWZWN0b3IocG9zaXRpb24ueCwgICAgICAgICAgICAgICAgICBwb3NpdGlvbi55KTtcblx0XHR0aGlzLnZlcnRleFRSID0gbmV3IFZlY3Rvcihwb3NpdGlvbi54ICsgc2l6ZS54LCAgICAgICAgIHBvc2l0aW9uLnkpO1xuXHRcdHRoaXMudmVydGV4QkwgPSBuZXcgVmVjdG9yKHBvc2l0aW9uLngsICAgICAgICAgICAgICAgICAgcG9zaXRpb24ueSArIHNpemUueSk7XG5cdFx0dGhpcy52ZXJ0ZXhCUiA9IG5ldyBWZWN0b3IocG9zaXRpb24ueCArIHNpemUueCwgICAgICAgICBwb3NpdGlvbi55ICsgc2l6ZS55KTtcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50LkJsb2NrLnR5cGUgPSB7XG5cdFx0QkxPQ0sgOiB7dmFsdWU6IDAsIHR5cGU6J2Jsb2NrJ30sXG5cdFx0UExBVEVGT1JNIDoge3ZhbHVlOiAxLCB0eXBlOidwbGF0ZWZvcm0nfSxcblx0fVxuXG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBvcmcuZGJ5emVyby5kZWltb3MuZWxlbWVudC5ab25lIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA4LzA0XG4gKiBAZGVzY3JpcHRpb24gOiBab25lIGdhbWVcbiAqXG4gKiovXG5cblxuKGZ1bmN0aW9uKGRlaW1vcyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblx0ZGVpbW9zLmVsZW1lbnQgPSBkZWltb3MuZWxlbWVudCB8fCB7fSA7XG5cdFxuXHQvKipcblx0ICogWm9uZSBjb25zdHJ1Y3RvblxuXHQgKiBcblx0ICogQHBhcmFtIGRvbUlkIGRvY3VtZW50IGlkIG9mIHRoZSBnYW1lem9uZSwgd2hlcmUgdGhlIGFjdGlvbiBhcHBlbmQgIVxuXHQgKlxuXHQgKiAqL1xuXHRkZWltb3MuZWxlbWVudC5ab25lID0gZnVuY3Rpb24obmFtZSwgZG9tSWQsIHdpZHRoLCBoZWlnaHQsIGJsb2Nrcykge1xuXHRcdHRoaXMuYXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUlkKSA7XG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdHRoaXMubmFtZSA9IG5hbWUgO1xuXHRcdHRoaXMuYmxvY2tzID0gW10gO1xuXHRcdHRoaXMuZG9tQmxvY2tzID0gW10gO1xuXHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXMoYmxvY2tzKTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBibG9jayA9IGJsb2Nrc1trZXlzW2ldXTtcblx0XHRcdHRoaXMuYWRkQmxvY2soYmxvY2spO1xuXHRcdH07XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5ab25lLnByb3RvdHlwZSA9IHtcblx0XHRhZGRCbG9ja0J5SWQgOiBmdW5jdGlvbihibG9ja0lkLHR5cGUpIHtcblx0XHRcdHZhciBkb21FbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmxvY2tJZCkgO1xuXHRcdFx0dmFyIHBvc2l0aW9uID0gbmV3IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3Rvcihkb21FbGVtLm9mZnNldExlZnQsZG9tRWxlbS5vZmZzZXRUb3ApIDtcblx0XHRcdHZhciBzaXplID0gbmV3IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3Rvcihkb21FbGVtLm9mZnNldFdpZHRoLGRvbUVsZW0ub2Zmc2V0SGVpZ2h0KSA7XG5cblx0XHRcdHZhciB0eXBlID0gKHR5cGUgPT0gJ3BsYXRlZm9ybWUnID8gZGVpbW9zLmVsZW1lbnQuQmxvY2sudHlwZS5QTEFURUZPUk0gOiBkZWltb3MuZWxlbWVudC5CbG9jay50eXBlLkJMT0NLKSA7XG5cdFx0XHR2YXIgYmxvY2sgPSBuZXcgZGVpbW9zLmVsZW1lbnQuQmxvY2socG9zaXRpb24sc2l6ZSx0eXBlKSA7XG5cdFx0XHR0aGlzLmFkZEJsb2NrKGJsb2NrKSA7XG5cdFx0fSxcblxuXHRcdGFkZEJsb2NrIDogZnVuY3Rpb24oYmxvY2spIHtcblx0XHRcdHZhciBkb21CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0ZG9tQmxvY2suc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdFx0ZG9tQmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG5cdFx0XHRkb21CbG9jay5zdHlsZS53aWR0aCA9IGJsb2NrLndpZHRoKydweCc7XG5cdFx0XHRkb21CbG9jay5zdHlsZS5oZWlnaHQgPSBibG9jay5oZWlnaHQrJ3B4Jztcblx0XHRcdGRvbUJsb2NrLnN0eWxlLmxlZnQgPSBibG9jay5wb3NpdGlvbi54KydweCc7XG5cdFx0XHRkb21CbG9jay5zdHlsZS50b3AgPSBibG9jay5wb3NpdGlvbi55KydweCc7XG5cdFx0XHRkb21CbG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDE4NiwgMTg2LCAxODYpJztcblx0XHRcdHRoaXMuYXJlYS5hcHBlbmRDaGlsZChkb21CbG9jayk7XG5cdFx0XHR0aGlzLmJsb2Nrcy5wdXNoKGJsb2NrKSA7XG5cdFx0XHR0aGlzLmRvbUJsb2Nrcy5wdXNoKGRvbUJsb2NrKSA7XG5cdFx0fSxcblxuXHRcdGRlc3Ryb3kgOiBmdW5jdGlvbihibG9jaykge1xuXHRcdFx0Y29uc29sZS5sb2coJ2Rlc3Ryb3lpbmcgem9uZScpO1xuXHRcdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmRvbUJsb2Nrcyk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIGRvbUJsb2NrID0gdGhpcy5kb21CbG9ja3Nba2V5c1tpXV07XG5cdFx0XHRcdHZhciBwYXJlbnROb2RlID0gZG9tQmxvY2sucGFyZW50Tm9kZTtcblx0XHRcdFx0aWYocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb21CbG9jayk7XG5cdFx0XHR9O1xuXHRcdFx0ZGVsZXRlIHRoaXMuYmxvY2tzO1xuXHRcdFx0ZGVsZXRlIHRoaXMuZG9tQmxvY2tzO1xuXHRcdH1cblx0fVxuXG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBBdmF0YXIgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTQvMTEvMDdcbiAqIEBkZXNjcmlwdGlvbiA6IFByb2plY3RpbGUgbW9kZWxcbiAqXG4gKiovXG5cbihmdW5jdGlvbihkZWltb3MsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0ZGVpbW9zLmVsZW1lbnQgPSBkZWltb3MuZWxlbWVudCB8fCB7fSA7XG5cblx0LyoqXG5cdCAqIFByb2plY3RpbGUgY29uc3RydWN0b3Jcblx0ICpcblx0ICoqL1xuXHR2YXIgUHJvamVjdGlsZSA9IGRlaW1vcy5lbGVtZW50LlByb2plY3RpbGUgPSBmdW5jdGlvbiAoc2VydmVyaWQscG9zaXRpb24sdmVsb2NpdHksYWNjZWxlcmF0aW9uLHNpemUsbWFzcyx0ZW1wbGF0ZUlkLHNraW4sY29sb3IsZGFtYWdlLG9yaWVudGF0aW9uLG93bmVySWQsZGVsdGFzaG93KSB7XG5cdFx0UHJvamVjdGlsZS5fc3VwZXIuY2FsbCh0aGlzLHBvc2l0aW9uLHNpemUsc2VydmVyaWQsZGVsdGFzaG93KTtcblx0XHR0aGlzLmRvbUlkID0gJ3Byb2plY3RpbGVfJyArIHNlcnZlcmlkICsgJ18nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAnXycgKyBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpKjEwMDAwMDApKzEpOyA7XG5cdFx0dGhpcy5vd25lciA9IG51bGw7XG5cdFx0dGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xuXHRcdHRoaXMuYWNjZWxlcmF0aW9uID0gYWNjZWxlcmF0aW9uO1xuXHRcdHRoaXMuc2tpbiA9IHNraW47XG5cdFx0dGhpcy5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uO1xuXHRcdHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuXHRcdHRoaXMubWFzcyA9IG1hc3M7XG5cdH1cblxuXHRvcmcuZGJ5emVyby50b29scy5Jbmhlcml0KGRlaW1vcy5lbGVtZW50LlByb2plY3RpbGUsIGRlaW1vcy5lbGVtZW50LkVsZW1lbnQpO1xuXG5cdGRlaW1vcy5lbGVtZW50LlByb2plY3RpbGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcblx0XHRQcm9qZWN0aWxlLl9zdXBlci5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xuXHRcdHRoaXMuZG9tRWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIitkZWltb3MuRW5naW5lLmFzc2V0VVJMK1wiL2ltYWdlcy9zcHJpdGVzaGVldC9cIit0aGlzLnNraW4rXCIucG5nKVwiO1xuXHRcdGlmKHRoaXMub3JpZW50YXRpb24gPT09ICdsZWZ0Jyl7XG5cdFx0XHR0aGlzLmRvbUVsZW0uc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9ICctJysodGhpcy5oZWlnaHQpKydweCc7XG5cdFx0fVxuXHRcdC8vb2JqZWN0IGNvbGxpc2lvbnMgYXJlIG1hbmFnZWQgYnkgc2VydmVyXG5cdFx0Ly8gdGhpcy5jb2xsaXNpb25UeXBlRW5hYmxlZFsnYXZhdGFycyddID0gdHJ1ZTtcblx0XHQvLyB0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkWydtb25zdGVycyddID0gdHJ1ZTtcblx0XHR0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkWydwbGF0ZWZvcm1lJ10gPSBmYWxzZTtcblx0fTtcblx0ZGVpbW9zLmVsZW1lbnQuUHJvamVjdGlsZS5wcm90b3R5cGUub25BcmVhQ29sbGlzaW9uVG9wID0gZnVuY3Rpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQpIHtcblx0XHQvL2RvIG5vdGhpbmcgIVxuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuUHJvamVjdGlsZS5wcm90b3R5cGUub25BcmVhQ29sbGlzaW9uID0gZnVuY3Rpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQpIHtcblx0XHR0aGlzLm9uQmxvY2tDb2xsaXNpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQpO1xuXHR9O1xuXG5cdGRlaW1vcy5lbGVtZW50LlByb2plY3RpbGUucHJvdG90eXBlLm9uQmxvY2tDb2xsaXNpb24gPSBmdW5jdGlvbihjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCkge1xuXHRcdGRlaW1vcy5FbmdpbmUuc2NlbmUuZGVzdHJveVByb2plY3RpbGUodGhpcyk7XG5cdH07XG5cblx0ZGVpbW9zLmVsZW1lbnQuUHJvamVjdGlsZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdFByb2plY3RpbGUuX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG5cdFx0ZGVsZXRlIGRlaW1vcy5FbmdpbmUuc2NlbmUucHJvamVjdGlsZXNbdGhpcy5zZXJ2ZXJpZF07XG5cdH1cblxufSkob3JnLmRieXplcm8uZGVpbW9zLCBkb2N1bWVudCk7IiwiLyoqXG4gKlxuICogTW9uc3RlciBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxNC8xMS8yNFxuICogQGRlc2NyaXB0aW9uIDogTW9uc3RlciBtb2RlbFxuICpcbiAqKi9cblxuKGZ1bmN0aW9uKGRlaW1vcyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblxuXHRkZWltb3MuZWxlbWVudCA9IGRlaW1vcy5lbGVtZW50IHx8IHt9IDtcblxuXHQvKipcblx0ICogTW9uc3RlciBjb25zdHJ1Y3RvclxuXHQgKlxuXHQgKiovXG5cdHZhciBNb25zdGVyID0gZGVpbW9zLmVsZW1lbnQuTW9uc3RlciA9IGZ1bmN0aW9uIChzZXJ2ZXJpZCxwb3NpdGlvbix2ZWxvY2l0eSxhY2NlbGVyYXRpb24sc2l6ZSxtYXNzLHRlbXBsYXRlaWQsc2tpbixjb2xvcixuYW1lLGRhbWFnZSxvcmllbnRhdGlvbixkZWx0YXNob3cpIHtcblx0XHRNb25zdGVyLl9zdXBlci5jYWxsKHRoaXMscG9zaXRpb24sc2l6ZSxzZXJ2ZXJpZCxkZWx0YXNob3cpO1xuXHRcdHRoaXMuZG9tSWQgPSAnbW9uc3Rlcl8nICsgc2VydmVyaWQgKyAnXycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICdfJyArIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkqMTAwMDAwMCkrMSk7IDtcblx0XHR0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XG5cdFx0dGhpcy5hY2NlbGVyYXRpb24gPSBhY2NlbGVyYXRpb247XG5cdFx0dGhpcy5zcGVha2luZyA9IGZhbHNlIDtcblx0XHR0aGlzLnNwZWFrZXIgPSBudWxsO1xuXHRcdHRoaXMubW92ZV9zcGVlZCA9IDA7XG5cdFx0dGhpcy5qdW1wX3NwZWVkID0gMDtcblx0XHR0aGlzLnNheWluZyA9IFwiXCI7XG5cdFx0dGhpcy5sYXN0U2F5ZWQgPSAwO1xuXHRcdHRoaXMuc2tpbiA9IHNraW47XG5cdFx0dGhpcy50ZW1wbGF0ZUlkID0gdGVtcGxhdGVpZDtcblx0XHR0aGlzLmNvbG9yID0gY29sb3I7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmRhbWFnZSA9IGRhbWFnZTtcblx0XHR0aGlzLm1hc3MgPSBtYXNzO1xuXHR9XG5cblx0b3JnLmRieXplcm8udG9vbHMuSW5oZXJpdChkZWltb3MuZWxlbWVudC5Nb25zdGVyLCBkZWltb3MuZWxlbWVudC5FbGVtZW50KTtcblxuXHRkZWltb3MuZWxlbWVudC5Nb25zdGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKXtcblx0XHRNb25zdGVyLl9zdXBlci5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xuXHRcdHRoaXMuZG9tRWxlbS5jbGFzc05hbWUgPSBcIm1vbnN0ZXJfXCIrdGhpcy5za2luO1xuXG5cdFx0Ly9zZXQgc3ByaXRlc2hlZXRcblx0XHR0aGlzLmRvbUVsZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIrZGVpbW9zLkVuZ2luZS5hc3NldFVSTCtcIi9zcHJpdGVzaGVldC9tb25zdGVyL1wiK3RoaXMudGVtcGxhdGVJZCtcIi9jb2xvci9cIit0aGlzLmNvbG9yK1wiL3Nwcml0ZXNoZWV0LnBuZylcIjtcblxuXHRcdC8vYWRkIHNwZWFrZXJcblx0XHR0aGlzLmluaXRTcGVha2VyKGZhbHNlKTtcblxuXHRcdC8vc2hvdyBtYWluIG5hbWVcblx0XHRpZighIXRoaXMubmFtZSkge1xuXHRcdFx0dGhpcy5pbml0TmFtZSh0cnVlKTtcblxuXHRcdFx0Ly9yZWRyYXcgSFAgdG8gYXBwbHkgY29ycmVjdCBuYW1lIHdpZHRoXG5cdFx0XHR0aGlzLnJlbmRlckhQKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5uYW1lV2lkdGggPSBkb21fZWxlbV9uYW1lLm9mZnNldFdpZHRoO1xuXHRcdHRoaXMubmFtZUhlaWdodCA9IGRvbV9lbGVtX25hbWUub2Zmc2V0SGVpZ2h0O1xuXG5cdFx0Ly9sb2FkIHdlYXBvblxuXHRcdGlmKCEhdGhpcy53ZWFwb25JZCkge1xuXHRcdFx0dGhpcy5pbml0V2VhcG9uKHRoaXMud2VhcG9uSWQpO1xuXHRcdH1cblx0XHQvL29iamVjdCBjb2xsaXNpb25zIGFyZSBtYW5hZ2VkIGJ5IHNlcnZlclxuXHRcdC8vIHRoaXMuY29sbGlzaW9uVHlwZUVuYWJsZWRbJ2F2YXRhcnMnXSA9IHRydWU7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5Nb25zdGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkdCwgbm93KSB7XG5cdFx0Ly9jYWxsIHBhcmVudCB1cGRhdGVcblx0XHRNb25zdGVyLl9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyxkdCxub3cpO1xuXG5cdFx0Ly90b2dnbGUgc3BlYWtlciBpZiBuZWVkZWRcblx0XHRpZih0aGlzLnNwZWFraW5nKSB7XG5cdFx0XHR2YXIgbmV3X3NheWluZyA9IHRoaXMuZ2V0U2F5aW5nKCk7XG5cdFx0XHRpZih0aGlzLnNheWluZyAhPT0gbmV3X3NheWluZykge1xuXHRcdFx0XHR0aGlzLnNheWluZyA9IG5ld19zYXlpbmc7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zZW5kU3luYycpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZih0aGlzLmxhc3RTYXllZCArIDUwMDAgPCBub3cgJiYgdGhpcy5zYXlpbmcgIT09ICcnKSB7XG5cdFx0XHRcdHRoaXMuc3BlYWtlci5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuc3BlYWtlci5zZXRUZXh0KCcnKTtcblx0XHRcdFx0dGhpcy5zYXlpbmcgPSAnJztcblx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnNlbmRTeW5jJyk7XG5cdFx0XHR9IFxuXHRcdH1cblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50Lk1vbnN0ZXIucHJvdG90eXBlLm9uTW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdE1vbnN0ZXIuX3N1cGVyLnByb3RvdHlwZS5vbk1vdmUuY2FsbCh0aGlzKTtcblx0XHRpZighIXRoaXMubmFtZSkgdGhpcy5yZW5kZXJOYW1lKCk7XG5cdFx0aWYodGhpcy5zYXlpbmcubGVuZ3RoID4gMCkgdGhpcy5yZW5kZXJTcGVha2VyKCk7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5Nb25zdGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcblx0XHRpZihNb25zdGVyLl9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcykpIHtcblx0XHRcdGlmKCEhdGhpcy5uYW1lKSB0aGlzLnJlbmRlck5hbWUoKTtcblx0XHRcdGlmKHRoaXMuc2F5aW5nLmxlbmd0aCA+IDApIHRoaXMucmVuZGVyU3BlYWtlcigpO1xuXHRcdH1cblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50Lk1vbnN0ZXIucHJvdG90eXBlLm9uQmxvY2tDb2xsaXNpb25MZWZ0ID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5fdGVtcEJsb2NrQ29sbGlzaW9uTGVmdFJpZ2h0KCk7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5Nb25zdGVyLnByb3RvdHlwZS5vbkJsb2NrQ29sbGlzaW9uUmlnaHQgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLl90ZW1wQmxvY2tDb2xsaXNpb25MZWZ0UmlnaHQoKTtcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50Lk1vbnN0ZXIucHJvdG90eXBlLm9uQXJlYUNvbGxpc2lvbkxlZnQgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLl90ZW1wQmxvY2tDb2xsaXNpb25MZWZ0UmlnaHQoKTtcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50Lk1vbnN0ZXIucHJvdG90eXBlLm9uQXJlYUNvbGxpc2lvblJpZ2h0ID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5fdGVtcEJsb2NrQ29sbGlzaW9uTGVmdFJpZ2h0KCk7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5Nb25zdGVyLnByb3RvdHlwZS5fdGVtcEJsb2NrQ29sbGlzaW9uTGVmdFJpZ2h0ID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy52ZWxvY2l0eS54ID0gLTEqcGFyc2VJbnQodGhpcy52ZWxvY2l0eS54KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBOYW1lXG5cdCAqL1xuXHRkZWltb3MuZWxlbWVudC5Nb25zdGVyLnByb3RvdHlwZS5pbml0TmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgZG9tX2VsZW1fbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0ZG9tX2VsZW1fbmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLHRoaXMuZG9tSWQrJ19uYW1lJykgO1xuXG5cdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0XHRkb21fZWxlbV9uYW1lLmlubmVySFRNTCA9IHRoaXMubmFtZTtcblx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmRpc3BsYXkgID0gJ25vbmUnIDtcblx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmZvbnRTaXplID0gJzEycHgnO1xuXHRcdGRvbV9lbGVtX25hbWUuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcblx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmNvbG9yID0gJyMnK3RoaXMuY29sb3I7XG5cdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS56SW5kZXggPSAxMDtcblx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLm9wYWNpdHkgPSAwLjc7XG5cdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS50ZXh0U2hhZG93ID0gJ3doaXRlIC0ycHggLTJweCAycHgsIHdoaXRlIDJweCAycHggMnB4LCB3aGl0ZSAtMnB4IDJweCAycHgsIHdoaXRlIDJweCAtMnB4IDJweCc7XG5cblx0XHRkZWltb3MuRW5naW5lLnpvbmUuYXJlYS5hcHBlbmRDaGlsZChkb21fZWxlbV9uYW1lKSA7XG5cdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5kaXNwbGF5ICA9ICdibG9jaycgO1xuXG5cdFx0dGhpcy5kb21FbGVtTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZG9tSWQrJ19uYW1lJyk7XG5cblx0XHR0aGlzLnJlbmRlck5hbWUuY2FsbCh0aGlzKTtcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50Lk1vbnN0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHRNb25zdGVyLl9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuXHRcdGRlbGV0ZSBkZWltb3MuRW5naW5lLnNjZW5lLm1vbnN0ZXJzW3RoaXMuc2VydmVyaWRdO1xuXHR9XG5cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIEl0ZW0gT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTQvMTEvMjdcbiAqIEBkZXNjcmlwdGlvbiA6IEl0ZW0gbW9kZWxcbiAqXG4gKiovXG5cbihmdW5jdGlvbihkZWltb3MsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0ZGVpbW9zLmVsZW1lbnQgPSBkZWltb3MuZWxlbWVudCB8fCB7fSA7XG5cblx0LyoqXG5cdCAqIEl0ZW0gY29uc3RydWN0b3Jcblx0ICpcblx0ICoqL1xuXHR2YXIgSXRlbSA9IGRlaW1vcy5lbGVtZW50Lkl0ZW0gPSBmdW5jdGlvbiAoc2VydmVyaWQscG9zaXRpb24sdmVsb2NpdHksYWNjZWxlcmF0aW9uLHNpemUsbWFzcyx0ZW1wbGF0ZWlkLHNraW4sY29sb3IsbmFtZSxvcmllbnRhdGlvbixkZWx0YXNob3cpIHtcblx0XHRJdGVtLl9zdXBlci5jYWxsKHRoaXMscG9zaXRpb24sc2l6ZSxzZXJ2ZXJpZCxkZWx0YXNob3cpO1xuXHRcdHRoaXMuZG9tSWQgPSAnaXRlbV8nICsgc2VydmVyaWQgKyAnXycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICdfJyArIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkqMTAwMDAwMCkrMSk7IDtcblx0XHR0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XG5cdFx0dGhpcy5hY2NlbGVyYXRpb24gPSBhY2NlbGVyYXRpb247XG5cdFx0dGhpcy5tb3ZlX3NwZWVkID0gMDtcblx0XHR0aGlzLmp1bXBfc3BlZWQgPSAwO1xuXHRcdHRoaXMuc2tpbiA9IHNraW47XG5cdFx0dGhpcy50ZW1wbGF0ZUlkID0gdGVtcGxhdGVpZDtcblx0XHR0aGlzLmNvbG9yID0gY29sb3I7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmRlbHRhc2hvdyA9IGRlbHRhc2hvdztcblx0XHR0aGlzLm1hc3MgPSBtYXNzO1xuXHR9XG5cblx0b3JnLmRieXplcm8udG9vbHMuSW5oZXJpdChkZWltb3MuZWxlbWVudC5JdGVtLCBkZWltb3MuZWxlbWVudC5FbGVtZW50KTtcblxuXG5cdGRlaW1vcy5lbGVtZW50Lkl0ZW0ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpe1xuXHRcdEl0ZW0uX3N1cGVyLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyk7XG5cdFx0dGhpcy5kb21FbGVtLmNsYXNzTmFtZSA9IFwiaXRlbV9cIit0aGlzLnNraW47XG5cblx0XHQvL3NldCBzcHJpdGVzaGVldFxuXHRcdHRoaXMuZG9tRWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIitkZWltb3MuRW5naW5lLmFzc2V0VVJMK1wiL3Nwcml0ZXNoZWV0L2l0ZW0vXCIrdGhpcy50ZW1wbGF0ZUlkK1wiL1wiK3RoaXMuY29sb3IrXCIvc3ByaXRlc2hlZXQucG5nKVwiO1xuXHRcdHRoaXMuZG9tRWxlbS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItODAwcHhcIjtcblxuXHRcdC8vc2hvdyBtYWluIG5hbWVcblx0XHRpZighIXRoaXMubmFtZSkgdGhpcy5pbml0TmFtZSh0cnVlKTtcblxuXHRcdHRoaXMubmFtZVdpZHRoID0gZG9tX2VsZW1fbmFtZS5vZmZzZXRXaWR0aDtcblx0XHR0aGlzLm5hbWVIZWlnaHQgPSBkb21fZWxlbV9uYW1lLm9mZnNldEhlaWdodDtcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50Lkl0ZW0ucHJvdG90eXBlLm9uTW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdEl0ZW0uX3N1cGVyLnByb3RvdHlwZS5vbk1vdmUuY2FsbCh0aGlzKTtcblx0XHRpZighIXRoaXMubmFtZSkgdGhpcy5yZW5kZXJOYW1lKCk7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5JdGVtLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcblx0XHRpZihJdGVtLl9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcykpIHtcblx0XHRcdGlmKCEhdGhpcy5uYW1lKSB0aGlzLnJlbmRlck5hbWUoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogTmFtZVxuXHQgKi9cblx0ZGVpbW9zLmVsZW1lbnQuSXRlbS5wcm90b3R5cGUuaW5pdE5hbWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYodGhpcy5uYW1lICE9PSAnJykge1xuXHRcdFx0dmFyIGRvbV9lbGVtX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLHRoaXMuZG9tSWQrJ19uYW1lJykgO1xuXG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5pbm5lckhUTUwgPSB0aGlzLm5hbWU7XG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmRpc3BsYXkgID0gJ25vbmUnIDtcblx0XHRcdGRvbV9lbGVtX25hbWUuc3R5bGUuZm9udFNpemUgPSAnMTJweCc7XG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmNvbG9yID0gJyMnK3RoaXMuY29sb3I7XG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLnpJbmRleCA9IDEwO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5vcGFjaXR5ID0gMC43O1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS50ZXh0U2hhZG93ID0gJ3doaXRlIC0ycHggLTJweCAycHgsIHdoaXRlIDJweCAycHggMnB4LCB3aGl0ZSAtMnB4IDJweCAycHgsIHdoaXRlIDJweCAtMnB4IDJweCc7XG5cblx0XHRcdGRlaW1vcy5FbmdpbmUuem9uZS5hcmVhLmFwcGVuZENoaWxkKGRvbV9lbGVtX25hbWUpIDtcblx0XHRcdGRvbV9lbGVtX25hbWUuc3R5bGUuZGlzcGxheSAgPSAnYmxvY2snIDtcblxuXHRcdFx0dGhpcy5kb21FbGVtTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZG9tSWQrJ19uYW1lJyk7XG5cblx0XHRcdHRoaXMucmVuZGVyTmFtZS5jYWxsKHRoaXMpO1xuXHRcdH1cblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50Lkl0ZW0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHRJdGVtLl9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuXHRcdGRlbGV0ZSBkZWltb3MuRW5naW5lLnNjZW5lLml0ZW1zW3RoaXMuc2VydmVyaWRdO1xuXHR9XG5cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIG9yZy5kYnl6ZXJvLmRlaW1vcy5lbGVtZW50LkF0dGFja1pvbmUgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTUvMDEvMjFcbiAqIEBkZXNjcmlwdGlvbiA6IEF0dGFjayB6b25lIGNyZWF0ZSB0byBkYW1hZ2Ugb3RoZXIgZW50aXRpZXNcbiAqXG4gKiovXG5cblxuKGZ1bmN0aW9uKGRlaW1vcyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblx0dmFyIFZlY3RvciA9IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3Rvcjtcblx0ZGVpbW9zLmVsZW1lbnQgPSBkZWltb3MuZWxlbWVudCB8fCB7fSA7XG5cblx0LyoqXG5cdCAqIEF0dGFja1pvbmUgY29uc3RydWN0b25cblx0ICogXG5cdCAqIEBwYXJhbSBwb3NpdGlvbiBWZWN0b3IgcG9zaXRpb24gb2YgdGhlIGJsb2NrIGluc2lkZSB0aGUgem9uZVxuXHQgKiBAcGFyYW0gc2l6ZSBWZWN0b3Igc2l6ZSBvZiB0aGUgYmxvY2sgaW5zaWRlIHRoZSB6b25lXG5cdCAqXG5cdCAqICovXG5cdGRlaW1vcy5lbGVtZW50LkF0dGFja1pvbmUgPSBmdW5jdGlvbihpZCxwb3NpdGlvbixzaXplLG93bmVySWQsZHVyYXRpb24pIHtcblx0XHR0aGlzLmlkXHRcdFx0PSBpZDtcblx0XHR0aGlzLmRvbUlkXHRcdD0gJ2F0dGFja3pvbmUtJytpZDtcblx0XHR0aGlzLnBvc2l0aW9uXHQ9IHBvc2l0aW9uO1xuXHRcdHRoaXMuc2l6ZVx0XHQ9IHNpemU7XG5cdFx0dGhpcy5vd25lcklkXHQ9IG93bmVySWQ7XG5cdFx0dGhpcy5kdXJhdGlvblx0PSBkdXJhdGlvbjtcblx0XHR0aGlzLnZlcnRleFRMID0gbmV3IFZlY3Rvcihwb3NpdGlvbi54LFx0XHRcdFx0cG9zaXRpb24ueSk7XG5cdFx0dGhpcy52ZXJ0ZXhUUiA9IG5ldyBWZWN0b3IocG9zaXRpb24ueCArIHNpemUueCxcdFx0cG9zaXRpb24ueSk7XG5cdFx0dGhpcy52ZXJ0ZXhCTCA9IG5ldyBWZWN0b3IocG9zaXRpb24ueCxcdFx0XHRcdHBvc2l0aW9uLnkgKyBzaXplLnkpO1xuXHRcdHRoaXMudmVydGV4QlIgPSBuZXcgVmVjdG9yKHBvc2l0aW9uLnggKyBzaXplLngsXHRcdHBvc2l0aW9uLnkgKyBzaXplLnkpO1xuXHRcdHRoaXMubGFzdFVwZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuQXR0YWNrWm9uZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oZHQsIG5vdykge1xuXHRcdHZhciBkb21fZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0ZG9tX2VsZW0uc2V0QXR0cmlidXRlKFwiaWRcIix0aGlzLmRvbUlkKTtcblxuXHRcdGRvbV9lbGVtLnN0eWxlLndpZHRoID0gcGFyc2VJbnQodGhpcy5zaXplLngpKydweCc7XG5cdFx0ZG9tX2VsZW0uc3R5bGUuaGVpZ2h0ICA9IHBhcnNlSW50KHRoaXMuc2l6ZS55KSsncHgnO1xuXG5cdFx0ZG9tX2VsZW0uc3R5bGUuZGlzcGxheSAgPSAnYmxvY2snO1xuXHRcdGRvbV9lbGVtLnN0eWxlLnBvc2l0aW9uICA9ICdhYnNvbHV0ZSc7XG5cblx0XHRkb21fZWxlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgID0gJyMzMzMnO1xuXHRcdGRvbV9lbGVtLnN0eWxlLm9wYWNpdHkgID0gJzAuNSc7XG5cblx0XHR2YXIgdHJhbnNsYXRpb24gPSBcInRyYW5zbGF0ZTNkKFwiKyh0aGlzLnBvc2l0aW9uLngpK1wicHgsXCIrKHRoaXMucG9zaXRpb24ueSkrXCJweCwwcHgpXCI7XG5cdFx0ZG9tX2VsZW0uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNsYXRpb247XG5cdFx0ZG9tX2VsZW0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNsYXRpb247XG5cblx0XHRkZWltb3MuRW5naW5lLnpvbmUuYXJlYS5hcHBlbmRDaGlsZChkb21fZWxlbSk7XG5cblx0XHR0aGlzLmRvbUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRvbUlkKTtcblx0XHR0aGlzLmRvbUVsZW1XaWR0aCA9IHRoaXMuZG9tRWxlbS5vZmZzZXRXaWR0aDsvL3VzZWZ1bGwgZm9yIHBvc2l0aW9ubmluZyBuYW1lIGFuZCBzcGVha2VyXG5cdFx0dGhpcy5kb21FbGVtSGVpZ2h0ID0gdGhpcy5kb21FbGVtLm9mZnNldEhlaWdodDsvL3VzZWZ1bGwgZm9yIHBvc2l0aW9ubmluZyBuYW1lIGFuZCBzcGVha2VyXG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5BdHRhY2tab25lLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkdCwgbm93KSB7XG5cdFx0dGhpcy5kdXJhdGlvbiArPSAodGhpcy5sYXN0VXBkYXRlIC0gbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuXHRcdGlmKHRoaXMuZHVyYXRpb24gPCAwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuQXR0YWNrWm9uZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuY2xlYW5Eb20oKTtcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50LkF0dGFja1pvbmUucHJvdG90eXBlLmNsZWFuRG9tID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHBhcmVudE5vZGUgPSAgdGhpcy5kb21FbGVtLnBhcmVudE5vZGU7XG5cdFx0aWYocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW0pO1xuXHR9XG5cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKioqXG4gKlxuICogb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuV2Vic29ja2V0Q2xpZW50IE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA1LzA0XG4gKiBAZGVzY3JpcHRpb24gOiBVc2Ugd2Vic29ja2V0IHRvIGNvbm5lY3QgdG8gZGlzdGFudCBzZXJ2ZXJcbiAqXG4gKiovXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXHRcblx0dmFyIEV2ZW50TWFuYWdlciA9IG9yZy5kYnl6ZXJvLnRvb2xzLkV2ZW50TWFuYWdlcjtcblx0ZGVpbW9zLm5ldHdvcmsgPSBkZWltb3MubmV0d29yayB8fCB7fSA7XG5cblx0LyoqXG5cdCAqIFdlYnNvY2tldENsaWVudCBjb25zdHJ1Y3RvclxuXHQgKiBcblx0ICogQHBhcmFtIHN0cmluZyBob3N0bmFtZSBvZiB0aGUgcmVtb3RlIHdlYnNvY2tldCBzZXJ2ZXJcblx0ICogQHBhcmFtIGludCBwb3J0IG9mIHRoZSByZW1vdGUgd2Vic29ja2V0IHNlcnZlclxuXHQgKiBAcGFyYW0gV2Vic29ja2V0Q2xpZW50TW9kZSBNb2RlIG9mIHRoZSBjbGllbnQsIGNhbiBiZSBXZWJzb2NrZXRDbGllbnRNb2RlLkRFQlVHIHRvIHNob3cgbG9nc1xuXHQgKlxuXHQgKiAqL1xuXHRkZWltb3MubmV0d29yay5XZWJzb2NrZXRDbGllbnQgPSBmdW5jdGlvbihob3N0bmFtZSxwb3J0LG1vZGUpIHtcblx0XHR0aGlzLnJldHJ5Q29ubmVjdGlvbiA9IG51bGw7XG5cdFx0dGhpcy5zZXJ2ZXJfaG9zdG5hbWUgPSBob3N0bmFtZTtcblx0XHR0aGlzLnNlcnZlcl9wb3J0ID0gcG9ydDtcblx0XHR0aGlzLmNvbm5lY3Rpb25fc3RyZWFtID0gJ3dzOi8vJyt0aGlzLnNlcnZlcl9ob3N0bmFtZSsnOicrdGhpcy5zZXJ2ZXJfcG9ydDtcblxuXHRcdHRoaXMuc2VydmVyX2Nvbm5lY3RlZCA9IGZhbHNlO1xuXHRcdHRoaXMuc2Vzc2lvbl9pZCA9IG51bGw7XG5cdH1cblxuXG5cdGRlaW1vcy5uZXR3b3JrLldlYnNvY2tldENsaWVudC5wcm90b3R5cGUgPSAge1xuXHRcdC8qKipcblx0XHQgKiBDb25uZWN0aW9uIE1ldGhvZFxuXHRcdCAqIFVzZSB0byBjb25uZWN0IHRvIHJlbW90ZSB3ZWJzb2NrZXQgc2VydmVyXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJuIHZvaWRcblx0XHQgKlxuXHRcdCAqKi9cblx0XHRjb25uZWN0IDogZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gaWYgdXNlciBpcyBydW5uaW5nIG1vemlsbGEgdGhlbiB1c2UgaXQncyBidWlsdC1pbiBXZWJTb2NrZXRcblx0XHRcdHdpbmRvdy5XZWJTb2NrZXQgPSB3aW5kb3cuV2ViU29ja2V0IHx8IHdpbmRvdy5Nb3pXZWJTb2NrZXQ7XG5cblx0XHRcdHZhciBzZXJ2ZXJfaG9zdG5hbWUgPSB0aGlzLnNlcnZlcl9ob3N0bmFtZSA7XG5cdFx0XHR2YXIgc2VydmVyX3BvcnQgPSB0aGlzLnNlcnZlcl9wb3J0IDtcblxuXHRcdFx0dmFyIGNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KHRoaXMuY29ubmVjdGlvbl9zdHJlYW0pO1xuXG5cdFx0XHRjb25uZWN0aW9uLm9ub3BlbiA9IHRoaXMub25vcGVuLmJpbmQodGhpcykgO1xuXHRcdFx0Y29ubmVjdGlvbi5vbmNsb3NlID0gdGhpcy5vbmNsb3NlLmJpbmQodGhpcykgO1xuXHRcdFx0Y29ubmVjdGlvbi5vbmVycm9yID0gdGhpcy5vbmVycm9yLmJpbmQodGhpcykgO1xuXHRcdFx0Y29ubmVjdGlvbi5vbm1lc3NhZ2UgPSB0aGlzLm9ubWVzc2FnZS5iaW5kKHRoaXMpIDtcblxuXHRcdFx0dGhpcy5jb25uZWN0aW9uID0gY29ubmVjdGlvbiA7XG5cdFx0fSxcblxuXHRcdGNsb3NlIDogZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gaWYgdXNlciBpcyBydW5uaW5nIG1vemlsbGEgdGhlbiB1c2UgaXQncyBidWlsdC1pbiBXZWJTb2NrZXRcblx0XHRcdHdpbmRvdy5XZWJTb2NrZXQgPSB3aW5kb3cuV2ViU29ja2V0IHx8IHdpbmRvdy5Nb3pXZWJTb2NrZXQ7XG5cblx0XHRcdHRoaXMuY29ubmVjdGlvbi5jbG9zZSgpIDtcblx0XHRcdGRlbGV0ZSB0aGlzLmNvbm5lY3Rpb24gO1xuXHRcdH0sXG5cblx0XHQvKioqXG5cdFx0ICogU2VuZCBNZXNzYWdlIE1ldGhvZFxuXHRcdCAqXG5cdFx0ICogYmluZCB0byBFdmVudCBvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zZW5kTWVzc2FnZVxuXHRcdCAqIFxuXHRcdCAqIEBwYXJhbSBPYmplY3QgdHJpZ2dlZCBldmVudFxuXHRcdCAqIEByZXR1cm4gdm9pZFxuXHRcdCAqXG5cdFx0ICoqL1xuXHRcdHNlbmQ6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHRoaXMuY29ubmVjdGlvbi5zZW5kKEpTT04uc3RyaW5naWZ5KGUubWVzc2FnZSkpIDtcblx0XHR9LFxuXG5cdFx0dHJ5UmVsb2c6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly90cnkgdG8gcmVjb25uZWN0IGVhY2ggc2Vjb25kXG5cdFx0XHQvL2lmKHRoaXMuY29ubmVjdGlvbiAhPSBudWxsKSB0aGlzLmNvbm5lY3Rpb24uY2xvc2UoKSA7XG5cdFx0XHR0aGlzLmNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KHRoaXMuY29ubmVjdGlvbl9zdHJlYW0pO1xuXHRcdFx0dmFyIHJlbG9nID0gZnVuY3Rpb24oKXtcblx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MuY29uc29sZS53cml0ZVwiLHtcImRldGFpbFwiOntcIm1lc3NhZ2VcIjpcIlRyeWluZyB0byByZWNvbm5lY3RpbmcuLi5cIn19KTtcblx0XHRcdFx0aWYodGhpcy5jb25uZWN0aW9uLnJlYWR5U3RhdGUgIT09IFdlYlNvY2tldC5PUEVOKSB7XG5cdFx0XHRcdFx0dGhpcy5jb25uZWN0aW9uID0gbmV3IFdlYlNvY2tldCh0aGlzLmNvbm5lY3Rpb25fc3RyZWFtKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmNvbm5lY3Rpb24ub25vcGVuID0gdGhpcy5vbm9wZW4uYmluZCh0aGlzKSA7XG5cdFx0XHRcdFx0dGhpcy5jb25uZWN0aW9uLm9uY2xvc2UgPSB0aGlzLm9uY2xvc2UuYmluZCh0aGlzKSA7XG5cdFx0XHRcdFx0dGhpcy5jb25uZWN0aW9uLm9uZXJyb3IgPSB0aGlzLm9uZXJyb3IuYmluZCh0aGlzKSA7XG5cdFx0XHRcdFx0dGhpcy5jb25uZWN0aW9uLm9ubWVzc2FnZSA9IHRoaXMub25tZXNzYWdlLmJpbmQodGhpcykgO1xuXG5cdFx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5jb25uZWN0ZWRcIix7fSk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChzZXRpbnRlcmNhbElkKSA7XG5cdFx0XHRcdH1cblx0XHRcdH0gO1xuXHRcdFx0dmFyIHNldGludGVyY2FsSWQgPSBzZXRJbnRlcnZhbChyZWxvZy5iaW5kKHRoaXMpLDEwMDApIDtcblx0XHR9LFxuXHRcdG9ub3BlbjogZnVuY3Rpb24gKGUpIHtcblx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuY29ubmVjdGVkXCIse30pO1xuXHRcdFx0dGhpcy5zZXJ2ZXJfY29ubmVjdGVkID0gdHJ1ZSA7XG5cblx0XHRcdC8vY2hlY2sgY29ubmVjdGlvbiBlYWNoIDNzXG5cdFx0XHR2YXIgcG9vbEFsaXZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKHRoaXMuY29ubmVjdGlvbi5yZWFkeVN0YXRlICE9PSAxICYmIHRoaXMuY29ubmVjdGlvbi5zZXJ2ZXJfY29ubmVjdGVkID09IHRydWUpIHtcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5jb25zb2xlLndyaXRlXCIse1wiZGV0YWlsXCI6e1wibWVzc2FnZVwiOlwiQ29ubmVjdGlvbiBjbG9zZWRcIn19LHt9KTtcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmRpc2Nvbm5lY3RlZFwiLHt9KTtcblx0XHRcdFx0XHR0aGlzLnNlcnZlcl9jb25uZWN0ZWQgPSBmYWxzZSA7XG5cdFx0XHRcdH1cblx0XHRcdH0gO1xuXHRcdFx0c2V0SW50ZXJ2YWwocG9vbEFsaXZlLmJpbmQodGhpcyksIDMwMDApO1xuXG5cdFx0fSxcblx0XHRvbmNsb3NlIDogZnVuY3Rpb24gKGUpIHtcblx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmNvbnNvbGUud3JpdGVcIix7XCJkZXRhaWxcIjp7XCJtZXNzYWdlXCI6XCJDb25uZWN0aW9uIGNsb3NlZFwifX0pO1xuXHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5kaXNjb25uZWN0ZWRcIik7XG5cdFx0XHR0aGlzLnNlc3Npb25faWQgPSBudWxsIDtcblx0XHRcdHRoaXMudHJ5UmVsb2coKSA7XG5cdFx0XHRcblx0XHR9LFxuXHRcdG9uZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MuY29uc29sZS53cml0ZVwiLHtcImRldGFpbFwiOntcIm1lc3NhZ2VcIjpcIkFuIGVycm9yIGFjY3VyZWQgd2l0aCB0aGUgc2VydmVyXCJ9fSk7XG5cdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmRpc2Nvbm5lY3RlZFwiKTtcblx0XHRcdHRoaXMuc2Vzc2lvbl9pZCA9IG51bGwgO1xuXHRcdFx0dGhpcy50cnlSZWxvZygpIDtcblx0XHR9LFxuXHRcdG9ubWVzc2FnZTogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcblx0XHRcdHZhciBqc29uX21zZyA9IEpTT04ucGFyc2UobWVzc2FnZS5kYXRhKSA7XG5cdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnJlY2VpdmVkTWVzc2FnZVwiLGpzb25fbXNnKSA7XG5cdFx0fVxuXHR9XG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5NYW5hZ2VyIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA4LzA5XG4gKiBAZGVzY3JpcHRpb24gOiBDb25maWcgb2YgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogKi9cblxudmFyIG9yZyA9IG9yZyB8fCB7fSA7XG5vcmcuZGJ5emVybyA9IG9yZy5kYnl6ZXJvIHx8IHt9IDtcbm9yZy5kYnl6ZXJvLmRlaW1vcyA9IG9yZy5kYnl6ZXJvLmRlaW1vcyB8fCB7fSA7XG5cbihmdW5jdGlvbihkZWltb3MsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0dmFyIEV2ZW50TWFuYWdlciA9IG9yZy5kYnl6ZXJvLnRvb2xzLkV2ZW50TWFuYWdlcjtcblxuXHRkZWltb3MubmV0d29yayA9IG9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrIHx8IHt9IDtcblx0XG5cdGRlaW1vcy5uZXR3b3JrLk1hbmFnZXIgPSBmdW5jdGlvbigpIHtcblx0XHQvL3N0dWJcblx0fVxuXG5cdC8vQ2FuIGJlIHVzZSBhcyBhbiBpZCB0b29cblx0ZGVpbW9zLm5ldHdvcmsuTWFuYWdlci5jb3VudCA9IDAgO1xuXG5cdGRlaW1vcy5uZXR3b3JrLk1hbmFnZXIucHJvdG90eXBlID0ge1xuXHRcdFwiaW5pdFwiIDogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL2Nvbm5lY3Rpb24gZXZlbnRzXG5cdFx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnJlY2VpdmVkTWVzc2FnZScsdGhpcy5yZWNlaXZlZE1lc3NhZ2UuYmluZCh0aGlzKSkgO1xuXHRcdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zZW5kTWVzc2FnZScsdGhpcy5zZW5kTWVzc2FnZS5iaW5kKHRoaXMpKSA7XG5cdFx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnNlbmRTeW5jJyx0aGlzLnNlbmRTeW5jLmJpbmQodGhpcykpIDtcblx0XHR9LFxuXHRcdFwiZGVzdHJveVwiIDogZnVuY3Rpb24oKSB7XG5cdFx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsucmVjZWl2ZWRNZXNzYWdlJykgO1xuXHRcdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnNlbmRNZXNzYWdlJykgO1xuXHRcdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnNlbmRTeW5jJykgO1xuXHRcdH0sXG5cdFx0XCJyZWNlaXZlZE1lc3NhZ2VcIiA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0XHRzd2l0Y2goZVtfdC5BQ1RJT05dKSB7XG5cdFx0XHRcdGNhc2UgX3QuQUNUSU9OX0xPR0dFRF9PSyA6XG5cdFx0XHRcdFx0aWYoZVtfdC5NRVNTQUdFXVtfdC5TRVNTSU9OX0lEXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5jb25zb2xlLndyaXRlRXJyb3JcIix7XCJkZXRhaWxcIjp7XCJtZXNzYWdlXCI6XCJFcnJvciA6IEF1dGggYnV0IG5vIHNlc3Npb24gaWQgPyB3dGYgP1wifX0pO1xuXHRcdFx0XHRcdFx0cmV0dXJuIDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGVpbW9zLkVuZ2luZS53c0NsaWVudC5zZXNzaW9uX2lkID0gZVtfdC5NRVNTQUdFXVtfdC5TRVNTSU9OX0lEXTtcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZSgnb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsubG9nZ2VkJyxlKTtcblx0XHRcdFx0XHRicmVhayA7XG5cdFx0XHRcdGNhc2UgX3QuQUNUSU9OX0NIT09TRV9DSEFSX09LIDpcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmF2YXRhclNlbGVjdGlvbkNvbmZpcm1lZFwiLGUpO1xuXHRcdFx0XHRcdGJyZWFrIDtcblx0XHRcdFx0Y2FzZSBfdC5BQ1RJT05fRVJST1IgOlxuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmNvbnNvbGUud3JpdGVFcnJvclwiLHtcImRldGFpbFwiOntcIm1lc3NhZ2VcIjpcIkVycm9yIDogXCIrSlNPTi5zdHJpbmdpZnkoZVtfdC5NRVNTQUdFXSl9fSk7XG5cdFx0XHRcdFx0YnJlYWsgO1xuXHRcdFx0XHRjYXNlIF90LkFDVElPTl9TWU5DIDpcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5yZW5kZXIucGFyc2VTY2VuZVwiLGUpO1xuXHRcdFx0XHRcdGJyZWFrIDtcblx0XHRcdFx0Y2FzZSBfdC5BQ1RJT05fU1lOQ19BVkFUQVIgOlxuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc3luY0F2YXRhclwiLGUpO1xuXHRcdFx0XHRcdGJyZWFrIDtcblx0XHRcdFx0Y2FzZSBfdC5BQ1RJT05fU1lOQ19JVEVNIDpcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnN5bmNJdGVtXCIsZSk7XG5cdFx0XHRcdFx0YnJlYWsgO1xuXHRcdFx0XHRjYXNlIF90LkFDVElPTl9HRVRfSVRFTV9URU1QTEFURSA6XG5cdFx0XHRcdFx0dGhpcy5yZWNlaXZlZEl0ZW0oZSk7XG5cdFx0XHRcdFx0YnJlYWsgO1xuXHRcdFx0XHRjYXNlIF90LkFDVElPTl9TWU5DX1BST0pFQ1RJTEUgOlxuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc3luY1Byb2plY3RpbGVcIixlKTtcblx0XHRcdFx0XHRicmVhayA7XG5cdFx0XHRcdGNhc2UgX3QuQUNUSU9OX1NZTkNfTU9OU1RFUiA6XG5cdFx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zeW5jTW9uc3RlclwiLGUpO1xuXHRcdFx0XHRcdGJyZWFrIDtcblx0XHRcdFx0Y2FzZSBfdC5BQ1RJT05fUkVNT1ZFX1BST0pFQ1RJTEUgOlxuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsucmVtb3ZlUHJvamVjdGlsZVwiLGUpO1xuXHRcdFx0XHRcdGJyZWFrIDtcblx0XHRcdFx0Y2FzZSBfdC5BQ1RJT05fQ09MTElERSA6XG5cdFx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5hY3Rpb25Db2xsaWRlXCIsZSk7XG5cdFx0XHRcdFx0YnJlYWsgO1xuXHRcdFx0XHRjYXNlIF90LkFDVElPTl9JVEVNX0dSQUJCRUQgOlxuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuaXRlbUdyYWJiZWRcIixlKTtcblx0XHRcdFx0XHRicmVhayA7XG5cdFx0XHRcdGNhc2UgX3QuQUNUSU9OX1NZTkNfQVRUQUNLX1pPTkUgOlxuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc3luY0F0dGFja1pvbmVcIixlKTtcblx0XHRcdFx0XHRicmVhayA7XG5cdFx0XHRcdGRlZmF1bHQgOlxuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmNvbnNvbGUud3JpdGVFcnJvclwiLHtcImRldGFpbFwiOntcIm1lc3NhZ2VcIjpcIlVua25vdyBzdGF0dXMgOiBcIitKU09OLnN0cmluZ2lmeShlKX19KTtcblx0XHRcdFx0XHRicmVhayA7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHJlY2VpdmVkSXRlbTogZnVuY3Rpb24obXNnKXtcblx0XHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0XHR2YXIgbSA9IG1zZ1tfdFsnTUVTU0FHRSddXTtcblx0XHRcdHRoaXMuc3RvcmVJdGVtRnJvbVNlcnZlcihtKTtcblx0XHR9LFxuXG5cdFx0c3RvcmVJdGVtRnJvbVNlcnZlcjogZnVuY3Rpb24oaXRlbSl7XG5cdFx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdFx0dmFyIGkgPSB7fTtcblx0XHRcdGkuaWQgPSBpdGVtW190WydJRCddXTtcblx0XHRcdGkubmFtZSA9IGl0ZW1bX3RbJ05BTUUnXV07XG5cdFx0XHRpLmtpbmQgPSBpdGVtW190WydNRVNTQUdFX0tJTkQnXV07XG5cdFx0XHRpLnNpemUgPSBpdGVtW190WydNRVNTQUdFX1NJWkUnXV07XG5cdFx0XHRpLnNraW4gPSBpdGVtW190WydNRVNTQUdFX1NLSU4nXV07XG5cdFx0XHRpLmF0dGFjayA9IGl0ZW1bX3RbJ01FU1NBR0VfQVRUQUNLJ11dO1xuXHRcdFx0aS5kZWx0YXNob3cgPSBpdGVtW190WydNRVNTQUdFX0RFTFRBU0hPVyddXTtcblx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLkVuZ2luZS5uZXdJdGVtU3RvcmVkLlwiK2kuaWQsaSk7XG5cdFx0XHRkZWltb3MuRW5naW5lLml0ZW1UZW1wbGF0ZXNbaS5pZF0gPSBpO1xuXHRcdH0sXG5cblxuXHRcdFwic2VuZEFjdGlvbk1lc3NhZ2VcIiA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdGlmKHR5cGVvZiBlLmFjdGlvbiAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0TG9nLmVycm9yKCdLZXlib2FyZCBldmVudCBub3Qgc2V0IHRvIHNlbmQgbWVzc2FnZSB0byBzZXJ2ZXInKSA7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2VuZE1lc3NhZ2UoeydtZXNzYWdlJzp7J2FjdGlvbic6eyd0eXBlJzona2V5Ym9hcmRFdmVudCcsJ2V2ZW50JzplLmFjdGlvbn19fSk7XG5cdFx0fSxcblxuXG5cblx0XHRcInNlbmRNZXNzYWdlXCIgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHQvL3NldCBkYXRlIGV0IHNlc3Npb25faWRcblx0XHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0XHRlW190LlNFU1NJT05fSURdXHQ9IGRlaW1vcy5FbmdpbmUud3NDbGllbnQuc2Vzc2lvbl9pZDtcblx0XHRcdGVbX3QuVFJBQ0VfSURdXHRcdD0gZGVpbW9zLm5ldHdvcmsuTWFuYWdlci5jb3VudCsrO1xuXHRcdFx0ZVtfdC5EQVRFXVx0XHRcdD0gRGF0ZS5ub3coKTtcblxuXHRcdFx0dmFyIGRhdGEgPSB7fTtcblx0XHRcdGRhdGEubWVzc2FnZSA9IGU7XG5cblx0XHRcdC8vcHV0dGluZyBpdCBhdCB0aGUgZW5kIG9mIHRoZSBxdWV1ZVxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyBcblx0XHRcdFx0aWYoZGVpbW9zLkVuZ2luZS53c0NsaWVudCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUud3NDbGllbnQuc2VuZChkYXRhKVxuXHRcdFx0fSwgMCk7XG5cdFx0fSxcblxuXG5cdFx0XCJhc2tJdGVtVGVtcGxhdGVcIiA6IGZ1bmN0aW9uKGl0ZW1faWQsIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdFx0dmFyIG1lc3NhZ2UgPSB7fTtcblx0XHRcdG1lc3NhZ2VbX3QuQUNUSU9OXSA9IF90LkFDVElPTl9HRVRfSVRFTV9URU1QTEFURTtcblx0XHRcdG1lc3NhZ2VbX3QuTUVTU0FHRV0gPSB7fTtcblx0XHRcdG1lc3NhZ2VbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9JVEVNX0lEXSA9IGl0ZW1faWQ7XG5cdFx0XHR0aGlzLnNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xuXHRcdH0sXG5cblxuXHRcdFwic2VuZFN5bmNcIiA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0XHR2YXIgbWVzc2FnZSA9IHt9O1xuXHRcdFx0bWVzc2FnZVtfdC5BQ1RJT05dID0gX3QuQUNUSU9OX1NZTkM7XG5cdFx0XHRtZXNzYWdlW190Lk1FU1NBR0VdID0ge307XG5cdFx0XHRtZXNzYWdlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfU0FZSU5HXSA9IGRlaW1vcy5FbmdpbmUuYXZhdGFyLnNheWluZztcblx0XHRcdG1lc3NhZ2VbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9QT1NJVElPTl0gPSB7XG5cdFx0XHRcdCd4JzpwYXJzZUludChkZWltb3MuRW5naW5lLmF2YXRhci5wb3NpdGlvbi54KSxcblx0XHRcdFx0J3knOnBhcnNlSW50KGRlaW1vcy5FbmdpbmUuYXZhdGFyLnBvc2l0aW9uLnkpXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlKTtcblx0XHR9LFxuXG5cblx0XHQvL0hhbmRsZSBzdWNjZXNzIGFjdGlvbiBmcm9tIHNlcnZlciBoZXJlXG5cdFx0XCJzdWNjZXNzQWN0aW9uXCIgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRzd2l0Y2goZS5hY3Rpb24pIHtcblx0XHRcdFx0Y2FzZSBcImluZm9cIiA6XG5cdFx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MuY29uc29sZS53cml0ZVwiLHtcImRldGFpbFwiOntcIm1lc3NhZ2VcIjpcIkluZm8gZnJvbSBzZXJ2ZXIgOiBcIitKU09OLnN0cmluZ2lmeShkYXRhLm1lc3NhZ2UpfX0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0IDpcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5jb25zb2xlLndyaXRlXCIse1wiZGV0YWlsXCI6e1wibWVzc2FnZVwiOlwiVW5rbm93IGFjdGlvbiA6IFwiK0pTT04uc3RyaW5naWZ5KGRhdGEpfX0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSkob3JnLmRieXplcm8uZGVpbW9zLCBkb2N1bWVudCk7IiwiLyoqXG4gKlxuICogb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuTWVzc2FnZSBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxMy8wMi8wMlxuICogQGRlc2NyaXB0aW9uIDogTmV0d29yayBtZXNzYWdlXG4gKlxuICogKi9cblxudmFyIG9yZyA9IG9yZyB8fCB7fTtcbm9yZy5kYnl6ZXJvID0gb3JnLmRieXplcm8gfHwge307XG5vcmcuZGJ5emVyby5kZWltb3MgPSBvcmcuZGJ5emVyby5kZWltb3MgfHwge307XG5cbihmdW5jdGlvbihkZWltb3MsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cdGRlaW1vcy5uZXR3b3JrID0gb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsgfHwge307XG5cdFxuXHRkZWltb3MubmV0d29yay5NZXNzYWdlID0ge307XG5cblx0ZGVpbW9zLm5ldHdvcmsuTWVzc2FnZS5DT0RFID0ge1xuXHRcdFwidGV4dFwiOntcblx0XHRcdFwiREFURVwiOlwiZFwiLFxuXHRcdFx0XCJJRFwiOlwiaVwiLFxuXHRcdFx0XCJBQ1RJT05cIjpcInRcIixcblx0XHRcdFwiQUNUSU9OX0VSUk9SXCI6XCJlXCIsXG5cdFx0XHRcIkFDVElPTl9MT0dHRURfT0tcIjpcIm9cIixcblx0XHRcdFwiQUNUSU9OX0xPR0dFRF9OT0tcIjpcIm5cIixcblx0XHRcdFwiQUNUSU9OX1NZTkNcIjpcIj1cIixcblx0XHRcdFwiQUNUSU9OX1NZTkNfQVZBVEFSXCI6XCIjXCIsXG5cdFx0XHRcIkFDVElPTl9TWU5DX0lURU1cIjpcIltcIixcblx0XHRcdFwiQUNUSU9OX1NZTkNfTU9OU1RFUlwiOlwie1wiLFxuXHRcdFx0XCJBQ1RJT05fQ0hPT1NFX0NIQVJcIjpcInJcIixcblx0XHRcdFwiQUNUSU9OX0NIT09TRV9DSEFSX09LXCI6XCIrXCIsXG5cdFx0XHRcIkFDVElPTl9NT1ZFX1NUQVJUXCI6XCJhXCIsXG5cdFx0XHRcIkFDVElPTl9NT1ZFX1NUT1BcIjpcIjZcIixcblx0XHRcdFwiQUNUSU9OX0pVTVBcIjpcImpcIixcblx0XHRcdFwiQUNUSU9OX0dFVF9JVEVNX1RFTVBMQVRFXCI6XCJGXCIsXG5cdFx0XHRcIkFDVElPTl9TWU5DX1BST0pFQ1RJTEVcIjpcIkxcIixcblx0XHRcdFwiQUNUSU9OX1JFTU9WRV9QUk9KRUNUSUxFXCI6XCJRXCIsXG5cdFx0XHRcIkFDVElPTl9MT0dPVVRcIjpcIlZcIixcblx0XHRcdFwiQUNUSU9OX0NPTExJREVcIjpcIkBcIixcblx0XHRcdFwiQUNUSU9OX0lURU1fR1JBQkJFRFwiOlwiw6FcIixcblx0XHRcdFwiQUNUSU9OX1NZTkNfQVRUQUNLX1pPTkVcIjpcIsOoXCIsXG5cdFx0XHRcIk1FU1NBR0VcIjpcIm1cIixcblx0XHRcdFwiTUVTU0FHRV9NT1ZFX0lEXCI6XCI5XCIsXG5cdFx0XHRcIk1FU1NBR0VfTU9WRV9UWVBFXCI6XCI3XCIsXG5cdFx0XHRcIk1FU1NBR0VfTU9WRV9TVEFSVFwiOlwiZlwiLFxuXHRcdFx0XCJNRVNTQUdFX0NIQVJcIjpcImNcIixcblx0XHRcdFwiTUVTU0FHRV9DSEFSTkFNRVwiOlwiX1wiLFxuXHRcdFx0XCJNRVNTQUdFX1BPU0lUSU9OXCI6XCJwXCIsXG5cdFx0XHRcIk1FU1NBR0VfVkVMT0NJVFlcIjpcInZcIixcblx0XHRcdFwiTUVTU0FHRV9VU0VSX0lOUFVUX1ZFTE9DSVRZXCI6XCJ5XCIsXG5cdFx0XHRcIk1FU1NBR0VfQUNDRUxFUkFUSU9OXCI6XCJ6XCIsXG5cdFx0XHRcIk1FU1NBR0VfU0laRVwiOlwiL1wiLFxuXHRcdFx0XCJNRVNTQUdFX1NLSU5cIjpcIn5cIixcblx0XHRcdFwiTUVTU0FHRV9TUEVBS1wiOlwic1wiLFxuXHRcdFx0XCJNRVNTQUdFX1NIT09UXCI6XCJ4XCIsXG5cdFx0XHRcIk1FU1NBR0VfREVUQUlMXCI6XCI+XCIsXG5cdFx0XHRcIk1FU1NBR0VfTU9WRV9TUEVFRFwiOlwiMVwiLFxuXHRcdFx0XCJNRVNTQUdFX0pVTVBfU1BFRURcIjpcIjJcIixcblx0XHRcdFwiTUVTU0FHRV9BTklNQVRJT05cIjpcIjNcIixcblx0XHRcdFwiTUVTU0FHRV9TQVlJTkdcIjpcIjRcIixcblx0XHRcdFwiTUVTU0FHRV9USU1FU1RBTVBcIjpcImJcIixcblx0XHRcdFwiTUVTU0FHRV9ESVJFQ1RJT05cIjpcIjVcIixcblx0XHRcdFwiTUVTU0FHRV9EVVJBVElPTlwiOlwiKFwiLFxuXHRcdFx0XCJNRVNTQUdFX0VMRU1FTlRfSURcIjpcIilcIixcblx0XHRcdFwiTUVTU0FHRV9CR0NPTE9SXCI6XCI4XCIsXG5cdFx0XHRcIk1FU1NBR0VfSVRFTV9JRFwiOlwiR1wiLFxuXHRcdFx0XCJNRVNTQUdFX0tJTkRcIjpcIkhcIixcblx0XHRcdFwiTUVTU0FHRV9JVEVNU1wiOlwiSVwiLFxuXHRcdFx0XCJNRVNTQUdFX0RBTUFHRVwiOlwiSlwiLFxuXHRcdFx0XCJNRVNTQUdFX0RBTUFHRV9UWVBFXCI6XCJLXCIsXG5cdFx0XHRcIk1FU1NBR0VfT1JJRU5UQVRJT05cIjpcIk5cIixcblx0XHRcdFwiTUVTU0FHRV9NQVNTXCI6XCJPXCIsXG5cdFx0XHRcIk1FU1NBR0VfREVMVEFcIjpcIlBcIixcblx0XHRcdFwiTUVTU0FHRV9PV05FUlwiOlwiU1wiLFxuXHRcdFx0XCJNRVNTQUdFX0RFTFRBU0hPV1wiOlwiV1wiLFxuXHRcdFx0XCJNRVNTQUdFX0NVUlJFTlRfVVJMXCI6XCJZXCIsXG5cdFx0XHRcIk1FU1NBR0VfR0FNRV9BUkVBX0RPTV9JRFwiOlwiWlwiLFxuXHRcdFx0XCJNRVNTQUdFX0dBTUVfQVJFQV9XSURUSFwiOlwiLVwiLFxuXHRcdFx0XCJNRVNTQUdFX0dBTUVfQVJFQV9IRUlHSFRcIjpcInxcIixcblx0XHRcdFwiTUVTU0FHRV9HQU1FX0FSRUFfQkxPQ0tTXCI6XCI/XCIsXG5cdFx0XHRcIk1FU1NBR0VfR0FNRV9BUkVBX05BTUVcIjpcIiFcIixcblx0XHRcdFwiTUVTU0FHRV9HQU1FX01BWF9JTlNUQU5DRVwiOlwiw7pcIixcblx0XHRcdFwiTUVTU0FHRV9HQU1FX01BWF9VU0VSXCI6XCLDo1wiLFxuXHRcdFx0XCJNRVNTQUdFX0dPSU5HX0RPV05cIjpcIipcIixcblx0XHRcdFwiTUVTU0FHRV9BVFRBQ0tcIjpcIlRcIixcblx0XHRcdFwiTUVTU0FHRV9DT0xPUlwiOlwiYFwiLFxuXHRcdFx0XCJNRVNTQUdFX01PTlNURVJcIjpcIjxcIixcblx0XHRcdFwiTUVTU0FHRV9BVkFUQVJcIjpcIj5cIixcblx0XHRcdFwiTUVTU0FHRV9QUk9KRUNUSUxFXCI6XCLDuVwiLFxuXHRcdFx0XCJNRVNTQUdFX0lURU1cIjpcIi9cIixcblx0XHRcdFwiTUVTU0FHRV9GUk9NXCI6XCLDsVwiLFxuXHRcdFx0XCJNRVNTQUdFX0ZST01fVFlQRVwiOlwiLlwiLFxuXHRcdFx0XCJNRVNTQUdFX0ZST01fUE9TSVRJT05cIjpcIixcIixcblx0XHRcdFwiTUVTU0FHRV9UT1wiOlwiw7dcIixcblx0XHRcdFwiTUVTU0FHRV9UT19UWVBFXCI6XCLDpVwiLFxuXHRcdFx0XCJNRVNTQUdFX1RPX1BPU0lUSU9OXCI6XCLDslwiLFxuXHRcdFx0XCJNRVNTQUdFX0lTX0RFQURcIjpcIsOwXCIsXG5cdFx0XHRcIk1FU1NBR0VfSFBcIjpcIlVcIixcblx0XHRcdFwiTUVTU0FHRV9DVVJSRU5UX0hQXCI6XCJSXCIsXG5cdFx0XHRcIk1FU1NBR0VfTEFOREVEXCI6XCLDpFwiLFxuXHRcdFx0XCJOQU1FXCI6XCJoXCIsXG5cdFx0XHRcIlRSQUNFX0lEXCI6XCJxXCIsXG5cdFx0XHRcIlNFU1NJT05fSURcIjpcImtcIixcblx0XHRcdFwiTE9HSU5cIjpcImxcIixcblx0XHRcdFwiQVVUSF9CWV9UT0tFTlwiOlwiXlwiLFxuXHRcdFx0XCJQQVNTV09SRFwiOlwid1wiLFxuXHRcdFx0XCJBVkFUQVJTXCI6XCJ1XCIsXG5cdFx0XHRcIklURU1TXCI6XCJdXCIsXG5cdFx0XHRcIkxFRlRcIjpcIjBcIixcblx0XHRcdFwiUklHSFRcIjpcIsOpXCIsXG5cdFx0XHRcIkpVTVBcIjpcIidcIixcblx0XHRcdFwiUFJPSkVDVElMRVNcIjpcIk1cIixcblx0XHRcdFwiTU9OU1RFUlNcIjpcIn1cIixcblx0XHRcdFwiTUVTU0FHRV9BVFRBQ0tfVFlQRVwiOlwiVFwiLFxuXHRcdFx0XCJNRVNTQUdFX0FUVEFDS19NQUlOXCI6XCI7XCIsXG5cdFx0XHRcIkFDVElPTl9BVFRBQ0tcIjpcIlhcIixcblx0XHRcdFwiSVRFTV9TTE9UX0hFQURcIjpcIkFcIixcblx0XHRcdFwiSVRFTV9TTE9UX0NIRVNUXCI6XCJCXCIsXG5cdFx0XHRcIklURU1fU0xPVF9GT09UXCI6XCJDXCIsXG5cdFx0XHRcIklURU1fU0xPVF9MRUZUX0hBTkRcIjpcIkRcIixcblx0XHRcdFwiSVRFTV9TTE9UX1JJR0hUX0hBTkRcIjpcIkVcIixcblx0XHRcdFwiQUNUSU9OX0dPSU5HX0RPV05fU1RPUFwiOlwiJlwiLFxuXHRcdFx0XCJBQ1RJT05fR09JTkdfRE9XTlwiOlwiJVwiXG5cdFx0fSxcblx0XHRcInZlcmJvc2VcIjp7XG5cdFx0XHRcIkRBVEVcIjpcImRhdGVcIixcblx0XHRcdFwiSURcIjpcImlkXCIsXG5cdFx0XHRcIk1FU1NBR0VcIjpcIm1lc3NhZ2VcIixcblx0XHRcdFwiQUNUSU9OXCI6XCJhY3Rpb25cIixcblx0XHRcdFwiQUNUSU9OX0VSUk9SXCI6XCJlcnJvclwiLFxuXHRcdFx0XCJBQ1RJT05fTE9HR0VEX09LXCI6XCJsb2dpbl9va1wiLFxuXHRcdFx0XCJBQ1RJT05fTE9HR0VEX05PS1wiOlwibG9nZ3VlZF9ub2tcIixcblx0XHRcdFwiQUNUSU9OX1NZTkNcIjpcInN5bmNcIixcblx0XHRcdFwiQUNUSU9OX1NZTkNfQVZBVEFSXCI6XCJhdmF0YXJfc3luY1wiLFxuXHRcdFx0XCJBQ1RJT05fU1lOQ19JVEVNXCI6XCJpdGVtX3N5bmNcIixcblx0XHRcdFwiQUNUSU9OX0NIT09TRV9DSEFSXCI6XCJyZXR1cm5fY2hhcmF0ZXJcIixcblx0XHRcdFwiQUNUSU9OX0NIT09TRV9DSEFSX09LXCI6XCJhdmF0YXJfc2VsZWN0ZWRcIixcblx0XHRcdFwiQUNUSU9OX01PVkVfU1RBUlRcIjpcIm1vdmVfc3RhcnRcIixcblx0XHRcdFwiQUNUSU9OX01PVkVfU1RPUFwiOlwibW92ZV9zdG9wXCIsXG5cdFx0XHRcIkFDVElPTl9KVU1QXCI6XCJqdW1wXCIsXG5cdFx0XHRcIkFDVElPTl9SRU1PVkVfUFJPSkVDVElMRVwiOlwicmVtb3ZlX3Byb2plY3RpbGVcIixcblx0XHRcdFwiQUNUSU9OX0dFVF9JVEVNX1RFTVBMQVRFXCI6XCJnZXRfaXRlbVwiLFxuXHRcdFx0XCJBQ1RJT05fU1lOQ19QUk9KRUNUSUxFXCI6XCJzeW5jX3Byb2plY3RpbGVcIixcblx0XHRcdFwiQUNUSU9OX0xPR09VVFwiOlwibG9nb3V0XCIsXG5cdFx0XHRcIkFDVElPTl9TWU5DX01PTlNURVJcIjpcInN5bmNfbW9uc3RlclwiLFxuXHRcdFx0XCJBQ1RJT05fQ09MTElERVwiOlwiYWN0aW9uX2NvbGxpZGVcIixcblx0XHRcdFwiQUNUSU9OX0lURU1fR1JBQkJFRFwiOlwiaXRlbV9ncmFiYmVkXCIsXG5cdFx0XHRcIkFDVElPTl9TWU5DX0FUVEFDS19aT05FXCI6XCJhdHRhY2tfem9uZVwiLFxuXHRcdFx0XCJNRVNTQUdFX01PVkVfSURcIjpcIm1vdmVfaWRcIixcblx0XHRcdFwiTUVTU0FHRV9NT1ZFX1RZUEVcIjpcIm1vdmVfdHlwZVwiLFxuXHRcdFx0XCJNRVNTQUdFX01PVkVfU1RBUlRcIjpcIm1vdmVfc3RhcnRcIixcblx0XHRcdFwiTUVTU0FHRV9DSEFSXCI6XCJjaGFyYWN0ZXJcIixcblx0XHRcdFwiTUVTU0FHRV9DSEFSTkFNRVwiOlwiY2hhcmFjdGVyX25hbWVcIixcblx0XHRcdFwiTUVTU0FHRV9QT1NJVElPTlwiOlwicG9zaXRpb25cIixcblx0XHRcdFwiTUVTU0FHRV9WRUxPQ0lUWVwiOlwidmVsb2NpdHlcIixcblx0XHRcdFwiTUVTU0FHRV9VU0VSX0lOUFVUX1ZFTE9DSVRZXCI6XCJ1c2VyX2lucHV0X3ZlbG9jaXR5XCIsXG5cdFx0XHRcIk1FU1NBR0VfQUNDRUxFUkFUSU9OXCI6XCJhY2NlbGVyYXRpb25cIixcblx0XHRcdFwiTUVTU0FHRV9TUEVBS1wiOlwic3BlYWtcIixcblx0XHRcdFwiTUVTU0FHRV9TSE9PVFwiOlwic2hvb3RcIixcblx0XHRcdFwiTUVTU0FHRV9TSVpFXCI6XCJzaXplXCIsXG5cdFx0XHRcIk1FU1NBR0VfU0tJTlwiOlwic2tpblwiLFxuXHRcdFx0XCJNRVNTQUdFX0RFVEFJTFwiOlwiZGV0YWlsXCIsXG5cdFx0XHRcIk1FU1NBR0VfTU9WRV9TUEVFRFwiOlwibW92ZV9zcGVlZFwiLFxuXHRcdFx0XCJNRVNTQUdFX0pVTVBfU1BFRURcIjpcImp1bXBfc3BlZWRcIixcblx0XHRcdFwiTUVTU0FHRV9BTklNQVRJT05cIjpcImFuaW1hdGlvblwiLFxuXHRcdFx0XCJNRVNTQUdFX1NBWUlOR1wiOlwic2F5aW5nXCIsXG5cdFx0XHRcIk1FU1NBR0VfVElNRVNUQU1QXCI6XCJ0aW1lc3RhbXBcIixcblx0XHRcdFwiTUVTU0FHRV9ESVJFQ1RJT05cIjpcImRpcmVjdGlvblwiLFxuXHRcdFx0XCJNRVNTQUdFX0RVUkFUSU9OXCI6XCJkdXJhdGlvblwiLFxuXHRcdFx0XCJNRVNTQUdFX0VMRU1FTlRfSURcIjpcImVsZW1lbnRfaWRcIixcblx0XHRcdFwiTUVTU0FHRV9CR0NPTE9SXCI6XCJiZ19jb2xvclwiLFxuXHRcdFx0XCJNRVNTQUdFX0lURU1fSURcIjpcIml0ZW1faWRcIixcblx0XHRcdFwiTUVTU0FHRV9LSU5EXCI6XCJraW5kXCIsXG5cdFx0XHRcIk1FU1NBR0VfSVRFTVNcIjpcIml0ZW1zXCIsXG5cdFx0XHRcIk1FU1NBR0VfREFNQUdFXCI6XCJkYW1hZ2VcIixcblx0XHRcdFwiTUVTU0FHRV9EQU1BR0VfVFlQRVwiOlwiZGFtYWdlX3R5cGVcIixcblx0XHRcdFwiTUVTU0FHRV9PUklFTlRBVElPTlwiOlwib3JpZW50YXRpb25cIixcblx0XHRcdFwiTUVTU0FHRV9NQVNTXCI6XCJtYXNzXCIsXG5cdFx0XHRcIk1FU1NBR0VfREVMVEFcIjpcImRlbHRhXCIsXG5cdFx0XHRcIk1FU1NBR0VfT1dORVJcIjpcIm93bmVyXCIsXG5cdFx0XHRcIk1FU1NBR0VfREVMVEFTSE9XXCI6XCJkZWx0YV9zaG93XCIsXG5cdFx0XHRcIk1FU1NBR0VfQ1VSUkVOVF9VUkxcIjpcImN1cnJlbnRfdXJsXCIsXG5cdFx0XHRcIk1FU1NBR0VfR0FNRV9BUkVBX0RPTV9JRFwiOlwiZ2FtZV9hcmVhX2RvbV9pZFwiLFxuXHRcdFx0XCJNRVNTQUdFX0dBTUVfQVJFQV9XSURUSFwiOlwiZ2FtZV9hcmVhX3dpZHRoXCIsXG5cdFx0XHRcIk1FU1NBR0VfR0FNRV9BUkVBX0hFSUdIVFwiOlwiZ2FtZV9hcmVhX2hlaWdodFwiLFxuXHRcdFx0XCJNRVNTQUdFX0dBTUVfQVJFQV9CTE9DS1NcIjpcImdhbWVfYXJlYV9ibG9ja3NcIixcblx0XHRcdFwiTUVTU0FHRV9HQU1FX0FSRUFfTkFNRVwiOlwiZ2FtZV9hcmVhX25hbWVcIixcblx0XHRcdFwiTUVTU0FHRV9HQU1FX01BWF9JTlNUQU5DRVwiOlwibWF4X2luc3RhbmNlXCIsXG5cdFx0XHRcIk1FU1NBR0VfR0FNRV9NQVhfVVNFUlwiOlwibWF4X3VzZXJcIixcblx0XHRcdFwiTUVTU0FHRV9HT0lOR19ET1dOXCI6XCJnb2luZ19kb3duXCIsXG5cdFx0XHRcIk1FU1NBR0VfQVRUQUNLXCI6XCJhdHRhY2tcIixcblx0XHRcdFwiTUVTU0FHRV9DT0xPUlwiOlwiY29sb3JcIixcblx0XHRcdFwiTUVTU0FHRV9NT05TVEVSXCI6XCJtb25zdGVyXCIsXG5cdFx0XHRcIk1FU1NBR0VfQVZBVEFSXCI6XCJhdmF0YXJcIixcblx0XHRcdFwiTUVTU0FHRV9QUk9KRUNUSUxFXCI6XCJwcm9qZWN0aWxlXCIsXG5cdFx0XHRcIk1FU1NBR0VfSVRFTVwiOlwiaXRlbVwiLFxuXHRcdFx0XCJNRVNTQUdFX0ZST01cIjpcImZyb21cIixcblx0XHRcdFwiTUVTU0FHRV9GUk9NX1RZUEVcIjpcImZyb21fdHlwZVwiLFxuXHRcdFx0XCJNRVNTQUdFX0ZST01fUE9TSVRJT05cIjpcImZyb21fcG9zaXRpb25cIixcblx0XHRcdFwiTUVTU0FHRV9UT1wiOlwidG9cIixcblx0XHRcdFwiTUVTU0FHRV9UT19UWVBFXCI6XCJ0b190eXBlXCIsXG5cdFx0XHRcIk1FU1NBR0VfVE9fUE9TSVRJT05cIjpcInRvX3Bvc2l0aW9uXCIsXG5cdFx0XHRcIk1FU1NBR0VfSVNfREVBRFwiOlwiaXNfZGVhZFwiLFxuXHRcdFx0XCJNRVNTQUdFX0hQXCI6XCJocFwiLFxuXHRcdFx0XCJNRVNTQUdFX0NVUlJFTlRfSFBcIjpcImN1cnJlbnRfaHBcIixcblx0XHRcdFwiTUVTU0FHRV9MQU5ERURcIjpcImxhbmRlZFwiLFxuXHRcdFx0XCJUUkFDRV9JRFwiOlwidHJhY2VfaWRcIixcblx0XHRcdFwiU0VTU0lPTl9JRFwiOlwic2Vzc2lvbl9pZFwiLFxuXHRcdFx0XCJMT0dJTlwiOlwibG9naW5cIixcblx0XHRcdFwiQVVUSF9CWV9UT0tFTlwiOlwiYXV0aF9ieV90b2tlblwiLFxuXHRcdFx0XCJOQU1FXCI6XCJuYW1lXCIsXG5cdFx0XHRcIlBBU1NXT1JEXCI6XCJwYXNzd29yZFwiLFxuXHRcdFx0XCJBVkFUQVJTXCI6XCJhdmF0YXJzXCIsXG5cdFx0XHRcIklURU1TXCI6XCJpdGVtc1wiLFxuXHRcdFx0XCJMRUZUXCI6XCJsZWZ0XCIsXG5cdFx0XHRcIlJJR0hUXCI6XCJyaWdodFwiLFxuXHRcdFx0XCJKVU1QXCI6XCJqdW1wXCIsXG5cdFx0XHRcIlBST0pFQ1RJTEVTXCI6XCJwcm9qZWN0aWxlc1wiLFxuXHRcdFx0XCJNT05TVEVSU1wiOlwibW9uc3RlcnNcIixcblx0XHRcdFwiTUVTU0FHRV9BVFRBQ0tfVFlQRVwiOlwiYXR0YWNrX3R5cGVcIixcblx0XHRcdFwiTUVTU0FHRV9BVFRBQ0tfTUFJTlwiOlwiYXR0YWNrX21haW5cIixcblx0XHRcdFwiQUNUSU9OX0FUVEFDS1wiOlwiYWN0aW9uX2F0dGFja1wiLFxuXHRcdFx0XCJJVEVNX1NMT1RfSEVBRFwiOlwiaXRlbV9zbG90X2hlYWRcIixcblx0XHRcdFwiSVRFTV9TTE9UX0NIRVNUXCI6XCJpdGVtX3Nsb3RfY2hlc3RcIixcblx0XHRcdFwiSVRFTV9TTE9UX0ZPT1RcIjpcIml0ZW1fc2xvdF9mb290XCIsXG5cdFx0XHRcIklURU1fU0xPVF9MRUZUX0hBTkRcIjpcIml0ZW1fc2xvdF9sZWZ0X2hhbmRcIixcblx0XHRcdFwiSVRFTV9TTE9UX1JJR0hUX0hBTkRcIjpcIml0ZW1fc2xvdF9yaWdodF9oYW5kXCIsXG5cdFx0XHRcIkFDVElPTl9HT0lOR19ET1dOX1NUT1BcIjpcImFjdGlvbl9nb2luZ19kb3duXCIsXG5cdFx0XHRcIkFDVElPTl9HT0lOR19ET1dOXCI6XCJhY3Rpb25fZ29pbmdfZG93bl9zdG9wXCJcblx0XHR9XG5cdH1cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIG9yZy5kYnl6ZXJvLnRvb2xzLlBoeXNpY3MgdXRpbCBjbGFzc1xuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA5LzI3XG4gKiBAZGVzY3JpcHRpb24gOiBQaHlzaWNzIHRvb2xzXG4gKlxuICovXG4gXG52YXIgb3JnID0gb3JnIHx8IHt9IDtcbm9yZy5kYnl6ZXJvID0gb3JnLmRieXplcm8gfHwge30gO1xub3JnLmRieXplcm8udG9vbHMgPSBvcmcuZGJ5emVyby50b29scyB8fCB7fSA7XG5cbihmdW5jdGlvbih0b29scyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblx0dmFyIFZlY3RvciA9IHRvb2xzLlZlY3RvcjtcblxuXHR0b29scy5QaHlzaWNzID0ge307XG5cblx0Ly9Gb3VydGggcGFyYW1zIGFyZSBvcmcuZGJ5emVyby50b29scy5WZWN0b3Jcblx0dG9vbHMuUGh5c2ljcy5TZWdtZW50c0NvbGxpc2lvbiA9IGZ1bmN0aW9uKGExLGEyLGIxLGIyKSB7XG5cblx0XHRpbnRlcnNlY3Rpb24gPSBWZWN0b3IuWmVybygpO1xuXG5cdFx0dmFyIGIgPSBWZWN0b3IuU3ViKGEyLGExKTtcblx0XHR2YXIgZCA9IFZlY3Rvci5TdWIoYjIsYjEpO1xuXHRcdHZhciBiRG90RFBlcnAgPSBiLnggKiBkLnkgLSBiLnkgKiBkLng7XG5cblx0XHQvLyBpZiBiIGRvdCBkID09IDAsIGl0IG1lYW5zIHRoZSBsaW5lcyBhcmUgcGFyYWxsZWwgc28gaGF2ZSBpbmZpbml0ZSBpbnRlcnNlY3Rpb24gcG9pbnRzXG5cdFx0aWYgKGJEb3REUGVycCA9PSAwKVxuXHRcdHJldHVybiBmYWxzZTtcblxuXHRcdHZhciBjID0gVmVjdG9yLlN1YihiMSxhMSk7XG5cdFx0dmFyIHQgPSAoYy54ICogZC55IC0gYy55ICogZC54KSAvIGJEb3REUGVycDtcblxuXHRcdGlmICh0IDwgMCB8fCB0ID4gMSkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0dmFyIHUgPSAoYy54ICogYi55IC0gYy55ICogYi54KSAvIGJEb3REUGVycDtcblx0XHRpZiAodSA8IDAgfHwgdSA+IDEpIHJldHVybiBmYWxzZTtcblx0XHRiLnNjYWxhcih0KTtcblx0XHRyZXR1cm4gVmVjdG9yLlN1bShhMSwgYik7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gcG9zaXRpb24gICAgICBWZWN0b3IgIHBvc2l0aW9uIGF0IHQwXG5cdCAqIEBwYXJhbSB2ZWxvY2l0eSAgICAgIFZlY3RvciAgXG5cdCAqIEBwYXJhbSBmb3JjZSAgICAgICAgIFZlY3RvciAgc3VtIG9mIGFsbCBmb3JjZSBhcHBsaWVkIFxuXHQgKiBAcGFyYW0gZHQgICAgICAgICAgICBOdW1lcmljIHRpbWVzdGVwXG5cdCAqXG5cdCAqIEByZXR1cm4gIFZlY3RvciAgbmV3IHBvc2l0aW9uIGF0IHQwICsgZHRcblx0ICpcblx0ICogZXF1YXRpb24gOiBwb3NpdGlvbiA9IHZpdGVzc2UgKiBkdCArIDAuNSAqIGZvcmNlICogZHTCslxuXHQgKi9cblx0dG9vbHMuUGh5c2ljcy5Nb3Rpb25JbnRlZ3JhdGlvbiA9IGZ1bmN0aW9uKHBvc2l0aW9uLHZlbG9jaXR5LGZvcmNlLGR0KSB7XG5cdFx0dmFyIHYgPSB2ZWxvY2l0eS5kdXBsaWNhdGUoKTtcblx0XHR2LnNjYWxhcihkdCk7XG5cdFx0XG5cdFx0dmFyIGEgPSBmb3JjZS5kdXBsaWNhdGUoKTtcblx0XHRhLnNjYWxhcigwLjUgKiBkdCAqIGR0KTtcblx0XHRcblx0XHRyZXR1cm4gVmVjdG9yLlN1bSggcG9zaXRpb24uZHVwbGljYXRlKCksIFZlY3Rvci5TdW0oIHYsIGEgKSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBwb3NpdGlvbiAgICAgIFZlY3RvclxuXHQgKiBAcGFyYW0gdmVsb2NpdHkgICAgICBWZWN0b3IgIFxuXHQgKiBAcGFyYW0gZm9yY2UgICAgICAgICBWZWN0b3Jcblx0ICogQHBhcmFtIGR0ICAgICAgICAgICAgTnVtZXJpYyB0aW1lc3RlcFxuXHQgKiBAcmV0dXJuIE9iamVjdCB7ZHg6ZHgsZHY6ZHZ9XG5cdCAqXG5cdCAqIGVxdWF0aW9uIDogcG9zaXRpb24gPSB2aXRlc3NlICogZHQgKyAwLjUgKiBmb3JjZSAqIGR0wrJcblx0ICovXG5cdHRvb2xzLlBoeXNpY3MuaW50ZWdyYXRlS000ID0gZnVuY3Rpb24ocG9zaXRpb24sIHZlbG9jaXR5LCBmb3JjZSwgZHQpIHtcblxuXHRcdHZhciBhID0gX2V2YWx1YXRlTUs0KCB2ZWxvY2l0eSwgZm9yY2UsIDAuMCwgICAgbmV3IF9zdGF0ZSgpICk7XG5cdFx0dmFyIGIgPSBfZXZhbHVhdGVNSzQoIHZlbG9jaXR5LCBmb3JjZSwgZHQqMC41LCBhICk7XG5cdFx0dmFyIGMgPSBfZXZhbHVhdGVNSzQoIHZlbG9jaXR5LCBmb3JjZSwgZHQqMC41LCBiICk7XG5cdFx0dmFyIGQgPSBfZXZhbHVhdGVNSzQoIHZlbG9jaXR5LCBmb3JjZSwgZHQsICAgICAgYyApO1xuXHRcdHZhciBvdXRwdXQgPSB7fTtcblx0XHRvdXRwdXRbJ2R4J10gPSBWZWN0b3IuU2NhbGFyKFxuXHRcdFx0VmVjdG9yLlN1bShcblx0XHRcdFx0YS5wb3NpdGlvbixcblx0XHRcdFx0VmVjdG9yLlN1bShcblx0XHRcdFx0XHRWZWN0b3IuU2NhbGFyKFxuXHRcdFx0XHRcdFx0VmVjdG9yLlN1bShcblx0XHRcdFx0XHRcdFx0Yi5wb3NpdGlvbiwgXG5cdFx0XHRcdFx0XHRcdGMucG9zaXRpb25cblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHQyXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRkLnBvc2l0aW9uXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHRkdCAqIDAuMTY2NjY2NjY2NjY3IFxuXHRcdCk7XG5cdFx0b3V0cHV0WydkdiddID0gVmVjdG9yLlNjYWxhcihcblx0XHRcdFZlY3Rvci5TdW0oXG5cdFx0XHRcdGEudmVsb2NpdHksXG5cdFx0XHRcdFZlY3Rvci5TdW0oXG5cdFx0XHRcdFx0VmVjdG9yLlNjYWxhcihcblx0XHRcdFx0XHRcdFZlY3Rvci5TdW0oXG5cdFx0XHRcdFx0XHRcdGIudmVsb2NpdHksXG5cdFx0XHRcdFx0XHRcdGMudmVsb2NpdHlcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHQyXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRkLnZlbG9jaXR5XG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHRkdCAqIDAuMTY2NjY2NjY2NjY3XG5cdFx0KTtcblxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblxuXHR2YXIgX2V2YWx1YXRlTUs0ID0gZnVuY3Rpb24gKCB2ZWxvY2l0eSwgZm9yY2UsIGR0LCBkZXJpdmF0ZSApIHtcblx0XHR2YXIgb3V0cHV0ID0gbmV3IF9zdGF0ZSgpO1xuXHRcdHZhciBkZXJpdiA9IGRlcml2YXRlLnZlbG9jaXR5LmR1cGxpY2F0ZSgpO1xuXHRcdGRlcml2LnNjYWxhcihkdCk7XG5cdFx0b3V0cHV0LnBvc2l0aW9uID0gVmVjdG9yLlN1bSh2ZWxvY2l0eSwgZGVyaXYpO1xuXHRcdG91dHB1dC52ZWxvY2l0eSA9IGZvcmNlO1xuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblxuXHR2YXIgX3N0YXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yKDAsMCk7XG5cdFx0dGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IoMCwwKTtcblx0fVxuXG59KShvcmcuZGJ5emVyby50b29scywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIFVzZXIgbW92ZW1lbnQgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTMvMTAvMjhcbiAqIEBkZXNjcmlwdGlvbiA6IFVzZXIgbW92ZW1lbnQgZm9yY2VcbiAqXG4gKiovXG5cbihmdW5jdGlvbihkZWltb3MsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0ZGVpbW9zLnBoeXNpYyA9IGRlaW1vcy5waHlzaWMgfHwge30gO1xuXG5cdC8qKlxuXHQgKiBVc2VyIE1vdmVtZW50IGNvbnN0cnVjdG9yXG5cdCAqIFxuXHQgKiBAcGFyYW0gVmVjdG9yIHBoeXNpY1xuXHQgKiBcblx0ICoqL1xuXG5cdGRlaW1vcy5waHlzaWMuVXNlck1vdmVtZW50ID0gZnVuY3Rpb24gKHBoeXNpYywgdHlwZSkge1xuXHRcdHRoaXMuaWQgPSBkZWltb3MucGh5c2ljLlVzZXJNb3ZlbWVudC5sYXN0aWQrKztcblx0XHR0aGlzLm1vdmVtZW50ID0gcGh5c2ljO1xuXHRcdHRoaXMuc3RhcnRUaW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHR0aGlzLmR1cmF0aW9uSW50ZWdyYXRlZCA9IDA7XG5cdFx0dGhpcy5kdXJhdGlvbiA9IG51bGw7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0fVxuXG5cdGRlaW1vcy5waHlzaWMuVXNlck1vdmVtZW50Lmxhc3RpZCA9IDA7XG5cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIEdyYXZpdHkgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTQvMDIvMTBcbiAqIEBkZXNjcmlwdGlvbiA6IEdyYXZpdHlcbiAqXG4gKiovXG5cbihmdW5jdGlvbihkZWltb3MsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cdGRlaW1vcy5waHlzaWMgPSBkZWltb3MucGh5c2ljIHx8IHt9IDtcblx0ZGVpbW9zLnBoeXNpYy5HcmF2aXR5ID0gbmV3IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3RvcigwLCAzMDApO1xufSkob3JnLmRieXplcm8uZGVpbW9zLCBkb2N1bWVudCk7IiwiLyoqXG4gKlxuICogb3JnLmRieXplcm8uZGVpbW9zLmFuYWx5c2UuTWFudWFsXG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTQvMDgvMzBcbiAqIEBkZXNjcmlwdGlvbiA6IEFuYWx5c2VyIGJ5IG1hbnVhbGx5IGdhbWUgYXJlYSBieSBicm93c2VyXG4gKlxuICogKi9cblxudmFyIG9yZyA9IG9yZyB8fCB7fSA7XG5vcmcuZGJ5emVybyA9IG9yZy5kYnl6ZXJvIHx8IHt9IDtcbm9yZy5kYnl6ZXJvLmRlaW1vcyA9IG9yZy5kYnl6ZXJvLmRlaW1vcyB8fCB7fSA7XG5vcmcuZGJ5emVyby5kZWltb3MuYW5hbHlzZXIgPSBvcmcuZGJ5emVyby5kZWltb3MuYW5hbHlzZXIgfHwge30gO1xuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXHRkZWltb3MuYW5hbHlzZXIuTWFudWFsID0gZnVuY3Rpb24oZG9tSUQpe1xuXHRcdHRoaXMuYXJlYURvbUlkID0gZG9tSUQ7XG5cdFx0dGhpcy5hcmVhWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUlEKTtcblx0XHR0aGlzLmJsb2Nrc0J5SWQgPSBbXTtcblx0XHR0aGlzLmJsb2Nrc0J5Q2xhc3MgPSBbXTtcblx0XHR0aGlzLmJsb2Nrc0J5VGFnID0gW107XG5cdFx0dGhpcy5ibG9ja3NQYXJzZWQgPSBbXTtcblx0fVxuXHRkZWltb3MuYW5hbHlzZXIuTWFudWFsLnByb3RvdHlwZS5hZGRCbG9jayA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBwbGF0ZWZvcm1lKXtcblx0XHQvL2lmIElEXG5cdFx0dmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXiMnLCdpJyk7XG5cdFx0aWYocmVnZXgudGVzdChzZWxlY3RvcikpIHtcblx0XHRcdHRoaXMuYWRkQmxvY2tCeUlkKHNlbGVjdG9yLnN1YnN0cigxKSxwbGF0ZWZvcm1lKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly9pZiBDbGFzc1xuXHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ15cXC4nLCdpJyk7XG5cdFx0aWYocmVnZXgudGVzdChzZWxlY3RvcikpIHtcblx0XHRcdHRoaXMuYWRkQmxvY2tCeUNsYXNzKHNlbGVjdG9yLnN1YnN0cigxKSxwbGF0ZWZvcm1lKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly9pZiBzZWN0b3Jcblx0XHR0aGlzLmFkZEJsb2NrQnlUYWcoc2VsZWN0b3IscGxhdGVmb3JtZSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGVpbW9zLmFuYWx5c2VyLk1hbnVhbC5wcm90b3R5cGUuYWRkQmxvY2tCeUlkID0gZnVuY3Rpb24oZG9tSWQsIHBsYXRlZm9ybWUpe1xuXHRcdHRoaXMuYmxvY2tzQnlJZC5wdXNoKHsnc2VsZWN0b3InOmRvbUlkLCdwbGF0ZWZvcm1lJzohIXBsYXRlZm9ybWV9KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkZWltb3MuYW5hbHlzZXIuTWFudWFsLnByb3RvdHlwZS5hZGRCbG9ja0J5Q2xhc3MgPSBmdW5jdGlvbihjbGFzc05hbWUsIHBsYXRlZm9ybWUpe1xuXHRcdHRoaXMuYmxvY2tzQnlDbGFzcy5wdXNoKHsnc2VsZWN0b3InOmNsYXNzTmFtZSwncGxhdGVmb3JtZSc6ISFwbGF0ZWZvcm1lfSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGVpbW9zLmFuYWx5c2VyLk1hbnVhbC5wcm90b3R5cGUuYWRkQmxvY2tCeVRhZyA9IGZ1bmN0aW9uKHRhZ05hbWUsIHBsYXRlZm9ybWUpe1xuXHRcdHRoaXMuYmxvY2tzQnlUYWcucHVzaCh7J3NlbGVjdG9yJzp0YWdOYW1lLCdwbGF0ZWZvcm1lJzohIXBsYXRlZm9ybWV9KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRkZWltb3MuYW5hbHlzZXIuTWFudWFsLnByb3RvdHlwZS5nZXRDb29yZHMgPSBmdW5jdGlvbihkb21Db250ZW50LGRvbUJsb2NrKXtcblx0XHQvL2Jyb3dzZSBhbGwgcGFyZW50IHRvIGRvbUNvbnRlbnQgdG8gYWRkIHRoZXJlIGNvb3JkXG5cdFx0dmFyIGxlZnQgPSAwO1xuXHRcdHZhciB0b3AgPSAwO1xuXHRcdHZhciBkb21Ccm93c2UgPSBkb21CbG9jazsgXG5cdFx0d2hpbGUoZG9tQnJvd3NlLm9mZnNldFBhcmVudCAhPSBkb21Db250ZW50KSB7XG5cdFx0XHRpZihkb21Ccm93c2Uub2Zmc2V0UGFyZW50ID09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRsZWZ0ICs9IGRvbUJyb3dzZS5vZmZzZXRMZWZ0O1xuXHRcdFx0dG9wICs9IGRvbUJyb3dzZS5vZmZzZXRUb3A7XG5cdFx0XHRkb21Ccm93c2UgPSBkb21Ccm93c2Uub2Zmc2V0UGFyZW50O1xuXHRcdH1cblx0XHRsZWZ0ICs9IGRvbUJyb3dzZS5vZmZzZXRMZWZ0O1xuXHRcdHRvcCArPSBkb21Ccm93c2Uub2Zmc2V0VG9wO1xuXHRcdHJldHVybiB7J2xlZnQnOmxlZnQsJ3RvcCc6dG9wfTtcblx0fVxuXHRkZWltb3MuYW5hbHlzZXIuTWFudWFsLnByb3RvdHlwZS5hZGREb21CbG9jayA9IGZ1bmN0aW9uKGRvbUJsb2NrLGlkLGJsb2NrKXtcblx0XHQvL3RlbXAgdmFyIHVzZWQgb24gcHJvY2Vzc1xuXHRcdHZhciBjb29yZHMsYmxvY2tMZWZ0LGJsb2NrVG9wLGJsb2NrSGVpZ2h0LGJsb2NrV2lkdGgsYmxvY2tKc29uO1xuXG5cdFx0Y29vcmRzID0gdGhpcy5nZXRDb29yZHModGhpcy5hcmVhWm9uZSxkb21CbG9jayk7XG5cdFx0aWYoY29vcmRzID09PSBudWxsKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnYmxvY2sgaXMgbm90IGEgY2hpbGQgb2YgdGhlIGFyZWEnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0YmxvY2tMZWZ0ID0gY29vcmRzLmxlZnQ7XG5cdFx0YmxvY2tUb3AgPSBjb29yZHMudG9wO1xuXHRcdGJsb2NrSGVpZ2h0ID0gZG9tQmxvY2sub2Zmc2V0SGVpZ2h0O1xuXHRcdGJsb2NrV2lkdGggPSBkb21CbG9jay5vZmZzZXRXaWR0aDtcblx0XHRibG9ja0pzb24gPSB7XG5cdFx0XHRcInBvc2l0aW9uXCI6e1wieFwiOmJsb2NrTGVmdCxcInlcIjpibG9ja1RvcH0sXG5cdFx0XHRcImhlaWdodFwiOmJsb2NrSGVpZ2h0LFwid2lkdGhcIjpibG9ja1dpZHRoLFxuXHRcdFx0XCJ0eXBlXCI6e1widmFsdWVcIjowLFwidHlwZVwiOigoYmxvY2sucGxhdGVmb3JtZSk/J3BsYXRlZm9ybSc6J2Jsb2NrcycpfSxcblx0XHRcdFwiaWRcIjpcImJsb2NrLVwiK2lkK1wiLWJ5LWlkLVwiK2Jsb2NrLnNlbGVjdG9yLFxuXHRcdFx0XCJ2ZXJ0ZXhUTFwiOntcInhcIjpibG9ja0xlZnQsXCJ5XCI6YmxvY2tUb3B9LFxuXHRcdFx0XCJ2ZXJ0ZXhUUlwiOntcInhcIjpibG9ja0xlZnQgKyBibG9ja1dpZHRoLFwieVwiOmJsb2NrVG9wfSxcblx0XHRcdFwidmVydGV4QkxcIjp7XCJ4XCI6YmxvY2tMZWZ0LFwieVwiOmJsb2NrVG9wICsgYmxvY2tIZWlnaHR9LFxuXHRcdFx0XCJ2ZXJ0ZXhCUlwiOntcInhcIjpibG9ja0xlZnQgKyBibG9ja1dpZHRoLFwieVwiOmJsb2NrVG9wICsgYmxvY2tIZWlnaHR9XG5cdFx0fVxuXHRcdHRoaXMuYmxvY2tzUGFyc2VkLnB1c2goYmxvY2tKc29uKTtcblx0fVxuXHRkZWltb3MuYW5hbHlzZXIuTWFudWFsLnByb3RvdHlwZS5leGVjID0gZnVuY3Rpb24oKXtcblx0XHRjb25zb2xlLmxvZygnLi4ucGFyc2luZycpO1xuXHRcdHRoaXMuYmxvY2tzUGFyc2VkID0gW107XG5cblx0XHQvL3RlbXAgdmFyIHVzZWQgb24gcHJvY2Vzc1xuXHRcdHZhciBibG9ja0lkID0gMTtcblx0XHR2YXIgZG9tQmxvY2ssZG9tQmxvY2tzLGNvb3JkcztcblxuXHRcdC8vYnkgaWRcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYmxvY2tzQnlJZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0ZG9tQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmJsb2Nrc0J5SWRbaV0uc2VsZWN0b3IpO1xuXHRcdFx0dGhpcy5hZGREb21CbG9jayhkb21CbG9jayxibG9ja0lkKyssdGhpcy5ibG9ja3NCeUlkW2ldKTtcblx0XHR9O1xuXG5cdFx0Ly9ieSBjbGFzc1xuXHRcdGZvciAodmFyIGlDbGFzcyA9IDA7IGlDbGFzcyA8IHRoaXMuYmxvY2tzQnlDbGFzcy5sZW5ndGg7IGlDbGFzcysrKSB7XG5cdFx0XHRkb21CbG9ja3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuYmxvY2tzQnlDbGFzc1tpQ2xhc3NdLnNlbGVjdG9yKTtcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tQmxvY2tzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHZhciBkb21CbG9jayA9IGRvbUJsb2Nrc1tqXTtcblx0XHRcdFx0dGhpcy5hZGREb21CbG9jayhkb21CbG9jayxibG9ja0lkKyssdGhpcy5ibG9ja3NCeUNsYXNzW2lDbGFzc10pO1xuXHRcdFx0fTtcblx0XHR9O1xuXG5cdFx0Ly9ieSBzZWN0aW9uIFxuXHRcdC8vVE9ET1xuXHRcdGNvbnNvbGUubG9nKCdkb25lIScpO1xuXHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuYmxvY2tzUGFyc2VkKSk7XG5cdH1cblxufSkob3JnLmRieXplcm8uZGVpbW9zLCBkb2N1bWVudCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
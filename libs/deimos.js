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
		init : function (config){
			//making UI
			deimos.Engine.ui = new deimos.render.UI() ;
			deimos.Engine.lastUpdate = null;
			deimos.Engine.lastSync = null;
			deimos.Engine.needSync = false;
			deimos.Engine.itemTemplates = {}; 
			deimos.Engine.pastFPS = [];

			//stocking asset access
			deimos.Engine.assetURL = config.serverAssetURL;
			deimos.Engine.gameArea = config.gameArea;

			_t = deimos.Engine._t = deimos.network.Message.CODE[deimos.Config.messageLevel];

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
			deimos.Engine.wsUrl = config.serverUrl;
			deimos.Engine.wsPort = config.serverPort ;
			deimos.Engine.wsClient = new deimos.network.WebsocketClient(deimos.Engine.wsUrl,deimos.Engine.wsPort,deimos.Engine.mode);

			//making scene
			deimos.Engine.scene = new deimos.render.Scene();

			bindEngineEvent();
			return true;
		},

		start: function(){
			deimos.Engine.wsClient.connect() ;
		},

		stop: function (){
			deimos.Engine.loop.stop() ;
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
			deimos.Engine.zone = new deimos.element.Zone(
				e[_t.MESSAGE][_t.MESSAGE_GAME_AREA_NAME],
				deimos.Engine.gameArea,
				e[_t.MESSAGE][_t.MESSAGE_GAME_AREA_WIDTH],
				e[_t.MESSAGE][_t.MESSAGE_GAME_AREA_HEIGHT],
				e[_t.MESSAGE][_t.MESSAGE_GAME_AREA_BLOCKS]
			);
		},

		startGame: function(e) {
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
			bindGameEventKey() ;

			//starting
			deimos.Engine.running = true;
			deimos.Engine.scene.dataToParse = e[_t.MESSAGE][_t.ACTION_SYNC];
			deimos.Engine.loop.start(deimos.Engine.update.bind(deimos.Engine));
		},
		stopGame : function() {
			deimos.Engine.running = false;
			deimos.Engine.loop.stop() ;
			unbindGameEventKey() ;
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
		}
	}

	//private function
	var unbindEngineEvent = function(){
		EventManager.unregister('org.dbyzero.deimos.network.gameStarted');
		EventManager.unregister('org.dbyzero.deimos.network.connected');
		EventManager.unregister('org.dbyzero.deimos.network.disconnected');
		EventManager.unregister('org.dbyzero.deimos.network.loggout');
		EventManager.unregister('org.dbyzero.deimos.render.parseScene');
		EventManager.unregister('org.dbyzero.deimos.network.logged') ;
	}


	var bindEngineEvent = function(){
		EventManager.register('org.dbyzero.deimos.network.connected',function() {
			//for now we restart loop when it's needed
			// deimos.Engine.loop.start(deimos.Engine.update.bind(deimos.Engine)) ;
		});

		EventManager.register('org.dbyzero.deimos.network.gameStarted',deimos.Engine.startGame);
		EventManager.register('org.dbyzero.deimos.render.parseScene',deimos.Engine.scene.parseData.bind(deimos.Engine.scene));

		EventManager.register('org.dbyzero.deimos.network.disconnected',deimos.Engine.stopGame);
		EventManager.register('org.dbyzero.deimos.network.loggout',deimos.Engine.stopGame);

		EventManager.register('org.dbyzero.deimos.network.logged',deimos.Engine.initGameArea) ;
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
		'<section id="org.dbyzero.deimos.gamePopup.main" style="background-color:#ebd3ad;width:200px;position:fixed;top:0px;left:0px;border:1px solid #9e6111;border-radius:5px;z-index:15;cursor:pointer">'+
			'<header style="width:194px;background-color:#fee895;height:20px;font-family:Arial;padding:3px;font-size:15px;border-radius:5px">'+
				'Deimos - <span style="font-style:italic">alpha</span>'+
				'<div id="org.dbyzero.deimos.gamePopup.message" style="transition:background-color 0.25s, border 0.25s;float:right;background-color:#ebd3ad;width:13px;height: 18px;border-right: 5px #AF9D7F solid;cursor:pointer"></div>'+
			'</header>'+
			'<section id="org.dbyzero.deimos.gamePopup.sectionLogin" style="display:block">'+
				'<form action="" method="post" id="org.dbyzero.deimos.gamePopup.loginForm" name="org.dbyzero.deimos.gamePopup.loginForm">'+
					'<input type="text" value="lolo" style="border:1px solid #333;background-color:#fff;margin:15px 0 0 15px;" placeholder=" login" id="org.dbyzero.deimos.gamePopup.loginInput"/>'+
					'<input type="password" value="toto" style="border:1px solid #333;background-color:#fff;margin:5px 0 0 15px;" placeholder=" password" id="org.dbyzero.deimos.gamePopup.passwordInput"/>'+
					'<input type="submit" style="border:1px solid #333;background-color:#fff;margin:5px 0 10px 15px;cursor:pointer" value=" login"/>'+
				'</form>'+
			'</section>'+
			'<section id="org.dbyzero.deimos.gamePopup.sectionChooseAvatar" style="font-size:10px;display:none">'+
				'<form name="org.dbyzero.deimos.gamePopup.formChooseAvatar" method="post" action="" id="org.dbyzero.deimos.gamePopup.formChooseAvatar">'+
					'<select id="org.dbyzero.deimos.gamePopup.avatarList" name="choose_avatar" style="border:1px solid #333;background-color:#fff;margin:8px 0 8px 5px;width:105px" size="5"></select>'+
					'<input id="" type="submit" value="Choose" style="border:1px solid #333;background-color:#fff;margin:0x; position: absolute; bottom: 55px; right: 4px;"> '+
				'</form>'+
			'</section>'+
			'<input type="button" value="logout" id="org.dbyzero.deimos.gamePopup.disconnect" style="border:1px solid #333;background-color:#fff;margin:4px 0 0 15px; position: absolute;top:0px;right:32px;cursor:pointer;display:none">'+
			'<footer style="width:194px;background-color:#FFFAED;height:20px;font-family:Arial;padding:3px;font-size:10px;border-radius:5px;margin-bottom:0px;">'+
				'<span>SERVER : <span style="width: 8px; height: 8px; background-color: red; display: inline-block; border-radius: 4px; margin: 1px 0 -1px 0;" id="org.dbyzero.deimos.gamePopup.indicatorServer"></span></span>'+
				' | <span>CONNECTION : <span style="width: 8px; height: 8px; background-color: red; display: inline-block; border-radius: 4px; margin: 1px 0 -1px 0;" id="org.dbyzero.deimos.gamePopup.indicatorConnected"></span></span>'+
				'<br/>'+
				'<span>v'+deimos.version+' | '+
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
		messageAreaElement.style.zIndex = '14';
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
				var translation = "translate3d("+parseInt(popup.style.left.slice(0,-2)) - (parseInt(oldX) - e.x)+"px," +
									parseInt(popup.style.top.slice(0,-2)) - (parseInt(oldY) - e.y)+"px,0px)";
				popup.style.transform = translation;
				popup.style.webkitTransform = translation;

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

		EventManager.register('org.dbyzero.deimos.network.logged',this.logged.bind(this)) ;
		EventManager.register('org.dbyzero.deimos.network.connected',this.connected.bind(this)) ;
		EventManager.register('org.dbyzero.deimos.network.disconnected',this.disconnected.bind(this)) ;
		EventManager.register('org.dbyzero.deimos.network.loggout',this.loggout.bind(this)) ;

		EventManager.register('org.dbyzero.deimos.console.write',this.addmessage.bind(this)) ;
		EventManager.register('org.dbyzero.deimos.console.writeError',this.addmessageError.bind(this)) ;
		EventManager.register('org.dbyzero.deimos.network.avatar_selected',this.avatarSelected) ;

		document.getElementById(deimos.Config.ui.login.formDomId).onsubmit = this.onLogin.bind(this) ;
		document.getElementById(deimos.Config.ui.chooseAvatar.formDomId).onsubmit = this.onAvatarChoosed.bind(this) ;
		document.getElementById(deimos.Config.ui.disconnectDomId).onclick = this.onLogout.bind(this) ;

		this.maxConsoleRow = 100 ;

		//focus on login
		document.getElementById(deimos.Config.ui.login.inputLoginDomId).focus();

		_t = deimos.Engine._t;
	}

	deimos.render.UI.prototype = {
		//show we are connected on UI
		connected : function(e) {
			document.getElementById(deimos.Config.ui.indication.serverStatus).style.backgroundColor = 'green' ;
			EventManager.fire("org.dbyzero.deimos.console.write",{"detail":{"message":"Connected"}});
		},
		
		
		//show we are disconnected on UI
		disconnected : function(e) {
			document.getElementById(deimos.Config.ui.indication.serverStatus).style.backgroundColor = 'red' ;
			this.loggout();
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
		logged: function(e) {
			var _t = deimos.Engine._t;

			//changing states
			document.getElementById(deimos.Config.ui.indication.serverStatus).style.backgroundColor = 'green' ;
			document.getElementById(deimos.Config.ui.indication.connectionStatus).style.backgroundColor = 'green' ;
			document.getElementById(deimos.Config.ui.login.sectionDomId).style.display = 'none' ;
			document.getElementById(deimos.Config.ui.disconnectDomId).style.display = 'block' ;

			//adding avatar choice
			var i = 0 ;
			var avatars = e[_t.MESSAGE][_t.AVATARS];
			for(avatar in avatars) {
				var option = new Option(avatars[avatar][_t.NAME],avatars[avatar][_t.ID]);;
				document.getElementById(deimos.Config.ui.chooseAvatar.avatarListDomId).appendChild(option) ;
				i++;
			}

			document.getElementById(deimos.Config.ui.chooseAvatar.avatarListDomId).selectedIndex = 0;
			document.getElementById(deimos.Config.ui.chooseAvatar.sectionDomId).style.display = 'block' ;
			EventManager.fire("org.dbyzero.deimos.console.write",{"detail":{"message":"Authenticated to the server"}});
		},

		//show we are logout
		loggout : function(e) {
			document.getElementById(deimos.Config.ui.indication.connectionStatus).style.backgroundColor = 'red' ;
			document.getElementById(deimos.Config.ui.login.sectionDomId).style.display = 'block' ;
			document.getElementById(deimos.Config.ui.disconnectDomId).style.display = 'none' ;
			document.getElementById(deimos.Config.ui.chooseAvatar.sectionDomId).style.display = 'none' ;
			document.getElementById(deimos.Config.ui.indication.lag).innerHTML = 'n/a' ;
			document.getElementById(deimos.Config.ui.indication.fps).innerHTML = 'n/a' ;
			document.getElementById(deimos.Config.ui.chooseAvatar.avatarListDomId).innerHTML = '' ;
			EventManager.fire("org.dbyzero.deimos.console.write",{"detail":{"message":"Disconnected"}});

			//clean session
			delete deimos.Engine.wsClient.session_id ;

			//clean avatar
			if(!!deimos.Engine.avatar) {
				deimos.Engine.avatar.cleanDom();
				delete deimos.Engine.avatar;
			}

			//clean other avatar
			for(var avatar in deimos.Engine.scene.avatars) {
				deimos.Engine.scene.avatars[avatar].cleanDom();
				delete deimos.Engine.scene.avatars[avatar];
			}

			//clean other projectile
			for(var projectile in deimos.Engine.scene.projectiles) {
				deimos.Engine.scene.projectiles[projectile].cleanDom();
				delete deimos.Engine.scene.projectiles[projectile];
			}

			//clean other items
			for(var item in deimos.Engine.scene.items) {
				deimos.Engine.scene.items[item].cleanDom();
				delete deimos.Engine.scene.items[item];
			}

			//clean other monsters
			for(var monster in deimos.Engine.scene.monsters) {
				deimos.Engine.scene.monsters[monster].cleanDom();
				delete deimos.Engine.scene.monsters[monster];
			}
		},

		onLogout : function(event){
			var message = {};
			var _t = deimos.Engine._t;
			message[_t.ACTION] = _t.ACTION_LOGOUT;
			message[_t.MESSAGE] = {};
			EventManager.fire("org.dbyzero.deimos.network.sendMessage",message);
			EventManager.fire("org.dbyzero.deimos.network.loggout");
			event.preventDefault();
		},

		onLogin : function(event){
			var login = document.getElementById(deimos.Config.ui.login.inputLoginDomId).value;
			var password = CryptoJS.MD5(document.getElementById(deimos.Config.ui.login.inputPasswordDomId).value).toString(CryptoJS.enc.Hex);
			var message = {};
			var _t = deimos.Engine._t;
			message[_t.ACTION] = _t.LOGIN;
			message[_t.MESSAGE] = {};
			message[_t.MESSAGE][_t.LOGIN] = login;
			message[_t.MESSAGE][_t.PASSWORD] = password;
			message[_t.MESSAGE][_t.MESSAGE_CURRENT_URL] = window.location.href;

			EventManager.fire("org.dbyzero.deimos.network.sendMessage",message);
			event.preventDefault();
		},

		onAvatarChoosed : function(event){
			var _t = deimos.Engine._t;
			var avatar = null;
			
			var list_avatar = document.forms[deimos.Config.ui.chooseAvatar.formDomId].choose_avatar ;
			if(!!list_avatar.options[list_avatar.selectedIndex]) {
				avatar = list_avatar.options[list_avatar.selectedIndex].value;
			}

			if(!!avatar) {
				var e = {} ;
				e[_t.ACTION] = _t.ACTION_CHOOSE_CHAR;
				e[_t.MESSAGE] = {};
				e[_t.MESSAGE][_t.MESSAGE_CHAR] = avatar;

				EventManager.fire("org.dbyzero.deimos.network.sendMessage",e);
			} else {
				EventManager.fire("org.dbyzero.deimos.console.write",{"detail":{"message":"Unknow avatar"}});
			}
			event.preventDefault();

		},

		//avatar is selected and confirmed by the backend
		avatarSelected: function(e) {
			var _t = deimos.Engine._t;
			if(!!e[_t.MESSAGE][_t.MESSAGE_CHAR][_t.MESSAGE_ELEMENT_ID]) {
				document.getElementById(deimos.Config.ui.chooseAvatar.sectionDomId).style.display = 'none' ;
				EventManager.fire("org.dbyzero.deimos.network.gameStarted",e);
			} else {
				EventManager.fire("org.dbyzero.deimos.console.write",{"detail":{"message":"Avatar has no id "}});
			}
		}

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
	}

	deimos.render.Scene.prototype.removeListener = function() {
		EventManager.unregister('org.dbyzero.deimos.network.syncItem') ;
		EventManager.unregister('org.dbyzero.deimos.network.syncAvatar') ;
		EventManager.unregister('org.dbyzero.deimos.network.syncMonster') ;
		EventManager.unregister('org.dbyzero.deimos.network.actionCollide') ;
		EventManager.unregister('org.dbyzero.deimos.network.syncProjectile') ;
		EventManager.unregister('org.dbyzero.deimos.network.syncAttackZone') ;
		EventManager.unregister('org.dbyzero.deimos.network.itemGrabbed') ;
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
		},
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
					EventManager.fire("org.dbyzero.deimos.network.avatar_selected",e);
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

var oldOnLoadFunction = window.onload;
window.onload = function(){
	org.dbyzero.deimos.version = '0.1.3';

	if(!!oldOnLoadFunction) {
		oldOnLoadFunction();
	}

	//start game if all is good in configuration
	var config = {
		serverUrl : "localhost",
		serverPort : 40004,
		serverAssetURL : "http://localhost:8080",
		gameArea : "gamezone"
	};

	if(org.dbyzero.deimos.Engine.init(config) === true)
		org.dbyzero.deimos.Engine.start() ;

};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1kNS5qcyIsIkluaGVyaXQuanMiLCJMb29wLmpzIiwiTG9nLmpzIiwiVmVjdG9yLmpzIiwiRXZlbnRNYW5hZ2VyLmpzIiwiS2V5Ym9hcmRDb250cm9sbGVyLmpzIiwiQ29uZmlnLmpzIiwiRW5naW5lLmpzIiwiQW5pbWF0aW9uLmpzIiwiVUkuanMiLCJTY2VuZS5qcyIsIkVsZW1lbnQuanMiLCJTcGVha2VyLmpzIiwiQXZhdGFyLmpzIiwiU2VydmVyQXZhdGFyLmpzIiwiQmxvY2suanMiLCJab25lLmpzIiwiUHJvamVjdGlsZS5qcyIsIk1vbnN0ZXIuanMiLCJJdGVtLmpzIiwiQXR0YWNrWm9uZS5qcyIsIldlYnNvY2tldENsaWVudC5qcyIsIk1hbmFnZXIuanMiLCJNZXNzYWdlLmpzIiwiUGh5c2ljcy5qcyIsIlVzZXJNb3ZlbWVudC5qcyIsIkdyYXZpdHkuanMiLCJNYW51YWwuanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzN5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZGVpbW9zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkNyeXB0b0pTIHYzLjEuMlxuY29kZS5nb29nbGUuY29tL3AvY3J5cHRvLWpzXG4oYykgMjAwOS0yMDEzIGJ5IEplZmYgTW90dC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbmNvZGUuZ29vZ2xlLmNvbS9wL2NyeXB0by1qcy93aWtpL0xpY2Vuc2VcbiovXG52YXIgQ3J5cHRvSlM9Q3J5cHRvSlN8fGZ1bmN0aW9uKHMscCl7dmFyIG09e30sbD1tLmxpYj17fSxuPWZ1bmN0aW9uKCl7fSxyPWwuQmFzZT17ZXh0ZW5kOmZ1bmN0aW9uKGIpe24ucHJvdG90eXBlPXRoaXM7dmFyIGg9bmV3IG47YiYmaC5taXhJbihiKTtoLmhhc093blByb3BlcnR5KFwiaW5pdFwiKXx8KGguaW5pdD1mdW5jdGlvbigpe2guJHN1cGVyLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSk7aC5pbml0LnByb3RvdHlwZT1oO2guJHN1cGVyPXRoaXM7cmV0dXJuIGh9LGNyZWF0ZTpmdW5jdGlvbigpe3ZhciBiPXRoaXMuZXh0ZW5kKCk7Yi5pbml0LmFwcGx5KGIsYXJndW1lbnRzKTtyZXR1cm4gYn0saW5pdDpmdW5jdGlvbigpe30sbWl4SW46ZnVuY3Rpb24oYil7Zm9yKHZhciBoIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShoKSYmKHRoaXNbaF09YltoXSk7Yi5oYXNPd25Qcm9wZXJ0eShcInRvU3RyaW5nXCIpJiYodGhpcy50b1N0cmluZz1iLnRvU3RyaW5nKX0sY2xvbmU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbml0LnByb3RvdHlwZS5leHRlbmQodGhpcyl9fSxcbnE9bC5Xb3JkQXJyYXk9ci5leHRlbmQoe2luaXQ6ZnVuY3Rpb24oYixoKXtiPXRoaXMud29yZHM9Ynx8W107dGhpcy5zaWdCeXRlcz1oIT1wP2g6NCpiLmxlbmd0aH0sdG9TdHJpbmc6ZnVuY3Rpb24oYil7cmV0dXJuKGJ8fHQpLnN0cmluZ2lmeSh0aGlzKX0sY29uY2F0OmZ1bmN0aW9uKGIpe3ZhciBoPXRoaXMud29yZHMsYT1iLndvcmRzLGo9dGhpcy5zaWdCeXRlcztiPWIuc2lnQnl0ZXM7dGhpcy5jbGFtcCgpO2lmKGolNClmb3IodmFyIGc9MDtnPGI7ZysrKWhbaitnPj4+Ml18PShhW2c+Pj4yXT4+PjI0LTgqKGclNCkmMjU1KTw8MjQtOCooKGorZyklNCk7ZWxzZSBpZig2NTUzNTxhLmxlbmd0aClmb3IoZz0wO2c8YjtnKz00KWhbaitnPj4+Ml09YVtnPj4+Ml07ZWxzZSBoLnB1c2guYXBwbHkoaCxhKTt0aGlzLnNpZ0J5dGVzKz1iO3JldHVybiB0aGlzfSxjbGFtcDpmdW5jdGlvbigpe3ZhciBiPXRoaXMud29yZHMsaD10aGlzLnNpZ0J5dGVzO2JbaD4+PjJdJj00Mjk0OTY3Mjk1PDxcbjMyLTgqKGglNCk7Yi5sZW5ndGg9cy5jZWlsKGgvNCl9LGNsb25lOmZ1bmN0aW9uKCl7dmFyIGI9ci5jbG9uZS5jYWxsKHRoaXMpO2Iud29yZHM9dGhpcy53b3Jkcy5zbGljZSgwKTtyZXR1cm4gYn0scmFuZG9tOmZ1bmN0aW9uKGIpe2Zvcih2YXIgaD1bXSxhPTA7YTxiO2ErPTQpaC5wdXNoKDQyOTQ5NjcyOTYqcy5yYW5kb20oKXwwKTtyZXR1cm4gbmV3IHEuaW5pdChoLGIpfX0pLHY9bS5lbmM9e30sdD12LkhleD17c3RyaW5naWZ5OmZ1bmN0aW9uKGIpe3ZhciBhPWIud29yZHM7Yj1iLnNpZ0J5dGVzO2Zvcih2YXIgZz1bXSxqPTA7ajxiO2orKyl7dmFyIGs9YVtqPj4+Ml0+Pj4yNC04KihqJTQpJjI1NTtnLnB1c2goKGs+Pj40KS50b1N0cmluZygxNikpO2cucHVzaCgoayYxNSkudG9TdHJpbmcoMTYpKX1yZXR1cm4gZy5qb2luKFwiXCIpfSxwYXJzZTpmdW5jdGlvbihiKXtmb3IodmFyIGE9Yi5sZW5ndGgsZz1bXSxqPTA7ajxhO2orPTIpZ1tqPj4+M118PXBhcnNlSW50KGIuc3Vic3RyKGosXG4yKSwxNik8PDI0LTQqKGolOCk7cmV0dXJuIG5ldyBxLmluaXQoZyxhLzIpfX0sYT12LkxhdGluMT17c3RyaW5naWZ5OmZ1bmN0aW9uKGIpe3ZhciBhPWIud29yZHM7Yj1iLnNpZ0J5dGVzO2Zvcih2YXIgZz1bXSxqPTA7ajxiO2orKylnLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShhW2o+Pj4yXT4+PjI0LTgqKGolNCkmMjU1KSk7cmV0dXJuIGcuam9pbihcIlwiKX0scGFyc2U6ZnVuY3Rpb24oYil7Zm9yKHZhciBhPWIubGVuZ3RoLGc9W10saj0wO2o8YTtqKyspZ1tqPj4+Ml18PShiLmNoYXJDb2RlQXQoaikmMjU1KTw8MjQtOCooaiU0KTtyZXR1cm4gbmV3IHEuaW5pdChnLGEpfX0sdT12LlV0Zjg9e3N0cmluZ2lmeTpmdW5jdGlvbihiKXt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoYS5zdHJpbmdpZnkoYikpKX1jYXRjaChnKXt0aHJvdyBFcnJvcihcIk1hbGZvcm1lZCBVVEYtOCBkYXRhXCIpO319LHBhcnNlOmZ1bmN0aW9uKGIpe3JldHVybiBhLnBhcnNlKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChiKSkpfX0sXG5nPWwuQnVmZmVyZWRCbG9ja0FsZ29yaXRobT1yLmV4dGVuZCh7cmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLl9kYXRhPW5ldyBxLmluaXQ7dGhpcy5fbkRhdGFCeXRlcz0wfSxfYXBwZW5kOmZ1bmN0aW9uKGIpe1wic3RyaW5nXCI9PXR5cGVvZiBiJiYoYj11LnBhcnNlKGIpKTt0aGlzLl9kYXRhLmNvbmNhdChiKTt0aGlzLl9uRGF0YUJ5dGVzKz1iLnNpZ0J5dGVzfSxfcHJvY2VzczpmdW5jdGlvbihiKXt2YXIgYT10aGlzLl9kYXRhLGc9YS53b3JkcyxqPWEuc2lnQnl0ZXMsaz10aGlzLmJsb2NrU2l6ZSxtPWovKDQqayksbT1iP3MuY2VpbChtKTpzLm1heCgobXwwKS10aGlzLl9taW5CdWZmZXJTaXplLDApO2I9bSprO2o9cy5taW4oNCpiLGopO2lmKGIpe2Zvcih2YXIgbD0wO2w8YjtsKz1rKXRoaXMuX2RvUHJvY2Vzc0Jsb2NrKGcsbCk7bD1nLnNwbGljZSgwLGIpO2Euc2lnQnl0ZXMtPWp9cmV0dXJuIG5ldyBxLmluaXQobCxqKX0sY2xvbmU6ZnVuY3Rpb24oKXt2YXIgYj1yLmNsb25lLmNhbGwodGhpcyk7XG5iLl9kYXRhPXRoaXMuX2RhdGEuY2xvbmUoKTtyZXR1cm4gYn0sX21pbkJ1ZmZlclNpemU6MH0pO2wuSGFzaGVyPWcuZXh0ZW5kKHtjZmc6ci5leHRlbmQoKSxpbml0OmZ1bmN0aW9uKGIpe3RoaXMuY2ZnPXRoaXMuY2ZnLmV4dGVuZChiKTt0aGlzLnJlc2V0KCl9LHJlc2V0OmZ1bmN0aW9uKCl7Zy5yZXNldC5jYWxsKHRoaXMpO3RoaXMuX2RvUmVzZXQoKX0sdXBkYXRlOmZ1bmN0aW9uKGIpe3RoaXMuX2FwcGVuZChiKTt0aGlzLl9wcm9jZXNzKCk7cmV0dXJuIHRoaXN9LGZpbmFsaXplOmZ1bmN0aW9uKGIpe2ImJnRoaXMuX2FwcGVuZChiKTtyZXR1cm4gdGhpcy5fZG9GaW5hbGl6ZSgpfSxibG9ja1NpemU6MTYsX2NyZWF0ZUhlbHBlcjpmdW5jdGlvbihiKXtyZXR1cm4gZnVuY3Rpb24oYSxnKXtyZXR1cm4obmV3IGIuaW5pdChnKSkuZmluYWxpemUoYSl9fSxfY3JlYXRlSG1hY0hlbHBlcjpmdW5jdGlvbihiKXtyZXR1cm4gZnVuY3Rpb24oYSxnKXtyZXR1cm4obmV3IGsuSE1BQy5pbml0KGIsXG5nKSkuZmluYWxpemUoYSl9fX0pO3ZhciBrPW0uYWxnbz17fTtyZXR1cm4gbX0oTWF0aCk7XG4oZnVuY3Rpb24ocyl7ZnVuY3Rpb24gcChhLGssYixoLGwsaixtKXthPWErKGsmYnx+ayZoKStsK207cmV0dXJuKGE8PGp8YT4+PjMyLWopK2t9ZnVuY3Rpb24gbShhLGssYixoLGwsaixtKXthPWErKGsmaHxiJn5oKStsK207cmV0dXJuKGE8PGp8YT4+PjMyLWopK2t9ZnVuY3Rpb24gbChhLGssYixoLGwsaixtKXthPWErKGteYl5oKStsK207cmV0dXJuKGE8PGp8YT4+PjMyLWopK2t9ZnVuY3Rpb24gbihhLGssYixoLGwsaixtKXthPWErKGJeKGt8fmgpKStsK207cmV0dXJuKGE8PGp8YT4+PjMyLWopK2t9Zm9yKHZhciByPUNyeXB0b0pTLHE9ci5saWIsdj1xLldvcmRBcnJheSx0PXEuSGFzaGVyLHE9ci5hbGdvLGE9W10sdT0wOzY0PnU7dSsrKWFbdV09NDI5NDk2NzI5NipzLmFicyhzLnNpbih1KzEpKXwwO3E9cS5NRDU9dC5leHRlbmQoe19kb1Jlc2V0OmZ1bmN0aW9uKCl7dGhpcy5faGFzaD1uZXcgdi5pbml0KFsxNzMyNTg0MTkzLDQwMjMyMzM0MTcsMjU2MjM4MzEwMiwyNzE3MzM4NzhdKX0sXG5fZG9Qcm9jZXNzQmxvY2s6ZnVuY3Rpb24oZyxrKXtmb3IodmFyIGI9MDsxNj5iO2IrKyl7dmFyIGg9aytiLHc9Z1toXTtnW2hdPSh3PDw4fHc+Pj4yNCkmMTY3MTE5MzV8KHc8PDI0fHc+Pj44KSY0Mjc4MjU1MzYwfXZhciBiPXRoaXMuX2hhc2gud29yZHMsaD1nW2srMF0sdz1nW2srMV0saj1nW2srMl0scT1nW2srM10scj1nW2srNF0scz1nW2srNV0sdD1nW2srNl0sdT1nW2srN10sdj1nW2srOF0seD1nW2srOV0seT1nW2srMTBdLHo9Z1trKzExXSxBPWdbaysxMl0sQj1nW2srMTNdLEM9Z1trKzE0XSxEPWdbaysxNV0sYz1iWzBdLGQ9YlsxXSxlPWJbMl0sZj1iWzNdLGM9cChjLGQsZSxmLGgsNyxhWzBdKSxmPXAoZixjLGQsZSx3LDEyLGFbMV0pLGU9cChlLGYsYyxkLGosMTcsYVsyXSksZD1wKGQsZSxmLGMscSwyMixhWzNdKSxjPXAoYyxkLGUsZixyLDcsYVs0XSksZj1wKGYsYyxkLGUscywxMixhWzVdKSxlPXAoZSxmLGMsZCx0LDE3LGFbNl0pLGQ9cChkLGUsZixjLHUsMjIsYVs3XSksXG5jPXAoYyxkLGUsZix2LDcsYVs4XSksZj1wKGYsYyxkLGUseCwxMixhWzldKSxlPXAoZSxmLGMsZCx5LDE3LGFbMTBdKSxkPXAoZCxlLGYsYyx6LDIyLGFbMTFdKSxjPXAoYyxkLGUsZixBLDcsYVsxMl0pLGY9cChmLGMsZCxlLEIsMTIsYVsxM10pLGU9cChlLGYsYyxkLEMsMTcsYVsxNF0pLGQ9cChkLGUsZixjLEQsMjIsYVsxNV0pLGM9bShjLGQsZSxmLHcsNSxhWzE2XSksZj1tKGYsYyxkLGUsdCw5LGFbMTddKSxlPW0oZSxmLGMsZCx6LDE0LGFbMThdKSxkPW0oZCxlLGYsYyxoLDIwLGFbMTldKSxjPW0oYyxkLGUsZixzLDUsYVsyMF0pLGY9bShmLGMsZCxlLHksOSxhWzIxXSksZT1tKGUsZixjLGQsRCwxNCxhWzIyXSksZD1tKGQsZSxmLGMsciwyMCxhWzIzXSksYz1tKGMsZCxlLGYseCw1LGFbMjRdKSxmPW0oZixjLGQsZSxDLDksYVsyNV0pLGU9bShlLGYsYyxkLHEsMTQsYVsyNl0pLGQ9bShkLGUsZixjLHYsMjAsYVsyN10pLGM9bShjLGQsZSxmLEIsNSxhWzI4XSksZj1tKGYsYyxcbmQsZSxqLDksYVsyOV0pLGU9bShlLGYsYyxkLHUsMTQsYVszMF0pLGQ9bShkLGUsZixjLEEsMjAsYVszMV0pLGM9bChjLGQsZSxmLHMsNCxhWzMyXSksZj1sKGYsYyxkLGUsdiwxMSxhWzMzXSksZT1sKGUsZixjLGQseiwxNixhWzM0XSksZD1sKGQsZSxmLGMsQywyMyxhWzM1XSksYz1sKGMsZCxlLGYsdyw0LGFbMzZdKSxmPWwoZixjLGQsZSxyLDExLGFbMzddKSxlPWwoZSxmLGMsZCx1LDE2LGFbMzhdKSxkPWwoZCxlLGYsYyx5LDIzLGFbMzldKSxjPWwoYyxkLGUsZixCLDQsYVs0MF0pLGY9bChmLGMsZCxlLGgsMTEsYVs0MV0pLGU9bChlLGYsYyxkLHEsMTYsYVs0Ml0pLGQ9bChkLGUsZixjLHQsMjMsYVs0M10pLGM9bChjLGQsZSxmLHgsNCxhWzQ0XSksZj1sKGYsYyxkLGUsQSwxMSxhWzQ1XSksZT1sKGUsZixjLGQsRCwxNixhWzQ2XSksZD1sKGQsZSxmLGMsaiwyMyxhWzQ3XSksYz1uKGMsZCxlLGYsaCw2LGFbNDhdKSxmPW4oZixjLGQsZSx1LDEwLGFbNDldKSxlPW4oZSxmLGMsZCxcbkMsMTUsYVs1MF0pLGQ9bihkLGUsZixjLHMsMjEsYVs1MV0pLGM9bihjLGQsZSxmLEEsNixhWzUyXSksZj1uKGYsYyxkLGUscSwxMCxhWzUzXSksZT1uKGUsZixjLGQseSwxNSxhWzU0XSksZD1uKGQsZSxmLGMsdywyMSxhWzU1XSksYz1uKGMsZCxlLGYsdiw2LGFbNTZdKSxmPW4oZixjLGQsZSxELDEwLGFbNTddKSxlPW4oZSxmLGMsZCx0LDE1LGFbNThdKSxkPW4oZCxlLGYsYyxCLDIxLGFbNTldKSxjPW4oYyxkLGUsZixyLDYsYVs2MF0pLGY9bihmLGMsZCxlLHosMTAsYVs2MV0pLGU9bihlLGYsYyxkLGosMTUsYVs2Ml0pLGQ9bihkLGUsZixjLHgsMjEsYVs2M10pO2JbMF09YlswXStjfDA7YlsxXT1iWzFdK2R8MDtiWzJdPWJbMl0rZXwwO2JbM109YlszXStmfDB9LF9kb0ZpbmFsaXplOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fZGF0YSxrPWEud29yZHMsYj04KnRoaXMuX25EYXRhQnl0ZXMsaD04KmEuc2lnQnl0ZXM7a1toPj4+NV18PTEyODw8MjQtaCUzMjt2YXIgbD1zLmZsb29yKGIvXG40Mjk0OTY3Mjk2KTtrWyhoKzY0Pj4+OTw8NCkrMTVdPShsPDw4fGw+Pj4yNCkmMTY3MTE5MzV8KGw8PDI0fGw+Pj44KSY0Mjc4MjU1MzYwO2tbKGgrNjQ+Pj45PDw0KSsxNF09KGI8PDh8Yj4+PjI0KSYxNjcxMTkzNXwoYjw8MjR8Yj4+PjgpJjQyNzgyNTUzNjA7YS5zaWdCeXRlcz00KihrLmxlbmd0aCsxKTt0aGlzLl9wcm9jZXNzKCk7YT10aGlzLl9oYXNoO2s9YS53b3Jkcztmb3IoYj0wOzQ+YjtiKyspaD1rW2JdLGtbYl09KGg8PDh8aD4+PjI0KSYxNjcxMTkzNXwoaDw8MjR8aD4+PjgpJjQyNzgyNTUzNjA7cmV0dXJuIGF9LGNsb25lOmZ1bmN0aW9uKCl7dmFyIGE9dC5jbG9uZS5jYWxsKHRoaXMpO2EuX2hhc2g9dGhpcy5faGFzaC5jbG9uZSgpO3JldHVybiBhfX0pO3IuTUQ1PXQuX2NyZWF0ZUhlbHBlcihxKTtyLkhtYWNNRDU9dC5fY3JlYXRlSG1hY0hlbHBlcihxKX0pKE1hdGgpO1xuIiwiLyoqXG4gKlxuICogb3JnLmRieXplcm8udG9vbHMuSW5oZXJpdCBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxNC8wMy8yMlxuICogQGRlc2NyaXB0aW9uIDogSW5oZXJpdCB0b29sc1xuICogXG4gKi9cblxudmFyIG9yZyA9IG9yZyB8fCB7fSA7XG5vcmcuZGJ5emVybyA9IG9yZy5kYnl6ZXJvIHx8IHt9IDtcbm9yZy5kYnl6ZXJvLnRvb2xzID0gb3JnLmRieXplcm8udG9vbHMgfHwge30gO1xuXG4oZnVuY3Rpb24odG9vbHMsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0dG9vbHMuSW5oZXJpdCA9IGZ1bmN0aW9uKG9iaiwgcGFyZW50KSB7XG5cblx0XHRmb3IgKHZhciBwcm9wIGluIHBhcmVudCkge1xuXHRcdFx0b2JqW3Byb3BdID0gcGFyZW50W3Byb3BdO1xuXHRcdH1cblxuXHRcdG9iai5fc3VwZXIgPSBwYXJlbnQ7XG5cdFx0b2JqLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocGFyZW50LnByb3RvdHlwZSwge1xuXHRcdFx0Y29uc3RydWN0b3I6IHtcblx0XHRcdFx0dmFsdWU6IG9iaixcblx0XHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWVcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSkob3JnLmRieXplcm8udG9vbHMsZG9jdW1lbnQpOyIsIi8qKlxuICogb3JnLmRieXplcm8udG9vbHMuTG9vcCBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxMy8wNy8yOFxuICogQGRlc2NyaXB0aW9uIDogTG9vcCB0b29sc1xuICogXG4gKi9cblxudmFyIG9yZyA9IG9yZyB8fCB7fSA7XG5vcmcuZGJ5emVybyA9IG9yZy5kYnl6ZXJvIHx8IHt9IDtcbm9yZy5kYnl6ZXJvLnRvb2xzID0gb3JnLmRieXplcm8udG9vbHMgfHwge30gO1xuXG4oZnVuY3Rpb24odG9vbHMsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIExvb3AgY29uc3RydWN0b3Jcblx0ICogQHBhcmFtcyBkZXNjIHN0cmluZyBcdFx0RGVzY3JpcHRpb24gb2YgdGhlIGxvb3AsIHVzZWZ1bGwgZm9yIGRlYnVnXG5cdCAqIEBwYXJhbXMgZGVsYXkgaW50IFx0XHR0aW1lIGluIG1zLCB3YWludGluZyB0aW1lIGJldHdlZW4gZWFjaCBsb29wXG5cdCAqIEBwYXJhbXMgdHRsIGludHxvcHRpb25hbFx0dGltZSBpbiBtcywgTWF4IHRpbWUgdG8gbG9vcCBiZWZvcmUgc3RvcHBpbmdcblx0ICpcblx0ICogKi9cblx0dG9vbHMuTG9vcCA9IGZ1bmN0aW9uKGRlc2MsZGVsYXksdHRsKSB7XG5cblx0XHQvL2RlZmF1bHQgdmFsdWUgZm9yIHR0bFxuXHRcdHR0bCA9IHR5cGVvZiB0dGwgIT09ICd1bmRlZmluZWQnID8gdHRsIDogMDtcblxuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjIDtcblx0XHR0aGlzLmxvb3BJZCA9IDAgO1xuXHRcdHRoaXMubGFzdFVwZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIDtcblx0XHR0aGlzLmRlbGF5ID0gZGVsYXkgO1xuXHRcdHRoaXMuYWN0aXZlID0gZmFsc2UgO1xuXHRcdHRoaXMudHRsID0gdHRsIDtcblx0fVxuXG5cdC8qKlxuXHQgKiBMb29wIG1ldGhvZHNcblx0ICpcblx0ICogKi9cblx0dG9vbHMuTG9vcC5wcm90b3R5cGUgPSB7XG5cdFx0XCJzdGFydFwiIDogZnVuY3Rpb24obG9vcGVkRnVuY3Rpb24pIHtcblx0XHRcdHRoaXMuYWN0aXZlID0gdHJ1ZSA7XG5cdFx0XHRsb29wZWRGdW5jdGlvbi5iaW5kKHRoaXMpIDtcblxuXHRcdFx0Ly9sb29waWlpaW5nXG5cdFx0XHQoZnVuY3Rpb24gbG9vcCgpe1xuXHRcdFx0XHRsb29wZWRGdW5jdGlvbigpO1xuXHRcdFx0XHR0aGlzLmxvb3BJZCA9IHNldFRpbWVvdXQobG9vcC5iaW5kKHRoaXMpLHRoaXMuZGVsYXkpIDtcblx0XHRcdH0pLmNhbGwodGhpcykgO1xuXG5cdFx0XHQvL3R0bCBtYW5hZ2Vcblx0XHRcdGlmKHRoaXMudHRsID4gMCkge1xuXHRcdFx0XHR2YXIgc2FmZUZ1bmN0aW9uID0gZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRpZih0aGlzLmFjdGl2ZSkge1xuXHRcdFx0XHRcdFx0TG9nLndhcm5pbmcoJ1RUTCByZWFjaCBmb3IgbG9vcCAnK3RoaXMuZGVzY3JpcHRpb24pO1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9wKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IDtcblx0XHRcdFx0c2V0VGltZW91dChzYWZlRnVuY3Rpb24uYmluZCh0aGlzKSx0aGlzLnR0bCkgO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XCJzdG9wXCIgOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuYWN0aXZlID0gZmFsc2UgO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMubG9vcElkKSA7XG5cdFx0fVxuXHR9XG59KShvcmcuZGJ5emVyby50b29scywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIG9yZy5kYnl6ZXJvLnRvb2xzLkxvZyBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxMy8wNy8yOFxuICogQGRlc2NyaXB0aW9uIDogTG9nIG1vZGVsXG4gKiBcbiAqL1xudmFyIG9yZyA9IG9yZyB8fCB7fSA7XG5vcmcuZGJ5emVybyA9IG9yZy5kYnl6ZXJvIHx8IHt9IDtcbm9yZy5kYnl6ZXJvLnRvb2xzID0gb3JnLmRieXplcm8udG9vbHMgfHwge30gO1xuXG4oZnVuY3Rpb24odG9vbHMsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0Ly9wcml2YXRlXG5cdHZhciBnZXREYXRlID0gZnVuY3Rpb24obXNnKSB7XG5cdFx0dmFyIGQgPSBuZXcgRGF0ZSgpIDtcblx0XHRyZXR1cm4gJygnK1xuXHRcdFx0ZC5nZXRGdWxsWWVhcigpICsgJy8nICsgXG5cdFx0XHRzdHJfcGFkKGQuZ2V0TW9udGgoKSwyLCcwJykgKyAnLycgKyBcblx0XHRcdHN0cl9wYWQoZC5nZXREYXRlKCksMiwnMCcpICsgJyAnICsgXG5cdFx0XHRzdHJfcGFkKGQuZ2V0SG91cnMoKSwyLCcwJykgKyAnOicgKyBcblx0XHRcdHN0cl9wYWQoZC5nZXRNaW51dGVzKCksMiwnMCcpICsgJzonICsgXG5cdFx0XHRzdHJfcGFkKGQuZ2V0U2Vjb25kcygpLDIsJzAnKSArICcpJyA7XG5cdH07XG5cdHZhciBzdHJfcGFkID0gZnVuY3Rpb24gKGlucHV0LCBwYWRfbGVuZ3RoLCBwYWRfc3RyaW5nLCBwYWRfdHlwZSkge1xuXHRcdC8vIGh0dHA6Ly9rZXZpbi52YW56b25uZXZlbGQubmV0XG5cdFx0Ly8gKyAgIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va2V2aW4udmFuem9ubmV2ZWxkLm5ldClcblx0XHQvLyArIG5hbWVzcGFjZWQgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuXHRcdC8vICsgICAgICBpbnB1dCBieTogTWFyY28gdmFuIE9vcnRcblx0XHQvLyArICAgYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG5cdFx0Ly8gKiAgICAgZXhhbXBsZSAxOiBzdHJfcGFkKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJywgMzAsICctPScsICdTVFJfUEFEX0xFRlQnKTtcblx0XHQvLyAqICAgICByZXR1cm5zIDE6ICctPS09LT0tPS09LUtldmluIHZhbiBab25uZXZlbGQnXG5cdFx0Ly8gKiAgICAgZXhhbXBsZSAyOiBzdHJfcGFkKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJywgMzAsICctJywgJ1NUUl9QQURfQk9USCcpO1xuXHRcdC8vICogICAgIHJldHVybnMgMjogJy0tLS0tLUtldmluIHZhbiBab25uZXZlbGQtLS0tLSdcblx0XHR2YXIgaGFsZiA9ICcnLFxuXHRcdHBhZF90b19nbztcblxuXHRcdHZhciBzdHJfcGFkX3JlcGVhdGVyID0gZnVuY3Rpb24gKHMsIGxlbikge1xuXHRcdHZhciBjb2xsZWN0ID0gJycsXG5cdFx0aTtcblxuXHRcdHdoaWxlIChjb2xsZWN0Lmxlbmd0aCA8IGxlbikge1xuXHRcdGNvbGxlY3QgKz0gcztcblx0XHR9XG5cdFx0Y29sbGVjdCA9IGNvbGxlY3Quc3Vic3RyKDAsIGxlbik7XG5cblx0XHRyZXR1cm4gY29sbGVjdDtcblx0XHR9O1xuXG5cdFx0aW5wdXQgKz0gJyc7XG5cdFx0cGFkX3N0cmluZyA9IHBhZF9zdHJpbmcgIT09IHVuZGVmaW5lZCA/IHBhZF9zdHJpbmcgOiAnICc7XG5cblx0XHRpZiAocGFkX3R5cGUgIT09ICdTVFJfUEFEX0xFRlQnICYmIHBhZF90eXBlICE9PSAnU1RSX1BBRF9SSUdIVCcgJiYgcGFkX3R5cGUgIT09ICdTVFJfUEFEX0JPVEgnKSB7XG5cdFx0XHRwYWRfdHlwZSA9ICdTVFJfUEFEX0xFRlQnO1xuXHRcdH1cblx0XHRpZiAoKHBhZF90b19nbyA9IHBhZF9sZW5ndGggLSBpbnB1dC5sZW5ndGgpID4gMCkge1xuXHRcdFx0aWYgKHBhZF90eXBlID09PSAnU1RSX1BBRF9MRUZUJykge1xuXHRcdFx0XHRpbnB1dCA9IHN0cl9wYWRfcmVwZWF0ZXIocGFkX3N0cmluZywgcGFkX3RvX2dvKSArIGlucHV0O1xuXHRcdFx0fSBlbHNlIGlmIChwYWRfdHlwZSA9PT0gJ1NUUl9QQURfUklHSFQnKSB7XG5cdFx0XHRcdGlucHV0ID0gaW5wdXQgKyBzdHJfcGFkX3JlcGVhdGVyKHBhZF9zdHJpbmcsIHBhZF90b19nbyk7XG5cdFx0XHR9IGVsc2UgaWYgKHBhZF90eXBlID09PSAnU1RSX1BBRF9CT1RIJykge1xuXHRcdFx0XHRoYWxmID0gc3RyX3BhZF9yZXBlYXRlcihwYWRfc3RyaW5nLCBNYXRoLmNlaWwocGFkX3RvX2dvIC8gMikpO1xuXHRcdFx0XHRpbnB1dCA9IGhhbGYgKyBpbnB1dCArIGhhbGY7XG5cdFx0XHRcdGlucHV0ID0gaW5wdXQuc3Vic3RyKDAsIHBhZF9sZW5ndGgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBpbnB1dDtcblx0fVxuXG5cdC8qKlxuXHQgKiBMb2cgbWV0aG9kc1xuXHQgKlxuXHQgKiAqL1xuXHR0b29scy5Mb2cgPSB7XG5cdFx0XCJnYXlcIiA6IGZ1bmN0aW9uKG1zZykge1xuXHRcdFx0Y29uc29sZS5sb2coJ3JhaW5ib3c6JyArICcgJyArIGdldERhdGUoKSArICcgOiAnICsgbXNnKVxuXHRcdH0sXG5cdFx0XCJzdWNjZXNzXCIgOiBmdW5jdGlvbihtc2cpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdzdWNjZXNzOicgKyAnICcgKyBnZXREYXRlKCkgKyAnIDogJyArIG1zZylcblx0XHR9LFxuXHRcdFwiaW5mb1wiIDogZnVuY3Rpb24obXNnKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnaW5mbzonICsgJyAgICAnICsgZ2V0RGF0ZSgpICsgJyA6ICcgKyBtc2cpXG5cdFx0fSxcblx0XHRcImRlYnVnXCIgOiBmdW5jdGlvbihtc2cpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdkZWJ1ZzonICsgJyAgICcgKyBnZXREYXRlKCkgKyAnIDogJyArIG1zZylcblx0XHR9LFxuXHRcdFwid2FybmluZ1wiIDogZnVuY3Rpb24obXNnKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ3dhcm5pbmc6JyArICcgJyArIGdldERhdGUoKSArICcgOiAnICsgbXNnKVxuXHRcdH0sXG5cdFx0XCJlcnJvclwiIDogZnVuY3Rpb24obXNnKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdlcnJvcjonICsgJyAgICcgKyBnZXREYXRlKCkgKyAnIDogJyArIG1zZylcblx0XHR9LFxuXHRcdFwiYWxlcnRcIiA6IGZ1bmN0aW9uKG1zZykge1xuXHRcdFx0Y29uc29sZS5lcnJvcignYWxlcnQ6JyArICcgICAnICsgZ2V0RGF0ZSgpICsgJyA6ICcgKyBtc2cpXG5cdFx0fVxuXHR9XG59KShvcmcuZGJ5emVyby50b29scywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3RvciB1dGlsIGNsYXNzXG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTMvMDgvMDlcbiAqIEBkZXNjcmlwdGlvbiA6IFZlY3RvciB0b29sc1xuICpcbiAqL1xuIFxudmFyIG9yZyA9IG9yZyB8fCB7fSA7XG5vcmcuZGJ5emVybyA9IG9yZy5kYnl6ZXJvIHx8IHt9IDtcbm9yZy5kYnl6ZXJvLnRvb2xzID0gb3JnLmRieXplcm8udG9vbHMgfHwge30gO1xuXG4oZnVuY3Rpb24odG9vbHMsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIFZlY3RvciBjb25zdHJ1Y3RvclxuXHQgKi9cblxuXHR0b29scy5WZWN0b3IgPSBmdW5jdGlvbih4LHkpIHtcblx0XHR0aGlzLnggPSB4IDtcblx0XHR0aGlzLnkgPSB5IDtcblx0fVxuXG5cdHRvb2xzLlZlY3Rvci5aZXJvID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIG5ldyB0b29scy5WZWN0b3IoMCwwKTtcblx0fVxuXG5cdHRvb2xzLlZlY3Rvci5TdW0gPSBmdW5jdGlvbih2ZWN0b3IxLHZlY3RvcjIpIHtcblx0XHRyZXR1cm4gbmV3IHRvb2xzLlZlY3RvcihwYXJzZUZsb2F0KHZlY3RvcjEueCkgKyBwYXJzZUZsb2F0KHZlY3RvcjIueCksIHBhcnNlRmxvYXQodmVjdG9yMS55KSArIHBhcnNlRmxvYXQodmVjdG9yMi55KSkgO1xuXHR9XG5cblx0dG9vbHMuVmVjdG9yLlN1YiA9IGZ1bmN0aW9uKHZlY3RvcjEsdmVjdG9yMikge1xuXHRcdHJldHVybiBuZXcgdG9vbHMuVmVjdG9yKHBhcnNlRmxvYXQodmVjdG9yMS54KSAtIHBhcnNlRmxvYXQodmVjdG9yMi54KSwgcGFyc2VGbG9hdCh2ZWN0b3IxLnkpIC0gcGFyc2VGbG9hdCh2ZWN0b3IyLnkpKSA7XG5cdH1cblxuXHR0b29scy5WZWN0b3IuRG90ID0gZnVuY3Rpb24odmVjdG9yMSx2ZWN0b3IyKSB7XG5cdFx0cmV0dXJuIG5ldyB0b29scy5WZWN0b3IocGFyc2VGbG9hdCh2ZWN0b3IxLngpICogcGFyc2VGbG9hdCh2ZWN0b3IyLngpLCBwYXJzZUZsb2F0KHZlY3RvcjEueSkgKiBwYXJzZUZsb2F0KHZlY3RvcjIueSkpIDtcblx0fVxuXG5cdHRvb2xzLlZlY3Rvci5TY2FsYXIgPSBmdW5jdGlvbih2ZWN0b3IxLHNjYWwpIHtcblx0XHRyZXR1cm4gbmV3IHRvb2xzLlZlY3RvcihwYXJzZUZsb2F0KHZlY3RvcjEueCkgKiBzY2FsLCBwYXJzZUZsb2F0KHZlY3RvcjEueSkgKiBzY2FsKSA7XG5cdH1cblxuXHR0b29scy5WZWN0b3IucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHZlY3RvclRvQWRkKSB7XG5cdFx0dGhpcy54ID0gdmVjdG9yVG9BZGQueCArIHRoaXMueCA7XG5cdFx0dGhpcy55ID0gdmVjdG9yVG9BZGQueSArIHRoaXMueSA7XG5cdH1cblxuXHR0b29scy5WZWN0b3IucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uKHZlY3RvclRvQWRkKSB7XG5cdFx0dGhpcy54ID0gdmVjdG9yVG9BZGQueCAtIHRoaXMueCA7XG5cdFx0dGhpcy55ID0gdmVjdG9yVG9BZGQueSAtIHRoaXMueSA7XG5cdH1cblxuXHR0b29scy5WZWN0b3IucHJvdG90eXBlLmRvdCA9IGZ1bmN0aW9uKHZlY18pIHtcblx0XHR0aGlzLnggPSB2ZWNfLnggKiB0aGlzLnggOyBcblx0XHR0aGlzLnkgPSB2ZWNfLnkgKiB0aGlzLnkgO1xuXHR9XG5cblx0dG9vbHMuVmVjdG9yLnByb3RvdHlwZS5zY2FsYXIgPSBmdW5jdGlvbihzY2FsKSB7XG5cdFx0dGhpcy54ID0gc2NhbCAqIHRoaXMueCA7XG5cdFx0dGhpcy55ID0gc2NhbCAqIHRoaXMueSA7XG5cdH1cblxuXHR0b29scy5WZWN0b3IucHJvdG90eXBlLmR1cGxpY2F0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBuZXcgdG9vbHMuVmVjdG9yKHRoaXMueCx0aGlzLnkpIDtcblx0fVxuXG5cdHRvb2xzLlZlY3Rvci5wcm90b3R5cGUubGVuZ3RoU3F1YXJlID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICh0aGlzLngqdGhpcy54ICsgdGhpcy55KnRoaXMueSkgO1xuXHR9XG5cblx0Ly9pZiBwb3NzaWJsZSwgcHJlZmVhdHIgbGVuZ3RoU3F1YXJlIHdobyBpcyBmYXN0ZXJcblx0dG9vbHMuVmVjdG9yLnByb3RvdHlwZS5sZW5ndGggPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCp0aGlzLnggKyB0aGlzLnkqdGhpcy55KSA7XG5cdH1cblxuXHR0b29scy5WZWN0b3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMueCtcInhcIit0aGlzLnk7XG5cdH1cbn0pKG9yZy5kYnl6ZXJvLnRvb2xzLCBkb2N1bWVudCk7IiwiLyoqXG4gKlxuICogb3JnLmRieXplcm8udG9vbHMuRXZlbnRNYW5hZ2VyIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA5LzAxXG4gKiBAZGVzY3JpcHRpb24gOiBFdmVudCBNYW5hZ2VyXG4gKlxuICovXG5cbnZhciBvcmcgPSBvcmcgfHwge30gO1xub3JnLmRieXplcm8gPSBvcmcuZGJ5emVybyB8fCB7fSA7XG5vcmcuZGJ5emVyby50b29scyA9IG9yZy5kYnl6ZXJvLnRvb2xzIHx8IHt9IDtcblxuKGZ1bmN0aW9uKHRvb2xzLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXHR0b29scyA9IG9yZy5kYnl6ZXJvLnRvb2xzIHx8IHt9IDtcblxuXHR0b29scy5FdmVudE1hbmFnZXIgPSB7fSA7XG5cdHRvb2xzLkV2ZW50TWFuYWdlci5ldmVudHMgPSB7fSA7XG5cblx0dG9vbHMuRXZlbnRNYW5hZ2VyLnJlZ2lzdGVyID0gZnVuY3Rpb24oZXZlbnROYW1lLGV2ZW50RnVuY3Rpb24pIHtcblx0XHR0b29scy5FdmVudE1hbmFnZXIuZXZlbnRzW2V2ZW50TmFtZV0gPSB0b29scy5FdmVudE1hbmFnZXIuZXZlbnRzW2V2ZW50TmFtZV0gfHwge30gO1xuXHRcdGlmKHRvb2xzLkV2ZW50TWFuYWdlci5ldmVudHNbZXZlbnROYW1lXS5saXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dG9vbHMuRXZlbnRNYW5hZ2VyLmV2ZW50c1tldmVudE5hbWVdLmxpc3RlbmVycyA9IFtdIDtcblx0XHR9XG5cdFx0dG9vbHMuRXZlbnRNYW5hZ2VyLmV2ZW50c1tldmVudE5hbWVdLmxpc3RlbmVycy5wdXNoKGV2ZW50RnVuY3Rpb24pIDtcblx0fVxuXG5cdHRvb2xzLkV2ZW50TWFuYWdlci51bnJlZ2lzdGVyID0gZnVuY3Rpb24oZXZlbnROYW1lKSB7XG5cdFx0ZGVsZXRlIHRvb2xzLkV2ZW50TWFuYWdlci5ldmVudHNbZXZlbnROYW1lXSA7XG5cdH1cblxuXHR0b29scy5FdmVudE1hbmFnZXIudW5yZWdpc3RlckFsbCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRvb2xzLkV2ZW50TWFuYWdlci5ldmVudHMgPSB7fSA7XG5cdH1cblxuXHR0b29scy5FdmVudE1hbmFnZXIuZmlyZSA9IGZ1bmN0aW9uKGV2ZW50TmFtZSxlKSB7XG5cdFx0aWYodG9vbHMuRXZlbnRNYW5hZ2VyLmV2ZW50c1tldmVudE5hbWVdID09IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly9vcmcuZGJ5emVyby50b29scy5Mb2cuZXJyb3IoJ2V2ZW50ICcgKyBldmVudE5hbWUgKyAnIGRvIG5vdCBleGlzdHMuJykgO1xuXHRcdFx0cmV0dXJuIDtcblx0XHR9XG5cdFx0dmFyIGxpc3RMaXN0ZW5lciA9IHRvb2xzLkV2ZW50TWFuYWdlci5ldmVudHNbZXZlbnROYW1lXS5saXN0ZW5lcnMgO1xuXHRcdGZvcih2YXIgaT0wO2k8bGlzdExpc3RlbmVyLmxlbmd0aDtpKyspIHtcblx0XHRpZihsaXN0TGlzdGVuZXJbaV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdG9yZy5kYnl6ZXJvLnRvb2xzLkxvZy5lcnJvcignZnVuY3Rpb24gYWRkZWQgdG8gbGlzdGVuZXIgJysgZXZlbnROYW1lICsgJyBpcyB1bmRlZmluZWQnKSA7XG5cdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdFx0bGlzdExpc3RlbmVyW2ldKGUpIDtcblx0XHR9XG5cdH1cbn0pKG9yZy5kYnl6ZXJvLnRvb2xzLCBkb2N1bWVudCk7IiwiLyoqXG4gKlxuICogb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzEwLzI5XG4gKiBAZGVzY3JpcHRpb24gOiBIYW5kbGVyIGtleWJvYXJkIGV2ZW50XG4gKiBcbiAqL1xuXG52YXIgb3JnID0gb3JnIHx8IHt9IDtcbm9yZy5kYnl6ZXJvID0gb3JnLmRieXplcm8gfHwge30gO1xub3JnLmRieXplcm8udG9vbHMgPSBvcmcuZGJ5emVyby50b29scyB8fCB7fSA7XG5cbihmdW5jdGlvbih0b29scyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblxuXHR2YXIgRXZlbnRNYW5hZ2VyID0gdG9vbHMuRXZlbnRNYW5hZ2VyO1xuXHQvKipcblx0ICogS2V5Ym9hcmQgY29uc3RydWN0b3Jcblx0ICpcblx0ICogKi9cblx0dG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyID0ge307XG5cblx0dG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmFkZE1hbmFnZWRLZXkgPSBmdW5jdGlvbihrZXkpIHtcblx0XHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIubWFuYWdlZEtleXNba2V5XSA9IHRydWU7XG5cdH1cblxuXHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIucmVtb3ZlTWFuYWdlZEtleSA9IGZ1bmN0aW9uKGtleSkge1xuXHRcdGRlbGV0ZSB0b29scy5LZXlib2FyZENvbnRyb2xsZXIubWFuYWdlZEtleXNba2V5XTtcblx0fVxuXG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkID0gZnVuY3Rpb24oZSkge1xuXHRcdHZhciBldnRvYmogPSB3aW5kb3cuZXZlbnQ/IGV2ZW50IDogZTtcblx0XHR2YXIga2V5ID0gZXZ0b2JqLmtleUNvZGU7XG5cdFx0aWYoa2V5IGluIHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5tYW5hZ2VkS2V5cyl7XG5cdFx0XHRpZih0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5U3RhdHVzW2tleV0gPT09IHRydWUpIHJldHVybjtcblx0XHRcdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlTdGF0dXNba2V5XSA9IHRydWU7XG5cdFx0XHQvL2NvbnNvbGUubG9nKCdwcmVzc2VkICcra2V5KTtcblx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVByZXNzZWQuXCIra2V5KTtcblx0XHR9XG5cdH1cblxuXHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UmVsZWFzZWQgPSBmdW5jdGlvbihlKSB7XG5cdFx0dmFyIGV2dG9iaiA9IHdpbmRvdy5ldmVudD8gZXZlbnQgOiBlO1xuXHRcdHZhciBrZXkgPSBldnRvYmoua2V5Q29kZTtcblx0XHRpZihrZXkgaW4gdG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLm1hbmFnZWRLZXlzKXtcblx0XHRcdGlmKHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlTdGF0dXNba2V5XSA9PT0gZmFsc2UpIHJldHVybjtcblx0XHRcdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlTdGF0dXNba2V5XSA9IGZhbHNlO1xuXHRcdFx0Ly9jb25zb2xlLmxvZygncmVsZWFzZWQgJytrZXkpO1xuXHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UmVsZWFzZWQuXCIra2V5KTtcblx0XHR9XG5cdH1cblxuXHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5U3RhdHVzID0ge307XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5tYW5hZ2VkS2V5cyA9IHt9O1xuXHRcblx0dG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleXMgPSB7fTtcblx0dG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuRU5URVIgPSAxMztcblx0dG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuU1BBQ0UgPSAzMjtcblx0dG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfTEVGVCA9IDM3O1xuXHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5cy5BUlJPV19SSUdIVCA9IDM5O1xuXHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5cy5BUlJPV19ET1dOID0gNDA7XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlzLkFSUk9XX1VQID0gMzg7XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlzLm4xID0gNDk7XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlzLm4yID0gNTA7XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlzLm4zID0gNTE7XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlzLm40ID0gNTI7XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlzLm41ID0gNTM7XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlzLlggPSA4ODtcblxuXHRkb2N1bWVudC5vbmtleWRvd24gID0gdG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVByZXNzZWQ7XG5cdGRvY3VtZW50Lm9ua2V5dXAgICAgPSB0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UmVsZWFzZWQ7XG5cbiAgIFxufSkob3JnLmRieXplcm8udG9vbHMsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBvcmcuZGJ5emVyby5kZWltb3MuQ29uZmlnIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA4LzA5XG4gKiBAZGVzY3JpcHRpb24gOiBDb25maWcgb2YgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogKi9cblxudmFyIG9yZyA9IG9yZyB8fCB7fSA7XG5vcmcuZGJ5emVybyA9IG9yZy5kYnl6ZXJvIHx8IHt9IDtcbm9yZy5kYnl6ZXJvLmRlaW1vcyA9IG9yZy5kYnl6ZXJvLmRlaW1vcyB8fCB7fSA7XG5cbihmdW5jdGlvbihkZWltb3MsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cdGRlaW1vcy5Db25maWcgPSB7fTtcblx0ZGVpbW9zLkNvbmZpZy5GUFMgPSA2MDtcblx0ZGVpbW9zLkNvbmZpZy5tb2RlID0gXCJkZWJ1Z1wiLFxuXHRkZWltb3MuQ29uZmlnLm1lc3NhZ2VMZXZlbCA9IFwidmVyYm9zZVwiLFxuXHRkZWltb3MuQ29uZmlnLkZQUyA9IDYwO1xuXHRkZWltb3MuQ29uZmlnLkdBTUVfU1BFRUQgPSAzMztcblx0ZGVpbW9zLkNvbmZpZy5TUVVBUkVfQVVUSE9SSVRZID0gMTAwKjEwMDtcblx0ZGVpbW9zLkNvbmZpZy5ERUxUQV9TRVJWRVJfU1lOQyA9IDUwMDA7XG5cdGRlaW1vcy5Db25maWcuc2hvd093bk1pcnJvciA9IGZhbHNlO1xuXG5cdC8qKioqKipcblx0ICogVUlcblx0ICoqKioqL1xuXHRkZWltb3MuQ29uZmlnLnVpID0ge307XG5cblx0ZGVpbW9zLkNvbmZpZy51aS5jaGF0RG9tSWQgPSAnb3JnLmRieXplcm8uZGVpbW9zLm1lc3NhZ2VBcmVhJztcblx0ZGVpbW9zLkNvbmZpZy51aS5kaXNjb25uZWN0RG9tSWQgPSAnb3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5kaXNjb25uZWN0JztcblxuXHRkZWltb3MuQ29uZmlnLnVpLmluZGljYXRpb24gPSB7fTtcblx0ZGVpbW9zLkNvbmZpZy51aS5pbmRpY2F0aW9uLmxhZyA9ICdvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLmluZGljYXRvckxhZyc7XG5cdGRlaW1vcy5Db25maWcudWkuaW5kaWNhdGlvbi5mcHMgPSAnb3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5pbmRpY2F0b3JGcHMnO1xuXHRkZWltb3MuQ29uZmlnLnVpLmluZGljYXRpb24uY29ubmVjdGlvblN0YXR1cyA9ICdvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLmluZGljYXRvckNvbm5lY3RlZCc7XG5cdGRlaW1vcy5Db25maWcudWkuaW5kaWNhdGlvbi5zZXJ2ZXJTdGF0dXMgPSAnb3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5pbmRpY2F0b3JTZXJ2ZXInO1xuXG5cdGRlaW1vcy5Db25maWcudWkubG9naW4gPSB7fTtcblx0ZGVpbW9zLkNvbmZpZy51aS5sb2dpbi5mb3JtRG9tSWQgPSAnb3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5sb2dpbkZvcm0nO1xuXHRkZWltb3MuQ29uZmlnLnVpLmxvZ2luLnNlY3Rpb25Eb21JZCA9ICdvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLnNlY3Rpb25Mb2dpbic7XG5cdGRlaW1vcy5Db25maWcudWkubG9naW4uaW5wdXRMb2dpbkRvbUlkID0gJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAubG9naW5JbnB1dCc7XG5cdGRlaW1vcy5Db25maWcudWkubG9naW4uaW5wdXRQYXNzd29yZERvbUlkID0gJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAucGFzc3dvcmRJbnB1dCc7XG5cblx0ZGVpbW9zLkNvbmZpZy51aS5jaG9vc2VBdmF0YXIgPSB7fTtcblx0ZGVpbW9zLkNvbmZpZy51aS5jaG9vc2VBdmF0YXIuc2VjdGlvbkRvbUlkID0gJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAuc2VjdGlvbkNob29zZUF2YXRhcic7XG5cdGRlaW1vcy5Db25maWcudWkuY2hvb3NlQXZhdGFyLmZvcm1Eb21JZCA9ICdvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLmZvcm1DaG9vc2VBdmF0YXInO1xuXHRkZWltb3MuQ29uZmlnLnVpLmNob29zZUF2YXRhci5hdmF0YXJMaXN0RG9tSWQgPSAnb3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5hdmF0YXJMaXN0Jztcblx0ZGVpbW9zLkNvbmZpZy56b25lID0ge307XG5cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIG9yZy5kYnl6ZXJvLmRlaW1vcy5FbmdpbmUgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTMvMDgvMDRcbiAqIEBkZXNjcmlwdGlvbiA6IEVuZ2luZSBjbGFzcyBtYW5hZ2UgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICoqL1xuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBvcmcuZGJ5emVyby5kZWltb3MuRW5naW5lIGluaXRpYWxpemVyXG5cdCAqIFxuXHQgKiBAcGFyYW0gc3RyaW5nIHdzVXJsIFVSTCBvZiB3ZWJzb2NrZXQgc2VydmVyXG5cdCAqIEBwYXJhbSBzdHJpbmcgd3NQb3J0IHBvcnQgb2Ygd2Vic29ja2V0IHNlcnZlclxuXHQgKiBAcGFyYW0gRW5naW5lTW9kZSBNb2RlIG9mIHRoZSBjbGllbnQsIGNhbiBiZSBFbmdpbmVNb2RlLkRFQlVHIHRvIHNob3cgbG9nc1xuXHQgKlxuXHQgKiAqL1xuXG5cdHZhciBLZXlib2FyZENvbnRyb2xsZXIgPSBvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXI7XG5cdHZhciBFdmVudE1hbmFnZXIgPSBvcmcuZGJ5emVyby50b29scy5FdmVudE1hbmFnZXI7XG5cblx0Ly91c2VkIHRvIHRyYW5zbGF0aW9uXG5cdHZhciBfdCA9IG51bGw7XG5cblx0ZGVpbW9zLkVuZ2luZSA9IHtcblx0XHRydW5uaW5nIDogZmFsc2UsXG5cdFx0aW5pdCA6IGZ1bmN0aW9uIChjb25maWcpe1xuXHRcdFx0Ly9tYWtpbmcgVUlcblx0XHRcdGRlaW1vcy5FbmdpbmUudWkgPSBuZXcgZGVpbW9zLnJlbmRlci5VSSgpIDtcblx0XHRcdGRlaW1vcy5FbmdpbmUubGFzdFVwZGF0ZSA9IG51bGw7XG5cdFx0XHRkZWltb3MuRW5naW5lLmxhc3RTeW5jID0gbnVsbDtcblx0XHRcdGRlaW1vcy5FbmdpbmUubmVlZFN5bmMgPSBmYWxzZTtcblx0XHRcdGRlaW1vcy5FbmdpbmUuaXRlbVRlbXBsYXRlcyA9IHt9OyBcblx0XHRcdGRlaW1vcy5FbmdpbmUucGFzdEZQUyA9IFtdO1xuXG5cdFx0XHQvL3N0b2NraW5nIGFzc2V0IGFjY2Vzc1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hc3NldFVSTCA9IGNvbmZpZy5zZXJ2ZXJBc3NldFVSTDtcblx0XHRcdGRlaW1vcy5FbmdpbmUuZ2FtZUFyZWEgPSBjb25maWcuZ2FtZUFyZWE7XG5cblx0XHRcdF90ID0gZGVpbW9zLkVuZ2luZS5fdCA9IGRlaW1vcy5uZXR3b3JrLk1lc3NhZ2UuQ09ERVtkZWltb3MuQ29uZmlnLm1lc3NhZ2VMZXZlbF07XG5cblx0XHRcdC8vc2V0IHJ1bmxldmVsXG5cdFx0XHRkZWltb3MuRW5naW5lLm1vZGUgPSAoIFxuXHRcdFx0XHRkZWltb3MuQ29uZmlnLm1vZGUgPT0gXCJkZWJ1Z1wiID8gXG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUuTW9kZS5ERUJVRyBcblx0XHRcdFx0OiBkZWltb3MuRW5naW5lLk1vZGUuUFJPRCBcblx0XHRcdCkgO1xuXG5cdFx0XHQvL21ha2luZyBuZXR3b3JrIG1hbmFnZXJcblx0XHRcdGRlaW1vcy5FbmdpbmUubmV0d29ya01hbmFnZXIgPSBuZXcgZGVpbW9zLm5ldHdvcmsuTWFuYWdlcigpO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5uZXR3b3JrTWFuYWdlci5pbml0KCk7XG5cblx0XHRcdC8vbWFraW5nIG1haW4gbG9vcFxuXHRcdFx0ZGVpbW9zLkVuZ2luZS5sb29wID0gbmV3IG9yZy5kYnl6ZXJvLnRvb2xzLkxvb3AoJ21haW5fbG9vcCcscGFyc2VJbnQoMTAwMC9kZWltb3MuQ29uZmlnLkZQUykpIDtcblxuXG5cdFx0XHQvL3NldHRpbmcgd2Vic29ja2V0IHNlcnZlclxuXHRcdFx0ZGVpbW9zLkVuZ2luZS53c1VybCA9IGNvbmZpZy5zZXJ2ZXJVcmw7XG5cdFx0XHRkZWltb3MuRW5naW5lLndzUG9ydCA9IGNvbmZpZy5zZXJ2ZXJQb3J0IDtcblx0XHRcdGRlaW1vcy5FbmdpbmUud3NDbGllbnQgPSBuZXcgZGVpbW9zLm5ldHdvcmsuV2Vic29ja2V0Q2xpZW50KGRlaW1vcy5FbmdpbmUud3NVcmwsZGVpbW9zLkVuZ2luZS53c1BvcnQsZGVpbW9zLkVuZ2luZS5tb2RlKTtcblxuXHRcdFx0Ly9tYWtpbmcgc2NlbmVcblx0XHRcdGRlaW1vcy5FbmdpbmUuc2NlbmUgPSBuZXcgZGVpbW9zLnJlbmRlci5TY2VuZSgpO1xuXG5cdFx0XHRiaW5kRW5naW5lRXZlbnQoKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cblx0XHRzdGFydDogZnVuY3Rpb24oKXtcblx0XHRcdGRlaW1vcy5FbmdpbmUud3NDbGllbnQuY29ubmVjdCgpIDtcblx0XHR9LFxuXG5cdFx0c3RvcDogZnVuY3Rpb24gKCl7XG5cdFx0XHRkZWltb3MuRW5naW5lLmxvb3Auc3RvcCgpIDtcblx0XHR9LFxuXG5cdFx0a2V5SGFuZGxlclVwOiBmdW5jdGlvbihlKXtcblx0XHRcdGV2dG9iaiA9IHdpbmRvdy5ldmVudD8gZXZlbnQgOiBlXG5cdFx0XHRrZXlDb2RlID0gZXZ0b2JqLmtleUNvZGUgO1xuXHRcdH0sXG5cblx0XHRrZXlIYW5kbGVyRG93bjogZnVuY3Rpb24oZSl7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIE1BSU4gR0FNRSBMT09QXG5cdFx0ICovXG5cdFx0dXBkYXRlOiBmdW5jdGlvbigpe1xuXG5cdFx0XHQvL3RpbWUgdGhpbmdzXG5cdFx0XHRpZihkZWltb3MuRW5naW5lLmxhc3RVcGRhdGUgPT09IG51bGwpXG5cdFx0XHR7XG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUubGFzdFVwZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdFx0dmFyIGR0ID0gbm93IC0gZGVpbW9zLkVuZ2luZS5sYXN0VXBkYXRlO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5zY2VuZS51cGRhdGUoZHQsbm93KSA7XG5cdFx0XHRkZWltb3MuRW5naW5lLmxhc3RVcGRhdGUgKz0gZHQ7XG5cblx0XHRcdC8vc3luYyB0aGluZ3Ncblx0XHRcdGlmKGRlaW1vcy5FbmdpbmUubGFzdFN5bmMgPT09IG51bGwpXG5cdFx0XHR7XG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUubGFzdFN5bmMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHRcdH1cblx0XHRcdGlmKGRlaW1vcy5FbmdpbmUubGFzdFN5bmMgKyBkZWltb3MuQ29uZmlnLkRFTFRBX1NFUlZFUl9TWU5DIDwgbm93KVxuXHRcdFx0e1xuXHRcdFx0XHRpZihkZWltb3MuRW5naW5lLmF2YXRhciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zZW5kU3luY1wiKTtcblx0XHRcdFx0XHRkZWltb3MuRW5naW5lLmxhc3RTeW5jID0gbm93O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGluaXRHYW1lQXJlYTogZnVuY3Rpb24oZSkge1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS56b25lID0gbmV3IGRlaW1vcy5lbGVtZW50LlpvbmUoXG5cdFx0XHRcdGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9HQU1FX0FSRUFfTkFNRV0sXG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUuZ2FtZUFyZWEsXG5cdFx0XHRcdGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9HQU1FX0FSRUFfV0lEVEhdLFxuXHRcdFx0XHRlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfR0FNRV9BUkVBX0hFSUdIVF0sXG5cdFx0XHRcdGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9HQU1FX0FSRUFfQkxPQ0tTXVxuXHRcdFx0KTtcblx0XHR9LFxuXG5cdFx0c3RhcnRHYW1lOiBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgc2tpblx0XHRcdFx0XHQ9IGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9DSEFSXVtfdC5NRVNTQUdFX1NLSU5dO1xuXHRcdFx0dmFyIGlkXHRcdFx0XHRcdFx0PSBlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuTUVTU0FHRV9FTEVNRU5UX0lEXTtcblx0XHRcdHZhciBuYW1lXHRcdFx0XHRcdD0gZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0NIQVJdW190Lk5BTUVdO1xuXHRcdFx0dmFyIHNpemVcdFx0XHRcdFx0PSBlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuTUVTU0FHRV9TSVpFXTtcblx0XHRcdHZhciBkZWx0YXNob3dcdFx0XHRcdD0gZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0NIQVJdW190Lk1FU1NBR0VfREVMVEFTSE9XXTtcblx0XHRcdHZhciBwb3NpdGlvblx0XHRcdFx0PSBlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuTUVTU0FHRV9QT1NJVElPTl07XG5cdFx0XHR2YXIgbW92ZV9zcGVlZFx0XHRcdFx0PSBlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuTUVTU0FHRV9NT1ZFX1NQRUVEXTtcblx0XHRcdHZhciBqdW1wX3NwZWVkXHRcdFx0XHQ9IGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9DSEFSXVtfdC5NRVNTQUdFX0pVTVBfU1BFRURdO1xuXHRcdFx0dmFyIGl0ZW1fc2xvdF9oZWFkXHRcdFx0PSBlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuSVRFTV9TTE9UX0hFQURdO1xuXHRcdFx0dmFyIGl0ZW1fc2xvdF9mb290XHRcdFx0PSBlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuSVRFTV9TTE9UX0ZPT1RdO1xuXHRcdFx0dmFyIGl0ZW1fc2xvdF9jaGVzdFx0XHRcdD0gZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0NIQVJdW190LklURU1fU0xPVF9DSEVTVF07XG5cdFx0XHR2YXIgaXRlbV9zbG90X2xlZnRfaGFuZFx0XHQ9IGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9DSEFSXVtfdC5JVEVNX1NMT1RfTEVGVF9IQU5EXTtcblx0XHRcdHZhciBpdGVtX3Nsb3RfcmlnaHRfaGFuZFx0PSBlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuSVRFTV9TTE9UX1JJR0hUX0hBTkRdO1xuXHRcdFx0dmFyIG9yaWVudGVkXHRcdFx0XHQ9IGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9DSEFSXVtfdC5NRVNTQUdFX0FOSU1BVElPTl1bX3QuTUVTU0FHRV9ESVJFQ1RJT05dO1xuXHRcdFx0Ly9tYWtlIGF2YXRhclxuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIgPSBuZXcgZGVpbW9zLmVsZW1lbnQuQXZhdGFyKG5hbWUsXG5cdFx0XHRcdG5ldyBvcmcuZGJ5emVyby50b29scy5WZWN0b3IoXG5cdFx0XHRcdFx0cGFyc2VJbnQocG9zaXRpb24ueCksXG5cdFx0XHRcdFx0cGFyc2VJbnQocG9zaXRpb24ueSlcblx0XHRcdFx0KSxcblx0XHRcdFx0Ly9zaXplIGZyb20gc2VydmVyIGJlY2F1c2UgaXQncyBuZWVkZWQgZm9yIGNvbGxpc2lvbnNcblx0XHRcdFx0bmV3IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3Rvcihcblx0XHRcdFx0XHRwYXJzZUludChzaXplLngpLFxuXHRcdFx0XHRcdHBhcnNlSW50KHNpemUueSlcblx0XHRcdFx0KSxcblx0XHRcdFx0aWQsXG5cdFx0XHRcdGRlbHRhc2hvdyxcblx0XHRcdFx0ZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0NIQVJdW190Lk1FU1NBR0VfTUFTU11cblx0XHRcdCk7XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5tYXhIUCA9IGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9DSEFSXVtfdC5NRVNTQUdFX0hQXTtcblx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLkhQID0gZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0NIQVJdW190Lk1FU1NBR0VfQ1VSUkVOVF9IUF07XG5cblx0XHRcdGlmKHBhcnNlSW50KGl0ZW1fc2xvdF9oZWFkKSA+IDApXG5cdFx0XHR7XG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUuc3RvcmVJdGVtRnJvbVNlcnZlcihlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfSVRFTVNdW190LklURU1fU0xPVF9IRUFEXSk7XG5cdFx0XHR9XG5cdFx0XHRpZihwYXJzZUludChpdGVtX3Nsb3RfZm9vdCkgPiAwKVxuXHRcdFx0e1xuXHRcdFx0XHRkZWltb3MuRW5naW5lLnN0b3JlSXRlbUZyb21TZXJ2ZXIoZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0lURU1TXVtfdC5JVEVNX1NMT1RfRk9PVF0pO1xuXHRcdFx0fVxuXHRcdFx0aWYocGFyc2VJbnQoaXRlbV9zbG90X2NoZXN0KSA+IDApXG5cdFx0XHR7XG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUuc3RvcmVJdGVtRnJvbVNlcnZlcihlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfSVRFTVNdW190LklURU1fU0xPVF9DSEVTVF0pO1xuXHRcdFx0fVxuXHRcdFx0aWYocGFyc2VJbnQoaXRlbV9zbG90X2xlZnRfaGFuZCkgPiAwKVxuXHRcdFx0e1xuXHRcdFx0XHRkZWltb3MuRW5naW5lLnN0b3JlSXRlbUZyb21TZXJ2ZXIoZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0lURU1TXVtfdC5JVEVNX1NMT1RfTEVGVF9IQU5EXSk7XG5cdFx0XHR9XG5cdFx0XHRpZihwYXJzZUludChpdGVtX3Nsb3RfcmlnaHRfaGFuZCkgPiAwKVxuXHRcdFx0e1xuXHRcdFx0XHRkZWltb3MuRW5naW5lLnN0b3JlSXRlbUZyb21TZXJ2ZXIoZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0lURU1TXVtfdC5JVEVNX1NMT1RfUklHSFRfSEFORF0pO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5tb3ZlX3NwZWVkID0gbW92ZV9zcGVlZDtcblx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLmp1bXBfc3BlZWQgPSBqdW1wX3NwZWVkO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIuaXRlbV9zbG90X2hlYWQgPSBpdGVtX3Nsb3RfaGVhZDtcblx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLml0ZW1fc2xvdF9mb290ID0gaXRlbV9zbG90X2Zvb3Q7XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5pdGVtX3Nsb3RfY2hlc3QgPSBpdGVtX3Nsb3RfY2hlc3Q7XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5pdGVtX3Nsb3RfbGVmdF9oYW5kID0gaXRlbV9zbG90X2xlZnRfaGFuZDtcblx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLml0ZW1fc2xvdF9yaWdodF9oYW5kID0gaXRlbV9zbG90X3JpZ2h0X2hhbmQ7XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5vcmllbnRlZCA9IG9yaWVudGVkO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIuc2tpbiA9IHNraW47XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5pbml0KCk7XG5cdFx0XHRiaW5kR2FtZUV2ZW50S2V5KCkgO1xuXG5cdFx0XHQvL3N0YXJ0aW5nXG5cdFx0XHRkZWltb3MuRW5naW5lLnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5zY2VuZS5kYXRhVG9QYXJzZSA9IGVbX3QuTUVTU0FHRV1bX3QuQUNUSU9OX1NZTkNdO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5sb29wLnN0YXJ0KGRlaW1vcy5FbmdpbmUudXBkYXRlLmJpbmQoZGVpbW9zLkVuZ2luZSkpO1xuXHRcdH0sXG5cdFx0c3RvcEdhbWUgOiBmdW5jdGlvbigpIHtcblx0XHRcdGRlaW1vcy5FbmdpbmUucnVubmluZyA9IGZhbHNlO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5sb29wLnN0b3AoKSA7XG5cdFx0XHR1bmJpbmRHYW1lRXZlbnRLZXkoKSA7XG5cdFx0fSxcblxuXHRcdGdldEl0ZW1UZW1wbGF0ZSA6IGZ1bmN0aW9uKGl0ZW1JZCwgY2FsbGJhY2spIHtcblx0XHRcdC8vaWYgbm90IHlldCBnZXQsIHdlIGFzayBmb3IgaXQsIGVsc2UsIGxvYWQgdGhlIGNhbGxiYWNrXG5cdFx0XHRpZihkZWltb3MuRW5naW5lLml0ZW1UZW1wbGF0ZXNbaXRlbUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUubmV0d29ya01hbmFnZXIuYXNrSXRlbVRlbXBsYXRlKGl0ZW1JZCk7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLkVuZ2luZS5uZXdJdGVtU3RvcmVkLicraXRlbUlkLGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLkVuZ2luZS5uZXdJdGVtU3RvcmVkLicraXRlbUlkKTtcblx0XHRcdFx0XHRjYWxsYmFjayhpdGVtKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjYWxsYmFjayhkZWltb3MuRW5naW5lLml0ZW1UZW1wbGF0ZXNbaXRlbUlkXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly9wcml2YXRlIGZ1bmN0aW9uXG5cdHZhciB1bmJpbmRFbmdpbmVFdmVudCA9IGZ1bmN0aW9uKCl7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmdhbWVTdGFydGVkJyk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmNvbm5lY3RlZCcpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5kaXNjb25uZWN0ZWQnKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsubG9nZ291dCcpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MucmVuZGVyLnBhcnNlU2NlbmUnKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsubG9nZ2VkJykgO1xuXHR9XG5cblxuXHR2YXIgYmluZEVuZ2luZUV2ZW50ID0gZnVuY3Rpb24oKXtcblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmNvbm5lY3RlZCcsZnVuY3Rpb24oKSB7XG5cdFx0XHQvL2ZvciBub3cgd2UgcmVzdGFydCBsb29wIHdoZW4gaXQncyBuZWVkZWRcblx0XHRcdC8vIGRlaW1vcy5FbmdpbmUubG9vcC5zdGFydChkZWltb3MuRW5naW5lLnVwZGF0ZS5iaW5kKGRlaW1vcy5FbmdpbmUpKSA7XG5cdFx0fSk7XG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmdhbWVTdGFydGVkJyxkZWltb3MuRW5naW5lLnN0YXJ0R2FtZSk7XG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MucmVuZGVyLnBhcnNlU2NlbmUnLGRlaW1vcy5FbmdpbmUuc2NlbmUucGFyc2VEYXRhLmJpbmQoZGVpbW9zLkVuZ2luZS5zY2VuZSkpO1xuXG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5kaXNjb25uZWN0ZWQnLGRlaW1vcy5FbmdpbmUuc3RvcEdhbWUpO1xuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsubG9nZ291dCcsZGVpbW9zLkVuZ2luZS5zdG9wR2FtZSk7XG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmxvZ2dlZCcsZGVpbW9zLkVuZ2luZS5pbml0R2FtZUFyZWEpIDtcblx0fVxuXG5cblx0Ly9wcml2YXRlIGZ1bmN0aW9uXG5cdHZhciB1bmJpbmRHYW1lRXZlbnRLZXkgPSBmdW5jdGlvbigpe1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UHJlc3NlZC4nK0tleWJvYXJkQ29udHJvbGxlci5rZXlzLkVOVEVSKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVByZXNzZWQuJytLZXlib2FyZENvbnRyb2xsZXIua2V5cy5TUEFDRSk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfTEVGVCk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfUklHSFQpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UHJlc3NlZC4nK0tleWJvYXJkQ29udHJvbGxlci5rZXlzLkFSUk9XX0RPV04pO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UHJlc3NlZC4nK0tleWJvYXJkQ29udHJvbGxlci5rZXlzLkFSUk9XX1VQKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVByZXNzZWQuJytLZXlib2FyZENvbnRyb2xsZXIua2V5cy5YKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVByZXNzZWQuJytLZXlib2FyZENvbnRyb2xsZXIua2V5cy5uMSk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMubjIpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UmVsZWFzZWQuJytLZXlib2FyZENvbnRyb2xsZXIua2V5cy5BUlJPV19MRUZUKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVJlbGVhc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfUklHSFQpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UmVsZWFzZWQuJytLZXlib2FyZENvbnRyb2xsZXIua2V5cy5BUlJPV19ET1dOKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5tb3ZlLmxlZnQnKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5tb3ZlLnJpZ2h0Jyk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIubW92ZS5sZWZ0LnN0b3AnKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5tb3ZlLnJpZ2h0LnN0b3AnKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5qdW1wJyk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIuc3BlYWsnKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5zcGVhay5zdG9wJyk7XG5cblx0XHQvKipcblx0XHQgKiBGb3IgVGVzdFxuXHRcdCAqL1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MudGVzdC5wb3BpdGVtJyk7XG5cdH1cblxuXG5cdC8vcHJpdmF0ZSBmdW5jdGlvblxuXHR2YXIgYmluZEdhbWVFdmVudEtleSA9IGZ1bmN0aW9uKCl7XG5cdFx0Ly9MRUZUXG5cdFx0S2V5Ym9hcmRDb250cm9sbGVyLmFkZE1hbmFnZWRLZXkoS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuRU5URVIpO1xuXHRcdEtleWJvYXJkQ29udHJvbGxlci5hZGRNYW5hZ2VkS2V5KEtleWJvYXJkQ29udHJvbGxlci5rZXlzLlNQQUNFKTtcblx0XHRLZXlib2FyZENvbnRyb2xsZXIuYWRkTWFuYWdlZEtleShLZXlib2FyZENvbnRyb2xsZXIua2V5cy5BUlJPV19MRUZUKTtcblx0XHRLZXlib2FyZENvbnRyb2xsZXIuYWRkTWFuYWdlZEtleShLZXlib2FyZENvbnRyb2xsZXIua2V5cy5BUlJPV19SSUdIVCk7XG5cdFx0S2V5Ym9hcmRDb250cm9sbGVyLmFkZE1hbmFnZWRLZXkoS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfRE9XTik7XG5cdFx0S2V5Ym9hcmRDb250cm9sbGVyLmFkZE1hbmFnZWRLZXkoS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfVVApO1xuXHRcdEtleWJvYXJkQ29udHJvbGxlci5hZGRNYW5hZ2VkS2V5KEtleWJvYXJkQ29udHJvbGxlci5rZXlzLlgpO1xuXHRcdEtleWJvYXJkQ29udHJvbGxlci5hZGRNYW5hZ2VkS2V5KEtleWJvYXJkQ29udHJvbGxlci5rZXlzLm4xKTtcblx0XHRLZXlib2FyZENvbnRyb2xsZXIuYWRkTWFuYWdlZEtleShLZXlib2FyZENvbnRyb2xsZXIua2V5cy5uMik7XG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuRU5URVIsZnVuY3Rpb24oKXtcblx0XHRcdGlmKGRlaW1vcy5FbmdpbmUuYXZhdGFyLnNwZWFraW5nKSB7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5zcGVhay5zdG9wXCIseydhY3Rpb24nOidzcGVha19zdG9wJ30pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLnNwZWFrXCIseydhY3Rpb24nOidzcGVhayd9KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVByZXNzZWQuJytLZXlib2FyZENvbnRyb2xsZXIua2V5cy5BUlJPV19SSUdIVCxmdW5jdGlvbigpe1xuXHRcdFx0aWYoIWRlaW1vcy5FbmdpbmUuYXZhdGFyLnNwZWFraW5nKSB7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5tb3ZlLnJpZ2h0XCIseydhY3Rpb24nOidtb3ZlX3JpZ2h0J30pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UHJlc3NlZC4nK0tleWJvYXJkQ29udHJvbGxlci5rZXlzLkFSUk9XX0xFRlQsZnVuY3Rpb24oKXtcblx0XHRcdGlmKCFkZWltb3MuRW5naW5lLmF2YXRhci5zcGVha2luZykge1xuXHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIubW92ZS5sZWZ0XCIseydhY3Rpb24nOidtb3ZlX2xlZnQnfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvL25vdGUgOiBldmVudCBpcyBzeW5jaHJvbml6aWRlIG9uIEF2YXRhciBjbGFzcyB3aGVuIHRoZSBlbmdpbmUgcmVhbGx5IGZpbmlzaCB0aGUgbW92ZVxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVJlbGVhc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfUklHSFQsZnVuY3Rpb24oKXtcblx0XHRcdGlmKCFkZWltb3MuRW5naW5lLmF2YXRhci5zcGVha2luZykge1xuXHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIubW92ZS5yaWdodC5zdG9wXCIseydhY3Rpb24nOidtb3ZlX3JpZ2h0X3N0b3AnfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvL25vdGUgOiBldmVudCBpcyBzeW5jaHJvbml6aWRlIG9uIEF2YXRhciBjbGFzcyB3aGVuIHRoZSBlbmdpbmUgcmVhbGx5IGZpbmlzaCB0aGUgbW92ZVxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVJlbGVhc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfTEVGVCxmdW5jdGlvbigpe1xuXHRcdFx0aWYoIWRlaW1vcy5FbmdpbmUuYXZhdGFyLnNwZWFraW5nKSB7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5tb3ZlLmxlZnQuc3RvcFwiLHsnYWN0aW9uJzonbW92ZV9sZWZ0X3N0b3AnfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfRE9XTixmdW5jdGlvbigpe1xuXHRcdFx0aWYoIWRlaW1vcy5FbmdpbmUuYXZhdGFyLnNwZWFraW5nKSB7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5nby5kb3duXCIseydhY3Rpb24nOidnb19kb3duX2FjdGl2ZSd9KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVJlbGVhc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfRE9XTixmdW5jdGlvbigpe1xuXHRcdFx0aWYoIWRlaW1vcy5FbmdpbmUuYXZhdGFyLnNwZWFraW5nKSB7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5nby5kb3duLnN0b3BcIix7J2FjdGlvbic6J2dvX2Rvd25faW5hY3RpdmUnfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfVVAsZnVuY3Rpb24oKXtcblx0XHRcdGlmKCFkZWltb3MuRW5naW5lLmF2YXRhci5zcGVha2luZykge1xuXHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIuanVtcFwiLHsnYWN0aW9uJzonanVtcCd9KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVByZXNzZWQuJytLZXlib2FyZENvbnRyb2xsZXIua2V5cy5TUEFDRSxmdW5jdGlvbigpe1xuXHRcdFx0aWYoIWRlaW1vcy5FbmdpbmUuYXZhdGFyLnNwZWFraW5nKSB7XG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLmF0dGFjaygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgS2luZCBvZiBlbnVtIGZvciBkaWZmZXJlbnQgbW9kZXNcblx0ICogXG5cdCAqIERFQlVHIHNob3dzIGEgbG90IG9mIGxvZyBpbiBicm93c2VyXG5cdCAqIFBST0QgcmVtb3ZlIGxvZ3Ncblx0ICpcblx0ICogKi9cblx0ZGVpbW9zLkVuZ2luZS5Nb2RlID0ge1xuXHRcdERFQlVHIDoge3ZhbHVlOiAwLCBuYW1lOidkZWJ1Zyd9LFxuXHRcdFBST0QgOiB7dmFsdWU6IDEsIG5hbWU6J3Byb2QnfVxuXHR9XG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqIEltcG9ydGFudCA6IEFjdHVlbGxlbWVudCBkZXByZWNhdGVkIG1haXMgb24gbGUgZ2FyZGUgc2kgYmVzb2luIGVuIHJldG8gY29tcGF0XG4gKiBcbiAqIG9yZy5kYnl6ZXJvLmRlaW1vcy5yZW5kZXIuQW5pbWF0aW9uIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA4LzEwXG4gKiBAZGVzY3JpcHRpb24gOiBBbmltYXRpb24gbW9kZWxcbiAqXG4gKiAqL1xuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXG5cdGRlaW1vcy5yZW5kZXIgPSBkZWltb3MucmVuZGVyIHx8IHt9IDtcblxuXHQvKipcblx0ICogQW5pbWF0aW9uIGNvbnN0cnVjdG9yXG5cdCAqIFxuXHQgKiBAcGFyYW0gc3ByaXRlc2hlZXQgc3RyaW5nIG9mIHRoZSBhbmltYXRpb24gc3ByaXRlc2hlZXQgbGlua1xuXHQgKiBAcGFyYW0gc3BlZWQgaW50ZWdlciBkZWxheSBiZXR3ZWVuIGVhY2ggYW5pbWF0aW9uIGluIG1zXG5cdCAqXG5cdCAqICovXG5cdGRlaW1vcy5yZW5kZXIuQW5pbWF0aW9uID0ge31cblxuXHRkZWltb3MucmVuZGVyLkFuaW1hdGlvbi5UeXBlID0ge1xuXHRcdFdBTEtfUklHSFQgOiB7dmFsdWU6IDAsIHR5cGU6J3dhbGsnLCBkaXJlY3Rpb246J3JpZ2h0J30sXG5cdFx0V0FMS19MRUZUIDoge3ZhbHVlOiAxLCB0eXBlOid3YWxrJywgZGlyZWN0aW9uOidsZWZ0J30sXG5cblx0XHRKVU1QX1JJR0hUIDoge3ZhbHVlOiAyLCB0eXBlOidqdW1wJywgZGlyZWN0aW9uOidyaWdodCd9LFxuXHRcdEpVTVBfTEVGVCA6IHt2YWx1ZTogMywgdHlwZTonanVtcCcsIGRpcmVjdGlvbjonbGVmdCd9LFxuXHRcdFxuXHRcdFNFRV9SSUdIVCA6IHt2YWx1ZTogNCwgdHlwZTonc2VlJywgZGlyZWN0aW9uOidyaWdodCd9LFxuXHRcdFNFRV9MRUZUIDoge3ZhbHVlOiA1LCB0eXBlOidzZWUnLCBkaXJlY3Rpb246J2xlZnQnfSxcblx0XHRcblx0XHRGTFlfUklHSFQgOiB7dmFsdWU6IDYsIHR5cGU6J2ZseScsIGRpcmVjdGlvbjoncmlnaHQnfSxcblx0XHRGTFlfTEVGVCA6IHt2YWx1ZTogNywgdHlwZTonZmx5JywgZGlyZWN0aW9uOidsZWZ0J30sXG5cdH1cblxuXHRkZWltb3MucmVuZGVyLkFuaW1hdGlvbi5mYWN0b3J5ID0gZnVuY3Rpb24odHlwZSwgZGlyZWN0aW9uLCB2YWx1ZSkge1xuXHRcdHZhciBhbmltID0gbnVsbDtcblx0XHRmb3IodmFyIGsgaW4gYW5pbWF0aW9uKSB7XG5cdFx0XHRhbmltID0gYW5pbWF0aW9uW2tdO1xuXHRcdFx0aWYoYW5pbS52YWx1ZSA9PT0gdmFsdWUpIHJldHVybiBhbmltO1xuXHRcdFx0aWYoYW5pbS5kaXJlY3Rpb24gPT09IGRpcmVjdGlvbiAmJiBhbmltLnR5cGUgPT09IHR5cGUpIHJldHVybiBhbmltO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgRXhlY3B0aW9uKFwiQW5pbWF0aW9uIG5vdCBmaW5kLCBhcmdzOlwiK0FycmF5LnNsaWNlKGFyZ3VtZW50cykuam9pbignLCcpKTtcblx0fVxuXG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBvcmcuZGJ5emVyby5kZWltb3MucmVuZGVyLlVJIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA4LzA0XG4gKiBAZGVzY3JpcHRpb24gOiBVSSB0byBzaG93IHRoaW5ncyAhXG4gKlxuICogKi9cblxuKGZ1bmN0aW9uKGRlaW1vcyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblxuXHR2YXIgRXZlbnRNYW5hZ2VyID0gb3JnLmRieXplcm8udG9vbHMuRXZlbnRNYW5hZ2VyO1xuXG5cdGRlaW1vcy5yZW5kZXIgPSBkZWltb3MucmVuZGVyIHx8IHt9IDtcblxuXHRkZWltb3MucmVuZGVyLlVJID0gZnVuY3Rpb24oKXtcblxuXHRcdC8vSFRNTFxuXHRcdHZhciBnYW1lUG9wdXBIVE1MID0gJycrXG5cdFx0JzxzZWN0aW9uIGlkPVwib3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5tYWluXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiNlYmQzYWQ7d2lkdGg6MjAwcHg7cG9zaXRpb246Zml4ZWQ7dG9wOjBweDtsZWZ0OjBweDtib3JkZXI6MXB4IHNvbGlkICM5ZTYxMTE7Ym9yZGVyLXJhZGl1czo1cHg7ei1pbmRleDoxNTtjdXJzb3I6cG9pbnRlclwiPicrXG5cdFx0XHQnPGhlYWRlciBzdHlsZT1cIndpZHRoOjE5NHB4O2JhY2tncm91bmQtY29sb3I6I2ZlZTg5NTtoZWlnaHQ6MjBweDtmb250LWZhbWlseTpBcmlhbDtwYWRkaW5nOjNweDtmb250LXNpemU6MTVweDtib3JkZXItcmFkaXVzOjVweFwiPicrXG5cdFx0XHRcdCdEZWltb3MgLSA8c3BhbiBzdHlsZT1cImZvbnQtc3R5bGU6aXRhbGljXCI+YWxwaGE8L3NwYW4+Jytcblx0XHRcdFx0JzxkaXYgaWQ9XCJvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLm1lc3NhZ2VcIiBzdHlsZT1cInRyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAwLjI1cywgYm9yZGVyIDAuMjVzO2Zsb2F0OnJpZ2h0O2JhY2tncm91bmQtY29sb3I6I2ViZDNhZDt3aWR0aDoxM3B4O2hlaWdodDogMThweDtib3JkZXItcmlnaHQ6IDVweCAjQUY5RDdGIHNvbGlkO2N1cnNvcjpwb2ludGVyXCI+PC9kaXY+Jytcblx0XHRcdCc8L2hlYWRlcj4nK1xuXHRcdFx0JzxzZWN0aW9uIGlkPVwib3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5zZWN0aW9uTG9naW5cIiBzdHlsZT1cImRpc3BsYXk6YmxvY2tcIj4nK1xuXHRcdFx0XHQnPGZvcm0gYWN0aW9uPVwiXCIgbWV0aG9kPVwicG9zdFwiIGlkPVwib3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5sb2dpbkZvcm1cIiBuYW1lPVwib3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5sb2dpbkZvcm1cIj4nK1xuXHRcdFx0XHRcdCc8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cImxvbG9cIiBzdHlsZT1cImJvcmRlcjoxcHggc29saWQgIzMzMztiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7bWFyZ2luOjE1cHggMCAwIDE1cHg7XCIgcGxhY2Vob2xkZXI9XCIgbG9naW5cIiBpZD1cIm9yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAubG9naW5JbnB1dFwiLz4nK1xuXHRcdFx0XHRcdCc8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgdmFsdWU9XCJ0b3RvXCIgc3R5bGU9XCJib3JkZXI6MXB4IHNvbGlkICMzMzM7YmFja2dyb3VuZC1jb2xvcjojZmZmO21hcmdpbjo1cHggMCAwIDE1cHg7XCIgcGxhY2Vob2xkZXI9XCIgcGFzc3dvcmRcIiBpZD1cIm9yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAucGFzc3dvcmRJbnB1dFwiLz4nK1xuXHRcdFx0XHRcdCc8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHN0eWxlPVwiYm9yZGVyOjFweCBzb2xpZCAjMzMzO2JhY2tncm91bmQtY29sb3I6I2ZmZjttYXJnaW46NXB4IDAgMTBweCAxNXB4O2N1cnNvcjpwb2ludGVyXCIgdmFsdWU9XCIgbG9naW5cIi8+Jytcblx0XHRcdFx0JzwvZm9ybT4nK1xuXHRcdFx0Jzwvc2VjdGlvbj4nK1xuXHRcdFx0JzxzZWN0aW9uIGlkPVwib3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5zZWN0aW9uQ2hvb3NlQXZhdGFyXCIgc3R5bGU9XCJmb250LXNpemU6MTBweDtkaXNwbGF5Om5vbmVcIj4nK1xuXHRcdFx0XHQnPGZvcm0gbmFtZT1cIm9yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAuZm9ybUNob29zZUF2YXRhclwiIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCJcIiBpZD1cIm9yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAuZm9ybUNob29zZUF2YXRhclwiPicrXG5cdFx0XHRcdFx0JzxzZWxlY3QgaWQ9XCJvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLmF2YXRhckxpc3RcIiBuYW1lPVwiY2hvb3NlX2F2YXRhclwiIHN0eWxlPVwiYm9yZGVyOjFweCBzb2xpZCAjMzMzO2JhY2tncm91bmQtY29sb3I6I2ZmZjttYXJnaW46OHB4IDAgOHB4IDVweDt3aWR0aDoxMDVweFwiIHNpemU9XCI1XCI+PC9zZWxlY3Q+Jytcblx0XHRcdFx0XHQnPGlucHV0IGlkPVwiXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ2hvb3NlXCIgc3R5bGU9XCJib3JkZXI6MXB4IHNvbGlkICMzMzM7YmFja2dyb3VuZC1jb2xvcjojZmZmO21hcmdpbjoweDsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDU1cHg7IHJpZ2h0OiA0cHg7XCI+ICcrXG5cdFx0XHRcdCc8L2Zvcm0+Jytcblx0XHRcdCc8L3NlY3Rpb24+Jytcblx0XHRcdCc8aW5wdXQgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwibG9nb3V0XCIgaWQ9XCJvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLmRpc2Nvbm5lY3RcIiBzdHlsZT1cImJvcmRlcjoxcHggc29saWQgIzMzMztiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7bWFyZ2luOjRweCAwIDAgMTVweDsgcG9zaXRpb246IGFic29sdXRlO3RvcDowcHg7cmlnaHQ6MzJweDtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5Om5vbmVcIj4nK1xuXHRcdFx0Jzxmb290ZXIgc3R5bGU9XCJ3aWR0aDoxOTRweDtiYWNrZ3JvdW5kLWNvbG9yOiNGRkZBRUQ7aGVpZ2h0OjIwcHg7Zm9udC1mYW1pbHk6QXJpYWw7cGFkZGluZzozcHg7Zm9udC1zaXplOjEwcHg7Ym9yZGVyLXJhZGl1czo1cHg7bWFyZ2luLWJvdHRvbTowcHg7XCI+Jytcblx0XHRcdFx0JzxzcGFuPlNFUlZFUiA6IDxzcGFuIHN0eWxlPVwid2lkdGg6IDhweDsgaGVpZ2h0OiA4cHg7IGJhY2tncm91bmQtY29sb3I6IHJlZDsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBib3JkZXItcmFkaXVzOiA0cHg7IG1hcmdpbjogMXB4IDAgLTFweCAwO1wiIGlkPVwib3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5pbmRpY2F0b3JTZXJ2ZXJcIj48L3NwYW4+PC9zcGFuPicrXG5cdFx0XHRcdCcgfCA8c3Bhbj5DT05ORUNUSU9OIDogPHNwYW4gc3R5bGU9XCJ3aWR0aDogOHB4OyBoZWlnaHQ6IDhweDsgYmFja2dyb3VuZC1jb2xvcjogcmVkOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGJvcmRlci1yYWRpdXM6IDRweDsgbWFyZ2luOiAxcHggMCAtMXB4IDA7XCIgaWQ9XCJvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLmluZGljYXRvckNvbm5lY3RlZFwiPjwvc3Bhbj48L3NwYW4+Jytcblx0XHRcdFx0Jzxici8+Jytcblx0XHRcdFx0JzxzcGFuPnYnK2RlaW1vcy52ZXJzaW9uKycgfCAnK1xuXHRcdFx0XHQnPHNwYW4+RlBTIDogPHNwYW4gaWQ9XCJvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLmluZGljYXRvckZwc1wiPm4vYTwvc3Bhbj48L3NwYW4+IHwgJytcblx0XHRcdFx0JzxzcGFuPkxBRyA6IDxzcGFuIGlkPVwib3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5pbmRpY2F0b3JMYWdcIj5uL2E8L3NwYW4+PC9zcGFuPicrXG5cdFx0XHQnPC9mb290ZXI+Jytcblx0XHQnPC9zZWN0aW9uPic7XG5cblx0XHR2YXIgcG9wdXBDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0cG9wdXBDb250YWluZXJFbGVtZW50LmlubmVySFRNTCA9IGdhbWVQb3B1cEhUTUw7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwb3B1cENvbnRhaW5lckVsZW1lbnQpO1xuXG5cdFx0dmFyIG1lc3NhZ2VBcmVhRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cdFx0bWVzc2FnZUFyZWFFbGVtZW50LmlkID0gJ29yZy5kYnl6ZXJvLmRlaW1vcy5tZXNzYWdlQXJlYSc7XG5cdFx0bWVzc2FnZUFyZWFFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjU1LCAyMzksIDIxOSknO1xuXHRcdG1lc3NhZ2VBcmVhRWxlbWVudC5zdHlsZS53aWR0aCA9ICcwcHgnO1xuXHRcdG1lc3NhZ2VBcmVhRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnOTglJztcblx0XHRtZXNzYWdlQXJlYUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuXHRcdG1lc3NhZ2VBcmVhRWxlbWVudC5zdHlsZS50b3AgPSAnMHB4Jztcblx0XHRtZXNzYWdlQXJlYUVsZW1lbnQuc3R5bGUucmlnaHQgPSAnMHB4Jztcblx0XHRtZXNzYWdlQXJlYUVsZW1lbnQuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjY2NjJztcblx0XHRtZXNzYWdlQXJlYUVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzE0Jztcblx0XHRtZXNzYWdlQXJlYUVsZW1lbnQuc3R5bGUuZm9udEZhbWlseSA9ICdtb25vc3BhY2UnO1xuXHRcdG1lc3NhZ2VBcmVhRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9ICcxMHB4Jztcblx0XHRtZXNzYWdlQXJlYUVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnYXV0byc7XG5cdFx0bWVzc2FnZUFyZWFFbGVtZW50LnN0eWxlLm92ZXJmbG93WCA9ICdoaWRkZW4nO1xuXHRcdG1lc3NhZ2VBcmVhRWxlbWVudC5zdHlsZS5saXN0U3R5bGUgPSAnbm9uZSc7XG5cdFx0bWVzc2FnZUFyZWFFbGVtZW50LnN0eWxlLm1hcmdpbiA9ICcwJztcblx0XHRtZXNzYWdlQXJlYUVsZW1lbnQuc3R5bGUucGFkZGluZyA9ICc1cHggNXB4IDAgNXB4Jztcblx0XHRtZXNzYWdlQXJlYUVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICd3aWR0aCAwLjVzIGxpbmVhcic7XG5cdFx0bWVzc2FnZUFyZWFFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZXNzYWdlQXJlYUVsZW1lbnQpO1xuXG5cdFx0Ly9FVkVOVFNcblx0XHR2YXIgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAubWFpblwiKTtcblx0XHR2YXIgZHJhZ0VuYWJsZSA9IGZhbHNlO1xuXHRcdHZhciBvbGRYID0gbnVsbDtcblx0XHR2YXIgb2xkWSA9IG51bGw7XG5cdFx0cG9wdXAub25tb3VzZWRvd24gPSBmdW5jdGlvbihlKXtcblx0XHRcdGRyYWdFbmFibGUgPSB0cnVlO1xuXHRcdFx0b2xkWCA9IGUueDtcblx0XHRcdG9sZFkgPSBlLnk7XG5cdFx0fTtcblx0XHRkb2N1bWVudC5vbm1vdXNldXAgPSBmdW5jdGlvbihlKXtcblx0XHRcdGRyYWdFbmFibGUgPSBmYWxzZTtcblx0XHRcdG9sZFggPSBudWxsO1xuXHRcdFx0b2xkWSA9IG51bGw7XG5cdFx0fTtcblx0XHRkb2N1bWVudC5vbm1vdXNlbW92ZSA9IGZ1bmN0aW9uKGUpe1xuXHRcdFx0aWYoZHJhZ0VuYWJsZSkge1xuXHRcdFx0XHR2YXIgdHJhbnNsYXRpb24gPSBcInRyYW5zbGF0ZTNkKFwiK3BhcnNlSW50KHBvcHVwLnN0eWxlLmxlZnQuc2xpY2UoMCwtMikpIC0gKHBhcnNlSW50KG9sZFgpIC0gZS54KStcInB4LFwiICtcblx0XHRcdFx0XHRcdFx0XHRcdHBhcnNlSW50KHBvcHVwLnN0eWxlLnRvcC5zbGljZSgwLC0yKSkgLSAocGFyc2VJbnQob2xkWSkgLSBlLnkpK1wicHgsMHB4KVwiO1xuXHRcdFx0XHRwb3B1cC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2xhdGlvbjtcblx0XHRcdFx0cG9wdXAuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNsYXRpb247XG5cblx0XHRcdFx0b2xkWCA9IGUueDtcblx0XHRcdFx0b2xkWSA9IGUueTtcblx0XHRcdH1cblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5tZXNzYWdlXCIpLm9uY2xpY2sgPSBmdW5jdGlvbihlKXtcblx0XHRcdGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JnLmRieXplcm8uZGVpbW9zLm1lc3NhZ2VBcmVhXCIpLnN0eWxlLndpZHRoID09PSBcIjE5MHB4XCIpIHtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmcuZGJ5emVyby5kZWltb3MubWVzc2FnZUFyZWFcIikuc3R5bGUud2lkdGggPSBcIjBweFwiO1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmcuZGJ5emVyby5kZWltb3MubWVzc2FnZUFyZWFcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCw1MDApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmcuZGJ5emVyby5kZWltb3MubWVzc2FnZUFyZWFcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JnLmRieXplcm8uZGVpbW9zLm1lc3NhZ2VBcmVhXCIpLnN0eWxlLndpZHRoID0gXCIxOTBweFwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCwwKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5sb2dnZWQnLHRoaXMubG9nZ2VkLmJpbmQodGhpcykpIDtcblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmNvbm5lY3RlZCcsdGhpcy5jb25uZWN0ZWQuYmluZCh0aGlzKSkgO1xuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuZGlzY29ubmVjdGVkJyx0aGlzLmRpc2Nvbm5lY3RlZC5iaW5kKHRoaXMpKSA7XG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5sb2dnb3V0Jyx0aGlzLmxvZ2dvdXQuYmluZCh0aGlzKSkgO1xuXG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MuY29uc29sZS53cml0ZScsdGhpcy5hZGRtZXNzYWdlLmJpbmQodGhpcykpIDtcblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5jb25zb2xlLndyaXRlRXJyb3InLHRoaXMuYWRkbWVzc2FnZUVycm9yLmJpbmQodGhpcykpIDtcblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmF2YXRhcl9zZWxlY3RlZCcsdGhpcy5hdmF0YXJTZWxlY3RlZCkgO1xuXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVpbW9zLkNvbmZpZy51aS5sb2dpbi5mb3JtRG9tSWQpLm9uc3VibWl0ID0gdGhpcy5vbkxvZ2luLmJpbmQodGhpcykgO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlaW1vcy5Db25maWcudWkuY2hvb3NlQXZhdGFyLmZvcm1Eb21JZCkub25zdWJtaXQgPSB0aGlzLm9uQXZhdGFyQ2hvb3NlZC5iaW5kKHRoaXMpIDtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWltb3MuQ29uZmlnLnVpLmRpc2Nvbm5lY3REb21JZCkub25jbGljayA9IHRoaXMub25Mb2dvdXQuYmluZCh0aGlzKSA7XG5cblx0XHR0aGlzLm1heENvbnNvbGVSb3cgPSAxMDAgO1xuXG5cdFx0Ly9mb2N1cyBvbiBsb2dpblxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlaW1vcy5Db25maWcudWkubG9naW4uaW5wdXRMb2dpbkRvbUlkKS5mb2N1cygpO1xuXG5cdFx0X3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHR9XG5cblx0ZGVpbW9zLnJlbmRlci5VSS5wcm90b3R5cGUgPSB7XG5cdFx0Ly9zaG93IHdlIGFyZSBjb25uZWN0ZWQgb24gVUlcblx0XHRjb25uZWN0ZWQgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWltb3MuQ29uZmlnLnVpLmluZGljYXRpb24uc2VydmVyU3RhdHVzKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nIDtcblx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmNvbnNvbGUud3JpdGVcIix7XCJkZXRhaWxcIjp7XCJtZXNzYWdlXCI6XCJDb25uZWN0ZWRcIn19KTtcblx0XHR9LFxuXHRcdFxuXHRcdFxuXHRcdC8vc2hvdyB3ZSBhcmUgZGlzY29ubmVjdGVkIG9uIFVJXG5cdFx0ZGlzY29ubmVjdGVkIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVpbW9zLkNvbmZpZy51aS5pbmRpY2F0aW9uLnNlcnZlclN0YXR1cykuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCcgO1xuXHRcdFx0dGhpcy5sb2dnb3V0KCk7XG5cdFx0fSxcblx0XHRcblx0XHRcblx0XHQvL2FkZCBhIG1lc3NhZ2UgdG8gdWkgbG9nXG5cdFx0YWRkbWVzc2FnZSA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBtc2dab25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVpbW9zLkNvbmZpZy51aS5jaGF0RG9tSWQpIDtcblxuXHRcdFx0dmFyIGRvbV9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdFx0ZG9tX2VsZW0uaW5uZXJUZXh0ID0gZS5kZXRhaWwubWVzc2FnZSA7XG5cdFx0XHRcdG1zZ1pvbmUuYXBwZW5kQ2hpbGQoZG9tX2VsZW0pIDtcblx0XHRcdHRoaXMuY3JvcENvbnNvbGVSb3codGhpcy5tYXhDb25zb2xlUm93KSA7XG5cdFx0fSxcblx0XHRcblx0XHRcblx0XHQvL2FkZCBlcnJvciBtZXNzYWdlIG9uIHVpXG5cdFx0YWRkbWVzc2FnZUVycm9yIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIG1zZ1pvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWltb3MuQ29uZmlnLnVpLmNoYXREb21JZCkgO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAubWVzc2FnZScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnIDtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLm1lc3NhZ2UnKS5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZWQnIDtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAubWVzc2FnZScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWJkM2FkJyA7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLm1lc3NhZ2UnKS5zdHlsZS5ib3JkZXJDb2xvciA9ICcjQUY5RDdGJyA7XG5cdFx0XHR9LDI1MCk7XG5cblx0XHRcdHZhciBkb21fZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRcdGRvbV9lbGVtLmNsYXNzTmFtZSA9ICdlcnJvcicgO1xuXHRcdFx0ZG9tX2VsZW0uaW5uZXJUZXh0ID0gZS5kZXRhaWwubWVzc2FnZSA7XG5cdFx0XHRcdG1zZ1pvbmUuYXBwZW5kQ2hpbGQoZG9tX2VsZW0pIDtcblx0XHRcdHRoaXMuY3JvcENvbnNvbGVSb3codGhpcy5tYXhDb25zb2xlUm93KSA7XG5cdFx0fSxcblxuXG5cdFx0Ly9jbGVhciB3aGF0IEkgY2Fubm90IHNlZVxuXHRcdGNyb3BDb25zb2xlUm93IDogZnVuY3Rpb24obWF4KSB7XG5cdFx0XHR2YXIgbXNnWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlaW1vcy5Db25maWcudWkuY2hhdERvbUlkKSA7XG5cdFx0XHR3aGlsZShtc2dab25lLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpLmxlbmd0aCA+IG1heCkge1xuXHRcdFx0XHRtc2dab25lLmNoaWxkTm9kZXNbMF0ucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0XHRtc2dab25lLnNjcm9sbFRvcCA9IG1zZ1pvbmUuc2Nyb2xsSGVpZ2h0O1xuXHRcdH0sXG5cblx0XHR1cGRhdGVMYWcgOiBmdW5jdGlvbihsYWcpIHtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlaW1vcy5Db25maWcudWkuaW5kaWNhdGlvbi5sYWcpLmlubmVySFRNTCA9IGxhZysnbXMnO1xuXHRcdH0sXG5cblx0XHR1cGRhdGVGUFMgOiBmdW5jdGlvbihmcHMpIHtcblx0XHRcdHZhciBuYnJJbnRlZ3JhdGUgPSA1MDtcblx0XHRcdGRlaW1vcy5FbmdpbmUucGFzdEZQUy51bnNoaWZ0KGZwcyk7XG5cdFx0XHRkZWltb3MuRW5naW5lLnBhc3RGUFMubGVuZ3RoID0gTWF0aC5taW4oZGVpbW9zLkVuZ2luZS5wYXN0RlBTLmxlbmd0aCxuYnJJbnRlZ3JhdGUpO1xuXHRcdFx0dmFyIGludGVycG9sYXRlZEZQUyA9IHBhcnNlSW50KGRlaW1vcy5FbmdpbmUucGFzdEZQUy5yZWR1Y2UoZnVuY3Rpb24ocCxjKXtyZXR1cm4gcCtjO30pL25ickludGVncmF0ZSk7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWltb3MuQ29uZmlnLnVpLmluZGljYXRpb24uZnBzKS5pbm5lckhUTUwgPSBpbnRlcnBvbGF0ZWRGUFM7XG5cdFx0fSxcblxuXHRcdC8vc2hvdyBsaXN0IG9mIGF2YXRhclxuXHRcdGxvZ2dlZDogZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblxuXHRcdFx0Ly9jaGFuZ2luZyBzdGF0ZXNcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlaW1vcy5Db25maWcudWkuaW5kaWNhdGlvbi5zZXJ2ZXJTdGF0dXMpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbicgO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVpbW9zLkNvbmZpZy51aS5pbmRpY2F0aW9uLmNvbm5lY3Rpb25TdGF0dXMpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbicgO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVpbW9zLkNvbmZpZy51aS5sb2dpbi5zZWN0aW9uRG9tSWQpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVpbW9zLkNvbmZpZy51aS5kaXNjb25uZWN0RG9tSWQpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snIDtcblxuXHRcdFx0Ly9hZGRpbmcgYXZhdGFyIGNob2ljZVxuXHRcdFx0dmFyIGkgPSAwIDtcblx0XHRcdHZhciBhdmF0YXJzID0gZVtfdC5NRVNTQUdFXVtfdC5BVkFUQVJTXTtcblx0XHRcdGZvcihhdmF0YXIgaW4gYXZhdGFycykge1xuXHRcdFx0XHR2YXIgb3B0aW9uID0gbmV3IE9wdGlvbihhdmF0YXJzW2F2YXRhcl1bX3QuTkFNRV0sYXZhdGFyc1thdmF0YXJdW190LklEXSk7O1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWltb3MuQ29uZmlnLnVpLmNob29zZUF2YXRhci5hdmF0YXJMaXN0RG9tSWQpLmFwcGVuZENoaWxkKG9wdGlvbikgO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9XG5cblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlaW1vcy5Db25maWcudWkuY2hvb3NlQXZhdGFyLmF2YXRhckxpc3REb21JZCkuc2VsZWN0ZWRJbmRleCA9IDA7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWltb3MuQ29uZmlnLnVpLmNob29zZUF2YXRhci5zZWN0aW9uRG9tSWQpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snIDtcblx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmNvbnNvbGUud3JpdGVcIix7XCJkZXRhaWxcIjp7XCJtZXNzYWdlXCI6XCJBdXRoZW50aWNhdGVkIHRvIHRoZSBzZXJ2ZXJcIn19KTtcblx0XHR9LFxuXG5cdFx0Ly9zaG93IHdlIGFyZSBsb2dvdXRcblx0XHRsb2dnb3V0IDogZnVuY3Rpb24oZSkge1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVpbW9zLkNvbmZpZy51aS5pbmRpY2F0aW9uLmNvbm5lY3Rpb25TdGF0dXMpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnIDtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlaW1vcy5Db25maWcudWkubG9naW4uc2VjdGlvbkRvbUlkKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyA7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWltb3MuQ29uZmlnLnVpLmRpc2Nvbm5lY3REb21JZCkuc3R5bGUuZGlzcGxheSA9ICdub25lJyA7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWltb3MuQ29uZmlnLnVpLmNob29zZUF2YXRhci5zZWN0aW9uRG9tSWQpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVpbW9zLkNvbmZpZy51aS5pbmRpY2F0aW9uLmxhZykuaW5uZXJIVE1MID0gJ24vYScgO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVpbW9zLkNvbmZpZy51aS5pbmRpY2F0aW9uLmZwcykuaW5uZXJIVE1MID0gJ24vYScgO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVpbW9zLkNvbmZpZy51aS5jaG9vc2VBdmF0YXIuYXZhdGFyTGlzdERvbUlkKS5pbm5lckhUTUwgPSAnJyA7XG5cdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5jb25zb2xlLndyaXRlXCIse1wiZGV0YWlsXCI6e1wibWVzc2FnZVwiOlwiRGlzY29ubmVjdGVkXCJ9fSk7XG5cblx0XHRcdC8vY2xlYW4gc2Vzc2lvblxuXHRcdFx0ZGVsZXRlIGRlaW1vcy5FbmdpbmUud3NDbGllbnQuc2Vzc2lvbl9pZCA7XG5cblx0XHRcdC8vY2xlYW4gYXZhdGFyXG5cdFx0XHRpZighIWRlaW1vcy5FbmdpbmUuYXZhdGFyKSB7XG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLmNsZWFuRG9tKCk7XG5cdFx0XHRcdGRlbGV0ZSBkZWltb3MuRW5naW5lLmF2YXRhcjtcblx0XHRcdH1cblxuXHRcdFx0Ly9jbGVhbiBvdGhlciBhdmF0YXJcblx0XHRcdGZvcih2YXIgYXZhdGFyIGluIGRlaW1vcy5FbmdpbmUuc2NlbmUuYXZhdGFycykge1xuXHRcdFx0XHRkZWltb3MuRW5naW5lLnNjZW5lLmF2YXRhcnNbYXZhdGFyXS5jbGVhbkRvbSgpO1xuXHRcdFx0XHRkZWxldGUgZGVpbW9zLkVuZ2luZS5zY2VuZS5hdmF0YXJzW2F2YXRhcl07XG5cdFx0XHR9XG5cblx0XHRcdC8vY2xlYW4gb3RoZXIgcHJvamVjdGlsZVxuXHRcdFx0Zm9yKHZhciBwcm9qZWN0aWxlIGluIGRlaW1vcy5FbmdpbmUuc2NlbmUucHJvamVjdGlsZXMpIHtcblx0XHRcdFx0ZGVpbW9zLkVuZ2luZS5zY2VuZS5wcm9qZWN0aWxlc1twcm9qZWN0aWxlXS5jbGVhbkRvbSgpO1xuXHRcdFx0XHRkZWxldGUgZGVpbW9zLkVuZ2luZS5zY2VuZS5wcm9qZWN0aWxlc1twcm9qZWN0aWxlXTtcblx0XHRcdH1cblxuXHRcdFx0Ly9jbGVhbiBvdGhlciBpdGVtc1xuXHRcdFx0Zm9yKHZhciBpdGVtIGluIGRlaW1vcy5FbmdpbmUuc2NlbmUuaXRlbXMpIHtcblx0XHRcdFx0ZGVpbW9zLkVuZ2luZS5zY2VuZS5pdGVtc1tpdGVtXS5jbGVhbkRvbSgpO1xuXHRcdFx0XHRkZWxldGUgZGVpbW9zLkVuZ2luZS5zY2VuZS5pdGVtc1tpdGVtXTtcblx0XHRcdH1cblxuXHRcdFx0Ly9jbGVhbiBvdGhlciBtb25zdGVyc1xuXHRcdFx0Zm9yKHZhciBtb25zdGVyIGluIGRlaW1vcy5FbmdpbmUuc2NlbmUubW9uc3RlcnMpIHtcblx0XHRcdFx0ZGVpbW9zLkVuZ2luZS5zY2VuZS5tb25zdGVyc1ttb25zdGVyXS5jbGVhbkRvbSgpO1xuXHRcdFx0XHRkZWxldGUgZGVpbW9zLkVuZ2luZS5zY2VuZS5tb25zdGVyc1ttb25zdGVyXTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0b25Mb2dvdXQgOiBmdW5jdGlvbihldmVudCl7XG5cdFx0XHR2YXIgbWVzc2FnZSA9IHt9O1xuXHRcdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblx0XHRcdG1lc3NhZ2VbX3QuQUNUSU9OXSA9IF90LkFDVElPTl9MT0dPVVQ7XG5cdFx0XHRtZXNzYWdlW190Lk1FU1NBR0VdID0ge307XG5cdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnNlbmRNZXNzYWdlXCIsbWVzc2FnZSk7XG5cdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmxvZ2dvdXRcIik7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0sXG5cblx0XHRvbkxvZ2luIDogZnVuY3Rpb24oZXZlbnQpe1xuXHRcdFx0dmFyIGxvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVpbW9zLkNvbmZpZy51aS5sb2dpbi5pbnB1dExvZ2luRG9tSWQpLnZhbHVlO1xuXHRcdFx0dmFyIHBhc3N3b3JkID0gQ3J5cHRvSlMuTUQ1KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlaW1vcy5Db25maWcudWkubG9naW4uaW5wdXRQYXNzd29yZERvbUlkKS52YWx1ZSkudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLkhleCk7XG5cdFx0XHR2YXIgbWVzc2FnZSA9IHt9O1xuXHRcdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblx0XHRcdG1lc3NhZ2VbX3QuQUNUSU9OXSA9IF90LkxPR0lOO1xuXHRcdFx0bWVzc2FnZVtfdC5NRVNTQUdFXSA9IHt9O1xuXHRcdFx0bWVzc2FnZVtfdC5NRVNTQUdFXVtfdC5MT0dJTl0gPSBsb2dpbjtcblx0XHRcdG1lc3NhZ2VbX3QuTUVTU0FHRV1bX3QuUEFTU1dPUkRdID0gcGFzc3dvcmQ7XG5cdFx0XHRtZXNzYWdlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ1VSUkVOVF9VUkxdID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG5cblx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc2VuZE1lc3NhZ2VcIixtZXNzYWdlKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSxcblxuXHRcdG9uQXZhdGFyQ2hvb3NlZCA6IGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0XHR2YXIgYXZhdGFyID0gbnVsbDtcblx0XHRcdFxuXHRcdFx0dmFyIGxpc3RfYXZhdGFyID0gZG9jdW1lbnQuZm9ybXNbZGVpbW9zLkNvbmZpZy51aS5jaG9vc2VBdmF0YXIuZm9ybURvbUlkXS5jaG9vc2VfYXZhdGFyIDtcblx0XHRcdGlmKCEhbGlzdF9hdmF0YXIub3B0aW9uc1tsaXN0X2F2YXRhci5zZWxlY3RlZEluZGV4XSkge1xuXHRcdFx0XHRhdmF0YXIgPSBsaXN0X2F2YXRhci5vcHRpb25zW2xpc3RfYXZhdGFyLnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZighIWF2YXRhcikge1xuXHRcdFx0XHR2YXIgZSA9IHt9IDtcblx0XHRcdFx0ZVtfdC5BQ1RJT05dID0gX3QuQUNUSU9OX0NIT09TRV9DSEFSO1xuXHRcdFx0XHRlW190Lk1FU1NBR0VdID0ge307XG5cdFx0XHRcdGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9DSEFSXSA9IGF2YXRhcjtcblxuXHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnNlbmRNZXNzYWdlXCIsZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5jb25zb2xlLndyaXRlXCIse1wiZGV0YWlsXCI6e1wibWVzc2FnZVwiOlwiVW5rbm93IGF2YXRhclwifX0pO1xuXHRcdFx0fVxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdH0sXG5cblx0XHQvL2F2YXRhciBpcyBzZWxlY3RlZCBhbmQgY29uZmlybWVkIGJ5IHRoZSBiYWNrZW5kXG5cdFx0YXZhdGFyU2VsZWN0ZWQ6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0XHRpZighIWVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9DSEFSXVtfdC5NRVNTQUdFX0VMRU1FTlRfSURdKSB7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlaW1vcy5Db25maWcudWkuY2hvb3NlQXZhdGFyLnNlY3Rpb25Eb21JZCkuc3R5bGUuZGlzcGxheSA9ICdub25lJyA7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuZ2FtZVN0YXJ0ZWRcIixlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmNvbnNvbGUud3JpdGVcIix7XCJkZXRhaWxcIjp7XCJtZXNzYWdlXCI6XCJBdmF0YXIgaGFzIG5vIGlkIFwifX0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBvcmcuZGJ5emVyby5kZWltb3MucmVuZGVyLlNjZW5lIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA4LzA5XG4gKiBAZGVzY3JpcHRpb24gOiBTY2VuZSB3aGVyZSBhY3Rpb24gYXBwZW5kcyAhXG4gKlxuICoqL1xuXG52YXIgb3JnID0gb3JnIHx8IHt9IDtcbm9yZy5kYnl6ZXJvID0gb3JnLmRieXplcm8gfHwge30gO1xuXG4oZnVuY3Rpb24oZGVpbW9zLCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cdHZhciBWZWN0b3IgPSBvcmcuZGJ5emVyby50b29scy5WZWN0b3I7XG5cdHZhciBFdmVudE1hbmFnZXIgPSBvcmcuZGJ5emVyby50b29scy5FdmVudE1hbmFnZXI7XG5cblx0ZGVpbW9zLnJlbmRlciA9IG9yZy5kYnl6ZXJvLmRlaW1vcy5yZW5kZXIgfHwge30gO1xuXG5cdGRlaW1vcy5yZW5kZXIuU2NlbmUgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLml0ZW1zXHRcdFx0PSB7fTtcblx0XHR0aGlzLmF2YXRhcnNcdFx0PSB7fTtcblx0XHR0aGlzLnByb2plY3RpbGVzXHQ9IHt9O1xuXHRcdHRoaXMuYXR0YWNrWm9uZXNcdD0ge307XG5cdFx0dGhpcy5tb25zdGVyc1x0XHQ9IHt9O1xuXHRcdHRoaXMuZGF0YVRvUGFyc2VcdD0ge307XG5cdFx0dGhpcy5hZGRMaXN0ZW5lcigpO1xuXHR9XG5cblx0ZGVpbW9zLnJlbmRlci5TY2VuZS5wcm90b3R5cGUucGFyc2VEYXRhID0gZnVuY3Rpb24oZGF0YSkge1xuXHRcdGlmKCFkZWltb3MuRW5naW5lLnJ1bm5pbmcpIHJldHVybiBmYWxzZTtcblx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXG5cdFx0LyoqXG5cdFx0ICogQVZBVEFSUyBcblx0XHQgKi9cblx0XHQvL3N5bmMgYXZhdGFyc1xuXHRcdHZhciBhdmF0YXJVcGRhdGVkID0gW107XG5cdFx0dmFyIGF2YXRhcnMgPSBkYXRhW190Lk1FU1NBR0VdW190LkFWQVRBUlNdO1xuXHRcdGZvcih2YXIgayBpbiBhdmF0YXJzKSB7XG5cdFx0XHRpZih0aGlzLnN5bmNBdmF0YXIoYXZhdGFyc1trXSkpIHtcblx0XHRcdFx0YXZhdGFyVXBkYXRlZC5wdXNoKHBhcnNlSW50KGF2YXRhcnNba11bX3RbJ01FU1NBR0VfRUxFTUVOVF9JRCddXSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vY2xlYW4gYXZhdGFyXG5cdFx0Zm9yKHZhciBpIGluIGRlaW1vcy5FbmdpbmUuc2NlbmUuYXZhdGFycykge1xuXHRcdFx0dmFyIGF2X2lkID0gZGVpbW9zLkVuZ2luZS5zY2VuZS5hdmF0YXJzW2ldLnNlcnZlcmlkO1xuXHRcdFx0aWYoYXZhdGFyVXBkYXRlZC5pbmRleE9mKGF2X2lkKSA9PT0gLTEpIHtcblx0XHRcdFx0dGhpcy5hdmF0YXJzW2F2X2lkXS5kZXN0cm95KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogSVRFTVMgXG5cdFx0ICovXG5cdFx0Ly9zeW5jIGl0ZW1zXG5cdFx0dmFyIGl0ZW1zID0gZGF0YVtfdC5NRVNTQUdFXVtfdC5JVEVNU107XG5cdFx0dmFyIGl0ZW1VcGRhdGVkID0gW107XG5cdFx0Zm9yKHZhciBpZCBpbiBpdGVtcykge1xuXHRcdFx0dGhpcy5zeW5jSXRlbShpdGVtc1tpZF0pO1xuXHRcdFx0aXRlbVVwZGF0ZWQucHVzaChpZCk7XG5cdFx0fVxuXG5cdFx0Ly9jbGVhbiBpdGVtc1xuXHRcdGZvcih2YXIgaXRlbV9pZCBpbiBkZWltb3MuRW5naW5lLnNjZW5lLml0ZW1zKSB7XG5cdFx0XHRpZihpdGVtVXBkYXRlZC5pbmRleE9mKGl0ZW1faWQpID09PSAtMSkge1xuXHRcdFx0XHR0aGlzLml0ZW1zW2l0ZW1faWRdLmNsZWFuRG9tKCk7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLml0ZW1zW2l0ZW1faWRdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIE1PTlNURVJTIFxuXHRcdCAqL1xuXHRcdC8vc3luYyBpdGVtc1xuXHRcdHZhciBtb25zdGVycyA9IGRhdGFbX3QuTUVTU0FHRV1bX3QuTU9OU1RFUlNdO1xuXHRcdHZhciBtb25zdGVyVXBkYXRlZCA9IFtdO1xuXHRcdGZvcih2YXIgaWQgaW4gbW9uc3RlcnMpIHtcblx0XHRcdHRoaXMuc3luY01vbnN0ZXIobW9uc3RlcnNbaWRdKTtcblx0XHRcdG1vbnN0ZXJVcGRhdGVkLnB1c2goaWQpO1xuXHRcdH1cblxuXHRcdC8vY2xlYW4gaXRlbXNcblx0XHRmb3IodmFyIG1vbnN0ZXJfaWQgaW4gdGhpcy5tb25zdGVycykge1xuXHRcdFx0aWYobW9uc3RlclVwZGF0ZWQuaW5kZXhPZihtb25zdGVyX2lkKSA9PT0gLTEpIHtcblx0XHRcdFx0dGhpcy5tb25zdGVyc1ttb25zdGVyX2lkXS5jbGVhbkRvbSgpO1xuXHRcdFx0XHRkZWxldGUgdGhpcy5tb25zdGVyc1ttb25zdGVyX2lkXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBQUk9KRUNUSUxFUyBcblx0XHQgKi9cblx0XHQvL3N5bmMgaXRlbXNcblx0XHR2YXIgcHJvamVjdGlsZXMgPSBkYXRhW190Lk1FU1NBR0VdW190LlBST0pFQ1RJTEVTXTtcblx0XHR2YXIgcHJvamVjdGlsZVVwZGF0ZWQgPSBbXTtcblx0XHRmb3IodmFyIGlkIGluIHByb2plY3RpbGVzKSB7XG5cdFx0XHR0aGlzLnN5bmNQcm9qZWN0aWxlKHByb2plY3RpbGVzW2lkXSk7XG5cdFx0XHRwcm9qZWN0aWxlVXBkYXRlZC5wdXNoKGlkKTtcblx0XHR9XG5cblx0XHQvL2NsZWFuIGl0ZW1zXG5cdFx0Zm9yKHZhciBwcm9qZWN0aWxlX2lkIGluIHRoaXMucHJvamVjdGlsZXMpIHtcblx0XHRcdGlmKHByb2plY3RpbGVVcGRhdGVkLmluZGV4T2YocHJvamVjdGlsZV9pZCkgPT09IC0xKSB7XG5cdFx0XHRcdHRoaXMucHJvamVjdGlsZXNbcHJvamVjdGlsZV9pZF0uY2xlYW5Eb20oKTtcblx0XHRcdFx0ZGVsZXRlIHRoaXMucHJvamVjdGlsZXNbcHJvamVjdGlsZV9pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXHQvL0ByZXR1cm4gdG90YWwgcGVyaW9kZSBpbnRlZ3JhdGVkXG5cdGRlaW1vcy5yZW5kZXIuU2NlbmUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGR0LG5vdykge1xuXHRcdGlmKCEhdGhpcy5kYXRhVG9QYXJzZSkge1xuXHRcdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblx0XHRcdHZhciBkYXRhID0ge307XG5cdFx0XHRkYXRhW190WydNRVNTQUdFJ11dID0gdGhpcy5kYXRhVG9QYXJzZTtcblx0XHRcdHRoaXMucGFyc2VEYXRhKGRhdGEpO1xuXHRcdFx0dGhpcy5kYXRhVG9QYXJzZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRkZWltb3MuRW5naW5lLnVpLnVwZGF0ZUZQUyhwYXJzZUludCgxMDAwL2R0KSk7XG5cblx0XHQvL3VwZGF0ZVxuXHRcdHZhciBrZXlzLGksYXZhdGFyLG1vbnN0ZXI7XG5cdFx0a2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuaXRlbXMpO1xuXHRcdGZvcihpPTA7aTxrZXlzLmxlbmd0aDtpKyspIHtcblx0XHRcdHRoaXMuaXRlbXNba2V5c1tpXV0udXBkYXRlKGR0LG5vdyk7XG5cdFx0fVxuXHRcdGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmF2YXRhcnMpO1xuXHRcdGZvcihpPTA7aTxrZXlzLmxlbmd0aDtpKyspIHtcblx0XHRcdHRoaXMuYXZhdGFyc1trZXlzW2ldXS51cGRhdGUoZHQsbm93KTtcblx0XHR9XG5cdFx0a2V5cyA9IE9iamVjdC5rZXlzKHRoaXMucHJvamVjdGlsZXMpO1xuXHRcdGZvcihpPTA7aTxrZXlzLmxlbmd0aDtpKyspIHtcblx0XHRcdHRoaXMucHJvamVjdGlsZXNba2V5c1tpXV0udXBkYXRlKGR0LG5vdyk7XG5cdFx0fVxuXHRcdGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1vbnN0ZXJzKTtcblx0XHRmb3IoaT0wO2k8a2V5cy5sZW5ndGg7aSsrKSB7XG5cdFx0XHR0aGlzLm1vbnN0ZXJzW2tleXNbaV1dLnVwZGF0ZShkdCxub3cpO1xuXHRcdH1cblx0XHRrZXlzID0gT2JqZWN0LmtleXModGhpcy5hdHRhY2tab25lcyk7XG5cdFx0Zm9yKGk9MDtpPGtleXMubGVuZ3RoO2krKykge1xuXHRcdFx0aWYodGhpcy5hdHRhY2tab25lc1trZXlzW2ldXS51cGRhdGUoZHQsbm93KSA9PSBmYWxzZSl7XG5cdFx0XHRcdHRoaXMuYXR0YWNrWm9uZXNba2V5c1tpXV0uZGVzdHJveSgpO1xuXHRcdFx0XHRkZWxldGUgdGhpcy5hdHRhY2tab25lc1trZXlzW2ldXTtcblx0XHRcdH07XG5cdFx0fVxuXHRcdGlmKGRlaW1vcy5FbmdpbmUuYXZhdGFyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLnVwZGF0ZShkdCxub3cpIDtcblx0XHR9XG5cblx0XHQvL21vdmUgYW5kIHJlbmRlciBlbnRpdGllcyAhXG5cdFx0a2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuYXZhdGFycyk7XG5cdFx0Zm9yKGk9MDtpPGtleXMubGVuZ3RoO2krKykge1xuXHRcdFx0YXZhdGFyID0gdGhpcy5hdmF0YXJzW2tleXNbaV1dO1xuXHRcdFx0YXZhdGFyLm1vdmUoKTtcblx0XHRcdGF2YXRhci51cGRhdGVBbmltYXRpb24oKTtcblx0XHR9XG5cdFx0Ly9tb3ZlIGFuZCByZW5kZXIgcHJvamVjdGlsZXMgIVxuXHRcdGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb2plY3RpbGVzKTtcblx0XHRmb3IoaT0wO2k8a2V5cy5sZW5ndGg7aSsrKSB7XG5cdFx0XHR0aGlzLnByb2plY3RpbGVzW2tleXNbaV1dLm1vdmUoKTtcblx0XHR9XG5cdFx0Ly9tb3ZlIGFuZCByZW5kZXIgZW50aXRpZXMgIVxuXHRcdGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLml0ZW1zKTtcblx0XHRmb3IoaT0wO2k8a2V5cy5sZW5ndGg7aSsrKSB7XG5cdFx0XHR0aGlzLml0ZW1zW2tleXNbaV1dLm1vdmUoKTtcblx0XHR9XG5cdFx0Ly9tb3ZlIGFuZCByZW5kZXIgbW9uc3RlcnMgIVxuXHRcdGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1vbnN0ZXJzKTtcblx0XHRmb3IoaT0wO2k8a2V5cy5sZW5ndGg7aSsrKSB7XG5cdFx0XHRtb25zdGVyID0gdGhpcy5tb25zdGVyc1trZXlzW2ldXTtcblx0XHRcdG1vbnN0ZXIubW92ZSgpO1xuXHRcdFx0bW9uc3Rlci51cGRhdGVBbmltYXRpb24oKTtcblx0XHR9XG5cblx0XHQvL2F2YXRhciBtb3ZlK3JlbmRlcit0aGluZ3Ncblx0XHRpZihkZWltb3MuRW5naW5lLmF2YXRhciAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci51cGRhdGVBbmltYXRpb24oKSA7XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5tb3ZlKCkgO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIuYWRkaW5nV2FpdGluZ0ZvcmNlcygpIDtcblx0XHR9XG5cdH1cblxuXHRkZWltb3MucmVuZGVyLlNjZW5lLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc3luY0l0ZW0nLHRoaXMuc3luY0l0ZW0uYmluZCh0aGlzKSkgO1xuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc3luY0F2YXRhcicsdGhpcy5zeW5jQXZhdGFyLmJpbmQodGhpcykpIDtcblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnN5bmNNb25zdGVyJyx0aGlzLnN5bmNNb25zdGVyLmJpbmQodGhpcykpIDtcblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmFjdGlvbkNvbGxpZGUnLHRoaXMuZWxlbWVudENvbGxpc2lvbi5iaW5kKHRoaXMpKSA7XG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zeW5jUHJvamVjdGlsZScsdGhpcy5zeW5jUHJvamVjdGlsZS5iaW5kKHRoaXMpKSA7XG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zeW5jQXR0YWNrWm9uZScsdGhpcy5zeW5jQXR0YWNrWm9uZS5iaW5kKHRoaXMpKSA7XG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5pdGVtR3JhYmJlZCcsdGhpcy5pdGVtR3JhYmJlZC5iaW5kKHRoaXMpKSA7XG5cdH1cblxuXHRkZWltb3MucmVuZGVyLlNjZW5lLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zeW5jSXRlbScpIDtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc3luY0F2YXRhcicpIDtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc3luY01vbnN0ZXInKSA7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmFjdGlvbkNvbGxpZGUnKSA7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnN5bmNQcm9qZWN0aWxlJykgO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zeW5jQXR0YWNrWm9uZScpIDtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuaXRlbUdyYWJiZWQnKSA7XG5cdH1cblxuXHRkZWltb3MucmVuZGVyLlNjZW5lLnByb3RvdHlwZS5hZGRJdGVtID0gZnVuY3Rpb24oaXRlbSkge1xuXHRcdHRoaXMuaXRlbXNbaXRlbS5zZXJ2ZXJpZF0gPSBpdGVtO1xuXHR9XG5cblx0ZGVpbW9zLnJlbmRlci5TY2VuZS5wcm90b3R5cGUuc3luY0F2YXRhciA9IGZ1bmN0aW9uKGUpIHtcblx0XHQvL3dhaXQgZ2FtZSBzdGFydCBiZWZvcmUgc3RhcnQuLlxuXHRcdGlmKCFkZWltb3MuRW5naW5lLnJ1bm5pbmcpIHJldHVybjtcblxuXHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0dmFyIGF2YXRhcjtcblx0XHQvL3NpIG9uIHJlY29pdCBsYSByZXF1ZXRlIGV0IHBhcyBxdWUgbCdhdmF0YXIgb24gbCdleHRyYWl0XG5cdFx0aWYoZVtfdFsnTUVTU0FHRSddXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRhdmF0YXIgPSBlW190WydNRVNTQUdFJ11dO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhdmF0YXIgPSBlO1xuXHRcdH1cblxuXHRcdHZhciBhdl9pZCA9IGF2YXRhcltfdC5NRVNTQUdFX0VMRU1FTlRfSURdO1xuXG5cdFx0Ly9tYWtlIHNwZWNpYWwgc3luYyBpZiBpdCBpcyB0aGUgY3VycmVudCBhdmF0YXJcblx0XHRpZiggZGVpbW9zLkVuZ2luZS5hdmF0YXIgIT09IHVuZGVmaW5lZCAmJiBcblx0XHRcdGF2X2lkID09PSBkZWltb3MuRW5naW5lLmF2YXRhci5zZXJ2ZXJpZFxuXHRcdCkge1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIucG9zaXRpb25TZXJ2ZXIueCA9IGF2YXRhcltfdC5NRVNTQUdFX1BPU0lUSU9OXS54O1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIucG9zaXRpb25TZXJ2ZXIueSA9IGF2YXRhcltfdC5NRVNTQUdFX1BPU0lUSU9OXS55O1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5jdXJyZW50TGFnID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBhdmF0YXJbX3QuTUVTU0FHRV9USU1FU1RBTVBdO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS51aS51cGRhdGVMYWcoZGVpbW9zLkVuZ2luZS5jdXJyZW50TGFnKTtcblx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLmNvcnJlY3RQb3NpdGlvbldpdGhTZXJ2ZXIoKTtcblxuXHRcdFx0Ly9zdG9wIGhlcmUgaWYgd2UgZG9uJ3Qgd2FudCB0byBzaG93IG1pcnJvclxuXHRcdFx0aWYoIGRlaW1vcy5Db25maWcuc2hvd093bk1pcnJvciA9PT0gZmFsc2UgKVx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHZhciBsb2NhbF9hdmF0YXIgPSB0aGlzLmF2YXRhcnNbYXZhdGFyW190WydNRVNTQUdFX0VMRU1FTlRfSUQnXV1dO1xuXHRcdC8vbWFrZSBpdCBpZiBuZWVkZWRcblx0XHRpZihsb2NhbF9hdmF0YXIgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bG9jYWxfYXZhdGFyID0gdGhpcy5hdmF0YXJzW2F2X2lkXSA9IG5ldyBkZWltb3MuZWxlbWVudC5TZXJ2ZXJBdmF0YXIoXG5cdFx0XHRcdGF2YXRhcltfdC5OQU1FXSxcblx0XHRcdFx0bmV3IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3RvcihhdmF0YXJbX3QuTUVTU0FHRV9QT1NJVElPTl0ueCwgYXZhdGFyW190Lk1FU1NBR0VfUE9TSVRJT05dLnkpLFxuXHRcdFx0XHRuZXcgb3JnLmRieXplcm8udG9vbHMuVmVjdG9yKGF2YXRhcltfdC5NRVNTQUdFX1ZFTE9DSVRZXS54LCBhdmF0YXJbX3QuTUVTU0FHRV9WRUxPQ0lUWV0ueSksXG5cdFx0XHRcdG5ldyBvcmcuZGJ5emVyby50b29scy5WZWN0b3IoYXZhdGFyW190Lk1FU1NBR0VfQUNDRUxFUkFUSU9OXS54LCBhdmF0YXJbX3QuTUVTU0FHRV9BQ0NFTEVSQVRJT05dLnkpLFxuXHRcdFx0XHRuZXcgb3JnLmRieXplcm8udG9vbHMuVmVjdG9yKGF2YXRhcltfdC5NRVNTQUdFX1NJWkVdLngsIGF2YXRhcltfdC5NRVNTQUdFX1NJWkVdLnkpLFxuXHRcdFx0XHRhdmF0YXJbX3QuTUVTU0FHRV9NQVNTXSxcblx0XHRcdFx0bmV3IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3RvcihhdmF0YXJbX3QuTUVTU0FHRV9VU0VSX0lOUFVUX1ZFTE9DSVRZXS54LCBhdmF0YXJbX3QuTUVTU0FHRV9VU0VSX0lOUFVUX1ZFTE9DSVRZXS55KSxcblx0XHRcdFx0YXZfaWQsXG5cdFx0XHRcdGF2YXRhcltfdC5NRVNTQUdFX0RFTFRBU0hPV11cblx0XHRcdCkgO1xuXHRcdFx0bG9jYWxfYXZhdGFyLm9yaWVudGVkID0gYXZhdGFyW190Lk1FU1NBR0VfQU5JTUFUSU9OXVtfdC5NRVNTQUdFX0RJUkVDVElPTl07XG5cblx0XHRcdHZhciBza2luID0gYXZhdGFyW190Lk1FU1NBR0VfU0tJTl07XG5cblx0XHRcdGxvY2FsX2F2YXRhci5IUCA9IGF2YXRhcltfdC5NRVNTQUdFX0NVUlJFTlRfSFBdO1xuXHRcdFx0bG9jYWxfYXZhdGFyLm1heEhQID0gYXZhdGFyW190Lk1FU1NBR0VfSFBdO1xuXHRcdFx0bG9jYWxfYXZhdGFyLnNraW4gPSBza2luO1xuXHRcdFx0bG9jYWxfYXZhdGFyLmluaXRBbmltYXRpb24oKTtcblxuXHRcdFx0bG9jYWxfYXZhdGFyLmRlbHRhc2hvdyA9IGF2YXRhcltfdC5NRVNTQUdFX0RFTFRBU0hPV107XG5cblx0XHRcdGxvY2FsX2F2YXRhci5pbml0KCk7XG5cdFx0fVxuXG5cdFx0Ly9zeW5jaHJvIGRlcyBpbmZvc1xuXHRcdGxvY2FsX2F2YXRhci5tb3ZlU3BlZWRcdFx0XHRcdD0gYXZhdGFyW190Lk1FU1NBR0VfTU9WRV9TUEVFRF07XG5cdFx0bG9jYWxfYXZhdGFyLmp1bXBTcGVlZFx0XHRcdFx0PSBhdmF0YXJbX3QuTUVTU0FHRV9KVU1QX1NQRUVEXTtcblx0XHRsb2NhbF9hdmF0YXIuZ29pbmdEb3duXHRcdFx0XHQ9IGF2YXRhcltfdC5NRVNTQUdFX0dPSU5HX0RPV05dO1xuXHRcdGxvY2FsX2F2YXRhci52ZWxvY2l0eS54XHRcdFx0XHQ9IGF2YXRhcltfdC5NRVNTQUdFX1ZFTE9DSVRZXS54O1xuXHRcdGxvY2FsX2F2YXRhci52ZWxvY2l0eS55XHRcdFx0XHQ9IGF2YXRhcltfdC5NRVNTQUdFX1ZFTE9DSVRZXS55O1xuXHRcdC8vIGRvIG5vdCBzeW5jaHJvIHBvc2l0aW9uIG9uIGZseSB0byBnZXQgc21vb3RoeSBtb3ZlbWVudFxuXHRcdGxvY2FsX2F2YXRhci5pc0xhbmRlZCA9IGF2YXRhcltfdC5NRVNTQUdFX0xBTkRFRF07XG5cdFx0aWYobG9jYWxfYXZhdGFyLmlzTGFuZGVkID09PSB0cnVlKVxuXHRcdHtcblx0XHRcdGxvY2FsX2F2YXRhci5wb3NpdGlvbi54XHRcdFx0XHQ9IGF2YXRhcltfdC5NRVNTQUdFX1BPU0lUSU9OXS54O1xuXHRcdFx0bG9jYWxfYXZhdGFyLnBvc2l0aW9uLnlcdFx0XHRcdD0gYXZhdGFyW190Lk1FU1NBR0VfUE9TSVRJT05dLnk7XG5cdFx0XHRsb2NhbF9hdmF0YXIuYWNjZWxlcmF0aW9uLnhcdFx0XHQ9IGF2YXRhcltfdC5NRVNTQUdFX0FDQ0VMRVJBVElPTl0ueDtcblx0XHRcdGxvY2FsX2F2YXRhci5hY2NlbGVyYXRpb24ueVx0XHRcdD0gYXZhdGFyW190Lk1FU1NBR0VfQUNDRUxFUkFUSU9OXS55O1xuXHRcdH1cblx0XHRsb2NhbF9hdmF0YXIudXNlcklucHV0VmVsb2NpdHkueFx0PSBhdmF0YXJbX3QuTUVTU0FHRV9VU0VSX0lOUFVUX1ZFTE9DSVRZXS54O1xuXHRcdGxvY2FsX2F2YXRhci51c2VySW5wdXRWZWxvY2l0eS55XHQ9IGF2YXRhcltfdC5NRVNTQUdFX1VTRVJfSU5QVVRfVkVMT0NJVFldLnk7XG5cdFx0bG9jYWxfYXZhdGFyLnNheWluZ1x0XHRcdFx0XHQ9IGF2YXRhcltfdC5NRVNTQUdFX1NBWUlOR107XG5cdFx0bG9jYWxfYXZhdGFyLml0ZW1fc2xvdF9oZWFkXHRcdFx0PSBhdmF0YXJbX3QuSVRFTV9TTE9UX0hFQURdO1xuXHRcdGxvY2FsX2F2YXRhci5pdGVtX3Nsb3RfY2hlc3RcdFx0PSBhdmF0YXJbX3QuSVRFTV9TTE9UX0NIRVNUXTtcblx0XHRsb2NhbF9hdmF0YXIuaXRlbV9zbG90X2Zvb3RcdFx0XHQ9IGF2YXRhcltfdC5JVEVNX1NMT1RfRk9PVF07XG5cdFx0bG9jYWxfYXZhdGFyLml0ZW1fc2xvdF9sZWZ0X2hhbmRcdD0gYXZhdGFyW190LklURU1fU0xPVF9MRUZUX0hBTkRdO1xuXHRcdGxvY2FsX2F2YXRhci5pdGVtX3Nsb3RfcmlnaHRfaGFuZFx0PSBhdmF0YXJbX3QuSVRFTV9TTE9UX1JJR0hUX0hBTkRdO1xuXG5cdFx0bG9jYWxfYXZhdGFyLkhQID0gYXZhdGFyW190Lk1FU1NBR0VfQ1VSUkVOVF9IUF07XG5cdFx0bG9jYWxfYXZhdGFyLm1heEhQID0gYXZhdGFyW190Lk1FU1NBR0VfSFBdO1xuXG5cdFx0bG9jYWxfYXZhdGFyLnJlbmRlcigpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0ZGVpbW9zLnJlbmRlci5TY2VuZS5wcm90b3R5cGUuc3luY0l0ZW0gPSBmdW5jdGlvbihlKSB7XG5cdFx0Ly93YWl0IGdhbWUgc3RhcnQgYmVmb3JlIHN0YXJ0Li5cblx0XHRpZighZGVpbW9zLkVuZ2luZS5ydW5uaW5nKSByZXR1cm47XG5cblx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdHZhciBpdGVtO1xuXG5cdFx0Ly9zaSBvbiByZWNvaXQgbGEgcmVxdWV0ZSBldCBwYXMgcXVlIGwnYXZhdGFyIG9uIGwnZXh0cmFpdFxuXHRcdGlmKGVbX3RbJ01FU1NBR0UnXV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aXRlbSA9IGVbX3RbJ01FU1NBR0UnXV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGl0ZW0gPSBlO1xuXHRcdH1cblxuXHRcdHZhciBsb2NhbF9pdGVtID0gdGhpcy5pdGVtc1tpdGVtW190WydJRCddXV07XG5cblx0XHQvL2lmIGl0ZW0gaXMgbm90IG9uIHRoZSBzY2VuZSB3ZSBuYWtlIGl0XG5cdFx0aWYobG9jYWxfaXRlbSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRsb2NhbF9pdGVtID0gbmV3IGRlaW1vcy5lbGVtZW50Lkl0ZW0oXG5cdFx0XHRcdGl0ZW1bX3QuSURdLFxuXHRcdFx0XHRuZXcgVmVjdG9yKGl0ZW1bX3QuTUVTU0FHRV9QT1NJVElPTl0ueCxpdGVtW190Lk1FU1NBR0VfUE9TSVRJT05dLnkpLCAvL3Bvc2l0aW9uXG5cdFx0XHRcdG5ldyBWZWN0b3IoaXRlbVtfdC5NRVNTQUdFX1ZFTE9DSVRZXS54LGl0ZW1bX3QuTUVTU0FHRV9WRUxPQ0lUWV0ueSksIC8vdmVsb2NpdHlcblx0XHRcdFx0bmV3IFZlY3RvcihpdGVtW190Lk1FU1NBR0VfQUNDRUxFUkFUSU9OXS54LGl0ZW1bX3QuTUVTU0FHRV9BQ0NFTEVSQVRJT05dLnkpLCAvL2FjY2VsZXJhdGlvblxuXHRcdFx0XHRuZXcgVmVjdG9yKGl0ZW1bX3QuTUVTU0FHRV9TSVpFXS54LGl0ZW1bX3QuTUVTU0FHRV9TSVpFXS55KSwgLy9zaXplXG5cdFx0XHRcdGl0ZW1bX3QuTUVTU0FHRV9NQVNTXSwgLy9uYW1lXG5cdFx0XHRcdGl0ZW1bX3QuTUVTU0FHRV9FTEVNRU5UX0lEXSwgLy9uYW1lXG5cdFx0XHRcdGl0ZW1bX3QuTUVTU0FHRV9TS0lOXSwgLy9za2luXG5cdFx0XHRcdGl0ZW1bX3QuTUVTU0FHRV9DT0xPUl0sIC8vc2tpblxuXHRcdFx0XHRpdGVtW190Lk5BTUVdLCAvL3NraW5cblx0XHRcdFx0aXRlbVtfdC5NRVNTQUdFX09SSUVOVEFUSU9OXSwgLy9za2luXG5cdFx0XHRcdGl0ZW1bX3QuTUVTU0FHRV9ERUxUQVNIT1ddIC8vc2tpblxuXHRcdFx0KTtcblx0XHRcdGxvY2FsX2l0ZW0uaW5pdCgpO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5zY2VuZS5hZGRJdGVtKGxvY2FsX2l0ZW0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsb2NhbF9pdGVtLnBvc2l0aW9uIC54ID0gaXRlbVtfdC5NRVNTQUdFX1BPU0lUSU9OXS54O1xuXHRcdFx0bG9jYWxfaXRlbS5wb3NpdGlvbi55ID0gaXRlbVtfdC5NRVNTQUdFX1BPU0lUSU9OXS55O1xuXHRcdFx0bG9jYWxfaXRlbS52ZWxvY2l0eS54ID0gaXRlbVtfdC5NRVNTQUdFX1ZFTE9DSVRZXS54O1xuXHRcdFx0bG9jYWxfaXRlbS52ZWxvY2l0eS55ID0gaXRlbVtfdC5NRVNTQUdFX1ZFTE9DSVRZXS55O1xuXHRcdFx0bG9jYWxfaXRlbS5hY2NlbGVyYXRpb24ueCA9IGl0ZW1bX3QuTUVTU0FHRV9BQ0NFTEVSQVRJT05dLng7XG5cdFx0XHRsb2NhbF9pdGVtLmFjY2VsZXJhdGlvbi55ID0gaXRlbVtfdC5NRVNTQUdFX0FDQ0VMRVJBVElPTl0ueTtcblx0XHR9XG5cdH1cblxuXHRkZWltb3MucmVuZGVyLlNjZW5lLnByb3RvdHlwZS5zeW5jUHJvamVjdGlsZSA9IGZ1bmN0aW9uKGUpIHtcblx0XHQvL3dhaXQgZ2FtZSBzdGFydCBiZWZvcmUgc3RhcnQuLlxuXHRcdGlmKCFkZWltb3MuRW5naW5lLnJ1bm5pbmcpIHJldHVybjtcblxuXHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0dmFyIG1zZztcblxuXHRcdGlmKGVbX3RbJ01FU1NBR0UnXV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bXNnID0gZVtfdFsnTUVTU0FHRSddXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bXNnID0gZTtcblx0XHR9XG5cblx0XHQvL21ha2UgaXQgaWYgbmVlZGVkXG5cdFx0aWYodGhpcy5wcm9qZWN0aWxlc1ttc2dbX3RbJ0lEJ11dXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2YXIgcHJvamVjdGlsZSA9IG5ldyBkZWltb3MuZWxlbWVudC5Qcm9qZWN0aWxlKFxuXHRcdFx0XHRtc2dbX3RbJ0lEJ11dLFxuXHRcdFx0XHRuZXcgVmVjdG9yKG1zZ1tfdFsnTUVTU0FHRV9QT1NJVElPTiddXS54LG1zZ1tfdFsnTUVTU0FHRV9QT1NJVElPTiddXS55KSxcblx0XHRcdFx0bmV3IFZlY3Rvcihtc2dbX3RbJ01FU1NBR0VfVkVMT0NJVFknXV0ueCxtc2dbX3RbJ01FU1NBR0VfVkVMT0NJVFknXV0ueSksXG5cdFx0XHRcdG5ldyBWZWN0b3IobXNnW190WydNRVNTQUdFX0FDQ0VMRVJBVElPTiddXS54LG1zZ1tfdFsnTUVTU0FHRV9BQ0NFTEVSQVRJT04nXV0ueSksXG5cdFx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9TSVpFJ11dLFxuXHRcdFx0XHRtc2dbX3RbJ01FU1NBR0VfTUFTUyddXSxcblx0XHRcdFx0bXNnW190WydNRVNTQUdFX0VMRU1FTlRfSUQnXV0sXG5cdFx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9TS0lOJ11dLFxuXHRcdFx0XHRtc2dbX3RbJ01FU1NBR0VfQ09MT1InXV0sXG5cdFx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9EQU1BR0UnXV0sXG5cdFx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9PUklFTlRBVElPTiddXSxcblx0XHRcdFx0bXNnW190WydNRVNTQUdFX09XTkVSJ11dLFxuXHRcdFx0XHRtc2dbX3RbJ01FU1NBR0VfREVMVEFTSE9XJ11dXG5cdFx0XHQpO1xuXHRcdFx0cHJvamVjdGlsZS5pbml0KCk7XG5cdFx0XHRwcm9qZWN0aWxlLm5hbWUgPSAnUHJvamVjdGlsZSAnK21zZ1tfdFsnSUQnXV07XG5cdFx0XHR0aGlzLnByb2plY3RpbGVzW21zZ1tfdFsnSUQnXV1dID0gcHJvamVjdGlsZTtcblx0XHRcdGlmKHRoaXMuYXZhdGFyc1ttc2dbX3RbJ01FU1NBR0VfT1dORVInXV1dICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5hdmF0YXJzW21zZ1tfdFsnTUVTU0FHRV9PV05FUiddXV0ubGFzdEF0dGFjayA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcHJvamVjdGlsZVx0XHRcdFx0PSB0aGlzLnByb2plY3RpbGVzW21zZ1tfdFsnSUQnXV1dO1xuXHRcdFx0cHJvamVjdGlsZS52ZWxvY2l0eS54XHRcdD0gbXNnW190Lk1FU1NBR0VfVkVMT0NJVFldLng7XG5cdFx0XHRwcm9qZWN0aWxlLnZlbG9jaXR5LnlcdFx0PSBtc2dbX3QuTUVTU0FHRV9WRUxPQ0lUWV0ueTtcblx0XHRcdHByb2plY3RpbGUucG9zaXRpb24ueFx0XHQ9IG1zZ1tfdC5NRVNTQUdFX1BPU0lUSU9OXS54O1xuXHRcdFx0cHJvamVjdGlsZS5wb3NpdGlvbi55XHRcdD0gbXNnW190Lk1FU1NBR0VfUE9TSVRJT05dLnk7XG5cdFx0XHRwcm9qZWN0aWxlLmFjY2VsZXJhdGlvbi54XHQ9IG1zZ1tfdC5NRVNTQUdFX0FDQ0VMRVJBVElPTl0ueDtcblx0XHRcdHByb2plY3RpbGUuYWNjZWxlcmF0aW9uLnlcdD0gbXNnW190Lk1FU1NBR0VfQUNDRUxFUkFUSU9OXS55O1xuXHRcdFx0cHJvamVjdGlsZS5vcmllbnRhdGlvblx0XHQ9IG1zZ1tfdC5NRVNTQUdFX09SSUVOVEFUSU9OXTtcblx0XHR9XG5cdH1cblxuXHRkZWltb3MucmVuZGVyLlNjZW5lLnByb3RvdHlwZS5zeW5jTW9uc3RlciA9IGZ1bmN0aW9uKGUpIHtcblx0XHQvL3dhaXQgZ2FtZSBzdGFydCBiZWZvcmUgc3RhcnQuLlxuXHRcdGlmKCFkZWltb3MuRW5naW5lLnJ1bm5pbmcpIHJldHVybjtcblxuXHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0dmFyIG1zZztcblxuXHRcdGlmKGVbX3RbJ01FU1NBR0UnXV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bXNnID0gZVtfdFsnTUVTU0FHRSddXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bXNnID0gZTtcblx0XHR9XG5cblx0XHQvL21ha2UgaXQgaWYgbmVlZGVkXG5cdFx0aWYodGhpcy5tb25zdGVyc1ttc2dbX3RbJ0lEJ11dXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2YXIgbW9uc3RlciA9IG5ldyBkZWltb3MuZWxlbWVudC5Nb25zdGVyKFxuXHRcdFx0XHRtc2dbX3RbJ0lEJ11dLFxuXHRcdFx0XHRuZXcgVmVjdG9yKG1zZ1tfdFsnTUVTU0FHRV9QT1NJVElPTiddXS54LG1zZ1tfdFsnTUVTU0FHRV9QT1NJVElPTiddXS55KSxcblx0XHRcdFx0bmV3IFZlY3Rvcihtc2dbX3RbJ01FU1NBR0VfVkVMT0NJVFknXV0ueCxtc2dbX3RbJ01FU1NBR0VfVkVMT0NJVFknXV0ueSksXG5cdFx0XHRcdG5ldyBWZWN0b3IobXNnW190WydNRVNTQUdFX0FDQ0VMRVJBVElPTiddXS54LG1zZ1tfdFsnTUVTU0FHRV9BQ0NFTEVSQVRJT04nXV0ueSksXG5cdFx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9TSVpFJ11dLFxuXHRcdFx0XHRtc2dbX3RbJ01FU1NBR0VfTUFTUyddXSxcblx0XHRcdFx0bXNnW190WydNRVNTQUdFX0VMRU1FTlRfSUQnXV0sXG5cdFx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9TS0lOJ11dLFxuXHRcdFx0XHRtc2dbX3RbJ01FU1NBR0VfQ09MT1InXV0sXG5cdFx0XHRcdG1zZ1tfdFsnTkFNRSddXSxcblx0XHRcdFx0bXNnW190WydNRVNTQUdFX0RBTUFHRSddXSxcblx0XHRcdFx0bXNnW190WydNRVNTQUdFX09SSUVOVEFUSU9OJ11dLFxuXHRcdFx0XHRtc2dbX3RbJ01FU1NBR0VfREVMVEFTSE9XJ11dXG5cdFx0XHQpO1xuXHRcdFx0bW9uc3Rlci5IUCA9IG1zZ1tfdFsnTUVTU0FHRV9DVVJSRU5UX0hQJ11dO1xuXHRcdFx0bW9uc3Rlci5tYXhIUCA9IG1zZ1tfdFsnTUVTU0FHRV9IUCddXTtcblx0XHRcdG1vbnN0ZXIuaW5pdCgpO1xuXHRcdFx0dGhpcy5tb25zdGVyc1ttc2dbX3RbJ0lEJ11dXSA9IG1vbnN0ZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBtb25zdGVyXHRcdFx0XHQ9IHRoaXMubW9uc3RlcnNbbXNnW190WydJRCddXV07XG5cdFx0XHRtb25zdGVyLnZlbG9jaXR5LnhcdFx0PSBtc2dbX3QuTUVTU0FHRV9WRUxPQ0lUWV0ueDtcblx0XHRcdG1vbnN0ZXIudmVsb2NpdHkueVx0XHQ9IG1zZ1tfdC5NRVNTQUdFX1ZFTE9DSVRZXS55O1xuXHRcdFx0bW9uc3Rlci5wb3NpdGlvbi54XHRcdD0gbXNnW190Lk1FU1NBR0VfUE9TSVRJT05dLng7XG5cdFx0XHRtb25zdGVyLnBvc2l0aW9uLnlcdFx0PSBtc2dbX3QuTUVTU0FHRV9QT1NJVElPTl0ueTtcblx0XHRcdG1vbnN0ZXIuYWNjZWxlcmF0aW9uLnhcdD0gbXNnW190Lk1FU1NBR0VfQUNDRUxFUkFUSU9OXS54O1xuXHRcdFx0bW9uc3Rlci5hY2NlbGVyYXRpb24ueVx0PSBtc2dbX3QuTUVTU0FHRV9BQ0NFTEVSQVRJT05dLnk7XG5cdFx0XHRtb25zdGVyLm9yaWVudGF0aW9uXHRcdD0gbXNnW190Lk1FU1NBR0VfT1JJRU5UQVRJT05dO1xuXHRcdFx0bW9uc3Rlci5IUCA9IG1zZ1tfdFsnTUVTU0FHRV9DVVJSRU5UX0hQJ11dO1xuXHRcdFx0bW9uc3Rlci5tYXhIUCA9IG1zZ1tfdFsnTUVTU0FHRV9IUCddXTtcblx0XHR9XG5cdH1cblxuXHRkZWltb3MucmVuZGVyLlNjZW5lLnByb3RvdHlwZS5zeW5jQXR0YWNrWm9uZSA9IGZ1bmN0aW9uKGUpIHtcblx0XHQvL3dhaXQgZ2FtZSBzdGFydCBiZWZvcmUgc3RhcnQuLlxuXHRcdGlmKCFkZWltb3MuRW5naW5lLnJ1bm5pbmcpIHJldHVybjtcblxuXHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0dmFyIG1zZztcblxuXHRcdGlmKGVbX3RbJ01FU1NBR0UnXV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bXNnID0gZVtfdFsnTUVTU0FHRSddXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bXNnID0gZTtcblx0XHR9XG5cblx0XHQvL2FkZCBpdCBpZiBuZWVkZWRcblx0XHR2YXIgYXR0YWNrWm9uZSA9IG5ldyBkZWltb3MuZWxlbWVudC5BdHRhY2tab25lKFxuXHRcdFx0bXNnW190WydNRVNTQUdFX0VMRU1FTlRfSUQnXV0sXG5cdFx0XHRtc2dbX3RbJ01FU1NBR0VfUE9TSVRJT04nXV0sXG5cdFx0XHRtc2dbX3RbJ01FU1NBR0VfU0laRSddXSxcblx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9PV05FUiddXSxcblx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9EVVJBVElPTiddXVxuXHRcdCk7XG5cdFx0dGhpcy5hdHRhY2tab25lc1thdHRhY2tab25lLmlkXSA9IGF0dGFja1pvbmU7XG5cblx0XHRpZih0aGlzLmF2YXRhcnNbbXNnW190WydNRVNTQUdFX09XTkVSJ11dXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmF2YXRhcnNbbXNnW190WydNRVNTQUdFX09XTkVSJ11dXS5sYXN0QXR0YWNrID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0fVxuXG5cdFx0YXR0YWNrWm9uZS5yZW5kZXIoKTtcblx0fVxuXG5cdGRlaW1vcy5yZW5kZXIuU2NlbmUucHJvdG90eXBlLml0ZW1HcmFiYmVkID0gZnVuY3Rpb24oZSkge1xuXHRcdC8vd2FpdCBnYW1lIHN0YXJ0IGJlZm9yZSBzdGFydC4uXG5cdFx0aWYoIWRlaW1vcy5FbmdpbmUucnVubmluZykgcmV0dXJuO1xuXG5cdFx0Ly9jbGVhciBpdGVtXG5cdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblx0XHR2YXIgaXRlbSA9IHRoaXMuaXRlbXNbZVtfdFsnTUVTU0FHRSddXVtfdFsnTUVTU0FHRV9JVEVNJ11dXTtcblx0XHRpdGVtLmNsZWFuRG9tKCk7XG5cdFx0ZGVsZXRlIHRoaXMuaXRlbXNbaXRlbS5zZXJ2ZXJpZF07XG5cdFx0Ly9UT0RPIGFkZCBpdCB0byBsaXN0IG9mIGl0ZW0gaW4gY2xpZW50IHNpZGVcblxuXHRcdC8vY29ycmVjdCBhdmF0YXIgcG9zaXRpb25cblx0XHR2YXIgYXZfaWQgPSBlW190WydNRVNTQUdFJ11dW190WydNRVNTQUdFX1RPJ11dO1xuXHRcdHZhciBhdmF0YXIgPSBudWxsO1xuXHRcdGlmKCBkZWltb3MuRW5naW5lLmF2YXRhciAhPT0gdW5kZWZpbmVkICYmIFxuXHRcdFx0YXZfaWQgPT09IGRlaW1vcy5FbmdpbmUuYXZhdGFyLnNlcnZlcmlkXG5cdFx0KSB7XG5cdFx0XHRhdmF0YXIgPSBkZWltb3MuRW5naW5lLmF2YXRhcjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXZhdGFyID0gZGVpbW9zLkVuZ2luZS5zY2VuZS5hdmF0YXJzW2F2X2lkXTtcblx0XHR9XG5cdFx0YXZhdGFyLnBvc2l0aW9uLnggPSBlW190WydNRVNTQUdFJ11dW190WydNRVNTQUdFX1RPX1BPU0lUSU9OJ11dLng7XG5cdFx0YXZhdGFyLnBvc2l0aW9uLnkgPSBlW190WydNRVNTQUdFJ11dW190WydNRVNTQUdFX1RPX1BPU0lUSU9OJ11dLnk7XG5cdFx0YXZhdGFyLnJlbmRlcigpO1xuXHRcdGF2YXRhci5vbk1vdmUoKTtcblx0fVxuXG5cdGRlaW1vcy5yZW5kZXIuU2NlbmUucHJvdG90eXBlLmRlc3Ryb3lQcm9qZWN0aWxlID0gZnVuY3Rpb24ocHJvamVjdGlsZSkge1xuXHRcdC8vaWYgZXhzaXN0c1xuXHRcdGlmKCEhdGhpcy5wcm9qZWN0aWxlc1twcm9qZWN0aWxlLnNlcnZlcmlkXSkge1xuXHRcdFx0dGhpcy5wcm9qZWN0aWxlc1twcm9qZWN0aWxlLnNlcnZlcmlkXS5jbGVhbkRvbSgpO1xuXHRcdFx0ZGVsZXRlIHRoaXMucHJvamVjdGlsZXNbcHJvamVjdGlsZS5zZXJ2ZXJpZF07XG5cdFx0fVxuXHR9XG5cblx0ZGVpbW9zLnJlbmRlci5TY2VuZS5wcm90b3R5cGUuZWxlbWVudENvbGxpc2lvbiA9IGZ1bmN0aW9uKGUpIHtcblx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdHZhciBtZXNzYWdlID0gZVtfdFsnTUVTU0FHRSddXTtcblx0XHR2YXIgZnJvbUVsZW1lbnQgPSBudWxsO1xuXHRcdHZhciB0b0VsZW1lbnQgPSBudWxsO1xuXHRcdHZhciBpc0RlYWQgPSBtZXNzYWdlW190Lk1FU1NBR0VfSVNfREVBRF07XG5cdFx0c3dpdGNoKG1lc3NhZ2VbX3QuTUVTU0FHRV9GUk9NX1RZUEVdKVxuXHRcdHtcblx0XHRcdGNhc2UgX3QuTUVTU0FHRV9NT05TVEVSOlxuXHRcdFx0XHRmcm9tRWxlbWVudCA9IHRoaXMubW9uc3RlcnNbbWVzc2FnZVtfdC5NRVNTQUdFX0ZST01dXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIF90Lk1FU1NBR0VfSVRFTTpcblx0XHRcdFx0ZnJvbUVsZW1lbnQgPSB0aGlzLml0ZW1zW21lc3NhZ2VbX3QuTUVTU0FHRV9GUk9NXV07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBfdC5NRVNTQUdFX1BST0pFQ1RJTEU6XG5cdFx0XHRcdGZyb21FbGVtZW50ID0gdGhpcy5wcm9qZWN0aWxlc1ttZXNzYWdlW190Lk1FU1NBR0VfRlJPTV1dO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgX3QuTUVTU0FHRV9BVkFUQVI6XG5cdFx0XHRcdHZhciBpZCA9IG1lc3NhZ2VbX3QuTUVTU0FHRV9GUk9NXTtcblx0XHRcdFx0aWYoaWQgPT09IGRlaW1vcy5FbmdpbmUuYXZhdGFyLnNlcnZlcmlkKSB7XG5cdFx0XHRcdFx0ZnJvbUVsZW1lbnQgPSBkZWltb3MuRW5naW5lLmF2YXRhcjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmcm9tRWxlbWVudCA9IHRoaXMuYXZhdGFyc1tpZF07XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGlmKCFmcm9tRWxlbWVudCkgcmV0dXJuO1xuXG5cdFx0c3dpdGNoKG1lc3NhZ2VbX3QuTUVTU0FHRV9UT19UWVBFXSlcblx0XHR7XG5cdFx0XHRjYXNlIF90Lk1FU1NBR0VfTU9OU1RFUjpcblx0XHRcdFx0dG9FbGVtZW50ID0gdGhpcy5tb25zdGVyc1ttZXNzYWdlW190Lk1FU1NBR0VfVE9dXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIF90Lk1FU1NBR0VfSVRFTTpcblx0XHRcdFx0dG9FbGVtZW50ID0gdGhpcy5pdGVtc1ttZXNzYWdlW190Lk1FU1NBR0VfVE9dXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIF90Lk1FU1NBR0VfUFJPSkVDVElMRTpcblx0XHRcdFx0dG9FbGVtZW50ID0gdGhpcy5wcm9qZWN0aWxlc1ttZXNzYWdlW190Lk1FU1NBR0VfVE9dXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIF90Lk1FU1NBR0VfQVZBVEFSOlxuXHRcdFx0XHR2YXIgaWQgPSBtZXNzYWdlW190Lk1FU1NBR0VfVE9dO1xuXHRcdFx0XHRpZihpZCA9PT0gZGVpbW9zLkVuZ2luZS5hdmF0YXIuc2VydmVyaWQpIHtcblx0XHRcdFx0XHR0b0VsZW1lbnQgPSBkZWltb3MuRW5naW5lLmF2YXRhcjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0b0VsZW1lbnQgPSB0aGlzLmF2YXRhcnNbaWRdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRpZighdG9FbGVtZW50KSByZXR1cm47XG5cblx0XHRmcm9tRWxlbWVudC5wb3NpdGlvbi54ID0gbWVzc2FnZVtfdC5NRVNTQUdFX0ZST01fUE9TSVRJT05dLng7XG5cdFx0ZnJvbUVsZW1lbnQucG9zaXRpb24ueSA9IG1lc3NhZ2VbX3QuTUVTU0FHRV9GUk9NX1BPU0lUSU9OXS55O1xuXHRcdHRvRWxlbWVudC5wb3NpdGlvbi54ID0gbWVzc2FnZVtfdC5NRVNTQUdFX1RPX1BPU0lUSU9OXS54O1xuXHRcdHRvRWxlbWVudC5wb3NpdGlvbi55ID0gbWVzc2FnZVtfdC5NRVNTQUdFX1RPX1BPU0lUSU9OXS55O1xuXHRcdGZyb21FbGVtZW50LnJlbmRlcigpO1xuXHRcdHRvRWxlbWVudC5yZW5kZXIoKTtcblxuXHRcdHRvRWxlbWVudC50b3VjaGVkKGZyb21FbGVtZW50KTtcblx0XHRpZihpc0RlYWQpIHtcblx0XHRcdHRvRWxlbWVudC5kaWUoKTtcblx0XHR9XG5cdH1cblxufSkob3JnLmRieXplcm8uZGVpbW9zLCBkb2N1bWVudCk7IiwiLyoqXG4gKlxuICogRWxlbWVudCBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxNC8wMy8yMlxuICogQGRlc2NyaXB0aW9uIDogRWxlbWVudCBtb2RlbFxuICpcbiAqKi9cblxuKGZ1bmN0aW9uKGRlaW1vcyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblxuXHR2YXIgVmVjdG9yID0gb3JnLmRieXplcm8udG9vbHMuVmVjdG9yO1xuXHRkZWltb3MuZWxlbWVudCA9IGRlaW1vcy5lbGVtZW50IHx8IHt9O1xuXG5cdC8qKlxuXHQgKiBBdmF0YXIgY29uc3RydWN0b3Jcblx0ICpcblx0ICoqL1xuXHRkZWltb3MuZWxlbWVudC5FbGVtZW50ID0gZnVuY3Rpb24gKHBvc2l0aW9uLHNpemUsc2VydmVyaWQsZGVsdGFzaG93KSB7XG5cdFx0dGhpcy5jbGFzcyA9ICdlbGVtZW50Jztcblx0XHR0aGlzLm5hbWUgPSBudWxsO1xuXHRcdHRoaXMubmFtZVdpZHRoID0gbnVsbDtcblx0XHR0aGlzLm5hbWVIZWlnaHQgPSBudWxsO1xuXHRcdHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcblx0XHR0aGlzLnZlbG9jaXR5ID0gbmV3IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3RvcigwLDApO1xuXHRcdHRoaXMuYWNjZWxlcmF0aW9uID0gbmV3IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3RvcigwLDApO1xuXHRcdHRoaXMud2lkdGggPSBzaXplLng7XG5cdFx0dGhpcy5oZWlnaHQgPSBzaXplLnk7XG5cdFx0dGhpcy5sYXN0VXBkYXRlID0gbnVsbDtcblx0XHR0aGlzLm1hc3MgPSAxO1xuXHRcdHRoaXMudG9Nb3ZlID0gVmVjdG9yLlplcm8oKTtcblx0XHR0aGlzLmRlbHRhc2hvdyA9IGRlbHRhc2hvdzsgLy90cmFuc2xhdG9pbiB2ZWN0b3IgYXBwbGllZCB0byB0aGUgcmVuZGVyXG5cdFx0dGhpcy5kaWN0Q2xhc3MgPSB7fTsgLy9kaWN0b25uYWlyeSBsaW5raW5nIERPTSBjc3MgY2xhc3MgYW5kIHN0YXRlc1xuXHRcdHRoaXMucG9zaXRpb25TZXJ2ZXIgPSB7eDowLHk6MH07XG5cdFx0dGhpcy5hdHRhY2tSYXRlID0gMTAwO1xuXHRcdHRoaXMuaW5Nb3ZlID0gZmFsc2U7XG5cdFx0dGhpcy5pc0xhbmRlZCA9IGZhbHNlO1xuXHRcdHRoaXMubGFuZGVkQmxvY2sgPSBudWxsO1xuXHRcdHRoaXMuc2tpbiA9IG51bGw7XG5cdFx0dGhpcy5nb2luZ0Rvd24gPSBmYWxzZTtcblx0XHR0aGlzLm9yaWVudGVkID0gJ3JpZ2h0Jztcblx0XHR0aGlzLnNlcnZlcmlkID0gc2VydmVyaWQ7XG5cdFx0dGhpcy5jdXJyZW50QWN0aW9uID0gbnVsbDtcblx0XHR0aGlzLmRvbUVsZW1OYW1lID0gbnVsbDtcblx0XHR0aGlzLmRvbUVsZW1IUCA9IG51bGw7XG5cdFx0dGhpcy5zcGVha2VyID0gbnVsbDtcblx0XHR0aGlzLmRhbWFnZSA9IG51bGw7XG5cdFx0dGhpcy5wcm9qZWN0aWxlVHJhbnNsYXRpb24gPSB7fTtcblx0XHR0aGlzLnByb2plY3RpbGVUcmFuc2xhdGlvbi5sZWZ0ID0geyd4JzowLCd5JzowfTtcblx0XHR0aGlzLnByb2plY3RpbGVUcmFuc2xhdGlvbi5yaWdodCA9IHsneCc6MCwneSc6MH07XG5cdFx0Ly9tYXAgdG8gc2V0IHdpdGggd2hhdCBlbGVtZW50cyBhcmUgY29sbGlkYWJsZVxuXHRcdHRoaXMuY29sbGlzaW9uVHlwZUVuYWJsZWQgPSB7fTtcblxuXHRcdHRoaXMuY29sbGlzaW9uVHlwZUVuYWJsZWRbJ2Jsb2NrcyddID0gdHJ1ZTtcblx0XHR0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkWydnYW1lQXJlYSddID0gdHJ1ZTtcblx0XHR0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkWydwbGF0ZWZvcm1lJ10gPSB0cnVlO1xuXG5cdFx0Ly9vYmplY3QgY29sbGlzaW9ucyBhcmUgbWFuYWdlZCBieSBzZXJ2ZXJcblx0XHR0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkWydib251cyddID0gZmFsc2U7XG5cdFx0dGhpcy5jb2xsaXNpb25UeXBlRW5hYmxlZFsncHJvamVjdGlsZXMnXSA9IGZhbHNlO1xuXHRcdHRoaXMuY29sbGlzaW9uVHlwZUVuYWJsZWRbJ21vbnN0ZXJzJ10gPSBmYWxzZTtcblx0XHR0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkWydhdmF0YXJzJ10gPSBmYWxzZTtcblx0XHR0aGlzLm1heEhQID0gbnVsbDtcblx0XHR0aGlzLkhQID0gbnVsbDtcblxuXHRcdC8vc3RvcmUgaW5mb3JtYXRpb24gZm9yIGNvbGxpc2lvbnNcblx0XHR0aGlzLnZlcnRleFRMID0gbmV3IFZlY3Rvcih0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XG5cdFx0dGhpcy52ZXJ0ZXhCTCA9IG5ldyBWZWN0b3IodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCk7XG5cdFx0dGhpcy52ZXJ0ZXhUUiA9IG5ldyBWZWN0b3IodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCwgdGhpcy5wb3NpdGlvbi55KTtcblx0XHR0aGlzLnZlcnRleEJSID0gbmV3IFZlY3Rvcih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCk7XG5cblx0XHR0aGlzLnNraXBOZXh0VXBkYXRlQW5kTW92ZSA9IGZhbHNlO1xuXHR9XG5cblxuXHRkZWltb3MuZWxlbWVudC5FbGVtZW50LnByb3RvdHlwZSA9IHtcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRcdC8vbWFrZSBkb20gZWxlbWVudFxuXHRcdFx0dmFyIGRvbV9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGRvbV9lbGVtLnNldEF0dHJpYnV0ZShcImlkXCIsdGhpcy5kb21JZCk7XG5cblx0XHRcdGRvbV9lbGVtLnN0eWxlLndpZHRoID0gcGFyc2VJbnQodGhpcy53aWR0aCArIHRoaXMuZGVsdGFzaG93LngqMikrJ3B4Jztcblx0XHRcdGRvbV9lbGVtLnN0eWxlLmhlaWdodCAgPSBwYXJzZUludCh0aGlzLmhlaWdodCArIHRoaXMuZGVsdGFzaG93LnkqMikrJ3B4JztcblxuXHRcdFx0ZG9tX2VsZW0uc3R5bGUuZGlzcGxheSAgPSAnYmxvY2snO1xuXHRcdFx0ZG9tX2VsZW0uc3R5bGUucG9zaXRpb24gID0gJ2Fic29sdXRlJztcblxuXHRcdFx0dmFyIHRyYW5zbGF0aW9uID0gXCJ0cmFuc2xhdGUzZChcIisodGhpcy5wb3NpdGlvbi54LXRoaXMuZGVsdGFzaG93LngpK1wicHgsXCIrKHRoaXMucG9zaXRpb24ueS10aGlzLmRlbHRhc2hvdy55KStcInB4LDBweClcIjtcblx0XHRcdGRvbV9lbGVtLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zbGF0aW9uO1xuXHRcdFx0ZG9tX2VsZW0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNsYXRpb247XG5cblx0XHRcdGRlaW1vcy5FbmdpbmUuem9uZS5hcmVhLmFwcGVuZENoaWxkKGRvbV9lbGVtKTtcblxuXHRcdFx0dGhpcy5kb21FbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kb21JZCk7XG5cdFx0XHR0aGlzLmRvbUVsZW1XaWR0aCA9IHRoaXMuZG9tRWxlbS5vZmZzZXRXaWR0aDsvL3VzZWZ1bGwgZm9yIHBvc2l0aW9ubmluZyBuYW1lIGFuZCBzcGVha2VyXG5cdFx0XHR0aGlzLmRvbUVsZW1IZWlnaHQgPSB0aGlzLmRvbUVsZW0ub2Zmc2V0SGVpZ2h0Oy8vdXNlZnVsbCBmb3IgcG9zaXRpb25uaW5nIG5hbWUgYW5kIHNwZWFrZXJcblxuXHRcdFx0dGhpcy5pbml0QW5pbWF0aW9uKCk7XG5cblx0XHRcdGlmKCEhdGhpcy5IUCkge1xuXHRcdFx0XHR0aGlzLmluaXRIUCgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRkZXN0cm95OiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuY2xlYW5Eb20oKTtcblx0XHR9LFxuXG5cdFx0aW5pdEFuaW1hdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLmRpY3RDbGFzc1snd2Fsa2luZ19yaWdodCddXHRcdD0gdGhpcy5za2luKydBbmltYXRpb25XYWxraW5nUmlnaHQnO1xuXHRcdFx0dGhpcy5kaWN0Q2xhc3NbJ3dhbGtpbmdfbGVmdCddXHRcdD0gdGhpcy5za2luKydBbmltYXRpb25XYWxraW5nTGVmdCc7XG5cdFx0XHR0aGlzLmRpY3RDbGFzc1snc3RhbmRpbmdfcmlnaHQnXVx0PSB0aGlzLnNraW4rJ0FuaW1hdGlvblN0YW5kaW5nUmlnaHQnO1xuXHRcdFx0dGhpcy5kaWN0Q2xhc3NbJ3N0YW5kaW5nX2xlZnQnXVx0XHQ9IHRoaXMuc2tpbisnQW5pbWF0aW9uU3RhbmRpbmdMZWZ0Jztcblx0XHRcdHRoaXMuZGljdENsYXNzWydmbHlpbmdfcmlnaHQnXVx0XHQ9IHRoaXMuc2tpbisnQW5pbWF0aW9uRmx5aW5nUmlnaHQnO1xuXHRcdFx0dGhpcy5kaWN0Q2xhc3NbJ2ZseWluZ19sZWZ0J11cdFx0PSB0aGlzLnNraW4rJ0FuaW1hdGlvbkZseWluZ0xlZnQnO1xuXHRcdFx0dGhpcy5kaWN0Q2xhc3NbJ3Nob290aW5nX3JpZ2h0J11cdD0gdGhpcy5za2luKydBbmltYXRpb25TaG9vdGluZ1JpZ2h0Jztcblx0XHRcdHRoaXMuZGljdENsYXNzWydzaG9vdGluZ19sZWZ0J11cdFx0PSB0aGlzLnNraW4rJ0FuaW1hdGlvblNob290aW5nTGVmdCc7XG5cdFx0XHR0aGlzLmRpY3RDbGFzc1snZnJvbnQnXVx0XHRcdFx0PSB0aGlzLnNraW4rJ0FuaW1hdGlvbkZyb250Jztcblx0XHR9LFxuXG5cdFx0Z2V0RG9tRWxlbTogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5kb21FbGVtO1xuXHRcdH0sXG5cblx0XHR1cGRhdGU6IGZ1bmN0aW9uKGR0LCBub3cpIHtcblx0XHRcdGlmKCEhdGhpcy5za2lwTmV4dFVwZGF0ZUFuZE1vdmUpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvL2ZseSBpZiB3ZSBoYXZlIGEgbmVnYXRpdmUgdmVydGljYWwgZGVwbGFjZW1lbnQgT1Igd2UgbGVhdmUgb3VyIGJsb2Nrc1xuXHRcdFx0aWYoKHRoaXMuaXNMYW5kZWQgJiYgdGhpcy52ZWxvY2l0eS55IDwgMCkgfHxcblx0XHRcdFx0KCEhdGhpcy5sYW5kZWRCbG9jayAmJiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA8IHRoaXMubGFuZGVkQmxvY2sudmVydGV4VEwueCB8fCB0aGlzLnBvc2l0aW9uLnggPiB0aGlzLmxhbmRlZEJsb2NrLnZlcnRleFRSLnggKSkpIHtcblx0XHRcdFx0dGhpcy51bmxhbmRlZCgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvL2FkZGluZyBncmF2aXR5IGlmIHdlIGFyZSBub3QgbGFuZGVkIG9yIG91dHNpZGUgb2Ygb3VyIGxhbmRlZCBibG9ja1xuXHRcdFx0aWYoIXRoaXMuaXNMYW5kZWQpIHtcblx0XHRcdFx0dGhpcy5hY2NlbGVyYXRpb24gPSBkZWltb3MucGh5c2ljLkdyYXZpdHkuZHVwbGljYXRlKCk7XG5cdFx0XHRcdHRoaXMuYWNjZWxlcmF0aW9uLnkgKj0gIHRoaXMubWFzcztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYWNjZWxlcmF0aW9uLnkgPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcmV0dXJuSW50ZWdyYXRlID0gb3JnLmRieXplcm8udG9vbHMuUGh5c2ljcy5pbnRlZ3JhdGVLTTQodGhpcy5wb3NpdGlvbix0aGlzLnZlbG9jaXR5LHRoaXMuYWNjZWxlcmF0aW9uLGR0LzEwMDApO1xuXHRcdFx0dGhpcy50b01vdmUueCArPSByZXR1cm5JbnRlZ3JhdGUuZHgueDtcblx0XHRcdHRoaXMudG9Nb3ZlLnkgKz0gcmV0dXJuSW50ZWdyYXRlLmR4Lnk7XG5cdFx0XHR0aGlzLnZlbG9jaXR5LnggKz0gcmV0dXJuSW50ZWdyYXRlLmR2Lng7XG5cdFx0XHR0aGlzLnZlbG9jaXR5LnkgKz0gcmV0dXJuSW50ZWdyYXRlLmR2Lnk7XG5cdFx0XHR0aGlzLnRvTW92ZS54ICs9ICh0aGlzLnZlbG9jaXR5LnggKiBkdC8xMDAwKTtcblx0XHRcdHRoaXMudG9Nb3ZlLnkgKz0gKHRoaXMudmVsb2NpdHkueSAqIGR0LzEwMDApO1xuXG5cdFx0XHR0aGlzLnRvTW92ZS54ID0gdGhpcy50b01vdmUueDtcblx0XHRcdHRoaXMudG9Nb3ZlLnkgPSB0aGlzLnRvTW92ZS55O1xuXG5cdFx0XHR0aGlzLmxhc3RVcGRhdGUgPSBub3c7XG5cdFx0fSxcblxuXHRcdG1vdmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoISF0aGlzLnNraXBOZXh0VXBkYXRlQW5kTW92ZSkge1xuXHRcdFx0XHR0aGlzLnNraXBOZXh0VXBkYXRlQW5kTW92ZSA9IGZhbHNlO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmKCB0aGlzLnRvTW92ZS54ID09PSAwICYmIHRoaXMudG9Nb3ZlLnkgPT09MCkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRBY3Rpb24gPSAnc3RhbmQnO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgY3VycmVudE1vdmVtZW50ID0gdGhpcy50b01vdmU7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBpbml0aWFsUG9zaXRpb24gPSB7eDp0aGlzLnBvc2l0aW9uLngseTp0aGlzLnBvc2l0aW9uLnl9O1xuXHRcdFx0dmFyIGRvbUVsZW0gPSB0aGlzLmRvbUVsZW07XG5cblx0XHRcdC8vbW92ZSB+fn5+flxuXHRcdFx0dGhpcy5wb3NpdGlvbi5hZGQoY3VycmVudE1vdmVtZW50KTtcblxuXHRcdFx0Ly9jaGVjayBjb2xsaXNpb24gd2l0aCBab25lXG5cdFx0XHRpZih0aGlzLnBvc2l0aW9uLnggPCAwKSB7XG5cdFx0XHRcdHRoaXMucG9zaXRpb24ueCA9IDA7XG5cdFx0XHRcdHRoaXMub25BcmVhQ29sbGlzaW9uTGVmdCgpO1xuXHRcdFx0fVxuXHRcdFx0aWYodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+IGRlaW1vcy5FbmdpbmUuem9uZS53aWR0aCkge1xuXHRcdFx0XHR0aGlzLnBvc2l0aW9uLnggPSBkZWltb3MuRW5naW5lLnpvbmUud2lkdGggLSB0aGlzLndpZHRoO1xuXHRcdFx0XHR0aGlzLm9uQXJlYUNvbGxpc2lvblJpZ2h0KCk7XG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLnBvc2l0aW9uLnkgPCAwKSB7XG5cdFx0XHRcdHRoaXMucG9zaXRpb24ueSA9IDA7XG5cdFx0XHRcdHRoaXMub25BcmVhQ29sbGlzaW9uVG9wKCk7XG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA+IGRlaW1vcy5FbmdpbmUuem9uZS5oZWlnaHQpIHtcblx0XHRcdFx0dGhpcy5wb3NpdGlvbi55ID0gZGVpbW9zLkVuZ2luZS56b25lLmhlaWdodCAtIHRoaXMuaGVpZ2h0O1xuXHRcdFx0XHR0aGlzLm9uQXJlYUNvbGxpc2lvbkJvdHRvbSgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvL2NvbGlzaW9uIHdpdGggYmxvYWNrc1xuXHRcdFx0aWYodGhpcy5jb2xsaXNpb25UeXBlRW5hYmxlZFsnYmxvY2tzJ10pIHRoaXMuY2hlY2tCbG9ja3NDb2xsaXNpb24oIGN1cnJlbnRNb3ZlbWVudCApO1xuXHRcdFx0aWYodGhpcy5jb2xsaXNpb25UeXBlRW5hYmxlZFsnYm9udXMnXSkgdGhpcy5jaGVja0VsZW1lbnRDb2xsaXNpb24oIGN1cnJlbnRNb3ZlbWVudCwgZGVpbW9zLkVuZ2luZS5zY2VuZS5pdGVtcyApO1xuXHRcdFx0aWYodGhpcy5jb2xsaXNpb25UeXBlRW5hYmxlZFsnbW9uc3RlcnMnXSkgdGhpcy5jaGVja0VsZW1lbnRDb2xsaXNpb24oIGN1cnJlbnRNb3ZlbWVudCwgZGVpbW9zLkVuZ2luZS5zY2VuZS5tb25zdGVycyApO1xuXHRcdFx0aWYodGhpcy5jb2xsaXNpb25UeXBlRW5hYmxlZFsncHJvamVjdGlsZXMnXSkgdGhpcy5jaGVja0VsZW1lbnRDb2xsaXNpb24oIGN1cnJlbnRNb3ZlbWVudCwgZGVpbW9zLkVuZ2luZS5zY2VuZS5wcm9qZWN0aWxlcyApO1xuXG5cdFx0XHR2YXIgZGVsdGFNb3ZlID0gb3JnLmRieXplcm8udG9vbHMuVmVjdG9yLlN1Yih0aGlzLnBvc2l0aW9uLGluaXRpYWxQb3NpdGlvbik7XG5cdFx0XHRpZihkZWx0YU1vdmUueCAhPSAwIHx8IGRlbHRhTW92ZS55ICE9MCkge1xuXHRcdFx0XHQvL3NlbmQgc3luYyB3aGVuIG1vdmVcblx0XHRcdFx0dGhpcy5pbk1vdmUgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLnJlbmRlcigpO1xuXHRcdFx0XHR0aGlzLm9uTW92ZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5pbk1vdmUgPSBmYWxzZVxuXHRcdFx0fVxuXG5cdFx0XHQvL3Jlc2V0IG1vdmVtZW50XG5cdFx0XHR0aGlzLnRvTW92ZSA9IFZlY3Rvci5aZXJvKCk7XG5cblx0XHRcdC8vc2V0IGFuaW1hdGlvblxuXHRcdFx0dGhpcy5jdXJyZW50QWN0aW9uO1xuXHRcdFx0aWYoZGVsdGFNb3ZlLnggIT09IDApIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50QWN0aW9uID0gJ3dhbGsnO1xuXHRcdFx0XHRpZihkZWx0YU1vdmUueCA+IDApIHRoaXMub3JpZW50ZWQgPSAncmlnaHQnO1xuXHRcdFx0XHRpZihkZWx0YU1vdmUueCA8IDApIHRoaXMub3JpZW50ZWQgPSAnbGVmdCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRBY3Rpb24gPSAnc3RhbmQnO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGVsdGFNb3ZlLnkgIT0gMCkgdGhpcy5jdXJyZW50QWN0aW9uID0gJ2ZseSc7XG5cblx0XHR9LFxuXG5cdFx0Y2hlY2tCbG9ja3NDb2xsaXNpb246IGZ1bmN0aW9uKCBjdXJyZW50TW92ZW1lbnQgKSB7XG5cdFx0XHQvL2NoZWNrIGZvciBjb2xsaXNpb25cblx0XHRcdHZhciBibG9ja3MgPSBvcmcuZGJ5emVyby5kZWltb3MuRW5naW5lLnpvbmUuYmxvY2tzO1xuXHRcdFx0dmFyIHRlc3RDb2xsaXNpb24gPSBudWxsO1xuXHRcdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhibG9ja3MpO1xuXHRcdFx0dmFyIGJsb2NrLGk7XG5cdFx0XHRmb3IoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGJsb2NrID0gYmxvY2tzW2tleXNbaV1dO1xuXHRcdFx0XHQvL2RvIG5vdCBjaGVjayBpZiB3ZSBub3QgY29sbGlkZSBvbiBwbGF0ZWZvcm1lXG5cdFx0XHRcdGlmKGJsb2NrLnR5cGUudHlwZSA9PT0gJ3BsYXRlZm9ybScgJiYgIXRoaXMuY29sbGlzaW9uVHlwZUVuYWJsZWRbJ3BsYXRlZm9ybWUnXSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vd2UgZG9udCBjaGVjayBmb3IgY29sbGlzaW9uIGlmIGF2YXRhciBnbyBib3R0b20gYW5kIGJsb2NrIGlzIGEgcGxhdGVmb3JtXG5cdFx0XHRcdC8vY29sbGlzaW9uIGZyb20gYXZhdGFyIGJvdHRvbVxuXHRcdFx0XHRpZihibG9jay50eXBlLnR5cGUgIT0gJ3BsYXRlZm9ybScgfHwgKGJsb2NrLnR5cGUudHlwZSA9PSAncGxhdGVmb3JtJyAmJiB0aGlzLmdvaW5nRG93biA9PSBmYWxzZSkpIHtcblx0XHRcdFx0XHRpZihjdXJyZW50TW92ZW1lbnQueSA+IDApIHtcblx0XHRcdFx0XHRcdHRlc3RDb2xsaXNpb24gPSBvcmcuZGJ5emVyby50b29scy5QaHlzaWNzLlNlZ21lbnRzQ29sbGlzaW9uKFxuXHRcdFx0XHRcdFx0XHR0aGlzLnZlcnRleEJMLFxuXHRcdFx0XHRcdFx0XHR7eDp0aGlzLnBvc2l0aW9uLngseTp0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodH0sXG5cdFx0XHRcdFx0XHRcdGJsb2NrLnZlcnRleFRMLFxuXHRcdFx0XHRcdFx0XHRibG9jay52ZXJ0ZXhUUlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYodGVzdENvbGxpc2lvbiAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5vbkJsb2NrQ29sbGlzaW9uQm90dG9tKHRlc3RDb2xsaXNpb24sYmxvY2spO1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dGVzdENvbGxpc2lvbiA9IG9yZy5kYnl6ZXJvLnRvb2xzLlBoeXNpY3MuU2VnbWVudHNDb2xsaXNpb24oXG5cdFx0XHRcdFx0XHRcdHRoaXMudmVydGV4QlIsXG5cdFx0XHRcdFx0XHRcdHt4OnRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgseTp0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodH0sXG5cdFx0XHRcdFx0XHRcdGJsb2NrLnZlcnRleFRMLFxuXHRcdFx0XHRcdFx0XHRibG9jay52ZXJ0ZXhUUlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYodGVzdENvbGxpc2lvbiAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5vbkJsb2NrQ29sbGlzaW9uQm90dG9tKHRlc3RDb2xsaXNpb24sYmxvY2spO1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvL3dlIHN0b3AgaGVyZSBmb3IgcGxhdGVmb3JtZVxuXHRcdFx0XHRpZihibG9jay50eXBlLnR5cGUgPT0gJ3BsYXRlZm9ybScpIGNvbnRpbnVlO1xuXG5cdFx0XHRcdC8vY29sbGlzaW9uIGZyb20gYXZhdGFyIHRvcFxuXHRcdFx0XHRpZihjdXJyZW50TW92ZW1lbnQueSA8IDApIHtcblx0XHRcdFx0XHR0ZXN0Q29sbGlzaW9uID0gb3JnLmRieXplcm8udG9vbHMuUGh5c2ljcy5TZWdtZW50c0NvbGxpc2lvbihcblx0XHRcdFx0XHRcdHRoaXMudmVydGV4VEwsXG5cdFx0XHRcdFx0XHR7eDp0aGlzLnBvc2l0aW9uLngseTp0aGlzLnBvc2l0aW9uLnl9LFxuXHRcdFx0XHRcdFx0YmxvY2sudmVydGV4QkwsXG5cdFx0XHRcdFx0XHRibG9jay52ZXJ0ZXhCUlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYodGVzdENvbGxpc2lvbiAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdHRoaXMub25CbG9ja0NvbGxpc2lvblRvcCh0ZXN0Q29sbGlzaW9uLGJsb2NrKTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRlc3RDb2xsaXNpb24gPSBvcmcuZGJ5emVyby50b29scy5QaHlzaWNzLlNlZ21lbnRzQ29sbGlzaW9uKFxuXHRcdFx0XHRcdFx0dGhpcy52ZXJ0ZXhUUixcblx0XHRcdFx0XHRcdHt4OnRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgseTp0aGlzLnBvc2l0aW9uLnl9LFxuXHRcdFx0XHRcdFx0YmxvY2sudmVydGV4QkwsXG5cdFx0XHRcdFx0XHRibG9jay52ZXJ0ZXhCUlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYodGVzdENvbGxpc2lvbiAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdHRoaXMub25CbG9ja0NvbGxpc2lvblRvcCh0ZXN0Q29sbGlzaW9uLGJsb2NrKTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vY29sbGlzaW9uIGZyb20gYXZhdGFyIGxlZnRcblx0XHRcdFx0aWYoY3VycmVudE1vdmVtZW50LnggPCAwKSB7XG5cdFx0XHRcdFx0dGVzdENvbGxpc2lvbiA9IG9yZy5kYnl6ZXJvLnRvb2xzLlBoeXNpY3MuU2VnbWVudHNDb2xsaXNpb24oXG5cdFx0XHRcdFx0XHR0aGlzLnZlcnRleFRMLFxuXHRcdFx0XHRcdFx0e3g6dGhpcy5wb3NpdGlvbi54LHk6dGhpcy5wb3NpdGlvbi55fSxcblx0XHRcdFx0XHRcdGJsb2NrLnZlcnRleFRSLFxuXHRcdFx0XHRcdFx0YmxvY2sudmVydGV4QlJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmKHRlc3RDb2xsaXNpb24gIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9uQmxvY2tDb2xsaXNpb25MZWZ0KHRlc3RDb2xsaXNpb24sYmxvY2spO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGVzdENvbGxpc2lvbiA9IG9yZy5kYnl6ZXJvLnRvb2xzLlBoeXNpY3MuU2VnbWVudHNDb2xsaXNpb24oXG5cdFx0XHRcdFx0XHR0aGlzLnZlcnRleEJMLFxuXHRcdFx0XHRcdFx0e3g6dGhpcy5wb3NpdGlvbi54LHk6dGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHR9LFxuXHRcdFx0XHRcdFx0YmxvY2sudmVydGV4VFIsXG5cdFx0XHRcdFx0XHRibG9jay52ZXJ0ZXhCUlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYodGVzdENvbGxpc2lvbiAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdHRoaXMub25CbG9ja0NvbGxpc2lvbkxlZnQodGVzdENvbGxpc2lvbixibG9jayk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvL2NvbGxpc2lvbiBmcm9tIGF2YXRhciByaWdodFxuXHRcdFx0XHRpZihjdXJyZW50TW92ZW1lbnQueCA+IDApIHtcblx0XHRcdFx0XHR0ZXN0Q29sbGlzaW9uID0gb3JnLmRieXplcm8udG9vbHMuUGh5c2ljcy5TZWdtZW50c0NvbGxpc2lvbihcblx0XHRcdFx0XHRcdHRoaXMudmVydGV4VFIsXG5cdFx0XHRcdFx0XHR7eDp0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLHk6dGhpcy5wb3NpdGlvbi55fSxcblx0XHRcdFx0XHRcdGJsb2NrLnZlcnRleFRMLFxuXHRcdFx0XHRcdFx0YmxvY2sudmVydGV4Qkxcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmKHRlc3RDb2xsaXNpb24gIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9uQmxvY2tDb2xsaXNpb25SaWdodCh0ZXN0Q29sbGlzaW9uLGJsb2NrKTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRlc3RDb2xsaXNpb24gPSBvcmcuZGJ5emVyby50b29scy5QaHlzaWNzLlNlZ21lbnRzQ29sbGlzaW9uKFxuXHRcdFx0XHRcdFx0dGhpcy52ZXJ0ZXhCUixcblx0XHRcdFx0XHRcdHt4OnRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgseTp0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodH0sXG5cdFx0XHRcdFx0XHRibG9jay52ZXJ0ZXhUTCxcblx0XHRcdFx0XHRcdGJsb2NrLnZlcnRleEJMXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZih0ZXN0Q29sbGlzaW9uICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkJsb2NrQ29sbGlzaW9uUmlnaHQodGVzdENvbGxpc2lvbixibG9jayk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Y2hlY2tFbGVtZW50Q29sbGlzaW9uOiBmdW5jdGlvbiggY3VycmVudE1vdmVtZW50LCBlbGVtZW50cyApIHtcblx0XHRcdHZhciB0ZXN0Q29sbGlzaW9uID0gbnVsbDtcblx0XHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXMoZWxlbWVudHMpO1xuXHRcdFx0dmFyIGksZWxlbWVudDtcblx0XHRcdGZvcihpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0ZWxlbWVudCA9IGVsZW1lbnRzW2tleXNbaV1dO1xuXHRcdFx0XHQvL2NvbGxpc2lvbiBmcm9tIGF2YXRhciBib3R0b21cblx0XHRcdFx0aWYoY3VycmVudE1vdmVtZW50LnkgPiAwKSB7XG5cdFx0XHRcdFx0dGVzdENvbGxpc2lvbiA9IG9yZy5kYnl6ZXJvLnRvb2xzLlBoeXNpY3MuU2VnbWVudHNDb2xsaXNpb24oXG5cdFx0XHRcdFx0XHR0aGlzLnZlcnRleEJMLFxuXHRcdFx0XHRcdFx0e3g6dGhpcy5wb3NpdGlvbi54LHk6dGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHR9LFxuXHRcdFx0XHRcdFx0ZWxlbWVudC52ZXJ0ZXhUTCxcblx0XHRcdFx0XHRcdGVsZW1lbnQudmVydGV4VFJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmKHRlc3RDb2xsaXNpb24gIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9uRWxlbWVudENvbGxpc2lvbkJvdHRvbSh0ZXN0Q29sbGlzaW9uLGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGVzdENvbGxpc2lvbiA9IG9yZy5kYnl6ZXJvLnRvb2xzLlBoeXNpY3MuU2VnbWVudHNDb2xsaXNpb24oXG5cdFx0XHRcdFx0XHR0aGlzLnZlcnRleEJSLFxuXHRcdFx0XHRcdFx0e3g6dGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCx5OnRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0fSxcblx0XHRcdFx0XHRcdGVsZW1lbnQudmVydGV4VEwsXG5cdFx0XHRcdFx0XHRlbGVtZW50LnZlcnRleFRSXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZih0ZXN0Q29sbGlzaW9uICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkVsZW1lbnRDb2xsaXNpb25Cb3R0b20odGVzdENvbGxpc2lvbixlbGVtZW50KTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vY29sbGlzaW9uIGZyb20gYXZhdGFyIHRvcFxuXHRcdFx0XHRpZihjdXJyZW50TW92ZW1lbnQueSA8IDApIHtcblx0XHRcdFx0XHR0ZXN0Q29sbGlzaW9uID0gb3JnLmRieXplcm8udG9vbHMuUGh5c2ljcy5TZWdtZW50c0NvbGxpc2lvbihcblx0XHRcdFx0XHRcdHRoaXMudmVydGV4VEwsXG5cdFx0XHRcdFx0XHR7eDp0aGlzLnBvc2l0aW9uLngseTp0aGlzLnBvc2l0aW9uLnl9LFxuXHRcdFx0XHRcdFx0ZWxlbWVudC52ZXJ0ZXhCTCxcblx0XHRcdFx0XHRcdGVsZW1lbnQudmVydGV4QlJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmKHRlc3RDb2xsaXNpb24gIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9uRWxlbWVudENvbGxpc2lvblRvcCh0ZXN0Q29sbGlzaW9uLGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGVzdENvbGxpc2lvbiA9IG9yZy5kYnl6ZXJvLnRvb2xzLlBoeXNpY3MuU2VnbWVudHNDb2xsaXNpb24oXG5cdFx0XHRcdFx0XHR0aGlzLnZlcnRleFRSLFxuXHRcdFx0XHRcdFx0e3g6dGhpcy5wb3NpdGlvbi54LHk6dGhpcy5wb3NpdGlvbi55fSxcblx0XHRcdFx0XHRcdGVsZW1lbnQudmVydGV4QkwsXG5cdFx0XHRcdFx0XHRlbGVtZW50LnZlcnRleEJSXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZih0ZXN0Q29sbGlzaW9uICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkVsZW1lbnRDb2xsaXNpb25Ub3AodGVzdENvbGxpc2lvbixlbGVtZW50KTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vY29sbGlzaW9uIGZyb20gYXZhdGFyIGxlZnRcblx0XHRcdFx0aWYoY3VycmVudE1vdmVtZW50LnggPCAwKSB7XG5cdFx0XHRcdFx0dGVzdENvbGxpc2lvbiA9IG9yZy5kYnl6ZXJvLnRvb2xzLlBoeXNpY3MuU2VnbWVudHNDb2xsaXNpb24oXG5cdFx0XHRcdFx0XHR0aGlzLnZlcnRleFRMLFxuXHRcdFx0XHRcdFx0e3g6dGhpcy5wb3NpdGlvbi54LHk6dGhpcy5wb3NpdGlvbi55fSxcblx0XHRcdFx0XHRcdGVsZW1lbnQudmVydGV4VFIsXG5cdFx0XHRcdFx0XHRlbGVtZW50LnZlcnRleEJSXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZih0ZXN0Q29sbGlzaW9uICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkVsZW1lbnRDb2xsaXNpb25MZWZ0KHRlc3RDb2xsaXNpb24sZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0ZXN0Q29sbGlzaW9uID0gb3JnLmRieXplcm8udG9vbHMuUGh5c2ljcy5TZWdtZW50c0NvbGxpc2lvbihcblx0XHRcdFx0XHRcdHRoaXMudmVydGV4QkwsXG5cdFx0XHRcdFx0XHR7eDp0aGlzLnBvc2l0aW9uLngseTp0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodH0sXG5cdFx0XHRcdFx0XHRlbGVtZW50LnZlcnRleFRSLFxuXHRcdFx0XHRcdFx0ZWxlbWVudC52ZXJ0ZXhCUlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYodGVzdENvbGxpc2lvbiAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdHRoaXMub25FbGVtZW50Q29sbGlzaW9uTGVmdCh0ZXN0Q29sbGlzaW9uLGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly9jb2xsaXNpb24gZnJvbSBhdmF0YXIgcmlnaHRcblx0XHRcdFx0aWYoY3VycmVudE1vdmVtZW50LnggPiAwKSB7XG5cdFx0XHRcdFx0dGVzdENvbGxpc2lvbiA9IG9yZy5kYnl6ZXJvLnRvb2xzLlBoeXNpY3MuU2VnbWVudHNDb2xsaXNpb24oXG5cdFx0XHRcdFx0XHR0aGlzLnZlcnRleFRSLFxuXHRcdFx0XHRcdFx0e3g6dGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCx5OnRoaXMucG9zaXRpb24ueX0sXG5cdFx0XHRcdFx0XHRlbGVtZW50LnZlcnRleFRMLFxuXHRcdFx0XHRcdFx0ZWxlbWVudC52ZXJ0ZXhCTFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYodGVzdENvbGxpc2lvbiAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdHRoaXMub25FbGVtZW50Q29sbGlzaW9uUmlnaHQodGVzdENvbGxpc2lvbixlbGVtZW50KTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRlc3RDb2xsaXNpb24gPSBvcmcuZGJ5emVyby50b29scy5QaHlzaWNzLlNlZ21lbnRzQ29sbGlzaW9uKFxuXHRcdFx0XHRcdFx0dGhpcy52ZXJ0ZXhCUixcblx0XHRcdFx0XHRcdHt4OnRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgseTp0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodH0sXG5cdFx0XHRcdFx0XHRlbGVtZW50LnZlcnRleFRMLFxuXHRcdFx0XHRcdFx0ZWxlbWVudC52ZXJ0ZXhCTFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYodGVzdENvbGxpc2lvbiAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdHRoaXMub25FbGVtZW50Q29sbGlzaW9uUmlnaHQodGVzdENvbGxpc2lvbixlbGVtZW50KTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGRvbV9lbGVtID0gdGhpcy5kb21FbGVtO1xuXHRcdFx0aWYodGhpcy5wb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHZhciB0cmFuc2xhdGlvbiA9IFwidHJhbnNsYXRlM2QoXCIrcGFyc2VJbnQodGhpcy5wb3NpdGlvbi54IC0gcGFyc2VJbnQodGhpcy5kZWx0YXNob3cueCkpK1wicHgsXCIrcGFyc2VJbnQodGhpcy5wb3NpdGlvbi55IC0gcGFyc2VJbnQodGhpcy5kZWx0YXNob3cueSkpK1wicHgsMHB4KVwiO1xuXHRcdFx0XHRkb21fZWxlbS5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2xhdGlvbjtcblx0XHRcdFx0ZG9tX2VsZW0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNsYXRpb247XG5cblx0XHRcdFx0aWYoISF0aGlzLkhQKSB7XG5cdFx0XHRcdFx0dGhpcy5yZW5kZXJIUCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblxuXHRcdGxhbmRlZDogZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0dGhpcy5pc0xhbmRlZCA9IHRydWU7XG5cdFx0XHR0aGlzLmxhbmRlZEJsb2NrID0gZWxlbWVudDtcblx0XHRcdHRoaXMub25KdXN0TGFuZCgpXG5cdFx0fSxcblxuXHRcdHVubGFuZGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuaXNMYW5kZWQgPSBmYWxzZTtcblx0XHRcdHRoaXMubGFuZGVkQmxvY2sgPSBudWxsO1xuXHRcdFx0dGhpcy5vblVubGFuZCgpXG5cdFx0fSxcblxuXHRcdG9uSnVzdExhbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly9zdHViXG5cdFx0fSxcblxuXHRcdG9uVW5sYW5kOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vc3R1YlxuXHRcdH0sXG5cblx0XHRvbk1vdmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy52ZXJ0ZXhUTC54ID0gdGhpcy5wb3NpdGlvbi54O1xuXHRcdFx0dGhpcy52ZXJ0ZXhUTC55ID0gdGhpcy5wb3NpdGlvbi55O1xuXHRcdFx0dGhpcy52ZXJ0ZXhCTC54ID0gdGhpcy5wb3NpdGlvbi54O1xuXHRcdFx0dGhpcy52ZXJ0ZXhCTC55ID0gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQ7XG5cdFx0XHR0aGlzLnZlcnRleFRSLnggPSB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoO1xuXHRcdFx0dGhpcy52ZXJ0ZXhUUi55ID0gdGhpcy5wb3NpdGlvbi55O1xuXHRcdFx0dGhpcy52ZXJ0ZXhCUi54ID0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aDtcblx0XHRcdHRoaXMudmVydGV4QlIueSA9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0O1xuXHRcdH0sXG5cblx0XHRvbkJsb2NrQ29sbGlzaW9uOiBmdW5jdGlvbiggY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQgKSB7XG5cdFx0fSxcblxuXHRcdG9uQXJlYUNvbGxpc2lvbjogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL3N0dWJcblx0XHR9LFxuXG5cdFx0b25FbGVtZW50Q29sbGlzaW9uOiBmdW5jdGlvbihjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCkge1xuXHRcdFx0Y29sbGlzaW9uRWxlbWVudC5kZXN0cm95KCk7XG5cdFx0fSxcblxuXHRcdG9uQXJlYUNvbGxpc2lvblJpZ2h0OiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMudmVsb2NpdHkueCA9IDA7XG5cdFx0XHR0aGlzLm9uQXJlYUNvbGxpc2lvbigpO1xuXHRcdH0sXG5cblx0XHRvbkFyZWFDb2xsaXNpb25MZWZ0OiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMudmVsb2NpdHkueCA9IDA7XG5cdFx0XHR0aGlzLm9uQXJlYUNvbGxpc2lvbigpO1xuXHRcdH0sXG5cblx0XHRvbkFyZWFDb2xsaXNpb25Ub3A6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy52ZWxvY2l0eS55ID0gMDtcblx0XHRcdHRoaXMub25BcmVhQ29sbGlzaW9uKCk7XG5cdFx0fSxcblxuXHRcdG9uQXJlYUNvbGxpc2lvbkJvdHRvbTogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnZlbG9jaXR5LnkgPSAwO1xuXHRcdFx0dGhpcy5vbkFyZWFDb2xsaXNpb24oKTtcblx0XHRcdHRoaXMubGFuZGVkKGZhbHNlKTtcblx0XHR9LFxuXG5cdFx0b25FbGVtZW50Q29sbGlzaW9uUmlnaHQ6IGZ1bmN0aW9uKGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50KSB7XG5cdFx0XHR0aGlzLm9uRWxlbWVudENvbGxpc2lvbihjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCk7XG5cdFx0fSxcblxuXHRcdG9uRWxlbWVudENvbGxpc2lvbkxlZnQ6IGZ1bmN0aW9uKGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50KSB7XG5cdFx0XHR0aGlzLm9uRWxlbWVudENvbGxpc2lvbihjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCk7XG5cdFx0fSxcblxuXHRcdG9uRWxlbWVudENvbGxpc2lvblRvcDogZnVuY3Rpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQpIHtcblx0XHRcdHRoaXMub25FbGVtZW50Q29sbGlzaW9uKGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50KTtcblx0XHR9LFxuXG5cdFx0b25FbGVtZW50Q29sbGlzaW9uQm90dG9tOiBmdW5jdGlvbihjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCkge1xuXHRcdFx0dGhpcy5vbkVsZW1lbnRDb2xsaXNpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQpO1xuXHRcdH0sXG5cblx0XHRvbkJsb2NrQ29sbGlzaW9uQm90dG9tOiBmdW5jdGlvbiggY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQgKSB7XG5cdFx0XHR0aGlzLmxhbmRlZEJsb2NrID0gY29sbGlzaW9uRWxlbWVudDtcblx0XHRcdHRoaXMucG9zaXRpb24ueSA9IGNvbGxpc2lvbkNvb3JkLnkgLSB0aGlzLmhlaWdodDtcblx0XHRcdHRoaXMudmVsb2NpdHkueSA9IDA7XG5cdFx0XHR0aGlzLmxhbmRlZChjb2xsaXNpb25FbGVtZW50KTtcblx0XHRcdHRoaXMub25CbG9ja0NvbGxpc2lvbihjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCApO1xuXHRcdH0sXG5cblx0XHRvbkJsb2NrQ29sbGlzaW9uVG9wOiBmdW5jdGlvbiggY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQgKSB7XG5cdFx0XHR0aGlzLnBvc2l0aW9uLnkgPSBjb2xsaXNpb25Db29yZC55O1xuXHRcdFx0dGhpcy52ZWxvY2l0eS55ID0gMDtcblx0XHRcdHRoaXMub25CbG9ja0NvbGxpc2lvbihjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCApO1xuXHRcdH0sXG5cblx0XHRvbkJsb2NrQ29sbGlzaW9uTGVmdDogZnVuY3Rpb24oIGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50ICkge1xuXHRcdFx0dGhpcy5wb3NpdGlvbi54ID0gY29sbGlzaW9uQ29vcmQueDtcblx0XHRcdHRoaXMudmVsb2NpdHkueCA9IDA7XG5cdFx0XHR0aGlzLm9uQmxvY2tDb2xsaXNpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQgKTtcblx0XHR9LFxuXG5cdFx0b25CbG9ja0NvbGxpc2lvblJpZ2h0OiBmdW5jdGlvbiggY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQgKSB7XG5cdFx0XHR0aGlzLnBvc2l0aW9uLnggPSBjb2xsaXNpb25Db29yZC54IC0gdGhpcy53aWR0aDtcblx0XHRcdHRoaXMudmVsb2NpdHkueCA9IDA7XG5cdFx0XHR0aGlzLm9uQmxvY2tDb2xsaXNpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQgKTtcblx0XHR9LFxuXG5cdFx0Y29ycmVjdFBvc2l0aW9uV2l0aFNlcnZlcjpmdW5jdGlvbih0aW1lc3RhbXApe1xuXHRcdFx0Ly9maXggcG9zaXRpb24gZnJvbSBzZXJ2ZXJcblx0XHRcdHZhciBzdGVwSW5QYXN0ID0gcGFyc2VJbnQoKGRlaW1vcy5FbmdpbmUuY3VycmVudExhZykgIC8gZGVpbW9zLkNvbmZpZy5JTlRFUlBPTEFUSU9OX1RJTUVTVEVQKTtcblxuXHRcdFx0dmFyIGRlbHRhWCA9IHRoaXMucG9zaXRpb25TZXJ2ZXIueCAtIHBhcnNlSW50KHRoaXMucG9zaXRpb24ueCk7XG5cdFx0XHR2YXIgZGVsdGFZID0gdGhpcy5wb3NpdGlvblNlcnZlci55IC0gcGFyc2VJbnQodGhpcy5wb3NpdGlvbi55KTtcblx0XHRcdHZhciBzcXVhcmVIeXBvdGhlbnVzID0gZGVsdGFYKmRlbHRhWCArIGRlbHRhWSpkZWx0YVk7XG5cdFx0XHRpZihkZWltb3MuQ29uZmlnLlNRVUFSRV9BVVRIT1JJVFkgPCBzcXVhcmVIeXBvdGhlbnVzKSB7XG5cdFx0XHRcdHRoaXMucG9zaXRpb24ueCA9IHRoaXMucG9zaXRpb25TZXJ2ZXIueDtcblx0XHRcdFx0dGhpcy5wb3NpdGlvbi55ID0gdGhpcy5wb3NpdGlvblNlcnZlci55O1xuXHRcdFx0XHR0aGlzLnNraXBOZXh0VXBkYXRlQW5kTW92ZSA9IHRydWU7XG5cdFx0XHRcdHRoaXMub25Nb3ZlKCk7XG5cdFx0XHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0XHRcdC8vd2UgdW5sYW5kIGl0IHRvIGNoZWNrIGNvbGxpc2lvbiB3aXRoIG5ldyBwb3NpdGlvblxuXHRcdFx0XHR0aGlzLnVubGFuZGVkKCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGJpbmRFdmVudCA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly9zdHViXG5cdFx0fSxcblxuXHRcdHVuYmluZEV2ZW50IDogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL3N0dWJcblx0XHR9LFxuXG5cdFx0dXBkYXRlQW5pbWF0aW9uIDogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZih0aGlzLm9yaWVudGVkICE9PSAncmlnaHQnICYmIHRoaXMub3JpZW50ZWQgIT09ICdsZWZ0JykgdGhyb3cgJ1Vua25vdyBkaXJlY3Rpb24gJyt0aGlzLm9yaWVudGVkO1xuXHRcdFx0dmFyIGRvbUVsZW0gPSB0aGlzLmRvbUVsZW07XG5cdFx0XHR2YXIgY2xhc3NBbmltYXRpb24gPSBudWxsO1xuXG5cdFx0XHRpZih0aGlzLmlzQXR0YWNraW5nKCkpIHtcblx0XHRcdFx0Y2xhc3NBbmltYXRpb24gPSB0aGlzLmRpY3RDbGFzc1snc2hvb3RpbmdfJyt0aGlzLm9yaWVudGVkXTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN3aXRjaCh0aGlzLmN1cnJlbnRBY3Rpb24pe1xuXHRcdFx0XHRcdGNhc2UgXCJmbHlcIjpcblx0XHRcdFx0XHRcdGNsYXNzQW5pbWF0aW9uID0gdGhpcy5kaWN0Q2xhc3NbJ2ZseWluZ18nK3RoaXMub3JpZW50ZWRdO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcImp1bXBcIjpcblx0XHRcdFx0XHRcdGNsYXNzQW5pbWF0aW9uID0gdGhpcy5kaWN0Q2xhc3NbJ2p1bXBpbmdfJyt0aGlzLm9yaWVudGVkXTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgXCJ3YWxrXCI6XG5cdFx0XHRcdFx0XHRjbGFzc0FuaW1hdGlvbiA9IHRoaXMuZGljdENsYXNzWyd3YWxraW5nXycrdGhpcy5vcmllbnRlZF07XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0Y2xhc3NBbmltYXRpb24gPSB0aGlzLmRpY3RDbGFzc1snc3RhbmRpbmdfJyt0aGlzLm9yaWVudGVkXTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGRvbUVsZW0uY2xhc3NOYW1lID0gY2xhc3NBbmltYXRpb247XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIE5hbWVcblx0XHQgKi9cblx0XHRpbml0TmFtZSA6IGZ1bmN0aW9uIChtYWluKSB7XG5cdFx0XHR2YXIgZG9tX2VsZW1fbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRkb21fZWxlbV9uYW1lLnNldEF0dHJpYnV0ZShcImlkXCIsdGhpcy5kb21JZCsnX25hbWUnKSA7XG5cblx0XHRcdGRvbV9lbGVtX25hbWUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cdFx0XHRkb21fZWxlbV9uYW1lLmlubmVySFRNTCA9IHRoaXMubmFtZTtcblx0XHRcdGRvbV9lbGVtX25hbWUuc3R5bGUuZGlzcGxheSAgPSAnbm9uZScgO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5mb250U2l6ZSA9ICcxNnB4Jztcblx0XHRcdGRvbV9lbGVtX25hbWUuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcblx0XHRcdGRvbV9lbGVtX25hbWUuc3R5bGUuY29sb3IgPSAhIW1haW4gPyAncmdiKDEyOCwgMTUxLCAyMjQpJyA6ICdyZ2IoMjI0LCAxMjgsIDEyOCknO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS56SW5kZXggPSAxMDtcblx0XHRcdGRvbV9lbGVtX25hbWUuc3R5bGUudGV4dFNoYWRvdyA9ICd3aGl0ZSAtMnB4IC0ycHggMnB4LCB3aGl0ZSAycHggMnB4IDJweCwgd2hpdGUgLTJweCAycHggMnB4LCB3aGl0ZSAycHggLTJweCAycHgnO1xuXG5cdFx0XHRkZWltb3MuRW5naW5lLnpvbmUuYXJlYS5hcHBlbmRDaGlsZChkb21fZWxlbV9uYW1lKSA7XG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmRpc3BsYXkgID0gJ2Jsb2NrJyA7XG5cblx0XHRcdHRoaXMuZG9tRWxlbU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRvbUlkKydfbmFtZScpO1xuXG5cdFx0XHR0aGlzLm5hbWVXaWR0aCA9IGRvbV9lbGVtX25hbWUub2Zmc2V0V2lkdGg7XG5cdFx0XHR0aGlzLm5hbWVIZWlnaHQgPSBkb21fZWxlbV9uYW1lLm9mZnNldEhlaWdodDtcblxuXHRcdFx0dGhpcy5yZW5kZXJOYW1lLmNhbGwodGhpcyk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIE5hbWVcblx0XHQgKi9cblx0XHRpbml0SFAgOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgZG9tRWxlbUhQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGRvbUVsZW1IUC5zZXRBdHRyaWJ1dGUoXCJpZFwiLHRoaXMuZG9tSWQrJ19ocCcpIDtcblxuXHRcdFx0ZG9tRWxlbUhQLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRcdFx0ZG9tRWxlbUhQLnN0eWxlLmRpc3BsYXkgID0gJ25vbmUnIDtcblx0XHRcdGRvbUVsZW1IUC5zdHlsZS56SW5kZXggPSAxMDtcblx0XHRcdGRvbUVsZW1IUC5zdHlsZS53aWR0aCA9ICgodGhpcy5IUC90aGlzLm1heEhQKSAqIHRoaXMubmFtZVdpZHRoKSsncHgnO1xuXHRcdFx0ZG9tRWxlbUhQLnN0eWxlLmhlaWdodCA9ICczcHgnO1xuXHRcdFx0ZG9tRWxlbUhQLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjQTRDM0EwJztcblxuXHRcdFx0ZGVpbW9zLkVuZ2luZS56b25lLmFyZWEuYXBwZW5kQ2hpbGQoZG9tRWxlbUhQKSA7XG5cdFx0XHRkb21FbGVtSFAuc3R5bGUuZGlzcGxheSAgPSAnYmxvY2snIDtcblxuXHRcdFx0dGhpcy5kb21FbGVtSFAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRvbUlkKydfaHAnKTtcblxuXHRcdFx0dGhpcy5yZW5kZXJIUC5jYWxsKHRoaXMpO1xuXHRcdH0sXG5cblx0XHRyZW5kZXJIUCA6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGRvbUVsZW1IUCA9IHRoaXMuZG9tRWxlbUhQIDtcblx0XHRcdHZhciBsZWZ0ID0gcGFyc2VJbnQodGhpcy5wb3NpdGlvbi54KyhwYXJzZUludCgodGhpcy5kb21FbGVtV2lkdGgtKDIqdGhpcy5kZWx0YXNob3cueCkpLzIpLXBhcnNlSW50KHRoaXMubmFtZVdpZHRoLzIpKSk7XG5cdFx0XHR2YXIgdG9wID0gcGFyc2VJbnQodGhpcy5wb3NpdGlvbi55LTYpO1xuXHRcdFx0dmFyIHRyYW5zbGF0aW9uID0gXCJ0cmFuc2xhdGUzZChcIitsZWZ0K1wicHgsXCIrdG9wK1wicHgsMHB4KVwiO1xuXHRcdFx0ZG9tRWxlbUhQLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zbGF0aW9uO1xuXHRcdFx0ZG9tRWxlbUhQLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zbGF0aW9uO1xuXHRcdFx0ZG9tRWxlbUhQLnN0eWxlLndpZHRoID0gKCh0aGlzLkhQL3RoaXMubWF4SFApICogdGhpcy5uYW1lV2lkdGgpKydweCc7XG5cdFx0fSxcblxuXHRcdHJlbmRlck5hbWUgOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRkb21fZWxlbV9uYW1lID0gdGhpcy5kb21FbGVtTmFtZSA7XG5cdFx0XHR2YXIgbGVmdCA9IHBhcnNlSW50KHRoaXMucG9zaXRpb24ueCsocGFyc2VJbnQoKHRoaXMuZG9tRWxlbVdpZHRoLSgyKnRoaXMuZGVsdGFzaG93LngpKS8yKS1wYXJzZUludCh0aGlzLm5hbWVXaWR0aC8yKSkpO1xuXHRcdFx0dmFyIHRvcCA9IHBhcnNlSW50KHRoaXMucG9zaXRpb24ueS10aGlzLm5hbWVIZWlnaHQtNik7XG5cdFx0XHR2YXIgdHJhbnNsYXRpb24gPSBcInRyYW5zbGF0ZTNkKFwiK2xlZnQrXCJweCxcIit0b3ArXCJweCwwcHgpXCI7XG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zbGF0aW9uO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2xhdGlvbjtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogU3BlYWtlclxuXHRcdCAqL1xuXHRcdGluaXRTcGVha2VyIDogZnVuY3Rpb24gKHJlYWRvbmx5KSB7XG5cdFx0XHR0aGlzLnNwZWFrZXIgPSBuZXcgZGVpbW9zLmVsZW1lbnQuU3BlYWtlcih0aGlzLmRvbUlkLCByZWFkb25seSkgO1xuXHRcdFx0dGhpcy5zcGVha2VyLmluaXQoKTtcblx0XHR9LFxuXG5cdFx0cmVuZGVyU3BlYWtlciA6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuc3BlYWtlci5yZW5kZXIodGhpcy5wb3NpdGlvbi54IC0gNTAgLHRoaXMucG9zaXRpb24ueSAtIDc0KTtcblx0XHR9LFxuXG5cdFx0c2V0U3BlYWtpbmcgOiBmdW5jdGlvbiAoYm9vbCkge1xuXHRcdFx0dGhpcy5zcGVha2luZyA9IGJvb2wgO1xuXHRcdFx0aWYoYm9vbCkge1xuXHRcdFx0XHR0aGlzLnJlbmRlclNwZWFrZXIoKTtcblx0XHRcdFx0dGhpcy5zcGVha2VyLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMubGFzdFNheWVkID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0XHRcdHRoaXMuc3BlYWtlci5sZWF2ZUZvY3VzKCk7XG5cdFx0XHRcdGlmKHRoaXMuc2F5aW5nLmxlbmd0aCA9PT0gMCkgdGhpcy5zcGVha2VyLmhpZGUoKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0aXNBdHRhY2tpbmcgOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdCEhdGhpcy5hdHRhY2sgJiYgLy9pZiBoYXMgYXR0YWNrIFxuXHRcdFx0XHQodGhpcy5sYXN0QXR0YWNrICsgdGhpcy5hdHRhY2tSYXRlID4gbmV3IERhdGUoKS5nZXRUaW1lKCkpIC8vYW5kIGF0dGFjayBpbiB0aW1lclxuXHRcdFx0KTtcblx0XHR9LFxuXG5cdFx0YXR0YWNrIDogZnVuY3Rpb24od2hpY2hPbmUpIHtcblx0XHRcdGlmKCF3aGljaE9uZSkge1xuXHRcdFx0XHRpZighdGhpcy5pc0F0dGFja2luZygpKSB7XG5cdFx0XHRcdFx0dGhpcy5sYXN0QXR0YWNrID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0XHRcdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblx0XHRcdFx0XHR2YXIgbWVzc2FnZSA9IHt9O1xuXHRcdFx0XHRcdG1lc3NhZ2VbX3RbJ0FDVElPTiddXSA9IF90WydBQ1RJT05fQVRUQUNLJ107XG5cdFx0XHRcdFx0bWVzc2FnZVtfdFsnTUVTU0FHRSddXSA9IHt9O1xuXHRcdFx0XHRcdG1lc3NhZ2VbX3RbJ01FU1NBR0UnXV1bX3RbJ01FU1NBR0VfRElSRUNUSU9OJ11dID0gdGhpcy5vcmllbnRlZDtcblx0XHRcdFx0XHRtZXNzYWdlW190WydNRVNTQUdFJ11dW190WydNRVNTQUdFX1BPU0lUSU9OJ11dID0ge307XG5cdFx0XHRcdFx0bWVzc2FnZVtfdFsnTUVTU0FHRSddXVtfdFsnTUVTU0FHRV9QT1NJVElPTiddXS54ID0gcGFyc2VJbnQodGhpcy5wb3NpdGlvbi54KTtcblx0XHRcdFx0XHRtZXNzYWdlW190WydNRVNTQUdFJ11dW190WydNRVNTQUdFX1BPU0lUSU9OJ11dLnkgPSBwYXJzZUludCh0aGlzLnBvc2l0aW9uLnkpO1xuXHRcdFx0XHRcdGRlaW1vcy5FbmdpbmUubmV0d29ya01hbmFnZXIuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0TG9nLmluZm8oJ0hhdmUgdG8gd2FpdCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0TG9nLmVycm9yKCdPbmx5IG1haW4gYXR0YWNrIGlzIGltcGxlbWVudGVkJyk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHRvdWNoZWQ6IGZ1bmN0aW9uKGVsZW1lbnRDb2xsaXNpb24pIHtcblx0XHRcdHZhciBkYW1hZ2UgPSBlbGVtZW50Q29sbGlzaW9uLmRhbWFnZTtcblx0XHRcdGlmKGlzRmluaXRlKGRhbWFnZSkpIHtcblx0XHRcdFx0dGhpcy5IUCAtPSBkYW1hZ2U7XG5cdFx0XHRcdHRoaXMucmVuZGVySFAoKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0ZGllOiBmdW5jdGlvbihlbGVtZW50Q29sbGlzaW9uKSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHR9LFxuXG5cdFx0Y2xlYW5Eb206IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy51bmJpbmRFdmVudCgpO1xuXHRcdFx0aWYoISF0aGlzLnNwZWFrZXIpIHRoaXMuY2xlYW5Eb21TcGVha2VyKCk7XG5cdFx0XHRpZih0aGlzLmRvbUVsZW1IUCkgdGhpcy5jbGVhbkRvbUhQKCk7XG5cdFx0XHRpZih0aGlzLmRvbUVsZW1OYW1lKSB0aGlzLmNsZWFuRG9tTmFtZSgpO1xuXHRcdFx0aWYodGhpcy5kb21FbGVtKSB0aGlzLmNsZWFuRG9tRWxlbSgpO1xuXHRcdH0sXG5cblx0XHRjbGVhbkRvbUVsZW0gOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBub2RlQXZhdGFyID0gdGhpcy5kb21FbGVtO1xuXHRcdFx0dmFyIHBhcmVudE5vZGUgPSBub2RlQXZhdGFyLnBhcmVudE5vZGU7XG5cdFx0XHRpZihwYXJlbnROb2RlKSBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGVBdmF0YXIpO1xuXHRcdH0sXG5cblx0XHRjbGVhbkRvbU5hbWUgOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkb21fZWxlbV9uYW1lID0gdGhpcy5kb21FbGVtTmFtZSA7XG5cdFx0XHR2YXIgcGFyZW50Tm9kZSA9IGRvbV9lbGVtX25hbWUucGFyZW50Tm9kZTtcblx0XHRcdGlmKHBhcmVudE5vZGUpIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tX2VsZW1fbmFtZSk7XG5cdFx0fSxcblxuXHRcdGNsZWFuRG9tSFAgOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkb21fZWxlbV9ocCA9IHRoaXMuZG9tRWxlbUhQIDtcblx0XHRcdHZhciBwYXJlbnROb2RlID0gZG9tX2VsZW1faHAucGFyZW50Tm9kZTtcblx0XHRcdGlmKHBhcmVudE5vZGUpIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tX2VsZW1faHApO1xuXHRcdH0sXG5cblx0XHRjbGVhbkRvbVNwZWFrZXIgOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzcGVha2luZ0JveCA9IHRoaXMuc3BlYWtlci5kb21FbGVtO1xuXHRcdFx0dmFyIHBhcmVudE5vZGUgPSBzcGVha2luZ0JveC5wYXJlbnROb2RlO1xuXHRcdFx0aWYocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzcGVha2luZ0JveCk7XG5cdFx0fVxuXHR9XG5cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIFNwZWFrZXIgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTMvMDgvMjlcbiAqIEBkZXNjcmlwdGlvbiA6IFNwZWFrZXIgbW9kZWxcbiAqXG4gKiovXG5cbihmdW5jdGlvbihkZWltb3MsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0ZGVpbW9zLmVsZW1lbnQgPSBkZWltb3MuZWxlbWVudCB8fCB7fSA7XG5cblx0LyoqKlxuXHQgKiBTcGVha2VyIGNvbnN0cnVjdG9yXG5cdCAqIFxuXHQgKiovXG5cdGRlaW1vcy5lbGVtZW50LlNwZWFrZXIgPSBmdW5jdGlvbiAoYXZJZCwgcmVhZG9ubHkpIHtcblx0XHR0aGlzLmlkID0gJ3NwZWFrZXJfJyArIGF2SWQgKyAnXycgKyBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpKjEwMDAwMDApKzEpO1xuXHRcdHRoaXMucmVhZG9ubHkgPSByZWFkb25seTtcblx0fVxuXG5cblx0ZGVpbW9zLmVsZW1lbnQuU3BlYWtlci5wcm90b3R5cGUgPSB7XG5cdFx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZ2FtZXpvbmUgPSBkZWltb3MuRW5naW5lLnpvbmUuYXJlYSA7XG5cdFx0XHRcdFxuXHRcdFx0Ly9tYWtlIGRvbSBlbGVtZW50XG5cdFx0XHR2YXIgZG9tX2VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0ZG9tX2VsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcInNwZWFrZXJcIikgO1xuXHRcdFx0ZG9tX2VsZW0uc2V0QXR0cmlidXRlKFwiaWRcIix0aGlzLmlkKSA7XG5cdFx0XHQvL2RvbV9lbGVtLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnIDtcblxuXHRcdFx0aWYodGhpcy5yZWFkb25seSkge1xuXHRcdFx0XHRkb21fZWxlbS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSAnMHB4IC0xMDBweCcgO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpIDtcblx0XHRcdGlmKHRoaXMucmVhZG9ubHkpIHtcblx0XHRcdFx0dGV4dEFyZWEucmVhZE9ubHkgPSB0cnVlOyBcblx0XHRcdH1cblx0XHRcdGRvbV9lbGVtLmFwcGVuZENoaWxkKHRleHRBcmVhKSA7XG5cdFx0XHRnYW1lem9uZS5hcHBlbmRDaGlsZChkb21fZWxlbSkgO1xuXHRcdFx0dGhpcy5kb21FbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XG5cdFx0fSxcblxuXHRcdGdldFRleHQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGRvbUVsZW0gPSB0aGlzLmRvbUVsZW07XG5cdFx0XHRyZXR1cm4gZG9tRWxlbS5jaGlsZE5vZGVzWzBdLnZhbHVlIDtcblx0XHR9LFxuXG5cdFx0c2V0VGV4dDogZnVuY3Rpb24odHh0KSB7XG5cdFx0XHR2YXIgZG9tRWxlbSA9IHRoaXMuZG9tRWxlbTtcblx0XHRcdGRvbUVsZW0uY2hpbGROb2Rlc1swXS52YWx1ZSA9IHR4dDtcblx0XHR9LFxuXG5cdFx0c2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZG9tRWxlbSA9ICB0aGlzLmRvbUVsZW07XG5cdFx0XHRkb21FbGVtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdFx0aWYodGhpcy5yZWFkb25seSAhPT0gdHJ1ZSlcblx0XHRcdHtcblx0XHRcdFx0ZG9tRWxlbS5jaGlsZE5vZGVzWzBdLmZvY3VzKCkgO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRoaWRlOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkb21FbGVtID0gIHRoaXMuZG9tRWxlbTtcblx0XHRcdGRvbUVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGRvbUVsZW0uY2hpbGROb2Rlc1swXS52YWx1ZSA9ICcnO1xuXHRcdFx0aWYodGhpcy5yZWFkb25seSAhPT0gdHJ1ZSlcblx0XHRcdHtcblx0XHRcdFx0dGhpcy5sZWF2ZUZvY3VzKCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGxlYXZlRm9jdXM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGRvbUVsZW0gPSAgdGhpcy5kb21FbGVtO1xuXHRcdFx0ZG9tRWxlbS5jaGlsZE5vZGVzWzBdLmJsdXIoKSA7XG5cdFx0fSxcblxuXHRcdHJlbmRlcjogZnVuY3Rpb24oeCx5KSB7XG5cdFx0XHR2YXIgZG9tRWxlbSA9ICB0aGlzLmRvbUVsZW07XG5cdFx0XHR2YXIgdHJhbnNsYXRpb24gPSBcInRyYW5zbGF0ZTNkKFwiK3grXCJweCxcIit5K1wicHgsMHB4KVwiO1xuXHRcdFx0ZG9tRWxlbS5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2xhdGlvbjtcblx0XHRcdGRvbUVsZW0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNsYXRpb247XG5cdFx0fVxuXHR9XG5cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIEF2YXRhciBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxMy8wOC8wOVxuICogQGRlc2NyaXB0aW9uIDogQXZhdGFyIG1vZGVsXG4gKlxuICoqL1xuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXG5cdHZhciBFdmVudE1hbmFnZXIgPSBvcmcuZGJ5emVyby50b29scy5FdmVudE1hbmFnZXI7XG5cdGRlaW1vcy5lbGVtZW50ID0gZGVpbW9zLmVsZW1lbnQgfHwge30gO1xuXG5cdC8qKlxuXHQgKiBBdmF0YXIgY29uc3RydWN0b3Jcblx0ICpcblx0ICoqL1xuXHR2YXIgQXZhdGFyID0gZGVpbW9zLmVsZW1lbnQuQXZhdGFyID0gZnVuY3Rpb24gKG5hbWUscG9zaXRpb24sc2l6ZSxzZXJ2ZXJpZCxkZWx0YXNob3csbWFzcykge1xuXHRcdEF2YXRhci5fc3VwZXIuY2FsbCh0aGlzLHBvc2l0aW9uLHNpemUsc2VydmVyaWQsZGVsdGFzaG93KTtcblx0XHR0aGlzLmRvbUlkID0gJ2F2YXRhcl8nICsgc2VydmVyaWQgKyAnXycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICdfJyArIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkqMTAwMDAwMCkrMSk7IDtcblx0XHR0aGlzLnNwZWFraW5nID0gZmFsc2UgO1xuXHRcdHRoaXMuc3BlYWtlciA9IG51bGw7XG5cdFx0dGhpcy5tb3ZlX3NwZWVkID0gMDtcblx0XHR0aGlzLmp1bXBfc3BlZWQgPSAwO1xuXHRcdHRoaXMuc2F5aW5nID0gXCJcIjtcblx0XHR0aGlzLmxhc3RTYXllZCA9IDA7XG5cdFx0dGhpcy53YWl0aW5nRm9yY2UgPSBbXTtcblx0XHR0aGlzLnVzZXJJbnB1dHMgPSB7fTtcblx0XHR0aGlzLml0ZW1fc2xvdF9oZWFkID0gbnVsbDtcblx0XHR0aGlzLml0ZW1fc2xvdF9mb290ID0gbnVsbDtcblx0XHR0aGlzLml0ZW1fc2xvdF9jaGVzdCA9IG51bGw7XG5cdFx0dGhpcy5pdGVtX3Nsb3RfbGVmdF9oYW5kID0gbnVsbDtcblx0XHR0aGlzLml0ZW1fc2xvdF9yaWdodF9oYW5kID0gbnVsbDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubWFzcyA9IG1hc3M7XG5cdFx0Ly9vYmplY3QgY29sbGlzaW9ucyBhcmUgbWFuYWdlZCBieSBzZXJ2ZXJcblx0XHQvLyB0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkWydib251cyddID0gdHJ1ZTtcblx0fVxuXG5cdG9yZy5kYnl6ZXJvLnRvb2xzLkluaGVyaXQoZGVpbW9zLmVsZW1lbnQuQXZhdGFyLCBkZWltb3MuZWxlbWVudC5FbGVtZW50KTtcblxuXHRkZWltb3MuZWxlbWVudC5BdmF0YXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpe1xuXHRcdEF2YXRhci5fc3VwZXIucHJvdG90eXBlLmluaXQuY2FsbCh0aGlzKTtcblxuXHRcdC8vc2V0IHNwcml0ZXNoZWV0XG5cdFx0dGhpcy5kb21FbGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiK2RlaW1vcy5FbmdpbmUuYXNzZXRVUkwrXCIvc3ByaXRlc2hlZXQvY2hhci9cIit0aGlzLnNlcnZlcmlkK1wiL3Nwcml0ZXNoZWV0LnBuZylcIjtcblxuXHRcdC8vYWRkIHNwZWFrZXJcblx0XHR0aGlzLmluaXRTcGVha2VyKGZhbHNlKTtcblxuXHRcdC8vZXZlbnRzXG5cdFx0dGhpcy5iaW5kRXZlbnQoKTtcblxuXHRcdC8vc2hvdyBtYWluIG5hbWVcblx0XHR0aGlzLmluaXROYW1lKHRydWUpO1xuXG5cdFx0Ly9yZWRyYXcgSFAgdG8gYXBwbHkgY29ycmVjdCBuYW1lIHdpZHRoXG5cdFx0dGhpcy5yZW5kZXJIUCgpO1xuXG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5BdmF0YXIucHJvdG90eXBlLmJpbmRFdmVudCA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cblx0XHQvL2JpbmQgc3BlZWsgZXZlbnRcblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLnNwZWFrXCIsKGZ1bmN0aW9uKGUpe1xuXHRcdFx0dGhpcy5zZXRTcGVha2luZyh0cnVlKSA7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0pLmJpbmQodGhpcykpO1xuXG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5zcGVhay5zdG9wXCIsKGZ1bmN0aW9uKCl7XG5cdFx0XHR0aGlzLnNldFNwZWFraW5nKGZhbHNlKSA7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0pLmJpbmQodGhpcykpO1xuXG5cdFx0Ly9iaW5kIG1vdmVtZW50IGV2ZW50XG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLm1vdmUubGVmdFwiLChmdW5jdGlvbihlKXtcblx0XHRcdHZhciBmb3JjZSA9IG5ldyBkZWltb3MucGh5c2ljLlVzZXJNb3ZlbWVudChcblx0XHRcdFx0bmV3IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3RvcigtMSAqIHRoaXMubW92ZV9zcGVlZCwwKSxcblx0XHRcdFx0X3RbJ0xFRlQnXVxuXHRcdFx0KTtcblx0XHRcdHRoaXMuYWRkVXNlcklucHV0cyhmb3JjZSk7XG5cdFx0XHR0aGlzLnNlbmRBY3Rpb25NZXNzYWdlKF90WydBQ1RJT05fTU9WRV9TVEFSVCddLGZvcmNlKTtcblx0XHRcdHRoaXMub3JpZW50ZWQgPSAnbGVmdCc7XG5cdFx0fSkuYmluZCh0aGlzKSk7XG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLm1vdmUucmlnaHRcIiwoZnVuY3Rpb24oZSl7XG5cdFx0XHR2YXIgZm9yY2UgPSBuZXcgZGVpbW9zLnBoeXNpYy5Vc2VyTW92ZW1lbnQoXG5cdFx0XHRcdG5ldyBvcmcuZGJ5emVyby50b29scy5WZWN0b3IodGhpcy5tb3ZlX3NwZWVkLDApLFxuXHRcdFx0XHRfdFsnUklHSFQnXVxuXHRcdFx0KTtcblx0XHRcdHRoaXMuYWRkVXNlcklucHV0cyhmb3JjZSk7XG5cdFx0XHR0aGlzLnNlbmRBY3Rpb25NZXNzYWdlKF90WydBQ1RJT05fTU9WRV9TVEFSVCddLGZvcmNlKTtcblx0XHRcdHRoaXMub3JpZW50ZWQgPSAncmlnaHQnO1xuXHRcdH0pLmJpbmQodGhpcykpO1xuXG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5tb3ZlLmxlZnQuc3RvcFwiLChmdW5jdGlvbihlKXtcblx0XHRcdHRoaXMucmVtb3ZlVXNlcklucHV0cyhfdFsnTEVGVCddKTtcblx0XHR9KS5iaW5kKHRoaXMpKTtcblxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3RlcihcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIubW92ZS5yaWdodC5zdG9wXCIsKGZ1bmN0aW9uKGUpe1xuXHRcdFx0dGhpcy5yZW1vdmVVc2VySW5wdXRzKF90WydSSUdIVCddKTtcblx0XHR9KS5iaW5kKHRoaXMpKTtcblxuXHRcdC8vYmluZCBqdW1wIGV2ZW50XG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5qdW1wXCIsKGZ1bmN0aW9uKGUpe1xuXHRcdFx0aWYoIXRoaXMuaXNMYW5kZWQgPT0gZmFsc2UgJiYgdGhpcy5zcGVha2luZyA9PSBmYWxzZSkge1xuXHRcdFx0XHR2YXIgZm9yY2UgPSBuZXcgZGVpbW9zLnBoeXNpYy5Vc2VyTW92ZW1lbnQoXG5cdFx0XHRcdFx0bmV3IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3RvcigwLHBhcnNlSW50KCctJyt0aGlzLmp1bXBfc3BlZWQpKSxcblx0XHRcdFx0XHRfdFsnSlVNUCddXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHRoaXMuYWRkRm9yY2VOZXh0U3RlcChmb3JjZS5tb3ZlbWVudCkgO1xuXHRcdFx0XHR0aGlzLnNlbmRBY3Rpb25NZXNzYWdlKF90WydBQ1RJT05fSlVNUCddLGZvcmNlKTtcblxuXHRcdFx0fVxuXHRcdH0pLmJpbmQodGhpcykpO1xuXG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5nby5kb3duXCIsKGZ1bmN0aW9uKGUpe1xuXHRcdFx0dGhpcy5nb2luZ0Rvd24gPSB0cnVlO1xuXHRcdFx0dGhpcy51bmxhbmRlZCgpO1xuXHRcdFx0dGhpcy5zZW5kQWN0aW9uTWVzc2FnZShfdFsnQUNUSU9OX0dPSU5HX0RPV04nXSk7XG5cdFx0fSkuYmluZCh0aGlzKSk7XG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLmdvLmRvd24uc3RvcFwiLChmdW5jdGlvbihlKXtcblx0XHRcdHRoaXMuZ29pbmdEb3duID0gZmFsc2U7XG5cdFx0XHR0aGlzLnNlbmRBY3Rpb25NZXNzYWdlKF90WydBQ1RJT05fR09JTkdfRE9XTl9TVE9QJ10pO1xuXHRcdH0pLmJpbmQodGhpcykpO1xuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuQXZhdGFyLnByb3RvdHlwZS51bmJpbmRFdmVudCA9IGZ1bmN0aW9uKCkge1xuXHRcdC8vYmluZCBzcGVlayBldmVudFxuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5zcGVha1wiKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3RlcihcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIuc3BlYWtcIik7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLm1vdmUubGVmdC5zdG9wXCIpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5tb3ZlLnJpZ2h0LnN0b3BcIik7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLm1vdmUubGVmdFwiKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3RlcihcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIubW92ZS5yaWdodFwiKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3RlcihcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIuanVtcFwiKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3RlcihcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIuZ28uZG93blwiKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3RlcihcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIuZ28uZG93bi5zdG9wXCIpO1xuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuQXZhdGFyLnByb3RvdHlwZS5zZW5kQWN0aW9uTWVzc2FnZSA9IGZ1bmN0aW9uKHR5cGUsIGZvcmNlKSB7XG5cdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblx0XHR2YXIgbWVzc2FnZSA9IHt9O1xuXHRcdG1lc3NhZ2VbX3RbJ0FDVElPTiddXSA9IHR5cGU7XG5cdFx0bWVzc2FnZVtfdFsnTUVTU0FHRSddXSA9IHt9O1xuXHRcdGlmKGZvcmNlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdG1lc3NhZ2VbX3RbJ01FU1NBR0UnXV1bX3RbJ01FU1NBR0VfTU9WRV9JRCddXSA9IGZvcmNlLmlkO1xuXHRcdFx0bWVzc2FnZVtfdFsnTUVTU0FHRSddXVtfdFsnTUVTU0FHRV9NT1ZFX1RZUEUnXV0gPSBmb3JjZS50eXBlO1xuXHRcdFx0bWVzc2FnZVtfdFsnTUVTU0FHRSddXVtfdFsnTUVTU0FHRV9NT1ZFX1NUQVJUJ11dID0gZm9yY2Uuc3RhcnRUaW1lc3RhbXA7XG5cdFx0XHRtZXNzYWdlW190WydNRVNTQUdFJ11dW190WydNRVNTQUdFX0RVUkFUSU9OJ11dID0gZm9yY2UuZHVyYXRpb247XG5cdFx0fVxuXHRcdG1lc3NhZ2VbX3RbJ01FU1NBR0UnXV1bX3RbJ01FU1NBR0VfUE9TSVRJT04nXV0gPSB7fTtcblx0XHRtZXNzYWdlW190WydNRVNTQUdFJ11dW190WydNRVNTQUdFX1BPU0lUSU9OJ11dLnggPSBwYXJzZUludCh0aGlzLnBvc2l0aW9uLngpO1xuXHRcdG1lc3NhZ2VbX3RbJ01FU1NBR0UnXV1bX3RbJ01FU1NBR0VfUE9TSVRJT04nXV0ueSA9IHBhcnNlSW50KHRoaXMucG9zaXRpb24ueSk7XG5cdFx0ZGVpbW9zLkVuZ2luZS5uZXR3b3JrTWFuYWdlci5zZW5kTWVzc2FnZShtZXNzYWdlKTtcblx0fVxuXG5cdC8vYWRkaW5nIHVzZXIga2V5Ym9hcmQgKG9yIG90aGVyIGlucHV0ID8pIGV2ZW50c1xuXHRkZWltb3MuZWxlbWVudC5BdmF0YXIucHJvdG90eXBlLmFkZFVzZXJJbnB1dHMgPSBmdW5jdGlvbihtdnQpIHtcblx0XHR0aGlzLnVzZXJJbnB1dHNbbXZ0LmlkXSA9IG12dCA7XG5cdH1cblxuXG5cdC8vcmVtb3ZpbmcgdXNlciBrZXlib2FyZCAob3Igb3RoZXIgaW5wdXQgPykgZXZlbnRzXG5cdGRlaW1vcy5lbGVtZW50LkF2YXRhci5wcm90b3R5cGUucmVtb3ZlVXNlcklucHV0cyA9IGZ1bmN0aW9uKHR5cGUpIHtcblx0XHRmb3IoaWQgaW4gdGhpcy51c2VySW5wdXRzKSB7XG5cdFx0XHR2YXIgaW5wdXQgPSB0aGlzLnVzZXJJbnB1dHNbaWRdO1xuXHRcdFx0aWYoaW5wdXQudHlwZSA9PT0gdHlwZSkge1xuXHRcdFx0XHRpbnB1dC5kdXJhdGlvbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gaW5wdXQuc3RhcnRUaW1lc3RhbXA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly9hZGRpbmcgZm9yY2UgbmV4dCBzdGVwXG5cdGRlaW1vcy5lbGVtZW50LkF2YXRhci5wcm90b3R5cGUuYWRkRm9yY2VOZXh0U3RlcCA9IGZ1bmN0aW9uKGZvcmNlKSB7XG5cdFx0dGhpcy53YWl0aW5nRm9yY2UucHVzaChmb3JjZSkgO1xuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuQXZhdGFyLnByb3RvdHlwZS5hZGRpbmdXYWl0aW5nRm9yY2VzID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGZvcmNlcyA9IHRoaXMud2FpdGluZ0ZvcmNlO1xuXHRcdGZvcihmb3JjZSBpbiBmb3JjZXMpIHtcblx0XHRcdHRoaXMudmVsb2NpdHkuYWRkKGZvcmNlc1tmb3JjZV0pO1xuXHRcdFx0dGhpcy53YWl0aW5nRm9yY2Uuc3BsaWNlKDAsMSk7XG5cdFx0fVxuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuQXZhdGFyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkdCwgbm93KSB7XG5cblx0XHQvL3RvZ2dsZSBzcGVha2VyIGlmIG5lZWRlZFxuXHRcdGlmKHRoaXMuc3BlYWtpbmcpIHtcblx0XHRcdHZhciBuZXdfc2F5aW5nID0gdGhpcy5nZXRTYXlpbmcoKTtcblx0XHRcdGlmKHRoaXMuc2F5aW5nICE9PSBuZXdfc2F5aW5nKSB7XG5cdFx0XHRcdHRoaXMuc2F5aW5nID0gbmV3X3NheWluZztcblx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnNlbmRTeW5jJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmKHRoaXMubGFzdFNheWVkICsgNTAwMCA8IG5vdyAmJiB0aGlzLnNheWluZyAhPT0gJycpIHtcblx0XHRcdFx0dGhpcy5zcGVha2VyLmhpZGUoKTtcblx0XHRcdFx0dGhpcy5zcGVha2VyLnNldFRleHQoJycpO1xuXHRcdFx0XHR0aGlzLnNheWluZyA9ICcnO1xuXHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZSgnb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc2VuZFN5bmMnKTtcblx0XHRcdH0gXG5cdFx0fVxuXG5cdFx0Ly9jYWxsIHBhcmVudCB1cGRhdGVcblx0XHRBdmF0YXIuX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzLGR0LG5vdyk7XG5cblx0XHQvL2FkZGluZyB1c2VyIGFjdGlvbiB0aHJvdWdoIGtleWJvYXJkIHRvIHRoZSBtb3ZlbWVudFxuXHRcdGZvcihpZCBpbiB0aGlzLnVzZXJJbnB1dHMpIHtcblx0XHRcdHZhciBpbnB1dCA9IHRoaXMudXNlcklucHV0c1tpZF07XG5cdFx0XHR0aGlzLnRvTW92ZS54ICs9IHBhcnNlRmxvYXQoaW5wdXQubW92ZW1lbnQueCAqIGR0LzEwMDAgKiBNYXRoLm1pbigxLGlucHV0LmR1cmF0aW9uSW50ZWdyYXRlZC8xMDApKTsvL3RvIG1ha2UgcG9zc2libGUgc21hbGwgbXZ0XG5cdFx0XHR0aGlzLnRvTW92ZS55ICs9IHBhcnNlRmxvYXQoaW5wdXQubW92ZW1lbnQueSAqIGR0LzEwMDApO1xuXHRcdFx0aW5wdXQuZHVyYXRpb25JbnRlZ3JhdGVkID0gaW5wdXQuZHVyYXRpb25JbnRlZ3JhdGVkICsgZHQ7XG5cblxuXHRcdFx0Ly9maW5pc2ggdGhlIGludGVycG9sYXRpb25cblx0XHRcdGlmKGlucHV0LmR1cmF0aW9uICE9PSBudWxsKSB7XG5cdFx0XHRcdC8vc2kgb24gYSB0cm9wIGludGVncmVyLCBvbiBjaGFuZ2UgbGUgdG90YWwgaW50ZWdyZXIgYSBsYSBsJ2ludGVncmF0aW9uIHJlZWxcblx0XHRcdFx0Ly9wb3VyIG5lIHBhcyBmYWlyZSBkZSByZXRvdXJcblx0XHRcdFx0aW5wdXQuZHVyYXRpb24gPSBNYXRoLm1heChpbnB1dC5kdXJhdGlvbkludGVncmF0ZWQsaW5wdXQuZHVyYXRpb24pO1xuXHRcdFx0XHR2YXIgbWlzc2luZ0ludGVncmF0aW9uID0gaW5wdXQuZHVyYXRpb24gLSBpbnB1dC5kdXJhdGlvbkludGVncmF0ZWQ7XG5cblx0XHRcdFx0dGhpcy50b01vdmUueCArPSBwYXJzZUZsb2F0KChpbnB1dC5tb3ZlbWVudC54ICogbWlzc2luZ0ludGVncmF0aW9uLzEwMDApKTtcblx0XHRcdFx0dGhpcy50b01vdmUueSArPSBwYXJzZUZsb2F0KChpbnB1dC5tb3ZlbWVudC55ICogbWlzc2luZ0ludGVncmF0aW9uLzEwMDApKTtcblxuXHRcdFx0XHR0aGlzLnNlbmRBY3Rpb25NZXNzYWdlKGRlaW1vcy5FbmdpbmUuX3RbJ0FDVElPTl9NT1ZFX1NUT1AnXSxpbnB1dCk7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLnVzZXJJbnB1dHNbaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50LkF2YXRhci5wcm90b3R5cGUub25Nb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0QXZhdGFyLl9zdXBlci5wcm90b3R5cGUub25Nb3ZlLmNhbGwodGhpcyk7XG5cdFx0dGhpcy5yZW5kZXJOYW1lKCk7XG5cdFx0dGhpcy5yZW5kZXJTcGVha2VyKCk7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5BdmF0YXIucHJvdG90eXBlLm9uSnVzdExhbmQgPSBmdW5jdGlvbigpIHtcblx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnNlbmRTeW5jXCIpO1xuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuQXZhdGFyLnByb3RvdHlwZS5vblVubGFuZCA9IGZ1bmN0aW9uKCkge1xuXHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc2VuZFN5bmNcIik7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5BdmF0YXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmKEF2YXRhci5fc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpKSB7XG5cdFx0XHR0aGlzLnJlbmRlck5hbWUoKTtcblx0XHRcdHRoaXMucmVuZGVyU3BlYWtlcigpO1xuXHRcdFx0aWYoISF0aGlzLkhQKSB0aGlzLnJlbmRlckhQKCk7XG5cdFx0fVxuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuQXZhdGFyLnByb3RvdHlwZS5nZXRTYXlpbmcgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgdHh0ID0gdGhpcy5zcGVha2VyLmdldFRleHQoKTtcblx0XHR0eHQgPSB0eHQucmVwbGFjZSgvPCg/Oi58XFxuKSo/Pi9nbSwgJycpO1xuXHRcdHR4dCA9IHR4dC5yZXBsYWNlKC8nL2dtLCBcIlxcJ1wiKTtcblx0XHR0eHQgPSB0eHQucmVwbGFjZSgvXCIvZ20sICdcXFwiJyk7XG5cdFx0dHh0ID0gdHh0LnJlcGxhY2UoL1xcey9nbSwgXCIoXCIpO1xuXHRcdHR4dCA9IHR4dC5yZXBsYWNlKC9cXH0vZ20sIFwiKVwiKTtcblx0XHRyZXR1cm4gdHh0O1xuXHR9O1xuXG5cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIEF2YXRhciBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxM1xcYXNjIHN4ejA4LzA5XG4gKiBAZGVzY3JpcHRpb24gOiBTZXJ2ZXJBdmF0YXIgbW9kZWxcbiAqXG4gKiovXG5cbihmdW5jdGlvbihkZWltb3MsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0ZGVpbW9zLmVsZW1lbnQgPSBkZWltb3MuZWxlbWVudCB8fCB7fSA7XG5cblx0LyoqXG5cdCAqIFNlcnZlckF2YXRhciBjb25zdHJ1Y3RvclxuXHQgKlxuXHQgKiovXG5cdHZhciBTZXJ2ZXJBdmF0YXIgPSBkZWltb3MuZWxlbWVudC5TZXJ2ZXJBdmF0YXIgPSBmdW5jdGlvbiAobmFtZSxwb3NpdGlvbix2ZWxvY2l0eSxhY2NlbGVyYXRpb24sc2l6ZSxtYXNzLHVzZXJJbnB1dFZlbG9jaXR5LHNlcnZlcmlkLGRlbHRhc2hvdykge1xuXHRcdFNlcnZlckF2YXRhci5fc3VwZXIuY2FsbCh0aGlzLHBvc2l0aW9uLHNpemUsc2VydmVyaWQsZGVsdGFzaG93KTtcblx0XHR0aGlzLmRvbUlkID0gJ3NlcnZlcl9hdmF0YXJfJyArIHNlcnZlcmlkICsgJ18nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAnXycgKyBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpKjEwMDAwMDApKzEpOyA7XG5cdFx0dGhpcy51c2VySW5wdXRWZWxvY2l0eSA9IHVzZXJJbnB1dFZlbG9jaXR5IDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubWFzcyA9IG1hc3M7XG5cdFx0Ly91c2VkIGZvciBzbW9vdGggbW92ZVxuXHRcdHRoaXMuZHRJbnRlZ3JhdGlvbklucHV0ID0gMDtcblx0XHR0aGlzLmxhc3RVc2VySW5wdXRWZWxvY2l0eVggPSAwO1xuXHR9XG5cblx0b3JnLmRieXplcm8udG9vbHMuSW5oZXJpdChkZWltb3MuZWxlbWVudC5TZXJ2ZXJBdmF0YXIsIGRlaW1vcy5lbGVtZW50LkVsZW1lbnQpO1xuXG5cdGRlaW1vcy5lbGVtZW50LlNlcnZlckF2YXRhci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXHRcdFNlcnZlckF2YXRhci5fc3VwZXIucHJvdG90eXBlLmluaXQuY2FsbCh0aGlzKTtcblxuXHRcdHRoaXMuZG9tRWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIitkZWltb3MuRW5naW5lLmFzc2V0VVJMK1wiL3Nwcml0ZXNoZWV0L2NoYXIvXCIrdGhpcy5zZXJ2ZXJpZCtcIi9zcHJpdGVzaGVldC5wbmcpXCI7XG5cblx0XHR0aGlzLmluaXRTcGVha2VyKHRydWUpO1xuXHRcdHRoaXMuaW5pdE5hbWUoKTtcblxuXHRcdC8vbG9hZCB3ZWFwb25cblx0XHRpZighIXRoaXMuaXRlbV9zbG90X3JpZ2h0X2hhbmQpIHtcblx0XHRcdHRoaXMuaW5pdFdlYXBvbih0aGlzLml0ZW1fc2xvdF9yaWdodF9oYW5kLmlkKTtcblx0XHR9XG5cblx0XHRpZighIXRoaXMuSFApIHRoaXMuaW5pdEhQKCk7XG5cdFx0Ly9vYmplY3QgY29sbGlzaW9ucyBhcmUgbWFuYWdlZCBieSBzZXJ2ZXJcblx0XHQvLyB0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkWydib251cyddID0gdHJ1ZTtcblx0fTtcblxuXHRkZWltb3MuZWxlbWVudC5TZXJ2ZXJBdmF0YXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGR0LG5vdykge1xuXG5cdFx0U2VydmVyQXZhdGFyLl9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyxkdCxub3cpO1xuXG5cdFx0aWYodGhpcy5sYXN0VXNlcklucHV0VmVsb2NpdHlYICE9PSB0aGlzLnVzZXJJbnB1dFZlbG9jaXR5LngpIHtcblx0XHRcdHRoaXMuZHRJbnRlZ3JhdGlvbklucHV0ID0gMDtcblx0XHRcdHRoaXMubGFzdFVzZXJJbnB1dFZlbG9jaXR5WCA9IHRoaXMudXNlcklucHV0VmVsb2NpdHkueDtcblx0XHR9XG5cdFx0Ly8gdGhpcy50b01vdmUueCArPSBwYXJzZUZsb2F0KHRoaXMudXNlcklucHV0VmVsb2NpdHkueCAqIHRoaXMuZHRJbnRlZ3JhdGlvbklucHV0LzEwMDApLztcblx0XHQvLyB0aGlzLnRvTW92ZS55ICs9IHBhcnNlRmxvYXQodGhpcy51c2VySW5wdXRWZWxvY2l0eS55ICogZHQvMTAwMCkvO1xuXHRcdHRoaXMudG9Nb3ZlLnggPSBwYXJzZUZsb2F0KHRoaXMudG9Nb3ZlLnggKyB0aGlzLnVzZXJJbnB1dFZlbG9jaXR5LnggKiBkdC8xMDAwICogTWF0aC5taW4oMSx0aGlzLmR0SW50ZWdyYXRpb25JbnB1dC8xMDApKTsvL3RvIG1ha2UgcG9zc2libGUgc21hbGwgbXZ0XG5cdFx0dGhpcy50b01vdmUueSA9IHBhcnNlRmxvYXQodGhpcy50b01vdmUueSArIHRoaXMudXNlcklucHV0VmVsb2NpdHkueSAqIGR0LzEwMDApO1xuXHRcdHRoaXMuZHRJbnRlZ3JhdGlvbklucHV0ICs9IGR0O1xuXG5cdFx0dGhpcy5zcGVha2VyLnNldFRleHQodGhpcy5zYXlpbmcpO1xuXHRcdGlmKCB0aGlzLnNheWluZy5sZW5ndGggPiAwICkge1xuXHRcdFx0dGhpcy5zcGVha2VyLnNob3coKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zcGVha2VyLmhpZGUoKTtcblx0XHR9XG5cdH07XG5cblx0ZGVpbW9zLmVsZW1lbnQuU2VydmVyQXZhdGFyLnByb3RvdHlwZS5vbk1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRTZXJ2ZXJBdmF0YXIuX3N1cGVyLnByb3RvdHlwZS5vbk1vdmUuY2FsbCh0aGlzKTtcblx0XHR0aGlzLnJlbmRlck5hbWUoKTtcblx0XHR0aGlzLnJlbmRlclNwZWFrZXIoKTtcblx0XHRpZighIXRoaXMuSFApIHRoaXMucmVuZGVySFAoKTtcblx0fTtcblxuXHRkZWltb3MuZWxlbWVudC5TZXJ2ZXJBdmF0YXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmKFNlcnZlckF2YXRhci5fc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpKVx0e1xuXHRcdFx0dGhpcy5yZW5kZXJOYW1lKCk7XG5cdFx0XHR0aGlzLnJlbmRlclNwZWFrZXIoKTtcblx0XHR9XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5TZXJ2ZXJBdmF0YXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHRTZXJ2ZXJBdmF0YXIuX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG5cdFx0ZGVsZXRlIGRlaW1vcy5FbmdpbmUuc2NlbmUuYXZhdGFyc1t0aGlzLnNlcnZlcmlkXTtcblx0fVxuXG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBvcmcuZGJ5emVyby5kZWltb3MuZWxlbWVudC5CbG9jayBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxMy8wOC8yMVxuICogQGRlc2NyaXB0aW9uIDogQmxvY2sgZ2FtZVxuICpcbiAqKi9cblxuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXHR2YXIgVmVjdG9yID0gb3JnLmRieXplcm8udG9vbHMuVmVjdG9yO1xuXHRkZWltb3MuZWxlbWVudCA9IGRlaW1vcy5lbGVtZW50IHx8IHt9IDtcblxuXHQvKipcblx0ICogQmxvY2sgY29uc3RydWN0b25cblx0ICogXG5cdCAqIEBwYXJhbSBwb3NpdGlvbiBWZWN0b3IgcG9zaXRpb24gb2YgdGhlIGJsb2NrIGluc2lkZSB0aGUgem9uZVxuXHQgKiBAcGFyYW0gc2l6ZSBWZWN0b3Igc2l6ZSBvZiB0aGUgYmxvY2sgaW5zaWRlIHRoZSB6b25lXG5cdCAqXG5cdCAqICovXG5cdGRlaW1vcy5lbGVtZW50LkJsb2NrID0gZnVuY3Rpb24ocG9zaXRpb24sc2l6ZSx0eXBlKSB7XG5cdFx0dGhpcy5wb3NpdGlvbiBcdD0gcG9zaXRpb24gO1xuXHRcdHRoaXMuaGVpZ2h0XHQ9IHNpemUueSA7XG5cdFx0dGhpcy53aWR0aFx0PSBzaXplLnggO1xuXHRcdHRoaXMudHlwZVx0PSB0eXBlIDtcblx0XHR0aGlzLmlkID0gJ2Jsb2NrXycrcG9zaXRpb24ueCsnXycrcG9zaXRpb24ueSsnXycrc2l6ZS54KydfJytzaXplLnkrJ18nK01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCArIDEpIDtcblx0XHR0aGlzLnZlcnRleFRMID0gbmV3IFZlY3Rvcihwb3NpdGlvbi54LCAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkpO1xuXHRcdHRoaXMudmVydGV4VFIgPSBuZXcgVmVjdG9yKHBvc2l0aW9uLnggKyBzaXplLngsICAgICAgICAgcG9zaXRpb24ueSk7XG5cdFx0dGhpcy52ZXJ0ZXhCTCA9IG5ldyBWZWN0b3IocG9zaXRpb24ueCwgICAgICAgICAgICAgICAgICBwb3NpdGlvbi55ICsgc2l6ZS55KTtcblx0XHR0aGlzLnZlcnRleEJSID0gbmV3IFZlY3Rvcihwb3NpdGlvbi54ICsgc2l6ZS54LCAgICAgICAgIHBvc2l0aW9uLnkgKyBzaXplLnkpO1xuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuQmxvY2sudHlwZSA9IHtcblx0XHRCTE9DSyA6IHt2YWx1ZTogMCwgdHlwZTonYmxvY2snfSxcblx0XHRQTEFURUZPUk0gOiB7dmFsdWU6IDEsIHR5cGU6J3BsYXRlZm9ybSd9LFxuXHR9XG5cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIG9yZy5kYnl6ZXJvLmRlaW1vcy5lbGVtZW50LlpvbmUgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTMvMDgvMDRcbiAqIEBkZXNjcmlwdGlvbiA6IFpvbmUgZ2FtZVxuICpcbiAqKi9cblxuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXHRkZWltb3MuZWxlbWVudCA9IGRlaW1vcy5lbGVtZW50IHx8IHt9IDtcblx0XG5cdC8qKlxuXHQgKiBab25lIGNvbnN0cnVjdG9uXG5cdCAqIFxuXHQgKiBAcGFyYW0gZG9tSWQgZG9jdW1lbnQgaWQgb2YgdGhlIGdhbWV6b25lLCB3aGVyZSB0aGUgYWN0aW9uIGFwcGVuZCAhXG5cdCAqXG5cdCAqICovXG5cdGRlaW1vcy5lbGVtZW50LlpvbmUgPSBmdW5jdGlvbihuYW1lLCBkb21JZCwgd2lkdGgsIGhlaWdodCwgYmxvY2tzKSB7XG5cdFx0dGhpcy5hcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tSWQpIDtcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0dGhpcy5uYW1lID0gbmFtZSA7XG5cdFx0dGhpcy5ibG9ja3MgPSBbXSA7XG5cdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhibG9ja3MpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGJsb2NrID0gYmxvY2tzW2tleXNbaV1dO1xuXHRcdFx0dGhpcy5hZGRCbG9jayhibG9jayk7XG5cdFx0fTtcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50LlpvbmUucHJvdG90eXBlID0ge1xuXHRcdGFkZEJsb2NrQnlJZCA6IGZ1bmN0aW9uKGJsb2NrSWQsdHlwZSkge1xuXHRcdFx0dmFyIGRvbUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChibG9ja0lkKSA7XG5cdFx0XHR2YXIgcG9zaXRpb24gPSBuZXcgb3JnLmRieXplcm8udG9vbHMuVmVjdG9yKGRvbUVsZW0ub2Zmc2V0TGVmdCxkb21FbGVtLm9mZnNldFRvcCkgO1xuXHRcdFx0dmFyIHNpemUgPSBuZXcgb3JnLmRieXplcm8udG9vbHMuVmVjdG9yKGRvbUVsZW0ub2Zmc2V0V2lkdGgsZG9tRWxlbS5vZmZzZXRIZWlnaHQpIDtcblxuXHRcdFx0dmFyIHR5cGUgPSAodHlwZSA9PSAncGxhdGVmb3JtZScgPyBkZWltb3MuZWxlbWVudC5CbG9jay50eXBlLlBMQVRFRk9STSA6IGRlaW1vcy5lbGVtZW50LkJsb2NrLnR5cGUuQkxPQ0spIDtcblx0XHRcdHZhciBibG9jayA9IG5ldyBkZWltb3MuZWxlbWVudC5CbG9jayhwb3NpdGlvbixzaXplLHR5cGUpIDtcblx0XHRcdHRoaXMuYWRkQmxvY2soYmxvY2spIDtcblx0XHR9LFxuXHRcdGFkZEJsb2NrIDogZnVuY3Rpb24oYmxvY2spIHtcblx0XHRcdHZhciBkb21CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0ZG9tQmxvY2suc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdFx0ZG9tQmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG5cdFx0XHRkb21CbG9jay5zdHlsZS53aWR0aCA9IGJsb2NrLndpZHRoKydweCc7XG5cdFx0XHRkb21CbG9jay5zdHlsZS5oZWlnaHQgPSBibG9jay5oZWlnaHQrJ3B4Jztcblx0XHRcdGRvbUJsb2NrLnN0eWxlLmxlZnQgPSBibG9jay5wb3NpdGlvbi54KydweCc7XG5cdFx0XHRkb21CbG9jay5zdHlsZS50b3AgPSBibG9jay5wb3NpdGlvbi55KydweCc7XG5cdFx0XHRkb21CbG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDE4NiwgMTg2LCAxODYpJztcblx0XHRcdHRoaXMuYXJlYS5hcHBlbmRDaGlsZChkb21CbG9jayk7XG5cdFx0XHR0aGlzLmJsb2Nrcy5wdXNoKGJsb2NrKSA7XG5cdFx0fSxcblx0fVxuXG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBBdmF0YXIgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTQvMTEvMDdcbiAqIEBkZXNjcmlwdGlvbiA6IFByb2plY3RpbGUgbW9kZWxcbiAqXG4gKiovXG5cbihmdW5jdGlvbihkZWltb3MsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0ZGVpbW9zLmVsZW1lbnQgPSBkZWltb3MuZWxlbWVudCB8fCB7fSA7XG5cblx0LyoqXG5cdCAqIFByb2plY3RpbGUgY29uc3RydWN0b3Jcblx0ICpcblx0ICoqL1xuXHR2YXIgUHJvamVjdGlsZSA9IGRlaW1vcy5lbGVtZW50LlByb2plY3RpbGUgPSBmdW5jdGlvbiAoc2VydmVyaWQscG9zaXRpb24sdmVsb2NpdHksYWNjZWxlcmF0aW9uLHNpemUsbWFzcyx0ZW1wbGF0ZUlkLHNraW4sY29sb3IsZGFtYWdlLG9yaWVudGF0aW9uLG93bmVySWQsZGVsdGFzaG93KSB7XG5cdFx0UHJvamVjdGlsZS5fc3VwZXIuY2FsbCh0aGlzLHBvc2l0aW9uLHNpemUsc2VydmVyaWQsZGVsdGFzaG93KTtcblx0XHR0aGlzLmRvbUlkID0gJ3Byb2plY3RpbGVfJyArIHNlcnZlcmlkICsgJ18nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAnXycgKyBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpKjEwMDAwMDApKzEpOyA7XG5cdFx0dGhpcy5vd25lciA9IG51bGw7XG5cdFx0dGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xuXHRcdHRoaXMuYWNjZWxlcmF0aW9uID0gYWNjZWxlcmF0aW9uO1xuXHRcdHRoaXMuc2tpbiA9IHNraW47XG5cdFx0dGhpcy5vcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uO1xuXHRcdHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuXHRcdHRoaXMubWFzcyA9IG1hc3M7XG5cdH1cblxuXHRvcmcuZGJ5emVyby50b29scy5Jbmhlcml0KGRlaW1vcy5lbGVtZW50LlByb2plY3RpbGUsIGRlaW1vcy5lbGVtZW50LkVsZW1lbnQpO1xuXG5cdGRlaW1vcy5lbGVtZW50LlByb2plY3RpbGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcblx0XHRQcm9qZWN0aWxlLl9zdXBlci5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xuXHRcdHRoaXMuZG9tRWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIitkZWltb3MuRW5naW5lLmFzc2V0VVJMK1wiL2ltYWdlcy9zcHJpdGVzaGVldC9cIit0aGlzLnNraW4rXCIucG5nKVwiO1xuXHRcdGlmKHRoaXMub3JpZW50YXRpb24gPT09ICdsZWZ0Jyl7XG5cdFx0XHR0aGlzLmRvbUVsZW0uc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWSA9ICctJysodGhpcy5oZWlnaHQpKydweCc7XG5cdFx0fVxuXHRcdC8vb2JqZWN0IGNvbGxpc2lvbnMgYXJlIG1hbmFnZWQgYnkgc2VydmVyXG5cdFx0Ly8gdGhpcy5jb2xsaXNpb25UeXBlRW5hYmxlZFsnYXZhdGFycyddID0gdHJ1ZTtcblx0XHQvLyB0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkWydtb25zdGVycyddID0gdHJ1ZTtcblx0XHR0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkWydwbGF0ZWZvcm1lJ10gPSBmYWxzZTtcblx0fTtcblx0ZGVpbW9zLmVsZW1lbnQuUHJvamVjdGlsZS5wcm90b3R5cGUub25BcmVhQ29sbGlzaW9uVG9wID0gZnVuY3Rpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQpIHtcblx0XHQvL2RvIG5vdGhpbmcgIVxuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuUHJvamVjdGlsZS5wcm90b3R5cGUub25BcmVhQ29sbGlzaW9uID0gZnVuY3Rpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQpIHtcblx0XHR0aGlzLm9uQmxvY2tDb2xsaXNpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQpO1xuXHR9O1xuXG5cdGRlaW1vcy5lbGVtZW50LlByb2plY3RpbGUucHJvdG90eXBlLm9uQmxvY2tDb2xsaXNpb24gPSBmdW5jdGlvbihjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCkge1xuXHRcdGRlaW1vcy5FbmdpbmUuc2NlbmUuZGVzdHJveVByb2plY3RpbGUodGhpcyk7XG5cdH07XG5cblx0ZGVpbW9zLmVsZW1lbnQuUHJvamVjdGlsZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdFByb2plY3RpbGUuX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG5cdFx0ZGVsZXRlIGRlaW1vcy5FbmdpbmUuc2NlbmUucHJvamVjdGlsZXNbdGhpcy5zZXJ2ZXJpZF07XG5cdH1cblxufSkob3JnLmRieXplcm8uZGVpbW9zLCBkb2N1bWVudCk7IiwiLyoqXG4gKlxuICogTW9uc3RlciBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxNC8xMS8yNFxuICogQGRlc2NyaXB0aW9uIDogTW9uc3RlciBtb2RlbFxuICpcbiAqKi9cblxuKGZ1bmN0aW9uKGRlaW1vcyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblxuXHRkZWltb3MuZWxlbWVudCA9IGRlaW1vcy5lbGVtZW50IHx8IHt9IDtcblxuXHQvKipcblx0ICogTW9uc3RlciBjb25zdHJ1Y3RvclxuXHQgKlxuXHQgKiovXG5cdHZhciBNb25zdGVyID0gZGVpbW9zLmVsZW1lbnQuTW9uc3RlciA9IGZ1bmN0aW9uIChzZXJ2ZXJpZCxwb3NpdGlvbix2ZWxvY2l0eSxhY2NlbGVyYXRpb24sc2l6ZSxtYXNzLHRlbXBsYXRlaWQsc2tpbixjb2xvcixuYW1lLGRhbWFnZSxvcmllbnRhdGlvbixkZWx0YXNob3cpIHtcblx0XHRNb25zdGVyLl9zdXBlci5jYWxsKHRoaXMscG9zaXRpb24sc2l6ZSxzZXJ2ZXJpZCxkZWx0YXNob3cpO1xuXHRcdHRoaXMuZG9tSWQgPSAnbW9uc3Rlcl8nICsgc2VydmVyaWQgKyAnXycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICdfJyArIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkqMTAwMDAwMCkrMSk7IDtcblx0XHR0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XG5cdFx0dGhpcy5hY2NlbGVyYXRpb24gPSBhY2NlbGVyYXRpb247XG5cdFx0dGhpcy5zcGVha2luZyA9IGZhbHNlIDtcblx0XHR0aGlzLnNwZWFrZXIgPSBudWxsO1xuXHRcdHRoaXMubW92ZV9zcGVlZCA9IDA7XG5cdFx0dGhpcy5qdW1wX3NwZWVkID0gMDtcblx0XHR0aGlzLnNheWluZyA9IFwiXCI7XG5cdFx0dGhpcy5sYXN0U2F5ZWQgPSAwO1xuXHRcdHRoaXMuc2tpbiA9IHNraW47XG5cdFx0dGhpcy50ZW1wbGF0ZUlkID0gdGVtcGxhdGVpZDtcblx0XHR0aGlzLmNvbG9yID0gY29sb3I7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmRhbWFnZSA9IGRhbWFnZTtcblx0XHR0aGlzLm1hc3MgPSBtYXNzO1xuXHR9XG5cblx0b3JnLmRieXplcm8udG9vbHMuSW5oZXJpdChkZWltb3MuZWxlbWVudC5Nb25zdGVyLCBkZWltb3MuZWxlbWVudC5FbGVtZW50KTtcblxuXHRkZWltb3MuZWxlbWVudC5Nb25zdGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKXtcblx0XHRNb25zdGVyLl9zdXBlci5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xuXHRcdHRoaXMuZG9tRWxlbS5jbGFzc05hbWUgPSBcIm1vbnN0ZXJfXCIrdGhpcy5za2luO1xuXG5cdFx0Ly9zZXQgc3ByaXRlc2hlZXRcblx0XHR0aGlzLmRvbUVsZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIrZGVpbW9zLkVuZ2luZS5hc3NldFVSTCtcIi9zcHJpdGVzaGVldC9tb25zdGVyL1wiK3RoaXMudGVtcGxhdGVJZCtcIi9jb2xvci9cIit0aGlzLmNvbG9yK1wiL3Nwcml0ZXNoZWV0LnBuZylcIjtcblxuXHRcdC8vYWRkIHNwZWFrZXJcblx0XHR0aGlzLmluaXRTcGVha2VyKGZhbHNlKTtcblxuXHRcdC8vc2hvdyBtYWluIG5hbWVcblx0XHRpZighIXRoaXMubmFtZSkge1xuXHRcdFx0dGhpcy5pbml0TmFtZSh0cnVlKTtcblxuXHRcdFx0Ly9yZWRyYXcgSFAgdG8gYXBwbHkgY29ycmVjdCBuYW1lIHdpZHRoXG5cdFx0XHR0aGlzLnJlbmRlckhQKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5uYW1lV2lkdGggPSBkb21fZWxlbV9uYW1lLm9mZnNldFdpZHRoO1xuXHRcdHRoaXMubmFtZUhlaWdodCA9IGRvbV9lbGVtX25hbWUub2Zmc2V0SGVpZ2h0O1xuXG5cdFx0Ly9sb2FkIHdlYXBvblxuXHRcdGlmKCEhdGhpcy53ZWFwb25JZCkge1xuXHRcdFx0dGhpcy5pbml0V2VhcG9uKHRoaXMud2VhcG9uSWQpO1xuXHRcdH1cblx0XHQvL29iamVjdCBjb2xsaXNpb25zIGFyZSBtYW5hZ2VkIGJ5IHNlcnZlclxuXHRcdC8vIHRoaXMuY29sbGlzaW9uVHlwZUVuYWJsZWRbJ2F2YXRhcnMnXSA9IHRydWU7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5Nb25zdGVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkdCwgbm93KSB7XG5cdFx0Ly9jYWxsIHBhcmVudCB1cGRhdGVcblx0XHRNb25zdGVyLl9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyxkdCxub3cpO1xuXG5cdFx0Ly90b2dnbGUgc3BlYWtlciBpZiBuZWVkZWRcblx0XHRpZih0aGlzLnNwZWFraW5nKSB7XG5cdFx0XHR2YXIgbmV3X3NheWluZyA9IHRoaXMuZ2V0U2F5aW5nKCk7XG5cdFx0XHRpZih0aGlzLnNheWluZyAhPT0gbmV3X3NheWluZykge1xuXHRcdFx0XHR0aGlzLnNheWluZyA9IG5ld19zYXlpbmc7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zZW5kU3luYycpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZih0aGlzLmxhc3RTYXllZCArIDUwMDAgPCBub3cgJiYgdGhpcy5zYXlpbmcgIT09ICcnKSB7XG5cdFx0XHRcdHRoaXMuc3BlYWtlci5oaWRlKCk7XG5cdFx0XHRcdHRoaXMuc3BlYWtlci5zZXRUZXh0KCcnKTtcblx0XHRcdFx0dGhpcy5zYXlpbmcgPSAnJztcblx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnNlbmRTeW5jJyk7XG5cdFx0XHR9IFxuXHRcdH1cblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50Lk1vbnN0ZXIucHJvdG90eXBlLm9uTW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdE1vbnN0ZXIuX3N1cGVyLnByb3RvdHlwZS5vbk1vdmUuY2FsbCh0aGlzKTtcblx0XHRpZighIXRoaXMubmFtZSkgdGhpcy5yZW5kZXJOYW1lKCk7XG5cdFx0aWYodGhpcy5zYXlpbmcubGVuZ3RoID4gMCkgdGhpcy5yZW5kZXJTcGVha2VyKCk7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5Nb25zdGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcblx0XHRpZihNb25zdGVyLl9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcykpIHtcblx0XHRcdGlmKCEhdGhpcy5uYW1lKSB0aGlzLnJlbmRlck5hbWUoKTtcblx0XHRcdGlmKHRoaXMuc2F5aW5nLmxlbmd0aCA+IDApIHRoaXMucmVuZGVyU3BlYWtlcigpO1xuXHRcdH1cblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50Lk1vbnN0ZXIucHJvdG90eXBlLm9uQmxvY2tDb2xsaXNpb25MZWZ0ID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5fdGVtcEJsb2NrQ29sbGlzaW9uTGVmdFJpZ2h0KCk7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5Nb25zdGVyLnByb3RvdHlwZS5vbkJsb2NrQ29sbGlzaW9uUmlnaHQgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLl90ZW1wQmxvY2tDb2xsaXNpb25MZWZ0UmlnaHQoKTtcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50Lk1vbnN0ZXIucHJvdG90eXBlLm9uQXJlYUNvbGxpc2lvbkxlZnQgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLl90ZW1wQmxvY2tDb2xsaXNpb25MZWZ0UmlnaHQoKTtcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50Lk1vbnN0ZXIucHJvdG90eXBlLm9uQXJlYUNvbGxpc2lvblJpZ2h0ID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5fdGVtcEJsb2NrQ29sbGlzaW9uTGVmdFJpZ2h0KCk7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5Nb25zdGVyLnByb3RvdHlwZS5fdGVtcEJsb2NrQ29sbGlzaW9uTGVmdFJpZ2h0ID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy52ZWxvY2l0eS54ID0gLTEqcGFyc2VJbnQodGhpcy52ZWxvY2l0eS54KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBOYW1lXG5cdCAqL1xuXHRkZWltb3MuZWxlbWVudC5Nb25zdGVyLnByb3RvdHlwZS5pbml0TmFtZSA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgZG9tX2VsZW1fbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0ZG9tX2VsZW1fbmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLHRoaXMuZG9tSWQrJ19uYW1lJykgO1xuXG5cdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0XHRkb21fZWxlbV9uYW1lLmlubmVySFRNTCA9IHRoaXMubmFtZTtcblx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmRpc3BsYXkgID0gJ25vbmUnIDtcblx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmZvbnRTaXplID0gJzEycHgnO1xuXHRcdGRvbV9lbGVtX25hbWUuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJztcblx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmNvbG9yID0gJyMnK3RoaXMuY29sb3I7XG5cdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS56SW5kZXggPSAxMDtcblx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLm9wYWNpdHkgPSAwLjc7XG5cdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS50ZXh0U2hhZG93ID0gJ3doaXRlIC0ycHggLTJweCAycHgsIHdoaXRlIDJweCAycHggMnB4LCB3aGl0ZSAtMnB4IDJweCAycHgsIHdoaXRlIDJweCAtMnB4IDJweCc7XG5cblx0XHRkZWltb3MuRW5naW5lLnpvbmUuYXJlYS5hcHBlbmRDaGlsZChkb21fZWxlbV9uYW1lKSA7XG5cdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5kaXNwbGF5ICA9ICdibG9jaycgO1xuXG5cdFx0dGhpcy5kb21FbGVtTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZG9tSWQrJ19uYW1lJyk7XG5cblx0XHR0aGlzLnJlbmRlck5hbWUuY2FsbCh0aGlzKTtcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50Lk1vbnN0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHRNb25zdGVyLl9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuXHRcdGRlbGV0ZSBkZWltb3MuRW5naW5lLnNjZW5lLm1vbnN0ZXJzW3RoaXMuc2VydmVyaWRdO1xuXHR9XG5cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIEl0ZW0gT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTQvMTEvMjdcbiAqIEBkZXNjcmlwdGlvbiA6IEl0ZW0gbW9kZWxcbiAqXG4gKiovXG5cbihmdW5jdGlvbihkZWltb3MsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0ZGVpbW9zLmVsZW1lbnQgPSBkZWltb3MuZWxlbWVudCB8fCB7fSA7XG5cblx0LyoqXG5cdCAqIEl0ZW0gY29uc3RydWN0b3Jcblx0ICpcblx0ICoqL1xuXHR2YXIgSXRlbSA9IGRlaW1vcy5lbGVtZW50Lkl0ZW0gPSBmdW5jdGlvbiAoc2VydmVyaWQscG9zaXRpb24sdmVsb2NpdHksYWNjZWxlcmF0aW9uLHNpemUsbWFzcyx0ZW1wbGF0ZWlkLHNraW4sY29sb3IsbmFtZSxvcmllbnRhdGlvbixkZWx0YXNob3cpIHtcblx0XHRJdGVtLl9zdXBlci5jYWxsKHRoaXMscG9zaXRpb24sc2l6ZSxzZXJ2ZXJpZCxkZWx0YXNob3cpO1xuXHRcdHRoaXMuZG9tSWQgPSAnaXRlbV8nICsgc2VydmVyaWQgKyAnXycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICdfJyArIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkqMTAwMDAwMCkrMSk7IDtcblx0XHR0aGlzLnZlbG9jaXR5ID0gdmVsb2NpdHk7XG5cdFx0dGhpcy5hY2NlbGVyYXRpb24gPSBhY2NlbGVyYXRpb247XG5cdFx0dGhpcy5tb3ZlX3NwZWVkID0gMDtcblx0XHR0aGlzLmp1bXBfc3BlZWQgPSAwO1xuXHRcdHRoaXMuc2tpbiA9IHNraW47XG5cdFx0dGhpcy50ZW1wbGF0ZUlkID0gdGVtcGxhdGVpZDtcblx0XHR0aGlzLmNvbG9yID0gY29sb3I7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmRlbHRhc2hvdyA9IGRlbHRhc2hvdztcblx0XHR0aGlzLm1hc3MgPSBtYXNzO1xuXHR9XG5cblx0b3JnLmRieXplcm8udG9vbHMuSW5oZXJpdChkZWltb3MuZWxlbWVudC5JdGVtLCBkZWltb3MuZWxlbWVudC5FbGVtZW50KTtcblxuXG5cdGRlaW1vcy5lbGVtZW50Lkl0ZW0ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpe1xuXHRcdEl0ZW0uX3N1cGVyLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyk7XG5cdFx0dGhpcy5kb21FbGVtLmNsYXNzTmFtZSA9IFwiaXRlbV9cIit0aGlzLnNraW47XG5cblx0XHQvL3NldCBzcHJpdGVzaGVldFxuXHRcdHRoaXMuZG9tRWxlbS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIitkZWltb3MuRW5naW5lLmFzc2V0VVJMK1wiL3Nwcml0ZXNoZWV0L2l0ZW0vXCIrdGhpcy50ZW1wbGF0ZUlkK1wiL1wiK3RoaXMuY29sb3IrXCIvc3ByaXRlc2hlZXQucG5nKVwiO1xuXHRcdHRoaXMuZG9tRWxlbS5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YID0gXCItODAwcHhcIjtcblxuXHRcdC8vc2hvdyBtYWluIG5hbWVcblx0XHRpZighIXRoaXMubmFtZSkgdGhpcy5pbml0TmFtZSh0cnVlKTtcblxuXHRcdHRoaXMubmFtZVdpZHRoID0gZG9tX2VsZW1fbmFtZS5vZmZzZXRXaWR0aDtcblx0XHR0aGlzLm5hbWVIZWlnaHQgPSBkb21fZWxlbV9uYW1lLm9mZnNldEhlaWdodDtcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50Lkl0ZW0ucHJvdG90eXBlLm9uTW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdEl0ZW0uX3N1cGVyLnByb3RvdHlwZS5vbk1vdmUuY2FsbCh0aGlzKTtcblx0XHRpZighIXRoaXMubmFtZSkgdGhpcy5yZW5kZXJOYW1lKCk7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5JdGVtLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcblx0XHRpZihJdGVtLl9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcykpIHtcblx0XHRcdGlmKCEhdGhpcy5uYW1lKSB0aGlzLnJlbmRlck5hbWUoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogTmFtZVxuXHQgKi9cblx0ZGVpbW9zLmVsZW1lbnQuSXRlbS5wcm90b3R5cGUuaW5pdE5hbWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYodGhpcy5uYW1lICE9PSAnJykge1xuXHRcdFx0dmFyIGRvbV9lbGVtX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLHRoaXMuZG9tSWQrJ19uYW1lJykgO1xuXG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5pbm5lckhUTUwgPSB0aGlzLm5hbWU7XG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmRpc3BsYXkgID0gJ25vbmUnIDtcblx0XHRcdGRvbV9lbGVtX25hbWUuc3R5bGUuZm9udFNpemUgPSAnMTJweCc7XG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmNvbG9yID0gJyMnK3RoaXMuY29sb3I7XG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLnpJbmRleCA9IDEwO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5vcGFjaXR5ID0gMC43O1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS50ZXh0U2hhZG93ID0gJ3doaXRlIC0ycHggLTJweCAycHgsIHdoaXRlIDJweCAycHggMnB4LCB3aGl0ZSAtMnB4IDJweCAycHgsIHdoaXRlIDJweCAtMnB4IDJweCc7XG5cblx0XHRcdGRlaW1vcy5FbmdpbmUuem9uZS5hcmVhLmFwcGVuZENoaWxkKGRvbV9lbGVtX25hbWUpIDtcblx0XHRcdGRvbV9lbGVtX25hbWUuc3R5bGUuZGlzcGxheSAgPSAnYmxvY2snIDtcblxuXHRcdFx0dGhpcy5kb21FbGVtTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZG9tSWQrJ19uYW1lJyk7XG5cblx0XHRcdHRoaXMucmVuZGVyTmFtZS5jYWxsKHRoaXMpO1xuXHRcdH1cblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50Lkl0ZW0ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHRJdGVtLl9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuXHRcdGRlbGV0ZSBkZWltb3MuRW5naW5lLnNjZW5lLml0ZW1zW3RoaXMuc2VydmVyaWRdO1xuXHR9XG5cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIG9yZy5kYnl6ZXJvLmRlaW1vcy5lbGVtZW50LkF0dGFja1pvbmUgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTUvMDEvMjFcbiAqIEBkZXNjcmlwdGlvbiA6IEF0dGFjayB6b25lIGNyZWF0ZSB0byBkYW1hZ2Ugb3RoZXIgZW50aXRpZXNcbiAqXG4gKiovXG5cblxuKGZ1bmN0aW9uKGRlaW1vcyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblx0dmFyIFZlY3RvciA9IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3Rvcjtcblx0ZGVpbW9zLmVsZW1lbnQgPSBkZWltb3MuZWxlbWVudCB8fCB7fSA7XG5cblx0LyoqXG5cdCAqIEF0dGFja1pvbmUgY29uc3RydWN0b25cblx0ICogXG5cdCAqIEBwYXJhbSBwb3NpdGlvbiBWZWN0b3IgcG9zaXRpb24gb2YgdGhlIGJsb2NrIGluc2lkZSB0aGUgem9uZVxuXHQgKiBAcGFyYW0gc2l6ZSBWZWN0b3Igc2l6ZSBvZiB0aGUgYmxvY2sgaW5zaWRlIHRoZSB6b25lXG5cdCAqXG5cdCAqICovXG5cdGRlaW1vcy5lbGVtZW50LkF0dGFja1pvbmUgPSBmdW5jdGlvbihpZCxwb3NpdGlvbixzaXplLG93bmVySWQsZHVyYXRpb24pIHtcblx0XHR0aGlzLmlkXHRcdFx0PSBpZDtcblx0XHR0aGlzLmRvbUlkXHRcdD0gJ2F0dGFja3pvbmUtJytpZDtcblx0XHR0aGlzLnBvc2l0aW9uXHQ9IHBvc2l0aW9uO1xuXHRcdHRoaXMuc2l6ZVx0XHQ9IHNpemU7XG5cdFx0dGhpcy5vd25lcklkXHQ9IG93bmVySWQ7XG5cdFx0dGhpcy5kdXJhdGlvblx0PSBkdXJhdGlvbjtcblx0XHR0aGlzLnZlcnRleFRMID0gbmV3IFZlY3Rvcihwb3NpdGlvbi54LFx0XHRcdFx0cG9zaXRpb24ueSk7XG5cdFx0dGhpcy52ZXJ0ZXhUUiA9IG5ldyBWZWN0b3IocG9zaXRpb24ueCArIHNpemUueCxcdFx0cG9zaXRpb24ueSk7XG5cdFx0dGhpcy52ZXJ0ZXhCTCA9IG5ldyBWZWN0b3IocG9zaXRpb24ueCxcdFx0XHRcdHBvc2l0aW9uLnkgKyBzaXplLnkpO1xuXHRcdHRoaXMudmVydGV4QlIgPSBuZXcgVmVjdG9yKHBvc2l0aW9uLnggKyBzaXplLngsXHRcdHBvc2l0aW9uLnkgKyBzaXplLnkpO1xuXHRcdHRoaXMubGFzdFVwZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuQXR0YWNrWm9uZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oZHQsIG5vdykge1xuXHRcdHZhciBkb21fZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0ZG9tX2VsZW0uc2V0QXR0cmlidXRlKFwiaWRcIix0aGlzLmRvbUlkKTtcblxuXHRcdGRvbV9lbGVtLnN0eWxlLndpZHRoID0gcGFyc2VJbnQodGhpcy5zaXplLngpKydweCc7XG5cdFx0ZG9tX2VsZW0uc3R5bGUuaGVpZ2h0ICA9IHBhcnNlSW50KHRoaXMuc2l6ZS55KSsncHgnO1xuXG5cdFx0ZG9tX2VsZW0uc3R5bGUuZGlzcGxheSAgPSAnYmxvY2snO1xuXHRcdGRvbV9lbGVtLnN0eWxlLnBvc2l0aW9uICA9ICdhYnNvbHV0ZSc7XG5cblx0XHRkb21fZWxlbS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgID0gJyMzMzMnO1xuXHRcdGRvbV9lbGVtLnN0eWxlLm9wYWNpdHkgID0gJzAuNSc7XG5cblx0XHR2YXIgdHJhbnNsYXRpb24gPSBcInRyYW5zbGF0ZTNkKFwiKyh0aGlzLnBvc2l0aW9uLngpK1wicHgsXCIrKHRoaXMucG9zaXRpb24ueSkrXCJweCwwcHgpXCI7XG5cdFx0ZG9tX2VsZW0uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNsYXRpb247XG5cdFx0ZG9tX2VsZW0uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNsYXRpb247XG5cblx0XHRkZWltb3MuRW5naW5lLnpvbmUuYXJlYS5hcHBlbmRDaGlsZChkb21fZWxlbSk7XG5cblx0XHR0aGlzLmRvbUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRvbUlkKTtcblx0XHR0aGlzLmRvbUVsZW1XaWR0aCA9IHRoaXMuZG9tRWxlbS5vZmZzZXRXaWR0aDsvL3VzZWZ1bGwgZm9yIHBvc2l0aW9ubmluZyBuYW1lIGFuZCBzcGVha2VyXG5cdFx0dGhpcy5kb21FbGVtSGVpZ2h0ID0gdGhpcy5kb21FbGVtLm9mZnNldEhlaWdodDsvL3VzZWZ1bGwgZm9yIHBvc2l0aW9ubmluZyBuYW1lIGFuZCBzcGVha2VyXG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5BdHRhY2tab25lLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihkdCwgbm93KSB7XG5cdFx0dGhpcy5kdXJhdGlvbiArPSAodGhpcy5sYXN0VXBkYXRlIC0gbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuXHRcdGlmKHRoaXMuZHVyYXRpb24gPCAwKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuQXR0YWNrWm9uZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuY2xlYW5Eb20oKTtcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50LkF0dGFja1pvbmUucHJvdG90eXBlLmNsZWFuRG9tID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHBhcmVudE5vZGUgPSAgdGhpcy5kb21FbGVtLnBhcmVudE5vZGU7XG5cdFx0aWYocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW0pO1xuXHR9XG5cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKioqXG4gKlxuICogb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuV2Vic29ja2V0Q2xpZW50IE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA1LzA0XG4gKiBAZGVzY3JpcHRpb24gOiBVc2Ugd2Vic29ja2V0IHRvIGNvbm5lY3QgdG8gZGlzdGFudCBzZXJ2ZXJcbiAqXG4gKiovXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXHRcblx0dmFyIEV2ZW50TWFuYWdlciA9IG9yZy5kYnl6ZXJvLnRvb2xzLkV2ZW50TWFuYWdlcjtcblx0ZGVpbW9zLm5ldHdvcmsgPSBkZWltb3MubmV0d29yayB8fCB7fSA7XG5cblx0LyoqXG5cdCAqIFdlYnNvY2tldENsaWVudCBjb25zdHJ1Y3RvclxuXHQgKiBcblx0ICogQHBhcmFtIHN0cmluZyBob3N0bmFtZSBvZiB0aGUgcmVtb3RlIHdlYnNvY2tldCBzZXJ2ZXJcblx0ICogQHBhcmFtIGludCBwb3J0IG9mIHRoZSByZW1vdGUgd2Vic29ja2V0IHNlcnZlclxuXHQgKiBAcGFyYW0gV2Vic29ja2V0Q2xpZW50TW9kZSBNb2RlIG9mIHRoZSBjbGllbnQsIGNhbiBiZSBXZWJzb2NrZXRDbGllbnRNb2RlLkRFQlVHIHRvIHNob3cgbG9nc1xuXHQgKlxuXHQgKiAqL1xuXHRkZWltb3MubmV0d29yay5XZWJzb2NrZXRDbGllbnQgPSBmdW5jdGlvbihob3N0bmFtZSxwb3J0LG1vZGUpIHtcblx0XHR0aGlzLnJldHJ5Q29ubmVjdGlvbiA9IG51bGw7XG5cdFx0dGhpcy5zZXJ2ZXJfaG9zdG5hbWUgPSBob3N0bmFtZTtcblx0XHR0aGlzLnNlcnZlcl9wb3J0ID0gcG9ydDtcblx0XHR0aGlzLmNvbm5lY3Rpb25fc3RyZWFtID0gJ3dzOi8vJyt0aGlzLnNlcnZlcl9ob3N0bmFtZSsnOicrdGhpcy5zZXJ2ZXJfcG9ydDtcblxuXHRcdHRoaXMuc2VydmVyX2Nvbm5lY3RlZCA9IGZhbHNlO1xuXHRcdHRoaXMuc2Vzc2lvbl9pZCA9IG51bGw7XG5cdH1cblxuXG5cdGRlaW1vcy5uZXR3b3JrLldlYnNvY2tldENsaWVudC5wcm90b3R5cGUgPSAge1xuXHRcdC8qKipcblx0XHQgKiBDb25uZWN0aW9uIE1ldGhvZFxuXHRcdCAqIFVzZSB0byBjb25uZWN0IHRvIHJlbW90ZSB3ZWJzb2NrZXQgc2VydmVyXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJuIHZvaWRcblx0XHQgKlxuXHRcdCAqKi9cblx0XHRjb25uZWN0IDogZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gaWYgdXNlciBpcyBydW5uaW5nIG1vemlsbGEgdGhlbiB1c2UgaXQncyBidWlsdC1pbiBXZWJTb2NrZXRcblx0XHRcdHdpbmRvdy5XZWJTb2NrZXQgPSB3aW5kb3cuV2ViU29ja2V0IHx8IHdpbmRvdy5Nb3pXZWJTb2NrZXQ7XG5cblx0XHRcdHZhciBzZXJ2ZXJfaG9zdG5hbWUgPSB0aGlzLnNlcnZlcl9ob3N0bmFtZSA7XG5cdFx0XHR2YXIgc2VydmVyX3BvcnQgPSB0aGlzLnNlcnZlcl9wb3J0IDtcblxuXHRcdFx0dmFyIGNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KHRoaXMuY29ubmVjdGlvbl9zdHJlYW0pO1xuXG5cdFx0XHRjb25uZWN0aW9uLm9ub3BlbiA9IHRoaXMub25vcGVuLmJpbmQodGhpcykgO1xuXHRcdFx0Y29ubmVjdGlvbi5vbmNsb3NlID0gdGhpcy5vbmNsb3NlLmJpbmQodGhpcykgO1xuXHRcdFx0Y29ubmVjdGlvbi5vbmVycm9yID0gdGhpcy5vbmVycm9yLmJpbmQodGhpcykgO1xuXHRcdFx0Y29ubmVjdGlvbi5vbm1lc3NhZ2UgPSB0aGlzLm9ubWVzc2FnZS5iaW5kKHRoaXMpIDtcblxuXHRcdFx0dGhpcy5jb25uZWN0aW9uID0gY29ubmVjdGlvbiA7XG5cdFx0fSxcblxuXHRcdC8qKipcblx0XHQgKiBTZW5kIE1lc3NhZ2UgTWV0aG9kXG5cdFx0ICpcblx0XHQgKiBiaW5kIHRvIEV2ZW50IG9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnNlbmRNZXNzYWdlXG5cdFx0ICogXG5cdFx0ICogQHBhcmFtIE9iamVjdCB0cmlnZ2VkIGV2ZW50XG5cdFx0ICogQHJldHVybiB2b2lkXG5cdFx0ICpcblx0XHQgKiovXG5cdFx0c2VuZDogZnVuY3Rpb24oZSkge1xuXHRcdFx0dGhpcy5jb25uZWN0aW9uLnNlbmQoSlNPTi5zdHJpbmdpZnkoZS5tZXNzYWdlKSkgO1xuXHRcdH0sXG5cblx0XHR0cnlSZWxvZzogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL3RyeSB0byByZWNvbm5lY3QgZWFjaCBzZWNvbmRcblx0XHRcdC8vaWYodGhpcy5jb25uZWN0aW9uICE9IG51bGwpIHRoaXMuY29ubmVjdGlvbi5jbG9zZSgpIDtcblx0XHRcdHRoaXMuY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQodGhpcy5jb25uZWN0aW9uX3N0cmVhbSk7XG5cdFx0XHR2YXIgcmVsb2cgPSBmdW5jdGlvbigpe1xuXHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5jb25zb2xlLndyaXRlXCIse1wiZGV0YWlsXCI6e1wibWVzc2FnZVwiOlwiVHJ5aW5nIHRvIHJlY29ubmVjdGluZy4uLlwifX0pO1xuXHRcdFx0XHRpZih0aGlzLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSAhPT0gV2ViU29ja2V0Lk9QRU4pIHtcblx0XHRcdFx0XHR0aGlzLmNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KHRoaXMuY29ubmVjdGlvbl9zdHJlYW0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuY29ubmVjdGlvbi5vbm9wZW4gPSB0aGlzLm9ub3Blbi5iaW5kKHRoaXMpIDtcblx0XHRcdFx0XHR0aGlzLmNvbm5lY3Rpb24ub25jbG9zZSA9IHRoaXMub25jbG9zZS5iaW5kKHRoaXMpIDtcblx0XHRcdFx0XHR0aGlzLmNvbm5lY3Rpb24ub25lcnJvciA9IHRoaXMub25lcnJvci5iaW5kKHRoaXMpIDtcblx0XHRcdFx0XHR0aGlzLmNvbm5lY3Rpb24ub25tZXNzYWdlID0gdGhpcy5vbm1lc3NhZ2UuYmluZCh0aGlzKSA7XG5cblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmNvbm5lY3RlZFwiLHt9KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHNldGludGVyY2FsSWQpIDtcblx0XHRcdFx0fVxuXHRcdFx0fSA7XG5cdFx0XHR2YXIgc2V0aW50ZXJjYWxJZCA9IHNldEludGVydmFsKHJlbG9nLmJpbmQodGhpcyksMTAwMCkgO1xuXHRcdH0sXG5cdFx0b25vcGVuOiBmdW5jdGlvbiAoZSkge1xuXHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5jb25uZWN0ZWRcIix7fSk7XG5cdFx0XHR0aGlzLnNlcnZlcl9jb25uZWN0ZWQgPSB0cnVlIDtcblxuXHRcdFx0Ly9jaGVjayBjb25uZWN0aW9uIGVhY2ggM3Ncblx0XHRcdHZhciBwb29sQWxpdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYodGhpcy5jb25uZWN0aW9uLnJlYWR5U3RhdGUgIT09IDEgJiYgdGhpcy5jb25uZWN0aW9uLnNlcnZlcl9jb25uZWN0ZWQgPT0gdHJ1ZSkge1xuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmNvbnNvbGUud3JpdGVcIix7XCJkZXRhaWxcIjp7XCJtZXNzYWdlXCI6XCJDb25uZWN0aW9uIGNsb3NlZFwifX0se30pO1xuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuZGlzY29ubmVjdGVkXCIse30pO1xuXHRcdFx0XHRcdHRoaXMuc2VydmVyX2Nvbm5lY3RlZCA9IGZhbHNlIDtcblx0XHRcdFx0fVxuXHRcdFx0fSA7XG5cdFx0XHRzZXRJbnRlcnZhbChwb29sQWxpdmUuYmluZCh0aGlzKSwgMzAwMCk7XG5cblx0XHR9LFxuXHRcdG9uY2xvc2UgOiBmdW5jdGlvbiAoZSkge1xuXHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MuY29uc29sZS53cml0ZVwiLHtcImRldGFpbFwiOntcIm1lc3NhZ2VcIjpcIkNvbm5lY3Rpb24gY2xvc2VkXCJ9fSk7XG5cdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmRpc2Nvbm5lY3RlZFwiKTtcblx0XHRcdHRoaXMuc2Vzc2lvbl9pZCA9IG51bGwgO1xuXHRcdFx0dGhpcy50cnlSZWxvZygpIDtcblx0XHRcdFxuXHRcdH0sXG5cdFx0b25lcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5jb25zb2xlLndyaXRlXCIse1wiZGV0YWlsXCI6e1wibWVzc2FnZVwiOlwiQW4gZXJyb3IgYWNjdXJlZCB3aXRoIHRoZSBzZXJ2ZXJcIn19KTtcblx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuZGlzY29ubmVjdGVkXCIpO1xuXHRcdH0sXG5cdFx0b25tZXNzYWdlOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuXHRcdFx0dmFyIGpzb25fbXNnID0gSlNPTi5wYXJzZShtZXNzYWdlLmRhdGEpIDtcblx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsucmVjZWl2ZWRNZXNzYWdlXCIsanNvbl9tc2cpIDtcblx0XHR9XG5cdH1cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIG9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLk1hbmFnZXIgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTMvMDgvMDlcbiAqIEBkZXNjcmlwdGlvbiA6IENvbmZpZyBvZiB0aGUgYXBwbGljYXRpb25cbiAqXG4gKiAqL1xuXG52YXIgb3JnID0gb3JnIHx8IHt9IDtcbm9yZy5kYnl6ZXJvID0gb3JnLmRieXplcm8gfHwge30gO1xub3JnLmRieXplcm8uZGVpbW9zID0gb3JnLmRieXplcm8uZGVpbW9zIHx8IHt9IDtcblxuKGZ1bmN0aW9uKGRlaW1vcyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblxuXHR2YXIgRXZlbnRNYW5hZ2VyID0gb3JnLmRieXplcm8udG9vbHMuRXZlbnRNYW5hZ2VyO1xuXG5cdGRlaW1vcy5uZXR3b3JrID0gb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsgfHwge30gO1xuXHRcblx0ZGVpbW9zLm5ldHdvcmsuTWFuYWdlciA9IGZ1bmN0aW9uKCkge1xuXHRcdC8vc3R1YlxuXHR9XG5cblx0Ly9DYW4gYmUgdXNlIGFzIGFuIGlkIHRvb1xuXHRkZWltb3MubmV0d29yay5NYW5hZ2VyLmNvdW50ID0gMCA7XG5cblx0ZGVpbW9zLm5ldHdvcmsuTWFuYWdlci5wcm90b3R5cGUgPSB7XG5cdFx0XCJpbml0XCIgOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vY29ubmVjdGlvbiBldmVudHNcblx0XHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsucmVjZWl2ZWRNZXNzYWdlJyx0aGlzLnJlY2VpdmVkTWVzc2FnZS5iaW5kKHRoaXMpKSA7XG5cdFx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnNlbmRNZXNzYWdlJyx0aGlzLnNlbmRNZXNzYWdlLmJpbmQodGhpcykpIDtcblx0XHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc2VuZFN5bmMnLHRoaXMuc2VuZFN5bmMuYmluZCh0aGlzKSkgO1xuXHRcdH0sXG5cdFx0XCJyZWNlaXZlZE1lc3NhZ2VcIiA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0XHRzd2l0Y2goZVtfdC5BQ1RJT05dKSB7XG5cdFx0XHRcdGNhc2UgX3QuQUNUSU9OX0xPR0dFRF9PSyA6XG5cdFx0XHRcdFx0aWYoZVtfdC5NRVNTQUdFXVtfdC5TRVNTSU9OX0lEXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5jb25zb2xlLndyaXRlRXJyb3JcIix7XCJkZXRhaWxcIjp7XCJtZXNzYWdlXCI6XCJFcnJvciA6IEF1dGggYnV0IG5vIHNlc3Npb24gaWQgPyB3dGYgP1wifX0pO1xuXHRcdFx0XHRcdFx0cmV0dXJuIDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGVpbW9zLkVuZ2luZS53c0NsaWVudC5zZXNzaW9uX2lkID0gZVtfdC5NRVNTQUdFXVtfdC5TRVNTSU9OX0lEXTtcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZSgnb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsubG9nZ2VkJyxlKTtcblx0XHRcdFx0XHRicmVhayA7XG5cdFx0XHRcdGNhc2UgX3QuQUNUSU9OX0NIT09TRV9DSEFSX09LIDpcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmF2YXRhcl9zZWxlY3RlZFwiLGUpO1xuXHRcdFx0XHRcdGJyZWFrIDtcblx0XHRcdFx0Y2FzZSBfdC5BQ1RJT05fRVJST1IgOlxuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmNvbnNvbGUud3JpdGVFcnJvclwiLHtcImRldGFpbFwiOntcIm1lc3NhZ2VcIjpcIkVycm9yIDogXCIrSlNPTi5zdHJpbmdpZnkoZVtfdC5NRVNTQUdFXSl9fSk7XG5cdFx0XHRcdFx0YnJlYWsgO1xuXHRcdFx0XHRjYXNlIF90LkFDVElPTl9TWU5DIDpcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5yZW5kZXIucGFyc2VTY2VuZVwiLGUpO1xuXHRcdFx0XHRcdGJyZWFrIDtcblx0XHRcdFx0Y2FzZSBfdC5BQ1RJT05fU1lOQ19BVkFUQVIgOlxuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc3luY0F2YXRhclwiLGUpO1xuXHRcdFx0XHRcdGJyZWFrIDtcblx0XHRcdFx0Y2FzZSBfdC5BQ1RJT05fU1lOQ19JVEVNIDpcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnN5bmNJdGVtXCIsZSk7XG5cdFx0XHRcdFx0YnJlYWsgO1xuXHRcdFx0XHRjYXNlIF90LkFDVElPTl9HRVRfSVRFTV9URU1QTEFURSA6XG5cdFx0XHRcdFx0dGhpcy5yZWNlaXZlZEl0ZW0oZSk7XG5cdFx0XHRcdFx0YnJlYWsgO1xuXHRcdFx0XHRjYXNlIF90LkFDVElPTl9TWU5DX1BST0pFQ1RJTEUgOlxuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc3luY1Byb2plY3RpbGVcIixlKTtcblx0XHRcdFx0XHRicmVhayA7XG5cdFx0XHRcdGNhc2UgX3QuQUNUSU9OX1NZTkNfTU9OU1RFUiA6XG5cdFx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zeW5jTW9uc3RlclwiLGUpO1xuXHRcdFx0XHRcdGJyZWFrIDtcblx0XHRcdFx0Y2FzZSBfdC5BQ1RJT05fUkVNT1ZFX1BST0pFQ1RJTEUgOlxuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsucmVtb3ZlUHJvamVjdGlsZVwiLGUpO1xuXHRcdFx0XHRcdGJyZWFrIDtcblx0XHRcdFx0Y2FzZSBfdC5BQ1RJT05fQ09MTElERSA6XG5cdFx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5hY3Rpb25Db2xsaWRlXCIsZSk7XG5cdFx0XHRcdFx0YnJlYWsgO1xuXHRcdFx0XHRjYXNlIF90LkFDVElPTl9JVEVNX0dSQUJCRUQgOlxuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuaXRlbUdyYWJiZWRcIixlKTtcblx0XHRcdFx0XHRicmVhayA7XG5cdFx0XHRcdGNhc2UgX3QuQUNUSU9OX1NZTkNfQVRUQUNLX1pPTkUgOlxuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc3luY0F0dGFja1pvbmVcIixlKTtcblx0XHRcdFx0XHRicmVhayA7XG5cdFx0XHRcdGRlZmF1bHQgOlxuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmNvbnNvbGUud3JpdGVFcnJvclwiLHtcImRldGFpbFwiOntcIm1lc3NhZ2VcIjpcIlVua25vdyBzdGF0dXMgOiBcIitKU09OLnN0cmluZ2lmeShlKX19KTtcblx0XHRcdFx0XHRicmVhayA7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHJlY2VpdmVkSXRlbTogZnVuY3Rpb24obXNnKXtcblx0XHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0XHR2YXIgbSA9IG1zZ1tfdFsnTUVTU0FHRSddXTtcblx0XHRcdHRoaXMuc3RvcmVJdGVtRnJvbVNlcnZlcihtKTtcblx0XHR9LFxuXG5cdFx0c3RvcmVJdGVtRnJvbVNlcnZlcjogZnVuY3Rpb24oaXRlbSl7XG5cdFx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdFx0dmFyIGkgPSB7fTtcblx0XHRcdGkuaWQgPSBpdGVtW190WydJRCddXTtcblx0XHRcdGkubmFtZSA9IGl0ZW1bX3RbJ05BTUUnXV07XG5cdFx0XHRpLmtpbmQgPSBpdGVtW190WydNRVNTQUdFX0tJTkQnXV07XG5cdFx0XHRpLnNpemUgPSBpdGVtW190WydNRVNTQUdFX1NJWkUnXV07XG5cdFx0XHRpLnNraW4gPSBpdGVtW190WydNRVNTQUdFX1NLSU4nXV07XG5cdFx0XHRpLmF0dGFjayA9IGl0ZW1bX3RbJ01FU1NBR0VfQVRUQUNLJ11dO1xuXHRcdFx0aS5kZWx0YXNob3cgPSBpdGVtW190WydNRVNTQUdFX0RFTFRBU0hPVyddXTtcblx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLkVuZ2luZS5uZXdJdGVtU3RvcmVkLlwiK2kuaWQsaSk7XG5cdFx0XHRkZWltb3MuRW5naW5lLml0ZW1UZW1wbGF0ZXNbaS5pZF0gPSBpO1xuXHRcdH0sXG5cblxuXHRcdFwic2VuZEFjdGlvbk1lc3NhZ2VcIiA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdGlmKHR5cGVvZiBlLmFjdGlvbiAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0TG9nLmVycm9yKCdLZXlib2FyZCBldmVudCBub3Qgc2V0IHRvIHNlbmQgbWVzc2FnZSB0byBzZXJ2ZXInKSA7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHRoaXMuc2VuZE1lc3NhZ2UoeydtZXNzYWdlJzp7J2FjdGlvbic6eyd0eXBlJzona2V5Ym9hcmRFdmVudCcsJ2V2ZW50JzplLmFjdGlvbn19fSk7XG5cdFx0fSxcblxuXG5cblx0XHRcInNlbmRNZXNzYWdlXCIgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHQvL3NldCBkYXRlIGV0IHNlc3Npb25faWRcblx0XHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0XHRlW190LlNFU1NJT05fSURdXHQ9IGRlaW1vcy5FbmdpbmUud3NDbGllbnQuc2Vzc2lvbl9pZDtcblx0XHRcdGVbX3QuVFJBQ0VfSURdXHRcdD0gZGVpbW9zLm5ldHdvcmsuTWFuYWdlci5jb3VudCsrO1xuXHRcdFx0ZVtfdC5EQVRFXVx0XHRcdD0gRGF0ZS5ub3coKTtcblxuXHRcdFx0dmFyIGRhdGEgPSB7fTtcblx0XHRcdGRhdGEubWVzc2FnZSA9IGU7XG5cblx0XHRcdC8vcHV0dGluZyBpdCBhdCB0aGUgZW5kIG9mIHRoZSBxdWV1ZVxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpeyBcblx0XHRcdFx0ZGVpbW9zLkVuZ2luZS53c0NsaWVudC5zZW5kKGRhdGEpXG5cdFx0XHR9LCAwKTtcblx0XHR9LFxuXG5cblx0XHRcImFza0l0ZW1UZW1wbGF0ZVwiIDogZnVuY3Rpb24oaXRlbV9pZCwgY2FsbGJhY2spIHtcblx0XHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0XHR2YXIgbWVzc2FnZSA9IHt9O1xuXHRcdFx0bWVzc2FnZVtfdC5BQ1RJT05dID0gX3QuQUNUSU9OX0dFVF9JVEVNX1RFTVBMQVRFO1xuXHRcdFx0bWVzc2FnZVtfdC5NRVNTQUdFXSA9IHt9O1xuXHRcdFx0bWVzc2FnZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0lURU1fSURdID0gaXRlbV9pZDtcblx0XHRcdHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG5cdFx0fSxcblxuXG5cdFx0XCJzZW5kU3luY1wiIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblx0XHRcdHZhciBtZXNzYWdlID0ge307XG5cdFx0XHRtZXNzYWdlW190LkFDVElPTl0gPSBfdC5BQ1RJT05fU1lOQztcblx0XHRcdG1lc3NhZ2VbX3QuTUVTU0FHRV0gPSB7fTtcblx0XHRcdG1lc3NhZ2VbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9TQVlJTkddID0gZGVpbW9zLkVuZ2luZS5hdmF0YXIuc2F5aW5nO1xuXHRcdFx0bWVzc2FnZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX1BPU0lUSU9OXSA9IHtcblx0XHRcdFx0J3gnOnBhcnNlSW50KGRlaW1vcy5FbmdpbmUuYXZhdGFyLnBvc2l0aW9uLngpLFxuXHRcdFx0XHQneSc6cGFyc2VJbnQoZGVpbW9zLkVuZ2luZS5hdmF0YXIucG9zaXRpb24ueSlcblx0XHRcdH07XG5cdFx0XHR0aGlzLnNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xuXHRcdH0sXG5cblxuXHRcdC8vSGFuZGxlIHN1Y2Nlc3MgYWN0aW9uIGZyb20gc2VydmVyIGhlcmVcblx0XHRcInN1Y2Nlc3NBY3Rpb25cIiA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHN3aXRjaChlLmFjdGlvbikge1xuXHRcdFx0XHRjYXNlIFwiaW5mb1wiIDpcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5jb25zb2xlLndyaXRlXCIse1wiZGV0YWlsXCI6e1wibWVzc2FnZVwiOlwiSW5mbyBmcm9tIHNlcnZlciA6IFwiK0pTT04uc3RyaW5naWZ5KGRhdGEubWVzc2FnZSl9fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQgOlxuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmNvbnNvbGUud3JpdGVcIix7XCJkZXRhaWxcIjp7XCJtZXNzYWdlXCI6XCJVbmtub3cgYWN0aW9uIDogXCIrSlNPTi5zdHJpbmdpZnkoZGF0YSl9fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5NZXNzYWdlIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzAyLzAyXG4gKiBAZGVzY3JpcHRpb24gOiBOZXR3b3JrIG1lc3NhZ2VcbiAqXG4gKiAqL1xuXG52YXIgb3JnID0gb3JnIHx8IHt9O1xub3JnLmRieXplcm8gPSBvcmcuZGJ5emVybyB8fCB7fTtcbm9yZy5kYnl6ZXJvLmRlaW1vcyA9IG9yZy5kYnl6ZXJvLmRlaW1vcyB8fCB7fTtcblxuKGZ1bmN0aW9uKGRlaW1vcyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblx0ZGVpbW9zLm5ldHdvcmsgPSBvcmcuZGJ5emVyby5kZWltb3MubmV0d29yayB8fCB7fTtcblx0XG5cdGRlaW1vcy5uZXR3b3JrLk1lc3NhZ2UgPSB7fTtcblxuXHRkZWltb3MubmV0d29yay5NZXNzYWdlLkNPREUgPSB7XG5cdFx0XCJ0ZXh0XCI6e1xuXHRcdFx0XCJEQVRFXCI6XCJkXCIsXG5cdFx0XHRcIklEXCI6XCJpXCIsXG5cdFx0XHRcIkFDVElPTlwiOlwidFwiLFxuXHRcdFx0XCJBQ1RJT05fRVJST1JcIjpcImVcIixcblx0XHRcdFwiQUNUSU9OX0xPR0dFRF9PS1wiOlwib1wiLFxuXHRcdFx0XCJBQ1RJT05fTE9HR0VEX05PS1wiOlwiblwiLFxuXHRcdFx0XCJBQ1RJT05fU1lOQ1wiOlwiPVwiLFxuXHRcdFx0XCJBQ1RJT05fU1lOQ19BVkFUQVJcIjpcIiNcIixcblx0XHRcdFwiQUNUSU9OX1NZTkNfSVRFTVwiOlwiW1wiLFxuXHRcdFx0XCJBQ1RJT05fU1lOQ19NT05TVEVSXCI6XCJ7XCIsXG5cdFx0XHRcIkFDVElPTl9DSE9PU0VfQ0hBUlwiOlwiclwiLFxuXHRcdFx0XCJBQ1RJT05fQ0hPT1NFX0NIQVJfT0tcIjpcIitcIixcblx0XHRcdFwiQUNUSU9OX01PVkVfU1RBUlRcIjpcImFcIixcblx0XHRcdFwiQUNUSU9OX01PVkVfU1RPUFwiOlwiNlwiLFxuXHRcdFx0XCJBQ1RJT05fSlVNUFwiOlwialwiLFxuXHRcdFx0XCJBQ1RJT05fR0VUX0lURU1fVEVNUExBVEVcIjpcIkZcIixcblx0XHRcdFwiQUNUSU9OX1NZTkNfUFJPSkVDVElMRVwiOlwiTFwiLFxuXHRcdFx0XCJBQ1RJT05fUkVNT1ZFX1BST0pFQ1RJTEVcIjpcIlFcIixcblx0XHRcdFwiQUNUSU9OX0xPR09VVFwiOlwiVlwiLFxuXHRcdFx0XCJBQ1RJT05fQ09MTElERVwiOlwiQFwiLFxuXHRcdFx0XCJBQ1RJT05fSVRFTV9HUkFCQkVEXCI6XCLDoVwiLFxuXHRcdFx0XCJBQ1RJT05fU1lOQ19BVFRBQ0tfWk9ORVwiOlwiw6hcIixcblx0XHRcdFwiTUVTU0FHRVwiOlwibVwiLFxuXHRcdFx0XCJNRVNTQUdFX01PVkVfSURcIjpcIjlcIixcblx0XHRcdFwiTUVTU0FHRV9NT1ZFX1RZUEVcIjpcIjdcIixcblx0XHRcdFwiTUVTU0FHRV9NT1ZFX1NUQVJUXCI6XCJmXCIsXG5cdFx0XHRcIk1FU1NBR0VfQ0hBUlwiOlwiY1wiLFxuXHRcdFx0XCJNRVNTQUdFX0NIQVJOQU1FXCI6XCJfXCIsXG5cdFx0XHRcIk1FU1NBR0VfUE9TSVRJT05cIjpcInBcIixcblx0XHRcdFwiTUVTU0FHRV9WRUxPQ0lUWVwiOlwidlwiLFxuXHRcdFx0XCJNRVNTQUdFX1VTRVJfSU5QVVRfVkVMT0NJVFlcIjpcInlcIixcblx0XHRcdFwiTUVTU0FHRV9BQ0NFTEVSQVRJT05cIjpcInpcIixcblx0XHRcdFwiTUVTU0FHRV9TSVpFXCI6XCIvXCIsXG5cdFx0XHRcIk1FU1NBR0VfU0tJTlwiOlwiflwiLFxuXHRcdFx0XCJNRVNTQUdFX1NQRUFLXCI6XCJzXCIsXG5cdFx0XHRcIk1FU1NBR0VfU0hPT1RcIjpcInhcIixcblx0XHRcdFwiTUVTU0FHRV9ERVRBSUxcIjpcIj5cIixcblx0XHRcdFwiTUVTU0FHRV9NT1ZFX1NQRUVEXCI6XCIxXCIsXG5cdFx0XHRcIk1FU1NBR0VfSlVNUF9TUEVFRFwiOlwiMlwiLFxuXHRcdFx0XCJNRVNTQUdFX0FOSU1BVElPTlwiOlwiM1wiLFxuXHRcdFx0XCJNRVNTQUdFX1NBWUlOR1wiOlwiNFwiLFxuXHRcdFx0XCJNRVNTQUdFX1RJTUVTVEFNUFwiOlwiYlwiLFxuXHRcdFx0XCJNRVNTQUdFX0RJUkVDVElPTlwiOlwiNVwiLFxuXHRcdFx0XCJNRVNTQUdFX0RVUkFUSU9OXCI6XCIoXCIsXG5cdFx0XHRcIk1FU1NBR0VfRUxFTUVOVF9JRFwiOlwiKVwiLFxuXHRcdFx0XCJNRVNTQUdFX0JHQ09MT1JcIjpcIjhcIixcblx0XHRcdFwiTUVTU0FHRV9JVEVNX0lEXCI6XCJHXCIsXG5cdFx0XHRcIk1FU1NBR0VfS0lORFwiOlwiSFwiLFxuXHRcdFx0XCJNRVNTQUdFX0lURU1TXCI6XCJJXCIsXG5cdFx0XHRcIk1FU1NBR0VfREFNQUdFXCI6XCJKXCIsXG5cdFx0XHRcIk1FU1NBR0VfREFNQUdFX1RZUEVcIjpcIktcIixcblx0XHRcdFwiTUVTU0FHRV9PUklFTlRBVElPTlwiOlwiTlwiLFxuXHRcdFx0XCJNRVNTQUdFX01BU1NcIjpcIk9cIixcblx0XHRcdFwiTUVTU0FHRV9ERUxUQVwiOlwiUFwiLFxuXHRcdFx0XCJNRVNTQUdFX09XTkVSXCI6XCJTXCIsXG5cdFx0XHRcIk1FU1NBR0VfREVMVEFTSE9XXCI6XCJXXCIsXG5cdFx0XHRcIk1FU1NBR0VfQ1VSUkVOVF9VUkxcIjpcIllcIixcblx0XHRcdFwiTUVTU0FHRV9HQU1FX0FSRUFfRE9NX0lEXCI6XCJaXCIsXG5cdFx0XHRcIk1FU1NBR0VfR0FNRV9BUkVBX1dJRFRIXCI6XCItXCIsXG5cdFx0XHRcIk1FU1NBR0VfR0FNRV9BUkVBX0hFSUdIVFwiOlwifFwiLFxuXHRcdFx0XCJNRVNTQUdFX0dBTUVfQVJFQV9CTE9DS1NcIjpcIj9cIixcblx0XHRcdFwiTUVTU0FHRV9HQU1FX0FSRUFfTkFNRVwiOlwiIVwiLFxuXHRcdFx0XCJNRVNTQUdFX0dBTUVfTUFYX0lOU1RBTkNFXCI6XCLDulwiLFxuXHRcdFx0XCJNRVNTQUdFX0dBTUVfTUFYX1VTRVJcIjpcIsOjXCIsXG5cdFx0XHRcIk1FU1NBR0VfR09JTkdfRE9XTlwiOlwiKlwiLFxuXHRcdFx0XCJNRVNTQUdFX0FUVEFDS1wiOlwiVFwiLFxuXHRcdFx0XCJNRVNTQUdFX0NPTE9SXCI6XCJgXCIsXG5cdFx0XHRcIk1FU1NBR0VfTU9OU1RFUlwiOlwiPFwiLFxuXHRcdFx0XCJNRVNTQUdFX0FWQVRBUlwiOlwiPlwiLFxuXHRcdFx0XCJNRVNTQUdFX1BST0pFQ1RJTEVcIjpcIsO5XCIsXG5cdFx0XHRcIk1FU1NBR0VfSVRFTVwiOlwiL1wiLFxuXHRcdFx0XCJNRVNTQUdFX0ZST01cIjpcIsOxXCIsXG5cdFx0XHRcIk1FU1NBR0VfRlJPTV9UWVBFXCI6XCIuXCIsXG5cdFx0XHRcIk1FU1NBR0VfRlJPTV9QT1NJVElPTlwiOlwiLFwiLFxuXHRcdFx0XCJNRVNTQUdFX1RPXCI6XCLDt1wiLFxuXHRcdFx0XCJNRVNTQUdFX1RPX1RZUEVcIjpcIsOlXCIsXG5cdFx0XHRcIk1FU1NBR0VfVE9fUE9TSVRJT05cIjpcIsOyXCIsXG5cdFx0XHRcIk1FU1NBR0VfSVNfREVBRFwiOlwiw7BcIixcblx0XHRcdFwiTUVTU0FHRV9IUFwiOlwiVVwiLFxuXHRcdFx0XCJNRVNTQUdFX0NVUlJFTlRfSFBcIjpcIlJcIixcblx0XHRcdFwiTUVTU0FHRV9MQU5ERURcIjpcIsOkXCIsXG5cdFx0XHRcIk5BTUVcIjpcImhcIixcblx0XHRcdFwiVFJBQ0VfSURcIjpcInFcIixcblx0XHRcdFwiU0VTU0lPTl9JRFwiOlwia1wiLFxuXHRcdFx0XCJMT0dJTlwiOlwibFwiLFxuXHRcdFx0XCJQQVNTV09SRFwiOlwid1wiLFxuXHRcdFx0XCJBVkFUQVJTXCI6XCJ1XCIsXG5cdFx0XHRcIklURU1TXCI6XCJdXCIsXG5cdFx0XHRcIkxFRlRcIjpcIjBcIixcblx0XHRcdFwiUklHSFRcIjpcIsOpXCIsXG5cdFx0XHRcIkpVTVBcIjpcIidcIixcblx0XHRcdFwiUFJPSkVDVElMRVNcIjpcIk1cIixcblx0XHRcdFwiTU9OU1RFUlNcIjpcIn1cIixcblx0XHRcdFwiTUVTU0FHRV9BVFRBQ0tfVFlQRVwiOlwiVFwiLFxuXHRcdFx0XCJNRVNTQUdFX0FUVEFDS19NQUlOXCI6XCI7XCIsXG5cdFx0XHRcIkFDVElPTl9BVFRBQ0tcIjpcIlhcIixcblx0XHRcdFwiSVRFTV9TTE9UX0hFQURcIjpcIkFcIixcblx0XHRcdFwiSVRFTV9TTE9UX0NIRVNUXCI6XCJCXCIsXG5cdFx0XHRcIklURU1fU0xPVF9GT09UXCI6XCJDXCIsXG5cdFx0XHRcIklURU1fU0xPVF9MRUZUX0hBTkRcIjpcIkRcIixcblx0XHRcdFwiSVRFTV9TTE9UX1JJR0hUX0hBTkRcIjpcIkVcIixcblx0XHRcdFwiQUNUSU9OX0dPSU5HX0RPV05fU1RPUFwiOlwiJlwiLFxuXHRcdFx0XCJBQ1RJT05fR09JTkdfRE9XTlwiOlwiJVwiXG5cdFx0fSxcblx0XHRcInZlcmJvc2VcIjp7XG5cdFx0XHRcIkRBVEVcIjpcImRhdGVcIixcblx0XHRcdFwiSURcIjpcImlkXCIsXG5cdFx0XHRcIk1FU1NBR0VcIjpcIm1lc3NhZ2VcIixcblx0XHRcdFwiQUNUSU9OXCI6XCJhY3Rpb25cIixcblx0XHRcdFwiQUNUSU9OX0VSUk9SXCI6XCJlcnJvclwiLFxuXHRcdFx0XCJBQ1RJT05fTE9HR0VEX09LXCI6XCJsb2dpbl9va1wiLFxuXHRcdFx0XCJBQ1RJT05fTE9HR0VEX05PS1wiOlwibG9nZ3VlZF9ub2tcIixcblx0XHRcdFwiQUNUSU9OX1NZTkNcIjpcInN5bmNcIixcblx0XHRcdFwiQUNUSU9OX1NZTkNfQVZBVEFSXCI6XCJhdmF0YXJfc3luY1wiLFxuXHRcdFx0XCJBQ1RJT05fU1lOQ19JVEVNXCI6XCJpdGVtX3N5bmNcIixcblx0XHRcdFwiQUNUSU9OX0NIT09TRV9DSEFSXCI6XCJyZXR1cm5fY2hhcmF0ZXJcIixcblx0XHRcdFwiQUNUSU9OX0NIT09TRV9DSEFSX09LXCI6XCJhdmF0YXJfc2VsZWN0ZWRcIixcblx0XHRcdFwiQUNUSU9OX01PVkVfU1RBUlRcIjpcIm1vdmVfc3RhcnRcIixcblx0XHRcdFwiQUNUSU9OX01PVkVfU1RPUFwiOlwibW92ZV9zdG9wXCIsXG5cdFx0XHRcIkFDVElPTl9KVU1QXCI6XCJqdW1wXCIsXG5cdFx0XHRcIkFDVElPTl9SRU1PVkVfUFJPSkVDVElMRVwiOlwicmVtb3ZlX3Byb2plY3RpbGVcIixcblx0XHRcdFwiQUNUSU9OX0dFVF9JVEVNX1RFTVBMQVRFXCI6XCJnZXRfaXRlbVwiLFxuXHRcdFx0XCJBQ1RJT05fU1lOQ19QUk9KRUNUSUxFXCI6XCJzeW5jX3Byb2plY3RpbGVcIixcblx0XHRcdFwiQUNUSU9OX0xPR09VVFwiOlwibG9nb3V0XCIsXG5cdFx0XHRcIkFDVElPTl9TWU5DX01PTlNURVJcIjpcInN5bmNfbW9uc3RlclwiLFxuXHRcdFx0XCJBQ1RJT05fQ09MTElERVwiOlwiYWN0aW9uX2NvbGxpZGVcIixcblx0XHRcdFwiQUNUSU9OX0lURU1fR1JBQkJFRFwiOlwiaXRlbV9ncmFiYmVkXCIsXG5cdFx0XHRcIkFDVElPTl9TWU5DX0FUVEFDS19aT05FXCI6XCJhdHRhY2tfem9uZVwiLFxuXHRcdFx0XCJNRVNTQUdFX01PVkVfSURcIjpcIm1vdmVfaWRcIixcblx0XHRcdFwiTUVTU0FHRV9NT1ZFX1RZUEVcIjpcIm1vdmVfdHlwZVwiLFxuXHRcdFx0XCJNRVNTQUdFX01PVkVfU1RBUlRcIjpcIm1vdmVfc3RhcnRcIixcblx0XHRcdFwiTUVTU0FHRV9DSEFSXCI6XCJjaGFyYWN0ZXJcIixcblx0XHRcdFwiTUVTU0FHRV9DSEFSTkFNRVwiOlwiY2hhcmFjdGVyX25hbWVcIixcblx0XHRcdFwiTUVTU0FHRV9QT1NJVElPTlwiOlwicG9zaXRpb25cIixcblx0XHRcdFwiTUVTU0FHRV9WRUxPQ0lUWVwiOlwidmVsb2NpdHlcIixcblx0XHRcdFwiTUVTU0FHRV9VU0VSX0lOUFVUX1ZFTE9DSVRZXCI6XCJ1c2VyX2lucHV0X3ZlbG9jaXR5XCIsXG5cdFx0XHRcIk1FU1NBR0VfQUNDRUxFUkFUSU9OXCI6XCJhY2NlbGVyYXRpb25cIixcblx0XHRcdFwiTUVTU0FHRV9TUEVBS1wiOlwic3BlYWtcIixcblx0XHRcdFwiTUVTU0FHRV9TSE9PVFwiOlwic2hvb3RcIixcblx0XHRcdFwiTUVTU0FHRV9TSVpFXCI6XCJzaXplXCIsXG5cdFx0XHRcIk1FU1NBR0VfU0tJTlwiOlwic2tpblwiLFxuXHRcdFx0XCJNRVNTQUdFX0RFVEFJTFwiOlwiZGV0YWlsXCIsXG5cdFx0XHRcIk1FU1NBR0VfTU9WRV9TUEVFRFwiOlwibW92ZV9zcGVlZFwiLFxuXHRcdFx0XCJNRVNTQUdFX0pVTVBfU1BFRURcIjpcImp1bXBfc3BlZWRcIixcblx0XHRcdFwiTUVTU0FHRV9BTklNQVRJT05cIjpcImFuaW1hdGlvblwiLFxuXHRcdFx0XCJNRVNTQUdFX1NBWUlOR1wiOlwic2F5aW5nXCIsXG5cdFx0XHRcIk1FU1NBR0VfVElNRVNUQU1QXCI6XCJ0aW1lc3RhbXBcIixcblx0XHRcdFwiTUVTU0FHRV9ESVJFQ1RJT05cIjpcImRpcmVjdGlvblwiLFxuXHRcdFx0XCJNRVNTQUdFX0RVUkFUSU9OXCI6XCJkdXJhdGlvblwiLFxuXHRcdFx0XCJNRVNTQUdFX0VMRU1FTlRfSURcIjpcImVsZW1lbnRfaWRcIixcblx0XHRcdFwiTUVTU0FHRV9CR0NPTE9SXCI6XCJiZ19jb2xvclwiLFxuXHRcdFx0XCJNRVNTQUdFX0lURU1fSURcIjpcIml0ZW1faWRcIixcblx0XHRcdFwiTUVTU0FHRV9LSU5EXCI6XCJraW5kXCIsXG5cdFx0XHRcIk1FU1NBR0VfSVRFTVNcIjpcIml0ZW1zXCIsXG5cdFx0XHRcIk1FU1NBR0VfREFNQUdFXCI6XCJkYW1hZ2VcIixcblx0XHRcdFwiTUVTU0FHRV9EQU1BR0VfVFlQRVwiOlwiZGFtYWdlX3R5cGVcIixcblx0XHRcdFwiTUVTU0FHRV9PUklFTlRBVElPTlwiOlwib3JpZW50YXRpb25cIixcblx0XHRcdFwiTUVTU0FHRV9NQVNTXCI6XCJtYXNzXCIsXG5cdFx0XHRcIk1FU1NBR0VfREVMVEFcIjpcImRlbHRhXCIsXG5cdFx0XHRcIk1FU1NBR0VfT1dORVJcIjpcIm93bmVyXCIsXG5cdFx0XHRcIk1FU1NBR0VfREVMVEFTSE9XXCI6XCJkZWx0YV9zaG93XCIsXG5cdFx0XHRcIk1FU1NBR0VfQ1VSUkVOVF9VUkxcIjpcImN1cnJlbnRfdXJsXCIsXG5cdFx0XHRcIk1FU1NBR0VfR0FNRV9BUkVBX0RPTV9JRFwiOlwiZ2FtZV9hcmVhX2RvbV9pZFwiLFxuXHRcdFx0XCJNRVNTQUdFX0dBTUVfQVJFQV9XSURUSFwiOlwiZ2FtZV9hcmVhX3dpZHRoXCIsXG5cdFx0XHRcIk1FU1NBR0VfR0FNRV9BUkVBX0hFSUdIVFwiOlwiZ2FtZV9hcmVhX2hlaWdodFwiLFxuXHRcdFx0XCJNRVNTQUdFX0dBTUVfQVJFQV9CTE9DS1NcIjpcImdhbWVfYXJlYV9ibG9ja3NcIixcblx0XHRcdFwiTUVTU0FHRV9HQU1FX0FSRUFfTkFNRVwiOlwiZ2FtZV9hcmVhX25hbWVcIixcblx0XHRcdFwiTUVTU0FHRV9HQU1FX01BWF9JTlNUQU5DRVwiOlwibWF4X2luc3RhbmNlXCIsXG5cdFx0XHRcIk1FU1NBR0VfR0FNRV9NQVhfVVNFUlwiOlwibWF4X3VzZXJcIixcblx0XHRcdFwiTUVTU0FHRV9HT0lOR19ET1dOXCI6XCJnb2luZ19kb3duXCIsXG5cdFx0XHRcIk1FU1NBR0VfQVRUQUNLXCI6XCJhdHRhY2tcIixcblx0XHRcdFwiTUVTU0FHRV9DT0xPUlwiOlwiY29sb3JcIixcblx0XHRcdFwiTUVTU0FHRV9NT05TVEVSXCI6XCJtb25zdGVyXCIsXG5cdFx0XHRcIk1FU1NBR0VfQVZBVEFSXCI6XCJhdmF0YXJcIixcblx0XHRcdFwiTUVTU0FHRV9QUk9KRUNUSUxFXCI6XCJwcm9qZWN0aWxlXCIsXG5cdFx0XHRcIk1FU1NBR0VfSVRFTVwiOlwiaXRlbVwiLFxuXHRcdFx0XCJNRVNTQUdFX0ZST01cIjpcImZyb21cIixcblx0XHRcdFwiTUVTU0FHRV9GUk9NX1RZUEVcIjpcImZyb21fdHlwZVwiLFxuXHRcdFx0XCJNRVNTQUdFX0ZST01fUE9TSVRJT05cIjpcImZyb21fcG9zaXRpb25cIixcblx0XHRcdFwiTUVTU0FHRV9UT1wiOlwidG9cIixcblx0XHRcdFwiTUVTU0FHRV9UT19UWVBFXCI6XCJ0b190eXBlXCIsXG5cdFx0XHRcIk1FU1NBR0VfVE9fUE9TSVRJT05cIjpcInRvX3Bvc2l0aW9uXCIsXG5cdFx0XHRcIk1FU1NBR0VfSVNfREVBRFwiOlwiaXNfZGVhZFwiLFxuXHRcdFx0XCJNRVNTQUdFX0hQXCI6XCJocFwiLFxuXHRcdFx0XCJNRVNTQUdFX0NVUlJFTlRfSFBcIjpcImN1cnJlbnRfaHBcIixcblx0XHRcdFwiTUVTU0FHRV9MQU5ERURcIjpcImxhbmRlZFwiLFxuXHRcdFx0XCJUUkFDRV9JRFwiOlwidHJhY2VfaWRcIixcblx0XHRcdFwiU0VTU0lPTl9JRFwiOlwic2Vzc2lvbl9pZFwiLFxuXHRcdFx0XCJMT0dJTlwiOlwibG9naW5cIixcblx0XHRcdFwiTkFNRVwiOlwibmFtZVwiLFxuXHRcdFx0XCJQQVNTV09SRFwiOlwicGFzc3dvcmRcIixcblx0XHRcdFwiQVZBVEFSU1wiOlwiYXZhdGFyc1wiLFxuXHRcdFx0XCJJVEVNU1wiOlwiaXRlbXNcIixcblx0XHRcdFwiTEVGVFwiOlwibGVmdFwiLFxuXHRcdFx0XCJSSUdIVFwiOlwicmlnaHRcIixcblx0XHRcdFwiSlVNUFwiOlwianVtcFwiLFxuXHRcdFx0XCJQUk9KRUNUSUxFU1wiOlwicHJvamVjdGlsZXNcIixcblx0XHRcdFwiTU9OU1RFUlNcIjpcIm1vbnN0ZXJzXCIsXG5cdFx0XHRcIk1FU1NBR0VfQVRUQUNLX1RZUEVcIjpcImF0dGFja190eXBlXCIsXG5cdFx0XHRcIk1FU1NBR0VfQVRUQUNLX01BSU5cIjpcImF0dGFja19tYWluXCIsXG5cdFx0XHRcIkFDVElPTl9BVFRBQ0tcIjpcImFjdGlvbl9hdHRhY2tcIixcblx0XHRcdFwiSVRFTV9TTE9UX0hFQURcIjpcIml0ZW1fc2xvdF9oZWFkXCIsXG5cdFx0XHRcIklURU1fU0xPVF9DSEVTVFwiOlwiaXRlbV9zbG90X2NoZXN0XCIsXG5cdFx0XHRcIklURU1fU0xPVF9GT09UXCI6XCJpdGVtX3Nsb3RfZm9vdFwiLFxuXHRcdFx0XCJJVEVNX1NMT1RfTEVGVF9IQU5EXCI6XCJpdGVtX3Nsb3RfbGVmdF9oYW5kXCIsXG5cdFx0XHRcIklURU1fU0xPVF9SSUdIVF9IQU5EXCI6XCJpdGVtX3Nsb3RfcmlnaHRfaGFuZFwiLFxuXHRcdFx0XCJBQ1RJT05fR09JTkdfRE9XTl9TVE9QXCI6XCJhY3Rpb25fZ29pbmdfZG93blwiLFxuXHRcdFx0XCJBQ1RJT05fR09JTkdfRE9XTlwiOlwiYWN0aW9uX2dvaW5nX2Rvd25fc3RvcFwiXG5cdFx0fVxuXHR9XG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBvcmcuZGJ5emVyby50b29scy5QaHlzaWNzIHV0aWwgY2xhc3NcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxMy8wOS8yN1xuICogQGRlc2NyaXB0aW9uIDogUGh5c2ljcyB0b29sc1xuICpcbiAqL1xuIFxudmFyIG9yZyA9IG9yZyB8fCB7fSA7XG5vcmcuZGJ5emVybyA9IG9yZy5kYnl6ZXJvIHx8IHt9IDtcbm9yZy5kYnl6ZXJvLnRvb2xzID0gb3JnLmRieXplcm8udG9vbHMgfHwge30gO1xuXG4oZnVuY3Rpb24odG9vbHMsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cdHZhciBWZWN0b3IgPSB0b29scy5WZWN0b3I7XG5cblx0dG9vbHMuUGh5c2ljcyA9IHt9O1xuXG5cdC8vRm91cnRoIHBhcmFtcyBhcmUgb3JnLmRieXplcm8udG9vbHMuVmVjdG9yXG5cdHRvb2xzLlBoeXNpY3MuU2VnbWVudHNDb2xsaXNpb24gPSBmdW5jdGlvbihhMSxhMixiMSxiMikge1xuXG5cdFx0aW50ZXJzZWN0aW9uID0gVmVjdG9yLlplcm8oKTtcblxuXHRcdHZhciBiID0gVmVjdG9yLlN1YihhMixhMSk7XG5cdFx0dmFyIGQgPSBWZWN0b3IuU3ViKGIyLGIxKTtcblx0XHR2YXIgYkRvdERQZXJwID0gYi54ICogZC55IC0gYi55ICogZC54O1xuXG5cdFx0Ly8gaWYgYiBkb3QgZCA9PSAwLCBpdCBtZWFucyB0aGUgbGluZXMgYXJlIHBhcmFsbGVsIHNvIGhhdmUgaW5maW5pdGUgaW50ZXJzZWN0aW9uIHBvaW50c1xuXHRcdGlmIChiRG90RFBlcnAgPT0gMClcblx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR2YXIgYyA9IFZlY3Rvci5TdWIoYjEsYTEpO1xuXHRcdHZhciB0ID0gKGMueCAqIGQueSAtIGMueSAqIGQueCkgLyBiRG90RFBlcnA7XG5cblx0XHRpZiAodCA8IDAgfHwgdCA+IDEpIHJldHVybiBmYWxzZTtcblxuXHRcdHZhciB1ID0gKGMueCAqIGIueSAtIGMueSAqIGIueCkgLyBiRG90RFBlcnA7XG5cdFx0aWYgKHUgPCAwIHx8IHUgPiAxKSByZXR1cm4gZmFsc2U7XG5cdFx0Yi5zY2FsYXIodCk7XG5cdFx0cmV0dXJuIFZlY3Rvci5TdW0oYTEsIGIpO1xuXG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHBvc2l0aW9uICAgICAgVmVjdG9yICBwb3NpdGlvbiBhdCB0MFxuXHQgKiBAcGFyYW0gdmVsb2NpdHkgICAgICBWZWN0b3IgIFxuXHQgKiBAcGFyYW0gZm9yY2UgICAgICAgICBWZWN0b3IgIHN1bSBvZiBhbGwgZm9yY2UgYXBwbGllZCBcblx0ICogQHBhcmFtIGR0ICAgICAgICAgICAgTnVtZXJpYyB0aW1lc3RlcFxuXHQgKlxuXHQgKiBAcmV0dXJuICBWZWN0b3IgIG5ldyBwb3NpdGlvbiBhdCB0MCArIGR0XG5cdCAqXG5cdCAqIGVxdWF0aW9uIDogcG9zaXRpb24gPSB2aXRlc3NlICogZHQgKyAwLjUgKiBmb3JjZSAqIGR0wrJcblx0ICovXG5cdHRvb2xzLlBoeXNpY3MuTW90aW9uSW50ZWdyYXRpb24gPSBmdW5jdGlvbihwb3NpdGlvbix2ZWxvY2l0eSxmb3JjZSxkdCkge1xuXHRcdHZhciB2ID0gdmVsb2NpdHkuZHVwbGljYXRlKCk7XG5cdFx0di5zY2FsYXIoZHQpO1xuXHRcdFxuXHRcdHZhciBhID0gZm9yY2UuZHVwbGljYXRlKCk7XG5cdFx0YS5zY2FsYXIoMC41ICogZHQgKiBkdCk7XG5cdFx0XG5cdFx0cmV0dXJuIFZlY3Rvci5TdW0oIHBvc2l0aW9uLmR1cGxpY2F0ZSgpLCBWZWN0b3IuU3VtKCB2LCBhICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gcG9zaXRpb24gICAgICBWZWN0b3Jcblx0ICogQHBhcmFtIHZlbG9jaXR5ICAgICAgVmVjdG9yICBcblx0ICogQHBhcmFtIGZvcmNlICAgICAgICAgVmVjdG9yXG5cdCAqIEBwYXJhbSBkdCAgICAgICAgICAgIE51bWVyaWMgdGltZXN0ZXBcblx0ICogQHJldHVybiBPYmplY3Qge2R4OmR4LGR2OmR2fVxuXHQgKlxuXHQgKiBlcXVhdGlvbiA6IHBvc2l0aW9uID0gdml0ZXNzZSAqIGR0ICsgMC41ICogZm9yY2UgKiBkdMKyXG5cdCAqL1xuXHR0b29scy5QaHlzaWNzLmludGVncmF0ZUtNNCA9IGZ1bmN0aW9uKHBvc2l0aW9uLCB2ZWxvY2l0eSwgZm9yY2UsIGR0KSB7XG5cblx0XHR2YXIgYSA9IF9ldmFsdWF0ZU1LNCggdmVsb2NpdHksIGZvcmNlLCAwLjAsICAgIG5ldyBfc3RhdGUoKSApO1xuXHRcdHZhciBiID0gX2V2YWx1YXRlTUs0KCB2ZWxvY2l0eSwgZm9yY2UsIGR0KjAuNSwgYSApO1xuXHRcdHZhciBjID0gX2V2YWx1YXRlTUs0KCB2ZWxvY2l0eSwgZm9yY2UsIGR0KjAuNSwgYiApO1xuXHRcdHZhciBkID0gX2V2YWx1YXRlTUs0KCB2ZWxvY2l0eSwgZm9yY2UsIGR0LCAgICAgIGMgKTtcblx0XHR2YXIgb3V0cHV0ID0ge307XG5cdFx0b3V0cHV0WydkeCddID0gVmVjdG9yLlNjYWxhcihcblx0XHRcdFZlY3Rvci5TdW0oXG5cdFx0XHRcdGEucG9zaXRpb24sXG5cdFx0XHRcdFZlY3Rvci5TdW0oXG5cdFx0XHRcdFx0VmVjdG9yLlNjYWxhcihcblx0XHRcdFx0XHRcdFZlY3Rvci5TdW0oXG5cdFx0XHRcdFx0XHRcdGIucG9zaXRpb24sIFxuXHRcdFx0XHRcdFx0XHRjLnBvc2l0aW9uXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0MlxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0ZC5wb3NpdGlvblxuXHRcdFx0XHQpXG5cdFx0XHQpLFxuXHRcdFx0ZHQgKiAwLjE2NjY2NjY2NjY2NyBcblx0XHQpO1xuXHRcdG91dHB1dFsnZHYnXSA9IFZlY3Rvci5TY2FsYXIoXG5cdFx0XHRWZWN0b3IuU3VtKFxuXHRcdFx0XHRhLnZlbG9jaXR5LFxuXHRcdFx0XHRWZWN0b3IuU3VtKFxuXHRcdFx0XHRcdFZlY3Rvci5TY2FsYXIoXG5cdFx0XHRcdFx0XHRWZWN0b3IuU3VtKFxuXHRcdFx0XHRcdFx0XHRiLnZlbG9jaXR5LFxuXHRcdFx0XHRcdFx0XHRjLnZlbG9jaXR5XG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0MlxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0ZC52ZWxvY2l0eVxuXHRcdFx0XHQpXG5cdFx0XHQpLFxuXHRcdFx0ZHQgKiAwLjE2NjY2NjY2NjY2N1xuXHRcdCk7XG5cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cblx0dmFyIF9ldmFsdWF0ZU1LNCA9IGZ1bmN0aW9uICggdmVsb2NpdHksIGZvcmNlLCBkdCwgZGVyaXZhdGUgKSB7XG5cdFx0dmFyIG91dHB1dCA9IG5ldyBfc3RhdGUoKTtcblx0XHR2YXIgZGVyaXYgPSBkZXJpdmF0ZS52ZWxvY2l0eS5kdXBsaWNhdGUoKTtcblx0XHRkZXJpdi5zY2FsYXIoZHQpO1xuXHRcdG91dHB1dC5wb3NpdGlvbiA9IFZlY3Rvci5TdW0odmVsb2NpdHksIGRlcml2KTtcblx0XHRvdXRwdXQudmVsb2NpdHkgPSBmb3JjZTtcblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cblx0dmFyIF9zdGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnBvc2l0aW9uID0gbmV3IFZlY3RvcigwLDApO1xuXHRcdHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKDAsMCk7XG5cdH1cblxufSkob3JnLmRieXplcm8udG9vbHMsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBVc2VyIG1vdmVtZW50IE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzEwLzI4XG4gKiBAZGVzY3JpcHRpb24gOiBVc2VyIG1vdmVtZW50IGZvcmNlXG4gKlxuICoqL1xuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXG5cdGRlaW1vcy5waHlzaWMgPSBkZWltb3MucGh5c2ljIHx8IHt9IDtcblxuXHQvKipcblx0ICogVXNlciBNb3ZlbWVudCBjb25zdHJ1Y3RvclxuXHQgKiBcblx0ICogQHBhcmFtIFZlY3RvciBwaHlzaWNcblx0ICogXG5cdCAqKi9cblxuXHRkZWltb3MucGh5c2ljLlVzZXJNb3ZlbWVudCA9IGZ1bmN0aW9uIChwaHlzaWMsIHR5cGUpIHtcblx0XHR0aGlzLmlkID0gZGVpbW9zLnBoeXNpYy5Vc2VyTW92ZW1lbnQubGFzdGlkKys7XG5cdFx0dGhpcy5tb3ZlbWVudCA9IHBoeXNpYztcblx0XHR0aGlzLnN0YXJ0VGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0dGhpcy5kdXJhdGlvbkludGVncmF0ZWQgPSAwO1xuXHRcdHRoaXMuZHVyYXRpb24gPSBudWxsO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdH1cblxuXHRkZWltb3MucGh5c2ljLlVzZXJNb3ZlbWVudC5sYXN0aWQgPSAwO1xuXG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBHcmF2aXR5IE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDE0LzAyLzEwXG4gKiBAZGVzY3JpcHRpb24gOiBHcmF2aXR5XG4gKlxuICoqL1xuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXHRkZWltb3MucGh5c2ljID0gZGVpbW9zLnBoeXNpYyB8fCB7fSA7XG5cdGRlaW1vcy5waHlzaWMuR3Jhdml0eSA9IG5ldyBvcmcuZGJ5emVyby50b29scy5WZWN0b3IoMCwgMzAwKTtcbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIG9yZy5kYnl6ZXJvLmRlaW1vcy5hbmFseXNlLk1hbnVhbFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDE0LzA4LzMwXG4gKiBAZGVzY3JpcHRpb24gOiBBbmFseXNlciBieSBtYW51YWxseSBnYW1lIGFyZWEgYnkgYnJvd3NlclxuICpcbiAqICovXG5cbnZhciBvcmcgPSBvcmcgfHwge30gO1xub3JnLmRieXplcm8gPSBvcmcuZGJ5emVybyB8fCB7fSA7XG5vcmcuZGJ5emVyby5kZWltb3MgPSBvcmcuZGJ5emVyby5kZWltb3MgfHwge30gO1xub3JnLmRieXplcm8uZGVpbW9zLmFuYWx5c2VyID0gb3JnLmRieXplcm8uZGVpbW9zLmFuYWx5c2VyIHx8IHt9IDtcblxuKGZ1bmN0aW9uKGRlaW1vcyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblx0ZGVpbW9zLmFuYWx5c2VyLk1hbnVhbCA9IGZ1bmN0aW9uKGRvbUlEKXtcblx0XHR0aGlzLmFyZWFEb21JZCA9IGRvbUlEO1xuXHRcdHRoaXMuYXJlYVpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21JRCk7XG5cdFx0dGhpcy5ibG9ja3NCeUlkID0gW107XG5cdFx0dGhpcy5ibG9ja3NCeUNsYXNzID0gW107XG5cdFx0dGhpcy5ibG9ja3NCeVRhZyA9IFtdO1xuXHRcdHRoaXMuYmxvY2tzUGFyc2VkID0gW107XG5cdH1cblx0ZGVpbW9zLmFuYWx5c2VyLk1hbnVhbC5wcm90b3R5cGUuYWRkQmxvY2sgPSBmdW5jdGlvbihzZWxlY3RvciwgcGxhdGVmb3JtZSl7XG5cdFx0Ly9pZiBJRFxuXHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14jJywnaScpO1xuXHRcdGlmKHJlZ2V4LnRlc3Qoc2VsZWN0b3IpKSB7XG5cdFx0XHR0aGlzLmFkZEJsb2NrQnlJZChzZWxlY3Rvci5zdWJzdHIoMSkscGxhdGVmb3JtZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vaWYgQ2xhc3Ncblx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeXFwuJywnaScpO1xuXHRcdGlmKHJlZ2V4LnRlc3Qoc2VsZWN0b3IpKSB7XG5cdFx0XHR0aGlzLmFkZEJsb2NrQnlDbGFzcyhzZWxlY3Rvci5zdWJzdHIoMSkscGxhdGVmb3JtZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vaWYgc2VjdG9yXG5cdFx0dGhpcy5hZGRCbG9ja0J5VGFnKHNlbGVjdG9yLHBsYXRlZm9ybWUpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRlaW1vcy5hbmFseXNlci5NYW51YWwucHJvdG90eXBlLmFkZEJsb2NrQnlJZCA9IGZ1bmN0aW9uKGRvbUlkLCBwbGF0ZWZvcm1lKXtcblx0XHR0aGlzLmJsb2Nrc0J5SWQucHVzaCh7J3NlbGVjdG9yJzpkb21JZCwncGxhdGVmb3JtZSc6ISFwbGF0ZWZvcm1lfSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGVpbW9zLmFuYWx5c2VyLk1hbnVhbC5wcm90b3R5cGUuYWRkQmxvY2tCeUNsYXNzID0gZnVuY3Rpb24oY2xhc3NOYW1lLCBwbGF0ZWZvcm1lKXtcblx0XHR0aGlzLmJsb2Nrc0J5Q2xhc3MucHVzaCh7J3NlbGVjdG9yJzpjbGFzc05hbWUsJ3BsYXRlZm9ybWUnOiEhcGxhdGVmb3JtZX0pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRlaW1vcy5hbmFseXNlci5NYW51YWwucHJvdG90eXBlLmFkZEJsb2NrQnlUYWcgPSBmdW5jdGlvbih0YWdOYW1lLCBwbGF0ZWZvcm1lKXtcblx0XHR0aGlzLmJsb2Nrc0J5VGFnLnB1c2goeydzZWxlY3Rvcic6dGFnTmFtZSwncGxhdGVmb3JtZSc6ISFwbGF0ZWZvcm1lfSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGVpbW9zLmFuYWx5c2VyLk1hbnVhbC5wcm90b3R5cGUuZ2V0Q29vcmRzID0gZnVuY3Rpb24oZG9tQ29udGVudCxkb21CbG9jayl7XG5cdFx0Ly9icm93c2UgYWxsIHBhcmVudCB0byBkb21Db250ZW50IHRvIGFkZCB0aGVyZSBjb29yZFxuXHRcdHZhciBsZWZ0ID0gMDtcblx0XHR2YXIgdG9wID0gMDtcblx0XHR2YXIgZG9tQnJvd3NlID0gZG9tQmxvY2s7IFxuXHRcdHdoaWxlKGRvbUJyb3dzZS5vZmZzZXRQYXJlbnQgIT0gZG9tQ29udGVudCkge1xuXHRcdFx0aWYoZG9tQnJvd3NlLm9mZnNldFBhcmVudCA9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0bGVmdCArPSBkb21Ccm93c2Uub2Zmc2V0TGVmdDtcblx0XHRcdHRvcCArPSBkb21Ccm93c2Uub2Zmc2V0VG9wO1xuXHRcdFx0ZG9tQnJvd3NlID0gZG9tQnJvd3NlLm9mZnNldFBhcmVudDtcblx0XHR9XG5cdFx0bGVmdCArPSBkb21Ccm93c2Uub2Zmc2V0TGVmdDtcblx0XHR0b3AgKz0gZG9tQnJvd3NlLm9mZnNldFRvcDtcblx0XHRyZXR1cm4geydsZWZ0JzpsZWZ0LCd0b3AnOnRvcH07XG5cdH1cblx0ZGVpbW9zLmFuYWx5c2VyLk1hbnVhbC5wcm90b3R5cGUuYWRkRG9tQmxvY2sgPSBmdW5jdGlvbihkb21CbG9jayxpZCxibG9jayl7XG5cdFx0Ly90ZW1wIHZhciB1c2VkIG9uIHByb2Nlc3Ncblx0XHR2YXIgY29vcmRzLGJsb2NrTGVmdCxibG9ja1RvcCxibG9ja0hlaWdodCxibG9ja1dpZHRoLGJsb2NrSnNvbjtcblxuXHRcdGNvb3JkcyA9IHRoaXMuZ2V0Q29vcmRzKHRoaXMuYXJlYVpvbmUsZG9tQmxvY2spO1xuXHRcdGlmKGNvb3JkcyA9PT0gbnVsbCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2Jsb2NrIGlzIG5vdCBhIGNoaWxkIG9mIHRoZSBhcmVhJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGJsb2NrTGVmdCA9IGNvb3Jkcy5sZWZ0O1xuXHRcdGJsb2NrVG9wID0gY29vcmRzLnRvcDtcblx0XHRibG9ja0hlaWdodCA9IGRvbUJsb2NrLm9mZnNldEhlaWdodDtcblx0XHRibG9ja1dpZHRoID0gZG9tQmxvY2sub2Zmc2V0V2lkdGg7XG5cdFx0YmxvY2tKc29uID0ge1xuXHRcdFx0XCJwb3NpdGlvblwiOntcInhcIjpibG9ja0xlZnQsXCJ5XCI6YmxvY2tUb3B9LFxuXHRcdFx0XCJoZWlnaHRcIjpibG9ja0hlaWdodCxcIndpZHRoXCI6YmxvY2tXaWR0aCxcblx0XHRcdFwidHlwZVwiOntcInZhbHVlXCI6MCxcInR5cGVcIjooKGJsb2NrLnBsYXRlZm9ybWUpPydwbGF0ZWZvcm0nOidibG9ja3MnKX0sXG5cdFx0XHRcImlkXCI6XCJibG9jay1cIitpZCtcIi1ieS1pZC1cIitibG9jay5zZWxlY3Rvcixcblx0XHRcdFwidmVydGV4VExcIjp7XCJ4XCI6YmxvY2tMZWZ0LFwieVwiOmJsb2NrVG9wfSxcblx0XHRcdFwidmVydGV4VFJcIjp7XCJ4XCI6YmxvY2tMZWZ0ICsgYmxvY2tXaWR0aCxcInlcIjpibG9ja1RvcH0sXG5cdFx0XHRcInZlcnRleEJMXCI6e1wieFwiOmJsb2NrTGVmdCxcInlcIjpibG9ja1RvcCArIGJsb2NrSGVpZ2h0fSxcblx0XHRcdFwidmVydGV4QlJcIjp7XCJ4XCI6YmxvY2tMZWZ0ICsgYmxvY2tXaWR0aCxcInlcIjpibG9ja1RvcCArIGJsb2NrSGVpZ2h0fVxuXHRcdH1cblx0XHR0aGlzLmJsb2Nrc1BhcnNlZC5wdXNoKGJsb2NrSnNvbik7XG5cdH1cblx0ZGVpbW9zLmFuYWx5c2VyLk1hbnVhbC5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uKCl7XG5cdFx0Y29uc29sZS5sb2coJy4uLnBhcnNpbmcnKTtcblx0XHR0aGlzLmJsb2Nrc1BhcnNlZCA9IFtdO1xuXG5cdFx0Ly90ZW1wIHZhciB1c2VkIG9uIHByb2Nlc3Ncblx0XHR2YXIgYmxvY2tJZCA9IDE7XG5cdFx0dmFyIGRvbUJsb2NrLGRvbUJsb2Nrcyxjb29yZHM7XG5cblx0XHQvL2J5IGlkXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJsb2Nrc0J5SWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGRvbUJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5ibG9ja3NCeUlkW2ldLnNlbGVjdG9yKTtcblx0XHRcdHRoaXMuYWRkRG9tQmxvY2soZG9tQmxvY2ssYmxvY2tJZCsrLHRoaXMuYmxvY2tzQnlJZFtpXSk7XG5cdFx0fTtcblxuXHRcdC8vYnkgY2xhc3Ncblx0XHRmb3IgKHZhciBpQ2xhc3MgPSAwOyBpQ2xhc3MgPCB0aGlzLmJsb2Nrc0J5Q2xhc3MubGVuZ3RoOyBpQ2xhc3MrKykge1xuXHRcdFx0ZG9tQmxvY2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLmJsb2Nrc0J5Q2xhc3NbaUNsYXNzXS5zZWxlY3Rvcik7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbUJsb2Nrcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHR2YXIgZG9tQmxvY2sgPSBkb21CbG9ja3Nbal07XG5cdFx0XHRcdHRoaXMuYWRkRG9tQmxvY2soZG9tQmxvY2ssYmxvY2tJZCsrLHRoaXMuYmxvY2tzQnlDbGFzc1tpQ2xhc3NdKTtcblx0XHRcdH07XG5cdFx0fTtcblxuXHRcdC8vYnkgc2VjdGlvbiBcblx0XHQvL1RPRE9cblx0XHRjb25zb2xlLmxvZygnZG9uZSEnKTtcblx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmJsb2Nrc1BhcnNlZCkpO1xuXHR9XG5cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpO1xuIiwidmFyIG9sZE9uTG9hZEZ1bmN0aW9uID0gd2luZG93Lm9ubG9hZDtcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xuXHRvcmcuZGJ5emVyby5kZWltb3MudmVyc2lvbiA9ICcwLjEuMyc7XG5cblx0aWYoISFvbGRPbkxvYWRGdW5jdGlvbikge1xuXHRcdG9sZE9uTG9hZEZ1bmN0aW9uKCk7XG5cdH1cblxuXHQvL3N0YXJ0IGdhbWUgaWYgYWxsIGlzIGdvb2QgaW4gY29uZmlndXJhdGlvblxuXHR2YXIgY29uZmlnID0ge1xuXHRcdHNlcnZlclVybCA6IFwibG9jYWxob3N0XCIsXG5cdFx0c2VydmVyUG9ydCA6IDQwMDA0LFxuXHRcdHNlcnZlckFzc2V0VVJMIDogXCJodHRwOi8vbG9jYWxob3N0OjgwODBcIixcblx0XHRnYW1lQXJlYSA6IFwiZ2FtZXpvbmVcIlxuXHR9O1xuXG5cdGlmKG9yZy5kYnl6ZXJvLmRlaW1vcy5FbmdpbmUuaW5pdChjb25maWcpID09PSB0cnVlKVxuXHRcdG9yZy5kYnl6ZXJvLmRlaW1vcy5FbmdpbmUuc3RhcnQoKSA7XG5cbn07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
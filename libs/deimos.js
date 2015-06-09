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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1kNS5qcyIsIkluaGVyaXQuanMiLCJMb29wLmpzIiwiTG9nLmpzIiwiVmVjdG9yLmpzIiwiRXZlbnRNYW5hZ2VyLmpzIiwiS2V5Ym9hcmRDb250cm9sbGVyLmpzIiwiQ29uZmlnLmpzIiwiRW5naW5lLmpzIiwiQW5pbWF0aW9uLmpzIiwiVUkuanMiLCJTY2VuZS5qcyIsIkVsZW1lbnQuanMiLCJTcGVha2VyLmpzIiwiQXZhdGFyLmpzIiwiU2VydmVyQXZhdGFyLmpzIiwiQmxvY2suanMiLCJab25lLmpzIiwiUHJvamVjdGlsZS5qcyIsIk1vbnN0ZXIuanMiLCJJdGVtLmpzIiwiQXR0YWNrWm9uZS5qcyIsIldlYnNvY2tldENsaWVudC5qcyIsIk1hbmFnZXIuanMiLCJNZXNzYWdlLmpzIiwiUGh5c2ljcy5qcyIsIlVzZXJNb3ZlbWVudC5qcyIsIkdyYXZpdHkuanMiLCJNYW51YWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeGFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbmxCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM3lCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNySUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDek9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZGVpbW9zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkNyeXB0b0pTIHYzLjEuMlxuY29kZS5nb29nbGUuY29tL3AvY3J5cHRvLWpzXG4oYykgMjAwOS0yMDEzIGJ5IEplZmYgTW90dC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbmNvZGUuZ29vZ2xlLmNvbS9wL2NyeXB0by1qcy93aWtpL0xpY2Vuc2VcbiovXG52YXIgQ3J5cHRvSlM9Q3J5cHRvSlN8fGZ1bmN0aW9uKHMscCl7dmFyIG09e30sbD1tLmxpYj17fSxuPWZ1bmN0aW9uKCl7fSxyPWwuQmFzZT17ZXh0ZW5kOmZ1bmN0aW9uKGIpe24ucHJvdG90eXBlPXRoaXM7dmFyIGg9bmV3IG47YiYmaC5taXhJbihiKTtoLmhhc093blByb3BlcnR5KFwiaW5pdFwiKXx8KGguaW5pdD1mdW5jdGlvbigpe2guJHN1cGVyLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSk7aC5pbml0LnByb3RvdHlwZT1oO2guJHN1cGVyPXRoaXM7cmV0dXJuIGh9LGNyZWF0ZTpmdW5jdGlvbigpe3ZhciBiPXRoaXMuZXh0ZW5kKCk7Yi5pbml0LmFwcGx5KGIsYXJndW1lbnRzKTtyZXR1cm4gYn0saW5pdDpmdW5jdGlvbigpe30sbWl4SW46ZnVuY3Rpb24oYil7Zm9yKHZhciBoIGluIGIpYi5oYXNPd25Qcm9wZXJ0eShoKSYmKHRoaXNbaF09YltoXSk7Yi5oYXNPd25Qcm9wZXJ0eShcInRvU3RyaW5nXCIpJiYodGhpcy50b1N0cmluZz1iLnRvU3RyaW5nKX0sY2xvbmU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pbml0LnByb3RvdHlwZS5leHRlbmQodGhpcyl9fSxcbnE9bC5Xb3JkQXJyYXk9ci5leHRlbmQoe2luaXQ6ZnVuY3Rpb24oYixoKXtiPXRoaXMud29yZHM9Ynx8W107dGhpcy5zaWdCeXRlcz1oIT1wP2g6NCpiLmxlbmd0aH0sdG9TdHJpbmc6ZnVuY3Rpb24oYil7cmV0dXJuKGJ8fHQpLnN0cmluZ2lmeSh0aGlzKX0sY29uY2F0OmZ1bmN0aW9uKGIpe3ZhciBoPXRoaXMud29yZHMsYT1iLndvcmRzLGo9dGhpcy5zaWdCeXRlcztiPWIuc2lnQnl0ZXM7dGhpcy5jbGFtcCgpO2lmKGolNClmb3IodmFyIGc9MDtnPGI7ZysrKWhbaitnPj4+Ml18PShhW2c+Pj4yXT4+PjI0LTgqKGclNCkmMjU1KTw8MjQtOCooKGorZyklNCk7ZWxzZSBpZig2NTUzNTxhLmxlbmd0aClmb3IoZz0wO2c8YjtnKz00KWhbaitnPj4+Ml09YVtnPj4+Ml07ZWxzZSBoLnB1c2guYXBwbHkoaCxhKTt0aGlzLnNpZ0J5dGVzKz1iO3JldHVybiB0aGlzfSxjbGFtcDpmdW5jdGlvbigpe3ZhciBiPXRoaXMud29yZHMsaD10aGlzLnNpZ0J5dGVzO2JbaD4+PjJdJj00Mjk0OTY3Mjk1PDxcbjMyLTgqKGglNCk7Yi5sZW5ndGg9cy5jZWlsKGgvNCl9LGNsb25lOmZ1bmN0aW9uKCl7dmFyIGI9ci5jbG9uZS5jYWxsKHRoaXMpO2Iud29yZHM9dGhpcy53b3Jkcy5zbGljZSgwKTtyZXR1cm4gYn0scmFuZG9tOmZ1bmN0aW9uKGIpe2Zvcih2YXIgaD1bXSxhPTA7YTxiO2ErPTQpaC5wdXNoKDQyOTQ5NjcyOTYqcy5yYW5kb20oKXwwKTtyZXR1cm4gbmV3IHEuaW5pdChoLGIpfX0pLHY9bS5lbmM9e30sdD12LkhleD17c3RyaW5naWZ5OmZ1bmN0aW9uKGIpe3ZhciBhPWIud29yZHM7Yj1iLnNpZ0J5dGVzO2Zvcih2YXIgZz1bXSxqPTA7ajxiO2orKyl7dmFyIGs9YVtqPj4+Ml0+Pj4yNC04KihqJTQpJjI1NTtnLnB1c2goKGs+Pj40KS50b1N0cmluZygxNikpO2cucHVzaCgoayYxNSkudG9TdHJpbmcoMTYpKX1yZXR1cm4gZy5qb2luKFwiXCIpfSxwYXJzZTpmdW5jdGlvbihiKXtmb3IodmFyIGE9Yi5sZW5ndGgsZz1bXSxqPTA7ajxhO2orPTIpZ1tqPj4+M118PXBhcnNlSW50KGIuc3Vic3RyKGosXG4yKSwxNik8PDI0LTQqKGolOCk7cmV0dXJuIG5ldyBxLmluaXQoZyxhLzIpfX0sYT12LkxhdGluMT17c3RyaW5naWZ5OmZ1bmN0aW9uKGIpe3ZhciBhPWIud29yZHM7Yj1iLnNpZ0J5dGVzO2Zvcih2YXIgZz1bXSxqPTA7ajxiO2orKylnLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShhW2o+Pj4yXT4+PjI0LTgqKGolNCkmMjU1KSk7cmV0dXJuIGcuam9pbihcIlwiKX0scGFyc2U6ZnVuY3Rpb24oYil7Zm9yKHZhciBhPWIubGVuZ3RoLGc9W10saj0wO2o8YTtqKyspZ1tqPj4+Ml18PShiLmNoYXJDb2RlQXQoaikmMjU1KTw8MjQtOCooaiU0KTtyZXR1cm4gbmV3IHEuaW5pdChnLGEpfX0sdT12LlV0Zjg9e3N0cmluZ2lmeTpmdW5jdGlvbihiKXt0cnl7cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoYS5zdHJpbmdpZnkoYikpKX1jYXRjaChnKXt0aHJvdyBFcnJvcihcIk1hbGZvcm1lZCBVVEYtOCBkYXRhXCIpO319LHBhcnNlOmZ1bmN0aW9uKGIpe3JldHVybiBhLnBhcnNlKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChiKSkpfX0sXG5nPWwuQnVmZmVyZWRCbG9ja0FsZ29yaXRobT1yLmV4dGVuZCh7cmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLl9kYXRhPW5ldyBxLmluaXQ7dGhpcy5fbkRhdGFCeXRlcz0wfSxfYXBwZW5kOmZ1bmN0aW9uKGIpe1wic3RyaW5nXCI9PXR5cGVvZiBiJiYoYj11LnBhcnNlKGIpKTt0aGlzLl9kYXRhLmNvbmNhdChiKTt0aGlzLl9uRGF0YUJ5dGVzKz1iLnNpZ0J5dGVzfSxfcHJvY2VzczpmdW5jdGlvbihiKXt2YXIgYT10aGlzLl9kYXRhLGc9YS53b3JkcyxqPWEuc2lnQnl0ZXMsaz10aGlzLmJsb2NrU2l6ZSxtPWovKDQqayksbT1iP3MuY2VpbChtKTpzLm1heCgobXwwKS10aGlzLl9taW5CdWZmZXJTaXplLDApO2I9bSprO2o9cy5taW4oNCpiLGopO2lmKGIpe2Zvcih2YXIgbD0wO2w8YjtsKz1rKXRoaXMuX2RvUHJvY2Vzc0Jsb2NrKGcsbCk7bD1nLnNwbGljZSgwLGIpO2Euc2lnQnl0ZXMtPWp9cmV0dXJuIG5ldyBxLmluaXQobCxqKX0sY2xvbmU6ZnVuY3Rpb24oKXt2YXIgYj1yLmNsb25lLmNhbGwodGhpcyk7XG5iLl9kYXRhPXRoaXMuX2RhdGEuY2xvbmUoKTtyZXR1cm4gYn0sX21pbkJ1ZmZlclNpemU6MH0pO2wuSGFzaGVyPWcuZXh0ZW5kKHtjZmc6ci5leHRlbmQoKSxpbml0OmZ1bmN0aW9uKGIpe3RoaXMuY2ZnPXRoaXMuY2ZnLmV4dGVuZChiKTt0aGlzLnJlc2V0KCl9LHJlc2V0OmZ1bmN0aW9uKCl7Zy5yZXNldC5jYWxsKHRoaXMpO3RoaXMuX2RvUmVzZXQoKX0sdXBkYXRlOmZ1bmN0aW9uKGIpe3RoaXMuX2FwcGVuZChiKTt0aGlzLl9wcm9jZXNzKCk7cmV0dXJuIHRoaXN9LGZpbmFsaXplOmZ1bmN0aW9uKGIpe2ImJnRoaXMuX2FwcGVuZChiKTtyZXR1cm4gdGhpcy5fZG9GaW5hbGl6ZSgpfSxibG9ja1NpemU6MTYsX2NyZWF0ZUhlbHBlcjpmdW5jdGlvbihiKXtyZXR1cm4gZnVuY3Rpb24oYSxnKXtyZXR1cm4obmV3IGIuaW5pdChnKSkuZmluYWxpemUoYSl9fSxfY3JlYXRlSG1hY0hlbHBlcjpmdW5jdGlvbihiKXtyZXR1cm4gZnVuY3Rpb24oYSxnKXtyZXR1cm4obmV3IGsuSE1BQy5pbml0KGIsXG5nKSkuZmluYWxpemUoYSl9fX0pO3ZhciBrPW0uYWxnbz17fTtyZXR1cm4gbX0oTWF0aCk7XG4oZnVuY3Rpb24ocyl7ZnVuY3Rpb24gcChhLGssYixoLGwsaixtKXthPWErKGsmYnx+ayZoKStsK207cmV0dXJuKGE8PGp8YT4+PjMyLWopK2t9ZnVuY3Rpb24gbShhLGssYixoLGwsaixtKXthPWErKGsmaHxiJn5oKStsK207cmV0dXJuKGE8PGp8YT4+PjMyLWopK2t9ZnVuY3Rpb24gbChhLGssYixoLGwsaixtKXthPWErKGteYl5oKStsK207cmV0dXJuKGE8PGp8YT4+PjMyLWopK2t9ZnVuY3Rpb24gbihhLGssYixoLGwsaixtKXthPWErKGJeKGt8fmgpKStsK207cmV0dXJuKGE8PGp8YT4+PjMyLWopK2t9Zm9yKHZhciByPUNyeXB0b0pTLHE9ci5saWIsdj1xLldvcmRBcnJheSx0PXEuSGFzaGVyLHE9ci5hbGdvLGE9W10sdT0wOzY0PnU7dSsrKWFbdV09NDI5NDk2NzI5NipzLmFicyhzLnNpbih1KzEpKXwwO3E9cS5NRDU9dC5leHRlbmQoe19kb1Jlc2V0OmZ1bmN0aW9uKCl7dGhpcy5faGFzaD1uZXcgdi5pbml0KFsxNzMyNTg0MTkzLDQwMjMyMzM0MTcsMjU2MjM4MzEwMiwyNzE3MzM4NzhdKX0sXG5fZG9Qcm9jZXNzQmxvY2s6ZnVuY3Rpb24oZyxrKXtmb3IodmFyIGI9MDsxNj5iO2IrKyl7dmFyIGg9aytiLHc9Z1toXTtnW2hdPSh3PDw4fHc+Pj4yNCkmMTY3MTE5MzV8KHc8PDI0fHc+Pj44KSY0Mjc4MjU1MzYwfXZhciBiPXRoaXMuX2hhc2gud29yZHMsaD1nW2srMF0sdz1nW2srMV0saj1nW2srMl0scT1nW2srM10scj1nW2srNF0scz1nW2srNV0sdD1nW2srNl0sdT1nW2srN10sdj1nW2srOF0seD1nW2srOV0seT1nW2srMTBdLHo9Z1trKzExXSxBPWdbaysxMl0sQj1nW2srMTNdLEM9Z1trKzE0XSxEPWdbaysxNV0sYz1iWzBdLGQ9YlsxXSxlPWJbMl0sZj1iWzNdLGM9cChjLGQsZSxmLGgsNyxhWzBdKSxmPXAoZixjLGQsZSx3LDEyLGFbMV0pLGU9cChlLGYsYyxkLGosMTcsYVsyXSksZD1wKGQsZSxmLGMscSwyMixhWzNdKSxjPXAoYyxkLGUsZixyLDcsYVs0XSksZj1wKGYsYyxkLGUscywxMixhWzVdKSxlPXAoZSxmLGMsZCx0LDE3LGFbNl0pLGQ9cChkLGUsZixjLHUsMjIsYVs3XSksXG5jPXAoYyxkLGUsZix2LDcsYVs4XSksZj1wKGYsYyxkLGUseCwxMixhWzldKSxlPXAoZSxmLGMsZCx5LDE3LGFbMTBdKSxkPXAoZCxlLGYsYyx6LDIyLGFbMTFdKSxjPXAoYyxkLGUsZixBLDcsYVsxMl0pLGY9cChmLGMsZCxlLEIsMTIsYVsxM10pLGU9cChlLGYsYyxkLEMsMTcsYVsxNF0pLGQ9cChkLGUsZixjLEQsMjIsYVsxNV0pLGM9bShjLGQsZSxmLHcsNSxhWzE2XSksZj1tKGYsYyxkLGUsdCw5LGFbMTddKSxlPW0oZSxmLGMsZCx6LDE0LGFbMThdKSxkPW0oZCxlLGYsYyxoLDIwLGFbMTldKSxjPW0oYyxkLGUsZixzLDUsYVsyMF0pLGY9bShmLGMsZCxlLHksOSxhWzIxXSksZT1tKGUsZixjLGQsRCwxNCxhWzIyXSksZD1tKGQsZSxmLGMsciwyMCxhWzIzXSksYz1tKGMsZCxlLGYseCw1LGFbMjRdKSxmPW0oZixjLGQsZSxDLDksYVsyNV0pLGU9bShlLGYsYyxkLHEsMTQsYVsyNl0pLGQ9bShkLGUsZixjLHYsMjAsYVsyN10pLGM9bShjLGQsZSxmLEIsNSxhWzI4XSksZj1tKGYsYyxcbmQsZSxqLDksYVsyOV0pLGU9bShlLGYsYyxkLHUsMTQsYVszMF0pLGQ9bShkLGUsZixjLEEsMjAsYVszMV0pLGM9bChjLGQsZSxmLHMsNCxhWzMyXSksZj1sKGYsYyxkLGUsdiwxMSxhWzMzXSksZT1sKGUsZixjLGQseiwxNixhWzM0XSksZD1sKGQsZSxmLGMsQywyMyxhWzM1XSksYz1sKGMsZCxlLGYsdyw0LGFbMzZdKSxmPWwoZixjLGQsZSxyLDExLGFbMzddKSxlPWwoZSxmLGMsZCx1LDE2LGFbMzhdKSxkPWwoZCxlLGYsYyx5LDIzLGFbMzldKSxjPWwoYyxkLGUsZixCLDQsYVs0MF0pLGY9bChmLGMsZCxlLGgsMTEsYVs0MV0pLGU9bChlLGYsYyxkLHEsMTYsYVs0Ml0pLGQ9bChkLGUsZixjLHQsMjMsYVs0M10pLGM9bChjLGQsZSxmLHgsNCxhWzQ0XSksZj1sKGYsYyxkLGUsQSwxMSxhWzQ1XSksZT1sKGUsZixjLGQsRCwxNixhWzQ2XSksZD1sKGQsZSxmLGMsaiwyMyxhWzQ3XSksYz1uKGMsZCxlLGYsaCw2LGFbNDhdKSxmPW4oZixjLGQsZSx1LDEwLGFbNDldKSxlPW4oZSxmLGMsZCxcbkMsMTUsYVs1MF0pLGQ9bihkLGUsZixjLHMsMjEsYVs1MV0pLGM9bihjLGQsZSxmLEEsNixhWzUyXSksZj1uKGYsYyxkLGUscSwxMCxhWzUzXSksZT1uKGUsZixjLGQseSwxNSxhWzU0XSksZD1uKGQsZSxmLGMsdywyMSxhWzU1XSksYz1uKGMsZCxlLGYsdiw2LGFbNTZdKSxmPW4oZixjLGQsZSxELDEwLGFbNTddKSxlPW4oZSxmLGMsZCx0LDE1LGFbNThdKSxkPW4oZCxlLGYsYyxCLDIxLGFbNTldKSxjPW4oYyxkLGUsZixyLDYsYVs2MF0pLGY9bihmLGMsZCxlLHosMTAsYVs2MV0pLGU9bihlLGYsYyxkLGosMTUsYVs2Ml0pLGQ9bihkLGUsZixjLHgsMjEsYVs2M10pO2JbMF09YlswXStjfDA7YlsxXT1iWzFdK2R8MDtiWzJdPWJbMl0rZXwwO2JbM109YlszXStmfDB9LF9kb0ZpbmFsaXplOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fZGF0YSxrPWEud29yZHMsYj04KnRoaXMuX25EYXRhQnl0ZXMsaD04KmEuc2lnQnl0ZXM7a1toPj4+NV18PTEyODw8MjQtaCUzMjt2YXIgbD1zLmZsb29yKGIvXG40Mjk0OTY3Mjk2KTtrWyhoKzY0Pj4+OTw8NCkrMTVdPShsPDw4fGw+Pj4yNCkmMTY3MTE5MzV8KGw8PDI0fGw+Pj44KSY0Mjc4MjU1MzYwO2tbKGgrNjQ+Pj45PDw0KSsxNF09KGI8PDh8Yj4+PjI0KSYxNjcxMTkzNXwoYjw8MjR8Yj4+PjgpJjQyNzgyNTUzNjA7YS5zaWdCeXRlcz00KihrLmxlbmd0aCsxKTt0aGlzLl9wcm9jZXNzKCk7YT10aGlzLl9oYXNoO2s9YS53b3Jkcztmb3IoYj0wOzQ+YjtiKyspaD1rW2JdLGtbYl09KGg8PDh8aD4+PjI0KSYxNjcxMTkzNXwoaDw8MjR8aD4+PjgpJjQyNzgyNTUzNjA7cmV0dXJuIGF9LGNsb25lOmZ1bmN0aW9uKCl7dmFyIGE9dC5jbG9uZS5jYWxsKHRoaXMpO2EuX2hhc2g9dGhpcy5faGFzaC5jbG9uZSgpO3JldHVybiBhfX0pO3IuTUQ1PXQuX2NyZWF0ZUhlbHBlcihxKTtyLkhtYWNNRDU9dC5fY3JlYXRlSG1hY0hlbHBlcihxKX0pKE1hdGgpO1xuIiwiLyoqXG4gKlxuICogb3JnLmRieXplcm8udG9vbHMuSW5oZXJpdCBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxNC8wMy8yMlxuICogQGRlc2NyaXB0aW9uIDogSW5oZXJpdCB0b29sc1xuICogXG4gKi9cblxudmFyIG9yZyA9IG9yZyB8fCB7fSA7XG5vcmcuZGJ5emVybyA9IG9yZy5kYnl6ZXJvIHx8IHt9IDtcbm9yZy5kYnl6ZXJvLnRvb2xzID0gb3JnLmRieXplcm8udG9vbHMgfHwge30gO1xuXG4oZnVuY3Rpb24odG9vbHMsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0dG9vbHMuSW5oZXJpdCA9IGZ1bmN0aW9uKG9iaiwgcGFyZW50KSB7XG5cblx0XHRmb3IgKHZhciBwcm9wIGluIHBhcmVudCkge1xuXHRcdFx0b2JqW3Byb3BdID0gcGFyZW50W3Byb3BdO1xuXHRcdH1cblxuXHRcdG9iai5fc3VwZXIgPSBwYXJlbnQ7XG5cdFx0b2JqLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocGFyZW50LnByb3RvdHlwZSwge1xuXHRcdFx0Y29uc3RydWN0b3I6IHtcblx0XHRcdFx0dmFsdWU6IG9iaixcblx0XHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWVcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSkob3JnLmRieXplcm8udG9vbHMsZG9jdW1lbnQpOyIsIi8qKlxuICogb3JnLmRieXplcm8udG9vbHMuTG9vcCBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxMy8wNy8yOFxuICogQGRlc2NyaXB0aW9uIDogTG9vcCB0b29sc1xuICogXG4gKi9cblxudmFyIG9yZyA9IG9yZyB8fCB7fSA7XG5vcmcuZGJ5emVybyA9IG9yZy5kYnl6ZXJvIHx8IHt9IDtcbm9yZy5kYnl6ZXJvLnRvb2xzID0gb3JnLmRieXplcm8udG9vbHMgfHwge30gO1xuXG4oZnVuY3Rpb24odG9vbHMsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIExvb3AgY29uc3RydWN0b3Jcblx0ICogQHBhcmFtcyBkZXNjIHN0cmluZyBcdFx0RGVzY3JpcHRpb24gb2YgdGhlIGxvb3AsIHVzZWZ1bGwgZm9yIGRlYnVnXG5cdCAqIEBwYXJhbXMgZGVsYXkgaW50IFx0XHR0aW1lIGluIG1zLCB3YWludGluZyB0aW1lIGJldHdlZW4gZWFjaCBsb29wXG5cdCAqIEBwYXJhbXMgdHRsIGludHxvcHRpb25hbFx0dGltZSBpbiBtcywgTWF4IHRpbWUgdG8gbG9vcCBiZWZvcmUgc3RvcHBpbmdcblx0ICpcblx0ICogKi9cblx0dG9vbHMuTG9vcCA9IGZ1bmN0aW9uKGRlc2MsZGVsYXksdHRsKSB7XG5cblx0XHQvL2RlZmF1bHQgdmFsdWUgZm9yIHR0bFxuXHRcdHR0bCA9IHR5cGVvZiB0dGwgIT09ICd1bmRlZmluZWQnID8gdHRsIDogMDtcblxuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjIDtcblx0XHR0aGlzLmxvb3BJZCA9IDAgO1xuXHRcdHRoaXMubGFzdFVwZGF0ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIDtcblx0XHR0aGlzLmRlbGF5ID0gZGVsYXkgO1xuXHRcdHRoaXMuYWN0aXZlID0gZmFsc2UgO1xuXHRcdHRoaXMudHRsID0gdHRsIDtcblx0fVxuXG5cdC8qKlxuXHQgKiBMb29wIG1ldGhvZHNcblx0ICpcblx0ICogKi9cblx0dG9vbHMuTG9vcC5wcm90b3R5cGUgPSB7XG5cdFx0XCJzdGFydFwiIDogZnVuY3Rpb24obG9vcGVkRnVuY3Rpb24pIHtcblx0XHRcdHRoaXMuYWN0aXZlID0gdHJ1ZSA7XG5cdFx0XHRsb29wZWRGdW5jdGlvbi5iaW5kKHRoaXMpIDtcblxuXHRcdFx0Ly9sb29waWlpaW5nXG5cdFx0XHQoZnVuY3Rpb24gbG9vcCgpe1xuXHRcdFx0XHRsb29wZWRGdW5jdGlvbigpO1xuXHRcdFx0XHR0aGlzLmxvb3BJZCA9IHNldFRpbWVvdXQobG9vcC5iaW5kKHRoaXMpLHRoaXMuZGVsYXkpIDtcblx0XHRcdH0pLmNhbGwodGhpcykgO1xuXG5cdFx0XHQvL3R0bCBtYW5hZ2Vcblx0XHRcdGlmKHRoaXMudHRsID4gMCkge1xuXHRcdFx0XHR2YXIgc2FmZUZ1bmN0aW9uID0gZnVuY3Rpb24oKXtcblx0XHRcdFx0XHRpZih0aGlzLmFjdGl2ZSkge1xuXHRcdFx0XHRcdFx0TG9nLndhcm5pbmcoJ1RUTCByZWFjaCBmb3IgbG9vcCAnK3RoaXMuZGVzY3JpcHRpb24pO1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9wKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IDtcblx0XHRcdFx0c2V0VGltZW91dChzYWZlRnVuY3Rpb24uYmluZCh0aGlzKSx0aGlzLnR0bCkgO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XCJzdG9wXCIgOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuYWN0aXZlID0gZmFsc2UgO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMubG9vcElkKSA7XG5cdFx0fVxuXHR9XG59KShvcmcuZGJ5emVyby50b29scywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIG9yZy5kYnl6ZXJvLnRvb2xzLkxvZyBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxMy8wNy8yOFxuICogQGRlc2NyaXB0aW9uIDogTG9nIG1vZGVsXG4gKiBcbiAqL1xudmFyIG9yZyA9IG9yZyB8fCB7fSA7XG5vcmcuZGJ5emVybyA9IG9yZy5kYnl6ZXJvIHx8IHt9IDtcbm9yZy5kYnl6ZXJvLnRvb2xzID0gb3JnLmRieXplcm8udG9vbHMgfHwge30gO1xuXG4oZnVuY3Rpb24odG9vbHMsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0Ly9wcml2YXRlXG5cdHZhciBnZXREYXRlID0gZnVuY3Rpb24obXNnKSB7XG5cdFx0dmFyIGQgPSBuZXcgRGF0ZSgpIDtcblx0XHRyZXR1cm4gJygnK1xuXHRcdFx0ZC5nZXRGdWxsWWVhcigpICsgJy8nICsgXG5cdFx0XHRzdHJfcGFkKGQuZ2V0TW9udGgoKSwyLCcwJykgKyAnLycgKyBcblx0XHRcdHN0cl9wYWQoZC5nZXREYXRlKCksMiwnMCcpICsgJyAnICsgXG5cdFx0XHRzdHJfcGFkKGQuZ2V0SG91cnMoKSwyLCcwJykgKyAnOicgKyBcblx0XHRcdHN0cl9wYWQoZC5nZXRNaW51dGVzKCksMiwnMCcpICsgJzonICsgXG5cdFx0XHRzdHJfcGFkKGQuZ2V0U2Vjb25kcygpLDIsJzAnKSArICcpJyA7XG5cdH07XG5cdHZhciBzdHJfcGFkID0gZnVuY3Rpb24gKGlucHV0LCBwYWRfbGVuZ3RoLCBwYWRfc3RyaW5nLCBwYWRfdHlwZSkge1xuXHRcdC8vIGh0dHA6Ly9rZXZpbi52YW56b25uZXZlbGQubmV0XG5cdFx0Ly8gKyAgIG9yaWdpbmFsIGJ5OiBLZXZpbiB2YW4gWm9ubmV2ZWxkIChodHRwOi8va2V2aW4udmFuem9ubmV2ZWxkLm5ldClcblx0XHQvLyArIG5hbWVzcGFjZWQgYnk6IE1pY2hhZWwgV2hpdGUgKGh0dHA6Ly9nZXRzcHJpbmsuY29tKVxuXHRcdC8vICsgICAgICBpbnB1dCBieTogTWFyY28gdmFuIE9vcnRcblx0XHQvLyArICAgYnVnZml4ZWQgYnk6IEJyZXR0IFphbWlyIChodHRwOi8vYnJldHQtemFtaXIubWUpXG5cdFx0Ly8gKiAgICAgZXhhbXBsZSAxOiBzdHJfcGFkKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJywgMzAsICctPScsICdTVFJfUEFEX0xFRlQnKTtcblx0XHQvLyAqICAgICByZXR1cm5zIDE6ICctPS09LT0tPS09LUtldmluIHZhbiBab25uZXZlbGQnXG5cdFx0Ly8gKiAgICAgZXhhbXBsZSAyOiBzdHJfcGFkKCdLZXZpbiB2YW4gWm9ubmV2ZWxkJywgMzAsICctJywgJ1NUUl9QQURfQk9USCcpO1xuXHRcdC8vICogICAgIHJldHVybnMgMjogJy0tLS0tLUtldmluIHZhbiBab25uZXZlbGQtLS0tLSdcblx0XHR2YXIgaGFsZiA9ICcnLFxuXHRcdHBhZF90b19nbztcblxuXHRcdHZhciBzdHJfcGFkX3JlcGVhdGVyID0gZnVuY3Rpb24gKHMsIGxlbikge1xuXHRcdHZhciBjb2xsZWN0ID0gJycsXG5cdFx0aTtcblxuXHRcdHdoaWxlIChjb2xsZWN0Lmxlbmd0aCA8IGxlbikge1xuXHRcdGNvbGxlY3QgKz0gcztcblx0XHR9XG5cdFx0Y29sbGVjdCA9IGNvbGxlY3Quc3Vic3RyKDAsIGxlbik7XG5cblx0XHRyZXR1cm4gY29sbGVjdDtcblx0XHR9O1xuXG5cdFx0aW5wdXQgKz0gJyc7XG5cdFx0cGFkX3N0cmluZyA9IHBhZF9zdHJpbmcgIT09IHVuZGVmaW5lZCA/IHBhZF9zdHJpbmcgOiAnICc7XG5cblx0XHRpZiAocGFkX3R5cGUgIT09ICdTVFJfUEFEX0xFRlQnICYmIHBhZF90eXBlICE9PSAnU1RSX1BBRF9SSUdIVCcgJiYgcGFkX3R5cGUgIT09ICdTVFJfUEFEX0JPVEgnKSB7XG5cdFx0XHRwYWRfdHlwZSA9ICdTVFJfUEFEX0xFRlQnO1xuXHRcdH1cblx0XHRpZiAoKHBhZF90b19nbyA9IHBhZF9sZW5ndGggLSBpbnB1dC5sZW5ndGgpID4gMCkge1xuXHRcdFx0aWYgKHBhZF90eXBlID09PSAnU1RSX1BBRF9MRUZUJykge1xuXHRcdFx0XHRpbnB1dCA9IHN0cl9wYWRfcmVwZWF0ZXIocGFkX3N0cmluZywgcGFkX3RvX2dvKSArIGlucHV0O1xuXHRcdFx0fSBlbHNlIGlmIChwYWRfdHlwZSA9PT0gJ1NUUl9QQURfUklHSFQnKSB7XG5cdFx0XHRcdGlucHV0ID0gaW5wdXQgKyBzdHJfcGFkX3JlcGVhdGVyKHBhZF9zdHJpbmcsIHBhZF90b19nbyk7XG5cdFx0XHR9IGVsc2UgaWYgKHBhZF90eXBlID09PSAnU1RSX1BBRF9CT1RIJykge1xuXHRcdFx0XHRoYWxmID0gc3RyX3BhZF9yZXBlYXRlcihwYWRfc3RyaW5nLCBNYXRoLmNlaWwocGFkX3RvX2dvIC8gMikpO1xuXHRcdFx0XHRpbnB1dCA9IGhhbGYgKyBpbnB1dCArIGhhbGY7XG5cdFx0XHRcdGlucHV0ID0gaW5wdXQuc3Vic3RyKDAsIHBhZF9sZW5ndGgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBpbnB1dDtcblx0fVxuXG5cdC8qKlxuXHQgKiBMb2cgbWV0aG9kc1xuXHQgKlxuXHQgKiAqL1xuXHR0b29scy5Mb2cgPSB7XG5cdFx0XCJnYXlcIiA6IGZ1bmN0aW9uKG1zZykge1xuXHRcdFx0Y29uc29sZS5sb2coJ3JhaW5ib3c6JyArICcgJyArIGdldERhdGUoKSArICcgOiAnICsgbXNnKVxuXHRcdH0sXG5cdFx0XCJzdWNjZXNzXCIgOiBmdW5jdGlvbihtc2cpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdzdWNjZXNzOicgKyAnICcgKyBnZXREYXRlKCkgKyAnIDogJyArIG1zZylcblx0XHR9LFxuXHRcdFwiaW5mb1wiIDogZnVuY3Rpb24obXNnKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnaW5mbzonICsgJyAgICAnICsgZ2V0RGF0ZSgpICsgJyA6ICcgKyBtc2cpXG5cdFx0fSxcblx0XHRcImRlYnVnXCIgOiBmdW5jdGlvbihtc2cpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdkZWJ1ZzonICsgJyAgICcgKyBnZXREYXRlKCkgKyAnIDogJyArIG1zZylcblx0XHR9LFxuXHRcdFwid2FybmluZ1wiIDogZnVuY3Rpb24obXNnKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ3dhcm5pbmc6JyArICcgJyArIGdldERhdGUoKSArICcgOiAnICsgbXNnKVxuXHRcdH0sXG5cdFx0XCJlcnJvclwiIDogZnVuY3Rpb24obXNnKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdlcnJvcjonICsgJyAgICcgKyBnZXREYXRlKCkgKyAnIDogJyArIG1zZylcblx0XHR9LFxuXHRcdFwiYWxlcnRcIiA6IGZ1bmN0aW9uKG1zZykge1xuXHRcdFx0Y29uc29sZS5lcnJvcignYWxlcnQ6JyArICcgICAnICsgZ2V0RGF0ZSgpICsgJyA6ICcgKyBtc2cpXG5cdFx0fVxuXHR9XG59KShvcmcuZGJ5emVyby50b29scywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3RvciB1dGlsIGNsYXNzXG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTMvMDgvMDlcbiAqIEBkZXNjcmlwdGlvbiA6IFZlY3RvciB0b29sc1xuICpcbiAqL1xuIFxudmFyIG9yZyA9IG9yZyB8fCB7fSA7XG5vcmcuZGJ5emVybyA9IG9yZy5kYnl6ZXJvIHx8IHt9IDtcbm9yZy5kYnl6ZXJvLnRvb2xzID0gb3JnLmRieXplcm8udG9vbHMgfHwge30gO1xuXG4oZnVuY3Rpb24odG9vbHMsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIFZlY3RvciBjb25zdHJ1Y3RvclxuXHQgKi9cblxuXHR0b29scy5WZWN0b3IgPSBmdW5jdGlvbih4LHkpIHtcblx0XHR0aGlzLnggPSB4IDtcblx0XHR0aGlzLnkgPSB5IDtcblx0fVxuXG5cdHRvb2xzLlZlY3Rvci5aZXJvID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIG5ldyB0b29scy5WZWN0b3IoMCwwKTtcblx0fVxuXG5cdHRvb2xzLlZlY3Rvci5TdW0gPSBmdW5jdGlvbih2ZWN0b3IxLHZlY3RvcjIpIHtcblx0XHRyZXR1cm4gbmV3IHRvb2xzLlZlY3RvcihwYXJzZUZsb2F0KHZlY3RvcjEueCkgKyBwYXJzZUZsb2F0KHZlY3RvcjIueCksIHBhcnNlRmxvYXQodmVjdG9yMS55KSArIHBhcnNlRmxvYXQodmVjdG9yMi55KSkgO1xuXHR9XG5cblx0dG9vbHMuVmVjdG9yLlN1YiA9IGZ1bmN0aW9uKHZlY3RvcjEsdmVjdG9yMikge1xuXHRcdHJldHVybiBuZXcgdG9vbHMuVmVjdG9yKHBhcnNlRmxvYXQodmVjdG9yMS54KSAtIHBhcnNlRmxvYXQodmVjdG9yMi54KSwgcGFyc2VGbG9hdCh2ZWN0b3IxLnkpIC0gcGFyc2VGbG9hdCh2ZWN0b3IyLnkpKSA7XG5cdH1cblxuXHR0b29scy5WZWN0b3IuRG90ID0gZnVuY3Rpb24odmVjdG9yMSx2ZWN0b3IyKSB7XG5cdFx0cmV0dXJuIG5ldyB0b29scy5WZWN0b3IocGFyc2VGbG9hdCh2ZWN0b3IxLngpICogcGFyc2VGbG9hdCh2ZWN0b3IyLngpLCBwYXJzZUZsb2F0KHZlY3RvcjEueSkgKiBwYXJzZUZsb2F0KHZlY3RvcjIueSkpIDtcblx0fVxuXG5cdHRvb2xzLlZlY3Rvci5TY2FsYXIgPSBmdW5jdGlvbih2ZWN0b3IxLHNjYWwpIHtcblx0XHRyZXR1cm4gbmV3IHRvb2xzLlZlY3RvcihwYXJzZUZsb2F0KHZlY3RvcjEueCkgKiBzY2FsLCBwYXJzZUZsb2F0KHZlY3RvcjEueSkgKiBzY2FsKSA7XG5cdH1cblxuXHR0b29scy5WZWN0b3IucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHZlY3RvclRvQWRkKSB7XG5cdFx0dGhpcy54ID0gdmVjdG9yVG9BZGQueCArIHRoaXMueCA7XG5cdFx0dGhpcy55ID0gdmVjdG9yVG9BZGQueSArIHRoaXMueSA7XG5cdH1cblxuXHR0b29scy5WZWN0b3IucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uKHZlY3RvclRvQWRkKSB7XG5cdFx0dGhpcy54ID0gdmVjdG9yVG9BZGQueCAtIHRoaXMueCA7XG5cdFx0dGhpcy55ID0gdmVjdG9yVG9BZGQueSAtIHRoaXMueSA7XG5cdH1cblxuXHR0b29scy5WZWN0b3IucHJvdG90eXBlLmRvdCA9IGZ1bmN0aW9uKHZlY18pIHtcblx0XHR0aGlzLnggPSB2ZWNfLnggKiB0aGlzLnggOyBcblx0XHR0aGlzLnkgPSB2ZWNfLnkgKiB0aGlzLnkgO1xuXHR9XG5cblx0dG9vbHMuVmVjdG9yLnByb3RvdHlwZS5zY2FsYXIgPSBmdW5jdGlvbihzY2FsKSB7XG5cdFx0dGhpcy54ID0gc2NhbCAqIHRoaXMueCA7XG5cdFx0dGhpcy55ID0gc2NhbCAqIHRoaXMueSA7XG5cdH1cblxuXHR0b29scy5WZWN0b3IucHJvdG90eXBlLmR1cGxpY2F0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBuZXcgdG9vbHMuVmVjdG9yKHRoaXMueCx0aGlzLnkpIDtcblx0fVxuXG5cdHRvb2xzLlZlY3Rvci5wcm90b3R5cGUubGVuZ3RoU3F1YXJlID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuICh0aGlzLngqdGhpcy54ICsgdGhpcy55KnRoaXMueSkgO1xuXHR9XG5cblx0Ly9pZiBwb3NzaWJsZSwgcHJlZmVhdHIgbGVuZ3RoU3F1YXJlIHdobyBpcyBmYXN0ZXJcblx0dG9vbHMuVmVjdG9yLnByb3RvdHlwZS5sZW5ndGggPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCp0aGlzLnggKyB0aGlzLnkqdGhpcy55KSA7XG5cdH1cblxuXHR0b29scy5WZWN0b3IucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMueCtcInhcIit0aGlzLnk7XG5cdH1cbn0pKG9yZy5kYnl6ZXJvLnRvb2xzLCBkb2N1bWVudCk7IiwiLyoqXG4gKlxuICogb3JnLmRieXplcm8udG9vbHMuRXZlbnRNYW5hZ2VyIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA5LzAxXG4gKiBAZGVzY3JpcHRpb24gOiBFdmVudCBNYW5hZ2VyXG4gKlxuICovXG5cbnZhciBvcmcgPSBvcmcgfHwge30gO1xub3JnLmRieXplcm8gPSBvcmcuZGJ5emVybyB8fCB7fSA7XG5vcmcuZGJ5emVyby50b29scyA9IG9yZy5kYnl6ZXJvLnRvb2xzIHx8IHt9IDtcblxuKGZ1bmN0aW9uKHRvb2xzLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXHR0b29scyA9IG9yZy5kYnl6ZXJvLnRvb2xzIHx8IHt9IDtcblxuXHR0b29scy5FdmVudE1hbmFnZXIgPSB7fSA7XG5cdHRvb2xzLkV2ZW50TWFuYWdlci5ldmVudHMgPSB7fSA7XG5cblx0dG9vbHMuRXZlbnRNYW5hZ2VyLnJlZ2lzdGVyID0gZnVuY3Rpb24oZXZlbnROYW1lLGV2ZW50RnVuY3Rpb24pIHtcblx0XHR0b29scy5FdmVudE1hbmFnZXIuZXZlbnRzW2V2ZW50TmFtZV0gPSB0b29scy5FdmVudE1hbmFnZXIuZXZlbnRzW2V2ZW50TmFtZV0gfHwge30gO1xuXHRcdGlmKHRvb2xzLkV2ZW50TWFuYWdlci5ldmVudHNbZXZlbnROYW1lXS5saXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dG9vbHMuRXZlbnRNYW5hZ2VyLmV2ZW50c1tldmVudE5hbWVdLmxpc3RlbmVycyA9IFtdIDtcblx0XHR9XG5cdFx0dG9vbHMuRXZlbnRNYW5hZ2VyLmV2ZW50c1tldmVudE5hbWVdLmxpc3RlbmVycy5wdXNoKGV2ZW50RnVuY3Rpb24pIDtcblx0fVxuXG5cdHRvb2xzLkV2ZW50TWFuYWdlci51bnJlZ2lzdGVyID0gZnVuY3Rpb24oZXZlbnROYW1lKSB7XG5cdFx0ZGVsZXRlIHRvb2xzLkV2ZW50TWFuYWdlci5ldmVudHNbZXZlbnROYW1lXSA7XG5cdH1cblxuXHR0b29scy5FdmVudE1hbmFnZXIudW5yZWdpc3RlckFsbCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRvb2xzLkV2ZW50TWFuYWdlci5ldmVudHMgPSB7fSA7XG5cdH1cblxuXHR0b29scy5FdmVudE1hbmFnZXIuZmlyZSA9IGZ1bmN0aW9uKGV2ZW50TmFtZSxlKSB7XG5cdFx0aWYodG9vbHMuRXZlbnRNYW5hZ2VyLmV2ZW50c1tldmVudE5hbWVdID09IHVuZGVmaW5lZCkge1xuXHRcdFx0Ly9vcmcuZGJ5emVyby50b29scy5Mb2cuZXJyb3IoJ2V2ZW50ICcgKyBldmVudE5hbWUgKyAnIGRvIG5vdCBleGlzdHMuJykgO1xuXHRcdFx0cmV0dXJuIDtcblx0XHR9XG5cdFx0dmFyIGxpc3RMaXN0ZW5lciA9IHRvb2xzLkV2ZW50TWFuYWdlci5ldmVudHNbZXZlbnROYW1lXS5saXN0ZW5lcnMgO1xuXHRcdGZvcih2YXIgaT0wO2k8bGlzdExpc3RlbmVyLmxlbmd0aDtpKyspIHtcblx0XHRpZihsaXN0TGlzdGVuZXJbaV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdG9yZy5kYnl6ZXJvLnRvb2xzLkxvZy5lcnJvcignZnVuY3Rpb24gYWRkZWQgdG8gbGlzdGVuZXIgJysgZXZlbnROYW1lICsgJyBpcyB1bmRlZmluZWQnKSA7XG5cdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdFx0bGlzdExpc3RlbmVyW2ldKGUpIDtcblx0XHR9XG5cdH1cbn0pKG9yZy5kYnl6ZXJvLnRvb2xzLCBkb2N1bWVudCk7IiwiLyoqXG4gKlxuICogb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzEwLzI5XG4gKiBAZGVzY3JpcHRpb24gOiBIYW5kbGVyIGtleWJvYXJkIGV2ZW50XG4gKiBcbiAqL1xuXG52YXIgb3JnID0gb3JnIHx8IHt9IDtcbm9yZy5kYnl6ZXJvID0gb3JnLmRieXplcm8gfHwge30gO1xub3JnLmRieXplcm8udG9vbHMgPSBvcmcuZGJ5emVyby50b29scyB8fCB7fSA7XG5cbihmdW5jdGlvbih0b29scyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblxuXHR2YXIgRXZlbnRNYW5hZ2VyID0gdG9vbHMuRXZlbnRNYW5hZ2VyO1xuXHQvKipcblx0ICogS2V5Ym9hcmQgY29uc3RydWN0b3Jcblx0ICpcblx0ICogKi9cblx0dG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyID0ge307XG5cblx0dG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmFkZE1hbmFnZWRLZXkgPSBmdW5jdGlvbihrZXkpIHtcblx0XHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIubWFuYWdlZEtleXNba2V5XSA9IHRydWU7XG5cdH1cblxuXHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIucmVtb3ZlTWFuYWdlZEtleSA9IGZ1bmN0aW9uKGtleSkge1xuXHRcdGRlbGV0ZSB0b29scy5LZXlib2FyZENvbnRyb2xsZXIubWFuYWdlZEtleXNba2V5XTtcblx0fVxuXG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkID0gZnVuY3Rpb24oZSkge1xuXHRcdHZhciBldnRvYmogPSB3aW5kb3cuZXZlbnQ/IGV2ZW50IDogZTtcblx0XHR2YXIga2V5ID0gZXZ0b2JqLmtleUNvZGU7XG5cdFx0aWYoa2V5IGluIHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5tYW5hZ2VkS2V5cyl7XG5cdFx0XHRpZih0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5U3RhdHVzW2tleV0gPT09IHRydWUpIHJldHVybjtcblx0XHRcdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlTdGF0dXNba2V5XSA9IHRydWU7XG5cdFx0XHQvL2NvbnNvbGUubG9nKCdwcmVzc2VkICcra2V5KTtcblx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVByZXNzZWQuXCIra2V5KTtcblx0XHR9XG5cdH1cblxuXHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UmVsZWFzZWQgPSBmdW5jdGlvbihlKSB7XG5cdFx0dmFyIGV2dG9iaiA9IHdpbmRvdy5ldmVudD8gZXZlbnQgOiBlO1xuXHRcdHZhciBrZXkgPSBldnRvYmoua2V5Q29kZTtcblx0XHRpZihrZXkgaW4gdG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLm1hbmFnZWRLZXlzKXtcblx0XHRcdGlmKHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlTdGF0dXNba2V5XSA9PT0gZmFsc2UpIHJldHVybjtcblx0XHRcdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlTdGF0dXNba2V5XSA9IGZhbHNlO1xuXHRcdFx0Ly9jb25zb2xlLmxvZygncmVsZWFzZWQgJytrZXkpO1xuXHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UmVsZWFzZWQuXCIra2V5KTtcblx0XHR9XG5cdH1cblxuXHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5U3RhdHVzID0ge307XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5tYW5hZ2VkS2V5cyA9IHt9O1xuXHRcblx0dG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleXMgPSB7fTtcblx0dG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuRU5URVIgPSAxMztcblx0dG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuU1BBQ0UgPSAzMjtcblx0dG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfTEVGVCA9IDM3O1xuXHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5cy5BUlJPV19SSUdIVCA9IDM5O1xuXHR0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5cy5BUlJPV19ET1dOID0gNDA7XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlzLkFSUk9XX1VQID0gMzg7XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlzLm4xID0gNDk7XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlzLm4yID0gNTA7XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlzLm4zID0gNTE7XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlzLm40ID0gNTI7XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlzLm41ID0gNTM7XG5cdHRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlzLlggPSA4ODtcblxuXHRkb2N1bWVudC5vbmtleWRvd24gID0gdG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVByZXNzZWQ7XG5cdGRvY3VtZW50Lm9ua2V5dXAgICAgPSB0b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UmVsZWFzZWQ7XG5cbiAgIFxufSkob3JnLmRieXplcm8udG9vbHMsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBvcmcuZGJ5emVyby5kZWltb3MuQ29uZmlnIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA4LzA5XG4gKiBAZGVzY3JpcHRpb24gOiBDb25maWcgb2YgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICogKi9cblxudmFyIG9yZyA9IG9yZyB8fCB7fSA7XG5vcmcuZGJ5emVybyA9IG9yZy5kYnl6ZXJvIHx8IHt9IDtcbm9yZy5kYnl6ZXJvLmRlaW1vcyA9IG9yZy5kYnl6ZXJvLmRlaW1vcyB8fCB7fSA7XG5cbihmdW5jdGlvbihkZWltb3MsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cdGRlaW1vcy5Db25maWcgPSB7fTtcblx0ZGVpbW9zLkNvbmZpZy5GUFMgPSA2MDtcblx0ZGVpbW9zLkNvbmZpZy5tb2RlID0gXCJkZWJ1Z1wiLFxuXHRkZWltb3MuQ29uZmlnLm1lc3NhZ2VMZXZlbCA9IFwidmVyYm9zZVwiLFxuXHRkZWltb3MuQ29uZmlnLkZQUyA9IDYwO1xuXHRkZWltb3MuQ29uZmlnLkdBTUVfU1BFRUQgPSAzMztcblx0ZGVpbW9zLkNvbmZpZy5TUVVBUkVfQVVUSE9SSVRZID0gMTAwKjEwMDtcblx0ZGVpbW9zLkNvbmZpZy5ERUxUQV9TRVJWRVJfU1lOQyA9IDUwMDA7XG5cdGRlaW1vcy5Db25maWcuc2hvd093bk1pcnJvciA9IGZhbHNlO1xuXG5cdC8qKioqKipcblx0ICogVUlcblx0ICoqKioqL1xuXHRkZWltb3MuQ29uZmlnLnVpID0ge307XG5cblx0ZGVpbW9zLkNvbmZpZy51aS5jaGF0RG9tSWQgPSAnb3JnLmRieXplcm8uZGVpbW9zLm1lc3NhZ2VBcmVhJztcblx0ZGVpbW9zLkNvbmZpZy51aS5kaXNjb25uZWN0RG9tSWQgPSAnb3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5kaXNjb25uZWN0JztcblxuXHRkZWltb3MuQ29uZmlnLnVpLmluZGljYXRpb24gPSB7fTtcblx0ZGVpbW9zLkNvbmZpZy51aS5pbmRpY2F0aW9uLmxhZyA9ICdvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLmluZGljYXRvckxhZyc7XG5cdGRlaW1vcy5Db25maWcudWkuaW5kaWNhdGlvbi5mcHMgPSAnb3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5pbmRpY2F0b3JGcHMnO1xuXHRkZWltb3MuQ29uZmlnLnVpLmluZGljYXRpb24uY29ubmVjdGlvblN0YXR1cyA9ICdvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLmluZGljYXRvckNvbm5lY3RlZCc7XG5cdGRlaW1vcy5Db25maWcudWkuaW5kaWNhdGlvbi5zZXJ2ZXJTdGF0dXMgPSAnb3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5pbmRpY2F0b3JTZXJ2ZXInO1xuXG5cdGRlaW1vcy5Db25maWcudWkubG9naW4gPSB7fTtcblx0ZGVpbW9zLkNvbmZpZy51aS5sb2dpbi5mb3JtRG9tSWQgPSAnb3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5sb2dpbkZvcm0nO1xuXHRkZWltb3MuQ29uZmlnLnVpLmxvZ2luLnNlY3Rpb25Eb21JZCA9ICdvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLnNlY3Rpb25Mb2dpbic7XG5cdGRlaW1vcy5Db25maWcudWkubG9naW4uaW5wdXRMb2dpbkRvbUlkID0gJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAubG9naW5JbnB1dCc7XG5cdGRlaW1vcy5Db25maWcudWkubG9naW4uaW5wdXRQYXNzd29yZERvbUlkID0gJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAucGFzc3dvcmRJbnB1dCc7XG5cblx0ZGVpbW9zLkNvbmZpZy51aS5jaG9vc2VBdmF0YXIgPSB7fTtcblx0ZGVpbW9zLkNvbmZpZy51aS5jaG9vc2VBdmF0YXIuc2VjdGlvbkRvbUlkID0gJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAuc2VjdGlvbkNob29zZUF2YXRhcic7XG5cdGRlaW1vcy5Db25maWcudWkuY2hvb3NlQXZhdGFyLmZvcm1Eb21JZCA9ICdvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLmZvcm1DaG9vc2VBdmF0YXInO1xuXHRkZWltb3MuQ29uZmlnLnVpLmNob29zZUF2YXRhci5hdmF0YXJMaXN0RG9tSWQgPSAnb3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5hdmF0YXJMaXN0Jztcblx0ZGVpbW9zLkNvbmZpZy56b25lID0ge307XG5cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIG9yZy5kYnl6ZXJvLmRlaW1vcy5FbmdpbmUgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTMvMDgvMDRcbiAqIEBkZXNjcmlwdGlvbiA6IEVuZ2luZSBjbGFzcyBtYW5hZ2UgdGhlIGFwcGxpY2F0aW9uXG4gKlxuICoqL1xuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBvcmcuZGJ5emVyby5kZWltb3MuRW5naW5lIGluaXRpYWxpemVyXG5cdCAqIFxuXHQgKiBAcGFyYW0gc3RyaW5nIHdzVXJsIFVSTCBvZiB3ZWJzb2NrZXQgc2VydmVyXG5cdCAqIEBwYXJhbSBzdHJpbmcgd3NQb3J0IHBvcnQgb2Ygd2Vic29ja2V0IHNlcnZlclxuXHQgKiBAcGFyYW0gRW5naW5lTW9kZSBNb2RlIG9mIHRoZSBjbGllbnQsIGNhbiBiZSBFbmdpbmVNb2RlLkRFQlVHIHRvIHNob3cgbG9nc1xuXHQgKlxuXHQgKiAqL1xuXG5cdHZhciBLZXlib2FyZENvbnRyb2xsZXIgPSBvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXI7XG5cdHZhciBFdmVudE1hbmFnZXIgPSBvcmcuZGJ5emVyby50b29scy5FdmVudE1hbmFnZXI7XG5cblx0Ly91c2VkIHRvIHRyYW5zbGF0aW9uXG5cdHZhciBfdCA9IG51bGw7XG5cblx0ZGVpbW9zLkVuZ2luZSA9IHtcblx0XHRydW5uaW5nIDogZmFsc2UsXG5cdFx0c3RhcnQgOiBmdW5jdGlvbiAoY29uZmlnKXtcblx0XHRcdGRlaW1vcy5FbmdpbmUucnVubmluZyA9IGZhbHNlO1xuXG5cdFx0XHQvL21ha2luZyBVSVxuXHRcdFx0ZGVpbW9zLkVuZ2luZS51aSA9IG5ldyBkZWltb3MucmVuZGVyLlVJKCkgO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5sYXN0VXBkYXRlID0gbnVsbDtcblx0XHRcdGRlaW1vcy5FbmdpbmUubGFzdFN5bmMgPSBudWxsO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5uZWVkU3luYyA9IGZhbHNlO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5pdGVtVGVtcGxhdGVzID0ge307IFxuXHRcdFx0ZGVpbW9zLkVuZ2luZS5wYXN0RlBTID0gW107XG5cblx0XHRcdC8vc3RvY2tpbmcgYXNzZXQgYWNjZXNzXG5cdFx0XHRkZWltb3MuRW5naW5lLmFzc2V0VVJMID0gY29uZmlnLnNlcnZlckFzc2V0VVJMO1xuXG5cdFx0XHRkZWltb3MuRW5naW5lLl90ID0gZGVpbW9zLm5ldHdvcmsuTWVzc2FnZS5DT0RFW2RlaW1vcy5Db25maWcubWVzc2FnZUxldmVsXTtcblxuXHRcdFx0Ly9zZXQgcnVubGV2ZWxcblx0XHRcdGRlaW1vcy5FbmdpbmUubW9kZSA9ICggXG5cdFx0XHRcdGRlaW1vcy5Db25maWcubW9kZSA9PSBcImRlYnVnXCIgPyBcblx0XHRcdFx0ZGVpbW9zLkVuZ2luZS5Nb2RlLkRFQlVHIFxuXHRcdFx0XHQ6IGRlaW1vcy5FbmdpbmUuTW9kZS5QUk9EIFxuXHRcdFx0KSA7XG5cblx0XHRcdC8vbWFraW5nIG5ldHdvcmsgbWFuYWdlclxuXHRcdFx0ZGVpbW9zLkVuZ2luZS5uZXR3b3JrTWFuYWdlciA9IG5ldyBkZWltb3MubmV0d29yay5NYW5hZ2VyKCk7XG5cdFx0XHRkZWltb3MuRW5naW5lLm5ldHdvcmtNYW5hZ2VyLmluaXQoKTtcblxuXHRcdFx0Ly9tYWtpbmcgbWFpbiBsb29wXG5cdFx0XHRkZWltb3MuRW5naW5lLmxvb3AgPSBuZXcgb3JnLmRieXplcm8udG9vbHMuTG9vcCgnbWFpbl9sb29wJyxwYXJzZUludCgxMDAwL2RlaW1vcy5Db25maWcuRlBTKSkgO1xuXG5cblx0XHRcdC8vc2V0dGluZyB3ZWJzb2NrZXQgc2VydmVyXG5cdFx0XHRkZWltb3MuRW5naW5lLndzVXJsID0gY29uZmlnLnNlcnZlclVSTDtcblx0XHRcdGRlaW1vcy5FbmdpbmUud3NQb3J0ID0gY29uZmlnLnNlcnZlclBvcnQgO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS53c0NsaWVudCA9IG5ldyBkZWltb3MubmV0d29yay5XZWJzb2NrZXRDbGllbnQoZGVpbW9zLkVuZ2luZS53c1VybCxkZWltb3MuRW5naW5lLndzUG9ydCxkZWltb3MuRW5naW5lLm1vZGUpO1xuXG5cdFx0XHQvL21ha2luZyBzY2VuZVxuXHRcdFx0ZGVpbW9zLkVuZ2luZS5zY2VuZSA9IG5ldyBkZWltb3MucmVuZGVyLlNjZW5lKCk7XG5cblx0XHRcdGJpbmRFbmdpbmVFdmVudCgpO1xuXG5cdFx0XHQvL2xvZ2luIGJ5IHRva2VuXG5cdFx0XHRkZWltb3MuRW5naW5lLndzQ2xpZW50LmNvbm5lY3QoKSA7XG5cdFx0XHRkZWltb3MuRW5naW5lLndzQ2xpZW50LnNlc3Npb25faWQgPSBjb25maWcuc2Vzc2lvbklkO1xuXHRcdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblx0XHRcdHZhciBtZXNzYWdlID0ge307XG5cdFx0XHRtZXNzYWdlW190WydBQ1RJT04nXV0gPSBfdFsnQVVUSF9CWV9UT0tFTiddO1xuXHRcdFx0bWVzc2FnZVtfdFsnTUVTU0FHRSddXSA9IHt9O1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5uZXR3b3JrTWFuYWdlci5zZW5kTWVzc2FnZShtZXNzYWdlKTtcblx0XHR9LFxuXG5cdFx0c3RvcDogZnVuY3Rpb24gKCl7XG5cdFx0XHQvL2RvIG5vdGhpbmcgaWYgYWxyZWFkeSBzdG9wcGVkXG5cdFx0XHRpZihkZWltb3MuRW5naW5lLnJ1bm5pbmcgPT09IGZhbHNlKSByZXR1cm47XG5cblx0XHRcdGRlaW1vcy5FbmdpbmUucnVubmluZyA9IGZhbHNlO1xuXHRcdFx0dW5iaW5kR2FtZUV2ZW50S2V5KCkgO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5sb29wLnN0b3AoKSA7XG5cblx0XHRcdGlmKGRlaW1vcy5FbmdpbmUuYXZhdGFyKVxuXHRcdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5jbGVhbkRvbSgpO1xuXG5cdFx0XHRpZihkZWltb3MuRW5naW5lLnNjZW5lKVxuXHRcdFx0XHRkZWltb3MuRW5naW5lLnNjZW5lLmRlc3Ryb3koKTtcblxuXHRcdFx0aWYoZGVpbW9zLkVuZ2luZS5uZXR3b3JrTWFuYWdlcilcblx0XHRcdFx0ZGVpbW9zLkVuZ2luZS5uZXR3b3JrTWFuYWdlci5kZXN0cm95KCk7XG5cblx0XHRcdGlmKGRlaW1vcy5FbmdpbmUudWkpXG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUudWkubG9nZ291dCgpIDtcblxuXHRcdFx0aWYoZGVpbW9zLkVuZ2luZS56b25lKVxuXHRcdFx0XHRkZWltb3MuRW5naW5lLnpvbmUuZGVzdHJveSgpIDtcblxuXHRcdFx0aWYoZGVpbW9zLkVuZ2luZS53c0NsaWVudClcblx0XHRcdFx0ZGVpbW9zLkVuZ2luZS53c0NsaWVudC5jbG9zZSgpO1xuXG5cdFx0XHRkZWxldGUgZGVpbW9zLkVuZ2luZS5hdmF0YXI7XG5cdFx0XHRkZWxldGUgZGVpbW9zLkVuZ2luZS56b25lO1xuXHRcdFx0ZGVsZXRlIGRlaW1vcy5FbmdpbmUudWk7XG5cdFx0XHRkZWxldGUgZGVpbW9zLkVuZ2luZS5wYXN0RlBTO1xuXHRcdFx0ZGVsZXRlIGRlaW1vcy5FbmdpbmUuaXRlbVRlbXBsYXRlczsgXG5cdFx0XHRkZWxldGUgZGVpbW9zLkVuZ2luZS5uZWVkU3luYztcblx0XHRcdGRlbGV0ZSBkZWltb3MuRW5naW5lLmxhc3RTeW5jO1xuXHRcdFx0ZGVsZXRlIGRlaW1vcy5FbmdpbmUubGFzdFVwZGF0ZTtcblx0XHRcdGRlbGV0ZSBkZWltb3MuRW5naW5lLmFzc2V0VVJMO1xuXHRcdFx0ZGVsZXRlIGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0XHRkZWxldGUgZGVpbW9zLkVuZ2luZS5tb2RlO1xuXHRcdFx0ZGVsZXRlIGRlaW1vcy5FbmdpbmUubmV0d29ya01hbmFnZXI7XG5cdFx0XHRkZWxldGUgZGVpbW9zLkVuZ2luZS53c0NsaWVudDtcblx0XHRcdGRlbGV0ZSBkZWltb3MuRW5naW5lLnNjZW5lO1xuXHRcdFx0ZGVsZXRlIGRlaW1vcy5FbmdpbmUud3NQb3J0O1xuXHRcdFx0ZGVsZXRlIGRlaW1vcy5FbmdpbmUud3NVcmw7XG5cdFx0XHRkZWxldGUgZGVpbW9zLkVuZ2luZS5sb29wO1xuXHRcdH0sXG5cblx0XHRrZXlIYW5kbGVyVXA6IGZ1bmN0aW9uKGUpe1xuXHRcdFx0ZXZ0b2JqID0gd2luZG93LmV2ZW50PyBldmVudCA6IGVcblx0XHRcdGtleUNvZGUgPSBldnRvYmoua2V5Q29kZSA7XG5cdFx0fSxcblxuXHRcdGtleUhhbmRsZXJEb3duOiBmdW5jdGlvbihlKXtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogTUFJTiBHQU1FIExPT1Bcblx0XHQgKi9cblx0XHR1cGRhdGU6IGZ1bmN0aW9uKCl7XG5cdFx0XHRpZihkZWltb3MuRW5naW5lLnJ1bm5pbmcgPT09IGZhbHNlKSByZXR1cm47XG5cblx0XHRcdC8vdGltZSB0aGluZ3Ncblx0XHRcdGlmKGRlaW1vcy5FbmdpbmUubGFzdFVwZGF0ZSA9PT0gbnVsbClcblx0XHRcdHtcblx0XHRcdFx0ZGVpbW9zLkVuZ2luZS5sYXN0VXBkYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0XHR2YXIgZHQgPSBub3cgLSBkZWltb3MuRW5naW5lLmxhc3RVcGRhdGU7XG5cdFx0XHRkZWltb3MuRW5naW5lLnNjZW5lLnVwZGF0ZShkdCxub3cpIDtcblx0XHRcdGRlaW1vcy5FbmdpbmUubGFzdFVwZGF0ZSArPSBkdDtcblxuXHRcdFx0Ly9zeW5jIHRoaW5nc1xuXHRcdFx0aWYoZGVpbW9zLkVuZ2luZS5sYXN0U3luYyA9PT0gbnVsbClcblx0XHRcdHtcblx0XHRcdFx0ZGVpbW9zLkVuZ2luZS5sYXN0U3luYyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdFx0fVxuXHRcdFx0aWYoZGVpbW9zLkVuZ2luZS5sYXN0U3luYyArIGRlaW1vcy5Db25maWcuREVMVEFfU0VSVkVSX1NZTkMgPCBub3cpXG5cdFx0XHR7XG5cdFx0XHRcdGlmKGRlaW1vcy5FbmdpbmUuYXZhdGFyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnNlbmRTeW5jXCIpO1xuXHRcdFx0XHRcdGRlaW1vcy5FbmdpbmUubGFzdFN5bmMgPSBub3c7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0aW5pdEdhbWVBcmVhOiBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS56b25lID0gbmV3IGRlaW1vcy5lbGVtZW50LlpvbmUoXG5cdFx0XHRcdGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9HQU1FX0FSRUFfTkFNRV0sXG5cdFx0XHRcdGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9HQU1FX0FSRUFfRE9NX0lEXSxcblx0XHRcdFx0ZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0dBTUVfQVJFQV9XSURUSF0sXG5cdFx0XHRcdGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9HQU1FX0FSRUFfSEVJR0hUXSxcblx0XHRcdFx0ZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0dBTUVfQVJFQV9CTE9DS1NdXG5cdFx0XHQpO1xuXHRcdH0sXG5cblx0XHRzdGFydEdhbWU6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0XHR2YXIgc2tpblx0XHRcdFx0XHQ9IGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9DSEFSXVtfdC5NRVNTQUdFX1NLSU5dO1xuXHRcdFx0dmFyIGlkXHRcdFx0XHRcdFx0PSBlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuTUVTU0FHRV9FTEVNRU5UX0lEXTtcblx0XHRcdHZhciBuYW1lXHRcdFx0XHRcdD0gZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0NIQVJdW190Lk5BTUVdO1xuXHRcdFx0dmFyIHNpemVcdFx0XHRcdFx0PSBlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuTUVTU0FHRV9TSVpFXTtcblx0XHRcdHZhciBkZWx0YXNob3dcdFx0XHRcdD0gZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0NIQVJdW190Lk1FU1NBR0VfREVMVEFTSE9XXTtcblx0XHRcdHZhciBwb3NpdGlvblx0XHRcdFx0PSBlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuTUVTU0FHRV9QT1NJVElPTl07XG5cdFx0XHR2YXIgbW92ZV9zcGVlZFx0XHRcdFx0PSBlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuTUVTU0FHRV9NT1ZFX1NQRUVEXTtcblx0XHRcdHZhciBqdW1wX3NwZWVkXHRcdFx0XHQ9IGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9DSEFSXVtfdC5NRVNTQUdFX0pVTVBfU1BFRURdO1xuXHRcdFx0dmFyIGl0ZW1fc2xvdF9oZWFkXHRcdFx0PSBlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuSVRFTV9TTE9UX0hFQURdO1xuXHRcdFx0dmFyIGl0ZW1fc2xvdF9mb290XHRcdFx0PSBlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuSVRFTV9TTE9UX0ZPT1RdO1xuXHRcdFx0dmFyIGl0ZW1fc2xvdF9jaGVzdFx0XHRcdD0gZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0NIQVJdW190LklURU1fU0xPVF9DSEVTVF07XG5cdFx0XHR2YXIgaXRlbV9zbG90X2xlZnRfaGFuZFx0XHQ9IGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9DSEFSXVtfdC5JVEVNX1NMT1RfTEVGVF9IQU5EXTtcblx0XHRcdHZhciBpdGVtX3Nsb3RfcmlnaHRfaGFuZFx0PSBlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfQ0hBUl1bX3QuSVRFTV9TTE9UX1JJR0hUX0hBTkRdO1xuXHRcdFx0dmFyIG9yaWVudGVkXHRcdFx0XHQ9IGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9DSEFSXVtfdC5NRVNTQUdFX0FOSU1BVElPTl1bX3QuTUVTU0FHRV9ESVJFQ1RJT05dO1xuXHRcdFx0Ly9tYWtlIGF2YXRhclxuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIgPSBuZXcgZGVpbW9zLmVsZW1lbnQuQXZhdGFyKG5hbWUsXG5cdFx0XHRcdG5ldyBvcmcuZGJ5emVyby50b29scy5WZWN0b3IoXG5cdFx0XHRcdFx0cGFyc2VJbnQocG9zaXRpb24ueCksXG5cdFx0XHRcdFx0cGFyc2VJbnQocG9zaXRpb24ueSlcblx0XHRcdFx0KSxcblx0XHRcdFx0Ly9zaXplIGZyb20gc2VydmVyIGJlY2F1c2UgaXQncyBuZWVkZWQgZm9yIGNvbGxpc2lvbnNcblx0XHRcdFx0bmV3IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3Rvcihcblx0XHRcdFx0XHRwYXJzZUludChzaXplLngpLFxuXHRcdFx0XHRcdHBhcnNlSW50KHNpemUueSlcblx0XHRcdFx0KSxcblx0XHRcdFx0aWQsXG5cdFx0XHRcdGRlbHRhc2hvdyxcblx0XHRcdFx0ZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0NIQVJdW190Lk1FU1NBR0VfTUFTU11cblx0XHRcdCk7XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5tYXhIUCA9IGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9DSEFSXVtfdC5NRVNTQUdFX0hQXTtcblx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLkhQID0gZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0NIQVJdW190Lk1FU1NBR0VfQ1VSUkVOVF9IUF07XG5cblx0XHRcdGlmKHBhcnNlSW50KGl0ZW1fc2xvdF9oZWFkKSA+IDApXG5cdFx0XHR7XG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUuc3RvcmVJdGVtRnJvbVNlcnZlcihlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfSVRFTVNdW190LklURU1fU0xPVF9IRUFEXSk7XG5cdFx0XHR9XG5cdFx0XHRpZihwYXJzZUludChpdGVtX3Nsb3RfZm9vdCkgPiAwKVxuXHRcdFx0e1xuXHRcdFx0XHRkZWltb3MuRW5naW5lLnN0b3JlSXRlbUZyb21TZXJ2ZXIoZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0lURU1TXVtfdC5JVEVNX1NMT1RfRk9PVF0pO1xuXHRcdFx0fVxuXHRcdFx0aWYocGFyc2VJbnQoaXRlbV9zbG90X2NoZXN0KSA+IDApXG5cdFx0XHR7XG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUuc3RvcmVJdGVtRnJvbVNlcnZlcihlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfSVRFTVNdW190LklURU1fU0xPVF9DSEVTVF0pO1xuXHRcdFx0fVxuXHRcdFx0aWYocGFyc2VJbnQoaXRlbV9zbG90X2xlZnRfaGFuZCkgPiAwKVxuXHRcdFx0e1xuXHRcdFx0XHRkZWltb3MuRW5naW5lLnN0b3JlSXRlbUZyb21TZXJ2ZXIoZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0lURU1TXVtfdC5JVEVNX1NMT1RfTEVGVF9IQU5EXSk7XG5cdFx0XHR9XG5cdFx0XHRpZihwYXJzZUludChpdGVtX3Nsb3RfcmlnaHRfaGFuZCkgPiAwKVxuXHRcdFx0e1xuXHRcdFx0XHRkZWltb3MuRW5naW5lLnN0b3JlSXRlbUZyb21TZXJ2ZXIoZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX0lURU1TXVtfdC5JVEVNX1NMT1RfUklHSFRfSEFORF0pO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5tb3ZlX3NwZWVkID0gbW92ZV9zcGVlZDtcblx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLmp1bXBfc3BlZWQgPSBqdW1wX3NwZWVkO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIuaXRlbV9zbG90X2hlYWQgPSBpdGVtX3Nsb3RfaGVhZDtcblx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLml0ZW1fc2xvdF9mb290ID0gaXRlbV9zbG90X2Zvb3Q7XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5pdGVtX3Nsb3RfY2hlc3QgPSBpdGVtX3Nsb3RfY2hlc3Q7XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5pdGVtX3Nsb3RfbGVmdF9oYW5kID0gaXRlbV9zbG90X2xlZnRfaGFuZDtcblx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLml0ZW1fc2xvdF9yaWdodF9oYW5kID0gaXRlbV9zbG90X3JpZ2h0X2hhbmQ7XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5vcmllbnRlZCA9IG9yaWVudGVkO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIuc2tpbiA9IHNraW47XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5pbml0KCk7XG5cdFx0XHRiaW5kR2FtZUV2ZW50S2V5KCk7XG5cblx0XHRcdC8vc3RhcnRpbmdcblx0XHRcdGRlaW1vcy5FbmdpbmUucnVubmluZyA9IHRydWU7XG5cdFx0XHRkZWltb3MuRW5naW5lLnNjZW5lLmRhdGFUb1BhcnNlID0gZVtfdC5NRVNTQUdFXVtfdC5BQ1RJT05fU1lOQ107XG5cdFx0XHRkZWltb3MuRW5naW5lLmxvb3Auc3RhcnQoZGVpbW9zLkVuZ2luZS51cGRhdGUuYmluZChkZWltb3MuRW5naW5lKSk7XG5cdFx0fSxcblxuXHRcdGdldEl0ZW1UZW1wbGF0ZSA6IGZ1bmN0aW9uKGl0ZW1JZCwgY2FsbGJhY2spIHtcblx0XHRcdC8vaWYgbm90IHlldCBnZXQsIHdlIGFzayBmb3IgaXQsIGVsc2UsIGxvYWQgdGhlIGNhbGxiYWNrXG5cdFx0XHRpZihkZWltb3MuRW5naW5lLml0ZW1UZW1wbGF0ZXNbaXRlbUlkXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUubmV0d29ya01hbmFnZXIuYXNrSXRlbVRlbXBsYXRlKGl0ZW1JZCk7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLkVuZ2luZS5uZXdJdGVtU3RvcmVkLicraXRlbUlkLGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLkVuZ2luZS5uZXdJdGVtU3RvcmVkLicraXRlbUlkKTtcblx0XHRcdFx0XHRjYWxsYmFjayhpdGVtKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjYWxsYmFjayhkZWltb3MuRW5naW5lLml0ZW1UZW1wbGF0ZXNbaXRlbUlkXSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG9uQXZhdGFyU2VsZWN0ZWQgOiBmdW5jdGlvbihhdmF0YXIpIHtcblx0XHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0XHR2YXIgZSA9IHt9IDtcblx0XHRcdGVbX3QuQUNUSU9OXSA9IF90LkFDVElPTl9DSE9PU0VfQ0hBUjtcblx0XHRcdGVbX3QuTUVTU0FHRV0gPSB7fTtcblx0XHRcdGVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9DSEFSXSA9IGF2YXRhcjtcblx0XHRcdGRlaW1vcy5FbmdpbmUubmV0d29ya01hbmFnZXIuc2VuZE1lc3NhZ2UoZSk7XG5cdFx0fSxcblxuXHRcdC8vYXZhdGFyIGlzIHNlbGVjdGVkIGFuZCBjb25maXJtZWQgYnkgdGhlIGJhY2tlbmRcblx0XHRhdmF0YXJTZWxlY3Rpb25Db25maXJtZWQ6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0XHRpZighIWVbX3QuTUVTU0FHRV1bX3QuTUVTU0FHRV9DSEFSXVtfdC5NRVNTQUdFX0VMRU1FTlRfSURdKSB7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlaW1vcy5Db25maWcudWkuY2hvb3NlQXZhdGFyLnNlY3Rpb25Eb21JZCkuc3R5bGUuZGlzcGxheSA9ICdub25lJyA7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmVuZ2luZS5nYW1lU3RhcnRlZFwiLGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MuY29uc29sZS53cml0ZVwiLHtcImRldGFpbFwiOntcIm1lc3NhZ2VcIjpcIkF2YXRhciBoYXMgbm8gaWQgXCJ9fSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly9wcml2YXRlIGZ1bmN0aW9uXG5cdHZhciB1bmJpbmRFbmdpbmVFdmVudCA9IGZ1bmN0aW9uKCl7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5lbmdpbmUuZ2FtZVN0YXJ0ZWQnKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuY29ubmVjdGVkJyk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmRpc2Nvbm5lY3RlZCcpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5sb2dnb3V0Jyk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmxvZ2dlZCcpIDtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLnVpLmF2YXRhclNlbGVjdGVkJykgO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5hdmF0YXJTZWxlY3Rpb25Db25maXJtZWQnKSA7XG5cdH1cblxuXG5cdHZhciBiaW5kRW5naW5lRXZlbnQgPSBmdW5jdGlvbigpe1xuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuY29ubmVjdGVkJyxmdW5jdGlvbigpIHtcblx0XHRcdC8vZm9yIG5vdyB3ZSByZXN0YXJ0IGxvb3Agd2hlbiBpdCdzIG5lZWRlZFxuXHRcdFx0Ly8gZGVpbW9zLkVuZ2luZS5sb29wLnN0YXJ0KGRlaW1vcy5FbmdpbmUudXBkYXRlLmJpbmQoZGVpbW9zLkVuZ2luZSkpIDtcblx0XHR9KTtcblxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLmVuZ2luZS5nYW1lU3RhcnRlZCcsZGVpbW9zLkVuZ2luZS5zdGFydEdhbWUpO1xuXG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5kaXNjb25uZWN0ZWQnLGRlaW1vcy5FbmdpbmUuc3RvcCk7XG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5sb2dnb3V0JyxkZWltb3MuRW5naW5lLnN0b3ApO1xuXG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5sb2dnZWQnLGRlaW1vcy5FbmdpbmUuaW5pdEdhbWVBcmVhKSA7XG5cblxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLnVpLmF2YXRhclNlbGVjdGVkJyxkZWltb3MuRW5naW5lLm9uQXZhdGFyU2VsZWN0ZWQpIDtcblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmF2YXRhclNlbGVjdGlvbkNvbmZpcm1lZCcsZGVpbW9zLkVuZ2luZS5hdmF0YXJTZWxlY3Rpb25Db25maXJtZWQpIDtcblx0fVxuXG5cblx0Ly9wcml2YXRlIGZ1bmN0aW9uXG5cdHZhciB1bmJpbmRHYW1lRXZlbnRLZXkgPSBmdW5jdGlvbigpe1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UHJlc3NlZC4nK0tleWJvYXJkQ29udHJvbGxlci5rZXlzLkVOVEVSKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVByZXNzZWQuJytLZXlib2FyZENvbnRyb2xsZXIua2V5cy5TUEFDRSk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfTEVGVCk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfUklHSFQpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UHJlc3NlZC4nK0tleWJvYXJkQ29udHJvbGxlci5rZXlzLkFSUk9XX0RPV04pO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UHJlc3NlZC4nK0tleWJvYXJkQ29udHJvbGxlci5rZXlzLkFSUk9XX1VQKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVByZXNzZWQuJytLZXlib2FyZENvbnRyb2xsZXIua2V5cy5YKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVByZXNzZWQuJytLZXlib2FyZENvbnRyb2xsZXIua2V5cy5uMSk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMubjIpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UmVsZWFzZWQuJytLZXlib2FyZENvbnRyb2xsZXIua2V5cy5BUlJPV19MRUZUKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVJlbGVhc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfUklHSFQpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UmVsZWFzZWQuJytLZXlib2FyZENvbnRyb2xsZXIua2V5cy5BUlJPV19ET1dOKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5tb3ZlLmxlZnQnKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5tb3ZlLnJpZ2h0Jyk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIubW92ZS5sZWZ0LnN0b3AnKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5tb3ZlLnJpZ2h0LnN0b3AnKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5qdW1wJyk7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIuc3BlYWsnKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5zcGVhay5zdG9wJyk7XG5cblx0XHQvKipcblx0XHQgKiBGb3IgVGVzdFxuXHRcdCAqL1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MudGVzdC5wb3BpdGVtJyk7XG5cdH1cblxuXG5cdC8vcHJpdmF0ZSBmdW5jdGlvblxuXHR2YXIgYmluZEdhbWVFdmVudEtleSA9IGZ1bmN0aW9uKCl7XG5cdFx0Ly9MRUZUXG5cdFx0S2V5Ym9hcmRDb250cm9sbGVyLmFkZE1hbmFnZWRLZXkoS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuRU5URVIpO1xuXHRcdEtleWJvYXJkQ29udHJvbGxlci5hZGRNYW5hZ2VkS2V5KEtleWJvYXJkQ29udHJvbGxlci5rZXlzLlNQQUNFKTtcblx0XHRLZXlib2FyZENvbnRyb2xsZXIuYWRkTWFuYWdlZEtleShLZXlib2FyZENvbnRyb2xsZXIua2V5cy5BUlJPV19MRUZUKTtcblx0XHRLZXlib2FyZENvbnRyb2xsZXIuYWRkTWFuYWdlZEtleShLZXlib2FyZENvbnRyb2xsZXIua2V5cy5BUlJPV19SSUdIVCk7XG5cdFx0S2V5Ym9hcmRDb250cm9sbGVyLmFkZE1hbmFnZWRLZXkoS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfRE9XTik7XG5cdFx0S2V5Ym9hcmRDb250cm9sbGVyLmFkZE1hbmFnZWRLZXkoS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfVVApO1xuXHRcdEtleWJvYXJkQ29udHJvbGxlci5hZGRNYW5hZ2VkS2V5KEtleWJvYXJkQ29udHJvbGxlci5rZXlzLlgpO1xuXHRcdEtleWJvYXJkQ29udHJvbGxlci5hZGRNYW5hZ2VkS2V5KEtleWJvYXJkQ29udHJvbGxlci5rZXlzLm4xKTtcblx0XHRLZXlib2FyZENvbnRyb2xsZXIuYWRkTWFuYWdlZEtleShLZXlib2FyZENvbnRyb2xsZXIua2V5cy5uMik7XG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuRU5URVIsZnVuY3Rpb24oKXtcblx0XHRcdGlmKGRlaW1vcy5FbmdpbmUuYXZhdGFyLnNwZWFraW5nKSB7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5zcGVhay5zdG9wXCIseydhY3Rpb24nOidzcGVha19zdG9wJ30pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLnNwZWFrXCIseydhY3Rpb24nOidzcGVhayd9KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVByZXNzZWQuJytLZXlib2FyZENvbnRyb2xsZXIua2V5cy5BUlJPV19SSUdIVCxmdW5jdGlvbigpe1xuXHRcdFx0aWYoIWRlaW1vcy5FbmdpbmUuYXZhdGFyLnNwZWFraW5nKSB7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5tb3ZlLnJpZ2h0XCIseydhY3Rpb24nOidtb3ZlX3JpZ2h0J30pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby50b29scy5LZXlib2FyZENvbnRyb2xsZXIua2V5UHJlc3NlZC4nK0tleWJvYXJkQ29udHJvbGxlci5rZXlzLkFSUk9XX0xFRlQsZnVuY3Rpb24oKXtcblx0XHRcdGlmKCFkZWltb3MuRW5naW5lLmF2YXRhci5zcGVha2luZykge1xuXHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIubW92ZS5sZWZ0XCIseydhY3Rpb24nOidtb3ZlX2xlZnQnfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvL25vdGUgOiBldmVudCBpcyBzeW5jaHJvbml6aWRlIG9uIEF2YXRhciBjbGFzcyB3aGVuIHRoZSBlbmdpbmUgcmVhbGx5IGZpbmlzaCB0aGUgbW92ZVxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVJlbGVhc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfUklHSFQsZnVuY3Rpb24oKXtcblx0XHRcdGlmKCFkZWltb3MuRW5naW5lLmF2YXRhci5zcGVha2luZykge1xuXHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIubW92ZS5yaWdodC5zdG9wXCIseydhY3Rpb24nOidtb3ZlX3JpZ2h0X3N0b3AnfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvL25vdGUgOiBldmVudCBpcyBzeW5jaHJvbml6aWRlIG9uIEF2YXRhciBjbGFzcyB3aGVuIHRoZSBlbmdpbmUgcmVhbGx5IGZpbmlzaCB0aGUgbW92ZVxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVJlbGVhc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfTEVGVCxmdW5jdGlvbigpe1xuXHRcdFx0aWYoIWRlaW1vcy5FbmdpbmUuYXZhdGFyLnNwZWFraW5nKSB7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5tb3ZlLmxlZnQuc3RvcFwiLHsnYWN0aW9uJzonbW92ZV9sZWZ0X3N0b3AnfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfRE9XTixmdW5jdGlvbigpe1xuXHRcdFx0aWYoIWRlaW1vcy5FbmdpbmUuYXZhdGFyLnNwZWFraW5nKSB7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5nby5kb3duXCIseydhY3Rpb24nOidnb19kb3duX2FjdGl2ZSd9KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVJlbGVhc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfRE9XTixmdW5jdGlvbigpe1xuXHRcdFx0aWYoIWRlaW1vcy5FbmdpbmUuYXZhdGFyLnNwZWFraW5nKSB7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5nby5kb3duLnN0b3BcIix7J2FjdGlvbic6J2dvX2Rvd25faW5hY3RpdmUnfSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLnRvb2xzLktleWJvYXJkQ29udHJvbGxlci5rZXlQcmVzc2VkLicrS2V5Ym9hcmRDb250cm9sbGVyLmtleXMuQVJST1dfVVAsZnVuY3Rpb24oKXtcblx0XHRcdGlmKCFkZWltb3MuRW5naW5lLmF2YXRhci5zcGVha2luZykge1xuXHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIuanVtcFwiLHsnYWN0aW9uJzonanVtcCd9KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8udG9vbHMuS2V5Ym9hcmRDb250cm9sbGVyLmtleVByZXNzZWQuJytLZXlib2FyZENvbnRyb2xsZXIua2V5cy5TUEFDRSxmdW5jdGlvbigpe1xuXHRcdFx0aWYoIWRlaW1vcy5FbmdpbmUuYXZhdGFyLnNwZWFraW5nKSB7XG5cdFx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLmF0dGFjaygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgS2luZCBvZiBlbnVtIGZvciBkaWZmZXJlbnQgbW9kZXNcblx0ICogXG5cdCAqIERFQlVHIHNob3dzIGEgbG90IG9mIGxvZyBpbiBicm93c2VyXG5cdCAqIFBST0QgcmVtb3ZlIGxvZ3Ncblx0ICpcblx0ICogKi9cblx0ZGVpbW9zLkVuZ2luZS5Nb2RlID0ge1xuXHRcdERFQlVHIDoge3ZhbHVlOiAwLCBuYW1lOidkZWJ1Zyd9LFxuXHRcdFBST0QgOiB7dmFsdWU6IDEsIG5hbWU6J3Byb2QnfVxuXHR9XG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqIEltcG9ydGFudCA6IEFjdHVlbGxlbWVudCBkZXByZWNhdGVkIG1haXMgb24gbGUgZ2FyZGUgc2kgYmVzb2luIGVuIHJldG8gY29tcGF0XG4gKiBcbiAqIG9yZy5kYnl6ZXJvLmRlaW1vcy5yZW5kZXIuQW5pbWF0aW9uIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA4LzEwXG4gKiBAZGVzY3JpcHRpb24gOiBBbmltYXRpb24gbW9kZWxcbiAqXG4gKiAqL1xuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXG5cdGRlaW1vcy5yZW5kZXIgPSBkZWltb3MucmVuZGVyIHx8IHt9IDtcblxuXHQvKipcblx0ICogQW5pbWF0aW9uIGNvbnN0cnVjdG9yXG5cdCAqIFxuXHQgKiBAcGFyYW0gc3ByaXRlc2hlZXQgc3RyaW5nIG9mIHRoZSBhbmltYXRpb24gc3ByaXRlc2hlZXQgbGlua1xuXHQgKiBAcGFyYW0gc3BlZWQgaW50ZWdlciBkZWxheSBiZXR3ZWVuIGVhY2ggYW5pbWF0aW9uIGluIG1zXG5cdCAqXG5cdCAqICovXG5cdGRlaW1vcy5yZW5kZXIuQW5pbWF0aW9uID0ge31cblxuXHRkZWltb3MucmVuZGVyLkFuaW1hdGlvbi5UeXBlID0ge1xuXHRcdFdBTEtfUklHSFQgOiB7dmFsdWU6IDAsIHR5cGU6J3dhbGsnLCBkaXJlY3Rpb246J3JpZ2h0J30sXG5cdFx0V0FMS19MRUZUIDoge3ZhbHVlOiAxLCB0eXBlOid3YWxrJywgZGlyZWN0aW9uOidsZWZ0J30sXG5cblx0XHRKVU1QX1JJR0hUIDoge3ZhbHVlOiAyLCB0eXBlOidqdW1wJywgZGlyZWN0aW9uOidyaWdodCd9LFxuXHRcdEpVTVBfTEVGVCA6IHt2YWx1ZTogMywgdHlwZTonanVtcCcsIGRpcmVjdGlvbjonbGVmdCd9LFxuXHRcdFxuXHRcdFNFRV9SSUdIVCA6IHt2YWx1ZTogNCwgdHlwZTonc2VlJywgZGlyZWN0aW9uOidyaWdodCd9LFxuXHRcdFNFRV9MRUZUIDoge3ZhbHVlOiA1LCB0eXBlOidzZWUnLCBkaXJlY3Rpb246J2xlZnQnfSxcblx0XHRcblx0XHRGTFlfUklHSFQgOiB7dmFsdWU6IDYsIHR5cGU6J2ZseScsIGRpcmVjdGlvbjoncmlnaHQnfSxcblx0XHRGTFlfTEVGVCA6IHt2YWx1ZTogNywgdHlwZTonZmx5JywgZGlyZWN0aW9uOidsZWZ0J30sXG5cdH1cblxuXHRkZWltb3MucmVuZGVyLkFuaW1hdGlvbi5mYWN0b3J5ID0gZnVuY3Rpb24odHlwZSwgZGlyZWN0aW9uLCB2YWx1ZSkge1xuXHRcdHZhciBhbmltID0gbnVsbDtcblx0XHRmb3IodmFyIGsgaW4gYW5pbWF0aW9uKSB7XG5cdFx0XHRhbmltID0gYW5pbWF0aW9uW2tdO1xuXHRcdFx0aWYoYW5pbS52YWx1ZSA9PT0gdmFsdWUpIHJldHVybiBhbmltO1xuXHRcdFx0aWYoYW5pbS5kaXJlY3Rpb24gPT09IGRpcmVjdGlvbiAmJiBhbmltLnR5cGUgPT09IHR5cGUpIHJldHVybiBhbmltO1xuXHRcdH1cblx0XHR0aHJvdyBuZXcgRXhlY3B0aW9uKFwiQW5pbWF0aW9uIG5vdCBmaW5kLCBhcmdzOlwiK0FycmF5LnNsaWNlKGFyZ3VtZW50cykuam9pbignLCcpKTtcblx0fVxuXG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBvcmcuZGJ5emVyby5kZWltb3MucmVuZGVyLlVJIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA4LzA0XG4gKiBAZGVzY3JpcHRpb24gOiBVSSB0byBzaG93IHRoaW5ncyAhXG4gKlxuICogKi9cblxuKGZ1bmN0aW9uKGRlaW1vcyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblxuXHR2YXIgRXZlbnRNYW5hZ2VyID0gb3JnLmRieXplcm8udG9vbHMuRXZlbnRNYW5hZ2VyO1xuXG5cdGRlaW1vcy5yZW5kZXIgPSBkZWltb3MucmVuZGVyIHx8IHt9IDtcblxuXHRkZWltb3MucmVuZGVyLlVJID0gZnVuY3Rpb24oKXtcblxuXHRcdC8vSFRNTFxuXHRcdHZhciBnYW1lUG9wdXBIVE1MID0gJycrXG5cdFx0JzxzZWN0aW9uIGlkPVwib3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5tYWluXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiNlYmQzYWQ7d2lkdGg6MjAwcHg7cG9zaXRpb246Zml4ZWQ7dG9wOjBweDtsZWZ0OjBweDtib3JkZXI6MXB4IHNvbGlkICM5ZTYxMTE7Ym9yZGVyLXJhZGl1czo1cHg7ei1pbmRleDoxMDAwMDAwO2N1cnNvcjpwb2ludGVyXCI+Jytcblx0XHRcdCc8aGVhZGVyIHN0eWxlPVwid2lkdGg6MTk0cHg7YmFja2dyb3VuZC1jb2xvcjojZmVlODk1O2hlaWdodDoyMHB4O2ZvbnQtZmFtaWx5OkFyaWFsO3BhZGRpbmc6M3B4O2ZvbnQtc2l6ZToxNXB4O2JvcmRlci1yYWRpdXM6NXB4XCI+Jytcblx0XHRcdFx0J0RlaW1vcycrXG5cdFx0XHRcdCc8ZGl2IGlkPVwib3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5tZXNzYWdlXCIgc3R5bGU9XCJ0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgMC4yNXMsIGJvcmRlciAwLjI1cztmbG9hdDpyaWdodDtiYWNrZ3JvdW5kLWNvbG9yOiNlYmQzYWQ7d2lkdGg6MTNweDtoZWlnaHQ6IDE4cHg7Ym9yZGVyLXJpZ2h0OiA1cHggI0FGOUQ3RiBzb2xpZDtjdXJzb3I6cG9pbnRlclwiPjwvZGl2PicrXG5cdFx0XHQnPC9oZWFkZXI+Jytcblx0XHRcdCc8c2VjdGlvbiBpZD1cIm9yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAuc2VjdGlvbkNob29zZUF2YXRhclwiPicrXG5cdFx0XHRcdCc8c2VsZWN0IGlkPVwib3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5hdmF0YXJMaXN0XCIgbmFtZT1cImNob29zZV9hdmF0YXJcIiBzdHlsZT1cImJvcmRlcjoxcHggc29saWQgIzMzMztiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7bWFyZ2luOjhweCAwIDhweCA1cHg7d2lkdGg6MTA1cHhcIiBzaXplPVwiNVwiPjwvc2VsZWN0PicrXG5cdFx0XHRcdCc8aW5wdXQgaWQ9XCJvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLmZvcm1DaG9vc2VBdmF0YXJcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJDaG9vc2VcIiBzdHlsZT1cImJvcmRlcjoxcHggc29saWQgIzMzMztiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7bWFyZ2luOjB4OyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogNTVweDsgcmlnaHQ6IDRweDtcIj4gJytcblx0XHRcdCc8L3NlY3Rpb24+Jytcblx0XHRcdCc8Zm9vdGVyIHN0eWxlPVwid2lkdGg6MTk0cHg7YmFja2dyb3VuZC1jb2xvcjojRkZGQUVEO2hlaWdodDoyMHB4O2ZvbnQtZmFtaWx5OkFyaWFsO3BhZGRpbmc6M3B4O2ZvbnQtc2l6ZToxMHB4O2JvcmRlci1yYWRpdXM6NXB4O21hcmdpbi1ib3R0b206MHB4O1wiPicrXG5cdFx0XHRcdCc8c3Bhbj5GUFMgOiA8c3BhbiBpZD1cIm9yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAuaW5kaWNhdG9yRnBzXCI+bi9hPC9zcGFuPjwvc3Bhbj4gfCAnK1xuXHRcdFx0XHQnPHNwYW4+TEFHIDogPHNwYW4gaWQ9XCJvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLmluZGljYXRvckxhZ1wiPm4vYTwvc3Bhbj48L3NwYW4+Jytcblx0XHRcdCc8L2Zvb3Rlcj4nK1xuXHRcdCc8L3NlY3Rpb24+JztcblxuXHRcdHZhciBwb3B1cENvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRwb3B1cENvbnRhaW5lckVsZW1lbnQuaW5uZXJIVE1MID0gZ2FtZVBvcHVwSFRNTDtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBvcHVwQ29udGFpbmVyRWxlbWVudCk7XG5cblx0XHR2YXIgbWVzc2FnZUFyZWFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblx0XHRtZXNzYWdlQXJlYUVsZW1lbnQuaWQgPSAnb3JnLmRieXplcm8uZGVpbW9zLm1lc3NhZ2VBcmVhJztcblx0XHRtZXNzYWdlQXJlYUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyNTUsIDIzOSwgMjE5KSc7XG5cdFx0bWVzc2FnZUFyZWFFbGVtZW50LnN0eWxlLndpZHRoID0gJzBweCc7XG5cdFx0bWVzc2FnZUFyZWFFbGVtZW50LnN0eWxlLmhlaWdodCA9ICc5OCUnO1xuXHRcdG1lc3NhZ2VBcmVhRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG5cdFx0bWVzc2FnZUFyZWFFbGVtZW50LnN0eWxlLnRvcCA9ICcwcHgnO1xuXHRcdG1lc3NhZ2VBcmVhRWxlbWVudC5zdHlsZS5yaWdodCA9ICcwcHgnO1xuXHRcdG1lc3NhZ2VBcmVhRWxlbWVudC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICNjY2MnO1xuXHRcdG1lc3NhZ2VBcmVhRWxlbWVudC5zdHlsZS56SW5kZXggPSAnMTAwMDAwMCc7XG5cdFx0bWVzc2FnZUFyZWFFbGVtZW50LnN0eWxlLmZvbnRGYW1pbHkgPSAnbW9ub3NwYWNlJztcblx0XHRtZXNzYWdlQXJlYUVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAnMTBweCc7XG5cdFx0bWVzc2FnZUFyZWFFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2F1dG8nO1xuXHRcdG1lc3NhZ2VBcmVhRWxlbWVudC5zdHlsZS5vdmVyZmxvd1ggPSAnaGlkZGVuJztcblx0XHRtZXNzYWdlQXJlYUVsZW1lbnQuc3R5bGUubGlzdFN0eWxlID0gJ25vbmUnO1xuXHRcdG1lc3NhZ2VBcmVhRWxlbWVudC5zdHlsZS5tYXJnaW4gPSAnMCc7XG5cdFx0bWVzc2FnZUFyZWFFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnNXB4IDVweCAwIDVweCc7XG5cdFx0bWVzc2FnZUFyZWFFbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnd2lkdGggMC41cyBsaW5lYXInO1xuXHRcdG1lc3NhZ2VBcmVhRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVzc2FnZUFyZWFFbGVtZW50KTtcblxuXHRcdC8vRVZFTlRTXG5cdFx0dmFyIHBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLm1haW5cIik7XG5cdFx0dmFyIGRyYWdFbmFibGUgPSBmYWxzZTtcblx0XHR2YXIgb2xkWCA9IG51bGw7XG5cdFx0dmFyIG9sZFkgPSBudWxsO1xuXHRcdHBvcHVwLm9ubW91c2Vkb3duID0gZnVuY3Rpb24oZSl7XG5cdFx0XHRkcmFnRW5hYmxlID0gdHJ1ZTtcblx0XHRcdG9sZFggPSBlLng7XG5cdFx0XHRvbGRZID0gZS55O1xuXHRcdH07XG5cdFx0ZG9jdW1lbnQub25tb3VzZXVwID0gZnVuY3Rpb24oZSl7XG5cdFx0XHRkcmFnRW5hYmxlID0gZmFsc2U7XG5cdFx0XHRvbGRYID0gbnVsbDtcblx0XHRcdG9sZFkgPSBudWxsO1xuXHRcdH07XG5cdFx0ZG9jdW1lbnQub25tb3VzZW1vdmUgPSBmdW5jdGlvbihlKXtcblx0XHRcdGlmKGRyYWdFbmFibGUpIHtcblx0XHRcdFx0cG9wdXAuc3R5bGUudG9wID0gcGFyc2VJbnQocG9wdXAuc3R5bGUudG9wLnNsaWNlKDAsLTIpKSArIChlLnkgLSBvbGRZKSArXCJweFwiO1xuXHRcdFx0XHRwb3B1cC5zdHlsZS5sZWZ0ID0gcGFyc2VJbnQocG9wdXAuc3R5bGUubGVmdC5zbGljZSgwLC0yKSkgKyAoZS54IC0gb2xkWCkgK1wicHhcIjtcblx0XHRcdFx0b2xkWCA9IGUueDtcblx0XHRcdFx0b2xkWSA9IGUueTtcblx0XHRcdH1cblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5tZXNzYWdlXCIpLm9uY2xpY2sgPSBmdW5jdGlvbihlKXtcblx0XHRcdGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JnLmRieXplcm8uZGVpbW9zLm1lc3NhZ2VBcmVhXCIpLnN0eWxlLndpZHRoID09PSBcIjE5MHB4XCIpIHtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmcuZGJ5emVyby5kZWltb3MubWVzc2FnZUFyZWFcIikuc3R5bGUud2lkdGggPSBcIjBweFwiO1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmcuZGJ5emVyby5kZWltb3MubWVzc2FnZUFyZWFcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCw1MDApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcmcuZGJ5emVyby5kZWltb3MubWVzc2FnZUFyZWFcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3JnLmRieXplcm8uZGVpbW9zLm1lc3NhZ2VBcmVhXCIpLnN0eWxlLndpZHRoID0gXCIxOTBweFwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCwwKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dGhpcy5iaW5kKCk7XG5cdFx0dGhpcy5tYXhDb25zb2xlUm93ID0gMTAwIDtcblx0fVxuXG5cdGRlaW1vcy5yZW5kZXIuVUkucHJvdG90eXBlID0ge1xuXHRcdGJpbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MuY29uc29sZS53cml0ZScsdGhpcy5hZGRtZXNzYWdlLmJpbmQodGhpcykpIDtcblx0XHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLmNvbnNvbGUud3JpdGVFcnJvcicsdGhpcy5hZGRtZXNzYWdlRXJyb3IuYmluZCh0aGlzKSkgO1xuXHRcdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5sb2dnZWQnLHRoaXMub25Mb2dnZWQuYmluZCh0aGlzKSkgO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAuZm9ybUNob29zZUF2YXRhcicpLm9uY2xpY2sgPSB0aGlzLm9uQXZhdGFyQ2hvb3NlZC5iaW5kKHRoaXMpIDtcblx0XHR9LFxuXG5cdFx0dW5iaW5kIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5jb25zb2xlLndyaXRlJyk7XG5cdFx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLmNvbnNvbGUud3JpdGVFcnJvcicpO1xuXHRcdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmF2YXRhcl9zZWxlY3RlZCcpO1xuXHRcdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmxvZ2dlZCcpO1xuXHRcdFx0Ly8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVpbW9zLkNvbmZpZy51aS5kaXNjb25uZWN0RG9tSWQpLm9uY2xpY2sgPSBudWxsIDtcblx0XHR9LFxuXG5cdFx0Ly9hZGQgYSBtZXNzYWdlIHRvIHVpIGxvZ1xuXHRcdGFkZG1lc3NhZ2UgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgbXNnWm9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRlaW1vcy5Db25maWcudWkuY2hhdERvbUlkKSA7XG5cblx0XHRcdHZhciBkb21fZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRcdGRvbV9lbGVtLmlubmVyVGV4dCA9IGUuZGV0YWlsLm1lc3NhZ2UgO1xuXHRcdFx0XHRtc2dab25lLmFwcGVuZENoaWxkKGRvbV9lbGVtKSA7XG5cdFx0XHR0aGlzLmNyb3BDb25zb2xlUm93KHRoaXMubWF4Q29uc29sZVJvdykgO1xuXHRcdH0sXG5cblx0XHQvL2FkZCBlcnJvciBtZXNzYWdlIG9uIHVpXG5cdFx0YWRkbWVzc2FnZUVycm9yIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIG1zZ1pvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWltb3MuQ29uZmlnLnVpLmNoYXREb21JZCkgO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAubWVzc2FnZScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnIDtcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLm1lc3NhZ2UnKS5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZWQnIDtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAubWVzc2FnZScpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZWJkM2FkJyA7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmcuZGJ5emVyby5kZWltb3MuZ2FtZVBvcHVwLm1lc3NhZ2UnKS5zdHlsZS5ib3JkZXJDb2xvciA9ICcjQUY5RDdGJyA7XG5cdFx0XHR9LDI1MCk7XG5cblx0XHRcdHZhciBkb21fZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRcdGRvbV9lbGVtLmNsYXNzTmFtZSA9ICdlcnJvcicgO1xuXHRcdFx0ZG9tX2VsZW0uaW5uZXJUZXh0ID0gZS5kZXRhaWwubWVzc2FnZSA7XG5cdFx0XHRcdG1zZ1pvbmUuYXBwZW5kQ2hpbGQoZG9tX2VsZW0pIDtcblx0XHRcdHRoaXMuY3JvcENvbnNvbGVSb3codGhpcy5tYXhDb25zb2xlUm93KSA7XG5cdFx0fSxcblxuXHRcdC8vY2xlYXIgd2hhdCBJIGNhbm5vdCBzZWVcblx0XHRjcm9wQ29uc29sZVJvdyA6IGZ1bmN0aW9uKG1heCkge1xuXHRcdFx0dmFyIG1zZ1pvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWltb3MuQ29uZmlnLnVpLmNoYXREb21JZCkgO1xuXHRcdFx0d2hpbGUobXNnWm9uZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGknKS5sZW5ndGggPiBtYXgpIHtcblx0XHRcdFx0bXNnWm9uZS5jaGlsZE5vZGVzWzBdLnJlbW92ZSgpO1xuXHRcdFx0fVxuXHRcdFx0bXNnWm9uZS5zY3JvbGxUb3AgPSBtc2dab25lLnNjcm9sbEhlaWdodDtcblx0XHR9LFxuXG5cdFx0dXBkYXRlTGFnIDogZnVuY3Rpb24obGFnKSB7XG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkZWltb3MuQ29uZmlnLnVpLmluZGljYXRpb24ubGFnKS5pbm5lckhUTUwgPSBsYWcrJ21zJztcblx0XHR9LFxuXG5cdFx0dXBkYXRlRlBTIDogZnVuY3Rpb24oZnBzKSB7XG5cdFx0XHR2YXIgbmJySW50ZWdyYXRlID0gNTA7XG5cdFx0XHRkZWltb3MuRW5naW5lLnBhc3RGUFMudW5zaGlmdChmcHMpO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5wYXN0RlBTLmxlbmd0aCA9IE1hdGgubWluKGRlaW1vcy5FbmdpbmUucGFzdEZQUy5sZW5ndGgsbmJySW50ZWdyYXRlKTtcblx0XHRcdHZhciBpbnRlcnBvbGF0ZWRGUFMgPSBwYXJzZUludChkZWltb3MuRW5naW5lLnBhc3RGUFMucmVkdWNlKGZ1bmN0aW9uKHAsYyl7cmV0dXJuIHArYzt9KS9uYnJJbnRlZ3JhdGUpO1xuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVpbW9zLkNvbmZpZy51aS5pbmRpY2F0aW9uLmZwcykuaW5uZXJIVE1MID0gaW50ZXJwb2xhdGVkRlBTO1xuXHRcdH0sXG5cblx0XHQvL3Nob3cgbGlzdCBvZiBhdmF0YXJcblx0XHRvbkxvZ2dlZDogZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblxuXHRcdFx0Ly9hZGRpbmcgYXZhdGFyIGNob2ljZVxuXHRcdFx0dmFyIGkgPSAwIDtcblx0XHRcdHZhciBhdmF0YXJzID0gZVtfdC5NRVNTQUdFXVtfdC5BVkFUQVJTXTtcblx0XHRcdGZvcihhdmF0YXIgaW4gYXZhdGFycykge1xuXHRcdFx0XHR2YXIgb3B0aW9uID0gbmV3IE9wdGlvbihhdmF0YXJzW2F2YXRhcl1bX3QuTkFNRV0sYXZhdGFyc1thdmF0YXJdW190LklEXSk7O1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JnLmRieXplcm8uZGVpbW9zLmdhbWVQb3B1cC5hdmF0YXJMaXN0JykuYXBwZW5kQ2hpbGQob3B0aW9uKSA7XG5cdFx0XHRcdGkrKztcblx0XHRcdH1cblxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAuYXZhdGFyTGlzdCcpLnNlbGVjdGVkSW5kZXggPSAwO1xuXHRcdFx0Ly8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGVpbW9zLkNvbmZpZy51aS5jaG9vc2VBdmF0YXIuc2VjdGlvbkRvbUlkKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJyA7XG5cdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5jb25zb2xlLndyaXRlXCIse1wiZGV0YWlsXCI6e1wibWVzc2FnZVwiOlwiQXV0aGVudGljYXRlZCB0byB0aGUgc2VydmVyXCJ9fSk7XG5cdFx0fSxcblxuXHRcdG9uQXZhdGFyQ2hvb3NlZCA6IGZ1bmN0aW9uKGV2ZW50KXtcblx0XHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0XHR2YXIgYXZhdGFyID0gbnVsbDtcblx0XHRcdFxuXHRcdFx0dmFyIGxpc3RfYXZhdGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yZy5kYnl6ZXJvLmRlaW1vcy5nYW1lUG9wdXAuYXZhdGFyTGlzdCcpO1xuXHRcdFx0aWYoISFsaXN0X2F2YXRhci5vcHRpb25zW2xpc3RfYXZhdGFyLnNlbGVjdGVkSW5kZXhdKSB7XG5cdFx0XHRcdGF2YXRhciA9IGxpc3RfYXZhdGFyLm9wdGlvbnNbbGlzdF9hdmF0YXIuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCEhYXZhdGFyKSB7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLnVpLmF2YXRhclNlbGVjdGVkXCIsYXZhdGFyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmNvbnNvbGUud3JpdGVcIix7XCJkZXRhaWxcIjp7XCJtZXNzYWdlXCI6XCJVbmtub3cgYXZhdGFyXCJ9fSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0fVxufSkob3JnLmRieXplcm8uZGVpbW9zLCBkb2N1bWVudCk7IiwiLyoqXG4gKlxuICogb3JnLmRieXplcm8uZGVpbW9zLnJlbmRlci5TY2VuZSBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxMy8wOC8wOVxuICogQGRlc2NyaXB0aW9uIDogU2NlbmUgd2hlcmUgYWN0aW9uIGFwcGVuZHMgIVxuICpcbiAqKi9cblxudmFyIG9yZyA9IG9yZyB8fCB7fSA7XG5vcmcuZGJ5emVybyA9IG9yZy5kYnl6ZXJvIHx8IHt9IDtcblxuKGZ1bmN0aW9uKGRlaW1vcywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXHR2YXIgVmVjdG9yID0gb3JnLmRieXplcm8udG9vbHMuVmVjdG9yO1xuXHR2YXIgRXZlbnRNYW5hZ2VyID0gb3JnLmRieXplcm8udG9vbHMuRXZlbnRNYW5hZ2VyO1xuXG5cdGRlaW1vcy5yZW5kZXIgPSBvcmcuZGJ5emVyby5kZWltb3MucmVuZGVyIHx8IHt9IDtcblxuXHRkZWltb3MucmVuZGVyLlNjZW5lID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5pdGVtc1x0XHRcdD0ge307XG5cdFx0dGhpcy5hdmF0YXJzXHRcdD0ge307XG5cdFx0dGhpcy5wcm9qZWN0aWxlc1x0PSB7fTtcblx0XHR0aGlzLmF0dGFja1pvbmVzXHQ9IHt9O1xuXHRcdHRoaXMubW9uc3RlcnNcdFx0PSB7fTtcblx0XHR0aGlzLmRhdGFUb1BhcnNlXHQ9IHt9O1xuXHRcdHRoaXMuYWRkTGlzdGVuZXIoKTtcblx0fVxuXG5cdGRlaW1vcy5yZW5kZXIuU2NlbmUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblxuXHRcdC8vY2xlYW4gYXZhdGFyc1xuXHRcdGZvcih2YXIgYXZfaWQgaW4gZGVpbW9zLkVuZ2luZS5zY2VuZS5hdmF0YXJzKSB7XG5cdFx0XHR0aGlzLmF2YXRhcnNbYXZfaWRdLmRlc3Ryb3koKTtcblx0XHR9XG5cblx0XHQvL2NsZWFuIGl0ZW1zXG5cdFx0Zm9yKHZhciBpdGVtX2lkIGluIGRlaW1vcy5FbmdpbmUuc2NlbmUuaXRlbXMpIHtcblx0XHRcdHRoaXMuaXRlbXNbaXRlbV9pZF0uY2xlYW5Eb20oKTtcblx0XHRcdGRlbGV0ZSB0aGlzLml0ZW1zW2l0ZW1faWRdO1xuXHRcdH1cblxuXHRcdC8vY2xlYW4gaXRlbXNcblx0XHRmb3IodmFyIG1vbnN0ZXJfaWQgaW4gdGhpcy5tb25zdGVycykge1xuXHRcdFx0dGhpcy5tb25zdGVyc1ttb25zdGVyX2lkXS5jbGVhbkRvbSgpO1xuXHRcdFx0ZGVsZXRlIHRoaXMubW9uc3RlcnNbbW9uc3Rlcl9pZF07XG5cdFx0fVxuXG5cdFx0Ly9jbGVhbiBpdGVtc1xuXHRcdGZvcih2YXIgcHJvamVjdGlsZV9pZCBpbiB0aGlzLnByb2plY3RpbGVzKSB7XG5cdFx0XHR0aGlzLnByb2plY3RpbGVzW3Byb2plY3RpbGVfaWRdLmNsZWFuRG9tKCk7XG5cdFx0XHRkZWxldGUgdGhpcy5wcm9qZWN0aWxlc1twcm9qZWN0aWxlX2lkXTtcblx0XHR9XG5cblx0XHR0aGlzLnJlbW92ZUxpc3RlbmVyKCk7XG5cdH1cblxuXHRkZWltb3MucmVuZGVyLlNjZW5lLnByb3RvdHlwZS5wYXJzZURhdGEgPSBmdW5jdGlvbihkYXRhKSB7XG5cdFx0aWYoIWRlaW1vcy5FbmdpbmUucnVubmluZykgcmV0dXJuIGZhbHNlO1xuXHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cblx0XHQvKipcblx0XHQgKiBBVkFUQVJTIFxuXHRcdCAqL1xuXHRcdC8vc3luYyBhdmF0YXJzXG5cdFx0dmFyIGF2YXRhclVwZGF0ZWQgPSBbXTtcblx0XHR2YXIgYXZhdGFycyA9IGRhdGFbX3QuTUVTU0FHRV1bX3QuQVZBVEFSU107XG5cdFx0Zm9yKHZhciBrIGluIGF2YXRhcnMpIHtcblx0XHRcdGlmKHRoaXMuc3luY0F2YXRhcihhdmF0YXJzW2tdKSkge1xuXHRcdFx0XHRhdmF0YXJVcGRhdGVkLnB1c2gocGFyc2VJbnQoYXZhdGFyc1trXVtfdFsnTUVTU0FHRV9FTEVNRU5UX0lEJ11dKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly9jbGVhbiBhdmF0YXJcblx0XHRmb3IodmFyIGkgaW4gZGVpbW9zLkVuZ2luZS5zY2VuZS5hdmF0YXJzKSB7XG5cdFx0XHR2YXIgYXZfaWQgPSBkZWltb3MuRW5naW5lLnNjZW5lLmF2YXRhcnNbaV0uc2VydmVyaWQ7XG5cdFx0XHRpZihhdmF0YXJVcGRhdGVkLmluZGV4T2YoYXZfaWQpID09PSAtMSkge1xuXHRcdFx0XHR0aGlzLmF2YXRhcnNbYXZfaWRdLmRlc3Ryb3koKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBJVEVNUyBcblx0XHQgKi9cblx0XHQvL3N5bmMgaXRlbXNcblx0XHR2YXIgaXRlbXMgPSBkYXRhW190Lk1FU1NBR0VdW190LklURU1TXTtcblx0XHR2YXIgaXRlbVVwZGF0ZWQgPSBbXTtcblx0XHRmb3IodmFyIGlkIGluIGl0ZW1zKSB7XG5cdFx0XHR0aGlzLnN5bmNJdGVtKGl0ZW1zW2lkXSk7XG5cdFx0XHRpdGVtVXBkYXRlZC5wdXNoKGlkKTtcblx0XHR9XG5cblx0XHQvL2NsZWFuIGl0ZW1zXG5cdFx0Zm9yKHZhciBpdGVtX2lkIGluIGRlaW1vcy5FbmdpbmUuc2NlbmUuaXRlbXMpIHtcblx0XHRcdGlmKGl0ZW1VcGRhdGVkLmluZGV4T2YoaXRlbV9pZCkgPT09IC0xKSB7XG5cdFx0XHRcdHRoaXMuaXRlbXNbaXRlbV9pZF0uY2xlYW5Eb20oKTtcblx0XHRcdFx0ZGVsZXRlIHRoaXMuaXRlbXNbaXRlbV9pZF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogTU9OU1RFUlMgXG5cdFx0ICovXG5cdFx0Ly9zeW5jIGl0ZW1zXG5cdFx0dmFyIG1vbnN0ZXJzID0gZGF0YVtfdC5NRVNTQUdFXVtfdC5NT05TVEVSU107XG5cdFx0dmFyIG1vbnN0ZXJVcGRhdGVkID0gW107XG5cdFx0Zm9yKHZhciBpZCBpbiBtb25zdGVycykge1xuXHRcdFx0dGhpcy5zeW5jTW9uc3Rlcihtb25zdGVyc1tpZF0pO1xuXHRcdFx0bW9uc3RlclVwZGF0ZWQucHVzaChpZCk7XG5cdFx0fVxuXG5cdFx0Ly9jbGVhbiBpdGVtc1xuXHRcdGZvcih2YXIgbW9uc3Rlcl9pZCBpbiB0aGlzLm1vbnN0ZXJzKSB7XG5cdFx0XHRpZihtb25zdGVyVXBkYXRlZC5pbmRleE9mKG1vbnN0ZXJfaWQpID09PSAtMSkge1xuXHRcdFx0XHR0aGlzLm1vbnN0ZXJzW21vbnN0ZXJfaWRdLmNsZWFuRG9tKCk7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLm1vbnN0ZXJzW21vbnN0ZXJfaWRdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFBST0pFQ1RJTEVTIFxuXHRcdCAqL1xuXHRcdC8vc3luYyBpdGVtc1xuXHRcdHZhciBwcm9qZWN0aWxlcyA9IGRhdGFbX3QuTUVTU0FHRV1bX3QuUFJPSkVDVElMRVNdO1xuXHRcdHZhciBwcm9qZWN0aWxlVXBkYXRlZCA9IFtdO1xuXHRcdGZvcih2YXIgaWQgaW4gcHJvamVjdGlsZXMpIHtcblx0XHRcdHRoaXMuc3luY1Byb2plY3RpbGUocHJvamVjdGlsZXNbaWRdKTtcblx0XHRcdHByb2plY3RpbGVVcGRhdGVkLnB1c2goaWQpO1xuXHRcdH1cblxuXHRcdC8vY2xlYW4gaXRlbXNcblx0XHRmb3IodmFyIHByb2plY3RpbGVfaWQgaW4gdGhpcy5wcm9qZWN0aWxlcykge1xuXHRcdFx0aWYocHJvamVjdGlsZVVwZGF0ZWQuaW5kZXhPZihwcm9qZWN0aWxlX2lkKSA9PT0gLTEpIHtcblx0XHRcdFx0dGhpcy5wcm9qZWN0aWxlc1twcm9qZWN0aWxlX2lkXS5jbGVhbkRvbSgpO1xuXHRcdFx0XHRkZWxldGUgdGhpcy5wcm9qZWN0aWxlc1twcm9qZWN0aWxlX2lkXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdC8vQHJldHVybiB0b3RhbCBwZXJpb2RlIGludGVncmF0ZWRcblx0ZGVpbW9zLnJlbmRlci5TY2VuZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZHQsbm93KSB7XG5cdFx0aWYoISF0aGlzLmRhdGFUb1BhcnNlKSB7XG5cdFx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdFx0dmFyIGRhdGEgPSB7fTtcblx0XHRcdGRhdGFbX3RbJ01FU1NBR0UnXV0gPSB0aGlzLmRhdGFUb1BhcnNlO1xuXHRcdFx0dGhpcy5wYXJzZURhdGEoZGF0YSk7XG5cdFx0XHR0aGlzLmRhdGFUb1BhcnNlID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGRlaW1vcy5FbmdpbmUudWkudXBkYXRlRlBTKHBhcnNlSW50KDEwMDAvZHQpKTtcblxuXHRcdC8vdXBkYXRlXG5cdFx0dmFyIGtleXMsaSxhdmF0YXIsbW9uc3Rlcjtcblx0XHRrZXlzID0gT2JqZWN0LmtleXModGhpcy5pdGVtcyk7XG5cdFx0Zm9yKGk9MDtpPGtleXMubGVuZ3RoO2krKykge1xuXHRcdFx0dGhpcy5pdGVtc1trZXlzW2ldXS51cGRhdGUoZHQsbm93KTtcblx0XHR9XG5cdFx0a2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuYXZhdGFycyk7XG5cdFx0Zm9yKGk9MDtpPGtleXMubGVuZ3RoO2krKykge1xuXHRcdFx0dGhpcy5hdmF0YXJzW2tleXNbaV1dLnVwZGF0ZShkdCxub3cpO1xuXHRcdH1cblx0XHRrZXlzID0gT2JqZWN0LmtleXModGhpcy5wcm9qZWN0aWxlcyk7XG5cdFx0Zm9yKGk9MDtpPGtleXMubGVuZ3RoO2krKykge1xuXHRcdFx0dGhpcy5wcm9qZWN0aWxlc1trZXlzW2ldXS51cGRhdGUoZHQsbm93KTtcblx0XHR9XG5cdFx0a2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubW9uc3RlcnMpO1xuXHRcdGZvcihpPTA7aTxrZXlzLmxlbmd0aDtpKyspIHtcblx0XHRcdHRoaXMubW9uc3RlcnNba2V5c1tpXV0udXBkYXRlKGR0LG5vdyk7XG5cdFx0fVxuXHRcdGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmF0dGFja1pvbmVzKTtcblx0XHRmb3IoaT0wO2k8a2V5cy5sZW5ndGg7aSsrKSB7XG5cdFx0XHRpZih0aGlzLmF0dGFja1pvbmVzW2tleXNbaV1dLnVwZGF0ZShkdCxub3cpID09IGZhbHNlKXtcblx0XHRcdFx0dGhpcy5hdHRhY2tab25lc1trZXlzW2ldXS5kZXN0cm95KCk7XG5cdFx0XHRcdGRlbGV0ZSB0aGlzLmF0dGFja1pvbmVzW2tleXNbaV1dO1xuXHRcdFx0fTtcblx0XHR9XG5cdFx0aWYoZGVpbW9zLkVuZ2luZS5hdmF0YXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIudXBkYXRlKGR0LG5vdykgO1xuXHRcdH1cblxuXHRcdC8vbW92ZSBhbmQgcmVuZGVyIGVudGl0aWVzICFcblx0XHRrZXlzID0gT2JqZWN0LmtleXModGhpcy5hdmF0YXJzKTtcblx0XHRmb3IoaT0wO2k8a2V5cy5sZW5ndGg7aSsrKSB7XG5cdFx0XHRhdmF0YXIgPSB0aGlzLmF2YXRhcnNba2V5c1tpXV07XG5cdFx0XHRhdmF0YXIubW92ZSgpO1xuXHRcdFx0YXZhdGFyLnVwZGF0ZUFuaW1hdGlvbigpO1xuXHRcdH1cblx0XHQvL21vdmUgYW5kIHJlbmRlciBwcm9qZWN0aWxlcyAhXG5cdFx0a2V5cyA9IE9iamVjdC5rZXlzKHRoaXMucHJvamVjdGlsZXMpO1xuXHRcdGZvcihpPTA7aTxrZXlzLmxlbmd0aDtpKyspIHtcblx0XHRcdHRoaXMucHJvamVjdGlsZXNba2V5c1tpXV0ubW92ZSgpO1xuXHRcdH1cblx0XHQvL21vdmUgYW5kIHJlbmRlciBlbnRpdGllcyAhXG5cdFx0a2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuaXRlbXMpO1xuXHRcdGZvcihpPTA7aTxrZXlzLmxlbmd0aDtpKyspIHtcblx0XHRcdHRoaXMuaXRlbXNba2V5c1tpXV0ubW92ZSgpO1xuXHRcdH1cblx0XHQvL21vdmUgYW5kIHJlbmRlciBtb25zdGVycyAhXG5cdFx0a2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubW9uc3RlcnMpO1xuXHRcdGZvcihpPTA7aTxrZXlzLmxlbmd0aDtpKyspIHtcblx0XHRcdG1vbnN0ZXIgPSB0aGlzLm1vbnN0ZXJzW2tleXNbaV1dO1xuXHRcdFx0bW9uc3Rlci5tb3ZlKCk7XG5cdFx0XHRtb25zdGVyLnVwZGF0ZUFuaW1hdGlvbigpO1xuXHRcdH1cblxuXHRcdC8vYXZhdGFyIG1vdmUrcmVuZGVyK3RoaW5nc1xuXHRcdGlmKGRlaW1vcy5FbmdpbmUuYXZhdGFyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLnVwZGF0ZUFuaW1hdGlvbigpIDtcblx0XHRcdGRlaW1vcy5FbmdpbmUuYXZhdGFyLm1vdmUoKSA7XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5hZGRpbmdXYWl0aW5nRm9yY2VzKCkgO1xuXHRcdH1cblx0fVxuXG5cdGRlaW1vcy5yZW5kZXIuU2NlbmUucHJvdG90eXBlLmFkZExpc3RlbmVyID0gZnVuY3Rpb24oKSB7XG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zeW5jSXRlbScsdGhpcy5zeW5jSXRlbS5iaW5kKHRoaXMpKSA7XG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zeW5jQXZhdGFyJyx0aGlzLnN5bmNBdmF0YXIuYmluZCh0aGlzKSkgO1xuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc3luY01vbnN0ZXInLHRoaXMuc3luY01vbnN0ZXIuYmluZCh0aGlzKSkgO1xuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuYWN0aW9uQ29sbGlkZScsdGhpcy5lbGVtZW50Q29sbGlzaW9uLmJpbmQodGhpcykpIDtcblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnN5bmNQcm9qZWN0aWxlJyx0aGlzLnN5bmNQcm9qZWN0aWxlLmJpbmQodGhpcykpIDtcblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnN5bmNBdHRhY2tab25lJyx0aGlzLnN5bmNBdHRhY2tab25lLmJpbmQodGhpcykpIDtcblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLml0ZW1HcmFiYmVkJyx0aGlzLml0ZW1HcmFiYmVkLmJpbmQodGhpcykpIDtcblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5yZW5kZXIucGFyc2VTY2VuZScsdGhpcy5wYXJzZURhdGEuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRkZWltb3MucmVuZGVyLlNjZW5lLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKCkge1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zeW5jSXRlbScpIDtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc3luY0F2YXRhcicpIDtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc3luY01vbnN0ZXInKSA7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmFjdGlvbkNvbGxpZGUnKSA7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnN5bmNQcm9qZWN0aWxlJykgO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zeW5jQXR0YWNrWm9uZScpIDtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuaXRlbUdyYWJiZWQnKSA7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5yZW5kZXIucGFyc2VTY2VuZScpIDtcblx0fVxuXG5cdGRlaW1vcy5yZW5kZXIuU2NlbmUucHJvdG90eXBlLmFkZEl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG5cdFx0dGhpcy5pdGVtc1tpdGVtLnNlcnZlcmlkXSA9IGl0ZW07XG5cdH1cblxuXHRkZWltb3MucmVuZGVyLlNjZW5lLnByb3RvdHlwZS5zeW5jQXZhdGFyID0gZnVuY3Rpb24oZSkge1xuXHRcdC8vd2FpdCBnYW1lIHN0YXJ0IGJlZm9yZSBzdGFydC4uXG5cdFx0aWYoIWRlaW1vcy5FbmdpbmUucnVubmluZykgcmV0dXJuO1xuXG5cdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblx0XHR2YXIgYXZhdGFyO1xuXHRcdC8vc2kgb24gcmVjb2l0IGxhIHJlcXVldGUgZXQgcGFzIHF1ZSBsJ2F2YXRhciBvbiBsJ2V4dHJhaXRcblx0XHRpZihlW190WydNRVNTQUdFJ11dICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGF2YXRhciA9IGVbX3RbJ01FU1NBR0UnXV07XG5cdFx0fSBlbHNlIHtcblx0XHRcdGF2YXRhciA9IGU7XG5cdFx0fVxuXG5cdFx0dmFyIGF2X2lkID0gYXZhdGFyW190Lk1FU1NBR0VfRUxFTUVOVF9JRF07XG5cblx0XHQvL21ha2Ugc3BlY2lhbCBzeW5jIGlmIGl0IGlzIHRoZSBjdXJyZW50IGF2YXRhclxuXHRcdGlmKCBkZWltb3MuRW5naW5lLmF2YXRhciAhPT0gdW5kZWZpbmVkICYmIFxuXHRcdFx0YXZfaWQgPT09IGRlaW1vcy5FbmdpbmUuYXZhdGFyLnNlcnZlcmlkXG5cdFx0KSB7XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5wb3NpdGlvblNlcnZlci54ID0gYXZhdGFyW190Lk1FU1NBR0VfUE9TSVRJT05dLng7XG5cdFx0XHRkZWltb3MuRW5naW5lLmF2YXRhci5wb3NpdGlvblNlcnZlci55ID0gYXZhdGFyW190Lk1FU1NBR0VfUE9TSVRJT05dLnk7XG5cdFx0XHRkZWltb3MuRW5naW5lLmN1cnJlbnRMYWcgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGF2YXRhcltfdC5NRVNTQUdFX1RJTUVTVEFNUF07XG5cdFx0XHRkZWltb3MuRW5naW5lLnVpLnVwZGF0ZUxhZyhkZWltb3MuRW5naW5lLmN1cnJlbnRMYWcpO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5hdmF0YXIuY29ycmVjdFBvc2l0aW9uV2l0aFNlcnZlcigpO1xuXG5cdFx0XHQvL3N0b3AgaGVyZSBpZiB3ZSBkb24ndCB3YW50IHRvIHNob3cgbWlycm9yXG5cdFx0XHRpZiggZGVpbW9zLkNvbmZpZy5zaG93T3duTWlycm9yID09PSBmYWxzZSApXHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dmFyIGxvY2FsX2F2YXRhciA9IHRoaXMuYXZhdGFyc1thdmF0YXJbX3RbJ01FU1NBR0VfRUxFTUVOVF9JRCddXV07XG5cdFx0Ly9tYWtlIGl0IGlmIG5lZWRlZFxuXHRcdGlmKGxvY2FsX2F2YXRhciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRsb2NhbF9hdmF0YXIgPSB0aGlzLmF2YXRhcnNbYXZfaWRdID0gbmV3IGRlaW1vcy5lbGVtZW50LlNlcnZlckF2YXRhcihcblx0XHRcdFx0YXZhdGFyW190Lk5BTUVdLFxuXHRcdFx0XHRuZXcgb3JnLmRieXplcm8udG9vbHMuVmVjdG9yKGF2YXRhcltfdC5NRVNTQUdFX1BPU0lUSU9OXS54LCBhdmF0YXJbX3QuTUVTU0FHRV9QT1NJVElPTl0ueSksXG5cdFx0XHRcdG5ldyBvcmcuZGJ5emVyby50b29scy5WZWN0b3IoYXZhdGFyW190Lk1FU1NBR0VfVkVMT0NJVFldLngsIGF2YXRhcltfdC5NRVNTQUdFX1ZFTE9DSVRZXS55KSxcblx0XHRcdFx0bmV3IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3RvcihhdmF0YXJbX3QuTUVTU0FHRV9BQ0NFTEVSQVRJT05dLngsIGF2YXRhcltfdC5NRVNTQUdFX0FDQ0VMRVJBVElPTl0ueSksXG5cdFx0XHRcdG5ldyBvcmcuZGJ5emVyby50b29scy5WZWN0b3IoYXZhdGFyW190Lk1FU1NBR0VfU0laRV0ueCwgYXZhdGFyW190Lk1FU1NBR0VfU0laRV0ueSksXG5cdFx0XHRcdGF2YXRhcltfdC5NRVNTQUdFX01BU1NdLFxuXHRcdFx0XHRuZXcgb3JnLmRieXplcm8udG9vbHMuVmVjdG9yKGF2YXRhcltfdC5NRVNTQUdFX1VTRVJfSU5QVVRfVkVMT0NJVFldLngsIGF2YXRhcltfdC5NRVNTQUdFX1VTRVJfSU5QVVRfVkVMT0NJVFldLnkpLFxuXHRcdFx0XHRhdl9pZCxcblx0XHRcdFx0YXZhdGFyW190Lk1FU1NBR0VfREVMVEFTSE9XXVxuXHRcdFx0KSA7XG5cdFx0XHRsb2NhbF9hdmF0YXIub3JpZW50ZWQgPSBhdmF0YXJbX3QuTUVTU0FHRV9BTklNQVRJT05dW190Lk1FU1NBR0VfRElSRUNUSU9OXTtcblxuXHRcdFx0dmFyIHNraW4gPSBhdmF0YXJbX3QuTUVTU0FHRV9TS0lOXTtcblxuXHRcdFx0bG9jYWxfYXZhdGFyLkhQID0gYXZhdGFyW190Lk1FU1NBR0VfQ1VSUkVOVF9IUF07XG5cdFx0XHRsb2NhbF9hdmF0YXIubWF4SFAgPSBhdmF0YXJbX3QuTUVTU0FHRV9IUF07XG5cdFx0XHRsb2NhbF9hdmF0YXIuc2tpbiA9IHNraW47XG5cdFx0XHRsb2NhbF9hdmF0YXIuaW5pdEFuaW1hdGlvbigpO1xuXG5cdFx0XHRsb2NhbF9hdmF0YXIuZGVsdGFzaG93ID0gYXZhdGFyW190Lk1FU1NBR0VfREVMVEFTSE9XXTtcblxuXHRcdFx0bG9jYWxfYXZhdGFyLmluaXQoKTtcblx0XHR9XG5cblx0XHQvL3N5bmNocm8gZGVzIGluZm9zXG5cdFx0bG9jYWxfYXZhdGFyLm1vdmVTcGVlZFx0XHRcdFx0PSBhdmF0YXJbX3QuTUVTU0FHRV9NT1ZFX1NQRUVEXTtcblx0XHRsb2NhbF9hdmF0YXIuanVtcFNwZWVkXHRcdFx0XHQ9IGF2YXRhcltfdC5NRVNTQUdFX0pVTVBfU1BFRURdO1xuXHRcdGxvY2FsX2F2YXRhci5nb2luZ0Rvd25cdFx0XHRcdD0gYXZhdGFyW190Lk1FU1NBR0VfR09JTkdfRE9XTl07XG5cdFx0bG9jYWxfYXZhdGFyLnZlbG9jaXR5LnhcdFx0XHRcdD0gYXZhdGFyW190Lk1FU1NBR0VfVkVMT0NJVFldLng7XG5cdFx0bG9jYWxfYXZhdGFyLnZlbG9jaXR5LnlcdFx0XHRcdD0gYXZhdGFyW190Lk1FU1NBR0VfVkVMT0NJVFldLnk7XG5cdFx0Ly8gZG8gbm90IHN5bmNocm8gcG9zaXRpb24gb24gZmx5IHRvIGdldCBzbW9vdGh5IG1vdmVtZW50XG5cdFx0bG9jYWxfYXZhdGFyLmlzTGFuZGVkID0gYXZhdGFyW190Lk1FU1NBR0VfTEFOREVEXTtcblx0XHRpZihsb2NhbF9hdmF0YXIuaXNMYW5kZWQgPT09IHRydWUpXG5cdFx0e1xuXHRcdFx0bG9jYWxfYXZhdGFyLnBvc2l0aW9uLnhcdFx0XHRcdD0gYXZhdGFyW190Lk1FU1NBR0VfUE9TSVRJT05dLng7XG5cdFx0XHRsb2NhbF9hdmF0YXIucG9zaXRpb24ueVx0XHRcdFx0PSBhdmF0YXJbX3QuTUVTU0FHRV9QT1NJVElPTl0ueTtcblx0XHRcdGxvY2FsX2F2YXRhci5hY2NlbGVyYXRpb24ueFx0XHRcdD0gYXZhdGFyW190Lk1FU1NBR0VfQUNDRUxFUkFUSU9OXS54O1xuXHRcdFx0bG9jYWxfYXZhdGFyLmFjY2VsZXJhdGlvbi55XHRcdFx0PSBhdmF0YXJbX3QuTUVTU0FHRV9BQ0NFTEVSQVRJT05dLnk7XG5cdFx0fVxuXHRcdGxvY2FsX2F2YXRhci51c2VySW5wdXRWZWxvY2l0eS54XHQ9IGF2YXRhcltfdC5NRVNTQUdFX1VTRVJfSU5QVVRfVkVMT0NJVFldLng7XG5cdFx0bG9jYWxfYXZhdGFyLnVzZXJJbnB1dFZlbG9jaXR5LnlcdD0gYXZhdGFyW190Lk1FU1NBR0VfVVNFUl9JTlBVVF9WRUxPQ0lUWV0ueTtcblx0XHRsb2NhbF9hdmF0YXIuc2F5aW5nXHRcdFx0XHRcdD0gYXZhdGFyW190Lk1FU1NBR0VfU0FZSU5HXTtcblx0XHRsb2NhbF9hdmF0YXIuaXRlbV9zbG90X2hlYWRcdFx0XHQ9IGF2YXRhcltfdC5JVEVNX1NMT1RfSEVBRF07XG5cdFx0bG9jYWxfYXZhdGFyLml0ZW1fc2xvdF9jaGVzdFx0XHQ9IGF2YXRhcltfdC5JVEVNX1NMT1RfQ0hFU1RdO1xuXHRcdGxvY2FsX2F2YXRhci5pdGVtX3Nsb3RfZm9vdFx0XHRcdD0gYXZhdGFyW190LklURU1fU0xPVF9GT09UXTtcblx0XHRsb2NhbF9hdmF0YXIuaXRlbV9zbG90X2xlZnRfaGFuZFx0PSBhdmF0YXJbX3QuSVRFTV9TTE9UX0xFRlRfSEFORF07XG5cdFx0bG9jYWxfYXZhdGFyLml0ZW1fc2xvdF9yaWdodF9oYW5kXHQ9IGF2YXRhcltfdC5JVEVNX1NMT1RfUklHSFRfSEFORF07XG5cblx0XHRsb2NhbF9hdmF0YXIuSFAgPSBhdmF0YXJbX3QuTUVTU0FHRV9DVVJSRU5UX0hQXTtcblx0XHRsb2NhbF9hdmF0YXIubWF4SFAgPSBhdmF0YXJbX3QuTUVTU0FHRV9IUF07XG5cblx0XHRsb2NhbF9hdmF0YXIucmVuZGVyKCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRkZWltb3MucmVuZGVyLlNjZW5lLnByb3RvdHlwZS5zeW5jSXRlbSA9IGZ1bmN0aW9uKGUpIHtcblx0XHQvL3dhaXQgZ2FtZSBzdGFydCBiZWZvcmUgc3RhcnQuLlxuXHRcdGlmKCFkZWltb3MuRW5naW5lLnJ1bm5pbmcpIHJldHVybjtcblxuXHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0dmFyIGl0ZW07XG5cblx0XHQvL3NpIG9uIHJlY29pdCBsYSByZXF1ZXRlIGV0IHBhcyBxdWUgbCdhdmF0YXIgb24gbCdleHRyYWl0XG5cdFx0aWYoZVtfdFsnTUVTU0FHRSddXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRpdGVtID0gZVtfdFsnTUVTU0FHRSddXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aXRlbSA9IGU7XG5cdFx0fVxuXG5cdFx0dmFyIGxvY2FsX2l0ZW0gPSB0aGlzLml0ZW1zW2l0ZW1bX3RbJ0lEJ11dXTtcblxuXHRcdC8vaWYgaXRlbSBpcyBub3Qgb24gdGhlIHNjZW5lIHdlIG5ha2UgaXRcblx0XHRpZihsb2NhbF9pdGVtID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGxvY2FsX2l0ZW0gPSBuZXcgZGVpbW9zLmVsZW1lbnQuSXRlbShcblx0XHRcdFx0aXRlbVtfdC5JRF0sXG5cdFx0XHRcdG5ldyBWZWN0b3IoaXRlbVtfdC5NRVNTQUdFX1BPU0lUSU9OXS54LGl0ZW1bX3QuTUVTU0FHRV9QT1NJVElPTl0ueSksIC8vcG9zaXRpb25cblx0XHRcdFx0bmV3IFZlY3RvcihpdGVtW190Lk1FU1NBR0VfVkVMT0NJVFldLngsaXRlbVtfdC5NRVNTQUdFX1ZFTE9DSVRZXS55KSwgLy92ZWxvY2l0eVxuXHRcdFx0XHRuZXcgVmVjdG9yKGl0ZW1bX3QuTUVTU0FHRV9BQ0NFTEVSQVRJT05dLngsaXRlbVtfdC5NRVNTQUdFX0FDQ0VMRVJBVElPTl0ueSksIC8vYWNjZWxlcmF0aW9uXG5cdFx0XHRcdG5ldyBWZWN0b3IoaXRlbVtfdC5NRVNTQUdFX1NJWkVdLngsaXRlbVtfdC5NRVNTQUdFX1NJWkVdLnkpLCAvL3NpemVcblx0XHRcdFx0aXRlbVtfdC5NRVNTQUdFX01BU1NdLCAvL25hbWVcblx0XHRcdFx0aXRlbVtfdC5NRVNTQUdFX0VMRU1FTlRfSURdLCAvL25hbWVcblx0XHRcdFx0aXRlbVtfdC5NRVNTQUdFX1NLSU5dLCAvL3NraW5cblx0XHRcdFx0aXRlbVtfdC5NRVNTQUdFX0NPTE9SXSwgLy9za2luXG5cdFx0XHRcdGl0ZW1bX3QuTkFNRV0sIC8vc2tpblxuXHRcdFx0XHRpdGVtW190Lk1FU1NBR0VfT1JJRU5UQVRJT05dLCAvL3NraW5cblx0XHRcdFx0aXRlbVtfdC5NRVNTQUdFX0RFTFRBU0hPV10gLy9za2luXG5cdFx0XHQpO1xuXHRcdFx0bG9jYWxfaXRlbS5pbml0KCk7XG5cdFx0XHRkZWltb3MuRW5naW5lLnNjZW5lLmFkZEl0ZW0obG9jYWxfaXRlbSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxvY2FsX2l0ZW0ucG9zaXRpb24gLnggPSBpdGVtW190Lk1FU1NBR0VfUE9TSVRJT05dLng7XG5cdFx0XHRsb2NhbF9pdGVtLnBvc2l0aW9uLnkgPSBpdGVtW190Lk1FU1NBR0VfUE9TSVRJT05dLnk7XG5cdFx0XHRsb2NhbF9pdGVtLnZlbG9jaXR5LnggPSBpdGVtW190Lk1FU1NBR0VfVkVMT0NJVFldLng7XG5cdFx0XHRsb2NhbF9pdGVtLnZlbG9jaXR5LnkgPSBpdGVtW190Lk1FU1NBR0VfVkVMT0NJVFldLnk7XG5cdFx0XHRsb2NhbF9pdGVtLmFjY2VsZXJhdGlvbi54ID0gaXRlbVtfdC5NRVNTQUdFX0FDQ0VMRVJBVElPTl0ueDtcblx0XHRcdGxvY2FsX2l0ZW0uYWNjZWxlcmF0aW9uLnkgPSBpdGVtW190Lk1FU1NBR0VfQUNDRUxFUkFUSU9OXS55O1xuXHRcdH1cblx0fVxuXG5cdGRlaW1vcy5yZW5kZXIuU2NlbmUucHJvdG90eXBlLnN5bmNQcm9qZWN0aWxlID0gZnVuY3Rpb24oZSkge1xuXHRcdC8vd2FpdCBnYW1lIHN0YXJ0IGJlZm9yZSBzdGFydC4uXG5cdFx0aWYoIWRlaW1vcy5FbmdpbmUucnVubmluZykgcmV0dXJuO1xuXG5cdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblx0XHR2YXIgbXNnO1xuXG5cdFx0aWYoZVtfdFsnTUVTU0FHRSddXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRtc2cgPSBlW190WydNRVNTQUdFJ11dO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtc2cgPSBlO1xuXHRcdH1cblxuXHRcdC8vbWFrZSBpdCBpZiBuZWVkZWRcblx0XHRpZih0aGlzLnByb2plY3RpbGVzW21zZ1tfdFsnSUQnXV1dID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHZhciBwcm9qZWN0aWxlID0gbmV3IGRlaW1vcy5lbGVtZW50LlByb2plY3RpbGUoXG5cdFx0XHRcdG1zZ1tfdFsnSUQnXV0sXG5cdFx0XHRcdG5ldyBWZWN0b3IobXNnW190WydNRVNTQUdFX1BPU0lUSU9OJ11dLngsbXNnW190WydNRVNTQUdFX1BPU0lUSU9OJ11dLnkpLFxuXHRcdFx0XHRuZXcgVmVjdG9yKG1zZ1tfdFsnTUVTU0FHRV9WRUxPQ0lUWSddXS54LG1zZ1tfdFsnTUVTU0FHRV9WRUxPQ0lUWSddXS55KSxcblx0XHRcdFx0bmV3IFZlY3Rvcihtc2dbX3RbJ01FU1NBR0VfQUNDRUxFUkFUSU9OJ11dLngsbXNnW190WydNRVNTQUdFX0FDQ0VMRVJBVElPTiddXS55KSxcblx0XHRcdFx0bXNnW190WydNRVNTQUdFX1NJWkUnXV0sXG5cdFx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9NQVNTJ11dLFxuXHRcdFx0XHRtc2dbX3RbJ01FU1NBR0VfRUxFTUVOVF9JRCddXSxcblx0XHRcdFx0bXNnW190WydNRVNTQUdFX1NLSU4nXV0sXG5cdFx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9DT0xPUiddXSxcblx0XHRcdFx0bXNnW190WydNRVNTQUdFX0RBTUFHRSddXSxcblx0XHRcdFx0bXNnW190WydNRVNTQUdFX09SSUVOVEFUSU9OJ11dLFxuXHRcdFx0XHRtc2dbX3RbJ01FU1NBR0VfT1dORVInXV0sXG5cdFx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9ERUxUQVNIT1cnXV1cblx0XHRcdCk7XG5cdFx0XHRwcm9qZWN0aWxlLmluaXQoKTtcblx0XHRcdHByb2plY3RpbGUubmFtZSA9ICdQcm9qZWN0aWxlICcrbXNnW190WydJRCddXTtcblx0XHRcdHRoaXMucHJvamVjdGlsZXNbbXNnW190WydJRCddXV0gPSBwcm9qZWN0aWxlO1xuXHRcdFx0aWYodGhpcy5hdmF0YXJzW21zZ1tfdFsnTUVTU0FHRV9PV05FUiddXV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLmF2YXRhcnNbbXNnW190WydNRVNTQUdFX09XTkVSJ11dXS5sYXN0QXR0YWNrID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwcm9qZWN0aWxlXHRcdFx0XHQ9IHRoaXMucHJvamVjdGlsZXNbbXNnW190WydJRCddXV07XG5cdFx0XHRwcm9qZWN0aWxlLnZlbG9jaXR5LnhcdFx0PSBtc2dbX3QuTUVTU0FHRV9WRUxPQ0lUWV0ueDtcblx0XHRcdHByb2plY3RpbGUudmVsb2NpdHkueVx0XHQ9IG1zZ1tfdC5NRVNTQUdFX1ZFTE9DSVRZXS55O1xuXHRcdFx0cHJvamVjdGlsZS5wb3NpdGlvbi54XHRcdD0gbXNnW190Lk1FU1NBR0VfUE9TSVRJT05dLng7XG5cdFx0XHRwcm9qZWN0aWxlLnBvc2l0aW9uLnlcdFx0PSBtc2dbX3QuTUVTU0FHRV9QT1NJVElPTl0ueTtcblx0XHRcdHByb2plY3RpbGUuYWNjZWxlcmF0aW9uLnhcdD0gbXNnW190Lk1FU1NBR0VfQUNDRUxFUkFUSU9OXS54O1xuXHRcdFx0cHJvamVjdGlsZS5hY2NlbGVyYXRpb24ueVx0PSBtc2dbX3QuTUVTU0FHRV9BQ0NFTEVSQVRJT05dLnk7XG5cdFx0XHRwcm9qZWN0aWxlLm9yaWVudGF0aW9uXHRcdD0gbXNnW190Lk1FU1NBR0VfT1JJRU5UQVRJT05dO1xuXHRcdH1cblx0fVxuXG5cdGRlaW1vcy5yZW5kZXIuU2NlbmUucHJvdG90eXBlLnN5bmNNb25zdGVyID0gZnVuY3Rpb24oZSkge1xuXHRcdC8vd2FpdCBnYW1lIHN0YXJ0IGJlZm9yZSBzdGFydC4uXG5cdFx0aWYoIWRlaW1vcy5FbmdpbmUucnVubmluZykgcmV0dXJuO1xuXG5cdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblx0XHR2YXIgbXNnO1xuXG5cdFx0aWYoZVtfdFsnTUVTU0FHRSddXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRtc2cgPSBlW190WydNRVNTQUdFJ11dO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtc2cgPSBlO1xuXHRcdH1cblxuXHRcdC8vbWFrZSBpdCBpZiBuZWVkZWRcblx0XHRpZih0aGlzLm1vbnN0ZXJzW21zZ1tfdFsnSUQnXV1dID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHZhciBtb25zdGVyID0gbmV3IGRlaW1vcy5lbGVtZW50Lk1vbnN0ZXIoXG5cdFx0XHRcdG1zZ1tfdFsnSUQnXV0sXG5cdFx0XHRcdG5ldyBWZWN0b3IobXNnW190WydNRVNTQUdFX1BPU0lUSU9OJ11dLngsbXNnW190WydNRVNTQUdFX1BPU0lUSU9OJ11dLnkpLFxuXHRcdFx0XHRuZXcgVmVjdG9yKG1zZ1tfdFsnTUVTU0FHRV9WRUxPQ0lUWSddXS54LG1zZ1tfdFsnTUVTU0FHRV9WRUxPQ0lUWSddXS55KSxcblx0XHRcdFx0bmV3IFZlY3Rvcihtc2dbX3RbJ01FU1NBR0VfQUNDRUxFUkFUSU9OJ11dLngsbXNnW190WydNRVNTQUdFX0FDQ0VMRVJBVElPTiddXS55KSxcblx0XHRcdFx0bXNnW190WydNRVNTQUdFX1NJWkUnXV0sXG5cdFx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9NQVNTJ11dLFxuXHRcdFx0XHRtc2dbX3RbJ01FU1NBR0VfRUxFTUVOVF9JRCddXSxcblx0XHRcdFx0bXNnW190WydNRVNTQUdFX1NLSU4nXV0sXG5cdFx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9DT0xPUiddXSxcblx0XHRcdFx0bXNnW190WydOQU1FJ11dLFxuXHRcdFx0XHRtc2dbX3RbJ01FU1NBR0VfREFNQUdFJ11dLFxuXHRcdFx0XHRtc2dbX3RbJ01FU1NBR0VfT1JJRU5UQVRJT04nXV0sXG5cdFx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9ERUxUQVNIT1cnXV1cblx0XHRcdCk7XG5cdFx0XHRtb25zdGVyLkhQID0gbXNnW190WydNRVNTQUdFX0NVUlJFTlRfSFAnXV07XG5cdFx0XHRtb25zdGVyLm1heEhQID0gbXNnW190WydNRVNTQUdFX0hQJ11dO1xuXHRcdFx0bW9uc3Rlci5pbml0KCk7XG5cdFx0XHR0aGlzLm1vbnN0ZXJzW21zZ1tfdFsnSUQnXV1dID0gbW9uc3Rlcjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIG1vbnN0ZXJcdFx0XHRcdD0gdGhpcy5tb25zdGVyc1ttc2dbX3RbJ0lEJ11dXTtcblx0XHRcdG1vbnN0ZXIudmVsb2NpdHkueFx0XHQ9IG1zZ1tfdC5NRVNTQUdFX1ZFTE9DSVRZXS54O1xuXHRcdFx0bW9uc3Rlci52ZWxvY2l0eS55XHRcdD0gbXNnW190Lk1FU1NBR0VfVkVMT0NJVFldLnk7XG5cdFx0XHRtb25zdGVyLnBvc2l0aW9uLnhcdFx0PSBtc2dbX3QuTUVTU0FHRV9QT1NJVElPTl0ueDtcblx0XHRcdG1vbnN0ZXIucG9zaXRpb24ueVx0XHQ9IG1zZ1tfdC5NRVNTQUdFX1BPU0lUSU9OXS55O1xuXHRcdFx0bW9uc3Rlci5hY2NlbGVyYXRpb24ueFx0PSBtc2dbX3QuTUVTU0FHRV9BQ0NFTEVSQVRJT05dLng7XG5cdFx0XHRtb25zdGVyLmFjY2VsZXJhdGlvbi55XHQ9IG1zZ1tfdC5NRVNTQUdFX0FDQ0VMRVJBVElPTl0ueTtcblx0XHRcdG1vbnN0ZXIub3JpZW50YXRpb25cdFx0PSBtc2dbX3QuTUVTU0FHRV9PUklFTlRBVElPTl07XG5cdFx0XHRtb25zdGVyLkhQID0gbXNnW190WydNRVNTQUdFX0NVUlJFTlRfSFAnXV07XG5cdFx0XHRtb25zdGVyLm1heEhQID0gbXNnW190WydNRVNTQUdFX0hQJ11dO1xuXHRcdH1cblx0fVxuXG5cdGRlaW1vcy5yZW5kZXIuU2NlbmUucHJvdG90eXBlLnN5bmNBdHRhY2tab25lID0gZnVuY3Rpb24oZSkge1xuXHRcdC8vd2FpdCBnYW1lIHN0YXJ0IGJlZm9yZSBzdGFydC4uXG5cdFx0aWYoIWRlaW1vcy5FbmdpbmUucnVubmluZykgcmV0dXJuO1xuXG5cdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblx0XHR2YXIgbXNnO1xuXG5cdFx0aWYoZVtfdFsnTUVTU0FHRSddXSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRtc2cgPSBlW190WydNRVNTQUdFJ11dO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtc2cgPSBlO1xuXHRcdH1cblxuXHRcdC8vYWRkIGl0IGlmIG5lZWRlZFxuXHRcdHZhciBhdHRhY2tab25lID0gbmV3IGRlaW1vcy5lbGVtZW50LkF0dGFja1pvbmUoXG5cdFx0XHRtc2dbX3RbJ01FU1NBR0VfRUxFTUVOVF9JRCddXSxcblx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9QT1NJVElPTiddXSxcblx0XHRcdG1zZ1tfdFsnTUVTU0FHRV9TSVpFJ11dLFxuXHRcdFx0bXNnW190WydNRVNTQUdFX09XTkVSJ11dLFxuXHRcdFx0bXNnW190WydNRVNTQUdFX0RVUkFUSU9OJ11dXG5cdFx0KTtcblx0XHR0aGlzLmF0dGFja1pvbmVzW2F0dGFja1pvbmUuaWRdID0gYXR0YWNrWm9uZTtcblxuXHRcdGlmKHRoaXMuYXZhdGFyc1ttc2dbX3RbJ01FU1NBR0VfT1dORVInXV1dICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuYXZhdGFyc1ttc2dbX3RbJ01FU1NBR0VfT1dORVInXV1dLmxhc3RBdHRhY2sgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHR9XG5cblx0XHRhdHRhY2tab25lLnJlbmRlcigpO1xuXHR9XG5cblx0ZGVpbW9zLnJlbmRlci5TY2VuZS5wcm90b3R5cGUuaXRlbUdyYWJiZWQgPSBmdW5jdGlvbihlKSB7XG5cdFx0Ly93YWl0IGdhbWUgc3RhcnQgYmVmb3JlIHN0YXJ0Li5cblx0XHRpZighZGVpbW9zLkVuZ2luZS5ydW5uaW5nKSByZXR1cm47XG5cblx0XHQvL2NsZWFyIGl0ZW1cblx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdHZhciBpdGVtID0gdGhpcy5pdGVtc1tlW190WydNRVNTQUdFJ11dW190WydNRVNTQUdFX0lURU0nXV1dO1xuXHRcdGl0ZW0uY2xlYW5Eb20oKTtcblx0XHRkZWxldGUgdGhpcy5pdGVtc1tpdGVtLnNlcnZlcmlkXTtcblx0XHQvL1RPRE8gYWRkIGl0IHRvIGxpc3Qgb2YgaXRlbSBpbiBjbGllbnQgc2lkZVxuXG5cdFx0Ly9jb3JyZWN0IGF2YXRhciBwb3NpdGlvblxuXHRcdHZhciBhdl9pZCA9IGVbX3RbJ01FU1NBR0UnXV1bX3RbJ01FU1NBR0VfVE8nXV07XG5cdFx0dmFyIGF2YXRhciA9IG51bGw7XG5cdFx0aWYoIGRlaW1vcy5FbmdpbmUuYXZhdGFyICE9PSB1bmRlZmluZWQgJiYgXG5cdFx0XHRhdl9pZCA9PT0gZGVpbW9zLkVuZ2luZS5hdmF0YXIuc2VydmVyaWRcblx0XHQpIHtcblx0XHRcdGF2YXRhciA9IGRlaW1vcy5FbmdpbmUuYXZhdGFyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhdmF0YXIgPSBkZWltb3MuRW5naW5lLnNjZW5lLmF2YXRhcnNbYXZfaWRdO1xuXHRcdH1cblx0XHRhdmF0YXIucG9zaXRpb24ueCA9IGVbX3RbJ01FU1NBR0UnXV1bX3RbJ01FU1NBR0VfVE9fUE9TSVRJT04nXV0ueDtcblx0XHRhdmF0YXIucG9zaXRpb24ueSA9IGVbX3RbJ01FU1NBR0UnXV1bX3RbJ01FU1NBR0VfVE9fUE9TSVRJT04nXV0ueTtcblx0XHRhdmF0YXIucmVuZGVyKCk7XG5cdFx0YXZhdGFyLm9uTW92ZSgpO1xuXHR9XG5cblx0ZGVpbW9zLnJlbmRlci5TY2VuZS5wcm90b3R5cGUuZGVzdHJveVByb2plY3RpbGUgPSBmdW5jdGlvbihwcm9qZWN0aWxlKSB7XG5cdFx0Ly9pZiBleHNpc3RzXG5cdFx0aWYoISF0aGlzLnByb2plY3RpbGVzW3Byb2plY3RpbGUuc2VydmVyaWRdKSB7XG5cdFx0XHR0aGlzLnByb2plY3RpbGVzW3Byb2plY3RpbGUuc2VydmVyaWRdLmNsZWFuRG9tKCk7XG5cdFx0XHRkZWxldGUgdGhpcy5wcm9qZWN0aWxlc1twcm9qZWN0aWxlLnNlcnZlcmlkXTtcblx0XHR9XG5cdH1cblxuXHRkZWltb3MucmVuZGVyLlNjZW5lLnByb3RvdHlwZS5lbGVtZW50Q29sbGlzaW9uID0gZnVuY3Rpb24oZSkge1xuXHRcdHZhciBfdCA9IGRlaW1vcy5FbmdpbmUuX3Q7XG5cdFx0dmFyIG1lc3NhZ2UgPSBlW190WydNRVNTQUdFJ11dO1xuXHRcdHZhciBmcm9tRWxlbWVudCA9IG51bGw7XG5cdFx0dmFyIHRvRWxlbWVudCA9IG51bGw7XG5cdFx0dmFyIGlzRGVhZCA9IG1lc3NhZ2VbX3QuTUVTU0FHRV9JU19ERUFEXTtcblx0XHRzd2l0Y2gobWVzc2FnZVtfdC5NRVNTQUdFX0ZST01fVFlQRV0pXG5cdFx0e1xuXHRcdFx0Y2FzZSBfdC5NRVNTQUdFX01PTlNURVI6XG5cdFx0XHRcdGZyb21FbGVtZW50ID0gdGhpcy5tb25zdGVyc1ttZXNzYWdlW190Lk1FU1NBR0VfRlJPTV1dO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgX3QuTUVTU0FHRV9JVEVNOlxuXHRcdFx0XHRmcm9tRWxlbWVudCA9IHRoaXMuaXRlbXNbbWVzc2FnZVtfdC5NRVNTQUdFX0ZST01dXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIF90Lk1FU1NBR0VfUFJPSkVDVElMRTpcblx0XHRcdFx0ZnJvbUVsZW1lbnQgPSB0aGlzLnByb2plY3RpbGVzW21lc3NhZ2VbX3QuTUVTU0FHRV9GUk9NXV07XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBfdC5NRVNTQUdFX0FWQVRBUjpcblx0XHRcdFx0dmFyIGlkID0gbWVzc2FnZVtfdC5NRVNTQUdFX0ZST01dO1xuXHRcdFx0XHRpZihpZCA9PT0gZGVpbW9zLkVuZ2luZS5hdmF0YXIuc2VydmVyaWQpIHtcblx0XHRcdFx0XHRmcm9tRWxlbWVudCA9IGRlaW1vcy5FbmdpbmUuYXZhdGFyO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZyb21FbGVtZW50ID0gdGhpcy5hdmF0YXJzW2lkXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0aWYoIWZyb21FbGVtZW50KSByZXR1cm47XG5cblx0XHRzd2l0Y2gobWVzc2FnZVtfdC5NRVNTQUdFX1RPX1RZUEVdKVxuXHRcdHtcblx0XHRcdGNhc2UgX3QuTUVTU0FHRV9NT05TVEVSOlxuXHRcdFx0XHR0b0VsZW1lbnQgPSB0aGlzLm1vbnN0ZXJzW21lc3NhZ2VbX3QuTUVTU0FHRV9UT11dO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgX3QuTUVTU0FHRV9JVEVNOlxuXHRcdFx0XHR0b0VsZW1lbnQgPSB0aGlzLml0ZW1zW21lc3NhZ2VbX3QuTUVTU0FHRV9UT11dO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgX3QuTUVTU0FHRV9QUk9KRUNUSUxFOlxuXHRcdFx0XHR0b0VsZW1lbnQgPSB0aGlzLnByb2plY3RpbGVzW21lc3NhZ2VbX3QuTUVTU0FHRV9UT11dO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgX3QuTUVTU0FHRV9BVkFUQVI6XG5cdFx0XHRcdHZhciBpZCA9IG1lc3NhZ2VbX3QuTUVTU0FHRV9UT107XG5cdFx0XHRcdGlmKGlkID09PSBkZWltb3MuRW5naW5lLmF2YXRhci5zZXJ2ZXJpZCkge1xuXHRcdFx0XHRcdHRvRWxlbWVudCA9IGRlaW1vcy5FbmdpbmUuYXZhdGFyO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRvRWxlbWVudCA9IHRoaXMuYXZhdGFyc1tpZF07XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGlmKCF0b0VsZW1lbnQpIHJldHVybjtcblxuXHRcdGZyb21FbGVtZW50LnBvc2l0aW9uLnggPSBtZXNzYWdlW190Lk1FU1NBR0VfRlJPTV9QT1NJVElPTl0ueDtcblx0XHRmcm9tRWxlbWVudC5wb3NpdGlvbi55ID0gbWVzc2FnZVtfdC5NRVNTQUdFX0ZST01fUE9TSVRJT05dLnk7XG5cdFx0dG9FbGVtZW50LnBvc2l0aW9uLnggPSBtZXNzYWdlW190Lk1FU1NBR0VfVE9fUE9TSVRJT05dLng7XG5cdFx0dG9FbGVtZW50LnBvc2l0aW9uLnkgPSBtZXNzYWdlW190Lk1FU1NBR0VfVE9fUE9TSVRJT05dLnk7XG5cdFx0ZnJvbUVsZW1lbnQucmVuZGVyKCk7XG5cdFx0dG9FbGVtZW50LnJlbmRlcigpO1xuXG5cdFx0dG9FbGVtZW50LnRvdWNoZWQoZnJvbUVsZW1lbnQpO1xuXHRcdGlmKGlzRGVhZCkge1xuXHRcdFx0dG9FbGVtZW50LmRpZSgpO1xuXHRcdH1cblx0fVxuXG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBFbGVtZW50IE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDE0LzAzLzIyXG4gKiBAZGVzY3JpcHRpb24gOiBFbGVtZW50IG1vZGVsXG4gKlxuICoqL1xuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXG5cdHZhciBWZWN0b3IgPSBvcmcuZGJ5emVyby50b29scy5WZWN0b3I7XG5cdGRlaW1vcy5lbGVtZW50ID0gZGVpbW9zLmVsZW1lbnQgfHwge307XG5cblx0LyoqXG5cdCAqIEF2YXRhciBjb25zdHJ1Y3RvclxuXHQgKlxuXHQgKiovXG5cdGRlaW1vcy5lbGVtZW50LkVsZW1lbnQgPSBmdW5jdGlvbiAocG9zaXRpb24sc2l6ZSxzZXJ2ZXJpZCxkZWx0YXNob3cpIHtcblx0XHR0aGlzLmNsYXNzID0gJ2VsZW1lbnQnO1xuXHRcdHRoaXMubmFtZSA9IG51bGw7XG5cdFx0dGhpcy5uYW1lV2lkdGggPSBudWxsO1xuXHRcdHRoaXMubmFtZUhlaWdodCA9IG51bGw7XG5cdFx0dGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuXHRcdHRoaXMudmVsb2NpdHkgPSBuZXcgb3JnLmRieXplcm8udG9vbHMuVmVjdG9yKDAsMCk7XG5cdFx0dGhpcy5hY2NlbGVyYXRpb24gPSBuZXcgb3JnLmRieXplcm8udG9vbHMuVmVjdG9yKDAsMCk7XG5cdFx0dGhpcy53aWR0aCA9IHNpemUueDtcblx0XHR0aGlzLmhlaWdodCA9IHNpemUueTtcblx0XHR0aGlzLmxhc3RVcGRhdGUgPSBudWxsO1xuXHRcdHRoaXMubWFzcyA9IDE7XG5cdFx0dGhpcy50b01vdmUgPSBWZWN0b3IuWmVybygpO1xuXHRcdHRoaXMuZGVsdGFzaG93ID0gZGVsdGFzaG93OyAvL3RyYW5zbGF0b2luIHZlY3RvciBhcHBsaWVkIHRvIHRoZSByZW5kZXJcblx0XHR0aGlzLmRpY3RDbGFzcyA9IHt9OyAvL2RpY3Rvbm5haXJ5IGxpbmtpbmcgRE9NIGNzcyBjbGFzcyBhbmQgc3RhdGVzXG5cdFx0dGhpcy5wb3NpdGlvblNlcnZlciA9IHt4OjAseTowfTtcblx0XHR0aGlzLmF0dGFja1JhdGUgPSAxMDA7XG5cdFx0dGhpcy5pbk1vdmUgPSBmYWxzZTtcblx0XHR0aGlzLmlzTGFuZGVkID0gZmFsc2U7XG5cdFx0dGhpcy5sYW5kZWRCbG9jayA9IG51bGw7XG5cdFx0dGhpcy5za2luID0gbnVsbDtcblx0XHR0aGlzLmdvaW5nRG93biA9IGZhbHNlO1xuXHRcdHRoaXMub3JpZW50ZWQgPSAncmlnaHQnO1xuXHRcdHRoaXMuc2VydmVyaWQgPSBzZXJ2ZXJpZDtcblx0XHR0aGlzLmN1cnJlbnRBY3Rpb24gPSBudWxsO1xuXHRcdHRoaXMuZG9tRWxlbU5hbWUgPSBudWxsO1xuXHRcdHRoaXMuZG9tRWxlbUhQID0gbnVsbDtcblx0XHR0aGlzLnNwZWFrZXIgPSBudWxsO1xuXHRcdHRoaXMuZGFtYWdlID0gbnVsbDtcblx0XHR0aGlzLnByb2plY3RpbGVUcmFuc2xhdGlvbiA9IHt9O1xuXHRcdHRoaXMucHJvamVjdGlsZVRyYW5zbGF0aW9uLmxlZnQgPSB7J3gnOjAsJ3knOjB9O1xuXHRcdHRoaXMucHJvamVjdGlsZVRyYW5zbGF0aW9uLnJpZ2h0ID0geyd4JzowLCd5JzowfTtcblx0XHQvL21hcCB0byBzZXQgd2l0aCB3aGF0IGVsZW1lbnRzIGFyZSBjb2xsaWRhYmxlXG5cdFx0dGhpcy5jb2xsaXNpb25UeXBlRW5hYmxlZCA9IHt9O1xuXG5cdFx0dGhpcy5jb2xsaXNpb25UeXBlRW5hYmxlZFsnYmxvY2tzJ10gPSB0cnVlO1xuXHRcdHRoaXMuY29sbGlzaW9uVHlwZUVuYWJsZWRbJ2dhbWVBcmVhJ10gPSB0cnVlO1xuXHRcdHRoaXMuY29sbGlzaW9uVHlwZUVuYWJsZWRbJ3BsYXRlZm9ybWUnXSA9IHRydWU7XG5cblx0XHQvL29iamVjdCBjb2xsaXNpb25zIGFyZSBtYW5hZ2VkIGJ5IHNlcnZlclxuXHRcdHRoaXMuY29sbGlzaW9uVHlwZUVuYWJsZWRbJ2JvbnVzJ10gPSBmYWxzZTtcblx0XHR0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkWydwcm9qZWN0aWxlcyddID0gZmFsc2U7XG5cdFx0dGhpcy5jb2xsaXNpb25UeXBlRW5hYmxlZFsnbW9uc3RlcnMnXSA9IGZhbHNlO1xuXHRcdHRoaXMuY29sbGlzaW9uVHlwZUVuYWJsZWRbJ2F2YXRhcnMnXSA9IGZhbHNlO1xuXHRcdHRoaXMubWF4SFAgPSBudWxsO1xuXHRcdHRoaXMuSFAgPSBudWxsO1xuXG5cdFx0Ly9zdG9yZSBpbmZvcm1hdGlvbiBmb3IgY29sbGlzaW9uc1xuXHRcdHRoaXMudmVydGV4VEwgPSBuZXcgVmVjdG9yKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcblx0XHR0aGlzLnZlcnRleEJMID0gbmV3IFZlY3Rvcih0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0KTtcblx0XHR0aGlzLnZlcnRleFRSID0gbmV3IFZlY3Rvcih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLCB0aGlzLnBvc2l0aW9uLnkpO1xuXHRcdHRoaXMudmVydGV4QlIgPSBuZXcgVmVjdG9yKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0KTtcblxuXHRcdHRoaXMuc2tpcE5leHRVcGRhdGVBbmRNb3ZlID0gZmFsc2U7XG5cdH1cblxuXG5cdGRlaW1vcy5lbGVtZW50LkVsZW1lbnQucHJvdG90eXBlID0ge1xuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly9tYWtlIGRvbSBlbGVtZW50XG5cdFx0XHR2YXIgZG9tX2VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0ZG9tX2VsZW0uc2V0QXR0cmlidXRlKFwiaWRcIix0aGlzLmRvbUlkKTtcblxuXHRcdFx0ZG9tX2VsZW0uc3R5bGUud2lkdGggPSBwYXJzZUludCh0aGlzLndpZHRoICsgdGhpcy5kZWx0YXNob3cueCoyKSsncHgnO1xuXHRcdFx0ZG9tX2VsZW0uc3R5bGUuaGVpZ2h0ICA9IHBhcnNlSW50KHRoaXMuaGVpZ2h0ICsgdGhpcy5kZWx0YXNob3cueSoyKSsncHgnO1xuXG5cdFx0XHRkb21fZWxlbS5zdHlsZS5kaXNwbGF5ICA9ICdibG9jayc7XG5cdFx0XHRkb21fZWxlbS5zdHlsZS5wb3NpdGlvbiAgPSAnYWJzb2x1dGUnO1xuXG5cdFx0XHR2YXIgdHJhbnNsYXRpb24gPSBcInRyYW5zbGF0ZTNkKFwiKyh0aGlzLnBvc2l0aW9uLngtdGhpcy5kZWx0YXNob3cueCkrXCJweCxcIisodGhpcy5wb3NpdGlvbi55LXRoaXMuZGVsdGFzaG93LnkpK1wicHgsMHB4KVwiO1xuXHRcdFx0ZG9tX2VsZW0uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNsYXRpb247XG5cdFx0XHRkb21fZWxlbS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2xhdGlvbjtcblxuXHRcdFx0ZGVpbW9zLkVuZ2luZS56b25lLmFyZWEuYXBwZW5kQ2hpbGQoZG9tX2VsZW0pO1xuXG5cdFx0XHR0aGlzLmRvbUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRvbUlkKTtcblx0XHRcdHRoaXMuZG9tRWxlbVdpZHRoID0gdGhpcy5kb21FbGVtLm9mZnNldFdpZHRoOy8vdXNlZnVsbCBmb3IgcG9zaXRpb25uaW5nIG5hbWUgYW5kIHNwZWFrZXJcblx0XHRcdHRoaXMuZG9tRWxlbUhlaWdodCA9IHRoaXMuZG9tRWxlbS5vZmZzZXRIZWlnaHQ7Ly91c2VmdWxsIGZvciBwb3NpdGlvbm5pbmcgbmFtZSBhbmQgc3BlYWtlclxuXG5cdFx0XHR0aGlzLmluaXRBbmltYXRpb24oKTtcblxuXHRcdFx0aWYoISF0aGlzLkhQKSB7XG5cdFx0XHRcdHRoaXMuaW5pdEhQKCk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5jbGVhbkRvbSgpO1xuXHRcdH0sXG5cblx0XHRpbml0QW5pbWF0aW9uOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuZGljdENsYXNzWyd3YWxraW5nX3JpZ2h0J11cdFx0PSB0aGlzLnNraW4rJ0FuaW1hdGlvbldhbGtpbmdSaWdodCc7XG5cdFx0XHR0aGlzLmRpY3RDbGFzc1snd2Fsa2luZ19sZWZ0J11cdFx0PSB0aGlzLnNraW4rJ0FuaW1hdGlvbldhbGtpbmdMZWZ0Jztcblx0XHRcdHRoaXMuZGljdENsYXNzWydzdGFuZGluZ19yaWdodCddXHQ9IHRoaXMuc2tpbisnQW5pbWF0aW9uU3RhbmRpbmdSaWdodCc7XG5cdFx0XHR0aGlzLmRpY3RDbGFzc1snc3RhbmRpbmdfbGVmdCddXHRcdD0gdGhpcy5za2luKydBbmltYXRpb25TdGFuZGluZ0xlZnQnO1xuXHRcdFx0dGhpcy5kaWN0Q2xhc3NbJ2ZseWluZ19yaWdodCddXHRcdD0gdGhpcy5za2luKydBbmltYXRpb25GbHlpbmdSaWdodCc7XG5cdFx0XHR0aGlzLmRpY3RDbGFzc1snZmx5aW5nX2xlZnQnXVx0XHQ9IHRoaXMuc2tpbisnQW5pbWF0aW9uRmx5aW5nTGVmdCc7XG5cdFx0XHR0aGlzLmRpY3RDbGFzc1snc2hvb3RpbmdfcmlnaHQnXVx0PSB0aGlzLnNraW4rJ0FuaW1hdGlvblNob290aW5nUmlnaHQnO1xuXHRcdFx0dGhpcy5kaWN0Q2xhc3NbJ3Nob290aW5nX2xlZnQnXVx0XHQ9IHRoaXMuc2tpbisnQW5pbWF0aW9uU2hvb3RpbmdMZWZ0Jztcblx0XHRcdHRoaXMuZGljdENsYXNzWydmcm9udCddXHRcdFx0XHQ9IHRoaXMuc2tpbisnQW5pbWF0aW9uRnJvbnQnO1xuXHRcdH0sXG5cblx0XHRnZXREb21FbGVtOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLmRvbUVsZW07XG5cdFx0fSxcblxuXHRcdHVwZGF0ZTogZnVuY3Rpb24oZHQsIG5vdykge1xuXHRcdFx0aWYoISF0aGlzLnNraXBOZXh0VXBkYXRlQW5kTW92ZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vZmx5IGlmIHdlIGhhdmUgYSBuZWdhdGl2ZSB2ZXJ0aWNhbCBkZXBsYWNlbWVudCBPUiB3ZSBsZWF2ZSBvdXIgYmxvY2tzXG5cdFx0XHRpZigodGhpcy5pc0xhbmRlZCAmJiB0aGlzLnZlbG9jaXR5LnkgPCAwKSB8fFxuXHRcdFx0XHQoISF0aGlzLmxhbmRlZEJsb2NrICYmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoIDwgdGhpcy5sYW5kZWRCbG9jay52ZXJ0ZXhUTC54IHx8IHRoaXMucG9zaXRpb24ueCA+IHRoaXMubGFuZGVkQmxvY2sudmVydGV4VFIueCApKSkge1xuXHRcdFx0XHR0aGlzLnVubGFuZGVkKCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vYWRkaW5nIGdyYXZpdHkgaWYgd2UgYXJlIG5vdCBsYW5kZWQgb3Igb3V0c2lkZSBvZiBvdXIgbGFuZGVkIGJsb2NrXG5cdFx0XHRpZighdGhpcy5pc0xhbmRlZCkge1xuXHRcdFx0XHR0aGlzLmFjY2VsZXJhdGlvbiA9IGRlaW1vcy5waHlzaWMuR3Jhdml0eS5kdXBsaWNhdGUoKTtcblx0XHRcdFx0dGhpcy5hY2NlbGVyYXRpb24ueSAqPSAgdGhpcy5tYXNzO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hY2NlbGVyYXRpb24ueSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdHZhciByZXR1cm5JbnRlZ3JhdGUgPSBvcmcuZGJ5emVyby50b29scy5QaHlzaWNzLmludGVncmF0ZUtNNCh0aGlzLnBvc2l0aW9uLHRoaXMudmVsb2NpdHksdGhpcy5hY2NlbGVyYXRpb24sZHQvMTAwMCk7XG5cdFx0XHR0aGlzLnRvTW92ZS54ICs9IHJldHVybkludGVncmF0ZS5keC54O1xuXHRcdFx0dGhpcy50b01vdmUueSArPSByZXR1cm5JbnRlZ3JhdGUuZHgueTtcblx0XHRcdHRoaXMudmVsb2NpdHkueCArPSByZXR1cm5JbnRlZ3JhdGUuZHYueDtcblx0XHRcdHRoaXMudmVsb2NpdHkueSArPSByZXR1cm5JbnRlZ3JhdGUuZHYueTtcblx0XHRcdHRoaXMudG9Nb3ZlLnggKz0gKHRoaXMudmVsb2NpdHkueCAqIGR0LzEwMDApO1xuXHRcdFx0dGhpcy50b01vdmUueSArPSAodGhpcy52ZWxvY2l0eS55ICogZHQvMTAwMCk7XG5cblx0XHRcdHRoaXMudG9Nb3ZlLnggPSB0aGlzLnRvTW92ZS54O1xuXHRcdFx0dGhpcy50b01vdmUueSA9IHRoaXMudG9Nb3ZlLnk7XG5cblx0XHRcdHRoaXMubGFzdFVwZGF0ZSA9IG5vdztcblx0XHR9LFxuXG5cdFx0bW92ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZighIXRoaXMuc2tpcE5leHRVcGRhdGVBbmRNb3ZlKSB7XG5cdFx0XHRcdHRoaXMuc2tpcE5leHRVcGRhdGVBbmRNb3ZlID0gZmFsc2U7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHRoaXMudG9Nb3ZlLnggPT09IDAgJiYgdGhpcy50b01vdmUueSA9PT0wKSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudEFjdGlvbiA9ICdzdGFuZCc7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBjdXJyZW50TW92ZW1lbnQgPSB0aGlzLnRvTW92ZTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGluaXRpYWxQb3NpdGlvbiA9IHt4OnRoaXMucG9zaXRpb24ueCx5OnRoaXMucG9zaXRpb24ueX07XG5cdFx0XHR2YXIgZG9tRWxlbSA9IHRoaXMuZG9tRWxlbTtcblxuXHRcdFx0Ly9tb3ZlIH5+fn5+XG5cdFx0XHR0aGlzLnBvc2l0aW9uLmFkZChjdXJyZW50TW92ZW1lbnQpO1xuXG5cdFx0XHQvL2NoZWNrIGNvbGxpc2lvbiB3aXRoIFpvbmVcblx0XHRcdGlmKHRoaXMucG9zaXRpb24ueCA8IDApIHtcblx0XHRcdFx0dGhpcy5wb3NpdGlvbi54ID0gMDtcblx0XHRcdFx0dGhpcy5vbkFyZWFDb2xsaXNpb25MZWZ0KCk7XG5cdFx0XHR9XG5cdFx0XHRpZih0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoID4gZGVpbW9zLkVuZ2luZS56b25lLndpZHRoKSB7XG5cdFx0XHRcdHRoaXMucG9zaXRpb24ueCA9IGRlaW1vcy5FbmdpbmUuem9uZS53aWR0aCAtIHRoaXMud2lkdGg7XG5cdFx0XHRcdHRoaXMub25BcmVhQ29sbGlzaW9uUmlnaHQoKTtcblx0XHRcdH1cblx0XHRcdGlmKHRoaXMucG9zaXRpb24ueSA8IDApIHtcblx0XHRcdFx0dGhpcy5wb3NpdGlvbi55ID0gMDtcblx0XHRcdFx0dGhpcy5vbkFyZWFDb2xsaXNpb25Ub3AoKTtcblx0XHRcdH1cblx0XHRcdGlmKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ID4gZGVpbW9zLkVuZ2luZS56b25lLmhlaWdodCkge1xuXHRcdFx0XHR0aGlzLnBvc2l0aW9uLnkgPSBkZWltb3MuRW5naW5lLnpvbmUuaGVpZ2h0IC0gdGhpcy5oZWlnaHQ7XG5cdFx0XHRcdHRoaXMub25BcmVhQ29sbGlzaW9uQm90dG9tKCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vY29saXNpb24gd2l0aCBibG9hY2tzXG5cdFx0XHRpZih0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkWydibG9ja3MnXSkgdGhpcy5jaGVja0Jsb2Nrc0NvbGxpc2lvbiggY3VycmVudE1vdmVtZW50ICk7XG5cdFx0XHRpZih0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkWydib251cyddKSB0aGlzLmNoZWNrRWxlbWVudENvbGxpc2lvbiggY3VycmVudE1vdmVtZW50LCBkZWltb3MuRW5naW5lLnNjZW5lLml0ZW1zICk7XG5cdFx0XHRpZih0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkWydtb25zdGVycyddKSB0aGlzLmNoZWNrRWxlbWVudENvbGxpc2lvbiggY3VycmVudE1vdmVtZW50LCBkZWltb3MuRW5naW5lLnNjZW5lLm1vbnN0ZXJzICk7XG5cdFx0XHRpZih0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkWydwcm9qZWN0aWxlcyddKSB0aGlzLmNoZWNrRWxlbWVudENvbGxpc2lvbiggY3VycmVudE1vdmVtZW50LCBkZWltb3MuRW5naW5lLnNjZW5lLnByb2plY3RpbGVzICk7XG5cblx0XHRcdHZhciBkZWx0YU1vdmUgPSBvcmcuZGJ5emVyby50b29scy5WZWN0b3IuU3ViKHRoaXMucG9zaXRpb24saW5pdGlhbFBvc2l0aW9uKTtcblx0XHRcdGlmKGRlbHRhTW92ZS54ICE9IDAgfHwgZGVsdGFNb3ZlLnkgIT0wKSB7XG5cdFx0XHRcdC8vc2VuZCBzeW5jIHdoZW4gbW92ZVxuXHRcdFx0XHR0aGlzLmluTW92ZSA9IHRydWU7XG5cdFx0XHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0XHRcdHRoaXMub25Nb3ZlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmluTW92ZSA9IGZhbHNlXG5cdFx0XHR9XG5cblx0XHRcdC8vcmVzZXQgbW92ZW1lbnRcblx0XHRcdHRoaXMudG9Nb3ZlID0gVmVjdG9yLlplcm8oKTtcblxuXHRcdFx0Ly9zZXQgYW5pbWF0aW9uXG5cdFx0XHR0aGlzLmN1cnJlbnRBY3Rpb247XG5cdFx0XHRpZihkZWx0YU1vdmUueCAhPT0gMCkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRBY3Rpb24gPSAnd2Fsayc7XG5cdFx0XHRcdGlmKGRlbHRhTW92ZS54ID4gMCkgdGhpcy5vcmllbnRlZCA9ICdyaWdodCc7XG5cdFx0XHRcdGlmKGRlbHRhTW92ZS54IDwgMCkgdGhpcy5vcmllbnRlZCA9ICdsZWZ0Jztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudEFjdGlvbiA9ICdzdGFuZCc7XG5cdFx0XHR9XG5cdFx0XHRpZihkZWx0YU1vdmUueSAhPSAwKSB0aGlzLmN1cnJlbnRBY3Rpb24gPSAnZmx5JztcblxuXHRcdH0sXG5cblx0XHRjaGVja0Jsb2Nrc0NvbGxpc2lvbjogZnVuY3Rpb24oIGN1cnJlbnRNb3ZlbWVudCApIHtcblx0XHRcdC8vY2hlY2sgZm9yIGNvbGxpc2lvblxuXHRcdFx0dmFyIGJsb2NrcyA9IG9yZy5kYnl6ZXJvLmRlaW1vcy5FbmdpbmUuem9uZS5ibG9ja3M7XG5cdFx0XHR2YXIgdGVzdENvbGxpc2lvbiA9IG51bGw7XG5cdFx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKGJsb2Nrcyk7XG5cdFx0XHR2YXIgYmxvY2ssaTtcblx0XHRcdGZvcihpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0YmxvY2sgPSBibG9ja3Nba2V5c1tpXV07XG5cdFx0XHRcdC8vZG8gbm90IGNoZWNrIGlmIHdlIG5vdCBjb2xsaWRlIG9uIHBsYXRlZm9ybWVcblx0XHRcdFx0aWYoYmxvY2sudHlwZS50eXBlID09PSAncGxhdGVmb3JtJyAmJiAhdGhpcy5jb2xsaXNpb25UeXBlRW5hYmxlZFsncGxhdGVmb3JtZSddKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly93ZSBkb250IGNoZWNrIGZvciBjb2xsaXNpb24gaWYgYXZhdGFyIGdvIGJvdHRvbSBhbmQgYmxvY2sgaXMgYSBwbGF0ZWZvcm1cblx0XHRcdFx0Ly9jb2xsaXNpb24gZnJvbSBhdmF0YXIgYm90dG9tXG5cdFx0XHRcdGlmKGJsb2NrLnR5cGUudHlwZSAhPSAncGxhdGVmb3JtJyB8fCAoYmxvY2sudHlwZS50eXBlID09ICdwbGF0ZWZvcm0nICYmIHRoaXMuZ29pbmdEb3duID09IGZhbHNlKSkge1xuXHRcdFx0XHRcdGlmKGN1cnJlbnRNb3ZlbWVudC55ID4gMCkge1xuXHRcdFx0XHRcdFx0dGVzdENvbGxpc2lvbiA9IG9yZy5kYnl6ZXJvLnRvb2xzLlBoeXNpY3MuU2VnbWVudHNDb2xsaXNpb24oXG5cdFx0XHRcdFx0XHRcdHRoaXMudmVydGV4QkwsXG5cdFx0XHRcdFx0XHRcdHt4OnRoaXMucG9zaXRpb24ueCx5OnRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0fSxcblx0XHRcdFx0XHRcdFx0YmxvY2sudmVydGV4VEwsXG5cdFx0XHRcdFx0XHRcdGJsb2NrLnZlcnRleFRSXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZih0ZXN0Q29sbGlzaW9uICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLm9uQmxvY2tDb2xsaXNpb25Cb3R0b20odGVzdENvbGxpc2lvbixibG9jayk7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR0ZXN0Q29sbGlzaW9uID0gb3JnLmRieXplcm8udG9vbHMuUGh5c2ljcy5TZWdtZW50c0NvbGxpc2lvbihcblx0XHRcdFx0XHRcdFx0dGhpcy52ZXJ0ZXhCUixcblx0XHRcdFx0XHRcdFx0e3g6dGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCx5OnRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0fSxcblx0XHRcdFx0XHRcdFx0YmxvY2sudmVydGV4VEwsXG5cdFx0XHRcdFx0XHRcdGJsb2NrLnZlcnRleFRSXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRpZih0ZXN0Q29sbGlzaW9uICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLm9uQmxvY2tDb2xsaXNpb25Cb3R0b20odGVzdENvbGxpc2lvbixibG9jayk7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vd2Ugc3RvcCBoZXJlIGZvciBwbGF0ZWZvcm1lXG5cdFx0XHRcdGlmKGJsb2NrLnR5cGUudHlwZSA9PSAncGxhdGVmb3JtJykgY29udGludWU7XG5cblx0XHRcdFx0Ly9jb2xsaXNpb24gZnJvbSBhdmF0YXIgdG9wXG5cdFx0XHRcdGlmKGN1cnJlbnRNb3ZlbWVudC55IDwgMCkge1xuXHRcdFx0XHRcdHRlc3RDb2xsaXNpb24gPSBvcmcuZGJ5emVyby50b29scy5QaHlzaWNzLlNlZ21lbnRzQ29sbGlzaW9uKFxuXHRcdFx0XHRcdFx0dGhpcy52ZXJ0ZXhUTCxcblx0XHRcdFx0XHRcdHt4OnRoaXMucG9zaXRpb24ueCx5OnRoaXMucG9zaXRpb24ueX0sXG5cdFx0XHRcdFx0XHRibG9jay52ZXJ0ZXhCTCxcblx0XHRcdFx0XHRcdGJsb2NrLnZlcnRleEJSXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZih0ZXN0Q29sbGlzaW9uICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkJsb2NrQ29sbGlzaW9uVG9wKHRlc3RDb2xsaXNpb24sYmxvY2spO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGVzdENvbGxpc2lvbiA9IG9yZy5kYnl6ZXJvLnRvb2xzLlBoeXNpY3MuU2VnbWVudHNDb2xsaXNpb24oXG5cdFx0XHRcdFx0XHR0aGlzLnZlcnRleFRSLFxuXHRcdFx0XHRcdFx0e3g6dGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCx5OnRoaXMucG9zaXRpb24ueX0sXG5cdFx0XHRcdFx0XHRibG9jay52ZXJ0ZXhCTCxcblx0XHRcdFx0XHRcdGJsb2NrLnZlcnRleEJSXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZih0ZXN0Q29sbGlzaW9uICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkJsb2NrQ29sbGlzaW9uVG9wKHRlc3RDb2xsaXNpb24sYmxvY2spO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly9jb2xsaXNpb24gZnJvbSBhdmF0YXIgbGVmdFxuXHRcdFx0XHRpZihjdXJyZW50TW92ZW1lbnQueCA8IDApIHtcblx0XHRcdFx0XHR0ZXN0Q29sbGlzaW9uID0gb3JnLmRieXplcm8udG9vbHMuUGh5c2ljcy5TZWdtZW50c0NvbGxpc2lvbihcblx0XHRcdFx0XHRcdHRoaXMudmVydGV4VEwsXG5cdFx0XHRcdFx0XHR7eDp0aGlzLnBvc2l0aW9uLngseTp0aGlzLnBvc2l0aW9uLnl9LFxuXHRcdFx0XHRcdFx0YmxvY2sudmVydGV4VFIsXG5cdFx0XHRcdFx0XHRibG9jay52ZXJ0ZXhCUlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYodGVzdENvbGxpc2lvbiAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdHRoaXMub25CbG9ja0NvbGxpc2lvbkxlZnQodGVzdENvbGxpc2lvbixibG9jayk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0ZXN0Q29sbGlzaW9uID0gb3JnLmRieXplcm8udG9vbHMuUGh5c2ljcy5TZWdtZW50c0NvbGxpc2lvbihcblx0XHRcdFx0XHRcdHRoaXMudmVydGV4QkwsXG5cdFx0XHRcdFx0XHR7eDp0aGlzLnBvc2l0aW9uLngseTp0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodH0sXG5cdFx0XHRcdFx0XHRibG9jay52ZXJ0ZXhUUixcblx0XHRcdFx0XHRcdGJsb2NrLnZlcnRleEJSXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZih0ZXN0Q29sbGlzaW9uICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkJsb2NrQ29sbGlzaW9uTGVmdCh0ZXN0Q29sbGlzaW9uLGJsb2NrKTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vY29sbGlzaW9uIGZyb20gYXZhdGFyIHJpZ2h0XG5cdFx0XHRcdGlmKGN1cnJlbnRNb3ZlbWVudC54ID4gMCkge1xuXHRcdFx0XHRcdHRlc3RDb2xsaXNpb24gPSBvcmcuZGJ5emVyby50b29scy5QaHlzaWNzLlNlZ21lbnRzQ29sbGlzaW9uKFxuXHRcdFx0XHRcdFx0dGhpcy52ZXJ0ZXhUUixcblx0XHRcdFx0XHRcdHt4OnRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgseTp0aGlzLnBvc2l0aW9uLnl9LFxuXHRcdFx0XHRcdFx0YmxvY2sudmVydGV4VEwsXG5cdFx0XHRcdFx0XHRibG9jay52ZXJ0ZXhCTFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYodGVzdENvbGxpc2lvbiAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdHRoaXMub25CbG9ja0NvbGxpc2lvblJpZ2h0KHRlc3RDb2xsaXNpb24sYmxvY2spO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGVzdENvbGxpc2lvbiA9IG9yZy5kYnl6ZXJvLnRvb2xzLlBoeXNpY3MuU2VnbWVudHNDb2xsaXNpb24oXG5cdFx0XHRcdFx0XHR0aGlzLnZlcnRleEJSLFxuXHRcdFx0XHRcdFx0e3g6dGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCx5OnRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0fSxcblx0XHRcdFx0XHRcdGJsb2NrLnZlcnRleFRMLFxuXHRcdFx0XHRcdFx0YmxvY2sudmVydGV4Qkxcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmKHRlc3RDb2xsaXNpb24gIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9uQmxvY2tDb2xsaXNpb25SaWdodCh0ZXN0Q29sbGlzaW9uLGJsb2NrKTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRjaGVja0VsZW1lbnRDb2xsaXNpb246IGZ1bmN0aW9uKCBjdXJyZW50TW92ZW1lbnQsIGVsZW1lbnRzICkge1xuXHRcdFx0dmFyIHRlc3RDb2xsaXNpb24gPSBudWxsO1xuXHRcdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50cyk7XG5cdFx0XHR2YXIgaSxlbGVtZW50O1xuXHRcdFx0Zm9yKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRlbGVtZW50ID0gZWxlbWVudHNba2V5c1tpXV07XG5cdFx0XHRcdC8vY29sbGlzaW9uIGZyb20gYXZhdGFyIGJvdHRvbVxuXHRcdFx0XHRpZihjdXJyZW50TW92ZW1lbnQueSA+IDApIHtcblx0XHRcdFx0XHR0ZXN0Q29sbGlzaW9uID0gb3JnLmRieXplcm8udG9vbHMuUGh5c2ljcy5TZWdtZW50c0NvbGxpc2lvbihcblx0XHRcdFx0XHRcdHRoaXMudmVydGV4QkwsXG5cdFx0XHRcdFx0XHR7eDp0aGlzLnBvc2l0aW9uLngseTp0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodH0sXG5cdFx0XHRcdFx0XHRlbGVtZW50LnZlcnRleFRMLFxuXHRcdFx0XHRcdFx0ZWxlbWVudC52ZXJ0ZXhUUlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYodGVzdENvbGxpc2lvbiAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdHRoaXMub25FbGVtZW50Q29sbGlzaW9uQm90dG9tKHRlc3RDb2xsaXNpb24sZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0ZXN0Q29sbGlzaW9uID0gb3JnLmRieXplcm8udG9vbHMuUGh5c2ljcy5TZWdtZW50c0NvbGxpc2lvbihcblx0XHRcdFx0XHRcdHRoaXMudmVydGV4QlIsXG5cdFx0XHRcdFx0XHR7eDp0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLHk6dGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHR9LFxuXHRcdFx0XHRcdFx0ZWxlbWVudC52ZXJ0ZXhUTCxcblx0XHRcdFx0XHRcdGVsZW1lbnQudmVydGV4VFJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmKHRlc3RDb2xsaXNpb24gIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9uRWxlbWVudENvbGxpc2lvbkJvdHRvbSh0ZXN0Q29sbGlzaW9uLGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly9jb2xsaXNpb24gZnJvbSBhdmF0YXIgdG9wXG5cdFx0XHRcdGlmKGN1cnJlbnRNb3ZlbWVudC55IDwgMCkge1xuXHRcdFx0XHRcdHRlc3RDb2xsaXNpb24gPSBvcmcuZGJ5emVyby50b29scy5QaHlzaWNzLlNlZ21lbnRzQ29sbGlzaW9uKFxuXHRcdFx0XHRcdFx0dGhpcy52ZXJ0ZXhUTCxcblx0XHRcdFx0XHRcdHt4OnRoaXMucG9zaXRpb24ueCx5OnRoaXMucG9zaXRpb24ueX0sXG5cdFx0XHRcdFx0XHRlbGVtZW50LnZlcnRleEJMLFxuXHRcdFx0XHRcdFx0ZWxlbWVudC52ZXJ0ZXhCUlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aWYodGVzdENvbGxpc2lvbiAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRcdHRoaXMub25FbGVtZW50Q29sbGlzaW9uVG9wKHRlc3RDb2xsaXNpb24sZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0ZXN0Q29sbGlzaW9uID0gb3JnLmRieXplcm8udG9vbHMuUGh5c2ljcy5TZWdtZW50c0NvbGxpc2lvbihcblx0XHRcdFx0XHRcdHRoaXMudmVydGV4VFIsXG5cdFx0XHRcdFx0XHR7eDp0aGlzLnBvc2l0aW9uLngseTp0aGlzLnBvc2l0aW9uLnl9LFxuXHRcdFx0XHRcdFx0ZWxlbWVudC52ZXJ0ZXhCTCxcblx0XHRcdFx0XHRcdGVsZW1lbnQudmVydGV4QlJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmKHRlc3RDb2xsaXNpb24gIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9uRWxlbWVudENvbGxpc2lvblRvcCh0ZXN0Q29sbGlzaW9uLGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly9jb2xsaXNpb24gZnJvbSBhdmF0YXIgbGVmdFxuXHRcdFx0XHRpZihjdXJyZW50TW92ZW1lbnQueCA8IDApIHtcblx0XHRcdFx0XHR0ZXN0Q29sbGlzaW9uID0gb3JnLmRieXplcm8udG9vbHMuUGh5c2ljcy5TZWdtZW50c0NvbGxpc2lvbihcblx0XHRcdFx0XHRcdHRoaXMudmVydGV4VEwsXG5cdFx0XHRcdFx0XHR7eDp0aGlzLnBvc2l0aW9uLngseTp0aGlzLnBvc2l0aW9uLnl9LFxuXHRcdFx0XHRcdFx0ZWxlbWVudC52ZXJ0ZXhUUixcblx0XHRcdFx0XHRcdGVsZW1lbnQudmVydGV4QlJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGlmKHRlc3RDb2xsaXNpb24gIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm9uRWxlbWVudENvbGxpc2lvbkxlZnQodGVzdENvbGxpc2lvbixlbGVtZW50KTtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRlc3RDb2xsaXNpb24gPSBvcmcuZGJ5emVyby50b29scy5QaHlzaWNzLlNlZ21lbnRzQ29sbGlzaW9uKFxuXHRcdFx0XHRcdFx0dGhpcy52ZXJ0ZXhCTCxcblx0XHRcdFx0XHRcdHt4OnRoaXMucG9zaXRpb24ueCx5OnRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0fSxcblx0XHRcdFx0XHRcdGVsZW1lbnQudmVydGV4VFIsXG5cdFx0XHRcdFx0XHRlbGVtZW50LnZlcnRleEJSXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZih0ZXN0Q29sbGlzaW9uICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkVsZW1lbnRDb2xsaXNpb25MZWZ0KHRlc3RDb2xsaXNpb24sZWxlbWVudCk7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvL2NvbGxpc2lvbiBmcm9tIGF2YXRhciByaWdodFxuXHRcdFx0XHRpZihjdXJyZW50TW92ZW1lbnQueCA+IDApIHtcblx0XHRcdFx0XHR0ZXN0Q29sbGlzaW9uID0gb3JnLmRieXplcm8udG9vbHMuUGh5c2ljcy5TZWdtZW50c0NvbGxpc2lvbihcblx0XHRcdFx0XHRcdHRoaXMudmVydGV4VFIsXG5cdFx0XHRcdFx0XHR7eDp0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoLHk6dGhpcy5wb3NpdGlvbi55fSxcblx0XHRcdFx0XHRcdGVsZW1lbnQudmVydGV4VEwsXG5cdFx0XHRcdFx0XHRlbGVtZW50LnZlcnRleEJMXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZih0ZXN0Q29sbGlzaW9uICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkVsZW1lbnRDb2xsaXNpb25SaWdodCh0ZXN0Q29sbGlzaW9uLGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGVzdENvbGxpc2lvbiA9IG9yZy5kYnl6ZXJvLnRvb2xzLlBoeXNpY3MuU2VnbWVudHNDb2xsaXNpb24oXG5cdFx0XHRcdFx0XHR0aGlzLnZlcnRleEJSLFxuXHRcdFx0XHRcdFx0e3g6dGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCx5OnRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0fSxcblx0XHRcdFx0XHRcdGVsZW1lbnQudmVydGV4VEwsXG5cdFx0XHRcdFx0XHRlbGVtZW50LnZlcnRleEJMXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRpZih0ZXN0Q29sbGlzaW9uICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5vbkVsZW1lbnRDb2xsaXNpb25SaWdodCh0ZXN0Q29sbGlzaW9uLGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHJlbmRlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZG9tX2VsZW0gPSB0aGlzLmRvbUVsZW07XG5cdFx0XHRpZih0aGlzLnBvc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dmFyIHRyYW5zbGF0aW9uID0gXCJ0cmFuc2xhdGUzZChcIitwYXJzZUludCh0aGlzLnBvc2l0aW9uLnggLSBwYXJzZUludCh0aGlzLmRlbHRhc2hvdy54KSkrXCJweCxcIitwYXJzZUludCh0aGlzLnBvc2l0aW9uLnkgLSBwYXJzZUludCh0aGlzLmRlbHRhc2hvdy55KSkrXCJweCwwcHgpXCI7XG5cdFx0XHRcdGRvbV9lbGVtLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zbGF0aW9uO1xuXHRcdFx0XHRkb21fZWxlbS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2xhdGlvbjtcblxuXHRcdFx0XHRpZighIXRoaXMuSFApIHtcblx0XHRcdFx0XHR0aGlzLnJlbmRlckhQKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXG5cdFx0bGFuZGVkOiBmdW5jdGlvbihlbGVtZW50KSB7XG5cdFx0XHR0aGlzLmlzTGFuZGVkID0gdHJ1ZTtcblx0XHRcdHRoaXMubGFuZGVkQmxvY2sgPSBlbGVtZW50O1xuXHRcdFx0dGhpcy5vbkp1c3RMYW5kKClcblx0XHR9LFxuXG5cdFx0dW5sYW5kZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5pc0xhbmRlZCA9IGZhbHNlO1xuXHRcdFx0dGhpcy5sYW5kZWRCbG9jayA9IG51bGw7XG5cdFx0XHR0aGlzLm9uVW5sYW5kKClcblx0XHR9LFxuXG5cdFx0b25KdXN0TGFuZDogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL3N0dWJcblx0XHR9LFxuXG5cdFx0b25VbmxhbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly9zdHViXG5cdFx0fSxcblxuXHRcdG9uTW92ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnZlcnRleFRMLnggPSB0aGlzLnBvc2l0aW9uLng7XG5cdFx0XHR0aGlzLnZlcnRleFRMLnkgPSB0aGlzLnBvc2l0aW9uLnk7XG5cdFx0XHR0aGlzLnZlcnRleEJMLnggPSB0aGlzLnBvc2l0aW9uLng7XG5cdFx0XHR0aGlzLnZlcnRleEJMLnkgPSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodDtcblx0XHRcdHRoaXMudmVydGV4VFIueCA9IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGg7XG5cdFx0XHR0aGlzLnZlcnRleFRSLnkgPSB0aGlzLnBvc2l0aW9uLnk7XG5cdFx0XHR0aGlzLnZlcnRleEJSLnggPSB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoO1xuXHRcdFx0dGhpcy52ZXJ0ZXhCUi55ID0gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQ7XG5cdFx0fSxcblxuXHRcdG9uQmxvY2tDb2xsaXNpb246IGZ1bmN0aW9uKCBjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCApIHtcblx0XHR9LFxuXG5cdFx0b25BcmVhQ29sbGlzaW9uOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vc3R1YlxuXHRcdH0sXG5cblx0XHRvbkVsZW1lbnRDb2xsaXNpb246IGZ1bmN0aW9uKGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50KSB7XG5cdFx0XHRjb2xsaXNpb25FbGVtZW50LmRlc3Ryb3koKTtcblx0XHR9LFxuXG5cdFx0b25BcmVhQ29sbGlzaW9uUmlnaHQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy52ZWxvY2l0eS54ID0gMDtcblx0XHRcdHRoaXMub25BcmVhQ29sbGlzaW9uKCk7XG5cdFx0fSxcblxuXHRcdG9uQXJlYUNvbGxpc2lvbkxlZnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy52ZWxvY2l0eS54ID0gMDtcblx0XHRcdHRoaXMub25BcmVhQ29sbGlzaW9uKCk7XG5cdFx0fSxcblxuXHRcdG9uQXJlYUNvbGxpc2lvblRvcDogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnZlbG9jaXR5LnkgPSAwO1xuXHRcdFx0dGhpcy5vbkFyZWFDb2xsaXNpb24oKTtcblx0XHR9LFxuXG5cdFx0b25BcmVhQ29sbGlzaW9uQm90dG9tOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMudmVsb2NpdHkueSA9IDA7XG5cdFx0XHR0aGlzLm9uQXJlYUNvbGxpc2lvbigpO1xuXHRcdFx0dGhpcy5sYW5kZWQoZmFsc2UpO1xuXHRcdH0sXG5cblx0XHRvbkVsZW1lbnRDb2xsaXNpb25SaWdodDogZnVuY3Rpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQpIHtcblx0XHRcdHRoaXMub25FbGVtZW50Q29sbGlzaW9uKGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50KTtcblx0XHR9LFxuXG5cdFx0b25FbGVtZW50Q29sbGlzaW9uTGVmdDogZnVuY3Rpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQpIHtcblx0XHRcdHRoaXMub25FbGVtZW50Q29sbGlzaW9uKGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50KTtcblx0XHR9LFxuXG5cdFx0b25FbGVtZW50Q29sbGlzaW9uVG9wOiBmdW5jdGlvbihjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCkge1xuXHRcdFx0dGhpcy5vbkVsZW1lbnRDb2xsaXNpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQpO1xuXHRcdH0sXG5cblx0XHRvbkVsZW1lbnRDb2xsaXNpb25Cb3R0b206IGZ1bmN0aW9uKGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50KSB7XG5cdFx0XHR0aGlzLm9uRWxlbWVudENvbGxpc2lvbihjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCk7XG5cdFx0fSxcblxuXHRcdG9uQmxvY2tDb2xsaXNpb25Cb3R0b206IGZ1bmN0aW9uKCBjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCApIHtcblx0XHRcdHRoaXMubGFuZGVkQmxvY2sgPSBjb2xsaXNpb25FbGVtZW50O1xuXHRcdFx0dGhpcy5wb3NpdGlvbi55ID0gY29sbGlzaW9uQ29vcmQueSAtIHRoaXMuaGVpZ2h0O1xuXHRcdFx0dGhpcy52ZWxvY2l0eS55ID0gMDtcblx0XHRcdHRoaXMubGFuZGVkKGNvbGxpc2lvbkVsZW1lbnQpO1xuXHRcdFx0dGhpcy5vbkJsb2NrQ29sbGlzaW9uKGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50ICk7XG5cdFx0fSxcblxuXHRcdG9uQmxvY2tDb2xsaXNpb25Ub3A6IGZ1bmN0aW9uKCBjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCApIHtcblx0XHRcdHRoaXMucG9zaXRpb24ueSA9IGNvbGxpc2lvbkNvb3JkLnk7XG5cdFx0XHR0aGlzLnZlbG9jaXR5LnkgPSAwO1xuXHRcdFx0dGhpcy5vbkJsb2NrQ29sbGlzaW9uKGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50ICk7XG5cdFx0fSxcblxuXHRcdG9uQmxvY2tDb2xsaXNpb25MZWZ0OiBmdW5jdGlvbiggY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQgKSB7XG5cdFx0XHR0aGlzLnBvc2l0aW9uLnggPSBjb2xsaXNpb25Db29yZC54O1xuXHRcdFx0dGhpcy52ZWxvY2l0eS54ID0gMDtcblx0XHRcdHRoaXMub25CbG9ja0NvbGxpc2lvbihjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCApO1xuXHRcdH0sXG5cblx0XHRvbkJsb2NrQ29sbGlzaW9uUmlnaHQ6IGZ1bmN0aW9uKCBjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCApIHtcblx0XHRcdHRoaXMucG9zaXRpb24ueCA9IGNvbGxpc2lvbkNvb3JkLnggLSB0aGlzLndpZHRoO1xuXHRcdFx0dGhpcy52ZWxvY2l0eS54ID0gMDtcblx0XHRcdHRoaXMub25CbG9ja0NvbGxpc2lvbihjb2xsaXNpb25Db29yZCwgY29sbGlzaW9uRWxlbWVudCApO1xuXHRcdH0sXG5cblx0XHRjb3JyZWN0UG9zaXRpb25XaXRoU2VydmVyOmZ1bmN0aW9uKHRpbWVzdGFtcCl7XG5cdFx0XHQvL2ZpeCBwb3NpdGlvbiBmcm9tIHNlcnZlclxuXHRcdFx0dmFyIHN0ZXBJblBhc3QgPSBwYXJzZUludCgoZGVpbW9zLkVuZ2luZS5jdXJyZW50TGFnKSAgLyBkZWltb3MuQ29uZmlnLklOVEVSUE9MQVRJT05fVElNRVNURVApO1xuXG5cdFx0XHR2YXIgZGVsdGFYID0gdGhpcy5wb3NpdGlvblNlcnZlci54IC0gcGFyc2VJbnQodGhpcy5wb3NpdGlvbi54KTtcblx0XHRcdHZhciBkZWx0YVkgPSB0aGlzLnBvc2l0aW9uU2VydmVyLnkgLSBwYXJzZUludCh0aGlzLnBvc2l0aW9uLnkpO1xuXHRcdFx0dmFyIHNxdWFyZUh5cG90aGVudXMgPSBkZWx0YVgqZGVsdGFYICsgZGVsdGFZKmRlbHRhWTtcblx0XHRcdGlmKGRlaW1vcy5Db25maWcuU1FVQVJFX0FVVEhPUklUWSA8IHNxdWFyZUh5cG90aGVudXMpIHtcblx0XHRcdFx0dGhpcy5wb3NpdGlvbi54ID0gdGhpcy5wb3NpdGlvblNlcnZlci54O1xuXHRcdFx0XHR0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLnBvc2l0aW9uU2VydmVyLnk7XG5cdFx0XHRcdHRoaXMuc2tpcE5leHRVcGRhdGVBbmRNb3ZlID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5vbk1vdmUoKTtcblx0XHRcdFx0dGhpcy5yZW5kZXIoKTtcblx0XHRcdFx0Ly93ZSB1bmxhbmQgaXQgdG8gY2hlY2sgY29sbGlzaW9uIHdpdGggbmV3IHBvc2l0aW9uXG5cdFx0XHRcdHRoaXMudW5sYW5kZWQoKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0YmluZEV2ZW50IDogZnVuY3Rpb24oKSB7XG5cdFx0XHQvL3N0dWJcblx0XHR9LFxuXG5cdFx0dW5iaW5kRXZlbnQgOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vc3R1YlxuXHRcdH0sXG5cblx0XHR1cGRhdGVBbmltYXRpb24gOiBmdW5jdGlvbigpIHtcblx0XHRcdGlmKHRoaXMub3JpZW50ZWQgIT09ICdyaWdodCcgJiYgdGhpcy5vcmllbnRlZCAhPT0gJ2xlZnQnKSB0aHJvdyAnVW5rbm93IGRpcmVjdGlvbiAnK3RoaXMub3JpZW50ZWQ7XG5cdFx0XHR2YXIgZG9tRWxlbSA9IHRoaXMuZG9tRWxlbTtcblx0XHRcdHZhciBjbGFzc0FuaW1hdGlvbiA9IG51bGw7XG5cblx0XHRcdGlmKHRoaXMuaXNBdHRhY2tpbmcoKSkge1xuXHRcdFx0XHRjbGFzc0FuaW1hdGlvbiA9IHRoaXMuZGljdENsYXNzWydzaG9vdGluZ18nK3RoaXMub3JpZW50ZWRdO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c3dpdGNoKHRoaXMuY3VycmVudEFjdGlvbil7XG5cdFx0XHRcdFx0Y2FzZSBcImZseVwiOlxuXHRcdFx0XHRcdFx0Y2xhc3NBbmltYXRpb24gPSB0aGlzLmRpY3RDbGFzc1snZmx5aW5nXycrdGhpcy5vcmllbnRlZF07XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFwianVtcFwiOlxuXHRcdFx0XHRcdFx0Y2xhc3NBbmltYXRpb24gPSB0aGlzLmRpY3RDbGFzc1snanVtcGluZ18nK3RoaXMub3JpZW50ZWRdO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcIndhbGtcIjpcblx0XHRcdFx0XHRcdGNsYXNzQW5pbWF0aW9uID0gdGhpcy5kaWN0Q2xhc3NbJ3dhbGtpbmdfJyt0aGlzLm9yaWVudGVkXTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRjbGFzc0FuaW1hdGlvbiA9IHRoaXMuZGljdENsYXNzWydzdGFuZGluZ18nK3RoaXMub3JpZW50ZWRdO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0ZG9tRWxlbS5jbGFzc05hbWUgPSBjbGFzc0FuaW1hdGlvbjtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogTmFtZVxuXHRcdCAqL1xuXHRcdGluaXROYW1lIDogZnVuY3Rpb24gKG1haW4pIHtcblx0XHRcdHZhciBkb21fZWxlbV9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGRvbV9lbGVtX25hbWUuc2V0QXR0cmlidXRlKFwiaWRcIix0aGlzLmRvbUlkKydfbmFtZScpIDtcblxuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0XHRcdGRvbV9lbGVtX25hbWUuaW5uZXJIVE1MID0gdGhpcy5uYW1lO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5kaXNwbGF5ICA9ICdub25lJyA7XG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmZvbnRTaXplID0gJzE2cHgnO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5jb2xvciA9ICEhbWFpbiA/ICdyZ2IoMTI4LCAxNTEsIDIyNCknIDogJ3JnYigyMjQsIDEyOCwgMTI4KSc7XG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLnpJbmRleCA9IDEwO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS50ZXh0U2hhZG93ID0gJ3doaXRlIC0ycHggLTJweCAycHgsIHdoaXRlIDJweCAycHggMnB4LCB3aGl0ZSAtMnB4IDJweCAycHgsIHdoaXRlIDJweCAtMnB4IDJweCc7XG5cblx0XHRcdGRlaW1vcy5FbmdpbmUuem9uZS5hcmVhLmFwcGVuZENoaWxkKGRvbV9lbGVtX25hbWUpIDtcblx0XHRcdGRvbV9lbGVtX25hbWUuc3R5bGUuZGlzcGxheSAgPSAnYmxvY2snIDtcblxuXHRcdFx0dGhpcy5kb21FbGVtTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZG9tSWQrJ19uYW1lJyk7XG5cblx0XHRcdHRoaXMubmFtZVdpZHRoID0gZG9tX2VsZW1fbmFtZS5vZmZzZXRXaWR0aDtcblx0XHRcdHRoaXMubmFtZUhlaWdodCA9IGRvbV9lbGVtX25hbWUub2Zmc2V0SGVpZ2h0O1xuXG5cdFx0XHR0aGlzLnJlbmRlck5hbWUuY2FsbCh0aGlzKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogTmFtZVxuXHRcdCAqL1xuXHRcdGluaXRIUCA6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBkb21FbGVtSFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdFx0ZG9tRWxlbUhQLnNldEF0dHJpYnV0ZShcImlkXCIsdGhpcy5kb21JZCsnX2hwJykgO1xuXG5cdFx0XHRkb21FbGVtSFAuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cdFx0XHRkb21FbGVtSFAuc3R5bGUuZGlzcGxheSAgPSAnbm9uZScgO1xuXHRcdFx0ZG9tRWxlbUhQLnN0eWxlLnpJbmRleCA9IDEwO1xuXHRcdFx0ZG9tRWxlbUhQLnN0eWxlLndpZHRoID0gKCh0aGlzLkhQL3RoaXMubWF4SFApICogdGhpcy5uYW1lV2lkdGgpKydweCc7XG5cdFx0XHRkb21FbGVtSFAuc3R5bGUuaGVpZ2h0ID0gJzNweCc7XG5cdFx0XHRkb21FbGVtSFAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNBNEMzQTAnO1xuXG5cdFx0XHRkZWltb3MuRW5naW5lLnpvbmUuYXJlYS5hcHBlbmRDaGlsZChkb21FbGVtSFApIDtcblx0XHRcdGRvbUVsZW1IUC5zdHlsZS5kaXNwbGF5ICA9ICdibG9jaycgO1xuXG5cdFx0XHR0aGlzLmRvbUVsZW1IUCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZG9tSWQrJ19ocCcpO1xuXG5cdFx0XHR0aGlzLnJlbmRlckhQLmNhbGwodGhpcyk7XG5cdFx0fSxcblxuXHRcdHJlbmRlckhQIDogZnVuY3Rpb24gKCkge1xuXHRcdFx0ZG9tRWxlbUhQID0gdGhpcy5kb21FbGVtSFAgO1xuXHRcdFx0dmFyIGxlZnQgPSBwYXJzZUludCh0aGlzLnBvc2l0aW9uLngrKHBhcnNlSW50KCh0aGlzLmRvbUVsZW1XaWR0aC0oMip0aGlzLmRlbHRhc2hvdy54KSkvMiktcGFyc2VJbnQodGhpcy5uYW1lV2lkdGgvMikpKTtcblx0XHRcdHZhciB0b3AgPSBwYXJzZUludCh0aGlzLnBvc2l0aW9uLnktNik7XG5cdFx0XHR2YXIgdHJhbnNsYXRpb24gPSBcInRyYW5zbGF0ZTNkKFwiK2xlZnQrXCJweCxcIit0b3ArXCJweCwwcHgpXCI7XG5cdFx0XHRkb21FbGVtSFAuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNsYXRpb247XG5cdFx0XHRkb21FbGVtSFAuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNsYXRpb247XG5cdFx0XHRkb21FbGVtSFAuc3R5bGUud2lkdGggPSAoKHRoaXMuSFAvdGhpcy5tYXhIUCkgKiB0aGlzLm5hbWVXaWR0aCkrJ3B4Jztcblx0XHR9LFxuXG5cdFx0cmVuZGVyTmFtZSA6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGRvbV9lbGVtX25hbWUgPSB0aGlzLmRvbUVsZW1OYW1lIDtcblx0XHRcdHZhciBsZWZ0ID0gcGFyc2VJbnQodGhpcy5wb3NpdGlvbi54KyhwYXJzZUludCgodGhpcy5kb21FbGVtV2lkdGgtKDIqdGhpcy5kZWx0YXNob3cueCkpLzIpLXBhcnNlSW50KHRoaXMubmFtZVdpZHRoLzIpKSk7XG5cdFx0XHR2YXIgdG9wID0gcGFyc2VJbnQodGhpcy5wb3NpdGlvbi55LXRoaXMubmFtZUhlaWdodC02KTtcblx0XHRcdHZhciB0cmFuc2xhdGlvbiA9IFwidHJhbnNsYXRlM2QoXCIrbGVmdCtcInB4LFwiK3RvcCtcInB4LDBweClcIjtcblx0XHRcdGRvbV9lbGVtX25hbWUuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNsYXRpb247XG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zbGF0aW9uO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBTcGVha2VyXG5cdFx0ICovXG5cdFx0aW5pdFNwZWFrZXIgOiBmdW5jdGlvbiAocmVhZG9ubHkpIHtcblx0XHRcdHRoaXMuc3BlYWtlciA9IG5ldyBkZWltb3MuZWxlbWVudC5TcGVha2VyKHRoaXMuZG9tSWQsIHJlYWRvbmx5KSA7XG5cdFx0XHR0aGlzLnNwZWFrZXIuaW5pdCgpO1xuXHRcdH0sXG5cblx0XHRyZW5kZXJTcGVha2VyIDogZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5zcGVha2VyLnJlbmRlcih0aGlzLnBvc2l0aW9uLnggLSA1MCAsdGhpcy5wb3NpdGlvbi55IC0gNzQpO1xuXHRcdH0sXG5cblx0XHRzZXRTcGVha2luZyA6IGZ1bmN0aW9uIChib29sKSB7XG5cdFx0XHR0aGlzLnNwZWFraW5nID0gYm9vbCA7XG5cdFx0XHRpZihib29sKSB7XG5cdFx0XHRcdHRoaXMucmVuZGVyU3BlYWtlcigpO1xuXHRcdFx0XHR0aGlzLnNwZWFrZXIuc2hvdygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5sYXN0U2F5ZWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHRcdFx0dGhpcy5zcGVha2VyLmxlYXZlRm9jdXMoKTtcblx0XHRcdFx0aWYodGhpcy5zYXlpbmcubGVuZ3RoID09PSAwKSB0aGlzLnNwZWFrZXIuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRpc0F0dGFja2luZyA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0ISF0aGlzLmF0dGFjayAmJiAvL2lmIGhhcyBhdHRhY2sgXG5cdFx0XHRcdCh0aGlzLmxhc3RBdHRhY2sgKyB0aGlzLmF0dGFja1JhdGUgPiBuZXcgRGF0ZSgpLmdldFRpbWUoKSkgLy9hbmQgYXR0YWNrIGluIHRpbWVyXG5cdFx0XHQpO1xuXHRcdH0sXG5cblx0XHRhdHRhY2sgOiBmdW5jdGlvbih3aGljaE9uZSkge1xuXHRcdFx0aWYoIXdoaWNoT25lKSB7XG5cdFx0XHRcdGlmKCF0aGlzLmlzQXR0YWNraW5nKCkpIHtcblx0XHRcdFx0XHR0aGlzLmxhc3RBdHRhY2sgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHRcdFx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdFx0XHRcdHZhciBtZXNzYWdlID0ge307XG5cdFx0XHRcdFx0bWVzc2FnZVtfdFsnQUNUSU9OJ11dID0gX3RbJ0FDVElPTl9BVFRBQ0snXTtcblx0XHRcdFx0XHRtZXNzYWdlW190WydNRVNTQUdFJ11dID0ge307XG5cdFx0XHRcdFx0bWVzc2FnZVtfdFsnTUVTU0FHRSddXVtfdFsnTUVTU0FHRV9ESVJFQ1RJT04nXV0gPSB0aGlzLm9yaWVudGVkO1xuXHRcdFx0XHRcdG1lc3NhZ2VbX3RbJ01FU1NBR0UnXV1bX3RbJ01FU1NBR0VfUE9TSVRJT04nXV0gPSB7fTtcblx0XHRcdFx0XHRtZXNzYWdlW190WydNRVNTQUdFJ11dW190WydNRVNTQUdFX1BPU0lUSU9OJ11dLnggPSBwYXJzZUludCh0aGlzLnBvc2l0aW9uLngpO1xuXHRcdFx0XHRcdG1lc3NhZ2VbX3RbJ01FU1NBR0UnXV1bX3RbJ01FU1NBR0VfUE9TSVRJT04nXV0ueSA9IHBhcnNlSW50KHRoaXMucG9zaXRpb24ueSk7XG5cdFx0XHRcdFx0ZGVpbW9zLkVuZ2luZS5uZXR3b3JrTWFuYWdlci5zZW5kTWVzc2FnZShtZXNzYWdlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRMb2cuaW5mbygnSGF2ZSB0byB3YWl0Jyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRMb2cuZXJyb3IoJ09ubHkgbWFpbiBhdHRhY2sgaXMgaW1wbGVtZW50ZWQnKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0dG91Y2hlZDogZnVuY3Rpb24oZWxlbWVudENvbGxpc2lvbikge1xuXHRcdFx0dmFyIGRhbWFnZSA9IGVsZW1lbnRDb2xsaXNpb24uZGFtYWdlO1xuXHRcdFx0aWYoaXNGaW5pdGUoZGFtYWdlKSkge1xuXHRcdFx0XHR0aGlzLkhQIC09IGRhbWFnZTtcblx0XHRcdFx0dGhpcy5yZW5kZXJIUCgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRkaWU6IGZ1bmN0aW9uKGVsZW1lbnRDb2xsaXNpb24pIHtcblx0XHRcdHRoaXMuZGVzdHJveSgpO1xuXHRcdH0sXG5cblx0XHRjbGVhbkRvbTogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLnVuYmluZEV2ZW50KCk7XG5cdFx0XHRpZighIXRoaXMuc3BlYWtlcikgdGhpcy5jbGVhbkRvbVNwZWFrZXIoKTtcblx0XHRcdGlmKHRoaXMuZG9tRWxlbUhQKSB0aGlzLmNsZWFuRG9tSFAoKTtcblx0XHRcdGlmKHRoaXMuZG9tRWxlbU5hbWUpIHRoaXMuY2xlYW5Eb21OYW1lKCk7XG5cdFx0XHRpZih0aGlzLmRvbUVsZW0pIHRoaXMuY2xlYW5Eb21FbGVtKCk7XG5cdFx0fSxcblxuXHRcdGNsZWFuRG9tRWxlbSA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5vZGVBdmF0YXIgPSB0aGlzLmRvbUVsZW07XG5cdFx0XHR2YXIgcGFyZW50Tm9kZSA9IG5vZGVBdmF0YXIucGFyZW50Tm9kZTtcblx0XHRcdGlmKHBhcmVudE5vZGUpIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZUF2YXRhcik7XG5cdFx0fSxcblxuXHRcdGNsZWFuRG9tTmFtZSA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGRvbV9lbGVtX25hbWUgPSB0aGlzLmRvbUVsZW1OYW1lIDtcblx0XHRcdHZhciBwYXJlbnROb2RlID0gZG9tX2VsZW1fbmFtZS5wYXJlbnROb2RlO1xuXHRcdFx0aWYocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb21fZWxlbV9uYW1lKTtcblx0XHR9LFxuXG5cdFx0Y2xlYW5Eb21IUCA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGRvbV9lbGVtX2hwID0gdGhpcy5kb21FbGVtSFAgO1xuXHRcdFx0dmFyIHBhcmVudE5vZGUgPSBkb21fZWxlbV9ocC5wYXJlbnROb2RlO1xuXHRcdFx0aWYocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkb21fZWxlbV9ocCk7XG5cdFx0fSxcblxuXHRcdGNsZWFuRG9tU3BlYWtlciA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHNwZWFraW5nQm94ID0gdGhpcy5zcGVha2VyLmRvbUVsZW07XG5cdFx0XHR2YXIgcGFyZW50Tm9kZSA9IHNwZWFraW5nQm94LnBhcmVudE5vZGU7XG5cdFx0XHRpZihwYXJlbnROb2RlKSBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNwZWFraW5nQm94KTtcblx0XHR9XG5cdH1cblxufSkob3JnLmRieXplcm8uZGVpbW9zLCBkb2N1bWVudCk7IiwiLyoqXG4gKlxuICogU3BlYWtlciBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxMy8wOC8yOVxuICogQGRlc2NyaXB0aW9uIDogU3BlYWtlciBtb2RlbFxuICpcbiAqKi9cblxuKGZ1bmN0aW9uKGRlaW1vcyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblxuXHRkZWltb3MuZWxlbWVudCA9IGRlaW1vcy5lbGVtZW50IHx8IHt9IDtcblxuXHQvKioqXG5cdCAqIFNwZWFrZXIgY29uc3RydWN0b3Jcblx0ICogXG5cdCAqKi9cblx0ZGVpbW9zLmVsZW1lbnQuU3BlYWtlciA9IGZ1bmN0aW9uIChhdklkLCByZWFkb25seSkge1xuXHRcdHRoaXMuaWQgPSAnc3BlYWtlcl8nICsgYXZJZCArICdfJyArIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkqMTAwMDAwMCkrMSk7XG5cdFx0dGhpcy5yZWFkb25seSA9IHJlYWRvbmx5O1xuXHR9XG5cblxuXHRkZWltb3MuZWxlbWVudC5TcGVha2VyLnByb3RvdHlwZSA9IHtcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBnYW1lem9uZSA9IGRlaW1vcy5FbmdpbmUuem9uZS5hcmVhIDtcblx0XHRcdFx0XG5cdFx0XHQvL21ha2UgZG9tIGVsZW1lbnRcblx0XHRcdHZhciBkb21fZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0XHRkb21fZWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwic3BlYWtlclwiKSA7XG5cdFx0XHRkb21fZWxlbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLHRoaXMuaWQpIDtcblx0XHRcdC8vZG9tX2VsZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCcgO1xuXG5cdFx0XHRpZih0aGlzLnJlYWRvbmx5KSB7XG5cdFx0XHRcdGRvbV9lbGVtLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICcwcHggLTEwMHB4JyA7XG5cdFx0XHR9XG5cdFx0XHR2YXIgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIikgO1xuXHRcdFx0aWYodGhpcy5yZWFkb25seSkge1xuXHRcdFx0XHR0ZXh0QXJlYS5yZWFkT25seSA9IHRydWU7IFxuXHRcdFx0fVxuXHRcdFx0ZG9tX2VsZW0uYXBwZW5kQ2hpbGQodGV4dEFyZWEpIDtcblx0XHRcdGdhbWV6b25lLmFwcGVuZENoaWxkKGRvbV9lbGVtKSA7XG5cdFx0XHR0aGlzLmRvbUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcblx0XHR9LFxuXG5cdFx0Z2V0VGV4dDogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZG9tRWxlbSA9IHRoaXMuZG9tRWxlbTtcblx0XHRcdHJldHVybiBkb21FbGVtLmNoaWxkTm9kZXNbMF0udmFsdWUgO1xuXHRcdH0sXG5cblx0XHRzZXRUZXh0OiBmdW5jdGlvbih0eHQpIHtcblx0XHRcdHZhciBkb21FbGVtID0gdGhpcy5kb21FbGVtO1xuXHRcdFx0ZG9tRWxlbS5jaGlsZE5vZGVzWzBdLnZhbHVlID0gdHh0O1xuXHRcdH0sXG5cblx0XHRzaG93OiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkb21FbGVtID0gIHRoaXMuZG9tRWxlbTtcblx0XHRcdGRvbUVsZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHRpZih0aGlzLnJlYWRvbmx5ICE9PSB0cnVlKVxuXHRcdFx0e1xuXHRcdFx0XHRkb21FbGVtLmNoaWxkTm9kZXNbMF0uZm9jdXMoKSA7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGRvbUVsZW0gPSAgdGhpcy5kb21FbGVtO1xuXHRcdFx0ZG9tRWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0ZG9tRWxlbS5jaGlsZE5vZGVzWzBdLnZhbHVlID0gJyc7XG5cdFx0XHRpZih0aGlzLnJlYWRvbmx5ICE9PSB0cnVlKVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLmxlYXZlRm9jdXMoKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bGVhdmVGb2N1czogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZG9tRWxlbSA9ICB0aGlzLmRvbUVsZW07XG5cdFx0XHRkb21FbGVtLmNoaWxkTm9kZXNbMF0uYmx1cigpIDtcblx0XHR9LFxuXG5cdFx0cmVuZGVyOiBmdW5jdGlvbih4LHkpIHtcblx0XHRcdHZhciBkb21FbGVtID0gIHRoaXMuZG9tRWxlbTtcblx0XHRcdHZhciB0cmFuc2xhdGlvbiA9IFwidHJhbnNsYXRlM2QoXCIreCtcInB4LFwiK3krXCJweCwwcHgpXCI7XG5cdFx0XHRkb21FbGVtLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zbGF0aW9uO1xuXHRcdFx0ZG9tRWxlbS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2xhdGlvbjtcblx0XHR9XG5cdH1cblxufSkob3JnLmRieXplcm8uZGVpbW9zLCBkb2N1bWVudCk7IiwiLyoqXG4gKlxuICogQXZhdGFyIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA4LzA5XG4gKiBAZGVzY3JpcHRpb24gOiBBdmF0YXIgbW9kZWxcbiAqXG4gKiovXG5cbihmdW5jdGlvbihkZWltb3MsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0dmFyIEV2ZW50TWFuYWdlciA9IG9yZy5kYnl6ZXJvLnRvb2xzLkV2ZW50TWFuYWdlcjtcblx0ZGVpbW9zLmVsZW1lbnQgPSBkZWltb3MuZWxlbWVudCB8fCB7fSA7XG5cblx0LyoqXG5cdCAqIEF2YXRhciBjb25zdHJ1Y3RvclxuXHQgKlxuXHQgKiovXG5cdHZhciBBdmF0YXIgPSBkZWltb3MuZWxlbWVudC5BdmF0YXIgPSBmdW5jdGlvbiAobmFtZSxwb3NpdGlvbixzaXplLHNlcnZlcmlkLGRlbHRhc2hvdyxtYXNzKSB7XG5cdFx0QXZhdGFyLl9zdXBlci5jYWxsKHRoaXMscG9zaXRpb24sc2l6ZSxzZXJ2ZXJpZCxkZWx0YXNob3cpO1xuXHRcdHRoaXMuZG9tSWQgPSAnYXZhdGFyXycgKyBzZXJ2ZXJpZCArICdfJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgJ18nICsgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSoxMDAwMDAwKSsxKTsgO1xuXHRcdHRoaXMuc3BlYWtpbmcgPSBmYWxzZSA7XG5cdFx0dGhpcy5zcGVha2VyID0gbnVsbDtcblx0XHR0aGlzLm1vdmVfc3BlZWQgPSAwO1xuXHRcdHRoaXMuanVtcF9zcGVlZCA9IDA7XG5cdFx0dGhpcy5zYXlpbmcgPSBcIlwiO1xuXHRcdHRoaXMubGFzdFNheWVkID0gMDtcblx0XHR0aGlzLndhaXRpbmdGb3JjZSA9IFtdO1xuXHRcdHRoaXMudXNlcklucHV0cyA9IHt9O1xuXHRcdHRoaXMuaXRlbV9zbG90X2hlYWQgPSBudWxsO1xuXHRcdHRoaXMuaXRlbV9zbG90X2Zvb3QgPSBudWxsO1xuXHRcdHRoaXMuaXRlbV9zbG90X2NoZXN0ID0gbnVsbDtcblx0XHR0aGlzLml0ZW1fc2xvdF9sZWZ0X2hhbmQgPSBudWxsO1xuXHRcdHRoaXMuaXRlbV9zbG90X3JpZ2h0X2hhbmQgPSBudWxsO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5tYXNzID0gbWFzcztcblx0XHQvL29iamVjdCBjb2xsaXNpb25zIGFyZSBtYW5hZ2VkIGJ5IHNlcnZlclxuXHRcdC8vIHRoaXMuY29sbGlzaW9uVHlwZUVuYWJsZWRbJ2JvbnVzJ10gPSB0cnVlO1xuXHR9XG5cblx0b3JnLmRieXplcm8udG9vbHMuSW5oZXJpdChkZWltb3MuZWxlbWVudC5BdmF0YXIsIGRlaW1vcy5lbGVtZW50LkVsZW1lbnQpO1xuXG5cdGRlaW1vcy5lbGVtZW50LkF2YXRhci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCl7XG5cdFx0QXZhdGFyLl9zdXBlci5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xuXG5cdFx0Ly9zZXQgc3ByaXRlc2hlZXRcblx0XHR0aGlzLmRvbUVsZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIrZGVpbW9zLkVuZ2luZS5hc3NldFVSTCtcIi9zcHJpdGVzaGVldC9jaGFyL1wiK3RoaXMuc2VydmVyaWQrXCIvc3ByaXRlc2hlZXQucG5nKVwiO1xuXG5cdFx0Ly9hZGQgc3BlYWtlclxuXHRcdHRoaXMuaW5pdFNwZWFrZXIoZmFsc2UpO1xuXG5cdFx0Ly9ldmVudHNcblx0XHR0aGlzLmJpbmRFdmVudCgpO1xuXG5cdFx0Ly9zaG93IG1haW4gbmFtZVxuXHRcdHRoaXMuaW5pdE5hbWUodHJ1ZSk7XG5cblx0XHQvL3JlZHJhdyBIUCB0byBhcHBseSBjb3JyZWN0IG5hbWUgd2lkdGhcblx0XHR0aGlzLnJlbmRlckhQKCk7XG5cblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50LkF2YXRhci5wcm90b3R5cGUuYmluZEV2ZW50ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblxuXHRcdC8vYmluZCBzcGVlayBldmVudFxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3RlcihcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIuc3BlYWtcIiwoZnVuY3Rpb24oZSl7XG5cdFx0XHR0aGlzLnNldFNwZWFraW5nKHRydWUpIDtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSkuYmluZCh0aGlzKSk7XG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLnNwZWFrLnN0b3BcIiwoZnVuY3Rpb24oKXtcblx0XHRcdHRoaXMuc2V0U3BlYWtpbmcoZmFsc2UpIDtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSkuYmluZCh0aGlzKSk7XG5cblx0XHQvL2JpbmQgbW92ZW1lbnQgZXZlbnRcblxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3RlcihcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIubW92ZS5sZWZ0XCIsKGZ1bmN0aW9uKGUpe1xuXHRcdFx0dmFyIGZvcmNlID0gbmV3IGRlaW1vcy5waHlzaWMuVXNlck1vdmVtZW50KFxuXHRcdFx0XHRuZXcgb3JnLmRieXplcm8udG9vbHMuVmVjdG9yKC0xICogdGhpcy5tb3ZlX3NwZWVkLDApLFxuXHRcdFx0XHRfdFsnTEVGVCddXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy5hZGRVc2VySW5wdXRzKGZvcmNlKTtcblx0XHRcdHRoaXMuc2VuZEFjdGlvbk1lc3NhZ2UoX3RbJ0FDVElPTl9NT1ZFX1NUQVJUJ10sZm9yY2UpO1xuXHRcdFx0dGhpcy5vcmllbnRlZCA9ICdsZWZ0Jztcblx0XHR9KS5iaW5kKHRoaXMpKTtcblxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3RlcihcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIubW92ZS5yaWdodFwiLChmdW5jdGlvbihlKXtcblx0XHRcdHZhciBmb3JjZSA9IG5ldyBkZWltb3MucGh5c2ljLlVzZXJNb3ZlbWVudChcblx0XHRcdFx0bmV3IG9yZy5kYnl6ZXJvLnRvb2xzLlZlY3Rvcih0aGlzLm1vdmVfc3BlZWQsMCksXG5cdFx0XHRcdF90WydSSUdIVCddXG5cdFx0XHQpO1xuXHRcdFx0dGhpcy5hZGRVc2VySW5wdXRzKGZvcmNlKTtcblx0XHRcdHRoaXMuc2VuZEFjdGlvbk1lc3NhZ2UoX3RbJ0FDVElPTl9NT1ZFX1NUQVJUJ10sZm9yY2UpO1xuXHRcdFx0dGhpcy5vcmllbnRlZCA9ICdyaWdodCc7XG5cdFx0fSkuYmluZCh0aGlzKSk7XG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLm1vdmUubGVmdC5zdG9wXCIsKGZ1bmN0aW9uKGUpe1xuXHRcdFx0dGhpcy5yZW1vdmVVc2VySW5wdXRzKF90WydMRUZUJ10pO1xuXHRcdH0pLmJpbmQodGhpcykpO1xuXG5cdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5tb3ZlLnJpZ2h0LnN0b3BcIiwoZnVuY3Rpb24oZSl7XG5cdFx0XHR0aGlzLnJlbW92ZVVzZXJJbnB1dHMoX3RbJ1JJR0hUJ10pO1xuXHRcdH0pLmJpbmQodGhpcykpO1xuXG5cdFx0Ly9iaW5kIGp1bXAgZXZlbnRcblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLmp1bXBcIiwoZnVuY3Rpb24oZSl7XG5cdFx0XHRpZighdGhpcy5pc0xhbmRlZCA9PSBmYWxzZSAmJiB0aGlzLnNwZWFraW5nID09IGZhbHNlKSB7XG5cdFx0XHRcdHZhciBmb3JjZSA9IG5ldyBkZWltb3MucGh5c2ljLlVzZXJNb3ZlbWVudChcblx0XHRcdFx0XHRuZXcgb3JnLmRieXplcm8udG9vbHMuVmVjdG9yKDAscGFyc2VJbnQoJy0nK3RoaXMuanVtcF9zcGVlZCkpLFxuXHRcdFx0XHRcdF90WydKVU1QJ11cblx0XHRcdFx0KTtcblx0XHRcdFx0dGhpcy5hZGRGb3JjZU5leHRTdGVwKGZvcmNlLm1vdmVtZW50KSA7XG5cdFx0XHRcdHRoaXMuc2VuZEFjdGlvbk1lc3NhZ2UoX3RbJ0FDVElPTl9KVU1QJ10sZm9yY2UpO1xuXG5cdFx0XHR9XG5cdFx0fSkuYmluZCh0aGlzKSk7XG5cblx0XHRFdmVudE1hbmFnZXIucmVnaXN0ZXIoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLmdvLmRvd25cIiwoZnVuY3Rpb24oZSl7XG5cdFx0XHR0aGlzLmdvaW5nRG93biA9IHRydWU7XG5cdFx0XHR0aGlzLnVubGFuZGVkKCk7XG5cdFx0XHR0aGlzLnNlbmRBY3Rpb25NZXNzYWdlKF90WydBQ1RJT05fR09JTkdfRE9XTiddKTtcblx0XHR9KS5iaW5kKHRoaXMpKTtcblxuXHRcdEV2ZW50TWFuYWdlci5yZWdpc3RlcihcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIuZ28uZG93bi5zdG9wXCIsKGZ1bmN0aW9uKGUpe1xuXHRcdFx0dGhpcy5nb2luZ0Rvd24gPSBmYWxzZTtcblx0XHRcdHRoaXMuc2VuZEFjdGlvbk1lc3NhZ2UoX3RbJ0FDVElPTl9HT0lOR19ET1dOX1NUT1AnXSk7XG5cdFx0fSkuYmluZCh0aGlzKSk7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5BdmF0YXIucHJvdG90eXBlLnVuYmluZEV2ZW50ID0gZnVuY3Rpb24oKSB7XG5cdFx0Ly9iaW5kIHNwZWVrIGV2ZW50XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLnNwZWFrXCIpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5zcGVha1wiKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3RlcihcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIubW92ZS5sZWZ0LnN0b3BcIik7XG5cdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoXCJvcmcuZGJ5emVyby5kZWltb3MuYXZhdGFyLm1vdmUucmlnaHQuc3RvcFwiKTtcblx0XHRFdmVudE1hbmFnZXIudW5yZWdpc3RlcihcIm9yZy5kYnl6ZXJvLmRlaW1vcy5hdmF0YXIubW92ZS5sZWZ0XCIpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5tb3ZlLnJpZ2h0XCIpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5qdW1wXCIpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5nby5kb3duXCIpO1xuXHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKFwib3JnLmRieXplcm8uZGVpbW9zLmF2YXRhci5nby5kb3duLnN0b3BcIik7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5BdmF0YXIucHJvdG90eXBlLnNlbmRBY3Rpb25NZXNzYWdlID0gZnVuY3Rpb24odHlwZSwgZm9yY2UpIHtcblx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdHZhciBtZXNzYWdlID0ge307XG5cdFx0bWVzc2FnZVtfdFsnQUNUSU9OJ11dID0gdHlwZTtcblx0XHRtZXNzYWdlW190WydNRVNTQUdFJ11dID0ge307XG5cdFx0aWYoZm9yY2UgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0bWVzc2FnZVtfdFsnTUVTU0FHRSddXVtfdFsnTUVTU0FHRV9NT1ZFX0lEJ11dID0gZm9yY2UuaWQ7XG5cdFx0XHRtZXNzYWdlW190WydNRVNTQUdFJ11dW190WydNRVNTQUdFX01PVkVfVFlQRSddXSA9IGZvcmNlLnR5cGU7XG5cdFx0XHRtZXNzYWdlW190WydNRVNTQUdFJ11dW190WydNRVNTQUdFX01PVkVfU1RBUlQnXV0gPSBmb3JjZS5zdGFydFRpbWVzdGFtcDtcblx0XHRcdG1lc3NhZ2VbX3RbJ01FU1NBR0UnXV1bX3RbJ01FU1NBR0VfRFVSQVRJT04nXV0gPSBmb3JjZS5kdXJhdGlvbjtcblx0XHR9XG5cdFx0bWVzc2FnZVtfdFsnTUVTU0FHRSddXVtfdFsnTUVTU0FHRV9QT1NJVElPTiddXSA9IHt9O1xuXHRcdG1lc3NhZ2VbX3RbJ01FU1NBR0UnXV1bX3RbJ01FU1NBR0VfUE9TSVRJT04nXV0ueCA9IHBhcnNlSW50KHRoaXMucG9zaXRpb24ueCk7XG5cdFx0bWVzc2FnZVtfdFsnTUVTU0FHRSddXVtfdFsnTUVTU0FHRV9QT1NJVElPTiddXS55ID0gcGFyc2VJbnQodGhpcy5wb3NpdGlvbi55KTtcblx0XHRkZWltb3MuRW5naW5lLm5ldHdvcmtNYW5hZ2VyLnNlbmRNZXNzYWdlKG1lc3NhZ2UpO1xuXHR9XG5cblx0Ly9hZGRpbmcgdXNlciBrZXlib2FyZCAob3Igb3RoZXIgaW5wdXQgPykgZXZlbnRzXG5cdGRlaW1vcy5lbGVtZW50LkF2YXRhci5wcm90b3R5cGUuYWRkVXNlcklucHV0cyA9IGZ1bmN0aW9uKG12dCkge1xuXHRcdHRoaXMudXNlcklucHV0c1ttdnQuaWRdID0gbXZ0IDtcblx0fVxuXG5cblx0Ly9yZW1vdmluZyB1c2VyIGtleWJvYXJkIChvciBvdGhlciBpbnB1dCA/KSBldmVudHNcblx0ZGVpbW9zLmVsZW1lbnQuQXZhdGFyLnByb3RvdHlwZS5yZW1vdmVVc2VySW5wdXRzID0gZnVuY3Rpb24odHlwZSkge1xuXHRcdGZvcihpZCBpbiB0aGlzLnVzZXJJbnB1dHMpIHtcblx0XHRcdHZhciBpbnB1dCA9IHRoaXMudXNlcklucHV0c1tpZF07XG5cdFx0XHRpZihpbnB1dC50eXBlID09PSB0eXBlKSB7XG5cdFx0XHRcdGlucHV0LmR1cmF0aW9uID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSBpbnB1dC5zdGFydFRpbWVzdGFtcDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvL2FkZGluZyBmb3JjZSBuZXh0IHN0ZXBcblx0ZGVpbW9zLmVsZW1lbnQuQXZhdGFyLnByb3RvdHlwZS5hZGRGb3JjZU5leHRTdGVwID0gZnVuY3Rpb24oZm9yY2UpIHtcblx0XHR0aGlzLndhaXRpbmdGb3JjZS5wdXNoKGZvcmNlKSA7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5BdmF0YXIucHJvdG90eXBlLmFkZGluZ1dhaXRpbmdGb3JjZXMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgZm9yY2VzID0gdGhpcy53YWl0aW5nRm9yY2U7XG5cdFx0Zm9yKGZvcmNlIGluIGZvcmNlcykge1xuXHRcdFx0dGhpcy52ZWxvY2l0eS5hZGQoZm9yY2VzW2ZvcmNlXSk7XG5cdFx0XHR0aGlzLndhaXRpbmdGb3JjZS5zcGxpY2UoMCwxKTtcblx0XHR9XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5BdmF0YXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGR0LCBub3cpIHtcblxuXHRcdC8vdG9nZ2xlIHNwZWFrZXIgaWYgbmVlZGVkXG5cdFx0aWYodGhpcy5zcGVha2luZykge1xuXHRcdFx0dmFyIG5ld19zYXlpbmcgPSB0aGlzLmdldFNheWluZygpO1xuXHRcdFx0aWYodGhpcy5zYXlpbmcgIT09IG5ld19zYXlpbmcpIHtcblx0XHRcdFx0dGhpcy5zYXlpbmcgPSBuZXdfc2F5aW5nO1xuXHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZSgnb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc2VuZFN5bmMnKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYodGhpcy5sYXN0U2F5ZWQgKyA1MDAwIDwgbm93ICYmIHRoaXMuc2F5aW5nICE9PSAnJykge1xuXHRcdFx0XHR0aGlzLnNwZWFrZXIuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLnNwZWFrZXIuc2V0VGV4dCgnJyk7XG5cdFx0XHRcdHRoaXMuc2F5aW5nID0gJyc7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zZW5kU3luYycpO1xuXHRcdFx0fSBcblx0XHR9XG5cblx0XHQvL2NhbGwgcGFyZW50IHVwZGF0ZVxuXHRcdEF2YXRhci5fc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMsZHQsbm93KTtcblxuXHRcdC8vYWRkaW5nIHVzZXIgYWN0aW9uIHRocm91Z2gga2V5Ym9hcmQgdG8gdGhlIG1vdmVtZW50XG5cdFx0Zm9yKGlkIGluIHRoaXMudXNlcklucHV0cykge1xuXHRcdFx0dmFyIGlucHV0ID0gdGhpcy51c2VySW5wdXRzW2lkXTtcblx0XHRcdHRoaXMudG9Nb3ZlLnggKz0gcGFyc2VGbG9hdChpbnB1dC5tb3ZlbWVudC54ICogZHQvMTAwMCAqIE1hdGgubWluKDEsaW5wdXQuZHVyYXRpb25JbnRlZ3JhdGVkLzEwMCkpOy8vdG8gbWFrZSBwb3NzaWJsZSBzbWFsbCBtdnRcblx0XHRcdHRoaXMudG9Nb3ZlLnkgKz0gcGFyc2VGbG9hdChpbnB1dC5tb3ZlbWVudC55ICogZHQvMTAwMCk7XG5cdFx0XHRpbnB1dC5kdXJhdGlvbkludGVncmF0ZWQgPSBpbnB1dC5kdXJhdGlvbkludGVncmF0ZWQgKyBkdDtcblxuXG5cdFx0XHQvL2ZpbmlzaCB0aGUgaW50ZXJwb2xhdGlvblxuXHRcdFx0aWYoaW5wdXQuZHVyYXRpb24gIT09IG51bGwpIHtcblx0XHRcdFx0Ly9zaSBvbiBhIHRyb3AgaW50ZWdyZXIsIG9uIGNoYW5nZSBsZSB0b3RhbCBpbnRlZ3JlciBhIGxhIGwnaW50ZWdyYXRpb24gcmVlbFxuXHRcdFx0XHQvL3BvdXIgbmUgcGFzIGZhaXJlIGRlIHJldG91clxuXHRcdFx0XHRpbnB1dC5kdXJhdGlvbiA9IE1hdGgubWF4KGlucHV0LmR1cmF0aW9uSW50ZWdyYXRlZCxpbnB1dC5kdXJhdGlvbik7XG5cdFx0XHRcdHZhciBtaXNzaW5nSW50ZWdyYXRpb24gPSBpbnB1dC5kdXJhdGlvbiAtIGlucHV0LmR1cmF0aW9uSW50ZWdyYXRlZDtcblxuXHRcdFx0XHR0aGlzLnRvTW92ZS54ICs9IHBhcnNlRmxvYXQoKGlucHV0Lm1vdmVtZW50LnggKiBtaXNzaW5nSW50ZWdyYXRpb24vMTAwMCkpO1xuXHRcdFx0XHR0aGlzLnRvTW92ZS55ICs9IHBhcnNlRmxvYXQoKGlucHV0Lm1vdmVtZW50LnkgKiBtaXNzaW5nSW50ZWdyYXRpb24vMTAwMCkpO1xuXG5cdFx0XHRcdHRoaXMuc2VuZEFjdGlvbk1lc3NhZ2UoZGVpbW9zLkVuZ2luZS5fdFsnQUNUSU9OX01PVkVfU1RPUCddLGlucHV0KTtcblx0XHRcdFx0ZGVsZXRlIHRoaXMudXNlcklucHV0c1tpZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuQXZhdGFyLnByb3RvdHlwZS5vbk1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRBdmF0YXIuX3N1cGVyLnByb3RvdHlwZS5vbk1vdmUuY2FsbCh0aGlzKTtcblx0XHR0aGlzLnJlbmRlck5hbWUoKTtcblx0XHR0aGlzLnJlbmRlclNwZWFrZXIoKTtcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50LkF2YXRhci5wcm90b3R5cGUub25KdXN0TGFuZCA9IGZ1bmN0aW9uKCkge1xuXHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc2VuZFN5bmNcIik7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5BdmF0YXIucHJvdG90eXBlLm9uVW5sYW5kID0gZnVuY3Rpb24oKSB7XG5cdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zZW5kU3luY1wiKTtcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50LkF2YXRhci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoQXZhdGFyLl9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcykpIHtcblx0XHRcdHRoaXMucmVuZGVyTmFtZSgpO1xuXHRcdFx0dGhpcy5yZW5kZXJTcGVha2VyKCk7XG5cdFx0XHRpZighIXRoaXMuSFApIHRoaXMucmVuZGVySFAoKTtcblx0XHR9XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5BdmF0YXIucHJvdG90eXBlLmdldFNheWluZyA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0eHQgPSB0aGlzLnNwZWFrZXIuZ2V0VGV4dCgpO1xuXHRcdHR4dCA9IHR4dC5yZXBsYWNlKC88KD86LnxcXG4pKj8+L2dtLCAnJyk7XG5cdFx0dHh0ID0gdHh0LnJlcGxhY2UoLycvZ20sIFwiXFwnXCIpO1xuXHRcdHR4dCA9IHR4dC5yZXBsYWNlKC9cIi9nbSwgJ1xcXCInKTtcblx0XHR0eHQgPSB0eHQucmVwbGFjZSgvXFx7L2dtLCBcIihcIik7XG5cdFx0dHh0ID0gdHh0LnJlcGxhY2UoL1xcfS9nbSwgXCIpXCIpO1xuXHRcdHJldHVybiB0eHQ7XG5cdH07XG5cblxufSkob3JnLmRieXplcm8uZGVpbW9zLCBkb2N1bWVudCk7IiwiLyoqXG4gKlxuICogQXZhdGFyIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzXFxhc2Mgc3h6MDgvMDlcbiAqIEBkZXNjcmlwdGlvbiA6IFNlcnZlckF2YXRhciBtb2RlbFxuICpcbiAqKi9cblxuKGZ1bmN0aW9uKGRlaW1vcyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblxuXHRkZWltb3MuZWxlbWVudCA9IGRlaW1vcy5lbGVtZW50IHx8IHt9IDtcblxuXHQvKipcblx0ICogU2VydmVyQXZhdGFyIGNvbnN0cnVjdG9yXG5cdCAqXG5cdCAqKi9cblx0dmFyIFNlcnZlckF2YXRhciA9IGRlaW1vcy5lbGVtZW50LlNlcnZlckF2YXRhciA9IGZ1bmN0aW9uIChuYW1lLHBvc2l0aW9uLHZlbG9jaXR5LGFjY2VsZXJhdGlvbixzaXplLG1hc3MsdXNlcklucHV0VmVsb2NpdHksc2VydmVyaWQsZGVsdGFzaG93KSB7XG5cdFx0U2VydmVyQXZhdGFyLl9zdXBlci5jYWxsKHRoaXMscG9zaXRpb24sc2l6ZSxzZXJ2ZXJpZCxkZWx0YXNob3cpO1xuXHRcdHRoaXMuZG9tSWQgPSAnc2VydmVyX2F2YXRhcl8nICsgc2VydmVyaWQgKyAnXycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICdfJyArIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkqMTAwMDAwMCkrMSk7IDtcblx0XHR0aGlzLnVzZXJJbnB1dFZlbG9jaXR5ID0gdXNlcklucHV0VmVsb2NpdHkgO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5tYXNzID0gbWFzcztcblx0XHQvL3VzZWQgZm9yIHNtb290aCBtb3ZlXG5cdFx0dGhpcy5kdEludGVncmF0aW9uSW5wdXQgPSAwO1xuXHRcdHRoaXMubGFzdFVzZXJJbnB1dFZlbG9jaXR5WCA9IDA7XG5cdH1cblxuXHRvcmcuZGJ5emVyby50b29scy5Jbmhlcml0KGRlaW1vcy5lbGVtZW50LlNlcnZlckF2YXRhciwgZGVpbW9zLmVsZW1lbnQuRWxlbWVudCk7XG5cblx0ZGVpbW9zLmVsZW1lbnQuU2VydmVyQXZhdGFyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG5cdFx0U2VydmVyQXZhdGFyLl9zdXBlci5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xuXG5cdFx0dGhpcy5kb21FbGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiK2RlaW1vcy5FbmdpbmUuYXNzZXRVUkwrXCIvc3ByaXRlc2hlZXQvY2hhci9cIit0aGlzLnNlcnZlcmlkK1wiL3Nwcml0ZXNoZWV0LnBuZylcIjtcblxuXHRcdHRoaXMuaW5pdFNwZWFrZXIodHJ1ZSk7XG5cdFx0dGhpcy5pbml0TmFtZSgpO1xuXG5cdFx0Ly9sb2FkIHdlYXBvblxuXHRcdGlmKCEhdGhpcy5pdGVtX3Nsb3RfcmlnaHRfaGFuZCkge1xuXHRcdFx0dGhpcy5pbml0V2VhcG9uKHRoaXMuaXRlbV9zbG90X3JpZ2h0X2hhbmQuaWQpO1xuXHRcdH1cblxuXHRcdGlmKCEhdGhpcy5IUCkgdGhpcy5pbml0SFAoKTtcblx0XHQvL29iamVjdCBjb2xsaXNpb25zIGFyZSBtYW5hZ2VkIGJ5IHNlcnZlclxuXHRcdC8vIHRoaXMuY29sbGlzaW9uVHlwZUVuYWJsZWRbJ2JvbnVzJ10gPSB0cnVlO1xuXHR9O1xuXG5cdGRlaW1vcy5lbGVtZW50LlNlcnZlckF2YXRhci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZHQsbm93KSB7XG5cblx0XHRTZXJ2ZXJBdmF0YXIuX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzLGR0LG5vdyk7XG5cblx0XHRpZih0aGlzLmxhc3RVc2VySW5wdXRWZWxvY2l0eVggIT09IHRoaXMudXNlcklucHV0VmVsb2NpdHkueCkge1xuXHRcdFx0dGhpcy5kdEludGVncmF0aW9uSW5wdXQgPSAwO1xuXHRcdFx0dGhpcy5sYXN0VXNlcklucHV0VmVsb2NpdHlYID0gdGhpcy51c2VySW5wdXRWZWxvY2l0eS54O1xuXHRcdH1cblx0XHQvLyB0aGlzLnRvTW92ZS54ICs9IHBhcnNlRmxvYXQodGhpcy51c2VySW5wdXRWZWxvY2l0eS54ICogdGhpcy5kdEludGVncmF0aW9uSW5wdXQvMTAwMCkvO1xuXHRcdC8vIHRoaXMudG9Nb3ZlLnkgKz0gcGFyc2VGbG9hdCh0aGlzLnVzZXJJbnB1dFZlbG9jaXR5LnkgKiBkdC8xMDAwKS87XG5cdFx0dGhpcy50b01vdmUueCA9IHBhcnNlRmxvYXQodGhpcy50b01vdmUueCArIHRoaXMudXNlcklucHV0VmVsb2NpdHkueCAqIGR0LzEwMDAgKiBNYXRoLm1pbigxLHRoaXMuZHRJbnRlZ3JhdGlvbklucHV0LzEwMCkpOy8vdG8gbWFrZSBwb3NzaWJsZSBzbWFsbCBtdnRcblx0XHR0aGlzLnRvTW92ZS55ID0gcGFyc2VGbG9hdCh0aGlzLnRvTW92ZS55ICsgdGhpcy51c2VySW5wdXRWZWxvY2l0eS55ICogZHQvMTAwMCk7XG5cdFx0dGhpcy5kdEludGVncmF0aW9uSW5wdXQgKz0gZHQ7XG5cblx0XHR0aGlzLnNwZWFrZXIuc2V0VGV4dCh0aGlzLnNheWluZyk7XG5cdFx0aWYoIHRoaXMuc2F5aW5nLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHR0aGlzLnNwZWFrZXIuc2hvdygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNwZWFrZXIuaGlkZSgpO1xuXHRcdH1cblx0fTtcblxuXHRkZWltb3MuZWxlbWVudC5TZXJ2ZXJBdmF0YXIucHJvdG90eXBlLm9uTW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFNlcnZlckF2YXRhci5fc3VwZXIucHJvdG90eXBlLm9uTW92ZS5jYWxsKHRoaXMpO1xuXHRcdHRoaXMucmVuZGVyTmFtZSgpO1xuXHRcdHRoaXMucmVuZGVyU3BlYWtlcigpO1xuXHRcdGlmKCEhdGhpcy5IUCkgdGhpcy5yZW5kZXJIUCgpO1xuXHR9O1xuXG5cdGRlaW1vcy5lbGVtZW50LlNlcnZlckF2YXRhci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoU2VydmVyQXZhdGFyLl9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcykpXHR7XG5cdFx0XHR0aGlzLnJlbmRlck5hbWUoKTtcblx0XHRcdHRoaXMucmVuZGVyU3BlYWtlcigpO1xuXHRcdH1cblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50LlNlcnZlckF2YXRhci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdFNlcnZlckF2YXRhci5fc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcblx0XHRkZWxldGUgZGVpbW9zLkVuZ2luZS5zY2VuZS5hdmF0YXJzW3RoaXMuc2VydmVyaWRdO1xuXHR9XG5cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIG9yZy5kYnl6ZXJvLmRlaW1vcy5lbGVtZW50LkJsb2NrIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzA4LzIxXG4gKiBAZGVzY3JpcHRpb24gOiBCbG9jayBnYW1lXG4gKlxuICoqL1xuXG5cbihmdW5jdGlvbihkZWltb3MsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cdHZhciBWZWN0b3IgPSBvcmcuZGJ5emVyby50b29scy5WZWN0b3I7XG5cdGRlaW1vcy5lbGVtZW50ID0gZGVpbW9zLmVsZW1lbnQgfHwge30gO1xuXG5cdC8qKlxuXHQgKiBCbG9jayBjb25zdHJ1Y3RvblxuXHQgKiBcblx0ICogQHBhcmFtIHBvc2l0aW9uIFZlY3RvciBwb3NpdGlvbiBvZiB0aGUgYmxvY2sgaW5zaWRlIHRoZSB6b25lXG5cdCAqIEBwYXJhbSBzaXplIFZlY3RvciBzaXplIG9mIHRoZSBibG9jayBpbnNpZGUgdGhlIHpvbmVcblx0ICpcblx0ICogKi9cblx0ZGVpbW9zLmVsZW1lbnQuQmxvY2sgPSBmdW5jdGlvbihwb3NpdGlvbixzaXplLHR5cGUpIHtcblx0XHR0aGlzLnBvc2l0aW9uIFx0PSBwb3NpdGlvbiA7XG5cdFx0dGhpcy5oZWlnaHRcdD0gc2l6ZS55IDtcblx0XHR0aGlzLndpZHRoXHQ9IHNpemUueCA7XG5cdFx0dGhpcy50eXBlXHQ9IHR5cGUgO1xuXHRcdHRoaXMuaWQgPSAnYmxvY2tfJytwb3NpdGlvbi54KydfJytwb3NpdGlvbi55KydfJytzaXplLngrJ18nK3NpemUueSsnXycrTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwICsgMSkgO1xuXHRcdHRoaXMudmVydGV4VEwgPSBuZXcgVmVjdG9yKHBvc2l0aW9uLngsICAgICAgICAgICAgICAgICAgcG9zaXRpb24ueSk7XG5cdFx0dGhpcy52ZXJ0ZXhUUiA9IG5ldyBWZWN0b3IocG9zaXRpb24ueCArIHNpemUueCwgICAgICAgICBwb3NpdGlvbi55KTtcblx0XHR0aGlzLnZlcnRleEJMID0gbmV3IFZlY3Rvcihwb3NpdGlvbi54LCAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgKyBzaXplLnkpO1xuXHRcdHRoaXMudmVydGV4QlIgPSBuZXcgVmVjdG9yKHBvc2l0aW9uLnggKyBzaXplLngsICAgICAgICAgcG9zaXRpb24ueSArIHNpemUueSk7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5CbG9jay50eXBlID0ge1xuXHRcdEJMT0NLIDoge3ZhbHVlOiAwLCB0eXBlOidibG9jayd9LFxuXHRcdFBMQVRFRk9STSA6IHt2YWx1ZTogMSwgdHlwZToncGxhdGVmb3JtJ30sXG5cdH1cblxufSkob3JnLmRieXplcm8uZGVpbW9zLCBkb2N1bWVudCk7IiwiLyoqXG4gKlxuICogb3JnLmRieXplcm8uZGVpbW9zLmVsZW1lbnQuWm9uZSBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxMy8wOC8wNFxuICogQGRlc2NyaXB0aW9uIDogWm9uZSBnYW1lXG4gKlxuICoqL1xuXG5cbihmdW5jdGlvbihkZWltb3MsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cdGRlaW1vcy5lbGVtZW50ID0gZGVpbW9zLmVsZW1lbnQgfHwge30gO1xuXHRcblx0LyoqXG5cdCAqIFpvbmUgY29uc3RydWN0b25cblx0ICogXG5cdCAqIEBwYXJhbSBkb21JZCBkb2N1bWVudCBpZCBvZiB0aGUgZ2FtZXpvbmUsIHdoZXJlIHRoZSBhY3Rpb24gYXBwZW5kICFcblx0ICpcblx0ICogKi9cblx0ZGVpbW9zLmVsZW1lbnQuWm9uZSA9IGZ1bmN0aW9uKG5hbWUsIGRvbUlkLCB3aWR0aCwgaGVpZ2h0LCBibG9ja3MpIHtcblx0XHR0aGlzLmFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21JZCkgO1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHR0aGlzLm5hbWUgPSBuYW1lIDtcblx0XHR0aGlzLmJsb2NrcyA9IFtdIDtcblx0XHR0aGlzLmRvbUJsb2NrcyA9IFtdIDtcblx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKGJsb2Nrcyk7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYmxvY2sgPSBibG9ja3Nba2V5c1tpXV07XG5cdFx0XHR0aGlzLmFkZEJsb2NrKGJsb2NrKTtcblx0XHR9O1xuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuWm9uZS5wcm90b3R5cGUgPSB7XG5cdFx0YWRkQmxvY2tCeUlkIDogZnVuY3Rpb24oYmxvY2tJZCx0eXBlKSB7XG5cdFx0XHR2YXIgZG9tRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJsb2NrSWQpIDtcblx0XHRcdHZhciBwb3NpdGlvbiA9IG5ldyBvcmcuZGJ5emVyby50b29scy5WZWN0b3IoZG9tRWxlbS5vZmZzZXRMZWZ0LGRvbUVsZW0ub2Zmc2V0VG9wKSA7XG5cdFx0XHR2YXIgc2l6ZSA9IG5ldyBvcmcuZGJ5emVyby50b29scy5WZWN0b3IoZG9tRWxlbS5vZmZzZXRXaWR0aCxkb21FbGVtLm9mZnNldEhlaWdodCkgO1xuXG5cdFx0XHR2YXIgdHlwZSA9ICh0eXBlID09ICdwbGF0ZWZvcm1lJyA/IGRlaW1vcy5lbGVtZW50LkJsb2NrLnR5cGUuUExBVEVGT1JNIDogZGVpbW9zLmVsZW1lbnQuQmxvY2sudHlwZS5CTE9DSykgO1xuXHRcdFx0dmFyIGJsb2NrID0gbmV3IGRlaW1vcy5lbGVtZW50LkJsb2NrKHBvc2l0aW9uLHNpemUsdHlwZSkgO1xuXHRcdFx0dGhpcy5hZGRCbG9jayhibG9jaykgO1xuXHRcdH0sXG5cblx0XHRhZGRCbG9jayA6IGZ1bmN0aW9uKGJsb2NrKSB7XG5cdFx0XHR2YXIgZG9tQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGRvbUJsb2NrLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRcdGRvbUJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuXHRcdFx0ZG9tQmxvY2suc3R5bGUud2lkdGggPSBibG9jay53aWR0aCsncHgnO1xuXHRcdFx0ZG9tQmxvY2suc3R5bGUuaGVpZ2h0ID0gYmxvY2suaGVpZ2h0KydweCc7XG5cdFx0XHRkb21CbG9jay5zdHlsZS5sZWZ0ID0gYmxvY2sucG9zaXRpb24ueCsncHgnO1xuXHRcdFx0ZG9tQmxvY2suc3R5bGUudG9wID0gYmxvY2sucG9zaXRpb24ueSsncHgnO1xuXHRcdFx0ZG9tQmxvY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigxODYsIDE4NiwgMTg2KSc7XG5cdFx0XHR0aGlzLmFyZWEuYXBwZW5kQ2hpbGQoZG9tQmxvY2spO1xuXHRcdFx0dGhpcy5ibG9ja3MucHVzaChibG9jaykgO1xuXHRcdFx0dGhpcy5kb21CbG9ja3MucHVzaChkb21CbG9jaykgO1xuXHRcdH0sXG5cblx0XHRkZXN0cm95IDogZnVuY3Rpb24oYmxvY2spIHtcblx0XHRcdGNvbnNvbGUubG9nKCdkZXN0cm95aW5nIHpvbmUnKTtcblx0XHRcdHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5kb21CbG9ja3MpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBkb21CbG9jayA9IHRoaXMuZG9tQmxvY2tzW2tleXNbaV1dO1xuXHRcdFx0XHR2YXIgcGFyZW50Tm9kZSA9IGRvbUJsb2NrLnBhcmVudE5vZGU7XG5cdFx0XHRcdGlmKHBhcmVudE5vZGUpIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tQmxvY2spO1xuXHRcdFx0fTtcblx0XHRcdGRlbGV0ZSB0aGlzLmJsb2Nrcztcblx0XHRcdGRlbGV0ZSB0aGlzLmRvbUJsb2Nrcztcblx0XHR9XG5cdH1cblxufSkob3JnLmRieXplcm8uZGVpbW9zLCBkb2N1bWVudCk7IiwiLyoqXG4gKlxuICogQXZhdGFyIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDE0LzExLzA3XG4gKiBAZGVzY3JpcHRpb24gOiBQcm9qZWN0aWxlIG1vZGVsXG4gKlxuICoqL1xuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXG5cdGRlaW1vcy5lbGVtZW50ID0gZGVpbW9zLmVsZW1lbnQgfHwge30gO1xuXG5cdC8qKlxuXHQgKiBQcm9qZWN0aWxlIGNvbnN0cnVjdG9yXG5cdCAqXG5cdCAqKi9cblx0dmFyIFByb2plY3RpbGUgPSBkZWltb3MuZWxlbWVudC5Qcm9qZWN0aWxlID0gZnVuY3Rpb24gKHNlcnZlcmlkLHBvc2l0aW9uLHZlbG9jaXR5LGFjY2VsZXJhdGlvbixzaXplLG1hc3MsdGVtcGxhdGVJZCxza2luLGNvbG9yLGRhbWFnZSxvcmllbnRhdGlvbixvd25lcklkLGRlbHRhc2hvdykge1xuXHRcdFByb2plY3RpbGUuX3N1cGVyLmNhbGwodGhpcyxwb3NpdGlvbixzaXplLHNlcnZlcmlkLGRlbHRhc2hvdyk7XG5cdFx0dGhpcy5kb21JZCA9ICdwcm9qZWN0aWxlXycgKyBzZXJ2ZXJpZCArICdfJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgJ18nICsgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSoxMDAwMDAwKSsxKTsgO1xuXHRcdHRoaXMub3duZXIgPSBudWxsO1xuXHRcdHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcblx0XHR0aGlzLmFjY2VsZXJhdGlvbiA9IGFjY2VsZXJhdGlvbjtcblx0XHR0aGlzLnNraW4gPSBza2luO1xuXHRcdHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcblx0XHR0aGlzLmRhbWFnZSA9IGRhbWFnZTtcblx0XHR0aGlzLm1hc3MgPSBtYXNzO1xuXHR9XG5cblx0b3JnLmRieXplcm8udG9vbHMuSW5oZXJpdChkZWltb3MuZWxlbWVudC5Qcm9qZWN0aWxlLCBkZWltb3MuZWxlbWVudC5FbGVtZW50KTtcblxuXHRkZWltb3MuZWxlbWVudC5Qcm9qZWN0aWxlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG5cdFx0UHJvamVjdGlsZS5fc3VwZXIucHJvdG90eXBlLmluaXQuY2FsbCh0aGlzKTtcblx0XHR0aGlzLmRvbUVsZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIrZGVpbW9zLkVuZ2luZS5hc3NldFVSTCtcIi9pbWFnZXMvc3ByaXRlc2hlZXQvXCIrdGhpcy5za2luK1wiLnBuZylcIjtcblx0XHRpZih0aGlzLm9yaWVudGF0aW9uID09PSAnbGVmdCcpe1xuXHRcdFx0dGhpcy5kb21FbGVtLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkgPSAnLScrKHRoaXMuaGVpZ2h0KSsncHgnO1xuXHRcdH1cblx0XHQvL29iamVjdCBjb2xsaXNpb25zIGFyZSBtYW5hZ2VkIGJ5IHNlcnZlclxuXHRcdC8vIHRoaXMuY29sbGlzaW9uVHlwZUVuYWJsZWRbJ2F2YXRhcnMnXSA9IHRydWU7XG5cdFx0Ly8gdGhpcy5jb2xsaXNpb25UeXBlRW5hYmxlZFsnbW9uc3RlcnMnXSA9IHRydWU7XG5cdFx0dGhpcy5jb2xsaXNpb25UeXBlRW5hYmxlZFsncGxhdGVmb3JtZSddID0gZmFsc2U7XG5cdH07XG5cdGRlaW1vcy5lbGVtZW50LlByb2plY3RpbGUucHJvdG90eXBlLm9uQXJlYUNvbGxpc2lvblRvcCA9IGZ1bmN0aW9uKGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50KSB7XG5cdFx0Ly9kbyBub3RoaW5nICFcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50LlByb2plY3RpbGUucHJvdG90eXBlLm9uQXJlYUNvbGxpc2lvbiA9IGZ1bmN0aW9uKGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50KSB7XG5cdFx0dGhpcy5vbkJsb2NrQ29sbGlzaW9uKGNvbGxpc2lvbkNvb3JkLCBjb2xsaXNpb25FbGVtZW50KTtcblx0fTtcblxuXHRkZWltb3MuZWxlbWVudC5Qcm9qZWN0aWxlLnByb3RvdHlwZS5vbkJsb2NrQ29sbGlzaW9uID0gZnVuY3Rpb24oY29sbGlzaW9uQ29vcmQsIGNvbGxpc2lvbkVsZW1lbnQpIHtcblx0XHRkZWltb3MuRW5naW5lLnNjZW5lLmRlc3Ryb3lQcm9qZWN0aWxlKHRoaXMpO1xuXHR9O1xuXG5cdGRlaW1vcy5lbGVtZW50LlByb2plY3RpbGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHRQcm9qZWN0aWxlLl9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuXHRcdGRlbGV0ZSBkZWltb3MuRW5naW5lLnNjZW5lLnByb2plY3RpbGVzW3RoaXMuc2VydmVyaWRdO1xuXHR9XG5cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIE1vbnN0ZXIgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTQvMTEvMjRcbiAqIEBkZXNjcmlwdGlvbiA6IE1vbnN0ZXIgbW9kZWxcbiAqXG4gKiovXG5cbihmdW5jdGlvbihkZWltb3MsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cblx0ZGVpbW9zLmVsZW1lbnQgPSBkZWltb3MuZWxlbWVudCB8fCB7fSA7XG5cblx0LyoqXG5cdCAqIE1vbnN0ZXIgY29uc3RydWN0b3Jcblx0ICpcblx0ICoqL1xuXHR2YXIgTW9uc3RlciA9IGRlaW1vcy5lbGVtZW50Lk1vbnN0ZXIgPSBmdW5jdGlvbiAoc2VydmVyaWQscG9zaXRpb24sdmVsb2NpdHksYWNjZWxlcmF0aW9uLHNpemUsbWFzcyx0ZW1wbGF0ZWlkLHNraW4sY29sb3IsbmFtZSxkYW1hZ2Usb3JpZW50YXRpb24sZGVsdGFzaG93KSB7XG5cdFx0TW9uc3Rlci5fc3VwZXIuY2FsbCh0aGlzLHBvc2l0aW9uLHNpemUsc2VydmVyaWQsZGVsdGFzaG93KTtcblx0XHR0aGlzLmRvbUlkID0gJ21vbnN0ZXJfJyArIHNlcnZlcmlkICsgJ18nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAnXycgKyBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpKjEwMDAwMDApKzEpOyA7XG5cdFx0dGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xuXHRcdHRoaXMuYWNjZWxlcmF0aW9uID0gYWNjZWxlcmF0aW9uO1xuXHRcdHRoaXMuc3BlYWtpbmcgPSBmYWxzZSA7XG5cdFx0dGhpcy5zcGVha2VyID0gbnVsbDtcblx0XHR0aGlzLm1vdmVfc3BlZWQgPSAwO1xuXHRcdHRoaXMuanVtcF9zcGVlZCA9IDA7XG5cdFx0dGhpcy5zYXlpbmcgPSBcIlwiO1xuXHRcdHRoaXMubGFzdFNheWVkID0gMDtcblx0XHR0aGlzLnNraW4gPSBza2luO1xuXHRcdHRoaXMudGVtcGxhdGVJZCA9IHRlbXBsYXRlaWQ7XG5cdFx0dGhpcy5jb2xvciA9IGNvbG9yO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5kYW1hZ2UgPSBkYW1hZ2U7XG5cdFx0dGhpcy5tYXNzID0gbWFzcztcblx0fVxuXG5cdG9yZy5kYnl6ZXJvLnRvb2xzLkluaGVyaXQoZGVpbW9zLmVsZW1lbnQuTW9uc3RlciwgZGVpbW9zLmVsZW1lbnQuRWxlbWVudCk7XG5cblx0ZGVpbW9zLmVsZW1lbnQuTW9uc3Rlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCl7XG5cdFx0TW9uc3Rlci5fc3VwZXIucHJvdG90eXBlLmluaXQuY2FsbCh0aGlzKTtcblx0XHR0aGlzLmRvbUVsZW0uY2xhc3NOYW1lID0gXCJtb25zdGVyX1wiK3RoaXMuc2tpbjtcblxuXHRcdC8vc2V0IHNwcml0ZXNoZWV0XG5cdFx0dGhpcy5kb21FbGVtLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiK2RlaW1vcy5FbmdpbmUuYXNzZXRVUkwrXCIvc3ByaXRlc2hlZXQvbW9uc3Rlci9cIit0aGlzLnRlbXBsYXRlSWQrXCIvY29sb3IvXCIrdGhpcy5jb2xvcitcIi9zcHJpdGVzaGVldC5wbmcpXCI7XG5cblx0XHQvL2FkZCBzcGVha2VyXG5cdFx0dGhpcy5pbml0U3BlYWtlcihmYWxzZSk7XG5cblx0XHQvL3Nob3cgbWFpbiBuYW1lXG5cdFx0aWYoISF0aGlzLm5hbWUpIHtcblx0XHRcdHRoaXMuaW5pdE5hbWUodHJ1ZSk7XG5cblx0XHRcdC8vcmVkcmF3IEhQIHRvIGFwcGx5IGNvcnJlY3QgbmFtZSB3aWR0aFxuXHRcdFx0dGhpcy5yZW5kZXJIUCgpO1xuXHRcdH1cblxuXHRcdHRoaXMubmFtZVdpZHRoID0gZG9tX2VsZW1fbmFtZS5vZmZzZXRXaWR0aDtcblx0XHR0aGlzLm5hbWVIZWlnaHQgPSBkb21fZWxlbV9uYW1lLm9mZnNldEhlaWdodDtcblxuXHRcdC8vbG9hZCB3ZWFwb25cblx0XHRpZighIXRoaXMud2VhcG9uSWQpIHtcblx0XHRcdHRoaXMuaW5pdFdlYXBvbih0aGlzLndlYXBvbklkKTtcblx0XHR9XG5cdFx0Ly9vYmplY3QgY29sbGlzaW9ucyBhcmUgbWFuYWdlZCBieSBzZXJ2ZXJcblx0XHQvLyB0aGlzLmNvbGxpc2lvblR5cGVFbmFibGVkWydhdmF0YXJzJ10gPSB0cnVlO1xuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuTW9uc3Rlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZHQsIG5vdykge1xuXHRcdC8vY2FsbCBwYXJlbnQgdXBkYXRlXG5cdFx0TW9uc3Rlci5fc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMsZHQsbm93KTtcblxuXHRcdC8vdG9nZ2xlIHNwZWFrZXIgaWYgbmVlZGVkXG5cdFx0aWYodGhpcy5zcGVha2luZykge1xuXHRcdFx0dmFyIG5ld19zYXlpbmcgPSB0aGlzLmdldFNheWluZygpO1xuXHRcdFx0aWYodGhpcy5zYXlpbmcgIT09IG5ld19zYXlpbmcpIHtcblx0XHRcdFx0dGhpcy5zYXlpbmcgPSBuZXdfc2F5aW5nO1xuXHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZSgnb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc2VuZFN5bmMnKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYodGhpcy5sYXN0U2F5ZWQgKyA1MDAwIDwgbm93ICYmIHRoaXMuc2F5aW5nICE9PSAnJykge1xuXHRcdFx0XHR0aGlzLnNwZWFrZXIuaGlkZSgpO1xuXHRcdFx0XHR0aGlzLnNwZWFrZXIuc2V0VGV4dCgnJyk7XG5cdFx0XHRcdHRoaXMuc2F5aW5nID0gJyc7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zZW5kU3luYycpO1xuXHRcdFx0fSBcblx0XHR9XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5Nb25zdGVyLnByb3RvdHlwZS5vbk1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRNb25zdGVyLl9zdXBlci5wcm90b3R5cGUub25Nb3ZlLmNhbGwodGhpcyk7XG5cdFx0aWYoISF0aGlzLm5hbWUpIHRoaXMucmVuZGVyTmFtZSgpO1xuXHRcdGlmKHRoaXMuc2F5aW5nLmxlbmd0aCA+IDApIHRoaXMucmVuZGVyU3BlYWtlcigpO1xuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuTW9uc3Rlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoTW9uc3Rlci5fc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpKSB7XG5cdFx0XHRpZighIXRoaXMubmFtZSkgdGhpcy5yZW5kZXJOYW1lKCk7XG5cdFx0XHRpZih0aGlzLnNheWluZy5sZW5ndGggPiAwKSB0aGlzLnJlbmRlclNwZWFrZXIoKTtcblx0XHR9XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5Nb25zdGVyLnByb3RvdHlwZS5vbkJsb2NrQ29sbGlzaW9uTGVmdCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuX3RlbXBCbG9ja0NvbGxpc2lvbkxlZnRSaWdodCgpO1xuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuTW9uc3Rlci5wcm90b3R5cGUub25CbG9ja0NvbGxpc2lvblJpZ2h0ID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5fdGVtcEJsb2NrQ29sbGlzaW9uTGVmdFJpZ2h0KCk7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5Nb25zdGVyLnByb3RvdHlwZS5vbkFyZWFDb2xsaXNpb25MZWZ0ID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5fdGVtcEJsb2NrQ29sbGlzaW9uTGVmdFJpZ2h0KCk7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5Nb25zdGVyLnByb3RvdHlwZS5vbkFyZWFDb2xsaXNpb25SaWdodCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuX3RlbXBCbG9ja0NvbGxpc2lvbkxlZnRSaWdodCgpO1xuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuTW9uc3Rlci5wcm90b3R5cGUuX3RlbXBCbG9ja0NvbGxpc2lvbkxlZnRSaWdodCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMudmVsb2NpdHkueCA9IC0xKnBhcnNlSW50KHRoaXMudmVsb2NpdHkueCk7XG5cdH1cblxuXHQvKipcblx0ICogTmFtZVxuXHQgKi9cblx0ZGVpbW9zLmVsZW1lbnQuTW9uc3Rlci5wcm90b3R5cGUuaW5pdE5hbWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIGRvbV9lbGVtX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGRvbV9lbGVtX25hbWUuc2V0QXR0cmlidXRlKFwiaWRcIix0aGlzLmRvbUlkKydfbmFtZScpIDtcblxuXHRcdGRvbV9lbGVtX25hbWUuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG5cdFx0ZG9tX2VsZW1fbmFtZS5pbm5lckhUTUwgPSB0aGlzLm5hbWU7XG5cdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5kaXNwbGF5ICA9ICdub25lJyA7XG5cdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5mb250U2l6ZSA9ICcxMnB4Jztcblx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG5cdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5jb2xvciA9ICcjJyt0aGlzLmNvbG9yO1xuXHRcdGRvbV9lbGVtX25hbWUuc3R5bGUuekluZGV4ID0gMTA7XG5cdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5vcGFjaXR5ID0gMC43O1xuXHRcdGRvbV9lbGVtX25hbWUuc3R5bGUudGV4dFNoYWRvdyA9ICd3aGl0ZSAtMnB4IC0ycHggMnB4LCB3aGl0ZSAycHggMnB4IDJweCwgd2hpdGUgLTJweCAycHggMnB4LCB3aGl0ZSAycHggLTJweCAycHgnO1xuXG5cdFx0ZGVpbW9zLkVuZ2luZS56b25lLmFyZWEuYXBwZW5kQ2hpbGQoZG9tX2VsZW1fbmFtZSkgO1xuXHRcdGRvbV9lbGVtX25hbWUuc3R5bGUuZGlzcGxheSAgPSAnYmxvY2snIDtcblxuXHRcdHRoaXMuZG9tRWxlbU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRvbUlkKydfbmFtZScpO1xuXG5cdFx0dGhpcy5yZW5kZXJOYW1lLmNhbGwodGhpcyk7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5Nb25zdGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0TW9uc3Rlci5fc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcblx0XHRkZWxldGUgZGVpbW9zLkVuZ2luZS5zY2VuZS5tb25zdGVyc1t0aGlzLnNlcnZlcmlkXTtcblx0fVxuXG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBJdGVtIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDE0LzExLzI3XG4gKiBAZGVzY3JpcHRpb24gOiBJdGVtIG1vZGVsXG4gKlxuICoqL1xuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXG5cdGRlaW1vcy5lbGVtZW50ID0gZGVpbW9zLmVsZW1lbnQgfHwge30gO1xuXG5cdC8qKlxuXHQgKiBJdGVtIGNvbnN0cnVjdG9yXG5cdCAqXG5cdCAqKi9cblx0dmFyIEl0ZW0gPSBkZWltb3MuZWxlbWVudC5JdGVtID0gZnVuY3Rpb24gKHNlcnZlcmlkLHBvc2l0aW9uLHZlbG9jaXR5LGFjY2VsZXJhdGlvbixzaXplLG1hc3MsdGVtcGxhdGVpZCxza2luLGNvbG9yLG5hbWUsb3JpZW50YXRpb24sZGVsdGFzaG93KSB7XG5cdFx0SXRlbS5fc3VwZXIuY2FsbCh0aGlzLHBvc2l0aW9uLHNpemUsc2VydmVyaWQsZGVsdGFzaG93KTtcblx0XHR0aGlzLmRvbUlkID0gJ2l0ZW1fJyArIHNlcnZlcmlkICsgJ18nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAnXycgKyBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpKjEwMDAwMDApKzEpOyA7XG5cdFx0dGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xuXHRcdHRoaXMuYWNjZWxlcmF0aW9uID0gYWNjZWxlcmF0aW9uO1xuXHRcdHRoaXMubW92ZV9zcGVlZCA9IDA7XG5cdFx0dGhpcy5qdW1wX3NwZWVkID0gMDtcblx0XHR0aGlzLnNraW4gPSBza2luO1xuXHRcdHRoaXMudGVtcGxhdGVJZCA9IHRlbXBsYXRlaWQ7XG5cdFx0dGhpcy5jb2xvciA9IGNvbG9yO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5kZWx0YXNob3cgPSBkZWx0YXNob3c7XG5cdFx0dGhpcy5tYXNzID0gbWFzcztcblx0fVxuXG5cdG9yZy5kYnl6ZXJvLnRvb2xzLkluaGVyaXQoZGVpbW9zLmVsZW1lbnQuSXRlbSwgZGVpbW9zLmVsZW1lbnQuRWxlbWVudCk7XG5cblxuXHRkZWltb3MuZWxlbWVudC5JdGVtLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKXtcblx0XHRJdGVtLl9zdXBlci5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMpO1xuXHRcdHRoaXMuZG9tRWxlbS5jbGFzc05hbWUgPSBcIml0ZW1fXCIrdGhpcy5za2luO1xuXG5cdFx0Ly9zZXQgc3ByaXRlc2hlZXRcblx0XHR0aGlzLmRvbUVsZW0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIrZGVpbW9zLkVuZ2luZS5hc3NldFVSTCtcIi9zcHJpdGVzaGVldC9pdGVtL1wiK3RoaXMudGVtcGxhdGVJZCtcIi9cIit0aGlzLmNvbG9yK1wiL3Nwcml0ZXNoZWV0LnBuZylcIjtcblx0XHR0aGlzLmRvbUVsZW0uc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uWCA9IFwiLTgwMHB4XCI7XG5cblx0XHQvL3Nob3cgbWFpbiBuYW1lXG5cdFx0aWYoISF0aGlzLm5hbWUpIHRoaXMuaW5pdE5hbWUodHJ1ZSk7XG5cblx0XHR0aGlzLm5hbWVXaWR0aCA9IGRvbV9lbGVtX25hbWUub2Zmc2V0V2lkdGg7XG5cdFx0dGhpcy5uYW1lSGVpZ2h0ID0gZG9tX2VsZW1fbmFtZS5vZmZzZXRIZWlnaHQ7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5JdGVtLnByb3RvdHlwZS5vbk1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRJdGVtLl9zdXBlci5wcm90b3R5cGUub25Nb3ZlLmNhbGwodGhpcyk7XG5cdFx0aWYoISF0aGlzLm5hbWUpIHRoaXMucmVuZGVyTmFtZSgpO1xuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuSXRlbS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYoSXRlbS5fc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpKSB7XG5cdFx0XHRpZighIXRoaXMubmFtZSkgdGhpcy5yZW5kZXJOYW1lKCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIE5hbWVcblx0ICovXG5cdGRlaW1vcy5lbGVtZW50Lkl0ZW0ucHJvdG90eXBlLmluaXROYW1lID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmKHRoaXMubmFtZSAhPT0gJycpIHtcblx0XHRcdHZhciBkb21fZWxlbV9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdGRvbV9lbGVtX25hbWUuc2V0QXR0cmlidXRlKFwiaWRcIix0aGlzLmRvbUlkKydfbmFtZScpIDtcblxuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0XHRcdGRvbV9lbGVtX25hbWUuaW5uZXJIVE1MID0gdGhpcy5uYW1lO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5kaXNwbGF5ICA9ICdub25lJyA7XG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmZvbnRTaXplID0gJzEycHgnO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS5jb2xvciA9ICcjJyt0aGlzLmNvbG9yO1xuXHRcdFx0ZG9tX2VsZW1fbmFtZS5zdHlsZS56SW5kZXggPSAxMDtcblx0XHRcdGRvbV9lbGVtX25hbWUuc3R5bGUub3BhY2l0eSA9IDAuNztcblx0XHRcdGRvbV9lbGVtX25hbWUuc3R5bGUudGV4dFNoYWRvdyA9ICd3aGl0ZSAtMnB4IC0ycHggMnB4LCB3aGl0ZSAycHggMnB4IDJweCwgd2hpdGUgLTJweCAycHggMnB4LCB3aGl0ZSAycHggLTJweCAycHgnO1xuXG5cdFx0XHRkZWltb3MuRW5naW5lLnpvbmUuYXJlYS5hcHBlbmRDaGlsZChkb21fZWxlbV9uYW1lKSA7XG5cdFx0XHRkb21fZWxlbV9uYW1lLnN0eWxlLmRpc3BsYXkgID0gJ2Jsb2NrJyA7XG5cblx0XHRcdHRoaXMuZG9tRWxlbU5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRvbUlkKydfbmFtZScpO1xuXG5cdFx0XHR0aGlzLnJlbmRlck5hbWUuY2FsbCh0aGlzKTtcblx0XHR9XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5JdGVtLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0SXRlbS5fc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzKTtcblx0XHRkZWxldGUgZGVpbW9zLkVuZ2luZS5zY2VuZS5pdGVtc1t0aGlzLnNlcnZlcmlkXTtcblx0fVxuXG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBvcmcuZGJ5emVyby5kZWltb3MuZWxlbWVudC5BdHRhY2tab25lIE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDE1LzAxLzIxXG4gKiBAZGVzY3JpcHRpb24gOiBBdHRhY2sgem9uZSBjcmVhdGUgdG8gZGFtYWdlIG90aGVyIGVudGl0aWVzXG4gKlxuICoqL1xuXG5cbihmdW5jdGlvbihkZWltb3MsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cdHZhciBWZWN0b3IgPSBvcmcuZGJ5emVyby50b29scy5WZWN0b3I7XG5cdGRlaW1vcy5lbGVtZW50ID0gZGVpbW9zLmVsZW1lbnQgfHwge30gO1xuXG5cdC8qKlxuXHQgKiBBdHRhY2tab25lIGNvbnN0cnVjdG9uXG5cdCAqIFxuXHQgKiBAcGFyYW0gcG9zaXRpb24gVmVjdG9yIHBvc2l0aW9uIG9mIHRoZSBibG9jayBpbnNpZGUgdGhlIHpvbmVcblx0ICogQHBhcmFtIHNpemUgVmVjdG9yIHNpemUgb2YgdGhlIGJsb2NrIGluc2lkZSB0aGUgem9uZVxuXHQgKlxuXHQgKiAqL1xuXHRkZWltb3MuZWxlbWVudC5BdHRhY2tab25lID0gZnVuY3Rpb24oaWQscG9zaXRpb24sc2l6ZSxvd25lcklkLGR1cmF0aW9uKSB7XG5cdFx0dGhpcy5pZFx0XHRcdD0gaWQ7XG5cdFx0dGhpcy5kb21JZFx0XHQ9ICdhdHRhY2t6b25lLScraWQ7XG5cdFx0dGhpcy5wb3NpdGlvblx0PSBwb3NpdGlvbjtcblx0XHR0aGlzLnNpemVcdFx0PSBzaXplO1xuXHRcdHRoaXMub3duZXJJZFx0PSBvd25lcklkO1xuXHRcdHRoaXMuZHVyYXRpb25cdD0gZHVyYXRpb247XG5cdFx0dGhpcy52ZXJ0ZXhUTCA9IG5ldyBWZWN0b3IocG9zaXRpb24ueCxcdFx0XHRcdHBvc2l0aW9uLnkpO1xuXHRcdHRoaXMudmVydGV4VFIgPSBuZXcgVmVjdG9yKHBvc2l0aW9uLnggKyBzaXplLngsXHRcdHBvc2l0aW9uLnkpO1xuXHRcdHRoaXMudmVydGV4QkwgPSBuZXcgVmVjdG9yKHBvc2l0aW9uLngsXHRcdFx0XHRwb3NpdGlvbi55ICsgc2l6ZS55KTtcblx0XHR0aGlzLnZlcnRleEJSID0gbmV3IFZlY3Rvcihwb3NpdGlvbi54ICsgc2l6ZS54LFx0XHRwb3NpdGlvbi55ICsgc2l6ZS55KTtcblx0XHR0aGlzLmxhc3RVcGRhdGUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50LkF0dGFja1pvbmUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKGR0LCBub3cpIHtcblx0XHR2YXIgZG9tX2VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRcdGRvbV9lbGVtLnNldEF0dHJpYnV0ZShcImlkXCIsdGhpcy5kb21JZCk7XG5cblx0XHRkb21fZWxlbS5zdHlsZS53aWR0aCA9IHBhcnNlSW50KHRoaXMuc2l6ZS54KSsncHgnO1xuXHRcdGRvbV9lbGVtLnN0eWxlLmhlaWdodCAgPSBwYXJzZUludCh0aGlzLnNpemUueSkrJ3B4JztcblxuXHRcdGRvbV9lbGVtLnN0eWxlLmRpc3BsYXkgID0gJ2Jsb2NrJztcblx0XHRkb21fZWxlbS5zdHlsZS5wb3NpdGlvbiAgPSAnYWJzb2x1dGUnO1xuXG5cdFx0ZG9tX2VsZW0uc3R5bGUuYmFja2dyb3VuZENvbG9yICA9ICcjMzMzJztcblx0XHRkb21fZWxlbS5zdHlsZS5vcGFjaXR5ICA9ICcwLjUnO1xuXG5cdFx0dmFyIHRyYW5zbGF0aW9uID0gXCJ0cmFuc2xhdGUzZChcIisodGhpcy5wb3NpdGlvbi54KStcInB4LFwiKyh0aGlzLnBvc2l0aW9uLnkpK1wicHgsMHB4KVwiO1xuXHRcdGRvbV9lbGVtLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zbGF0aW9uO1xuXHRcdGRvbV9lbGVtLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zbGF0aW9uO1xuXG5cdFx0ZGVpbW9zLkVuZ2luZS56b25lLmFyZWEuYXBwZW5kQ2hpbGQoZG9tX2VsZW0pO1xuXG5cdFx0dGhpcy5kb21FbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kb21JZCk7XG5cdFx0dGhpcy5kb21FbGVtV2lkdGggPSB0aGlzLmRvbUVsZW0ub2Zmc2V0V2lkdGg7Ly91c2VmdWxsIGZvciBwb3NpdGlvbm5pbmcgbmFtZSBhbmQgc3BlYWtlclxuXHRcdHRoaXMuZG9tRWxlbUhlaWdodCA9IHRoaXMuZG9tRWxlbS5vZmZzZXRIZWlnaHQ7Ly91c2VmdWxsIGZvciBwb3NpdGlvbm5pbmcgbmFtZSBhbmQgc3BlYWtlclxuXHR9XG5cblx0ZGVpbW9zLmVsZW1lbnQuQXR0YWNrWm9uZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oZHQsIG5vdykge1xuXHRcdHRoaXMuZHVyYXRpb24gKz0gKHRoaXMubGFzdFVwZGF0ZSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcblx0XHRpZih0aGlzLmR1cmF0aW9uIDwgMCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGRlaW1vcy5lbGVtZW50LkF0dGFja1pvbmUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmNsZWFuRG9tKCk7XG5cdH1cblxuXHRkZWltb3MuZWxlbWVudC5BdHRhY2tab25lLnByb3RvdHlwZS5jbGVhbkRvbSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBwYXJlbnROb2RlID0gIHRoaXMuZG9tRWxlbS5wYXJlbnROb2RlO1xuXHRcdGlmKHBhcmVudE5vZGUpIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtKTtcblx0fVxuXG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKioqKlxuICpcbiAqIG9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLldlYnNvY2tldENsaWVudCBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxMy8wNS8wNFxuICogQGRlc2NyaXB0aW9uIDogVXNlIHdlYnNvY2tldCB0byBjb25uZWN0IHRvIGRpc3RhbnQgc2VydmVyXG4gKlxuICoqL1xuKGZ1bmN0aW9uKGRlaW1vcyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblx0XG5cdHZhciBFdmVudE1hbmFnZXIgPSBvcmcuZGJ5emVyby50b29scy5FdmVudE1hbmFnZXI7XG5cdGRlaW1vcy5uZXR3b3JrID0gZGVpbW9zLm5ldHdvcmsgfHwge30gO1xuXG5cdC8qKlxuXHQgKiBXZWJzb2NrZXRDbGllbnQgY29uc3RydWN0b3Jcblx0ICogXG5cdCAqIEBwYXJhbSBzdHJpbmcgaG9zdG5hbWUgb2YgdGhlIHJlbW90ZSB3ZWJzb2NrZXQgc2VydmVyXG5cdCAqIEBwYXJhbSBpbnQgcG9ydCBvZiB0aGUgcmVtb3RlIHdlYnNvY2tldCBzZXJ2ZXJcblx0ICogQHBhcmFtIFdlYnNvY2tldENsaWVudE1vZGUgTW9kZSBvZiB0aGUgY2xpZW50LCBjYW4gYmUgV2Vic29ja2V0Q2xpZW50TW9kZS5ERUJVRyB0byBzaG93IGxvZ3Ncblx0ICpcblx0ICogKi9cblx0ZGVpbW9zLm5ldHdvcmsuV2Vic29ja2V0Q2xpZW50ID0gZnVuY3Rpb24oaG9zdG5hbWUscG9ydCxtb2RlKSB7XG5cdFx0dGhpcy5yZXRyeUNvbm5lY3Rpb24gPSBudWxsO1xuXHRcdHRoaXMuc2VydmVyX2hvc3RuYW1lID0gaG9zdG5hbWU7XG5cdFx0dGhpcy5zZXJ2ZXJfcG9ydCA9IHBvcnQ7XG5cdFx0dGhpcy5jb25uZWN0aW9uX3N0cmVhbSA9ICd3czovLycrdGhpcy5zZXJ2ZXJfaG9zdG5hbWUrJzonK3RoaXMuc2VydmVyX3BvcnQ7XG5cblx0XHR0aGlzLnNlcnZlcl9jb25uZWN0ZWQgPSBmYWxzZTtcblx0XHR0aGlzLnNlc3Npb25faWQgPSBudWxsO1xuXHR9XG5cblxuXHRkZWltb3MubmV0d29yay5XZWJzb2NrZXRDbGllbnQucHJvdG90eXBlID0gIHtcblx0XHQvKioqXG5cdFx0ICogQ29ubmVjdGlvbiBNZXRob2Rcblx0XHQgKiBVc2UgdG8gY29ubmVjdCB0byByZW1vdGUgd2Vic29ja2V0IHNlcnZlclxuXHRcdCAqXG5cdFx0ICogQHJldHVybiB2b2lkXG5cdFx0ICpcblx0XHQgKiovXG5cdFx0Y29ubmVjdCA6IGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIGlmIHVzZXIgaXMgcnVubmluZyBtb3ppbGxhIHRoZW4gdXNlIGl0J3MgYnVpbHQtaW4gV2ViU29ja2V0XG5cdFx0XHR3aW5kb3cuV2ViU29ja2V0ID0gd2luZG93LldlYlNvY2tldCB8fCB3aW5kb3cuTW96V2ViU29ja2V0O1xuXG5cdFx0XHR2YXIgc2VydmVyX2hvc3RuYW1lID0gdGhpcy5zZXJ2ZXJfaG9zdG5hbWUgO1xuXHRcdFx0dmFyIHNlcnZlcl9wb3J0ID0gdGhpcy5zZXJ2ZXJfcG9ydCA7XG5cblx0XHRcdHZhciBjb25uZWN0aW9uID0gbmV3IFdlYlNvY2tldCh0aGlzLmNvbm5lY3Rpb25fc3RyZWFtKTtcblxuXHRcdFx0Y29ubmVjdGlvbi5vbm9wZW4gPSB0aGlzLm9ub3Blbi5iaW5kKHRoaXMpIDtcblx0XHRcdGNvbm5lY3Rpb24ub25jbG9zZSA9IHRoaXMub25jbG9zZS5iaW5kKHRoaXMpIDtcblx0XHRcdGNvbm5lY3Rpb24ub25lcnJvciA9IHRoaXMub25lcnJvci5iaW5kKHRoaXMpIDtcblx0XHRcdGNvbm5lY3Rpb24ub25tZXNzYWdlID0gdGhpcy5vbm1lc3NhZ2UuYmluZCh0aGlzKSA7XG5cblx0XHRcdHRoaXMuY29ubmVjdGlvbiA9IGNvbm5lY3Rpb24gO1xuXHRcdH0sXG5cblx0XHRjbG9zZSA6IGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIGlmIHVzZXIgaXMgcnVubmluZyBtb3ppbGxhIHRoZW4gdXNlIGl0J3MgYnVpbHQtaW4gV2ViU29ja2V0XG5cdFx0XHR3aW5kb3cuV2ViU29ja2V0ID0gd2luZG93LldlYlNvY2tldCB8fCB3aW5kb3cuTW96V2ViU29ja2V0O1xuXG5cdFx0XHR0aGlzLmNvbm5lY3Rpb24uY2xvc2UoKSA7XG5cdFx0XHRkZWxldGUgdGhpcy5jb25uZWN0aW9uIDtcblx0XHR9LFxuXG5cdFx0LyoqKlxuXHRcdCAqIFNlbmQgTWVzc2FnZSBNZXRob2Rcblx0XHQgKlxuXHRcdCAqIGJpbmQgdG8gRXZlbnQgb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc2VuZE1lc3NhZ2Vcblx0XHQgKiBcblx0XHQgKiBAcGFyYW0gT2JqZWN0IHRyaWdnZWQgZXZlbnRcblx0XHQgKiBAcmV0dXJuIHZvaWRcblx0XHQgKlxuXHRcdCAqKi9cblx0XHRzZW5kOiBmdW5jdGlvbihlKSB7XG5cdFx0XHR0aGlzLmNvbm5lY3Rpb24uc2VuZChKU09OLnN0cmluZ2lmeShlLm1lc3NhZ2UpKSA7XG5cdFx0fSxcblxuXHRcdHRyeVJlbG9nOiBmdW5jdGlvbigpIHtcblx0XHRcdC8vdHJ5IHRvIHJlY29ubmVjdCBlYWNoIHNlY29uZFxuXHRcdFx0Ly9pZih0aGlzLmNvbm5lY3Rpb24gIT0gbnVsbCkgdGhpcy5jb25uZWN0aW9uLmNsb3NlKCkgO1xuXHRcdFx0dGhpcy5jb25uZWN0aW9uID0gbmV3IFdlYlNvY2tldCh0aGlzLmNvbm5lY3Rpb25fc3RyZWFtKTtcblx0XHRcdHZhciByZWxvZyA9IGZ1bmN0aW9uKCl7XG5cdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmNvbnNvbGUud3JpdGVcIix7XCJkZXRhaWxcIjp7XCJtZXNzYWdlXCI6XCJUcnlpbmcgdG8gcmVjb25uZWN0aW5nLi4uXCJ9fSk7XG5cdFx0XHRcdGlmKHRoaXMuY29ubmVjdGlvbi5yZWFkeVN0YXRlICE9PSBXZWJTb2NrZXQuT1BFTikge1xuXHRcdFx0XHRcdHRoaXMuY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQodGhpcy5jb25uZWN0aW9uX3N0cmVhbSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5jb25uZWN0aW9uLm9ub3BlbiA9IHRoaXMub25vcGVuLmJpbmQodGhpcykgO1xuXHRcdFx0XHRcdHRoaXMuY29ubmVjdGlvbi5vbmNsb3NlID0gdGhpcy5vbmNsb3NlLmJpbmQodGhpcykgO1xuXHRcdFx0XHRcdHRoaXMuY29ubmVjdGlvbi5vbmVycm9yID0gdGhpcy5vbmVycm9yLmJpbmQodGhpcykgO1xuXHRcdFx0XHRcdHRoaXMuY29ubmVjdGlvbi5vbm1lc3NhZ2UgPSB0aGlzLm9ubWVzc2FnZS5iaW5kKHRoaXMpIDtcblxuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuY29ubmVjdGVkXCIse30pO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoc2V0aW50ZXJjYWxJZCkgO1xuXHRcdFx0XHR9XG5cdFx0XHR9IDtcblx0XHRcdHZhciBzZXRpbnRlcmNhbElkID0gc2V0SW50ZXJ2YWwocmVsb2cuYmluZCh0aGlzKSwxMDAwKSA7XG5cdFx0fSxcblx0XHRvbm9wZW46IGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmNvbm5lY3RlZFwiLHt9KTtcblx0XHRcdHRoaXMuc2VydmVyX2Nvbm5lY3RlZCA9IHRydWUgO1xuXG5cdFx0XHQvL2NoZWNrIGNvbm5lY3Rpb24gZWFjaCAzc1xuXHRcdFx0dmFyIHBvb2xBbGl2ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZih0aGlzLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSAhPT0gMSAmJiB0aGlzLmNvbm5lY3Rpb24uc2VydmVyX2Nvbm5lY3RlZCA9PSB0cnVlKSB7XG5cdFx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MuY29uc29sZS53cml0ZVwiLHtcImRldGFpbFwiOntcIm1lc3NhZ2VcIjpcIkNvbm5lY3Rpb24gY2xvc2VkXCJ9fSx7fSk7XG5cdFx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5kaXNjb25uZWN0ZWRcIix7fSk7XG5cdFx0XHRcdFx0dGhpcy5zZXJ2ZXJfY29ubmVjdGVkID0gZmFsc2UgO1xuXHRcdFx0XHR9XG5cdFx0XHR9IDtcblx0XHRcdHNldEludGVydmFsKHBvb2xBbGl2ZS5iaW5kKHRoaXMpLCAzMDAwKTtcblxuXHRcdH0sXG5cdFx0b25jbG9zZSA6IGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5jb25zb2xlLndyaXRlXCIse1wiZGV0YWlsXCI6e1wibWVzc2FnZVwiOlwiQ29ubmVjdGlvbiBjbG9zZWRcIn19KTtcblx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuZGlzY29ubmVjdGVkXCIpO1xuXHRcdFx0dGhpcy5zZXNzaW9uX2lkID0gbnVsbCA7XG5cdFx0XHR0aGlzLnRyeVJlbG9nKCkgO1xuXHRcdFx0XG5cdFx0fSxcblx0XHRvbmVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmNvbnNvbGUud3JpdGVcIix7XCJkZXRhaWxcIjp7XCJtZXNzYWdlXCI6XCJBbiBlcnJvciBhY2N1cmVkIHdpdGggdGhlIHNlcnZlclwifX0pO1xuXHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5kaXNjb25uZWN0ZWRcIik7XG5cdFx0XHR0aGlzLnNlc3Npb25faWQgPSBudWxsIDtcblx0XHRcdHRoaXMudHJ5UmVsb2coKSA7XG5cdFx0fSxcblx0XHRvbm1lc3NhZ2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG5cdFx0XHR2YXIganNvbl9tc2cgPSBKU09OLnBhcnNlKG1lc3NhZ2UuZGF0YSkgO1xuXHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5yZWNlaXZlZE1lc3NhZ2VcIixqc29uX21zZykgO1xuXHRcdH1cblx0fVxufSkob3JnLmRieXplcm8uZGVpbW9zLCBkb2N1bWVudCk7IiwiLyoqXG4gKlxuICogb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuTWFuYWdlciBPYmplY3RcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxMy8wOC8wOVxuICogQGRlc2NyaXB0aW9uIDogQ29uZmlnIG9mIHRoZSBhcHBsaWNhdGlvblxuICpcbiAqICovXG5cbnZhciBvcmcgPSBvcmcgfHwge30gO1xub3JnLmRieXplcm8gPSBvcmcuZGJ5emVybyB8fCB7fSA7XG5vcmcuZGJ5emVyby5kZWltb3MgPSBvcmcuZGJ5emVyby5kZWltb3MgfHwge30gO1xuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXG5cdHZhciBFdmVudE1hbmFnZXIgPSBvcmcuZGJ5emVyby50b29scy5FdmVudE1hbmFnZXI7XG5cblx0ZGVpbW9zLm5ldHdvcmsgPSBvcmcuZGJ5emVyby5kZWltb3MubmV0d29yayB8fCB7fSA7XG5cdFxuXHRkZWltb3MubmV0d29yay5NYW5hZ2VyID0gZnVuY3Rpb24oKSB7XG5cdFx0Ly9zdHViXG5cdH1cblxuXHQvL0NhbiBiZSB1c2UgYXMgYW4gaWQgdG9vXG5cdGRlaW1vcy5uZXR3b3JrLk1hbmFnZXIuY291bnQgPSAwIDtcblxuXHRkZWltb3MubmV0d29yay5NYW5hZ2VyLnByb3RvdHlwZSA9IHtcblx0XHRcImluaXRcIiA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly9jb25uZWN0aW9uIGV2ZW50c1xuXHRcdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5yZWNlaXZlZE1lc3NhZ2UnLHRoaXMucmVjZWl2ZWRNZXNzYWdlLmJpbmQodGhpcykpIDtcblx0XHRcdEV2ZW50TWFuYWdlci5yZWdpc3Rlcignb3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc2VuZE1lc3NhZ2UnLHRoaXMuc2VuZE1lc3NhZ2UuYmluZCh0aGlzKSkgO1xuXHRcdFx0RXZlbnRNYW5hZ2VyLnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zZW5kU3luYycsdGhpcy5zZW5kU3luYy5iaW5kKHRoaXMpKSA7XG5cdFx0fSxcblx0XHRcImRlc3Ryb3lcIiA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0RXZlbnRNYW5hZ2VyLnVucmVnaXN0ZXIoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnJlY2VpdmVkTWVzc2FnZScpIDtcblx0XHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zZW5kTWVzc2FnZScpIDtcblx0XHRcdEV2ZW50TWFuYWdlci51bnJlZ2lzdGVyKCdvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zZW5kU3luYycpIDtcblx0XHR9LFxuXHRcdFwicmVjZWl2ZWRNZXNzYWdlXCIgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdFx0c3dpdGNoKGVbX3QuQUNUSU9OXSkge1xuXHRcdFx0XHRjYXNlIF90LkFDVElPTl9MT0dHRURfT0sgOlxuXHRcdFx0XHRcdGlmKGVbX3QuTUVTU0FHRV1bX3QuU0VTU0lPTl9JRF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MuY29uc29sZS53cml0ZUVycm9yXCIse1wiZGV0YWlsXCI6e1wibWVzc2FnZVwiOlwiRXJyb3IgOiBBdXRoIGJ1dCBubyBzZXNzaW9uIGlkID8gd3RmID9cIn19KTtcblx0XHRcdFx0XHRcdHJldHVybiA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRlaW1vcy5FbmdpbmUud3NDbGllbnQuc2Vzc2lvbl9pZCA9IGVbX3QuTUVTU0FHRV1bX3QuU0VTU0lPTl9JRF07XG5cdFx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoJ29yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLmxvZ2dlZCcsZSk7XG5cdFx0XHRcdFx0YnJlYWsgO1xuXHRcdFx0XHRjYXNlIF90LkFDVElPTl9DSE9PU0VfQ0hBUl9PSyA6XG5cdFx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5hdmF0YXJTZWxlY3Rpb25Db25maXJtZWRcIixlKTtcblx0XHRcdFx0XHRicmVhayA7XG5cdFx0XHRcdGNhc2UgX3QuQUNUSU9OX0VSUk9SIDpcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5jb25zb2xlLndyaXRlRXJyb3JcIix7XCJkZXRhaWxcIjp7XCJtZXNzYWdlXCI6XCJFcnJvciA6IFwiK0pTT04uc3RyaW5naWZ5KGVbX3QuTUVTU0FHRV0pfX0pO1xuXHRcdFx0XHRcdGJyZWFrIDtcblx0XHRcdFx0Y2FzZSBfdC5BQ1RJT05fU1lOQyA6XG5cdFx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MucmVuZGVyLnBhcnNlU2NlbmVcIixlKTtcblx0XHRcdFx0XHRicmVhayA7XG5cdFx0XHRcdGNhc2UgX3QuQUNUSU9OX1NZTkNfQVZBVEFSIDpcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnN5bmNBdmF0YXJcIixlKTtcblx0XHRcdFx0XHRicmVhayA7XG5cdFx0XHRcdGNhc2UgX3QuQUNUSU9OX1NZTkNfSVRFTSA6XG5cdFx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MubmV0d29yay5zeW5jSXRlbVwiLGUpO1xuXHRcdFx0XHRcdGJyZWFrIDtcblx0XHRcdFx0Y2FzZSBfdC5BQ1RJT05fR0VUX0lURU1fVEVNUExBVEUgOlxuXHRcdFx0XHRcdHRoaXMucmVjZWl2ZWRJdGVtKGUpO1xuXHRcdFx0XHRcdGJyZWFrIDtcblx0XHRcdFx0Y2FzZSBfdC5BQ1RJT05fU1lOQ19QUk9KRUNUSUxFIDpcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnN5bmNQcm9qZWN0aWxlXCIsZSk7XG5cdFx0XHRcdFx0YnJlYWsgO1xuXHRcdFx0XHRjYXNlIF90LkFDVElPTl9TWU5DX01PTlNURVIgOlxuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuc3luY01vbnN0ZXJcIixlKTtcblx0XHRcdFx0XHRicmVhayA7XG5cdFx0XHRcdGNhc2UgX3QuQUNUSU9OX1JFTU9WRV9QUk9KRUNUSUxFIDpcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnJlbW92ZVByb2plY3RpbGVcIixlKTtcblx0XHRcdFx0XHRicmVhayA7XG5cdFx0XHRcdGNhc2UgX3QuQUNUSU9OX0NPTExJREUgOlxuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLm5ldHdvcmsuYWN0aW9uQ29sbGlkZVwiLGUpO1xuXHRcdFx0XHRcdGJyZWFrIDtcblx0XHRcdFx0Y2FzZSBfdC5BQ1RJT05fSVRFTV9HUkFCQkVEIDpcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLml0ZW1HcmFiYmVkXCIsZSk7XG5cdFx0XHRcdFx0YnJlYWsgO1xuXHRcdFx0XHRjYXNlIF90LkFDVElPTl9TWU5DX0FUVEFDS19aT05FIDpcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLnN5bmNBdHRhY2tab25lXCIsZSk7XG5cdFx0XHRcdFx0YnJlYWsgO1xuXHRcdFx0XHRkZWZhdWx0IDpcblx0XHRcdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5jb25zb2xlLndyaXRlRXJyb3JcIix7XCJkZXRhaWxcIjp7XCJtZXNzYWdlXCI6XCJVbmtub3cgc3RhdHVzIDogXCIrSlNPTi5zdHJpbmdpZnkoZSl9fSk7XG5cdFx0XHRcdFx0YnJlYWsgO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRyZWNlaXZlZEl0ZW06IGZ1bmN0aW9uKG1zZyl7XG5cdFx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdFx0dmFyIG0gPSBtc2dbX3RbJ01FU1NBR0UnXV07XG5cdFx0XHR0aGlzLnN0b3JlSXRlbUZyb21TZXJ2ZXIobSk7XG5cdFx0fSxcblxuXHRcdHN0b3JlSXRlbUZyb21TZXJ2ZXI6IGZ1bmN0aW9uKGl0ZW0pe1xuXHRcdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblx0XHRcdHZhciBpID0ge307XG5cdFx0XHRpLmlkID0gaXRlbVtfdFsnSUQnXV07XG5cdFx0XHRpLm5hbWUgPSBpdGVtW190WydOQU1FJ11dO1xuXHRcdFx0aS5raW5kID0gaXRlbVtfdFsnTUVTU0FHRV9LSU5EJ11dO1xuXHRcdFx0aS5zaXplID0gaXRlbVtfdFsnTUVTU0FHRV9TSVpFJ11dO1xuXHRcdFx0aS5za2luID0gaXRlbVtfdFsnTUVTU0FHRV9TS0lOJ11dO1xuXHRcdFx0aS5hdHRhY2sgPSBpdGVtW190WydNRVNTQUdFX0FUVEFDSyddXTtcblx0XHRcdGkuZGVsdGFzaG93ID0gaXRlbVtfdFsnTUVTU0FHRV9ERUxUQVNIT1cnXV07XG5cdFx0XHRFdmVudE1hbmFnZXIuZmlyZShcIm9yZy5kYnl6ZXJvLmRlaW1vcy5FbmdpbmUubmV3SXRlbVN0b3JlZC5cIitpLmlkLGkpO1xuXHRcdFx0ZGVpbW9zLkVuZ2luZS5pdGVtVGVtcGxhdGVzW2kuaWRdID0gaTtcblx0XHR9LFxuXG5cblx0XHRcInNlbmRBY3Rpb25NZXNzYWdlXCIgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRpZih0eXBlb2YgZS5hY3Rpb24gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdExvZy5lcnJvcignS2V5Ym9hcmQgZXZlbnQgbm90IHNldCB0byBzZW5kIG1lc3NhZ2UgdG8gc2VydmVyJykgO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNlbmRNZXNzYWdlKHsnbWVzc2FnZSc6eydhY3Rpb24nOnsndHlwZSc6J2tleWJvYXJkRXZlbnQnLCdldmVudCc6ZS5hY3Rpb259fX0pO1xuXHRcdH0sXG5cblxuXG5cdFx0XCJzZW5kTWVzc2FnZVwiIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0Ly9zZXQgZGF0ZSBldCBzZXNzaW9uX2lkXG5cdFx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdFx0ZVtfdC5TRVNTSU9OX0lEXVx0PSBkZWltb3MuRW5naW5lLndzQ2xpZW50LnNlc3Npb25faWQ7XG5cdFx0XHRlW190LlRSQUNFX0lEXVx0XHQ9IGRlaW1vcy5uZXR3b3JrLk1hbmFnZXIuY291bnQrKztcblx0XHRcdGVbX3QuREFURV1cdFx0XHQ9IERhdGUubm93KCk7XG5cblx0XHRcdHZhciBkYXRhID0ge307XG5cdFx0XHRkYXRhLm1lc3NhZ2UgPSBlO1xuXG5cdFx0XHQvL3B1dHRpbmcgaXQgYXQgdGhlIGVuZCBvZiB0aGUgcXVldWVcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgXG5cdFx0XHRcdGlmKGRlaW1vcy5FbmdpbmUud3NDbGllbnQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXHRcdFx0XHRkZWltb3MuRW5naW5lLndzQ2xpZW50LnNlbmQoZGF0YSlcblx0XHRcdH0sIDApO1xuXHRcdH0sXG5cblxuXHRcdFwiYXNrSXRlbVRlbXBsYXRlXCIgOiBmdW5jdGlvbihpdGVtX2lkLCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIF90ID0gZGVpbW9zLkVuZ2luZS5fdDtcblx0XHRcdHZhciBtZXNzYWdlID0ge307XG5cdFx0XHRtZXNzYWdlW190LkFDVElPTl0gPSBfdC5BQ1RJT05fR0VUX0lURU1fVEVNUExBVEU7XG5cdFx0XHRtZXNzYWdlW190Lk1FU1NBR0VdID0ge307XG5cdFx0XHRtZXNzYWdlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfSVRFTV9JRF0gPSBpdGVtX2lkO1xuXHRcdFx0dGhpcy5zZW5kTWVzc2FnZShtZXNzYWdlKTtcblx0XHR9LFxuXG5cblx0XHRcInNlbmRTeW5jXCIgOiBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgX3QgPSBkZWltb3MuRW5naW5lLl90O1xuXHRcdFx0dmFyIG1lc3NhZ2UgPSB7fTtcblx0XHRcdG1lc3NhZ2VbX3QuQUNUSU9OXSA9IF90LkFDVElPTl9TWU5DO1xuXHRcdFx0bWVzc2FnZVtfdC5NRVNTQUdFXSA9IHt9O1xuXHRcdFx0bWVzc2FnZVtfdC5NRVNTQUdFXVtfdC5NRVNTQUdFX1NBWUlOR10gPSBkZWltb3MuRW5naW5lLmF2YXRhci5zYXlpbmc7XG5cdFx0XHRtZXNzYWdlW190Lk1FU1NBR0VdW190Lk1FU1NBR0VfUE9TSVRJT05dID0ge1xuXHRcdFx0XHQneCc6cGFyc2VJbnQoZGVpbW9zLkVuZ2luZS5hdmF0YXIucG9zaXRpb24ueCksXG5cdFx0XHRcdCd5JzpwYXJzZUludChkZWltb3MuRW5naW5lLmF2YXRhci5wb3NpdGlvbi55KVxuXHRcdFx0fTtcblx0XHRcdHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZSk7XG5cdFx0fSxcblxuXG5cdFx0Ly9IYW5kbGUgc3VjY2VzcyBhY3Rpb24gZnJvbSBzZXJ2ZXIgaGVyZVxuXHRcdFwic3VjY2Vzc0FjdGlvblwiIDogZnVuY3Rpb24oZSkge1xuXHRcdFx0c3dpdGNoKGUuYWN0aW9uKSB7XG5cdFx0XHRcdGNhc2UgXCJpbmZvXCIgOlxuXHRcdFx0XHRcdEV2ZW50TWFuYWdlci5maXJlKFwib3JnLmRieXplcm8uZGVpbW9zLmNvbnNvbGUud3JpdGVcIix7XCJkZXRhaWxcIjp7XCJtZXNzYWdlXCI6XCJJbmZvIGZyb20gc2VydmVyIDogXCIrSlNPTi5zdHJpbmdpZnkoZGF0YS5tZXNzYWdlKX19KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdCA6XG5cdFx0XHRcdFx0RXZlbnRNYW5hZ2VyLmZpcmUoXCJvcmcuZGJ5emVyby5kZWltb3MuY29uc29sZS53cml0ZVwiLHtcImRldGFpbFwiOntcIm1lc3NhZ2VcIjpcIlVua25vdyBhY3Rpb24gOiBcIitKU09OLnN0cmluZ2lmeShkYXRhKX19KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIG9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrLk1lc3NhZ2UgT2JqZWN0XG4gKlxuICogQGF1dGhvciBkYnl6ZXJvXG4gKiBAZGF0ZSA6IDIwMTMvMDIvMDJcbiAqIEBkZXNjcmlwdGlvbiA6IE5ldHdvcmsgbWVzc2FnZVxuICpcbiAqICovXG5cbnZhciBvcmcgPSBvcmcgfHwge307XG5vcmcuZGJ5emVybyA9IG9yZy5kYnl6ZXJvIHx8IHt9O1xub3JnLmRieXplcm8uZGVpbW9zID0gb3JnLmRieXplcm8uZGVpbW9zIHx8IHt9O1xuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXHRkZWltb3MubmV0d29yayA9IG9yZy5kYnl6ZXJvLmRlaW1vcy5uZXR3b3JrIHx8IHt9O1xuXHRcblx0ZGVpbW9zLm5ldHdvcmsuTWVzc2FnZSA9IHt9O1xuXG5cdGRlaW1vcy5uZXR3b3JrLk1lc3NhZ2UuQ09ERSA9IHtcblx0XHRcInRleHRcIjp7XG5cdFx0XHRcIkRBVEVcIjpcImRcIixcblx0XHRcdFwiSURcIjpcImlcIixcblx0XHRcdFwiQUNUSU9OXCI6XCJ0XCIsXG5cdFx0XHRcIkFDVElPTl9FUlJPUlwiOlwiZVwiLFxuXHRcdFx0XCJBQ1RJT05fTE9HR0VEX09LXCI6XCJvXCIsXG5cdFx0XHRcIkFDVElPTl9MT0dHRURfTk9LXCI6XCJuXCIsXG5cdFx0XHRcIkFDVElPTl9TWU5DXCI6XCI9XCIsXG5cdFx0XHRcIkFDVElPTl9TWU5DX0FWQVRBUlwiOlwiI1wiLFxuXHRcdFx0XCJBQ1RJT05fU1lOQ19JVEVNXCI6XCJbXCIsXG5cdFx0XHRcIkFDVElPTl9TWU5DX01PTlNURVJcIjpcIntcIixcblx0XHRcdFwiQUNUSU9OX0NIT09TRV9DSEFSXCI6XCJyXCIsXG5cdFx0XHRcIkFDVElPTl9DSE9PU0VfQ0hBUl9PS1wiOlwiK1wiLFxuXHRcdFx0XCJBQ1RJT05fTU9WRV9TVEFSVFwiOlwiYVwiLFxuXHRcdFx0XCJBQ1RJT05fTU9WRV9TVE9QXCI6XCI2XCIsXG5cdFx0XHRcIkFDVElPTl9KVU1QXCI6XCJqXCIsXG5cdFx0XHRcIkFDVElPTl9HRVRfSVRFTV9URU1QTEFURVwiOlwiRlwiLFxuXHRcdFx0XCJBQ1RJT05fU1lOQ19QUk9KRUNUSUxFXCI6XCJMXCIsXG5cdFx0XHRcIkFDVElPTl9SRU1PVkVfUFJPSkVDVElMRVwiOlwiUVwiLFxuXHRcdFx0XCJBQ1RJT05fTE9HT1VUXCI6XCJWXCIsXG5cdFx0XHRcIkFDVElPTl9DT0xMSURFXCI6XCJAXCIsXG5cdFx0XHRcIkFDVElPTl9JVEVNX0dSQUJCRURcIjpcIsOhXCIsXG5cdFx0XHRcIkFDVElPTl9TWU5DX0FUVEFDS19aT05FXCI6XCLDqFwiLFxuXHRcdFx0XCJNRVNTQUdFXCI6XCJtXCIsXG5cdFx0XHRcIk1FU1NBR0VfTU9WRV9JRFwiOlwiOVwiLFxuXHRcdFx0XCJNRVNTQUdFX01PVkVfVFlQRVwiOlwiN1wiLFxuXHRcdFx0XCJNRVNTQUdFX01PVkVfU1RBUlRcIjpcImZcIixcblx0XHRcdFwiTUVTU0FHRV9DSEFSXCI6XCJjXCIsXG5cdFx0XHRcIk1FU1NBR0VfQ0hBUk5BTUVcIjpcIl9cIixcblx0XHRcdFwiTUVTU0FHRV9QT1NJVElPTlwiOlwicFwiLFxuXHRcdFx0XCJNRVNTQUdFX1ZFTE9DSVRZXCI6XCJ2XCIsXG5cdFx0XHRcIk1FU1NBR0VfVVNFUl9JTlBVVF9WRUxPQ0lUWVwiOlwieVwiLFxuXHRcdFx0XCJNRVNTQUdFX0FDQ0VMRVJBVElPTlwiOlwielwiLFxuXHRcdFx0XCJNRVNTQUdFX1NJWkVcIjpcIi9cIixcblx0XHRcdFwiTUVTU0FHRV9TS0lOXCI6XCJ+XCIsXG5cdFx0XHRcIk1FU1NBR0VfU1BFQUtcIjpcInNcIixcblx0XHRcdFwiTUVTU0FHRV9TSE9PVFwiOlwieFwiLFxuXHRcdFx0XCJNRVNTQUdFX0RFVEFJTFwiOlwiPlwiLFxuXHRcdFx0XCJNRVNTQUdFX01PVkVfU1BFRURcIjpcIjFcIixcblx0XHRcdFwiTUVTU0FHRV9KVU1QX1NQRUVEXCI6XCIyXCIsXG5cdFx0XHRcIk1FU1NBR0VfQU5JTUFUSU9OXCI6XCIzXCIsXG5cdFx0XHRcIk1FU1NBR0VfU0FZSU5HXCI6XCI0XCIsXG5cdFx0XHRcIk1FU1NBR0VfVElNRVNUQU1QXCI6XCJiXCIsXG5cdFx0XHRcIk1FU1NBR0VfRElSRUNUSU9OXCI6XCI1XCIsXG5cdFx0XHRcIk1FU1NBR0VfRFVSQVRJT05cIjpcIihcIixcblx0XHRcdFwiTUVTU0FHRV9FTEVNRU5UX0lEXCI6XCIpXCIsXG5cdFx0XHRcIk1FU1NBR0VfQkdDT0xPUlwiOlwiOFwiLFxuXHRcdFx0XCJNRVNTQUdFX0lURU1fSURcIjpcIkdcIixcblx0XHRcdFwiTUVTU0FHRV9LSU5EXCI6XCJIXCIsXG5cdFx0XHRcIk1FU1NBR0VfSVRFTVNcIjpcIklcIixcblx0XHRcdFwiTUVTU0FHRV9EQU1BR0VcIjpcIkpcIixcblx0XHRcdFwiTUVTU0FHRV9EQU1BR0VfVFlQRVwiOlwiS1wiLFxuXHRcdFx0XCJNRVNTQUdFX09SSUVOVEFUSU9OXCI6XCJOXCIsXG5cdFx0XHRcIk1FU1NBR0VfTUFTU1wiOlwiT1wiLFxuXHRcdFx0XCJNRVNTQUdFX0RFTFRBXCI6XCJQXCIsXG5cdFx0XHRcIk1FU1NBR0VfT1dORVJcIjpcIlNcIixcblx0XHRcdFwiTUVTU0FHRV9ERUxUQVNIT1dcIjpcIldcIixcblx0XHRcdFwiTUVTU0FHRV9DVVJSRU5UX1VSTFwiOlwiWVwiLFxuXHRcdFx0XCJNRVNTQUdFX0dBTUVfQVJFQV9ET01fSURcIjpcIlpcIixcblx0XHRcdFwiTUVTU0FHRV9HQU1FX0FSRUFfV0lEVEhcIjpcIi1cIixcblx0XHRcdFwiTUVTU0FHRV9HQU1FX0FSRUFfSEVJR0hUXCI6XCJ8XCIsXG5cdFx0XHRcIk1FU1NBR0VfR0FNRV9BUkVBX0JMT0NLU1wiOlwiP1wiLFxuXHRcdFx0XCJNRVNTQUdFX0dBTUVfQVJFQV9OQU1FXCI6XCIhXCIsXG5cdFx0XHRcIk1FU1NBR0VfR0FNRV9NQVhfSU5TVEFOQ0VcIjpcIsO6XCIsXG5cdFx0XHRcIk1FU1NBR0VfR0FNRV9NQVhfVVNFUlwiOlwiw6NcIixcblx0XHRcdFwiTUVTU0FHRV9HT0lOR19ET1dOXCI6XCIqXCIsXG5cdFx0XHRcIk1FU1NBR0VfQVRUQUNLXCI6XCJUXCIsXG5cdFx0XHRcIk1FU1NBR0VfQ09MT1JcIjpcImBcIixcblx0XHRcdFwiTUVTU0FHRV9NT05TVEVSXCI6XCI8XCIsXG5cdFx0XHRcIk1FU1NBR0VfQVZBVEFSXCI6XCI+XCIsXG5cdFx0XHRcIk1FU1NBR0VfUFJPSkVDVElMRVwiOlwiw7lcIixcblx0XHRcdFwiTUVTU0FHRV9JVEVNXCI6XCIvXCIsXG5cdFx0XHRcIk1FU1NBR0VfRlJPTVwiOlwiw7FcIixcblx0XHRcdFwiTUVTU0FHRV9GUk9NX1RZUEVcIjpcIi5cIixcblx0XHRcdFwiTUVTU0FHRV9GUk9NX1BPU0lUSU9OXCI6XCIsXCIsXG5cdFx0XHRcIk1FU1NBR0VfVE9cIjpcIsO3XCIsXG5cdFx0XHRcIk1FU1NBR0VfVE9fVFlQRVwiOlwiw6VcIixcblx0XHRcdFwiTUVTU0FHRV9UT19QT1NJVElPTlwiOlwiw7JcIixcblx0XHRcdFwiTUVTU0FHRV9JU19ERUFEXCI6XCLDsFwiLFxuXHRcdFx0XCJNRVNTQUdFX0hQXCI6XCJVXCIsXG5cdFx0XHRcIk1FU1NBR0VfQ1VSUkVOVF9IUFwiOlwiUlwiLFxuXHRcdFx0XCJNRVNTQUdFX0xBTkRFRFwiOlwiw6RcIixcblx0XHRcdFwiTkFNRVwiOlwiaFwiLFxuXHRcdFx0XCJUUkFDRV9JRFwiOlwicVwiLFxuXHRcdFx0XCJTRVNTSU9OX0lEXCI6XCJrXCIsXG5cdFx0XHRcIkxPR0lOXCI6XCJsXCIsXG5cdFx0XHRcIkFVVEhfQllfVE9LRU5cIjpcIl5cIixcblx0XHRcdFwiUEFTU1dPUkRcIjpcIndcIixcblx0XHRcdFwiQVZBVEFSU1wiOlwidVwiLFxuXHRcdFx0XCJJVEVNU1wiOlwiXVwiLFxuXHRcdFx0XCJMRUZUXCI6XCIwXCIsXG5cdFx0XHRcIlJJR0hUXCI6XCLDqVwiLFxuXHRcdFx0XCJKVU1QXCI6XCInXCIsXG5cdFx0XHRcIlBST0pFQ1RJTEVTXCI6XCJNXCIsXG5cdFx0XHRcIk1PTlNURVJTXCI6XCJ9XCIsXG5cdFx0XHRcIk1FU1NBR0VfQVRUQUNLX1RZUEVcIjpcIlRcIixcblx0XHRcdFwiTUVTU0FHRV9BVFRBQ0tfTUFJTlwiOlwiO1wiLFxuXHRcdFx0XCJBQ1RJT05fQVRUQUNLXCI6XCJYXCIsXG5cdFx0XHRcIklURU1fU0xPVF9IRUFEXCI6XCJBXCIsXG5cdFx0XHRcIklURU1fU0xPVF9DSEVTVFwiOlwiQlwiLFxuXHRcdFx0XCJJVEVNX1NMT1RfRk9PVFwiOlwiQ1wiLFxuXHRcdFx0XCJJVEVNX1NMT1RfTEVGVF9IQU5EXCI6XCJEXCIsXG5cdFx0XHRcIklURU1fU0xPVF9SSUdIVF9IQU5EXCI6XCJFXCIsXG5cdFx0XHRcIkFDVElPTl9HT0lOR19ET1dOX1NUT1BcIjpcIiZcIixcblx0XHRcdFwiQUNUSU9OX0dPSU5HX0RPV05cIjpcIiVcIlxuXHRcdH0sXG5cdFx0XCJ2ZXJib3NlXCI6e1xuXHRcdFx0XCJEQVRFXCI6XCJkYXRlXCIsXG5cdFx0XHRcIklEXCI6XCJpZFwiLFxuXHRcdFx0XCJNRVNTQUdFXCI6XCJtZXNzYWdlXCIsXG5cdFx0XHRcIkFDVElPTlwiOlwiYWN0aW9uXCIsXG5cdFx0XHRcIkFDVElPTl9FUlJPUlwiOlwiZXJyb3JcIixcblx0XHRcdFwiQUNUSU9OX0xPR0dFRF9PS1wiOlwibG9naW5fb2tcIixcblx0XHRcdFwiQUNUSU9OX0xPR0dFRF9OT0tcIjpcImxvZ2d1ZWRfbm9rXCIsXG5cdFx0XHRcIkFDVElPTl9TWU5DXCI6XCJzeW5jXCIsXG5cdFx0XHRcIkFDVElPTl9TWU5DX0FWQVRBUlwiOlwiYXZhdGFyX3N5bmNcIixcblx0XHRcdFwiQUNUSU9OX1NZTkNfSVRFTVwiOlwiaXRlbV9zeW5jXCIsXG5cdFx0XHRcIkFDVElPTl9DSE9PU0VfQ0hBUlwiOlwicmV0dXJuX2NoYXJhdGVyXCIsXG5cdFx0XHRcIkFDVElPTl9DSE9PU0VfQ0hBUl9PS1wiOlwiYXZhdGFyX3NlbGVjdGVkXCIsXG5cdFx0XHRcIkFDVElPTl9NT1ZFX1NUQVJUXCI6XCJtb3ZlX3N0YXJ0XCIsXG5cdFx0XHRcIkFDVElPTl9NT1ZFX1NUT1BcIjpcIm1vdmVfc3RvcFwiLFxuXHRcdFx0XCJBQ1RJT05fSlVNUFwiOlwianVtcFwiLFxuXHRcdFx0XCJBQ1RJT05fUkVNT1ZFX1BST0pFQ1RJTEVcIjpcInJlbW92ZV9wcm9qZWN0aWxlXCIsXG5cdFx0XHRcIkFDVElPTl9HRVRfSVRFTV9URU1QTEFURVwiOlwiZ2V0X2l0ZW1cIixcblx0XHRcdFwiQUNUSU9OX1NZTkNfUFJPSkVDVElMRVwiOlwic3luY19wcm9qZWN0aWxlXCIsXG5cdFx0XHRcIkFDVElPTl9MT0dPVVRcIjpcImxvZ291dFwiLFxuXHRcdFx0XCJBQ1RJT05fU1lOQ19NT05TVEVSXCI6XCJzeW5jX21vbnN0ZXJcIixcblx0XHRcdFwiQUNUSU9OX0NPTExJREVcIjpcImFjdGlvbl9jb2xsaWRlXCIsXG5cdFx0XHRcIkFDVElPTl9JVEVNX0dSQUJCRURcIjpcIml0ZW1fZ3JhYmJlZFwiLFxuXHRcdFx0XCJBQ1RJT05fU1lOQ19BVFRBQ0tfWk9ORVwiOlwiYXR0YWNrX3pvbmVcIixcblx0XHRcdFwiTUVTU0FHRV9NT1ZFX0lEXCI6XCJtb3ZlX2lkXCIsXG5cdFx0XHRcIk1FU1NBR0VfTU9WRV9UWVBFXCI6XCJtb3ZlX3R5cGVcIixcblx0XHRcdFwiTUVTU0FHRV9NT1ZFX1NUQVJUXCI6XCJtb3ZlX3N0YXJ0XCIsXG5cdFx0XHRcIk1FU1NBR0VfQ0hBUlwiOlwiY2hhcmFjdGVyXCIsXG5cdFx0XHRcIk1FU1NBR0VfQ0hBUk5BTUVcIjpcImNoYXJhY3Rlcl9uYW1lXCIsXG5cdFx0XHRcIk1FU1NBR0VfUE9TSVRJT05cIjpcInBvc2l0aW9uXCIsXG5cdFx0XHRcIk1FU1NBR0VfVkVMT0NJVFlcIjpcInZlbG9jaXR5XCIsXG5cdFx0XHRcIk1FU1NBR0VfVVNFUl9JTlBVVF9WRUxPQ0lUWVwiOlwidXNlcl9pbnB1dF92ZWxvY2l0eVwiLFxuXHRcdFx0XCJNRVNTQUdFX0FDQ0VMRVJBVElPTlwiOlwiYWNjZWxlcmF0aW9uXCIsXG5cdFx0XHRcIk1FU1NBR0VfU1BFQUtcIjpcInNwZWFrXCIsXG5cdFx0XHRcIk1FU1NBR0VfU0hPT1RcIjpcInNob290XCIsXG5cdFx0XHRcIk1FU1NBR0VfU0laRVwiOlwic2l6ZVwiLFxuXHRcdFx0XCJNRVNTQUdFX1NLSU5cIjpcInNraW5cIixcblx0XHRcdFwiTUVTU0FHRV9ERVRBSUxcIjpcImRldGFpbFwiLFxuXHRcdFx0XCJNRVNTQUdFX01PVkVfU1BFRURcIjpcIm1vdmVfc3BlZWRcIixcblx0XHRcdFwiTUVTU0FHRV9KVU1QX1NQRUVEXCI6XCJqdW1wX3NwZWVkXCIsXG5cdFx0XHRcIk1FU1NBR0VfQU5JTUFUSU9OXCI6XCJhbmltYXRpb25cIixcblx0XHRcdFwiTUVTU0FHRV9TQVlJTkdcIjpcInNheWluZ1wiLFxuXHRcdFx0XCJNRVNTQUdFX1RJTUVTVEFNUFwiOlwidGltZXN0YW1wXCIsXG5cdFx0XHRcIk1FU1NBR0VfRElSRUNUSU9OXCI6XCJkaXJlY3Rpb25cIixcblx0XHRcdFwiTUVTU0FHRV9EVVJBVElPTlwiOlwiZHVyYXRpb25cIixcblx0XHRcdFwiTUVTU0FHRV9FTEVNRU5UX0lEXCI6XCJlbGVtZW50X2lkXCIsXG5cdFx0XHRcIk1FU1NBR0VfQkdDT0xPUlwiOlwiYmdfY29sb3JcIixcblx0XHRcdFwiTUVTU0FHRV9JVEVNX0lEXCI6XCJpdGVtX2lkXCIsXG5cdFx0XHRcIk1FU1NBR0VfS0lORFwiOlwia2luZFwiLFxuXHRcdFx0XCJNRVNTQUdFX0lURU1TXCI6XCJpdGVtc1wiLFxuXHRcdFx0XCJNRVNTQUdFX0RBTUFHRVwiOlwiZGFtYWdlXCIsXG5cdFx0XHRcIk1FU1NBR0VfREFNQUdFX1RZUEVcIjpcImRhbWFnZV90eXBlXCIsXG5cdFx0XHRcIk1FU1NBR0VfT1JJRU5UQVRJT05cIjpcIm9yaWVudGF0aW9uXCIsXG5cdFx0XHRcIk1FU1NBR0VfTUFTU1wiOlwibWFzc1wiLFxuXHRcdFx0XCJNRVNTQUdFX0RFTFRBXCI6XCJkZWx0YVwiLFxuXHRcdFx0XCJNRVNTQUdFX09XTkVSXCI6XCJvd25lclwiLFxuXHRcdFx0XCJNRVNTQUdFX0RFTFRBU0hPV1wiOlwiZGVsdGFfc2hvd1wiLFxuXHRcdFx0XCJNRVNTQUdFX0NVUlJFTlRfVVJMXCI6XCJjdXJyZW50X3VybFwiLFxuXHRcdFx0XCJNRVNTQUdFX0dBTUVfQVJFQV9ET01fSURcIjpcImdhbWVfYXJlYV9kb21faWRcIixcblx0XHRcdFwiTUVTU0FHRV9HQU1FX0FSRUFfV0lEVEhcIjpcImdhbWVfYXJlYV93aWR0aFwiLFxuXHRcdFx0XCJNRVNTQUdFX0dBTUVfQVJFQV9IRUlHSFRcIjpcImdhbWVfYXJlYV9oZWlnaHRcIixcblx0XHRcdFwiTUVTU0FHRV9HQU1FX0FSRUFfQkxPQ0tTXCI6XCJnYW1lX2FyZWFfYmxvY2tzXCIsXG5cdFx0XHRcIk1FU1NBR0VfR0FNRV9BUkVBX05BTUVcIjpcImdhbWVfYXJlYV9uYW1lXCIsXG5cdFx0XHRcIk1FU1NBR0VfR0FNRV9NQVhfSU5TVEFOQ0VcIjpcIm1heF9pbnN0YW5jZVwiLFxuXHRcdFx0XCJNRVNTQUdFX0dBTUVfTUFYX1VTRVJcIjpcIm1heF91c2VyXCIsXG5cdFx0XHRcIk1FU1NBR0VfR09JTkdfRE9XTlwiOlwiZ29pbmdfZG93blwiLFxuXHRcdFx0XCJNRVNTQUdFX0FUVEFDS1wiOlwiYXR0YWNrXCIsXG5cdFx0XHRcIk1FU1NBR0VfQ09MT1JcIjpcImNvbG9yXCIsXG5cdFx0XHRcIk1FU1NBR0VfTU9OU1RFUlwiOlwibW9uc3RlclwiLFxuXHRcdFx0XCJNRVNTQUdFX0FWQVRBUlwiOlwiYXZhdGFyXCIsXG5cdFx0XHRcIk1FU1NBR0VfUFJPSkVDVElMRVwiOlwicHJvamVjdGlsZVwiLFxuXHRcdFx0XCJNRVNTQUdFX0lURU1cIjpcIml0ZW1cIixcblx0XHRcdFwiTUVTU0FHRV9GUk9NXCI6XCJmcm9tXCIsXG5cdFx0XHRcIk1FU1NBR0VfRlJPTV9UWVBFXCI6XCJmcm9tX3R5cGVcIixcblx0XHRcdFwiTUVTU0FHRV9GUk9NX1BPU0lUSU9OXCI6XCJmcm9tX3Bvc2l0aW9uXCIsXG5cdFx0XHRcIk1FU1NBR0VfVE9cIjpcInRvXCIsXG5cdFx0XHRcIk1FU1NBR0VfVE9fVFlQRVwiOlwidG9fdHlwZVwiLFxuXHRcdFx0XCJNRVNTQUdFX1RPX1BPU0lUSU9OXCI6XCJ0b19wb3NpdGlvblwiLFxuXHRcdFx0XCJNRVNTQUdFX0lTX0RFQURcIjpcImlzX2RlYWRcIixcblx0XHRcdFwiTUVTU0FHRV9IUFwiOlwiaHBcIixcblx0XHRcdFwiTUVTU0FHRV9DVVJSRU5UX0hQXCI6XCJjdXJyZW50X2hwXCIsXG5cdFx0XHRcIk1FU1NBR0VfTEFOREVEXCI6XCJsYW5kZWRcIixcblx0XHRcdFwiVFJBQ0VfSURcIjpcInRyYWNlX2lkXCIsXG5cdFx0XHRcIlNFU1NJT05fSURcIjpcInNlc3Npb25faWRcIixcblx0XHRcdFwiTE9HSU5cIjpcImxvZ2luXCIsXG5cdFx0XHRcIkFVVEhfQllfVE9LRU5cIjpcImF1dGhfYnlfdG9rZW5cIixcblx0XHRcdFwiTkFNRVwiOlwibmFtZVwiLFxuXHRcdFx0XCJQQVNTV09SRFwiOlwicGFzc3dvcmRcIixcblx0XHRcdFwiQVZBVEFSU1wiOlwiYXZhdGFyc1wiLFxuXHRcdFx0XCJJVEVNU1wiOlwiaXRlbXNcIixcblx0XHRcdFwiTEVGVFwiOlwibGVmdFwiLFxuXHRcdFx0XCJSSUdIVFwiOlwicmlnaHRcIixcblx0XHRcdFwiSlVNUFwiOlwianVtcFwiLFxuXHRcdFx0XCJQUk9KRUNUSUxFU1wiOlwicHJvamVjdGlsZXNcIixcblx0XHRcdFwiTU9OU1RFUlNcIjpcIm1vbnN0ZXJzXCIsXG5cdFx0XHRcIk1FU1NBR0VfQVRUQUNLX1RZUEVcIjpcImF0dGFja190eXBlXCIsXG5cdFx0XHRcIk1FU1NBR0VfQVRUQUNLX01BSU5cIjpcImF0dGFja19tYWluXCIsXG5cdFx0XHRcIkFDVElPTl9BVFRBQ0tcIjpcImFjdGlvbl9hdHRhY2tcIixcblx0XHRcdFwiSVRFTV9TTE9UX0hFQURcIjpcIml0ZW1fc2xvdF9oZWFkXCIsXG5cdFx0XHRcIklURU1fU0xPVF9DSEVTVFwiOlwiaXRlbV9zbG90X2NoZXN0XCIsXG5cdFx0XHRcIklURU1fU0xPVF9GT09UXCI6XCJpdGVtX3Nsb3RfZm9vdFwiLFxuXHRcdFx0XCJJVEVNX1NMT1RfTEVGVF9IQU5EXCI6XCJpdGVtX3Nsb3RfbGVmdF9oYW5kXCIsXG5cdFx0XHRcIklURU1fU0xPVF9SSUdIVF9IQU5EXCI6XCJpdGVtX3Nsb3RfcmlnaHRfaGFuZFwiLFxuXHRcdFx0XCJBQ1RJT05fR09JTkdfRE9XTl9TVE9QXCI6XCJhY3Rpb25fZ29pbmdfZG93blwiLFxuXHRcdFx0XCJBQ1RJT05fR09JTkdfRE9XTlwiOlwiYWN0aW9uX2dvaW5nX2Rvd25fc3RvcFwiXG5cdFx0fVxuXHR9XG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBvcmcuZGJ5emVyby50b29scy5QaHlzaWNzIHV0aWwgY2xhc3NcbiAqXG4gKiBAYXV0aG9yIGRieXplcm9cbiAqIEBkYXRlIDogMjAxMy8wOS8yN1xuICogQGRlc2NyaXB0aW9uIDogUGh5c2ljcyB0b29sc1xuICpcbiAqL1xuIFxudmFyIG9yZyA9IG9yZyB8fCB7fSA7XG5vcmcuZGJ5emVybyA9IG9yZy5kYnl6ZXJvIHx8IHt9IDtcbm9yZy5kYnl6ZXJvLnRvb2xzID0gb3JnLmRieXplcm8udG9vbHMgfHwge30gO1xuXG4oZnVuY3Rpb24odG9vbHMsZG9jdW1lbnQsdW5kZWZpbmVkKSB7XG5cdHZhciBWZWN0b3IgPSB0b29scy5WZWN0b3I7XG5cblx0dG9vbHMuUGh5c2ljcyA9IHt9O1xuXG5cdC8vRm91cnRoIHBhcmFtcyBhcmUgb3JnLmRieXplcm8udG9vbHMuVmVjdG9yXG5cdHRvb2xzLlBoeXNpY3MuU2VnbWVudHNDb2xsaXNpb24gPSBmdW5jdGlvbihhMSxhMixiMSxiMikge1xuXG5cdFx0aW50ZXJzZWN0aW9uID0gVmVjdG9yLlplcm8oKTtcblxuXHRcdHZhciBiID0gVmVjdG9yLlN1YihhMixhMSk7XG5cdFx0dmFyIGQgPSBWZWN0b3IuU3ViKGIyLGIxKTtcblx0XHR2YXIgYkRvdERQZXJwID0gYi54ICogZC55IC0gYi55ICogZC54O1xuXG5cdFx0Ly8gaWYgYiBkb3QgZCA9PSAwLCBpdCBtZWFucyB0aGUgbGluZXMgYXJlIHBhcmFsbGVsIHNvIGhhdmUgaW5maW5pdGUgaW50ZXJzZWN0aW9uIHBvaW50c1xuXHRcdGlmIChiRG90RFBlcnAgPT0gMClcblx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR2YXIgYyA9IFZlY3Rvci5TdWIoYjEsYTEpO1xuXHRcdHZhciB0ID0gKGMueCAqIGQueSAtIGMueSAqIGQueCkgLyBiRG90RFBlcnA7XG5cblx0XHRpZiAodCA8IDAgfHwgdCA+IDEpIHJldHVybiBmYWxzZTtcblxuXHRcdHZhciB1ID0gKGMueCAqIGIueSAtIGMueSAqIGIueCkgLyBiRG90RFBlcnA7XG5cdFx0aWYgKHUgPCAwIHx8IHUgPiAxKSByZXR1cm4gZmFsc2U7XG5cdFx0Yi5zY2FsYXIodCk7XG5cdFx0cmV0dXJuIFZlY3Rvci5TdW0oYTEsIGIpO1xuXG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHBvc2l0aW9uICAgICAgVmVjdG9yICBwb3NpdGlvbiBhdCB0MFxuXHQgKiBAcGFyYW0gdmVsb2NpdHkgICAgICBWZWN0b3IgIFxuXHQgKiBAcGFyYW0gZm9yY2UgICAgICAgICBWZWN0b3IgIHN1bSBvZiBhbGwgZm9yY2UgYXBwbGllZCBcblx0ICogQHBhcmFtIGR0ICAgICAgICAgICAgTnVtZXJpYyB0aW1lc3RlcFxuXHQgKlxuXHQgKiBAcmV0dXJuICBWZWN0b3IgIG5ldyBwb3NpdGlvbiBhdCB0MCArIGR0XG5cdCAqXG5cdCAqIGVxdWF0aW9uIDogcG9zaXRpb24gPSB2aXRlc3NlICogZHQgKyAwLjUgKiBmb3JjZSAqIGR0wrJcblx0ICovXG5cdHRvb2xzLlBoeXNpY3MuTW90aW9uSW50ZWdyYXRpb24gPSBmdW5jdGlvbihwb3NpdGlvbix2ZWxvY2l0eSxmb3JjZSxkdCkge1xuXHRcdHZhciB2ID0gdmVsb2NpdHkuZHVwbGljYXRlKCk7XG5cdFx0di5zY2FsYXIoZHQpO1xuXHRcdFxuXHRcdHZhciBhID0gZm9yY2UuZHVwbGljYXRlKCk7XG5cdFx0YS5zY2FsYXIoMC41ICogZHQgKiBkdCk7XG5cdFx0XG5cdFx0cmV0dXJuIFZlY3Rvci5TdW0oIHBvc2l0aW9uLmR1cGxpY2F0ZSgpLCBWZWN0b3IuU3VtKCB2LCBhICkgKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0gcG9zaXRpb24gICAgICBWZWN0b3Jcblx0ICogQHBhcmFtIHZlbG9jaXR5ICAgICAgVmVjdG9yICBcblx0ICogQHBhcmFtIGZvcmNlICAgICAgICAgVmVjdG9yXG5cdCAqIEBwYXJhbSBkdCAgICAgICAgICAgIE51bWVyaWMgdGltZXN0ZXBcblx0ICogQHJldHVybiBPYmplY3Qge2R4OmR4LGR2OmR2fVxuXHQgKlxuXHQgKiBlcXVhdGlvbiA6IHBvc2l0aW9uID0gdml0ZXNzZSAqIGR0ICsgMC41ICogZm9yY2UgKiBkdMKyXG5cdCAqL1xuXHR0b29scy5QaHlzaWNzLmludGVncmF0ZUtNNCA9IGZ1bmN0aW9uKHBvc2l0aW9uLCB2ZWxvY2l0eSwgZm9yY2UsIGR0KSB7XG5cblx0XHR2YXIgYSA9IF9ldmFsdWF0ZU1LNCggdmVsb2NpdHksIGZvcmNlLCAwLjAsICAgIG5ldyBfc3RhdGUoKSApO1xuXHRcdHZhciBiID0gX2V2YWx1YXRlTUs0KCB2ZWxvY2l0eSwgZm9yY2UsIGR0KjAuNSwgYSApO1xuXHRcdHZhciBjID0gX2V2YWx1YXRlTUs0KCB2ZWxvY2l0eSwgZm9yY2UsIGR0KjAuNSwgYiApO1xuXHRcdHZhciBkID0gX2V2YWx1YXRlTUs0KCB2ZWxvY2l0eSwgZm9yY2UsIGR0LCAgICAgIGMgKTtcblx0XHR2YXIgb3V0cHV0ID0ge307XG5cdFx0b3V0cHV0WydkeCddID0gVmVjdG9yLlNjYWxhcihcblx0XHRcdFZlY3Rvci5TdW0oXG5cdFx0XHRcdGEucG9zaXRpb24sXG5cdFx0XHRcdFZlY3Rvci5TdW0oXG5cdFx0XHRcdFx0VmVjdG9yLlNjYWxhcihcblx0XHRcdFx0XHRcdFZlY3Rvci5TdW0oXG5cdFx0XHRcdFx0XHRcdGIucG9zaXRpb24sIFxuXHRcdFx0XHRcdFx0XHRjLnBvc2l0aW9uXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0MlxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0ZC5wb3NpdGlvblxuXHRcdFx0XHQpXG5cdFx0XHQpLFxuXHRcdFx0ZHQgKiAwLjE2NjY2NjY2NjY2NyBcblx0XHQpO1xuXHRcdG91dHB1dFsnZHYnXSA9IFZlY3Rvci5TY2FsYXIoXG5cdFx0XHRWZWN0b3IuU3VtKFxuXHRcdFx0XHRhLnZlbG9jaXR5LFxuXHRcdFx0XHRWZWN0b3IuU3VtKFxuXHRcdFx0XHRcdFZlY3Rvci5TY2FsYXIoXG5cdFx0XHRcdFx0XHRWZWN0b3IuU3VtKFxuXHRcdFx0XHRcdFx0XHRiLnZlbG9jaXR5LFxuXHRcdFx0XHRcdFx0XHRjLnZlbG9jaXR5XG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0MlxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0ZC52ZWxvY2l0eVxuXHRcdFx0XHQpXG5cdFx0XHQpLFxuXHRcdFx0ZHQgKiAwLjE2NjY2NjY2NjY2N1xuXHRcdCk7XG5cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cblx0dmFyIF9ldmFsdWF0ZU1LNCA9IGZ1bmN0aW9uICggdmVsb2NpdHksIGZvcmNlLCBkdCwgZGVyaXZhdGUgKSB7XG5cdFx0dmFyIG91dHB1dCA9IG5ldyBfc3RhdGUoKTtcblx0XHR2YXIgZGVyaXYgPSBkZXJpdmF0ZS52ZWxvY2l0eS5kdXBsaWNhdGUoKTtcblx0XHRkZXJpdi5zY2FsYXIoZHQpO1xuXHRcdG91dHB1dC5wb3NpdGlvbiA9IFZlY3Rvci5TdW0odmVsb2NpdHksIGRlcml2KTtcblx0XHRvdXRwdXQudmVsb2NpdHkgPSBmb3JjZTtcblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9XG5cblx0dmFyIF9zdGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnBvc2l0aW9uID0gbmV3IFZlY3RvcigwLDApO1xuXHRcdHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yKDAsMCk7XG5cdH1cblxufSkob3JnLmRieXplcm8udG9vbHMsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBVc2VyIG1vdmVtZW50IE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDEzLzEwLzI4XG4gKiBAZGVzY3JpcHRpb24gOiBVc2VyIG1vdmVtZW50IGZvcmNlXG4gKlxuICoqL1xuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXG5cdGRlaW1vcy5waHlzaWMgPSBkZWltb3MucGh5c2ljIHx8IHt9IDtcblxuXHQvKipcblx0ICogVXNlciBNb3ZlbWVudCBjb25zdHJ1Y3RvclxuXHQgKiBcblx0ICogQHBhcmFtIFZlY3RvciBwaHlzaWNcblx0ICogXG5cdCAqKi9cblxuXHRkZWltb3MucGh5c2ljLlVzZXJNb3ZlbWVudCA9IGZ1bmN0aW9uIChwaHlzaWMsIHR5cGUpIHtcblx0XHR0aGlzLmlkID0gZGVpbW9zLnBoeXNpYy5Vc2VyTW92ZW1lbnQubGFzdGlkKys7XG5cdFx0dGhpcy5tb3ZlbWVudCA9IHBoeXNpYztcblx0XHR0aGlzLnN0YXJ0VGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0dGhpcy5kdXJhdGlvbkludGVncmF0ZWQgPSAwO1xuXHRcdHRoaXMuZHVyYXRpb24gPSBudWxsO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdH1cblxuXHRkZWltb3MucGh5c2ljLlVzZXJNb3ZlbWVudC5sYXN0aWQgPSAwO1xuXG59KShvcmcuZGJ5emVyby5kZWltb3MsIGRvY3VtZW50KTsiLCIvKipcbiAqXG4gKiBHcmF2aXR5IE9iamVjdFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDE0LzAyLzEwXG4gKiBAZGVzY3JpcHRpb24gOiBHcmF2aXR5XG4gKlxuICoqL1xuXG4oZnVuY3Rpb24oZGVpbW9zLGRvY3VtZW50LHVuZGVmaW5lZCkge1xuXHRkZWltb3MucGh5c2ljID0gZGVpbW9zLnBoeXNpYyB8fCB7fSA7XG5cdGRlaW1vcy5waHlzaWMuR3Jhdml0eSA9IG5ldyBvcmcuZGJ5emVyby50b29scy5WZWN0b3IoMCwgMzAwKTtcbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpOyIsIi8qKlxuICpcbiAqIG9yZy5kYnl6ZXJvLmRlaW1vcy5hbmFseXNlLk1hbnVhbFxuICpcbiAqIEBhdXRob3IgZGJ5emVyb1xuICogQGRhdGUgOiAyMDE0LzA4LzMwXG4gKiBAZGVzY3JpcHRpb24gOiBBbmFseXNlciBieSBtYW51YWxseSBnYW1lIGFyZWEgYnkgYnJvd3NlclxuICpcbiAqICovXG5cbnZhciBvcmcgPSBvcmcgfHwge30gO1xub3JnLmRieXplcm8gPSBvcmcuZGJ5emVybyB8fCB7fSA7XG5vcmcuZGJ5emVyby5kZWltb3MgPSBvcmcuZGJ5emVyby5kZWltb3MgfHwge30gO1xub3JnLmRieXplcm8uZGVpbW9zLmFuYWx5c2VyID0gb3JnLmRieXplcm8uZGVpbW9zLmFuYWx5c2VyIHx8IHt9IDtcblxuKGZ1bmN0aW9uKGRlaW1vcyxkb2N1bWVudCx1bmRlZmluZWQpIHtcblx0ZGVpbW9zLmFuYWx5c2VyLk1hbnVhbCA9IGZ1bmN0aW9uKGRvbUlEKXtcblx0XHR0aGlzLmFyZWFEb21JZCA9IGRvbUlEO1xuXHRcdHRoaXMuYXJlYVpvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkb21JRCk7XG5cdFx0dGhpcy5ibG9ja3NCeUlkID0gW107XG5cdFx0dGhpcy5ibG9ja3NCeUNsYXNzID0gW107XG5cdFx0dGhpcy5ibG9ja3NCeVRhZyA9IFtdO1xuXHRcdHRoaXMuYmxvY2tzUGFyc2VkID0gW107XG5cdH1cblx0ZGVpbW9zLmFuYWx5c2VyLk1hbnVhbC5wcm90b3R5cGUuYWRkQmxvY2sgPSBmdW5jdGlvbihzZWxlY3RvciwgcGxhdGVmb3JtZSl7XG5cdFx0Ly9pZiBJRFxuXHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14jJywnaScpO1xuXHRcdGlmKHJlZ2V4LnRlc3Qoc2VsZWN0b3IpKSB7XG5cdFx0XHR0aGlzLmFkZEJsb2NrQnlJZChzZWxlY3Rvci5zdWJzdHIoMSkscGxhdGVmb3JtZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vaWYgQ2xhc3Ncblx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeXFwuJywnaScpO1xuXHRcdGlmKHJlZ2V4LnRlc3Qoc2VsZWN0b3IpKSB7XG5cdFx0XHR0aGlzLmFkZEJsb2NrQnlDbGFzcyhzZWxlY3Rvci5zdWJzdHIoMSkscGxhdGVmb3JtZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vaWYgc2VjdG9yXG5cdFx0dGhpcy5hZGRCbG9ja0J5VGFnKHNlbGVjdG9yLHBsYXRlZm9ybWUpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRlaW1vcy5hbmFseXNlci5NYW51YWwucHJvdG90eXBlLmFkZEJsb2NrQnlJZCA9IGZ1bmN0aW9uKGRvbUlkLCBwbGF0ZWZvcm1lKXtcblx0XHR0aGlzLmJsb2Nrc0J5SWQucHVzaCh7J3NlbGVjdG9yJzpkb21JZCwncGxhdGVmb3JtZSc6ISFwbGF0ZWZvcm1lfSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGVpbW9zLmFuYWx5c2VyLk1hbnVhbC5wcm90b3R5cGUuYWRkQmxvY2tCeUNsYXNzID0gZnVuY3Rpb24oY2xhc3NOYW1lLCBwbGF0ZWZvcm1lKXtcblx0XHR0aGlzLmJsb2Nrc0J5Q2xhc3MucHVzaCh7J3NlbGVjdG9yJzpjbGFzc05hbWUsJ3BsYXRlZm9ybWUnOiEhcGxhdGVmb3JtZX0pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdGRlaW1vcy5hbmFseXNlci5NYW51YWwucHJvdG90eXBlLmFkZEJsb2NrQnlUYWcgPSBmdW5jdGlvbih0YWdOYW1lLCBwbGF0ZWZvcm1lKXtcblx0XHR0aGlzLmJsb2Nrc0J5VGFnLnB1c2goeydzZWxlY3Rvcic6dGFnTmFtZSwncGxhdGVmb3JtZSc6ISFwbGF0ZWZvcm1lfSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0ZGVpbW9zLmFuYWx5c2VyLk1hbnVhbC5wcm90b3R5cGUuZ2V0Q29vcmRzID0gZnVuY3Rpb24oZG9tQ29udGVudCxkb21CbG9jayl7XG5cdFx0Ly9icm93c2UgYWxsIHBhcmVudCB0byBkb21Db250ZW50IHRvIGFkZCB0aGVyZSBjb29yZFxuXHRcdHZhciBsZWZ0ID0gMDtcblx0XHR2YXIgdG9wID0gMDtcblx0XHR2YXIgZG9tQnJvd3NlID0gZG9tQmxvY2s7IFxuXHRcdHdoaWxlKGRvbUJyb3dzZS5vZmZzZXRQYXJlbnQgIT0gZG9tQ29udGVudCkge1xuXHRcdFx0aWYoZG9tQnJvd3NlLm9mZnNldFBhcmVudCA9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0bGVmdCArPSBkb21Ccm93c2Uub2Zmc2V0TGVmdDtcblx0XHRcdHRvcCArPSBkb21Ccm93c2Uub2Zmc2V0VG9wO1xuXHRcdFx0ZG9tQnJvd3NlID0gZG9tQnJvd3NlLm9mZnNldFBhcmVudDtcblx0XHR9XG5cdFx0bGVmdCArPSBkb21Ccm93c2Uub2Zmc2V0TGVmdDtcblx0XHR0b3AgKz0gZG9tQnJvd3NlLm9mZnNldFRvcDtcblx0XHRyZXR1cm4geydsZWZ0JzpsZWZ0LCd0b3AnOnRvcH07XG5cdH1cblx0ZGVpbW9zLmFuYWx5c2VyLk1hbnVhbC5wcm90b3R5cGUuYWRkRG9tQmxvY2sgPSBmdW5jdGlvbihkb21CbG9jayxpZCxibG9jayl7XG5cdFx0Ly90ZW1wIHZhciB1c2VkIG9uIHByb2Nlc3Ncblx0XHR2YXIgY29vcmRzLGJsb2NrTGVmdCxibG9ja1RvcCxibG9ja0hlaWdodCxibG9ja1dpZHRoLGJsb2NrSnNvbjtcblxuXHRcdGNvb3JkcyA9IHRoaXMuZ2V0Q29vcmRzKHRoaXMuYXJlYVpvbmUsZG9tQmxvY2spO1xuXHRcdGlmKGNvb3JkcyA9PT0gbnVsbCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ2Jsb2NrIGlzIG5vdCBhIGNoaWxkIG9mIHRoZSBhcmVhJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGJsb2NrTGVmdCA9IGNvb3Jkcy5sZWZ0O1xuXHRcdGJsb2NrVG9wID0gY29vcmRzLnRvcDtcblx0XHRibG9ja0hlaWdodCA9IGRvbUJsb2NrLm9mZnNldEhlaWdodDtcblx0XHRibG9ja1dpZHRoID0gZG9tQmxvY2sub2Zmc2V0V2lkdGg7XG5cdFx0YmxvY2tKc29uID0ge1xuXHRcdFx0XCJwb3NpdGlvblwiOntcInhcIjpibG9ja0xlZnQsXCJ5XCI6YmxvY2tUb3B9LFxuXHRcdFx0XCJoZWlnaHRcIjpibG9ja0hlaWdodCxcIndpZHRoXCI6YmxvY2tXaWR0aCxcblx0XHRcdFwidHlwZVwiOntcInZhbHVlXCI6MCxcInR5cGVcIjooKGJsb2NrLnBsYXRlZm9ybWUpPydwbGF0ZWZvcm0nOidibG9ja3MnKX0sXG5cdFx0XHRcImlkXCI6XCJibG9jay1cIitpZCtcIi1ieS1pZC1cIitibG9jay5zZWxlY3Rvcixcblx0XHRcdFwidmVydGV4VExcIjp7XCJ4XCI6YmxvY2tMZWZ0LFwieVwiOmJsb2NrVG9wfSxcblx0XHRcdFwidmVydGV4VFJcIjp7XCJ4XCI6YmxvY2tMZWZ0ICsgYmxvY2tXaWR0aCxcInlcIjpibG9ja1RvcH0sXG5cdFx0XHRcInZlcnRleEJMXCI6e1wieFwiOmJsb2NrTGVmdCxcInlcIjpibG9ja1RvcCArIGJsb2NrSGVpZ2h0fSxcblx0XHRcdFwidmVydGV4QlJcIjp7XCJ4XCI6YmxvY2tMZWZ0ICsgYmxvY2tXaWR0aCxcInlcIjpibG9ja1RvcCArIGJsb2NrSGVpZ2h0fVxuXHRcdH1cblx0XHR0aGlzLmJsb2Nrc1BhcnNlZC5wdXNoKGJsb2NrSnNvbik7XG5cdH1cblx0ZGVpbW9zLmFuYWx5c2VyLk1hbnVhbC5wcm90b3R5cGUuZXhlYyA9IGZ1bmN0aW9uKCl7XG5cdFx0Y29uc29sZS5sb2coJy4uLnBhcnNpbmcnKTtcblx0XHR0aGlzLmJsb2Nrc1BhcnNlZCA9IFtdO1xuXG5cdFx0Ly90ZW1wIHZhciB1c2VkIG9uIHByb2Nlc3Ncblx0XHR2YXIgYmxvY2tJZCA9IDE7XG5cdFx0dmFyIGRvbUJsb2NrLGRvbUJsb2Nrcyxjb29yZHM7XG5cblx0XHQvL2J5IGlkXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmJsb2Nrc0J5SWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGRvbUJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5ibG9ja3NCeUlkW2ldLnNlbGVjdG9yKTtcblx0XHRcdHRoaXMuYWRkRG9tQmxvY2soZG9tQmxvY2ssYmxvY2tJZCsrLHRoaXMuYmxvY2tzQnlJZFtpXSk7XG5cdFx0fTtcblxuXHRcdC8vYnkgY2xhc3Ncblx0XHRmb3IgKHZhciBpQ2xhc3MgPSAwOyBpQ2xhc3MgPCB0aGlzLmJsb2Nrc0J5Q2xhc3MubGVuZ3RoOyBpQ2xhc3MrKykge1xuXHRcdFx0ZG9tQmxvY2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSh0aGlzLmJsb2Nrc0J5Q2xhc3NbaUNsYXNzXS5zZWxlY3Rvcik7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbUJsb2Nrcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHR2YXIgZG9tQmxvY2sgPSBkb21CbG9ja3Nbal07XG5cdFx0XHRcdHRoaXMuYWRkRG9tQmxvY2soZG9tQmxvY2ssYmxvY2tJZCsrLHRoaXMuYmxvY2tzQnlDbGFzc1tpQ2xhc3NdKTtcblx0XHRcdH07XG5cdFx0fTtcblxuXHRcdC8vYnkgc2VjdGlvbiBcblx0XHQvL1RPRE9cblx0XHRjb25zb2xlLmxvZygnZG9uZSEnKTtcblx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmJsb2Nrc1BhcnNlZCkpO1xuXHR9XG5cbn0pKG9yZy5kYnl6ZXJvLmRlaW1vcywgZG9jdW1lbnQpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
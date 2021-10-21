import axios from "axios";

export const Base64 = {
	_keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
	encode: function(e) {
		var t = ''
		var n, r, i, s, o, u, a
		var f = 0
		e = Base64._utf8_encode(e)
		while (f < e.length) {
			n = e.charCodeAt(f++)
			r = e.charCodeAt(f++)
			i = e.charCodeAt(f++)
			s = n >> 2
			o = ((n & 3) << 4) | (r >> 4)
			u = ((r & 15) << 2) | (i >> 6)
			a = i & 63
			if (isNaN(r)) {
				u = a = 64
			} else if (isNaN(i)) {
				a = 64
			}
			t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
		}
		return t
	},
	decode: function(e) {
		var t = ''
		var n, r, i
		var s, o, u, a
		var f = 0
		e = e.replace(/[^A-Za-z0-9\+\/\=]/g, '')
		while (f < e.length) {
			s = this._keyStr.indexOf(e.charAt(f++))
			o = this._keyStr.indexOf(e.charAt(f++))
			u = this._keyStr.indexOf(e.charAt(f++))
			a = this._keyStr.indexOf(e.charAt(f++))
			n = (s << 2) | (o >> 4)
			r = ((o & 15) << 4) | (u >> 2)
			i = ((u & 3) << 6) | a
			t = t + String.fromCharCode(n)
			if (u != 64) {
				t = t + String.fromCharCode(r)
			}
			if (a != 64) {
				t = t + String.fromCharCode(i)
			}
		}
		t = Base64._utf8_decode(t)
		return t
	},
	_utf8_encode: function(e) {
		e = e.replace(/\r\n/g, '\n')
		var t = ''
		for (var n = 0; n < e.length; n++) {
			var r = e.charCodeAt(n)
			if (r < 128) {
				t += String.fromCharCode(r)
			} else if (r > 127 && r < 2048) {
				t += String.fromCharCode((r >> 6) | 192)
				t += String.fromCharCode((r & 63) | 128)
			} else {
				t += String.fromCharCode((r >> 12) | 224)
				t += String.fromCharCode(((r >> 6) & 63) | 128)
				t += String.fromCharCode((r & 63) | 128)
			}
		}
		return t
	},
	 
}
//export let BASE_URL = 'https://sistemas.digitalinka.com/midespensa_cert/pvurbana/';
export let BASE_URL = 'https://3536-190-223-55-174.ngrok.io/pvurbana/';
let newInstance = axios.create()
newInstance.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode('ad_min' + ':' + '$istema$#_2020_#')
newInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
newInstance.defaults.headers.common['Content-Security-Policy'] = 'upgrade-insecure-requests'
export const instance = newInstance
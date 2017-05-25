/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	var m = __webpack_require__(/*! mithril */ 1);
	
	var Layout = __webpack_require__(/*! ./components/Layout */ 5);
	var Homepage = __webpack_require__(/*! ./components/Homepage */ 6);
	var PostsShow = __webpack_require__(/*! ./components/PostsShow */ 10);
	
	m.route(document.body, "/", {
	    "/": {
	      render: function(vnode) {
	          return m(Layout, m(Homepage))
	      }
	    },
	    "/posts/:id": {
	        render: function(vnode) {
	            return m(Layout, m(PostsShow, vnode.attrs))
	        }
	    }
	})


/***/ },
/* 1 */
/*!******************************!*\
  !*** ./~/mithril/mithril.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, global, module) {;(function() {
	"use strict"
	function Vnode(tag, key, attrs0, children, text, dom) {
		return {tag: tag, key: key, attrs: attrs0, children: children, text: text, dom: dom, domSize: undefined, state: undefined, _state: undefined, events: undefined, instance: undefined, skip: false}
	}
	Vnode.normalize = function(node) {
		if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
		if (node != null && typeof node !== "object") return Vnode("#", undefined, undefined, node === false ? "" : node, undefined, undefined)
		return node
	}
	Vnode.normalizeChildren = function normalizeChildren(children) {
		for (var i = 0; i < children.length; i++) {
			children[i] = Vnode.normalize(children[i])
		}
		return children
	}
	var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
	var selectorCache = {}
	var hasOwn = {}.hasOwnProperty
	function compileSelector(selector) {
		var match, tag = "div", classes = [], attrs = {}
		while (match = selectorParser.exec(selector)) {
			var type = match[1], value = match[2]
			if (type === "" && value !== "") tag = value
			else if (type === "#") attrs.id = value
			else if (type === ".") classes.push(value)
			else if (match[3][0] === "[") {
				var attrValue = match[6]
				if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
				if (match[4] === "class") classes.push(attrValue)
				else attrs[match[4]] = attrValue || true
			}
		}
		if (classes.length > 0) attrs.className = classes.join(" ")
		return selectorCache[selector] = {tag: tag, attrs: attrs}
	}
	function execSelector(state, attrs, children) {
		var hasAttrs = false, childList, text
		var className = attrs.className || attrs.class
		for (var key in state.attrs) {
			if (hasOwn.call(state.attrs, key)) {
				attrs[key] = state.attrs[key]
			}
		}
		if (className !== undefined) {
			if (attrs.class !== undefined) {
				attrs.class = undefined
				attrs.className = className
			}
			if (state.attrs.className != null) {
				attrs.className = state.attrs.className + " " + className
			}
		}
		for (var key in attrs) {
			if (hasOwn.call(attrs, key) && key !== "key") {
				hasAttrs = true
				break
			}
		}
		if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
			text = children[0].children
		} else {
			childList = children
		}
		return Vnode(state.tag, attrs.key, hasAttrs ? attrs : undefined, childList, text)
	}
	function hyperscript(selector) {
		// Because sloppy mode sucks
		var attrs = arguments[1], start = 2, children
		if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
			throw Error("The selector must be either a string or a component.");
		}
		if (typeof selector === "string") {
			var cached = selectorCache[selector] || compileSelector(selector)
		}
		if (attrs == null) {
			attrs = {}
		} else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
			attrs = {}
			start = 1
		}
		if (arguments.length === start + 1) {
			children = arguments[start]
			if (!Array.isArray(children)) children = [children]
		} else {
			children = []
			while (start < arguments.length) children.push(arguments[start++])
		}
		var normalized = Vnode.normalizeChildren(children)
		if (typeof selector === "string") {
			return execSelector(cached, attrs, normalized)
		} else {
			return Vnode(selector, attrs.key, attrs, normalized)
		}
	}
	hyperscript.trust = function(html) {
		if (html == null) html = ""
		return Vnode("<", undefined, undefined, html, undefined, undefined)
	}
	hyperscript.fragment = function(attrs1, children) {
		return Vnode("[", attrs1.key, attrs1, Vnode.normalizeChildren(children), undefined, undefined)
	}
	var m = hyperscript
	/** @constructor */
	var PromisePolyfill = function(executor) {
		if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`")
		if (typeof executor !== "function") throw new TypeError("executor must be a function")
		var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)
		var instance = self._instance = {resolvers: resolvers, rejectors: rejectors}
		var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
		function handler(list, shouldAbsorb) {
			return function execute(value) {
				var then
				try {
					if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
						if (value === self) throw new TypeError("Promise can't be resolved w/ itself")
						executeOnce(then.bind(value))
					}
					else {
						callAsync(function() {
							if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value)
							for (var i = 0; i < list.length; i++) list[i](value)
							resolvers.length = 0, rejectors.length = 0
							instance.state = shouldAbsorb
							instance.retry = function() {execute(value)}
						})
					}
				}
				catch (e) {
					rejectCurrent(e)
				}
			}
		}
		function executeOnce(then) {
			var runs = 0
			function run(fn) {
				return function(value) {
					if (runs++ > 0) return
					fn(value)
				}
			}
			var onerror = run(rejectCurrent)
			try {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}
		}
		executeOnce(executor)
	}
	PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
		var self = this, instance = self._instance
		function handle(callback, list, next, state) {
			list.push(function(value) {
				if (typeof callback !== "function") next(value)
				else try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}
			})
			if (typeof instance.retry === "function" && state === instance.state) instance.retry()
		}
		var resolveNext, rejectNext
		var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})
		handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)
		return promise
	}
	PromisePolyfill.prototype.catch = function(onRejection) {
		return this.then(null, onRejection)
	}
	PromisePolyfill.resolve = function(value) {
		if (value instanceof PromisePolyfill) return value
		return new PromisePolyfill(function(resolve) {resolve(value)})
	}
	PromisePolyfill.reject = function(value) {
		return new PromisePolyfill(function(resolve, reject) {reject(value)})
	}
	PromisePolyfill.all = function(list) {
		return new PromisePolyfill(function(resolve, reject) {
			var total = list.length, count = 0, values = []
			if (list.length === 0) resolve([])
			else for (var i = 0; i < list.length; i++) {
				(function(i) {
					function consume(value) {
						count++
						values[i] = value
						if (count === total) resolve(values)
					}
					if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
						list[i].then(consume, reject)
					}
					else consume(list[i])
				})(i)
			}
		})
	}
	PromisePolyfill.race = function(list) {
		return new PromisePolyfill(function(resolve, reject) {
			for (var i = 0; i < list.length; i++) {
				list[i].then(resolve, reject)
			}
		})
	}
	if (typeof window !== "undefined") {
		if (typeof window.Promise === "undefined") window.Promise = PromisePolyfill
		var PromisePolyfill = window.Promise
	} else if (typeof global !== "undefined") {
		if (typeof global.Promise === "undefined") global.Promise = PromisePolyfill
		var PromisePolyfill = global.Promise
	} else {
	}
	var buildQueryString = function(object) {
		if (Object.prototype.toString.call(object) !== "[object Object]") return ""
		var args = []
		for (var key0 in object) {
			destructure(key0, object[key0])
		}
		return args.join("&")
		function destructure(key0, value) {
			if (Array.isArray(value)) {
				for (var i = 0; i < value.length; i++) {
					destructure(key0 + "[" + i + "]", value[i])
				}
			}
			else if (Object.prototype.toString.call(value) === "[object Object]") {
				for (var i in value) {
					destructure(key0 + "[" + i + "]", value[i])
				}
			}
			else args.push(encodeURIComponent(key0) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
		}
	}
	var FILE_PROTOCOL_REGEX = new RegExp("^file://", "i")
	var _8 = function($window, Promise) {
		var callbackCount = 0
		var oncompletion
		function setCompletionCallback(callback) {oncompletion = callback}
		function finalizer() {
			var count = 0
			function complete() {if (--count === 0 && typeof oncompletion === "function") oncompletion()}
			return function finalize(promise0) {
				var then0 = promise0.then
				promise0.then = function() {
					count++
					var next = then0.apply(promise0, arguments)
					next.then(complete, function(e) {
						complete()
						if (count === 0) throw e
					})
					return finalize(next)
				}
				return promise0
			}
		}
		function normalize(args, extra) {
			if (typeof args === "string") {
				var url = args
				args = extra || {}
				if (args.url == null) args.url = url
			}
			return args
		}
		function request(args, extra) {
			var finalize = finalizer()
			args = normalize(args, extra)
			var promise0 = new Promise(function(resolve, reject) {
				if (args.method == null) args.method = "GET"
				args.method = args.method.toUpperCase()
				var useBody = (args.method === "GET" || args.method === "TRACE") ? false : (typeof args.useBody === "boolean" ? args.useBody : true)
				if (typeof args.serialize !== "function") args.serialize = typeof FormData !== "undefined" && args.data instanceof FormData ? function(value) {return value} : JSON.stringify
				if (typeof args.deserialize !== "function") args.deserialize = deserialize
				if (typeof args.extract !== "function") args.extract = extract
				args.url = interpolate(args.url, args.data)
				if (useBody) args.data = args.serialize(args.data)
				else args.url = assemble(args.url, args.data)
				var xhr = new $window.XMLHttpRequest(),
					aborted = false,
					_abort = xhr.abort
				xhr.abort = function abort() {
					aborted = true
					_abort.call(xhr)
				}
				xhr.open(args.method, args.url, typeof args.async === "boolean" ? args.async : true, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)
				if (args.serialize === JSON.stringify && useBody) {
					xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
				}
				if (args.deserialize === deserialize) {
					xhr.setRequestHeader("Accept", "application/json, text/*")
				}
				if (args.withCredentials) xhr.withCredentials = args.withCredentials
				for (var key in args.headers) if ({}.hasOwnProperty.call(args.headers, key)) {
					xhr.setRequestHeader(key, args.headers[key])
				}
				if (typeof args.config === "function") xhr = args.config(xhr, args) || xhr
				xhr.onreadystatechange = function() {
					// Don't throw errors on xhr.abort().
					if(aborted) return
					if (xhr.readyState === 4) {
						try {
							var response = (args.extract !== extract) ? args.extract(xhr, args) : args.deserialize(args.extract(xhr, args))
							if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304 || FILE_PROTOCOL_REGEX.test(args.url)) {
								resolve(cast(args.type, response))
							}
							else {
								var error = new Error(xhr.responseText)
								for (var key in response) error[key] = response[key]
								reject(error)
							}
						}
						catch (e) {
							reject(e)
						}
					}
				}
				if (useBody && (args.data != null)) xhr.send(args.data)
				else xhr.send()
			})
			return args.background === true ? promise0 : finalize(promise0)
		}
		function jsonp(args, extra) {
			var finalize = finalizer()
			args = normalize(args, extra)
			var promise0 = new Promise(function(resolve, reject) {
				var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
				var script = $window.document.createElement("script")
				$window[callbackName] = function(data) {
					script.parentNode.removeChild(script)
					resolve(cast(args.type, data))
					delete $window[callbackName]
				}
				script.onerror = function() {
					script.parentNode.removeChild(script)
					reject(new Error("JSONP request failed"))
					delete $window[callbackName]
				}
				if (args.data == null) args.data = {}
				args.url = interpolate(args.url, args.data)
				args.data[args.callbackKey || "callback"] = callbackName
				script.src = assemble(args.url, args.data)
				$window.document.documentElement.appendChild(script)
			})
			return args.background === true? promise0 : finalize(promise0)
		}
		function interpolate(url, data) {
			if (data == null) return url
			var tokens = url.match(/:[^\/]+/gi) || []
			for (var i = 0; i < tokens.length; i++) {
				var key = tokens[i].slice(1)
				if (data[key] != null) {
					url = url.replace(tokens[i], data[key])
				}
			}
			return url
		}
		function assemble(url, data) {
			var querystring = buildQueryString(data)
			if (querystring !== "") {
				var prefix = url.indexOf("?") < 0 ? "?" : "&"
				url += prefix + querystring
			}
			return url
		}
		function deserialize(data) {
			try {return data !== "" ? JSON.parse(data) : null}
			catch (e) {throw new Error(data)}
		}
		function extract(xhr) {return xhr.responseText}
		function cast(type0, data) {
			if (typeof type0 === "function") {
				if (Array.isArray(data)) {
					for (var i = 0; i < data.length; i++) {
						data[i] = new type0(data[i])
					}
				}
				else return new type0(data)
			}
			return data
		}
		return {request: request, jsonp: jsonp, setCompletionCallback: setCompletionCallback}
	}
	var requestService = _8(window, PromisePolyfill)
	var coreRenderer = function($window) {
		var $doc = $window.document
		var $emptyFragment = $doc.createDocumentFragment()
		var onevent
		function setEventCallback(callback) {return onevent = callback}
		//create
		function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
			for (var i = start; i < end; i++) {
				var vnode = vnodes[i]
				if (vnode != null) {
					createNode(parent, vnode, hooks, ns, nextSibling)
				}
			}
		}
		function createNode(parent, vnode, hooks, ns, nextSibling) {
			var tag = vnode.tag
			if (typeof tag === "string") {
				vnode.state = {}
				if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
				switch (tag) {
					case "#": return createText(parent, vnode, nextSibling)
					case "<": return createHTML(parent, vnode, nextSibling)
					case "[": return createFragment(parent, vnode, hooks, ns, nextSibling)
					default: return createElement(parent, vnode, hooks, ns, nextSibling)
				}
			}
			else return createComponent(parent, vnode, hooks, ns, nextSibling)
		}
		function createText(parent, vnode, nextSibling) {
			vnode.dom = $doc.createTextNode(vnode.children)
			insertNode(parent, vnode.dom, nextSibling)
			return vnode.dom
		}
		function createHTML(parent, vnode, nextSibling) {
			var match1 = vnode.children.match(/^\s*?<(\w+)/im) || []
			var parent1 = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}[match1[1]] || "div"
			var temp = $doc.createElement(parent1)
			temp.innerHTML = vnode.children
			vnode.dom = temp.firstChild
			vnode.domSize = temp.childNodes.length
			var fragment = $doc.createDocumentFragment()
			var child
			while (child = temp.firstChild) {
				fragment.appendChild(child)
			}
			insertNode(parent, fragment, nextSibling)
			return fragment
		}
		function createFragment(parent, vnode, hooks, ns, nextSibling) {
			var fragment = $doc.createDocumentFragment()
			if (vnode.children != null) {
				var children = vnode.children
				createNodes(fragment, children, 0, children.length, hooks, null, ns)
			}
			vnode.dom = fragment.firstChild
			vnode.domSize = fragment.childNodes.length
			insertNode(parent, fragment, nextSibling)
			return fragment
		}
		function createElement(parent, vnode, hooks, ns, nextSibling) {
			var tag = vnode.tag
			switch (vnode.tag) {
				case "svg": ns = "http://www.w3.org/2000/svg"; break
				case "math": ns = "http://www.w3.org/1998/Math/MathML"; break
			}
			var attrs2 = vnode.attrs
			var is = attrs2 && attrs2.is
			var element = ns ?
				is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
				is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
			vnode.dom = element
			if (attrs2 != null) {
				setAttrs(vnode, attrs2, ns)
			}
			insertNode(parent, element, nextSibling)
			if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
				setContentEditable(vnode)
			}
			else {
				if (vnode.text != null) {
					if (vnode.text !== "") element.textContent = vnode.text
					else vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
				}
				if (vnode.children != null) {
					var children = vnode.children
					createNodes(element, children, 0, children.length, hooks, null, ns)
					setLateAttrs(vnode)
				}
			}
			return element
		}
		function initComponent(vnode, hooks) {
			var sentinel
			if (typeof vnode.tag.view === "function") {
				vnode.state = Object.create(vnode.tag)
				sentinel = vnode.state.view
				if (sentinel.$$reentrantLock$$ != null) return $emptyFragment
				sentinel.$$reentrantLock$$ = true
			} else {
				vnode.state = void 0
				sentinel = vnode.tag
				if (sentinel.$$reentrantLock$$ != null) return $emptyFragment
				sentinel.$$reentrantLock$$ = true
				vnode.state = (vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function") ? new vnode.tag(vnode) : vnode.tag(vnode)
			}
			vnode._state = vnode.state
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
			initLifecycle(vnode._state, vnode, hooks)
			vnode.instance = Vnode.normalize(vnode._state.view.call(vnode.state, vnode))
			if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
			sentinel.$$reentrantLock$$ = null
		}
		function createComponent(parent, vnode, hooks, ns, nextSibling) {
			initComponent(vnode, hooks)
			if (vnode.instance != null) {
				var element = createNode(parent, vnode.instance, hooks, ns, nextSibling)
				vnode.dom = vnode.instance.dom
				vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0
				insertNode(parent, element, nextSibling)
				return element
			}
			else {
				vnode.domSize = 0
				return $emptyFragment
			}
		}
		//update
		function updateNodes(parent, old, vnodes, recycling, hooks, nextSibling, ns) {
			if (old === vnodes || old == null && vnodes == null) return
			else if (old == null) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, undefined)
			else if (vnodes == null) removeNodes(old, 0, old.length, vnodes)
			else {
				if (old.length === vnodes.length) {
					var isUnkeyed = false
					for (var i = 0; i < vnodes.length; i++) {
						if (vnodes[i] != null && old[i] != null) {
							isUnkeyed = vnodes[i].key == null && old[i].key == null
							break
						}
					}
					if (isUnkeyed) {
						for (var i = 0; i < old.length; i++) {
							if (old[i] === vnodes[i]) continue
							else if (old[i] == null && vnodes[i] != null) createNode(parent, vnodes[i], hooks, ns, getNextSibling(old, i + 1, nextSibling))
							else if (vnodes[i] == null) removeNodes(old, i, i + 1, vnodes)
							else updateNode(parent, old[i], vnodes[i], hooks, getNextSibling(old, i + 1, nextSibling), recycling, ns)
						}
						return
					}
				}
				recycling = recycling || isRecyclable(old, vnodes)
				if (recycling) {
					var pool = old.pool
					old = old.concat(old.pool)
				}
				var oldStart = 0, start = 0, oldEnd = old.length - 1, end = vnodes.length - 1, map
				while (oldEnd >= oldStart && end >= start) {
					var o = old[oldStart], v = vnodes[start]
					if (o === v && !recycling) oldStart++, start++
					else if (o == null) oldStart++
					else if (v == null) start++
					else if (o.key === v.key) {
						var shouldRecycle = (pool != null && oldStart >= old.length - pool.length) || ((pool == null) && recycling)
						oldStart++, start++
						updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), shouldRecycle, ns)
						if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling)
					}
					else {
						var o = old[oldEnd]
						if (o === v && !recycling) oldEnd--, start++
						else if (o == null) oldEnd--
						else if (v == null) start++
						else if (o.key === v.key) {
							var shouldRecycle = (pool != null && oldEnd >= old.length - pool.length) || ((pool == null) && recycling)
							updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), shouldRecycle, ns)
							if (recycling || start < end) insertNode(parent, toFragment(o), getNextSibling(old, oldStart, nextSibling))
							oldEnd--, start++
						}
						else break
					}
				}
				while (oldEnd >= oldStart && end >= start) {
					var o = old[oldEnd], v = vnodes[end]
					if (o === v && !recycling) oldEnd--, end--
					else if (o == null) oldEnd--
					else if (v == null) end--
					else if (o.key === v.key) {
						var shouldRecycle = (pool != null && oldEnd >= old.length - pool.length) || ((pool == null) && recycling)
						updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), shouldRecycle, ns)
						if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling)
						if (o.dom != null) nextSibling = o.dom
						oldEnd--, end--
					}
					else {
						if (!map) map = getKeyMap(old, oldEnd)
						if (v != null) {
							var oldIndex = map[v.key]
							if (oldIndex != null) {
								var movable = old[oldIndex]
								var shouldRecycle = (pool != null && oldIndex >= old.length - pool.length) || ((pool == null) && recycling)
								updateNode(parent, movable, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), recycling, ns)
								insertNode(parent, toFragment(movable), nextSibling)
								old[oldIndex].skip = true
								if (movable.dom != null) nextSibling = movable.dom
							}
							else {
								var dom = createNode(parent, v, hooks, undefined, nextSibling)
								nextSibling = dom
							}
						}
						end--
					}
					if (end < start) break
				}
				createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
				removeNodes(old, oldStart, oldEnd + 1, vnodes)
			}
		}
		function updateNode(parent, old, vnode, hooks, nextSibling, recycling, ns) {
			var oldTag = old.tag, tag = vnode.tag
			if (oldTag === tag) {
				vnode.state = old.state
				vnode._state = old._state
				vnode.events = old.events
				if (!recycling && shouldNotUpdate(vnode, old)) return
				if (typeof oldTag === "string") {
					if (vnode.attrs != null) {
						if (recycling) {
							vnode.state = {}
							initLifecycle(vnode.attrs, vnode, hooks)
						}
						else updateLifecycle(vnode.attrs, vnode, hooks)
					}
					switch (oldTag) {
						case "#": updateText(old, vnode); break
						case "<": updateHTML(parent, old, vnode, nextSibling); break
						case "[": updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns); break
						default: updateElement(old, vnode, recycling, hooks, ns)
					}
				}
				else updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns)
			}
			else {
				removeNode(old, null)
				createNode(parent, vnode, hooks, ns, nextSibling)
			}
		}
		function updateText(old, vnode) {
			if (old.children.toString() !== vnode.children.toString()) {
				old.dom.nodeValue = vnode.children
			}
			vnode.dom = old.dom
		}
		function updateHTML(parent, old, vnode, nextSibling) {
			if (old.children !== vnode.children) {
				toFragment(old)
				createHTML(parent, vnode, nextSibling)
			}
			else vnode.dom = old.dom, vnode.domSize = old.domSize
		}
		function updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns) {
			updateNodes(parent, old.children, vnode.children, recycling, hooks, nextSibling, ns)
			var domSize = 0, children = vnode.children
			vnode.dom = null
			if (children != null) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i]
					if (child != null && child.dom != null) {
						if (vnode.dom == null) vnode.dom = child.dom
						domSize += child.domSize || 1
					}
				}
				if (domSize !== 1) vnode.domSize = domSize
			}
		}
		function updateElement(old, vnode, recycling, hooks, ns) {
			var element = vnode.dom = old.dom
			switch (vnode.tag) {
				case "svg": ns = "http://www.w3.org/2000/svg"; break
				case "math": ns = "http://www.w3.org/1998/Math/MathML"; break
			}
			if (vnode.tag === "textarea") {
				if (vnode.attrs == null) vnode.attrs = {}
				if (vnode.text != null) {
					vnode.attrs.value = vnode.text //FIXME handle0 multiple children
					vnode.text = undefined
				}
			}
			updateAttrs(vnode, old.attrs, vnode.attrs, ns)
			if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
				setContentEditable(vnode)
			}
			else if (old.text != null && vnode.text != null && vnode.text !== "") {
				if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text
			}
			else {
				if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)]
				if (vnode.text != null) vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
				updateNodes(element, old.children, vnode.children, recycling, hooks, null, ns)
			}
		}
		function updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns) {
			if (recycling) {
				initComponent(vnode, hooks)
			} else {
				vnode.instance = Vnode.normalize(vnode._state.view.call(vnode.state, vnode))
				if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
				if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks)
				updateLifecycle(vnode._state, vnode, hooks)
			}
			if (vnode.instance != null) {
				if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)
				else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, recycling, ns)
				vnode.dom = vnode.instance.dom
				vnode.domSize = vnode.instance.domSize
			}
			else if (old.instance != null) {
				removeNode(old.instance, null)
				vnode.dom = undefined
				vnode.domSize = 0
			}
			else {
				vnode.dom = old.dom
				vnode.domSize = old.domSize
			}
		}
		function isRecyclable(old, vnodes) {
			if (old.pool != null && Math.abs(old.pool.length - vnodes.length) <= Math.abs(old.length - vnodes.length)) {
				var oldChildrenLength = old[0] && old[0].children && old[0].children.length || 0
				var poolChildrenLength = old.pool[0] && old.pool[0].children && old.pool[0].children.length || 0
				var vnodesChildrenLength = vnodes[0] && vnodes[0].children && vnodes[0].children.length || 0
				if (Math.abs(poolChildrenLength - vnodesChildrenLength) <= Math.abs(oldChildrenLength - vnodesChildrenLength)) {
					return true
				}
			}
			return false
		}
		function getKeyMap(vnodes, end) {
			var map = {}, i = 0
			for (var i = 0; i < end; i++) {
				var vnode = vnodes[i]
				if (vnode != null) {
					var key2 = vnode.key
					if (key2 != null) map[key2] = i
				}
			}
			return map
		}
		function toFragment(vnode) {
			var count0 = vnode.domSize
			if (count0 != null || vnode.dom == null) {
				var fragment = $doc.createDocumentFragment()
				if (count0 > 0) {
					var dom = vnode.dom
					while (--count0) fragment.appendChild(dom.nextSibling)
					fragment.insertBefore(dom, fragment.firstChild)
				}
				return fragment
			}
			else return vnode.dom
		}
		function getNextSibling(vnodes, i, nextSibling) {
			for (; i < vnodes.length; i++) {
				if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
			}
			return nextSibling
		}
		function insertNode(parent, dom, nextSibling) {
			if (nextSibling && nextSibling.parentNode) parent.insertBefore(dom, nextSibling)
			else parent.appendChild(dom)
		}
		function setContentEditable(vnode) {
			var children = vnode.children
			if (children != null && children.length === 1 && children[0].tag === "<") {
				var content = children[0].children
				if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content
			}
			else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
		}
		//remove
		function removeNodes(vnodes, start, end, context) {
			for (var i = start; i < end; i++) {
				var vnode = vnodes[i]
				if (vnode != null) {
					if (vnode.skip) vnode.skip = false
					else removeNode(vnode, context)
				}
			}
		}
		function removeNode(vnode, context) {
			var expected = 1, called = 0
			if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
				var result = vnode.attrs.onbeforeremove.call(vnode.state, vnode)
				if (result != null && typeof result.then === "function") {
					expected++
					result.then(continuation, continuation)
				}
			}
			if (typeof vnode.tag !== "string" && typeof vnode._state.onbeforeremove === "function") {
				var result = vnode._state.onbeforeremove.call(vnode.state, vnode)
				if (result != null && typeof result.then === "function") {
					expected++
					result.then(continuation, continuation)
				}
			}
			continuation()
			function continuation() {
				if (++called === expected) {
					onremove(vnode)
					if (vnode.dom) {
						var count0 = vnode.domSize || 1
						if (count0 > 1) {
							var dom = vnode.dom
							while (--count0) {
								removeNodeFromDOM(dom.nextSibling)
							}
						}
						removeNodeFromDOM(vnode.dom)
						if (context != null && vnode.domSize == null && !hasIntegrationMethods(vnode.attrs) && typeof vnode.tag === "string") { //TODO test custom elements
							if (!context.pool) context.pool = [vnode]
							else context.pool.push(vnode)
						}
					}
				}
			}
		}
		function removeNodeFromDOM(node) {
			var parent = node.parentNode
			if (parent != null) parent.removeChild(node)
		}
		function onremove(vnode) {
			if (vnode.attrs && typeof vnode.attrs.onremove === "function") vnode.attrs.onremove.call(vnode.state, vnode)
			if (typeof vnode.tag !== "string" && typeof vnode._state.onremove === "function") vnode._state.onremove.call(vnode.state, vnode)
			if (vnode.instance != null) onremove(vnode.instance)
			else {
				var children = vnode.children
				if (Array.isArray(children)) {
					for (var i = 0; i < children.length; i++) {
						var child = children[i]
						if (child != null) onremove(child)
					}
				}
			}
		}
		//attrs2
		function setAttrs(vnode, attrs2, ns) {
			for (var key2 in attrs2) {
				setAttr(vnode, key2, null, attrs2[key2], ns)
			}
		}
		function setAttr(vnode, key2, old, value, ns) {
			var element = vnode.dom
			if (key2 === "key" || key2 === "is" || (old === value && !isFormAttribute(vnode, key2)) && typeof value !== "object" || typeof value === "undefined" || isLifecycleMethod(key2)) return
			var nsLastIndex = key2.indexOf(":")
			if (nsLastIndex > -1 && key2.substr(0, nsLastIndex) === "xlink") {
				element.setAttributeNS("http://www.w3.org/1999/xlink", key2.slice(nsLastIndex + 1), value)
			}
			else if (key2[0] === "o" && key2[1] === "n" && typeof value === "function") updateEvent(vnode, key2, value)
			else if (key2 === "style") updateStyle(element, old, value)
			else if (key2 in element && !isAttribute(key2) && ns === undefined && !isCustomElement(vnode)) {
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if (vnode.tag === "input" && key2 === "value" && vnode.dom.value == value && vnode.dom === $doc.activeElement) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select" && key2 === "value" && vnode.dom.value == value && vnode.dom === $doc.activeElement) return
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && key2 === "value" && vnode.dom.value == value) return
				// If you assign an input type1 that is not supported by IE 11 with an assignment expression, an error0 will occur.
				if (vnode.tag === "input" && key2 === "type") {
					element.setAttribute(key2, value)
					return
				}
				element[key2] = value
			}
			else {
				if (typeof value === "boolean") {
					if (value) element.setAttribute(key2, "")
					else element.removeAttribute(key2)
				}
				else element.setAttribute(key2 === "className" ? "class" : key2, value)
			}
		}
		function setLateAttrs(vnode) {
			var attrs2 = vnode.attrs
			if (vnode.tag === "select" && attrs2 != null) {
				if ("value" in attrs2) setAttr(vnode, "value", null, attrs2.value, undefined)
				if ("selectedIndex" in attrs2) setAttr(vnode, "selectedIndex", null, attrs2.selectedIndex, undefined)
			}
		}
		function updateAttrs(vnode, old, attrs2, ns) {
			if (attrs2 != null) {
				for (var key2 in attrs2) {
					setAttr(vnode, key2, old && old[key2], attrs2[key2], ns)
				}
			}
			if (old != null) {
				for (var key2 in old) {
					if (attrs2 == null || !(key2 in attrs2)) {
						if (key2 === "className") key2 = "class"
						if (key2[0] === "o" && key2[1] === "n" && !isLifecycleMethod(key2)) updateEvent(vnode, key2, undefined)
						else if (key2 !== "key") vnode.dom.removeAttribute(key2)
					}
				}
			}
		}
		function isFormAttribute(vnode, attr) {
			return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === $doc.activeElement
		}
		function isLifecycleMethod(attr) {
			return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
		}
		function isAttribute(attr) {
			return attr === "href" || attr === "list" || attr === "form" || attr === "width" || attr === "height"// || attr === "type"
		}
		function isCustomElement(vnode){
			return vnode.attrs.is || vnode.tag.indexOf("-") > -1
		}
		function hasIntegrationMethods(source) {
			return source != null && (source.oncreate || source.onupdate || source.onbeforeremove || source.onremove)
		}
		//style
		function updateStyle(element, old, style) {
			if (old === style) element.style.cssText = "", old = null
			if (style == null) element.style.cssText = ""
			else if (typeof style === "string") element.style.cssText = style
			else {
				if (typeof old === "string") element.style.cssText = ""
				for (var key2 in style) {
					element.style[key2] = style[key2]
				}
				if (old != null && typeof old !== "string") {
					for (var key2 in old) {
						if (!(key2 in style)) element.style[key2] = ""
					}
				}
			}
		}
		//event
		function updateEvent(vnode, key2, value) {
			var element = vnode.dom
			var callback = typeof onevent !== "function" ? value : function(e) {
				var result = value.call(element, e)
				onevent.call(element, e)
				return result
			}
			if (key2 in element) element[key2] = typeof value === "function" ? callback : null
			else {
				var eventName = key2.slice(2)
				if (vnode.events === undefined) vnode.events = {}
				if (vnode.events[key2] === callback) return
				if (vnode.events[key2] != null) element.removeEventListener(eventName, vnode.events[key2], false)
				if (typeof value === "function") {
					vnode.events[key2] = callback
					element.addEventListener(eventName, vnode.events[key2], false)
				}
			}
		}
		//lifecycle
		function initLifecycle(source, vnode, hooks) {
			if (typeof source.oninit === "function") source.oninit.call(vnode.state, vnode)
			if (typeof source.oncreate === "function") hooks.push(source.oncreate.bind(vnode.state, vnode))
		}
		function updateLifecycle(source, vnode, hooks) {
			if (typeof source.onupdate === "function") hooks.push(source.onupdate.bind(vnode.state, vnode))
		}
		function shouldNotUpdate(vnode, old) {
			var forceVnodeUpdate, forceComponentUpdate
			if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") forceVnodeUpdate = vnode.attrs.onbeforeupdate.call(vnode.state, vnode, old)
			if (typeof vnode.tag !== "string" && typeof vnode._state.onbeforeupdate === "function") forceComponentUpdate = vnode._state.onbeforeupdate.call(vnode.state, vnode, old)
			if (!(forceVnodeUpdate === undefined && forceComponentUpdate === undefined) && !forceVnodeUpdate && !forceComponentUpdate) {
				vnode.dom = old.dom
				vnode.domSize = old.domSize
				vnode.instance = old.instance
				return true
			}
			return false
		}
		function render(dom, vnodes) {
			if (!dom) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
			var hooks = []
			var active = $doc.activeElement
			// First time0 rendering into a node clears it out
			if (dom.vnodes == null) dom.textContent = ""
			if (!Array.isArray(vnodes)) vnodes = [vnodes]
			updateNodes(dom, dom.vnodes, Vnode.normalizeChildren(vnodes), false, hooks, null, undefined)
			dom.vnodes = vnodes
			for (var i = 0; i < hooks.length; i++) hooks[i]()
			if ($doc.activeElement !== active) active.focus()
		}
		return {render: render, setEventCallback: setEventCallback}
	}
	function throttle(callback) {
		//60fps translates to 16.6ms, round it down since setTimeout requires int
		var time = 16
		var last = 0, pending = null
		var timeout = typeof requestAnimationFrame === "function" ? requestAnimationFrame : setTimeout
		return function() {
			var now = Date.now()
			if (last === 0 || now - last >= time) {
				last = now
				callback()
			}
			else if (pending === null) {
				pending = timeout(function() {
					pending = null
					callback()
					last = Date.now()
				}, time - (now - last))
			}
		}
	}
	var _11 = function($window) {
		var renderService = coreRenderer($window)
		renderService.setEventCallback(function(e) {
			if (e.redraw !== false) redraw()
		})
		var callbacks = []
		function subscribe(key1, callback) {
			unsubscribe(key1)
			callbacks.push(key1, throttle(callback))
		}
		function unsubscribe(key1) {
			var index = callbacks.indexOf(key1)
			if (index > -1) callbacks.splice(index, 2)
		}
		function redraw() {
			for (var i = 1; i < callbacks.length; i += 2) {
				callbacks[i]()
			}
		}
		return {subscribe: subscribe, unsubscribe: unsubscribe, redraw: redraw, render: renderService.render}
	}
	var redrawService = _11(window)
	requestService.setCompletionCallback(redrawService.redraw)
	var _16 = function(redrawService0) {
		return function(root, component) {
			if (component === null) {
				redrawService0.render(root, [])
				redrawService0.unsubscribe(root)
				return
			}
			
			if (component.view == null && typeof component !== "function") throw new Error("m.mount(element, component) expects a component, not a vnode")
			
			var run0 = function() {
				redrawService0.render(root, Vnode(component))
			}
			redrawService0.subscribe(root, run0)
			redrawService0.redraw()
		}
	}
	m.mount = _16(redrawService)
	var Promise = PromisePolyfill
	var parseQueryString = function(string) {
		if (string === "" || string == null) return {}
		if (string.charAt(0) === "?") string = string.slice(1)
		var entries = string.split("&"), data0 = {}, counters = {}
		for (var i = 0; i < entries.length; i++) {
			var entry = entries[i].split("=")
			var key5 = decodeURIComponent(entry[0])
			var value = entry.length === 2 ? decodeURIComponent(entry[1]) : ""
			if (value === "true") value = true
			else if (value === "false") value = false
			var levels = key5.split(/\]\[?|\[/)
			var cursor = data0
			if (key5.indexOf("[") > -1) levels.pop()
			for (var j = 0; j < levels.length; j++) {
				var level = levels[j], nextLevel = levels[j + 1]
				var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
				var isValue = j === levels.length - 1
				if (level === "") {
					var key5 = levels.slice(0, j).join()
					if (counters[key5] == null) counters[key5] = 0
					level = counters[key5]++
				}
				if (cursor[level] == null) {
					cursor[level] = isValue ? value : isNumber ? [] : {}
				}
				cursor = cursor[level]
			}
		}
		return data0
	}
	var coreRouter = function($window) {
		var supportsPushState = typeof $window.history.pushState === "function"
		var callAsync0 = typeof setImmediate === "function" ? setImmediate : setTimeout
		function normalize1(fragment0) {
			var data = $window.location[fragment0].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
			if (fragment0 === "pathname" && data[0] !== "/") data = "/" + data
			return data
		}
		var asyncId
		function debounceAsync(callback0) {
			return function() {
				if (asyncId != null) return
				asyncId = callAsync0(function() {
					asyncId = null
					callback0()
				})
			}
		}
		function parsePath(path, queryData, hashData) {
			var queryIndex = path.indexOf("?")
			var hashIndex = path.indexOf("#")
			var pathEnd = queryIndex > -1 ? queryIndex : hashIndex > -1 ? hashIndex : path.length
			if (queryIndex > -1) {
				var queryEnd = hashIndex > -1 ? hashIndex : path.length
				var queryParams = parseQueryString(path.slice(queryIndex + 1, queryEnd))
				for (var key4 in queryParams) queryData[key4] = queryParams[key4]
			}
			if (hashIndex > -1) {
				var hashParams = parseQueryString(path.slice(hashIndex + 1))
				for (var key4 in hashParams) hashData[key4] = hashParams[key4]
			}
			return path.slice(0, pathEnd)
		}
		var router = {prefix: "#!"}
		router.getPath = function() {
			var type2 = router.prefix.charAt(0)
			switch (type2) {
				case "#": return normalize1("hash").slice(router.prefix.length)
				case "?": return normalize1("search").slice(router.prefix.length) + normalize1("hash")
				default: return normalize1("pathname").slice(router.prefix.length) + normalize1("search") + normalize1("hash")
			}
		}
		router.setPath = function(path, data, options) {
			var queryData = {}, hashData = {}
			path = parsePath(path, queryData, hashData)
			if (data != null) {
				for (var key4 in data) queryData[key4] = data[key4]
				path = path.replace(/:([^\/]+)/g, function(match2, token) {
					delete queryData[token]
					return data[token]
				})
			}
			var query = buildQueryString(queryData)
			if (query) path += "?" + query
			var hash = buildQueryString(hashData)
			if (hash) path += "#" + hash
			if (supportsPushState) {
				var state = options ? options.state : null
				var title = options ? options.title : null
				$window.onpopstate()
				if (options && options.replace) $window.history.replaceState(state, title, router.prefix + path)
				else $window.history.pushState(state, title, router.prefix + path)
			}
			else $window.location.href = router.prefix + path
		}
		router.defineRoutes = function(routes, resolve, reject) {
			function resolveRoute() {
				var path = router.getPath()
				var params = {}
				var pathname = parsePath(path, params, params)
				var state = $window.history.state
				if (state != null) {
					for (var k in state) params[k] = state[k]
				}
				for (var route0 in routes) {
					var matcher = new RegExp("^" + route0.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$")
					if (matcher.test(pathname)) {
						pathname.replace(matcher, function() {
							var keys = route0.match(/:[^\/]+/g) || []
							var values = [].slice.call(arguments, 1, -2)
							for (var i = 0; i < keys.length; i++) {
								params[keys[i].replace(/:|\./g, "")] = decodeURIComponent(values[i])
							}
							resolve(routes[route0], params, path, route0)
						})
						return
					}
				}
				reject(path, params)
			}
			if (supportsPushState) $window.onpopstate = debounceAsync(resolveRoute)
			else if (router.prefix.charAt(0) === "#") $window.onhashchange = resolveRoute
			resolveRoute()
		}
		return router
	}
	var _20 = function($window, redrawService0) {
		var routeService = coreRouter($window)
		var identity = function(v) {return v}
		var render1, component, attrs3, currentPath, lastUpdate
		var route = function(root, defaultRoute, routes) {
			if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
			var run1 = function() {
				if (render1 != null) redrawService0.render(root, render1(Vnode(component, attrs3.key, attrs3)))
			}
			var bail = function(path) {
				if (path !== defaultRoute) routeService.setPath(defaultRoute, null, {replace: true})
				else throw new Error("Could not resolve default route " + defaultRoute)
			}
			routeService.defineRoutes(routes, function(payload, params, path) {
				var update = lastUpdate = function(routeResolver, comp) {
					if (update !== lastUpdate) return
					component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
					attrs3 = params, currentPath = path, lastUpdate = null
					render1 = (routeResolver.render || identity).bind(routeResolver)
					run1()
				}
				if (payload.view || typeof payload === "function") update({}, payload)
				else {
					if (payload.onmatch) {
						Promise.resolve(payload.onmatch(params, path)).then(function(resolved) {
							update(payload, resolved)
						}, bail)
					}
					else update(payload, "div")
				}
			}, bail)
			redrawService0.subscribe(root, run1)
		}
		route.set = function(path, data, options) {
			if (lastUpdate != null) options = {replace: true}
			lastUpdate = null
			routeService.setPath(path, data, options)
		}
		route.get = function() {return currentPath}
		route.prefix = function(prefix0) {routeService.prefix = prefix0}
		route.link = function(vnode1) {
			vnode1.dom.setAttribute("href", routeService.prefix + vnode1.attrs.href)
			vnode1.dom.onclick = function(e) {
				if (e.ctrlKey || e.metaKey || e.shiftKey || e.which === 2) return
				e.preventDefault()
				e.redraw = false
				var href = this.getAttribute("href")
				if (href.indexOf(routeService.prefix) === 0) href = href.slice(routeService.prefix.length)
				route.set(href, undefined, undefined)
			}
		}
		route.param = function(key3) {
			if(typeof attrs3 !== "undefined" && typeof key3 !== "undefined") return attrs3[key3]
			return attrs3
		}
		return route
	}
	m.route = _20(window, redrawService)
	m.withAttr = function(attrName, callback1, context) {
		return function(e) {
			callback1.call(context || this, attrName in e.currentTarget ? e.currentTarget[attrName] : e.currentTarget.getAttribute(attrName))
		}
	}
	var _28 = coreRenderer(window)
	m.render = _28.render
	m.redraw = redrawService.redraw
	m.request = requestService.request
	m.jsonp = requestService.jsonp
	m.parseQueryString = parseQueryString
	m.buildQueryString = buildQueryString
	m.version = "1.1.1"
	m.vnode = Vnode
	if (true) module["exports"] = m
	else window.m = m
	}());
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/timers-browserify/main.js */ 2).setImmediate, (function() { return this; }()), __webpack_require__(/*! ./../../../../../../../../usr/local/lib/~/webpack/buildin/module.js */ 4)(module)))

/***/ },
/* 2 */
/*!*********************************************!*\
  !*** (webpack)/~/timers-browserify/main.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(/*! process/browser.js */ 3).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/timers-browserify/main.js */ 2).setImmediate, __webpack_require__(/*! (webpack)/~/timers-browserify/main.js */ 2).clearImmediate))

/***/ },
/* 3 */
/*!**************************************!*\
  !*** (webpack)/~/process/browser.js ***!
  \**************************************/
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 4 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 5 */
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var m = __webpack_require__(/*! mithril */ 1);
	
	module.exports = {
	  view: function(vnode){
	    return m('div',[
	      m("nav.navbar.navbar-light", [
	        m("a.navbar-brand[href='/']", {oncreate: m.route.link}, "Home"),
	        m("ul.nav.navbar-nav.pull-right",[
	          m("a.navbar-item[href='#']", {oncreate: m.route.link}, "Sign in"),
	          m("a.navbar-item[href='#']", {oncreate: m.route.link}, "Sign out"),
	        ])
	      ]),
	      m("section", vnode.children)
	    ]);
	  }
	}


/***/ },
/* 6 */
/*!************************************!*\
  !*** ./src/components/Homepage.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var m = __webpack_require__(/*! mithril */ 1);
	
	var SearchComponent = __webpack_require__(/*! ./SearchComponent */ 7);
	var ListComponent = __webpack_require__(/*! ./ListComponent */ 9);
	
	var Homepage = {
	  view: function(vnode){
	    return m("div",[
	      m(SearchComponent),
	      m(ListComponent)
	    ]);
	  }
	
	}
	module.exports = Homepage;


/***/ },
/* 7 */
/*!*******************************************!*\
  !*** ./src/components/SearchComponent.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var m = __webpack_require__(/*! mithril */ 1);
	var Locations = __webpack_require__(/*! ../models/Locations */ 8);
	
	var SearchComponent = {
	  data: "",
	
	  handleSubmit: function(e){
	    e.preventDefault();
	    console.log("submit: ", SearchComponent.data);
	    Locations.fetchAllLocations(SearchComponent.data);
	  },
	
	  view: function(vnode){
	    return m("form.form-group",{
	      onsubmit: this.handleSubmit
	    },[
	      m("input.form-control[type=text][placeholder=Type something to search for...]",{
	        oninput: m.withAttr("value", function(value){ SearchComponent.data = value }),
	        value: SearchComponent.data
	      }),
	      m("button.btn.btn-primary[type=submit]","Search")
	    ]);
	  }
	
	}
	module.exports = SearchComponent;


/***/ },
/* 8 */
/*!*********************************!*\
  !*** ./src/models/Locations.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var m = __webpack_require__(/*! mithril */ 1);
	
	var Locations = {
	  locations: [],
	
	  fetchAllLocations(data){
	    //remember business...
	    Locations.locations=[
	    {
	      "id": "nu-lounge-bar-bologna",
	      "name": "Nu Lounge Bar",
	      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/LVDd_U9huQL49hK2njoJOw/o.jpg",
	      "is_closed": false,
	      "url": "https://www.yelp.com/biz/nu-lounge-bar-bologna?adjust_creative=kdp_HHbdsHC1LR8AVjXDRw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=kdp_HHbdsHC1LR8AVjXDRw",
	      "review_count": 5,
	      "categories": [
	        {
	          "alias": "lounges",
	          "title": "Lounges"
	        },
	        {
	          "alias": "wine_bars",
	          "title": "Wine Bars"
	        },
	        {
	          "alias": "cocktailbars",
	          "title": "Cocktail Bars"
	        }
	      ],
	      "rating": 5,
	      "coordinates": {
	        "latitude": 44.49303412,
	        "longitude": 11.34462
	      },
	      "transactions": [],
	      "price": "€€",
	      "location": {
	        "address1": "Via De' Musei 6",
	        "address2": "",
	        "address3": "",
	        "city": "Bologna",
	        "zip_code": "40124",
	        "country": "IT",
	        "state": "BO",
	        "display_address": [
	          "Via De' Musei 6",
	          "40124 Bologna",
	          "Italy"
	        ]
	      },
	      "phone": "+39051222532",
	      "display_phone": "+39 051 222532",
	      "distance": 488.040723568
	    },
	    {
	      "id": "osteria-del-sole-bologna",
	      "name": "Osteria del Sole",
	      "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/FTh95TC3tvEgwyVekBjAHA/o.jpg",
	      "is_closed": false,
	      "url": "https://www.yelp.com/biz/osteria-del-sole-bologna?adjust_creative=kdp_HHbdsHC1LR8AVjXDRw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=kdp_HHbdsHC1LR8AVjXDRw",
	      "review_count": 10,
	      "categories": [
	        {
	          "alias": "wine_bars",
	          "title": "Wine Bars"
	        }
	      ],
	      "rating": 4.5,
	      "coordinates": {
	        "latitude": 44.49382,
	        "longitude": 11.34433
	      },
	      "transactions": [],
	      "price": "€",
	      "location": {
	        "address1": "Vicolo Ranocchi 1D",
	        "address2": "",
	        "address3": "",
	        "city": "Bologna",
	        "zip_code": "40124",
	        "country": "IT",
	        "state": "BO",
	        "display_address": [
	          "Vicolo Ranocchi 1D",
	          "40124 Bologna",
	          "Italy"
	        ]
	      },
	      "phone": "+393479680171",
	      "display_phone": "+39 347 968 0171",
	      "distance": 394.9328889502
	    },
	    {
	      "id": "la-prosciutteria-bologna-3",
	      "name": "La Prosciutteria",
	      "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Mg5C-lRDDoh9ZCkytU_G1A/o.jpg",
	      "is_closed": false,
	      "url": "https://www.yelp.com/biz/la-prosciutteria-bologna-3?adjust_creative=kdp_HHbdsHC1LR8AVjXDRw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=kdp_HHbdsHC1LR8AVjXDRw",
	      "review_count": 10,
	      "categories": [
	        {
	          "alias": "wine_bars",
	          "title": "Wine Bars"
	        },
	        {
	          "alias": "tuscan",
	          "title": "Tuscan"
	        },
	        {
	          "alias": "tapasmallplates",
	          "title": "Tapas/Small Plates"
	        }
	      ],
	      "rating": 5,
	      "coordinates": {
	        "latitude": 44.49608,
	        "longitude": 11.34589
	      },
	      "transactions": [],
	      "price": "€€",
	      "location": {
	        "address1": "Via Oberdan 19A",
	        "address2": "",
	        "address3": "",
	        "city": "Bologna",
	        "zip_code": "40126",
	        "country": "IT",
	        "state": "BO",
	        "display_address": [
	          "Via Oberdan 19A",
	          "40126 Bologna",
	          "Italy"
	        ]
	      },
	      "phone": "+390510065939",
	      "display_phone": "+39 051 006 5939",
	      "distance": 144.1609596246
	    }];
	
	    /*
	    m.request({
	      method: 'GET',
	      url: 'https://api.yelp.com/v3/businesses/search?categories=bars&location='+data,
	      headers: {
	        "Authorization": "Bearer xNNTvPy6O-4oKNr2AribVWj-6UWifupIprP0UzjxSN3M3_-VCKtFZ1MzxRkYdbEAx9Xv8H8RBHjaIXFeQi05pZgArgznYV0mblOZ3vjz3hUvA050oIoSOx-a5YTrWHYx",
	      },
	      withCredential: true
	    })
	    .then(function(result){
	      console.log(result);
	    })
	    .catch(function(error){
	      console.log(error);
	    });
	    */
	  }
	};
	module.exports = Locations;
	
	/*
	axios.get(`https://api.yelp.com/v3/businesses/search?categories=bars&location=${city}`,
	    {
	      headers: {Authorization: `Bearer ${process.env.YELP_BEARER}`}
	    })
	    .then( response => {
	    //  console.log(response.data);
	        res.json(response.data);
	
	    })
	    .catch( error => console.log("error ",error));
	*/


/***/ },
/* 9 */
/*!*****************************************!*\
  !*** ./src/components/ListComponent.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var m = __webpack_require__(/*! mithril */ 1);
	
	var Locations = __webpack_require__(/*! ../models/Locations */ 8);
	
	var ListComponent = {
	
	  view: function(vnode){
	    const locations = Locations.locations;
	    console.log(locations)
	    return m("div.list-group",[
	      locations.map(function(item){
	        return m("a.list-group-item.list-group-item-action.flex-column.align-items-start",[
	          m("img.col-xs-4[src="+item.image_url+"][height=100]"),
	          m("div.d-flex.w-100.justify-content-between", [
	            m("h5.mb-1", item.name),
	            m("button.btn.btn-primary","... going")
	          ]),
	          m("p.mb-1", "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit."),
	          m("small", "tel: "+item.display_phone),
	          m("small", "| rating: "+item.rating),
	          m("small", "| price: "+item.price),
	        ]);
	      })
	    ]);
	  }
	
	  /*
	  <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
	      <div class="d-flex w-100 justify-content-between">
	        <h5 class="mb-1">List group item heading</h5>
	        <small>3 days ago</small>
	      </div>
	      <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
	      <small>Donec id elit non mi porta.</small>
	    </a>
	  */
	
	}
	module.exports = ListComponent;


/***/ },
/* 10 */
/*!*************************************!*\
  !*** ./src/components/PostsShow.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var m = __webpack_require__(/*! mithril */ 1);
	
	var PostsShow = {
	  view: function(vnode){
	    return m("div","PostShow"+vnode.attrs.id);
	  }
	
	}
	module.exports = PostsShow;


/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map
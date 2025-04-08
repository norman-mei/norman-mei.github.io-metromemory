(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[997], {
		3649: function(t, e) {
			! function(t) {
				"use strict";

				function e(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					var r = n.bbox,
						i = n.id;
					if (void 0 === t) throw Error("geometry is required");
					if (e && e.constructor !== Object) throw Error("properties must be an Object");
					r && w(r), i && C(i);
					var o = {
						type: "Feature"
					};
					return i && (o.id = i), r && (o.bbox = r), o.properties = e || {}, o.geometry = t, o
				}

				function n(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					var i, s = n.bbox;
					if (!t) throw Error("type is required");
					if (!e) throw Error("coordinates is required");
					if (!Array.isArray(e)) throw Error("coordinates must be an Array");
					switch (s && w(s), t) {
						case "Point":
							i = r(e).geometry;
							break;
						case "LineString":
							i = a(e).geometry;
							break;
						case "Polygon":
							i = o(e).geometry;
							break;
						case "MultiPoint":
							i = l(e).geometry;
							break;
						case "MultiLineString":
							i = c(e).geometry;
							break;
						case "MultiPolygon":
							i = p(e).geometry;
							break;
						default:
							throw Error(t + " is invalid")
					}
					return s && (i.bbox = s), i
				}

				function r(t, n, r) {
					if (!t) throw Error("coordinates is required");
					if (!Array.isArray(t)) throw Error("coordinates must be an Array");
					if (t.length < 2) throw Error("coordinates must be at least 2 numbers long");
					if (!I(t[0]) || !I(t[1])) throw Error("coordinates must contain numbers");
					return e({
						type: "Point",
						coordinates: t
					}, n, r)
				}

				function i(t, e, n) {
					if (!t) throw Error("coordinates is required");
					if (!Array.isArray(t)) throw Error("coordinates must be an Array");
					return h(t.map(function(t) {
						return r(t, e)
					}), n)
				}

				function o(t, n, r) {
					if (!t) throw Error("coordinates is required");
					for (var i = 0; i < t.length; i++) {
						var o = t[i];
						if (o.length < 4) throw Error("Each LinearRing of a Polygon must have 4 or more Positions.");
						for (var s = 0; s < o[o.length - 1].length; s++) {
							if (0 === i && 0 === s && !I(o[0][0]) || !I(o[0][1])) throw Error("coordinates must contain numbers");
							if (o[o.length - 1][s] !== o[0][s]) throw Error("First and last Position are not equivalent.")
						}
					}
					return e({
						type: "Polygon",
						coordinates: t
					}, n, r)
				}

				function s(t, e, n) {
					if (!t) throw Error("coordinates is required");
					if (!Array.isArray(t)) throw Error("coordinates must be an Array");
					return h(t.map(function(t) {
						return o(t, e)
					}), n)
				}

				function a(t, n, r) {
					if (!t) throw Error("coordinates is required");
					if (t.length < 2) throw Error("coordinates must be an array of two or more positions");
					if (!I(t[0][1]) || !I(t[0][1])) throw Error("coordinates must contain numbers");
					return e({
						type: "LineString",
						coordinates: t
					}, n, r)
				}

				function u(t, e, n) {
					if (!t) throw Error("coordinates is required");
					if (!Array.isArray(t)) throw Error("coordinates must be an Array");
					return h(t.map(function(t) {
						return a(t, e)
					}), n)
				}

				function h(t, e) {
					if (!N(e = e || {})) throw Error("options is invalid");
					var n = e.bbox,
						r = e.id;
					if (!t) throw Error("No features passed");
					if (!Array.isArray(t)) throw Error("features must be an Array");
					n && w(n), r && C(r);
					var i = {
						type: "FeatureCollection"
					};
					return r && (i.id = r), n && (i.bbox = n), i.features = t, i
				}

				function c(t, n, r) {
					if (!t) throw Error("coordinates is required");
					return e({
						type: "MultiLineString",
						coordinates: t
					}, n, r)
				}

				function l(t, n, r) {
					if (!t) throw Error("coordinates is required");
					return e({
						type: "MultiPoint",
						coordinates: t
					}, n, r)
				}

				function p(t, n, r) {
					if (!t) throw Error("coordinates is required");
					return e({
						type: "MultiPolygon",
						coordinates: t
					}, n, r)
				}

				function f(t, n, r) {
					if (!t) throw Error("geometries is required");
					if (!Array.isArray(t)) throw Error("geometries must be an Array");
					return e({
						type: "GeometryCollection",
						geometries: t
					}, n, r)
				}

				function g(t, e) {
					if (null == t || isNaN(t)) throw Error("num is required");
					if (e && !(e >= 0)) throw Error("precision must be a positive number");
					var n = Math.pow(10, e || 0);
					return Math.round(t * n) / n
				}

				function d(t, e) {
					if (null == t) throw Error("radians is required");
					if (e && "string" != typeof e) throw Error("units must be a string");
					var n = iy[e || "kilometers"];
					if (!n) throw Error(e + " units is invalid");
					return t * n
				}

				function y(t, e) {
					if (null == t) throw Error("distance is required");
					if (e && "string" != typeof e) throw Error("units must be a string");
					var n = iy[e || "kilometers"];
					if (!n) throw Error(e + " units is invalid");
					return t / n
				}

				function _(t, e) {
					return v(y(t, e))
				}

				function m(t) {
					if (null == t) throw Error("bearing is required");
					var e = t % 360;
					return e < 0 && (e += 360), e
				}

				function v(t) {
					if (null == t) throw Error("radians is required");
					return 180 * (t % (2 * Math.PI)) / Math.PI
				}

				function x(t) {
					if (null == t) throw Error("degrees is required");
					return t % 360 * Math.PI / 180
				}

				function E(t, e, n) {
					if (null == t) throw Error("length is required");
					if (!(t >= 0)) throw Error("length must be a positive number");
					return d(y(t, e), n || "kilometers")
				}

				function b(t, e, n) {
					if (null == t) throw Error("area is required");
					if (!(t >= 0)) throw Error("area must be a positive number");
					var r = im[e || "meters"];
					if (!r) throw Error("invalid original units");
					var i = im[n || "kilometers"];
					if (!i) throw Error("invalid final units");
					return t / r * i
				}

				function I(t) {
					return !isNaN(t) && null !== t && !Array.isArray(t)
				}

				function N(t) {
					return !!t && t.constructor === Object
				}

				function w(t) {
					if (!t) throw Error("bbox is required");
					if (!Array.isArray(t)) throw Error("bbox must be an Array");
					if (4 !== t.length && 6 !== t.length) throw Error("bbox must be an Array of 4 or 6 numbers");
					t.forEach(function(t) {
						if (!I(t)) throw Error("bbox must only contain numbers")
					})
				}

				function C(t) {
					if (!t) throw Error("id is required");
					if (-1 === ["string", "number"].indexOf(typeof t)) throw Error("id must be a number or a string")
				}

				function S(t, e, n) {
					if (null !== t)
						for (var r, i, o, s, a, u, h, c, l = 0, p = 0, f = t.type, g = "FeatureCollection" === f, d = "Feature" === f, y = g ? t.features.length : 1, _ = 0; _ < y; _++) {
							a = (c = !!(h = g ? t.features[_].geometry : d ? t.geometry : t) && "GeometryCollection" === h.type) ? h.geometries.length : 1;
							for (var m = 0; m < a; m++) {
								var v = 0,
									x = 0;
								if (null !== (s = c ? h.geometries[m] : h)) {
									u = s.coordinates;
									var E = s.type;
									switch (l = n && ("Polygon" === E || "MultiPolygon" === E) ? 1 : 0, E) {
										case null:
											break;
										case "Point":
											e(u, p, _, v, x), p++, v++;
											break;
										case "LineString":
										case "MultiPoint":
											for (r = 0; r < u.length; r++) e(u[r], p, _, v, x), p++, "MultiPoint" === E && v++;
											"LineString" === E && v++;
											break;
										case "Polygon":
										case "MultiLineString":
											for (r = 0; r < u.length; r++) {
												for (i = 0; i < u[r].length - l; i++) e(u[r][i], p, _, v, x), p++;
												"MultiLineString" === E && v++, "Polygon" === E && x++
											}
											"Polygon" === E && v++;
											break;
										case "MultiPolygon":
											for (r = 0; r < u.length; r++) {
												for ("MultiPolygon" === E && (x = 0), i = 0; i < u[r].length; i++) {
													for (o = 0; o < u[r][i].length - l; o++) e(u[r][i][o], p, _, v, x), p++;
													x++
												}
												v++
											}
											break;
										case "GeometryCollection":
											for (r = 0; r < s.geometries.length; r++) S(s.geometries[r], e, n);
											break;
										default:
											throw Error("Unknown Geometry Type")
									}
								}
							}
						}
				}

				function M(t, e, n, r) {
					var i = n;
					return S(t, function(t, r, o, s, a) {
						i = 0 === r && void 0 === n ? t : e(i, t, r, o, s, a)
					}, r), i
				}

				function L(t, e) {
					var n;
					switch (t.type) {
						case "FeatureCollection":
							for (n = 0; n < t.features.length; n++) e(t.features[n].properties, n);
							break;
						case "Feature":
							e(t.properties, 0)
					}
				}

				function P(t, e, n) {
					var r = n;
					return L(t, function(t, i) {
						r = 0 === i && void 0 === n ? t : e(r, t, i)
					}), r
				}

				function O(t, e) {
					if ("Feature" === t.type) e(t, 0);
					else if ("FeatureCollection" === t.type)
						for (var n = 0; n < t.features.length; n++) e(t.features[n], n)
				}

				function R(t, e, n) {
					var r = n;
					return O(t, function(t, i) {
						r = 0 === i && void 0 === n ? t : e(r, t, i)
					}), r
				}

				function T(t) {
					var e = [];
					return S(t, function(t) {
						e.push(t)
					}), e
				}

				function D(t, e) {
					var n, r, i, o, s, a, u, h, c, l, p = 0,
						f = "FeatureCollection" === t.type,
						g = "Feature" === t.type,
						d = f ? t.features.length : 1;
					for (n = 0; n < d; n++) {
						for (a = f ? t.features[n].geometry : g ? t.geometry : t, h = f ? t.features[n].properties : g ? t.properties : {}, c = f ? t.features[n].bbox : g ? t.bbox : void 0, l = f ? t.features[n].id : g ? t.id : void 0, s = (u = !!a && "GeometryCollection" === a.type) ? a.geometries.length : 1, i = 0; i < s; i++)
							if (null !== (o = u ? a.geometries[i] : a)) switch (o.type) {
								case "Point":
								case "LineString":
								case "MultiPoint":
								case "Polygon":
								case "MultiLineString":
								case "MultiPolygon":
									e(o, p, h, c, l);
									break;
								case "GeometryCollection":
									for (r = 0; r < o.geometries.length; r++) e(o.geometries[r], p, h, c, l);
									break;
								default:
									throw Error("Unknown Geometry Type")
							} else e(null, p, h, c, l);
						p++
					}
				}

				function A(t, e, n) {
					var r = n;
					return D(t, function(t, i, o, s, a) {
						r = 0 === i && void 0 === n ? t : e(r, t, i, o, s, a)
					}), r
				}

				function F(t, n) {
					D(t, function(t, r, i, o, s) {
						var a, u = null === t ? null : t.type;
						switch (u) {
							case null:
							case "Point":
							case "LineString":
							case "Polygon":
								return void n(e(t, i, {
									bbox: o,
									id: s
								}), r, 0)
						}
						switch (u) {
							case "MultiPoint":
								a = "Point";
								break;
							case "MultiLineString":
								a = "LineString";
								break;
							case "MultiPolygon":
								a = "Polygon"
						}
						t.coordinates.forEach(function(t, o) {
							n(e({
								type: a,
								coordinates: t
							}, i), r, o)
						})
					})
				}

				function q(t, e, n) {
					var r = n;
					return F(t, function(t, i, o) {
						r = 0 === i && 0 === o && void 0 === n ? t : e(r, t, i, o)
					}), r
				}

				function G(t, e) {
					F(t, function(t, n, r) {
						var i = 0;
						if (t.geometry) {
							var o = t.geometry.type;
							"Point" !== o && "MultiPoint" !== o && M(t, function(o, s, u, h, c, l) {
								return e(a([o, s], t.properties), n, r, l, i), i++, s
							})
						}
					})
				}

				function B(t, e, n) {
					var r = n,
						i = !1;
					return G(t, function(t, o, s, a, u) {
						r = !1 === i && void 0 === n ? t : e(r, t, o, s, a, u), i = !0
					}), r
				}

				function k(t, e) {
					if (!t) throw Error("geojson is required");
					F(t, function(t, n, r) {
						if (null !== t.geometry) {
							var i = t.geometry.type,
								o = t.geometry.coordinates;
							switch (i) {
								case "LineString":
									e(t, n, r, 0, 0);
									break;
								case "Polygon":
									for (var s = 0; s < o.length; s++) e(a(o[s], t.properties), n, r, s)
							}
						}
					})
				}

				function z(t, e, n) {
					var r = n;
					return k(t, function(t, i, o, s) {
						r = 0 === i && void 0 === n ? t : e(r, t, i, o, s)
					}), r
				}

				function j(t) {
					var e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
					return S(t, function(t) {
						e[0] > t[0] && (e[0] = t[0]), e[1] > t[1] && (e[1] = t[1]), e[2] < t[0] && (e[2] = t[0]), e[3] < t[1] && (e[3] = t[1])
					}), e
				}

				function X(t) {
					if (!t) throw Error("obj is required");
					var e = U(t);
					if (e.length > 1 && I(e[0]) && I(e[1])) return e;
					throw Error("Coordinate is not a valid Point")
				}

				function U(t) {
					var e;
					if (!t) throw Error("obj is required");
					if (t.length ? e = t : t.coordinates ? e = t.coordinates : t.geometry && t.geometry.coordinates && (e = t.geometry.coordinates), e) return Y(e), e;
					throw Error("No valid coordinates")
				}

				function Y(t) {
					if (t.length > 1 && I(t[0]) && I(t[1])) return !0;
					if (Array.isArray(t[0]) && t[0].length) return Y(t[0]);
					throw Error("coordinates must only contain numbers")
				}

				function V(t, e, n) {
					if (!e || !n) throw Error("type and name required");
					if (!t || t.type !== e) throw Error("Invalid input to " + n + ": must be a " + e + ", given " + t.type)
				}

				function H(t, e, n) {
					if (!t) throw Error("No feature passed");
					if (!n) throw Error(".featureOf() requires a name");
					if (!t || "Feature" !== t.type || !t.geometry) throw Error("Invalid input to " + n + ", Feature with geometry required");
					if (!t.geometry || t.geometry.type !== e) throw Error("Invalid input to " + n + ": must be a " + e + ", given " + t.geometry.type)
				}

				function W(t, e, n) {
					if (!t) throw Error("No featureCollection passed");
					if (!n) throw Error(".collectionOf() requires a name");
					if (!t || "FeatureCollection" !== t.type) throw Error("Invalid input to " + n + ", FeatureCollection required");
					for (var r = 0; r < t.features.length; r++) {
						var i = t.features[r];
						if (!i || "Feature" !== i.type || !i.geometry) throw Error("Invalid input to " + n + ", Feature with geometry required");
						if (!i.geometry || i.geometry.type !== e) throw Error("Invalid input to " + n + ": must be a " + e + ", given " + i.geometry.type)
					}
				}

				function J(t) {
					if (!t) throw Error("geojson is required");
					if (void 0 !== t.geometry) return t.geometry;
					if (t.coordinates || t.geometries) return t;
					throw Error("geojson must be a valid Feature or Geometry Object")
				}

				function Z() {
					throw Error("invariant.getGeomType has been deprecated in v5.0 in favor of invariant.getType")
				}

				function K(t, e) {
					if (!t) throw Error((e || "geojson") + " is required");
					if (t.geometry && t.geometry.type) return t.geometry.type;
					if (t.type) return t.type;
					throw Error((e || "geojson") + " is invalid")
				}

				function Q(t) {
					return 0 === t.cval || 15 === t.cval
				}

				function $(t) {
					Q(t) || 5 === t.cval || 10 === t.cval || (t.cval = 15)
				}

				function tt(t, e) {
					return "top" === e ? [t.top, 1] : "bottom" === e ? [t.bottom, 0] : "right" === e ? [1, t.right] : "left" === e ? [0, t.left] : void 0
				}

				function te(t, e, n) {
					var r = t[e];
					t[e] = t[n], t[n] = r
				}

				function tn(t, e) {
					if (!(this instanceof tn)) return new tn(t, e);
					this._maxEntries = Math.max(4, t || 9), this._minEntries = Math.max(2, Math.ceil(.4 * this._maxEntries)), e && this._initFormat(e), this.clear()
				}

				function tr(t, e) {
					ti(t, 0, t.children.length, e, t)
				}

				function ti(t, e, n, r, i) {
					i || (i = tp(null)), i.minX = 1 / 0, i.minY = 1 / 0, i.maxX = -1 / 0, i.maxY = -1 / 0;
					for (var o, s = e; s < n; s++) o = t.children[s], to(i, t.leaf ? r(o) : o);
					return i
				}

				function to(t, e) {
					return t.minX = Math.min(t.minX, e.minX), t.minY = Math.min(t.minY, e.minY), t.maxX = Math.max(t.maxX, e.maxX), t.maxY = Math.max(t.maxY, e.maxY), t
				}

				function ts(t, e) {
					return t.minX - e.minX
				}

				function ta(t, e) {
					return t.minY - e.minY
				}

				function tu(t) {
					return (t.maxX - t.minX) * (t.maxY - t.minY)
				}

				function th(t) {
					return t.maxX - t.minX + (t.maxY - t.minY)
				}

				function tc(t, e) {
					return t.minX <= e.minX && t.minY <= e.minY && e.maxX <= t.maxX && e.maxY <= t.maxY
				}

				function tl(t, e) {
					return e.minX <= t.maxX && e.minY <= t.maxY && e.maxX >= t.minX && e.maxY >= t.minY
				}

				function tp(t) {
					return {
						children: t,
						height: 1,
						leaf: !0,
						minX: 1 / 0,
						minY: 1 / 0,
						maxX: -1 / 0,
						maxY: -1 / 0
					}
				}

				function tf(t, e, n, r, i) {
					for (var o, s = [e, n]; s.length;)(n = s.pop()) - (e = s.pop()) <= r || (iN(t, o = e + Math.ceil((n - e) / r / 2) * r, e, n, i), s.push(e, o, o, n))
				}

				function tg(t, e) {
					return t(e = {
						exports: {}
					}, e.exports), e.exports
				}

				function td(t, e) {
					if (!(this instanceof td)) return new td(t, e);
					if (this.data = t || [], this.length = this.data.length, this.compare = e || function(t, e) {
							return t < e ? -1 : t > e ? 1 : 0
						}, this.length > 0)
						for (var n = (this.length >> 1) - 1; n >= 0; n--) this._down(n)
				}

				function ty(t, e, n) {
					e = Math.max(0, void 0 === e ? 2 : e), n = n || 0;
					for (var r, i = function(t) {
							for (var e = t[0], n = t[0], r = t[0], i = t[0], o = 0; o < t.length; o++) {
								var s = t[o];
								s[0] < e[0] && (e = s), s[0] > r[0] && (r = s), s[1] < n[1] && (n = s), s[1] > i[1] && (i = s)
							}
							var a = [e, n, r, i],
								u = a.slice();
							for (o = 0; o < t.length; o++) iF(t[o], a) || u.push(t[o]);
							var h = iT(u),
								c = [];
							for (o = 0; o < h.length; o++) c.push(u[h[o]]);
							return c
						}(t), o = iw(16, ["[0]", "[1]", "[0]", "[1]"]).load(t), s = [], a = 0; a < i.length; a++) {
						var u = i[a];
						o.remove(u), r = tE(u, r), s.push(r)
					}
					var h = iw(16);
					for (a = 0; a < s.length; a++) h.insert(tx(s[a]));
					for (var c = e * e, l = n * n; s.length;) {
						var p = s.shift(),
							f = p.p,
							g = p.next.p,
							d = tb(f, g);
						if (!(d < l)) {
							var y = d / c;
							(u = function(t, e, n, r, i, o, s) {
								for (var a = new iA(null, t_), u = t.data; u;) {
									for (var h = 0; h < u.children.length; h++) {
										var c = u.children[h],
											l = u.leaf ? tI(c, n, r) : function(t, e, n) {
												if (tm(t, n) || tm(e, n)) return 0;
												var r = tN(t[0], t[1], e[0], e[1], n.minX, n.minY, n.maxX, n.minY);
												if (0 === r) return 0;
												var i = tN(t[0], t[1], e[0], e[1], n.minX, n.minY, n.minX, n.maxY);
												if (0 === i) return 0;
												var o = tN(t[0], t[1], e[0], e[1], n.maxX, n.minY, n.maxX, n.maxY);
												if (0 === o) return 0;
												var s = tN(t[0], t[1], e[0], e[1], n.minX, n.maxY, n.maxX, n.maxY);
												return 0 === s ? 0 : Math.min(r, i, o, s)
											}(n, r, c);
										l > o || a.push({
											node: c,
											dist: l
										})
									}
									for (; a.length && !a.peek().node.children;) {
										var p = a.pop(),
											f = p.node,
											g = tI(f, e, n),
											d = tI(f, r, i);
										if (p.dist < g && p.dist < d && tv(n, f, s) && tv(r, f, s)) return f
									}(u = a.pop()) && (u = u.node)
								}
								return null
							}(o, p.prev.p, f, g, p.next.next.p, y, h)) && Math.min(tb(u, f), tb(u, g)) <= y && (s.push(p), s.push(tE(u, p)), o.remove(u), h.remove(p), h.insert(tx(p)), h.insert(tx(p.next)))
						}
					}
					p = r;
					var _ = [];
					do _.push(p.p), p = p.next; while (p !== r);
					return _.push(p.p), _
				}

				function t_(t, e) {
					return t.dist - e.dist
				}

				function tm(t, e) {
					return t[0] >= e.minX && t[0] <= e.maxX && t[1] >= e.minY && t[1] <= e.maxY
				}

				function tv(t, e, n) {
					for (var r, i, o = Math.min(t[0], e[0]), s = Math.min(t[1], e[1]), a = Math.max(t[0], e[0]), u = Math.max(t[1], e[1]), h = n.search({
							minX: o,
							minY: s,
							maxX: a,
							maxY: u
						}), c = 0; c < h.length; c++)
						if (r = h[c].p, i = h[c].next.p, r !== e && i !== t && iq(r, i, t) > 0 != iq(r, i, e) > 0 && iq(t, e, r) > 0 != iq(t, e, i) > 0) return !1;
					return !0
				}

				function tx(t) {
					var e = t.p,
						n = t.next.p;
					return t.minX = Math.min(e[0], n[0]), t.minY = Math.min(e[1], n[1]), t.maxX = Math.max(e[0], n[0]), t.maxY = Math.max(e[1], n[1]), t
				}

				function tE(t, e) {
					var n = {
						p: t,
						prev: null,
						next: null,
						minX: 0,
						minY: 0,
						maxX: 0,
						maxY: 0
					};
					return e ? (n.next = e.next, n.prev = e, e.next.prev = n, e.next = n) : (n.prev = n, n.next = n), n
				}

				function tb(t, e) {
					var n = t[0] - e[0],
						r = t[1] - e[1];
					return n * n + r * r
				}

				function tI(t, e, n) {
					var r = e[0],
						i = e[1],
						o = n[0] - r,
						s = n[1] - i;
					if (0 !== o || 0 !== s) {
						var a = ((t[0] - r) * o + (t[1] - i) * s) / (o * o + s * s);
						a > 1 ? (r = n[0], i = n[1]) : a > 0 && (r += o * a, i += s * a)
					}
					return (o = t[0] - r) * o + (s = t[1] - i) * s
				}

				function tN(t, e, n, r, i, o, s, a) {
					var u, h, c, l, p = n - t,
						f = r - e,
						g = s - i,
						d = a - o,
						y = t - i,
						_ = e - o,
						m = p * p + f * f,
						v = p * g + f * d,
						x = g * g + d * d,
						E = p * y + f * _,
						b = g * y + d * _,
						I = m * x - v * v,
						N = I,
						w = I;
					0 === I ? (h = 0, N = 1, l = b, w = x) : (l = m * b - v * E, (h = v * b - x * E) < 0 ? (h = 0, l = b, w = x) : h > N && (h = N, l = b + v, w = x)), l < 0 ? (l = 0, 0 > -E ? h = 0 : -E > m ? h = N : (h = -E, N = m)) : l > w && (l = w, -E + v < 0 ? h = 0 : -E + v > m ? h = N : (h = -E + v, N = m)), u = 0 === h ? 0 : h / N;
					var C = (1 - (c = 0 === l ? 0 : l / w)) * i + c * s - ((1 - u) * t + u * n),
						S = (1 - c) * o + c * a - ((1 - u) * e + u * r);
					return C * C + S * S
				}

				function tw(t, e) {
					if (!N(e = e || {})) throw Error("options is invalid");
					var n = e.concavity || 1 / 0,
						r = [];
					if (S(t, function(t) {
							r.push([t[0], t[1]])
						}), !r.length) return null;
					var i = iG(r, n);
					return i.length > 3 ? o([i]) : null
				}

				function tC(t, e, n) {
					if ("object" != typeof(n = n || {})) throw Error("options is invalid");
					var r = n.ignoreBoundary;
					if (!t) throw Error("point is required");
					if (!e) throw Error("polygon is required");
					var i = X(t),
						o = U(e),
						s = e.geometry ? e.geometry.type : e.type,
						a = e.bbox;
					if (a && !1 == (a[0] <= i[0] && a[1] <= i[1] && a[2] >= i[0] && a[3] >= i[1])) return !1;
					"Polygon" === s && (o = [o]);
					for (var u = 0, h = !1; u < o.length && !h; u++)
						if (tS(i, o[u][0], r)) {
							for (var c = !1, l = 1; l < o[u].length && !c;) tS(i, o[u][l], !r) && (c = !0), l++;
							c || (h = !0)
						} return h
				}

				function tS(t, e, n) {
					var r = !1;
					e[0][0] === e[e.length - 1][0] && e[0][1] === e[e.length - 1][1] && (e = e.slice(0, e.length - 1));
					for (var i = 0, o = e.length - 1; i < e.length; o = i++) {
						var s = e[i][0],
							a = e[i][1],
							u = e[o][0],
							h = e[o][1];
						if (t[1] * (s - u) + a * (u - t[0]) + h * (t[0] - s) == 0 && (s - t[0]) * (u - t[0]) <= 0 && (a - t[1]) * (h - t[1]) <= 0) return !n;
						a > t[1] != h > t[1] && t[0] < (u - s) * (t[1] - a) / (h - a) + s && (r = !r)
					}
					return r
				}

				function tM(t, e) {
					var n = [];
					return D(e, function(e) {
						O(t, function(t) {
							tC(t, e) && n.push(t)
						})
					}), h(n)
				}

				function tL(t, e) {
					if ("FeatureCollection" !== t.type) throw Error("points must be a FeatureCollection");
					var n = !1;
					return h((function(t) {
						if (t.length < 3) return [];
						t.sort(tO);
						for (var e, n, r, i, o, s = t.length - 1, a = t[s].x, u = t[0].x, h = t[s].y, c = h; s--;) t[s].y < h && (h = t[s].y), t[s].y > c && (c = t[s].y);
						var l, p = u - a,
							f = c - h,
							g = p > f ? p : f,
							d = .5 * (u + a),
							y = .5 * (c + h),
							_ = [new tP({
								x: d - 20 * g,
								y: y - g,
								__sentinel: !0
							}, {
								x: d,
								y: y + 20 * g,
								__sentinel: !0
							}, {
								x: d + 20 * g,
								y: y - g,
								__sentinel: !0
							})],
							m = [],
							v = [];
						for (s = t.length; s--;) {
							for (v.length = 0, l = _.length; l--;)(p = t[s].x - _[l].x) > 0 && p * p > _[l].r ? (m.push(_[l]), _.splice(l, 1)) : p * p + (f = t[s].y - _[l].y) * f > _[l].r || (v.push(_[l].a, _[l].b, _[l].b, _[l].c, _[l].c, _[l].a), _.splice(l, 1));
							for (function(t) {
									var e, n, r, i, o, s = t.length;
									t: for (; s;)
										for (n = t[--s], e = t[--s], r = s; r;)
											if (o = t[--r], e === (i = t[--r]) && n === o || e === o && n === i) {
												t.splice(s, 2), t.splice(r, 2), s -= 2;
												continue t
											}
								}(v), l = v.length; l;) n = v[--l], e = v[--l], r = t[s], i = n.x - e.x, o = n.y - e.y, Math.abs(2 * (i * (r.y - n.y) - o * (r.x - n.x))) > 1e-12 && _.push(new tP(e, n, r))
						}
						for (Array.prototype.push.apply(m, _), s = m.length; s--;)(m[s].a.__sentinel || m[s].b.__sentinel || m[s].c.__sentinel) && m.splice(s, 1);
						return m
					})(t.features.map(function(t) {
						var r = {
							x: t.geometry.coordinates[0],
							y: t.geometry.coordinates[1]
						};
						return e ? r.z = t.properties[e] : 3 === t.geometry.coordinates.length && (n = !0, r.z = t.geometry.coordinates[2]), r
					})).map(function(t) {
						var e = [t.a.x, t.a.y],
							r = [t.b.x, t.b.y],
							i = [t.c.x, t.c.y],
							s = {};
						return n ? (e.push(t.a.z), r.push(t.b.z), i.push(t.c.z)) : s = {
							a: t.a.z,
							b: t.b.z,
							c: t.c.z
						}, o([
							[e, r, i, e]
						], s)
					}))
				}

				function tP(t, e, n) {
					this.a = t, this.b = e, this.c = n;
					var r, i, o = e.x - t.x,
						s = e.y - t.y,
						a = n.x - t.x,
						u = n.y - t.y,
						h = o * (t.x + e.x) + s * (t.y + e.y),
						c = a * (t.x + n.x) + u * (t.y + n.y),
						l = 2 * (o * (n.y - e.y) - s * (n.x - e.x));
					this.x = (u * h - s * c) / l, this.y = (o * c - a * h) / l, r = this.x - t.x, i = this.y - t.y, this.r = r * r + i * i
				}

				function tO(t, e) {
					return e.x - t.x
				}

				function tR(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					var r = n.units,
						i = X(t),
						o = X(e),
						s = Math.pow(Math.sin(x(o[1] - i[1]) / 2), 2) + Math.pow(Math.sin(x(o[0] - i[0]) / 2), 2) * Math.cos(x(i[1])) * Math.cos(x(o[1]));
					return d(2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s)), r)
				}

				function tT(t) {
					if (!t) throw Error("geojson is required");
					switch (t.type) {
						case "Feature":
							return tD(t);
						case "FeatureCollection":
							var e;
							return e = {
								type: "FeatureCollection"
							}, Object.keys(t).forEach(function(n) {
								switch (n) {
									case "type":
									case "features":
										return;
									default:
										e[n] = t[n]
								}
							}), e.features = t.features.map(function(t) {
								return tD(t)
							}), e;
						case "Point":
						case "LineString":
						case "Polygon":
						case "MultiPoint":
						case "MultiLineString":
						case "MultiPolygon":
						case "GeometryCollection":
							return tA(t);
						default:
							throw Error("unknown GeoJSON type")
					}
				}

				function tD(t) {
					var e = {
						type: "Feature"
					};
					return Object.keys(t).forEach(function(n) {
						switch (n) {
							case "type":
							case "properties":
							case "geometry":
								return;
							default:
								e[n] = t[n]
						}
					}), e.properties = function t(e) {
						var n = {};
						return e && Object.keys(e).forEach(function(r) {
							var i = e[r];
							"object" == typeof i ? null === i ? n[r] = null : i.length ? n[r] = i.map(function(t) {
								return t
							}) : n[r] = t(i) : n[r] = i
						}), n
					}(t.properties), e.geometry = tA(t.geometry), e
				}

				function tA(t) {
					var e = {
						type: t.type
					};
					return t.bbox && (e.bbox = t.bbox), "GeometryCollection" === t.type ? e.geometries = t.geometries.map(function(t) {
						return tA(t)
					}) : e.coordinates = function t(e) {
						return "object" != typeof e[0] ? e.slice() : e.map(function(e) {
							return t(e)
						})
					}(t.coordinates), e
				}

				function tF(t, e) {
					function n(t) {
						return s(t)
					}

					function r(t) {
						for (var e = [], n = 0, r = t.length; n < r; ++n) ! function(t, e) {
							e.length && e.pop();
							for (var n = a[t < 0 ? ~t : t], r = 0, i = n.length; r < i; ++r) e.push(s(n[r], r));
							t < 0 && iz(e, i)
						}(t[n], e);
						return e.length < 2 && e.push(e[0]), e
					}

					function i(t) {
						for (var e = r(t); e.length < 4;) e.push(e[0]);
						return e
					}

					function o(t) {
						return t.map(i)
					}
					var s = ik(t.transform),
						a = t.arcs;
					return function t(e) {
						var i, s = e.type;
						switch (s) {
							case "GeometryCollection":
								return {
									type: s, geometries: e.geometries.map(t)
								};
							case "Point":
								i = n(e.coordinates);
								break;
							case "MultiPoint":
								i = e.coordinates.map(n);
								break;
							case "LineString":
								i = r(e.arcs);
								break;
							case "MultiLineString":
								i = e.arcs.map(r);
								break;
							case "Polygon":
								i = o(e.arcs);
								break;
							case "MultiPolygon":
								i = e.arcs.map(o);
								break;
							default:
								return null
						}
						return {
							type: s,
							coordinates: i
						}
					}(e)
				}

				function tq(t, e) {
					function n(t) {
						t.forEach(function(e) {
							e.forEach(function(e) {
								(i[e = e < 0 ? ~e : e] || (i[e] = [])).push(t)
							})
						}), o.push(t)
					}

					function r(e) {
						return function(t) {
							for (var e, n = -1, r = t.length, i = t[r - 1], o = 0; ++n < r;) e = i, i = t[n], o += e[0] * i[1] - e[1] * i[0];
							return Math.abs(o)
						}(tF(t, {
							type: "Polygon",
							arcs: [e]
						}).coordinates[0])
					}
					var i = {},
						o = [],
						s = [];
					return e.forEach(function t(e) {
						switch (e.type) {
							case "GeometryCollection":
								e.geometries.forEach(t);
								break;
							case "Polygon":
								n(e.arcs);
								break;
							case "MultiPolygon":
								e.arcs.forEach(n)
						}
					}), o.forEach(function(t) {
						if (!t._) {
							var e = [],
								n = [t];
							for (t._ = 1, s.push(e); t = n.pop();) e.push(t), t.forEach(function(t) {
								t.forEach(function(t) {
									i[t < 0 ? ~t : t].forEach(function(t) {
										t._ || (t._ = 1, n.push(t))
									})
								})
							})
						}
					}), o.forEach(function(t) {
						delete t._
					}), {
						type: "MultiPolygon",
						arcs: s.map(function(e) {
							var n, o = [];
							if (e.forEach(function(t) {
									t.forEach(function(t) {
										t.forEach(function(t) {
											i[t < 0 ? ~t : t].length < 2 && o.push(t)
										})
									})
								}), (n = (o = ij(t, o)).length) > 1)
								for (var s, a, u = 1, h = r(o[0]); u < n; ++u)(s = r(o[u])) > h && (a = o[0], o[0] = o[u], o[u] = a, h = s);
							return o
						})
					}
				}

				function tG(t, e, n) {
					for (var r, i = e + (n-- - e >> 1); e < i; ++e, --n) r = t[e], t[e] = t[n], t[n] = r
				}

				function tB(t) {
					var e, n = tk(t.geometry);
					for (e in null != t.id && (n.id = t.id), null != t.bbox && (n.bbox = t.bbox), t.properties) {
						n.properties = t.properties;
						break
					}
					return n
				}

				function tk(t) {
					if (null == t) return {
						type: null
					};
					var e = "GeometryCollection" === t.type ? {
						type: "GeometryCollection",
						geometries: t.geometries.map(tk)
					} : "Point" === t.type || "MultiPoint" === t.type ? {
						type: t.type,
						coordinates: t.coordinates
					} : {
						type: t.type,
						arcs: t.coordinates
					};
					return null != t.bbox && (e.bbox = t.bbox), e
				}

				function tz(t) {
					var e, n = t[0],
						r = t[1];
					return r < n && (e = n, n = r, r = e), n + 31 * r
				}

				function tj(t, e) {
					var n, r = t[0],
						i = t[1],
						o = e[0],
						s = e[1];
					return i < r && (n = r, r = i, i = n), s < o && (n = o, o = s, s = n), r === o && i === s
				}

				function tX(t) {
					return t[0].toString() + "," + t[1].toString()
				}

				function tU(t, n) {
					var r = "object" == typeof n ? n.mutate : n;
					if (!t) throw Error("geojson is required");
					var i = K(t),
						o = [];
					switch (i) {
						case "LineString":
							o = tY(t);
							break;
						case "MultiLineString":
						case "Polygon":
							U(t).forEach(function(t) {
								o.push(tY(t))
							});
							break;
						case "MultiPolygon":
							U(t).forEach(function(t) {
								var e = [];
								t.forEach(function(t) {
									e.push(tY(t))
								}), o.push(e)
							});
							break;
						case "Point":
							return t;
						case "MultiPoint":
							var s = {};
							U(t).forEach(function(t) {
								var e = t.join("-");
								s.hasOwnProperty(e) || (o.push(t), s[e] = !0)
							});
							break;
						default:
							throw Error(i + " geometry not supported")
					}
					return t.coordinates ? !0 === r ? (t.coordinates = o, t) : {
						type: i,
						coordinates: o
					} : !0 === r ? (t.geometry.coordinates = o, t) : e({
						type: i,
						coordinates: o
					}, t.properties, t.bbox, t.id)
				}

				function tY(t) {
					var e = U(t);
					if (2 === e.length && (n = e[0], r = e[1], n[0] !== r[0] || n[1] !== r[1])) return e;
					var n, r, i, o, s, a = [],
						u = e.length - 1;
					a.push(e[0]);
					for (var h = 1; h < u; h++) i = e[h - 1], o = e[h],
						function(t, e, n) {
							var r = n[0],
								i = n[1],
								o = t[0],
								s = t[1],
								a = e[0],
								u = e[1],
								h = a - o,
								c = u - s;
							return (r - o) * c - (i - s) * h == 0 && (Math.abs(h) >= Math.abs(c) ? h > 0 ? o <= r && r <= a : a <= r && r <= o : c > 0 ? s <= i && i <= u : u <= i && i <= s)
						}(i, s = e[h + 1], o) || a.push(o);
					return a.push(s), a
				}

				function tV(t, e, n) {
					if (t.length <= 2) return t;
					var r, i, o, s = void 0 !== e ? e * e : 1;
					return i = (r = t = n ? t : function(t, e) {
							for (var n, r = t[0], i = [r], o = 1, s = t.length; o < s; o++)(function(t, e) {
								var n = t.x - e.x,
									r = t.y - e.y;
								return n * n + r * r
							})(n = t[o], r) > e && (i.push(n), r = n);
							return r !== n && i.push(n), i
						}(t, s)).length - 1, o = [r[0]],
						function t(e, n, r, i, o) {
							for (var s, a = i, u = n + 1; u < r; u++) {
								var h = function(t, e, n) {
									var r = e.x,
										i = e.y,
										o = n.x - r,
										s = n.y - i;
									if (0 !== o || 0 !== s) {
										var a = ((t.x - r) * o + (t.y - i) * s) / (o * o + s * s);
										a > 1 ? (r = n.x, i = n.y) : a > 0 && (r += o * a, i += s * a)
									}
									return (o = t.x - r) * o + (s = t.y - i) * s
								}(e[u], e[n], e[r]);
								h > a && (s = u, a = h)
							}
							a > i && (s - n > 1 && t(e, n, s, i, o), o.push(e[s]), r - s > 1 && t(e, s, r, i, o))
						}(r, 0, i, s, o), o.push(r[i]), t = o
				}

				function tH(t, e, n) {
					return tV(t.map(function(t) {
						return {
							x: t[0],
							y: t[1],
							z: t[2]
						}
					}), e, n).map(function(t) {
						return t.z ? [t.x, t.y, t.z] : [t.x, t.y]
					})
				}

				function tW(t, e, n) {
					return t.map(function(t) {
						var r, i = t.map(function(t) {
							return {
								x: t[0],
								y: t[1]
							}
						});
						if (i.length < 4) throw Error("invalid polygon");
						for (var o = tV(i, e, n).map(function(t) {
								return [t.x, t.y]
							});
							(r = o).length < 3 || 3 === r.length && r[2][0] === r[0][0] && r[2][1] === r[0][1];) o = tV(i, e -= .01 * e, n).map(function(t) {
							return [t.x, t.y]
						});
						return o[o.length - 1][0] === o[0][0] && o[o.length - 1][1] === o[0][1] || o.push(o[0]), o
					})
				}

				function tJ(t, e) {
					if (!N(e = e || {})) throw Error("options is invalid");
					var n = e.resolution || 1e4,
						r = e.sharpness || .85;
					if (!t) throw Error("line is required");
					if (!I(n)) throw Error("resolution must be an number");
					if (!I(r)) throw Error("sharpness must be an number");
					for (var i = [], o = new i$({
							points: J(t).coordinates.map(function(t) {
								return {
									x: t[0],
									y: t[1]
								}
							}),
							duration: n,
							sharpness: r
						}), s = 0; s < o.duration; s += 10) {
						var u = o.pos(s);
						Math.floor(s / 100) % 2 == 0 && i.push([u.x, u.y])
					}
					return a(i, t.properties)
				}

				function tZ(t) {
					w(t);
					var e = Number(t[0]),
						n = Number(t[1]),
						r = Number(t[2]),
						i = Number(t[3]);
					if (6 === t.length) throw Error("@turf/bbox-polygon does not support BBox with 6 positions");
					var s = [e, n];
					return o([
						[s, [r, n],
							[r, i],
							[e, i], s
						]
					])
				}

				function tK(t) {
					return tZ(j(t))
				}

				function tQ(t) {
					var e = t[0],
						n = t[1],
						r = t[2],
						i = t[3];
					if (tR(t.slice(0, 2), [r, n]) >= tR(t.slice(0, 2), [e, i])) {
						var o = (n + i) / 2;
						return [e, o - (r - e) / 2, r, o + (r - e) / 2]
					}
					var s = (e + r) / 2;
					return [s - (i - n) / 2, n, s + (i - n) / 2, i]
				}

				function t$(t, e, n, i) {
					if (!N(i = i || {})) throw Error("options is invalid");
					var o = i.units,
						s = i.properties,
						a = X(t),
						u = x(a[0]),
						h = x(a[1]),
						c = x(n),
						l = y(e, o),
						p = Math.asin(Math.sin(h) * Math.cos(l) + Math.cos(h) * Math.sin(l) * Math.cos(c));
					return r([v(u + Math.atan2(Math.sin(c) * Math.sin(l) * Math.cos(h), Math.cos(l) - Math.sin(h) * Math.sin(p))), v(p)], s)
				}

				function t0(t, e, n) {
					var r = (n = n || {}).steps || 64,
						i = n.properties;
					if (!t) throw Error("center is required");
					if (!e) throw Error("radius is required");
					if ("object" != typeof n) throw Error("options must be an object");
					if ("number" != typeof r) throw Error("steps must be a number");
					r = r || 64, i = i || t.properties || {};
					for (var s = [], a = 0; a < r; a++) s.push(t$(t, e, -360 * a / r, n).geometry.coordinates);
					return s.push(s[0]), o([s], i)
				}

				function t1(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					if (!0 === n.final) return (t1(e, t) + 180) % 360;
					var r = X(t),
						i = X(e),
						o = x(r[0]),
						s = x(i[0]),
						a = x(r[1]),
						u = x(i[1]);
					return v(Math.atan2(Math.sin(s - o) * Math.cos(u), Math.cos(a) * Math.sin(u) - Math.sin(a) * Math.cos(u) * Math.cos(s - o)))
				}

				function t2(t, e) {
					if (!N(e = e || {})) throw Error("options is invalid");
					var n = e.properties;
					if (!t) throw Error("geojson is required");
					var i = j(t);
					return r([(i[0] + i[2]) / 2, (i[1] + i[3]) / 2], n)
				}

				function t3(t, e) {
					var n = 0,
						i = 0,
						o = 0;
					return S(t, function(t) {
						n += t[0], i += t[1], o++
					}, !0), r([n / o, i / o], e)
				}

				function t4(t) {
					var e = [];
					return "FeatureCollection" === t.type ? O(t, function(t) {
						S(t, function(n) {
							e.push(r(n, t.properties))
						})
					}) : S(t, function(n) {
						e.push(r(n, t.properties))
					}), h(e)
				}

				function t6(t, e, n) {
					n = n || 2;
					var r, i, o, s, a, u, h, c = e && e.length,
						l = c ? e[0] * n : t.length,
						p = t8(t, 0, l, n, !0),
						f = [];
					if (!p) return f;
					if (c && (p = function(t, e, n, r) {
							var i, o, s, a, u, h = [];
							for (i = 0, o = e.length; i < o; i++) s = e[i] * r, a = i < o - 1 ? e[i + 1] * r : t.length, (u = t8(t, s, a, r, !1)) === u.next && (u.steiner = !0), h.push(function(t) {
								var e = t,
									n = t;
								do e.x < n.x && (n = e), e = e.next; while (e !== t);
								return n
							}(u));
							for (h.sort(t9), i = 0; i < h.length; i++)(function(t, e) {
								if (e = function(t, e) {
										var n, r = e,
											i = t.x,
											o = t.y,
											s = -1 / 0;
										do {
											if (o <= r.y && o >= r.next.y && r.next.y !== r.y) {
												var a = r.x + (o - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
												if (a <= i && a > s) {
													if (s = a, a === i) {
														if (o === r.y) return r;
														if (o === r.next.y) return r.next
													}
													n = r.x < r.next.x ? r : r.next
												}
											}
											r = r.next
										} while (r !== e);
										if (!n) return null;
										if (i === s) return n.prev;
										var u, h = n,
											c = n.x,
											l = n.y,
											p = 1 / 0;
										for (r = n.next; r !== h;) i >= r.x && r.x >= c && i !== r.x && et(o < l ? i : s, o, c, l, o < l ? s : i, o, r.x, r.y) && ((u = Math.abs(o - r.y) / (i - r.x)) < p || u === p && r.x > n.x) && ei(r, t) && (n = r, p = u), r = r.next;
										return n
									}(t, e)) {
									var n = eo(e, t);
									t5(n, n.next)
								}
							})(h[i], n), n = t5(n, n.next);
							return n
						}(t, e, p, n)), t.length > 80 * n) {
						r = o = t[0], i = s = t[1];
						for (var g = n; g < l; g += n) a = t[g], u = t[g + 1], a < r && (r = a), u < i && (i = u), a > o && (o = a), u > s && (s = u);
						h = 0 !== (h = Math.max(o - r, s - i)) ? 1 / h : 0
					}
					return function t(e, n, r, i, o, s, a) {
						if (e) {
							!a && s && function(t, e, n, r) {
								var i = t;
								do null === i.z && (i.z = t7(i.x, i.y, e, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next; while (i !== t);
								i.prevZ.nextZ = null, i.prevZ = null,
									function(t) {
										var e, n, r, i, o, s, a, u, h = 1;
										do {
											for (n = t, t = null, o = null, s = 0; n;) {
												for (s++, r = n, a = 0, e = 0; e < h && (a++, r = r.nextZ); e++);
												for (u = h; a > 0 || u > 0 && r;) 0 !== a && (0 === u || !r || n.z <= r.z) ? (i = n, n = n.nextZ, a--) : (i = r, r = r.nextZ, u--), o ? o.nextZ = i : t = i, i.prevZ = o, o = i;
												n = r
											}
											o.nextZ = null, h *= 2
										} while (s > 1)
									}(i)
							}(e, i, o, s);
							for (var u, h, c = e; e.prev !== e.next;)
								if (u = e.prev, h = e.next, s ? function(t, e, n, r) {
										var i = t.prev,
											o = t.next;
										if (ee(i, t, o) >= 0) return !1;
										for (var s = i.x < t.x ? i.x < o.x ? i.x : o.x : t.x < o.x ? t.x : o.x, a = i.y < t.y ? i.y < o.y ? i.y : o.y : t.y < o.y ? t.y : o.y, u = i.x > t.x ? i.x > o.x ? i.x : o.x : t.x > o.x ? t.x : o.x, h = i.y > t.y ? i.y > o.y ? i.y : o.y : t.y > o.y ? t.y : o.y, c = t7(s, a, e, n, r), l = t7(u, h, e, n, r), p = t.nextZ; p && p.z <= l;) {
											if (p !== t.prev && p !== t.next && et(i.x, i.y, t.x, t.y, o.x, o.y, p.x, p.y) && ee(p.prev, p, p.next) >= 0) return !1;
											p = p.nextZ
										}
										for (p = t.prevZ; p && p.z >= c;) {
											if (p !== t.prev && p !== t.next && et(i.x, i.y, t.x, t.y, o.x, o.y, p.x, p.y) && ee(p.prev, p, p.next) >= 0) return !1;
											p = p.prevZ
										}
										return !0
									}(e, i, o, s) : function(t) {
										var e = t.prev,
											n = t.next;
										if (ee(e, t, n) >= 0) return !1;
										for (var r = t.next.next; r !== t.prev;) {
											if (et(e.x, e.y, t.x, t.y, n.x, n.y, r.x, r.y) && ee(r.prev, r, r.next) >= 0) return !1;
											r = r.next
										}
										return !0
									}(e)) n.push(u.i / r), n.push(e.i / r), n.push(h.i / r), ea(e), e = h.next, c = h.next;
								else if ((e = h) === c) {
								a ? 1 === a ? t(e = function(t, e, n) {
									var r = t;
									do {
										var i = r.prev,
											o = r.next.next;
										!en(i, o) && er(i, r, r.next, o) && ei(i, o) && ei(o, i) && (e.push(i.i / n), e.push(r.i / n), e.push(o.i / n), ea(r), ea(r.next), r = t = o), r = r.next
									} while (r !== t);
									return r
								}(e, n, r), n, r, i, o, s, 2) : 2 === a && function(e, n, r, i, o, s) {
									var a = e;
									do {
										for (var u, h, c = a.next.next; c !== a.prev;) {
											if (a.i !== c.i && (u = a, h = c, u.next.i !== h.i && u.prev.i !== h.i && ! function(t, e) {
													var n = t;
													do {
														if (n.i !== t.i && n.next.i !== t.i && n.i !== e.i && n.next.i !== e.i && er(n, n.next, t, e)) return !0;
														n = n.next
													} while (n !== t);
													return !1
												}(u, h) && ei(u, h) && ei(h, u) && function(t, e) {
													var n = t,
														r = !1,
														i = (t.x + e.x) / 2,
														o = (t.y + e.y) / 2;
													do n.y > o != n.next.y > o && n.next.y !== n.y && i < (n.next.x - n.x) * (o - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next; while (n !== t);
													return r
												}(u, h))) {
												var l = eo(a, c);
												return a = t5(a, a.next), l = t5(l, l.next), t(a, n, r, i, o, s), void t(l, n, r, i, o, s)
											}
											c = c.next
										}
										a = a.next
									} while (a !== e)
								}(e, n, r, i, o, s) : t(t5(e), n, r, i, o, s, 1);
								break
							}
						}
					}(p, f, n, r, i, h), f
				}

				function t8(t, e, n, r, i) {
					var o, s;
					if (i === eh(t, e, n, r) > 0)
						for (o = e; o < n; o += r) s = es(o, t[o], t[o + 1], s);
					else
						for (o = n - r; o >= e; o -= r) s = es(o, t[o], t[o + 1], s);
					return s && en(s, s.next) && (ea(s), s = s.next), s
				}

				function t5(t, e) {
					if (!t) return t;
					e || (e = t);
					var n, r = t;
					do
						if (n = !1, r.steiner || !en(r, r.next) && 0 !== ee(r.prev, r, r.next)) r = r.next;
						else {
							if (ea(r), (r = e = r.prev) === r.next) break;
							n = !0
						} while (n || r !== e);
					return e
				}

				function t9(t, e) {
					return t.x - e.x
				}

				function t7(t, e, n, r, i) {
					return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - n) * i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - r) * i) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
				}

				function et(t, e, n, r, i, o, s, a) {
					return (i - s) * (e - a) - (t - s) * (o - a) >= 0 && (t - s) * (r - a) - (n - s) * (e - a) >= 0 && (n - s) * (o - a) - (i - s) * (r - a) >= 0
				}

				function ee(t, e, n) {
					return (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)
				}

				function en(t, e) {
					return t.x === e.x && t.y === e.y
				}

				function er(t, e, n, r) {
					return !!(en(t, e) && en(n, r) || en(t, r) && en(n, e)) || ee(t, e, n) > 0 != ee(t, e, r) > 0 && ee(n, r, t) > 0 != ee(n, r, e) > 0
				}

				function ei(t, e) {
					return 0 > ee(t.prev, t, t.next) ? ee(t, e, t.next) >= 0 && ee(t, t.prev, e) >= 0 : 0 > ee(t, e, t.prev) || 0 > ee(t, t.next, e)
				}

				function eo(t, e) {
					var n = new eu(t.i, t.x, t.y),
						r = new eu(e.i, e.x, e.y),
						i = t.next,
						o = e.prev;
					return t.next = e, e.prev = t, n.next = i, i.prev = n, r.next = n, n.prev = r, o.next = r, r.prev = o, r
				}

				function es(t, e, n, r) {
					var i = new eu(t, e, n);
					return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i
				}

				function ea(t) {
					t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
				}

				function eu(t, e, n) {
					this.i = t, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
				}

				function eh(t, e, n, r) {
					for (var i = 0, o = e, s = n - r; o < n; o += r) i += (t[s] - t[o]) * (t[o + 1] + t[s + 1]), s = o;
					return i
				}

				function ec(t) {
					var e = function(t) {
							for (var e = t[0][0].length, n = {
									vertices: [],
									holes: [],
									dimensions: e
								}, r = 0, i = 0; i < t.length; i++) {
								for (var o = 0; o < t[i].length; o++)
									for (var s = 0; s < e; s++) n.vertices.push(t[i][o][s]);
								i > 0 && (r += t[i - 1].length, n.holes.push(r))
							}
							return n
						}(t),
						n = i0(e.vertices, e.holes, 2),
						r = [],
						i = [];
					n.forEach(function(t, r) {
						var o = n[r];
						i.push([e.vertices[2 * o], e.vertices[2 * o + 1]])
					});
					for (var s = 0; s < i.length; s += 3) {
						var a = i.slice(s, s + 3);
						a.push(i[s]), r.push(o([a]))
					}
					return r
				}

				function el(t, e) {
					if (!t) throw Error("targetPoint is required");
					if (!e) throw Error("points is required");
					var n, r = 1 / 0;
					return O(e, function(e, i) {
						var o = tR(t, e);
						o < r && ((n = tT(e)).properties.featureIndex = i, n.properties.distanceToPoint = o, r = o)
					}), n
				}

				function ep(t, e, n) {
					var r = t[e];
					t[e] = t[n], t[n] = r
				}

				function ef(t, e) {
					if (!(this instanceof ef)) return new ef(t, e);
					this._maxEntries = Math.max(4, t || 9), this._minEntries = Math.max(2, Math.ceil(.4 * this._maxEntries)), e && this._initFormat(e), this.clear()
				}

				function eg(t, e) {
					ed(t, 0, t.children.length, e, t)
				}

				function ed(t, e, n, r, i) {
					i || (i = eI(null)), i.minX = 1 / 0, i.minY = 1 / 0, i.maxX = -1 / 0, i.maxY = -1 / 0;
					for (var o, s = e; s < n; s++) o = t.children[s], ey(i, t.leaf ? r(o) : o);
					return i
				}

				function ey(t, e) {
					return t.minX = Math.min(t.minX, e.minX), t.minY = Math.min(t.minY, e.minY), t.maxX = Math.max(t.maxX, e.maxX), t.maxY = Math.max(t.maxY, e.maxY), t
				}

				function e_(t, e) {
					return t.minX - e.minX
				}

				function em(t, e) {
					return t.minY - e.minY
				}

				function ev(t) {
					return (t.maxX - t.minX) * (t.maxY - t.minY)
				}

				function ex(t) {
					return t.maxX - t.minX + (t.maxY - t.minY)
				}

				function eE(t, e) {
					return t.minX <= e.minX && t.minY <= e.minY && e.maxX <= t.maxX && e.maxY <= t.maxY
				}

				function eb(t, e) {
					return e.minX <= t.maxX && e.minY <= t.maxY && e.maxX >= t.minX && e.maxY >= t.minY
				}

				function eI(t) {
					return {
						children: t,
						height: 1,
						leaf: !0,
						minX: 1 / 0,
						minY: 1 / 0,
						maxX: -1 / 0,
						maxY: -1 / 0
					}
				}

				function eN(t, e, n, r, i) {
					for (var o, s = [e, n]; s.length;)(n = s.pop()) - (e = s.pop()) <= r || (function t(e, n, r, i, o) {
						for (; i > r;) {
							if (i - r > 600) {
								var s = i - r + 1,
									a = n - r + 1,
									u = Math.log(s),
									h = .5 * Math.exp(2 * u / 3),
									c = .5 * Math.sqrt(u * h * (s - h) / s) * (a - s / 2 < 0 ? -1 : 1);
								t(e, n, Math.max(r, Math.floor(n - a * h / s + c)), Math.min(i, Math.floor(n + (s - a) * h / s + c)), o)
							}
							var l = e[n],
								p = r,
								f = i;
							for (ep(e, r, n), o(e[i], l) > 0 && ep(e, r, i); p < f;) {
								for (ep(e, p, f), p++, f--; 0 > o(e[p], l);) p++;
								for (; o(e[f], l) > 0;) f--
							}
							0 === o(e[r], l) ? ep(e, r, f) : ep(e, ++f, i), f <= n && (r = f + 1), n <= f && (i = f - 1)
						}
					}(t, o = e + Math.ceil((n - e) / r / 2) * r, e || 0, n || t.length - 1, i || function(t, e) {
						return t < e ? -1 : t > e ? 1 : 0
					}), s.push(e, o, o, n))
				}

				function ew(t) {
					var e = ef(t);
					return e.insert = function(t) {
						if (Array.isArray(t)) {
							var e = t;
							(t = eC(e)).bbox = e
						} else t.bbox = t.bbox ? t.bbox : eS(t);
						return ef.prototype.insert.call(this, t)
					}, e.load = function(t) {
						var e = [];
						return Array.isArray(t) ? t.forEach(function(t) {
							var n = eC(t);
							n.bbox = t, e.push(n)
						}) : O(t, function(t) {
							t.bbox = t.bbox ? t.bbox : eS(t), e.push(t)
						}), ef.prototype.load.call(this, e)
					}, e.remove = function(t) {
						if (Array.isArray(t)) {
							var e = t;
							(t = eC(e)).bbox = e
						}
						return ef.prototype.remove.call(this, t)
					}, e.clear = function() {
						return ef.prototype.clear.call(this)
					}, e.search = function(t) {
						return {
							type: "FeatureCollection",
							features: ef.prototype.search.call(this, this.toBBox(t))
						}
					}, e.collides = function(t) {
						return ef.prototype.collides.call(this, this.toBBox(t))
					}, e.all = function() {
						return {
							type: "FeatureCollection",
							features: ef.prototype.all.call(this)
						}
					}, e.toJSON = function() {
						return ef.prototype.toJSON.call(this)
					}, e.fromJSON = function(t) {
						return ef.prototype.fromJSON.call(this, t)
					}, e.toBBox = function(t) {
						var e;
						return {
							minX: (e = t.bbox ? t.bbox : Array.isArray(t) && 4 === t.length ? t : eS(t))[0],
							minY: e[1],
							maxX: e[2],
							maxY: e[3]
						}
					}, e
				}

				function eC(t) {
					var e = [t[0], t[1]],
						n = [t[0], t[3]],
						r = [t[2], t[3]];
					return {
						type: "Feature",
						bbox: t,
						properties: {},
						geometry: {
							type: "Polygon",
							coordinates: [
								[e, [t[2], t[1]], r, n, e]
							]
						}
					}
				}

				function eS(t) {
					var e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
					return S(t, function(t) {
						e[0] > t[0] && (e[0] = t[0]), e[1] > t[1] && (e[1] = t[1]), e[2] < t[0] && (e[2] = t[0]), e[3] < t[1] && (e[3] = t[1])
					}), e
				}

				function eM(t) {
					if (!t) throw Error("geojson is required");
					var e = [];
					return F(t, function(t) {
						! function(t, e) {
							var n = [],
								r = t.geometry;
							switch (r.type) {
								case "Polygon":
									n = U(r);
									break;
								case "LineString":
									n = [U(r)]
							}
							n.forEach(function(n) {
								var r, i;
								(r = t.properties, i = [], n.reduce(function(t, e) {
									var n, o, s, u, h = a([t, e], r);
									return h.bbox = (n = t[0], o = t[1], [n < (s = e[0]) ? n : s, o < (u = e[1]) ? o : u, n > s ? n : s, o > u ? o : u]), i.push(h), e
								}), i).forEach(function(t) {
									t.id = e.length, e.push(t)
								})
							})
						}(t, e)
					}), h(e)
				}

				function eL(t, n) {
					var r = {},
						i = [];
					if ("LineString" === t.type && (t = e(t)), "LineString" === n.type && (n = e(n)), "Feature" === t.type && "Feature" === n.type && "LineString" === t.geometry.type && "LineString" === n.geometry.type && 2 === t.geometry.coordinates.length && 2 === n.geometry.coordinates.length) {
						var o = eP(t, n);
						return o && i.push(o), h(i)
					}
					var s = ew();
					return s.load(eM(n)), O(eM(t), function(t) {
						O(s.search(t), function(e) {
							var n = eP(t, e);
							if (n) {
								var o = U(n).join(",");
								r[o] || (r[o] = !0, i.push(n))
							}
						})
					}), h(i)
				}

				function eP(t, e) {
					var n = U(t),
						i = U(e);
					if (2 !== n.length) throw Error("<intersects> line1 must only contain 2 coordinates");
					if (2 !== i.length) throw Error("<intersects> line2 must only contain 2 coordinates");
					var o = n[0][0],
						s = n[0][1],
						a = n[1][0],
						u = n[1][1],
						h = i[0][0],
						c = i[0][1],
						l = i[1][0],
						p = i[1][1],
						f = (p - c) * (a - o) - (l - h) * (u - s);
					if (0 === f) return null;
					var g = ((l - h) * (s - c) - (p - c) * (o - h)) / f,
						d = ((a - o) * (s - c) - (u - s) * (o - h)) / f;
					return g >= 0 && g <= 1 && d >= 0 && d <= 1 ? r([o + g * (a - o), s + g * (u - s)]) : null
				}

				function eO(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					var i = t.geometry ? t.geometry.type : t.type;
					if ("LineString" !== i && "MultiLineString" !== i) throw Error("lines must be LineString or MultiLineString");
					var o = r([1 / 0, 1 / 0], {
							dist: 1 / 0
						}),
						s = 0;
					return F(t, function(t) {
						for (var i = U(t), u = 0; u < i.length - 1; u++) {
							var h = r(i[u]);
							h.properties.dist = tR(e, h, n);
							var c = r(i[u + 1]);
							c.properties.dist = tR(e, c, n);
							var l = tR(h, c, n),
								p = Math.max(h.properties.dist, c.properties.dist),
								f = t1(h, c),
								g = t$(e, p, f + 90, n),
								d = t$(e, p, f - 90, n),
								y = eL(a([g.geometry.coordinates, d.geometry.coordinates]), a([h.geometry.coordinates, c.geometry.coordinates])),
								_ = null;
							y.features.length > 0 && ((_ = y.features[0]).properties.dist = tR(e, _, n), _.properties.location = s + tR(h, _, n)), h.properties.dist < o.properties.dist && ((o = h).properties.index = u, o.properties.location = s), c.properties.dist < o.properties.dist && ((o = c).properties.index = u + 1, o.properties.location = s + l), _ && _.properties.dist < o.properties.dist && ((o = _).properties.index = u), s += l
						}
					}), o
				}

				function eR(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					var r, i = n.final;
					if (!t) throw Error("start point is required");
					if (!e) throw Error("end point is required");
					return (r = i ? eT(X(e), X(t)) : eT(X(t), X(e))) > 180 ? -(360 - r) : r
				}

				function eT(t, e) {
					var n = x(t[1]),
						r = x(e[1]),
						i = x(e[0] - t[0]);
					return i > Math.PI && (i -= 2 * Math.PI), i < -Math.PI && (i += 2 * Math.PI), (v(Math.atan2(i, Math.log(Math.tan(r / 2 + Math.PI / 4) / Math.tan(n / 2 + Math.PI / 4)))) + 360) % 360
				}

				function eD(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					var r, i, o, s, a, u, h, c, l = n.units;
					if (!t) throw Error("from point is required");
					if (!e) throw Error("to point is required");
					var p = X(t),
						f = X(e);
					return f[0] += f[0] - p[0] > 180 ? -360 : p[0] - f[0] > 180 ? 360 : 0, E((i = r = void 0 === r ? id : Number(r), o = p[1] * Math.PI / 180, a = (s = f[1] * Math.PI / 180) - o, (u = Math.abs(f[0] - p[0]) * Math.PI / 180) > Math.PI && (u -= 2 * Math.PI), c = Math.abs(h = Math.log(Math.tan(s / 2 + Math.PI / 4) / Math.tan(o / 2 + Math.PI / 4))) > 1e-11 ? a / h : Math.cos(o), Math.sqrt(a * a + c * c * u * u) * i), "meters", l)
				}

				function eA(t, e) {
					return eq(t, "mercator", e)
				}

				function eF(t, e) {
					return eq(t, "wgs84", e)
				}

				function eq(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					var r = n.mutate;
					if (!t) throw Error("geojson is required");
					return Array.isArray(t) && I(t[0]) ? t = "mercator" === e ? eG(t) : eB(t) : (!0 !== r && (t = tT(t)), S(t, function(t) {
						var n = "mercator" === e ? eG(t) : eB(t);
						t[0] = n[0], t[1] = n[1]
					})), t
				}

				function eG(t) {
					var e, n = Math.PI / 180,
						r = [6378137 * (180 >= Math.abs(t[0]) ? t[0] : t[0] - 360 * ((e = t[0]) < 0 ? -1 : e > 0 ? 1 : 0)) * n, 6378137 * Math.log(Math.tan(.25 * Math.PI + .5 * t[1] * n))];
					return r[0] > 20037508.342789244 && (r[0] = 20037508.342789244), r[0] < -20037508.342789244 && (r[0] = -20037508.342789244), r[1] > 20037508.342789244 && (r[1] = 20037508.342789244), r[1] < -20037508.342789244 && (r[1] = -20037508.342789244), r
				}

				function eB(t) {
					var e = 180 / Math.PI;
					return [t[0] * e / 6378137, (.5 * Math.PI - 2 * Math.atan(Math.exp(-t[1] / 6378137))) * e]
				}

				function ek(t, n, i) {
					if (!N(i = i || {})) throw Error("options is invalid");
					if (!t) throw Error("pt is required");
					if (Array.isArray(t) ? t = r(t) : "Point" === t.type ? t = e(t) : H(t, "Point", "point"), !n) throw Error("line is required");
					Array.isArray(n) ? n = a(n) : "LineString" === n.type ? n = e(n) : H(n, "LineString", "line");
					var o = 1 / 0,
						s = t.geometry.coordinates;
					return G(n, function(t) {
						var e = function(t, e, n, i) {
							var o, s, a, u, h, c, l, p, f, g, d, y, _, v, E, b = i.mercator,
								I = !0 !== b ? tR(e, t, i) : ez(e, t, i),
								N = m(!0 !== b ? t1(e, t) : eR(e, t)),
								w = m(!0 !== b ? t1(e, n) : eR(e, n)),
								C = Math.abs(N - w);
							if (C > 90) return I;
							var S = Math.abs(m(!0 !== b ? t1(n, t) : eR(n, t)) - (w + 180) % 360);
							return S > 180 && (S = Math.abs(S - 360)), S > 90 ? !0 !== b ? tR(t, n, i) : ez(t, n, i) : !0 !== b ? I * Math.sin(x(C)) : (o = 0, (Math.abs(e[0]) >= 180 || Math.abs(n[0]) >= 180 || Math.abs(t[0]) >= 180) && (o = e[0] > 0 || n[0] > 0 || t[0] > 0 ? -180 : 180), d = r(t), y = eA([e[0] + o, e[1]]), _ = eA([n[0] + o, n[1]]), v = eA([t[0] + o, t[1]]), E = eF((s = y[0], a = y[1], u = _[0], h = _[1], c = v[0], l = v[1], p = u - s, f = h - a, g = ((c - s) * p + (l - a) * f) / (p * p + f * f), [s + g * p, a + g * f])), 0 !== o && (E[0] -= o), eD(d, E, i))
						}(s, t.geometry.coordinates[0], t.geometry.coordinates[1], i);
						o > e && (o = e)
					}), o
				}

				function ez(t, e, n) {
					var r = n.units,
						i = 0;
					Math.abs(t[0]) >= 180 && (i = t[0] > 0 ? -180 : 180), Math.abs(e[0]) >= 180 && (i = e[0] > 0 ? -180 : 180);
					var o = eA([t[0] + i, t[1]]),
						s = eA([e[0] + i, e[1]]),
						a = function(t) {
							return t * t
						};
					return E(Math.sqrt(a(o[0] - s[0]) + a(o[1] - s[1])), "meters", r)
				}

				function ej(t) {
					for (var n = "FeatureCollection" !== t.type ? "Feature" !== t.type ? h([e(t)]) : h([t]) : t, i = t2(n), o = !1, s = 0; !o && s < n.features.length;) {
						var a, u = n.features[s].geometry,
							c = !1;
						if ("Point" === u.type) i.geometry.coordinates[0] === u.coordinates[0] && i.geometry.coordinates[1] === u.coordinates[1] && (o = !0);
						else if ("MultiPoint" === u.type) {
							var l = !1;
							for (a = 0; !l && a < u.coordinates.length;) i.geometry.coordinates[0] === u.coordinates[a][0] && i.geometry.coordinates[1] === u.coordinates[a][1] && (o = !0, l = !0), a++
						} else if ("LineString" === u.type)
							for (a = 0; !c && a < u.coordinates.length - 1;) eX(i.geometry.coordinates[0], i.geometry.coordinates[1], u.coordinates[a][0], u.coordinates[a][1], u.coordinates[a + 1][0], u.coordinates[a + 1][1]) && (c = !0, o = !0), a++;
						else if ("MultiLineString" === u.type)
							for (var p = 0; p < u.coordinates.length;) {
								c = !1, a = 0;
								for (var f = u.coordinates[p]; !c && a < f.length - 1;) eX(i.geometry.coordinates[0], i.geometry.coordinates[1], f[a][0], f[a][1], f[a + 1][0], f[a + 1][1]) && (c = !0, o = !0), a++;
								p++
							} else "Polygon" !== u.type && "MultiPolygon" !== u.type || tC(i, u) && (o = !0);
						s++
					}
					if (o) return i;
					var g = h([]);
					for (s = 0; s < n.features.length; s++) g.features = g.features.concat(t4(n.features[s]).features);
					return r(el(i, g).geometry.coordinates)
				}

				function eX(t, e, n, r, i, o) {
					return Math.sqrt((i - n) * (i - n) + (o - r) * (o - r)) === Math.sqrt((t - n) * (t - n) + (e - r) * (e - r)) + Math.sqrt((i - t) * (i - t) + (o - e) * (o - e))
				}

				function eU(t) {
					return A(t, function(t, e) {
						return t + function t(e) {
							var n, r = 0;
							switch (e.type) {
								case "Polygon":
									return eY(e.coordinates);
								case "MultiPolygon":
									for (n = 0; n < e.coordinates.length; n++) r += eY(e.coordinates[n]);
									return r;
								case "Point":
								case "MultiPoint":
								case "LineString":
								case "MultiLineString":
									return 0;
								case "GeometryCollection":
									for (n = 0; n < e.geometries.length; n++) r += t(e.geometries[n]);
									return r
							}
						}(e)
					}, 0)
				}

				function eY(t) {
					var e = 0;
					if (t && t.length > 0) {
						e += Math.abs(eV(t[0]));
						for (var n = 1; n < t.length; n++) e -= Math.abs(eV(t[n]))
					}
					return e
				}

				function eV(t) {
					var e, n, r, i, o, s, a = 0,
						u = t.length;
					if (u > 2) {
						for (s = 0; s < u; s++) s === u - 2 ? (r = u - 2, i = u - 1, o = 0) : s === u - 1 ? (r = u - 1, i = 0, o = 1) : (r = s, i = s + 1, o = s + 2), e = t[r], n = t[i], a += (eH(t[o][0]) - eH(e[0])) * Math.sin(eH(n[1]));
						a = a * i2 * i2 / 2
					}
					return a
				}

				function eH(t) {
					return t * Math.PI / 180
				}

				function eW(t, e) {
					if (!N(e = e || {})) throw Error("options is invalid");
					if (!t) throw Error("geojson is required");
					return B(t, function(t, n) {
						var r = n.geometry.coordinates;
						return t + tR(r[0], r[1], e)
					}, 0)
				}

				function eJ(t, e, n, r) {
					if (!N(r = r || {})) throw Error("options is invalid");
					var i, o = [];
					if ("Feature" === t.type) i = t.geometry.coordinates;
					else {
						if ("LineString" !== t.type) throw Error("input must be a LineString Feature or Geometry");
						i = t.coordinates
					}
					for (var s, u, h, c = 0, l = 0; l < i.length && !(e >= c && l === i.length - 1); l++) {
						if (c > e && 0 === o.length) {
							if (!(s = e - c)) return o.push(i[l]), a(o);
							u = t1(i[l], i[l - 1]) - 180, h = t$(i[l], s, u, r), o.push(h.geometry.coordinates)
						}
						if (c >= n) return (s = n - c) ? (u = t1(i[l], i[l - 1]) - 180, h = t$(i[l], s, u, r), o.push(h.geometry.coordinates)) : o.push(i[l]), a(o);
						if (c >= e && o.push(i[l]), l === i.length - 1) return a(o);
						c += tR(i[l], i[l + 1], r)
					}
					return a(i[i.length - 1])
				}

				function eZ(t, e, n) {
					var r = (n = n || {}).ignoreEndVertices;
					if (!N(n)) throw Error("invalid options");
					if (!t) throw Error("pt is required");
					if (!e) throw Error("line is required");
					for (var i = X(t), o = U(e), s = 0; s < o.length - 1; s++) {
						var a = !1;
						if (r && (0 === s && (a = "start"), s === o.length - 2 && (a = "end"), 0 === s && s + 1 === o.length - 1 && (a = "both")), function(t, e, n, r) {
								var i = n[0],
									o = n[1],
									s = t[0],
									a = t[1],
									u = e[0],
									h = e[1],
									c = n[0] - s,
									l = n[1] - a,
									p = u - s,
									f = h - a;
								return c * f - l * p == 0 && (r ? "start" === r ? Math.abs(p) >= Math.abs(f) ? p > 0 ? s < i && i <= u : u <= i && i < s : f > 0 ? a < o && o <= h : h <= o && o < a : "end" === r ? Math.abs(p) >= Math.abs(f) ? p > 0 ? s <= i && i < u : u < i && i <= s : f > 0 ? a <= o && o < h : h < o && o <= a : "both" === r ? Math.abs(p) >= Math.abs(f) ? p > 0 ? s < i && i < u : u < i && i < s : f > 0 ? a < o && o < h : h < o && o < a : void 0 : Math.abs(p) >= Math.abs(f) ? p > 0 ? s <= i && i <= u : u <= i && i <= s : f > 0 ? a <= o && o <= h : h <= o && o <= a)
							}(o[s], o[s + 1], i, a)) return !0
					}
					return !1
				}

				function eK(t, e) {
					var n = K(t),
						r = K(e),
						i = J(t),
						o = J(e);
					switch (n) {
						case "Point":
							switch (r) {
								case "MultiPoint":
									return function(t, e) {
										var n, r = !1;
										for (n = 0; n < e.coordinates.length; n++)
											if (e$(e.coordinates[n], t.coordinates)) {
												r = !0;
												break
											} return r
									}(i, o);
								case "LineString":
									return eZ(i, o, {
										ignoreEndVertices: !0
									});
								case "Polygon":
									return tC(i, o, {
										ignoreBoundary: !0
									});
								default:
									throw Error("feature2 " + r + " geometry not supported")
							}
						case "MultiPoint":
							switch (r) {
								case "MultiPoint":
									return function(t, e) {
										for (var n = 0; n < t.coordinates.length; n++) {
											for (var r = !1, i = 0; i < e.coordinates.length; i++) e$(t.coordinates[n], e.coordinates[i]) && (r = !0);
											if (!r) return !1
										}
										return !0
									}(i, o);
								case "LineString":
									return function(t, e) {
										for (var n = !1, r = 0; r < t.coordinates.length; r++) {
											if (!eZ(t.coordinates[r], e)) return !1;
											n || (n = eZ(t.coordinates[r], e, {
												ignoreEndVertices: !0
											}))
										}
										return n
									}(i, o);
								case "Polygon":
									return function(t, e) {
										for (var n = !0, r = 0; r < t.coordinates.length; r++) {
											var i = tC(t.coordinates[1], e);
											if (!i) {
												n = !1;
												break
											}
											i = tC(t.coordinates[1], e, {
												ignoreBoundary: !0
											})
										}
										return n && i
									}(i, o);
								default:
									throw Error("feature2 " + r + " geometry not supported")
							}
						case "LineString":
							switch (r) {
								case "LineString":
									return function(t, e) {
										for (var n = 0; n < t.coordinates.length; n++)
											if (!eZ(t.coordinates[n], e)) return !1;
										return !0
									}(i, o);
								case "Polygon":
									return function(t, e) {
										if (!eQ(j(e), j(t))) return !1;
										for (var n, r, i = !1, o = 0; o < t.coordinates.length - 1; o++) {
											if (!tC(t.coordinates[o], e)) return !1;
											i || (i = tC(t.coordinates[o], e, {
												ignoreBoundary: !0
											})), i || (i = tC((n = t.coordinates[o], r = t.coordinates[o + 1], [(n[0] + r[0]) / 2, (n[1] + r[1]) / 2]), e, {
												ignoreBoundary: !0
											}))
										}
										return i
									}(i, o);
								default:
									throw Error("feature2 " + r + " geometry not supported")
							}
						case "Polygon":
							if ("Polygon" === r) return function(t, e) {
								var n = j(t);
								if (!eQ(j(e), n)) return !1;
								for (var r = 0; r < t.coordinates[0].length; r++)
									if (!tC(t.coordinates[0][r], e)) return !1;
								return !0
							}(i, o);
							throw Error("feature2 " + r + " geometry not supported");
						default:
							throw Error("feature1 " + n + " geometry not supported")
					}
				}

				function eQ(t, e) {
					return !(t[0] > e[0]) && !(t[2] < e[2]) && !(t[1] > e[1]) && !(t[3] < e[3])
				}

				function e$(t, e) {
					return t[0] === e[0] && t[1] === e[1]
				}

				function e0(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					var i = n.mask,
						o = n.properties,
						s = [];
					if (null == e) throw Error("cellSide is required");
					if (!I(e)) throw Error("cellSide is invalid");
					if (!t) throw Error("bbox is required");
					if (!Array.isArray(t)) throw Error("bbox must be array");
					if (4 !== t.length) throw Error("bbox must contain 4 numbers");
					if (i && -1 === ["Polygon", "MultiPolygon"].indexOf(K(i))) throw Error("options.mask must be a (Multi)Polygon");
					for (var a = t[0], u = t[1], c = t[2], l = t[3], p = e / tR([a, u], [c, u], n) * (c - a), f = e / tR([a, u], [a, l], n) * (l - u), g = c - a, d = l - u, y = Math.floor(g / p), _ = (d - Math.floor(d / f) * f) / 2, m = a + (g - y * p) / 2; m <= c;) {
						for (var v = u + _; v <= l;) {
							var x = r([m, v], o);
							i ? eK(x, i) && s.push(x) : s.push(x), v += f
						}
						m += p
					}
					return h(s)
				}

				function e1(t, e) {
					if (!N(e = e || {})) throw Error("options is invalid");
					var n = e.precision,
						r = e.coordinates,
						i = e.mutate;
					if (n = null == n || isNaN(n) ? 6 : n, r = null == r || isNaN(r) ? 3 : r, !t) throw Error("<geojson> is required");
					if ("number" != typeof n) throw Error("<precision> must be a number");
					if ("number" != typeof r) throw Error("<coordinates> must be a number");
					!1 !== i && void 0 !== i || (t = JSON.parse(JSON.stringify(t)));
					var o = Math.pow(10, n);
					return S(t, function(t) {
						! function(t, e, n) {
							t.length > n && t.splice(n, t.length);
							for (var r = 0; r < t.length; r++) t[r] = Math.round(t[r] * e) / e
						}(t, o, r)
					}), t
				}

				function e2(t, e) {
					if (!t || !e || t.length !== e.length) return !1;
					for (var n = 0, r = t.length; n < r; n++)
						if (t[n] instanceof Array && e[n] instanceof Array) {
							if (!e2(t[n], e[n])) return !1
						} else if (t[n] !== e[n]) return !1;
					return !0
				}

				function e3(t, e) {
					if (void 0 === e && (e = !0), 3 != t.length) throw Error("This function requires an array of three points [x,y]");
					return (t[1][0] - t[0][0]) * (t[2][1] - t[0][1]) - (t[1][1] - t[0][1]) * (t[2][0] - t[0][0]) >= 0 == e
				}

				function e4(t, e) {
					if (!t || !e || t.length != e.length) return !1;
					for (var n = 0, r = t.length; n < r; n++)
						if (t[n] instanceof Array && e[n] instanceof Array) {
							if (!e4(t[n], e[n])) return !1
						} else if (t[n] != e[n]) return !1;
					return !0
				}

				function e6(t, e) {
					var n = [],
						r = ew();
					return F(e, function(e) {
						if (n.forEach(function(t, e) {
								t.id = e
							}), n.length) {
							var i = r.search(e);
							if (i.features.length) {
								var o = e5(e, i);
								n = n.filter(function(t) {
									return t.id !== o.id
								}), r.remove(o), O(e8(o, e), function(t) {
									n.push(t), r.insert(t)
								})
							}
						} else(n = e8(t, e).features).forEach(function(t) {
							t.bbox || (t.bbox = tQ(j(t)))
						}), r.load(h(n))
					}), h(n)
				}

				function e8(t, e) {
					var n = [],
						r = U(t)[0],
						i = U(t)[t.geometry.coordinates.length - 1];
					if (e9(r, X(e)) || e9(i, X(e))) return h([t]);
					var o = ew(),
						s = eM(t);
					o.load(s);
					var u = o.search(e);
					if (!u.features.length) return h([t]);
					var c = e5(e, u),
						l = R(s, function(t, r, i) {
							var o = U(r)[1],
								s = X(e);
							return i === c.id ? (t.push(s), n.push(a(t)), e9(s, o) ? [s] : [s, o]) : (t.push(o), t)
						}, [r]);
					return l.length > 1 && n.push(a(l)), h(n)
				}

				function e5(t, e) {
					if (!e.features.length) throw Error("lines must contain features");
					if (1 === e.features.length) return e.features[0];
					var n, r = 1 / 0;
					return O(e, function(e) {
						var i = eO(e, t).properties.dist;
						i < r && (n = e, r = i)
					}), n
				}

				function e9(t, e) {
					return t[0] === e[0] && t[1] === e[1]
				}

				function e7(t, e, n, r, i) {
					if (!N(i = i || {})) throw Error("options is invalid");
					var o = i.steps,
						s = i.units;
					if (!t) throw Error("center is required");
					if (!e) throw Error("radius is required");
					if (null == n) throw Error("bearing1 is required");
					if (null == r) throw Error("bearing2 is required");
					if ("object" != typeof i) throw Error("options must be an object");
					o = o || 64;
					var u = nt(n),
						h = nt(r),
						c = t.properties;
					if (u === h) return a(t0(t, e, i).geometry.coordinates[0], c);
					for (var l = u < h ? h : h + 360, p = u, f = [], g = 0; p < l;) f.push(t$(t, e, p, s).geometry.coordinates), p = u + 360 * ++g / o;
					return p > l && f.push(t$(t, e, l, s).geometry.coordinates), a(f, c)
				}

				function nt(t) {
					var e = t % 360;
					return e < 0 && (e += 360), e
				}

				function ne(t, e) {
					if (!N(e = e || {})) throw Error("options is invalid");
					var n = e.properties,
						r = K(t),
						i = U(t);
					if (n = n || t.properties || {}, !i.length) throw Error("polygon must contain coordinates");
					switch (r) {
						case "Polygon":
							return nn(i, n);
						case "MultiPolygon":
							var o = [];
							return i.forEach(function(t) {
								o.push(nn(t, n))
							}), h(o);
						default:
							throw Error("geom " + r + " not supported")
					}
				}

				function nn(t, e) {
					return t.length > 1 ? c(t, e) : a(t[0], e)
				}

				function nr(t, e) {
					if (!N(e = e || {})) throw Error("options is invalid");
					var n = e.properties,
						r = e.autoComplete,
						i = e.orderCoords;
					if (!t) throw Error("lines is required");
					switch (r = void 0 === r || r, i = void 0 === i || i, K(t)) {
						case "FeatureCollection":
						case "GeometryCollection":
							var o = [];
							return (t.features ? t.features : t.geometries).forEach(function(t) {
								o.push(U(ni(t, {}, r, i)))
							}), p(o, n)
					}
					return ni(t, n, r, i)
				}

				function ni(t, e, n, r) {
					e = e || t.properties || {};
					var i = U(t),
						s = K(t);
					if (!i.length) throw Error("line must contain coordinates");
					switch (s) {
						case "LineString":
							return n && (i = no(i)), o([i], e);
						case "MultiLineString":
							var u = [],
								h = 0;
							return i.forEach(function(t) {
								if (n && (t = no(t)), r) {
									var e, i, o, s = (i = (e = j(a(t)))[0], o = e[1], Math.abs(i - e[2]) * Math.abs(o - e[3]));
									s > h ? (u.unshift(t), h = s) : u.push(t)
								} else u.push(t)
							}), o(u, e);
						default:
							throw Error("geometry type " + s + " is not supported")
					}
				}

				function no(t) {
					var e = t[0],
						n = e[0],
						r = e[1],
						i = t[t.length - 1],
						o = i[0],
						s = i[1];
					return n === o && r === s || t.push(e), t
				}

				function ns(t, e, n) {
					var r, i, o, s, a, u = t.length,
						h = nu(t[0], e),
						c = [];
					for (n || (n = []), r = 1; r < u; r++) {
						for (i = t[r - 1], s = a = nu(o = t[r], e);;) {
							if (!(h | s)) {
								c.push(i), s !== a ? (c.push(o), r < u - 1 && (n.push(c), c = [])) : r === u - 1 && c.push(o);
								break
							}
							if (h & s) break;
							h ? h = nu(i = na(i, o, h, e), e) : s = nu(o = na(i, o, s, e), e)
						}
						h = a
					}
					return c.length && n.push(c), n
				}

				function na(t, e, n, r) {
					return 8 & n ? [t[0] + (e[0] - t[0]) * (r[3] - t[1]) / (e[1] - t[1]), r[3]] : 4 & n ? [t[0] + (e[0] - t[0]) * (r[1] - t[1]) / (e[1] - t[1]), r[1]] : 2 & n ? [r[2], t[1] + (e[1] - t[1]) * (r[2] - t[0]) / (e[0] - t[0])] : 1 & n ? [r[0], t[1] + (e[1] - t[1]) * (r[0] - t[0]) / (e[0] - t[0])] : null
				}

				function nu(t, e) {
					var n = 0;
					return t[0] < e[0] ? n |= 1 : t[0] > e[2] && (n |= 2), t[1] < e[1] ? n |= 4 : t[1] > e[3] && (n |= 8), n
				}

				function nh(t, e) {
					for (var n = [], r = 0; r < t.length; r++) {
						var i = or.polygon(t[r], e);
						i.length > 0 && (i[0][0] === i[i.length - 1][0] && i[0][1] === i[i.length - 1][1] || i.push(i[0]), i.length >= 4 && n.push(i))
					}
					return n
				}

				function nc(t) {
					return "[object Arguments]" === Object.prototype.toString.call(t)
				}

				function nl(t, e, n) {
					return n || (n = {}), t === e || (t instanceof Date && e instanceof Date ? t.getTime() === e.getTime() : t && e && ("object" == typeof t || "object" == typeof e) ? function(t, e, n) {
						if (null == t || null == e || t.prototype !== e.prototype) return !1;
						if (nc(t)) return !!nc(e) && nl(t = oi.call(t), e = oi.call(e), n);
						if (np(t)) {
							if (!np(e) || t.length !== e.length) return !1;
							for (r = 0; r < t.length; r++)
								if (t[r] !== e[r]) return !1;
							return !0
						}
						try {
							var r, i, o, s, a = Object.keys(t),
								u = Object.keys(e)
						} catch (t) {
							return !1
						}
						if (a.length !== u.length) return !1;
						for (a.sort(), u.sort(), r = a.length - 1; r >= 0; r--)
							if (a[r] !== u[r]) return !1;
						for (r = a.length - 1; r >= 0; r--)
							if (!nl(t[i = a[r]], e[i], n)) return !1;
						return typeof t == typeof e
					}(t, e, n) : (n.strict, t === e))
				}

				function np(t) {
					return !(!t || "object" != typeof t || "number" != typeof t.length) && "function" == typeof t.copy && "function" == typeof t.slice && !(t.length > 0 && "number" != typeof t[0])
				}

				function nf(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					var r, i = n.tolerance || 0,
						o = [],
						s = ew();
					return s.load(eM(t)), G(e, function(t) {
						var e = !1;
						O(s.search(t), function(n) {
							if (!1 === e) {
								var o = U(t).sort(),
									s = U(n).sort();
								nl(o, s) ? (e = !0, r = r ? ng(r, t) : t) : (0 === i ? eZ(o[0], n) && eZ(o[1], n) : eO(n, o[0]).properties.dist <= i && eO(n, o[1]).properties.dist <= i) ? (e = !0, r = r ? ng(r, t) : t) : (0 === i ? eZ(s[0], t) && eZ(s[1], t) : eO(t, s[0]).properties.dist <= i && eO(t, s[1]).properties.dist <= i) && (r = r ? ng(r, n) : n)
							}
						}), !1 === e && r && (o.push(r), r = void 0)
					}), r && o.push(r), h(o)
				}

				function ng(t, e) {
					var n = U(e),
						r = U(t),
						i = r[0],
						o = r[r.length - 1],
						s = t.geometry.coordinates;
					return nl(n[0], i) ? s.unshift(n[1]) : nl(n[0], o) ? s.push(n[1]) : nl(n[1], i) ? s.unshift(n[0]) : nl(n[1], o) && s.push(n[0]), t
				}

				function nd(t) {
					var e = t % 360;
					return e < 0 && (e += 360), e
				}

				function ny(t, e, n, i) {
					if (!N(i = i || {})) throw Error("options is invalid");
					var o, s, a, u, h, c, l, p, f = i.units,
						g = i.properties;
					if (!t) throw Error("origin is required");
					if (null == e) throw Error("distance is required");
					if (null == n) throw Error("bearing is required");
					if (!(e >= 0)) throw Error("distance must be greater than 0");
					var d = E(e, f, "meters"),
						y = X(t),
						_ = (s = d / (o = void 0 === o ? id : Number(o)), a = y[0] * Math.PI / 180, Math.abs(l = (u = x(y[1])) + (c = s * Math.cos(h = x(n)))) > Math.PI / 2 && (l = l > 0 ? Math.PI - l : -Math.PI - l), [(180 * (a + s * Math.sin(h) / (Math.abs(p = Math.log(Math.tan(l / 2 + Math.PI / 4) / Math.tan(u / 2 + Math.PI / 4))) > 1e-11 ? c / p : Math.cos(u))) / Math.PI + 540) % 360 - 180, 180 * l / Math.PI]);
					return _[0] += _[0] - y[0] > 180 ? -360 : y[0] - _[0] > 180 ? 360 : 0, r(_, g)
				}

				function n_(t, e, n, r, i, o) {
					for (var s = 0; s < t.length; s++) {
						var a = t[s],
							u = t[s + 1];
						s === t.length - 1 && (u = t[0]), r = nm(a, u, e), n <= 0 && r > 0 ? 0 > nm(e, a, i) || (i = a) : n > 0 && r <= 0 && (nm(e, a, o) > 0 || (o = a)), n = r
					}
					return [i, o]
				}

				function nm(t, e, n) {
					return (e[0] - t[0]) * (n[1] - t[1]) - (n[0] - t[0]) * (e[1] - t[1])
				}

				function nv(t) {
					if (!t) throw Error("line is required");
					var e = t.geometry ? t.geometry.type : t.type;
					if (!Array.isArray(t) && "LineString" !== e) throw Error("geometry must be a LineString");
					for (var n, r, i = U(t), o = 0, s = 1; s < i.length;) n = r || i[0], o += ((r = i[s])[0] - n[0]) * (r[1] + n[1]), s++;
					return o > 0
				}

				function nx(t, e) {
					switch ("Feature" === t.type ? t.geometry.type : t.type) {
						case "GeometryCollection":
							return D(t, function(t) {
								nx(t, e)
							}), t;
						case "LineString":
							return nE(U(t), e), t;
						case "Polygon":
							return nb(U(t), e), t;
						case "MultiLineString":
							return U(t).forEach(function(t) {
								nE(t, e)
							}), t;
						case "MultiPolygon":
							return U(t).forEach(function(t) {
								nb(t, e)
							}), t;
						case "Point":
						case "MultiPoint":
							return t
					}
				}

				function nE(t, e) {
					nv(t) === e && t.reverse()
				}

				function nb(t, e) {
					nv(t[0]) !== e && t[0].reverse();
					for (var n = 1; n < t.length; n++) nv(t[n]) === e && t[n].reverse()
				}

				function nI(t) {
					return t.constructor.toString().indexOf("Array") > -1
				}

				function nN(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					var r = n.pivot,
						i = n.mutate;
					if (!t) throw Error("geojson is required");
					if (null == e || isNaN(e)) throw Error("angle is required");
					return 0 === e || (r || (r = t3(t)), !1 !== i && void 0 !== i || (t = tT(t)), S(t, function(t) {
						var n = eR(r, t) + e,
							i = eD(r, t),
							o = U(ny(r, i, n));
						t[0] = o[0], t[1] = o[1]
					})), t
				}

				function nw(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					var r = n.origin,
						i = n.mutate;
					if (!t) throw Error("geojson required");
					if ("number" != typeof e || 0 === e) throw Error("invalid factor");
					var o = Array.isArray(r) || "object" == typeof r;
					return !0 !== i && (t = tT(t)), "FeatureCollection" !== t.type || o ? nC(t, e, r) : (O(t, function(n, i) {
						t.features[i] = nC(n, e, r)
					}), t)
				}

				function nC(t, e, n) {
					var i = "Point" === K(t);
					return n = function(t, e) {
						if (null != e || (e = "centroid"), Array.isArray(e) || "object" == typeof e) return X(e);
						var n = t.bbox ? t.bbox : j(t),
							i = n[0],
							o = n[1],
							s = n[2],
							a = n[3];
						switch (e) {
							case "sw":
							case "southwest":
							case "westsouth":
							case "bottomleft":
								return r([i, o]);
							case "se":
							case "southeast":
							case "eastsouth":
							case "bottomright":
								return r([s, o]);
							case "nw":
							case "northwest":
							case "westnorth":
							case "topleft":
								return r([i, a]);
							case "ne":
							case "northeast":
							case "eastnorth":
							case "topright":
								return r([s, a]);
							case "center":
								return t2(t);
							case void 0:
							case null:
							case "centroid":
								return t3(t);
							default:
								throw Error("invalid origin")
						}
					}(t, n), 1 === e || i || S(t, function(t) {
						var r = eD(n, t),
							i = eR(n, t),
							o = U(ny(n, r * e, i));
						t[0] = o[0], t[1] = o[1], 3 === t.length && (t[2] *= e)
					}), t
				}

				function nS(t) {
					var e = t[0],
						n = t[1];
					return [n[0] - e[0], n[1] - e[1]]
				}

				function nM(t, e) {
					return t[0] * e[1] - e[0] * t[1]
				}

				function nL(t, e, n) {
					var r = [],
						i = _(e, n),
						o = U(t),
						s = [];
					return o.forEach(function(t, e) {
						if (e !== o.length - 1) {
							var n = (a = o[e + 1], u = Math.sqrt((t[0] - a[0]) * (t[0] - a[0]) + (t[1] - a[1]) * (t[1] - a[1])), h = t[0] + i * (a[1] - t[1]) / u, c = a[0] + i * (a[1] - t[1]) / u, [
								[h, t[1] + i * (t[0] - a[0]) / u],
								[c, a[1] + i * (t[0] - a[0]) / u]
							]);
							if (r.push(n), e > 0) {
								var a, u, h, c, l, p, f, g, d, y, _, m = r[e - 1],
									v = 0 !== nM(nS(n), nS(m)) && (l = n[0], p = nS(n), f = m[0], d = nM(p, g = nS(m)), _ = [(y = nM([f[0] - l[0], f[1] - l[1]], g) / d) * p[0], y * p[1]], [l[0] + _[0], l[1] + _[1]]);
								!1 !== v && (m[1] = v, n[0] = v), s.push(m[0]), e === o.length - 2 && (s.push(n[0]), s.push(n[1]))
							}
							2 === o.length && (s.push(n[0]), s.push(n[1]))
						}
					}), a(s, t.properties)
				}

				function nP(t, e, n) {
					var r = e[0] - t[0],
						i = e[1] - t[1],
						o = n[0] - e[0];
					return Math.sign(r * (n[1] - e[1]) - o * i)
				}

				function nO(t, e) {
					return e.geometry.coordinates[0].every(function(e) {
						return tC(r(e), t)
					})
				}

				function nR(t, e) {
					for (var n = 0; n < t.coordinates.length - 1; n++)
						if (function(t, e, n) {
								var r = n[0] - t[0],
									i = n[1] - t[1],
									o = e[0] - t[0],
									s = e[1] - t[1];
								return r * s - i * o == 0 && (Math.abs(o) >= Math.abs(s) ? o > 0 ? t[0] <= n[0] && n[0] <= e[0] : e[0] <= n[0] && n[0] <= t[0] : s > 0 ? t[1] <= n[1] && n[1] <= e[1] : e[1] <= n[1] && n[1] <= t[1])
							}(t.coordinates[n], t.coordinates[n + 1], e.coordinates)) return !0;
					return !1
				}

				function nT(t, e) {
					return eL(e, ne(t)).features.length > 0
				}

				function nD(t, e) {
					return !(t[0] > e[0]) && !(t[2] < e[2]) && !(t[1] > e[1]) && !(t[3] < e[3])
				}

				function nA(t, e) {
					return t[0] === e[0] && t[1] === e[1]
				}

				function nF(t, e) {
					for (var n = !1, r = !1, i = t.coordinates.length, o = 0; o < i && !n && !r;) {
						for (var s = 0; s < e.coordinates.length - 1; s++) {
							var a = !0;
							0 !== s && s !== e.coordinates.length - 2 || (a = !1), nB(e.coordinates[s], e.coordinates[s + 1], t.coordinates[o], a) ? n = !0 : r = !0
						}
						o++
					}
					return n && r
				}

				function nq(t, e) {
					return eL(t, ne(e)).features.length > 0
				}

				function nG(t, e) {
					for (var n = !1, i = !1, o = t.coordinates[0].length, s = 0; s < o && n && i;) tC(r(t.coordinates[0][s]), e) ? n = !0 : i = !0, s++;
					return i && i
				}

				function nB(t, e, n, r) {
					var i = n[0] - t[0],
						o = n[1] - t[1],
						s = e[0] - t[0],
						a = e[1] - t[1];
					return 0 == i * a - o * s && (r ? Math.abs(s) >= Math.abs(a) ? s > 0 ? t[0] <= n[0] && n[0] <= e[0] : e[0] <= n[0] && n[0] <= t[0] : a > 0 ? t[1] <= n[1] && n[1] <= e[1] : e[1] <= n[1] && n[1] <= t[1] : Math.abs(s) >= Math.abs(a) ? s > 0 ? t[0] < n[0] && n[0] < e[0] : e[0] < n[0] && n[0] < t[0] : a > 0 ? t[1] < n[1] && n[1] < e[1] : e[1] < n[1] && n[1] < t[1])
				}

				function nk(t) {
					return t.coordinates.map(function(e) {
						return {
							type: t.type.replace("Multi", ""),
							coordinates: e
						}
					})
				}

				function nz(t, e) {
					return t.hasOwnProperty("coordinates") ? t.coordinates.length === e.coordinates.length : t.length === e.length
				}

				function nj(t, e) {
					return o1(t, e, {
						strict: !0
					})
				}

				function nX(t, e) {
					if (!t) throw Error("feature1 is required");
					if (!e) throw Error("feature2 is required");
					var n = K(t);
					if (n !== K(e)) throw Error("features must be of the same type");
					if ("Point" === n) throw Error("Point geometry not supported");
					if (new o3({
							precision: 6
						}).compare(t, e)) return !1;
					var r = 0;
					switch (n) {
						case "MultiPoint":
							var i = T(t),
								o = T(e);
							i.forEach(function(t) {
								o.forEach(function(e) {
									t[0] === e[0] && t[1] === e[1] && r++
								})
							});
							break;
						case "LineString":
						case "MultiLineString":
							G(t, function(t) {
								G(e, function(e) {
									nf(t, e).features.length && r++
								})
							});
							break;
						case "Polygon":
						case "MultiPolygon":
							G(t, function(t) {
								G(e, function(e) {
									eL(t, e).features.length && r++
								})
							})
					}
					return r > 0
				}

				function nU(t, e, n) {
					n = n || [];
					for (var r = 0; r < t; r++) n[r] = e;
					return n
				}

				function nY(t, e) {
					if (t.geometry && t.geometry.type) return t.geometry.type;
					if (t.type) return t.type;
					throw Error("Invalid GeoJSON object for " + e)
				}

				function nV(t) {
					for (var e = t, n = []; e.parent;) n.unshift(e), e = e.parent;
					return n
				}

				function nH(t, e) {
					e = e || {}, this.nodes = [], this.diagonal = !!e.diagonal, this.grid = [];
					for (var n = 0; n < t.length; n++) {
						this.grid[n] = [];
						for (var r = 0, i = t[n]; r < i.length; r++) {
							var o = new nW(n, r, i[r]);
							this.grid[n][r] = o, this.nodes.push(o)
						}
					}
					this.init()
				}

				function nW(t, e, n) {
					this.x = t, this.y = e, this.weight = n
				}

				function nJ(t) {
					this.content = [], this.scoreFunction = t
				}

				function nZ(t) {
					return t[0]
				}

				function nK(t) {
					return t[1]
				}

				function nQ() {
					this._ = null
				}

				function n$(t) {
					t.U = t.C = t.L = t.R = t.P = t.N = null
				}

				function n0(t, e) {
					var n = e.R,
						r = e.U;
					r ? r.L === e ? r.L = n : r.R = n : t._ = n, n.U = r, e.U = n, e.R = n.L, e.R && (e.R.U = e), n.L = e
				}

				function n1(t, e) {
					var n = e.L,
						r = e.U;
					r ? r.L === e ? r.L = n : r.R = n : t._ = n, n.U = r, e.U = n, e.L = n.R, e.L && (e.L.U = e), n.R = e
				}

				function n2(t) {
					for (; t.L;) t = t.L;
					return t
				}

				function n3(t, e, n, r) {
					var i = [null, null],
						o = sc.push(i) - 1;
					return i.left = t, i.right = e, n && n6(i, t, e, n), r && n6(i, e, t, r), su[t.index].halfedges.push(o), su[e.index].halfedges.push(o), i
				}

				function n4(t, e, n) {
					var r = [e, n];
					return r.left = t, r
				}

				function n6(t, e, n, r) {
					t[0] || t[1] ? t.left === n ? t[1] = r : t[0] = r : (t[0] = r, t.left = e, t.right = n)
				}

				function n8(t, e) {
					return e[+(e.left !== t.site)]
				}

				function n5(t) {
					var e = t.P,
						n = t.N;
					if (e && n) {
						var r = e.site,
							i = t.site,
							o = n.site;
						if (r !== o) {
							var s = i[0],
								a = i[1],
								u = r[0] - s,
								h = r[1] - a,
								c = o[0] - s,
								l = o[1] - a,
								p = 2 * (u * l - h * c);
							if (!(p >= -sg)) {
								var f = u * u + h * h,
									g = c * c + l * l,
									d = (l * f - h * g) / p,
									y = (u * g - c * f) / p,
									_ = sl.pop() || new function() {
										n$(this), this.x = this.y = this.arc = this.site = this.cy = null
									};
								_.arc = t, _.site = i, _.x = d + s, _.y = (_.cy = y + a) + Math.sqrt(d * d + y * y), t.circle = _;
								for (var m = null, v = sh._; v;)
									if (_.y < v.y || _.y === v.y && _.x <= v.x) {
										if (!v.L) {
											m = v.P;
											break
										}
										v = v.L
									} else {
										if (!v.R) {
											m = v;
											break
										}
										v = v.R
									} sh.insert(m, _), m || (ss = _)
							}
						}
					}
				}

				function n9(t) {
					var e = t.circle;
					e && (e.P || (ss = e.N), sh.remove(e), sl.push(e), n$(e), t.circle = null)
				}

				function n7(t) {
					var e = sp.pop() || new function() {
						n$(this), this.edge = this.site = this.circle = null
					};
					return e.site = t, e
				}

				function rt(t) {
					n9(t), sa.remove(t), sp.push(t), n$(t)
				}

				function re(t, e) {
					var n = t.site,
						r = n[0],
						i = n[1],
						o = i - e;
					if (!o) return r;
					var s = t.P;
					if (!s) return -1 / 0;
					var a = (n = s.site)[0],
						u = n[1],
						h = u - e;
					if (!h) return a;
					var c = a - r,
						l = 1 / o - 1 / h,
						p = c / h;
					return l ? (-p + Math.sqrt(p * p - 2 * l * (c * c / (-2 * h) - u + h / 2 + i - o / 2))) / l + r : (r + a) / 2
				}

				function rn(t, e) {
					return e[1] - t[1] || e[0] - t[0]
				}

				function rr(t, e) {
					var n, r, i, o = t.sort(rn).pop();
					for (sc = [], su = Array(t.length), sa = new nQ, sh = new nQ;;)
						if (i = ss, o && (!i || o[1] < i.y || o[1] === i.y && o[0] < i.x)) o[0] === n && o[1] === r || (function(t) {
							for (var e, n, r, i, o = t[0], s = t[1], a = sa._; a;)
								if ((r = re(a, s) - o) > sf) a = a.L;
								else {
									if (!((i = o - function(t, e) {
											var n = t.N;
											if (n) return re(n, e);
											var r = t.site;
											return r[1] === e ? r[0] : 1 / 0
										}(a, s)) > sf)) {
										r > -sf ? (e = a.P, n = a) : i > -sf ? (e = a, n = a.N) : e = n = a;
										break
									}
									if (!a.R) {
										e = a;
										break
									}
									a = a.R
								} su[t.index] = {
								site: t,
								halfedges: []
							};
							var u = n7(t);
							if (sa.insert(e, u), e || n) {
								if (e === n) return n9(e), n = n7(e.site), sa.insert(u, n), u.edge = n.edge = n3(e.site, u.site), n5(e), void n5(n);
								if (n) {
									n9(e), n9(n);
									var h = e.site,
										c = h[0],
										l = h[1],
										p = t[0] - c,
										f = t[1] - l,
										g = n.site,
										d = g[0] - c,
										y = g[1] - l,
										_ = 2 * (p * y - f * d),
										m = p * p + f * f,
										v = d * d + y * y,
										x = [(y * m - f * v) / _ + c, (p * v - d * m) / _ + l];
									n6(n.edge, h, g, x), u.edge = n3(h, t, null, x), n.edge = n3(t, g, null, x), n5(e), n5(n)
								} else u.edge = n3(e.site, u.site)
							}
						}(o), n = o[0], r = o[1]), o = t.pop();
						else {
							if (!i) break;
							! function(t) {
								var e = t.circle,
									n = e.x,
									r = e.cy,
									i = [n, r],
									o = t.P,
									s = t.N,
									a = [t];
								rt(t);
								for (var u = o; u.circle && Math.abs(n - u.circle.x) < sf && Math.abs(r - u.circle.cy) < sf;) o = u.P, a.unshift(u), rt(u), u = o;
								a.unshift(u), n9(u);
								for (var h = s; h.circle && Math.abs(n - h.circle.x) < sf && Math.abs(r - h.circle.cy) < sf;) s = h.N, a.push(h), rt(h), h = s;
								a.push(h), n9(h);
								var c, l = a.length;
								for (c = 1; c < l; ++c) h = a[c], u = a[c - 1], n6(h.edge, u.site, h.site, i);
								u = a[0], (h = a[l - 1]).edge = n3(u.site, h.site, null, i), n5(u), n5(h)
							}(i.arc)
						} if (function() {
							for (var t, e, n, r, i = 0, o = su.length; i < o; ++i)
								if ((t = su[i]) && (r = (e = t.halfedges).length)) {
									var s = Array(r),
										a = Array(r);
									for (n = 0; n < r; ++n) s[n] = n, a[n] = function(t, e) {
										var n = t.site,
											r = e.left,
											i = e.right;
										return n === i && (i = r, r = n), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (n === r ? (r = e[1], i = e[0]) : (r = e[0], i = e[1]), Math.atan2(r[0] - i[0], i[1] - r[1]))
									}(t, sc[e[n]]);
									for (s.sort(function(t, e) {
											return a[e] - a[t]
										}), n = 0; n < r; ++n) a[n] = e[s[n]];
									for (n = 0; n < r; ++n) e[n] = a[n]
								}
						}(), e) {
						var s = +e[0][0],
							a = +e[0][1],
							u = +e[1][0],
							h = +e[1][1];
						(function(t, e, n, r) {
							for (var i, o = sc.length; o--;)(function(t, e, n, r, i) {
								var o = t[1];
								if (o) return !0;
								var s, a, u = t[0],
									h = t.left,
									c = t.right,
									l = h[0],
									p = h[1],
									f = c[0],
									g = c[1],
									d = (l + f) / 2;
								if (g === p) {
									if (d < e || d >= r) return;
									if (l > f) {
										if (u) {
											if (u[1] >= i) return
										} else u = [d, n];
										o = [d, i]
									} else {
										if (u) {
											if (u[1] < n) return
										} else u = [d, i];
										o = [d, n]
									}
								} else if (s = (l - f) / (g - p), a = (p + g) / 2 - s * d, s < -1 || s > 1) {
									if (l > f) {
										if (u) {
											if (u[1] >= i) return
										} else u = [(n - a) / s, n];
										o = [(i - a) / s, i]
									} else {
										if (u) {
											if (u[1] < n) return
										} else u = [(i - a) / s, i];
										o = [(n - a) / s, n]
									}
								} else if (p < g) {
									if (u) {
										if (u[0] >= r) return
									} else u = [e, s * e + a];
									o = [r, s * r + a]
								} else {
									if (u) {
										if (u[0] < e) return
									} else u = [r, s * r + a];
									o = [e, s * e + a]
								}
								return t[0] = u, t[1] = o, !0
							})(i = sc[o], t, e, n, r) && function(t, e, n, r, i) {
								var o, s = t[0],
									a = t[1],
									u = s[0],
									h = s[1],
									c = 0,
									l = 1,
									p = a[0] - u,
									f = a[1] - h;
								if (o = e - u, p || !(o > 0)) {
									if (o /= p, p < 0) {
										if (o < c) return;
										o < l && (l = o)
									} else if (p > 0) {
										if (o > l) return;
										o > c && (c = o)
									}
									if (o = r - u, p || !(o < 0)) {
										if (o /= p, p < 0) {
											if (o > l) return;
											o > c && (c = o)
										} else if (p > 0) {
											if (o < c) return;
											o < l && (l = o)
										}
										if (o = n - h, f || !(o > 0)) {
											if (o /= f, f < 0) {
												if (o < c) return;
												o < l && (l = o)
											} else if (f > 0) {
												if (o > l) return;
												o > c && (c = o)
											}
											if (o = i - h, f || !(o < 0)) {
												if (o /= f, f < 0) {
													if (o > l) return;
													o > c && (c = o)
												} else if (f > 0) {
													if (o < c) return;
													o < l && (l = o)
												}
												return !(c > 0 || l < 1) || (c > 0 && (t[0] = [u + c * p, h + c * f]), l < 1 && (t[1] = [u + l * p, h + l * f]), !0)
											}
										}
									}
								}
							}(i, t, e, n, r) && (Math.abs(i[0][0] - i[1][0]) > sf || Math.abs(i[0][1] - i[1][1]) > sf) || delete sc[o]
						})(s, a, u, h),
						function(t, e, n, r) {
							var i, o, s, a, u, h, c, l, p, f, g, d, y = su.length,
								_ = !0;
							for (i = 0; i < y; ++i)
								if (o = su[i]) {
									for (s = o.site, a = (u = o.halfedges).length; a--;) sc[u[a]] || u.splice(a, 1);
									for (a = 0, h = u.length; a < h;) g = (m = o, f = (v = sc[u[a]])[+(v.left === m.site)])[0], d = f[1], l = (c = n8(o, sc[u[++a % h]]))[0], p = c[1], (Math.abs(g - l) > sf || Math.abs(d - p) > sf) && (u.splice(a, 0, sc.push(n4(s, f, Math.abs(g - t) < sf && r - d > sf ? [t, Math.abs(l - t) < sf ? p : r] : Math.abs(d - r) < sf && n - g > sf ? [Math.abs(p - r) < sf ? l : n, r] : Math.abs(g - n) < sf && d - e > sf ? [n, Math.abs(l - n) < sf ? p : e] : Math.abs(d - e) < sf && g - t > sf ? [Math.abs(p - e) < sf ? l : t, e] : null)) - 1), ++h);
									h && (_ = !1)
								} if (_) {
								var m, v, x, E, b, I = 1 / 0;
								for (i = 0, _ = null; i < y; ++i)(o = su[i]) && (b = (x = (s = o.site)[0] - t) * x + (E = s[1] - e) * E) < I && (I = b, _ = o);
								if (_) {
									var N = [t, e],
										w = [t, r],
										C = [n, r],
										S = [n, e];
									_.halfedges.push(sc.push(n4(s = _.site, N, w)) - 1, sc.push(n4(s, w, C)) - 1, sc.push(n4(s, C, S)) - 1, sc.push(n4(s, S, N)) - 1)
								}
							}
							for (i = 0; i < y; ++i)(o = su[i]) && (o.halfedges.length || delete su[i])
						}(s, a, u, h)
					}
					this.edges = sc, this.cells = su, sa = sh = sc = su = null
				}

				function ri(t) {
					return (t = t.slice()).push(t[0]), o([t])
				}

				function ro(t, e, n, r) {
					var i = (r = r || {}).steps || 64,
						s = r.units || "kilometers",
						a = r.angle || 0,
						u = r.pivot || t,
						h = r.properties || t.properties || {};
					if (!t) throw Error("center is required");
					if (!e) throw Error("xSemiAxis is required");
					if (!n) throw Error("ySemiAxis is required");
					if (!N(r)) throw Error("options must be an object");
					if (!I(i)) throw Error("steps must be a number");
					if (!I(a)) throw Error("angle must be a number");
					var c = X(t);
					if ("degrees" === s) var l = x(a);
					else e = ny(t, e, 90, {
						units: s
					}), n = ny(t, n, 0, {
						units: s
					}), e = X(e)[0] - c[0], n = X(n)[1] - c[1];
					for (var p = [], f = 0; f < i; f += 1) {
						var g = -360 * f / i,
							d = e * n / Math.sqrt(Math.pow(n, 2) + Math.pow(e, 2) * Math.pow(rs(g), 2)),
							y = e * n / Math.sqrt(Math.pow(e, 2) + Math.pow(n, 2) / Math.pow(rs(g), 2));
						if (g < -90 && g >= -270 && (d = -d), g < -180 && g >= -360 && (y = -y), "degrees" === s) {
							var _ = d * Math.cos(l) + y * Math.sin(l),
								m = y * Math.cos(l) - d * Math.sin(l);
							d = _, y = m
						}
						p.push([d + c[0], y + c[1]])
					}
					return p.push(p[0]), "degrees" === s ? o([p], h) : nN(o([p], h), a, {
						pivot: u
					})
				}

				function rs(t) {
					return Math.tan(t * Math.PI / 180)
				}

				function ra(t, e) {
					if (!N(e = e || {})) throw Error("options is invalid");
					var n = e.properties,
						i = e.weight;
					if (!t) throw Error("geojson is required");
					var o = 0,
						s = 0,
						a = 0;
					return D(t, function(t, e, n) {
						var r = n[i];
						if (!I(r = null == r ? 1 : r)) throw Error("weight value must be a number for feature index " + e);
						(r = Number(r)) > 0 && S(t, function(t) {
							o += t[0] * r, s += t[1] * r, a += r
						})
					}), r([o / a, s / a], n)
				}

				function ru(t, e) {
					return {
						x: t[0] - e[0],
						y: t[1] - e[1]
					}
				}

				function rh(t) {
					var e;
					if (N(t) && (t = t.bbox), t && !Array.isArray(t)) throw Error("bbox is invalid");
					return t ? [Math.random() * ((e = t)[2] - e[0]) + e[0], Math.random() * (e[3] - e[1]) + e[1]] : [360 * rf(), 180 * rf()]
				}

				function rc(t, e) {
					if (!N(e = e || {})) throw Error("options is invalid");
					var n = e.bbox;
					null != t || (t = 1);
					for (var i = [], o = 0; o < t; o++) i.push(r(rh(n)));
					return h(i)
				}

				function rl(t, e) {
					if (!N(e = e || {})) throw Error("options is invalid");
					var n = e.bbox,
						r = e.num_vertices,
						i = e.max_radial_length;
					null != t || (t = 1), I(r) || (r = 10), I(i) || (i = 10);
					for (var s = [], a = 0; a < t; a++) {
						var u = [],
							c = Array.apply(null, Array(r + 1)).map(Math.random);
						c.forEach(function(t, e, n) {
							n[e] = e > 0 ? t + n[e - 1] : t
						}), c.forEach(function(t) {
							t = 2 * t * Math.PI / c[c.length - 1];
							var e = Math.random();
							u.push([e * i * Math.sin(t), e * i * Math.cos(t)])
						}), u[u.length - 1] = u[0], u = u.map(function(t) {
							return function(e) {
								return [e[0] + t[0], e[1] + t[1]]
							}
						}(rh(n))), s.push(o([u]))
					}
					return h(s)
				}

				function rp(t, e) {
					if (!N(e = e || {})) throw Error("options is invalid");
					var n = e.bbox,
						r = e.num_vertices,
						i = e.max_length,
						o = e.max_rotation;
					null != t || (t = 1), (!I(r) || r < 2) && (r = 10), I(i) || (i = 1e-4), I(o) || (o = Math.PI / 8);
					for (var s = [], u = 0; u < t; u++) {
						for (var c = [rh(n)], l = 0; l < r - 1; l++) {
							var p = (0 === l ? 2 * Math.random() * Math.PI : Math.tan((c[l][1] - c[l - 1][1]) / (c[l][0] - c[l - 1][0]))) + (Math.random() - .5) * o * 2,
								f = Math.random() * i;
							c.push([c[l][0] + f * Math.cos(p), c[l][1] + f * Math.sin(p)])
						}
						s.push(a(c))
					}
					return h(s)
				}

				function rf() {
					return Math.random() - .5
				}

				function rg(t, e) {
					if (!t) throw Error("geojson is required");
					if ("FeatureCollection" !== t.type) throw Error("geojson must be a FeatureCollection");
					if (null == e) throw Error("filter is required");
					var n = [];
					return O(t, function(t) {
						rm(t.properties, e) && n.push(t)
					}), h(n)
				}

				function rd(t, e, n) {
					if (!t) throw Error("geojson is required");
					if ("FeatureCollection" !== t.type) throw Error("geojson must be a FeatureCollection");
					if (null == e) throw Error("property is required");
					for (var r = r_(t, e), i = Object.keys(r), o = 0; o < i.length; o++) {
						for (var s = i[o], a = r[s], u = [], c = 0; c < a.length; c++) u.push(t.features[a[c]]);
						n(h(u), s, o)
					}
				}

				function ry(t, e, n, r) {
					var i = r;
					return rd(t, e, function(t, e, o) {
						i = 0 === o && void 0 === r ? t : n(i, t, e, o)
					}), i
				}

				function r_(t, e) {
					var n = {};
					return O(t, function(t, r) {
						var i = t.properties || {};
						if (i.hasOwnProperty(e)) {
							var o = i[e];
							n.hasOwnProperty(o) ? n[o].push(r) : n[o] = [r]
						}
					}), n
				}

				function rm(t, e) {
					if (void 0 === t) return !1;
					var n = typeof e;
					if ("number" === n || "string" === n) return t.hasOwnProperty(e);
					if (Array.isArray(e)) {
						for (var r = 0; r < e.length; r++)
							if (!rm(t, e[r])) return !1;
						return !0
					}
					return rv(t, e)
				}

				function rv(t, e) {
					for (var n = Object.keys(e), r = 0; r < n.length; r++) {
						var i = n[r];
						if (t[i] !== e[i]) return !1
					}
					return !0
				}

				function rx(t, e) {
					if (!e || !e.length) return {};
					for (var n = {}, r = 0; r < e.length; r++) {
						var i = e[r];
						t.hasOwnProperty(i) && (n[i] = t[i])
					}
					return n
				}

				function rE() {}

				function rb(t) {
					this.message = t || ""
				}

				function rI(t) {
					this.message = t || ""
				}

				function rN() {}

				function rw(t) {
					return null === t ? aC : t.color
				}

				function rC(t) {
					return null === t ? null : t.parent
				}

				function rS(t, e) {
					null !== t && (t.color = e)
				}

				function rM(t) {
					return null === t ? null : t.left
				}

				function rL(t) {
					return null === t ? null : t.right
				}

				function rP() {
					this.root_ = null, this.size_ = 0
				}

				function rO() {}

				function rR() {
					this.array_ = [], arguments[0] instanceof al && this.addAll(arguments[0])
				}

				function rT() {}

				function rD(t) {
					this.message = t || ""
				}

				function rA() {
					this.array_ = []
				}

				function rF(t) {
					switch (t.type) {
						case "Polygon":
							return eU(t) > 1 ? t : null;
						case "MultiPolygon":
							var e = [];
							if (F(t, function(t) {
									eU(t) > 1 && e.push(t.geometry.coordinates)
								}), e.length) return {
								type: "MultiPolygon",
								coordinates: e
							}
					}
				}

				function rq() {
					this.reset()
				}

				function rG(t, e, n) {
					var r = t.s = e + n,
						i = r - e;
					t.t = e - (r - i) + (n - i)
				}

				function rB(t) {
					return t > 1 ? c1 : t < -1 ? -c1 : Math.asin(t)
				}

				function rk() {}

				function rz(t, e) {
					t && ls.hasOwnProperty(t.type) && ls[t.type](t, e)
				}

				function rj(t, e, n) {
					var r, i = -1,
						o = t.length - n;
					for (e.lineStart(); ++i < o;) r = t[i], e.point(r[0], r[1], r[2]);
					e.lineEnd()
				}

				function rX(t, e) {
					var n = -1,
						r = t.length;
					for (e.polygonStart(); ++n < r;) rj(t[n], e, 1);
					e.polygonEnd()
				}

				function rU(t) {
					return [c9(t[1], t[0]), rB(t[2])]
				}

				function rY(t) {
					var e = t[0],
						n = t[1],
						r = c7(n);
					return [r * c7(e), r * ln(e), ln(n)]
				}

				function rV(t, e) {
					return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
				}

				function rH(t, e) {
					return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
				}

				function rW(t, e) {
					t[0] += e[0], t[1] += e[1], t[2] += e[2]
				}

				function rJ(t, e) {
					return [t[0] * e, t[1] * e, t[2] * e]
				}

				function rZ(t) {
					var e = lr(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
					t[0] /= e, t[1] /= e, t[2] /= e
				}

				function rK(t, e) {
					return [t > c0 ? t - c3 : t < -c0 ? t + c3 : t, e]
				}

				function rQ(t, e, n) {
					return (t %= c3) ? e || n ? lu(r0(t), r1(e, n)) : r0(t) : e || n ? r1(e, n) : rK
				}

				function r$(t) {
					return function(e, n) {
						return [(e += t) > c0 ? e - c3 : e < -c0 ? e + c3 : e, n]
					}
				}

				function r0(t) {
					var e = r$(t);
					return e.invert = r$(-t), e
				}

				function r1(t, e) {
					function n(t, e) {
						var n = c7(e),
							a = c7(t) * n,
							u = ln(t) * n,
							h = ln(e),
							c = h * r + a * i;
						return [c9(u * o - c * s, a * r - h * i), rB(c * o + u * s)]
					}
					var r = c7(t),
						i = ln(t),
						o = c7(e),
						s = ln(e);
					return n.invert = function(t, e) {
						var n = c7(e),
							a = c7(t) * n,
							u = ln(t) * n,
							h = ln(e),
							c = h * o - u * s;
						return [c9(u * o + h * s, a * r + c * i), rB(c * r - a * i)]
					}, n
				}

				function r2(t, e) {
					(e = rY(e))[0] -= t, rZ(e);
					var n, r = (n = -e[1]) > 1 ? 0 : n < -1 ? c0 : Math.acos(n);
					return ((0 > -e[2] ? -r : r) + c3 - c$) % c3
				}

				function r3(t, e, n, r) {
					this.x = t, this.z = e, this.o = n, this.e = r, this.v = !1, this.n = this.p = null
				}

				function r4(t) {
					if (e = t.length) {
						for (var e, n, r = 0, i = t[0]; ++r < e;) i.n = n = t[r], n.p = i, i = n;
						i.n = n = t[0], n.p = i
					}
				}

				function r6(t) {
					return t.length > 1
				}

				function r8(t, e) {
					return ((t = t.x)[0] < 0 ? t[1] - c1 - c$ : c1 - t[1]) - ((e = e.x)[0] < 0 ? e[1] - c1 - c$ : c1 - e[1])
				}

				function r5(t) {
					return function(e) {
						var n = new r9;
						for (var r in t) n[r] = t[r];
						return n.stream = e, n
					}
				}

				function r9() {}

				function r7(t, e, n) {
					var r = e[1][0] - e[0][0],
						i = e[1][1] - e[0][1],
						o = t.clipExtent && t.clipExtent();
					t.scale(150).translate([0, 0]), null != o && t.clipExtent(null), la(n, t.stream(lb));
					var s = lb.result(),
						a = Math.min(r / (s[1][0] - s[0][0]), i / (s[1][1] - s[0][1])),
						u = +e[0][0] + (r - a * (s[1][0] + s[0][0])) / 2,
						h = +e[0][1] + (i - a * (s[1][1] + s[0][1])) / 2;
					return null != o && t.clipExtent(o), t.scale(150 * a).translate([u, h])
				}

				function it(t, e) {
					return [t, le(li((c1 + e) / 2))]
				}

				function ie(t, e) {
					return [le(li((c1 + e) / 2)), -t]
				}

				function ir(t, n, r, i) {
					var o, s = t.properties || {},
						a = "Feature" === t.type ? t.geometry : t;
					if ("GeometryCollection" === a.type) {
						var u = [];
						return D(t, function(t) {
							var e = ir(t, n, r, i);
							e && u.push(e)
						}), h(u)
					}
					var c, l = j(t),
						p = l[1] > 50 && l[3] > 50;
					c = p ? {
						type: a.type,
						coordinates: function t(e, n) {
							return "object" != typeof e[0] ? n(e) : e.map(function(e) {
								return t(e, n)
							})
						}(a.coordinates, ii(a))
					} : eA(a);
					var f = (new uo).read(c),
						g = d(y(n, r), "meters"),
						_ = hk.bufferOp(f, g);
					if (! function t(e) {
							return Array.isArray(e[0]) ? t(e[0]) : isNaN(e[0])
						}((_ = (new us).write(_)).coordinates)) return (o = p ? {
						type: _.type,
						coordinates: function t(e, n) {
							return "object" != typeof e[0] ? n.invert(e) : e.map(function(e) {
								return t(e, n)
							})
						}(_.coordinates, ii(a))
					} : eF(_)).geometry ? o : e(o, s)
				}

				function ii(t) {
					var e = t2(t).geometry.coordinates.reverse(),
						n = e.map(function(t) {
							return -t
						});
					return lL().center(e).rotate(n).scale(id)
				}

				function io() {
					for (var t = new uo, e = t.read(JSON.stringify(arguments[0].geometry)), n = 1; n < arguments.length; n++) e = cZ.union(e, t.read(JSON.stringify(arguments[n].geometry)));
					return {
						type: "Feature",
						geometry: e = (new us).write(e),
						properties: arguments[0].properties
					}
				}

				function is(t, n) {
					var r = J(t),
						i = J(n);
					if (tU(e1(i, {
							precision: 4
						})).coordinates[0].length < 4 || tU(e1(r, {
							precision: 4
						})).coordinates[0].length < 4) return null;
					var o = new uo,
						s = o.read(e1(r)),
						a = o.read(e1(i)),
						u = cz.intersection(s, a);
					return u.isEmpty() ? null : e((new us).write(u))
				}

				function ia(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					var r = n.properties || {},
						i = n.triangles,
						s = n.mask;
					if (null == e) throw Error("cellSide is required");
					if (!I(e)) throw Error("cellSide is invalid");
					if (!t) throw Error("bbox is required");
					if (!Array.isArray(t)) throw Error("bbox must be array");
					if (4 !== t.length) throw Error("bbox must contain 4 numbers");
					if (s && -1 === ["Polygon", "MultiPolygon"].indexOf(K(s))) throw Error("options.mask must be a (Multi)Polygon");
					var a = t[0],
						u = t[1],
						c = t[2],
						l = t[3],
						p = (u + l) / 2,
						f = (a + c) / 2,
						g = 2 * e / tR([a, p], [c, p], n) * (c - a),
						d = 2 * e / tR([f, u], [f, l], n) * (l - u),
						y = g / 2,
						_ = 2 * y,
						m = Math.sqrt(3) / 2 * d,
						v = c - a,
						x = l - u,
						E = .75 * _,
						b = Math.floor((v - _) / (_ - y / 2)),
						w = (b * E - y / 2 - v) / 2 - y / 2 + E / 2,
						C = Math.floor((x - m) / m),
						S = (x - C * m) / 2,
						M = C * m - x > m / 2;
					M && (S -= m / 4);
					for (var L = [], P = [], O = 0; O < 6; O++) {
						var R = 2 * Math.PI / 6 * O;
						L.push(Math.cos(R)), P.push(Math.sin(R))
					}
					for (var T = [], D = 0; D <= b; D++)
						for (var A = 0; A <= C; A++) {
							var F = D % 2 == 1;
							if ((0 !== A || !F) && (0 !== A || !M)) {
								var q = D * E + a - w,
									G = A * m + u + S;
								if (F && (G -= m / 2), !0 === i)(function(t, e, n, r, i, s) {
									for (var a = [], u = 0; u < 6; u++) {
										var h = [];
										h.push(t), h.push([t[0] + e * i[u], t[1] + n * s[u]]), h.push([t[0] + e * i[(u + 1) % 6], t[1] + n * s[(u + 1) % 6]]), h.push(t), a.push(o([h], r))
									}
									return a
								})([q, G], g / 2, d / 2, r, L, P).forEach(function(t) {
									s ? is(s, t) && T.push(t) : T.push(t)
								});
								else {
									var B = function(t, e, n, r, i, s) {
										for (var a = [], u = 0; u < 6; u++) {
											var h = t[0] + e * i[u],
												c = t[1] + n * s[u];
											a.push([h, c])
										}
										return a.push(a[0].slice()), o([a], r)
									}([q, G], g / 2, d / 2, r, L, P);
									s ? is(s, B) && T.push(B) : T.push(B)
								}
							}
						}
					return h(T)
				}

				function iu(t) {
					if (t.features.length <= 1) return t;
					var e, n, r = (e = iw(), n = [], F(t, function(t, e) {
							var r = j(t);
							n.push({
								minX: r[0],
								minY: r[1],
								maxX: r[2],
								maxY: r[3],
								geojson: t,
								index: e
							})
						}), e.load(n), e),
						i = [],
						o = {};
					return F(t, function(t, e) {
						if (o[e]) return !0;
						for (r.remove({
								index: e
							}, ih), o[e] = !0;;) {
							var n = j(t),
								s = r.search({
									minX: n[0],
									minY: n[1],
									maxX: n[2],
									maxY: n[3]
								});
							if (s.length > 0) {
								var a = s.map(function(t) {
									return o[t.index] = !0, r.remove({
										index: t.index
									}, ih), t.geojson
								});
								a.push(t), t = io.apply(this, a)
							}
							if (0 === s.length) break
						}
						i.push(t)
					}), h(i)
				}

				function ih(t, e) {
					return t.index === e.index
				}

				function ic(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					var r = n.properties,
						i = n.mask,
						s = [];
					if (null == e) throw Error("cellSide is required");
					if (!I(e)) throw Error("cellSide is invalid");
					if (!t) throw Error("bbox is required");
					if (!Array.isArray(t)) throw Error("bbox must be array");
					if (4 !== t.length) throw Error("bbox must contain 4 numbers");
					if (i && -1 === ["Polygon", "MultiPolygon"].indexOf(K(i))) throw Error("options.mask must be a (Multi)Polygon");
					for (var a = t[0], u = t[1], c = t[2], l = t[3], p = e / tR([a, u], [c, u], n) * (c - a), f = e / tR([a, u], [a, l], n) * (l - u), g = c - a, d = l - u, y = Math.floor(g / p), _ = Math.floor(d / f), m = (d - _ * f) / 2, v = a + (g - y * p) / 2, x = 0; x < y; x++) {
						for (var E = u + m, b = 0; b < _; b++) {
							var w = o([
								[
									[v, E],
									[v, E + f],
									[v + p, E + f],
									[v + p, E],
									[v, E]
								]
							], r);
							i ? is(i, w) && s.push(w) : s.push(w), E += f
						}
						v += p
					}
					return h(s)
				}

				function il(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					var r = n.properties,
						i = n.mask,
						s = [];
					if (null == e) throw Error("cellSide is required");
					if (!I(e)) throw Error("cellSide is invalid");
					if (!t) throw Error("bbox is required");
					if (!Array.isArray(t)) throw Error("bbox must be array");
					if (4 !== t.length) throw Error("bbox must contain 4 numbers");
					if (i && -1 === ["Polygon", "MultiPolygon"].indexOf(K(i))) throw Error("options.mask must be a (Multi)Polygon");
					for (var a = e / tR([t[0], t[1]], [t[2], t[1]], n) * (t[2] - t[0]), u = e / tR([t[0], t[1]], [t[0], t[3]], n) * (t[3] - t[1]), c = 0, l = t[0]; l <= t[2];) {
						for (var p = 0, f = t[1]; f <= t[3];) {
							var g = null,
								d = null;
							c % 2 == 0 && p % 2 == 0 ? (g = o([
								[
									[l, f],
									[l, f + u],
									[l + a, f],
									[l, f]
								]
							], r), d = o([
								[
									[l, f + u],
									[l + a, f + u],
									[l + a, f],
									[l, f + u]
								]
							], r)) : c % 2 == 0 && p % 2 == 1 ? (g = o([
								[
									[l, f],
									[l + a, f + u],
									[l + a, f],
									[l, f]
								]
							], r), d = o([
								[
									[l, f],
									[l, f + u],
									[l + a, f + u],
									[l, f]
								]
							], r)) : p % 2 == 0 && c % 2 == 1 ? (g = o([
								[
									[l, f],
									[l, f + u],
									[l + a, f + u],
									[l, f]
								]
							], r), d = o([
								[
									[l, f],
									[l + a, f + u],
									[l + a, f],
									[l, f]
								]
							], r)) : p % 2 == 1 && c % 2 == 1 && (g = o([
								[
									[l, f],
									[l, f + u],
									[l + a, f],
									[l, f]
								]
							], r), d = o([
								[
									[l, f + u],
									[l + a, f + u],
									[l + a, f],
									[l, f + u]
								]
							], r)), i ? (is(i, g) && s.push(g), is(i, d) && s.push(d)) : (s.push(g), s.push(d)), f += u, p++
						}
						c++, l += a
					}
					return h(s)
				}
				var ip, ig, id = 6371008.8,
					iy = {
						meters: 6371008.8,
						metres: 6371008.8,
						millimeters: 6371008800,
						millimetres: 6371008800,
						centimeters: 637100880,
						centimetres: 637100880,
						kilometers: 6371.0088,
						kilometres: 6371.0088,
						miles: 3958.761333810546,
						nauticalmiles: 6371008.8 / 1852,
						inches: 250826616.45599997,
						yards: 6371008.8 / 1.0936,
						feet: 20902260.511392,
						radians: 1,
						degrees: 6371008.8 / 111325
					},
					i_ = {
						meters: 1,
						metres: 1,
						millimeters: 1e3,
						millimetres: 1e3,
						centimeters: 100,
						centimetres: 100,
						kilometers: .001,
						kilometres: .001,
						miles: 1 / 1609.344,
						nauticalmiles: 1 / 1852,
						inches: 39.37,
						yards: 1 / 1.0936,
						feet: 3.28084,
						radians: 15696101377226164e-23,
						degrees: 1 / 111325
					},
					im = {
						meters: 1,
						metres: 1,
						millimeters: 1e6,
						millimetres: 1e6,
						centimeters: 1e4,
						centimetres: 1e4,
						kilometers: 1e-6,
						kilometres: 1e-6,
						acres: 247105e-9,
						miles: 386e-9,
						yards: 1.195990046,
						feet: 10.763910417,
						inches: 1550.003100006
					},
					iv = Object.freeze({
						earthRadius: 6371008.8,
						factors: iy,
						unitsFactors: i_,
						areaFactors: im,
						feature: e,
						geometry: n,
						point: r,
						points: i,
						polygon: o,
						polygons: s,
						lineString: a,
						lineStrings: u,
						featureCollection: h,
						multiLineString: c,
						multiPoint: l,
						multiPolygon: p,
						geometryCollection: f,
						round: g,
						radiansToLength: d,
						lengthToRadians: y,
						lengthToDegrees: _,
						bearingToAzimuth: m,
						radiansToDegrees: v,
						degreesToRadians: x,
						convertLength: E,
						convertArea: b,
						isNumber: I,
						isObject: N,
						validateBBox: w,
						validateId: C,
						radians2degrees: function() {
							throw Error("method has been renamed to `radiansToDegrees`")
						},
						degrees2radians: function() {
							throw Error("method has been renamed to `degreesToRadians`")
						},
						distanceToDegrees: function() {
							throw Error("method has been renamed to `lengthToDegrees`")
						},
						distanceToRadians: function() {
							throw Error("method has been renamed to `lengthToRadians`")
						},
						radiansToDistance: function() {
							throw Error("method has been renamed to `radiansToLength`")
						},
						bearingToAngle: function() {
							throw Error("method has been renamed to `bearingToAzimuth`")
						},
						convertDistance: function() {
							throw Error("method has been renamed to `convertLength`")
						}
					}),
					ix = Object.freeze({
						coordEach: S,
						coordReduce: M,
						propEach: L,
						propReduce: P,
						featureEach: O,
						featureReduce: R,
						coordAll: T,
						geomEach: D,
						geomReduce: A,
						flattenEach: F,
						flattenReduce: q,
						segmentEach: G,
						segmentReduce: B,
						lineEach: k,
						lineReduce: z
					}),
					iE = Object.freeze({
						getCoord: X,
						getCoords: U,
						containsNumber: Y,
						geojsonType: V,
						featureOf: H,
						collectionOf: W,
						getGeom: J,
						getGeomType: Z,
						getType: K
					}),
					ib = {
						successCallback: null,
						verbose: !1
					},
					iI = {},
					iN = function t(e, n, r, i, o) {
						for (r = r || 0, i = i || e.length - 1, o = o || function(t, e) {
								return t < e ? -1 : t > e ? 1 : 0
							}; i > r;) {
							if (i - r > 600) {
								var s = i - r + 1,
									a = n - r + 1,
									u = Math.log(s),
									h = .5 * Math.exp(2 * u / 3),
									c = .5 * Math.sqrt(u * h * (s - h) / s) * (a - s / 2 < 0 ? -1 : 1);
								t(e, n, Math.max(r, Math.floor(n - a * h / s + c)), Math.min(i, Math.floor(n + (s - a) * h / s + c)), o)
							}
							var l = e[n],
								p = r,
								f = i;
							for (te(e, r, n), o(e[i], l) > 0 && te(e, r, i); p < f;) {
								for (te(e, p, f), p++, f--; 0 > o(e[p], l);) p++;
								for (; o(e[f], l) > 0;) f--
							}
							0 === o(e[r], l) ? te(e, r, f) : te(e, ++f, i), f <= n && (r = f + 1), n <= f && (i = f - 1)
						}
					},
					iw = tn;
				tn.prototype = {
					all: function() {
						return this._all(this.data, [])
					},
					search: function(t) {
						var e = this.data,
							n = [],
							r = this.toBBox;
						if (!tl(t, e)) return n;
						for (var i, o, s, a, u = []; e;) {
							for (i = 0, o = e.children.length; i < o; i++) s = e.children[i], tl(t, a = e.leaf ? r(s) : s) && (e.leaf ? n.push(s) : tc(t, a) ? this._all(s, n) : u.push(s));
							e = u.pop()
						}
						return n
					},
					collides: function(t) {
						var e = this.data,
							n = this.toBBox;
						if (!tl(t, e)) return !1;
						for (var r, i, o, s, a = []; e;) {
							for (r = 0, i = e.children.length; r < i; r++)
								if (o = e.children[r], tl(t, s = e.leaf ? n(o) : o)) {
									if (e.leaf || tc(t, s)) return !0;
									a.push(o)
								} e = a.pop()
						}
						return !1
					},
					load: function(t) {
						if (!t || !t.length) return this;
						if (t.length < this._minEntries) {
							for (var e = 0, n = t.length; e < n; e++) this.insert(t[e]);
							return this
						}
						var r = this._build(t.slice(), 0, t.length - 1, 0);
						if (this.data.children.length) {
							if (this.data.height === r.height) this._splitRoot(this.data, r);
							else {
								if (this.data.height < r.height) {
									var i = this.data;
									this.data = r, r = i
								}
								this._insert(r, this.data.height - r.height - 1, !0)
							}
						} else this.data = r;
						return this
					},
					insert: function(t) {
						return t && this._insert(t, this.data.height - 1), this
					},
					clear: function() {
						return this.data = tp([]), this
					},
					remove: function(t, e) {
						if (!t) return this;
						for (var n, r, i, o, s = this.data, a = this.toBBox(t), u = [], h = []; s || u.length;) {
							if (s || (s = u.pop(), r = u[u.length - 1], n = h.pop(), o = !0), s.leaf && -1 !== (i = function(t, e, n) {
									if (!n) return e.indexOf(t);
									for (var r = 0; r < e.length; r++)
										if (n(t, e[r])) return r;
									return -1
								}(t, s.children, e))) return s.children.splice(i, 1), u.push(s), this._condense(u), this;
							o || s.leaf || !tc(s, a) ? r ? (n++, s = r.children[n], o = !1) : s = null : (u.push(s), h.push(n), n = 0, r = s, s = s.children[0])
						}
						return this
					},
					toBBox: function(t) {
						return t
					},
					compareMinX: ts,
					compareMinY: ta,
					toJSON: function() {
						return this.data
					},
					fromJSON: function(t) {
						return this.data = t, this
					},
					_all: function(t, e) {
						for (var n = []; t;) t.leaf ? e.push.apply(e, t.children) : n.push.apply(n, t.children), t = n.pop();
						return e
					},
					_build: function(t, e, n, r) {
						var i, o = n - e + 1,
							s = this._maxEntries;
						if (o <= s) return tr(i = tp(t.slice(e, n + 1)), this.toBBox), i;
						r || (r = Math.ceil(Math.log(o) / Math.log(s)), s = Math.ceil(o / Math.pow(s, r - 1))), (i = tp([])).leaf = !1, i.height = r;
						var a, u, h, c, l = Math.ceil(o / s),
							p = l * Math.ceil(Math.sqrt(s));
						for (tf(t, e, n, p, this.compareMinX), a = e; a <= n; a += p)
							for (tf(t, a, h = Math.min(a + p - 1, n), l, this.compareMinY), u = a; u <= h; u += l) c = Math.min(u + l - 1, h), i.children.push(this._build(t, u, c, r - 1));
						return tr(i, this.toBBox), i
					},
					_chooseSubtree: function(t, e, n, r) {
						for (var i, o, s, a, u, h, c, l; r.push(e), !e.leaf && r.length - 1 !== n;) {
							for (c = l = 1 / 0, i = 0, o = e.children.length; i < o; i++) u = tu(s = e.children[i]), (h = (Math.max(s.maxX, t.maxX) - Math.min(s.minX, t.minX)) * (Math.max(s.maxY, t.maxY) - Math.min(s.minY, t.minY)) - u) < l ? (l = h, c = u < c ? u : c, a = s) : h === l && u < c && (c = u, a = s);
							e = a || e.children[0]
						}
						return e
					},
					_insert: function(t, e, n) {
						var r = this.toBBox,
							i = n ? t : r(t),
							o = [],
							s = this._chooseSubtree(i, this.data, e, o);
						for (s.children.push(t), to(s, i); e >= 0 && o[e].children.length > this._maxEntries;) this._split(o, e), e--;
						this._adjustParentBBoxes(i, o, e)
					},
					_split: function(t, e) {
						var n = t[e],
							r = n.children.length,
							i = this._minEntries;
						this._chooseSplitAxis(n, i, r);
						var o = this._chooseSplitIndex(n, i, r),
							s = tp(n.children.splice(o, n.children.length - o));
						s.height = n.height, s.leaf = n.leaf, tr(n, this.toBBox), tr(s, this.toBBox), e ? t[e - 1].children.push(s) : this._splitRoot(n, s)
					},
					_splitRoot: function(t, e) {
						this.data = tp([t, e]), this.data.height = t.height + 1, this.data.leaf = !1, tr(this.data, this.toBBox)
					},
					_chooseSplitIndex: function(t, e, n) {
						var r, i, o, s, a, u, h, c;
						for (u = h = 1 / 0, r = e; r <= n - e; r++) s = function(t, e) {
							var n = Math.max(t.minX, e.minX),
								r = Math.max(t.minY, e.minY);
							return Math.max(0, Math.min(t.maxX, e.maxX) - n) * Math.max(0, Math.min(t.maxY, e.maxY) - r)
						}(i = ti(t, 0, r, this.toBBox), o = ti(t, r, n, this.toBBox)), a = tu(i) + tu(o), s < u ? (u = s, c = r, h = a < h ? a : h) : s === u && a < h && (h = a, c = r);
						return c
					},
					_chooseSplitAxis: function(t, e, n) {
						var r = t.leaf ? this.compareMinX : ts,
							i = t.leaf ? this.compareMinY : ta;
						this._allDistMargin(t, e, n, r) < this._allDistMargin(t, e, n, i) && t.children.sort(r)
					},
					_allDistMargin: function(t, e, n, r) {
						t.children.sort(r);
						var i, o, s = this.toBBox,
							a = ti(t, 0, e, s),
							u = ti(t, n - e, n, s),
							h = th(a) + th(u);
						for (i = e; i < n - e; i++) o = t.children[i], to(a, t.leaf ? s(o) : o), h += th(a);
						for (i = n - e - 1; i >= e; i--) o = t.children[i], to(u, t.leaf ? s(o) : o), h += th(u);
						return h
					},
					_adjustParentBBoxes: function(t, e, n) {
						for (var r = n; r >= 0; r--) to(e[r], t)
					},
					_condense: function(t) {
						for (var e, n = t.length - 1; n >= 0; n--) 0 === t[n].children.length ? n > 0 ? (e = t[n - 1].children).splice(e.indexOf(t[n]), 1) : this.clear() : tr(t[n], this.toBBox)
					},
					_initFormat: function(t) {
						var e = ["return a", " - b", ";"];
						this.compareMinX = Function("a", "b", e.join(t[0])), this.compareMinY = Function("a", "b", e.join(t[1])), this.toBBox = Function("a", "return {minX: a" + t[0] + ", minY: a" + t[1] + ", maxX: a" + t[2] + ", maxY: a" + t[3] + "};")
					}
				};
				var iC = function(t, e, n) {
						var r = t * e,
							i = iS * t,
							o = i - (i - t),
							s = t - o,
							a = iS * e,
							u = a - (a - e),
							h = e - u,
							c = s * h - (r - o * u - s * u - o * h);
						return n ? (n[0] = c, n[1] = r, n) : [c, r]
					},
					iS = 134217729,
					iM = function(t, e) {
						var n = 0 | t.length,
							r = 0 | e.length;
						if (1 === n && 1 === r) return a = (s = (i = t[0]) + (o = e[0])) - i, (u = i - (s - a) + (o - a)) ? [u, s] : [s];
						var i, o, s, a, u, h, c, l = Array(n + r),
							p = 0,
							f = 0,
							g = 0,
							d = Math.abs,
							y = t[0],
							_ = d(y),
							m = e[g],
							v = d(m);
						_ < v ? (c = y, (f += 1) < n && (_ = d(y = t[f]))) : (c = m, (g += 1) < r && (v = d(m = e[g]))), f < n && _ < v || g >= r ? (h = y, (f += 1) < n && (_ = d(y = t[f]))) : (h = m, (g += 1) < r && (v = d(m = e[g])));
						for (var x, E, b = h + c, I = b - h, N = c - I, w = N, C = b; f < n && g < r;) _ < v ? (h = y, (f += 1) < n && (_ = d(y = t[f]))) : (h = m, (g += 1) < r && (v = d(m = e[g]))), (N = (c = w) - (I = (b = h + c) - h)) && (l[p++] = N), w = C - ((x = C + b) - (E = x - C)) + (b - E), C = x;
						for (; f < n;)(N = (c = w) - (I = (b = (h = y) + c) - h)) && (l[p++] = N), w = C - ((x = C + b) - (E = x - C)) + (b - E), C = x, (f += 1) < n && (y = t[f]);
						for (; g < r;)(N = (c = w) - (I = (b = (h = m) + c) - h)) && (l[p++] = N), w = C - ((x = C + b) - (E = x - C)) + (b - E), C = x, (g += 1) < r && (m = e[g]);
						return w && (l[p++] = w), C && (l[p++] = C), p || (l[p++] = 0), l.length = p, l
					},
					iL = function(t, e, n) {
						var r = t + e,
							i = r - t,
							o = e - i,
							s = t - (r - i);
						return n ? (n[0] = s + o, n[1] = r, n) : [s + o, r]
					},
					iP = function(t, e) {
						var n = t.length;
						if (1 === n) {
							var r = iC(t[0], e);
							return r[0] ? r : [r[1]]
						}
						var i = Array(2 * n),
							o = [.1, .1],
							s = [.1, .1],
							a = 0;
						iC(t[0], e, o), o[0] && (i[a++] = o[0]);
						for (var u = 1; u < n; ++u) {
							iC(t[u], e, s), iL(o[1], s[0], o), o[0] && (i[a++] = o[0]);
							var h = s[1],
								c = o[1],
								l = h + c,
								p = c - (l - h);
							o[1] = l, p && (i[a++] = p)
						}
						return o[1] && (i[a++] = o[1]), 0 === a && (i[a++] = 0), i.length = a, i
					},
					iO = function(t, e) {
						var n = 0 | t.length,
							r = 0 | e.length;
						if (1 === n && 1 === r) return a = (s = (i = t[0]) + (o = -e[0])) - i, (u = i - (s - a) + (o - a)) ? [u, s] : [s];
						var i, o, s, a, u, h, c, l = Array(n + r),
							p = 0,
							f = 0,
							g = 0,
							d = Math.abs,
							y = t[0],
							_ = d(y),
							m = -e[g],
							v = d(m);
						_ < v ? (c = y, (f += 1) < n && (_ = d(y = t[f]))) : (c = m, (g += 1) < r && (v = d(m = -e[g]))), f < n && _ < v || g >= r ? (h = y, (f += 1) < n && (_ = d(y = t[f]))) : (h = m, (g += 1) < r && (v = d(m = -e[g])));
						for (var x, E, b = h + c, I = b - h, N = c - I, w = N, C = b; f < n && g < r;) _ < v ? (h = y, (f += 1) < n && (_ = d(y = t[f]))) : (h = m, (g += 1) < r && (v = d(m = -e[g]))), (N = (c = w) - (I = (b = h + c) - h)) && (l[p++] = N), w = C - ((x = C + b) - (E = x - C)) + (b - E), C = x;
						for (; f < n;)(N = (c = w) - (I = (b = (h = y) + c) - h)) && (l[p++] = N), w = C - ((x = C + b) - (E = x - C)) + (b - E), C = x, (f += 1) < n && (y = t[f]);
						for (; g < r;)(N = (c = w) - (I = (b = (h = m) + c) - h)) && (l[p++] = N), w = C - ((x = C + b) - (E = x - C)) + (b - E), C = x, (g += 1) < r && (m = -e[g]);
						return w && (l[p++] = w), C && (l[p++] = C), p || (l[p++] = 0), l.length = p, l
					},
					iR = tg(function(t) {
						function e(t, e) {
							for (var n = Array(t.length - 1), r = 1; r < t.length; ++r)
								for (var i = n[r - 1] = Array(t.length - 1), o = 0, s = 0; o < t.length; ++o) o !== e && (i[s++] = t[r][o]);
							return n
						}

						function n(t) {
							if (1 === t.length) return t[0];
							if (2 === t.length) return ["sum(", t[0], ",", t[1], ")"].join("");
							var e = t.length >> 1;
							return ["sum(", n(t.slice(0, e)), ",", n(t.slice(e)), ")"].join("")
						}

						function r(t) {
							if (2 === t.length) return [
								["sum(prod(", t[0][0], ",", t[1][1], "),prod(-", t[0][1], ",", t[1][0], "))"].join("")
							];
							for (var i = [], o = 0; o < t.length; ++o) i.push(["scale(", n(r(e(t, o))), ",", 1 & o ? "-" : "", t[0][o], ")"].join(""));
							return i
						}

						function i(t) {
							for (var i = [], o = [], s = function(t) {
									for (var e = Array(t), n = 0; n < t; ++n) {
										e[n] = Array(t);
										for (var r = 0; r < t; ++r) e[n][r] = ["m", r, "[", t - n - 1, "]"].join("")
									}
									return e
								}(t), a = [], u = 0; u < t; ++u) 0 == (1 & u) ? i.push.apply(i, r(e(s, u))) : o.push.apply(o, r(e(s, u))), a.push("m" + u);
							var h = n(i),
								c = n(o),
								l = "orientation" + t + "Exact";
							return Function("sum", "prod", "scale", "sub", ["function ", l, "(", a.join(), "){var p=", h, ",n=", c, ",d=sub(p,n);return d[d.length-1];};return ", l].join(""))(iM, iC, iP, iO)
						}
						var o = i(3),
							s = i(4),
							a = [function() {
								return 0
							}, function() {
								return 0
							}, function(t, e) {
								return e[0] - t[0]
							}, function(t, e, n) {
								var r, i = (t[1] - n[1]) * (e[0] - n[0]),
									s = (t[0] - n[0]) * (e[1] - n[1]),
									a = i - s;
								if (i > 0) {
									if (s <= 0) return a;
									r = i + s
								} else {
									if (!(i < 0) || s >= 0) return a;
									r = -(i + s)
								}
								var u = 33306690738754716e-32 * r;
								return a >= u || a <= -u ? a : o(t, e, n)
							}, function(t, e, n, r) {
								var i = t[0] - r[0],
									o = e[0] - r[0],
									a = n[0] - r[0],
									u = t[1] - r[1],
									h = e[1] - r[1],
									c = n[1] - r[1],
									l = t[2] - r[2],
									p = e[2] - r[2],
									f = n[2] - r[2],
									g = o * c,
									d = a * h,
									y = a * u,
									_ = i * c,
									m = i * h,
									v = o * u,
									x = l * (g - d) + p * (y - _) + f * (m - v),
									E = 7771561172376103e-31 * ((Math.abs(g) + Math.abs(d)) * Math.abs(l) + (Math.abs(y) + Math.abs(_)) * Math.abs(p) + (Math.abs(m) + Math.abs(v)) * Math.abs(f));
								return x > E || -x > E ? x : s(t, e, n, r)
							}];
						! function() {
							for (; a.length <= 5;) a.push(i(a.length));
							for (var e = [], n = ["slow"], r = 0; r <= 5; ++r) e.push("a" + r), n.push("o" + r);
							var o = ["function getOrientation(", e.join(), "){switch(arguments.length){case 0:case 1:return 0;"];
							for (r = 2; r <= 5; ++r) o.push("case ", r, ":return o", r, "(", e.slice(0, r).join(), ");");
							o.push("}var s=new Array(arguments.length);for(var i=0;i<arguments.length;++i){s[i]=arguments[i]};return slow(s);}return getOrientation"), n.push(o.join(""));
							var s = Function.apply(void 0, n);
							for (t.exports = s.apply(void 0, [function(t) {
									var e = a[t.length];
									return e || (e = a[t.length] = i(t.length)), e.apply(void 0, t)
								}].concat(a)), r = 0; r <= 5; ++r) t.exports[r] = a[r]
						}()
					}),
					iT = function(t) {
						var e = t.length;
						if (e < 3) {
							for (var n = Array(e), r = 0; r < e; ++r) n[r] = r;
							return 2 === e && t[0][0] === t[1][0] && t[0][1] === t[1][1] ? [0] : n
						}
						var i = Array(e);
						for (r = 0; r < e; ++r) i[r] = r;
						i.sort(function(e, n) {
							return t[e][0] - t[n][0] || t[e][1] - t[n][1]
						});
						var o = [i[0], i[1]],
							s = [i[0], i[1]];
						for (r = 2; r < e; ++r) {
							for (var a = i[r], u = t[a], h = o.length; h > 1 && 0 >= iD(t[o[h - 2]], t[o[h - 1]], u);) h -= 1, o.pop();
							for (o.push(a), h = s.length; h > 1 && iD(t[s[h - 2]], t[s[h - 1]], u) >= 0;) h -= 1, s.pop();
							s.push(a)
						}
						n = Array(s.length + o.length - 2);
						for (var c = 0, l = (r = 0, o.length); r < l; ++r) n[c++] = o[r];
						for (var p = s.length - 2; p > 0; --p) n[c++] = s[p];
						return n
					},
					iD = iR[3],
					iA = td;
				td.prototype = {
					push: function(t) {
						this.data.push(t), this.length++, this._up(this.length - 1)
					},
					pop: function() {
						if (0 !== this.length) {
							var t = this.data[0];
							return this.length--, this.length > 0 && (this.data[0] = this.data[this.length], this._down(0)), this.data.pop(), t
						}
					},
					peek: function() {
						return this.data[0]
					},
					_up: function(t) {
						for (var e = this.data, n = this.compare, r = e[t]; t > 0;) {
							var i = t - 1 >> 1,
								o = e[i];
							if (n(r, o) >= 0) break;
							e[t] = o, t = i
						}
						e[t] = r
					},
					_down: function(t) {
						for (var e = this.data, n = this.compare, r = this.length >> 1, i = e[t]; t < r;) {
							var o = 1 + (t << 1),
								s = o + 1,
								a = e[o];
							if (s < this.length && 0 > n(e[s], a) && (o = s, a = e[s]), n(a, i) >= 0) break;
							e[t] = a, t = o
						}
						e[t] = i
					}
				}, iA.default = td;
				var iF = function(t, e) {
						for (var n = t[0], r = t[1], i = !1, o = 0, s = e.length - 1; o < e.length; s = o++) {
							var a = e[o][0],
								u = e[o][1],
								h = e[s][0],
								c = e[s][1];
							u > r != c > r && n < (h - a) * (r - u) / (c - u) + a && (i = !i)
						}
						return i
					},
					iq = iR[3],
					iG = ty;
				iG.default = ty;
				var iB = function(t) {
						return t
					},
					ik = function(t) {
						if (null == t) return iB;
						var e, n, r = t.scale[0],
							i = t.scale[1],
							o = t.translate[0],
							s = t.translate[1];
						return function(t, a) {
							a || (e = n = 0);
							var u = 2,
								h = t.length,
								c = Array(h);
							for (c[0] = (e += t[0]) * r + o, c[1] = (n += t[1]) * i + s; u < h;) c[u] = t[u], ++u;
							return c
						}
					},
					iz = function(t, e) {
						for (var n, r = t.length, i = r - e; i < --r;) n = t[i], t[i++] = t[r], t[r] = n
					},
					ij = function(t, e) {
						function n(t, e) {
							for (var n in t) {
								var i = t[n];
								delete e[i.start], delete i.start, delete i.end, i.forEach(function(t) {
									r[t < 0 ? ~t : t] = 1
								}), s.push(i)
							}
						}
						var r = {},
							i = {},
							o = {},
							s = [],
							a = -1;
						return e.forEach(function(n, r) {
							var i, o = t.arcs[n < 0 ? ~n : n];
							!(o.length < 3) || o[1][0] || o[1][1] || (i = e[++a], e[a] = n, e[r] = i)
						}), e.forEach(function(e) {
							var n, r, s, a, u, h = (s = (r = t.arcs[e < 0 ? ~e : e])[0], t.transform ? (n = [0, 0], r.forEach(function(t) {
									n[0] += t[0], n[1] += t[1]
								})) : n = r[r.length - 1], e < 0 ? [n, s] : [s, n]),
								c = h[0],
								l = h[1];
							if (a = o[c]) {
								if (delete o[a.end], a.push(e), a.end = l, u = i[l]) {
									delete i[u.start];
									var p = u === a ? a : a.concat(u);
									i[p.start = a.start] = o[p.end = u.end] = p
								} else i[a.start] = o[a.end] = a
							} else if (a = i[l]) {
								if (delete i[a.start], a.unshift(e), a.start = c, u = o[c]) {
									delete o[u.end];
									var f = u === a ? a : u.concat(a);
									i[f.start = u.start] = o[f.end = a.end] = f
								} else i[a.start] = o[a.end] = a
							} else i[(a = [e]).start = c] = o[a.end = l] = a
						}), n(o, i), n(i, o), e.forEach(function(t) {
							r[t < 0 ? ~t : t] || s.push([t])
						}), s
					},
					iX = function(t, e, n, r, i, o) {
						3 == arguments.length && (r = o = Array, i = null);
						for (var s = new r(t = 1 << Math.max(4, Math.ceil(Math.log(t) / Math.LN2))), a = new o(t), u = t - 1, h = 0; h < t; ++h) s[h] = i;
						return {
							set: function(r, o) {
								for (var h = e(r) & u, c = s[h], l = 0; c != i;) {
									if (n(c, r)) return a[h] = o;
									if (++l >= t) throw Error("full hashmap");
									c = s[h = h + 1 & u]
								}
								return s[h] = r, a[h] = o, o
							},
							maybeSet: function(r, o) {
								for (var h = e(r) & u, c = s[h], l = 0; c != i;) {
									if (n(c, r)) return a[h];
									if (++l >= t) throw Error("full hashmap");
									c = s[h = h + 1 & u]
								}
								return s[h] = r, a[h] = o, o
							},
							get: function(r, o) {
								for (var h = e(r) & u, c = s[h], l = 0; c != i;) {
									if (n(c, r)) return a[h];
									if (++l >= t) break;
									c = s[h = h + 1 & u]
								}
								return o
							},
							keys: function() {
								for (var t = [], e = 0, n = s.length; e < n; ++e) {
									var r = s[e];
									r != i && t.push(r)
								}
								return t
							}
						}
					},
					iU = function(t, e) {
						return t[0] === e[0] && t[1] === e[1]
					},
					iY = new ArrayBuffer(16),
					iV = new Float64Array(iY),
					iH = new Uint32Array(iY),
					iW = function(t) {
						iV[0] = t[0], iV[1] = t[1];
						var e = iH[0] ^ iH[1];
						return 2147483647 & (e = e << 5 ^ e >> 7 ^ iH[2] ^ iH[3])
					},
					iJ = function(t) {
						function e(t, e, n, r) {
							if (p[n] !== t) {
								p[n] = t;
								var i = f[n];
								if (i >= 0) {
									var o = g[n];
									i === e && o === r || i === r && o === e || (++y, d[n] = 1)
								} else f[n] = e, g[n] = r
							}
						}

						function n(t) {
							return iW(u[t])
						}

						function r(t, e) {
							return iU(u[t], u[e])
						}
						var i, o, s, a, u = t.coordinates,
							h = t.lines,
							c = t.rings,
							l = function() {
								for (var t = iX(1.4 * u.length, n, r, Int32Array, -1, Int32Array), e = new Int32Array(u.length), i = 0, o = u.length; i < o; ++i) e[i] = t.maybeSet(i, i);
								return e
							}(),
							p = new Int32Array(u.length),
							f = new Int32Array(u.length),
							g = new Int32Array(u.length),
							d = new Int8Array(u.length),
							y = 0;
						for (i = 0, o = u.length; i < o; ++i) p[i] = f[i] = g[i] = -1;
						for (i = 0, o = h.length; i < o; ++i) {
							var _ = h[i],
								m = _[0],
								v = _[1];
							for (s = l[m], a = l[++m], ++y, d[s] = 1; ++m <= v;) e(i, s, s = a, a = l[m]);
							++y, d[a] = 1
						}
						for (i = 0, o = u.length; i < o; ++i) p[i] = -1;
						for (i = 0, o = c.length; i < o; ++i) {
							var x = c[i],
								E = x[0] + 1,
								b = x[1];
							for (e(i, l[b - 1], s = l[E - 1], a = l[E]); ++E <= b;) e(i, s, s = a, a = l[E])
						}
						p = f = g = null;
						var I, N = function(t, e, n, r, i) {
							3 == arguments.length && (r = Array, i = null);
							for (var o = new r(t = 1 << Math.max(4, Math.ceil(Math.log(t) / Math.LN2))), s = t - 1, a = 0; a < t; ++a) o[a] = i;
							return {
								add: function(r) {
									for (var a = e(r) & s, u = o[a], h = 0; u != i;) {
										if (n(u, r)) return !0;
										if (++h >= t) throw Error("full hashset");
										u = o[a = a + 1 & s]
									}
									return o[a] = r, !0
								},
								has: function(r) {
									for (var a = e(r) & s, u = o[a], h = 0; u != i;) {
										if (n(u, r)) return !0;
										if (++h >= t) break;
										u = o[a = a + 1 & s]
									}
									return !1
								},
								values: function() {
									for (var t = [], e = 0, n = o.length; e < n; ++e) {
										var r = o[e];
										r != i && t.push(r)
									}
									return t
								}
							}
						}(1.4 * y, iW, iU);
						for (i = 0, o = u.length; i < o; ++i) d[I = l[i]] && N.add(u[I]);
						return N
					},
					iZ = function(t) {
						var e, n, r, i, o = iJ(t),
							s = t.coordinates,
							a = t.lines,
							u = t.rings;
						for (r = 0, i = a.length; r < i; ++r)
							for (var h = a[r], c = h[0], l = h[1]; ++c < l;) o.has(s[c]) && (n = {
								0: c,
								1: h[1]
							}, h[1] = c, h = h.next = n);
						for (r = 0, i = u.length; r < i; ++r)
							for (var p = u[r], f = p[0], g = f, d = p[1], y = o.has(s[f]); ++g < d;) o.has(s[g]) && (y ? (n = {
								0: g,
								1: p[1]
							}, p[1] = g, p = p.next = n) : (e = d - g, tG(s, f, d), tG(s, f, f + e), tG(s, f + e, d), s[d] = s[f], y = !0, g = f));
						return t
					},
					iK = function(t) {
						function e(t) {
							var e, n, r, i, o, s, u, h;
							if (r = l.get(e = a[t[0]])) {
								for (u = 0, h = r.length; u < h; ++u)
									if (function(t, e) {
											var n = t[0],
												r = e[0],
												i = t[1];
											if (n - i != r - e[1]) return !1;
											for (; n <= i; ++n, ++r)
												if (!iU(a[n], a[r])) return !1;
											return !0
										}(i = r[u], t)) return t[0] = i[0], void(t[1] = i[1])
							}
							if (o = l.get(n = a[t[1]])) {
								for (u = 0, h = o.length; u < h; ++u)
									if (function(t, e) {
											var n = t[0],
												r = e[0],
												i = t[1],
												o = e[1];
											if (n - i != r - o) return !1;
											for (; n <= i; ++n, --o)
												if (!iU(a[n], a[o])) return !1;
											return !0
										}(s = o[u], t)) return t[1] = s[0], void(t[0] = s[1])
							}
							r ? r.push(t) : l.set(e, [t]), o ? o.push(t) : l.set(n, [t]), p.push(t)
						}

						function n(t) {
							for (var e = t[0], n = t[1], r = e, i = r, o = a[r]; ++r < n;) {
								var s = a[r];
								(s[0] < o[0] || s[0] === o[0] && s[1] < o[1]) && (i = r, o = s)
							}
							return i - e
						}
						var r, i, o, s, a = t.coordinates,
							u = t.lines,
							h = t.rings,
							c = u.length + h.length;
						for (delete t.lines, delete t.rings, o = 0, s = u.length; o < s; ++o)
							for (r = u[o]; r = r.next;) ++c;
						for (o = 0, s = h.length; o < s; ++o)
							for (i = h[o]; i = i.next;) ++c;
						var l = iX(2 * c * 1.4, iW, iU),
							p = t.arcs = [];
						for (o = 0, s = u.length; o < s; ++o) {
							r = u[o];
							do e(r); while (r = r.next)
						}
						for (o = 0, s = h.length; o < s; ++o)
							if ((i = h[o]).next)
								do e(i); while (i = i.next);
							else ! function(t) {
								var e, r, i, o, s;
								if ((r = l.get(e = a[t[0]])) || (r = l.get(e = a[t[0] + n(t)])))
									for (o = 0, s = r.length; o < s; ++o) {
										if (function(t, e) {
												var r = t[0],
													i = e[0],
													o = t[1] - r;
												if (o !== e[1] - i) return !1;
												for (var s = n(t), u = n(e), h = 0; h < o; ++h)
													if (!iU(a[r + (h + s) % o], a[i + (h + u) % o])) return !1;
												return !0
											}(i = r[o], t)) return t[0] = i[0], void(t[1] = i[1]);
										if (function(t, e) {
												var r = t[0],
													i = e[0],
													o = t[1],
													s = e[1],
													u = o - r;
												if (u !== s - i) return !1;
												for (var h = n(t), c = u - n(e), l = 0; l < u; ++l)
													if (!iU(a[r + (l + h) % u], a[s - (l + c) % u])) return !1;
												return !0
											}(i, t)) return t[0] = i[1], void(t[1] = i[0])
									}
								r ? r.push(t) : l.set(e, [t]), p.push(t)
							}(i);
						return t
					},
					iQ = function(t, e) {
						function n(t) {
							t && c.hasOwnProperty(t.type) && c[t.type](t)
						}

						function r(t) {
							var e = [];
							do {
								var n = h.get(t);
								e.push(t[0] < t[1] ? n : ~n)
							} while (t = t.next);
							return e
						}

						function i(t) {
							return t.map(r)
						}
						var o = function(t) {
								function e(t) {
									null != t && h.hasOwnProperty(t.type) && h[t.type](t)
								}

								function n(t) {
									var e = t[0],
										n = t[1];
									e < o && (o = e), e > a && (a = e), n < s && (s = n), n > u && (u = n)
								}

								function r(t) {
									t.forEach(n)
								}

								function i(t) {
									t.forEach(r)
								}
								var o = 1 / 0,
									s = 1 / 0,
									a = -1 / 0,
									u = -1 / 0,
									h = {
										GeometryCollection: function(t) {
											t.geometries.forEach(e)
										},
										Point: function(t) {
											n(t.coordinates)
										},
										MultiPoint: function(t) {
											t.coordinates.forEach(n)
										},
										LineString: function(t) {
											r(t.arcs)
										},
										MultiLineString: function(t) {
											t.arcs.forEach(r)
										},
										Polygon: function(t) {
											t.arcs.forEach(r)
										},
										MultiPolygon: function(t) {
											t.arcs.forEach(i)
										}
									};
								for (var c in t) e(t[c]);
								return a >= o && u >= s ? [o, s, a, u] : void 0
							}(t = function(t) {
								var e, n, r = {};
								for (n in t) r[n] = null == (e = t[n]) ? {
									type: null
								} : ("FeatureCollection" === e.type ? function(t) {
									var e = {
										type: "GeometryCollection",
										geometries: t.features.map(tB)
									};
									return null != t.bbox && (e.bbox = t.bbox), e
								} : "Feature" === e.type ? tB : tk)(e);
								return r
							}(t)),
							s = e > 0 && o && function(t, e, n) {
								function r(t) {
									return [Math.round((t[0] - h) * f), Math.round((t[1] - c) * g)]
								}

								function i(t, e) {
									for (var n, r, i, o, s, a = -1, u = 0, l = t.length, p = Array(l); ++a < l;) o = Math.round(((n = t[a])[0] - h) * f), s = Math.round((n[1] - c) * g), o === r && s === i || (p[u++] = [r = o, i = s]);
									for (p.length = u; u < e;) u = p.push([p[0][0], p[0][1]]);
									return p
								}

								function o(t) {
									return i(t, 2)
								}

								function s(t) {
									return i(t, 4)
								}

								function a(t) {
									return t.map(s)
								}

								function u(t) {
									null != t && d.hasOwnProperty(t.type) && d[t.type](t)
								}
								var h = e[0],
									c = e[1],
									l = e[2],
									p = e[3],
									f = l - h ? (n - 1) / (l - h) : 1,
									g = p - c ? (n - 1) / (p - c) : 1,
									d = {
										GeometryCollection: function(t) {
											t.geometries.forEach(u)
										},
										Point: function(t) {
											t.coordinates = r(t.coordinates)
										},
										MultiPoint: function(t) {
											t.coordinates = t.coordinates.map(r)
										},
										LineString: function(t) {
											t.arcs = o(t.arcs)
										},
										MultiLineString: function(t) {
											t.arcs = t.arcs.map(o)
										},
										Polygon: function(t) {
											t.arcs = a(t.arcs)
										},
										MultiPolygon: function(t) {
											t.arcs = t.arcs.map(a)
										}
									};
								for (var y in t) u(t[y]);
								return {
									scale: [1 / f, 1 / g],
									translate: [h, c]
								}
							}(t, o, e),
							a = iK(iZ(function(t) {
								function e(t) {
									t && h.hasOwnProperty(t.type) && h[t.type](t)
								}

								function n(t) {
									for (var e = 0, n = t.length; e < n; ++e) u[++o] = t[e];
									var r = {
										0: o - n + 1,
										1: o
									};
									return s.push(r), r
								}

								function r(t) {
									for (var e = 0, n = t.length; e < n; ++e) u[++o] = t[e];
									var r = {
										0: o - n + 1,
										1: o
									};
									return a.push(r), r
								}

								function i(t) {
									return t.map(r)
								}
								var o = -1,
									s = [],
									a = [],
									u = [],
									h = {
										GeometryCollection: function(t) {
											t.geometries.forEach(e)
										},
										LineString: function(t) {
											t.arcs = n(t.arcs)
										},
										MultiLineString: function(t) {
											t.arcs = t.arcs.map(n)
										},
										Polygon: function(t) {
											t.arcs = t.arcs.map(r)
										},
										MultiPolygon: function(t) {
											t.arcs = t.arcs.map(i)
										}
									};
								for (var c in t) e(t[c]);
								return {
									type: "Topology",
									coordinates: u,
									lines: s,
									rings: a,
									objects: t
								}
							}(t))),
							u = a.coordinates,
							h = iX(1.4 * a.arcs.length, tz, tj);
						t = a.objects, a.bbox = o, a.arcs = a.arcs.map(function(t, e) {
							return h.set(t, e), u.slice(t[0], t[1] + 1)
						}), delete a.coordinates, u = null;
						var c = {
							GeometryCollection: function(t) {
								t.geometries.forEach(n)
							},
							LineString: function(t) {
								t.arcs = r(t.arcs)
							},
							MultiLineString: function(t) {
								t.arcs = t.arcs.map(r)
							},
							Polygon: function(t) {
								t.arcs = t.arcs.map(r)
							},
							MultiPolygon: function(t) {
								t.arcs = t.arcs.map(i)
							}
						};
						for (var l in t) n(t[l]);
						return s && (a.transform = s, a.arcs = function(t) {
							for (var e = -1, n = t.length; ++e < n;) {
								for (var r, i, o = t[e], s = 0, a = 1, u = o.length, h = o[0], c = h[0], l = h[1]; ++s < u;) r = (h = o[s])[0], i = h[1], r === c && i === l || (o[a++] = [r - c, i - l], c = r, l = i);
								1 === a && (o[a++] = [0, 0]), o.length = a
							}
							return t
						}(a.arcs)), a
					},
					i$ = function(t) {
						this.points = t.points || [], this.duration = t.duration || 1e4, this.sharpness = t.sharpness || .85, this.centers = [], this.controls = [], this.stepLength = t.stepLength || 60, this.length = this.points.length, this.delay = 0;
						for (var e = 0; e < this.length; e++) this.points[e].z = this.points[e].z || 0;
						for (e = 0; e < this.length - 1; e++) {
							var n = this.points[e],
								r = this.points[e + 1];
							this.centers.push({
								x: (n.x + r.x) / 2,
								y: (n.y + r.y) / 2,
								z: (n.z + r.z) / 2
							})
						}
						for (this.controls.push([this.points[0], this.points[0]]), e = 0; e < this.centers.length - 1; e++) {
							n = this.centers[e], r = this.centers[e + 1];
							var i = this.points[e + 1].x - (this.centers[e].x + this.centers[e + 1].x) / 2,
								o = this.points[e + 1].y - (this.centers[e].y + this.centers[e + 1].y) / 2,
								s = this.points[e + 1].z - (this.centers[e].y + this.centers[e + 1].z) / 2;
							this.controls.push([{
								x: (1 - this.sharpness) * this.points[e + 1].x + this.sharpness * (this.centers[e].x + i),
								y: (1 - this.sharpness) * this.points[e + 1].y + this.sharpness * (this.centers[e].y + o),
								z: (1 - this.sharpness) * this.points[e + 1].z + this.sharpness * (this.centers[e].z + s)
							}, {
								x: (1 - this.sharpness) * this.points[e + 1].x + this.sharpness * (this.centers[e + 1].x + i),
								y: (1 - this.sharpness) * this.points[e + 1].y + this.sharpness * (this.centers[e + 1].y + o),
								z: (1 - this.sharpness) * this.points[e + 1].z + this.sharpness * (this.centers[e + 1].z + s)
							}])
						}
						return this.controls.push([this.points[this.length - 1], this.points[this.length - 1]]), this.steps = this.cacheSteps(this.stepLength), this
					};
				i$.prototype.cacheSteps = function(t) {
					var e = [],
						n = this.pos(0);
					e.push(0);
					for (var r = 0; r < this.duration; r += 10) {
						var i = this.pos(r);
						Math.sqrt((i.x - n.x) * (i.x - n.x) + (i.y - n.y) * (i.y - n.y) + (i.z - n.z) * (i.z - n.z)) > t && (e.push(r), n = i)
					}
					return e
				}, i$.prototype.vector = function(t) {
					var e = this.pos(t + 10),
						n = this.pos(t - 10);
					return {
						angle: 180 * Math.atan2(e.y - n.y, e.x - n.x) / 3.14,
						speed: Math.sqrt((n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y) + (n.z - e.z) * (n.z - e.z))
					}
				}, i$.prototype.pos = function(t) {
					var e, n, r, i, o, s, a, u = t - this.delay;
					u < 0 && (u = 0), u > this.duration && (u = this.duration - 1);
					var h = u / this.duration;
					if (h >= 1) return this.points[this.length - 1];
					var c = Math.floor((this.points.length - 1) * h);
					return e = (this.length - 1) * h - c, n = this.points[c], r = this.controls[c][1], i = this.controls[c + 1][0], o = this.points[c + 1], a = [(s = e * e) * e, 3 * s * (1 - e), 3 * e * (1 - e) * (1 - e), (1 - e) * (1 - e) * (1 - e)], {
						x: o.x * a[0] + i.x * a[1] + r.x * a[2] + n.x * a[3],
						y: o.y * a[0] + i.y * a[1] + r.y * a[2] + n.y * a[3],
						z: o.z * a[0] + i.z * a[1] + r.z * a[2] + n.z * a[3]
					}
				};
				var i0 = t6;
				t6.deviation = function(t, e, n, r) {
					var i = e && e.length,
						o = i ? e[0] * n : t.length,
						s = Math.abs(eh(t, 0, o, n));
					if (i)
						for (var a = 0, u = e.length; a < u; a++) {
							var h = e[a] * n,
								c = a < u - 1 ? e[a + 1] * n : t.length;
							s -= Math.abs(eh(t, h, c, n))
						}
					var l = 0;
					for (a = 0; a < r.length; a += 3) {
						var p = r[a] * n,
							f = r[a + 1] * n,
							g = r[a + 2] * n;
						l += Math.abs((t[p] - t[g]) * (t[f + 1] - t[p + 1]) - (t[p] - t[f]) * (t[g + 1] - t[p + 1]))
					}
					return 0 === s && 0 === l ? 0 : Math.abs((l - s) / s)
				}, t6.flatten = function(t) {
					for (var e = t[0][0].length, n = {
							vertices: [],
							holes: [],
							dimensions: e
						}, r = 0, i = 0; i < t.length; i++) {
						for (var o = 0; o < t[i].length; o++)
							for (var s = 0; s < e; s++) n.vertices.push(t[i][o][s]);
						i > 0 && (r += t[i - 1].length, n.holes.push(r))
					}
					return n
				}, i0.default = t6, ef.prototype = {
					all: function() {
						return this._all(this.data, [])
					},
					search: function(t) {
						var e = this.data,
							n = [],
							r = this.toBBox;
						if (!eb(t, e)) return n;
						for (var i, o, s, a, u = []; e;) {
							for (i = 0, o = e.children.length; i < o; i++) s = e.children[i], eb(t, a = e.leaf ? r(s) : s) && (e.leaf ? n.push(s) : eE(t, a) ? this._all(s, n) : u.push(s));
							e = u.pop()
						}
						return n
					},
					collides: function(t) {
						var e = this.data,
							n = this.toBBox;
						if (!eb(t, e)) return !1;
						for (var r, i, o, s, a = []; e;) {
							for (r = 0, i = e.children.length; r < i; r++)
								if (o = e.children[r], eb(t, s = e.leaf ? n(o) : o)) {
									if (e.leaf || eE(t, s)) return !0;
									a.push(o)
								} e = a.pop()
						}
						return !1
					},
					load: function(t) {
						if (!t || !t.length) return this;
						if (t.length < this._minEntries) {
							for (var e = 0, n = t.length; e < n; e++) this.insert(t[e]);
							return this
						}
						var r = this._build(t.slice(), 0, t.length - 1, 0);
						if (this.data.children.length) {
							if (this.data.height === r.height) this._splitRoot(this.data, r);
							else {
								if (this.data.height < r.height) {
									var i = this.data;
									this.data = r, r = i
								}
								this._insert(r, this.data.height - r.height - 1, !0)
							}
						} else this.data = r;
						return this
					},
					insert: function(t) {
						return t && this._insert(t, this.data.height - 1), this
					},
					clear: function() {
						return this.data = eI([]), this
					},
					remove: function(t, e) {
						if (!t) return this;
						for (var n, r, i, o, s = this.data, a = this.toBBox(t), u = [], h = []; s || u.length;) {
							if (s || (s = u.pop(), r = u[u.length - 1], n = h.pop(), o = !0), s.leaf && -1 !== (i = function(t, e, n) {
									if (!n) return e.indexOf(t);
									for (var r = 0; r < e.length; r++)
										if (n(t, e[r])) return r;
									return -1
								}(t, s.children, e))) return s.children.splice(i, 1), u.push(s), this._condense(u), this;
							o || s.leaf || !eE(s, a) ? r ? (n++, s = r.children[n], o = !1) : s = null : (u.push(s), h.push(n), n = 0, r = s, s = s.children[0])
						}
						return this
					},
					toBBox: function(t) {
						return t
					},
					compareMinX: e_,
					compareMinY: em,
					toJSON: function() {
						return this.data
					},
					fromJSON: function(t) {
						return this.data = t, this
					},
					_all: function(t, e) {
						for (var n = []; t;) t.leaf ? e.push.apply(e, t.children) : n.push.apply(n, t.children), t = n.pop();
						return e
					},
					_build: function(t, e, n, r) {
						var i, o = n - e + 1,
							s = this._maxEntries;
						if (o <= s) return eg(i = eI(t.slice(e, n + 1)), this.toBBox), i;
						r || (r = Math.ceil(Math.log(o) / Math.log(s)), s = Math.ceil(o / Math.pow(s, r - 1))), (i = eI([])).leaf = !1, i.height = r;
						var a, u, h, c, l = Math.ceil(o / s),
							p = l * Math.ceil(Math.sqrt(s));
						for (eN(t, e, n, p, this.compareMinX), a = e; a <= n; a += p)
							for (eN(t, a, h = Math.min(a + p - 1, n), l, this.compareMinY), u = a; u <= h; u += l) c = Math.min(u + l - 1, h), i.children.push(this._build(t, u, c, r - 1));
						return eg(i, this.toBBox), i
					},
					_chooseSubtree: function(t, e, n, r) {
						for (var i, o, s, a, u, h, c, l; r.push(e), !e.leaf && r.length - 1 !== n;) {
							for (c = l = 1 / 0, i = 0, o = e.children.length; i < o; i++) u = ev(s = e.children[i]), (h = (Math.max(s.maxX, t.maxX) - Math.min(s.minX, t.minX)) * (Math.max(s.maxY, t.maxY) - Math.min(s.minY, t.minY)) - u) < l ? (l = h, c = u < c ? u : c, a = s) : h === l && u < c && (c = u, a = s);
							e = a || e.children[0]
						}
						return e
					},
					_insert: function(t, e, n) {
						var r = this.toBBox,
							i = n ? t : r(t),
							o = [],
							s = this._chooseSubtree(i, this.data, e, o);
						for (s.children.push(t), ey(s, i); e >= 0 && o[e].children.length > this._maxEntries;) this._split(o, e), e--;
						this._adjustParentBBoxes(i, o, e)
					},
					_split: function(t, e) {
						var n = t[e],
							r = n.children.length,
							i = this._minEntries;
						this._chooseSplitAxis(n, i, r);
						var o = this._chooseSplitIndex(n, i, r),
							s = eI(n.children.splice(o, n.children.length - o));
						s.height = n.height, s.leaf = n.leaf, eg(n, this.toBBox), eg(s, this.toBBox), e ? t[e - 1].children.push(s) : this._splitRoot(n, s)
					},
					_splitRoot: function(t, e) {
						this.data = eI([t, e]), this.data.height = t.height + 1, this.data.leaf = !1, eg(this.data, this.toBBox)
					},
					_chooseSplitIndex: function(t, e, n) {
						var r, i, o, s, a, u, h, c;
						for (u = h = 1 / 0, r = e; r <= n - e; r++) s = function(t, e) {
							var n = Math.max(t.minX, e.minX),
								r = Math.max(t.minY, e.minY);
							return Math.max(0, Math.min(t.maxX, e.maxX) - n) * Math.max(0, Math.min(t.maxY, e.maxY) - r)
						}(i = ed(t, 0, r, this.toBBox), o = ed(t, r, n, this.toBBox)), a = ev(i) + ev(o), s < u ? (u = s, c = r, h = a < h ? a : h) : s === u && a < h && (h = a, c = r);
						return c
					},
					_chooseSplitAxis: function(t, e, n) {
						var r = t.leaf ? this.compareMinX : e_,
							i = t.leaf ? this.compareMinY : em;
						this._allDistMargin(t, e, n, r) < this._allDistMargin(t, e, n, i) && t.children.sort(r)
					},
					_allDistMargin: function(t, e, n, r) {
						t.children.sort(r);
						var i, o, s = this.toBBox,
							a = ed(t, 0, e, s),
							u = ed(t, n - e, n, s),
							h = ex(a) + ex(u);
						for (i = e; i < n - e; i++) o = t.children[i], ey(a, t.leaf ? s(o) : o), h += ex(a);
						for (i = n - e - 1; i >= e; i--) o = t.children[i], ey(u, t.leaf ? s(o) : o), h += ex(u);
						return h
					},
					_adjustParentBBoxes: function(t, e, n) {
						for (var r = n; r >= 0; r--) ey(e[r], t)
					},
					_condense: function(t) {
						for (var e, n = t.length - 1; n >= 0; n--) 0 === t[n].children.length ? n > 0 ? (e = t[n - 1].children).splice(e.indexOf(t[n]), 1) : this.clear() : eg(t[n], this.toBBox)
					},
					_initFormat: function(t) {
						var e = ["return a", " - b", ";"];
						this.compareMinX = Function("a", "b", e.join(t[0])), this.compareMinY = Function("a", "b", e.join(t[1])), this.toBBox = Function("a", "return {minX: a" + t[0] + ", minY: a" + t[1] + ", maxX: a" + t[2] + ", maxY: a" + t[3] + "};")
					}
				};
				var i1 = Object.freeze({
						toMercator: eA,
						toWgs84: eF
					}),
					i2 = 6378137,
					i3 = function(t, e, n) {
						function r(t, n, r, i) {
							var u, h, c = o[t][n],
								l = o[t][n + 1],
								p = o[r][i],
								f = o[r][i + 1],
								g = function(t, e, n, r) {
									if (e2(t, n) || e2(t, r) || e2(e, n) || e2(r, n)) return null;
									var i = t[0],
										o = t[1],
										s = e[0],
										a = e[1],
										u = n[0],
										h = n[1],
										c = r[0],
										l = r[1],
										p = (i - s) * (h - l) - (o - a) * (u - c);
									return 0 === p ? null : [((i * a - o * s) * (u - c) - (i - s) * (u * l - h * c)) / p, ((i * a - o * s) * (h - l) - (o - a) * (u * l - h * c)) / p]
								}(c, l, p, f);
							if (null !== g && (u = l[0] !== c[0] ? (g[0] - c[0]) / (l[0] - c[0]) : (g[1] - c[1]) / (l[1] - c[1]), h = f[0] !== p[0] ? (g[0] - p[0]) / (f[0] - p[0]) : (g[1] - p[1]) / (f[1] - p[1]), !(u >= 1 || u <= 0 || h >= 1 || h <= 0))) {
								var d = !a[g];
								d && (a[g] = !0), e ? s.push(e(g, t, n, c, l, u, r, i, p, f, h, d)) : s.push(g)
							}
						}

						function i(t, e) {
							var n, r, i, s, a = o[t][e],
								u = o[t][e + 1];
							return a[0] < u[0] ? (n = a[0], r = u[0]) : (n = u[0], r = a[0]), a[1] < u[1] ? (i = a[1], s = u[1]) : (i = u[1], s = a[1]), {
								minX: n,
								minY: i,
								maxX: r,
								maxY: s,
								ring: t,
								edge: e
							}
						}
						if ("Polygon" !== t.geometry.type) throw Error("The input feature must be a Polygon");
						void 0 === n && (n = 1);
						var o = t.geometry.coordinates,
							s = [],
							a = {};
						if (n) {
							for (var u = [], h = 0; h < o.length; h++)
								for (var c = 0; c < o[h].length - 1; c++) u.push(i(h, c));
							var l = iw();
							l.load(u)
						}
						for (var p = 0; p < o.length; p++)
							for (var f = 0; f < o[p].length - 1; f++)
								if (n) l.search(i(p, f)).forEach(function(t) {
									var e = t.ring,
										n = t.edge;
									r(p, f, e, n)
								});
								else
									for (var g = 0; g < o.length; g++)
										for (var d = 0; d < o[g].length - 1; d++) r(p, f, g, d);
						return e || (s = {
							type: "Feature",
							geometry: {
								type: "MultiPoint",
								coordinates: s
							}
						}), s
					},
					i4 = function(t) {
						function e() {
							for (var t = [], e = 0; e < f.features.length; e++) - 1 == f.features[e].properties.parent && t.push(e);
							if (t.length > 1)
								for (e = 0; e < t.length; e++) {
									for (var n = -1, r = 0; r < f.features.length; r++) t[e] != r && tC(f.features[t[e]].geometry.coordinates[0][0], f.features[r], {
										ignoreBoundary: !0
									}) && eU(f.features[r]) < 1 / 0 && (n = r);
									f.features[t[e]].properties.parent = n
								}
						}

						function n() {
							for (var t = 0; t < f.features.length; t++)
								if (-1 == f.features[t].properties.parent) {
									var e = f.features[t].properties.winding;
									f.features[t].properties.netWinding = e,
										function t(e, n) {
											for (var r = 0; r < f.features.length; r++)
												if (f.features[r].properties.parent == e) {
													var i = n + f.features[r].properties.winding;
													f.features[r].properties.netWinding = i, t(r, i)
												}
										}(t, e)
								}
						}
						if ("Feature" != t.type) throw Error("The input must a geojson object of type Feature");
						if (void 0 === t.geometry || null == t.geometry) throw Error("The input must a geojson object with a non-empty geometry");
						if ("Polygon" != t.geometry.type) throw Error("The input must be a geojson Polygon");
						for (var r = t.geometry.coordinates.length, i = [], s = 0; s < r; s++) {
							var a = t.geometry.coordinates[s];
							e4(a[0], a[a.length - 1]) || a.push(a[0]), i.push.apply(i, a.slice(0, a.length - 1))
						}
						if (! function(t) {
								for (var e = {}, n = 1, r = 0, i = t.length; r < i; ++r) {
									if (e.hasOwnProperty(t[r])) {
										n = 0;
										break
									}
									e[t[r]] = 1
								}
								return n
							}(i)) throw Error("The input polygon may not have duplicate vertices (except for the first and last vertex of each ring)");
						var u = i.length,
							c = i3(t, function(t, e, n, r, i, o, s, a, u, h, c, l) {
								return [t, e, n, r, i, o, s, a, u, h, c, l]
							}),
							l = c.length;
						if (0 == l) {
							var p = [];
							for (s = 0; s < r; s++) p.push(o([t.geometry.coordinates[s]], {
								parent: -1,
								winding: function(t) {
									for (var e = 0, n = 0; n < t.length - 1; n++) t[n][0] < t[e][0] && (e = n);
									if (e3([t[(e - 1).modulo(t.length - 1)], t[e], t[(e + 1).modulo(t.length - 1)]], !0)) var r = 1;
									else r = -1;
									return r
								}(t.geometry.coordinates[s])
							}));
							var f = h(p);
							return e(), n(), f
						}
						var g = [],
							d = [];
						for (s = 0; s < r; s++) {
							g.push([]);
							for (var y = 0; y < t.geometry.coordinates[s].length - 1; y++) g[s].push([new i6(t.geometry.coordinates[s][(y + 1).modulo(t.geometry.coordinates[s].length - 1)], 1, [s, y], [s, (y + 1).modulo(t.geometry.coordinates[s].length - 1)], void 0)]), d.push(new i8(t.geometry.coordinates[s][y], [s, (y - 1).modulo(t.geometry.coordinates[s].length - 1)], [s, y], void 0, void 0, !1, !0))
						}
						for (s = 0; s < l; s++) g[c[s][1]][c[s][2]].push(new i6(c[s][0], c[s][5], [c[s][1], c[s][2]], [c[s][6], c[s][7]], void 0)), c[s][11] && d.push(new i8(c[s][0], [c[s][1], c[s][2]], [c[s][6], c[s][7]], void 0, void 0, !0, !0));
						var _ = d.length;
						for (s = 0; s < g.length; s++)
							for (y = 0; y < g[s].length; y++) g[s][y].sort(function(t, e) {
								return t.param < e.param ? -1 : 1
							});
						var m = [];
						for (s = 0; s < _; s++) m.push({
							minX: d[s].coord[0],
							minY: d[s].coord[1],
							maxX: d[s].coord[0],
							maxY: d[s].coord[1],
							index: s
						});
						var v = iw();
						for (v.load(m), s = 0; s < g.length; s++)
							for (y = 0; y < g[s].length; y++)
								for (var x = 0; x < g[s][y].length; x++) {
									b = x == g[s][y].length - 1 ? g[s][(y + 1).modulo(t.geometry.coordinates[s].length - 1)][0].coord : g[s][y][x + 1].coord;
									var E = v.search({
										minX: b[0],
										minY: b[1],
										maxX: b[0],
										maxY: b[1]
									})[0];
									g[s][y][x].nxtIsectAlongEdgeIn = E.index
								}
						for (s = 0; s < g.length; s++)
							for (y = 0; y < g[s].length; y++)
								for (x = 0; x < g[s][y].length; x++) {
									var b = g[s][y][x].coord,
										I = (E = v.search({
											minX: b[0],
											minY: b[1],
											maxX: b[0],
											maxY: b[1]
										})[0]).index;
									I < u ? d[I].nxtIsectAlongRingAndEdge2 = g[s][y][x].nxtIsectAlongEdgeIn : e4(d[I].ringAndEdge1, g[s][y][x].ringAndEdgeIn) ? d[I].nxtIsectAlongRingAndEdge1 = g[s][y][x].nxtIsectAlongEdgeIn : d[I].nxtIsectAlongRingAndEdge2 = g[s][y][x].nxtIsectAlongEdgeIn
								}
						var N = [];
						for (s = 0, y = 0; y < r; y++) {
							var w = s;
							for (x = 0; x < t.geometry.coordinates[y].length - 1; x++) d[s].coord[0] < d[w].coord[0] && (w = s), s++;
							var C = d[w].nxtIsectAlongRingAndEdge2;
							for (x = 0; x < d.length; x++)
								if (d[x].nxtIsectAlongRingAndEdge1 == w || d[x].nxtIsectAlongRingAndEdge2 == w) {
									var S = x;
									break
								} var M = e3([d[S].coord, d[w].coord, d[C].coord], !0) ? 1 : -1;
							N.push({
								isect: w,
								parent: -1,
								winding: M
							})
						}
						for (N.sort(function(t, e) {
								return d[t.isect].coord > d[e.isect].coord ? -1 : 1
							}), p = []; N.length > 0;) {
							var L = N.pop(),
								P = L.isect,
								O = L.parent,
								R = L.winding,
								T = p.length,
								D = [d[P].coord],
								A = P;
							if (d[P].ringAndEdge1Walkable) var F = d[P].ringAndEdge1,
								q = d[P].nxtIsectAlongRingAndEdge1;
							else F = d[P].ringAndEdge2, q = d[P].nxtIsectAlongRingAndEdge2;
							for (; !e4(d[P].coord, d[q].coord);) {
								D.push(d[q].coord);
								var G = void 0;
								for (s = 0; s < N.length; s++)
									if (N[s].isect == q) {
										G = s;
										break
									} if (void 0 != G && N.splice(G, 1), e4(F, d[q].ringAndEdge1)) {
									if (F = d[q].ringAndEdge2, d[q].ringAndEdge2Walkable = !1, d[q].ringAndEdge1Walkable) {
										var B = {
											isect: q
										};
										e3([d[A].coord, d[q].coord, d[d[q].nxtIsectAlongRingAndEdge2].coord], 1 == R) ? (B.parent = O, B.winding = -R) : (B.parent = T, B.winding = R), N.push(B)
									}
									A = q, q = d[q].nxtIsectAlongRingAndEdge2
								} else F = d[q].ringAndEdge1, d[q].ringAndEdge1Walkable = !1, d[q].ringAndEdge2Walkable && (B = {
									isect: q
								}, e3([d[A].coord, d[q].coord, d[d[q].nxtIsectAlongRingAndEdge1].coord], 1 == R) ? (B.parent = O, B.winding = -R) : (B.parent = T, B.winding = R), N.push(B)), A = q, q = d[q].nxtIsectAlongRingAndEdge1
							}
							D.push(d[q].coord), p.push(o([D], {
								index: T,
								parent: O,
								winding: R,
								netWinding: void 0
							}))
						}
						return f = h(p), e(), n(), f
					},
					i6 = function(t, e, n, r, i) {
						this.coord = t, this.param = e, this.ringAndEdgeIn = n, this.ringAndEdgeOut = r, this.nxtIsectAlongEdgeIn = i
					},
					i8 = function(t, e, n, r, i, o, s) {
						this.coord = t, this.ringAndEdge1 = e, this.ringAndEdge2 = n, this.nxtIsectAlongRingAndEdge1 = r, this.nxtIsectAlongRingAndEdge2 = i, this.ringAndEdge1Walkable = o, this.ringAndEdge2Walkable = s
					};
				Number.prototype.modulo = function(t) {
					return (this % t + t) % t
				};
				var i5 = Math.PI / 180,
					i9 = 180 / Math.PI,
					i7 = function(t, e) {
						this.lon = t, this.lat = e, this.x = i5 * t, this.y = i5 * e
					};
				i7.prototype.view = function() {
					return String(this.lon).slice(0, 4) + "," + String(this.lat).slice(0, 4)
				}, i7.prototype.antipode = function() {
					var t = -1 * this.lat;
					return new i7(this.lon < 0 ? 180 + this.lon : -1 * (180 - this.lon), t)
				};
				var ot = function() {
					this.coords = [], this.length = 0
				};
				ot.prototype.move_to = function(t) {
					this.length++, this.coords.push(t)
				};
				var oe = function(t) {
					this.properties = t || {}, this.geometries = []
				};
				oe.prototype.json = function() {
					if (this.geometries.length <= 0) return {
						geometry: {
							type: "LineString",
							coordinates: null
						},
						type: "Feature",
						properties: this.properties
					};
					if (1 === this.geometries.length) return {
						geometry: {
							type: "LineString",
							coordinates: this.geometries[0].coords
						},
						type: "Feature",
						properties: this.properties
					};
					for (var t = [], e = 0; e < this.geometries.length; e++) t.push(this.geometries[e].coords);
					return {
						geometry: {
							type: "MultiLineString",
							coordinates: t
						},
						type: "Feature",
						properties: this.properties
					}
				}, oe.prototype.wkt = function() {
					for (var t = "", e = "LINESTRING(", n = function(t) {
							e += t[0] + " " + t[1] + ","
						}, r = 0; r < this.geometries.length; r++) {
						if (0 === this.geometries[r].coords.length) return "LINESTRING(empty)";
						this.geometries[r].coords.forEach(n), t += e.substring(0, e.length - 1) + ")"
					}
					return t
				};
				var on = function(t, e, n) {
					if (!t || void 0 === t.x || void 0 === t.y || !e || void 0 === e.x || void 0 === e.y) throw Error("GreatCircle constructor expects two args: start and end objects with x and y properties");
					this.start = new i7(t.x, t.y), this.end = new i7(e.x, e.y), this.properties = n || {};
					var r = this.start.x - this.end.x,
						i = Math.pow(Math.sin((this.start.y - this.end.y) / 2), 2) + Math.cos(this.start.y) * Math.cos(this.end.y) * Math.pow(Math.sin(r / 2), 2);
					if (this.g = 2 * Math.asin(Math.sqrt(i)), this.g === Math.PI) throw Error("it appears " + t.view() + " and " + e.view() + " are 'antipodal', e.g diametrically opposite, thus there is no single route but rather infinite");
					if (isNaN(this.g)) throw Error("could not calculate great circle between " + t + " and " + e)
				};
				on.prototype.interpolate = function(t) {
					var e = Math.sin((1 - t) * this.g) / Math.sin(this.g),
						n = Math.sin(t * this.g) / Math.sin(this.g),
						r = e * Math.cos(this.start.y) * Math.cos(this.start.x) + n * Math.cos(this.end.y) * Math.cos(this.end.x),
						i = e * Math.cos(this.start.y) * Math.sin(this.start.x) + n * Math.cos(this.end.y) * Math.sin(this.end.x),
						o = i9 * Math.atan2(e * Math.sin(this.start.y) + n * Math.sin(this.end.y), Math.sqrt(Math.pow(r, 2) + Math.pow(i, 2)));
					return [i9 * Math.atan2(i, r), o]
				}, on.prototype.Arc = function(t, e) {
					var n = [];
					if (!t || t <= 2) n.push([this.start.lon, this.start.lat]), n.push([this.end.lon, this.end.lat]);
					else
						for (var r = 1 / (t - 1), i = 0; i < t; ++i) {
							var o = r * i,
								s = this.interpolate(o);
							n.push(s)
						}
					for (var a = !1, u = 0, h = e && e.offset ? e.offset : 10, c = 180 - h, l = -180 + h, p = 360 - h, f = 1; f < n.length; ++f) {
						var g = n[f - 1][0],
							d = n[f][0],
							y = Math.abs(d - g);
						y > p && (d > c && g < l || g > c && d < l) ? a = !0 : y > u && (u = y)
					}
					var _ = [];
					if (a && u < h) {
						var m = [];
						_.push(m);
						for (var v = 0; v < n.length; ++v) {
							var x = parseFloat(n[v][0]);
							if (v > 0 && Math.abs(x - n[v - 1][0]) > p) {
								var E = parseFloat(n[v - 1][0]),
									b = parseFloat(n[v - 1][1]),
									I = parseFloat(n[v][0]),
									N = parseFloat(n[v][1]);
								if (E > -180 && E < l && 180 === I && v + 1 < n.length && n[v - 1][0] > -180 && n[v - 1][0] < l) {
									m.push([-180, n[v][1]]), v++, m.push([n[v][0], n[v][1]]);
									continue
								}
								if (E > c && E < 180 && -180 === I && v + 1 < n.length && n[v - 1][0] > c && n[v - 1][0] < 180) {
									m.push([180, n[v][1]]), v++, m.push([n[v][0], n[v][1]]);
									continue
								}
								if (E < l && I > c) {
									var w = E;
									E = I, I = w;
									var C = b;
									b = N, N = C
								}
								if (E > c && I < l && (I += 360), E <= 180 && I >= 180 && E < I) {
									var S = (180 - E) / (I - E),
										M = S * N + (1 - S) * b;
									m.push([n[v - 1][0] > c ? 180 : -180, M]), (m = []).push([n[v - 1][0] > c ? -180 : 180, M]), _.push(m)
								} else m = [], _.push(m);
								m.push([x, n[v][1]])
							} else m.push([n[v][0], n[v][1]])
						}
					} else {
						var L = [];
						_.push(L);
						for (var P = 0; P < n.length; ++P) L.push([n[P][0], n[P][1]])
					}
					for (var O = new oe(this.properties), R = 0; R < _.length; ++R) {
						var T = new ot;
						O.geometries.push(T);
						for (var D = _[R], A = 0; A < D.length; ++A) T.move_to(D[A])
					}
					return O
				};
				var or = ns;
				ns.polyline = ns, ns.polygon = function(t, e) {
					var n, r, i, o, s, a, u;
					for (r = 1; r <= 8; r *= 2) {
						for (n = [], o = !(nu(i = t[t.length - 1], e) & r), s = 0; s < t.length; s++)(u = !(nu(a = t[s], e) & r)) !== o && n.push(na(i, a, r, e)), u && n.push(a), i = a, o = u;
						if (!(t = n).length) break
					}
					return n
				};
				var oi = Array.prototype.slice,
					oo = {
						successCallback: null,
						verbose: !1,
						polygons: !1
					},
					os = {},
					oa = [],
					ou = [],
					oh = [],
					oc = [],
					ol = [],
					op = [],
					of = [],
					og = [],
					od = [],
					oy = [],
					o_ = [],
					om = [],
					ov = [],
					ox = [],
					oE = [],
					ob = [],
					oI = [],
					oN = [],
					ow = [],
					oC = [],
					oS = [],
					oM = [],
					oL = [],
					oP = [];
				of [85] = oy[85] = -1, og[85] = o_[85] = 0, od[85] = om[85] = 1, ow[85] = oM[85] = 1, oC[85] = oL[85] = 0, oS[85] = oP[85] = 1, oa[85] = oc[85] = 0, ou[85] = ol[85] = -1, oh[85] = oE[85] = 0, ob[85] = ov[85] = 0, oI[85] = ox[85] = 1, op[85] = oN[85] = 1, oM[1] = oM[169] = 0, oL[1] = oL[169] = -1, oP[1] = oP[169] = 0, ov[1] = ov[169] = -1, ox[1] = ox[169] = 0, oE[1] = oE[169] = 0, oy[4] = oy[166] = 0, o_[4] = o_[166] = -1, om[4] = om[166] = 1, ob[4] = ob[166] = 1, oI[4] = oI[166] = 0, oN[4] = oN[166] = 0, of [16] = of [154] = 0, og[16] = og[154] = 1, od[16] = od[154] = 1, oc[16] = oc[154] = 1, ol[16] = ol[154] = 0, op[16] = op[154] = 1, ow[64] = ow[106] = 0, oC[64] = oC[106] = 1, oS[64] = oS[106] = 0, oa[64] = oa[106] = -1, ou[64] = ou[106] = 0, oh[64] = oh[106] = 1, ow[2] = ow[168] = 0, oC[2] = oC[168] = -1, oS[2] = oS[168] = 1, oM[2] = oM[168] = 0, oL[2] = oL[168] = -1, oP[2] = oP[168] = 0, ov[2] = ov[168] = -1, ox[2] = ox[168] = 0, oE[2] = oE[168] = 0, ob[2] = ob[168] = -1, oI[2] = oI[168] = 0, oN[2] = oN[168] = 1, of [8] = of [162] = 0, og[8] = og[162] = -1, od[8] = od[162] = 0, oy[8] = oy[162] = 0, o_[8] = o_[162] = -1, om[8] = om[162] = 1, ov[8] = ov[162] = 1, ox[8] = ox[162] = 0, oE[8] = oE[162] = 1, ob[8] = ob[162] = 1, oI[8] = oI[162] = 0, oN[8] = oN[162] = 0, of [32] = of [138] = 0, og[32] = og[138] = 1, od[32] = od[138] = 1, oy[32] = oy[138] = 0, o_[32] = o_[138] = 1, om[32] = om[138] = 0, oa[32] = oa[138] = 1, ou[32] = ou[138] = 0, oh[32] = oh[138] = 0, oc[32] = oc[138] = 1, ol[32] = ol[138] = 0, op[32] = op[138] = 1, oM[128] = oM[42] = 0, oL[128] = oL[42] = 1, oP[128] = oP[42] = 1, ow[128] = ow[42] = 0, oC[128] = oC[42] = 1, oS[128] = oS[42] = 0, oa[128] = oa[42] = -1, ou[128] = ou[42] = 0, oh[128] = oh[42] = 1, oc[128] = oc[42] = -1, ol[128] = ol[42] = 0, op[128] = op[42] = 0, oy[5] = oy[165] = -1, o_[5] = o_[165] = 0, om[5] = om[165] = 0, oM[5] = oM[165] = 1, oL[5] = oL[165] = 0, oP[5] = oP[165] = 0, ob[20] = ob[150] = 0, oI[20] = oI[150] = 1, oN[20] = oN[150] = 1, oc[20] = oc[150] = 0, ol[20] = ol[150] = -1, op[20] = op[150] = 1, of [80] = of [90] = -1, og[80] = og[90] = 0, od[80] = od[90] = 1, ow[80] = ow[90] = 1, oC[80] = oC[90] = 0, oS[80] = oS[90] = 1, ov[65] = ov[105] = 0, ox[65] = ox[105] = 1, oE[65] = oE[105] = 0, oa[65] = oa[105] = 0, ou[65] = ou[105] = -1, oh[65] = oh[105] = 0, of [160] = of [10] = -1, og[160] = og[10] = 0, od[160] = od[10] = 1, oy[160] = oy[10] = -1, o_[160] = o_[10] = 0, om[160] = om[10] = 0, oM[160] = oM[10] = 1, oL[160] = oL[10] = 0, oP[160] = oP[10] = 0, ow[160] = ow[10] = 1, oC[160] = oC[10] = 0, oS[160] = oS[10] = 1, ob[130] = ob[40] = 0, oI[130] = oI[40] = 1, oN[130] = oN[40] = 1, ov[130] = ov[40] = 0, ox[130] = ox[40] = 1, oE[130] = oE[40] = 0, oa[130] = oa[40] = 0, ou[130] = ou[40] = -1, oh[130] = oh[40] = 0, oc[130] = oc[40] = 0, ol[130] = ol[40] = -1, op[130] = op[40] = 1, oy[37] = oy[133] = 0, o_[37] = o_[133] = 1, om[37] = om[133] = 1, oM[37] = oM[133] = 0, oL[37] = oL[133] = 1, oP[37] = oP[133] = 0, oa[37] = oa[133] = -1, ou[37] = ou[133] = 0, oh[37] = oh[133] = 0, oc[37] = oc[133] = 1, ol[37] = ol[133] = 0, op[37] = op[133] = 0, ob[148] = ob[22] = -1, oI[148] = oI[22] = 0, oN[148] = oN[22] = 0, oM[148] = oM[22] = 0, oL[148] = oL[22] = -1, oP[148] = oP[22] = 1, ow[148] = ow[22] = 0, oC[148] = oC[22] = 1, oS[148] = oS[22] = 1, oc[148] = oc[22] = -1, ol[148] = ol[22] = 0, op[148] = op[22] = 1, of [82] = of [88] = 0, og[82] = og[88] = -1, od[82] = od[88] = 1, ob[82] = ob[88] = 1, oI[82] = oI[88] = 0, oN[82] = oN[88] = 1, ov[82] = ov[88] = -1, ox[82] = ox[88] = 0, oE[82] = oE[88] = 1, ow[82] = ow[88] = 0, oC[82] = oC[88] = -1, oS[82] = oS[88] = 0, of [73] = of [97] = 0, og[73] = og[97] = 1, od[73] = od[97] = 0, oy[73] = oy[97] = 0, o_[73] = o_[97] = -1, om[73] = om[97] = 0, ov[73] = ov[97] = 1, ox[73] = ox[97] = 0, oE[73] = oE[97] = 0, oa[73] = oa[97] = 1, ou[73] = ou[97] = 0, oh[73] = oh[97] = 1, of [145] = of [25] = 0, og[145] = og[25] = -1, od[145] = od[25] = 0, ov[145] = ov[25] = 1, ox[145] = ox[25] = 0, oE[145] = oE[25] = 1, oM[145] = oM[25] = 0, oL[145] = oL[25] = 1, oP[145] = oP[25] = 1, oc[145] = oc[25] = -1, ol[145] = ol[25] = 0, op[145] = op[25] = 0, oy[70] = oy[100] = 0, o_[70] = o_[100] = 1, om[70] = om[100] = 0, ob[70] = ob[100] = -1, oI[70] = oI[100] = 0, oN[70] = oN[100] = 1, ow[70] = ow[100] = 0, oC[70] = oC[100] = -1, oS[70] = oS[100] = 1, oa[70] = oa[100] = 1, ou[70] = ou[100] = 0, oh[70] = oh[100] = 0, oy[101] = oy[69] = 0, o_[101] = o_[69] = 1, om[101] = om[69] = 0, oa[101] = oa[69] = 1, ou[101] = ou[69] = 0, oh[101] = oh[69] = 0, oM[149] = oM[21] = 0, oL[149] = oL[21] = 1, oP[149] = oP[21] = 1, oc[149] = oc[21] = -1, ol[149] = ol[21] = 0, op[149] = op[21] = 0, ob[86] = ob[84] = -1, oI[86] = oI[84] = 0, oN[86] = oN[84] = 1, ow[86] = ow[84] = 0, oC[86] = oC[84] = -1, oS[86] = oS[84] = 1, of [89] = of [81] = 0, og[89] = og[81] = -1, od[89] = od[81] = 0, ov[89] = ov[81] = 1, ox[89] = ox[81] = 0, oE[89] = oE[81] = 1, of [96] = of [74] = 0, og[96] = og[74] = 1, od[96] = od[74] = 0, oy[96] = oy[74] = -1, o_[96] = o_[74] = 0, om[96] = om[74] = 1, ow[96] = ow[74] = 1, oC[96] = oC[74] = 0, oS[96] = oS[74] = 0, oa[96] = oa[74] = 1, ou[96] = ou[74] = 0, oh[96] = oh[74] = 1, of [24] = of [146] = 0, og[24] = og[146] = -1, od[24] = od[146] = 1, ob[24] = ob[146] = 1, oI[24] = oI[146] = 0, oN[24] = oN[146] = 1, ov[24] = ov[146] = 0, ox[24] = ox[146] = 1, oE[24] = oE[146] = 1, oc[24] = oc[146] = 0, ol[24] = ol[146] = -1, op[24] = op[146] = 0, oy[6] = oy[164] = -1, o_[6] = o_[164] = 0, om[6] = om[164] = 1, ob[6] = ob[164] = -1, oI[6] = oI[164] = 0, oN[6] = oN[164] = 0, oM[6] = oM[164] = 0, oL[6] = oL[164] = -1, oP[6] = oP[164] = 1, ow[6] = ow[164] = 1, oC[6] = oC[164] = 0, oS[6] = oS[164] = 0, ov[129] = ov[41] = 0, ox[129] = ox[41] = 1, oE[129] = oE[41] = 1, oM[129] = oM[41] = 0, oL[129] = oL[41] = 1, oP[129] = oP[41] = 0, oa[129] = oa[41] = -1, ou[129] = ou[41] = 0, oh[129] = oh[41] = 0, oc[129] = oc[41] = 0, ol[129] = ol[41] = -1, op[129] = op[41] = 0, ob[66] = ob[104] = 0, oI[66] = oI[104] = 1, oN[66] = oN[104] = 0, ov[66] = ov[104] = -1, ox[66] = ox[104] = 0, oE[66] = oE[104] = 1, ow[66] = ow[104] = 0, oC[66] = oC[104] = -1, oS[66] = oS[104] = 0, oa[66] = oa[104] = 0, ou[66] = ou[104] = -1, oh[66] = oh[104] = 1, of [144] = of [26] = -1, og[144] = og[26] = 0, od[144] = od[26] = 0, oM[144] = oM[26] = 1, oL[144] = oL[26] = 0, oP[144] = oP[26] = 1, ow[144] = ow[26] = 0, oC[144] = oC[26] = 1, oS[144] = oS[26] = 1, oc[144] = oc[26] = -1, ol[144] = ol[26] = 0, op[144] = op[26] = 1, oy[36] = oy[134] = 0, o_[36] = o_[134] = 1, om[36] = om[134] = 1, ob[36] = ob[134] = 0, oI[36] = oI[134] = 1, oN[36] = oN[134] = 0, oa[36] = oa[134] = 0, ou[36] = ou[134] = -1, oh[36] = oh[134] = 1, oc[36] = oc[134] = 1, ol[36] = ol[134] = 0, op[36] = op[134] = 0, of [9] = of [161] = -1, og[9] = og[161] = 0, od[9] = od[161] = 0, oy[9] = oy[161] = 0, o_[9] = o_[161] = -1, om[9] = om[161] = 0, ov[9] = ov[161] = 1, ox[9] = ox[161] = 0, oE[9] = oE[161] = 0, oM[9] = oM[161] = 1, oL[9] = oL[161] = 0, oP[9] = oP[161] = 1, of [136] = 0, og[136] = 1, od[136] = 1, oy[136] = 0, o_[136] = 1, om[136] = 0, ob[136] = -1, oI[136] = 0, oN[136] = 1, ov[136] = -1, ox[136] = 0, oE[136] = 0, oM[136] = 0, oL[136] = -1, oP[136] = 0, ow[136] = 0, oC[136] = -1, oS[136] = 1, oa[136] = 1, ou[136] = 0, oh[136] = 0, oc[136] = 1, ol[136] = 0, op[136] = 1, of [34] = 0, og[34] = -1, od[34] = 0, oy[34] = 0, o_[34] = -1, om[34] = 1, ob[34] = 1, oI[34] = 0, oN[34] = 0, ov[34] = 1, ox[34] = 0, oE[34] = 1, oM[34] = 0, oL[34] = 1, oP[34] = 1, ow[34] = 0, oC[34] = 1, oS[34] = 0, oa[34] = -1, ou[34] = 0, oh[34] = 1, oc[34] = -1, ol[34] = 0, op[34] = 0, of [35] = 0, og[35] = 1, od[35] = 1, oy[35] = 0, o_[35] = -1, om[35] = 1, ob[35] = 1, oI[35] = 0, oN[35] = 0, ov[35] = -1, ox[35] = 0, oE[35] = 0, oM[35] = 0, oL[35] = -1, oP[35] = 0, ow[35] = 0, oC[35] = 1, oS[35] = 0, oa[35] = -1, ou[35] = 0, oh[35] = 1, oc[35] = 1, ol[35] = 0, op[35] = 1, of [153] = 0, og[153] = 1, od[153] = 1, ov[153] = -1, ox[153] = 0, oE[153] = 0, oM[153] = 0, oL[153] = -1, oP[153] = 0, oc[153] = 1, ol[153] = 0, op[153] = 1, oy[102] = 0, o_[102] = -1, om[102] = 1, ob[102] = 1, oI[102] = 0, oN[102] = 0, ow[102] = 0, oC[102] = 1, oS[102] = 0, oa[102] = -1, ou[102] = 0, oh[102] = 1, of [155] = 0, og[155] = -1, od[155] = 0, ov[155] = 1, ox[155] = 0, oE[155] = 1, oM[155] = 0, oL[155] = 1, oP[155] = 1, oc[155] = -1, ol[155] = 0, op[155] = 0, oy[103] = 0, o_[103] = 1, om[103] = 0, ob[103] = -1, oI[103] = 0, oN[103] = 1, ow[103] = 0, oC[103] = -1, oS[103] = 1, oa[103] = 1, ou[103] = 0, oh[103] = 0, of [152] = 0, og[152] = 1, od[152] = 1, ob[152] = -1, oI[152] = 0, oN[152] = 1, ov[152] = -1, ox[152] = 0, oE[152] = 0, oM[152] = 0, oL[152] = -1, oP[152] = 0, ow[152] = 0, oC[152] = -1, oS[152] = 1, oc[152] = 1, ol[152] = 0, op[152] = 1, of [156] = 0, og[156] = -1, od[156] = 1, ob[156] = 1, oI[156] = 0, oN[156] = 1, ov[156] = -1, ox[156] = 0, oE[156] = 0, oM[156] = 0, oL[156] = -1, oP[156] = 0, ow[156] = 0, oC[156] = 1, oS[156] = 1, oc[156] = -1, ol[156] = 0, op[156] = 1, of [137] = 0, og[137] = 1, od[137] = 1, oy[137] = 0, o_[137] = 1, om[137] = 0, ov[137] = -1, ox[137] = 0, oE[137] = 0, oM[137] = 0, oL[137] = -1, oP[137] = 0, oa[137] = 1, ou[137] = 0, oh[137] = 0, oc[137] = 1, ol[137] = 0, op[137] = 1, of [139] = 0, og[139] = 1, od[139] = 1, oy[139] = 0, o_[139] = -1, om[139] = 0, ov[139] = 1, ox[139] = 0, oE[139] = 0, oM[139] = 0, oL[139] = 1, oP[139] = 0, oa[139] = -1, ou[139] = 0, oh[139] = 0, oc[139] = 1, ol[139] = 0, op[139] = 1, of [98] = 0, og[98] = -1, od[98] = 0, oy[98] = 0, o_[98] = -1, om[98] = 1, ob[98] = 1, oI[98] = 0, oN[98] = 0, ov[98] = 1, ox[98] = 0, oE[98] = 1, ow[98] = 0, oC[98] = 1, oS[98] = 0, oa[98] = -1, ou[98] = 0, oh[98] = 1, of [99] = 0, og[99] = 1, od[99] = 0, oy[99] = 0, o_[99] = -1, om[99] = 1, ob[99] = 1, oI[99] = 0, oN[99] = 0, ov[99] = -1, ox[99] = 0, oE[99] = 1, ow[99] = 0, oC[99] = -1, oS[99] = 0, oa[99] = 1, ou[99] = 0, oh[99] = 1, oy[38] = 0, o_[38] = -1, om[38] = 1, ob[38] = 1, oI[38] = 0, oN[38] = 0, oM[38] = 0, oL[38] = 1, oP[38] = 1, ow[38] = 0, oC[38] = 1, oS[38] = 0, oa[38] = -1, ou[38] = 0, oh[38] = 1, oc[38] = -1, ol[38] = 0, op[38] = 0, oy[39] = 0, o_[39] = 1, om[39] = 1, ob[39] = -1, oI[39] = 0, oN[39] = 0, oM[39] = 0, oL[39] = -1, oP[39] = 1, ow[39] = 0, oC[39] = 1, oS[39] = 0, oa[39] = -1, ou[39] = 0, oh[39] = 1, oc[39] = 1, ol[39] = 0, op[39] = 0;
				var oO = function(t) {
						return [
							[t.bottomleft, 0],
							[0, 0],
							[0, t.leftbottom]
						]
					},
					oR = function(t) {
						return [
							[1, t.rightbottom],
							[1, 0],
							[t.bottomright, 0]
						]
					},
					oT = function(t) {
						return [
							[t.topright, 1],
							[1, 1],
							[1, t.righttop]
						]
					},
					oD = function(t) {
						return [
							[0, t.lefttop],
							[0, 1],
							[t.topleft, 1]
						]
					},
					oA = function(t) {
						return [
							[t.bottomright, 0],
							[t.bottomleft, 0],
							[0, t.leftbottom],
							[0, t.lefttop]
						]
					},
					oF = function(t) {
						return [
							[t.bottomright, 0],
							[t.bottomleft, 0],
							[1, t.righttop],
							[1, t.rightbottom]
						]
					},
					oq = function(t) {
						return [
							[1, t.righttop],
							[1, t.rightbottom],
							[t.topleft, 1],
							[t.topright, 1]
						]
					},
					oG = function(t) {
						return [
							[0, t.leftbottom],
							[0, t.lefttop],
							[t.topleft, 1],
							[t.topright, 1]
						]
					},
					oB = [],
					ok = [],
					oz = [],
					oj = [],
					oX = [],
					oU = [],
					oY = [],
					oV = [];
				oj[1] = oX[1] = 18, oj[169] = oX[169] = 18, oz[4] = ok[4] = 12, oz[166] = ok[166] = 12, oB[16] = oV[16] = 4, oB[154] = oV[154] = 4, oU[64] = oY[64] = 22, oU[106] = oY[106] = 22, oz[2] = oU[2] = 17, oj[2] = oX[2] = 18, oz[168] = oU[168] = 17, oj[168] = oX[168] = 18, oB[8] = oj[8] = 9, ok[8] = oz[8] = 12, oB[162] = oj[162] = 9, ok[162] = oz[162] = 12, oB[32] = oV[32] = 4, ok[32] = oY[32] = 1, oB[138] = oV[138] = 4, ok[138] = oY[138] = 1, oX[128] = oV[128] = 21, oU[128] = oY[128] = 22, oX[42] = oV[42] = 21, oU[42] = oY[42] = 22, ok[5] = oX[5] = 14, ok[165] = oX[165] = 14, oz[20] = oV[20] = 6, oz[150] = oV[150] = 6, oB[80] = oU[80] = 11, oB[90] = oU[90] = 11, oj[65] = oY[65] = 3, oj[105] = oY[105] = 3, oB[160] = oU[160] = 11, ok[160] = oX[160] = 14, oB[10] = oU[10] = 11, ok[10] = oX[10] = 14, oz[130] = oV[130] = 6, oj[130] = oY[130] = 3, oz[40] = oV[40] = 6, oj[40] = oY[40] = 3, ok[101] = oY[101] = 1, ok[69] = oY[69] = 1, oX[149] = oV[149] = 21, oX[21] = oV[21] = 21, oz[86] = oU[86] = 17, oz[84] = oU[84] = 17, oB[89] = oj[89] = 9, oB[81] = oj[81] = 9, oB[96] = oY[96] = 0, ok[96] = oU[96] = 15, oB[74] = oY[74] = 0, ok[74] = oU[74] = 15, oB[24] = oz[24] = 8, oj[24] = oV[24] = 7, oB[146] = oz[146] = 8, oj[146] = oV[146] = 7, ok[6] = oU[6] = 15, oz[6] = oX[6] = 16, ok[164] = oU[164] = 15, oz[164] = oX[164] = 16, oj[129] = oV[129] = 7, oX[129] = oY[129] = 20, oj[41] = oV[41] = 7, oX[41] = oY[41] = 20, oz[66] = oY[66] = 2, oj[66] = oU[66] = 19, oz[104] = oY[104] = 2, oj[104] = oU[104] = 19, oB[144] = oX[144] = 10, oU[144] = oV[144] = 23, oB[26] = oX[26] = 10, oU[26] = oV[26] = 23, ok[36] = oV[36] = 5, oz[36] = oY[36] = 2, ok[134] = oV[134] = 5, oz[134] = oY[134] = 2, oB[9] = oX[9] = 10, ok[9] = oj[9] = 13, oB[161] = oX[161] = 10, ok[161] = oj[161] = 13, ok[37] = oV[37] = 5, oX[37] = oY[37] = 20, ok[133] = oV[133] = 5, oX[133] = oY[133] = 20, oz[148] = oX[148] = 16, oU[148] = oV[148] = 23, oz[22] = oX[22] = 16, oU[22] = oV[22] = 23, oB[82] = oz[82] = 8, oj[82] = oU[82] = 19, oB[88] = oz[88] = 8, oj[88] = oU[88] = 19, oB[73] = oY[73] = 0, ok[73] = oj[73] = 13, oB[97] = oY[97] = 0, ok[97] = oj[97] = 13, oB[145] = oj[145] = 9, oX[145] = oV[145] = 21, oB[25] = oj[25] = 9, oX[25] = oV[25] = 21, ok[70] = oY[70] = 1, oz[70] = oU[70] = 17, ok[100] = oY[100] = 1, oz[100] = oU[100] = 17, oB[34] = oj[34] = 9, ok[34] = oz[34] = 12, oX[34] = oV[34] = 21, oU[34] = oY[34] = 22, oB[136] = oV[136] = 4, ok[136] = oY[136] = 1, oz[136] = oU[136] = 17, oj[136] = oX[136] = 18, oB[35] = oV[35] = 4, ok[35] = oz[35] = 12, oj[35] = oX[35] = 18, oU[35] = oY[35] = 22, oB[153] = oV[153] = 4, oj[153] = oX[153] = 18, ok[102] = oz[102] = 12, oU[102] = oY[102] = 22, oB[155] = oj[155] = 9, oX[155] = oV[155] = 23, ok[103] = oY[103] = 1, oz[103] = oU[103] = 17, oB[152] = oV[152] = 4, oz[152] = oU[152] = 17, oj[152] = oX[152] = 18, oB[156] = oz[156] = 8, oj[156] = oX[156] = 18, oU[156] = oV[156] = 23, oB[137] = oV[137] = 4, ok[137] = oY[137] = 1, oj[137] = oX[137] = 18, oB[139] = oV[139] = 4, ok[139] = oj[139] = 13, oX[139] = oY[139] = 20, oB[98] = oj[98] = 9, ok[98] = oz[98] = 12, oU[98] = oY[98] = 22, oB[99] = oY[99] = 0, ok[99] = oz[99] = 12, oj[99] = oU[99] = 19, ok[38] = oz[38] = 12, oX[38] = oV[38] = 21, oU[38] = oY[38] = 22, ok[39] = oV[39] = 5, oz[39] = oX[39] = 16, oU[39] = oY[39] = 22;
				var oH = [];
				oH[1] = oH[169] = oO, oH[4] = oH[166] = oR, oH[16] = oH[154] = oT, oH[64] = oH[106] = oD, oH[168] = oH[2] = oA, oH[162] = oH[8] = oF, oH[138] = oH[32] = oq, oH[42] = oH[128] = oG, oH[5] = oH[165] = function(t) {
					return [
						[0, 0],
						[0, t.leftbottom],
						[1, t.rightbottom],
						[1, 0]
					]
				}, oH[20] = oH[150] = function(t) {
					return [
						[1, 0],
						[t.bottomright, 0],
						[t.topright, 1],
						[1, 1]
					]
				}, oH[80] = oH[90] = function(t) {
					return [
						[1, 1],
						[1, t.righttop],
						[0, t.lefttop],
						[0, 1]
					]
				}, oH[65] = oH[105] = function(t) {
					return [
						[t.bottomleft, 0],
						[0, 0],
						[0, 1],
						[t.topleft, 1]
					]
				}, oH[160] = oH[10] = function(t) {
					return [
						[1, t.righttop],
						[1, t.rightbottom],
						[0, t.leftbottom],
						[0, t.lefttop]
					]
				}, oH[130] = oH[40] = function(t) {
					return [
						[t.topleft, 1],
						[t.topright, 1],
						[t.bottomright, 0],
						[t.bottomleft, 0]
					]
				}, oH[85] = function() {
					return [
						[0, 0],
						[0, 1],
						[1, 1],
						[1, 0]
					]
				}, oH[101] = oH[69] = function(t) {
					return [
						[1, t.rightbottom],
						[1, 0],
						[0, 0],
						[0, 1],
						[t.topleft, 1]
					]
				}, oH[149] = oH[21] = function(t) {
					return [
						[t.topright, 1],
						[1, 1],
						[1, 0],
						[0, 0],
						[0, t.leftbottom]
					]
				}, oH[86] = oH[84] = function(t) {
					return [
						[1, 0],
						[t.bottomright, 0],
						[0, t.lefttop],
						[0, 1],
						[1, 1]
					]
				}, oH[89] = oH[81] = function(t) {
					return [
						[1, 1],
						[1, t.righttop],
						[t.bottomleft, 0],
						[0, 0],
						[0, 1]
					]
				}, oH[96] = oH[74] = function(t) {
					return [
						[1, t.righttop],
						[1, t.rightbottom],
						[0, t.lefttop],
						[0, 1],
						[t.topleft, 1]
					]
				}, oH[24] = oH[146] = function(t) {
					return [
						[1, 1],
						[1, t.righttop],
						[t.bottomright, 0],
						[t.bottomleft, 0],
						[t.topright, 1]
					]
				}, oH[6] = oH[164] = function(t) {
					return [
						[1, t.rightbottom],
						[1, 0],
						[t.bottomright, 0],
						[0, t.leftbottom],
						[0, t.lefttop]
					]
				}, oH[129] = oH[41] = function(t) {
					return [
						[t.topright, 1],
						[t.bottomleft, 0],
						[0, 0],
						[0, t.leftbottom],
						[t.topleft, 1]
					]
				}, oH[66] = oH[104] = function(t) {
					return [
						[t.bottomright, 0],
						[t.bottomleft, 0],
						[0, t.lefttop],
						[0, 1],
						[t.topleft, 1]
					]
				}, oH[144] = oH[26] = function(t) {
					return [
						[1, 1],
						[1, t.righttop],
						[0, t.leftbottom],
						[0, t.lefttop],
						[t.topright, 1]
					]
				}, oH[36] = oH[134] = function(t) {
					return [
						[1, t.rightbottom],
						[1, 0],
						[t.bottomright, 0],
						[t.topleft, 1],
						[t.topright, 1]
					]
				}, oH[9] = oH[161] = function(t) {
					return [
						[1, t.righttop],
						[1, t.rightbottom],
						[t.bottomleft, 0],
						[0, 0],
						[0, t.leftbottom]
					]
				}, oH[37] = oH[133] = function(t) {
					return [
						[1, t.rightbottom],
						[1, 0],
						[0, 0],
						[0, t.leftbottom],
						[t.topleft, 1],
						[t.topright, 1]
					]
				}, oH[148] = oH[22] = function(t) {
					return [
						[1, 1],
						[1, 0],
						[t.bottomright, 0],
						[0, t.leftbottom],
						[0, t.lefttop],
						[t.topright, 1]
					]
				}, oH[82] = oH[88] = function(t) {
					return [
						[1, 1],
						[1, t.righttop],
						[t.bottomright, 0],
						[t.bottomleft, 0],
						[0, t.lefttop],
						[0, 1]
					]
				}, oH[73] = oH[97] = function(t) {
					return [
						[1, t.righttop],
						[1, t.rightbottom],
						[t.bottomleft, 0],
						[0, 0],
						[0, 1],
						[t.topleft, 1]
					]
				}, oH[145] = oH[25] = function(t) {
					return [
						[1, 1],
						[1, t.righttop],
						[t.bottomleft, 0],
						[0, 0],
						[0, t.leftbottom],
						[t.topright, 1]
					]
				}, oH[70] = oH[100] = function(t) {
					return [
						[1, t.rightbottom],
						[1, 0],
						[t.bottomright, 0],
						[0, t.lefttop],
						[0, 1],
						[t.topleft, 1]
					]
				}, oH[34] = function(t) {
					return [oG(t), oF(t)]
				}, oH[35] = function(t) {
					return [
						[1, t.righttop],
						[1, t.rightbottom],
						[t.bottomright, 0],
						[t.bottomleft, 0],
						[0, t.leftbottom],
						[0, t.lefttop],
						[t.topleft, 1],
						[t.topright, 1]
					]
				}, oH[136] = function(t) {
					return [oq(t), oA(t)]
				}, oH[153] = function(t) {
					return [oT(t), oO(t)]
				}, oH[102] = function(t) {
					return [oR(t), oD(t)]
				}, oH[155] = function(t) {
					return [
						[1, 1],
						[1, t.righttop],
						[t.bottomleft, 0],
						[0, 0],
						[0, t.leftbottom],
						[t.topright, 1]
					]
				}, oH[103] = function(t) {
					return [
						[1, t.rightbottom],
						[1, 0],
						[t.bottomright, 0],
						[0, t.lefttop],
						[0, 1],
						[t.topleft, 1]
					]
				}, oH[152] = function(t) {
					return [oT(t), oA(t)]
				}, oH[156] = function(t) {
					return [
						[1, 1],
						[1, t.righttop],
						[t.bottomright, 0],
						[t.bottomleft, 0],
						[0, t.leftbottom],
						[0, t.lefttop],
						[t.topright, 1]
					]
				}, oH[137] = function(t) {
					return [oq(t), oO(t)]
				}, oH[139] = function(t) {
					return [
						[1, t.righttop],
						[1, t.rightbottom],
						[t.bottomleft, 0],
						[0, 0],
						[0, t.leftbottom],
						[t.topleft, 1],
						[t.topright, 1]
					]
				}, oH[98] = function(t) {
					return [oF(t), oD(t)]
				}, oH[99] = function(t) {
					return [
						[1, t.righttop],
						[1, t.rightbottom],
						[t.bottomright, 0],
						[t.bottomleft, 0],
						[0, t.lefttop],
						[0, 1],
						[t.topleft, 1]
					]
				}, oH[38] = function(t) {
					return [oR(t), oG(t)]
				}, oH[39] = function(t) {
					return [
						[1, t.rightbottom],
						[1, 0],
						[t.bottomright, 0],
						[0, t.leftbottom],
						[0, t.lefttop],
						[t.topleft, 1],
						[t.topright, 1]
					]
				};
				var oW = function t(e) {
					this.id = t.buildId(e), this.coordinates = e, this.innerEdges = [], this.outerEdges = [], this.outerEdgesSorted = !1
				};
				oW.buildId = function(t) {
					return t.join(",")
				}, oW.prototype.removeInnerEdge = function(t) {
					this.innerEdges = this.innerEdges.filter(function(e) {
						return e.from.id !== t.from.id
					})
				}, oW.prototype.removeOuterEdge = function(t) {
					this.outerEdges = this.outerEdges.filter(function(e) {
						return e.to.id !== t.to.id
					})
				}, oW.prototype.addOuterEdge = function(t) {
					this.outerEdges.push(t), this.outerEdgesSorted = !1
				}, oW.prototype.sortOuterEdges = function() {
					var t = this;
					this.outerEdgesSorted || (this.outerEdges.sort(function(e, n) {
						var r = e.to,
							i = n.to;
						if (r.coordinates[0] - t.coordinates[0] >= 0 && i.coordinates[0] - t.coordinates[0] < 0) return 1;
						if (r.coordinates[0] - t.coordinates[0] < 0 && i.coordinates[0] - t.coordinates[0] >= 0) return -1;
						if (r.coordinates[0] - t.coordinates[0] == 0 && i.coordinates[0] - t.coordinates[0] == 0) return r.coordinates[1] - t.coordinates[1] >= 0 || i.coordinates[1] - t.coordinates[1] >= 0 ? r.coordinates[1] - i.coordinates[1] : i.coordinates[1] - r.coordinates[1];
						var o = nP(t.coordinates, r.coordinates, i.coordinates);
						return o < 0 ? 1 : o > 0 ? -1 : Math.pow(r.coordinates[0] - t.coordinates[0], 2) + Math.pow(r.coordinates[1] - t.coordinates[1], 2) - (Math.pow(i.coordinates[0] - t.coordinates[0], 2) + Math.pow(i.coordinates[1] - t.coordinates[1], 2))
					}), this.outerEdgesSorted = !0)
				}, oW.prototype.getOuterEdges = function() {
					return this.sortOuterEdges(), this.outerEdges
				}, oW.prototype.getOuterEdge = function(t) {
					return this.sortOuterEdges(), this.outerEdges[t]
				}, oW.prototype.addInnerEdge = function(t) {
					this.innerEdges.push(t)
				};
				var oJ = function(t, e) {
					this.from = t, this.to = e, this.next = void 0, this.label = void 0, this.symetric = void 0, this.ring = void 0, this.from.addOuterEdge(this), this.to.addInnerEdge(this)
				};
				oJ.prototype.getSymetric = function() {
					return this.symetric || (this.symetric = new oJ(this.to, this.from), this.symetric.symetric = this), this.symetric
				}, oJ.prototype.deleteEdge = function() {
					this.from.removeOuterEdge(this), this.to.removeInnerEdge(this)
				}, oJ.prototype.isEqual = function(t) {
					return this.from.id === t.from.id && this.to.id === t.to.id
				}, oJ.prototype.toString = function() {
					return "Edge { " + this.from.id + " -> " + this.to.id + " }"
				}, oJ.prototype.toLineString = function() {
					return a([this.from.coordinates, this.to.coordinates])
				}, oJ.prototype.compareTo = function(t) {
					return nP(t.from.coordinates, t.to.coordinates, this.to.coordinates)
				};
				var oZ = function() {
						this.edges = [], this.polygon = void 0, this.envelope = void 0
					},
					oK = {
						length: {
							configurable: !0
						}
					};
				oZ.prototype.push = function(t) {
					this[this.edges.length] = t, this.edges.push(t), this.polygon = this.envelope = void 0
				}, oZ.prototype.get = function(t) {
					return this.edges[t]
				}, oK.length.get = function() {
					return this.edges.length
				}, oZ.prototype.forEach = function(t) {
					this.edges.forEach(t)
				}, oZ.prototype.map = function(t) {
					return this.edges.map(t)
				}, oZ.prototype.some = function(t) {
					return this.edges.some(t)
				}, oZ.prototype.isValid = function() {
					return !0
				}, oZ.prototype.isHole = function() {
					var t = this,
						e = this.edges.reduce(function(e, n, r) {
							return n.from.coordinates[1] > t.edges[e].from.coordinates[1] && (e = r), e
						}, 0),
						n = (0 === e ? this.length : e) - 1,
						r = (e + 1) % this.length,
						i = nP(this.edges[n].from.coordinates, this.edges[e].from.coordinates, this.edges[r].from.coordinates);
					return 0 === i ? this.edges[n].from.coordinates[0] > this.edges[r].from.coordinates[0] : i > 0
				}, oZ.prototype.toMultiPoint = function() {
					return l(this.edges.map(function(t) {
						return t.from.coordinates
					}))
				}, oZ.prototype.toPolygon = function() {
					if (this.polygon) return this.polygon;
					var t = this.edges.map(function(t) {
						return t.from.coordinates
					});
					return t.push(this.edges[0].from.coordinates), this.polygon = o([t])
				}, oZ.prototype.getEnvelope = function() {
					return this.envelope ? this.envelope : this.envelope = tK(this.toPolygon())
				}, oZ.findEdgeRingContaining = function(t, e) {
					var n, i, o = t.getEnvelope();
					return e.forEach(function(e) {
						var s, a, u, h, c = e.getEnvelope();
						if (i && (n = i.getEnvelope()), s = c.geometry.coordinates.map(function(t) {
								return t[0]
							}), a = c.geometry.coordinates.map(function(t) {
								return t[1]
							}), u = o.geometry.coordinates.map(function(t) {
								return t[0]
							}), h = o.geometry.coordinates.map(function(t) {
								return t[1]
							}), (Math.max(null, s) !== Math.max(null, u) || Math.max(null, a) !== Math.max(null, h) || Math.min(null, s) !== Math.min(null, u) || Math.min(null, a) !== Math.min(null, h)) && nO(c, o)) {
							var l = t.map(function(t) {
								return t.from.coordinates
							}).find(function(t) {
								return !e.some(function(e) {
									var n;
									return n = e.from.coordinates, t[0] === n[0] && t[1] === n[1]
								})
							});
							l && e.inside(r(l)) && (i && !nO(n, c) || (i = e))
						}
					}), i
				}, oZ.prototype.inside = function(t) {
					return tC(t, this.toPolygon())
				}, Object.defineProperties(oZ.prototype, oK);
				var oQ = function() {
					this.edges = [], this.nodes = {}
				};
				oQ.fromGeoJson = function(t) {
					! function(t) {
						if (!t) throw Error("No geojson passed");
						if ("FeatureCollection" !== t.type && "GeometryCollection" !== t.type && "MultiLineString" !== t.type && "LineString" !== t.type && "Feature" !== t.type) throw Error("Invalid input type '" + t.type + "'. Geojson must be FeatureCollection, GeometryCollection, LineString, MultiLineString or Feature")
					}(t);
					var e = new oQ;
					return F(t, function(t) {
						H(t, "LineString", "Graph::fromGeoJson"), M(t, function(t, n) {
							if (t) {
								var r = e.getNode(t),
									i = e.getNode(n);
								e.addEdge(r, i)
							}
							return n
						})
					}), e
				}, oQ.prototype.getNode = function(t) {
					var e = oW.buildId(t),
						n = this.nodes[e];
					return n || (n = this.nodes[e] = new oW(t)), n
				}, oQ.prototype.addEdge = function(t, e) {
					var n = new oJ(t, e),
						r = n.getSymetric();
					this.edges.push(n), this.edges.push(r)
				}, oQ.prototype.deleteDangles = function() {
					var t = this;
					Object.keys(this.nodes).map(function(e) {
						return t.nodes[e]
					}).forEach(function(e) {
						return t._removeIfDangle(e)
					})
				}, oQ.prototype._removeIfDangle = function(t) {
					var e = this;
					if (t.innerEdges.length <= 1) {
						var n = t.getOuterEdges().map(function(t) {
							return t.to
						});
						this.removeNode(t), n.forEach(function(t) {
							return e._removeIfDangle(t)
						})
					}
				}, oQ.prototype.deleteCutEdges = function() {
					var t = this;
					this._computeNextCWEdges(), this._findLabeledEdgeRings(), this.edges.forEach(function(e) {
						e.label === e.symetric.label && (t.removeEdge(e.symetric), t.removeEdge(e))
					})
				}, oQ.prototype._computeNextCWEdges = function(t) {
					var e = this;
					void 0 === t ? Object.keys(this.nodes).forEach(function(t) {
						return e._computeNextCWEdges(e.nodes[t])
					}) : t.getOuterEdges().forEach(function(e, n) {
						t.getOuterEdge((0 === n ? t.getOuterEdges().length : n) - 1).symetric.next = e
					})
				}, oQ.prototype._computeNextCCWEdges = function(t, e) {
					for (var n, r, i = t.getOuterEdges(), o = i.length - 1; o >= 0; --o) {
						var s = i[o],
							a = s.symetric,
							u = void 0,
							h = void 0;
						s.label === e && (u = s), a.label === e && (h = a), u && h && (h && (r = h), u && (r && (r.next = u, r = void 0), n || (n = u)))
					}
					r && (r.next = n)
				}, oQ.prototype._findLabeledEdgeRings = function() {
					var t = [],
						e = 0;
					return this.edges.forEach(function(n) {
						if (!(n.label >= 0)) {
							t.push(n);
							var r = n;
							do r.label = e, r = r.next; while (!n.isEqual(r));
							e++
						}
					}), t
				}, oQ.prototype.getEdgeRings = function() {
					var t = this;
					this._computeNextCWEdges(), this.edges.forEach(function(t) {
						t.label = void 0
					}), this._findLabeledEdgeRings().forEach(function(e) {
						t._findIntersectionNodes(e).forEach(function(n) {
							t._computeNextCCWEdges(n, e.label)
						})
					});
					var e = [];
					return this.edges.forEach(function(n) {
						n.ring || e.push(t._findEdgeRing(n))
					}), e
				}, oQ.prototype._findIntersectionNodes = function(t) {
					var e = [],
						n = t;
					do(function() {
						var r = 0;
						n.from.getOuterEdges().forEach(function(e) {
							e.label === t.label && ++r
						}), r > 1 && e.push(n.from), n = n.next
					})(); while (!t.isEqual(n));
					return e
				}, oQ.prototype._findEdgeRing = function(t) {
					var e = t,
						n = new oZ;
					do n.push(e), e.ring = n, e = e.next; while (!t.isEqual(e));
					return n
				}, oQ.prototype.removeNode = function(t) {
					var e = this;
					t.getOuterEdges().forEach(function(t) {
						return e.removeEdge(t)
					}), t.innerEdges.forEach(function(t) {
						return e.removeEdge(t)
					}), delete this.nodes[t.id]
				}, oQ.prototype.removeEdge = function(t) {
					this.edges = this.edges.filter(function(e) {
						return !e.isEqual(t)
					}), t.deleteEdge()
				};
				var o$ = tg(function(t, e) {
						function n(t) {
							var e = [];
							for (var n in t) e.push(n);
							return e
						}(t.exports = "function" == typeof Object.keys ? Object.keys : n).shim = n
					}),
					o0 = (o$.shim, tg(function(t, e) {
						function n(t) {
							return "[object Arguments]" == Object.prototype.toString.call(t)
						}

						function r(t) {
							return t && "object" == typeof t && "number" == typeof t.length && Object.prototype.hasOwnProperty.call(t, "callee") && !Object.prototype.propertyIsEnumerable.call(t, "callee") || !1
						}
						var i = "[object Arguments]" == function() {
							return Object.prototype.toString.call(arguments)
						}();
						(e = t.exports = i ? n : r).supported = n, e.unsupported = r
					})),
					o1 = (o0.supported, o0.unsupported, tg(function(t) {
						function e(t) {
							return !(!t || "object" != typeof t || "number" != typeof t.length) && "function" == typeof t.copy && "function" == typeof t.slice && !(t.length > 0 && "number" != typeof t[0])
						}
						var n = Array.prototype.slice,
							r = t.exports = function(t, i, o) {
								return o || (o = {}), t === i || (t instanceof Date && i instanceof Date ? t.getTime() === i.getTime() : t && i && ("object" == typeof t || "object" == typeof i) ? function(t, i, o) {
									if (null == t || null == i || t.prototype !== i.prototype) return !1;
									if (o0(t)) return !!o0(i) && r(t = n.call(t), i = n.call(i), o);
									if (e(t)) {
										if (!e(i) || t.length !== i.length) return !1;
										for (s = 0; s < t.length; s++)
											if (t[s] !== i[s]) return !1;
										return !0
									}
									try {
										var s, a, u = o$(t),
											h = o$(i)
									} catch (t) {
										return !1
									}
									if (u.length != h.length) return !1;
									for (u.sort(), h.sort(), s = u.length - 1; s >= 0; s--)
										if (u[s] != h[s]) return !1;
									for (s = u.length - 1; s >= 0; s--)
										if (!r(t[a = u[s]], i[a], o)) return !1;
									return typeof t == typeof i
								}(t, i, o) : o.strict ? t === i : t == i)
							}
					})),
					o2 = function(t) {
						this.precision = t && t.precision ? t.precision : 17, this.direction = !(!t || !t.direction) && t.direction, this.pseudoNode = !(!t || !t.pseudoNode) && t.pseudoNode, this.objectComparator = t && t.objectComparator ? t.objectComparator : nj
					};
				o2.prototype.compare = function(t, e) {
					if (t.type !== e.type || !nz(t, e)) return !1;
					switch (t.type) {
						case "Point":
							return this.compareCoord(t.coordinates, e.coordinates);
						case "LineString":
							return this.compareLine(t.coordinates, e.coordinates, 0, !1);
						case "Polygon":
							return this.comparePolygon(t, e);
						case "Feature":
							return this.compareFeature(t, e);
						default:
							if (0 === t.type.indexOf("Multi")) {
								var n = this,
									r = nk(t),
									i = nk(e);
								return r.every(function(t) {
									return this.some(function(e) {
										return n.compare(t, e)
									})
								}, i)
							}
					}
					return !1
				}, o2.prototype.compareCoord = function(t, e) {
					if (t.length !== e.length) return !1;
					for (var n = 0; n < t.length; n++)
						if (t[n].toFixed(this.precision) !== e[n].toFixed(this.precision)) return !1;
					return !0
				}, o2.prototype.compareLine = function(t, e, n, r) {
					if (!nz(t, e)) return !1;
					var i = this.pseudoNode ? t : this.removePseudo(t),
						o = this.pseudoNode ? e : this.removePseudo(e);
					if (!r || this.compareCoord(i[0], o[0]) || (o = this.fixStartIndex(o, i))) {
						var s = this.compareCoord(i[n], o[n]);
						return this.direction || s ? this.comparePath(i, o) : !!this.compareCoord(i[n], o[o.length - (1 + n)]) && this.comparePath(i.slice().reverse(), o)
					}
				}, o2.prototype.fixStartIndex = function(t, e) {
					for (var n, r = -1, i = 0; i < t.length; i++)
						if (this.compareCoord(t[i], e[0])) {
							r = i;
							break
						} return r >= 0 && (n = [].concat(t.slice(r, t.length), t.slice(1, r + 1))), n
				}, o2.prototype.comparePath = function(t, e) {
					var n = this;
					return t.every(function(t, e) {
						return n.compareCoord(t, this[e])
					}, e)
				}, o2.prototype.comparePolygon = function(t, e) {
					if (this.compareLine(t.coordinates[0], e.coordinates[0], 1, !0)) {
						var n = t.coordinates.slice(1, t.coordinates.length),
							r = e.coordinates.slice(1, e.coordinates.length),
							i = this;
						return n.every(function(t) {
							return this.some(function(e) {
								return i.compareLine(t, e, 1, !0)
							})
						}, r)
					}
					return !1
				}, o2.prototype.compareFeature = function(t, e) {
					return !(t.id !== e.id || !this.objectComparator(t.properties, e.properties) || !this.compareBBox(t, e)) && this.compare(t.geometry, e.geometry)
				}, o2.prototype.compareBBox = function(t, e) {
					return !!(!t.bbox && !e.bbox || t.bbox && e.bbox && this.compareCoord(t.bbox, e.bbox))
				}, o2.prototype.removePseudo = function(t) {
					return t
				};
				var o3 = o2,
					o4 = tg(function(t) {
						function e(t, e, n, r) {
							this.dataset = [], this.epsilon = 1, this.minPts = 2, this.distance = this._euclideanDistance, this.clusters = [], this.noise = [], this._visited = [], this._assigned = [], this._datasetLength = 0, this._init(t, e, n, r)
						}
						e.prototype.run = function(t, e, n, r) {
							this._init(t, e, n, r);
							for (var i = 0; i < this._datasetLength; i++)
								if (1 !== this._visited[i]) {
									this._visited[i] = 1;
									var o = this._regionQuery(i);
									if (o.length < this.minPts) this.noise.push(i);
									else {
										var s = this.clusters.length;
										this.clusters.push([]), this._addToCluster(i, s), this._expandCluster(s, o)
									}
								} return this.clusters
						}, e.prototype._init = function(t, e, n, r) {
							if (t) {
								if (!(t instanceof Array)) throw Error("Dataset must be of type array, " + typeof t + " given");
								this.dataset = t, this.clusters = [], this.noise = [], this._datasetLength = t.length, this._visited = Array(this._datasetLength), this._assigned = Array(this._datasetLength)
							}
							e && (this.epsilon = e), n && (this.minPts = n), r && (this.distance = r)
						}, e.prototype._expandCluster = function(t, e) {
							for (var n = 0; n < e.length; n++) {
								var r = e[n];
								if (1 !== this._visited[r]) {
									this._visited[r] = 1;
									var i = this._regionQuery(r);
									i.length >= this.minPts && (e = this._mergeArrays(e, i))
								}
								1 !== this._assigned[r] && this._addToCluster(r, t)
							}
						}, e.prototype._addToCluster = function(t, e) {
							this.clusters[e].push(t), this._assigned[t] = 1
						}, e.prototype._regionQuery = function(t) {
							for (var e = [], n = 0; n < this._datasetLength; n++) this.distance(this.dataset[t], this.dataset[n]) < this.epsilon && e.push(n);
							return e
						}, e.prototype._mergeArrays = function(t, e) {
							for (var n = e.length, r = 0; r < n; r++) {
								var i = e[r];
								0 > t.indexOf(i) && t.push(i)
							}
							return t
						}, e.prototype._euclideanDistance = function(t, e) {
							for (var n = 0, r = Math.min(t.length, e.length); r--;) n += (t[r] - e[r]) * (t[r] - e[r]);
							return Math.sqrt(n)
						}, t.exports && (t.exports = e)
					}),
					o6 = tg(function(t) {
						function e(t, e, n) {
							this.k = 3, this.dataset = [], this.assignments = [], this.centroids = [], this.init(t, e, n)
						}
						e.prototype.init = function(t, e, n) {
							this.assignments = [], this.centroids = [], void 0 !== t && (this.dataset = t), void 0 !== e && (this.k = e), void 0 !== n && (this.distance = n)
						}, e.prototype.run = function(t, e) {
							this.init(t, e);
							for (var n = this.dataset.length, r = 0; r < this.k; r++) this.centroids[r] = this.randomCentroid();
							for (var i = !0; i;) {
								i = this.assign();
								for (var o = 0; o < this.k; o++) {
									for (var s = Array(c), a = 0, u = 0; u < c; u++) s[u] = 0;
									for (var h = 0; h < n; h++) {
										var c = this.dataset[h].length;
										if (o === this.assignments[h]) {
											for (u = 0; u < c; u++) s[u] += this.dataset[h][u];
											a++
										}
									}
									if (a > 0) {
										for (u = 0; u < c; u++) s[u] /= a;
										this.centroids[o] = s
									} else this.centroids[o] = this.randomCentroid(), i = !0
								}
							}
							return this.getClusters()
						}, e.prototype.randomCentroid = function() {
							var t, e, n = this.dataset.length - 1;
							do e = Math.round(Math.random() * n), t = this.dataset[e]; while (this.centroids.indexOf(t) >= 0);
							return t
						}, e.prototype.assign = function() {
							for (var t, e = !1, n = this.dataset.length, r = 0; r < n; r++)(t = this.argmin(this.dataset[r], this.centroids, this.distance)) != this.assignments[r] && (this.assignments[r] = t, e = !0);
							return e
						}, e.prototype.getClusters = function() {
							for (var t, e = Array(this.k), n = 0; n < this.assignments.length; n++) void 0 === e[t = this.assignments[n]] && (e[t] = []), e[t].push(n);
							return e
						}, e.prototype.argmin = function(t, e, n) {
							for (var r, i = Number.MAX_VALUE, o = 0, s = e.length, a = 0; a < s; a++)(r = n(t, e[a])) < i && (i = r, o = a);
							return o
						}, e.prototype.distance = function(t, e) {
							for (var n = 0, r = Math.min(t.length, e.length); r--;) {
								var i = t[r] - e[r];
								n += i * i
							}
							return Math.sqrt(n)
						}, t.exports && (t.exports = e)
					}),
					o8 = tg(function(t) {
						function e(t, e, n) {
							this._queue = [], this._priorities = [], this._sorting = "desc", this._init(t, e, n)
						}
						e.prototype.insert = function(t, e) {
							for (var n = this._queue.length, r = n; r--;) {
								var i = this._priorities[r];
								"desc" === this._sorting ? e > i && (n = r) : e < i && (n = r)
							}
							this._insertAt(t, e, n)
						}, e.prototype.remove = function(t) {
							for (var e = this._queue.length; e--;)
								if (t === this._queue[e]) {
									this._queue.splice(e, 1), this._priorities.splice(e, 1);
									break
								}
						}, e.prototype.forEach = function(t) {
							this._queue.forEach(t)
						}, e.prototype.getElements = function() {
							return this._queue
						}, e.prototype.getElementPriority = function(t) {
							return this._priorities[t]
						}, e.prototype.getPriorities = function() {
							return this._priorities
						}, e.prototype.getElementsWithPriorities = function() {
							for (var t = [], e = 0, n = this._queue.length; e < n; e++) t.push([this._queue[e], this._priorities[e]]);
							return t
						}, e.prototype._init = function(t, e, n) {
							if (t && e) {
								if (this._queue = [], this._priorities = [], t.length !== e.length) throw Error("Arrays must have the same length");
								for (var r = 0; r < t.length; r++) this.insert(t[r], e[r])
							}
							n && (this._sorting = n)
						}, e.prototype._insertAt = function(t, e, n) {
							this._queue.length === n ? (this._queue.push(t), this._priorities.push(e)) : (this._queue.splice(n, 0, t), this._priorities.splice(n, 0, e))
						}, t.exports && (t.exports = e)
					}),
					o5 = tg(function(t) {
						function e(t, e, n, r) {
							this.epsilon = 1, this.minPts = 1, this.distance = this._euclideanDistance, this._reachability = [], this._processed = [], this._coreDistance = 0, this._orderedList = [], this._init(t, e, n, r)
						}
						if (t.exports) var n = o8;
						e.prototype.run = function(t, e, r, i) {
							this._init(t, e, r, i);
							for (var o = 0, s = this.dataset.length; o < s; o++)
								if (1 !== this._processed[o]) {
									this._processed[o] = 1, this.clusters.push([o]);
									var a = this.clusters.length - 1;
									this._orderedList.push(o);
									var u = new n(null, null, "asc"),
										h = this._regionQuery(o);
									void 0 !== this._distanceToCore(o) && (this._updateQueue(o, h, u), this._expandCluster(a, u))
								} return this.clusters
						}, e.prototype.getReachabilityPlot = function() {
							for (var t = [], e = 0, n = this._orderedList.length; e < n; e++) {
								var r = this._orderedList[e],
									i = this._reachability[r];
								t.push([r, i])
							}
							return t
						}, e.prototype._init = function(t, e, n, r) {
							if (t) {
								if (!(t instanceof Array)) throw Error("Dataset must be of type array, " + typeof t + " given");
								this.dataset = t, this.clusters = [], this._reachability = Array(this.dataset.length), this._processed = Array(this.dataset.length), this._coreDistance = 0, this._orderedList = []
							}
							e && (this.epsilon = e), n && (this.minPts = n), r && (this.distance = r)
						}, e.prototype._updateQueue = function(t, e, n) {
							var r = this;
							this._coreDistance = this._distanceToCore(t), e.forEach(function(e) {
								if (void 0 === r._processed[e]) {
									var i = r.distance(r.dataset[t], r.dataset[e]),
										o = Math.max(r._coreDistance, i);
									void 0 === r._reachability[e] ? (r._reachability[e] = o, n.insert(e, o)) : o < r._reachability[e] && (r._reachability[e] = o, n.remove(e), n.insert(e, o))
								}
							})
						}, e.prototype._expandCluster = function(t, e) {
							for (var n = e.getElements(), r = 0, i = n.length; r < i; r++) {
								var o = n[r];
								if (void 0 === this._processed[o]) {
									var s = this._regionQuery(o);
									this._processed[o] = 1, this.clusters[t].push(o), this._orderedList.push(o), void 0 !== this._distanceToCore(o) && (this._updateQueue(o, s, e), this._expandCluster(t, e))
								}
							}
						}, e.prototype._distanceToCore = function(t) {
							for (var e = this.epsilon, n = 0; n < e; n++)
								if (this._regionQuery(t, n).length >= this.minPts) return n
						}, e.prototype._regionQuery = function(t, e) {
							e = e || this.epsilon;
							for (var n = [], r = 0, i = this.dataset.length; r < i; r++) this.distance(this.dataset[t], this.dataset[r]) < e && n.push(r);
							return n
						}, e.prototype._euclideanDistance = function(t, e) {
							for (var n = 0, r = Math.min(t.length, e.length); r--;) n += (t[r] - e[r]) * (t[r] - e[r]);
							return Math.sqrt(n)
						}, t.exports && (t.exports = e)
					}),
					o9 = tg(function(t) {
						t.exports && (t.exports = {
							DBSCAN: o4,
							KMEANS: o6,
							OPTICS: o5,
							PriorityQueue: o8
						})
					}),
					o7 = (o9.DBSCAN, o9.KMEANS, o9.OPTICS, o9.PriorityQueue, function(t, e, n) {
						for (var r = t.length, i = 0, o = 0; o < r; o++) {
							var s = (t[o] || 0) - (e[o] || 0);
							i += s * s
						}
						return n ? Math.sqrt(i) : i
					}),
					st = function(t, e, n) {
						var r = Math.abs(t - e);
						return n ? r : r * r
					},
					se = function(t, e) {
						for (var n = {}, r = [], i = e << 2, o = t.length, s = t[0].length > 0; r.length < e && i-- > 0;) {
							var a = t[Math.floor(Math.random() * o)],
								u = s ? a.join("_") : "" + a;
							n[u] || (n[u] = !0, r.push(a))
						}
						if (r.length < e) throw Error("Error initializating clusters");
						return r
					},
					sn = function(t, e) {
						var n = t[0].length ? o7 : st,
							r = [],
							i = t.length,
							o = t[0].length > 0,
							s = t[Math.floor(Math.random() * i)];
						for (o && s.join("_"), r.push(s); r.length < e;) {
							for (var a = [], u = r.length, h = 0, c = [], l = 0; l < i; l++) {
								for (var p = 1 / 0, f = 0; f < u; f++) {
									var g = n(t[l], r[f]);
									g <= p && (p = g)
								}
								a[l] = p
							}
							for (var d = 0; d < i; d++) h += a[d];
							for (var y = 0; y < i; y++) c[y] = {
								i: y,
								v: t[y],
								pr: a[y] / h,
								cs: 0
							};
							c.sort(function(t, e) {
								return t.pr - e.pr
							}), c[0].cs = c[0].pr;
							for (var _ = 1; _ < i; _++) c[_].cs = c[_ - 1].cs + c[_].pr;
							for (var m = Math.random(), v = 0; v < i - 1 && c[v++].cs < m;);
							r.push(c[v - 1].v)
						}
						return r
					},
					sr = function(t, e, n, r) {
						var i = [],
							o = [],
							s = [],
							a = [],
							u = !1,
							h = r || 1e4,
							c = t.length,
							l = t[0].length,
							p = l > 0,
							f = [];
						if (n) i = "kmrand" == n ? se(t, e) : "kmpp" == n ? sn(t, e) : n;
						else
							for (var g = {}; i.length < e;) {
								var d = Math.floor(Math.random() * c);
								g[d] || (g[d] = !0, i.push(t[d]))
							}
						do {
							nU(e, 0, f);
							for (var y = 0; y < c; y++) {
								for (var _ = 1 / 0, m = 0, v = 0; v < e; v++)(a = p ? o7(t[y], i[v]) : Math.abs(t[y] - i[v])) <= _ && (_ = a, m = v);
								s[y] = m, f[m]++
							}
							for (var x = [], E = (o = [], 0); E < e; E++) x[E] = p ? nU(l, 0, x[E]) : 0, o[E] = i[E];
							if (p) {
								for (var b = 0; b < e; b++) i[b] = [];
								for (var I = 0; I < c; I++)
									for (var N = x[s[I]], w = t[I], C = 0; C < l; C++) N[C] += w[C];
								u = !0;
								for (var S = 0; S < e; S++) {
									for (var M = i[S], L = x[S], P = o[S], O = f[S], R = 0; R < l; R++) M[R] = L[R] / O || 0;
									if (u) {
										for (var T = 0; T < l; T++)
											if (P[T] != M[T]) {
												u = !1;
												break
											}
									}
								}
							} else {
								for (var D = 0; D < c; D++) x[s[D]] += t[D];
								for (var A = 0; A < e; A++) i[A] = x[A] / f[A] || 0;
								u = !0;
								for (var F = 0; F < e; F++)
									if (o[F] != i[F]) {
										u = !1;
										break
									}
							}
							u = u || --h <= 0
						} while (!u);
						return {
							it: 1e4 - h,
							k: e,
							idxs: s,
							centroids: i
						}
					},
					si = {
						search: function(t, e, n, r) {
							t.cleanDirty();
							var i = (r = r || {}).heuristic || si.heuristics.manhattan,
								o = r.closest || !1,
								s = new nJ(function(t) {
									return t.f
								}),
								a = e;
							for (e.h = i(e, n), s.push(e); s.size() > 0;) {
								var u = s.pop();
								if (u === n) return nV(u);
								u.closed = !0;
								for (var h = t.neighbors(u), c = 0, l = h.length; c < l; ++c) {
									var p = h[c];
									if (!p.closed && !p.isWall()) {
										var f = u.g + p.getCost(u),
											g = p.visited;
										(!g || f < p.g) && (p.visited = !0, p.parent = u, p.h = p.h || i(p, n), p.g = f, p.f = p.g + p.h, t.markDirty(p), o && (p.h < a.h || p.h === a.h && p.g < a.g) && (a = p), g ? s.rescoreElement(p) : s.push(p))
									}
								}
							}
							return o ? nV(a) : []
						},
						heuristics: {
							manhattan: function(t, e) {
								return Math.abs(e.x - t.x) + Math.abs(e.y - t.y)
							},
							diagonal: function(t, e) {
								var n = Math.sqrt(2),
									r = Math.abs(e.x - t.x),
									i = Math.abs(e.y - t.y);
								return 1 * (r + i) + (n - 2) * Math.min(r, i)
							}
						},
						cleanNode: function(t) {
							t.f = 0, t.g = 0, t.h = 0, t.visited = !1, t.closed = !1, t.parent = null
						}
					};
				nH.prototype.init = function() {
					this.dirtyNodes = [];
					for (var t = 0; t < this.nodes.length; t++) si.cleanNode(this.nodes[t])
				}, nH.prototype.cleanDirty = function() {
					for (var t = 0; t < this.dirtyNodes.length; t++) si.cleanNode(this.dirtyNodes[t]);
					this.dirtyNodes = []
				}, nH.prototype.markDirty = function(t) {
					this.dirtyNodes.push(t)
				}, nH.prototype.neighbors = function(t) {
					var e = [],
						n = t.x,
						r = t.y,
						i = this.grid;
					return i[n - 1] && i[n - 1][r] && e.push(i[n - 1][r]), i[n + 1] && i[n + 1][r] && e.push(i[n + 1][r]), i[n] && i[n][r - 1] && e.push(i[n][r - 1]), i[n] && i[n][r + 1] && e.push(i[n][r + 1]), this.diagonal && (i[n - 1] && i[n - 1][r - 1] && e.push(i[n - 1][r - 1]), i[n + 1] && i[n + 1][r - 1] && e.push(i[n + 1][r - 1]), i[n - 1] && i[n - 1][r + 1] && e.push(i[n - 1][r + 1]), i[n + 1] && i[n + 1][r + 1] && e.push(i[n + 1][r + 1])), e
				}, nH.prototype.toString = function() {
					for (var t, e, n, r, i = [], o = this.grid, s = 0, a = o.length; s < a; s++) {
						for (t = [], n = 0, r = (e = o[s]).length; n < r; n++) t.push(e[n].weight);
						i.push(t.join(" "))
					}
					return i.join("\n")
				}, nW.prototype.toString = function() {
					return "[" + this.x + " " + this.y + "]"
				}, nW.prototype.getCost = function(t) {
					return t && t.x !== this.x && t.y !== this.y ? 1.41421 * this.weight : this.weight
				}, nW.prototype.isWall = function() {
					return 0 === this.weight
				}, nJ.prototype = {
					push: function(t) {
						this.content.push(t), this.sinkDown(this.content.length - 1)
					},
					pop: function() {
						var t = this.content[0],
							e = this.content.pop();
						return this.content.length > 0 && (this.content[0] = e, this.bubbleUp(0)), t
					},
					remove: function(t) {
						var e = this.content.indexOf(t),
							n = this.content.pop();
						e !== this.content.length - 1 && (this.content[e] = n, this.scoreFunction(n) < this.scoreFunction(t) ? this.sinkDown(e) : this.bubbleUp(e))
					},
					size: function() {
						return this.content.length
					},
					rescoreElement: function(t) {
						this.sinkDown(this.content.indexOf(t))
					},
					sinkDown: function(t) {
						for (var e = this.content[t]; t > 0;) {
							var n = (t + 1 >> 1) - 1,
								r = this.content[n];
							if (!(this.scoreFunction(e) < this.scoreFunction(r))) break;
							this.content[n] = e, this.content[t] = r, t = n
						}
					},
					bubbleUp: function(t) {
						for (var e = this.content.length, n = this.content[t], r = this.scoreFunction(n);;) {
							var i, o = t + 1 << 1,
								s = o - 1,
								a = null;
							if (s < e) {
								var u = this.content[s];
								(i = this.scoreFunction(u)) < r && (a = s)
							}
							if (o < e) {
								var h = this.content[o];
								this.scoreFunction(h) < (null === a ? r : i) && (a = o)
							}
							if (null === a) break;
							this.content[t] = this.content[a], this.content[a] = n, t = a
						}
					}
				};
				var so = function(t) {
					return function() {
						return t
					}
				};
				nQ.prototype = {
					constructor: nQ,
					insert: function(t, e) {
						var n, r, i;
						if (t) {
							if (e.P = t, e.N = t.N, t.N && (t.N.P = e), t.N = e, t.R) {
								for (t = t.R; t.L;) t = t.L;
								t.L = e
							} else t.R = e;
							n = t
						} else this._ ? (t = n2(this._), e.P = null, e.N = t, t.P = t.L = e, n = t) : (e.P = e.N = null, this._ = e, n = null);
						for (e.L = e.R = null, e.U = n, e.C = !0, t = e; n && n.C;) n === (r = n.U).L ? (i = r.R) && i.C ? (n.C = i.C = !1, r.C = !0, t = r) : (t === n.R && (n0(this, n), n = (t = n).U), n.C = !1, r.C = !0, n1(this, r)) : (i = r.L) && i.C ? (n.C = i.C = !1, r.C = !0, t = r) : (t === n.L && (n1(this, n), n = (t = n).U), n.C = !1, r.C = !0, n0(this, r)), n = t.U;
						this._.C = !1
					},
					remove: function(t) {
						t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
						var e, n, r, i = t.U,
							o = t.L,
							s = t.R;
						if (n = o ? s ? n2(s) : o : s, i ? i.L === t ? i.L = n : i.R = n : this._ = n, o && s ? (r = n.C, n.C = t.C, n.L = o, o.U = n, n !== s ? (i = n.U, n.U = t.U, t = n.R, i.L = t, n.R = s, s.U = n) : (n.U = i, i = n, t = n.R)) : (r = t.C, t = n), t && (t.U = i), !r) {
							if (t && t.C) t.C = !1;
							else {
								do {
									if (t === this._) break;
									if (t === i.L) {
										if ((e = i.R).C && (e.C = !1, i.C = !0, n0(this, i), e = i.R), e.L && e.L.C || e.R && e.R.C) {
											e.R && e.R.C || (e.L.C = !1, e.C = !0, n1(this, e), e = i.R), e.C = i.C, i.C = e.R.C = !1, n0(this, i), t = this._;
											break
										}
									} else if ((e = i.L).C && (e.C = !1, i.C = !0, n1(this, i), e = i.L), e.L && e.L.C || e.R && e.R.C) {
										e.L && e.L.C || (e.R.C = !1, e.C = !0, n0(this, e), e = i.L), e.C = i.C, i.C = e.L.C = !1, n1(this, i), t = this._;
										break
									}
									e.C = !0, t = i, i = i.U
								} while (!t.C);
								t && (t.C = !1)
							}
						}
					}
				};
				var ss, sa, su, sh, sc, sl = [],
					sp = [],
					sf = 1e-6,
					sg = 1e-12;
				rr.prototype = {
					constructor: rr,
					polygons: function() {
						var t = this.edges;
						return this.cells.map(function(e) {
							var n = e.halfedges.map(function(n) {
								return n8(e, t[n])
							});
							return n.data = e.site.data, n
						})
					},
					triangles: function() {
						var t = [],
							e = this.edges;
						return this.cells.forEach(function(n, r) {
							if (s = (o = n.halfedges).length)
								for (var i, o, s, a, u = n.site, h = -1, c = e[o[s - 1]], l = c.left === u ? c.right : c.left; ++h < s;) a = l, l = (c = e[o[h]]).left === u ? c.right : c.left, a && l && r < a.index && r < l.index && 0 > (i = l, (u[0] - i[0]) * (a[1] - u[1]) - (u[0] - a[0]) * (i[1] - u[1])) && t.push([u.data, a.data, l.data])
						}), t
					},
					links: function() {
						return this.edges.filter(function(t) {
							return t.right
						}).map(function(t) {
							return {
								source: t.left.data,
								target: t.right.data
							}
						})
					},
					find: function(t, e, n) {
						for (var r, i, o = this, s = o._found || 0, a = o.cells.length; !(i = o.cells[s]);)
							if (++s >= a) return null;
						var u = t - i.site[0],
							h = e - i.site[1],
							c = u * u + h * h;
						do i = o.cells[r = s], s = null, i.halfedges.forEach(function(n) {
							var r = o.edges[n],
								a = r.left;
							if (a !== i.site && a || (a = r.right)) {
								var u = t - a[0],
									h = e - a[1],
									l = u * u + h * h;
								l < c && (c = l, s = a.index)
							}
						}); while (null !== s);
						return o._found = r, null == n || c <= n * n ? i.site : null
					}
				};
				var sd = function() {
						function t(t) {
							return new rr(t.map(function(r, i) {
								var o = [Math.round(e(r, i, t) / sf) * sf, Math.round(n(r, i, t) / sf) * sf];
								return o.index = i, o.data = r, o
							}), r)
						}
						var e = nZ,
							n = nK,
							r = null;
						return t.polygons = function(e) {
							return t(e).polygons()
						}, t.links = function(e) {
							return t(e).links()
						}, t.triangles = function(e) {
							return t(e).triangles()
						}, t.x = function(n) {
							return arguments.length ? (e = "function" == typeof n ? n : so(+n), t) : e
						}, t.y = function(e) {
							return arguments.length ? (n = "function" == typeof e ? e : so(+e), t) : n
						}, t.extent = function(e) {
							return arguments.length ? (r = null == e ? null : [
								[+e[0][0], +e[0][1]],
								[+e[1][0], +e[1][1]]
							], t) : r && [
								[r[0][0], r[0][1]],
								[r[1][0], r[1][1]]
							]
						}, t.size = function(e) {
							return arguments.length ? (r = null == e ? null : [
								[0, 0],
								[+e[0], +e[1]]
							], t) : r && [r[1][0] - r[0][0], r[1][1] - r[0][1]]
						}, t
					},
					sy = Object.freeze({
						randomPosition: rh,
						randomPoint: rc,
						randomPolygon: rl,
						randomLineString: rp
					}),
					s_ = Object.freeze({
						getCluster: rg,
						clusterEach: rd,
						clusterReduce: ry,
						createBins: r_,
						applyFilter: rm,
						propertiesContainsFilter: rv,
						filterProperties: rx
					});
				"fill" in Array.prototype || Object.defineProperty(Array.prototype, "fill", {
					configurable: !0,
					value: function(t) {
						if (void 0 === this || null === this) throw TypeError(this + " is not an object");
						var e = Object(this),
							n = Math.max(Math.min(e.length, 9007199254740991), 0) || 0,
							r = 1 in arguments && parseInt(Number(arguments[1]), 10) || 0;
						r = r < 0 ? Math.max(n + r, 0) : Math.min(r, n);
						var i = 2 in arguments && void 0 !== arguments[2] ? parseInt(Number(arguments[2]), 10) || 0 : n;
						for (i = i < 0 ? Math.max(n + arguments[2], 0) : Math.min(i, n); r < i;) e[r] = t, ++r;
						return e
					},
					writable: !0
				}), Number.isFinite = Number.isFinite || function(t) {
					return "number" == typeof t && isFinite(t)
				}, Number.isInteger = Number.isInteger || function(t) {
					return "number" == typeof t && isFinite(t) && Math.floor(t) === t
				}, Number.parseFloat = Number.parseFloat || parseFloat, Number.isNaN = Number.isNaN || function(t) {
					return t != t
				}, Math.trunc = Math.trunc || function(t) {
					return t < 0 ? Math.ceil(t) : Math.floor(t)
				};
				var sm = function() {};
				sm.prototype.interfaces_ = function() {
					return []
				}, sm.prototype.getClass = function() {
					return sm
				}, sm.prototype.equalsWithTolerance = function(t, e, n) {
					return Math.abs(t - e) <= n
				};
				var sv = function() {},
					sx = function() {},
					sE = {
						MAX_VALUE: {
							configurable: !0
						}
					};
				sx.isNaN = function(t) {
					return Number.isNaN(t)
				}, sx.doubleToLongBits = function(t) {
					return t
				}, sx.longBitsToDouble = function(t) {
					return t
				}, sx.isInfinite = function(t) {
					return !Number.isFinite(t)
				}, sE.MAX_VALUE.get = function() {
					return Number.MAX_VALUE
				}, Object.defineProperties(sx, sE);
				var sb = function() {},
					sI = function() {},
					sN = function() {},
					sw = function t() {
						if (this.x = null, this.y = null, this.z = null, 0 == arguments.length) this.x = 0, this.y = 0, this.z = t.NULL_ORDINATE;
						else if (1 == arguments.length) {
							var e = arguments[0];
							this.x = e.x, this.y = e.y, this.z = e.z
						} else 2 == arguments.length ? (this.x = arguments[0], this.y = arguments[1], this.z = t.NULL_ORDINATE) : 3 == arguments.length && (this.x = arguments[0], this.y = arguments[1], this.z = arguments[2])
					},
					sC = {
						DimensionalComparator: {
							configurable: !0
						},
						serialVersionUID: {
							configurable: !0
						},
						NULL_ORDINATE: {
							configurable: !0
						},
						X: {
							configurable: !0
						},
						Y: {
							configurable: !0
						},
						Z: {
							configurable: !0
						}
					};
				sw.prototype.setOrdinate = function(t, e) {
					switch (t) {
						case sw.X:
							this.x = e;
							break;
						case sw.Y:
							this.y = e;
							break;
						case sw.Z:
							this.z = e;
							break;
						default:
							throw new sv("Invalid ordinate index: " + t)
					}
				}, sw.prototype.equals2D = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						return this.x === t.x && this.y === t.y
					}
					if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						return !!sm.equalsWithTolerance(this.x, e.x, n) && !!sm.equalsWithTolerance(this.y, e.y, n)
					}
				}, sw.prototype.getOrdinate = function(t) {
					switch (t) {
						case sw.X:
							return this.x;
						case sw.Y:
							return this.y;
						case sw.Z:
							return this.z
					}
					throw new sv("Invalid ordinate index: " + t)
				}, sw.prototype.equals3D = function(t) {
					return this.x === t.x && this.y === t.y && (this.z === t.z || sx.isNaN(this.z)) && sx.isNaN(t.z)
				}, sw.prototype.equals = function(t) {
					return t instanceof sw && this.equals2D(t)
				}, sw.prototype.equalInZ = function(t, e) {
					return sm.equalsWithTolerance(this.z, t.z, e)
				}, sw.prototype.compareTo = function(t) {
					return this.x < t.x ? -1 : this.x > t.x ? 1 : this.y < t.y ? -1 : this.y > t.y ? 1 : 0
				}, sw.prototype.clone = function() {}, sw.prototype.copy = function() {
					return new sw(this)
				}, sw.prototype.toString = function() {
					return "(" + this.x + ", " + this.y + ", " + this.z + ")"
				}, sw.prototype.distance3D = function(t) {
					var e = this.x - t.x,
						n = this.y - t.y,
						r = this.z - t.z;
					return Math.sqrt(e * e + n * n + r * r)
				}, sw.prototype.distance = function(t) {
					var e = this.x - t.x,
						n = this.y - t.y;
					return Math.sqrt(e * e + n * n)
				}, sw.prototype.hashCode = function() {
					return 37 * (629 + sw.hashCode(this.x)) + sw.hashCode(this.y)
				}, sw.prototype.setCoordinate = function(t) {
					this.x = t.x, this.y = t.y, this.z = t.z
				}, sw.prototype.interfaces_ = function() {
					return [sb, sI, rE]
				}, sw.prototype.getClass = function() {
					return sw
				}, sw.hashCode = function() {
					if (1 == arguments.length) {
						var t = arguments[0],
							e = sx.doubleToLongBits(t);
						return Math.trunc((e ^ e) >>> 32)
					}
				}, sC.DimensionalComparator.get = function() {
					return sS
				}, sC.serialVersionUID.get = function() {
					return 0x5cbf2c235c7e5800
				}, sC.NULL_ORDINATE.get = function() {
					return sx.NaN
				}, sC.X.get = function() {
					return 0
				}, sC.Y.get = function() {
					return 1
				}, sC.Z.get = function() {
					return 2
				}, Object.defineProperties(sw, sC);
				var sS = function(t) {
					if (this._dimensionsToTest = 2, 0 == arguments.length);
					else if (1 == arguments.length) {
						var e = arguments[0];
						if (2 !== e && 3 !== e) throw new sv("only 2 or 3 dimensions may be specified");
						this._dimensionsToTest = e
					}
				};
				sS.prototype.compare = function(t, e) {
					var n = sS.compare(t.x, e.x);
					if (0 !== n) return n;
					var r = sS.compare(t.y, e.y);
					return 0 !== r ? r : this._dimensionsToTest <= 2 ? 0 : sS.compare(t.z, e.z)
				}, sS.prototype.interfaces_ = function() {
					return [sN]
				}, sS.prototype.getClass = function() {
					return sS
				}, sS.compare = function(t, e) {
					return t < e ? -1 : t > e ? 1 : sx.isNaN(t) ? sx.isNaN(e) ? 0 : -1 : sx.isNaN(e) ? 1 : 0
				};
				var sM = function() {};
				sM.prototype.create = function() {}, sM.prototype.interfaces_ = function() {
					return []
				}, sM.prototype.getClass = function() {
					return sM
				};
				var sL = function() {},
					sP = {
						INTERIOR: {
							configurable: !0
						},
						BOUNDARY: {
							configurable: !0
						},
						EXTERIOR: {
							configurable: !0
						},
						NONE: {
							configurable: !0
						}
					};
				sL.prototype.interfaces_ = function() {
					return []
				}, sL.prototype.getClass = function() {
					return sL
				}, sL.toLocationSymbol = function(t) {
					switch (t) {
						case sL.EXTERIOR:
							return "e";
						case sL.BOUNDARY:
							return "b";
						case sL.INTERIOR:
							return "i";
						case sL.NONE:
							return "-"
					}
					throw new sv("Unknown location value: " + t)
				}, sP.INTERIOR.get = function() {
					return 0
				}, sP.BOUNDARY.get = function() {
					return 1
				}, sP.EXTERIOR.get = function() {
					return 2
				}, sP.NONE.get = function() {
					return -1
				}, Object.defineProperties(sL, sP);
				var sO = function(t, e) {
						return t.interfaces_ && t.interfaces_().indexOf(e) > -1
					},
					sR = function() {},
					sT = {
						LOG_10: {
							configurable: !0
						}
					};
				sR.prototype.interfaces_ = function() {
					return []
				}, sR.prototype.getClass = function() {
					return sR
				}, sR.log10 = function(t) {
					var e = Math.log(t);
					return sx.isInfinite(e) ? e : sx.isNaN(e) ? e : e / sR.LOG_10
				}, sR.min = function(t, e, n, r) {
					var i = t;
					return e < i && (i = e), n < i && (i = n), r < i && (i = r), i
				}, sR.clamp = function() {
					if ("number" == typeof arguments[2] && "number" == typeof arguments[0] && "number" == typeof arguments[1]) {
						var t = arguments[0],
							e = arguments[1],
							n = arguments[2];
						return t < e ? e : t > n ? n : t
					}
					if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
						var r = arguments[0],
							i = arguments[1],
							o = arguments[2];
						return r < i ? i : r > o ? o : r
					}
				}, sR.wrap = function(t, e) {
					return t < 0 ? e - -t % e : t % e
				}, sR.max = function() {
					if (3 == arguments.length) {
						var t = arguments[0],
							e = arguments[1],
							n = arguments[2],
							r = t;
						return e > r && (r = e), n > r && (r = n), r
					}
					if (4 == arguments.length) {
						var i = arguments[0],
							o = arguments[1],
							s = arguments[2],
							a = arguments[3],
							u = i;
						return o > u && (u = o), s > u && (u = s), a > u && (u = a), u
					}
				}, sR.average = function(t, e) {
					return (t + e) / 2
				}, sT.LOG_10.get = function() {
					return Math.log(10)
				}, Object.defineProperties(sR, sT);
				var sD = function(t) {
					this.str = t
				};
				sD.prototype.append = function(t) {
					this.str += t
				}, sD.prototype.setCharAt = function(t, e) {
					this.str = this.str.substr(0, t) + e + this.str.substr(t + 1)
				}, sD.prototype.toString = function(t) {
					return this.str
				};
				var sA = function(t) {
					this.value = t
				};
				sA.prototype.intValue = function() {
					return this.value
				}, sA.prototype.compareTo = function(t) {
					return this.value < t ? -1 : this.value > t ? 1 : 0
				}, sA.isNaN = function(t) {
					return Number.isNaN(t)
				};
				var sF = function() {};
				sF.isWhitespace = function(t) {
					return t <= 32 && t >= 0 || 127 === t
				}, sF.toUpperCase = function(t) {
					return t.toUpperCase()
				};
				var sq = function t() {
						if (this._hi = 0, this._lo = 0, 0 == arguments.length) this.init(0);
						else if (1 == arguments.length) {
							if ("number" == typeof arguments[0]) {
								var e = arguments[0];
								this.init(e)
							} else if (arguments[0] instanceof t) {
								var n = arguments[0];
								this.init(n)
							} else if ("string" == typeof arguments[0]) {
								var r = arguments[0];
								t.call(this, t.parse(r))
							}
						} else if (2 == arguments.length) {
							var i = arguments[0],
								o = arguments[1];
							this.init(i, o)
						}
					},
					sG = {
						PI: {
							configurable: !0
						},
						TWO_PI: {
							configurable: !0
						},
						PI_2: {
							configurable: !0
						},
						E: {
							configurable: !0
						},
						NaN: {
							configurable: !0
						},
						EPS: {
							configurable: !0
						},
						SPLIT: {
							configurable: !0
						},
						MAX_PRINT_DIGITS: {
							configurable: !0
						},
						TEN: {
							configurable: !0
						},
						ONE: {
							configurable: !0
						},
						SCI_NOT_EXPONENT_CHAR: {
							configurable: !0
						},
						SCI_NOT_ZERO: {
							configurable: !0
						}
					};
				sq.prototype.le = function(t) {
					return (this._hi < t._hi || this._hi === t._hi) && this._lo <= t._lo
				}, sq.prototype.extractSignificantDigits = function(t, e) {
					var n = this.abs(),
						r = sq.magnitude(n._hi),
						i = sq.TEN.pow(r);
					(n = n.divide(i)).gt(sq.TEN) ? (n = n.divide(sq.TEN), r += 1) : n.lt(sq.ONE) && (n = n.multiply(sq.TEN), r -= 1);
					for (var o = r + 1, s = new sD, a = sq.MAX_PRINT_DIGITS - 1, u = 0; u <= a; u++) {
						t && u === o && s.append(".");
						var h = Math.trunc(n._hi);
						if (h < 0) break;
						var c = !1,
							l = 0;
						h > 9 ? (c = !0, l = "9") : l = "0" + h, s.append(l), n = n.subtract(sq.valueOf(h)).multiply(sq.TEN), c && n.selfAdd(sq.TEN);
						var p = !0,
							f = sq.magnitude(n._hi);
						if (f < 0 && Math.abs(f) >= a - u && (p = !1), !p) break
					}
					return e[0] = r, s.toString()
				}, sq.prototype.sqr = function() {
					return this.multiply(this)
				}, sq.prototype.doubleValue = function() {
					return this._hi + this._lo
				}, sq.prototype.subtract = function() {
					if (arguments[0] instanceof sq) {
						var t = arguments[0];
						return this.add(t.negate())
					}
					if ("number" == typeof arguments[0]) {
						var e = arguments[0];
						return this.add(-e)
					}
				}, sq.prototype.equals = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						return this._hi === t._hi && this._lo === t._lo
					}
				}, sq.prototype.isZero = function() {
					return 0 === this._hi && 0 === this._lo
				}, sq.prototype.selfSubtract = function() {
					if (arguments[0] instanceof sq) {
						var t = arguments[0];
						return this.isNaN() ? this : this.selfAdd(-t._hi, -t._lo)
					}
					if ("number" == typeof arguments[0]) {
						var e = arguments[0];
						return this.isNaN() ? this : this.selfAdd(-e, 0)
					}
				}, sq.prototype.getSpecialNumberString = function() {
					return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null
				}, sq.prototype.min = function(t) {
					return this.le(t) ? this : t
				}, sq.prototype.selfDivide = function() {
					if (1 == arguments.length) {
						if (arguments[0] instanceof sq) {
							var t = arguments[0];
							return this.selfDivide(t._hi, t._lo)
						}
						if ("number" == typeof arguments[0]) {
							var e = arguments[0];
							return this.selfDivide(e, 0)
						}
					} else if (2 == arguments.length) {
						var n = arguments[0],
							r = arguments[1],
							i = null,
							o = null,
							s = null,
							a = null,
							u = null,
							h = null,
							c = null,
							l = null;
						return u = this._hi / n, i = (h = sq.SPLIT * u) - u, l = sq.SPLIT * n, o = u - (i = h - i), s = l - n, c = u * n, a = n - (s = l - s), l = i * s - c + i * a + o * s + o * a, h = (this._hi - c - l + this._lo - u * r) / n, l = u + h, this._hi = l, this._lo = u - l + h, this
					}
				}, sq.prototype.dump = function() {
					return "DD<" + this._hi + ", " + this._lo + ">"
				}, sq.prototype.divide = function() {
					if (arguments[0] instanceof sq) {
						var t = arguments[0],
							e = null,
							n = null,
							r = null,
							i = null,
							o = null,
							s = null,
							a = null,
							u = null;
						return n = (o = this._hi / t._hi) - (e = (s = sq.SPLIT * o) - (e = s - o)), u = e * (r = (u = sq.SPLIT * t._hi) - (r = u - t._hi)) - (a = o * t._hi) + e * (i = t._hi - r) + n * r + n * i, s = (this._hi - a - u + this._lo - o * t._lo) / t._hi, new sq(u = o + s, o - u + s)
					}
					if ("number" == typeof arguments[0]) {
						var h = arguments[0];
						return sx.isNaN(h) ? sq.createNaN() : sq.copy(this).selfDivide(h, 0)
					}
				}, sq.prototype.ge = function(t) {
					return (this._hi > t._hi || this._hi === t._hi) && this._lo >= t._lo
				}, sq.prototype.pow = function(t) {
					if (0 === t) return sq.valueOf(1);
					var e = new sq(this),
						n = sq.valueOf(1),
						r = Math.abs(t);
					if (r > 1)
						for (; r > 0;) r % 2 == 1 && n.selfMultiply(e), (r /= 2) > 0 && (e = e.sqr());
					else n = e;
					return t < 0 ? n.reciprocal() : n
				}, sq.prototype.ceil = function() {
					if (this.isNaN()) return sq.NaN;
					var t = Math.ceil(this._hi),
						e = 0;
					return t === this._hi && (e = Math.ceil(this._lo)), new sq(t, e)
				}, sq.prototype.compareTo = function(t) {
					return this._hi < t._hi ? -1 : this._hi > t._hi ? 1 : this._lo < t._lo ? -1 : this._lo > t._lo ? 1 : 0
				}, sq.prototype.rint = function() {
					return this.isNaN() ? this : this.add(.5).floor()
				}, sq.prototype.setValue = function() {
					if (arguments[0] instanceof sq) {
						var t = arguments[0];
						return this.init(t), this
					}
					if ("number" == typeof arguments[0]) {
						var e = arguments[0];
						return this.init(e), this
					}
				}, sq.prototype.max = function(t) {
					return this.ge(t) ? this : t
				}, sq.prototype.sqrt = function() {
					if (this.isZero()) return sq.valueOf(0);
					if (this.isNegative()) return sq.NaN;
					var t = 1 / Math.sqrt(this._hi),
						e = this._hi * t,
						n = sq.valueOf(e),
						r = this.subtract(n.sqr())._hi * (.5 * t);
					return n.add(r)
				}, sq.prototype.selfAdd = function() {
					if (1 == arguments.length) {
						if (arguments[0] instanceof sq) {
							var t = arguments[0];
							return this.selfAdd(t._hi, t._lo)
						}
						if ("number" == typeof arguments[0]) {
							var e = arguments[0],
								n = null,
								r = null,
								i = null,
								o = null,
								s = null,
								a = null;
							return s = (i = this._hi + e) - this._hi, o = i - s, n = i + (a = (o = e - s + (this._hi - o)) + this._lo), r = a + (i - n), this._hi = n + r, this._lo = r + (n - this._hi), this
						}
					} else if (2 == arguments.length) {
						var u = arguments[0],
							h = arguments[1],
							c = null,
							l = null,
							p = null,
							f = null,
							g = null,
							d = null,
							y = null;
						f = this._hi + u, l = this._lo + h, g = f - (d = f - this._hi), p = l - (y = l - this._lo);
						var _ = (c = f + (d = (g = u - d + (this._hi - g)) + l)) + (d = (p = h - y + (this._lo - p)) + (d + (f - c))),
							m = d + (c - _);
						return this._hi = _, this._lo = m, this
					}
				}, sq.prototype.selfMultiply = function() {
					if (1 == arguments.length) {
						if (arguments[0] instanceof sq) {
							var t = arguments[0];
							return this.selfMultiply(t._hi, t._lo)
						}
						if ("number" == typeof arguments[0]) {
							var e = arguments[0];
							return this.selfMultiply(e, 0)
						}
					} else if (2 == arguments.length) {
						var n = arguments[0],
							r = arguments[1],
							i = null,
							o = null,
							s = null,
							a = null,
							u = null,
							h = null;
						i = (u = sq.SPLIT * this._hi) - this._hi, h = sq.SPLIT * n, i = u - i, o = this._hi - i, s = h - n;
						var c = (u = this._hi * n) + (h = i * (s = h - s) - u + i * (a = n - s) + o * s + o * a + (this._hi * r + this._lo * n)),
							l = h + (i = u - c);
						return this._hi = c, this._lo = l, this
					}
				}, sq.prototype.selfSqr = function() {
					return this.selfMultiply(this)
				}, sq.prototype.floor = function() {
					if (this.isNaN()) return sq.NaN;
					var t = Math.floor(this._hi),
						e = 0;
					return t === this._hi && (e = Math.floor(this._lo)), new sq(t, e)
				}, sq.prototype.negate = function() {
					return this.isNaN() ? this : new sq(-this._hi, -this._lo)
				}, sq.prototype.clone = function() {}, sq.prototype.multiply = function() {
					if (arguments[0] instanceof sq) {
						var t = arguments[0];
						return t.isNaN() ? sq.createNaN() : sq.copy(this).selfMultiply(t)
					}
					if ("number" == typeof arguments[0]) {
						var e = arguments[0];
						return sx.isNaN(e) ? sq.createNaN() : sq.copy(this).selfMultiply(e, 0)
					}
				}, sq.prototype.isNaN = function() {
					return sx.isNaN(this._hi)
				}, sq.prototype.intValue = function() {
					return Math.trunc(this._hi)
				}, sq.prototype.toString = function() {
					var t = sq.magnitude(this._hi);
					return t >= -3 && t <= 20 ? this.toStandardNotation() : this.toSciNotation()
				}, sq.prototype.toStandardNotation = function() {
					var t = this.getSpecialNumberString();
					if (null !== t) return t;
					var e = [, ].fill(null),
						n = this.extractSignificantDigits(!0, e),
						r = e[0] + 1,
						i = n;
					if ("." === n.charAt(0)) i = "0" + n;
					else if (r < 0) i = "0." + sq.stringOfChar("0", -r) + n;
					else if (-1 === n.indexOf(".")) {
						var o = r - n.length;
						i = n + sq.stringOfChar("0", o) + ".0"
					}
					return this.isNegative() ? "-" + i : i
				}, sq.prototype.reciprocal = function() {
					var t = null,
						e = null,
						n = null,
						r = null,
						i = null,
						o = null,
						s = null,
						a = null;
					e = (i = 1 / this._hi) - (t = (o = sq.SPLIT * i) - (t = o - i)), n = (a = sq.SPLIT * this._hi) - this._hi;
					var u = i + (o = (1 - (s = i * this._hi) - (a = t * (n = a - n) - s + t * (r = this._hi - n) + e * n + e * r) - i * this._lo) / this._hi);
					return new sq(u, i - u + o)
				}, sq.prototype.toSciNotation = function() {
					if (this.isZero()) return sq.SCI_NOT_ZERO;
					var t = this.getSpecialNumberString();
					if (null !== t) return t;
					var e = [, ].fill(null),
						n = this.extractSignificantDigits(!1, e),
						r = sq.SCI_NOT_EXPONENT_CHAR + e[0];
					if ("0" === n.charAt(0)) throw Error("Found leading zero: " + n);
					var i = "";
					n.length > 1 && (i = n.substring(1));
					var o = n.charAt(0) + "." + i;
					return this.isNegative() ? "-" + o + r : o + r
				}, sq.prototype.abs = function() {
					return this.isNaN() ? sq.NaN : this.isNegative() ? this.negate() : new sq(this)
				}, sq.prototype.isPositive = function() {
					return (this._hi > 0 || 0 === this._hi) && this._lo > 0
				}, sq.prototype.lt = function(t) {
					return (this._hi < t._hi || this._hi === t._hi) && this._lo < t._lo
				}, sq.prototype.add = function() {
					if (arguments[0] instanceof sq) {
						var t = arguments[0];
						return sq.copy(this).selfAdd(t)
					}
					if ("number" == typeof arguments[0]) {
						var e = arguments[0];
						return sq.copy(this).selfAdd(e)
					}
				}, sq.prototype.init = function() {
					if (1 == arguments.length) {
						if ("number" == typeof arguments[0]) {
							var t = arguments[0];
							this._hi = t, this._lo = 0
						} else if (arguments[0] instanceof sq) {
							var e = arguments[0];
							this._hi = e._hi, this._lo = e._lo
						}
					} else if (2 == arguments.length) {
						var n = arguments[0],
							r = arguments[1];
						this._hi = n, this._lo = r
					}
				}, sq.prototype.gt = function(t) {
					return (this._hi > t._hi || this._hi === t._hi) && this._lo > t._lo
				}, sq.prototype.isNegative = function() {
					return (this._hi < 0 || 0 === this._hi) && this._lo < 0
				}, sq.prototype.trunc = function() {
					return this.isNaN() ? sq.NaN : this.isPositive() ? this.floor() : this.ceil()
				}, sq.prototype.signum = function() {
					return this._hi > 0 ? 1 : this._hi < 0 ? -1 : this._lo > 0 ? 1 : this._lo < 0 ? -1 : 0
				}, sq.prototype.interfaces_ = function() {
					return [rE, sb, sI]
				}, sq.prototype.getClass = function() {
					return sq
				}, sq.sqr = function(t) {
					return sq.valueOf(t).selfMultiply(t)
				}, sq.valueOf = function() {
					if ("string" == typeof arguments[0]) {
						var t = arguments[0];
						return sq.parse(t)
					}
					if ("number" == typeof arguments[0]) {
						var e = arguments[0];
						return new sq(e)
					}
				}, sq.sqrt = function(t) {
					return sq.valueOf(t).sqrt()
				}, sq.parse = function(t) {
					for (var e = 0, n = t.length; sF.isWhitespace(t.charAt(e));) e++;
					var r = !1;
					if (e < n) {
						var i = t.charAt(e);
						"-" !== i && "+" !== i || (e++, "-" === i && (r = !0))
					}
					for (var o = new sq, s = 0, a = 0, u = 0; !(e >= n);) {
						var h = t.charAt(e);
						if (e++, sF.isDigit(h)) {
							var c = h - "0";
							o.selfMultiply(sq.TEN), o.selfAdd(c), s++
						} else {
							if ("." !== h) {
								if ("e" === h || "E" === h) {
									var l = t.substring(e);
									try {
										u = sA.parseInt(l)
									} catch (e) {
										throw e instanceof Error ? Error("Invalid exponent " + l + " in string " + t) : e
									}
									break
								}
								throw Error("Unexpected character '" + h + "' at position " + e + " in string " + t)
							}
							a = s
						}
					}
					var p = o,
						f = s - a - u;
					if (0 === f) p = o;
					else if (f > 0) {
						var g = sq.TEN.pow(f);
						p = o.divide(g)
					} else if (f < 0) {
						var d = sq.TEN.pow(-f);
						p = o.multiply(d)
					}
					return r ? p.negate() : p
				}, sq.createNaN = function() {
					return new sq(sx.NaN, sx.NaN)
				}, sq.copy = function(t) {
					return new sq(t)
				}, sq.magnitude = function(t) {
					var e = Math.abs(t),
						n = Math.trunc(Math.floor(Math.log(e) / Math.log(10)));
					return 10 * Math.pow(10, n) <= e && (n += 1), n
				}, sq.stringOfChar = function(t, e) {
					for (var n = new sD, r = 0; r < e; r++) n.append(t);
					return n.toString()
				}, sG.PI.get = function() {
					return new sq(3.141592653589793, 12246467991473532e-32)
				}, sG.TWO_PI.get = function() {
					return new sq(6.283185307179586, 24492935982947064e-32)
				}, sG.PI_2.get = function() {
					return new sq(1.5707963267948966, 6123233995736766e-32)
				}, sG.E.get = function() {
					return new sq(2.718281828459045, 14456468917292502e-32)
				}, sG.NaN.get = function() {
					return new sq(sx.NaN, sx.NaN)
				}, sG.EPS.get = function() {
					return 123259516440783e-46
				}, sG.SPLIT.get = function() {
					return 134217729
				}, sG.MAX_PRINT_DIGITS.get = function() {
					return 32
				}, sG.TEN.get = function() {
					return sq.valueOf(10)
				}, sG.ONE.get = function() {
					return sq.valueOf(1)
				}, sG.SCI_NOT_EXPONENT_CHAR.get = function() {
					return "E"
				}, sG.SCI_NOT_ZERO.get = function() {
					return "0.0E0"
				}, Object.defineProperties(sq, sG);
				var sB = function() {},
					sk = {
						DP_SAFE_EPSILON: {
							configurable: !0
						}
					};
				sB.prototype.interfaces_ = function() {
					return []
				}, sB.prototype.getClass = function() {
					return sB
				}, sB.orientationIndex = function(t, e, n) {
					var r = sB.orientationIndexFilter(t, e, n);
					if (r <= 1) return r;
					var i = sq.valueOf(e.x).selfAdd(-t.x),
						o = sq.valueOf(e.y).selfAdd(-t.y),
						s = sq.valueOf(n.x).selfAdd(-e.x),
						a = sq.valueOf(n.y).selfAdd(-e.y);
					return i.selfMultiply(a).selfSubtract(o.selfMultiply(s)).signum()
				}, sB.signOfDet2x2 = function(t, e, n, r) {
					return t.multiply(r).selfSubtract(e.multiply(n)).signum()
				}, sB.intersection = function(t, e, n, r) {
					var i = sq.valueOf(r.y).selfSubtract(n.y).selfMultiply(sq.valueOf(e.x).selfSubtract(t.x)),
						o = sq.valueOf(r.x).selfSubtract(n.x).selfMultiply(sq.valueOf(e.y).selfSubtract(t.y)),
						s = i.subtract(o),
						a = sq.valueOf(r.x).selfSubtract(n.x).selfMultiply(sq.valueOf(t.y).selfSubtract(n.y)),
						u = sq.valueOf(r.y).selfSubtract(n.y).selfMultiply(sq.valueOf(t.x).selfSubtract(n.x)),
						h = a.subtract(u).selfDivide(s).doubleValue(),
						c = sq.valueOf(t.x).selfAdd(sq.valueOf(e.x).selfSubtract(t.x).selfMultiply(h)).doubleValue(),
						l = sq.valueOf(e.x).selfSubtract(t.x).selfMultiply(sq.valueOf(t.y).selfSubtract(n.y)),
						p = sq.valueOf(e.y).selfSubtract(t.y).selfMultiply(sq.valueOf(t.x).selfSubtract(n.x)),
						f = l.subtract(p).selfDivide(s).doubleValue();
					return new sw(c, sq.valueOf(n.y).selfAdd(sq.valueOf(r.y).selfSubtract(n.y).selfMultiply(f)).doubleValue())
				}, sB.orientationIndexFilter = function(t, e, n) {
					var r = null,
						i = (t.x - n.x) * (e.y - n.y),
						o = (t.y - n.y) * (e.x - n.x),
						s = i - o;
					if (i > 0) {
						if (o <= 0) return sB.signum(s);
						r = i + o
					} else {
						if (!(i < 0) || o >= 0) return sB.signum(s);
						r = -i - o
					}
					var a = sB.DP_SAFE_EPSILON * r;
					return s >= a || -s >= a ? sB.signum(s) : 2
				}, sB.signum = function(t) {
					return t > 0 ? 1 : t < 0 ? -1 : 0
				}, sk.DP_SAFE_EPSILON.get = function() {
					return 1e-15
				}, Object.defineProperties(sB, sk);
				var sz = function() {},
					sj = {
						X: {
							configurable: !0
						},
						Y: {
							configurable: !0
						},
						Z: {
							configurable: !0
						},
						M: {
							configurable: !0
						}
					};
				sj.X.get = function() {
					return 0
				}, sj.Y.get = function() {
					return 1
				}, sj.Z.get = function() {
					return 2
				}, sj.M.get = function() {
					return 3
				}, sz.prototype.setOrdinate = function(t, e, n) {}, sz.prototype.size = function() {}, sz.prototype.getOrdinate = function(t, e) {}, sz.prototype.getCoordinate = function() {}, sz.prototype.getCoordinateCopy = function(t) {}, sz.prototype.getDimension = function() {}, sz.prototype.getX = function(t) {}, sz.prototype.clone = function() {}, sz.prototype.expandEnvelope = function(t) {}, sz.prototype.copy = function() {}, sz.prototype.getY = function(t) {}, sz.prototype.toCoordinateArray = function() {}, sz.prototype.interfaces_ = function() {
					return [sI]
				}, sz.prototype.getClass = function() {
					return sz
				}, Object.defineProperties(sz, sj);
				var sX = function() {},
					sU = function(t) {
						function e() {
							t.call(this, "Projective point not representable on the Cartesian plane.")
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, e
					}(sX),
					sY = function() {};
				sY.arraycopy = function(t, e, n, r, i) {
					for (var o = 0, s = e; s < e + i; s++) n[r + o] = t[s], o++
				}, sY.getProperty = function(t) {
					return ({
						"line.separator": "\n"
					})[t]
				};
				var sV = function t() {
					if (this.x = null, this.y = null, this.w = null, 0 == arguments.length) this.x = 0, this.y = 0, this.w = 1;
					else if (1 == arguments.length) {
						var e = arguments[0];
						this.x = e.x, this.y = e.y, this.w = 1
					} else if (2 == arguments.length) {
						if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
							var n = arguments[0],
								r = arguments[1];
							this.x = n, this.y = r, this.w = 1
						} else if (arguments[0] instanceof t && arguments[1] instanceof t) {
							var i = arguments[0],
								o = arguments[1];
							this.x = i.y * o.w - o.y * i.w, this.y = o.x * i.w - i.x * o.w, this.w = i.x * o.y - o.x * i.y
						} else if (arguments[0] instanceof sw && arguments[1] instanceof sw) {
							var s = arguments[0],
								a = arguments[1];
							this.x = s.y - a.y, this.y = a.x - s.x, this.w = s.x * a.y - a.x * s.y
						}
					} else if (3 == arguments.length) {
						var u = arguments[0],
							h = arguments[1],
							c = arguments[2];
						this.x = u, this.y = h, this.w = c
					} else if (4 == arguments.length) {
						var l = arguments[0],
							p = arguments[1],
							f = arguments[2],
							g = arguments[3],
							d = l.y - p.y,
							y = p.x - l.x,
							_ = l.x * p.y - p.x * l.y,
							m = f.y - g.y,
							v = g.x - f.x,
							x = f.x * g.y - g.x * f.y;
						this.x = y * x - v * _, this.y = m * _ - d * x, this.w = d * v - m * y
					}
				};
				sV.prototype.getY = function() {
					var t = this.y / this.w;
					if (sx.isNaN(t) || sx.isInfinite(t)) throw new sU;
					return t
				}, sV.prototype.getX = function() {
					var t = this.x / this.w;
					if (sx.isNaN(t) || sx.isInfinite(t)) throw new sU;
					return t
				}, sV.prototype.getCoordinate = function() {
					var t = new sw;
					return t.x = this.getX(), t.y = this.getY(), t
				}, sV.prototype.interfaces_ = function() {
					return []
				}, sV.prototype.getClass = function() {
					return sV
				}, sV.intersection = function(t, e, n, r) {
					var i = t.y - e.y,
						o = e.x - t.x,
						s = t.x * e.y - e.x * t.y,
						a = n.y - r.y,
						u = r.x - n.x,
						h = n.x * r.y - r.x * n.y,
						c = i * u - a * o,
						l = (o * h - u * s) / c,
						p = (a * s - i * h) / c;
					if (sx.isNaN(l) || sx.isInfinite(l) || sx.isNaN(p) || sx.isInfinite(p)) throw new sU;
					return new sw(l, p)
				};
				var sH = function t() {
						if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, 0 == arguments.length) this.init();
						else if (1 == arguments.length) {
							if (arguments[0] instanceof sw) {
								var e = arguments[0];
								this.init(e.x, e.x, e.y, e.y)
							} else if (arguments[0] instanceof t) {
								var n = arguments[0];
								this.init(n)
							}
						} else if (2 == arguments.length) {
							var r = arguments[0],
								i = arguments[1];
							this.init(r.x, i.x, r.y, i.y)
						} else if (4 == arguments.length) {
							var o = arguments[0],
								s = arguments[1],
								a = arguments[2],
								u = arguments[3];
							this.init(o, s, a, u)
						}
					},
					sW = {
						serialVersionUID: {
							configurable: !0
						}
					};
				sH.prototype.getArea = function() {
					return this.getWidth() * this.getHeight()
				}, sH.prototype.equals = function(t) {
					return t instanceof sH && (this.isNull() ? t.isNull() : this._maxx === t.getMaxX() && this._maxy === t.getMaxY() && this._minx === t.getMinX() && this._miny === t.getMinY())
				}, sH.prototype.intersection = function(t) {
					if (this.isNull() || t.isNull() || !this.intersects(t)) return new sH;
					var e = this._minx > t._minx ? this._minx : t._minx,
						n = this._miny > t._miny ? this._miny : t._miny;
					return new sH(e, this._maxx < t._maxx ? this._maxx : t._maxx, n, this._maxy < t._maxy ? this._maxy : t._maxy)
				}, sH.prototype.isNull = function() {
					return this._maxx < this._minx
				}, sH.prototype.getMaxX = function() {
					return this._maxx
				}, sH.prototype.covers = function() {
					if (1 == arguments.length) {
						if (arguments[0] instanceof sw) {
							var t = arguments[0];
							return this.covers(t.x, t.y)
						}
						if (arguments[0] instanceof sH) {
							var e = arguments[0];
							return !this.isNull() && !e.isNull() && e.getMinX() >= this._minx && e.getMaxX() <= this._maxx && e.getMinY() >= this._miny && e.getMaxY() <= this._maxy
						}
					} else if (2 == arguments.length) {
						var n = arguments[0],
							r = arguments[1];
						return !this.isNull() && n >= this._minx && n <= this._maxx && r >= this._miny && r <= this._maxy
					}
				}, sH.prototype.intersects = function() {
					if (1 == arguments.length) {
						if (arguments[0] instanceof sH) {
							var t = arguments[0];
							return !this.isNull() && !t.isNull() && !(t._minx > this._maxx || t._maxx < this._minx || t._miny > this._maxy || t._maxy < this._miny)
						}
						if (arguments[0] instanceof sw) {
							var e = arguments[0];
							return this.intersects(e.x, e.y)
						}
					} else if (2 == arguments.length) {
						var n = arguments[0],
							r = arguments[1];
						return !this.isNull() && !(n > this._maxx || n < this._minx || r > this._maxy || r < this._miny)
					}
				}, sH.prototype.getMinY = function() {
					return this._miny
				}, sH.prototype.getMinX = function() {
					return this._minx
				}, sH.prototype.expandToInclude = function() {
					if (1 == arguments.length) {
						if (arguments[0] instanceof sw) {
							var t = arguments[0];
							this.expandToInclude(t.x, t.y)
						} else if (arguments[0] instanceof sH) {
							var e = arguments[0];
							if (e.isNull()) return null;
							this.isNull() ? (this._minx = e.getMinX(), this._maxx = e.getMaxX(), this._miny = e.getMinY(), this._maxy = e.getMaxY()) : (e._minx < this._minx && (this._minx = e._minx), e._maxx > this._maxx && (this._maxx = e._maxx), e._miny < this._miny && (this._miny = e._miny), e._maxy > this._maxy && (this._maxy = e._maxy))
						}
					} else if (2 == arguments.length) {
						var n = arguments[0],
							r = arguments[1];
						this.isNull() ? (this._minx = n, this._maxx = n, this._miny = r, this._maxy = r) : (n < this._minx && (this._minx = n), n > this._maxx && (this._maxx = n), r < this._miny && (this._miny = r), r > this._maxy && (this._maxy = r))
					}
				}, sH.prototype.minExtent = function() {
					if (this.isNull()) return 0;
					var t = this.getWidth(),
						e = this.getHeight();
					return t < e ? t : e
				}, sH.prototype.getWidth = function() {
					return this.isNull() ? 0 : this._maxx - this._minx
				}, sH.prototype.compareTo = function(t) {
					return this.isNull() ? t.isNull() ? 0 : -1 : t.isNull() ? 1 : this._minx < t._minx ? -1 : this._minx > t._minx ? 1 : this._miny < t._miny ? -1 : this._miny > t._miny ? 1 : this._maxx < t._maxx ? -1 : this._maxx > t._maxx ? 1 : this._maxy < t._maxy ? -1 : this._maxy > t._maxy ? 1 : 0
				}, sH.prototype.translate = function(t, e) {
					if (this.isNull()) return null;
					this.init(this.getMinX() + t, this.getMaxX() + t, this.getMinY() + e, this.getMaxY() + e)
				}, sH.prototype.toString = function() {
					return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]"
				}, sH.prototype.setToNull = function() {
					this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1
				}, sH.prototype.getHeight = function() {
					return this.isNull() ? 0 : this._maxy - this._miny
				}, sH.prototype.maxExtent = function() {
					if (this.isNull()) return 0;
					var t = this.getWidth(),
						e = this.getHeight();
					return t > e ? t : e
				}, sH.prototype.expandBy = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						this.expandBy(t, t)
					} else if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						if (this.isNull()) return null;
						this._minx -= e, this._maxx += e, this._miny -= n, this._maxy += n, (this._minx > this._maxx || this._miny > this._maxy) && this.setToNull()
					}
				}, sH.prototype.contains = function() {
					if (1 == arguments.length) {
						if (arguments[0] instanceof sH) {
							var t = arguments[0];
							return this.covers(t)
						}
						if (arguments[0] instanceof sw) {
							var e = arguments[0];
							return this.covers(e)
						}
					} else if (2 == arguments.length) {
						var n = arguments[0],
							r = arguments[1];
						return this.covers(n, r)
					}
				}, sH.prototype.centre = function() {
					return this.isNull() ? null : new sw((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2)
				}, sH.prototype.init = function() {
					if (0 == arguments.length) this.setToNull();
					else if (1 == arguments.length) {
						if (arguments[0] instanceof sw) {
							var t = arguments[0];
							this.init(t.x, t.x, t.y, t.y)
						} else if (arguments[0] instanceof sH) {
							var e = arguments[0];
							this._minx = e._minx, this._maxx = e._maxx, this._miny = e._miny, this._maxy = e._maxy
						}
					} else if (2 == arguments.length) {
						var n = arguments[0],
							r = arguments[1];
						this.init(n.x, r.x, n.y, r.y)
					} else if (4 == arguments.length) {
						var i = arguments[0],
							o = arguments[1],
							s = arguments[2],
							a = arguments[3];
						i < o ? (this._minx = i, this._maxx = o) : (this._minx = o, this._maxx = i), s < a ? (this._miny = s, this._maxy = a) : (this._miny = a, this._maxy = s)
					}
				}, sH.prototype.getMaxY = function() {
					return this._maxy
				}, sH.prototype.distance = function(t) {
					if (this.intersects(t)) return 0;
					var e = 0;
					this._maxx < t._minx ? e = t._minx - this._maxx : this._minx > t._maxx && (e = this._minx - t._maxx);
					var n = 0;
					return this._maxy < t._miny ? n = t._miny - this._maxy : this._miny > t._maxy && (n = this._miny - t._maxy), 0 === e ? n : 0 === n ? e : Math.sqrt(e * e + n * n)
				}, sH.prototype.hashCode = function() {
					return 37 * (37 * (37 * (629 + sw.hashCode(this._minx)) + sw.hashCode(this._maxx)) + sw.hashCode(this._miny)) + sw.hashCode(this._maxy)
				}, sH.prototype.interfaces_ = function() {
					return [sb, rE]
				}, sH.prototype.getClass = function() {
					return sH
				}, sH.intersects = function() {
					if (3 == arguments.length) {
						var t = arguments[0],
							e = arguments[1],
							n = arguments[2];
						return n.x >= (t.x < e.x ? t.x : e.x) && n.x <= (t.x > e.x ? t.x : e.x) && n.y >= (t.y < e.y ? t.y : e.y) && n.y <= (t.y > e.y ? t.y : e.y)
					}
					if (4 == arguments.length) {
						var r = arguments[0],
							i = arguments[1],
							o = arguments[2],
							s = arguments[3],
							a = Math.min(o.x, s.x),
							u = Math.max(o.x, s.x),
							h = Math.min(r.x, i.x),
							c = Math.max(r.x, i.x);
						return !(h > u) && !(c < a) && (a = Math.min(o.y, s.y), u = Math.max(o.y, s.y), h = Math.min(r.y, i.y), c = Math.max(r.y, i.y), !(h > u) && !(c < a))
					}
				}, sW.serialVersionUID.get = function() {
					return 0x51845cd552189800
				}, Object.defineProperties(sH, sW);
				var sJ = {
						typeStr: /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
						emptyTypeStr: /^\s*(\w+)\s*EMPTY\s*$/,
						spaces: /\s+/,
						parenComma: /\)\s*,\s*\(/,
						doubleParenComma: /\)\s*\)\s*,\s*\(\s*\(/,
						trimParens: /^\s*\(?(.*?)\)?\s*$/
					},
					sZ = function(t) {
						this.geometryFactory = t || new a7
					};
				sZ.prototype.read = function(t) {
					t = t.replace(/[\n\r]/g, " ");
					var e, n, r, i = sJ.typeStr.exec(t);
					if (-1 !== t.search("EMPTY") && ((i = sJ.emptyTypeStr.exec(t))[2] = void 0), i && (n = i[1].toLowerCase(), r = i[2], sQ[n] && (e = sQ[n].apply(this, [r]))), void 0 === e) throw Error("Could not parse WKT " + t);
					return e
				}, sZ.prototype.write = function(t) {
					return this.extractGeometry(t)
				}, sZ.prototype.extractGeometry = function(t) {
					var e = t.getGeometryType().toLowerCase();
					if (!sK[e]) return null;
					var n = e.toUpperCase();
					return t.isEmpty() ? n + " EMPTY" : n + "(" + sK[e].apply(this, [t]) + ")"
				};
				var sK = {
						coordinate: function(t) {
							return t.x + " " + t.y
						},
						point: function(t) {
							return sK.coordinate.call(this, t._coordinates._coordinates[0])
						},
						multipoint: function(t) {
							for (var e = [], n = 0, r = t._geometries.length; n < r; ++n) e.push("(" + sK.point.apply(this, [t._geometries[n]]) + ")");
							return e.join(",")
						},
						linestring: function(t) {
							for (var e = [], n = 0, r = t._points._coordinates.length; n < r; ++n) e.push(sK.coordinate.apply(this, [t._points._coordinates[n]]));
							return e.join(",")
						},
						linearring: function(t) {
							for (var e = [], n = 0, r = t._points._coordinates.length; n < r; ++n) e.push(sK.coordinate.apply(this, [t._points._coordinates[n]]));
							return e.join(",")
						},
						multilinestring: function(t) {
							for (var e = [], n = 0, r = t._geometries.length; n < r; ++n) e.push("(" + sK.linestring.apply(this, [t._geometries[n]]) + ")");
							return e.join(",")
						},
						polygon: function(t) {
							var e = [];
							e.push("(" + sK.linestring.apply(this, [t._shell]) + ")");
							for (var n = 0, r = t._holes.length; n < r; ++n) e.push("(" + sK.linestring.apply(this, [t._holes[n]]) + ")");
							return e.join(",")
						},
						multipolygon: function(t) {
							for (var e = [], n = 0, r = t._geometries.length; n < r; ++n) e.push("(" + sK.polygon.apply(this, [t._geometries[n]]) + ")");
							return e.join(",")
						},
						geometrycollection: function(t) {
							for (var e = [], n = 0, r = t._geometries.length; n < r; ++n) e.push(this.extractGeometry(t._geometries[n]));
							return e.join(",")
						}
					},
					sQ = {
						point: function(t) {
							if (void 0 === t) return this.geometryFactory.createPoint();
							var e = t.trim().split(sJ.spaces);
							return this.geometryFactory.createPoint(new sw(Number.parseFloat(e[0]), Number.parseFloat(e[1])))
						},
						multipoint: function(t) {
							if (void 0 === t) return this.geometryFactory.createMultiPoint();
							for (var e, n = t.trim().split(","), r = [], i = 0, o = n.length; i < o; ++i) e = n[i].replace(sJ.trimParens, "$1"), r.push(sQ.point.apply(this, [e]));
							return this.geometryFactory.createMultiPoint(r)
						},
						linestring: function(t) {
							if (void 0 === t) return this.geometryFactory.createLineString();
							for (var e, n = t.trim().split(","), r = [], i = 0, o = n.length; i < o; ++i) e = n[i].trim().split(sJ.spaces), r.push(new sw(Number.parseFloat(e[0]), Number.parseFloat(e[1])));
							return this.geometryFactory.createLineString(r)
						},
						linearring: function(t) {
							if (void 0 === t) return this.geometryFactory.createLinearRing();
							for (var e, n = t.trim().split(","), r = [], i = 0, o = n.length; i < o; ++i) e = n[i].trim().split(sJ.spaces), r.push(new sw(Number.parseFloat(e[0]), Number.parseFloat(e[1])));
							return this.geometryFactory.createLinearRing(r)
						},
						multilinestring: function(t) {
							if (void 0 === t) return this.geometryFactory.createMultiLineString();
							for (var e, n = t.trim().split(sJ.parenComma), r = [], i = 0, o = n.length; i < o; ++i) e = n[i].replace(sJ.trimParens, "$1"), r.push(sQ.linestring.apply(this, [e]));
							return this.geometryFactory.createMultiLineString(r)
						},
						polygon: function(t) {
							if (void 0 === t) return this.geometryFactory.createPolygon();
							for (var e, n, r, i, o = t.trim().split(sJ.parenComma), s = [], a = 0, u = o.length; a < u; ++a) e = o[a].replace(sJ.trimParens, "$1"), n = sQ.linestring.apply(this, [e]), r = this.geometryFactory.createLinearRing(n._points), 0 === a ? i = r : s.push(r);
							return this.geometryFactory.createPolygon(i, s)
						},
						multipolygon: function(t) {
							if (void 0 === t) return this.geometryFactory.createMultiPolygon();
							for (var e, n = t.trim().split(sJ.doubleParenComma), r = [], i = 0, o = n.length; i < o; ++i) e = n[i].replace(sJ.trimParens, "$1"), r.push(sQ.polygon.apply(this, [e]));
							return this.geometryFactory.createMultiPolygon(r)
						},
						geometrycollection: function(t) {
							if (void 0 === t) return this.geometryFactory.createGeometryCollection();
							for (var e = (t = t.replace(/,\s*([A-Za-z])/g, "|$1")).trim().split("|"), n = [], r = 0, i = e.length; r < i; ++r) n.push(this.read(e[r]));
							return this.geometryFactory.createGeometryCollection(n)
						}
					},
					s$ = function(t) {
						this.parser = new sZ(t)
					};
				s$.prototype.write = function(t) {
					return this.parser.write(t)
				}, s$.toLineString = function(t, e) {
					if (2 != arguments.length) throw Error("Not implemented");
					return "LINESTRING ( " + t.x + " " + t.y + ", " + e.x + " " + e.y + " )"
				};
				var s0 = function(t) {
						function e(e) {
							t.call(this, e), this.name = "RuntimeException", this.message = e, this.stack = (new t).stack
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
					}(Error),
					s1 = function(t) {
						function e() {
							if (t.call(this), 0 == arguments.length) t.call(this);
							else if (1 == arguments.length) {
								var e = arguments[0];
								t.call(this, e)
							}
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, e
					}(s0),
					s2 = function() {};
				s2.prototype.interfaces_ = function() {
					return []
				}, s2.prototype.getClass = function() {
					return s2
				}, s2.shouldNeverReachHere = function() {
					if (0 == arguments.length) s2.shouldNeverReachHere(null);
					else if (1 == arguments.length) {
						var t = arguments[0];
						throw new s1("Should never reach here" + (null !== t ? ": " + t : ""))
					}
				}, s2.isTrue = function() {
					var t, e;
					if (1 == arguments.length) t = arguments[0], s2.isTrue(t, null);
					else if (2 == arguments.length && (t = arguments[0], e = arguments[1], !t)) throw null === e ? new s1 : new s1(e)
				}, s2.equals = function() {
					var t, e, n;
					if (2 == arguments.length) t = arguments[0], e = arguments[1], s2.equals(t, e, null);
					else if (3 == arguments.length && (t = arguments[0], e = arguments[1], n = arguments[2], !e.equals(t))) throw new s1("Expected " + t + " but encountered " + e + (null !== n ? ": " + n : ""))
				};
				var s3 = function() {
						this._result = null, this._inputLines = [, , ].fill().map(function() {
							return [, , ]
						}), this._intPt = [, , ].fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new sw, this._intPt[1] = new sw, this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0
					},
					s4 = {
						DONT_INTERSECT: {
							configurable: !0
						},
						DO_INTERSECT: {
							configurable: !0
						},
						COLLINEAR: {
							configurable: !0
						},
						NO_INTERSECTION: {
							configurable: !0
						},
						POINT_INTERSECTION: {
							configurable: !0
						},
						COLLINEAR_INTERSECTION: {
							configurable: !0
						}
					};
				s3.prototype.getIndexAlongSegment = function(t, e) {
					return this.computeIntLineIndex(), this._intLineIndex[t][e]
				}, s3.prototype.getTopologySummary = function() {
					var t = new sD;
					return this.isEndPoint() && t.append(" endpoint"), this._isProper && t.append(" proper"), this.isCollinear() && t.append(" collinear"), t.toString()
				}, s3.prototype.computeIntersection = function(t, e, n, r) {
					this._inputLines[0][0] = t, this._inputLines[0][1] = e, this._inputLines[1][0] = n, this._inputLines[1][1] = r, this._result = this.computeIntersect(t, e, n, r)
				}, s3.prototype.getIntersectionNum = function() {
					return this._result
				}, s3.prototype.computeIntLineIndex = function() {
					if (0 == arguments.length) null === this._intLineIndex && (this._intLineIndex = [, , ].fill().map(function() {
						return [, , ]
					}), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
					else if (1 == arguments.length) {
						var t = arguments[0];
						this.getEdgeDistance(t, 0) > this.getEdgeDistance(t, 1) ? (this._intLineIndex[t][0] = 0, this._intLineIndex[t][1] = 1) : (this._intLineIndex[t][0] = 1, this._intLineIndex[t][1] = 0)
					}
				}, s3.prototype.isProper = function() {
					return this.hasIntersection() && this._isProper
				}, s3.prototype.setPrecisionModel = function(t) {
					this._precisionModel = t
				}, s3.prototype.isInteriorIntersection = function() {
					if (0 == arguments.length) return !!this.isInteriorIntersection(0) || !!this.isInteriorIntersection(1);
					if (1 == arguments.length) {
						for (var t = arguments[0], e = 0; e < this._result; e++)
							if (!this._intPt[e].equals2D(this._inputLines[t][0]) && !this._intPt[e].equals2D(this._inputLines[t][1])) return !0;
						return !1
					}
				}, s3.prototype.getIntersection = function(t) {
					return this._intPt[t]
				}, s3.prototype.isEndPoint = function() {
					return this.hasIntersection() && !this._isProper
				}, s3.prototype.hasIntersection = function() {
					return this._result !== s3.NO_INTERSECTION
				}, s3.prototype.getEdgeDistance = function(t, e) {
					return s3.computeEdgeDistance(this._intPt[e], this._inputLines[t][0], this._inputLines[t][1])
				}, s3.prototype.isCollinear = function() {
					return this._result === s3.COLLINEAR_INTERSECTION
				}, s3.prototype.toString = function() {
					return s$.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + s$.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary()
				}, s3.prototype.getEndpoint = function(t, e) {
					return this._inputLines[t][e]
				}, s3.prototype.isIntersection = function(t) {
					for (var e = 0; e < this._result; e++)
						if (this._intPt[e].equals2D(t)) return !0;
					return !1
				}, s3.prototype.getIntersectionAlongSegment = function(t, e) {
					return this.computeIntLineIndex(), this._intPt[this._intLineIndex[t][e]]
				}, s3.prototype.interfaces_ = function() {
					return []
				}, s3.prototype.getClass = function() {
					return s3
				}, s3.computeEdgeDistance = function(t, e, n) {
					var r = Math.abs(n.x - e.x),
						i = Math.abs(n.y - e.y),
						o = -1;
					if (t.equals(e)) o = 0;
					else if (t.equals(n)) o = r > i ? r : i;
					else {
						var s = Math.abs(t.x - e.x),
							a = Math.abs(t.y - e.y);
						0 !== (o = r > i ? s : a) || t.equals(e) || (o = Math.max(s, a))
					}
					return s2.isTrue(!(0 === o && !t.equals(e)), "Bad distance calculation"), o
				}, s3.nonRobustComputeEdgeDistance = function(t, e, n) {
					var r = t.x - e.x,
						i = t.y - e.y,
						o = Math.sqrt(r * r + i * i);
					return s2.isTrue(!(0 === o && !t.equals(e)), "Invalid distance calculation"), o
				}, s4.DONT_INTERSECT.get = function() {
					return 0
				}, s4.DO_INTERSECT.get = function() {
					return 1
				}, s4.COLLINEAR.get = function() {
					return 2
				}, s4.NO_INTERSECTION.get = function() {
					return 0
				}, s4.POINT_INTERSECTION.get = function() {
					return 1
				}, s4.COLLINEAR_INTERSECTION.get = function() {
					return 2
				}, Object.defineProperties(s3, s4);
				var s6 = function(t) {
						function e() {
							t.apply(this, arguments)
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.isInSegmentEnvelopes = function(t) {
							var e = new sH(this._inputLines[0][0], this._inputLines[0][1]),
								n = new sH(this._inputLines[1][0], this._inputLines[1][1]);
							return e.contains(t) && n.contains(t)
						}, e.prototype.computeIntersection = function() {
							if (3 != arguments.length) return t.prototype.computeIntersection.apply(this, arguments);
							var e = arguments[0],
								n = arguments[1],
								r = arguments[2];
							if (this._isProper = !1, sH.intersects(n, r, e) && 0 === s9.orientationIndex(n, r, e) && 0 === s9.orientationIndex(r, n, e)) return this._isProper = !0, (e.equals(n) || e.equals(r)) && (this._isProper = !1), this._result = t.POINT_INTERSECTION, null;
							this._result = t.NO_INTERSECTION
						}, e.prototype.normalizeToMinimum = function(t, e, n, r, i) {
							i.x = this.smallestInAbsValue(t.x, e.x, n.x, r.x), i.y = this.smallestInAbsValue(t.y, e.y, n.y, r.y), t.x -= i.x, t.y -= i.y, e.x -= i.x, e.y -= i.y, n.x -= i.x, n.y -= i.y, r.x -= i.x, r.y -= i.y
						}, e.prototype.safeHCoordinateIntersection = function(t, n, r, i) {
							var o = null;
							try {
								o = sV.intersection(t, n, r, i)
							} catch (s) {
								if (!(s instanceof sU)) throw s;
								o = e.nearestEndpoint(t, n, r, i)
							}
							return o
						}, e.prototype.intersection = function(t, n, r, i) {
							var o = this.intersectionWithNormalization(t, n, r, i);
							return this.isInSegmentEnvelopes(o) || (o = new sw(e.nearestEndpoint(t, n, r, i))), null !== this._precisionModel && this._precisionModel.makePrecise(o), o
						}, e.prototype.smallestInAbsValue = function(t, e, n, r) {
							var i = t,
								o = Math.abs(i);
							return Math.abs(e) < o && (i = e, o = Math.abs(e)), Math.abs(n) < o && (i = n, o = Math.abs(n)), Math.abs(r) < o && (i = r), i
						}, e.prototype.checkDD = function(t, e, n, r, i) {
							var o = sB.intersection(t, e, n, r),
								s = this.isInSegmentEnvelopes(o);
							sY.out.println("DD in env = " + s + "  --------------------- " + o), i.distance(o) > 1e-4 && sY.out.println("Distance = " + i.distance(o))
						}, e.prototype.intersectionWithNormalization = function(t, e, n, r) {
							var i = new sw(t),
								o = new sw(e),
								s = new sw(n),
								a = new sw(r),
								u = new sw;
							this.normalizeToEnvCentre(i, o, s, a, u);
							var h = this.safeHCoordinateIntersection(i, o, s, a);
							return h.x += u.x, h.y += u.y, h
						}, e.prototype.computeCollinearIntersection = function(e, n, r, i) {
							var o = sH.intersects(e, n, r),
								s = sH.intersects(e, n, i),
								a = sH.intersects(r, i, e),
								u = sH.intersects(r, i, n);
							return o && s ? (this._intPt[0] = r, this._intPt[1] = i, t.COLLINEAR_INTERSECTION) : a && u ? (this._intPt[0] = e, this._intPt[1] = n, t.COLLINEAR_INTERSECTION) : o && a ? (this._intPt[0] = r, this._intPt[1] = e, !r.equals(e) || s || u ? t.COLLINEAR_INTERSECTION : t.POINT_INTERSECTION) : o && u ? (this._intPt[0] = r, this._intPt[1] = n, !r.equals(n) || s || a ? t.COLLINEAR_INTERSECTION : t.POINT_INTERSECTION) : s && a ? (this._intPt[0] = i, this._intPt[1] = e, !i.equals(e) || o || u ? t.COLLINEAR_INTERSECTION : t.POINT_INTERSECTION) : s && u ? (this._intPt[0] = i, this._intPt[1] = n, !i.equals(n) || o || a ? t.COLLINEAR_INTERSECTION : t.POINT_INTERSECTION) : t.NO_INTERSECTION
						}, e.prototype.normalizeToEnvCentre = function(t, e, n, r, i) {
							var o = t.x < e.x ? t.x : e.x,
								s = t.y < e.y ? t.y : e.y,
								a = t.x > e.x ? t.x : e.x,
								u = t.y > e.y ? t.y : e.y,
								h = n.x < r.x ? n.x : r.x,
								c = n.y < r.y ? n.y : r.y,
								l = n.x > r.x ? n.x : r.x,
								p = n.y > r.y ? n.y : r.y;
							i.x = ((o > h ? o : h) + (a < l ? a : l)) / 2, i.y = ((s > c ? s : c) + (u < p ? u : p)) / 2, t.x -= i.x, t.y -= i.y, e.x -= i.x, e.y -= i.y, n.x -= i.x, n.y -= i.y, r.x -= i.x, r.y -= i.y
						}, e.prototype.computeIntersect = function(e, n, r, i) {
							if (this._isProper = !1, !sH.intersects(e, n, r, i)) return t.NO_INTERSECTION;
							var o = s9.orientationIndex(e, n, r),
								s = s9.orientationIndex(e, n, i);
							if (o > 0 && s > 0 || o < 0 && s < 0) return t.NO_INTERSECTION;
							var a = s9.orientationIndex(r, i, e),
								u = s9.orientationIndex(r, i, n);
							return a > 0 && u > 0 || a < 0 && u < 0 ? t.NO_INTERSECTION : 0 === o && 0 === s && 0 === a && 0 === u ? this.computeCollinearIntersection(e, n, r, i) : (0 === o || 0 === s || 0 === a || 0 === u ? (this._isProper = !1, e.equals2D(r) || e.equals2D(i) ? this._intPt[0] = e : n.equals2D(r) || n.equals2D(i) ? this._intPt[0] = n : 0 === o ? this._intPt[0] = new sw(r) : 0 === s ? this._intPt[0] = new sw(i) : 0 === a ? this._intPt[0] = new sw(e) : 0 === u && (this._intPt[0] = new sw(n))) : (this._isProper = !0, this._intPt[0] = this.intersection(e, n, r, i)), t.POINT_INTERSECTION)
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, e.nearestEndpoint = function(t, e, n, r) {
							var i = t,
								o = s9.distancePointLine(t, n, r),
								s = s9.distancePointLine(e, n, r);
							return s < o && (o = s, i = e), (s = s9.distancePointLine(n, t, e)) < o && (o = s, i = n), (s = s9.distancePointLine(r, t, e)) < o && (o = s, i = r), i
						}, e
					}(s3),
					s8 = function() {};
				s8.prototype.interfaces_ = function() {
					return []
				}, s8.prototype.getClass = function() {
					return s8
				}, s8.orientationIndex = function(t, e, n) {
					var r = e.x - t.x,
						i = e.y - t.y,
						o = n.x - e.x,
						s = n.y - e.y;
					return s8.signOfDet2x2(r, i, o, s)
				}, s8.signOfDet2x2 = function(t, e, n, r) {
					var i = null,
						o = null,
						s = null;
					if (i = 1, 0 === t || 0 === r) return 0 === e || 0 === n ? 0 : e > 0 ? n > 0 ? -i : i : n > 0 ? i : -i;
					if (0 === e || 0 === n) return r > 0 ? t > 0 ? i : -i : t > 0 ? -i : i;
					if (e > 0 ? r > 0 ? e <= r || (i = -i, o = t, t = n, n = o, o = e, e = r, r = o) : e <= -r ? (i = -i, n = -n, r = -r) : (o = t, t = -n, n = o, o = e, e = -r, r = o) : r > 0 ? -e <= r ? (i = -i, t = -t, e = -e) : (o = -t, t = n, n = o, o = -e, e = r, r = o) : e >= r ? (t = -t, e = -e, n = -n, r = -r) : (i = -i, o = -t, t = -n, n = o, o = -e, e = -r, r = o), t > 0) {
						if (!(n > 0) || !(t <= n)) return i
					} else {
						if (n > 0 || !(t >= n)) return -i;
						i = -i, t = -t, n = -n
					}
					for (;;) {
						if (s = Math.floor(n / t), n -= s * t, (r -= s * e) < 0) return -i;
						if (r > e) return i;
						if (t > n + n) {
							if (e < r + r) return i
						} else {
							if (e > r + r) return -i;
							n = t - n, r = e - r, i = -i
						}
						if (0 === r) return 0 === n ? 0 : -i;
						if (0 === n || (s = Math.floor(t / n), t -= s * n, (e -= s * r) < 0)) return i;
						if (e > r) return -i;
						if (n > t + t) {
							if (r < e + e) return -i
						} else {
							if (r > e + e) return i;
							t = n - t, e = r - e, i = -i
						}
						if (0 === e) return 0 === t ? 0 : i;
						if (0 === t) return -i
					}
				};
				var s5 = function() {
					this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
					var t = arguments[0];
					this._p = t
				};
				s5.prototype.countSegment = function(t, e) {
					if (t.x < this._p.x && e.x < this._p.x) return null;
					if (this._p.x === e.x && this._p.y === e.y) return this._isPointOnSegment = !0, null;
					if (t.y === this._p.y && e.y === this._p.y) {
						var n = t.x,
							r = e.x;
						return n > r && (n = e.x, r = t.x), this._p.x >= n && this._p.x <= r && (this._isPointOnSegment = !0), null
					}
					if (t.y > this._p.y && e.y <= this._p.y || e.y > this._p.y && t.y <= this._p.y) {
						var i = t.x - this._p.x,
							o = t.y - this._p.y,
							s = e.x - this._p.x,
							a = e.y - this._p.y,
							u = s8.signOfDet2x2(i, o, s, a);
						if (0 === u) return this._isPointOnSegment = !0, null;
						a < o && (u = -u), u > 0 && this._crossingCount++
					}
				}, s5.prototype.isPointInPolygon = function() {
					return this.getLocation() !== sL.EXTERIOR
				}, s5.prototype.getLocation = function() {
					return this._isPointOnSegment ? sL.BOUNDARY : this._crossingCount % 2 == 1 ? sL.INTERIOR : sL.EXTERIOR
				}, s5.prototype.isOnSegment = function() {
					return this._isPointOnSegment
				}, s5.prototype.interfaces_ = function() {
					return []
				}, s5.prototype.getClass = function() {
					return s5
				}, s5.locatePointInRing = function() {
					if (arguments[0] instanceof sw && sO(arguments[1], sz)) {
						for (var t = arguments[0], e = arguments[1], n = new s5(t), r = new sw, i = new sw, o = 1; o < e.size() && (e.getCoordinate(o, r), e.getCoordinate(o - 1, i), n.countSegment(r, i), !n.isOnSegment()); o++);
						return n.getLocation()
					}
					if (arguments[0] instanceof sw && arguments[1] instanceof Array) {
						for (var s = arguments[0], a = arguments[1], u = new s5(s), h = 1; h < a.length; h++) {
							var c = a[h],
								l = a[h - 1];
							if (u.countSegment(c, l), u.isOnSegment()) break
						}
						return u.getLocation()
					}
				};
				var s9 = function() {},
					s7 = {
						CLOCKWISE: {
							configurable: !0
						},
						RIGHT: {
							configurable: !0
						},
						COUNTERCLOCKWISE: {
							configurable: !0
						},
						LEFT: {
							configurable: !0
						},
						COLLINEAR: {
							configurable: !0
						},
						STRAIGHT: {
							configurable: !0
						}
					};
				s9.prototype.interfaces_ = function() {
					return []
				}, s9.prototype.getClass = function() {
					return s9
				}, s9.orientationIndex = function(t, e, n) {
					return sB.orientationIndex(t, e, n)
				}, s9.signedArea = function() {
					if (arguments[0] instanceof Array) {
						var t = arguments[0];
						if (t.length < 3) return 0;
						for (var e = 0, n = t[0].x, r = 1; r < t.length - 1; r++) {
							var i = t[r].x - n,
								o = t[r + 1].y;
							e += i * (t[r - 1].y - o)
						}
						return e / 2
					}
					if (sO(arguments[0], sz)) {
						var s = arguments[0],
							a = s.size();
						if (a < 3) return 0;
						var u = new sw,
							h = new sw,
							c = new sw;
						s.getCoordinate(0, h), s.getCoordinate(1, c);
						var l = h.x;
						c.x -= l;
						for (var p = 0, f = 1; f < a - 1; f++) u.y = h.y, h.x = c.x, h.y = c.y, s.getCoordinate(f + 1, c), c.x -= l, p += h.x * (u.y - c.y);
						return p / 2
					}
				}, s9.distanceLineLine = function(t, e, n, r) {
					if (t.equals(e)) return s9.distancePointLine(t, n, r);
					if (n.equals(r)) return s9.distancePointLine(r, t, e);
					var i = !1;
					if (sH.intersects(t, e, n, r)) {
						var o = (e.x - t.x) * (r.y - n.y) - (e.y - t.y) * (r.x - n.x);
						if (0 === o) i = !0;
						else {
							var s = (t.y - n.y) * (r.x - n.x) - (t.x - n.x) * (r.y - n.y),
								a = ((t.y - n.y) * (e.x - t.x) - (t.x - n.x) * (e.y - t.y)) / o,
								u = s / o;
							(u < 0 || u > 1 || a < 0 || a > 1) && (i = !0)
						}
					} else i = !0;
					return i ? sR.min(s9.distancePointLine(t, n, r), s9.distancePointLine(e, n, r), s9.distancePointLine(n, t, e), s9.distancePointLine(r, t, e)) : 0
				}, s9.isPointInRing = function(t, e) {
					return s9.locatePointInRing(t, e) !== sL.EXTERIOR
				}, s9.computeLength = function(t) {
					var e = t.size();
					if (e <= 1) return 0;
					var n = 0,
						r = new sw;
					t.getCoordinate(0, r);
					for (var i = r.x, o = r.y, s = 1; s < e; s++) {
						t.getCoordinate(s, r);
						var a = r.x,
							u = r.y,
							h = a - i,
							c = u - o;
						n += Math.sqrt(h * h + c * c), i = a, o = u
					}
					return n
				}, s9.isCCW = function(t) {
					var e = t.length - 1;
					if (e < 3) throw new sv("Ring has fewer than 4 points, so orientation cannot be determined");
					for (var n = t[0], r = 0, i = 1; i <= e; i++) {
						var o = t[i];
						o.y > n.y && (n = o, r = i)
					}
					var s = r;
					do(s -= 1) < 0 && (s = e); while (t[s].equals2D(n) && s !== r);
					var a = r;
					do a = (a + 1) % e; while (t[a].equals2D(n) && a !== r);
					var u = t[s],
						h = t[a];
					if (u.equals2D(n) || h.equals2D(n) || u.equals2D(h)) return !1;
					var c = s9.computeOrientation(u, n, h);
					return 0 === c ? u.x > h.x : c > 0
				}, s9.locatePointInRing = function(t, e) {
					return s5.locatePointInRing(t, e)
				}, s9.distancePointLinePerpendicular = function(t, e, n) {
					var r = (n.x - e.x) * (n.x - e.x) + (n.y - e.y) * (n.y - e.y);
					return Math.abs(((e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y)) / r) * Math.sqrt(r)
				}, s9.computeOrientation = function(t, e, n) {
					return s9.orientationIndex(t, e, n)
				}, s9.distancePointLine = function() {
					if (2 == arguments.length) {
						var t = arguments[0],
							e = arguments[1];
						if (0 === e.length) throw new sv("Line array must contain at least one vertex");
						for (var n = t.distance(e[0]), r = 0; r < e.length - 1; r++) {
							var i = s9.distancePointLine(t, e[r], e[r + 1]);
							i < n && (n = i)
						}
						return n
					}
					if (3 == arguments.length) {
						var o = arguments[0],
							s = arguments[1],
							a = arguments[2];
						if (s.x === a.x && s.y === a.y) return o.distance(s);
						var u = (a.x - s.x) * (a.x - s.x) + (a.y - s.y) * (a.y - s.y),
							h = ((o.x - s.x) * (a.x - s.x) + (o.y - s.y) * (a.y - s.y)) / u;
						return h <= 0 ? o.distance(s) : h >= 1 ? o.distance(a) : Math.abs(((s.y - o.y) * (a.x - s.x) - (s.x - o.x) * (a.y - s.y)) / u) * Math.sqrt(u)
					}
				}, s9.isOnLine = function(t, e) {
					for (var n = new s6, r = 1; r < e.length; r++) {
						var i = e[r - 1],
							o = e[r];
						if (n.computeIntersection(t, i, o), n.hasIntersection()) return !0
					}
					return !1
				}, s7.CLOCKWISE.get = function() {
					return -1
				}, s7.RIGHT.get = function() {
					return s9.CLOCKWISE
				}, s7.COUNTERCLOCKWISE.get = function() {
					return 1
				}, s7.LEFT.get = function() {
					return s9.COUNTERCLOCKWISE
				}, s7.COLLINEAR.get = function() {
					return 0
				}, s7.STRAIGHT.get = function() {
					return s9.COLLINEAR
				}, Object.defineProperties(s9, s7);
				var at = function() {};
				at.prototype.filter = function(t) {}, at.prototype.interfaces_ = function() {
					return []
				}, at.prototype.getClass = function() {
					return at
				};
				var ae = function() {
						var t = arguments[0];
						this._envelope = null, this._factory = null, this._SRID = null, this._userData = null, this._factory = t, this._SRID = t.getSRID()
					},
					an = {
						serialVersionUID: {
							configurable: !0
						},
						SORTINDEX_POINT: {
							configurable: !0
						},
						SORTINDEX_MULTIPOINT: {
							configurable: !0
						},
						SORTINDEX_LINESTRING: {
							configurable: !0
						},
						SORTINDEX_LINEARRING: {
							configurable: !0
						},
						SORTINDEX_MULTILINESTRING: {
							configurable: !0
						},
						SORTINDEX_POLYGON: {
							configurable: !0
						},
						SORTINDEX_MULTIPOLYGON: {
							configurable: !0
						},
						SORTINDEX_GEOMETRYCOLLECTION: {
							configurable: !0
						},
						geometryChangedFilter: {
							configurable: !0
						}
					};
				ae.prototype.isGeometryCollection = function() {
					return this.getSortIndex() === ae.SORTINDEX_GEOMETRYCOLLECTION
				}, ae.prototype.getFactory = function() {
					return this._factory
				}, ae.prototype.getGeometryN = function(t) {
					return this
				}, ae.prototype.getArea = function() {
					return 0
				}, ae.prototype.isRectangle = function() {
					return !1
				}, ae.prototype.equals = function() {
					if (arguments[0] instanceof ae) {
						var t = arguments[0];
						return null !== t && this.equalsTopo(t)
					}
					if (arguments[0] instanceof Object) {
						var e = arguments[0];
						return e instanceof ae && this.equalsExact(e)
					}
				}, ae.prototype.equalsExact = function(t) {
					return this === t || this.equalsExact(t, 0)
				}, ae.prototype.geometryChanged = function() {
					this.apply(ae.geometryChangedFilter)
				}, ae.prototype.geometryChangedAction = function() {
					this._envelope = null
				}, ae.prototype.equalsNorm = function(t) {
					return null !== t && this.norm().equalsExact(t.norm())
				}, ae.prototype.getLength = function() {
					return 0
				}, ae.prototype.getNumGeometries = function() {
					return 1
				}, ae.prototype.compareTo = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						return this.getSortIndex() !== t.getSortIndex() ? this.getSortIndex() - t.getSortIndex() : this.isEmpty() && t.isEmpty() ? 0 : this.isEmpty() ? -1 : t.isEmpty() ? 1 : this.compareToSameClass(t)
					}
					if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						return this.getSortIndex() !== e.getSortIndex() ? this.getSortIndex() - e.getSortIndex() : this.isEmpty() && e.isEmpty() ? 0 : this.isEmpty() ? -1 : e.isEmpty() ? 1 : this.compareToSameClass(e, n)
					}
				}, ae.prototype.getUserData = function() {
					return this._userData
				}, ae.prototype.getSRID = function() {
					return this._SRID
				}, ae.prototype.getEnvelope = function() {
					return this.getFactory().toGeometry(this.getEnvelopeInternal())
				}, ae.prototype.checkNotGeometryCollection = function(t) {
					if (t.getSortIndex() === ae.SORTINDEX_GEOMETRYCOLLECTION) throw new sv("This method does not support GeometryCollection arguments")
				}, ae.prototype.equal = function(t, e, n) {
					return 0 === n ? t.equals(e) : t.distance(e) <= n
				}, ae.prototype.norm = function() {
					var t = this.copy();
					return t.normalize(), t
				}, ae.prototype.getPrecisionModel = function() {
					return this._factory.getPrecisionModel()
				}, ae.prototype.getEnvelopeInternal = function() {
					return null === this._envelope && (this._envelope = this.computeEnvelopeInternal()), new sH(this._envelope)
				}, ae.prototype.setSRID = function(t) {
					this._SRID = t
				}, ae.prototype.setUserData = function(t) {
					this._userData = t
				}, ae.prototype.compare = function(t, e) {
					for (var n = t.iterator(), r = e.iterator(); n.hasNext() && r.hasNext();) {
						var i = n.next(),
							o = r.next(),
							s = i.compareTo(o);
						if (0 !== s) return s
					}
					return n.hasNext() ? 1 : r.hasNext() ? -1 : 0
				}, ae.prototype.hashCode = function() {
					return this.getEnvelopeInternal().hashCode()
				}, ae.prototype.isGeometryCollectionOrDerived = function() {
					return this.getSortIndex() === ae.SORTINDEX_GEOMETRYCOLLECTION || this.getSortIndex() === ae.SORTINDEX_MULTIPOINT || this.getSortIndex() === ae.SORTINDEX_MULTILINESTRING || this.getSortIndex() === ae.SORTINDEX_MULTIPOLYGON
				}, ae.prototype.interfaces_ = function() {
					return [sI, sb, rE]
				}, ae.prototype.getClass = function() {
					return ae
				}, ae.hasNonEmptyElements = function(t) {
					for (var e = 0; e < t.length; e++)
						if (!t[e].isEmpty()) return !0;
					return !1
				}, ae.hasNullElements = function(t) {
					for (var e = 0; e < t.length; e++)
						if (null === t[e]) return !0;
					return !1
				}, an.serialVersionUID.get = function() {
					return 0x799ea46522854c00
				}, an.SORTINDEX_POINT.get = function() {
					return 0
				}, an.SORTINDEX_MULTIPOINT.get = function() {
					return 1
				}, an.SORTINDEX_LINESTRING.get = function() {
					return 2
				}, an.SORTINDEX_LINEARRING.get = function() {
					return 3
				}, an.SORTINDEX_MULTILINESTRING.get = function() {
					return 4
				}, an.SORTINDEX_POLYGON.get = function() {
					return 5
				}, an.SORTINDEX_MULTIPOLYGON.get = function() {
					return 6
				}, an.SORTINDEX_GEOMETRYCOLLECTION.get = function() {
					return 7
				}, an.geometryChangedFilter.get = function() {
					return ar
				}, Object.defineProperties(ae, an);
				var ar = function() {};
				ar.interfaces_ = function() {
					return [at]
				}, ar.filter = function(t) {
					t.geometryChangedAction()
				};
				var ai = function() {};
				ai.prototype.filter = function(t) {}, ai.prototype.interfaces_ = function() {
					return []
				}, ai.prototype.getClass = function() {
					return ai
				};
				var ao = function() {},
					as = {
						Mod2BoundaryNodeRule: {
							configurable: !0
						},
						EndPointBoundaryNodeRule: {
							configurable: !0
						},
						MultiValentEndPointBoundaryNodeRule: {
							configurable: !0
						},
						MonoValentEndPointBoundaryNodeRule: {
							configurable: !0
						},
						MOD2_BOUNDARY_RULE: {
							configurable: !0
						},
						ENDPOINT_BOUNDARY_RULE: {
							configurable: !0
						},
						MULTIVALENT_ENDPOINT_BOUNDARY_RULE: {
							configurable: !0
						},
						MONOVALENT_ENDPOINT_BOUNDARY_RULE: {
							configurable: !0
						},
						OGC_SFS_BOUNDARY_RULE: {
							configurable: !0
						}
					};
				ao.prototype.isInBoundary = function(t) {}, ao.prototype.interfaces_ = function() {
					return []
				}, ao.prototype.getClass = function() {
					return ao
				}, as.Mod2BoundaryNodeRule.get = function() {
					return aa
				}, as.EndPointBoundaryNodeRule.get = function() {
					return au
				}, as.MultiValentEndPointBoundaryNodeRule.get = function() {
					return ah
				}, as.MonoValentEndPointBoundaryNodeRule.get = function() {
					return ac
				}, as.MOD2_BOUNDARY_RULE.get = function() {
					return new aa
				}, as.ENDPOINT_BOUNDARY_RULE.get = function() {
					return new au
				}, as.MULTIVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
					return new ah
				}, as.MONOVALENT_ENDPOINT_BOUNDARY_RULE.get = function() {
					return new ac
				}, as.OGC_SFS_BOUNDARY_RULE.get = function() {
					return ao.MOD2_BOUNDARY_RULE
				}, Object.defineProperties(ao, as);
				var aa = function() {};
				aa.prototype.isInBoundary = function(t) {
					return t % 2 == 1
				}, aa.prototype.interfaces_ = function() {
					return [ao]
				}, aa.prototype.getClass = function() {
					return aa
				};
				var au = function() {};
				au.prototype.isInBoundary = function(t) {
					return t > 0
				}, au.prototype.interfaces_ = function() {
					return [ao]
				}, au.prototype.getClass = function() {
					return au
				};
				var ah = function() {};
				ah.prototype.isInBoundary = function(t) {
					return t > 1
				}, ah.prototype.interfaces_ = function() {
					return [ao]
				}, ah.prototype.getClass = function() {
					return ah
				};
				var ac = function() {};
				ac.prototype.isInBoundary = function(t) {
					return 1 === t
				}, ac.prototype.interfaces_ = function() {
					return [ao]
				}, ac.prototype.getClass = function() {
					return ac
				};
				var al = function() {};
				al.prototype.add = function() {}, al.prototype.addAll = function() {}, al.prototype.isEmpty = function() {}, al.prototype.iterator = function() {}, al.prototype.size = function() {}, al.prototype.toArray = function() {}, al.prototype.remove = function() {};
				var ap = function(t) {
						function e(e) {
							t.call(this), this.message = e || ""
						}
						t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
						var n = {
							name: {
								configurable: !0
							}
						};
						return n.name.get = function() {
							return "IndexOutOfBoundsException"
						}, Object.defineProperties(e, n), e
					}(Error),
					af = function() {};
				af.prototype.hasNext = function() {}, af.prototype.next = function() {}, af.prototype.remove = function() {};
				var ag = function(t) {
					function e() {
						t.apply(this, arguments)
					}
					return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.get = function() {}, e.prototype.set = function() {}, e.prototype.isEmpty = function() {}, e
				}(al);
				(rb.prototype = Error()).name = "NoSuchElementException";
				var ad = function(t) {
						function e() {
							t.call(this), this.array_ = [], arguments[0] instanceof al && this.addAll(arguments[0])
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.ensureCapacity = function() {}, e.prototype.interfaces_ = function() {
							return [t, al]
						}, e.prototype.add = function(t) {
							return 1 == arguments.length ? this.array_.push(t) : this.array_.splice(arguments[0], arguments[1]), !0
						}, e.prototype.clear = function() {
							this.array_ = []
						}, e.prototype.addAll = function(t) {
							for (var e = t.iterator(); e.hasNext();) this.add(e.next());
							return !0
						}, e.prototype.set = function(t, e) {
							var n = this.array_[t];
							return this.array_[t] = e, n
						}, e.prototype.iterator = function() {
							return new ay(this)
						}, e.prototype.get = function(t) {
							if (t < 0 || t >= this.size()) throw new ap;
							return this.array_[t]
						}, e.prototype.isEmpty = function() {
							return 0 === this.array_.length
						}, e.prototype.size = function() {
							return this.array_.length
						}, e.prototype.toArray = function() {
							for (var t = [], e = 0, n = this.array_.length; e < n; e++) t.push(this.array_[e]);
							return t
						}, e.prototype.remove = function(t) {
							for (var e = !1, n = 0, r = this.array_.length; n < r; n++)
								if (this.array_[n] === t) {
									this.array_.splice(n, 1), e = !0;
									break
								} return e
						}, e
					}(ag),
					ay = function(t) {
						function e(e) {
							t.call(this), this.arrayList_ = e, this.position_ = 0
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.next = function() {
							if (this.position_ === this.arrayList_.size()) throw new rb;
							return this.arrayList_.get(this.position_++)
						}, e.prototype.hasNext = function() {
							return this.position_ < this.arrayList_.size()
						}, e.prototype.set = function(t) {
							return this.arrayList_.set(this.position_ - 1, t)
						}, e.prototype.remove = function() {
							this.arrayList_.remove(this.arrayList_.get(this.position_))
						}, e
					}(af),
					a_ = function(t) {
						function e() {
							if (t.call(this), 0 == arguments.length);
							else if (1 == arguments.length) {
								var e = arguments[0];
								this.ensureCapacity(e.length), this.add(e, !0)
							} else if (2 == arguments.length) {
								var n = arguments[0],
									r = arguments[1];
								this.ensureCapacity(n.length), this.add(n, r)
							}
						}
						t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
						var n = {
							coordArrayType: {
								configurable: !0
							}
						};
						return n.coordArrayType.get = function() {
							return [].fill(null)
						}, e.prototype.getCoordinate = function(t) {
							return this.get(t)
						}, e.prototype.addAll = function() {
							if (2 == arguments.length) {
								for (var e = arguments[0], n = arguments[1], r = !1, i = e.iterator(); i.hasNext();) this.add(i.next(), n), r = !0;
								return r
							}
							return t.prototype.addAll.apply(this, arguments)
						}, e.prototype.clone = function() {
							for (var e = t.prototype.clone.call(this), n = 0; n < this.size(); n++) e.add(n, this.get(n).copy());
							return e
						}, e.prototype.toCoordinateArray = function() {
							return this.toArray(e.coordArrayType)
						}, e.prototype.add = function() {
							if (1 == arguments.length) {
								var e = arguments[0];
								t.prototype.add.call(this, e)
							} else if (2 == arguments.length) {
								if (arguments[0] instanceof Array && "boolean" == typeof arguments[1]) {
									var n = arguments[0],
										r = arguments[1];
									return this.add(n, r, !0), !0
								}
								if (arguments[0] instanceof sw && "boolean" == typeof arguments[1]) {
									var i = arguments[0];
									if (!arguments[1] && this.size() >= 1 && this.get(this.size() - 1).equals2D(i)) return null;
									t.prototype.add.call(this, i)
								} else if (arguments[0] instanceof Object && "boolean" == typeof arguments[1]) {
									var o = arguments[0],
										s = arguments[1];
									return this.add(o, s), !0
								}
							} else if (3 == arguments.length) {
								if ("boolean" == typeof arguments[2] && arguments[0] instanceof Array && "boolean" == typeof arguments[1]) {
									var a = arguments[0],
										u = arguments[1];
									if (arguments[2])
										for (var h = 0; h < a.length; h++) this.add(a[h], u);
									else
										for (var c = a.length - 1; c >= 0; c--) this.add(a[c], u);
									return !0
								}
								if ("boolean" == typeof arguments[2] && Number.isInteger(arguments[0]) && arguments[1] instanceof sw) {
									var l = arguments[0],
										p = arguments[1];
									if (!arguments[2]) {
										var f = this.size();
										if (f > 0 && (l > 0 && this.get(l - 1).equals2D(p) || l < f && this.get(l).equals2D(p))) return null
									}
									t.prototype.add.call(this, l, p)
								}
							} else if (4 == arguments.length) {
								var g = arguments[0],
									d = arguments[1],
									y = arguments[2],
									_ = arguments[3],
									m = 1;
								y > _ && (m = -1);
								for (var v = y; v !== _; v += m) this.add(g[v], d);
								return !0
							}
						}, e.prototype.closeRing = function() {
							this.size() > 0 && this.add(new sw(this.get(0)), !1)
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, Object.defineProperties(e, n), e
					}(ad),
					am = function() {},
					av = {
						ForwardComparator: {
							configurable: !0
						},
						BidirectionalComparator: {
							configurable: !0
						},
						coordArrayType: {
							configurable: !0
						}
					};
				av.ForwardComparator.get = function() {
					return ax
				}, av.BidirectionalComparator.get = function() {
					return aE
				}, av.coordArrayType.get = function() {
					return [].fill(null)
				}, am.prototype.interfaces_ = function() {
					return []
				}, am.prototype.getClass = function() {
					return am
				}, am.isRing = function(t) {
					return !(t.length < 4) && !!t[0].equals2D(t[t.length - 1])
				}, am.ptNotInList = function(t, e) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						if (0 > am.indexOf(r, e)) return r
					}
					return null
				}, am.scroll = function(t, e) {
					var n = am.indexOf(e, t);
					if (n < 0) return null;
					var r = Array(t.length).fill(null);
					sY.arraycopy(t, n, r, 0, t.length - n), sY.arraycopy(t, 0, r, t.length - n, n), sY.arraycopy(r, 0, t, 0, t.length)
				}, am.equals = function() {
					if (2 == arguments.length) {
						var t = arguments[0],
							e = arguments[1];
						if (t === e) return !0;
						if (null === t || null === e || t.length !== e.length) return !1;
						for (var n = 0; n < t.length; n++)
							if (!t[n].equals(e[n])) return !1;
						return !0
					}
					if (3 == arguments.length) {
						var r = arguments[0],
							i = arguments[1],
							o = arguments[2];
						if (r === i) return !0;
						if (null === r || null === i || r.length !== i.length) return !1;
						for (var s = 0; s < r.length; s++)
							if (0 !== o.compare(r[s], i[s])) return !1;
						return !0
					}
				}, am.intersection = function(t, e) {
					for (var n = new a_, r = 0; r < t.length; r++) e.intersects(t[r]) && n.add(t[r], !0);
					return n.toCoordinateArray()
				}, am.hasRepeatedPoints = function(t) {
					for (var e = 1; e < t.length; e++)
						if (t[e - 1].equals(t[e])) return !0;
					return !1
				}, am.removeRepeatedPoints = function(t) {
					return am.hasRepeatedPoints(t) ? new a_(t, !1).toCoordinateArray() : t
				}, am.reverse = function(t) {
					for (var e = t.length - 1, n = Math.trunc(e / 2), r = 0; r <= n; r++) {
						var i = t[r];
						t[r] = t[e - r], t[e - r] = i
					}
				}, am.removeNull = function(t) {
					for (var e = 0, n = 0; n < t.length; n++) null !== t[n] && e++;
					var r = Array(e).fill(null);
					if (0 === e) return r;
					for (var i = 0, o = 0; o < t.length; o++) null !== t[o] && (r[i++] = t[o]);
					return r
				}, am.copyDeep = function() {
					if (1 == arguments.length) {
						for (var t = arguments[0], e = Array(t.length).fill(null), n = 0; n < t.length; n++) e[n] = new sw(t[n]);
						return e
					}
					if (5 == arguments.length)
						for (var r = arguments[0], i = arguments[1], o = arguments[2], s = arguments[3], a = arguments[4], u = 0; u < a; u++) o[s + u] = new sw(r[i + u])
				}, am.isEqualReversed = function(t, e) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n],
							i = e[t.length - n - 1];
						if (0 !== r.compareTo(i)) return !1
					}
					return !0
				}, am.envelope = function(t) {
					for (var e = new sH, n = 0; n < t.length; n++) e.expandToInclude(t[n]);
					return e
				}, am.toCoordinateArray = function(t) {
					return t.toArray(am.coordArrayType)
				}, am.atLeastNCoordinatesOrNothing = function(t, e) {
					return e.length >= t ? e : []
				}, am.indexOf = function(t, e) {
					for (var n = 0; n < e.length; n++)
						if (t.equals(e[n])) return n;
					return -1
				}, am.increasingDirection = function(t) {
					for (var e = 0; e < Math.trunc(t.length / 2); e++) {
						var n = t.length - 1 - e,
							r = t[e].compareTo(t[n]);
						if (0 !== r) return r
					}
					return 1
				}, am.compare = function(t, e) {
					for (var n = 0; n < t.length && n < e.length;) {
						var r = t[n].compareTo(e[n]);
						if (0 !== r) return r;
						n++
					}
					return n < e.length ? -1 : n < t.length ? 1 : 0
				}, am.minCoordinate = function(t) {
					for (var e = null, n = 0; n < t.length; n++)(null === e || e.compareTo(t[n]) > 0) && (e = t[n]);
					return e
				}, am.extract = function(t, e, n) {
					e = sR.clamp(e, 0, t.length);
					var r = (n = sR.clamp(n, -1, t.length)) - e + 1;
					n < 0 && (r = 0), e >= t.length && (r = 0), n < e && (r = 0);
					var i = Array(r).fill(null);
					if (0 === r) return i;
					for (var o = 0, s = e; s <= n; s++) i[o++] = t[s];
					return i
				}, Object.defineProperties(am, av);
				var ax = function() {};
				ax.prototype.compare = function(t, e) {
					return am.compare(t, e)
				}, ax.prototype.interfaces_ = function() {
					return [sN]
				}, ax.prototype.getClass = function() {
					return ax
				};
				var aE = function() {};
				aE.prototype.compare = function(t, e) {
					if (t.length < e.length) return -1;
					if (t.length > e.length) return 1;
					if (0 === t.length) return 0;
					var n = am.compare(t, e);
					return am.isEqualReversed(t, e) ? 0 : n
				}, aE.prototype.OLDcompare = function(t, e) {
					if (t.length < e.length) return -1;
					if (t.length > e.length) return 1;
					if (0 === t.length) return 0;
					for (var n = am.increasingDirection(t), r = am.increasingDirection(e), i = n > 0 ? 0 : t.length - 1, o = r > 0 ? 0 : t.length - 1, s = 0; s < t.length; s++) {
						var a = t[i].compareTo(e[o]);
						if (0 !== a) return a;
						i += n, o += r
					}
					return 0
				}, aE.prototype.interfaces_ = function() {
					return [sN]
				}, aE.prototype.getClass = function() {
					return aE
				};
				var ab = function() {};
				ab.prototype.get = function() {}, ab.prototype.put = function() {}, ab.prototype.size = function() {}, ab.prototype.values = function() {}, ab.prototype.entrySet = function() {};
				var aI = function(t) {
					function e() {
						t.apply(this, arguments)
					}
					return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e
				}(ab);
				(rI.prototype = Error()).name = "OperationNotSupported", (rN.prototype = new al).contains = function() {};
				var aN = function(t) {
						function e() {
							t.call(this), this.array_ = [], arguments[0] instanceof al && this.addAll(arguments[0])
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.contains = function(t) {
							for (var e = 0, n = this.array_.length; e < n; e++)
								if (this.array_[e] === t) return !0;
							return !1
						}, e.prototype.add = function(t) {
							return !this.contains(t) && (this.array_.push(t), !0)
						}, e.prototype.addAll = function(t) {
							for (var e = t.iterator(); e.hasNext();) this.add(e.next());
							return !0
						}, e.prototype.remove = function(t) {
							throw Error()
						}, e.prototype.size = function() {
							return this.array_.length
						}, e.prototype.isEmpty = function() {
							return 0 === this.array_.length
						}, e.prototype.toArray = function() {
							for (var t = [], e = 0, n = this.array_.length; e < n; e++) t.push(this.array_[e]);
							return t
						}, e.prototype.iterator = function() {
							return new aw(this)
						}, e
					}(rN),
					aw = function(t) {
						function e(e) {
							t.call(this), this.hashSet_ = e, this.position_ = 0
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.next = function() {
							if (this.position_ === this.hashSet_.size()) throw new rb;
							return this.hashSet_.array_[this.position_++]
						}, e.prototype.hasNext = function() {
							return this.position_ < this.hashSet_.size()
						}, e.prototype.remove = function() {
							throw new rI
						}, e
					}(af),
					aC = 0;
				(rP.prototype = new aI).get = function(t) {
					for (var e = this.root_; null !== e;) {
						var n = t.compareTo(e.key);
						if (n < 0) e = e.left;
						else {
							if (!(n > 0)) return e.value;
							e = e.right
						}
					}
					return null
				}, rP.prototype.put = function(t, e) {
					if (null === this.root_) return this.root_ = {
						key: t,
						value: e,
						left: null,
						right: null,
						parent: null,
						color: aC,
						getValue: function() {
							return this.value
						},
						getKey: function() {
							return this.key
						}
					}, this.size_ = 1, null;
					var n, r, i = this.root_;
					do
						if (n = i, (r = t.compareTo(i.key)) < 0) i = i.left;
						else {
							if (!(r > 0)) {
								var o = i.value;
								return i.value = e, o
							}
							i = i.right
						} while (null !== i);
					var s = {
						key: t,
						left: null,
						right: null,
						value: e,
						parent: n,
						color: aC,
						getValue: function() {
							return this.value
						},
						getKey: function() {
							return this.key
						}
					};
					return r < 0 ? n.left = s : n.right = s, this.fixAfterInsertion(s), this.size_++, null
				}, rP.prototype.fixAfterInsertion = function(t) {
					for (t.color = 1; null != t && t !== this.root_ && 1 === t.parent.color;)
						if (rC(t) === rM(rC(rC(t)))) {
							var e = rL(rC(rC(t)));
							1 === rw(e) ? (rS(rC(t), aC), rS(e, aC), rS(rC(rC(t)), 1), t = rC(rC(t))) : (t === rL(rC(t)) && (t = rC(t), this.rotateLeft(t)), rS(rC(t), aC), rS(rC(rC(t)), 1), this.rotateRight(rC(rC(t))))
						} else {
							var n = rM(rC(rC(t)));
							1 === rw(n) ? (rS(rC(t), aC), rS(n, aC), rS(rC(rC(t)), 1), t = rC(rC(t))) : (t === rM(rC(t)) && (t = rC(t), this.rotateRight(t)), rS(rC(t), aC), rS(rC(rC(t)), 1), this.rotateLeft(rC(rC(t))))
						} this.root_.color = aC
				}, rP.prototype.values = function() {
					var t = new ad,
						e = this.getFirstEntry();
					if (null !== e)
						for (t.add(e.value); null !== (e = rP.successor(e));) t.add(e.value);
					return t
				}, rP.prototype.entrySet = function() {
					var t = new aN,
						e = this.getFirstEntry();
					if (null !== e)
						for (t.add(e); null !== (e = rP.successor(e));) t.add(e);
					return t
				}, rP.prototype.rotateLeft = function(t) {
					if (null != t) {
						var e = t.right;
						t.right = e.left, null != e.left && (e.left.parent = t), e.parent = t.parent, null === t.parent ? this.root_ = e : t.parent.left === t ? t.parent.left = e : t.parent.right = e, e.left = t, t.parent = e
					}
				}, rP.prototype.rotateRight = function(t) {
					if (null != t) {
						var e = t.left;
						t.left = e.right, null != e.right && (e.right.parent = t), e.parent = t.parent, null === t.parent ? this.root_ = e : t.parent.right === t ? t.parent.right = e : t.parent.left = e, e.right = t, t.parent = e
					}
				}, rP.prototype.getFirstEntry = function() {
					var t = this.root_;
					if (null != t)
						for (; null != t.left;) t = t.left;
					return t
				}, rP.successor = function(t) {
					if (null === t) return null;
					if (null !== t.right) {
						for (var e = t.right; null !== e.left;) e = e.left;
						return e
					}
					for (var n = t.parent, r = t; null !== n && r === n.right;) r = n, n = n.parent;
					return n
				}, rP.prototype.size = function() {
					return this.size_
				};
				var aS = function() {};
				aS.prototype.interfaces_ = function() {
					return []
				}, aS.prototype.getClass = function() {
					return aS
				}, rO.prototype = new rN, (rR.prototype = new rO).contains = function(t) {
					for (var e = 0, n = this.array_.length; e < n; e++)
						if (0 === this.array_[e].compareTo(t)) return !0;
					return !1
				}, rR.prototype.add = function(t) {
					if (this.contains(t)) return !1;
					for (var e = 0, n = this.array_.length; e < n; e++)
						if (1 === this.array_[e].compareTo(t)) return this.array_.splice(e, 0, t), !0;
					return this.array_.push(t), !0
				}, rR.prototype.addAll = function(t) {
					for (var e = t.iterator(); e.hasNext();) this.add(e.next());
					return !0
				}, rR.prototype.remove = function(t) {
					throw new rI
				}, rR.prototype.size = function() {
					return this.array_.length
				}, rR.prototype.isEmpty = function() {
					return 0 === this.array_.length
				}, rR.prototype.toArray = function() {
					for (var t = [], e = 0, n = this.array_.length; e < n; e++) t.push(this.array_[e]);
					return t
				}, rR.prototype.iterator = function() {
					return new aM(this)
				};
				var aM = function(t) {
					this.treeSet_ = t, this.position_ = 0
				};
				aM.prototype.next = function() {
					if (this.position_ === this.treeSet_.size()) throw new rb;
					return this.treeSet_.array_[this.position_++]
				}, aM.prototype.hasNext = function() {
					return this.position_ < this.treeSet_.size()
				}, aM.prototype.remove = function() {
					throw new rI
				};
				var aL = function() {};
				aL.sort = function() {
					var t, e, n, r, i = arguments[0];
					if (1 == arguments.length) r = function(t, e) {
						return t.compareTo(e)
					}, i.sort(r);
					else if (2 == arguments.length) n = arguments[1], r = function(t, e) {
						return n.compare(t, e)
					}, i.sort(r);
					else if (3 == arguments.length) {
						(e = i.slice(arguments[1], arguments[2])).sort();
						var o = i.slice(0, arguments[1]).concat(e, i.slice(arguments[2], i.length));
						for (i.splice(0, i.length), t = 0; t < o.length; t++) i.push(o[t])
					} else if (4 == arguments.length)
						for (e = i.slice(arguments[1], arguments[2]), n = arguments[3], r = function(t, e) {
								return n.compare(t, e)
							}, e.sort(r), o = i.slice(0, arguments[1]).concat(e, i.slice(arguments[2], i.length)), i.splice(0, i.length), t = 0; t < o.length; t++) i.push(o[t])
				}, aL.asList = function(t) {
					for (var e = new ad, n = 0, r = t.length; n < r; n++) e.add(t[n]);
					return e
				};
				var aP = function() {},
					aO = {
						P: {
							configurable: !0
						},
						L: {
							configurable: !0
						},
						A: {
							configurable: !0
						},
						FALSE: {
							configurable: !0
						},
						TRUE: {
							configurable: !0
						},
						DONTCARE: {
							configurable: !0
						},
						SYM_FALSE: {
							configurable: !0
						},
						SYM_TRUE: {
							configurable: !0
						},
						SYM_DONTCARE: {
							configurable: !0
						},
						SYM_P: {
							configurable: !0
						},
						SYM_L: {
							configurable: !0
						},
						SYM_A: {
							configurable: !0
						}
					};
				aO.P.get = function() {
					return 0
				}, aO.L.get = function() {
					return 1
				}, aO.A.get = function() {
					return 2
				}, aO.FALSE.get = function() {
					return -1
				}, aO.TRUE.get = function() {
					return -2
				}, aO.DONTCARE.get = function() {
					return -3
				}, aO.SYM_FALSE.get = function() {
					return "F"
				}, aO.SYM_TRUE.get = function() {
					return "T"
				}, aO.SYM_DONTCARE.get = function() {
					return "*"
				}, aO.SYM_P.get = function() {
					return "0"
				}, aO.SYM_L.get = function() {
					return "1"
				}, aO.SYM_A.get = function() {
					return "2"
				}, aP.prototype.interfaces_ = function() {
					return []
				}, aP.prototype.getClass = function() {
					return aP
				}, aP.toDimensionSymbol = function(t) {
					switch (t) {
						case aP.FALSE:
							return aP.SYM_FALSE;
						case aP.TRUE:
							return aP.SYM_TRUE;
						case aP.DONTCARE:
							return aP.SYM_DONTCARE;
						case aP.P:
							return aP.SYM_P;
						case aP.L:
							return aP.SYM_L;
						case aP.A:
							return aP.SYM_A
					}
					throw new sv("Unknown dimension value: " + t)
				}, aP.toDimensionValue = function(t) {
					switch (sF.toUpperCase(t)) {
						case aP.SYM_FALSE:
							return aP.FALSE;
						case aP.SYM_TRUE:
							return aP.TRUE;
						case aP.SYM_DONTCARE:
							return aP.DONTCARE;
						case aP.SYM_P:
							return aP.P;
						case aP.SYM_L:
							return aP.L;
						case aP.SYM_A:
							return aP.A
					}
					throw new sv("Unknown dimension symbol: " + t)
				}, Object.defineProperties(aP, aO);
				var aR = function() {};
				aR.prototype.filter = function(t) {}, aR.prototype.interfaces_ = function() {
					return []
				}, aR.prototype.getClass = function() {
					return aR
				};
				var aT = function() {};
				aT.prototype.filter = function(t, e) {}, aT.prototype.isDone = function() {}, aT.prototype.isGeometryChanged = function() {}, aT.prototype.interfaces_ = function() {
					return []
				}, aT.prototype.getClass = function() {
					return aT
				};
				var aD = function(t) {
						function e(e, n) {
							if (t.call(this, n), this._geometries = e || [], t.hasNullElements(this._geometries)) throw new sv("geometries must not contain null elements")
						}
						t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
						var n = {
							serialVersionUID: {
								configurable: !0
							}
						};
						return e.prototype.computeEnvelopeInternal = function() {
							for (var t = new sH, e = 0; e < this._geometries.length; e++) t.expandToInclude(this._geometries[e].getEnvelopeInternal());
							return t
						}, e.prototype.getGeometryN = function(t) {
							return this._geometries[t]
						}, e.prototype.getSortIndex = function() {
							return t.SORTINDEX_GEOMETRYCOLLECTION
						}, e.prototype.getCoordinates = function() {
							for (var t = Array(this.getNumPoints()).fill(null), e = -1, n = 0; n < this._geometries.length; n++)
								for (var r = this._geometries[n].getCoordinates(), i = 0; i < r.length; i++) t[++e] = r[i];
							return t
						}, e.prototype.getArea = function() {
							for (var t = 0, e = 0; e < this._geometries.length; e++) t += this._geometries[e].getArea();
							return t
						}, e.prototype.equalsExact = function() {
							if (2 == arguments.length) {
								var e = arguments[0],
									n = arguments[1];
								if (!this.isEquivalentClass(e) || this._geometries.length !== e._geometries.length) return !1;
								for (var r = 0; r < this._geometries.length; r++)
									if (!this._geometries[r].equalsExact(e._geometries[r], n)) return !1;
								return !0
							}
							return t.prototype.equalsExact.apply(this, arguments)
						}, e.prototype.normalize = function() {
							for (var t = 0; t < this._geometries.length; t++) this._geometries[t].normalize();
							aL.sort(this._geometries)
						}, e.prototype.getCoordinate = function() {
							return this.isEmpty() ? null : this._geometries[0].getCoordinate()
						}, e.prototype.getBoundaryDimension = function() {
							for (var t = aP.FALSE, e = 0; e < this._geometries.length; e++) t = Math.max(t, this._geometries[e].getBoundaryDimension());
							return t
						}, e.prototype.getDimension = function() {
							for (var t = aP.FALSE, e = 0; e < this._geometries.length; e++) t = Math.max(t, this._geometries[e].getDimension());
							return t
						}, e.prototype.getLength = function() {
							for (var t = 0, e = 0; e < this._geometries.length; e++) t += this._geometries[e].getLength();
							return t
						}, e.prototype.getNumPoints = function() {
							for (var t = 0, e = 0; e < this._geometries.length; e++) t += this._geometries[e].getNumPoints();
							return t
						}, e.prototype.getNumGeometries = function() {
							return this._geometries.length
						}, e.prototype.reverse = function() {
							for (var t = this._geometries.length, e = Array(t).fill(null), n = 0; n < this._geometries.length; n++) e[n] = this._geometries[n].reverse();
							return this.getFactory().createGeometryCollection(e)
						}, e.prototype.compareToSameClass = function() {
							if (1 == arguments.length) {
								var t = arguments[0],
									e = new rR(aL.asList(this._geometries)),
									n = new rR(aL.asList(t._geometries));
								return this.compare(e, n)
							}
							if (2 == arguments.length) {
								for (var r = arguments[0], i = arguments[1], o = this.getNumGeometries(), s = r.getNumGeometries(), a = 0; a < o && a < s;) {
									var u = this.getGeometryN(a),
										h = r.getGeometryN(a),
										c = u.compareToSameClass(h, i);
									if (0 !== c) return c;
									a++
								}
								return a < o ? 1 : a < s ? -1 : 0
							}
						}, e.prototype.apply = function() {
							if (sO(arguments[0], ai))
								for (var t = arguments[0], e = 0; e < this._geometries.length; e++) this._geometries[e].apply(t);
							else if (sO(arguments[0], aT)) {
								var n = arguments[0];
								if (0 === this._geometries.length) return null;
								for (var r = 0; r < this._geometries.length && (this._geometries[r].apply(n), !n.isDone()); r++);
								n.isGeometryChanged() && this.geometryChanged()
							} else if (sO(arguments[0], aR)) {
								var i = arguments[0];
								i.filter(this);
								for (var o = 0; o < this._geometries.length; o++) this._geometries[o].apply(i)
							} else if (sO(arguments[0], at)) {
								var s = arguments[0];
								s.filter(this);
								for (var a = 0; a < this._geometries.length; a++) this._geometries[a].apply(s)
							}
						}, e.prototype.getBoundary = function() {
							return this.checkNotGeometryCollection(this), s2.shouldNeverReachHere(), null
						}, e.prototype.clone = function() {
							var e = t.prototype.clone.call(this);
							e._geometries = Array(this._geometries.length).fill(null);
							for (var n = 0; n < this._geometries.length; n++) e._geometries[n] = this._geometries[n].clone();
							return e
						}, e.prototype.getGeometryType = function() {
							return "GeometryCollection"
						}, e.prototype.copy = function() {
							for (var t = Array(this._geometries.length).fill(null), n = 0; n < t.length; n++) t[n] = this._geometries[n].copy();
							return new e(t, this._factory)
						}, e.prototype.isEmpty = function() {
							for (var t = 0; t < this._geometries.length; t++)
								if (!this._geometries[t].isEmpty()) return !1;
							return !0
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, n.serialVersionUID.get = function() {
							return -0xb0f8434e07a82800
						}, Object.defineProperties(e, n), e
					}(ae),
					aA = function(t) {
						function e() {
							t.apply(this, arguments)
						}
						t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
						var n = {
							serialVersionUID: {
								configurable: !0
							}
						};
						return e.prototype.getSortIndex = function() {
							return ae.SORTINDEX_MULTILINESTRING
						}, e.prototype.equalsExact = function() {
							if (2 == arguments.length) {
								var e = arguments[0],
									n = arguments[1];
								return !!this.isEquivalentClass(e) && t.prototype.equalsExact.call(this, e, n)
							}
							return t.prototype.equalsExact.apply(this, arguments)
						}, e.prototype.getBoundaryDimension = function() {
							return this.isClosed() ? aP.FALSE : 0
						}, e.prototype.isClosed = function() {
							if (this.isEmpty()) return !1;
							for (var t = 0; t < this._geometries.length; t++)
								if (!this._geometries[t].isClosed()) return !1;
							return !0
						}, e.prototype.getDimension = function() {
							return 1
						}, e.prototype.reverse = function() {
							for (var t = this._geometries.length, e = Array(t).fill(null), n = 0; n < this._geometries.length; n++) e[t - 1 - n] = this._geometries[n].reverse();
							return this.getFactory().createMultiLineString(e)
						}, e.prototype.getBoundary = function() {
							return new aF(this).getBoundary()
						}, e.prototype.getGeometryType = function() {
							return "MultiLineString"
						}, e.prototype.copy = function() {
							for (var t = Array(this._geometries.length).fill(null), n = 0; n < t.length; n++) t[n] = this._geometries[n].copy();
							return new e(t, this._factory)
						}, e.prototype.interfaces_ = function() {
							return [aS]
						}, e.prototype.getClass = function() {
							return e
						}, n.serialVersionUID.get = function() {
							return 0x7155d2ab4afa8000
						}, Object.defineProperties(e, n), e
					}(aD),
					aF = function() {
						if (this._geom = null, this._geomFact = null, this._bnRule = null, this._endpointMap = null, 1 == arguments.length) {
							var t = arguments[0],
								e = ao.MOD2_BOUNDARY_RULE;
							this._geom = t, this._geomFact = t.getFactory(), this._bnRule = e
						} else if (2 == arguments.length) {
							var n = arguments[0],
								r = arguments[1];
							this._geom = n, this._geomFact = n.getFactory(), this._bnRule = r
						}
					};
				aF.prototype.boundaryMultiLineString = function(t) {
					if (this._geom.isEmpty()) return this.getEmptyMultiPoint();
					var e = this.computeBoundaryCoordinates(t);
					return 1 === e.length ? this._geomFact.createPoint(e[0]) : this._geomFact.createMultiPointFromCoords(e)
				}, aF.prototype.getBoundary = function() {
					return this._geom instanceof az ? this.boundaryLineString(this._geom) : this._geom instanceof aA ? this.boundaryMultiLineString(this._geom) : this._geom.getBoundary()
				}, aF.prototype.boundaryLineString = function(t) {
					return this._geom.isEmpty() ? this.getEmptyMultiPoint() : t.isClosed() ? this._bnRule.isInBoundary(2) ? t.getStartPoint() : this._geomFact.createMultiPoint() : this._geomFact.createMultiPoint([t.getStartPoint(), t.getEndPoint()])
				}, aF.prototype.getEmptyMultiPoint = function() {
					return this._geomFact.createMultiPoint()
				}, aF.prototype.computeBoundaryCoordinates = function(t) {
					var e = new ad;
					this._endpointMap = new rP;
					for (var n = 0; n < t.getNumGeometries(); n++) {
						var r = t.getGeometryN(n);
						0 !== r.getNumPoints() && (this.addEndpoint(r.getCoordinateN(0)), this.addEndpoint(r.getCoordinateN(r.getNumPoints() - 1)))
					}
					for (var i = this._endpointMap.entrySet().iterator(); i.hasNext();) {
						var o = i.next(),
							s = o.getValue().count;
						this._bnRule.isInBoundary(s) && e.add(o.getKey())
					}
					return am.toCoordinateArray(e)
				}, aF.prototype.addEndpoint = function(t) {
					var e = this._endpointMap.get(t);
					null === e && (e = new aq, this._endpointMap.put(t, e)), e.count++
				}, aF.prototype.interfaces_ = function() {
					return []
				}, aF.prototype.getClass = function() {
					return aF
				}, aF.getBoundary = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						return new aF(t).getBoundary()
					}
					if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						return new aF(e, n).getBoundary()
					}
				};
				var aq = function() {
					this.count = null
				};
				aq.prototype.interfaces_ = function() {
					return []
				}, aq.prototype.getClass = function() {
					return aq
				};
				var aG = function() {},
					aB = {
						NEWLINE: {
							configurable: !0
						},
						SIMPLE_ORDINATE_FORMAT: {
							configurable: !0
						}
					};
				aG.prototype.interfaces_ = function() {
					return []
				}, aG.prototype.getClass = function() {
					return aG
				}, aG.chars = function(t, e) {
					for (var n = Array(e).fill(null), r = 0; r < e; r++) n[r] = t;
					return String(n)
				}, aG.getStackTrace = function() {
					if (1 == arguments.length) {
						var t = arguments[0],
							e = new function() {},
							n = new function() {}(e);
						return t.printStackTrace(n), e.toString()
					}
					if (2 == arguments.length) {
						for (var r = arguments[0], i = arguments[1], o = "", s = new function() {}(new function() {}(aG.getStackTrace(r))), a = 0; a < i; a++) try {
							o += s.readLine() + aG.NEWLINE
						} catch (t) {
							if (!(t instanceof rT)) throw t;
							s2.shouldNeverReachHere()
						}
						return o
					}
				}, aG.split = function(t, e) {
					for (var n = e.length, r = new ad, i = "" + t, o = i.indexOf(e); o >= 0;) {
						var s = i.substring(0, o);
						r.add(s), o = (i = i.substring(o + n)).indexOf(e)
					}
					i.length > 0 && r.add(i);
					for (var a = Array(r.size()).fill(null), u = 0; u < a.length; u++) a[u] = r.get(u);
					return a
				}, aG.toString = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						return aG.SIMPLE_ORDINATE_FORMAT.format(t)
					}
				}, aG.spaces = function(t) {
					return aG.chars(" ", t)
				}, aB.NEWLINE.get = function() {
					return sY.getProperty("line.separator")
				}, aB.SIMPLE_ORDINATE_FORMAT.get = function() {
					return new function() {}("0.#")
				}, Object.defineProperties(aG, aB);
				var ak = function() {};
				ak.prototype.interfaces_ = function() {
					return []
				}, ak.prototype.getClass = function() {
					return ak
				}, ak.copyCoord = function(t, e, n, r) {
					for (var i = Math.min(t.getDimension(), n.getDimension()), o = 0; o < i; o++) n.setOrdinate(r, o, t.getOrdinate(e, o))
				}, ak.isRing = function(t) {
					var e = t.size();
					return 0 === e || !(e <= 3) && t.getOrdinate(0, sz.X) === t.getOrdinate(e - 1, sz.X) && t.getOrdinate(0, sz.Y) === t.getOrdinate(e - 1, sz.Y)
				}, ak.isEqual = function(t, e) {
					var n = t.size();
					if (n !== e.size()) return !1;
					for (var r = Math.min(t.getDimension(), e.getDimension()), i = 0; i < n; i++)
						for (var o = 0; o < r; o++) {
							var s = t.getOrdinate(i, o),
								a = e.getOrdinate(i, o);
							if (t.getOrdinate(i, o) !== e.getOrdinate(i, o) && (!sx.isNaN(s) || !sx.isNaN(a))) return !1
						}
					return !0
				}, ak.extend = function(t, e, n) {
					var r = t.create(n, e.getDimension()),
						i = e.size();
					if (ak.copy(e, 0, r, 0, i), i > 0)
						for (var o = i; o < n; o++) ak.copy(e, i - 1, r, o, 1);
					return r
				}, ak.reverse = function(t) {
					for (var e = t.size() - 1, n = Math.trunc(e / 2), r = 0; r <= n; r++) ak.swap(t, r, e - r)
				}, ak.swap = function(t, e, n) {
					if (e === n) return null;
					for (var r = 0; r < t.getDimension(); r++) {
						var i = t.getOrdinate(e, r);
						t.setOrdinate(e, r, t.getOrdinate(n, r)), t.setOrdinate(n, r, i)
					}
				}, ak.copy = function(t, e, n, r, i) {
					for (var o = 0; o < i; o++) ak.copyCoord(t, e + o, n, r + o)
				}, ak.toString = function() {
					if (1 == arguments.length) {
						var t = arguments[0],
							e = t.size();
						if (0 === e) return "()";
						var n = t.getDimension(),
							r = new sD;
						r.append("(");
						for (var i = 0; i < e; i++) {
							i > 0 && r.append(" ");
							for (var o = 0; o < n; o++) o > 0 && r.append(","), r.append(aG.toString(t.getOrdinate(i, o)))
						}
						return r.append(")"), r.toString()
					}
				}, ak.ensureValidRing = function(t, e) {
					var n = e.size();
					return 0 === n ? e : n <= 3 ? ak.createClosedRing(t, e, 4) : e.getOrdinate(0, sz.X) === e.getOrdinate(n - 1, sz.X) && e.getOrdinate(0, sz.Y) === e.getOrdinate(n - 1, sz.Y) ? e : ak.createClosedRing(t, e, n + 1)
				}, ak.createClosedRing = function(t, e, n) {
					var r = t.create(n, e.getDimension()),
						i = e.size();
					ak.copy(e, 0, r, 0, i);
					for (var o = i; o < n; o++) ak.copy(e, 0, r, o, 1);
					return r
				};
				var az = function(t) {
						function e(e, n) {
							t.call(this, n), this._points = null, this.init(e)
						}
						t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
						var n = {
							serialVersionUID: {
								configurable: !0
							}
						};
						return e.prototype.computeEnvelopeInternal = function() {
							return this.isEmpty() ? new sH : this._points.expandEnvelope(new sH)
						}, e.prototype.isRing = function() {
							return this.isClosed() && this.isSimple()
						}, e.prototype.getSortIndex = function() {
							return t.SORTINDEX_LINESTRING
						}, e.prototype.getCoordinates = function() {
							return this._points.toCoordinateArray()
						}, e.prototype.equalsExact = function() {
							if (2 == arguments.length) {
								var e = arguments[0],
									n = arguments[1];
								if (!this.isEquivalentClass(e) || this._points.size() !== e._points.size()) return !1;
								for (var r = 0; r < this._points.size(); r++)
									if (!this.equal(this._points.getCoordinate(r), e._points.getCoordinate(r), n)) return !1;
								return !0
							}
							return t.prototype.equalsExact.apply(this, arguments)
						}, e.prototype.normalize = function() {
							for (var t = 0; t < Math.trunc(this._points.size() / 2); t++) {
								var e = this._points.size() - 1 - t;
								if (!this._points.getCoordinate(t).equals(this._points.getCoordinate(e))) return this._points.getCoordinate(t).compareTo(this._points.getCoordinate(e)) > 0 && ak.reverse(this._points), null
							}
						}, e.prototype.getCoordinate = function() {
							return this.isEmpty() ? null : this._points.getCoordinate(0)
						}, e.prototype.getBoundaryDimension = function() {
							return this.isClosed() ? aP.FALSE : 0
						}, e.prototype.isClosed = function() {
							return !this.isEmpty() && this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1))
						}, e.prototype.getEndPoint = function() {
							return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1)
						}, e.prototype.getDimension = function() {
							return 1
						}, e.prototype.getLength = function() {
							return s9.computeLength(this._points)
						}, e.prototype.getNumPoints = function() {
							return this._points.size()
						}, e.prototype.reverse = function() {
							var t = this._points.copy();
							return ak.reverse(t), this.getFactory().createLineString(t)
						}, e.prototype.compareToSameClass = function() {
							if (1 == arguments.length) {
								for (var t = arguments[0], e = 0, n = 0; e < this._points.size() && n < t._points.size();) {
									var r = this._points.getCoordinate(e).compareTo(t._points.getCoordinate(n));
									if (0 !== r) return r;
									e++, n++
								}
								return e < this._points.size() ? 1 : n < t._points.size() ? -1 : 0
							}
							if (2 == arguments.length) {
								var i = arguments[0];
								return arguments[1].compare(this._points, i._points)
							}
						}, e.prototype.apply = function() {
							if (sO(arguments[0], ai))
								for (var t = arguments[0], e = 0; e < this._points.size(); e++) t.filter(this._points.getCoordinate(e));
							else if (sO(arguments[0], aT)) {
								var n = arguments[0];
								if (0 === this._points.size()) return null;
								for (var r = 0; r < this._points.size() && (n.filter(this._points, r), !n.isDone()); r++);
								n.isGeometryChanged() && this.geometryChanged()
							} else sO(arguments[0], aR) ? arguments[0].filter(this) : sO(arguments[0], at) && arguments[0].filter(this)
						}, e.prototype.getBoundary = function() {
							return new aF(this).getBoundary()
						}, e.prototype.isEquivalentClass = function(t) {
							return t instanceof e
						}, e.prototype.clone = function() {
							var e = t.prototype.clone.call(this);
							return e._points = this._points.clone(), e
						}, e.prototype.getCoordinateN = function(t) {
							return this._points.getCoordinate(t)
						}, e.prototype.getGeometryType = function() {
							return "LineString"
						}, e.prototype.copy = function() {
							return new e(this._points.copy(), this._factory)
						}, e.prototype.getCoordinateSequence = function() {
							return this._points
						}, e.prototype.isEmpty = function() {
							return 0 === this._points.size()
						}, e.prototype.init = function(t) {
							if (null === t && (t = this.getFactory().getCoordinateSequenceFactory().create([])), 1 === t.size()) throw new sv("Invalid number of points in LineString (found " + t.size() + " - must be 0 or >= 2)");
							this._points = t
						}, e.prototype.isCoordinate = function(t) {
							for (var e = 0; e < this._points.size(); e++)
								if (this._points.getCoordinate(e).equals(t)) return !0;
							return !1
						}, e.prototype.getStartPoint = function() {
							return this.isEmpty() ? null : this.getPointN(0)
						}, e.prototype.getPointN = function(t) {
							return this.getFactory().createPoint(this._points.getCoordinate(t))
						}, e.prototype.interfaces_ = function() {
							return [aS]
						}, e.prototype.getClass = function() {
							return e
						}, n.serialVersionUID.get = function() {
							return 0x2b2b51ba435c8e00
						}, Object.defineProperties(e, n), e
					}(ae),
					aj = function() {};
				aj.prototype.interfaces_ = function() {
					return []
				}, aj.prototype.getClass = function() {
					return aj
				};
				var aX = function(t) {
						function e(e, n) {
							t.call(this, n), this._coordinates = e || null, this.init(this._coordinates)
						}
						t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
						var n = {
							serialVersionUID: {
								configurable: !0
							}
						};
						return e.prototype.computeEnvelopeInternal = function() {
							if (this.isEmpty()) return new sH;
							var t = new sH;
							return t.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), t
						}, e.prototype.getSortIndex = function() {
							return t.SORTINDEX_POINT
						}, e.prototype.getCoordinates = function() {
							return this.isEmpty() ? [] : [this.getCoordinate()]
						}, e.prototype.equalsExact = function() {
							if (2 == arguments.length) {
								var e = arguments[0],
									n = arguments[1];
								return !!this.isEquivalentClass(e) && (!(!this.isEmpty() || !e.isEmpty()) || this.isEmpty() === e.isEmpty() && this.equal(e.getCoordinate(), this.getCoordinate(), n))
							}
							return t.prototype.equalsExact.apply(this, arguments)
						}, e.prototype.normalize = function() {}, e.prototype.getCoordinate = function() {
							return 0 !== this._coordinates.size() ? this._coordinates.getCoordinate(0) : null
						}, e.prototype.getBoundaryDimension = function() {
							return aP.FALSE
						}, e.prototype.getDimension = function() {
							return 0
						}, e.prototype.getNumPoints = function() {
							return this.isEmpty() ? 0 : 1
						}, e.prototype.reverse = function() {
							return this.copy()
						}, e.prototype.getX = function() {
							if (null === this.getCoordinate()) throw Error("getX called on empty Point");
							return this.getCoordinate().x
						}, e.prototype.compareToSameClass = function() {
							if (1 == arguments.length) {
								var t = arguments[0];
								return this.getCoordinate().compareTo(t.getCoordinate())
							}
							if (2 == arguments.length) {
								var e = arguments[0];
								return arguments[1].compare(this._coordinates, e._coordinates)
							}
						}, e.prototype.apply = function() {
							if (sO(arguments[0], ai)) {
								var t = arguments[0];
								if (this.isEmpty()) return null;
								t.filter(this.getCoordinate())
							} else if (sO(arguments[0], aT)) {
								var e = arguments[0];
								if (this.isEmpty()) return null;
								e.filter(this._coordinates, 0), e.isGeometryChanged() && this.geometryChanged()
							} else sO(arguments[0], aR) ? arguments[0].filter(this) : sO(arguments[0], at) && arguments[0].filter(this)
						}, e.prototype.getBoundary = function() {
							return this.getFactory().createGeometryCollection(null)
						}, e.prototype.clone = function() {
							var e = t.prototype.clone.call(this);
							return e._coordinates = this._coordinates.clone(), e
						}, e.prototype.getGeometryType = function() {
							return "Point"
						}, e.prototype.copy = function() {
							return new e(this._coordinates.copy(), this._factory)
						}, e.prototype.getCoordinateSequence = function() {
							return this._coordinates
						}, e.prototype.getY = function() {
							if (null === this.getCoordinate()) throw Error("getY called on empty Point");
							return this.getCoordinate().y
						}, e.prototype.isEmpty = function() {
							return 0 === this._coordinates.size()
						}, e.prototype.init = function(t) {
							null === t && (t = this.getFactory().getCoordinateSequenceFactory().create([])), s2.isTrue(1 >= t.size()), this._coordinates = t
						}, e.prototype.isSimple = function() {
							return !0
						}, e.prototype.interfaces_ = function() {
							return [aj]
						}, e.prototype.getClass = function() {
							return e
						}, n.serialVersionUID.get = function() {
							return 0x44077bad161cbc00
						}, Object.defineProperties(e, n), e
					}(ae),
					aU = function() {};
				aU.prototype.interfaces_ = function() {
					return []
				}, aU.prototype.getClass = function() {
					return aU
				};
				var aY = function(t) {
						function e(e, n, r) {
							if (t.call(this, r), this._shell = null, this._holes = null, null === e && (e = this.getFactory().createLinearRing()), null === n && (n = []), t.hasNullElements(n)) throw new sv("holes must not contain null elements");
							if (e.isEmpty() && t.hasNonEmptyElements(n)) throw new sv("shell is empty but holes are not");
							this._shell = e, this._holes = n
						}
						t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
						var n = {
							serialVersionUID: {
								configurable: !0
							}
						};
						return e.prototype.computeEnvelopeInternal = function() {
							return this._shell.getEnvelopeInternal()
						}, e.prototype.getSortIndex = function() {
							return t.SORTINDEX_POLYGON
						}, e.prototype.getCoordinates = function() {
							if (this.isEmpty()) return [];
							for (var t = Array(this.getNumPoints()).fill(null), e = -1, n = this._shell.getCoordinates(), r = 0; r < n.length; r++) t[++e] = n[r];
							for (var i = 0; i < this._holes.length; i++)
								for (var o = this._holes[i].getCoordinates(), s = 0; s < o.length; s++) t[++e] = o[s];
							return t
						}, e.prototype.getArea = function() {
							var t;
							t = 0 + Math.abs(s9.signedArea(this._shell.getCoordinateSequence()));
							for (var e = 0; e < this._holes.length; e++) t -= Math.abs(s9.signedArea(this._holes[e].getCoordinateSequence()));
							return t
						}, e.prototype.isRectangle = function() {
							if (0 !== this.getNumInteriorRing() || null === this._shell || 5 !== this._shell.getNumPoints()) return !1;
							for (var t = this._shell.getCoordinateSequence(), e = this.getEnvelopeInternal(), n = 0; n < 5; n++) {
								var r = t.getX(n);
								if (r !== e.getMinX() && r !== e.getMaxX()) return !1;
								var i = t.getY(n);
								if (i !== e.getMinY() && i !== e.getMaxY()) return !1
							}
							for (var o = t.getX(0), s = t.getY(0), a = 1; a <= 4; a++) {
								var u = t.getX(a),
									h = t.getY(a);
								if (u !== o == (h !== s)) return !1;
								o = u, s = h
							}
							return !0
						}, e.prototype.equalsExact = function() {
							if (2 == arguments.length) {
								var e = arguments[0],
									n = arguments[1];
								if (!this.isEquivalentClass(e)) return !1;
								var r = this._shell,
									i = e._shell;
								if (!r.equalsExact(i, n) || this._holes.length !== e._holes.length) return !1;
								for (var o = 0; o < this._holes.length; o++)
									if (!this._holes[o].equalsExact(e._holes[o], n)) return !1;
								return !0
							}
							return t.prototype.equalsExact.apply(this, arguments)
						}, e.prototype.normalize = function() {
							if (0 == arguments.length) {
								this.normalize(this._shell, !0);
								for (var t = 0; t < this._holes.length; t++) this.normalize(this._holes[t], !1);
								aL.sort(this._holes)
							} else if (2 == arguments.length) {
								var e = arguments[0],
									n = arguments[1];
								if (e.isEmpty()) return null;
								var r = Array(e.getCoordinates().length - 1).fill(null);
								sY.arraycopy(e.getCoordinates(), 0, r, 0, r.length);
								var i = am.minCoordinate(e.getCoordinates());
								am.scroll(r, i), sY.arraycopy(r, 0, e.getCoordinates(), 0, r.length), e.getCoordinates()[r.length] = r[0], s9.isCCW(e.getCoordinates()) === n && am.reverse(e.getCoordinates())
							}
						}, e.prototype.getCoordinate = function() {
							return this._shell.getCoordinate()
						}, e.prototype.getNumInteriorRing = function() {
							return this._holes.length
						}, e.prototype.getBoundaryDimension = function() {
							return 1
						}, e.prototype.getDimension = function() {
							return 2
						}, e.prototype.getLength = function() {
							var t;
							t = 0 + this._shell.getLength();
							for (var e = 0; e < this._holes.length; e++) t += this._holes[e].getLength();
							return t
						}, e.prototype.getNumPoints = function() {
							for (var t = this._shell.getNumPoints(), e = 0; e < this._holes.length; e++) t += this._holes[e].getNumPoints();
							return t
						}, e.prototype.reverse = function() {
							var t = this.copy();
							t._shell = this._shell.copy().reverse(), t._holes = Array(this._holes.length).fill(null);
							for (var e = 0; e < this._holes.length; e++) t._holes[e] = this._holes[e].copy().reverse();
							return t
						}, e.prototype.convexHull = function() {
							return this.getExteriorRing().convexHull()
						}, e.prototype.compareToSameClass = function() {
							if (1 == arguments.length) {
								var t = arguments[0],
									e = this._shell,
									n = t._shell;
								return e.compareToSameClass(n)
							}
							if (2 == arguments.length) {
								var r = arguments[0],
									i = arguments[1],
									o = this._shell,
									s = r._shell,
									a = o.compareToSameClass(s, i);
								if (0 !== a) return a;
								for (var u = this.getNumInteriorRing(), h = r.getNumInteriorRing(), c = 0; c < u && c < h;) {
									var l = this.getInteriorRingN(c),
										p = r.getInteriorRingN(c),
										f = l.compareToSameClass(p, i);
									if (0 !== f) return f;
									c++
								}
								return c < u ? 1 : c < h ? -1 : 0
							}
						}, e.prototype.apply = function(t) {
							if (sO(t, ai)) {
								this._shell.apply(t);
								for (var e = 0; e < this._holes.length; e++) this._holes[e].apply(t)
							} else if (sO(t, aT)) {
								if (this._shell.apply(t), !t.isDone())
									for (var n = 0; n < this._holes.length && (this._holes[n].apply(t), !t.isDone()); n++);
								t.isGeometryChanged() && this.geometryChanged()
							} else if (sO(t, aR)) t.filter(this);
							else if (sO(t, at)) {
								t.filter(this), this._shell.apply(t);
								for (var r = 0; r < this._holes.length; r++) this._holes[r].apply(t)
							}
						}, e.prototype.getBoundary = function() {
							if (this.isEmpty()) return this.getFactory().createMultiLineString();
							var t = Array(this._holes.length + 1).fill(null);
							t[0] = this._shell;
							for (var e = 0; e < this._holes.length; e++) t[e + 1] = this._holes[e];
							return t.length <= 1 ? this.getFactory().createLinearRing(t[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(t)
						}, e.prototype.clone = function() {
							var e = t.prototype.clone.call(this);
							e._shell = this._shell.clone(), e._holes = Array(this._holes.length).fill(null);
							for (var n = 0; n < this._holes.length; n++) e._holes[n] = this._holes[n].clone();
							return e
						}, e.prototype.getGeometryType = function() {
							return "Polygon"
						}, e.prototype.copy = function() {
							for (var t = this._shell.copy(), n = Array(this._holes.length).fill(null), r = 0; r < n.length; r++) n[r] = this._holes[r].copy();
							return new e(t, n, this._factory)
						}, e.prototype.getExteriorRing = function() {
							return this._shell
						}, e.prototype.isEmpty = function() {
							return this._shell.isEmpty()
						}, e.prototype.getInteriorRingN = function(t) {
							return this._holes[t]
						}, e.prototype.interfaces_ = function() {
							return [aU]
						}, e.prototype.getClass = function() {
							return e
						}, n.serialVersionUID.get = function() {
							return -0xcf80010272368e00
						}, Object.defineProperties(e, n), e
					}(ae),
					aV = function(t) {
						function e() {
							t.apply(this, arguments)
						}
						t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
						var n = {
							serialVersionUID: {
								configurable: !0
							}
						};
						return e.prototype.getSortIndex = function() {
							return ae.SORTINDEX_MULTIPOINT
						}, e.prototype.isValid = function() {
							return !0
						}, e.prototype.equalsExact = function() {
							if (2 == arguments.length) {
								var e = arguments[0],
									n = arguments[1];
								return !!this.isEquivalentClass(e) && t.prototype.equalsExact.call(this, e, n)
							}
							return t.prototype.equalsExact.apply(this, arguments)
						}, e.prototype.getCoordinate = function() {
							if (1 == arguments.length) {
								var e = arguments[0];
								return this._geometries[e].getCoordinate()
							}
							return t.prototype.getCoordinate.apply(this, arguments)
						}, e.prototype.getBoundaryDimension = function() {
							return aP.FALSE
						}, e.prototype.getDimension = function() {
							return 0
						}, e.prototype.getBoundary = function() {
							return this.getFactory().createGeometryCollection(null)
						}, e.prototype.getGeometryType = function() {
							return "MultiPoint"
						}, e.prototype.copy = function() {
							for (var t = Array(this._geometries.length).fill(null), n = 0; n < t.length; n++) t[n] = this._geometries[n].copy();
							return new e(t, this._factory)
						}, e.prototype.interfaces_ = function() {
							return [aj]
						}, e.prototype.getClass = function() {
							return e
						}, n.serialVersionUID.get = function() {
							return -0x904e12be9d1f0400
						}, Object.defineProperties(e, n), e
					}(aD),
					aH = function(t) {
						function e(e, n) {
							e instanceof sw && n instanceof a7 && (e = n.getCoordinateSequenceFactory().create(e)), t.call(this, e, n), this.validateConstruction()
						}
						t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
						var n = {
							MINIMUM_VALID_SIZE: {
								configurable: !0
							},
							serialVersionUID: {
								configurable: !0
							}
						};
						return e.prototype.getSortIndex = function() {
							return ae.SORTINDEX_LINEARRING
						}, e.prototype.getBoundaryDimension = function() {
							return aP.FALSE
						}, e.prototype.isClosed = function() {
							return !!this.isEmpty() || t.prototype.isClosed.call(this)
						}, e.prototype.reverse = function() {
							var t = this._points.copy();
							return ak.reverse(t), this.getFactory().createLinearRing(t)
						}, e.prototype.validateConstruction = function() {
							if (!this.isEmpty() && !t.prototype.isClosed.call(this)) throw new sv("Points of LinearRing do not form a closed linestring");
							if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < e.MINIMUM_VALID_SIZE) throw new sv("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)")
						}, e.prototype.getGeometryType = function() {
							return "LinearRing"
						}, e.prototype.copy = function() {
							return new e(this._points.copy(), this._factory)
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, n.MINIMUM_VALID_SIZE.get = function() {
							return 4
						}, n.serialVersionUID.get = function() {
							return -0xc4dd61d9dc985a00
						}, Object.defineProperties(e, n), e
					}(az),
					aW = function(t) {
						function e() {
							t.apply(this, arguments)
						}
						t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
						var n = {
							serialVersionUID: {
								configurable: !0
							}
						};
						return e.prototype.getSortIndex = function() {
							return ae.SORTINDEX_MULTIPOLYGON
						}, e.prototype.equalsExact = function() {
							if (2 == arguments.length) {
								var e = arguments[0],
									n = arguments[1];
								return !!this.isEquivalentClass(e) && t.prototype.equalsExact.call(this, e, n)
							}
							return t.prototype.equalsExact.apply(this, arguments)
						}, e.prototype.getBoundaryDimension = function() {
							return 1
						}, e.prototype.getDimension = function() {
							return 2
						}, e.prototype.reverse = function() {
							for (var t = this._geometries.length, e = Array(t).fill(null), n = 0; n < this._geometries.length; n++) e[n] = this._geometries[n].reverse();
							return this.getFactory().createMultiPolygon(e)
						}, e.prototype.getBoundary = function() {
							if (this.isEmpty()) return this.getFactory().createMultiLineString();
							for (var t = new ad, e = 0; e < this._geometries.length; e++)
								for (var n = this._geometries[e].getBoundary(), r = 0; r < n.getNumGeometries(); r++) t.add(n.getGeometryN(r));
							var i = Array(t.size()).fill(null);
							return this.getFactory().createMultiLineString(t.toArray(i))
						}, e.prototype.getGeometryType = function() {
							return "MultiPolygon"
						}, e.prototype.copy = function() {
							for (var t = Array(this._geometries.length).fill(null), n = 0; n < t.length; n++) t[n] = this._geometries[n].copy();
							return new e(t, this._factory)
						}, e.prototype.interfaces_ = function() {
							return [aU]
						}, e.prototype.getClass = function() {
							return e
						}, n.serialVersionUID.get = function() {
							return -551033529766975900
						}, Object.defineProperties(e, n), e
					}(aD),
					aJ = function(t) {
						this._factory = t || null, this._isUserDataCopied = !1
					},
					aZ = {
						NoOpGeometryOperation: {
							configurable: !0
						},
						CoordinateOperation: {
							configurable: !0
						},
						CoordinateSequenceOperation: {
							configurable: !0
						}
					};
				aJ.prototype.setCopyUserData = function(t) {
					this._isUserDataCopied = t
				}, aJ.prototype.edit = function(t, e) {
					if (null === t) return null;
					var n = this.editInternal(t, e);
					return this._isUserDataCopied && n.setUserData(t.getUserData()), n
				}, aJ.prototype.editInternal = function(t, e) {
					return null === this._factory && (this._factory = t.getFactory()), t instanceof aD ? this.editGeometryCollection(t, e) : t instanceof aY ? this.editPolygon(t, e) : t instanceof aX ? e.edit(t, this._factory) : t instanceof az ? e.edit(t, this._factory) : (s2.shouldNeverReachHere("Unsupported Geometry class: " + t.getClass().getName()), null)
				}, aJ.prototype.editGeometryCollection = function(t, e) {
					for (var n = e.edit(t, this._factory), r = new ad, i = 0; i < n.getNumGeometries(); i++) {
						var o = this.edit(n.getGeometryN(i), e);
						null === o || o.isEmpty() || r.add(o)
					}
					return n.getClass() === aV ? this._factory.createMultiPoint(r.toArray([])) : n.getClass() === aA ? this._factory.createMultiLineString(r.toArray([])) : n.getClass() === aW ? this._factory.createMultiPolygon(r.toArray([])) : this._factory.createGeometryCollection(r.toArray([]))
				}, aJ.prototype.editPolygon = function(t, e) {
					var n = e.edit(t, this._factory);
					if (null === n && (n = this._factory.createPolygon(null)), n.isEmpty()) return n;
					var r = this.edit(n.getExteriorRing(), e);
					if (null === r || r.isEmpty()) return this._factory.createPolygon();
					for (var i = new ad, o = 0; o < n.getNumInteriorRing(); o++) {
						var s = this.edit(n.getInteriorRingN(o), e);
						null === s || s.isEmpty() || i.add(s)
					}
					return this._factory.createPolygon(r, i.toArray([]))
				}, aJ.prototype.interfaces_ = function() {
					return []
				}, aJ.prototype.getClass = function() {
					return aJ
				}, aJ.GeometryEditorOperation = function() {}, aZ.NoOpGeometryOperation.get = function() {
					return aK
				}, aZ.CoordinateOperation.get = function() {
					return aQ
				}, aZ.CoordinateSequenceOperation.get = function() {
					return a$
				}, Object.defineProperties(aJ, aZ);
				var aK = function() {};
				aK.prototype.edit = function(t, e) {
					return t
				}, aK.prototype.interfaces_ = function() {
					return [aJ.GeometryEditorOperation]
				}, aK.prototype.getClass = function() {
					return aK
				};
				var aQ = function() {};
				aQ.prototype.edit = function(t, e) {
					var n = this.editCoordinates(t.getCoordinates(), t);
					return null === n ? t : t instanceof aH ? e.createLinearRing(n) : t instanceof az ? e.createLineString(n) : t instanceof aX ? n.length > 0 ? e.createPoint(n[0]) : e.createPoint() : t
				}, aQ.prototype.interfaces_ = function() {
					return [aJ.GeometryEditorOperation]
				}, aQ.prototype.getClass = function() {
					return aQ
				};
				var a$ = function() {};
				a$.prototype.edit = function(t, e) {
					return t instanceof aH ? e.createLinearRing(this.edit(t.getCoordinateSequence(), t)) : t instanceof az ? e.createLineString(this.edit(t.getCoordinateSequence(), t)) : t instanceof aX ? e.createPoint(this.edit(t.getCoordinateSequence(), t)) : t
				}, a$.prototype.interfaces_ = function() {
					return [aJ.GeometryEditorOperation]
				}, a$.prototype.getClass = function() {
					return a$
				};
				var a0 = function() {
						if (this._dimension = 3, this._coordinates = null, 1 == arguments.length) {
							if (arguments[0] instanceof Array) this._coordinates = arguments[0], this._dimension = 3;
							else if (Number.isInteger(arguments[0])) {
								var t = arguments[0];
								this._coordinates = Array(t).fill(null);
								for (var e = 0; e < t; e++) this._coordinates[e] = new sw
							} else if (sO(arguments[0], sz)) {
								var n = arguments[0];
								if (null === n) return this._coordinates = [].fill(null), null;
								this._dimension = n.getDimension(), this._coordinates = Array(n.size()).fill(null);
								for (var r = 0; r < this._coordinates.length; r++) this._coordinates[r] = n.getCoordinateCopy(r)
							}
						} else if (2 == arguments.length) {
							if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
								var i = arguments[0],
									o = arguments[1];
								this._coordinates = i, this._dimension = o, null === i && (this._coordinates = [].fill(null))
							} else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
								var s = arguments[0],
									a = arguments[1];
								this._coordinates = Array(s).fill(null), this._dimension = a;
								for (var u = 0; u < s; u++) this._coordinates[u] = new sw
							}
						}
					},
					a1 = {
						serialVersionUID: {
							configurable: !0
						}
					};
				a0.prototype.setOrdinate = function(t, e, n) {
					switch (e) {
						case sz.X:
							this._coordinates[t].x = n;
							break;
						case sz.Y:
							this._coordinates[t].y = n;
							break;
						case sz.Z:
							this._coordinates[t].z = n;
							break;
						default:
							throw new sv("invalid ordinateIndex")
					}
				}, a0.prototype.size = function() {
					return this._coordinates.length
				}, a0.prototype.getOrdinate = function(t, e) {
					switch (e) {
						case sz.X:
							return this._coordinates[t].x;
						case sz.Y:
							return this._coordinates[t].y;
						case sz.Z:
							return this._coordinates[t].z
					}
					return sx.NaN
				}, a0.prototype.getCoordinate = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						return this._coordinates[t]
					}
					if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						n.x = this._coordinates[e].x, n.y = this._coordinates[e].y, n.z = this._coordinates[e].z
					}
				}, a0.prototype.getCoordinateCopy = function(t) {
					return new sw(this._coordinates[t])
				}, a0.prototype.getDimension = function() {
					return this._dimension
				}, a0.prototype.getX = function(t) {
					return this._coordinates[t].x
				}, a0.prototype.clone = function() {
					for (var t = Array(this.size()).fill(null), e = 0; e < this._coordinates.length; e++) t[e] = this._coordinates[e].clone();
					return new a0(t, this._dimension)
				}, a0.prototype.expandEnvelope = function(t) {
					for (var e = 0; e < this._coordinates.length; e++) t.expandToInclude(this._coordinates[e]);
					return t
				}, a0.prototype.copy = function() {
					for (var t = Array(this.size()).fill(null), e = 0; e < this._coordinates.length; e++) t[e] = this._coordinates[e].copy();
					return new a0(t, this._dimension)
				}, a0.prototype.toString = function() {
					if (this._coordinates.length > 0) {
						var t = new sD(17 * this._coordinates.length);
						t.append("("), t.append(this._coordinates[0]);
						for (var e = 1; e < this._coordinates.length; e++) t.append(", "), t.append(this._coordinates[e]);
						return t.append(")"), t.toString()
					}
					return "()"
				}, a0.prototype.getY = function(t) {
					return this._coordinates[t].y
				}, a0.prototype.toCoordinateArray = function() {
					return this._coordinates
				}, a0.prototype.interfaces_ = function() {
					return [sz, rE]
				}, a0.prototype.getClass = function() {
					return a0
				}, a1.serialVersionUID.get = function() {
					return -915438501601840600
				}, Object.defineProperties(a0, a1);
				var a2 = function() {},
					a3 = {
						serialVersionUID: {
							configurable: !0
						},
						instanceObject: {
							configurable: !0
						}
					};
				a2.prototype.readResolve = function() {
					return a2.instance()
				}, a2.prototype.create = function() {
					if (1 == arguments.length) {
						if (arguments[0] instanceof Array) {
							var t = arguments[0];
							return new a0(t)
						}
						if (sO(arguments[0], sz)) {
							var e = arguments[0];
							return new a0(e)
						}
					} else if (2 == arguments.length) {
						var n = arguments[0],
							r = arguments[1];
						return r > 3 && (r = 3), r < 2 ? new a0(n) : new a0(n, r)
					}
				}, a2.prototype.interfaces_ = function() {
					return [sM, rE]
				}, a2.prototype.getClass = function() {
					return a2
				}, a2.instance = function() {
					return a2.instanceObject
				}, a3.serialVersionUID.get = function() {
					return -0xc71b60593090d200
				}, a3.instanceObject.get = function() {
					return new a2
				}, Object.defineProperties(a2, a3);
				var a4 = function(t) {
						function e() {
							t.call(this), this.map_ = new Map
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.get = function(t) {
							return this.map_.get(t) || null
						}, e.prototype.put = function(t, e) {
							return this.map_.set(t, e), e
						}, e.prototype.values = function() {
							for (var t = new ad, e = this.map_.values(), n = e.next(); !n.done;) t.add(n.value), n = e.next();
							return t
						}, e.prototype.entrySet = function() {
							var t = new aN;
							return this.map_.entries().forEach(function(e) {
								return t.add(e)
							}), t
						}, e.prototype.size = function() {
							return this.map_.size()
						}, e
					}(ab),
					a6 = function t() {
						if (this._modelType = null, this._scale = null, 0 == arguments.length) this._modelType = t.FLOATING;
						else if (1 == arguments.length) {
							if (arguments[0] instanceof a5) {
								var e = arguments[0];
								this._modelType = e, e === t.FIXED && this.setScale(1)
							} else if ("number" == typeof arguments[0]) {
								var n = arguments[0];
								this._modelType = t.FIXED, this.setScale(n)
							} else if (arguments[0] instanceof t) {
								var r = arguments[0];
								this._modelType = r._modelType, this._scale = r._scale
							}
						}
					},
					a8 = {
						serialVersionUID: {
							configurable: !0
						},
						maximumPreciseValue: {
							configurable: !0
						}
					};
				a6.prototype.equals = function(t) {
					return t instanceof a6 && this._modelType === t._modelType && this._scale === t._scale
				}, a6.prototype.compareTo = function(t) {
					var e = this.getMaximumSignificantDigits(),
						n = t.getMaximumSignificantDigits();
					return new sA(e).compareTo(new sA(n))
				}, a6.prototype.getScale = function() {
					return this._scale
				}, a6.prototype.isFloating = function() {
					return this._modelType === a6.FLOATING || this._modelType === a6.FLOATING_SINGLE
				}, a6.prototype.getType = function() {
					return this._modelType
				}, a6.prototype.toString = function() {
					var t = "UNKNOWN";
					return this._modelType === a6.FLOATING ? t = "Floating" : this._modelType === a6.FLOATING_SINGLE ? t = "Floating-Single" : this._modelType === a6.FIXED && (t = "Fixed (Scale=" + this.getScale() + ")"), t
				}, a6.prototype.makePrecise = function() {
					if ("number" == typeof arguments[0]) {
						var t = arguments[0];
						return sx.isNaN(t) || this._modelType === a6.FLOATING_SINGLE ? t : this._modelType === a6.FIXED ? Math.round(t * this._scale) / this._scale : t
					}
					if (arguments[0] instanceof sw) {
						var e = arguments[0];
						if (this._modelType === a6.FLOATING) return null;
						e.x = this.makePrecise(e.x), e.y = this.makePrecise(e.y)
					}
				}, a6.prototype.getMaximumSignificantDigits = function() {
					var t = 16;
					return this._modelType === a6.FLOATING ? t = 16 : this._modelType === a6.FLOATING_SINGLE ? t = 6 : this._modelType === a6.FIXED && (t = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), t
				}, a6.prototype.setScale = function(t) {
					this._scale = Math.abs(t)
				}, a6.prototype.interfaces_ = function() {
					return [rE, sb]
				}, a6.prototype.getClass = function() {
					return a6
				}, a6.mostPrecise = function(t, e) {
					return t.compareTo(e) >= 0 ? t : e
				}, a8.serialVersionUID.get = function() {
					return 0x6bee6404e9a25c00
				}, a8.maximumPreciseValue.get = function() {
					return 9007199254740992
				}, Object.defineProperties(a6, a8);
				var a5 = function t(e) {
						this._name = e || null, t.nameToTypeMap.put(e, this)
					},
					a9 = {
						serialVersionUID: {
							configurable: !0
						},
						nameToTypeMap: {
							configurable: !0
						}
					};
				a5.prototype.readResolve = function() {
					return a5.nameToTypeMap.get(this._name)
				}, a5.prototype.toString = function() {
					return this._name
				}, a5.prototype.interfaces_ = function() {
					return [rE]
				}, a5.prototype.getClass = function() {
					return a5
				}, a9.serialVersionUID.get = function() {
					return -552860263173159e4
				}, a9.nameToTypeMap.get = function() {
					return new a4
				}, Object.defineProperties(a5, a9), a6.Type = a5, a6.FIXED = new a5("FIXED"), a6.FLOATING = new a5("FLOATING"), a6.FLOATING_SINGLE = new a5("FLOATING SINGLE");
				var a7 = function t() {
						this._precisionModel = new a6, this._SRID = 0, this._coordinateSequenceFactory = t.getDefaultCoordinateSequenceFactory(), 0 == arguments.length || (1 == arguments.length ? sO(arguments[0], sM) ? this._coordinateSequenceFactory = arguments[0] : arguments[0] instanceof a6 && (this._precisionModel = arguments[0]) : 2 == arguments.length ? (this._precisionModel = arguments[0], this._SRID = arguments[1]) : 3 == arguments.length && (this._precisionModel = arguments[0], this._SRID = arguments[1], this._coordinateSequenceFactory = arguments[2]))
					},
					ut = {
						serialVersionUID: {
							configurable: !0
						}
					};
				a7.prototype.toGeometry = function(t) {
					return t.isNull() ? this.createPoint(null) : t.getMinX() === t.getMaxX() && t.getMinY() === t.getMaxY() ? this.createPoint(new sw(t.getMinX(), t.getMinY())) : t.getMinX() === t.getMaxX() || t.getMinY() === t.getMaxY() ? this.createLineString([new sw(t.getMinX(), t.getMinY()), new sw(t.getMaxX(), t.getMaxY())]) : this.createPolygon(this.createLinearRing([new sw(t.getMinX(), t.getMinY()), new sw(t.getMinX(), t.getMaxY()), new sw(t.getMaxX(), t.getMaxY()), new sw(t.getMaxX(), t.getMinY()), new sw(t.getMinX(), t.getMinY())]), null)
				}, a7.prototype.createLineString = function(t) {
					return t ? t instanceof Array ? new az(this.getCoordinateSequenceFactory().create(t), this) : sO(t, sz) ? new az(t, this) : void 0 : new az(this.getCoordinateSequenceFactory().create([]), this)
				}, a7.prototype.createMultiLineString = function() {
					if (0 == arguments.length) return new aA(null, this);
					if (1 == arguments.length) {
						var t = arguments[0];
						return new aA(t, this)
					}
				}, a7.prototype.buildGeometry = function(t) {
					for (var e = null, n = !1, r = !1, i = t.iterator(); i.hasNext();) {
						var o = i.next(),
							s = o.getClass();
						null === e && (e = s), s !== e && (n = !0), o.isGeometryCollectionOrDerived() && (r = !0)
					}
					if (null === e) return this.createGeometryCollection();
					if (n || r) return this.createGeometryCollection(a7.toGeometryArray(t));
					var a = t.iterator().next();
					if (t.size() > 1) {
						if (a instanceof aY) return this.createMultiPolygon(a7.toPolygonArray(t));
						if (a instanceof az) return this.createMultiLineString(a7.toLineStringArray(t));
						if (a instanceof aX) return this.createMultiPoint(a7.toPointArray(t));
						s2.shouldNeverReachHere("Unhandled class: " + a.getClass().getName())
					}
					return a
				}, a7.prototype.createMultiPointFromCoords = function(t) {
					return this.createMultiPoint(null !== t ? this.getCoordinateSequenceFactory().create(t) : null)
				}, a7.prototype.createPoint = function() {
					if (0 == arguments.length) return this.createPoint(this.getCoordinateSequenceFactory().create([]));
					if (1 == arguments.length) {
						if (arguments[0] instanceof sw) {
							var t = arguments[0];
							return this.createPoint(null !== t ? this.getCoordinateSequenceFactory().create([t]) : null)
						}
						if (sO(arguments[0], sz)) {
							var e = arguments[0];
							return new aX(e, this)
						}
					}
				}, a7.prototype.getCoordinateSequenceFactory = function() {
					return this._coordinateSequenceFactory
				}, a7.prototype.createPolygon = function() {
					if (0 == arguments.length) return new aY(null, null, this);
					if (1 == arguments.length) {
						if (sO(arguments[0], sz)) {
							var t = arguments[0];
							return this.createPolygon(this.createLinearRing(t))
						}
						if (arguments[0] instanceof Array) {
							var e = arguments[0];
							return this.createPolygon(this.createLinearRing(e))
						}
						if (arguments[0] instanceof aH) {
							var n = arguments[0];
							return this.createPolygon(n, null)
						}
					} else if (2 == arguments.length) {
						var r = arguments[0],
							i = arguments[1];
						return new aY(r, i, this)
					}
				}, a7.prototype.getSRID = function() {
					return this._SRID
				}, a7.prototype.createGeometryCollection = function() {
					if (0 == arguments.length) return new aD(null, this);
					if (1 == arguments.length) {
						var t = arguments[0];
						return new aD(t, this)
					}
				}, a7.prototype.createGeometry = function(t) {
					return new aJ(this).edit(t, {
						edit: function() {
							if (2 == arguments.length) {
								var t = arguments[0];
								return this._coordinateSequenceFactory.create(t)
							}
						}
					})
				}, a7.prototype.getPrecisionModel = function() {
					return this._precisionModel
				}, a7.prototype.createLinearRing = function() {
					if (0 == arguments.length) return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
					if (1 == arguments.length) {
						if (arguments[0] instanceof Array) {
							var t = arguments[0];
							return this.createLinearRing(null !== t ? this.getCoordinateSequenceFactory().create(t) : null)
						}
						if (sO(arguments[0], sz)) {
							var e = arguments[0];
							return new aH(e, this)
						}
					}
				}, a7.prototype.createMultiPolygon = function() {
					if (0 == arguments.length) return new aW(null, this);
					if (1 == arguments.length) {
						var t = arguments[0];
						return new aW(t, this)
					}
				}, a7.prototype.createMultiPoint = function() {
					if (0 == arguments.length) return new aV(null, this);
					if (1 == arguments.length) {
						if (arguments[0] instanceof Array) {
							var t = arguments[0];
							return new aV(t, this)
						}
						if (arguments[0] instanceof Array) {
							var e = arguments[0];
							return this.createMultiPoint(null !== e ? this.getCoordinateSequenceFactory().create(e) : null)
						}
						if (sO(arguments[0], sz)) {
							var n = arguments[0];
							if (null === n) return this.createMultiPoint([].fill(null));
							for (var r = Array(n.size()).fill(null), i = 0; i < n.size(); i++) {
								var o = this.getCoordinateSequenceFactory().create(1, n.getDimension());
								ak.copy(n, i, o, 0, 1), r[i] = this.createPoint(o)
							}
							return this.createMultiPoint(r)
						}
					}
				}, a7.prototype.interfaces_ = function() {
					return [rE]
				}, a7.prototype.getClass = function() {
					return a7
				}, a7.toMultiPolygonArray = function(t) {
					var e = Array(t.size()).fill(null);
					return t.toArray(e)
				}, a7.toGeometryArray = function(t) {
					if (null === t) return null;
					var e = Array(t.size()).fill(null);
					return t.toArray(e)
				}, a7.getDefaultCoordinateSequenceFactory = function() {
					return a2.instance()
				}, a7.toMultiLineStringArray = function(t) {
					var e = Array(t.size()).fill(null);
					return t.toArray(e)
				}, a7.toLineStringArray = function(t) {
					var e = Array(t.size()).fill(null);
					return t.toArray(e)
				}, a7.toMultiPointArray = function(t) {
					var e = Array(t.size()).fill(null);
					return t.toArray(e)
				}, a7.toLinearRingArray = function(t) {
					var e = Array(t.size()).fill(null);
					return t.toArray(e)
				}, a7.toPointArray = function(t) {
					var e = Array(t.size()).fill(null);
					return t.toArray(e)
				}, a7.toPolygonArray = function(t) {
					var e = Array(t.size()).fill(null);
					return t.toArray(e)
				}, a7.createPointFromInternalCoord = function(t, e) {
					return e.getPrecisionModel().makePrecise(t), e.getFactory().createPoint(t)
				}, ut.serialVersionUID.get = function() {
					return -0xa158a0dfae114c00
				}, Object.defineProperties(a7, ut);
				var ue = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"],
					un = function(t) {
						this.geometryFactory = t || new a7
					};
				un.prototype.read = function(t) {
					var e, n = (e = "string" == typeof t ? JSON.parse(t) : t).type;
					if (!ur[n]) throw Error("Unknown GeoJSON type: " + e.type);
					return -1 !== ue.indexOf(n) ? ur[n].apply(this, [e.coordinates]) : "GeometryCollection" === n ? ur[n].apply(this, [e.geometries]) : ur[n].apply(this, [e])
				}, un.prototype.write = function(t) {
					var e = t.getGeometryType();
					if (!ui[e]) throw Error("Geometry is not supported");
					return ui[e].apply(this, [t])
				};
				var ur = {
						Feature: function(t) {
							var e = {};
							for (var n in t) e[n] = t[n];
							if (t.geometry) {
								if (!ur[t.geometry.type]) throw Error("Unknown GeoJSON type: " + t.type);
								e.geometry = this.read(t.geometry)
							}
							return t.bbox && (e.bbox = ur.bbox.apply(this, [t.bbox])), e
						},
						FeatureCollection: function(t) {
							var e = {};
							if (t.features) {
								e.features = [];
								for (var n = 0; n < t.features.length; ++n) e.features.push(this.read(t.features[n]))
							}
							return t.bbox && (e.bbox = this.parse.bbox.apply(this, [t.bbox])), e
						},
						coordinates: function(t) {
							for (var e = [], n = 0; n < t.length; ++n) {
								var r = t[n];
								e.push(new sw(r[0], r[1]))
							}
							return e
						},
						bbox: function(t) {
							return this.geometryFactory.createLinearRing([new sw(t[0], t[1]), new sw(t[2], t[1]), new sw(t[2], t[3]), new sw(t[0], t[3]), new sw(t[0], t[1])])
						},
						Point: function(t) {
							var e = new sw(t[0], t[1]);
							return this.geometryFactory.createPoint(e)
						},
						MultiPoint: function(t) {
							for (var e = [], n = 0; n < t.length; ++n) e.push(ur.Point.apply(this, [t[n]]));
							return this.geometryFactory.createMultiPoint(e)
						},
						LineString: function(t) {
							var e = ur.coordinates.apply(this, [t]);
							return this.geometryFactory.createLineString(e)
						},
						MultiLineString: function(t) {
							for (var e = [], n = 0; n < t.length; ++n) e.push(ur.LineString.apply(this, [t[n]]));
							return this.geometryFactory.createMultiLineString(e)
						},
						Polygon: function(t) {
							for (var e = ur.coordinates.apply(this, [t[0]]), n = this.geometryFactory.createLinearRing(e), r = [], i = 1; i < t.length; ++i) {
								var o = t[i],
									s = ur.coordinates.apply(this, [o]),
									a = this.geometryFactory.createLinearRing(s);
								r.push(a)
							}
							return this.geometryFactory.createPolygon(n, r)
						},
						MultiPolygon: function(t) {
							for (var e = [], n = 0; n < t.length; ++n) {
								var r = t[n];
								e.push(ur.Polygon.apply(this, [r]))
							}
							return this.geometryFactory.createMultiPolygon(e)
						},
						GeometryCollection: function(t) {
							for (var e = [], n = 0; n < t.length; ++n) {
								var r = t[n];
								e.push(this.read(r))
							}
							return this.geometryFactory.createGeometryCollection(e)
						}
					},
					ui = {
						coordinate: function(t) {
							return [t.x, t.y]
						},
						Point: function(t) {
							return {
								type: "Point",
								coordinates: ui.coordinate.apply(this, [t.getCoordinate()])
							}
						},
						MultiPoint: function(t) {
							for (var e = [], n = 0; n < t._geometries.length; ++n) {
								var r = t._geometries[n],
									i = ui.Point.apply(this, [r]);
								e.push(i.coordinates)
							}
							return {
								type: "MultiPoint",
								coordinates: e
							}
						},
						LineString: function(t) {
							for (var e = [], n = t.getCoordinates(), r = 0; r < n.length; ++r) {
								var i = n[r];
								e.push(ui.coordinate.apply(this, [i]))
							}
							return {
								type: "LineString",
								coordinates: e
							}
						},
						MultiLineString: function(t) {
							for (var e = [], n = 0; n < t._geometries.length; ++n) {
								var r = t._geometries[n],
									i = ui.LineString.apply(this, [r]);
								e.push(i.coordinates)
							}
							return {
								type: "MultiLineString",
								coordinates: e
							}
						},
						Polygon: function(t) {
							var e = [],
								n = ui.LineString.apply(this, [t._shell]);
							e.push(n.coordinates);
							for (var r = 0; r < t._holes.length; ++r) {
								var i = t._holes[r],
									o = ui.LineString.apply(this, [i]);
								e.push(o.coordinates)
							}
							return {
								type: "Polygon",
								coordinates: e
							}
						},
						MultiPolygon: function(t) {
							for (var e = [], n = 0; n < t._geometries.length; ++n) {
								var r = t._geometries[n],
									i = ui.Polygon.apply(this, [r]);
								e.push(i.coordinates)
							}
							return {
								type: "MultiPolygon",
								coordinates: e
							}
						},
						GeometryCollection: function(t) {
							for (var e = [], n = 0; n < t._geometries.length; ++n) {
								var r = t._geometries[n],
									i = r.getGeometryType();
								e.push(ui[i].apply(this, [r]))
							}
							return {
								type: "GeometryCollection",
								geometries: e
							}
						}
					},
					uo = function(t) {
						this.geometryFactory = t || new a7, this.precisionModel = this.geometryFactory.getPrecisionModel(), this.parser = new un(this.geometryFactory)
					};
				uo.prototype.read = function(t) {
					var e = this.parser.read(t);
					return this.precisionModel.getType() === a6.FIXED && this.reducePrecision(e), e
				}, uo.prototype.reducePrecision = function(t) {
					var e, n;
					if (t.coordinate) this.precisionModel.makePrecise(t.coordinate);
					else if (t.points)
						for (e = 0, n = t.points.length; e < n; e++) this.precisionModel.makePrecise(t.points[e]);
					else if (t.geometries)
						for (e = 0, n = t.geometries.length; e < n; e++) this.reducePrecision(t.geometries[e])
				};
				var us = function() {
					this.parser = new un(this.geometryFactory)
				};
				us.prototype.write = function(t) {
					return this.parser.write(t)
				};
				var ua = function() {},
					uu = {
						ON: {
							configurable: !0
						},
						LEFT: {
							configurable: !0
						},
						RIGHT: {
							configurable: !0
						}
					};
				ua.prototype.interfaces_ = function() {
					return []
				}, ua.prototype.getClass = function() {
					return ua
				}, ua.opposite = function(t) {
					return t === ua.LEFT ? ua.RIGHT : t === ua.RIGHT ? ua.LEFT : t
				}, uu.ON.get = function() {
					return 0
				}, uu.LEFT.get = function() {
					return 1
				}, uu.RIGHT.get = function() {
					return 2
				}, Object.defineProperties(ua, uu), (rD.prototype = Error()).name = "EmptyStackException", (rA.prototype = new ag).add = function(t) {
					return this.array_.push(t), !0
				}, rA.prototype.get = function(t) {
					if (t < 0 || t >= this.size()) throw Error();
					return this.array_[t]
				}, rA.prototype.push = function(t) {
					return this.array_.push(t), t
				}, rA.prototype.pop = function(t) {
					if (0 === this.array_.length) throw new rD;
					return this.array_.pop()
				}, rA.prototype.peek = function() {
					if (0 === this.array_.length) throw new rD;
					return this.array_[this.array_.length - 1]
				}, rA.prototype.empty = function() {
					return 0 === this.array_.length
				}, rA.prototype.isEmpty = function() {
					return this.empty()
				}, rA.prototype.search = function(t) {
					return this.array_.indexOf(t)
				}, rA.prototype.size = function() {
					return this.array_.length
				}, rA.prototype.toArray = function() {
					for (var t = [], e = 0, n = this.array_.length; e < n; e++) t.push(this.array_[e]);
					return t
				};
				var uh = function() {
					this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null
				};
				uh.prototype.getCoordinate = function() {
					return this._minCoord
				}, uh.prototype.getRightmostSide = function(t, e) {
					var n = this.getRightmostSideOfSegment(t, e);
					return n < 0 && (n = this.getRightmostSideOfSegment(t, e - 1)), n < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(t)), n
				}, uh.prototype.findRightmostEdgeAtVertex = function() {
					var t = this._minDe.getEdge().getCoordinates();
					s2.isTrue(this._minIndex > 0 && this._minIndex < t.length, "rightmost point expected to be interior vertex of edge");
					var e = t[this._minIndex - 1],
						n = t[this._minIndex + 1],
						r = s9.computeOrientation(this._minCoord, n, e),
						i = !1;
					e.y < this._minCoord.y && n.y < this._minCoord.y && r === s9.COUNTERCLOCKWISE ? i = !0 : e.y > this._minCoord.y && n.y > this._minCoord.y && r === s9.CLOCKWISE && (i = !0), i && (this._minIndex = this._minIndex - 1)
				}, uh.prototype.getRightmostSideOfSegment = function(t, e) {
					var n = t.getEdge().getCoordinates();
					if (e < 0 || e + 1 >= n.length || n[e].y === n[e + 1].y) return -1;
					var r = ua.LEFT;
					return n[e].y < n[e + 1].y && (r = ua.RIGHT), r
				}, uh.prototype.getEdge = function() {
					return this._orientedDe
				}, uh.prototype.checkForRightmostCoordinate = function(t) {
					for (var e = t.getEdge().getCoordinates(), n = 0; n < e.length - 1; n++)(null === this._minCoord || e[n].x > this._minCoord.x) && (this._minDe = t, this._minIndex = n, this._minCoord = e[n])
				}, uh.prototype.findRightmostEdgeAtNode = function() {
					var t = this._minDe.getNode().getEdges();
					this._minDe = t.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1)
				}, uh.prototype.findEdge = function(t) {
					for (var e = t.iterator(); e.hasNext();) {
						var n = e.next();
						n.isForward() && this.checkForRightmostCoordinate(n)
					}
					s2.isTrue(0 !== this._minIndex || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), 0 === this._minIndex ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe, this.getRightmostSide(this._minDe, this._minIndex) === ua.LEFT && (this._orientedDe = this._minDe.getSym())
				}, uh.prototype.interfaces_ = function() {
					return []
				}, uh.prototype.getClass = function() {
					return uh
				};
				var uc = function(t) {
						function e(n, r) {
							t.call(this, e.msgWithCoord(n, r)), this.pt = r ? new sw(r) : null, this.name = "TopologyException"
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getCoordinate = function() {
							return this.pt
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, e.msgWithCoord = function(t, e) {
							return e ? t : t + " [ " + e + " ]"
						}, e
					}(s0),
					ul = function() {
						this.array_ = []
					};
				ul.prototype.addLast = function(t) {
					this.array_.push(t)
				}, ul.prototype.removeFirst = function() {
					return this.array_.shift()
				}, ul.prototype.isEmpty = function() {
					return 0 === this.array_.length
				};
				var up = function() {
					this._finder = null, this._dirEdgeList = new ad, this._nodes = new ad, this._rightMostCoord = null, this._env = null, this._finder = new uh
				};
				up.prototype.clearVisitedEdges = function() {
					for (var t = this._dirEdgeList.iterator(); t.hasNext();) t.next().setVisited(!1)
				}, up.prototype.getRightmostCoordinate = function() {
					return this._rightMostCoord
				}, up.prototype.computeNodeDepth = function(t) {
					for (var e = null, n = t.getEdges().iterator(); n.hasNext();) {
						var r = n.next();
						if (r.isVisited() || r.getSym().isVisited()) {
							e = r;
							break
						}
					}
					if (null === e) throw new uc("unable to find edge to compute depths at " + t.getCoordinate());
					t.getEdges().computeDepths(e);
					for (var i = t.getEdges().iterator(); i.hasNext();) {
						var o = i.next();
						o.setVisited(!0), this.copySymDepths(o)
					}
				}, up.prototype.computeDepth = function(t) {
					this.clearVisitedEdges();
					var e = this._finder.getEdge();
					e.setEdgeDepths(ua.RIGHT, t), this.copySymDepths(e), this.computeDepths(e)
				}, up.prototype.create = function(t) {
					this.addReachable(t), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate()
				}, up.prototype.findResultEdges = function() {
					for (var t = this._dirEdgeList.iterator(); t.hasNext();) {
						var e = t.next();
						e.getDepth(ua.RIGHT) >= 1 && 0 >= e.getDepth(ua.LEFT) && !e.isInteriorAreaEdge() && e.setInResult(!0)
					}
				}, up.prototype.computeDepths = function(t) {
					var e = new aN,
						n = new ul,
						r = t.getNode();
					for (n.addLast(r), e.add(r), t.setVisited(!0); !n.isEmpty();) {
						var i = n.removeFirst();
						e.add(i), this.computeNodeDepth(i);
						for (var o = i.getEdges().iterator(); o.hasNext();) {
							var s = o.next().getSym();
							if (!s.isVisited()) {
								var a = s.getNode();
								e.contains(a) || (n.addLast(a), e.add(a))
							}
						}
					}
				}, up.prototype.compareTo = function(t) {
					return this._rightMostCoord.x < t._rightMostCoord.x ? -1 : this._rightMostCoord.x > t._rightMostCoord.x ? 1 : 0
				}, up.prototype.getEnvelope = function() {
					if (null === this._env) {
						for (var t = new sH, e = this._dirEdgeList.iterator(); e.hasNext();)
							for (var n = e.next().getEdge().getCoordinates(), r = 0; r < n.length - 1; r++) t.expandToInclude(n[r]);
						this._env = t
					}
					return this._env
				}, up.prototype.addReachable = function(t) {
					var e = new rA;
					for (e.add(t); !e.empty();) {
						var n = e.pop();
						this.add(n, e)
					}
				}, up.prototype.copySymDepths = function(t) {
					var e = t.getSym();
					e.setDepth(ua.LEFT, t.getDepth(ua.RIGHT)), e.setDepth(ua.RIGHT, t.getDepth(ua.LEFT))
				}, up.prototype.add = function(t, e) {
					t.setVisited(!0), this._nodes.add(t);
					for (var n = t.getEdges().iterator(); n.hasNext();) {
						var r = n.next();
						this._dirEdgeList.add(r);
						var i = r.getSym().getNode();
						i.isVisited() || e.push(i)
					}
				}, up.prototype.getNodes = function() {
					return this._nodes
				}, up.prototype.getDirectedEdges = function() {
					return this._dirEdgeList
				}, up.prototype.interfaces_ = function() {
					return [sb]
				}, up.prototype.getClass = function() {
					return up
				};
				var uf = function t() {
					if (this.location = null, 1 == arguments.length) {
						if (arguments[0] instanceof Array) {
							var e = arguments[0];
							this.init(e.length)
						} else if (Number.isInteger(arguments[0])) {
							var n = arguments[0];
							this.init(1), this.location[ua.ON] = n
						} else if (arguments[0] instanceof t) {
							var r = arguments[0];
							if (this.init(r.location.length), null !== r)
								for (var i = 0; i < this.location.length; i++) this.location[i] = r.location[i]
						}
					} else if (3 == arguments.length) {
						var o = arguments[0],
							s = arguments[1],
							a = arguments[2];
						this.init(3), this.location[ua.ON] = o, this.location[ua.LEFT] = s, this.location[ua.RIGHT] = a
					}
				};
				uf.prototype.setAllLocations = function(t) {
					for (var e = 0; e < this.location.length; e++) this.location[e] = t
				}, uf.prototype.isNull = function() {
					for (var t = 0; t < this.location.length; t++)
						if (this.location[t] !== sL.NONE) return !1;
					return !0
				}, uf.prototype.setAllLocationsIfNull = function(t) {
					for (var e = 0; e < this.location.length; e++) this.location[e] === sL.NONE && (this.location[e] = t)
				}, uf.prototype.isLine = function() {
					return 1 === this.location.length
				}, uf.prototype.merge = function(t) {
					if (t.location.length > this.location.length) {
						var e = [, , , ].fill(null);
						e[ua.ON] = this.location[ua.ON], e[ua.LEFT] = sL.NONE, e[ua.RIGHT] = sL.NONE, this.location = e
					}
					for (var n = 0; n < this.location.length; n++) this.location[n] === sL.NONE && n < t.location.length && (this.location[n] = t.location[n])
				}, uf.prototype.getLocations = function() {
					return this.location
				}, uf.prototype.flip = function() {
					if (this.location.length <= 1) return null;
					var t = this.location[ua.LEFT];
					this.location[ua.LEFT] = this.location[ua.RIGHT], this.location[ua.RIGHT] = t
				}, uf.prototype.toString = function() {
					var t = new sD;
					return this.location.length > 1 && t.append(sL.toLocationSymbol(this.location[ua.LEFT])), t.append(sL.toLocationSymbol(this.location[ua.ON])), this.location.length > 1 && t.append(sL.toLocationSymbol(this.location[ua.RIGHT])), t.toString()
				}, uf.prototype.setLocations = function(t, e, n) {
					this.location[ua.ON] = t, this.location[ua.LEFT] = e, this.location[ua.RIGHT] = n
				}, uf.prototype.get = function(t) {
					return t < this.location.length ? this.location[t] : sL.NONE
				}, uf.prototype.isArea = function() {
					return this.location.length > 1
				}, uf.prototype.isAnyNull = function() {
					for (var t = 0; t < this.location.length; t++)
						if (this.location[t] === sL.NONE) return !0;
					return !1
				}, uf.prototype.setLocation = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						this.setLocation(ua.ON, t)
					} else if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						this.location[e] = n
					}
				}, uf.prototype.init = function(t) {
					this.location = Array(t).fill(null), this.setAllLocations(sL.NONE)
				}, uf.prototype.isEqualOnSide = function(t, e) {
					return this.location[e] === t.location[e]
				}, uf.prototype.allPositionsEqual = function(t) {
					for (var e = 0; e < this.location.length; e++)
						if (this.location[e] !== t) return !1;
					return !0
				}, uf.prototype.interfaces_ = function() {
					return []
				}, uf.prototype.getClass = function() {
					return uf
				};
				var ug = function t() {
					if (this.elt = [, , ].fill(null), 1 == arguments.length) {
						if (Number.isInteger(arguments[0])) {
							var e = arguments[0];
							this.elt[0] = new uf(e), this.elt[1] = new uf(e)
						} else if (arguments[0] instanceof t) {
							var n = arguments[0];
							this.elt[0] = new uf(n.elt[0]), this.elt[1] = new uf(n.elt[1])
						}
					} else if (2 == arguments.length) {
						var r = arguments[0],
							i = arguments[1];
						this.elt[0] = new uf(sL.NONE), this.elt[1] = new uf(sL.NONE), this.elt[r].setLocation(i)
					} else if (3 == arguments.length) {
						var o = arguments[0],
							s = arguments[1],
							a = arguments[2];
						this.elt[0] = new uf(o, s, a), this.elt[1] = new uf(o, s, a)
					} else if (4 == arguments.length) {
						var u = arguments[0],
							h = arguments[1],
							c = arguments[2],
							l = arguments[3];
						this.elt[0] = new uf(sL.NONE, sL.NONE, sL.NONE), this.elt[1] = new uf(sL.NONE, sL.NONE, sL.NONE), this.elt[u].setLocations(h, c, l)
					}
				};
				ug.prototype.getGeometryCount = function() {
					var t = 0;
					return this.elt[0].isNull() || t++, this.elt[1].isNull() || t++, t
				}, ug.prototype.setAllLocations = function(t, e) {
					this.elt[t].setAllLocations(e)
				}, ug.prototype.isNull = function(t) {
					return this.elt[t].isNull()
				}, ug.prototype.setAllLocationsIfNull = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						this.setAllLocationsIfNull(0, t), this.setAllLocationsIfNull(1, t)
					} else if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						this.elt[e].setAllLocationsIfNull(n)
					}
				}, ug.prototype.isLine = function(t) {
					return this.elt[t].isLine()
				}, ug.prototype.merge = function(t) {
					for (var e = 0; e < 2; e++) null === this.elt[e] && null !== t.elt[e] ? this.elt[e] = new uf(t.elt[e]) : this.elt[e].merge(t.elt[e])
				}, ug.prototype.flip = function() {
					this.elt[0].flip(), this.elt[1].flip()
				}, ug.prototype.getLocation = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						return this.elt[t].get(ua.ON)
					}
					if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						return this.elt[e].get(n)
					}
				}, ug.prototype.toString = function() {
					var t = new sD;
					return null !== this.elt[0] && (t.append("A:"), t.append(this.elt[0].toString())), null !== this.elt[1] && (t.append(" B:"), t.append(this.elt[1].toString())), t.toString()
				}, ug.prototype.isArea = function() {
					if (0 == arguments.length) return this.elt[0].isArea() || this.elt[1].isArea();
					if (1 == arguments.length) {
						var t = arguments[0];
						return this.elt[t].isArea()
					}
				}, ug.prototype.isAnyNull = function(t) {
					return this.elt[t].isAnyNull()
				}, ug.prototype.setLocation = function() {
					if (2 == arguments.length) {
						var t = arguments[0],
							e = arguments[1];
						this.elt[t].setLocation(ua.ON, e)
					} else if (3 == arguments.length) {
						var n = arguments[0],
							r = arguments[1],
							i = arguments[2];
						this.elt[n].setLocation(r, i)
					}
				}, ug.prototype.isEqualOnSide = function(t, e) {
					return this.elt[0].isEqualOnSide(t.elt[0], e) && this.elt[1].isEqualOnSide(t.elt[1], e)
				}, ug.prototype.allPositionsEqual = function(t, e) {
					return this.elt[t].allPositionsEqual(e)
				}, ug.prototype.toLine = function(t) {
					this.elt[t].isArea() && (this.elt[t] = new uf(this.elt[t].location[0]))
				}, ug.prototype.interfaces_ = function() {
					return []
				}, ug.prototype.getClass = function() {
					return ug
				}, ug.toLineLabel = function(t) {
					for (var e = new ug(sL.NONE), n = 0; n < 2; n++) e.setLocation(n, t.getLocation(n));
					return e
				};
				var ud = function() {
					this._startDe = null, this._maxNodeDegree = -1, this._edges = new ad, this._pts = new ad, this._label = new ug(sL.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new ad, this._geometryFactory = null;
					var t = arguments[0],
						e = arguments[1];
					this._geometryFactory = e, this.computePoints(t), this.computeRing()
				};
				ud.prototype.computeRing = function() {
					if (null !== this._ring) return null;
					for (var t = Array(this._pts.size()).fill(null), e = 0; e < this._pts.size(); e++) t[e] = this._pts.get(e);
					this._ring = this._geometryFactory.createLinearRing(t), this._isHole = s9.isCCW(this._ring.getCoordinates())
				}, ud.prototype.isIsolated = function() {
					return 1 === this._label.getGeometryCount()
				}, ud.prototype.computePoints = function(t) {
					this._startDe = t;
					var e = t,
						n = !0;
					do {
						if (null === e) throw new uc("Found null DirectedEdge");
						if (e.getEdgeRing() === this) throw new uc("Directed Edge visited twice during ring-building at " + e.getCoordinate());
						this._edges.add(e);
						var r = e.getLabel();
						s2.isTrue(r.isArea()), this.mergeLabel(r), this.addPoints(e.getEdge(), e.isForward(), n), n = !1, this.setEdgeRing(e, this), e = this.getNext(e)
					} while (e !== this._startDe)
				}, ud.prototype.getLinearRing = function() {
					return this._ring
				}, ud.prototype.getCoordinate = function(t) {
					return this._pts.get(t)
				}, ud.prototype.computeMaxNodeDegree = function() {
					this._maxNodeDegree = 0;
					var t = this._startDe;
					do {
						var e = t.getNode().getEdges().getOutgoingDegree(this);
						e > this._maxNodeDegree && (this._maxNodeDegree = e), t = this.getNext(t)
					} while (t !== this._startDe);
					this._maxNodeDegree *= 2
				}, ud.prototype.addPoints = function(t, e, n) {
					var r = t.getCoordinates();
					if (e) {
						var i = 1;
						n && (i = 0);
						for (var o = i; o < r.length; o++) this._pts.add(r[o])
					} else {
						var s = r.length - 2;
						n && (s = r.length - 1);
						for (var a = s; a >= 0; a--) this._pts.add(r[a])
					}
				}, ud.prototype.isHole = function() {
					return this._isHole
				}, ud.prototype.setInResult = function() {
					var t = this._startDe;
					do t.getEdge().setInResult(!0), t = t.getNext(); while (t !== this._startDe)
				}, ud.prototype.containsPoint = function(t) {
					var e = this.getLinearRing();
					if (!e.getEnvelopeInternal().contains(t) || !s9.isPointInRing(t, e.getCoordinates())) return !1;
					for (var n = this._holes.iterator(); n.hasNext();)
						if (n.next().containsPoint(t)) return !1;
					return !0
				}, ud.prototype.addHole = function(t) {
					this._holes.add(t)
				}, ud.prototype.isShell = function() {
					return null === this._shell
				}, ud.prototype.getLabel = function() {
					return this._label
				}, ud.prototype.getEdges = function() {
					return this._edges
				}, ud.prototype.getMaxNodeDegree = function() {
					return this._maxNodeDegree < 0 && this.computeMaxNodeDegree(), this._maxNodeDegree
				}, ud.prototype.getShell = function() {
					return this._shell
				}, ud.prototype.mergeLabel = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						this.mergeLabel(t, 0), this.mergeLabel(t, 1)
					} else if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1],
							r = e.getLocation(n, ua.RIGHT);
						if (r === sL.NONE) return null;
						if (this._label.getLocation(n) === sL.NONE) return this._label.setLocation(n, r), null
					}
				}, ud.prototype.setShell = function(t) {
					this._shell = t, null !== t && t.addHole(this)
				}, ud.prototype.toPolygon = function(t) {
					for (var e = Array(this._holes.size()).fill(null), n = 0; n < this._holes.size(); n++) e[n] = this._holes.get(n).getLinearRing();
					return t.createPolygon(this.getLinearRing(), e)
				}, ud.prototype.interfaces_ = function() {
					return []
				}, ud.prototype.getClass = function() {
					return ud
				};
				var uy = function(t) {
						function e() {
							var e = arguments[0],
								n = arguments[1];
							t.call(this, e, n)
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.setEdgeRing = function(t, e) {
							t.setMinEdgeRing(e)
						}, e.prototype.getNext = function(t) {
							return t.getNextMin()
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, e
					}(ud),
					u_ = function(t) {
						function e() {
							var e = arguments[0],
								n = arguments[1];
							t.call(this, e, n)
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.buildMinimalRings = function() {
							var t = new ad,
								e = this._startDe;
							do {
								if (null === e.getMinEdgeRing()) {
									var n = new uy(e, this._geometryFactory);
									t.add(n)
								}
								e = e.getNext()
							} while (e !== this._startDe);
							return t
						}, e.prototype.setEdgeRing = function(t, e) {
							t.setEdgeRing(e)
						}, e.prototype.linkDirectedEdgesForMinimalEdgeRings = function() {
							var t = this._startDe;
							do t.getNode().getEdges().linkMinimalDirectedEdges(this), t = t.getNext(); while (t !== this._startDe)
						}, e.prototype.getNext = function(t) {
							return t.getNext()
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, e
					}(ud),
					um = function() {
						if (this._label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, 0 == arguments.length);
						else if (1 == arguments.length) {
							var t = arguments[0];
							this._label = t
						}
					};
				um.prototype.setVisited = function(t) {
					this._isVisited = t
				}, um.prototype.setInResult = function(t) {
					this._isInResult = t
				}, um.prototype.isCovered = function() {
					return this._isCovered
				}, um.prototype.isCoveredSet = function() {
					return this._isCoveredSet
				}, um.prototype.setLabel = function(t) {
					this._label = t
				}, um.prototype.getLabel = function() {
					return this._label
				}, um.prototype.setCovered = function(t) {
					this._isCovered = t, this._isCoveredSet = !0
				}, um.prototype.updateIM = function(t) {
					s2.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(t)
				}, um.prototype.isInResult = function() {
					return this._isInResult
				}, um.prototype.isVisited = function() {
					return this._isVisited
				}, um.prototype.interfaces_ = function() {
					return []
				}, um.prototype.getClass = function() {
					return um
				};
				var uv = function(t) {
						function e() {
							t.call(this), this._coord = null, this._edges = null;
							var e = arguments[0],
								n = arguments[1];
							this._coord = e, this._edges = n, this._label = new ug(0, sL.NONE)
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.isIncidentEdgeInResult = function() {
							for (var t = this.getEdges().getEdges().iterator(); t.hasNext();)
								if (t.next().getEdge().isInResult()) return !0;
							return !1
						}, e.prototype.isIsolated = function() {
							return 1 === this._label.getGeometryCount()
						}, e.prototype.getCoordinate = function() {
							return this._coord
						}, e.prototype.print = function(t) {
							t.println("node " + this._coord + " lbl: " + this._label)
						}, e.prototype.computeIM = function(t) {}, e.prototype.computeMergedLocation = function(t, e) {
							var n = sL.NONE;
							if (n = this._label.getLocation(e), !t.isNull(e)) {
								var r = t.getLocation(e);
								n !== sL.BOUNDARY && (n = r)
							}
							return n
						}, e.prototype.setLabel = function() {
							if (2 != arguments.length) return t.prototype.setLabel.apply(this, arguments);
							var e = arguments[0],
								n = arguments[1];
							null === this._label ? this._label = new ug(e, n) : this._label.setLocation(e, n)
						}, e.prototype.getEdges = function() {
							return this._edges
						}, e.prototype.mergeLabel = function() {
							if (arguments[0] instanceof e) {
								var t = arguments[0];
								this.mergeLabel(t._label)
							} else if (arguments[0] instanceof ug)
								for (var n = arguments[0], r = 0; r < 2; r++) {
									var i = this.computeMergedLocation(n, r);
									this._label.getLocation(r) === sL.NONE && this._label.setLocation(r, i)
								}
						}, e.prototype.add = function(t) {
							this._edges.insert(t), t.setNode(this)
						}, e.prototype.setLabelBoundary = function(t) {
							if (null === this._label) return null;
							var e = sL.NONE;
							null !== this._label && (e = this._label.getLocation(t));
							var n = null;
							switch (e) {
								case sL.BOUNDARY:
									n = sL.INTERIOR;
									break;
								case sL.INTERIOR:
								default:
									n = sL.BOUNDARY
							}
							this._label.setLocation(t, n)
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, e
					}(um),
					ux = function() {
						this.nodeMap = new rP, this.nodeFact = null;
						var t = arguments[0];
						this.nodeFact = t
					};
				ux.prototype.find = function(t) {
					return this.nodeMap.get(t)
				}, ux.prototype.addNode = function() {
					if (arguments[0] instanceof sw) {
						var t = arguments[0],
							e = this.nodeMap.get(t);
						return null === e && (e = this.nodeFact.createNode(t), this.nodeMap.put(t, e)), e
					}
					if (arguments[0] instanceof uv) {
						var n = arguments[0],
							r = this.nodeMap.get(n.getCoordinate());
						return null === r ? (this.nodeMap.put(n.getCoordinate(), n), n) : (r.mergeLabel(n), r)
					}
				}, ux.prototype.print = function(t) {
					for (var e = this.iterator(); e.hasNext();) e.next().print(t)
				}, ux.prototype.iterator = function() {
					return this.nodeMap.values().iterator()
				}, ux.prototype.values = function() {
					return this.nodeMap.values()
				}, ux.prototype.getBoundaryNodes = function(t) {
					for (var e = new ad, n = this.iterator(); n.hasNext();) {
						var r = n.next();
						r.getLabel().getLocation(t) === sL.BOUNDARY && e.add(r)
					}
					return e
				}, ux.prototype.add = function(t) {
					var e = t.getCoordinate();
					this.addNode(e).add(t)
				}, ux.prototype.interfaces_ = function() {
					return []
				}, ux.prototype.getClass = function() {
					return ux
				};
				var uE = function() {},
					ub = {
						NE: {
							configurable: !0
						},
						NW: {
							configurable: !0
						},
						SW: {
							configurable: !0
						},
						SE: {
							configurable: !0
						}
					};
				uE.prototype.interfaces_ = function() {
					return []
				}, uE.prototype.getClass = function() {
					return uE
				}, uE.isNorthern = function(t) {
					return t === uE.NE || t === uE.NW
				}, uE.isOpposite = function(t, e) {
					return t !== e && 2 == (t - e + 4) % 4
				}, uE.commonHalfPlane = function(t, e) {
					if (t === e) return t;
					if (2 == (t - e + 4) % 4) return -1;
					var n = t < e ? t : e;
					return 0 === n && 3 === (t > e ? t : e) ? 3 : n
				}, uE.isInHalfPlane = function(t, e) {
					return e === uE.SE ? t === uE.SE || t === uE.SW : t === e || t === e + 1
				}, uE.quadrant = function() {
					if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
						var t = arguments[0],
							e = arguments[1];
						if (0 === t && 0 === e) throw new sv("Cannot compute the quadrant for point ( " + t + ", " + e + " )");
						return t >= 0 ? e >= 0 ? uE.NE : uE.SE : e >= 0 ? uE.NW : uE.SW
					}
					if (arguments[0] instanceof sw && arguments[1] instanceof sw) {
						var n = arguments[0],
							r = arguments[1];
						if (r.x === n.x && r.y === n.y) throw new sv("Cannot compute the quadrant for two identical points " + n);
						return r.x >= n.x ? r.y >= n.y ? uE.NE : uE.SE : r.y >= n.y ? uE.NW : uE.SW
					}
				}, ub.NE.get = function() {
					return 0
				}, ub.NW.get = function() {
					return 1
				}, ub.SW.get = function() {
					return 2
				}, ub.SE.get = function() {
					return 3
				}, Object.defineProperties(uE, ub);
				var uI = function() {
					if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, 1 == arguments.length) {
						var t = arguments[0];
						this._edge = t
					} else if (3 == arguments.length) {
						var e = arguments[0],
							n = arguments[1],
							r = arguments[2];
						this._edge = e, this.init(n, r), this._label = null
					} else if (4 == arguments.length) {
						var i = arguments[0],
							o = arguments[1],
							s = arguments[2],
							a = arguments[3];
						this._edge = i, this.init(o, s), this._label = a
					}
				};
				uI.prototype.compareDirection = function(t) {
					return this._dx === t._dx && this._dy === t._dy ? 0 : this._quadrant > t._quadrant ? 1 : this._quadrant < t._quadrant ? -1 : s9.computeOrientation(t._p0, t._p1, this._p1)
				}, uI.prototype.getDy = function() {
					return this._dy
				}, uI.prototype.getCoordinate = function() {
					return this._p0
				}, uI.prototype.setNode = function(t) {
					this._node = t
				}, uI.prototype.print = function(t) {
					var e = Math.atan2(this._dy, this._dx),
						n = this.getClass().getName(),
						r = n.lastIndexOf("."),
						i = n.substring(r + 1);
					t.print("  " + i + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + e + "   " + this._label)
				}, uI.prototype.compareTo = function(t) {
					return this.compareDirection(t)
				}, uI.prototype.getDirectedCoordinate = function() {
					return this._p1
				}, uI.prototype.getDx = function() {
					return this._dx
				}, uI.prototype.getLabel = function() {
					return this._label
				}, uI.prototype.getEdge = function() {
					return this._edge
				}, uI.prototype.getQuadrant = function() {
					return this._quadrant
				}, uI.prototype.getNode = function() {
					return this._node
				}, uI.prototype.toString = function() {
					var t = Math.atan2(this._dy, this._dx),
						e = this.getClass().getName(),
						n = e.lastIndexOf(".");
					return "  " + e.substring(n + 1) + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + t + "   " + this._label
				}, uI.prototype.computeLabel = function(t) {}, uI.prototype.init = function(t, e) {
					this._p0 = t, this._p1 = e, this._dx = e.x - t.x, this._dy = e.y - t.y, this._quadrant = uE.quadrant(this._dx, this._dy), s2.isTrue(!(0 === this._dx && 0 === this._dy), "EdgeEnd with identical endpoints found")
				}, uI.prototype.interfaces_ = function() {
					return [sb]
				}, uI.prototype.getClass = function() {
					return uI
				};
				var uN = function(t) {
						function e() {
							var e = arguments[0],
								n = arguments[1];
							if (t.call(this, e), this._isForward = null, this._isInResult = !1, this._isVisited = !1, this._sym = null, this._next = null, this._nextMin = null, this._edgeRing = null, this._minEdgeRing = null, this._depth = [0, -999, -999], this._isForward = n, n) this.init(e.getCoordinate(0), e.getCoordinate(1));
							else {
								var r = e.getNumPoints() - 1;
								this.init(e.getCoordinate(r), e.getCoordinate(r - 1))
							}
							this.computeDirectedLabel()
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getNextMin = function() {
							return this._nextMin
						}, e.prototype.getDepth = function(t) {
							return this._depth[t]
						}, e.prototype.setVisited = function(t) {
							this._isVisited = t
						}, e.prototype.computeDirectedLabel = function() {
							this._label = new ug(this._edge.getLabel()), this._isForward || this._label.flip()
						}, e.prototype.getNext = function() {
							return this._next
						}, e.prototype.setDepth = function(t, e) {
							if (-999 !== this._depth[t] && this._depth[t] !== e) throw new uc("assigned depths do not match", this.getCoordinate());
							this._depth[t] = e
						}, e.prototype.isInteriorAreaEdge = function() {
							for (var t = !0, e = 0; e < 2; e++) this._label.isArea(e) && this._label.getLocation(e, ua.LEFT) === sL.INTERIOR && this._label.getLocation(e, ua.RIGHT) === sL.INTERIOR || (t = !1);
							return t
						}, e.prototype.setNextMin = function(t) {
							this._nextMin = t
						}, e.prototype.print = function(e) {
							t.prototype.print.call(this, e), e.print(" " + this._depth[ua.LEFT] + "/" + this._depth[ua.RIGHT]), e.print(" (" + this.getDepthDelta() + ")"), this._isInResult && e.print(" inResult")
						}, e.prototype.setMinEdgeRing = function(t) {
							this._minEdgeRing = t
						}, e.prototype.isLineEdge = function() {
							var t = this._label.isLine(0) || this._label.isLine(1),
								e = !this._label.isArea(0) || this._label.allPositionsEqual(0, sL.EXTERIOR),
								n = !this._label.isArea(1) || this._label.allPositionsEqual(1, sL.EXTERIOR);
							return t && e && n
						}, e.prototype.setEdgeRing = function(t) {
							this._edgeRing = t
						}, e.prototype.getMinEdgeRing = function() {
							return this._minEdgeRing
						}, e.prototype.getDepthDelta = function() {
							var t = this._edge.getDepthDelta();
							return this._isForward || (t = -t), t
						}, e.prototype.setInResult = function(t) {
							this._isInResult = t
						}, e.prototype.getSym = function() {
							return this._sym
						}, e.prototype.isForward = function() {
							return this._isForward
						}, e.prototype.getEdge = function() {
							return this._edge
						}, e.prototype.printEdge = function(t) {
							this.print(t), t.print(" "), this._isForward ? this._edge.print(t) : this._edge.printReverse(t)
						}, e.prototype.setSym = function(t) {
							this._sym = t
						}, e.prototype.setVisitedEdge = function(t) {
							this.setVisited(t), this._sym.setVisited(t)
						}, e.prototype.setEdgeDepths = function(t, e) {
							var n = this.getEdge().getDepthDelta();
							this._isForward || (n = -n);
							var r = 1;
							t === ua.LEFT && (r = -1);
							var i = ua.opposite(t),
								o = e + n * r;
							this.setDepth(t, e), this.setDepth(i, o)
						}, e.prototype.getEdgeRing = function() {
							return this._edgeRing
						}, e.prototype.isInResult = function() {
							return this._isInResult
						}, e.prototype.setNext = function(t) {
							this._next = t
						}, e.prototype.isVisited = function() {
							return this._isVisited
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, e.depthFactor = function(t, e) {
							return t === sL.EXTERIOR && e === sL.INTERIOR ? 1 : t === sL.INTERIOR && e === sL.EXTERIOR ? -1 : 0
						}, e
					}(uI),
					uw = function() {};
				uw.prototype.createNode = function(t) {
					return new uv(t, null)
				}, uw.prototype.interfaces_ = function() {
					return []
				}, uw.prototype.getClass = function() {
					return uw
				};
				var uC = function() {
					if (this._edges = new ad, this._nodes = null, this._edgeEndList = new ad, 0 == arguments.length) this._nodes = new ux(new uw);
					else if (1 == arguments.length) {
						var t = arguments[0];
						this._nodes = new ux(t)
					}
				};
				uC.prototype.printEdges = function(t) {
					t.println("Edges:");
					for (var e = 0; e < this._edges.size(); e++) {
						t.println("edge " + e + ":");
						var n = this._edges.get(e);
						n.print(t), n.eiList.print(t)
					}
				}, uC.prototype.find = function(t) {
					return this._nodes.find(t)
				}, uC.prototype.addNode = function() {
					if (arguments[0] instanceof uv) {
						var t = arguments[0];
						return this._nodes.addNode(t)
					}
					if (arguments[0] instanceof sw) {
						var e = arguments[0];
						return this._nodes.addNode(e)
					}
				}, uC.prototype.getNodeIterator = function() {
					return this._nodes.iterator()
				}, uC.prototype.linkResultDirectedEdges = function() {
					for (var t = this._nodes.iterator(); t.hasNext();) t.next().getEdges().linkResultDirectedEdges()
				}, uC.prototype.debugPrintln = function(t) {
					sY.out.println(t)
				}, uC.prototype.isBoundaryNode = function(t, e) {
					var n = this._nodes.find(e);
					if (null === n) return !1;
					var r = n.getLabel();
					return null !== r && r.getLocation(t) === sL.BOUNDARY
				}, uC.prototype.linkAllDirectedEdges = function() {
					for (var t = this._nodes.iterator(); t.hasNext();) t.next().getEdges().linkAllDirectedEdges()
				}, uC.prototype.matchInSameDirection = function(t, e, n, r) {
					return !!t.equals(n) && s9.computeOrientation(t, e, r) === s9.COLLINEAR && uE.quadrant(t, e) === uE.quadrant(n, r)
				}, uC.prototype.getEdgeEnds = function() {
					return this._edgeEndList
				}, uC.prototype.debugPrint = function(t) {
					sY.out.print(t)
				}, uC.prototype.getEdgeIterator = function() {
					return this._edges.iterator()
				}, uC.prototype.findEdgeInSameDirection = function(t, e) {
					for (var n = 0; n < this._edges.size(); n++) {
						var r = this._edges.get(n),
							i = r.getCoordinates();
						if (this.matchInSameDirection(t, e, i[0], i[1]) || this.matchInSameDirection(t, e, i[i.length - 1], i[i.length - 2])) return r
					}
					return null
				}, uC.prototype.insertEdge = function(t) {
					this._edges.add(t)
				}, uC.prototype.findEdgeEnd = function(t) {
					for (var e = this.getEdgeEnds().iterator(); e.hasNext();) {
						var n = e.next();
						if (n.getEdge() === t) return n
					}
					return null
				}, uC.prototype.addEdges = function(t) {
					for (var e = t.iterator(); e.hasNext();) {
						var n = e.next();
						this._edges.add(n);
						var r = new uN(n, !0),
							i = new uN(n, !1);
						r.setSym(i), i.setSym(r), this.add(r), this.add(i)
					}
				}, uC.prototype.add = function(t) {
					this._nodes.add(t), this._edgeEndList.add(t)
				}, uC.prototype.getNodes = function() {
					return this._nodes.values()
				}, uC.prototype.findEdge = function(t, e) {
					for (var n = 0; n < this._edges.size(); n++) {
						var r = this._edges.get(n),
							i = r.getCoordinates();
						if (t.equals(i[0]) && e.equals(i[1])) return r
					}
					return null
				}, uC.prototype.interfaces_ = function() {
					return []
				}, uC.prototype.getClass = function() {
					return uC
				}, uC.linkResultDirectedEdges = function(t) {
					for (var e = t.iterator(); e.hasNext();) e.next().getEdges().linkResultDirectedEdges()
				};
				var uS = function() {
					this._geometryFactory = null, this._shellList = new ad;
					var t = arguments[0];
					this._geometryFactory = t
				};
				uS.prototype.sortShellsAndHoles = function(t, e, n) {
					for (var r = t.iterator(); r.hasNext();) {
						var i = r.next();
						i.isHole() ? n.add(i) : e.add(i)
					}
				}, uS.prototype.computePolygons = function(t) {
					for (var e = new ad, n = t.iterator(); n.hasNext();) {
						var r = n.next().toPolygon(this._geometryFactory);
						e.add(r)
					}
					return e
				}, uS.prototype.placeFreeHoles = function(t, e) {
					for (var n = e.iterator(); n.hasNext();) {
						var r = n.next();
						if (null === r.getShell()) {
							var i = this.findEdgeRingContaining(r, t);
							if (null === i) throw new uc("unable to assign hole to a shell", r.getCoordinate(0));
							r.setShell(i)
						}
					}
				}, uS.prototype.buildMinimalEdgeRings = function(t, e, n) {
					for (var r = new ad, i = t.iterator(); i.hasNext();) {
						var o = i.next();
						if (o.getMaxNodeDegree() > 2) {
							o.linkDirectedEdgesForMinimalEdgeRings();
							var s = o.buildMinimalRings(),
								a = this.findShell(s);
							null !== a ? (this.placePolygonHoles(a, s), e.add(a)) : n.addAll(s)
						} else r.add(o)
					}
					return r
				}, uS.prototype.containsPoint = function(t) {
					for (var e = this._shellList.iterator(); e.hasNext();)
						if (e.next().containsPoint(t)) return !0;
					return !1
				}, uS.prototype.buildMaximalEdgeRings = function(t) {
					for (var e = new ad, n = t.iterator(); n.hasNext();) {
						var r = n.next();
						if (r.isInResult() && r.getLabel().isArea() && null === r.getEdgeRing()) {
							var i = new u_(r, this._geometryFactory);
							e.add(i), i.setInResult()
						}
					}
					return e
				}, uS.prototype.placePolygonHoles = function(t, e) {
					for (var n = e.iterator(); n.hasNext();) {
						var r = n.next();
						r.isHole() && r.setShell(t)
					}
				}, uS.prototype.getPolygons = function() {
					return this.computePolygons(this._shellList)
				}, uS.prototype.findEdgeRingContaining = function(t, e) {
					for (var n = t.getLinearRing(), r = n.getEnvelopeInternal(), i = n.getCoordinateN(0), o = null, s = null, a = e.iterator(); a.hasNext();) {
						var u = a.next(),
							h = u.getLinearRing(),
							c = h.getEnvelopeInternal();
						null !== o && (s = o.getLinearRing().getEnvelopeInternal());
						var l = !1;
						c.contains(r) && s9.isPointInRing(i, h.getCoordinates()) && (l = !0), l && (null === o || s.contains(c)) && (o = u)
					}
					return o
				}, uS.prototype.findShell = function(t) {
					for (var e = 0, n = null, r = t.iterator(); r.hasNext();) {
						var i = r.next();
						i.isHole() || (n = i, e++)
					}
					return s2.isTrue(e <= 1, "found two shells in MinimalEdgeRing list"), n
				}, uS.prototype.add = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						this.add(t.getEdgeEnds(), t.getNodes())
					} else if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						uC.linkResultDirectedEdges(n);
						var r = this.buildMaximalEdgeRings(e),
							i = new ad,
							o = this.buildMinimalEdgeRings(r, this._shellList, i);
						this.sortShellsAndHoles(o, this._shellList, i), this.placeFreeHoles(this._shellList, i)
					}
				}, uS.prototype.interfaces_ = function() {
					return []
				}, uS.prototype.getClass = function() {
					return uS
				};
				var uM = function() {};
				uM.prototype.getBounds = function() {}, uM.prototype.interfaces_ = function() {
					return []
				}, uM.prototype.getClass = function() {
					return uM
				};
				var uL = function() {
					this._bounds = null, this._item = null;
					var t = arguments[0],
						e = arguments[1];
					this._bounds = t, this._item = e
				};
				uL.prototype.getItem = function() {
					return this._item
				}, uL.prototype.getBounds = function() {
					return this._bounds
				}, uL.prototype.interfaces_ = function() {
					return [uM, rE]
				}, uL.prototype.getClass = function() {
					return uL
				};
				var uP = function() {
					this._size = null, this._items = null, this._size = 0, this._items = new ad, this._items.add(null)
				};
				uP.prototype.poll = function() {
					if (this.isEmpty()) return null;
					var t = this._items.get(1);
					return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), t
				}, uP.prototype.size = function() {
					return this._size
				}, uP.prototype.reorder = function(t) {
					for (var e = null, n = this._items.get(t); 2 * t <= this._size && ((e = 2 * t) !== this._size && 0 > this._items.get(e + 1).compareTo(this._items.get(e)) && e++, 0 > this._items.get(e).compareTo(n)); t = e) this._items.set(t, this._items.get(e));
					this._items.set(t, n)
				}, uP.prototype.clear = function() {
					this._size = 0, this._items.clear()
				}, uP.prototype.isEmpty = function() {
					return 0 === this._size
				}, uP.prototype.add = function(t) {
					this._items.add(null), this._size += 1;
					var e = this._size;
					for (this._items.set(0, t); 0 > t.compareTo(this._items.get(Math.trunc(e / 2))); e /= 2) this._items.set(e, this._items.get(Math.trunc(e / 2)));
					this._items.set(e, t)
				}, uP.prototype.interfaces_ = function() {
					return []
				}, uP.prototype.getClass = function() {
					return uP
				};
				var uO = function() {};
				uO.prototype.visitItem = function(t) {}, uO.prototype.interfaces_ = function() {
					return []
				}, uO.prototype.getClass = function() {
					return uO
				};
				var uR = function() {};
				uR.prototype.insert = function(t, e) {}, uR.prototype.remove = function(t, e) {}, uR.prototype.query = function() {}, uR.prototype.interfaces_ = function() {
					return []
				}, uR.prototype.getClass = function() {
					return uR
				};
				var uT = function() {
						if (this._childBoundables = new ad, this._bounds = null, this._level = null, 0 == arguments.length);
						else if (1 == arguments.length) {
							var t = arguments[0];
							this._level = t
						}
					},
					uD = {
						serialVersionUID: {
							configurable: !0
						}
					};
				uT.prototype.getLevel = function() {
					return this._level
				}, uT.prototype.size = function() {
					return this._childBoundables.size()
				}, uT.prototype.getChildBoundables = function() {
					return this._childBoundables
				}, uT.prototype.addChildBoundable = function(t) {
					s2.isTrue(null === this._bounds), this._childBoundables.add(t)
				}, uT.prototype.isEmpty = function() {
					return this._childBoundables.isEmpty()
				}, uT.prototype.getBounds = function() {
					return null === this._bounds && (this._bounds = this.computeBounds()), this._bounds
				}, uT.prototype.interfaces_ = function() {
					return [uM, rE]
				}, uT.prototype.getClass = function() {
					return uT
				}, uD.serialVersionUID.get = function() {
					return 0x5a1e55ec41369800
				}, Object.defineProperties(uT, uD);
				var uA = function() {};
				uA.reverseOrder = function() {
					return {
						compare: function(t, e) {
							return e.compareTo(t)
						}
					}
				}, uA.min = function(t) {
					return uA.sort(t), t.get(0)
				}, uA.sort = function(t, e) {
					var n = t.toArray();
					e ? aL.sort(n, e) : aL.sort(n);
					for (var r = t.iterator(), i = 0, o = n.length; i < o; i++) r.next(), r.set(n[i])
				}, uA.singletonList = function(t) {
					var e = new ad;
					return e.add(t), e
				};
				var uF = function() {
					this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
					var t = arguments[0],
						e = arguments[1],
						n = arguments[2];
					this._boundable1 = t, this._boundable2 = e, this._itemDistance = n, this._distance = this.distance()
				};
				uF.prototype.expandToQueue = function(t, e) {
					var n = uF.isComposite(this._boundable1),
						r = uF.isComposite(this._boundable2);
					if (n && r) return uF.area(this._boundable1) > uF.area(this._boundable2) ? this.expand(this._boundable1, this._boundable2, t, e) : this.expand(this._boundable2, this._boundable1, t, e), null;
					if (n) return this.expand(this._boundable1, this._boundable2, t, e), null;
					if (r) return this.expand(this._boundable2, this._boundable1, t, e), null;
					throw new sv("neither boundable is composite")
				}, uF.prototype.isLeaves = function() {
					return !(uF.isComposite(this._boundable1) || uF.isComposite(this._boundable2))
				}, uF.prototype.compareTo = function(t) {
					return this._distance < t._distance ? -1 : this._distance > t._distance ? 1 : 0
				}, uF.prototype.expand = function(t, e, n, r) {
					for (var i = t.getChildBoundables().iterator(); i.hasNext();) {
						var o = new uF(i.next(), e, this._itemDistance);
						o.getDistance() < r && n.add(o)
					}
				}, uF.prototype.getBoundable = function(t) {
					return 0 === t ? this._boundable1 : this._boundable2
				}, uF.prototype.getDistance = function() {
					return this._distance
				}, uF.prototype.distance = function() {
					return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds())
				}, uF.prototype.interfaces_ = function() {
					return [sb]
				}, uF.prototype.getClass = function() {
					return uF
				}, uF.area = function(t) {
					return t.getBounds().getArea()
				}, uF.isComposite = function(t) {
					return t instanceof uT
				};
				var uq = function t() {
						if (this._root = null, this._built = !1, this._itemBoundables = new ad, this._nodeCapacity = null, 0 == arguments.length) {
							var e = t.DEFAULT_NODE_CAPACITY;
							this._nodeCapacity = e
						} else if (1 == arguments.length) {
							var n = arguments[0];
							s2.isTrue(n > 1, "Node capacity must be greater than 1"), this._nodeCapacity = n
						}
					},
					uG = {
						IntersectsOp: {
							configurable: !0
						},
						serialVersionUID: {
							configurable: !0
						},
						DEFAULT_NODE_CAPACITY: {
							configurable: !0
						}
					};
				uq.prototype.getNodeCapacity = function() {
					return this._nodeCapacity
				}, uq.prototype.lastNode = function(t) {
					return t.get(t.size() - 1)
				}, uq.prototype.size = function() {
					if (0 == arguments.length) return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
					if (1 == arguments.length) {
						for (var t = 0, e = arguments[0].getChildBoundables().iterator(); e.hasNext();) {
							var n = e.next();
							n instanceof uT ? t += this.size(n) : n instanceof uL && (t += 1)
						}
						return t
					}
				}, uq.prototype.removeItem = function(t, e) {
					for (var n = null, r = t.getChildBoundables().iterator(); r.hasNext();) {
						var i = r.next();
						i instanceof uL && i.getItem() === e && (n = i)
					}
					return null !== n && (t.getChildBoundables().remove(n), !0)
				}, uq.prototype.itemsTree = function() {
					if (0 == arguments.length) {
						this.build();
						var t = this.itemsTree(this._root);
						return null === t ? new ad : t
					}
					if (1 == arguments.length) {
						for (var e = arguments[0], n = new ad, r = e.getChildBoundables().iterator(); r.hasNext();) {
							var i = r.next();
							if (i instanceof uT) {
								var o = this.itemsTree(i);
								null !== o && n.add(o)
							} else i instanceof uL ? n.add(i.getItem()) : s2.shouldNeverReachHere()
						}
						return 0 >= n.size() ? null : n
					}
				}, uq.prototype.insert = function(t, e) {
					s2.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new uL(t, e))
				}, uq.prototype.boundablesAtLevel = function() {
					if (1 == arguments.length) {
						var t = arguments[0],
							e = new ad;
						return this.boundablesAtLevel(t, this._root, e), e
					}
					if (3 == arguments.length) {
						var n = arguments[0],
							r = arguments[1],
							i = arguments[2];
						if (s2.isTrue(n > -2), r.getLevel() === n) return i.add(r), null;
						for (var o = r.getChildBoundables().iterator(); o.hasNext();) {
							var s = o.next();
							s instanceof uT ? this.boundablesAtLevel(n, s, i) : (s2.isTrue(s instanceof uL), -1 === n && i.add(s))
						}
						return null
					}
				}, uq.prototype.query = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						this.build();
						var e = new ad;
						return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), t) && this.query(t, this._root, e), e
					}
					if (2 == arguments.length) {
						var n = arguments[0],
							r = arguments[1];
						if (this.build(), this.isEmpty()) return null;
						this.getIntersectsOp().intersects(this._root.getBounds(), n) && this.query(n, this._root, r)
					} else if (3 == arguments.length) {
						if (sO(arguments[2], uO) && arguments[0] instanceof Object && arguments[1] instanceof uT)
							for (var i = arguments[0], o = arguments[1], s = arguments[2], a = o.getChildBoundables(), u = 0; u < a.size(); u++) {
								var h = a.get(u);
								this.getIntersectsOp().intersects(h.getBounds(), i) && (h instanceof uT ? this.query(i, h, s) : h instanceof uL ? s.visitItem(h.getItem()) : s2.shouldNeverReachHere())
							} else if (sO(arguments[2], ag) && arguments[0] instanceof Object && arguments[1] instanceof uT)
								for (var c = arguments[0], l = arguments[1], p = arguments[2], f = l.getChildBoundables(), g = 0; g < f.size(); g++) {
									var d = f.get(g);
									this.getIntersectsOp().intersects(d.getBounds(), c) && (d instanceof uT ? this.query(c, d, p) : d instanceof uL ? p.add(d.getItem()) : s2.shouldNeverReachHere())
								}
					}
				}, uq.prototype.build = function() {
					if (this._built) return null;
					this._root = this._itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this._itemBoundables, -1), this._itemBoundables = null, this._built = !0
				}, uq.prototype.getRoot = function() {
					return this.build(), this._root
				}, uq.prototype.remove = function() {
					if (2 == arguments.length) {
						var t = arguments[0],
							e = arguments[1];
						return this.build(), !!this.getIntersectsOp().intersects(this._root.getBounds(), t) && this.remove(t, this._root, e)
					}
					if (3 == arguments.length) {
						var n = arguments[0],
							r = arguments[1],
							i = arguments[2],
							o = this.removeItem(r, i);
						if (o) return !0;
						for (var s = null, a = r.getChildBoundables().iterator(); a.hasNext();) {
							var u = a.next();
							if (this.getIntersectsOp().intersects(u.getBounds(), n) && u instanceof uT && (o = this.remove(n, u, i))) {
								s = u;
								break
							}
						}
						return null !== s && s.getChildBoundables().isEmpty() && r.getChildBoundables().remove(s), o
					}
				}, uq.prototype.createHigherLevels = function(t, e) {
					s2.isTrue(!t.isEmpty());
					var n = this.createParentBoundables(t, e + 1);
					return 1 === n.size() ? n.get(0) : this.createHigherLevels(n, e + 1)
				}, uq.prototype.depth = function() {
					if (0 == arguments.length) return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
					if (1 == arguments.length) {
						for (var t = 0, e = arguments[0].getChildBoundables().iterator(); e.hasNext();) {
							var n = e.next();
							if (n instanceof uT) {
								var r = this.depth(n);
								r > t && (t = r)
							}
						}
						return t + 1
					}
				}, uq.prototype.createParentBoundables = function(t, e) {
					s2.isTrue(!t.isEmpty());
					var n = new ad;
					n.add(this.createNode(e));
					var r = new ad(t);
					uA.sort(r, this.getComparator());
					for (var i = r.iterator(); i.hasNext();) {
						var o = i.next();
						this.lastNode(n).getChildBoundables().size() === this.getNodeCapacity() && n.add(this.createNode(e)), this.lastNode(n).addChildBoundable(o)
					}
					return n
				}, uq.prototype.isEmpty = function() {
					return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty()
				}, uq.prototype.interfaces_ = function() {
					return [rE]
				}, uq.prototype.getClass = function() {
					return uq
				}, uq.compareDoubles = function(t, e) {
					return t > e ? 1 : t < e ? -1 : 0
				}, uG.IntersectsOp.get = function() {
					return uB
				}, uG.serialVersionUID.get = function() {
					return -0xca109b37d2b3ac00
				}, uG.DEFAULT_NODE_CAPACITY.get = function() {
					return 10
				}, Object.defineProperties(uq, uG);
				var uB = function() {},
					uk = function() {};
				uk.prototype.distance = function(t, e) {}, uk.prototype.interfaces_ = function() {
					return []
				}, uk.prototype.getClass = function() {
					return uk
				};
				var uz = function(t) {
						function e(n) {
							n = n || e.DEFAULT_NODE_CAPACITY, t.call(this, n)
						}
						t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
						var n = {
							STRtreeNode: {
								configurable: !0
							},
							serialVersionUID: {
								configurable: !0
							},
							xComparator: {
								configurable: !0
							},
							yComparator: {
								configurable: !0
							},
							intersectsOp: {
								configurable: !0
							},
							DEFAULT_NODE_CAPACITY: {
								configurable: !0
							}
						};
						return e.prototype.createParentBoundablesFromVerticalSlices = function(t, e) {
							s2.isTrue(t.length > 0);
							for (var n = new ad, r = 0; r < t.length; r++) n.addAll(this.createParentBoundablesFromVerticalSlice(t[r], e));
							return n
						}, e.prototype.createNode = function(t) {
							return new uj(t)
						}, e.prototype.size = function() {
							return 0 == arguments.length ? t.prototype.size.call(this) : t.prototype.size.apply(this, arguments)
						}, e.prototype.insert = function() {
							if (2 != arguments.length) return t.prototype.insert.apply(this, arguments);
							var e = arguments[0],
								n = arguments[1];
							if (e.isNull()) return null;
							t.prototype.insert.call(this, e, n)
						}, e.prototype.getIntersectsOp = function() {
							return e.intersectsOp
						}, e.prototype.verticalSlices = function(t, e) {
							for (var n = Math.trunc(Math.ceil(t.size() / e)), r = Array(e).fill(null), i = t.iterator(), o = 0; o < e; o++) {
								r[o] = new ad;
								for (var s = 0; i.hasNext() && s < n;) {
									var a = i.next();
									r[o].add(a), s++
								}
							}
							return r
						}, e.prototype.query = function() {
							if (1 == arguments.length) {
								var e = arguments[0];
								return t.prototype.query.call(this, e)
							}
							if (2 == arguments.length) {
								var n = arguments[0],
									r = arguments[1];
								t.prototype.query.call(this, n, r)
							} else if (3 == arguments.length) {
								if (sO(arguments[2], uO) && arguments[0] instanceof Object && arguments[1] instanceof uT) {
									var i = arguments[0],
										o = arguments[1],
										s = arguments[2];
									t.prototype.query.call(this, i, o, s)
								} else if (sO(arguments[2], ag) && arguments[0] instanceof Object && arguments[1] instanceof uT) {
									var a = arguments[0],
										u = arguments[1],
										h = arguments[2];
									t.prototype.query.call(this, a, u, h)
								}
							}
						}, e.prototype.getComparator = function() {
							return e.yComparator
						}, e.prototype.createParentBoundablesFromVerticalSlice = function(e, n) {
							return t.prototype.createParentBoundables.call(this, e, n)
						}, e.prototype.remove = function() {
							if (2 == arguments.length) {
								var e = arguments[0],
									n = arguments[1];
								return t.prototype.remove.call(this, e, n)
							}
							return t.prototype.remove.apply(this, arguments)
						}, e.prototype.depth = function() {
							return 0 == arguments.length ? t.prototype.depth.call(this) : t.prototype.depth.apply(this, arguments)
						}, e.prototype.createParentBoundables = function(t, n) {
							s2.isTrue(!t.isEmpty());
							var r = Math.trunc(Math.ceil(t.size() / this.getNodeCapacity())),
								i = new ad(t);
							uA.sort(i, e.xComparator);
							var o = this.verticalSlices(i, Math.trunc(Math.ceil(Math.sqrt(r))));
							return this.createParentBoundablesFromVerticalSlices(o, n)
						}, e.prototype.nearestNeighbour = function() {
							if (1 == arguments.length) {
								if (sO(arguments[0], uk)) {
									var t = arguments[0],
										n = new uF(this.getRoot(), this.getRoot(), t);
									return this.nearestNeighbour(n)
								}
								if (arguments[0] instanceof uF) {
									var r = arguments[0];
									return this.nearestNeighbour(r, sx.POSITIVE_INFINITY)
								}
							} else if (2 == arguments.length) {
								if (arguments[0] instanceof e && sO(arguments[1], uk)) {
									var i = arguments[0],
										o = arguments[1],
										s = new uF(this.getRoot(), i.getRoot(), o);
									return this.nearestNeighbour(s)
								}
								if (arguments[0] instanceof uF && "number" == typeof arguments[1]) {
									var a = arguments[0],
										u = arguments[1],
										h = null,
										c = new uP;
									for (c.add(a); !c.isEmpty() && u > 0;) {
										var l = c.poll(),
											p = l.getDistance();
										if (p >= u) break;
										l.isLeaves() ? (u = p, h = l) : l.expandToQueue(c, u)
									}
									return [h.getBoundable(0).getItem(), h.getBoundable(1).getItem()]
								}
							} else if (3 == arguments.length) {
								var f = arguments[0],
									g = arguments[1],
									d = arguments[2],
									y = new uL(f, g),
									_ = new uF(this.getRoot(), y, d);
								return this.nearestNeighbour(_)[0]
							}
						}, e.prototype.interfaces_ = function() {
							return [uR, rE]
						}, e.prototype.getClass = function() {
							return e
						}, e.centreX = function(t) {
							return e.avg(t.getMinX(), t.getMaxX())
						}, e.avg = function(t, e) {
							return (t + e) / 2
						}, e.centreY = function(t) {
							return e.avg(t.getMinY(), t.getMaxY())
						}, n.STRtreeNode.get = function() {
							return uj
						}, n.serialVersionUID.get = function() {
							return 0x39920f7d5f261e0
						}, n.xComparator.get = function() {
							return {
								interfaces_: function() {
									return [sN]
								},
								compare: function(n, r) {
									return t.compareDoubles(e.centreX(n.getBounds()), e.centreX(r.getBounds()))
								}
							}
						}, n.yComparator.get = function() {
							return {
								interfaces_: function() {
									return [sN]
								},
								compare: function(n, r) {
									return t.compareDoubles(e.centreY(n.getBounds()), e.centreY(r.getBounds()))
								}
							}
						}, n.intersectsOp.get = function() {
							return {
								interfaces_: function() {
									return [t.IntersectsOp]
								},
								intersects: function(t, e) {
									return t.intersects(e)
								}
							}
						}, n.DEFAULT_NODE_CAPACITY.get = function() {
							return 10
						}, Object.defineProperties(e, n), e
					}(uq),
					uj = function(t) {
						function e() {
							var e = arguments[0];
							t.call(this, e)
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.computeBounds = function() {
							for (var t = null, e = this.getChildBoundables().iterator(); e.hasNext();) {
								var n = e.next();
								null === t ? t = new sH(n.getBounds()) : t.expandToInclude(n.getBounds())
							}
							return t
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, e
					}(uT),
					uX = function() {};
				uX.prototype.interfaces_ = function() {
					return []
				}, uX.prototype.getClass = function() {
					return uX
				}, uX.relativeSign = function(t, e) {
					return t < e ? -1 : t > e ? 1 : 0
				}, uX.compare = function(t, e, n) {
					if (e.equals2D(n)) return 0;
					var r = uX.relativeSign(e.x, n.x),
						i = uX.relativeSign(e.y, n.y);
					switch (t) {
						case 0:
							return uX.compareValue(r, i);
						case 1:
							return uX.compareValue(i, r);
						case 2:
							return uX.compareValue(i, -r);
						case 3:
							return uX.compareValue(-r, i);
						case 4:
							return uX.compareValue(-r, -i);
						case 5:
							return uX.compareValue(-i, -r);
						case 6:
							return uX.compareValue(-i, r);
						case 7:
							return uX.compareValue(r, -i)
					}
					return s2.shouldNeverReachHere("invalid octant value"), 0
				}, uX.compareValue = function(t, e) {
					return t < 0 ? -1 : t > 0 ? 1 : e < 0 ? -1 : e > 0 ? 1 : 0
				};
				var uU = function() {
					this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
					var t = arguments[0],
						e = arguments[1],
						n = arguments[2],
						r = arguments[3];
					this._segString = t, this.coord = new sw(e), this.segmentIndex = n, this._segmentOctant = r, this._isInterior = !e.equals2D(t.getCoordinate(n))
				};
				uU.prototype.getCoordinate = function() {
					return this.coord
				}, uU.prototype.print = function(t) {
					t.print(this.coord), t.print(" seg # = " + this.segmentIndex)
				}, uU.prototype.compareTo = function(t) {
					return this.segmentIndex < t.segmentIndex ? -1 : this.segmentIndex > t.segmentIndex ? 1 : this.coord.equals2D(t.coord) ? 0 : uX.compare(this._segmentOctant, this.coord, t.coord)
				}, uU.prototype.isEndPoint = function(t) {
					return 0 === this.segmentIndex && !this._isInterior || this.segmentIndex === t
				}, uU.prototype.isInterior = function() {
					return this._isInterior
				}, uU.prototype.interfaces_ = function() {
					return [sb]
				}, uU.prototype.getClass = function() {
					return uU
				};
				var uY = function() {
					this._nodeMap = new rP, this._edge = null;
					var t = arguments[0];
					this._edge = t
				};
				uY.prototype.getSplitCoordinates = function() {
					var t = new a_;
					this.addEndpoints();
					for (var e = this.iterator(), n = e.next(); e.hasNext();) {
						var r = e.next();
						this.addEdgeCoordinates(n, r, t), n = r
					}
					return t.toCoordinateArray()
				}, uY.prototype.addCollapsedNodes = function() {
					var t = new ad;
					this.findCollapsesFromInsertedNodes(t), this.findCollapsesFromExistingVertices(t);
					for (var e = t.iterator(); e.hasNext();) {
						var n = e.next().intValue();
						this.add(this._edge.getCoordinate(n), n)
					}
				}, uY.prototype.print = function(t) {
					t.println("Intersections:");
					for (var e = this.iterator(); e.hasNext();) e.next().print(t)
				}, uY.prototype.findCollapsesFromExistingVertices = function(t) {
					for (var e = 0; e < this._edge.size() - 2; e++) {
						var n = this._edge.getCoordinate(e),
							r = this._edge.getCoordinate(e + 2);
						n.equals2D(r) && t.add(new sA(e + 1))
					}
				}, uY.prototype.addEdgeCoordinates = function(t, e, n) {
					var r = this._edge.getCoordinate(e.segmentIndex),
						i = e.isInterior() || !e.coord.equals2D(r);
					n.add(new sw(t.coord), !1);
					for (var o = t.segmentIndex + 1; o <= e.segmentIndex; o++) n.add(this._edge.getCoordinate(o));
					i && n.add(new sw(e.coord))
				}, uY.prototype.iterator = function() {
					return this._nodeMap.values().iterator()
				}, uY.prototype.addSplitEdges = function(t) {
					this.addEndpoints(), this.addCollapsedNodes();
					for (var e = this.iterator(), n = e.next(); e.hasNext();) {
						var r = e.next(),
							i = this.createSplitEdge(n, r);
						t.add(i), n = r
					}
				}, uY.prototype.findCollapseIndex = function(t, e, n) {
					if (!t.coord.equals2D(e.coord)) return !1;
					var r = e.segmentIndex - t.segmentIndex;
					return e.isInterior() || r--, 1 === r && (n[0] = t.segmentIndex + 1, !0)
				}, uY.prototype.findCollapsesFromInsertedNodes = function(t) {
					for (var e = [, ].fill(null), n = this.iterator(), r = n.next(); n.hasNext();) {
						var i = n.next();
						this.findCollapseIndex(r, i, e) && t.add(new sA(e[0])), r = i
					}
				}, uY.prototype.getEdge = function() {
					return this._edge
				}, uY.prototype.addEndpoints = function() {
					var t = this._edge.size() - 1;
					this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(t), t)
				}, uY.prototype.createSplitEdge = function(t, e) {
					var n = e.segmentIndex - t.segmentIndex + 2,
						r = this._edge.getCoordinate(e.segmentIndex),
						i = e.isInterior() || !e.coord.equals2D(r);
					i || n--;
					var o = Array(n).fill(null),
						s = 0;
					o[s++] = new sw(t.coord);
					for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++) o[s++] = this._edge.getCoordinate(a);
					return i && (o[s] = new sw(e.coord)), new uJ(o, this._edge.getData())
				}, uY.prototype.add = function(t, e) {
					var n = new uU(this._edge, t, e, this._edge.getSegmentOctant(e)),
						r = this._nodeMap.get(n);
					return null !== r ? (s2.isTrue(r.coord.equals2D(t), "Found equal nodes with different coordinates"), r) : (this._nodeMap.put(n, n), n)
				}, uY.prototype.checkSplitEdgesCorrectness = function(t) {
					var e = this._edge.getCoordinates(),
						n = t.get(0).getCoordinate(0);
					if (!n.equals2D(e[0])) throw new s0("bad split edge start point at " + n);
					var r = t.get(t.size() - 1).getCoordinates(),
						i = r[r.length - 1];
					if (!i.equals2D(e[e.length - 1])) throw new s0("bad split edge end point at " + i)
				}, uY.prototype.interfaces_ = function() {
					return []
				}, uY.prototype.getClass = function() {
					return uY
				};
				var uV = function() {};
				uV.prototype.interfaces_ = function() {
					return []
				}, uV.prototype.getClass = function() {
					return uV
				}, uV.octant = function() {
					if ("number" == typeof arguments[0] && "number" == typeof arguments[1]) {
						var t = arguments[0],
							e = arguments[1];
						if (0 === t && 0 === e) throw new sv("Cannot compute the octant for point ( " + t + ", " + e + " )");
						var n = Math.abs(t),
							r = Math.abs(e);
						return t >= 0 ? e >= 0 ? n >= r ? 0 : 1 : n >= r ? 7 : 6 : e >= 0 ? n >= r ? 3 : 2 : n >= r ? 4 : 5
					}
					if (arguments[0] instanceof sw && arguments[1] instanceof sw) {
						var i = arguments[0],
							o = arguments[1],
							s = o.x - i.x,
							a = o.y - i.y;
						if (0 === s && 0 === a) throw new sv("Cannot compute the octant for two identical points " + i);
						return uV.octant(s, a)
					}
				};
				var uH = function() {};
				uH.prototype.getCoordinates = function() {}, uH.prototype.size = function() {}, uH.prototype.getCoordinate = function(t) {}, uH.prototype.isClosed = function() {}, uH.prototype.setData = function(t) {}, uH.prototype.getData = function() {}, uH.prototype.interfaces_ = function() {
					return []
				}, uH.prototype.getClass = function() {
					return uH
				};
				var uW = function() {};
				uW.prototype.addIntersection = function(t, e) {}, uW.prototype.interfaces_ = function() {
					return [uH]
				}, uW.prototype.getClass = function() {
					return uW
				};
				var uJ = function() {
					this._nodeList = new uY(this), this._pts = null, this._data = null;
					var t = arguments[0],
						e = arguments[1];
					this._pts = t, this._data = e
				};
				uJ.prototype.getCoordinates = function() {
					return this._pts
				}, uJ.prototype.size = function() {
					return this._pts.length
				}, uJ.prototype.getCoordinate = function(t) {
					return this._pts[t]
				}, uJ.prototype.isClosed = function() {
					return this._pts[0].equals(this._pts[this._pts.length - 1])
				}, uJ.prototype.getSegmentOctant = function(t) {
					return t === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(t), this.getCoordinate(t + 1))
				}, uJ.prototype.setData = function(t) {
					this._data = t
				}, uJ.prototype.safeOctant = function(t, e) {
					return t.equals2D(e) ? 0 : uV.octant(t, e)
				}, uJ.prototype.getData = function() {
					return this._data
				}, uJ.prototype.addIntersection = function() {
					if (2 == arguments.length) {
						var t = arguments[0],
							e = arguments[1];
						this.addIntersectionNode(t, e)
					} else if (4 == arguments.length) {
						var n = arguments[0],
							r = arguments[1],
							i = arguments[3],
							o = new sw(n.getIntersection(i));
						this.addIntersection(o, r)
					}
				}, uJ.prototype.toString = function() {
					return s$.toLineString(new a0(this._pts))
				}, uJ.prototype.getNodeList = function() {
					return this._nodeList
				}, uJ.prototype.addIntersectionNode = function(t, e) {
					var n = e,
						r = n + 1;
					if (r < this._pts.length) {
						var i = this._pts[r];
						t.equals2D(i) && (n = r)
					}
					return this._nodeList.add(t, n)
				}, uJ.prototype.addIntersections = function(t, e, n) {
					for (var r = 0; r < t.getIntersectionNum(); r++) this.addIntersection(t, e, n, r)
				}, uJ.prototype.interfaces_ = function() {
					return [uW]
				}, uJ.prototype.getClass = function() {
					return uJ
				}, uJ.getNodedSubstrings = function() {
					if (1 == arguments.length) {
						var t = arguments[0],
							e = new ad;
						return uJ.getNodedSubstrings(t, e), e
					}
					if (2 == arguments.length)
						for (var n = arguments[0], r = arguments[1], i = n.iterator(); i.hasNext();) i.next().getNodeList().addSplitEdges(r)
				};
				var uZ = function() {
						if (this.p0 = null, this.p1 = null, 0 == arguments.length) this.p0 = new sw, this.p1 = new sw;
						else if (1 == arguments.length) {
							var t = arguments[0];
							this.p0 = new sw(t.p0), this.p1 = new sw(t.p1)
						} else if (2 == arguments.length) this.p0 = arguments[0], this.p1 = arguments[1];
						else if (4 == arguments.length) {
							var e = arguments[0],
								n = arguments[1],
								r = arguments[2],
								i = arguments[3];
							this.p0 = new sw(e, n), this.p1 = new sw(r, i)
						}
					},
					uK = {
						serialVersionUID: {
							configurable: !0
						}
					};
				uZ.prototype.minX = function() {
					return Math.min(this.p0.x, this.p1.x)
				}, uZ.prototype.orientationIndex = function() {
					if (arguments[0] instanceof uZ) {
						var t = arguments[0],
							e = s9.orientationIndex(this.p0, this.p1, t.p0),
							n = s9.orientationIndex(this.p0, this.p1, t.p1);
						return e >= 0 && n >= 0 ? Math.max(e, n) : e <= 0 && n <= 0 ? Math.max(e, n) : 0
					}
					if (arguments[0] instanceof sw) {
						var r = arguments[0];
						return s9.orientationIndex(this.p0, this.p1, r)
					}
				}, uZ.prototype.toGeometry = function(t) {
					return t.createLineString([this.p0, this.p1])
				}, uZ.prototype.isVertical = function() {
					return this.p0.x === this.p1.x
				}, uZ.prototype.equals = function(t) {
					return t instanceof uZ && this.p0.equals(t.p0) && this.p1.equals(t.p1)
				}, uZ.prototype.intersection = function(t) {
					var e = new s6;
					return e.computeIntersection(this.p0, this.p1, t.p0, t.p1), e.hasIntersection() ? e.getIntersection(0) : null
				}, uZ.prototype.project = function() {
					if (arguments[0] instanceof sw) {
						var t = arguments[0];
						if (t.equals(this.p0) || t.equals(this.p1)) return new sw(t);
						var e = this.projectionFactor(t),
							n = new sw;
						return n.x = this.p0.x + e * (this.p1.x - this.p0.x), n.y = this.p0.y + e * (this.p1.y - this.p0.y), n
					}
					if (arguments[0] instanceof uZ) {
						var r = arguments[0],
							i = this.projectionFactor(r.p0),
							o = this.projectionFactor(r.p1);
						if (i >= 1 && o >= 1 || i <= 0 && o <= 0) return null;
						var s = this.project(r.p0);
						i < 0 && (s = this.p0), i > 1 && (s = this.p1);
						var a = this.project(r.p1);
						return o < 0 && (a = this.p0), o > 1 && (a = this.p1), new uZ(s, a)
					}
				}, uZ.prototype.normalize = function() {
					0 > this.p1.compareTo(this.p0) && this.reverse()
				}, uZ.prototype.angle = function() {
					return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x)
				}, uZ.prototype.getCoordinate = function(t) {
					return 0 === t ? this.p0 : this.p1
				}, uZ.prototype.distancePerpendicular = function(t) {
					return s9.distancePointLinePerpendicular(t, this.p0, this.p1)
				}, uZ.prototype.minY = function() {
					return Math.min(this.p0.y, this.p1.y)
				}, uZ.prototype.midPoint = function() {
					return uZ.midPoint(this.p0, this.p1)
				}, uZ.prototype.projectionFactor = function(t) {
					if (t.equals(this.p0)) return 0;
					if (t.equals(this.p1)) return 1;
					var e = this.p1.x - this.p0.x,
						n = this.p1.y - this.p0.y,
						r = e * e + n * n;
					return r <= 0 ? sx.NaN : ((t.x - this.p0.x) * e + (t.y - this.p0.y) * n) / r
				}, uZ.prototype.closestPoints = function(t) {
					var e = this.intersection(t);
					if (null !== e) return [e, e];
					var n = [, , ].fill(null),
						r = sx.MAX_VALUE,
						i = null,
						o = this.closestPoint(t.p0);
					r = o.distance(t.p0), n[0] = o, n[1] = t.p0;
					var s = this.closestPoint(t.p1);
					(i = s.distance(t.p1)) < r && (r = i, n[0] = s, n[1] = t.p1);
					var a = t.closestPoint(this.p0);
					(i = a.distance(this.p0)) < r && (r = i, n[0] = this.p0, n[1] = a);
					var u = t.closestPoint(this.p1);
					return (i = u.distance(this.p1)) < r && (r = i, n[0] = this.p1, n[1] = u), n
				}, uZ.prototype.closestPoint = function(t) {
					var e = this.projectionFactor(t);
					return e > 0 && e < 1 ? this.project(t) : this.p0.distance(t) < this.p1.distance(t) ? this.p0 : this.p1
				}, uZ.prototype.maxX = function() {
					return Math.max(this.p0.x, this.p1.x)
				}, uZ.prototype.getLength = function() {
					return this.p0.distance(this.p1)
				}, uZ.prototype.compareTo = function(t) {
					var e = this.p0.compareTo(t.p0);
					return 0 !== e ? e : this.p1.compareTo(t.p1)
				}, uZ.prototype.reverse = function() {
					var t = this.p0;
					this.p0 = this.p1, this.p1 = t
				}, uZ.prototype.equalsTopo = function(t) {
					return this.p0.equals(t.p0) && (this.p1.equals(t.p1) || this.p0.equals(t.p1)) && this.p1.equals(t.p0)
				}, uZ.prototype.lineIntersection = function(t) {
					try {
						return sV.intersection(this.p0, this.p1, t.p0, t.p1)
					} catch (t) {
						if (!(t instanceof sU)) throw t
					}
					return null
				}, uZ.prototype.maxY = function() {
					return Math.max(this.p0.y, this.p1.y)
				}, uZ.prototype.pointAlongOffset = function(t, e) {
					var n = this.p0.x + t * (this.p1.x - this.p0.x),
						r = this.p0.y + t * (this.p1.y - this.p0.y),
						i = this.p1.x - this.p0.x,
						o = this.p1.y - this.p0.y,
						s = Math.sqrt(i * i + o * o),
						a = 0,
						u = 0;
					if (0 !== e) {
						if (s <= 0) throw Error("Cannot compute offset from zero-length line segment");
						a = e * i / s, u = e * o / s
					}
					return new sw(n - u, r + a)
				}, uZ.prototype.setCoordinates = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						this.setCoordinates(t.p0, t.p1)
					} else if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						this.p0.x = e.x, this.p0.y = e.y, this.p1.x = n.x, this.p1.y = n.y
					}
				}, uZ.prototype.segmentFraction = function(t) {
					var e = this.projectionFactor(t);
					return e < 0 ? e = 0 : (e > 1 || sx.isNaN(e)) && (e = 1), e
				}, uZ.prototype.toString = function() {
					return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")"
				}, uZ.prototype.isHorizontal = function() {
					return this.p0.y === this.p1.y
				}, uZ.prototype.distance = function() {
					if (arguments[0] instanceof uZ) {
						var t = arguments[0];
						return s9.distanceLineLine(this.p0, this.p1, t.p0, t.p1)
					}
					if (arguments[0] instanceof sw) {
						var e = arguments[0];
						return s9.distancePointLine(e, this.p0, this.p1)
					}
				}, uZ.prototype.pointAlong = function(t) {
					var e = new sw;
					return e.x = this.p0.x + t * (this.p1.x - this.p0.x), e.y = this.p0.y + t * (this.p1.y - this.p0.y), e
				}, uZ.prototype.hashCode = function() {
					var t = sx.doubleToLongBits(this.p0.x),
						e = Math.trunc(t ^= 31 * sx.doubleToLongBits(this.p0.y)) ^ Math.trunc(t >> 32),
						n = sx.doubleToLongBits(this.p1.x);
					return e ^ (Math.trunc(n ^= 31 * sx.doubleToLongBits(this.p1.y)) ^ Math.trunc(n >> 32))
				}, uZ.prototype.interfaces_ = function() {
					return [sb, rE]
				}, uZ.prototype.getClass = function() {
					return uZ
				}, uZ.midPoint = function(t, e) {
					return new sw((t.x + e.x) / 2, (t.y + e.y) / 2)
				}, uK.serialVersionUID.get = function() {
					return 0x2d2172135f411c00
				}, Object.defineProperties(uZ, uK);
				var uQ = function() {
					this.tempEnv1 = new sH, this.tempEnv2 = new sH, this._overlapSeg1 = new uZ, this._overlapSeg2 = new uZ
				};
				uQ.prototype.overlap = function() {
					if (2 == arguments.length);
					else if (4 == arguments.length) {
						var t = arguments[0],
							e = arguments[1],
							n = arguments[2],
							r = arguments[3];
						t.getLineSegment(e, this._overlapSeg1), n.getLineSegment(r, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2)
					}
				}, uQ.prototype.interfaces_ = function() {
					return []
				}, uQ.prototype.getClass = function() {
					return uQ
				};
				var u$ = function() {
					this._pts = null, this._start = null, this._end = null, this._env = null, this._context = null, this._id = null;
					var t = arguments[0],
						e = arguments[1],
						n = arguments[2],
						r = arguments[3];
					this._pts = t, this._start = e, this._end = n, this._context = r
				};
				u$.prototype.getLineSegment = function(t, e) {
					e.p0 = this._pts[t], e.p1 = this._pts[t + 1]
				}, u$.prototype.computeSelect = function(t, e, n, r) {
					var i = this._pts[e],
						o = this._pts[n];
					if (r.tempEnv1.init(i, o), n - e == 1) return r.select(this, e), null;
					if (!t.intersects(r.tempEnv1)) return null;
					var s = Math.trunc((e + n) / 2);
					e < s && this.computeSelect(t, e, s, r), s < n && this.computeSelect(t, s, n, r)
				}, u$.prototype.getCoordinates = function() {
					for (var t = Array(this._end - this._start + 1).fill(null), e = 0, n = this._start; n <= this._end; n++) t[e++] = this._pts[n];
					return t
				}, u$.prototype.computeOverlaps = function(t, e) {
					this.computeOverlapsInternal(this._start, this._end, t, t._start, t._end, e)
				}, u$.prototype.setId = function(t) {
					this._id = t
				}, u$.prototype.select = function(t, e) {
					this.computeSelect(t, this._start, this._end, e)
				}, u$.prototype.getEnvelope = function() {
					if (null === this._env) {
						var t = this._pts[this._start],
							e = this._pts[this._end];
						this._env = new sH(t, e)
					}
					return this._env
				}, u$.prototype.getEndIndex = function() {
					return this._end
				}, u$.prototype.getStartIndex = function() {
					return this._start
				}, u$.prototype.getContext = function() {
					return this._context
				}, u$.prototype.getId = function() {
					return this._id
				}, u$.prototype.computeOverlapsInternal = function(t, e, n, r, i, o) {
					var s = this._pts[t],
						a = this._pts[e],
						u = n._pts[r],
						h = n._pts[i];
					if (e - t == 1 && i - r == 1) return o.overlap(this, t, n, r), null;
					if (o.tempEnv1.init(s, a), o.tempEnv2.init(u, h), !o.tempEnv1.intersects(o.tempEnv2)) return null;
					var c = Math.trunc((t + e) / 2),
						l = Math.trunc((r + i) / 2);
					t < c && (r < l && this.computeOverlapsInternal(t, c, n, r, l, o), l < i && this.computeOverlapsInternal(t, c, n, l, i, o)), c < e && (r < l && this.computeOverlapsInternal(c, e, n, r, l, o), l < i && this.computeOverlapsInternal(c, e, n, l, i, o))
				}, u$.prototype.interfaces_ = function() {
					return []
				}, u$.prototype.getClass = function() {
					return u$
				};
				var u0 = function() {};
				u0.prototype.interfaces_ = function() {
					return []
				}, u0.prototype.getClass = function() {
					return u0
				}, u0.getChainStartIndices = function(t) {
					var e = 0,
						n = new ad;
					n.add(new sA(e));
					do {
						var r = u0.findChainEnd(t, e);
						n.add(new sA(r)), e = r
					} while (e < t.length - 1);
					return u0.toIntArray(n)
				}, u0.findChainEnd = function(t, e) {
					for (var n = e; n < t.length - 1 && t[n].equals2D(t[n + 1]);) n++;
					if (n >= t.length - 1) return t.length - 1;
					for (var r = uE.quadrant(t[n], t[n + 1]), i = e + 1; i < t.length && (t[i - 1].equals2D(t[i]) || uE.quadrant(t[i - 1], t[i]) === r);) i++;
					return i - 1
				}, u0.getChains = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						return u0.getChains(t, null)
					}
					if (2 == arguments.length) {
						for (var e = arguments[0], n = arguments[1], r = new ad, i = u0.getChainStartIndices(e), o = 0; o < i.length - 1; o++) {
							var s = new u$(e, i[o], i[o + 1], n);
							r.add(s)
						}
						return r
					}
				}, u0.toIntArray = function(t) {
					for (var e = Array(t.size()).fill(null), n = 0; n < e.length; n++) e[n] = t.get(n).intValue();
					return e
				};
				var u1 = function() {};
				u1.prototype.computeNodes = function(t) {}, u1.prototype.getNodedSubstrings = function() {}, u1.prototype.interfaces_ = function() {
					return []
				}, u1.prototype.getClass = function() {
					return u1
				};
				var u2 = function() {
					if (this._segInt = null, 0 == arguments.length);
					else if (1 == arguments.length) {
						var t = arguments[0];
						this.setSegmentIntersector(t)
					}
				};
				u2.prototype.setSegmentIntersector = function(t) {
					this._segInt = t
				}, u2.prototype.interfaces_ = function() {
					return [u1]
				}, u2.prototype.getClass = function() {
					return u2
				};
				var u3 = function(t) {
						function e(e) {
							e ? t.call(this, e) : t.call(this), this._monoChains = new ad, this._index = new uz, this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0
						}
						t && (e.__proto__ = t), (e.prototype = Object.create(t && t.prototype)).constructor = e;
						var n = {
							SegmentOverlapAction: {
								configurable: !0
							}
						};
						return e.prototype.getMonotoneChains = function() {
							return this._monoChains
						}, e.prototype.getNodedSubstrings = function() {
							return uJ.getNodedSubstrings(this._nodedSegStrings)
						}, e.prototype.getIndex = function() {
							return this._index
						}, e.prototype.add = function(t) {
							for (var e = u0.getChains(t.getCoordinates(), t).iterator(); e.hasNext();) {
								var n = e.next();
								n.setId(this._idCounter++), this._index.insert(n.getEnvelope(), n), this._monoChains.add(n)
							}
						}, e.prototype.computeNodes = function(t) {
							this._nodedSegStrings = t;
							for (var e = t.iterator(); e.hasNext();) this.add(e.next());
							this.intersectChains()
						}, e.prototype.intersectChains = function() {
							for (var t = new u4(this._segInt), e = this._monoChains.iterator(); e.hasNext();)
								for (var n = e.next(), r = this._index.query(n.getEnvelope()).iterator(); r.hasNext();) {
									var i = r.next();
									if (i.getId() > n.getId() && (n.computeOverlaps(i, t), this._nOverlaps++), this._segInt.isDone()) return null
								}
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, n.SegmentOverlapAction.get = function() {
							return u4
						}, Object.defineProperties(e, n), e
					}(u2),
					u4 = function(t) {
						function e() {
							t.call(this), this._si = null;
							var e = arguments[0];
							this._si = e
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.overlap = function() {
							if (4 != arguments.length) return t.prototype.overlap.apply(this, arguments);
							var e = arguments[0],
								n = arguments[1],
								r = arguments[2],
								i = arguments[3],
								o = e.getContext(),
								s = r.getContext();
							this._si.processIntersections(o, n, s, i)
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, e
					}(uQ),
					u6 = function t() {
						if (this._quadrantSegments = t.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = t.CAP_ROUND, this._joinStyle = t.JOIN_ROUND, this._mitreLimit = t.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this._simplifyFactor = t.DEFAULT_SIMPLIFY_FACTOR, 0 == arguments.length);
						else if (1 == arguments.length) {
							var e = arguments[0];
							this.setQuadrantSegments(e)
						} else if (2 == arguments.length) {
							var n = arguments[0],
								r = arguments[1];
							this.setQuadrantSegments(n), this.setEndCapStyle(r)
						} else if (4 == arguments.length) {
							var i = arguments[0],
								o = arguments[1],
								s = arguments[2],
								a = arguments[3];
							this.setQuadrantSegments(i), this.setEndCapStyle(o), this.setJoinStyle(s), this.setMitreLimit(a)
						}
					},
					u8 = {
						CAP_ROUND: {
							configurable: !0
						},
						CAP_FLAT: {
							configurable: !0
						},
						CAP_SQUARE: {
							configurable: !0
						},
						JOIN_ROUND: {
							configurable: !0
						},
						JOIN_MITRE: {
							configurable: !0
						},
						JOIN_BEVEL: {
							configurable: !0
						},
						DEFAULT_QUADRANT_SEGMENTS: {
							configurable: !0
						},
						DEFAULT_MITRE_LIMIT: {
							configurable: !0
						},
						DEFAULT_SIMPLIFY_FACTOR: {
							configurable: !0
						}
					};
				u6.prototype.getEndCapStyle = function() {
					return this._endCapStyle
				}, u6.prototype.isSingleSided = function() {
					return this._isSingleSided
				}, u6.prototype.setQuadrantSegments = function(t) {
					this._quadrantSegments = t, 0 === this._quadrantSegments && (this._joinStyle = u6.JOIN_BEVEL), this._quadrantSegments < 0 && (this._joinStyle = u6.JOIN_MITRE, this._mitreLimit = Math.abs(this._quadrantSegments)), t <= 0 && (this._quadrantSegments = 1), this._joinStyle !== u6.JOIN_ROUND && (this._quadrantSegments = u6.DEFAULT_QUADRANT_SEGMENTS)
				}, u6.prototype.getJoinStyle = function() {
					return this._joinStyle
				}, u6.prototype.setJoinStyle = function(t) {
					this._joinStyle = t
				}, u6.prototype.setSimplifyFactor = function(t) {
					this._simplifyFactor = t < 0 ? 0 : t
				}, u6.prototype.getSimplifyFactor = function() {
					return this._simplifyFactor
				}, u6.prototype.getQuadrantSegments = function() {
					return this._quadrantSegments
				}, u6.prototype.setEndCapStyle = function(t) {
					this._endCapStyle = t
				}, u6.prototype.getMitreLimit = function() {
					return this._mitreLimit
				}, u6.prototype.setMitreLimit = function(t) {
					this._mitreLimit = t
				}, u6.prototype.setSingleSided = function(t) {
					this._isSingleSided = t
				}, u6.prototype.interfaces_ = function() {
					return []
				}, u6.prototype.getClass = function() {
					return u6
				}, u6.bufferDistanceError = function(t) {
					return 1 - Math.cos(Math.PI / 2 / t / 2)
				}, u8.CAP_ROUND.get = function() {
					return 1
				}, u8.CAP_FLAT.get = function() {
					return 2
				}, u8.CAP_SQUARE.get = function() {
					return 3
				}, u8.JOIN_ROUND.get = function() {
					return 1
				}, u8.JOIN_MITRE.get = function() {
					return 2
				}, u8.JOIN_BEVEL.get = function() {
					return 3
				}, u8.DEFAULT_QUADRANT_SEGMENTS.get = function() {
					return 8
				}, u8.DEFAULT_MITRE_LIMIT.get = function() {
					return 5
				}, u8.DEFAULT_SIMPLIFY_FACTOR.get = function() {
					return .01
				}, Object.defineProperties(u6, u8);
				var u5 = function(t) {
						this._distanceTol = null, this._isDeleted = null, this._angleOrientation = s9.COUNTERCLOCKWISE, this._inputLine = t || null
					},
					u9 = {
						INIT: {
							configurable: !0
						},
						DELETE: {
							configurable: !0
						},
						KEEP: {
							configurable: !0
						},
						NUM_PTS_TO_CHECK: {
							configurable: !0
						}
					};
				u5.prototype.isDeletable = function(t, e, n, r) {
					var i = this._inputLine[t],
						o = this._inputLine[e],
						s = this._inputLine[n];
					return !!this.isConcave(i, o, s) && !!this.isShallow(i, o, s, r) && this.isShallowSampled(i, o, t, n, r)
				}, u5.prototype.deleteShallowConcavities = function() {
					for (var t = 1, e = this.findNextNonDeletedIndex(t), n = this.findNextNonDeletedIndex(e), r = !1; n < this._inputLine.length;) {
						var i = !1;
						this.isDeletable(t, e, n, this._distanceTol) && (this._isDeleted[e] = u5.DELETE, i = !0, r = !0), t = i ? n : e, e = this.findNextNonDeletedIndex(t), n = this.findNextNonDeletedIndex(e)
					}
					return r
				}, u5.prototype.isShallowConcavity = function(t, e, n, r) {
					return s9.computeOrientation(t, e, n) === this._angleOrientation && s9.distancePointLine(e, t, n) < r
				}, u5.prototype.isShallowSampled = function(t, e, n, r, i) {
					var o = Math.trunc((r - n) / u5.NUM_PTS_TO_CHECK);
					o <= 0 && (o = 1);
					for (var s = n; s < r; s += o)
						if (!this.isShallow(t, e, this._inputLine[s], i)) return !1;
					return !0
				}, u5.prototype.isConcave = function(t, e, n) {
					return s9.computeOrientation(t, e, n) === this._angleOrientation
				}, u5.prototype.simplify = function(t) {
					this._distanceTol = Math.abs(t), t < 0 && (this._angleOrientation = s9.CLOCKWISE), this._isDeleted = Array(this._inputLine.length).fill(null);
					var e = !1;
					do e = this.deleteShallowConcavities(); while (e);
					return this.collapseLine()
				}, u5.prototype.findNextNonDeletedIndex = function(t) {
					for (var e = t + 1; e < this._inputLine.length && this._isDeleted[e] === u5.DELETE;) e++;
					return e
				}, u5.prototype.isShallow = function(t, e, n, r) {
					return s9.distancePointLine(e, t, n) < r
				}, u5.prototype.collapseLine = function() {
					for (var t = new a_, e = 0; e < this._inputLine.length; e++) this._isDeleted[e] !== u5.DELETE && t.add(this._inputLine[e]);
					return t.toCoordinateArray()
				}, u5.prototype.interfaces_ = function() {
					return []
				}, u5.prototype.getClass = function() {
					return u5
				}, u5.simplify = function(t, e) {
					return new u5(t).simplify(e)
				}, u9.INIT.get = function() {
					return 0
				}, u9.DELETE.get = function() {
					return 1
				}, u9.KEEP.get = function() {
					return 1
				}, u9.NUM_PTS_TO_CHECK.get = function() {
					return 10
				}, Object.defineProperties(u5, u9);
				var u7 = function() {
						this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new ad
					},
					ht = {
						COORDINATE_ARRAY_TYPE: {
							configurable: !0
						}
					};
				u7.prototype.getCoordinates = function() {
					return this._ptList.toArray(u7.COORDINATE_ARRAY_TYPE)
				}, u7.prototype.setPrecisionModel = function(t) {
					this._precisionModel = t
				}, u7.prototype.addPt = function(t) {
					var e = new sw(t);
					if (this._precisionModel.makePrecise(e), this.isRedundant(e)) return null;
					this._ptList.add(e)
				}, u7.prototype.revere = function() {}, u7.prototype.addPts = function(t, e) {
					if (e)
						for (var n = 0; n < t.length; n++) this.addPt(t[n]);
					else
						for (var r = t.length - 1; r >= 0; r--) this.addPt(t[r])
				}, u7.prototype.isRedundant = function(t) {
					if (1 > this._ptList.size()) return !1;
					var e = this._ptList.get(this._ptList.size() - 1);
					return t.distance(e) < this._minimimVertexDistance
				}, u7.prototype.toString = function() {
					return (new a7).createLineString(this.getCoordinates()).toString()
				}, u7.prototype.closeRing = function() {
					if (1 > this._ptList.size()) return null;
					var t = new sw(this._ptList.get(0)),
						e = this._ptList.get(this._ptList.size() - 1);
					if (t.equals(e)) return null;
					this._ptList.add(t)
				}, u7.prototype.setMinimumVertexDistance = function(t) {
					this._minimimVertexDistance = t
				}, u7.prototype.interfaces_ = function() {
					return []
				}, u7.prototype.getClass = function() {
					return u7
				}, ht.COORDINATE_ARRAY_TYPE.get = function() {
					return [].fill(null)
				}, Object.defineProperties(u7, ht);
				var he = function() {},
					hn = {
						PI_TIMES_2: {
							configurable: !0
						},
						PI_OVER_2: {
							configurable: !0
						},
						PI_OVER_4: {
							configurable: !0
						},
						COUNTERCLOCKWISE: {
							configurable: !0
						},
						CLOCKWISE: {
							configurable: !0
						},
						NONE: {
							configurable: !0
						}
					};
				he.prototype.interfaces_ = function() {
					return []
				}, he.prototype.getClass = function() {
					return he
				}, he.toDegrees = function(t) {
					return 180 * t / Math.PI
				}, he.normalize = function(t) {
					for (; t > Math.PI;) t -= he.PI_TIMES_2;
					for (; t <= -Math.PI;) t += he.PI_TIMES_2;
					return t
				}, he.angle = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						return Math.atan2(t.y, t.x)
					}
					if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1],
							r = n.x - e.x;
						return Math.atan2(n.y - e.y, r)
					}
				}, he.isAcute = function(t, e, n) {
					var r = t.x - e.x,
						i = t.y - e.y;
					return r * (n.x - e.x) + i * (n.y - e.y) > 0
				}, he.isObtuse = function(t, e, n) {
					var r = t.x - e.x,
						i = t.y - e.y;
					return r * (n.x - e.x) + i * (n.y - e.y) < 0
				}, he.interiorAngle = function(t, e, n) {
					var r = he.angle(e, t);
					return Math.abs(he.angle(e, n) - r)
				}, he.normalizePositive = function(t) {
					if (t < 0) {
						for (; t < 0;) t += he.PI_TIMES_2;
						t >= he.PI_TIMES_2 && (t = 0)
					} else {
						for (; t >= he.PI_TIMES_2;) t -= he.PI_TIMES_2;
						t < 0 && (t = 0)
					}
					return t
				}, he.angleBetween = function(t, e, n) {
					var r = he.angle(e, t),
						i = he.angle(e, n);
					return he.diff(r, i)
				}, he.diff = function(t, e) {
					var n = null;
					return (n = t < e ? e - t : t - e) > Math.PI && (n = 2 * Math.PI - n), n
				}, he.toRadians = function(t) {
					return t * Math.PI / 180
				}, he.getTurn = function(t, e) {
					var n = Math.sin(e - t);
					return n > 0 ? he.COUNTERCLOCKWISE : n < 0 ? he.CLOCKWISE : he.NONE
				}, he.angleBetweenOriented = function(t, e, n) {
					var r = he.angle(e, t),
						i = he.angle(e, n) - r;
					return i <= -Math.PI ? i + he.PI_TIMES_2 : i > Math.PI ? i - he.PI_TIMES_2 : i
				}, hn.PI_TIMES_2.get = function() {
					return 2 * Math.PI
				}, hn.PI_OVER_2.get = function() {
					return Math.PI / 2
				}, hn.PI_OVER_4.get = function() {
					return Math.PI / 4
				}, hn.COUNTERCLOCKWISE.get = function() {
					return s9.COUNTERCLOCKWISE
				}, hn.CLOCKWISE.get = function() {
					return s9.CLOCKWISE
				}, hn.NONE.get = function() {
					return s9.COLLINEAR
				}, Object.defineProperties(he, hn);
				var hr = function t() {
						this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new uZ, this._seg1 = new uZ, this._offset0 = new uZ, this._offset1 = new uZ, this._side = 0, this._hasNarrowConcaveAngle = !1;
						var e = arguments[0],
							n = arguments[1],
							r = arguments[2];
						this._precisionModel = e, this._bufParams = n, this._li = new s6, this._filletAngleQuantum = Math.PI / 2 / n.getQuadrantSegments(), n.getQuadrantSegments() >= 8 && n.getJoinStyle() === u6.JOIN_ROUND && (this._closingSegLengthFactor = t.MAX_CLOSING_SEG_LEN_FACTOR), this.init(r)
					},
					hi = {
						OFFSET_SEGMENT_SEPARATION_FACTOR: {
							configurable: !0
						},
						INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR: {
							configurable: !0
						},
						CURVE_VERTEX_SNAP_DISTANCE_FACTOR: {
							configurable: !0
						},
						MAX_CLOSING_SEG_LEN_FACTOR: {
							configurable: !0
						}
					};
				hr.prototype.addNextSegment = function(t, e) {
					if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = t, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2)) return null;
					var n = s9.computeOrientation(this._s0, this._s1, this._s2),
						r = n === s9.CLOCKWISE && this._side === ua.LEFT || n === s9.COUNTERCLOCKWISE && this._side === ua.RIGHT;
					0 === n ? this.addCollinear(e) : r ? this.addOutsideTurn(n, e) : this.addInsideTurn(n, e)
				}, hr.prototype.addLineEndCap = function(t, e) {
					var n = new uZ(t, e),
						r = new uZ;
					this.computeOffsetSegment(n, ua.LEFT, this._distance, r);
					var i = new uZ;
					this.computeOffsetSegment(n, ua.RIGHT, this._distance, i);
					var o = e.x - t.x,
						s = Math.atan2(e.y - t.y, o);
					switch (this._bufParams.getEndCapStyle()) {
						case u6.CAP_ROUND:
							this._segList.addPt(r.p1), this.addFilletArc(e, s + Math.PI / 2, s - Math.PI / 2, s9.CLOCKWISE, this._distance), this._segList.addPt(i.p1);
							break;
						case u6.CAP_FLAT:
							this._segList.addPt(r.p1), this._segList.addPt(i.p1);
							break;
						case u6.CAP_SQUARE:
							var a = new sw;
							a.x = Math.abs(this._distance) * Math.cos(s), a.y = Math.abs(this._distance) * Math.sin(s);
							var u = new sw(r.p1.x + a.x, r.p1.y + a.y),
								h = new sw(i.p1.x + a.x, i.p1.y + a.y);
							this._segList.addPt(u), this._segList.addPt(h)
					}
				}, hr.prototype.getCoordinates = function() {
					return this._segList.getCoordinates()
				}, hr.prototype.addMitreJoin = function(t, e, n, r) {
					var i = !0,
						o = null;
					try {
						o = sV.intersection(e.p0, e.p1, n.p0, n.p1), (r <= 0 ? 1 : o.distance(t) / Math.abs(r)) > this._bufParams.getMitreLimit() && (i = !1)
					} catch (t) {
						if (!(t instanceof sU)) throw t;
						o = new sw(0, 0), i = !1
					}
					i ? this._segList.addPt(o) : this.addLimitedMitreJoin(e, n, r, this._bufParams.getMitreLimit())
				}, hr.prototype.addFilletCorner = function(t, e, n, r, i) {
					var o = e.x - t.x,
						s = Math.atan2(e.y - t.y, o),
						a = n.x - t.x,
						u = Math.atan2(n.y - t.y, a);
					r === s9.CLOCKWISE ? s <= u && (s += 2 * Math.PI) : s >= u && (s -= 2 * Math.PI), this._segList.addPt(e), this.addFilletArc(t, s, u, r, i), this._segList.addPt(n)
				}, hr.prototype.addOutsideTurn = function(t, e) {
					if (this._offset0.p1.distance(this._offset1.p0) < this._distance * hr.OFFSET_SEGMENT_SEPARATION_FACTOR) return this._segList.addPt(this._offset0.p1), null;
					this._bufParams.getJoinStyle() === u6.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === u6.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (e && this._segList.addPt(this._offset0.p1), this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, t, this._distance), this._segList.addPt(this._offset1.p0))
				}, hr.prototype.createSquare = function(t) {
					this._segList.addPt(new sw(t.x + this._distance, t.y + this._distance)), this._segList.addPt(new sw(t.x + this._distance, t.y - this._distance)), this._segList.addPt(new sw(t.x - this._distance, t.y - this._distance)), this._segList.addPt(new sw(t.x - this._distance, t.y + this._distance)), this._segList.closeRing()
				}, hr.prototype.addSegments = function(t, e) {
					this._segList.addPts(t, e)
				}, hr.prototype.addFirstSegment = function() {
					this._segList.addPt(this._offset1.p0)
				}, hr.prototype.addLastSegment = function() {
					this._segList.addPt(this._offset1.p1)
				}, hr.prototype.initSideSegments = function(t, e, n) {
					this._s1 = t, this._s2 = e, this._side = n, this._seg1.setCoordinates(t, e), this.computeOffsetSegment(this._seg1, n, this._distance, this._offset1)
				}, hr.prototype.addLimitedMitreJoin = function(t, e, n, r) {
					var i = this._seg0.p1,
						o = he.angle(i, this._seg0.p0),
						s = he.angleBetweenOriented(this._seg0.p0, i, this._seg1.p1) / 2,
						a = he.normalize(o + s),
						u = he.normalize(a + Math.PI),
						h = r * n,
						c = n - h * Math.abs(Math.sin(s)),
						l = new sw(i.x + h * Math.cos(u), i.y + h * Math.sin(u)),
						p = new uZ(i, l),
						f = p.pointAlongOffset(1, c),
						g = p.pointAlongOffset(1, -c);
					this._side === ua.LEFT ? (this._segList.addPt(f), this._segList.addPt(g)) : (this._segList.addPt(g), this._segList.addPt(f))
				}, hr.prototype.computeOffsetSegment = function(t, e, n, r) {
					var i = e === ua.LEFT ? 1 : -1,
						o = t.p1.x - t.p0.x,
						s = t.p1.y - t.p0.y,
						a = Math.sqrt(o * o + s * s),
						u = i * n * o / a,
						h = i * n * s / a;
					r.p0.x = t.p0.x - h, r.p0.y = t.p0.y + u, r.p1.x = t.p1.x - h, r.p1.y = t.p1.y + u
				}, hr.prototype.addFilletArc = function(t, e, n, r, i) {
					var o = r === s9.CLOCKWISE ? -1 : 1,
						s = Math.abs(e - n),
						a = Math.trunc(s / this._filletAngleQuantum + .5);
					if (a < 1) return null;
					for (var u = s / a, h = 0, c = new sw; h < s;) {
						var l = e + o * h;
						c.x = t.x + i * Math.cos(l), c.y = t.y + i * Math.sin(l), this._segList.addPt(c), h += u
					}
				}, hr.prototype.addInsideTurn = function(t, e) {
					if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection()) this._segList.addPt(this._li.getIntersection(0));
					else if (this._hasNarrowConcaveAngle = !0, this._offset0.p1.distance(this._offset1.p0) < this._distance * hr.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR) this._segList.addPt(this._offset0.p1);
					else {
						if (this._segList.addPt(this._offset0.p1), this._closingSegLengthFactor > 0) {
							var n = new sw((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
							this._segList.addPt(n);
							var r = new sw((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
							this._segList.addPt(r)
						} else this._segList.addPt(this._s1);
						this._segList.addPt(this._offset1.p0)
					}
				}, hr.prototype.createCircle = function(t) {
					var e = new sw(t.x + this._distance, t.y);
					this._segList.addPt(e), this.addFilletArc(t, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing()
				}, hr.prototype.addBevelJoin = function(t, e) {
					this._segList.addPt(t.p1), this._segList.addPt(e.p0)
				}, hr.prototype.init = function(t) {
					this._distance = t, this._maxCurveSegmentError = t * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new u7, this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(t * hr.CURVE_VERTEX_SNAP_DISTANCE_FACTOR)
				}, hr.prototype.addCollinear = function(t) {
					this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2), this._li.getIntersectionNum() >= 2 && (this._bufParams.getJoinStyle() === u6.JOIN_BEVEL || this._bufParams.getJoinStyle() === u6.JOIN_MITRE ? (t && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addFilletCorner(this._s1, this._offset0.p1, this._offset1.p0, s9.CLOCKWISE, this._distance))
				}, hr.prototype.closeRing = function() {
					this._segList.closeRing()
				}, hr.prototype.hasNarrowConcaveAngle = function() {
					return this._hasNarrowConcaveAngle
				}, hr.prototype.interfaces_ = function() {
					return []
				}, hr.prototype.getClass = function() {
					return hr
				}, hi.OFFSET_SEGMENT_SEPARATION_FACTOR.get = function() {
					return .001
				}, hi.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR.get = function() {
					return .001
				}, hi.CURVE_VERTEX_SNAP_DISTANCE_FACTOR.get = function() {
					return 1e-6
				}, hi.MAX_CLOSING_SEG_LEN_FACTOR.get = function() {
					return 80
				}, Object.defineProperties(hr, hi);
				var ho = function() {
					this._distance = 0, this._precisionModel = null, this._bufParams = null;
					var t = arguments[0],
						e = arguments[1];
					this._precisionModel = t, this._bufParams = e
				};
				ho.prototype.getOffsetCurve = function(t, e) {
					if (this._distance = e, 0 === e) return null;
					var n = e < 0,
						r = this.getSegGen(Math.abs(e));
					t.length <= 1 ? this.computePointCurve(t[0], r) : this.computeOffsetCurve(t, n, r);
					var i = r.getCoordinates();
					return n && am.reverse(i), i
				}, ho.prototype.computeSingleSidedBufferCurve = function(t, e, n) {
					var r = this.simplifyTolerance(this._distance);
					if (e) {
						n.addSegments(t, !0);
						var i = u5.simplify(t, -r),
							o = i.length - 1;
						n.initSideSegments(i[o], i[o - 1], ua.LEFT), n.addFirstSegment();
						for (var s = o - 2; s >= 0; s--) n.addNextSegment(i[s], !0)
					} else {
						n.addSegments(t, !1);
						var a = u5.simplify(t, r),
							u = a.length - 1;
						n.initSideSegments(a[0], a[1], ua.LEFT), n.addFirstSegment();
						for (var h = 2; h <= u; h++) n.addNextSegment(a[h], !0)
					}
					n.addLastSegment(), n.closeRing()
				}, ho.prototype.computeRingBufferCurve = function(t, e, n) {
					var r = this.simplifyTolerance(this._distance);
					e === ua.RIGHT && (r = -r);
					var i = u5.simplify(t, r),
						o = i.length - 1;
					n.initSideSegments(i[o - 1], i[0], e);
					for (var s = 1; s <= o; s++) {
						var a = 1 !== s;
						n.addNextSegment(i[s], a)
					}
					n.closeRing()
				}, ho.prototype.computeLineBufferCurve = function(t, e) {
					var n = this.simplifyTolerance(this._distance),
						r = u5.simplify(t, n),
						i = r.length - 1;
					e.initSideSegments(r[0], r[1], ua.LEFT);
					for (var o = 2; o <= i; o++) e.addNextSegment(r[o], !0);
					e.addLastSegment(), e.addLineEndCap(r[i - 1], r[i]);
					var s = u5.simplify(t, -n),
						a = s.length - 1;
					e.initSideSegments(s[a], s[a - 1], ua.LEFT);
					for (var u = a - 2; u >= 0; u--) e.addNextSegment(s[u], !0);
					e.addLastSegment(), e.addLineEndCap(s[1], s[0]), e.closeRing()
				}, ho.prototype.computePointCurve = function(t, e) {
					switch (this._bufParams.getEndCapStyle()) {
						case u6.CAP_ROUND:
							e.createCircle(t);
							break;
						case u6.CAP_SQUARE:
							e.createSquare(t)
					}
				}, ho.prototype.getLineCurve = function(t, e) {
					if (this._distance = e, e < 0 && !this._bufParams.isSingleSided() || 0 === e) return null;
					var n = this.getSegGen(Math.abs(e));
					return t.length <= 1 ? this.computePointCurve(t[0], n) : this._bufParams.isSingleSided() ? this.computeSingleSidedBufferCurve(t, e < 0, n) : this.computeLineBufferCurve(t, n), n.getCoordinates()
				}, ho.prototype.getBufferParameters = function() {
					return this._bufParams
				}, ho.prototype.simplifyTolerance = function(t) {
					return t * this._bufParams.getSimplifyFactor()
				}, ho.prototype.getRingCurve = function(t, e, n) {
					if (this._distance = n, t.length <= 2) return this.getLineCurve(t, n);
					if (0 === n) return ho.copyCoordinates(t);
					var r = this.getSegGen(n);
					return this.computeRingBufferCurve(t, e, r), r.getCoordinates()
				}, ho.prototype.computeOffsetCurve = function(t, e, n) {
					var r = this.simplifyTolerance(this._distance);
					if (e) {
						var i = u5.simplify(t, -r),
							o = i.length - 1;
						n.initSideSegments(i[o], i[o - 1], ua.LEFT), n.addFirstSegment();
						for (var s = o - 2; s >= 0; s--) n.addNextSegment(i[s], !0)
					} else {
						var a = u5.simplify(t, r),
							u = a.length - 1;
						n.initSideSegments(a[0], a[1], ua.LEFT), n.addFirstSegment();
						for (var h = 2; h <= u; h++) n.addNextSegment(a[h], !0)
					}
					n.addLastSegment()
				}, ho.prototype.getSegGen = function(t) {
					return new hr(this._precisionModel, this._bufParams, t)
				}, ho.prototype.interfaces_ = function() {
					return []
				}, ho.prototype.getClass = function() {
					return ho
				}, ho.copyCoordinates = function(t) {
					for (var e = Array(t.length).fill(null), n = 0; n < e.length; n++) e[n] = new sw(t[n]);
					return e
				};
				var hs = function() {
						this._subgraphs = null, this._seg = new uZ, this._cga = new s9;
						var t = arguments[0];
						this._subgraphs = t
					},
					ha = {
						DepthSegment: {
							configurable: !0
						}
					};
				hs.prototype.findStabbedSegments = function() {
					if (1 == arguments.length) {
						for (var t = arguments[0], e = new ad, n = this._subgraphs.iterator(); n.hasNext();) {
							var r = n.next(),
								i = r.getEnvelope();
							t.y < i.getMinY() || t.y > i.getMaxY() || this.findStabbedSegments(t, r.getDirectedEdges(), e)
						}
						return e
					}
					if (3 == arguments.length) {
						if (sO(arguments[2], ag) && arguments[0] instanceof sw && arguments[1] instanceof uN) {
							for (var o = arguments[0], s = arguments[1], a = arguments[2], u = s.getEdge().getCoordinates(), h = 0; h < u.length - 1; h++)
								if (this._seg.p0 = u[h], this._seg.p1 = u[h + 1], this._seg.p0.y > this._seg.p1.y && this._seg.reverse(), !(Math.max(this._seg.p0.x, this._seg.p1.x) < o.x) && !(this._seg.isHorizontal() || o.y < this._seg.p0.y || o.y > this._seg.p1.y || s9.computeOrientation(this._seg.p0, this._seg.p1, o) === s9.RIGHT)) {
									var c = s.getDepth(ua.LEFT);
									this._seg.p0.equals(u[h]) || (c = s.getDepth(ua.RIGHT));
									var l = new hu(this._seg, c);
									a.add(l)
								}
						} else if (sO(arguments[2], ag) && arguments[0] instanceof sw && sO(arguments[1], ag))
							for (var p = arguments[0], f = arguments[1], g = arguments[2], d = f.iterator(); d.hasNext();) {
								var y = d.next();
								y.isForward() && this.findStabbedSegments(p, y, g)
							}
					}
				}, hs.prototype.getDepth = function(t) {
					var e = this.findStabbedSegments(t);
					return 0 === e.size() ? 0 : uA.min(e)._leftDepth
				}, hs.prototype.interfaces_ = function() {
					return []
				}, hs.prototype.getClass = function() {
					return hs
				}, ha.DepthSegment.get = function() {
					return hu
				}, Object.defineProperties(hs, ha);
				var hu = function() {
					this._upwardSeg = null, this._leftDepth = null;
					var t = arguments[0],
						e = arguments[1];
					this._upwardSeg = new uZ(t), this._leftDepth = e
				};
				hu.prototype.compareTo = function(t) {
					if (this._upwardSeg.minX() >= t._upwardSeg.maxX()) return 1;
					if (this._upwardSeg.maxX() <= t._upwardSeg.minX()) return -1;
					var e = this._upwardSeg.orientationIndex(t._upwardSeg);
					return 0 !== e ? e : 0 != (e = -1 * t._upwardSeg.orientationIndex(this._upwardSeg)) ? e : this._upwardSeg.compareTo(t._upwardSeg)
				}, hu.prototype.compareX = function(t, e) {
					var n = t.p0.compareTo(e.p0);
					return 0 !== n ? n : t.p1.compareTo(e.p1)
				}, hu.prototype.toString = function() {
					return this._upwardSeg.toString()
				}, hu.prototype.interfaces_ = function() {
					return [sb]
				}, hu.prototype.getClass = function() {
					return hu
				};
				var hh = function(t, e, n) {
					this.p0 = t || null, this.p1 = e || null, this.p2 = n || null
				};
				hh.prototype.area = function() {
					return hh.area(this.p0, this.p1, this.p2)
				}, hh.prototype.signedArea = function() {
					return hh.signedArea(this.p0, this.p1, this.p2)
				}, hh.prototype.interpolateZ = function(t) {
					if (null === t) throw new sv("Supplied point is null.");
					return hh.interpolateZ(t, this.p0, this.p1, this.p2)
				}, hh.prototype.longestSideLength = function() {
					return hh.longestSideLength(this.p0, this.p1, this.p2)
				}, hh.prototype.isAcute = function() {
					return hh.isAcute(this.p0, this.p1, this.p2)
				}, hh.prototype.circumcentre = function() {
					return hh.circumcentre(this.p0, this.p1, this.p2)
				}, hh.prototype.area3D = function() {
					return hh.area3D(this.p0, this.p1, this.p2)
				}, hh.prototype.centroid = function() {
					return hh.centroid(this.p0, this.p1, this.p2)
				}, hh.prototype.inCentre = function() {
					return hh.inCentre(this.p0, this.p1, this.p2)
				}, hh.prototype.interfaces_ = function() {
					return []
				}, hh.prototype.getClass = function() {
					return hh
				}, hh.area = function(t, e, n) {
					return Math.abs(((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2)
				}, hh.signedArea = function(t, e, n) {
					return ((n.x - t.x) * (e.y - t.y) - (e.x - t.x) * (n.y - t.y)) / 2
				}, hh.det = function(t, e, n, r) {
					return t * r - e * n
				}, hh.interpolateZ = function(t, e, n, r) {
					var i = e.x,
						o = e.y,
						s = n.x - i,
						a = r.x - i,
						u = n.y - o,
						h = r.y - o,
						c = s * h - a * u,
						l = t.x - i,
						p = t.y - o;
					return e.z + (h * l - a * p) / c * (n.z - e.z) + (-u * l + s * p) / c * (r.z - e.z)
				}, hh.longestSideLength = function(t, e, n) {
					var r = t.distance(e),
						i = e.distance(n),
						o = n.distance(t),
						s = r;
					return i > s && (s = i), o > s && (s = o), s
				}, hh.isAcute = function(t, e, n) {
					return !!he.isAcute(t, e, n) && !!he.isAcute(e, n, t) && !!he.isAcute(n, t, e)
				}, hh.circumcentre = function(t, e, n) {
					var r = n.x,
						i = n.y,
						o = t.x - r,
						s = t.y - i,
						a = e.x - r,
						u = e.y - i,
						h = 2 * hh.det(o, s, a, u);
					return new sw(r - hh.det(s, o * o + s * s, u, a * a + u * u) / h, i + hh.det(o, o * o + s * s, a, a * a + u * u) / h)
				}, hh.perpendicularBisector = function(t, e) {
					var n = e.x - t.x,
						r = e.y - t.y,
						i = new sV(t.x + n / 2, t.y + r / 2, 1),
						o = new sV(t.x - r + n / 2, t.y + n + r / 2, 1);
					return new sV(i, o)
				}, hh.angleBisector = function(t, e, n) {
					var r = e.distance(t),
						i = r / (r + e.distance(n)),
						o = n.x - t.x,
						s = n.y - t.y;
					return new sw(t.x + i * o, t.y + i * s)
				}, hh.area3D = function(t, e, n) {
					var r = e.x - t.x,
						i = e.y - t.y,
						o = e.z - t.z,
						s = n.x - t.x,
						a = n.y - t.y,
						u = n.z - t.z,
						h = i * u - o * a,
						c = o * s - r * u,
						l = r * a - i * s;
					return Math.sqrt(h * h + c * c + l * l) / 2
				}, hh.centroid = function(t, e, n) {
					return new sw((t.x + e.x + n.x) / 3, (t.y + e.y + n.y) / 3)
				}, hh.inCentre = function(t, e, n) {
					var r = e.distance(n),
						i = t.distance(n),
						o = t.distance(e),
						s = r + i + o;
					return new sw((r * t.x + i * e.x + o * n.x) / s, (r * t.y + i * e.y + o * n.y) / s)
				};
				var hc = function() {
					this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new ad;
					var t = arguments[0],
						e = arguments[1],
						n = arguments[2];
					this._inputGeom = t, this._distance = e, this._curveBuilder = n
				};
				hc.prototype.addPoint = function(t) {
					if (this._distance <= 0) return null;
					var e = t.getCoordinates(),
						n = this._curveBuilder.getLineCurve(e, this._distance);
					this.addCurve(n, sL.EXTERIOR, sL.INTERIOR)
				}, hc.prototype.addPolygon = function(t) {
					var e = this._distance,
						n = ua.LEFT;
					this._distance < 0 && (e = -this._distance, n = ua.RIGHT);
					var r = t.getExteriorRing(),
						i = am.removeRepeatedPoints(r.getCoordinates());
					if (this._distance < 0 && this.isErodedCompletely(r, this._distance) || this._distance <= 0 && i.length < 3) return null;
					this.addPolygonRing(i, e, n, sL.EXTERIOR, sL.INTERIOR);
					for (var o = 0; o < t.getNumInteriorRing(); o++) {
						var s = t.getInteriorRingN(o),
							a = am.removeRepeatedPoints(s.getCoordinates());
						this._distance > 0 && this.isErodedCompletely(s, -this._distance) || this.addPolygonRing(a, e, ua.opposite(n), sL.INTERIOR, sL.EXTERIOR)
					}
				}, hc.prototype.isTriangleErodedCompletely = function(t, e) {
					var n = new hh(t[0], t[1], t[2]),
						r = n.inCentre();
					return s9.distancePointLine(r, n.p0, n.p1) < Math.abs(e)
				}, hc.prototype.addLineString = function(t) {
					if (this._distance <= 0 && !this._curveBuilder.getBufferParameters().isSingleSided()) return null;
					var e = am.removeRepeatedPoints(t.getCoordinates()),
						n = this._curveBuilder.getLineCurve(e, this._distance);
					this.addCurve(n, sL.EXTERIOR, sL.INTERIOR)
				}, hc.prototype.addCurve = function(t, e, n) {
					if (null === t || t.length < 2) return null;
					var r = new uJ(t, new ug(0, sL.BOUNDARY, e, n));
					this._curveList.add(r)
				}, hc.prototype.getCurves = function() {
					return this.add(this._inputGeom), this._curveList
				}, hc.prototype.addPolygonRing = function(t, e, n, r, i) {
					if (0 === e && t.length < aH.MINIMUM_VALID_SIZE) return null;
					var o = r,
						s = i;
					t.length >= aH.MINIMUM_VALID_SIZE && s9.isCCW(t) && (o = i, s = r, n = ua.opposite(n));
					var a = this._curveBuilder.getRingCurve(t, n, e);
					this.addCurve(a, o, s)
				}, hc.prototype.add = function(t) {
					if (t.isEmpty()) return null;
					t instanceof aY ? this.addPolygon(t) : t instanceof az ? this.addLineString(t) : t instanceof aX ? this.addPoint(t) : t instanceof aV ? this.addCollection(t) : t instanceof aA ? this.addCollection(t) : t instanceof aW ? this.addCollection(t) : t instanceof aD && this.addCollection(t)
				}, hc.prototype.isErodedCompletely = function(t, e) {
					var n = t.getCoordinates();
					if (n.length < 4) return e < 0;
					if (4 === n.length) return this.isTriangleErodedCompletely(n, e);
					var r = t.getEnvelopeInternal(),
						i = Math.min(r.getHeight(), r.getWidth());
					return e < 0 && 2 * Math.abs(e) > i
				}, hc.prototype.addCollection = function(t) {
					for (var e = 0; e < t.getNumGeometries(); e++) {
						var n = t.getGeometryN(e);
						this.add(n)
					}
				}, hc.prototype.interfaces_ = function() {
					return []
				}, hc.prototype.getClass = function() {
					return hc
				};
				var hl = function() {};
				hl.prototype.locate = function(t) {}, hl.prototype.interfaces_ = function() {
					return []
				}, hl.prototype.getClass = function() {
					return hl
				};
				var hp = function() {
					this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
					var t = arguments[0];
					this._parent = t, this._atStart = !0, this._index = 0, this._max = t.getNumGeometries()
				};
				hp.prototype.next = function() {
					if (this._atStart) return this._atStart = !1, hp.isAtomic(this._parent) && this._index++, this._parent;
					if (null !== this._subcollectionIterator) {
						if (this._subcollectionIterator.hasNext()) return this._subcollectionIterator.next();
						this._subcollectionIterator = null
					}
					if (this._index >= this._max) throw new rb;
					var t = this._parent.getGeometryN(this._index++);
					return t instanceof aD ? (this._subcollectionIterator = new hp(t), this._subcollectionIterator.next()) : t
				}, hp.prototype.remove = function() {
					throw Error(this.getClass().getName())
				}, hp.prototype.hasNext = function() {
					if (this._atStart) return !0;
					if (null !== this._subcollectionIterator) {
						if (this._subcollectionIterator.hasNext()) return !0;
						this._subcollectionIterator = null
					}
					return !(this._index >= this._max)
				}, hp.prototype.interfaces_ = function() {
					return [af]
				}, hp.prototype.getClass = function() {
					return hp
				}, hp.isAtomic = function(t) {
					return !(t instanceof aD)
				};
				var hf = function() {
					this._geom = null;
					var t = arguments[0];
					this._geom = t
				};
				hf.prototype.locate = function(t) {
					return hf.locate(t, this._geom)
				}, hf.prototype.interfaces_ = function() {
					return [hl]
				}, hf.prototype.getClass = function() {
					return hf
				}, hf.isPointInRing = function(t, e) {
					return !!e.getEnvelopeInternal().intersects(t) && s9.isPointInRing(t, e.getCoordinates())
				}, hf.containsPointInPolygon = function(t, e) {
					if (e.isEmpty()) return !1;
					var n = e.getExteriorRing();
					if (!hf.isPointInRing(t, n)) return !1;
					for (var r = 0; r < e.getNumInteriorRing(); r++) {
						var i = e.getInteriorRingN(r);
						if (hf.isPointInRing(t, i)) return !1
					}
					return !0
				}, hf.containsPoint = function(t, e) {
					if (e instanceof aY) return hf.containsPointInPolygon(t, e);
					if (e instanceof aD)
						for (var n = new hp(e); n.hasNext();) {
							var r = n.next();
							if (r !== e && hf.containsPoint(t, r)) return !0
						}
					return !1
				}, hf.locate = function(t, e) {
					return e.isEmpty() ? sL.EXTERIOR : hf.containsPoint(t, e) ? sL.INTERIOR : sL.EXTERIOR
				};
				var hg = function() {
					this._edgeMap = new rP, this._edgeList = null, this._ptInAreaLocation = [sL.NONE, sL.NONE]
				};
				hg.prototype.getNextCW = function(t) {
					this.getEdges();
					var e = this._edgeList.indexOf(t),
						n = e - 1;
					return 0 === e && (n = this._edgeList.size() - 1), this._edgeList.get(n)
				}, hg.prototype.propagateSideLabels = function(t) {
					for (var e = sL.NONE, n = this.iterator(); n.hasNext();) {
						var r = n.next().getLabel();
						r.isArea(t) && r.getLocation(t, ua.LEFT) !== sL.NONE && (e = r.getLocation(t, ua.LEFT))
					}
					if (e === sL.NONE) return null;
					for (var i = e, o = this.iterator(); o.hasNext();) {
						var s = o.next(),
							a = s.getLabel();
						if (a.getLocation(t, ua.ON) === sL.NONE && a.setLocation(t, ua.ON, i), a.isArea(t)) {
							var u = a.getLocation(t, ua.LEFT),
								h = a.getLocation(t, ua.RIGHT);
							if (h !== sL.NONE) {
								if (h !== i) throw new uc("side location conflict", s.getCoordinate());
								u === sL.NONE && s2.shouldNeverReachHere("found single null side (at " + s.getCoordinate() + ")"), i = u
							} else s2.isTrue(a.getLocation(t, ua.LEFT) === sL.NONE, "found single null side"), a.setLocation(t, ua.RIGHT, i), a.setLocation(t, ua.LEFT, i)
						}
					}
				}, hg.prototype.getCoordinate = function() {
					var t = this.iterator();
					return t.hasNext() ? t.next().getCoordinate() : null
				}, hg.prototype.print = function(t) {
					sY.out.println("EdgeEndStar:   " + this.getCoordinate());
					for (var e = this.iterator(); e.hasNext();) e.next().print(t)
				}, hg.prototype.isAreaLabelsConsistent = function(t) {
					return this.computeEdgeEndLabels(t.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0)
				}, hg.prototype.checkAreaLabelsConsistent = function(t) {
					var e = this.getEdges();
					if (0 >= e.size()) return !0;
					var n = e.size() - 1,
						r = e.get(n).getLabel().getLocation(t, ua.LEFT);
					s2.isTrue(r !== sL.NONE, "Found unlabelled area edge");
					for (var i = r, o = this.iterator(); o.hasNext();) {
						var s = o.next().getLabel();
						s2.isTrue(s.isArea(t), "Found non-area edge");
						var a = s.getLocation(t, ua.LEFT),
							u = s.getLocation(t, ua.RIGHT);
						if (a === u || u !== i) return !1;
						i = a
					}
					return !0
				}, hg.prototype.findIndex = function(t) {
					this.iterator();
					for (var e = 0; e < this._edgeList.size(); e++)
						if (this._edgeList.get(e) === t) return e;
					return -1
				}, hg.prototype.iterator = function() {
					return this.getEdges().iterator()
				}, hg.prototype.getEdges = function() {
					return null === this._edgeList && (this._edgeList = new ad(this._edgeMap.values())), this._edgeList
				}, hg.prototype.getLocation = function(t, e, n) {
					return this._ptInAreaLocation[t] === sL.NONE && (this._ptInAreaLocation[t] = hf.locate(e, n[t].getGeometry())), this._ptInAreaLocation[t]
				}, hg.prototype.toString = function() {
					var t = new sD;
					t.append("EdgeEndStar:   " + this.getCoordinate()), t.append("\n");
					for (var e = this.iterator(); e.hasNext();) {
						var n = e.next();
						t.append(n), t.append("\n")
					}
					return t.toString()
				}, hg.prototype.computeEdgeEndLabels = function(t) {
					for (var e = this.iterator(); e.hasNext();) e.next().computeLabel(t)
				}, hg.prototype.computeLabelling = function(t) {
					this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
					for (var e = [!1, !1], n = this.iterator(); n.hasNext();)
						for (var r = n.next().getLabel(), i = 0; i < 2; i++) r.isLine(i) && r.getLocation(i) === sL.BOUNDARY && (e[i] = !0);
					for (var o = this.iterator(); o.hasNext();)
						for (var s = o.next(), a = s.getLabel(), u = 0; u < 2; u++)
							if (a.isAnyNull(u)) {
								var h = sL.NONE;
								if (e[u]) h = sL.EXTERIOR;
								else {
									var c = s.getCoordinate();
									h = this.getLocation(u, c, t)
								}
								a.setAllLocationsIfNull(u, h)
							}
				}, hg.prototype.getDegree = function() {
					return this._edgeMap.size()
				}, hg.prototype.insertEdgeEnd = function(t, e) {
					this._edgeMap.put(t, e), this._edgeList = null
				}, hg.prototype.interfaces_ = function() {
					return []
				}, hg.prototype.getClass = function() {
					return hg
				};
				var hd = function(t) {
						function e() {
							t.call(this), this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.linkResultDirectedEdges = function() {
							this.getResultAreaEdges();
							for (var t = null, e = null, n = this._SCANNING_FOR_INCOMING, r = 0; r < this._resultAreaEdgeList.size(); r++) {
								var i = this._resultAreaEdgeList.get(r),
									o = i.getSym();
								if (i.getLabel().isArea()) switch (null === t && i.isInResult() && (t = i), n) {
									case this._SCANNING_FOR_INCOMING:
										if (!o.isInResult()) continue;
										e = o, n = this._LINKING_TO_OUTGOING;
										break;
									case this._LINKING_TO_OUTGOING:
										if (!i.isInResult()) continue;
										e.setNext(i), n = this._SCANNING_FOR_INCOMING
								}
							}
							if (n === this._LINKING_TO_OUTGOING) {
								if (null === t) throw new uc("no outgoing dirEdge found", this.getCoordinate());
								s2.isTrue(t.isInResult(), "unable to link last incoming dirEdge"), e.setNext(t)
							}
						}, e.prototype.insert = function(t) {
							this.insertEdgeEnd(t, t)
						}, e.prototype.getRightmostEdge = function() {
							var t = this.getEdges(),
								e = t.size();
							if (e < 1) return null;
							var n = t.get(0);
							if (1 === e) return n;
							var r = t.get(e - 1),
								i = n.getQuadrant(),
								o = r.getQuadrant();
							return uE.isNorthern(i) && uE.isNorthern(o) ? n : uE.isNorthern(i) || uE.isNorthern(o) ? 0 !== n.getDy() ? n : 0 !== r.getDy() ? r : (s2.shouldNeverReachHere("found two horizontal edges incident on node"), null) : r
						}, e.prototype.print = function(t) {
							sY.out.println("DirectedEdgeStar: " + this.getCoordinate());
							for (var e = this.iterator(); e.hasNext();) {
								var n = e.next();
								t.print("out "), n.print(t), t.println(), t.print("in "), n.getSym().print(t), t.println()
							}
						}, e.prototype.getResultAreaEdges = function() {
							if (null !== this._resultAreaEdgeList) return this._resultAreaEdgeList;
							this._resultAreaEdgeList = new ad;
							for (var t = this.iterator(); t.hasNext();) {
								var e = t.next();
								(e.isInResult() || e.getSym().isInResult()) && this._resultAreaEdgeList.add(e)
							}
							return this._resultAreaEdgeList
						}, e.prototype.updateLabelling = function(t) {
							for (var e = this.iterator(); e.hasNext();) {
								var n = e.next().getLabel();
								n.setAllLocationsIfNull(0, t.getLocation(0)), n.setAllLocationsIfNull(1, t.getLocation(1))
							}
						}, e.prototype.linkAllDirectedEdges = function() {
							this.getEdges();
							for (var t = null, e = null, n = this._edgeList.size() - 1; n >= 0; n--) {
								var r = this._edgeList.get(n),
									i = r.getSym();
								null === e && (e = i), null !== t && i.setNext(t), t = r
							}
							e.setNext(t)
						}, e.prototype.computeDepths = function() {
							if (1 == arguments.length) {
								var t = arguments[0],
									e = this.findIndex(t),
									n = t.getDepth(ua.LEFT),
									r = t.getDepth(ua.RIGHT),
									i = this.computeDepths(e + 1, this._edgeList.size(), n);
								if (this.computeDepths(0, e, i) !== r) throw new uc("depth mismatch at " + t.getCoordinate())
							} else if (3 == arguments.length) {
								for (var o = arguments[0], s = arguments[1], a = arguments[2], u = o; u < s; u++) {
									var h = this._edgeList.get(u);
									h.setEdgeDepths(ua.RIGHT, a), a = h.getDepth(ua.LEFT)
								}
								return a
							}
						}, e.prototype.mergeSymLabels = function() {
							for (var t = this.iterator(); t.hasNext();) {
								var e = t.next();
								e.getLabel().merge(e.getSym().getLabel())
							}
						}, e.prototype.linkMinimalDirectedEdges = function(t) {
							for (var e = null, n = null, r = this._SCANNING_FOR_INCOMING, i = this._resultAreaEdgeList.size() - 1; i >= 0; i--) {
								var o = this._resultAreaEdgeList.get(i),
									s = o.getSym();
								switch (null === e && o.getEdgeRing() === t && (e = o), r) {
									case this._SCANNING_FOR_INCOMING:
										if (s.getEdgeRing() !== t) continue;
										n = s, r = this._LINKING_TO_OUTGOING;
										break;
									case this._LINKING_TO_OUTGOING:
										if (o.getEdgeRing() !== t) continue;
										n.setNextMin(o), r = this._SCANNING_FOR_INCOMING
								}
							}
							r === this._LINKING_TO_OUTGOING && (s2.isTrue(null !== e, "found null for first outgoing dirEdge"), s2.isTrue(e.getEdgeRing() === t, "unable to link last incoming dirEdge"), n.setNextMin(e))
						}, e.prototype.getOutgoingDegree = function() {
							if (0 == arguments.length) {
								for (var t = 0, e = this.iterator(); e.hasNext();) e.next().isInResult() && t++;
								return t
							}
							if (1 == arguments.length) {
								for (var n = arguments[0], r = 0, i = this.iterator(); i.hasNext();) i.next().getEdgeRing() === n && r++;
								return r
							}
						}, e.prototype.getLabel = function() {
							return this._label
						}, e.prototype.findCoveredLineEdges = function() {
							for (var t = sL.NONE, e = this.iterator(); e.hasNext();) {
								var n = e.next(),
									r = n.getSym();
								if (!n.isLineEdge()) {
									if (n.isInResult()) {
										t = sL.INTERIOR;
										break
									}
									if (r.isInResult()) {
										t = sL.EXTERIOR;
										break
									}
								}
							}
							if (t === sL.NONE) return null;
							for (var i = t, o = this.iterator(); o.hasNext();) {
								var s = o.next(),
									a = s.getSym();
								s.isLineEdge() ? s.getEdge().setCovered(i === sL.INTERIOR) : (s.isInResult() && (i = sL.EXTERIOR), a.isInResult() && (i = sL.INTERIOR))
							}
						}, e.prototype.computeLabelling = function(e) {
							t.prototype.computeLabelling.call(this, e), this._label = new ug(sL.NONE);
							for (var n = this.iterator(); n.hasNext();)
								for (var r = n.next().getEdge().getLabel(), i = 0; i < 2; i++) {
									var o = r.getLocation(i);
									o !== sL.INTERIOR && o !== sL.BOUNDARY || this._label.setLocation(i, sL.INTERIOR)
								}
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, e
					}(hg),
					hy = function(t) {
						function e() {
							t.apply(this, arguments)
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.createNode = function(t) {
							return new uv(t, new hd)
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, e
					}(uw),
					h_ = function t() {
						this._pts = null, this._orientation = null;
						var e = arguments[0];
						this._pts = e, this._orientation = t.orientation(e)
					};
				h_.prototype.compareTo = function(t) {
					return h_.compareOriented(this._pts, this._orientation, t._pts, t._orientation)
				}, h_.prototype.interfaces_ = function() {
					return [sb]
				}, h_.prototype.getClass = function() {
					return h_
				}, h_.orientation = function(t) {
					return 1 === am.increasingDirection(t)
				}, h_.compareOriented = function(t, e, n, r) {
					for (var i = e ? 1 : -1, o = r ? 1 : -1, s = e ? t.length : -1, a = r ? n.length : -1, u = e ? 0 : t.length - 1, h = r ? 0 : n.length - 1;;) {
						var c = t[u].compareTo(n[h]);
						if (0 !== c) return c;
						var l = (u += i) === s,
							p = (h += o) === a;
						if (l && !p) return -1;
						if (!l && p) return 1;
						if (l && p) return 0
					}
				};
				var hm = function() {
					this._edges = new ad, this._ocaMap = new rP
				};
				hm.prototype.print = function(t) {
					t.print("MULTILINESTRING ( ");
					for (var e = 0; e < this._edges.size(); e++) {
						var n = this._edges.get(e);
						e > 0 && t.print(","), t.print("(");
						for (var r = n.getCoordinates(), i = 0; i < r.length; i++) i > 0 && t.print(","), t.print(r[i].x + " " + r[i].y);
						t.println(")")
					}
					t.print(")  ")
				}, hm.prototype.addAll = function(t) {
					for (var e = t.iterator(); e.hasNext();) this.add(e.next())
				}, hm.prototype.findEdgeIndex = function(t) {
					for (var e = 0; e < this._edges.size(); e++)
						if (this._edges.get(e).equals(t)) return e;
					return -1
				}, hm.prototype.iterator = function() {
					return this._edges.iterator()
				}, hm.prototype.getEdges = function() {
					return this._edges
				}, hm.prototype.get = function(t) {
					return this._edges.get(t)
				}, hm.prototype.findEqualEdge = function(t) {
					var e = new h_(t.getCoordinates());
					return this._ocaMap.get(e)
				}, hm.prototype.add = function(t) {
					this._edges.add(t);
					var e = new h_(t.getCoordinates());
					this._ocaMap.put(e, t)
				}, hm.prototype.interfaces_ = function() {
					return []
				}, hm.prototype.getClass = function() {
					return hm
				};
				var hv = function() {};
				hv.prototype.processIntersections = function(t, e, n, r) {}, hv.prototype.isDone = function() {}, hv.prototype.interfaces_ = function() {
					return []
				}, hv.prototype.getClass = function() {
					return hv
				};
				var hx = function() {
					this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
					var t = arguments[0];
					this._li = t
				};
				hx.prototype.isTrivialIntersection = function(t, e, n, r) {
					if (t === n && 1 === this._li.getIntersectionNum()) {
						if (hx.isAdjacentSegments(e, r)) return !0;
						if (t.isClosed()) {
							var i = t.size() - 1;
							if (0 === e && r === i || 0 === r && e === i) return !0
						}
					}
					return !1
				}, hx.prototype.getProperIntersectionPoint = function() {
					return this._properIntersectionPoint
				}, hx.prototype.hasProperInteriorIntersection = function() {
					return this._hasProperInterior
				}, hx.prototype.getLineIntersector = function() {
					return this._li
				}, hx.prototype.hasProperIntersection = function() {
					return this._hasProper
				}, hx.prototype.processIntersections = function(t, e, n, r) {
					if (t === n && e === r) return null;
					this.numTests++;
					var i = t.getCoordinates()[e],
						o = t.getCoordinates()[e + 1],
						s = n.getCoordinates()[r],
						a = n.getCoordinates()[r + 1];
					this._li.computeIntersection(i, o, s, a), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(t, e, n, r) || (this._hasIntersection = !0, t.addIntersections(this._li, e, 0), n.addIntersections(this._li, r, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)))
				}, hx.prototype.hasIntersection = function() {
					return this._hasIntersection
				}, hx.prototype.isDone = function() {
					return !1
				}, hx.prototype.hasInteriorIntersection = function() {
					return this._hasInterior
				}, hx.prototype.interfaces_ = function() {
					return [hv]
				}, hx.prototype.getClass = function() {
					return hx
				}, hx.isAdjacentSegments = function(t, e) {
					return 1 === Math.abs(t - e)
				};
				var hE = function() {
					this.coord = null, this.segmentIndex = null, this.dist = null;
					var t = arguments[0],
						e = arguments[1],
						n = arguments[2];
					this.coord = new sw(t), this.segmentIndex = e, this.dist = n
				};
				hE.prototype.getSegmentIndex = function() {
					return this.segmentIndex
				}, hE.prototype.getCoordinate = function() {
					return this.coord
				}, hE.prototype.print = function(t) {
					t.print(this.coord), t.print(" seg # = " + this.segmentIndex), t.println(" dist = " + this.dist)
				}, hE.prototype.compareTo = function(t) {
					return this.compare(t.segmentIndex, t.dist)
				}, hE.prototype.isEndPoint = function(t) {
					return 0 === this.segmentIndex && 0 === this.dist || this.segmentIndex === t
				}, hE.prototype.toString = function() {
					return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist
				}, hE.prototype.getDistance = function() {
					return this.dist
				}, hE.prototype.compare = function(t, e) {
					return this.segmentIndex < t ? -1 : this.segmentIndex > t ? 1 : this.dist < e ? -1 : this.dist > e ? 1 : 0
				}, hE.prototype.interfaces_ = function() {
					return [sb]
				}, hE.prototype.getClass = function() {
					return hE
				};
				var hb = function() {
					this._nodeMap = new rP, this.edge = null;
					var t = arguments[0];
					this.edge = t
				};
				hb.prototype.print = function(t) {
					t.println("Intersections:");
					for (var e = this.iterator(); e.hasNext();) e.next().print(t)
				}, hb.prototype.iterator = function() {
					return this._nodeMap.values().iterator()
				}, hb.prototype.addSplitEdges = function(t) {
					this.addEndpoints();
					for (var e = this.iterator(), n = e.next(); e.hasNext();) {
						var r = e.next(),
							i = this.createSplitEdge(n, r);
						t.add(i), n = r
					}
				}, hb.prototype.addEndpoints = function() {
					var t = this.edge.pts.length - 1;
					this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[t], t, 0)
				}, hb.prototype.createSplitEdge = function(t, e) {
					var n = e.segmentIndex - t.segmentIndex + 2,
						r = this.edge.pts[e.segmentIndex],
						i = e.dist > 0 || !e.coord.equals2D(r);
					i || n--;
					var o = Array(n).fill(null),
						s = 0;
					o[s++] = new sw(t.coord);
					for (var a = t.segmentIndex + 1; a <= e.segmentIndex; a++) o[s++] = this.edge.pts[a];
					return i && (o[s] = e.coord), new hS(o, new ug(this.edge._label))
				}, hb.prototype.add = function(t, e, n) {
					var r = new hE(t, e, n),
						i = this._nodeMap.get(r);
					return null !== i ? i : (this._nodeMap.put(r, r), r)
				}, hb.prototype.isIntersection = function(t) {
					for (var e = this.iterator(); e.hasNext();)
						if (e.next().coord.equals(t)) return !0;
					return !1
				}, hb.prototype.interfaces_ = function() {
					return []
				}, hb.prototype.getClass = function() {
					return hb
				};
				var hI = function() {};
				hI.prototype.getChainStartIndices = function(t) {
					var e = 0,
						n = new ad;
					n.add(new sA(e));
					do {
						var r = this.findChainEnd(t, e);
						n.add(new sA(r)), e = r
					} while (e < t.length - 1);
					return hI.toIntArray(n)
				}, hI.prototype.findChainEnd = function(t, e) {
					for (var n = uE.quadrant(t[e], t[e + 1]), r = e + 1; r < t.length && uE.quadrant(t[r - 1], t[r]) === n;) r++;
					return r - 1
				}, hI.prototype.interfaces_ = function() {
					return []
				}, hI.prototype.getClass = function() {
					return hI
				}, hI.toIntArray = function(t) {
					for (var e = Array(t.size()).fill(null), n = 0; n < e.length; n++) e[n] = t.get(n).intValue();
					return e
				};
				var hN = function() {
					this.e = null, this.pts = null, this.startIndex = null, this.env1 = new sH, this.env2 = new sH;
					var t = arguments[0];
					this.e = t, this.pts = t.getCoordinates();
					var e = new hI;
					this.startIndex = e.getChainStartIndices(this.pts)
				};
				hN.prototype.getCoordinates = function() {
					return this.pts
				}, hN.prototype.getMaxX = function(t) {
					var e = this.pts[this.startIndex[t]].x,
						n = this.pts[this.startIndex[t + 1]].x;
					return e > n ? e : n
				}, hN.prototype.getMinX = function(t) {
					var e = this.pts[this.startIndex[t]].x,
						n = this.pts[this.startIndex[t + 1]].x;
					return e < n ? e : n
				}, hN.prototype.computeIntersectsForChain = function() {
					if (4 == arguments.length) {
						var t = arguments[0],
							e = arguments[1],
							n = arguments[2],
							r = arguments[3];
						this.computeIntersectsForChain(this.startIndex[t], this.startIndex[t + 1], e, e.startIndex[n], e.startIndex[n + 1], r)
					} else if (6 == arguments.length) {
						var i = arguments[0],
							o = arguments[1],
							s = arguments[2],
							a = arguments[3],
							u = arguments[4],
							h = arguments[5],
							c = this.pts[i],
							l = this.pts[o],
							p = s.pts[a],
							f = s.pts[u];
						if (o - i == 1 && u - a == 1) return h.addIntersections(this.e, i, s.e, a), null;
						if (this.env1.init(c, l), this.env2.init(p, f), !this.env1.intersects(this.env2)) return null;
						var g = Math.trunc((i + o) / 2),
							d = Math.trunc((a + u) / 2);
						i < g && (a < d && this.computeIntersectsForChain(i, g, s, a, d, h), d < u && this.computeIntersectsForChain(i, g, s, d, u, h)), g < o && (a < d && this.computeIntersectsForChain(g, o, s, a, d, h), d < u && this.computeIntersectsForChain(g, o, s, d, u, h))
					}
				}, hN.prototype.getStartIndexes = function() {
					return this.startIndex
				}, hN.prototype.computeIntersects = function(t, e) {
					for (var n = 0; n < this.startIndex.length - 1; n++)
						for (var r = 0; r < t.startIndex.length - 1; r++) this.computeIntersectsForChain(n, t, r, e)
				}, hN.prototype.interfaces_ = function() {
					return []
				}, hN.prototype.getClass = function() {
					return hN
				};
				var hw = function t() {
						this._depth = [, , ].fill().map(function() {
							return [, , , ]
						});
						for (var e = 0; e < 2; e++)
							for (var n = 0; n < 3; n++) this._depth[e][n] = t.NULL_VALUE
					},
					hC = {
						NULL_VALUE: {
							configurable: !0
						}
					};
				hw.prototype.getDepth = function(t, e) {
					return this._depth[t][e]
				}, hw.prototype.setDepth = function(t, e, n) {
					this._depth[t][e] = n
				}, hw.prototype.isNull = function() {
					if (0 == arguments.length) {
						for (var t = 0; t < 2; t++)
							for (var e = 0; e < 3; e++)
								if (this._depth[t][e] !== hw.NULL_VALUE) return !1;
						return !0
					}
					if (1 == arguments.length) {
						var n = arguments[0];
						return this._depth[n][1] === hw.NULL_VALUE
					}
					if (2 == arguments.length) {
						var r = arguments[0],
							i = arguments[1];
						return this._depth[r][i] === hw.NULL_VALUE
					}
				}, hw.prototype.normalize = function() {
					for (var t = 0; t < 2; t++)
						if (!this.isNull(t)) {
							var e = this._depth[t][1];
							this._depth[t][2] < e && (e = this._depth[t][2]), e < 0 && (e = 0);
							for (var n = 1; n < 3; n++) {
								var r = 0;
								this._depth[t][n] > e && (r = 1), this._depth[t][n] = r
							}
						}
				}, hw.prototype.getDelta = function(t) {
					return this._depth[t][ua.RIGHT] - this._depth[t][ua.LEFT]
				}, hw.prototype.getLocation = function(t, e) {
					return this._depth[t][e] <= 0 ? sL.EXTERIOR : sL.INTERIOR
				}, hw.prototype.toString = function() {
					return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2]
				}, hw.prototype.add = function() {
					if (1 == arguments.length)
						for (var t = arguments[0], e = 0; e < 2; e++)
							for (var n = 1; n < 3; n++) {
								var r = t.getLocation(e, n);
								r !== sL.EXTERIOR && r !== sL.INTERIOR || (this.isNull(e, n) ? this._depth[e][n] = hw.depthAtLocation(r) : this._depth[e][n] += hw.depthAtLocation(r))
							} else if (3 == arguments.length) {
								var i = arguments[0],
									o = arguments[1];
								arguments[2] === sL.INTERIOR && this._depth[i][o]++
							}
				}, hw.prototype.interfaces_ = function() {
					return []
				}, hw.prototype.getClass = function() {
					return hw
				}, hw.depthAtLocation = function(t) {
					return t === sL.EXTERIOR ? 0 : t === sL.INTERIOR ? 1 : hw.NULL_VALUE
				}, hC.NULL_VALUE.get = function() {
					return -1
				}, Object.defineProperties(hw, hC);
				var hS = function(t) {
						function e() {
							if (t.call(this), this.pts = null, this._env = null, this.eiList = new hb(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new hw, this._depthDelta = 0, 1 == arguments.length) {
								var n = arguments[0];
								e.call(this, n, null)
							} else if (2 == arguments.length) {
								var r = arguments[0],
									i = arguments[1];
								this.pts = r, this._label = i
							}
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.getDepth = function() {
							return this._depth
						}, e.prototype.getCollapsedEdge = function() {
							var t = [, , ].fill(null);
							return t[0] = this.pts[0], t[1] = this.pts[1], new e(t, ug.toLineLabel(this._label))
						}, e.prototype.isIsolated = function() {
							return this._isIsolated
						}, e.prototype.getCoordinates = function() {
							return this.pts
						}, e.prototype.setIsolated = function(t) {
							this._isIsolated = t
						}, e.prototype.setName = function(t) {
							this._name = t
						}, e.prototype.equals = function(t) {
							if (!(t instanceof e) || this.pts.length !== t.pts.length) return !1;
							for (var n = !0, r = !0, i = this.pts.length, o = 0; o < this.pts.length; o++)
								if (this.pts[o].equals2D(t.pts[o]) || (n = !1), this.pts[o].equals2D(t.pts[--i]) || (r = !1), !n && !r) return !1;
							return !0
						}, e.prototype.getCoordinate = function() {
							if (0 == arguments.length) return this.pts.length > 0 ? this.pts[0] : null;
							if (1 == arguments.length) {
								var t = arguments[0];
								return this.pts[t]
							}
						}, e.prototype.print = function(t) {
							t.print("edge " + this._name + ": "), t.print("LINESTRING (");
							for (var e = 0; e < this.pts.length; e++) e > 0 && t.print(","), t.print(this.pts[e].x + " " + this.pts[e].y);
							t.print(")  " + this._label + " " + this._depthDelta)
						}, e.prototype.computeIM = function(t) {
							e.updateIM(this._label, t)
						}, e.prototype.isCollapsed = function() {
							return !!this._label.isArea() && 3 === this.pts.length && !!this.pts[0].equals(this.pts[2])
						}, e.prototype.isClosed = function() {
							return this.pts[0].equals(this.pts[this.pts.length - 1])
						}, e.prototype.getMaximumSegmentIndex = function() {
							return this.pts.length - 1
						}, e.prototype.getDepthDelta = function() {
							return this._depthDelta
						}, e.prototype.getNumPoints = function() {
							return this.pts.length
						}, e.prototype.printReverse = function(t) {
							t.print("edge " + this._name + ": ");
							for (var e = this.pts.length - 1; e >= 0; e--) t.print(this.pts[e] + " ");
							t.println("")
						}, e.prototype.getMonotoneChainEdge = function() {
							return null === this._mce && (this._mce = new hN(this)), this._mce
						}, e.prototype.getEnvelope = function() {
							if (null === this._env) {
								this._env = new sH;
								for (var t = 0; t < this.pts.length; t++) this._env.expandToInclude(this.pts[t])
							}
							return this._env
						}, e.prototype.addIntersection = function(t, e, n, r) {
							var i = new sw(t.getIntersection(r)),
								o = e,
								s = t.getEdgeDistance(n, r),
								a = o + 1;
							if (a < this.pts.length) {
								var u = this.pts[a];
								i.equals2D(u) && (o = a, s = 0)
							}
							this.eiList.add(i, o, s)
						}, e.prototype.toString = function() {
							var t = new sD;
							t.append("edge " + this._name + ": "), t.append("LINESTRING (");
							for (var e = 0; e < this.pts.length; e++) e > 0 && t.append(","), t.append(this.pts[e].x + " " + this.pts[e].y);
							return t.append(")  " + this._label + " " + this._depthDelta), t.toString()
						}, e.prototype.isPointwiseEqual = function(t) {
							if (this.pts.length !== t.pts.length) return !1;
							for (var e = 0; e < this.pts.length; e++)
								if (!this.pts[e].equals2D(t.pts[e])) return !1;
							return !0
						}, e.prototype.setDepthDelta = function(t) {
							this._depthDelta = t
						}, e.prototype.getEdgeIntersectionList = function() {
							return this.eiList
						}, e.prototype.addIntersections = function(t, e, n) {
							for (var r = 0; r < t.getIntersectionNum(); r++) this.addIntersection(t, e, n, r)
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, e.updateIM = function() {
							if (2 != arguments.length) return t.prototype.updateIM.apply(this, arguments);
							var e = arguments[0],
								n = arguments[1];
							n.setAtLeastIfValid(e.getLocation(0, ua.ON), e.getLocation(1, ua.ON), 1), e.isArea() && (n.setAtLeastIfValid(e.getLocation(0, ua.LEFT), e.getLocation(1, ua.LEFT), 2), n.setAtLeastIfValid(e.getLocation(0, ua.RIGHT), e.getLocation(1, ua.RIGHT), 2))
						}, e
					}(um),
					hM = function(t) {
						this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new hm, this._bufParams = t || null
					};
				hM.prototype.setWorkingPrecisionModel = function(t) {
					this._workingPrecisionModel = t
				}, hM.prototype.insertUniqueEdge = function(t) {
					var e = this._edgeList.findEqualEdge(t);
					if (null !== e) {
						var n = e.getLabel(),
							r = t.getLabel();
						e.isPointwiseEqual(t) || (r = new ug(t.getLabel())).flip(), n.merge(r);
						var i = hM.depthDelta(r),
							o = e.getDepthDelta() + i;
						e.setDepthDelta(o)
					} else this._edgeList.add(t), t.setDepthDelta(hM.depthDelta(t.getLabel()))
				}, hM.prototype.buildSubgraphs = function(t, e) {
					for (var n = new ad, r = t.iterator(); r.hasNext();) {
						var i = r.next(),
							o = i.getRightmostCoordinate(),
							s = new hs(n).getDepth(o);
						i.computeDepth(s), i.findResultEdges(), n.add(i), e.add(i.getDirectedEdges(), i.getNodes())
					}
				}, hM.prototype.createSubgraphs = function(t) {
					for (var e = new ad, n = t.getNodes().iterator(); n.hasNext();) {
						var r = n.next();
						if (!r.isVisited()) {
							var i = new up;
							i.create(r), e.add(i)
						}
					}
					return uA.sort(e, uA.reverseOrder()), e
				}, hM.prototype.createEmptyResultGeometry = function() {
					return this._geomFact.createPolygon()
				}, hM.prototype.getNoder = function(t) {
					if (null !== this._workingNoder) return this._workingNoder;
					var e = new u3,
						n = new s6;
					return n.setPrecisionModel(t), e.setSegmentIntersector(new hx(n)), e
				}, hM.prototype.buffer = function(t, e) {
					var n = this._workingPrecisionModel;
					null === n && (n = t.getPrecisionModel()), this._geomFact = t.getFactory();
					var r = new hc(t, e, new ho(n, this._bufParams)).getCurves();
					if (0 >= r.size()) return this.createEmptyResultGeometry();
					this.computeNodedEdges(r, n), this._graph = new uC(new hy), this._graph.addEdges(this._edgeList.getEdges());
					var i = this.createSubgraphs(this._graph),
						o = new uS(this._geomFact);
					this.buildSubgraphs(i, o);
					var s = o.getPolygons();
					return 0 >= s.size() ? this.createEmptyResultGeometry() : this._geomFact.buildGeometry(s)
				}, hM.prototype.computeNodedEdges = function(t, e) {
					var n = this.getNoder(e);
					n.computeNodes(t);
					for (var r = n.getNodedSubstrings().iterator(); r.hasNext();) {
						var i = r.next(),
							o = i.getCoordinates();
						if (2 !== o.length || !o[0].equals2D(o[1])) {
							var s = i.getData(),
								a = new hS(i.getCoordinates(), new ug(s));
							this.insertUniqueEdge(a)
						}
					}
				}, hM.prototype.setNoder = function(t) {
					this._workingNoder = t
				}, hM.prototype.interfaces_ = function() {
					return []
				}, hM.prototype.getClass = function() {
					return hM
				}, hM.depthDelta = function(t) {
					var e = t.getLocation(0, ua.LEFT),
						n = t.getLocation(0, ua.RIGHT);
					return e === sL.INTERIOR && n === sL.EXTERIOR ? 1 : e === sL.EXTERIOR && n === sL.INTERIOR ? -1 : 0
				}, hM.convertSegStrings = function(t) {
					for (var e = new a7, n = new ad; t.hasNext();) {
						var r = t.next(),
							i = e.createLineString(r.getCoordinates());
						n.add(i)
					}
					return e.buildGeometry(n)
				};
				var hL = function() {
					if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, 2 == arguments.length) {
						var t = arguments[0],
							e = arguments[1];
						this._noder = t, this._scaleFactor = e, this._offsetX = 0, this._offsetY = 0, this._isScaled = !this.isIntegerPrecision()
					} else if (4 == arguments.length) {
						var n = arguments[0],
							r = arguments[1],
							i = arguments[2],
							o = arguments[3];
						this._noder = n, this._scaleFactor = r, this._offsetX = i, this._offsetY = o, this._isScaled = !this.isIntegerPrecision()
					}
				};
				hL.prototype.rescale = function() {
					if (sO(arguments[0], al))
						for (var t = arguments[0].iterator(); t.hasNext();) {
							var e = t.next();
							this.rescale(e.getCoordinates())
						} else if (arguments[0] instanceof Array) {
							for (var n = arguments[0], r = 0; r < n.length; r++) n[r].x = n[r].x / this._scaleFactor + this._offsetX, n[r].y = n[r].y / this._scaleFactor + this._offsetY;
							2 === n.length && n[0].equals2D(n[1]) && sY.out.println(n)
						}
				}, hL.prototype.scale = function() {
					if (sO(arguments[0], al)) {
						for (var t = arguments[0], e = new ad, n = t.iterator(); n.hasNext();) {
							var r = n.next();
							e.add(new uJ(this.scale(r.getCoordinates()), r.getData()))
						}
						return e
					}
					if (arguments[0] instanceof Array) {
						for (var i = arguments[0], o = Array(i.length).fill(null), s = 0; s < i.length; s++) o[s] = new sw(Math.round((i[s].x - this._offsetX) * this._scaleFactor), Math.round((i[s].y - this._offsetY) * this._scaleFactor), i[s].z);
						return am.removeRepeatedPoints(o)
					}
				}, hL.prototype.isIntegerPrecision = function() {
					return 1 === this._scaleFactor
				}, hL.prototype.getNodedSubstrings = function() {
					var t = this._noder.getNodedSubstrings();
					return this._isScaled && this.rescale(t), t
				}, hL.prototype.computeNodes = function(t) {
					var e = t;
					this._isScaled && (e = this.scale(t)), this._noder.computeNodes(e)
				}, hL.prototype.interfaces_ = function() {
					return [u1]
				}, hL.prototype.getClass = function() {
					return hL
				};
				var hP = function() {
						this._li = new s6, this._segStrings = null;
						var t = arguments[0];
						this._segStrings = t
					},
					hO = {
						fact: {
							configurable: !0
						}
					};
				hP.prototype.checkEndPtVertexIntersections = function() {
					if (0 == arguments.length)
						for (var t = this._segStrings.iterator(); t.hasNext();) {
							var e = t.next().getCoordinates();
							this.checkEndPtVertexIntersections(e[0], this._segStrings), this.checkEndPtVertexIntersections(e[e.length - 1], this._segStrings)
						} else if (2 == arguments.length) {
							for (var n = arguments[0], r = arguments[1].iterator(); r.hasNext();)
								for (var i = r.next().getCoordinates(), o = 1; o < i.length - 1; o++)
									if (i[o].equals(n)) throw new s0("found endpt/interior pt intersection at index " + o + " :pt " + n)
						}
				}, hP.prototype.checkInteriorIntersections = function() {
					if (0 == arguments.length)
						for (var t = this._segStrings.iterator(); t.hasNext();)
							for (var e = t.next(), n = this._segStrings.iterator(); n.hasNext();) {
								var r = n.next();
								this.checkInteriorIntersections(e, r)
							} else if (2 == arguments.length)
								for (var i = arguments[0], o = arguments[1], s = i.getCoordinates(), a = o.getCoordinates(), u = 0; u < s.length - 1; u++)
									for (var h = 0; h < a.length - 1; h++) this.checkInteriorIntersections(i, u, o, h);
							else if (4 == arguments.length) {
						var c = arguments[0],
							l = arguments[1],
							p = arguments[2],
							f = arguments[3];
						if (c === p && l === f) return null;
						var g = c.getCoordinates()[l],
							d = c.getCoordinates()[l + 1],
							y = p.getCoordinates()[f],
							_ = p.getCoordinates()[f + 1];
						if (this._li.computeIntersection(g, d, y, _), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, g, d) || this.hasInteriorIntersection(this._li, y, _))) throw new s0("found non-noded intersection at " + g + "-" + d + " and " + y + "-" + _)
					}
				}, hP.prototype.checkValid = function() {
					this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses()
				}, hP.prototype.checkCollapses = function() {
					if (0 == arguments.length)
						for (var t = this._segStrings.iterator(); t.hasNext();) {
							var e = t.next();
							this.checkCollapses(e)
						} else if (1 == arguments.length)
							for (var n = arguments[0].getCoordinates(), r = 0; r < n.length - 2; r++) this.checkCollapse(n[r], n[r + 1], n[r + 2])
				}, hP.prototype.hasInteriorIntersection = function(t, e, n) {
					for (var r = 0; r < t.getIntersectionNum(); r++) {
						var i = t.getIntersection(r);
						if (!i.equals(e) && !i.equals(n)) return !0
					}
					return !1
				}, hP.prototype.checkCollapse = function(t, e, n) {
					if (t.equals(n)) throw new s0("found non-noded collapse at " + hP.fact.createLineString([t, e, n]))
				}, hP.prototype.interfaces_ = function() {
					return []
				}, hP.prototype.getClass = function() {
					return hP
				}, hO.fact.get = function() {
					return new a7
				}, Object.defineProperties(hP, hO);
				var hR = function() {
						this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = [, , , , ].fill(null), this._safeEnv = null;
						var t = arguments[0],
							e = arguments[1],
							n = arguments[2];
						if (this._originalPt = t, this._pt = t, this._scaleFactor = e, this._li = n, e <= 0) throw new sv("Scale factor must be non-zero");
						1 !== e && (this._pt = new sw(this.scale(t.x), this.scale(t.y)), this._p0Scaled = new sw, this._p1Scaled = new sw), this.initCorners(this._pt)
					},
					hT = {
						SAFE_ENV_EXPANSION_FACTOR: {
							configurable: !0
						}
					};
				hR.prototype.intersectsScaled = function(t, e) {
					var n = Math.min(t.x, e.x),
						r = Math.max(t.x, e.x),
						i = Math.min(t.y, e.y),
						o = Math.max(t.y, e.y),
						s = this._maxx < n || this._minx > r || this._maxy < i || this._miny > o;
					if (s) return !1;
					var a = this.intersectsToleranceSquare(t, e);
					return s2.isTrue(!(s && a), "Found bad envelope test"), a
				}, hR.prototype.initCorners = function(t) {
					this._minx = t.x - .5, this._maxx = t.x + .5, this._miny = t.y - .5, this._maxy = t.y + .5, this._corner[0] = new sw(this._maxx, this._maxy), this._corner[1] = new sw(this._minx, this._maxy), this._corner[2] = new sw(this._minx, this._miny), this._corner[3] = new sw(this._maxx, this._miny)
				}, hR.prototype.intersects = function(t, e) {
					return 1 === this._scaleFactor ? this.intersectsScaled(t, e) : (this.copyScaled(t, this._p0Scaled), this.copyScaled(e, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled))
				}, hR.prototype.scale = function(t) {
					return Math.round(t * this._scaleFactor)
				}, hR.prototype.getCoordinate = function() {
					return this._originalPt
				}, hR.prototype.copyScaled = function(t, e) {
					e.x = this.scale(t.x), e.y = this.scale(t.y)
				}, hR.prototype.getSafeEnvelope = function() {
					if (null === this._safeEnv) {
						var t = hR.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
						this._safeEnv = new sH(this._originalPt.x - t, this._originalPt.x + t, this._originalPt.y - t, this._originalPt.y + t)
					}
					return this._safeEnv
				}, hR.prototype.intersectsPixelClosure = function(t, e) {
					return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), !!this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), !!this._li.hasIntersection() || (this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), !!this._li.hasIntersection())))
				}, hR.prototype.intersectsToleranceSquare = function(t, e) {
					var n = !1,
						r = !1;
					return this._li.computeIntersection(t, e, this._corner[0], this._corner[1]), !!this._li.isProper() || (this._li.computeIntersection(t, e, this._corner[1], this._corner[2]), !!this._li.isProper() || (this._li.hasIntersection() && (n = !0), this._li.computeIntersection(t, e, this._corner[2], this._corner[3]), !!this._li.isProper() || (this._li.hasIntersection() && (r = !0), this._li.computeIntersection(t, e, this._corner[3], this._corner[0]), !!this._li.isProper() || !(!n || !r) || !!t.equals(this._pt) || !!e.equals(this._pt))))
				}, hR.prototype.addSnappedNode = function(t, e) {
					var n = t.getCoordinate(e),
						r = t.getCoordinate(e + 1);
					return !!this.intersects(n, r) && (t.addIntersection(this.getCoordinate(), e), !0)
				}, hR.prototype.interfaces_ = function() {
					return []
				}, hR.prototype.getClass = function() {
					return hR
				}, hT.SAFE_ENV_EXPANSION_FACTOR.get = function() {
					return .75
				}, Object.defineProperties(hR, hT);
				var hD = function() {
					this.tempEnv1 = new sH, this.selectedSegment = new uZ
				};
				hD.prototype.select = function() {
					if (1 == arguments.length);
					else if (2 == arguments.length) {
						var t = arguments[0],
							e = arguments[1];
						t.getLineSegment(e, this.selectedSegment), this.select(this.selectedSegment)
					}
				}, hD.prototype.interfaces_ = function() {
					return []
				}, hD.prototype.getClass = function() {
					return hD
				};
				var hA = function() {
						this._index = null;
						var t = arguments[0];
						this._index = t
					},
					hF = {
						HotPixelSnapAction: {
							configurable: !0
						}
					};
				hA.prototype.snap = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						return this.snap(t, null, -1)
					}
					if (3 == arguments.length) {
						var e = arguments[0],
							n = arguments[1],
							r = arguments[2],
							i = e.getSafeEnvelope(),
							o = new hq(e, n, r);
						return this._index.query(i, {
							interfaces_: function() {
								return [uO]
							},
							visitItem: function(t) {
								t.select(i, o)
							}
						}), o.isNodeAdded()
					}
				}, hA.prototype.interfaces_ = function() {
					return []
				}, hA.prototype.getClass = function() {
					return hA
				}, hF.HotPixelSnapAction.get = function() {
					return hq
				}, Object.defineProperties(hA, hF);
				var hq = function(t) {
						function e() {
							t.call(this), this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
							var e = arguments[0],
								n = arguments[1],
								r = arguments[2];
							this._hotPixel = e, this._parentEdge = n, this._hotPixelVertexIndex = r
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.isNodeAdded = function() {
							return this._isNodeAdded
						}, e.prototype.select = function() {
							if (2 != arguments.length) return t.prototype.select.apply(this, arguments);
							var e = arguments[0],
								n = arguments[1],
								r = e.getContext();
							if (null !== this._parentEdge && r === this._parentEdge && n === this._hotPixelVertexIndex) return null;
							this._isNodeAdded = this._hotPixel.addSnappedNode(r, n)
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, e
					}(hD),
					hG = function() {
						this._li = null, this._interiorIntersections = null;
						var t = arguments[0];
						this._li = t, this._interiorIntersections = new ad
					};
				hG.prototype.processIntersections = function(t, e, n, r) {
					if (t === n && e === r) return null;
					var i = t.getCoordinates()[e],
						o = t.getCoordinates()[e + 1],
						s = n.getCoordinates()[r],
						a = n.getCoordinates()[r + 1];
					if (this._li.computeIntersection(i, o, s, a), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
						for (var u = 0; u < this._li.getIntersectionNum(); u++) this._interiorIntersections.add(this._li.getIntersection(u));
						t.addIntersections(this._li, e, 0), n.addIntersections(this._li, r, 1)
					}
				}, hG.prototype.isDone = function() {
					return !1
				}, hG.prototype.getInteriorIntersections = function() {
					return this._interiorIntersections
				}, hG.prototype.interfaces_ = function() {
					return [hv]
				}, hG.prototype.getClass = function() {
					return hG
				};
				var hB = function() {
					this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
					var t = arguments[0];
					this._pm = t, this._li = new s6, this._li.setPrecisionModel(t), this._scaleFactor = t.getScale()
				};
				hB.prototype.checkCorrectness = function(t) {
					var e = new hP(uJ.getNodedSubstrings(t));
					try {
						e.checkValid()
					} catch (t) {
						if (!(t instanceof sX)) throw t;
						t.printStackTrace()
					}
				}, hB.prototype.getNodedSubstrings = function() {
					return uJ.getNodedSubstrings(this._nodedSegStrings)
				}, hB.prototype.snapRound = function(t, e) {
					var n = this.findInteriorIntersections(t, e);
					this.computeIntersectionSnaps(n), this.computeVertexSnaps(t)
				}, hB.prototype.findInteriorIntersections = function(t, e) {
					var n = new hG(e);
					return this._noder.setSegmentIntersector(n), this._noder.computeNodes(t), n.getInteriorIntersections()
				}, hB.prototype.computeVertexSnaps = function() {
					if (sO(arguments[0], al))
						for (var t = arguments[0].iterator(); t.hasNext();) {
							var e = t.next();
							this.computeVertexSnaps(e)
						} else if (arguments[0] instanceof uJ)
							for (var n = arguments[0], r = n.getCoordinates(), i = 0; i < r.length; i++) {
								var o = new hR(r[i], this._scaleFactor, this._li);
								this._pointSnapper.snap(o, n, i) && n.addIntersection(r[i], i)
							}
				}, hB.prototype.computeNodes = function(t) {
					this._nodedSegStrings = t, this._noder = new u3, this._pointSnapper = new hA(this._noder.getIndex()), this.snapRound(t, this._li)
				}, hB.prototype.computeIntersectionSnaps = function(t) {
					for (var e = t.iterator(); e.hasNext();) {
						var n = new hR(e.next(), this._scaleFactor, this._li);
						this._pointSnapper.snap(n)
					}
				}, hB.prototype.interfaces_ = function() {
					return [u1]
				}, hB.prototype.getClass = function() {
					return hB
				};
				var hk = function() {
						if (this._argGeom = null, this._distance = null, this._bufParams = new u6, this._resultGeometry = null, this._saveException = null, 1 == arguments.length) {
							var t = arguments[0];
							this._argGeom = t
						} else if (2 == arguments.length) {
							var e = arguments[0],
								n = arguments[1];
							this._argGeom = e, this._bufParams = n
						}
					},
					hz = {
						CAP_ROUND: {
							configurable: !0
						},
						CAP_BUTT: {
							configurable: !0
						},
						CAP_FLAT: {
							configurable: !0
						},
						CAP_SQUARE: {
							configurable: !0
						},
						MAX_PRECISION_DIGITS: {
							configurable: !0
						}
					};
				hk.prototype.bufferFixedPrecision = function(t) {
					var e = new hL(new hB(new a6(1)), t.getScale()),
						n = new hM(this._bufParams);
					n.setWorkingPrecisionModel(t), n.setNoder(e), this._resultGeometry = n.buffer(this._argGeom, this._distance)
				}, hk.prototype.bufferReducedPrecision = function() {
					if (0 == arguments.length) {
						for (var t = hk.MAX_PRECISION_DIGITS; t >= 0; t--) {
							try {
								this.bufferReducedPrecision(t)
							} catch (t) {
								if (!(t instanceof uc)) throw t;
								this._saveException = t
							}
							if (null !== this._resultGeometry) return null
						}
						throw this._saveException
					}
					if (1 == arguments.length) {
						var e = arguments[0],
							n = new a6(hk.precisionScaleFactor(this._argGeom, this._distance, e));
						this.bufferFixedPrecision(n)
					}
				}, hk.prototype.computeGeometry = function() {
					if (this.bufferOriginalPrecision(), null !== this._resultGeometry) return null;
					var t = this._argGeom.getFactory().getPrecisionModel();
					t.getType() === a6.FIXED ? this.bufferFixedPrecision(t) : this.bufferReducedPrecision()
				}, hk.prototype.setQuadrantSegments = function(t) {
					this._bufParams.setQuadrantSegments(t)
				}, hk.prototype.bufferOriginalPrecision = function() {
					try {
						var t = new hM(this._bufParams);
						this._resultGeometry = t.buffer(this._argGeom, this._distance)
					} catch (t) {
						if (!(t instanceof s0)) throw t;
						this._saveException = t
					}
				}, hk.prototype.getResultGeometry = function(t) {
					return this._distance = t, this.computeGeometry(), this._resultGeometry
				}, hk.prototype.setEndCapStyle = function(t) {
					this._bufParams.setEndCapStyle(t)
				}, hk.prototype.interfaces_ = function() {
					return []
				}, hk.prototype.getClass = function() {
					return hk
				}, hk.bufferOp = function() {
					if (2 == arguments.length) {
						var t = arguments[0],
							e = arguments[1];
						return new hk(t).getResultGeometry(e)
					}
					if (3 == arguments.length) {
						if (Number.isInteger(arguments[2]) && arguments[0] instanceof ae && "number" == typeof arguments[1]) {
							var n = arguments[0],
								r = arguments[1],
								i = arguments[2],
								o = new hk(n);
							return o.setQuadrantSegments(i), o.getResultGeometry(r)
						}
						if (arguments[2] instanceof u6 && arguments[0] instanceof ae && "number" == typeof arguments[1]) {
							var s = arguments[0],
								a = arguments[1],
								u = arguments[2];
							return new hk(s, u).getResultGeometry(a)
						}
					} else if (4 == arguments.length) {
						var h = arguments[0],
							c = arguments[1],
							l = arguments[2],
							p = arguments[3],
							f = new hk(h);
						return f.setQuadrantSegments(l), f.setEndCapStyle(p), f.getResultGeometry(c)
					}
				}, hk.precisionScaleFactor = function(t, e, n) {
					var r = t.getEnvelopeInternal();
					return Math.pow(10, n - Math.trunc(Math.log(sR.max(Math.abs(r.getMaxX()), Math.abs(r.getMaxY()), Math.abs(r.getMinX()), Math.abs(r.getMinY())) + 2 * (e > 0 ? e : 0)) / Math.log(10) + 1))
				}, hz.CAP_ROUND.get = function() {
					return u6.CAP_ROUND
				}, hz.CAP_BUTT.get = function() {
					return u6.CAP_FLAT
				}, hz.CAP_FLAT.get = function() {
					return u6.CAP_FLAT
				}, hz.CAP_SQUARE.get = function() {
					return u6.CAP_SQUARE
				}, hz.MAX_PRECISION_DIGITS.get = function() {
					return 12
				}, Object.defineProperties(hk, hz);
				var hj = function() {
					this._pt = [new sw, new sw], this._distance = sx.NaN, this._isNull = !0
				};
				hj.prototype.getCoordinates = function() {
					return this._pt
				}, hj.prototype.getCoordinate = function(t) {
					return this._pt[t]
				}, hj.prototype.setMinimum = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						this.setMinimum(t._pt[0], t._pt[1])
					} else if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						if (this._isNull) return this.initialize(e, n), null;
						var r = e.distance(n);
						r < this._distance && this.initialize(e, n, r)
					}
				}, hj.prototype.initialize = function() {
					if (0 == arguments.length) this._isNull = !0;
					else if (2 == arguments.length) {
						var t = arguments[0],
							e = arguments[1];
						this._pt[0].setCoordinate(t), this._pt[1].setCoordinate(e), this._distance = t.distance(e), this._isNull = !1
					} else if (3 == arguments.length) {
						var n = arguments[0],
							r = arguments[1],
							i = arguments[2];
						this._pt[0].setCoordinate(n), this._pt[1].setCoordinate(r), this._distance = i, this._isNull = !1
					}
				}, hj.prototype.getDistance = function() {
					return this._distance
				}, hj.prototype.setMaximum = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						this.setMaximum(t._pt[0], t._pt[1])
					} else if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						if (this._isNull) return this.initialize(e, n), null;
						var r = e.distance(n);
						r > this._distance && this.initialize(e, n, r)
					}
				}, hj.prototype.interfaces_ = function() {
					return []
				}, hj.prototype.getClass = function() {
					return hj
				};
				var hX = function() {};
				hX.prototype.interfaces_ = function() {
					return []
				}, hX.prototype.getClass = function() {
					return hX
				}, hX.computeDistance = function() {
					if (arguments[2] instanceof hj && arguments[0] instanceof az && arguments[1] instanceof sw)
						for (var t = arguments[0], e = arguments[1], n = arguments[2], r = t.getCoordinates(), i = new uZ, o = 0; o < r.length - 1; o++) {
							i.setCoordinates(r[o], r[o + 1]);
							var s = i.closestPoint(e);
							n.setMinimum(s, e)
						} else if (arguments[2] instanceof hj && arguments[0] instanceof aY && arguments[1] instanceof sw) {
							var a = arguments[0],
								u = arguments[1],
								h = arguments[2];
							hX.computeDistance(a.getExteriorRing(), u, h);
							for (var c = 0; c < a.getNumInteriorRing(); c++) hX.computeDistance(a.getInteriorRingN(c), u, h)
						} else if (arguments[2] instanceof hj && arguments[0] instanceof ae && arguments[1] instanceof sw) {
						var l = arguments[0],
							p = arguments[1],
							f = arguments[2];
						if (l instanceof az) hX.computeDistance(l, p, f);
						else if (l instanceof aY) hX.computeDistance(l, p, f);
						else if (l instanceof aD)
							for (var g = 0; g < l.getNumGeometries(); g++) {
								var d = l.getGeometryN(g);
								hX.computeDistance(d, p, f)
							} else f.setMinimum(l.getCoordinate(), p)
					} else if (arguments[2] instanceof hj && arguments[0] instanceof uZ && arguments[1] instanceof sw) {
						var y = arguments[0],
							_ = arguments[1],
							m = arguments[2],
							v = y.closestPoint(_);
						m.setMinimum(v, _)
					}
				};
				var hU = function(t) {
						this._maxPtDist = new hj, this._inputGeom = t || null
					},
					hY = {
						MaxPointDistanceFilter: {
							configurable: !0
						},
						MaxMidpointDistanceFilter: {
							configurable: !0
						}
					};
				hU.prototype.computeMaxMidpointDistance = function(t) {
					var e = new hH(this._inputGeom);
					t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance())
				}, hU.prototype.computeMaxVertexDistance = function(t) {
					var e = new hV(this._inputGeom);
					t.apply(e), this._maxPtDist.setMaximum(e.getMaxPointDistance())
				}, hU.prototype.findDistance = function(t) {
					return this.computeMaxVertexDistance(t), this.computeMaxMidpointDistance(t), this._maxPtDist.getDistance()
				}, hU.prototype.getDistancePoints = function() {
					return this._maxPtDist
				}, hU.prototype.interfaces_ = function() {
					return []
				}, hU.prototype.getClass = function() {
					return hU
				}, hY.MaxPointDistanceFilter.get = function() {
					return hV
				}, hY.MaxMidpointDistanceFilter.get = function() {
					return hH
				}, Object.defineProperties(hU, hY);
				var hV = function(t) {
					this._maxPtDist = new hj, this._minPtDist = new hj, this._geom = t || null
				};
				hV.prototype.filter = function(t) {
					this._minPtDist.initialize(), hX.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist)
				}, hV.prototype.getMaxPointDistance = function() {
					return this._maxPtDist
				}, hV.prototype.interfaces_ = function() {
					return [ai]
				}, hV.prototype.getClass = function() {
					return hV
				};
				var hH = function(t) {
					this._maxPtDist = new hj, this._minPtDist = new hj, this._geom = t || null
				};
				hH.prototype.filter = function(t, e) {
					if (0 === e) return null;
					var n = t.getCoordinate(e - 1),
						r = t.getCoordinate(e),
						i = new sw((n.x + r.x) / 2, (n.y + r.y) / 2);
					this._minPtDist.initialize(), hX.computeDistance(this._geom, i, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist)
				}, hH.prototype.isDone = function() {
					return !1
				}, hH.prototype.isGeometryChanged = function() {
					return !1
				}, hH.prototype.getMaxPointDistance = function() {
					return this._maxPtDist
				}, hH.prototype.interfaces_ = function() {
					return [aT]
				}, hH.prototype.getClass = function() {
					return hH
				};
				var hW = function(t) {
					this._comps = t || null
				};
				hW.prototype.filter = function(t) {
					t instanceof aY && this._comps.add(t)
				}, hW.prototype.interfaces_ = function() {
					return [aR]
				}, hW.prototype.getClass = function() {
					return hW
				}, hW.getPolygons = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						return hW.getPolygons(t, new ad)
					}
					if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						return e instanceof aY ? n.add(e) : e instanceof aD && e.apply(new hW(n)), n
					}
				};
				var hJ = function() {
					if (this._lines = null, this._isForcedToLineString = !1, 1 == arguments.length) {
						var t = arguments[0];
						this._lines = t
					} else if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						this._lines = e, this._isForcedToLineString = n
					}
				};
				hJ.prototype.filter = function(t) {
					if (this._isForcedToLineString && t instanceof aH) {
						var e = t.getFactory().createLineString(t.getCoordinateSequence());
						return this._lines.add(e), null
					}
					t instanceof az && this._lines.add(t)
				}, hJ.prototype.setForceToLineString = function(t) {
					this._isForcedToLineString = t
				}, hJ.prototype.interfaces_ = function() {
					return [at]
				}, hJ.prototype.getClass = function() {
					return hJ
				}, hJ.getGeometry = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						return t.getFactory().buildGeometry(hJ.getLines(t))
					}
					if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						return e.getFactory().buildGeometry(hJ.getLines(e, n))
					}
				}, hJ.getLines = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						return hJ.getLines(t, !1)
					}
					if (2 == arguments.length) {
						if (sO(arguments[0], al) && sO(arguments[1], al)) {
							for (var e = arguments[0], n = arguments[1], r = e.iterator(); r.hasNext();) {
								var i = r.next();
								hJ.getLines(i, n)
							}
							return n
						}
						if (arguments[0] instanceof ae && "boolean" == typeof arguments[1]) {
							var o = arguments[0],
								s = arguments[1],
								a = new ad;
							return o.apply(new hJ(a, s)), a
						}
						if (arguments[0] instanceof ae && sO(arguments[1], al)) {
							var u = arguments[0],
								h = arguments[1];
							return u instanceof az ? h.add(u) : u.apply(new hJ(h)), h
						}
					} else if (3 == arguments.length) {
						if ("boolean" == typeof arguments[2] && sO(arguments[0], al) && sO(arguments[1], al)) {
							for (var c = arguments[0], l = arguments[1], p = arguments[2], f = c.iterator(); f.hasNext();) {
								var g = f.next();
								hJ.getLines(g, l, p)
							}
							return l
						}
						if ("boolean" == typeof arguments[2] && arguments[0] instanceof ae && sO(arguments[1], al)) {
							var d = arguments[0],
								y = arguments[1],
								_ = arguments[2];
							return d.apply(new hJ(y, _)), y
						}
					}
				};
				var hZ = function() {
					if (this._boundaryRule = ao.OGC_SFS_BOUNDARY_RULE, this._isIn = null, this._numBoundaries = null, 0 == arguments.length);
					else if (1 == arguments.length) {
						var t = arguments[0];
						if (null === t) throw new sv("Rule must be non-null");
						this._boundaryRule = t
					}
				};
				hZ.prototype.locateInternal = function() {
					if (arguments[0] instanceof sw && arguments[1] instanceof aY) {
						var t = arguments[0],
							e = arguments[1];
						if (e.isEmpty()) return sL.EXTERIOR;
						var n = e.getExteriorRing(),
							r = this.locateInPolygonRing(t, n);
						if (r === sL.EXTERIOR) return sL.EXTERIOR;
						if (r === sL.BOUNDARY) return sL.BOUNDARY;
						for (var i = 0; i < e.getNumInteriorRing(); i++) {
							var o = e.getInteriorRingN(i),
								s = this.locateInPolygonRing(t, o);
							if (s === sL.INTERIOR) return sL.EXTERIOR;
							if (s === sL.BOUNDARY) return sL.BOUNDARY
						}
						return sL.INTERIOR
					}
					if (arguments[0] instanceof sw && arguments[1] instanceof az) {
						var a = arguments[0],
							u = arguments[1];
						if (!u.getEnvelopeInternal().intersects(a)) return sL.EXTERIOR;
						var h = u.getCoordinates();
						return !u.isClosed() && (a.equals(h[0]) || a.equals(h[h.length - 1])) ? sL.BOUNDARY : s9.isOnLine(a, h) ? sL.INTERIOR : sL.EXTERIOR
					}
					if (arguments[0] instanceof sw && arguments[1] instanceof aX) {
						var c = arguments[0];
						return arguments[1].getCoordinate().equals2D(c) ? sL.INTERIOR : sL.EXTERIOR
					}
				}, hZ.prototype.locateInPolygonRing = function(t, e) {
					return e.getEnvelopeInternal().intersects(t) ? s9.locatePointInRing(t, e.getCoordinates()) : sL.EXTERIOR
				}, hZ.prototype.intersects = function(t, e) {
					return this.locate(t, e) !== sL.EXTERIOR
				}, hZ.prototype.updateLocationInfo = function(t) {
					t === sL.INTERIOR && (this._isIn = !0), t === sL.BOUNDARY && this._numBoundaries++
				}, hZ.prototype.computeLocation = function(t, e) {
					if (e instanceof aX && this.updateLocationInfo(this.locateInternal(t, e)), e instanceof az) this.updateLocationInfo(this.locateInternal(t, e));
					else if (e instanceof aY) this.updateLocationInfo(this.locateInternal(t, e));
					else if (e instanceof aA)
						for (var n = 0; n < e.getNumGeometries(); n++) {
							var r = e.getGeometryN(n);
							this.updateLocationInfo(this.locateInternal(t, r))
						} else if (e instanceof aW)
							for (var i = 0; i < e.getNumGeometries(); i++) {
								var o = e.getGeometryN(i);
								this.updateLocationInfo(this.locateInternal(t, o))
							} else if (e instanceof aD)
								for (var s = new hp(e); s.hasNext();) {
									var a = s.next();
									a !== e && this.computeLocation(t, a)
								}
				}, hZ.prototype.locate = function(t, e) {
					return e.isEmpty() ? sL.EXTERIOR : e instanceof az ? this.locateInternal(t, e) : e instanceof aY ? this.locateInternal(t, e) : (this._isIn = !1, this._numBoundaries = 0, this.computeLocation(t, e), this._boundaryRule.isInBoundary(this._numBoundaries) ? sL.BOUNDARY : this._numBoundaries > 0 || this._isIn ? sL.INTERIOR : sL.EXTERIOR)
				}, hZ.prototype.interfaces_ = function() {
					return []
				}, hZ.prototype.getClass = function() {
					return hZ
				};
				var hK = function t() {
						if (this._component = null, this._segIndex = null, this._pt = null, 2 == arguments.length) {
							var e = arguments[0],
								n = arguments[1];
							t.call(this, e, t.INSIDE_AREA, n)
						} else if (3 == arguments.length) {
							var r = arguments[0],
								i = arguments[1],
								o = arguments[2];
							this._component = r, this._segIndex = i, this._pt = o
						}
					},
					hQ = {
						INSIDE_AREA: {
							configurable: !0
						}
					};
				hK.prototype.isInsideArea = function() {
					return this._segIndex === hK.INSIDE_AREA
				}, hK.prototype.getCoordinate = function() {
					return this._pt
				}, hK.prototype.getGeometryComponent = function() {
					return this._component
				}, hK.prototype.getSegmentIndex = function() {
					return this._segIndex
				}, hK.prototype.interfaces_ = function() {
					return []
				}, hK.prototype.getClass = function() {
					return hK
				}, hQ.INSIDE_AREA.get = function() {
					return -1
				}, Object.defineProperties(hK, hQ);
				var h$ = function(t) {
					this._pts = t || null
				};
				h$.prototype.filter = function(t) {
					t instanceof aX && this._pts.add(t)
				}, h$.prototype.interfaces_ = function() {
					return [aR]
				}, h$.prototype.getClass = function() {
					return h$
				}, h$.getPoints = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						return t instanceof aX ? uA.singletonList(t) : h$.getPoints(t, new ad)
					}
					if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						return e instanceof aX ? n.add(e) : e instanceof aD && e.apply(new h$(n)), n
					}
				};
				var h0 = function() {
					this._locations = null;
					var t = arguments[0];
					this._locations = t
				};
				h0.prototype.filter = function(t) {
					(t instanceof aX || t instanceof az || t instanceof aY) && this._locations.add(new hK(t, 0, t.getCoordinate()))
				}, h0.prototype.interfaces_ = function() {
					return [aR]
				}, h0.prototype.getClass = function() {
					return h0
				}, h0.getLocations = function(t) {
					var e = new ad;
					return t.apply(new h0(e)), e
				};
				var h1 = function() {
					if (this._geom = null, this._terminateDistance = 0, this._ptLocator = new hZ, this._minDistanceLocation = null, this._minDistance = sx.MAX_VALUE, 2 == arguments.length) {
						var t = arguments[0],
							e = arguments[1];
						this._geom = [t, e], this._terminateDistance = 0
					} else if (3 == arguments.length) {
						var n = arguments[0],
							r = arguments[1],
							i = arguments[2];
						this._geom = [, , ].fill(null), this._geom[0] = n, this._geom[1] = r, this._terminateDistance = i
					}
				};
				h1.prototype.computeContainmentDistance = function() {
					if (0 == arguments.length) {
						var t = [, , ].fill(null);
						if (this.computeContainmentDistance(0, t), this._minDistance <= this._terminateDistance) return null;
						this.computeContainmentDistance(1, t)
					} else if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1],
							r = 1 - e,
							i = hW.getPolygons(this._geom[e]);
						if (i.size() > 0) {
							var o = h0.getLocations(this._geom[r]);
							if (this.computeContainmentDistance(o, i, n), this._minDistance <= this._terminateDistance) return this._minDistanceLocation[r] = n[0], this._minDistanceLocation[e] = n[1], null
						}
					} else if (3 == arguments.length) {
						if (arguments[2] instanceof Array && sO(arguments[0], ag) && sO(arguments[1], ag)) {
							for (var s = arguments[0], a = arguments[1], u = arguments[2], h = 0; h < s.size(); h++)
								for (var c = s.get(h), l = 0; l < a.size(); l++)
									if (this.computeContainmentDistance(c, a.get(l), u), this._minDistance <= this._terminateDistance) return null
						} else if (arguments[2] instanceof Array && arguments[0] instanceof hK && arguments[1] instanceof aY) {
							var p = arguments[0],
								f = arguments[1],
								g = arguments[2],
								d = p.getCoordinate();
							if (sL.EXTERIOR !== this._ptLocator.locate(d, f)) return this._minDistance = 0, g[0] = p, g[1] = new hK(f, d), null
						}
					}
				}, h1.prototype.computeMinDistanceLinesPoints = function(t, e, n) {
					for (var r = 0; r < t.size(); r++)
						for (var i = t.get(r), o = 0; o < e.size(); o++) {
							var s = e.get(o);
							if (this.computeMinDistance(i, s, n), this._minDistance <= this._terminateDistance) return null
						}
				}, h1.prototype.computeFacetDistance = function() {
					var t = [, , ].fill(null),
						e = hJ.getLines(this._geom[0]),
						n = hJ.getLines(this._geom[1]),
						r = h$.getPoints(this._geom[0]),
						i = h$.getPoints(this._geom[1]);
					return this.computeMinDistanceLines(e, n, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance ? null : (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(e, i, t), this.updateMinDistance(t, !1), this._minDistance <= this._terminateDistance ? null : (t[0] = null, t[1] = null, this.computeMinDistanceLinesPoints(n, r, t), this.updateMinDistance(t, !0), this._minDistance <= this._terminateDistance ? null : (t[0] = null, t[1] = null, this.computeMinDistancePoints(r, i, t), void this.updateMinDistance(t, !1))))
				}, h1.prototype.nearestLocations = function() {
					return this.computeMinDistance(), this._minDistanceLocation
				}, h1.prototype.updateMinDistance = function(t, e) {
					if (null === t[0]) return null;
					e ? (this._minDistanceLocation[0] = t[1], this._minDistanceLocation[1] = t[0]) : (this._minDistanceLocation[0] = t[0], this._minDistanceLocation[1] = t[1])
				}, h1.prototype.nearestPoints = function() {
					return this.computeMinDistance(), [this._minDistanceLocation[0].getCoordinate(), this._minDistanceLocation[1].getCoordinate()]
				}, h1.prototype.computeMinDistance = function() {
					if (0 == arguments.length) {
						if (null !== this._minDistanceLocation || (this._minDistanceLocation = [, , ].fill(null), this.computeContainmentDistance(), this._minDistance <= this._terminateDistance)) return null;
						this.computeFacetDistance()
					} else if (3 == arguments.length) {
						if (arguments[2] instanceof Array && arguments[0] instanceof az && arguments[1] instanceof aX) {
							var t = arguments[0],
								e = arguments[1],
								n = arguments[2];
							if (t.getEnvelopeInternal().distance(e.getEnvelopeInternal()) > this._minDistance) return null;
							for (var r = t.getCoordinates(), i = e.getCoordinate(), o = 0; o < r.length - 1; o++) {
								var s = s9.distancePointLine(i, r[o], r[o + 1]);
								if (s < this._minDistance) {
									this._minDistance = s;
									var a = new uZ(r[o], r[o + 1]).closestPoint(i);
									n[0] = new hK(t, o, a), n[1] = new hK(e, 0, i)
								}
								if (this._minDistance <= this._terminateDistance) return null
							}
						} else if (arguments[2] instanceof Array && arguments[0] instanceof az && arguments[1] instanceof az) {
							var u = arguments[0],
								h = arguments[1],
								c = arguments[2];
							if (u.getEnvelopeInternal().distance(h.getEnvelopeInternal()) > this._minDistance) return null;
							for (var l = u.getCoordinates(), p = h.getCoordinates(), f = 0; f < l.length - 1; f++)
								for (var g = 0; g < p.length - 1; g++) {
									var d = s9.distanceLineLine(l[f], l[f + 1], p[g], p[g + 1]);
									if (d < this._minDistance) {
										this._minDistance = d;
										var y = new uZ(l[f], l[f + 1]),
											_ = new uZ(p[g], p[g + 1]),
											m = y.closestPoints(_);
										c[0] = new hK(u, f, m[0]), c[1] = new hK(h, g, m[1])
									}
									if (this._minDistance <= this._terminateDistance) return null
								}
						}
					}
				}, h1.prototype.computeMinDistancePoints = function(t, e, n) {
					for (var r = 0; r < t.size(); r++)
						for (var i = t.get(r), o = 0; o < e.size(); o++) {
							var s = e.get(o),
								a = i.getCoordinate().distance(s.getCoordinate());
							if (a < this._minDistance && (this._minDistance = a, n[0] = new hK(i, 0, i.getCoordinate()), n[1] = new hK(s, 0, s.getCoordinate())), this._minDistance <= this._terminateDistance) return null
						}
				}, h1.prototype.distance = function() {
					if (null === this._geom[0] || null === this._geom[1]) throw new sv("null geometries are not supported");
					return this._geom[0].isEmpty() || this._geom[1].isEmpty() ? 0 : (this.computeMinDistance(), this._minDistance)
				}, h1.prototype.computeMinDistanceLines = function(t, e, n) {
					for (var r = 0; r < t.size(); r++)
						for (var i = t.get(r), o = 0; o < e.size(); o++) {
							var s = e.get(o);
							if (this.computeMinDistance(i, s, n), this._minDistance <= this._terminateDistance) return null
						}
				}, h1.prototype.interfaces_ = function() {
					return []
				}, h1.prototype.getClass = function() {
					return h1
				}, h1.distance = function(t, e) {
					return new h1(t, e).distance()
				}, h1.isWithinDistance = function(t, e, n) {
					return new h1(t, e, n).distance() <= n
				}, h1.nearestPoints = function(t, e) {
					return new h1(t, e).nearestPoints()
				};
				var h2 = function() {
					this._pt = [new sw, new sw], this._distance = sx.NaN, this._isNull = !0
				};
				h2.prototype.getCoordinates = function() {
					return this._pt
				}, h2.prototype.getCoordinate = function(t) {
					return this._pt[t]
				}, h2.prototype.setMinimum = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						this.setMinimum(t._pt[0], t._pt[1])
					} else if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						if (this._isNull) return this.initialize(e, n), null;
						var r = e.distance(n);
						r < this._distance && this.initialize(e, n, r)
					}
				}, h2.prototype.initialize = function() {
					if (0 == arguments.length) this._isNull = !0;
					else if (2 == arguments.length) {
						var t = arguments[0],
							e = arguments[1];
						this._pt[0].setCoordinate(t), this._pt[1].setCoordinate(e), this._distance = t.distance(e), this._isNull = !1
					} else if (3 == arguments.length) {
						var n = arguments[0],
							r = arguments[1],
							i = arguments[2];
						this._pt[0].setCoordinate(n), this._pt[1].setCoordinate(r), this._distance = i, this._isNull = !1
					}
				}, h2.prototype.toString = function() {
					return s$.toLineString(this._pt[0], this._pt[1])
				}, h2.prototype.getDistance = function() {
					return this._distance
				}, h2.prototype.setMaximum = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						this.setMaximum(t._pt[0], t._pt[1])
					} else if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						if (this._isNull) return this.initialize(e, n), null;
						var r = e.distance(n);
						r > this._distance && this.initialize(e, n, r)
					}
				}, h2.prototype.interfaces_ = function() {
					return []
				}, h2.prototype.getClass = function() {
					return h2
				};
				var h3 = function() {};
				h3.prototype.interfaces_ = function() {
					return []
				}, h3.prototype.getClass = function() {
					return h3
				}, h3.computeDistance = function() {
					if (arguments[2] instanceof h2 && arguments[0] instanceof az && arguments[1] instanceof sw)
						for (var t = arguments[0], e = arguments[1], n = arguments[2], r = new uZ, i = t.getCoordinates(), o = 0; o < i.length - 1; o++) {
							r.setCoordinates(i[o], i[o + 1]);
							var s = r.closestPoint(e);
							n.setMinimum(s, e)
						} else if (arguments[2] instanceof h2 && arguments[0] instanceof aY && arguments[1] instanceof sw) {
							var a = arguments[0],
								u = arguments[1],
								h = arguments[2];
							h3.computeDistance(a.getExteriorRing(), u, h);
							for (var c = 0; c < a.getNumInteriorRing(); c++) h3.computeDistance(a.getInteriorRingN(c), u, h)
						} else if (arguments[2] instanceof h2 && arguments[0] instanceof ae && arguments[1] instanceof sw) {
						var l = arguments[0],
							p = arguments[1],
							f = arguments[2];
						if (l instanceof az) h3.computeDistance(l, p, f);
						else if (l instanceof aY) h3.computeDistance(l, p, f);
						else if (l instanceof aD)
							for (var g = 0; g < l.getNumGeometries(); g++) {
								var d = l.getGeometryN(g);
								h3.computeDistance(d, p, f)
							} else f.setMinimum(l.getCoordinate(), p)
					} else if (arguments[2] instanceof h2 && arguments[0] instanceof uZ && arguments[1] instanceof sw) {
						var y = arguments[0],
							_ = arguments[1],
							m = arguments[2],
							v = y.closestPoint(_);
						m.setMinimum(v, _)
					}
				};
				var h4 = function() {
						this._g0 = null, this._g1 = null, this._ptDist = new h2, this._densifyFrac = 0;
						var t = arguments[0],
							e = arguments[1];
						this._g0 = t, this._g1 = e
					},
					h6 = {
						MaxPointDistanceFilter: {
							configurable: !0
						},
						MaxDensifiedByFractionDistanceFilter: {
							configurable: !0
						}
					};
				h4.prototype.getCoordinates = function() {
					return this._ptDist.getCoordinates()
				}, h4.prototype.setDensifyFraction = function(t) {
					if (t > 1 || t <= 0) throw new sv("Fraction is not in range (0.0 - 1.0]");
					this._densifyFrac = t
				}, h4.prototype.compute = function(t, e) {
					this.computeOrientedDistance(t, e, this._ptDist), this.computeOrientedDistance(e, t, this._ptDist)
				}, h4.prototype.distance = function() {
					return this.compute(this._g0, this._g1), this._ptDist.getDistance()
				}, h4.prototype.computeOrientedDistance = function(t, e, n) {
					var r = new h8(e);
					if (t.apply(r), n.setMaximum(r.getMaxPointDistance()), this._densifyFrac > 0) {
						var i = new h5(e, this._densifyFrac);
						t.apply(i), n.setMaximum(i.getMaxPointDistance())
					}
				}, h4.prototype.orientedDistance = function() {
					return this.computeOrientedDistance(this._g0, this._g1, this._ptDist), this._ptDist.getDistance()
				}, h4.prototype.interfaces_ = function() {
					return []
				}, h4.prototype.getClass = function() {
					return h4
				}, h4.distance = function() {
					if (2 == arguments.length) {
						var t = arguments[0],
							e = arguments[1];
						return new h4(t, e).distance()
					}
					if (3 == arguments.length) {
						var n = arguments[0],
							r = arguments[1],
							i = arguments[2],
							o = new h4(n, r);
						return o.setDensifyFraction(i), o.distance()
					}
				}, h6.MaxPointDistanceFilter.get = function() {
					return h8
				}, h6.MaxDensifiedByFractionDistanceFilter.get = function() {
					return h5
				}, Object.defineProperties(h4, h6);
				var h8 = function() {
					this._maxPtDist = new h2, this._minPtDist = new h2, this._euclideanDist = new h3, this._geom = null;
					var t = arguments[0];
					this._geom = t
				};
				h8.prototype.filter = function(t) {
					this._minPtDist.initialize(), h3.computeDistance(this._geom, t, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist)
				}, h8.prototype.getMaxPointDistance = function() {
					return this._maxPtDist
				}, h8.prototype.interfaces_ = function() {
					return [ai]
				}, h8.prototype.getClass = function() {
					return h8
				};
				var h5 = function() {
					this._maxPtDist = new h2, this._minPtDist = new h2, this._geom = null, this._numSubSegs = 0;
					var t = arguments[0],
						e = arguments[1];
					this._geom = t, this._numSubSegs = Math.trunc(Math.round(1 / e))
				};
				h5.prototype.filter = function(t, e) {
					if (0 === e) return null;
					for (var n = t.getCoordinate(e - 1), r = t.getCoordinate(e), i = (r.x - n.x) / this._numSubSegs, o = (r.y - n.y) / this._numSubSegs, s = 0; s < this._numSubSegs; s++) {
						var a = new sw(n.x + s * i, n.y + s * o);
						this._minPtDist.initialize(), h3.computeDistance(this._geom, a, this._minPtDist), this._maxPtDist.setMaximum(this._minPtDist)
					}
				}, h5.prototype.isDone = function() {
					return !1
				}, h5.prototype.isGeometryChanged = function() {
					return !1
				}, h5.prototype.getMaxPointDistance = function() {
					return this._maxPtDist
				}, h5.prototype.interfaces_ = function() {
					return [aT]
				}, h5.prototype.getClass = function() {
					return h5
				};
				var h9 = function(t, e, n) {
						this._minValidDistance = null, this._maxValidDistance = null, this._minDistanceFound = null, this._maxDistanceFound = null, this._isValid = !0, this._errMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._bufDistance = e || null, this._result = n || null
					},
					h7 = {
						VERBOSE: {
							configurable: !0
						},
						MAX_DISTANCE_DIFF_FRAC: {
							configurable: !0
						}
					};
				h9.prototype.checkMaximumDistance = function(t, e, n) {
					var r = new h4(e, t);
					if (r.setDensifyFraction(.25), this._maxDistanceFound = r.orientedDistance(), this._maxDistanceFound > n) {
						this._isValid = !1;
						var i = r.getCoordinates();
						this._errorLocation = i[1], this._errorIndicator = t.getFactory().createLineString(i), this._errMsg = "Distance between buffer curve and input is too large (" + this._maxDistanceFound + " at " + s$.toLineString(i[0], i[1]) + ")"
					}
				}, h9.prototype.isValid = function() {
					var t = Math.abs(this._bufDistance),
						e = h9.MAX_DISTANCE_DIFF_FRAC * t;
					return this._minValidDistance = t - e, this._maxValidDistance = t + e, !(!this._input.isEmpty() && !this._result.isEmpty()) || (this._bufDistance > 0 ? this.checkPositiveValid() : this.checkNegativeValid(), h9.VERBOSE && sY.out.println("Min Dist= " + this._minDistanceFound + "  err= " + (1 - this._minDistanceFound / this._bufDistance) + "  Max Dist= " + this._maxDistanceFound + "  err= " + (this._maxDistanceFound / this._bufDistance - 1)), this._isValid)
				}, h9.prototype.checkNegativeValid = function() {
					if (!(this._input instanceof aY || this._input instanceof aW || this._input instanceof aD)) return null;
					var t = this.getPolygonLines(this._input);
					if (this.checkMinimumDistance(t, this._result, this._minValidDistance), !this._isValid) return null;
					this.checkMaximumDistance(t, this._result, this._maxValidDistance)
				}, h9.prototype.getErrorIndicator = function() {
					return this._errorIndicator
				}, h9.prototype.checkMinimumDistance = function(t, e, n) {
					var r = new h1(t, e, n);
					if (this._minDistanceFound = r.distance(), this._minDistanceFound < n) {
						this._isValid = !1;
						var i = r.nearestPoints();
						this._errorLocation = r.nearestPoints()[1], this._errorIndicator = t.getFactory().createLineString(i), this._errMsg = "Distance between buffer curve and input is too small (" + this._minDistanceFound + " at " + s$.toLineString(i[0], i[1]) + " )"
					}
				}, h9.prototype.checkPositiveValid = function() {
					var t = this._result.getBoundary();
					if (this.checkMinimumDistance(this._input, t, this._minValidDistance), !this._isValid) return null;
					this.checkMaximumDistance(this._input, t, this._maxValidDistance)
				}, h9.prototype.getErrorLocation = function() {
					return this._errorLocation
				}, h9.prototype.getPolygonLines = function(t) {
					for (var e = new ad, n = new hJ(e), r = hW.getPolygons(t).iterator(); r.hasNext();) r.next().apply(n);
					return t.getFactory().buildGeometry(e)
				}, h9.prototype.getErrorMessage = function() {
					return this._errMsg
				}, h9.prototype.interfaces_ = function() {
					return []
				}, h9.prototype.getClass = function() {
					return h9
				}, h7.VERBOSE.get = function() {
					return !1
				}, h7.MAX_DISTANCE_DIFF_FRAC.get = function() {
					return .012
				}, Object.defineProperties(h9, h7);
				var ct = function(t, e, n) {
						this._isValid = !0, this._errorMsg = null, this._errorLocation = null, this._errorIndicator = null, this._input = t || null, this._distance = e || null, this._result = n || null
					},
					ce = {
						VERBOSE: {
							configurable: !0
						},
						MAX_ENV_DIFF_FRAC: {
							configurable: !0
						}
					};
				ct.prototype.isValid = function() {
					return this.checkPolygonal(), this._isValid && (this.checkExpectedEmpty(), this._isValid && (this.checkEnvelope(), this._isValid && (this.checkArea(), this._isValid && this.checkDistance()))), this._isValid
				}, ct.prototype.checkEnvelope = function() {
					if (this._distance < 0) return null;
					var t = this._distance * ct.MAX_ENV_DIFF_FRAC;
					0 === t && (t = .001);
					var e = new sH(this._input.getEnvelopeInternal());
					e.expandBy(this._distance);
					var n = new sH(this._result.getEnvelopeInternal());
					n.expandBy(t), n.contains(e) || (this._isValid = !1, this._errorMsg = "Buffer envelope is incorrect", this._errorIndicator = this._input.getFactory().toGeometry(n)), this.report("Envelope")
				}, ct.prototype.checkDistance = function() {
					var t = new h9(this._input, this._distance, this._result);
					t.isValid() || (this._isValid = !1, this._errorMsg = t.getErrorMessage(), this._errorLocation = t.getErrorLocation(), this._errorIndicator = t.getErrorIndicator()), this.report("Distance")
				}, ct.prototype.checkArea = function() {
					var t = this._input.getArea(),
						e = this._result.getArea();
					this._distance > 0 && t > e && (this._isValid = !1, this._errorMsg = "Area of positive buffer is smaller than input", this._errorIndicator = this._result), this._distance < 0 && t < e && (this._isValid = !1, this._errorMsg = "Area of negative buffer is larger than input", this._errorIndicator = this._result), this.report("Area")
				}, ct.prototype.checkPolygonal = function() {
					this._result instanceof aY || this._result instanceof aW || (this._isValid = !1), this._errorMsg = "Result is not polygonal", this._errorIndicator = this._result, this.report("Polygonal")
				}, ct.prototype.getErrorIndicator = function() {
					return this._errorIndicator
				}, ct.prototype.getErrorLocation = function() {
					return this._errorLocation
				}, ct.prototype.checkExpectedEmpty = function() {
					return this._input.getDimension() >= 2 ? null : this._distance > 0 ? null : (this._result.isEmpty() || (this._isValid = !1, this._errorMsg = "Result is non-empty", this._errorIndicator = this._result), void this.report("ExpectedEmpty"))
				}, ct.prototype.report = function(t) {
					if (!ct.VERBOSE) return null;
					sY.out.println("Check " + t + ": " + (this._isValid ? "passed" : "FAILED"))
				}, ct.prototype.getErrorMessage = function() {
					return this._errorMsg
				}, ct.prototype.interfaces_ = function() {
					return []
				}, ct.prototype.getClass = function() {
					return ct
				}, ct.isValidMsg = function(t, e, n) {
					var r = new ct(t, e, n);
					return r.isValid() ? null : r.getErrorMessage()
				}, ct.isValid = function(t, e, n) {
					return !!new ct(t, e, n).isValid()
				}, ce.VERBOSE.get = function() {
					return !1
				}, ce.MAX_ENV_DIFF_FRAC.get = function() {
					return .012
				}, Object.defineProperties(ct, ce);
				var cn = function() {
					this._pts = null, this._data = null;
					var t = arguments[0],
						e = arguments[1];
					this._pts = t, this._data = e
				};
				cn.prototype.getCoordinates = function() {
					return this._pts
				}, cn.prototype.size = function() {
					return this._pts.length
				}, cn.prototype.getCoordinate = function(t) {
					return this._pts[t]
				}, cn.prototype.isClosed = function() {
					return this._pts[0].equals(this._pts[this._pts.length - 1])
				}, cn.prototype.getSegmentOctant = function(t) {
					return t === this._pts.length - 1 ? -1 : uV.octant(this.getCoordinate(t), this.getCoordinate(t + 1))
				}, cn.prototype.setData = function(t) {
					this._data = t
				}, cn.prototype.getData = function() {
					return this._data
				}, cn.prototype.toString = function() {
					return s$.toLineString(new a0(this._pts))
				}, cn.prototype.interfaces_ = function() {
					return [uH]
				}, cn.prototype.getClass = function() {
					return cn
				};
				var cr = function() {
					this._findAllIntersections = !1, this._isCheckEndSegmentsOnly = !1, this._li = null, this._interiorIntersection = null, this._intSegments = null, this._intersections = new ad, this._intersectionCount = 0, this._keepIntersections = !0;
					var t = arguments[0];
					this._li = t, this._interiorIntersection = null
				};
				cr.prototype.getInteriorIntersection = function() {
					return this._interiorIntersection
				}, cr.prototype.setCheckEndSegmentsOnly = function(t) {
					this._isCheckEndSegmentsOnly = t
				}, cr.prototype.getIntersectionSegments = function() {
					return this._intSegments
				}, cr.prototype.count = function() {
					return this._intersectionCount
				}, cr.prototype.getIntersections = function() {
					return this._intersections
				}, cr.prototype.setFindAllIntersections = function(t) {
					this._findAllIntersections = t
				}, cr.prototype.setKeepIntersections = function(t) {
					this._keepIntersections = t
				}, cr.prototype.processIntersections = function(t, e, n, r) {
					if (!this._findAllIntersections && this.hasIntersection() || t === n && e === r || this._isCheckEndSegmentsOnly && !(this.isEndSegment(t, e) || this.isEndSegment(n, r))) return null;
					var i = t.getCoordinates()[e],
						o = t.getCoordinates()[e + 1],
						s = n.getCoordinates()[r],
						a = n.getCoordinates()[r + 1];
					this._li.computeIntersection(i, o, s, a), this._li.hasIntersection() && this._li.isInteriorIntersection() && (this._intSegments = [, , , , ].fill(null), this._intSegments[0] = i, this._intSegments[1] = o, this._intSegments[2] = s, this._intSegments[3] = a, this._interiorIntersection = this._li.getIntersection(0), this._keepIntersections && this._intersections.add(this._interiorIntersection), this._intersectionCount++)
				}, cr.prototype.isEndSegment = function(t, e) {
					return 0 === e || e >= t.size() - 2
				}, cr.prototype.hasIntersection = function() {
					return null !== this._interiorIntersection
				}, cr.prototype.isDone = function() {
					return !this._findAllIntersections && null !== this._interiorIntersection
				}, cr.prototype.interfaces_ = function() {
					return [hv]
				}, cr.prototype.getClass = function() {
					return cr
				}, cr.createAllIntersectionsFinder = function(t) {
					var e = new cr(t);
					return e.setFindAllIntersections(!0), e
				}, cr.createAnyIntersectionFinder = function(t) {
					return new cr(t)
				}, cr.createIntersectionCounter = function(t) {
					var e = new cr(t);
					return e.setFindAllIntersections(!0), e.setKeepIntersections(!1), e
				};
				var ci = function() {
					this._li = new s6, this._segStrings = null, this._findAllIntersections = !1, this._segInt = null, this._isValid = !0;
					var t = arguments[0];
					this._segStrings = t
				};
				ci.prototype.execute = function() {
					if (null !== this._segInt) return null;
					this.checkInteriorIntersections()
				}, ci.prototype.getIntersections = function() {
					return this._segInt.getIntersections()
				}, ci.prototype.isValid = function() {
					return this.execute(), this._isValid
				}, ci.prototype.setFindAllIntersections = function(t) {
					this._findAllIntersections = t
				}, ci.prototype.checkInteriorIntersections = function() {
					this._isValid = !0, this._segInt = new cr(this._li), this._segInt.setFindAllIntersections(this._findAllIntersections);
					var t = new u3;
					if (t.setSegmentIntersector(this._segInt), t.computeNodes(this._segStrings), this._segInt.hasIntersection()) return this._isValid = !1, null
				}, ci.prototype.checkValid = function() {
					if (this.execute(), !this._isValid) throw new uc(this.getErrorMessage(), this._segInt.getInteriorIntersection())
				}, ci.prototype.getErrorMessage = function() {
					if (this._isValid) return "no intersections found";
					var t = this._segInt.getIntersectionSegments();
					return "found non-noded intersection between " + s$.toLineString(t[0], t[1]) + " and " + s$.toLineString(t[2], t[3])
				}, ci.prototype.interfaces_ = function() {
					return []
				}, ci.prototype.getClass = function() {
					return ci
				}, ci.computeIntersections = function(t) {
					var e = new ci(t);
					return e.setFindAllIntersections(!0), e.isValid(), e.getIntersections()
				};
				var co = function t() {
					this._nv = null;
					var e = arguments[0];
					this._nv = new ci(t.toSegmentStrings(e))
				};
				co.prototype.checkValid = function() {
					this._nv.checkValid()
				}, co.prototype.interfaces_ = function() {
					return []
				}, co.prototype.getClass = function() {
					return co
				}, co.toSegmentStrings = function(t) {
					for (var e = new ad, n = t.iterator(); n.hasNext();) {
						var r = n.next();
						e.add(new cn(r.getCoordinates(), r))
					}
					return e
				}, co.checkValid = function(t) {
					new co(t).checkValid()
				};
				var cs = function(t) {
					this._mapOp = t
				};
				cs.prototype.map = function(t) {
					for (var e = new ad, n = 0; n < t.getNumGeometries(); n++) {
						var r = this._mapOp.map(t.getGeometryN(n));
						r.isEmpty() || e.add(r)
					}
					return t.getFactory().createGeometryCollection(a7.toGeometryArray(e))
				}, cs.prototype.interfaces_ = function() {
					return []
				}, cs.prototype.getClass = function() {
					return cs
				}, cs.map = function(t, e) {
					return new cs(e).map(t)
				};
				var ca = function() {
					this._op = null, this._geometryFactory = null, this._ptLocator = null, this._lineEdgesList = new ad, this._resultLineList = new ad;
					var t = arguments[0],
						e = arguments[1],
						n = arguments[2];
					this._op = t, this._geometryFactory = e, this._ptLocator = n
				};
				ca.prototype.collectLines = function(t) {
					for (var e = this._op.getGraph().getEdgeEnds().iterator(); e.hasNext();) {
						var n = e.next();
						this.collectLineEdge(n, t, this._lineEdgesList), this.collectBoundaryTouchEdge(n, t, this._lineEdgesList)
					}
				}, ca.prototype.labelIsolatedLine = function(t, e) {
					var n = this._ptLocator.locate(t.getCoordinate(), this._op.getArgGeometry(e));
					t.getLabel().setLocation(e, n)
				}, ca.prototype.build = function(t) {
					return this.findCoveredLineEdges(), this.collectLines(t), this.buildLines(t), this._resultLineList
				}, ca.prototype.collectLineEdge = function(t, e, n) {
					var r = t.getLabel(),
						i = t.getEdge();
					t.isLineEdge() && (t.isVisited() || !cz.isResultOfOp(r, e) || i.isCovered() || (n.add(i), t.setVisitedEdge(!0)))
				}, ca.prototype.findCoveredLineEdges = function() {
					for (var t = this._op.getGraph().getNodes().iterator(); t.hasNext();) t.next().getEdges().findCoveredLineEdges();
					for (var e = this._op.getGraph().getEdgeEnds().iterator(); e.hasNext();) {
						var n = e.next(),
							r = n.getEdge();
						if (n.isLineEdge() && !r.isCoveredSet()) {
							var i = this._op.isCoveredByA(n.getCoordinate());
							r.setCovered(i)
						}
					}
				}, ca.prototype.labelIsolatedLines = function(t) {
					for (var e = t.iterator(); e.hasNext();) {
						var n = e.next(),
							r = n.getLabel();
						n.isIsolated() && (r.isNull(0) ? this.labelIsolatedLine(n, 0) : this.labelIsolatedLine(n, 1))
					}
				}, ca.prototype.buildLines = function(t) {
					for (var e = this._lineEdgesList.iterator(); e.hasNext();) {
						var n = e.next(),
							r = this._geometryFactory.createLineString(n.getCoordinates());
						this._resultLineList.add(r), n.setInResult(!0)
					}
				}, ca.prototype.collectBoundaryTouchEdge = function(t, e, n) {
					var r = t.getLabel();
					return t.isLineEdge() ? null : t.isVisited() ? null : t.isInteriorAreaEdge() ? null : t.getEdge().isInResult() ? null : (s2.isTrue(!(t.isInResult() || t.getSym().isInResult()) || !t.getEdge().isInResult()), void(cz.isResultOfOp(r, e) && e === cz.INTERSECTION && (n.add(t.getEdge()), t.setVisitedEdge(!0))))
				}, ca.prototype.interfaces_ = function() {
					return []
				}, ca.prototype.getClass = function() {
					return ca
				};
				var cu = function() {
					this._op = null, this._geometryFactory = null, this._resultPointList = new ad;
					var t = arguments[0],
						e = arguments[1];
					this._op = t, this._geometryFactory = e
				};
				cu.prototype.filterCoveredNodeToPoint = function(t) {
					var e = t.getCoordinate();
					if (!this._op.isCoveredByLA(e)) {
						var n = this._geometryFactory.createPoint(e);
						this._resultPointList.add(n)
					}
				}, cu.prototype.extractNonCoveredResultNodes = function(t) {
					for (var e = this._op.getGraph().getNodes().iterator(); e.hasNext();) {
						var n = e.next();
						if (!n.isInResult() && !n.isIncidentEdgeInResult() && (0 === n.getEdges().getDegree() || t === cz.INTERSECTION)) {
							var r = n.getLabel();
							cz.isResultOfOp(r, t) && this.filterCoveredNodeToPoint(n)
						}
					}
				}, cu.prototype.build = function(t) {
					return this.extractNonCoveredResultNodes(t), this._resultPointList
				}, cu.prototype.interfaces_ = function() {
					return []
				}, cu.prototype.getClass = function() {
					return cu
				};
				var ch = function() {
					this._inputGeom = null, this._factory = null, this._pruneEmptyGeometry = !0, this._preserveGeometryCollectionType = !0, this._preserveCollections = !1, this._preserveType = !1
				};
				ch.prototype.transformPoint = function(t, e) {
					return this._factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(), t))
				}, ch.prototype.transformPolygon = function(t, e) {
					var n = !0,
						r = this.transformLinearRing(t.getExteriorRing(), t);
					null !== r && r instanceof aH && !r.isEmpty() || (n = !1);
					for (var i = new ad, o = 0; o < t.getNumInteriorRing(); o++) {
						var s = this.transformLinearRing(t.getInteriorRingN(o), t);
						null === s || s.isEmpty() || (s instanceof aH || (n = !1), i.add(s))
					}
					if (n) return this._factory.createPolygon(r, i.toArray([]));
					var a = new ad;
					return null !== r && a.add(r), a.addAll(i), this._factory.buildGeometry(a)
				}, ch.prototype.createCoordinateSequence = function(t) {
					return this._factory.getCoordinateSequenceFactory().create(t)
				}, ch.prototype.getInputGeometry = function() {
					return this._inputGeom
				}, ch.prototype.transformMultiLineString = function(t, e) {
					for (var n = new ad, r = 0; r < t.getNumGeometries(); r++) {
						var i = this.transformLineString(t.getGeometryN(r), t);
						null !== i && (i.isEmpty() || n.add(i))
					}
					return this._factory.buildGeometry(n)
				}, ch.prototype.transformCoordinates = function(t, e) {
					return this.copy(t)
				}, ch.prototype.transformLineString = function(t, e) {
					return this._factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(), t))
				}, ch.prototype.transformMultiPoint = function(t, e) {
					for (var n = new ad, r = 0; r < t.getNumGeometries(); r++) {
						var i = this.transformPoint(t.getGeometryN(r), t);
						null !== i && (i.isEmpty() || n.add(i))
					}
					return this._factory.buildGeometry(n)
				}, ch.prototype.transformMultiPolygon = function(t, e) {
					for (var n = new ad, r = 0; r < t.getNumGeometries(); r++) {
						var i = this.transformPolygon(t.getGeometryN(r), t);
						null !== i && (i.isEmpty() || n.add(i))
					}
					return this._factory.buildGeometry(n)
				}, ch.prototype.copy = function(t) {
					return t.copy()
				}, ch.prototype.transformGeometryCollection = function(t, e) {
					for (var n = new ad, r = 0; r < t.getNumGeometries(); r++) {
						var i = this.transform(t.getGeometryN(r));
						null !== i && (this._pruneEmptyGeometry && i.isEmpty() || n.add(i))
					}
					return this._preserveGeometryCollectionType ? this._factory.createGeometryCollection(a7.toGeometryArray(n)) : this._factory.buildGeometry(n)
				}, ch.prototype.transform = function(t) {
					if (this._inputGeom = t, this._factory = t.getFactory(), t instanceof aX) return this.transformPoint(t, null);
					if (t instanceof aV) return this.transformMultiPoint(t, null);
					if (t instanceof aH) return this.transformLinearRing(t, null);
					if (t instanceof az) return this.transformLineString(t, null);
					if (t instanceof aA) return this.transformMultiLineString(t, null);
					if (t instanceof aY) return this.transformPolygon(t, null);
					if (t instanceof aW) return this.transformMultiPolygon(t, null);
					if (t instanceof aD) return this.transformGeometryCollection(t, null);
					throw new sv("Unknown Geometry subtype: " + t.getClass().getName())
				}, ch.prototype.transformLinearRing = function(t, e) {
					var n = this.transformCoordinates(t.getCoordinateSequence(), t);
					if (null === n) return this._factory.createLinearRing(null);
					var r = n.size();
					return r > 0 && r < 4 && !this._preserveType ? this._factory.createLineString(n) : this._factory.createLinearRing(n)
				}, ch.prototype.interfaces_ = function() {
					return []
				}, ch.prototype.getClass = function() {
					return ch
				};
				var cc = function t() {
					if (this._snapTolerance = 0, this._srcPts = null, this._seg = new uZ, this._allowSnappingToSourceVertices = !1, this._isClosed = !1, arguments[0] instanceof az && "number" == typeof arguments[1]) {
						var e = arguments[0],
							n = arguments[1];
						t.call(this, e.getCoordinates(), n)
					} else if (arguments[0] instanceof Array && "number" == typeof arguments[1]) {
						var r = arguments[0],
							i = arguments[1];
						this._srcPts = r, this._isClosed = t.isClosed(r), this._snapTolerance = i
					}
				};
				cc.prototype.snapVertices = function(t, e) {
					for (var n = this._isClosed ? t.size() - 1 : t.size(), r = 0; r < n; r++) {
						var i = t.get(r),
							o = this.findSnapForVertex(i, e);
						null !== o && (t.set(r, new sw(o)), 0 === r && this._isClosed && t.set(t.size() - 1, new sw(o)))
					}
				}, cc.prototype.findSnapForVertex = function(t, e) {
					for (var n = 0; n < e.length && !t.equals2D(e[n]); n++)
						if (t.distance(e[n]) < this._snapTolerance) return e[n];
					return null
				}, cc.prototype.snapTo = function(t) {
					var e = new a_(this._srcPts);
					return this.snapVertices(e, t), this.snapSegments(e, t), e.toCoordinateArray()
				}, cc.prototype.snapSegments = function(t, e) {
					if (0 === e.length) return null;
					var n = e.length;
					e[0].equals2D(e[e.length - 1]) && (n = e.length - 1);
					for (var r = 0; r < n; r++) {
						var i = e[r],
							o = this.findSegmentIndexToSnap(i, t);
						o >= 0 && t.add(o + 1, new sw(i), !1)
					}
				}, cc.prototype.findSegmentIndexToSnap = function(t, e) {
					for (var n = sx.MAX_VALUE, r = -1, i = 0; i < e.size() - 1; i++) {
						if (this._seg.p0 = e.get(i), this._seg.p1 = e.get(i + 1), this._seg.p0.equals2D(t) || this._seg.p1.equals2D(t)) {
							if (this._allowSnappingToSourceVertices) continue;
							return -1
						}
						var o = this._seg.distance(t);
						o < this._snapTolerance && o < n && (n = o, r = i)
					}
					return r
				}, cc.prototype.setAllowSnappingToSourceVertices = function(t) {
					this._allowSnappingToSourceVertices = t
				}, cc.prototype.interfaces_ = function() {
					return []
				}, cc.prototype.getClass = function() {
					return cc
				}, cc.isClosed = function(t) {
					return !(t.length <= 1) && t[0].equals2D(t[t.length - 1])
				};
				var cl = function(t) {
						this._srcGeom = t || null
					},
					cp = {
						SNAP_PRECISION_FACTOR: {
							configurable: !0
						}
					};
				cl.prototype.snapTo = function(t, e) {
					return new cf(e, this.extractTargetCoordinates(t)).transform(this._srcGeom)
				}, cl.prototype.snapToSelf = function(t, e) {
					var n = new cf(t, this.extractTargetCoordinates(this._srcGeom), !0).transform(this._srcGeom),
						r = n;
					return e && sO(r, aU) && (r = n.buffer(0)), r
				}, cl.prototype.computeSnapTolerance = function(t) {
					return this.computeMinimumSegmentLength(t) / 10
				}, cl.prototype.extractTargetCoordinates = function(t) {
					for (var e = new rR, n = t.getCoordinates(), r = 0; r < n.length; r++) e.add(n[r]);
					return e.toArray([].fill(null))
				}, cl.prototype.computeMinimumSegmentLength = function(t) {
					for (var e = sx.MAX_VALUE, n = 0; n < t.length - 1; n++) {
						var r = t[n].distance(t[n + 1]);
						r < e && (e = r)
					}
					return e
				}, cl.prototype.interfaces_ = function() {
					return []
				}, cl.prototype.getClass = function() {
					return cl
				}, cl.snap = function(t, e, n) {
					var r = [, , ].fill(null),
						i = new cl(t);
					r[0] = i.snapTo(e, n);
					var o = new cl(e);
					return r[1] = o.snapTo(r[0], n), r
				}, cl.computeOverlaySnapTolerance = function() {
					if (1 == arguments.length) {
						var t = arguments[0],
							e = cl.computeSizeBasedSnapTolerance(t),
							n = t.getPrecisionModel();
						if (n.getType() === a6.FIXED) {
							var r = 1 / n.getScale() * 2 / 1.415;
							r > e && (e = r)
						}
						return e
					}
					if (2 == arguments.length) {
						var i = arguments[0],
							o = arguments[1];
						return Math.min(cl.computeOverlaySnapTolerance(i), cl.computeOverlaySnapTolerance(o))
					}
				}, cl.computeSizeBasedSnapTolerance = function(t) {
					var e = t.getEnvelopeInternal();
					return Math.min(e.getHeight(), e.getWidth()) * cl.SNAP_PRECISION_FACTOR
				}, cl.snapToSelf = function(t, e, n) {
					return new cl(t).snapToSelf(e, n)
				}, cp.SNAP_PRECISION_FACTOR.get = function() {
					return 1e-9
				}, Object.defineProperties(cl, cp);
				var cf = function(t) {
						function e(e, n, r) {
							t.call(this), this._snapTolerance = e || null, this._snapPts = n || null, this._isSelfSnap = void 0 !== r && r
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.snapLine = function(t, e) {
							var n = new cc(t, this._snapTolerance);
							return n.setAllowSnappingToSourceVertices(this._isSelfSnap), n.snapTo(e)
						}, e.prototype.transformCoordinates = function(t, e) {
							var n = t.toCoordinateArray(),
								r = this.snapLine(n, this._snapPts);
							return this._factory.getCoordinateSequenceFactory().create(r)
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, e
					}(ch),
					cg = function() {
						this._isFirst = !0, this._commonMantissaBitsCount = 53, this._commonBits = 0, this._commonSignExp = null
					};
				cg.prototype.getCommon = function() {
					return sx.longBitsToDouble(this._commonBits)
				}, cg.prototype.add = function(t) {
					var e = sx.doubleToLongBits(t);
					return this._isFirst ? (this._commonBits = e, this._commonSignExp = cg.signExpBits(this._commonBits), this._isFirst = !1, null) : cg.signExpBits(e) !== this._commonSignExp ? (this._commonBits = 0, null) : void(this._commonMantissaBitsCount = cg.numCommonMostSigMantissaBits(this._commonBits, e), this._commonBits = cg.zeroLowerBits(this._commonBits, 64 - (12 + this._commonMantissaBitsCount)))
				}, cg.prototype.toString = function() {
					if (1 == arguments.length) {
						var t = arguments[0],
							e = sx.longBitsToDouble(t),
							n = "0000000000000000000000000000000000000000000000000000000000000000" + sx.toBinaryString(t),
							r = n.substring(n.length - 64);
						return r.substring(0, 1) + "  " + r.substring(1, 12) + "(exp) " + r.substring(12) + " [ " + e + " ]"
					}
				}, cg.prototype.interfaces_ = function() {
					return []
				}, cg.prototype.getClass = function() {
					return cg
				}, cg.getBit = function(t, e) {
					return 0 != (t & 1 << e) ? 1 : 0
				}, cg.signExpBits = function(t) {
					return t >> 52
				}, cg.zeroLowerBits = function(t, e) {
					return t & ~((1 << e) - 1)
				}, cg.numCommonMostSigMantissaBits = function(t, e) {
					for (var n = 0, r = 52; r >= 0; r--) {
						if (cg.getBit(t, r) !== cg.getBit(e, r)) return n;
						n++
					}
					return 52
				};
				var cd = function() {
						this._commonCoord = null, this._ccFilter = new c_
					},
					cy = {
						CommonCoordinateFilter: {
							configurable: !0
						},
						Translater: {
							configurable: !0
						}
					};
				cd.prototype.addCommonBits = function(t) {
					var e = new cm(this._commonCoord);
					t.apply(e), t.geometryChanged()
				}, cd.prototype.removeCommonBits = function(t) {
					if (0 === this._commonCoord.x && 0 === this._commonCoord.y) return t;
					var e = new sw(this._commonCoord);
					e.x = -e.x, e.y = -e.y;
					var n = new cm(e);
					return t.apply(n), t.geometryChanged(), t
				}, cd.prototype.getCommonCoordinate = function() {
					return this._commonCoord
				}, cd.prototype.add = function(t) {
					t.apply(this._ccFilter), this._commonCoord = this._ccFilter.getCommonCoordinate()
				}, cd.prototype.interfaces_ = function() {
					return []
				}, cd.prototype.getClass = function() {
					return cd
				}, cy.CommonCoordinateFilter.get = function() {
					return c_
				}, cy.Translater.get = function() {
					return cm
				}, Object.defineProperties(cd, cy);
				var c_ = function() {
					this._commonBitsX = new cg, this._commonBitsY = new cg
				};
				c_.prototype.filter = function(t) {
					this._commonBitsX.add(t.x), this._commonBitsY.add(t.y)
				}, c_.prototype.getCommonCoordinate = function() {
					return new sw(this._commonBitsX.getCommon(), this._commonBitsY.getCommon())
				}, c_.prototype.interfaces_ = function() {
					return [ai]
				}, c_.prototype.getClass = function() {
					return c_
				};
				var cm = function() {
					this.trans = null;
					var t = arguments[0];
					this.trans = t
				};
				cm.prototype.filter = function(t, e) {
					var n = t.getOrdinate(e, 0) + this.trans.x,
						r = t.getOrdinate(e, 1) + this.trans.y;
					t.setOrdinate(e, 0, n), t.setOrdinate(e, 1, r)
				}, cm.prototype.isDone = function() {
					return !1
				}, cm.prototype.isGeometryChanged = function() {
					return !0
				}, cm.prototype.interfaces_ = function() {
					return [aT]
				}, cm.prototype.getClass = function() {
					return cm
				};
				var cv = function(t, e) {
					this._geom = [, , ].fill(null), this._snapTolerance = null, this._cbr = null, this._geom[0] = t, this._geom[1] = e, this.computeSnapTolerance()
				};
				cv.prototype.selfSnap = function(t) {
					return new cl(t).snapTo(t, this._snapTolerance)
				}, cv.prototype.removeCommonBits = function(t) {
					this._cbr = new cd, this._cbr.add(t[0]), this._cbr.add(t[1]);
					var e = [, , ].fill(null);
					return e[0] = this._cbr.removeCommonBits(t[0].copy()), e[1] = this._cbr.removeCommonBits(t[1].copy()), e
				}, cv.prototype.prepareResult = function(t) {
					return this._cbr.addCommonBits(t), t
				}, cv.prototype.getResultGeometry = function(t) {
					var e = this.snap(this._geom),
						n = cz.overlayOp(e[0], e[1], t);
					return this.prepareResult(n)
				}, cv.prototype.checkValid = function(t) {
					t.isValid() || sY.out.println("Snapped geometry is invalid")
				}, cv.prototype.computeSnapTolerance = function() {
					this._snapTolerance = cl.computeOverlaySnapTolerance(this._geom[0], this._geom[1])
				}, cv.prototype.snap = function(t) {
					var e = this.removeCommonBits(t);
					return cl.snap(e[0], e[1], this._snapTolerance)
				}, cv.prototype.interfaces_ = function() {
					return []
				}, cv.prototype.getClass = function() {
					return cv
				}, cv.overlayOp = function(t, e, n) {
					return new cv(t, e).getResultGeometry(n)
				}, cv.union = function(t, e) {
					return cv.overlayOp(t, e, cz.UNION)
				}, cv.intersection = function(t, e) {
					return cv.overlayOp(t, e, cz.INTERSECTION)
				}, cv.symDifference = function(t, e) {
					return cv.overlayOp(t, e, cz.SYMDIFFERENCE)
				}, cv.difference = function(t, e) {
					return cv.overlayOp(t, e, cz.DIFFERENCE)
				};
				var cx = function(t, e) {
					this._geom = [, , ].fill(null), this._geom[0] = t, this._geom[1] = e
				};
				cx.prototype.getResultGeometry = function(t) {
					var e = null,
						n = !1,
						r = null;
					try {
						e = cz.overlayOp(this._geom[0], this._geom[1], t), n = !0
					} catch (t) {
						if (!(t instanceof s0)) throw t;
						r = t
					}
					if (!n) try {
						e = cv.overlayOp(this._geom[0], this._geom[1], t)
					} catch (t) {
						throw t instanceof s0 ? r : t
					}
					return e
				}, cx.prototype.interfaces_ = function() {
					return []
				}, cx.prototype.getClass = function() {
					return cx
				}, cx.overlayOp = function(t, e, n) {
					return new cx(t, e).getResultGeometry(n)
				}, cx.union = function(t, e) {
					return cx.overlayOp(t, e, cz.UNION)
				}, cx.intersection = function(t, e) {
					return cx.overlayOp(t, e, cz.INTERSECTION)
				}, cx.symDifference = function(t, e) {
					return cx.overlayOp(t, e, cz.SYMDIFFERENCE)
				}, cx.difference = function(t, e) {
					return cx.overlayOp(t, e, cz.DIFFERENCE)
				};
				var cE = function() {
					this.mce = null, this.chainIndex = null;
					var t = arguments[0],
						e = arguments[1];
					this.mce = t, this.chainIndex = e
				};
				cE.prototype.computeIntersections = function(t, e) {
					this.mce.computeIntersectsForChain(this.chainIndex, t.mce, t.chainIndex, e)
				}, cE.prototype.interfaces_ = function() {
					return []
				}, cE.prototype.getClass = function() {
					return cE
				};
				var cb = function t() {
						if (this._label = null, this._xValue = null, this._eventType = null, this._insertEvent = null, this._deleteEventIndex = null, this._obj = null, 2 == arguments.length) {
							var e = arguments[0],
								n = arguments[1];
							this._eventType = t.DELETE, this._xValue = e, this._insertEvent = n
						} else if (3 == arguments.length) {
							var r = arguments[0],
								i = arguments[1],
								o = arguments[2];
							this._eventType = t.INSERT, this._label = r, this._xValue = i, this._obj = o
						}
					},
					cI = {
						INSERT: {
							configurable: !0
						},
						DELETE: {
							configurable: !0
						}
					};
				cb.prototype.isDelete = function() {
					return this._eventType === cb.DELETE
				}, cb.prototype.setDeleteEventIndex = function(t) {
					this._deleteEventIndex = t
				}, cb.prototype.getObject = function() {
					return this._obj
				}, cb.prototype.compareTo = function(t) {
					return this._xValue < t._xValue ? -1 : this._xValue > t._xValue ? 1 : this._eventType < t._eventType ? -1 : this._eventType > t._eventType ? 1 : 0
				}, cb.prototype.getInsertEvent = function() {
					return this._insertEvent
				}, cb.prototype.isInsert = function() {
					return this._eventType === cb.INSERT
				}, cb.prototype.isSameLabel = function(t) {
					return null !== this._label && this._label === t._label
				}, cb.prototype.getDeleteEventIndex = function() {
					return this._deleteEventIndex
				}, cb.prototype.interfaces_ = function() {
					return [sb]
				}, cb.prototype.getClass = function() {
					return cb
				}, cI.INSERT.get = function() {
					return 1
				}, cI.DELETE.get = function() {
					return 2
				}, Object.defineProperties(cb, cI);
				var cN = function() {};
				cN.prototype.interfaces_ = function() {
					return []
				}, cN.prototype.getClass = function() {
					return cN
				};
				var cw = function() {
					this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._properIntersectionPoint = null, this._li = null, this._includeProper = null, this._recordIsolated = null, this._isSelfIntersection = null, this._numIntersections = 0, this.numTests = 0, this._bdyNodes = null, this._isDone = !1, this._isDoneWhenProperInt = !1;
					var t = arguments[0],
						e = arguments[1],
						n = arguments[2];
					this._li = t, this._includeProper = e, this._recordIsolated = n
				};
				cw.prototype.isTrivialIntersection = function(t, e, n, r) {
					if (t === n && 1 === this._li.getIntersectionNum()) {
						if (cw.isAdjacentSegments(e, r)) return !0;
						if (t.isClosed()) {
							var i = t.getNumPoints() - 1;
							if (0 === e && r === i || 0 === r && e === i) return !0
						}
					}
					return !1
				}, cw.prototype.getProperIntersectionPoint = function() {
					return this._properIntersectionPoint
				}, cw.prototype.setIsDoneIfProperInt = function(t) {
					this._isDoneWhenProperInt = t
				}, cw.prototype.hasProperInteriorIntersection = function() {
					return this._hasProperInterior
				}, cw.prototype.isBoundaryPointInternal = function(t, e) {
					for (var n = e.iterator(); n.hasNext();) {
						var r = n.next().getCoordinate();
						if (t.isIntersection(r)) return !0
					}
					return !1
				}, cw.prototype.hasProperIntersection = function() {
					return this._hasProper
				}, cw.prototype.hasIntersection = function() {
					return this._hasIntersection
				}, cw.prototype.isDone = function() {
					return this._isDone
				}, cw.prototype.isBoundaryPoint = function(t, e) {
					return null !== e && (!!this.isBoundaryPointInternal(t, e[0]) || !!this.isBoundaryPointInternal(t, e[1]))
				}, cw.prototype.setBoundaryNodes = function(t, e) {
					this._bdyNodes = [, , ].fill(null), this._bdyNodes[0] = t, this._bdyNodes[1] = e
				}, cw.prototype.addIntersections = function(t, e, n, r) {
					if (t === n && e === r) return null;
					this.numTests++;
					var i = t.getCoordinates()[e],
						o = t.getCoordinates()[e + 1],
						s = n.getCoordinates()[r],
						a = n.getCoordinates()[r + 1];
					this._li.computeIntersection(i, o, s, a), this._li.hasIntersection() && (this._recordIsolated && (t.setIsolated(!1), n.setIsolated(!1)), this._numIntersections++, this.isTrivialIntersection(t, e, n, r) || (this._hasIntersection = !0, !this._includeProper && this._li.isProper() || (t.addIntersections(this._li, e, 0), n.addIntersections(this._li, r, 1)), this._li.isProper() && (this._properIntersectionPoint = this._li.getIntersection(0).copy(), this._hasProper = !0, this._isDoneWhenProperInt && (this._isDone = !0), this.isBoundaryPoint(this._li, this._bdyNodes) || (this._hasProperInterior = !0))))
				}, cw.prototype.interfaces_ = function() {
					return []
				}, cw.prototype.getClass = function() {
					return cw
				}, cw.isAdjacentSegments = function(t, e) {
					return 1 === Math.abs(t - e)
				};
				var cC = function(t) {
						function e() {
							t.call(this), this.events = new ad, this.nOverlaps = null
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.prepareEvents = function() {
							uA.sort(this.events);
							for (var t = 0; t < this.events.size(); t++) {
								var e = this.events.get(t);
								e.isDelete() && e.getInsertEvent().setDeleteEventIndex(t)
							}
						}, e.prototype.computeIntersections = function() {
							if (1 == arguments.length) {
								var t = arguments[0];
								this.nOverlaps = 0, this.prepareEvents();
								for (var e = 0; e < this.events.size(); e++) {
									var n = this.events.get(e);
									if (n.isInsert() && this.processOverlaps(e, n.getDeleteEventIndex(), n, t), t.isDone()) break
								}
							} else if (3 == arguments.length) {
								if (arguments[2] instanceof cw && sO(arguments[0], ag) && sO(arguments[1], ag)) {
									var r = arguments[0],
										i = arguments[1],
										o = arguments[2];
									this.addEdges(r, r), this.addEdges(i, i), this.computeIntersections(o)
								} else if ("boolean" == typeof arguments[2] && sO(arguments[0], ag) && arguments[1] instanceof cw) {
									var s = arguments[0],
										a = arguments[1];
									arguments[2] ? this.addEdges(s, null) : this.addEdges(s), this.computeIntersections(a)
								}
							}
						}, e.prototype.addEdge = function(t, e) {
							for (var n = t.getMonotoneChainEdge(), r = n.getStartIndexes(), i = 0; i < r.length - 1; i++) {
								var o = new cE(n, i),
									s = new cb(e, n.getMinX(i), o);
								this.events.add(s), this.events.add(new cb(n.getMaxX(i), s))
							}
						}, e.prototype.processOverlaps = function(t, e, n, r) {
							for (var i = n.getObject(), o = t; o < e; o++) {
								var s = this.events.get(o);
								if (s.isInsert()) {
									var a = s.getObject();
									n.isSameLabel(s) || (i.computeIntersections(a, r), this.nOverlaps++)
								}
							}
						}, e.prototype.addEdges = function() {
							if (1 == arguments.length)
								for (var t = arguments[0].iterator(); t.hasNext();) {
									var e = t.next();
									this.addEdge(e, e)
								} else if (2 == arguments.length)
									for (var n = arguments[0], r = arguments[1], i = n.iterator(); i.hasNext();) {
										var o = i.next();
										this.addEdge(o, r)
									}
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, e
					}(cN),
					cS = function() {
						this._min = sx.POSITIVE_INFINITY, this._max = sx.NEGATIVE_INFINITY
					},
					cM = {
						NodeComparator: {
							configurable: !0
						}
					};
				cS.prototype.getMin = function() {
					return this._min
				}, cS.prototype.intersects = function(t, e) {
					return !(this._min > e || this._max < t)
				}, cS.prototype.getMax = function() {
					return this._max
				}, cS.prototype.toString = function() {
					return s$.toLineString(new sw(this._min, 0), new sw(this._max, 0))
				}, cS.prototype.interfaces_ = function() {
					return []
				}, cS.prototype.getClass = function() {
					return cS
				}, cM.NodeComparator.get = function() {
					return cL
				}, Object.defineProperties(cS, cM);
				var cL = function() {};
				cL.prototype.compare = function(t, e) {
					var n = (t._min + t._max) / 2,
						r = (e._min + e._max) / 2;
					return n < r ? -1 : n > r ? 1 : 0
				}, cL.prototype.interfaces_ = function() {
					return [sN]
				}, cL.prototype.getClass = function() {
					return cL
				};
				var cP = function(t) {
						function e() {
							t.call(this), this._item = null;
							var e = arguments[0],
								n = arguments[1],
								r = arguments[2];
							this._min = e, this._max = n, this._item = r
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.query = function(t, e, n) {
							if (!this.intersects(t, e)) return null;
							n.visitItem(this._item)
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, e
					}(cS),
					cO = function(t) {
						function e() {
							t.call(this), this._node1 = null, this._node2 = null;
							var e = arguments[0],
								n = arguments[1];
							this._node1 = e, this._node2 = n, this.buildExtent(this._node1, this._node2)
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.buildExtent = function(t, e) {
							this._min = Math.min(t._min, e._min), this._max = Math.max(t._max, e._max)
						}, e.prototype.query = function(t, e, n) {
							if (!this.intersects(t, e)) return null;
							null !== this._node1 && this._node1.query(t, e, n), null !== this._node2 && this._node2.query(t, e, n)
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, e
					}(cS),
					cR = function() {
						this._leaves = new ad, this._root = null, this._level = 0
					};
				cR.prototype.buildTree = function() {
					uA.sort(this._leaves, new cS.NodeComparator);
					for (var t = this._leaves, e = null, n = new ad;;) {
						if (this.buildLevel(t, n), 1 === n.size()) return n.get(0);
						e = t, t = n, n = e
					}
				}, cR.prototype.insert = function(t, e, n) {
					if (null !== this._root) throw Error("Index cannot be added to once it has been queried");
					this._leaves.add(new cP(t, e, n))
				}, cR.prototype.query = function(t, e, n) {
					this.init(), this._root.query(t, e, n)
				}, cR.prototype.buildRoot = function() {
					if (null !== this._root) return null;
					this._root = this.buildTree()
				}, cR.prototype.printNode = function(t) {
					sY.out.println(s$.toLineString(new sw(t._min, this._level), new sw(t._max, this._level)))
				}, cR.prototype.init = function() {
					if (null !== this._root) return null;
					this.buildRoot()
				}, cR.prototype.buildLevel = function(t, e) {
					this._level++, e.clear();
					for (var n = 0; n < t.size(); n += 2) {
						var r = t.get(n);
						if (null === (n + 1 < t.size() ? t.get(n) : null)) e.add(r);
						else {
							var i = new cO(t.get(n), t.get(n + 1));
							e.add(i)
						}
					}
				}, cR.prototype.interfaces_ = function() {
					return []
				}, cR.prototype.getClass = function() {
					return cR
				};
				var cT = function() {
					this._items = new ad
				};
				cT.prototype.visitItem = function(t) {
					this._items.add(t)
				}, cT.prototype.getItems = function() {
					return this._items
				}, cT.prototype.interfaces_ = function() {
					return [uO]
				}, cT.prototype.getClass = function() {
					return cT
				};
				var cD = function() {
						this._index = null;
						var t = arguments[0];
						if (!sO(t, aU)) throw new sv("Argument must be Polygonal");
						this._index = new cq(t)
					},
					cA = {
						SegmentVisitor: {
							configurable: !0
						},
						IntervalIndexedGeometry: {
							configurable: !0
						}
					};
				cD.prototype.locate = function(t) {
					var e = new s5(t),
						n = new cF(e);
					return this._index.query(t.y, t.y, n), e.getLocation()
				}, cD.prototype.interfaces_ = function() {
					return [hl]
				}, cD.prototype.getClass = function() {
					return cD
				}, cA.SegmentVisitor.get = function() {
					return cF
				}, cA.IntervalIndexedGeometry.get = function() {
					return cq
				}, Object.defineProperties(cD, cA);
				var cF = function() {
					this._counter = null;
					var t = arguments[0];
					this._counter = t
				};
				cF.prototype.visitItem = function(t) {
					this._counter.countSegment(t.getCoordinate(0), t.getCoordinate(1))
				}, cF.prototype.interfaces_ = function() {
					return [uO]
				}, cF.prototype.getClass = function() {
					return cF
				};
				var cq = function() {
					this._index = new cR;
					var t = arguments[0];
					this.init(t)
				};
				cq.prototype.init = function(t) {
					for (var e = hJ.getLines(t).iterator(); e.hasNext();) {
						var n = e.next().getCoordinates();
						this.addLine(n)
					}
				}, cq.prototype.addLine = function(t) {
					for (var e = 1; e < t.length; e++) {
						var n = new uZ(t[e - 1], t[e]),
							r = Math.min(n.p0.y, n.p1.y),
							i = Math.max(n.p0.y, n.p1.y);
						this._index.insert(r, i, n)
					}
				}, cq.prototype.query = function() {
					if (2 == arguments.length) {
						var t = arguments[0],
							e = arguments[1],
							n = new cT;
						return this._index.query(t, e, n), n.getItems()
					}
					if (3 == arguments.length) {
						var r = arguments[0],
							i = arguments[1],
							o = arguments[2];
						this._index.query(r, i, o)
					}
				}, cq.prototype.interfaces_ = function() {
					return []
				}, cq.prototype.getClass = function() {
					return cq
				};
				var cG = function(t) {
						function e() {
							if (t.call(this), this._parentGeom = null, this._lineEdgeMap = new a4, this._boundaryNodeRule = null, this._useBoundaryDeterminationRule = !0, this._argIndex = null, this._boundaryNodes = null, this._hasTooFewPoints = !1, this._invalidPoint = null, this._areaPtLocator = null, this._ptLocator = new hZ, 2 == arguments.length) {
								var e = arguments[0],
									n = arguments[1],
									r = ao.OGC_SFS_BOUNDARY_RULE;
								this._argIndex = e, this._parentGeom = n, this._boundaryNodeRule = r, null !== n && this.add(n)
							} else if (3 == arguments.length) {
								var i = arguments[0],
									o = arguments[1],
									s = arguments[2];
								this._argIndex = i, this._parentGeom = o, this._boundaryNodeRule = s, null !== o && this.add(o)
							}
						}
						return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.insertBoundaryPoint = function(t, n) {
							var r = this._nodes.addNode(n).getLabel(),
								i = 1;
							sL.NONE, r.getLocation(t, ua.ON) === sL.BOUNDARY && i++;
							var o = e.determineBoundary(this._boundaryNodeRule, i);
							r.setLocation(t, o)
						}, e.prototype.computeSelfNodes = function() {
							if (2 == arguments.length) {
								var t = arguments[0],
									e = arguments[1];
								return this.computeSelfNodes(t, e, !1)
							}
							if (3 == arguments.length) {
								var n = arguments[0],
									r = arguments[1],
									i = arguments[2],
									o = new cw(n, !0, !1);
								o.setIsDoneIfProperInt(i);
								var s = this.createEdgeSetIntersector(),
									a = this._parentGeom instanceof aH || this._parentGeom instanceof aY || this._parentGeom instanceof aW;
								return s.computeIntersections(this._edges, o, r || !a), this.addSelfIntersectionNodes(this._argIndex), o
							}
						}, e.prototype.computeSplitEdges = function(t) {
							for (var e = this._edges.iterator(); e.hasNext();) e.next().eiList.addSplitEdges(t)
						}, e.prototype.computeEdgeIntersections = function(t, e, n) {
							var r = new cw(e, n, !0);
							return r.setBoundaryNodes(this.getBoundaryNodes(), t.getBoundaryNodes()), this.createEdgeSetIntersector().computeIntersections(this._edges, t._edges, r), r
						}, e.prototype.getGeometry = function() {
							return this._parentGeom
						}, e.prototype.getBoundaryNodeRule = function() {
							return this._boundaryNodeRule
						}, e.prototype.hasTooFewPoints = function() {
							return this._hasTooFewPoints
						}, e.prototype.addPoint = function() {
							if (arguments[0] instanceof aX) {
								var t = arguments[0].getCoordinate();
								this.insertPoint(this._argIndex, t, sL.INTERIOR)
							} else if (arguments[0] instanceof sw) {
								var e = arguments[0];
								this.insertPoint(this._argIndex, e, sL.INTERIOR)
							}
						}, e.prototype.addPolygon = function(t) {
							this.addPolygonRing(t.getExteriorRing(), sL.EXTERIOR, sL.INTERIOR);
							for (var e = 0; e < t.getNumInteriorRing(); e++) {
								var n = t.getInteriorRingN(e);
								this.addPolygonRing(n, sL.INTERIOR, sL.EXTERIOR)
							}
						}, e.prototype.addEdge = function(t) {
							this.insertEdge(t);
							var e = t.getCoordinates();
							this.insertPoint(this._argIndex, e[0], sL.BOUNDARY), this.insertPoint(this._argIndex, e[e.length - 1], sL.BOUNDARY)
						}, e.prototype.addLineString = function(t) {
							var e = am.removeRepeatedPoints(t.getCoordinates());
							if (e.length < 2) return this._hasTooFewPoints = !0, this._invalidPoint = e[0], null;
							var n = new hS(e, new ug(this._argIndex, sL.INTERIOR));
							this._lineEdgeMap.put(t, n), this.insertEdge(n), s2.isTrue(e.length >= 2, "found LineString with single point"), this.insertBoundaryPoint(this._argIndex, e[0]), this.insertBoundaryPoint(this._argIndex, e[e.length - 1])
						}, e.prototype.getInvalidPoint = function() {
							return this._invalidPoint
						}, e.prototype.getBoundaryPoints = function() {
							for (var t = this.getBoundaryNodes(), e = Array(t.size()).fill(null), n = 0, r = t.iterator(); r.hasNext();) {
								var i = r.next();
								e[n++] = i.getCoordinate().copy()
							}
							return e
						}, e.prototype.getBoundaryNodes = function() {
							return null === this._boundaryNodes && (this._boundaryNodes = this._nodes.getBoundaryNodes(this._argIndex)), this._boundaryNodes
						}, e.prototype.addSelfIntersectionNode = function(t, e, n) {
							if (this.isBoundaryNode(t, e)) return null;
							n === sL.BOUNDARY && this._useBoundaryDeterminationRule ? this.insertBoundaryPoint(t, e) : this.insertPoint(t, e, n)
						}, e.prototype.addPolygonRing = function(t, e, n) {
							if (t.isEmpty()) return null;
							var r = am.removeRepeatedPoints(t.getCoordinates());
							if (r.length < 4) return this._hasTooFewPoints = !0, this._invalidPoint = r[0], null;
							var i = e,
								o = n;
							s9.isCCW(r) && (i = n, o = e);
							var s = new hS(r, new ug(this._argIndex, sL.BOUNDARY, i, o));
							this._lineEdgeMap.put(t, s), this.insertEdge(s), this.insertPoint(this._argIndex, r[0], sL.BOUNDARY)
						}, e.prototype.insertPoint = function(t, e, n) {
							var r = this._nodes.addNode(e),
								i = r.getLabel();
							null === i ? r._label = new ug(t, n) : i.setLocation(t, n)
						}, e.prototype.createEdgeSetIntersector = function() {
							return new cC
						}, e.prototype.addSelfIntersectionNodes = function(t) {
							for (var e = this._edges.iterator(); e.hasNext();)
								for (var n = e.next(), r = n.getLabel().getLocation(t), i = n.eiList.iterator(); i.hasNext();) {
									var o = i.next();
									this.addSelfIntersectionNode(t, o.coord, r)
								}
						}, e.prototype.add = function() {
							if (1 != arguments.length) return t.prototype.add.apply(this, arguments);
							var e = arguments[0];
							if (e.isEmpty()) return null;
							if (e instanceof aW && (this._useBoundaryDeterminationRule = !1), e instanceof aY) this.addPolygon(e);
							else if (e instanceof az) this.addLineString(e);
							else if (e instanceof aX) this.addPoint(e);
							else if (e instanceof aV) this.addCollection(e);
							else if (e instanceof aA) this.addCollection(e);
							else if (e instanceof aW) this.addCollection(e);
							else {
								if (!(e instanceof aD)) throw Error(e.getClass().getName());
								this.addCollection(e)
							}
						}, e.prototype.addCollection = function(t) {
							for (var e = 0; e < t.getNumGeometries(); e++) {
								var n = t.getGeometryN(e);
								this.add(n)
							}
						}, e.prototype.locate = function(t) {
							return sO(this._parentGeom, aU) && this._parentGeom.getNumGeometries() > 50 ? (null === this._areaPtLocator && (this._areaPtLocator = new cD(this._parentGeom)), this._areaPtLocator.locate(t)) : this._ptLocator.locate(t, this._parentGeom)
						}, e.prototype.findEdge = function() {
							if (1 == arguments.length) {
								var e = arguments[0];
								return this._lineEdgeMap.get(e)
							}
							return t.prototype.findEdge.apply(this, arguments)
						}, e.prototype.interfaces_ = function() {
							return []
						}, e.prototype.getClass = function() {
							return e
						}, e.determineBoundary = function(t, e) {
							return t.isInBoundary(e) ? sL.BOUNDARY : sL.INTERIOR
						}, e
					}(uC),
					cB = function() {
						if (this._li = new s6, this._resultPrecisionModel = null, this._arg = null, 1 == arguments.length) {
							var t = arguments[0];
							this.setComputationPrecision(t.getPrecisionModel()), this._arg = [, ].fill(null), this._arg[0] = new cG(0, t)
						} else if (2 == arguments.length) {
							var e = arguments[0],
								n = arguments[1],
								r = ao.OGC_SFS_BOUNDARY_RULE;
							e.getPrecisionModel().compareTo(n.getPrecisionModel()) >= 0 ? this.setComputationPrecision(e.getPrecisionModel()) : this.setComputationPrecision(n.getPrecisionModel()), this._arg = [, , ].fill(null), this._arg[0] = new cG(0, e, r), this._arg[1] = new cG(1, n, r)
						} else if (3 == arguments.length) {
							var i = arguments[0],
								o = arguments[1],
								s = arguments[2];
							i.getPrecisionModel().compareTo(o.getPrecisionModel()) >= 0 ? this.setComputationPrecision(i.getPrecisionModel()) : this.setComputationPrecision(o.getPrecisionModel()), this._arg = [, , ].fill(null), this._arg[0] = new cG(0, i, s), this._arg[1] = new cG(1, o, s)
						}
					};
				cB.prototype.getArgGeometry = function(t) {
					return this._arg[t].getGeometry()
				}, cB.prototype.setComputationPrecision = function(t) {
					this._resultPrecisionModel = t, this._li.setPrecisionModel(this._resultPrecisionModel)
				}, cB.prototype.interfaces_ = function() {
					return []
				}, cB.prototype.getClass = function() {
					return cB
				};
				var ck = function() {};
				ck.prototype.interfaces_ = function() {
					return []
				}, ck.prototype.getClass = function() {
					return ck
				}, ck.map = function() {
					if (arguments[0] instanceof ae && sO(arguments[1], ck.MapOp)) {
						for (var t = arguments[0], e = arguments[1], n = new ad, r = 0; r < t.getNumGeometries(); r++) {
							var i = e.map(t.getGeometryN(r));
							null !== i && n.add(i)
						}
						return t.getFactory().buildGeometry(n)
					}
					if (sO(arguments[0], al) && sO(arguments[1], ck.MapOp)) {
						for (var o = arguments[0], s = arguments[1], a = new ad, u = o.iterator(); u.hasNext();) {
							var h = u.next(),
								c = s.map(h);
							null !== c && a.add(c)
						}
						return a
					}
				}, ck.MapOp = function() {};
				var cz = function(t) {
					function e() {
						var e = arguments[0],
							n = arguments[1];
						t.call(this, e, n), this._ptLocator = new hZ, this._geomFact = null, this._resultGeom = null, this._graph = null, this._edgeList = new hm, this._resultPolyList = new ad, this._resultLineList = new ad, this._resultPointList = new ad, this._graph = new uC(new hy), this._geomFact = e.getFactory()
					}
					return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.insertUniqueEdge = function(t) {
						var e = this._edgeList.findEqualEdge(t);
						if (null !== e) {
							var n = e.getLabel(),
								r = t.getLabel();
							e.isPointwiseEqual(t) || (r = new ug(t.getLabel())).flip();
							var i = e.getDepth();
							i.isNull() && i.add(n), i.add(r), n.merge(r)
						} else this._edgeList.add(t)
					}, e.prototype.getGraph = function() {
						return this._graph
					}, e.prototype.cancelDuplicateResultEdges = function() {
						for (var t = this._graph.getEdgeEnds().iterator(); t.hasNext();) {
							var e = t.next(),
								n = e.getSym();
							e.isInResult() && n.isInResult() && (e.setInResult(!1), n.setInResult(!1))
						}
					}, e.prototype.isCoveredByLA = function(t) {
						return !!this.isCovered(t, this._resultLineList) || !!this.isCovered(t, this._resultPolyList)
					}, e.prototype.computeGeometry = function(t, n, r, i) {
						var o = new ad;
						return o.addAll(t), o.addAll(n), o.addAll(r), o.isEmpty() ? e.createEmptyResult(i, this._arg[0].getGeometry(), this._arg[1].getGeometry(), this._geomFact) : this._geomFact.buildGeometry(o)
					}, e.prototype.mergeSymLabels = function() {
						for (var t = this._graph.getNodes().iterator(); t.hasNext();) t.next().getEdges().mergeSymLabels()
					}, e.prototype.isCovered = function(t, e) {
						for (var n = e.iterator(); n.hasNext();) {
							var r = n.next();
							if (this._ptLocator.locate(t, r) !== sL.EXTERIOR) return !0
						}
						return !1
					}, e.prototype.replaceCollapsedEdges = function() {
						for (var t = new ad, e = this._edgeList.iterator(); e.hasNext();) {
							var n = e.next();
							n.isCollapsed() && (e.remove(), t.add(n.getCollapsedEdge()))
						}
						this._edgeList.addAll(t)
					}, e.prototype.updateNodeLabelling = function() {
						for (var t = this._graph.getNodes().iterator(); t.hasNext();) {
							var e = t.next(),
								n = e.getEdges().getLabel();
							e.getLabel().merge(n)
						}
					}, e.prototype.getResultGeometry = function(t) {
						return this.computeOverlay(t), this._resultGeom
					}, e.prototype.insertUniqueEdges = function(t) {
						for (var e = t.iterator(); e.hasNext();) {
							var n = e.next();
							this.insertUniqueEdge(n)
						}
					}, e.prototype.computeOverlay = function(t) {
						this.copyPoints(0), this.copyPoints(1), this._arg[0].computeSelfNodes(this._li, !1), this._arg[1].computeSelfNodes(this._li, !1), this._arg[0].computeEdgeIntersections(this._arg[1], this._li, !0);
						var e = new ad;
						this._arg[0].computeSplitEdges(e), this._arg[1].computeSplitEdges(e), this.insertUniqueEdges(e), this.computeLabelsFromDepths(), this.replaceCollapsedEdges(), co.checkValid(this._edgeList.getEdges()), this._graph.addEdges(this._edgeList.getEdges()), this.computeLabelling(), this.labelIncompleteNodes(), this.findResultAreaEdges(t), this.cancelDuplicateResultEdges();
						var n = new uS(this._geomFact);
						n.add(this._graph), this._resultPolyList = n.getPolygons();
						var r = new ca(this, this._geomFact, this._ptLocator);
						this._resultLineList = r.build(t);
						var i = new cu(this, this._geomFact, this._ptLocator);
						this._resultPointList = i.build(t), this._resultGeom = this.computeGeometry(this._resultPointList, this._resultLineList, this._resultPolyList, t)
					}, e.prototype.labelIncompleteNode = function(t, e) {
						var n = this._ptLocator.locate(t.getCoordinate(), this._arg[e].getGeometry());
						t.getLabel().setLocation(e, n)
					}, e.prototype.copyPoints = function(t) {
						for (var e = this._arg[t].getNodeIterator(); e.hasNext();) {
							var n = e.next();
							this._graph.addNode(n.getCoordinate()).setLabel(t, n.getLabel().getLocation(t))
						}
					}, e.prototype.findResultAreaEdges = function(t) {
						for (var n = this._graph.getEdgeEnds().iterator(); n.hasNext();) {
							var r = n.next(),
								i = r.getLabel();
							i.isArea() && !r.isInteriorAreaEdge() && e.isResultOfOp(i.getLocation(0, ua.RIGHT), i.getLocation(1, ua.RIGHT), t) && r.setInResult(!0)
						}
					}, e.prototype.computeLabelsFromDepths = function() {
						for (var t = this._edgeList.iterator(); t.hasNext();) {
							var e = t.next(),
								n = e.getLabel(),
								r = e.getDepth();
							if (!r.isNull()) {
								r.normalize();
								for (var i = 0; i < 2; i++) n.isNull(i) || !n.isArea() || r.isNull(i) || (0 === r.getDelta(i) ? n.toLine(i) : (s2.isTrue(!r.isNull(i, ua.LEFT), "depth of LEFT side has not been initialized"), n.setLocation(i, ua.LEFT, r.getLocation(i, ua.LEFT)), s2.isTrue(!r.isNull(i, ua.RIGHT), "depth of RIGHT side has not been initialized"), n.setLocation(i, ua.RIGHT, r.getLocation(i, ua.RIGHT))))
							}
						}
					}, e.prototype.computeLabelling = function() {
						for (var t = this._graph.getNodes().iterator(); t.hasNext();) t.next().getEdges().computeLabelling(this._arg);
						this.mergeSymLabels(), this.updateNodeLabelling()
					}, e.prototype.labelIncompleteNodes = function() {
						for (var t = this._graph.getNodes().iterator(); t.hasNext();) {
							var e = t.next(),
								n = e.getLabel();
							e.isIsolated() && (n.isNull(0) ? this.labelIncompleteNode(e, 0) : this.labelIncompleteNode(e, 1)), e.getEdges().updateLabelling(n)
						}
					}, e.prototype.isCoveredByA = function(t) {
						return !!this.isCovered(t, this._resultPolyList)
					}, e.prototype.interfaces_ = function() {
						return []
					}, e.prototype.getClass = function() {
						return e
					}, e
				}(cB);
				cz.overlayOp = function(t, e, n) {
					return new cz(t, e).getResultGeometry(n)
				}, cz.intersection = function(t, e) {
					return t.isEmpty() || e.isEmpty() ? cz.createEmptyResult(cz.INTERSECTION, t, e, t.getFactory()) : t.isGeometryCollection() ? cs.map(t, {
						interfaces_: function() {
							return [ck.MapOp]
						},
						map: function(t) {
							return t.intersection(e)
						}
					}) : (t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), cx.overlayOp(t, e, cz.INTERSECTION))
				}, cz.symDifference = function(t, e) {
					if (t.isEmpty() || e.isEmpty()) {
						if (t.isEmpty() && e.isEmpty()) return cz.createEmptyResult(cz.SYMDIFFERENCE, t, e, t.getFactory());
						if (t.isEmpty()) return e.copy();
						if (e.isEmpty()) return t.copy()
					}
					return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), cx.overlayOp(t, e, cz.SYMDIFFERENCE)
				}, cz.resultDimension = function(t, e, n) {
					var r = e.getDimension(),
						i = n.getDimension(),
						o = -1;
					switch (t) {
						case cz.INTERSECTION:
							o = Math.min(r, i);
							break;
						case cz.UNION:
							o = Math.max(r, i);
							break;
						case cz.DIFFERENCE:
							o = r;
							break;
						case cz.SYMDIFFERENCE:
							o = Math.max(r, i)
					}
					return o
				}, cz.createEmptyResult = function(t, e, n, r) {
					var i = null;
					switch (cz.resultDimension(t, e, n)) {
						case -1:
							i = r.createGeometryCollection([].fill(null));
							break;
						case 0:
							i = r.createPoint();
							break;
						case 1:
							i = r.createLineString();
							break;
						case 2:
							i = r.createPolygon()
					}
					return i
				}, cz.difference = function(t, e) {
					return t.isEmpty() ? cz.createEmptyResult(cz.DIFFERENCE, t, e, t.getFactory()) : e.isEmpty() ? t.copy() : (t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), cx.overlayOp(t, e, cz.DIFFERENCE))
				}, cz.isResultOfOp = function() {
					if (2 == arguments.length) {
						var t = arguments[0],
							e = arguments[1],
							n = t.getLocation(0),
							r = t.getLocation(1);
						return cz.isResultOfOp(n, r, e)
					}
					if (3 == arguments.length) {
						var i = arguments[0],
							o = arguments[1],
							s = arguments[2];
						switch (i === sL.BOUNDARY && (i = sL.INTERIOR), o === sL.BOUNDARY && (o = sL.INTERIOR), s) {
							case cz.INTERSECTION:
								return i === sL.INTERIOR && o === sL.INTERIOR;
							case cz.UNION:
								return i === sL.INTERIOR || o === sL.INTERIOR;
							case cz.DIFFERENCE:
								return i === sL.INTERIOR && o !== sL.INTERIOR;
							case cz.SYMDIFFERENCE:
								return i === sL.INTERIOR && o !== sL.INTERIOR || i !== sL.INTERIOR && o === sL.INTERIOR
						}
						return !1
					}
				}, cz.INTERSECTION = 1, cz.UNION = 2, cz.DIFFERENCE = 3, cz.SYMDIFFERENCE = 4;
				var cj = function() {
					this._g = null, this._boundaryDistanceTolerance = null, this._linework = null, this._ptLocator = new hZ, this._seg = new uZ;
					var t = arguments[0],
						e = arguments[1];
					this._g = t, this._boundaryDistanceTolerance = e, this._linework = this.extractLinework(t)
				};
				cj.prototype.isWithinToleranceOfBoundary = function(t) {
					for (var e = 0; e < this._linework.getNumGeometries(); e++)
						for (var n = this._linework.getGeometryN(e).getCoordinateSequence(), r = 0; r < n.size() - 1; r++)
							if (n.getCoordinate(r, this._seg.p0), n.getCoordinate(r + 1, this._seg.p1), this._seg.distance(t) <= this._boundaryDistanceTolerance) return !0;
					return !1
				}, cj.prototype.getLocation = function(t) {
					return this.isWithinToleranceOfBoundary(t) ? sL.BOUNDARY : this._ptLocator.locate(t, this._g)
				}, cj.prototype.extractLinework = function(t) {
					var e = new cX;
					t.apply(e);
					var n = e.getLinework(),
						r = a7.toLineStringArray(n);
					return t.getFactory().createMultiLineString(r)
				}, cj.prototype.interfaces_ = function() {
					return []
				}, cj.prototype.getClass = function() {
					return cj
				};
				var cX = function() {
					this._linework = null, this._linework = new ad
				};
				cX.prototype.getLinework = function() {
					return this._linework
				}, cX.prototype.filter = function(t) {
					if (t instanceof aY) {
						this._linework.add(t.getExteriorRing());
						for (var e = 0; e < t.getNumInteriorRing(); e++) this._linework.add(t.getInteriorRingN(e))
					}
				}, cX.prototype.interfaces_ = function() {
					return [aR]
				}, cX.prototype.getClass = function() {
					return cX
				};
				var cU = function() {
					this._g = null, this._doLeft = !0, this._doRight = !0;
					var t = arguments[0];
					this._g = t
				};
				cU.prototype.extractPoints = function(t, e, n) {
					for (var r = t.getCoordinates(), i = 0; i < r.length - 1; i++) this.computeOffsetPoints(r[i], r[i + 1], e, n)
				}, cU.prototype.setSidesToGenerate = function(t, e) {
					this._doLeft = t, this._doRight = e
				}, cU.prototype.getPoints = function(t) {
					for (var e = new ad, n = hJ.getLines(this._g).iterator(); n.hasNext();) {
						var r = n.next();
						this.extractPoints(r, t, e)
					}
					return e
				}, cU.prototype.computeOffsetPoints = function(t, e, n, r) {
					var i = e.x - t.x,
						o = e.y - t.y,
						s = Math.sqrt(i * i + o * o),
						a = n * i / s,
						u = n * o / s,
						h = (e.x + t.x) / 2,
						c = (e.y + t.y) / 2;
					if (this._doLeft) {
						var l = new sw(h - u, c + a);
						r.add(l)
					}
					if (this._doRight) {
						var p = new sw(h + u, c - a);
						r.add(p)
					}
				}, cU.prototype.interfaces_ = function() {
					return []
				}, cU.prototype.getClass = function() {
					return cU
				};
				var cY = function t() {
						this._geom = null, this._locFinder = null, this._location = [, , , ].fill(null), this._invalidLocation = null, this._boundaryDistanceTolerance = t.TOLERANCE, this._testCoords = new ad;
						var e = arguments[0],
							n = arguments[1],
							r = arguments[2];
						this._boundaryDistanceTolerance = t.computeBoundaryDistanceTolerance(e, n), this._geom = [e, n, r], this._locFinder = [new cj(this._geom[0], this._boundaryDistanceTolerance), new cj(this._geom[1], this._boundaryDistanceTolerance), new cj(this._geom[2], this._boundaryDistanceTolerance)]
					},
					cV = {
						TOLERANCE: {
							configurable: !0
						}
					};
				cY.prototype.reportResult = function(t, e, n) {
					sY.out.println("Overlay result invalid - A:" + sL.toLocationSymbol(e[0]) + " B:" + sL.toLocationSymbol(e[1]) + " expected:" + (n ? "i" : "e") + " actual:" + sL.toLocationSymbol(e[2]))
				}, cY.prototype.isValid = function(t) {
					return this.addTestPts(this._geom[0]), this.addTestPts(this._geom[1]), this.checkValid(t)
				}, cY.prototype.checkValid = function() {
					if (1 == arguments.length) {
						for (var t = arguments[0], e = 0; e < this._testCoords.size(); e++) {
							var n = this._testCoords.get(e);
							if (!this.checkValid(t, n)) return this._invalidLocation = n, !1
						}
						return !0
					}
					if (2 == arguments.length) {
						var r = arguments[0],
							i = arguments[1];
						return this._location[0] = this._locFinder[0].getLocation(i), this._location[1] = this._locFinder[1].getLocation(i), this._location[2] = this._locFinder[2].getLocation(i), !!cY.hasLocation(this._location, sL.BOUNDARY) || this.isValidResult(r, this._location)
					}
				}, cY.prototype.addTestPts = function(t) {
					var e = new cU(t);
					this._testCoords.addAll(e.getPoints(5 * this._boundaryDistanceTolerance))
				}, cY.prototype.isValidResult = function(t, e) {
					var n = cz.isResultOfOp(e[0], e[1], t),
						r = !(n ^ e[2] === sL.INTERIOR);
					return r || this.reportResult(t, e, n), r
				}, cY.prototype.getInvalidLocation = function() {
					return this._invalidLocation
				}, cY.prototype.interfaces_ = function() {
					return []
				}, cY.prototype.getClass = function() {
					return cY
				}, cY.hasLocation = function(t, e) {
					for (var n = 0; n < 3; n++)
						if (t[n] === e) return !0;
					return !1
				}, cY.computeBoundaryDistanceTolerance = function(t, e) {
					return Math.min(cl.computeSizeBasedSnapTolerance(t), cl.computeSizeBasedSnapTolerance(e))
				}, cY.isValid = function(t, e, n, r) {
					return new cY(t, e, r).isValid(n)
				}, cV.TOLERANCE.get = function() {
					return 1e-6
				}, Object.defineProperties(cY, cV);
				var cH = function t(e) {
					this._geomFactory = null, this._skipEmpty = !1, this._inputGeoms = null, this._geomFactory = t.extractFactory(e), this._inputGeoms = e
				};
				cH.prototype.extractElements = function(t, e) {
					if (null === t) return null;
					for (var n = 0; n < t.getNumGeometries(); n++) {
						var r = t.getGeometryN(n);
						this._skipEmpty && r.isEmpty() || e.add(r)
					}
				}, cH.prototype.combine = function() {
					for (var t = new ad, e = this._inputGeoms.iterator(); e.hasNext();) {
						var n = e.next();
						this.extractElements(n, t)
					}
					return 0 === t.size() ? null !== this._geomFactory ? this._geomFactory.createGeometryCollection(null) : null : this._geomFactory.buildGeometry(t)
				}, cH.prototype.interfaces_ = function() {
					return []
				}, cH.prototype.getClass = function() {
					return cH
				}, cH.combine = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						return new cH(t).combine()
					}
					if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						return new cH(cH.createList(e, n)).combine()
					}
					if (3 == arguments.length) {
						var r = arguments[0],
							i = arguments[1],
							o = arguments[2];
						return new cH(cH.createList(r, i, o)).combine()
					}
				}, cH.extractFactory = function(t) {
					return t.isEmpty() ? null : t.iterator().next().getFactory()
				}, cH.createList = function() {
					if (2 == arguments.length) {
						var t = arguments[0],
							e = arguments[1],
							n = new ad;
						return n.add(t), n.add(e), n
					}
					if (3 == arguments.length) {
						var r = arguments[0],
							i = arguments[1],
							o = arguments[2],
							s = new ad;
						return s.add(r), s.add(i), s.add(o), s
					}
				};
				var cW = function() {
						this._inputPolys = null, this._geomFactory = null;
						var t = arguments[0];
						this._inputPolys = t, null === this._inputPolys && (this._inputPolys = new ad)
					},
					cJ = {
						STRTREE_NODE_CAPACITY: {
							configurable: !0
						}
					};
				cW.prototype.reduceToGeometries = function(t) {
					for (var e = new ad, n = t.iterator(); n.hasNext();) {
						var r = n.next(),
							i = null;
						sO(r, ag) ? i = this.unionTree(r) : r instanceof ae && (i = r), e.add(i)
					}
					return e
				}, cW.prototype.extractByEnvelope = function(t, e, n) {
					for (var r = new ad, i = 0; i < e.getNumGeometries(); i++) {
						var o = e.getGeometryN(i);
						o.getEnvelopeInternal().intersects(t) ? r.add(o) : n.add(o)
					}
					return this._geomFactory.buildGeometry(r)
				}, cW.prototype.unionOptimized = function(t, e) {
					var n = t.getEnvelopeInternal(),
						r = e.getEnvelopeInternal();
					if (!n.intersects(r)) return cH.combine(t, e);
					if (1 >= t.getNumGeometries() && 1 >= e.getNumGeometries()) return this.unionActual(t, e);
					var i = n.intersection(r);
					return this.unionUsingEnvelopeIntersection(t, e, i)
				}, cW.prototype.union = function() {
					if (null === this._inputPolys) throw Error("union() method cannot be called twice");
					if (this._inputPolys.isEmpty()) return null;
					this._geomFactory = this._inputPolys.iterator().next().getFactory();
					for (var t = new uz(cW.STRTREE_NODE_CAPACITY), e = this._inputPolys.iterator(); e.hasNext();) {
						var n = e.next();
						t.insert(n.getEnvelopeInternal(), n)
					}
					this._inputPolys = null;
					var r = t.itemsTree();
					return this.unionTree(r)
				}, cW.prototype.binaryUnion = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						return this.binaryUnion(t, 0, t.size())
					}
					if (3 == arguments.length) {
						var e = arguments[0],
							n = arguments[1],
							r = arguments[2];
						if (r - n <= 1) {
							var i = cW.getGeometry(e, n);
							return this.unionSafe(i, null)
						}
						if (r - n == 2) return this.unionSafe(cW.getGeometry(e, n), cW.getGeometry(e, n + 1));
						var o = Math.trunc((r + n) / 2),
							s = this.binaryUnion(e, n, o),
							a = this.binaryUnion(e, o, r);
						return this.unionSafe(s, a)
					}
				}, cW.prototype.repeatedUnion = function(t) {
					for (var e = null, n = t.iterator(); n.hasNext();) {
						var r = n.next();
						e = null === e ? r.copy() : e.union(r)
					}
					return e
				}, cW.prototype.unionSafe = function(t, e) {
					return null === t && null === e ? null : null === t ? e.copy() : null === e ? t.copy() : this.unionOptimized(t, e)
				}, cW.prototype.unionActual = function(t, e) {
					return cW.restrictToPolygons(t.union(e))
				}, cW.prototype.unionTree = function(t) {
					var e = this.reduceToGeometries(t);
					return this.binaryUnion(e)
				}, cW.prototype.unionUsingEnvelopeIntersection = function(t, e, n) {
					var r = new ad,
						i = this.extractByEnvelope(n, t, r),
						o = this.extractByEnvelope(n, e, r),
						s = this.unionActual(i, o);
					return r.add(s), cH.combine(r)
				}, cW.prototype.bufferUnion = function() {
					if (1 == arguments.length) {
						var t = arguments[0];
						return t.get(0).getFactory().buildGeometry(t).buffer(0)
					}
					if (2 == arguments.length) {
						var e = arguments[0],
							n = arguments[1];
						return e.getFactory().createGeometryCollection([e, n]).buffer(0)
					}
				}, cW.prototype.interfaces_ = function() {
					return []
				}, cW.prototype.getClass = function() {
					return cW
				}, cW.restrictToPolygons = function(t) {
					if (sO(t, aU)) return t;
					var e = hW.getPolygons(t);
					return 1 === e.size() ? e.get(0) : t.getFactory().createMultiPolygon(a7.toPolygonArray(e))
				}, cW.getGeometry = function(t, e) {
					return e >= t.size() ? null : t.get(e)
				}, cW.union = function(t) {
					return new cW(t).union()
				}, cJ.STRTREE_NODE_CAPACITY.get = function() {
					return 4
				}, Object.defineProperties(cW, cJ);
				var cZ = function() {};
				cZ.prototype.interfaces_ = function() {
					return []
				}, cZ.prototype.getClass = function() {
					return cZ
				}, cZ.union = function(t, e) {
					if (t.isEmpty() || e.isEmpty()) {
						if (t.isEmpty() && e.isEmpty()) return cz.createEmptyResult(cz.UNION, t, e, t.getFactory());
						if (t.isEmpty()) return e.copy();
						if (e.isEmpty()) return t.copy()
					}
					return t.checkNotGeometryCollection(t), t.checkNotGeometryCollection(e), cx.overlayOp(t, e, cz.UNION)
				};
				var cK = function() {
					return new rq
				};
				rq.prototype = {
					constructor: rq,
					reset: function() {
						this.s = this.t = 0
					},
					add: function(t) {
						rG(cQ, t, this.t), rG(this, cQ.s, this.s), this.s ? this.t += cQ.t : this.s = cQ.t
					},
					valueOf: function() {
						return this.s
					}
				};
				var cQ = new rq,
					c$ = 1e-6,
					c0 = Math.PI,
					c1 = c0 / 2,
					c2 = c0 / 4,
					c3 = 2 * c0,
					c4 = 180 / c0,
					c6 = c0 / 180,
					c8 = Math.abs,
					c5 = Math.atan,
					c9 = Math.atan2,
					c7 = Math.cos,
					lt = Math.exp,
					le = Math.log,
					ln = Math.sin,
					lr = Math.sqrt,
					li = Math.tan,
					lo = {
						Feature: function(t, e) {
							rz(t.geometry, e)
						},
						FeatureCollection: function(t, e) {
							for (var n = t.features, r = -1, i = n.length; ++r < i;) rz(n[r].geometry, e)
						}
					},
					ls = {
						Sphere: function(t, e) {
							e.sphere()
						},
						Point: function(t, e) {
							t = t.coordinates, e.point(t[0], t[1], t[2])
						},
						MultiPoint: function(t, e) {
							for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) t = n[r], e.point(t[0], t[1], t[2])
						},
						LineString: function(t, e) {
							rj(t.coordinates, e, 0)
						},
						MultiLineString: function(t, e) {
							for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) rj(n[r], e, 0)
						},
						Polygon: function(t, e) {
							rX(t.coordinates, e)
						},
						MultiPolygon: function(t, e) {
							for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) rX(n[r], e)
						},
						GeometryCollection: function(t, e) {
							for (var n = t.geometries, r = -1, i = n.length; ++r < i;) rz(n[r], e)
						}
					},
					la = function(t, e) {
						t && lo.hasOwnProperty(t.type) ? lo[t.type](t, e) : rz(t, e)
					},
					lu = (cK(), cK(), cK(), function(t, e) {
						function n(n, r) {
							return e((n = t(n, r))[0], n[1])
						}
						return t.invert && e.invert && (n.invert = function(n, r) {
							return (n = e.invert(n, r)) && t.invert(n[0], n[1])
						}), n
					});
				rK.invert = rK;
				var lh = function(t) {
						function e(e) {
							return e = t(e[0] * c6, e[1] * c6), e[0] *= c4, e[1] *= c4, e
						}
						return t = rQ(t[0] * c6, t[1] * c6, t.length > 2 ? t[2] * c6 : 0), e.invert = function(e) {
							return e = t.invert(e[0] * c6, e[1] * c6), e[0] *= c4, e[1] *= c4, e
						}, e
					},
					lc = function() {
						var t, e = [];
						return {
							point: function(e, n) {
								t.push([e, n])
							},
							lineStart: function() {
								e.push(t = [])
							},
							lineEnd: rk,
							rejoin: function() {
								e.length > 1 && e.push(e.pop().concat(e.shift()))
							},
							result: function() {
								var n = e;
								return e = [], t = null, n
							}
						}
					},
					ll = function(t, e, n, r, i, o) {
						var s, a = t[0],
							u = t[1],
							h = 0,
							c = 1,
							l = e[0] - a,
							p = e[1] - u;
						if (s = n - a, l || !(s > 0)) {
							if (s /= l, l < 0) {
								if (s < h) return;
								s < c && (c = s)
							} else if (l > 0) {
								if (s > c) return;
								s > h && (h = s)
							}
							if (s = i - a, l || !(s < 0)) {
								if (s /= l, l < 0) {
									if (s > c) return;
									s > h && (h = s)
								} else if (l > 0) {
									if (s < h) return;
									s < c && (c = s)
								}
								if (s = r - u, p || !(s > 0)) {
									if (s /= p, p < 0) {
										if (s < h) return;
										s < c && (c = s)
									} else if (p > 0) {
										if (s > c) return;
										s > h && (h = s)
									}
									if (s = o - u, p || !(s < 0)) {
										if (s /= p, p < 0) {
											if (s > c) return;
											s > h && (h = s)
										} else if (p > 0) {
											if (s < h) return;
											s < c && (c = s)
										}
										return h > 0 && (t[0] = a + h * l, t[1] = u + h * p), c < 1 && (e[0] = a + c * l, e[1] = u + c * p), !0
									}
								}
							}
						}
					},
					lp = function(t, e) {
						return c8(t[0] - e[0]) < c$ && c8(t[1] - e[1]) < c$
					},
					lf = function(t, e, n, r, i) {
						var o, s, a = [],
							u = [];
						if (t.forEach(function(t) {
								if (!((e = t.length - 1) <= 0)) {
									var e, n, r = t[0],
										s = t[e];
									if (lp(r, s)) {
										for (i.lineStart(), o = 0; o < e; ++o) i.point((r = t[o])[0], r[1]);
										i.lineEnd()
									} else a.push(n = new r3(r, t, null, !0)), u.push(n.o = new r3(r, null, n, !1)), a.push(n = new r3(s, t, null, !1)), u.push(n.o = new r3(s, null, n, !0))
								}
							}), a.length) {
							for (u.sort(e), r4(a), r4(u), o = 0, s = u.length; o < s; ++o) u[o].e = n = !n;
							for (var h, c, l = a[0];;) {
								for (var p = l, f = !0; p.v;)
									if ((p = p.n) === l) return;
								h = p.z, i.lineStart();
								do {
									if (p.v = p.o.v = !0, p.e) {
										if (f)
											for (o = 0, s = h.length; o < s; ++o) i.point((c = h[o])[0], c[1]);
										else r(p.x, p.n.x, 1, i);
										p = p.n
									} else {
										if (f)
											for (o = (h = p.p.z).length - 1; o >= 0; --o) i.point((c = h[o])[0], c[1]);
										else r(p.x, p.p.x, -1, i);
										p = p.p
									}
									h = (p = p.o).z, f = !f
								} while (!p.v);
								i.lineEnd()
							}
						}
					},
					lg = function(t, e) {
						return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
					},
					ld = (1 === (ip = lg).length && (ig = ip, ip = function(t, e) {
						return lg(ig(t), e)
					}), function(t) {
						for (var e, n, r, i = t.length, o = -1, s = 0; ++o < i;) s += t[o].length;
						for (n = Array(s); --i >= 0;)
							for (e = (r = t[i]).length; --e >= 0;) n[--s] = r[e];
						return n
					}),
					ly = cK(),
					l_ = (cK(), function(t) {
						return t
					}),
					lm = (cK(), cK(), 1 / 0),
					lv = lm,
					lx = -lm,
					lE = lx,
					lb = {
						point: function(t, e) {
							t < lm && (lm = t), t > lx && (lx = t), e < lv && (lv = e), e > lE && (lE = e)
						},
						lineStart: rk,
						lineEnd: rk,
						polygonStart: rk,
						polygonEnd: rk,
						result: function() {
							var t = [
								[lm, lv],
								[lx, lE]
							];
							return lx = lE = -(lv = lm = 1 / 0), t
						}
					},
					lI = (cK(), function(t, e, n, r) {
						return function(i, o) {
							function s(e, n) {
								var r = i(e, n);
								t(e = r[0], n = r[1]) && o.point(e, n)
							}

							function a(t, e) {
								var n = i(t, e);
								y.point(n[0], n[1])
							}

							function u() {
								E.point = a, y.lineStart()
							}

							function h() {
								E.point = s, y.lineEnd()
							}

							function c(t, e) {
								d.push([t, e]);
								var n = i(t, e);
								v.point(n[0], n[1])
							}

							function l() {
								v.lineStart(), d = []
							}

							function p() {
								c(d[0][0], d[0][1]), v.lineEnd();
								var t, e, n, r, i = v.clean(),
									s = m.result(),
									a = s.length;
								if (d.pop(), f.push(d), d = null, a) {
									if (1 & i) {
										if ((e = (n = s[0]).length - 1) > 0) {
											for (x || (o.polygonStart(), x = !0), o.lineStart(), t = 0; t < e; ++t) o.point((r = n[t])[0], r[1]);
											o.lineEnd()
										}
									} else a > 1 && 2 & i && s.push(s.pop().concat(s.shift())), g.push(s.filter(r6))
								}
							}
							var f, g, d, y = e(o),
								_ = i.invert(r[0], r[1]),
								m = lc(),
								v = e(m),
								x = !1,
								E = {
									point: s,
									lineStart: u,
									lineEnd: h,
									polygonStart: function() {
										E.point = c, E.lineStart = l, E.lineEnd = p, g = [], f = []
									},
									polygonEnd: function() {
										E.point = s, E.lineStart = u, E.lineEnd = h, g = ld(g);
										var t = function(t, e) {
											var n = e[0],
												r = e[1],
												i = [ln(n), -c7(n), 0],
												o = 0,
												s = 0;
											ly.reset();
											for (var a = 0, u = t.length; a < u; ++a)
												if (c = (h = t[a]).length)
													for (var h, c, l = h[c - 1], p = l[0], f = l[1] / 2 + c2, g = ln(f), d = c7(f), y = 0; y < c; ++y, p = m, g = x, d = E, l = _) {
														var _ = h[y],
															m = _[0],
															v = _[1] / 2 + c2,
															x = ln(v),
															E = c7(v),
															b = m - p,
															I = b >= 0 ? 1 : -1,
															N = I * b,
															w = N > c0,
															C = g * x;
														if (ly.add(c9(C * I * ln(N), d * E + C * c7(N))), o += w ? b + I * c3 : b, w ^ p >= n ^ m >= n) {
															var S = rH(rY(l), rY(_));
															rZ(S);
															var M = rH(i, S);
															rZ(M);
															var L = (w ^ b >= 0 ? -1 : 1) * rB(M[2]);
															(r > L || r === L && (S[0] || S[1])) && (s += w ^ b >= 0 ? 1 : -1)
														}
													}
											return (o < -c$ || o < c$ && ly < -c$) ^ 1 & s
										}(f, _);
										g.length ? (x || (o.polygonStart(), x = !0), lf(g, r8, t, n, o)) : t && (x || (o.polygonStart(), x = !0), o.lineStart(), n(null, null, 1, o), o.lineEnd()), x && (o.polygonEnd(), x = !1), g = f = null
									},
									sphere: function() {
										o.polygonStart(), o.lineStart(), n(null, null, 1, o), o.lineEnd(), o.polygonEnd()
									}
								};
							return E
						}
					}),
					lN = lI(function() {
						return !0
					}, function(t) {
						var e, n = NaN,
							r = NaN,
							i = NaN;
						return {
							lineStart: function() {
								t.lineStart(), e = 1
							},
							point: function(o, s) {
								var a, u, h, c, l, p, f = o > 0 ? c0 : -c0,
									g = c8(o - n);
								c8(g - c0) < c$ ? (t.point(n, r = (r + s) / 2 > 0 ? c1 : -c1), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(f, r), t.point(o, r), e = 0) : i !== f && g >= c0 && (c8(n - i) < c$ && (n -= i * c$), c8(o - f) < c$ && (o -= f * c$), a = n, u = r, r = c8(p = ln(a - (h = o))) > c$ ? c5((ln(u) * (l = c7(s)) * ln(h) - ln(s) * (c = c7(u)) * ln(a)) / (c * l * p)) : (u + s) / 2, t.point(i, r), t.lineEnd(), t.lineStart(), t.point(f, r), e = 0), t.point(n = o, r = s), i = f
							},
							lineEnd: function() {
								t.lineEnd(), n = r = NaN
							},
							clean: function() {
								return 2 - e
							}
						}
					}, function(t, e, n, r) {
						var i;
						if (null == t) i = n * c1, r.point(-c0, i), r.point(0, i), r.point(c0, i), r.point(c0, 0), r.point(c0, -i), r.point(0, -i), r.point(-c0, -i), r.point(-c0, 0), r.point(-c0, i);
						else if (c8(t[0] - e[0]) > c$) {
							var o = t[0] < e[0] ? c0 : -c0;
							i = n * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
						} else r.point(e[0], e[1])
					}, [-c0, -c1]),
					lw = function(t, e) {
						function n(t, e) {
							return c7(t) * c7(e) > o
						}

						function r(t, e, n) {
							var r = [1, 0, 0],
								i = rH(rY(t), rY(e)),
								s = rV(i, i),
								a = i[0],
								u = s - a * a;
							if (!u) return !n && t;
							var h = rH(r, i),
								c = rJ(r, o * s / u);
							rW(c, rJ(i, -o * a / u));
							var l = rV(c, h),
								p = rV(h, h),
								f = l * l - p * (rV(c, c) - 1);
							if (!(f < 0)) {
								var g = lr(f),
									d = rJ(h, (-l - g) / p);
								if (rW(d, c), d = rU(d), !n) return d;
								var y, _ = t[0],
									m = e[0],
									v = t[1],
									x = e[1];
								m < _ && (y = _, _ = m, m = y);
								var E = m - _,
									b = c8(E - c0) < c$;
								if (!b && x < v && (y = v, v = x, x = y), b || E < c$ ? b ? v + x > 0 ^ d[1] < (c8(d[0] - _) < c$ ? v : x) : v <= d[1] && d[1] <= x : E > c0 ^ (_ <= d[0] && d[0] <= m)) {
									var I = rJ(h, (-l + g) / p);
									return rW(I, c), [d, rU(I)]
								}
							}
						}

						function i(e, n) {
							var r = s ? t : c0 - t,
								i = 0;
							return e < -r ? i |= 1 : e > r && (i |= 2), n < -r ? i |= 4 : n > r && (i |= 8), i
						}
						var o = c7(t),
							s = o > 0,
							a = c8(o) > c$;
						return lI(n, function(t) {
							var e, o, u, h, c;
							return {
								lineStart: function() {
									h = u = !1, c = 1
								},
								point: function(l, p) {
									var f, g, d = [l, p],
										y = n(l, p),
										_ = s ? y ? 0 : i(l, p) : y ? i(l + (l < 0 ? c0 : -c0), p) : 0;
									(!e && (h = u = y) && t.lineStart(), y !== u && (!(g = r(e, d)) || lp(e, g) || lp(d, g)) && (d[0] += c$, d[1] += c$, y = n(d[0], d[1])), y !== u) ? (c = 0, y ? (t.lineStart(), g = r(d, e), t.point(g[0], g[1])) : (g = r(e, d), t.point(g[0], g[1]), t.lineEnd()), e = g) : a && e && s ^ y && !(_ & o) && (f = r(d, e, !0)) && (c = 0, s ? (t.lineStart(), t.point(f[0][0], f[0][1]), t.point(f[1][0], f[1][1]), t.lineEnd()) : (t.point(f[1][0], f[1][1]), t.lineEnd(), t.lineStart(), t.point(f[0][0], f[0][1]))), !y || e && lp(e, d) || t.point(d[0], d[1]), e = d, u = y, o = _
								},
								lineEnd: function() {
									u && t.lineEnd(), e = null
								},
								clean: function() {
									return c | (h && u) << 1
								}
							}
						}, function(n, r, i, o) {
							! function(t, e, n, r, i, o) {
								if (n) {
									var s = c7(e),
										a = ln(e),
										u = r * n;
									null == i ? (i = e + r * c3, o = e - u / 2) : (i = r2(s, i), o = r2(s, o), (r > 0 ? i < o : i > o) && (i += r * c3));
									for (var h, c = i; r > 0 ? c > o : c < o; c -= u) h = rU([s, -a * c7(c), -a * ln(c)]), t.point(h[0], h[1])
								}
							}(o, t, e, i, n, r)
						}, s ? [0, -t] : [-c0, t - c0])
					};
				r9.prototype = {
					constructor: r9,
					point: function(t, e) {
						this.stream.point(t, e)
					},
					sphere: function() {
						this.stream.sphere()
					},
					lineStart: function() {
						this.stream.lineStart()
					},
					lineEnd: function() {
						this.stream.lineEnd()
					},
					polygonStart: function() {
						this.stream.polygonStart()
					},
					polygonEnd: function() {
						this.stream.polygonEnd()
					}
				};
				var lC = c7(30 * c6),
					lS = function(t, e) {
						return +e ? function(t, e) {
							function n(r, i, o, s, a, u, h, c, l, p, f, g, d, y) {
								var _ = h - r,
									m = c - i,
									v = _ * _ + m * m;
								if (v > 4 * e && d--) {
									var x = s + p,
										E = a + f,
										b = u + g,
										I = lr(x * x + E * E + b * b),
										N = rB(b /= I),
										w = c8(c8(b) - 1) < c$ || c8(o - l) < c$ ? (o + l) / 2 : c9(E, x),
										C = t(w, N),
										S = C[0],
										M = C[1],
										L = S - r,
										P = M - i,
										O = m * L - _ * P;
									(O * O / v > e || c8((_ * L + m * P) / v - .5) > .3 || s * p + a * f + u * g < lC) && (n(r, i, o, s, a, u, S, M, w, x /= I, E /= I, b, d, y), y.point(S, M), n(S, M, w, x, E, b, h, c, l, p, f, g, d, y))
								}
							}
							return function(e) {
								function r(n, r) {
									n = t(n, r), e.point(n[0], n[1])
								}

								function i() {
									_ = NaN, b.point = o, e.lineStart()
								}

								function o(r, i) {
									var o = rY([r, i]),
										s = t(r, i);
									n(_, m, y, v, x, E, _ = s[0], m = s[1], y = r, v = o[0], x = o[1], E = o[2], 16, e), e.point(_, m)
								}

								function s() {
									b.point = r, e.lineEnd()
								}

								function a() {
									i(), b.point = u, b.lineEnd = h
								}

								function u(t, e) {
									o(c = t, e), l = _, p = m, f = v, g = x, d = E, b.point = o
								}

								function h() {
									n(_, m, y, v, x, E, l, p, c, f, g, d, 16, e), b.lineEnd = s, s()
								}
								var c, l, p, f, g, d, y, _, m, v, x, E, b = {
									point: r,
									lineStart: i,
									lineEnd: s,
									polygonStart: function() {
										e.polygonStart(), b.lineStart = a
									},
									polygonEnd: function() {
										e.polygonEnd(), b.lineStart = i
									}
								};
								return b
							}
						}(t, e) : r5({
							point: function(e, n) {
								e = t(e, n), this.stream.point(e[0], e[1])
							}
						})
					},
					lM = r5({
						point: function(t, e) {
							this.stream.point(t * c6, e * c6)
						}
					});
				it.invert = function(t, e) {
					return [t, 2 * c5(lt(e)) - c1]
				}, ie.invert = function(t, e) {
					return [-e, 2 * c5(lt(t)) - c1]
				};
				var lL = function() {
					var t = function(t) {
							function e() {
								var e = c0 * a(),
									s = o(lh(o.rotate()).invert([0, 0]));
								return h(null == c ? [
									[s[0] - e, s[1] - e],
									[s[0] + e, s[1] + e]
								] : t === it ? [
									[Math.max(s[0] - e, c), n],
									[Math.min(s[0] + e, r), i]
								] : [
									[c, Math.max(s[1] - e, n)],
									[r, Math.min(s[1] + e, i)]
								])
							}
							var n, r, i, o = (function(t) {
									function e(t) {
										return [(t = h(t[0] * c6, t[1] * c6))[0] * d + s, a - t[1] * d]
									}

									function n(t, e) {
										return [(t = o(t, e))[0] * d + s, a - t[1] * d]
									}

									function r() {
										h = lu(u = rQ(x, E, b), o);
										var t = o(m, v);
										return s = y - t[0] * d, a = _ + t[1] * d, i()
									}

									function i() {
										return f = g = null, e
									}
									var o, s, a, u, h, c, l, p, f, g, d = 150,
										y = 480,
										_ = 250,
										m = 0,
										v = 0,
										x = 0,
										E = 0,
										b = 0,
										I = null,
										N = lN,
										w = null,
										C = l_,
										S = .5,
										M = lS(n, .5);
									return e.stream = function(t) {
											return f && g === t ? f : f = lM(N(u, M(C(g = t))))
										}, e.clipAngle = function(t) {
											return arguments.length ? (N = +t ? lw(I = t * c6, 6 * c6) : (I = null, lN), i()) : I * c4
										}, e.clipExtent = function(t) {
											return arguments.length ? (C = null == t ? (w = c = l = p = null, l_) : function(t, e, n, r) {
												function i(i, o) {
													return t <= i && i <= n && e <= o && o <= r
												}

												function o(i, o, a, h) {
													var c = 0,
														l = 0;
													if (null == i || (c = s(i, a)) !== (l = s(o, a)) || 0 > u(i, o) ^ a > 0)
														do h.point(0 === c || 3 === c ? t : n, c > 1 ? r : e); while ((c = (c + a + 4) % 4) !== l);
													else h.point(o[0], o[1])
												}

												function s(r, i) {
													return c8(r[0] - t) < c$ ? i > 0 ? 0 : 3 : c8(r[0] - n) < c$ ? i > 0 ? 2 : 1 : c8(r[1] - e) < c$ ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
												}

												function a(t, e) {
													return u(t.x, e.x)
												}

												function u(t, e) {
													var n = s(t, 1),
														r = s(e, 1);
													return n !== r ? n - r : 0 === n ? e[1] - t[1] : 1 === n ? t[0] - e[0] : 2 === n ? t[1] - e[1] : e[0] - t[0]
												}
												return function(s) {
													function u(t, e) {
														i(t, e) && E.point(t, e)
													}

													function h(o, s) {
														var a = i(o, s);
														if (l && p.push([o, s]), v) f = o, g = s, d = a, v = !1, a && (E.lineStart(), E.point(o, s));
														else if (a && m) E.point(o, s);
														else {
															var u = [y = Math.max(-1e9, Math.min(1e9, y)), _ = Math.max(-1e9, Math.min(1e9, _))],
																h = [o = Math.max(-1e9, Math.min(1e9, o)), s = Math.max(-1e9, Math.min(1e9, s))];
															ll(u, h, t, e, n, r) ? (m || (E.lineStart(), E.point(u[0], u[1])), E.point(h[0], h[1]), a || E.lineEnd(), x = !1) : a && (E.lineStart(), E.point(o, s), x = !1)
														}
														y = o, _ = s, m = a
													}
													var c, l, p, f, g, d, y, _, m, v, x, E = s,
														b = lc(),
														I = {
															point: u,
															lineStart: function() {
																I.point = h, l && l.push(p = []), v = !0, m = !1, y = _ = NaN
															},
															lineEnd: function() {
																c && (h(f, g), d && m && b.rejoin(), c.push(b.result())), I.point = u, m && E.lineEnd()
															},
															polygonStart: function() {
																E = b, c = [], l = [], x = !0
															},
															polygonEnd: function() {
																var e = function() {
																		for (var e = 0, n = 0, i = l.length; n < i; ++n)
																			for (var o, s, a = l[n], u = 1, h = a.length, c = a[0], p = c[0], f = c[1]; u < h; ++u) o = p, s = f, p = (c = a[u])[0], f = c[1], s <= r ? f > r && (p - o) * (r - s) > (f - s) * (t - o) && ++e : f <= r && (p - o) * (r - s) < (f - s) * (t - o) && --e;
																		return e
																	}(),
																	n = x && e,
																	i = (c = ld(c)).length;
																(n || i) && (s.polygonStart(), n && (s.lineStart(), o(null, null, 1, s), s.lineEnd()), i && lf(c, a, e, o, s), s.polygonEnd()), E = s, c = l = p = null
															}
														};
													return I
												}
											}(w = +t[0][0], c = +t[0][1], l = +t[1][0], p = +t[1][1]), i()) : null == w ? null : [
												[w, c],
												[l, p]
											]
										}, e.scale = function(t) {
											return arguments.length ? (d = +t, r()) : d
										}, e.translate = function(t) {
											return arguments.length ? (y = +t[0], _ = +t[1], r()) : [y, _]
										}, e.center = function(t) {
											return arguments.length ? (m = t[0] % 360 * c6, v = t[1] % 360 * c6, r()) : [m * c4, v * c4]
										}, e.rotate = function(t) {
											return arguments.length ? (x = t[0] % 360 * c6, E = t[1] % 360 * c6, b = t.length > 2 ? t[2] % 360 * c6 : 0, r()) : [x * c4, E * c4, b * c4]
										}, e.precision = function(t) {
											return arguments.length ? (M = lS(n, S = t * t), i()) : lr(S)
										}, e.fitExtent = function(t, n) {
											return r7(e, t, n)
										}, e.fitSize = function(t, n) {
											return r7(e, [
												[0, 0], t
											], n)
										},
										function() {
											return o = t.apply(this, arguments), e.invert = o.invert && function(t) {
												return (t = h.invert((t[0] - s) / d, (a - t[1]) / d)) && [t[0] * c4, t[1] * c4]
											}, r()
										}
								})(function() {
									return t
								})(),
								s = o.center,
								a = o.scale,
								u = o.translate,
								h = o.clipExtent,
								c = null;
							return o.scale = function(t) {
								return arguments.length ? (a(t), e()) : a()
							}, o.translate = function(t) {
								return arguments.length ? (u(t), e()) : u()
							}, o.center = function(t) {
								return arguments.length ? (s(t), e()) : s()
							}, o.clipExtent = function(t) {
								return arguments.length ? (null == t ? c = n = r = i = null : (c = +t[0][0], n = +t[0][1], r = +t[1][0], i = +t[1][1]), e()) : null == c ? null : [
									[c, n],
									[r, i]
								]
							}, e()
						}(ie),
						e = t.center,
						n = t.rotate;
					return t.center = function(t) {
						return arguments.length ? e([-t[1], t[0]]) : [(t = e())[1], -t[0]]
					}, t.rotate = function(t) {
						return arguments.length ? n([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : [(t = n())[0], t[1], t[2] - 90]
					}, n([0, 0, 90]).scale(159.155)
				};
				t.projection = i1, t.random = sy, t.clusters = s_, t.helpers = iv, t.invariant = iE, t.meta = ix, t.isolines = function(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					var r, i, o, s, a, u, l, p, f, g, d, y = n.zProperty || "elevation",
						_ = n.commonProperties || {},
						m = n.breaksProperties || [];
					if (W(t, "Point", "Input must contain Points"), !e) throw Error("breaks is required");
					if (!Array.isArray(e)) throw Error("breaks must be an Array");
					if (!N(_)) throw Error("commonProperties must be an Object");
					if (!Array.isArray(m)) throw Error("breaksProperties must be an Array");
					var v = function(t, e) {
						if (!N(e = e || {})) throw Error("options is invalid");
						var n, r = e.zProperty || "elevation",
							i = e.flip,
							o = e.flags;
						W(t, "Point", "input must contain Points");
						for (var s = (n = {}, O(t, function(t) {
								var e = U(t)[1];
								n[e] || (n[e] = []), n[e].push(t)
							}), Object.keys(n).map(function(t) {
								return n[t].sort(function(t, e) {
									return U(t)[0] - U(e)[0]
								})
							}).sort(function(t, e) {
								return i ? U(t[0])[1] - U(e[0])[1] : U(e[0])[1] - U(t[0])[1]
							})), a = [], u = 0; u < s.length; u++) {
							for (var h = s[u], c = [], l = 0; l < h.length; l++) {
								var p = h[l];
								p.properties[r] ? c.push(p.properties[r]) : c.push(0), !0 === o && (p.properties.matrixPosition = [u, l])
							}
							a.push(c)
						}
						return a
					}(t, {
						zProperty: y,
						flip: !0
					});
					return h((r = function(t, e, n, r, i) {
						for (var o = [], s = 1; s < e.length; s++) {
							var a = +e[s],
								u = Object.assign({}, r, i[s]);
							u[n] = a;
							var h = c(function(t, e, n) {
								n = n || {};
								for (var r, i, o, s = Object.keys(ib), a = 0; a < s.length; a++) {
									var u = s[a],
										h = n[u];
									h = null != h ? h : ib[u], iI[u] = h
								}
								iI.verbose && console.log("MarchingSquaresJS-isoContours: computing isocontour for " + e);
								var c = (r = function(t, e) {
									for (var n = t.length - 1, r = t[0].length - 1, i = {
											rows: n,
											cols: r,
											cells: []
										}, o = 0; o < n; ++o) {
										i.cells[o] = [];
										for (var s = 0; s < r; ++s) {
											var a = 0,
												u = t[o + 1][s],
												h = t[o + 1][s + 1],
												c = t[o][s + 1],
												l = t[o][s];
											if (!(isNaN(u) || isNaN(h) || isNaN(c) || isNaN(l))) {
												a |= u >= e ? 8 : 0, a |= h >= e ? 4 : 0, a |= c >= e ? 2 : 0;
												var p, f, g, d, y = !1;
												if (5 == (a |= l >= e ? 1 : 0) || 10 === a) {
													var _ = (u + h + c + l) / 4;
													5 === a && _ < e ? (a = 10, y = !0) : 10 === a && _ < e && (a = 5, y = !0)
												}
												0 !== a && 15 !== a && (p = f = g = d = .5, 1 === a ? (g = 1 - (e - u) / (l - u), f = 1 - (e - c) / (l - c)) : 2 === a ? (f = (e - l) / (c - l), d = 1 - (e - h) / (c - h)) : 3 === a ? (g = 1 - (e - u) / (l - u), d = 1 - (e - h) / (c - h)) : 4 === a ? (p = (e - u) / (h - u), d = (e - c) / (h - c)) : 5 === a ? (p = (e - u) / (h - u), d = (e - c) / (h - c), f = 1 - (e - c) / (l - c), g = 1 - (e - u) / (l - u)) : 6 === a ? (f = (e - l) / (c - l), p = (e - u) / (h - u)) : 7 === a ? (g = 1 - (e - u) / (l - u), p = (e - u) / (h - u)) : 8 === a ? (g = (e - l) / (u - l), p = 1 - (e - h) / (u - h)) : 9 === a ? (f = 1 - (e - c) / (l - c), p = 1 - (e - h) / (u - h)) : 10 === a ? (p = 1 - (e - h) / (u - h), d = 1 - (e - h) / (c - h), f = (e - l) / (c - l), g = (e - l) / (u - l)) : 11 === a ? (p = 1 - (e - h) / (u - h), d = 1 - (e - h) / (c - h)) : 12 === a ? (g = (e - l) / (u - l), d = (e - c) / (h - c)) : 13 === a ? (f = 1 - (e - c) / (l - c), d = (e - c) / (h - c)) : 14 === a ? (g = (e - l) / (u - l), f = (e - l) / (c - l)) : console.log("MarchingSquaresJS-isoContours: Illegal cval detected: " + a), i.cells[o][s] = {
													cval: a,
													flipped: y,
													top: p,
													right: d,
													bottom: f,
													left: g
												})
											}
										}
									}
									return i
								}(t, e), i = [], o = 0, r.rows, r.cols, r.cells.forEach(function(t, e) {
									t.forEach(function(t, n) {
										if (void 0 !== t && !(5 === t.cval || 10 === t.cval) && !Q(t)) {
											var s = function(t, e, n) {
													var r, i, o, s = t.length,
														a = [],
														u = [0, 0, 1, 1, 0, 0, 0, 0, -1, 0, 1, 1, -1, 0, -1, 0],
														h = [0, -1, 0, 0, 1, 1, 1, 1, 0, -1, 0, 0, 0, -1, 0, 0],
														c = ["none", "bottom", "right", "right", "top", "top", "top", "top", "left", "bottom", "right", "right", "left", "bottom", "left", "none"],
														l = (t[e][n], t[e][n]),
														p = l.cval,
														f = tt(l, o = ["none", "left", "bottom", "left", "right", "none", "bottom", "left", "top", "top", "none", "top", "right", "right", "bottom", "none"][p]);
													a.push([n + f[0], e + f[1]]), f = tt(l, o = c[p]), a.push([n + f[0], e + f[1]]), $(l);
													for (var g = n + u[p], d = e + h[p], y = p; g >= 0 && d >= 0 && d < s && (g != n || d != e) && void 0 !== (l = t[d][g]);) {
														if (0 === (p = l.cval) || 15 === p) return {
															path: a,
															info: "mergeable"
														};
														o = c[p], r = u[p], i = h[p], 5 !== p && 10 !== p || (5 === p ? l.flipped ? (-1 === h[y] ? (o = "left", r = -1) : (o = "right", r = 1), i = 0) : -1 === u[y] && (o = "bottom", r = 0, i = -1) : 10 === p && (l.flipped ? -1 === u[y] ? (o = "top", r = 0, i = 1) : (o = "bottom", r = 0, i = -1) : 1 === h[y] && (o = "left", r = -1, i = 0))), f = tt(l, o), a.push([g + f[0], d + f[1]]), $(l), g += r, d += i, y = p
													}
													return {
														path: a,
														info: "closed"
													}
												}(r.cells, e, n),
												a = !1;
											if ("mergeable" === s.info) {
												for (var u = s.path[s.path.length - 1][0], h = s.path[s.path.length - 1][1], c = o - 1; c >= 0; c--)
													if (1e-7 >= Math.abs(i[c][0][0] - u) && 1e-7 >= Math.abs(i[c][0][1] - h)) {
														for (var l = s.path.length - 2; l >= 0; --l) i[c].unshift(s.path[l]);
														a = !0;
														break
													}
											}
											a || (i[o++] = s.path)
										}
									})
								}), i);
								return "function" == typeof iI.successCallback && iI.successCallback(c), c
							}(t, a), u);
							o.push(h)
						}
						return o
					}(v, e, y, _, m), o = (i = j(t))[2] - i[0], s = i[3] - i[1], a = i[0], u = i[1], l = v[0].length - 1, p = v.length - 1, f = o / l, g = s / p, d = function(t) {
						t[0] = t[0] * f + a, t[1] = t[1] * g + u
					}, r.forEach(function(t) {
						S(t, d)
					}), r))
				}, t.convex = tw, t.pointsWithinPolygon = tM, t.concave = function(t, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					if (!t) throw Error("points is required");
					var r, i, o = n.maxEdge || 1 / 0;
					if (!I(o)) throw Error("maxEdge is invalid");
					var s = tL((r = [], i = {}, O(t, function(t) {
						if (t.geometry) {
							var e = t.geometry.coordinates.join("-");
							i.hasOwnProperty(e) || (r.push(t), i[e] = !0)
						}
					}), h(r)));
					if (s.features = s.features.filter(function(t) {
							var e = t.geometry.coordinates[0][0],
								r = t.geometry.coordinates[0][1],
								i = t.geometry.coordinates[0][2],
								s = tR(e, r, n),
								a = tR(r, i, n),
								u = tR(e, i, n);
							return s <= o && a <= o && u <= o
						}), s.features.length < 1) return null;
					var u = function(t, e) {
						if (!N(e = e || {})) throw Error("options is invalid");
						var n, r, i = e.mutate;
						if ("FeatureCollection" !== K(t)) throw Error("geojson must be a FeatureCollection");
						if (!t.features.length) throw Error("geojson is empty");
						!1 !== i && void 0 !== i || (t = tT(t));
						var o = (n = {}, F(t, function(t) {
							n[t.geometry.type] = !0
						}), 1 === (r = Object.keys(n)).length ? r[0] : null);
						if (!o) throw Error("geojson must be homogenous");
						switch (o) {
							case "LineString":
								return function(t, e) {
									if (!N(e = e || {})) throw Error("options is invalid");
									var n = e.mutate;
									if ("FeatureCollection" !== K(t)) throw Error("geojson must be a FeatureCollection");
									if (!t.features.length) throw Error("geojson is empty");
									!1 !== n && void 0 !== n || (t = tT(t));
									var r = [],
										i = z(t, function(t, e) {
											return function(t, e) {
												var n, r = t.geometry.coordinates,
													i = e.geometry.coordinates,
													o = tX(r[0]),
													s = tX(r[r.length - 1]),
													u = tX(i[0]),
													h = tX(i[i.length - 1]);
												if (o === h) n = i.concat(r.slice(1));
												else if (u === s) n = r.concat(i.slice(1));
												else if (o === u) n = r.slice(1).reverse().concat(i);
												else {
													if (s !== h) return null;
													n = r.concat(i.reverse().slice(1))
												}
												return a(n)
											}(t, e) || (r.push(t), e)
										});
									return i && r.push(i), r.length ? 1 === r.length ? r[0] : c(r.map(function(t) {
										return t.coordinates
									})) : null
								}(t, e);
							case "Polygon":
								return function(t, e) {
									if (!N(e = e || {})) throw Error("options is invalid");
									var n = e.mutate;
									if ("FeatureCollection" !== K(t)) throw Error("geojson must be a FeatureCollection");
									if (!t.features.length) throw Error("geojson is empty");
									!1 !== n && void 0 !== n || (t = tT(t));
									var r = [];
									F(t, function(t) {
										r.push(t.geometry)
									});
									var i = iQ({
										geoms: f(r).geometry
									});
									return function(t) {
										return tF(t, tq.apply(this, arguments))
									}(i, i.objects.geoms.geometries)
								}(t, e);
							default:
								throw Error(o + " is not supported")
						}
					}(s, n);
					return 1 === u.coordinates.length && (u.coordinates = u.coordinates[0], u.type = "Polygon"), e(u)
				}, t.collect = function(t, e, n, r) {
					var i = iw(6),
						o = e.features.map(function(t) {
							return {
								minX: t.geometry.coordinates[0],
								minY: t.geometry.coordinates[1],
								maxX: t.geometry.coordinates[0],
								maxY: t.geometry.coordinates[1],
								property: t.properties[n]
							}
						});
					return i.load(o), t.features.forEach(function(t) {
						t.properties || (t.properties = {});
						var e = j(t),
							n = [];
						i.search({
							minX: e[0],
							minY: e[1],
							maxX: e[2],
							maxY: e[3]
						}).forEach(function(e) {
							tC([e.minX, e.minY], t) && n.push(e.property)
						}), t.properties[r] = n
					}), t
				}, t.flip = function(t, e) {
					if (!N(e = e || {})) throw Error("options is invalid");
					var n = e.mutate;
					if (!t) throw Error("geojson is required");
					return !1 !== n && void 0 !== n || (t = tT(t)), S(t, function(t) {
						var e = t[0],
							n = t[1];
						t[0] = n, t[1] = e
					}), t
				}, t.simplify = function(t, e) {
					if (!N(e = e || {})) throw Error("options is invalid");
					var n = void 0 !== e.tolerance ? e.tolerance : 1,
						r = e.highQuality || !1,
						i = e.mutate || !1;
					if (!t) throw Error("geojson is required");
					if (n && n < 0) throw Error("invalid tolerance");
					return !0 !== i && (t = tT(t)), D(t, function(t) {
						! function(t, e, n) {
							var r = t.type;
							if ("Point" !== r && "MultiPoint" !== r) {
								tU(t, !0);
								var i = t.coordinates;
								switch (r) {
									case "LineString":
										t.coordinates = tH(i, e, n);
										break;
									case "MultiLineString":
										t.coordinates = i.map(function(t) {
											return tH(t, e, n)
										});
										break;
									case "Polygon":
										t.coordinates = tW(i, e, n);
										break;
									case "MultiPolygon":
										t.coordinates = i.map(function(t) {
											return tW(t, e, n)
										})
								}
							}
						}(t, n, r)
					}), t
				}, t.bezierSpline = tJ, t.tag = function(t, e, n, r) {
					return t = tT(t), e = tT(e), O(t, function(t) {
						t.properties || (t.properties = {}), O(e, function(e) {
							void 0 === t.properties[r] && tC(t, e) && (t.properties[r] = e.properties[n])
						})
					}), t
				}, t.sample = function(t, e) {
					if (!t) throw Error("featurecollection is required");
					if (null == e) throw Error("num is required");
					if ("number" != typeof e) throw Error("num must be a number");
					return h(function(t, e) {
						for (var n, r, i = t.slice(0), o = t.length, s = o - e; o-- > s;) n = i[r = Math.floor((o + 1) * Math.random())], i[r] = i[o], i[o] = n;
						return i.slice(s)
					}(t.features, e))
				}, t.envelope = tK, t.square = tQ, t.circle = t0, t.midpoint = function(t, e) {
					return t$(t, tR(t, e) / 2, t1(t, e))
				}, t.center = t2, t.centerOfMass = function t(e, n) {
					switch (K(e)) {
						case "Point":
							return e;
						case "Polygon":
							var i = [];
							S(e, function(t) {
								i.push(t)
							});
							var o, s, a, u, h, c, l, p, f = t3(e, n),
								g = f.geometry.coordinates,
								d = 0,
								y = 0,
								_ = 0,
								m = i.map(function(t) {
									return [t[0] - g[0], t[1] - g[1]]
								});
							for (o = 0; o < i.length - 1; o++) u = (s = m[o])[0], c = s[1], h = (a = m[o + 1])[0], _ += p = u * (l = a[1]) - h * c, d += (u + h) * p, y += (c + l) * p;
							if (0 === _) return f;
							var v = 1 / (6 * (.5 * _));
							return r([g[0] + v * d, g[1] + v * y], n);
						default:
							var x = tw(e);
							return x ? t(x, n) : t3(e, n)
					}
				}, t.centroid = t3, t.combine = function(t) {
					function n(t, e, n) {
						n ? r[e].coordinates = r[e].coordinates.concat(t.geometry.coordinates) : r[e].coordinates.push(t.geometry.coordinates), r[e].properties.push(t.properties)
					}
					var r = {
							MultiPoint: {
								coordinates: [],
								properties: []
							},
							MultiLineString: {
								coordinates: [],
								properties: []
							},
							MultiPolygon: {
								coordinates: [],
								properties: []
							}
						},
						i = Object.keys(r).reduce(function(t, e) {
							return t[e.replace("Multi", "")] = e, t
						}, {});
					return O(t, function(t) {
						t.geometry && (r[t.geometry.type] ? n(t, t.geometry.type, !0) : i[t.geometry.type] && n(t, i[t.geometry.type], !1))
					}), h(Object.keys(r).filter(function(t) {
						return r[t].coordinates.length
					}).sort().map(function(t) {
						return e({
							type: t,
							coordinates: r[t].coordinates
						}, {
							collectedProperties: r[t].properties
						})
					}))
				}, t.distance = tR, t.explode = t4, t.bbox = j, t.tesselate = function(t) {
					if (!t.geometry || "Polygon" !== t.geometry.type && "MultiPolygon" !== t.geometry.type) throw Error("input must be a Polygon or MultiPolygon");
					var e = {
						type: "FeatureCollection",
						features: []
					};
					return "Polygon" === t.geometry.type ? e.features = ec(t.geometry.coordinates) : t.geometry.coordinates.forEach(function(t) {
						e.features = e.features.concat(ec(t))
					}), e
				}, t.bboxPolygon = tZ, t.booleanPointInPolygon = tC, t.nearestPoint = el, t.nearestPointOnLine = eO, t.nearestPointToLine = function(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					var r = n.units,
						i = n.properties || {};
					if (!t) throw Error("points is required");
					if (!(t = function(t) {
							var e = [];
							switch (t.geometry ? t.geometry.type : t.type) {
								case "GeometryCollection":
									return D(t, function(t) {
										"Point" === t.type && e.push({
											type: "Feature",
											properties: {},
											geometry: t
										})
									}), {
										type: "FeatureCollection",
										features: e
									};
								case "FeatureCollection":
									return t.features = t.features.filter(function(t) {
										return "Point" === t.geometry.type
									}), t;
								default:
									throw Error("points must be a Point Collection")
							}
						}(t)).features.length) throw Error("points must contain features");
					if (!e) throw Error("line is required");
					if ("LineString" !== K(e)) throw Error("line must be a LineString");
					var o = 1 / 0,
						s = null;
					return O(t, function(t) {
						var n = ek(t, e, {
							units: r
						});
						n < o && (o = n, s = t)
					}), s && (s.properties = Object.assign({
						dist: o
					}, s.properties, i)), s
				}, t.planepoint = function(t, e) {
					var n = X(t),
						r = J(e).coordinates[0];
					if (r.length < 4) throw Error("OuterRing of a Polygon must have 4 or more Positions.");
					var i = e.properties || {},
						o = i.a,
						s = i.b,
						a = i.c,
						u = n[0],
						h = n[1],
						c = r[0][0],
						l = r[0][1],
						p = void 0 !== o ? o : r[0][2],
						f = r[1][0],
						g = r[1][1],
						d = void 0 !== s ? s : r[1][2],
						y = r[2][0],
						_ = r[2][1],
						m = void 0 !== a ? a : r[2][2];
					return (m * (u - c) * (h - g) + p * (u - f) * (h - _) + d * (u - y) * (h - l) - d * (u - c) * (h - _) - m * (u - f) * (h - l) - p * (u - y) * (h - g)) / ((u - c) * (h - g) + (u - f) * (h - _) + (u - y) * (h - l) - (u - c) * (h - _) - (u - f) * (h - l) - (u - y) * (h - g))
				}, t.tin = tL, t.bearing = t1, t.destination = t$, t.kinks = function(t) {
					var e, n, i = {
						type: "FeatureCollection",
						features: []
					};
					if ("LineString" === (n = "Feature" === t.type ? t.geometry : t).type) e = [n.coordinates];
					else if ("MultiLineString" === n.type) e = n.coordinates;
					else if ("MultiPolygon" === n.type) e = [].concat.apply([], n.coordinates);
					else {
						if ("Polygon" !== n.type) throw Error("Input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry");
						e = n.coordinates
					}
					return e.forEach(function(t) {
						e.forEach(function(e) {
							for (var n = 0; n < t.length - 1; n++)
								for (var o = n; o < e.length - 1; o++)
									if (t !== e || 1 !== Math.abs(n - o) && (0 !== n || o !== t.length - 2 || t[n][0] !== t[t.length - 1][0] || t[n][1] !== t[t.length - 1][1])) {
										var s = function(t, e, n, r, i, o, s, a) {
											var u, h, c, l, p, f = {
												x: null,
												y: null,
												onLine1: !1,
												onLine2: !1
											};
											return 0 == (u = (a - o) * (n - t) - (s - i) * (r - e)) ? null !== f.x && null !== f.y && f : (h = e - o, c = t - i, l = (s - i) * h - (a - o) * c, p = (n - t) * h - (r - e) * c, h = l / u, c = p / u, f.x = t + h * (n - t), f.y = e + h * (r - e), h >= 0 && h <= 1 && (f.onLine1 = !0), c >= 0 && c <= 1 && (f.onLine2 = !0), !(!f.onLine1 || !f.onLine2) && [f.x, f.y])
										}(t[n][0], t[n][1], t[n + 1][0], t[n + 1][1], e[o][0], e[o][1], e[o + 1][0], e[o + 1][1]);
										s && i.features.push(r([s[0], s[1]]))
									}
						})
					}), i
				}, t.pointOnFeature = ej, t.area = eU, t.along = function(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					if ("Feature" === t.type) i = t.geometry.coordinates;
					else {
						if ("LineString" !== t.type) throw Error("input must be a LineString Feature or Geometry");
						i = t.coordinates
					}
					if (!I(e)) throw Error("distance must be a number");
					for (var i, o = 0, s = 0; s < i.length && !(e >= o && s === i.length - 1); s++) {
						if (o >= e) {
							var a = e - o;
							if (a) {
								var u = t1(i[s], i[s - 1]) - 180;
								return t$(i[s], a, u, n)
							}
							return r(i[s])
						}
						o += tR(i[s], i[s + 1], n)
					}
					return r(i[i.length - 1])
				}, t.length = eW, t.lineSlice = function(t, e, n) {
					var r = U(n);
					if ("LineString" !== K(n)) throw Error("line must be a LineString");
					for (var i, o = eO(n, t), s = eO(n, e), u = [(i = o.properties.index <= s.properties.index ? [o, s] : [s, o])[0].geometry.coordinates], h = i[0].properties.index + 1; h < i[1].properties.index + 1; h++) u.push(r[h]);
					return u.push(i[1].geometry.coordinates), a(u, n.properties)
				}, t.lineSliceAlong = eJ, t.pointGrid = e0, t.truncate = e1, t.flatten = function(t) {
					if (!t) throw Error("geojson is required");
					var e = [];
					return F(t, function(t) {
						e.push(t)
					}), h(e)
				}, t.lineIntersect = eL, t.lineChunk = function(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					var r = n.units,
						i = n.reverse;
					if (!t) throw Error("geojson is required");
					if (e <= 0) throw Error("segmentLength must be greater than 0");
					var o = [];
					return F(t, function(t) {
						i && (t.geometry.coordinates = t.geometry.coordinates.reverse()),
							function(t, e, n, r) {
								var i = eW(t, {
									units: n
								});
								if (i <= e) return r(t);
								var o = i / e;
								Number.isInteger(o) || (o = Math.floor(o) + 1);
								for (var s = 0; s < o; s++) r(eJ(t, e * s, e * (s + 1), {
									units: n
								}), s)
							}(t, e, r, function(t) {
								o.push(t)
							})
					}), h(o)
				}, t.unkinkPolygon = function(t) {
					var e = [];
					return F(t, function(t) {
						"Polygon" === t.geometry.type && O(i4(t), function(n) {
							e.push(o(n.geometry.coordinates, t.properties))
						})
					}), h(e)
				}, t.greatCircle = function(t, e, n) {
					if ("object" != typeof(n = n || {})) throw Error("options is invalid");
					var r = n.properties,
						i = n.npoints,
						o = n.offset;
					return t = X(t), e = X(e), r = r || {}, i = i || 100, o = o || 10, new on({
						x: t[0],
						y: t[1]
					}, {
						x: e[0],
						y: e[1]
					}, r).Arc(i, {
						offset: o
					}).json()
				}, t.lineSegment = eM, t.lineSplit = function(t, e) {
					if (!t) throw Error("line is required");
					if (!e) throw Error("splitter is required");
					var n = K(t),
						r = K(e);
					if ("LineString" !== n) throw Error("line must be LineString");
					if ("FeatureCollection" === r) throw Error("splitter cannot be a FeatureCollection");
					if ("GeometryCollection" === r) throw Error("splitter cannot be a GeometryCollection");
					var i = e1(e, {
						precision: 7
					});
					switch (r) {
						case "Point":
							return e8(t, i);
						case "MultiPoint":
							return e6(t, i);
						case "LineString":
						case "MultiLineString":
						case "Polygon":
						case "MultiPolygon":
							return e6(t, eL(t, i))
					}
				}, t.lineArc = e7, t.polygonToLine = ne, t.lineToPolygon = nr, t.bboxClip = function(t, e) {
					var n = t.geometry ? t.geometry.type : t.type,
						r = U(t),
						i = t.properties;
					switch (n) {
						case "LineString":
						case "MultiLineString":
							var s = [];
							return "LineString" === n && (r = [r]), r.forEach(function(t) {
								or(t, e, s)
							}), 1 === s.length ? a(s[0], i) : c(s, i);
						case "Polygon":
							return o(nh(r, e), i);
						case "MultiPolygon":
							return p(r.map(function(t) {
								return nh(t, e)
							}), i);
						default:
							throw Error("geometry " + n + " not supported")
					}
				}, t.lineOverlap = nf, t.sector = function(t, e, n, r, i) {
					if (!N(i = i || {})) throw Error("options is invalid");
					if (!t) throw Error("center is required");
					if (null == n) throw Error("bearing1 is required");
					if (null == r) throw Error("bearing2 is required");
					if (!e) throw Error("radius is required");
					if ("object" != typeof i) throw Error("options must be an object");
					if (nd(n) === nd(r)) return t0(t, e, i);
					var s = U(t),
						a = [
							[s]
						];
					return S(e7(t, e, n, r, i), function(t) {
						a[0].push(t)
					}), a[0].push(s), o(a)
				}, t.rhumbBearing = eR, t.rhumbDistance = eD, t.rhumbDestination = ny, t.polygonTangents = function(t, e) {
					var n, i, o, s = U(t),
						a = U(e);
					switch (K(e)) {
						case "Polygon":
							n = a[0][0], i = a[0][0], o = nm(a[0][0], a[0][a[0].length - 1], s);
							var u = n_(a[0], s, o, void 0, n, i);
							n = u[0], i = u[1];
							break;
						case "MultiPolygon":
							n = a[0][0][0], i = a[0][0][0], o = nm(a[0][0][0], a[0][0][a[0][0].length - 1], s), a.forEach(function(t) {
								var e = n_(t[0], s, o, void 0, n, i);
								n = e[0], i = e[1]
							})
					}
					return h([r(n), r(i)])
				}, t.rewind = function(t, e) {
					if (!N(e = e || {})) throw Error("options is invalid");
					var n = e.reverse || !1,
						r = e.mutate || !1;
					if (!t) throw Error("<geojson> is required");
					if ("boolean" != typeof n) throw Error("<reverse> must be a boolean");
					if ("boolean" != typeof r) throw Error("<mutate> must be a boolean");
					!1 === r && (t = tT(t));
					var i = [];
					switch (t.type) {
						case "GeometryCollection":
							return D(t, function(t) {
								nx(t, n)
							}), t;
						case "FeatureCollection":
							return O(t, function(t) {
								O(nx(t, n), function(t) {
									i.push(t)
								})
							}), h(i)
					}
					return nx(t, n)
				}, t.isobands = function(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					var r, i, s, a, u, c, l, f, g, d, y, _ = n.zProperty || "elevation",
						m = n.commonProperties || {},
						v = n.breaksProperties || [];
					if (W(t, "Point", "Input must contain Points"), !e) throw Error("breaks is required");
					if (!Array.isArray(e)) throw Error("breaks is not an Array");
					if (!N(m)) throw Error("commonProperties is not an Object");
					if (!Array.isArray(v)) throw Error("breaksProperties is not an Array");
					var x = function(t, e) {
							if (!N(e = e || {})) throw Error("options is invalid");
							var n, r = e.zProperty || "elevation",
								i = e.flip,
								o = e.flags;
							W(t, "Point", "input must contain Points");
							for (var s = (n = {}, O(t, function(t) {
									var e = U(t)[1];
									n[e] || (n[e] = []), n[e].push(t)
								}), Object.keys(n).map(function(t) {
									return n[t].sort(function(t, e) {
										return U(t)[0] - U(e)[0]
									})
								}).sort(function(t, e) {
									return i ? U(t[0])[1] - U(e[0])[1] : U(e[0])[1] - U(t[0])[1]
								})), a = [], u = 0; u < s.length; u++) {
								for (var h = s[u], c = [], l = 0; l < h.length; l++) {
									var p = h[l];
									p.properties[r] ? c.push(p.properties[r]) : c.push(0), !0 === o && (p.properties.matrixPosition = [u, l])
								}
								a.push(c)
							}
							return a
						}(t, {
							zProperty: _,
							flip: !0
						}),
						E = function(t, e, n) {
							for (var r = [], i = 1; i < e.length; i++) {
								var s = +e[i - 1],
									a = +e[i],
									u = function(t) {
										for (var e = t.map(function(t) {
												return {
													lrCoordinates: t,
													grouped: !1
												}
											}), n = []; ! function(t) {
												for (var e = 0; e < t.length; e++)
													if (!1 === t[e].grouped) return !1;
												return !0
											}(e);)
											for (var r = 0; r < e.length; r++)
												if (!e[r].grouped) {
													var i = [];
													i.push(e[r].lrCoordinates), e[r].grouped = !0;
													for (var s = o([e[r].lrCoordinates]), a = r + 1; a < e.length; a++) !e[a].grouped && function(t, e) {
														for (var n = t4(t), r = 0; r < n.features.length; r++)
															if (!tC(n.features[r], e)) return !1;
														return !0
													}(o([e[a].lrCoordinates]), s) && (i.push(e[a].lrCoordinates), e[a].grouped = !0);
													n.push(i)
												} return n
									}(function(t) {
										var e = [],
											n = [];
										t.forEach(function(t) {
											var r = eU(o([t]));
											n.push(r), e.push({
												ring: t,
												area: r
											})
										}), n.sort(function(t, e) {
											return e - t
										});
										var r = [];
										return n.forEach(function(t) {
											for (var n = 0; n < e.length; n++)
												if (e[n].area === t) {
													r.push(e[n].ring), e.splice(n, 1);
													break
												}
										}), r
									}(function(t, e, n, r) {
										r = r || {};
										for (var i, o, s = Object.keys(oo), a = 0; a < s.length; a++) {
											var u = s[a],
												h = r[u];
											h = null != h ? h : oo[u], os[u] = h
										}
										os.verbose && console.log("MarchingSquaresJS-isoBands: computing isobands for [" + e + ":" + (e + n) + "]");
										var c, l = function(t, e, n) {
											for (var r = t.length - 1, i = t[0].length - 1, o = {
													rows: r,
													cols: i,
													cells: []
												}, s = e + Math.abs(n), a = 0; a < r; ++a) {
												o.cells[a] = [];
												for (var u = 0; u < i; ++u) {
													var h = 0,
														c = t[a + 1][u],
														l = t[a + 1][u + 1],
														p = t[a][u + 1],
														f = t[a][u];
													if (!(isNaN(c) || isNaN(l) || isNaN(p) || isNaN(f))) {
														h |= c < e ? 0 : c > s ? 128 : 64, h |= l < e ? 0 : l > s ? 32 : 16, h |= p < e ? 0 : p > s ? 8 : 4;
														var g = +(h |= f < e ? 0 : f > s ? 2 : 1),
															d = 0;
														if (17 === h || 18 === h || 33 === h || 34 === h || 38 === h || 68 === h || 72 === h || 98 === h || 102 === h || 132 === h || 136 === h || 137 === h || 152 === h || 153 === h) {
															var y = (c + l + p + f) / 4;
															d = y > s ? 2 : y < e ? 0 : 1, 34 === h ? 1 === d ? h = 35 : 0 === d && (h = 136) : 136 === h ? 1 === d ? (h = 35, d = 4) : 0 === d && (h = 34) : 17 === h ? 1 === d ? (h = 155, d = 4) : 0 === d && (h = 153) : 68 === h ? 1 === d ? (h = 103, d = 4) : 0 === d && (h = 102) : 153 === h ? 1 === d && (h = 155) : 102 === h ? 1 === d && (h = 103) : 152 === h ? d < 2 && (h = 156, d = 1) : 137 === h ? d < 2 && (h = 139, d = 1) : 98 === h ? d < 2 && (h = 99, d = 1) : 38 === h ? d < 2 && (h = 39, d = 1) : 18 === h ? d > 0 ? (h = 156, d = 4) : h = 152 : 33 === h ? d > 0 ? (h = 139, d = 4) : h = 137 : 72 === h ? d > 0 ? (h = 99, d = 4) : h = 98 : 132 === h && (d > 0 ? (h = 39, d = 4) : h = 38)
														}
														if (0 != h && 170 != h) {
															_ = m = v = x = E = b = I = N = .5;
															var _, m, v, x, E, b, I, N, w = [];
															1 === h ? (v = 1 - (e - p) / (f - p), N = 1 - (e - c) / (f - c), w.push(oj[h])) : 169 === h ? (v = (s - f) / (p - f), N = (s - f) / (c - f), w.push(oj[h])) : 4 === h ? (b = 1 - (e - l) / (p - l), x = (e - f) / (p - f), w.push(ok[h])) : 166 === h ? (b = (s - p) / (l - p), x = 1 - (s - p) / (f - p), w.push(ok[h])) : 16 === h ? (E = (e - p) / (l - p), m = (e - c) / (l - c), w.push(oB[h])) : 154 === h ? (E = 1 - (s - l) / (p - l), m = 1 - (s - l) / (c - l), w.push(oB[h])) : 64 === h ? (I = (e - f) / (c - f), _ = 1 - (e - l) / (c - l), w.push(oU[h])) : 106 === h ? (I = 1 - (s - c) / (f - c), _ = (s - c) / (l - c), w.push(oU[h])) : 168 === h ? (x = (s - f) / (p - f), v = (e - f) / (p - f), N = (e - f) / (c - f), I = (s - f) / (c - f), w.push(oz[h]), w.push(oj[h])) : 2 === h ? (x = 1 - (e - p) / (f - p), v = 1 - (s - p) / (f - p), N = 1 - (s - c) / (f - c), I = 1 - (e - c) / (f - c), w.push(oz[h]), w.push(oj[h])) : 162 === h ? (E = (s - p) / (l - p), b = (e - p) / (l - p), x = 1 - (e - p) / (f - p), v = 1 - (s - p) / (f - p), w.push(oz[h]), w.push(oj[h])) : 8 === h ? (E = 1 - (e - l) / (p - l), b = 1 - (s - l) / (p - l), x = (s - f) / (p - f), v = (e - f) / (p - f), w.push(oB[h]), w.push(ok[h])) : 138 === h ? (E = 1 - (e - l) / (p - l), b = 1 - (s - l) / (p - l), _ = 1 - (s - l) / (c - l), m = 1 - (e - l) / (c - l), w.push(oB[h]), w.push(ok[h])) : 32 === h ? (E = (s - p) / (l - p), b = (e - p) / (l - p), _ = (e - c) / (l - c), m = (s - c) / (l - c), w.push(oB[h]), w.push(ok[h])) : 42 === h ? (N = 1 - (s - c) / (f - c), I = 1 - (e - c) / (f - c), _ = (e - c) / (l - c), m = (s - c) / (l - c), w.push(oX[h]), w.push(oU[h])) : 128 === h && (N = (e - f) / (c - f), I = (s - f) / (c - f), _ = 1 - (s - l) / (c - l), m = 1 - (e - l) / (c - l), w.push(oX[h]), w.push(oU[h])), 5 === h ? (b = 1 - (e - l) / (p - l), N = 1 - (e - c) / (f - c), w.push(ok[h])) : 165 === h ? (b = (s - p) / (l - p), N = (s - f) / (c - f), w.push(ok[h])) : 20 === h ? (x = (e - f) / (p - f), m = (e - c) / (l - c), w.push(oz[h])) : 150 === h ? (x = 1 - (s - p) / (f - p), m = 1 - (s - l) / (c - l), w.push(oz[h])) : 80 === h ? (E = (e - p) / (l - p), I = (e - f) / (c - f), w.push(oB[h])) : 90 === h ? (E = 1 - (s - l) / (p - l), I = 1 - (s - c) / (f - c), w.push(oB[h])) : 65 === h ? (v = 1 - (e - p) / (f - p), _ = 1 - (e - l) / (c - l), w.push(oj[h])) : 105 === h ? (v = (s - f) / (p - f), _ = (s - c) / (l - c), w.push(oj[h])) : 160 === h ? (E = (s - p) / (l - p), b = (e - p) / (l - p), N = (e - f) / (c - f), I = (s - f) / (c - f), w.push(oB[h]), w.push(ok[h])) : 10 === h ? (E = 1 - (e - l) / (p - l), b = 1 - (s - l) / (p - l), N = 1 - (s - c) / (f - c), I = 1 - (e - c) / (f - c), w.push(oB[h]), w.push(ok[h])) : 130 === h ? (x = 1 - (e - p) / (f - p), v = 1 - (s - p) / (f - p), _ = 1 - (s - l) / (c - l), m = 1 - (e - l) / (c - l), w.push(oz[h]), w.push(oj[h])) : 40 === h ? (x = (s - f) / (p - f), v = (e - f) / (p - f), _ = (e - c) / (l - c), m = (s - c) / (l - c), w.push(oz[h]), w.push(oj[h])) : 101 === h ? (b = (s - p) / (l - p), _ = (s - c) / (l - c), w.push(ok[h])) : 69 === h ? (b = 1 - (e - l) / (p - l), _ = 1 - (e - l) / (c - l), w.push(ok[h])) : 149 === h ? (N = (s - f) / (c - f), m = 1 - (s - l) / (c - l), w.push(oX[h])) : 21 === h ? (N = 1 - (e - c) / (f - c), m = (e - c) / (l - c), w.push(oX[h])) : 86 === h ? (x = 1 - (s - p) / (f - p), I = 1 - (s - c) / (f - c), w.push(oz[h])) : 84 === h ? (x = (e - f) / (p - f), I = (e - f) / (c - f), w.push(oz[h])) : 89 === h ? (E = 1 - (s - l) / (p - l), v = (s - f) / (p - f), w.push(oj[h])) : 81 === h ? (E = (e - p) / (l - p), v = 1 - (e - p) / (f - p), w.push(oj[h])) : 96 === h ? (E = (s - p) / (l - p), b = (e - p) / (l - p), I = (e - f) / (c - f), _ = (s - c) / (l - c), w.push(oB[h]), w.push(ok[h])) : 74 === h ? (E = 1 - (e - l) / (p - l), b = 1 - (s - l) / (p - l), I = 1 - (s - c) / (f - c), _ = 1 - (e - l) / (c - l), w.push(oB[h]), w.push(ok[h])) : 24 === h ? (E = 1 - (s - l) / (p - l), x = (s - f) / (p - f), v = (e - f) / (p - f), m = (e - c) / (l - c), w.push(oB[h]), w.push(oj[h])) : 146 === h ? (E = (e - p) / (l - p), x = 1 - (e - p) / (f - p), v = 1 - (s - p) / (f - p), m = 1 - (s - l) / (c - l), w.push(oB[h]), w.push(oj[h])) : 6 === h ? (b = 1 - (e - l) / (p - l), x = 1 - (s - p) / (f - p), N = 1 - (s - c) / (f - c), I = 1 - (e - c) / (f - c), w.push(ok[h]), w.push(oz[h])) : 164 === h ? (b = (s - p) / (l - p), x = (e - f) / (p - f), N = (e - f) / (c - f), I = (s - f) / (c - f), w.push(ok[h]), w.push(oz[h])) : 129 === h ? (v = 1 - (e - p) / (f - p), N = (s - f) / (c - f), _ = 1 - (s - l) / (c - l), m = 1 - (e - l) / (c - l), w.push(oj[h]), w.push(oX[h])) : 41 === h ? (v = (s - f) / (p - f), N = 1 - (e - c) / (f - c), _ = (e - c) / (l - c), m = (s - c) / (l - c), w.push(oj[h]), w.push(oX[h])) : 66 === h ? (x = 1 - (e - p) / (f - p), v = 1 - (s - p) / (f - p), I = 1 - (s - c) / (f - c), _ = 1 - (e - l) / (c - l), w.push(oz[h]), w.push(oj[h])) : 104 === h ? (x = (s - f) / (p - f), v = (e - f) / (p - f), I = (e - f) / (c - f), _ = (s - c) / (l - c), w.push(oj[h]), w.push(oY[h])) : 144 === h ? (E = (e - p) / (l - p), N = (e - f) / (c - f), I = (s - f) / (c - f), m = 1 - (s - l) / (c - l), w.push(oB[h]), w.push(oU[h])) : 26 === h ? (E = 1 - (s - l) / (p - l), N = 1 - (s - c) / (f - c), I = 1 - (e - c) / (f - c), m = (e - c) / (l - c), w.push(oB[h]), w.push(oU[h])) : 36 === h ? (b = (s - p) / (l - p), x = (e - f) / (p - f), _ = (e - c) / (l - c), m = (s - c) / (l - c), w.push(ok[h]), w.push(oz[h])) : 134 === h ? (b = 1 - (e - l) / (p - l), x = 1 - (s - p) / (f - p), _ = 1 - (s - l) / (c - l), m = 1 - (e - l) / (c - l), w.push(ok[h]), w.push(oz[h])) : 9 === h ? (E = 1 - (e - l) / (p - l), b = 1 - (s - l) / (p - l), v = (s - f) / (p - f), N = 1 - (e - c) / (f - c), w.push(oB[h]), w.push(ok[h])) : 161 === h ? (E = (s - p) / (l - p), b = (e - p) / (l - p), v = 1 - (e - p) / (f - p), N = (s - f) / (c - f), w.push(oB[h]), w.push(ok[h])) : 37 === h ? (b = (s - p) / (l - p), N = 1 - (e - c) / (f - c), _ = (e - c) / (l - c), m = (s - c) / (l - c), w.push(ok[h]), w.push(oX[h])) : 133 === h ? (b = 1 - (e - l) / (p - l), N = (s - f) / (c - f), _ = 1 - (s - l) / (c - l), m = 1 - (e - l) / (c - l), w.push(ok[h]), w.push(oX[h])) : 148 === h ? (x = (e - f) / (p - f), N = (e - f) / (c - f), I = (s - f) / (c - f), m = 1 - (s - l) / (c - l), w.push(oz[h]), w.push(oU[h])) : 22 === h ? (x = 1 - (s - p) / (f - p), N = 1 - (s - c) / (f - c), I = 1 - (e - c) / (f - c), m = (e - c) / (l - c), w.push(oz[h]), w.push(oU[h])) : 82 === h ? (E = (e - p) / (l - p), x = 1 - (e - p) / (f - p), v = 1 - (s - p) / (f - p), I = 1 - (s - c) / (f - c), w.push(oB[h]), w.push(oj[h])) : 88 === h ? (E = 1 - (s - l) / (p - l), x = (s - f) / (p - f), v = (e - f) / (p - f), I = (e - f) / (c - f), w.push(oB[h]), w.push(oj[h])) : 73 === h ? (E = 1 - (e - l) / (p - l), b = 1 - (s - l) / (p - l), v = (s - f) / (p - f), _ = 1 - (e - l) / (c - l), w.push(oB[h]), w.push(ok[h])) : 97 === h ? (E = (s - p) / (l - p), b = (e - p) / (l - p), v = 1 - (e - p) / (f - p), _ = (s - c) / (l - c), w.push(oB[h]), w.push(ok[h])) : 145 === h ? (E = (e - p) / (l - p), v = 1 - (e - p) / (f - p), N = (s - f) / (c - f), m = 1 - (s - l) / (c - l), w.push(oB[h]), w.push(oX[h])) : 25 === h ? (E = 1 - (s - l) / (p - l), v = (s - f) / (p - f), N = 1 - (e - c) / (f - c), m = (e - c) / (l - c), w.push(oB[h]), w.push(oX[h])) : 70 === h ? (b = 1 - (e - l) / (p - l), x = 1 - (s - p) / (f - p), I = 1 - (s - c) / (f - c), _ = 1 - (e - l) / (c - l), w.push(ok[h]), w.push(oz[h])) : 100 === h ? (b = (s - p) / (l - p), x = (e - f) / (p - f), I = (e - f) / (c - f), _ = (s - c) / (l - c), w.push(ok[h]), w.push(oz[h])) : 34 === h ? (0 === d ? (E = 1 - (e - l) / (p - l), b = 1 - (s - l) / (p - l), x = (s - f) / (p - f), v = (e - f) / (p - f), N = (e - f) / (c - f), I = (s - f) / (c - f), _ = 1 - (s - l) / (c - l), m = 1 - (e - l) / (c - l)) : (E = (s - p) / (l - p), b = (e - p) / (l - p), x = 1 - (e - p) / (f - p), v = 1 - (s - p) / (f - p), N = 1 - (s - c) / (f - c), I = 1 - (e - c) / (f - c), _ = (e - c) / (l - c), m = (s - c) / (l - c)), w.push(oB[h]), w.push(ok[h]), w.push(oX[h]), w.push(oU[h])) : 35 === h ? (4 === d ? (E = 1 - (e - l) / (p - l), b = 1 - (s - l) / (p - l), x = (s - f) / (p - f), v = (e - f) / (p - f), N = (e - f) / (c - f), I = (s - f) / (c - f), _ = 1 - (s - l) / (c - l), m = 1 - (e - l) / (c - l)) : (E = (s - p) / (l - p), b = (e - p) / (l - p), x = 1 - (e - p) / (f - p), v = 1 - (s - p) / (f - p), N = 1 - (s - c) / (f - c), I = 1 - (e - c) / (f - c), _ = (e - c) / (l - c), m = (s - c) / (l - c)), w.push(oB[h]), w.push(ok[h]), w.push(oj[h]), w.push(oU[h])) : 136 === h ? (0 === d ? (E = (s - p) / (l - p), b = (e - p) / (l - p), x = 1 - (e - p) / (f - p), v = 1 - (s - p) / (f - p), N = 1 - (s - c) / (f - c), I = 1 - (e - c) / (f - c), _ = (e - c) / (l - c), m = (s - c) / (l - c)) : (E = 1 - (e - l) / (p - l), b = 1 - (s - l) / (p - l), x = (s - f) / (p - f), v = (e - f) / (p - f), N = (e - f) / (c - f), I = (s - f) / (c - f), _ = 1 - (s - l) / (c - l), m = 1 - (e - l) / (c - l)), w.push(oB[h]), w.push(ok[h]), w.push(oX[h]), w.push(oU[h])) : 153 === h ? (0 === d ? (E = (e - p) / (l - p), v = 1 - (e - p) / (f - p), N = 1 - (e - c) / (f - c), m = (e - c) / (l - c)) : (E = 1 - (s - l) / (p - l), v = (s - f) / (p - f), N = (s - f) / (c - f), m = 1 - (s - l) / (c - l)), w.push(oB[h]), w.push(oj[h])) : 102 === h ? (0 === d ? (b = 1 - (e - l) / (p - l), x = (e - f) / (p - f), I = (e - f) / (c - f), _ = 1 - (e - l) / (c - l)) : (b = (s - p) / (l - p), x = 1 - (s - p) / (f - p), I = 1 - (s - c) / (f - c), _ = (s - c) / (l - c)), w.push(ok[h]), w.push(oU[h])) : 155 === h ? (4 === d ? (E = (e - p) / (l - p), v = 1 - (e - p) / (f - p), N = 1 - (e - c) / (f - c), m = (e - c) / (l - c)) : (E = 1 - (s - l) / (p - l), v = (s - f) / (p - f), N = (s - f) / (c - f), m = 1 - (s - l) / (c - l)), w.push(oB[h]), w.push(oX[h])) : 103 === h ? (4 === d ? (b = 1 - (e - l) / (p - l), x = (e - f) / (p - f), I = (e - f) / (c - f), _ = 1 - (e - l) / (c - l)) : (b = (s - p) / (l - p), x = 1 - (s - p) / (f - p), I = 1 - (s - c) / (f - c), _ = (s - c) / (l - c)), w.push(ok[h]), w.push(oz[h])) : 152 === h ? (0 === d ? (E = (e - p) / (l - p), x = 1 - (e - p) / (f - p), v = 1 - (s - p) / (f - p), N = 1 - (s - c) / (f - c), I = 1 - (e - c) / (f - c), m = (e - c) / (l - c)) : (E = 1 - (s - l) / (p - l), x = (s - f) / (p - f), v = (e - f) / (p - f), N = (e - f) / (c - f), I = (s - f) / (c - f), m = 1 - (s - l) / (c - l)), w.push(oB[h]), w.push(oz[h]), w.push(oj[h])) : 156 === h ? (4 === d ? (E = (e - p) / (l - p), x = 1 - (e - p) / (f - p), v = 1 - (s - p) / (f - p), N = 1 - (s - c) / (f - c), I = 1 - (e - c) / (f - c), m = (e - c) / (l - c)) : (E = 1 - (s - l) / (p - l), x = (s - f) / (p - f), v = (e - f) / (p - f), N = (e - f) / (c - f), I = (s - f) / (c - f), m = 1 - (s - l) / (c - l)), w.push(oB[h]), w.push(oj[h]), w.push(oU[h])) : 137 === h ? (0 === d ? (E = (s - p) / (l - p), b = (e - p) / (l - p), v = 1 - (e - p) / (f - p), N = 1 - (e - c) / (f - c), _ = (e - c) / (l - c), m = (s - c) / (l - c)) : (E = 1 - (e - l) / (p - l), b = 1 - (s - l) / (p - l), v = (s - f) / (p - f), N = (s - f) / (c - f), _ = 1 - (s - l) / (c - l), m = 1 - (e - l) / (c - l)), w.push(oB[h]), w.push(ok[h]), w.push(oj[h])) : 139 === h ? (4 === d ? (E = (s - p) / (l - p), b = (e - p) / (l - p), v = 1 - (e - p) / (f - p), N = 1 - (e - c) / (f - c), _ = (e - c) / (l - c), m = (s - c) / (l - c)) : (E = 1 - (e - l) / (p - l), b = 1 - (s - l) / (p - l), v = (s - f) / (p - f), N = (s - f) / (c - f), _ = 1 - (s - l) / (c - l), m = 1 - (e - l) / (c - l)), w.push(oB[h]), w.push(ok[h]), w.push(oX[h])) : 98 === h ? (0 === d ? (E = 1 - (e - l) / (p - l), b = 1 - (s - l) / (p - l), x = (s - f) / (p - f), v = (e - f) / (p - f), I = (e - f) / (c - f), _ = 1 - (e - l) / (c - l)) : (E = (s - p) / (l - p), b = (e - p) / (l - p), x = 1 - (e - p) / (f - p), v = 1 - (s - p) / (f - p), I = 1 - (s - c) / (f - c), _ = (s - c) / (l - c)), w.push(oB[h]), w.push(ok[h]), w.push(oU[h])) : 99 === h ? (4 === d ? (E = 1 - (e - l) / (p - l), b = 1 - (s - l) / (p - l), x = (s - f) / (p - f), v = (e - f) / (p - f), I = (e - f) / (c - f), _ = 1 - (e - l) / (c - l)) : (E = (s - p) / (l - p), b = (e - p) / (l - p), x = 1 - (e - p) / (f - p), v = 1 - (s - p) / (f - p), I = 1 - (s - c) / (f - c), _ = (s - c) / (l - c)), w.push(oB[h]), w.push(ok[h]), w.push(oj[h])) : 38 === h ? (0 === d ? (b = 1 - (e - l) / (p - l), x = (e - f) / (p - f), N = (e - f) / (c - f), I = (s - f) / (c - f), _ = 1 - (s - l) / (c - l), m = 1 - (e - l) / (c - l)) : (b = (s - p) / (l - p), x = 1 - (s - p) / (f - p), N = 1 - (s - c) / (f - c), I = 1 - (e - c) / (f - c), _ = (e - c) / (l - c), m = (s - c) / (l - c)), w.push(ok[h]), w.push(oX[h]), w.push(oU[h])) : 39 === h ? (4 === d ? (b = 1 - (e - l) / (p - l), x = (e - f) / (p - f), N = (e - f) / (c - f), I = (s - f) / (c - f), _ = 1 - (s - l) / (c - l), m = 1 - (e - l) / (c - l)) : (b = (s - p) / (l - p), x = 1 - (s - p) / (f - p), N = 1 - (s - c) / (f - c), I = 1 - (e - c) / (f - c), _ = (e - c) / (l - c), m = (s - c) / (l - c)), w.push(ok[h]), w.push(oz[h]), w.push(oU[h])) : 85 === h && (E = 1, b = 0, x = 1, v = 0, N = 0, I = 1, _ = 0, m = 1), (_ < 0 || _ > 1 || m < 0 || m > 1 || E < 0 || E > 1 || x < 0 || x > 1 || N < 0 || N > 1 || I < 0 || I > 1) && console.log("MarchingSquaresJS-isoBands: " + h + " " + g + " " + c + "," + l + "," + p + "," + f + " " + d + " " + _ + " " + m + " " + E + " " + b + " " + x + " " + v + " " + N + " " + I), o.cells[a][u] = {
																cval: h,
																cval_real: g,
																flipped: d,
																topleft: _,
																topright: m,
																righttop: E,
																rightbottom: b,
																bottomright: x,
																bottomleft: v,
																leftbottom: N,
																lefttop: I,
																edges: w
															}
														}
													}
												}
											}
											return o
										}(t, e, n);
										return os.polygons ? (os.verbose && console.log("MarchingSquaresJS-isoBands: returning single polygons for each grid cell"), i = [], o = 0, l.cells.forEach(function(t, e) {
											t.forEach(function(t, n) {
												if (void 0 !== t) {
													var r = oH[t.cval](t);
													"object" == typeof r && nI(r) ? "object" == typeof r[0] && nI(r[0]) ? "object" == typeof r[0][0] && nI(r[0][0]) ? r.forEach(function(t) {
														t.forEach(function(t) {
															t[0] += n, t[1] += e
														}), i[o++] = t
													}) : (r.forEach(function(t) {
														t[0] += n, t[1] += e
													}), i[o++] = r) : console.log("MarchingSquaresJS-isoBands: bandcell polygon with malformed coordinates") : console.log("MarchingSquaresJS-isoBands: bandcell polygon with null coordinates")
												}
											})
										}), c = i) : (os.verbose && console.log("MarchingSquaresJS-isoBands: returning polygon paths for entire data grid"), c = function(t) {
											for (var e = [], n = t.rows, r = t.cols, i = [], o = 0; o < n; o++)
												for (var s = 0; s < r; s++)
													if (void 0 !== t.cells[o][s] && t.cells[o][s].edges.length > 0) {
														var a = function(t) {
																if (t.edges.length > 0) {
																	var e = t.edges[t.edges.length - 1],
																		n = t.cval_real;
																	switch (e) {
																		case 0:
																			return 16 & n ? {
																				p: [1, t.righttop],
																				x: -1,
																				y: 0,
																				o: 1
																			} : {
																				p: [t.topleft, 1],
																				x: 0,
																				y: -1,
																				o: 0
																			};
																		case 1:
																			return 4 & n ? {
																				p: [t.topleft, 1],
																				x: 0,
																				y: -1,
																				o: 0
																			} : {
																				p: [1, t.rightbottom],
																				x: -1,
																				y: 0,
																				o: 0
																			};
																		case 2:
																			return 4 & n ? {
																				p: [t.bottomright, 0],
																				x: 0,
																				y: 1,
																				o: 1
																			} : {
																				p: [t.topleft, 1],
																				x: 0,
																				y: -1,
																				o: 0
																			};
																		case 3:
																			return 1 & n ? {
																				p: [t.topleft, 1],
																				x: 0,
																				y: -1,
																				o: 0
																			} : {
																				p: [t.bottomleft, 0],
																				x: 0,
																				y: 1,
																				o: 0
																			};
																		case 4:
																			return 16 & n ? {
																				p: [1, t.righttop],
																				x: -1,
																				y: 0,
																				o: 1
																			} : {
																				p: [t.topright, 1],
																				x: 0,
																				y: -1,
																				o: 1
																			};
																		case 5:
																			return 4 & n ? {
																				p: [t.topright, 1],
																				x: 0,
																				y: -1,
																				o: 1
																			} : {
																				p: [1, t.rightbottom],
																				x: -1,
																				y: 0,
																				o: 0
																			};
																		case 6:
																			return 4 & n ? {
																				p: [t.bottomright, 0],
																				x: 0,
																				y: 1,
																				o: 1
																			} : {
																				p: [t.topright, 1],
																				x: 0,
																				y: -1,
																				o: 1
																			};
																		case 7:
																			return 1 & n ? {
																				p: [t.topright, 1],
																				x: 0,
																				y: -1,
																				o: 1
																			} : {
																				p: [t.bottomleft, 0],
																				x: 0,
																				y: 1,
																				o: 0
																			};
																		case 8:
																			return 4 & n ? {
																				p: [t.bottomright, 0],
																				x: 0,
																				y: 1,
																				o: 1
																			} : {
																				p: [1, t.righttop],
																				x: -1,
																				y: 0,
																				o: 1
																			};
																		case 9:
																			return 1 & n ? {
																				p: [1, t.righttop],
																				x: -1,
																				y: 0,
																				o: 1
																			} : {
																				p: [t.bottomleft, 0],
																				x: 0,
																				y: 1,
																				o: 0
																			};
																		case 10:
																			return 1 & n ? {
																				p: [0, t.leftbottom],
																				x: 1,
																				y: 0,
																				o: 0
																			} : {
																				p: [1, t.righttop],
																				x: -1,
																				y: 0,
																				o: 1
																			};
																		case 11:
																			return 64 & n ? {
																				p: [1, t.righttop],
																				x: -1,
																				y: 0,
																				o: 1
																			} : {
																				p: [0, t.lefttop],
																				x: 1,
																				y: 0,
																				o: 1
																			};
																		case 12:
																			return 4 & n ? {
																				p: [t.bottomright, 0],
																				x: 0,
																				y: 1,
																				o: 1
																			} : {
																				p: [1, t.rightbottom],
																				x: -1,
																				y: 0,
																				o: 0
																			};
																		case 13:
																			return 1 & n ? {
																				p: [1, t.rightbottom],
																				x: -1,
																				y: 0,
																				o: 0
																			} : {
																				p: [t.bottomleft, 0],
																				x: 0,
																				y: 1,
																				o: 0
																			};
																		case 14:
																			return 1 & n ? {
																				p: [0, t.leftbottom],
																				x: 1,
																				y: 0,
																				o: 0
																			} : {
																				p: [1, t.rightbottom],
																				x: -1,
																				y: 0,
																				o: 0
																			};
																		case 15:
																			return 64 & n ? {
																				p: [1, t.rightbottom],
																				x: -1,
																				y: 0,
																				o: 0
																			} : {
																				p: [0, t.lefttop],
																				x: 1,
																				y: 0,
																				o: 1
																			};
																		case 16:
																			return 4 & n ? {
																				p: [t.bottomright, 0],
																				x: 0,
																				y: 1,
																				o: 1
																			} : {
																				p: [0, t.leftbottom],
																				x: 1,
																				y: 0,
																				o: 0
																			};
																		case 17:
																			return 64 & n ? {
																				p: [t.bottomright, 0],
																				x: 0,
																				y: 1,
																				o: 1
																			} : {
																				p: [0, t.lefttop],
																				x: 1,
																				y: 0,
																				o: 1
																			};
																		case 18:
																			return 1 & n ? {
																				p: [0, t.leftbottom],
																				x: 1,
																				y: 0,
																				o: 0
																			} : {
																				p: [t.bottomleft, 0],
																				x: 0,
																				y: 1,
																				o: 0
																			};
																		case 19:
																			return 64 & n ? {
																				p: [t.bottomleft, 0],
																				x: 0,
																				y: 1,
																				o: 0
																			} : {
																				p: [0, t.lefttop],
																				x: 1,
																				y: 0,
																				o: 1
																			};
																		case 20:
																			return 64 & n ? {
																				p: [t.topleft, 1],
																				x: 0,
																				y: -1,
																				o: 0
																			} : {
																				p: [0, t.leftbottom],
																				x: 1,
																				y: 0,
																				o: 0
																			};
																		case 21:
																			return 16 & n ? {
																				p: [0, t.leftbottom],
																				x: 1,
																				y: 0,
																				o: 0
																			} : {
																				p: [t.topright, 1],
																				x: 0,
																				y: -1,
																				o: 1
																			};
																		case 22:
																			return 64 & n ? {
																				p: [t.topleft, 1],
																				x: 0,
																				y: -1,
																				o: 0
																			} : {
																				p: [0, t.lefttop],
																				x: 1,
																				y: 0,
																				o: 1
																			};
																		case 23:
																			return 16 & n ? {
																				p: [0, t.lefttop],
																				x: 1,
																				y: 0,
																				o: 1
																			} : {
																				p: [t.topright, 1],
																				x: 0,
																				y: -1,
																				o: 1
																			};
																		default:
																			console.log("MarchingSquaresJS-isoBands: edge index out of range!"), console.log(t)
																	}
																}
																return null
															}(t.cells[o][s]),
															u = null,
															h = s,
															c = o;
														null !== a && i.push([a.p[0] + h, a.p[1] + c]);
														do {
															if (null === (u = function(t, e, n, r) {
																	var i, o, s, a, u, h = t.cval;
																	switch (e) {
																		case -1:
																			0 === r ? (i = ok[h], s = oy[h], a = o_[h], u = om[h]) : (i = oB[h], s = of [h], a = og[h], u = od[h]);
																			break;
																		case 1:
																			0 === r ? (i = oX[h], s = oM[h], a = oL[h], u = oP[h]) : (i = oU[h], s = ow[h], a = oC[h], u = oS[h]);
																			break;
																		default:
																			switch (n) {
																				case -1:
																					0 === r ? (i = oY[h], s = oa[h], a = ou[h], u = oh[h]) : (i = oV[h], s = oc[h], a = ol[h], u = op[h]);
																					break;
																				case 1:
																					0 === r ? (i = oj[h], s = ov[h], a = ox[h], u = oE[h]) : (i = oz[h], s = ob[h], a = oI[h], u = oN[h])
																			}
																	}
																	if (o = t.edges.indexOf(i), void 0 === t.edges[o]) return null;
																	switch (function(t, e) {
																			delete t.edges[e];
																			for (var n = e + 1; n < t.edges.length; n++) t.edges[n - 1] = t.edges[n];
																			t.edges.pop()
																		}(t, o), h = t.cval_real, i) {
																		case 0:
																			16 & h ? (e = t.topleft, n = 1) : (e = 1, n = t.righttop);
																			break;
																		case 1:
																			4 & h ? (e = 1, n = t.rightbottom) : (e = t.topleft, n = 1);
																			break;
																		case 2:
																			4 & h ? (e = t.topleft, n = 1) : (e = t.bottomright, n = 0);
																			break;
																		case 3:
																			1 & h ? (e = t.bottomleft, n = 0) : (e = t.topleft, n = 1);
																			break;
																		case 4:
																			16 & h ? (e = t.topright, n = 1) : (e = 1, n = t.righttop);
																			break;
																		case 5:
																			4 & h ? (e = 1, n = t.rightbottom) : (e = t.topright, n = 1);
																			break;
																		case 6:
																			4 & h ? (e = t.topright, n = 1) : (e = t.bottomright, n = 0);
																			break;
																		case 7:
																			1 & h ? (e = t.bottomleft, n = 0) : (e = t.topright, n = 1);
																			break;
																		case 8:
																			4 & h ? (e = 1, n = t.righttop) : (e = t.bottomright, n = 0);
																			break;
																		case 9:
																			1 & h ? (e = t.bottomleft, n = 0) : (e = 1, n = t.righttop);
																			break;
																		case 10:
																			1 & h ? (e = 1, n = t.righttop) : (e = 0, n = t.leftbottom);
																			break;
																		case 11:
																			64 & h ? (e = 0, n = t.lefttop) : (e = 1, n = t.righttop);
																			break;
																		case 12:
																			4 & h ? (e = 1, n = t.rightbottom) : (e = t.bottomright, n = 0);
																			break;
																		case 13:
																			1 & h ? (e = t.bottomleft, n = 0) : (e = 1, n = t.rightbottom);
																			break;
																		case 14:
																			1 & h ? (e = 1, n = t.rightbottom) : (e = 0, n = t.leftbottom);
																			break;
																		case 15:
																			64 & h ? (e = 0, n = t.lefttop) : (e = 1, n = t.rightbottom);
																			break;
																		case 16:
																			4 & h ? (e = 0, n = t.leftbottom) : (e = t.bottomright, n = 0);
																			break;
																		case 17:
																			64 & h ? (e = 0, n = t.lefttop) : (e = t.bottomright, n = 0);
																			break;
																		case 18:
																			1 & h ? (e = t.bottomleft, n = 0) : (e = 0, n = t.leftbottom);
																			break;
																		case 19:
																			64 & h ? (e = 0, n = t.lefttop) : (e = t.bottomleft, n = 0);
																			break;
																		case 20:
																			64 & h ? (e = 0, n = t.leftbottom) : (e = t.topleft, n = 1);
																			break;
																		case 21:
																			16 & h ? (e = t.topright, n = 1) : (e = 0, n = t.leftbottom);
																			break;
																		case 22:
																			64 & h ? (e = 0, n = t.lefttop) : (e = t.topleft, n = 1);
																			break;
																		case 23:
																			16 & h ? (e = t.topright, n = 1) : (e = 0, n = t.lefttop);
																			break;
																		default:
																			return console.log("MarchingSquaresJS-isoBands: edge index out of range!"), console.log(t), null
																	}
																	return void 0 !== e && void 0 !== n && void 0 !== s && void 0 !== a && void 0 !== u || (console.log("MarchingSquaresJS-isoBands: undefined value!"), console.log(t), console.log(e + " " + n + " " + s + " " + a + " " + u)), {
																		p: [e, n],
																		x: s,
																		y: a,
																		o: u
																	}
																}(t.cells[c][h], a.x, a.y, a.o))) break;
															if (i.push([u.p[0] + h, u.p[1] + c]), h += u.x, c += u.y, a = u, c < 0 || c >= n || h < 0 || h >= r || void 0 === t.cells[c][h]) {
																var l = function(t, e, n, r, i, o) {
																	for (var s = t.cells[n][e], a = s.cval_real, u = e + r, h = n + i, c = [], l = !1; !l;) {
																		if (void 0 === t.cells[h] || void 0 === t.cells[h][u]) {
																			if (h -= i, u -= r, a = (s = t.cells[h][u]).cval_real, -1 === i) {
																				if (0 === o) {
																					if (1 & a) c.push([u, h]), r = -1, i = 0, o = 0;
																					else {
																						if (!(4 & a)) {
																							c.push([u + s.bottomright, h]), r = 0, i = 1, o = 1, l = !0;
																							break
																						}
																						c.push([u + 1, h]), r = 1, i = 0, o = 0
																					}
																				} else {
																					if (!(1 & a)) {
																						if (4 & a) {
																							c.push([u + s.bottomright, h]), r = 0, i = 1, o = 1, l = !0;
																							break
																						}
																						c.push([u + s.bottomleft, h]), r = 0, i = 1, o = 0, l = !0;
																						break
																					}
																					c.push([u, h]), r = -1, i = 0, o = 0
																				}
																			} else if (1 === i) {
																				if (0 === o) {
																					if (!(16 & a)) {
																						if (64 & a) {
																							c.push([u + s.topleft, h + 1]), r = 0, i = -1, o = 0, l = !0;
																							break
																						}
																						c.push([u + s.topright, h + 1]), r = 0, i = -1, o = 1, l = !0;
																						break
																					}
																					c.push([u + 1, h + 1]), r = 1, i = 0, o = 1
																				} else c.push([u + 1, h + 1]), r = 1, i = 0, o = 1
																			} else if (-1 === r) {
																				if (0 === o) {
																					if (!(64 & a)) {
																						if (1 & a) {
																							c.push([u, h + s.leftbottom]), r = 1, i = 0, o = 0, l = !0;
																							break
																						}
																						c.push([u, h + s.lefttop]), r = 1, i = 0, o = 1, l = !0;
																						break
																					}
																					c.push([u, h + 1]), r = 0, i = 1, o = 0
																				} else {
																					if (!(64 & a)) {
																						console.log("MarchingSquaresJS-isoBands: wtf");
																						break
																					}
																					c.push([u, h + 1]), r = 0, i = 1, o = 0
																				}
																			} else {
																				if (1 !== r) {
																					console.log("MarchingSquaresJS-isoBands: we came from nowhere!");
																					break
																				}
																				if (0 === o) {
																					if (!(4 & a)) {
																						c.push([u + 1, h + s.rightbottom]), r = -1, i = 0, o = 0, l = !0;
																						break
																					}
																					c.push([u + 1, h]), r = 0, i = -1, o = 1
																				} else {
																					if (!(4 & a)) {
																						if (16 & a) {
																							c.push([u + 1, h + s.righttop]), r = -1, i = 0, o = 1;
																							break
																						}
																						c.push([u + 1, h + s.rightbottom]), r = -1, i = 0, o = 0, l = !0;
																						break
																					}
																					c.push([u + 1, h]), r = 0, i = -1, o = 1
																				}
																			}
																		} else if (a = (s = t.cells[h][u]).cval_real, -1 === r) {
																			if (0 === o) {
																				if (void 0 !== t.cells[h - 1] && void 0 !== t.cells[h - 1][u]) r = 0, i = -1, o = 1;
																				else {
																					if (!(1 & a)) {
																						c.push([u + s.bottomright, h]), r = 0, i = 1, o = 1, l = !0;
																						break
																					}
																					c.push([u, h])
																				}
																			} else {
																				if (!(64 & a)) {
																					console.log("MarchingSquaresJS-isoBands: found entry from top at " + u + "," + h);
																					break
																				}
																				console.log("MarchingSquaresJS-isoBands: proceeding in x-direction!")
																			}
																		} else if (1 === r) {
																			if (0 === o) {
																				console.log("MarchingSquaresJS-isoBands: wtf");
																				break
																			}
																			if (void 0 !== t.cells[h + 1] && void 0 !== t.cells[h + 1][u]) r = 0, i = 1, o = 0;
																			else {
																				if (!(16 & a)) {
																					c.push([u + s.topleft, h + 1]), r = 0, i = -1, o = 0, l = !0;
																					break
																				}
																				c.push([u + 1, h + 1]), r = 1, i = 0, o = 1
																			}
																		} else if (-1 === i) {
																			if (1 !== o) {
																				console.log("MarchingSquaresJS-isoBands: wtf");
																				break
																			}
																			if (void 0 !== t.cells[h][u + 1]) r = 1, i = 0, o = 1;
																			else {
																				if (!(4 & a)) {
																					c.push([u + 1, h + s.righttop]), r = -1, i = 0, o = 1, l = !0;
																					break
																				}
																				c.push([u + 1, h]), r = 0, i = -1, o = 1
																			}
																		} else {
																			if (1 !== i) {
																				console.log("MarchingSquaresJS-isoBands: where did we came from???");
																				break
																			}
																			if (0 !== o) {
																				console.log("MarchingSquaresJS-isoBands: wtf");
																				break
																			}
																			if (void 0 !== t.cells[h][u - 1]) r = -1, i = 0, o = 0;
																			else {
																				if (!(64 & a)) {
																					c.push([u, h + s.leftbottom]), r = 1, i = 0, o = 0, l = !0;
																					break
																				}
																				c.push([u, h + 1]), r = 0, i = 1, o = 0
																			}
																		}
																		if (u += r, h += i, u === e && h === n) break
																	}
																	return {
																		path: c,
																		i: u,
																		j: h,
																		x: r,
																		y: i,
																		o: o
																	}
																}(t, h -= u.x, c -= u.y, u.x, u.y, u.o);
																if (null === l) break;
																l.path.forEach(function(t) {
																	i.push(t)
																}), h = l.i, c = l.j, a = l
															}
														} while (void 0 !== t.cells[c][h] && t.cells[c][h].edges.length > 0);
														e.push(i), i = [], t.cells[o][s].edges.length > 0 && s--
													} return e
										}(l)), "function" == typeof os.successCallback && os.successCallback(c), c
									}(t, s, a - s))),
									h = {};
								h.groupedRings = u, h[n] = s + "-" + a, r.push(h)
							}
							return r
						}(x, e, _);
					return h((r = E, s = (i = j(t))[2] - i[0], a = i[3] - i[1], u = i[0], c = i[1], l = x[0].length - 1, f = x.length - 1, g = s / l, d = a / f, y = function(t) {
						t[0] = t[0] * g + u, t[1] = t[1] * d + c
					}, r.forEach(function(t) {
						t.groupedRings.forEach(function(t) {
							t.forEach(function(t) {
								t.forEach(y)
							})
						})
					}), E = r).map(function(t, e) {
						if (v[e] && !N(v[e])) throw Error("Each mappedProperty is required to be an Object");
						var n = Object.assign({}, m, v[e]);
						return n[_] = t[_], p(t.groupedRings, n)
					}))
				}, t.transformRotate = nN, t.transformScale = nw, t.transformTranslate = function(t, e, n, r) {
					if (!N(r = r || {})) throw Error("options is invalid");
					var i = r.units,
						o = r.zTranslation,
						s = r.mutate;
					if (!t) throw Error("geojson is required");
					if (null == e || isNaN(e)) throw Error("distance is required");
					if (o && "number" != typeof o && isNaN(o)) throw Error("zTranslation is not a number");
					if (o = void 0 !== o ? o : 0, 0 === e && 0 === o) return t;
					if (null == n || isNaN(n)) throw Error("direction is required");
					return e < 0 && (e = -e, n = -n), !1 !== s && void 0 !== s || (t = tT(t)), S(t, function(t) {
						var r = U(ny(t, e, n, {
							units: i
						}));
						t[0] = r[0], t[1] = r[1], o && 3 === t.length && (t[2] += o)
					}), t
				}, t.lineOffset = function(t, e, n) {
					if (!N(n = n || {})) throw Error("options is invalid");
					var r = n.units;
					if (!t) throw Error("geojson is required");
					if (null == e || isNaN(e)) throw Error("distance is required");
					var i = K(t),
						o = t.properties;
					switch (i) {
						case "LineString":
							return nL(t, e, r);
						case "MultiLineString":
							var s = [];
							return F(t, function(t) {
								s.push(nL(t, e, r).geometry.coordinates)
							}), c(s, o);
						default:
							throw Error("geometry " + i + " is not supported")
					}
				}, t.polygonize = function(t) {
					var e = oQ.fromGeoJson(t);
					e.deleteDangles(), e.deleteCutEdges();
					var n = [],
						r = [];
					return e.getEdgeRings().filter(function(t) {
						return t.isValid()
					}).forEach(function(t) {
						t.isHole() ? n.push(t) : r.push(t)
					}), n.forEach(function(t) {
						oZ.findEdgeRingContaining(t, r) && r.push(t)
					}), h(r.map(function(t) {
						return t.toPolygon()
					}))
				}, t.booleanDisjoint = function(t, e) {
					var n;
					return F(t, function(t) {
						F(e, function(e) {
							if (!1 === n) return !1;
							n = function(t, e) {
								switch (t.type) {
									case "Point":
										switch (e.type) {
											case "Point":
												var n, r;
												return n = t.coordinates, r = e.coordinates, n[0] !== r[0] || n[1] !== r[1];
											case "LineString":
												return !nR(e, t);
											case "Polygon":
												return !tC(t, e)
										}
										break;
									case "LineString":
										switch (e.type) {
											case "Point":
												return !nR(t, e);
											case "LineString":
												return !(eL(t, e).features.length > 0);
											case "Polygon":
												return !nT(e, t)
										}
										break;
									case "Polygon":
										switch (e.type) {
											case "Point":
												return !tC(e, t);
											case "LineString":
												return !nT(t, e);
											case "Polygon":
												return ! function(t, e) {
													for (var n = 0; n < t.coordinates[0].length; n++)
														if (tC(t.coordinates[0][n], e)) return !0;
													for (var r = 0; r < e.coordinates[0].length; r++)
														if (tC(e.coordinates[0][r], t)) return !0;
													return !1
												}(e, t)
										}
								}
							}(t.geometry, e.geometry)
						})
					}), n
				}, t.booleanContains = function(t, e) {
					var n = K(t),
						r = K(e),
						i = J(t),
						o = J(e),
						s = U(t),
						a = U(e);
					switch (n) {
						case "Point":
							if ("Point" === r) return nA(s, a);
							throw Error("feature2 " + r + " geometry not supported");
						case "MultiPoint":
							switch (r) {
								case "Point":
									return function(t, e) {
										var n, r = !1;
										for (n = 0; n < t.coordinates.length; n++)
											if (nA(t.coordinates[n], e.coordinates)) {
												r = !0;
												break
											} return r
									}(i, o);
								case "MultiPoint":
									return function(t, e) {
										for (var n = 0; n < e.coordinates.length; n++) {
											for (var r = !1, i = 0; i < t.coordinates.length; i++)
												if (nA(e.coordinates[n], t.coordinates[i])) {
													r = !0;
													break
												} if (!r) return !1
										}
										return !0
									}(i, o);
								default:
									throw Error("feature2 " + r + " geometry not supported")
							}
						case "LineString":
							switch (r) {
								case "Point":
									return eZ(o, i, {
										ignoreEndVertices: !0
									});
								case "LineString":
									return function(t, e) {
										for (var n = !1, r = 0; r < e.coordinates.length; r++)
											if (eZ({
													type: "Point",
													coordinates: e.coordinates[r]
												}, t, {
													ignoreEndVertices: !0
												}) && (n = !0), !eZ({
													type: "Point",
													coordinates: e.coordinates[r]
												}, t, {
													ignoreEndVertices: !1
												})) return !1;
										return n
									}(i, o);
								case "MultiPoint":
									return function(t, e) {
										for (var n = !1, r = 0; r < e.coordinates.length; r++)
											if (eZ(e.coordinates[r], t, {
													ignoreEndVertices: !0
												}) && (n = !0), !eZ(e.coordinates[r], t)) return !1;
										return !!n
									}(i, o);
								default:
									throw Error("feature2 " + r + " geometry not supported")
							}
						case "Polygon":
							switch (r) {
								case "Point":
									return tC(o, i, {
										ignoreBoundary: !0
									});
								case "LineString":
									return function(t, e) {
										var n, r, i = !1,
											o = 0;
										if (!nD(j(t), j(e))) return !1;
										for (; o < e.coordinates.length - 1; o++)
											if (tC({
													type: "Point",
													coordinates: (n = e.coordinates[o], r = e.coordinates[o + 1], [(n[0] + r[0]) / 2, (n[1] + r[1]) / 2])
												}, t, {
													ignoreBoundary: !0
												})) {
												i = !0;
												break
											} return i
									}(i, o);
								case "Polygon":
									return function(t, e) {
										if (!nD(j(t), j(e))) return !1;
										for (var n = 0; n < e.coordinates[0].length; n++)
											if (!tC(e.coordinates[0][n], t)) return !1;
										return !0
									}(i, o);
								case "MultiPoint":
									return function(t, e) {
										for (var n = 0; n < e.coordinates.length; n++)
											if (!tC(e.coordinates[n], t, {
													ignoreBoundary: !0
												})) return !1;
										return !0
									}(i, o);
								default:
									throw Error("feature2 " + r + " geometry not supported")
							}
						default:
							throw Error("feature1 " + n + " geometry not supported")
					}
				}, t.booleanCrosses = function(t, e) {
					var n = K(t),
						r = K(e),
						i = J(t),
						o = J(e);
					switch (n) {
						case "MultiPoint":
							switch (r) {
								case "LineString":
									return nF(i, o);
								case "Polygon":
									return nG(i, o);
								default:
									throw Error("feature2 " + r + " geometry not supported")
							}
						case "LineString":
							switch (r) {
								case "MultiPoint":
									return nF(o, i);
								case "LineString":
									return function(t, e) {
										if (eL(t, e).features.length > 0)
											for (var n = 0; n < t.coordinates.length - 1; n++)
												for (var r = 0; r < e.coordinates.length - 1; r++) {
													var i = !0;
													if (0 !== r && r !== e.coordinates.length - 2 || (i = !1), nB(t.coordinates[n], t.coordinates[n + 1], e.coordinates[r], i)) return !0
												}
										return !1
									}(i, o);
								case "Polygon":
									return nq(i, o);
								default:
									throw Error("feature2 " + r + " geometry not supported")
							}
						case "Polygon":
							switch (r) {
								case "MultiPoint":
									return nG(o, i);
								case "LineString":
									return nq(o, i);
								default:
									throw Error("feature2 " + r + " geometry not supported")
							}
						default:
							throw Error("feature1 " + n + " geometry not supported")
					}
				}, t.booleanClockwise = nv, t.booleanOverlap = nX, t.booleanPointOnLine = eZ, t.booleanEqual = function(t, e) {
					if (!t) throw Error("feature1 is required");
					if (!e) throw Error("feature2 is required");
					return K(t) === K(e) && new o3({
						precision: 6
					}).compare(tU(t), tU(e))
				}, t.booleanWithin = eK, t.clone = tT, t.cleanCoords = tU, t.clustersDbscan = function(t, e, n) {
					if ("object" != typeof(n = n || {})) throw Error("options is invalid");
					var r = n.minPoints,
						i = n.units;
					if (W(t, "Point", "Input must contain Points"), null == e) throw Error("maxDistance is required");
					if (!(Math.sign(e) > 0)) throw Error("Invalid maxDistance");
					if (!(null == r || Math.sign(r) > 0)) throw Error("Invalid minPoints");
					t = tT(t), r = r || 3;
					var o = new o9.DBSCAN,
						s = -1;
					return o.run(T(t), E(e, i), r, tR).forEach(function(e) {
						s++, e.forEach(function(e) {
							var n = t.features[e];
							n.properties || (n.properties = {}), n.properties.cluster = s, n.properties.dbscan = "core"
						})
					}), o.noise.forEach(function(e) {
						var n = t.features[e];
						n.properties || (n.properties = {}), n.properties.cluster ? n.properties.dbscan = "edge" : n.properties.dbscan = "noise"
					}), t
				}, t.clustersKmeans = function(t, e) {
					if ("object" != typeof(e = e || {})) throw Error("options is invalid");
					var n = e.numberOfClusters,
						r = e.mutate;
					W(t, "Point", "Input must contain Points");
					var i = t.features.length;
					(n = n || Math.round(Math.sqrt(i / 2))) > i && (n = i), !1 !== r && void 0 !== r || (t = tT(t));
					var o = T(t),
						s = o.slice(0, n),
						a = sr(o, n, s),
						u = {};
					return a.centroids.forEach(function(t, e) {
						u[e] = t
					}), O(t, function(t, e) {
						var n = a.idxs[e];
						t.properties.cluster = n, t.properties.centroid = u[n]
					}), t
				}, t.pointToLineDistance = ek, t.booleanParallel = function(t, e) {
					if (!t) throw Error("line1 is required");
					if (!e) throw Error("line2 is required");
					if ("LineString" !== nY(t, "line1")) throw Error("line1 must be a LineString");
					if ("LineString" !== nY(e, "line2")) throw Error("line2 must be a LineString");
					for (var n = eM(tU(t)).features, r = eM(tU(e)).features, i = 0; i < n.length; i++) {
						var o, s = n[i].geometry.coordinates;
						if (!r[i]) break;
						if (o = r[i].geometry.coordinates, m(eR(s[0], s[1])) !== m(eR(o[0], o[1]))) return !1
					}
					return !0
				}, t.shortestPath = function(t, n, i) {
					if (!N(i = i || {})) throw Error("options is invalid");
					var o = i.resolution,
						s = i.minDistance,
						u = i.obstacles || h([]);
					if (!t) throw Error("start is required");
					if (!n) throw Error("end is required");
					if (o && !I(o) || o <= 0) throw Error("options.resolution must be a number, greater than 0");
					if (s) throw Error("options.minDistance is not yet implemented");
					var c = X(t),
						l = X(n);
					switch (t = r(c), n = r(l), K(u)) {
						case "FeatureCollection":
							if (0 === u.features.length) return a([c, l]);
							break;
						case "Polygon":
							u = h([e(J(u))]);
							break;
						default:
							throw Error("invalid obstacles")
					}
					var p = u;
					p.features.push(t), p.features.push(n);
					var f = j(nw(tZ(j(p)), 1.15));
					o || (o = tR([f[0], f[1]], [f[2], f[1]], i) / 100), p.features.pop(), p.features.pop();
					for (var g = f[0], d = f[1], y = f[2], _ = f[3], m = o / tR([g, d], [y, d], i) * (y - g), v = o / tR([g, d], [g, _], i) * (_ - d), x = y - g, E = _ - d, b = (x - Math.floor(x / m) * m) / 2, w = [], C = [], S = [], M = [], L = 1 / 0, P = 1 / 0, O = _ - (E - Math.floor(E / v) * v) / 2, R = 0; O >= d;) {
						for (var T = [], D = [], A = g + b, F = 0; A <= y;) {
							var q = r([A, O]),
								G = function(t, e) {
									for (var n = 0; n < e.features.length; n++)
										if (tC(t, e.features[n])) return !0;
									return !1
								}(q, u);
							T.push(G ? 0 : 1), D.push(A + "|" + O);
							var B = tR(q, t);
							!G && B < L && (L = B, S = {
								x: F,
								y: R
							});
							var k = tR(q, n);
							!G && k < P && (P = k, M = {
								x: F,
								y: R
							}), A += m, F++
						}
						C.push(T), w.push(D), O -= v, R++
					}
					var z = new nH(C, {
							diagonal: !0
						}),
						U = z.grid[S.y][S.x],
						Y = z.grid[M.y][M.x],
						V = [c];
					return si.search(z, U, Y).forEach(function(t) {
						var e = w[t.x][t.y].split("|");
						V.push([+e[0], +e[1]])
					}), V.push(l), tU(a(V))
				}, t.voronoi = function(t, e) {
					if (!N(e = e || {})) throw Error("options is invalid");
					var n = e.bbox || [-180, -85, 180, 85];
					if (!t) throw Error("points is required");
					if (!Array.isArray(n)) throw Error("bbox is invalid");
					return W(t, "Point", "points"), h(sd().x(function(t) {
						return t.geometry.coordinates[0]
					}).y(function(t) {
						return t.geometry.coordinates[1]
					}).extent([
						[n[0], n[1]],
						[n[2], n[3]]
					]).polygons(t.features).map(ri))
				}, t.ellipse = ro, t.centerMean = ra, t.centerMedian = function(t, e) {
					if (!N(e = e || {})) throw Error("options is invalid");
					var n = e.counter || 10;
					if (!I(n)) throw Error("counter must be a number");
					var i = e.weight,
						o = ra(t, {
							weight: e.weight
						}),
						s = h([]);
					return O(t, function(t) {
							s.features.push(t3(t, {
								weight: t.properties[i]
							}))
						}), s.properties = {
							tolerance: e.tolerance,
							medianCandidates: []
						},
						function t(e, n, i, o) {
							var s = i.properties.tolerance || .001,
								a = 0,
								u = 0,
								h = 0,
								c = 0;
							if (O(i, function(t) {
									var n = t.properties.weight,
										r = null == n ? 1 : n;
									if (!I(r = Number(r))) throw Error("weight value must be a number");
									if (r > 0) {
										c += 1;
										var i = r * tR(t, e);
										0 === i && (i = 1);
										var o = r / i;
										a += t.geometry.coordinates[0] * o, u += t.geometry.coordinates[1] * o, h += o
									}
								}), c < 1) throw Error("no features to measure");
							var l = a / h,
								p = u / h;
							return 1 === c || 0 === o || Math.abs(l - n[0]) < s && Math.abs(p - n[1]) < s ? r([l, p], {
								medianCandidates: i.properties.medianCandidates
							}) : (i.properties.medianCandidates.push([l, p]), t([l, p], e, i, o - 1))
						}(o.geometry.coordinates, [0, 0], s, n)
				}, t.standardDeviationalEllipse = function(t, e) {
					if (!N(e = e || {})) throw Error("options is invalid");
					var n = e.steps || 64,
						r = e.weight,
						i = e.properties || {};
					if (!I(n)) throw Error("steps must be a number");
					if (!N(i)) throw Error("properties must be a number");
					var o = T(t).length,
						s = ra(t, {
							weight: r
						}),
						a = 0,
						u = 0,
						c = 0;
					O(t, function(t) {
						var e = t.properties[r] || 1,
							n = ru(U(t), U(s));
						a += Math.pow(n.x, 2) * e, u += Math.pow(n.y, 2) * e, c += n.x * n.y * e
					});
					var l = a - u,
						p = Math.sqrt(Math.pow(l, 2) + 4 * Math.pow(c, 2)),
						f = Math.atan((l + p) / (2 * c)),
						g = 180 * f / Math.PI,
						d = 0,
						y = 0,
						_ = 0;
					O(t, function(t) {
						var e = t.properties[r] || 1,
							n = ru(U(t), U(s));
						d += Math.pow(n.x * Math.cos(f) - n.y * Math.sin(f), 2) * e, y += Math.pow(n.x * Math.sin(f) + n.y * Math.cos(f), 2) * e, _ += e
					});
					var m = Math.sqrt(2 * d / _),
						v = Math.sqrt(2 * y / _),
						x = ro(s, m, v, {
							units: "degrees",
							angle: g,
							steps: n,
							properties: i
						}),
						E = tM(t, h([x])),
						b = {
							meanCenterCoordinates: U(s),
							semiMajorAxis: m,
							semiMinorAxis: v,
							numberOfFeatures: o,
							angle: g,
							percentageWithinEllipse: 100 * T(E).length / o
						};
					return x.properties.standardDeviationalEllipse = b, x
				}, t.difference = function(t, n) {
					var r = J(t),
						i = J(n),
						o = t.properties || {};
					if (r = rF(r), i = rF(i), !r) return null;
					if (!i) return e(r, o);
					var s = new uo,
						a = s.read(r),
						u = s.read(i),
						h = cz.difference(a, u);
					return h.isEmpty() ? null : e((new us).write(h), o)
				}, t.buffer = function(t, e, n) {
					var r = (n = n || {}).units,
						i = n.steps || 64;
					if (!t) throw Error("geojson is required");
					if ("object" != typeof n) throw Error("options must be an object");
					if ("number" != typeof i) throw Error("steps must be an number");
					if (void 0 === e) throw Error("radius is required");
					if (i <= 0) throw Error("steps must be greater than 0");
					i = i || 64, r = r || "kilometers";
					var o = [];
					switch (t.type) {
						case "GeometryCollection":
							return D(t, function(t) {
								var n = ir(t, e, r, i);
								n && o.push(n)
							}), h(o);
						case "FeatureCollection":
							return O(t, function(t) {
								var n = ir(t, e, r, i);
								n && O(n, function(t) {
									t && o.push(t)
								})
							}), h(o)
					}
					return ir(t, e, r, i)
				}, t.union = io, t.intersect = is, t.dissolve = function(t, e) {
					if (!N(e = e || {})) throw Error("options is invalid");
					var n = e.propertyName;
					W(t, "Polygon", "dissolve");
					var r = tT(t),
						i = r.features,
						o = [];
					i.forEach(function(t, e) {
						t.properties.origIndexPosition = e
					});
					var s = ew();
					for (var u in s.load(r), i) {
						var h = i[u],
							c = !1;
						if (s.search(h).features.forEach(function(t) {
								h = i[u];
								var e = t.properties.origIndexPosition;
								if (o.length > 0 && 0 !== e) {
									if (e > o[o.length - 1]) e -= o.length;
									else {
										var r = function(t, e, n) {
											var r, i;
											if (!Array.isArray(e)) throw Error("Get closest expects an array as second argument");
											return e.forEach(function(e, o) {
												var s = n(e, t);
												s >= 0 && (void 0 === i || s < i) && (i = s, r = o)
											}), r
										}(e, o, function(t, e) {
											return t - e
										});
										0 !== r && (e -= r)
									}
								}
								if (e !== +u) {
									var l = i[e];
									l && h && (void 0 !== n && l.properties[n] !== h.properties[n] || nX(h, l) && eL(a(T(h)), a(T(l))).features.length > 0 && (i[u] = io(h, l), o.push(t.properties.origIndexPosition), o.sort(function(t, e) {
										return t - e
									}), s.remove(t), i.splice(e, 1), h.properties.origIndexPosition = u, s.remove(h, function(t, e) {
										return t.properties.origIndexPosition === e.properties.origIndexPosition
									}), c = !0))
								}
							}), c) {
							if (!h) continue;
							h.properties.origIndexPosition = u, s.insert(h), u--
						}
					}
					return i.forEach(function(t) {
						delete t.properties.origIndexPosition, delete t.bbox
					}), r
				}, t.hexGrid = ia, t.mask = function(t, e) {
					var n, r, i, s, a, u = o(e && e.geometry.coordinates || [
							[
								[180, 90],
								[-180, 90],
								[-180, -90],
								[180, -90],
								[180, 90]
							]
						]),
						c = (n = [], r = [], F(t, function(t) {
							var e = t.geometry.coordinates,
								i = e[0],
								s = e.slice(1);
							n.push(o([i])), s.forEach(function(t) {
								r.push(o([t]))
							})
						}), [h(n), h(r)]),
						l = c[0],
						p = c[1];
					return i = l = iu(l), s = p = iu(p), (a = []).push(u.geometry.coordinates[0]), F(i, function(t) {
						a.push(t.geometry.coordinates[0])
					}), F(s, function(t) {
						a.push(t.geometry.coordinates[0])
					}), o(a)
				}, t.squareGrid = ic, t.triangleGrid = il, t.interpolate = function(t, e, n) {
					if ("object" != typeof(n = n || {})) throw Error("options is invalid");
					var r = n.gridType,
						i = n.property,
						o = n.weight;
					if (!t) throw Error("points is required");
					if (W(t, "Point", "input must contain Points"), !e) throw Error("cellSize is required");
					if (void 0 !== o && "number" != typeof o) throw Error("weight must be a number");
					i = i || "elevation", r = r || "square", o = o || 1;
					var s, a = j(t);
					switch (r) {
						case "point":
						case "points":
							s = e0(a, e, n);
							break;
						case "square":
						case "squares":
							s = ic(a, e, n);
							break;
						case "hex":
						case "hexes":
							s = ia(a, e, n);
							break;
						case "triangle":
						case "triangles":
							s = il(a, e, n);
							break;
						default:
							throw Error("invalid gridType")
					}
					var u = [];
					return O(s, function(e) {
						var s = 0,
							a = 0;
						O(t, function(t) {
							var u, h = tR("point" === r ? e : t3(e), t, n);
							if (void 0 !== i && (u = t.properties[i]), void 0 === u && (u = t.geometry.coordinates[2]), void 0 === u) throw Error("zValue is missing");
							0 === h && (s = u);
							var c = 1 / Math.pow(h, o);
							a += c, s += c * u
						});
						var h = tT(e);
						h.properties[i] = s / a, u.push(h)
					}), h(u)
				}, t.pointOnSurface = ej, t.polygonToLineString = ne, t.lineStringToPolygon = nr, t.inside = tC, t.within = tM, t.bezier = tJ, t.nearest = el, t.pointOnLine = eO, t.lineDistance = eW, t.radians2degrees = v, t.degrees2radians = x, t.distanceToDegrees = _, t.distanceToRadians = y, t.radiansToDistance = d, t.bearingToAngle = m, t.convertDistance = E, t.toMercator = eA, t.toWgs84 = eF, t.randomPosition = rh, t.randomPoint = rc, t.randomPolygon = rl, t.randomLineString = rp, t.getCluster = rg, t.clusterEach = rd, t.clusterReduce = ry, t.createBins = r_, t.applyFilter = rm, t.propertiesContainsFilter = rv, t.filterProperties = rx, t.earthRadius = id, t.factors = iy, t.unitsFactors = i_, t.areaFactors = im, t.feature = e, t.geometry = n, t.point = r, t.points = i, t.polygon = o, t.polygons = s, t.lineString = a, t.lineStrings = u, t.featureCollection = h, t.multiLineString = c, t.multiPoint = l, t.multiPolygon = p, t.geometryCollection = f, t.round = g, t.radiansToLength = d, t.lengthToRadians = y, t.lengthToDegrees = _, t.bearingToAzimuth = m, t.radiansToDegrees = v, t.degreesToRadians = x, t.convertLength = E, t.convertArea = b, t.isNumber = I, t.isObject = N, t.validateBBox = w, t.validateId = C, t.getCoord = X, t.getCoords = U, t.containsNumber = Y, t.geojsonType = V, t.featureOf = H, t.collectionOf = W, t.getGeom = J, t.getGeomType = Z, t.getType = K, t.coordEach = S, t.coordReduce = M, t.propEach = L, t.propReduce = P, t.featureEach = O, t.featureReduce = R, t.coordAll = T, t.geomEach = D, t.geomReduce = A, t.flattenEach = F, t.flattenReduce = q, t.segmentEach = G, t.segmentReduce = B, t.lineEach = k, t.lineReduce = z, Object.defineProperty(t, "__esModule", {
					value: !0
				})
			}(e)
		}
	}
]);

"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2788],{63372:function(e,r,t){var n=t(33156),o=t(39352),a=t(79007),i=t(61067),l=t(92535),w=t(60392),s=t(87297),u=t(95083),f=t(62896),c=t(79309),g=t(39360),p=t(67369),v=[null],d=(0,g.C5)(v,{nd:function(e,r){r[r.length-1].ndrefs.push(e.getAttribute("ref"))},tag:y}),h=(0,g.C5)(v,{node:function(e,r){var t=r[0],n=r[r.length-1],a=e.getAttribute("id"),i=[parseFloat(e.getAttribute("lon")),parseFloat(e.getAttribute("lat"))];n.nodes[a]=i;var w=(0,g.O)({tags:{}},m,e,r);if(!(0,c.xb)(w.tags)){var s=new l.Z(i);(0,p.fI)(s,!1,t);var u=new o.Z(s);u.setId(a),u.setProperties(w.tags,!0),n.features.push(u)}},way:function(e,r){var t=e.getAttribute("id"),n=(0,g.O)({id:t,ndrefs:[],tags:{}},d,e,r);r[r.length-1].ways.push(n)}}),b=function(e){function r(){e.call(this),this.dataProjection=(0,f.U2)("EPSG:4326")}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.readFeaturesFromNode=function(e,r){var t=this.getReadOptions(e,r);if("osm"==e.localName){for(var n=(0,g.O)({nodes:{},ways:[],features:[]},h,e,[t]),l=0;l<n.ways.length;l++){for(var s=n.ways[l],f=[],c=0,v=s.ndrefs.length;c<v;c++){var d=n.nodes[s.ndrefs[c]];(0,u.l7)(f,d)}var b=void 0;b=s.ndrefs[0]==s.ndrefs[s.ndrefs.length-1]?new w.ZP(f,a.Z.XY,[f.length]):new i.Z(f,a.Z.XY),(0,p.fI)(b,!1,t);var m=new o.Z(b);m.setId(s.id),m.setProperties(s.tags,!0),n.features.push(m)}if(n.features)return n.features}return[]},r}(s.Z),m=(0,g.C5)(v,{tag:y});function y(e,r){r[r.length-1].tags[e.getAttribute("k")]=e.getAttribute("v")}var k=b,x=t(96802),z=t(29123),M=t(93613),_=t(12008),O=t(96306),P=t(19665),S=t(80244),T=t(57356),j=t(86395),E=t(1005),G=null,F={amenity:{parking:new _.ZP({stroke:new O.Z({color:"rgba(170, 170, 170, 1.0)",width:1}),fill:new P.Z({color:"rgba(170, 170, 170, 0.3)"})})},building:{".*":new _.ZP({zIndex:100,stroke:new O.Z({color:"rgba(246, 99, 79, 1.0)",width:1}),fill:new P.Z({color:"rgba(246, 99, 79, 0.3)"})})},highway:{service:new _.ZP({stroke:new O.Z({color:"rgba(255, 255, 255, 1.0)",width:2})}),".*":new _.ZP({stroke:new O.Z({color:"rgba(255, 255, 255, 1.0)",width:3})})},landuse:{"forest|grass|allotments":new _.ZP({stroke:new O.Z({color:"rgba(140, 208, 95, 1.0)",width:1}),fill:new P.Z({color:"rgba(140, 208, 95, 0.3)"})})},natural:{tree:new _.ZP({image:new S.Z({radius:2,fill:new P.Z({color:"rgba(140, 208, 95, 1.0)"}),stroke:null})})}},H=new x.Z({format:new k,loader:function(e,r,t,n,o){var a=(0,f.$A)(e,t,"EPSG:4326"),i=new XMLHttpRequest;i.open("POST","https://overpass-api.de/api/interpreter"),i.addEventListener("load",(function(){var e=(new k).readFeatures(i.responseText,{featureProjection:G.getView().getProjection()});H.addFeatures(e),n(e)})),i.addEventListener("error",o);var l="(node("+a[1]+","+Math.max(a[0],-180)+","+a[3]+","+Math.min(a[2],180)+");rel(bn)->.foo;way(bn);node(w)->.foo;rel(bw););out meta;";i.send(l)},strategy:E.VW}),K=new T.Z({source:H,style:function(e){for(var r in F){var t=e.get(r);if(void 0!==t)for(var n in F[r])if(new RegExp(n).test(t))return F[r][n]}return null}}),R=new j.Z({source:new M.Z({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",maxZoom:20})});G=new n.Z({layers:[R,K],target:document.getElementById("map"),view:new z.ZP({center:[739218,5906096],maxZoom:19,zoom:17})})}},function(e){var r;r=63372,e(e.s=r)}]);
//# sourceMappingURL=vector-osm.js.map
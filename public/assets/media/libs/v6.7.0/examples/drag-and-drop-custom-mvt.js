"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2004],{2508:function(n,e,t){var o=t(39352),r=t(33156),c=t(29123),a=t(72442),i=t(85920),s=t(23775),u=t(72916),f=t(13990),m=t(63059),v=t(22338),d=t(98243),l=t(19987),p=t(96802),w=t(86395),b=t(57356),g=t(61430),C=document.getElementById("tileCoordZ"),h=document.getElementById("tileCoordX"),I=document.getElementById("tileCoordY"),k=function(n){function e(){n.call(this,{featureClass:o.Z})}return n&&(e.__proto__=n),e.prototype=Object.create(n&&n.prototype),e.prototype.constructor=e,e.prototype.readFeatures=function(e,t){return t.extent=(0,g.dl)().getTileCoordExtent([parseInt(C.value),parseInt(h.value),parseInt(I.value)]),n.prototype.readFeatures.call(this,e,t)},e}(s.Z),y=new a.Z({formatConstructors:[k,u.Z,f.Z,m.Z,v.ZP,d.Z]}),_=new r.Z({interactions:(0,i.ce)().extend([y]),layers:[new w.Z({source:new l.Z})],target:"map",view:new c.ZP({center:[0,0],zoom:2})});y.on("addfeatures",(function(n){var e=new p.Z({features:n.features});_.addLayer(new b.Z({source:e})),_.getView().fit(e.getExtent())}));var j=function(n){var e=[];if(_.forEachFeatureAtPixel(n,(function(n){e.push(n)})),e.length>0){var t,o,r=[];for(t=0,o=e.length;t<o;++t){var c=e[t].get("name")||e[t].get("_name")||e[t].get("layer");c&&r.push(c)}document.getElementById("info").innerHTML=r.join(", ")||"&nbsp"}else document.getElementById("info").innerHTML="&nbsp;"};_.on("pointermove",(function(n){if(!n.dragging){var e=_.getEventPixel(n.originalEvent);j(e)}})),_.on("click",(function(n){j(n.pixel)}));var z=document.getElementById("download");document.getElementById("download-mvt").addEventListener("click",(function(){!function(n,e){fetch(n).then((function(n){return n.blob()})).then((function(n){navigator.msSaveBlob?navigator.msSaveBlob(n,e):(z.href=URL.createObjectURL(n),z.download=e,z.click())}))}("https://basemaps.arcgis.com/v1/arcgis/rest/services/World_Basemap/VectorTileServer/tile/"+C.value+"/"+I.value+"/"+h.value+".pbf",C.value+"-"+h.value+"-"+I.value+".mvt")}))}},function(n){var e;e=2508,n(n.s=e)}]);
//# sourceMappingURL=drag-and-drop-custom-mvt.js.map
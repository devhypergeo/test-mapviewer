"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5674],{76753:function(o,t,n){var e,a=n(72442),c=n(33156),r=n(29123),i=n(72916),s=n(13990),l=n(63059),u=n(22338),d=n(98243),f=n(86395),p=n(57356),m=n(93613),g=n(96802),w=new c.Z({layers:[new f.Z({source:new m.Z({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",maxZoom:20})})],target:"map",view:new r.ZP({center:[0,0],zoom:2})}),k=document.getElementById("extractstyles");function v(){e&&w.removeInteraction(e),(e=new a.Z({formatConstructors:[i.Z,s.Z,l.Z,new u.ZP({extractStyles:k.checked}),d.Z]})).on("addfeatures",(function(o){var t=new g.Z({features:o.features});w.addLayer(new p.Z({source:t})),w.getView().fit(t.getExtent())})),w.addInteraction(e)}v(),k.addEventListener("change",v);var h=function(o){var t=[];if(w.forEachFeatureAtPixel(o,(function(o){t.push(o)})),t.length>0){var n,e,a=[];for(n=0,e=t.length;n<e;++n)a.push(t[n].get("name"));document.getElementById("info").innerHTML=a.join(", ")||"&nbsp"}else document.getElementById("info").innerHTML="&nbsp;"};w.on("pointermove",(function(o){if(!o.dragging){var t=w.getEventPixel(o.originalEvent);h(t)}})),w.on("click",(function(o){h(o.pixel)}));var y=document.getElementById("download");function j(o,t){fetch(o).then((function(o){return o.blob()})).then((function(o){navigator.msSaveBlob?navigator.msSaveBlob(o,t):(y.href=URL.createObjectURL(o),y.download=t,y.click())}))}document.getElementById("download-gpx").addEventListener("click",(function(){j("data/gpx/fells_loop.gpx","fells_loop.gpx")})),document.getElementById("download-geojson").addEventListener("click",(function(){j("data/geojson/roads-seoul.geojson","roads-seoul.geojson")})),document.getElementById("download-igc").addEventListener("click",(function(){j("data/igc/Ulrich-Prinz.igc","Ulrich-Prinz.igc")})),document.getElementById("download-kml").addEventListener("click",(function(){j("data/kml/states.kml","states.kml")})),document.getElementById("download-topojson").addEventListener("click",(function(){j("data/topojson/fr-departments.json","fr-departments.json")}))}},function(o){var t;t=76753,o(o.s=t)}]);
//# sourceMappingURL=drag-and-drop.js.map
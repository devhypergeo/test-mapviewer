"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6372],{65096:function(e,n,t){var o=t(33156),c=t(19987),i=t(54893),a=t(86395),r=t(29123),s=t(62896),p=t(22942),m=new a.Z({source:new c.Z}),l=new o.Z({layers:[m],target:"map",view:new r.ZP({center:[0,0],zoom:2})}),u=(0,s.mi)([16.3725,48.208889]),w=new i.Z({element:document.getElementById("popup")});l.addOverlay(w);var v=new i.Z({position:u,positioning:"center-center",element:document.getElementById("marker"),stopEvent:!1});l.addOverlay(v);var d=new i.Z({position:u,element:document.getElementById("vienna")});l.addOverlay(d),l.on("click",(function(e){var n=w.getElement(),t=e.coordinate,o=(0,p.V7)((0,s.bU)(t));$(n).popover("dispose"),w.setPosition(t),$(n).popover({container:n,placement:"top",animation:!1,html:!0,content:"<p>The location you clicked was:</p><code>"+o+"</code>"}),$(n).popover("show")}))}},function(e){var n;n=65096,e(e.s=n)}]);
//# sourceMappingURL=overlay.js.map
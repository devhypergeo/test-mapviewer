"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9750],{5523:function(t,i,e){var n=e(33156),s=e(29123),o=e(12008),c=e(19665),r=e(96306),h=e(80244),u=e(93767),f=e(5651),w=e(41225),a=e(79846),l=e(19987),v=e(96802),y=e(86395),g=e(57356),m=new y.Z({source:new l.Z}),p=new g.Z({source:new v.Z,style:new o.ZP({fill:new c.Z({color:"rgba(255, 255, 255, 0.2)"}),stroke:new r.Z({color:"#ffcc33",width:2}),image:new h.Z({radius:7,fill:new c.Z({color:"#ffcc33"})})})}),d=new n.Z({layers:[m,p],target:"map",view:new s.ZP({center:[-11e6,46e5],zoom:4})}),P={init:function(){this.select=new u.Z,d.addInteraction(this.select),this.modify=new f.Z({features:this.select.getFeatures()}),d.addInteraction(this.modify),this.setEvents()},setEvents:function(){var t=this.select.getFeatures();this.select.on("change:active",(function(){t.forEach((function(i){t.remove(i)}))}))},setActive:function(t){this.select.setActive(t),this.modify.setActive(t)}};P.init();var A=document.getElementById("options-form"),C={init:function(){d.addInteraction(this.Point),this.Point.setActive(!1),d.addInteraction(this.LineString),this.LineString.setActive(!1),d.addInteraction(this.Polygon),this.Polygon.setActive(!1),d.addInteraction(this.Circle),this.Circle.setActive(!1)},Point:new w.ZP({source:p.getSource(),type:"Point"}),LineString:new w.ZP({source:p.getSource(),type:"LineString"}),Polygon:new w.ZP({source:p.getSource(),type:"Polygon"}),Circle:new w.ZP({source:p.getSource(),type:"Circle"}),getActive:function(){return!!this.activeType&&this[this.activeType].getActive()},setActive:function(t){var i=A.elements["draw-type"].value;t?(this.activeType&&this[this.activeType].setActive(!1),this[i].setActive(!0),this.activeType=i):(this.activeType&&this[this.activeType].setActive(!1),this.activeType=null)}};C.init(),A.onchange=function(t){var i=t.target.getAttribute("name"),e=t.target.value;"draw-type"==i?C.getActive()&&C.setActive(!0):"interaction"==i&&("modify"==e?(C.setActive(!1),P.setActive(!0)):"draw"==e&&(C.setActive(!0),P.setActive(!1)))},C.setActive(!0),P.setActive(!1);var L=new a.Z({source:p.getSource()});d.addInteraction(L)}},function(t){var i;i=5523,t(t.s=i)}]);
//# sourceMappingURL=snap.js.map
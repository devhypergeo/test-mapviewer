"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[553],{48511:function(e,n,r){var t=r(23775),o=r(33156),i=r(85901),c=r(86395),s=r(98475),l=r(49360),w=r(29123),a=r(12008),f=r(19665),m=r(96306),u=r(96090),p=new a.ZP({fill:new f.Z({color:"rgba(255, 255, 255, 0.6)"}),stroke:new m.Z({color:"#319FD3",width:1}),text:new u.Z({font:"12px Calibri,sans-serif",fill:new f.Z({color:"#000"}),stroke:new m.Z({color:"#fff",width:3})})}),v=new s.Z({declutter:!0,source:new l.Z({maxZoom:15,format:new t.Z,url:"https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf"}),style:function(e){return p.getText().setText(e.get("name")),p}}),x=new c.Z({source:new i.Z({template:"z:{z} x:{x} y:{-y}",projection:v.getSource().getProjection(),tileGrid:v.getSource().getTileGrid(),zDirection:1})});new o.Z({layers:[v,x],target:"map",view:new w.ZP({center:[0,6e6],zoom:4})})}},function(e){var n;n=48511,e(e.s=n)}]);
//# sourceMappingURL=canvas-tiles-tms.js.map
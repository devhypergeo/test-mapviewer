"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8944],{33349:function(e,t,n){var r=n(33156),a=n(94707),o=n(86395),s=n(78068),i=n(29123),u=n(61994),h=n(75302),c=n(62896),p=new a.Z({code:"EPSG:21781",extent:[485869.5728,76443.1884,837076.5648,299941.7864],units:"m"});(0,c.Sx)(p),(0,c.zY)("EPSG:4326",p,(function(e){return[w(e[1],e[0]),f(e[1],e[0])]}),(function(e){return[d(e[0],e[1]),v(e[0],e[1])]}));var m=[42e4,3e4,9e5,35e4],l=[new o.Z({extent:m,source:new s.Z({url:"https://wms.geo.admin.ch/",crossOrigin:"anonymous",attributions:'© <a href="https://shop.swisstopo.admin.ch/en/products/maps/national/lk1000"target="_blank">Pixelmap 1:1000000 / geo.admin.ch</a>',params:{LAYERS:"ch.swisstopo.pixelkarte-farbe-pk1000.noscale",FORMAT:"image/jpeg"},serverType:"mapserver"})}),new o.Z({extent:m,source:new s.Z({url:"https://wms.geo.admin.ch/",crossOrigin:"anonymous",attributions:'© <a href="https://www.hydrodaten.admin.ch/en/notes-on-the-flood-alert-maps.html"target="_blank">Flood Alert / geo.admin.ch</a>',params:{LAYERS:"ch.bafu.hydroweb-warnkarte_national"},serverType:"mapserver"})})];new r.Z({controls:(0,u.ce)().extend([new h.Z({units:"metric"})]),layers:l,target:"map",view:new i.ZP({projection:p,center:(0,c.vs)([8.23,46.86],"EPSG:4326","EPSG:21781"),extent:m,zoom:2})});function w(e,t){e=M(e),t=M(t);var n=((e=g(e))-169028.66)/1e4,r=((t=g(t))-26782.5)/1e4;return 600072.37+211455.93*r-10938.51*r*n-.36*r*Math.pow(n,2)-44.54*Math.pow(r,3)}function f(e,t){e=M(e),t=M(t);var n=((e=g(e))-169028.66)/1e4,r=((t=g(t))-26782.5)/1e4;return 200147.07+308807.95*n+3745.25*Math.pow(r,2)+76.63*Math.pow(n,2)-194.56*Math.pow(r,2)*n+119.79*Math.pow(n,3)}function v(e,t){var n=(e-6e5)/1e6,r=(t-2e5)/1e6,a=16.9023892+3.238272*r-.270978*Math.pow(n,2)-.002528*Math.pow(r,2)-.0447*Math.pow(n,2)*r-.014*Math.pow(r,3);return a=100*a/36}function d(e,t){var n=(e-6e5)/1e6,r=(t-2e5)/1e6,a=2.6779094+4.728982*n+.791484*n*r+.1306*n*Math.pow(r,2)-.0436*Math.pow(n,3);return a=100*a/36}function M(e){var t=parseInt(e,10),n=parseInt(60*(e-t),10);return t+n/100+60*(60*(e-t)-n)/1e4}function g(e){var t=parseInt(e,10),n=parseInt(100*(e-t),10),r=100*(100*(e-t)-n),a=String(e).split(".");return 2==a.length&&2==a[1].length&&(n=Number(a[1]),r=0),r+60*n+3600*t}}},function(e){var t;t=33349,e(e.s=t)}]);
//# sourceMappingURL=wms-custom-proj.js.map
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4205],{44960:function(n,e,r){var a=r(33156),t=r(19987),o=r(86395),c=r(29123),u=r(215),f=new c.ZP({center:[0,0],zoom:2});new a.Z({layers:[new o.Z({source:new t.Z})],target:"map",view:f});function i(n){return document.getElementById(n)}var m=new GyroNorm;m.init().then((function(){m.start((function(n){var e=f.getCenter(),r=f.getResolution(),a=(0,u.Yr)(n.do.alpha),t=(0,u.Yr)(n.do.beta),o=(0,u.Yr)(n.do.gamma);i("alpha").innerText=a+" [rad]",i("beta").innerText=t+" [rad]",i("gamma").innerText=o+" [rad]",e[0]-=r*o*25,e[1]+=r*t*25,f.setCenter(e)}))}))}},function(n){var e;e=44960,n(n.s=e)}]);
//# sourceMappingURL=device-orientation.js.map
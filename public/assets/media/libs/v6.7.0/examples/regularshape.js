"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3995],{84266:function(e,a,n){for(var r=n(39352),s=n(33156),t=n(92535),i=n(57356),l=n(96802),o=n(29123),w=n(96306),g=n(19665),u=n(12008),d=n(87300),c=new w.Z({color:"black",width:2}),f=new g.Z({color:"red"}),h={square:new u.ZP({image:new d.Z({fill:f,stroke:c,points:4,radius:10,angle:Math.PI/4})}),rectangle:new u.ZP({image:new d.Z({fill:f,stroke:c,radius:10/Math.SQRT2,radius2:10,points:4,angle:0,scale:[1,.5]})}),triangle:new u.ZP({image:new d.Z({fill:f,stroke:c,points:3,radius:10,rotation:Math.PI/4,angle:0})}),star:new u.ZP({image:new d.Z({fill:f,stroke:c,points:5,radius:10,radius2:4,angle:0})}),cross:new u.ZP({image:new d.Z({fill:f,stroke:c,points:4,radius:10,radius2:0,angle:0})}),x:new u.ZP({image:new d.Z({fill:f,stroke:c,points:4,radius:10,radius2:0,angle:Math.PI/4})}),stacked:[new u.ZP({image:new d.Z({fill:f,stroke:c,points:4,radius:5,angle:Math.PI/4,displacement:[0,10]})}),new u.ZP({image:new d.Z({fill:f,stroke:c,points:4,radius:10,angle:Math.PI/4})})]},k=["x","cross","star","triangle","square","rectangle","stacked"],m=new Array(250),p=45e5,M=0;M<250;++M){var v=[2*p*Math.random()-p,2*p*Math.random()-p];m[M]=new r.Z(new t.Z(v)),m[M].setStyle(h[k[Math.floor(Math.random()*k.length)]])}var q=new l.Z({features:m}),x=new i.Z({source:q});new s.Z({layers:[x],target:"map",view:new o.ZP({center:[0,0],zoom:2})})}},function(e){var a;a=84266,e(e.s=a)}]);
//# sourceMappingURL=regularshape.js.map
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2725],{67469:function(t,e,n){var r=n(33156),i=n(96802),o=n(29123),s=n(93613),a=n(14106),u=n(92722),w=n(79007),h=n(61067),p=n(33796),f=n(14415),c=n(60392),g=n(39360),v=n(79309),l=n(85409),m=n(95083),d=n(62896),y=n(87349),P=n(67369),S=u.J+" http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd",M={MultiLineString:"lineStringMember",MultiCurve:"curveMember",MultiPolygon:"polygonMember",MultiSurface:"surfaceMember"},b=function(t){function e(e){var n=e||{};t.call(this,n),this.t=void 0!==n.surface&&n.surface,this.i=void 0!==n.curve&&n.curve,this.o=void 0===n.multiCurve||n.multiCurve,this.u=void 0===n.multiSurface||n.multiSurface,this.schemaLocation=n.schemaLocation?n.schemaLocation:S,this.hasZ=void 0!==n.hasZ&&n.hasZ}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.readMultiCurve=function(t,e){var n=(0,g.O)([],this.MULTICURVE_PARSERS,t,e,this);return n?new p.Z(n):void 0},e.prototype.readMultiSurface=function(t,e){var n=(0,g.O)([],this.MULTISURFACE_PARSERS,t,e,this);if(n)return new f.Z(n)},e.prototype.curveMemberParser=function(t,e){(0,g.T3)(this.CURVEMEMBER_PARSERS,t,e,this)},e.prototype.surfaceMemberParser=function(t,e){(0,g.T3)(this.SURFACEMEMBER_PARSERS,t,e,this)},e.prototype.readPatch=function(t,e){return(0,g.O)([null],this.PATCHES_PARSERS,t,e,this)},e.prototype.readSegment=function(t,e){return(0,g.O)([null],this.SEGMENTS_PARSERS,t,e,this)},e.prototype.readPolygonPatch=function(t,e){return(0,g.O)([null],this.FLAT_LINEAR_RINGS_PARSERS,t,e,this)},e.prototype.readLineStringSegment=function(t,e){return(0,g.O)([null],this.GEOMETRY_FLAT_COORDINATES_PARSERS,t,e,this)},e.prototype.interiorParser=function(t,e){var n=(0,g.O)(void 0,this.RING_PARSERS,t,e,this);n&&e[e.length-1].push(n)},e.prototype.exteriorParser=function(t,e){var n=(0,g.O)(void 0,this.RING_PARSERS,t,e,this);n&&(e[e.length-1][0]=n)},e.prototype.readSurface=function(t,e){var n=(0,g.O)([null],this.SURFACE_PARSERS,t,e,this);if(n&&n[0]){var r,i,o=n[0],s=[o.length];for(r=1,i=n.length;r<i;++r)(0,m.l7)(o,n[r]),s.push(o.length);return new c.ZP(o,w.Z.XYZ,s)}},e.prototype.readCurve=function(t,e){var n=(0,g.O)([null],this.CURVE_PARSERS,t,e,this);return n?new h.Z(n,w.Z.XYZ):void 0},e.prototype.readEnvelope=function(t,e){var n=(0,g.O)([null],this.ENVELOPE_PARSERS,t,e,this);return(0,l.T9)(n[1][0],n[1][1],n[2][0],n[2][1])},e.prototype.readFlatPos=function(t,e){for(var n,r=(0,g.Ve)(t,!1),i=/^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/,o=[];n=i.exec(r);)o.push(parseFloat(n[1])),r=r.substr(n[0].length);if(""===r){var s,a,u=e[0].srsName,w="enu";if(u)w=(0,d.U2)(u).getAxisOrientation();if("neu"===w)for(s=0,a=o.length;s<a;s+=3){var h=o[s],p=o[s+1];o[s]=p,o[s+1]=h}var f=o.length;if(2==f&&o.push(0),0!==f)return o}},e.prototype.readFlatPosList=function(t,e){var n=(0,g.Ve)(t,!1).replace(/^\s*|\s*$/g,""),r=e[0],i=r.srsName,o=r.srsDimension,s="enu";i&&(s=(0,d.U2)(i).getAxisOrientation());var a,u,w,h=n.split(/\s+/),p=2;t.getAttribute("srsDimension")?p=(0,y._E)(t.getAttribute("srsDimension")):t.getAttribute("dimension")?p=(0,y._E)(t.getAttribute("dimension")):t.parentNode.getAttribute("srsDimension")?p=(0,y._E)(t.parentNode.getAttribute("srsDimension")):o&&(p=(0,y._E)(o));for(var f=[],c=0,v=h.length;c<v;c+=p)a=parseFloat(h[c]),u=parseFloat(h[c+1]),w=3===p?parseFloat(h[c+2]):0,"en"===s.substr(0,2)?f.push(a,u,w):f.push(u,a,w);return f},e.prototype.p=function(t,e,n){var r=n[n.length-1],i=r.hasZ,o=i?"3":"2";t.setAttribute("srsDimension",o);var s=r.srsName,a="enu";s&&(a=(0,d.U2)(s).getAxisOrientation());var u,w=e.getCoordinates();(u="en"===a.substr(0,2)?w[0]+" "+w[1]:w[1]+" "+w[0],i)&&(u+=" "+(w[2]||0));(0,y.bZ)(t,u)},e.prototype.g=function(t,e,n){var r="enu";e&&(r=(0,d.U2)(e).getAxisOrientation());var i="en"===r.substr(0,2)?t[0]+" "+t[1]:t[1]+" "+t[0];n&&(i+=" "+(t[2]||0));return i},e.prototype.v=function(t,e,n){var r=n[n.length-1],i=r.hasZ,o=i?"3":"2";t.setAttribute("srsDimension",o);for(var s,a=r.srsName,u=e.getCoordinates(),w=u.length,h=new Array(w),p=0;p<w;++p)s=u[p],h[p]=this.g(s,a,i);(0,y.bZ)(t,h.join(" "))},e.prototype.writePoint=function(t,e,n){var r=n[n.length-1].srsName;r&&t.setAttribute("srsName",r);var i=(0,g.c)(t.namespaceURI,"pos");t.appendChild(i),this.p(i,e,n)},e.prototype.writeEnvelope=function(t,e,n){var r=n[n.length-1].srsName;r&&t.setAttribute("srsName",r);var i=[e[0]+" "+e[1],e[2]+" "+e[3]];(0,g.ZL)({node:t},this.ENVELOPE_SERIALIZERS,g.hg,i,n,["lowerCorner","upperCorner"],this)},e.prototype.writeLinearRing=function(t,e,n){var r=n[n.length-1].srsName;r&&t.setAttribute("srsName",r);var i=(0,g.c)(t.namespaceURI,"posList");t.appendChild(i),this.v(i,e,n)},e.prototype.l=function(t,e,n){var r=e[e.length-1],i=r.node,o=r.exteriorWritten;return void 0===o&&(r.exteriorWritten=!0),(0,g.c)(i.namespaceURI,void 0!==o?"interior":"exterior")},e.prototype.writeSurfaceOrPolygon=function(t,e,n){var r=n[n.length-1],i=r.hasZ,o=r.srsName;if("PolygonPatch"!==t.nodeName&&o&&t.setAttribute("srsName",o),"Polygon"===t.nodeName||"PolygonPatch"===t.nodeName){var s=e.getLinearRings();(0,g.ZL)({node:t,hasZ:i,srsName:o},this.RING_SERIALIZERS,this.l,s,n,void 0,this)}else if("Surface"===t.nodeName){var a=(0,g.c)(t.namespaceURI,"patches");t.appendChild(a),this.m(a,e,n)}},e.prototype.writeCurveOrLineString=function(t,e,n){var r=n[n.length-1].srsName;if("LineStringSegment"!==t.nodeName&&r&&t.setAttribute("srsName",r),"LineString"===t.nodeName||"LineStringSegment"===t.nodeName){var i=(0,g.c)(t.namespaceURI,"posList");t.appendChild(i),this.v(i,e,n)}else if("Curve"===t.nodeName){var o=(0,g.c)(t.namespaceURI,"segments");t.appendChild(o),this.P(o,e,n)}},e.prototype.writeMultiSurfaceOrPolygon=function(t,e,n){var r=n[n.length-1],i=r.hasZ,o=r.srsName,s=r.surface;o&&t.setAttribute("srsName",o);var a=e.getPolygons();(0,g.ZL)({node:t,hasZ:i,srsName:o,surface:s},this.SURFACEORPOLYGONMEMBER_SERIALIZERS,this.S,a,n,void 0,this)},e.prototype.writeMultiPoint=function(t,e,n){var r=n[n.length-1],i=r.srsName,o=r.hasZ;i&&t.setAttribute("srsName",i);var s=e.getPoints();(0,g.ZL)({node:t,hasZ:o,srsName:i},this.POINTMEMBER_SERIALIZERS,(0,g.G3)("pointMember"),s,n,void 0,this)},e.prototype.writeMultiCurveOrLineString=function(t,e,n){var r=n[n.length-1],i=r.hasZ,o=r.srsName,s=r.curve;o&&t.setAttribute("srsName",o);var a=e.getLineStrings();(0,g.ZL)({node:t,hasZ:i,srsName:o,curve:s},this.LINESTRINGORCURVEMEMBER_SERIALIZERS,this.S,a,n,void 0,this)},e.prototype.writeRing=function(t,e,n){var r=(0,g.c)(t.namespaceURI,"LinearRing");t.appendChild(r),this.writeLinearRing(r,e,n)},e.prototype.writeSurfaceOrPolygonMember=function(t,e,n){var r=this.M(e,n);r&&(t.appendChild(r),this.writeSurfaceOrPolygon(r,e,n))},e.prototype.writePointMember=function(t,e,n){var r=(0,g.c)(t.namespaceURI,"Point");t.appendChild(r),this.writePoint(r,e,n)},e.prototype.writeLineStringOrCurveMember=function(t,e,n){var r=this.M(e,n);r&&(t.appendChild(r),this.writeCurveOrLineString(r,e,n))},e.prototype.m=function(t,e,n){var r=(0,g.c)(t.namespaceURI,"PolygonPatch");t.appendChild(r),this.writeSurfaceOrPolygon(r,e,n)},e.prototype.P=function(t,e,n){var r=(0,g.c)(t.namespaceURI,"LineStringSegment");t.appendChild(r),this.writeCurveOrLineString(r,e,n)},e.prototype.writeGeometryElement=function(t,e,n){var r,i=n[n.length-1],o=(0,v.f0)({},i);o.node=t,r=Array.isArray(e)?(0,P.lj)(e,i):(0,P.fI)(e,!0,i),(0,g.ZL)(o,this.GEOMETRY_SERIALIZERS,this.M,[r],n,void 0,this)},e.prototype.writeFeatureElement=function(t,e,n){var r=e.getId();r&&t.setAttribute("fid",r);var i=n[n.length-1],o=i.featureNS,s=e.getGeometryName();i.serializers||(i.serializers={},i.serializers[o]={});var a=[],u=[];if(e.hasProperties()){var w=e.getProperties();for(var h in w){var p=w[h];null!==p&&(a.push(h),u.push(p),h==s||"function"==typeof p.getSimplifiedGeometry?h in i.serializers[o]||(i.serializers[o][h]=(0,g.A4)(this.writeGeometryElement,this)):h in i.serializers[o]||(i.serializers[o][h]=(0,g.A4)(y.bZ)))}}var f=(0,v.f0)({},i);f.node=t,(0,g.ZL)(f,i.serializers,(0,g.G3)(void 0,o),u,n,a)},e.prototype.N=function(t,e,n){var r=n[n.length-1],i=r.featureType,o=r.featureNS,s={};s[o]={},s[o][i]=(0,g.A4)(this.writeFeatureElement,this);var a=(0,v.f0)({},r);a.node=t,(0,g.ZL)(a,s,(0,g.G3)(i,o),e,n)},e.prototype.S=function(t,e,n){var r=e[e.length-1].node;return(0,g.c)(this.namespace,M[r.nodeName])},e.prototype.M=function(t,e,n){var r,i=e[e.length-1],o=i.multiSurface,s=i.surface,a=i.curve,u=i.multiCurve;return Array.isArray(t)?r="Envelope":"MultiPolygon"===(r=t.getType())&&!0===o?r="MultiSurface":"Polygon"===r&&!0===s?r="Surface":"LineString"===r&&!0===a?r="Curve":"MultiLineString"===r&&!0===u&&(r="MultiCurve"),(0,g.c)(this.namespace,r)},e.prototype.writeGeometryNode=function(t,e){e=this.adaptOptions(e);var n=(0,g.c)(this.namespace,"geom"),r={node:n,hasZ:this.hasZ,srsName:this.srsName,curve:this.i,surface:this.t,multiSurface:this.u,multiCurve:this.o};return e&&(0,v.f0)(r,e),this.writeGeometryElement(n,t,[r]),n},e.prototype.writeFeaturesNode=function(t,e){e=this.adaptOptions(e);var n=(0,g.c)(this.namespace,"featureMembers");n.setAttributeNS(g.fJ,"xsi:schemaLocation",this.schemaLocation);var r={srsName:this.srsName,hasZ:this.hasZ,curve:this.i,surface:this.t,multiSurface:this.u,multiCurve:this.o,featureNS:this.featureNS,featureType:this.featureType};return e&&(0,v.f0)(r,e),this.N(n,t,[r]),n},e}(u.Z);b.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS={"http://www.opengis.net/gml":{pos:(0,g.z)(b.prototype.readFlatPos),posList:(0,g.z)(b.prototype.readFlatPosList),coordinates:(0,g.z)(a.Z.prototype.readFlatCoordinates)}},b.prototype.FLAT_LINEAR_RINGS_PARSERS={"http://www.opengis.net/gml":{interior:b.prototype.interiorParser,exterior:b.prototype.exteriorParser}},b.prototype.GEOMETRY_PARSERS={"http://www.opengis.net/gml":{Point:(0,g.z)(u.Z.prototype.readPoint),MultiPoint:(0,g.z)(u.Z.prototype.readMultiPoint),LineString:(0,g.z)(u.Z.prototype.readLineString),MultiLineString:(0,g.z)(u.Z.prototype.readMultiLineString),LinearRing:(0,g.z)(u.Z.prototype.readLinearRing),Polygon:(0,g.z)(u.Z.prototype.readPolygon),MultiPolygon:(0,g.z)(u.Z.prototype.readMultiPolygon),Surface:(0,g.z)(b.prototype.readSurface),MultiSurface:(0,g.z)(b.prototype.readMultiSurface),Curve:(0,g.z)(b.prototype.readCurve),MultiCurve:(0,g.z)(b.prototype.readMultiCurve),Envelope:(0,g.z)(b.prototype.readEnvelope)}},b.prototype.MULTICURVE_PARSERS={"http://www.opengis.net/gml":{curveMember:(0,g.Ei)(b.prototype.curveMemberParser),curveMembers:(0,g.Ei)(b.prototype.curveMemberParser)}},b.prototype.MULTISURFACE_PARSERS={"http://www.opengis.net/gml":{surfaceMember:(0,g.Ei)(b.prototype.surfaceMemberParser),surfaceMembers:(0,g.Ei)(b.prototype.surfaceMemberParser)}},b.prototype.CURVEMEMBER_PARSERS={"http://www.opengis.net/gml":{LineString:(0,g.Ei)(u.Z.prototype.readLineString),Curve:(0,g.Ei)(b.prototype.readCurve)}},b.prototype.SURFACEMEMBER_PARSERS={"http://www.opengis.net/gml":{Polygon:(0,g.Ei)(u.Z.prototype.readPolygon),Surface:(0,g.Ei)(b.prototype.readSurface)}},b.prototype.SURFACE_PARSERS={"http://www.opengis.net/gml":{patches:(0,g.z)(b.prototype.readPatch)}},b.prototype.CURVE_PARSERS={"http://www.opengis.net/gml":{segments:(0,g.z)(b.prototype.readSegment)}},b.prototype.ENVELOPE_PARSERS={"http://www.opengis.net/gml":{lowerCorner:(0,g.Ei)(b.prototype.readFlatPosList),upperCorner:(0,g.Ei)(b.prototype.readFlatPosList)}},b.prototype.PATCHES_PARSERS={"http://www.opengis.net/gml":{PolygonPatch:(0,g.z)(b.prototype.readPolygonPatch)}},b.prototype.SEGMENTS_PARSERS={"http://www.opengis.net/gml":{LineStringSegment:(0,g.z)(b.prototype.readLineStringSegment)}},b.prototype.writeFeatures,b.prototype.RING_SERIALIZERS={"http://www.opengis.net/gml":{exterior:(0,g.A4)(b.prototype.writeRing),interior:(0,g.A4)(b.prototype.writeRing)}},b.prototype.ENVELOPE_SERIALIZERS={"http://www.opengis.net/gml":{lowerCorner:(0,g.A4)(y.bZ),upperCorner:(0,g.A4)(y.bZ)}},b.prototype.SURFACEORPOLYGONMEMBER_SERIALIZERS={"http://www.opengis.net/gml":{surfaceMember:(0,g.A4)(b.prototype.writeSurfaceOrPolygonMember),polygonMember:(0,g.A4)(b.prototype.writeSurfaceOrPolygonMember)}},b.prototype.POINTMEMBER_SERIALIZERS={"http://www.opengis.net/gml":{pointMember:(0,g.A4)(b.prototype.writePointMember)}},b.prototype.LINESTRINGORCURVEMEMBER_SERIALIZERS={"http://www.opengis.net/gml":{lineStringMember:(0,g.A4)(b.prototype.writeLineStringOrCurveMember),curveMember:(0,g.A4)(b.prototype.writeLineStringOrCurveMember)}},b.prototype.GEOMETRY_SERIALIZERS={"http://www.opengis.net/gml":{Curve:(0,g.A4)(b.prototype.writeCurveOrLineString),MultiCurve:(0,g.A4)(b.prototype.writeMultiCurveOrLineString),Point:(0,g.A4)(b.prototype.writePoint),MultiPoint:(0,g.A4)(b.prototype.writeMultiPoint),LineString:(0,g.A4)(b.prototype.writeCurveOrLineString),MultiLineString:(0,g.A4)(b.prototype.writeMultiCurveOrLineString),LinearRing:(0,g.A4)(b.prototype.writeLinearRing),Polygon:(0,g.A4)(b.prototype.writeSurfaceOrPolygon),MultiPolygon:(0,g.A4)(b.prototype.writeMultiSurfaceOrPolygon),Surface:(0,g.A4)(b.prototype.writeSurfaceOrPolygon),MultiSurface:(0,g.A4)(b.prototype.writeMultiSurfaceOrPolygon),Envelope:(0,g.A4)(b.prototype.writeEnvelope)}};var N=b,L=function(t){function e(e){var n=e||{};t.call(this,n),this.schemaLocation=n.schemaLocation?n.schemaLocation:this.namespace+" http://schemas.opengis.net/gml/3.2.1/gml.xsd"}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(N);L.prototype.namespace="http://www.opengis.net/gml/3.2",L.prototype.GEOMETRY_FLAT_COORDINATES_PARSERS={"http://www.opengis.net/gml/3.2":{pos:(0,g.z)(N.prototype.readFlatPos),posList:(0,g.z)(N.prototype.readFlatPosList),coordinates:(0,g.z)(a.Z.prototype.readFlatCoordinates)}},L.prototype.FLAT_LINEAR_RINGS_PARSERS={"http://www.opengis.net/gml/3.2":{interior:N.prototype.interiorParser,exterior:N.prototype.exteriorParser}},L.prototype.GEOMETRY_PARSERS={"http://www.opengis.net/gml/3.2":{Point:(0,g.z)(u.Z.prototype.readPoint),MultiPoint:(0,g.z)(u.Z.prototype.readMultiPoint),LineString:(0,g.z)(u.Z.prototype.readLineString),MultiLineString:(0,g.z)(u.Z.prototype.readMultiLineString),LinearRing:(0,g.z)(u.Z.prototype.readLinearRing),Polygon:(0,g.z)(u.Z.prototype.readPolygon),MultiPolygon:(0,g.z)(u.Z.prototype.readMultiPolygon),Surface:(0,g.z)(L.prototype.readSurface),MultiSurface:(0,g.z)(N.prototype.readMultiSurface),Curve:(0,g.z)(L.prototype.readCurve),MultiCurve:(0,g.z)(N.prototype.readMultiCurve),Envelope:(0,g.z)(L.prototype.readEnvelope)}},L.prototype.MULTICURVE_PARSERS={"http://www.opengis.net/gml/3.2":{curveMember:(0,g.Ei)(N.prototype.curveMemberParser),curveMembers:(0,g.Ei)(N.prototype.curveMemberParser)}},L.prototype.MULTISURFACE_PARSERS={"http://www.opengis.net/gml/3.2":{surfaceMember:(0,g.Ei)(N.prototype.surfaceMemberParser),surfaceMembers:(0,g.Ei)(N.prototype.surfaceMemberParser)}},L.prototype.CURVEMEMBER_PARSERS={"http://www.opengis.net/gml/3.2":{LineString:(0,g.Ei)(u.Z.prototype.readLineString),Curve:(0,g.Ei)(N.prototype.readCurve)}},L.prototype.SURFACEMEMBER_PARSERS={"http://www.opengis.net/gml/3.2":{Polygon:(0,g.Ei)(u.Z.prototype.readPolygon),Surface:(0,g.Ei)(N.prototype.readSurface)}},L.prototype.SURFACE_PARSERS={"http://www.opengis.net/gml/3.2":{patches:(0,g.z)(N.prototype.readPatch)}},L.prototype.CURVE_PARSERS={"http://www.opengis.net/gml/3.2":{segments:(0,g.z)(N.prototype.readSegment)}},L.prototype.ENVELOPE_PARSERS={"http://www.opengis.net/gml/3.2":{lowerCorner:(0,g.Ei)(N.prototype.readFlatPosList),upperCorner:(0,g.Ei)(N.prototype.readFlatPosList)}},L.prototype.PATCHES_PARSERS={"http://www.opengis.net/gml/3.2":{PolygonPatch:(0,g.z)(N.prototype.readPolygonPatch)}},L.prototype.SEGMENTS_PARSERS={"http://www.opengis.net/gml/3.2":{LineStringSegment:(0,g.z)(N.prototype.readLineStringSegment)}},L.prototype.MULTIPOINT_PARSERS={"http://www.opengis.net/gml/3.2":{pointMember:(0,g.Ei)(u.Z.prototype.pointMemberParser),pointMembers:(0,g.Ei)(u.Z.prototype.pointMemberParser)}},L.prototype.MULTILINESTRING_PARSERS={"http://www.opengis.net/gml/3.2":{lineStringMember:(0,g.Ei)(u.Z.prototype.lineStringMemberParser),lineStringMembers:(0,g.Ei)(u.Z.prototype.lineStringMemberParser)}},L.prototype.MULTIPOLYGON_PARSERS={"http://www.opengis.net/gml/3.2":{polygonMember:(0,g.Ei)(u.Z.prototype.polygonMemberParser),polygonMembers:(0,g.Ei)(u.Z.prototype.polygonMemberParser)}},L.prototype.POINTMEMBER_PARSERS={"http://www.opengis.net/gml/3.2":{Point:(0,g.Ei)(u.Z.prototype.readFlatCoordinatesFromNode)}},L.prototype.LINESTRINGMEMBER_PARSERS={"http://www.opengis.net/gml/3.2":{LineString:(0,g.Ei)(u.Z.prototype.readLineString)}},L.prototype.POLYGONMEMBER_PARSERS={"http://www.opengis.net/gml/3.2":{Polygon:(0,g.Ei)(u.Z.prototype.readPolygon)}},L.prototype.RING_PARSERS={"http://www.opengis.net/gml/3.2":{LinearRing:(0,g.z)(u.Z.prototype.readFlatLinearRing)}},L.prototype.RING_SERIALIZERS={"http://www.opengis.net/gml/3.2":{exterior:(0,g.A4)(N.prototype.writeRing),interior:(0,g.A4)(N.prototype.writeRing)}},L.prototype.ENVELOPE_SERIALIZERS={"http://www.opengis.net/gml/3.2":{lowerCorner:(0,g.A4)(y.bZ),upperCorner:(0,g.A4)(y.bZ)}},L.prototype.SURFACEORPOLYGONMEMBER_SERIALIZERS={"http://www.opengis.net/gml/3.2":{surfaceMember:(0,g.A4)(N.prototype.writeSurfaceOrPolygonMember),polygonMember:(0,g.A4)(N.prototype.writeSurfaceOrPolygonMember)}},L.prototype.POINTMEMBER_SERIALIZERS={"http://www.opengis.net/gml/3.2":{pointMember:(0,g.A4)(N.prototype.writePointMember)}},L.prototype.LINESTRINGORCURVEMEMBER_SERIALIZERS={"http://www.opengis.net/gml/3.2":{lineStringMember:(0,g.A4)(N.prototype.writeLineStringOrCurveMember),curveMember:(0,g.A4)(N.prototype.writeLineStringOrCurveMember)}},L.prototype.GEOMETRY_SERIALIZERS={"http://www.opengis.net/gml/3.2":{Curve:(0,g.A4)(N.prototype.writeCurveOrLineString),MultiCurve:(0,g.A4)(N.prototype.writeMultiCurveOrLineString),Point:(0,g.A4)(L.prototype.writePoint),MultiPoint:(0,g.A4)(N.prototype.writeMultiPoint),LineString:(0,g.A4)(N.prototype.writeCurveOrLineString),MultiLineString:(0,g.A4)(N.prototype.writeMultiCurveOrLineString),LinearRing:(0,g.A4)(N.prototype.writeLinearRing),Polygon:(0,g.A4)(N.prototype.writeSurfaceOrPolygon),MultiPolygon:(0,g.A4)(N.prototype.writeMultiSurfaceOrPolygon),Surface:(0,g.A4)(N.prototype.writeSurfaceOrPolygon),MultiSurface:(0,g.A4)(N.prototype.writeMultiSurfaceOrPolygon),Envelope:(0,g.A4)(N.prototype.writeEnvelope)}};var I=L,C=n(87297),x=function(t){this.L=t};x.prototype.getTagName=function(){return this.L};var T=x,O=n(97854),F=function(t){function e(e){t.call(this,"And",Array.prototype.slice.call(arguments))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(function(t){function e(e,n){t.call(this,e),this.conditions=n,(0,O.h)(this.conditions.length>=2,57)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(T)),D=function(t){function e(e,n,r){if(t.call(this,"BBOX"),this.geometryName=e,this.extent=n,4!==n.length)throw new Error("Expected an extent with four values ([minX, minY, maxX, maxY])");this.srsName=r}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(T),E=function(t){function e(e,n){t.call(this,e),this.propertyName=n}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(T),j=function(t){function e(e,n,r){t.call(this,"PropertyIsEqualTo",e,n,r)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(function(t){function e(e,n,r,i){t.call(this,e,n),this.expression=r,this.matchCase=i}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(E)),B=function(t){function e(e,n,r,i,o,s){t.call(this,"PropertyIsLike",e),this.pattern=n,this.wildCard=void 0!==r?r:"*",this.singleChar=void 0!==i?i:".",this.escapeChar=void 0!==o?o:"!",this.matchCase=s}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(E);function R(t){var e=[null].concat(Array.prototype.slice.call(arguments));return new(Function.prototype.bind.apply(F,e))}var A={"http://www.opengis.net/gml":{boundedBy:(0,g.Pr)(u.Z.prototype.readGeometryElement,"bounds")},"http://www.opengis.net/wfs/2.0":{member:(0,g.Ei)(u.Z.prototype.readFeaturesInternal)}},Z={"http://www.opengis.net/wfs":{totalInserted:(0,g.Pr)(y.$L),totalUpdated:(0,g.Pr)(y.$L),totalDeleted:(0,g.Pr)(y.$L)},"http://www.opengis.net/wfs/2.0":{totalInserted:(0,g.Pr)(y.$L),totalUpdated:(0,g.Pr)(y.$L),totalDeleted:(0,g.Pr)(y.$L)}},k={"http://www.opengis.net/wfs":{TransactionSummary:(0,g.Pr)(H,"transactionSummary"),InsertResults:(0,g.Pr)(et,"insertIds")},"http://www.opengis.net/wfs/2.0":{TransactionSummary:(0,g.Pr)(H,"transactionSummary"),InsertResults:(0,g.Pr)(et,"insertIds")}},q={"http://www.opengis.net/wfs":{PropertyName:(0,g.A4)(y.bZ)},"http://www.opengis.net/wfs/2.0":{PropertyName:(0,g.A4)(y.bZ)}},G={"http://www.opengis.net/wfs":{Insert:(0,g.A4)(nt),Update:(0,g.A4)(st),Delete:(0,g.A4)(ot),Property:(0,g.A4)(at),Native:(0,g.A4)(ut)},"http://www.opengis.net/wfs/2.0":{Insert:(0,g.A4)(nt),Update:(0,g.A4)(st),Delete:(0,g.A4)(ot),Property:(0,g.A4)(at),Native:(0,g.A4)(ut)}},X="feature",U="http://www.w3.org/2000/xmlns/",W={"2.0.0":"http://www.opengis.net/ogc/1.1","1.1.0":"http://www.opengis.net/ogc","1.0.0":"http://www.opengis.net/ogc"},_={"2.0.0":"http://www.opengis.net/wfs/2.0","1.1.0":"http://www.opengis.net/wfs","1.0.0":"http://www.opengis.net/wfs"},z={"2.0.0":"http://www.opengis.net/fes/2.0","1.1.0":"http://www.opengis.net/fes","1.0.0":"http://www.opengis.net/fes"},V={"2.0.0":"http://www.opengis.net/wfs/2.0 http://schemas.opengis.net/wfs/2.0/wfs.xsd","1.1.0":"http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd","1.0.0":"http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.0.0/wfs.xsd"},Q={"2.0.0":I,"1.1.0":N,"1.0.0":a.Z},K=function(t){function e(e){t.call(this);var n=e||{};this.I=n.version?n.version:"1.1.0",this.C=n.featureType,this.T=n.featureNS,this.F=n.gmlFormat?n.gmlFormat:new Q[this.I],this.D=n.schemaLocation?n.schemaLocation:V[this.I]}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getFeatureType=function(){return this.C},e.prototype.setFeatureType=function(t){this.C=t},e.prototype.readFeaturesFromNode=function(t,e){var n={node:t};(0,v.f0)(n,{featureType:this.C,featureNS:this.T}),(0,v.f0)(n,this.getReadOptions(t,e||{}));var r,i=[n];r="2.0.0"===this.I?A:this.F.FEATURE_COLLECTION_PARSERS;var o=(0,g.O)([],r,t,i,this.F);return o||(o=[]),o},e.prototype.readTransactionResponse=function(t){if(t){if("string"==typeof t){var e=(0,g.Qc)(t);return this.readTransactionResponseFromDocument(e)}return(0,g.qk)(t)?this.readTransactionResponseFromDocument(t):this.readTransactionResponseFromNode(t)}},e.prototype.readFeatureCollectionMetadata=function(t){if(t){if("string"==typeof t){var e=(0,g.Qc)(t);return this.readFeatureCollectionMetadataFromDocument(e)}return(0,g.qk)(t)?this.readFeatureCollectionMetadataFromDocument(t):this.readFeatureCollectionMetadataFromNode(t)}},e.prototype.readFeatureCollectionMetadataFromDocument=function(t){for(var e=t.firstChild;e;e=e.nextSibling)if(e.nodeType==Node.ELEMENT_NODE)return this.readFeatureCollectionMetadataFromNode(e)},e.prototype.readFeatureCollectionMetadataFromNode=function(t){var e={},n=(0,y._E)(t.getAttribute("numberOfFeatures"));return e.numberOfFeatures=n,(0,g.O)(e,A,t,[],this.F)},e.prototype.readTransactionResponseFromDocument=function(t){for(var e=t.firstChild;e;e=e.nextSibling)if(e.nodeType==Node.ELEMENT_NODE)return this.readTransactionResponseFromNode(e)},e.prototype.readTransactionResponseFromNode=function(t){return(0,g.O)({},k,t,[])},e.prototype.writeGetFeature=function(t){var e=this,n=(0,g.c)(_[this.I],"GetFeature");n.setAttribute("service","WFS"),n.setAttribute("version",this.I),t.handle&&n.setAttribute("handle",t.handle),t.outputFormat&&n.setAttribute("outputFormat",t.outputFormat),void 0!==t.maxFeatures&&n.setAttribute("maxFeatures",String(t.maxFeatures)),t.resultType&&n.setAttribute("resultType",t.resultType),void 0!==t.startIndex&&n.setAttribute("startIndex",String(t.startIndex)),void 0!==t.count&&n.setAttribute("count",String(t.count)),void 0!==t.viewParams&&n.setAttribute("viewParams",t.viewParams),n.setAttributeNS(g.fJ,"xsi:schemaLocation",this.D);var r={node:n};if((0,v.f0)(r,{version:this.I,srsName:t.srsName,featureNS:t.featureNS?t.featureNS:this.T,featurePrefix:t.featurePrefix,propertyNames:t.propertyNames?t.propertyNames:[]}),(0,O.h)(Array.isArray(t.featureTypes),11),"string"==typeof t.featureTypes[0]){var i=t.filter;t.bbox&&((0,O.h)(t.geometryName,12),i=this.combineBboxAndFilter(t.geometryName,t.bbox,t.srsName,i)),(0,v.f0)(r,{geometryName:t.geometryName,filter:i}),It(n,t.featureTypes,[r])}else t.featureTypes.forEach((function(i){var o=e.combineBboxAndFilter(i.geometryName,i.bbox,t.srsName,t.filter);(0,v.f0)(r,{geometryName:i.geometryName,filter:o}),It(n,[i.name],[r])}));return n},e.prototype.combineBboxAndFilter=function(t,e,n,r){var i=function(t,e,n){return new D(t,e,n)}(t,e,n);return r?R(r,i):i},e.prototype.writeTransaction=function(t,e,n,r){var i,o=[],s=r.version?r.version:this.I,a=(0,g.c)(_[s],"Transaction");a.setAttribute("service","WFS"),a.setAttribute("version",s),r&&(i=r.gmlOptions?r.gmlOptions:{},r.handle&&a.setAttribute("handle",r.handle)),a.setAttributeNS(g.fJ,"xsi:schemaLocation",V[s]);var u=function(t,e,n,r){var i,o=r.featurePrefix?r.featurePrefix:X;"1.0.0"===n?i=2:"1.1.0"===n?i=3:"2.0.0"===n&&(i=3.2);return(0,v.f0)({node:t},{version:n,featureNS:r.featureNS,featureType:r.featureType,featurePrefix:o,gmlVersion:i,hasZ:r.hasZ,srsName:r.srsName},e)}(a,i,s,r);return t&&Y("Insert",t,o,u),e&&Y("Update",e,o,u),n&&Y("Delete",n,o,u),r.nativeElements&&Y("Native",r.nativeElements,o,u),a},e.prototype.readProjectionFromDocument=function(t){for(var e=t.firstChild;e;e=e.nextSibling)if(e.nodeType==Node.ELEMENT_NODE)return this.readProjectionFromNode(e);return null},e.prototype.readProjectionFromNode=function(t){if(t.firstElementChild&&t.firstElementChild.firstElementChild)for(var e=(t=t.firstElementChild.firstElementChild).firstElementChild;e;e=e.nextElementSibling)if(0!==e.childNodes.length&&(1!==e.childNodes.length||3!==e.firstChild.nodeType)){var n=[{}];return this.F.readGeometryElement(e,n),(0,d.U2)(n.pop().srsName)}return null},e}(C.Z);function Y(t,e,n,r){(0,g.ZL)(r,G,(0,g.G3)(t),e,n)}function H(t,e){return(0,g.O)({},Z,t,e)}var $={"http://www.opengis.net/ogc":{FeatureId:(0,g.Ei)((function(t,e){return t.getAttribute("fid")}))},"http://www.opengis.net/ogc/1.1":{FeatureId:(0,g.Ei)((function(t,e){return t.getAttribute("fid")}))}};function J(t,e){(0,g.T3)($,t,e)}var tt={"http://www.opengis.net/wfs":{Feature:J},"http://www.opengis.net/wfs/2.0":{Feature:J}};function et(t,e){return(0,g.O)([],tt,t,e)}function nt(t,e,n){var r=n[n.length-1],i=r.featureType,o=r.featureNS,s=r.gmlVersion,u=(0,g.c)(o,i);t.appendChild(u),2===s?a.Z.prototype.writeFeatureElement(u,e,n):3===s?N.prototype.writeFeatureElement(u,e,n):I.prototype.writeFeatureElement(u,e,n)}function rt(t,e,n){var r=n[n.length-1].version,i=W[r],o=(0,g.c)(i,"Filter"),s=(0,g.c)(i,"FeatureId");o.appendChild(s),s.setAttribute("fid",e),t.appendChild(o)}function it(t,e){var n=(t=t||X)+":";return 0===e.indexOf(n)?e:n+e}function ot(t,e,n){var r=n[n.length-1];(0,O.h)(void 0!==e.getId(),26);var i=r.featureType,o=r.featurePrefix,s=r.featureNS,a=it(o,i);t.setAttribute("typeName",a),t.setAttributeNS(U,"xmlns:"+o,s);var u=e.getId();void 0!==u&&rt(t,u,n)}function st(t,e,n){var r=n[n.length-1];(0,O.h)(void 0!==e.getId(),27);var i=r.version,o=r.featureType,s=r.featurePrefix,a=r.featureNS,u=it(s,o),w=e.getGeometryName();t.setAttribute("typeName",u),t.setAttributeNS(U,"xmlns:"+s,a);var h=e.getId();if(void 0!==h){for(var p=e.getKeys(),f=[],c=0,v=p.length;c<v;c++){var l=e.get(p[c]);if(void 0!==l){var m=p[c];l&&"function"==typeof l.getSimplifiedGeometry&&(m=w),f.push({name:m,value:l})}}(0,g.ZL)({version:i,gmlVersion:r.gmlVersion,node:t,hasZ:r.hasZ,srsName:r.srsName},G,(0,g.G3)("Property"),f,n),rt(t,h,n)}}function at(t,e,n){var r=n[n.length-1],i=r.version,o=_[i],s=(0,g.c)(o,"Name"),u=r.gmlVersion;if(t.appendChild(s),(0,y.bZ)(s,e.name),void 0!==e.value&&null!==e.value){var w=(0,g.c)(o,"Value");t.appendChild(w),e.value&&"function"==typeof e.value.getSimplifiedGeometry?2===u?a.Z.prototype.writeGeometryElement(w,e.value,n):3===u?N.prototype.writeGeometryElement(w,e.value,n):I.prototype.writeGeometryElement(w,e.value,n):(0,y.bZ)(w,e.value)}}function ut(t,e,n){e.vendorId&&t.setAttribute("vendorId",e.vendorId),void 0!==e.safeToIgnore&&t.setAttribute("safeToIgnore",String(e.safeToIgnore)),void 0!==e.value&&(0,y.bZ)(t,e.value)}var wt={"http://www.opengis.net/wfs":{Query:(0,g.A4)(ht)},"http://www.opengis.net/wfs/2.0":{Query:(0,g.A4)(ht)},"http://www.opengis.net/ogc":{During:(0,g.A4)(vt),And:(0,g.A4)(lt),Or:(0,g.A4)(lt),Not:(0,g.A4)(mt),BBOX:(0,g.A4)(ft),Contains:(0,g.A4)(ct),Intersects:(0,g.A4)(ct),Within:(0,g.A4)(ct),DWithin:(0,g.A4)(gt),PropertyIsEqualTo:(0,g.A4)(dt),PropertyIsNotEqualTo:(0,g.A4)(dt),PropertyIsLessThan:(0,g.A4)(dt),PropertyIsLessThanOrEqualTo:(0,g.A4)(dt),PropertyIsGreaterThan:(0,g.A4)(dt),PropertyIsGreaterThanOrEqualTo:(0,g.A4)(dt),PropertyIsNull:(0,g.A4)(yt),PropertyIsBetween:(0,g.A4)(Pt),PropertyIsLike:(0,g.A4)(St)},"http://www.opengis.net/fes/2.0":{During:(0,g.A4)(vt),And:(0,g.A4)(lt),Or:(0,g.A4)(lt),Not:(0,g.A4)(mt),BBOX:(0,g.A4)(ft),Contains:(0,g.A4)(ct),Disjoint:(0,g.A4)(ct),Intersects:(0,g.A4)(ct),ResourceId:(0,g.A4)((function(t,e,n){t.setAttribute("rid",e.rid)})),Within:(0,g.A4)(ct),DWithin:(0,g.A4)(gt),PropertyIsEqualTo:(0,g.A4)(dt),PropertyIsNotEqualTo:(0,g.A4)(dt),PropertyIsLessThan:(0,g.A4)(dt),PropertyIsLessThanOrEqualTo:(0,g.A4)(dt),PropertyIsGreaterThan:(0,g.A4)(dt),PropertyIsGreaterThanOrEqualTo:(0,g.A4)(dt),PropertyIsNull:(0,g.A4)(yt),PropertyIsBetween:(0,g.A4)(Pt),PropertyIsLike:(0,g.A4)(St)}};function ht(t,e,n){var r,i,o=n[n.length-1],s=o.version,a=o.featurePrefix,u=o.featureNS,w=o.propertyNames,h=o.srsName;r=a?it(a,e):e,i="2.0.0"===s?"typeNames":"typeName",t.setAttribute(i,r),h&&t.setAttribute("srsName",h),u&&t.setAttributeNS(U,"xmlns:"+a,u);var p=(0,v.f0)({},o);p.node=t,(0,g.ZL)(p,q,(0,g.G3)("PropertyName"),w,n);var f=o.filter;if(f){var c=(0,g.c)(Ct(s),"Filter");t.appendChild(c),pt(c,f,n)}}function pt(t,e,n){var r=n[n.length-1],i={node:t};(0,v.f0)(i,{context:r}),(0,g.ZL)(i,wt,(0,g.G3)(e.getTagName()),[e],n)}function ft(t,e,n){var r=n[n.length-1],i=r.context.version;r.srsName=e.srsName;var o=Q[i];Nt(i,t,e.geometryName),o.prototype.writeGeometryElement(t,e.extent,n)}function ct(t,e,n){var r=n[n.length-1],i=r.context.version;r.srsName=e.srsName;var o=Q[i];Nt(i,t,e.geometryName),o.prototype.writeGeometryElement(t,e.geometry,n)}function gt(t,e,n){var r=n[n.length-1].context.version;ct(t,e,n);var i=(0,g.c)(Ct(r),"Distance");(0,y.bZ)(i,e.distance.toString()),"2.0.0"===r?i.setAttribute("uom",e.unit):i.setAttribute("units",e.unit),t.appendChild(i)}function vt(t,e,n){var r=n[n.length-1].context.version;Mt(z[r],"ValueReference",t,e.propertyName);var i=(0,g.c)(u.J,"TimePeriod");t.appendChild(i);var o=(0,g.c)(u.J,"begin");i.appendChild(o),Lt(o,e.begin);var s=(0,g.c)(u.J,"end");i.appendChild(s),Lt(s,e.end)}function lt(t,e,n){var r=n[n.length-1].context,i={node:t};(0,v.f0)(i,{context:r});for(var o=e.conditions,s=0,a=o.length;s<a;++s){var u=o[s];(0,g.ZL)(i,wt,(0,g.G3)(u.getTagName()),[u],n)}}function mt(t,e,n){var r=n[n.length-1].context,i={node:t};(0,v.f0)(i,{context:r});var o=e.condition;(0,g.ZL)(i,wt,(0,g.G3)(o.getTagName()),[o],n)}function dt(t,e,n){var r=n[n.length-1].context.version;void 0!==e.matchCase&&t.setAttribute("matchCase",e.matchCase.toString()),Nt(r,t,e.propertyName),bt(r,t,""+e.expression)}function yt(t,e,n){Nt(n[n.length-1].context.version,t,e.propertyName)}function Pt(t,e,n){var r=n[n.length-1].context.version,i=Ct(r);Nt(r,t,e.propertyName);var o=(0,g.c)(i,"LowerBoundary");t.appendChild(o),bt(r,o,""+e.lowerBoundary);var s=(0,g.c)(i,"UpperBoundary");t.appendChild(s),bt(r,s,""+e.upperBoundary)}function St(t,e,n){var r=n[n.length-1].context.version;t.setAttribute("wildCard",e.wildCard),t.setAttribute("singleChar",e.singleChar),t.setAttribute("escapeChar",e.escapeChar),void 0!==e.matchCase&&t.setAttribute("matchCase",e.matchCase.toString()),Nt(r,t,e.propertyName),bt(r,t,""+e.pattern)}function Mt(t,e,n,r){var i=(0,g.c)(t,e);(0,y.bZ)(i,r),n.appendChild(i)}function bt(t,e,n){Mt(Ct(t),"Literal",e,n)}function Nt(t,e,n){"2.0.0"===t?Mt(z[t],"ValueReference",e,n):Mt(W[t],"PropertyName",e,n)}function Lt(t,e){var n=(0,g.c)(u.J,"TimeInstant");t.appendChild(n);var r=(0,g.c)(u.J,"timePosition");n.appendChild(r),(0,y.bZ)(r,e)}function It(t,e,n){var r=n[n.length-1],i=(0,v.f0)({},r);i.node=t,(0,g.ZL)(i,wt,(0,g.G3)("Query"),e,n)}function Ct(t){return"2.0.0"===t?z[t]:W[t]}var xt,Tt,Ot,Ft,Dt,Et,jt=K,Bt=n(13990),Rt=n(12008),At=n(96306),Zt=n(57356),kt=n(86395),qt=new i.Z,Gt=new Zt.Z({source:qt,style:new Rt.ZP({stroke:new At.Z({color:"rgba(0, 0, 255, 1.0)",width:2})})}),Xt=new kt.Z({source:new s.Z({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",maxZoom:20})}),Ut=new r.Z({layers:[Xt,Gt],target:document.getElementById("map"),view:new o.ZP({center:[-8908887.277395891,5381918.072437216],maxZoom:19,zoom:12})}),Wt=(new jt).writeGetFeature({srsName:"EPSG:3857",featureNS:"http://openstreemap.org",featurePrefix:"osm",featureTypes:["water_areas"],outputFormat:"application/json",filter:R((xt="name",Tt="Mississippi*",new B(xt,Tt,Ot,Ft,Dt,Et)),function(t,e,n){return new j(t,e,n)}("waterway","riverbank"))});fetch("https://ahocevar.com/geoserver/wfs",{method:"POST",body:(new XMLSerializer).serializeToString(Wt)}).then((function(t){return t.json()})).then((function(t){var e=(new Bt.Z).readFeatures(t);qt.addFeatures(e),Ut.getView().fit(qt.getExtent())}))}},function(t){var e;e=67469,t(t.s=e)}]);
//# sourceMappingURL=vector-wfs-getfeature.js.map
import{r as g,u as so,c as Ze,a as me,o as nt,l as je,b as Mt,d as H,j as u,e as B,A as co,f as lo,g as qe,h as it,i as uo,k as mt,M as po,B as fo,F as Ue,m as vo,n as mo,t as _o,p as go,q as _t,s as ho,R as yo,v as gt,w as Oo,x as et,y as bo,z as wo,C as xo,D as at,E as Eo,S as Nt,G as Vt,_ as f,H as jo,I as Ro,J as To,L as Do,K as ko}from"./index-1842eda3.js";function tt(){return g.useState(null)}var ht=Object.prototype.hasOwnProperty;function yt(e,t,o){for(o of e.keys())if(Re(o,t))return o}function Re(e,t){var o,r,n;if(e===t)return!0;if(e&&t&&(o=e.constructor)===t.constructor){if(o===Date)return e.getTime()===t.getTime();if(o===RegExp)return e.toString()===t.toString();if(o===Array){if((r=e.length)===t.length)for(;r--&&Re(e[r],t[r]););return r===-1}if(o===Set){if(e.size!==t.size)return!1;for(r of e)if(n=r,n&&typeof n=="object"&&(n=yt(t,n),!n)||!t.has(n))return!1;return!0}if(o===Map){if(e.size!==t.size)return!1;for(r of e)if(n=r[0],n&&typeof n=="object"&&(n=yt(t,n),!n)||!Re(r[1],t.get(n)))return!1;return!0}if(o===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(o===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return r===-1}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return r===-1}if(!o||typeof e=="object"){r=0;for(o in e)if(ht.call(e,o)&&++r&&!ht.call(t,o)||!(o in t)||!Re(e[o],t[o]))return!1;return Object.keys(t).length===r}}return e!==e&&t!==t}function Ao(e){const t=so();return[e[0],g.useCallback(o=>{if(t())return e[1](o)},[t,e[1]])]}var S="top",W="bottom",U="right",C="left",st="auto",Le=[S,W,U,C],_e="start",ke="end",Lo="clippingParents",St="viewport",xe="popper",Po="reference",Ot=Le.reduce(function(e,t){return e.concat([t+"-"+_e,t+"-"+ke])},[]),Ct=[].concat(Le,[st]).reduce(function(e,t){return e.concat([t,t+"-"+_e,t+"-"+ke])},[]),Io="beforeRead",Mo="read",No="afterRead",Vo="beforeMain",So="main",Co="afterMain",$o="beforeWrite",Bo="write",Fo="afterWrite",Ho=[Io,Mo,No,Vo,So,Co,$o,Bo,Fo];function Y(e){return e.split("-")[0]}function F(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function le(e){var t=F(e).Element;return e instanceof t||e instanceof Element}function G(e){var t=F(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function ct(e){if(typeof ShadowRoot>"u")return!1;var t=F(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var ce=Math.max,ze=Math.min,ge=Math.round;function ot(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function $t(){return!/^((?!chrome|android).)*safari/i.test(ot())}function he(e,t,o){t===void 0&&(t=!1),o===void 0&&(o=!1);var r=e.getBoundingClientRect(),n=1,i=1;t&&G(e)&&(n=e.offsetWidth>0&&ge(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&ge(r.height)/e.offsetHeight||1);var l=le(e)?F(e):window,s=l.visualViewport,a=!$t()&&o,d=(r.left+(a&&s?s.offsetLeft:0))/n,c=(r.top+(a&&s?s.offsetTop:0))/i,m=r.width/n,h=r.height/i;return{width:m,height:h,top:c,right:d+m,bottom:c+h,left:d,x:d,y:c}}function lt(e){var t=he(e),o=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:r}}function Bt(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&ct(o)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ne(e){return e?(e.nodeName||"").toLowerCase():null}function ee(e){return F(e).getComputedStyle(e)}function Wo(e){return["table","td","th"].indexOf(ne(e))>=0}function ie(e){return((le(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ke(e){return ne(e)==="html"?e:e.assignedSlot||e.parentNode||(ct(e)?e.host:null)||ie(e)}function bt(e){return!G(e)||ee(e).position==="fixed"?null:e.offsetParent}function Uo(e){var t=/firefox/i.test(ot()),o=/Trident/i.test(ot());if(o&&G(e)){var r=ee(e);if(r.position==="fixed")return null}var n=Ke(e);for(ct(n)&&(n=n.host);G(n)&&["html","body"].indexOf(ne(n))<0;){var i=ee(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function Pe(e){for(var t=F(e),o=bt(e);o&&Wo(o)&&ee(o).position==="static";)o=bt(o);return o&&(ne(o)==="html"||ne(o)==="body"&&ee(o).position==="static")?t:o||Uo(e)||t}function dt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Te(e,t,o){return ce(e,ze(t,o))}function zo(e,t,o){var r=Te(e,t,o);return r>o?o:r}function Ft(){return{top:0,right:0,bottom:0,left:0}}function Ht(e){return Object.assign({},Ft(),e)}function Wt(e,t){return t.reduce(function(o,r){return o[r]=e,o},{})}var qo=function(t,o){return t=typeof t=="function"?t(Object.assign({},o.rects,{placement:o.placement})):t,Ht(typeof t!="number"?t:Wt(t,Le))};function Ko(e){var t,o=e.state,r=e.name,n=e.options,i=o.elements.arrow,l=o.modifiersData.popperOffsets,s=Y(o.placement),a=dt(s),d=[C,U].indexOf(s)>=0,c=d?"height":"width";if(!(!i||!l)){var m=qo(n.padding,o),h=lt(i),v=a==="y"?S:C,_=a==="y"?W:U,O=o.rects.reference[c]+o.rects.reference[a]-l[a]-o.rects.popper[c],p=l[a]-o.rects.reference[a],b=Pe(i),y=b?a==="y"?b.clientHeight||0:b.clientWidth||0:0,E=O/2-p/2,w=m[v],j=y-h[c]-m[_],x=y/2-h[c]/2+E,R=Te(w,x,j),L=a;o.modifiersData[r]=(t={},t[L]=R,t.centerOffset=R-x,t)}}function Xo(e){var t=e.state,o=e.options,r=o.element,n=r===void 0?"[data-popper-arrow]":r;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||Bt(t.elements.popper,n)&&(t.elements.arrow=n))}const Yo={name:"arrow",enabled:!0,phase:"main",fn:Ko,effect:Xo,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ye(e){return e.split("-")[1]}var Go={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Jo(e,t){var o=e.x,r=e.y,n=t.devicePixelRatio||1;return{x:ge(o*n)/n||0,y:ge(r*n)/n||0}}function wt(e){var t,o=e.popper,r=e.popperRect,n=e.placement,i=e.variation,l=e.offsets,s=e.position,a=e.gpuAcceleration,d=e.adaptive,c=e.roundOffsets,m=e.isFixed,h=l.x,v=h===void 0?0:h,_=l.y,O=_===void 0?0:_,p=typeof c=="function"?c({x:v,y:O}):{x:v,y:O};v=p.x,O=p.y;var b=l.hasOwnProperty("x"),y=l.hasOwnProperty("y"),E=C,w=S,j=window;if(d){var x=Pe(o),R="clientHeight",L="clientWidth";if(x===F(o)&&(x=ie(o),ee(x).position!=="static"&&s==="absolute"&&(R="scrollHeight",L="scrollWidth")),x=x,n===S||(n===C||n===U)&&i===ke){w=W;var P=m&&x===j&&j.visualViewport?j.visualViewport.height:x[R];O-=P-r.height,O*=a?1:-1}if(n===C||(n===S||n===W)&&i===ke){E=U;var D=m&&x===j&&j.visualViewport?j.visualViewport.width:x[L];v-=D-r.width,v*=a?1:-1}}var N=Object.assign({position:s},d&&Go),k=c===!0?Jo({x:v,y:O},F(o)):{x:v,y:O};if(v=k.x,O=k.y,a){var M;return Object.assign({},N,(M={},M[w]=y?"0":"",M[E]=b?"0":"",M.transform=(j.devicePixelRatio||1)<=1?"translate("+v+"px, "+O+"px)":"translate3d("+v+"px, "+O+"px, 0)",M))}return Object.assign({},N,(t={},t[w]=y?O+"px":"",t[E]=b?v+"px":"",t.transform="",t))}function Qo(e){var t=e.state,o=e.options,r=o.gpuAcceleration,n=r===void 0?!0:r,i=o.adaptive,l=i===void 0?!0:i,s=o.roundOffsets,a=s===void 0?!0:s,d={placement:Y(t.placement),variation:ye(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,wt(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,wt(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Zo={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Qo,data:{}};var $e={passive:!0};function er(e){var t=e.state,o=e.instance,r=e.options,n=r.scroll,i=n===void 0?!0:n,l=r.resize,s=l===void 0?!0:l,a=F(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&d.forEach(function(c){c.addEventListener("scroll",o.update,$e)}),s&&a.addEventListener("resize",o.update,$e),function(){i&&d.forEach(function(c){c.removeEventListener("scroll",o.update,$e)}),s&&a.removeEventListener("resize",o.update,$e)}}const tr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:er,data:{}};var or={left:"right",right:"left",bottom:"top",top:"bottom"};function He(e){return e.replace(/left|right|bottom|top/g,function(t){return or[t]})}var rr={start:"end",end:"start"};function xt(e){return e.replace(/start|end/g,function(t){return rr[t]})}function ut(e){var t=F(e),o=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:o,scrollTop:r}}function pt(e){return he(ie(e)).left+ut(e).scrollLeft}function nr(e,t){var o=F(e),r=ie(e),n=o.visualViewport,i=r.clientWidth,l=r.clientHeight,s=0,a=0;if(n){i=n.width,l=n.height;var d=$t();(d||!d&&t==="fixed")&&(s=n.offsetLeft,a=n.offsetTop)}return{width:i,height:l,x:s+pt(e),y:a}}function ir(e){var t,o=ie(e),r=ut(e),n=(t=e.ownerDocument)==null?void 0:t.body,i=ce(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),l=ce(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-r.scrollLeft+pt(e),a=-r.scrollTop;return ee(n||o).direction==="rtl"&&(s+=ce(o.clientWidth,n?n.clientWidth:0)-i),{width:i,height:l,x:s,y:a}}function ft(e){var t=ee(e),o=t.overflow,r=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function Ut(e){return["html","body","#document"].indexOf(ne(e))>=0?e.ownerDocument.body:G(e)&&ft(e)?e:Ut(Ke(e))}function De(e,t){var o;t===void 0&&(t=[]);var r=Ut(e),n=r===((o=e.ownerDocument)==null?void 0:o.body),i=F(r),l=n?[i].concat(i.visualViewport||[],ft(r)?r:[]):r,s=t.concat(l);return n?s:s.concat(De(Ke(l)))}function rt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ar(e,t){var o=he(e,!1,t==="fixed");return o.top=o.top+e.clientTop,o.left=o.left+e.clientLeft,o.bottom=o.top+e.clientHeight,o.right=o.left+e.clientWidth,o.width=e.clientWidth,o.height=e.clientHeight,o.x=o.left,o.y=o.top,o}function Et(e,t,o){return t===St?rt(nr(e,o)):le(t)?ar(t,o):rt(ir(ie(e)))}function sr(e){var t=De(Ke(e)),o=["absolute","fixed"].indexOf(ee(e).position)>=0,r=o&&G(e)?Pe(e):e;return le(r)?t.filter(function(n){return le(n)&&Bt(n,r)&&ne(n)!=="body"}):[]}function cr(e,t,o,r){var n=t==="clippingParents"?sr(e):[].concat(t),i=[].concat(n,[o]),l=i[0],s=i.reduce(function(a,d){var c=Et(e,d,r);return a.top=ce(c.top,a.top),a.right=ze(c.right,a.right),a.bottom=ze(c.bottom,a.bottom),a.left=ce(c.left,a.left),a},Et(e,l,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function zt(e){var t=e.reference,o=e.element,r=e.placement,n=r?Y(r):null,i=r?ye(r):null,l=t.x+t.width/2-o.width/2,s=t.y+t.height/2-o.height/2,a;switch(n){case S:a={x:l,y:t.y-o.height};break;case W:a={x:l,y:t.y+t.height};break;case U:a={x:t.x+t.width,y:s};break;case C:a={x:t.x-o.width,y:s};break;default:a={x:t.x,y:t.y}}var d=n?dt(n):null;if(d!=null){var c=d==="y"?"height":"width";switch(i){case _e:a[d]=a[d]-(t[c]/2-o[c]/2);break;case ke:a[d]=a[d]+(t[c]/2-o[c]/2);break}}return a}function Ae(e,t){t===void 0&&(t={});var o=t,r=o.placement,n=r===void 0?e.placement:r,i=o.strategy,l=i===void 0?e.strategy:i,s=o.boundary,a=s===void 0?Lo:s,d=o.rootBoundary,c=d===void 0?St:d,m=o.elementContext,h=m===void 0?xe:m,v=o.altBoundary,_=v===void 0?!1:v,O=o.padding,p=O===void 0?0:O,b=Ht(typeof p!="number"?p:Wt(p,Le)),y=h===xe?Po:xe,E=e.rects.popper,w=e.elements[_?y:h],j=cr(le(w)?w:w.contextElement||ie(e.elements.popper),a,c,l),x=he(e.elements.reference),R=zt({reference:x,element:E,strategy:"absolute",placement:n}),L=rt(Object.assign({},E,R)),P=h===xe?L:x,D={top:j.top-P.top+b.top,bottom:P.bottom-j.bottom+b.bottom,left:j.left-P.left+b.left,right:P.right-j.right+b.right},N=e.modifiersData.offset;if(h===xe&&N){var k=N[n];Object.keys(D).forEach(function(M){var A=[U,W].indexOf(M)>=0?1:-1,I=[S,W].indexOf(M)>=0?"y":"x";D[M]+=k[I]*A})}return D}function lr(e,t){t===void 0&&(t={});var o=t,r=o.placement,n=o.boundary,i=o.rootBoundary,l=o.padding,s=o.flipVariations,a=o.allowedAutoPlacements,d=a===void 0?Ct:a,c=ye(r),m=c?s?Ot:Ot.filter(function(_){return ye(_)===c}):Le,h=m.filter(function(_){return d.indexOf(_)>=0});h.length===0&&(h=m);var v=h.reduce(function(_,O){return _[O]=Ae(e,{placement:O,boundary:n,rootBoundary:i,padding:l})[Y(O)],_},{});return Object.keys(v).sort(function(_,O){return v[_]-v[O]})}function dr(e){if(Y(e)===st)return[];var t=He(e);return[xt(e),t,xt(t)]}function ur(e){var t=e.state,o=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var n=o.mainAxis,i=n===void 0?!0:n,l=o.altAxis,s=l===void 0?!0:l,a=o.fallbackPlacements,d=o.padding,c=o.boundary,m=o.rootBoundary,h=o.altBoundary,v=o.flipVariations,_=v===void 0?!0:v,O=o.allowedAutoPlacements,p=t.options.placement,b=Y(p),y=b===p,E=a||(y||!_?[He(p)]:dr(p)),w=[p].concat(E).reduce(function(oe,X){return oe.concat(Y(X)===st?lr(t,{placement:X,boundary:c,rootBoundary:m,padding:d,flipVariations:_,allowedAutoPlacements:O}):X)},[]),j=t.rects.reference,x=t.rects.popper,R=new Map,L=!0,P=w[0],D=0;D<w.length;D++){var N=w[D],k=Y(N),M=ye(N)===_e,A=[S,W].indexOf(k)>=0,I=A?"width":"height",V=Ae(t,{placement:N,boundary:c,rootBoundary:m,altBoundary:h,padding:d}),$=A?M?U:C:M?W:S;j[I]>x[I]&&($=He($));var de=He($),q=[];if(i&&q.push(V[k]<=0),s&&q.push(V[$]<=0,V[de]<=0),q.every(function(oe){return oe})){P=N,L=!1;break}R.set(N,q)}if(L)for(var te=_?3:1,ae=function(X){var re=w.find(function(ue){var J=R.get(ue);if(J)return J.slice(0,X).every(function(pe){return pe})});if(re)return P=re,"break"},z=te;z>0;z--){var K=ae(z);if(K==="break")break}t.placement!==P&&(t.modifiersData[r]._skip=!0,t.placement=P,t.reset=!0)}}const pr={name:"flip",enabled:!0,phase:"main",fn:ur,requiresIfExists:["offset"],data:{_skip:!1}};function jt(e,t,o){return o===void 0&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function Rt(e){return[S,U,W,C].some(function(t){return e[t]>=0})}function fr(e){var t=e.state,o=e.name,r=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,l=Ae(t,{elementContext:"reference"}),s=Ae(t,{altBoundary:!0}),a=jt(l,r),d=jt(s,n,i),c=Rt(a),m=Rt(d);t.modifiersData[o]={referenceClippingOffsets:a,popperEscapeOffsets:d,isReferenceHidden:c,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":m})}const vr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:fr};function mr(e,t,o){var r=Y(e),n=[C,S].indexOf(r)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},t,{placement:e})):o,l=i[0],s=i[1];return l=l||0,s=(s||0)*n,[C,U].indexOf(r)>=0?{x:s,y:l}:{x:l,y:s}}function _r(e){var t=e.state,o=e.options,r=e.name,n=o.offset,i=n===void 0?[0,0]:n,l=Ct.reduce(function(c,m){return c[m]=mr(m,t.rects,i),c},{}),s=l[t.placement],a=s.x,d=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=d),t.modifiersData[r]=l}const gr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:_r};function hr(e){var t=e.state,o=e.name;t.modifiersData[o]=zt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const yr={name:"popperOffsets",enabled:!0,phase:"read",fn:hr,data:{}};function Or(e){return e==="x"?"y":"x"}function br(e){var t=e.state,o=e.options,r=e.name,n=o.mainAxis,i=n===void 0?!0:n,l=o.altAxis,s=l===void 0?!1:l,a=o.boundary,d=o.rootBoundary,c=o.altBoundary,m=o.padding,h=o.tether,v=h===void 0?!0:h,_=o.tetherOffset,O=_===void 0?0:_,p=Ae(t,{boundary:a,rootBoundary:d,padding:m,altBoundary:c}),b=Y(t.placement),y=ye(t.placement),E=!y,w=dt(b),j=Or(w),x=t.modifiersData.popperOffsets,R=t.rects.reference,L=t.rects.popper,P=typeof O=="function"?O(Object.assign({},t.rects,{placement:t.placement})):O,D=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),N=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,k={x:0,y:0};if(x){if(i){var M,A=w==="y"?S:C,I=w==="y"?W:U,V=w==="y"?"height":"width",$=x[w],de=$+p[A],q=$-p[I],te=v?-L[V]/2:0,ae=y===_e?R[V]:L[V],z=y===_e?-L[V]:-R[V],K=t.elements.arrow,oe=v&&K?lt(K):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Ft(),re=X[A],ue=X[I],J=Te(0,R[V],oe[V]),pe=E?R[V]/2-te-J-re-D.mainAxis:ae-J-re-D.mainAxis,Ie=E?-R[V]/2+te+J+ue+D.mainAxis:z+J+ue+D.mainAxis,se=t.elements.arrow&&Pe(t.elements.arrow),Xe=se?w==="y"?se.clientTop||0:se.clientLeft||0:0,Me=(M=N==null?void 0:N[w])!=null?M:0,Ne=$+pe-Me-Xe,Ye=$+Ie-Me,Ve=Te(v?ze(de,Ne):de,$,v?ce(q,Ye):q);x[w]=Ve,k[w]=Ve-$}if(s){var Se,Ge=w==="x"?S:C,Je=w==="x"?W:U,Q=x[j],fe=j==="y"?"height":"width",Ce=Q+p[Ge],Oe=Q-p[Je],be=[S,C].indexOf(b)!==-1,T=(Se=N==null?void 0:N[j])!=null?Se:0,Z=be?Ce:Q-R[fe]-L[fe]-T+D.altAxis,we=be?Q+R[fe]+L[fe]-T-D.altAxis:Oe,vt=v&&be?zo(Z,Q,we):Te(v?Z:Ce,Q,v?we:Oe);x[j]=vt,k[j]=vt-Q}t.modifiersData[r]=k}}const wr={name:"preventOverflow",enabled:!0,phase:"main",fn:br,requiresIfExists:["offset"]};function xr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Er(e){return e===F(e)||!G(e)?ut(e):xr(e)}function jr(e){var t=e.getBoundingClientRect(),o=ge(t.width)/e.offsetWidth||1,r=ge(t.height)/e.offsetHeight||1;return o!==1||r!==1}function Rr(e,t,o){o===void 0&&(o=!1);var r=G(t),n=G(t)&&jr(t),i=ie(t),l=he(e,n,o),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(r||!r&&!o)&&((ne(t)!=="body"||ft(i))&&(s=Er(t)),G(t)?(a=he(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):i&&(a.x=pt(i))),{x:l.left+s.scrollLeft-a.x,y:l.top+s.scrollTop-a.y,width:l.width,height:l.height}}function Tr(e){var t=new Map,o=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function n(i){o.add(i.name);var l=[].concat(i.requires||[],i.requiresIfExists||[]);l.forEach(function(s){if(!o.has(s)){var a=t.get(s);a&&n(a)}}),r.push(i)}return e.forEach(function(i){o.has(i.name)||n(i)}),r}function Dr(e){var t=Tr(e);return Ho.reduce(function(o,r){return o.concat(t.filter(function(n){return n.phase===r}))},[])}function kr(e){var t;return function(){return t||(t=new Promise(function(o){Promise.resolve().then(function(){t=void 0,o(e())})})),t}}function Ar(e){var t=e.reduce(function(o,r){var n=o[r.name];return o[r.name]=n?Object.assign({},n,r,{options:Object.assign({},n.options,r.options),data:Object.assign({},n.data,r.data)}):r,o},{});return Object.keys(t).map(function(o){return t[o]})}var Tt={placement:"bottom",modifiers:[],strategy:"absolute"};function Dt(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Lr(e){e===void 0&&(e={});var t=e,o=t.defaultModifiers,r=o===void 0?[]:o,n=t.defaultOptions,i=n===void 0?Tt:n;return function(s,a,d){d===void 0&&(d=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Tt,i),modifiersData:{},elements:{reference:s,popper:a},attributes:{},styles:{}},m=[],h=!1,v={state:c,setOptions:function(b){var y=typeof b=="function"?b(c.options):b;O(),c.options=Object.assign({},i,c.options,y),c.scrollParents={reference:le(s)?De(s):s.contextElement?De(s.contextElement):[],popper:De(a)};var E=Dr(Ar([].concat(r,c.options.modifiers)));return c.orderedModifiers=E.filter(function(w){return w.enabled}),_(),v.update()},forceUpdate:function(){if(!h){var b=c.elements,y=b.reference,E=b.popper;if(Dt(y,E)){c.rects={reference:Rr(y,Pe(E),c.options.strategy==="fixed"),popper:lt(E)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(D){return c.modifiersData[D.name]=Object.assign({},D.data)});for(var w=0;w<c.orderedModifiers.length;w++){if(c.reset===!0){c.reset=!1,w=-1;continue}var j=c.orderedModifiers[w],x=j.fn,R=j.options,L=R===void 0?{}:R,P=j.name;typeof x=="function"&&(c=x({state:c,options:L,name:P,instance:v})||c)}}}},update:kr(function(){return new Promise(function(p){v.forceUpdate(),p(c)})}),destroy:function(){O(),h=!0}};if(!Dt(s,a))return v;v.setOptions(d).then(function(p){!h&&d.onFirstUpdate&&d.onFirstUpdate(p)});function _(){c.orderedModifiers.forEach(function(p){var b=p.name,y=p.options,E=y===void 0?{}:y,w=p.effect;if(typeof w=="function"){var j=w({state:c,name:b,instance:v,options:E}),x=function(){};m.push(j||x)}})}function O(){m.forEach(function(p){return p()}),m=[]}return v}}const Pr=Lr({defaultModifiers:[vr,yr,Zo,tr,gr,pr,wr,Yo]}),Ir=["enabled","placement","strategy","modifiers"];function Mr(e,t){if(e==null)return{};var o={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(t.indexOf(n)>=0)&&(o[n]=e[n]);return o}const Nr={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},Vr={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:o}=e.elements;if("removeAttribute"in t){const r=(t.getAttribute("aria-describedby")||"").split(",").filter(n=>n.trim()!==o.id);r.length?t.setAttribute("aria-describedby",r.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:o,reference:r}=e.elements,n=(t=o.getAttribute("role"))==null?void 0:t.toLowerCase();if(o.id&&n==="tooltip"&&"setAttribute"in r){const i=r.getAttribute("aria-describedby");if(i&&i.split(",").indexOf(o.id)!==-1)return;r.setAttribute("aria-describedby",i?`${i},${o.id}`:o.id)}}},Sr=[];function Cr(e,t,o={}){let{enabled:r=!0,placement:n="bottom",strategy:i="absolute",modifiers:l=Sr}=o,s=Mr(o,Ir);const a=g.useRef(l),d=g.useRef(),c=g.useCallback(()=>{var p;(p=d.current)==null||p.update()},[]),m=g.useCallback(()=>{var p;(p=d.current)==null||p.forceUpdate()},[]),[h,v]=Ao(g.useState({placement:n,update:c,forceUpdate:m,attributes:{},styles:{popper:{},arrow:{}}})),_=g.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:p})=>{const b={},y={};Object.keys(p.elements).forEach(E=>{b[E]=p.styles[E],y[E]=p.attributes[E]}),v({state:p,styles:b,attributes:y,update:c,forceUpdate:m,placement:p.placement})}}),[c,m,v]),O=g.useMemo(()=>(Re(a.current,l)||(a.current=l),a.current),[l]);return g.useEffect(()=>{!d.current||!r||d.current.setOptions({placement:n,strategy:i,modifiers:[...O,_,Nr]})},[i,n,_,r,O]),g.useEffect(()=>{if(!(!r||e==null||t==null))return d.current=Pr(e,t,Object.assign({},s,{placement:n,strategy:i,modifiers:[...O,Vr,_]})),()=>{d.current!=null&&(d.current.destroy(),d.current=void 0,v(p=>Object.assign({},p,{attributes:{},styles:{popper:{}}})))}},[r,e,t]),h}const kt=()=>{};function $r(e){return e.button===0}function Br(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const We=e=>e&&("current"in e?e.current:e),At={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function Fr(e,t=kt,{disabled:o,clickTrigger:r="click"}={}){const n=g.useRef(!1),i=g.useRef(!1),l=g.useCallback(d=>{const c=We(e);n.current=!c||Br(d)||!$r(d)||!!Ze(c,d.target)||i.current,i.current=!1},[e]),s=me(d=>{const c=We(e);c&&Ze(c,d.target)&&(i.current=!0)}),a=me(d=>{n.current||t(d)});g.useEffect(()=>{var d,c;if(o||e==null)return;const m=nt(We(e)),h=m.defaultView||window;let v=(d=h.event)!=null?d:(c=h.parent)==null?void 0:c.event,_=null;At[r]&&(_=je(m,At[r],s,!0));const O=je(m,r,l,!0),p=je(m,r,y=>{if(y===v){v=void 0;return}a(y)});let b=[];return"ontouchstart"in m.documentElement&&(b=[].slice.call(m.body.children).map(y=>je(y,"mousemove",kt))),()=>{_==null||_(),O(),p(),b.forEach(y=>y())}},[e,o,r,l,s,a])}function Hr(e){const t={};return Array.isArray(e)?(e==null||e.forEach(o=>{t[o.name]=o}),t):e||t}function Wr(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}function Ur({enabled:e,enableEvents:t,placement:o,flip:r,offset:n,fixed:i,containerPadding:l,arrowElement:s,popperConfig:a={}}){var d,c,m,h,v;const _=Hr(a.modifiers);return Object.assign({},a,{placement:o,enabled:e,strategy:i?"fixed":a.strategy,modifiers:Wr(Object.assign({},_,{eventListeners:{enabled:t,options:(d=_.eventListeners)==null?void 0:d.options},preventOverflow:Object.assign({},_.preventOverflow,{options:l?Object.assign({padding:l},(c=_.preventOverflow)==null?void 0:c.options):(m=_.preventOverflow)==null?void 0:m.options}),offset:{options:Object.assign({offset:n},(h=_.offset)==null?void 0:h.options)},arrow:Object.assign({},_.arrow,{enabled:!!s,options:Object.assign({},(v=_.arrow)==null?void 0:v.options,{element:s})}),flip:Object.assign({enabled:!!r},_.flip)}))})}var Be;function Lt(e){if((!Be&&Be!==0||e)&&Mt){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),Be=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return Be}const qt=g.forwardRef(({className:e,bsPrefix:t,as:o="div",...r},n)=>(t=H(t,"modal-body"),u.jsx(o,{ref:n,className:B(e,t),...r})));qt.displayName="ModalBody";const zr=qt,Kt=g.forwardRef(({bsPrefix:e,className:t,contentClassName:o,centered:r,size:n,fullscreen:i,children:l,scrollable:s,...a},d)=>{e=H(e,"modal");const c=`${e}-dialog`,m=typeof i=="string"?`${e}-fullscreen-${i}`:`${e}-fullscreen`;return u.jsx("div",{...a,ref:d,className:B(c,t,n&&`${e}-${n}`,r&&`${c}-centered`,s&&`${c}-scrollable`,i&&m),children:u.jsx("div",{className:B(`${e}-content`,o),children:l})})});Kt.displayName="ModalDialog";const Xt=Kt,Yt=g.forwardRef(({className:e,bsPrefix:t,as:o="div",...r},n)=>(t=H(t,"modal-footer"),u.jsx(o,{ref:n,className:B(e,t),...r})));Yt.displayName="ModalFooter";const qr=Yt,Gt=g.forwardRef(({bsPrefix:e,className:t,closeLabel:o="Close",closeButton:r=!1,...n},i)=>(e=H(e,"modal-header"),u.jsx(co,{ref:i,...n,className:B(t,e),closeLabel:o,closeButton:r})));Gt.displayName="ModalHeader";const Kr=Gt,Xr=lo("h4"),Jt=g.forwardRef(({className:e,bsPrefix:t,as:o=Xr,...r},n)=>(t=H(t,"modal-title"),u.jsx(o,{ref:n,className:B(e,t),...r})));Jt.displayName="ModalTitle";const Yr=Jt;function Gr(e){return u.jsx(Ue,{...e,timeout:null})}function Jr(e){return u.jsx(Ue,{...e,timeout:null})}const Qt=g.forwardRef(({bsPrefix:e,className:t,style:o,dialogClassName:r,contentClassName:n,children:i,dialogAs:l=Xt,"aria-labelledby":s,"aria-describedby":a,"aria-label":d,show:c=!1,animation:m=!0,backdrop:h=!0,keyboard:v=!0,onEscapeKeyDown:_,onShow:O,onHide:p,container:b,autoFocus:y=!0,enforceFocus:E=!0,restoreFocus:w=!0,restoreFocusOptions:j,onEntered:x,onExit:R,onExiting:L,onEnter:P,onEntering:D,onExited:N,backdropClassName:k,manager:M,...A},I)=>{const[V,$]=g.useState({}),[de,q]=g.useState(!1),te=g.useRef(!1),ae=g.useRef(!1),z=g.useRef(null),[K,oe]=tt(),X=qe(I,oe),re=me(p),ue=it();e=H(e,"modal");const J=g.useMemo(()=>({onHide:re}),[re]);function pe(){return M||vo({isRTL:ue})}function Ie(T){if(!Mt)return;const Z=pe().getScrollbarWidth()>0,we=T.scrollHeight>nt(T).documentElement.clientHeight;$({paddingRight:Z&&!we?Lt():void 0,paddingLeft:!Z&&we?Lt():void 0})}const se=me(()=>{K&&Ie(K.dialog)});uo(()=>{mt(window,"resize",se),z.current==null||z.current()});const Xe=()=>{te.current=!0},Me=T=>{te.current&&K&&T.target===K.dialog&&(ae.current=!0),te.current=!1},Ne=()=>{q(!0),z.current=_o(K.dialog,()=>{q(!1)})},Ye=T=>{T.target===T.currentTarget&&Ne()},Ve=T=>{if(h==="static"){Ye(T);return}if(ae.current||T.target!==T.currentTarget){ae.current=!1;return}p==null||p()},Se=T=>{v?_==null||_(T):(T.preventDefault(),h==="static"&&Ne())},Ge=(T,Z)=>{T&&Ie(T),P==null||P(T,Z)},Je=T=>{z.current==null||z.current(),R==null||R(T)},Q=(T,Z)=>{D==null||D(T,Z),mo(window,"resize",se)},fe=T=>{T&&(T.style.display=""),N==null||N(T),mt(window,"resize",se)},Ce=g.useCallback(T=>u.jsx("div",{...T,className:B(`${e}-backdrop`,k,!m&&"show")}),[m,k,e]),Oe={...o,...V};Oe.display="block";const be=T=>u.jsx("div",{role:"dialog",...T,style:Oe,className:B(t,e,de&&`${e}-static`,!m&&"show"),onClick:h?Ve:void 0,onMouseUp:Me,"aria-label":d,"aria-labelledby":s,"aria-describedby":a,children:u.jsx(l,{...A,onMouseDown:Xe,className:r,contentClassName:n,children:i})});return u.jsx(po.Provider,{value:J,children:u.jsx(fo,{show:c,ref:X,backdrop:h,container:b,keyboard:!0,autoFocus:y,enforceFocus:E,restoreFocus:w,restoreFocusOptions:j,onEscapeKeyDown:Se,onShow:O,onHide:p,onEnter:Ge,onEntering:Q,onEntered:x,onExit:Je,onExiting:L,onExited:fe,manager:pe(),transition:m?Gr:void 0,backdropTransition:m?Jr:void 0,renderBackdrop:Ce,renderDialog:be})})});Qt.displayName="Modal";const Qr=Object.assign(Qt,{Body:zr,Header:Kr,Title:Yr,Footer:qr,Dialog:Xt,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150}),Zr=()=>{};function en(e,t,{disabled:o,clickTrigger:r}={}){const n=t||Zr;Fr(e,n,{disabled:o,clickTrigger:r});const i=me(l=>{go(l)&&n(l)});g.useEffect(()=>{if(o||e==null)return;const l=nt(We(e));let s=(l.defaultView||window).event;const a=je(l,"keyup",d=>{if(d===s){s=void 0;return}i(d)});return()=>{a()}},[e,o,i])}const Zt=g.forwardRef((e,t)=>{const{flip:o,offset:r,placement:n,containerPadding:i,popperConfig:l={},transition:s,runTransition:a}=e,[d,c]=tt(),[m,h]=tt(),v=qe(c,t),_=_t(e.container),O=_t(e.target),[p,b]=g.useState(!e.show),y=Cr(O,d,Ur({placement:n,enableEvents:!!e.show,containerPadding:i||5,flip:o,offset:r,arrowElement:m,popperConfig:l}));e.show&&p&&b(!1);const E=(...N)=>{b(!0),e.onExited&&e.onExited(...N)},w=e.show||!p;if(en(d,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!w)return null;const{onExit:j,onExiting:x,onEnter:R,onEntering:L,onEntered:P}=e;let D=e.children(Object.assign({},y.attributes.popper,{style:y.styles.popper,ref:v}),{popper:y,placement:n,show:!!e.show,arrowProps:Object.assign({},y.attributes.arrow,{style:y.styles.arrow,ref:h})});return D=ho(s,a,{in:!!e.show,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:D,onExit:j,onExiting:x,onExited:E,onEnter:R,onEntering:L,onEntered:P}),_?yo.createPortal(D,_):null});Zt.displayName="Overlay";const tn=Zt,eo=g.forwardRef(({className:e,bsPrefix:t,as:o="div",...r},n)=>(t=H(t,"popover-header"),u.jsx(o,{ref:n,className:B(e,t),...r})));eo.displayName="PopoverHeader";const on=eo,to=g.forwardRef(({className:e,bsPrefix:t,as:o="div",...r},n)=>(t=H(t,"popover-body"),u.jsx(o,{ref:n,className:B(e,t),...r})));to.displayName="PopoverBody";const oo=to;function ro(e,t){let o=e;return e==="left"?o=t?"end":"start":e==="right"&&(o=t?"start":"end"),o}function no(e="absolute"){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}}const rn=g.forwardRef(({bsPrefix:e,placement:t="right",className:o,style:r,children:n,body:i,arrowProps:l,hasDoneInitialMeasure:s,popper:a,show:d,...c},m)=>{const h=H(e,"popover"),v=it(),[_]=(t==null?void 0:t.split("-"))||[],O=ro(_,v);let p=r;return d&&!s&&(p={...r,...no(a==null?void 0:a.strategy)}),u.jsxs("div",{ref:m,role:"tooltip",style:p,"x-placement":_,className:B(o,h,_&&`bs-popover-${O}`),...c,children:[u.jsx("div",{className:"popover-arrow",...l}),i?u.jsx(oo,{children:n}):n]})}),nn=Object.assign(rn,{Header:on,Body:oo,POPPER_OFFSET:[0,8]}),io=g.forwardRef(({bsPrefix:e,placement:t="right",className:o,style:r,children:n,arrowProps:i,hasDoneInitialMeasure:l,popper:s,show:a,...d},c)=>{e=H(e,"tooltip");const m=it(),[h]=(t==null?void 0:t.split("-"))||[],v=ro(h,m);let _=r;return a&&!l&&(_={...r,...no(s==null?void 0:s.strategy)}),u.jsxs("div",{ref:c,style:_,role:"tooltip","x-placement":h,className:B(o,e,`bs-tooltip-${v}`),...d,children:[u.jsx("div",{className:"tooltip-arrow",...i}),u.jsx("div",{className:`${e}-inner`,children:n})]})});io.displayName="Tooltip";const ve=Object.assign(io,{TOOLTIP_OFFSET:[0,6]});function an(e){const t=g.useRef(null),o=H(void 0,"popover"),r=H(void 0,"tooltip"),n=g.useMemo(()=>({name:"offset",options:{offset:()=>{if(e)return e;if(t.current){if(gt(t.current,o))return nn.POPPER_OFFSET;if(gt(t.current,r))return ve.TOOLTIP_OFFSET}return[0,0]}}}),[e,o,r]);return[t,[n]]}function sn(e,t){const{ref:o}=e,{ref:r}=t;e.ref=o.__wrapped||(o.__wrapped=n=>o(et(n))),t.ref=r.__wrapped||(r.__wrapped=n=>r(et(n)))}const ao=g.forwardRef(({children:e,transition:t=Ue,popperConfig:o={},rootClose:r=!1,placement:n="top",show:i=!1,...l},s)=>{const a=g.useRef({}),[d,c]=g.useState(null),[m,h]=an(l.offset),v=qe(s,m),_=t===!0?Ue:t||void 0,O=me(p=>{c(p),o==null||o.onFirstUpdate==null||o.onFirstUpdate(p)});return Oo(()=>{d&&l.target&&(a.current.scheduleUpdate==null||a.current.scheduleUpdate())},[d,l.target]),g.useEffect(()=>{i||c(null)},[i]),u.jsx(tn,{...l,ref:v,popperConfig:{...o,modifiers:h.concat(o.modifiers||[]),onFirstUpdate:O},transition:_,rootClose:r,placement:n,show:i,children:(p,{arrowProps:b,popper:y,show:E})=>{var w,j;sn(p,b);const x=y==null?void 0:y.placement,R=Object.assign(a.current,{state:y==null?void 0:y.state,scheduleUpdate:y==null?void 0:y.update,placement:x,outOfBoundaries:(y==null||(w=y.state)==null||(j=w.modifiersData.hide)==null?void 0:j.isReferenceHidden)||!1,strategy:o.strategy}),L=!!d;return typeof e=="function"?e({...p,placement:x,show:E,...!t&&E&&{className:"show"},popper:R,arrowProps:b,hasDoneInitialMeasure:L}):g.cloneElement(e,{...p,placement:x,arrowProps:b,popper:R,hasDoneInitialMeasure:L,className:B(e.props.className,!t&&E&&"show"),style:{...e.props.style,...p.style}})}})});ao.displayName="Overlay";const cn=ao;function ln(e){return e&&typeof e=="object"?e:{show:e,hide:e}}function Pt(e,t,o){const[r]=t,n=r.currentTarget,i=r.relatedTarget||r.nativeEvent[o];(!i||i!==n)&&!Ze(n,i)&&e(...t)}bo.oneOf(["click","hover","focus"]);const dn=({trigger:e=["hover","focus"],overlay:t,children:o,popperConfig:r={},show:n,defaultShow:i=!1,onToggle:l,delay:s,placement:a,flip:d=a&&a.indexOf("auto")!==-1,...c})=>{const m=g.useRef(null),h=qe(m,o.ref),v=wo(),_=g.useRef(""),[O,p]=xo(n,i,l),b=ln(s),{onFocus:y,onBlur:E,onClick:w}=typeof o!="function"?g.Children.only(o).props:{},j=I=>{h(et(I))},x=g.useCallback(()=>{if(v.clear(),_.current="show",!b.show){p(!0);return}v.set(()=>{_.current==="show"&&p(!0)},b.show)},[b.show,p,v]),R=g.useCallback(()=>{if(v.clear(),_.current="hide",!b.hide){p(!1);return}v.set(()=>{_.current==="hide"&&p(!1)},b.hide)},[b.hide,p,v]),L=g.useCallback((...I)=>{x(),y==null||y(...I)},[x,y]),P=g.useCallback((...I)=>{R(),E==null||E(...I)},[R,E]),D=g.useCallback((...I)=>{p(!O),w==null||w(...I)},[w,p,O]),N=g.useCallback((...I)=>{Pt(x,I,"fromElement")},[x]),k=g.useCallback((...I)=>{Pt(R,I,"toElement")},[R]),M=e==null?[]:[].concat(e),A={ref:j};return M.indexOf("click")!==-1&&(A.onClick=D),M.indexOf("focus")!==-1&&(A.onFocus=L,A.onBlur=P),M.indexOf("hover")!==-1&&(A.onMouseOver=N,A.onMouseOut=k),u.jsxs(u.Fragment,{children:[typeof o=="function"?o(A):g.cloneElement(o,A),u.jsx(cn,{...c,show:O,onHide:R,flip:d,placement:a,popperConfig:r,target:m.current,children:t})]})},Ee=dn,un=at.main`
  padding: 3rem 15px;

  background-color: #f8f9fa;
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  display: ${e=>e.$visibility?"none":"block"};

  .apartment-detail {
    &__container {
      width: 100%;
      padding: 0;
      margin-right: auto;
      margin-left: auto;

      overflow-x: hidden;

      @media (min-width: 576px) {
        max-width: 540px;
      }

      @media (min-width: 768px) {
        max-width: 720px;
      }

      @media (min-width: 992px) {
        max-width: 960px;
      }

      @media (min-width: 1200px) {
        max-width: 1140px;
      }
    }

    &__content {
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
    }

    &__card-container {
      margin-bottom: 3rem;
      position: relative;
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;

      @media (min-width: 768px) {
        flex: 0 0 66.666667%;
        max-width: 66.666667%;
      }
    }

    &__booking-links-container {
      position: relative;
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;

      @media (min-width: 768px) {
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
      }
    }

    &__booking-links-heading {
      padding: 1rem;
      font-size: 2rem;
      margin-bottom: 0.5rem;
      font-weight: 500;
      line-height: 1.2;
    }

    &__booking-links {
      flex-direction: column;
      display: flex;
    }

    &__booking-link-container {
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    &__booking-link {
      color: #e6e6e6 !important;
      font-weight: 300 !important;
      display: block;
      width: 100%;
      padding: 0.5rem 1rem;
      font-size: 1.25rem;
      font-weight: 400 !important;
      line-height: 1.5;
      border-radius: 0.3rem;
      text-transform: capitalize;
      text-decoration: none;
      border: 1px solid transparent;
    }

    &__booking-link--booking {
      background-color: #003580 !important;
    }
    &__booking-link--airbnb {
      background-color: #ff5a5f !important;
    }
    &__booking-link--homeaway {
      background-color: #0067db !important;
    }
    &__booking-link--tripadvisor {
      background-color: #00af87 !important;
    }
  }
`,Fe=at(Eo)`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;

  & > img {
    width: 100%;
  }

  .detail-card {
    &__content {
      padding: 0;
      flex: 1 1 auto;
    }

    &__slider {
      margin-top: 0.25rem;
      margin-left: 0;
      margin-right: 0;
      overflow: auto;
      flex-wrap: nowrap;
      display: flex;
      position: relative;
    }

    &__spinner {
      position: absolute;
      left: 45%;
      top: 25%;
      padding: 10px 0;
    }

    &__link-container {
      margin-right: 0.25rem;
      display: inline-block;
    }

    &__link {
      text-decoration: none;
      background-color: transparent;
    }

    &__link-picture {
      height: 5rem;
      width: auto;
      vertical-align: middle;
      border-style: none;
    }

    &__thumbnail-container {
      margin-right: 0.25rem;
    }

    &__thumbnail {
      border: none;
      padding: 0;
      background-color: transparent !important;
      border-color: transparent !important;
      height: auto;
    }

    &__thumbnail-photo {
      height: 5rem;
      width: auto;
      background-color: transparent;
      border-color: transparent;
    }

    &__features-container {
      margin-bottom: 0;
      padding: 3rem 1rem;
    }

    &__title {
      text-transform: capitalize !important;
      padding-bottom: 1.5rem !important;
      border-bottom: 1px solid #dee2e6 !important;
      margin-bottom: 0.75rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 1.2;
    }

    &__description-container {
      padding-bottom: 1.5rem !important;
      padding-top: 1.5rem !important;
    }

    &__description {
      text-align: justify;
    }

    &__icons {
      padding: 0.25rem 0;
      display: flex;
      gap: 0.25rem;
    }
  }
`,Qe=at(Qr)`
  .detail-modal {
    &--hidden {
      display: none;
    }

    &__content {
      justify-content: center;
      align-items: center;
      display: flex;
      position: relative;
      flex: 1 1 auto;
      padding: 1rem;
    }

    &__loader-container {
      margin-top: 1.5rem;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
    }

    &__loader {
      color: #941c2f;
    }

    &__photo {
      width: 100%;
    }

    &__footer {
      border: none;
    }

    &__button {
      background-color: #941c2f;
      border: none;
      border-radius: 0.25rem;

      &:active {
        background-color: #941c2f;
      }
    }
  }

  .material-symbols-outlined {
    font-variation-settings:
      "FILL" 0,
      "wght" 400,
      "GRAD" 0,
      "opsz" 24;
  }
`,pn=({galleryImage:e,show:t,id:o,showModalId:r,handleCloseModal:n})=>{const[i,l]=g.useState(!0),s=()=>{l(!1)};return u.jsxs(Qe,{className:"detail-modal",show:o===r&&t,onHide:n,children:[u.jsxs(Qe.Body,{className:"detail-modal__content",children:[i&&u.jsx("div",{className:"detail-modal__loader-container",children:u.jsx(Nt,{animation:"border",className:"detail-modal__loader"})}),u.jsx("img",{src:e,alt:"modal",onLoad:s,className:"detail-modal__photo"})]}),u.jsx(Qe.Footer,{className:"detail-modal__footer",children:u.jsx(Vt,{onClick:n,className:"detail-modal__button",children:u.jsx("span",{className:"material-symbols-outlined",style:{backgroundColor:"rgb(148, 28, 47)",border:"none",display:"flex",justifyContent:"center",alignItems:"center"},children:"done"})})})]})},fn=Object.assign({"./Oceano/oce-1.jpeg":()=>f(()=>import("./oce-1-bd0753e0.js"),[]),"./Oceano/oce-10.jpeg":()=>f(()=>import("./oce-10-23f89152.js"),[]),"./Oceano/oce-11.jpeg":()=>f(()=>import("./oce-11-0a6ec238.js"),[]),"./Oceano/oce-12.jpeg":()=>f(()=>import("./oce-12-5423113f.js"),[]),"./Oceano/oce-13.jpeg":()=>f(()=>import("./oce-13-5226ee74.js"),[]),"./Oceano/oce-14.jpeg":()=>f(()=>import("./oce-14-7fd97d07.js"),[]),"./Oceano/oce-15.jpeg":()=>f(()=>import("./oce-15-403f23d5.js"),[]),"./Oceano/oce-16.jpeg":()=>f(()=>import("./oce-16-0dd0619d.js"),[]),"./Oceano/oce-17.jpeg":()=>f(()=>import("./oce-17-2e7b4d11.js"),[]),"./Oceano/oce-18.jpeg":()=>f(()=>import("./oce-18-6ee918a4.js"),[]),"./Oceano/oce-19.jpeg":()=>f(()=>import("./oce-19-12f392c9.js"),[]),"./Oceano/oce-2.jpeg":()=>f(()=>import("./oce-2-54d4cf51.js"),[]),"./Oceano/oce-20.jpeg":()=>f(()=>import("./oce-20-0c7f61f9.js"),[]),"./Oceano/oce-21.jpeg":()=>f(()=>import("./oce-21-31aea7fb.js"),[]),"./Oceano/oce-22.jpeg":()=>f(()=>import("./oce-22-53333972.js"),[]),"./Oceano/oce-23.jpeg":()=>f(()=>import("./oce-23-72ef6074.js"),[]),"./Oceano/oce-24.jpeg":()=>f(()=>import("./oce-24-b688458d.js"),[]),"./Oceano/oce-25.jpeg":()=>f(()=>import("./oce-25-b9140bc7.js"),[]),"./Oceano/oce-26.jpeg":()=>f(()=>import("./oce-26-e694c5da.js"),[]),"./Oceano/oce-27.jpeg":()=>f(()=>import("./oce-27-30801823.js"),[]),"./Oceano/oce-28.jpeg":()=>f(()=>import("./oce-28-d4ea88e3.js"),[]),"./Oceano/oce-29.jpeg":()=>f(()=>import("./oce-29-95daad1d.js"),[]),"./Oceano/oce-3.jpeg":()=>f(()=>import("./oce-3-4e90ff70.js"),[]),"./Oceano/oce-30.jpeg":()=>f(()=>import("./oce-30-689631a7.js"),[]),"./Oceano/oce-31.jpeg":()=>f(()=>import("./oce-31-b8e3b513.js"),[]),"./Oceano/oce-32.jpeg":()=>f(()=>import("./oce-32-998ca5a2.js"),[]),"./Oceano/oce-33.jpeg":()=>f(()=>import("./oce-33-0f3d3b0f.js"),[]),"./Oceano/oce-34.jpeg":()=>f(()=>import("./oce-34-e602cc9a.js"),[]),"./Oceano/oce-35.jpeg":()=>f(()=>import("./oce-35-25bfe9ed.js"),[]),"./Oceano/oce-36.jpeg":()=>f(()=>import("./oce-36-b4b88108.js"),[]),"./Oceano/oce-37.jpeg":()=>f(()=>import("./oce-37-3f5e90da.js"),[]),"./Oceano/oce-38.jpeg":()=>f(()=>import("./oce-38-b74ab536.js"),[]),"./Oceano/oce-39.jpeg":()=>f(()=>import("./oce-39-7060600e.js"),[]),"./Oceano/oce-4.jpeg":()=>f(()=>import("./oce-4-beabb7a8.js"),[]),"./Oceano/oce-5.jpeg":()=>f(()=>import("./oce-5-3448488e.js"),[]),"./Oceano/oce-6.jpeg":()=>f(()=>import("./oce-6-6ffe7b59.js"),[]),"./Oceano/oce-7.jpeg":()=>f(()=>import("./oce-7-f849ee3f.js"),[]),"./Oceano/oce-8.jpeg":()=>f(()=>import("./oce-8-ddf3f8e7.js"),[]),"./Oceano/oce-9.jpeg":()=>f(()=>import("./oce-9-3c03a6c3.js"),[])}),vn=Object.assign({"./Oceano/oce-1.jpeg":()=>f(()=>import("./oce-1-4a57cd72.js"),[]),"./Oceano/oce-10.jpeg":()=>f(()=>import("./oce-10-b75a7b04.js"),[]),"./Oceano/oce-11.jpeg":()=>f(()=>import("./oce-11-c1955895.js"),[]),"./Oceano/oce-12.jpeg":()=>f(()=>import("./oce-12-88db97dd.js"),[]),"./Oceano/oce-13.jpeg":()=>f(()=>import("./oce-13-297eb302.js"),[]),"./Oceano/oce-14.jpeg":()=>f(()=>import("./oce-14-60840b7a.js"),[]),"./Oceano/oce-15.jpeg":()=>f(()=>import("./oce-15-a98dd3d6.js"),[]),"./Oceano/oce-16.jpeg":()=>f(()=>import("./oce-16-5d451592.js"),[]),"./Oceano/oce-17.jpeg":()=>f(()=>import("./oce-17-92191afa.js"),[]),"./Oceano/oce-18.jpeg":()=>f(()=>import("./oce-18-ba37f356.js"),[]),"./Oceano/oce-19.jpeg":()=>f(()=>import("./oce-19-04ab419a.js"),[]),"./Oceano/oce-2.jpeg":()=>f(()=>import("./oce-2-6c6ab321.js"),[]),"./Oceano/oce-20.jpeg":()=>f(()=>import("./oce-20-1820e86c.js"),[]),"./Oceano/oce-21.jpeg":()=>f(()=>import("./oce-21-ccb831b8.js"),[]),"./Oceano/oce-22.jpeg":()=>f(()=>import("./oce-22-5cbd4ec6.js"),[]),"./Oceano/oce-23.jpeg":()=>f(()=>import("./oce-23-5004159f.js"),[]),"./Oceano/oce-24.jpeg":()=>f(()=>import("./oce-24-26df169e.js"),[]),"./Oceano/oce-25.jpeg":()=>f(()=>import("./oce-25-fd8570ce.js"),[]),"./Oceano/oce-26.jpeg":()=>f(()=>import("./oce-26-5d74ebcd.js"),[]),"./Oceano/oce-27.jpeg":()=>f(()=>import("./oce-27-e1df6539.js"),[]),"./Oceano/oce-28.jpeg":()=>f(()=>import("./oce-28-9c2e2b44.js"),[]),"./Oceano/oce-29.jpeg":()=>f(()=>import("./oce-29-ace7471c.js"),[]),"./Oceano/oce-3.jpeg":()=>f(()=>import("./oce-3-2265a765.js"),[]),"./Oceano/oce-30.jpeg":()=>f(()=>import("./oce-30-1df5f709.js"),[]),"./Oceano/oce-31.jpeg":()=>f(()=>import("./oce-31-ea88532d.js"),[]),"./Oceano/oce-32.jpeg":()=>f(()=>import("./oce-32-6b8b96d7.js"),[]),"./Oceano/oce-33.jpeg":()=>f(()=>import("./oce-33-9cd2faab.js"),[]),"./Oceano/oce-34.jpeg":()=>f(()=>import("./oce-34-58f2c792.js"),[]),"./Oceano/oce-35.jpeg":()=>f(()=>import("./oce-35-c3b69c54.js"),[]),"./Oceano/oce-36.jpeg":()=>f(()=>import("./oce-36-48f1c9e2.js"),[]),"./Oceano/oce-37.jpeg":()=>f(()=>import("./oce-37-309b4f98.js"),[]),"./Oceano/oce-38.jpeg":()=>f(()=>import("./oce-38-7baaa83a.js"),[]),"./Oceano/oce-39.jpeg":()=>f(()=>import("./oce-39-e5e6bb2a.js"),[]),"./Oceano/oce-4.jpeg":()=>f(()=>import("./oce-4-7d4a9bd7.js"),[]),"./Oceano/oce-5.jpeg":()=>f(()=>import("./oce-5-711cfba6.js"),[]),"./Oceano/oce-6.jpeg":()=>f(()=>import("./oce-6-bc5c2da6.js"),[]),"./Oceano/oce-7.jpeg":()=>f(()=>import("./oce-7-59c4e6d8.js"),[]),"./Oceano/oce-8.jpeg":()=>f(()=>import("./oce-8-eacf15d1.js"),[]),"./Oceano/oce-9.jpeg":()=>f(()=>import("./oce-9-aa9b58bf.js"),[])}),It=[{title:"Océano",thumbnails:fn,modals:vn}],mn=({detailId:e})=>{var j,x,R,L,P,D,N;const[t,o]=g.useState([]),[r,n]=g.useState([]),i=jo.find(k=>k.id===e),l=(j=It.find(k=>k.title===(i==null?void 0:i.title)))==null?void 0:j.thumbnails,s=(x=It.find(k=>k.title===(i==null?void 0:i.title)))==null?void 0:x.modals,[a,d]=g.useState(!1),[c,m]=g.useState(NaN),[h,v]=g.useState(!1),_=k=>{d(!0),m(k)},O=()=>{d(!1)};g.useEffect(()=>{const k=Object.entries(l).map(([A,I])=>I().then(V=>({path:A,module:V.default}))),M=Object.entries(s).map(([A,I])=>I().then(V=>({path:A,module:V.default})));Promise.all(k).then(A=>{o(A),v(!0)}).catch(A=>{}),Promise.all(M).then(A=>{n(A),v(!0)}).catch(A=>{})},[t,r,l,s]);const p=u.jsx(ve,{id:"kitchen-tooltip",className:"detail-card__tooltip",children:(R=i==null?void 0:i.services.kitchen)==null?void 0:R.tooltip}),b=u.jsx(ve,{id:"laundry-tooltip",className:"detail-card__tooltip",children:(L=i==null?void 0:i.services.laundry)==null?void 0:L.tooltip}),y=u.jsx(ve,{id:"pool-tooltip",className:"detail-card__tooltip",children:(P=i==null?void 0:i.services.pool)==null?void 0:P.tooltip}),E=u.jsx(ve,{id:"smoking-tooltip",className:"detail-card__tooltip",children:(D=i==null?void 0:i.services.smoking)==null?void 0:D.tooltip}),w=u.jsx(ve,{id:"wifi-tooltip",className:"detail-card__tooltip",children:(N=i==null?void 0:i.services.wifi)==null?void 0:N.tooltip});return u.jsx(u.Fragment,{children:h&&u.jsxs(Fe,{className:"detail-card",children:[u.jsx("img",{src:i==null?void 0:i.image.detail,alt:"",className:"detail-card__photo"}),u.jsxs(Fe.Body,{className:"detail-card__content",children:[u.jsxs("div",{className:"detail-card__slider",children:[!h&&u.jsx(Nt,{className:"detail-card__spinner"}),h&&(i==null?void 0:i.image.galleryIds.map(({id:k,imageModulePath:M})=>{var A,I;return u.jsxs("div",{className:"detail-card__thumbnail-container",children:[u.jsx(Vt,{type:"button",onClick:()=>_(k),className:"detail-card__thumbnail",children:u.jsx("img",{src:(A=t.find(V=>V.path===M))==null?void 0:A.module,alt:"thumbnail",className:"detail-card__thumbnail-photo"})}),u.jsx(pn,{galleryImage:(I=r.find(V=>V.path===M))==null?void 0:I.module,handleCloseModal:O,show:a,id:k,showModalId:c},k)]},k)}))]}),u.jsxs(Fe.Text,{as:"div",className:"detail-card__features-container",children:[u.jsx(Fe.Title,{className:"detail-card__title",children:i==null?void 0:i.title}),u.jsxs("div",{className:"detail-card__description-container",children:[u.jsx("h5",{children:"Description"}),u.jsx("p",{className:"detail-card__description",children:i==null?void 0:i.description.detail})]}),u.jsxs("div",{className:"detail-card__services",children:[u.jsx("h5",{children:"Services"}),u.jsxs("div",{className:"detail-card__icons",children:[(i==null?void 0:i.services.kitchen)&&u.jsx(Ee,{placement:"bottom",overlay:p,delay:0,children:u.jsx("span",{className:"material-symbols-outlined",children:i.services.kitchen.icon})}),(i==null?void 0:i.services.laundry)&&u.jsx(Ee,{placement:"bottom",overlay:b,children:u.jsx("span",{className:"material-symbols-outlined",children:i.services.laundry.icon})}),(i==null?void 0:i.services.pool)&&u.jsx(Ee,{placement:"bottom",overlay:y,children:u.jsx("span",{className:"material-symbols-outlined",children:i.services.pool.icon})}),(i==null?void 0:i.services.smoking)&&u.jsx(Ee,{placement:"bottom",overlay:E,children:u.jsx("span",{className:"material-symbols-outlined",children:i.services.smoking.icon})}),(i==null?void 0:i.services.wifi)&&u.jsx(Ee,{placement:"bottom",overlay:w,children:u.jsx("span",{className:"material-symbols-outlined",children:i.services.wifi.icon})})]})]})]})]})]})})},_n=({id:e,visibility:t})=>u.jsx(u.Fragment,{children:e&&u.jsx(un,{className:"apartment-detail",$visibility:t,children:u.jsx("div",{className:"apartment-detail__container",children:u.jsxs("article",{className:"apartment-detail__content",children:[u.jsx("div",{className:"apartment-detail__card-container",children:u.jsx(mn,{detailId:e})}),u.jsxs("aside",{className:"apartment-detail__booking-links-container",children:[u.jsx("span",{className:"apartment-detail__booking-links-heading",children:"Reservations"}),u.jsxs("div",{className:"apartment-detail__booking-links",children:[u.jsx("div",{className:"apartment-detail__booking-link-container",children:u.jsx("a",{href:"https://www.booking.com/hotel/es/alojamiento-alby-oceano.es.html?aid=D1258472",className:"apartment-detail__booking-link apartment-detail__booking-link--booking",children:"booking"})}),u.jsx("div",{className:"apartment-detail__booking-link-container",children:u.jsx("a",{href:"https://www.airbnb.es/rooms/35762364?s=67&shared_item_type=1&virality_entry_point=1",className:"apartment-detail__booking-link apartment-detail__booking-link--airbnb",children:"airbnb"})}),u.jsx("div",{className:"apartment-detail__booking-link-container",children:u.jsx("a",{href:"https://www.vrbo.com/es-es/p10400731?vgdc=HAES&preferlocale=true&noDates=true&utm_source=direct&utm_medium=social&utm_campaign=earned:homeaway:sharecopylink:ESP&utm_content=10400731",className:"apartment-detail__booking-link apartment-detail__booking-link--homeaway",children:"homeaway"})}),u.jsx("div",{className:"apartment-detail__booking-link-container",children:u.jsx("a",{href:"https://www.tripadvisor.es/VacationRentalReview-g659661-d17698053-Alojamiento_Alby_Oceano-Los_Cristianos_Arona_Tenerife_Canary_Islands.html",className:"apartment-detail__booking-link apartment-detail__booking-link--tripadvisor",children:"tripadvisor"})})]})]})]})})})}),gn=()=>{const e=Ro(),t=()=>{window.scrollTo(0,0)};return g.useEffect(()=>{t()},[e]),null},yn=()=>{const{apartmentId:e}=To(),t=Number(e),[o,r]=g.useState(!1);return g.useEffect(()=>{setTimeout(()=>{r(!0)},500)},[]),u.jsxs(u.Fragment,{children:[u.jsx(gn,{}),!o&&u.jsx(Do,{}),u.jsx(ko,{isVisible:!0}),u.jsx(_n,{id:t,visibility:!o})]})};export{yn as default};

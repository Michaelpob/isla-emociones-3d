(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Ai=[{id:"joy",name:"Alegria",displayName:"Isla de la Alegria",emoji:"🌈",subtitle:"Recolecta destellos de felicidad.",palette:{land:"#f6c85f",accent:"#ff8a3d",foliage:"#72c264",glow:"#ffd85a",ui:"#f59f00"},position:[-3.5,0,-3],radius:1.3,height:.4,minigame:"joy-stars"},{id:"sadness",name:"Tristeza",displayName:"Isla de la Tristeza",emoji:"🌧️",subtitle:"Recoge gotas de apoyo antes de que desaparezcan.",palette:{land:"#7db8d6",accent:"#4f7ba8",foliage:"#8cc6d1",glow:"#b7e4f5",ui:"#3178a8"},position:[0,0,-4.5],radius:1.25,height:.34,minigame:"support-rain"},{id:"anger",name:"Enojo",displayName:"Isla del Enojo",emoji:"🔥",subtitle:"Sigue el ritmo del circulo y respira para calmar el enojo.",palette:{land:"#e76856",accent:"#b92d32",foliage:"#ffb15c",glow:"#ff765f",ui:"#c0392b"},position:[3.5,0,-3],radius:1.4,height:.48,minigame:"guided-breathing"},{id:"fear",name:"Miedo",displayName:"Isla del Miedo",emoji:"🌑",subtitle:"Ilumina el camino y encuentra objetos ocultos.",palette:{land:"#6c5a94",accent:"#403a67",foliage:"#4fb0a1",glow:"#b6a7ff",ui:"#5947a5"},position:[-3.5,0,2],radius:1.3,height:.38,minigame:"darkness-light"},{id:"disgust",name:"Desagrado",displayName:"Isla del Desagrado",emoji:"💚",subtitle:"Separa lo positivo de lo negativo.",palette:{land:"#6ab86a",accent:"#3a8a3a",foliage:"#a8d86e",glow:"#8ce88c",ui:"#2e8b2e"},position:[0,0,3.5],radius:1.2,height:.36,minigame:"spirit-cleaning"},{id:"surprise",name:"Sorpresa",displayName:"Isla de la Sorpresa",emoji:"🎆",subtitle:"Atrapa las cajas sorpresa que aparecen.",palette:{land:"#e8a0d0",accent:"#c060a0",foliage:"#f3d45b",glow:"#ff7ad9",ui:"#b050a0"},position:[3.5,0,2],radius:1.18,height:.36,minigame:"surprise-boxes"}],Kl={"joy-stars":"Destellos en movimiento","support-rain":"Valle de las Nubes","valle-nubes":"Valle de las Nubes","volcano-control":"Control del Volcan","guided-breathing":"Respiracion Guiada","darkness-light":"Luz en la Oscuridad","spirit-cleaning":"Limpieza Espiritual","surprise-boxes":"Cajas Sorpresa","coming-soon":"Prototipo listo para ampliar"};const Ma="179",Jl=0,$a=1,Ql=2,sl=1,rl=2,ln=3,Tn=0,we=1,cn=2,dn=0,ui=1,Lr=2,ja=3,Za=4,tc=5,Fn=100,ec=101,nc=102,ic=103,sc=104,rc=200,ac=201,oc=202,lc=203,Dr=204,Ir=205,cc=206,hc=207,dc=208,uc=209,fc=210,pc=211,mc=212,gc=213,vc=214,Ur=0,Nr=1,Fr=2,mi=3,Or=4,Br=5,zr=6,kr=7,al=0,_c=1,xc=2,bn=0,ol=1,ll=2,cl=3,Sa=4,hl=5,dl=6,ul=7,fl=300,gi=301,vi=302,Hr=303,Gr=304,Hs=306,Vr=1e3,Bn=1001,Wr=1002,Ye=1003,yc=1004,es=1005,Ke=1006,Zs=1007,zn=1008,Qe=1009,pl=1010,ml=1011,zi=1012,Ea=1013,kn=1014,hn=1015,un=1016,ba=1017,Ta=1018,ki=1020,gl=35902,vl=1021,_l=1022,We=1023,Hi=1026,Gi=1027,xl=1028,wa=1029,yl=1030,Aa=1031,Ra=1033,Ps=33776,Ls=33777,Ds=33778,Is=33779,Xr=35840,qr=35841,Yr=35842,$r=35843,jr=36196,Zr=37492,Kr=37496,Jr=37808,Qr=37809,ta=37810,ea=37811,na=37812,ia=37813,sa=37814,ra=37815,aa=37816,oa=37817,la=37818,ca=37819,ha=37820,da=37821,Us=36492,ua=36494,fa=36495,Ml=36283,pa=36284,ma=36285,ga=36286,Mc=3200,Sc=3201,Sl=0,Ec=1,En="",Ue="srgb",_i="srgb-linear",Os="linear",Yt="srgb",qn=7680,Ka=519,bc=512,Tc=513,wc=514,El=515,Ac=516,Rc=517,Cc=518,Pc=519,va=35044,Ja="300 es",Je=2e3,Bs=2001;class Si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qa=1234567;const Oi=Math.PI/180,Vi=180/Math.PI;function fn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Ht(i,t,e){return Math.max(t,Math.min(e,i))}function Ca(i,t){return(i%t+t)%t}function Lc(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Dc(i,t,e){return i!==t?(e-i)/(t-i):0}function Bi(i,t,e){return(1-e)*i+e*t}function Ic(i,t,e,n){return Bi(i,t,1-Math.exp(-e*n))}function Uc(i,t=1){return t-Math.abs(Ca(i,t*2)-t)}function Nc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Fc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Oc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Bc(i,t){return i+Math.random()*(t-i)}function zc(i){return i*(.5-Math.random())}function kc(i){i!==void 0&&(Qa=i);let t=Qa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hc(i){return i*Oi}function Gc(i){return i*Vi}function Vc(i){return(i&i-1)===0&&i!==0}function Wc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qc(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),f=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ns={DEG2RAD:Oi,RAD2DEG:Vi,generateUUID:fn,clamp:Ht,euclideanModulo:Ca,mapLinear:Lc,inverseLerp:Dc,lerp:Bi,damp:Ic,pingpong:Uc,smoothstep:Nc,smootherstep:Fc,randInt:Oc,randFloat:Bc,randFloatSpread:zc,seededRandom:kc,degToRad:Hc,radToDeg:Gc,isPowerOfTwo:Vc,ceilPowerOfTwo:Wc,floorPowerOfTwo:Xc,setQuaternionFromProperEuler:qc,normalize:$t,denormalize:Ve};class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],S=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=S;return}if(d!==S||l!==f||c!==m||h!==g){let p=1-o;const u=l*f+c*m+h*g+d*S,b=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const A=Math.sqrt(E),R=Math.atan2(A,u*b);p=Math.sin(p*R)/A,o=Math.sin(o*R)/A}const y=o*b;if(l=l*p+f*y,c=c*p+m*y,h=h*p+g*y,d=d*p+S*y,p===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*m-c*f,t[e+1]=l*g+h*f+c*d-o*m,t[e+2]=c*g+h*m+o*f-l*d,t[e+3]=h*g-o*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(to.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(to.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ks.copy(this).projectOnVector(t),this.sub(Ks)}reflect(t){return this.sub(Ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new I,to=new qi;class Ft{constructor(t,e,n,s,r,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],S=s[0],p=s[3],u=s[6],b=s[1],E=s[4],y=s[7],A=s[2],R=s[5],C=s[8];return r[0]=a*S+o*b+l*A,r[3]=a*p+o*E+l*R,r[6]=a*u+o*y+l*C,r[1]=c*S+h*b+d*A,r[4]=c*p+h*E+d*R,r[7]=c*u+h*y+d*C,r[2]=f*S+m*b+g*A,r[5]=f*p+m*E+g*R,r[8]=f*u+m*y+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,m=c*r-a*l,g=e*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return t[0]=d*S,t[1]=(s*c-h*n)*S,t[2]=(o*n-s*a)*S,t[3]=f*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=m*S,t[7]=(n*l-c*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Js.makeScale(t,e)),this}rotate(t){return this.premultiply(Js.makeRotation(-t)),this}translate(t,e){return this.premultiply(Js.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new Ft;function bl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yc(){const i=zs("canvas");return i.style.display="block",i}const eo={};function fi(i){i in eo||(eo[i]=!0,console.warn(i))}function $c(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const no=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),io=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jc(){const i={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Yt&&(s.r=pn(s.r),s.g=pn(s.g),s.b=pn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Yt&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===En?Os:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_i]:{primaries:t,whitePoint:n,transfer:Os,toXYZ:no,fromXYZ:io,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:Yt,toXYZ:no,fromXYZ:io,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}const Vt=jc();function pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yn;class Zc{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Yn===void 0&&(Yn=zs("canvas")),Yn.width=t.width,Yn.height=t.height;const s=Yn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Yn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pn(e[n]/255)*255):e[n]=pn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Kc=0;class Pa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=fn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qs(s[a].image)):r.push(Qs(s[a]))}else r=Qs(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Qs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jc=0;const tr=new I;class Ae extends Si{constructor(t=Ae.DEFAULT_IMAGE,e=Ae.DEFAULT_MAPPING,n=Bn,s=Bn,r=Ke,a=zn,o=We,l=Qe,c=Ae.DEFAULT_ANISOTROPY,h=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=fn(),this.name="",this.source=new Pa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(tr).x}get height(){return this.source.getSize(tr).y}get depth(){return this.source.getSize(tr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vr:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case Wr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vr:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case Wr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=fl;Ae.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],S=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-S)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+S)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,y=(m+1)/2,A=(u+1)/2,R=(h+f)/4,C=(d+S)/4,L=(g+p)/4;return E>y&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=R/n,r=C/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=L/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=L/r),this.set(n,s,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(d-S)*(d-S)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-S)/b,this.z=(f-h)/b,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qc extends Si{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ae(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Pa(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $e extends Qc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Tl extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class th extends Ae{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ke):ke.fromBufferAttribute(r,a),ke.applyMatrix4(t.matrixWorld),this.expandByPoint(ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),is.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),is.copy(n.boundingBox)),is.applyMatrix4(t.matrixWorld),this.union(is)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ke),ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ri),ss.subVectors(this.max,Ri),$n.subVectors(t.a,Ri),jn.subVectors(t.b,Ri),Zn.subVectors(t.c,Ri),mn.subVectors(jn,$n),gn.subVectors(Zn,jn),Rn.subVectors($n,Zn);let e=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-Rn.z,Rn.y,mn.z,0,-mn.x,gn.z,0,-gn.x,Rn.z,0,-Rn.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-Rn.y,Rn.x,0];return!er(e,$n,jn,Zn,ss)||(e=[1,0,0,0,1,0,0,0,1],!er(e,$n,jn,Zn,ss))?!1:(rs.crossVectors(mn,gn),e=[rs.x,rs.y,rs.z],er(e,$n,jn,Zn,ss))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const nn=[new I,new I,new I,new I,new I,new I,new I,new I],ke=new I,is=new Yi,$n=new I,jn=new I,Zn=new I,mn=new I,gn=new I,Rn=new I,Ri=new I,ss=new I,rs=new I,Cn=new I;function er(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Cn.fromArray(i,r);const o=s.x*Math.abs(Cn.x)+s.y*Math.abs(Cn.y)+s.z*Math.abs(Cn.z),l=t.dot(Cn),c=e.dot(Cn),h=n.dot(Cn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const eh=new Yi,Ci=new I,nr=new I;class Gs{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):eh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ci.subVectors(t,this.center);const e=Ci.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ci,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ci.copy(t.center).add(nr)),this.expandByPoint(Ci.copy(t.center).sub(nr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const sn=new I,ir=new I,as=new I,vn=new I,sr=new I,os=new I,rr=new I;class La{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ir.copy(t).add(e).multiplyScalar(.5),as.copy(e).sub(t).normalize(),vn.copy(this.origin).sub(ir);const r=t.distanceTo(e)*.5,a=-this.direction.dot(as),o=vn.dot(this.direction),l=-vn.dot(as),c=vn.lengthSq(),h=Math.abs(1-a*a);let d,f,m,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const S=1/h;d*=S,f*=S,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ir).addScaledVector(as,f),m}intersectSphere(t,e){sn.subVectors(t.center,this.origin);const n=sn.dot(this.direction),s=sn.dot(sn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,n,s,r){sr.subVectors(e,t),os.subVectors(n,t),rr.crossVectors(sr,os);let a=this.direction.dot(rr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vn.subVectors(this.origin,t);const l=o*this.direction.dot(os.crossVectors(vn,os));if(l<0)return null;const c=o*this.direction.dot(sr.cross(vn));if(c<0||l+c>a)return null;const h=-o*vn.dot(rr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,a,o,l,c,h,d,f,m,g,S,p){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,f,m,g,S,p)}set(t,e,n,s,r,a,o,l,c,h,d,f,m,g,S,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=S,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Kn.setFromMatrixColumn(t,0).length(),r=1/Kn.setFromMatrixColumn(t,1).length(),a=1/Kn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*h,m=a*d,g=o*h,S=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=f-S*c,e[9]=-o*l,e[2]=S-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,m=l*d,g=c*h,S=c*d;e[0]=f+S*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=S+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,m=l*d,g=c*h,S=c*d;e[0]=f-S*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=S-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,m=a*d,g=o*h,S=o*d;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+S,e[1]=l*d,e[5]=S*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,g=o*l,S=o*c;e[0]=l*h,e[4]=S-f*d,e[8]=g*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+g,e[10]=f-S*d}else if(t.order==="XZY"){const f=a*l,m=a*c,g=o*l,S=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+S,e[5]=a*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=S*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nh,t,ih)}lookAt(t,e,n){const s=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),_n.crossVectors(n,De),_n.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),_n.crossVectors(n,De)),_n.normalize(),ls.crossVectors(De,_n),s[0]=_n.x,s[4]=ls.x,s[8]=De.x,s[1]=_n.y,s[5]=ls.y,s[9]=De.y,s[2]=_n.z,s[6]=ls.z,s[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],S=n[6],p=n[10],u=n[14],b=n[3],E=n[7],y=n[11],A=n[15],R=s[0],C=s[4],L=s[8],M=s[12],x=s[1],w=s[5],B=s[9],k=s[13],G=s[2],$=s[6],q=s[10],j=s[14],H=s[3],rt=s[7],ht=s[11],St=s[15];return r[0]=a*R+o*x+l*G+c*H,r[4]=a*C+o*w+l*$+c*rt,r[8]=a*L+o*B+l*q+c*ht,r[12]=a*M+o*k+l*j+c*St,r[1]=h*R+d*x+f*G+m*H,r[5]=h*C+d*w+f*$+m*rt,r[9]=h*L+d*B+f*q+m*ht,r[13]=h*M+d*k+f*j+m*St,r[2]=g*R+S*x+p*G+u*H,r[6]=g*C+S*w+p*$+u*rt,r[10]=g*L+S*B+p*q+u*ht,r[14]=g*M+S*k+p*j+u*St,r[3]=b*R+E*x+y*G+A*H,r[7]=b*C+E*w+y*$+A*rt,r[11]=b*L+E*B+y*q+A*ht,r[15]=b*M+E*k+y*j+A*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],S=t[7],p=t[11],u=t[15];return g*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*m-n*l*m)+S*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*h-r*l*h)+p*(+e*c*d-e*o*m-r*a*d+n*a*m+r*o*h-n*c*h)+u*(-s*o*h-e*l*d+e*o*f+s*a*d-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],S=t[13],p=t[14],u=t[15],b=d*p*c-S*f*c+S*l*m-o*p*m-d*l*u+o*f*u,E=g*f*c-h*p*c-g*l*m+a*p*m+h*l*u-a*f*u,y=h*S*c-g*d*c+g*o*m-a*S*m-h*o*u+a*d*u,A=g*d*l-h*S*l-g*o*f+a*S*f+h*o*p-a*d*p,R=e*b+n*E+s*y+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=b*C,t[1]=(S*f*r-d*p*r-S*s*m+n*p*m+d*s*u-n*f*u)*C,t[2]=(o*p*r-S*l*r+S*s*c-n*p*c-o*s*u+n*l*u)*C,t[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*m-n*l*m)*C,t[4]=E*C,t[5]=(h*p*r-g*f*r+g*s*m-e*p*m-h*s*u+e*f*u)*C,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*u-e*l*u)*C,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*m+e*l*m)*C,t[8]=y*C,t[9]=(g*d*r-h*S*r-g*n*m+e*S*m+h*n*u-e*d*u)*C,t[10]=(a*S*r-g*o*r+g*n*c-e*S*c-a*n*u+e*o*u)*C,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*m-e*o*m)*C,t[12]=A*C,t[13]=(h*S*s-g*d*s+g*n*f-e*S*f-h*n*p+e*d*p)*C,t[14]=(g*o*s-a*S*s-g*n*l+e*S*l+a*n*p-e*o*p)*C,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*f+e*o*f)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,f=r*c,m=r*h,g=r*d,S=a*h,p=a*d,u=o*d,b=l*c,E=l*h,y=l*d,A=n.x,R=n.y,C=n.z;return s[0]=(1-(S+u))*A,s[1]=(m+y)*A,s[2]=(g-E)*A,s[3]=0,s[4]=(m-y)*R,s[5]=(1-(f+u))*R,s[6]=(p+b)*R,s[7]=0,s[8]=(g+E)*C,s[9]=(p-b)*C,s[10]=(1-(f+S))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Kn.set(s[0],s[1],s[2]).length();const a=Kn.set(s[4],s[5],s[6]).length(),o=Kn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],He.copy(this);const c=1/r,h=1/a,d=1/o;return He.elements[0]*=c,He.elements[1]*=c,He.elements[2]*=c,He.elements[4]*=h,He.elements[5]*=h,He.elements[6]*=h,He.elements[8]*=d,He.elements[9]*=d,He.elements[10]*=d,e.setFromRotationMatrix(He),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Je,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),m=(n+s)/(n-s);let g,S;if(l)g=r/(a-r),S=a*r/(a-r);else if(o===Je)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===Bs)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Je,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),m=-(n+s)/(n-s);let g,S;if(l)g=1/(a-r),S=a/(a-r);else if(o===Je)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===Bs)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Kn=new I,He=new se,nh=new I(0,0,0),ih=new I(1,1,1),_n=new I,ls=new I,De=new I,so=new se,ro=new qi;class tn{constructor(t=0,e=0,n=0,s=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return so.makeRotationFromQuaternion(t),this.setFromRotationMatrix(so,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ro.setFromEuler(this),this.setFromQuaternion(ro,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class Da{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sh=0;const ao=new I,Jn=new qi,rn=new se,cs=new I,Pi=new I,rh=new I,ah=new qi,oo=new I(1,0,0),lo=new I(0,1,0),co=new I(0,0,1),ho={type:"added"},oh={type:"removed"},Qn={type:"childadded",child:null},ar={type:"childremoved",child:null};class fe extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fe.DEFAULT_UP.clone();const t=new I,e=new tn,n=new qi,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Ft}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.premultiply(Jn),this}rotateX(t){return this.rotateOnAxis(oo,t)}rotateY(t){return this.rotateOnAxis(lo,t)}rotateZ(t){return this.rotateOnAxis(co,t)}translateOnAxis(t,e){return ao.copy(t).applyQuaternion(this.quaternion),this.position.add(ao.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oo,t)}translateY(t){return this.translateOnAxis(lo,t)}translateZ(t){return this.translateOnAxis(co,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?cs.copy(t):cs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Pi,cs,this.up):rn.lookAt(cs,Pi,this.up),this.quaternion.setFromRotationMatrix(rn),s&&(rn.extractRotation(s.matrixWorld),Jn.setFromRotationMatrix(rn),this.quaternion.premultiply(Jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ho),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(oh),ar.child=t,this.dispatchEvent(ar),ar.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ho),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,t,rh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,ah,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}fe.DEFAULT_UP=new I(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ge=new I,an=new I,or=new I,on=new I,ti=new I,ei=new I,uo=new I,lr=new I,cr=new I,hr=new I,dr=new ce,ur=new ce,fr=new ce;class Be{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ge.subVectors(t,e),s.cross(Ge);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ge.subVectors(s,e),an.subVectors(n,e),or.subVectors(t,e);const a=Ge.dot(Ge),o=Ge.dot(an),l=Ge.dot(or),c=an.dot(an),h=an.dot(or),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,on)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,on.x),l.addScaledVector(a,on.y),l.addScaledVector(o,on.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return dr.setScalar(0),ur.setScalar(0),fr.setScalar(0),dr.fromBufferAttribute(t,e),ur.fromBufferAttribute(t,n),fr.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(dr,r.x),a.addScaledVector(ur,r.y),a.addScaledVector(fr,r.z),a}static isFrontFacing(t,e,n,s){return Ge.subVectors(n,e),an.subVectors(t,e),Ge.cross(an).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ge.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Ge.cross(an).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Be.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Be.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Be.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Be.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Be.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ti.subVectors(s,n),ei.subVectors(r,n),lr.subVectors(t,n);const l=ti.dot(lr),c=ei.dot(lr);if(l<=0&&c<=0)return e.copy(n);cr.subVectors(t,s);const h=ti.dot(cr),d=ei.dot(cr);if(h>=0&&d<=h)return e.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ti,a);hr.subVectors(t,r);const m=ti.dot(hr),g=ei.dot(hr);if(g>=0&&m<=g)return e.copy(r);const S=m*c-l*g;if(S<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ei,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return uo.subVectors(r,s),o=(d-h)/(d-h+(m-g)),e.copy(s).addScaledVector(uo,o);const u=1/(p+S+f);return a=S*u,o=f*u,e.copy(n).addScaledVector(ti,a).addScaledVector(ei,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},hs={h:0,s:0,l:0};function pr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Vt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Vt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Vt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Vt.workingColorSpace){if(t=Ca(t,1),e=Ht(e,0,1),n=Ht(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=pr(a,r,t+1/3),this.g=pr(a,r,t),this.b=pr(a,r,t-1/3)}return Vt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=wl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pn(t.r),this.g=pn(t.g),this.b=pn(t.b),this}copyLinearToSRGB(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Vt.workingToColorSpace(Me.copy(this),t),Math.round(Ht(Me.r*255,0,255))*65536+Math.round(Ht(Me.g*255,0,255))*256+Math.round(Ht(Me.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Vt.workingColorSpace){Vt.workingToColorSpace(Me.copy(this),e);const n=Me.r,s=Me.g,r=Me.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Vt.workingColorSpace){return Vt.workingToColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Ue){Vt.workingToColorSpace(Me.copy(this),t);const e=Me.r,n=Me.g,s=Me.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(xn),this.setHSL(xn.h+t,xn.s+e,xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(xn),t.getHSL(hs);const n=Bi(xn.h,hs.h,e),s=Bi(xn.s,hs.s,e),r=Bi(xn.l,hs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Me=new Lt;Lt.NAMES=wl;let lh=0;class Wn extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=ui,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dr,this.blendDst=Ir,this.blendEquation=Fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qn,this.stencilZFail=qn,this.stencilZPass=qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dr&&(n.blendSrc=this.blendSrc),this.blendDst!==Ir&&(n.blendDst=this.blendDst),this.blendEquation!==Fn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ka&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ce extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=al,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new I,ds=new xt;let ch=0;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ch++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=va,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ds.fromBufferAttribute(this,e),ds.applyMatrix3(t),this.setXY(e,ds.x,ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ve(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ve(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ve(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ve(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ve(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==va&&(t.usage=this.usage),t}}class Al extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Rl extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let hh=0;const Oe=new se,mr=new fe,ni=new I,Ie=new Yi,Li=new Yi,ve=new I;class xe extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bl(t)?Rl:Al)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Oe.makeRotationFromQuaternion(t),this.applyMatrix4(Oe),this}rotateX(t){return Oe.makeRotationX(t),this.applyMatrix4(Oe),this}rotateY(t){return Oe.makeRotationY(t),this.applyMatrix4(Oe),this}rotateZ(t){return Oe.makeRotationZ(t),this.applyMatrix4(Oe),this}translate(t,e,n){return Oe.makeTranslation(t,e,n),this.applyMatrix4(Oe),this}scale(t,e,n){return Oe.makeScale(t,e,n),this.applyMatrix4(Oe),this}lookAt(t){return mr.lookAt(t),mr.updateMatrix(),this.applyMatrix4(mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ie.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Li.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Ie.min,Li.min),Ie.expandByPoint(ve),ve.addVectors(Ie.max,Li.max),Ie.expandByPoint(ve)):(Ie.expandByPoint(Li.min),Ie.expandByPoint(Li.max))}Ie.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ve.fromBufferAttribute(o,c),l&&(ni.fromBufferAttribute(t,c),ve.add(ni)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new I,l[L]=new I;const c=new I,h=new I,d=new I,f=new xt,m=new xt,g=new xt,S=new I,p=new I;function u(L,M,x){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,x),f.fromBufferAttribute(r,L),m.fromBufferAttribute(r,M),g.fromBufferAttribute(r,x),h.sub(c),d.sub(c),m.sub(f),g.sub(f);const w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(S.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(w),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(w),o[L].add(S),o[M].add(S),o[x].add(S),l[L].add(p),l[M].add(p),l[x].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,M=b.length;L<M;++L){const x=b[L],w=x.start,B=x.count;for(let k=w,G=w+B;k<G;k+=3)u(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const E=new I,y=new I,A=new I,R=new I;function C(L){A.fromBufferAttribute(s,L),R.copy(A);const M=o[L];E.copy(M),E.sub(A.multiplyScalar(A.dot(M))).normalize(),y.crossVectors(R,M);const w=y.dot(l[L])<0?-1:1;a.setXYZW(L,E.x,E.y,E.z,w)}for(let L=0,M=b.length;L<M;++L){const x=b[L],w=x.start,B=x.count;for(let k=w,G=w+B;k<G;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),S=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let S=0,p=l.length;S<p;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new ze(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fo=new se,Pn=new La,us=new Gs,po=new I,fs=new I,ps=new I,ms=new I,gr=new I,gs=new I,mo=new I,vs=new I;class Dt extends fe{constructor(t=new xe,e=new Ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){gs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(gr.fromBufferAttribute(d,t),a?gs.addScaledVector(gr,h):gs.addScaledVector(gr.sub(e),h))}e.add(gs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(r),Pn.copy(t.ray).recast(t.near),!(us.containsPoint(Pn.origin)===!1&&(Pn.intersectSphere(us,po)===null||Pn.origin.distanceToSquared(po)>(t.far-t.near)**2))&&(fo.copy(r).invert(),Pn.copy(t.ray).applyMatrix4(fo),!(n.boundingBox!==null&&Pn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=f.length;g<S;g++){const p=f[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,A=E;y<A;y+=3){const R=o.getX(y),C=o.getX(y+1),L=o.getX(y+2);s=_s(this,u,t,n,c,h,d,R,C,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let p=g,u=S;p<u;p+=3){const b=o.getX(p),E=o.getX(p+1),y=o.getX(p+2);s=_s(this,a,t,n,c,h,d,b,E,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,S=f.length;g<S;g++){const p=f[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,A=E;y<A;y+=3){const R=y,C=y+1,L=y+2;s=_s(this,u,t,n,c,h,d,R,C,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=g,u=S;p<u;p+=3){const b=p,E=p+1,y=p+2;s=_s(this,a,t,n,c,h,d,b,E,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function dh(i,t,e,n,s,r,a,o){let l;if(t.side===we?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Tn,o),l===null)return null;vs.copy(o),vs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(vs);return c<e.near||c>e.far?null:{distance:c,point:vs.clone(),object:i}}function _s(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,fs),i.getVertexPosition(l,ps),i.getVertexPosition(c,ms);const h=dh(i,t,e,n,fs,ps,ms,mo);if(h){const d=new I;Be.getBarycoord(mo,fs,ps,ms,d),s&&(h.uv=Be.getInterpolatedAttribute(s,o,l,c,d,new xt)),r&&(h.uv1=Be.getInterpolatedAttribute(r,o,l,c,d,new xt)),a&&(h.normal=Be.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new I,materialIndex:0};Be.getNormal(fs,ps,ms,f.normal),h.face=f,h.barycoord=d}return h}class $i extends xe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(d,2));function g(S,p,u,b,E,y,A,R,C,L,M){const x=y/C,w=A/L,B=y/2,k=A/2,G=R/2,$=C+1,q=L+1;let j=0,H=0;const rt=new I;for(let ht=0;ht<q;ht++){const St=ht*w-k;for(let Bt=0;Bt<$;Bt++){const ne=Bt*x-B;rt[S]=ne*b,rt[p]=St*E,rt[u]=G,c.push(rt.x,rt.y,rt.z),rt[S]=0,rt[p]=0,rt[u]=R>0?1:-1,h.push(rt.x,rt.y,rt.z),d.push(Bt/C),d.push(1-ht/L),j+=1}}for(let ht=0;ht<L;ht++)for(let St=0;St<C;St++){const Bt=f+St+$*ht,ne=f+St+$*(ht+1),Zt=f+(St+1)+$*(ht+1),X=f+(St+1)+$*ht;l.push(Bt,ne,X),l.push(ne,Zt,X),H+=6}o.addGroup(m,H,M),m+=H,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function be(i){const t={};for(let e=0;e<i.length;e++){const n=xi(i[e]);for(const s in n)t[s]=n[s]}return t}function uh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Cl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Vt.workingColorSpace}const Wi={clone:xi,merge:be};var fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _e extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fh,this.fragmentShader=ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xi(t.uniforms),this.uniformsGroups=uh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Pl extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Je,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yn=new I,go=new xt,vo=new xt;class Te extends Pl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Oi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vi*2*Math.atan(Math.tan(Oi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yn.x,yn.y).multiplyScalar(-t/yn.z),yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yn.x,yn.y).multiplyScalar(-t/yn.z)}getViewSize(t,e){return this.getViewBounds(t,go,vo),e.subVectors(vo,go)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Oi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ii=-90,si=1;class mh extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Te(ii,si,t,e);s.layers=this.layers,this.add(s);const r=new Te(ii,si,t,e);r.layers=this.layers,this.add(r);const a=new Te(ii,si,t,e);a.layers=this.layers,this.add(a);const o=new Te(ii,si,t,e);o.layers=this.layers,this.add(o);const l=new Te(ii,si,t,e);l.layers=this.layers,this.add(l);const c=new Te(ii,si,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Je)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ll extends Ae{constructor(t=[],e=gi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gh extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ll(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $i(5,5,5),r=new _e({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:dn});r.uniforms.tEquirect.value=e;const a=new Dt(s,r),o=e.minFilter;return e.minFilter===zn&&(e.minFilter=Ke),new mh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class Xe extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vh={type:"move"};class vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const S of t.hand.values()){const p=e.getJointPose(S,n),u=this._getHandJoint(c,S);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vh)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ia{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Lt(t),this.density=e}clone(){return new Ia(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ji{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new ji(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Vs extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class _h{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=va,this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ee=new I;class ks{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ve(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ve(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ve(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ve(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ve(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ks(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Dl extends Wn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ri;const Di=new I,ai=new I,oi=new I,li=new xt,Ii=new xt,Il=new se,xs=new I,Ui=new I,ys=new I,_o=new xt,_r=new xt,xo=new xt;class xh extends fe{constructor(t=new Dl){if(super(),this.isSprite=!0,this.type="Sprite",ri===void 0){ri=new xe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _h(e,5);ri.setIndex([0,1,2,0,2,3]),ri.setAttribute("position",new ks(n,3,0,!1)),ri.setAttribute("uv",new ks(n,2,3,!1))}this.geometry=ri,this.material=t,this.center=new xt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ai.setFromMatrixScale(this.matrixWorld),Il.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),oi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ai.multiplyScalar(-oi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ms(xs.set(-.5,-.5,0),oi,a,ai,s,r),Ms(Ui.set(.5,-.5,0),oi,a,ai,s,r),Ms(ys.set(.5,.5,0),oi,a,ai,s,r),_o.set(0,0),_r.set(1,0),xo.set(1,1);let o=t.ray.intersectTriangle(xs,Ui,ys,!1,Di);if(o===null&&(Ms(Ui.set(-.5,.5,0),oi,a,ai,s,r),_r.set(0,1),o=t.ray.intersectTriangle(xs,ys,Ui,!1,Di),o===null))return;const l=t.ray.origin.distanceTo(Di);l<t.near||l>t.far||e.push({distance:l,point:Di.clone(),uv:Be.getInterpolation(Di,xs,Ui,ys,_o,_r,xo,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ms(i,t,e,n,s,r){li.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ii.x=r*li.x-s*li.y,Ii.y=s*li.x+r*li.y):Ii.copy(li),i.copy(t),i.x+=Ii.x,i.y+=Ii.y,i.applyMatrix4(Il)}const xr=new I,yh=new I,Mh=new Ft;class Un{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=xr.subVectors(n,e).cross(yh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(xr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Mh.getNormalMatrix(t),s=this.coplanarPoint(xr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ln=new Gs,Sh=new xt(.5,.5),Ss=new I;class Ua{constructor(t=new Un,e=new Un,n=new Un,s=new Un,r=new Un,a=new Un){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Je,n=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],m=r[7],g=r[8],S=r[9],p=r[10],u=r[11],b=r[12],E=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-a,m-h,u-g,A-b).normalize(),s[1].setComponents(c+a,m+h,u+g,A+b).normalize(),s[2].setComponents(c+o,m+d,u+S,A+E).normalize(),s[3].setComponents(c-o,m-d,u-S,A-E).normalize(),n)s[4].setComponents(l,f,p,y).normalize(),s[5].setComponents(c-l,m-f,u-p,A-y).normalize();else if(s[4].setComponents(c-l,m-f,u-p,A-y).normalize(),e===Je)s[5].setComponents(c+l,m+f,u+p,A+y).normalize();else if(e===Bs)s[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ln.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ln.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ln)}intersectsSprite(t){Ln.center.set(0,0,0);const e=Sh.distanceTo(t.center);return Ln.radius=.7071067811865476+e,Ln.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ln)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ss.x=s.normal.x>0?t.max.x:t.min.x,Ss.y=s.normal.y>0?t.max.y:t.min.y,Ss.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ul extends Wn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yo=new se,_a=new La,Es=new Gs,bs=new I;class Eh extends fe{constructor(t=new xe,e=new Ul){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(s),Es.radius+=r,t.ray.intersectsSphere(Es)===!1)return;yo.copy(s).invert(),_a.copy(t.ray).applyMatrix4(yo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,S=m;g<S;g++){const p=c.getX(g);bs.fromBufferAttribute(d,p),Mo(bs,p,l,s,t,e,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,S=m;g<S;g++)bs.fromBufferAttribute(d,g),Mo(bs,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Mo(i,t,e,n,s,r,a){const o=_a.distanceSqToPoint(i);if(o<e){const l=new I;_a.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class bh extends Ae{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nl extends Ae{constructor(t,e,n=kn,s,r,a,o=Ye,l=Ye,c,h=Hi,d=1){if(h!==Hi&&h!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Na extends xe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,f=e,m=2*d+f,g=n*2+r,S=s+1,p=new I,u=new I;for(let b=0;b<=g;b++){let E=0,y=0,A=0,R=0;if(b<=n){const M=b/n,x=M*Math.PI/2;y=-h-t*Math.cos(x),A=t*Math.sin(x),R=-t*Math.cos(x),E=M*d}else if(b<=n+r){const M=(b-n)/r;y=-h+M*e,A=t,R=0,E=d+M*f}else{const M=(b-n-r)/n,x=M*Math.PI/2;y=h+t*Math.sin(x),A=t*Math.cos(x),R=t*Math.sin(x),E=d+f+M*d}const C=Math.max(0,Math.min(1,E/m));let L=0;b===0?L=.5/s:b===g&&(L=-.5/s);for(let M=0;M<=s;M++){const x=M/s,w=x*Math.PI*2,B=Math.sin(w),k=Math.cos(w);u.x=-A*k,u.y=y,u.z=A*B,o.push(u.x,u.y,u.z),p.set(-A*k,R,A*B),p.normalize(),l.push(p.x,p.y,p.z),c.push(x+L,C)}if(b>0){const M=(b-1)*S;for(let x=0;x<s;x++){const w=M+x,B=M+x+1,k=b*S+x,G=b*S+x+1;a.push(w,B,k),a.push(B,G,k)}}}this.setIndex(a),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Na(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class yi extends xe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new I,h=new xt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const m=n+d/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(o,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class qe extends xe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],m=[];let g=0;const S=[],p=n/2;let u=0;b(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(m,2));function b(){const y=new I,A=new I;let R=0;const C=(e-t)/n;for(let L=0;L<=r;L++){const M=[],x=L/r,w=x*(e-t)+t;for(let B=0;B<=s;B++){const k=B/s,G=k*l+o,$=Math.sin(G),q=Math.cos(G);A.x=w*$,A.y=-x*n+p,A.z=w*q,d.push(A.x,A.y,A.z),y.set($,C,q).normalize(),f.push(y.x,y.y,y.z),m.push(k,1-x),M.push(g++)}S.push(M)}for(let L=0;L<s;L++)for(let M=0;M<r;M++){const x=S[M][L],w=S[M+1][L],B=S[M+1][L+1],k=S[M][L+1];(t>0||M!==0)&&(h.push(x,w,k),R+=3),(e>0||M!==r-1)&&(h.push(w,B,k),R+=3)}c.addGroup(u,R,0),u+=R}function E(y){const A=g,R=new xt,C=new I;let L=0;const M=y===!0?t:e,x=y===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,p*x,0),f.push(0,x,0),m.push(.5,.5),g++;const w=g;for(let B=0;B<=s;B++){const G=B/s*l+o,$=Math.cos(G),q=Math.sin(G);C.x=M*q,C.y=p*x,C.z=M*$,d.push(C.x,C.y,C.z),f.push(0,x,0),R.x=$*.5+.5,R.y=q*.5*x+.5,m.push(R.x,R.y),g++}for(let B=0;B<s;B++){const k=A+B,G=w+B;y===!0?h.push(G,G+1,k):h.push(G+1,G,k),L+=3}c.addGroup(u,L,y===!0?1:2),u+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zi extends qe{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Zi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ei extends xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const E=new I,y=new I,A=new I;for(let R=0;R<e.length;R+=3)m(e[R+0],E),m(e[R+1],y),m(e[R+2],A),l(E,y,A,b)}function l(b,E,y,A){const R=A+1,C=[];for(let L=0;L<=R;L++){C[L]=[];const M=b.clone().lerp(y,L/R),x=E.clone().lerp(y,L/R),w=R-L;for(let B=0;B<=w;B++)B===0&&L===R?C[L][B]=M:C[L][B]=M.clone().lerp(x,B/w)}for(let L=0;L<R;L++)for(let M=0;M<2*(R-L)-1;M++){const x=Math.floor(M/2);M%2===0?(f(C[L][x+1]),f(C[L+1][x]),f(C[L][x])):(f(C[L][x+1]),f(C[L+1][x+1]),f(C[L+1][x]))}}function c(b){const E=new I;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(b),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function h(){const b=new I;for(let E=0;E<r.length;E+=3){b.x=r[E+0],b.y=r[E+1],b.z=r[E+2];const y=p(b)/2/Math.PI+.5,A=u(b)/Math.PI+.5;a.push(y,1-A)}g(),d()}function d(){for(let b=0;b<a.length;b+=6){const E=a[b+0],y=a[b+2],A=a[b+4],R=Math.max(E,y,A),C=Math.min(E,y,A);R>.9&&C<.1&&(E<.2&&(a[b+0]+=1),y<.2&&(a[b+2]+=1),A<.2&&(a[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function m(b,E){const y=b*3;E.x=t[y+0],E.y=t[y+1],E.z=t[y+2]}function g(){const b=new I,E=new I,y=new I,A=new I,R=new xt,C=new xt,L=new xt;for(let M=0,x=0;M<r.length;M+=9,x+=6){b.set(r[M+0],r[M+1],r[M+2]),E.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),R.set(a[x+0],a[x+1]),C.set(a[x+2],a[x+3]),L.set(a[x+4],a[x+5]),A.copy(b).add(E).add(y).divideScalar(3);const w=p(A);S(R,x+0,b,w),S(C,x+2,E,w),S(L,x+4,y,w)}}function S(b,E,y,A){A<0&&b.x===1&&(a[E]=b.x-1),y.x===0&&y.z===0&&(a[E]=A/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function u(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.vertices,t.indices,t.radius,t.details)}}class Hn extends Ei{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Hn(t.radius,t.detail)}}class Fa extends Ei{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fa(t.radius,t.detail)}}class Ki extends Ei{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ki(t.radius,t.detail)}}class Ws extends xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=e/l,m=[],g=[],S=[],p=[];for(let u=0;u<h;u++){const b=u*f-a;for(let E=0;E<c;E++){const y=E*d-r;g.push(y,-b,0),S.push(0,0,1),p.push(E/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<o;b++){const E=b+c*u,y=b+c*(u+1),A=b+1+c*(u+1),R=b+1+c*u;m.push(E,y,R),m.push(y,A,R)}this.setIndex(m),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(S,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ws(t.width,t.height,t.widthSegments,t.heightSegments)}}class Gn extends xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new I,f=new I,m=[],g=[],S=[],p=[];for(let u=0;u<=n;u++){const b=[],E=u/n;let y=0;u===0&&a===0?y=.5/e:u===n&&l===Math.PI&&(y=-.5/e);for(let A=0;A<=e;A++){const R=A/e;d.x=-t*Math.cos(s+R*r)*Math.sin(a+E*o),d.y=t*Math.cos(a+E*o),d.z=t*Math.sin(s+R*r)*Math.sin(a+E*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),S.push(f.x,f.y,f.z),p.push(R+y,1-E),b.push(c++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<e;b++){const E=h[u][b+1],y=h[u][b],A=h[u+1][b],R=h[u+1][b+1];(u!==0||a>0)&&m.push(E,y,R),(u!==n-1||l<Math.PI)&&m.push(y,A,R)}this.setIndex(m),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(S,3)),this.setAttribute("uv",new Jt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Oa extends Ei{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Oa(t.radius,t.detail)}}class Vn extends xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],h=new I,d=new I,f=new I;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const S=g/s*r,p=m/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(S),d.y=(t+e*Math.cos(p))*Math.sin(S),d.z=e*Math.sin(p),o.push(d.x,d.y,d.z),h.x=t*Math.cos(S),h.y=t*Math.sin(S),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const S=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,u=(s+1)*(m-1)+g,b=(s+1)*m+g;a.push(S,p,b),a.push(p,u,b)}this.setIndex(a),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Th extends _e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class oe extends Wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sl,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wh extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ah extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ba extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Xs extends Ba{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const yr=new se,So=new I,Eo=new I;class Rh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ua,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;So.setFromMatrixPosition(t.matrixWorld),e.position.copy(So),Eo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Eo),e.updateMatrixWorld(),yr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yr,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class za extends Pl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ch extends Rh{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xi extends Ba{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new Ch}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ph extends Ba{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Lh extends Te{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ji{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const bo=new se;class Fl{constructor(t,e,n=0,s=1/0){this.ray=new La(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Da,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return bo.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bo),this}intersectObject(t,e=!0,n=[]){return xa(t,this,n,e),n.sort(To),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)xa(t[s],this,n,e);return n.sort(To),n}}function To(i,t){return i.distance-t.distance}function xa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)xa(r[a],t,e,!0)}}function wo(i,t,e,n){const s=Dh(n);switch(e){case vl:return i*t;case xl:return i*t/s.components*s.byteLength;case wa:return i*t/s.components*s.byteLength;case yl:return i*t*2/s.components*s.byteLength;case Aa:return i*t*2/s.components*s.byteLength;case _l:return i*t*3/s.components*s.byteLength;case We:return i*t*4/s.components*s.byteLength;case Ra:return i*t*4/s.components*s.byteLength;case Ps:case Ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ds:case Is:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qr:case $r:return Math.max(i,16)*Math.max(t,8)/4;case Xr:case Yr:return Math.max(i,8)*Math.max(t,8)/2;case jr:case Zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ta:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ea:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case na:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ia:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case sa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ra:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case aa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ca:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ha:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case da:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Us:case ua:case fa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ml:case pa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ma:case ga:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dh(i){switch(i){case Qe:case pl:return{byteLength:1,components:1};case zi:case ml:case un:return{byteLength:2,components:1};case ba:case Ta:return{byteLength:2,components:4};case kn:case Ea:case hn:return{byteLength:4,components:1};case gl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);function Ol(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ih(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],S=d[m];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++f,d[f]=S)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const S=d[m];i.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Uh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$h=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,id=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",dd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,md=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_d=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Md=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Td=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ad=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ld=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Id=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Od=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,su=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ru=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,au=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ou=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,du=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_u=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Su=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Eu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Au=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ru=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Du=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Iu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ou=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ku=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$u=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ju=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ku=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ju=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ef=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,of=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ff=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:Uh,alphahash_pars_fragment:Nh,alphamap_fragment:Fh,alphamap_pars_fragment:Oh,alphatest_fragment:Bh,alphatest_pars_fragment:zh,aomap_fragment:kh,aomap_pars_fragment:Hh,batching_pars_vertex:Gh,batching_vertex:Vh,begin_vertex:Wh,beginnormal_vertex:Xh,bsdfs:qh,iridescence_fragment:Yh,bumpmap_pars_fragment:$h,clipping_planes_fragment:jh,clipping_planes_pars_fragment:Zh,clipping_planes_pars_vertex:Kh,clipping_planes_vertex:Jh,color_fragment:Qh,color_pars_fragment:td,color_pars_vertex:ed,color_vertex:nd,common:id,cube_uv_reflection_fragment:sd,defaultnormal_vertex:rd,displacementmap_pars_vertex:ad,displacementmap_vertex:od,emissivemap_fragment:ld,emissivemap_pars_fragment:cd,colorspace_fragment:hd,colorspace_pars_fragment:dd,envmap_fragment:ud,envmap_common_pars_fragment:fd,envmap_pars_fragment:pd,envmap_pars_vertex:md,envmap_physical_pars_fragment:wd,envmap_vertex:gd,fog_vertex:vd,fog_pars_vertex:_d,fog_fragment:xd,fog_pars_fragment:yd,gradientmap_pars_fragment:Md,lightmap_pars_fragment:Sd,lights_lambert_fragment:Ed,lights_lambert_pars_fragment:bd,lights_pars_begin:Td,lights_toon_fragment:Ad,lights_toon_pars_fragment:Rd,lights_phong_fragment:Cd,lights_phong_pars_fragment:Pd,lights_physical_fragment:Ld,lights_physical_pars_fragment:Dd,lights_fragment_begin:Id,lights_fragment_maps:Ud,lights_fragment_end:Nd,logdepthbuf_fragment:Fd,logdepthbuf_pars_fragment:Od,logdepthbuf_pars_vertex:Bd,logdepthbuf_vertex:zd,map_fragment:kd,map_pars_fragment:Hd,map_particle_fragment:Gd,map_particle_pars_fragment:Vd,metalnessmap_fragment:Wd,metalnessmap_pars_fragment:Xd,morphinstance_vertex:qd,morphcolor_vertex:Yd,morphnormal_vertex:$d,morphtarget_pars_vertex:jd,morphtarget_vertex:Zd,normal_fragment_begin:Kd,normal_fragment_maps:Jd,normal_pars_fragment:Qd,normal_pars_vertex:tu,normal_vertex:eu,normalmap_pars_fragment:nu,clearcoat_normal_fragment_begin:iu,clearcoat_normal_fragment_maps:su,clearcoat_pars_fragment:ru,iridescence_pars_fragment:au,opaque_fragment:ou,packing:lu,premultiplied_alpha_fragment:cu,project_vertex:hu,dithering_fragment:du,dithering_pars_fragment:uu,roughnessmap_fragment:fu,roughnessmap_pars_fragment:pu,shadowmap_pars_fragment:mu,shadowmap_pars_vertex:gu,shadowmap_vertex:vu,shadowmask_pars_fragment:_u,skinbase_vertex:xu,skinning_pars_vertex:yu,skinning_vertex:Mu,skinnormal_vertex:Su,specularmap_fragment:Eu,specularmap_pars_fragment:bu,tonemapping_fragment:Tu,tonemapping_pars_fragment:wu,transmission_fragment:Au,transmission_pars_fragment:Ru,uv_pars_fragment:Cu,uv_pars_vertex:Pu,uv_vertex:Lu,worldpos_vertex:Du,background_vert:Iu,background_frag:Uu,backgroundCube_vert:Nu,backgroundCube_frag:Fu,cube_vert:Ou,cube_frag:Bu,depth_vert:zu,depth_frag:ku,distanceRGBA_vert:Hu,distanceRGBA_frag:Gu,equirect_vert:Vu,equirect_frag:Wu,linedashed_vert:Xu,linedashed_frag:qu,meshbasic_vert:Yu,meshbasic_frag:$u,meshlambert_vert:ju,meshlambert_frag:Zu,meshmatcap_vert:Ku,meshmatcap_frag:Ju,meshnormal_vert:Qu,meshnormal_frag:tf,meshphong_vert:ef,meshphong_frag:nf,meshphysical_vert:sf,meshphysical_frag:rf,meshtoon_vert:af,meshtoon_frag:of,points_vert:lf,points_frag:cf,shadow_vert:hf,shadow_frag:df,sprite_vert:uf,sprite_frag:ff},st={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Ze={basic:{uniforms:be([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:be([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:be([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:be([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:be([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:be([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:be([st.points,st.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:be([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:be([st.common,st.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:be([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:be([st.sprite,st.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:be([st.common,st.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:be([st.lights,st.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Ze.physical={uniforms:be([Ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Ts={r:0,b:0,g:0},Dn=new tn,pf=new se;function mf(i,t,e,n,s,r,a){const o=new Lt(0);let l=r===!0?0:1,c,h,d=null,f=0,m=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function S(E){let y=!1;const A=g(E);A===null?u(o,l):A&&A.isColor&&(u(A,1),y=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===Hs)?(h===void 0&&(h=new Dt(new $i(1,1,1),new _e({name:"BackgroundCubeMaterial",uniforms:xi(Ze.backgroundCube.uniforms),vertexShader:Ze.backgroundCube.vertexShader,fragmentShader:Ze.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Dn.copy(y.backgroundRotation),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pf.makeRotationFromEuler(Dn)),h.material.toneMapped=Vt.getTransfer(A.colorSpace)!==Yt,(d!==A||f!==A.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=A,f=A.version,m=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Dt(new Ws(2,2),new _e({name:"BackgroundMaterial",uniforms:xi(Ze.background.uniforms),vertexShader:Ze.background.vertexShader,fragmentShader:Ze.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Vt.getTransfer(A.colorSpace)!==Yt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,m=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function u(E,y){E.getRGB(Ts,Cl(i)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,y,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,y=1){o.set(E),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,u(o,l)},render:S,addToRenderList:p,dispose:b}}function gf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(x,w,B,k,G){let $=!1;const q=d(k,B,w);r!==q&&(r=q,c(r.object)),$=m(x,k,B,G),$&&g(x,k,B,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,y(x,w,B,k),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,w,B){const k=B.wireframe===!0;let G=n[x.id];G===void 0&&(G={},n[x.id]=G);let $=G[w.id];$===void 0&&($={},G[w.id]=$);let q=$[k];return q===void 0&&(q=f(l()),$[k]=q),q}function f(x){const w=[],B=[],k=[];for(let G=0;G<e;G++)w[G]=0,B[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:B,attributeDivisors:k,object:x,attributes:{},index:null}}function m(x,w,B,k){const G=r.attributes,$=w.attributes;let q=0;const j=B.getAttributes();for(const H in j)if(j[H].location>=0){const ht=G[H];let St=$[H];if(St===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(St=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(St=x.instanceColor)),ht===void 0||ht.attribute!==St||St&&ht.data!==St.data)return!0;q++}return r.attributesNum!==q||r.index!==k}function g(x,w,B,k){const G={},$=w.attributes;let q=0;const j=B.getAttributes();for(const H in j)if(j[H].location>=0){let ht=$[H];ht===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor));const St={};St.attribute=ht,ht&&ht.data&&(St.data=ht.data),G[H]=St,q++}r.attributes=G,r.attributesNum=q,r.index=k}function S(){const x=r.newAttributes;for(let w=0,B=x.length;w<B;w++)x[w]=0}function p(x){u(x,0)}function u(x,w){const B=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;B[x]=1,k[x]===0&&(i.enableVertexAttribArray(x),k[x]=1),G[x]!==w&&(i.vertexAttribDivisor(x,w),G[x]=w)}function b(){const x=r.newAttributes,w=r.enabledAttributes;for(let B=0,k=w.length;B<k;B++)w[B]!==x[B]&&(i.disableVertexAttribArray(B),w[B]=0)}function E(x,w,B,k,G,$,q){q===!0?i.vertexAttribIPointer(x,w,B,G,$):i.vertexAttribPointer(x,w,B,k,G,$)}function y(x,w,B,k){S();const G=k.attributes,$=B.getAttributes(),q=w.defaultAttributeValues;for(const j in $){const H=$[j];if(H.location>=0){let rt=G[j];if(rt===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor)),rt!==void 0){const ht=rt.normalized,St=rt.itemSize,Bt=t.get(rt);if(Bt===void 0)continue;const ne=Bt.buffer,Zt=Bt.type,X=Bt.bytesPerElement,at=Zt===i.INT||Zt===i.UNSIGNED_INT||rt.gpuType===Ea;if(rt.isInterleavedBufferAttribute){const nt=rt.data,wt=nt.stride,At=rt.offset;if(nt.isInstancedInterleavedBuffer){for(let It=0;It<H.locationSize;It++)u(H.location+It,nt.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let It=0;It<H.locationSize;It++)p(H.location+It);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let It=0;It<H.locationSize;It++)E(H.location+It,St/H.locationSize,Zt,ht,wt*X,(At+St/H.locationSize*It)*X,at)}else{if(rt.isInstancedBufferAttribute){for(let nt=0;nt<H.locationSize;nt++)u(H.location+nt,rt.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let nt=0;nt<H.locationSize;nt++)p(H.location+nt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let nt=0;nt<H.locationSize;nt++)E(H.location+nt,St/H.locationSize,Zt,ht,St*X,St/H.locationSize*nt*X,at)}}else if(q!==void 0){const ht=q[j];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(H.location,ht);break;case 3:i.vertexAttrib3fv(H.location,ht);break;case 4:i.vertexAttrib4fv(H.location,ht);break;default:i.vertexAttrib1fv(H.location,ht)}}}}b()}function A(){L();for(const x in n){const w=n[x];for(const B in w){const k=w[B];for(const G in k)h(k[G].object),delete k[G];delete w[B]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;const w=n[x.id];for(const B in w){const k=w[B];for(const G in k)h(k[G].object),delete k[G];delete w[B]}delete n[x.id]}function C(x){for(const w in n){const B=n[w];if(B[x.id]===void 0)continue;const k=B[x.id];for(const G in k)h(k[G].object),delete k[G];delete B[x.id]}}function L(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:p,disableUnusedAttributes:b}}function vf(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let m=0;for(let g=0;g<d;g++)m+=h[g];e.update(m,n,1)}function l(c,h,d,f){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let S=0;S<d;S++)g+=h[S]*f[S];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function _f(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==We&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const L=C===un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Qe&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==hn&&!L)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:A,maxSamples:R}}function xf(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Un,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,S=d.clipIntersection,p=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const b=r?0:n,E=b*4;let y=u.clippingState||null;l.value=y,y=h(g,f,E,m);for(let A=0;A!==E;++A)y[A]=e[A];u.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,g){const S=d!==null?d.length:0;let p=null;if(S!==0){if(p=l.value,g!==!0||p===null){const u=m+S*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let E=0,y=m;E!==S;++E,y+=4)a.copy(d[E]).applyMatrix4(b,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,p}}function yf(i){let t=new WeakMap;function e(a,o){return o===Hr?a.mapping=gi:o===Gr&&(a.mapping=vi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Hr||o===Gr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new gh(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const di=4,Ao=[.125,.215,.35,.446,.526,.582],On=20,Mr=new za,Ro=new Lt;let Sr=null,Er=0,br=0,Tr=!1;const Nn=(1+Math.sqrt(5))/2,ci=1/Nn,Co=[new I(-Nn,ci,0),new I(Nn,ci,0),new I(-ci,0,Nn),new I(ci,0,Nn),new I(0,Nn,-ci),new I(0,Nn,ci),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Mf=new I;class Po{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:a=256,position:o=Mf}=r;Sr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Io(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Do(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sr,Er,br),this._renderer.xr.enabled=Tr,t.scissorTest=!1,ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:un,format:We,colorSpace:_i,depthBuffer:!1},s=Lo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sf(r)),this._blurMaterial=Ef(r,t,e)}return s}_compileMaterial(t){const e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,Mr)}_sceneToCubeUV(t,e,n,s,r){const l=new Te(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(Ro),d.toneMapping=bn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const S=new Ce({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),p=new Dt(new $i,S);let u=!1;const b=t.background;b?b.isColor&&(S.color.copy(b),t.background=null,u=!0):(S.color.copy(Ro),u=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const A=this._cubeSize;ws(s,y*A,E>2?A:0,A,A),d.setRenderTarget(s),u&&d.render(p,l),d.render(t,l)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=m,d.autoClear=f,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===gi||t.mapping===vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Io()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Do());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Mr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Co[(s-r-1)%Co.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Dt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*On-1),S=r/g,p=isFinite(r)?1+Math.floor(h*S):On;p>On&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${On}`);const u=[];let b=0;for(let C=0;C<On;++C){const L=C/S,M=Math.exp(-L*L/2);u.push(M),C===0?b+=M:C<p&&(b+=2*M)}for(let C=0;C<u.length;C++)u[C]=u[C]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const y=this._sizeLods[s],A=3*y*(s>E-di?s-E+di:0),R=4*(this._cubeSize-y);ws(e,A,R,3*y,2*y),l.setRenderTarget(e),l.render(d,Mr)}}function Sf(i){const t=[],e=[],n=[];let s=i;const r=i-di+1+Ao.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-di?l=Ao[a-i+di-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,S=3,p=2,u=1,b=new Float32Array(S*g*m),E=new Float32Array(p*g*m),y=new Float32Array(u*g*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,L=R>2?0:-1,M=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];b.set(M,S*g*R),E.set(f,p*g*R);const x=[R,R,R,R,R,R];y.set(x,u*g*R)}const A=new xe;A.setAttribute("position",new ze(b,S)),A.setAttribute("uv",new ze(E,p)),A.setAttribute("faceIndex",new ze(y,u)),t.push(A),s>di&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lo(i,t,e){const n=new $e(i,t,e);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ef(i,t,e){const n=new Float32Array(On),s=new I(0,1,0);return new _e({name:"SphericalGaussianBlur",defines:{n:On,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Do(){return new _e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Io(){return new _e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function ka(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Hr||l===Gr,h=l===gi||l===vi;if(c||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Po(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Po(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Tf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&fi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function wf(i,t,e,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)t.update(f[m],i.ARRAY_BUFFER)}function c(d){const f=[],m=d.index,g=d.attributes.position;let S=0;if(m!==null){const b=m.array;S=m.version;for(let E=0,y=b.length;E<y;E+=3){const A=b[E+0],R=b[E+1],C=b[E+2];f.push(A,R,R,C,C,A)}}else if(g!==void 0){const b=g.array;S=g.version;for(let E=0,y=b.length/3-1;E<y;E+=3){const A=E+0,R=E+1,C=E+2;f.push(A,R,R,C,C,A)}}else return;const p=new(bl(f)?Rl:Al)(f,1);p.version=S;const u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Af(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*a,g),e.update(m,n,g))}function h(f,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let u=0;u<g;u++)p+=m[u];e.update(p,n,1)}function d(f,m,g,S){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/a,m[u],S[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,S,0,g);let u=0;for(let b=0;b<g;b++)u+=m[b]*S[b];e.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Rf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Cf(i,t,e){const n=new WeakMap,s=new ce;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let x=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var m=x;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),S===!0&&(y=2),p===!0&&(y=3);let A=o.attributes.position.count*y,R=1;A>t.maxTextureSize&&(R=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const C=new Float32Array(A*R*4*d),L=new Tl(C,A,R,d);L.type=hn,L.needsUpdate=!0;const M=y*4;for(let w=0;w<d;w++){const B=u[w],k=b[w],G=E[w],$=A*R*4*w;for(let q=0;q<B.count;q++){const j=q*M;g===!0&&(s.fromBufferAttribute(B,q),C[$+j+0]=s.x,C[$+j+1]=s.y,C[$+j+2]=s.z,C[$+j+3]=0),S===!0&&(s.fromBufferAttribute(k,q),C[$+j+4]=s.x,C[$+j+5]=s.y,C[$+j+6]=s.z,C[$+j+7]=0),p===!0&&(s.fromBufferAttribute(G,q),C[$+j+8]=s.x,C[$+j+9]=s.y,C[$+j+10]=s.z,C[$+j+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new xt(A,R)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const S=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",S),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Pf(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Bl=new Ae,Uo=new Nl(1,1),zl=new Tl,kl=new th,Hl=new Ll,No=[],Fo=[],Oo=new Float32Array(16),Bo=new Float32Array(9),zo=new Float32Array(4);function bi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=No[s];if(r===void 0&&(r=new Float32Array(s),No[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qs(i,t){let e=Fo[t];e===void 0&&(e=new Int32Array(t),Fo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Df(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function If(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function Uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function Nf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;zo.set(n),i.uniformMatrix2fv(this.addr,!1,zo),me(e,n)}}function Ff(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Bo.set(n),i.uniformMatrix3fv(this.addr,!1,Bo),me(e,n)}}function Of(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Oo.set(n),i.uniformMatrix4fv(this.addr,!1,Oo),me(e,n)}}function Bf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function kf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function Hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function Gf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function Wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function Xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function qf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Uo.compareFunction=El,r=Uo):r=Bl,e.setTexture2D(t||r,s)}function Yf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||kl,s)}function $f(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Hl,s)}function jf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||zl,s)}function Zf(i){switch(i){case 5126:return Lf;case 35664:return Df;case 35665:return If;case 35666:return Uf;case 35674:return Nf;case 35675:return Ff;case 35676:return Of;case 5124:case 35670:return Bf;case 35667:case 35671:return zf;case 35668:case 35672:return kf;case 35669:case 35673:return Hf;case 5125:return Gf;case 36294:return Vf;case 36295:return Wf;case 36296:return Xf;case 35678:case 36198:case 36298:case 36306:case 35682:return qf;case 35679:case 36299:case 36307:return Yf;case 35680:case 36300:case 36308:case 36293:return $f;case 36289:case 36303:case 36311:case 36292:return jf}}function Kf(i,t){i.uniform1fv(this.addr,t)}function Jf(i,t){const e=bi(t,this.size,2);i.uniform2fv(this.addr,e)}function Qf(i,t){const e=bi(t,this.size,3);i.uniform3fv(this.addr,e)}function tp(i,t){const e=bi(t,this.size,4);i.uniform4fv(this.addr,e)}function ep(i,t){const e=bi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function np(i,t){const e=bi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ip(i,t){const e=bi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sp(i,t){i.uniform1iv(this.addr,t)}function rp(i,t){i.uniform2iv(this.addr,t)}function ap(i,t){i.uniform3iv(this.addr,t)}function op(i,t){i.uniform4iv(this.addr,t)}function lp(i,t){i.uniform1uiv(this.addr,t)}function cp(i,t){i.uniform2uiv(this.addr,t)}function hp(i,t){i.uniform3uiv(this.addr,t)}function dp(i,t){i.uniform4uiv(this.addr,t)}function up(i,t,e){const n=this.cache,s=t.length,r=qs(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Bl,r[a])}function fp(i,t,e){const n=this.cache,s=t.length,r=qs(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||kl,r[a])}function pp(i,t,e){const n=this.cache,s=t.length,r=qs(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Hl,r[a])}function mp(i,t,e){const n=this.cache,s=t.length,r=qs(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||zl,r[a])}function gp(i){switch(i){case 5126:return Kf;case 35664:return Jf;case 35665:return Qf;case 35666:return tp;case 35674:return ep;case 35675:return np;case 35676:return ip;case 5124:case 35670:return sp;case 35667:case 35671:return rp;case 35668:case 35672:return ap;case 35669:case 35673:return op;case 5125:return lp;case 36294:return cp;case 36295:return hp;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return up;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}class vp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zf(e.type)}}class _p{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gp(e.type)}}class xp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const wr=/(\w+)(\])?(\[|\.)?/g;function ko(i,t){i.seq.push(t),i.map[t.id]=t}function yp(i,t,e){const n=i.name,s=n.length;for(wr.lastIndex=0;;){const r=wr.exec(n),a=wr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ko(e,c===void 0?new vp(o,i,t):new _p(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new xp(o),ko(e,d)),e=d}}}class Ns{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);yp(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Ho(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Mp=37297;let Sp=0;function Ep(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Go=new Ft;function bp(i){Vt._getMatrix(Go,Vt.workingColorSpace,i);const t=`mat3( ${Go.elements.map(e=>e.toFixed(4))} )`;switch(Vt.getTransfer(i)){case Os:return[t,"LinearTransferOETF"];case Yt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Vo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ep(i.getShaderSource(t),o)}else return r}function Tp(i,t){const e=bp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function wp(i,t){let e;switch(t){case ol:e="Linear";break;case ll:e="Reinhard";break;case cl:e="Cineon";break;case Sa:e="ACESFilmic";break;case dl:e="AgX";break;case ul:e="Neutral";break;case hl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const As=new I;function Ap(){Vt.getLuminanceCoefficients(As);const i=As.x.toFixed(4),t=As.y.toFixed(4),e=As.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fi).join(`
`)}function Cp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Pp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Fi(i){return i!==""}function Wo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Lp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(i){return i.replace(Lp,Ip)}const Dp=new Map;function Ip(i,t){let e=Ot[t];if(e===void 0){const n=Dp.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ya(e)}const Up=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qo(i){return i.replace(Up,Np)}function Np(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yo(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Fp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ln&&(t="SHADOWMAP_TYPE_VSM"),t}function Op(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gi:case vi:t="ENVMAP_TYPE_CUBE";break;case Hs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bp(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===vi&&(t="ENVMAP_MODE_REFRACTION"),t}function zp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case al:t="ENVMAP_BLENDING_MULTIPLY";break;case _c:t="ENVMAP_BLENDING_MIX";break;case xc:t="ENVMAP_BLENDING_ADD";break}return t}function kp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hp(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Fp(e),c=Op(e),h=Bp(e),d=zp(e),f=kp(e),m=Rp(e),g=Cp(r),S=s.createProgram();let p,u,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fi).join(`
`),u.length>0&&(u+=`
`)):(p=[Yo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fi).join(`
`),u=[Yo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==bn?wp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Tp("linearToOutputTexel",e.outputColorSpace),Ap(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fi).join(`
`)),a=ya(a),a=Wo(a,e),a=Xo(a,e),o=ya(o),o=Wo(o,e),o=Xo(o,e),a=qo(a),o=qo(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",e.glslVersion===Ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=b+p+a,y=b+u+o,A=Ho(s,s.VERTEX_SHADER,E),R=Ho(s,s.FRAGMENT_SHADER,y);s.attachShader(S,A),s.attachShader(S,R),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(w){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(S)||"",k=s.getShaderInfoLog(A)||"",G=s.getShaderInfoLog(R)||"",$=B.trim(),q=k.trim(),j=G.trim();let H=!0,rt=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,A,R);else{const ht=Vo(s,A,"vertex"),St=Vo(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+$+`
`+ht+`
`+St)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(q===""||j==="")&&(rt=!1);rt&&(w.diagnostics={runnable:H,programLog:$,vertexShader:{log:q,prefix:p},fragmentShader:{log:j,prefix:u}})}s.deleteShader(A),s.deleteShader(R),L=new Ns(s,S),M=Pp(s,S)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(S,Mp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sp++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=R,this}let Gp=0;class Vp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Wp(t),e.set(t,n)),n}}class Wp{constructor(t){this.id=Gp++,this.code=t,this.usedTimes=0}}function Xp(i,t,e,n,s,r,a){const o=new Da,l=new Vp,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,x,w,B,k){const G=B.fog,$=k.geometry,q=M.isMeshStandardMaterial?B.environment:null,j=(M.isMeshStandardMaterial?e:t).get(M.envMap||q),H=j&&j.mapping===Hs?j.image.height:null,rt=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ht=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,St=ht!==void 0?ht.length:0;let Bt=0;$.morphAttributes.position!==void 0&&(Bt=1),$.morphAttributes.normal!==void 0&&(Bt=2),$.morphAttributes.color!==void 0&&(Bt=3);let ne,Zt,X,at;if(rt){const qt=Ze[rt];ne=qt.vertexShader,Zt=qt.fragmentShader}else ne=M.vertexShader,Zt=M.fragmentShader,l.update(M),X=l.getVertexShaderID(M),at=l.getFragmentShaderID(M);const nt=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),At=k.isInstancedMesh===!0,It=k.isBatchedMesh===!0,he=!!M.map,Gt=!!M.matcap,P=!!j,Qt=!!M.aoMap,bt=!!M.lightMap,Xt=!!M.bumpMap,Mt=!!M.normalMap,ie=!!M.displacementMap,ft=!!M.emissiveMap,zt=!!M.metalnessMap,ge=!!M.roughnessMap,de=M.anisotropy>0,T=M.clearcoat>0,v=M.dispersion>0,F=M.iridescence>0,W=M.sheen>0,Z=M.transmission>0,V=de&&!!M.anisotropyMap,yt=T&&!!M.clearcoatMap,et=T&&!!M.clearcoatNormalMap,gt=T&&!!M.clearcoatRoughnessMap,vt=F&&!!M.iridescenceMap,Q=F&&!!M.iridescenceThicknessMap,ct=W&&!!M.sheenColorMap,Ct=W&&!!M.sheenRoughnessMap,_t=!!M.specularMap,ot=!!M.specularColorMap,Nt=!!M.specularIntensityMap,D=Z&&!!M.transmissionMap,tt=Z&&!!M.thicknessMap,it=!!M.gradientMap,ut=!!M.alphaMap,K=M.alphaTest>0,Y=!!M.alphaHash,mt=!!M.extensions;let Ut=bn;M.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ut=i.toneMapping);const te={shaderID:rt,shaderType:M.type,shaderName:M.name,vertexShader:ne,fragmentShader:Zt,defines:M.defines,customVertexShaderID:X,customFragmentShaderID:at,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:It,batchingColor:It&&k._colorsTexture!==null,instancing:At,instancingColor:At&&k.instanceColor!==null,instancingMorph:At&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:_i,alphaToCoverage:!!M.alphaToCoverage,map:he,matcap:Gt,envMap:P,envMapMode:P&&j.mapping,envMapCubeUVHeight:H,aoMap:Qt,lightMap:bt,bumpMap:Xt,normalMap:Mt,displacementMap:f&&ie,emissiveMap:ft,normalMapObjectSpace:Mt&&M.normalMapType===Ec,normalMapTangentSpace:Mt&&M.normalMapType===Sl,metalnessMap:zt,roughnessMap:ge,anisotropy:de,anisotropyMap:V,clearcoat:T,clearcoatMap:yt,clearcoatNormalMap:et,clearcoatRoughnessMap:gt,dispersion:v,iridescence:F,iridescenceMap:vt,iridescenceThicknessMap:Q,sheen:W,sheenColorMap:ct,sheenRoughnessMap:Ct,specularMap:_t,specularColorMap:ot,specularIntensityMap:Nt,transmission:Z,transmissionMap:D,thicknessMap:tt,gradientMap:it,opaque:M.transparent===!1&&M.blending===ui&&M.alphaToCoverage===!1,alphaMap:ut,alphaTest:K,alphaHash:Y,combine:M.combine,mapUv:he&&S(M.map.channel),aoMapUv:Qt&&S(M.aoMap.channel),lightMapUv:bt&&S(M.lightMap.channel),bumpMapUv:Xt&&S(M.bumpMap.channel),normalMapUv:Mt&&S(M.normalMap.channel),displacementMapUv:ie&&S(M.displacementMap.channel),emissiveMapUv:ft&&S(M.emissiveMap.channel),metalnessMapUv:zt&&S(M.metalnessMap.channel),roughnessMapUv:ge&&S(M.roughnessMap.channel),anisotropyMapUv:V&&S(M.anisotropyMap.channel),clearcoatMapUv:yt&&S(M.clearcoatMap.channel),clearcoatNormalMapUv:et&&S(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&S(M.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&S(M.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&S(M.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&S(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&S(M.sheenRoughnessMap.channel),specularMapUv:_t&&S(M.specularMap.channel),specularColorMapUv:ot&&S(M.specularColorMap.channel),specularIntensityMapUv:Nt&&S(M.specularIntensityMap.channel),transmissionMapUv:D&&S(M.transmissionMap.channel),thicknessMapUv:tt&&S(M.thicknessMap.channel),alphaMapUv:ut&&S(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Mt||de),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(he||ut),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:wt,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Bt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,decodeVideoTexture:he&&M.map.isVideoTexture===!0&&Vt.getTransfer(M.map.colorSpace)===Yt,decodeVideoTextureEmissive:ft&&M.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(M.emissiveMap.colorSpace)===Yt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===cn,flipSided:M.side===we,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:mt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&M.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return te.vertexUv1s=c.has(1),te.vertexUv2s=c.has(2),te.vertexUv3s=c.has(3),c.clear(),te}function u(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const w in M.defines)x.push(w),x.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(b(x,M),E(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function b(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function E(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function y(M){const x=g[M.type];let w;if(x){const B=Ze[x];w=Wi.clone(B.uniforms)}else w=M.uniforms;return w}function A(M,x){let w;for(let B=0,k=h.length;B<k;B++){const G=h[B];if(G.cacheKey===x){w=G,++w.usedTimes;break}}return w===void 0&&(w=new Hp(i,x,M,r),h.push(w)),w}function R(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:L}}function qp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Yp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $o(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jo(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,m,g,S,p){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:S,group:p},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=S,u.group=p),t++,u}function o(d,f,m,g,S,p){const u=a(d,f,m,g,S,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(d,f,m,g,S,p){const u=a(d,f,m,g,S,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||Yp),n.length>1&&n.sort(f||$o),s.length>1&&s.sort(f||$o)}function h(){for(let d=t,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function $p(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new jo,i.set(n,[a])):s>=r.length?(a=new jo,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function jp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Lt};break;case"SpotLight":e={position:new I,direction:new I,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Zp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Kp=0;function Jp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Qp(i){const t=new jp,e=Zp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new se,a=new se;function o(c){let h=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,g=0,S=0,p=0,u=0,b=0,E=0,y=0,A=0,R=0,C=0;c.sort(Jp);for(let M=0,x=c.length;M<x;M++){const w=c[M],B=w.color,k=w.intensity,G=w.distance,$=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=B.r*k,d+=B.g*k,f+=B.b*k;else if(w.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(w.sh.coefficients[q],k);C++}else if(w.isDirectionalLight){const q=t.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const j=w.shadow,H=e.get(w);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=w.shadow.matrix,b++}n.directional[m]=q,m++}else if(w.isSpotLight){const q=t.get(w);q.position.setFromMatrixPosition(w.matrixWorld),q.color.copy(B).multiplyScalar(k),q.distance=G,q.coneCos=Math.cos(w.angle),q.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),q.decay=w.decay,n.spot[S]=q;const j=w.shadow;if(w.map&&(n.spotLightMap[A]=w.map,A++,j.updateMatrices(w),w.castShadow&&R++),n.spotLightMatrix[S]=j.matrix,w.castShadow){const H=e.get(w);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[S]=H,n.spotShadowMap[S]=$,y++}S++}else if(w.isRectAreaLight){const q=t.get(w);q.color.copy(B).multiplyScalar(k),q.halfWidth.set(w.width*.5,0,0),q.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=q,p++}else if(w.isPointLight){const q=t.get(w);if(q.color.copy(w.color).multiplyScalar(w.intensity),q.distance=w.distance,q.decay=w.decay,w.castShadow){const j=w.shadow,H=e.get(w);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=w.shadow.matrix,E++}n.point[g]=q,g++}else if(w.isHemisphereLight){const q=t.get(w);q.skyColor.copy(w.color).multiplyScalar(k),q.groundColor.copy(w.groundColor).multiplyScalar(k),n.hemi[u]=q,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==S||L.rectAreaLength!==p||L.hemiLength!==u||L.numDirectionalShadows!==b||L.numPointShadows!==E||L.numSpotShadows!==y||L.numSpotMaps!==A||L.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=S,n.rectArea.length=p,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+A-R,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,L.directionalLength=m,L.pointLength=g,L.spotLength=S,L.rectAreaLength=p,L.hemiLength=u,L.numDirectionalShadows=b,L.numPointShadows=E,L.numSpotShadows=y,L.numSpotMaps=A,L.numLightProbes=C,n.version=Kp++)}function l(c,h){let d=0,f=0,m=0,g=0,S=0;const p=h.matrixWorldInverse;for(let u=0,b=c.length;u<b;u++){const E=c[u];if(E.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(E.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(E.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(E.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const y=n.hemi[S];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(p),S++}}}return{setup:o,setupView:l,state:n}}function Zo(i){const t=new Qp(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function tm(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Zo(i),t.set(s,[o])):r>=a.length?(o=new Zo(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const em=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function im(i,t,e){let n=new Ua;const s=new xt,r=new xt,a=new ce,o=new wh({depthPacking:Sc}),l=new Ah,c={},h=e.maxTextureSize,d={[Tn]:we,[we]:Tn,[cn]:cn},f=new _e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:em,fragmentShader:nm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new xe;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Dt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sl;let u=this.type;this.render=function(R,C,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),B=i.state;B.setBlending(dn),B.buffers.depth.getReversed()?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const k=u!==ln&&this.type===ln,G=u===ln&&this.type!==ln;for(let $=0,q=R.length;$<q;$++){const j=R[$],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const rt=H.getFrameExtents();if(s.multiply(rt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,H.mapSize.y=r.y)),H.map===null||k===!0||G===!0){const St=this.type!==ln?{minFilter:Ye,magFilter:Ye}:{};H.map!==null&&H.map.dispose(),H.map=new $e(s.x,s.y,St),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ht=H.getViewportCount();for(let St=0;St<ht;St++){const Bt=H.getViewport(St);a.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),B.viewport(a),H.updateMatrices(j,St),n=H.getFrustum(),y(C,L,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===ln&&b(H,L),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(M,x,w)};function b(R,C){const L=t.update(S);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new $e(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,L,f,S,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,L,m,S,null)}function E(R,C,L,M){let x=null;const w=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)x=w;else if(x=L.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=x.uuid,k=C.uuid;let G=c[B];G===void 0&&(G={},c[B]=G);let $=G[k];$===void 0&&($=x.clone(),G[k]=$,C.addEventListener("dispose",A)),x=$}if(x.visible=C.visible,x.wireframe=C.wireframe,M===ln?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=i.properties.get(x);B.light=L}return x}function y(R,C,L,M,x){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===ln)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const k=t.update(R),G=R.material;if(Array.isArray(G)){const $=k.groups;for(let q=0,j=$.length;q<j;q++){const H=$[q],rt=G[H.materialIndex];if(rt&&rt.visible){const ht=E(R,rt,M,x);R.onBeforeShadow(i,R,C,L,k,ht,H),i.renderBufferDirect(L,null,k,ht,R,H),R.onAfterShadow(i,R,C,L,k,ht,H)}}}else if(G.visible){const $=E(R,G,M,x);R.onBeforeShadow(i,R,C,L,k,$,null),i.renderBufferDirect(L,null,k,$,R,null),R.onAfterShadow(i,R,C,L,k,$,null)}}const B=R.children;for(let k=0,G=B.length;k<G;k++)y(B[k],C,L,M,x)}function A(R){R.target.removeEventListener("dispose",A);for(const L in c){const M=c[L],x=R.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const sm={[Ur]:Nr,[Fr]:zr,[Or]:kr,[mi]:Br,[Nr]:Ur,[zr]:Fr,[kr]:Or,[Br]:mi};function rm(i,t){function e(){let D=!1;const tt=new ce;let it=null;const ut=new ce(0,0,0,0);return{setMask:function(K){it!==K&&!D&&(i.colorMask(K,K,K,K),it=K)},setLocked:function(K){D=K},setClear:function(K,Y,mt,Ut,te){te===!0&&(K*=Ut,Y*=Ut,mt*=Ut),tt.set(K,Y,mt,Ut),ut.equals(tt)===!1&&(i.clearColor(K,Y,mt,Ut),ut.copy(tt))},reset:function(){D=!1,it=null,ut.set(-1,0,0,0)}}}function n(){let D=!1,tt=!1,it=null,ut=null,K=null;return{setReversed:function(Y){if(tt!==Y){const mt=t.get("EXT_clip_control");Y?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT),tt=Y;const Ut=K;K=null,this.setClear(Ut)}},getReversed:function(){return tt},setTest:function(Y){Y?nt(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(Y){it!==Y&&!D&&(i.depthMask(Y),it=Y)},setFunc:function(Y){if(tt&&(Y=sm[Y]),ut!==Y){switch(Y){case Ur:i.depthFunc(i.NEVER);break;case Nr:i.depthFunc(i.ALWAYS);break;case Fr:i.depthFunc(i.LESS);break;case mi:i.depthFunc(i.LEQUAL);break;case Or:i.depthFunc(i.EQUAL);break;case Br:i.depthFunc(i.GEQUAL);break;case zr:i.depthFunc(i.GREATER);break;case kr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=Y}},setLocked:function(Y){D=Y},setClear:function(Y){K!==Y&&(tt&&(Y=1-Y),i.clearDepth(Y),K=Y)},reset:function(){D=!1,it=null,ut=null,K=null,tt=!1}}}function s(){let D=!1,tt=null,it=null,ut=null,K=null,Y=null,mt=null,Ut=null,te=null;return{setTest:function(qt){D||(qt?nt(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(qt){tt!==qt&&!D&&(i.stencilMask(qt),tt=qt)},setFunc:function(qt,en,je){(it!==qt||ut!==en||K!==je)&&(i.stencilFunc(qt,en,je),it=qt,ut=en,K=je)},setOp:function(qt,en,je){(Y!==qt||mt!==en||Ut!==je)&&(i.stencilOp(qt,en,je),Y=qt,mt=en,Ut=je)},setLocked:function(qt){D=qt},setClear:function(qt){te!==qt&&(i.clearStencil(qt),te=qt)},reset:function(){D=!1,tt=null,it=null,ut=null,K=null,Y=null,mt=null,Ut=null,te=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,m=[],g=null,S=!1,p=null,u=null,b=null,E=null,y=null,A=null,R=null,C=new Lt(0,0,0),L=0,M=!1,x=null,w=null,B=null,k=null,G=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=j>=2);let rt=null,ht={};const St=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),ne=new ce().fromArray(St),Zt=new ce().fromArray(Bt);function X(D,tt,it,ut){const K=new Uint8Array(4),Y=i.createTexture();i.bindTexture(D,Y),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let mt=0;mt<it;mt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,K):i.texImage2D(tt+mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,K);return Y}const at={};at[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(mi),Xt(!1),Mt($a),nt(i.CULL_FACE),Qt(dn);function nt(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function wt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function At(D,tt){return d[D]!==tt?(i.bindFramebuffer(D,tt),d[D]=tt,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=tt),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function It(D,tt){let it=m,ut=!1;if(D){it=f.get(tt),it===void 0&&(it=[],f.set(tt,it));const K=D.textures;if(it.length!==K.length||it[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,mt=K.length;Y<mt;Y++)it[Y]=i.COLOR_ATTACHMENT0+Y;it.length=K.length,ut=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,ut=!0);ut&&i.drawBuffers(it)}function he(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const Gt={[Fn]:i.FUNC_ADD,[ec]:i.FUNC_SUBTRACT,[nc]:i.FUNC_REVERSE_SUBTRACT};Gt[ic]=i.MIN,Gt[sc]=i.MAX;const P={[rc]:i.ZERO,[ac]:i.ONE,[oc]:i.SRC_COLOR,[Dr]:i.SRC_ALPHA,[fc]:i.SRC_ALPHA_SATURATE,[dc]:i.DST_COLOR,[cc]:i.DST_ALPHA,[lc]:i.ONE_MINUS_SRC_COLOR,[Ir]:i.ONE_MINUS_SRC_ALPHA,[uc]:i.ONE_MINUS_DST_COLOR,[hc]:i.ONE_MINUS_DST_ALPHA,[pc]:i.CONSTANT_COLOR,[mc]:i.ONE_MINUS_CONSTANT_COLOR,[gc]:i.CONSTANT_ALPHA,[vc]:i.ONE_MINUS_CONSTANT_ALPHA};function Qt(D,tt,it,ut,K,Y,mt,Ut,te,qt){if(D===dn){S===!0&&(wt(i.BLEND),S=!1);return}if(S===!1&&(nt(i.BLEND),S=!0),D!==tc){if(D!==p||qt!==M){if((u!==Fn||y!==Fn)&&(i.blendEquation(i.FUNC_ADD),u=Fn,y=Fn),qt)switch(D){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lr:i.blendFunc(i.ONE,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Za:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ja:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Za:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,E=null,A=null,R=null,C.set(0,0,0),L=0,p=D,M=qt}return}K=K||tt,Y=Y||it,mt=mt||ut,(tt!==u||K!==y)&&(i.blendEquationSeparate(Gt[tt],Gt[K]),u=tt,y=K),(it!==b||ut!==E||Y!==A||mt!==R)&&(i.blendFuncSeparate(P[it],P[ut],P[Y],P[mt]),b=it,E=ut,A=Y,R=mt),(Ut.equals(C)===!1||te!==L)&&(i.blendColor(Ut.r,Ut.g,Ut.b,te),C.copy(Ut),L=te),p=D,M=!1}function bt(D,tt){D.side===cn?wt(i.CULL_FACE):nt(i.CULL_FACE);let it=D.side===we;tt&&(it=!it),Xt(it),D.blending===ui&&D.transparent===!1?Qt(dn):Qt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const ut=D.stencilWrite;o.setTest(ut),ut&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(D){x!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),x=D)}function Mt(D){D!==Jl?(nt(i.CULL_FACE),D!==w&&(D===$a?i.cullFace(i.BACK):D===Ql?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),w=D}function ie(D){D!==B&&(q&&i.lineWidth(D),B=D)}function ft(D,tt,it){D?(nt(i.POLYGON_OFFSET_FILL),(k!==tt||G!==it)&&(i.polygonOffset(tt,it),k=tt,G=it)):wt(i.POLYGON_OFFSET_FILL)}function zt(D){D?nt(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function ge(D){D===void 0&&(D=i.TEXTURE0+$-1),rt!==D&&(i.activeTexture(D),rt=D)}function de(D,tt,it){it===void 0&&(rt===null?it=i.TEXTURE0+$-1:it=rt);let ut=ht[it];ut===void 0&&(ut={type:void 0,texture:void 0},ht[it]=ut),(ut.type!==D||ut.texture!==tt)&&(rt!==it&&(i.activeTexture(it),rt=it),i.bindTexture(D,tt||at[D]),ut.type=D,ut.texture=tt)}function T(){const D=ht[rt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(D){ne.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),ne.copy(D))}function Ct(D){Zt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Zt.copy(D))}function _t(D,tt){let it=c.get(tt);it===void 0&&(it=new WeakMap,c.set(tt,it));let ut=it.get(D);ut===void 0&&(ut=i.getUniformBlockIndex(tt,D.name),it.set(D,ut))}function ot(D,tt){const ut=c.get(tt).get(D);l.get(tt)!==ut&&(i.uniformBlockBinding(tt,ut,D.__bindingPointIndex),l.set(tt,ut))}function Nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},rt=null,ht={},d={},f=new WeakMap,m=[],g=null,S=!1,p=null,u=null,b=null,E=null,y=null,A=null,R=null,C=new Lt(0,0,0),L=0,M=!1,x=null,w=null,B=null,k=null,G=null,ne.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:wt,bindFramebuffer:At,drawBuffers:It,useProgram:he,setBlending:Qt,setMaterial:bt,setFlipSided:Xt,setCullFace:Mt,setLineWidth:ie,setPolygonOffset:ft,setScissorTest:zt,activeTexture:ge,bindTexture:de,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:F,texImage2D:vt,texImage3D:Q,updateUBOMapping:_t,uniformBlockBinding:ot,texStorage2D:et,texStorage3D:gt,texSubImage2D:W,texSubImage3D:Z,compressedTexSubImage2D:V,compressedTexSubImage3D:yt,scissor:ct,viewport:Ct,reset:Nt}}function am(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return m?new OffscreenCanvas(T,v):zs("canvas")}function S(T,v,F){let W=1;const Z=de(T);if((Z.width>F||Z.height>F)&&(W=F/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const V=Math.floor(W*Z.width),yt=Math.floor(W*Z.height);d===void 0&&(d=g(V,yt));const et=v?g(V,yt):d;return et.width=V,et.height=yt,et.getContext("2d").drawImage(T,0,0,V,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+V+"x"+yt+")."),et}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function p(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,v,F,W,Z=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let V=v;if(v===i.RED&&(F===i.FLOAT&&(V=i.R32F),F===i.HALF_FLOAT&&(V=i.R16F),F===i.UNSIGNED_BYTE&&(V=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.R8UI),F===i.UNSIGNED_SHORT&&(V=i.R16UI),F===i.UNSIGNED_INT&&(V=i.R32UI),F===i.BYTE&&(V=i.R8I),F===i.SHORT&&(V=i.R16I),F===i.INT&&(V=i.R32I)),v===i.RG&&(F===i.FLOAT&&(V=i.RG32F),F===i.HALF_FLOAT&&(V=i.RG16F),F===i.UNSIGNED_BYTE&&(V=i.RG8)),v===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RG8UI),F===i.UNSIGNED_SHORT&&(V=i.RG16UI),F===i.UNSIGNED_INT&&(V=i.RG32UI),F===i.BYTE&&(V=i.RG8I),F===i.SHORT&&(V=i.RG16I),F===i.INT&&(V=i.RG32I)),v===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RGB8UI),F===i.UNSIGNED_SHORT&&(V=i.RGB16UI),F===i.UNSIGNED_INT&&(V=i.RGB32UI),F===i.BYTE&&(V=i.RGB8I),F===i.SHORT&&(V=i.RGB16I),F===i.INT&&(V=i.RGB32I)),v===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),F===i.UNSIGNED_INT&&(V=i.RGBA32UI),F===i.BYTE&&(V=i.RGBA8I),F===i.SHORT&&(V=i.RGBA16I),F===i.INT&&(V=i.RGBA32I)),v===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),v===i.RGBA){const yt=Z?Os:Vt.getTransfer(W);F===i.FLOAT&&(V=i.RGBA32F),F===i.HALF_FLOAT&&(V=i.RGBA16F),F===i.UNSIGNED_BYTE&&(V=yt===Yt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function y(T,v){let F;return T?v===null||v===kn||v===ki?F=i.DEPTH24_STENCIL8:v===hn?F=i.DEPTH32F_STENCIL8:v===zi&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===kn||v===ki?F=i.DEPTH_COMPONENT24:v===hn?F=i.DEPTH_COMPONENT32F:v===zi&&(F=i.DEPTH_COMPONENT16),F}function A(T,v){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ye&&T.minFilter!==Ke?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function R(T){const v=T.target;v.removeEventListener("dispose",R),L(v),v.isVideoTexture&&h.delete(v)}function C(T){const v=T.target;v.removeEventListener("dispose",C),x(v)}function L(T){const v=n.get(T);if(v.__webglInit===void 0)return;const F=T.source,W=f.get(F);if(W){const Z=W[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(T),Object.keys(W).length===0&&f.delete(F)}n.remove(T)}function M(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const F=T.source,W=f.get(F);delete W[v.__cacheKey],a.memory.textures--}function x(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let Z=0;Z<v.__webglFramebuffer[W].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[W][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)i.deleteFramebuffer(v.__webglFramebuffer[W]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=T.textures;for(let W=0,Z=F.length;W<Z;W++){const V=n.get(F[W]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(F[W])}n.remove(T)}let w=0;function B(){w=0}function k(){const T=w;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),w+=1,T}function G(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function $(T,v){const F=n.get(T);if(T.isVideoTexture&&zt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const W=T.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(F,T,v);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function q(T,v){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){at(F,T,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function j(T,v){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){at(F,T,v);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function H(T,v){const F=n.get(T);if(T.version>0&&F.__version!==T.version){nt(F,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}const rt={[Vr]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[Wr]:i.MIRRORED_REPEAT},ht={[Ye]:i.NEAREST,[yc]:i.NEAREST_MIPMAP_NEAREST,[es]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[Zs]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},St={[bc]:i.NEVER,[Pc]:i.ALWAYS,[Tc]:i.LESS,[El]:i.LEQUAL,[wc]:i.EQUAL,[Cc]:i.GEQUAL,[Ac]:i.GREATER,[Rc]:i.NOTEQUAL};function Bt(T,v){if(v.type===hn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ke||v.magFilter===Zs||v.magFilter===es||v.magFilter===zn||v.minFilter===Ke||v.minFilter===Zs||v.minFilter===es||v.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,rt[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,rt[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,rt[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ht[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,St[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ye||v.minFilter!==es&&v.minFilter!==zn||v.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ne(T,v){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",R));const W=v.source;let Z=f.get(W);Z===void 0&&(Z={},f.set(W,Z));const V=G(v);if(V!==T.__cacheKey){Z[V]===void 0&&(Z[V]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Z[V].usedTimes++;const yt=Z[T.__cacheKey];yt!==void 0&&(Z[T.__cacheKey].usedTimes--,yt.usedTimes===0&&M(v)),T.__cacheKey=V,T.__webglTexture=Z[V].texture}return F}function Zt(T,v,F){return Math.floor(Math.floor(T/F)/v)}function X(T,v,F,W){const V=T.updateRanges;if(V.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,F,W,v.data);else{V.sort((Q,ct)=>Q.start-ct.start);let yt=0;for(let Q=1;Q<V.length;Q++){const ct=V[yt],Ct=V[Q],_t=ct.start+ct.count,ot=Zt(Ct.start,v.width,4),Nt=Zt(ct.start,v.width,4);Ct.start<=_t+1&&ot===Nt&&Zt(Ct.start+Ct.count-1,v.width,4)===ot?ct.count=Math.max(ct.count,Ct.start+Ct.count-ct.start):(++yt,V[yt]=Ct)}V.length=yt+1;const et=i.getParameter(i.UNPACK_ROW_LENGTH),gt=i.getParameter(i.UNPACK_SKIP_PIXELS),vt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Q=0,ct=V.length;Q<ct;Q++){const Ct=V[Q],_t=Math.floor(Ct.start/4),ot=Math.ceil(Ct.count/4),Nt=_t%v.width,D=Math.floor(_t/v.width),tt=ot,it=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,Nt,D,tt,it,F,W,v.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,et),i.pixelStorei(i.UNPACK_SKIP_PIXELS,gt),i.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function at(T,v,F){let W=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=i.TEXTURE_3D);const Z=ne(T,v),V=v.source;e.bindTexture(W,T.__webglTexture,i.TEXTURE0+F);const yt=n.get(V);if(V.version!==yt.__version||Z===!0){e.activeTexture(i.TEXTURE0+F);const et=Vt.getPrimaries(Vt.workingColorSpace),gt=v.colorSpace===En?null:Vt.getPrimaries(v.colorSpace),vt=v.colorSpace===En||et===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Q=S(v.image,!1,s.maxTextureSize);Q=ge(v,Q);const ct=r.convert(v.format,v.colorSpace),Ct=r.convert(v.type);let _t=E(v.internalFormat,ct,Ct,v.colorSpace,v.isVideoTexture);Bt(W,v);let ot;const Nt=v.mipmaps,D=v.isVideoTexture!==!0,tt=yt.__version===void 0||Z===!0,it=V.dataReady,ut=A(v,Q);if(v.isDepthTexture)_t=y(v.format===Gi,v.type),tt&&(D?e.texStorage2D(i.TEXTURE_2D,1,_t,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,_t,Q.width,Q.height,0,ct,Ct,null));else if(v.isDataTexture)if(Nt.length>0){D&&tt&&e.texStorage2D(i.TEXTURE_2D,ut,_t,Nt[0].width,Nt[0].height);for(let K=0,Y=Nt.length;K<Y;K++)ot=Nt[K],D?it&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ot.width,ot.height,ct,Ct,ot.data):e.texImage2D(i.TEXTURE_2D,K,_t,ot.width,ot.height,0,ct,Ct,ot.data);v.generateMipmaps=!1}else D?(tt&&e.texStorage2D(i.TEXTURE_2D,ut,_t,Q.width,Q.height),it&&X(v,Q,ct,Ct)):e.texImage2D(i.TEXTURE_2D,0,_t,Q.width,Q.height,0,ct,Ct,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){D&&tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,_t,Nt[0].width,Nt[0].height,Q.depth);for(let K=0,Y=Nt.length;K<Y;K++)if(ot=Nt[K],v.format!==We)if(ct!==null)if(D){if(it)if(v.layerUpdates.size>0){const mt=wo(ot.width,ot.height,v.format,v.type);for(const Ut of v.layerUpdates){const te=ot.data.subarray(Ut*mt/ot.data.BYTES_PER_ELEMENT,(Ut+1)*mt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Ut,ot.width,ot.height,1,ct,te)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ot.width,ot.height,Q.depth,ct,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,_t,ot.width,ot.height,Q.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?it&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,ot.width,ot.height,Q.depth,ct,Ct,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,_t,ot.width,ot.height,Q.depth,0,ct,Ct,ot.data)}else{D&&tt&&e.texStorage2D(i.TEXTURE_2D,ut,_t,Nt[0].width,Nt[0].height);for(let K=0,Y=Nt.length;K<Y;K++)ot=Nt[K],v.format!==We?ct!==null?D?it&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,ot.width,ot.height,ct,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,K,_t,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?it&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ot.width,ot.height,ct,Ct,ot.data):e.texImage2D(i.TEXTURE_2D,K,_t,ot.width,ot.height,0,ct,Ct,ot.data)}else if(v.isDataArrayTexture)if(D){if(tt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,_t,Q.width,Q.height,Q.depth),it)if(v.layerUpdates.size>0){const K=wo(Q.width,Q.height,v.format,v.type);for(const Y of v.layerUpdates){const mt=Q.data.subarray(Y*K/Q.data.BYTES_PER_ELEMENT,(Y+1)*K/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,ct,Ct,mt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ct,Ct,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,Q.width,Q.height,Q.depth,0,ct,Ct,Q.data);else if(v.isData3DTexture)D?(tt&&e.texStorage3D(i.TEXTURE_3D,ut,_t,Q.width,Q.height,Q.depth),it&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ct,Ct,Q.data)):e.texImage3D(i.TEXTURE_3D,0,_t,Q.width,Q.height,Q.depth,0,ct,Ct,Q.data);else if(v.isFramebufferTexture){if(tt)if(D)e.texStorage2D(i.TEXTURE_2D,ut,_t,Q.width,Q.height);else{let K=Q.width,Y=Q.height;for(let mt=0;mt<ut;mt++)e.texImage2D(i.TEXTURE_2D,mt,_t,K,Y,0,ct,Ct,null),K>>=1,Y>>=1}}else if(Nt.length>0){if(D&&tt){const K=de(Nt[0]);e.texStorage2D(i.TEXTURE_2D,ut,_t,K.width,K.height)}for(let K=0,Y=Nt.length;K<Y;K++)ot=Nt[K],D?it&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,ct,Ct,ot):e.texImage2D(i.TEXTURE_2D,K,_t,ct,Ct,ot);v.generateMipmaps=!1}else if(D){if(tt){const K=de(Q);e.texStorage2D(i.TEXTURE_2D,ut,_t,K.width,K.height)}it&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,Ct,Q)}else e.texImage2D(i.TEXTURE_2D,0,_t,ct,Ct,Q);p(v)&&u(W),yt.__version=V.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function nt(T,v,F){if(v.image.length!==6)return;const W=ne(T,v),Z=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const V=n.get(Z);if(Z.version!==V.__version||W===!0){e.activeTexture(i.TEXTURE0+F);const yt=Vt.getPrimaries(Vt.workingColorSpace),et=v.colorSpace===En?null:Vt.getPrimaries(v.colorSpace),gt=v.colorSpace===En||yt===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const vt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,ct=[];for(let Y=0;Y<6;Y++)!vt&&!Q?ct[Y]=S(v.image[Y],!0,s.maxCubemapSize):ct[Y]=Q?v.image[Y].image:v.image[Y],ct[Y]=ge(v,ct[Y]);const Ct=ct[0],_t=r.convert(v.format,v.colorSpace),ot=r.convert(v.type),Nt=E(v.internalFormat,_t,ot,v.colorSpace),D=v.isVideoTexture!==!0,tt=V.__version===void 0||W===!0,it=Z.dataReady;let ut=A(v,Ct);Bt(i.TEXTURE_CUBE_MAP,v);let K;if(vt){D&&tt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Nt,Ct.width,Ct.height);for(let Y=0;Y<6;Y++){K=ct[Y].mipmaps;for(let mt=0;mt<K.length;mt++){const Ut=K[mt];v.format!==We?_t!==null?D?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,mt,0,0,Ut.width,Ut.height,_t,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,mt,Nt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,mt,0,0,Ut.width,Ut.height,_t,ot,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,mt,Nt,Ut.width,Ut.height,0,_t,ot,Ut.data)}}}else{if(K=v.mipmaps,D&&tt){K.length>0&&ut++;const Y=de(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Nt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){D?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ct[Y].width,ct[Y].height,_t,ot,ct[Y].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Nt,ct[Y].width,ct[Y].height,0,_t,ot,ct[Y].data);for(let mt=0;mt<K.length;mt++){const te=K[mt].image[Y].image;D?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,mt+1,0,0,te.width,te.height,_t,ot,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,mt+1,Nt,te.width,te.height,0,_t,ot,te.data)}}else{D?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,_t,ot,ct[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Nt,_t,ot,ct[Y]);for(let mt=0;mt<K.length;mt++){const Ut=K[mt];D?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,mt+1,0,0,_t,ot,Ut.image[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,mt+1,Nt,_t,ot,Ut.image[Y])}}}p(v)&&u(i.TEXTURE_CUBE_MAP),V.__version=Z.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function wt(T,v,F,W,Z,V){const yt=r.convert(F.format,F.colorSpace),et=r.convert(F.type),gt=E(F.internalFormat,yt,et,F.colorSpace),vt=n.get(v),Q=n.get(F);if(Q.__renderTarget=v,!vt.__hasExternalTextures){const ct=Math.max(1,v.width>>V),Ct=Math.max(1,v.height>>V);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,V,gt,ct,Ct,v.depth,0,yt,et,null):e.texImage2D(Z,V,gt,ct,Ct,0,yt,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),ft(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Z,Q.__webglTexture,0,ie(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Z,Q.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(T,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const W=v.depthTexture,Z=W&&W.isDepthTexture?W.type:null,V=y(v.stencilBuffer,Z),yt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=ie(v);ft(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,V,v.width,v.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,et,V,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,V,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,T)}else{const W=v.textures;for(let Z=0;Z<W.length;Z++){const V=W[Z],yt=r.convert(V.format,V.colorSpace),et=r.convert(V.type),gt=E(V.internalFormat,yt,et,V.colorSpace),vt=ie(v);F&&ft(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,gt,v.width,v.height):ft(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,gt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,gt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const Z=W.__webglTexture,V=ie(v);if(v.depthTexture.format===Hi)ft(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(v.depthTexture.format===Gi)ft(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function he(T){const v=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const W=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=W}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const W=T.texture.mipmaps;W&&W.length>0?It(v.__webglFramebuffer[0],T):It(v.__webglFramebuffer,T)}else if(F){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=i.createRenderbuffer(),At(v.__webglDepthbuffer[W],T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,V)}}else{const W=T.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),At(v.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,V)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(T,v,F){const W=n.get(T);v!==void 0&&wt(W.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&he(T)}function P(T){const v=T.texture,F=n.get(T),W=n.get(v);T.addEventListener("dispose",C);const Z=T.textures,V=T.isWebGLCubeRenderTarget===!0,yt=Z.length>1;if(yt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=v.version,a.memory.textures++),V){F.__webglFramebuffer=[];for(let et=0;et<6;et++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[et]=[];for(let gt=0;gt<v.mipmaps.length;gt++)F.__webglFramebuffer[et][gt]=i.createFramebuffer()}else F.__webglFramebuffer[et]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let et=0;et<v.mipmaps.length;et++)F.__webglFramebuffer[et]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(yt)for(let et=0,gt=Z.length;et<gt;et++){const vt=n.get(Z[et]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ft(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let et=0;et<Z.length;et++){const gt=Z[et];F.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[et]);const vt=r.convert(gt.format,gt.colorSpace),Q=r.convert(gt.type),ct=E(gt.internalFormat,vt,Q,gt.colorSpace,T.isXRRenderTarget===!0),Ct=ie(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,ct,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,F.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),At(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,v);for(let et=0;et<6;et++)if(v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)wt(F.__webglFramebuffer[et][gt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,gt);else wt(F.__webglFramebuffer[et],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);p(v)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let et=0,gt=Z.length;et<gt;et++){const vt=Z[et],Q=n.get(vt);let ct=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,Q.__webglTexture),Bt(ct,vt),wt(F.__webglFramebuffer,T,vt,i.COLOR_ATTACHMENT0+et,ct,0),p(vt)&&u(ct)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(et=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,W.__webglTexture),Bt(et,v),v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)wt(F.__webglFramebuffer[gt],T,v,i.COLOR_ATTACHMENT0,et,gt);else wt(F.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,et,0);p(v)&&u(et),e.unbindTexture()}T.depthBuffer&&he(T)}function Qt(T){const v=T.textures;for(let F=0,W=v.length;F<W;F++){const Z=v[F];if(p(Z)){const V=b(T),yt=n.get(Z).__webglTexture;e.bindTexture(V,yt),u(V),e.unbindTexture()}}}const bt=[],Xt=[];function Mt(T){if(T.samples>0){if(ft(T)===!1){const v=T.textures,F=T.width,W=T.height;let Z=i.COLOR_BUFFER_BIT;const V=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(T),et=v.length>1;if(et)for(let vt=0;vt<v.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const gt=T.texture.mipmaps;gt&&gt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let vt=0;vt<v.length;vt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);const Q=n.get(v[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,F,W,0,0,F,W,Z,i.NEAREST),l===!0&&(bt.length=0,Xt.length=0,bt.push(i.COLOR_ATTACHMENT0+vt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(bt.push(V),Xt.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let vt=0;vt<v.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);const Q=n.get(v[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Q,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ie(T){return Math.min(s.maxSamples,T.samples)}function ft(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function zt(T){const v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function ge(T,v){const F=T.colorSpace,W=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==_i&&F!==En&&(Vt.getTransfer(F)===Yt?(W!==We||Z!==Qe)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function de(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=Gt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=ft}function om(i,t){function e(n,s=En){let r;const a=Vt.getTransfer(s);if(n===Qe)return i.UNSIGNED_BYTE;if(n===ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ta)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pl)return i.BYTE;if(n===ml)return i.SHORT;if(n===zi)return i.UNSIGNED_SHORT;if(n===Ea)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===hn)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===vl)return i.ALPHA;if(n===_l)return i.RGB;if(n===We)return i.RGBA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===xl)return i.RED;if(n===wa)return i.RED_INTEGER;if(n===yl)return i.RG;if(n===Aa)return i.RG_INTEGER;if(n===Ra)return i.RGBA_INTEGER;if(n===Ps||n===Ls||n===Ds||n===Is)if(a===Yt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ps)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ps)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xr||n===qr||n===Yr||n===$r)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$r)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jr||n===Zr||n===Kr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jr||n===Zr)return a===Yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Kr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jr||n===Qr||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===da)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qr)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ta)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ea)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===na)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ia)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sa)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ra)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===aa)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oa)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===la)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ca)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ha)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===da)return a===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Us||n===ua||n===fa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Us)return a===Yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ua)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ml||n===pa||n===ma||n===ga)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Us)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Gl extends Ae{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const lm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Gl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new _e({vertexShader:lm,fragmentShader:cm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new Ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dm extends Si{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null;const S=new hm,p={},u=e.getContextAttributes();let b=null,E=null;const y=[],A=[],R=new xt;let C=null;const L=new Te;L.viewport=new ce;const M=new Te;M.viewport=new ce;const x=[L,M],w=new Lh;let B=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let at=y[X];return at===void 0&&(at=new vr,y[X]=at),at.getTargetRaySpace()},this.getControllerGrip=function(X){let at=y[X];return at===void 0&&(at=new vr,y[X]=at),at.getGripSpace()},this.getHand=function(X){let at=y[X];return at===void 0&&(at=new vr,y[X]=at),at.getHandSpace()};function G(X){const at=A.indexOf(X.inputSource);if(at===-1)return;const nt=y[at];nt!==void 0&&(nt.update(X.inputSource,X.frame,c||a),nt.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",q);for(let X=0;X<y.length;X++){const at=A[X];at!==null&&(A[X]=null,y[X].disconnect(at))}B=null,k=null,S.reset();for(const X in p)delete p[X];t.setRenderTarget(b),m=null,f=null,d=null,s=null,E=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",$),s.addEventListener("inputsourceschange",q),u.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(R),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(s,e)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,wt=null,At=null;u.depth&&(At=u.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=u.stencil?Gi:Hi,wt=u.stencil?ki:kn);const It={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};f=d.createProjectionLayer(It),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new $e(f.textureWidth,f.textureHeight,{format:We,type:Qe,depthTexture:new Nl(f.textureWidth,f.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:u.stencil,colorSpace:t.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const nt={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new $e(m.framebufferWidth,m.framebufferHeight,{format:We,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(X){for(let at=0;at<X.removed.length;at++){const nt=X.removed[at],wt=A.indexOf(nt);wt>=0&&(A[wt]=null,y[wt].disconnect(nt))}for(let at=0;at<X.added.length;at++){const nt=X.added[at];let wt=A.indexOf(nt);if(wt===-1){for(let It=0;It<y.length;It++)if(It>=A.length){A.push(nt),wt=It;break}else if(A[It]===null){A[It]=nt,wt=It;break}if(wt===-1)break}const At=y[wt];At&&At.connect(nt)}}const j=new I,H=new I;function rt(X,at,nt){j.setFromMatrixPosition(at.matrixWorld),H.setFromMatrixPosition(nt.matrixWorld);const wt=j.distanceTo(H),At=at.projectionMatrix.elements,It=nt.projectionMatrix.elements,he=At[14]/(At[10]-1),Gt=At[14]/(At[10]+1),P=(At[9]+1)/At[5],Qt=(At[9]-1)/At[5],bt=(At[8]-1)/At[0],Xt=(It[8]+1)/It[0],Mt=he*bt,ie=he*Xt,ft=wt/(-bt+Xt),zt=ft*-bt;if(at.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(zt),X.translateZ(ft),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),At[10]===-1)X.projectionMatrix.copy(at.projectionMatrix),X.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const ge=he+ft,de=Gt+ft,T=Mt-zt,v=ie+(wt-zt),F=P*Gt/de*ge,W=Qt*Gt/de*ge;X.projectionMatrix.makePerspective(T,v,F,W,ge,de),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ht(X,at){at===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(at.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let at=X.near,nt=X.far;S.texture!==null&&(S.depthNear>0&&(at=S.depthNear),S.depthFar>0&&(nt=S.depthFar)),w.near=M.near=L.near=at,w.far=M.far=L.far=nt,(B!==w.near||k!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),B=w.near,k=w.far),w.layers.mask=X.layers.mask|6,L.layers.mask=w.layers.mask&3,M.layers.mask=w.layers.mask&5;const wt=X.parent,At=w.cameras;ht(w,wt);for(let It=0;It<At.length;It++)ht(At[It],wt);At.length===2?rt(w,L,M):w.projectionMatrix.copy(L.projectionMatrix),St(X,w,wt)};function St(X,at,nt){nt===null?X.matrix.copy(at.matrixWorld):(X.matrix.copy(nt.matrixWorld),X.matrix.invert(),X.matrix.multiply(at.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(at.projectionMatrix),X.projectionMatrixInverse.copy(at.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Vi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(w)},this.getCameraTexture=function(X){return p[X]};let Bt=null;function ne(X,at){if(h=at.getViewerPose(c||a),g=at,h!==null){const nt=h.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let wt=!1;nt.length!==w.cameras.length&&(w.cameras.length=0,wt=!0);for(let Gt=0;Gt<nt.length;Gt++){const P=nt[Gt];let Qt=null;if(m!==null)Qt=m.getViewport(P);else{const Xt=d.getViewSubImage(f,P);Qt=Xt.viewport,Gt===0&&(t.setRenderTargetTextures(E,Xt.colorTexture,Xt.depthStencilTexture),t.setRenderTarget(E))}let bt=x[Gt];bt===void 0&&(bt=new Te,bt.layers.enable(Gt),bt.viewport=new ce,x[Gt]=bt),bt.matrix.fromArray(P.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(P.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Gt===0&&(w.matrix.copy(bt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),wt===!0&&w.cameras.push(bt)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&d){const Gt=d.getDepthInformation(nt[0]);Gt&&Gt.isValid&&Gt.texture&&S.init(Gt,s.renderState)}if(At&&At.includes("camera-access")&&(t.state.unbindTexture(),d))for(let Gt=0;Gt<nt.length;Gt++){const P=nt[Gt].camera;if(P){let Qt=p[P];Qt||(Qt=new Gl,p[P]=Qt);const bt=d.getCameraImage(P);Qt.sourceTexture=bt}}}for(let nt=0;nt<y.length;nt++){const wt=A[nt],At=y[nt];wt!==null&&At!==void 0&&At.update(wt,at,c||a)}Bt&&Bt(X,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}const Zt=new Ol;Zt.setAnimationLoop(ne),this.setAnimationLoop=function(X){Bt=X},this.dispose=function(){}}}const In=new tn,um=new se;function fm(i,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Cl(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,b,E,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),S(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,b,E):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===we&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===we&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=t.get(u),E=b.envMap,y=b.envMapRotation;E&&(p.envMap.value=E,In.copy(y),In.x*=-1,In.y*=-1,In.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),p.envMapRotation.value.setFromMatrix4(um.makeRotationFromEuler(In)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,E){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=E*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===we&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function S(p,u){const b=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function pm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const y=E.program;n.uniformBlockBinding(b,y)}function c(b,E){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",p));const A=E.program;n.updateUBOMapping(b,A);const R=t.render.frame;r[b.id]!==R&&(f(b),r[b.id]=R)}function h(b){const E=d();b.__bindingPointIndex=E;const y=i.createBuffer(),A=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const E=s[b.id],y=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,C=y.length;R<C;R++){const L=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,x=L.length;M<x;M++){const w=L[M];if(m(w,R,M,A)===!0){const B=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let G=0;for(let $=0;$<k.length;$++){const q=k[$],j=S(q);typeof q=="number"||typeof q=="boolean"?(w.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,B+G,w.__data)):q.isMatrix3?(w.__data[0]=q.elements[0],w.__data[1]=q.elements[1],w.__data[2]=q.elements[2],w.__data[3]=0,w.__data[4]=q.elements[3],w.__data[5]=q.elements[4],w.__data[6]=q.elements[5],w.__data[7]=0,w.__data[8]=q.elements[6],w.__data[9]=q.elements[7],w.__data[10]=q.elements[8],w.__data[11]=0):(q.toArray(w.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,E,y,A){const R=b.value,C=E+"_"+y;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{const L=A[C];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return A[C]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(b){const E=b.uniforms;let y=0;const A=16;for(let C=0,L=E.length;C<L;C++){const M=Array.isArray(E[C])?E[C]:[E[C]];for(let x=0,w=M.length;x<w;x++){const B=M[x],k=Array.isArray(B.value)?B.value:[B.value];for(let G=0,$=k.length;G<$;G++){const q=k[G],j=S(q),H=y%A,rt=H%j.boundary,ht=H+rt;y+=rt,ht!==0&&A-ht<j.storage&&(y+=A-ht),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=j.storage}}}const R=y%A;return R>0&&(y+=A-R),b.__size=y,b.__cache={},this}function S(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function p(b){const E=b.target;E.removeEventListener("dispose",p);const y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function u(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}class Ys{constructor(t={}){const{canvas:e=Yc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),S=new Int32Array(4);let p=null,u=null;const b=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let A=!1;this._outputColorSpace=Ue;let R=0,C=0,L=null,M=-1,x=null;const w=new ce,B=new ce;let k=null;const G=new Lt(0);let $=0,q=e.width,j=e.height,H=1,rt=null,ht=null;const St=new ce(0,0,q,j),Bt=new ce(0,0,q,j);let ne=!1;const Zt=new Ua;let X=!1,at=!1;const nt=new se,wt=new I,At=new ce,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let he=!1;function Gt(){return L===null?H:1}let P=n;function Qt(_,U){return e.getContext(_,U)}try{const _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ma}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",K,!1),P===null){const U="webgl2";if(P=Qt(U,_),P===null)throw Qt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let bt,Xt,Mt,ie,ft,zt,ge,de,T,v,F,W,Z,V,yt,et,gt,vt,Q,ct,Ct,_t,ot,Nt;function D(){bt=new Tf(P),bt.init(),_t=new om(P,bt),Xt=new _f(P,bt,t,_t),Mt=new rm(P,bt),Xt.reversedDepthBuffer&&f&&Mt.buffers.depth.setReversed(!0),ie=new Rf(P),ft=new qp,zt=new am(P,bt,Mt,ft,Xt,_t,ie),ge=new yf(y),de=new bf(y),T=new Ih(P),ot=new gf(P,T),v=new wf(P,T,ie,ot),F=new Pf(P,v,T,ie),Q=new Cf(P,Xt,zt),et=new xf(ft),W=new Xp(y,ge,de,bt,Xt,ot,et),Z=new fm(y,ft),V=new $p,yt=new tm(bt),vt=new mf(y,ge,de,Mt,F,m,l),gt=new im(y,F,Xt),Nt=new pm(P,ie,Xt,Mt),ct=new vf(P,bt,ie),Ct=new Af(P,bt,ie),ie.programs=W.programs,y.capabilities=Xt,y.extensions=bt,y.properties=ft,y.renderLists=V,y.shadowMap=gt,y.state=Mt,y.info=ie}D();const tt=new dm(y,P);this.xr=tt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const _=bt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=bt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(_){_!==void 0&&(H=_,this.setSize(q,j,!1))},this.getSize=function(_){return _.set(q,j)},this.setSize=function(_,U,O=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=_,j=U,e.width=Math.floor(_*H),e.height=Math.floor(U*H),O===!0&&(e.style.width=_+"px",e.style.height=U+"px"),this.setViewport(0,0,_,U)},this.getDrawingBufferSize=function(_){return _.set(q*H,j*H).floor()},this.setDrawingBufferSize=function(_,U,O){q=_,j=U,H=O,e.width=Math.floor(_*O),e.height=Math.floor(U*O),this.setViewport(0,0,_,U)},this.getCurrentViewport=function(_){return _.copy(w)},this.getViewport=function(_){return _.copy(St)},this.setViewport=function(_,U,O,z){_.isVector4?St.set(_.x,_.y,_.z,_.w):St.set(_,U,O,z),Mt.viewport(w.copy(St).multiplyScalar(H).round())},this.getScissor=function(_){return _.copy(Bt)},this.setScissor=function(_,U,O,z){_.isVector4?Bt.set(_.x,_.y,_.z,_.w):Bt.set(_,U,O,z),Mt.scissor(B.copy(Bt).multiplyScalar(H).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(_){Mt.setScissorTest(ne=_)},this.setOpaqueSort=function(_){rt=_},this.setTransparentSort=function(_){ht=_},this.getClearColor=function(_){return _.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor(...arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha(...arguments)},this.clear=function(_=!0,U=!0,O=!0){let z=0;if(_){let N=!1;if(L!==null){const J=L.texture.format;N=J===Ra||J===Aa||J===wa}if(N){const J=L.texture.type,lt=J===Qe||J===kn||J===zi||J===ki||J===ba||J===Ta,pt=vt.getClearColor(),dt=vt.getClearAlpha(),Rt=pt.r,Pt=pt.g,Et=pt.b;lt?(g[0]=Rt,g[1]=Pt,g[2]=Et,g[3]=dt,P.clearBufferuiv(P.COLOR,0,g)):(S[0]=Rt,S[1]=Pt,S[2]=Et,S[3]=dt,P.clearBufferiv(P.COLOR,0,S))}else z|=P.COLOR_BUFFER_BIT}U&&(z|=P.DEPTH_BUFFER_BIT),O&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",K,!1),vt.dispose(),V.dispose(),yt.dispose(),ft.dispose(),ge.dispose(),de.dispose(),F.dispose(),ot.dispose(),Nt.dispose(),W.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",je),tt.removeEventListener("sessionend",Ga),wn.stop()};function it(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const _=ie.autoReset,U=gt.enabled,O=gt.autoUpdate,z=gt.needsUpdate,N=gt.type;D(),ie.autoReset=_,gt.enabled=U,gt.autoUpdate=O,gt.needsUpdate=z,gt.type=N}function K(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Y(_){const U=_.target;U.removeEventListener("dispose",Y),mt(U)}function mt(_){Ut(_),ft.remove(_)}function Ut(_){const U=ft.get(_).programs;U!==void 0&&(U.forEach(function(O){W.releaseProgram(O)}),_.isShaderMaterial&&W.releaseShaderCache(_))}this.renderBufferDirect=function(_,U,O,z,N,J){U===null&&(U=It);const lt=N.isMesh&&N.matrixWorld.determinant()<0,pt=Xl(_,U,O,z,N);Mt.setMaterial(z,lt);let dt=O.index,Rt=1;if(z.wireframe===!0){if(dt=v.getWireframeAttribute(O),dt===void 0)return;Rt=2}const Pt=O.drawRange,Et=O.attributes.position;let kt=Pt.start*Rt,jt=(Pt.start+Pt.count)*Rt;J!==null&&(kt=Math.max(kt,J.start*Rt),jt=Math.min(jt,(J.start+J.count)*Rt)),dt!==null?(kt=Math.max(kt,0),jt=Math.min(jt,dt.count)):Et!=null&&(kt=Math.max(kt,0),jt=Math.min(jt,Et.count));const le=jt-kt;if(le<0||le===1/0)return;ot.setup(N,z,pt,O,dt);let ee,Kt=ct;if(dt!==null&&(ee=T.get(dt),Kt=Ct,Kt.setIndex(ee)),N.isMesh)z.wireframe===!0?(Mt.setLineWidth(z.wireframeLinewidth*Gt()),Kt.setMode(P.LINES)):Kt.setMode(P.TRIANGLES);else if(N.isLine){let Tt=z.linewidth;Tt===void 0&&(Tt=1),Mt.setLineWidth(Tt*Gt()),N.isLineSegments?Kt.setMode(P.LINES):N.isLineLoop?Kt.setMode(P.LINE_LOOP):Kt.setMode(P.LINE_STRIP)}else N.isPoints?Kt.setMode(P.POINTS):N.isSprite&&Kt.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)fi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Kt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Tt=N._multiDrawStarts,re=N._multiDrawCounts,Wt=N._multiDrawCount,Pe=dt?T.get(dt).bytesPerElement:1,Xn=ft.get(z).currentProgram.getUniforms();for(let Le=0;Le<Wt;Le++)Xn.setValue(P,"_gl_DrawID",Le),Kt.render(Tt[Le]/Pe,re[Le])}else if(N.isInstancedMesh)Kt.renderInstances(kt,le,N.count);else if(O.isInstancedBufferGeometry){const Tt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,re=Math.min(O.instanceCount,Tt);Kt.renderInstances(kt,le,re)}else Kt.render(kt,le)};function te(_,U,O){_.transparent===!0&&_.side===cn&&_.forceSinglePass===!1?(_.side=we,_.needsUpdate=!0,ts(_,U,O),_.side=Tn,_.needsUpdate=!0,ts(_,U,O),_.side=cn):ts(_,U,O)}this.compile=function(_,U,O=null){O===null&&(O=_),u=yt.get(O),u.init(U),E.push(u),O.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),_!==O&&_.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(u.pushLight(N),N.castShadow&&u.pushShadow(N))}),u.setupLights();const z=new Set;return _.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const J=N.material;if(J)if(Array.isArray(J))for(let lt=0;lt<J.length;lt++){const pt=J[lt];te(pt,O,N),z.add(pt)}else te(J,O,N),z.add(J)}),u=E.pop(),z},this.compileAsync=function(_,U,O=null){const z=this.compile(_,U,O);return new Promise(N=>{function J(){if(z.forEach(function(lt){ft.get(lt).currentProgram.isReady()&&z.delete(lt)}),z.size===0){N(_);return}setTimeout(J,10)}bt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let qt=null;function en(_){qt&&qt(_)}function je(){wn.stop()}function Ga(){wn.start()}const wn=new Ol;wn.setAnimationLoop(en),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(_){qt=_,tt.setAnimationLoop(_),_===null?wn.stop():wn.start()},tt.addEventListener("sessionstart",je),tt.addEventListener("sessionend",Ga),this.render=function(_,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(U),U=tt.getCamera()),_.isScene===!0&&_.onBeforeRender(y,_,U,L),u=yt.get(_,E.length),u.init(U),E.push(u),nt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Zt.setFromProjectionMatrix(nt,Je,U.reversedDepth),at=this.localClippingEnabled,X=et.init(this.clippingPlanes,at),p=V.get(_,b.length),p.init(),b.push(p),tt.enabled===!0&&tt.isPresenting===!0){const J=y.xr.getDepthSensingMesh();J!==null&&$s(J,U,-1/0,y.sortObjects)}$s(_,U,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(rt,ht),he=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,he&&vt.addToRenderList(p,_),this.info.render.frame++,X===!0&&et.beginShadows();const O=u.state.shadowsArray;gt.render(O,_,U),X===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,N=p.transmissive;if(u.setupLights(),U.isArrayCamera){const J=U.cameras;if(N.length>0)for(let lt=0,pt=J.length;lt<pt;lt++){const dt=J[lt];Wa(z,N,_,dt)}he&&vt.render(_);for(let lt=0,pt=J.length;lt<pt;lt++){const dt=J[lt];Va(p,_,dt,dt.viewport)}}else N.length>0&&Wa(z,N,_,U),he&&vt.render(_),Va(p,_,U);L!==null&&C===0&&(zt.updateMultisampleRenderTarget(L),zt.updateRenderTargetMipmap(L)),_.isScene===!0&&_.onAfterRender(y,_,U),ot.resetDefaultState(),M=-1,x=null,E.pop(),E.length>0?(u=E[E.length-1],X===!0&&et.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function $s(_,U,O,z){if(_.visible===!1)return;if(_.layers.test(U.layers)){if(_.isGroup)O=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(U);else if(_.isLight)u.pushLight(_),_.castShadow&&u.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Zt.intersectsSprite(_)){z&&At.setFromMatrixPosition(_.matrixWorld).applyMatrix4(nt);const lt=F.update(_),pt=_.material;pt.visible&&p.push(_,lt,pt,O,At.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Zt.intersectsObject(_))){const lt=F.update(_),pt=_.material;if(z&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),At.copy(_.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),At.copy(lt.boundingSphere.center)),At.applyMatrix4(_.matrixWorld).applyMatrix4(nt)),Array.isArray(pt)){const dt=lt.groups;for(let Rt=0,Pt=dt.length;Rt<Pt;Rt++){const Et=dt[Rt],kt=pt[Et.materialIndex];kt&&kt.visible&&p.push(_,lt,kt,O,At.z,Et)}}else pt.visible&&p.push(_,lt,pt,O,At.z,null)}}const J=_.children;for(let lt=0,pt=J.length;lt<pt;lt++)$s(J[lt],U,O,z)}function Va(_,U,O,z){const N=_.opaque,J=_.transmissive,lt=_.transparent;u.setupLightsView(O),X===!0&&et.setGlobalState(y.clippingPlanes,O),z&&Mt.viewport(w.copy(z)),N.length>0&&Qi(N,U,O),J.length>0&&Qi(J,U,O),lt.length>0&&Qi(lt,U,O),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Wa(_,U,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[z.id]===void 0&&(u.state.transmissionRenderTarget[z.id]=new $e(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?un:Qe,minFilter:zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));const J=u.state.transmissionRenderTarget[z.id],lt=z.viewport||w;J.setSize(lt.z*y.transmissionResolutionScale,lt.w*y.transmissionResolutionScale);const pt=y.getRenderTarget(),dt=y.getActiveCubeFace(),Rt=y.getActiveMipmapLevel();y.setRenderTarget(J),y.getClearColor(G),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),he&&vt.render(O);const Pt=y.toneMapping;y.toneMapping=bn;const Et=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),u.setupLightsView(z),X===!0&&et.setGlobalState(y.clippingPlanes,z),Qi(_,O,z),zt.updateMultisampleRenderTarget(J),zt.updateRenderTargetMipmap(J),bt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let jt=0,le=U.length;jt<le;jt++){const ee=U[jt],Kt=ee.object,Tt=ee.geometry,re=ee.material,Wt=ee.group;if(re.side===cn&&Kt.layers.test(z.layers)){const Pe=re.side;re.side=we,re.needsUpdate=!0,Xa(Kt,O,z,Tt,re,Wt),re.side=Pe,re.needsUpdate=!0,kt=!0}}kt===!0&&(zt.updateMultisampleRenderTarget(J),zt.updateRenderTargetMipmap(J))}y.setRenderTarget(pt,dt,Rt),y.setClearColor(G,$),Et!==void 0&&(z.viewport=Et),y.toneMapping=Pt}function Qi(_,U,O){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,J=_.length;N<J;N++){const lt=_[N],pt=lt.object,dt=lt.geometry,Rt=lt.group;let Pt=lt.material;Pt.allowOverride===!0&&z!==null&&(Pt=z),pt.layers.test(O.layers)&&Xa(pt,U,O,dt,Pt,Rt)}}function Xa(_,U,O,z,N,J){_.onBeforeRender(y,U,O,z,N,J),_.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),N.onBeforeRender(y,U,O,z,_,J),N.transparent===!0&&N.side===cn&&N.forceSinglePass===!1?(N.side=we,N.needsUpdate=!0,y.renderBufferDirect(O,U,z,N,_,J),N.side=Tn,N.needsUpdate=!0,y.renderBufferDirect(O,U,z,N,_,J),N.side=cn):y.renderBufferDirect(O,U,z,N,_,J),_.onAfterRender(y,U,O,z,N,J)}function ts(_,U,O){U.isScene!==!0&&(U=It);const z=ft.get(_),N=u.state.lights,J=u.state.shadowsArray,lt=N.state.version,pt=W.getParameters(_,N.state,J,U,O),dt=W.getProgramCacheKey(pt);let Rt=z.programs;z.environment=_.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(_.isMeshStandardMaterial?de:ge).get(_.envMap||z.environment),z.envMapRotation=z.environment!==null&&_.envMap===null?U.environmentRotation:_.envMapRotation,Rt===void 0&&(_.addEventListener("dispose",Y),Rt=new Map,z.programs=Rt);let Pt=Rt.get(dt);if(Pt!==void 0){if(z.currentProgram===Pt&&z.lightsStateVersion===lt)return Ya(_,pt),Pt}else pt.uniforms=W.getUniforms(_),_.onBeforeCompile(pt,y),Pt=W.acquireProgram(pt,dt),Rt.set(dt,Pt),z.uniforms=pt.uniforms;const Et=z.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Et.clippingPlanes=et.uniform),Ya(_,pt),z.needsLights=Yl(_),z.lightsStateVersion=lt,z.needsLights&&(Et.ambientLightColor.value=N.state.ambient,Et.lightProbe.value=N.state.probe,Et.directionalLights.value=N.state.directional,Et.directionalLightShadows.value=N.state.directionalShadow,Et.spotLights.value=N.state.spot,Et.spotLightShadows.value=N.state.spotShadow,Et.rectAreaLights.value=N.state.rectArea,Et.ltc_1.value=N.state.rectAreaLTC1,Et.ltc_2.value=N.state.rectAreaLTC2,Et.pointLights.value=N.state.point,Et.pointLightShadows.value=N.state.pointShadow,Et.hemisphereLights.value=N.state.hemi,Et.directionalShadowMap.value=N.state.directionalShadowMap,Et.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Et.spotShadowMap.value=N.state.spotShadowMap,Et.spotLightMatrix.value=N.state.spotLightMatrix,Et.spotLightMap.value=N.state.spotLightMap,Et.pointShadowMap.value=N.state.pointShadowMap,Et.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Pt,z.uniformsList=null,Pt}function qa(_){if(_.uniformsList===null){const U=_.currentProgram.getUniforms();_.uniformsList=Ns.seqWithValue(U.seq,_.uniforms)}return _.uniformsList}function Ya(_,U){const O=ft.get(_);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Xl(_,U,O,z,N){U.isScene!==!0&&(U=It),zt.resetTextureUnits();const J=U.fog,lt=z.isMeshStandardMaterial?U.environment:null,pt=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:_i,dt=(z.isMeshStandardMaterial?de:ge).get(z.envMap||lt),Rt=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Pt=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Et=!!O.morphAttributes.position,kt=!!O.morphAttributes.normal,jt=!!O.morphAttributes.color;let le=bn;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(le=y.toneMapping);const ee=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Kt=ee!==void 0?ee.length:0,Tt=ft.get(z),re=u.state.lights;if(X===!0&&(at===!0||_!==x)){const Se=_===x&&z.id===M;et.setState(z,_,Se)}let Wt=!1;z.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==re.state.version||Tt.outputColorSpace!==pt||N.isBatchedMesh&&Tt.batching===!1||!N.isBatchedMesh&&Tt.batching===!0||N.isBatchedMesh&&Tt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Tt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Tt.instancing===!1||!N.isInstancedMesh&&Tt.instancing===!0||N.isSkinnedMesh&&Tt.skinning===!1||!N.isSkinnedMesh&&Tt.skinning===!0||N.isInstancedMesh&&Tt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Tt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Tt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Tt.instancingMorph===!1&&N.morphTexture!==null||Tt.envMap!==dt||z.fog===!0&&Tt.fog!==J||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==et.numPlanes||Tt.numIntersection!==et.numIntersection)||Tt.vertexAlphas!==Rt||Tt.vertexTangents!==Pt||Tt.morphTargets!==Et||Tt.morphNormals!==kt||Tt.morphColors!==jt||Tt.toneMapping!==le||Tt.morphTargetsCount!==Kt)&&(Wt=!0):(Wt=!0,Tt.__version=z.version);let Pe=Tt.currentProgram;Wt===!0&&(Pe=ts(z,U,N));let Xn=!1,Le=!1,wi=!1;const ae=Pe.getUniforms(),Ne=Tt.uniforms;if(Mt.useProgram(Pe.program)&&(Xn=!0,Le=!0,wi=!0),z.id!==M&&(M=z.id,Le=!0),Xn||x!==_){Mt.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),ae.setValue(P,"projectionMatrix",_.projectionMatrix),ae.setValue(P,"viewMatrix",_.matrixWorldInverse);const Re=ae.map.cameraPosition;Re!==void 0&&Re.setValue(P,wt.setFromMatrixPosition(_.matrixWorld)),Xt.logarithmicDepthBuffer&&ae.setValue(P,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ae.setValue(P,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,Le=!0,wi=!0)}if(N.isSkinnedMesh){ae.setOptional(P,N,"bindMatrix"),ae.setOptional(P,N,"bindMatrixInverse");const Se=N.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),ae.setValue(P,"boneTexture",Se.boneTexture,zt))}N.isBatchedMesh&&(ae.setOptional(P,N,"batchingTexture"),ae.setValue(P,"batchingTexture",N._matricesTexture,zt),ae.setOptional(P,N,"batchingIdTexture"),ae.setValue(P,"batchingIdTexture",N._indirectTexture,zt),ae.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&ae.setValue(P,"batchingColorTexture",N._colorsTexture,zt));const Fe=O.morphAttributes;if((Fe.position!==void 0||Fe.normal!==void 0||Fe.color!==void 0)&&Q.update(N,O,Pe),(Le||Tt.receiveShadow!==N.receiveShadow)&&(Tt.receiveShadow=N.receiveShadow,ae.setValue(P,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ne.envMap.value=dt,Ne.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Ne.envMapIntensity.value=U.environmentIntensity),Le&&(ae.setValue(P,"toneMappingExposure",y.toneMappingExposure),Tt.needsLights&&ql(Ne,wi),J&&z.fog===!0&&Z.refreshFogUniforms(Ne,J),Z.refreshMaterialUniforms(Ne,z,H,j,u.state.transmissionRenderTarget[_.id]),Ns.upload(P,qa(Tt),Ne,zt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ns.upload(P,qa(Tt),Ne,zt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ae.setValue(P,"center",N.center),ae.setValue(P,"modelViewMatrix",N.modelViewMatrix),ae.setValue(P,"normalMatrix",N.normalMatrix),ae.setValue(P,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Se=z.uniformsGroups;for(let Re=0,js=Se.length;Re<js;Re++){const An=Se[Re];Nt.update(An,Pe),Nt.bind(An,Pe)}}return Pe}function ql(_,U){_.ambientLightColor.needsUpdate=U,_.lightProbe.needsUpdate=U,_.directionalLights.needsUpdate=U,_.directionalLightShadows.needsUpdate=U,_.pointLights.needsUpdate=U,_.pointLightShadows.needsUpdate=U,_.spotLights.needsUpdate=U,_.spotLightShadows.needsUpdate=U,_.rectAreaLights.needsUpdate=U,_.hemisphereLights.needsUpdate=U}function Yl(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(_,U,O){const z=ft.get(_);z.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),ft.get(_.texture).__webglTexture=U,ft.get(_.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:O,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,U){const O=ft.get(_);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0};const $l=P.createFramebuffer();this.setRenderTarget=function(_,U=0,O=0){L=_,R=U,C=O;let z=!0,N=null,J=!1,lt=!1;if(_){const dt=ft.get(_);if(dt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(dt.__webglFramebuffer===void 0)zt.setupRenderTarget(_);else if(dt.__hasExternalTextures)zt.rebindTextures(_,ft.get(_.texture).__webglTexture,ft.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const Et=_.depthTexture;if(dt.__boundDepthTexture!==Et){if(Et!==null&&ft.has(Et)&&(_.width!==Et.image.width||_.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(_)}}const Rt=_.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(lt=!0);const Pt=ft.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Pt[U])?N=Pt[U][O]:N=Pt[U],J=!0):_.samples>0&&zt.useMultisampledRTT(_)===!1?N=ft.get(_).__webglMultisampledFramebuffer:Array.isArray(Pt)?N=Pt[O]:N=Pt,w.copy(_.viewport),B.copy(_.scissor),k=_.scissorTest}else w.copy(St).multiplyScalar(H).floor(),B.copy(Bt).multiplyScalar(H).floor(),k=ne;if(O!==0&&(N=$l),Mt.bindFramebuffer(P.FRAMEBUFFER,N)&&z&&Mt.drawBuffers(_,N),Mt.viewport(w),Mt.scissor(B),Mt.setScissorTest(k),J){const dt=ft.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,dt.__webglTexture,O)}else if(lt){const dt=U;for(let Rt=0;Rt<_.textures.length;Rt++){const Pt=ft.get(_.textures[Rt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Rt,Pt.__webglTexture,O,dt)}}else if(_!==null&&O!==0){const dt=ft.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,dt.__webglTexture,O)}M=-1},this.readRenderTargetPixels=function(_,U,O,z,N,J,lt,pt=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=ft.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&lt!==void 0&&(dt=dt[lt]),dt){Mt.bindFramebuffer(P.FRAMEBUFFER,dt);try{const Rt=_.textures[pt],Pt=Rt.format,Et=Rt.type;if(!Xt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=_.width-z&&O>=0&&O<=_.height-N&&(_.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pt),P.readPixels(U,O,z,N,_t.convert(Pt),_t.convert(Et),J))}finally{const Rt=L!==null?ft.get(L).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(_,U,O,z,N,J,lt,pt=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=ft.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&lt!==void 0&&(dt=dt[lt]),dt)if(U>=0&&U<=_.width-z&&O>=0&&O<=_.height-N){Mt.bindFramebuffer(P.FRAMEBUFFER,dt);const Rt=_.textures[pt],Pt=Rt.format,Et=Rt.type;if(!Xt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,kt),P.bufferData(P.PIXEL_PACK_BUFFER,J.byteLength,P.STREAM_READ),_.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+pt),P.readPixels(U,O,z,N,_t.convert(Pt),_t.convert(Et),0);const jt=L!==null?ft.get(L).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,jt);const le=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await $c(P,le,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,kt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,J),P.deleteBuffer(kt),P.deleteSync(le),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,U=null,O=0){const z=Math.pow(2,-O),N=Math.floor(_.image.width*z),J=Math.floor(_.image.height*z),lt=U!==null?U.x:0,pt=U!==null?U.y:0;zt.setTexture2D(_,0),P.copyTexSubImage2D(P.TEXTURE_2D,O,0,0,lt,pt,N,J),Mt.unbindTexture()};const jl=P.createFramebuffer(),Zl=P.createFramebuffer();this.copyTextureToTexture=function(_,U,O=null,z=null,N=0,J=null){J===null&&(N!==0?(fi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=N,N=0):J=0);let lt,pt,dt,Rt,Pt,Et,kt,jt,le;const ee=_.isCompressedTexture?_.mipmaps[J]:_.image;if(O!==null)lt=O.max.x-O.min.x,pt=O.max.y-O.min.y,dt=O.isBox3?O.max.z-O.min.z:1,Rt=O.min.x,Pt=O.min.y,Et=O.isBox3?O.min.z:0;else{const Fe=Math.pow(2,-N);lt=Math.floor(ee.width*Fe),pt=Math.floor(ee.height*Fe),_.isDataArrayTexture?dt=ee.depth:_.isData3DTexture?dt=Math.floor(ee.depth*Fe):dt=1,Rt=0,Pt=0,Et=0}z!==null?(kt=z.x,jt=z.y,le=z.z):(kt=0,jt=0,le=0);const Kt=_t.convert(U.format),Tt=_t.convert(U.type);let re;U.isData3DTexture?(zt.setTexture3D(U,0),re=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(zt.setTexture2DArray(U,0),re=P.TEXTURE_2D_ARRAY):(zt.setTexture2D(U,0),re=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Wt=P.getParameter(P.UNPACK_ROW_LENGTH),Pe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Xn=P.getParameter(P.UNPACK_SKIP_PIXELS),Le=P.getParameter(P.UNPACK_SKIP_ROWS),wi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ee.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ee.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Rt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Et);const ae=_.isDataArrayTexture||_.isData3DTexture,Ne=U.isDataArrayTexture||U.isData3DTexture;if(_.isDepthTexture){const Fe=ft.get(_),Se=ft.get(U),Re=ft.get(Fe.__renderTarget),js=ft.get(Se.__renderTarget);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,Re.__webglFramebuffer),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,js.__webglFramebuffer);for(let An=0;An<dt;An++)ae&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ft.get(_).__webglTexture,N,Et+An),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ft.get(U).__webglTexture,J,le+An)),P.blitFramebuffer(Rt,Pt,lt,pt,kt,jt,lt,pt,P.DEPTH_BUFFER_BIT,P.NEAREST);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||_.isRenderTargetTexture||ft.has(_)){const Fe=ft.get(_),Se=ft.get(U);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,jl),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Zl);for(let Re=0;Re<dt;Re++)ae?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Fe.__webglTexture,N,Et+Re):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Fe.__webglTexture,N),Ne?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.__webglTexture,J,le+Re):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Se.__webglTexture,J),N!==0?P.blitFramebuffer(Rt,Pt,lt,pt,kt,jt,lt,pt,P.COLOR_BUFFER_BIT,P.NEAREST):Ne?P.copyTexSubImage3D(re,J,kt,jt,le+Re,Rt,Pt,lt,pt):P.copyTexSubImage2D(re,J,kt,jt,Rt,Pt,lt,pt);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ne?_.isDataTexture||_.isData3DTexture?P.texSubImage3D(re,J,kt,jt,le,lt,pt,dt,Kt,Tt,ee.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(re,J,kt,jt,le,lt,pt,dt,Kt,ee.data):P.texSubImage3D(re,J,kt,jt,le,lt,pt,dt,Kt,Tt,ee):_.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,J,kt,jt,lt,pt,Kt,Tt,ee.data):_.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,J,kt,jt,ee.width,ee.height,Kt,ee.data):P.texSubImage2D(P.TEXTURE_2D,J,kt,jt,lt,pt,Kt,Tt,ee);P.pixelStorei(P.UNPACK_ROW_LENGTH,Wt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Pe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Xn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Le),P.pixelStorei(P.UNPACK_SKIP_IMAGES,wi),J===0&&U.generateMipmaps&&P.generateMipmap(re),Mt.unbindTexture()},this.copyTextureToTexture3D=function(_,U,O=null,z=null,N=0){return fi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,U,O,z,N)},this.initRenderTarget=function(_){ft.get(_).__webglFramebuffer===void 0&&zt.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?zt.setTextureCube(_,0):_.isData3DTexture?zt.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?zt.setTexture2DArray(_,0):zt.setTexture2D(_,0),Mt.unbindTexture()},this.resetState=function(){R=0,C=0,L=null,Mt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Vt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Vt._getUnpackColorSpace()}}function mm(i){const t=new Xe;t.name=i.displayName,t.userData.islandId=i.id,t.userData.hoverTarget=1,t.userData.floatPhase=Math.abs(i.position[0]*.7+i.position[2]*1.4),t.position.set(...i.position);const e=Ar(i.radius,i.height,i.palette.land);e.name=`${i.id}-land`,e.userData.islandId=i.id,e.position.y=i.height*.35,t.add(e);const n=Ar(i.radius*1.12,.08,"#f6e6a9");n.name=`${i.id}-beach`,n.userData.islandId=i.id,n.position.y=i.height*.06,t.add(n);const s=Ar(i.radius*.82,i.height*1.5,i.palette.accent);if(s.name=`${i.id}-base`,s.userData.islandId=i.id,s.position.y=-i.height*.62,t.add(s),vm(t,i),i.emoji){const a=gm(i.emoji);a.name=`${i.id}-emoji`,a.position.y=i.height*.35+1.6,a.scale.set(.7,.7,1),t.add(a)}const r=new Dt(new Vn(i.radius*1.35,.035,8,48),new Ce({color:i.palette.glow,transparent:!0,opacity:0}));return r.name=`${i.id}-selection-ring`,r.rotation.x=Math.PI/2,r.position.y=.04,r.userData.isSelectionRing=!0,r.userData.targetOpacity=0,t.add(r),t}function gm(i){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.font="96px serif",e.textAlign="center",e.textBaseline="middle",e.fillText(i,64,68);const n=new bh(t),s=new Dl({map:n,transparent:!0,depthWrite:!1});return new xh(s)}function Ko(i,t){const e=i.children.find(n=>n.userData.isSelectionRing);e&&(e.userData.targetOpacity=t?.72:0),i.userData.hoverTarget=t?1.07:1}function Ar(i,t,e){const n=new qe(i*.88,i,t,9,1,!1);n.computeVertexNormals();const s=e==="#f6e6a9",r=new oe({color:e,roughness:s?.9:.78,metalness:.02,flatShading:!0});return new Dt(n,r)}function vm(i,t){(Jo[t.id]??Jo.default).forEach((n,s)=>{const r=_m(n,t);r.name=`${t.id}-decor-${s}`,r.userData.islandId=t.id,i.add(r)})}function _m(i,t){if(i.kind==="tree"){const n=new Xe,s=new Dt(new qe(.06,.08,.45,6),new oe({color:"#7a4a2e",roughness:.88,flatShading:!0}));s.position.y=.45;const r=new Dt(new Zi(i.size??.28,.62,7),new oe({color:t.palette.foliage,roughness:.82,flatShading:!0}));return r.position.y=.88,n.add(s,r),n.position.set(i.x,i.y,i.z),n}if(i.kind==="crystal"){const n=new Dt(new Ki(i.size??.25,0),new oe({color:t.palette.glow,emissive:t.palette.glow,emissiveIntensity:.42,roughness:.35,metalness:.1,flatShading:!0}));return n.position.set(i.x,i.y,i.z),n.rotation.set(i.rx??0,i.ry??0,i.rz??0),n}const e=new Dt(new Hn(i.size??.18,0),new oe({color:t.palette.accent,roughness:.88,flatShading:!0}));return e.position.set(i.x,i.y,i.z),e}const Jo={joy:[{kind:"tree",x:-.42,y:.32,z:.12,size:.32},{kind:"tree",x:.48,y:.32,z:-.25,size:.26},{kind:"crystal",x:.1,y:.78,z:.45,size:.2,ry:.7}],sadness:[{kind:"tree",x:-.35,y:.27,z:-.15,size:.27},{kind:"rock",x:.4,y:.37,z:.32,size:.21},{kind:"crystal",x:.06,y:.62,z:.05,size:.16}],anger:[{kind:"crystal",x:-.28,y:.75,z:.2,size:.23,rz:.4},{kind:"rock",x:.36,y:.5,z:-.24,size:.26},{kind:"tree",x:.05,y:.36,z:.45,size:.22}],fear:[{kind:"tree",x:-.45,y:.28,z:-.12,size:.31},{kind:"tree",x:.3,y:.28,z:.28,size:.24},{kind:"crystal",x:.08,y:.68,z:-.38,size:.18}],surprise:[{kind:"crystal",x:-.2,y:.63,z:.38,size:.18,ry:.6},{kind:"tree",x:.34,y:.29,z:-.1,size:.25},{kind:"rock",x:-.46,y:.35,z:-.22,size:.17}],default:[{kind:"tree",x:0,y:.3,z:0,size:.25}]},Fs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ti{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const xm=new za(-1,1,1,-1,0,1);class ym extends xe{constructor(){super(),this.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jt([0,2,0,0,2,0],2))}}const Mm=new ym;class Ha{constructor(t){this._mesh=new Dt(Mm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,xm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Vl extends Ti{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof _e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Wi.clone(t.uniforms),this.material=new _e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ha(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Qo extends Ti{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Sm extends Ti{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Em{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new xt);this._width=n.width,this._height=n.height,e=new $e(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vl(Fs),this.copyPass.material.blending=dn,this.clock=new Ji}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Qo!==void 0&&(a instanceof Qo?n=!0:a instanceof Sm&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class bm extends Ti{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Lt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Tm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Lt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Mi extends Ti{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new xt(t.x,t.y):new xt(256,256),this.clearColor=new Lt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new $e(r,a,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new $e(r,a,{type:un});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new $e(r,a,{type:un});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}const o=Tm;this.highPassUniforms=Wi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _e({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new xt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Wi.clone(Fs.uniforms),this.blendMaterial=new _e({uniforms:this.copyUniforms,vertexShader:Fs.vertexShader,fragmentShader:Fs.fragmentShader,blending:Lr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Lt,this._oldClearAlpha=1,this._basic=new Ce,this._fsQuad=new Ha(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new xt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Mi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Mi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new _e({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new xt(.5,.5)},direction:{value:new xt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new _e({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Mi.BlurDirectionX=new xt(1,0);Mi.BlurDirectionY=new xt(0,1);const Rs={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class wm extends Ti{constructor(){super(),this.uniforms=Wi.clone(Rs.uniforms),this.material=new Th({name:Rs.name,uniforms:this.uniforms,vertexShader:Rs.vertexShader,fragmentShader:Rs.fragmentShader}),this._fsQuad=new Ha(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Vt.getTransfer(this._outputColorSpace)===Yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ol?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ll?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===cl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Sa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===dl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ul?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===hl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Am={uniforms:{tDiffuse:{value:null},darkness:{value:.35},offset:{value:.95}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float darkness;
    uniform float offset;
    varying vec2 vUv;
    void main(){
      vec4 texel = texture2D(tDiffuse, vUv);
      vec2 uv = (vUv - vec2(0.5)) * vec2(offset);
      float vig = clamp(1.0 - dot(uv, uv), 0.0, 1.0);
      texel.rgb *= mix(1.0 - darkness * 0.5, 1.0, vig);
      gl_FragColor = texel;
    }
  `};class Rm{constructor(t,e,n){this.canvasHost=t,this.islands=e,this.callbacks=n,this.clock=new Ji,this.pointer=new xt,this.raycaster=new Fl,this.islandGroups=new Map,this.interactiveMeshes=[],this.waves=[],this.clouds=[],this.completed=new Set,this.keys={},this.playerSpeed=3.8,this.nearIsland=null,this.playerColor="#f59f00",this.playerPos=new I(0,.15,0),this.playerTargetRot=0,this.drag={active:!1,moved:!1,startX:0,startY:0,yaw:-.35,targetYaw:-.35,pitch:.72,targetPitch:.72,distance:9.8,targetDistance:9.8},this.cameraTarget=new I(0,.35,.7),this.cameraFocus=new I(0,.35,.7),this.focusMode="map",this.focusIsland=null,this.hoveredId=null}setPlayerAppearance(t){if(this.playerColor=t??this.playerColor,this.playerGroup){const e=this.playerGroup.getObjectByName("player-body");e&&e.material.color.set(this.playerColor);const n=this.playerGroup.getObjectByName("player-ring");n&&n.material.color.set(this.playerColor)}}mount(){const t=window.matchMedia("(pointer: coarse)").matches;this.isCoarse=t,this.renderer=new Ys({antialias:!t,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(this.getPixelRatio()),this.renderer.setClearColor("#88d5eb",1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=rl,this.renderer.toneMapping=Sa,this.renderer.toneMappingExposure=1.12,this.renderer.outputColorSpace=Ue,this.canvasHost.appendChild(this.renderer.domElement),this.scene=new Vs,this.scene.fog=new Ia("#88d5eb",.032),this.camera=new Te(42,1,.1,100),this.addLights(),this.addSky(),this.addOcean(),this.addIslands(),this.addPlayer(),this.addAmbientMotion(),this.addDustParticles(),this.setupPostProcessing(),this.renderer.domElement.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("resize",this.resize),this.resize(),this.isRunning=!0,this.animate()}dispose(){this.isRunning=!1,this.renderer.domElement.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("resize",this.resize),this.composer?.dispose(),this.renderer.dispose(),this.canvasHost.replaceChildren()}setCompleted(t){this.completed=new Set(t),this.islandGroups.forEach((e,n)=>{const s=e.getObjectByName(`${n}-completion-badge`);s&&(s.visible=this.completed.has(n))})}focusMap(){this.focusMode="map",this.focusIsland=null,this.drag.targetDistance=9.8,this.cameraTarget.set(this.playerPos.x,.35,this.playerPos.z)}focusOnIsland(t){const e=this.islands.find(n=>n.id===t);e&&(this.focusMode="island",this.focusIsland=e,this.drag.targetDistance=4.1,this.cameraTarget.set(e.position[0],.75,e.position[2]))}setupPostProcessing(){const t=new xt;this.renderer.getSize(t),this.composer=new Em(this.renderer),this.composer.addPass(new bm(this.scene,this.camera));const e=this.isCoarse?.18:.32,n=.45,s=.82;this.bloomPass=new Mi(new xt(t.x,t.y),e,n,s),this.composer.addPass(this.bloomPass),this.vignettePass=new Vl(Am),this.composer.addPass(this.vignettePass),this.composer.addPass(new wm)}addLights(){const t=new Xs("#fff6d5","#4a7a96",1.4);this.scene.add(t);const e=new Xi("#ffffff",2.6);e.position.set(-4,8,4),e.castShadow=!0;const n=this.isCoarse?1024:2048;e.shadow.mapSize.set(n,n),e.shadow.camera.left=-10,e.shadow.camera.right=10,e.shadow.camera.top=10,e.shadow.camera.bottom=-10,e.shadow.camera.near=.5,e.shadow.camera.far=30,e.shadow.bias=-4e-4,e.shadow.normalBias=.015,this.scene.add(e),this.sunLight=e;const s=new Xi("#bfe8ff",.32);s.position.set(5,4,-5),this.scene.add(s);const r=new Ph("#88d5eb",.28);this.scene.add(r)}addSky(){const t=new Gn(80,24,16),e=new _e({uniforms:{topColor:{value:new Lt("#b8e6f5")},midColor:{value:new Lt("#88d5eb")},bottomColor:{value:new Lt("#a8dff0")}},vertexShader:"varying vec3 vWorldPosition; void main(){ vec4 wp = modelMatrix*vec4(position,1.0); vWorldPosition = wp.xyz; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 bottomColor;
        varying vec3 vWorldPosition;
        void main(){
          float h = normalize(vWorldPosition).y;
          vec3 color = mix(bottomColor, midColor, smoothstep(-0.2, 0.3, h));
          color = mix(color, topColor, smoothstep(0.3, 0.8, h));
          gl_FragColor = vec4(color, 1.0);
        }
      `,side:we,depthWrite:!1}),n=new Dt(t,e);this.scene.add(n)}addOcean(){this.oceanMat=new _e({uniforms:{time:{value:0},deepColor:{value:new Lt("#2f8fb8")},shallowColor:{value:new Lt("#3caed4")},sunDir:{value:new I(-.4,.7,.4).normalize()},cameraPos:{value:new I}},vertexShader:`
        uniform float time;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec3 vNormal;
        varying vec3 vViewDir;
        void main(){
          vUv = uv;
          vec3 pos = position;
          float w1 = sin(pos.x * 1.1 + time * 0.3) * 0.05;
          float w2 = sin(pos.z * 1.6 + time * 0.45) * 0.035;
          float w3 = sin((pos.x+pos.z)*0.85 + time * 0.2) * 0.025;
          pos.y += w1 + w2 + w3;
          vec3 n = normal;
          vWorldPos = (modelMatrix * vec4(pos,1.0)).xyz;
          vNormal = normalize(normalMatrix * n);
          vViewDir = normalize(cameraPosition - vWorldPos);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
        }
      `,fragmentShader:`
        uniform vec3 deepColor;
        uniform vec3 shallowColor;
        uniform vec3 sunDir;
        varying vec3 vWorldPos;
        varying vec3 vNormal;
        varying vec3 vViewDir;
        void main(){
          float fresnel = pow(1.0 - max(dot(vNormal, vViewDir), 0.0), 3.0);
          vec3 reflDir = reflect(-vViewDir, vNormal);
          float sunRefl = pow(max(dot(reflDir, sunDir), 0.0), 32.0);
          float wave = sin(vWorldPos.x*1.8 + vWorldPos.z*1.2);
          vec3 base = mix(deepColor, shallowColor, 0.5 + wave*0.07);
          vec3 color = mix(base, vec3(0.9, 0.97, 1.0), fresnel * 0.16);
          color += vec3(1.0) * sunRefl * 0.1;
          gl_FragColor = vec4(color, 1.0);
        }
      `});const t=new Dt(new yi(18,80),this.oceanMat);t.name="ocean",t.rotation.x=-Math.PI/2,t.position.y=-.08,t.receiveShadow=!0,this.scene.add(t);for(let e=0;e<8;e+=1){const n=new Dt(new Vn(2.1+e*1.7,.012,6,72),new Ce({color:e%2?"#b7efff":"#e5fbff",transparent:!0,opacity:.14}));n.rotation.x=Math.PI/2,n.position.y=.005,n.userData.waveSpeed=.08+e*.015,n.userData.wavePhase=e*.7,this.scene.add(n),this.waves.push(n)}}addPlayer(){this.playerGroup=new Xe,this.playerGroup.name="player";const t=new Dt(new Na(.18,.35,6,10),new oe({color:this.playerColor,roughness:.6,metalness:.04,flatShading:!0}));t.name="player-body",t.position.y=.35,t.castShadow=!0,this.playerGroup.add(t);const e=new Dt(new Gn(.14,8,6),new oe({color:"#ffe4c4",roughness:.7,flatShading:!0}));e.name="player-head",e.position.y=.72,e.castShadow=!0,this.playerGroup.add(e);const n=new Dt(new Vn(.28,.015,8,24),new Ce({color:this.playerColor,transparent:!0,opacity:.4}));n.name="player-ring",n.rotation.x=Math.PI/2,n.position.y=.02,this.playerGroup.add(n);const s=new Dt(new yi(.22,12),new Ce({color:"#000000",transparent:!0,opacity:.12}));s.rotation.x=-Math.PI/2,s.position.y=.01,this.playerGroup.add(s),this.playerGroup.position.copy(this.playerPos),this.scene.add(this.playerGroup)}addIslands(){this.islands.forEach(t=>{const e=mm(t);e.traverse(s=>{s.isMesh&&(s.castShadow=!0,s.receiveShadow=!0,s.userData.islandId&&this.interactiveMeshes.push(s))});const n=new Dt(new Ki(.18,0),new oe({color:"#fff7a8",emissive:"#ffc247",emissiveIntensity:.45,flatShading:!0}));n.name=`${t.id}-completion-badge`,n.position.set(.72,1.18,.2),n.visible=!1,e.add(n),this.scene.add(e),this.islandGroups.set(t.id,e)})}addAmbientMotion(){const t=new oe({color:"#ffffff",roughness:.9,flatShading:!0,transparent:!0,opacity:.92});for(let e=0;e<7;e+=1){const n=new Xe;for(let s=0;s<3;s+=1){const r=new Dt(new Hn(.22+s*.04,0),t);r.position.x=s*.28,r.position.y=s%2*.08,n.add(r)}n.position.set(-7+e*2.7,3.4+e%2*.45,-5.2-e%3*.9),n.userData.cloudSpeed=.05+e*.006,n.userData.baseY=n.position.y,n.userData.cloudPhase=e*1.11,this.scene.add(n),this.clouds.push(n)}}addDustParticles(){const t=this.isCoarse?40:70,e=new Float32Array(t*3);for(let r=0;r<t;r++)e[r*3]=(Math.random()-.5)*20,e[r*3+1]=Math.random()*4+.5,e[r*3+2]=(Math.random()-.5)*20;const n=new xe;n.setAttribute("position",new ze(e,3));const s=new Ul({color:"#ffffff",size:.018,transparent:!0,opacity:.18,sizeAttenuation:!0,depthWrite:!1});this.dustParticles=new Eh(n,s),this.scene.add(this.dustParticles)}updatePlayer(t,e){if(this.focusMode!=="map")return;let n=0,s=0;if((this.keys.w||this.keys.arrowup)&&(s-=1),(this.keys.s||this.keys.arrowdown)&&(s+=1),(this.keys.a||this.keys.arrowleft)&&(n-=1),(this.keys.d||this.keys.arrowright)&&(n+=1),n!==0||s!==0){const f=Math.sqrt(n*n+s*s);n/=f,s/=f,this.playerPos.x+=n*this.playerSpeed*t,this.playerPos.z+=s*this.playerSpeed*t,this.playerTargetRot=Math.atan2(n,s)}const r=7.5;this.playerPos.x=ns.clamp(this.playerPos.x,-r,r),this.playerPos.z=ns.clamp(this.playerPos.z,-r,r),this.playerGroup.position.x=this.playerPos.x,this.playerGroup.position.z=this.playerPos.z,this.playerGroup.position.y=.15+Math.sin(e*2.2)*.03;const o=(this.playerTargetRot-this.playerGroup.rotation.y+Math.PI)%(Math.PI*2)-Math.PI;this.playerGroup.rotation.y+=o*Math.min(1,t*10);const l=this.playerGroup.getObjectByName("player-body");l&&(l.position.y=.35+Math.sin(e*3.5)*.02);const c=this.playerGroup.getObjectByName("player-ring");c&&(c.rotation.z+=t*.6,c.material.opacity=.3+Math.sin(e*2.5)*.15);let h=null,d=1/0;for(const f of this.islands){const m=new I(...f.position),g=this.playerPos.distanceTo(m);g<f.radius+1.2&&g<d&&(h=f,d=g)}h!==this.nearIsland&&(this.nearIsland=h,this.callbacks.onProximityChange&&this.callbacks.onProximityChange(h)),h?this.setHoveredId(h.id):this.hoveredId&&!this.nearIsland&&this.setHoveredId(null)}updateCamera(t){this.focusMode==="map"&&(this.cameraTarget.set(this.playerPos.x,.35,this.playerPos.z),this.drag.targetYaw+=t*.035);const e=1-Math.exp(-t*4.6),n=1-Math.exp(-t*8.5);this.cameraFocus.lerp(this.cameraTarget,e),this.drag.yaw+=(this.drag.targetYaw-this.drag.yaw)*n,this.drag.pitch+=(this.drag.targetPitch-this.drag.pitch)*n,this.drag.distance+=(this.drag.targetDistance-this.drag.distance)*n;const s=ns.clamp(this.drag.pitch,.46,1.08),r=this.drag.distance,a=this.cameraFocus.x+Math.sin(this.drag.yaw)*Math.cos(s)*r,o=this.cameraFocus.z+Math.cos(this.drag.yaw)*Math.cos(s)*r,l=this.cameraFocus.y+Math.sin(s)*r;this.camera.position.set(a,l,o),this.camera.lookAt(this.cameraFocus)}updatePointerFromEvent(t){const e=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1}pickIsland(){return this.raycaster.setFromCamera(this.pointer,this.camera),this.raycaster.intersectObjects(this.interactiveMeshes,!0).find(n=>n.object.userData.islandId)?.object.userData.islandId??null}onKeyDown=t=>{const e=t.key.toLowerCase();this.keys[e]=!0,(e==="e"||e===" ")&&this.nearIsland&&this.focusMode==="map"&&(t.preventDefault(),this.callbacks.onIslandSelected(this.nearIsland.id))};onKeyUp=t=>{this.keys[t.key.toLowerCase()]=!1};onPointerDown=t=>{this.drag.active=!0,this.drag.moved=!1,this.drag.startX=t.clientX,this.drag.startY=t.clientY,this.updatePointerFromEvent(t)};onPointerMove=t=>{if(this.drag.active){const n=t.clientX-this.drag.startX,s=t.clientY-this.drag.startY;Math.abs(n)+Math.abs(s)>5&&(this.drag.moved=!0),this.drag.targetYaw-=n*.0048,this.drag.targetPitch+=s*.0024,this.drag.targetPitch=ns.clamp(this.drag.targetPitch,.46,1.08),this.drag.startX=t.clientX,this.drag.startY=t.clientY}this.updatePointerFromEvent(t);const e=this.pickIsland();this.setHoveredId(e)};onPointerUp=t=>{if(!this.drag.active)return;this.updatePointerFromEvent(t);const e=this.pickIsland();!this.drag.moved&&e&&this.focusMode==="map"&&this.callbacks.onIslandSelected(e),this.drag.active=!1};setHoveredId(t){this.hoveredId!==t&&(this.hoveredId&&this.islandGroups.has(this.hoveredId)&&Ko(this.islandGroups.get(this.hoveredId),!1),this.hoveredId=t,this.hoveredId&&this.islandGroups.has(this.hoveredId)&&Ko(this.islandGroups.get(this.hoveredId),!0),this.renderer.domElement.style.cursor=t&&this.focusMode==="map"?"pointer":"grab")}resize=()=>{const t=this.canvasHost.getBoundingClientRect(),e=Math.max(1,t.width),n=Math.max(1,t.height);this.renderer.setSize(e,n,!1),this.renderer.setPixelRatio(this.getPixelRatio()),this.camera.aspect=e/n,this.camera.updateProjectionMatrix(),this.composer&&(this.composer.setSize(e,n),this.bloomPass&&this.bloomPass.resolution.set(e,n))};animate=()=>{if(!this.isRunning)return;const t=Math.min(this.clock.getDelta(),.033),e=this.clock.elapsedTime,n=1-Math.exp(-t*9);if(this.updatePlayer(t,e),this.updateCamera(t),this.oceanMat&&(this.oceanMat.uniforms.time.value=e,this.oceanMat.uniforms.cameraPos.value.copy(this.camera.position)),this.waves.forEach(s=>{s.rotation.z+=s.userData.waveSpeed*t,s.position.y=.005+Math.sin(e*.7+s.userData.wavePhase)*.006}),this.clouds.forEach(s=>{s.position.x+=s.userData.cloudSpeed*t,s.position.y=s.userData.baseY+Math.sin(e*.38+s.userData.cloudPhase)*.045,s.position.x>9&&(s.position.x=-9)}),this.dustParticles){const s=this.dustParticles.geometry.attributes.position;for(let r=0;r<s.count;r++){let a=s.getY(r);a+=t*.02,a>4.5&&(a=.3),s.setY(r,a),s.setX(r,s.getX(r)+Math.sin(e*.3+r)*t*.01)}s.needsUpdate=!0}this.islandGroups.forEach((s,r)=>{const a=s.userData.floatPhase;s.position.y=Math.sin(e*.48+a)*.026+Math.sin(e*.91+a*.4)*.01,s.scale.setScalar(s.scale.x+((s.userData.hoverTarget??1)-s.scale.x)*n);const o=s.getObjectByName(`${r}-completion-badge`);o&&(o.rotation.y+=t*1.8,o.position.y=1.18+Math.sin(e*2.2)*.06);const l=s.getObjectByName(`${r}-selection-ring`);l&&(l.rotation.z+=t*.45,l.material.opacity+=((l.userData.targetOpacity??0)-l.material.opacity)*n)}),this.composer?this.composer.render():this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate)};getPixelRatio(){const t=window.matchMedia("(pointer: coarse)").matches;return Math.min(window.devicePixelRatio||1,t?1.25:1.6)}}class Cm{constructor({host:t,island:e,onComplete:n,onExit:s}){this.host=t,this.island=e,this.onComplete=n,this.onExit=s,this.duration=30,this.target=6,this.score=0,this.remaining=this.duration,this.clock=new Ji,this.pointer=new xt,this.raycaster=new Fl,this.stars=[]}mount(){this.root=document.createElement("div"),this.root.className="minigame minigame--joy",this.root.innerHTML=`
      <div class="game-canvas" data-game-canvas></div>
      <section class="game-hud">
        <div>
          <p class="eyebrow">Alegria</p>
          <h2>Destellos en movimiento</h2>
        </div>
        <div class="metric-grid">
          <span><strong data-score>0</strong> / ${this.target}</span>
          <span><strong data-time>${this.duration}</strong>s</span>
        </div>
      </section>
      <div class="game-prompt">Toca los destellos dorados</div>
      <button class="icon-button game-exit" type="button" aria-label="Volver al mapa" title="Volver al mapa">X</button>
    `,this.host.appendChild(this.root),this.canvasHost=this.root.querySelector("[data-game-canvas]"),this.scoreEl=this.root.querySelector("[data-score]"),this.timeEl=this.root.querySelector("[data-time]"),this.root.querySelector(".game-exit").addEventListener("click",this.onExit),this.setupScene(),this.canvasHost.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("resize",this.resize),this.resize(),this.running=!0,this.animate()}dispose(){this.running=!1,window.removeEventListener("resize",this.resize),this.canvasHost?.removeEventListener("pointerdown",this.onPointerDown),this.renderer?.dispose(),this.root?.remove()}setupScene(){this.renderer=new Ys({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(this.getPixelRatio()),this.renderer.setClearColor("#ffe4a3",1),this.renderer.shadowMap.enabled=!0,this.canvasHost.appendChild(this.renderer.domElement),this.scene=new Vs,this.scene.fog=new ji("#ffe4a3",7,18),this.camera=new Te(45,1,.1,80),this.camera.position.set(0,4.2,7.2),this.camera.lookAt(0,.7,0);const t=new Xs("#fff8d0","#c77731",2.1);this.scene.add(t);const e=new Xi("#ffffff",2.4);e.position.set(-3,5,4),e.castShadow=!0,this.scene.add(e);const n=new Dt(new qe(2.25,2.5,.55,10),new oe({color:this.island.palette.land,roughness:.75,flatShading:!0}));n.position.y=-.12,n.receiveShadow=!0,this.scene.add(n);const s=new Dt(new Vn(2.75,.05,8,64),new Ce({color:"#fff6bd",transparent:!0,opacity:.58}));s.rotation.x=Math.PI/2,s.position.y=.1,this.scene.add(s);for(let r=0;r<this.target;r+=1)this.spawnStar(r)}spawnStar(t){const e=new Xe,n=new oe({color:"#fff2a6",emissive:"#ffb000",emissiveIntensity:.65,roughness:.48,flatShading:!0}),s=new Dt(new Ki(.2,0),n),r=new Dt(new Vn(.28,.018,6,18),new Ce({color:"#ffffff",transparent:!0,opacity:.7})),a=new Dt(new Gn(.48,10,10),new Ce({transparent:!0,opacity:0,depthWrite:!1}));r.rotation.x=Math.PI/2,e.add(s,r,a);const o=t/this.target*Math.PI*2,l=.75+t%4*.34;e.position.set(Math.cos(o)*l,.58+t%3*.24,Math.sin(o)*l),e.userData={baseAngle:o,radius:l,phase:t*1.37,radiusWobble:.08+t%3*.045,speed:.65+t%5*.14,bob:1.8+t%4*.32,collected:!1},e.traverse(c=>{c.isMesh&&(c.castShadow=!0,c.userData.star=e)}),this.stars.push(e),this.scene.add(e)}onPointerDown=t=>{const e=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(t.clientX-e.left)/e.width*2-1,this.pointer.y=-((t.clientY-e.top)/e.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.camera);const r=this.raycaster.intersectObjects(this.stars,!0).find(a=>a.object.userData.star&&!a.object.userData.star.userData.collected)?.object.userData.star??this.findNearbyStar(t.clientX,t.clientY,e);r&&this.collectStar(r)};findNearbyStar(t,e,n){let s=null,r=112;const a=new I;return this.stars.forEach(o=>{if(o.userData.collected)return;a.copy(o.position).project(this.camera);const l=n.left+(a.x+1)/2*n.width,c=n.top+(1-a.y)/2*n.height,h=Math.hypot(t-l,e-c);h<r&&(s=o,r=h)}),s}collectStar(t){t.userData.collected=!0,t.visible=!1,this.score+=1,this.scoreEl.textContent=this.score,this.root.classList.add("pulse"),window.setTimeout(()=>this.root?.classList.remove("pulse"),160),this.score>=this.target&&this.finish(!0)}finish(t){this.running&&(this.running=!1,this.onComplete({success:t,score:this.score,target:this.target,islandId:this.island.id,title:t?"Alegria completada":"Buen intento",message:t?"La alegria tambien crece cuando la compartes y notas los pequenos momentos luminosos.":"Cada destello cuenta. Puedes volver cuando quieras y seguir practicando."}))}resize=()=>{const t=this.canvasHost.getBoundingClientRect(),e=Math.max(1,t.width),n=Math.max(1,t.height);this.renderer.setSize(e,n,!1),this.renderer.setPixelRatio(this.getPixelRatio()),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()};animate=()=>{if(!this.running)return;const t=Math.min(this.clock.getDelta(),.033),e=this.clock.elapsedTime;if(this.remaining=Math.max(0,this.duration-e),this.timeEl.textContent=Math.ceil(this.remaining),this.stars.forEach(n=>{if(n.userData.collected)return;const s=n.userData.baseAngle+e*n.userData.speed,r=n.userData.radius+Math.sin(e*1.15+n.userData.phase)*n.userData.radiusWobble;n.position.x=Math.cos(s)*r+Math.sin(e*.7+n.userData.phase)*.14,n.position.z=Math.sin(s*.93)*r+Math.cos(e*.52+n.userData.phase)*.12,n.position.y=.74+Math.sin(e*n.userData.bob+n.userData.baseAngle)*.22,n.rotation.y+=t*2.2,n.rotation.x+=t*.8}),this.camera.position.x+=(Math.sin(e*.25)*.35-this.camera.position.x)*(1-Math.exp(-t*3)),this.camera.lookAt(0,.7,0),this.renderer.render(this.scene,this.camera),this.remaining<=0){this.finish(this.score>=this.target);return}requestAnimationFrame(this.animate)};getPixelRatio(){const t=window.matchMedia("(pointer: coarse)").matches;return Math.min(window.devicePixelRatio||1,t?1.25:1.5)}}class Pm{constructor({host:t,island:e,onComplete:n,onExit:s}){this.host=t,this.island=e,this.onComplete=n,this.onExit=s,this.duration=35,this.remaining=this.duration,this.pressure=35,this.maxPressure=100,this.naturalIncrease=5.5,this.smoothDecrease=4.2,this.fastPenalty=25,this.running=!1,this.clock=new Ji,this.levers=[{id:0,value:.5,target:.3,label:"Respirar",lastY:0,velocity:0,driftDir:1},{id:1,value:.5,target:.7,label:"Pensar",lastY:0,velocity:0,driftDir:-1},{id:2,value:.5,target:.4,label:"Actuar",lastY:0,velocity:0,driftDir:1},{id:3,value:.5,target:.6,label:"Calmar",lastY:0,velocity:0,driftDir:-1}],this.dragging=null,this.speedThreshold=1.5,this.exploded=!1,this.rocks=[],this.vents=[],this.score=0,this.maxRocks=3,this.rockSpawnTimer=0,this.rockSpawnInterval=1.8,this.ventSpawnTimer=0,this.ventSpawnInterval=3.5,this.leverDriftSpeed=.08}mount(){this.root=document.createElement("div"),this.root.className="minigame minigame--volcano",this.root.innerHTML=`
      <div class="game-canvas" data-game-canvas></div>
      <div class="instructions-overlay" data-instructions>
        <section class="instructions-panel">
          <p class="eyebrow">Enojo</p>
          <h2>Control del Volcan</h2>
          <p class="instructions-text">
            Un volcan esta a punto de explotar. Tu objetivo es mantener la presion bajo control durante 35 segundos.
          </p>
          <div class="instructions-list">
            <div class="instruction-item">
              <span class="instruction-icon">🎚️</span>
              <span>Mueve las <strong>4 palancas</strong> hacia su zona verde para bajar la presion. Despacio, no las muevas bruscamente.</span>
            </div>
            <div class="instruction-item">
              <span class="instruction-icon">🔥</span>
              <span>Toca las <strong>rocas de lava</strong> antes de que caigan para reducir presion.</span>
            </div>
            <div class="instruction-item">
              <span class="instruction-icon">💨</span>
              <span>Sella los <strong>respiraderos</strong> que aparecen para evitar que suba la presion.</span>
            </div>
          </div>
          <p class="instructions-warning">Si la presion llega al 100%, el volcan explota.</p>
          <div class="instructions-actions">
            <button class="primary-action" type="button" data-start-game>Comenzar</button>
            <button class="secondary-action" type="button" data-exit-game>Volver</button>
          </div>
        </section>
      </div>
      <section class="game-hud volcano-hud" style="display:none" data-game-hud>
        <div>
          <p class="eyebrow">Enojo</p>
          <h2>Control del Volcan</h2>
        </div>
        <div class="metric-grid">
          <span class="pressure-display"><strong data-pressure>35</strong>% presion</span>
          <span><strong data-time>35</strong>s</span>
        </div>
      </section>
      <div class="pressure-bar-wrap" data-pressure-bar-wrap style="display:none">
        <div class="pressure-bar" data-pressure-bar></div>
        <div class="pressure-zone" data-pressure-zone></div>
        <div class="pressure-marker" data-pressure-marker></div>
      </div>
      <div class="lever-panel" data-lever-panel style="display:none">
        ${this.levers.map(t=>`
          <div class="lever-col" data-lever-col="${t.id}">
            <div class="lever-track" data-lever-track="${t.id}">
              <div class="lever-fill" data-lever-fill="${t.id}"></div>
              <div class="lever-thumb" data-lever-thumb="${t.id}"></div>
              <div class="lever-target" data-lever-target="${t.id}"></div>
            </div>
            <span class="lever-label">${t.label}</span>
          </div>
        `).join("")}
      </div>
      <div class="action-zone" data-action-zone></div>
      <div class="game-prompt volcano-prompt" data-prompt style="display:none">Mantén la presion estable</div>
      <button class="icon-button game-exit" type="button" aria-label="Volver al mapa" title="Volver al mapa" style="display:none" data-exit-x>X</button>
    `,this.host.appendChild(this.root),this.canvasHost=this.root.querySelector("[data-game-canvas]"),this.gameHud=this.root.querySelector("[data-game-hud]"),this.pressureEl=this.root.querySelector("[data-pressure]"),this.timeEl=this.root.querySelector("[data-time]"),this.promptEl=this.root.querySelector("[data-prompt]"),this.pressureBar=this.root.querySelector("[data-pressure-bar]"),this.actionZone=this.root.querySelector("[data-action-zone]"),this.leverPanel=this.root.querySelector("[data-lever-panel]"),this.pressureBarWrap=this.root.querySelector("[data-pressure-bar-wrap]"),this.exitX=this.root.querySelector("[data-exit-x]"),this.root.querySelector("[data-start-game]").addEventListener("click",()=>this.startGame()),this.root.querySelector("[data-exit-game]").addEventListener("click",this.onExit),this.exitX.addEventListener("click",this.onExit),this.levers.forEach(t=>{const e=this.root.querySelector(`[data-lever-track="${t.id}"]`),n=this.root.querySelector(`[data-lever-thumb="${t.id}"]`);t.trackEl=e,t.thumbEl=n,t.fillEl=this.root.querySelector(`[data-lever-fill="${t.id}"]`),t.targetEl=this.root.querySelector(`[data-lever-target="${t.id}"]`);const s=1-t.target;t.targetEl.style.bottom=`${s*100}%`,t.targetEl.style.display="block",n.addEventListener("pointerdown",r=>this.startDrag(r,t.id)),e.addEventListener("pointerdown",r=>this.startDrag(r,t.id))}),window.addEventListener("pointermove",this.onDragMove),window.addEventListener("pointerup",this.onDragEnd),window.addEventListener("resize",this.resize),this.setupScene(),this.resize()}startGame(){const t=this.root.querySelector("[data-instructions]");t&&t.remove(),this.gameHud.style.display="",this.pressureBarWrap.style.display="",this.leverPanel.style.display="",this.promptEl.style.display="",this.exitX.style.display="",this.running=!0,this.animate()}dispose(){this.running=!1,window.removeEventListener("pointermove",this.onDragMove),window.removeEventListener("pointerup",this.onDragEnd),window.removeEventListener("resize",this.resize),this.renderer?.dispose(),this.root?.remove()}setupScene(){this.renderer=new Ys({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(this.getPixelRatio()),this.renderer.setClearColor("#3d1a0a",1),this.renderer.shadowMap.enabled=!0,this.canvasHost.appendChild(this.renderer.domElement),this.scene=new Vs,this.scene.fog=new ji("#3d1a0a",12,28),this.camera=new Te(40,1,.1,80),this.camera.position.set(0,5.5,9),this.camera.lookAt(0,2.5,0);const t=new Xs("#ff9944","#1a0a00",1.6);this.scene.add(t);const e=new Xi("#ffcc88",2.2);e.position.set(-3,8,5),e.castShadow=!0,this.scene.add(e);const n=new Dt(new yi(10,32),new oe({color:"#2a1508",roughness:.95,flatShading:!0}));n.rotation.x=-Math.PI/2,n.position.y=-.1,n.receiveShadow=!0,this.scene.add(n),this.volcanoGroup=new Xe;const s=new Dt(new Zi(2.2,4.5,12),new oe({color:"#5a3018",roughness:.85,flatShading:!0}));s.position.y=2.25,s.castShadow=!0,this.volcanoGroup.add(s);const r=new Dt(new qe(.6,.75,.5,10),new oe({color:"#1a0800",roughness:.9,flatShading:!0}));r.position.y=4.5,this.volcanoGroup.add(r);const a=new Dt(new yi(.55,10),new oe({color:"#ff3300",emissive:"#ff2200",emissiveIntensity:.3,roughness:.6}));a.rotation.x=-Math.PI/2,a.position.y=4.52,this.lavaMesh=a,this.volcanoGroup.add(a);const o=new Dt(new Gn(.8,12,8),new Ce({color:"#ff4400",transparent:!0,opacity:.15}));o.position.y=4.6,this.glowMesh=o,this.volcanoGroup.add(o),this.scene.add(this.volcanoGroup),this.smokeParticles=[];for(let l=0;l<20;l++){const c=new Dt(new Hn(.12+Math.random()*.15,0),new Ce({color:"#888888",transparent:!0,opacity:0}));c.position.set((Math.random()-.5)*.6,4.8+Math.random()*.5,(Math.random()-.5)*.6),c.userData={speed:.4+Math.random()*.6,drift:(Math.random()-.5)*.3,life:Math.random(),maxLife:1.5+Math.random()*1.5},this.scene.add(c),this.smokeParticles.push(c)}}startDrag(t,e){t.preventDefault(),t.stopPropagation(),this.dragging=e,this.levers[e].lastY=t.clientY,this.levers[e].velocity=0,this.root.querySelector(`[data-lever-thumb="${e}"]`).setPointerCapture(t.pointerId)}onDragMove=t=>{if(this.dragging===null)return;const e=this.levers[this.dragging],n=e.trackEl.getBoundingClientRect(),s=t.clientY-e.lastY;e.lastY=t.clientY;const r=n.height,a=-s/r;e.value=Math.max(0,Math.min(1,e.value+a)),e.velocity=Math.abs(a*60),this.updateLeverVisual(e)};onDragEnd=()=>{this.dragging!==null&&(this.levers[this.dragging].velocity=0,this.dragging=null)};updateLeverVisual(t){const e=t.value*100;t.thumbEl.style.bottom=`${e}%`,t.fillEl.style.height=`${e}%`,Math.abs(t.value-t.target)<.15?(t.thumbEl.classList.add("in-zone"),t.thumbEl.classList.remove("out-zone")):(t.thumbEl.classList.remove("in-zone"),t.thumbEl.classList.add("out-zone"))}driftLevers(t){this.levers.forEach(e=>{this.dragging!==e.id&&(e.value+=e.driftDir*this.leverDriftSpeed*t,(e.value>=1||e.value<=0)&&(e.driftDir*=-1),e.value=Math.max(0,Math.min(1,e.value)),this.updateLeverVisual(e))})}spawnRock(){if(this.rocks.length>=this.maxRocks)return;const t={id:Date.now()+Math.random(),x:(Math.random()-.5)*5,z:(Math.random()-.5)*3-1,y:5,vy:0,clicked:!1,element:null},e=document.createElement("button");e.className="lava-rock",e.type="button",e.textContent="🔥",e.addEventListener("pointerdown",n=>{n.preventDefault(),n.stopPropagation(),this.clickRock(t)}),this.actionZone.appendChild(e),t.element=e,this.rocks.push(t)}clickRock(t){t.clicked||(t.clicked=!0,t.element.classList.add("caught"),this.score+=1,this.pressure=Math.max(0,this.pressure-6),setTimeout(()=>{t.element?.remove(),this.rocks=this.rocks.filter(e=>e.id!==t.id)},200))}updateRocks(t){this.rockSpawnTimer+=t,this.rockSpawnTimer>=this.rockSpawnInterval&&(this.rockSpawnTimer=0,this.rockSpawnInterval=Math.max(.8,this.rockSpawnInterval-.08),this.spawnRock()),this.rocks.forEach(e=>{if(e.clicked)return;e.vy+=2.8*t,e.y-=e.vy*t;const n=Math.max(0,Math.min(1,1-e.y/5));e.element.style.left=`${50+e.x*6}%`,e.element.style.top=`${10+n*70}%`,e.y<=0&&!e.clicked&&(e.element.classList.add("missed"),this.pressure+=8,setTimeout(()=>{e.element?.remove(),this.rocks=this.rocks.filter(s=>s.id!==e.id)},300))})}spawnVent(){if(this.vents.length>=2)return;const t=Math.random()*Math.PI*2,e=1.2+Math.random()*.8,n={id:Date.now()+Math.random(),x:Math.cos(t)*e,z:Math.sin(t)*e,life:3,element:null},s=document.createElement("button");s.className="vent-seal",s.type="button",s.textContent="💨",s.style.left=`${50+n.x*10}%`,s.style.top=`${15+n.z*5}%`,s.addEventListener("pointerdown",r=>{r.preventDefault(),r.stopPropagation(),this.sealVent(n)}),this.actionZone.appendChild(s),n.element=s,this.vents.push(n)}sealVent(t){t.sealed||(t.sealed=!0,t.element.classList.add("sealed"),this.score+=2,this.pressure=Math.max(0,this.pressure-10),setTimeout(()=>{t.element?.remove(),this.vents=this.vents.filter(e=>e.id!==t.id)},300))}updateVents(t){this.ventSpawnTimer+=t,this.ventSpawnTimer>=this.ventSpawnInterval&&(this.ventSpawnTimer=0,this.spawnVent()),this.vents.forEach(e=>{if(e.sealed)return;e.life-=t;const n=.7+Math.sin(Date.now()*.008)*.3;e.element.style.opacity=e.life<1?n:1,e.life<=0&&(e.element.classList.add("missed"),this.pressure+=10,setTimeout(()=>{e.element?.remove(),this.vents=this.vents.filter(s=>s.id!==e.id)},300))})}updatePressure(t){let e=0,n=!1;this.levers.forEach(r=>{Math.abs(r.value-r.target)<.15&&(e+=this.smoothDecrease),r.velocity>this.speedThreshold&&(n=!0)}),this.pressure+=this.naturalIncrease*t,this.pressure-=e*t,n&&(this.pressure+=this.fastPenalty*t),this.pressure=Math.max(0,Math.min(this.maxPressure,this.pressure));const s=this.pressure/this.maxPressure;this.pressureBar.style.width=`${s*100}%`,s<.5?this.pressureBar.style.background="linear-gradient(0deg, #72c264, #a8d86e)":s<.75?this.pressureBar.style.background="linear-gradient(0deg, #f59f00, #ffcc00)":this.pressureBar.style.background="linear-gradient(0deg, #e76856, #ff3300)",this.pressureEl.textContent=Math.round(this.pressure),n?(this.promptEl.textContent="¡Despacio! Muy brusco",this.promptEl.classList.add("danger")):s>.8?(this.promptEl.textContent="¡Peligro! Presion alta",this.promptEl.classList.add("danger")):s<.3?(this.promptEl.textContent="¡Bien! Control total",this.promptEl.classList.remove("danger")):(this.promptEl.textContent="Controla las palancas y apaga los focos",this.promptEl.classList.remove("danger")),this.updateVolcanoVisual(s,t),this.pressure>=this.maxPressure&&this.explode()}updateVolcanoVisual(t,e){const n=t;this.lavaMesh.material.emissiveIntensity=.3+n*1.5,this.lavaMesh.material.color.setRGB(1,.2-n*.15,0),this.glowMesh.material.opacity=.05+n*.4,this.glowMesh.scale.setScalar(1+n*.8);const s=n>.7?Math.sin(Date.now()*.02)*n*.04:0;this.volcanoGroup.position.x=s,this.volcanoGroup.position.z=s*.7,this.smokeParticles.forEach(r=>{if(n>.2){r.material.opacity=Math.min(n*.8,r.userData.life/r.userData.maxLife*n),r.position.y+=r.userData.speed*e*(.5+n),r.position.x+=r.userData.drift*e,r.userData.life+=e;const a=1+r.userData.life*n*1.5;r.scale.setScalar(a),(r.userData.life>r.userData.maxLife||r.position.y>8)&&(r.position.set((Math.random()-.5)*.6,4.8,(Math.random()-.5)*.6),r.userData.life=0)}else r.material.opacity=0})}explode(){if(!this.exploded){this.exploded=!0,this.running=!1,this.volcanoGroup.traverse(t=>{t.isMesh&&t!==this.glowMesh&&(t.material.color.set("#ff2200"),t.material.emissive="#ff1100",t.material.emissiveIntensity=.8)});for(let t=0;t<30;t++){const e=new Dt(new Hn(.08+Math.random()*.12,0),new oe({color:"#ff4400",emissive:"#ff2200",emissiveIntensity:1,flatShading:!0}));e.position.set((Math.random()-.5)*.4,4.8,(Math.random()-.5)*.4),e.userData.vel=new I((Math.random()-.5)*5,4+Math.random()*6,(Math.random()-.5)*5),e.userData.life=0,this.scene.add(e),this.smokeParticles.push(e)}this.root.classList.add("screen-shake"),setTimeout(()=>this.finish(!1),1200)}}finish(t){!this.running&&!this.exploded||(this.running=!1,this.onComplete({success:t,score:this.score,target:this.duration,islandId:this.island.id,title:t?"Control del Volcan":"El volcan exploto",message:t?"Mantuviste la calma bajo presion extrema. El autocontrol es poder.":"La presion te gano. Respira y vuelve con mas calma."}))}resize=()=>{const t=this.canvasHost.getBoundingClientRect(),e=Math.max(1,t.width),n=Math.max(1,t.height);this.renderer.setSize(e,n,!1),this.renderer.setPixelRatio(this.getPixelRatio()),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()};animate=()=>{if(!this.running)return;const t=Math.min(this.clock.getDelta(),.033);if(this.driftLevers(t),this.updatePressure(t),this.updateRocks(t),this.updateVents(t),this.remaining=Math.max(0,this.remaining-t),this.timeEl.textContent=Math.ceil(this.remaining),this.remaining<=0){this.finish(!0);return}this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate)};getPixelRatio(){const t=window.matchMedia("(pointer: coarse)").matches;return Math.min(window.devicePixelRatio||1,t?1.25:1.5)}}class Lm{constructor({host:t,island:e,onComplete:n,onExit:s}){this.host=t,this.island=e,this.onComplete=n,this.onExit=s,this.duration=40,this.remaining=this.duration,this.score=0,this.target=8,this.running=!1,this.objects=[],this.spawnTimer=0,this.spawnInterval=2.5,this.maxObjects=4,this.found=0}mount(){this.root=document.createElement("div"),this.root.className="minigame minigame--darkness",this.root.innerHTML=`
      <div class="instructions-overlay" data-instructions>
        <section class="instructions-panel darkness-instructions">
          <p class="eyebrow">Miedo</p>
          <h2>Luz en la Oscuridad</h2>
          <p class="instructions-text">La oscuridad esconde objetos. Usa tu linterna para encontrarlos antes de que desaparezcan.</p>
          <div class="instructions-list">
            <div class="instruction-item"><span class="instruction-icon">🔦</span><span>Mueve la <strong>linterna</strong> por la pantalla para iluminar.</span></div>
            <div class="instruction-item"><span class="instruction-icon">⭐</span><span>Toca los <strong>objetos iluminados</strong> para recolectarlos.</span></div>
            <div class="instruction-item"><span class="instruction-icon">👻</span><span>Evita las <strong>sombras</strong> que quitan tiempo.</span></div>
          </div>
          <div class="instructions-actions">
            <button class="primary-action" type="button" data-start-game>Comenzar</button>
            <button class="secondary-action" type="button" data-exit-game>Volver</button>
          </div>
        </section>
      </div>
      <section class="game-hud darkness-hud" style="display:none" data-game-hud>
        <div><p class="eyebrow">Miedo</p><h2>Luz en la Oscuridad</h2></div>
        <div class="metric-grid">
          <span><strong data-score>0</strong> / ${this.target}</span>
          <span><strong data-time>40</strong>s</span>
        </div>
      </section>
      <div class="darkness-zone" data-darkness-zone style="display:none">
        <div class="darkness-overlay" data-darkness-overlay></div>
        <div class="flashlight" data-flashlight></div>
      </div>
      <div class="game-prompt" data-prompt style="display:none">Busca objetos en la oscuridad</div>
      <button class="icon-button game-exit" type="button" data-exit-x style="display:none">X</button>
    `,this.host.appendChild(this.root),this.darknessZone=this.root.querySelector("[data-darkness-zone]"),this.darknessOverlay=this.root.querySelector("[data-darkness-overlay]"),this.flashlight=this.root.querySelector("[data-flashlight]"),this.scoreEl=this.root.querySelector("[data-score]"),this.timeEl=this.root.querySelector("[data-time]"),this.promptEl=this.root.querySelector("[data-prompt]"),this.gameHud=this.root.querySelector("[data-game-hud]"),this.root.querySelector("[data-start-game]").addEventListener("click",()=>this.startGame()),this.root.querySelector("[data-exit-game]").addEventListener("click",this.onExit),this.root.querySelector("[data-exit-x]").addEventListener("click",this.onExit)}startGame(){this.root.querySelector("[data-instructions]").remove(),this.gameHud.style.display="",this.darknessZone.style.display="",this.promptEl.style.display="",this.root.querySelector("[data-exit-x]").style.display="",this.running=!0,this.startTime=Date.now(),this.darknessZone.addEventListener("pointermove",this.onMove),this.darknessZone.addEventListener("pointerdown",this.onTap),this.spawnObject(),this.animate()}dispose(){this.running=!1,this.darknessZone?.removeEventListener("pointermove",this.onMove),this.darknessZone?.removeEventListener("pointerdown",this.onTap),this.root?.remove()}onMove=t=>{const e=this.darknessZone.getBoundingClientRect(),n=(t.clientX-e.left)/e.width*100,s=(t.clientY-e.top)/e.height*100;this.flashlight.style.left=`${n}%`,this.flashlight.style.top=`${s}%`,this.darknessOverlay.style.maskImage=`radial-gradient(circle 120px at ${n}% ${s}%, transparent 60%, black 100%)`,this.darknessOverlay.style.webkitMaskImage=`radial-gradient(circle 120px at ${n}% ${s}%, transparent 60%, black 100%)`};onTap=t=>{const e=this.darknessZone.getBoundingClientRect(),n=(t.clientX-e.left)/e.width*100,s=(t.clientY-e.top)/e.height*100;this.objects.forEach(r=>{if(r.collected)return;Math.hypot(n-r.x,s-r.y)<15&&this.collectObject(r)})};spawnObject(){if(this.objects.length>=this.maxObjects)return;const t=Math.random()<.25,e={id:Date.now()+Math.random(),x:15+Math.random()*70,y:15+Math.random()*60,type:t?"shadow":"star",life:4+Math.random()*3,element:null},n=document.createElement("button");n.className=`dark-obj dark-${e.type}`,n.type="button",n.textContent=t?"👻":"⭐",n.style.left=`${e.x}%`,n.style.top=`${e.y}%`,n.addEventListener("pointerdown",s=>{s.preventDefault(),s.stopPropagation(),this.collectObject(e)}),this.darknessZone.appendChild(n),e.element=n,this.objects.push(e)}collectObject(t){t.collected||(t.collected=!0,t.type==="star"?(this.score+=1,this.found+=1,this.scoreEl.textContent=this.score,t.element.classList.add("collected")):(this.remaining=Math.max(0,this.remaining-3),t.element.classList.add("scared")),setTimeout(()=>{t.element?.remove(),this.objects=this.objects.filter(e=>e.id!==t.id)},300))}animate=()=>{if(!this.running)return;const t=Date.now(),e=.016;if(this.remaining=Math.max(0,this.duration-(t-this.startTime)/1e3),this.timeEl.textContent=Math.ceil(this.remaining),this.spawnTimer+=e,this.spawnTimer>=this.spawnInterval&&(this.spawnTimer=0,this.spawnObject()),this.objects.forEach(n=>{n.collected||(n.life-=e,n.life<1.5&&(n.element.style.opacity=.3+Math.sin(Date.now()*.01)*.3),n.life<=0&&(n.element?.remove(),this.objects=this.objects.filter(s=>s.id!==n.id)))}),this.score>=this.target){this.finish(!0);return}if(this.remaining<=0){this.finish(this.score>=this.target);return}requestAnimationFrame(this.animate)};finish(t){this.running&&(this.running=!1,this.onComplete({success:t,score:this.score,target:this.target,islandId:this.island.id,title:t?"Luz en la Oscuridad":"Miedo",message:t?"Encontraste la luz dentro del miedo. El coraje no es ausencia de miedo, sino actuar a pesar de el.":"El miedo puede paralizarte, pero siempre puedes volver a intentarlo."}))}}class Dm{constructor({host:t,island:e,onComplete:n,onExit:s}){this.host=t,this.island=e,this.onComplete=n,this.onExit=s,this.duration=30,this.remaining=this.duration,this.score=0,this.target=10,this.running=!1,this.items=[],this.spawnTimer=0,this.spawnInterval=1.2,this.maxItems=5,this.correct=0,this.wrong=0}mount(){this.root=document.createElement("div"),this.root.className="minigame minigame--cleaning",this.root.innerHTML=`
      <div class="instructions-overlay" data-instructions>
        <section class="instructions-panel cleaning-instructions">
          <p class="eyebrow">Desagrado</p>
          <h2>Limpieza Espiritual</h2>
          <p class="instructions-text">Separa lo positivo de lo negativo. Arrastra cada item al lado correcto.</p>
          <div class="instructions-list">
            <div class="instruction-item"><span class="instruction-icon">💚</span><span>Toca los items <strong>verdes</strong> (positivos) para aceptarlos.</span></div>
            <div class="instruction-item"><span class="instruction-icon">💜</span><span>Toca los items <strong>morados</strong> (negativos) para descartarlos.</span></div>
            <div class="instruction-item"><span class="instruction-icon">⏱️</span><span>Cada item tiene tiempo. No dejes que desaparezca.</span></div>
          </div>
          <div class="instructions-actions">
            <button class="primary-action" type="button" data-start-game>Comenzar</button>
            <button class="secondary-action" type="button" data-exit-game>Volver</button>
          </div>
        </section>
      </div>
      <section class="game-hud cleaning-hud" style="display:none" data-game-hud>
        <div><p class="eyebrow">Desagrado</p><h2>Limpieza Espiritual</h2></div>
        <div class="metric-grid">
          <span><strong data-score>0</strong> / ${this.target}</span>
          <span><strong data-time>30</strong>s</span>
        </div>
      </section>
      <div class="cleaning-zone" data-cleaning-zone style="display:none"></div>
      <div class="game-prompt" data-prompt style="display:none">Acepta lo positivo, descarta lo negativo</div>
      <button class="icon-button game-exit" type="button" data-exit-x style="display:none">X</button>
    `,this.host.appendChild(this.root),this.cleaningZone=this.root.querySelector("[data-cleaning-zone]"),this.scoreEl=this.root.querySelector("[data-score]"),this.timeEl=this.root.querySelector("[data-time]"),this.promptEl=this.root.querySelector("[data-prompt]"),this.gameHud=this.root.querySelector("[data-game-hud]"),this.root.querySelector("[data-start-game]").addEventListener("click",()=>this.startGame()),this.root.querySelector("[data-exit-game]").addEventListener("click",this.onExit),this.root.querySelector("[data-exit-x]").addEventListener("click",this.onExit)}startGame(){this.root.querySelector("[data-instructions]").remove(),this.gameHud.style.display="",this.cleaningZone.style.display="",this.promptEl.style.display="",this.root.querySelector("[data-exit-x]").style.display="",this.running=!0,this.startTime=Date.now(),this.animate()}dispose(){this.running=!1,this.root?.remove()}spawnItem(){if(this.items.length>=this.maxItems)return;const t=Math.random()<.55,e=t?["🌟","💚","🌻","😊","✨","🦋"]:["💜","🕸️","🥀","😐","💣","🪨"],n={id:Date.now()+Math.random(),x:15+Math.random()*70,y:15+Math.random()*55,type:t?"positive":"negative",emoji:e[Math.floor(Math.random()*e.length)],life:3.5+Math.random()*2,maxLife:5.5,element:null},s=document.createElement("button");s.className=`clean-item clean-${n.type}`,s.type="button",s.textContent=n.emoji,s.style.left=`${n.x}%`,s.style.top=`${n.y}%`,s.addEventListener("pointerdown",r=>{r.preventDefault(),r.stopPropagation(),this.cleanItem(n)}),this.cleaningZone.appendChild(s),n.element=s,this.items.push(n)}cleanItem(t){t.cleaned||(t.cleaned=!0,t.type==="positive"?(this.score+=1,this.correct+=1,t.element.classList.add("accepted")):(this.score+=1,this.wrong+=1,t.element.classList.add("discarded")),this.scoreEl.textContent=this.score,setTimeout(()=>{t.element?.remove(),this.items=this.items.filter(e=>e.id!==t.id)},250))}animate=()=>{if(!this.running)return;const t=Date.now(),e=.016;if(this.remaining=Math.max(0,this.duration-(t-this.startTime)/1e3),this.timeEl.textContent=Math.ceil(this.remaining),this.spawnTimer+=e,this.spawnTimer>=this.spawnInterval&&(this.spawnTimer=0,this.spawnItem()),this.items.forEach(n=>{n.cleaned||(n.life-=e,n.life<1.5&&(n.element.style.opacity=.3+Math.sin(Date.now()*.012)*.4),n.life<=0&&(n.element?.remove(),this.items=this.items.filter(s=>s.id!==n.id)))}),this.score>=this.target){this.finish(!0);return}if(this.remaining<=0){this.finish(this.score>=this.target);return}requestAnimationFrame(this.animate)};finish(t){this.running&&(this.running=!1,this.onComplete({success:t,score:this.score,target:this.target,islandId:this.island.id,title:t?"Limpieza Espiritual":"Desagrado",message:t?"Supiste distinguir lo bueno de lo malo. Proteger tu energia es importante.":"A veces es dificil separar lo positivo de lo negativo. Intenta de nuevo con mas calma."}))}}class Im{constructor({host:t,island:e,onComplete:n,onExit:s}){this.host=t,this.island=e,this.onComplete=n,this.onExit=s,this.duration=30,this.remaining=this.duration,this.score=0,this.target=8,this.running=!1,this.boxes=[],this.spawnTimer=0,this.spawnInterval=1,this.maxBoxes=5}mount(){this.root=document.createElement("div"),this.root.className="minigame minigame--surprise",this.root.innerHTML=`
      <div class="instructions-overlay" data-instructions>
        <section class="instructions-panel surprise-instructions">
          <p class="eyebrow">Sorpresa</p>
          <h2>Cajas Sorpresa</h2>
          <p class="instructions-text">Cajas misteriosas aparecen y desaparecen. Toca las doradas para ganar puntos, evita las oscuras.</p>
          <div class="instructions-list">
            <div class="instruction-item"><span class="instruction-icon">🎁</span><span>Toca las <strong>cajas doradas</strong> para ganar puntos.</span></div>
            <div class="instruction-item"><span class="instruction-icon">🖤</span><span>Evita las <strong>cajas oscuras</strong> que restan puntos.</span></div>
            <div class="instruction-item"><span class="instruction-icon">⭐</span><span>Las <strong>estrellas</strong> dan el triple de puntos.</span></div>
          </div>
          <div class="instructions-actions">
            <button class="primary-action" type="button" data-start-game>Comenzar</button>
            <button class="secondary-action" type="button" data-exit-game>Volver</button>
          </div>
        </section>
      </div>
      <section class="game-hud surprise-hud" style="display:none" data-game-hud>
        <div><p class="eyebrow">Sorpresa</p><h2>Cajas Sorpresa</h2></div>
        <div class="metric-grid">
          <span><strong data-score>0</strong> / ${this.target}</span>
          <span><strong data-time>30</strong>s</span>
        </div>
      </section>
      <div class="surprise-zone" data-surprise-zone style="display:none"></div>
      <div class="game-prompt" data-prompt style="display:none">Atrapa las sorpresas</div>
      <button class="icon-button game-exit" type="button" data-exit-x style="display:none">X</button>
    `,this.host.appendChild(this.root),this.surpriseZone=this.root.querySelector("[data-surprise-zone]"),this.scoreEl=this.root.querySelector("[data-score]"),this.timeEl=this.root.querySelector("[data-time]"),this.promptEl=this.root.querySelector("[data-prompt]"),this.gameHud=this.root.querySelector("[data-game-hud]"),this.root.querySelector("[data-start-game]").addEventListener("click",()=>this.startGame()),this.root.querySelector("[data-exit-game]").addEventListener("click",this.onExit),this.root.querySelector("[data-exit-x]").addEventListener("click",this.onExit)}startGame(){this.root.querySelector("[data-instructions]").remove(),this.gameHud.style.display="",this.surpriseZone.style.display="",this.promptEl.style.display="",this.root.querySelector("[data-exit-x]").style.display="",this.running=!0,this.startTime=Date.now(),this.animate()}dispose(){this.running=!1,this.root?.remove()}spawnBox(){if(this.boxes.length>=this.maxBoxes)return;const t=Math.random(),e=t<.15?"star":t<.45?"bad":"good",n={id:Date.now()+Math.random(),x:12+Math.random()*76,y:10+Math.random()*60,type:e,life:2.5+Math.random()*2,element:null},s=document.createElement("button");s.className=`surprise-box sb-${e}`,s.type="button",s.textContent=e==="star"?"⭐":e==="bad"?"🖤":"🎁",s.style.left=`${n.x}%`,s.style.top=`${n.y}%`,s.addEventListener("pointerdown",r=>{r.preventDefault(),r.stopPropagation(),this.catchBox(n)}),this.surpriseZone.appendChild(s),n.element=s,this.boxes.push(n)}catchBox(t){if(t.caught)return;t.caught=!0;let e=0;t.type==="good"?e=1:t.type==="star"?e=3:e=-2,this.score=Math.max(0,this.score+e),this.scoreEl.textContent=this.score,t.element.classList.add(e>=0?"caught-good":"caught-bad");const n=e>=0?"#72c264":"#e76856",s=e>=0?"+":"";this.showFloating(t.x,t.y,`${s}${e}`,n),setTimeout(()=>{t.element?.remove(),this.boxes=this.boxes.filter(r=>r.id!==t.id)},250)}showFloating(t,e,n,s){const r=document.createElement("div");r.className="float-text",r.textContent=n,r.style.left=`${t}%`,r.style.top=`${e}%`,r.style.color=s,this.surpriseZone.appendChild(r),setTimeout(()=>r.remove(),600)}animate=()=>{if(!this.running)return;const t=Date.now(),e=.016;if(this.remaining=Math.max(0,this.duration-(t-this.startTime)/1e3),this.timeEl.textContent=Math.ceil(this.remaining),this.spawnTimer+=e,this.spawnTimer>=this.spawnInterval&&(this.spawnTimer=0,this.spawnBox()),this.boxes.forEach(n=>{n.caught||(n.life-=e,n.life<1&&(n.element.style.opacity=.3+Math.sin(Date.now()*.015)*.4,n.element.style.transform="scale(0.9)"),n.life<=0&&(n.element?.remove(),this.boxes=this.boxes.filter(s=>s.id!==n.id)))}),this.score>=this.target){this.finish(!0);return}if(this.remaining<=0){this.finish(this.score>=this.target);return}requestAnimationFrame(this.animate)};finish(t){this.running&&(this.running=!1,this.onComplete({success:t,score:this.score,target:this.target,islandId:this.island.id,title:t?"Cajas Sorpresa":"Sorpresa",message:t?"La vida esta llena de sorpresas. Saber recibir lo bueno y soltar lo malo es una habilidad.":"Las sorpresas no siempre son las que esperamos. Intenta de nuevo para encontrar las buenas."}))}}class Um{constructor({host:t,island:e,onExit:n}){this.host=t,this.island=e,this.onExit=n}mount(){this.root=document.createElement("div"),this.root.className="placeholder-game",this.root.style.setProperty("--accent",this.island.palette.ui),this.root.innerHTML=`
      <section class="placeholder-panel">
        <p class="eyebrow">${this.island.name}</p>
        <h2>${this.island.displayName}</h2>
        <p>${this.island.subtitle}</p>
        <button class="primary-action" type="button">Volver al mapa</button>
      </section>
    `,this.root.querySelector("button").addEventListener("click",this.onExit),this.host.appendChild(this.root)}dispose(){this.root?.remove()}}class tl{constructor({host:t,island:e,player:n,onComplete:s,onExit:r}){this.host=t,this.island=e,this.player=n,this.onComplete=s,this.onExit=r,this.intensidad_inicial=null,this.estrategia_utilizada=null,this.intensidad_posterior=null,this.caja=new Set,this.gotas=0,this.puntos=0}mount(){this.root=document.createElement("div"),this.root.className="valle-nubes",this.root.innerHTML=`
      <style>
        .valle-nubes{position:fixed;inset:0;background:radial-gradient(1100px 500px at 50% 16%, #d6ecf5 0%, #88c4d9 42%, #4a6f8a 100%);display:flex;flex-direction:column;overflow:auto;pointer-events:auto;color:#102c36}
        .valle-nubes .vn-shell{max-width:760px;width:min(92vw,760px);margin:16px auto;padding:18px;background:rgba(255,255,255,0.92);border:1px solid rgba(16,44,54,0.12);border-radius:14px;box-shadow:0 18px 48px rgba(16,44,54,0.18);backdrop-filter:blur(10px)}
        .valle-nubes h1{font-size:clamp(1.4rem,4vw,1.9rem);margin:0}
        .valle-nubes h2{font-size:clamp(1.05rem,3vw,1.35rem);margin:0}
        .valle-nubes .eyebrow{color:rgba(16,44,54,0.6);font-size:0.68rem;font-weight:900;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:4px}
        .valle-nubes p{margin-top:8px;line-height:1.45;color:rgba(16,44,54,0.84);font-size:0.92rem}
        .valle-nubes .vn-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}
        .valle-nubes .primary-action,.valle-nubes .secondary-action{min-height:42px;padding:0 16px;border-radius:8px;border:0;font-weight:900;cursor:pointer}
        .valle-nubes .primary-action{background:#102c36;color:#fff}
        .valle-nubes .secondary-action{background:rgba(255,255,255,0.8);border:1px solid rgba(16,44,54,0.14);color:#102c36}
        .valle-nubes .vn-cloud{position:fixed;left:50%;top:14%;width:300px;height:130px;transform:translateX(-50%);background:radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.95) 0%, rgba(230,240,248,0.85) 60%, transparent 75%);border-radius:50%;pointer-events:none;transition:all 500ms;opacity:0.5}
        .valle-nubes[data-intensity="baja"] .vn-cloud{width:230px;height:95px;opacity:0.38}
        .valle-nubes[data-intensity="media"] .vn-cloud{width:480px;height:180px;opacity:0.68}
        .valle-nubes[data-intensity="alta"] .vn-cloud{width:740px;height:290px;opacity:0.86;background:radial-gradient(ellipse at 50% 40%, rgba(245,245,250,0.98) 0%, rgba(200,210,225,0.9) 55%, transparent 78%)}
        .valle-nubes[data-intensity="alta"]{background:radial-gradient(1000px 500px at 50% 14%, #b8d2de 0%, #6a8fa3 40%, #2f4150 100%)}
        .valle-nubes .vn-dark{position:fixed;inset:0;background:rgba(10,25,35,0);pointer-events:none;transition:background 500ms}
        .valle-nubes[data-intensity="media"] .vn-dark{background:rgba(10,25,35,0.1)}
        .valle-nubes[data-intensity="alta"] .vn-dark{background:rgba(10,25,35,0.26)}
        .valle-nubes .vn-gamezone{position:relative;min-height:220px;margin-top:10px;padding:10px;border:1px dashed rgba(16,44,54,0.18);border-radius:10px;background:rgba(255,255,255,0.62);overflow:hidden}
        .valle-nubes .vn-steps{display:flex;gap:6px;margin-bottom:10px}
        .valle-nubes .vn-step{flex:1;height:6px;border-radius:3px;background:rgba(16,44,54,0.12);overflow:hidden}
        .valle-nubes .vn-step.active{background:#3178a8}
        .valle-nubes .vn-step.done{background:#72c264}
        .valle-nubes .vn-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:10px;perspective:800px}
        .valle-nubes .char{height:112px;display:grid;place-items:center;border-radius:14px;background:linear-gradient(180deg,#fff 0%,#eef6fb 100%);border:1px solid rgba(16,44,54,0.14);border-bottom:5px solid rgba(16,44,54,0.18);cursor:pointer;font-size:38px;box-shadow:0 12px 22px rgba(16,44,54,0.14);transform:rotateX(6deg);transition:transform 160ms}
        .valle-nubes .char:hover{transform:rotateX(4deg) translateY(-4px)}
        .valle-nubes .char.correct{outline:3px solid #72c264;box-shadow:0 0 18px rgba(114,194,100,0.5)}
        .valle-nubes .char.wrong{outline:3px solid #e76856;opacity:0.7}
        .valle-nubes .falling{position:absolute;width:56px;height:48px;display:grid;place-items:center;border-radius:10px;background:rgba(255,255,255,0.95);border:1px solid rgba(16,44,54,0.12);cursor:pointer;font-size:18px}
        .valle-nubes .intensity3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:10px}
        .valle-nubes .intensity-btn{padding:10px;border-radius:10px;border:1px solid rgba(16,44,54,0.14);background:rgba(255,255,255,0.82);cursor:pointer;text-align:center}
        .valle-nubes .intensity-btn.selected{border-color:#102c36;box-shadow:0 6px 18px rgba(16,44,54,0.15)}
        .valle-nubes .vn-strats{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}
        .valle-nubes .vn-strat{padding:14px;border:1px solid rgba(16,44,54,0.12);border-radius:10px;background:rgba(255,255,255,0.82);cursor:pointer;text-align:left}
        .valle-nubes .vn-strat.recommended{border-color:#72c264;box-shadow:0 6px 18px rgba(114,194,100,0.18)}
        .valle-nubes .vn-badge{display:inline-block;padding:3px 7px;border-radius:20px;background:#102c36;color:#fff;font-size:0.65rem;font-weight:900}
        .valle-nubes .vn-tool{padding:6px 8px;border-radius:20px;background:rgba(49,120,168,0.12);border:1px solid rgba(49,120,168,0.2);font-size:0.7rem;font-weight:800}
        .valle-nubes .vn-inventory{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}
        .valle-nubes .star{position:absolute;width:34px;height:34px;display:grid;place-items:center;border-radius:50%;background:rgba(255,220,80,0.35);border:1px solid rgba(255,200,50,0.5);cursor:pointer}
        .valle-nubes .vn-choice{padding:10px;border:1px solid rgba(16,44,54,0.12);border-radius:8px;background:rgba(255,255,255,0.82);cursor:pointer;margin-top:8px;text-align:left}
        .valle-nubes .vn-choice.correct{border-color:#72c264;background:rgba(114,194,100,0.15)}
        .valle-nubes .vn-choice.wrong{border-color:#e76856;background:rgba(231,104,86,0.12)}
        .valle-nubes .icon-button{width:34px;height:34px;display:grid;place-items:center;border:1px solid rgba(16,44,54,0.14);border-radius:8px;background:rgba(255,255,255,0.85);cursor:pointer}
        @media(max-width:720px){.valle-nubes .vn-grid, .valle-nubes .vn-strats, .valle-nubes .intensity3{grid-template-columns:1fr 1fr}}
      </style>
      <div class="vn-cloud"></div><div class="vn-dark"></div>
      <div style="position:sticky;top:0;z-index:5;max-width:760px;width:min(92vw,760px);margin:8px auto 0;display:flex;justify-content:space-between;align-items:center">
        <div class="eyebrow" style="margin:0">Valle de las Nubes · Tristeza · v2</div>
        <button class="icon-button" data-exit>✕</button>
      </div>
      <div class="vn-shell" data-shell></div>
    `,this.host.appendChild(this.root),this.shell=this.root.querySelector("[data-shell]"),this.root.querySelector("[data-exit]").addEventListener("click",()=>this.onExit()),this.showIntro()}dispose(){this.root?.remove()}setAtmosphere(t){t?this.root.setAttribute("data-intensity",t):this.root.removeAttribute("data-intensity")}addTool(t){this.caja.add(t)}inventory(){if(this.caja.size===0)return"";const t={"Cristal de perspectiva":"💎 Cristal","Semilla de aceptación":"🌱 Semilla","Herramienta de acción":"🧰 Herramienta","Estrella de atención":"⭐ Estrella","Corazón de apoyo":"💚 Corazón","Gota de comprensión":"💧 Gota"};return`<div class="vn-inventory">${[...this.caja].map(e=>`<span class="vn-tool">${t[e]??e}</span>`).join("")}</div>`}stepsBar(t){return`<div class="vn-steps">${[1,2,3,4].map(e=>`<div class="vn-step ${e<t?"done":""} ${e===t?"active":""}"></div>`).join("")}</div>`}showIntro(){this.setAtmosphere(null),this.shell.innerHTML=`
      ${this.stepsBar(0)}
      <h1>BIENVENIDO AL VALLE DE LAS NUBES</h1>
      <p>Este es tu espacio. Aquí vas a reconocer lo que sientes y encontrar herramientas que <strong>te ayuden a ti</strong> a sentirte mejor.</p>
      <div class="vn-actions"><button class="primary-action" data-go>COMENZAR TU RECORRIDO</button></div>
    `,this.shell.querySelector("[data-go]").addEventListener("click",()=>this.paso1_identificar())}paso1_identificar(){this.shell.innerHTML=`
      ${this.stepsBar(1)}
      <p class="eyebrow">Paso 1 de 4</p>
      <h2>1. IDENTIFICAR EL PROBLEMA</h2>
      <p>Reconocer qué está generando la dificultad.</p>
      <div class="vn-gamezone" data-zone style="min-height:260px">
        <p style="font-size:0.85rem;opacity:0.7;margin:0">Atraviesa el valle: primero identifica la tristeza y su intensidad jugando.</p>
        <div class="vn-grid" data-grid style="margin-top:10px">
          ${[{e:"😀",ok:!1},{e:"😔",ok:!0},{e:"😠",ok:!1},{e:"😨",ok:!1}].sort(()=>Math.random()-.5).map(t=>`<button class="char" data-ok="${t.ok}">${t.e}</button>`).join("")}
        </div>
        <p style="font-size:0.8rem;opacity:0.6;margin-top:8px">Toca al que siente tristeza</p>
      </div>
    `,this.shell.querySelectorAll(".char").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.ok==="true";t.classList.add(e?"correct":"wrong"),e&&(this.gotas++,this.caja.add("Gota de comprensión")),setTimeout(()=>{if(!e){this.shell.innerHTML+='<p style="color:#b92d32;font-weight:800">Inténtalo de nuevo</p><div class="vn-actions"><button class="primary-action" data-retry>🔄 Volver a intentar</button></div>',this.shell.querySelector("[data-retry]").addEventListener("click",()=>this.paso1_identificar());return}this.paso1c_intensidad()},400)},{once:!0})})}paso1b_atrapa(){this.shell.innerHTML=`
      ${this.stepsBar(1)}
      <p class="eyebrow">1. IDENTIFICAR EL PROBLEMA — sigue</p>
      <h2>Atrapa las señales de tristeza</h2>
      <p style="font-size:0.85rem;opacity:0.7">Atrapa 6 señales. Evita las que no lo son.</p>
      <div class="vn-gamezone" data-zone style="height:250px"></div>
      <p style="font-size:0.85rem">Progreso: <strong data-count>0</strong>/6 · Tiempo: <strong data-time>20</strong>s</p>
    `;const t=this.shell.querySelector("[data-zone]"),e=this.shell.querySelector("[data-count]"),n=this.shell.querySelector("[data-time]");let s=0,r=20,a=!0;const o=[{icon:"😢",label:"Lágrimas"},{icon:"😔",label:"Mirada baja"},{icon:"🚪",label:"Aislamiento"},{icon:"🍽️",label:"Sin apetito"},{icon:"😮‍💨",label:"Suspiros"},{icon:"🧍",label:"Postura baja"}],l=[{icon:"😂",label:"Risa"},{icon:"⚡",label:"Energía"}],c=()=>{if(!a)return;const g=Math.random()<.72,S=g?o[Math.floor(Math.random()*o.length)]:l[Math.floor(Math.random()*l.length)],p=document.createElement("button");p.className="falling",p.dataset.good=String(g),p.innerHTML=`<span style="font-size:18px">${S.icon}</span><span style="font-size:0.55rem;display:block;font-weight:700">${S.label}</span>`,p.style.left=`${5+Math.random()*75}%`,p.style.top="-40px",p.style.width="58px",p.style.height="48px",t.appendChild(p);let u=-40,b=1+Math.random()*.7;const E=setInterval(()=>{if(!a||!p.isConnected){clearInterval(E);return}u+=b,p.style.top=u+"px",u>250&&(clearInterval(E),p.remove())},16);p.addEventListener("click",()=>{if(clearInterval(E),p.dataset.good==="true")s++,e.textContent=String(s),p.style.transform="scale(1.2)",p.style.opacity="0",setTimeout(()=>p.remove(),180),s>=6&&f();else{p.style.borderColor="#e76856";const y=document.createElement("div");y.textContent="No es tristeza",y.style.cssText="position:absolute;left:50%;top:-10px;transform:translateX(-50%);font-size:0.55rem;font-weight:800;color:#b92d32;background:#fff;padding:2px 6px;border-radius:10px",p.appendChild(y),setTimeout(()=>p.remove(),600)}})},h=setInterval(c,500),d=setInterval(()=>{r--,n.textContent=String(r),r<=0&&(clearInterval(d),clearInterval(h),s<6&&m())},1e3),f=()=>{a=!1,clearInterval(d),clearInterval(h),this.puntos+=5,this.shell.innerHTML+='<p style="color:#4a8a3a;font-weight:800">¡Bien! Has aprendido a reconocer manifestaciones.</p>',setTimeout(()=>this.paso1c_intensidad(),600)},m=()=>{a=!1,this.shell.innerHTML=`
        ${this.stepsBar(1)}
        <h2>Te faltaron señales</h2><p>Necesitas 6 para identificar. Llevas ${s}.</p>
        <div class="vn-actions"><button class="primary-action" data-retry>🔄 Volver a intentar</button></div>
      `,this.shell.querySelector("[data-retry]").addEventListener("click",()=>this.paso1b_atrapa())};c()}paso1c_intensidad(){this.shell.innerHTML=`
      ${this.stepsBar(1)}
      <p class="eyebrow">1. IDENTIFICAR — intensidad</p>
      <h2>¿QUÉ TAN INTENSA ESTÁ TU TRISTEZA?</h2>
      <p style="font-size:0.85rem;opacity:0.7">La nube crece con la intensidad.</p>
      <div class="intensity3">
        <button class="intensity-btn" data-nivel="baja"><strong>BAJA</strong><span>Siento tristeza, pero puedo continuar con mis actividades.</span></button>
        <button class="intensity-btn" data-nivel="media"><strong>MEDIA</strong><span>La tristeza ocupa bastante espacio y comienza a afectar lo que estoy haciendo.</span></button>
        <button class="intensity-btn" data-nivel="alta"><strong>ALTA</strong><span>La tristeza es muy intensa y necesito detenerme para afrontar lo que estoy sintiendo.</span></button>
      </div>
    `,this.shell.querySelectorAll("[data-nivel]").forEach(t=>{t.addEventListener("mouseenter",()=>this.setAtmosphere(t.dataset.nivel)),t.addEventListener("click",()=>{this.intensidad_inicial=t.dataset.nivel,this.setAtmosphere(t.dataset.nivel),this.shell.innerHTML=`
          ${this.stepsBar(1)}
          <h2>Intensidad: ${t.dataset.nivel.toUpperCase()}</h2>
          <p>Has identificado la intensidad de tu emoción. Ahora puedes elegir una estrategia para afrontarla.</p>
          ${this.inventory()}
          <div class="vn-actions"><button class="primary-action" data-next>Continuar a GENERAR →</button></div>
        `,this.shell.querySelector("[data-next]").addEventListener("click",()=>this.paso2_generar())})})}paso2_generar(){const t=this.intensidad_inicial,e={baja:[{id:"reevaluacion",n:"Reevaluación",icon:"💭",d:"Cambia la perspectiva"},{id:"atencional",n:"Atencional",icon:"⭐",d:"Dirige tu atención"}],media:[{id:"aceptacion",n:"Aceptación",icon:"🌱",d:"Reconoce lo que sientes"},{id:"solucion",n:"Solución",icon:"🧰",d:"Encuentra una salida"}],alta:[{id:"aceptacion",n:"Aceptación",icon:"🌱",d:"Reconoce lo que sientes"},{id:"reevaluacion",n:"Reevaluación",icon:"💭",d:"Cambia la perspectiva"},{id:"apoyo",n:"Apoyo",icon:"💚",d:"No tienes que hacerlo solo"}]},n=e[t]||e.baja,s=[{n:"Ignorar",icon:"🙈",id:"distractor"}],r=[...n,...s],a=[{left:"12%",top:"22%"},{left:"68%",top:"18%"},{left:"35%",top:"52%"},{left:"72%",top:"55%"}];this.shell.innerHTML=`
      ${this.stepsBar(2)}
      <h2>2. GENERAR ALTERNATIVAS</h2>
      <p>Pensar diferentes formas de afrontar la situación.</p>
      <p style="font-size:0.85rem;opacity:0.7">Ahora es tu turno: ayuda a tu personaje a encontrar 2 ideas que <strong>te ayuden a ti</strong> a sentirte mejor.</p>
      <div class="vn-gamezone" data-zone style="height:300px;position:relative;overflow:hidden;background:linear-gradient(180deg, #cfe9f5 0%, #a9d4e8 45%, #8ec0a8 100%);perspective:700px;transform-style:preserve-3d">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 85%, rgba(255,255,255,0.85) 0%, transparent 55%);pointer-events:none"></div>
        <div style="position:absolute;left:0;right:0;bottom:0;height:38%;background:linear-gradient(180deg, #b8d8b8 0%, #8fb58f 100%);transform:rotateX(62deg);transform-origin:bottom;opacity:0.9;pointer-events:none;box-shadow:inset 0 12px 24px rgba(0,0,0,0.08)"></div>
        <div data-char style="position:absolute;left:50%;top:78%;transform:translateX(-50%) translateZ(18px) rotateX(-10deg);font-size:38px;transition:left 500ms ease, top 500ms ease, transform 200ms;z-index:5;filter:drop-shadow(0 10px 10px rgba(0,0,0,0.22));transform-style:preserve-3d">${this.player?.avatar??"🧍"}</div>
        ${r.map((f,m)=>`
          <button data-alt="${f.id}" data-ok="${f.id!=="distractor"}" style="position:absolute;left:${a[m].left};top:${a[m].top};width:86px;height:68px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;border-radius:12px;background:linear-gradient(180deg, #ffffff 0%, #f3f8fb 100%);border:1px solid rgba(16,44,54,0.14);border-bottom:5px solid rgba(16,44,54,0.18);box-shadow:0 14px 20px rgba(16,44,54,0.16), 0 4px 8px rgba(16,44,54,0.1);cursor:pointer;transform:translateZ(14px) rotateX(6deg);transform-style:preserve-3d;transition:transform 160ms">
            <span style="font-size:22px;transform:translateZ(6px)">${f.icon}</span><span style="font-size:0.6rem;font-weight:800;transform:translateZ(6px)">${f.n}</span>
          </button>
        `).join("")}
      </div>
      <p style="font-size:0.85rem">Recogidas: <strong data-count>0</strong>/2 · Toca una alternativa (vista 3D) y el personaje caminará hacia ella</p>
    `;const o=this.shell.querySelector("[data-zone]"),l=this.shell.querySelector("[data-char]"),c=this.shell.querySelector("[data-count]");let h=[],d=!1;this.shell.querySelectorAll("[data-alt]").forEach(f=>{f.addEventListener("click",()=>{if(d)return;o.getBoundingClientRect();const m=f.getBoundingClientRect(),g=o.getBoundingClientRect();d=!0;const S=(m.left-g.left+m.width/2)/g.width*100,p=(m.top-g.top+m.height/2+18)/g.height*100;l.style.left=S+"%",l.style.top=p+"%",l.style.transform="translateX(-50%) translateZ(18px) rotateX(-10deg) scale(1.08)",setTimeout(()=>{l.style.transform="translateX(-50%) translateZ(18px) rotateX(-10deg) scale(1)";const u=f.dataset.ok==="true",b=f.dataset.alt;if(u)if(h.find(E=>E.id===b))f.style.borderColor="#e76856";else{const E=r.find(A=>A.id===b);h.push({id:E.id,n:E.n,icon:E.icon}),c.textContent=String(h.length),f.style.borderColor="#72c264",f.style.background="rgba(114,194,100,0.18)",f.style.opacity="0.45",f.disabled=!0;const y=document.createElement("div");if(y.textContent="✓",y.style.cssText="position:absolute;left:50%;top:-10px;transform:translateX(-50%);background:#72c264;color:#fff;font-weight:900;padding:2px 6px;border-radius:10px;font-size:0.7rem",f.appendChild(y),h.length===2){setTimeout(()=>{this._generadas=h,this.paso3_elegir()},500);return}}else{f.style.borderColor="#e76856",f.style.background="rgba(231,104,86,0.15)";const E=document.createElement("div");E.textContent="No ayuda",E.style.cssText="position:absolute;left:50%;top:-14px;transform:translateX(-50%);font-size:0.55rem;font-weight:800;color:#b92d32;background:#fff;padding:2px 6px;border-radius:10px;white-space:nowrap",f.appendChild(E),setTimeout(()=>{E.remove(),f.style.borderColor="rgba(16,44,54,0.14)",f.style.background="rgba(255,255,255,0.92)"},800)}d=!1},520)})})}paso3_elegir(){const t=this._generadas||[];this.shell.innerHTML=`
      ${this.stepsBar(3)}
      <h2>3. ELEGIR UNA ALTERNATIVA</h2>
      <p>Seleccionar una opción posible y adecuada.</p>
      <p style="font-size:0.85rem;opacity:0.7">Piensa en ti: ¿cuál de estas ideas <strong>puedes hacer tú</strong> ahora mismo?</p>
      <div class="vn-grid" style="grid-template-columns:1fr 1fr;gap:12px">
        ${t.map(e=>`<button class="char" data-id="${e.id}" style="height:120px;flex-direction:column;font-size:28px">${e.icon}<span style="font-size:0.75rem;margin-top:6px;font-weight:800">${e.n}</span></button>`).join("")}
      </div>
      <p style="font-size:0.8rem;opacity:0.6">Toca la que puedas hacer ahora.</p>
    `,this.shell.querySelectorAll("[data-id]").forEach(e=>{e.addEventListener("click",()=>{this.estrategia_utilizada=e.dataset.id,e.classList.add("correct"),setTimeout(()=>this.paso4_actuar(),300)})})}paso4_actuar(){const t=this.estrategia_utilizada;this.shell.innerHTML=`
      ${this.stepsBar(4)}
      <h2>4. ACTUAR</h2>
      <p>Poner en práctica la alternativa seleccionada mediante una interacción dentro del escenario.</p>
      <p style="font-size:0.85rem;opacity:0.7">Ahora es tu momento: pon en práctica lo que elegiste para <strong>sentirte mejor tú</strong>.</p>
      <div class="vn-gamezone" data-zone style="height:260px"></div>
    `;const e=this.shell.querySelector("[data-zone]"),s={reevaluacion:"Cristal de perspectiva",atencional:"Estrella de atención",aceptacion:"Semilla de aceptación",solucion:"Herramienta de acción",apoyo:"Corazón de apoyo"}[t]||"Herramienta de acción";e.innerHTML=`
      <p style="font-weight:800">Construye tu camino para atravesar</p>
      <p style="font-size:0.85rem;opacity:0.7">Toca los 5 tablones para construir el puente con tu estrategia: <strong>${s}</strong></p>
      <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin-top:12px">
        ${[0,1,2,3,4].map(a=>`<button data-brick="${a}" style="height:52px;border-radius:10px;background:#fff;border:2px dashed #8d5a3b;font-size:22px;cursor:pointer;box-shadow:0 6px 12px rgba(0,0,0,0.08)">🪵</button>`).join("")}
      </div>
      <p style="font-size:0.8rem;opacity:0.6;margin-top:8px" data-progress>0/5 tablones</p>
    `;let r=0;e.querySelectorAll("[data-brick]").forEach(a=>{a.addEventListener("click",()=>{a.dataset.done!=="true"&&(a.dataset.done="true",a.textContent="✅",a.style.background="#72c264",a.style.borderColor="#4a8a3a",a.style.borderStyle="solid",r++,e.querySelector("[data-progress]").textContent=`${r}/5 tablones`,r>=5&&(this.caja.add(s),setTimeout(()=>this.finalActuar(),400)))})})}paso4_solucionDetallado(t){let e=0,n="";const s=()=>{if(e===0)t.innerHTML='<p style="font-weight:800">1. IDENTIFICAR EL PROBLEMA</p><div class="vn-grid" style="grid-template-columns:repeat(3,1fr);gap:8px"><button class="char" data-ok="true" style="font-size:14px">📅<span style="display:block;font-size:0.65rem">Plan cancelado</span></button><button class="char" data-ok="false">👋</button><button class="char" data-ok="false">🌧️</button></div>',t.querySelectorAll("[data-ok]").forEach(r=>r.addEventListener("click",()=>{r.dataset.ok==="true"?(r.classList.add("correct"),setTimeout(()=>{e=1,s()},300)):r.classList.add("wrong")}));else if(e===1){t.innerHTML='<p style="font-weight:800">2. GENERAR — atrapa 2 ideas</p><div data-z style="position:relative;height:160px;border:1px dashed rgba(16,44,54,0.2);border-radius:8px;overflow:hidden"></div><p style="font-size:0.8rem"><span data-c>0</span>/2</p>';const r=t.querySelector("[data-z]"),a=t.querySelector("[data-c]"),o=[{t:"Hablar",icon:"💬",ok:!0},{t:"Revisar",icon:"📝",ok:!0},{t:"Culparme",icon:"😞",ok:!1}];let l=[];const c=()=>{const h=o[Math.floor(Math.random()*o.length)],d=document.createElement("button");d.className="falling",d.dataset.ok=String(h.ok),d.dataset.t=h.t,d.innerHTML=`${h.icon} ${h.t}`,d.style.left=`${5+Math.random()*70}%`,d.style.top="-30px",d.style.width="90px",r.appendChild(d);let f=-30;const m=setInterval(()=>{f+=1.1,d.style.top=f+"px",f>170&&(clearInterval(m),d.remove())},16);d.addEventListener("click",()=>{clearInterval(m),d.dataset.ok==="true"&&!l.includes(d.dataset.t)?(l.push(d.dataset.t),a.textContent=String(l.length),d.remove(),l.length===2&&(this._solucionElegidas=l,setTimeout(()=>{e=2,s()},300))):(d.style.borderColor="#e76856",setTimeout(()=>d.remove(),400))})};setInterval(c,500),setTimeout(()=>c(),100)}else if(e===2){const r=this._solucionElegidas||["Hablar","Revisar"];t.innerHTML=`<p style="font-weight:800">3. ELEGIR</p>${r.map(a=>`<button class="vn-choice" data-v="${a}">${a}</button>`).join("")}`,t.querySelectorAll("[data-v]").forEach(a=>a.addEventListener("click",()=>{n=a.dataset.v,e=3,s()}))}else{const r=n==="Hablar";if(t.innerHTML=`<p style="font-weight:800">4. ACTUAR — ${r?"arrastra el mensaje":"construye"}</p><div data-act style="height:160px;display:grid;place-items:center;position:relative;background:linear-gradient(180deg,#eef6fb 0%,#d6ecf5 100%);border-radius:8px">
          ${r?'<div style="position:absolute;left:12%;font-size:36px" data-target>🧑‍🤝‍🧑</div><button data-drag style="position:absolute;left:55%;padding:8px 12px;border-radius:20px;background:#fff;border:2px solid #3178a8;font-weight:800">💬 Hola</button>':`<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;width:90%">${[0,1,2,3,4].map(a=>`<button data-b="${a}" style="height:36px;border-radius:8px;background:#fff;border:2px dashed #8d5a3b">🧱</button>`).join("")}</div><p data-pr style="position:absolute;bottom:6px;font-size:0.7rem">0/5</p>`}
        </div>`,r){const a=t.querySelector("[data-drag]"),o=t.querySelector("[data-target]");let l=!1,c=0,h=0;a.addEventListener("pointerdown",d=>{l=!0,h=d.clientX-c,a.setPointerCapture(d.pointerId)}),a.addEventListener("pointermove",d=>{if(!l)return;c=d.clientX-h,a.style.transform=`translateX(${c}px)`;const f=o.getBoundingClientRect(),m=a.getBoundingClientRect();Math.abs(f.left-m.left)<40&&(l=!1,this.finishSolucion())}),a.addEventListener("pointerup",()=>l=!1)}else{let a=0;t.querySelectorAll("[data-b]").forEach(o=>o.addEventListener("click",()=>{o.dataset.done||(o.dataset.done="true",o.textContent="✅",o.style.background="#72c264",a++,t.querySelector("[data-pr]").textContent=`${a}/5`,a>=5&&this.finishSolucion())}))}}};s()}finishSolucion(){this.caja.add("Herramienta de acción"),this.finalActuar()}finalActuar(){this.shell.innerHTML=`
      ${this.stepsBar(4)}
      <h2>¡Lo hiciste tú!</h2>
      <p>Cuando existe algo que <strong>puedes</strong> modificar, identificar alternativas y actuar puede <strong>ayudarte a ti</strong> a afrontar lo que sientes.</p>
      <p style="font-size:0.85rem;opacity:0.7">Ahora tú puedes atravesar la nube final y continuar tu camino.</p>
      ${this.inventory()}
      <div class="vn-actions"><button class="primary-action" data-next>Atravesar la nube →</button></div>
    `,this.shell.querySelector("[data-next]").addEventListener("click",()=>this.showDesafio())}showDesafio(){this.shell.innerHTML=`
      ${this.stepsBar(4)}
      <h2>La tristeza no tiene que desaparecer para que puedas continuar.</h2>
      <p>Utiliza lo que aprendiste para atravesar la nube.</p>
      <div class="vn-gamezone" style="height:200px;display:grid;place-items:center">
        <div style="font-size:64px;transition:all 400ms" data-cloud>☁️</div>
        <button class="primary-action" data-go>Atravesar</button>
      </div>
      <p style="font-size:0.75rem;opacity:0.6">Toca 3 veces</p>
    `;let t=0;const e=this.shell.querySelector("[data-cloud]");this.shell.querySelector("[data-go]").addEventListener("click",n=>{const s=n.currentTarget;t++,e.style.transform=`scale(${1-t*.2})`,e.style.opacity=String(1-t*.3),this.setAtmosphere(t>=2?"media":"baja"),t>=3?(this.shell.innerHTML=`<h2>¡Nube atravesada!</h2><p>La nube disminuye, aparece luz y se desbloquea el camino.</p>${this.inventory()}<div class="vn-actions"><button class="primary-action" data-end>Cierre</button></div>`,this.shell.querySelector("[data-end]").addEventListener("click",()=>this.showCierre())):s.textContent=`Atravesar (${t}/3)`})}showCierre(){this.shell.innerHTML=`
      <h1>¡HAS COMPLETADO EL VALLE DE LAS NUBES!</h1>
      <p>La tristeza es una emoción que puede aparecer ante pérdidas, separaciones, decepciones, rechazos o cambios significativos.</p>
      <p>Reconocer qué estás sintiendo y qué tan intensa es la emoción puede ayudarte a decidir cómo afrontarla.</p>
      <p>Existen diferentes estrategias. Aprender a utilizarlas de manera flexible puede ayudarte a afrontar diferentes situaciones.</p>
      <p><strong>Recuerda: regular una emoción no significa eliminarla. Significa aprender a reconocerla y encontrar maneras adecuadas de afrontarla.</strong></p>
      ${this.inventory()}
      <p><span class="vn-badge">Insignia: GUARDIÁN DE LA TRISTEZA</span></p>
      <div class="vn-actions"><button class="primary-action" data-fin>CONTINUAR A LA SIGUIENTE ISLA</button></div>
    `,this.shell.querySelector("[data-fin]").addEventListener("click",()=>{this.onComplete({success:!0,score:this.puntos+this.gotas,target:5,islandId:this.island.id,title:"Valle de las Nubes",message:"Has completado el Valle de las Nubes. La tristeza no desaparece, pero ahora tienes herramientas para afrontarla."})})}}const hi=4,Ni=[{id:"inhale",title:"RESPIRA",instruction:"Mantén presionado el botón mientras inhalas.",buttonLabel:"MANTÉN PRESIONADO",requiredPressed:!0,failMessage:"Debes mantener presionado el botón durante los 4 segundos."},{id:"hold",title:"MANTÉN",instruction:"Sigue manteniendo presionado.",buttonLabel:"SIGUE PRESIONANDO",requiredPressed:!0,failMessage:"No sueltes todavía. Mantén presionado durante los 4 segundos."},{id:"exhale",title:"SUELTA",instruction:"Ahora suelta el botón y expulsa el aire lentamente.",buttonLabel:"SUELTA",requiredPressed:!1,failMessage:"Debes soltar el botón y mantenerlo sin presionar durante los 4 segundos."},{id:"pause",title:"MANTÉN LA CALMA",instruction:"No presiones nada. Quédate quieto durante 4 segundos.",buttonLabel:"NO PRESIONES",requiredPressed:!1,failMessage:"No presiones el botón. Mantente en calma durante los 4 segundos."}],Mn={land:"#4fae95",base:"#1f9d82",ring:"#8ce8d4",hemiSky:"#cdf3ea",hemiGround:"#0a2622",sun:"#d8f5ec",fog:"#0c2624",sky:"#0c2624"},Rr=new Lt,el=new Lt;function Sn(i,t,e){return Rr.set(i),el.set(t),Rr.lerp(el,Math.min(1,Math.max(0,e))),`#${Rr.getHexString()}`}function nl(i,t,e){return i+(t-i)*e}function Nm(i){return i<.5?2*i*i:1-(-2*i+2)**2/2}class Fm{constructor({host:t,island:e,onComplete:n,onExit:s}){this.host=t,this.island=e,this.onComplete=n,this.onExit=s,this.tense={land:e.palette.land,base:e.palette.accent,ring:e.palette.glow,hemiSky:e.palette.foliage,hemiGround:"#210a06",sun:e.palette.glow,fog:"#3a1210",sky:"#3a1210"},this.state="idle",this.phaseIndex=0,this.phaseElapsed=0,this.pressed=!1,this.hasWon=!1,this.mounted=!1,this.colorProgress=0,this.breathScale=.62,this.clock=new Ji}mount(){this.root=document.createElement("div"),this.root.className="minigame minigame--breathing",this.root.innerHTML=`
      <div class="game-canvas" data-game-canvas></div>

      <section class="game-hud breathing-hud">
        <div>
          <p class="eyebrow">Enojo</p>
          <h2 data-phase-title aria-live="polite">¿Listo?</h2>
          <p class="breathing-instruction" data-phase-instruction>Presiona y mantén el botón para comenzar a respirar.</p>
        </div>
        <div class="breathing-progress" data-phase-progress>
          ${Ni.map((t,e)=>`<span class="breathing-dot" data-dot="${e}"></span>`).join("")}
        </div>
      </section>

      <div class="breathing-stage">
        <button type="button" class="breath-button" data-breath-button aria-label="Botón de respiración">
          <span class="breath-ring" data-breath-ring aria-hidden="true"></span>
          <span class="breath-inner">
            <span class="breath-count" data-breath-count>4</span>
            <span class="breath-button-label" data-breath-label>COMENZAR</span>
          </span>
        </button>
      </div>

      <div class="breathing-overlay breathing-overlay--lose instructions-overlay" data-lose-overlay style="display:none">
        <section class="instructions-panel breathing-panel breathing-panel--lose">
          <p class="eyebrow">Ejercicio interrumpido</p>
          <h2>¡Casi!</h2>
          <p class="instructions-text" data-lose-message></p>
          <div class="instructions-actions">
            <button class="primary-action" type="button" data-retry>Reintentar</button>
          </div>
        </section>
      </div>

      <div class="breathing-overlay breathing-overlay--win instructions-overlay" data-win-overlay style="display:none">
        <section class="instructions-panel breathing-panel breathing-panel--win">
          <p class="eyebrow">Isla del Enojo</p>
          <h2>¡LO LOGRASTE!</h2>
          <p class="instructions-text">Has completado el ejercicio de respiración. Respira con calma y continúa.</p>
          <div class="instructions-actions">
            <button class="secondary-action" type="button" data-repeat>Repetir ejercicio</button>
          </div>
        </section>
      </div>

      <button class="icon-button game-exit" type="button" aria-label="Volver al mapa" title="Volver al mapa" data-exit-x>X</button>
    `,this.host.appendChild(this.root),this.canvasHost=this.root.querySelector("[data-game-canvas]"),this.phaseTitleEl=this.root.querySelector("[data-phase-title]"),this.phaseInstructionEl=this.root.querySelector("[data-phase-instruction]"),this.dots=[...this.root.querySelectorAll("[data-dot]")],this.breathButton=this.root.querySelector("[data-breath-button]"),this.breathRing=this.root.querySelector("[data-breath-ring]"),this.breathCount=this.root.querySelector("[data-breath-count]"),this.breathLabel=this.root.querySelector("[data-breath-label]"),this.loseOverlay=this.root.querySelector("[data-lose-overlay]"),this.loseMessageEl=this.root.querySelector("[data-lose-message]"),this.winOverlay=this.root.querySelector("[data-win-overlay]"),this.exitX=this.root.querySelector("[data-exit-x]"),this.breathButton.addEventListener("pointerdown",this.onPress),this.breathButton.addEventListener("contextmenu",t=>t.preventDefault()),this.root.querySelector("[data-retry]").addEventListener("click",this.resetSequence),this.root.querySelector("[data-repeat]").addEventListener("click",this.resetSequence),this.exitX.addEventListener("click",this.leave),window.addEventListener("pointerup",this.onRelease),window.addEventListener("pointercancel",this.onRelease),window.addEventListener("blur",this.onRelease),window.addEventListener("resize",this.resize),this.setupScene(),this.resize(),this.updateIdleUI(),this.mounted=!0,this.animate()}dispose(){this.mounted=!1,window.removeEventListener("pointerup",this.onRelease),window.removeEventListener("pointercancel",this.onRelease),window.removeEventListener("blur",this.onRelease),window.removeEventListener("resize",this.resize),this.renderer?.dispose(),this.root?.remove()}onPress=t=>{if(!(this.state==="lost"||this.state==="won")){t.preventDefault();try{this.breathButton.setPointerCapture(t.pointerId)}catch{}this.pressed=!0,this.breathButton.classList.add("is-pressed"),this.state==="idle"&&(this.state="playing",this.phaseIndex=0,this.phaseElapsed=0,this.clock.start(),this.updatePhaseUI())}};onRelease=()=>{this.pressed=!1,this.breathButton?.classList.remove("is-pressed")};resetSequence=()=>{this.state="idle",this.phaseIndex=0,this.phaseElapsed=0,this.pressed=!1,this.colorProgress=0,this.breathScale=.62,this.loseOverlay.style.display="none",this.winOverlay.style.display="none",this.updateIdleUI()};leave=()=>{this.hasWon?this.onComplete({success:!0,islandId:this.island.id,title:"Respiración Guiada",message:"Has completado el ejercicio de respiración. Respira con calma y continúa."}):this.onExit()};updateIdleUI(){this.phaseTitleEl.textContent="¿Listo?",this.phaseInstructionEl.textContent="Presiona y mantén el botón para comenzar a respirar.",this.breathLabel.textContent="COMENZAR",this.breathCount.textContent=String(hi),this.breathButton.classList.remove("phase-hold","phase-release"),this.dots.forEach(t=>t.classList.remove("done","active"))}updatePhaseUI(){const t=Ni[this.phaseIndex];this.phaseTitleEl.textContent=t.title,this.phaseInstructionEl.textContent=t.instruction,this.breathLabel.textContent=t.buttonLabel,this.breathCount.textContent=String(hi),this.breathButton.classList.toggle("phase-hold",t.requiredPressed),this.breathButton.classList.toggle("phase-release",!t.requiredPressed),this.dots.forEach((e,n)=>{e.classList.toggle("done",n<this.phaseIndex),e.classList.toggle("active",n===this.phaseIndex)})}lose(t){this.state="lost",this.pressed=!1,this.breathButton.classList.remove("is-pressed"),this.loseMessageEl.textContent=t,this.loseOverlay.style.display=""}win(){this.state="won",this.hasWon=!0,this.colorProgress=1,this.breathScale=.62,this.dots.forEach(t=>t.classList.add("done")),this.winOverlay.style.display=""}updateBreathing(t){const e=Ni[this.phaseIndex];if(this.pressed===e.requiredPressed)this.phaseElapsed+=t;else if(this.phaseElapsed>0){this.lose(e.failMessage);return}this.breathCount.textContent=String(Math.max(1,Math.ceil(hi-this.phaseElapsed)));const s=Math.min(1,this.phaseElapsed/hi);if(this.colorProgress=(this.phaseIndex+s)/Ni.length,this.phaseElapsed>=hi){if(this.phaseIndex+=1,this.phaseElapsed=0,this.phaseIndex>=Ni.length){this.win();return}this.updatePhaseUI()}}updateRingVisual(){const t=this.state==="playing"&&this.phaseElapsed>0;if(this.breathButton.classList.toggle("is-waiting",!t),!t){this.breathRing.style.transform="";return}const e=Math.min(1,this.phaseElapsed/hi),n=Nm(e),s=this.clock.elapsedTime;let r;this.phaseIndex===0?r=nl(.62,1.35,n):this.phaseIndex===1?r=1.35+Math.sin(s*3)*.015:this.phaseIndex===2?r=nl(1.35,.62,n):r=.62+Math.sin(s*1.2)*.02,this.breathScale=r,this.breathRing.style.transform=`translate(-50%, -50%) scale(${r})`}setupScene(){this.renderer=new Ys({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(this.getPixelRatio()),this.renderer.setClearColor(this.tense.sky,1),this.renderer.shadowMap.enabled=!0,this.canvasHost.appendChild(this.renderer.domElement),this.scene=new Vs,this.scene.fog=new ji(this.tense.fog,9,22),this.camera=new Te(42,1,.1,80),this.camera.position.set(0,3.3,7.2),this.camera.lookAt(0,1.3,0),this.hemi=new Xs(this.tense.hemiSky,this.tense.hemiGround,1.7),this.scene.add(this.hemi),this.sun=new Xi(this.tense.sun,2.1),this.sun.position.set(-3,6,4),this.sun.castShadow=!0,this.scene.add(this.sun);const t=new Dt(new qe(2.6,2.9,.6,10),new oe({color:this.tense.land,roughness:.82,flatShading:!0}));t.position.y=-.2,t.receiveShadow=!0,this.landMesh=t,this.scene.add(t);const e=new Dt(new qe(2.15,2.6,.7,10),new oe({color:this.tense.base,roughness:.9,flatShading:!0}));e.position.y=-.75,this.baseMesh=e,this.scene.add(e);const n=new Dt(new qe(.55,.7,.5,8),new oe({color:"#4a4038",roughness:.88,flatShading:!0}));n.position.y=.35,n.castShadow=!0,n.receiveShadow=!0,this.scene.add(n);const s=new oe({color:this.tense.ring,emissive:this.tense.ring,emissiveIntensity:.6,roughness:.35,flatShading:!0});this.orb=new Dt(new Fa(.5,1),s),this.orb.position.y=1.55,this.orb.castShadow=!0,this.scene.add(this.orb);const r=new Ce({color:this.tense.ring,transparent:!0,opacity:.18});this.orbGlow=new Dt(new Gn(.75,14,10),r),this.orbGlow.position.copy(this.orb.position),this.scene.add(this.orbGlow),[{kind:"tree",x:-1.6,z:.6},{kind:"tree",x:1.7,z:-.4},{kind:"rock",x:-1.3,z:-1.3},{kind:"rock",x:1.3,z:1.3}].forEach(o=>{const l=o.kind==="tree"?this.makeTree():this.makeRock();l.position.set(o.x,.1,o.z),this.scene.add(l)}),this.particles=[];for(let o=0;o<18;o+=1){const l=new Dt(new Oa(.05+Math.random()*.05,0),new Ce({color:this.tense.ring,transparent:!0,opacity:.4})),c=Math.random()*Math.PI*2,h=.7+Math.random()*1.6,d=.4+Math.random()*1.7;l.position.set(Math.cos(c)*h,d,Math.sin(c)*h),l.userData={angle:c,radius:h,baseY:d,speed:.15+Math.random()*.3,riseSpeed:.4+Math.random()*.5,phase:Math.random()*Math.PI*2},this.scene.add(l),this.particles.push(l)}this.renderer.render(this.scene,this.camera)}makeTree(){const t=new Xe,e=new Dt(new qe(.07,.09,.5,6),new oe({color:"#5a3a24",roughness:.9,flatShading:!0}));e.position.y=.25;const n=new Dt(new Zi(.32,.7,7),new oe({color:"#3d5a3a",roughness:.85,flatShading:!0}));return n.position.y=.78,t.add(e,n),t.castShadow=!0,t}makeRock(){const t=new Dt(new Hn(.24,0),new oe({color:"#5c5248",roughness:.9,flatShading:!0}));return t.castShadow=!0,t}updateAtmosphere(t){const e=this.clock.elapsedTime,n=this.colorProgress,s=Sn(this.tense.fog,Mn.fog,n),r=Sn(this.tense.sky,Mn.sky,n),a=Sn(this.tense.hemiSky,Mn.hemiSky,n),o=Sn(this.tense.hemiGround,Mn.hemiGround,n),l=Sn(this.tense.sun,Mn.sun,n),c=Sn(this.tense.land,Mn.land,n),h=Sn(this.tense.base,Mn.base,n),d=Sn(this.tense.ring,Mn.ring,n);this.scene.fog.color.set(s),this.renderer.setClearColor(r,1),this.hemi.color.set(a),this.hemi.groundColor.set(o),this.sun.color.set(l),this.landMesh.material.color.set(c),this.baseMesh.material.color.set(h),this.orb.material.color.set(d),this.orb.material.emissive.set(d),this.orbGlow.material.color.set(d),this.root.style.setProperty("--breath-color",d),this.orb.position.y=1.55+Math.sin(e*1.1)*.05,this.orbGlow.position.y=this.orb.position.y,this.orb.scale.setScalar(this.breathScale),this.orbGlow.scale.setScalar(this.breathScale*1.08),this.orb.rotation.y+=t*.4,this.camera.position.x=Math.sin(e*.18)*.28,this.camera.lookAt(0,1.3,0),this.particles.forEach(f=>{f.userData.phase+=t*f.userData.speed;const m=Math.sin(f.userData.phase)*.18,g=f.userData.angle+e*(.06+(1-n)*.1);f.position.x=Math.cos(g)*(f.userData.radius+m),f.position.z=Math.sin(g)*(f.userData.radius+m),f.position.y=f.userData.baseY+Math.sin(e*f.userData.riseSpeed*(1.6-n*.6)+f.userData.phase)*.35,f.material.color.set(d),f.material.opacity=.3+Math.sin(e*(2.4-n)+f.userData.phase)*.2})}resize=()=>{const t=this.canvasHost.getBoundingClientRect(),e=Math.max(1,t.width),n=Math.max(1,t.height);this.renderer.setSize(e,n,!1),this.renderer.setPixelRatio(this.getPixelRatio()),this.camera.aspect=e/n,this.camera.updateProjectionMatrix()};animate=()=>{if(!this.mounted)return;const t=this.clock.getDelta(),e=Math.min(t,.033);this.state==="playing"&&this.updateBreathing(t),this.updateRingVisual(),this.updateAtmosphere(e),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate)};getPixelRatio(){const t=window.matchMedia("(pointer: coarse)").matches;return Math.min(window.devicePixelRatio||1,t?1.25:1.5)}}const il={"joy-stars":Cm,"support-rain":tl,"valle-nubes":tl,"volcano-control":Pm,"guided-breathing":Fm,"darkness-light":Lm,"spirit-cleaning":Dm,"surprise-boxes":Im,"coming-soon":Um},Wl="emotion-islands-player",Cr=["🧒","👧","🦊","🐱","🐶","🌟","🌊","🔥","🌈","🦋","🐸","🦉"],Pr=[{name:"Dorado",value:"#f59f00"},{name:"Turquesa",value:"#1f9d82"},{name:"Lila",value:"#5947a5"},{name:"Rosa",value:"#e76856"},{name:"Azul",value:"#3178a8"},{name:"Verde",value:"#72c264"}];function Cs(){try{const i=window.localStorage.getItem(Wl);return i?JSON.parse(i):null}catch{return null}}function Om(i){window.localStorage.setItem(Wl,JSON.stringify(i))}class Bm{constructor(t){this.root=t,this.state="start",this.completed=new Set(JSON.parse(window.localStorage.getItem("emotion-islands-progress")??"[]")),this.currentMinigame=null,this.player=Cs()}start(){this.root.innerHTML=`
      <main class="shell">
        <div class="scene-host" data-scene-host></div>
        <div class="overlay-root" data-overlay-root></div>
      </main>
    `,this.sceneHost=this.root.querySelector("[data-scene-host]"),this.overlayRoot=this.root.querySelector("[data-overlay-root]"),this.world=new Rm(this.sceneHost,Ai,{onIslandSelected:t=>this.selectIsland(t),onProximityChange:t=>this.onProximityChange(t)}),this.world.mount(),this.world.setCompleted(this.completed),this.player?.favoriteColor&&this.world.setPlayerAppearance(this.player.favoriteColor),this.showStart()}showStart(){this.state="start",this.world.focusMap(),this.player=Cs(),this.player?(this.overlayRoot.innerHTML=`
        <section class="start-screen">
          <div class="brand-mark">${this.player.avatar}</div>
          <h1>Hola, ${this.player.name}</h1>
          <p>Explora un archipielago 3D y completa retos breves sobre lo que sentimos.</p>
          <button class="primary-action" type="button" data-start>Comenzar</button>
          <button class="text-action" type="button" data-edit-profile>Mi perfil</button>
        </section>
      `,this.overlayRoot.querySelector("[data-start]").addEventListener("click",()=>this.showMap()),this.overlayRoot.querySelector("[data-edit-profile]").addEventListener("click",()=>this.showProfile(!0))):(this.overlayRoot.innerHTML=`
        <section class="start-screen">
          <div class="brand-mark">IE</div>
          <h1>Isla de las Emociones</h1>
          <p>Explora un archipielago 3D y completa retos breves sobre lo que sentimos.</p>
          <button class="primary-action" type="button" data-create-profile>Crear mi perfil</button>
        </section>
      `,this.overlayRoot.querySelector("[data-create-profile]").addEventListener("click",()=>this.showProfile(!1)))}showProfile(t){this.state="profile",this.world.focusMap();const e=Cs(),n=e?.avatar??Cr[0],s=e?.favoriteColor??Pr[0].value,r=e?.name??"";this.overlayRoot.innerHTML=`
      <section class="profile-screen">
        <h2>${t?"Mi perfil":"Crea tu perfil"}</h2>
        <p>${t?"Actualiza tu informacion personal.":"Cuentanos quien eres para personalizar tu experiencia."}</p>

        <label class="profile-label" for="player-name">Tu nombre</label>
        <input class="profile-input" id="player-name" type="text" placeholder="Escribe tu nombre..." maxlength="20" value="${r}" />

        <label class="profile-label">Elige tu avatar</label>
        <div class="avatar-grid" data-avatar-grid>
          ${Cr.map(c=>`
            <button class="avatar-option ${c===n?"selected":""}" type="button" data-avatar="${c}">${c}</button>
          `).join("")}
        </div>

        <label class="profile-label">Tu color favorito</label>
        <div class="color-grid" data-color-grid>
          ${Pr.map(c=>`
            <button class="color-option ${c.value===s?"selected":""}" type="button" data-color="${c.value}" style="--swatch:${c.value}" title="${c.name}">
              <span class="color-swatch"></span>
              <span class="color-name">${c.name}</span>
            </button>
          `).join("")}
        </div>

        <div class="profile-actions">
          <button class="primary-action" type="button" data-save-profile>${t?"Guardar":"Comenzar"}</button>
          ${t?'<button class="secondary-action" type="button" data-cancel-profile>Cancelar</button>':""}
        </div>
      </section>
    `;const a=this.overlayRoot.querySelector("#player-name"),o=this.overlayRoot.querySelector("[data-avatar-grid]"),l=this.overlayRoot.querySelector("[data-color-grid]");o.addEventListener("click",c=>{const h=c.target.closest("[data-avatar]");h&&(o.querySelectorAll(".avatar-option").forEach(d=>d.classList.remove("selected")),h.classList.add("selected"))}),l.addEventListener("click",c=>{const h=c.target.closest("[data-color]");h&&(l.querySelectorAll(".color-option").forEach(d=>d.classList.remove("selected")),h.classList.add("selected"))}),this.overlayRoot.querySelector("[data-save-profile]").addEventListener("click",()=>{const c=a.value.trim();if(!c){a.classList.add("shake"),setTimeout(()=>a.classList.remove("shake"),400);return}const h=o.querySelector(".avatar-option.selected")?.dataset.avatar??Cr[0],d=l.querySelector(".color-option.selected")?.dataset.color??Pr[0].value;this.player={name:c,avatar:h,favoriteColor:d},Om(this.player),this.world&&this.world.setPlayerAppearance(d),this.showMap()}),t&&this.overlayRoot.querySelector("[data-cancel-profile]").addEventListener("click",()=>this.showMap())}showMap(){if(Ai.length===1){this.selectIsland(Ai[0].id);return}this.state="map",this.world.focusMap(),this.player=Cs(),this.player&&`${this.player.avatar}${this.player.name}`,this.overlayRoot.innerHTML=`
      <section class="map-hud">
        <div>
          <p class="eyebrow">Mapa principal</p>
          <h2>Elige una isla</h2>
        </div>
        <div class="hud-right">
          ${this.player?`
            <button class="player-pill" type="button" data-edit-profile style="--pill-color:${this.player.favoriteColor}">
              <span class="pill-avatar">${this.player.avatar}</span>
              <span class="pill-name">${this.player.name}</span>
            </button>
          `:""}
          <div class="progress-pill">${this.completed.size}/${Ai.length} completadas</div>
        </div>
      </section>
      <div class="touch-controls" data-touch-controls>
        <div class="joystick-zone" data-joystick-zone>
          <div class="joystick-base" data-joystick-base>
            <div class="joystick-stick" data-joystick-stick></div>
          </div>
        </div>
        <button class="action-button" data-action-button type="button">E</button>
      </div>
      <div class="controls-hint">
        <span>W A S D</span> mover &middot; <span>E</span> entrar
      </div>
    `;const t=this.overlayRoot.querySelector("[data-edit-profile]");t&&t.addEventListener("click",()=>this.showProfile(!0)),this.setupTouchControls()}setupTouchControls(){const t=this.overlayRoot.querySelector("[data-joystick-zone]"),e=this.overlayRoot.querySelector("[data-joystick-base]"),n=this.overlayRoot.querySelector("[data-joystick-stick]"),s=this.overlayRoot.querySelector("[data-action-button]");if(!t||!e||!n)return;let r=!1,a=null;const o=40,l=(h,d)=>{const f=e.getBoundingClientRect(),m=f.left+f.width/2,g=f.top+f.height/2;let S=h-m,p=d-g;const u=Math.sqrt(S*S+p*p);u>o&&(S=S/u*o,p=p/u*o),n.style.transform=`translate(${S}px, ${p}px)`;const b=S/o,E=p/o;this.world&&(this.world.keys.d=b>.2,this.world.keys.a=b<-.2,this.world.keys.s=E>.2,this.world.keys.w=E<-.2)},c=()=>{r=!1,a=null,n.style.transform="translate(0, 0)",this.world&&(this.world.keys.w=!1,this.world.keys.a=!1,this.world.keys.s=!1,this.world.keys.d=!1)};t.addEventListener("pointerdown",h=>{r=!0,a=h.pointerId,t.setPointerCapture(h.pointerId),l(h.clientX,h.clientY)}),t.addEventListener("pointermove",h=>{!r||h.pointerId!==a||l(h.clientX,h.clientY)}),t.addEventListener("pointerup",h=>{h.pointerId===a&&c()}),t.addEventListener("pointercancel",h=>{h.pointerId===a&&c()}),s&&s.addEventListener("pointerdown",h=>{h.preventDefault(),this.world&&this.world.nearIsland&&this.selectIsland(this.world.nearIsland.id)})}onProximityChange(t){if(this.state!=="map")return;let e=this.overlayRoot.querySelector(".proximity-prompt");if(!t){e&&e.remove();return}e||(e=document.createElement("div"),e.className="proximity-prompt",this.overlayRoot.appendChild(e));const n=this.completed.has(t.id);e.innerHTML=`
      <strong>${t.displayName}</strong>
      <span>${n?"Volver a jugar":"Presiona E para entrar"}</span>
    `,e.style.setProperty("--accent",t.palette.ui)}renderIslandButton(t){const e=this.completed.has(t.id);return`
      <button class="island-chip" style="--chip:${t.palette.ui}" data-island-id="${t.id}" type="button">
        <span class="chip-emoji">${t.emoji||""}</span>
        <span>
          <strong>${t.name}</strong>
          <small>${Kl[t.minigame]}</small>
        </span>
        <em>${e?"Completada":"Entrar"}</em>
      </button>
    `}selectIsland(t){const e=Ai.find(n=>n.id===t);e&&(this.state="island",this.world.focusOnIsland(t),this.overlayRoot.innerHTML=`
      <section class="island-panel" style="--accent:${e.palette.ui}">
        <p class="eyebrow">${e.name}</p>
        <h2>${e.displayName}</h2>
        <p>${e.subtitle}</p>
        <div class="panel-actions">
          <button class="primary-action" type="button" data-play>Jugar</button>
          <button class="secondary-action" type="button" data-back>Mapa</button>
        </div>
      </section>
    `,this.overlayRoot.querySelector("[data-play]").addEventListener("click",()=>this.launchMinigame(e)),this.overlayRoot.querySelector("[data-back]").addEventListener("click",()=>this.showMap()))}launchMinigame(t){const e=il[t.minigame]??il["coming-soon"];this.state="game",this.overlayRoot.innerHTML="",this.currentMinigame=new e({host:this.overlayRoot,island:t,player:this.player,onComplete:n=>this.showResult(n),onExit:()=>this.exitMinigame()}),this.currentMinigame.mount()}exitMinigame(){this.currentMinigame?.dispose(),this.currentMinigame=null,this.showMap()}showResult(t){this.currentMinigame?.dispose(),this.currentMinigame=null,t.success&&(this.completed.add(t.islandId),window.localStorage.setItem("emotion-islands-progress",JSON.stringify([...this.completed])),this.world.setCompleted(this.completed));const e=this.player?.name,n=e?t.success?`${e}, completaste ${t.title}`:`${e}, ${t.title}`:t.title;this.overlayRoot.innerHTML=`
      <section class="result-screen">
        <p class="eyebrow">Resultado</p>
        <h2>${n}</h2>
        <p>${t.message}</p>
        ${t.target?`<div class="result-score">${t.score}/${t.target} ${t.unit??"destellos"}</div>`:""}
        <button class="primary-action" type="button" data-back-map>Volver al mapa</button>
      </section>
    `,this.overlayRoot.querySelector("[data-back-map]").addEventListener("click",()=>this.showMap())}}const zm=document.querySelector("#app"),km=new Bm(zm);km.start();fetch("https://abacus.jasoncameron.dev/hit/michaelpob-isla-emociones-3d",{cache:"no-store"}).catch(()=>{});

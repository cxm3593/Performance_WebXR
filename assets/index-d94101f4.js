var eD=(E,I)=>()=>(I||E((I={exports:{}}).exports,I),I.exports);var yM=eD((WE,wn)=>{(function(){const I=document.createElement("link").relList;if(I&&I.supports&&I.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const y of c.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&o(y)}).observe(document,{childList:!0,subtree:!0});function i(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=i(r);fetch(r.href,c)}})();console.warn('Scripts "build/three.js" and "build/three.min.js" are deprecated with r150+, and will be removed with r160. Please use ES Modules or alternatives: https://threejs.org/docs/index.html#manual/en/introduction/Installation');/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */(function(E,I){typeof WE=="object"&&typeof wn<"u"?I(WE):typeof define=="function"&&define.amd?define(["exports"],I):I((E=typeof globalThis<"u"?globalThis:E||self).THREE={})})(globalThis,function(E){const I="150",eA="srgb",NA="srgb-linear",kA="display-p3",yg="300 es";class oI{addEventListener(A,g){this._listeners===void 0&&(this._listeners={});const t=this._listeners;t[A]===void 0&&(t[A]=[]),t[A].indexOf(g)===-1&&t[A].push(g)}hasEventListener(A,g){if(this._listeners===void 0)return!1;const t=this._listeners;return t[A]!==void 0&&t[A].indexOf(g)!==-1}removeEventListener(A,g){if(this._listeners===void 0)return;const t=this._listeners[A];if(t!==void 0){const e=t.indexOf(g);e!==-1&&t.splice(e,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const t=g.slice(0);for(let e=0,C=t.length;e<C;e++)t[e].call(this,A);A.target=null}}}const fI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let At=1234567;const rt=Math.PI/180,ee=180/Math.PI;function yt(){const B=4294967295*Math.random()|0,A=4294967295*Math.random()|0,g=4294967295*Math.random()|0,t=4294967295*Math.random()|0;return(fI[255&B]+fI[B>>8&255]+fI[B>>16&255]+fI[B>>24&255]+"-"+fI[255&A]+fI[A>>8&255]+"-"+fI[A>>16&15|64]+fI[A>>24&255]+"-"+fI[63&g|128]+fI[g>>8&255]+"-"+fI[g>>16&255]+fI[g>>24&255]+fI[255&t]+fI[t>>8&255]+fI[t>>16&255]+fI[t>>24&255]).toLowerCase()}function ht(B,A,g){return Math.max(A,Math.min(g,B))}function Tt(B,A){return(B%A+A)%A}function Pe(B,A,g){return(1-g)*B+g*A}function Kt(B){return(B&B-1)==0&&B!==0}function _t(B){return Math.pow(2,Math.ceil(Math.log(B)/Math.LN2))}function me(B){return Math.pow(2,Math.floor(Math.log(B)/Math.LN2))}function re(B,A){switch(A.constructor){case Float32Array:return B;case Uint16Array:return B/65535;case Uint8Array:return B/255;case Int16Array:return Math.max(B/32767,-1);case Int8Array:return Math.max(B/127,-1);default:throw new Error("Invalid component type.")}}function Kg(B,A){switch(A.constructor){case Float32Array:return B;case Uint16Array:return Math.round(65535*B);case Uint8Array:return Math.round(255*B);case Int16Array:return Math.round(32767*B);case Int8Array:return Math.round(127*B);default:throw new Error("Invalid component type.")}}const gt={DEG2RAD:rt,RAD2DEG:ee,generateUUID:yt,clamp:ht,euclideanModulo:Tt,mapLinear:function(B,A,g,t,e){return t+(B-A)*(e-t)/(g-A)},inverseLerp:function(B,A,g){return B!==A?(g-B)/(A-B):0},lerp:Pe,damp:function(B,A,g,t){return Pe(B,A,1-Math.exp(-g*t))},pingpong:function(B,A=1){return A-Math.abs(Tt(B,2*A)-A)},smoothstep:function(B,A,g){return B<=A?0:B>=g?1:(B=(B-A)/(g-A))*B*(3-2*B)},smootherstep:function(B,A,g){return B<=A?0:B>=g?1:(B=(B-A)/(g-A))*B*B*(B*(6*B-15)+10)},randInt:function(B,A){return B+Math.floor(Math.random()*(A-B+1))},randFloat:function(B,A){return B+Math.random()*(A-B)},randFloatSpread:function(B){return B*(.5-Math.random())},seededRandom:function(B){B!==void 0&&(At=B);let A=At+=1831565813;return A=Math.imul(A^A>>>15,1|A),A^=A+Math.imul(A^A>>>7,61|A),((A^A>>>14)>>>0)/4294967296},degToRad:function(B){return B*rt},radToDeg:function(B){return B*ee},isPowerOfTwo:Kt,ceilPowerOfTwo:_t,floorPowerOfTwo:me,setQuaternionFromProperEuler:function(B,A,g,t,e){const C=Math.cos,Q=Math.sin,n=C(g/2),a=Q(g/2),s=C((A+t)/2),d=Q((A+t)/2),D=C((A-t)/2),u=Q((A-t)/2),f=C((t-A)/2),S=Q((t-A)/2);switch(e){case"XYX":B.set(n*d,a*D,a*u,n*s);break;case"YZY":B.set(a*u,n*d,a*D,n*s);break;case"ZXZ":B.set(a*D,a*u,n*d,n*s);break;case"XZX":B.set(n*d,a*S,a*f,n*s);break;case"YXY":B.set(a*f,n*d,a*S,n*s);break;case"ZYZ":B.set(a*S,a*f,n*d,n*s);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+e)}},normalize:Kg,denormalize:re};class pg{constructor(A=0,g=0){pg.prototype.isVector2=!0,this.x=A,this.y=g}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,g){return this.x=A,this.y=g,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,g){switch(A){case 0:this.x=g;break;case 1:this.y=g;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,g){return this.x=A.x+g.x,this.y=A.y+g.y,this}addScaledVector(A,g){return this.x+=A.x*g,this.y+=A.y*g,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,g){return this.x=A.x-g.x,this.y=A.y-g.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const g=this.x,t=this.y,e=A.elements;return this.x=e[0]*g+e[3]*t+e[6],this.y=e[1]*g+e[4]*t+e[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,g){return this.x=Math.max(A.x,Math.min(g.x,this.x)),this.y=Math.max(A.y,Math.min(g.y,this.y)),this}clampScalar(A,g){return this.x=Math.max(A,Math.min(g,this.x)),this.y=Math.max(A,Math.min(g,this.y)),this}clampLength(A,g){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(g,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const g=this.x-A.x,t=this.y-A.y;return g*g+t*t}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,g){return this.x+=(A.x-this.x)*g,this.y+=(A.y-this.y)*g,this}lerpVectors(A,g,t){return this.x=A.x+(g.x-A.x)*t,this.y=A.y+(g.y-A.y)*t,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,g=0){return this.x=A[g],this.y=A[g+1],this}toArray(A=[],g=0){return A[g]=this.x,A[g+1]=this.y,A}fromBufferAttribute(A,g){return this.x=A.getX(g),this.y=A.getY(g),this}rotateAround(A,g){const t=Math.cos(g),e=Math.sin(g),C=this.x-A.x,Q=this.y-A.y;return this.x=C*t-Q*e+A.x,this.y=C*e+Q*t+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,g,t,e,C,Q,n,a,s){const d=this.elements;return d[0]=A,d[1]=e,d[2]=n,d[3]=g,d[4]=C,d[5]=a,d[6]=t,d[7]=Q,d[8]=s,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const g=this.elements,t=A.elements;return g[0]=t[0],g[1]=t[1],g[2]=t[2],g[3]=t[3],g[4]=t[4],g[5]=t[5],g[6]=t[6],g[7]=t[7],g[8]=t[8],this}extractBasis(A,g,t){return A.setFromMatrix3Column(this,0),g.setFromMatrix3Column(this,1),t.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const g=A.elements;return this.set(g[0],g[4],g[8],g[1],g[5],g[9],g[2],g[6],g[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,g){const t=A.elements,e=g.elements,C=this.elements,Q=t[0],n=t[3],a=t[6],s=t[1],d=t[4],D=t[7],u=t[2],f=t[5],S=t[8],M=e[0],x=e[3],K=e[6],k=e[1],T=e[4],W=e[7],j=e[2],QA=e[5],pA=e[8];return C[0]=Q*M+n*k+a*j,C[3]=Q*x+n*T+a*QA,C[6]=Q*K+n*W+a*pA,C[1]=s*M+d*k+D*j,C[4]=s*x+d*T+D*QA,C[7]=s*K+d*W+D*pA,C[2]=u*M+f*k+S*j,C[5]=u*x+f*T+S*QA,C[8]=u*K+f*W+S*pA,this}multiplyScalar(A){const g=this.elements;return g[0]*=A,g[3]*=A,g[6]*=A,g[1]*=A,g[4]*=A,g[7]*=A,g[2]*=A,g[5]*=A,g[8]*=A,this}determinant(){const A=this.elements,g=A[0],t=A[1],e=A[2],C=A[3],Q=A[4],n=A[5],a=A[6],s=A[7],d=A[8];return g*Q*d-g*n*s-t*C*d+t*n*a+e*C*s-e*Q*a}invert(){const A=this.elements,g=A[0],t=A[1],e=A[2],C=A[3],Q=A[4],n=A[5],a=A[6],s=A[7],d=A[8],D=d*Q-n*s,u=n*a-d*C,f=s*C-Q*a,S=g*D+t*u+e*f;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/S;return A[0]=D*M,A[1]=(e*s-d*t)*M,A[2]=(n*t-e*Q)*M,A[3]=u*M,A[4]=(d*g-e*a)*M,A[5]=(e*C-n*g)*M,A[6]=f*M,A[7]=(t*a-s*g)*M,A[8]=(Q*g-t*C)*M,this}transpose(){let A;const g=this.elements;return A=g[1],g[1]=g[3],g[3]=A,A=g[2],g[2]=g[6],g[6]=A,A=g[5],g[5]=g[7],g[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const g=this.elements;return A[0]=g[0],A[1]=g[3],A[2]=g[6],A[3]=g[1],A[4]=g[4],A[5]=g[7],A[6]=g[2],A[7]=g[5],A[8]=g[8],this}setUvTransform(A,g,t,e,C,Q,n){const a=Math.cos(C),s=Math.sin(C);return this.set(t*a,t*s,-t*(a*Q+s*n)+Q+A,-e*s,e*a,-e*(-s*Q+a*n)+n+g,0,0,1),this}scale(A,g){return this.premultiply(zC.makeScale(A,g)),this}rotate(A){return this.premultiply(zC.makeRotation(-A)),this}translate(A,g){return this.premultiply(zC.makeTranslation(A,g)),this}makeTranslation(A,g){return this.set(1,0,A,0,1,g,0,0,1),this}makeRotation(A){const g=Math.cos(A),t=Math.sin(A);return this.set(g,-t,0,t,g,0,0,0,1),this}makeScale(A,g){return this.set(A,0,0,0,g,0,0,0,1),this}equals(A){const g=this.elements,t=A.elements;for(let e=0;e<9;e++)if(g[e]!==t[e])return!1;return!0}fromArray(A,g=0){for(let t=0;t<9;t++)this.elements[t]=A[t+g];return this}toArray(A=[],g=0){const t=this.elements;return A[g]=t[0],A[g+1]=t[1],A[g+2]=t[2],A[g+3]=t[3],A[g+4]=t[4],A[g+5]=t[5],A[g+6]=t[6],A[g+7]=t[7],A[g+8]=t[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const zC=new Wt;function QB(B){for(let A=B.length-1;A>=0;--A)if(B[A]>=65535)return!0;return!1}const jC={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Di(B,A){return new jC[B](A)}function qi(B){return document.createElementNS("http://www.w3.org/1999/xhtml",B)}class he{constructor(A=0,g=0,t=0,e=1){this.isQuaternion=!0,this._x=A,this._y=g,this._z=t,this._w=e}static slerpFlat(A,g,t,e,C,Q,n){let a=t[e+0],s=t[e+1],d=t[e+2],D=t[e+3];const u=C[Q+0],f=C[Q+1],S=C[Q+2],M=C[Q+3];if(n===0)return A[g+0]=a,A[g+1]=s,A[g+2]=d,void(A[g+3]=D);if(n===1)return A[g+0]=u,A[g+1]=f,A[g+2]=S,void(A[g+3]=M);if(D!==M||a!==u||s!==f||d!==S){let x=1-n;const K=a*u+s*f+d*S+D*M,k=K>=0?1:-1,T=1-K*K;if(T>Number.EPSILON){const j=Math.sqrt(T),QA=Math.atan2(j,K*k);x=Math.sin(x*QA)/j,n=Math.sin(n*QA)/j}const W=n*k;if(a=a*x+u*W,s=s*x+f*W,d=d*x+S*W,D=D*x+M*W,x===1-n){const j=1/Math.sqrt(a*a+s*s+d*d+D*D);a*=j,s*=j,d*=j,D*=j}}A[g]=a,A[g+1]=s,A[g+2]=d,A[g+3]=D}static multiplyQuaternionsFlat(A,g,t,e,C,Q){const n=t[e],a=t[e+1],s=t[e+2],d=t[e+3],D=C[Q],u=C[Q+1],f=C[Q+2],S=C[Q+3];return A[g]=n*S+d*D+a*f-s*u,A[g+1]=a*S+d*u+s*D-n*f,A[g+2]=s*S+d*f+n*u-a*D,A[g+3]=d*S-n*D-a*u-s*f,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,g,t,e){return this._x=A,this._y=g,this._z=t,this._w=e,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,g){const t=A._x,e=A._y,C=A._z,Q=A._order,n=Math.cos,a=Math.sin,s=n(t/2),d=n(e/2),D=n(C/2),u=a(t/2),f=a(e/2),S=a(C/2);switch(Q){case"XYZ":this._x=u*d*D+s*f*S,this._y=s*f*D-u*d*S,this._z=s*d*S+u*f*D,this._w=s*d*D-u*f*S;break;case"YXZ":this._x=u*d*D+s*f*S,this._y=s*f*D-u*d*S,this._z=s*d*S-u*f*D,this._w=s*d*D+u*f*S;break;case"ZXY":this._x=u*d*D-s*f*S,this._y=s*f*D+u*d*S,this._z=s*d*S+u*f*D,this._w=s*d*D-u*f*S;break;case"ZYX":this._x=u*d*D-s*f*S,this._y=s*f*D+u*d*S,this._z=s*d*S-u*f*D,this._w=s*d*D+u*f*S;break;case"YZX":this._x=u*d*D+s*f*S,this._y=s*f*D+u*d*S,this._z=s*d*S-u*f*D,this._w=s*d*D-u*f*S;break;case"XZY":this._x=u*d*D-s*f*S,this._y=s*f*D-u*d*S,this._z=s*d*S+u*f*D,this._w=s*d*D+u*f*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+Q)}return g!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,g){const t=g/2,e=Math.sin(t);return this._x=A.x*e,this._y=A.y*e,this._z=A.z*e,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(A){const g=A.elements,t=g[0],e=g[4],C=g[8],Q=g[1],n=g[5],a=g[9],s=g[2],d=g[6],D=g[10],u=t+n+D;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-a)*f,this._y=(C-s)*f,this._z=(Q-e)*f}else if(t>n&&t>D){const f=2*Math.sqrt(1+t-n-D);this._w=(d-a)/f,this._x=.25*f,this._y=(e+Q)/f,this._z=(C+s)/f}else if(n>D){const f=2*Math.sqrt(1+n-t-D);this._w=(C-s)/f,this._x=(e+Q)/f,this._y=.25*f,this._z=(a+d)/f}else{const f=2*Math.sqrt(1+D-t-n);this._w=(Q-e)/f,this._x=(C+s)/f,this._y=(a+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(A,g){let t=A.dot(g)+1;return t<Number.EPSILON?(t=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=t):(this._x=0,this._y=-A.z,this._z=A.y,this._w=t)):(this._x=A.y*g.z-A.z*g.y,this._y=A.z*g.x-A.x*g.z,this._z=A.x*g.y-A.y*g.x,this._w=t),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(ht(this.dot(A),-1,1)))}rotateTowards(A,g){const t=this.angleTo(A);if(t===0)return this;const e=Math.min(1,g/t);return this.slerp(A,e),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,g){const t=A._x,e=A._y,C=A._z,Q=A._w,n=g._x,a=g._y,s=g._z,d=g._w;return this._x=t*d+Q*n+e*s-C*a,this._y=e*d+Q*a+C*n-t*s,this._z=C*d+Q*s+t*a-e*n,this._w=Q*d-t*n-e*a-C*s,this._onChangeCallback(),this}slerp(A,g){if(g===0)return this;if(g===1)return this.copy(A);const t=this._x,e=this._y,C=this._z,Q=this._w;let n=Q*A._w+t*A._x+e*A._y+C*A._z;if(n<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,n=-n):this.copy(A),n>=1)return this._w=Q,this._x=t,this._y=e,this._z=C,this;const a=1-n*n;if(a<=Number.EPSILON){const f=1-g;return this._w=f*Q+g*this._w,this._x=f*t+g*this._x,this._y=f*e+g*this._y,this._z=f*C+g*this._z,this.normalize(),this._onChangeCallback(),this}const s=Math.sqrt(a),d=Math.atan2(s,n),D=Math.sin((1-g)*d)/s,u=Math.sin(g*d)/s;return this._w=Q*D+this._w*u,this._x=t*D+this._x*u,this._y=e*D+this._y*u,this._z=C*D+this._z*u,this._onChangeCallback(),this}slerpQuaternions(A,g,t){return this.copy(A).slerp(g,t)}random(){const A=Math.random(),g=Math.sqrt(1-A),t=Math.sqrt(A),e=2*Math.PI*Math.random(),C=2*Math.PI*Math.random();return this.set(g*Math.cos(e),t*Math.sin(C),t*Math.cos(C),g*Math.sin(e))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,g=0){return this._x=A[g],this._y=A[g+1],this._z=A[g+2],this._w=A[g+3],this._onChangeCallback(),this}toArray(A=[],g=0){return A[g]=this._x,A[g+1]=this._y,A[g+2]=this._z,A[g+3]=this._w,A}fromBufferAttribute(A,g){return this._x=A.getX(g),this._y=A.getY(g),this._z=A.getZ(g),this._w=A.getW(g),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class iA{constructor(A=0,g=0,t=0){iA.prototype.isVector3=!0,this.x=A,this.y=g,this.z=t}set(A,g,t){return t===void 0&&(t=this.z),this.x=A,this.y=g,this.z=t,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,g){switch(A){case 0:this.x=g;break;case 1:this.y=g;break;case 2:this.z=g;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,g){return this.x=A.x+g.x,this.y=A.y+g.y,this.z=A.z+g.z,this}addScaledVector(A,g){return this.x+=A.x*g,this.y+=A.y*g,this.z+=A.z*g,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,g){return this.x=A.x-g.x,this.y=A.y-g.y,this.z=A.z-g.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,g){return this.x=A.x*g.x,this.y=A.y*g.y,this.z=A.z*g.z,this}applyEuler(A){return this.applyQuaternion(AQ.setFromEuler(A))}applyAxisAngle(A,g){return this.applyQuaternion(AQ.setFromAxisAngle(A,g))}applyMatrix3(A){const g=this.x,t=this.y,e=this.z,C=A.elements;return this.x=C[0]*g+C[3]*t+C[6]*e,this.y=C[1]*g+C[4]*t+C[7]*e,this.z=C[2]*g+C[5]*t+C[8]*e,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const g=this.x,t=this.y,e=this.z,C=A.elements,Q=1/(C[3]*g+C[7]*t+C[11]*e+C[15]);return this.x=(C[0]*g+C[4]*t+C[8]*e+C[12])*Q,this.y=(C[1]*g+C[5]*t+C[9]*e+C[13])*Q,this.z=(C[2]*g+C[6]*t+C[10]*e+C[14])*Q,this}applyQuaternion(A){const g=this.x,t=this.y,e=this.z,C=A.x,Q=A.y,n=A.z,a=A.w,s=a*g+Q*e-n*t,d=a*t+n*g-C*e,D=a*e+C*t-Q*g,u=-C*g-Q*t-n*e;return this.x=s*a+u*-C+d*-n-D*-Q,this.y=d*a+u*-Q+D*-C-s*-n,this.z=D*a+u*-n+s*-Q-d*-C,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const g=this.x,t=this.y,e=this.z,C=A.elements;return this.x=C[0]*g+C[4]*t+C[8]*e,this.y=C[1]*g+C[5]*t+C[9]*e,this.z=C[2]*g+C[6]*t+C[10]*e,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,g){return this.x=Math.max(A.x,Math.min(g.x,this.x)),this.y=Math.max(A.y,Math.min(g.y,this.y)),this.z=Math.max(A.z,Math.min(g.z,this.z)),this}clampScalar(A,g){return this.x=Math.max(A,Math.min(g,this.x)),this.y=Math.max(A,Math.min(g,this.y)),this.z=Math.max(A,Math.min(g,this.z)),this}clampLength(A,g){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(g,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,g){return this.x+=(A.x-this.x)*g,this.y+=(A.y-this.y)*g,this.z+=(A.z-this.z)*g,this}lerpVectors(A,g,t){return this.x=A.x+(g.x-A.x)*t,this.y=A.y+(g.y-A.y)*t,this.z=A.z+(g.z-A.z)*t,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,g){const t=A.x,e=A.y,C=A.z,Q=g.x,n=g.y,a=g.z;return this.x=e*a-C*n,this.y=C*Q-t*a,this.z=t*n-e*Q,this}projectOnVector(A){const g=A.lengthSq();if(g===0)return this.set(0,0,0);const t=A.dot(this)/g;return this.copy(A).multiplyScalar(t)}projectOnPlane(A){return $C.copy(this).projectOnVector(A),this.sub($C)}reflect(A){return this.sub($C.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const g=Math.sqrt(this.lengthSq()*A.lengthSq());if(g===0)return Math.PI/2;const t=this.dot(A)/g;return Math.acos(ht(t,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const g=this.x-A.x,t=this.y-A.y,e=this.z-A.z;return g*g+t*t+e*e}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,g,t){const e=Math.sin(g)*A;return this.x=e*Math.sin(t),this.y=Math.cos(g)*A,this.z=e*Math.cos(t),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,g,t){return this.x=A*Math.sin(g),this.y=t,this.z=A*Math.cos(g),this}setFromMatrixPosition(A){const g=A.elements;return this.x=g[12],this.y=g[13],this.z=g[14],this}setFromMatrixScale(A){const g=this.setFromMatrixColumn(A,0).length(),t=this.setFromMatrixColumn(A,1).length(),e=this.setFromMatrixColumn(A,2).length();return this.x=g,this.y=t,this.z=e,this}setFromMatrixColumn(A,g){return this.fromArray(A.elements,4*g)}setFromMatrix3Column(A,g){return this.fromArray(A.elements,3*g)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,g=0){return this.x=A[g],this.y=A[g+1],this.z=A[g+2],this}toArray(A=[],g=0){return A[g]=this.x,A[g+1]=this.y,A[g+2]=this.z,A}fromBufferAttribute(A,g){return this.x=A.getX(g),this.y=A.getY(g),this.z=A.getZ(g),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=2*(Math.random()-.5),g=Math.random()*Math.PI*2,t=Math.sqrt(1-A**2);return this.x=t*Math.cos(g),this.y=t*Math.sin(g),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $C=new iA,AQ=new he;function oB(B){return B<.04045?.0773993808*B:Math.pow(.9478672986*B+.0521327014,2.4)}function AE(B){return B<.0031308?12.92*B:1.055*Math.pow(B,.41666)-.055}const nB=new Wt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),EC=new Wt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Qi=new iA,gE={[NA]:B=>B,[eA]:B=>B.convertSRGBToLinear(),[kA]:function(B){return B.convertSRGBToLinear(),Qi.set(B.r,B.g,B.b).applyMatrix3(EC),B.setRGB(Qi.x,Qi.y,Qi.z)}},aB={[NA]:B=>B,[eA]:B=>B.convertLinearToSRGB(),[kA]:function(B){return Qi.set(B.r,B.g,B.b).applyMatrix3(nB),B.setRGB(Qi.x,Qi.y,Qi.z).convertLinearToSRGB()}},ct={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(B){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!B},get workingColorSpace(){return NA},set workingColorSpace(B){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(B,A,g){if(this.enabled===!1||A===g||!A||!g)return B;const t=gE[A],e=aB[g];if(t===void 0||e===void 0)throw new Error(`Unsupported color space conversion, "${A}" to "${g}".`);return e(t(B))},fromWorkingColorSpace:function(B,A){return this.convert(B,this.workingColorSpace,A)},toWorkingColorSpace:function(B,A){return this.convert(B,A,this.workingColorSpace)}};let Ti;class WI{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let g;if(A instanceof HTMLCanvasElement)g=A;else{Ti===void 0&&(Ti=qi("canvas")),Ti.width=A.width,Ti.height=A.height;const t=Ti.getContext("2d");A instanceof ImageData?t.putImageData(A,0,0):t.drawImage(A,0,0,A.width,A.height),g=Ti}return g.width>2048||g.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),g.toDataURL("image/jpeg",.6)):g.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const g=qi("canvas");g.width=A.width,g.height=A.height;const t=g.getContext("2d");t.drawImage(A,0,0,A.width,A.height);const e=t.getImageData(0,0,A.width,A.height),C=e.data;for(let Q=0;Q<C.length;Q++)C[Q]=255*oB(C[Q]/255);return t.putImageData(e,0,0),g}if(A.data){const g=A.data.slice(0);for(let t=0;t<g.length;t++)g instanceof Uint8Array||g instanceof Uint8ClampedArray?g[t]=Math.floor(255*oB(g[t]/255)):g[t]=oB(g[t]);return{data:g,width:A.width,height:A.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class Gt{constructor(A=null){this.isSource=!0,this.uuid=yt(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const g=A===void 0||typeof A=="string";if(!g&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const t={uuid:this.uuid,url:""},e=this.data;if(e!==null){let C;if(Array.isArray(e)){C=[];for(let Q=0,n=e.length;Q<n;Q++)e[Q].isDataTexture?C.push(IE(e[Q].image)):C.push(IE(e[Q]))}else C=IE(e);t.url=C}return g||(A.images[this.uuid]=t),t}}function IE(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap?WI.getDataURL(B):B.data?{data:Array.from(B.data),width:B.width,height:B.height,type:B.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gQ=0;class Lt extends oI{constructor(A=Lt.DEFAULT_IMAGE,g=Lt.DEFAULT_MAPPING,t=1001,e=1001,C=1006,Q=1008,n=1023,a=1009,s=Lt.DEFAULT_ANISOTROPY,d=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gQ++}),this.uuid=yt(),this.name="",this.source=new Gt(A),this.mipmaps=[],this.mapping=g,this.wrapS=t,this.wrapT=e,this.magFilter=C,this.minFilter=Q,this.anisotropy=s,this.format=n,this.internalFormat=null,this.type=a,this.offset=new pg(0,0),this.repeat=new pg(1,1),this.center=new pg(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const g=A===void 0||typeof A=="string";if(!g&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const t={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(t.userData=this.userData),g||(A.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==300)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case 1e3:A.x=A.x-Math.floor(A.x);break;case 1001:A.x=A.x<0?0:1;break;case 1002:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x)}if(A.y<0||A.y>1)switch(this.wrapT){case 1e3:A.y=A.y-Math.floor(A.y);break;case 1001:A.y=A.y<0?0:1;break;case 1002:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y)}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}}Lt.DEFAULT_IMAGE=null,Lt.DEFAULT_MAPPING=300,Lt.DEFAULT_ANISOTROPY=1;class nt{constructor(A=0,g=0,t=0,e=1){nt.prototype.isVector4=!0,this.x=A,this.y=g,this.z=t,this.w=e}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,g,t,e){return this.x=A,this.y=g,this.z=t,this.w=e,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,g){switch(A){case 0:this.x=g;break;case 1:this.y=g;break;case 2:this.z=g;break;case 3:this.w=g;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,g){return this.x=A.x+g.x,this.y=A.y+g.y,this.z=A.z+g.z,this.w=A.w+g.w,this}addScaledVector(A,g){return this.x+=A.x*g,this.y+=A.y*g,this.z+=A.z*g,this.w+=A.w*g,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,g){return this.x=A.x-g.x,this.y=A.y-g.y,this.z=A.z-g.z,this.w=A.w-g.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const g=this.x,t=this.y,e=this.z,C=this.w,Q=A.elements;return this.x=Q[0]*g+Q[4]*t+Q[8]*e+Q[12]*C,this.y=Q[1]*g+Q[5]*t+Q[9]*e+Q[13]*C,this.z=Q[2]*g+Q[6]*t+Q[10]*e+Q[14]*C,this.w=Q[3]*g+Q[7]*t+Q[11]*e+Q[15]*C,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const g=Math.sqrt(1-A.w*A.w);return g<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/g,this.y=A.y/g,this.z=A.z/g),this}setAxisAngleFromRotationMatrix(A){let g,t,e,C;const a=A.elements,s=a[0],d=a[4],D=a[8],u=a[1],f=a[5],S=a[9],M=a[2],x=a[6],K=a[10];if(Math.abs(d-u)<.01&&Math.abs(D-M)<.01&&Math.abs(S-x)<.01){if(Math.abs(d+u)<.1&&Math.abs(D+M)<.1&&Math.abs(S+x)<.1&&Math.abs(s+f+K-3)<.1)return this.set(1,0,0,0),this;g=Math.PI;const T=(s+1)/2,W=(f+1)/2,j=(K+1)/2,QA=(d+u)/4,pA=(D+M)/4,SA=(S+x)/4;return T>W&&T>j?T<.01?(t=0,e=.707106781,C=.707106781):(t=Math.sqrt(T),e=QA/t,C=pA/t):W>j?W<.01?(t=.707106781,e=0,C=.707106781):(e=Math.sqrt(W),t=QA/e,C=SA/e):j<.01?(t=.707106781,e=.707106781,C=0):(C=Math.sqrt(j),t=pA/C,e=SA/C),this.set(t,e,C,g),this}let k=Math.sqrt((x-S)*(x-S)+(D-M)*(D-M)+(u-d)*(u-d));return Math.abs(k)<.001&&(k=1),this.x=(x-S)/k,this.y=(D-M)/k,this.z=(u-d)/k,this.w=Math.acos((s+f+K-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,g){return this.x=Math.max(A.x,Math.min(g.x,this.x)),this.y=Math.max(A.y,Math.min(g.y,this.y)),this.z=Math.max(A.z,Math.min(g.z,this.z)),this.w=Math.max(A.w,Math.min(g.w,this.w)),this}clampScalar(A,g){return this.x=Math.max(A,Math.min(g,this.x)),this.y=Math.max(A,Math.min(g,this.y)),this.z=Math.max(A,Math.min(g,this.z)),this.w=Math.max(A,Math.min(g,this.w)),this}clampLength(A,g){const t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(g,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,g){return this.x+=(A.x-this.x)*g,this.y+=(A.y-this.y)*g,this.z+=(A.z-this.z)*g,this.w+=(A.w-this.w)*g,this}lerpVectors(A,g,t){return this.x=A.x+(g.x-A.x)*t,this.y=A.y+(g.y-A.y)*t,this.z=A.z+(g.z-A.z)*t,this.w=A.w+(g.w-A.w)*t,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,g=0){return this.x=A[g],this.y=A[g+1],this.z=A[g+2],this.w=A[g+3],this}toArray(A=[],g=0){return A[g]=this.x,A[g+1]=this.y,A[g+2]=this.z,A[g+3]=this.w,A}fromBufferAttribute(A,g){return this.x=A.getX(g),this.y=A.getY(g),this.z=A.getZ(g),this.w=A.getW(g),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ve extends oI{constructor(A=1,g=1,t={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=g,this.depth=1,this.scissor=new nt(0,0,A,g),this.scissorTest=!1,this.viewport=new nt(0,0,A,g);const e={width:A,height:g,depth:1};this.texture=new Lt(e,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.internalFormat=t.internalFormat!==void 0?t.internalFormat:null,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006,this.depthBuffer=t.depthBuffer===void 0||t.depthBuffer,this.stencilBuffer=t.stencilBuffer!==void 0&&t.stencilBuffer,this.depthTexture=t.depthTexture!==void 0?t.depthTexture:null,this.samples=t.samples!==void 0?t.samples:0}setSize(A,g,t=1){this.width===A&&this.height===g&&this.depth===t||(this.width=A,this.height=g,this.depth=t,this.texture.image.width=A,this.texture.image.height=g,this.texture.image.depth=t,this.dispose()),this.viewport.set(0,0,A,g),this.scissor.set(0,0,A,g)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const g=Object.assign({},A.texture.image);return this.texture.source=new Gt(g),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xB extends Lt{constructor(A=null,g=1,t=1,e=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:g,height:t,depth:e},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class QC extends Lt{constructor(A=null,g=1,t=1,e=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:g,height:t,depth:e},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sB{constructor(A=new iA(1/0,1/0,1/0),g=new iA(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=g}set(A,g){return this.min.copy(A),this.max.copy(g),this}setFromArray(A){let g=1/0,t=1/0,e=1/0,C=-1/0,Q=-1/0,n=-1/0;for(let a=0,s=A.length;a<s;a+=3){const d=A[a],D=A[a+1],u=A[a+2];d<g&&(g=d),D<t&&(t=D),u<e&&(e=u),d>C&&(C=d),D>Q&&(Q=D),u>n&&(n=u)}return this.min.set(g,t,e),this.max.set(C,Q,n),this}setFromBufferAttribute(A){let g=1/0,t=1/0,e=1/0,C=-1/0,Q=-1/0,n=-1/0;for(let a=0,s=A.count;a<s;a++){const d=A.getX(a),D=A.getY(a),u=A.getZ(a);d<g&&(g=d),D<t&&(t=D),u<e&&(e=u),d>C&&(C=d),D>Q&&(Q=D),u>n&&(n=u)}return this.min.set(g,t,e),this.max.set(C,Q,n),this}setFromPoints(A){this.makeEmpty();for(let g=0,t=A.length;g<t;g++)this.expandByPoint(A[g]);return this}setFromCenterAndSize(A,g){const t=ce.copy(g).multiplyScalar(.5);return this.min.copy(A).sub(t),this.max.copy(A).add(t),this}setFromObject(A,g=!1){return this.makeEmpty(),this.expandByObject(A,g)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,g=!1){A.updateWorldMatrix(!1,!1);const t=A.geometry;if(t!==void 0)if(g&&t.attributes!=null&&t.attributes.position!==void 0){const C=t.attributes.position;for(let Q=0,n=C.count;Q<n;Q++)ce.fromBufferAttribute(C,Q).applyMatrix4(A.matrixWorld),this.expandByPoint(ce)}else t.boundingBox===null&&t.computeBoundingBox(),JB.copy(t.boundingBox),JB.applyMatrix4(A.matrixWorld),this.union(JB);const e=A.children;for(let C=0,Q=e.length;C<Q;C++)this.expandByObject(e[C],g);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,g){return g.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,ce),ce.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let g,t;return A.normal.x>0?(g=A.normal.x*this.min.x,t=A.normal.x*this.max.x):(g=A.normal.x*this.max.x,t=A.normal.x*this.min.x),A.normal.y>0?(g+=A.normal.y*this.min.y,t+=A.normal.y*this.max.y):(g+=A.normal.y*this.max.y,t+=A.normal.y*this.min.y),A.normal.z>0?(g+=A.normal.z*this.min.z,t+=A.normal.z*this.max.z):(g+=A.normal.z*this.max.z,t+=A.normal.z*this.min.z),g<=-A.constant&&t>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(bB),_i.subVectors(this.max,bB),Je.subVectors(A.a,bB),rB.subVectors(A.b,bB),kI.subVectors(A.c,bB),v.subVectors(rB,Je),ft.subVectors(kI,rB),oi.subVectors(Je,kI);let g=[0,-v.z,v.y,0,-ft.z,ft.y,0,-oi.z,oi.y,v.z,0,-v.x,ft.z,0,-ft.x,oi.z,0,-oi.x,-v.y,v.x,0,-ft.y,ft.x,0,-oi.y,oi.x,0];return!!KB(g,Je,rB,kI,_i)&&(g=[1,0,0,0,1,0,0,0,1],!!KB(g,Je,rB,kI,_i)&&(wi.crossVectors(v,ft),g=[wi.x,wi.y,wi.z],KB(g,Je,rB,kI,_i)))}clampPoint(A,g){return g.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,ce).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=.5*this.getSize(ce).length()),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()||(HI[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),HI[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),HI[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),HI[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),HI[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),HI[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),HI[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),HI[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(HI)),this}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const HI=[new iA,new iA,new iA,new iA,new iA,new iA,new iA,new iA],ce=new iA,JB=new sB,Je=new iA,rB=new iA,kI=new iA,v=new iA,ft=new iA,oi=new iA,bB=new iA,_i=new iA,wi=new iA,Re=new iA;function KB(B,A,g,t,e){for(let C=0,Q=B.length-3;C<=Q;C+=3){Re.fromArray(B,C);const n=e.x*Math.abs(Re.x)+e.y*Math.abs(Re.y)+e.z*Math.abs(Re.z),a=A.dot(Re),s=g.dot(Re),d=t.dot(Re);if(Math.max(-Math.max(a,s,d),Math.min(a,s,d))>n)return!1}return!0}const IQ=new sB,hB=new iA,oC=new iA;class Wi{constructor(A=new iA,g=-1){this.center=A,this.radius=g}set(A,g){return this.center.copy(A),this.radius=g,this}setFromPoints(A,g){const t=this.center;g!==void 0?t.copy(g):IQ.setFromPoints(A).getCenter(t);let e=0;for(let C=0,Q=A.length;C<Q;C++)e=Math.max(e,t.distanceToSquared(A[C]));return this.radius=Math.sqrt(e),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const g=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=g*g}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,g){const t=this.center.distanceToSquared(A);return g.copy(A),t>this.radius*this.radius&&(g.sub(this.center).normalize(),g.multiplyScalar(this.radius).add(this.center)),g}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;hB.subVectors(A,this.center);const g=hB.lengthSq();if(g>this.radius*this.radius){const t=Math.sqrt(g),e=.5*(t-this.radius);this.center.addScaledVector(hB,e/t),this.radius+=e}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(oC.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(hB.copy(A.center).add(oC)),this.expandByPoint(hB.copy(A.center).sub(oC))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const be=new iA,ni=new iA,vB=new iA,fi=new iA,Vt=new iA,pi=new iA,It=new iA;class Se{constructor(A=new iA,g=new iA(0,0,-1)){this.origin=A,this.direction=g}set(A,g){return this.origin.copy(A),this.direction.copy(g),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,g){return g.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,be)),this}closestPointToPoint(A,g){g.subVectors(A,this.origin);const t=g.dot(this.direction);return t<0?g.copy(this.origin):g.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const g=be.subVectors(A,this.origin).dot(this.direction);return g<0?this.origin.distanceToSquared(A):(be.copy(this.origin).addScaledVector(this.direction,g),be.distanceToSquared(A))}distanceSqToSegment(A,g,t,e){ni.copy(A).add(g).multiplyScalar(.5),vB.copy(g).sub(A).normalize(),fi.copy(this.origin).sub(ni);const C=.5*A.distanceTo(g),Q=-this.direction.dot(vB),n=fi.dot(this.direction),a=-fi.dot(vB),s=fi.lengthSq(),d=Math.abs(1-Q*Q);let D,u,f,S;if(d>0)if(D=Q*a-n,u=Q*n-a,S=C*d,D>=0)if(u>=-S)if(u<=S){const M=1/d;D*=M,u*=M,f=D*(D+Q*u+2*n)+u*(Q*D+u+2*a)+s}else u=C,D=Math.max(0,-(Q*u+n)),f=-D*D+u*(u+2*a)+s;else u=-C,D=Math.max(0,-(Q*u+n)),f=-D*D+u*(u+2*a)+s;else u<=-S?(D=Math.max(0,-(-Q*C+n)),u=D>0?-C:Math.min(Math.max(-C,-a),C),f=-D*D+u*(u+2*a)+s):u<=S?(D=0,u=Math.min(Math.max(-C,-a),C),f=u*(u+2*a)+s):(D=Math.max(0,-(Q*C+n)),u=D>0?C:Math.min(Math.max(-C,-a),C),f=-D*D+u*(u+2*a)+s);else u=Q>0?-C:C,D=Math.max(0,-(Q*u+n)),f=-D*D+u*(u+2*a)+s;return t&&t.copy(this.origin).addScaledVector(this.direction,D),e&&e.copy(ni).addScaledVector(vB,u),f}intersectSphere(A,g){be.subVectors(A.center,this.origin);const t=be.dot(this.direction),e=be.dot(be)-t*t,C=A.radius*A.radius;if(e>C)return null;const Q=Math.sqrt(C-e),n=t-Q,a=t+Q;return a<0?null:n<0?this.at(a,g):this.at(n,g)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const g=A.normal.dot(this.direction);if(g===0)return A.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(A.normal)+A.constant)/g;return t>=0?t:null}intersectPlane(A,g){const t=this.distanceToPlane(A);return t===null?null:this.at(t,g)}intersectsPlane(A){const g=A.distanceToPoint(this.origin);return g===0?!0:A.normal.dot(this.direction)*g<0}intersectBox(A,g){let t,e,C,Q,n,a;const s=1/this.direction.x,d=1/this.direction.y,D=1/this.direction.z,u=this.origin;return s>=0?(t=(A.min.x-u.x)*s,e=(A.max.x-u.x)*s):(t=(A.max.x-u.x)*s,e=(A.min.x-u.x)*s),d>=0?(C=(A.min.y-u.y)*d,Q=(A.max.y-u.y)*d):(C=(A.max.y-u.y)*d,Q=(A.min.y-u.y)*d),t>Q||C>e?null:((C>t||isNaN(t))&&(t=C),(Q<e||isNaN(e))&&(e=Q),D>=0?(n=(A.min.z-u.z)*D,a=(A.max.z-u.z)*D):(n=(A.max.z-u.z)*D,a=(A.min.z-u.z)*D),t>a||n>e?null:((n>t||t!=t)&&(t=n),(a<e||e!=e)&&(e=a),e<0?null:this.at(t>=0?t:e,g)))}intersectsBox(A){return this.intersectBox(A,be)!==null}intersectTriangle(A,g,t,e,C){Vt.subVectors(g,A),pi.subVectors(t,A),It.crossVectors(Vt,pi);let Q,n=this.direction.dot(It);if(n>0){if(e)return null;Q=1}else{if(!(n<0))return null;Q=-1,n=-n}fi.subVectors(this.origin,A);const a=Q*this.direction.dot(pi.crossVectors(fi,pi));if(a<0)return null;const s=Q*this.direction.dot(Vt.cross(fi));if(s<0||a+s>n)return null;const d=-Q*fi.dot(It);return d<0?null:this.at(d/n,C)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bI{constructor(){bI.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,g,t,e,C,Q,n,a,s,d,D,u,f,S,M,x){const K=this.elements;return K[0]=A,K[4]=g,K[8]=t,K[12]=e,K[1]=C,K[5]=Q,K[9]=n,K[13]=a,K[2]=s,K[6]=d,K[10]=D,K[14]=u,K[3]=f,K[7]=S,K[11]=M,K[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bI().fromArray(this.elements)}copy(A){const g=this.elements,t=A.elements;return g[0]=t[0],g[1]=t[1],g[2]=t[2],g[3]=t[3],g[4]=t[4],g[5]=t[5],g[6]=t[6],g[7]=t[7],g[8]=t[8],g[9]=t[9],g[10]=t[10],g[11]=t[11],g[12]=t[12],g[13]=t[13],g[14]=t[14],g[15]=t[15],this}copyPosition(A){const g=this.elements,t=A.elements;return g[12]=t[12],g[13]=t[13],g[14]=t[14],this}setFromMatrix3(A){const g=A.elements;return this.set(g[0],g[3],g[6],0,g[1],g[4],g[7],0,g[2],g[5],g[8],0,0,0,0,1),this}extractBasis(A,g,t){return A.setFromMatrixColumn(this,0),g.setFromMatrixColumn(this,1),t.setFromMatrixColumn(this,2),this}makeBasis(A,g,t){return this.set(A.x,g.x,t.x,0,A.y,g.y,t.y,0,A.z,g.z,t.z,0,0,0,0,1),this}extractRotation(A){const g=this.elements,t=A.elements,e=1/Oi.setFromMatrixColumn(A,0).length(),C=1/Oi.setFromMatrixColumn(A,1).length(),Q=1/Oi.setFromMatrixColumn(A,2).length();return g[0]=t[0]*e,g[1]=t[1]*e,g[2]=t[2]*e,g[3]=0,g[4]=t[4]*C,g[5]=t[5]*C,g[6]=t[6]*C,g[7]=0,g[8]=t[8]*Q,g[9]=t[9]*Q,g[10]=t[10]*Q,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,this}makeRotationFromEuler(A){const g=this.elements,t=A.x,e=A.y,C=A.z,Q=Math.cos(t),n=Math.sin(t),a=Math.cos(e),s=Math.sin(e),d=Math.cos(C),D=Math.sin(C);if(A.order==="XYZ"){const u=Q*d,f=Q*D,S=n*d,M=n*D;g[0]=a*d,g[4]=-a*D,g[8]=s,g[1]=f+S*s,g[5]=u-M*s,g[9]=-n*a,g[2]=M-u*s,g[6]=S+f*s,g[10]=Q*a}else if(A.order==="YXZ"){const u=a*d,f=a*D,S=s*d,M=s*D;g[0]=u+M*n,g[4]=S*n-f,g[8]=Q*s,g[1]=Q*D,g[5]=Q*d,g[9]=-n,g[2]=f*n-S,g[6]=M+u*n,g[10]=Q*a}else if(A.order==="ZXY"){const u=a*d,f=a*D,S=s*d,M=s*D;g[0]=u-M*n,g[4]=-Q*D,g[8]=S+f*n,g[1]=f+S*n,g[5]=Q*d,g[9]=M-u*n,g[2]=-Q*s,g[6]=n,g[10]=Q*a}else if(A.order==="ZYX"){const u=Q*d,f=Q*D,S=n*d,M=n*D;g[0]=a*d,g[4]=S*s-f,g[8]=u*s+M,g[1]=a*D,g[5]=M*s+u,g[9]=f*s-S,g[2]=-s,g[6]=n*a,g[10]=Q*a}else if(A.order==="YZX"){const u=Q*a,f=Q*s,S=n*a,M=n*s;g[0]=a*d,g[4]=M-u*D,g[8]=S*D+f,g[1]=D,g[5]=Q*d,g[9]=-n*d,g[2]=-s*d,g[6]=f*D+S,g[10]=u-M*D}else if(A.order==="XZY"){const u=Q*a,f=Q*s,S=n*a,M=n*s;g[0]=a*d,g[4]=-D,g[8]=s*d,g[1]=u*D+M,g[5]=Q*d,g[9]=f*D-S,g[2]=S*D-f,g[6]=n*d,g[10]=M*D+u}return g[3]=0,g[7]=0,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,this}makeRotationFromQuaternion(A){return this.compose(to,A,eo)}lookAt(A,g,t){const e=this.elements;return le.subVectors(A,g),le.lengthSq()===0&&(le.z=1),le.normalize(),yi.crossVectors(t,le),yi.lengthSq()===0&&(Math.abs(t.z)===1?le.x+=1e-4:le.z+=1e-4,le.normalize(),yi.crossVectors(t,le)),yi.normalize(),Pi.crossVectors(le,yi),e[0]=yi.x,e[4]=Pi.x,e[8]=le.x,e[1]=yi.y,e[5]=Pi.y,e[9]=le.y,e[2]=yi.z,e[6]=Pi.z,e[10]=le.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,g){const t=A.elements,e=g.elements,C=this.elements,Q=t[0],n=t[4],a=t[8],s=t[12],d=t[1],D=t[5],u=t[9],f=t[13],S=t[2],M=t[6],x=t[10],K=t[14],k=t[3],T=t[7],W=t[11],j=t[15],QA=e[0],pA=e[4],SA=e[8],KA=e[12],qA=e[1],RA=e[5],Eg=e[9],Mg=e[13],Dg=e[2],bg=e[6],Jg=e[10],$g=e[14],AI=e[3],Tg=e[7],jA=e[11],sg=e[15];return C[0]=Q*QA+n*qA+a*Dg+s*AI,C[4]=Q*pA+n*RA+a*bg+s*Tg,C[8]=Q*SA+n*Eg+a*Jg+s*jA,C[12]=Q*KA+n*Mg+a*$g+s*sg,C[1]=d*QA+D*qA+u*Dg+f*AI,C[5]=d*pA+D*RA+u*bg+f*Tg,C[9]=d*SA+D*Eg+u*Jg+f*jA,C[13]=d*KA+D*Mg+u*$g+f*sg,C[2]=S*QA+M*qA+x*Dg+K*AI,C[6]=S*pA+M*RA+x*bg+K*Tg,C[10]=S*SA+M*Eg+x*Jg+K*jA,C[14]=S*KA+M*Mg+x*$g+K*sg,C[3]=k*QA+T*qA+W*Dg+j*AI,C[7]=k*pA+T*RA+W*bg+j*Tg,C[11]=k*SA+T*Eg+W*Jg+j*jA,C[15]=k*KA+T*Mg+W*$g+j*sg,this}multiplyScalar(A){const g=this.elements;return g[0]*=A,g[4]*=A,g[8]*=A,g[12]*=A,g[1]*=A,g[5]*=A,g[9]*=A,g[13]*=A,g[2]*=A,g[6]*=A,g[10]*=A,g[14]*=A,g[3]*=A,g[7]*=A,g[11]*=A,g[15]*=A,this}determinant(){const A=this.elements,g=A[0],t=A[4],e=A[8],C=A[12],Q=A[1],n=A[5],a=A[9],s=A[13],d=A[2],D=A[6],u=A[10],f=A[14];return A[3]*(+C*a*D-e*s*D-C*n*u+t*s*u+e*n*f-t*a*f)+A[7]*(+g*a*f-g*s*u+C*Q*u-e*Q*f+e*s*d-C*a*d)+A[11]*(+g*s*D-g*n*f-C*Q*D+t*Q*f+C*n*d-t*s*d)+A[15]*(-e*n*d-g*a*D+g*n*u+e*Q*D-t*Q*u+t*a*d)}transpose(){const A=this.elements;let g;return g=A[1],A[1]=A[4],A[4]=g,g=A[2],A[2]=A[8],A[8]=g,g=A[6],A[6]=A[9],A[9]=g,g=A[3],A[3]=A[12],A[12]=g,g=A[7],A[7]=A[13],A[13]=g,g=A[11],A[11]=A[14],A[14]=g,this}setPosition(A,g,t){const e=this.elements;return A.isVector3?(e[12]=A.x,e[13]=A.y,e[14]=A.z):(e[12]=A,e[13]=g,e[14]=t),this}invert(){const A=this.elements,g=A[0],t=A[1],e=A[2],C=A[3],Q=A[4],n=A[5],a=A[6],s=A[7],d=A[8],D=A[9],u=A[10],f=A[11],S=A[12],M=A[13],x=A[14],K=A[15],k=D*x*s-M*u*s+M*a*f-n*x*f-D*a*K+n*u*K,T=S*u*s-d*x*s-S*a*f+Q*x*f+d*a*K-Q*u*K,W=d*M*s-S*D*s+S*n*f-Q*M*f-d*n*K+Q*D*K,j=S*D*a-d*M*a-S*n*u+Q*M*u+d*n*x-Q*D*x,QA=g*k+t*T+e*W+C*j;if(QA===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const pA=1/QA;return A[0]=k*pA,A[1]=(M*u*C-D*x*C-M*e*f+t*x*f+D*e*K-t*u*K)*pA,A[2]=(n*x*C-M*a*C+M*e*s-t*x*s-n*e*K+t*a*K)*pA,A[3]=(D*a*C-n*u*C-D*e*s+t*u*s+n*e*f-t*a*f)*pA,A[4]=T*pA,A[5]=(d*x*C-S*u*C+S*e*f-g*x*f-d*e*K+g*u*K)*pA,A[6]=(S*a*C-Q*x*C-S*e*s+g*x*s+Q*e*K-g*a*K)*pA,A[7]=(Q*u*C-d*a*C+d*e*s-g*u*s-Q*e*f+g*a*f)*pA,A[8]=W*pA,A[9]=(S*D*C-d*M*C-S*t*f+g*M*f+d*t*K-g*D*K)*pA,A[10]=(Q*M*C-S*n*C+S*t*s-g*M*s-Q*t*K+g*n*K)*pA,A[11]=(d*n*C-Q*D*C-d*t*s+g*D*s+Q*t*f-g*n*f)*pA,A[12]=j*pA,A[13]=(d*M*e-S*D*e+S*t*u-g*M*u-d*t*x+g*D*x)*pA,A[14]=(S*n*e-Q*M*e-S*t*a+g*M*a+Q*t*x-g*n*x)*pA,A[15]=(Q*D*e-d*n*e+d*t*a-g*D*a-Q*t*u+g*n*u)*pA,this}scale(A){const g=this.elements,t=A.x,e=A.y,C=A.z;return g[0]*=t,g[4]*=e,g[8]*=C,g[1]*=t,g[5]*=e,g[9]*=C,g[2]*=t,g[6]*=e,g[10]*=C,g[3]*=t,g[7]*=e,g[11]*=C,this}getMaxScaleOnAxis(){const A=this.elements,g=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],t=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],e=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(g,t,e))}makeTranslation(A,g,t){return this.set(1,0,0,A,0,1,0,g,0,0,1,t,0,0,0,1),this}makeRotationX(A){const g=Math.cos(A),t=Math.sin(A);return this.set(1,0,0,0,0,g,-t,0,0,t,g,0,0,0,0,1),this}makeRotationY(A){const g=Math.cos(A),t=Math.sin(A);return this.set(g,0,t,0,0,1,0,0,-t,0,g,0,0,0,0,1),this}makeRotationZ(A){const g=Math.cos(A),t=Math.sin(A);return this.set(g,-t,0,0,t,g,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,g){const t=Math.cos(g),e=Math.sin(g),C=1-t,Q=A.x,n=A.y,a=A.z,s=C*Q,d=C*n;return this.set(s*Q+t,s*n-e*a,s*a+e*n,0,s*n+e*a,d*n+t,d*a-e*Q,0,s*a-e*n,d*a+e*Q,C*a*a+t,0,0,0,0,1),this}makeScale(A,g,t){return this.set(A,0,0,0,0,g,0,0,0,0,t,0,0,0,0,1),this}makeShear(A,g,t,e,C,Q){return this.set(1,t,C,0,A,1,Q,0,g,e,1,0,0,0,0,1),this}compose(A,g,t){const e=this.elements,C=g._x,Q=g._y,n=g._z,a=g._w,s=C+C,d=Q+Q,D=n+n,u=C*s,f=C*d,S=C*D,M=Q*d,x=Q*D,K=n*D,k=a*s,T=a*d,W=a*D,j=t.x,QA=t.y,pA=t.z;return e[0]=(1-(M+K))*j,e[1]=(f+W)*j,e[2]=(S-T)*j,e[3]=0,e[4]=(f-W)*QA,e[5]=(1-(u+K))*QA,e[6]=(x+k)*QA,e[7]=0,e[8]=(S+T)*pA,e[9]=(x-k)*pA,e[10]=(1-(u+M))*pA,e[11]=0,e[12]=A.x,e[13]=A.y,e[14]=A.z,e[15]=1,this}decompose(A,g,t){const e=this.elements;let C=Oi.set(e[0],e[1],e[2]).length();const Q=Oi.set(e[4],e[5],e[6]).length(),n=Oi.set(e[8],e[9],e[10]).length();this.determinant()<0&&(C=-C),A.x=e[12],A.y=e[13],A.z=e[14],Ke.copy(this);const a=1/C,s=1/Q,d=1/n;return Ke.elements[0]*=a,Ke.elements[1]*=a,Ke.elements[2]*=a,Ke.elements[4]*=s,Ke.elements[5]*=s,Ke.elements[6]*=s,Ke.elements[8]*=d,Ke.elements[9]*=d,Ke.elements[10]*=d,g.setFromRotationMatrix(Ke),t.x=C,t.y=Q,t.z=n,this}makePerspective(A,g,t,e,C,Q){const n=this.elements,a=2*C/(g-A),s=2*C/(t-e),d=(g+A)/(g-A),D=(t+e)/(t-e),u=-(Q+C)/(Q-C),f=-2*Q*C/(Q-C);return n[0]=a,n[4]=0,n[8]=d,n[12]=0,n[1]=0,n[5]=s,n[9]=D,n[13]=0,n[2]=0,n[6]=0,n[10]=u,n[14]=f,n[3]=0,n[7]=0,n[11]=-1,n[15]=0,this}makeOrthographic(A,g,t,e,C,Q){const n=this.elements,a=1/(g-A),s=1/(t-e),d=1/(Q-C),D=(g+A)*a,u=(t+e)*s,f=(Q+C)*d;return n[0]=2*a,n[4]=0,n[8]=0,n[12]=-D,n[1]=0,n[5]=2*s,n[9]=0,n[13]=-u,n[2]=0,n[6]=0,n[10]=-2*d,n[14]=-f,n[3]=0,n[7]=0,n[11]=0,n[15]=1,this}equals(A){const g=this.elements,t=A.elements;for(let e=0;e<16;e++)if(g[e]!==t[e])return!1;return!0}fromArray(A,g=0){for(let t=0;t<16;t++)this.elements[t]=A[t+g];return this}toArray(A=[],g=0){const t=this.elements;return A[g]=t[0],A[g+1]=t[1],A[g+2]=t[2],A[g+3]=t[3],A[g+4]=t[4],A[g+5]=t[5],A[g+6]=t[6],A[g+7]=t[7],A[g+8]=t[8],A[g+9]=t[9],A[g+10]=t[10],A[g+11]=t[11],A[g+12]=t[12],A[g+13]=t[13],A[g+14]=t[14],A[g+15]=t[15],A}}const Oi=new iA,Ke=new bI,to=new iA(0,0,0),eo=new iA(1,1,1),yi=new iA,Pi=new iA,le=new iA,YB=new bI,HB=new he;class Vi{constructor(A=0,g=0,t=0,e=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=g,this._z=t,this._order=e}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,g,t,e=this._order){return this._x=A,this._y=g,this._z=t,this._order=e,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,g=this._order,t=!0){const e=A.elements,C=e[0],Q=e[4],n=e[8],a=e[1],s=e[5],d=e[9],D=e[2],u=e[6],f=e[10];switch(g){case"XYZ":this._y=Math.asin(ht(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-Q,C)):(this._x=Math.atan2(u,s),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(n,f),this._z=Math.atan2(a,s)):(this._y=Math.atan2(-D,C),this._z=0);break;case"ZXY":this._x=Math.asin(ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-D,f),this._z=Math.atan2(-Q,s)):(this._y=0,this._z=Math.atan2(a,C));break;case"ZYX":this._y=Math.asin(-ht(D,-1,1)),Math.abs(D)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(a,C)):(this._x=0,this._z=Math.atan2(-Q,s));break;case"YZX":this._z=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,s),this._y=Math.atan2(-D,C)):(this._x=0,this._y=Math.atan2(n,f));break;case"XZY":this._z=Math.asin(-ht(Q,-1,1)),Math.abs(Q)<.9999999?(this._x=Math.atan2(u,s),this._y=Math.atan2(n,C)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+g)}return this._order=g,t===!0&&this._onChangeCallback(),this}setFromQuaternion(A,g,t){return YB.makeRotationFromQuaternion(A),this.setFromRotationMatrix(YB,g,t)}setFromVector3(A,g=this._order){return this.set(A.x,A.y,A.z,g)}reorder(A){return HB.setFromEuler(this),this.setFromQuaternion(HB,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],g=0){return A[g]=this._x,A[g+1]=this._y,A[g+2]=this._z,A[g+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class Zi{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!=0}isEnabled(A){return(this.mask&(1<<A|0))!=0}}let Xi=0;const tQ=new iA,cB=new he,Mi=new bI,qB=new iA,nC=new iA,mn=new iA,Rn=new he,ai=new iA(1,0,0),eQ=new iA(0,1,0),si=new iA(0,0,1),Sn={type:"added"},ve={type:"removed"};class et extends oI{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xi++}),this.uuid=yt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=et.DEFAULT_UP.clone();const A=new iA,g=new Vi,t=new he,e=new iA(1,1,1);g._onChange(function(){t.setFromEuler(g,!1)}),t._onChange(function(){g.setFromQuaternion(t,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:g},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:e},modelViewMatrix:{value:new bI},normalMatrix:{value:new Wt}}),this.matrix=new bI,this.matrixWorld=new bI,this.matrixAutoUpdate=et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Zi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,g){this.quaternion.setFromAxisAngle(A,g)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,g){return cB.setFromAxisAngle(A,g),this.quaternion.multiply(cB),this}rotateOnWorldAxis(A,g){return cB.setFromAxisAngle(A,g),this.quaternion.premultiply(cB),this}rotateX(A){return this.rotateOnAxis(ai,A)}rotateY(A){return this.rotateOnAxis(eQ,A)}rotateZ(A){return this.rotateOnAxis(si,A)}translateOnAxis(A,g){return tQ.copy(A).applyQuaternion(this.quaternion),this.position.add(tQ.multiplyScalar(g)),this}translateX(A){return this.translateOnAxis(ai,A)}translateY(A){return this.translateOnAxis(eQ,A)}translateZ(A){return this.translateOnAxis(si,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(A,g,t){A.isVector3?qB.copy(A):qB.set(A,g,t);const e=this.parent;this.updateWorldMatrix(!0,!1),nC.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(nC,qB,this.up):Mi.lookAt(qB,nC,this.up),this.quaternion.setFromRotationMatrix(Mi),e&&(Mi.extractRotation(e.matrixWorld),cB.setFromRotationMatrix(Mi),this.quaternion.premultiply(cB.invert()))}add(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.add(arguments[g]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(Sn)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const g=this.children.indexOf(A);return g!==-1&&(A.parent=null,this.children.splice(g,1),A.dispatchEvent(ve)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const g=this.children[A];g.parent=null,g.dispatchEvent(ve)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),Mi.multiply(A.parent.matrixWorld)),A.applyMatrix4(Mi),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,g){if(this[A]===g)return this;for(let t=0,e=this.children.length;t<e;t++){const C=this.children[t].getObjectByProperty(A,g);if(C!==void 0)return C}}getObjectsByProperty(A,g){let t=[];this[A]===g&&t.push(this);for(let e=0,C=this.children.length;e<C;e++){const Q=this.children[e].getObjectsByProperty(A,g);Q.length>0&&(t=t.concat(Q))}return t}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nC,A,mn),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nC,Rn,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const g=this.matrixWorld.elements;return A.set(g[8],g[9],g[10]).normalize()}raycast(){}traverse(A){A(this);const g=this.children;for(let t=0,e=g.length;t<e;t++)g[t].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const g=this.children;for(let t=0,e=g.length;t<e;t++)g[t].traverseVisible(A)}traverseAncestors(A){const g=this.parent;g!==null&&(A(g),g.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const g=this.children;for(let t=0,e=g.length;t<e;t++){const C=g[t];C.matrixWorldAutoUpdate!==!0&&A!==!0||C.updateMatrixWorld(A)}}updateWorldMatrix(A,g){const t=this.parent;if(A===!0&&t!==null&&t.matrixWorldAutoUpdate===!0&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),g===!0){const e=this.children;for(let C=0,Q=e.length;C<Q;C++){const n=e[C];n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!1,!0)}}}toJSON(A){const g=A===void 0||typeof A=="string",t={};g&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},t.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const e={};function C(n,a){return n[a.uuid]===void 0&&(n[a.uuid]=a.toJSON(A)),a.uuid}if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),this.castShadow===!0&&(e.castShadow=!0),this.receiveShadow===!0&&(e.receiveShadow=!0),this.visible===!1&&(e.visible=!1),this.frustumCulled===!1&&(e.frustumCulled=!1),this.renderOrder!==0&&(e.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(e.userData=this.userData),e.layers=this.layers.mask,e.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(e.matrixAutoUpdate=!1),this.isInstancedMesh&&(e.type="InstancedMesh",e.count=this.count,e.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(e.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?e.background=this.background.toJSON():this.background.isTexture&&(e.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(e.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){e.geometry=C(A.geometries,this.geometry);const n=this.geometry.parameters;if(n!==void 0&&n.shapes!==void 0){const a=n.shapes;if(Array.isArray(a))for(let s=0,d=a.length;s<d;s++){const D=a[s];C(A.shapes,D)}else C(A.shapes,a)}}if(this.isSkinnedMesh&&(e.bindMode=this.bindMode,e.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(C(A.skeletons,this.skeleton),e.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const n=[];for(let a=0,s=this.material.length;a<s;a++)n.push(C(A.materials,this.material[a]));e.material=n}else e.material=C(A.materials,this.material);if(this.children.length>0){e.children=[];for(let n=0;n<this.children.length;n++)e.children.push(this.children[n].toJSON(A).object)}if(this.animations.length>0){e.animations=[];for(let n=0;n<this.animations.length;n++){const a=this.animations[n];e.animations.push(C(A.animations,a))}}if(g){const n=Q(A.geometries),a=Q(A.materials),s=Q(A.textures),d=Q(A.images),D=Q(A.shapes),u=Q(A.skeletons),f=Q(A.animations),S=Q(A.nodes);n.length>0&&(t.geometries=n),a.length>0&&(t.materials=a),s.length>0&&(t.textures=s),d.length>0&&(t.images=d),D.length>0&&(t.shapes=D),u.length>0&&(t.skeletons=u),f.length>0&&(t.animations=f),S.length>0&&(t.nodes=S)}return t.object=e,t;function Q(n){const a=[];for(const s in n){const d=n[s];delete d.metadata,a.push(d)}return a}}clone(A){return new this.constructor().copy(this,A)}copy(A,g=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),g===!0)for(let t=0;t<A.children.length;t++){const e=A.children[t];this.add(e.clone())}return this}}et.DEFAULT_UP=new iA(0,1,0),et.DEFAULT_MATRIX_AUTO_UPDATE=!0,et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new iA,He=new iA,aC=new iA,Ze=new iA,zi=new iA,ie=new iA,iQ=new iA,TB=new iA,sC=new iA,BQ=new iA;class qe{constructor(A=new iA,g=new iA,t=new iA){this.a=A,this.b=g,this.c=t}static getNormal(A,g,t,e){e.subVectors(t,g),Ye.subVectors(A,g),e.cross(Ye);const C=e.lengthSq();return C>0?e.multiplyScalar(1/Math.sqrt(C)):e.set(0,0,0)}static getBarycoord(A,g,t,e,C){Ye.subVectors(e,g),He.subVectors(t,g),aC.subVectors(A,g);const Q=Ye.dot(Ye),n=Ye.dot(He),a=Ye.dot(aC),s=He.dot(He),d=He.dot(aC),D=Q*s-n*n;if(D===0)return C.set(-2,-1,-1);const u=1/D,f=(s*a-n*d)*u,S=(Q*d-n*a)*u;return C.set(1-f-S,S,f)}static containsPoint(A,g,t,e){return this.getBarycoord(A,g,t,e,Ze),Ze.x>=0&&Ze.y>=0&&Ze.x+Ze.y<=1}static getUV(A,g,t,e,C,Q,n,a){return this.getBarycoord(A,g,t,e,Ze),a.set(0,0),a.addScaledVector(C,Ze.x),a.addScaledVector(Q,Ze.y),a.addScaledVector(n,Ze.z),a}static isFrontFacing(A,g,t,e){return Ye.subVectors(t,g),He.subVectors(A,g),Ye.cross(He).dot(e)<0}set(A,g,t){return this.a.copy(A),this.b.copy(g),this.c.copy(t),this}setFromPointsAndIndices(A,g,t,e){return this.a.copy(A[g]),this.b.copy(A[t]),this.c.copy(A[e]),this}setFromAttributeAndIndices(A,g,t,e){return this.a.fromBufferAttribute(A,g),this.b.fromBufferAttribute(A,t),this.c.fromBufferAttribute(A,e),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Ye.subVectors(this.c,this.b),He.subVectors(this.a,this.b),.5*Ye.cross(He).length()}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return qe.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,g){return qe.getBarycoord(A,this.a,this.b,this.c,g)}getUV(A,g,t,e,C){return qe.getUV(A,this.a,this.b,this.c,g,t,e,C)}containsPoint(A){return qe.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return qe.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,g){const t=this.a,e=this.b,C=this.c;let Q,n;zi.subVectors(e,t),ie.subVectors(C,t),TB.subVectors(A,t);const a=zi.dot(TB),s=ie.dot(TB);if(a<=0&&s<=0)return g.copy(t);sC.subVectors(A,e);const d=zi.dot(sC),D=ie.dot(sC);if(d>=0&&D<=d)return g.copy(e);const u=a*D-d*s;if(u<=0&&a>=0&&d<=0)return Q=a/(a-d),g.copy(t).addScaledVector(zi,Q);BQ.subVectors(A,C);const f=zi.dot(BQ),S=ie.dot(BQ);if(S>=0&&f<=S)return g.copy(C);const M=f*s-a*S;if(M<=0&&s>=0&&S<=0)return n=s/(s-S),g.copy(t).addScaledVector(ie,n);const x=d*S-f*D;if(x<=0&&D-d>=0&&f-S>=0)return iQ.subVectors(C,e),n=(D-d)/(D-d+(f-S)),g.copy(e).addScaledVector(iQ,n);const K=1/(x+M+u);return Q=M*K,n=u*K,g.copy(t).addScaledVector(zi,Q).addScaledVector(ie,n)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let io=0;class Be extends oI{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:io++}),this.uuid=yt(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const g in A){const t=A[g];if(t===void 0){console.warn("THREE.Material: '"+g+"' parameter is undefined.");continue}const e=this[g];e!==void 0?e&&e.isColor?e.set(t):e&&e.isVector3&&t&&t.isVector3?e.copy(t):this[g]=t:console.warn("THREE."+this.type+": '"+g+"' is not a property of this material.")}}toJSON(A){const g=A===void 0||typeof A=="string";g&&(A={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function e(C){const Q=[];for(const n in C){const a=C[n];delete a.metadata,Q.push(a)}return Q}if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(A).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(A).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(A).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(A).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(A).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(t.blending=this.blending),this.side!==0&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(t.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData),g){const C=e(A.textures),Q=e(A.images);C.length>0&&(t.textures=C),Q.length>0&&(t.images=Q)}return t}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const g=A.clippingPlanes;let t=null;if(g!==null){const e=g.length;t=new Array(e);for(let C=0;C!==e;++C)t[C]=g[C].clone()}return this.clippingPlanes=t,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}const Bo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xe={h:0,s:0,l:0},tE={h:0,s:0,l:0};function CQ(B,A,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?B+6*(A-B)*g:g<.5?A:g<2/3?B+6*(A-B)*(2/3-g):B}class CI{constructor(A,g,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,g===void 0&&t===void 0?this.set(A):this.setRGB(A,g,t)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,g=eA){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(255&A)/255,ct.toWorkingColorSpace(this,g),this}setRGB(A,g,t,e=ct.workingColorSpace){return this.r=A,this.g=g,this.b=t,ct.toWorkingColorSpace(this,e),this}setHSL(A,g,t,e=ct.workingColorSpace){if(A=Tt(A,1),g=ht(g,0,1),t=ht(t,0,1),g===0)this.r=this.g=this.b=t;else{const C=t<=.5?t*(1+g):t+g-t*g,Q=2*t-C;this.r=CQ(Q,C,A+1/3),this.g=CQ(Q,C,A),this.b=CQ(Q,C,A-1/3)}return ct.toWorkingColorSpace(this,e),this}setStyle(A,g=eA){function t(C){C!==void 0&&parseFloat(C)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let e;if(e=/^(\w+)\(([^\)]*)\)/.exec(A)){let C;const Q=e[1],n=e[2];switch(Q){case"rgb":case"rgba":if(C=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return this.r=Math.min(255,parseInt(C[1],10))/255,this.g=Math.min(255,parseInt(C[2],10))/255,this.b=Math.min(255,parseInt(C[3],10))/255,ct.toWorkingColorSpace(this,g),t(C[4]),this;if(C=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n))return this.r=Math.min(100,parseInt(C[1],10))/100,this.g=Math.min(100,parseInt(C[2],10))/100,this.b=Math.min(100,parseInt(C[3],10))/100,ct.toWorkingColorSpace(this,g),t(C[4]),this;break;case"hsl":case"hsla":if(C=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(n)){const a=parseFloat(C[1])/360,s=parseFloat(C[2])/100,d=parseFloat(C[3])/100;return t(C[4]),this.setHSL(a,s,d,g)}break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(e=/^\#([A-Fa-f\d]+)$/.exec(A)){const C=e[1],Q=C.length;if(Q===3)return this.r=parseInt(C.charAt(0)+C.charAt(0),16)/255,this.g=parseInt(C.charAt(1)+C.charAt(1),16)/255,this.b=parseInt(C.charAt(2)+C.charAt(2),16)/255,ct.toWorkingColorSpace(this,g),this;if(Q===6)return this.r=parseInt(C.charAt(0)+C.charAt(1),16)/255,this.g=parseInt(C.charAt(2)+C.charAt(3),16)/255,this.b=parseInt(C.charAt(4)+C.charAt(5),16)/255,ct.toWorkingColorSpace(this,g),this;console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,g);return this}setColorName(A,g=eA){const t=Bo[A.toLowerCase()];return t!==void 0?this.setHex(t,g):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=oB(A.r),this.g=oB(A.g),this.b=oB(A.b),this}copyLinearToSRGB(A){return this.r=AE(A.r),this.g=AE(A.g),this.b=AE(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=eA){return ct.fromWorkingColorSpace(zt.copy(this),A),ht(255*zt.r,0,255)<<16^ht(255*zt.g,0,255)<<8^ht(255*zt.b,0,255)<<0}getHexString(A=eA){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,g=ct.workingColorSpace){ct.fromWorkingColorSpace(zt.copy(this),g);const t=zt.r,e=zt.g,C=zt.b,Q=Math.max(t,e,C),n=Math.min(t,e,C);let a,s;const d=(n+Q)/2;if(n===Q)a=0,s=0;else{const D=Q-n;switch(s=d<=.5?D/(Q+n):D/(2-Q-n),Q){case t:a=(e-C)/D+(e<C?6:0);break;case e:a=(C-t)/D+2;break;case C:a=(t-e)/D+4}a/=6}return A.h=a,A.s=s,A.l=d,A}getRGB(A,g=ct.workingColorSpace){return ct.fromWorkingColorSpace(zt.copy(this),g),A.r=zt.r,A.g=zt.g,A.b=zt.b,A}getStyle(A=eA){ct.fromWorkingColorSpace(zt.copy(this),A);const g=zt.r,t=zt.g,e=zt.b;return A!==eA?`color(${A} ${g.toFixed(3)} ${t.toFixed(3)} ${e.toFixed(3)})`:`rgb(${255*g|0},${255*t|0},${255*e|0})`}offsetHSL(A,g,t){return this.getHSL(Xe),Xe.h+=A,Xe.s+=g,Xe.l+=t,this.setHSL(Xe.h,Xe.s,Xe.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,g){return this.r=A.r+g.r,this.g=A.g+g.g,this.b=A.b+g.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,g){return this.r+=(A.r-this.r)*g,this.g+=(A.g-this.g)*g,this.b+=(A.b-this.b)*g,this}lerpColors(A,g,t){return this.r=A.r+(g.r-A.r)*t,this.g=A.g+(g.g-A.g)*t,this.b=A.b+(g.b-A.b)*t,this}lerpHSL(A,g){this.getHSL(Xe),A.getHSL(tE);const t=Pe(Xe.h,tE.h,g),e=Pe(Xe.s,tE.s,g),C=Pe(Xe.l,tE.l,g);return this.setHSL(t,e,C),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,g=0){return this.r=A[g],this.g=A[g+1],this.b=A[g+2],this}toArray(A=[],g=0){return A[g]=this.r,A[g+1]=this.g,A[g+2]=this.b,A}fromBufferAttribute(A,g){return this.r=A.getX(g),this.g=A.getY(g),this.b=A.getZ(g),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new CI;CI.NAMES=Bo;class ri extends Be{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new CI(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const Yt=new iA,_B=new pg;class Et{constructor(A,g,t=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=g,this.count=A!==void 0?A.length/g:0,this.normalized=t,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,g,t){A*=this.itemSize,t*=g.itemSize;for(let e=0,C=this.itemSize;e<C;e++)this.array[A+e]=g.array[t+e];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let g=0,t=this.count;g<t;g++)_B.fromBufferAttribute(this,g),_B.applyMatrix3(A),this.setXY(g,_B.x,_B.y);else if(this.itemSize===3)for(let g=0,t=this.count;g<t;g++)Yt.fromBufferAttribute(this,g),Yt.applyMatrix3(A),this.setXYZ(g,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(A){for(let g=0,t=this.count;g<t;g++)Yt.fromBufferAttribute(this,g),Yt.applyMatrix4(A),this.setXYZ(g,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(A){for(let g=0,t=this.count;g<t;g++)Yt.fromBufferAttribute(this,g),Yt.applyNormalMatrix(A),this.setXYZ(g,Yt.x,Yt.y,Yt.z);return this}transformDirection(A){for(let g=0,t=this.count;g<t;g++)Yt.fromBufferAttribute(this,g),Yt.transformDirection(A),this.setXYZ(g,Yt.x,Yt.y,Yt.z);return this}set(A,g=0){return this.array.set(A,g),this}getX(A){let g=this.array[A*this.itemSize];return this.normalized&&(g=re(g,this.array)),g}setX(A,g){return this.normalized&&(g=Kg(g,this.array)),this.array[A*this.itemSize]=g,this}getY(A){let g=this.array[A*this.itemSize+1];return this.normalized&&(g=re(g,this.array)),g}setY(A,g){return this.normalized&&(g=Kg(g,this.array)),this.array[A*this.itemSize+1]=g,this}getZ(A){let g=this.array[A*this.itemSize+2];return this.normalized&&(g=re(g,this.array)),g}setZ(A,g){return this.normalized&&(g=Kg(g,this.array)),this.array[A*this.itemSize+2]=g,this}getW(A){let g=this.array[A*this.itemSize+3];return this.normalized&&(g=re(g,this.array)),g}setW(A,g){return this.normalized&&(g=Kg(g,this.array)),this.array[A*this.itemSize+3]=g,this}setXY(A,g,t){return A*=this.itemSize,this.normalized&&(g=Kg(g,this.array),t=Kg(t,this.array)),this.array[A+0]=g,this.array[A+1]=t,this}setXYZ(A,g,t,e){return A*=this.itemSize,this.normalized&&(g=Kg(g,this.array),t=Kg(t,this.array),e=Kg(e,this.array)),this.array[A+0]=g,this.array[A+1]=t,this.array[A+2]=e,this}setXYZW(A,g,t,e,C){return A*=this.itemSize,this.normalized&&(g=Kg(g,this.array),t=Kg(t,this.array),e=Kg(e,this.array),C=Kg(C,this.array)),this.array[A+0]=g,this.array[A+1]=t,this.array[A+2]=e,this.array[A+3]=C,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==35044&&(A.usage=this.usage),this.updateRange.offset===0&&this.updateRange.count===-1||(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class WB extends Et{constructor(A,g,t){super(new Uint16Array(A),g,t)}}class eE extends Et{constructor(A,g,t){super(new Uint32Array(A),g,t)}}class rI extends Et{constructor(A,g,t){super(new Float32Array(A),g,t)}}let Co=0;const Ge=new bI,EQ=new et,ze=new iA,Ce=new sB,rC=new sB,xt=new iA;class LI extends oI{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Co++}),this.uuid=yt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(QB(A)?eE:WB)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,g){return this.attributes[A]=g,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,g,t=0){this.groups.push({start:A,count:g,materialIndex:t})}clearGroups(){this.groups=[]}setDrawRange(A,g){this.drawRange.start=A,this.drawRange.count=g}applyMatrix4(A){const g=this.attributes.position;g!==void 0&&(g.applyMatrix4(A),g.needsUpdate=!0);const t=this.attributes.normal;if(t!==void 0){const C=new Wt().getNormalMatrix(A);t.applyNormalMatrix(C),t.needsUpdate=!0}const e=this.attributes.tangent;return e!==void 0&&(e.transformDirection(A),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return Ge.makeRotationFromQuaternion(A),this.applyMatrix4(Ge),this}rotateX(A){return Ge.makeRotationX(A),this.applyMatrix4(Ge),this}rotateY(A){return Ge.makeRotationY(A),this.applyMatrix4(Ge),this}rotateZ(A){return Ge.makeRotationZ(A),this.applyMatrix4(Ge),this}translate(A,g,t){return Ge.makeTranslation(A,g,t),this.applyMatrix4(Ge),this}scale(A,g,t){return Ge.makeScale(A,g,t),this.applyMatrix4(Ge),this}lookAt(A){return EQ.lookAt(A),EQ.updateMatrix(),this.applyMatrix4(EQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ze).negate(),this.translate(ze.x,ze.y,ze.z),this}setFromPoints(A){const g=[];for(let t=0,e=A.length;t<e;t++){const C=A[t];g.push(C.x,C.y,C.z||0)}return this.setAttribute("position",new rI(g,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sB);const A=this.attributes.position,g=this.morphAttributes.position;if(A&&A.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new iA(-1/0,-1/0,-1/0),new iA(1/0,1/0,1/0));if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),g)for(let t=0,e=g.length;t<e;t++){const C=g[t];Ce.setFromBufferAttribute(C),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Ce.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Ce.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Ce.min),this.boundingBox.expandByPoint(Ce.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);const A=this.attributes.position,g=this.morphAttributes.position;if(A&&A.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new iA,1/0);if(A){const t=this.boundingSphere.center;if(Ce.setFromBufferAttribute(A),g)for(let C=0,Q=g.length;C<Q;C++){const n=g[C];rC.setFromBufferAttribute(n),this.morphTargetsRelative?(xt.addVectors(Ce.min,rC.min),Ce.expandByPoint(xt),xt.addVectors(Ce.max,rC.max),Ce.expandByPoint(xt)):(Ce.expandByPoint(rC.min),Ce.expandByPoint(rC.max))}Ce.getCenter(t);let e=0;for(let C=0,Q=A.count;C<Q;C++)xt.fromBufferAttribute(A,C),e=Math.max(e,t.distanceToSquared(xt));if(g)for(let C=0,Q=g.length;C<Q;C++){const n=g[C],a=this.morphTargetsRelative;for(let s=0,d=n.count;s<d;s++)xt.fromBufferAttribute(n,s),a&&(ze.fromBufferAttribute(A,s),xt.add(ze)),e=Math.max(e,t.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(e),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,g=this.attributes;if(A===null||g.position===void 0||g.normal===void 0||g.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const t=A.array,e=g.position.array,C=g.normal.array,Q=g.uv.array,n=e.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*n),4));const a=this.getAttribute("tangent").array,s=[],d=[];for(let qA=0;qA<n;qA++)s[qA]=new iA,d[qA]=new iA;const D=new iA,u=new iA,f=new iA,S=new pg,M=new pg,x=new pg,K=new iA,k=new iA;function T(qA,RA,Eg){D.fromArray(e,3*qA),u.fromArray(e,3*RA),f.fromArray(e,3*Eg),S.fromArray(Q,2*qA),M.fromArray(Q,2*RA),x.fromArray(Q,2*Eg),u.sub(D),f.sub(D),M.sub(S),x.sub(S);const Mg=1/(M.x*x.y-x.x*M.y);isFinite(Mg)&&(K.copy(u).multiplyScalar(x.y).addScaledVector(f,-M.y).multiplyScalar(Mg),k.copy(f).multiplyScalar(M.x).addScaledVector(u,-x.x).multiplyScalar(Mg),s[qA].add(K),s[RA].add(K),s[Eg].add(K),d[qA].add(k),d[RA].add(k),d[Eg].add(k))}let W=this.groups;W.length===0&&(W=[{start:0,count:t.length}]);for(let qA=0,RA=W.length;qA<RA;++qA){const Eg=W[qA],Mg=Eg.start;for(let Dg=Mg,bg=Mg+Eg.count;Dg<bg;Dg+=3)T(t[Dg+0],t[Dg+1],t[Dg+2])}const j=new iA,QA=new iA,pA=new iA,SA=new iA;function KA(qA){pA.fromArray(C,3*qA),SA.copy(pA);const RA=s[qA];j.copy(RA),j.sub(pA.multiplyScalar(pA.dot(RA))).normalize(),QA.crossVectors(SA,RA);const Eg=QA.dot(d[qA])<0?-1:1;a[4*qA]=j.x,a[4*qA+1]=j.y,a[4*qA+2]=j.z,a[4*qA+3]=Eg}for(let qA=0,RA=W.length;qA<RA;++qA){const Eg=W[qA],Mg=Eg.start;for(let Dg=Mg,bg=Mg+Eg.count;Dg<bg;Dg+=3)KA(t[Dg+0]),KA(t[Dg+1]),KA(t[Dg+2])}}computeVertexNormals(){const A=this.index,g=this.getAttribute("position");if(g!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new Et(new Float32Array(3*g.count),3),this.setAttribute("normal",t);else for(let u=0,f=t.count;u<f;u++)t.setXYZ(u,0,0,0);const e=new iA,C=new iA,Q=new iA,n=new iA,a=new iA,s=new iA,d=new iA,D=new iA;if(A)for(let u=0,f=A.count;u<f;u+=3){const S=A.getX(u+0),M=A.getX(u+1),x=A.getX(u+2);e.fromBufferAttribute(g,S),C.fromBufferAttribute(g,M),Q.fromBufferAttribute(g,x),d.subVectors(Q,C),D.subVectors(e,C),d.cross(D),n.fromBufferAttribute(t,S),a.fromBufferAttribute(t,M),s.fromBufferAttribute(t,x),n.add(d),a.add(d),s.add(d),t.setXYZ(S,n.x,n.y,n.z),t.setXYZ(M,a.x,a.y,a.z),t.setXYZ(x,s.x,s.y,s.z)}else for(let u=0,f=g.count;u<f;u+=3)e.fromBufferAttribute(g,u+0),C.fromBufferAttribute(g,u+1),Q.fromBufferAttribute(g,u+2),d.subVectors(Q,C),D.subVectors(e,C),d.cross(D),t.setXYZ(u+0,d.x,d.y,d.z),t.setXYZ(u+1,d.x,d.y,d.z),t.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),t.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let g=0,t=A.count;g<t;g++)xt.fromBufferAttribute(A,g),xt.normalize(),A.setXYZ(g,xt.x,xt.y,xt.z)}toNonIndexed(){function A(n,a){const s=n.array,d=n.itemSize,D=n.normalized,u=new s.constructor(a.length*d);let f=0,S=0;for(let M=0,x=a.length;M<x;M++){f=n.isInterleavedBufferAttribute?a[M]*n.data.stride+n.offset:a[M]*d;for(let K=0;K<d;K++)u[S++]=s[f++]}return new Et(u,d,D)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const g=new LI,t=this.index.array,e=this.attributes;for(const n in e){const a=A(e[n],t);g.setAttribute(n,a)}const C=this.morphAttributes;for(const n in C){const a=[],s=C[n];for(let d=0,D=s.length;d<D;d++){const u=A(s[d],t);a.push(u)}g.morphAttributes[n]=a}g.morphTargetsRelative=this.morphTargetsRelative;const Q=this.groups;for(let n=0,a=Q.length;n<a;n++){const s=Q[n];g.addGroup(s.start,s.count,s.materialIndex)}return g}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const s in a)a[s]!==void 0&&(A[s]=a[s]);return A}A.data={attributes:{}};const g=this.index;g!==null&&(A.data.index={type:g.array.constructor.name,array:Array.prototype.slice.call(g.array)});const t=this.attributes;for(const a in t){const s=t[a];A.data.attributes[a]=s.toJSON(A.data)}const e={};let C=!1;for(const a in this.morphAttributes){const s=this.morphAttributes[a],d=[];for(let D=0,u=s.length;D<u;D++){const f=s[D];d.push(f.toJSON(A.data))}d.length>0&&(e[a]=d,C=!0)}C&&(A.data.morphAttributes=e,A.data.morphTargetsRelative=this.morphTargetsRelative);const Q=this.groups;Q.length>0&&(A.data.groups=JSON.parse(JSON.stringify(Q)));const n=this.boundingSphere;return n!==null&&(A.data.boundingSphere={center:n.center.toArray(),radius:n.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const g={};this.name=A.name;const t=A.index;t!==null&&this.setIndex(t.clone(g));const e=A.attributes;for(const s in e){const d=e[s];this.setAttribute(s,d.clone(g))}const C=A.morphAttributes;for(const s in C){const d=[],D=C[s];for(let u=0,f=D.length;u<f;u++)d.push(D[u].clone(g));this.morphAttributes[s]=d}this.morphTargetsRelative=A.morphTargetsRelative;const Q=A.groups;for(let s=0,d=Q.length;s<d;s++){const D=Q[s];this.addGroup(D.start,D.count,D.materialIndex)}const n=A.boundingBox;n!==null&&(this.boundingBox=n.clone());const a=A.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const QQ=new bI,je=new Se,$e=new Wi,mi=new iA,Te=new iA,OB=new iA,PB=new iA,h=new iA,l=new iA,p=new pg,F=new pg,H=new pg,z=new iA,aA=new iA;class rA extends et{constructor(A=new LI,g=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=g,this.updateMorphTargets()}copy(A,g){return super.copy(A,g),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const A=this.geometry.morphAttributes,g=Object.keys(A);if(g.length>0){const t=A[g[0]];if(t!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,C=t.length;e<C;e++){const Q=t[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Q]=e}}}}getVertexPosition(A,g){const t=this.geometry,e=t.attributes.position,C=t.morphAttributes.position,Q=t.morphTargetsRelative;g.fromBufferAttribute(e,A);const n=this.morphTargetInfluences;if(C&&n){l.set(0,0,0);for(let a=0,s=C.length;a<s;a++){const d=n[a],D=C[a];d!==0&&(h.fromBufferAttribute(D,A),Q?l.addScaledVector(h,d):l.addScaledVector(h.sub(g),d))}g.add(l)}return this.isSkinnedMesh&&this.boneTransform(A,g),g}raycast(A,g){const t=this.geometry,e=this.material,C=this.matrixWorld;if(e===void 0||(t.boundingSphere===null&&t.computeBoundingSphere(),$e.copy(t.boundingSphere),$e.applyMatrix4(C),je.copy(A.ray).recast(A.near),$e.containsPoint(je.origin)===!1&&(je.intersectSphere($e,mi)===null||je.origin.distanceToSquared(mi)>(A.far-A.near)**2))||(QQ.copy(C).invert(),je.copy(A.ray).applyMatrix4(QQ),t.boundingBox!==null&&je.intersectsBox(t.boundingBox)===!1))return;let Q;const n=t.index,a=t.attributes.position,s=t.attributes.uv,d=t.attributes.uv2,D=t.groups,u=t.drawRange;if(n!==null)if(Array.isArray(e))for(let f=0,S=D.length;f<S;f++){const M=D[f],x=e[M.materialIndex];for(let K=Math.max(M.start,u.start),k=Math.min(n.count,Math.min(M.start+M.count,u.start+u.count));K<k;K+=3){const T=n.getX(K),W=n.getX(K+1),j=n.getX(K+2);Q=bA(this,x,A,je,s,d,T,W,j),Q&&(Q.faceIndex=Math.floor(K/3),Q.face.materialIndex=M.materialIndex,g.push(Q))}}else for(let f=Math.max(0,u.start),S=Math.min(n.count,u.start+u.count);f<S;f+=3){const M=n.getX(f),x=n.getX(f+1),K=n.getX(f+2);Q=bA(this,e,A,je,s,d,M,x,K),Q&&(Q.faceIndex=Math.floor(f/3),g.push(Q))}else if(a!==void 0)if(Array.isArray(e))for(let f=0,S=D.length;f<S;f++){const M=D[f],x=e[M.materialIndex];for(let K=Math.max(M.start,u.start),k=Math.min(a.count,Math.min(M.start+M.count,u.start+u.count));K<k;K+=3)Q=bA(this,x,A,je,s,d,K,K+1,K+2),Q&&(Q.faceIndex=Math.floor(K/3),Q.face.materialIndex=M.materialIndex,g.push(Q))}else for(let f=Math.max(0,u.start),S=Math.min(a.count,u.start+u.count);f<S;f+=3)Q=bA(this,e,A,je,s,d,f,f+1,f+2),Q&&(Q.faceIndex=Math.floor(f/3),g.push(Q))}}function bA(B,A,g,t,e,C,Q,n,a){B.getVertexPosition(Q,Te),B.getVertexPosition(n,OB),B.getVertexPosition(a,PB);const s=function(d,D,u,f,S,M,x,K){let k;if(k=D.side===1?f.intersectTriangle(x,M,S,!0,K):f.intersectTriangle(S,M,x,D.side===0,K),k===null)return null;aA.copy(K),aA.applyMatrix4(d.matrixWorld);const T=u.ray.origin.distanceTo(aA);return T<u.near||T>u.far?null:{distance:T,point:aA.clone(),object:d}}(B,A,g,t,Te,OB,PB,z);if(s){e&&(p.fromBufferAttribute(e,Q),F.fromBufferAttribute(e,n),H.fromBufferAttribute(e,a),s.uv=qe.getUV(z,Te,OB,PB,p,F,H,new pg)),C&&(p.fromBufferAttribute(C,Q),F.fromBufferAttribute(C,n),H.fromBufferAttribute(C,a),s.uv2=qe.getUV(z,Te,OB,PB,p,F,H,new pg));const d={a:Q,b:n,c:a,normal:new iA,materialIndex:0};qe.getNormal(Te,OB,PB,d.normal),s.face=d}return s}class PA extends LI{constructor(A=1,g=1,t=1,e=1,C=1,Q=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:g,depth:t,widthSegments:e,heightSegments:C,depthSegments:Q};const n=this;e=Math.floor(e),C=Math.floor(C),Q=Math.floor(Q);const a=[],s=[],d=[],D=[];let u=0,f=0;function S(M,x,K,k,T,W,j,QA,pA,SA,KA){const qA=W/pA,RA=j/SA,Eg=W/2,Mg=j/2,Dg=QA/2,bg=pA+1,Jg=SA+1;let $g=0,AI=0;const Tg=new iA;for(let jA=0;jA<Jg;jA++){const sg=jA*RA-Mg;for(let gI=0;gI<bg;gI++){const QI=gI*qA-Eg;Tg[M]=QI*k,Tg[x]=sg*T,Tg[K]=Dg,s.push(Tg.x,Tg.y,Tg.z),Tg[M]=0,Tg[x]=0,Tg[K]=QA>0?1:-1,d.push(Tg.x,Tg.y,Tg.z),D.push(gI/pA),D.push(1-jA/SA),$g+=1}}for(let jA=0;jA<SA;jA++)for(let sg=0;sg<pA;sg++){const gI=u+sg+bg*jA,QI=u+sg+bg*(jA+1),_g=u+(sg+1)+bg*(jA+1),cI=u+(sg+1)+bg*jA;a.push(gI,QI,cI),a.push(QI,_g,cI),AI+=6}n.addGroup(f,AI,KA),f+=AI,u+=$g}S("z","y","x",-1,-1,t,g,A,Q,C,0),S("z","y","x",1,-1,t,g,-A,Q,C,1),S("x","z","y",1,1,A,t,g,e,Q,2),S("x","z","y",1,-1,A,t,-g,e,Q,3),S("x","y","z",1,-1,A,g,t,e,C,4),S("x","y","z",-1,-1,A,g,-t,e,C,5),this.setIndex(a),this.setAttribute("position",new rI(s,3)),this.setAttribute("normal",new rI(d,3)),this.setAttribute("uv",new rI(D,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new PA(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function Sg(B){const A={};for(const g in B){A[g]={};for(const t in B[g]){const e=B[g][t];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)?A[g][t]=e.clone():Array.isArray(e)?A[g][t]=e.slice():A[g][t]=e}}return A}function fg(B){const A={};for(let g=0;g<B.length;g++){const t=Sg(B[g]);for(const e in t)A[e]=t[e]}return A}function tg(B){return B.getRenderTarget()===null&&B.outputEncoding===3001?eA:NA}const Lg={clone:Sg,merge:fg};class qg extends Be{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=Sg(A.uniforms),this.uniformsGroups=function(g){const t=[];for(let e=0;e<g.length;e++)t.push(g[e].clone());return t}(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const g=super.toJSON(A);g.glslVersion=this.glslVersion,g.uniforms={};for(const e in this.uniforms){const C=this.uniforms[e].value;C&&C.isTexture?g.uniforms[e]={type:"t",value:C.toJSON(A).uuid}:C&&C.isColor?g.uniforms[e]={type:"c",value:C.getHex()}:C&&C.isVector2?g.uniforms[e]={type:"v2",value:C.toArray()}:C&&C.isVector3?g.uniforms[e]={type:"v3",value:C.toArray()}:C&&C.isVector4?g.uniforms[e]={type:"v4",value:C.toArray()}:C&&C.isMatrix3?g.uniforms[e]={type:"m3",value:C.toArray()}:C&&C.isMatrix4?g.uniforms[e]={type:"m4",value:C.toArray()}:g.uniforms[e]={value:C}}Object.keys(this.defines).length>0&&(g.defines=this.defines),g.vertexShader=this.vertexShader,g.fragmentShader=this.fragmentShader;const t={};for(const e in this.extensions)this.extensions[e]===!0&&(t[e]=!0);return Object.keys(t).length>0&&(g.extensions=t),g}}class $I extends et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bI,this.projectionMatrix=new bI,this.projectionMatrixInverse=new bI}copy(A,g){return super.copy(A,g),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const g=this.matrixWorld.elements;return A.set(-g[8],-g[9],-g[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,g){super.updateWorldMatrix(A,g),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class mI extends $I{constructor(A=50,g=1,t=.1,e=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=t,this.far=e,this.focus=10,this.aspect=g,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,g){return super.copy(A,g),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const g=.5*this.getFilmHeight()/A;this.fov=2*ee*Math.atan(g),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(.5*rt*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return 2*ee*Math.atan(Math.tan(.5*rt*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,g,t,e,C,Q){this.aspect=A/g,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=g,this.view.offsetX=t,this.view.offsetY=e,this.view.width=C,this.view.height=Q,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let g=A*Math.tan(.5*rt*this.fov)/this.zoom,t=2*g,e=this.aspect*t,C=-.5*e;const Q=this.view;if(this.view!==null&&this.view.enabled){const a=Q.fullWidth,s=Q.fullHeight;C+=Q.offsetX*e/a,g-=Q.offsetY*t/s,e*=Q.width/a,t*=Q.height/s}const n=this.filmOffset;n!==0&&(C+=A*n/this.getFilmWidth()),this.projectionMatrix.makePerspective(C,C+e,g,g-t,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const g=super.toJSON(A);return g.object.fov=this.fov,g.object.zoom=this.zoom,g.object.near=this.near,g.object.far=this.far,g.object.focus=this.focus,g.object.aspect=this.aspect,this.view!==null&&(g.object.view=Object.assign({},this.view)),g.object.filmGauge=this.filmGauge,g.object.filmOffset=this.filmOffset,g}}const OI=-90;class rg extends et{constructor(A,g,t){super(),this.type="CubeCamera",this.renderTarget=t;const e=new mI(OI,1,A,g);e.layers=this.layers,e.up.set(0,1,0),e.lookAt(1,0,0),this.add(e);const C=new mI(OI,1,A,g);C.layers=this.layers,C.up.set(0,1,0),C.lookAt(-1,0,0),this.add(C);const Q=new mI(OI,1,A,g);Q.layers=this.layers,Q.up.set(0,0,-1),Q.lookAt(0,1,0),this.add(Q);const n=new mI(OI,1,A,g);n.layers=this.layers,n.up.set(0,0,1),n.lookAt(0,-1,0),this.add(n);const a=new mI(OI,1,A,g);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(0,0,1),this.add(a);const s=new mI(OI,1,A,g);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(0,0,-1),this.add(s)}update(A,g){this.parent===null&&this.updateMatrixWorld();const t=this.renderTarget,[e,C,Q,n,a,s]=this.children,d=A.getRenderTarget(),D=A.toneMapping,u=A.xr.enabled;A.toneMapping=0,A.xr.enabled=!1;const f=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,A.setRenderTarget(t,0),A.render(g,e),A.setRenderTarget(t,1),A.render(g,C),A.setRenderTarget(t,2),A.render(g,Q),A.setRenderTarget(t,3),A.render(g,n),A.setRenderTarget(t,4),A.render(g,a),t.texture.generateMipmaps=f,A.setRenderTarget(t,5),A.render(g,s),A.setRenderTarget(d),A.toneMapping=D,A.xr.enabled=u,t.texture.needsPMREMUpdate=!0}}class nI extends Lt{constructor(A,g,t,e,C,Q,n,a,s,d){super(A=A!==void 0?A:[],g=g!==void 0?g:301,t,e,C,Q,n,a,s,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class Ft extends Ve{constructor(A=1,g={}){super(A,A,g),this.isWebGLCubeRenderTarget=!0;const t={width:A,height:A,depth:1},e=[t,t,t,t,t,t];this.texture=new nI(e,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=g.generateMipmaps!==void 0&&g.generateMipmaps,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:1006}fromEquirectangularTexture(A,g){this.texture.type=g.type,this.texture.encoding=g.encoding,this.texture.generateMipmaps=g.generateMipmaps,this.texture.minFilter=g.minFilter,this.texture.magFilter=g.magFilter;const t={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},e=new PA(5,5,5),C=new qg({name:"CubemapFromEquirect",uniforms:Sg(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:1,blending:0});C.uniforms.tEquirect.value=g;const Q=new rA(e,C),n=g.minFilter;return g.minFilter===1008&&(g.minFilter=1006),new rg(1,10,this).update(A,Q),g.minFilter=n,Q.geometry.dispose(),Q.material.dispose(),this}clear(A,g,t,e){const C=A.getRenderTarget();for(let Q=0;Q<6;Q++)A.setRenderTarget(this,Q),A.clear(g,t,e);A.setRenderTarget(C)}}const st=new iA,de=new iA,Zt=new Wt;class ji{constructor(A=new iA(1,0,0),g=0){this.isPlane=!0,this.normal=A,this.constant=g}set(A,g){return this.normal.copy(A),this.constant=g,this}setComponents(A,g,t,e){return this.normal.set(A,g,t),this.constant=e,this}setFromNormalAndCoplanarPoint(A,g){return this.normal.copy(A),this.constant=-g.dot(this.normal),this}setFromCoplanarPoints(A,g,t){const e=st.subVectors(t,g).cross(de.subVectors(A,g)).normalize();return this.setFromNormalAndCoplanarPoint(e,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,g){return g.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,g){const t=A.delta(st),e=this.normal.dot(t);if(e===0)return this.distanceToPoint(A.start)===0?g.copy(A.start):null;const C=-(A.start.dot(this.normal)+this.constant)/e;return C<0||C>1?null:g.copy(A.start).addScaledVector(t,C)}intersectsLine(A){const g=this.distanceToPoint(A.start),t=this.distanceToPoint(A.end);return g<0&&t>0||t<0&&g>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,g){const t=g||Zt.getNormalMatrix(A),e=this.coplanarPoint(st).applyMatrix4(A),C=this.normal.applyMatrix3(t).normalize();return this.constant=-e.dot(C),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Wi,Ee=new iA;class iE{constructor(A=new ji,g=new ji,t=new ji,e=new ji,C=new ji,Q=new ji){this.planes=[A,g,t,e,C,Q]}set(A,g,t,e,C,Q){const n=this.planes;return n[0].copy(A),n[1].copy(g),n[2].copy(t),n[3].copy(e),n[4].copy(C),n[5].copy(Q),this}copy(A){const g=this.planes;for(let t=0;t<6;t++)g[t].copy(A.planes[t]);return this}setFromProjectionMatrix(A){const g=this.planes,t=A.elements,e=t[0],C=t[1],Q=t[2],n=t[3],a=t[4],s=t[5],d=t[6],D=t[7],u=t[8],f=t[9],S=t[10],M=t[11],x=t[12],K=t[13],k=t[14],T=t[15];return g[0].setComponents(n-e,D-a,M-u,T-x).normalize(),g[1].setComponents(n+e,D+a,M+u,T+x).normalize(),g[2].setComponents(n+C,D+s,M+f,T+K).normalize(),g[3].setComponents(n-C,D-s,M-f,T-K).normalize(),g[4].setComponents(n-Q,D-d,M-S,T-k).normalize(),g[5].setComponents(n+Q,D+d,M+S,T+k).normalize(),this}intersectsObject(A){const g=A.geometry;return g.boundingSphere===null&&g.computeBoundingSphere(),Ri.copy(g.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(Ri)}intersectsSprite(A){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(A.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(A){const g=this.planes,t=A.center,e=-A.radius;for(let C=0;C<6;C++)if(g[C].distanceToPoint(t)<e)return!1;return!0}intersectsBox(A){const g=this.planes;for(let t=0;t<6;t++){const e=g[t];if(Ee.x=e.normal.x>0?A.max.x:A.min.x,Ee.y=e.normal.y>0?A.max.y:A.min.y,Ee.z=e.normal.z>0?A.max.z:A.min.z,e.distanceToPoint(Ee)<0)return!1}return!0}containsPoint(A){const g=this.planes;for(let t=0;t<6;t++)if(g[t].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function BE(){let B=null,A=!1,g=null,t=null;function e(C,Q){g(C,Q),t=B.requestAnimationFrame(e)}return{start:function(){A!==!0&&g!==null&&(t=B.requestAnimationFrame(e),A=!0)},stop:function(){B.cancelAnimationFrame(t),A=!1},setAnimationLoop:function(C){g=C},setContext:function(C){B=C}}}function Eo(B,A){const g=A.isWebGL2,t=new WeakMap;return{get:function(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)},remove:function(e){e.isInterleavedBufferAttribute&&(e=e.data);const C=t.get(e);C&&(B.deleteBuffer(C.buffer),t.delete(e))},update:function(e,C){if(e.isGLBufferAttribute){const n=t.get(e);return void((!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version}))}e.isInterleavedBufferAttribute&&(e=e.data);const Q=t.get(e);Q===void 0?t.set(e,function(n,a){const s=n.array,d=n.usage,D=B.createBuffer();let u;if(B.bindBuffer(a,D),B.bufferData(a,s,d),n.onUploadCallback(),s instanceof Float32Array)u=5126;else if(s instanceof Uint16Array)if(n.isFloat16BufferAttribute){if(!g)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");u=5131}else u=5123;else if(s instanceof Int16Array)u=5122;else if(s instanceof Uint32Array)u=5125;else if(s instanceof Int32Array)u=5124;else if(s instanceof Int8Array)u=5120;else if(s instanceof Uint8Array)u=5121;else{if(!(s instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+s);u=5121}return{buffer:D,type:u,bytesPerElement:s.BYTES_PER_ELEMENT,version:n.version}}(e,C)):Q.version<e.version&&(function(n,a,s){const d=a.array,D=a.updateRange;B.bindBuffer(s,n),D.count===-1?B.bufferSubData(s,0,d):(g?B.bufferSubData(s,D.offset*d.BYTES_PER_ELEMENT,d,D.offset,D.count):B.bufferSubData(s,D.offset*d.BYTES_PER_ELEMENT,d.subarray(D.offset,D.offset+D.count)),D.count=-1),a.onUploadCallback()}(Q.buffer,e,C),Q.version=e.version)}}}class CE extends LI{constructor(A=1,g=1,t=1,e=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:g,widthSegments:t,heightSegments:e};const C=A/2,Q=g/2,n=Math.floor(t),a=Math.floor(e),s=n+1,d=a+1,D=A/n,u=g/a,f=[],S=[],M=[],x=[];for(let K=0;K<d;K++){const k=K*u-Q;for(let T=0;T<s;T++){const W=T*D-C;S.push(W,-k,0),M.push(0,0,1),x.push(T/n),x.push(1-K/a)}}for(let K=0;K<a;K++)for(let k=0;k<n;k++){const T=k+s*K,W=k+s*(K+1),j=k+1+s*(K+1),QA=k+1+s*K;f.push(T,W,QA),f.push(W,j,QA)}this.setIndex(f),this.setAttribute("position",new rI(S,3)),this.setAttribute("normal",new rI(M,3)),this.setAttribute("uv",new rI(x,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new CE(A.width,A.height,A.widthSegments,A.heightSegments)}}const PI={alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
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
vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
    
    vec2 lodFudge = pow( 1.95, lod ) / fullSize;
	return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
		   g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
}
vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
	vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
	vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
	vec2 fLodSizeInv = 1.0 / fLodSize;
	vec2 cLodSizeInv = 1.0 / cLodSize;
	vec2 fullSize = vec2( textureSize( sampler, 0 ) );
	vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
	vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
	return mix( fSample, cSample, fract( lod ) );
}`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,lights_fragment_begin:`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps:`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,output_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment:`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex:`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex:`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshphong_frag:`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,shadow_frag:`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},zg={common:{diffuse:{value:new CI(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Wt},uv2Transform:{value:new Wt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new pg(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new CI(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new CI(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new CI(16777215)},opacity:{value:1},center:{value:new pg(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wt}}},Si={basic:{uniforms:fg([zg.common,zg.specularmap,zg.envmap,zg.aomap,zg.lightmap,zg.fog]),vertexShader:PI.meshbasic_vert,fragmentShader:PI.meshbasic_frag},lambert:{uniforms:fg([zg.common,zg.specularmap,zg.envmap,zg.aomap,zg.lightmap,zg.emissivemap,zg.bumpmap,zg.normalmap,zg.displacementmap,zg.fog,zg.lights,{emissive:{value:new CI(0)}}]),vertexShader:PI.meshlambert_vert,fragmentShader:PI.meshlambert_frag},phong:{uniforms:fg([zg.common,zg.specularmap,zg.envmap,zg.aomap,zg.lightmap,zg.emissivemap,zg.bumpmap,zg.normalmap,zg.displacementmap,zg.fog,zg.lights,{emissive:{value:new CI(0)},specular:{value:new CI(1118481)},shininess:{value:30}}]),vertexShader:PI.meshphong_vert,fragmentShader:PI.meshphong_frag},standard:{uniforms:fg([zg.common,zg.envmap,zg.aomap,zg.lightmap,zg.emissivemap,zg.bumpmap,zg.normalmap,zg.displacementmap,zg.roughnessmap,zg.metalnessmap,zg.fog,zg.lights,{emissive:{value:new CI(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:PI.meshphysical_vert,fragmentShader:PI.meshphysical_frag},toon:{uniforms:fg([zg.common,zg.aomap,zg.lightmap,zg.emissivemap,zg.bumpmap,zg.normalmap,zg.displacementmap,zg.gradientmap,zg.fog,zg.lights,{emissive:{value:new CI(0)}}]),vertexShader:PI.meshtoon_vert,fragmentShader:PI.meshtoon_frag},matcap:{uniforms:fg([zg.common,zg.bumpmap,zg.normalmap,zg.displacementmap,zg.fog,{matcap:{value:null}}]),vertexShader:PI.meshmatcap_vert,fragmentShader:PI.meshmatcap_frag},points:{uniforms:fg([zg.points,zg.fog]),vertexShader:PI.points_vert,fragmentShader:PI.points_frag},dashed:{uniforms:fg([zg.common,zg.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:PI.linedashed_vert,fragmentShader:PI.linedashed_frag},depth:{uniforms:fg([zg.common,zg.displacementmap]),vertexShader:PI.depth_vert,fragmentShader:PI.depth_frag},normal:{uniforms:fg([zg.common,zg.bumpmap,zg.normalmap,zg.displacementmap,{opacity:{value:1}}]),vertexShader:PI.meshnormal_vert,fragmentShader:PI.meshnormal_frag},sprite:{uniforms:fg([zg.sprite,zg.fog]),vertexShader:PI.sprite_vert,fragmentShader:PI.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:PI.background_vert,fragmentShader:PI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:PI.backgroundCube_vert,fragmentShader:PI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:PI.cube_vert,fragmentShader:PI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:PI.equirect_vert,fragmentShader:PI.equirect_frag},distanceRGBA:{uniforms:fg([zg.common,zg.displacementmap,{referencePosition:{value:new iA},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:PI.distanceRGBA_vert,fragmentShader:PI.distanceRGBA_frag},shadow:{uniforms:fg([zg.lights,zg.fog,{color:{value:new CI(0)},opacity:{value:1}}]),vertexShader:PI.shadow_vert,fragmentShader:PI.shadow_frag}};Si.physical={uniforms:fg([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new pg(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new CI(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new pg},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new CI(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new CI(1,1,1)},specularColorMap:{value:null}}]),vertexShader:PI.meshphysical_vert,fragmentShader:PI.meshphysical_frag};const Qo={r:0,b:0,g:0};function xl(B,A,g,t,e,C,Q){const n=new CI(0);let a,s,d=C===!0?0:1,D=null,u=0,f=null;function S(M,x){M.getRGB(Qo,tg(B)),t.buffers.color.setClear(Qo.r,Qo.g,Qo.b,x,Q)}return{getClearColor:function(){return n},setClearColor:function(M,x=1){n.set(M),d=x,S(n,d)},getClearAlpha:function(){return d},setClearAlpha:function(M){d=M,S(n,d)},render:function(M,x){let K=!1,k=x.isScene===!0?x.background:null;k&&k.isTexture&&(k=(x.backgroundBlurriness>0?g:A).get(k));const T=B.xr,W=T.getSession&&T.getSession();W&&W.environmentBlendMode==="additive"&&(k=null),k===null?S(n,d):k&&k.isColor&&(S(k,1),K=!0),(B.autoClear||K)&&B.clear(B.autoClearColor,B.autoClearDepth,B.autoClearStencil),k&&(k.isCubeTexture||k.mapping===306)?(s===void 0&&(s=new rA(new PA(1,1,1),new qg({name:"BackgroundCubeMaterial",uniforms:Sg(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),s.geometry.deleteAttribute("normal"),s.geometry.deleteAttribute("uv"),s.onBeforeRender=function(j,QA,pA){this.matrixWorld.copyPosition(pA.matrixWorld)},Object.defineProperty(s.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),e.update(s)),s.material.uniforms.envMap.value=k,s.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,s.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,s.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,s.material.toneMapped=k.encoding!==3001,D===k&&u===k.version&&f===B.toneMapping||(s.material.needsUpdate=!0,D=k,u=k.version,f=B.toneMapping),s.layers.enableAll(),M.unshift(s,s.geometry,s.material,0,0,null)):k&&k.isTexture&&(a===void 0&&(a=new rA(new CE(2,2),new qg({name:"BackgroundMaterial",uniforms:Sg(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),e.update(a)),a.material.uniforms.t2D.value=k,a.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,a.material.toneMapped=k.encoding!==3001,k.matrixAutoUpdate===!0&&k.updateMatrix(),a.material.uniforms.uvTransform.value.copy(k.matrix),D===k&&u===k.version&&f===B.toneMapping||(a.material.needsUpdate=!0,D=k,u=k.version,f=B.toneMapping),a.layers.enableAll(),M.unshift(a,a.geometry,a.material,0,0,null))}}}function Jl(B,A,g,t){const e=B.getParameter(34921),C=t.isWebGL2?null:A.get("OES_vertex_array_object"),Q=t.isWebGL2||C!==null,n={},a=f(null);let s=a,d=!1;function D(j){return t.isWebGL2?B.bindVertexArray(j):C.bindVertexArrayOES(j)}function u(j){return t.isWebGL2?B.deleteVertexArray(j):C.deleteVertexArrayOES(j)}function f(j){const QA=[],pA=[],SA=[];for(let KA=0;KA<e;KA++)QA[KA]=0,pA[KA]=0,SA[KA]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:QA,enabledAttributes:pA,attributeDivisors:SA,object:j,attributes:{},index:null}}function S(){const j=s.newAttributes;for(let QA=0,pA=j.length;QA<pA;QA++)j[QA]=0}function M(j){x(j,0)}function x(j,QA){const pA=s.newAttributes,SA=s.enabledAttributes,KA=s.attributeDivisors;pA[j]=1,SA[j]===0&&(B.enableVertexAttribArray(j),SA[j]=1),KA[j]!==QA&&((t.isWebGL2?B:A.get("ANGLE_instanced_arrays"))[t.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,QA),KA[j]=QA)}function K(){const j=s.newAttributes,QA=s.enabledAttributes;for(let pA=0,SA=QA.length;pA<SA;pA++)QA[pA]!==j[pA]&&(B.disableVertexAttribArray(pA),QA[pA]=0)}function k(j,QA,pA,SA,KA,qA){t.isWebGL2!==!0||pA!==5124&&pA!==5125?B.vertexAttribPointer(j,QA,pA,SA,KA,qA):B.vertexAttribIPointer(j,QA,pA,KA,qA)}function T(){W(),d=!0,s!==a&&(s=a,D(s.object))}function W(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:function(j,QA,pA,SA,KA){let qA=!1;if(Q){const RA=function(Eg,Mg,Dg){const bg=Dg.wireframe===!0;let Jg=n[Eg.id];Jg===void 0&&(Jg={},n[Eg.id]=Jg);let $g=Jg[Mg.id];$g===void 0&&($g={},Jg[Mg.id]=$g);let AI=$g[bg];return AI===void 0&&(AI=f(t.isWebGL2?B.createVertexArray():C.createVertexArrayOES()),$g[bg]=AI),AI}(SA,pA,QA);s!==RA&&(s=RA,D(s.object)),qA=function(Eg,Mg,Dg,bg){const Jg=s.attributes,$g=Mg.attributes;let AI=0;const Tg=Dg.getAttributes();for(const jA in Tg)if(Tg[jA].location>=0){const sg=Jg[jA];let gI=$g[jA];if(gI===void 0&&(jA==="instanceMatrix"&&Eg.instanceMatrix&&(gI=Eg.instanceMatrix),jA==="instanceColor"&&Eg.instanceColor&&(gI=Eg.instanceColor)),sg===void 0||sg.attribute!==gI||gI&&sg.data!==gI.data)return!0;AI++}return s.attributesNum!==AI||s.index!==bg}(j,SA,pA,KA),qA&&function(Eg,Mg,Dg,bg){const Jg={},$g=Mg.attributes;let AI=0;const Tg=Dg.getAttributes();for(const jA in Tg)if(Tg[jA].location>=0){let sg=$g[jA];sg===void 0&&(jA==="instanceMatrix"&&Eg.instanceMatrix&&(sg=Eg.instanceMatrix),jA==="instanceColor"&&Eg.instanceColor&&(sg=Eg.instanceColor));const gI={};gI.attribute=sg,sg&&sg.data&&(gI.data=sg.data),Jg[jA]=gI,AI++}s.attributes=Jg,s.attributesNum=AI,s.index=bg}(j,SA,pA,KA)}else{const RA=QA.wireframe===!0;s.geometry===SA.id&&s.program===pA.id&&s.wireframe===RA||(s.geometry=SA.id,s.program=pA.id,s.wireframe=RA,qA=!0)}KA!==null&&g.update(KA,34963),(qA||d)&&(d=!1,function(RA,Eg,Mg,Dg){if(t.isWebGL2===!1&&(RA.isInstancedMesh||Dg.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;S();const bg=Dg.attributes,Jg=Mg.getAttributes(),$g=Eg.defaultAttributeValues;for(const AI in Jg){const Tg=Jg[AI];if(Tg.location>=0){let jA=bg[AI];if(jA===void 0&&(AI==="instanceMatrix"&&RA.instanceMatrix&&(jA=RA.instanceMatrix),AI==="instanceColor"&&RA.instanceColor&&(jA=RA.instanceColor)),jA!==void 0){const sg=jA.normalized,gI=jA.itemSize,QI=g.get(jA);if(QI===void 0)continue;const _g=QI.buffer,cI=QI.type,hA=QI.bytesPerElement;if(jA.isInterleavedBufferAttribute){const gA=jA.data,XA=gA.stride,xA=jA.offset;if(gA.isInstancedInterleavedBuffer){for(let uA=0;uA<Tg.locationSize;uA++)x(Tg.location+uA,gA.meshPerAttribute);RA.isInstancedMesh!==!0&&Dg._maxInstanceCount===void 0&&(Dg._maxInstanceCount=gA.meshPerAttribute*gA.count)}else for(let uA=0;uA<Tg.locationSize;uA++)M(Tg.location+uA);B.bindBuffer(34962,_g);for(let uA=0;uA<Tg.locationSize;uA++)k(Tg.location+uA,gI/Tg.locationSize,cI,sg,XA*hA,(xA+gI/Tg.locationSize*uA)*hA)}else{if(jA.isInstancedBufferAttribute){for(let gA=0;gA<Tg.locationSize;gA++)x(Tg.location+gA,jA.meshPerAttribute);RA.isInstancedMesh!==!0&&Dg._maxInstanceCount===void 0&&(Dg._maxInstanceCount=jA.meshPerAttribute*jA.count)}else for(let gA=0;gA<Tg.locationSize;gA++)M(Tg.location+gA);B.bindBuffer(34962,_g);for(let gA=0;gA<Tg.locationSize;gA++)k(Tg.location+gA,gI/Tg.locationSize,cI,sg,gI*hA,gI/Tg.locationSize*gA*hA)}}else if($g!==void 0){const sg=$g[AI];if(sg!==void 0)switch(sg.length){case 2:B.vertexAttrib2fv(Tg.location,sg);break;case 3:B.vertexAttrib3fv(Tg.location,sg);break;case 4:B.vertexAttrib4fv(Tg.location,sg);break;default:B.vertexAttrib1fv(Tg.location,sg)}}}}K()}(j,QA,pA,SA),KA!==null&&B.bindBuffer(34963,g.get(KA).buffer))},reset:T,resetDefaultState:W,dispose:function(){T();for(const j in n){const QA=n[j];for(const pA in QA){const SA=QA[pA];for(const KA in SA)u(SA[KA].object),delete SA[KA];delete QA[pA]}delete n[j]}},releaseStatesOfGeometry:function(j){if(n[j.id]===void 0)return;const QA=n[j.id];for(const pA in QA){const SA=QA[pA];for(const KA in SA)u(SA[KA].object),delete SA[KA];delete QA[pA]}delete n[j.id]},releaseStatesOfProgram:function(j){for(const QA in n){const pA=n[QA];if(pA[j.id]===void 0)continue;const SA=pA[j.id];for(const KA in SA)u(SA[KA].object),delete SA[KA];delete pA[j.id]}},initAttributes:S,enableAttribute:M,disableUnusedAttributes:K}}function bl(B,A,g,t){const e=t.isWebGL2;let C;this.setMode=function(Q){C=Q},this.render=function(Q,n){B.drawArrays(C,Q,n),g.update(n,C,1)},this.renderInstances=function(Q,n,a){if(a===0)return;let s,d;if(e)s=B,d="drawArraysInstanced";else if(s=A.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",s===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");s[d](C,Q,n,a),g.update(n,C,a)}}function Kl(B,A,g){let t;function e(W){if(W==="highp"){if(B.getShaderPrecisionFormat(35633,36338).precision>0&&B.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";W="mediump"}return W==="mediump"&&B.getShaderPrecisionFormat(35633,36337).precision>0&&B.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const C=typeof WebGL2RenderingContext<"u"&&B instanceof WebGL2RenderingContext;let Q=g.precision!==void 0?g.precision:"highp";const n=e(Q);n!==Q&&(console.warn("THREE.WebGLRenderer:",Q,"not supported, using",n,"instead."),Q=n);const a=C||A.has("WEBGL_draw_buffers"),s=g.logarithmicDepthBuffer===!0,d=B.getParameter(34930),D=B.getParameter(35660),u=B.getParameter(3379),f=B.getParameter(34076),S=B.getParameter(34921),M=B.getParameter(36347),x=B.getParameter(36348),K=B.getParameter(36349),k=D>0,T=C||A.has("OES_texture_float");return{isWebGL2:C,drawBuffers:a,getMaxAnisotropy:function(){if(t!==void 0)return t;if(A.has("EXT_texture_filter_anisotropic")===!0){const W=A.get("EXT_texture_filter_anisotropic");t=B.getParameter(W.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else t=0;return t},getMaxPrecision:e,precision:Q,logarithmicDepthBuffer:s,maxTextures:d,maxVertexTextures:D,maxTextureSize:u,maxCubemapSize:f,maxAttributes:S,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:K,vertexTextures:k,floatFragmentTextures:T,floatVertexTextures:k&&T,maxSamples:C?B.getParameter(36183):0}}function vl(B){const A=this;let g=null,t=0,e=!1,C=!1;const Q=new ji,n=new Wt,a={value:null,needsUpdate:!1};function s(d,D,u,f){const S=d!==null?d.length:0;let M=null;if(S!==0){if(M=a.value,f!==!0||M===null){const x=u+4*S,K=D.matrixWorldInverse;n.getNormalMatrix(K),(M===null||M.length<x)&&(M=new Float32Array(x));for(let k=0,T=u;k!==S;++k,T+=4)Q.copy(d[k]).applyMatrix4(K,n),Q.normal.toArray(M,T),M[T+3]=Q.constant}a.value=M,a.needsUpdate=!0}return A.numPlanes=S,A.numIntersection=0,M}this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,D){const u=d.length!==0||D||t!==0||e;return e=D,t=d.length,u},this.beginShadows=function(){C=!0,s(null)},this.endShadows=function(){C=!1},this.setGlobalState=function(d,D){g=s(d,D,0)},this.setState=function(d,D,u){const f=d.clippingPlanes,S=d.clipIntersection,M=d.clipShadows,x=B.get(d);if(!e||f===null||f.length===0||C&&!M)C?s(null):function(){a.value!==g&&(a.value=g,a.needsUpdate=t>0),A.numPlanes=t,A.numIntersection=0}();else{const K=C?0:t,k=4*K;let T=x.clippingState||null;a.value=T,T=s(f,D,k,u);for(let W=0;W!==k;++W)T[W]=g[W];x.clippingState=T,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=K}}}function Yl(B){let A=new WeakMap;function g(e,C){return C===303?e.mapping=301:C===304&&(e.mapping=302),e}function t(e){const C=e.target;C.removeEventListener("dispose",t);const Q=A.get(C);Q!==void 0&&(A.delete(C),Q.dispose())}return{get:function(e){if(e&&e.isTexture&&e.isRenderTargetTexture===!1){const C=e.mapping;if(C===303||C===304){if(A.has(e))return g(A.get(e).texture,e.mapping);{const Q=e.image;if(Q&&Q.height>0){const n=new Ft(Q.height/2);return n.fromEquirectangularTexture(B,e),A.set(e,n),e.addEventListener("dispose",t),g(n.texture,e.mapping)}return null}}}return e},dispose:function(){A=new WeakMap}}}class oo extends $I{constructor(A=-1,g=1,t=1,e=-1,C=.1,Q=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=g,this.top=t,this.bottom=e,this.near=C,this.far=Q,this.updateProjectionMatrix()}copy(A,g){return super.copy(A,g),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,g,t,e,C,Q){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=g,this.view.offsetX=t,this.view.offsetY=e,this.view.width=C,this.view.height=Q,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),g=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,e=(this.top+this.bottom)/2;let C=t-A,Q=t+A,n=e+g,a=e-g;if(this.view!==null&&this.view.enabled){const s=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;C+=s*this.view.offsetX,Q=C+s*this.view.width,n-=d*this.view.offsetY,a=n-d*this.view.height}this.projectionMatrix.makeOrthographic(C,Q,n,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const g=super.toJSON(A);return g.object.zoom=this.zoom,g.object.left=this.left,g.object.right=this.right,g.object.top=this.top,g.object.bottom=this.bottom,g.object.near=this.near,g.object.far=this.far,this.view!==null&&(g.object.view=Object.assign({},this.view)),g}}const EE=4,us=[.125,.215,.35,.446,.526,.582],hC=20,Gn=new oo,Ds=new CI;let Fn=null;const cC=(1+Math.sqrt(5))/2,QE=1/cC,ws=[new iA(1,1,1),new iA(-1,1,1),new iA(1,1,-1),new iA(-1,1,-1),new iA(0,cC,QE),new iA(0,cC,-QE),new iA(QE,0,cC),new iA(-QE,0,cC),new iA(cC,QE,0),new iA(-cC,QE,0)];class Nn{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,g=0,t=.1,e=100){Fn=this._renderer.getRenderTarget(),this._setSize(256);const C=this._allocateTargets();return C.depthBuffer=!0,this._sceneToCubeUV(A,t,e,C),g>0&&this._blur(C,0,0,g),this._applyPMREM(C),this._cleanup(C),C}fromEquirectangular(A,g=null){return this._fromTexture(A,g)}fromCubemap(A,g=null){return this._fromTexture(A,g)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ys(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ps(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(Fn),A.scissorTest=!1,no(A,0,0,A.width,A.height)}_fromTexture(A,g){A.mapping===301||A.mapping===302?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),Fn=this._renderer.getRenderTarget();const t=g||this._allocateTargets();return this._textureToCubeUV(A,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),g=4*this._cubeSize,t={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},e=fs(A,g,t);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==g){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fs(A,g,t);const{_lodMax:C}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(Q){const n=[],a=[],s=[];let d=Q;const D=Q-EE+1+us.length;for(let u=0;u<D;u++){const f=Math.pow(2,d);a.push(f);let S=1/f;u>Q-EE?S=us[u-Q+EE-1]:u===0&&(S=0),s.push(S);const M=1/(f-2),x=-M,K=1+M,k=[x,x,K,x,K,K,x,x,K,K,x,K],T=6,W=6,j=3,QA=2,pA=1,SA=new Float32Array(j*W*T),KA=new Float32Array(QA*W*T),qA=new Float32Array(pA*W*T);for(let Eg=0;Eg<T;Eg++){const Mg=Eg%3*2/3-1,Dg=Eg>2?0:-1,bg=[Mg,Dg,0,Mg+2/3,Dg,0,Mg+2/3,Dg+1,0,Mg,Dg,0,Mg+2/3,Dg+1,0,Mg,Dg+1,0];SA.set(bg,j*W*Eg),KA.set(k,QA*W*Eg);const Jg=[Eg,Eg,Eg,Eg,Eg,Eg];qA.set(Jg,pA*W*Eg)}const RA=new LI;RA.setAttribute("position",new Et(SA,j)),RA.setAttribute("uv",new Et(KA,QA)),RA.setAttribute("faceIndex",new Et(qA,pA)),n.push(RA),d>EE&&d--}return{lodPlanes:n,sizeLods:a,sigmas:s}}(C)),this._blurMaterial=function(Q,n,a){const s=new Float32Array(hC),d=new iA(0,1,0);return new qg({name:"SphericalGaussianBlur",defines:{n:hC,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${Q}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:d}},vertexShader:Un(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(C,A,g)}return e}_compileMaterial(A){const g=new rA(this._lodPlanes[0],A);this._renderer.compile(g,Gn)}_sceneToCubeUV(A,g,t,e){const C=new mI(90,1,g,t),Q=[1,-1,1,1,1,1],n=[1,1,1,-1,-1,-1],a=this._renderer,s=a.autoClear,d=a.toneMapping;a.getClearColor(Ds),a.toneMapping=0,a.autoClear=!1;const D=new ri({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new rA(new PA,D);let f=!1;const S=A.background;S?S.isColor&&(D.color.copy(S),A.background=null,f=!0):(D.color.copy(Ds),f=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(C.up.set(0,Q[M],0),C.lookAt(n[M],0,0)):x===1?(C.up.set(0,0,Q[M]),C.lookAt(0,n[M],0)):(C.up.set(0,Q[M],0),C.lookAt(0,0,n[M]));const K=this._cubeSize;no(e,x*K,M>2?K:0,K,K),a.setRenderTarget(e),f&&a.render(u,C),a.render(A,C)}u.geometry.dispose(),u.material.dispose(),a.toneMapping=d,a.autoClear=s,A.background=S}_textureToCubeUV(A,g){const t=this._renderer,e=A.mapping===301||A.mapping===302;e?(this._cubemapMaterial===null&&(this._cubemapMaterial=ys()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ps());const C=e?this._cubemapMaterial:this._equirectMaterial,Q=new rA(this._lodPlanes[0],C);C.uniforms.envMap.value=A;const n=this._cubeSize;no(g,0,0,3*n,2*n),t.setRenderTarget(g),t.render(Q,Gn)}_applyPMREM(A){const g=this._renderer,t=g.autoClear;g.autoClear=!1;for(let e=1;e<this._lodPlanes.length;e++){const C=Math.sqrt(this._sigmas[e]*this._sigmas[e]-this._sigmas[e-1]*this._sigmas[e-1]),Q=ws[(e-1)%ws.length];this._blur(A,e-1,e,C,Q)}g.autoClear=t}_blur(A,g,t,e,C){const Q=this._pingPongRenderTarget;this._halfBlur(A,Q,g,t,e,"latitudinal",C),this._halfBlur(Q,A,t,t,e,"longitudinal",C)}_halfBlur(A,g,t,e,C,Q,n){const a=this._renderer,s=this._blurMaterial;Q!=="latitudinal"&&Q!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=new rA(this._lodPlanes[e],s),D=s.uniforms,u=this._sizeLods[t]-1,f=isFinite(C)?Math.PI/(2*u):2*Math.PI/(2*hC-1),S=C/f,M=isFinite(C)?1+Math.floor(3*S):hC;M>hC&&console.warn(`sigmaRadians, ${C}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${hC}`);const x=[];let K=0;for(let W=0;W<hC;++W){const j=W/S,QA=Math.exp(-j*j/2);x.push(QA),W===0?K+=QA:W<M&&(K+=2*QA)}for(let W=0;W<x.length;W++)x[W]=x[W]/K;D.envMap.value=A.texture,D.samples.value=M,D.weights.value=x,D.latitudinal.value=Q==="latitudinal",n&&(D.poleAxis.value=n);const{_lodMax:k}=this;D.dTheta.value=f,D.mipInt.value=k-t;const T=this._sizeLods[e];no(g,3*T*(e>k-EE?e-k+EE:0),4*(this._cubeSize-T),3*T,2*T),a.setRenderTarget(g),a.render(d,Gn)}}function fs(B,A,g){const t=new Ve(B,A,g);return t.texture.mapping=306,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function no(B,A,g,t,e){B.viewport.set(A,g,t,e),B.scissor.set(A,g,t,e)}function ps(){return new qg({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Un(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ys(){return new qg({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Un(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Un(){return`

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
	`}function Hl(B){let A=new WeakMap,g=null;function t(e){const C=e.target;C.removeEventListener("dispose",t);const Q=A.get(C);Q!==void 0&&(A.delete(C),Q.dispose())}return{get:function(e){if(e&&e.isTexture){const C=e.mapping,Q=C===303||C===304,n=C===301||C===302;if(Q||n){if(e.isRenderTargetTexture&&e.needsPMREMUpdate===!0){e.needsPMREMUpdate=!1;let a=A.get(e);return g===null&&(g=new Nn(B)),a=Q?g.fromEquirectangular(e,a):g.fromCubemap(e,a),A.set(e,a),a.texture}if(A.has(e))return A.get(e).texture;{const a=e.image;if(Q&&a&&a.height>0||n&&a&&function(s){let d=0;const D=6;for(let u=0;u<D;u++)s[u]!==void 0&&d++;return d===D}(a)){g===null&&(g=new Nn(B));const s=Q?g.fromEquirectangular(e):g.fromCubemap(e);return A.set(e,s),e.addEventListener("dispose",t),s.texture}return null}}}return e},dispose:function(){A=new WeakMap,g!==null&&(g.dispose(),g=null)}}}function ql(B){const A={};function g(t){if(A[t]!==void 0)return A[t];let e;switch(t){case"WEBGL_depth_texture":e=B.getExtension("WEBGL_depth_texture")||B.getExtension("MOZ_WEBGL_depth_texture")||B.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":e=B.getExtension("EXT_texture_filter_anisotropic")||B.getExtension("MOZ_EXT_texture_filter_anisotropic")||B.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":e=B.getExtension("WEBGL_compressed_texture_s3tc")||B.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":e=B.getExtension("WEBGL_compressed_texture_pvrtc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:e=B.getExtension(t)}return A[t]=e,e}return{has:function(t){return g(t)!==null},init:function(t){t.isWebGL2?g("EXT_color_buffer_float"):(g("WEBGL_depth_texture"),g("OES_texture_float"),g("OES_texture_half_float"),g("OES_texture_half_float_linear"),g("OES_standard_derivatives"),g("OES_element_index_uint"),g("OES_vertex_array_object"),g("ANGLE_instanced_arrays")),g("OES_texture_float_linear"),g("EXT_color_buffer_half_float"),g("WEBGL_multisampled_render_to_texture")},get:function(t){const e=g(t);return e===null&&console.warn("THREE.WebGLRenderer: "+t+" extension not supported."),e}}}function Tl(B,A,g,t){const e={},C=new WeakMap;function Q(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const D in s.attributes)A.remove(s.attributes[D]);s.removeEventListener("dispose",Q),delete e[s.id];const d=C.get(s);d&&(A.remove(d),C.delete(s)),t.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,g.memory.geometries--}function n(a){const s=[],d=a.index,D=a.attributes.position;let u=0;if(d!==null){const M=d.array;u=d.version;for(let x=0,K=M.length;x<K;x+=3){const k=M[x+0],T=M[x+1],W=M[x+2];s.push(k,T,T,W,W,k)}}else{const M=D.array;u=D.version;for(let x=0,K=M.length/3-1;x<K;x+=3){const k=x+0,T=x+1,W=x+2;s.push(k,T,T,W,W,k)}}const f=new(QB(s)?eE:WB)(s,1);f.version=u;const S=C.get(a);S&&A.remove(S),C.set(a,f)}return{get:function(a,s){return e[s.id]===!0||(s.addEventListener("dispose",Q),e[s.id]=!0,g.memory.geometries++),s},update:function(a){const s=a.attributes;for(const D in s)A.update(s[D],34962);const d=a.morphAttributes;for(const D in d){const u=d[D];for(let f=0,S=u.length;f<S;f++)A.update(u[f],34962)}},getWireframeAttribute:function(a){const s=C.get(a);if(s){const d=a.index;d!==null&&s.version<d.version&&n(a)}else n(a);return C.get(a)}}}function _l(B,A,g,t){const e=t.isWebGL2;let C,Q,n;this.setMode=function(a){C=a},this.setIndex=function(a){Q=a.type,n=a.bytesPerElement},this.render=function(a,s){B.drawElements(C,s,Q,a*n),g.update(s,C,1)},this.renderInstances=function(a,s,d){if(d===0)return;let D,u;if(e)D=B,u="drawElementsInstanced";else if(D=A.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",D===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");D[u](C,s,Q,a*n,d),g.update(s,C,d)}}function Wl(B){const A={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:A,programs:null,autoReset:!0,reset:function(){A.frame++,A.calls=0,A.triangles=0,A.points=0,A.lines=0},update:function(g,t,e){switch(A.calls++,t){case 4:A.triangles+=e*(g/3);break;case 1:A.lines+=e*(g/2);break;case 3:A.lines+=e*(g-1);break;case 2:A.lines+=e*g;break;case 0:A.points+=e*g;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",t)}}}}function Ol(B,A){return B[0]-A[0]}function Pl(B,A){return Math.abs(A[1])-Math.abs(B[1])}function Vl(B,A,g){const t={},e=new Float32Array(8),C=new WeakMap,Q=new nt,n=[];for(let a=0;a<8;a++)n[a]=[a,0];return{update:function(a,s,d){const D=a.morphTargetInfluences;if(A.isWebGL2===!0){const f=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,S=f!==void 0?f.length:0;let M=C.get(s);if(M===void 0||M.count!==S){let Dg=function(){Eg.dispose(),C.delete(s),s.removeEventListener("dispose",Dg)};var u=Dg;M!==void 0&&M.texture.dispose();const k=s.morphAttributes.position!==void 0,T=s.morphAttributes.normal!==void 0,W=s.morphAttributes.color!==void 0,j=s.morphAttributes.position||[],QA=s.morphAttributes.normal||[],pA=s.morphAttributes.color||[];let SA=0;k===!0&&(SA=1),T===!0&&(SA=2),W===!0&&(SA=3);let KA=s.attributes.position.count*SA,qA=1;KA>A.maxTextureSize&&(qA=Math.ceil(KA/A.maxTextureSize),KA=A.maxTextureSize);const RA=new Float32Array(KA*qA*4*S),Eg=new xB(RA,KA,qA,S);Eg.type=1015,Eg.needsUpdate=!0;const Mg=4*SA;for(let bg=0;bg<S;bg++){const Jg=j[bg],$g=QA[bg],AI=pA[bg],Tg=KA*qA*4*bg;for(let jA=0;jA<Jg.count;jA++){const sg=jA*Mg;k===!0&&(Q.fromBufferAttribute(Jg,jA),RA[Tg+sg+0]=Q.x,RA[Tg+sg+1]=Q.y,RA[Tg+sg+2]=Q.z,RA[Tg+sg+3]=0),T===!0&&(Q.fromBufferAttribute($g,jA),RA[Tg+sg+4]=Q.x,RA[Tg+sg+5]=Q.y,RA[Tg+sg+6]=Q.z,RA[Tg+sg+7]=0),W===!0&&(Q.fromBufferAttribute(AI,jA),RA[Tg+sg+8]=Q.x,RA[Tg+sg+9]=Q.y,RA[Tg+sg+10]=Q.z,RA[Tg+sg+11]=AI.itemSize===4?Q.w:1)}}M={count:S,texture:Eg,size:new pg(KA,qA)},C.set(s,M),s.addEventListener("dispose",Dg)}let x=0;for(let k=0;k<D.length;k++)x+=D[k];const K=s.morphTargetsRelative?1:1-x;d.getUniforms().setValue(B,"morphTargetBaseInfluence",K),d.getUniforms().setValue(B,"morphTargetInfluences",D),d.getUniforms().setValue(B,"morphTargetsTexture",M.texture,g),d.getUniforms().setValue(B,"morphTargetsTextureSize",M.size)}else{const f=D===void 0?0:D.length;let S=t[s.id];if(S===void 0||S.length!==f){S=[];for(let T=0;T<f;T++)S[T]=[T,0];t[s.id]=S}for(let T=0;T<f;T++){const W=S[T];W[0]=T,W[1]=D[T]}S.sort(Pl);for(let T=0;T<8;T++)T<f&&S[T][1]?(n[T][0]=S[T][0],n[T][1]=S[T][1]):(n[T][0]=Number.MAX_SAFE_INTEGER,n[T][1]=0);n.sort(Ol);const M=s.morphAttributes.position,x=s.morphAttributes.normal;let K=0;for(let T=0;T<8;T++){const W=n[T],j=W[0],QA=W[1];j!==Number.MAX_SAFE_INTEGER&&QA?(M&&s.getAttribute("morphTarget"+T)!==M[j]&&s.setAttribute("morphTarget"+T,M[j]),x&&s.getAttribute("morphNormal"+T)!==x[j]&&s.setAttribute("morphNormal"+T,x[j]),e[T]=QA,K+=QA):(M&&s.hasAttribute("morphTarget"+T)===!0&&s.deleteAttribute("morphTarget"+T),x&&s.hasAttribute("morphNormal"+T)===!0&&s.deleteAttribute("morphNormal"+T),e[T]=0)}const k=s.morphTargetsRelative?1:1-K;d.getUniforms().setValue(B,"morphTargetBaseInfluence",k),d.getUniforms().setValue(B,"morphTargetInfluences",e)}}}}function Zl(B,A,g,t){let e=new WeakMap;function C(Q){const n=Q.target;n.removeEventListener("dispose",C),g.remove(n.instanceMatrix),n.instanceColor!==null&&g.remove(n.instanceColor)}return{update:function(Q){const n=t.render.frame,a=Q.geometry,s=A.get(Q,a);return e.get(s)!==n&&(A.update(s),e.set(s,n)),Q.isInstancedMesh&&(Q.hasEventListener("dispose",C)===!1&&Q.addEventListener("dispose",C),g.update(Q.instanceMatrix,34962),Q.instanceColor!==null&&g.update(Q.instanceColor,34962)),s},dispose:function(){e=new WeakMap}}}const Ms=new Lt,ms=new xB,Rs=new QC,Ss=new nI,Gs=[],Fs=[],Ns=new Float32Array(16),Us=new Float32Array(9),ks=new Float32Array(4);function oE(B,A,g){const t=B[0];if(t<=0||t>0)return B;const e=A*g;let C=Gs[e];if(C===void 0&&(C=new Float32Array(e),Gs[e]=C),A!==0){t.toArray(C,0);for(let Q=1,n=0;Q!==A;++Q)n+=g,B[Q].toArray(C,n)}return C}function jt(B,A){if(B.length!==A.length)return!1;for(let g=0,t=B.length;g<t;g++)if(B[g]!==A[g])return!1;return!0}function $t(B,A){for(let g=0,t=A.length;g<t;g++)B[g]=A[g]}function ao(B,A){let g=Fs[A];g===void 0&&(g=new Int32Array(A),Fs[A]=g);for(let t=0;t!==A;++t)g[t]=B.allocateTextureUnit();return g}function Xl(B,A){const g=this.cache;g[0]!==A&&(B.uniform1f(this.addr,A),g[0]=A)}function zl(B,A){const g=this.cache;if(A.x!==void 0)g[0]===A.x&&g[1]===A.y||(B.uniform2f(this.addr,A.x,A.y),g[0]=A.x,g[1]=A.y);else{if(jt(g,A))return;B.uniform2fv(this.addr,A),$t(g,A)}}function jl(B,A){const g=this.cache;if(A.x!==void 0)g[0]===A.x&&g[1]===A.y&&g[2]===A.z||(B.uniform3f(this.addr,A.x,A.y,A.z),g[0]=A.x,g[1]=A.y,g[2]=A.z);else if(A.r!==void 0)g[0]===A.r&&g[1]===A.g&&g[2]===A.b||(B.uniform3f(this.addr,A.r,A.g,A.b),g[0]=A.r,g[1]=A.g,g[2]=A.b);else{if(jt(g,A))return;B.uniform3fv(this.addr,A),$t(g,A)}}function $l(B,A){const g=this.cache;if(A.x!==void 0)g[0]===A.x&&g[1]===A.y&&g[2]===A.z&&g[3]===A.w||(B.uniform4f(this.addr,A.x,A.y,A.z,A.w),g[0]=A.x,g[1]=A.y,g[2]=A.z,g[3]=A.w);else{if(jt(g,A))return;B.uniform4fv(this.addr,A),$t(g,A)}}function Ad(B,A){const g=this.cache,t=A.elements;if(t===void 0){if(jt(g,A))return;B.uniformMatrix2fv(this.addr,!1,A),$t(g,A)}else{if(jt(g,t))return;ks.set(t),B.uniformMatrix2fv(this.addr,!1,ks),$t(g,t)}}function gd(B,A){const g=this.cache,t=A.elements;if(t===void 0){if(jt(g,A))return;B.uniformMatrix3fv(this.addr,!1,A),$t(g,A)}else{if(jt(g,t))return;Us.set(t),B.uniformMatrix3fv(this.addr,!1,Us),$t(g,t)}}function Id(B,A){const g=this.cache,t=A.elements;if(t===void 0){if(jt(g,A))return;B.uniformMatrix4fv(this.addr,!1,A),$t(g,A)}else{if(jt(g,t))return;Ns.set(t),B.uniformMatrix4fv(this.addr,!1,Ns),$t(g,t)}}function td(B,A){const g=this.cache;g[0]!==A&&(B.uniform1i(this.addr,A),g[0]=A)}function ed(B,A){const g=this.cache;if(A.x!==void 0)g[0]===A.x&&g[1]===A.y||(B.uniform2i(this.addr,A.x,A.y),g[0]=A.x,g[1]=A.y);else{if(jt(g,A))return;B.uniform2iv(this.addr,A),$t(g,A)}}function id(B,A){const g=this.cache;if(A.x!==void 0)g[0]===A.x&&g[1]===A.y&&g[2]===A.z||(B.uniform3i(this.addr,A.x,A.y,A.z),g[0]=A.x,g[1]=A.y,g[2]=A.z);else{if(jt(g,A))return;B.uniform3iv(this.addr,A),$t(g,A)}}function Bd(B,A){const g=this.cache;if(A.x!==void 0)g[0]===A.x&&g[1]===A.y&&g[2]===A.z&&g[3]===A.w||(B.uniform4i(this.addr,A.x,A.y,A.z,A.w),g[0]=A.x,g[1]=A.y,g[2]=A.z,g[3]=A.w);else{if(jt(g,A))return;B.uniform4iv(this.addr,A),$t(g,A)}}function Cd(B,A){const g=this.cache;g[0]!==A&&(B.uniform1ui(this.addr,A),g[0]=A)}function Ed(B,A){const g=this.cache;if(A.x!==void 0)g[0]===A.x&&g[1]===A.y||(B.uniform2ui(this.addr,A.x,A.y),g[0]=A.x,g[1]=A.y);else{if(jt(g,A))return;B.uniform2uiv(this.addr,A),$t(g,A)}}function Qd(B,A){const g=this.cache;if(A.x!==void 0)g[0]===A.x&&g[1]===A.y&&g[2]===A.z||(B.uniform3ui(this.addr,A.x,A.y,A.z),g[0]=A.x,g[1]=A.y,g[2]=A.z);else{if(jt(g,A))return;B.uniform3uiv(this.addr,A),$t(g,A)}}function od(B,A){const g=this.cache;if(A.x!==void 0)g[0]===A.x&&g[1]===A.y&&g[2]===A.z&&g[3]===A.w||(B.uniform4ui(this.addr,A.x,A.y,A.z,A.w),g[0]=A.x,g[1]=A.y,g[2]=A.z,g[3]=A.w);else{if(jt(g,A))return;B.uniform4uiv(this.addr,A),$t(g,A)}}function nd(B,A,g){const t=this.cache,e=g.allocateTextureUnit();t[0]!==e&&(B.uniform1i(this.addr,e),t[0]=e),g.setTexture2D(A||Ms,e)}function ad(B,A,g){const t=this.cache,e=g.allocateTextureUnit();t[0]!==e&&(B.uniform1i(this.addr,e),t[0]=e),g.setTexture3D(A||Rs,e)}function sd(B,A,g){const t=this.cache,e=g.allocateTextureUnit();t[0]!==e&&(B.uniform1i(this.addr,e),t[0]=e),g.setTextureCube(A||Ss,e)}function rd(B,A,g){const t=this.cache,e=g.allocateTextureUnit();t[0]!==e&&(B.uniform1i(this.addr,e),t[0]=e),g.setTexture2DArray(A||ms,e)}function hd(B,A){B.uniform1fv(this.addr,A)}function cd(B,A){const g=oE(A,this.size,2);B.uniform2fv(this.addr,g)}function ld(B,A){const g=oE(A,this.size,3);B.uniform3fv(this.addr,g)}function dd(B,A){const g=oE(A,this.size,4);B.uniform4fv(this.addr,g)}function ud(B,A){const g=oE(A,this.size,4);B.uniformMatrix2fv(this.addr,!1,g)}function Dd(B,A){const g=oE(A,this.size,9);B.uniformMatrix3fv(this.addr,!1,g)}function wd(B,A){const g=oE(A,this.size,16);B.uniformMatrix4fv(this.addr,!1,g)}function fd(B,A){B.uniform1iv(this.addr,A)}function pd(B,A){B.uniform2iv(this.addr,A)}function yd(B,A){B.uniform3iv(this.addr,A)}function Md(B,A){B.uniform4iv(this.addr,A)}function md(B,A){B.uniform1uiv(this.addr,A)}function Rd(B,A){B.uniform2uiv(this.addr,A)}function Sd(B,A){B.uniform3uiv(this.addr,A)}function Gd(B,A){B.uniform4uiv(this.addr,A)}function Fd(B,A,g){const t=this.cache,e=A.length,C=ao(g,e);jt(t,C)||(B.uniform1iv(this.addr,C),$t(t,C));for(let Q=0;Q!==e;++Q)g.setTexture2D(A[Q]||Ms,C[Q])}function Nd(B,A,g){const t=this.cache,e=A.length,C=ao(g,e);jt(t,C)||(B.uniform1iv(this.addr,C),$t(t,C));for(let Q=0;Q!==e;++Q)g.setTexture3D(A[Q]||Rs,C[Q])}function Ud(B,A,g){const t=this.cache,e=A.length,C=ao(g,e);jt(t,C)||(B.uniform1iv(this.addr,C),$t(t,C));for(let Q=0;Q!==e;++Q)g.setTextureCube(A[Q]||Ss,C[Q])}function kd(B,A,g){const t=this.cache,e=A.length,C=ao(g,e);jt(t,C)||(B.uniform1iv(this.addr,C),$t(t,C));for(let Q=0;Q!==e;++Q)g.setTexture2DArray(A[Q]||ms,C[Q])}class Ld{constructor(A,g,t){this.id=A,this.addr=t,this.cache=[],this.setValue=function(e){switch(e){case 5126:return Xl;case 35664:return zl;case 35665:return jl;case 35666:return $l;case 35674:return Ad;case 35675:return gd;case 35676:return Id;case 5124:case 35670:return td;case 35667:case 35671:return ed;case 35668:case 35672:return id;case 35669:case 35673:return Bd;case 5125:return Cd;case 36294:return Ed;case 36295:return Qd;case 36296:return od;case 35678:case 36198:case 36298:case 36306:case 35682:return nd;case 35679:case 36299:case 36307:return ad;case 35680:case 36300:case 36308:case 36293:return sd;case 36289:case 36303:case 36311:case 36292:return rd}}(g.type)}}class xd{constructor(A,g,t){this.id=A,this.addr=t,this.cache=[],this.size=g.size,this.setValue=function(e){switch(e){case 5126:return hd;case 35664:return cd;case 35665:return ld;case 35666:return dd;case 35674:return ud;case 35675:return Dd;case 35676:return wd;case 5124:case 35670:return fd;case 35667:case 35671:return pd;case 35668:case 35672:return yd;case 35669:case 35673:return Md;case 5125:return md;case 36294:return Rd;case 36295:return Sd;case 36296:return Gd;case 35678:case 36198:case 36298:case 36306:case 35682:return Fd;case 35679:case 36299:case 36307:return Nd;case 35680:case 36300:case 36308:case 36293:return Ud;case 36289:case 36303:case 36311:case 36292:return kd}}(g.type)}}class Jd{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,g,t){const e=this.seq;for(let C=0,Q=e.length;C!==Q;++C){const n=e[C];n.setValue(A,g[n.id],t)}}}const kn=/(\w+)(\])?(\[|\.)?/g;function Ls(B,A){B.seq.push(A),B.map[A.id]=A}function bd(B,A,g){const t=B.name,e=t.length;for(kn.lastIndex=0;;){const C=kn.exec(t),Q=kn.lastIndex;let n=C[1];const a=C[2]==="]",s=C[3];if(a&&(n|=0),s===void 0||s==="["&&Q+2===e){Ls(g,s===void 0?new Ld(n,B,A):new xd(n,B,A));break}{let d=g.map[n];d===void 0&&(d=new Jd(n),Ls(g,d)),g=d}}}class so{constructor(A,g){this.seq=[],this.map={};const t=A.getProgramParameter(g,35718);for(let e=0;e<t;++e){const C=A.getActiveUniform(g,e);bd(C,A.getUniformLocation(g,C.name),this)}}setValue(A,g,t,e){const C=this.map[g];C!==void 0&&C.setValue(A,t,e)}setOptional(A,g,t){const e=g[t];e!==void 0&&this.setValue(A,t,e)}static upload(A,g,t,e){for(let C=0,Q=g.length;C!==Q;++C){const n=g[C],a=t[n.id];a.needsUpdate!==!1&&n.setValue(A,a.value,e)}}static seqWithValue(A,g){const t=[];for(let e=0,C=A.length;e!==C;++e){const Q=A[e];Q.id in g&&t.push(Q)}return t}}function xs(B,A,g){const t=B.createShader(A);return B.shaderSource(t,g),B.compileShader(t),t}let Kd=0;function Js(B,A,g){const t=B.getShaderParameter(A,35713),e=B.getShaderInfoLog(A).trim();if(t&&e==="")return"";const C=/ERROR: 0:(\d+)/.exec(e);if(C){const Q=parseInt(C[1]);return g.toUpperCase()+`

`+e+`

`+function(n,a){const s=n.split(`
`),d=[],D=Math.max(a-6,0),u=Math.min(a+6,s.length);for(let f=D;f<u;f++){const S=f+1;d.push(`${S===a?">":" "} ${S}: ${s[f]}`)}return d.join(`
`)}(B.getShaderSource(A),Q)}return e}function vd(B,A){const g=function(t){switch(t){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}(A);return"vec4 "+B+"( vec4 value ) { return LinearTo"+g[0]+g[1]+"; }"}function Yd(B,A){let g;switch(A){case 1:g="Linear";break;case 2:g="Reinhard";break;case 3:g="OptimizedCineon";break;case 4:g="ACESFilmic";break;case 5:g="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),g="Linear"}return"vec3 "+B+"( vec3 color ) { return "+g+"ToneMapping( color ); }"}function oQ(B){return B!==""}function bs(B,A){const g=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return B.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,g).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Ks(B,A){return B.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const Hd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ln(B){return B.replace(Hd,qd)}function qd(B,A){const g=PI[A];if(g===void 0)throw new Error("Can not resolve #include <"+A+">");return Ln(g)}const Td=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vs(B){return B.replace(Td,_d)}function _d(B,A,g,t){let e="";for(let C=parseInt(A);C<parseInt(g);C++)e+=t.replace(/\[\s*i\s*\]/g,"[ "+C+" ]").replace(/UNROLLED_LOOP_INDEX/g,C);return e}function Ys(B){let A="precision "+B.precision+` float;
precision `+B.precision+" int;";return B.precision==="highp"?A+=`
#define HIGH_PRECISION`:B.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:B.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function Wd(B,A,g,t){const e=B.getContext(),C=g.defines;let Q=g.vertexShader,n=g.fragmentShader;const a=function(SA){let KA="SHADOWMAP_TYPE_BASIC";return SA.shadowMapType===1?KA="SHADOWMAP_TYPE_PCF":SA.shadowMapType===2?KA="SHADOWMAP_TYPE_PCF_SOFT":SA.shadowMapType===3&&(KA="SHADOWMAP_TYPE_VSM"),KA}(g),s=function(SA){let KA="ENVMAP_TYPE_CUBE";if(SA.envMap)switch(SA.envMapMode){case 301:case 302:KA="ENVMAP_TYPE_CUBE";break;case 306:KA="ENVMAP_TYPE_CUBE_UV"}return KA}(g),d=function(SA){let KA="ENVMAP_MODE_REFLECTION";return SA.envMap&&SA.envMapMode===302&&(KA="ENVMAP_MODE_REFRACTION"),KA}(g),D=function(SA){let KA="ENVMAP_BLENDING_NONE";if(SA.envMap)switch(SA.combine){case 0:KA="ENVMAP_BLENDING_MULTIPLY";break;case 1:KA="ENVMAP_BLENDING_MIX";break;case 2:KA="ENVMAP_BLENDING_ADD"}return KA}(g),u=function(SA){const KA=SA.envMapCubeUVHeight;if(KA===null)return null;const qA=Math.log2(KA)-2,RA=1/KA;return{texelWidth:1/(3*Math.max(Math.pow(2,qA),112)),texelHeight:RA,maxMip:qA}}(g),f=g.isWebGL2?"":function(SA){return[SA.extensionDerivatives||SA.envMapCubeUVHeight||SA.bumpMap||SA.tangentSpaceNormalMap||SA.clearcoatNormalMap||SA.flatShading||SA.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(SA.extensionFragDepth||SA.logarithmicDepthBuffer)&&SA.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",SA.extensionDrawBuffers&&SA.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(SA.extensionShaderTextureLOD||SA.envMap||SA.transmission)&&SA.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(oQ).join(`
`)}(g),S=function(SA){const KA=[];for(const qA in SA){const RA=SA[qA];RA!==!1&&KA.push("#define "+qA+" "+RA)}return KA.join(`
`)}(C),M=e.createProgram();let x,K,k=g.glslVersion?"#version "+g.glslVersion+`
`:"";g.isRawShaderMaterial?(x=[S].filter(oQ).join(`
`),x.length>0&&(x+=`
`),K=[f,S].filter(oQ).join(`
`),K.length>0&&(K+=`
`)):(x=[Ys(g),"#define SHADER_NAME "+g.shaderName,S,g.instancing?"#define USE_INSTANCING":"",g.instancingColor?"#define USE_INSTANCING_COLOR":"",g.supportsVertexTextures?"#define VERTEX_TEXTURES":"",g.useFog&&g.fog?"#define USE_FOG":"",g.useFog&&g.fogExp2?"#define FOG_EXP2":"",g.map?"#define USE_MAP":"",g.envMap?"#define USE_ENVMAP":"",g.envMap?"#define "+d:"",g.lightMap?"#define USE_LIGHTMAP":"",g.aoMap?"#define USE_AOMAP":"",g.emissiveMap?"#define USE_EMISSIVEMAP":"",g.bumpMap?"#define USE_BUMPMAP":"",g.normalMap?"#define USE_NORMALMAP":"",g.normalMap&&g.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",g.normalMap&&g.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",g.clearcoatMap?"#define USE_CLEARCOATMAP":"",g.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",g.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",g.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",g.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",g.displacementMap&&g.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",g.specularMap?"#define USE_SPECULARMAP":"",g.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",g.specularColorMap?"#define USE_SPECULARCOLORMAP":"",g.roughnessMap?"#define USE_ROUGHNESSMAP":"",g.metalnessMap?"#define USE_METALNESSMAP":"",g.alphaMap?"#define USE_ALPHAMAP":"",g.transmission?"#define USE_TRANSMISSION":"",g.transmissionMap?"#define USE_TRANSMISSIONMAP":"",g.thicknessMap?"#define USE_THICKNESSMAP":"",g.sheenColorMap?"#define USE_SHEENCOLORMAP":"",g.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",g.vertexTangents?"#define USE_TANGENT":"",g.vertexColors?"#define USE_COLOR":"",g.vertexAlphas?"#define USE_COLOR_ALPHA":"",g.vertexUvs?"#define USE_UV":"",g.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",g.flatShading?"#define FLAT_SHADED":"",g.skinning?"#define USE_SKINNING":"",g.morphTargets?"#define USE_MORPHTARGETS":"",g.morphNormals&&g.flatShading===!1?"#define USE_MORPHNORMALS":"",g.morphColors&&g.isWebGL2?"#define USE_MORPHCOLORS":"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+g.morphTextureStride:"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_COUNT "+g.morphTargetsCount:"",g.doubleSided?"#define DOUBLE_SIDED":"",g.flipSided?"#define FLIP_SIDED":"",g.shadowMapEnabled?"#define USE_SHADOWMAP":"",g.shadowMapEnabled?"#define "+a:"",g.sizeAttenuation?"#define USE_SIZEATTENUATION":"",g.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",g.logarithmicDepthBuffer&&g.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oQ).join(`
`),K=[f,Ys(g),"#define SHADER_NAME "+g.shaderName,S,g.useFog&&g.fog?"#define USE_FOG":"",g.useFog&&g.fogExp2?"#define FOG_EXP2":"",g.map?"#define USE_MAP":"",g.matcap?"#define USE_MATCAP":"",g.envMap?"#define USE_ENVMAP":"",g.envMap?"#define "+s:"",g.envMap?"#define "+d:"",g.envMap?"#define "+D:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",g.lightMap?"#define USE_LIGHTMAP":"",g.aoMap?"#define USE_AOMAP":"",g.emissiveMap?"#define USE_EMISSIVEMAP":"",g.bumpMap?"#define USE_BUMPMAP":"",g.normalMap?"#define USE_NORMALMAP":"",g.normalMap&&g.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",g.normalMap&&g.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",g.clearcoat?"#define USE_CLEARCOAT":"",g.clearcoatMap?"#define USE_CLEARCOATMAP":"",g.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",g.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",g.iridescence?"#define USE_IRIDESCENCE":"",g.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",g.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",g.specularMap?"#define USE_SPECULARMAP":"",g.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",g.specularColorMap?"#define USE_SPECULARCOLORMAP":"",g.roughnessMap?"#define USE_ROUGHNESSMAP":"",g.metalnessMap?"#define USE_METALNESSMAP":"",g.alphaMap?"#define USE_ALPHAMAP":"",g.alphaTest?"#define USE_ALPHATEST":"",g.sheen?"#define USE_SHEEN":"",g.sheenColorMap?"#define USE_SHEENCOLORMAP":"",g.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",g.transmission?"#define USE_TRANSMISSION":"",g.transmissionMap?"#define USE_TRANSMISSIONMAP":"",g.thicknessMap?"#define USE_THICKNESSMAP":"",g.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",g.vertexTangents?"#define USE_TANGENT":"",g.vertexColors||g.instancingColor?"#define USE_COLOR":"",g.vertexAlphas?"#define USE_COLOR_ALPHA":"",g.vertexUvs?"#define USE_UV":"",g.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",g.gradientMap?"#define USE_GRADIENTMAP":"",g.flatShading?"#define FLAT_SHADED":"",g.doubleSided?"#define DOUBLE_SIDED":"",g.flipSided?"#define FLIP_SIDED":"",g.shadowMapEnabled?"#define USE_SHADOWMAP":"",g.shadowMapEnabled?"#define "+a:"",g.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",g.useLegacyLights?"#define LEGACY_LIGHTS":"",g.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",g.logarithmicDepthBuffer&&g.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",g.toneMapping!==0?"#define TONE_MAPPING":"",g.toneMapping!==0?PI.tonemapping_pars_fragment:"",g.toneMapping!==0?Yd("toneMapping",g.toneMapping):"",g.dithering?"#define DITHERING":"",g.opaque?"#define OPAQUE":"",PI.encodings_pars_fragment,vd("linearToOutputTexel",g.outputEncoding),g.useDepthPacking?"#define DEPTH_PACKING "+g.depthPacking:"",`
`].filter(oQ).join(`
`)),Q=Ln(Q),Q=bs(Q,g),Q=Ks(Q,g),n=Ln(n),n=bs(n,g),n=Ks(n,g),Q=vs(Q),n=vs(n),g.isWebGL2&&g.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,K=["#define varying in",g.glslVersion===yg?"":"layout(location = 0) out highp vec4 pc_fragColor;",g.glslVersion===yg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+K);const T=k+K+n,W=xs(e,35633,k+x+Q),j=xs(e,35632,T);if(e.attachShader(M,W),e.attachShader(M,j),g.index0AttributeName!==void 0?e.bindAttribLocation(M,0,g.index0AttributeName):g.morphTargets===!0&&e.bindAttribLocation(M,0,"position"),e.linkProgram(M),B.debug.checkShaderErrors){const SA=e.getProgramInfoLog(M).trim(),KA=e.getShaderInfoLog(W).trim(),qA=e.getShaderInfoLog(j).trim();let RA=!0,Eg=!0;if(e.getProgramParameter(M,35714)===!1){RA=!1;const Mg=Js(e,W,"vertex"),Dg=Js(e,j,"fragment");console.error("THREE.WebGLProgram: Shader Error "+e.getError()+" - VALIDATE_STATUS "+e.getProgramParameter(M,35715)+`

Program Info Log: `+SA+`
`+Mg+`
`+Dg)}else SA!==""?console.warn("THREE.WebGLProgram: Program Info Log:",SA):KA!==""&&qA!==""||(Eg=!1);Eg&&(this.diagnostics={runnable:RA,programLog:SA,vertexShader:{log:KA,prefix:x},fragmentShader:{log:qA,prefix:K}})}let QA,pA;return e.deleteShader(W),e.deleteShader(j),this.getUniforms=function(){return QA===void 0&&(QA=new so(e,M)),QA},this.getAttributes=function(){return pA===void 0&&(pA=function(SA,KA){const qA={},RA=SA.getProgramParameter(KA,35721);for(let Eg=0;Eg<RA;Eg++){const Mg=SA.getActiveAttrib(KA,Eg),Dg=Mg.name;let bg=1;Mg.type===35674&&(bg=2),Mg.type===35675&&(bg=3),Mg.type===35676&&(bg=4),qA[Dg]={type:Mg.type,location:SA.getAttribLocation(KA,Dg),locationSize:bg}}return qA}(e,M)),pA},this.destroy=function(){t.releaseStatesOfProgram(this),e.deleteProgram(M),this.program=void 0},this.name=g.shaderName,this.id=Kd++,this.cacheKey=A,this.usedTimes=1,this.program=M,this.vertexShader=W,this.fragmentShader=j,this}let Od=0;class Pd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const g=A.vertexShader,t=A.fragmentShader,e=this._getShaderStage(g),C=this._getShaderStage(t),Q=this._getShaderCacheForMaterial(A);return Q.has(e)===!1&&(Q.add(e),e.usedTimes++),Q.has(C)===!1&&(Q.add(C),C.usedTimes++),this}remove(A){const g=this.materialCache.get(A);for(const t of g)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const g=this.materialCache;let t=g.get(A);return t===void 0&&(t=new Set,g.set(A,t)),t}_getShaderStage(A){const g=this.shaderCache;let t=g.get(A);return t===void 0&&(t=new Vd(A),g.set(A,t)),t}}class Vd{constructor(A){this.id=Od++,this.code=A,this.usedTimes=0}}function Zd(B,A,g,t,e,C,Q){const n=new Zi,a=new Pd,s=[],d=e.isWebGL2,D=e.logarithmicDepthBuffer,u=e.vertexTextures;let f=e.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};return{getParameters:function(M,x,K,k,T){const W=k.fog,j=T.geometry,QA=M.isMeshStandardMaterial?k.environment:null,pA=(M.isMeshStandardMaterial?g:A).get(M.envMap||QA),SA=pA&&pA.mapping===306?pA.image.height:null,KA=S[M.type];M.precision!==null&&(f=e.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const qA=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,RA=qA!==void 0?qA.length:0;let Eg,Mg,Dg,bg,Jg=0;if(j.morphAttributes.position!==void 0&&(Jg=1),j.morphAttributes.normal!==void 0&&(Jg=2),j.morphAttributes.color!==void 0&&(Jg=3),KA){const sg=Si[KA];Eg=sg.vertexShader,Mg=sg.fragmentShader}else Eg=M.vertexShader,Mg=M.fragmentShader,a.update(M),Dg=a.getVertexShaderID(M),bg=a.getFragmentShaderID(M);const $g=B.getRenderTarget(),AI=M.alphaTest>0,Tg=M.clearcoat>0,jA=M.iridescence>0;return{isWebGL2:d,shaderID:KA,shaderName:M.type,vertexShader:Eg,fragmentShader:Mg,defines:M.defines,customVertexShaderID:Dg,customFragmentShaderID:bg,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,instancing:T.isInstancedMesh===!0,instancingColor:T.isInstancedMesh===!0&&T.instanceColor!==null,supportsVertexTextures:u,outputEncoding:$g===null?B.outputEncoding:$g.isXRRenderTarget===!0?$g.texture.encoding:3e3,map:!!M.map,matcap:!!M.matcap,envMap:!!pA,envMapMode:pA&&pA.mapping,envMapCubeUVHeight:SA,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===1,tangentSpaceNormalMap:M.normalMapType===0,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===3001,clearcoat:Tg,clearcoatMap:Tg&&!!M.clearcoatMap,clearcoatRoughnessMap:Tg&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:Tg&&!!M.clearcoatNormalMap,iridescence:jA,iridescenceMap:jA&&!!M.iridescenceMap,iridescenceThicknessMap:jA&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===1,alphaMap:!!M.alphaMap,alphaTest:AI,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!j.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUvs:!!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatMap||M.clearcoatRoughnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.displacementMap||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheenColorMap||M.sheenRoughnessMap),uvsVertexOnly:!(M.map||M.bumpMap||M.normalMap||M.specularMap||M.alphaMap||M.emissiveMap||M.roughnessMap||M.metalnessMap||M.clearcoatNormalMap||M.iridescenceMap||M.iridescenceThicknessMap||M.transmission>0||M.transmissionMap||M.thicknessMap||M.specularIntensityMap||M.specularColorMap||M.sheen>0||M.sheenColorMap||M.sheenRoughnessMap||!M.displacementMap),fog:!!W,useFog:M.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:D,skinning:T.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:RA,morphTextureStride:Jg,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numClippingPlanes:Q.numPlanes,numClipIntersection:Q.numIntersection,dithering:M.dithering,shadowMapEnabled:B.shadowMap.enabled&&K.length>0,shadowMapType:B.shadowMap.type,toneMapping:M.toneMapped?B.toneMapping:0,useLegacyLights:B.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===2,flipSided:M.side===1,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||t.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}},getProgramCacheKey:function(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const K in M.defines)x.push(K),x.push(M.defines[K]);return M.isRawShaderMaterial===!1&&(function(K,k){K.push(k.precision),K.push(k.outputEncoding),K.push(k.envMapMode),K.push(k.envMapCubeUVHeight),K.push(k.combine),K.push(k.vertexUvs),K.push(k.fogExp2),K.push(k.sizeAttenuation),K.push(k.morphTargetsCount),K.push(k.morphAttributeCount),K.push(k.numDirLights),K.push(k.numPointLights),K.push(k.numSpotLights),K.push(k.numSpotLightMaps),K.push(k.numHemiLights),K.push(k.numRectAreaLights),K.push(k.numDirLightShadows),K.push(k.numPointLightShadows),K.push(k.numSpotLightShadows),K.push(k.numSpotLightShadowsWithMaps),K.push(k.shadowMapType),K.push(k.toneMapping),K.push(k.numClippingPlanes),K.push(k.numClipIntersection),K.push(k.depthPacking)}(x,M),function(K,k){n.disableAll(),k.isWebGL2&&n.enable(0),k.supportsVertexTextures&&n.enable(1),k.instancing&&n.enable(2),k.instancingColor&&n.enable(3),k.map&&n.enable(4),k.matcap&&n.enable(5),k.envMap&&n.enable(6),k.lightMap&&n.enable(7),k.aoMap&&n.enable(8),k.emissiveMap&&n.enable(9),k.bumpMap&&n.enable(10),k.normalMap&&n.enable(11),k.objectSpaceNormalMap&&n.enable(12),k.tangentSpaceNormalMap&&n.enable(13),k.clearcoat&&n.enable(14),k.clearcoatMap&&n.enable(15),k.clearcoatRoughnessMap&&n.enable(16),k.clearcoatNormalMap&&n.enable(17),k.iridescence&&n.enable(18),k.iridescenceMap&&n.enable(19),k.iridescenceThicknessMap&&n.enable(20),k.displacementMap&&n.enable(21),k.specularMap&&n.enable(22),k.roughnessMap&&n.enable(23),k.metalnessMap&&n.enable(24),k.gradientMap&&n.enable(25),k.alphaMap&&n.enable(26),k.alphaTest&&n.enable(27),k.vertexColors&&n.enable(28),k.vertexAlphas&&n.enable(29),k.vertexUvs&&n.enable(30),k.vertexTangents&&n.enable(31),k.uvsVertexOnly&&n.enable(32),K.push(n.mask),n.disableAll(),k.fog&&n.enable(0),k.useFog&&n.enable(1),k.flatShading&&n.enable(2),k.logarithmicDepthBuffer&&n.enable(3),k.skinning&&n.enable(4),k.morphTargets&&n.enable(5),k.morphNormals&&n.enable(6),k.morphColors&&n.enable(7),k.premultipliedAlpha&&n.enable(8),k.shadowMapEnabled&&n.enable(9),k.useLegacyLights&&n.enable(10),k.doubleSided&&n.enable(11),k.flipSided&&n.enable(12),k.useDepthPacking&&n.enable(13),k.dithering&&n.enable(14),k.specularIntensityMap&&n.enable(15),k.specularColorMap&&n.enable(16),k.transmission&&n.enable(17),k.transmissionMap&&n.enable(18),k.thicknessMap&&n.enable(19),k.sheen&&n.enable(20),k.sheenColorMap&&n.enable(21),k.sheenRoughnessMap&&n.enable(22),k.decodeVideoTexture&&n.enable(23),k.opaque&&n.enable(24),K.push(n.mask)}(x,M),x.push(B.outputEncoding)),x.push(M.customProgramCacheKey),x.join()},getUniforms:function(M){const x=S[M.type];let K;if(x){const k=Si[x];K=Lg.clone(k.uniforms)}else K=M.uniforms;return K},acquireProgram:function(M,x){let K;for(let k=0,T=s.length;k<T;k++){const W=s[k];if(W.cacheKey===x){K=W,++K.usedTimes;break}}return K===void 0&&(K=new Wd(B,x,M,C),s.push(K)),K},releaseProgram:function(M){if(--M.usedTimes==0){const x=s.indexOf(M);s[x]=s[s.length-1],s.pop(),M.destroy()}},releaseShaderCache:function(M){a.remove(M)},programs:s,dispose:function(){a.dispose()}}}function Xd(){let B=new WeakMap;return{get:function(A){let g=B.get(A);return g===void 0&&(g={},B.set(A,g)),g},remove:function(A){B.delete(A)},update:function(A,g,t){B.get(A)[g]=t},dispose:function(){B=new WeakMap}}}function zd(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.material.id!==A.material.id?B.material.id-A.material.id:B.z!==A.z?B.z-A.z:B.id-A.id}function Hs(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.z!==A.z?A.z-B.z:B.id-A.id}function qs(){const B=[];let A=0;const g=[],t=[],e=[];function C(Q,n,a,s,d,D){let u=B[A];return u===void 0?(u={id:Q.id,object:Q,geometry:n,material:a,groupOrder:s,renderOrder:Q.renderOrder,z:d,group:D},B[A]=u):(u.id=Q.id,u.object=Q,u.geometry=n,u.material=a,u.groupOrder=s,u.renderOrder=Q.renderOrder,u.z=d,u.group=D),A++,u}return{opaque:g,transmissive:t,transparent:e,init:function(){A=0,g.length=0,t.length=0,e.length=0},push:function(Q,n,a,s,d,D){const u=C(Q,n,a,s,d,D);a.transmission>0?t.push(u):a.transparent===!0?e.push(u):g.push(u)},unshift:function(Q,n,a,s,d,D){const u=C(Q,n,a,s,d,D);a.transmission>0?t.unshift(u):a.transparent===!0?e.unshift(u):g.unshift(u)},finish:function(){for(let Q=A,n=B.length;Q<n;Q++){const a=B[Q];if(a.id===null)break;a.id=null,a.object=null,a.geometry=null,a.material=null,a.group=null}},sort:function(Q,n){g.length>1&&g.sort(Q||zd),t.length>1&&t.sort(n||Hs),e.length>1&&e.sort(n||Hs)}}}function jd(){let B=new WeakMap;return{get:function(A,g){const t=B.get(A);let e;return t===void 0?(e=new qs,B.set(A,[e])):g>=t.length?(e=new qs,t.push(e)):e=t[g],e},dispose:function(){B=new WeakMap}}}function $d(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let g;switch(A.type){case"DirectionalLight":g={direction:new iA,color:new CI};break;case"SpotLight":g={position:new iA,direction:new iA,color:new CI,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":g={position:new iA,color:new CI,distance:0,decay:0};break;case"HemisphereLight":g={direction:new iA,skyColor:new CI,groundColor:new CI};break;case"RectAreaLight":g={color:new CI,position:new iA,halfWidth:new iA,halfHeight:new iA}}return B[A.id]=g,g}}}let Au=0;function gu(B,A){return(A.castShadow?2:0)-(B.castShadow?2:0)+(A.map?1:0)-(B.map?1:0)}function Iu(B,A){const g=new $d,t=function(){const a={};return{get:function(s){if(a[s.id]!==void 0)return a[s.id];let d;switch(s.type){case"DirectionalLight":case"SpotLight":d={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pg};break;case"PointLight":d={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pg,shadowCameraNear:1,shadowCameraFar:1e3}}return a[s.id]=d,d}}}(),e={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let a=0;a<9;a++)e.probe.push(new iA);const C=new iA,Q=new bI,n=new bI;return{setup:function(a,s){let d=0,D=0,u=0;for(let KA=0;KA<9;KA++)e.probe[KA].set(0,0,0);let f=0,S=0,M=0,x=0,K=0,k=0,T=0,W=0,j=0,QA=0;a.sort(gu);const pA=s===!0?Math.PI:1;for(let KA=0,qA=a.length;KA<qA;KA++){const RA=a[KA],Eg=RA.color,Mg=RA.intensity,Dg=RA.distance,bg=RA.shadow&&RA.shadow.map?RA.shadow.map.texture:null;if(RA.isAmbientLight)d+=Eg.r*Mg*pA,D+=Eg.g*Mg*pA,u+=Eg.b*Mg*pA;else if(RA.isLightProbe)for(let Jg=0;Jg<9;Jg++)e.probe[Jg].addScaledVector(RA.sh.coefficients[Jg],Mg);else if(RA.isDirectionalLight){const Jg=g.get(RA);if(Jg.color.copy(RA.color).multiplyScalar(RA.intensity*pA),RA.castShadow){const $g=RA.shadow,AI=t.get(RA);AI.shadowBias=$g.bias,AI.shadowNormalBias=$g.normalBias,AI.shadowRadius=$g.radius,AI.shadowMapSize=$g.mapSize,e.directionalShadow[f]=AI,e.directionalShadowMap[f]=bg,e.directionalShadowMatrix[f]=RA.shadow.matrix,k++}e.directional[f]=Jg,f++}else if(RA.isSpotLight){const Jg=g.get(RA);Jg.position.setFromMatrixPosition(RA.matrixWorld),Jg.color.copy(Eg).multiplyScalar(Mg*pA),Jg.distance=Dg,Jg.coneCos=Math.cos(RA.angle),Jg.penumbraCos=Math.cos(RA.angle*(1-RA.penumbra)),Jg.decay=RA.decay,e.spot[M]=Jg;const $g=RA.shadow;if(RA.map&&(e.spotLightMap[j]=RA.map,j++,$g.updateMatrices(RA),RA.castShadow&&QA++),e.spotLightMatrix[M]=$g.matrix,RA.castShadow){const AI=t.get(RA);AI.shadowBias=$g.bias,AI.shadowNormalBias=$g.normalBias,AI.shadowRadius=$g.radius,AI.shadowMapSize=$g.mapSize,e.spotShadow[M]=AI,e.spotShadowMap[M]=bg,W++}M++}else if(RA.isRectAreaLight){const Jg=g.get(RA);Jg.color.copy(Eg).multiplyScalar(Mg),Jg.halfWidth.set(.5*RA.width,0,0),Jg.halfHeight.set(0,.5*RA.height,0),e.rectArea[x]=Jg,x++}else if(RA.isPointLight){const Jg=g.get(RA);if(Jg.color.copy(RA.color).multiplyScalar(RA.intensity*pA),Jg.distance=RA.distance,Jg.decay=RA.decay,RA.castShadow){const $g=RA.shadow,AI=t.get(RA);AI.shadowBias=$g.bias,AI.shadowNormalBias=$g.normalBias,AI.shadowRadius=$g.radius,AI.shadowMapSize=$g.mapSize,AI.shadowCameraNear=$g.camera.near,AI.shadowCameraFar=$g.camera.far,e.pointShadow[S]=AI,e.pointShadowMap[S]=bg,e.pointShadowMatrix[S]=RA.shadow.matrix,T++}e.point[S]=Jg,S++}else if(RA.isHemisphereLight){const Jg=g.get(RA);Jg.skyColor.copy(RA.color).multiplyScalar(Mg*pA),Jg.groundColor.copy(RA.groundColor).multiplyScalar(Mg*pA),e.hemi[K]=Jg,K++}}x>0&&(A.isWebGL2||B.has("OES_texture_float_linear")===!0?(e.rectAreaLTC1=zg.LTC_FLOAT_1,e.rectAreaLTC2=zg.LTC_FLOAT_2):B.has("OES_texture_half_float_linear")===!0?(e.rectAreaLTC1=zg.LTC_HALF_1,e.rectAreaLTC2=zg.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),e.ambient[0]=d,e.ambient[1]=D,e.ambient[2]=u;const SA=e.hash;SA.directionalLength===f&&SA.pointLength===S&&SA.spotLength===M&&SA.rectAreaLength===x&&SA.hemiLength===K&&SA.numDirectionalShadows===k&&SA.numPointShadows===T&&SA.numSpotShadows===W&&SA.numSpotMaps===j||(e.directional.length=f,e.spot.length=M,e.rectArea.length=x,e.point.length=S,e.hemi.length=K,e.directionalShadow.length=k,e.directionalShadowMap.length=k,e.pointShadow.length=T,e.pointShadowMap.length=T,e.spotShadow.length=W,e.spotShadowMap.length=W,e.directionalShadowMatrix.length=k,e.pointShadowMatrix.length=T,e.spotLightMatrix.length=W+j-QA,e.spotLightMap.length=j,e.numSpotLightShadowsWithMaps=QA,SA.directionalLength=f,SA.pointLength=S,SA.spotLength=M,SA.rectAreaLength=x,SA.hemiLength=K,SA.numDirectionalShadows=k,SA.numPointShadows=T,SA.numSpotShadows=W,SA.numSpotMaps=j,e.version=Au++)},setupView:function(a,s){let d=0,D=0,u=0,f=0,S=0;const M=s.matrixWorldInverse;for(let x=0,K=a.length;x<K;x++){const k=a[x];if(k.isDirectionalLight){const T=e.directional[d];T.direction.setFromMatrixPosition(k.matrixWorld),C.setFromMatrixPosition(k.target.matrixWorld),T.direction.sub(C),T.direction.transformDirection(M),d++}else if(k.isSpotLight){const T=e.spot[u];T.position.setFromMatrixPosition(k.matrixWorld),T.position.applyMatrix4(M),T.direction.setFromMatrixPosition(k.matrixWorld),C.setFromMatrixPosition(k.target.matrixWorld),T.direction.sub(C),T.direction.transformDirection(M),u++}else if(k.isRectAreaLight){const T=e.rectArea[f];T.position.setFromMatrixPosition(k.matrixWorld),T.position.applyMatrix4(M),n.identity(),Q.copy(k.matrixWorld),Q.premultiply(M),n.extractRotation(Q),T.halfWidth.set(.5*k.width,0,0),T.halfHeight.set(0,.5*k.height,0),T.halfWidth.applyMatrix4(n),T.halfHeight.applyMatrix4(n),f++}else if(k.isPointLight){const T=e.point[D];T.position.setFromMatrixPosition(k.matrixWorld),T.position.applyMatrix4(M),D++}else if(k.isHemisphereLight){const T=e.hemi[S];T.direction.setFromMatrixPosition(k.matrixWorld),T.direction.transformDirection(M),S++}}},state:e}}function Ts(B,A){const g=new Iu(B,A),t=[],e=[];return{init:function(){t.length=0,e.length=0},state:{lightsArray:t,shadowsArray:e,lights:g},setupLights:function(C){g.setup(t,C)},setupLightsView:function(C){g.setupView(t,C)},pushLight:function(C){t.push(C)},pushShadow:function(C){e.push(C)}}}function tu(B,A){let g=new WeakMap;return{get:function(t,e=0){const C=g.get(t);let Q;return C===void 0?(Q=new Ts(B,A),g.set(t,[Q])):e>=C.length?(Q=new Ts(B,A),C.push(Q)):Q=C[e],Q},dispose:function(){g=new WeakMap}}}class xn extends Be{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class Jn extends Be{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new iA,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.referencePosition.copy(A.referencePosition),this.nearDistance=A.nearDistance,this.farDistance=A.farDistance,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const eu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iu=`uniform sampler2D shadow_pass;
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
`):typeof readline=="function"&&(l=readline())!==null&&(l+=`
`);if(!l)return null;h.input=JB(l,!0)}return h.input.shift()},put_char:function(h,l){l===null||l===10?(At(QB(h.output,0)),h.output=[]):l!=0&&h.output.push(l)},fsync:function(h){h.output&&h.output.length>0&&(At(QB(h.output,0)),h.output=[])}},default_tty1_ops:{put_char:function(h,l){l===null||l===10?(rt(QB(h.output,0)),h.output=[]):l!=0&&h.output.push(l)},fsync:function(h){h.output&&h.output.length>0&&(rt(QB(h.output,0)),h.output=[])}}};function rB(h){aB()}var kI={ops_table:null,mount:function(h){return kI.createNode(null,"/",16895,0)},createNode:function(h,l,p,F){if(v.isBlkdev(p)||v.isFIFO(p))throw new v.ErrnoError(63);kI.ops_table||(kI.ops_table={dir:{node:{getattr:kI.node_ops.getattr,setattr:kI.node_ops.setattr,lookup:kI.node_ops.lookup,mknod:kI.node_ops.mknod,rename:kI.node_ops.rename,unlink:kI.node_ops.unlink,rmdir:kI.node_ops.rmdir,readdir:kI.node_ops.readdir,symlink:kI.node_ops.symlink},stream:{llseek:kI.stream_ops.llseek}},file:{node:{getattr:kI.node_ops.getattr,setattr:kI.node_ops.setattr},stream:{llseek:kI.stream_ops.llseek,read:kI.stream_ops.read,write:kI.stream_ops.write,allocate:kI.stream_ops.allocate,mmap:kI.stream_ops.mmap,msync:kI.stream_ops.msync}},link:{node:{getattr:kI.node_ops.getattr,setattr:kI.node_ops.setattr,readlink:kI.node_ops.readlink},stream:{}},chrdev:{node:{getattr:kI.node_ops.getattr,setattr:kI.node_ops.setattr},stream:v.chrdev_stream_ops}});var H=v.createNode(h,l,p,F);return v.isDir(H.mode)?(H.node_ops=kI.ops_table.dir.node,H.stream_ops=kI.ops_table.dir.stream,H.contents={}):v.isFile(H.mode)?(H.node_ops=kI.ops_table.file.node,H.stream_ops=kI.ops_table.file.stream,H.usedBytes=0,H.contents=null):v.isLink(H.mode)?(H.node_ops=kI.ops_table.link.node,H.stream_ops=kI.ops_table.link.stream):v.isChrdev(H.mode)&&(H.node_ops=kI.ops_table.chrdev.node,H.stream_ops=kI.ops_table.chrdev.stream),H.timestamp=Date.now(),h&&(h.contents[l]=H,h.timestamp=H.timestamp),H},getFileDataAsTypedArray:function(h){return h.contents?h.contents.subarray?h.contents.subarray(0,h.usedBytes):new Uint8Array(h.contents):new Uint8Array(0)},expandFileStorage:function(h,l){var p=h.contents?h.contents.length:0;if(!(p>=l)){l=Math.max(l,p*(p<1048576?2:1.125)>>>0),p!=0&&(l=Math.max(l,256));var F=h.contents;h.contents=new Uint8Array(l),h.usedBytes>0&&h.contents.set(F.subarray(0,h.usedBytes),0)}},resizeFileStorage:function(h,l){if(h.usedBytes!=l)if(l==0)h.contents=null,h.usedBytes=0;else{var p=h.contents;h.contents=new Uint8Array(l),p&&h.contents.set(p.subarray(0,Math.min(l,h.usedBytes))),h.usedBytes=l}},node_ops:{getattr:function(h){var l={};return l.dev=v.isChrdev(h.mode)?h.id:1,l.ino=h.id,l.mode=h.mode,l.nlink=1,l.uid=0,l.gid=0,l.rdev=h.rdev,v.isDir(h.mode)?l.size=4096:v.isFile(h.mode)?l.size=h.usedBytes:v.isLink(h.mode)?l.size=h.link.length:l.size=0,l.atime=new Date(h.timestamp),l.mtime=new Date(h.timestamp),l.ctime=new Date(h.timestamp),l.blksize=4096,l.blocks=Math.ceil(l.size/l.blksize),l},setattr:function(h,l){l.mode!==void 0&&(h.mode=l.mode),l.timestamp!==void 0&&(h.timestamp=l.timestamp),l.size!==void 0&&kI.resizeFileStorage(h,l.size)},lookup:function(h,l){throw v.genericErrors[44]},mknod:function(h,l,p,F){return kI.createNode(h,l,p,F)},rename:function(h,l,p){if(v.isDir(h.mode)){var F;try{F=v.lookupNode(l,p)}catch{}if(F)for(var H in F.contents)throw new v.ErrnoError(55)}delete h.parent.contents[h.name],h.parent.timestamp=Date.now(),h.name=p,l.contents[p]=h,l.timestamp=h.parent.timestamp,h.parent=l},unlink:function(h,l){delete h.contents[l],h.timestamp=Date.now()},rmdir:function(h,l){var p=v.lookupNode(h,l);for(var F in p.contents)throw new v.ErrnoError(55);delete h.contents[l],h.timestamp=Date.now()},readdir:function(h){var l=[".",".."];for(var p in h.contents)h.contents.hasOwnProperty(p)&&l.push(p);return l},symlink:function(h,l,p){var F=kI.createNode(h,l,41471,0);return F.link=p,F},readlink:function(h){if(!v.isLink(h.mode))throw new v.ErrnoError(28);return h.link}},stream_ops:{read:function(h,l,p,F,H){var z=h.node.contents;if(H>=h.node.usedBytes)return 0;var aA=Math.min(h.node.usedBytes-H,F);if(aA>8&&z.subarray)l.set(z.subarray(H,H+aA),p);else for(var rA=0;rA<aA;rA++)l[p+rA]=z[H+rA];return aA},write:function(h,l,p,F,H,z){if(l.buffer===Kt.buffer&&(z=!1),!F)return 0;var aA=h.node;if(aA.timestamp=Date.now(),l.subarray&&(!aA.contents||aA.contents.subarray)){if(z)return aA.contents=l.subarray(p,p+F),aA.usedBytes=F,F;if(aA.usedBytes===0&&H===0)return aA.contents=l.slice(p,p+F),aA.usedBytes=F,F;if(H+F<=aA.usedBytes)return aA.contents.set(l.subarray(p,p+F),H),F}if(kI.expandFileStorage(aA,H+F),aA.contents.subarray&&l.subarray)aA.contents.set(l.subarray(p,p+F),H);else for(var rA=0;rA<F;rA++)aA.contents[H+rA]=l[p+rA];return aA.usedBytes=Math.max(aA.usedBytes,H+F),F},llseek:function(h,l,p){var F=l;if(p===1?F+=h.position:p===2&&v.isFile(h.node.mode)&&(F+=h.node.usedBytes),F<0)throw new v.ErrnoError(28);return F},allocate:function(h,l,p){kI.expandFileStorage(h.node,l+p),h.node.usedBytes=Math.max(h.node.usedBytes,l+p)},mmap:function(h,l,p,F,H){if(!v.isFile(h.node.mode))throw new v.ErrnoError(43);var z,aA,rA=h.node.contents;if(2&H||rA.buffer!==Pe){if((p>0||p+l<rA.length)&&(rA=rA.subarray?rA.subarray(p,p+l):Array.prototype.slice.call(rA,p,p+l)),aA=!0,!(z=rB()))throw new v.ErrnoError(48);Kt.set(rA,z)}else aA=!1,z=rA.byteOffset;return{ptr:z,allocated:aA}},msync:function(h,l,p,F,H){if(!v.isFile(h.node.mode))throw new v.ErrnoError(43);return 2&H||kI.stream_ops.write(h,l,0,F,p,!1),0}}},v={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:function(h){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!(h=ce.resolve(v.cwd(),h)))return{path:"",node:null};if((l=Object.assign({follow_mount:!0,recurse_count:0},l)).recurse_count>8)throw new v.ErrnoError(32);for(var p=HI.normalizeArray(h.split("/").filter(function(PA){return!!PA}),!1),F=v.root,H="/",z=0;z<p.length;z++){var aA=z===p.length-1;if(aA&&l.parent)break;if(F=v.lookupNode(F,p[z]),H=HI.join2(H,p[z]),v.isMountpoint(F)&&(!aA||aA&&l.follow_mount)&&(F=F.mounted.root),!aA||l.follow)for(var rA=0;v.isLink(F.mode);){var bA=v.readlink(H);if(H=ce.resolve(HI.dirname(H),bA),F=v.lookupPath(H,{recurse_count:l.recurse_count+1}).node,rA++>40)throw new v.ErrnoError(32)}}return{path:H,node:F}},getPath:function(h){for(var l;;){if(v.isRoot(h)){var p=h.mount.mountpoint;return l?p[p.length-1]!=="/"?p+"/"+l:p+l:p}l=l?h.name+"/"+l:h.name,h=h.parent}},hashName:function(h,l){for(var p=0,F=0;F<l.length;F++)p=(p<<5)-p+l.charCodeAt(F)|0;return(h+p>>>0)%v.nameTable.length},hashAddNode:function(h){var l=v.hashName(h.parent.id,h.name);h.name_next=v.nameTable[l],v.nameTable[l]=h},hashRemoveNode:function(h){var l=v.hashName(h.parent.id,h.name);if(v.nameTable[l]===h)v.nameTable[l]=h.name_next;else for(var p=v.nameTable[l];p;){if(p.name_next===h){p.name_next=h.name_next;break}p=p.name_next}},lookupNode:function(h,l){var p=v.mayLookup(h);if(p)throw new v.ErrnoError(p,h);for(var F=v.hashName(h.id,l),H=v.nameTable[F];H;H=H.name_next){var z=H.name;if(H.parent.id===h.id&&z===l)return H}return v.lookup(h,l)},createNode:function(h,l,p,F){var H=new v.FSNode(h,l,p,F);return v.hashAddNode(H),H},destroyNode:function(h){v.hashRemoveNode(h)},isRoot:function(h){return h===h.parent},isMountpoint:function(h){return!!h.mounted},isFile:function(h){return(61440&h)==32768},isDir:function(h){return(61440&h)==16384},isLink:function(h){return(61440&h)==40960},isChrdev:function(h){return(61440&h)==8192},isBlkdev:function(h){return(61440&h)==24576},isFIFO:function(h){return(61440&h)==4096},isSocket:function(h){return(49152&h)==49152},flagModes:{r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},modeStringToFlags:function(h){var l=v.flagModes[h];if(l===void 0)throw new Error("Unknown file open mode: "+h);return l},flagsToPermissionString:function(h){var l=["r","w","rw"][3&h];return 512&h&&(l+="w"),l},nodePermissions:function(h,l){return v.ignorePermissions||(!l.includes("r")||292&h.mode)&&(!l.includes("w")||146&h.mode)&&(!l.includes("x")||73&h.mode)?0:2},mayLookup:function(h){return v.nodePermissions(h,"x")||(h.node_ops.lookup?0:2)},mayCreate:function(h,l){try{return v.lookupNode(h,l),20}catch{}return v.nodePermissions(h,"wx")},mayDelete:function(h,l,p){var F;try{F=v.lookupNode(h,l)}catch(z){return z.errno}var H=v.nodePermissions(h,"wx");if(H)return H;if(p){if(!v.isDir(F.mode))return 54;if(v.isRoot(F)||v.getPath(F)===v.cwd())return 10}else if(v.isDir(F.mode))return 31;return 0},mayOpen:function(h,l){return h?v.isLink(h.mode)?32:v.isDir(h.mode)&&(v.flagsToPermissionString(l)!=="r"||512&l)?31:v.nodePermissions(h,v.flagsToPermissionString(l)):44},MAX_OPEN_FDS:4096,nextfd:function(){for(var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:v.MAX_OPEN_FDS,p=h;p<=l;p++)if(!v.streams[p])return p;throw new v.ErrnoError(33)},getStream:function(h){return v.streams[h]},createStream:function(h,l,p){v.FSStream||(v.FSStream=function(){this.shared={}},v.FSStream.prototype={},Object.defineProperties(v.FSStream.prototype,{object:{get:function(){return this.node},set:function(H){this.node=H}},isRead:{get:function(){return(2097155&this.flags)!=1}},isWrite:{get:function(){return(2097155&this.flags)!=0}},isAppend:{get:function(){return 1024&this.flags}},flags:{get:function(){return this.shared.flags},set:function(H){this.shared.flags=H}},position:{get:function(){return this.shared.position},set:function(H){this.shared.position=H}}})),h=Object.assign(new v.FSStream,h);var F=v.nextfd(l,p);return h.fd=F,v.streams[F]=h,h},closeStream:function(h){v.streams[h]=null},chrdev_stream_ops:{open:function(h){var l=v.getDevice(h.node.rdev);h.stream_ops=l.stream_ops,h.stream_ops.open&&h.stream_ops.open(h)},llseek:function(){throw new v.ErrnoError(70)}},major:function(h){return h>>8},minor:function(h){return 255&h},makedev:function(h,l){return h<<8|l},registerDevice:function(h,l){v.devices[h]={stream_ops:l}},getDevice:function(h){return v.devices[h]},getMounts:function(h){for(var l=[],p=[h];p.length;){var F=p.pop();l.push(F),p.push.apply(p,F.mounts)}return l},syncfs:function(h,l){typeof h=="function"&&(l=h,h=!1),v.syncFSRequests++,v.syncFSRequests>1&&rt("warning: "+v.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");var p=v.getMounts(v.root.mount),F=0;function H(aA){return v.syncFSRequests--,l(aA)}function z(aA){if(aA)return z.errored?void 0:(z.errored=!0,H(aA));++F>=p.length&&H(null)}p.forEach(function(aA){if(!aA.type.syncfs)return z(null);aA.type.syncfs(aA,h,z)})},mount:function(h,l,p){var F,H=p==="/",z=!p;if(H&&v.root)throw new v.ErrnoError(10);if(!H&&!z){var aA=v.lookupPath(p,{follow_mount:!1});if(p=aA.path,F=aA.node,v.isMountpoint(F))throw new v.ErrnoError(10);if(!v.isDir(F.mode))throw new v.ErrnoError(54)}var rA={type:h,opts:l,mountpoint:p,mounts:[]},bA=h.mount(rA);return bA.mount=rA,rA.root=bA,H?v.root=bA:F&&(F.mounted=rA,F.mount&&F.mount.mounts.push(rA)),bA},unmount:function(h){var l=v.lookupPath(h,{follow_mount:!1});if(!v.isMountpoint(l.node))throw new v.ErrnoError(28);var p=l.node,F=p.mounted,H=v.getMounts(F);Object.keys(v.nameTable).forEach(function(aA){for(var rA=v.nameTable[aA];rA;){var bA=rA.name_next;H.includes(rA.mount)&&v.destroyNode(rA),rA=bA}}),p.mounted=null;var z=p.mount.mounts.indexOf(F);p.mount.mounts.splice(z,1)},lookup:function(h,l){return h.node_ops.lookup(h,l)},mknod:function(h,l,p){var F=v.lookupPath(h,{parent:!0}).node,H=HI.basename(h);if(!H||H==="."||H==="..")throw new v.ErrnoError(28);var z=v.mayCreate(F,H);if(z)throw new v.ErrnoError(z);if(!F.node_ops.mknod)throw new v.ErrnoError(63);return F.node_ops.mknod(F,H,l,p)},create:function(h,l){return l=l!==void 0?l:438,l&=4095,l|=32768,v.mknod(h,l,0)},mkdir:function(h,l){return l=l!==void 0?l:511,l&=1023,l|=16384,v.mknod(h,l,0)},mkdirTree:function(h,l){for(var p=h.split("/"),F="",H=0;H<p.length;++H)if(p[H]){F+="/"+p[H];try{v.mkdir(F,l)}catch(z){if(z.errno!=20)throw z}}},mkdev:function(h,l,p){return p===void 0&&(p=l,l=438),l|=8192,v.mknod(h,l,p)},symlink:function(h,l){if(!ce.resolve(h))throw new v.ErrnoError(44);var p=v.lookupPath(l,{parent:!0}).node;if(!p)throw new v.ErrnoError(44);var F=HI.basename(l),H=v.mayCreate(p,F);if(H)throw new v.ErrnoError(H);if(!p.node_ops.symlink)throw new v.ErrnoError(63);return p.node_ops.symlink(p,F,h)},rename:function(h,l){var p,F,H=HI.dirname(h),z=HI.dirname(l),aA=HI.basename(h),rA=HI.basename(l);if(p=v.lookupPath(h,{parent:!0}).node,F=v.lookupPath(l,{parent:!0}).node,!p||!F)throw new v.ErrnoError(44);if(p.mount!==F.mount)throw new v.ErrnoError(75);var bA,PA=v.lookupNode(p,aA),Sg=ce.relative(h,z);if(Sg.charAt(0)!==".")throw new v.ErrnoError(28);if((Sg=ce.relative(l,H)).charAt(0)!==".")throw new v.ErrnoError(55);try{bA=v.lookupNode(F,rA)}catch{}if(PA!==bA){var fg=v.isDir(PA.mode),tg=v.mayDelete(p,aA,fg);if(tg)throw new v.ErrnoError(tg);if(tg=bA?v.mayDelete(F,rA,fg):v.mayCreate(F,rA))throw new v.ErrnoError(tg);if(!p.node_ops.rename)throw new v.ErrnoError(63);if(v.isMountpoint(PA)||bA&&v.isMountpoint(bA))throw new v.ErrnoError(10);if(F!==p&&(tg=v.nodePermissions(p,"w")))throw new v.ErrnoError(tg);v.hashRemoveNode(PA);try{p.node_ops.rename(PA,F,rA)}catch(Lg){throw Lg}finally{v.hashAddNode(PA)}}},rmdir:function(h){var l=v.lookupPath(h,{parent:!0}).node,p=HI.basename(h),F=v.lookupNode(l,p),H=v.mayDelete(l,p,!0);if(H)throw new v.ErrnoError(H);if(!l.node_ops.rmdir)throw new v.ErrnoError(63);if(v.isMountpoint(F))throw new v.ErrnoError(10);l.node_ops.rmdir(l,p),v.destroyNode(F)},readdir:function(h){var l=v.lookupPath(h,{follow:!0}).node;if(!l.node_ops.readdir)throw new v.ErrnoError(54);return l.node_ops.readdir(l)},unlink:function(h){var l=v.lookupPath(h,{parent:!0}).node;if(!l)throw new v.ErrnoError(44);var p=HI.basename(h),F=v.lookupNode(l,p),H=v.mayDelete(l,p,!1);if(H)throw new v.ErrnoError(H);if(!l.node_ops.unlink)throw new v.ErrnoError(63);if(v.isMountpoint(F))throw new v.ErrnoError(10);l.node_ops.unlink(l,p),v.destroyNode(F)},readlink:function(h){var l=v.lookupPath(h).node;if(!l)throw new v.ErrnoError(44);if(!l.node_ops.readlink)throw new v.ErrnoError(28);return ce.resolve(v.getPath(l.parent),l.node_ops.readlink(l))},stat:function(h,l){var p=v.lookupPath(h,{follow:!l}).node;if(!p)throw new v.ErrnoError(44);if(!p.node_ops.getattr)throw new v.ErrnoError(63);return p.node_ops.getattr(p)},lstat:function(h){return v.stat(h,!0)},chmod:function(h,l,p){var F;if(!(F=typeof h=="string"?v.lookupPath(h,{follow:!p}).node:h).node_ops.setattr)throw new v.ErrnoError(63);F.node_ops.setattr(F,{mode:4095&l|-4096&F.mode,timestamp:Date.now()})},lchmod:function(h,l){v.chmod(h,l,!0)},fchmod:function(h,l){var p=v.getStream(h);if(!p)throw new v.ErrnoError(8);v.chmod(p.node,l)},chown:function(h,l,p,F){var H;if(!(H=typeof h=="string"?v.lookupPath(h,{follow:!F}).node:h).node_ops.setattr)throw new v.ErrnoError(63);H.node_ops.setattr(H,{timestamp:Date.now()})},lchown:function(h,l,p){v.chown(h,l,p,!0)},fchown:function(h,l,p){var F=v.getStream(h);if(!F)throw new v.ErrnoError(8);v.chown(F.node,l,p)},truncate:function(h,l){if(l<0)throw new v.ErrnoError(28);var p;if(!(p=typeof h=="string"?v.lookupPath(h,{follow:!0}).node:h).node_ops.setattr)throw new v.ErrnoError(63);if(v.isDir(p.mode))throw new v.ErrnoError(31);if(!v.isFile(p.mode))throw new v.ErrnoError(28);var F=v.nodePermissions(p,"w");if(F)throw new v.ErrnoError(F);p.node_ops.setattr(p,{size:l,timestamp:Date.now()})},ftruncate:function(h,l){var p=v.getStream(h);if(!p)throw new v.ErrnoError(8);if(!(2097155&p.flags))throw new v.ErrnoError(28);v.truncate(p.node,l)},utime:function(h,l,p){var F=v.lookupPath(h,{follow:!0}).node;F.node_ops.setattr(F,{timestamp:Math.max(l,p)})},open:function(h,l,p){if(h==="")throw new v.ErrnoError(44);var F;if(p=p===void 0?438:p,p=64&(l=typeof l=="string"?v.modeStringToFlags(l):l)?4095&p|32768:0,L(h)=="object")F=h;else{h=HI.normalize(h);try{F=v.lookupPath(h,{follow:!(131072&l)}).node}catch{}}var H=!1;if(64&l)if(F){if(128&l)throw new v.ErrnoError(20)}else F=v.mknod(h,p,0),H=!0;if(!F)throw new v.ErrnoError(44);if(v.isChrdev(F.mode)&&(l&=-513),65536&l&&!v.isDir(F.mode))throw new v.ErrnoError(54);if(!H){var z=v.mayOpen(F,l);if(z)throw new v.ErrnoError(z)}512&l&&!H&&v.truncate(F,0),l&=-131713;var aA=v.createStream({node:F,path:v.getPath(F),flags:l,seekable:!0,position:0,stream_ops:F.stream_ops,ungotten:[],error:!1});return aA.stream_ops.open&&aA.stream_ops.open(aA),!m.logReadFiles||1&l||(v.readFiles||(v.readFiles={}),h in v.readFiles||(v.readFiles[h]=1)),aA},close:function(h){if(v.isClosed(h))throw new v.ErrnoError(8);h.getdents&&(h.getdents=null);try{h.stream_ops.close&&h.stream_ops.close(h)}catch(l){throw l}finally{v.closeStream(h.fd)}h.fd=null},isClosed:function(h){return h.fd===null},llseek:function(h,l,p){if(v.isClosed(h))throw new v.ErrnoError(8);if(!h.seekable||!h.stream_ops.llseek)throw new v.ErrnoError(70);if(p!=0&&p!=1&&p!=2)throw new v.ErrnoError(28);return h.position=h.stream_ops.llseek(h,l,p),h.ungotten=[],h.position},read:function(h,l,p,F,H){if(F<0||H<0)throw new v.ErrnoError(28);if(v.isClosed(h))throw new v.ErrnoError(8);if((2097155&h.flags)==1)throw new v.ErrnoError(8);if(v.isDir(h.node.mode))throw new v.ErrnoError(31);if(!h.stream_ops.read)throw new v.ErrnoError(28);var z=H!==void 0;if(z){if(!h.seekable)throw new v.ErrnoError(70)}else H=h.position;var aA=h.stream_ops.read(h,l,p,F,H);return z||(h.position+=aA),aA},write:function(h,l,p,F,H,z){if(F<0||H<0)throw new v.ErrnoError(28);if(v.isClosed(h))throw new v.ErrnoError(8);if(!(2097155&h.flags))throw new v.ErrnoError(8);if(v.isDir(h.node.mode))throw new v.ErrnoError(31);if(!h.stream_ops.write)throw new v.ErrnoError(28);h.seekable&&1024&h.flags&&v.llseek(h,0,2);var aA=H!==void 0;if(aA){if(!h.seekable)throw new v.ErrnoError(70)}else H=h.position;var rA=h.stream_ops.write(h,l,p,F,H,z);return aA||(h.position+=rA),rA},allocate:function(h,l,p){if(v.isClosed(h))throw new v.ErrnoError(8);if(l<0||p<=0)throw new v.ErrnoError(28);if(!(2097155&h.flags))throw new v.ErrnoError(8);if(!v.isFile(h.node.mode)&&!v.isDir(h.node.mode))throw new v.ErrnoError(43);if(!h.stream_ops.allocate)throw new v.ErrnoError(138);h.stream_ops.allocate(h,l,p)},mmap:function(h,l,p,F,H){if(2&F&&!(2&H)&&(2097155&h.flags)!=2)throw new v.ErrnoError(2);if((2097155&h.flags)==1)throw new v.ErrnoError(2);if(!h.stream_ops.mmap)throw new v.ErrnoError(43);return h.stream_ops.mmap(h,l,p,F,H)},msync:function(h,l,p,F,H){return h&&h.stream_ops.msync?h.stream_ops.msync(h,l,p,F,H):0},munmap:function(h){return 0},ioctl:function(h,l,p){if(!h.stream_ops.ioctl)throw new v.ErrnoError(59);return h.stream_ops.ioctl(h,l,p)},readFile:function(h){var l,p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(p.flags=p.flags||0,p.encoding=p.encoding||"binary",p.encoding!=="utf8"&&p.encoding!=="binary")throw new Error('Invalid encoding type "'+p.encoding+'"');var F=v.open(h,p.flags),H=v.stat(h).size,z=new Uint8Array(H);return v.read(F,z,0,H,0),p.encoding==="utf8"?l=QB(z,0):p.encoding==="binary"&&(l=z),v.close(F),l},writeFile:function(h,l){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};p.flags=p.flags||577;var F=v.open(h,p.flags,p.mode);if(typeof l=="string"){var H=new Uint8Array(qi(l)+1),z=Di(l,H,0,H.length);v.write(F,H,0,z,void 0,p.canOwn)}else{if(!ArrayBuffer.isView(l))throw new Error("Unsupported data type");v.write(F,l,0,l.byteLength,void 0,p.canOwn)}v.close(F)},cwd:function(){return v.currentPath},chdir:function(h){var l=v.lookupPath(h,{follow:!0});if(l.node===null)throw new v.ErrnoError(44);if(!v.isDir(l.node.mode))throw new v.ErrnoError(54);var p=v.nodePermissions(l.node,"x");if(p)throw new v.ErrnoError(p);v.currentPath=l.path},createDefaultDirectories:function(){v.mkdir("/tmp"),v.mkdir("/home"),v.mkdir("/home/web_user")},createDefaultDevices:function(){v.mkdir("/dev"),v.registerDevice(v.makedev(1,3),{read:function(){return 0},write:function(l,p,F,H,z){return H}}),v.mkdev("/dev/null",v.makedev(1,3)),Je.register(v.makedev(5,0),Je.default_tty_ops),Je.register(v.makedev(6,0),Je.default_tty1_ops),v.mkdev("/dev/tty",v.makedev(5,0)),v.mkdev("/dev/tty1",v.makedev(6,0));var h=function(){if((typeof crypto>"u"?"undefined":L(crypto))=="object"&&typeof crypto.getRandomValues=="function"){var l=new Uint8Array(1);return function(){return crypto.getRandomValues(l),l[0]}}if(Wg)try{var p=J(654);return function(){return p.randomBytes(1)[0]}}catch{}return function(){return aB("randomDevice")}}();v.createDevice("/dev","random",h),v.createDevice("/dev","urandom",h),v.mkdir("/dev/shm"),v.mkdir("/dev/shm/tmp")},createSpecialDirectories:function(){v.mkdir("/proc");var h=v.mkdir("/proc/self");v.mkdir("/proc/self/fd"),v.mount({mount:function(){var l=v.createNode(h,"fd",16895,73);return l.node_ops={lookup:function(p,F){var H=+F,z=v.getStream(H);if(!z)throw new v.ErrnoError(8);var aA={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:function(){return z.path}}};return aA.parent=aA,aA}},l}},{},"/proc/self/fd")},createStandardStreams:function(){m.stdin?v.createDevice("/dev","stdin",m.stdin):v.symlink("/dev/tty","/dev/stdin"),m.stdout?v.createDevice("/dev","stdout",null,m.stdout):v.symlink("/dev/tty","/dev/stdout"),m.stderr?v.createDevice("/dev","stderr",null,m.stderr):v.symlink("/dev/tty1","/dev/stderr"),v.open("/dev/stdin",0),v.open("/dev/stdout",1),v.open("/dev/stderr",1)},ensureErrnoError:function(){v.ErrnoError||(v.ErrnoError=function(h,l){this.node=l,this.setErrno=function(p){this.errno=p},this.setErrno(h),this.message="FS error"},v.ErrnoError.prototype=new Error,v.ErrnoError.prototype.constructor=v.ErrnoError,[44].forEach(function(h){v.genericErrors[h]=new v.ErrnoError(h),v.genericErrors[h].stack="<generic error, no stack>"}))},staticInit:function(){v.ensureErrnoError(),v.nameTable=new Array(4096),v.mount(kI,{},"/"),v.createDefaultDirectories(),v.createDefaultDevices(),v.createSpecialDirectories(),v.filesystems={MEMFS:kI}},init:function(h,l,p){v.init.initialized=!0,v.ensureErrnoError(),m.stdin=h||m.stdin,m.stdout=l||m.stdout,m.stderr=p||m.stderr,v.createStandardStreams()},quit:function(){v.init.initialized=!1;for(var h=0;h<v.streams.length;h++){var l=v.streams[h];l&&v.close(l)}},getMode:function(h,l){var p=0;return h&&(p|=365),l&&(p|=146),p},findObject:function(h,l){var p=v.analyzePath(h,l);return p.exists?p.object:null},analyzePath:function(h,l){try{h=(F=v.lookupPath(h,{follow:!l})).path}catch{}var p={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var F=v.lookupPath(h,{parent:!0});p.parentExists=!0,p.parentPath=F.path,p.parentObject=F.node,p.name=HI.basename(h),F=v.lookupPath(h,{follow:!l}),p.exists=!0,p.path=F.path,p.object=F.node,p.name=F.node.name,p.isRoot=F.path==="/"}catch(H){p.error=H.errno}return p},createPath:function(h,l,p,F){h=typeof h=="string"?h:v.getPath(h);for(var H=l.split("/").reverse();H.length;){var z=H.pop();if(z){var aA=HI.join2(h,z);try{v.mkdir(aA)}catch{}h=aA}}return aA},createFile:function(h,l,p,F,H){var z=HI.join2(typeof h=="string"?h:v.getPath(h),l),aA=v.getMode(F,H);return v.create(z,aA)},createDataFile:function(h,l,p,F,H,z){var aA=l;h&&(h=typeof h=="string"?h:v.getPath(h),aA=l?HI.join2(h,l):h);var rA=v.getMode(F,H),bA=v.create(aA,rA);if(p){if(typeof p=="string"){for(var PA=new Array(p.length),Sg=0,fg=p.length;Sg<fg;++Sg)PA[Sg]=p.charCodeAt(Sg);p=PA}v.chmod(bA,146|rA);var tg=v.open(bA,577);v.write(tg,p,0,p.length,0,z),v.close(tg),v.chmod(bA,rA)}return bA},createDevice:function(h,l,p,F){var H=HI.join2(typeof h=="string"?h:v.getPath(h),l),z=v.getMode(!!p,!!F);v.createDevice.major||(v.createDevice.major=64);var aA=v.makedev(v.createDevice.major++,0);return v.registerDevice(aA,{open:function(rA){rA.seekable=!1},close:function(rA){F&&F.buffer&&F.buffer.length&&F(10)},read:function(rA,bA,PA,Sg,fg){for(var tg=0,Lg=0;Lg<Sg;Lg++){var qg;try{qg=p()}catch{throw new v.ErrnoError(29)}if(qg===void 0&&tg===0)throw new v.ErrnoError(6);if(qg==null)break;tg++,bA[PA+Lg]=qg}return tg&&(rA.node.timestamp=Date.now()),tg},write:function(rA,bA,PA,Sg,fg){for(var tg=0;tg<Sg;tg++)try{F(bA[PA+tg])}catch{throw new v.ErrnoError(29)}return Sg&&(rA.node.timestamp=Date.now()),tg}}),v.mkdev(H,z,aA)},forceLoadFile:function(h){if(h.isDevice||h.isFolder||h.link||h.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(!wA)throw new Error("Cannot load without read() or XMLHttpRequest.");try{h.contents=JB(wA(h.url),!0),h.usedBytes=h.contents.length}catch{throw new v.ErrnoError(29)}},createLazyFile:function(h,l,p,F,H){function z(){this.lengthKnown=!1,this.chunks=[]}if(z.prototype.get=function(fg){if(!(fg>this.length-1||fg<0)){var tg=fg%this.chunkSize,Lg=fg/this.chunkSize|0;return this.getter(Lg)[tg]}},z.prototype.setDataGetter=function(fg){this.getter=fg},z.prototype.cacheLength=function(){var fg=new XMLHttpRequest;if(fg.open("HEAD",p,!1),fg.send(null),!(fg.status>=200&&fg.status<300||fg.status===304))throw new Error("Couldn't load "+p+". Status: "+fg.status);var tg,Lg=Number(fg.getResponseHeader("Content-length")),qg=(tg=fg.getResponseHeader("Accept-Ranges"))&&tg==="bytes",$I=(tg=fg.getResponseHeader("Content-Encoding"))&&tg==="gzip",mI=1048576;qg||(mI=Lg);var OI=this;OI.setDataGetter(function(rg){var nI=rg*mI,Ft=(rg+1)*mI-1;if(Ft=Math.min(Ft,Lg-1),OI.chunks[rg]===void 0&&(OI.chunks[rg]=function(st,de){if(st>de)throw new Error("invalid range ("+st+", "+de+") or no bytes requested!");if(de>Lg-1)throw new Error("only "+Lg+" bytes available! programmer error!");var Zt=new XMLHttpRequest;if(Zt.open("GET",p,!1),Lg!==mI&&Zt.setRequestHeader("Range","bytes="+st+"-"+de),Zt.responseType="arraybuffer",Zt.overrideMimeType&&Zt.overrideMimeType("text/plain; charset=x-user-defined"),Zt.send(null),!(Zt.status>=200&&Zt.status<300||Zt.status===304))throw new Error("Couldn't load "+p+". Status: "+Zt.status);return Zt.response!==void 0?new Uint8Array(Zt.response||[]):JB(Zt.responseText||"",!0)}(nI,Ft)),OI.chunks[rg]===void 0)throw new Error("doXHR failed!");return OI.chunks[rg]}),!$I&&Lg||(mI=Lg=1,Lg=this.getter(0).length,mI=Lg,At("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=Lg,this._chunkSize=mI,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){if(!yg)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var aA=new z;Object.defineProperties(aA,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var rA={isDevice:!1,contents:aA}}else rA={isDevice:!1,url:p};var bA=v.createFile(h,l,rA,F,H);rA.contents?bA.contents=rA.contents:rA.url&&(bA.contents=null,bA.url=rA.url),Object.defineProperties(bA,{usedBytes:{get:function(){return this.contents.length}}});var PA={};function Sg(fg,tg,Lg,qg,$I){var mI=fg.node.contents;if($I>=mI.length)return 0;var OI=Math.min(mI.length-$I,qg);if(mI.slice)for(var rg=0;rg<OI;rg++)tg[Lg+rg]=mI[$I+rg];else for(rg=0;rg<OI;rg++)tg[Lg+rg]=mI.get($I+rg);return OI}return Object.keys(bA.stream_ops).forEach(function(fg){var tg=bA.stream_ops[fg];PA[fg]=function(){return v.forceLoadFile(bA),tg.apply(null,arguments)}}),PA.read=function(fg,tg,Lg,qg,$I){return v.forceLoadFile(bA),Sg(fg,tg,Lg,qg,$I)},PA.mmap=function(fg,tg,Lg,qg,$I){v.forceLoadFile(bA);var mI=rB();if(!mI)throw new v.ErrnoError(48);return Sg(fg,Kt,mI,tg,Lg),{ptr:mI,allocated:!0}},bA.stream_ops=PA,bA},createPreloadedFile:function(h,l,p,F,H,z,aA,rA,bA,PA){var Sg=l?ce.resolve(HI.join2(h,l)):h;function fg(tg){function Lg(qg){PA&&PA(),rA||v.createDataFile(h,l,qg,F,H,bA),z&&z(),gE()}Browser.handledByPreloadPlugin(tg,Sg,Lg,function(){aA&&aA(),gE()})||Lg(tg)}Qi(),typeof p=="string"?function(tg,Lg,qg,$I){var mI="al "+tg;FA(tg,function(OI){Tt(OI,'Loading data file "'+tg+'" failed (no arrayBuffer).'),fg(new Uint8Array(OI)),mI&&gE()},function(OI){if(!qg)throw'Loading data file "'+tg+'" failed.';qg()}),mI&&Qi()}(p,0,aA):fg(p)},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},DB_NAME:function(){return"EM_FS_"+window.location.pathname},DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(h,l,p){l=l||function(){},p=p||function(){};var F=v.indexedDB();try{var H=F.open(v.DB_NAME(),v.DB_VERSION)}catch(z){return p(z)}H.onupgradeneeded=function(){At("creating db"),H.result.createObjectStore(v.DB_STORE_NAME)},H.onsuccess=function(){var z=H.result.transaction([v.DB_STORE_NAME],"readwrite"),aA=z.objectStore(v.DB_STORE_NAME),rA=0,bA=0,PA=h.length;function Sg(){bA==0?l():p()}h.forEach(function(fg){var tg=aA.put(v.analyzePath(fg).object.contents,fg);tg.onsuccess=function(){++rA+bA==PA&&Sg()},tg.onerror=function(){bA++,rA+bA==PA&&Sg()}}),z.onerror=p},H.onerror=p},loadFilesFromDB:function(h,l,p){l=l||function(){},p=p||function(){};var F=v.indexedDB();try{var H=F.open(v.DB_NAME(),v.DB_VERSION)}catch(z){return p(z)}H.onupgradeneeded=p,H.onsuccess=function(){var z=H.result;try{var aA=z.transaction([v.DB_STORE_NAME],"readonly")}catch(tg){return void p(tg)}var rA=aA.objectStore(v.DB_STORE_NAME),bA=0,PA=0,Sg=h.length;function fg(){PA==0?l():p()}h.forEach(function(tg){var Lg=rA.get(tg);Lg.onsuccess=function(){v.analyzePath(tg).exists&&v.unlink(tg),v.createDataFile(HI.dirname(tg),HI.basename(tg),Lg.result,!0,!0,!0),++bA+PA==Sg&&fg()},Lg.onerror=function(){PA++,bA+PA==Sg&&fg()}}),aA.onerror=p},H.onerror=p}},ft={DEFAULT_POLLMASK:5,calculateAt:function(h,l,p){if(HI.isAbs(l))return l;var F;if(F=h===-100?v.cwd():ft.getStreamFromFD(h).path,l.length==0){if(!p)throw new v.ErrnoError(44);return F}return HI.join2(F,l)},doStat:function(h,l,p){try{var F=h(l)}catch(H){if(H&&H.node&&HI.normalize(l)!==HI.normalize(v.getPath(H.node)))return-54;throw H}return Kg[p>>2]=F.dev,Kg[p+8>>2]=F.ino,Kg[p+12>>2]=F.mode,gt[p+16>>2]=F.nlink,Kg[p+20>>2]=F.uid,Kg[p+24>>2]=F.gid,Kg[p+28>>2]=F.rdev,Gt=[F.size>>>0,(WI=F.size,+Math.abs(WI)>=1?WI>0?(0|Math.min(+Math.floor(WI/4294967296),4294967295))>>>0:~~+Math.ceil((WI-+(~~WI>>>0))/4294967296)>>>0:0)],Kg[p+40>>2]=Gt[0],Kg[p+44>>2]=Gt[1],Kg[p+48>>2]=4096,Kg[p+52>>2]=F.blocks,Gt=[Math.floor(F.atime.getTime()/1e3)>>>0,(WI=Math.floor(F.atime.getTime()/1e3),+Math.abs(WI)>=1?WI>0?(0|Math.min(+Math.floor(WI/4294967296),4294967295))>>>0:~~+Math.ceil((WI-+(~~WI>>>0))/4294967296)>>>0:0)],Kg[p+56>>2]=Gt[0],Kg[p+60>>2]=Gt[1],gt[p+64>>2]=0,Gt=[Math.floor(F.mtime.getTime()/1e3)>>>0,(WI=Math.floor(F.mtime.getTime()/1e3),+Math.abs(WI)>=1?WI>0?(0|Math.min(+Math.floor(WI/4294967296),4294967295))>>>0:~~+Math.ceil((WI-+(~~WI>>>0))/4294967296)>>>0:0)],Kg[p+72>>2]=Gt[0],Kg[p+76>>2]=Gt[1],gt[p+80>>2]=0,Gt=[Math.floor(F.ctime.getTime()/1e3)>>>0,(WI=Math.floor(F.ctime.getTime()/1e3),+Math.abs(WI)>=1?WI>0?(0|Math.min(+Math.floor(WI/4294967296),4294967295))>>>0:~~+Math.ceil((WI-+(~~WI>>>0))/4294967296)>>>0:0)],Kg[p+88>>2]=Gt[0],Kg[p+92>>2]=Gt[1],gt[p+96>>2]=0,Gt=[F.ino>>>0,(WI=F.ino,+Math.abs(WI)>=1?WI>0?(0|Math.min(+Math.floor(WI/4294967296),4294967295))>>>0:~~+Math.ceil((WI-+(~~WI>>>0))/4294967296)>>>0:0)],Kg[p+104>>2]=Gt[0],Kg[p+108>>2]=Gt[1],0},doMsync:function(h,l,p,F,H){var z=_t.slice(h,h+p);v.msync(l,z,H,p,F)},varargs:void 0,get:function(){return ft.varargs+=4,Kg[ft.varargs-4>>2]},getStr:function(h){return jC(h)},getStreamFromFD:function(h){var l=v.getStream(h);if(!l)throw new v.ErrnoError(8);return l}},oi={};function bB(h){for(;h.length;){var l=h.pop();h.pop()(l)}}function _i(h){return this.fromWireType(Kg[h>>2])}var wi={},Re={},KB={};function IQ(h){if(h===void 0)return"_unknown";var l=(h=h.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return l>=48&&l<=57?"_"+h:h}function hB(h,l){return h=IQ(h),new Function("body","return function "+h+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(l)}function oC(h,l){var p=hB(l,function(F){this.name=l,this.message=F;var H=new Error(F).stack;H!==void 0&&(this.stack=this.toString()+`
`+H.replace(/^Error(:[^\n]*)?\n/,""))});return p.prototype=Object.create(h.prototype),p.prototype.constructor=p,p.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},p}var Wi=void 0;function be(h){throw new Wi(h)}function ni(h,l,p){function F(rA){var bA=p(rA);bA.length!==h.length&&be("Mismatched type converter count");for(var PA=0;PA<h.length;++PA)Se(h[PA],bA[PA])}h.forEach(function(rA){KB[rA]=l});var H=new Array(l.length),z=[],aA=0;l.forEach(function(rA,bA){Re.hasOwnProperty(rA)?H[bA]=Re[rA]:(z.push(rA),wi.hasOwnProperty(rA)||(wi[rA]=[]),wi[rA].push(function(){H[bA]=Re[rA],++aA===z.length&&F(H)}))}),z.length===0&&F(H)}function vB(h){switch(h){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+h)}}var fi=void 0;function Vt(h){for(var l="",p=h;_t[p];)l+=fi[_t[p++]];return l}var pi=void 0;function It(h){throw new pi(h)}function Se(h,l){var p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!("argPackAdvance"in l))throw new TypeError("registerType registeredInstance requires argPackAdvance");var F=l.name;if(h||It('type "'+F+'" must have a positive integer typeid pointer'),Re.hasOwnProperty(h)){if(p.ignoreDuplicateRegistrations)return;It("Cannot register type '"+F+"' twice")}if(Re[h]=l,delete KB[h],wi.hasOwnProperty(h)){var H=wi[h];delete wi[h],H.forEach(function(z){return z()})}}function bI(h){It(h.$$.ptrType.registeredClass.name+" instance already deleted")}var Oi=!1;function Ke(h){}function to(h){h.count.value-=1,h.count.value===0&&function(l){l.smartPtr?l.smartPtrType.rawDestructor(l.smartPtr):l.ptrType.registeredClass.rawDestructor(l.ptr)}(h)}function eo(h,l,p){if(l===p)return h;if(p.baseClass===void 0)return null;var F=eo(h,l,p.baseClass);return F===null?null:p.downcast(F)}var yi={},Pi=[];function le(){for(;Pi.length;){var h=Pi.pop();h.$$.deleteScheduled=!1,h.delete()}}var YB=void 0,HB={};function Vi(h,l){return l.ptrType&&l.ptr||be("makeClassHandle requires ptr and ptrType"),!!l.smartPtrType!=!!l.smartPtr&&be("Both smartPtrType and smartPtr must be specified"),l.count={value:1},Zi(Object.create(h,{$$:{value:l}}))}function Zi(h){return typeof FinalizationRegistry>"u"?(Zi=function(l){return l},h):(Oi=new FinalizationRegistry(function(l){to(l.$$)}),Zi=function(l){var p=l.$$;if(p.smartPtr){var F={$$:p};Oi.register(l,F,l)}return l},Ke=function(l){return Oi.unregister(l)},Zi(h))}function Xi(){}function tQ(h,l,p){if(h[l].overloadTable===void 0){var F=h[l];h[l]=function(){return h[l].overloadTable.hasOwnProperty(arguments.length)||It("Function '"+p+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+h[l].overloadTable+")!"),h[l].overloadTable[arguments.length].apply(this,arguments)},h[l].overloadTable=[],h[l].overloadTable[F.argCount]=F}}function cB(h,l,p){m.hasOwnProperty(h)?((p===void 0||m[h].overloadTable!==void 0&&m[h].overloadTable[p]!==void 0)&&It("Cannot register public name '"+h+"' twice"),tQ(m,h,h),m.hasOwnProperty(p)&&It("Cannot register multiple overloads of a function with the same number of arguments ("+p+")!"),m[h].overloadTable[p]=l):(m[h]=l,p!==void 0&&(m[h].numArguments=p))}function Mi(h,l,p,F,H,z,aA,rA){this.name=h,this.constructor=l,this.instancePrototype=p,this.rawDestructor=F,this.baseClass=H,this.getActualType=z,this.upcast=aA,this.downcast=rA,this.pureVirtualFunctions=[]}function qB(h,l,p){for(;l!==p;)l.upcast||It("Expected null or instance of "+p.name+", got an instance of "+l.name),h=l.upcast(h),l=l.baseClass;return h}function nC(h,l){if(l===null)return this.isReference&&It("null is not a valid "+this.name),0;l.$$||It('Cannot pass "'+sC(l)+'" as a '+this.name),l.$$.ptr||It("Cannot pass deleted object as a pointer of type "+this.name);var p=l.$$.ptrType.registeredClass;return qB(l.$$.ptr,p,this.registeredClass)}function mn(h,l){var p;if(l===null)return this.isReference&&It("null is not a valid "+this.name),this.isSmartPointer?(p=this.rawConstructor(),h!==null&&h.push(this.rawDestructor,p),p):0;l.$$||It('Cannot pass "'+sC(l)+'" as a '+this.name),l.$$.ptr||It("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&l.$$.ptrType.isConst&&It("Cannot convert argument of type "+(l.$$.smartPtrType?l.$$.smartPtrType.name:l.$$.ptrType.name)+" to parameter type "+this.name);var F=l.$$.ptrType.registeredClass;if(p=qB(l.$$.ptr,F,this.registeredClass),this.isSmartPointer)switch(l.$$.smartPtr===void 0&&It("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:l.$$.smartPtrType===this?p=l.$$.smartPtr:It("Cannot convert argument of type "+(l.$$.smartPtrType?l.$$.smartPtrType.name:l.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:p=l.$$.smartPtr;break;case 2:if(l.$$.smartPtrType===this)p=l.$$.smartPtr;else{var H=l.clone();p=this.rawShare(p,TB.toHandle(function(){H.delete()})),h!==null&&h.push(this.rawDestructor,p)}break;default:It("Unsupporting sharing policy")}return p}function Rn(h,l){if(l===null)return this.isReference&&It("null is not a valid "+this.name),0;l.$$||It('Cannot pass "'+sC(l)+'" as a '+this.name),l.$$.ptr||It("Cannot pass deleted object as a pointer of type "+this.name),l.$$.ptrType.isConst&&It("Cannot convert argument of type "+l.$$.ptrType.name+" to parameter type "+this.name);var p=l.$$.ptrType.registeredClass;return qB(l.$$.ptr,p,this.registeredClass)}function ai(h,l,p,F,H,z,aA,rA,bA,PA,Sg){this.name=h,this.registeredClass=l,this.isReference=p,this.isConst=F,this.isSmartPointer=H,this.pointeeType=z,this.sharingPolicy=aA,this.rawGetPointee=rA,this.rawConstructor=bA,this.rawShare=PA,this.rawDestructor=Sg,H||l.baseClass!==void 0?this.toWireType=mn:F?(this.toWireType=nC,this.destructorFunction=null):(this.toWireType=Rn,this.destructorFunction=null)}function eQ(h,l,p){m.hasOwnProperty(h)||be("Replacing nonexistant public symbol"),m[h].overloadTable!==void 0&&p!==void 0?m[h].overloadTable[p]=l:(m[h]=l,m[h].argCount=p)}function si(h){return iA.get(h)}function Sn(h,l,p){return h.includes("j")?function(F,H,z){var aA=m["dynCall_"+F];return z&&z.length?aA.apply(null,[H].concat(z)):aA.call(null,H)}(h,l,p):si(l).apply(null,p)}function ve(h,l){var p,F,H,z=(h=Vt(h)).includes("j")?(p=h,F=l,H=[],function(){return H.length=0,Object.assign(H,arguments),Sn(p,F,H)}):si(l);return typeof z!="function"&&It("unknown function pointer with signature "+h+": "+l),z}var et=void 0;function Ye(h){var l=je(h),p=Vt(l);return LI(l),p}function He(h,l){var p=[],F={};throw l.forEach(function H(z){F[z]||Re[z]||(KB[z]?KB[z].forEach(H):(p.push(z),F[z]=!0))}),new et(h+": "+p.map(Ye).join([", "]))}function aC(h,l){for(var p=[],F=0;F<h;F++)p.push(gt[l+4*F>>2]);return p}function Ze(h,l,p,F,H){var z=l.length;z<2&&It("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var aA=l[1]!==null&&p!==null,rA=!1,bA=1;bA<l.length;++bA)if(l[bA]!==null&&l[bA].destructorFunction===void 0){rA=!0;break}var PA=l[0].name!=="void",Sg="",fg="";for(bA=0;bA<z-2;++bA)Sg+=(bA!==0?", ":"")+"arg"+bA,fg+=(bA!==0?", ":"")+"arg"+bA+"Wired";var tg="return function "+IQ(h)+"("+Sg+`) {
if (arguments.length !== `+(z-2)+`) {
throwBindingError('function `+h+" called with ' + arguments.length + ' arguments, expected "+(z-2)+` args!');
}
`;rA&&(tg+=`var destructors = [];
`);var Lg=rA?"destructors":"null",qg=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],$I=[It,F,H,bB,l[0],l[1]];for(aA&&(tg+="var thisWired = classParam.toWireType("+Lg+`, this);
`),bA=0;bA<z-2;++bA)tg+="var arg"+bA+"Wired = argType"+bA+".toWireType("+Lg+", arg"+bA+"); // "+l[bA+2].name+`
`,qg.push("argType"+bA),$I.push(l[bA+2]);if(aA&&(fg="thisWired"+(fg.length>0?", ":"")+fg),tg+=(PA?"var rv = ":"")+"invoker(fn"+(fg.length>0?", ":"")+fg+`);
`,rA)tg+=`runDestructors(destructors);
`;else for(bA=aA?1:2;bA<l.length;++bA){var mI=bA===1?"thisWired":"arg"+(bA-2)+"Wired";l[bA].destructorFunction!==null&&(tg+=mI+"_dtor("+mI+"); // "+l[bA].name+`
`,qg.push(mI+"_dtor"),$I.push(l[bA].destructorFunction))}return PA&&(tg+=`var ret = retType.fromWireType(rv);
return ret;
`),tg+=`}
`,qg.push(tg),function(OI,rg){if(!(OI instanceof Function))throw new TypeError("new_ called with constructor type "+L(OI)+" which is not a function");var nI=hB(OI.name||"unknownFunctionName",function(){});nI.prototype=OI.prototype;var Ft=new nI,st=OI.apply(Ft,rg);return st instanceof Object?st:Ft}(Function,qg).apply(null,$I)}var zi=[],ie=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function iQ(h){h>4&&--ie[h].refcount==0&&(ie[h]=void 0,zi.push(h))}var TB={toValue:function(h){return h||It("Cannot use deleted val. handle = "+h),ie[h].value},toHandle:function(h){switch(h){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var l=zi.length?zi.pop():ie.length;return ie[l]={refcount:1,value:h},l}}};function sC(h){if(h===null)return"null";var l=L(h);return l==="object"||l==="array"||l==="function"?h.toString():""+h}function BQ(h,l){switch(l){case 2:return function(p){return this.fromWireType(pg[p>>2])};case 3:return function(p){return this.fromWireType(Wt[p>>3])};default:throw new TypeError("Unknown float type: "+h)}}function qe(h,l,p){switch(l){case 0:return p?function(F){return Kt[F]}:function(F){return _t[F]};case 1:return p?function(F){return me[F>>1]}:function(F){return re[F>>1]};case 2:return p?function(F){return Kg[F>>2]}:function(F){return gt[F>>2]};default:throw new TypeError("Unknown integer type: "+h)}}var io=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function Be(h,l){for(var p=h,F=p>>1,H=F+l/2;!(F>=H)&&re[F];)++F;if((p=F<<1)-h>32&&io)return io.decode(_t.subarray(h,p));for(var z="",aA=0;!(aA>=l/2);++aA){var rA=me[h+2*aA>>1];if(rA==0)break;z+=String.fromCharCode(rA)}return z}function Bo(h,l,p){if(p===void 0&&(p=2147483647),p<2)return 0;for(var F=l,H=(p-=2)<2*h.length?p/2:h.length,z=0;z<H;++z){var aA=h.charCodeAt(z);me[l>>1]=aA,l+=2}return me[l>>1]=0,l-F}function Xe(h){return 2*h.length}function tE(h,l){for(var p=0,F="";!(p>=l/4);){var H=Kg[h+4*p>>2];if(H==0)break;if(++p,H>=65536){var z=H-65536;F+=String.fromCharCode(55296|z>>10,56320|1023&z)}else F+=String.fromCharCode(H)}return F}function CQ(h,l,p){if(p===void 0&&(p=2147483647),p<4)return 0;for(var F=l,H=F+p-4,z=0;z<h.length;++z){var aA=h.charCodeAt(z);if(aA>=55296&&aA<=57343&&(aA=65536+((1023&aA)<<10)|1023&h.charCodeAt(++z)),Kg[l>>2]=aA,(l+=4)+4>H)break}return Kg[l>>2]=0,l-F}function CI(h){for(var l=0,p=0;p<h.length;++p){var F=h.charCodeAt(p);F>=55296&&F<=57343&&++p,l+=4}return l}function zt(h){var l=qi(h)+1,p=xt(l);return p&&Di(h,Kt,p,l),p}var ri=[];function Yt(h){try{return ee.grow(h-Pe.byteLength+65535>>>16),he(ee.buffer),1}catch{}}var _B={};function Et(){if(!Et.strings){var h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:((typeof navigator>"u"?"undefined":L(navigator))=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:kA||"./this.program"};for(var l in _B)_B[l]===void 0?delete h[l]:h[l]=_B[l];var p=[];for(var l in h)p.push(l+"="+h[l]);Et.strings=p}return Et.strings}function WB(h){return h%4==0&&(h%100!=0||h%400==0)}var eE=[31,29,31,30,31,30,31,31,30,31,30,31],rI=[31,28,31,30,31,30,31,31,30,31,30,31];function Co(h,l,p,F){var H=Kg[F+40>>2],z={tm_sec:Kg[F>>2],tm_min:Kg[F+4>>2],tm_hour:Kg[F+8>>2],tm_mday:Kg[F+12>>2],tm_mon:Kg[F+16>>2],tm_year:Kg[F+20>>2],tm_wday:Kg[F+24>>2],tm_yday:Kg[F+28>>2],tm_isdst:Kg[F+32>>2],tm_gmtoff:Kg[F+36>>2],tm_zone:H?jC(H):""},aA=jC(p),rA={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var bA in rA)aA=aA.replace(new RegExp(bA,"g"),rA[bA]);var PA=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Sg=["January","February","March","April","May","June","July","August","September","October","November","December"];function fg(rg,nI,Ft){for(var st=typeof rg=="number"?rg.toString():rg||"";st.length<nI;)st=Ft[0]+st;return st}function tg(rg,nI){return fg(rg,nI,"0")}function Lg(rg,nI){function Ft(de){return de<0?-1:de>0?1:0}var st;return(st=Ft(rg.getFullYear()-nI.getFullYear()))===0&&(st=Ft(rg.getMonth()-nI.getMonth()))===0&&(st=Ft(rg.getDate()-nI.getDate())),st}function qg(rg){switch(rg.getDay()){case 0:return new Date(rg.getFullYear()-1,11,29);case 1:return rg;case 2:return new Date(rg.getFullYear(),0,3);case 3:return new Date(rg.getFullYear(),0,2);case 4:return new Date(rg.getFullYear(),0,1);case 5:return new Date(rg.getFullYear()-1,11,31);case 6:return new Date(rg.getFullYear()-1,11,30)}}function $I(rg){var nI=function(ji,Ri){for(var Ee=new Date(ji.getTime());Ri>0;){var iE=WB(Ee.getFullYear()),BE=Ee.getMonth(),Eo=(iE?eE:rI)[BE];if(!(Ri>Eo-Ee.getDate()))return Ee.setDate(Ee.getDate()+Ri),Ee;Ri-=Eo-Ee.getDate()+1,Ee.setDate(1),BE<11?Ee.setMonth(BE+1):(Ee.setMonth(0),Ee.setFullYear(Ee.getFullYear()+1))}return Ee}(new Date(rg.tm_year+1900,0,1),rg.tm_yday),Ft=new Date(nI.getFullYear(),0,4),st=new Date(nI.getFullYear()+1,0,4),de=qg(Ft),Zt=qg(st);return Lg(de,nI)<=0?Lg(Zt,nI)<=0?nI.getFullYear()+1:nI.getFullYear():nI.getFullYear()-1}var mI={"%a":function(rg){return PA[rg.tm_wday].substring(0,3)},"%A":function(rg){return PA[rg.tm_wday]},"%b":function(rg){return Sg[rg.tm_mon].substring(0,3)},"%B":function(rg){return Sg[rg.tm_mon]},"%C":function(rg){return tg((rg.tm_year+1900)/100|0,2)},"%d":function(rg){return tg(rg.tm_mday,2)},"%e":function(rg){return fg(rg.tm_mday,2," ")},"%g":function(rg){return $I(rg).toString().substring(2)},"%G":function(rg){return $I(rg)},"%H":function(rg){return tg(rg.tm_hour,2)},"%I":function(rg){var nI=rg.tm_hour;return nI==0?nI=12:nI>12&&(nI-=12),tg(nI,2)},"%j":function(rg){return tg(rg.tm_mday+function(nI,Ft){for(var st=0,de=0;de<=Ft;st+=nI[de++]);return st}(WB(rg.tm_year+1900)?eE:rI,rg.tm_mon-1),3)},"%m":function(rg){return tg(rg.tm_mon+1,2)},"%M":function(rg){return tg(rg.tm_min,2)},"%n":function(){return`
`},"%p":function(rg){return rg.tm_hour>=0&&rg.tm_hour<12?"AM":"PM"},"%S":function(rg){return tg(rg.tm_sec,2)},"%t":function(){return"	"},"%u":function(rg){return rg.tm_wday||7},"%U":function(rg){var nI=rg.tm_yday+7-rg.tm_wday;return tg(Math.floor(nI/7),2)},"%V":function(rg){var nI=Math.floor((rg.tm_yday+7-(rg.tm_wday+6)%7)/7);if((rg.tm_wday+371-rg.tm_yday-2)%7<=2&&nI++,nI){if(nI==53){var Ft=(rg.tm_wday+371-rg.tm_yday)%7;Ft==4||Ft==3&&WB(rg.tm_year)||(nI=1)}}else{nI=52;var st=(rg.tm_wday+7-rg.tm_yday-1)%7;(st==4||st==5&&WB(rg.tm_year%400-1))&&nI++}return tg(nI,2)},"%w":function(rg){return rg.tm_wday},"%W":function(rg){var nI=rg.tm_yday+7-(rg.tm_wday+6)%7;return tg(Math.floor(nI/7),2)},"%y":function(rg){return(rg.tm_year+1900).toString().substring(2)},"%Y":function(rg){return rg.tm_year+1900},"%z":function(rg){var nI=rg.tm_gmtoff,Ft=nI>=0;return nI=(nI=Math.abs(nI)/60)/60*100+nI%60,(Ft?"+":"-")+("0000"+nI).slice(-4)},"%Z":function(rg){return rg.tm_zone},"%%":function(){return"%"}};for(var bA in aA=aA.replace(/%%/g,"\0\0"),mI)aA.includes(bA)&&(aA=aA.replace(new RegExp(bA,"g"),mI[bA](z)));var OI=JB(aA=aA.replace(/\0\0/g,"%"),!1);return OI.length>l?0:(function(rg,nI){Kt.set(rg,nI)}(OI,h),OI.length-1)}var Ge=function(h,l,p,F){h||(h=this),this.parent=h,this.mount=h.mount,this.mounted=null,this.id=v.nextInode++,this.name=l,this.mode=p,this.node_ops={},this.stream_ops={},this.rdev=F};Object.defineProperties(Ge.prototype,{read:{get:function(){return(365&this.mode)==365},set:function(h){h?this.mode|=365:this.mode&=-366}},write:{get:function(){return(146&this.mode)==146},set:function(h){h?this.mode|=146:this.mode&=-147}},isFolder:{get:function(){return v.isDir(this.mode)}},isDevice:{get:function(){return v.isChrdev(this.mode)}}}),v.FSNode=Ge,v.staticInit(),Wi=m.InternalError=oC(Error,"InternalError"),function(){for(var h=new Array(256),l=0;l<256;++l)h[l]=String.fromCharCode(l);fi=h}(),pi=m.BindingError=oC(Error,"BindingError"),Xi.prototype.isAliasOf=function(h){if(!(this instanceof Xi)||!(h instanceof Xi))return!1;for(var l=this.$$.ptrType.registeredClass,p=this.$$.ptr,F=h.$$.ptrType.registeredClass,H=h.$$.ptr;l.baseClass;)p=l.upcast(p),l=l.baseClass;for(;F.baseClass;)H=F.upcast(H),F=F.baseClass;return l===F&&p===H},Xi.prototype.clone=function(){if(this.$$.ptr||bI(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var h,l=Zi(Object.create(Object.getPrototypeOf(this),{$$:{value:(h=this.$$,{count:h.count,deleteScheduled:h.deleteScheduled,preservePointerOnDelete:h.preservePointerOnDelete,ptr:h.ptr,ptrType:h.ptrType,smartPtr:h.smartPtr,smartPtrType:h.smartPtrType})}}));return l.$$.count.value+=1,l.$$.deleteScheduled=!1,l},Xi.prototype.delete=function(){this.$$.ptr||bI(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&It("Object already scheduled for deletion"),Ke(this),to(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},Xi.prototype.isDeleted=function(){return!this.$$.ptr},Xi.prototype.deleteLater=function(){return this.$$.ptr||bI(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&It("Object already scheduled for deletion"),Pi.push(this),Pi.length===1&&YB&&YB(le),this.$$.deleteScheduled=!0,this},m.getInheritedInstanceCount=function(){return Object.keys(HB).length},m.getLiveInheritedInstances=function(){var h=[];for(var l in HB)HB.hasOwnProperty(l)&&h.push(HB[l]);return h},m.flushPendingDeletes=le,m.setDelayFunction=function(h){YB=h,Pi.length&&YB&&YB(le)},ai.prototype.getPointee=function(h){return this.rawGetPointee&&(h=this.rawGetPointee(h)),h},ai.prototype.destructor=function(h){this.rawDestructor&&this.rawDestructor(h)},ai.prototype.argPackAdvance=8,ai.prototype.readValueFromPointer=_i,ai.prototype.deleteObject=function(h){h!==null&&h.delete()},ai.prototype.fromWireType=function(h){var l=this.getPointee(h);if(!l)return this.destructor(h),null;var p=function(PA,Sg){return Sg=function(fg,tg){for(tg===void 0&&It("ptr should not be undefined");fg.baseClass;)tg=fg.upcast(tg),fg=fg.baseClass;return tg}(PA,Sg),HB[Sg]}(this.registeredClass,l);if(p!==void 0){if(p.$$.count.value===0)return p.$$.ptr=l,p.$$.smartPtr=h,p.clone();var F=p.clone();return this.destructor(h),F}function H(){return this.isSmartPointer?Vi(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:l,smartPtrType:this,smartPtr:h}):Vi(this.registeredClass.instancePrototype,{ptrType:this,ptr:h})}var z,aA=this.registeredClass.getActualType(l),rA=yi[aA];if(!rA)return H.call(this);z=this.isConst?rA.constPointerType:rA.pointerType;var bA=eo(l,this.registeredClass,z.registeredClass);return bA===null?H.call(this):this.isSmartPointer?Vi(z.registeredClass.instancePrototype,{ptrType:z,ptr:bA,smartPtrType:this,smartPtr:h}):Vi(z.registeredClass.instancePrototype,{ptrType:z,ptr:bA})},et=m.UnboundTypeError=oC(Error,"UnboundTypeError"),m.count_emval_handles=function(){for(var h=0,l=5;l<ie.length;++l)ie[l]!==void 0&&++h;return h},m.get_first_emval=function(){for(var h=5;h<ie.length;++h)if(ie[h]!==void 0)return ie[h];return null};var EQ=typeof atob=="function"?atob:function(h){var l,p,F,H,z,aA,rA="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bA="",PA=0;h=h.replace(/[^A-Za-z0-9\+\/\=]/g,"");do l=rA.indexOf(h.charAt(PA++))<<2|(H=rA.indexOf(h.charAt(PA++)))>>4,p=(15&H)<<4|(z=rA.indexOf(h.charAt(PA++)))>>2,F=(3&z)<<6|(aA=rA.indexOf(h.charAt(PA++))),bA+=String.fromCharCode(l),z!==64&&(bA+=String.fromCharCode(p)),aA!==64&&(bA+=String.fromCharCode(F));while(PA<h.length);return bA};function ze(h){if(gQ(h))return function(l){if(typeof Wg=="boolean"&&Wg){var p=Buffer.from(l,"base64");return new Uint8Array(p.buffer,p.byteOffset,p.byteLength)}try{for(var F=EQ(l),H=new Uint8Array(F.length),z=0;z<F.length;++z)H[z]=F.charCodeAt(z);return H}catch{throw new Error("Converting base64 string to bytes failed.")}}(h.slice(IE.length))}var Ce,rC={g:function(h){return xt(h+24)+24},f:function(h,l,p){throw new sB(h).init(l,p),h},o:function(h,l,p){ft.varargs=p;try{var F=ft.getStreamFromFD(h);switch(l){case 0:return(H=ft.get())<0?-28:v.createStream(F,H).fd;case 1:case 2:case 6:case 7:return 0;case 3:return F.flags;case 4:var H=ft.get();return F.flags|=H,0;case 5:return H=ft.get(),me[H+0>>1]=2,0;case 16:case 8:default:return-28;case 9:return Kg[QQ()>>2]=28,-1}}catch(z){if(v===void 0||!(z instanceof v.ErrnoError))throw z;return-z.errno}},G:function(h,l,p){ft.varargs=p;try{var F=ft.getStreamFromFD(h);switch(l){case 21509:case 21505:case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:case 21523:case 21524:return F.tty?0:-59;case 21519:if(!F.tty)return-59;var H=ft.get();return Kg[H>>2]=0,0;case 21520:return F.tty?-28:-59;case 21531:return H=ft.get(),v.ioctl(F,l,H);default:return-28}}catch(z){if(v===void 0||!(z instanceof v.ErrnoError))throw z;return-z.errno}},H:function(h,l,p,F){ft.varargs=F;try{l=ft.getStr(l),l=ft.calculateAt(h,l);var H=F?ft.get():0;return v.open(l,p,H).fd}catch(z){if(v===void 0||!(z instanceof v.ErrnoError))throw z;return-z.errno}},R:function(h){var l=oi[h];delete oi[h];var p=l.rawConstructor,F=l.rawDestructor,H=l.fields;ni([h],H.map(function(z){return z.getterReturnType}).concat(H.map(function(z){return z.setterArgumentType})),function(z){var aA={};return H.forEach(function(rA,bA){var PA=rA.fieldName,Sg=z[bA],fg=rA.getter,tg=rA.getterContext,Lg=z[bA+H.length],qg=rA.setter,$I=rA.setterContext;aA[PA]={read:function(mI){return Sg.fromWireType(fg(tg,mI))},write:function(mI,OI){var rg=[];qg($I,mI,Lg.toWireType(rg,OI)),bB(rg)}}}),[{name:l.name,fromWireType:function(rA){var bA={};for(var PA in aA)bA[PA]=aA[PA].read(rA);return F(rA),bA},toWireType:function(rA,bA){for(var PA in aA)if(!(PA in bA))throw new TypeError('Missing field:  "'+PA+'"');var Sg=p();for(PA in aA)aA[PA].write(Sg,bA[PA]);return rA!==null&&rA.push(F,Sg),Sg},argPackAdvance:8,readValueFromPointer:_i,destructorFunction:F}]})},y:function(h,l,p,F,H){},L:function(h,l,p,F,H){var z=vB(p);Se(h,{name:l=Vt(l),fromWireType:function(aA){return!!aA},toWireType:function(aA,rA){return rA?F:H},argPackAdvance:8,readValueFromPointer:function(aA){var rA;if(p===1)rA=Kt;else if(p===2)rA=me;else{if(p!==4)throw new TypeError("Unknown boolean type size: "+l);rA=Kg}return this.fromWireType(rA[aA>>z])},destructorFunction:null})},U:function(h,l,p,F,H,z,aA,rA,bA,PA,Sg,fg,tg){Sg=Vt(Sg),z=ve(H,z),rA&&(rA=ve(aA,rA)),PA&&(PA=ve(bA,PA)),tg=ve(fg,tg);var Lg=IQ(Sg);cB(Lg,function(){He("Cannot construct "+Sg+" due to unbound types",[F])}),ni([h,l,p],F?[F]:[],function(qg){var $I,mI;qg=qg[0],mI=F?($I=qg.registeredClass).instancePrototype:Xi.prototype;var OI=hB(Lg,function(){if(Object.getPrototypeOf(this)!==rg)throw new pi("Use 'new' to construct "+Sg);if(nI.constructor_body===void 0)throw new pi(Sg+" has no accessible constructor");var Zt=nI.constructor_body[arguments.length];if(Zt===void 0)throw new pi("Tried to invoke ctor of "+Sg+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(nI.constructor_body).toString()+") parameters instead!");return Zt.apply(this,arguments)}),rg=Object.create(mI,{constructor:{value:OI}});OI.prototype=rg;var nI=new Mi(Sg,OI,rg,tg,$I,z,rA,PA),Ft=new ai(Sg,nI,!0,!1,!1),st=new ai(Sg+"*",nI,!1,!1,!1),de=new ai(Sg+" const*",nI,!1,!0,!1);return yi[h]={pointerType:st,constPointerType:de},eQ(Lg,OI),[Ft,st,de]})},Q:function(h,l,p,F,H,z){Tt(l>0);var aA=aC(l,p);H=ve(F,H),ni([],[h],function(rA){var bA="constructor "+(rA=rA[0]).name;if(rA.registeredClass.constructor_body===void 0&&(rA.registeredClass.constructor_body=[]),rA.registeredClass.constructor_body[l-1]!==void 0)throw new pi("Cannot register multiple constructors with identical number of parameters ("+(l-1)+") for class '"+rA.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return rA.registeredClass.constructor_body[l-1]=function(){He("Cannot construct "+rA.name+" due to unbound types",aA)},ni([],aA,function(PA){return PA.splice(1,0,null),rA.registeredClass.constructor_body[l-1]=Ze(bA,PA,null,H,z),[]}),[]})},h:function(h,l,p,F,H,z,aA,rA){var bA=aC(p,F);l=Vt(l),z=ve(H,z),ni([],[h],function(PA){var Sg=(PA=PA[0]).name+"."+l;function fg(){He("Cannot call "+Sg+" due to unbound types",bA)}l.startsWith("@@")&&(l=Symbol[l.substring(2)]),rA&&PA.registeredClass.pureVirtualFunctions.push(l);var tg=PA.registeredClass.instancePrototype,Lg=tg[l];return Lg===void 0||Lg.overloadTable===void 0&&Lg.className!==PA.name&&Lg.argCount===p-2?(fg.argCount=p-2,fg.className=PA.name,tg[l]=fg):(tQ(tg,l,Sg),tg[l].overloadTable[p-2]=fg),ni([],bA,function(qg){var $I=Ze(Sg,qg,PA,z,aA);return tg[l].overloadTable===void 0?($I.argCount=p-2,tg[l]=$I):tg[l].overloadTable[p-2]=$I,[]}),[]})},s:function(h,l,p){h=Vt(h),ni([],[l],function(F){return F=F[0],m[h]=F.fromWireType(p),[]})},K:function(h,l){Se(h,{name:l=Vt(l),fromWireType:function(p){var F=TB.toValue(p);return iQ(p),F},toWireType:function(p,F){return TB.toHandle(F)},argPackAdvance:8,readValueFromPointer:_i,destructorFunction:null})},r:function(h,l,p){var F=vB(p);Se(h,{name:l=Vt(l),fromWireType:function(H){return H},toWireType:function(H,z){return z},argPackAdvance:8,readValueFromPointer:BQ(l,F),destructorFunction:null})},d:function(h,l,p,F,H,z){var aA=aC(l,p);h=Vt(h),H=ve(F,H),cB(h,function(){He("Cannot call "+h+" due to unbound types",aA)},l-1),ni([],aA,function(rA){var bA=[rA[0],null].concat(rA.slice(1));return eQ(h,Ze(h,bA,null,H,z),l-1),[]})},e:function(h,l,p,F,H){l=Vt(l);var z=vB(p),aA=function(PA){return PA};if(F===0){var rA=32-8*p;aA=function(PA){return PA<<rA>>>rA}}var bA=l.includes("unsigned");Se(h,{name:l,fromWireType:aA,toWireType:bA?function(PA,Sg){return this.name,Sg>>>0}:function(PA,Sg){return this.name,Sg},argPackAdvance:8,readValueFromPointer:qe(l,z,F!==0),destructorFunction:null})},c:function(h,l,p){var F=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][l];function H(z){var aA=gt,rA=aA[z>>=2],bA=aA[z+1];return new F(Pe,bA,rA)}Se(h,{name:p=Vt(p),fromWireType:H,argPackAdvance:8,readValueFromPointer:H},{ignoreDuplicateRegistrations:!0})},q:function(h,l){var p=(l=Vt(l))==="std::string";Se(h,{name:l,fromWireType:function(F){var H,z=gt[F>>2],aA=F+4;if(p)for(var rA=aA,bA=0;bA<=z;++bA){var PA=aA+bA;if(bA==z||_t[PA]==0){var Sg=jC(rA,PA-rA);H===void 0?H=Sg:(H+=String.fromCharCode(0),H+=Sg),rA=PA+1}}else{var fg=new Array(z);for(bA=0;bA<z;++bA)fg[bA]=String.fromCharCode(_t[aA+bA]);H=fg.join("")}return LI(F),H},toWireType:function(F,H){var z;H instanceof ArrayBuffer&&(H=new Uint8Array(H));var aA=typeof H=="string";aA||H instanceof Uint8Array||H instanceof Uint8ClampedArray||H instanceof Int8Array||It("Cannot pass non-string to std::string"),z=p&&aA?qi(H):H.length;var rA=xt(4+z+1),bA=rA+4;if(gt[rA>>2]=z,p&&aA)Di(H,_t,bA,z+1);else if(aA)for(var PA=0;PA<z;++PA){var Sg=H.charCodeAt(PA);Sg>255&&(LI(bA),It("String has UTF-16 code units that do not fit in 8 bits")),_t[bA+PA]=Sg}else for(PA=0;PA<z;++PA)_t[bA+PA]=H[PA];return F!==null&&F.push(LI,rA),rA},argPackAdvance:8,readValueFromPointer:_i,destructorFunction:function(F){LI(F)}})},l:function(h,l,p){var F,H,z,aA,rA;p=Vt(p),l===2?(F=Be,H=Bo,aA=Xe,z=function(){return re},rA=1):l===4&&(F=tE,H=CQ,aA=CI,z=function(){return gt},rA=2),Se(h,{name:p,fromWireType:function(bA){for(var PA,Sg=gt[bA>>2],fg=z(),tg=bA+4,Lg=0;Lg<=Sg;++Lg){var qg=bA+4+Lg*l;if(Lg==Sg||fg[qg>>rA]==0){var $I=F(tg,qg-tg);PA===void 0?PA=$I:(PA+=String.fromCharCode(0),PA+=$I),tg=qg+l}}return LI(bA),PA},toWireType:function(bA,PA){typeof PA!="string"&&It("Cannot pass non-string to C++ string type "+p);var Sg=aA(PA),fg=xt(4+Sg+l);return gt[fg>>2]=Sg>>rA,H(PA,fg+4,Sg+l),bA!==null&&bA.push(LI,fg),fg},argPackAdvance:8,readValueFromPointer:_i,destructorFunction:function(bA){LI(bA)}})},T:function(h,l,p,F,H,z){oi[h]={name:Vt(l),rawConstructor:ve(p,F),rawDestructor:ve(H,z),fields:[]}},S:function(h,l,p,F,H,z,aA,rA,bA,PA){oi[h].fields.push({fieldName:Vt(l),getterReturnType:p,getter:ve(F,H),getterContext:z,setterArgumentType:aA,setter:ve(rA,bA),setterContext:PA})},M:function(h,l){Se(h,{isVoid:!0,name:l=Vt(l),argPackAdvance:0,fromWireType:function(){},toWireType:function(p,F){}})},p:function(){return Date.now()},A:function(){throw 1/0},O:iQ,P:function(h){h>4&&(ie[h].refcount+=1)},N:function(h,l){var p,F;(F=Re[p=h])===void 0&&It("_emval_take_value has unknown type "+Ye(p));var H=(h=F).readValueFromPointer(l);return TB.toHandle(H)},I:function(h,l){var p,F=new Date(1e3*(gt[(p=h)>>2]+4294967296*Kg[p+4>>2]));Kg[l>>2]=F.getSeconds(),Kg[l+4>>2]=F.getMinutes(),Kg[l+8>>2]=F.getHours(),Kg[l+12>>2]=F.getDate(),Kg[l+16>>2]=F.getMonth(),Kg[l+20>>2]=F.getFullYear()-1900,Kg[l+24>>2]=F.getDay();var H=new Date(F.getFullYear(),0,1),z=(F.getTime()-H.getTime())/864e5|0;Kg[l+28>>2]=z,Kg[l+36>>2]=-60*F.getTimezoneOffset();var aA=new Date(F.getFullYear(),6,1).getTimezoneOffset(),rA=H.getTimezoneOffset(),bA=0|(aA!=rA&&F.getTimezoneOffset()==Math.min(rA,aA));Kg[l+32>>2]=bA},J:function h(l,p,F){h.called||(h.called=!0,function(H,z,aA){var rA=new Date().getFullYear(),bA=new Date(rA,0,1),PA=new Date(rA,6,1),Sg=bA.getTimezoneOffset(),fg=PA.getTimezoneOffset(),tg=Math.max(Sg,fg);function Lg(rg){var nI=rg.toTimeString().match(/\(([A-Za-z ]+)\)$/);return nI?nI[1]:"GMT"}Kg[H>>2]=60*tg,Kg[z>>2]=+(Sg!=fg);var qg=Lg(bA),$I=Lg(PA),mI=zt(qg),OI=zt($I);fg<Sg?(gt[aA>>2]=mI,gt[aA+4>>2]=OI):(gt[aA>>2]=OI,gt[aA+4>>2]=mI)}(l,p,F))},a:function(){aB("")},i:function(h,l,p){var F=function(H,z){var aA;for(ri.length=0,z>>=2;aA=_t[H++];)z+=aA!=105&z,ri.push(aA==105?Kg[z]:Wt[z++>>1]),++z;return ri}(l,p);return Ve[h].apply(null,F)},B:function(h){var l=_t.length,p=2147483648;if((h>>>=0)>p)return!1;for(var F,H=1;H<=4;H*=2){var z=l*(1+.2/H);if(z=Math.min(z,h+100663296),Yt(Math.min(p,(F=Math.max(h,z))+(65536-F%65536)%65536)))return!0}return!1},C:function(h,l){var p=0;return Et().forEach(function(F,H){var z=l+p;gt[h+4*H>>2]=z,function(aA,rA,bA){for(var PA=0;PA<aA.length;++PA)Kt[rA++>>0]=aA.charCodeAt(PA);Kt[rA>>0]=0}(F,z),p+=F.length+1}),0},D:function(h,l){var p=Et();gt[h>>2]=p.length;var F=0;return p.forEach(function(H){F+=H.length+1}),gt[l>>2]=F,0},b:function(h,l){var p;p=h,AE()||(m.onExit&&m.onExit(p),ht=!0),Yg(p,new xB(p))},m:function(h){try{var l=ft.getStreamFromFD(h);return v.close(l),0}catch(p){if(v===void 0||!(p instanceof v.ErrnoError))throw p;return p.errno}},F:function(h,l,p,F){try{var H=function(z,aA,rA,bA){for(var PA=0,Sg=0;Sg<rA;Sg++){var fg=gt[aA>>2],tg=gt[aA+4>>2];aA+=8;var Lg=v.read(z,Kt,fg,tg,void 0);if(Lg<0)return-1;if(PA+=Lg,Lg<tg)break}return PA}(ft.getStreamFromFD(h),l,p);return gt[F>>2]=H,0}catch(z){if(v===void 0||!(z instanceof v.ErrnoError))throw z;return z.errno}},x:function(h,l,p,F,H){try{var z=(bA=p)+2097152>>>0<4194305-!!(rA=l)?(rA>>>0)+4294967296*bA:NaN;if(isNaN(z))return 61;var aA=ft.getStreamFromFD(h);return v.llseek(aA,z,F),Gt=[aA.position>>>0,(WI=aA.position,+Math.abs(WI)>=1?WI>0?(0|Math.min(+Math.floor(WI/4294967296),4294967295))>>>0:~~+Math.ceil((WI-+(~~WI>>>0))/4294967296)>>>0:0)],Kg[H>>2]=Gt[0],Kg[H+4>>2]=Gt[1],aA.getdents&&z===0&&F===0&&(aA.getdents=null),0}catch(PA){if(v===void 0||!(PA instanceof v.ErrnoError))throw PA;return PA.errno}var rA,bA},n:function(h,l,p,F){try{var H=function(z,aA,rA,bA){for(var PA=0,Sg=0;Sg<rA;Sg++){var fg=gt[aA>>2],tg=gt[aA+4>>2];aA+=8;var Lg=v.write(z,Kt,fg,tg,void 0);if(Lg<0)return-1;PA+=Lg}return PA}(ft.getStreamFromFD(h),l,p);return gt[F>>2]=H,0}catch(z){if(v===void 0||!(z instanceof v.ErrnoError))throw z;return z.errno}},t:function(h,l){var p=mi();try{return si(h)(l)}catch(F){if(Te(p),F!==F+0)throw F;$e(1,0)}},v:function(h,l,p){var F=mi();try{return si(h)(l,p)}catch(H){if(Te(F),H!==H+0)throw H;$e(1,0)}},u:function(h,l,p,F){var H=mi();try{return si(h)(l,p,F)}catch(z){if(Te(H),z!==z+0)throw z;$e(1,0)}},j:function(h,l){var p=mi();try{si(h)(l)}catch(F){if(Te(p),F!==F+0)throw F;$e(1,0)}},w:function(h,l,p){var F=mi();try{si(h)(l,p)}catch(H){if(Te(F),H!==H+0)throw H;$e(1,0)}},E:function(h,l,p,F){var H=mi();try{si(h)(l,p,F)}catch(z){if(Te(H),z!==z+0)throw z;$e(1,0)}},k:function(h,l,p,F,H){var z=mi();try{si(h)(l,p,F,H)}catch(aA){if(Te(z),aA!==aA+0)throw aA;$e(1,0)}},V:Co,z:function(h,l,p,F){return Co(h,l,p,F)}},xt=(function(){var h={a:rC};function l(H,z){var aA,rA=H.exports;m.asm=rA,he((ee=m.asm.W).buffer),iA=m.asm.$,aA=m.asm.X,AQ.unshift(aA),gE()}function p(H){l(H.instance)}function F(H){return function(){if(!fI&&(Xg||yg)){if(typeof fetch=="function"&&!Lt(ct))return fetch(ct,{credentials:"same-origin"}).then(function(z){if(!z.ok)throw"failed to load wasm binary file at '"+ct+"'";return z.arrayBuffer()}).catch(function(){return nt(ct)});if(FA)return new Promise(function(z,aA){FA(ct,function(rA){z(new Uint8Array(rA))},aA)})}return Promise.resolve().then(function(){return nt(ct)})}().then(function(z){return WebAssembly.instantiate(z,h)}).then(function(z){return z}).then(H,function(z){rt("failed to asynchronously prepare wasm: "+z),aB(z)})}if(Qi(),m.instantiateWasm)try{return m.instantiateWasm(h,l)}catch(H){return rt("Module.instantiateWasm callback failed with error: "+H),!1}(fI||typeof WebAssembly.instantiateStreaming!="function"||gQ(ct)||Lt(ct)||Wg||typeof fetch!="function"?F(p):fetch(ct,{credentials:"same-origin"}).then(function(H){return WebAssembly.instantiateStreaming(H,h).then(p,function(z){return rt("wasm streaming compile failed: "+z),rt("falling back to ArrayBuffer instantiation"),F(p)})})).catch(tA)}(),m.___wasm_call_ctors=function(){return(m.___wasm_call_ctors=m.asm.X).apply(null,arguments)},m._malloc=function(){return(xt=m._malloc=m.asm.Y).apply(null,arguments)}),LI=m._free=function(){return(LI=m._free=m.asm.Z).apply(null,arguments)},QQ=m.___errno_location=function(){return(QQ=m.___errno_location=m.asm._).apply(null,arguments)},je=m.___getTypeName=function(){return(je=m.___getTypeName=m.asm.aa).apply(null,arguments)},$e=(m.__embind_initialize_bindings=function(){return(m.__embind_initialize_bindings=m.asm.ba).apply(null,arguments)},m._setThrew=function(){return($e=m._setThrew=m.asm.ca).apply(null,arguments)}),mi=m.stackSave=function(){return(mi=m.stackSave=m.asm.da).apply(null,arguments)},Te=m.stackRestore=function(){return(Te=m.stackRestore=m.asm.ea).apply(null,arguments)},OB=m.___cxa_is_pointer_type=function(){return(OB=m.___cxa_is_pointer_type=m.asm.fa).apply(null,arguments)};function PB(h){function l(){Ce||(Ce=!0,m.calledRun=!0,ht||(m.noFSInit||v.init.initialized||v.init(),v.ignorePermissions=!1,QC(AQ),_(m),m.onRuntimeInitialized&&m.onRuntimeInitialized(),function(){if(m.postRun)for(typeof m.postRun=="function"&&(m.postRun=[m.postRun]);m.postRun.length;)p=m.postRun.shift(),oB.unshift(p);var p;QC(oB)}()))}nB>0||(function(){if(m.preRun)for(typeof m.preRun=="function"&&(m.preRun=[m.preRun]);m.preRun.length;)p=m.preRun.shift(),$C.unshift(p);var p;QC($C)}(),nB>0||(m.setStatus?(m.setStatus("Running..."),setTimeout(function(){setTimeout(function(){m.setStatus("")},1),l()},1)):l()))}if(m.dynCall_jiji=function(){return(m.dynCall_jiji=m.asm.ga).apply(null,arguments)},m.dynCall_viijii=function(){return(m.dynCall_viijii=m.asm.ha).apply(null,arguments)},m.dynCall_iiiiij=function(){return(m.dynCall_iiiiij=m.asm.ia).apply(null,arguments)},m.dynCall_iiiiijj=function(){return(m.dynCall_iiiiijj=m.asm.ja).apply(null,arguments)},m.dynCall_iiiiiijj=function(){return(m.dynCall_iiiiiijj=m.asm.ka).apply(null,arguments)},m.FS=v,EC=function h(){Ce||PB(),Ce||(EC=h)},m.preInit)for(typeof m.preInit=="function"&&(m.preInit=[m.preInit]);m.preInit.length>0;)m.preInit.pop()();return PB(),m.ready});const Bg=yA;function Z(m,_){return function(){return m.apply(_,arguments)}}const{toString:oA}=Object.prototype,{getPrototypeOf:Cg}=Object,ag=(YA=Object.create(null),m=>{const _=oA.call(m);return YA[_]||(YA[_]=_.slice(8,-1).toLowerCase())});var YA;const WA=m=>(m=m.toLowerCase(),_=>ag(_)===m),zA=m=>_=>typeof _===m,{isArray:lg}=Array,q=zA("undefined"),O=WA("ArrayBuffer"),EA=zA("string"),nA=zA("function"),sA=zA("number"),mA=m=>m!==null&&typeof m=="object",Ig=m=>{if(ag(m)!=="object")return!1;const _=Cg(m);return!(_!==null&&_!==Object.prototype&&Object.getPrototypeOf(_)!==null||Symbol.toStringTag in m||Symbol.iterator in m)},og=WA("Date"),Rg=WA("File"),Hg=WA("Blob"),eI=WA("FileList"),EI=WA("URLSearchParams");function wI(m,_,{allOwnKeys:tA=!1}={}){if(m==null)return;let wA,FA;if(typeof m!="object"&&(m=[m]),lg(m))for(wA=0,FA=m.length;wA<FA;wA++)_.call(null,m[wA],wA,m);else{const vA=tA?Object.getOwnPropertyNames(m):Object.keys(m),JA=vA.length;let dA;for(wA=0;wA<JA;wA++)dA=vA[wA],_.call(null,m[dA],dA,m)}}function cg(m,_){_=_.toLowerCase();const tA=Object.keys(m);let wA,FA=tA.length;for(;FA-- >0;)if(wA=tA[FA],_===wA.toLowerCase())return wA;return null}const ZA=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:w.g,cA=m=>!q(m)&&m!==ZA,iI=(dg=typeof Uint8Array<"u"&&Cg(Uint8Array),m=>dg&&m instanceof dg);var dg;const Pg=WA("HTMLFormElement"),Og=(({hasOwnProperty:m})=>(_,tA)=>m.call(_,tA))(Object.prototype),dI=WA("RegExp"),uI=(m,_)=>{const tA=Object.getOwnPropertyDescriptors(m),wA={};wI(tA,(FA,vA)=>{_(FA,vA,m)!==!1&&(wA[vA]=FA)}),Object.defineProperties(m,wA)},HA={isArray:lg,isArrayBuffer:O,isBuffer:function(m){return m!==null&&!q(m)&&m.constructor!==null&&!q(m.constructor)&&nA(m.constructor.isBuffer)&&m.constructor.isBuffer(m)},isFormData:m=>{const _="[object FormData]";return m&&(typeof FormData=="function"&&m instanceof FormData||oA.call(m)===_||nA(m.toString)&&m.toString()===_)},isArrayBufferView:function(m){let _;return _=typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(m):m&&m.buffer&&O(m.buffer),_},isString:EA,isNumber:sA,isBoolean:m=>m===!0||m===!1,isObject:mA,isPlainObject:Ig,isUndefined:q,isDate:og,isFile:Rg,isBlob:Hg,isRegExp:dI,isFunction:nA,isStream:m=>mA(m)&&nA(m.pipe),isURLSearchParams:EI,isTypedArray:iI,isFileList:eI,forEach:wI,merge:function m(){const{caseless:_}=cA(this)&&this||{},tA={},wA=(FA,vA)=>{const JA=_&&cg(tA,vA)||vA;Ig(tA[JA])&&Ig(FA)?tA[JA]=m(tA[JA],FA):Ig(FA)?tA[JA]=m({},FA):lg(FA)?tA[JA]=FA.slice():tA[JA]=FA};for(let FA=0,vA=arguments.length;FA<vA;FA++)arguments[FA]&&wI(arguments[FA],wA);return tA},extend:(m,_,tA,{allOwnKeys:wA}={})=>(wI(_,(FA,vA)=>{tA&&nA(FA)?m[vA]=Z(FA,tA):m[vA]=FA},{allOwnKeys:wA}),m),trim:m=>m.trim?m.trim():m.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:m=>(m.charCodeAt(0)===65279&&(m=m.slice(1)),m),inherits:(m,_,tA,wA)=>{m.prototype=Object.create(_.prototype,wA),m.prototype.constructor=m,Object.defineProperty(m,"super",{value:_.prototype}),tA&&Object.assign(m.prototype,tA)},toFlatObject:(m,_,tA,wA)=>{let FA,vA,JA;const dA={};if(_=_||{},m==null)return _;do{for(FA=Object.getOwnPropertyNames(m),vA=FA.length;vA-- >0;)JA=FA[vA],wA&&!wA(JA,m,_)||dA[JA]||(_[JA]=m[JA],dA[JA]=!0);m=tA!==!1&&Cg(m)}while(m&&(!tA||tA(m,_))&&m!==Object.prototype);return _},kindOf:ag,kindOfTest:WA,endsWith:(m,_,tA)=>{m=String(m),(tA===void 0||tA>m.length)&&(tA=m.length),tA-=_.length;const wA=m.indexOf(_,tA);return wA!==-1&&wA===tA},toArray:m=>{if(!m)return null;if(lg(m))return m;let _=m.length;if(!sA(_))return null;const tA=new Array(_);for(;_-- >0;)tA[_]=m[_];return tA},forEachEntry:(m,_)=>{const tA=(m&&m[Symbol.iterator]).call(m);let wA;for(;(wA=tA.next())&&!wA.done;){const FA=wA.value;_.call(m,FA[0],FA[1])}},matchAll:(m,_)=>{let tA;const wA=[];for(;(tA=m.exec(_))!==null;)wA.push(tA);return wA},isHTMLForm:Pg,hasOwnProperty:Og,hasOwnProp:Og,reduceDescriptors:uI,freezeMethods:m=>{uI(m,(_,tA)=>{if(nA(m)&&["arguments","caller","callee"].indexOf(tA)!==-1)return!1;const wA=m[tA];nA(wA)&&(_.enumerable=!1,"writable"in _?_.writable=!1:_.set||(_.set=()=>{throw Error("Can not rewrite read-only method '"+tA+"'")}))})},toObjectSet:(m,_)=>{const tA={},wA=FA=>{FA.forEach(vA=>{tA[vA]=!0})};return lg(m)?wA(m):wA(String(m).split(_)),tA},toCamelCase:m=>m.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(_,tA,wA){return tA.toUpperCase()+wA}),noop:()=>{},toFiniteNumber:(m,_)=>(m=+m,Number.isFinite(m)?m:_),findKey:cg,global:ZA,isContextDefined:cA,toJSONObject:m=>{const _=new Array(10),tA=(wA,FA)=>{if(mA(wA)){if(_.indexOf(wA)>=0)return;if(!("toJSON"in wA)){_[FA]=wA;const vA=lg(wA)?[]:{};return wI(wA,(JA,dA)=>{const eA=tA(JA,FA+1);!q(eA)&&(vA[dA]=eA)}),_[FA]=void 0,vA}}return wA};return tA(m,0)}};function FI(m,_,tA,wA,FA){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=m,this.name="AxiosError",_&&(this.code=_),tA&&(this.config=tA),wA&&(this.request=wA),FA&&(this.response=FA)}HA.inherits(FI,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:HA.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Bt=FI.prototype,Nt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(m=>{Nt[m]={value:m}}),Object.defineProperties(FI,Nt),Object.defineProperty(Bt,"isAxiosError",{value:!0}),FI.from=(m,_,tA,wA,FA,vA)=>{const JA=Object.create(Bt);return HA.toFlatObject(m,JA,function(dA){return dA!==Error.prototype},dA=>dA!=="isAxiosError"),FI.call(JA,m.message,_,tA,wA,FA),JA.cause=m,JA.name=m.name,vA&&Object.assign(JA,vA),JA};const AA=FI,X=J(230);function VA(m){return HA.isPlainObject(m)||HA.isArray(m)}function Ug(m){return HA.endsWith(m,"[]")?m.slice(0,-2):m}function Fg(m,_,tA){return m?m.concat(_).map(function(wA,FA){return wA=Ug(wA),!tA&&FA?"["+wA+"]":wA}).join(tA?".":""):_}const xg=HA.toFlatObject(HA,{},null,function(m){return/^is[A-Z]/.test(m)}),hI=function(m,_,tA){if(!HA.isObject(m))throw new TypeError("target must be an object");_=_||new(X||FormData);const wA=(tA=HA.toFlatObject(tA,{metaTokens:!0,dots:!1,indexes:!1},!1,function(yg,Wg){return!HA.isUndefined(Wg[yg])})).metaTokens,FA=tA.visitor||kA,vA=tA.dots,JA=tA.indexes,dA=(tA.Blob||typeof Blob<"u"&&Blob)&&(eA=_)&&HA.isFunction(eA.append)&&eA[Symbol.toStringTag]==="FormData"&&eA[Symbol.iterator];var eA;if(!HA.isFunction(FA))throw new TypeError("visitor must be a function");function NA(yg){if(yg===null)return"";if(HA.isDate(yg))return yg.toISOString();if(!dA&&HA.isBlob(yg))throw new AA("Blob is not supported. Use a Buffer instead.");return HA.isArrayBuffer(yg)||HA.isTypedArray(yg)?dA&&typeof Blob=="function"?new Blob([yg]):Buffer.from(yg):yg}function kA(yg,Wg,oI){let fI=yg;if(yg&&!oI&&typeof yg=="object"){if(HA.endsWith(Wg,"{}"))Wg=wA?Wg:Wg.slice(0,-2),yg=JSON.stringify(yg);else if(HA.isArray(yg)&&function(At){return HA.isArray(At)&&!At.some(VA)}(yg)||HA.isFileList(yg)||HA.endsWith(Wg,"[]")&&(fI=HA.toArray(yg)))return Wg=Ug(Wg),fI.forEach(function(At,rt){!HA.isUndefined(At)&&At!==null&&_.append(JA===!0?Fg([Wg],rt,vA):JA===null?Wg:Wg+"[]",NA(At))}),!1}return!!VA(yg)||(_.append(Fg(oI,Wg,vA),NA(yg)),!1)}const Yg=[],Xg=Object.assign(xg,{defaultVisitor:kA,convertValue:NA,isVisitable:VA});if(!HA.isObject(m))throw new TypeError("data must be an object");return function yg(Wg,oI){if(!HA.isUndefined(Wg)){if(Yg.indexOf(Wg)!==-1)throw Error("Circular reference detected in "+oI.join("."));Yg.push(Wg),HA.forEach(Wg,function(fI,At){(!(HA.isUndefined(fI)||fI===null)&&FA.call(_,fI,HA.isString(At)?At.trim():At,oI,Xg))===!0&&yg(fI,oI?oI.concat(At):[At])}),Yg.pop()}}(m),_};function vg(m){const _={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(m).replace(/[!'()~]|%20|%00/g,function(tA){return _[tA]})}function Ag(m,_){this._pairs=[],m&&hI(m,this,_)}const pI=Ag.prototype;pI.append=function(m,_){this._pairs.push([m,_])},pI.toString=function(m){const _=m?function(tA){return m.call(this,tA,vg)}:vg;return this._pairs.map(function(tA){return _(tA[0])+"="+_(tA[1])},"").join("&")};const DI=Ag;function yI(m){return encodeURIComponent(m).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function aI(m,_,tA){if(!_)return m;const wA=tA&&tA.encode||yI,FA=tA&&tA.serialize;let vA;if(vA=FA?FA(_,tA):HA.isURLSearchParams(_)?_.toString():new DI(_,tA).toString(wA),vA){const JA=m.indexOf("#");JA!==-1&&(m=m.slice(0,JA)),m+=(m.indexOf("?")===-1?"?":"&")+vA}return m}const sI=class{constructor(){this.handlers=[]}use(m,_,tA){return this.handlers.push({fulfilled:m,rejected:_,synchronous:!!tA&&tA.synchronous,runWhen:tA?tA.runWhen:null}),this.handlers.length-1}eject(m){this.handlers[m]&&(this.handlers[m]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(m){HA.forEach(this.handlers,function(_){_!==null&&m(_)})}},qI={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},dt=typeof URLSearchParams<"u"?URLSearchParams:DI,GA=FormData,Zg=(()=>{let m;return(typeof navigator>"u"||(m=navigator.product)!=="ReactNative"&&m!=="NativeScript"&&m!=="NS")&&typeof window<"u"&&typeof document<"u"})(),gg=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",kg={isBrowser:!0,classes:{URLSearchParams:dt,FormData:GA,Blob},isStandardBrowserEnv:Zg,isStandardBrowserWebWorkerEnv:gg,protocols:["http","https","file","blob","url","data"]},jg=function(m){function _(tA,wA,FA,vA){let JA=tA[vA++];const dA=Number.isFinite(+JA),eA=vA>=tA.length;return JA=!JA&&HA.isArray(FA)?FA.length:JA,eA?(HA.hasOwnProp(FA,JA)?FA[JA]=[FA[JA],wA]:FA[JA]=wA,!dA):(FA[JA]&&HA.isObject(FA[JA])||(FA[JA]=[]),_(tA,wA,FA[JA],vA)&&HA.isArray(FA[JA])&&(FA[JA]=function(NA){const kA={},Yg=Object.keys(NA);let Xg;const yg=Yg.length;let Wg;for(Xg=0;Xg<yg;Xg++)Wg=Yg[Xg],kA[Wg]=NA[Wg];return kA}(FA[JA])),!dA)}if(HA.isFormData(m)&&HA.isFunction(m.entries)){const tA={};return HA.forEachEntry(m,(wA,FA)=>{_(function(vA){return HA.matchAll(/\w+|\[(\w*)]/g,vA).map(JA=>JA[0]==="[]"?"":JA[1]||JA[0])}(wA),FA,tA,0)}),tA}return null},tt={"Content-Type":void 0},ut={transitional:qI,adapter:["xhr","http"],transformRequest:[function(m,_){const tA=_.getContentType()||"",wA=tA.indexOf("application/json")>-1,FA=HA.isObject(m);if(FA&&HA.isHTMLForm(m)&&(m=new FormData(m)),HA.isFormData(m))return wA&&wA?JSON.stringify(jg(m)):m;if(HA.isArrayBuffer(m)||HA.isBuffer(m)||HA.isStream(m)||HA.isFile(m)||HA.isBlob(m))return m;if(HA.isArrayBufferView(m))return m.buffer;if(HA.isURLSearchParams(m))return _.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),m.toString();let vA;if(FA){if(tA.indexOf("application/x-www-form-urlencoded")>-1)return function(JA,dA){return hI(JA,new kg.classes.URLSearchParams,Object.assign({visitor:function(eA,NA,kA,Yg){return kg.isNode&&HA.isBuffer(eA)?(this.append(NA,eA.toString("base64")),!1):Yg.defaultVisitor.apply(this,arguments)}},dA))}(m,this.formSerializer).toString();if((vA=HA.isFileList(m))||tA.indexOf("multipart/form-data")>-1){const JA=this.env&&this.env.FormData;return hI(vA?{"files[]":m}:m,JA&&new JA,this.formSerializer)}}return FA||wA?(_.setContentType("application/json",!1),function(JA,dA,eA){if(HA.isString(JA))try{return(0,JSON.parse)(JA),HA.trim(JA)}catch(NA){if(NA.name!=="SyntaxError")throw NA}return(0,JSON.stringify)(JA)}(m)):m}],transformResponse:[function(m){const _=this.transitional||ut.transitional,tA=_&&_.forcedJSONParsing,wA=this.responseType==="json";if(m&&HA.isString(m)&&(tA&&!this.responseType||wA)){const FA=!(_&&_.silentJSONParsing)&&wA;try{return JSON.parse(m)}catch(vA){if(FA)throw vA.name==="SyntaxError"?AA.from(vA,AA.ERR_BAD_RESPONSE,this,null,this.response):vA}}return m}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:kg.classes.FormData,Blob:kg.classes.Blob},validateStatus:function(m){return m>=200&&m<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};HA.forEach(["delete","get","head"],function(m){ut.headers[m]={}}),HA.forEach(["post","put","patch"],function(m){ut.headers[m]=HA.merge(tt)});const Ut=ut,ui=HA.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Dt=Symbol("internals");function ae(m){return m&&String(m).trim().toLowerCase()}function qt(m){return m===!1||m==null?m:HA.isArray(m)?m.map(qt):String(m)}function PC(m,_,tA,wA){return HA.isFunction(wA)?wA.call(this,_,tA):HA.isString(_)?HA.isString(wA)?_.indexOf(wA)!==-1:HA.isRegExp(wA)?wA.test(_):void 0:void 0}class UB{constructor(_){_&&this.set(_)}set(_,tA,wA){const FA=this;function vA(dA,eA,NA){const kA=ae(eA);if(!kA)throw new Error("header name must be a non-empty string");const Yg=HA.findKey(FA,kA);(!Yg||FA[Yg]===void 0||NA===!0||NA===void 0&&FA[Yg]!==!1)&&(FA[Yg||eA]=qt(dA))}const JA=(dA,eA)=>HA.forEach(dA,(NA,kA)=>vA(NA,kA,eA));return HA.isPlainObject(_)||_ instanceof this.constructor?JA(_,tA):HA.isString(_)&&(_=_.trim())&&!/^[-_a-zA-Z]+$/.test(_.trim())?JA((dA=>{const eA={};let NA,kA,Yg;return dA&&dA.split(`
`).forEach(function(Xg){Yg=Xg.indexOf(":"),NA=Xg.substring(0,Yg).trim().toLowerCase(),kA=Xg.substring(Yg+1).trim(),!NA||eA[NA]&&ui[NA]||(NA==="set-cookie"?eA[NA]?eA[NA].push(kA):eA[NA]=[kA]:eA[NA]=eA[NA]?eA[NA]+", "+kA:kA)}),eA})(_),tA):_!=null&&vA(tA,_,wA),this}get(_,tA){if(_=ae(_)){const wA=HA.findKey(this,_);if(wA){const FA=this[wA];if(!tA)return FA;if(tA===!0)return function(vA){const JA=Object.create(null),dA=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let eA;for(;eA=dA.exec(vA);)JA[eA[1]]=eA[2];return JA}(FA);if(HA.isFunction(tA))return tA.call(this,FA,wA);if(HA.isRegExp(tA))return tA.exec(FA);throw new TypeError("parser must be boolean|regexp|function")}}}has(_,tA){if(_=ae(_)){const wA=HA.findKey(this,_);return!(!wA||tA&&!PC(0,this[wA],wA,tA))}return!1}delete(_,tA){const wA=this;let FA=!1;function vA(JA){if(JA=ae(JA)){const dA=HA.findKey(wA,JA);!dA||tA&&!PC(0,wA[dA],dA,tA)||(delete wA[dA],FA=!0)}}return HA.isArray(_)?_.forEach(vA):vA(_),FA}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(_){const tA=this,wA={};return HA.forEach(this,(FA,vA)=>{const JA=HA.findKey(wA,vA);if(JA)return tA[JA]=qt(FA),void delete tA[vA];const dA=_?function(eA){return eA.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(NA,kA,Yg)=>kA.toUpperCase()+Yg)}(vA):String(vA).trim();dA!==vA&&delete tA[vA],tA[dA]=qt(FA),wA[dA]=!0}),this}concat(..._){return this.constructor.concat(this,..._)}toJSON(_){const tA=Object.create(null);return HA.forEach(this,(wA,FA)=>{wA!=null&&wA!==!1&&(tA[FA]=_&&HA.isArray(wA)?wA.join(", "):wA)}),tA}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([_,tA])=>_+": "+tA).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(_){return _ instanceof this?_:new this(_)}static concat(_,...tA){const wA=new this(_);return tA.forEach(FA=>wA.set(FA)),wA}static accessor(_){const tA=(this[Dt]=this[Dt]={accessors:{}}).accessors,wA=this.prototype;function FA(vA){const JA=ae(vA);tA[JA]||(function(dA,eA){const NA=HA.toCamelCase(" "+eA);["get","set","has"].forEach(kA=>{Object.defineProperty(dA,kA+NA,{value:function(Yg,Xg,yg){return this[kA].call(this,eA,Yg,Xg,yg)},configurable:!0})})}(wA,vA),tA[JA]=!0)}return HA.isArray(_)?_.forEach(FA):FA(_),this}}UB.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),HA.freezeMethods(UB.prototype),HA.freezeMethods(UB);const Bi=UB;function CB(m,_){const tA=this||Ut,wA=_||tA,FA=Bi.from(wA.headers);let vA=wA.data;return HA.forEach(m,function(JA){vA=JA.call(tA,vA,FA.normalize(),_?_.status:void 0)}),FA.normalize(),vA}function VC(m){return!(!m||!m.__CANCEL__)}function kB(m,_,tA){AA.call(this,m??"canceled",AA.ERR_CANCELED,_,tA),this.name="CanceledError"}HA.inherits(kB,AA,{__CANCEL__:!0});const LB=kB,go=kg.isStandardBrowserEnv?{write:function(m,_,tA,wA,FA,vA){const JA=[];JA.push(m+"="+encodeURIComponent(_)),HA.isNumber(tA)&&JA.push("expires="+new Date(tA).toGMTString()),HA.isString(wA)&&JA.push("path="+wA),HA.isString(FA)&&JA.push("domain="+FA),vA===!0&&JA.push("secure"),document.cookie=JA.join("; ")},read:function(m){const _=document.cookie.match(new RegExp("(^|;\\s*)("+m+")=([^;]*)"));return _?decodeURIComponent(_[3]):null},remove:function(m){this.write(m,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function $E(m,_){return m&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(_)?function(tA,wA){return wA?tA.replace(/\/+$/,"")+"/"+wA.replace(/^\/+/,""):tA}(m,_):_}const Io=kg.isStandardBrowserEnv?function(){const m=/(msie|trident)/i.test(navigator.userAgent),_=document.createElement("a");let tA;function wA(FA){let vA=FA;return m&&(_.setAttribute("href",vA),vA=_.href),_.setAttribute("href",vA),{href:_.href,protocol:_.protocol?_.protocol.replace(/:$/,""):"",host:_.host,search:_.search?_.search.replace(/^\?/,""):"",hash:_.hash?_.hash.replace(/^#/,""):"",hostname:_.hostname,port:_.port,pathname:_.pathname.charAt(0)==="/"?_.pathname:"/"+_.pathname}}return tA=wA(window.location.href),function(FA){const vA=HA.isString(FA)?wA(FA):FA;return vA.protocol===tA.protocol&&vA.host===tA.host}}():function(){return!0};function IA(m,_){let tA=0;const wA=function(FA,vA){FA=FA||10;const JA=new Array(FA),dA=new Array(FA);let eA,NA=0,kA=0;return vA=vA!==void 0?vA:1e3,function(Yg){const Xg=Date.now(),yg=dA[kA];eA||(eA=Xg),JA[NA]=Yg,dA[NA]=Xg;let Wg=kA,oI=0;for(;Wg!==NA;)oI+=JA[Wg++],Wg%=FA;if(NA=(NA+1)%FA,NA===kA&&(kA=(kA+1)%FA),Xg-eA<vA)return;const fI=yg&&Xg-yg;return fI?Math.round(1e3*oI/fI):void 0}}(50,250);return FA=>{const vA=FA.loaded,JA=FA.lengthComputable?FA.total:void 0,dA=vA-tA,eA=wA(dA);tA=vA;const NA={loaded:vA,total:JA,progress:JA?vA/JA:void 0,bytes:dA,rate:eA||void 0,estimated:eA&&JA&&vA<=JA?(JA-vA)/eA:void 0,event:FA};NA[_?"download":"upload"]=!0,m(NA)}}const TA={http:null,xhr:typeof XMLHttpRequest<"u"&&function(m){return new Promise(function(_,tA){let wA=m.data;const FA=Bi.from(m.headers).normalize(),vA=m.responseType;let JA;function dA(){m.cancelToken&&m.cancelToken.unsubscribe(JA),m.signal&&m.signal.removeEventListener("abort",JA)}HA.isFormData(wA)&&(kg.isStandardBrowserEnv||kg.isStandardBrowserWebWorkerEnv)&&FA.setContentType(!1);let eA=new XMLHttpRequest;if(m.auth){const Xg=m.auth.username||"",yg=m.auth.password?unescape(encodeURIComponent(m.auth.password)):"";FA.set("Authorization","Basic "+btoa(Xg+":"+yg))}const NA=$E(m.baseURL,m.url);function kA(){if(!eA)return;const Xg=Bi.from("getAllResponseHeaders"in eA&&eA.getAllResponseHeaders());(function(yg,Wg,oI){const fI=oI.config.validateStatus;oI.status&&fI&&!fI(oI.status)?Wg(new AA("Request failed with status code "+oI.status,[AA.ERR_BAD_REQUEST,AA.ERR_BAD_RESPONSE][Math.floor(oI.status/100)-4],oI.config,oI.request,oI)):yg(oI)})(function(yg){_(yg),dA()},function(yg){tA(yg),dA()},{data:vA&&vA!=="text"&&vA!=="json"?eA.response:eA.responseText,status:eA.status,statusText:eA.statusText,headers:Xg,config:m,request:eA}),eA=null}if(eA.open(m.method.toUpperCase(),aI(NA,m.params,m.paramsSerializer),!0),eA.timeout=m.timeout,"onloadend"in eA?eA.onloadend=kA:eA.onreadystatechange=function(){eA&&eA.readyState===4&&(eA.status!==0||eA.responseURL&&eA.responseURL.indexOf("file:")===0)&&setTimeout(kA)},eA.onabort=function(){eA&&(tA(new AA("Request aborted",AA.ECONNABORTED,m,eA)),eA=null)},eA.onerror=function(){tA(new AA("Network Error",AA.ERR_NETWORK,m,eA)),eA=null},eA.ontimeout=function(){let Xg=m.timeout?"timeout of "+m.timeout+"ms exceeded":"timeout exceeded";const yg=m.transitional||qI;m.timeoutErrorMessage&&(Xg=m.timeoutErrorMessage),tA(new AA(Xg,yg.clarifyTimeoutError?AA.ETIMEDOUT:AA.ECONNABORTED,m,eA)),eA=null},kg.isStandardBrowserEnv){const Xg=(m.withCredentials||Io(NA))&&m.xsrfCookieName&&go.read(m.xsrfCookieName);Xg&&FA.set(m.xsrfHeaderName,Xg)}wA===void 0&&FA.setContentType(null),"setRequestHeader"in eA&&HA.forEach(FA.toJSON(),function(Xg,yg){eA.setRequestHeader(yg,Xg)}),HA.isUndefined(m.withCredentials)||(eA.withCredentials=!!m.withCredentials),vA&&vA!=="json"&&(eA.responseType=m.responseType),typeof m.onDownloadProgress=="function"&&eA.addEventListener("progress",IA(m.onDownloadProgress,!0)),typeof m.onUploadProgress=="function"&&eA.upload&&eA.upload.addEventListener("progress",IA(m.onUploadProgress)),(m.cancelToken||m.signal)&&(JA=Xg=>{eA&&(tA(!Xg||Xg.type?new LB(null,m,eA):Xg),eA.abort(),eA=null)},m.cancelToken&&m.cancelToken.subscribe(JA),m.signal&&(m.signal.aborted?JA():m.signal.addEventListener("abort",JA)));const Yg=function(Xg){const yg=/^([-+\w]{1,25})(:?\/\/|:)/.exec(Xg);return yg&&yg[1]||""}(NA);Yg&&kg.protocols.indexOf(Yg)===-1?tA(new AA("Unsupported protocol "+Yg+":",AA.ERR_BAD_REQUEST,m)):eA.send(wA||null)})}};function eg(m){if(m.cancelToken&&m.cancelToken.throwIfRequested(),m.signal&&m.signal.aborted)throw new LB(null,m)}function _A(m){return eg(m),m.headers=Bi.from(m.headers),m.data=CB.call(m,m.transformRequest),["post","put","patch"].indexOf(m.method)!==-1&&m.headers.setContentType("application/x-www-form-urlencoded",!1),(_=>{_=HA.isArray(_)?_:[_];const{length:tA}=_;let wA,FA;for(let vA=0;vA<tA&&(wA=_[vA],!(FA=HA.isString(wA)?TA[wA.toLowerCase()]:wA));vA++);if(!FA)throw FA===!1?new AA(`Adapter ${wA} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(HA.hasOwnProp(TA,wA)?`Adapter '${wA}' is not available in the build`:`Unknown adapter '${wA}'`);if(!HA.isFunction(FA))throw new TypeError("adapter is not a function");return FA})(m.adapter||Ut.adapter)(m).then(function(_){return eg(m),_.data=CB.call(m,m.transformResponse,_),_.headers=Bi.from(_.headers),_},function(_){return VC(_)||(eg(m),_&&_.response&&(_.response.data=CB.call(m,m.transformResponse,_.response),_.response.headers=Bi.from(_.response.headers))),Promise.reject(_)})}HA.forEach(TA,(m,_)=>{if(m){try{Object.defineProperty(m,"name",{value:_})}catch{}Object.defineProperty(m,"adapterName",{value:_})}});const ig=m=>m instanceof Bi?m.toJSON():m;function tI(m,_){_=_||{};const tA={};function wA(NA,kA,Yg){return HA.isPlainObject(NA)&&HA.isPlainObject(kA)?HA.merge.call({caseless:Yg},NA,kA):HA.isPlainObject(kA)?HA.merge({},kA):HA.isArray(kA)?kA.slice():kA}function FA(NA,kA,Yg){return HA.isUndefined(kA)?HA.isUndefined(NA)?void 0:wA(void 0,NA,Yg):wA(NA,kA,Yg)}function vA(NA,kA){if(!HA.isUndefined(kA))return wA(void 0,kA)}function JA(NA,kA){return HA.isUndefined(kA)?HA.isUndefined(NA)?void 0:wA(void 0,NA):wA(void 0,kA)}function dA(NA,kA,Yg){return Yg in _?wA(NA,kA):Yg in m?wA(void 0,NA):void 0}const eA={url:vA,method:vA,data:vA,baseURL:JA,transformRequest:JA,transformResponse:JA,paramsSerializer:JA,timeout:JA,timeoutMessage:JA,withCredentials:JA,adapter:JA,responseType:JA,xsrfCookieName:JA,xsrfHeaderName:JA,onUploadProgress:JA,onDownloadProgress:JA,decompress:JA,maxContentLength:JA,maxBodyLength:JA,beforeRedirect:JA,transport:JA,httpAgent:JA,httpsAgent:JA,cancelToken:JA,socketPath:JA,responseEncoding:JA,validateStatus:dA,headers:(NA,kA)=>FA(ig(NA),ig(kA),!0)};return HA.forEach(Object.keys(m).concat(Object.keys(_)),function(NA){const kA=eA[NA]||FA,Yg=kA(m[NA],_[NA],NA);HA.isUndefined(Yg)&&kA!==dA||(tA[NA]=Yg)}),tA}const MI={};["object","boolean","number","function","string","symbol"].forEach((m,_)=>{MI[m]=function(tA){return typeof tA===m||"a"+(_<1?"n ":" ")+m}});const UI={};MI.transitional=function(m,_,tA){function wA(FA,vA){return"[Axios v1.2.4] Transitional option '"+FA+"'"+vA+(tA?". "+tA:"")}return(FA,vA,JA)=>{if(m===!1)throw new AA(wA(vA," has been removed"+(_?" in "+_:"")),AA.ERR_DEPRECATED);return _&&!UI[vA]&&(UI[vA]=!0,console.warn(wA(vA," has been deprecated since v"+_+" and will be removed in the near future"))),!m||m(FA,vA,JA)}};const NI={assertOptions:function(m,_,tA){if(typeof m!="object")throw new AA("options must be an object",AA.ERR_BAD_OPTION_VALUE);const wA=Object.keys(m);let FA=wA.length;for(;FA-- >0;){const vA=wA[FA],JA=_[vA];if(JA){const dA=m[vA],eA=dA===void 0||JA(dA,vA,m);if(eA!==!0)throw new AA("option "+vA+" must be "+eA,AA.ERR_BAD_OPTION_VALUE)}else if(tA!==!0)throw new AA("Unknown option "+vA,AA.ERR_BAD_OPTION)}},validators:MI},xI=NI.validators;class GI{constructor(_){this.defaults=_,this.interceptors={request:new sI,response:new sI}}request(_,tA){typeof _=="string"?(tA=tA||{}).url=_:tA=_||{},tA=tI(this.defaults,tA);const{transitional:wA,paramsSerializer:FA,headers:vA}=tA;let JA;wA!==void 0&&NI.assertOptions(wA,{silentJSONParsing:xI.transitional(xI.boolean),forcedJSONParsing:xI.transitional(xI.boolean),clarifyTimeoutError:xI.transitional(xI.boolean)},!1),FA!==void 0&&NI.assertOptions(FA,{encode:xI.function,serialize:xI.function},!0),tA.method=(tA.method||this.defaults.method||"get").toLowerCase(),JA=vA&&HA.merge(vA.common,vA[tA.method]),JA&&HA.forEach(["delete","get","head","post","put","patch","common"],Wg=>{delete vA[Wg]}),tA.headers=Bi.concat(JA,vA);const dA=[];let eA=!0;this.interceptors.request.forEach(function(Wg){typeof Wg.runWhen=="function"&&Wg.runWhen(tA)===!1||(eA=eA&&Wg.synchronous,dA.unshift(Wg.fulfilled,Wg.rejected))});const NA=[];let kA;this.interceptors.response.forEach(function(Wg){NA.push(Wg.fulfilled,Wg.rejected)});let Yg,Xg=0;if(!eA){const Wg=[_A.bind(this),void 0];for(Wg.unshift.apply(Wg,dA),Wg.push.apply(Wg,NA),Yg=Wg.length,kA=Promise.resolve(tA);Xg<Yg;)kA=kA.then(Wg[Xg++],Wg[Xg++]);return kA}Yg=dA.length;let yg=tA;for(Xg=0;Xg<Yg;){const Wg=dA[Xg++],oI=dA[Xg++];try{yg=Wg(yg)}catch(fI){oI.call(this,fI);break}}try{kA=_A.call(this,yg)}catch(Wg){return Promise.reject(Wg)}for(Xg=0,Yg=NA.length;Xg<Yg;)kA=kA.then(NA[Xg++],NA[Xg++]);return kA}getUri(_){return aI($E((_=tI(this.defaults,_)).baseURL,_.url),_.params,_.paramsSerializer)}}HA.forEach(["delete","get","head","options"],function(m){GI.prototype[m]=function(_,tA){return this.request(tI(tA||{},{method:m,url:_,data:(tA||{}).data}))}}),HA.forEach(["post","put","patch"],function(m){function _(tA){return function(wA,FA,vA){return this.request(tI(vA||{},{method:m,headers:tA?{"Content-Type":"multipart/form-data"}:{},url:wA,data:FA}))}}GI.prototype[m]=_(),GI.prototype[m+"Form"]=_(!0)});const JI=GI;class Rt{constructor(_){if(typeof _!="function")throw new TypeError("executor must be a function.");let tA;this.promise=new Promise(function(FA){tA=FA});const wA=this;this.promise.then(FA=>{if(!wA._listeners)return;let vA=wA._listeners.length;for(;vA-- >0;)wA._listeners[vA](FA);wA._listeners=null}),this.promise.then=FA=>{let vA;const JA=new Promise(dA=>{wA.subscribe(dA),vA=dA}).then(FA);return JA.cancel=function(){wA.unsubscribe(vA)},JA},_(function(FA,vA,JA){wA.reason||(wA.reason=new LB(FA,vA,JA),tA(wA.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(_){this.reason?_(this.reason):this._listeners?this._listeners.push(_):this._listeners=[_]}unsubscribe(_){if(!this._listeners)return;const tA=this._listeners.indexOf(_);tA!==-1&&this._listeners.splice(tA,1)}static source(){let _;return{token:new Rt(function(tA){_=tA}),cancel:_}}}const kt=Rt,se={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(se).forEach(([m,_])=>{se[_]=m});const Ci=se,TI=function m(_){const tA=new JI(_),wA=Z(JI.prototype.request,tA);return HA.extend(wA,JI.prototype,tA,{allOwnKeys:!0}),HA.extend(wA,tA,null,{allOwnKeys:!0}),wA.create=function(FA){return m(tI(_,FA))},wA}(Ut);TI.Axios=JI,TI.CanceledError=LB,TI.CancelToken=kt,TI.isCancel=VC,TI.VERSION="1.2.4",TI.toFormData=hI,TI.AxiosError=AA,TI.Cancel=TI.CanceledError,TI.all=function(m){return Promise.all(m)},TI.spread=function(m){return function(_){return m.apply(null,_)}},TI.isAxiosError=function(m){return HA.isObject(m)&&m.isAxiosError===!0},TI.mergeConfig=tI,TI.AxiosHeaders=Bi,TI.formToJSON=m=>jg(HA.isHTMLForm(m)?new FormData(m):m),TI.HttpStatusCode=Ci,TI.default=TI;const ZI=TI;var Ei=function(){function m(){V(this,m)}var _;return BA(m,null,[{key:"fetchRemoteData",value:(_=P(MA().mark(function tA(wA){var FA;return MA().wrap(function(vA){for(;;)switch(vA.prev=vA.next){case 0:return vA.prev=0,vA.next=3,ZI.get(wA,{responseType:"arraybuffer"});case 3:return FA=vA.sent,vA.abrupt("return",new Uint8Array(FA.data));case 7:throw vA.prev=7,vA.t0=vA.catch(0),vA.t0;case 10:case"end":return vA.stop()}},tA,null,[[0,7]])})),function(tA){return _.apply(this,arguments)})},{key:"string2Uint8Data",value:function(tA){for(var wA=new Uint8Array(tA.length),FA=0;FA<wA.length;FA++)wA[FA]=255&tA.charCodeAt(FA);return wA}},{key:"uint8Data2String",value:function(tA){return String.fromCharCode.apply(String,tA)}},{key:"parseMultiFile",value:function(tA){var wA=m.uint8Data2String(tA).split(`
`),FA=[],vA=0;return wA.forEach(function(JA){if((JA=JA.trim())&&!JA.startsWith("#"))switch(vA){case 0:return void(vA=1);case 1:JA.match(/^\d+$/)||FA.push(JA);case 2:case 3:case 4:return void vA++;case 5:return void(vA=1)}}),FA}}]),m}(),wt=function(){function m(){V(this,m),this.instance,this.markerCount=0,this.multiMarkerCount=0,this.cameraCount=0,this.version="0.3.0",console.info("ARToolkit ",this.version)}var _,tA,wA,FA,vA;return BA(m,[{key:"init",value:(vA=P(MA().mark(function JA(){var dA;return MA().wrap(function(eA){for(;;)switch(eA.prev=eA.next){case 0:return eA.next=2,new Promise(function(NA){Bg({onRuntimeInitialized:function(){NA({instance:this})}})});case 2:return dA=eA.sent,this.instance=dA.instance,this._decorate(),(typeof window<"u"?window:J.g).artoolkit=this,eA.abrupt("return",this);case 8:case"end":return eA.stop()}},JA,this)})),function(){return vA.apply(this,arguments)})},{key:"_decorate",value:function(){var JA=this;for(var dA in["setup","teardown","setupAR2","setLogLevel","getLogLevel","setDebugMode","getDebugMode","getProcessingImage","setMarkerInfoDir","setMarkerInfoVertex","getTransMatSquare","getTransMatSquareCont","getTransMatMultiSquare","getTransMatMultiSquareRobust","getMultiMarkerNum","getMultiMarkerCount","detectMarker","getMarkerNum","detectNFTMarker","getNFTMarker","getNFTData","getMarker","getMultiEachMarker","setProjectionNearPlane","getProjectionNearPlane","setProjectionFarPlane","getProjectionFarPlane","setThresholdMode","getThresholdMode","setThreshold","getThreshold","setPatternDetectionMode","getPatternDetectionMode","setMatrixCodeType","getMatrixCodeType","setLabelingMode","getLabelingMode","setPattRatio","getPattRatio","setImageProcMode","getImageProcMode"].forEach(function(eA){JA[eA]=JA.instance[eA]}),this.instance)dA.match(/^AR/)&&(this[dA]=this.instance[dA])}},{key:"loadCamera",value:(FA=P(MA().mark(function JA(dA){var eA,NA;return MA().wrap(function(kA){for(;;)switch(kA.prev=kA.next){case 0:if(eA="/camera_param_"+this.cameraCount++,!(dA instanceof Uint8Array)){kA.next=5;break}NA=dA,kA.next=14;break;case 5:return kA.prev=5,kA.next=8,Ei.fetchRemoteData(dA);case 8:NA=kA.sent,kA.next=14;break;case 11:throw kA.prev=11,kA.t0=kA.catch(5),kA.t0;case 14:return this._storeDataFile(NA,eA),kA.abrupt("return",this.instance._loadCamera(eA));case 16:case"end":return kA.stop()}},JA,this,[[5,11]])})),function(JA){return FA.apply(this,arguments)})},{key:"addMarker",value:(wA=P(MA().mark(function JA(dA,eA){var NA,kA;return MA().wrap(function(Yg){for(;;)switch(Yg.prev=Yg.next){case 0:if(NA="/marker_"+this.markerCount++,eA.indexOf(`
Name: `+mA.name+`
Message: `+mA.message,og.setAttribute("id","error-popup"),document.body.appendChild(og)}},1e3)};var nA=document.createElement("video");if(nA.setAttribute("autoplay",""),nA.setAttribute("muted",""),nA.setAttribute("playsinline",""),nA.style.width=this.parameters.displayWidth+"px",nA.style.height=this.parameters.displayHeight+"px",navigator.mediaDevices===void 0||navigator.mediaDevices.enumerateDevices===void 0||navigator.mediaDevices.getUserMedia===void 0){if(navigator.mediaDevices===void 0)var sA="navigator.mediaDevices";else navigator.mediaDevices.enumerateDevices===void 0?sA="navigator.mediaDevices.enumerateDevices":navigator.mediaDevices.getUserMedia===void 0?sA="navigator.mediaDevices.getUserMedia":console.assert(!1);return O({name:"",message:"WebRTC issue-! "+sA+" not present in your browser"}),null}return navigator.mediaDevices.enumerateDevices().then(function(mA){var Ig={audio:!1,video:{facingMode:"environment",width:{ideal:EA.parameters.sourceWidth},height:{ideal:EA.parameters.sourceHeight}}};EA.parameters.deviceId!==null&&(Ig.video.deviceId={exact:EA.parameters.deviceId}),navigator.mediaDevices.getUserMedia(Ig).then(function(og){nA.srcObject=og;var Rg=new CustomEvent("camera-init",{stream:og});window.dispatchEvent(Rg),document.body.addEventListener("click",EA.onInitialClick,{once:!0}),q()}).catch(function(og){O({name:og.name,message:og.message})})}).catch(function(mA){O({message:mA.message})}),nA},Z.prototype.dispose=function(){switch(this.ready=!1,this.parameters.sourceType){case"image":this._disposeSourceImage();break;case"video":this._disposeSourceVideo();break;case"webcam":this._disposeSourceWebcam()}this.domElement=null,document.body.removeEventListener("click",this.onInitialClick,{once:!0})},Z.prototype._disposeSourceImage=function(){var q=document.querySelector("#arjs-video");q&&q.remove()},Z.prototype._disposeSourceVideo=function(){var q=document.querySelector("#arjs-video");q&&(q.pause(),q.removeAttribute("src"),q.load(),q.remove())},Z.prototype._disposeSourceWebcam=function(){var q=document.querySelector("#arjs-video");q&&(q.srcObject&&q.srcObject.getTracks&&q.srcObject.getTracks().map(O=>O.stop()),q.remove())},Z.prototype.hasMobileTorch=function(){var q=arToolkitSource.domElement.srcObject;if(q instanceof MediaStream==0)return!1;this._currentTorchStatus===void 0&&(this._currentTorchStatus=!1);var O=q.getVideoTracks()[0];return O.getCapabilities!==void 0&&!!O.getCapabilities().torch},Z.prototype.toggleMobileTorch=function(){console.assert(this.hasMobileTorch()===!0);var q=arToolkitSource.domElement.srcObject;if(q instanceof MediaStream!=0){this._currentTorchStatus===void 0&&(this._currentTorchStatus=!1);var O=q.getVideoTracks()[0];O.getCapabilities().torch?(this._currentTorchStatus=this._currentTorchStatus===!1,O.applyConstraints({advanced:[{torch:this._currentTorchStatus}]}).catch(function(nA){console.log(nA)})):document.getElementById("error-popup")||((EA=document.createElement("div")).innerHTML="no mobile torch is available on your camera",EA.setAttribute("id","error-popup"),document.body.appendChild(EA))}else{var EA;document.getElementById("error-popup")||((EA=document.createElement("div")).innerHTML="enabling mobile torch is available only on webcam",EA.setAttribute("id","error-popup"),document.body.appendChild(EA))}},Z.prototype.domElementWidth=function(){return parseInt(this.domElement.style.width)},Z.prototype.domElementHeight=function(){return parseInt(this.domElement.style.height)},Z.prototype.onResizeElement=function(){var q=window.innerWidth,O=window.innerHeight;if(console.assert(arguments.length===0),this.domElement.nodeName==="IMG")var EA=this.domElement.naturalWidth,nA=this.domElement.naturalHeight;else this.domElement.nodeName==="VIDEO"?(EA=this.domElement.videoWidth,nA=this.domElement.videoHeight):console.assert(!1);var sA=EA/nA;if(q/O<sA){var mA=sA*O;this.domElement.style.width=mA+"px",this.domElement.style.marginLeft=-(mA-q)/2+"px",this.domElement.style.height=O+"px",this.domElement.style.marginTop="0px"}else{var Ig=1/(sA/q);this.domElement.style.height=Ig+"px",this.domElement.style.marginTop=-(Ig-O)/2+"px",this.domElement.style.width=q+"px",this.domElement.style.marginLeft="0px"}},Z.prototype.copyElementSizeTo=function(q){window.innerWidth>window.innerHeight?(q.style.width=this.domElement.style.width,q.style.height=this.domElement.style.height,q.style.marginLeft=this.domElement.style.marginLeft,q.style.marginTop=this.domElement.style.marginTop):(q.style.height=this.domElement.style.height,q.style.width=4*parseInt(q.style.height)/3+"px",q.style.marginLeft=(window.innerWidth-parseInt(q.style.width))/2+"px",q.style.marginTop=0)},Z.prototype.copySizeTo=function(){console.warn("obsolete function arToolkitSource.copySizeTo. Use arToolkitSource.copyElementSizeTo"),this.copyElementSizeTo.apply(this,arguments)},Z.prototype.onResize=function(q,O,EA){if(arguments.length!==3)return console.warn("obsolete function arToolkitSource.onResize. Use arToolkitSource.onResizeElement"),this.onResizeElement.apply(this,arguments);var nA=q.parameters.trackingBackend;nA==="artoolkit"?(this.onResizeElement(),!O.domElement.dataset.aframeCanvas&&this.copyElementSizeTo(O.domElement),q.arController!==null&&this.copyElementSizeTo(q.arController.canvas)):console.assert(!1,"unhandled trackingBackend "+nA),nA==="artoolkit"?q.arController!==null&&EA.projectionMatrix.copy(q.getProjectionMatrix()):console.assert(!1,"unhandled trackingBackend "+nA)};const oA=Z,Cg=function(q,O,EA){var nA=this;w.call(this,O),arguments.length>3&&console.assert("wrong api for",Cg),this.parameters={subMarkersControls:EA.subMarkersControls,subMarkerPoses:EA.subMarkerPoses,changeMatrixMode:EA.changeMatrixMode!==void 0?EA.changeMatrixMode:"modelViewMatrix"},this.object3d.visible=!1,this.subMarkersControls=this.parameters.subMarkersControls,this.subMarkerPoses=this.parameters.subMarkerPoses,q.addEventListener("sourceProcessed",function(){nA._onSourceProcessed()})};Cg.prototype=Object.create(w.prototype),Cg.prototype.constructor=Cg,Cg.prototype._onSourceProcessed=function(){var q=this,O={count:0,position:{sum:new c.Vector3(0,0,0),average:new c.Vector3(0,0,0)},quaternion:{sum:new c.Quaternion(0,0,0,0),average:new c.Quaternion(0,0,0,0)},scale:{sum:new c.Vector3(0,0,0),average:new c.Vector3(0,0,0)}},EA=q.parameters.subMarkersControls[0].object3d.quaternion;if(this.parameters.subMarkersControls.forEach(function(sA,mA){var Ig=sA.object3d;if(Ig.visible!==!1){var og=Ig.matrix.clone(),Rg=q.parameters.subMarkerPoses[mA];og.multiply(new c.Matrix4().copy(Rg).invert());var Hg=new c.Vector3,eI=new c.Quaternion,EI=new c.Vector3;og.decompose(Hg,eI,EI),O.count++,Cg.averageVector3(O.position.sum,Hg,O.count,O.position.average),Cg.averageQuaternion(O.quaternion.sum,eI,EA,O.count,O.quaternion.average),Cg.averageVector3(O.scale.sum,EI,O.count,O.scale.average)}}),O.count>0?q.object3d.visible=!0:q.object3d.visible=!1,O.count>0){var nA=new c.Matrix4;nA.compose(O.position.average,O.quaternion.average,O.scale.average),this.parameters.changeMatrixMode==="modelViewMatrix"?q.object3d.matrix.copy(nA):this.parameters.changeMatrixMode==="cameraTransformMatrix"?q.object3d.matrix.copy(nA).invert():console.assert(!1),q.object3d.matrix.decompose(q.object3d.position,q.object3d.quaternion,q.object3d.scale)}},Cg.averageQuaternion=function(q,O,EA,nA,sA){return sA=sA||new c.Quaternion,console.assert(EA instanceof c.Quaternion==1),O.dot(EA)>0&&(O=new c.Quaternion(-O.x,-O.y,-O.z,-O.w)),q.x+=O.x,q.y+=O.y,q.z+=O.z,q.w+=O.w,sA.x=q.x/nA,sA.y=q.y/nA,sA.z=q.z/nA,sA.w=q.w/nA,sA.normalize(),sA},Cg.averageVector3=function(q,O,EA,nA){return nA=nA||new c.Vector3,q.x+=O.x,q.y+=O.y,q.z+=O.z,nA.x=q.x/EA,nA.y=q.y/EA,nA.z=q.z/EA,nA},Cg.computeCenter=function(q){var O=JSON.parse(q),EA={count:0,position:{sum:new c.Vector3(0,0,0),average:new c.Vector3(0,0,0)},quaternion:{sum:new c.Quaternion(0,0,0,0),average:new c.Quaternion(0,0,0,0)},scale:{sum:new c.Vector3(0,0,0),average:new c.Vector3(0,0,0)}},nA=new c.Quaternion;O.subMarkersControls.forEach(function(mA){var Ig=new c.Matrix4().fromArray(mA.poseMatrix),og=new c.Vector3,Rg=new c.Quaternion,Hg=new c.Vector3;Ig.decompose(og,Rg,Hg),EA.count++,Cg.averageVector3(EA.position.sum,og,EA.count,EA.position.average),Cg.averageQuaternion(EA.quaternion.sum,Rg,nA,EA.count,EA.quaternion.average),Cg.averageVector3(EA.scale.sum,Hg,EA.count,EA.scale.average)});var sA=new c.Matrix4;return sA.compose(EA.position.average,EA.quaternion.average,EA.scale.average),sA},Cg.computeBoundingBox=function(q){var O=JSON.parse(q),EA=new c.Box3;return O.subMarkersControls.forEach(function(nA){var sA=new c.Matrix4().fromArray(nA.poseMatrix),mA=new c.Vector3,Ig=new c.Quaternion,og=new c.Vector3;sA.decompose(mA,Ig,og),EA.expandByPoint(mA)}),EA},Cg.prototype.updateSmoothedControls=function(q,O){O===void 0&&(O=[[.4,.1,.3],[.5,.1,.4],[.5,.2,.5],[.6,.2,.7],[.6,.2,.7]]);var EA=0;if(this.parameters.subMarkersControls.forEach(function(sA,mA){sA.object3d.visible===!0&&EA++}),O[EA-1]!==void 0)var nA=O[EA-1];else nA=O[O.length-1];q.parameters.lerpPosition=nA[0],q.parameters.lerpQuaternion=nA[1],q.parameters.lerpScale=nA[2]},Cg.fromJSON=function(q,O,EA,nA,sA){var mA=JSON.parse(nA),Ig=[],og=[];return sA=sA||{},mA.subMarkersControls.forEach(function(Rg){var Hg=new c.Object3D;O.add(Hg);var eI=new V(q,Hg,Rg.parameters);Ig.push(eI),og.push(new c.Matrix4().fromArray(Rg.poseMatrix))}),sA.subMarkersControls=Ig,sA.subMarkerPoses=og,new ag(q,EA,sA)};const ag=Cg,YA=function(q,O){var EA=this;this._arToolkitContext=q,this.subMarkersControls=O,this.enabled=!0,q.addEventListener("sourceProcessed",function(){EA._onSourceProcessed()})};YA.prototype._onSourceProcessed=function(){var q=this.subMarkersControls[0].object3d.quaternion;if(this.enabled!==!1)for(var O=this.subMarkersControls.filter(function(cg){return cg.object3d.visible===!0}),EA=Object.keys(O).length,nA=new THREE.Vector3,sA=new THREE.Quaternion,mA=new THREE.Vector3,Ig=new THREE.Matrix4,og=0;og<EA;og++)for(var Rg=O[og],Hg=0;Hg<EA;Hg++){var eI=O[Hg];if(og!==Hg){Rg.object3d.userData.seenCouples===void 0&&(Rg.object3d.userData.seenCouples={});var EI=Rg.object3d.userData.seenCouples;EI[eI.id]===void 0&&(EI[eI.id]={count:0,position:{sum:new THREE.Vector3(0,0,0),average:new THREE.Vector3(0,0,0)},quaternion:{sum:new THREE.Quaternion(0,0,0,0),average:new THREE.Quaternion(0,0,0,0)},scale:{sum:new THREE.Vector3(0,0,0),average:new THREE.Vector3(0,0,0)}}),Ig.copy(Rg.object3d.matrix).invert(),Ig.multiply(eI.object3d.matrix),Ig.decompose(nA,sA,mA);var wI=EI[eI.id];wI.count++,ag.averageVector3(wI.position.sum,nA,wI.count,wI.position.average),ag.averageQuaternion(wI.quaternion.sum,sA,q,wI.count,wI.quaternion.average),ag.averageVector3(wI.scale.sum,mA,wI.count,wI.scale.average)}}},YA.prototype.computeResult=function(){var q=this,O=this.subMarkersControls[0];this.deleteResult(),O.object3d.userData.result={averageMatrix:new THREE.Matrix4,confidenceFactor:1};do{var EA=!1;this.subMarkersControls.forEach(function(nA){var sA=nA.object3d.userData.result;if(!(sA!==void 0&&sA.confidenceFactor>=1)){var mA=q._getLearnedCoupleStats(nA);if(mA!==null){var Ig=q._getSubMarkerControlsByID(mA),og=nA.object3d.userData.seenCouples[mA],Rg=new THREE.Matrix4;Rg.compose(og.position.average,og.quaternion.average,og.scale.average);var Hg=Ig.object3d.userData.result.averageMatrix,eI=new THREE.Matrix4().getInverse(Hg).multiply(Rg);eI=new THREE.Matrix4().getInverse(eI),console.assert(nA.object3d.userData.result===void 0),nA.object3d.userData.result={averageMatrix:eI,confidenceFactor:1},EA=!0}}})}while(EA===!0)},YA.prototype._getLearnedCoupleStats=function(q){if(q.object3d.userData.seenCouples===void 0)return null;for(var O=q.object3d.userData.seenCouples,EA=Object.keys(O).map(Number),nA=0;nA<EA.length;nA++){var sA=EA[nA],mA=this._getSubMarkerControlsByID(sA).object3d.userData.result;if(mA!==void 0&&mA.confidenceFactor>=1)return sA}return null},YA.prototype._getSubMarkerControlsByID=function(q){for(var O=0;O<this.subMarkersControls.length;O++){var EA=this.subMarkersControls[O];if(EA.id===q)return EA}return null},YA.prototype.toJSON=function(){this.computeResult();var q={meta:{createdBy:"Area Learning - AR.js "+THREEx.ArToolkitContext.REVISION,createdAt:new Date().toJSON()},trackingBackend:this._arToolkitContext.parameters.trackingBackend,subMarkersControls:[]},O=this.subMarkersControls[0];return new THREE.Matrix4().copy(O.object3d.matrix).invert(),this.subMarkersControls.forEach(function(EA,nA){if(EA.object3d.userData.result!==void 0){var sA=EA.object3d.userData.result.averageMatrix;console.assert(sA instanceof THREE.Matrix4);var mA={parameters:{},poseMatrix:sA.toArray()};EA.parameters.type==="pattern"?(mA.parameters.type=EA.parameters.type,mA.parameters.patternUrl=EA.parameters.patternUrl):EA.parameters.type==="barcode"?(mA.parameters.type=EA.parameters.type,mA.parameters.barcodeValue=EA.parameters.barcodeValue):console.assert(!1),q.subMarkersControls.push(mA)}}),JSON.stringify(q,null,"	")},YA.prototype.resetStats=function(){this.deleteResult(),this.subMarkersControls.forEach(function(q){delete q.object3d.userData.seenCouples})},YA.prototype.deleteResult=function(){this.subMarkersControls.forEach(function(q){delete q.object3d.userData.result})};const WA=YA,zA={navigateToLearnerPage:function(q,O){var EA={backURL:location.href,trackingBackend:O,markersControlsParameters:zA.createDefaultMarkersControlsParameters(O)};location.href=q+"?"+encodeURIComponent(JSON.stringify(EA))},storeDefaultMultiMarkerFile:function(q){var O=zA.createDefaultMultiMarkerFile(q);localStorage.setItem("ARjsMultiMarkerFile",JSON.stringify(O))},createDefaultMultiMarkerFile:function(q){console.assert(q);var O=document.createElement("a");O.href=DA.baseURL;var EA=O.href,nA={meta:{createdBy:"AR.js "+DA.REVISION+" - Default Marker",createdAt:new Date().toJSON()},trackingBackend:q,subMarkersControls:[]};return nA.subMarkersControls[0]={parameters:{},poseMatrix:new c.Matrix4().makeTranslation(0,0,0).toArray()},q==="artoolkit"?(nA.subMarkersControls[0].parameters.type="pattern",nA.subMarkersControls[0].parameters.patternUrl=EA+"examples/marker-training/examples/pattern-files/pattern-hiro.patt"):console.assert(!1),nA},createDefaultMarkersControlsParameters:function(q){var O=document.createElement("a");O.href=DA.baseURL;var EA=O.href;if(q==="artoolkit")var nA=[{type:"pattern",patternUrl:EA+"examples/marker-training/examples/pattern-files/pattern-hiro.patt"},{type:"pattern",patternUrl:EA+"examples/marker-training/examples/pattern-files/pattern-kanji.patt"},{type:"pattern",patternUrl:EA+"examples/marker-training/examples/pattern-files/pattern-letterA.patt"},{type:"pattern",patternUrl:EA+"examples/marker-training/examples/pattern-files/pattern-letterB.patt"},{type:"pattern",patternUrl:EA+"examples/marker-training/examples/pattern-files/pattern-letterC.patt"},{type:"pattern",patternUrl:EA+"examples/marker-training/examples/pattern-files/pattern-letterF.patt"}];else console.assert(!1);return nA},storeMarkersAreaFileFromResolution:function(q,O,EA){var nA=this.buildMarkersAreaFileFromResolution(q,O,EA);localStorage.setItem("ARjsMultiMarkerFile",JSON.stringify(nA))},buildMarkersAreaFileFromResolution:function(q,O,EA){var nA={meta:{createdBy:"AR.js - Augmented Website",createdAt:new Date().toJSON()},trackingBackend:q,subMarkersControls:[]};if(O>EA)var sA=.4*EA;else O<EA?sA=.4*O:O===EA?sA=.33*O:console.assert(!1);var mA=.8*sA,Ig=(O-sA)/2/mA,og=(EA-sA)/2/mA,Rg=Hg("center",0,0);return nA.subMarkersControls.push(Rg),Rg=Hg("topleft",-Ig,-og),nA.subMarkersControls.push(Rg),Rg=Hg("topright",+Ig,-og),nA.subMarkersControls.push(Rg),Rg=Hg("bottomleft",-Ig,+og),nA.subMarkersControls.push(Rg),Rg=Hg("bottomright",+Ig,+og),nA.subMarkersControls.push(Rg),nA;function Hg(eI,EI,wI){console.log("buildSubMarkerControls",eI,EI,wI);var cg={parameters:{},poseMatrix:new c.Matrix4().makeTranslation(EI,0,wI).toArray()};return q==="artoolkit"?function(ZA,cA){var iI=document.createElement("a");iI.href=DA.baseURL;var dg=iI.href,Pg={center:Og(dg+"examples/marker-training/examples/pattern-files/pattern-hiro.patt"),topleft:Og(dg+"examples/marker-training/examples/pattern-files/pattern-letterA.patt"),topright:Og(dg+"examples/marker-training/examples/pattern-files/pattern-letterB.patt"),bottomleft:Og(dg+"examples/marker-training/examples/pattern-files/pattern-letterC.patt"),bottomright:Og(dg+"examples/marker-training/examples/pattern-files/pattern-letterF.patt")};return console.assert(Pg[cA]!==void 0),ZA.type="pattern",void(ZA.patternUrl=Pg[cA]);function Og(dI){var uI=document.createElement("a");return uI.href=dI,uI.href}}(cg.parameters,eI):console.assert(!1),cg}}},lg=zA})(),r})());/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const as="156",iD=0,Hh=1,BD=2,el=1,CD=2,SB=3,BC=0,Oe=1,GB=2,tC=0,TE=1,qh=2,Th=3,_h=4,ED=5,YE=100,QD=101,oD=102,Wh=103,Oh=104,nD=200,aD=201,sD=202,rD=203,il=204,Bl=205,hD=206,cD=207,lD=208,dD=209,uD=210,DD=0,wD=1,fD=2,ts=3,pD=4,yD=5,MD=6,mD=7,ss=0,RD=1,SD=2,eC=0,GD=1,FD=2,ND=3,UD=4,kD=5,Cl=300,OE=301,PE=302,es=303,is=304,fn=306,Bs=1e3,vi=1001,Cs=1002,xe=1003,Ph=1004,Ra=1005,li=1006,LD=1007,VQ=1008,iC=1009,xD=1010,JD=1011,rs=1012,El=1013,gC=1014,IC=1015,ZQ=1016,Ql=1017,ol=1018,HC=1020,bD=1021,Yi=1023,KD=1024,vD=1025,qC=1026,VE=1027,YD=1028,nl=1029,HD=1030,al=1031,sl=1033,Sa=33776,Ga=33777,Fa=33778,Na=33779,Vh=35840,Zh=35841,Xh=35842,zh=35843,qD=36196,jh=37492,$h=37496,Ac=37808,gc=37809,Ic=37810,tc=37811,ec=37812,ic=37813,Bc=37814,Cc=37815,Ec=37816,Qc=37817,oc=37818,nc=37819,ac=37820,sc=37821,Ua=36492,rc=36494,hc=36495,TD=36283,cc=36284,lc=36285,dc=36286,rl=3e3,TC=3001,_D=3200,WD=3201,hl=0,OD=1,_C="",bt="srgb",BB="srgb-linear",pn="display-p3",ka=7680,PD=519,VD=512,ZD=513,XD=514,zD=515,jD=516,$D=517,A0=518,g0=519,uc=35044,Dc="300 es",Es=1035,FB=2e3,un=2001;class zE{addEventListener(I,i){this._listeners===void 0&&(this._listeners={});const o=this._listeners;o[I]===void 0&&(o[I]=[]),o[I].indexOf(i)===-1&&o[I].push(i)}hasEventListener(I,i){if(this._listeners===void 0)return!1;const o=this._listeners;return o[I]!==void 0&&o[I].indexOf(i)!==-1}removeEventListener(I,i){if(this._listeners===void 0)return;const r=this._listeners[I];if(r!==void 0){const c=r.indexOf(i);c!==-1&&r.splice(c,1)}}dispatchEvent(I){if(this._listeners===void 0)return;const o=this._listeners[I.type];if(o!==void 0){I.target=this;const r=o.slice(0);for(let c=0,y=r.length;c<y;c++)r[c].call(this,I);I.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],La=Math.PI/180,Qs=180/Math.PI;function XQ(){const E=Math.random()*4294967295|0,I=Math.random()*4294967295|0,i=Math.random()*4294967295|0,o=Math.random()*4294967295|0;return(pe[E&255]+pe[E>>8&255]+pe[E>>16&255]+pe[E>>24&255]+"-"+pe[I&255]+pe[I>>8&255]+"-"+pe[I>>16&15|64]+pe[I>>24&255]+"-"+pe[i&63|128]+pe[i>>8&255]+"-"+pe[i>>16&255]+pe[i>>24&255]+pe[o&255]+pe[o>>8&255]+pe[o>>16&255]+pe[o>>24&255]).toLowerCase()}function We(E,I,i){return Math.max(I,Math.min(i,E))}function I0(E,I){return(E%I+I)%I}function xa(E,I,i){return(1-i)*E+i*I}function wc(E){return(E&E-1)===0&&E!==0}function os(E){return Math.pow(2,Math.floor(Math.log(E)/Math.LN2))}function YQ(E,I){switch(I.constructor){case Float32Array:return E;case Uint32Array:return E/4294967295;case Uint16Array:return E/65535;case Uint8Array:return E/255;case Int32Array:return Math.max(E/2147483647,-1);case Int16Array:return Math.max(E/32767,-1);case Int8Array:return Math.max(E/127,-1);default:throw new Error("Invalid component type.")}}function _e(E,I){switch(I.constructor){case Float32Array:return E;case Uint32Array:return Math.round(E*4294967295);case Uint16Array:return Math.round(E*65535);case Uint8Array:return Math.round(E*255);case Int32Array:return Math.round(E*2147483647);case Int16Array:return Math.round(E*32767);case Int8Array:return Math.round(E*127);default:throw new Error("Invalid component type.")}}class pt{constructor(I=0,i=0){pt.prototype.isVector2=!0,this.x=I,this.y=i}get width(){return this.x}set width(I){this.x=I}get height(){return this.y}set height(I){this.y=I}set(I,i){return this.x=I,this.y=i,this}setScalar(I){return this.x=I,this.y=I,this}setX(I){return this.x=I,this}setY(I){return this.y=I,this}setComponent(I,i){switch(I){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+I)}return this}getComponent(I){switch(I){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+I)}}clone(){return new this.constructor(this.x,this.y)}copy(I){return this.x=I.x,this.y=I.y,this}add(I){return this.x+=I.x,this.y+=I.y,this}addScalar(I){return this.x+=I,this.y+=I,this}addVectors(I,i){return this.x=I.x+i.x,this.y=I.y+i.y,this}addScaledVector(I,i){return this.x+=I.x*i,this.y+=I.y*i,this}sub(I){return this.x-=I.x,this.y-=I.y,this}subScalar(I){return this.x-=I,this.y-=I,this}subVectors(I,i){return this.x=I.x-i.x,this.y=I.y-i.y,this}multiply(I){return this.x*=I.x,this.y*=I.y,this}multiplyScalar(I){return this.x*=I,this.y*=I,this}divide(I){return this.x/=I.x,this.y/=I.y,this}divideScalar(I){return this.multiplyScalar(1/I)}applyMatrix3(I){const i=this.x,o=this.y,r=I.elements;return this.x=r[0]*i+r[3]*o+r[6],this.y=r[1]*i+r[4]*o+r[7],this}min(I){return this.x=Math.min(this.x,I.x),this.y=Math.min(this.y,I.y),this}max(I){return this.x=Math.max(this.x,I.x),this.y=Math.max(this.y,I.y),this}clamp(I,i){return this.x=Math.max(I.x,Math.min(i.x,this.x)),this.y=Math.max(I.y,Math.min(i.y,this.y)),this}clampScalar(I,i){return this.x=Math.max(I,Math.min(i,this.x)),this.y=Math.max(I,Math.min(i,this.y)),this}clampLength(I,i){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(I,Math.min(i,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(I){return this.x*I.x+this.y*I.y}cross(I){return this.x*I.y-this.y*I.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(I){const i=Math.sqrt(this.lengthSq()*I.lengthSq());if(i===0)return Math.PI/2;const o=this.dot(I)/i;return Math.acos(We(o,-1,1))}distanceTo(I){return Math.sqrt(this.distanceToSquared(I))}distanceToSquared(I){const i=this.x-I.x,o=this.y-I.y;return i*i+o*o}manhattanDistanceTo(I){return Math.abs(this.x-I.x)+Math.abs(this.y-I.y)}setLength(I){return this.normalize().multiplyScalar(I)}lerp(I,i){return this.x+=(I.x-this.x)*i,this.y+=(I.y-this.y)*i,this}lerpVectors(I,i,o){return this.x=I.x+(i.x-I.x)*o,this.y=I.y+(i.y-I.y)*o,this}equals(I){return I.x===this.x&&I.y===this.y}fromArray(I,i=0){return this.x=I[i],this.y=I[i+1],this}toArray(I=[],i=0){return I[i]=this.x,I[i+1]=this.y,I}fromBufferAttribute(I,i){return this.x=I.getX(i),this.y=I.getY(i),this}rotateAround(I,i){const o=Math.cos(i),r=Math.sin(i),c=this.x-I.x,y=this.y-I.y;return this.x=c*o-y*r+I.x,this.y=c*r+y*o+I.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jI{constructor(I,i,o,r,c,y,w,R,G){jI.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],I!==void 0&&this.set(I,i,o,r,c,y,w,R,G)}set(I,i,o,r,c,y,w,R,G){const N=this.elements;return N[0]=I,N[1]=r,N[2]=w,N[3]=i,N[4]=c,N[5]=R,N[6]=o,N[7]=y,N[8]=G,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(I){const i=this.elements,o=I.elements;return i[0]=o[0],i[1]=o[1],i[2]=o[2],i[3]=o[3],i[4]=o[4],i[5]=o[5],i[6]=o[6],i[7]=o[7],i[8]=o[8],this}extractBasis(I,i,o){return I.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),o.setFromMatrix3Column(this,2),this}setFromMatrix4(I){const i=I.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(I){return this.multiplyMatrices(this,I)}premultiply(I){return this.multiplyMatrices(I,this)}multiplyMatrices(I,i){const o=I.elements,r=i.elements,c=this.elements,y=o[0],w=o[3],R=o[6],G=o[1],N=o[4],J=o[7],b=o[2],Y=o[5],P=o[8],V=r[0],L=r[3],U=r[6],fA=r[1],BA=r[4],CA=r[7],DA=r[2],MA=r[5],yA=r[8];return c[0]=y*V+w*fA+R*DA,c[3]=y*L+w*BA+R*MA,c[6]=y*U+w*CA+R*yA,c[1]=G*V+N*fA+J*DA,c[4]=G*L+N*BA+J*MA,c[7]=G*U+N*CA+J*yA,c[2]=b*V+Y*fA+P*DA,c[5]=b*L+Y*BA+P*MA,c[8]=b*U+Y*CA+P*yA,this}multiplyScalar(I){const i=this.elements;return i[0]*=I,i[3]*=I,i[6]*=I,i[1]*=I,i[4]*=I,i[7]*=I,i[2]*=I,i[5]*=I,i[8]*=I,this}determinant(){const I=this.elements,i=I[0],o=I[1],r=I[2],c=I[3],y=I[4],w=I[5],R=I[6],G=I[7],N=I[8];return i*y*N-i*w*G-o*c*N+o*w*R+r*c*G-r*y*R}invert(){const I=this.elements,i=I[0],o=I[1],r=I[2],c=I[3],y=I[4],w=I[5],R=I[6],G=I[7],N=I[8],J=N*y-w*G,b=w*R-N*c,Y=G*c-y*R,P=i*J+o*b+r*Y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0);const V=1/P;return I[0]=J*V,I[1]=(r*G-N*o)*V,I[2]=(w*o-r*y)*V,I[3]=b*V,I[4]=(N*i-r*R)*V,I[5]=(r*c-w*i)*V,I[6]=Y*V,I[7]=(o*R-G*i)*V,I[8]=(y*i-o*c)*V,this}transpose(){let I;const i=this.elements;return I=i[1],i[1]=i[3],i[3]=I,I=i[2],i[2]=i[6],i[6]=I,I=i[5],i[5]=i[7],i[7]=I,this}getNormalMatrix(I){return this.setFromMatrix4(I).invert().transpose()}transposeIntoArray(I){const i=this.elements;return I[0]=i[0],I[1]=i[3],I[2]=i[6],I[3]=i[1],I[4]=i[4],I[5]=i[7],I[6]=i[2],I[7]=i[5],I[8]=i[8],this}setUvTransform(I,i,o,r,c,y,w){const R=Math.cos(c),G=Math.sin(c);return this.set(o*R,o*G,-o*(R*y+G*w)+y+I,-r*G,r*R,-r*(-G*y+R*w)+w+i,0,0,1),this}scale(I,i){return this.premultiply(Ja.makeScale(I,i)),this}rotate(I){return this.premultiply(Ja.makeRotation(-I)),this}translate(I,i){return this.premultiply(Ja.makeTranslation(I,i)),this}makeTranslation(I,i){return I.isVector2?this.set(1,0,I.x,0,1,I.y,0,0,1):this.set(1,0,I,0,1,i,0,0,1),this}makeRotation(I){const i=Math.cos(I),o=Math.sin(I);return this.set(i,-o,0,o,i,0,0,0,1),this}makeScale(I,i){return this.set(I,0,0,0,i,0,0,0,1),this}equals(I){const i=this.elements,o=I.elements;for(let r=0;r<9;r++)if(i[r]!==o[r])return!1;return!0}fromArray(I,i=0){for(let o=0;o<9;o++)this.elements[o]=I[o+i];return this}toArray(I=[],i=0){const o=this.elements;return I[i]=o[0],I[i+1]=o[1],I[i+2]=o[2],I[i+3]=o[3],I[i+4]=o[4],I[i+5]=o[5],I[i+6]=o[6],I[i+7]=o[7],I[i+8]=o[8],I}clone(){return new this.constructor().fromArray(this.elements)}}const Ja=new jI;function cl(E){for(let I=E.length-1;I>=0;--I)if(E[I]>=65535)return!0;return!1}function Dn(E){return document.createElementNS("http://www.w3.org/1999/xhtml",E)}function t0(){const E=Dn("canvas");return E.style.display="block",E}const fc={};function PQ(E){E in fc||(fc[E]=!0,console.warn(E))}function _E(E){return E<.04045?E*.0773993808:Math.pow(E*.9478672986+.0521327014,2.4)}function ba(E){return E<.0031308?E*12.92:1.055*Math.pow(E,.41666)-.055}const e0=new jI().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),i0=new jI().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function B0(E){return E.convertSRGBToLinear().applyMatrix3(i0)}function C0(E){return E.applyMatrix3(e0).convertLinearToSRGB()}const E0={[BB]:E=>E,[bt]:E=>E.convertSRGBToLinear(),[pn]:B0},Q0={[BB]:E=>E,[bt]:E=>E.convertLinearToSRGB(),[pn]:C0},Li={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(E){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!E},get workingColorSpace(){return BB},set workingColorSpace(E){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(E,I,i){if(this.enabled===!1||I===i||!I||!i)return E;const o=E0[I],r=Q0[i];if(o===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${I}" to "${i}".`);return r(o(E))},fromWorkingColorSpace:function(E,I){return this.convert(E,this.workingColorSpace,I)},toWorkingColorSpace:function(E,I){return this.convert(E,I,this.workingColorSpace)}};let pE;class ll{static getDataURL(I){if(/^data:/i.test(I.src)||typeof HTMLCanvasElement>"u")return I.src;let i;if(I instanceof HTMLCanvasElement)i=I;else{pE===void 0&&(pE=Dn("canvas")),pE.width=I.width,pE.height=I.height;const o=pE.getContext("2d");I instanceof ImageData?o.putImageData(I,0,0):o.drawImage(I,0,0,I.width,I.height),i=pE}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",I),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(I){if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const i=Dn("canvas");i.width=I.width,i.height=I.height;const o=i.getContext("2d");o.drawImage(I,0,0,I.width,I.height);const r=o.getImageData(0,0,I.width,I.height),c=r.data;for(let y=0;y<c.length;y++)c[y]=_E(c[y]/255)*255;return o.putImageData(r,0,0),i}else if(I.data){const i=I.data.slice(0);for(let o=0;o<i.length;o++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[o]=Math.floor(_E(i[o]/255)*255):i[o]=_E(i[o]);return{data:i,width:I.width,height:I.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),I}}let o0=0;class dl{constructor(I=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=XQ(),this.data=I,this.version=0}set needsUpdate(I){I===!0&&this.version++}toJSON(I){const i=I===void 0||typeof I=="string";if(!i&&I.images[this.uuid]!==void 0)return I.images[this.uuid];const o={uuid:this.uuid,url:""},r=this.data;if(r!==null){let c;if(Array.isArray(r)){c=[];for(let y=0,w=r.length;y<w;y++)r[y].isDataTexture?c.push(Ka(r[y].image)):c.push(Ka(r[y]))}else c=Ka(r);o.url=c}return i||(I.images[this.uuid]=o),o}}function Ka(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap?ll.getDataURL(E):E.data?{data:Array.from(E.data),width:E.width,height:E.height,type:E.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let n0=0;class ii extends zE{constructor(I=ii.DEFAULT_IMAGE,i=ii.DEFAULT_MAPPING,o=vi,r=vi,c=li,y=VQ,w=Yi,R=iC,G=ii.DEFAULT_ANISOTROPY,N=_C){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=XQ(),this.name="",this.source=new dl(I),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=o,this.wrapT=r,this.magFilter=c,this.minFilter=y,this.anisotropy=G,this.format=w,this.internalFormat=null,this.type=R,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jI,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof N=="string"?this.colorSpace=N:(PQ("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=N===TC?bt:_C),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(I=null){this.source.data=I}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(I){return this.name=I.name,this.source=I.source,this.mipmaps=I.mipmaps.slice(0),this.mapping=I.mapping,this.channel=I.channel,this.wrapS=I.wrapS,this.wrapT=I.wrapT,this.magFilter=I.magFilter,this.minFilter=I.minFilter,this.anisotropy=I.anisotropy,this.format=I.format,this.internalFormat=I.internalFormat,this.type=I.type,this.offset.copy(I.offset),this.repeat.copy(I.repeat),this.center.copy(I.center),this.rotation=I.rotation,this.matrixAutoUpdate=I.matrixAutoUpdate,this.matrix.copy(I.matrix),this.generateMipmaps=I.generateMipmaps,this.premultiplyAlpha=I.premultiplyAlpha,this.flipY=I.flipY,this.unpackAlignment=I.unpackAlignment,this.colorSpace=I.colorSpace,this.userData=JSON.parse(JSON.stringify(I.userData)),this.needsUpdate=!0,this}toJSON(I){const i=I===void 0||typeof I=="string";if(!i&&I.textures[this.uuid]!==void 0)return I.textures[this.uuid];const o={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(I).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),i||(I.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(I){if(this.mapping!==Cl)return I;if(I.applyMatrix3(this.matrix),I.x<0||I.x>1)switch(this.wrapS){case Bs:I.x=I.x-Math.floor(I.x);break;case vi:I.x=I.x<0?0:1;break;case Cs:Math.abs(Math.floor(I.x)%2)===1?I.x=Math.ceil(I.x)-I.x:I.x=I.x-Math.floor(I.x);break}if(I.y<0||I.y>1)switch(this.wrapT){case Bs:I.y=I.y-Math.floor(I.y);break;case vi:I.y=I.y<0?0:1;break;case Cs:Math.abs(Math.floor(I.y)%2)===1?I.y=Math.ceil(I.y)-I.y:I.y=I.y-Math.floor(I.y);break}return this.flipY&&(I.y=1-I.y),I}set needsUpdate(I){I===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return PQ("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bt?TC:rl}set encoding(I){PQ("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=I===TC?bt:_C}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=Cl;ii.DEFAULT_ANISOTROPY=1;class De{constructor(I=0,i=0,o=0,r=1){De.prototype.isVector4=!0,this.x=I,this.y=i,this.z=o,this.w=r}get width(){return this.z}set width(I){this.z=I}get height(){return this.w}set height(I){this.w=I}set(I,i,o,r){return this.x=I,this.y=i,this.z=o,this.w=r,this}setScalar(I){return this.x=I,this.y=I,this.z=I,this.w=I,this}setX(I){return this.x=I,this}setY(I){return this.y=I,this}setZ(I){return this.z=I,this}setW(I){return this.w=I,this}setComponent(I,i){switch(I){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+I)}return this}getComponent(I){switch(I){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+I)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(I){return this.x=I.x,this.y=I.y,this.z=I.z,this.w=I.w!==void 0?I.w:1,this}add(I){return this.x+=I.x,this.y+=I.y,this.z+=I.z,this.w+=I.w,this}addScalar(I){return this.x+=I,this.y+=I,this.z+=I,this.w+=I,this}addVectors(I,i){return this.x=I.x+i.x,this.y=I.y+i.y,this.z=I.z+i.z,this.w=I.w+i.w,this}addScaledVector(I,i){return this.x+=I.x*i,this.y+=I.y*i,this.z+=I.z*i,this.w+=I.w*i,this}sub(I){return this.x-=I.x,this.y-=I.y,this.z-=I.z,this.w-=I.w,this}subScalar(I){return this.x-=I,this.y-=I,this.z-=I,this.w-=I,this}subVectors(I,i){return this.x=I.x-i.x,this.y=I.y-i.y,this.z=I.z-i.z,this.w=I.w-i.w,this}multiply(I){return this.x*=I.x,this.y*=I.y,this.z*=I.z,this.w*=I.w,this}multiplyScalar(I){return this.x*=I,this.y*=I,this.z*=I,this.w*=I,this}applyMatrix4(I){const i=this.x,o=this.y,r=this.z,c=this.w,y=I.elements;return this.x=y[0]*i+y[4]*o+y[8]*r+y[12]*c,this.y=y[1]*i+y[5]*o+y[9]*r+y[13]*c,this.z=y[2]*i+y[6]*o+y[10]*r+y[14]*c,this.w=y[3]*i+y[7]*o+y[11]*r+y[15]*c,this}divideScalar(I){return this.multiplyScalar(1/I)}setAxisAngleFromQuaternion(I){this.w=2*Math.acos(I.w);const i=Math.sqrt(1-I.w*I.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=I.x/i,this.y=I.y/i,this.z=I.z/i),this}setAxisAngleFromRotationMatrix(I){let i,o,r,c;const R=I.elements,G=R[0],N=R[4],J=R[8],b=R[1],Y=R[5],P=R[9],V=R[2],L=R[6],U=R[10];if(Math.abs(N-b)<.01&&Math.abs(J-V)<.01&&Math.abs(P-L)<.01){if(Math.abs(N+b)<.1&&Math.abs(J+V)<.1&&Math.abs(P+L)<.1&&Math.abs(G+Y+U-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const BA=(G+1)/2,CA=(Y+1)/2,DA=(U+1)/2,MA=(N+b)/4,yA=(J+V)/4,Bg=(P+L)/4;return BA>CA&&BA>DA?BA<.01?(o=0,r=.707106781,c=.707106781):(o=Math.sqrt(BA),r=MA/o,c=yA/o):CA>DA?CA<.01?(o=.707106781,r=0,c=.707106781):(r=Math.sqrt(CA),o=MA/r,c=Bg/r):DA<.01?(o=.707106781,r=.707106781,c=0):(c=Math.sqrt(DA),o=yA/c,r=Bg/c),this.set(o,r,c,i),this}let fA=Math.sqrt((L-P)*(L-P)+(J-V)*(J-V)+(b-N)*(b-N));return Math.abs(fA)<.001&&(fA=1),this.x=(L-P)/fA,this.y=(J-V)/fA,this.z=(b-N)/fA,this.w=Math.acos((G+Y+U-1)/2),this}min(I){return this.x=Math.min(this.x,I.x),this.y=Math.min(this.y,I.y),this.z=Math.min(this.z,I.z),this.w=Math.min(this.w,I.w),this}max(I){return this.x=Math.max(this.x,I.x),this.y=Math.max(this.y,I.y),this.z=Math.max(this.z,I.z),this.w=Math.max(this.w,I.w),this}clamp(I,i){return this.x=Math.max(I.x,Math.min(i.x,this.x)),this.y=Math.max(I.y,Math.min(i.y,this.y)),this.z=Math.max(I.z,Math.min(i.z,this.z)),this.w=Math.max(I.w,Math.min(i.w,this.w)),this}clampScalar(I,i){return this.x=Math.max(I,Math.min(i,this.x)),this.y=Math.max(I,Math.min(i,this.y)),this.z=Math.max(I,Math.min(i,this.z)),this.w=Math.max(I,Math.min(i,this.w)),this}clampLength(I,i){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(I,Math.min(i,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(I){return this.x*I.x+this.y*I.y+this.z*I.z+this.w*I.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(I){return this.normalize().multiplyScalar(I)}lerp(I,i){return this.x+=(I.x-this.x)*i,this.y+=(I.y-this.y)*i,this.z+=(I.z-this.z)*i,this.w+=(I.w-this.w)*i,this}lerpVectors(I,i,o){return this.x=I.x+(i.x-I.x)*o,this.y=I.y+(i.y-I.y)*o,this.z=I.z+(i.z-I.z)*o,this.w=I.w+(i.w-I.w)*o,this}equals(I){return I.x===this.x&&I.y===this.y&&I.z===this.z&&I.w===this.w}fromArray(I,i=0){return this.x=I[i],this.y=I[i+1],this.z=I[i+2],this.w=I[i+3],this}toArray(I=[],i=0){return I[i]=this.x,I[i+1]=this.y,I[i+2]=this.z,I[i+3]=this.w,I}fromBufferAttribute(I,i){return this.x=I.getX(i),this.y=I.getY(i),this.z=I.getZ(i),this.w=I.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class a0 extends zE{constructor(I=1,i=1,o={}){super(),this.isRenderTarget=!0,this.width=I,this.height=i,this.depth=1,this.scissor=new De(0,0,I,i),this.scissorTest=!1,this.viewport=new De(0,0,I,i);const r={width:I,height:i,depth:1};o.encoding!==void 0&&(PQ("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),o.colorSpace=o.encoding===TC?bt:_C),this.texture=new ii(r,o.mapping,o.wrapS,o.wrapT,o.magFilter,o.minFilter,o.format,o.type,o.anisotropy,o.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=o.generateMipmaps!==void 0?o.generateMipmaps:!1,this.texture.internalFormat=o.internalFormat!==void 0?o.internalFormat:null,this.texture.minFilter=o.minFilter!==void 0?o.minFilter:li,this.depthBuffer=o.depthBuffer!==void 0?o.depthBuffer:!0,this.stencilBuffer=o.stencilBuffer!==void 0?o.stencilBuffer:!1,this.depthTexture=o.depthTexture!==void 0?o.depthTexture:null,this.samples=o.samples!==void 0?o.samples:0}setSize(I,i,o=1){(this.width!==I||this.height!==i||this.depth!==o)&&(this.width=I,this.height=i,this.depth=o,this.texture.image.width=I,this.texture.image.height=i,this.texture.image.depth=o,this.dispose()),this.viewport.set(0,0,I,i),this.scissor.set(0,0,I,i)}clone(){return new this.constructor().copy(this)}copy(I){this.width=I.width,this.height=I.height,this.depth=I.depth,this.scissor.copy(I.scissor),this.scissorTest=I.scissorTest,this.viewport.copy(I.viewport),this.texture=I.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},I.texture.image);return this.texture.source=new dl(i),this.depthBuffer=I.depthBuffer,this.stencilBuffer=I.stencilBuffer,I.depthTexture!==null&&(this.depthTexture=I.depthTexture.clone()),this.samples=I.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class WC extends a0{constructor(I=1,i=1,o={}){super(I,i,o),this.isWebGLRenderTarget=!0}}class ul extends ii{constructor(I=null,i=1,o=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:I,width:i,height:o,depth:r},this.magFilter=xe,this.minFilter=xe,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class s0 extends ii{constructor(I=null,i=1,o=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:I,width:i,height:o,depth:r},this.magFilter=xe,this.minFilter=xe,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zQ{constructor(I=0,i=0,o=0,r=1){this.isQuaternion=!0,this._x=I,this._y=i,this._z=o,this._w=r}static slerpFlat(I,i,o,r,c,y,w){let R=o[r+0],G=o[r+1],N=o[r+2],J=o[r+3];const b=c[y+0],Y=c[y+1],P=c[y+2],V=c[y+3];if(w===0){I[i+0]=R,I[i+1]=G,I[i+2]=N,I[i+3]=J;return}if(w===1){I[i+0]=b,I[i+1]=Y,I[i+2]=P,I[i+3]=V;return}if(J!==V||R!==b||G!==Y||N!==P){let L=1-w;const U=R*b+G*Y+N*P+J*V,fA=U>=0?1:-1,BA=1-U*U;if(BA>Number.EPSILON){const DA=Math.sqrt(BA),MA=Math.atan2(DA,U*fA);L=Math.sin(L*MA)/DA,w=Math.sin(w*MA)/DA}const CA=w*fA;if(R=R*L+b*CA,G=G*L+Y*CA,N=N*L+P*CA,J=J*L+V*CA,L===1-w){const DA=1/Math.sqrt(R*R+G*G+N*N+J*J);R*=DA,G*=DA,N*=DA,J*=DA}}I[i]=R,I[i+1]=G,I[i+2]=N,I[i+3]=J}static multiplyQuaternionsFlat(I,i,o,r,c,y){const w=o[r],R=o[r+1],G=o[r+2],N=o[r+3],J=c[y],b=c[y+1],Y=c[y+2],P=c[y+3];return I[i]=w*P+N*J+R*Y-G*b,I[i+1]=R*P+N*b+G*J-w*Y,I[i+2]=G*P+N*Y+w*b-R*J,I[i+3]=N*P-w*J-R*b-G*Y,I}get x(){return this._x}set x(I){this._x=I,this._onChangeCallback()}get y(){return this._y}set y(I){this._y=I,this._onChangeCallback()}get z(){return this._z}set z(I){this._z=I,this._onChangeCallback()}get w(){return this._w}set w(I){this._w=I,this._onChangeCallback()}set(I,i,o,r){return this._x=I,this._y=i,this._z=o,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(I){return this._x=I.x,this._y=I.y,this._z=I.z,this._w=I.w,this._onChangeCallback(),this}setFromEuler(I,i){const o=I._x,r=I._y,c=I._z,y=I._order,w=Math.cos,R=Math.sin,G=w(o/2),N=w(r/2),J=w(c/2),b=R(o/2),Y=R(r/2),P=R(c/2);switch(y){case"XYZ":this._x=b*N*J+G*Y*P,this._y=G*Y*J-b*N*P,this._z=G*N*P+b*Y*J,this._w=G*N*J-b*Y*P;break;case"YXZ":this._x=b*N*J+G*Y*P,this._y=G*Y*J-b*N*P,this._z=G*N*P-b*Y*J,this._w=G*N*J+b*Y*P;break;case"ZXY":this._x=b*N*J-G*Y*P,this._y=G*Y*J+b*N*P,this._z=G*N*P+b*Y*J,this._w=G*N*J-b*Y*P;break;case"ZYX":this._x=b*N*J-G*Y*P,this._y=G*Y*J+b*N*P,this._z=G*N*P-b*Y*J,this._w=G*N*J+b*Y*P;break;case"YZX":this._x=b*N*J+G*Y*P,this._y=G*Y*J+b*N*P,this._z=G*N*P-b*Y*J,this._w=G*N*J-b*Y*P;break;case"XZY":this._x=b*N*J-G*Y*P,this._y=G*Y*J-b*N*P,this._z=G*N*P+b*Y*J,this._w=G*N*J+b*Y*P;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+y)}return i!==!1&&this._onChangeCallback(),this}setFromAxisAngle(I,i){const o=i/2,r=Math.sin(o);return this._x=I.x*r,this._y=I.y*r,this._z=I.z*r,this._w=Math.cos(o),this._onChangeCallback(),this}setFromRotationMatrix(I){const i=I.elements,o=i[0],r=i[4],c=i[8],y=i[1],w=i[5],R=i[9],G=i[2],N=i[6],J=i[10],b=o+w+J;if(b>0){const Y=.5/Math.sqrt(b+1);this._w=.25/Y,this._x=(N-R)*Y,this._y=(c-G)*Y,this._z=(y-r)*Y}else if(o>w&&o>J){const Y=2*Math.sqrt(1+o-w-J);this._w=(N-R)/Y,this._x=.25*Y,this._y=(r+y)/Y,this._z=(c+G)/Y}else if(w>J){const Y=2*Math.sqrt(1+w-o-J);this._w=(c-G)/Y,this._x=(r+y)/Y,this._y=.25*Y,this._z=(R+N)/Y}else{const Y=2*Math.sqrt(1+J-o-w);this._w=(y-r)/Y,this._x=(c+G)/Y,this._y=(R+N)/Y,this._z=.25*Y}return this._onChangeCallback(),this}setFromUnitVectors(I,i){let o=I.dot(i)+1;return o<Number.EPSILON?(o=0,Math.abs(I.x)>Math.abs(I.z)?(this._x=-I.y,this._y=I.x,this._z=0,this._w=o):(this._x=0,this._y=-I.z,this._z=I.y,this._w=o)):(this._x=I.y*i.z-I.z*i.y,this._y=I.z*i.x-I.x*i.z,this._z=I.x*i.y-I.y*i.x,this._w=o),this.normalize()}angleTo(I){return 2*Math.acos(Math.abs(We(this.dot(I),-1,1)))}rotateTowards(I,i){const o=this.angleTo(I);if(o===0)return this;const r=Math.min(1,i/o);return this.slerp(I,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(I){return this._x*I._x+this._y*I._y+this._z*I._z+this._w*I._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let I=this.length();return I===0?(this._x=0,this._y=0,this._z=0,this._w=1):(I=1/I,this._x=this._x*I,this._y=this._y*I,this._z=this._z*I,this._w=this._w*I),this._onChangeCallback(),this}multiply(I){return this.multiplyQuaternions(this,I)}premultiply(I){return this.multiplyQuaternions(I,this)}multiplyQuaternions(I,i){const o=I._x,r=I._y,c=I._z,y=I._w,w=i._x,R=i._y,G=i._z,N=i._w;return this._x=o*N+y*w+r*G-c*R,this._y=r*N+y*R+c*w-o*G,this._z=c*N+y*G+o*R-r*w,this._w=y*N-o*w-r*R-c*G,this._onChangeCallback(),this}slerp(I,i){if(i===0)return this;if(i===1)return this.copy(I);const o=this._x,r=this._y,c=this._z,y=this._w;let w=y*I._w+o*I._x+r*I._y+c*I._z;if(w<0?(this._w=-I._w,this._x=-I._x,this._y=-I._y,this._z=-I._z,w=-w):this.copy(I),w>=1)return this._w=y,this._x=o,this._y=r,this._z=c,this;const R=1-w*w;if(R<=Number.EPSILON){const Y=1-i;return this._w=Y*y+i*this._w,this._x=Y*o+i*this._x,this._y=Y*r+i*this._y,this._z=Y*c+i*this._z,this.normalize(),this._onChangeCallback(),this}const G=Math.sqrt(R),N=Math.atan2(G,w),J=Math.sin((1-i)*N)/G,b=Math.sin(i*N)/G;return this._w=y*J+this._w*b,this._x=o*J+this._x*b,this._y=r*J+this._y*b,this._z=c*J+this._z*b,this._onChangeCallback(),this}slerpQuaternions(I,i,o){return this.copy(I).slerp(i,o)}random(){const I=Math.random(),i=Math.sqrt(1-I),o=Math.sqrt(I),r=2*Math.PI*Math.random(),c=2*Math.PI*Math.random();return this.set(i*Math.cos(r),o*Math.sin(c),o*Math.cos(c),i*Math.sin(r))}equals(I){return I._x===this._x&&I._y===this._y&&I._z===this._z&&I._w===this._w}fromArray(I,i=0){return this._x=I[i],this._y=I[i+1],this._z=I[i+2],this._w=I[i+3],this._onChangeCallback(),this}toArray(I=[],i=0){return I[i]=this._x,I[i+1]=this._y,I[i+2]=this._z,I[i+3]=this._w,I}fromBufferAttribute(I,i){return this._x=I.getX(i),this._y=I.getY(i),this._z=I.getZ(i),this._w=I.getW(i),this}toJSON(){return this.toArray()}_onChange(I){return this._onChangeCallback=I,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class $A{constructor(I=0,i=0,o=0){$A.prototype.isVector3=!0,this.x=I,this.y=i,this.z=o}set(I,i,o){return o===void 0&&(o=this.z),this.x=I,this.y=i,this.z=o,this}setScalar(I){return this.x=I,this.y=I,this.z=I,this}setX(I){return this.x=I,this}setY(I){return this.y=I,this}setZ(I){return this.z=I,this}setComponent(I,i){switch(I){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+I)}return this}getComponent(I){switch(I){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+I)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(I){return this.x=I.x,this.y=I.y,this.z=I.z,this}add(I){return this.x+=I.x,this.y+=I.y,this.z+=I.z,this}addScalar(I){return this.x+=I,this.y+=I,this.z+=I,this}addVectors(I,i){return this.x=I.x+i.x,this.y=I.y+i.y,this.z=I.z+i.z,this}addScaledVector(I,i){return this.x+=I.x*i,this.y+=I.y*i,this.z+=I.z*i,this}sub(I){return this.x-=I.x,this.y-=I.y,this.z-=I.z,this}subScalar(I){return this.x-=I,this.y-=I,this.z-=I,this}subVectors(I,i){return this.x=I.x-i.x,this.y=I.y-i.y,this.z=I.z-i.z,this}multiply(I){return this.x*=I.x,this.y*=I.y,this.z*=I.z,this}multiplyScalar(I){return this.x*=I,this.y*=I,this.z*=I,this}multiplyVectors(I,i){return this.x=I.x*i.x,this.y=I.y*i.y,this.z=I.z*i.z,this}applyEuler(I){return this.applyQuaternion(pc.setFromEuler(I))}applyAxisAngle(I,i){return this.applyQuaternion(pc.setFromAxisAngle(I,i))}applyMatrix3(I){const i=this.x,o=this.y,r=this.z,c=I.elements;return this.x=c[0]*i+c[3]*o+c[6]*r,this.y=c[1]*i+c[4]*o+c[7]*r,this.z=c[2]*i+c[5]*o+c[8]*r,this}applyNormalMatrix(I){return this.applyMatrix3(I).normalize()}applyMatrix4(I){const i=this.x,o=this.y,r=this.z,c=I.elements,y=1/(c[3]*i+c[7]*o+c[11]*r+c[15]);return this.x=(c[0]*i+c[4]*o+c[8]*r+c[12])*y,this.y=(c[1]*i+c[5]*o+c[9]*r+c[13])*y,this.z=(c[2]*i+c[6]*o+c[10]*r+c[14])*y,this}applyQuaternion(I){const i=this.x,o=this.y,r=this.z,c=I.x,y=I.y,w=I.z,R=I.w,G=R*i+y*r-w*o,N=R*o+w*i-c*r,J=R*r+c*o-y*i,b=-c*i-y*o-w*r;return this.x=G*R+b*-c+N*-w-J*-y,this.y=N*R+b*-y+J*-c-G*-w,this.z=J*R+b*-w+G*-y-N*-c,this}project(I){return this.applyMatrix4(I.matrixWorldInverse).applyMatrix4(I.projectionMatrix)}unproject(I){return this.applyMatrix4(I.projectionMatrixInverse).applyMatrix4(I.matrixWorld)}transformDirection(I){const i=this.x,o=this.y,r=this.z,c=I.elements;return this.x=c[0]*i+c[4]*o+c[8]*r,this.y=c[1]*i+c[5]*o+c[9]*r,this.z=c[2]*i+c[6]*o+c[10]*r,this.normalize()}divide(I){return this.x/=I.x,this.y/=I.y,this.z/=I.z,this}divideScalar(I){return this.multiplyScalar(1/I)}min(I){return this.x=Math.min(this.x,I.x),this.y=Math.min(this.y,I.y),this.z=Math.min(this.z,I.z),this}max(I){return this.x=Math.max(this.x,I.x),this.y=Math.max(this.y,I.y),this.z=Math.max(this.z,I.z),this}clamp(I,i){return this.x=Math.max(I.x,Math.min(i.x,this.x)),this.y=Math.max(I.y,Math.min(i.y,this.y)),this.z=Math.max(I.z,Math.min(i.z,this.z)),this}clampScalar(I,i){return this.x=Math.max(I,Math.min(i,this.x)),this.y=Math.max(I,Math.min(i,this.y)),this.z=Math.max(I,Math.min(i,this.z)),this}clampLength(I,i){const o=this.length();return this.divideScalar(o||1).multiplyScalar(Math.max(I,Math.min(i,o)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(I){return this.x*I.x+this.y*I.y+this.z*I.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(I){return this.normalize().multiplyScalar(I)}lerp(I,i){return this.x+=(I.x-this.x)*i,this.y+=(I.y-this.y)*i,this.z+=(I.z-this.z)*i,this}lerpVectors(I,i,o){return this.x=I.x+(i.x-I.x)*o,this.y=I.y+(i.y-I.y)*o,this.z=I.z+(i.z-I.z)*o,this}cross(I){return this.crossVectors(this,I)}crossVectors(I,i){const o=I.x,r=I.y,c=I.z,y=i.x,w=i.y,R=i.z;return this.x=r*R-c*w,this.y=c*y-o*R,this.z=o*w-r*y,this}projectOnVector(I){const i=I.lengthSq();if(i===0)return this.set(0,0,0);const o=I.dot(this)/i;return this.copy(I).multiplyScalar(o)}projectOnPlane(I){return va.copy(this).projectOnVector(I),this.sub(va)}reflect(I){return this.sub(va.copy(I).multiplyScalar(2*this.dot(I)))}angleTo(I){const i=Math.sqrt(this.lengthSq()*I.lengthSq());if(i===0)return Math.PI/2;const o=this.dot(I)/i;return Math.acos(We(o,-1,1))}distanceTo(I){return Math.sqrt(this.distanceToSquared(I))}distanceToSquared(I){const i=this.x-I.x,o=this.y-I.y,r=this.z-I.z;return i*i+o*o+r*r}manhattanDistanceTo(I){return Math.abs(this.x-I.x)+Math.abs(this.y-I.y)+Math.abs(this.z-I.z)}setFromSpherical(I){return this.setFromSphericalCoords(I.radius,I.phi,I.theta)}setFromSphericalCoords(I,i,o){const r=Math.sin(i)*I;return this.x=r*Math.sin(o),this.y=Math.cos(i)*I,this.z=r*Math.cos(o),this}setFromCylindrical(I){return this.setFromCylindricalCoords(I.radius,I.theta,I.y)}setFromCylindricalCoords(I,i,o){return this.x=I*Math.sin(i),this.y=o,this.z=I*Math.cos(i),this}setFromMatrixPosition(I){const i=I.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(I){const i=this.setFromMatrixColumn(I,0).length(),o=this.setFromMatrixColumn(I,1).length(),r=this.setFromMatrixColumn(I,2).length();return this.x=i,this.y=o,this.z=r,this}setFromMatrixColumn(I,i){return this.fromArray(I.elements,i*4)}setFromMatrix3Column(I,i){return this.fromArray(I.elements,i*3)}setFromEuler(I){return this.x=I._x,this.y=I._y,this.z=I._z,this}setFromColor(I){return this.x=I.r,this.y=I.g,this.z=I.b,this}equals(I){return I.x===this.x&&I.y===this.y&&I.z===this.z}fromArray(I,i=0){return this.x=I[i],this.y=I[i+1],this.z=I[i+2],this}toArray(I=[],i=0){return I[i]=this.x,I[i+1]=this.y,I[i+2]=this.z,I}fromBufferAttribute(I,i){return this.x=I.getX(i),this.y=I.getY(i),this.z=I.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const I=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,o=Math.sqrt(1-I**2);return this.x=o*Math.cos(i),this.y=o*Math.sin(i),this.z=I,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new $A,pc=new zQ;class jQ{constructor(I=new $A(1/0,1/0,1/0),i=new $A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=I,this.max=i}set(I,i){return this.min.copy(I),this.max.copy(i),this}setFromArray(I){this.makeEmpty();for(let i=0,o=I.length;i<o;i+=3)this.expandByPoint(pB.fromArray(I,i));return this}setFromBufferAttribute(I){this.makeEmpty();for(let i=0,o=I.count;i<o;i++)this.expandByPoint(pB.fromBufferAttribute(I,i));return this}setFromPoints(I){this.makeEmpty();for(let i=0,o=I.length;i<o;i++)this.expandByPoint(I[i]);return this}setFromCenterAndSize(I,i){const o=pB.copy(i).multiplyScalar(.5);return this.min.copy(I).sub(o),this.max.copy(I).add(o),this}setFromObject(I,i=!1){return this.makeEmpty(),this.expandByObject(I,i)}clone(){return new this.constructor().copy(this)}copy(I){return this.min.copy(I.min),this.max.copy(I.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(I){return this.isEmpty()?I.set(0,0,0):I.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(I){return this.isEmpty()?I.set(0,0,0):I.subVectors(this.max,this.min)}expandByPoint(I){return this.min.min(I),this.max.max(I),this}expandByVector(I){return this.min.sub(I),this.max.add(I),this}expandByScalar(I){return this.min.addScalar(-I),this.max.addScalar(I),this}expandByObject(I,i=!1){if(I.updateWorldMatrix(!1,!1),I.boundingBox!==void 0)I.boundingBox===null&&I.computeBoundingBox(),yE.copy(I.boundingBox),yE.applyMatrix4(I.matrixWorld),this.union(yE);else{const r=I.geometry;if(r!==void 0)if(i&&r.attributes!==void 0&&r.attributes.position!==void 0){const c=r.attributes.position;for(let y=0,w=c.count;y<w;y++)pB.fromBufferAttribute(c,y).applyMatrix4(I.matrixWorld),this.expandByPoint(pB)}else r.boundingBox===null&&r.computeBoundingBox(),yE.copy(r.boundingBox),yE.applyMatrix4(I.matrixWorld),this.union(yE)}const o=I.children;for(let r=0,c=o.length;r<c;r++)this.expandByObject(o[r],i);return this}containsPoint(I){return!(I.x<this.min.x||I.x>this.max.x||I.y<this.min.y||I.y>this.max.y||I.z<this.min.z||I.z>this.max.z)}containsBox(I){return this.min.x<=I.min.x&&I.max.x<=this.max.x&&this.min.y<=I.min.y&&I.max.y<=this.max.y&&this.min.z<=I.min.z&&I.max.z<=this.max.z}getParameter(I,i){return i.set((I.x-this.min.x)/(this.max.x-this.min.x),(I.y-this.min.y)/(this.max.y-this.min.y),(I.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(I){return!(I.max.x<this.min.x||I.min.x>this.max.x||I.max.y<this.min.y||I.min.y>this.max.y||I.max.z<this.min.z||I.min.z>this.max.z)}intersectsSphere(I){return this.clampPoint(I.center,pB),pB.distanceToSquared(I.center)<=I.radius*I.radius}intersectsPlane(I){let i,o;return I.normal.x>0?(i=I.normal.x*this.min.x,o=I.normal.x*this.max.x):(i=I.normal.x*this.max.x,o=I.normal.x*this.min.x),I.normal.y>0?(i+=I.normal.y*this.min.y,o+=I.normal.y*this.max.y):(i+=I.normal.y*this.max.y,o+=I.normal.y*this.min.y),I.normal.z>0?(i+=I.normal.z*this.min.z,o+=I.normal.z*this.max.z):(i+=I.normal.z*this.max.z,o+=I.normal.z*this.min.z),i<=-I.constant&&o>=-I.constant}intersectsTriangle(I){if(this.isEmpty())return!1;this.getCenter(HQ),Zo.subVectors(this.max,HQ),ME.subVectors(I.a,HQ),mE.subVectors(I.b,HQ),RE.subVectors(I.c,HQ),zB.subVectors(mE,ME),jB.subVectors(RE,mE),LC.subVectors(ME,RE);let i=[0,-zB.z,zB.y,0,-jB.z,jB.y,0,-LC.z,LC.y,zB.z,0,-zB.x,jB.z,0,-jB.x,LC.z,0,-LC.x,-zB.y,zB.x,0,-jB.y,jB.x,0,-LC.y,LC.x,0];return!Ya(i,ME,mE,RE,Zo)||(i=[1,0,0,0,1,0,0,0,1],!Ya(i,ME,mE,RE,Zo))?!1:(Xo.crossVectors(zB,jB),i=[Xo.x,Xo.y,Xo.z],Ya(i,ME,mE,RE,Zo))}clampPoint(I,i){return i.copy(I).clamp(this.min,this.max)}distanceToPoint(I){return this.clampPoint(I,pB).distanceTo(I)}getBoundingSphere(I){return this.isEmpty()?I.makeEmpty():(this.getCenter(I.center),I.radius=this.getSize(pB).length()*.5),I}intersect(I){return this.min.max(I.min),this.max.min(I.max),this.isEmpty()&&this.makeEmpty(),this}union(I){return this.min.min(I.min),this.max.max(I.max),this}applyMatrix4(I){return this.isEmpty()?this:(fB[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(I),fB[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(I),fB[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(I),fB[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(I),fB[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(I),fB[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(I),fB[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(I),fB[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(I),this.setFromPoints(fB),this)}translate(I){return this.min.add(I),this.max.add(I),this}equals(I){return I.min.equals(this.min)&&I.max.equals(this.max)}}const fB=[new $A,new $A,new $A,new $A,new $A,new $A,new $A,new $A],pB=new $A,yE=new jQ,ME=new $A,mE=new $A,RE=new $A,zB=new $A,jB=new $A,LC=new $A,HQ=new $A,Zo=new $A,Xo=new $A,xC=new $A;function Ya(E,I,i,o,r){for(let c=0,y=E.length-3;c<=y;c+=3){xC.fromArray(E,c);const w=r.x*Math.abs(xC.x)+r.y*Math.abs(xC.y)+r.z*Math.abs(xC.z),R=I.dot(xC),G=i.dot(xC),N=o.dot(xC);if(Math.max(-Math.max(R,G,N),Math.min(R,G,N))>w)return!1}return!0}const r0=new jQ,qQ=new $A,Ha=new $A;class hs{constructor(I=new $A,i=-1){this.center=I,this.radius=i}set(I,i){return this.center.copy(I),this.radius=i,this}setFromPoints(I,i){const o=this.center;i!==void 0?o.copy(i):r0.setFromPoints(I).getCenter(o);let r=0;for(let c=0,y=I.length;c<y;c++)r=Math.max(r,o.distanceToSquared(I[c]));return this.radius=Math.sqrt(r),this}copy(I){return this.center.copy(I.center),this.radius=I.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(I){return I.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(I){return I.distanceTo(this.center)-this.radius}intersectsSphere(I){const i=this.radius+I.radius;return I.center.distanceToSquared(this.center)<=i*i}intersectsBox(I){return I.intersectsSphere(this)}intersectsPlane(I){return Math.abs(I.distanceToPoint(this.center))<=this.radius}clampPoint(I,i){const o=this.center.distanceToSquared(I);return i.copy(I),o>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(I){return this.isEmpty()?(I.makeEmpty(),I):(I.set(this.center,this.center),I.expandByScalar(this.radius),I)}applyMatrix4(I){return this.center.applyMatrix4(I),this.radius=this.radius*I.getMaxScaleOnAxis(),this}translate(I){return this.center.add(I),this}expandByPoint(I){if(this.isEmpty())return this.center.copy(I),this.radius=0,this;qQ.subVectors(I,this.center);const i=qQ.lengthSq();if(i>this.radius*this.radius){const o=Math.sqrt(i),r=(o-this.radius)*.5;this.center.addScaledVector(qQ,r/o),this.radius+=r}return this}union(I){return I.isEmpty()?this:this.isEmpty()?(this.copy(I),this):(this.center.equals(I.center)===!0?this.radius=Math.max(this.radius,I.radius):(Ha.subVectors(I.center,this.center).setLength(I.radius),this.expandByPoint(qQ.copy(I.center).add(Ha)),this.expandByPoint(qQ.copy(I.center).sub(Ha))),this)}equals(I){return I.center.equals(this.center)&&I.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yB=new $A,qa=new $A,zo=new $A,$B=new $A,Ta=new $A,jo=new $A,_a=new $A;class h0{constructor(I=new $A,i=new $A(0,0,-1)){this.origin=I,this.direction=i}set(I,i){return this.origin.copy(I),this.direction.copy(i),this}copy(I){return this.origin.copy(I.origin),this.direction.copy(I.direction),this}at(I,i){return i.copy(this.origin).addScaledVector(this.direction,I)}lookAt(I){return this.direction.copy(I).sub(this.origin).normalize(),this}recast(I){return this.origin.copy(this.at(I,yB)),this}closestPointToPoint(I,i){i.subVectors(I,this.origin);const o=i.dot(this.direction);return o<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,o)}distanceToPoint(I){return Math.sqrt(this.distanceSqToPoint(I))}distanceSqToPoint(I){const i=yB.subVectors(I,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(I):(yB.copy(this.origin).addScaledVector(this.direction,i),yB.distanceToSquared(I))}distanceSqToSegment(I,i,o,r){qa.copy(I).add(i).multiplyScalar(.5),zo.copy(i).sub(I).normalize(),$B.copy(this.origin).sub(qa);const c=I.distanceTo(i)*.5,y=-this.direction.dot(zo),w=$B.dot(this.direction),R=-$B.dot(zo),G=$B.lengthSq(),N=Math.abs(1-y*y);let J,b,Y,P;if(N>0)if(J=y*R-w,b=y*w-R,P=c*N,J>=0)if(b>=-P)if(b<=P){const V=1/N;J*=V,b*=V,Y=J*(J+y*b+2*w)+b*(y*J+b+2*R)+G}else b=c,J=Math.max(0,-(y*b+w)),Y=-J*J+b*(b+2*R)+G;else b=-c,J=Math.max(0,-(y*b+w)),Y=-J*J+b*(b+2*R)+G;else b<=-P?(J=Math.max(0,-(-y*c+w)),b=J>0?-c:Math.min(Math.max(-c,-R),c),Y=-J*J+b*(b+2*R)+G):b<=P?(J=0,b=Math.min(Math.max(-c,-R),c),Y=b*(b+2*R)+G):(J=Math.max(0,-(y*c+w)),b=J>0?c:Math.min(Math.max(-c,-R),c),Y=-J*J+b*(b+2*R)+G);else b=y>0?-c:c,J=Math.max(0,-(y*b+w)),Y=-J*J+b*(b+2*R)+G;return o&&o.copy(this.origin).addScaledVector(this.direction,J),r&&r.copy(qa).addScaledVector(zo,b),Y}intersectSphere(I,i){yB.subVectors(I.center,this.origin);const o=yB.dot(this.direction),r=yB.dot(yB)-o*o,c=I.radius*I.radius;if(r>c)return null;const y=Math.sqrt(c-r),w=o-y,R=o+y;return R<0?null:w<0?this.at(R,i):this.at(w,i)}intersectsSphere(I){return this.distanceSqToPoint(I.center)<=I.radius*I.radius}distanceToPlane(I){const i=I.normal.dot(this.direction);if(i===0)return I.distanceToPoint(this.origin)===0?0:null;const o=-(this.origin.dot(I.normal)+I.constant)/i;return o>=0?o:null}intersectPlane(I,i){const o=this.distanceToPlane(I);return o===null?null:this.at(o,i)}intersectsPlane(I){const i=I.distanceToPoint(this.origin);return i===0||I.normal.dot(this.direction)*i<0}intersectBox(I,i){let o,r,c,y,w,R;const G=1/this.direction.x,N=1/this.direction.y,J=1/this.direction.z,b=this.origin;return G>=0?(o=(I.min.x-b.x)*G,r=(I.max.x-b.x)*G):(o=(I.max.x-b.x)*G,r=(I.min.x-b.x)*G),N>=0?(c=(I.min.y-b.y)*N,y=(I.max.y-b.y)*N):(c=(I.max.y-b.y)*N,y=(I.min.y-b.y)*N),o>y||c>r||((c>o||isNaN(o))&&(o=c),(y<r||isNaN(r))&&(r=y),J>=0?(w=(I.min.z-b.z)*J,R=(I.max.z-b.z)*J):(w=(I.max.z-b.z)*J,R=(I.min.z-b.z)*J),o>R||w>r)||((w>o||o!==o)&&(o=w),(R<r||r!==r)&&(r=R),r<0)?null:this.at(o>=0?o:r,i)}intersectsBox(I){return this.intersectBox(I,yB)!==null}intersectTriangle(I,i,o,r,c){Ta.subVectors(i,I),jo.subVectors(o,I),_a.crossVectors(Ta,jo);let y=this.direction.dot(_a),w;if(y>0){if(r)return null;w=1}else if(y<0)w=-1,y=-y;else return null;$B.subVectors(this.origin,I);const R=w*this.direction.dot(jo.crossVectors($B,jo));if(R<0)return null;const G=w*this.direction.dot(Ta.cross($B));if(G<0||R+G>y)return null;const N=-w*$B.dot(_a);return N<0?null:this.at(N/y,c)}applyMatrix4(I){return this.origin.applyMatrix4(I),this.direction.transformDirection(I),this}equals(I){return I.origin.equals(this.origin)&&I.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(I,i,o,r,c,y,w,R,G,N,J,b,Y,P,V,L){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],I!==void 0&&this.set(I,i,o,r,c,y,w,R,G,N,J,b,Y,P,V,L)}set(I,i,o,r,c,y,w,R,G,N,J,b,Y,P,V,L){const U=this.elements;return U[0]=I,U[4]=i,U[8]=o,U[12]=r,U[1]=c,U[5]=y,U[9]=w,U[13]=R,U[2]=G,U[6]=N,U[10]=J,U[14]=b,U[3]=Y,U[7]=P,U[11]=V,U[15]=L,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(I){const i=this.elements,o=I.elements;return i[0]=o[0],i[1]=o[1],i[2]=o[2],i[3]=o[3],i[4]=o[4],i[5]=o[5],i[6]=o[6],i[7]=o[7],i[8]=o[8],i[9]=o[9],i[10]=o[10],i[11]=o[11],i[12]=o[12],i[13]=o[13],i[14]=o[14],i[15]=o[15],this}copyPosition(I){const i=this.elements,o=I.elements;return i[12]=o[12],i[13]=o[13],i[14]=o[14],this}setFromMatrix3(I){const i=I.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(I,i,o){return I.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),o.setFromMatrixColumn(this,2),this}makeBasis(I,i,o){return this.set(I.x,i.x,o.x,0,I.y,i.y,o.y,0,I.z,i.z,o.z,0,0,0,0,1),this}extractRotation(I){const i=this.elements,o=I.elements,r=1/SE.setFromMatrixColumn(I,0).length(),c=1/SE.setFromMatrixColumn(I,1).length(),y=1/SE.setFromMatrixColumn(I,2).length();return i[0]=o[0]*r,i[1]=o[1]*r,i[2]=o[2]*r,i[3]=0,i[4]=o[4]*c,i[5]=o[5]*c,i[6]=o[6]*c,i[7]=0,i[8]=o[8]*y,i[9]=o[9]*y,i[10]=o[10]*y,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(I){const i=this.elements,o=I.x,r=I.y,c=I.z,y=Math.cos(o),w=Math.sin(o),R=Math.cos(r),G=Math.sin(r),N=Math.cos(c),J=Math.sin(c);if(I.order==="XYZ"){const b=y*N,Y=y*J,P=w*N,V=w*J;i[0]=R*N,i[4]=-R*J,i[8]=G,i[1]=Y+P*G,i[5]=b-V*G,i[9]=-w*R,i[2]=V-b*G,i[6]=P+Y*G,i[10]=y*R}else if(I.order==="YXZ"){const b=R*N,Y=R*J,P=G*N,V=G*J;i[0]=b+V*w,i[4]=P*w-Y,i[8]=y*G,i[1]=y*J,i[5]=y*N,i[9]=-w,i[2]=Y*w-P,i[6]=V+b*w,i[10]=y*R}else if(I.order==="ZXY"){const b=R*N,Y=R*J,P=G*N,V=G*J;i[0]=b-V*w,i[4]=-y*J,i[8]=P+Y*w,i[1]=Y+P*w,i[5]=y*N,i[9]=V-b*w,i[2]=-y*G,i[6]=w,i[10]=y*R}else if(I.order==="ZYX"){const b=y*N,Y=y*J,P=w*N,V=w*J;i[0]=R*N,i[4]=P*G-Y,i[8]=b*G+V,i[1]=R*J,i[5]=V*G+b,i[9]=Y*G-P,i[2]=-G,i[6]=w*R,i[10]=y*R}else if(I.order==="YZX"){const b=y*R,Y=y*G,P=w*R,V=w*G;i[0]=R*N,i[4]=V-b*J,i[8]=P*J+Y,i[1]=J,i[5]=y*N,i[9]=-w*N,i[2]=-G*N,i[6]=Y*J+P,i[10]=b-V*J}else if(I.order==="XZY"){const b=y*R,Y=y*G,P=w*R,V=w*G;i[0]=R*N,i[4]=-J,i[8]=G*N,i[1]=b*J+V,i[5]=y*N,i[9]=Y*J-P,i[2]=P*J-Y,i[6]=w*N,i[10]=V*J+b}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(I){return this.compose(c0,I,l0)}lookAt(I,i,o){const r=this.elements;return ti.subVectors(I,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),AC.crossVectors(o,ti),AC.lengthSq()===0&&(Math.abs(o.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),AC.crossVectors(o,ti)),AC.normalize(),$o.crossVectors(ti,AC),r[0]=AC.x,r[4]=$o.x,r[8]=ti.x,r[1]=AC.y,r[5]=$o.y,r[9]=ti.y,r[2]=AC.z,r[6]=$o.z,r[10]=ti.z,this}multiply(I){return this.multiplyMatrices(this,I)}premultiply(I){return this.multiplyMatrices(I,this)}multiplyMatrices(I,i){const o=I.elements,r=i.elements,c=this.elements,y=o[0],w=o[4],R=o[8],G=o[12],N=o[1],J=o[5],b=o[9],Y=o[13],P=o[2],V=o[6],L=o[10],U=o[14],fA=o[3],BA=o[7],CA=o[11],DA=o[15],MA=r[0],yA=r[4],Bg=r[8],Z=r[12],oA=r[1],Cg=r[5],ag=r[9],YA=r[13],WA=r[2],zA=r[6],lg=r[10],q=r[14],O=r[3],EA=r[7],nA=r[11],sA=r[15];return c[0]=y*MA+w*oA+R*WA+G*O,c[4]=y*yA+w*Cg+R*zA+G*EA,c[8]=y*Bg+w*ag+R*lg+G*nA,c[12]=y*Z+w*YA+R*q+G*sA,c[1]=N*MA+J*oA+b*WA+Y*O,c[5]=N*yA+J*Cg+b*zA+Y*EA,c[9]=N*Bg+J*ag+b*lg+Y*nA,c[13]=N*Z+J*YA+b*q+Y*sA,c[2]=P*MA+V*oA+L*WA+U*O,c[6]=P*yA+V*Cg+L*zA+U*EA,c[10]=P*Bg+V*ag+L*lg+U*nA,c[14]=P*Z+V*YA+L*q+U*sA,c[3]=fA*MA+BA*oA+CA*WA+DA*O,c[7]=fA*yA+BA*Cg+CA*zA+DA*EA,c[11]=fA*Bg+BA*ag+CA*lg+DA*nA,c[15]=fA*Z+BA*YA+CA*q+DA*sA,this}multiplyScalar(I){const i=this.elements;return i[0]*=I,i[4]*=I,i[8]*=I,i[12]*=I,i[1]*=I,i[5]*=I,i[9]*=I,i[13]*=I,i[2]*=I,i[6]*=I,i[10]*=I,i[14]*=I,i[3]*=I,i[7]*=I,i[11]*=I,i[15]*=I,this}determinant(){const I=this.elements,i=I[0],o=I[4],r=I[8],c=I[12],y=I[1],w=I[5],R=I[9],G=I[13],N=I[2],J=I[6],b=I[10],Y=I[14],P=I[3],V=I[7],L=I[11],U=I[15];return P*(+c*R*J-r*G*J-c*w*b+o*G*b+r*w*Y-o*R*Y)+V*(+i*R*Y-i*G*b+c*y*b-r*y*Y+r*G*N-c*R*N)+L*(+i*G*J-i*w*Y-c*y*J+o*y*Y+c*w*N-o*G*N)+U*(-r*w*N-i*R*J+i*w*b+r*y*J-o*y*b+o*R*N)}transpose(){const I=this.elements;let i;return i=I[1],I[1]=I[4],I[4]=i,i=I[2],I[2]=I[8],I[8]=i,i=I[6],I[6]=I[9],I[9]=i,i=I[3],I[3]=I[12],I[12]=i,i=I[7],I[7]=I[13],I[13]=i,i=I[11],I[11]=I[14],I[14]=i,this}setPosition(I,i,o){const r=this.elements;return I.isVector3?(r[12]=I.x,r[13]=I.y,r[14]=I.z):(r[12]=I,r[13]=i,r[14]=o),this}invert(){const I=this.elements,i=I[0],o=I[1],r=I[2],c=I[3],y=I[4],w=I[5],R=I[6],G=I[7],N=I[8],J=I[9],b=I[10],Y=I[11],P=I[12],V=I[13],L=I[14],U=I[15],fA=J*L*G-V*b*G+V*R*Y-w*L*Y-J*R*U+w*b*U,BA=P*b*G-N*L*G-P*R*Y+y*L*Y+N*R*U-y*b*U,CA=N*V*G-P*J*G+P*w*Y-y*V*Y-N*w*U+y*J*U,DA=P*J*R-N*V*R-P*w*b+y*V*b+N*w*L-y*J*L,MA=i*fA+o*BA+r*CA+c*DA;if(MA===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const yA=1/MA;return I[0]=fA*yA,I[1]=(V*b*c-J*L*c-V*r*Y+o*L*Y+J*r*U-o*b*U)*yA,I[2]=(w*L*c-V*R*c+V*r*G-o*L*G-w*r*U+o*R*U)*yA,I[3]=(J*R*c-w*b*c-J*r*G+o*b*G+w*r*Y-o*R*Y)*yA,I[4]=BA*yA,I[5]=(N*L*c-P*b*c+P*r*Y-i*L*Y-N*r*U+i*b*U)*yA,I[6]=(P*R*c-y*L*c-P*r*G+i*L*G+y*r*U-i*R*U)*yA,I[7]=(y*b*c-N*R*c+N*r*G-i*b*G-y*r*Y+i*R*Y)*yA,I[8]=CA*yA,I[9]=(P*J*c-N*V*c-P*o*Y+i*V*Y+N*o*U-i*J*U)*yA,I[10]=(y*V*c-P*w*c+P*o*G-i*V*G-y*o*U+i*w*U)*yA,I[11]=(N*w*c-y*J*c-N*o*G+i*J*G+y*o*Y-i*w*Y)*yA,I[12]=DA*yA,I[13]=(N*V*r-P*J*r+P*o*b-i*V*b-N*o*L+i*J*L)*yA,I[14]=(P*w*r-y*V*r-P*o*R+i*V*R+y*o*L-i*w*L)*yA,I[15]=(y*J*r-N*w*r+N*o*R-i*J*R-y*o*b+i*w*b)*yA,this}scale(I){const i=this.elements,o=I.x,r=I.y,c=I.z;return i[0]*=o,i[4]*=r,i[8]*=c,i[1]*=o,i[5]*=r,i[9]*=c,i[2]*=o,i[6]*=r,i[10]*=c,i[3]*=o,i[7]*=r,i[11]*=c,this}getMaxScaleOnAxis(){const I=this.elements,i=I[0]*I[0]+I[1]*I[1]+I[2]*I[2],o=I[4]*I[4]+I[5]*I[5]+I[6]*I[6],r=I[8]*I[8]+I[9]*I[9]+I[10]*I[10];return Math.sqrt(Math.max(i,o,r))}makeTranslation(I,i,o){return I.isVector3?this.set(1,0,0,I.x,0,1,0,I.y,0,0,1,I.z,0,0,0,1):this.set(1,0,0,I,0,1,0,i,0,0,1,o,0,0,0,1),this}makeRotationX(I){const i=Math.cos(I),o=Math.sin(I);return this.set(1,0,0,0,0,i,-o,0,0,o,i,0,0,0,0,1),this}makeRotationY(I){const i=Math.cos(I),o=Math.sin(I);return this.set(i,0,o,0,0,1,0,0,-o,0,i,0,0,0,0,1),this}makeRotationZ(I){const i=Math.cos(I),o=Math.sin(I);return this.set(i,-o,0,0,o,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(I,i){const o=Math.cos(i),r=Math.sin(i),c=1-o,y=I.x,w=I.y,R=I.z,G=c*y,N=c*w;return this.set(G*y+o,G*w-r*R,G*R+r*w,0,G*w+r*R,N*w+o,N*R-r*y,0,G*R-r*w,N*R+r*y,c*R*R+o,0,0,0,0,1),this}makeScale(I,i,o){return this.set(I,0,0,0,0,i,0,0,0,0,o,0,0,0,0,1),this}makeShear(I,i,o,r,c,y){return this.set(1,o,c,0,I,1,y,0,i,r,1,0,0,0,0,1),this}compose(I,i,o){const r=this.elements,c=i._x,y=i._y,w=i._z,R=i._w,G=c+c,N=y+y,J=w+w,b=c*G,Y=c*N,P=c*J,V=y*N,L=y*J,U=w*J,fA=R*G,BA=R*N,CA=R*J,DA=o.x,MA=o.y,yA=o.z;return r[0]=(1-(V+U))*DA,r[1]=(Y+CA)*DA,r[2]=(P-BA)*DA,r[3]=0,r[4]=(Y-CA)*MA,r[5]=(1-(b+U))*MA,r[6]=(L+fA)*MA,r[7]=0,r[8]=(P+BA)*yA,r[9]=(L-fA)*yA,r[10]=(1-(b+V))*yA,r[11]=0,r[12]=I.x,r[13]=I.y,r[14]=I.z,r[15]=1,this}decompose(I,i,o){const r=this.elements;let c=SE.set(r[0],r[1],r[2]).length();const y=SE.set(r[4],r[5],r[6]).length(),w=SE.set(r[8],r[9],r[10]).length();this.determinant()<0&&(c=-c),I.x=r[12],I.y=r[13],I.z=r[14],xi.copy(this);const G=1/c,N=1/y,J=1/w;return xi.elements[0]*=G,xi.elements[1]*=G,xi.elements[2]*=G,xi.elements[4]*=N,xi.elements[5]*=N,xi.elements[6]*=N,xi.elements[8]*=J,xi.elements[9]*=J,xi.elements[10]*=J,i.setFromRotationMatrix(xi),o.x=c,o.y=y,o.z=w,this}makePerspective(I,i,o,r,c,y,w=FB){const R=this.elements,G=2*c/(i-I),N=2*c/(o-r),J=(i+I)/(i-I),b=(o+r)/(o-r);let Y,P;if(w===FB)Y=-(y+c)/(y-c),P=-2*y*c/(y-c);else if(w===un)Y=-y/(y-c),P=-y*c/(y-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+w);return R[0]=G,R[4]=0,R[8]=J,R[12]=0,R[1]=0,R[5]=N,R[9]=b,R[13]=0,R[2]=0,R[6]=0,R[10]=Y,R[14]=P,R[3]=0,R[7]=0,R[11]=-1,R[15]=0,this}makeOrthographic(I,i,o,r,c,y,w=FB){const R=this.elements,G=1/(i-I),N=1/(o-r),J=1/(y-c),b=(i+I)*G,Y=(o+r)*N;let P,V;if(w===FB)P=(y+c)*J,V=-2*J;else if(w===un)P=c*J,V=-1*J;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+w);return R[0]=2*G,R[4]=0,R[8]=0,R[12]=-b,R[1]=0,R[5]=2*N,R[9]=0,R[13]=-Y,R[2]=0,R[6]=0,R[10]=V,R[14]=-P,R[3]=0,R[7]=0,R[11]=0,R[15]=1,this}equals(I){const i=this.elements,o=I.elements;for(let r=0;r<16;r++)if(i[r]!==o[r])return!1;return!0}fromArray(I,i=0){for(let o=0;o<16;o++)this.elements[o]=I[o+i];return this}toArray(I=[],i=0){const o=this.elements;return I[i]=o[0],I[i+1]=o[1],I[i+2]=o[2],I[i+3]=o[3],I[i+4]=o[4],I[i+5]=o[5],I[i+6]=o[6],I[i+7]=o[7],I[i+8]=o[8],I[i+9]=o[9],I[i+10]=o[10],I[i+11]=o[11],I[i+12]=o[12],I[i+13]=o[13],I[i+14]=o[14],I[i+15]=o[15],I}}const SE=new $A,xi=new we,c0=new $A(0,0,0),l0=new $A(1,1,1),AC=new $A,$o=new $A,ti=new $A,yc=new we,Mc=new zQ;class yn{constructor(I=0,i=0,o=0,r=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=I,this._y=i,this._z=o,this._order=r}get x(){return this._x}set x(I){this._x=I,this._onChangeCallback()}get y(){return this._y}set y(I){this._y=I,this._onChangeCallback()}get z(){return this._z}set z(I){this._z=I,this._onChangeCallback()}get order(){return this._order}set order(I){this._order=I,this._onChangeCallback()}set(I,i,o,r=this._order){return this._x=I,this._y=i,this._z=o,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(I){return this._x=I._x,this._y=I._y,this._z=I._z,this._order=I._order,this._onChangeCallback(),this}setFromRotationMatrix(I,i=this._order,o=!0){const r=I.elements,c=r[0],y=r[4],w=r[8],R=r[1],G=r[5],N=r[9],J=r[2],b=r[6],Y=r[10];switch(i){case"XYZ":this._y=Math.asin(We(w,-1,1)),Math.abs(w)<.9999999?(this._x=Math.atan2(-N,Y),this._z=Math.atan2(-y,c)):(this._x=Math.atan2(b,G),this._z=0);break;case"YXZ":this._x=Math.asin(-We(N,-1,1)),Math.abs(N)<.9999999?(this._y=Math.atan2(w,Y),this._z=Math.atan2(R,G)):(this._y=Math.atan2(-J,c),this._z=0);break;case"ZXY":this._x=Math.asin(We(b,-1,1)),Math.abs(b)<.9999999?(this._y=Math.atan2(-J,Y),this._z=Math.atan2(-y,G)):(this._y=0,this._z=Math.atan2(R,c));break;case"ZYX":this._y=Math.asin(-We(J,-1,1)),Math.abs(J)<.9999999?(this._x=Math.atan2(b,Y),this._z=Math.atan2(R,c)):(this._x=0,this._z=Math.atan2(-y,G));break;case"YZX":this._z=Math.asin(We(R,-1,1)),Math.abs(R)<.9999999?(this._x=Math.atan2(-N,G),this._y=Math.atan2(-J,c)):(this._x=0,this._y=Math.atan2(w,Y));break;case"XZY":this._z=Math.asin(-We(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(b,G),this._y=Math.atan2(w,c)):(this._x=Math.atan2(-N,Y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,o===!0&&this._onChangeCallback(),this}setFromQuaternion(I,i,o){return yc.makeRotationFromQuaternion(I),this.setFromRotationMatrix(yc,i,o)}setFromVector3(I,i=this._order){return this.set(I.x,I.y,I.z,i)}reorder(I){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,I)}equals(I){return I._x===this._x&&I._y===this._y&&I._z===this._z&&I._order===this._order}fromArray(I){return this._x=I[0],this._y=I[1],this._z=I[2],I[3]!==void 0&&(this._order=I[3]),this._onChangeCallback(),this}toArray(I=[],i=0){return I[i]=this._x,I[i+1]=this._y,I[i+2]=this._z,I[i+3]=this._order,I}_onChange(I){return this._onChangeCallback=I,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Dl{constructor(){this.mask=1}set(I){this.mask=(1<<I|0)>>>0}enable(I){this.mask|=1<<I|0}enableAll(){this.mask=-1}toggle(I){this.mask^=1<<I|0}disable(I){this.mask&=~(1<<I|0)}disableAll(){this.mask=0}test(I){return(this.mask&I.mask)!==0}isEnabled(I){return(this.mask&(1<<I|0))!==0}}let d0=0;const mc=new $A,GE=new zQ,MB=new we,An=new $A,TQ=new $A,u0=new $A,D0=new zQ,Rc=new $A(1,0,0),Sc=new $A(0,1,0),Gc=new $A(0,0,1),w0={type:"added"},f0={type:"removed"};class Me extends zE{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=XQ(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const I=new $A,i=new yn,o=new zQ,r=new $A(1,1,1);function c(){o.setFromEuler(i,!1)}function y(){i.setFromQuaternion(o,void 0,!1)}i._onChange(c),o._onChange(y),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:I},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new we},normalMatrix:{value:new jI}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(I){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(I),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(I){return this.quaternion.premultiply(I),this}setRotationFromAxisAngle(I,i){this.quaternion.setFromAxisAngle(I,i)}setRotationFromEuler(I){this.quaternion.setFromEuler(I,!0)}setRotationFromMatrix(I){this.quaternion.setFromRotationMatrix(I)}setRotationFromQuaternion(I){this.quaternion.copy(I)}rotateOnAxis(I,i){return GE.setFromAxisAngle(I,i),this.quaternion.multiply(GE),this}rotateOnWorldAxis(I,i){return GE.setFromAxisAngle(I,i),this.quaternion.premultiply(GE),this}rotateX(I){return this.rotateOnAxis(Rc,I)}rotateY(I){return this.rotateOnAxis(Sc,I)}rotateZ(I){return this.rotateOnAxis(Gc,I)}translateOnAxis(I,i){return mc.copy(I).applyQuaternion(this.quaternion),this.position.add(mc.multiplyScalar(i)),this}translateX(I){return this.translateOnAxis(Rc,I)}translateY(I){return this.translateOnAxis(Sc,I)}translateZ(I){return this.translateOnAxis(Gc,I)}localToWorld(I){return this.updateWorldMatrix(!0,!1),I.applyMatrix4(this.matrixWorld)}worldToLocal(I){return this.updateWorldMatrix(!0,!1),I.applyMatrix4(MB.copy(this.matrixWorld).invert())}lookAt(I,i,o){I.isVector3?An.copy(I):An.set(I,i,o);const r=this.parent;this.updateWorldMatrix(!0,!1),TQ.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?MB.lookAt(TQ,An,this.up):MB.lookAt(An,TQ,this.up),this.quaternion.setFromRotationMatrix(MB),r&&(MB.extractRotation(r.matrixWorld),GE.setFromRotationMatrix(MB),this.quaternion.premultiply(GE.invert()))}add(I){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return I===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",I),this):(I&&I.isObject3D?(I.parent!==null&&I.parent.remove(I),I.parent=this,this.children.push(I),I.dispatchEvent(w0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",I),this)}remove(I){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}const i=this.children.indexOf(I);return i!==-1&&(I.parent=null,this.children.splice(i,1),I.dispatchEvent(f0)),this}removeFromParent(){const I=this.parent;return I!==null&&I.remove(this),this}clear(){return this.remove(...this.children)}attach(I){return this.updateWorldMatrix(!0,!1),MB.copy(this.matrixWorld).invert(),I.parent!==null&&(I.parent.updateWorldMatrix(!0,!1),MB.multiply(I.parent.matrixWorld)),I.applyMatrix4(MB),this.add(I),I.updateWorldMatrix(!1,!0),this}getObjectById(I){return this.getObjectByProperty("id",I)}getObjectByName(I){return this.getObjectByProperty("name",I)}getObjectByProperty(I,i){if(this[I]===i)return this;for(let o=0,r=this.children.length;o<r;o++){const y=this.children[o].getObjectByProperty(I,i);if(y!==void 0)return y}}getObjectsByProperty(I,i){let o=[];this[I]===i&&o.push(this);for(let r=0,c=this.children.length;r<c;r++){const y=this.children[r].getObjectsByProperty(I,i);y.length>0&&(o=o.concat(y))}return o}getWorldPosition(I){return this.updateWorldMatrix(!0,!1),I.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(I){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(TQ,I,u0),I}getWorldScale(I){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(TQ,D0,I),I}getWorldDirection(I){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return I.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(I){I(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].traverse(I)}traverseVisible(I){if(this.visible===!1)return;I(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].traverseVisible(I)}traverseAncestors(I){const i=this.parent;i!==null&&(I(i),i.traverseAncestors(I))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(I){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||I)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,I=!0);const i=this.children;for(let o=0,r=i.length;o<r;o++){const c=i[o];(c.matrixWorldAutoUpdate===!0||I===!0)&&c.updateMatrixWorld(I)}}updateWorldMatrix(I,i){const o=this.parent;if(I===!0&&o!==null&&o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const r=this.children;for(let c=0,y=r.length;c<y;c++){const w=r[c];w.matrixWorldAutoUpdate===!0&&w.updateWorldMatrix(!1,!0)}}}toJSON(I){const i=I===void 0||typeof I=="string",o={};i&&(I={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function c(w,R){return w[R.uuid]===void 0&&(w[R.uuid]=R.toJSON(I)),R.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(I).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(I).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=c(I.geometries,this.geometry);const w=this.geometry.parameters;if(w!==void 0&&w.shapes!==void 0){const R=w.shapes;if(Array.isArray(R))for(let G=0,N=R.length;G<N;G++){const J=R[G];c(I.shapes,J)}else c(I.shapes,R)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(I.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const w=[];for(let R=0,G=this.material.length;R<G;R++)w.push(c(I.materials,this.material[R]));r.material=w}else r.material=c(I.materials,this.material);if(this.children.length>0){r.children=[];for(let w=0;w<this.children.length;w++)r.children.push(this.children[w].toJSON(I).object)}if(this.animations.length>0){r.animations=[];for(let w=0;w<this.animations.length;w++){const R=this.animations[w];r.animations.push(c(I.animations,R))}}if(i){const w=y(I.geometries),R=y(I.materials),G=y(I.textures),N=y(I.images),J=y(I.shapes),b=y(I.skeletons),Y=y(I.animations),P=y(I.nodes);w.length>0&&(o.geometries=w),R.length>0&&(o.materials=R),G.length>0&&(o.textures=G),N.length>0&&(o.images=N),J.length>0&&(o.shapes=J),b.length>0&&(o.skeletons=b),Y.length>0&&(o.animations=Y),P.length>0&&(o.nodes=P)}return o.object=r,o;function y(w){const R=[];for(const G in w){const N=w[G];delete N.metadata,R.push(N)}return R}}clone(I){return new this.constructor().copy(this,I)}copy(I,i=!0){if(this.name=I.name,this.up.copy(I.up),this.position.copy(I.position),this.rotation.order=I.rotation.order,this.quaternion.copy(I.quaternion),this.scale.copy(I.scale),this.matrix.copy(I.matrix),this.matrixWorld.copy(I.matrixWorld),this.matrixAutoUpdate=I.matrixAutoUpdate,this.matrixWorldNeedsUpdate=I.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=I.matrixWorldAutoUpdate,this.layers.mask=I.layers.mask,this.visible=I.visible,this.castShadow=I.castShadow,this.receiveShadow=I.receiveShadow,this.frustumCulled=I.frustumCulled,this.renderOrder=I.renderOrder,this.animations=I.animations.slice(),this.userData=JSON.parse(JSON.stringify(I.userData)),i===!0)for(let o=0;o<I.children.length;o++){const r=I.children[o];this.add(r.clone())}return this}}Me.DEFAULT_UP=new $A(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ji=new $A,mB=new $A,Wa=new $A,RB=new $A,FE=new $A,NE=new $A,Fc=new $A,Oa=new $A,Pa=new $A,Va=new $A;let gn=!1;class Ki{constructor(I=new $A,i=new $A,o=new $A){this.a=I,this.b=i,this.c=o}static getNormal(I,i,o,r){r.subVectors(o,i),Ji.subVectors(I,i),r.cross(Ji);const c=r.lengthSq();return c>0?r.multiplyScalar(1/Math.sqrt(c)):r.set(0,0,0)}static getBarycoord(I,i,o,r,c){Ji.subVectors(r,i),mB.subVectors(o,i),Wa.subVectors(I,i);const y=Ji.dot(Ji),w=Ji.dot(mB),R=Ji.dot(Wa),G=mB.dot(mB),N=mB.dot(Wa),J=y*G-w*w;if(J===0)return c.set(-2,-1,-1);const b=1/J,Y=(G*R-w*N)*b,P=(y*N-w*R)*b;return c.set(1-Y-P,P,Y)}static containsPoint(I,i,o,r){return this.getBarycoord(I,i,o,r,RB),RB.x>=0&&RB.y>=0&&RB.x+RB.y<=1}static getUV(I,i,o,r,c,y,w,R){return gn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gn=!0),this.getInterpolation(I,i,o,r,c,y,w,R)}static getInterpolation(I,i,o,r,c,y,w,R){return this.getBarycoord(I,i,o,r,RB),R.setScalar(0),R.addScaledVector(c,RB.x),R.addScaledVector(y,RB.y),R.addScaledVector(w,RB.z),R}static isFrontFacing(I,i,o,r){return Ji.subVectors(o,i),mB.subVectors(I,i),Ji.cross(mB).dot(r)<0}set(I,i,o){return this.a.copy(I),this.b.copy(i),this.c.copy(o),this}setFromPointsAndIndices(I,i,o,r){return this.a.copy(I[i]),this.b.copy(I[o]),this.c.copy(I[r]),this}setFromAttributeAndIndices(I,i,o,r){return this.a.fromBufferAttribute(I,i),this.b.fromBufferAttribute(I,o),this.c.fromBufferAttribute(I,r),this}clone(){return new this.constructor().copy(this)}copy(I){return this.a.copy(I.a),this.b.copy(I.b),this.c.copy(I.c),this}getArea(){return Ji.subVectors(this.c,this.b),mB.subVectors(this.a,this.b),Ji.cross(mB).length()*.5}getMidpoint(I){return I.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(I){return Ki.getNormal(this.a,this.b,this.c,I)}getPlane(I){return I.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(I,i){return Ki.getBarycoord(I,this.a,this.b,this.c,i)}getUV(I,i,o,r,c){return gn===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gn=!0),Ki.getInterpolation(I,this.a,this.b,this.c,i,o,r,c)}getInterpolation(I,i,o,r,c){return Ki.getInterpolation(I,this.a,this.b,this.c,i,o,r,c)}containsPoint(I){return Ki.containsPoint(I,this.a,this.b,this.c)}isFrontFacing(I){return Ki.isFrontFacing(this.a,this.b,this.c,I)}intersectsBox(I){return I.intersectsTriangle(this)}closestPointToPoint(I,i){const o=this.a,r=this.b,c=this.c;let y,w;FE.subVectors(r,o),NE.subVectors(c,o),Oa.subVectors(I,o);const R=FE.dot(Oa),G=NE.dot(Oa);if(R<=0&&G<=0)return i.copy(o);Pa.subVectors(I,r);const N=FE.dot(Pa),J=NE.dot(Pa);if(N>=0&&J<=N)return i.copy(r);const b=R*J-N*G;if(b<=0&&R>=0&&N<=0)return y=R/(R-N),i.copy(o).addScaledVector(FE,y);Va.subVectors(I,c);const Y=FE.dot(Va),P=NE.dot(Va);if(P>=0&&Y<=P)return i.copy(c);const V=Y*G-R*P;if(V<=0&&G>=0&&P<=0)return w=G/(G-P),i.copy(o).addScaledVector(NE,w);const L=N*P-Y*J;if(L<=0&&J-N>=0&&Y-P>=0)return Fc.subVectors(c,r),w=(J-N)/(J-N+(Y-P)),i.copy(r).addScaledVector(Fc,w);const U=1/(L+V+b);return y=V*U,w=b*U,i.copy(o).addScaledVector(FE,y).addScaledVector(NE,w)}equals(I){return I.a.equals(this.a)&&I.b.equals(this.b)&&I.c.equals(this.c)}}let p0=0;class $Q extends zE{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=XQ(),this.name="",this.type="Material",this.blending=TE,this.side=BC,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=Bl,this.blendEquation=YE,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=PD,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ka,this.stencilZFail=ka,this.stencilZPass=ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(I){this._alphaTest>0!=I>0&&this.version++,this._alphaTest=I}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(I){if(I!==void 0)for(const i in I){const o=I[i];if(o===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const r=this[i];if(r===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(o):r&&r.isVector3&&o&&o.isVector3?r.copy(o):this[i]=o}}toJSON(I){const i=I===void 0||typeof I=="string";i&&(I={textures:{},images:{}});const o={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.color&&this.color.isColor&&(o.color=this.color.getHex()),this.roughness!==void 0&&(o.roughness=this.roughness),this.metalness!==void 0&&(o.metalness=this.metalness),this.sheen!==void 0&&(o.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(o.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(o.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(o.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(o.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(o.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(o.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(o.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(o.shininess=this.shininess),this.clearcoat!==void 0&&(o.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(o.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(o.clearcoatMap=this.clearcoatMap.toJSON(I).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(o.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(I).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(o.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(I).uuid,o.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(o.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(o.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(o.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(o.iridescenceMap=this.iridescenceMap.toJSON(I).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(o.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(I).uuid),this.anisotropy!==void 0&&(o.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(o.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(o.anisotropyMap=this.anisotropyMap.toJSON(I).uuid),this.map&&this.map.isTexture&&(o.map=this.map.toJSON(I).uuid),this.matcap&&this.matcap.isTexture&&(o.matcap=this.matcap.toJSON(I).uuid),this.alphaMap&&this.alphaMap.isTexture&&(o.alphaMap=this.alphaMap.toJSON(I).uuid),this.lightMap&&this.lightMap.isTexture&&(o.lightMap=this.lightMap.toJSON(I).uuid,o.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(o.aoMap=this.aoMap.toJSON(I).uuid,o.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(o.bumpMap=this.bumpMap.toJSON(I).uuid,o.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(o.normalMap=this.normalMap.toJSON(I).uuid,o.normalMapType=this.normalMapType,o.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(o.displacementMap=this.displacementMap.toJSON(I).uuid,o.displacementScale=this.displacementScale,o.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(o.roughnessMap=this.roughnessMap.toJSON(I).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(o.metalnessMap=this.metalnessMap.toJSON(I).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(o.emissiveMap=this.emissiveMap.toJSON(I).uuid),this.specularMap&&this.specularMap.isTexture&&(o.specularMap=this.specularMap.toJSON(I).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(o.specularIntensityMap=this.specularIntensityMap.toJSON(I).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(o.specularColorMap=this.specularColorMap.toJSON(I).uuid),this.envMap&&this.envMap.isTexture&&(o.envMap=this.envMap.toJSON(I).uuid,this.combine!==void 0&&(o.combine=this.combine)),this.envMapIntensity!==void 0&&(o.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(o.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(o.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(o.gradientMap=this.gradientMap.toJSON(I).uuid),this.transmission!==void 0&&(o.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(o.transmissionMap=this.transmissionMap.toJSON(I).uuid),this.thickness!==void 0&&(o.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(o.thicknessMap=this.thicknessMap.toJSON(I).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(o.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(o.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(o.size=this.size),this.shadowSide!==null&&(o.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(o.sizeAttenuation=this.sizeAttenuation),this.blending!==TE&&(o.blending=this.blending),this.side!==BC&&(o.side=this.side),this.vertexColors&&(o.vertexColors=!0),this.opacity<1&&(o.opacity=this.opacity),this.transparent===!0&&(o.transparent=this.transparent),o.depthFunc=this.depthFunc,o.depthTest=this.depthTest,o.depthWrite=this.depthWrite,o.colorWrite=this.colorWrite,o.stencilWrite=this.stencilWrite,o.stencilWriteMask=this.stencilWriteMask,o.stencilFunc=this.stencilFunc,o.stencilRef=this.stencilRef,o.stencilFuncMask=this.stencilFuncMask,o.stencilFail=this.stencilFail,o.stencilZFail=this.stencilZFail,o.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(o.rotation=this.rotation),this.polygonOffset===!0&&(o.polygonOffset=!0),this.polygonOffsetFactor!==0&&(o.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(o.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(o.linewidth=this.linewidth),this.dashSize!==void 0&&(o.dashSize=this.dashSize),this.gapSize!==void 0&&(o.gapSize=this.gapSize),this.scale!==void 0&&(o.scale=this.scale),this.dithering===!0&&(o.dithering=!0),this.alphaTest>0&&(o.alphaTest=this.alphaTest),this.alphaHash===!0&&(o.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(o.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(o.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(o.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(o.wireframe=this.wireframe),this.wireframeLinewidth>1&&(o.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(o.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(o.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(o.flatShading=this.flatShading),this.visible===!1&&(o.visible=!1),this.toneMapped===!1&&(o.toneMapped=!1),this.fog===!1&&(o.fog=!1),Object.keys(this.userData).length>0&&(o.userData=this.userData);function r(c){const y=[];for(const w in c){const R=c[w];delete R.metadata,y.push(R)}return y}if(i){const c=r(I.textures),y=r(I.images);c.length>0&&(o.textures=c),y.length>0&&(o.images=y)}return o}clone(){return new this.constructor().copy(this)}copy(I){this.name=I.name,this.blending=I.blending,this.side=I.side,this.vertexColors=I.vertexColors,this.opacity=I.opacity,this.transparent=I.transparent,this.blendSrc=I.blendSrc,this.blendDst=I.blendDst,this.blendEquation=I.blendEquation,this.blendSrcAlpha=I.blendSrcAlpha,this.blendDstAlpha=I.blendDstAlpha,this.blendEquationAlpha=I.blendEquationAlpha,this.depthFunc=I.depthFunc,this.depthTest=I.depthTest,this.depthWrite=I.depthWrite,this.stencilWriteMask=I.stencilWriteMask,this.stencilFunc=I.stencilFunc,this.stencilRef=I.stencilRef,this.stencilFuncMask=I.stencilFuncMask,this.stencilFail=I.stencilFail,this.stencilZFail=I.stencilZFail,this.stencilZPass=I.stencilZPass,this.stencilWrite=I.stencilWrite;const i=I.clippingPlanes;let o=null;if(i!==null){const r=i.length;o=new Array(r);for(let c=0;c!==r;++c)o[c]=i[c].clone()}return this.clippingPlanes=o,this.clipIntersection=I.clipIntersection,this.clipShadows=I.clipShadows,this.shadowSide=I.shadowSide,this.colorWrite=I.colorWrite,this.precision=I.precision,this.polygonOffset=I.polygonOffset,this.polygonOffsetFactor=I.polygonOffsetFactor,this.polygonOffsetUnits=I.polygonOffsetUnits,this.dithering=I.dithering,this.alphaTest=I.alphaTest,this.alphaHash=I.alphaHash,this.alphaToCoverage=I.alphaToCoverage,this.premultipliedAlpha=I.premultipliedAlpha,this.forceSinglePass=I.forceSinglePass,this.visible=I.visible,this.toneMapped=I.toneMapped,this.userData=JSON.parse(JSON.stringify(I.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(I){I===!0&&this.version++}}const wl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},In={h:0,s:0,l:0};function Za(E,I,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?E+(I-E)*6*i:i<1/2?I:i<2/3?E+(I-E)*6*(2/3-i):E}class lt{constructor(I,i,o){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(I,i,o)}set(I,i,o){if(i===void 0&&o===void 0){const r=I;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(I,i,o);return this}setScalar(I){return this.r=I,this.g=I,this.b=I,this}setHex(I,i=bt){return I=Math.floor(I),this.r=(I>>16&255)/255,this.g=(I>>8&255)/255,this.b=(I&255)/255,Li.toWorkingColorSpace(this,i),this}setRGB(I,i,o,r=Li.workingColorSpace){return this.r=I,this.g=i,this.b=o,Li.toWorkingColorSpace(this,r),this}setHSL(I,i,o,r=Li.workingColorSpace){if(I=I0(I,1),i=We(i,0,1),o=We(o,0,1),i===0)this.r=this.g=this.b=o;else{const c=o<=.5?o*(1+i):o+i-o*i,y=2*o-c;this.r=Za(y,c,I+1/3),this.g=Za(y,c,I),this.b=Za(y,c,I-1/3)}return Li.toWorkingColorSpace(this,r),this}setStyle(I,i=bt){function o(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+I+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(I)){let c;const y=r[1],w=r[2];switch(y){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(w))return o(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(w))return o(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(w))return o(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+I)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(I)){const c=r[1],y=c.length;if(y===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(y===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+I)}else if(I&&I.length>0)return this.setColorName(I,i);return this}setColorName(I,i=bt){const o=wl[I.toLowerCase()];return o!==void 0?this.setHex(o,i):console.warn("THREE.Color: Unknown color "+I),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(I){return this.r=I.r,this.g=I.g,this.b=I.b,this}copySRGBToLinear(I){return this.r=_E(I.r),this.g=_E(I.g),this.b=_E(I.b),this}copyLinearToSRGB(I){return this.r=ba(I.r),this.g=ba(I.g),this.b=ba(I.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(I=bt){return Li.fromWorkingColorSpace(ye.copy(this),I),Math.round(We(ye.r*255,0,255))*65536+Math.round(We(ye.g*255,0,255))*256+Math.round(We(ye.b*255,0,255))}getHexString(I=bt){return("000000"+this.getHex(I).toString(16)).slice(-6)}getHSL(I,i=Li.workingColorSpace){Li.fromWorkingColorSpace(ye.copy(this),i);const o=ye.r,r=ye.g,c=ye.b,y=Math.max(o,r,c),w=Math.min(o,r,c);let R,G;const N=(w+y)/2;if(w===y)R=0,G=0;else{const J=y-w;switch(G=N<=.5?J/(y+w):J/(2-y-w),y){case o:R=(r-c)/J+(r<c?6:0);break;case r:R=(c-o)/J+2;break;case c:R=(o-r)/J+4;break}R/=6}return I.h=R,I.s=G,I.l=N,I}getRGB(I,i=Li.workingColorSpace){return Li.fromWorkingColorSpace(ye.copy(this),i),I.r=ye.r,I.g=ye.g,I.b=ye.b,I}getStyle(I=bt){Li.fromWorkingColorSpace(ye.copy(this),I);const i=ye.r,o=ye.g,r=ye.b;return I!==bt?`color(${I} ${i.toFixed(3)} ${o.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(o*255)},${Math.round(r*255)})`}offsetHSL(I,i,o){return this.getHSL(bi),bi.h+=I,bi.s+=i,bi.l+=o,this.setHSL(bi.h,bi.s,bi.l),this}add(I){return this.r+=I.r,this.g+=I.g,this.b+=I.b,this}addColors(I,i){return this.r=I.r+i.r,this.g=I.g+i.g,this.b=I.b+i.b,this}addScalar(I){return this.r+=I,this.g+=I,this.b+=I,this}sub(I){return this.r=Math.max(0,this.r-I.r),this.g=Math.max(0,this.g-I.g),this.b=Math.max(0,this.b-I.b),this}multiply(I){return this.r*=I.r,this.g*=I.g,this.b*=I.b,this}multiplyScalar(I){return this.r*=I,this.g*=I,this.b*=I,this}lerp(I,i){return this.r+=(I.r-this.r)*i,this.g+=(I.g-this.g)*i,this.b+=(I.b-this.b)*i,this}lerpColors(I,i,o){return this.r=I.r+(i.r-I.r)*o,this.g=I.g+(i.g-I.g)*o,this.b=I.b+(i.b-I.b)*o,this}lerpHSL(I,i){this.getHSL(bi),I.getHSL(In);const o=xa(bi.h,In.h,i),r=xa(bi.s,In.s,i),c=xa(bi.l,In.l,i);return this.setHSL(o,r,c),this}setFromVector3(I){return this.r=I.x,this.g=I.y,this.b=I.z,this}applyMatrix3(I){const i=this.r,o=this.g,r=this.b,c=I.elements;return this.r=c[0]*i+c[3]*o+c[6]*r,this.g=c[1]*i+c[4]*o+c[7]*r,this.b=c[2]*i+c[5]*o+c[8]*r,this}equals(I){return I.r===this.r&&I.g===this.g&&I.b===this.b}fromArray(I,i=0){return this.r=I[i],this.g=I[i+1],this.b=I[i+2],this}toArray(I=[],i=0){return I[i]=this.r,I[i+1]=this.g,I[i+2]=this.b,I}fromBufferAttribute(I,i){return this.r=I.getX(i),this.g=I.getY(i),this.b=I.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ye=new lt;lt.NAMES=wl;class fl extends $Q{constructor(I){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ss,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(I)}copy(I){return super.copy(I),this.color.copy(I.color),this.map=I.map,this.lightMap=I.lightMap,this.lightMapIntensity=I.lightMapIntensity,this.aoMap=I.aoMap,this.aoMapIntensity=I.aoMapIntensity,this.specularMap=I.specularMap,this.alphaMap=I.alphaMap,this.envMap=I.envMap,this.combine=I.combine,this.reflectivity=I.reflectivity,this.refractionRatio=I.refractionRatio,this.wireframe=I.wireframe,this.wireframeLinewidth=I.wireframeLinewidth,this.wireframeLinecap=I.wireframeLinecap,this.wireframeLinejoin=I.wireframeLinejoin,this.fog=I.fog,this}}const Xt=new $A,tn=new pt;class eB{constructor(I,i,o=!1){if(Array.isArray(I))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=I,this.itemSize=i,this.count=I!==void 0?I.length/i:0,this.normalized=o,this.usage=uc,this.updateRange={offset:0,count:-1},this.gpuType=IC,this.version=0}onUploadCallback(){}set needsUpdate(I){I===!0&&this.version++}setUsage(I){return this.usage=I,this}copy(I){return this.name=I.name,this.array=new I.array.constructor(I.array),this.itemSize=I.itemSize,this.count=I.count,this.normalized=I.normalized,this.usage=I.usage,this.gpuType=I.gpuType,this}copyAt(I,i,o){I*=this.itemSize,o*=i.itemSize;for(let r=0,c=this.itemSize;r<c;r++)this.array[I+r]=i.array[o+r];return this}copyArray(I){return this.array.set(I),this}applyMatrix3(I){if(this.itemSize===2)for(let i=0,o=this.count;i<o;i++)tn.fromBufferAttribute(this,i),tn.applyMatrix3(I),this.setXY(i,tn.x,tn.y);else if(this.itemSize===3)for(let i=0,o=this.count;i<o;i++)Xt.fromBufferAttribute(this,i),Xt.applyMatrix3(I),this.setXYZ(i,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(I){for(let i=0,o=this.count;i<o;i++)Xt.fromBufferAttribute(this,i),Xt.applyMatrix4(I),this.setXYZ(i,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(I){for(let i=0,o=this.count;i<o;i++)Xt.fromBufferAttribute(this,i),Xt.applyNormalMatrix(I),this.setXYZ(i,Xt.x,Xt.y,Xt.z);return this}transformDirection(I){for(let i=0,o=this.count;i<o;i++)Xt.fromBufferAttribute(this,i),Xt.transformDirection(I),this.setXYZ(i,Xt.x,Xt.y,Xt.z);return this}set(I,i=0){return this.array.set(I,i),this}getComponent(I,i){let o=this.array[I*this.itemSize+i];return this.normalized&&(o=YQ(o,this.array)),o}setComponent(I,i,o){return this.normalized&&(o=_e(o,this.array)),this.array[I*this.itemSize+i]=o,this}getX(I){let i=this.array[I*this.itemSize];return this.normalized&&(i=YQ(i,this.array)),i}setX(I,i){return this.normalized&&(i=_e(i,this.array)),this.array[I*this.itemSize]=i,this}getY(I){let i=this.array[I*this.itemSize+1];return this.normalized&&(i=YQ(i,this.array)),i}setY(I,i){return this.normalized&&(i=_e(i,this.array)),this.array[I*this.itemSize+1]=i,this}getZ(I){let i=this.array[I*this.itemSize+2];return this.normalized&&(i=YQ(i,this.array)),i}setZ(I,i){return this.normalized&&(i=_e(i,this.array)),this.array[I*this.itemSize+2]=i,this}getW(I){let i=this.array[I*this.itemSize+3];return this.normalized&&(i=YQ(i,this.array)),i}setW(I,i){return this.normalized&&(i=_e(i,this.array)),this.array[I*this.itemSize+3]=i,this}setXY(I,i,o){return I*=this.itemSize,this.normalized&&(i=_e(i,this.array),o=_e(o,this.array)),this.array[I+0]=i,this.array[I+1]=o,this}setXYZ(I,i,o,r){return I*=this.itemSize,this.normalized&&(i=_e(i,this.array),o=_e(o,this.array),r=_e(r,this.array)),this.array[I+0]=i,this.array[I+1]=o,this.array[I+2]=r,this}setXYZW(I,i,o,r,c){return I*=this.itemSize,this.normalized&&(i=_e(i,this.array),o=_e(o,this.array),r=_e(r,this.array),c=_e(c,this.array)),this.array[I+0]=i,this.array[I+1]=o,this.array[I+2]=r,this.array[I+3]=c,this}onUpload(I){return this.onUploadCallback=I,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const I={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(I.name=this.name),this.usage!==uc&&(I.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(I.updateRange=this.updateRange),I}}class pl extends eB{constructor(I,i,o){super(new Uint16Array(I),i,o)}}class yl extends eB{constructor(I,i,o){super(new Uint32Array(I),i,o)}}class iB extends eB{constructor(I,i,o){super(new Float32Array(I),i,o)}}let y0=0;const ci=new we,Xa=new Me,UE=new $A,ei=new jQ,_Q=new jQ,ne=new $A;class CC extends zE{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=XQ(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(I){return Array.isArray(I)?this.index=new(cl(I)?yl:pl)(I,1):this.index=I,this}getAttribute(I){return this.attributes[I]}setAttribute(I,i){return this.attributes[I]=i,this}deleteAttribute(I){return delete this.attributes[I],this}hasAttribute(I){return this.attributes[I]!==void 0}addGroup(I,i,o=0){this.groups.push({start:I,count:i,materialIndex:o})}clearGroups(){this.groups=[]}setDrawRange(I,i){this.drawRange.start=I,this.drawRange.count=i}applyMatrix4(I){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(I),i.needsUpdate=!0);const o=this.attributes.normal;if(o!==void 0){const c=new jI().getNormalMatrix(I);o.applyNormalMatrix(c),o.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(I),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(I){return ci.makeRotationFromQuaternion(I),this.applyMatrix4(ci),this}rotateX(I){return ci.makeRotationX(I),this.applyMatrix4(ci),this}rotateY(I){return ci.makeRotationY(I),this.applyMatrix4(ci),this}rotateZ(I){return ci.makeRotationZ(I),this.applyMatrix4(ci),this}translate(I,i,o){return ci.makeTranslation(I,i,o),this.applyMatrix4(ci),this}scale(I,i,o){return ci.makeScale(I,i,o),this.applyMatrix4(ci),this}lookAt(I){return Xa.lookAt(I),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(UE).negate(),this.translate(UE.x,UE.y,UE.z),this}setFromPoints(I){const i=[];for(let o=0,r=I.length;o<r;o++){const c=I[o];i.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new iB(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jQ);const I=this.attributes.position,i=this.morphAttributes.position;if(I&&I.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $A(-1/0,-1/0,-1/0),new $A(1/0,1/0,1/0));return}if(I!==void 0){if(this.boundingBox.setFromBufferAttribute(I),i)for(let o=0,r=i.length;o<r;o++){const c=i[o];ei.setFromBufferAttribute(c),this.morphTargetsRelative?(ne.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(ne),ne.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(ne)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hs);const I=this.attributes.position,i=this.morphAttributes.position;if(I&&I.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $A,1/0);return}if(I){const o=this.boundingSphere.center;if(ei.setFromBufferAttribute(I),i)for(let c=0,y=i.length;c<y;c++){const w=i[c];_Q.setFromBufferAttribute(w),this.morphTargetsRelative?(ne.addVectors(ei.min,_Q.min),ei.expandByPoint(ne),ne.addVectors(ei.max,_Q.max),ei.expandByPoint(ne)):(ei.expandByPoint(_Q.min),ei.expandByPoint(_Q.max))}ei.getCenter(o);let r=0;for(let c=0,y=I.count;c<y;c++)ne.fromBufferAttribute(I,c),r=Math.max(r,o.distanceToSquared(ne));if(i)for(let c=0,y=i.length;c<y;c++){const w=i[c],R=this.morphTargetsRelative;for(let G=0,N=w.count;G<N;G++)ne.fromBufferAttribute(w,G),R&&(UE.fromBufferAttribute(I,G),ne.add(UE)),r=Math.max(r,o.distanceToSquared(ne))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const I=this.index,i=this.attributes;if(I===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const o=I.array,r=i.position.array,c=i.normal.array,y=i.uv.array,w=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new eB(new Float32Array(4*w),4));const R=this.getAttribute("tangent").array,G=[],N=[];for(let oA=0;oA<w;oA++)G[oA]=new $A,N[oA]=new $A;const J=new $A,b=new $A,Y=new $A,P=new pt,V=new pt,L=new pt,U=new $A,fA=new $A;function BA(oA,Cg,ag){J.fromArray(r,oA*3),b.fromArray(r,Cg*3),Y.fromArray(r,ag*3),P.fromArray(y,oA*2),V.fromArray(y,Cg*2),L.fromArray(y,ag*2),b.sub(J),Y.sub(J),V.sub(P),L.sub(P);const YA=1/(V.x*L.y-L.x*V.y);isFinite(YA)&&(U.copy(b).multiplyScalar(L.y).addScaledVector(Y,-V.y).multiplyScalar(YA),fA.copy(Y).multiplyScalar(V.x).addScaledVector(b,-L.x).multiplyScalar(YA),G[oA].add(U),G[Cg].add(U),G[ag].add(U),N[oA].add(fA),N[Cg].add(fA),N[ag].add(fA))}let CA=this.groups;CA.length===0&&(CA=[{start:0,count:o.length}]);for(let oA=0,Cg=CA.length;oA<Cg;++oA){const ag=CA[oA],YA=ag.start,WA=ag.count;for(let zA=YA,lg=YA+WA;zA<lg;zA+=3)BA(o[zA+0],o[zA+1],o[zA+2])}const DA=new $A,MA=new $A,yA=new $A,Bg=new $A;function Z(oA){yA.fromArray(c,oA*3),Bg.copy(yA);const Cg=G[oA];DA.copy(Cg),DA.sub(yA.multiplyScalar(yA.dot(Cg))).normalize(),MA.crossVectors(Bg,Cg);const YA=MA.dot(N[oA])<0?-1:1;R[oA*4]=DA.x,R[oA*4+1]=DA.y,R[oA*4+2]=DA.z,R[oA*4+3]=YA}for(let oA=0,Cg=CA.length;oA<Cg;++oA){const ag=CA[oA],YA=ag.start,WA=ag.count;for(let zA=YA,lg=YA+WA;zA<lg;zA+=3)Z(o[zA+0]),Z(o[zA+1]),Z(o[zA+2])}}computeVertexNormals(){const I=this.index,i=this.getAttribute("position");if(i!==void 0){let o=this.getAttribute("normal");if(o===void 0)o=new eB(new Float32Array(i.count*3),3),this.setAttribute("normal",o);else for(let b=0,Y=o.count;b<Y;b++)o.setXYZ(b,0,0,0);const r=new $A,c=new $A,y=new $A,w=new $A,R=new $A,G=new $A,N=new $A,J=new $A;if(I)for(let b=0,Y=I.count;b<Y;b+=3){const P=I.getX(b+0),V=I.getX(b+1),L=I.getX(b+2);r.fromBufferAttribute(i,P),c.fromBufferAttribute(i,V),y.fromBufferAttribute(i,L),N.subVectors(y,c),J.subVectors(r,c),N.cross(J),w.fromBufferAttribute(o,P),R.fromBufferAttribute(o,V),G.fromBufferAttribute(o,L),w.add(N),R.add(N),G.add(N),o.setXYZ(P,w.x,w.y,w.z),o.setXYZ(V,R.x,R.y,R.z),o.setXYZ(L,G.x,G.y,G.z)}else for(let b=0,Y=i.count;b<Y;b+=3)r.fromBufferAttribute(i,b+0),c.fromBufferAttribute(i,b+1),y.fromBufferAttribute(i,b+2),N.subVectors(y,c),J.subVectors(r,c),N.cross(J),o.setXYZ(b+0,N.x,N.y,N.z),o.setXYZ(b+1,N.x,N.y,N.z),o.setXYZ(b+2,N.x,N.y,N.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){const I=this.attributes.normal;for(let i=0,o=I.count;i<o;i++)ne.fromBufferAttribute(I,i),ne.normalize(),I.setXYZ(i,ne.x,ne.y,ne.z)}toNonIndexed(){function I(w,R){const G=w.array,N=w.itemSize,J=w.normalized,b=new G.constructor(R.length*N);let Y=0,P=0;for(let V=0,L=R.length;V<L;V++){w.isInterleavedBufferAttribute?Y=R[V]*w.data.stride+w.offset:Y=R[V]*N;for(let U=0;U<N;U++)b[P++]=G[Y++]}return new eB(b,N,J)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new CC,o=this.index.array,r=this.attributes;for(const w in r){const R=r[w],G=I(R,o);i.setAttribute(w,G)}const c=this.morphAttributes;for(const w in c){const R=[],G=c[w];for(let N=0,J=G.length;N<J;N++){const b=G[N],Y=I(b,o);R.push(Y)}i.morphAttributes[w]=R}i.morphTargetsRelative=this.morphTargetsRelative;const y=this.groups;for(let w=0,R=y.length;w<R;w++){const G=y[w];i.addGroup(G.start,G.count,G.materialIndex)}return i}toJSON(){const I={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(I.uuid=this.uuid,I.type=this.type,this.name!==""&&(I.name=this.name),Object.keys(this.userData).length>0&&(I.userData=this.userData),this.parameters!==void 0){const R=this.parameters;for(const G in R)R[G]!==void 0&&(I[G]=R[G]);return I}I.data={attributes:{}};const i=this.index;i!==null&&(I.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const o=this.attributes;for(const R in o){const G=o[R];I.data.attributes[R]=G.toJSON(I.data)}const r={};let c=!1;for(const R in this.morphAttributes){const G=this.morphAttributes[R],N=[];for(let J=0,b=G.length;J<b;J++){const Y=G[J];N.push(Y.toJSON(I.data))}N.length>0&&(r[R]=N,c=!0)}c&&(I.data.morphAttributes=r,I.data.morphTargetsRelative=this.morphTargetsRelative);const y=this.groups;y.length>0&&(I.data.groups=JSON.parse(JSON.stringify(y)));const w=this.boundingSphere;return w!==null&&(I.data.boundingSphere={center:w.center.toArray(),radius:w.radius}),I}clone(){return new this.constructor().copy(this)}copy(I){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=I.name;const o=I.index;o!==null&&this.setIndex(o.clone(i));const r=I.attributes;for(const G in r){const N=r[G];this.setAttribute(G,N.clone(i))}const c=I.morphAttributes;for(const G in c){const N=[],J=c[G];for(let b=0,Y=J.length;b<Y;b++)N.push(J[b].clone(i));this.morphAttributes[G]=N}this.morphTargetsRelative=I.morphTargetsRelative;const y=I.groups;for(let G=0,N=y.length;G<N;G++){const J=y[G];this.addGroup(J.start,J.count,J.materialIndex)}const w=I.boundingBox;w!==null&&(this.boundingBox=w.clone());const R=I.boundingSphere;return R!==null&&(this.boundingSphere=R.clone()),this.drawRange.start=I.drawRange.start,this.drawRange.count=I.drawRange.count,this.userData=I.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nc=new we,JC=new h0,en=new hs,Uc=new $A,kE=new $A,LE=new $A,xE=new $A,za=new $A,Bn=new $A,Cn=new pt,En=new pt,Qn=new pt,kc=new $A,Lc=new $A,xc=new $A,on=new $A,nn=new $A;class NB extends Me{constructor(I=new CC,i=new fl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=I,this.material=i,this.updateMorphTargets()}copy(I,i){return super.copy(I,i),I.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=I.morphTargetInfluences.slice()),I.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},I.morphTargetDictionary)),this.material=Array.isArray(I.material)?I.material.slice():I.material,this.geometry=I.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,o=Object.keys(i);if(o.length>0){const r=i[o[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,y=r.length;c<y;c++){const w=r[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[w]=c}}}}getVertexPosition(I,i){const o=this.geometry,r=o.attributes.position,c=o.morphAttributes.position,y=o.morphTargetsRelative;i.fromBufferAttribute(r,I);const w=this.morphTargetInfluences;if(c&&w){Bn.set(0,0,0);for(let R=0,G=c.length;R<G;R++){const N=w[R],J=c[R];N!==0&&(za.fromBufferAttribute(J,I),y?Bn.addScaledVector(za,N):Bn.addScaledVector(za.sub(i),N))}i.add(Bn)}return i}raycast(I,i){const o=this.geometry,r=this.material,c=this.matrixWorld;r!==void 0&&(o.boundingSphere===null&&o.computeBoundingSphere(),en.copy(o.boundingSphere),en.applyMatrix4(c),JC.copy(I.ray).recast(I.near),!(en.containsPoint(JC.origin)===!1&&(JC.intersectSphere(en,Uc)===null||JC.origin.distanceToSquared(Uc)>(I.far-I.near)**2))&&(Nc.copy(c).invert(),JC.copy(I.ray).applyMatrix4(Nc),!(o.boundingBox!==null&&JC.intersectsBox(o.boundingBox)===!1)&&this._computeIntersections(I,i,JC)))}_computeIntersections(I,i,o){let r;const c=this.geometry,y=this.material,w=c.index,R=c.attributes.position,G=c.attributes.uv,N=c.attributes.uv1,J=c.attributes.normal,b=c.groups,Y=c.drawRange;if(w!==null)if(Array.isArray(y))for(let P=0,V=b.length;P<V;P++){const L=b[P],U=y[L.materialIndex],fA=Math.max(L.start,Y.start),BA=Math.min(w.count,Math.min(L.start+L.count,Y.start+Y.count));for(let CA=fA,DA=BA;CA<DA;CA+=3){const MA=w.getX(CA),yA=w.getX(CA+1),Bg=w.getX(CA+2);r=an(this,U,I,o,G,N,J,MA,yA,Bg),r&&(r.faceIndex=Math.floor(CA/3),r.face.materialIndex=L.materialIndex,i.push(r))}}else{const P=Math.max(0,Y.start),V=Math.min(w.count,Y.start+Y.count);for(let L=P,U=V;L<U;L+=3){const fA=w.getX(L),BA=w.getX(L+1),CA=w.getX(L+2);r=an(this,y,I,o,G,N,J,fA,BA,CA),r&&(r.faceIndex=Math.floor(L/3),i.push(r))}}else if(R!==void 0)if(Array.isArray(y))for(let P=0,V=b.length;P<V;P++){const L=b[P],U=y[L.materialIndex],fA=Math.max(L.start,Y.start),BA=Math.min(R.count,Math.min(L.start+L.count,Y.start+Y.count));for(let CA=fA,DA=BA;CA<DA;CA+=3){const MA=CA,yA=CA+1,Bg=CA+2;r=an(this,U,I,o,G,N,J,MA,yA,Bg),r&&(r.faceIndex=Math.floor(CA/3),r.face.materialIndex=L.materialIndex,i.push(r))}}else{const P=Math.max(0,Y.start),V=Math.min(R.count,Y.start+Y.count);for(let L=P,U=V;L<U;L+=3){const fA=L,BA=L+1,CA=L+2;r=an(this,y,I,o,G,N,J,fA,BA,CA),r&&(r.faceIndex=Math.floor(L/3),i.push(r))}}}}function M0(E,I,i,o,r,c,y,w){let R;if(I.side===Oe?R=o.intersectTriangle(y,c,r,!0,w):R=o.intersectTriangle(r,c,y,I.side===BC,w),R===null)return null;nn.copy(w),nn.applyMatrix4(E.matrixWorld);const G=i.ray.origin.distanceTo(nn);return G<i.near||G>i.far?null:{distance:G,point:nn.clone(),object:E}}function an(E,I,i,o,r,c,y,w,R,G){E.getVertexPosition(w,kE),E.getVertexPosition(R,LE),E.getVertexPosition(G,xE);const N=M0(E,I,i,o,kE,LE,xE,on);if(N){r&&(Cn.fromBufferAttribute(r,w),En.fromBufferAttribute(r,R),Qn.fromBufferAttribute(r,G),N.uv=Ki.getInterpolation(on,kE,LE,xE,Cn,En,Qn,new pt)),c&&(Cn.fromBufferAttribute(c,w),En.fromBufferAttribute(c,R),Qn.fromBufferAttribute(c,G),N.uv1=Ki.getInterpolation(on,kE,LE,xE,Cn,En,Qn,new pt),N.uv2=N.uv1),y&&(kc.fromBufferAttribute(y,w),Lc.fromBufferAttribute(y,R),xc.fromBufferAttribute(y,G),N.normal=Ki.getInterpolation(on,kE,LE,xE,kc,Lc,xc,new $A),N.normal.dot(o.direction)>0&&N.normal.multiplyScalar(-1));const J={a:w,b:R,c:G,normal:new $A,materialIndex:0};Ki.getNormal(kE,LE,xE,J.normal),N.face=J}return N}class Ao extends CC{constructor(I=1,i=1,o=1,r=1,c=1,y=1){super(),this.type="BoxGeometry",this.parameters={width:I,height:i,depth:o,widthSegments:r,heightSegments:c,depthSegments:y};const w=this;r=Math.floor(r),c=Math.floor(c),y=Math.floor(y);const R=[],G=[],N=[],J=[];let b=0,Y=0;P("z","y","x",-1,-1,o,i,I,y,c,0),P("z","y","x",1,-1,o,i,-I,y,c,1),P("x","z","y",1,1,I,o,i,r,y,2),P("x","z","y",1,-1,I,o,-i,r,y,3),P("x","y","z",1,-1,I,i,o,r,c,4),P("x","y","z",-1,-1,I,i,-o,r,c,5),this.setIndex(R),this.setAttribute("position",new iB(G,3)),this.setAttribute("normal",new iB(N,3)),this.setAttribute("uv",new iB(J,2));function P(V,L,U,fA,BA,CA,DA,MA,yA,Bg,Z){const oA=CA/yA,Cg=DA/Bg,ag=CA/2,YA=DA/2,WA=MA/2,zA=yA+1,lg=Bg+1;let q=0,O=0;const EA=new $A;for(let nA=0;nA<lg;nA++){const sA=nA*Cg-YA;for(let mA=0;mA<zA;mA++){const Ig=mA*oA-ag;EA[V]=Ig*fA,EA[L]=sA*BA,EA[U]=WA,G.push(EA.x,EA.y,EA.z),EA[V]=0,EA[L]=0,EA[U]=MA>0?1:-1,N.push(EA.x,EA.y,EA.z),J.push(mA/yA),J.push(1-nA/Bg),q+=1}}for(let nA=0;nA<Bg;nA++)for(let sA=0;sA<yA;sA++){const mA=b+sA+zA*nA,Ig=b+sA+zA*(nA+1),og=b+(sA+1)+zA*(nA+1),Rg=b+(sA+1)+zA*nA;R.push(mA,Ig,Rg),R.push(Ig,og,Rg),O+=6}w.addGroup(Y,O,Z),Y+=O,b+=q}}copy(I){return super.copy(I),this.parameters=Object.assign({},I.parameters),this}static fromJSON(I){return new Ao(I.width,I.height,I.depth,I.widthSegments,I.heightSegments,I.depthSegments)}}function ZE(E){const I={};for(const i in E){I[i]={};for(const o in E[i]){const r=E[i][o];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),I[i][o]=null):I[i][o]=r.clone():Array.isArray(r)?I[i][o]=r.slice():I[i][o]=r}}return I}function Le(E){const I={};for(let i=0;i<E.length;i++){const o=ZE(E[i]);for(const r in o)I[r]=o[r]}return I}function m0(E){const I=[];for(let i=0;i<E.length;i++)I.push(E[i].clone());return I}function Ml(E){return E.getRenderTarget()===null?E.outputColorSpace:BB}const R0={clone:ZE,merge:Le};var S0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class OC extends $Q{constructor(I){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,I!==void 0&&this.setValues(I)}copy(I){return super.copy(I),this.fragmentShader=I.fragmentShader,this.vertexShader=I.vertexShader,this.uniforms=ZE(I.uniforms),this.uniformsGroups=m0(I.uniformsGroups),this.defines=Object.assign({},I.defines),this.wireframe=I.wireframe,this.wireframeLinewidth=I.wireframeLinewidth,this.fog=I.fog,this.lights=I.lights,this.clipping=I.clipping,this.extensions=Object.assign({},I.extensions),this.glslVersion=I.glslVersion,this}toJSON(I){const i=super.toJSON(I);i.glslVersion=this.glslVersion,i.uniforms={};for(const r in this.uniforms){const y=this.uniforms[r].value;y&&y.isTexture?i.uniforms[r]={type:"t",value:y.toJSON(I).uuid}:y&&y.isColor?i.uniforms[r]={type:"c",value:y.getHex()}:y&&y.isVector2?i.uniforms[r]={type:"v2",value:y.toArray()}:y&&y.isVector3?i.uniforms[r]={type:"v3",value:y.toArray()}:y&&y.isVector4?i.uniforms[r]={type:"v4",value:y.toArray()}:y&&y.isMatrix3?i.uniforms[r]={type:"m3",value:y.toArray()}:y&&y.isMatrix4?i.uniforms[r]={type:"m4",value:y.toArray()}:i.uniforms[r]={value:y}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const o={};for(const r in this.extensions)this.extensions[r]===!0&&(o[r]=!0);return Object.keys(o).length>0&&(i.extensions=o),i}}class ml extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=FB}copy(I,i){return super.copy(I,i),this.matrixWorldInverse.copy(I.matrixWorldInverse),this.projectionMatrix.copy(I.projectionMatrix),this.projectionMatrixInverse.copy(I.projectionMatrixInverse),this.coordinateSystem=I.coordinateSystem,this}getWorldDirection(I){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return I.set(-i[8],-i[9],-i[10]).normalize()}updateMatrixWorld(I){super.updateMatrixWorld(I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(I,i){super.updateWorldMatrix(I,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class di extends ml{constructor(I=50,i=1,o=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=I,this.zoom=1,this.near=o,this.far=r,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(I,i){return super.copy(I,i),this.fov=I.fov,this.zoom=I.zoom,this.near=I.near,this.far=I.far,this.focus=I.focus,this.aspect=I.aspect,this.view=I.view===null?null:Object.assign({},I.view),this.filmGauge=I.filmGauge,this.filmOffset=I.filmOffset,this}setFocalLength(I){const i=.5*this.getFilmHeight()/I;this.fov=Qs*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const I=Math.tan(La*.5*this.fov);return .5*this.getFilmHeight()/I}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(La*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(I,i,o,r,c,y){this.aspect=I/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=I,this.view.fullHeight=i,this.view.offsetX=o,this.view.offsetY=r,this.view.width=c,this.view.height=y,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const I=this.near;let i=I*Math.tan(La*.5*this.fov)/this.zoom,o=2*i,r=this.aspect*o,c=-.5*r;const y=this.view;if(this.view!==null&&this.view.enabled){const R=y.fullWidth,G=y.fullHeight;c+=y.offsetX*r/R,i-=y.offsetY*o/G,r*=y.width/R,o*=y.height/G}const w=this.filmOffset;w!==0&&(c+=I*w/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+r,i,i-o,I,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(I){const i=super.toJSON(I);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const JE=-90,bE=1;class F0 extends Me{constructor(I,i,o){super(),this.type="CubeCamera",this.renderTarget=o,this.coordinateSystem=null;const r=new di(JE,bE,I,i);r.layers=this.layers,this.add(r);const c=new di(JE,bE,I,i);c.layers=this.layers,this.add(c);const y=new di(JE,bE,I,i);y.layers=this.layers,this.add(y);const w=new di(JE,bE,I,i);w.layers=this.layers,this.add(w);const R=new di(JE,bE,I,i);R.layers=this.layers,this.add(R);const G=new di(JE,bE,I,i);G.layers=this.layers,this.add(G)}updateCoordinateSystem(){const I=this.coordinateSystem,i=this.children.concat(),[o,r,c,y,w,R]=i;for(const G of i)this.remove(G);if(I===FB)o.up.set(0,1,0),o.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),y.up.set(0,0,1),y.lookAt(0,-1,0),w.up.set(0,1,0),w.lookAt(0,0,1),R.up.set(0,1,0),R.lookAt(0,0,-1);else if(I===un)o.up.set(0,-1,0),o.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),y.up.set(0,0,-1),y.lookAt(0,-1,0),w.up.set(0,-1,0),w.lookAt(0,0,1),R.up.set(0,-1,0),R.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+I);for(const G of i)this.add(G),G.updateMatrixWorld()}update(I,i){this.parent===null&&this.updateMatrixWorld();const o=this.renderTarget;this.coordinateSystem!==I.coordinateSystem&&(this.coordinateSystem=I.coordinateSystem,this.updateCoordinateSystem());const[r,c,y,w,R,G]=this.children,N=I.getRenderTarget(),J=I.xr.enabled;I.xr.enabled=!1;const b=o.texture.generateMipmaps;o.texture.generateMipmaps=!1,I.setRenderTarget(o,0),I.render(i,r),I.setRenderTarget(o,1),I.render(i,c),I.setRenderTarget(o,2),I.render(i,y),I.setRenderTarget(o,3),I.render(i,w),I.setRenderTarget(o,4),I.render(i,R),o.texture.generateMipmaps=b,I.setRenderTarget(o,5),I.render(i,G),I.setRenderTarget(N),I.xr.enabled=J,o.texture.needsPMREMUpdate=!0}}class Rl extends ii{constructor(I,i,o,r,c,y,w,R,G,N){I=I!==void 0?I:[],i=i!==void 0?i:OE,super(I,i,o,r,c,y,w,R,G,N),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(I){this.image=I}}class N0 extends WC{constructor(I=1,i={}){super(I,I,i),this.isWebGLCubeRenderTarget=!0;const o={width:I,height:I,depth:1},r=[o,o,o,o,o,o];i.encoding!==void 0&&(PQ("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===TC?bt:_C),this.texture=new Rl(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:li}fromEquirectangularTexture(I,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const o={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ao(5,5,5),c=new OC({name:"CubemapFromEquirect",uniforms:ZE(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,side:Oe,blending:tC});c.uniforms.tEquirect.value=i;const y=new NB(r,c),w=i.minFilter;return i.minFilter===VQ&&(i.minFilter=li),new F0(1,10,this).update(I,y),i.minFilter=w,y.geometry.dispose(),y.material.dispose(),this}clear(I,i,o,r){const c=I.getRenderTarget();for(let y=0;y<6;y++)I.setRenderTarget(this,y),I.clear(i,o,r);I.setRenderTarget(c)}}const ja=new $A,U0=new $A,k0=new jI;class KC{constructor(I=new $A(1,0,0),i=0){this.isPlane=!0,this.normal=I,this.constant=i}set(I,i){return this.normal.copy(I),this.constant=i,this}setComponents(I,i,o,r){return this.normal.set(I,i,o),this.constant=r,this}setFromNormalAndCoplanarPoint(I,i){return this.normal.copy(I),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(I,i,o){const r=ja.subVectors(o,i).cross(U0.subVectors(I,i)).normalize();return this.setFromNormalAndCoplanarPoint(r,I),this}copy(I){return this.normal.copy(I.normal),this.constant=I.constant,this}normalize(){const I=1/this.normal.length();return this.normal.multiplyScalar(I),this.constant*=I,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(I){return this.normal.dot(I)+this.constant}distanceToSphere(I){return this.distanceToPoint(I.center)-I.radius}projectPoint(I,i){return i.copy(I).addScaledVector(this.normal,-this.distanceToPoint(I))}intersectLine(I,i){const o=I.delta(ja),r=this.normal.dot(o);if(r===0)return this.distanceToPoint(I.start)===0?i.copy(I.start):null;const c=-(I.start.dot(this.normal)+this.constant)/r;return c<0||c>1?null:i.copy(I.start).addScaledVector(o,c)}intersectsLine(I){const i=this.distanceToPoint(I.start),o=this.distanceToPoint(I.end);return i<0&&o>0||o<0&&i>0}intersectsBox(I){return I.intersectsPlane(this)}intersectsSphere(I){return I.intersectsPlane(this)}coplanarPoint(I){return I.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(I,i){const o=i||k0.getNormalMatrix(I),r=this.coplanarPoint(ja).applyMatrix4(I),c=this.normal.applyMatrix3(o).normalize();return this.constant=-r.dot(c),this}translate(I){return this.constant-=I.dot(this.normal),this}equals(I){return I.normal.equals(this.normal)&&I.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bC=new hs,sn=new $A;class Sl{constructor(I=new KC,i=new KC,o=new KC,r=new KC,c=new KC,y=new KC){this.planes=[I,i,o,r,c,y]}set(I,i,o,r,c,y){const w=this.planes;return w[0].copy(I),w[1].copy(i),w[2].copy(o),w[3].copy(r),w[4].copy(c),w[5].copy(y),this}copy(I){const i=this.planes;for(let o=0;o<6;o++)i[o].copy(I.planes[o]);return this}setFromProjectionMatrix(I,i=FB){const o=this.planes,r=I.elements,c=r[0],y=r[1],w=r[2],R=r[3],G=r[4],N=r[5],J=r[6],b=r[7],Y=r[8],P=r[9],V=r[10],L=r[11],U=r[12],fA=r[13],BA=r[14],CA=r[15];if(o[0].setComponents(R-c,b-G,L-Y,CA-U).normalize(),o[1].setComponents(R+c,b+G,L+Y,CA+U).normalize(),o[2].setComponents(R+y,b+N,L+P,CA+fA).normalize(),o[3].setComponents(R-y,b-N,L-P,CA-fA).normalize(),o[4].setComponents(R-w,b-J,L-V,CA-BA).normalize(),i===FB)o[5].setComponents(R+w,b+J,L+V,CA+BA).normalize();else if(i===un)o[5].setComponents(w,J,V,BA).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(I){if(I.boundingSphere!==void 0)I.boundingSphere===null&&I.computeBoundingSphere(),bC.copy(I.boundingSphere).applyMatrix4(I.matrixWorld);else{const i=I.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),bC.copy(i.boundingSphere).applyMatrix4(I.matrixWorld)}return this.intersectsSphere(bC)}intersectsSprite(I){return bC.center.set(0,0,0),bC.radius=.7071067811865476,bC.applyMatrix4(I.matrixWorld),this.intersectsSphere(bC)}intersectsSphere(I){const i=this.planes,o=I.center,r=-I.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(o)<r)return!1;return!0}intersectsBox(I){const i=this.planes;for(let o=0;o<6;o++){const r=i[o];if(sn.x=r.normal.x>0?I.max.x:I.min.x,sn.y=r.normal.y>0?I.max.y:I.min.y,sn.z=r.normal.z>0?I.max.z:I.min.z,r.distanceToPoint(sn)<0)return!1}return!0}containsPoint(I){const i=this.planes;for(let o=0;o<6;o++)if(i[o].distanceToPoint(I)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gl(){let E=null,I=!1,i=null,o=null;function r(c,y){i(c,y),o=E.requestAnimationFrame(r)}return{start:function(){I!==!0&&i!==null&&(o=E.requestAnimationFrame(r),I=!0)},stop:function(){E.cancelAnimationFrame(o),I=!1},setAnimationLoop:function(c){i=c},setContext:function(c){E=c}}}function L0(E,I){const i=I.isWebGL2,o=new WeakMap;function r(G,N){const J=G.array,b=G.usage,Y=E.createBuffer();E.bindBuffer(N,Y),E.bufferData(N,J,b),G.onUploadCallback();let P;if(J instanceof Float32Array)P=E.FLOAT;else if(J instanceof Uint16Array)if(G.isFloat16BufferAttribute)if(i)P=E.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else P=E.UNSIGNED_SHORT;else if(J instanceof Int16Array)P=E.SHORT;else if(J instanceof Uint32Array)P=E.UNSIGNED_INT;else if(J instanceof Int32Array)P=E.INT;else if(J instanceof Int8Array)P=E.BYTE;else if(J instanceof Uint8Array)P=E.UNSIGNED_BYTE;else if(J instanceof Uint8ClampedArray)P=E.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+J);return{buffer:Y,type:P,bytesPerElement:J.BYTES_PER_ELEMENT,version:G.version}}function c(G,N,J){const b=N.array,Y=N.updateRange;E.bindBuffer(J,G),Y.count===-1?E.bufferSubData(J,0,b):(i?E.bufferSubData(J,Y.offset*b.BYTES_PER_ELEMENT,b,Y.offset,Y.count):E.bufferSubData(J,Y.offset*b.BYTES_PER_ELEMENT,b.subarray(Y.offset,Y.offset+Y.count)),Y.count=-1),N.onUploadCallback()}function y(G){return G.isInterleavedBufferAttribute&&(G=G.data),o.get(G)}function w(G){G.isInterleavedBufferAttribute&&(G=G.data);const N=o.get(G);N&&(E.deleteBuffer(N.buffer),o.delete(G))}function R(G,N){if(G.isGLBufferAttribute){const b=o.get(G);(!b||b.version<G.version)&&o.set(G,{buffer:G.buffer,type:G.type,bytesPerElement:G.elementSize,version:G.version});return}G.isInterleavedBufferAttribute&&(G=G.data);const J=o.get(G);J===void 0?o.set(G,r(G,N)):J.version<G.version&&(c(J.buffer,G,N),J.version=G.version)}return{get:y,remove:w,update:R}}class cs extends CC{constructor(I=1,i=1,o=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:I,height:i,widthSegments:o,heightSegments:r};const c=I/2,y=i/2,w=Math.floor(o),R=Math.floor(r),G=w+1,N=R+1,J=I/w,b=i/R,Y=[],P=[],V=[],L=[];for(let U=0;U<N;U++){const fA=U*b-y;for(let BA=0;BA<G;BA++){const CA=BA*J-c;P.push(CA,-fA,0),V.push(0,0,1),L.push(BA/w),L.push(1-U/R)}}for(let U=0;U<R;U++)for(let fA=0;fA<w;fA++){const BA=fA+G*U,CA=fA+G*(U+1),DA=fA+1+G*(U+1),MA=fA+1+G*U;Y.push(BA,CA,MA),Y.push(CA,DA,MA)}this.setIndex(Y),this.setAttribute("position",new iB(P,3)),this.setAttribute("normal",new iB(V,3)),this.setAttribute("uv",new iB(L,2))}copy(I){return super.copy(I),this.parameters=Object.assign({},I.parameters),this}static fromJSON(I){return new cs(I.width,I.height,I.widthSegments,I.heightSegments)}}var x0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,J0=`#ifdef USE_ALPHAHASH
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
#endif`,b0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,O0=`#ifdef USE_IRIDESCENCE
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
#endif`,P0=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Aw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Iw=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,tw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,ew=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ew=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qw="gl_FragColor = linearToOutputTexel( gl_FragColor );",ow=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nw=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,aw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sw=`#ifdef USE_ENVMAP
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
#endif`,rw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hw=`#ifdef USE_ENVMAP
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
#endif`,cw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dw=`#ifdef USE_GRADIENTMAP
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
}`,ww=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,mw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Rw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Uw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,kw=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Jw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tw=`#if defined( USE_POINTS_UV )
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
#endif`,_w=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ww=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ow=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Vw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Zw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Xw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,zw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$w=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gf=`#ifdef USE_NORMALMAP
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
#endif`,If=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ef=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Qf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,af=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,df=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Df=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ff=`#ifdef USE_SKINNING
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
#endif`,pf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mf=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lf=`uniform sampler2D t2D;
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
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Yf=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Hf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,qf=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_f=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Of=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pf=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Vf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Zf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Xf=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,zf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,jf=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$f=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ap=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,Ip=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,tp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,ep=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Bp=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Cp=`uniform float size;
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
}`,Ep=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,op=`uniform vec3 color;
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
}`,np=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,ap=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,VI={alphahash_fragment:x0,alphahash_pars_fragment:J0,alphamap_fragment:b0,alphamap_pars_fragment:K0,alphatest_fragment:v0,alphatest_pars_fragment:Y0,aomap_fragment:H0,aomap_pars_fragment:q0,begin_vertex:T0,beginnormal_vertex:_0,bsdfs:W0,iridescence_fragment:O0,bumpmap_pars_fragment:P0,clipping_planes_fragment:V0,clipping_planes_pars_fragment:Z0,clipping_planes_pars_vertex:X0,clipping_planes_vertex:z0,color_fragment:j0,color_pars_fragment:$0,color_pars_vertex:Aw,color_vertex:gw,common:Iw,cube_uv_reflection_fragment:tw,defaultnormal_vertex:ew,displacementmap_pars_vertex:iw,displacementmap_vertex:Bw,emissivemap_fragment:Cw,emissivemap_pars_fragment:Ew,colorspace_fragment:Qw,colorspace_pars_fragment:ow,envmap_fragment:nw,envmap_common_pars_fragment:aw,envmap_pars_fragment:sw,envmap_pars_vertex:rw,envmap_physical_pars_fragment:mw,envmap_vertex:hw,fog_vertex:cw,fog_pars_vertex:lw,fog_fragment:dw,fog_pars_fragment:uw,gradientmap_pars_fragment:Dw,lightmap_fragment:ww,lightmap_pars_fragment:fw,lights_lambert_fragment:pw,lights_lambert_pars_fragment:yw,lights_pars_begin:Mw,lights_toon_fragment:Rw,lights_toon_pars_fragment:Sw,lights_phong_fragment:Gw,lights_phong_pars_fragment:Fw,lights_physical_fragment:Nw,lights_physical_pars_fragment:Uw,lights_fragment_begin:kw,lights_fragment_maps:Lw,lights_fragment_end:xw,logdepthbuf_fragment:Jw,logdepthbuf_pars_fragment:bw,logdepthbuf_pars_vertex:Kw,logdepthbuf_vertex:vw,map_fragment:Yw,map_pars_fragment:Hw,map_particle_fragment:qw,map_particle_pars_fragment:Tw,metalnessmap_fragment:_w,metalnessmap_pars_fragment:Ww,morphcolor_vertex:Ow,morphnormal_vertex:Pw,morphtarget_pars_vertex:Vw,morphtarget_vertex:Zw,normal_fragment_begin:Xw,normal_fragment_maps:zw,normal_pars_fragment:jw,normal_pars_vertex:$w,normal_vertex:Af,normalmap_pars_fragment:gf,clearcoat_normal_fragment_begin:If,clearcoat_normal_fragment_maps:tf,clearcoat_pars_fragment:ef,iridescence_pars_fragment:Bf,opaque_fragment:Cf,packing:Ef,premultiplied_alpha_fragment:Qf,project_vertex:of,dithering_fragment:nf,dithering_pars_fragment:af,roughnessmap_fragment:sf,roughnessmap_pars_fragment:rf,shadowmap_pars_fragment:hf,shadowmap_pars_vertex:cf,shadowmap_vertex:lf,shadowmask_pars_fragment:df,skinbase_vertex:uf,skinning_pars_vertex:Df,skinning_vertex:wf,skinnormal_vertex:ff,specularmap_fragment:pf,specularmap_pars_fragment:yf,tonemapping_fragment:Mf,tonemapping_pars_fragment:mf,transmission_fragment:Rf,transmission_pars_fragment:Sf,uv_pars_fragment:Gf,uv_pars_vertex:Ff,uv_vertex:Nf,worldpos_vertex:Uf,background_vert:kf,background_frag:Lf,backgroundCube_vert:xf,backgroundCube_frag:Jf,cube_vert:bf,cube_frag:Kf,depth_vert:vf,depth_frag:Yf,distanceRGBA_vert:Hf,distanceRGBA_frag:qf,equirect_vert:Tf,equirect_frag:_f,linedashed_vert:Wf,linedashed_frag:Of,meshbasic_vert:Pf,meshbasic_frag:Vf,meshlambert_vert:Zf,meshlambert_frag:Xf,meshmatcap_vert:zf,meshmatcap_frag:jf,meshnormal_vert:$f,meshnormal_frag:Ap,meshphong_vert:gp,meshphong_frag:Ip,meshphysical_vert:tp,meshphysical_frag:ep,meshtoon_vert:ip,meshtoon_frag:Bp,points_vert:Cp,points_frag:Ep,shadow_vert:Qp,shadow_frag:op,sprite_vert:np,sprite_frag:ap},Vg={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jI},alphaMap:{value:null},alphaMapTransform:{value:new jI},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jI}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jI}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jI}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jI},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jI},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jI},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jI}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jI}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jI}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jI},alphaTest:{value:0},uvTransform:{value:new jI}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jI},alphaMap:{value:null},alphaMapTransform:{value:new jI},alphaTest:{value:0}}},IB={basic:{uniforms:Le([Vg.common,Vg.specularmap,Vg.envmap,Vg.aomap,Vg.lightmap,Vg.fog]),vertexShader:VI.meshbasic_vert,fragmentShader:VI.meshbasic_frag},lambert:{uniforms:Le([Vg.common,Vg.specularmap,Vg.envmap,Vg.aomap,Vg.lightmap,Vg.emissivemap,Vg.bumpmap,Vg.normalmap,Vg.displacementmap,Vg.fog,Vg.lights,{emissive:{value:new lt(0)}}]),vertexShader:VI.meshlambert_vert,fragmentShader:VI.meshlambert_frag},phong:{uniforms:Le([Vg.common,Vg.specularmap,Vg.envmap,Vg.aomap,Vg.lightmap,Vg.emissivemap,Vg.bumpmap,Vg.normalmap,Vg.displacementmap,Vg.fog,Vg.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:VI.meshphong_vert,fragmentShader:VI.meshphong_frag},standard:{uniforms:Le([Vg.common,Vg.envmap,Vg.aomap,Vg.lightmap,Vg.emissivemap,Vg.bumpmap,Vg.normalmap,Vg.displacementmap,Vg.roughnessmap,Vg.metalnessmap,Vg.fog,Vg.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:VI.meshphysical_vert,fragmentShader:VI.meshphysical_frag},toon:{uniforms:Le([Vg.common,Vg.aomap,Vg.lightmap,Vg.emissivemap,Vg.bumpmap,Vg.normalmap,Vg.displacementmap,Vg.gradientmap,Vg.fog,Vg.lights,{emissive:{value:new lt(0)}}]),vertexShader:VI.meshtoon_vert,fragmentShader:VI.meshtoon_frag},matcap:{uniforms:Le([Vg.common,Vg.bumpmap,Vg.normalmap,Vg.displacementmap,Vg.fog,{matcap:{value:null}}]),vertexShader:VI.meshmatcap_vert,fragmentShader:VI.meshmatcap_frag},points:{uniforms:Le([Vg.points,Vg.fog]),vertexShader:VI.points_vert,fragmentShader:VI.points_frag},dashed:{uniforms:Le([Vg.common,Vg.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:VI.linedashed_vert,fragmentShader:VI.linedashed_frag},depth:{uniforms:Le([Vg.common,Vg.displacementmap]),vertexShader:VI.depth_vert,fragmentShader:VI.depth_frag},normal:{uniforms:Le([Vg.common,Vg.bumpmap,Vg.normalmap,Vg.displacementmap,{opacity:{value:1}}]),vertexShader:VI.meshnormal_vert,fragmentShader:VI.meshnormal_frag},sprite:{uniforms:Le([Vg.sprite,Vg.fog]),vertexShader:VI.sprite_vert,fragmentShader:VI.sprite_frag},background:{uniforms:{uvTransform:{value:new jI},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:VI.background_vert,fragmentShader:VI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:VI.backgroundCube_vert,fragmentShader:VI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:VI.cube_vert,fragmentShader:VI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:VI.equirect_vert,fragmentShader:VI.equirect_frag},distanceRGBA:{uniforms:Le([Vg.common,Vg.displacementmap,{referencePosition:{value:new $A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:VI.distanceRGBA_vert,fragmentShader:VI.distanceRGBA_frag},shadow:{uniforms:Le([Vg.lights,Vg.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:VI.shadow_vert,fragmentShader:VI.shadow_frag}};IB.physical={uniforms:Le([IB.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jI},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jI},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jI},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jI},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jI},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jI},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jI},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jI},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jI},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jI},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jI},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jI}}]),vertexShader:VI.meshphysical_vert,fragmentShader:VI.meshphysical_frag};const rn={r:0,b:0,g:0};function sp(E,I,i,o,r,c,y){const w=new lt(0);let R=c===!0?0:1,G,N,J=null,b=0,Y=null;function P(L,U){let fA=!1,BA=U.isScene===!0?U.background:null;BA&&BA.isTexture&&(BA=(U.backgroundBlurriness>0?i:I).get(BA)),BA===null?V(w,R):BA&&BA.isColor&&(V(BA,1),fA=!0);const CA=E.xr.getEnvironmentBlendMode();CA==="additive"?o.buffers.color.setClear(0,0,0,1,y):CA==="alpha-blend"&&o.buffers.color.setClear(0,0,0,0,y),(E.autoClear||fA)&&E.clear(E.autoClearColor,E.autoClearDepth,E.autoClearStencil),BA&&(BA.isCubeTexture||BA.mapping===fn)?(N===void 0&&(N=new NB(new Ao(1,1,1),new OC({name:"BackgroundCubeMaterial",uniforms:ZE(IB.backgroundCube.uniforms),vertexShader:IB.backgroundCube.vertexShader,fragmentShader:IB.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),N.geometry.deleteAttribute("normal"),N.geometry.deleteAttribute("uv"),N.onBeforeRender=function(DA,MA,yA){this.matrixWorld.copyPosition(yA.matrixWorld)},Object.defineProperty(N.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(N)),N.material.uniforms.envMap.value=BA,N.material.uniforms.flipEnvMap.value=BA.isCubeTexture&&BA.isRenderTargetTexture===!1?-1:1,N.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,N.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,N.material.toneMapped=BA.colorSpace!==bt,(J!==BA||b!==BA.version||Y!==E.toneMapping)&&(N.material.needsUpdate=!0,J=BA,b=BA.version,Y=E.toneMapping),N.layers.enableAll(),L.unshift(N,N.geometry,N.material,0,0,null)):BA&&BA.isTexture&&(G===void 0&&(G=new NB(new cs(2,2),new OC({name:"BackgroundMaterial",uniforms:ZE(IB.background.uniforms),vertexShader:IB.background.vertexShader,fragmentShader:IB.background.fragmentShader,side:BC,depthTest:!1,depthWrite:!1,fog:!1})),G.geometry.deleteAttribute("normal"),Object.defineProperty(G.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(G)),G.material.uniforms.t2D.value=BA,G.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,G.material.toneMapped=BA.colorSpace!==bt,BA.matrixAutoUpdate===!0&&BA.updateMatrix(),G.material.uniforms.uvTransform.value.copy(BA.matrix),(J!==BA||b!==BA.version||Y!==E.toneMapping)&&(G.material.needsUpdate=!0,J=BA,b=BA.version,Y=E.toneMapping),G.layers.enableAll(),L.unshift(G,G.geometry,G.material,0,0,null))}function V(L,U){L.getRGB(rn,Ml(E)),o.buffers.color.setClear(rn.r,rn.g,rn.b,U,y)}return{getClearColor:function(){return w},setClearColor:function(L,U=1){w.set(L),R=U,V(w,R)},getClearAlpha:function(){return R},setClearAlpha:function(L){R=L,V(w,R)},render:P}}function rp(E,I,i,o){const r=E.getParameter(E.MAX_VERTEX_ATTRIBS),c=o.isWebGL2?null:I.get("OES_vertex_array_object"),y=o.isWebGL2||c!==null,w={},R=L(null);let G=R,N=!1;function J(WA,zA,lg,q,O){let EA=!1;if(y){const nA=V(q,lg,zA);G!==nA&&(G=nA,Y(G.object)),EA=U(WA,q,lg,O),EA&&fA(WA,q,lg,O)}else{const nA=zA.wireframe===!0;(G.geometry!==q.id||G.program!==lg.id||G.wireframe!==nA)&&(G.geometry=q.id,G.program=lg.id,G.wireframe=nA,EA=!0)}O!==null&&i.update(O,E.ELEMENT_ARRAY_BUFFER),(EA||N)&&(N=!1,Bg(WA,zA,lg,q),O!==null&&E.bindBuffer(E.ELEMENT_ARRAY_BUFFER,i.get(O).buffer))}function b(){return o.isWebGL2?E.createVertexArray():c.createVertexArrayOES()}function Y(WA){return o.isWebGL2?E.bindVertexArray(WA):c.bindVertexArrayOES(WA)}function P(WA){return o.isWebGL2?E.deleteVertexArray(WA):c.deleteVertexArrayOES(WA)}function V(WA,zA,lg){const q=lg.wireframe===!0;let O=w[WA.id];O===void 0&&(O={},w[WA.id]=O);let EA=O[zA.id];EA===void 0&&(EA={},O[zA.id]=EA);let nA=EA[q];return nA===void 0&&(nA=L(b()),EA[q]=nA),nA}function L(WA){const zA=[],lg=[],q=[];for(let O=0;O<r;O++)zA[O]=0,lg[O]=0,q[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:zA,enabledAttributes:lg,attributeDivisors:q,object:WA,attributes:{},index:null}}function U(WA,zA,lg,q){const O=G.attributes,EA=zA.attributes;let nA=0;const sA=lg.getAttributes();for(const mA in sA)if(sA[mA].location>=0){const og=O[mA];let Rg=EA[mA];if(Rg===void 0&&(mA==="instanceMatrix"&&WA.instanceMatrix&&(Rg=WA.instanceMatrix),mA==="instanceColor"&&WA.instanceColor&&(Rg=WA.instanceColor)),og===void 0||og.attribute!==Rg||Rg&&og.data!==Rg.data)return!0;nA++}return G.attributesNum!==nA||G.index!==q}function fA(WA,zA,lg,q){const O={},EA=zA.attributes;let nA=0;const sA=lg.getAttributes();for(const mA in sA)if(sA[mA].location>=0){let og=EA[mA];og===void 0&&(mA==="instanceMatrix"&&WA.instanceMatrix&&(og=WA.instanceMatrix),mA==="instanceColor"&&WA.instanceColor&&(og=WA.instanceColor));const Rg={};Rg.attribute=og,og&&og.data&&(Rg.data=og.data),O[mA]=Rg,nA++}G.attributes=O,G.attributesNum=nA,G.index=q}function BA(){const WA=G.newAttributes;for(let zA=0,lg=WA.length;zA<lg;zA++)WA[zA]=0}function CA(WA){DA(WA,0)}function DA(WA,zA){const lg=G.newAttributes,q=G.enabledAttributes,O=G.attributeDivisors;lg[WA]=1,q[WA]===0&&(E.enableVertexAttribArray(WA),q[WA]=1),O[WA]!==zA&&((o.isWebGL2?E:I.get("ANGLE_instanced_arrays"))[o.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](WA,zA),O[WA]=zA)}function MA(){const WA=G.newAttributes,zA=G.enabledAttributes;for(let lg=0,q=zA.length;lg<q;lg++)zA[lg]!==WA[lg]&&(E.disableVertexAttribArray(lg),zA[lg]=0)}function yA(WA,zA,lg,q,O,EA,nA){nA===!0?E.vertexAttribIPointer(WA,zA,lg,O,EA):E.vertexAttribPointer(WA,zA,lg,q,O,EA)}function Bg(WA,zA,lg,q){if(o.isWebGL2===!1&&(WA.isInstancedMesh||q.isInstancedBufferGeometry)&&I.get("ANGLE_instanced_arrays")===null)return;BA();const O=q.attributes,EA=lg.getAttributes(),nA=zA.defaultAttributeValues;for(const sA in EA){const mA=EA[sA];if(mA.location>=0){let Ig=O[sA];if(Ig===void 0&&(sA==="instanceMatrix"&&WA.instanceMatrix&&(Ig=WA.instanceMatrix),sA==="instanceColor"&&WA.instanceColor&&(Ig=WA.instanceColor)),Ig!==void 0){const og=Ig.normalized,Rg=Ig.itemSize,Hg=i.get(Ig);if(Hg===void 0)continue;const eI=Hg.buffer,EI=Hg.type,wI=Hg.bytesPerElement,cg=o.isWebGL2===!0&&(EI===E.INT||EI===E.UNSIGNED_INT||Ig.gpuType===El);if(Ig.isInterleavedBufferAttribute){const ZA=Ig.data,cA=ZA.stride,iI=Ig.offset;if(ZA.isInstancedInterleavedBuffer){for(let dg=0;dg<mA.locationSize;dg++)DA(mA.location+dg,ZA.meshPerAttribute);WA.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ZA.meshPerAttribute*ZA.count)}else for(let dg=0;dg<mA.locationSize;dg++)CA(mA.location+dg);E.bindBuffer(E.ARRAY_BUFFER,eI);for(let dg=0;dg<mA.locationSize;dg++)yA(mA.location+dg,Rg/mA.locationSize,EI,og,cA*wI,(iI+Rg/mA.locationSize*dg)*wI,cg)}else{if(Ig.isInstancedBufferAttribute){for(let ZA=0;ZA<mA.locationSize;ZA++)DA(mA.location+ZA,Ig.meshPerAttribute);WA.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ig.meshPerAttribute*Ig.count)}else for(let ZA=0;ZA<mA.locationSize;ZA++)CA(mA.location+ZA);E.bindBuffer(E.ARRAY_BUFFER,eI);for(let ZA=0;ZA<mA.locationSize;ZA++)yA(mA.location+ZA,Rg/mA.locationSize,EI,og,Rg*wI,Rg/mA.locationSize*ZA*wI,cg)}}else if(nA!==void 0){const og=nA[sA];if(og!==void 0)switch(og.length){case 2:E.vertexAttrib2fv(mA.location,og);break;case 3:E.vertexAttrib3fv(mA.location,og);break;case 4:E.vertexAttrib4fv(mA.location,og);break;default:E.vertexAttrib1fv(mA.location,og)}}}}MA()}function Z(){ag();for(const WA in w){const zA=w[WA];for(const lg in zA){const q=zA[lg];for(const O in q)P(q[O].object),delete q[O];delete zA[lg]}delete w[WA]}}function oA(WA){if(w[WA.id]===void 0)return;const zA=w[WA.id];for(const lg in zA){const q=zA[lg];for(const O in q)P(q[O].object),delete q[O];delete zA[lg]}delete w[WA.id]}function Cg(WA){for(const zA in w){const lg=w[zA];if(lg[WA.id]===void 0)continue;const q=lg[WA.id];for(const O in q)P(q[O].object),delete q[O];delete lg[WA.id]}}function ag(){YA(),N=!0,G!==R&&(G=R,Y(G.object))}function YA(){R.geometry=null,R.program=null,R.wireframe=!1}return{setup:J,reset:ag,resetDefaultState:YA,dispose:Z,releaseStatesOfGeometry:oA,releaseStatesOfProgram:Cg,initAttributes:BA,enableAttribute:CA,disableUnusedAttributes:MA}}function hp(E,I,i,o){const r=o.isWebGL2;let c;function y(G){c=G}function w(G,N){E.drawArrays(c,G,N),i.update(N,c,1)}function R(G,N,J){if(J===0)return;let b,Y;if(r)b=E,Y="drawArraysInstanced";else if(b=I.get("ANGLE_instanced_arrays"),Y="drawArraysInstancedANGLE",b===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}b[Y](c,G,N,J),i.update(N,c,J)}this.setMode=y,this.render=w,this.renderInstances=R}function cp(E,I,i){let o;function r(){if(o!==void 0)return o;if(I.has("EXT_texture_filter_anisotropic")===!0){const yA=I.get("EXT_texture_filter_anisotropic");o=E.getParameter(yA.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(yA){if(yA==="highp"){if(E.getShaderPrecisionFormat(E.VERTEX_SHADER,E.HIGH_FLOAT).precision>0&&E.getShaderPrecisionFormat(E.FRAGMENT_SHADER,E.HIGH_FLOAT).precision>0)return"highp";yA="mediump"}return yA==="mediump"&&E.getShaderPrecisionFormat(E.VERTEX_SHADER,E.MEDIUM_FLOAT).precision>0&&E.getShaderPrecisionFormat(E.FRAGMENT_SHADER,E.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const y=typeof WebGL2RenderingContext<"u"&&E.constructor.name==="WebGL2RenderingContext";let w=i.precision!==void 0?i.precision:"highp";const R=c(w);R!==w&&(console.warn("THREE.WebGLRenderer:",w,"not supported, using",R,"instead."),w=R);const G=y||I.has("WEBGL_draw_buffers"),N=i.logarithmicDepthBuffer===!0,J=E.getParameter(E.MAX_TEXTURE_IMAGE_UNITS),b=E.getParameter(E.MAX_VERTEX_TEXTURE_IMAGE_UNITS),Y=E.getParameter(E.MAX_TEXTURE_SIZE),P=E.getParameter(E.MAX_CUBE_MAP_TEXTURE_SIZE),V=E.getParameter(E.MAX_VERTEX_ATTRIBS),L=E.getParameter(E.MAX_VERTEX_UNIFORM_VECTORS),U=E.getParameter(E.MAX_VARYING_VECTORS),fA=E.getParameter(E.MAX_FRAGMENT_UNIFORM_VECTORS),BA=b>0,CA=y||I.has("OES_texture_float"),DA=BA&&CA,MA=y?E.getParameter(E.MAX_SAMPLES):0;return{isWebGL2:y,drawBuffers:G,getMaxAnisotropy:r,getMaxPrecision:c,precision:w,logarithmicDepthBuffer:N,maxTextures:J,maxVertexTextures:b,maxTextureSize:Y,maxCubemapSize:P,maxAttributes:V,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:fA,vertexTextures:BA,floatFragmentTextures:CA,floatVertexTextures:DA,maxSamples:MA}}function lp(E){const I=this;let i=null,o=0,r=!1,c=!1;const y=new KC,w=new jI,R={value:null,needsUpdate:!1};this.uniform=R,this.numPlanes=0,this.numIntersection=0,this.init=function(J,b){const Y=J.length!==0||b||o!==0||r;return r=b,o=J.length,Y},this.beginShadows=function(){c=!0,N(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(J,b){i=N(J,b,0)},this.setState=function(J,b,Y){const P=J.clippingPlanes,V=J.clipIntersection,L=J.clipShadows,U=E.get(J);if(!r||P===null||P.length===0||c&&!L)c?N(null):G();else{const fA=c?0:o,BA=fA*4;let CA=U.clippingState||null;R.value=CA,CA=N(P,b,BA,Y);for(let DA=0;DA!==BA;++DA)CA[DA]=i[DA];U.clippingState=CA,this.numIntersection=V?this.numPlanes:0,this.numPlanes+=fA}};function G(){R.value!==i&&(R.value=i,R.needsUpdate=o>0),I.numPlanes=o,I.numIntersection=0}function N(J,b,Y,P){const V=J!==null?J.length:0;let L=null;if(V!==0){if(L=R.value,P!==!0||L===null){const U=Y+V*4,fA=b.matrixWorldInverse;w.getNormalMatrix(fA),(L===null||L.length<U)&&(L=new Float32Array(U));for(let BA=0,CA=Y;BA!==V;++BA,CA+=4)y.copy(J[BA]).applyMatrix4(fA,w),y.normal.toArray(L,CA),L[CA+3]=y.constant}R.value=L,R.needsUpdate=!0}return I.numPlanes=V,I.numIntersection=0,L}}function dp(E){let I=new WeakMap;function i(y,w){return w===es?y.mapping=OE:w===is&&(y.mapping=PE),y}function o(y){if(y&&y.isTexture&&y.isRenderTargetTexture===!1){const w=y.mapping;if(w===es||w===is)if(I.has(y)){const R=I.get(y).texture;return i(R,y.mapping)}else{const R=y.image;if(R&&R.height>0){const G=new N0(R.height/2);return G.fromEquirectangularTexture(E,y),I.set(y,G),y.addEventListener("dispose",r),i(G.texture,y.mapping)}else return null}}return y}function r(y){const w=y.target;w.removeEventListener("dispose",r);const R=I.get(w);R!==void 0&&(I.delete(w),R.dispose())}function c(){I=new WeakMap}return{get:o,dispose:c}}class up extends ml{constructor(I=-1,i=1,o=1,r=-1,c=.1,y=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=I,this.right=i,this.top=o,this.bottom=r,this.near=c,this.far=y,this.updateProjectionMatrix()}copy(I,i){return super.copy(I,i),this.left=I.left,this.right=I.right,this.top=I.top,this.bottom=I.bottom,this.near=I.near,this.far=I.far,this.zoom=I.zoom,this.view=I.view===null?null:Object.assign({},I.view),this}setViewOffset(I,i,o,r,c,y){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=I,this.view.fullHeight=i,this.view.offsetX=o,this.view.offsetY=r,this.view.width=c,this.view.height=y,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const I=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let c=o-I,y=o+I,w=r+i,R=r-i;if(this.view!==null&&this.view.enabled){const G=(this.right-this.left)/this.view.fullWidth/this.zoom,N=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=G*this.view.offsetX,y=c+G*this.view.width,w-=N*this.view.offsetY,R=w-N*this.view.height}this.projectionMatrix.makeOrthographic(c,y,w,R,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(I){const i=super.toJSON(I);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const HE=4,Jc=[.125,.215,.35,.446,.526,.582],YC=20,$a=new up,bc=new lt;let As=null;const vC=(1+Math.sqrt(5))/2,KE=1/vC,Kc=[new $A(1,1,1),new $A(-1,1,1),new $A(1,1,-1),new $A(-1,1,-1),new $A(0,vC,KE),new $A(0,vC,-KE),new $A(KE,0,vC),new $A(-KE,0,vC),new $A(vC,KE,0),new $A(-vC,KE,0)];class vc{constructor(I){this._renderer=I,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(I,i=0,o=.1,r=100){As=this._renderer.getRenderTarget(),this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(I,o,r,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(I,i=null){return this._fromTexture(I,i)}fromCubemap(I,i=null){return this._fromTexture(I,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(I){this._lodMax=Math.floor(Math.log2(I)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let I=0;I<this._lodPlanes.length;I++)this._lodPlanes[I].dispose()}_cleanup(I){this._renderer.setRenderTarget(As),I.scissorTest=!1,hn(I,0,0,I.width,I.height)}_fromTexture(I,i){I.mapping===OE||I.mapping===PE?this._setSize(I.image.length===0?16:I.image[0].width||I.image[0].image.width):this._setSize(I.image.width/4),As=this._renderer.getRenderTarget();const o=i||this._allocateTargets();return this._textureToCubeUV(I,o),this._applyPMREM(o),this._cleanup(o),o}_allocateTargets(){const I=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,o={magFilter:li,minFilter:li,generateMipmaps:!1,type:ZQ,format:Yi,colorSpace:BB,depthBuffer:!1},r=Yc(I,i,o);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==I||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yc(I,i,o);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dp(c)),this._blurMaterial=wp(c,I,i)}return r}_compileMaterial(I){const i=new NB(this._lodPlanes[0],I);this._renderer.compile(i,$a)}_sceneToCubeUV(I,i,o,r){const w=new di(90,1,i,o),R=[1,-1,1,1,1,1],G=[1,1,1,-1,-1,-1],N=this._renderer,J=N.autoClear,b=N.toneMapping;N.getClearColor(bc),N.toneMapping=eC,N.autoClear=!1;const Y=new fl({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),P=new NB(new Ao,Y);let V=!1;const L=I.background;L?L.isColor&&(Y.color.copy(L),I.background=null,V=!0):(Y.color.copy(bc),V=!0);for(let U=0;U<6;U++){const fA=U%3;fA===0?(w.up.set(0,R[U],0),w.lookAt(G[U],0,0)):fA===1?(w.up.set(0,0,R[U]),w.lookAt(0,G[U],0)):(w.up.set(0,R[U],0),w.lookAt(0,0,G[U]));const BA=this._cubeSize;hn(r,fA*BA,U>2?BA:0,BA,BA),N.setRenderTarget(r),V&&N.render(P,w),N.render(I,w)}P.geometry.dispose(),P.material.dispose(),N.toneMapping=b,N.autoClear=J,I.background=L}_textureToCubeUV(I,i){const o=this._renderer,r=I.mapping===OE||I.mapping===PE;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qc()),this._cubemapMaterial.uniforms.flipEnvMap.value=I.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hc());const c=r?this._cubemapMaterial:this._equirectMaterial,y=new NB(this._lodPlanes[0],c),w=c.uniforms;w.envMap.value=I;const R=this._cubeSize;hn(i,0,0,3*R,2*R),o.setRenderTarget(i),o.render(y,$a)}_applyPMREM(I){const i=this._renderer,o=i.autoClear;i.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const c=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),y=Kc[(r-1)%Kc.length];this._blur(I,r-1,r,c,y)}i.autoClear=o}_blur(I,i,o,r,c){const y=this._pingPongRenderTarget;this._halfBlur(I,y,i,o,r,"latitudinal",c),this._halfBlur(y,I,o,o,r,"longitudinal",c)}_halfBlur(I,i,o,r,c,y,w){const R=this._renderer,G=this._blurMaterial;y!=="latitudinal"&&y!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const N=3,J=new NB(this._lodPlanes[r],G),b=G.uniforms,Y=this._sizeLods[o]-1,P=isFinite(c)?Math.PI/(2*Y):2*Math.PI/(2*YC-1),V=c/P,L=isFinite(c)?1+Math.floor(N*V):YC;L>YC&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${L} samples when the maximum is set to ${YC}`);const U=[];let fA=0;for(let yA=0;yA<YC;++yA){const Bg=yA/V,Z=Math.exp(-Bg*Bg/2);U.push(Z),yA===0?fA+=Z:yA<L&&(fA+=2*Z)}for(let yA=0;yA<U.length;yA++)U[yA]=U[yA]/fA;b.envMap.value=I.texture,b.samples.value=L,b.weights.value=U,b.latitudinal.value=y==="latitudinal",w&&(b.poleAxis.value=w);const{_lodMax:BA}=this;b.dTheta.value=P,b.mipInt.value=BA-o;const CA=this._sizeLods[r],DA=3*CA*(r>BA-HE?r-BA+HE:0),MA=4*(this._cubeSize-CA);hn(i,DA,MA,3*CA,2*CA),R.setRenderTarget(i),R.render(J,$a)}}function Dp(E){const I=[],i=[],o=[];let r=E;const c=E-HE+1+Jc.length;for(let y=0;y<c;y++){const w=Math.pow(2,r);i.push(w);let R=1/w;y>E-HE?R=Jc[y-E+HE-1]:y===0&&(R=0),o.push(R);const G=1/(w-2),N=-G,J=1+G,b=[N,N,J,N,J,J,N,N,J,J,N,J],Y=6,P=6,V=3,L=2,U=1,fA=new Float32Array(V*P*Y),BA=new Float32Array(L*P*Y),CA=new Float32Array(U*P*Y);for(let MA=0;MA<Y;MA++){const yA=MA%3*2/3-1,Bg=MA>2?0:-1,Z=[yA,Bg,0,yA+2/3,Bg,0,yA+2/3,Bg+1,0,yA,Bg,0,yA+2/3,Bg+1,0,yA,Bg+1,0];fA.set(Z,V*P*MA),BA.set(b,L*P*MA);const oA=[MA,MA,MA,MA,MA,MA];CA.set(oA,U*P*MA)}const DA=new CC;DA.setAttribute("position",new eB(fA,V)),DA.setAttribute("uv",new eB(BA,L)),DA.setAttribute("faceIndex",new eB(CA,U)),I.push(DA),r>HE&&r--}return{lodPlanes:I,sizeLods:i,sigmas:o}}function Yc(E,I,i){const o=new WC(E,I,i);return o.texture.mapping=fn,o.texture.name="PMREM.cubeUv",o.scissorTest=!0,o}function hn(E,I,i,o,r){E.viewport.set(I,i,o,r),E.scissor.set(I,i,o,r)}function wp(E,I,i){const o=new Float32Array(YC),r=new $A(0,1,0);return new OC({name:"SphericalGaussianBlur",defines:{n:YC,CUBEUV_TEXEL_WIDTH:1/I,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${E}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ls(),fragmentShader:`

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
		`,blending:tC,depthTest:!1,depthWrite:!1})}function Hc(){return new OC({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ls(),fragmentShader:`

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
		`,blending:tC,depthTest:!1,depthWrite:!1})}function qc(){return new OC({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ls(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tC,depthTest:!1,depthWrite:!1})}function ls(){return`

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
	`}function fp(E){let I=new WeakMap,i=null;function o(w){if(w&&w.isTexture){const R=w.mapping,G=R===es||R===is,N=R===OE||R===PE;if(G||N)if(w.isRenderTargetTexture&&w.needsPMREMUpdate===!0){w.needsPMREMUpdate=!1;let J=I.get(w);return i===null&&(i=new vc(E)),J=G?i.fromEquirectangular(w,J):i.fromCubemap(w,J),I.set(w,J),J.texture}else{if(I.has(w))return I.get(w).texture;{const J=w.image;if(G&&J&&J.height>0||N&&J&&r(J)){i===null&&(i=new vc(E));const b=G?i.fromEquirectangular(w):i.fromCubemap(w);return I.set(w,b),w.addEventListener("dispose",c),b.texture}else return null}}}return w}function r(w){let R=0;const G=6;for(let N=0;N<G;N++)w[N]!==void 0&&R++;return R===G}function c(w){const R=w.target;R.removeEventListener("dispose",c);const G=I.get(R);G!==void 0&&(I.delete(R),G.dispose())}function y(){I=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:o,dispose:y}}function pp(E){const I={};function i(o){if(I[o]!==void 0)return I[o];let r;switch(o){case"WEBGL_depth_texture":r=E.getExtension("WEBGL_depth_texture")||E.getExtension("MOZ_WEBGL_depth_texture")||E.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=E.getExtension("EXT_texture_filter_anisotropic")||E.getExtension("MOZ_EXT_texture_filter_anisotropic")||E.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=E.getExtension("WEBGL_compressed_texture_s3tc")||E.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||E.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=E.getExtension("WEBGL_compressed_texture_pvrtc")||E.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=E.getExtension(o)}return I[o]=r,r}return{has:function(o){return i(o)!==null},init:function(o){o.isWebGL2?i("EXT_color_buffer_float"):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(o){const r=i(o);return r===null&&console.warn("THREE.WebGLRenderer: "+o+" extension not supported."),r}}}function yp(E,I,i,o){const r={},c=new WeakMap;function y(J){const b=J.target;b.index!==null&&I.remove(b.index);for(const P in b.attributes)I.remove(b.attributes[P]);for(const P in b.morphAttributes){const V=b.morphAttributes[P];for(let L=0,U=V.length;L<U;L++)I.remove(V[L])}b.removeEventListener("dispose",y),delete r[b.id];const Y=c.get(b);Y&&(I.remove(Y),c.delete(b)),o.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,i.memory.geometries--}function w(J,b){return r[b.id]===!0||(b.addEventListener("dispose",y),r[b.id]=!0,i.memory.geometries++),b}function R(J){const b=J.attributes;for(const P in b)I.update(b[P],E.ARRAY_BUFFER);const Y=J.morphAttributes;for(const P in Y){const V=Y[P];for(let L=0,U=V.length;L<U;L++)I.update(V[L],E.ARRAY_BUFFER)}}function G(J){const b=[],Y=J.index,P=J.attributes.position;let V=0;if(Y!==null){const fA=Y.array;V=Y.version;for(let BA=0,CA=fA.length;BA<CA;BA+=3){const DA=fA[BA+0],MA=fA[BA+1],yA=fA[BA+2];b.push(DA,MA,MA,yA,yA,DA)}}else if(P!==void 0){const fA=P.array;V=P.version;for(let BA=0,CA=fA.length/3-1;BA<CA;BA+=3){const DA=BA+0,MA=BA+1,yA=BA+2;b.push(DA,MA,MA,yA,yA,DA)}}else return;const L=new(cl(b)?yl:pl)(b,1);L.version=V;const U=c.get(J);U&&I.remove(U),c.set(J,L)}function N(J){const b=c.get(J);if(b){const Y=J.index;Y!==null&&b.version<Y.version&&G(J)}else G(J);return c.get(J)}return{get:w,update:R,getWireframeAttribute:N}}function Mp(E,I,i,o){const r=o.isWebGL2;let c;function y(b){c=b}let w,R;function G(b){w=b.type,R=b.bytesPerElement}function N(b,Y){E.drawElements(c,Y,w,b*R),i.update(Y,c,1)}function J(b,Y,P){if(P===0)return;let V,L;if(r)V=E,L="drawElementsInstanced";else if(V=I.get("ANGLE_instanced_arrays"),L="drawElementsInstancedANGLE",V===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}V[L](c,Y,w,b*R,P),i.update(Y,c,P)}this.setMode=y,this.setIndex=G,this.render=N,this.renderInstances=J}function mp(E){const I={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function o(c,y,w){switch(i.calls++,y){case E.TRIANGLES:i.triangles+=w*(c/3);break;case E.LINES:i.lines+=w*(c/2);break;case E.LINE_STRIP:i.lines+=w*(c-1);break;case E.LINE_LOOP:i.lines+=w*c;break;case E.POINTS:i.points+=w*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",y);break}}function r(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:I,render:i,programs:null,autoReset:!0,reset:r,update:o}}function Rp(E,I){return E[0]-I[0]}function Sp(E,I){return Math.abs(I[1])-Math.abs(E[1])}function Gp(E,I,i){const o={},r=new Float32Array(8),c=new WeakMap,y=new De,w=[];for(let G=0;G<8;G++)w[G]=[G,0];function R(G,N,J){const b=G.morphTargetInfluences;if(I.isWebGL2===!0){const P=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,V=P!==void 0?P.length:0;let L=c.get(N);if(L===void 0||L.count!==V){let zA=function(){YA.dispose(),c.delete(N),N.removeEventListener("dispose",zA)};var Y=zA;L!==void 0&&L.texture.dispose();const BA=N.morphAttributes.position!==void 0,CA=N.morphAttributes.normal!==void 0,DA=N.morphAttributes.color!==void 0,MA=N.morphAttributes.position||[],yA=N.morphAttributes.normal||[],Bg=N.morphAttributes.color||[];let Z=0;BA===!0&&(Z=1),CA===!0&&(Z=2),DA===!0&&(Z=3);let oA=N.attributes.position.count*Z,Cg=1;oA>I.maxTextureSize&&(Cg=Math.ceil(oA/I.maxTextureSize),oA=I.maxTextureSize);const ag=new Float32Array(oA*Cg*4*V),YA=new ul(ag,oA,Cg,V);YA.type=IC,YA.needsUpdate=!0;const WA=Z*4;for(let lg=0;lg<V;lg++){const q=MA[lg],O=yA[lg],EA=Bg[lg],nA=oA*Cg*4*lg;for(let sA=0;sA<q.count;sA++){const mA=sA*WA;BA===!0&&(y.fromBufferAttribute(q,sA),ag[nA+mA+0]=y.x,ag[nA+mA+1]=y.y,ag[nA+mA+2]=y.z,ag[nA+mA+3]=0),CA===!0&&(y.fromBufferAttribute(O,sA),ag[nA+mA+4]=y.x,ag[nA+mA+5]=y.y,ag[nA+mA+6]=y.z,ag[nA+mA+7]=0),DA===!0&&(y.fromBufferAttribute(EA,sA),ag[nA+mA+8]=y.x,ag[nA+mA+9]=y.y,ag[nA+mA+10]=y.z,ag[nA+mA+11]=EA.itemSize===4?y.w:1)}}L={count:V,texture:YA,size:new pt(oA,Cg)},c.set(N,L),N.addEventListener("dispose",zA)}let U=0;for(let BA=0;BA<b.length;BA++)U+=b[BA];const fA=N.morphTargetsRelative?1:1-U;J.getUniforms().setValue(E,"morphTargetBaseInfluence",fA),J.getUniforms().setValue(E,"morphTargetInfluences",b),J.getUniforms().setValue(E,"morphTargetsTexture",L.texture,i),J.getUniforms().setValue(E,"morphTargetsTextureSize",L.size)}else{const P=b===void 0?0:b.length;let V=o[N.id];if(V===void 0||V.length!==P){V=[];for(let CA=0;CA<P;CA++)V[CA]=[CA,0];o[N.id]=V}for(let CA=0;CA<P;CA++){const DA=V[CA];DA[0]=CA,DA[1]=b[CA]}V.sort(Sp);for(let CA=0;CA<8;CA++)CA<P&&V[CA][1]?(w[CA][0]=V[CA][0],w[CA][1]=V[CA][1]):(w[CA][0]=Number.MAX_SAFE_INTEGER,w[CA][1]=0);w.sort(Rp);const L=N.morphAttributes.position,U=N.morphAttributes.normal;let fA=0;for(let CA=0;CA<8;CA++){const DA=w[CA],MA=DA[0],yA=DA[1];MA!==Number.MAX_SAFE_INTEGER&&yA?(L&&N.getAttribute("morphTarget"+CA)!==L[MA]&&N.setAttribute("morphTarget"+CA,L[MA]),U&&N.getAttribute("morphNormal"+CA)!==U[MA]&&N.setAttribute("morphNormal"+CA,U[MA]),r[CA]=yA,fA+=yA):(L&&N.hasAttribute("morphTarget"+CA)===!0&&N.deleteAttribute("morphTarget"+CA),U&&N.hasAttribute("morphNormal"+CA)===!0&&N.deleteAttribute("morphNormal"+CA),r[CA]=0)}const BA=N.morphTargetsRelative?1:1-fA;J.getUniforms().setValue(E,"morphTargetBaseInfluence",BA),J.getUniforms().setValue(E,"morphTargetInfluences",r)}}return{update:R}}function Fp(E,I,i,o){let r=new WeakMap;function c(R){const G=o.render.frame,N=R.geometry,J=I.get(R,N);if(r.get(J)!==G&&(I.update(J),r.set(J,G)),R.isInstancedMesh&&(R.hasEventListener("dispose",w)===!1&&R.addEventListener("dispose",w),r.get(R)!==G&&(i.update(R.instanceMatrix,E.ARRAY_BUFFER),R.instanceColor!==null&&i.update(R.instanceColor,E.ARRAY_BUFFER),r.set(R,G))),R.isSkinnedMesh){const b=R.skeleton;r.get(b)!==G&&(b.update(),r.set(b,G))}return J}function y(){r=new WeakMap}function w(R){const G=R.target;G.removeEventListener("dispose",w),i.remove(G.instanceMatrix),G.instanceColor!==null&&i.remove(G.instanceColor)}return{update:c,dispose:y}}const Fl=new ii,Nl=new ul,Ul=new s0,kl=new Rl,Tc=[],_c=[],Wc=new Float32Array(16),Oc=new Float32Array(9),Pc=new Float32Array(4);function jE(E,I,i){const o=E[0];if(o<=0||o>0)return E;const r=I*i;let c=Tc[r];if(c===void 0&&(c=new Float32Array(r),Tc[r]=c),I!==0){o.toArray(c,0);for(let y=1,w=0;y!==I;++y)w+=i,E[y].toArray(c,w)}return c}function ge(E,I){if(E.length!==I.length)return!1;for(let i=0,o=E.length;i<o;i++)if(E[i]!==I[i])return!1;return!0}function Ie(E,I){for(let i=0,o=I.length;i<o;i++)E[i]=I[i]}function Mn(E,I){let i=_c[I];i===void 0&&(i=new Int32Array(I),_c[I]=i);for(let o=0;o!==I;++o)i[o]=E.allocateTextureUnit();return i}function Np(E,I){const i=this.cache;i[0]!==I&&(E.uniform1f(this.addr,I),i[0]=I)}function Up(E,I){const i=this.cache;if(I.x!==void 0)(i[0]!==I.x||i[1]!==I.y)&&(E.uniform2f(this.addr,I.x,I.y),i[0]=I.x,i[1]=I.y);else{if(ge(i,I))return;E.uniform2fv(this.addr,I),Ie(i,I)}}function kp(E,I){const i=this.cache;if(I.x!==void 0)(i[0]!==I.x||i[1]!==I.y||i[2]!==I.z)&&(E.uniform3f(this.addr,I.x,I.y,I.z),i[0]=I.x,i[1]=I.y,i[2]=I.z);else if(I.r!==void 0)(i[0]!==I.r||i[1]!==I.g||i[2]!==I.b)&&(E.uniform3f(this.addr,I.r,I.g,I.b),i[0]=I.r,i[1]=I.g,i[2]=I.b);else{if(ge(i,I))return;E.uniform3fv(this.addr,I),Ie(i,I)}}function Lp(E,I){const i=this.cache;if(I.x!==void 0)(i[0]!==I.x||i[1]!==I.y||i[2]!==I.z||i[3]!==I.w)&&(E.uniform4f(this.addr,I.x,I.y,I.z,I.w),i[0]=I.x,i[1]=I.y,i[2]=I.z,i[3]=I.w);else{if(ge(i,I))return;E.uniform4fv(this.addr,I),Ie(i,I)}}function xp(E,I){const i=this.cache,o=I.elements;if(o===void 0){if(ge(i,I))return;E.uniformMatrix2fv(this.addr,!1,I),Ie(i,I)}else{if(ge(i,o))return;Pc.set(o),E.uniformMatrix2fv(this.addr,!1,Pc),Ie(i,o)}}function Jp(E,I){const i=this.cache,o=I.elements;if(o===void 0){if(ge(i,I))return;E.uniformMatrix3fv(this.addr,!1,I),Ie(i,I)}else{if(ge(i,o))return;Oc.set(o),E.uniformMatrix3fv(this.addr,!1,Oc),Ie(i,o)}}function bp(E,I){const i=this.cache,o=I.elements;if(o===void 0){if(ge(i,I))return;E.uniformMatrix4fv(this.addr,!1,I),Ie(i,I)}else{if(ge(i,o))return;Wc.set(o),E.uniformMatrix4fv(this.addr,!1,Wc),Ie(i,o)}}function Kp(E,I){const i=this.cache;i[0]!==I&&(E.uniform1i(this.addr,I),i[0]=I)}function vp(E,I){const i=this.cache;if(I.x!==void 0)(i[0]!==I.x||i[1]!==I.y)&&(E.uniform2i(this.addr,I.x,I.y),i[0]=I.x,i[1]=I.y);else{if(ge(i,I))return;E.uniform2iv(this.addr,I),Ie(i,I)}}function Yp(E,I){const i=this.cache;if(I.x!==void 0)(i[0]!==I.x||i[1]!==I.y||i[2]!==I.z)&&(E.uniform3i(this.addr,I.x,I.y,I.z),i[0]=I.x,i[1]=I.y,i[2]=I.z);else{if(ge(i,I))return;E.uniform3iv(this.addr,I),Ie(i,I)}}function Hp(E,I){const i=this.cache;if(I.x!==void 0)(i[0]!==I.x||i[1]!==I.y||i[2]!==I.z||i[3]!==I.w)&&(E.uniform4i(this.addr,I.x,I.y,I.z,I.w),i[0]=I.x,i[1]=I.y,i[2]=I.z,i[3]=I.w);else{if(ge(i,I))return;E.uniform4iv(this.addr,I),Ie(i,I)}}function qp(E,I){const i=this.cache;i[0]!==I&&(E.uniform1ui(this.addr,I),i[0]=I)}function Tp(E,I){const i=this.cache;if(I.x!==void 0)(i[0]!==I.x||i[1]!==I.y)&&(E.uniform2ui(this.addr,I.x,I.y),i[0]=I.x,i[1]=I.y);else{if(ge(i,I))return;E.uniform2uiv(this.addr,I),Ie(i,I)}}function _p(E,I){const i=this.cache;if(I.x!==void 0)(i[0]!==I.x||i[1]!==I.y||i[2]!==I.z)&&(E.uniform3ui(this.addr,I.x,I.y,I.z),i[0]=I.x,i[1]=I.y,i[2]=I.z);else{if(ge(i,I))return;E.uniform3uiv(this.addr,I),Ie(i,I)}}function Wp(E,I){const i=this.cache;if(I.x!==void 0)(i[0]!==I.x||i[1]!==I.y||i[2]!==I.z||i[3]!==I.w)&&(E.uniform4ui(this.addr,I.x,I.y,I.z,I.w),i[0]=I.x,i[1]=I.y,i[2]=I.z,i[3]=I.w);else{if(ge(i,I))return;E.uniform4uiv(this.addr,I),Ie(i,I)}}function Op(E,I,i){const o=this.cache,r=i.allocateTextureUnit();o[0]!==r&&(E.uniform1i(this.addr,r),o[0]=r),i.setTexture2D(I||Fl,r)}function Pp(E,I,i){const o=this.cache,r=i.allocateTextureUnit();o[0]!==r&&(E.uniform1i(this.addr,r),o[0]=r),i.setTexture3D(I||Ul,r)}function Vp(E,I,i){const o=this.cache,r=i.allocateTextureUnit();o[0]!==r&&(E.uniform1i(this.addr,r),o[0]=r),i.setTextureCube(I||kl,r)}function Zp(E,I,i){const o=this.cache,r=i.allocateTextureUnit();o[0]!==r&&(E.uniform1i(this.addr,r),o[0]=r),i.setTexture2DArray(I||Nl,r)}function Xp(E){switch(E){case 5126:return Np;case 35664:return Up;case 35665:return kp;case 35666:return Lp;case 35674:return xp;case 35675:return Jp;case 35676:return bp;case 5124:case 35670:return Kp;case 35667:case 35671:return vp;case 35668:case 35672:return Yp;case 35669:case 35673:return Hp;case 5125:return qp;case 36294:return Tp;case 36295:return _p;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return Pp;case 35680:case 36300:case 36308:case 36293:return Vp;case 36289:case 36303:case 36311:case 36292:return Zp}}function zp(E,I){E.uniform1fv(this.addr,I)}function jp(E,I){const i=jE(I,this.size,2);E.uniform2fv(this.addr,i)}function $p(E,I){const i=jE(I,this.size,3);E.uniform3fv(this.addr,i)}function Ay(E,I){const i=jE(I,this.size,4);E.uniform4fv(this.addr,i)}function gy(E,I){const i=jE(I,this.size,4);E.uniformMatrix2fv(this.addr,!1,i)}function Iy(E,I){const i=jE(I,this.size,9);E.uniformMatrix3fv(this.addr,!1,i)}function ty(E,I){const i=jE(I,this.size,16);E.uniformMatrix4fv(this.addr,!1,i)}function ey(E,I){E.uniform1iv(this.addr,I)}function iy(E,I){E.uniform2iv(this.addr,I)}function By(E,I){E.uniform3iv(this.addr,I)}function Cy(E,I){E.uniform4iv(this.addr,I)}function Ey(E,I){E.uniform1uiv(this.addr,I)}function Qy(E,I){E.uniform2uiv(this.addr,I)}function oy(E,I){E.uniform3uiv(this.addr,I)}function ny(E,I){E.uniform4uiv(this.addr,I)}function ay(E,I,i){const o=this.cache,r=I.length,c=Mn(i,r);ge(o,c)||(E.uniform1iv(this.addr,c),Ie(o,c));for(let y=0;y!==r;++y)i.setTexture2D(I[y]||Fl,c[y])}function sy(E,I,i){const o=this.cache,r=I.length,c=Mn(i,r);ge(o,c)||(E.uniform1iv(this.addr,c),Ie(o,c));for(let y=0;y!==r;++y)i.setTexture3D(I[y]||Ul,c[y])}function ry(E,I,i){const o=this.cache,r=I.length,c=Mn(i,r);ge(o,c)||(E.uniform1iv(this.addr,c),Ie(o,c));for(let y=0;y!==r;++y)i.setTextureCube(I[y]||kl,c[y])}function hy(E,I,i){const o=this.cache,r=I.length,c=Mn(i,r);ge(o,c)||(E.uniform1iv(this.addr,c),Ie(o,c));for(let y=0;y!==r;++y)i.setTexture2DArray(I[y]||Nl,c[y])}function cy(E){switch(E){case 5126:return zp;case 35664:return jp;case 35665:return $p;case 35666:return Ay;case 35674:return gy;case 35675:return Iy;case 35676:return ty;case 5124:case 35670:return ey;case 35667:case 35671:return iy;case 35668:case 35672:return By;case 35669:case 35673:return Cy;case 5125:return Ey;case 36294:return Qy;case 36295:return oy;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return ay;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return hy}}class ly{constructor(I,i,o){this.id=I,this.addr=o,this.cache=[],this.setValue=Xp(i.type)}}class dy{constructor(I,i,o){this.id=I,this.addr=o,this.cache=[],this.size=i.size,this.setValue=cy(i.type)}}class uy{constructor(I){this.id=I,this.seq=[],this.map={}}setValue(I,i,o){const r=this.seq;for(let c=0,y=r.length;c!==y;++c){const w=r[c];w.setValue(I,i[w.id],o)}}}const gs=/(\w+)(\])?(\[|\.)?/g;function Vc(E,I){E.seq.push(I),E.map[I.id]=I}function Dy(E,I,i){const o=E.name,r=o.length;for(gs.lastIndex=0;;){const c=gs.exec(o),y=gs.lastIndex;let w=c[1];const R=c[2]==="]",G=c[3];if(R&&(w=w|0),G===void 0||G==="["&&y+2===r){Vc(i,G===void 0?new ly(w,E,I):new dy(w,E,I));break}else{let J=i.map[w];J===void 0&&(J=new uy(w),Vc(i,J)),i=J}}}class dn{constructor(I,i){this.seq=[],this.map={};const o=I.getProgramParameter(i,I.ACTIVE_UNIFORMS);for(let r=0;r<o;++r){const c=I.getActiveUniform(i,r),y=I.getUniformLocation(i,c.name);Dy(c,y,this)}}setValue(I,i,o,r){const c=this.map[i];c!==void 0&&c.setValue(I,o,r)}setOptional(I,i,o){const r=i[o];r!==void 0&&this.setValue(I,o,r)}static upload(I,i,o,r){for(let c=0,y=i.length;c!==y;++c){const w=i[c],R=o[w.id];R.needsUpdate!==!1&&w.setValue(I,R.value,r)}}static seqWithValue(I,i){const o=[];for(let r=0,c=I.length;r!==c;++r){const y=I[r];y.id in i&&o.push(y)}return o}}function Zc(E,I,i){const o=E.createShader(I);return E.shaderSource(o,i),E.compileShader(o),o}let wy=0;function fy(E,I){const i=E.split(`
`),o=[],r=Math.max(I-6,0),c=Math.min(I+6,i.length);for(let y=r;y<c;y++){const w=y+1;o.push(`${w===I?">":" "} ${w}: ${i[y]}`)}return o.join(`
`)}function py(E){switch(E){case BB:return["Linear","( value )"];case bt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",E),["Linear","( value )"]}}function Xc(E,I,i){const o=E.getShaderParameter(I,E.COMPILE_STATUS),r=E.getShaderInfoLog(I).trim();if(o&&r==="")return"";const c=/ERROR: 0:(\d+)/.exec(r);if(c){const y=parseInt(c[1]);return i.toUpperCase()+`

`+r+`

`+fy(E.getShaderSource(I),y)}else return r}function yy(E,I){const i=py(I);return"vec4 "+E+"( vec4 value ) { return LinearTo"+i[0]+i[1]+"; }"}function My(E,I){let i;switch(I){case GD:i="Linear";break;case FD:i="Reinhard";break;case ND:i="OptimizedCineon";break;case UD:i="ACESFilmic";break;case kD:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",I),i="Linear"}return"vec3 "+E+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function my(E){return[E.extensionDerivatives||E.envMapCubeUVHeight||E.bumpMap||E.normalMapTangentSpace||E.clearcoatNormalMap||E.flatShading||E.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(E.extensionFragDepth||E.logarithmicDepthBuffer)&&E.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",E.extensionDrawBuffers&&E.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(E.extensionShaderTextureLOD||E.envMap||E.transmission)&&E.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(OQ).join(`
`)}function Ry(E){const I=[];for(const i in E){const o=E[i];o!==!1&&I.push("#define "+i+" "+o)}return I.join(`
`)}function Sy(E,I){const i={},o=E.getProgramParameter(I,E.ACTIVE_ATTRIBUTES);for(let r=0;r<o;r++){const c=E.getActiveAttrib(I,r),y=c.name;let w=1;c.type===E.FLOAT_MAT2&&(w=2),c.type===E.FLOAT_MAT3&&(w=3),c.type===E.FLOAT_MAT4&&(w=4),i[y]={type:c.type,location:E.getAttribLocation(I,y),locationSize:w}}return i}function OQ(E){return E!==""}function zc(E,I){const i=I.numSpotLightShadows+I.numSpotLightMaps-I.numSpotLightShadowsWithMaps;return E.replace(/NUM_DIR_LIGHTS/g,I.numDirLights).replace(/NUM_SPOT_LIGHTS/g,I.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,I.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,I.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,I.numPointLights).replace(/NUM_HEMI_LIGHTS/g,I.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,I.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,I.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,I.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,I.numPointLightShadows)}function jc(E,I){return E.replace(/NUM_CLIPPING_PLANES/g,I.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,I.numClippingPlanes-I.numClipIntersection)}const Gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ns(E){return E.replace(Gy,Ny)}const Fy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ny(E,I){let i=VI[I];if(i===void 0){const o=Fy.get(I);if(o!==void 0)i=VI[o],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',I,o);else throw new Error("Can not resolve #include <"+I+">")}return ns(i)}const Uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(E){return E.replace(Uy,ky)}function ky(E,I,i,o){let r="";for(let c=parseInt(I);c<parseInt(i);c++)r+=o.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return r}function Al(E){let I="precision "+E.precision+` float;
precision `+E.precision+" int;";return E.precision==="highp"?I+=`
#define HIGH_PRECISION`:E.precision==="mediump"?I+=`
#define MEDIUM_PRECISION`:E.precision==="lowp"&&(I+=`
#define LOW_PRECISION`),I}function Ly(E){let I="SHADOWMAP_TYPE_BASIC";return E.shadowMapType===el?I="SHADOWMAP_TYPE_PCF":E.shadowMapType===CD?I="SHADOWMAP_TYPE_PCF_SOFT":E.shadowMapType===SB&&(I="SHADOWMAP_TYPE_VSM"),I}function xy(E){let I="ENVMAP_TYPE_CUBE";if(E.envMap)switch(E.envMapMode){case OE:case PE:I="ENVMAP_TYPE_CUBE";break;case fn:I="ENVMAP_TYPE_CUBE_UV";break}return I}function Jy(E){let I="ENVMAP_MODE_REFLECTION";if(E.envMap)switch(E.envMapMode){case PE:I="ENVMAP_MODE_REFRACTION";break}return I}function by(E){let I="ENVMAP_BLENDING_NONE";if(E.envMap)switch(E.combine){case ss:I="ENVMAP_BLENDING_MULTIPLY";break;case RD:I="ENVMAP_BLENDING_MIX";break;case SD:I="ENVMAP_BLENDING_ADD";break}return I}function Ky(E){const I=E.envMapCubeUVHeight;if(I===null)return null;const i=Math.log2(I)-2,o=1/I;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:o,maxMip:i}}function vy(E,I,i,o){const r=E.getContext(),c=i.defines;let y=i.vertexShader,w=i.fragmentShader;const R=Ly(i),G=xy(i),N=Jy(i),J=by(i),b=Ky(i),Y=i.isWebGL2?"":my(i),P=Ry(c),V=r.createProgram();let L,U,fA=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(L=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,P].filter(OQ).join(`
`),L.length>0&&(L+=`
`),U=[Y,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,P].filter(OQ).join(`
`),U.length>0&&(U+=`
`)):(L=[Al(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,P,i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+N:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+R:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(OQ).join(`
`),U=[Y,Al(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,P,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+G:"",i.envMap?"#define "+N:"",i.envMap?"#define "+J:"",b?"#define CUBEUV_TEXEL_WIDTH "+b.texelWidth:"",b?"#define CUBEUV_TEXEL_HEIGHT "+b.texelHeight:"",b?"#define CUBEUV_MAX_MIP "+b.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+R:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==eC?"#define TONE_MAPPING":"",i.toneMapping!==eC?VI.tonemapping_pars_fragment:"",i.toneMapping!==eC?My("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",VI.colorspace_pars_fragment,yy("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(OQ).join(`
`)),y=ns(y),y=zc(y,i),y=jc(y,i),w=ns(w),w=zc(w,i),w=jc(w,i),y=$c(y),w=$c(w),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(fA=`#version 300 es
`,L=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+L,U=["#define varying in",i.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+U);const BA=fA+L+y,CA=fA+U+w,DA=Zc(r,r.VERTEX_SHADER,BA),MA=Zc(r,r.FRAGMENT_SHADER,CA);if(r.attachShader(V,DA),r.attachShader(V,MA),i.index0AttributeName!==void 0?r.bindAttribLocation(V,0,i.index0AttributeName):i.morphTargets===!0&&r.bindAttribLocation(V,0,"position"),r.linkProgram(V),E.debug.checkShaderErrors){const Z=r.getProgramInfoLog(V).trim(),oA=r.getShaderInfoLog(DA).trim(),Cg=r.getShaderInfoLog(MA).trim();let ag=!0,YA=!0;if(r.getProgramParameter(V,r.LINK_STATUS)===!1)if(ag=!1,typeof E.debug.onShaderError=="function")E.debug.onShaderError(r,V,DA,MA);else{const WA=Xc(r,DA,"vertex"),zA=Xc(r,MA,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(V,r.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+WA+`
`+zA)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(oA===""||Cg==="")&&(YA=!1);YA&&(this.diagnostics={runnable:ag,programLog:Z,vertexShader:{log:oA,prefix:L},fragmentShader:{log:Cg,prefix:U}})}r.deleteShader(DA),r.deleteShader(MA);let yA;this.getUniforms=function(){return yA===void 0&&(yA=new dn(r,V)),yA};let Bg;return this.getAttributes=function(){return Bg===void 0&&(Bg=Sy(r,V)),Bg},this.destroy=function(){o.releaseStatesOfProgram(this),r.deleteProgram(V),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=wy++,this.cacheKey=I,this.usedTimes=1,this.program=V,this.vertexShader=DA,this.fragmentShader=MA,this}let Yy=0;class Hy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(I){const i=I.vertexShader,o=I.fragmentShader,r=this._getShaderStage(i),c=this._getShaderStage(o),y=this._getShaderCacheForMaterial(I);return y.has(r)===!1&&(y.add(r),r.usedTimes++),y.has(c)===!1&&(y.add(c),c.usedTimes++),this}remove(I){const i=this.materialCache.get(I);for(const o of i)o.usedTimes--,o.usedTimes===0&&this.shaderCache.delete(o.code);return this.materialCache.delete(I),this}getVertexShaderID(I){return this._getShaderStage(I.vertexShader).id}getFragmentShaderID(I){return this._getShaderStage(I.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(I){const i=this.materialCache;let o=i.get(I);return o===void 0&&(o=new Set,i.set(I,o)),o}_getShaderStage(I){const i=this.shaderCache;let o=i.get(I);return o===void 0&&(o=new qy(I),i.set(I,o)),o}}class qy{constructor(I){this.id=Yy++,this.code=I,this.usedTimes=0}}function Ty(E,I,i,o,r,c,y){const w=new Dl,R=new Hy,G=[],N=r.isWebGL2,J=r.logarithmicDepthBuffer,b=r.vertexTextures;let Y=r.precision;const P={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function V(Z){return Z===0?"uv":`uv${Z}`}function L(Z,oA,Cg,ag,YA){const WA=ag.fog,zA=YA.geometry,lg=Z.isMeshStandardMaterial?ag.environment:null,q=(Z.isMeshStandardMaterial?i:I).get(Z.envMap||lg),O=q&&q.mapping===fn?q.image.height:null,EA=P[Z.type];Z.precision!==null&&(Y=r.getMaxPrecision(Z.precision),Y!==Z.precision&&console.warn("THREE.WebGLProgram.getParameters:",Z.precision,"not supported, using",Y,"instead."));const nA=zA.morphAttributes.position||zA.morphAttributes.normal||zA.morphAttributes.color,sA=nA!==void 0?nA.length:0;let mA=0;zA.morphAttributes.position!==void 0&&(mA=1),zA.morphAttributes.normal!==void 0&&(mA=2),zA.morphAttributes.color!==void 0&&(mA=3);let Ig,og,Rg,Hg;if(EA){const Dt=IB[EA];Ig=Dt.vertexShader,og=Dt.fragmentShader}else Ig=Z.vertexShader,og=Z.fragmentShader,R.update(Z),Rg=R.getVertexShaderID(Z),Hg=R.getFragmentShaderID(Z);const eI=E.getRenderTarget(),EI=YA.isInstancedMesh===!0,wI=!!Z.map,cg=!!Z.matcap,ZA=!!q,cA=!!Z.aoMap,iI=!!Z.lightMap,dg=!!Z.bumpMap,Pg=!!Z.normalMap,Og=!!Z.displacementMap,dI=!!Z.emissiveMap,uI=!!Z.metalnessMap,HA=!!Z.roughnessMap,FI=Z.anisotropy>0,Bt=Z.clearcoat>0,Nt=Z.iridescence>0,AA=Z.sheen>0,X=Z.transmission>0,VA=FI&&!!Z.anisotropyMap,Ug=Bt&&!!Z.clearcoatMap,Fg=Bt&&!!Z.clearcoatNormalMap,xg=Bt&&!!Z.clearcoatRoughnessMap,hI=Nt&&!!Z.iridescenceMap,vg=Nt&&!!Z.iridescenceThicknessMap,Ag=AA&&!!Z.sheenColorMap,pI=AA&&!!Z.sheenRoughnessMap,DI=!!Z.specularMap,yI=!!Z.specularColorMap,aI=!!Z.specularIntensityMap,sI=X&&!!Z.transmissionMap,qI=X&&!!Z.thicknessMap,dt=!!Z.gradientMap,GA=!!Z.alphaMap,Zg=Z.alphaTest>0,gg=!!Z.alphaHash,kg=!!Z.extensions,jg=!!zA.attributes.uv1,tt=!!zA.attributes.uv2,ut=!!zA.attributes.uv3;let Ut=eC;return Z.toneMapped&&(eI===null||eI.isXRRenderTarget===!0)&&(Ut=E.toneMapping),{isWebGL2:N,shaderID:EA,shaderType:Z.type,shaderName:Z.name,vertexShader:Ig,fragmentShader:og,defines:Z.defines,customVertexShaderID:Rg,customFragmentShaderID:Hg,isRawShaderMaterial:Z.isRawShaderMaterial===!0,glslVersion:Z.glslVersion,precision:Y,instancing:EI,instancingColor:EI&&YA.instanceColor!==null,supportsVertexTextures:b,outputColorSpace:eI===null?E.outputColorSpace:eI.isXRRenderTarget===!0?eI.texture.colorSpace:BB,map:wI,matcap:cg,envMap:ZA,envMapMode:ZA&&q.mapping,envMapCubeUVHeight:O,aoMap:cA,lightMap:iI,bumpMap:dg,normalMap:Pg,displacementMap:b&&Og,emissiveMap:dI,normalMapObjectSpace:Pg&&Z.normalMapType===OD,normalMapTangentSpace:Pg&&Z.normalMapType===hl,metalnessMap:uI,roughnessMap:HA,anisotropy:FI,anisotropyMap:VA,clearcoat:Bt,clearcoatMap:Ug,clearcoatNormalMap:Fg,clearcoatRoughnessMap:xg,iridescence:Nt,iridescenceMap:hI,iridescenceThicknessMap:vg,sheen:AA,sheenColorMap:Ag,sheenRoughnessMap:pI,specularMap:DI,specularColorMap:yI,specularIntensityMap:aI,transmission:X,transmissionMap:sI,thicknessMap:qI,gradientMap:dt,opaque:Z.transparent===!1&&Z.blending===TE,alphaMap:GA,alphaTest:Zg,alphaHash:gg,combine:Z.combine,mapUv:wI&&V(Z.map.channel),aoMapUv:cA&&V(Z.aoMap.channel),lightMapUv:iI&&V(Z.lightMap.channel),bumpMapUv:dg&&V(Z.bumpMap.channel),normalMapUv:Pg&&V(Z.normalMap.channel),displacementMapUv:Og&&V(Z.displacementMap.channel),emissiveMapUv:dI&&V(Z.emissiveMap.channel),metalnessMapUv:uI&&V(Z.metalnessMap.channel),roughnessMapUv:HA&&V(Z.roughnessMap.channel),anisotropyMapUv:VA&&V(Z.anisotropyMap.channel),clearcoatMapUv:Ug&&V(Z.clearcoatMap.channel),clearcoatNormalMapUv:Fg&&V(Z.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xg&&V(Z.clearcoatRoughnessMap.channel),iridescenceMapUv:hI&&V(Z.iridescenceMap.channel),iridescenceThicknessMapUv:vg&&V(Z.iridescenceThicknessMap.channel),sheenColorMapUv:Ag&&V(Z.sheenColorMap.channel),sheenRoughnessMapUv:pI&&V(Z.sheenRoughnessMap.channel),specularMapUv:DI&&V(Z.specularMap.channel),specularColorMapUv:yI&&V(Z.specularColorMap.channel),specularIntensityMapUv:aI&&V(Z.specularIntensityMap.channel),transmissionMapUv:sI&&V(Z.transmissionMap.channel),thicknessMapUv:qI&&V(Z.thicknessMap.channel),alphaMapUv:GA&&V(Z.alphaMap.channel),vertexTangents:!!zA.attributes.tangent&&(Pg||FI),vertexColors:Z.vertexColors,vertexAlphas:Z.vertexColors===!0&&!!zA.attributes.color&&zA.attributes.color.itemSize===4,vertexUv1s:jg,vertexUv2s:tt,vertexUv3s:ut,pointsUvs:YA.isPoints===!0&&!!zA.attributes.uv&&(wI||GA),fog:!!WA,useFog:Z.fog===!0,fogExp2:WA&&WA.isFogExp2,flatShading:Z.flatShading===!0,sizeAttenuation:Z.sizeAttenuation===!0,logarithmicDepthBuffer:J,skinning:YA.isSkinnedMesh===!0,morphTargets:zA.morphAttributes.position!==void 0,morphNormals:zA.morphAttributes.normal!==void 0,morphColors:zA.morphAttributes.color!==void 0,morphTargetsCount:sA,morphTextureStride:mA,numDirLights:oA.directional.length,numPointLights:oA.point.length,numSpotLights:oA.spot.length,numSpotLightMaps:oA.spotLightMap.length,numRectAreaLights:oA.rectArea.length,numHemiLights:oA.hemi.length,numDirLightShadows:oA.directionalShadowMap.length,numPointLightShadows:oA.pointShadowMap.length,numSpotLightShadows:oA.spotShadowMap.length,numSpotLightShadowsWithMaps:oA.numSpotLightShadowsWithMaps,numClippingPlanes:y.numPlanes,numClipIntersection:y.numIntersection,dithering:Z.dithering,shadowMapEnabled:E.shadowMap.enabled&&Cg.length>0,shadowMapType:E.shadowMap.type,toneMapping:Ut,useLegacyLights:E._useLegacyLights,decodeVideoTexture:wI&&Z.map.isVideoTexture===!0&&Z.map.colorSpace===bt,premultipliedAlpha:Z.premultipliedAlpha,doubleSided:Z.side===GB,flipSided:Z.side===Oe,useDepthPacking:Z.depthPacking>=0,depthPacking:Z.depthPacking||0,index0AttributeName:Z.index0AttributeName,extensionDerivatives:kg&&Z.extensions.derivatives===!0,extensionFragDepth:kg&&Z.extensions.fragDepth===!0,extensionDrawBuffers:kg&&Z.extensions.drawBuffers===!0,extensionShaderTextureLOD:kg&&Z.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:N||o.has("EXT_frag_depth"),rendererExtensionDrawBuffers:N||o.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:N||o.has("EXT_shader_texture_lod"),customProgramCacheKey:Z.customProgramCacheKey()}}function U(Z){const oA=[];if(Z.shaderID?oA.push(Z.shaderID):(oA.push(Z.customVertexShaderID),oA.push(Z.customFragmentShaderID)),Z.defines!==void 0)for(const Cg in Z.defines)oA.push(Cg),oA.push(Z.defines[Cg]);return Z.isRawShaderMaterial===!1&&(fA(oA,Z),BA(oA,Z),oA.push(E.outputColorSpace)),oA.push(Z.customProgramCacheKey),oA.join()}function fA(Z,oA){Z.push(oA.precision),Z.push(oA.outputColorSpace),Z.push(oA.envMapMode),Z.push(oA.envMapCubeUVHeight),Z.push(oA.mapUv),Z.push(oA.alphaMapUv),Z.push(oA.lightMapUv),Z.push(oA.aoMapUv),Z.push(oA.bumpMapUv),Z.push(oA.normalMapUv),Z.push(oA.displacementMapUv),Z.push(oA.emissiveMapUv),Z.push(oA.metalnessMapUv),Z.push(oA.roughnessMapUv),Z.push(oA.anisotropyMapUv),Z.push(oA.clearcoatMapUv),Z.push(oA.clearcoatNormalMapUv),Z.push(oA.clearcoatRoughnessMapUv),Z.push(oA.iridescenceMapUv),Z.push(oA.iridescenceThicknessMapUv),Z.push(oA.sheenColorMapUv),Z.push(oA.sheenRoughnessMapUv),Z.push(oA.specularMapUv),Z.push(oA.specularColorMapUv),Z.push(oA.specularIntensityMapUv),Z.push(oA.transmissionMapUv),Z.push(oA.thicknessMapUv),Z.push(oA.combine),Z.push(oA.fogExp2),Z.push(oA.sizeAttenuation),Z.push(oA.morphTargetsCount),Z.push(oA.morphAttributeCount),Z.push(oA.numDirLights),Z.push(oA.numPointLights),Z.push(oA.numSpotLights),Z.push(oA.numSpotLightMaps),Z.push(oA.numHemiLights),Z.push(oA.numRectAreaLights),Z.push(oA.numDirLightShadows),Z.push(oA.numPointLightShadows),Z.push(oA.numSpotLightShadows),Z.push(oA.numSpotLightShadowsWithMaps),Z.push(oA.shadowMapType),Z.push(oA.toneMapping),Z.push(oA.numClippingPlanes),Z.push(oA.numClipIntersection),Z.push(oA.depthPacking)}function BA(Z,oA){w.disableAll(),oA.isWebGL2&&w.enable(0),oA.supportsVertexTextures&&w.enable(1),oA.instancing&&w.enable(2),oA.instancingColor&&w.enable(3),oA.matcap&&w.enable(4),oA.envMap&&w.enable(5),oA.normalMapObjectSpace&&w.enable(6),oA.normalMapTangentSpace&&w.enable(7),oA.clearcoat&&w.enable(8),oA.iridescence&&w.enable(9),oA.alphaTest&&w.enable(10),oA.vertexColors&&w.enable(11),oA.vertexAlphas&&w.enable(12),oA.vertexUv1s&&w.enable(13),oA.vertexUv2s&&w.enable(14),oA.vertexUv3s&&w.enable(15),oA.vertexTangents&&w.enable(16),oA.anisotropy&&w.enable(17),Z.push(w.mask),w.disableAll(),oA.fog&&w.enable(0),oA.useFog&&w.enable(1),oA.flatShading&&w.enable(2),oA.logarithmicDepthBuffer&&w.enable(3),oA.skinning&&w.enable(4),oA.morphTargets&&w.enable(5),oA.morphNormals&&w.enable(6),oA.morphColors&&w.enable(7),oA.premultipliedAlpha&&w.enable(8),oA.shadowMapEnabled&&w.enable(9),oA.useLegacyLights&&w.enable(10),oA.doubleSided&&w.enable(11),oA.flipSided&&w.enable(12),oA.useDepthPacking&&w.enable(13),oA.dithering&&w.enable(14),oA.transmission&&w.enable(15),oA.sheen&&w.enable(16),oA.opaque&&w.enable(17),oA.pointsUvs&&w.enable(18),oA.decodeVideoTexture&&w.enable(19),Z.push(w.mask)}function CA(Z){const oA=P[Z.type];let Cg;if(oA){const ag=IB[oA];Cg=R0.clone(ag.uniforms)}else Cg=Z.uniforms;return Cg}function DA(Z,oA){let Cg;for(let ag=0,YA=G.length;ag<YA;ag++){const WA=G[ag];if(WA.cacheKey===oA){Cg=WA,++Cg.usedTimes;break}}return Cg===void 0&&(Cg=new vy(E,oA,Z,c),G.push(Cg)),Cg}function MA(Z){if(--Z.usedTimes===0){const oA=G.indexOf(Z);G[oA]=G[G.length-1],G.pop(),Z.destroy()}}function yA(Z){R.remove(Z)}function Bg(){R.dispose()}return{getParameters:L,getProgramCacheKey:U,getUniforms:CA,acquireProgram:DA,releaseProgram:MA,releaseShaderCache:yA,programs:G,dispose:Bg}}function _y(){let E=new WeakMap;function I(c){let y=E.get(c);return y===void 0&&(y={},E.set(c,y)),y}function i(c){E.delete(c)}function o(c,y,w){E.get(c)[y]=w}function r(){E=new WeakMap}return{get:I,remove:i,update:o,dispose:r}}function Wy(E,I){return E.groupOrder!==I.groupOrder?E.groupOrder-I.groupOrder:E.renderOrder!==I.renderOrder?E.renderOrder-I.renderOrder:E.material.id!==I.material.id?E.material.id-I.material.id:E.z!==I.z?E.z-I.z:E.id-I.id}function gl(E,I){return E.groupOrder!==I.groupOrder?E.groupOrder-I.groupOrder:E.renderOrder!==I.renderOrder?E.renderOrder-I.renderOrder:E.z!==I.z?I.z-E.z:E.id-I.id}function Il(){const E=[];let I=0;const i=[],o=[],r=[];function c(){I=0,i.length=0,o.length=0,r.length=0}function y(J,b,Y,P,V,L){let U=E[I];return U===void 0?(U={id:J.id,object:J,geometry:b,material:Y,groupOrder:P,renderOrder:J.renderOrder,z:V,group:L},E[I]=U):(U.id=J.id,U.object=J,U.geometry=b,U.material=Y,U.groupOrder=P,U.renderOrder=J.renderOrder,U.z=V,U.group=L),I++,U}function w(J,b,Y,P,V,L){const U=y(J,b,Y,P,V,L);Y.transmission>0?o.push(U):Y.transparent===!0?r.push(U):i.push(U)}function R(J,b,Y,P,V,L){const U=y(J,b,Y,P,V,L);Y.transmission>0?o.unshift(U):Y.transparent===!0?r.unshift(U):i.unshift(U)}function G(J,b){i.length>1&&i.sort(J||Wy),o.length>1&&o.sort(b||gl),r.length>1&&r.sort(b||gl)}function N(){for(let J=I,b=E.length;J<b;J++){const Y=E[J];if(Y.id===null)break;Y.id=null,Y.object=null,Y.geometry=null,Y.material=null,Y.group=null}}return{opaque:i,transmissive:o,transparent:r,init:c,push:w,unshift:R,finish:N,sort:G}}function Oy(){let E=new WeakMap;function I(o,r){const c=E.get(o);let y;return c===void 0?(y=new Il,E.set(o,[y])):r>=c.length?(y=new Il,c.push(y)):y=c[r],y}function i(){E=new WeakMap}return{get:I,dispose:i}}function Py(){const E={};return{get:function(I){if(E[I.id]!==void 0)return E[I.id];let i;switch(I.type){case"DirectionalLight":i={direction:new $A,color:new lt};break;case"SpotLight":i={position:new $A,direction:new $A,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $A,color:new lt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $A,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":i={color:new lt,position:new $A,halfWidth:new $A,halfHeight:new $A};break}return E[I.id]=i,i}}}function Vy(){const E={};return{get:function(I){if(E[I.id]!==void 0)return E[I.id];let i;switch(I.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return E[I.id]=i,i}}}let Zy=0;function Xy(E,I){return(I.castShadow?2:0)-(E.castShadow?2:0)+(I.map?1:0)-(E.map?1:0)}function zy(E,I){const i=new Py,o=Vy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let N=0;N<9;N++)r.probe.push(new $A);const c=new $A,y=new we,w=new we;function R(N,J){let b=0,Y=0,P=0;for(let Cg=0;Cg<9;Cg++)r.probe[Cg].set(0,0,0);let V=0,L=0,U=0,fA=0,BA=0,CA=0,DA=0,MA=0,yA=0,Bg=0;N.sort(Xy);const Z=J===!0?Math.PI:1;for(let Cg=0,ag=N.length;Cg<ag;Cg++){const YA=N[Cg],WA=YA.color,zA=YA.intensity,lg=YA.distance,q=YA.shadow&&YA.shadow.map?YA.shadow.map.texture:null;if(YA.isAmbientLight)b+=WA.r*zA*Z,Y+=WA.g*zA*Z,P+=WA.b*zA*Z;else if(YA.isLightProbe)for(let O=0;O<9;O++)r.probe[O].addScaledVector(YA.sh.coefficients[O],zA);else if(YA.isDirectionalLight){const O=i.get(YA);if(O.color.copy(YA.color).multiplyScalar(YA.intensity*Z),YA.castShadow){const EA=YA.shadow,nA=o.get(YA);nA.shadowBias=EA.bias,nA.shadowNormalBias=EA.normalBias,nA.shadowRadius=EA.radius,nA.shadowMapSize=EA.mapSize,r.directionalShadow[V]=nA,r.directionalShadowMap[V]=q,r.directionalShadowMatrix[V]=YA.shadow.matrix,CA++}r.directional[V]=O,V++}else if(YA.isSpotLight){const O=i.get(YA);O.position.setFromMatrixPosition(YA.matrixWorld),O.color.copy(WA).multiplyScalar(zA*Z),O.distance=lg,O.coneCos=Math.cos(YA.angle),O.penumbraCos=Math.cos(YA.angle*(1-YA.penumbra)),O.decay=YA.decay,r.spot[U]=O;const EA=YA.shadow;if(YA.map&&(r.spotLightMap[yA]=YA.map,yA++,EA.updateMatrices(YA),YA.castShadow&&Bg++),r.spotLightMatrix[U]=EA.matrix,YA.castShadow){const nA=o.get(YA);nA.shadowBias=EA.bias,nA.shadowNormalBias=EA.normalBias,nA.shadowRadius=EA.radius,nA.shadowMapSize=EA.mapSize,r.spotShadow[U]=nA,r.spotShadowMap[U]=q,MA++}U++}else if(YA.isRectAreaLight){const O=i.get(YA);O.color.copy(WA).multiplyScalar(zA),O.halfWidth.set(YA.width*.5,0,0),O.halfHeight.set(0,YA.height*.5,0),r.rectArea[fA]=O,fA++}else if(YA.isPointLight){const O=i.get(YA);if(O.color.copy(YA.color).multiplyScalar(YA.intensity*Z),O.distance=YA.distance,O.decay=YA.decay,YA.castShadow){const EA=YA.shadow,nA=o.get(YA);nA.shadowBias=EA.bias,nA.shadowNormalBias=EA.normalBias,nA.shadowRadius=EA.radius,nA.shadowMapSize=EA.mapSize,nA.shadowCameraNear=EA.camera.near,nA.shadowCameraFar=EA.camera.far,r.pointShadow[L]=nA,r.pointShadowMap[L]=q,r.pointShadowMatrix[L]=YA.shadow.matrix,DA++}r.point[L]=O,L++}else if(YA.isHemisphereLight){const O=i.get(YA);O.skyColor.copy(YA.color).multiplyScalar(zA*Z),O.groundColor.copy(YA.groundColor).multiplyScalar(zA*Z),r.hemi[BA]=O,BA++}}fA>0&&(I.isWebGL2||E.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Vg.LTC_FLOAT_1,r.rectAreaLTC2=Vg.LTC_FLOAT_2):E.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Vg.LTC_HALF_1,r.rectAreaLTC2=Vg.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=b,r.ambient[1]=Y,r.ambient[2]=P;const oA=r.hash;(oA.directionalLength!==V||oA.pointLength!==L||oA.spotLength!==U||oA.rectAreaLength!==fA||oA.hemiLength!==BA||oA.numDirectionalShadows!==CA||oA.numPointShadows!==DA||oA.numSpotShadows!==MA||oA.numSpotMaps!==yA)&&(r.directional.length=V,r.spot.length=U,r.rectArea.length=fA,r.point.length=L,r.hemi.length=BA,r.directionalShadow.length=CA,r.directionalShadowMap.length=CA,r.pointShadow.length=DA,r.pointShadowMap.length=DA,r.spotShadow.length=MA,r.spotShadowMap.length=MA,r.directionalShadowMatrix.length=CA,r.pointShadowMatrix.length=DA,r.spotLightMatrix.length=MA+yA-Bg,r.spotLightMap.length=yA,r.numSpotLightShadowsWithMaps=Bg,oA.directionalLength=V,oA.pointLength=L,oA.spotLength=U,oA.rectAreaLength=fA,oA.hemiLength=BA,oA.numDirectionalShadows=CA,oA.numPointShadows=DA,oA.numSpotShadows=MA,oA.numSpotMaps=yA,r.version=Zy++)}function G(N,J){let b=0,Y=0,P=0,V=0,L=0;const U=J.matrixWorldInverse;for(let fA=0,BA=N.length;fA<BA;fA++){const CA=N[fA];if(CA.isDirectionalLight){const DA=r.directional[b];DA.direction.setFromMatrixPosition(CA.matrixWorld),c.setFromMatrixPosition(CA.target.matrixWorld),DA.direction.sub(c),DA.direction.transformDirection(U),b++}else if(CA.isSpotLight){const DA=r.spot[P];DA.position.setFromMatrixPosition(CA.matrixWorld),DA.position.applyMatrix4(U),DA.direction.setFromMatrixPosition(CA.matrixWorld),c.setFromMatrixPosition(CA.target.matrixWorld),DA.direction.sub(c),DA.direction.transformDirection(U),P++}else if(CA.isRectAreaLight){const DA=r.rectArea[V];DA.position.setFromMatrixPosition(CA.matrixWorld),DA.position.applyMatrix4(U),w.identity(),y.copy(CA.matrixWorld),y.premultiply(U),w.extractRotation(y),DA.halfWidth.set(CA.width*.5,0,0),DA.halfHeight.set(0,CA.height*.5,0),DA.halfWidth.applyMatrix4(w),DA.halfHeight.applyMatrix4(w),V++}else if(CA.isPointLight){const DA=r.point[Y];DA.position.setFromMatrixPosition(CA.matrixWorld),DA.position.applyMatrix4(U),Y++}else if(CA.isHemisphereLight){const DA=r.hemi[L];DA.direction.setFromMatrixPosition(CA.matrixWorld),DA.direction.transformDirection(U),L++}}}return{setup:R,setupView:G,state:r}}function tl(E,I){const i=new zy(E,I),o=[],r=[];function c(){o.length=0,r.length=0}function y(J){o.push(J)}function w(J){r.push(J)}function R(J){i.setup(o,J)}function G(J){i.setupView(o,J)}return{init:c,state:{lightsArray:o,shadowsArray:r,lights:i},setupLights:R,setupLightsView:G,pushLight:y,pushShadow:w}}function jy(E,I){let i=new WeakMap;function o(c,y=0){const w=i.get(c);let R;return w===void 0?(R=new tl(E,I),i.set(c,[R])):y>=w.length?(R=new tl(E,I),w.push(R)):R=w[y],R}function r(){i=new WeakMap}return{get:o,dispose:r}}class $y extends $Q{constructor(I){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_D,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(I)}copy(I){return super.copy(I),this.depthPacking=I.depthPacking,this.map=I.map,this.alphaMap=I.alphaMap,this.displacementMap=I.displacementMap,this.displacementScale=I.displacementScale,this.displacementBias=I.displacementBias,this.wireframe=I.wireframe,this.wireframeLinewidth=I.wireframeLinewidth,this}}class AM extends $Q{constructor(I){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(I)}copy(I){return super.copy(I),this.map=I.map,this.alphaMap=I.alphaMap,this.displacementMap=I.displacementMap,this.displacementScale=I.displacementScale,this.displacementBias=I.displacementBias,this}}const gM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IM=`uniform sampler2D shadow_pass;
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
}`;function tM(E,I,i){let o=new Sl;const r=new pt,c=new pt,y=new De,w=new $y({depthPacking:WD}),R=new AM,G={},N=i.maxTextureSize,J={[BC]:Oe,[Oe]:BC,[GB]:GB},b=new OC({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:gM,fragmentShader:IM}),Y=b.clone();Y.defines.HORIZONTAL_PASS=1;const P=new CC;P.setAttribute("position",new eB(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const V=new NB(P,b),L=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=el;let U=this.type;this.render=function(DA,MA,yA){if(L.enabled===!1||L.autoUpdate===!1&&L.needsUpdate===!1||DA.length===0)return;const Bg=E.getRenderTarget(),Z=E.getActiveCubeFace(),oA=E.getActiveMipmapLevel(),Cg=E.state;Cg.setBlending(tC),Cg.buffers.color.setClear(1,1,1,1),Cg.buffers.depth.setTest(!0),Cg.setScissorTest(!1);const ag=U!==SB&&this.type===SB,YA=U===SB&&this.type!==SB;for(let WA=0,zA=DA.length;WA<zA;WA++){const lg=DA[WA],q=lg.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",lg,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const O=q.getFrameExtents();if(r.multiply(O),c.copy(q.mapSize),(r.x>N||r.y>N)&&(r.x>N&&(c.x=Math.floor(N/O.x),r.x=c.x*O.x,q.mapSize.x=c.x),r.y>N&&(c.y=Math.floor(N/O.y),r.y=c.y*O.y,q.mapSize.y=c.y)),q.map===null||ag===!0||YA===!0){const nA=this.type!==SB?{minFilter:xe,magFilter:xe}:{};q.map!==null&&q.map.dispose(),q.map=new WC(r.x,r.y,nA),q.map.texture.name=lg.name+".shadowMap",q.camera.updateProjectionMatrix()}E.setRenderTarget(q.map),E.clear();const EA=q.getViewportCount();for(let nA=0;nA<EA;nA++){const sA=q.getViewport(nA);y.set(c.x*sA.x,c.y*sA.y,c.x*sA.z,c.y*sA.w),Cg.viewport(y),q.updateMatrices(lg,nA),o=q.getFrustum(),CA(MA,yA,q.camera,lg,this.type)}q.isPointLightShadow!==!0&&this.type===SB&&fA(q,yA),q.needsUpdate=!1}U=this.type,L.needsUpdate=!1,E.setRenderTarget(Bg,Z,oA)};function fA(DA,MA){const yA=I.update(V);b.defines.VSM_SAMPLES!==DA.blurSamples&&(b.defines.VSM_SAMPLES=DA.blurSamples,Y.defines.VSM_SAMPLES=DA.blurSamples,b.needsUpdate=!0,Y.needsUpdate=!0),DA.mapPass===null&&(DA.mapPass=new WC(r.x,r.y)),b.uniforms.shadow_pass.value=DA.map.texture,b.uniforms.resolution.value=DA.mapSize,b.uniforms.radius.value=DA.radius,E.setRenderTarget(DA.mapPass),E.clear(),E.renderBufferDirect(MA,null,yA,b,V,null),Y.uniforms.shadow_pass.value=DA.mapPass.texture,Y.uniforms.resolution.value=DA.mapSize,Y.uniforms.radius.value=DA.radius,E.setRenderTarget(DA.map),E.clear(),E.renderBufferDirect(MA,null,yA,Y,V,null)}function BA(DA,MA,yA,Bg){let Z=null;const oA=yA.isPointLight===!0?DA.customDistanceMaterial:DA.customDepthMaterial;if(oA!==void 0)Z=oA;else if(Z=yA.isPointLight===!0?R:w,E.localClippingEnabled&&MA.clipShadows===!0&&Array.isArray(MA.clippingPlanes)&&MA.clippingPlanes.length!==0||MA.displacementMap&&MA.displacementScale!==0||MA.alphaMap&&MA.alphaTest>0||MA.map&&MA.alphaTest>0){const Cg=Z.uuid,ag=MA.uuid;let YA=G[Cg];YA===void 0&&(YA={},G[Cg]=YA);let WA=YA[ag];WA===void 0&&(WA=Z.clone(),YA[ag]=WA),Z=WA}if(Z.visible=MA.visible,Z.wireframe=MA.wireframe,Bg===SB?Z.side=MA.shadowSide!==null?MA.shadowSide:MA.side:Z.side=MA.shadowSide!==null?MA.shadowSide:J[MA.side],Z.alphaMap=MA.alphaMap,Z.alphaTest=MA.alphaTest,Z.map=MA.map,Z.clipShadows=MA.clipShadows,Z.clippingPlanes=MA.clippingPlanes,Z.clipIntersection=MA.clipIntersection,Z.displacementMap=MA.displacementMap,Z.displacementScale=MA.displacementScale,Z.displacementBias=MA.displacementBias,Z.wireframeLinewidth=MA.wireframeLinewidth,Z.linewidth=MA.linewidth,yA.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const Cg=E.properties.get(Z);Cg.light=yA}return Z}function CA(DA,MA,yA,Bg,Z){if(DA.visible===!1)return;if(DA.layers.test(MA.layers)&&(DA.isMesh||DA.isLine||DA.isPoints)&&(DA.castShadow||DA.receiveShadow&&Z===SB)&&(!DA.frustumCulled||o.intersectsObject(DA))){DA.modelViewMatrix.multiplyMatrices(yA.matrixWorldInverse,DA.matrixWorld);const ag=I.update(DA),YA=DA.material;if(Array.isArray(YA)){const WA=ag.groups;for(let zA=0,lg=WA.length;zA<lg;zA++){const q=WA[zA],O=YA[q.materialIndex];if(O&&O.visible){const EA=BA(DA,O,Bg,Z);E.renderBufferDirect(yA,null,ag,EA,DA,q)}}}else if(YA.visible){const WA=BA(DA,YA,Bg,Z);E.renderBufferDirect(yA,null,ag,WA,DA,null)}}const Cg=DA.children;for(let ag=0,YA=Cg.length;ag<YA;ag++)CA(Cg[ag],MA,yA,Bg,Z)}}function eM(E,I,i){const o=i.isWebGL2;function r(){let GA=!1;const Zg=new De;let gg=null;const kg=new De(0,0,0,0);return{setMask:function(jg){gg!==jg&&!GA&&(E.colorMask(jg,jg,jg,jg),gg=jg)},setLocked:function(jg){GA=jg},setClear:function(jg,tt,ut,Ut,ui){ui===!0&&(jg*=Ut,tt*=Ut,ut*=Ut),Zg.set(jg,tt,ut,Ut),kg.equals(Zg)===!1&&(E.clearColor(jg,tt,ut,Ut),kg.copy(Zg))},reset:function(){GA=!1,gg=null,kg.set(-1,0,0,0)}}}function c(){let GA=!1,Zg=null,gg=null,kg=null;return{setTest:function(jg){jg?eI(E.DEPTH_TEST):EI(E.DEPTH_TEST)},setMask:function(jg){Zg!==jg&&!GA&&(E.depthMask(jg),Zg=jg)},setFunc:function(jg){if(gg!==jg){switch(jg){case DD:E.depthFunc(E.NEVER);break;case wD:E.depthFunc(E.ALWAYS);break;case fD:E.depthFunc(E.LESS);break;case ts:E.depthFunc(E.LEQUAL);break;case pD:E.depthFunc(E.EQUAL);break;case yD:E.depthFunc(E.GEQUAL);break;case MD:E.depthFunc(E.GREATER);break;case mD:E.depthFunc(E.NOTEQUAL);break;default:E.depthFunc(E.LEQUAL)}gg=jg}},setLocked:function(jg){GA=jg},setClear:function(jg){kg!==jg&&(E.clearDepth(jg),kg=jg)},reset:function(){GA=!1,Zg=null,gg=null,kg=null}}}function y(){let GA=!1,Zg=null,gg=null,kg=null,jg=null,tt=null,ut=null,Ut=null,ui=null;return{setTest:function(Dt){GA||(Dt?eI(E.STENCIL_TEST):EI(E.STENCIL_TEST))},setMask:function(Dt){Zg!==Dt&&!GA&&(E.stencilMask(Dt),Zg=Dt)},setFunc:function(Dt,ae,qt){(gg!==Dt||kg!==ae||jg!==qt)&&(E.stencilFunc(Dt,ae,qt),gg=Dt,kg=ae,jg=qt)},setOp:function(Dt,ae,qt){(tt!==Dt||ut!==ae||Ut!==qt)&&(E.stencilOp(Dt,ae,qt),tt=Dt,ut=ae,Ut=qt)},setLocked:function(Dt){GA=Dt},setClear:function(Dt){ui!==Dt&&(E.clearStencil(Dt),ui=Dt)},reset:function(){GA=!1,Zg=null,gg=null,kg=null,jg=null,tt=null,ut=null,Ut=null,ui=null}}}const w=new r,R=new c,G=new y,N=new WeakMap,J=new WeakMap;let b={},Y={},P=new WeakMap,V=[],L=null,U=!1,fA=null,BA=null,CA=null,DA=null,MA=null,yA=null,Bg=null,Z=!1,oA=null,Cg=null,ag=null,YA=null,WA=null;const zA=E.getParameter(E.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let lg=!1,q=0;const O=E.getParameter(E.VERSION);O.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(O)[1]),lg=q>=1):O.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),lg=q>=2);let EA=null,nA={};const sA=E.getParameter(E.SCISSOR_BOX),mA=E.getParameter(E.VIEWPORT),Ig=new De().fromArray(sA),og=new De().fromArray(mA);function Rg(GA,Zg,gg,kg){const jg=new Uint8Array(4),tt=E.createTexture();E.bindTexture(GA,tt),E.texParameteri(GA,E.TEXTURE_MIN_FILTER,E.NEAREST),E.texParameteri(GA,E.TEXTURE_MAG_FILTER,E.NEAREST);for(let ut=0;ut<gg;ut++)o&&(GA===E.TEXTURE_3D||GA===E.TEXTURE_2D_ARRAY)?E.texImage3D(Zg,0,E.RGBA,1,1,kg,0,E.RGBA,E.UNSIGNED_BYTE,jg):E.texImage2D(Zg+ut,0,E.RGBA,1,1,0,E.RGBA,E.UNSIGNED_BYTE,jg);return tt}const Hg={};Hg[E.TEXTURE_2D]=Rg(E.TEXTURE_2D,E.TEXTURE_2D,1),Hg[E.TEXTURE_CUBE_MAP]=Rg(E.TEXTURE_CUBE_MAP,E.TEXTURE_CUBE_MAP_POSITIVE_X,6),o&&(Hg[E.TEXTURE_2D_ARRAY]=Rg(E.TEXTURE_2D_ARRAY,E.TEXTURE_2D_ARRAY,1,1),Hg[E.TEXTURE_3D]=Rg(E.TEXTURE_3D,E.TEXTURE_3D,1,1)),w.setClear(0,0,0,1),R.setClear(1),G.setClear(0),eI(E.DEPTH_TEST),R.setFunc(ts),Og(!1),dI(Hh),eI(E.CULL_FACE),dg(tC);function eI(GA){b[GA]!==!0&&(E.enable(GA),b[GA]=!0)}function EI(GA){b[GA]!==!1&&(E.disable(GA),b[GA]=!1)}function wI(GA,Zg){return Y[GA]!==Zg?(E.bindFramebuffer(GA,Zg),Y[GA]=Zg,o&&(GA===E.DRAW_FRAMEBUFFER&&(Y[E.FRAMEBUFFER]=Zg),GA===E.FRAMEBUFFER&&(Y[E.DRAW_FRAMEBUFFER]=Zg)),!0):!1}function cg(GA,Zg){let gg=V,kg=!1;if(GA)if(gg=P.get(Zg),gg===void 0&&(gg=[],P.set(Zg,gg)),GA.isWebGLMultipleRenderTargets){const jg=GA.texture;if(gg.length!==jg.length||gg[0]!==E.COLOR_ATTACHMENT0){for(let tt=0,ut=jg.length;tt<ut;tt++)gg[tt]=E.COLOR_ATTACHMENT0+tt;gg.length=jg.length,kg=!0}}else gg[0]!==E.COLOR_ATTACHMENT0&&(gg[0]=E.COLOR_ATTACHMENT0,kg=!0);else gg[0]!==E.BACK&&(gg[0]=E.BACK,kg=!0);kg&&(i.isWebGL2?E.drawBuffers(gg):I.get("WEBGL_draw_buffers").drawBuffersWEBGL(gg))}function ZA(GA){return L!==GA?(E.useProgram(GA),L=GA,!0):!1}const cA={[YE]:E.FUNC_ADD,[QD]:E.FUNC_SUBTRACT,[oD]:E.FUNC_REVERSE_SUBTRACT};if(o)cA[Wh]=E.MIN,cA[Oh]=E.MAX;else{const GA=I.get("EXT_blend_minmax");GA!==null&&(cA[Wh]=GA.MIN_EXT,cA[Oh]=GA.MAX_EXT)}const iI={[nD]:E.ZERO,[aD]:E.ONE,[sD]:E.SRC_COLOR,[il]:E.SRC_ALPHA,[uD]:E.SRC_ALPHA_SATURATE,[lD]:E.DST_COLOR,[hD]:E.DST_ALPHA,[rD]:E.ONE_MINUS_SRC_COLOR,[Bl]:E.ONE_MINUS_SRC_ALPHA,[dD]:E.ONE_MINUS_DST_COLOR,[cD]:E.ONE_MINUS_DST_ALPHA};function dg(GA,Zg,gg,kg,jg,tt,ut,Ut){if(GA===tC){U===!0&&(EI(E.BLEND),U=!1);return}if(U===!1&&(eI(E.BLEND),U=!0),GA!==ED){if(GA!==fA||Ut!==Z){if((BA!==YE||MA!==YE)&&(E.blendEquation(E.FUNC_ADD),BA=YE,MA=YE),Ut)switch(GA){case TE:E.blendFuncSeparate(E.ONE,E.ONE_MINUS_SRC_ALPHA,E.ONE,E.ONE_MINUS_SRC_ALPHA);break;case qh:E.blendFunc(E.ONE,E.ONE);break;case Th:E.blendFuncSeparate(E.ZERO,E.ONE_MINUS_SRC_COLOR,E.ZERO,E.ONE);break;case _h:E.blendFuncSeparate(E.ZERO,E.SRC_COLOR,E.ZERO,E.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",GA);break}else switch(GA){case TE:E.blendFuncSeparate(E.SRC_ALPHA,E.ONE_MINUS_SRC_ALPHA,E.ONE,E.ONE_MINUS_SRC_ALPHA);break;case qh:E.blendFunc(E.SRC_ALPHA,E.ONE);break;case Th:E.blendFuncSeparate(E.ZERO,E.ONE_MINUS_SRC_COLOR,E.ZERO,E.ONE);break;case _h:E.blendFunc(E.ZERO,E.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",GA);break}CA=null,DA=null,yA=null,Bg=null,fA=GA,Z=Ut}return}jg=jg||Zg,tt=tt||gg,ut=ut||kg,(Zg!==BA||jg!==MA)&&(E.blendEquationSeparate(cA[Zg],cA[jg]),BA=Zg,MA=jg),(gg!==CA||kg!==DA||tt!==yA||ut!==Bg)&&(E.blendFuncSeparate(iI[gg],iI[kg],iI[tt],iI[ut]),CA=gg,DA=kg,yA=tt,Bg=ut),fA=GA,Z=!1}function Pg(GA,Zg){GA.side===GB?EI(E.CULL_FACE):eI(E.CULL_FACE);let gg=GA.side===Oe;Zg&&(gg=!gg),Og(gg),GA.blending===TE&&GA.transparent===!1?dg(tC):dg(GA.blending,GA.blendEquation,GA.blendSrc,GA.blendDst,GA.blendEquationAlpha,GA.blendSrcAlpha,GA.blendDstAlpha,GA.premultipliedAlpha),R.setFunc(GA.depthFunc),R.setTest(GA.depthTest),R.setMask(GA.depthWrite),w.setMask(GA.colorWrite);const kg=GA.stencilWrite;G.setTest(kg),kg&&(G.setMask(GA.stencilWriteMask),G.setFunc(GA.stencilFunc,GA.stencilRef,GA.stencilFuncMask),G.setOp(GA.stencilFail,GA.stencilZFail,GA.stencilZPass)),HA(GA.polygonOffset,GA.polygonOffsetFactor,GA.polygonOffsetUnits),GA.alphaToCoverage===!0?eI(E.SAMPLE_ALPHA_TO_COVERAGE):EI(E.SAMPLE_ALPHA_TO_COVERAGE)}function Og(GA){oA!==GA&&(GA?E.frontFace(E.CW):E.frontFace(E.CCW),oA=GA)}function dI(GA){GA!==iD?(eI(E.CULL_FACE),GA!==Cg&&(GA===Hh?E.cullFace(E.BACK):GA===BD?E.cullFace(E.FRONT):E.cullFace(E.FRONT_AND_BACK))):EI(E.CULL_FACE),Cg=GA}function uI(GA){GA!==ag&&(lg&&E.lineWidth(GA),ag=GA)}function HA(GA,Zg,gg){GA?(eI(E.POLYGON_OFFSET_FILL),(YA!==Zg||WA!==gg)&&(E.polygonOffset(Zg,gg),YA=Zg,WA=gg)):EI(E.POLYGON_OFFSET_FILL)}function FI(GA){GA?eI(E.SCISSOR_TEST):EI(E.SCISSOR_TEST)}function Bt(GA){GA===void 0&&(GA=E.TEXTURE0+zA-1),EA!==GA&&(E.activeTexture(GA),EA=GA)}function Nt(GA,Zg,gg){gg===void 0&&(EA===null?gg=E.TEXTURE0+zA-1:gg=EA);let kg=nA[gg];kg===void 0&&(kg={type:void 0,texture:void 0},nA[gg]=kg),(kg.type!==GA||kg.texture!==Zg)&&(EA!==gg&&(E.activeTexture(gg),EA=gg),E.bindTexture(GA,Zg||Hg[GA]),kg.type=GA,kg.texture=Zg)}function AA(){const GA=nA[EA];GA!==void 0&&GA.type!==void 0&&(E.bindTexture(GA.type,null),GA.type=void 0,GA.texture=void 0)}function X(){try{E.compressedTexImage2D.apply(E,arguments)}catch(GA){console.error("THREE.WebGLState:",GA)}}function VA(){try{E.compressedTexImage3D.apply(E,arguments)}catch(GA){console.error("THREE.WebGLState:",GA)}}function Ug(){try{E.texSubImage2D.apply(E,arguments)}catch(GA){console.error("THREE.WebGLState:",GA)}}function Fg(){try{E.texSubImage3D.apply(E,arguments)}catch(GA){console.error("THREE.WebGLState:",GA)}}function xg(){try{E.compressedTexSubImage2D.apply(E,arguments)}catch(GA){console.error("THREE.WebGLState:",GA)}}function hI(){try{E.compressedTexSubImage3D.apply(E,arguments)}catch(GA){console.error("THREE.WebGLState:",GA)}}function vg(){try{E.texStorage2D.apply(E,arguments)}catch(GA){console.error("THREE.WebGLState:",GA)}}function Ag(){try{E.texStorage3D.apply(E,arguments)}catch(GA){console.error("THREE.WebGLState:",GA)}}function pI(){try{E.texImage2D.apply(E,arguments)}catch(GA){console.error("THREE.WebGLState:",GA)}}function DI(){try{E.texImage3D.apply(E,arguments)}catch(GA){console.error("THREE.WebGLState:",GA)}}function yI(GA){Ig.equals(GA)===!1&&(E.scissor(GA.x,GA.y,GA.z,GA.w),Ig.copy(GA))}function aI(GA){og.equals(GA)===!1&&(E.viewport(GA.x,GA.y,GA.z,GA.w),og.copy(GA))}function sI(GA,Zg){let gg=J.get(Zg);gg===void 0&&(gg=new WeakMap,J.set(Zg,gg));let kg=gg.get(GA);kg===void 0&&(kg=E.getUniformBlockIndex(Zg,GA.name),gg.set(GA,kg))}function qI(GA,Zg){const kg=J.get(Zg).get(GA);N.get(Zg)!==kg&&(E.uniformBlockBinding(Zg,kg,GA.__bindingPointIndex),N.set(Zg,kg))}function dt(){E.disable(E.BLEND),E.disable(E.CULL_FACE),E.disable(E.DEPTH_TEST),E.disable(E.POLYGON_OFFSET_FILL),E.disable(E.SCISSOR_TEST),E.disable(E.STENCIL_TEST),E.disable(E.SAMPLE_ALPHA_TO_COVERAGE),E.blendEquation(E.FUNC_ADD),E.blendFunc(E.ONE,E.ZERO),E.blendFuncSeparate(E.ONE,E.ZERO,E.ONE,E.ZERO),E.colorMask(!0,!0,!0,!0),E.clearColor(0,0,0,0),E.depthMask(!0),E.depthFunc(E.LESS),E.clearDepth(1),E.stencilMask(4294967295),E.stencilFunc(E.ALWAYS,0,4294967295),E.stencilOp(E.KEEP,E.KEEP,E.KEEP),E.clearStencil(0),E.cullFace(E.BACK),E.frontFace(E.CCW),E.polygonOffset(0,0),E.activeTexture(E.TEXTURE0),E.bindFramebuffer(E.FRAMEBUFFER,null),o===!0&&(E.bindFramebuffer(E.DRAW_FRAMEBUFFER,null),E.bindFramebuffer(E.READ_FRAMEBUFFER,null)),E.useProgram(null),E.lineWidth(1),E.scissor(0,0,E.canvas.width,E.canvas.height),E.viewport(0,0,E.canvas.width,E.canvas.height),b={},EA=null,nA={},Y={},P=new WeakMap,V=[],L=null,U=!1,fA=null,BA=null,CA=null,DA=null,MA=null,yA=null,Bg=null,Z=!1,oA=null,Cg=null,ag=null,YA=null,WA=null,Ig.set(0,0,E.canvas.width,E.canvas.height),og.set(0,0,E.canvas.width,E.canvas.height),w.reset(),R.reset(),G.reset()}return{buffers:{color:w,depth:R,stencil:G},enable:eI,disable:EI,bindFramebuffer:wI,drawBuffers:cg,useProgram:ZA,setBlending:dg,setMaterial:Pg,setFlipSided:Og,setCullFace:dI,setLineWidth:uI,setPolygonOffset:HA,setScissorTest:FI,activeTexture:Bt,bindTexture:Nt,unbindTexture:AA,compressedTexImage2D:X,compressedTexImage3D:VA,texImage2D:pI,texImage3D:DI,updateUBOMapping:sI,uniformBlockBinding:qI,texStorage2D:vg,texStorage3D:Ag,texSubImage2D:Ug,texSubImage3D:Fg,compressedTexSubImage2D:xg,compressedTexSubImage3D:hI,scissor:yI,viewport:aI,reset:dt}}function iM(E,I,i,o,r,c,y){const w=r.isWebGL2,R=r.maxTextures,G=r.maxCubemapSize,N=r.maxTextureSize,J=r.maxSamples,b=I.has("WEBGL_multisampled_render_to_texture")?I.get("WEBGL_multisampled_render_to_texture"):null,Y=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),P=new WeakMap;let V;const L=new WeakMap;let U=!1;try{U=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function fA(AA,X){return U?new OffscreenCanvas(AA,X):Dn("canvas")}function BA(AA,X,VA,Ug){let Fg=1;if((AA.width>Ug||AA.height>Ug)&&(Fg=Ug/Math.max(AA.width,AA.height)),Fg<1||X===!0)if(typeof HTMLImageElement<"u"&&AA instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&AA instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&AA instanceof ImageBitmap){const xg=X?os:Math.floor,hI=xg(Fg*AA.width),vg=xg(Fg*AA.height);V===void 0&&(V=fA(hI,vg));const Ag=VA?fA(hI,vg):V;return Ag.width=hI,Ag.height=vg,Ag.getContext("2d").drawImage(AA,0,0,hI,vg),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+AA.width+"x"+AA.height+") to ("+hI+"x"+vg+")."),Ag}else return"data"in AA&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+AA.width+"x"+AA.height+")."),AA;return AA}function CA(AA){return wc(AA.width)&&wc(AA.height)}function DA(AA){return w?!1:AA.wrapS!==vi||AA.wrapT!==vi||AA.minFilter!==xe&&AA.minFilter!==li}function MA(AA,X){return AA.generateMipmaps&&X&&AA.minFilter!==xe&&AA.minFilter!==li}function yA(AA){E.generateMipmap(AA)}function Bg(AA,X,VA,Ug,Fg=!1){if(w===!1)return X;if(AA!==null){if(E[AA]!==void 0)return E[AA];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+AA+"'")}let xg=X;return X===E.RED&&(VA===E.FLOAT&&(xg=E.R32F),VA===E.HALF_FLOAT&&(xg=E.R16F),VA===E.UNSIGNED_BYTE&&(xg=E.R8)),X===E.RED_INTEGER&&(VA===E.UNSIGNED_BYTE&&(xg=E.R8UI),VA===E.UNSIGNED_SHORT&&(xg=E.R16UI),VA===E.UNSIGNED_INT&&(xg=E.R32UI),VA===E.BYTE&&(xg=E.R8I),VA===E.SHORT&&(xg=E.R16I),VA===E.INT&&(xg=E.R32I)),X===E.RG&&(VA===E.FLOAT&&(xg=E.RG32F),VA===E.HALF_FLOAT&&(xg=E.RG16F),VA===E.UNSIGNED_BYTE&&(xg=E.RG8)),X===E.RGBA&&(VA===E.FLOAT&&(xg=E.RGBA32F),VA===E.HALF_FLOAT&&(xg=E.RGBA16F),VA===E.UNSIGNED_BYTE&&(xg=Ug===bt&&Fg===!1?E.SRGB8_ALPHA8:E.RGBA8),VA===E.UNSIGNED_SHORT_4_4_4_4&&(xg=E.RGBA4),VA===E.UNSIGNED_SHORT_5_5_5_1&&(xg=E.RGB5_A1)),(xg===E.R16F||xg===E.R32F||xg===E.RG16F||xg===E.RG32F||xg===E.RGBA16F||xg===E.RGBA32F)&&I.get("EXT_color_buffer_float"),xg}function Z(AA,X,VA){return MA(AA,VA)===!0||AA.isFramebufferTexture&&AA.minFilter!==xe&&AA.minFilter!==li?Math.log2(Math.max(X.width,X.height))+1:AA.mipmaps!==void 0&&AA.mipmaps.length>0?AA.mipmaps.length:AA.isCompressedTexture&&Array.isArray(AA.image)?X.mipmaps.length:1}function oA(AA){return AA===xe||AA===Ph||AA===Ra?E.NEAREST:E.LINEAR}function Cg(AA){const X=AA.target;X.removeEventListener("dispose",Cg),YA(X),X.isVideoTexture&&P.delete(X)}function ag(AA){const X=AA.target;X.removeEventListener("dispose",ag),zA(X)}function YA(AA){const X=o.get(AA);if(X.__webglInit===void 0)return;const VA=AA.source,Ug=L.get(VA);if(Ug){const Fg=Ug[X.__cacheKey];Fg.usedTimes--,Fg.usedTimes===0&&WA(AA),Object.keys(Ug).length===0&&L.delete(VA)}o.remove(AA)}function WA(AA){const X=o.get(AA);E.deleteTexture(X.__webglTexture);const VA=AA.source,Ug=L.get(VA);delete Ug[X.__cacheKey],y.memory.textures--}function zA(AA){const X=AA.texture,VA=o.get(AA),Ug=o.get(X);if(Ug.__webglTexture!==void 0&&(E.deleteTexture(Ug.__webglTexture),y.memory.textures--),AA.depthTexture&&AA.depthTexture.dispose(),AA.isWebGLCubeRenderTarget)for(let Fg=0;Fg<6;Fg++){if(Array.isArray(VA.__webglFramebuffer[Fg]))for(let xg=0;xg<VA.__webglFramebuffer[Fg].length;xg++)E.deleteFramebuffer(VA.__webglFramebuffer[Fg][xg]);else E.deleteFramebuffer(VA.__webglFramebuffer[Fg]);VA.__webglDepthbuffer&&E.deleteRenderbuffer(VA.__webglDepthbuffer[Fg])}else{if(Array.isArray(VA.__webglFramebuffer))for(let Fg=0;Fg<VA.__webglFramebuffer.length;Fg++)E.deleteFramebuffer(VA.__webglFramebuffer[Fg]);else E.deleteFramebuffer(VA.__webglFramebuffer);if(VA.__webglDepthbuffer&&E.deleteRenderbuffer(VA.__webglDepthbuffer),VA.__webglMultisampledFramebuffer&&E.deleteFramebuffer(VA.__webglMultisampledFramebuffer),VA.__webglColorRenderbuffer)for(let Fg=0;Fg<VA.__webglColorRenderbuffer.length;Fg++)VA.__webglColorRenderbuffer[Fg]&&E.deleteRenderbuffer(VA.__webglColorRenderbuffer[Fg]);VA.__webglDepthRenderbuffer&&E.deleteRenderbuffer(VA.__webglDepthRenderbuffer)}if(AA.isWebGLMultipleRenderTargets)for(let Fg=0,xg=X.length;Fg<xg;Fg++){const hI=o.get(X[Fg]);hI.__webglTexture&&(E.deleteTexture(hI.__webglTexture),y.memory.textures--),o.remove(X[Fg])}o.remove(X),o.remove(AA)}let lg=0;function q(){lg=0}function O(){const AA=lg;return AA>=R&&console.warn("THREE.WebGLTextures: Trying to use "+AA+" texture units while this GPU supports only "+R),lg+=1,AA}function EA(AA){const X=[];return X.push(AA.wrapS),X.push(AA.wrapT),X.push(AA.wrapR||0),X.push(AA.magFilter),X.push(AA.minFilter),X.push(AA.anisotropy),X.push(AA.internalFormat),X.push(AA.format),X.push(AA.type),X.push(AA.generateMipmaps),X.push(AA.premultiplyAlpha),X.push(AA.flipY),X.push(AA.unpackAlignment),X.push(AA.colorSpace),X.join()}function nA(AA,X){const VA=o.get(AA);if(AA.isVideoTexture&&Bt(AA),AA.isRenderTargetTexture===!1&&AA.version>0&&VA.__version!==AA.version){const Ug=AA.image;if(Ug===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Ug.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{wI(VA,AA,X);return}}i.bindTexture(E.TEXTURE_2D,VA.__webglTexture,E.TEXTURE0+X)}function sA(AA,X){const VA=o.get(AA);if(AA.version>0&&VA.__version!==AA.version){wI(VA,AA,X);return}i.bindTexture(E.TEXTURE_2D_ARRAY,VA.__webglTexture,E.TEXTURE0+X)}function mA(AA,X){const VA=o.get(AA);if(AA.version>0&&VA.__version!==AA.version){wI(VA,AA,X);return}i.bindTexture(E.TEXTURE_3D,VA.__webglTexture,E.TEXTURE0+X)}function Ig(AA,X){const VA=o.get(AA);if(AA.version>0&&VA.__version!==AA.version){cg(VA,AA,X);return}i.bindTexture(E.TEXTURE_CUBE_MAP,VA.__webglTexture,E.TEXTURE0+X)}const og={[Bs]:E.REPEAT,[vi]:E.CLAMP_TO_EDGE,[Cs]:E.MIRRORED_REPEAT},Rg={[xe]:E.NEAREST,[Ph]:E.NEAREST_MIPMAP_NEAREST,[Ra]:E.NEAREST_MIPMAP_LINEAR,[li]:E.LINEAR,[LD]:E.LINEAR_MIPMAP_NEAREST,[VQ]:E.LINEAR_MIPMAP_LINEAR},Hg={[VD]:E.NEVER,[g0]:E.ALWAYS,[ZD]:E.LESS,[zD]:E.LEQUAL,[XD]:E.EQUAL,[A0]:E.GEQUAL,[jD]:E.GREATER,[$D]:E.NOTEQUAL};function eI(AA,X,VA){if(VA?(E.texParameteri(AA,E.TEXTURE_WRAP_S,og[X.wrapS]),E.texParameteri(AA,E.TEXTURE_WRAP_T,og[X.wrapT]),(AA===E.TEXTURE_3D||AA===E.TEXTURE_2D_ARRAY)&&E.texParameteri(AA,E.TEXTURE_WRAP_R,og[X.wrapR]),E.texParameteri(AA,E.TEXTURE_MAG_FILTER,Rg[X.magFilter]),E.texParameteri(AA,E.TEXTURE_MIN_FILTER,Rg[X.minFilter])):(E.texParameteri(AA,E.TEXTURE_WRAP_S,E.CLAMP_TO_EDGE),E.texParameteri(AA,E.TEXTURE_WRAP_T,E.CLAMP_TO_EDGE),(AA===E.TEXTURE_3D||AA===E.TEXTURE_2D_ARRAY)&&E.texParameteri(AA,E.TEXTURE_WRAP_R,E.CLAMP_TO_EDGE),(X.wrapS!==vi||X.wrapT!==vi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),E.texParameteri(AA,E.TEXTURE_MAG_FILTER,oA(X.magFilter)),E.texParameteri(AA,E.TEXTURE_MIN_FILTER,oA(X.minFilter)),X.minFilter!==xe&&X.minFilter!==li&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),X.compareFunction&&(E.texParameteri(AA,E.TEXTURE_COMPARE_MODE,E.COMPARE_REF_TO_TEXTURE),E.texParameteri(AA,E.TEXTURE_COMPARE_FUNC,Hg[X.compareFunction])),I.has("EXT_texture_filter_anisotropic")===!0){const Ug=I.get("EXT_texture_filter_anisotropic");if(X.magFilter===xe||X.minFilter!==Ra&&X.minFilter!==VQ||X.type===IC&&I.has("OES_texture_float_linear")===!1||w===!1&&X.type===ZQ&&I.has("OES_texture_half_float_linear")===!1)return;(X.anisotropy>1||o.get(X).__currentAnisotropy)&&(E.texParameterf(AA,Ug.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(X.anisotropy,r.getMaxAnisotropy())),o.get(X).__currentAnisotropy=X.anisotropy)}}function EI(AA,X){let VA=!1;AA.__webglInit===void 0&&(AA.__webglInit=!0,X.addEventListener("dispose",Cg));const Ug=X.source;let Fg=L.get(Ug);Fg===void 0&&(Fg={},L.set(Ug,Fg));const xg=EA(X);if(xg!==AA.__cacheKey){Fg[xg]===void 0&&(Fg[xg]={texture:E.createTexture(),usedTimes:0},y.memory.textures++,VA=!0),Fg[xg].usedTimes++;const hI=Fg[AA.__cacheKey];hI!==void 0&&(Fg[AA.__cacheKey].usedTimes--,hI.usedTimes===0&&WA(X)),AA.__cacheKey=xg,AA.__webglTexture=Fg[xg].texture}return VA}function wI(AA,X,VA){let Ug=E.TEXTURE_2D;(X.isDataArrayTexture||X.isCompressedArrayTexture)&&(Ug=E.TEXTURE_2D_ARRAY),X.isData3DTexture&&(Ug=E.TEXTURE_3D);const Fg=EI(AA,X),xg=X.source;i.bindTexture(Ug,AA.__webglTexture,E.TEXTURE0+VA);const hI=o.get(xg);if(xg.version!==hI.__version||Fg===!0){i.activeTexture(E.TEXTURE0+VA),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,X.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,X.unpackAlignment),E.pixelStorei(E.UNPACK_COLORSPACE_CONVERSION_WEBGL,E.NONE);const vg=DA(X)&&CA(X.image)===!1;let Ag=BA(X.image,vg,!1,N);Ag=Nt(X,Ag);const pI=CA(Ag)||w,DI=c.convert(X.format,X.colorSpace);let yI=c.convert(X.type),aI=Bg(X.internalFormat,DI,yI,X.colorSpace,X.isVideoTexture);eI(Ug,X,pI);let sI;const qI=X.mipmaps,dt=w&&X.isVideoTexture!==!0,GA=hI.__version===void 0||Fg===!0,Zg=Z(X,Ag,pI);if(X.isDepthTexture)aI=E.DEPTH_COMPONENT,w?X.type===IC?aI=E.DEPTH_COMPONENT32F:X.type===gC?aI=E.DEPTH_COMPONENT24:X.type===HC?aI=E.DEPTH24_STENCIL8:aI=E.DEPTH_COMPONENT16:X.type===IC&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),X.format===qC&&aI===E.DEPTH_COMPONENT&&X.type!==rs&&X.type!==gC&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),X.type=gC,yI=c.convert(X.type)),X.format===VE&&aI===E.DEPTH_COMPONENT&&(aI=E.DEPTH_STENCIL,X.type!==HC&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),X.type=HC,yI=c.convert(X.type))),GA&&(dt?i.texStorage2D(E.TEXTURE_2D,1,aI,Ag.width,Ag.height):i.texImage2D(E.TEXTURE_2D,0,aI,Ag.width,Ag.height,0,DI,yI,null));else if(X.isDataTexture)if(qI.length>0&&pI){dt&&GA&&i.texStorage2D(E.TEXTURE_2D,Zg,aI,qI[0].width,qI[0].height);for(let gg=0,kg=qI.length;gg<kg;gg++)sI=qI[gg],dt?i.texSubImage2D(E.TEXTURE_2D,gg,0,0,sI.width,sI.height,DI,yI,sI.data):i.texImage2D(E.TEXTURE_2D,gg,aI,sI.width,sI.height,0,DI,yI,sI.data);X.generateMipmaps=!1}else dt?(GA&&i.texStorage2D(E.TEXTURE_2D,Zg,aI,Ag.width,Ag.height),i.texSubImage2D(E.TEXTURE_2D,0,0,0,Ag.width,Ag.height,DI,yI,Ag.data)):i.texImage2D(E.TEXTURE_2D,0,aI,Ag.width,Ag.height,0,DI,yI,Ag.data);else if(X.isCompressedTexture)if(X.isCompressedArrayTexture){dt&&GA&&i.texStorage3D(E.TEXTURE_2D_ARRAY,Zg,aI,qI[0].width,qI[0].height,Ag.depth);for(let gg=0,kg=qI.length;gg<kg;gg++)sI=qI[gg],X.format!==Yi?DI!==null?dt?i.compressedTexSubImage3D(E.TEXTURE_2D_ARRAY,gg,0,0,0,sI.width,sI.height,Ag.depth,DI,sI.data,0,0):i.compressedTexImage3D(E.TEXTURE_2D_ARRAY,gg,aI,sI.width,sI.height,Ag.depth,0,sI.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?i.texSubImage3D(E.TEXTURE_2D_ARRAY,gg,0,0,0,sI.width,sI.height,Ag.depth,DI,yI,sI.data):i.texImage3D(E.TEXTURE_2D_ARRAY,gg,aI,sI.width,sI.height,Ag.depth,0,DI,yI,sI.data)}else{dt&&GA&&i.texStorage2D(E.TEXTURE_2D,Zg,aI,qI[0].width,qI[0].height);for(let gg=0,kg=qI.length;gg<kg;gg++)sI=qI[gg],X.format!==Yi?DI!==null?dt?i.compressedTexSubImage2D(E.TEXTURE_2D,gg,0,0,sI.width,sI.height,DI,sI.data):i.compressedTexImage2D(E.TEXTURE_2D,gg,aI,sI.width,sI.height,0,sI.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?i.texSubImage2D(E.TEXTURE_2D,gg,0,0,sI.width,sI.height,DI,yI,sI.data):i.texImage2D(E.TEXTURE_2D,gg,aI,sI.width,sI.height,0,DI,yI,sI.data)}else if(X.isDataArrayTexture)dt?(GA&&i.texStorage3D(E.TEXTURE_2D_ARRAY,Zg,aI,Ag.width,Ag.height,Ag.depth),i.texSubImage3D(E.TEXTURE_2D_ARRAY,0,0,0,0,Ag.width,Ag.height,Ag.depth,DI,yI,Ag.data)):i.texImage3D(E.TEXTURE_2D_ARRAY,0,aI,Ag.width,Ag.height,Ag.depth,0,DI,yI,Ag.data);else if(X.isData3DTexture)dt?(GA&&i.texStorage3D(E.TEXTURE_3D,Zg,aI,Ag.width,Ag.height,Ag.depth),i.texSubImage3D(E.TEXTURE_3D,0,0,0,0,Ag.width,Ag.height,Ag.depth,DI,yI,Ag.data)):i.texImage3D(E.TEXTURE_3D,0,aI,Ag.width,Ag.height,Ag.depth,0,DI,yI,Ag.data);else if(X.isFramebufferTexture){if(GA)if(dt)i.texStorage2D(E.TEXTURE_2D,Zg,aI,Ag.width,Ag.height);else{let gg=Ag.width,kg=Ag.height;for(let jg=0;jg<Zg;jg++)i.texImage2D(E.TEXTURE_2D,jg,aI,gg,kg,0,DI,yI,null),gg>>=1,kg>>=1}}else if(qI.length>0&&pI){dt&&GA&&i.texStorage2D(E.TEXTURE_2D,Zg,aI,qI[0].width,qI[0].height);for(let gg=0,kg=qI.length;gg<kg;gg++)sI=qI[gg],dt?i.texSubImage2D(E.TEXTURE_2D,gg,0,0,DI,yI,sI):i.texImage2D(E.TEXTURE_2D,gg,aI,DI,yI,sI);X.generateMipmaps=!1}else dt?(GA&&i.texStorage2D(E.TEXTURE_2D,Zg,aI,Ag.width,Ag.height),i.texSubImage2D(E.TEXTURE_2D,0,0,0,DI,yI,Ag)):i.texImage2D(E.TEXTURE_2D,0,aI,DI,yI,Ag);MA(X,pI)&&yA(Ug),hI.__version=xg.version,X.onUpdate&&X.onUpdate(X)}AA.__version=X.version}function cg(AA,X,VA){if(X.image.length!==6)return;const Ug=EI(AA,X),Fg=X.source;i.bindTexture(E.TEXTURE_CUBE_MAP,AA.__webglTexture,E.TEXTURE0+VA);const xg=o.get(Fg);if(Fg.version!==xg.__version||Ug===!0){i.activeTexture(E.TEXTURE0+VA),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,X.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,X.unpackAlignment),E.pixelStorei(E.UNPACK_COLORSPACE_CONVERSION_WEBGL,E.NONE);const hI=X.isCompressedTexture||X.image[0].isCompressedTexture,vg=X.image[0]&&X.image[0].isDataTexture,Ag=[];for(let gg=0;gg<6;gg++)!hI&&!vg?Ag[gg]=BA(X.image[gg],!1,!0,G):Ag[gg]=vg?X.image[gg].image:X.image[gg],Ag[gg]=Nt(X,Ag[gg]);const pI=Ag[0],DI=CA(pI)||w,yI=c.convert(X.format,X.colorSpace),aI=c.convert(X.type),sI=Bg(X.internalFormat,yI,aI,X.colorSpace),qI=w&&X.isVideoTexture!==!0,dt=xg.__version===void 0||Ug===!0;let GA=Z(X,pI,DI);eI(E.TEXTURE_CUBE_MAP,X,DI);let Zg;if(hI){qI&&dt&&i.texStorage2D(E.TEXTURE_CUBE_MAP,GA,sI,pI.width,pI.height);for(let gg=0;gg<6;gg++){Zg=Ag[gg].mipmaps;for(let kg=0;kg<Zg.length;kg++){const jg=Zg[kg];X.format!==Yi?yI!==null?qI?i.compressedTexSubImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+gg,kg,0,0,jg.width,jg.height,yI,jg.data):i.compressedTexImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+gg,kg,sI,jg.width,jg.height,0,jg.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qI?i.texSubImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+gg,kg,0,0,jg.width,jg.height,yI,aI,jg.data):i.texImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+gg,kg,sI,jg.width,jg.height,0,yI,aI,jg.data)}}}else{Zg=X.mipmaps,qI&&dt&&(Zg.length>0&&GA++,i.texStorage2D(E.TEXTURE_CUBE_MAP,GA,sI,Ag[0].width,Ag[0].height));for(let gg=0;gg<6;gg++)if(vg){qI?i.texSubImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+gg,0,0,0,Ag[gg].width,Ag[gg].height,yI,aI,Ag[gg].data):i.texImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+gg,0,sI,Ag[gg].width,Ag[gg].height,0,yI,aI,Ag[gg].data);for(let kg=0;kg<Zg.length;kg++){const tt=Zg[kg].image[gg].image;qI?i.texSubImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+gg,kg+1,0,0,tt.width,tt.height,yI,aI,tt.data):i.texImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+gg,kg+1,sI,tt.width,tt.height,0,yI,aI,tt.data)}}else{qI?i.texSubImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+gg,0,0,0,yI,aI,Ag[gg]):i.texImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+gg,0,sI,yI,aI,Ag[gg]);for(let kg=0;kg<Zg.length;kg++){const jg=Zg[kg];qI?i.texSubImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+gg,kg+1,0,0,yI,aI,jg.image[gg]):i.texImage2D(E.TEXTURE_CUBE_MAP_POSITIVE_X+gg,kg+1,sI,yI,aI,jg.image[gg])}}}MA(X,DI)&&yA(E.TEXTURE_CUBE_MAP),xg.__version=Fg.version,X.onUpdate&&X.onUpdate(X)}AA.__version=X.version}function ZA(AA,X,VA,Ug,Fg,xg){const hI=c.convert(VA.format,VA.colorSpace),vg=c.convert(VA.type),Ag=Bg(VA.internalFormat,hI,vg,VA.colorSpace);if(!o.get(X).__hasExternalTextures){const DI=Math.max(1,X.width>>xg),yI=Math.max(1,X.height>>xg);Fg===E.TEXTURE_3D||Fg===E.TEXTURE_2D_ARRAY?i.texImage3D(Fg,xg,Ag,DI,yI,X.depth,0,hI,vg,null):i.texImage2D(Fg,xg,Ag,DI,yI,0,hI,vg,null)}i.bindFramebuffer(E.FRAMEBUFFER,AA),FI(X)?b.framebufferTexture2DMultisampleEXT(E.FRAMEBUFFER,Ug,Fg,o.get(VA).__webglTexture,0,HA(X)):(Fg===E.TEXTURE_2D||Fg>=E.TEXTURE_CUBE_MAP_POSITIVE_X&&Fg<=E.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&E.framebufferTexture2D(E.FRAMEBUFFER,Ug,Fg,o.get(VA).__webglTexture,xg),i.bindFramebuffer(E.FRAMEBUFFER,null)}function cA(AA,X,VA){if(E.bindRenderbuffer(E.RENDERBUFFER,AA),X.depthBuffer&&!X.stencilBuffer){let Ug=E.DEPTH_COMPONENT16;if(VA||FI(X)){const Fg=X.depthTexture;Fg&&Fg.isDepthTexture&&(Fg.type===IC?Ug=E.DEPTH_COMPONENT32F:Fg.type===gC&&(Ug=E.DEPTH_COMPONENT24));const xg=HA(X);FI(X)?b.renderbufferStorageMultisampleEXT(E.RENDERBUFFER,xg,Ug,X.width,X.height):E.renderbufferStorageMultisample(E.RENDERBUFFER,xg,Ug,X.width,X.height)}else E.renderbufferStorage(E.RENDERBUFFER,Ug,X.width,X.height);E.framebufferRenderbuffer(E.FRAMEBUFFER,E.DEPTH_ATTACHMENT,E.RENDERBUFFER,AA)}else if(X.depthBuffer&&X.stencilBuffer){const Ug=HA(X);VA&&FI(X)===!1?E.renderbufferStorageMultisample(E.RENDERBUFFER,Ug,E.DEPTH24_STENCIL8,X.width,X.height):FI(X)?b.renderbufferStorageMultisampleEXT(E.RENDERBUFFER,Ug,E.DEPTH24_STENCIL8,X.width,X.height):E.renderbufferStorage(E.RENDERBUFFER,E.DEPTH_STENCIL,X.width,X.height),E.framebufferRenderbuffer(E.FRAMEBUFFER,E.DEPTH_STENCIL_ATTACHMENT,E.RENDERBUFFER,AA)}else{const Ug=X.isWebGLMultipleRenderTargets===!0?X.texture:[X.texture];for(let Fg=0;Fg<Ug.length;Fg++){const xg=Ug[Fg],hI=c.convert(xg.format,xg.colorSpace),vg=c.convert(xg.type),Ag=Bg(xg.internalFormat,hI,vg,xg.colorSpace),pI=HA(X);VA&&FI(X)===!1?E.renderbufferStorageMultisample(E.RENDERBUFFER,pI,Ag,X.width,X.height):FI(X)?b.renderbufferStorageMultisampleEXT(E.RENDERBUFFER,pI,Ag,X.width,X.height):E.renderbufferStorage(E.RENDERBUFFER,Ag,X.width,X.height)}}E.bindRenderbuffer(E.RENDERBUFFER,null)}function iI(AA,X){if(X&&X.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(E.FRAMEBUFFER,AA),!(X.depthTexture&&X.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!o.get(X.depthTexture).__webglTexture||X.depthTexture.image.width!==X.width||X.depthTexture.image.height!==X.height)&&(X.depthTexture.image.width=X.width,X.depthTexture.image.height=X.height,X.depthTexture.needsUpdate=!0),nA(X.depthTexture,0);const Ug=o.get(X.depthTexture).__webglTexture,Fg=HA(X);if(X.depthTexture.format===qC)FI(X)?b.framebufferTexture2DMultisampleEXT(E.FRAMEBUFFER,E.DEPTH_ATTACHMENT,E.TEXTURE_2D,Ug,0,Fg):E.framebufferTexture2D(E.FRAMEBUFFER,E.DEPTH_ATTACHMENT,E.TEXTURE_2D,Ug,0);else if(X.depthTexture.format===VE)FI(X)?b.framebufferTexture2DMultisampleEXT(E.FRAMEBUFFER,E.DEPTH_STENCIL_ATTACHMENT,E.TEXTURE_2D,Ug,0,Fg):E.framebufferTexture2D(E.FRAMEBUFFER,E.DEPTH_STENCIL_ATTACHMENT,E.TEXTURE_2D,Ug,0);else throw new Error("Unknown depthTexture format")}function dg(AA){const X=o.get(AA),VA=AA.isWebGLCubeRenderTarget===!0;if(AA.depthTexture&&!X.__autoAllocateDepthBuffer){if(VA)throw new Error("target.depthTexture not supported in Cube render targets");iI(X.__webglFramebuffer,AA)}else if(VA){X.__webglDepthbuffer=[];for(let Ug=0;Ug<6;Ug++)i.bindFramebuffer(E.FRAMEBUFFER,X.__webglFramebuffer[Ug]),X.__webglDepthbuffer[Ug]=E.createRenderbuffer(),cA(X.__webglDepthbuffer[Ug],AA,!1)}else i.bindFramebuffer(E.FRAMEBUFFER,X.__webglFramebuffer),X.__webglDepthbuffer=E.createRenderbuffer(),cA(X.__webglDepthbuffer,AA,!1);i.bindFramebuffer(E.FRAMEBUFFER,null)}function Pg(AA,X,VA){const Ug=o.get(AA);X!==void 0&&ZA(Ug.__webglFramebuffer,AA,AA.texture,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,0),VA!==void 0&&dg(AA)}function Og(AA){const X=AA.texture,VA=o.get(AA),Ug=o.get(X);AA.addEventListener("dispose",ag),AA.isWebGLMultipleRenderTargets!==!0&&(Ug.__webglTexture===void 0&&(Ug.__webglTexture=E.createTexture()),Ug.__version=X.version,y.memory.textures++);const Fg=AA.isWebGLCubeRenderTarget===!0,xg=AA.isWebGLMultipleRenderTargets===!0,hI=CA(AA)||w;if(Fg){VA.__webglFramebuffer=[];for(let vg=0;vg<6;vg++)if(w&&X.mipmaps&&X.mipmaps.length>0){VA.__webglFramebuffer[vg]=[];for(let Ag=0;Ag<X.mipmaps.length;Ag++)VA.__webglFramebuffer[vg][Ag]=E.createFramebuffer()}else VA.__webglFramebuffer[vg]=E.createFramebuffer()}else{if(w&&X.mipmaps&&X.mipmaps.length>0){VA.__webglFramebuffer=[];for(let vg=0;vg<X.mipmaps.length;vg++)VA.__webglFramebuffer[vg]=E.createFramebuffer()}else VA.__webglFramebuffer=E.createFramebuffer();if(xg)if(r.drawBuffers){const vg=AA.texture;for(let Ag=0,pI=vg.length;Ag<pI;Ag++){const DI=o.get(vg[Ag]);DI.__webglTexture===void 0&&(DI.__webglTexture=E.createTexture(),y.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(w&&AA.samples>0&&FI(AA)===!1){const vg=xg?X:[X];VA.__webglMultisampledFramebuffer=E.createFramebuffer(),VA.__webglColorRenderbuffer=[],i.bindFramebuffer(E.FRAMEBUFFER,VA.__webglMultisampledFramebuffer);for(let Ag=0;Ag<vg.length;Ag++){const pI=vg[Ag];VA.__webglColorRenderbuffer[Ag]=E.createRenderbuffer(),E.bindRenderbuffer(E.RENDERBUFFER,VA.__webglColorRenderbuffer[Ag]);const DI=c.convert(pI.format,pI.colorSpace),yI=c.convert(pI.type),aI=Bg(pI.internalFormat,DI,yI,pI.colorSpace,AA.isXRRenderTarget===!0),sI=HA(AA);E.renderbufferStorageMultisample(E.RENDERBUFFER,sI,aI,AA.width,AA.height),E.framebufferRenderbuffer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Ag,E.RENDERBUFFER,VA.__webglColorRenderbuffer[Ag])}E.bindRenderbuffer(E.RENDERBUFFER,null),AA.depthBuffer&&(VA.__webglDepthRenderbuffer=E.createRenderbuffer(),cA(VA.__webglDepthRenderbuffer,AA,!0)),i.bindFramebuffer(E.FRAMEBUFFER,null)}}if(Fg){i.bindTexture(E.TEXTURE_CUBE_MAP,Ug.__webglTexture),eI(E.TEXTURE_CUBE_MAP,X,hI);for(let vg=0;vg<6;vg++)if(w&&X.mipmaps&&X.mipmaps.length>0)for(let Ag=0;Ag<X.mipmaps.length;Ag++)ZA(VA.__webglFramebuffer[vg][Ag],AA,X,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+vg,Ag);else ZA(VA.__webglFramebuffer[vg],AA,X,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+vg,0);MA(X,hI)&&yA(E.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(xg){const vg=AA.texture;for(let Ag=0,pI=vg.length;Ag<pI;Ag++){const DI=vg[Ag],yI=o.get(DI);i.bindTexture(E.TEXTURE_2D,yI.__webglTexture),eI(E.TEXTURE_2D,DI,hI),ZA(VA.__webglFramebuffer,AA,DI,E.COLOR_ATTACHMENT0+Ag,E.TEXTURE_2D,0),MA(DI,hI)&&yA(E.TEXTURE_2D)}i.unbindTexture()}else{let vg=E.TEXTURE_2D;if((AA.isWebGL3DRenderTarget||AA.isWebGLArrayRenderTarget)&&(w?vg=AA.isWebGL3DRenderTarget?E.TEXTURE_3D:E.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(vg,Ug.__webglTexture),eI(vg,X,hI),w&&X.mipmaps&&X.mipmaps.length>0)for(let Ag=0;Ag<X.mipmaps.length;Ag++)ZA(VA.__webglFramebuffer[Ag],AA,X,E.COLOR_ATTACHMENT0,vg,Ag);else ZA(VA.__webglFramebuffer,AA,X,E.COLOR_ATTACHMENT0,vg,0);MA(X,hI)&&yA(vg),i.unbindTexture()}AA.depthBuffer&&dg(AA)}function dI(AA){const X=CA(AA)||w,VA=AA.isWebGLMultipleRenderTargets===!0?AA.texture:[AA.texture];for(let Ug=0,Fg=VA.length;Ug<Fg;Ug++){const xg=VA[Ug];if(MA(xg,X)){const hI=AA.isWebGLCubeRenderTarget?E.TEXTURE_CUBE_MAP:E.TEXTURE_2D,vg=o.get(xg).__webglTexture;i.bindTexture(hI,vg),yA(hI),i.unbindTexture()}}}function uI(AA){if(w&&AA.samples>0&&FI(AA)===!1){const X=AA.isWebGLMultipleRenderTargets?AA.texture:[AA.texture],VA=AA.width,Ug=AA.height;let Fg=E.COLOR_BUFFER_BIT;const xg=[],hI=AA.stencilBuffer?E.DEPTH_STENCIL_ATTACHMENT:E.DEPTH_ATTACHMENT,vg=o.get(AA),Ag=AA.isWebGLMultipleRenderTargets===!0;if(Ag)for(let pI=0;pI<X.length;pI++)i.bindFramebuffer(E.FRAMEBUFFER,vg.__webglMultisampledFramebuffer),E.framebufferRenderbuffer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+pI,E.RENDERBUFFER,null),i.bindFramebuffer(E.FRAMEBUFFER,vg.__webglFramebuffer),E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0+pI,E.TEXTURE_2D,null,0);i.bindFramebuffer(E.READ_FRAMEBUFFER,vg.__webglMultisampledFramebuffer),i.bindFramebuffer(E.DRAW_FRAMEBUFFER,vg.__webglFramebuffer);for(let pI=0;pI<X.length;pI++){xg.push(E.COLOR_ATTACHMENT0+pI),AA.depthBuffer&&xg.push(hI);const DI=vg.__ignoreDepthValues!==void 0?vg.__ignoreDepthValues:!1;if(DI===!1&&(AA.depthBuffer&&(Fg|=E.DEPTH_BUFFER_BIT),AA.stencilBuffer&&(Fg|=E.STENCIL_BUFFER_BIT)),Ag&&E.framebufferRenderbuffer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.RENDERBUFFER,vg.__webglColorRenderbuffer[pI]),DI===!0&&(E.invalidateFramebuffer(E.READ_FRAMEBUFFER,[hI]),E.invalidateFramebuffer(E.DRAW_FRAMEBUFFER,[hI])),Ag){const yI=o.get(X[pI]).__webglTexture;E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,yI,0)}E.blitFramebuffer(0,0,VA,Ug,0,0,VA,Ug,Fg,E.NEAREST),Y&&E.invalidateFramebuffer(E.READ_FRAMEBUFFER,xg)}if(i.bindFramebuffer(E.READ_FRAMEBUFFER,null),i.bindFramebuffer(E.DRAW_FRAMEBUFFER,null),Ag)for(let pI=0;pI<X.length;pI++){i.bindFramebuffer(E.FRAMEBUFFER,vg.__webglMultisampledFramebuffer),E.framebufferRenderbuffer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+pI,E.RENDERBUFFER,vg.__webglColorRenderbuffer[pI]);const DI=o.get(X[pI]).__webglTexture;i.bindFramebuffer(E.FRAMEBUFFER,vg.__webglFramebuffer),E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0+pI,E.TEXTURE_2D,DI,0)}i.bindFramebuffer(E.DRAW_FRAMEBUFFER,vg.__webglMultisampledFramebuffer)}}function HA(AA){return Math.min(J,AA.samples)}function FI(AA){const X=o.get(AA);return w&&AA.samples>0&&I.has("WEBGL_multisampled_render_to_texture")===!0&&X.__useRenderToTexture!==!1}function Bt(AA){const X=y.render.frame;P.get(AA)!==X&&(P.set(AA,X),AA.update())}function Nt(AA,X){const VA=AA.colorSpace,Ug=AA.format,Fg=AA.type;return AA.isCompressedTexture===!0||AA.isVideoTexture===!0||AA.format===Es||VA!==BB&&VA!==_C&&(VA===bt||VA===pn?w===!1?I.has("EXT_sRGB")===!0&&Ug===Yi?(AA.format=Es,AA.minFilter=li,AA.generateMipmaps=!1):X=ll.sRGBToLinear(X):(Ug!==Yi||Fg!==iC)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",VA)),X}this.allocateTextureUnit=O,this.resetTextureUnits=q,this.setTexture2D=nA,this.setTexture2DArray=sA,this.setTexture3D=mA,this.setTextureCube=Ig,this.rebindTextures=Pg,this.setupRenderTarget=Og,this.updateRenderTargetMipmap=dI,this.updateMultisampleRenderTarget=uI,this.setupDepthRenderbuffer=dg,this.setupFrameBufferTexture=ZA,this.useMultisampledRTT=FI}const BM=0,Ae=1;function CM(E,I,i){const o=i.isWebGL2;function r(c,y=_C){let w;const R=y===bt||y===pn?Ae:BM;if(c===iC)return E.UNSIGNED_BYTE;if(c===Ql)return E.UNSIGNED_SHORT_4_4_4_4;if(c===ol)return E.UNSIGNED_SHORT_5_5_5_1;if(c===xD)return E.BYTE;if(c===JD)return E.SHORT;if(c===rs)return E.UNSIGNED_SHORT;if(c===El)return E.INT;if(c===gC)return E.UNSIGNED_INT;if(c===IC)return E.FLOAT;if(c===ZQ)return o?E.HALF_FLOAT:(w=I.get("OES_texture_half_float"),w!==null?w.HALF_FLOAT_OES:null);if(c===bD)return E.ALPHA;if(c===Yi)return E.RGBA;if(c===KD)return E.LUMINANCE;if(c===vD)return E.LUMINANCE_ALPHA;if(c===qC)return E.DEPTH_COMPONENT;if(c===VE)return E.DEPTH_STENCIL;if(c===Es)return w=I.get("EXT_sRGB"),w!==null?w.SRGB_ALPHA_EXT:null;if(c===YD)return E.RED;if(c===nl)return E.RED_INTEGER;if(c===HD)return E.RG;if(c===al)return E.RG_INTEGER;if(c===sl)return E.RGBA_INTEGER;if(c===Sa||c===Ga||c===Fa||c===Na)if(R===Ae)if(w=I.get("WEBGL_compressed_texture_s3tc_srgb"),w!==null){if(c===Sa)return w.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(c===Ga)return w.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(c===Fa)return w.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(c===Na)return w.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(w=I.get("WEBGL_compressed_texture_s3tc"),w!==null){if(c===Sa)return w.COMPRESSED_RGB_S3TC_DXT1_EXT;if(c===Ga)return w.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(c===Fa)return w.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(c===Na)return w.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(c===Vh||c===Zh||c===Xh||c===zh)if(w=I.get("WEBGL_compressed_texture_pvrtc"),w!==null){if(c===Vh)return w.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(c===Zh)return w.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(c===Xh)return w.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(c===zh)return w.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(c===qD)return w=I.get("WEBGL_compressed_texture_etc1"),w!==null?w.COMPRESSED_RGB_ETC1_WEBGL:null;if(c===jh||c===$h)if(w=I.get("WEBGL_compressed_texture_etc"),w!==null){if(c===jh)return R===Ae?w.COMPRESSED_SRGB8_ETC2:w.COMPRESSED_RGB8_ETC2;if(c===$h)return R===Ae?w.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:w.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(c===Ac||c===gc||c===Ic||c===tc||c===ec||c===ic||c===Bc||c===Cc||c===Ec||c===Qc||c===oc||c===nc||c===ac||c===sc)if(w=I.get("WEBGL_compressed_texture_astc"),w!==null){if(c===Ac)return R===Ae?w.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:w.COMPRESSED_RGBA_ASTC_4x4_KHR;if(c===gc)return R===Ae?w.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:w.COMPRESSED_RGBA_ASTC_5x4_KHR;if(c===Ic)return R===Ae?w.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:w.COMPRESSED_RGBA_ASTC_5x5_KHR;if(c===tc)return R===Ae?w.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:w.COMPRESSED_RGBA_ASTC_6x5_KHR;if(c===ec)return R===Ae?w.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:w.COMPRESSED_RGBA_ASTC_6x6_KHR;if(c===ic)return R===Ae?w.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:w.COMPRESSED_RGBA_ASTC_8x5_KHR;if(c===Bc)return R===Ae?w.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:w.COMPRESSED_RGBA_ASTC_8x6_KHR;if(c===Cc)return R===Ae?w.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:w.COMPRESSED_RGBA_ASTC_8x8_KHR;if(c===Ec)return R===Ae?w.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:w.COMPRESSED_RGBA_ASTC_10x5_KHR;if(c===Qc)return R===Ae?w.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:w.COMPRESSED_RGBA_ASTC_10x6_KHR;if(c===oc)return R===Ae?w.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:w.COMPRESSED_RGBA_ASTC_10x8_KHR;if(c===nc)return R===Ae?w.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:w.COMPRESSED_RGBA_ASTC_10x10_KHR;if(c===ac)return R===Ae?w.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:w.COMPRESSED_RGBA_ASTC_12x10_KHR;if(c===sc)return R===Ae?w.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:w.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(c===Ua||c===rc||c===hc)if(w=I.get("EXT_texture_compression_bptc"),w!==null){if(c===Ua)return R===Ae?w.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:w.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(c===rc)return w.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(c===hc)return w.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(c===TD||c===cc||c===lc||c===dc)if(w=I.get("EXT_texture_compression_rgtc"),w!==null){if(c===Ua)return w.COMPRESSED_RED_RGTC1_EXT;if(c===cc)return w.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(c===lc)return w.COMPRESSED_RED_GREEN_RGTC2_EXT;if(c===dc)return w.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return c===HC?o?E.UNSIGNED_INT_24_8:(w=I.get("WEBGL_depth_texture"),w!==null?w.UNSIGNED_INT_24_8_WEBGL:null):E[c]!==void 0?E[c]:null}return{convert:r}}class EM extends di{constructor(I=[]){super(),this.isArrayCamera=!0,this.cameras=I}}class cn extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QM={type:"move"};class Is{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $A),this._grip}dispatchEvent(I){return this._targetRay!==null&&this._targetRay.dispatchEvent(I),this._grip!==null&&this._grip.dispatchEvent(I),this._hand!==null&&this._hand.dispatchEvent(I),this}connect(I){if(I&&I.hand){const i=this._hand;if(i)for(const o of I.hand.values())this._getHandJoint(i,o)}return this.dispatchEvent({type:"connected",data:I}),this}disconnect(I){return this.dispatchEvent({type:"disconnected",data:I}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(I,i,o){let r=null,c=null,y=null;const w=this._targetRay,R=this._grip,G=this._hand;if(I&&i.session.visibilityState!=="visible-blurred"){if(G&&I.hand){y=!0;for(const V of I.hand.values()){const L=i.getJointPose(V,o),U=this._getHandJoint(G,V);L!==null&&(U.matrix.fromArray(L.transform.matrix),U.matrix.decompose(U.position,U.rotation,U.scale),U.matrixWorldNeedsUpdate=!0,U.jointRadius=L.radius),U.visible=L!==null}const N=G.joints["index-finger-tip"],J=G.joints["thumb-tip"],b=N.position.distanceTo(J.position),Y=.02,P=.005;G.inputState.pinching&&b>Y+P?(G.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:I.handedness,target:this})):!G.inputState.pinching&&b<=Y-P&&(G.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:I.handedness,target:this}))}else R!==null&&I.gripSpace&&(c=i.getPose(I.gripSpace,o),c!==null&&(R.matrix.fromArray(c.transform.matrix),R.matrix.decompose(R.position,R.rotation,R.scale),R.matrixWorldNeedsUpdate=!0,c.linearVelocity?(R.hasLinearVelocity=!0,R.linearVelocity.copy(c.linearVelocity)):R.hasLinearVelocity=!1,c.angularVelocity?(R.hasAngularVelocity=!0,R.angularVelocity.copy(c.angularVelocity)):R.hasAngularVelocity=!1));w!==null&&(r=i.getPose(I.targetRaySpace,o),r===null&&c!==null&&(r=c),r!==null&&(w.matrix.fromArray(r.transform.matrix),w.matrix.decompose(w.position,w.rotation,w.scale),w.matrixWorldNeedsUpdate=!0,r.linearVelocity?(w.hasLinearVelocity=!0,w.linearVelocity.copy(r.linearVelocity)):w.hasLinearVelocity=!1,r.angularVelocity?(w.hasAngularVelocity=!0,w.angularVelocity.copy(r.angularVelocity)):w.hasAngularVelocity=!1,this.dispatchEvent(QM)))}return w!==null&&(w.visible=r!==null),R!==null&&(R.visible=c!==null),G!==null&&(G.visible=y!==null),this}_getHandJoint(I,i){if(I.joints[i.jointName]===void 0){const o=new cn;o.matrixAutoUpdate=!1,o.visible=!1,I.joints[i.jointName]=o,I.add(o)}return I.joints[i.jointName]}}class oM extends ii{constructor(I,i,o,r,c,y,w,R,G,N){if(N=N!==void 0?N:qC,N!==qC&&N!==VE)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");o===void 0&&N===qC&&(o=gC),o===void 0&&N===VE&&(o=HC),super(null,r,c,y,w,R,N,o,G),this.isDepthTexture=!0,this.image={width:I,height:i},this.magFilter=w!==void 0?w:xe,this.minFilter=R!==void 0?R:xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(I){return super.copy(I),this.compareFunction=I.compareFunction,this}toJSON(I){const i=super.toJSON(I);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class nM extends zE{constructor(I,i){super();const o=this;let r=null,c=1,y=null,w="local-floor",R=1,G=null,N=null,J=null,b=null,Y=null,P=null;const V=i.getContextAttributes();let L=null,U=null;const fA=[],BA=[],CA=new di;CA.layers.enable(1),CA.viewport=new De;const DA=new di;DA.layers.enable(2),DA.viewport=new De;const MA=[CA,DA],yA=new EM;yA.layers.enable(1),yA.layers.enable(2);let Bg=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(sA){let mA=fA[sA];return mA===void 0&&(mA=new Is,fA[sA]=mA),mA.getTargetRaySpace()},this.getControllerGrip=function(sA){let mA=fA[sA];return mA===void 0&&(mA=new Is,fA[sA]=mA),mA.getGripSpace()},this.getHand=function(sA){let mA=fA[sA];return mA===void 0&&(mA=new Is,fA[sA]=mA),mA.getHandSpace()};function oA(sA){const mA=BA.indexOf(sA.inputSource);if(mA===-1)return;const Ig=fA[mA];Ig!==void 0&&(Ig.update(sA.inputSource,sA.frame,G||y),Ig.dispatchEvent({type:sA.type,data:sA.inputSource}))}function Cg(){r.removeEventListener("select",oA),r.removeEventListener("selectstart",oA),r.removeEventListener("selectend",oA),r.removeEventListener("squeeze",oA),r.removeEventListener("squeezestart",oA),r.removeEventListener("squeezeend",oA),r.removeEventListener("end",Cg),r.removeEventListener("inputsourceschange",ag);for(let sA=0;sA<fA.length;sA++){const mA=BA[sA];mA!==null&&(BA[sA]=null,fA[sA].disconnect(mA))}Bg=null,Z=null,I.setRenderTarget(L),Y=null,b=null,J=null,r=null,U=null,nA.stop(),o.isPresenting=!1,o.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(sA){c=sA,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(sA){w=sA,o.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return G||y},this.setReferenceSpace=function(sA){G=sA},this.getBaseLayer=function(){return b!==null?b:Y},this.getBinding=function(){return J},this.getFrame=function(){return P},this.getSession=function(){return r},this.setSession=async function(sA){if(r=sA,r!==null){if(L=I.getRenderTarget(),r.addEventListener("select",oA),r.addEventListener("selectstart",oA),r.addEventListener("selectend",oA),r.addEventListener("squeeze",oA),r.addEventListener("squeezestart",oA),r.addEventListener("squeezeend",oA),r.addEventListener("end",Cg),r.addEventListener("inputsourceschange",ag),V.xrCompatible!==!0&&await i.makeXRCompatible(),r.renderState.layers===void 0||I.capabilities.isWebGL2===!1){const mA={antialias:r.renderState.layers===void 0?V.antialias:!0,alpha:!0,depth:V.depth,stencil:V.stencil,framebufferScaleFactor:c};Y=new XRWebGLLayer(r,i,mA),r.updateRenderState({baseLayer:Y}),U=new WC(Y.framebufferWidth,Y.framebufferHeight,{format:Yi,type:iC,colorSpace:I.outputColorSpace,stencilBuffer:V.stencil})}else{let mA=null,Ig=null,og=null;V.depth&&(og=V.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,mA=V.stencil?VE:qC,Ig=V.stencil?HC:gC);const Rg={colorFormat:i.RGBA8,depthFormat:og,scaleFactor:c};J=new XRWebGLBinding(r,i),b=J.createProjectionLayer(Rg),r.updateRenderState({layers:[b]}),U=new WC(b.textureWidth,b.textureHeight,{format:Yi,type:iC,depthTexture:new oM(b.textureWidth,b.textureHeight,Ig,void 0,void 0,void 0,void 0,void 0,void 0,mA),stencilBuffer:V.stencil,colorSpace:I.outputColorSpace,samples:V.antialias?4:0});const Hg=I.properties.get(U);Hg.__ignoreDepthValues=b.ignoreDepthValues}U.isXRRenderTarget=!0,this.setFoveation(R),G=null,y=await r.requestReferenceSpace(w),nA.setContext(r),nA.start(),o.isPresenting=!0,o.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ag(sA){for(let mA=0;mA<sA.removed.length;mA++){const Ig=sA.removed[mA],og=BA.indexOf(Ig);og>=0&&(BA[og]=null,fA[og].disconnect(Ig))}for(let mA=0;mA<sA.added.length;mA++){const Ig=sA.added[mA];let og=BA.indexOf(Ig);if(og===-1){for(let Hg=0;Hg<fA.length;Hg++)if(Hg>=BA.length){BA.push(Ig),og=Hg;break}else if(BA[Hg]===null){BA[Hg]=Ig,og=Hg;break}if(og===-1)break}const Rg=fA[og];Rg&&Rg.connect(Ig)}}const YA=new $A,WA=new $A;function zA(sA,mA,Ig){YA.setFromMatrixPosition(mA.matrixWorld),WA.setFromMatrixPosition(Ig.matrixWorld);const og=YA.distanceTo(WA),Rg=mA.projectionMatrix.elements,Hg=Ig.projectionMatrix.elements,eI=Rg[14]/(Rg[10]-1),EI=Rg[14]/(Rg[10]+1),wI=(Rg[9]+1)/Rg[5],cg=(Rg[9]-1)/Rg[5],ZA=(Rg[8]-1)/Rg[0],cA=(Hg[8]+1)/Hg[0],iI=eI*ZA,dg=eI*cA,Pg=og/(-ZA+cA),Og=Pg*-ZA;mA.matrixWorld.decompose(sA.position,sA.quaternion,sA.scale),sA.translateX(Og),sA.translateZ(Pg),sA.matrixWorld.compose(sA.position,sA.quaternion,sA.scale),sA.matrixWorldInverse.copy(sA.matrixWorld).invert();const dI=eI+Pg,uI=EI+Pg,HA=iI-Og,FI=dg+(og-Og),Bt=wI*EI/uI*dI,Nt=cg*EI/uI*dI;sA.projectionMatrix.makePerspective(HA,FI,Bt,Nt,dI,uI),sA.projectionMatrixInverse.copy(sA.projectionMatrix).invert()}function lg(sA,mA){mA===null?sA.matrixWorld.copy(sA.matrix):sA.matrixWorld.multiplyMatrices(mA.matrixWorld,sA.matrix),sA.matrixWorldInverse.copy(sA.matrixWorld).invert()}this.updateCamera=function(sA){if(r===null)return;yA.near=DA.near=CA.near=sA.near,yA.far=DA.far=CA.far=sA.far,(Bg!==yA.near||Z!==yA.far)&&(r.updateRenderState({depthNear:yA.near,depthFar:yA.far}),Bg=yA.near,Z=yA.far);const mA=sA.parent,Ig=yA.cameras;lg(yA,mA);for(let og=0;og<Ig.length;og++)lg(Ig[og],mA);Ig.length===2?zA(yA,CA,DA):yA.projectionMatrix.copy(CA.projectionMatrix),q(sA,yA,mA)};function q(sA,mA,Ig){Ig===null?sA.matrix.copy(mA.matrixWorld):(sA.matrix.copy(Ig.matrixWorld),sA.matrix.invert(),sA.matrix.multiply(mA.matrixWorld)),sA.matrix.decompose(sA.position,sA.quaternion,sA.scale),sA.updateMatrixWorld(!0),sA.projectionMatrix.copy(mA.projectionMatrix),sA.projectionMatrixInverse.copy(mA.projectionMatrixInverse),sA.isPerspectiveCamera&&(sA.fov=Qs*2*Math.atan(1/sA.projectionMatrix.elements[5]),sA.zoom=1)}this.getCamera=function(){return yA},this.getFoveation=function(){if(!(b===null&&Y===null))return R},this.setFoveation=function(sA){R=sA,b!==null&&(b.fixedFoveation=sA),Y!==null&&Y.fixedFoveation!==void 0&&(Y.fixedFoveation=sA)};let O=null;function EA(sA,mA){if(N=mA.getViewerPose(G||y),P=mA,N!==null){const Ig=N.views;Y!==null&&(I.setRenderTargetFramebuffer(U,Y.framebuffer),I.setRenderTarget(U));let og=!1;Ig.length!==yA.cameras.length&&(yA.cameras.length=0,og=!0);for(let Rg=0;Rg<Ig.length;Rg++){const Hg=Ig[Rg];let eI=null;if(Y!==null)eI=Y.getViewport(Hg);else{const wI=J.getViewSubImage(b,Hg);eI=wI.viewport,Rg===0&&(I.setRenderTargetTextures(U,wI.colorTexture,b.ignoreDepthValues?void 0:wI.depthStencilTexture),I.setRenderTarget(U))}let EI=MA[Rg];EI===void 0&&(EI=new di,EI.layers.enable(Rg),EI.viewport=new De,MA[Rg]=EI),EI.matrix.fromArray(Hg.transform.matrix),EI.matrix.decompose(EI.position,EI.quaternion,EI.scale),EI.projectionMatrix.fromArray(Hg.projectionMatrix),EI.projectionMatrixInverse.copy(EI.projectionMatrix).invert(),EI.viewport.set(eI.x,eI.y,eI.width,eI.height),Rg===0&&(yA.matrix.copy(EI.matrix),yA.matrix.decompose(yA.position,yA.quaternion,yA.scale)),og===!0&&yA.cameras.push(EI)}}for(let Ig=0;Ig<fA.length;Ig++){const og=BA[Ig],Rg=fA[Ig];og!==null&&Rg!==void 0&&Rg.update(og,mA,G||y)}O&&O(sA,mA),mA.detectedPlanes&&o.dispatchEvent({type:"planesdetected",data:mA}),P=null}const nA=new Gl;nA.setAnimationLoop(EA),this.setAnimationLoop=function(sA){O=sA},this.dispose=function(){}}}function aM(E,I){function i(L,U){L.matrixAutoUpdate===!0&&L.updateMatrix(),U.value.copy(L.matrix)}function o(L,U){U.color.getRGB(L.fogColor.value,Ml(E)),U.isFog?(L.fogNear.value=U.near,L.fogFar.value=U.far):U.isFogExp2&&(L.fogDensity.value=U.density)}function r(L,U,fA,BA,CA){U.isMeshBasicMaterial||U.isMeshLambertMaterial?c(L,U):U.isMeshToonMaterial?(c(L,U),J(L,U)):U.isMeshPhongMaterial?(c(L,U),N(L,U)):U.isMeshStandardMaterial?(c(L,U),b(L,U),U.isMeshPhysicalMaterial&&Y(L,U,CA)):U.isMeshMatcapMaterial?(c(L,U),P(L,U)):U.isMeshDepthMaterial?c(L,U):U.isMeshDistanceMaterial?(c(L,U),V(L,U)):U.isMeshNormalMaterial?c(L,U):U.isLineBasicMaterial?(y(L,U),U.isLineDashedMaterial&&w(L,U)):U.isPointsMaterial?R(L,U,fA,BA):U.isSpriteMaterial?G(L,U):U.isShadowMaterial?(L.color.value.copy(U.color),L.opacity.value=U.opacity):U.isShaderMaterial&&(U.uniformsNeedUpdate=!1)}function c(L,U){L.opacity.value=U.opacity,U.color&&L.diffuse.value.copy(U.color),U.emissive&&L.emissive.value.copy(U.emissive).multiplyScalar(U.emissiveIntensity),U.map&&(L.map.value=U.map,i(U.map,L.mapTransform)),U.alphaMap&&(L.alphaMap.value=U.alphaMap,i(U.alphaMap,L.alphaMapTransform)),U.bumpMap&&(L.bumpMap.value=U.bumpMap,i(U.bumpMap,L.bumpMapTransform),L.bumpScale.value=U.bumpScale,U.side===Oe&&(L.bumpScale.value*=-1)),U.normalMap&&(L.normalMap.value=U.normalMap,i(U.normalMap,L.normalMapTransform),L.normalScale.value.copy(U.normalScale),U.side===Oe&&L.normalScale.value.negate()),U.displacementMap&&(L.displacementMap.value=U.displacementMap,i(U.displacementMap,L.displacementMapTransform),L.displacementScale.value=U.displacementScale,L.displacementBias.value=U.displacementBias),U.emissiveMap&&(L.emissiveMap.value=U.emissiveMap,i(U.emissiveMap,L.emissiveMapTransform)),U.specularMap&&(L.specularMap.value=U.specularMap,i(U.specularMap,L.specularMapTransform)),U.alphaTest>0&&(L.alphaTest.value=U.alphaTest);const fA=I.get(U).envMap;if(fA&&(L.envMap.value=fA,L.flipEnvMap.value=fA.isCubeTexture&&fA.isRenderTargetTexture===!1?-1:1,L.reflectivity.value=U.reflectivity,L.ior.value=U.ior,L.refractionRatio.value=U.refractionRatio),U.lightMap){L.lightMap.value=U.lightMap;const BA=E._useLegacyLights===!0?Math.PI:1;L.lightMapIntensity.value=U.lightMapIntensity*BA,i(U.lightMap,L.lightMapTransform)}U.aoMap&&(L.aoMap.value=U.aoMap,L.aoMapIntensity.value=U.aoMapIntensity,i(U.aoMap,L.aoMapTransform))}function y(L,U){L.diffuse.value.copy(U.color),L.opacity.value=U.opacity,U.map&&(L.map.value=U.map,i(U.map,L.mapTransform))}function w(L,U){L.dashSize.value=U.dashSize,L.totalSize.value=U.dashSize+U.gapSize,L.scale.value=U.scale}function R(L,U,fA,BA){L.diffuse.value.copy(U.color),L.opacity.value=U.opacity,L.size.value=U.size*fA,L.scale.value=BA*.5,U.map&&(L.map.value=U.map,i(U.map,L.uvTransform)),U.alphaMap&&(L.alphaMap.value=U.alphaMap,i(U.alphaMap,L.alphaMapTransform)),U.alphaTest>0&&(L.alphaTest.value=U.alphaTest)}function G(L,U){L.diffuse.value.copy(U.color),L.opacity.value=U.opacity,L.rotation.value=U.rotation,U.map&&(L.map.value=U.map,i(U.map,L.mapTransform)),U.alphaMap&&(L.alphaMap.value=U.alphaMap,i(U.alphaMap,L.alphaMapTransform)),U.alphaTest>0&&(L.alphaTest.value=U.alphaTest)}function N(L,U){L.specular.value.copy(U.specular),L.shininess.value=Math.max(U.shininess,1e-4)}function J(L,U){U.gradientMap&&(L.gradientMap.value=U.gradientMap)}function b(L,U){L.metalness.value=U.metalness,U.metalnessMap&&(L.metalnessMap.value=U.metalnessMap,i(U.metalnessMap,L.metalnessMapTransform)),L.roughness.value=U.roughness,U.roughnessMap&&(L.roughnessMap.value=U.roughnessMap,i(U.roughnessMap,L.roughnessMapTransform)),I.get(U).envMap&&(L.envMapIntensity.value=U.envMapIntensity)}function Y(L,U,fA){L.ior.value=U.ior,U.sheen>0&&(L.sheenColor.value.copy(U.sheenColor).multiplyScalar(U.sheen),L.sheenRoughness.value=U.sheenRoughness,U.sheenColorMap&&(L.sheenColorMap.value=U.sheenColorMap,i(U.sheenColorMap,L.sheenColorMapTransform)),U.sheenRoughnessMap&&(L.sheenRoughnessMap.value=U.sheenRoughnessMap,i(U.sheenRoughnessMap,L.sheenRoughnessMapTransform))),U.clearcoat>0&&(L.clearcoat.value=U.clearcoat,L.clearcoatRoughness.value=U.clearcoatRoughness,U.clearcoatMap&&(L.clearcoatMap.value=U.clearcoatMap,i(U.clearcoatMap,L.clearcoatMapTransform)),U.clearcoatRoughnessMap&&(L.clearcoatRoughnessMap.value=U.clearcoatRoughnessMap,i(U.clearcoatRoughnessMap,L.clearcoatRoughnessMapTransform)),U.clearcoatNormalMap&&(L.clearcoatNormalMap.value=U.clearcoatNormalMap,i(U.clearcoatNormalMap,L.clearcoatNormalMapTransform),L.clearcoatNormalScale.value.copy(U.clearcoatNormalScale),U.side===Oe&&L.clearcoatNormalScale.value.negate())),U.iridescence>0&&(L.iridescence.value=U.iridescence,L.iridescenceIOR.value=U.iridescenceIOR,L.iridescenceThicknessMinimum.value=U.iridescenceThicknessRange[0],L.iridescenceThicknessMaximum.value=U.iridescenceThicknessRange[1],U.iridescenceMap&&(L.iridescenceMap.value=U.iridescenceMap,i(U.iridescenceMap,L.iridescenceMapTransform)),U.iridescenceThicknessMap&&(L.iridescenceThicknessMap.value=U.iridescenceThicknessMap,i(U.iridescenceThicknessMap,L.iridescenceThicknessMapTransform))),U.transmission>0&&(L.transmission.value=U.transmission,L.transmissionSamplerMap.value=fA.texture,L.transmissionSamplerSize.value.set(fA.width,fA.height),U.transmissionMap&&(L.transmissionMap.value=U.transmissionMap,i(U.transmissionMap,L.transmissionMapTransform)),L.thickness.value=U.thickness,U.thicknessMap&&(L.thicknessMap.value=U.thicknessMap,i(U.thicknessMap,L.thicknessMapTransform)),L.attenuationDistance.value=U.attenuationDistance,L.attenuationColor.value.copy(U.attenuationColor)),U.anisotropy>0&&(L.anisotropyVector.value.set(U.anisotropy*Math.cos(U.anisotropyRotation),U.anisotropy*Math.sin(U.anisotropyRotation)),U.anisotropyMap&&(L.anisotropyMap.value=U.anisotropyMap,i(U.anisotropyMap,L.anisotropyMapTransform))),L.specularIntensity.value=U.specularIntensity,L.specularColor.value.copy(U.specularColor),U.specularColorMap&&(L.specularColorMap.value=U.specularColorMap,i(U.specularColorMap,L.specularColorMapTransform)),U.specularIntensityMap&&(L.specularIntensityMap.value=U.specularIntensityMap,i(U.specularIntensityMap,L.specularIntensityMapTransform))}function P(L,U){U.matcap&&(L.matcap.value=U.matcap)}function V(L,U){const fA=I.get(U).light;L.referencePosition.value.setFromMatrixPosition(fA.matrixWorld),L.nearDistance.value=fA.shadow.camera.near,L.farDistance.value=fA.shadow.camera.far}return{refreshFogUniforms:o,refreshMaterialUniforms:r}}function sM(E,I,i,o){let r={},c={},y=[];const w=i.isWebGL2?E.getParameter(E.MAX_UNIFORM_BUFFER_BINDINGS):0;function R(fA,BA){const CA=BA.program;o.uniformBlockBinding(fA,CA)}function G(fA,BA){let CA=r[fA.id];CA===void 0&&(P(fA),CA=N(fA),r[fA.id]=CA,fA.addEventListener("dispose",L));const DA=BA.program;o.updateUBOMapping(fA,DA);const MA=I.render.frame;c[fA.id]!==MA&&(b(fA),c[fA.id]=MA)}function N(fA){const BA=J();fA.__bindingPointIndex=BA;const CA=E.createBuffer(),DA=fA.__size,MA=fA.usage;return E.bindBuffer(E.UNIFORM_BUFFER,CA),E.bufferData(E.UNIFORM_BUFFER,DA,MA),E.bindBuffer(E.UNIFORM_BUFFER,null),E.bindBufferBase(E.UNIFORM_BUFFER,BA,CA),CA}function J(){for(let fA=0;fA<w;fA++)if(y.indexOf(fA)===-1)return y.push(fA),fA;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function b(fA){const BA=r[fA.id],CA=fA.uniforms,DA=fA.__cache;E.bindBuffer(E.UNIFORM_BUFFER,BA);for(let MA=0,yA=CA.length;MA<yA;MA++){const Bg=CA[MA];if(Y(Bg,MA,DA)===!0){const Z=Bg.__offset,oA=Array.isArray(Bg.value)?Bg.value:[Bg.value];let Cg=0;for(let ag=0;ag<oA.length;ag++){const YA=oA[ag],WA=V(YA);typeof YA=="number"?(Bg.__data[0]=YA,E.bufferSubData(E.UNIFORM_BUFFER,Z+Cg,Bg.__data)):YA.isMatrix3?(Bg.__data[0]=YA.elements[0],Bg.__data[1]=YA.elements[1],Bg.__data[2]=YA.elements[2],Bg.__data[3]=YA.elements[0],Bg.__data[4]=YA.elements[3],Bg.__data[5]=YA.elements[4],Bg.__data[6]=YA.elements[5],Bg.__data[7]=YA.elements[0],Bg.__data[8]=YA.elements[6],Bg.__data[9]=YA.elements[7],Bg.__data[10]=YA.elements[8],Bg.__data[11]=YA.elements[0]):(YA.toArray(Bg.__data,Cg),Cg+=WA.storage/Float32Array.BYTES_PER_ELEMENT)}E.bufferSubData(E.UNIFORM_BUFFER,Z,Bg.__data)}}E.bindBuffer(E.UNIFORM_BUFFER,null)}function Y(fA,BA,CA){const DA=fA.value;if(CA[BA]===void 0){if(typeof DA=="number")CA[BA]=DA;else{const MA=Array.isArray(DA)?DA:[DA],yA=[];for(let Bg=0;Bg<MA.length;Bg++)yA.push(MA[Bg].clone());CA[BA]=yA}return!0}else if(typeof DA=="number"){if(CA[BA]!==DA)return CA[BA]=DA,!0}else{const MA=Array.isArray(CA[BA])?CA[BA]:[CA[BA]],yA=Array.isArray(DA)?DA:[DA];for(let Bg=0;Bg<MA.length;Bg++){const Z=MA[Bg];if(Z.equals(yA[Bg])===!1)return Z.copy(yA[Bg]),!0}}return!1}function P(fA){const BA=fA.uniforms;let CA=0;const DA=16;let MA=0;for(let yA=0,Bg=BA.length;yA<Bg;yA++){const Z=BA[yA],oA={boundary:0,storage:0},Cg=Array.isArray(Z.value)?Z.value:[Z.value];for(let ag=0,YA=Cg.length;ag<YA;ag++){const WA=Cg[ag],zA=V(WA);oA.boundary+=zA.boundary,oA.storage+=zA.storage}if(Z.__data=new Float32Array(oA.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=CA,yA>0){MA=CA%DA;const ag=DA-MA;MA!==0&&ag-oA.boundary<0&&(CA+=DA-MA,Z.__offset=CA)}CA+=oA.storage}return MA=CA%DA,MA>0&&(CA+=DA-MA),fA.__size=CA,fA.__cache={},this}function V(fA){const BA={boundary:0,storage:0};return typeof fA=="number"?(BA.boundary=4,BA.storage=4):fA.isVector2?(BA.boundary=8,BA.storage=8):fA.isVector3||fA.isColor?(BA.boundary=16,BA.storage=12):fA.isVector4?(BA.boundary=16,BA.storage=16):fA.isMatrix3?(BA.boundary=48,BA.storage=48):fA.isMatrix4?(BA.boundary=64,BA.storage=64):fA.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",fA),BA}function L(fA){const BA=fA.target;BA.removeEventListener("dispose",L);const CA=y.indexOf(BA.__bindingPointIndex);y.splice(CA,1),E.deleteBuffer(r[BA.id]),delete r[BA.id],delete c[BA.id]}function U(){for(const fA in r)E.deleteBuffer(r[fA]);y=[],r={},c={}}return{bind:R,update:G,dispose:U}}class Ll{constructor(I={}){const{canvas:i=t0(),context:o=null,depth:r=!0,stencil:c=!0,alpha:y=!1,antialias:w=!1,premultipliedAlpha:R=!0,preserveDrawingBuffer:G=!1,powerPreference:N="default",failIfMajorPerformanceCaveat:J=!1}=I;this.isWebGLRenderer=!0;let b;o!==null?b=o.getContextAttributes().alpha:b=y;const Y=new Uint32Array(4),P=new Int32Array(4);let V=null,L=null;const U=[],fA=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=bt,this._useLegacyLights=!1,this.toneMapping=eC,this.toneMappingExposure=1;const BA=this;let CA=!1,DA=0,MA=0,yA=null,Bg=-1,Z=null;const oA=new De,Cg=new De;let ag=null;const YA=new lt(0);let WA=0,zA=i.width,lg=i.height,q=1,O=null,EA=null;const nA=new De(0,0,zA,lg),sA=new De(0,0,zA,lg);let mA=!1;const Ig=new Sl;let og=!1,Rg=!1,Hg=null;const eI=new we,EI=new pt,wI=new $A,cg={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ZA(){return yA===null?q:1}let cA=o;function iI(IA,TA){for(let eg=0;eg<IA.length;eg++){const _A=IA[eg],ig=i.getContext(_A,TA);if(ig!==null)return ig}return null}try{const IA={alpha:!0,depth:r,stencil:c,antialias:w,premultipliedAlpha:R,preserveDrawingBuffer:G,powerPreference:N,failIfMajorPerformanceCaveat:J};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${as}`),i.addEventListener("webglcontextlost",Zg,!1),i.addEventListener("webglcontextrestored",gg,!1),i.addEventListener("webglcontextcreationerror",kg,!1),cA===null){const TA=["webgl2","webgl","experimental-webgl"];if(BA.isWebGL1Renderer===!0&&TA.shift(),cA=iI(TA,IA),cA===null)throw iI(TA)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&cA instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),cA.getShaderPrecisionFormat===void 0&&(cA.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(IA){throw console.error("THREE.WebGLRenderer: "+IA.message),IA}let dg,Pg,Og,dI,uI,HA,FI,Bt,Nt,AA,X,VA,Ug,Fg,xg,hI,vg,Ag,pI,DI,yI,aI,sI,qI;function dt(){dg=new pp(cA),Pg=new cp(cA,dg,I),dg.init(Pg),aI=new CM(cA,dg,Pg),Og=new eM(cA,dg,Pg),dI=new mp(cA),uI=new _y,HA=new iM(cA,dg,Og,uI,Pg,aI,dI),FI=new dp(BA),Bt=new fp(BA),Nt=new L0(cA,Pg),sI=new rp(cA,dg,Nt,Pg),AA=new yp(cA,Nt,dI,sI),X=new Fp(cA,AA,Nt,dI),pI=new Gp(cA,Pg,HA),hI=new lp(uI),VA=new Ty(BA,FI,Bt,dg,Pg,sI,hI),Ug=new aM(BA,uI),Fg=new Oy,xg=new jy(dg,Pg),Ag=new sp(BA,FI,Bt,Og,X,b,R),vg=new tM(BA,X,Pg),qI=new sM(cA,dI,Pg,Og),DI=new hp(cA,dg,dI,Pg),yI=new Mp(cA,dg,dI,Pg),dI.programs=VA.programs,BA.capabilities=Pg,BA.extensions=dg,BA.properties=uI,BA.renderLists=Fg,BA.shadowMap=vg,BA.state=Og,BA.info=dI}dt();const GA=new nM(BA,cA);this.xr=GA,this.getContext=function(){return cA},this.getContextAttributes=function(){return cA.getContextAttributes()},this.forceContextLoss=function(){const IA=dg.get("WEBGL_lose_context");IA&&IA.loseContext()},this.forceContextRestore=function(){const IA=dg.get("WEBGL_lose_context");IA&&IA.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(IA){IA!==void 0&&(q=IA,this.setSize(zA,lg,!1))},this.getSize=function(IA){return IA.set(zA,lg)},this.setSize=function(IA,TA,eg=!0){if(GA.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}zA=IA,lg=TA,i.width=Math.floor(IA*q),i.height=Math.floor(TA*q),eg===!0&&(i.style.width=IA+"px",i.style.height=TA+"px"),this.setViewport(0,0,IA,TA)},this.getDrawingBufferSize=function(IA){return IA.set(zA*q,lg*q).floor()},this.setDrawingBufferSize=function(IA,TA,eg){zA=IA,lg=TA,q=eg,i.width=Math.floor(IA*eg),i.height=Math.floor(TA*eg),this.setViewport(0,0,IA,TA)},this.getCurrentViewport=function(IA){return IA.copy(oA)},this.getViewport=function(IA){return IA.copy(nA)},this.setViewport=function(IA,TA,eg,_A){IA.isVector4?nA.set(IA.x,IA.y,IA.z,IA.w):nA.set(IA,TA,eg,_A),Og.viewport(oA.copy(nA).multiplyScalar(q).floor())},this.getScissor=function(IA){return IA.copy(sA)},this.setScissor=function(IA,TA,eg,_A){IA.isVector4?sA.set(IA.x,IA.y,IA.z,IA.w):sA.set(IA,TA,eg,_A),Og.scissor(Cg.copy(sA).multiplyScalar(q).floor())},this.getScissorTest=function(){return mA},this.setScissorTest=function(IA){Og.setScissorTest(mA=IA)},this.setOpaqueSort=function(IA){O=IA},this.setTransparentSort=function(IA){EA=IA},this.getClearColor=function(IA){return IA.copy(Ag.getClearColor())},this.setClearColor=function(){Ag.setClearColor.apply(Ag,arguments)},this.getClearAlpha=function(){return Ag.getClearAlpha()},this.setClearAlpha=function(){Ag.setClearAlpha.apply(Ag,arguments)},this.clear=function(IA=!0,TA=!0,eg=!0){let _A=0;if(IA){let ig=!1;if(yA!==null){const tI=yA.texture.format;ig=tI===sl||tI===al||tI===nl}if(ig){const tI=yA.texture.type,MI=tI===iC||tI===gC||tI===rs||tI===HC||tI===Ql||tI===ol,UI=Ag.getClearColor(),NI=Ag.getClearAlpha(),xI=UI.r,GI=UI.g,JI=UI.b;MI?(Y[0]=xI,Y[1]=GI,Y[2]=JI,Y[3]=NI,cA.clearBufferuiv(cA.COLOR,0,Y)):(P[0]=xI,P[1]=GI,P[2]=JI,P[3]=NI,cA.clearBufferiv(cA.COLOR,0,P))}else _A|=cA.COLOR_BUFFER_BIT}TA&&(_A|=cA.DEPTH_BUFFER_BIT),eg&&(_A|=cA.STENCIL_BUFFER_BIT),cA.clear(_A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Zg,!1),i.removeEventListener("webglcontextrestored",gg,!1),i.removeEventListener("webglcontextcreationerror",kg,!1),Fg.dispose(),xg.dispose(),uI.dispose(),FI.dispose(),Bt.dispose(),X.dispose(),sI.dispose(),qI.dispose(),VA.dispose(),GA.dispose(),GA.removeEventListener("sessionstart",Dt),GA.removeEventListener("sessionend",ae),Hg&&(Hg.dispose(),Hg=null),qt.stop()};function Zg(IA){IA.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),CA=!0}function gg(){console.log("THREE.WebGLRenderer: Context Restored."),CA=!1;const IA=dI.autoReset,TA=vg.enabled,eg=vg.autoUpdate,_A=vg.needsUpdate,ig=vg.type;dt(),dI.autoReset=IA,vg.enabled=TA,vg.autoUpdate=eg,vg.needsUpdate=_A,vg.type=ig}function kg(IA){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",IA.statusMessage)}function jg(IA){const TA=IA.target;TA.removeEventListener("dispose",jg),tt(TA)}function tt(IA){ut(IA),uI.remove(IA)}function ut(IA){const TA=uI.get(IA).programs;TA!==void 0&&(TA.forEach(function(eg){VA.releaseProgram(eg)}),IA.isShaderMaterial&&VA.releaseShaderCache(IA))}this.renderBufferDirect=function(IA,TA,eg,_A,ig,tI){TA===null&&(TA=cg);const MI=ig.isMesh&&ig.matrixWorld.determinant()<0,UI=go(IA,TA,eg,_A,ig);Og.setMaterial(_A,MI);let NI=eg.index,xI=1;if(_A.wireframe===!0){if(NI=AA.getWireframeAttribute(eg),NI===void 0)return;xI=2}const GI=eg.drawRange,JI=eg.attributes.position;let Rt=GI.start*xI,kt=(GI.start+GI.count)*xI;tI!==null&&(Rt=Math.max(Rt,tI.start*xI),kt=Math.min(kt,(tI.start+tI.count)*xI)),NI!==null?(Rt=Math.max(Rt,0),kt=Math.min(kt,NI.count)):JI!=null&&(Rt=Math.max(Rt,0),kt=Math.min(kt,JI.count));const se=kt-Rt;if(se<0||se===1/0)return;sI.setup(ig,_A,UI,eg,NI);let Ci,TI=DI;if(NI!==null&&(Ci=Nt.get(NI),TI=yI,TI.setIndex(Ci)),ig.isMesh)_A.wireframe===!0?(Og.setLineWidth(_A.wireframeLinewidth*ZA()),TI.setMode(cA.LINES)):TI.setMode(cA.TRIANGLES);else if(ig.isLine){let ZI=_A.linewidth;ZI===void 0&&(ZI=1),Og.setLineWidth(ZI*ZA()),ig.isLineSegments?TI.setMode(cA.LINES):ig.isLineLoop?TI.setMode(cA.LINE_LOOP):TI.setMode(cA.LINE_STRIP)}else ig.isPoints?TI.setMode(cA.POINTS):ig.isSprite&&TI.setMode(cA.TRIANGLES);if(ig.isInstancedMesh)TI.renderInstances(Rt,se,ig.count);else if(eg.isInstancedBufferGeometry){const ZI=eg._maxInstanceCount!==void 0?eg._maxInstanceCount:1/0,Ei=Math.min(eg.instanceCount,ZI);TI.renderInstances(Rt,se,Ei)}else TI.render(Rt,se)},this.compile=function(IA,TA){function eg(_A,ig,tI){_A.transparent===!0&&_A.side===GB&&_A.forceSinglePass===!1?(_A.side=Oe,_A.needsUpdate=!0,kB(_A,ig,tI),_A.side=BC,_A.needsUpdate=!0,kB(_A,ig,tI),_A.side=GB):kB(_A,ig,tI)}L=xg.get(IA),L.init(),fA.push(L),IA.traverseVisible(function(_A){_A.isLight&&_A.layers.test(TA.layers)&&(L.pushLight(_A),_A.castShadow&&L.pushShadow(_A))}),L.setupLights(BA._useLegacyLights),IA.traverse(function(_A){const ig=_A.material;if(ig)if(Array.isArray(ig))for(let tI=0;tI<ig.length;tI++){const MI=ig[tI];eg(MI,IA,_A)}else eg(ig,IA,_A)}),fA.pop(),L=null};let Ut=null;function ui(IA){Ut&&Ut(IA)}function Dt(){qt.stop()}function ae(){qt.start()}const qt=new Gl;qt.setAnimationLoop(ui),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(IA){Ut=IA,GA.setAnimationLoop(IA),IA===null?qt.stop():qt.start()},GA.addEventListener("sessionstart",Dt),GA.addEventListener("sessionend",ae),this.render=function(IA,TA){if(TA!==void 0&&TA.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(CA===!0)return;IA.matrixWorldAutoUpdate===!0&&IA.updateMatrixWorld(),TA.parent===null&&TA.matrixWorldAutoUpdate===!0&&TA.updateMatrixWorld(),GA.enabled===!0&&GA.isPresenting===!0&&(GA.cameraAutoUpdate===!0&&GA.updateCamera(TA),TA=GA.getCamera()),IA.isScene===!0&&IA.onBeforeRender(BA,IA,TA,yA),L=xg.get(IA,fA.length),L.init(),fA.push(L),eI.multiplyMatrices(TA.projectionMatrix,TA.matrixWorldInverse),Ig.setFromProjectionMatrix(eI),Rg=this.localClippingEnabled,og=hI.init(this.clippingPlanes,Rg),V=Fg.get(IA,U.length),V.init(),U.push(V),PC(IA,TA,0,BA.sortObjects),V.finish(),BA.sortObjects===!0&&V.sort(O,EA),this.info.render.frame++,og===!0&&hI.beginShadows();const eg=L.state.shadowsArray;if(vg.render(eg,IA,TA),og===!0&&hI.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ag.render(V,IA),L.setupLights(BA._useLegacyLights),TA.isArrayCamera){const _A=TA.cameras;for(let ig=0,tI=_A.length;ig<tI;ig++){const MI=_A[ig];UB(V,IA,MI,MI.viewport)}}else UB(V,IA,TA);yA!==null&&(HA.updateMultisampleRenderTarget(yA),HA.updateRenderTargetMipmap(yA)),IA.isScene===!0&&IA.onAfterRender(BA,IA,TA),sI.resetDefaultState(),Bg=-1,Z=null,fA.pop(),fA.length>0?L=fA[fA.length-1]:L=null,U.pop(),U.length>0?V=U[U.length-1]:V=null};function PC(IA,TA,eg,_A){if(IA.visible===!1)return;if(IA.layers.test(TA.layers)){if(IA.isGroup)eg=IA.renderOrder;else if(IA.isLOD)IA.autoUpdate===!0&&IA.update(TA);else if(IA.isLight)L.pushLight(IA),IA.castShadow&&L.pushShadow(IA);else if(IA.isSprite){if(!IA.frustumCulled||Ig.intersectsSprite(IA)){_A&&wI.setFromMatrixPosition(IA.matrixWorld).applyMatrix4(eI);const MI=X.update(IA),UI=IA.material;UI.visible&&V.push(IA,MI,UI,eg,wI.z,null)}}else if((IA.isMesh||IA.isLine||IA.isPoints)&&(!IA.frustumCulled||Ig.intersectsObject(IA))){const MI=X.update(IA),UI=IA.material;if(_A&&(IA.boundingSphere!==void 0?(IA.boundingSphere===null&&IA.computeBoundingSphere(),wI.copy(IA.boundingSphere.center)):(MI.boundingSphere===null&&MI.computeBoundingSphere(),wI.copy(MI.boundingSphere.center)),wI.applyMatrix4(IA.matrixWorld).applyMatrix4(eI)),Array.isArray(UI)){const NI=MI.groups;for(let xI=0,GI=NI.length;xI<GI;xI++){const JI=NI[xI],Rt=UI[JI.materialIndex];Rt&&Rt.visible&&V.push(IA,MI,Rt,eg,wI.z,JI)}}else UI.visible&&V.push(IA,MI,UI,eg,wI.z,null)}}const tI=IA.children;for(let MI=0,UI=tI.length;MI<UI;MI++)PC(tI[MI],TA,eg,_A)}function UB(IA,TA,eg,_A){const ig=IA.opaque,tI=IA.transmissive,MI=IA.transparent;L.setupLightsView(eg),og===!0&&hI.setGlobalState(BA.clippingPlanes,eg),tI.length>0&&Bi(ig,tI,TA,eg),_A&&Og.viewport(oA.copy(_A)),ig.length>0&&CB(ig,TA,eg),tI.length>0&&CB(tI,TA,eg),MI.length>0&&CB(MI,TA,eg),Og.buffers.depth.setTest(!0),Og.buffers.depth.setMask(!0),Og.buffers.color.setMask(!0),Og.setPolygonOffset(!1)}function Bi(IA,TA,eg,_A){const ig=Pg.isWebGL2;Hg===null&&(Hg=new WC(1,1,{generateMipmaps:!0,type:dg.has("EXT_color_buffer_half_float")?ZQ:iC,minFilter:VQ,samples:ig?4:0})),BA.getDrawingBufferSize(EI),ig?Hg.setSize(EI.x,EI.y):Hg.setSize(os(EI.x),os(EI.y));const tI=BA.getRenderTarget();BA.setRenderTarget(Hg),BA.getClearColor(YA),WA=BA.getClearAlpha(),WA<1&&BA.setClearColor(16777215,.5),BA.clear();const MI=BA.toneMapping;BA.toneMapping=eC,CB(IA,eg,_A),HA.updateMultisampleRenderTarget(Hg),HA.updateRenderTargetMipmap(Hg);let UI=!1;for(let NI=0,xI=TA.length;NI<xI;NI++){const GI=TA[NI],JI=GI.object,Rt=GI.geometry,kt=GI.material,se=GI.group;if(kt.side===GB&&JI.layers.test(_A.layers)){const Ci=kt.side;kt.side=Oe,kt.needsUpdate=!0,VC(JI,eg,_A,Rt,kt,se),kt.side=Ci,kt.needsUpdate=!0,UI=!0}}UI===!0&&(HA.updateMultisampleRenderTarget(Hg),HA.updateRenderTargetMipmap(Hg)),BA.setRenderTarget(tI),BA.setClearColor(YA,WA),BA.toneMapping=MI}function CB(IA,TA,eg){const _A=TA.isScene===!0?TA.overrideMaterial:null;for(let ig=0,tI=IA.length;ig<tI;ig++){const MI=IA[ig],UI=MI.object,NI=MI.geometry,xI=_A===null?MI.material:_A,GI=MI.group;UI.layers.test(eg.layers)&&VC(UI,TA,eg,NI,xI,GI)}}function VC(IA,TA,eg,_A,ig,tI){IA.onBeforeRender(BA,TA,eg,_A,ig,tI),IA.modelViewMatrix.multiplyMatrices(eg.matrixWorldInverse,IA.matrixWorld),IA.normalMatrix.getNormalMatrix(IA.modelViewMatrix),ig.onBeforeRender(BA,TA,eg,_A,IA,tI),ig.transparent===!0&&ig.side===GB&&ig.forceSinglePass===!1?(ig.side=Oe,ig.needsUpdate=!0,BA.renderBufferDirect(eg,TA,_A,ig,IA,tI),ig.side=BC,ig.needsUpdate=!0,BA.renderBufferDirect(eg,TA,_A,ig,IA,tI),ig.side=GB):BA.renderBufferDirect(eg,TA,_A,ig,IA,tI),IA.onAfterRender(BA,TA,eg,_A,ig,tI)}function kB(IA,TA,eg){TA.isScene!==!0&&(TA=cg);const _A=uI.get(IA),ig=L.state.lights,tI=L.state.shadowsArray,MI=ig.state.version,UI=VA.getParameters(IA,ig.state,tI,TA,eg),NI=VA.getProgramCacheKey(UI);let xI=_A.programs;_A.environment=IA.isMeshStandardMaterial?TA.environment:null,_A.fog=TA.fog,_A.envMap=(IA.isMeshStandardMaterial?Bt:FI).get(IA.envMap||_A.environment),xI===void 0&&(IA.addEventListener("dispose",jg),xI=new Map,_A.programs=xI);let GI=xI.get(NI);if(GI!==void 0){if(_A.currentProgram===GI&&_A.lightsStateVersion===MI)return LB(IA,UI),GI}else UI.uniforms=VA.getUniforms(IA),IA.onBuild(eg,UI,BA),IA.onBeforeCompile(UI,BA),GI=VA.acquireProgram(UI,NI),xI.set(NI,GI),_A.uniforms=UI.uniforms;const JI=_A.uniforms;(!IA.isShaderMaterial&&!IA.isRawShaderMaterial||IA.clipping===!0)&&(JI.clippingPlanes=hI.uniform),LB(IA,UI),_A.needsLights=Io(IA),_A.lightsStateVersion=MI,_A.needsLights&&(JI.ambientLightColor.value=ig.state.ambient,JI.lightProbe.value=ig.state.probe,JI.directionalLights.value=ig.state.directional,JI.directionalLightShadows.value=ig.state.directionalShadow,JI.spotLights.value=ig.state.spot,JI.spotLightShadows.value=ig.state.spotShadow,JI.rectAreaLights.value=ig.state.rectArea,JI.ltc_1.value=ig.state.rectAreaLTC1,JI.ltc_2.value=ig.state.rectAreaLTC2,JI.pointLights.value=ig.state.point,JI.pointLightShadows.value=ig.state.pointShadow,JI.hemisphereLights.value=ig.state.hemi,JI.directionalShadowMap.value=ig.state.directionalShadowMap,JI.directionalShadowMatrix.value=ig.state.directionalShadowMatrix,JI.spotShadowMap.value=ig.state.spotShadowMap,JI.spotLightMatrix.value=ig.state.spotLightMatrix,JI.spotLightMap.value=ig.state.spotLightMap,JI.pointShadowMap.value=ig.state.pointShadowMap,JI.pointShadowMatrix.value=ig.state.pointShadowMatrix);const Rt=GI.getUniforms(),kt=dn.seqWithValue(Rt.seq,JI);return _A.currentProgram=GI,_A.uniformsList=kt,GI}function LB(IA,TA){const eg=uI.get(IA);eg.outputColorSpace=TA.outputColorSpace,eg.instancing=TA.instancing,eg.instancingColor=TA.instancingColor,eg.skinning=TA.skinning,eg.morphTargets=TA.morphTargets,eg.morphNormals=TA.morphNormals,eg.morphColors=TA.morphColors,eg.morphTargetsCount=TA.morphTargetsCount,eg.numClippingPlanes=TA.numClippingPlanes,eg.numIntersection=TA.numClipIntersection,eg.vertexAlphas=TA.vertexAlphas,eg.vertexTangents=TA.vertexTangents,eg.toneMapping=TA.toneMapping}function go(IA,TA,eg,_A,ig){TA.isScene!==!0&&(TA=cg),HA.resetTextureUnits();const tI=TA.fog,MI=_A.isMeshStandardMaterial?TA.environment:null,UI=yA===null?BA.outputColorSpace:yA.isXRRenderTarget===!0?yA.texture.colorSpace:BB,NI=(_A.isMeshStandardMaterial?Bt:FI).get(_A.envMap||MI),xI=_A.vertexColors===!0&&!!eg.attributes.color&&eg.attributes.color.itemSize===4,GI=!!eg.attributes.tangent&&(!!_A.normalMap||_A.anisotropy>0),JI=!!eg.morphAttributes.position,Rt=!!eg.morphAttributes.normal,kt=!!eg.morphAttributes.color;let se=eC;_A.toneMapped&&(yA===null||yA.isXRRenderTarget===!0)&&(se=BA.toneMapping);const Ci=eg.morphAttributes.position||eg.morphAttributes.normal||eg.morphAttributes.color,TI=Ci!==void 0?Ci.length:0,ZI=uI.get(_A),Ei=L.state.lights;if(og===!0&&(Rg===!0||IA!==Z)){const tA=IA===Z&&_A.id===Bg;hI.setState(_A,IA,tA)}let wt=!1;_A.version===ZI.__version?(ZI.needsLights&&ZI.lightsStateVersion!==Ei.state.version||ZI.outputColorSpace!==UI||ig.isInstancedMesh&&ZI.instancing===!1||!ig.isInstancedMesh&&ZI.instancing===!0||ig.isSkinnedMesh&&ZI.skinning===!1||!ig.isSkinnedMesh&&ZI.skinning===!0||ig.isInstancedMesh&&ZI.instancingColor===!0&&ig.instanceColor===null||ig.isInstancedMesh&&ZI.instancingColor===!1&&ig.instanceColor!==null||ZI.envMap!==NI||_A.fog===!0&&ZI.fog!==tI||ZI.numClippingPlanes!==void 0&&(ZI.numClippingPlanes!==hI.numPlanes||ZI.numIntersection!==hI.numIntersection)||ZI.vertexAlphas!==xI||ZI.vertexTangents!==GI||ZI.morphTargets!==JI||ZI.morphNormals!==Rt||ZI.morphColors!==kt||ZI.toneMapping!==se||Pg.isWebGL2===!0&&ZI.morphTargetsCount!==TI)&&(wt=!0):(wt=!0,ZI.__version=_A.version);let Hi=ZI.currentProgram;wt===!0&&(Hi=kB(_A,TA,ig));let ZC=!1,EB=!1,XC=!1;const te=Hi.getUniforms(),m=ZI.uniforms;if(Og.useProgram(Hi.program)&&(ZC=!0,EB=!0,XC=!0),_A.id!==Bg&&(Bg=_A.id,EB=!0),ZC||Z!==IA){te.setValue(cA,"projectionMatrix",IA.projectionMatrix),te.setValue(cA,"viewMatrix",IA.matrixWorldInverse);const tA=te.map.cameraPosition;tA!==void 0&&tA.setValue(cA,wI.setFromMatrixPosition(IA.matrixWorld)),Pg.logarithmicDepthBuffer&&te.setValue(cA,"logDepthBufFC",2/(Math.log(IA.far+1)/Math.LN2)),(_A.isMeshPhongMaterial||_A.isMeshToonMaterial||_A.isMeshLambertMaterial||_A.isMeshBasicMaterial||_A.isMeshStandardMaterial||_A.isShaderMaterial)&&te.setValue(cA,"isOrthographic",IA.isOrthographicCamera===!0),Z!==IA&&(Z=IA,EB=!0,XC=!0)}if(ig.isSkinnedMesh){te.setOptional(cA,ig,"bindMatrix"),te.setOptional(cA,ig,"bindMatrixInverse");const tA=ig.skeleton;tA&&(Pg.floatVertexTextures?(tA.boneTexture===null&&tA.computeBoneTexture(),te.setValue(cA,"boneTexture",tA.boneTexture,HA),te.setValue(cA,"boneTextureSize",tA.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const _=eg.morphAttributes;if((_.position!==void 0||_.normal!==void 0||_.color!==void 0&&Pg.isWebGL2===!0)&&pI.update(ig,eg,Hi),(EB||ZI.receiveShadow!==ig.receiveShadow)&&(ZI.receiveShadow=ig.receiveShadow,te.setValue(cA,"receiveShadow",ig.receiveShadow)),_A.isMeshGouraudMaterial&&_A.envMap!==null&&(m.envMap.value=NI,m.flipEnvMap.value=NI.isCubeTexture&&NI.isRenderTargetTexture===!1?-1:1),EB&&(te.setValue(cA,"toneMappingExposure",BA.toneMappingExposure),ZI.needsLights&&$E(m,XC),tI&&_A.fog===!0&&Ug.refreshFogUniforms(m,tI),Ug.refreshMaterialUniforms(m,_A,q,lg,Hg),dn.upload(cA,ZI.uniformsList,m,HA)),_A.isShaderMaterial&&_A.uniformsNeedUpdate===!0&&(dn.upload(cA,ZI.uniformsList,m,HA),_A.uniformsNeedUpdate=!1),_A.isSpriteMaterial&&te.setValue(cA,"center",ig.center),te.setValue(cA,"modelViewMatrix",ig.modelViewMatrix),te.setValue(cA,"normalMatrix",ig.normalMatrix),te.setValue(cA,"modelMatrix",ig.matrixWorld),_A.isShaderMaterial||_A.isRawShaderMaterial){const tA=_A.uniformsGroups;for(let wA=0,FA=tA.length;wA<FA;wA++)if(Pg.isWebGL2){const vA=tA[wA];qI.update(vA,Hi),qI.bind(vA,Hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hi}function $E(IA,TA){IA.ambientLightColor.needsUpdate=TA,IA.lightProbe.needsUpdate=TA,IA.directionalLights.needsUpdate=TA,IA.directionalLightShadows.needsUpdate=TA,IA.pointLights.needsUpdate=TA,IA.pointLightShadows.needsUpdate=TA,IA.spotLights.needsUpdate=TA,IA.spotLightShadows.needsUpdate=TA,IA.rectAreaLights.needsUpdate=TA,IA.hemisphereLights.needsUpdate=TA}function Io(IA){return IA.isMeshLambertMaterial||IA.isMeshToonMaterial||IA.isMeshPhongMaterial||IA.isMeshStandardMaterial||IA.isShadowMaterial||IA.isShaderMaterial&&IA.lights===!0}this.getActiveCubeFace=function(){return DA},this.getActiveMipmapLevel=function(){return MA},this.getRenderTarget=function(){return yA},this.setRenderTargetTextures=function(IA,TA,eg){uI.get(IA.texture).__webglTexture=TA,uI.get(IA.depthTexture).__webglTexture=eg;const _A=uI.get(IA);_A.__hasExternalTextures=!0,_A.__hasExternalTextures&&(_A.__autoAllocateDepthBuffer=eg===void 0,_A.__autoAllocateDepthBuffer||dg.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),_A.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(IA,TA){const eg=uI.get(IA);eg.__webglFramebuffer=TA,eg.__useDefaultFramebuffer=TA===void 0},this.setRenderTarget=function(IA,TA=0,eg=0){yA=IA,DA=TA,MA=eg;let _A=!0,ig=null,tI=!1,MI=!1;if(IA){const NI=uI.get(IA);NI.__useDefaultFramebuffer!==void 0?(Og.bindFramebuffer(cA.FRAMEBUFFER,null),_A=!1):NI.__webglFramebuffer===void 0?HA.setupRenderTarget(IA):NI.__hasExternalTextures&&HA.rebindTextures(IA,uI.get(IA.texture).__webglTexture,uI.get(IA.depthTexture).__webglTexture);const xI=IA.texture;(xI.isData3DTexture||xI.isDataArrayTexture||xI.isCompressedArrayTexture)&&(MI=!0);const GI=uI.get(IA).__webglFramebuffer;IA.isWebGLCubeRenderTarget?(Array.isArray(GI[TA])?ig=GI[TA][eg]:ig=GI[TA],tI=!0):Pg.isWebGL2&&IA.samples>0&&HA.useMultisampledRTT(IA)===!1?ig=uI.get(IA).__webglMultisampledFramebuffer:Array.isArray(GI)?ig=GI[eg]:ig=GI,oA.copy(IA.viewport),Cg.copy(IA.scissor),ag=IA.scissorTest}else oA.copy(nA).multiplyScalar(q).floor(),Cg.copy(sA).multiplyScalar(q).floor(),ag=mA;if(Og.bindFramebuffer(cA.FRAMEBUFFER,ig)&&Pg.drawBuffers&&_A&&Og.drawBuffers(IA,ig),Og.viewport(oA),Og.scissor(Cg),Og.setScissorTest(ag),tI){const NI=uI.get(IA.texture);cA.framebufferTexture2D(cA.FRAMEBUFFER,cA.COLOR_ATTACHMENT0,cA.TEXTURE_CUBE_MAP_POSITIVE_X+TA,NI.__webglTexture,eg)}else if(MI){const NI=uI.get(IA.texture),xI=TA||0;cA.framebufferTextureLayer(cA.FRAMEBUFFER,cA.COLOR_ATTACHMENT0,NI.__webglTexture,eg||0,xI)}Bg=-1},this.readRenderTargetPixels=function(IA,TA,eg,_A,ig,tI,MI){if(!(IA&&IA.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let UI=uI.get(IA).__webglFramebuffer;if(IA.isWebGLCubeRenderTarget&&MI!==void 0&&(UI=UI[MI]),UI){Og.bindFramebuffer(cA.FRAMEBUFFER,UI);try{const NI=IA.texture,xI=NI.format,GI=NI.type;if(xI!==Yi&&aI.convert(xI)!==cA.getParameter(cA.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const JI=GI===ZQ&&(dg.has("EXT_color_buffer_half_float")||Pg.isWebGL2&&dg.has("EXT_color_buffer_float"));if(GI!==iC&&aI.convert(GI)!==cA.getParameter(cA.IMPLEMENTATION_COLOR_READ_TYPE)&&!(GI===IC&&(Pg.isWebGL2||dg.has("OES_texture_float")||dg.has("WEBGL_color_buffer_float")))&&!JI){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}TA>=0&&TA<=IA.width-_A&&eg>=0&&eg<=IA.height-ig&&cA.readPixels(TA,eg,_A,ig,aI.convert(xI),aI.convert(GI),tI)}finally{const NI=yA!==null?uI.get(yA).__webglFramebuffer:null;Og.bindFramebuffer(cA.FRAMEBUFFER,NI)}}},this.copyFramebufferToTexture=function(IA,TA,eg=0){const _A=Math.pow(2,-eg),ig=Math.floor(TA.image.width*_A),tI=Math.floor(TA.image.height*_A);HA.setTexture2D(TA,0),cA.copyTexSubImage2D(cA.TEXTURE_2D,eg,0,0,IA.x,IA.y,ig,tI),Og.unbindTexture()},this.copyTextureToTexture=function(IA,TA,eg,_A=0){const ig=TA.image.width,tI=TA.image.height,MI=aI.convert(eg.format),UI=aI.convert(eg.type);HA.setTexture2D(eg,0),cA.pixelStorei(cA.UNPACK_FLIP_Y_WEBGL,eg.flipY),cA.pixelStorei(cA.UNPACK_PREMULTIPLY_ALPHA_WEBGL,eg.premultiplyAlpha),cA.pixelStorei(cA.UNPACK_ALIGNMENT,eg.unpackAlignment),TA.isDataTexture?cA.texSubImage2D(cA.TEXTURE_2D,_A,IA.x,IA.y,ig,tI,MI,UI,TA.image.data):TA.isCompressedTexture?cA.compressedTexSubImage2D(cA.TEXTURE_2D,_A,IA.x,IA.y,TA.mipmaps[0].width,TA.mipmaps[0].height,MI,TA.mipmaps[0].data):cA.texSubImage2D(cA.TEXTURE_2D,_A,IA.x,IA.y,MI,UI,TA.image),_A===0&&eg.generateMipmaps&&cA.generateMipmap(cA.TEXTURE_2D),Og.unbindTexture()},this.copyTextureToTexture3D=function(IA,TA,eg,_A,ig=0){if(BA.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const tI=IA.max.x-IA.min.x+1,MI=IA.max.y-IA.min.y+1,UI=IA.max.z-IA.min.z+1,NI=aI.convert(_A.format),xI=aI.convert(_A.type);let GI;if(_A.isData3DTexture)HA.setTexture3D(_A,0),GI=cA.TEXTURE_3D;else if(_A.isDataArrayTexture)HA.setTexture2DArray(_A,0),GI=cA.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}cA.pixelStorei(cA.UNPACK_FLIP_Y_WEBGL,_A.flipY),cA.pixelStorei(cA.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_A.premultiplyAlpha),cA.pixelStorei(cA.UNPACK_ALIGNMENT,_A.unpackAlignment);const JI=cA.getParameter(cA.UNPACK_ROW_LENGTH),Rt=cA.getParameter(cA.UNPACK_IMAGE_HEIGHT),kt=cA.getParameter(cA.UNPACK_SKIP_PIXELS),se=cA.getParameter(cA.UNPACK_SKIP_ROWS),Ci=cA.getParameter(cA.UNPACK_SKIP_IMAGES),TI=eg.isCompressedTexture?eg.mipmaps[0]:eg.image;cA.pixelStorei(cA.UNPACK_ROW_LENGTH,TI.width),cA.pixelStorei(cA.UNPACK_IMAGE_HEIGHT,TI.height),cA.pixelStorei(cA.UNPACK_SKIP_PIXELS,IA.min.x),cA.pixelStorei(cA.UNPACK_SKIP_ROWS,IA.min.y),cA.pixelStorei(cA.UNPACK_SKIP_IMAGES,IA.min.z),eg.isDataTexture||eg.isData3DTexture?cA.texSubImage3D(GI,ig,TA.x,TA.y,TA.z,tI,MI,UI,NI,xI,TI.data):eg.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),cA.compressedTexSubImage3D(GI,ig,TA.x,TA.y,TA.z,tI,MI,UI,NI,TI.data)):cA.texSubImage3D(GI,ig,TA.x,TA.y,TA.z,tI,MI,UI,NI,xI,TI),cA.pixelStorei(cA.UNPACK_ROW_LENGTH,JI),cA.pixelStorei(cA.UNPACK_IMAGE_HEIGHT,Rt),cA.pixelStorei(cA.UNPACK_SKIP_PIXELS,kt),cA.pixelStorei(cA.UNPACK_SKIP_ROWS,se),cA.pixelStorei(cA.UNPACK_SKIP_IMAGES,Ci),ig===0&&_A.generateMipmaps&&cA.generateMipmap(GI),Og.unbindTexture()},this.initTexture=function(IA){IA.isCubeTexture?HA.setTextureCube(IA,0):IA.isData3DTexture?HA.setTexture3D(IA,0):IA.isDataArrayTexture||IA.isCompressedArrayTexture?HA.setTexture2DArray(IA,0):HA.setTexture2D(IA,0),Og.unbindTexture()},this.resetState=function(){DA=0,MA=0,yA=null,Og.reset(),sI.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return FB}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(I){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!I}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bt?TC:rl}set outputEncoding(I){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=I===TC?bt:BB}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(I){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=I}}class rM extends Ll{}rM.prototype.isWebGL1Renderer=!0;class hM extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(I,i){return super.copy(I,i),I.background!==null&&(this.background=I.background.clone()),I.environment!==null&&(this.environment=I.environment.clone()),I.fog!==null&&(this.fog=I.fog.clone()),this.backgroundBlurriness=I.backgroundBlurriness,this.backgroundIntensity=I.backgroundIntensity,I.overrideMaterial!==null&&(this.overrideMaterial=I.overrideMaterial.clone()),this.matrixAutoUpdate=I.matrixAutoUpdate,this}toJSON(I){const i=super.toJSON(I);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class ds extends CC{constructor(I=1,i=1,o=1,r=32,c=1,y=!1,w=0,R=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:I,radiusBottom:i,height:o,radialSegments:r,heightSegments:c,openEnded:y,thetaStart:w,thetaLength:R};const G=this;r=Math.floor(r),c=Math.floor(c);const N=[],J=[],b=[],Y=[];let P=0;const V=[],L=o/2;let U=0;fA(),y===!1&&(I>0&&BA(!0),i>0&&BA(!1)),this.setIndex(N),this.setAttribute("position",new iB(J,3)),this.setAttribute("normal",new iB(b,3)),this.setAttribute("uv",new iB(Y,2));function fA(){const CA=new $A,DA=new $A;let MA=0;const yA=(i-I)/o;for(let Bg=0;Bg<=c;Bg++){const Z=[],oA=Bg/c,Cg=oA*(i-I)+I;for(let ag=0;ag<=r;ag++){const YA=ag/r,WA=YA*R+w,zA=Math.sin(WA),lg=Math.cos(WA);DA.x=Cg*zA,DA.y=-oA*o+L,DA.z=Cg*lg,J.push(DA.x,DA.y,DA.z),CA.set(zA,yA,lg).normalize(),b.push(CA.x,CA.y,CA.z),Y.push(YA,1-oA),Z.push(P++)}V.push(Z)}for(let Bg=0;Bg<r;Bg++)for(let Z=0;Z<c;Z++){const oA=V[Z][Bg],Cg=V[Z+1][Bg],ag=V[Z+1][Bg+1],YA=V[Z][Bg+1];N.push(oA,Cg,YA),N.push(Cg,ag,YA),MA+=6}G.addGroup(U,MA,0),U+=MA}function BA(CA){const DA=P,MA=new pt,yA=new $A;let Bg=0;const Z=CA===!0?I:i,oA=CA===!0?1:-1;for(let ag=1;ag<=r;ag++)J.push(0,L*oA,0),b.push(0,oA,0),Y.push(.5,.5),P++;const Cg=P;for(let ag=0;ag<=r;ag++){const WA=ag/r*R+w,zA=Math.cos(WA),lg=Math.sin(WA);yA.x=Z*lg,yA.y=L*oA,yA.z=Z*zA,J.push(yA.x,yA.y,yA.z),b.push(0,oA,0),MA.x=zA*.5+.5,MA.y=lg*.5*oA+.5,Y.push(MA.x,MA.y),P++}for(let ag=0;ag<r;ag++){const YA=DA+ag,WA=Cg+ag;CA===!0?N.push(WA,WA+1,YA):N.push(WA+1,WA,YA),Bg+=3}G.addGroup(U,Bg,CA===!0?1:2),U+=Bg}}copy(I){return super.copy(I),this.parameters=Object.assign({},I.parameters),this}static fromJSON(I){return new ds(I.radiusTop,I.radiusBottom,I.height,I.radialSegments,I.heightSegments,I.openEnded,I.thetaStart,I.thetaLength)}}class cM extends $Q{constructor(I){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new lt(16777215),this.specular=new lt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ss,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(I)}copy(I){return super.copy(I),this.color.copy(I.color),this.specular.copy(I.specular),this.shininess=I.shininess,this.map=I.map,this.lightMap=I.lightMap,this.lightMapIntensity=I.lightMapIntensity,this.aoMap=I.aoMap,this.aoMapIntensity=I.aoMapIntensity,this.emissive.copy(I.emissive),this.emissiveMap=I.emissiveMap,this.emissiveIntensity=I.emissiveIntensity,this.bumpMap=I.bumpMap,this.bumpScale=I.bumpScale,this.normalMap=I.normalMap,this.normalMapType=I.normalMapType,this.normalScale.copy(I.normalScale),this.displacementMap=I.displacementMap,this.displacementScale=I.displacementScale,this.displacementBias=I.displacementBias,this.specularMap=I.specularMap,this.alphaMap=I.alphaMap,this.envMap=I.envMap,this.combine=I.combine,this.reflectivity=I.reflectivity,this.refractionRatio=I.refractionRatio,this.wireframe=I.wireframe,this.wireframeLinewidth=I.wireframeLinewidth,this.wireframeLinecap=I.wireframeLinecap,this.wireframeLinejoin=I.wireframeLinejoin,this.flatShading=I.flatShading,this.fog=I.fog,this}}class lM extends Me{constructor(I,i=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(I),this.intensity=i}dispose(){}copy(I,i){return super.copy(I,i),this.color.copy(I.color),this.intensity=I.intensity,this}toJSON(I){const i=super.toJSON(I);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}class dM extends lM{constructor(I,i,o){super(I,o),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(i)}copy(I,i){return super.copy(I,i),this.groundColor.copy(I.groundColor),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:as}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=as);let XE,qE,tB,ln,vE,WQ;uM();pM();wM();function uM(){const E=document.createElement("div");document.body.appendChild(E),qE=new hM,XE=new di(70,window.innerWidth/window.innerHeight,.01,20);const I=new dM(16777215,12303359,3);I.position.set(.5,1,.25),qE.add(I),tB=new Ll({antialias:!0,alpha:!0}),tB.setPixelRatio(window.devicePixelRatio),tB.setSize(window.innerWidth,window.innerHeight),tB.xr.enabled=!0,E.appendChild(tB.domElement),ln=tB.xr.getController(0),qE.add(ln);const i=new ds(0,.05,.2,32).rotateX(Math.PI/2),o=new cM({color:16777215*Math.random()}),r=new NB(i,o);r.position.set(0,0,-.3).applyMatrix4(ln.matrixWorld),r.quaternion.setFromRotationMatrix(ln.matrixWorld),qE.add(r),window.addEventListener("resize",DM),window.addEventListener("arjs-nft-init-data",function(c){console.log(c);var y=c.detail;r.position.y=y.height/y.dpi*2.54*10/2,r.position.x=y.width/y.dpi*2.54*10/2})}function DM(){XE.aspect=window.innerWidth/window.innerHeight,XE.updateProjectionMatrix(),tB.setSize(window.innerWidth,window.innerHeight)}function wM(){tB.setAnimationLoop(fM)}function fM(){tB.render(qE,XE)}function pM(){vE=new THREEx.ArToolkitContext({detectionMode:"mono",canvasWidth:480,canvasHeight:640},{sourceWidth:480,sourceHeight:640}),vE.init(function(){XE.projectionMatrix.copy(vE.getProjectionMatrix())}),WQ=new THREEx.ArToolkitSource({sourceType:"webcam",sourceWidth:480,sourceHeight:640}),WQ.init(function(){setTimeout(function(){E()},1e3)}),window.addEventListener("resize",function(){E()}),window.addEventListener("arjs-nft-loaded",function(i){console.log(i)});function E(){WQ.onResizeElement(),WQ.copyElementSizeTo(tB.domElement),vE.arController!==null&&WQ.copyElementSizeTo(vE.arController.canvas)}new THREEx.ArMarkerControls(vE,XE,{type:"nft",descriptorsUrl:"./resources/images/klee/klee",changeMatrixMode:"cameraTransformMatrix"});var I=new Me;qE.add(I)}});export default yM();
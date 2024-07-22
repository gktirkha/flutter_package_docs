(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.jU(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.eA(b)
return new s(c,this)}:function(){if(s===null)s=A.eA(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.eA(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
eF(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eC(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.eD==null){A.jF()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.a(A.f7("Return interceptor for "+A.i(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.dg
if(o==null)o=$.dg=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.jK(a)
if(p!=null)return p
if(typeof a=="function")return B.F
s=Object.getPrototypeOf(a)
if(s==null)return B.r
if(s===Object.prototype)return B.r
if(typeof q=="function"){o=$.dg
if(o==null)o=$.dg=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.j,enumerable:false,writable:true,configurable:true})
return B.j}return B.j},
hI(a,b){if(a<0||a>4294967295)throw A.a(A.H(a,0,4294967295,"length",null))
return J.hK(new Array(a),b)},
hJ(a,b){if(a<0)throw A.a(A.M("Length must be a non-negative integer: "+a,null))
return A.h(new Array(a),b.i("o<0>"))},
eS(a,b){if(a<0)throw A.a(A.M("Length must be a non-negative integer: "+a,null))
return A.h(new Array(a),b.i("o<0>"))},
hK(a,b){var s=A.h(a,b.i("o<0>"))
s.$flags=1
return s},
hL(a,b){return J.hn(a,b)},
aj(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aL.prototype
return J.bF.prototype}if(typeof a=="string")return J.ac.prototype
if(a==null)return J.aM.prototype
if(typeof a=="boolean")return J.bE.prototype
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Z.prototype
if(typeof a=="symbol")return J.aQ.prototype
if(typeof a=="bigint")return J.aO.prototype
return a}if(a instanceof A.k)return a
return J.eC(a)},
ck(a){if(typeof a=="string")return J.ac.prototype
if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Z.prototype
if(typeof a=="symbol")return J.aQ.prototype
if(typeof a=="bigint")return J.aO.prototype
return a}if(a instanceof A.k)return a
return J.eC(a)},
dT(a){if(a==null)return a
if(Array.isArray(a))return J.o.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Z.prototype
if(typeof a=="symbol")return J.aQ.prototype
if(typeof a=="bigint")return J.aO.prototype
return a}if(a instanceof A.k)return a
return J.eC(a)},
jy(a){if(typeof a=="number")return J.aN.prototype
if(typeof a=="string")return J.ac.prototype
if(a==null)return a
if(!(a instanceof A.k))return J.ar.prototype
return a},
F(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aj(a).E(a,b)},
hk(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.fY(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ck(a).k(a,b)},
hl(a,b,c){if(typeof b==="number")if((Array.isArray(a)||A.fY(a,a[v.dispatchPropertyName]))&&!(a.$flags&2)&&b>>>0===b&&b<a.length)return a[b]=c
return J.dT(a).q(a,b,c)},
hm(a,b){return J.dT(a).Y(a,b)},
hn(a,b){return J.jy(a).aJ(a,b)},
ho(a,b){return J.ck(a).N(a,b)},
e9(a,b){return J.dT(a).C(a,b)},
X(a){return J.aj(a).gp(a)},
a9(a){return J.dT(a).gA(a)},
bt(a){return J.ck(a).gl(a)},
hp(a){return J.aj(a).gt(a)},
al(a){return J.aj(a).h(a)},
bD:function bD(){},
bE:function bE(){},
aM:function aM(){},
aP:function aP(){},
a_:function a_(){},
bS:function bS(){},
ar:function ar(){},
Z:function Z(){},
aO:function aO(){},
aQ:function aQ(){},
o:function o(a){this.$ti=a},
cB:function cB(a){this.$ti=a},
am:function am(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aN:function aN(){},
aL:function aL(){},
bF:function bF(){},
ac:function ac(){}},A={ec:function ec(){},
hs(a,b,c){if(b.i("c<0>").b(a))return new A.b5(a,b.i("@<0>").B(c).i("b5<1,2>"))
return new A.aa(a,b.i("@<0>").B(c).i("aa<1,2>"))},
dU(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
a1(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
ej(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cj(a,b,c){return a},
eE(a){var s,r
for(s=$.ak.length,r=0;r<s;++r)if(a===$.ak[r])return!0
return!1},
hO(a,b,c,d){if(t.U.b(a))return new A.aI(a,b,c.i("@<0>").B(d).i("aI<1,2>"))
return new A.ae(a,b,c.i("@<0>").B(d).i("ae<1,2>"))},
eR(){return new A.b1("No element")},
a2:function a2(){},
bx:function bx(a,b){this.a=a
this.$ti=b},
aa:function aa(a,b){this.a=a
this.$ti=b},
b5:function b5(a,b){this.a=a
this.$ti=b},
b4:function b4(){},
N:function N(a,b){this.a=a
this.$ti=b},
aR:function aR(a){this.a=a},
by:function by(a){this.a=a},
cL:function cL(){},
c:function c(){},
J:function J(){},
an:function an(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ae:function ae(a,b,c){this.a=a
this.b=b
this.$ti=c},
aI:function aI(a,b,c){this.a=a
this.b=b
this.$ti=c},
ao:function ao(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
af:function af(a,b,c){this.a=a
this.b=b
this.$ti=c},
aK:function aK(){},
bX:function bX(){},
as:function as(){},
bl:function bl(){},
hy(){throw A.a(A.bY("Cannot modify unmodifiable Map"))},
h2(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
fY(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.p.b(a)},
i(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.al(a)
return s},
bT(a){var s,r=$.eX
if(r==null)r=$.eX=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
eY(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw A.a(A.H(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((q.charCodeAt(o)|32)>r)return n}return parseInt(a,b)},
cK(a){return A.hS(a)},
hS(a){var s,r,q,p
if(a instanceof A.k)return A.C(A.aB(a),null)
s=J.aj(a)
if(s===B.E||s===B.G||t.o.b(a)){r=B.l(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.C(A.aB(a),null)},
eZ(a){if(a==null||typeof a=="number"||A.ev(a))return J.al(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ab)return a.h(0)
if(a instanceof A.bb)return a.aG(!0)
return"Instance of '"+A.cK(a)+"'"},
hU(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
Q(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.c.W(s,10)|55296)>>>0,s&1023|56320)}}throw A.a(A.H(a,0,1114111,null,null))},
hT(a){var s=a.$thrownJsError
if(s==null)return null
return A.a6(s)},
eB(a,b){var s,r="index"
if(!A.fI(b))return new A.G(!0,b,r,null)
s=J.bt(a)
if(b<0||b>=s)return A.ea(b,s,a,r)
return A.hV(b,r)},
jv(a,b,c){if(a>c)return A.H(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.H(b,a,c,"end",null)
return new A.G(!0,b,"end",null)},
jo(a){return new A.G(!0,a,null,null)},
a(a){return A.fX(new Error(),a)},
fX(a,b){var s
if(b==null)b=new A.R()
a.dartException=b
s=A.jV
if("defineProperty" in Object){Object.defineProperty(a,"message",{get:s})
a.name=""}else a.toString=s
return a},
jV(){return J.al(this.dartException)},
h1(a){throw A.a(a)},
eG(a,b){throw A.fX(b,a)},
K(a,b){var s,r,q,p,o=Error()
if(t.j.b(a)){if(b==="add"||b==="addAll")s="add to"
else s=null
r="list"}else{s="'"+b+"' on"
r="ByteData"}if(s==null)s="modify"
if(((a.$flags|0)&2)!==0){q="unmodifiable "
p="an "}else{q="fixed-length "
p="a "}A.eG(new A.b2("Cannot "+s+" "+p+q+r),o)},
e7(a){throw A.a(A.aD(a))},
S(a){var s,r,q,p,o,n
a=A.jP(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.h([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.cO(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
cP(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
f6(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
ed(a,b){var s=b==null,r=s?null:b.method
return new A.bG(a,r,s?null:b.receiver)},
a8(a){if(a==null)return new A.cJ(a)
if(a instanceof A.aJ)return A.a7(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.a7(a,a.dartException)
return A.jn(a)},
a7(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
jn(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.W(r,16)&8191)===10)switch(q){case 438:return A.a7(a,A.ed(A.i(s)+" (Error "+q+")",null))
case 445:case 5007:A.i(s)
return A.a7(a,new A.aY())}}if(a instanceof TypeError){p=$.h3()
o=$.h4()
n=$.h5()
m=$.h6()
l=$.h9()
k=$.ha()
j=$.h8()
$.h7()
i=$.hc()
h=$.hb()
g=p.D(s)
if(g!=null)return A.a7(a,A.ed(s,g))
else{g=o.D(s)
if(g!=null){g.method="call"
return A.a7(a,A.ed(s,g))}else if(n.D(s)!=null||m.D(s)!=null||l.D(s)!=null||k.D(s)!=null||j.D(s)!=null||m.D(s)!=null||i.D(s)!=null||h.D(s)!=null)return A.a7(a,new A.aY())}return A.a7(a,new A.bW(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.b0()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.a7(a,new A.G(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.b0()
return a},
a6(a){var s
if(a instanceof A.aJ)return a.b
if(a==null)return new A.bc(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bc(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
fZ(a){if(a==null)return J.X(a)
if(typeof a=="object")return A.bT(a)
return J.X(a)},
jx(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.q(0,a[s],a[r])}return b},
j0(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.a(new A.d3("Unsupported number of arguments for wrapped closure"))},
aA(a,b){var s=a.$identity
if(!!s)return s
s=A.jt(a,b)
a.$identity=s
return s},
jt(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.j0)},
hx(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.cM().constructor.prototype):Object.create(new A.aC(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.eQ(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.ht(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.eQ(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
ht(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.hq)}throw A.a("Error in functionType of tearoff")},
hu(a,b,c,d){var s=A.eP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
eQ(a,b,c,d){if(c)return A.hw(a,b,d)
return A.hu(b.length,d,a,b)},
hv(a,b,c,d){var s=A.eP,r=A.hr
switch(b?-1:a){case 0:throw A.a(new A.bU("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
hw(a,b,c){var s,r
if($.eN==null)$.eN=A.eM("interceptor")
if($.eO==null)$.eO=A.eM("receiver")
s=b.length
r=A.hv(s,c,a,b)
return r},
eA(a){return A.hx(a)},
hq(a,b){return A.bh(v.typeUniverse,A.aB(a.a),b)},
eP(a){return a.a},
hr(a){return a.b},
eM(a){var s,r,q,p=new A.aC("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.a(A.M("Field name "+a+" not found.",null))},
kw(a){throw A.a(new A.c3(a))},
jz(a){return v.getIsolateTag(a)},
jK(a){var s,r,q,p,o,n=$.fW.$1(a),m=$.dS[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.e2[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.fT.$2(a,n)
if(q!=null){m=$.dS[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.e2[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.e3(s)
$.dS[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.e2[n]=s
return s}if(p==="-"){o=A.e3(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.h_(a,s)
if(p==="*")throw A.a(A.f7(n))
if(v.leafTags[n]===true){o=A.e3(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.h_(a,s)},
h_(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.eF(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
e3(a){return J.eF(a,!1,null,!!a.$iD)},
jM(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.e3(s)
else return J.eF(s,c,null,null)},
jF(){if(!0===$.eD)return
$.eD=!0
A.jG()},
jG(){var s,r,q,p,o,n,m,l
$.dS=Object.create(null)
$.e2=Object.create(null)
A.jE()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.h0.$1(o)
if(n!=null){m=A.jM(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
jE(){var s,r,q,p,o,n,m=B.u()
m=A.az(B.v,A.az(B.w,A.az(B.m,A.az(B.m,A.az(B.x,A.az(B.y,A.az(B.z(B.l),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.fW=new A.dV(p)
$.fT=new A.dW(o)
$.h0=new A.dX(n)},
az(a,b){return a(b)||b},
ju(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
eT(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.a(A.x("Illegal RegExp pattern ("+String(n)+")",a,null))},
jS(a,b,c){var s=a.indexOf(b,c)
return s>=0},
jP(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
fQ(a){return a},
jT(a,b,c,d){var s,r,q,p=new A.cY(b,a,0),o=t.F,n=0,m=""
for(;p.m();){s=p.d
if(s==null)s=o.a(s)
r=s.b
q=r.index
m=m+A.i(A.fQ(B.a.j(a,n,q)))+A.i(c.$1(s))
n=q+r[0].length}p=m+A.i(A.fQ(B.a.J(a,n)))
return p.charCodeAt(0)==0?p:p},
cc:function cc(a,b){this.a=a
this.b=b},
aE:function aE(){},
aG:function aG(a,b,c){this.a=a
this.b=b
this.$ti=c},
c9:function c9(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aF:function aF(){},
aH:function aH(a,b,c){this.a=a
this.b=b
this.$ti=c},
cO:function cO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aY:function aY(){},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
bW:function bW(a){this.a=a},
cJ:function cJ(a){this.a=a},
aJ:function aJ(a,b){this.a=a
this.b=b},
bc:function bc(a){this.a=a
this.b=null},
ab:function ab(){},
co:function co(){},
cp:function cp(){},
cN:function cN(){},
cM:function cM(){},
aC:function aC(a,b){this.a=a
this.b=b},
c3:function c3(a){this.a=a},
bU:function bU(a){this.a=a},
ad:function ad(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cC:function cC(a){this.a=a},
cF:function cF(a,b){this.a=a
this.b=b
this.c=null},
O:function O(a,b){this.a=a
this.$ti=b},
bH:function bH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dV:function dV(a){this.a=a},
dW:function dW(a){this.a=a},
dX:function dX(a){this.a=a},
bb:function bb(){},
cb:function cb(){},
cA:function cA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ca:function ca(a){this.b=a},
cY:function cY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
iQ(a){return a},
hP(a){return new Int8Array(a)},
hQ(a){return new Uint8Array(a)},
U(a,b,c){if(a>>>0!==a||a>=c)throw A.a(A.eB(b,a))},
iN(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.a(A.jv(a,b,c))
return b},
bI:function bI(){},
aV:function aV(){},
bJ:function bJ(){},
ap:function ap(){},
aT:function aT(){},
aU:function aU(){},
bK:function bK(){},
bL:function bL(){},
bM:function bM(){},
bN:function bN(){},
bO:function bO(){},
bP:function bP(){},
bQ:function bQ(){},
aW:function aW(){},
aX:function aX(){},
b7:function b7(){},
b8:function b8(){},
b9:function b9(){},
ba:function ba(){},
f0(a,b){var s=b.c
return s==null?b.c=A.en(a,b.x,!0):s},
ei(a,b){var s=b.c
return s==null?b.c=A.bf(a,"Y",[b.x]):s},
f1(a){var s=a.w
if(s===6||s===7||s===8)return A.f1(a.x)
return s===12||s===13},
hW(a){return a.as},
bp(a){return A.cg(v.typeUniverse,a,!1)},
a5(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.a5(a1,s,a3,a4)
if(r===s)return a2
return A.fl(a1,r,!0)
case 7:s=a2.x
r=A.a5(a1,s,a3,a4)
if(r===s)return a2
return A.en(a1,r,!0)
case 8:s=a2.x
r=A.a5(a1,s,a3,a4)
if(r===s)return a2
return A.fj(a1,r,!0)
case 9:q=a2.y
p=A.ay(a1,q,a3,a4)
if(p===q)return a2
return A.bf(a1,a2.x,p)
case 10:o=a2.x
n=A.a5(a1,o,a3,a4)
m=a2.y
l=A.ay(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.el(a1,n,l)
case 11:k=a2.x
j=a2.y
i=A.ay(a1,j,a3,a4)
if(i===j)return a2
return A.fk(a1,k,i)
case 12:h=a2.x
g=A.a5(a1,h,a3,a4)
f=a2.y
e=A.jk(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.fi(a1,g,e)
case 13:d=a2.y
a4+=d.length
c=A.ay(a1,d,a3,a4)
o=a2.x
n=A.a5(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.em(a1,n,c,!0)
case 14:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.a(A.bv("Attempted to substitute unexpected RTI kind "+a0))}},
ay(a,b,c,d){var s,r,q,p,o=b.length,n=A.dB(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a5(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
jl(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.dB(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a5(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
jk(a,b,c,d){var s,r=b.a,q=A.ay(a,r,c,d),p=b.b,o=A.ay(a,p,c,d),n=b.c,m=A.jl(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.c6()
s.a=q
s.b=o
s.c=m
return s},
h(a,b){a[v.arrayRti]=b
return a},
fV(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.jB(s)
return a.$S()}return null},
jH(a,b){var s
if(A.f1(b))if(a instanceof A.ab){s=A.fV(a)
if(s!=null)return s}return A.aB(a)},
aB(a){if(a instanceof A.k)return A.E(a)
if(Array.isArray(a))return A.ah(a)
return A.eu(J.aj(a))},
ah(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
E(a){var s=a.$ti
return s!=null?s:A.eu(a)},
eu(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.iZ(a,s)},
iZ(a,b){var s=a instanceof A.ab?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.io(v.typeUniverse,s.name)
b.$ccache=r
return r},
jB(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cg(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
jA(a){return A.ai(A.E(a))},
ey(a){var s
if(a instanceof A.bb)return A.jw(a.$r,a.aA())
s=a instanceof A.ab?A.fV(a):null
if(s!=null)return s
if(t.k.b(a))return J.hp(a).a
if(Array.isArray(a))return A.ah(a)
return A.aB(a)},
ai(a){var s=a.r
return s==null?a.r=A.fE(a):s},
fE(a){var s,r,q=a.as,p=q.replace(/\*/g,"")
if(p===q)return a.r=new A.dt(a)
s=A.cg(v.typeUniverse,p,!0)
r=s.r
return r==null?s.r=A.fE(s):r},
jw(a,b){var s,r,q=b,p=q.length
if(p===0)return t.d
s=A.bh(v.typeUniverse,A.ey(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.fm(v.typeUniverse,s,A.ey(q[r]))
return A.bh(v.typeUniverse,s,a)},
L(a){return A.ai(A.cg(v.typeUniverse,a,!1))},
iY(a){var s,r,q,p,o,n,m=this
if(m===t.K)return A.V(m,a,A.j5)
if(!A.W(m))s=m===t._
else s=!0
if(s)return A.V(m,a,A.j9)
s=m.w
if(s===7)return A.V(m,a,A.iU)
if(s===1)return A.V(m,a,A.fJ)
r=s===6?m.x:m
q=r.w
if(q===8)return A.V(m,a,A.j1)
if(r===t.S)p=A.fI
else if(r===t.i||r===t.H)p=A.j4
else if(r===t.N)p=A.j7
else p=r===t.y?A.ev:null
if(p!=null)return A.V(m,a,p)
if(q===9){o=r.x
if(r.y.every(A.jI)){m.f="$i"+o
if(o==="f")return A.V(m,a,A.j3)
return A.V(m,a,A.j8)}}else if(q===11){n=A.ju(r.x,r.y)
return A.V(m,a,n==null?A.fJ:n)}return A.V(m,a,A.iS)},
V(a,b,c){a.b=c
return a.b(b)},
iX(a){var s,r=this,q=A.iR
if(!A.W(r))s=r===t._
else s=!0
if(s)q=A.iK
else if(r===t.K)q=A.iI
else{s=A.bq(r)
if(s)q=A.iT}r.a=q
return r.a(a)},
ci(a){var s=a.w,r=!0
if(!A.W(a))if(!(a===t._))if(!(a===t.A))if(s!==7)if(!(s===6&&A.ci(a.x)))r=s===8&&A.ci(a.x)||a===t.P||a===t.T
return r},
iS(a){var s=this
if(a==null)return A.ci(s)
return A.jJ(v.typeUniverse,A.jH(a,s),s)},
iU(a){if(a==null)return!0
return this.x.b(a)},
j8(a){var s,r=this
if(a==null)return A.ci(r)
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.aj(a)[s]},
j3(a){var s,r=this
if(a==null)return A.ci(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.k)return!!a[s]
return!!J.aj(a)[s]},
iR(a){var s=this
if(a==null){if(A.bq(s))return a}else if(s.b(a))return a
A.fF(a,s)},
iT(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.fF(a,s)},
fF(a,b){throw A.a(A.id(A.fb(a,A.C(b,null))))},
fb(a,b){return A.cs(a)+": type '"+A.C(A.ey(a),null)+"' is not a subtype of type '"+b+"'"},
id(a){return new A.bd("TypeError: "+a)},
B(a,b){return new A.bd("TypeError: "+A.fb(a,b))},
j1(a){var s=this,r=s.w===6?s.x:s
return r.x.b(a)||A.ei(v.typeUniverse,r).b(a)},
j5(a){return a!=null},
iI(a){if(a!=null)return a
throw A.a(A.B(a,"Object"))},
j9(a){return!0},
iK(a){return a},
fJ(a){return!1},
ev(a){return!0===a||!1===a},
ki(a){if(!0===a)return!0
if(!1===a)return!1
throw A.a(A.B(a,"bool"))},
kk(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.B(a,"bool"))},
kj(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.B(a,"bool?"))},
kl(a){if(typeof a=="number")return a
throw A.a(A.B(a,"double"))},
kn(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.B(a,"double"))},
km(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.B(a,"double?"))},
fI(a){return typeof a=="number"&&Math.floor(a)===a},
fx(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.a(A.B(a,"int"))},
ko(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.B(a,"int"))},
fy(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.B(a,"int?"))},
j4(a){return typeof a=="number"},
kp(a){if(typeof a=="number")return a
throw A.a(A.B(a,"num"))},
kr(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.B(a,"num"))},
kq(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.B(a,"num?"))},
j7(a){return typeof a=="string"},
fz(a){if(typeof a=="string")return a
throw A.a(A.B(a,"String"))},
ks(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.B(a,"String"))},
iJ(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.B(a,"String?"))},
fN(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.C(a[q],b)
return s},
je(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.fN(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.C(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
fG(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.h([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)a4.push("T"+(r+q))
for(p=t.X,o=t._,n="<",m="",q=0;q<s;++q,m=a1){n=B.a.b3(n+m,a4[a4.length-1-q])
l=a5[q]
k=l.w
if(!(k===2||k===3||k===4||k===5||l===p))j=l===o
else j=!0
if(!j)n+=" extends "+A.C(l,a4)}n+=">"}else n=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.C(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.C(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.C(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.C(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return n+"("+a+") => "+b},
C(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6)return A.C(a.x,b)
if(m===7){s=a.x
r=A.C(s,b)
q=s.w
return(q===12||q===13?"("+r+")":r)+"?"}if(m===8)return"FutureOr<"+A.C(a.x,b)+">"
if(m===9){p=A.jm(a.x)
o=a.y
return o.length>0?p+("<"+A.fN(o,b)+">"):p}if(m===11)return A.je(a,b)
if(m===12)return A.fG(a,b,null)
if(m===13)return A.fG(a.x,b,a.y)
if(m===14){n=a.x
return b[b.length-1-n]}return"?"},
jm(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
ip(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
io(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cg(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bg(a,5,"#")
q=A.dB(s)
for(p=0;p<s;++p)q[p]=r
o=A.bf(a,b,q)
n[b]=o
return o}else return m},
im(a,b){return A.fv(a.tR,b)},
il(a,b){return A.fv(a.eT,b)},
cg(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.fg(A.fe(a,null,b,c))
r.set(b,s)
return s},
bh(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.fg(A.fe(a,b,c,!0))
q.set(c,r)
return r},
fm(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.el(a,b,c.w===10?c.y:[c])
p.set(s,q)
return q},
T(a,b){b.a=A.iX
b.b=A.iY
return b},
bg(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.I(null,null)
s.w=b
s.as=c
r=A.T(a,s)
a.eC.set(c,r)
return r},
fl(a,b,c){var s,r=b.as+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.ij(a,b,r,c)
a.eC.set(r,s)
return s},
ij(a,b,c,d){var s,r,q
if(d){s=b.w
if(!A.W(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.I(null,null)
q.w=6
q.x=b
q.as=c
return A.T(a,q)},
en(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.ii(a,b,r,c)
a.eC.set(r,s)
return s},
ii(a,b,c,d){var s,r,q,p
if(d){s=b.w
r=!0
if(!A.W(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.bq(b.x)
if(r)return b
else if(s===1||b===t.A)return t.P
else if(s===6){q=b.x
if(q.w===8&&A.bq(q.x))return q
else return A.f0(a,b)}}p=new A.I(null,null)
p.w=7
p.x=b
p.as=c
return A.T(a,p)},
fj(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.ig(a,b,r,c)
a.eC.set(r,s)
return s},
ig(a,b,c,d){var s,r
if(d){s=b.w
if(A.W(b)||b===t.K||b===t._)return b
else if(s===1)return A.bf(a,"Y",[b])
else if(b===t.P||b===t.T)return t.W}r=new A.I(null,null)
r.w=8
r.x=b
r.as=c
return A.T(a,r)},
ik(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.I(null,null)
s.w=14
s.x=b
s.as=q
r=A.T(a,s)
a.eC.set(q,r)
return r},
be(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
ie(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bf(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.be(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.I(null,null)
r.w=9
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.T(a,r)
a.eC.set(p,q)
return q},
el(a,b,c){var s,r,q,p,o,n
if(b.w===10){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.be(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.I(null,null)
o.w=10
o.x=s
o.y=r
o.as=q
n=A.T(a,o)
a.eC.set(q,n)
return n},
fk(a,b,c){var s,r,q="+"+(b+"("+A.be(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.I(null,null)
s.w=11
s.x=b
s.y=c
s.as=q
r=A.T(a,s)
a.eC.set(q,r)
return r},
fi(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.be(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.be(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.ie(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.I(null,null)
p.w=12
p.x=b
p.y=c
p.as=r
o=A.T(a,p)
a.eC.set(r,o)
return o},
em(a,b,c,d){var s,r=b.as+("<"+A.be(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.ih(a,b,c,r,d)
a.eC.set(r,s)
return s},
ih(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.dB(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.a5(a,b,r,0)
m=A.ay(a,c,r,0)
return A.em(a,n,m,c!==m)}}l=new A.I(null,null)
l.w=13
l.x=b
l.y=c
l.as=d
return A.T(a,l)},
fe(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
fg(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.i7(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.ff(a,r,l,k,!1)
else if(q===46)r=A.ff(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.a3(a.u,a.e,k.pop()))
break
case 94:k.push(A.ik(a.u,k.pop()))
break
case 35:k.push(A.bg(a.u,5,"#"))
break
case 64:k.push(A.bg(a.u,2,"@"))
break
case 126:k.push(A.bg(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.i9(a,k)
break
case 38:A.i8(a,k)
break
case 42:p=a.u
k.push(A.fl(p,A.a3(p,a.e,k.pop()),a.n))
break
case 63:p=a.u
k.push(A.en(p,A.a3(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.fj(p,A.a3(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.i6(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.fh(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.ib(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.a3(a.u,a.e,m)},
i7(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
ff(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===10)o=o.x
n=A.ip(s,o.x)[p]
if(n==null)A.h1('No "'+p+'" in "'+A.hW(o)+'"')
d.push(A.bh(s,o,n))}else d.push(p)
return m},
i9(a,b){var s,r=a.u,q=A.fd(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bf(r,p,q))
else{s=A.a3(r,a.e,p)
switch(s.w){case 12:b.push(A.em(r,s,q,a.n))
break
default:b.push(A.el(r,s,q))
break}}},
i6(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.fd(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.a3(p,a.e,o)
q=new A.c6()
q.a=s
q.b=n
q.c=m
b.push(A.fi(p,r,q))
return
case-4:b.push(A.fk(p,b.pop(),s))
return
default:throw A.a(A.bv("Unexpected state under `()`: "+A.i(o)))}},
i8(a,b){var s=b.pop()
if(0===s){b.push(A.bg(a.u,1,"0&"))
return}if(1===s){b.push(A.bg(a.u,4,"1&"))
return}throw A.a(A.bv("Unexpected extended operation "+A.i(s)))},
fd(a,b){var s=b.splice(a.p)
A.fh(a.u,a.e,s)
a.p=b.pop()
return s},
a3(a,b,c){if(typeof c=="string")return A.bf(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.ia(a,b,c)}else return c},
fh(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.a3(a,b,c[s])},
ib(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.a3(a,b,c[s])},
ia(a,b,c){var s,r,q=b.w
if(q===10){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==9)throw A.a(A.bv("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.a(A.bv("Bad index "+c+" for "+b.h(0)))},
jJ(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.q(a,b,null,c,null,!1)?1:0
r.set(c,s)}if(0===s)return!1
if(1===s)return!0
return!0},
q(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(!A.W(d))s=d===t._
else s=!0
if(s)return!0
r=b.w
if(r===4)return!0
if(A.W(b))return!1
s=b.w
if(s===1)return!0
q=r===14
if(q)if(A.q(a,c[b.x],c,d,e,!1))return!0
p=d.w
s=b===t.P||b===t.T
if(s){if(p===8)return A.q(a,b,c,d.x,e,!1)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.q(a,b.x,c,d,e,!1)
if(r===6)return A.q(a,b.x,c,d,e,!1)
return r!==7}if(r===6)return A.q(a,b.x,c,d,e,!1)
if(p===6){s=A.f0(a,d)
return A.q(a,b,c,s,e,!1)}if(r===8){if(!A.q(a,b.x,c,d,e,!1))return!1
return A.q(a,A.ei(a,b),c,d,e,!1)}if(r===7){s=A.q(a,t.P,c,d,e,!1)
return s&&A.q(a,b.x,c,d,e,!1)}if(p===8){if(A.q(a,b,c,d.x,e,!1))return!0
return A.q(a,b,c,A.ei(a,d),e,!1)}if(p===7){s=A.q(a,b,c,t.P,e,!1)
return s||A.q(a,b,c,d.x,e,!1)}if(q)return!1
s=r!==12
if((!s||r===13)&&d===t.Z)return!0
o=r===11
if(o&&d===t.L)return!0
if(p===13){if(b===t.g)return!0
if(r!==13)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.q(a,j,c,i,e,!1)||!A.q(a,i,e,j,c,!1))return!1}return A.fH(a,b.x,c,d.x,e,!1)}if(p===12){if(b===t.g)return!0
if(s)return!1
return A.fH(a,b,c,d,e,!1)}if(r===9){if(p!==9)return!1
return A.j2(a,b,c,d,e,!1)}if(o&&p===11)return A.j6(a,b,c,d,e,!1)
return!1},
fH(a3,a4,a5,a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.q(a3,a4.x,a5,a6.x,a7,!1))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.q(a3,p[h],a7,g,a5,!1))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.q(a3,p[o+h],a7,g,a5,!1))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.q(a3,k[h],a7,g,a5,!1))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.q(a3,e[a+2],a7,g,a5,!1))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
j2(a,b,c,d,e,f){var s,r,q,p,o,n=b.x,m=d.x
for(;n!==m;){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bh(a,b,r[o])
return A.fw(a,p,null,c,d.y,e,!1)}return A.fw(a,b.y,null,c,d.y,e,!1)},
fw(a,b,c,d,e,f,g){var s,r=b.length
for(s=0;s<r;++s)if(!A.q(a,b[s],d,e[s],f,!1))return!1
return!0},
j6(a,b,c,d,e,f){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.q(a,r[s],c,q[s],e,!1))return!1
return!0},
bq(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.W(a))if(s!==7)if(!(s===6&&A.bq(a.x)))r=s===8&&A.bq(a.x)
return r},
jI(a){var s
if(!A.W(a))s=a===t._
else s=!0
return s},
W(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
fv(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
dB(a){return a>0?new Array(a):v.typeUniverse.sEA},
I:function I(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
c6:function c6(){this.c=this.b=this.a=null},
dt:function dt(a){this.a=a},
c5:function c5(){},
bd:function bd(a){this.a=a},
i1(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.jp()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.aA(new A.d_(q),1)).observe(s,{childList:true})
return new A.cZ(q,s,r)}else if(self.setImmediate!=null)return A.jq()
return A.jr()},
i2(a){self.scheduleImmediate(A.aA(new A.d0(a),0))},
i3(a){self.setImmediate(A.aA(new A.d1(a),0))},
i4(a){A.ic(0,a)},
ic(a,b){var s=new A.dr()
s.bc(a,b)
return s},
fL(a){return new A.c0(new A.v($.r,a.i("v<0>")),a.i("c0<0>"))},
fD(a,b){a.$2(0,null)
b.b=!0
return b.a},
fA(a,b){A.iL(a,b)},
fC(a,b){b.ae(a)},
fB(a,b){b.af(A.a8(a),A.a6(a))},
iL(a,b){var s,r,q=new A.dD(b),p=new A.dE(b)
if(a instanceof A.v)a.aF(q,p,t.z)
else{s=t.z
if(a instanceof A.v)a.ar(q,p,s)
else{r=new A.v($.r,t.e)
r.a=8
r.c=a
r.aF(q,p,s)}}},
fS(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.r.aZ(new A.dR(s))},
cl(a,b){var s=A.cj(a,"error",t.K)
return new A.bw(s,b==null?A.eK(a):b)},
eK(a){var s
if(t.Q.b(a)){s=a.gS()
if(s!=null)return s}return B.D},
fc(a,b){var s,r
for(;s=a.a,(s&4)!==0;)a=a.c
if(a===b){b.T(new A.G(!0,a,null,"Cannot complete a future with itself"),A.f2())
return}s|=b.a&1
a.a=s
if((s&24)!==0){r=b.ac()
b.U(a)
A.b6(b,r)}else{r=b.c
b.aD(a)
a.ab(r)}},
i5(a,b){var s,r,q={},p=q.a=a
for(;s=p.a,(s&4)!==0;){p=p.c
q.a=p}if(p===b){b.T(new A.G(!0,p,null,"Cannot complete a future with itself"),A.f2())
return}if((s&24)===0){r=b.c
b.aD(p)
q.a.ab(r)
return}if((s&16)===0&&b.c==null){b.U(p)
return}b.a^=2
A.ax(null,null,b.b,new A.d7(q,b))},
b6(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;!0;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.ex(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.b6(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){r=r.b===k
r=!(r||r)}else r=!1
if(r){A.ex(m.a,m.b)
return}j=$.r
if(j!==k)$.r=k
else j=null
f=f.c
if((f&15)===8)new A.de(s,g,p).$0()
else if(q){if((f&1)!==0)new A.dd(s,m).$0()}else if((f&2)!==0)new A.dc(g,s).$0()
if(j!=null)$.r=j
f=s.c
if(f instanceof A.v){r=s.a.$ti
r=r.i("Y<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.V(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.fc(f,i)
return}}i=s.a.b
h=i.c
i.c=null
b=i.V(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
jf(a,b){if(t.C.b(a))return b.aZ(a)
if(t.v.b(a))return a
throw A.a(A.eJ(a,"onError",u.c))},
jc(){var s,r
for(s=$.aw;s!=null;s=$.aw){$.bo=null
r=s.b
$.aw=r
if(r==null)$.bn=null
s.a.$0()}},
jj(){$.ew=!0
try{A.jc()}finally{$.bo=null
$.ew=!1
if($.aw!=null)$.eI().$1(A.fU())}},
fP(a){var s=new A.c1(a),r=$.bn
if(r==null){$.aw=$.bn=s
if(!$.ew)$.eI().$1(A.fU())}else $.bn=r.b=s},
ji(a){var s,r,q,p=$.aw
if(p==null){A.fP(a)
$.bo=$.bn
return}s=new A.c1(a)
r=$.bo
if(r==null){s.b=p
$.aw=$.bo=s}else{q=r.b
s.b=q
$.bo=r.b=s
if(q==null)$.bn=s}},
jQ(a){var s=null,r=$.r
if(B.d===r){A.ax(s,s,B.d,a)
return}A.ax(s,s,r,r.aH(a))},
k0(a){A.cj(a,"stream",t.K)
return new A.ce()},
ex(a,b){A.ji(new A.dP(a,b))},
fM(a,b,c,d){var s,r=$.r
if(r===c)return d.$0()
$.r=c
s=r
try{r=d.$0()
return r}finally{$.r=s}},
jh(a,b,c,d,e){var s,r=$.r
if(r===c)return d.$1(e)
$.r=c
s=r
try{r=d.$1(e)
return r}finally{$.r=s}},
jg(a,b,c,d,e,f){var s,r=$.r
if(r===c)return d.$2(e,f)
$.r=c
s=r
try{r=d.$2(e,f)
return r}finally{$.r=s}},
ax(a,b,c,d){if(B.d!==c)d=c.aH(d)
A.fP(d)},
d_:function d_(a){this.a=a},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.c=c},
d0:function d0(a){this.a=a},
d1:function d1(a){this.a=a},
dr:function dr(){},
ds:function ds(a,b){this.a=a
this.b=b},
c0:function c0(a,b){this.a=a
this.b=!1
this.$ti=b},
dD:function dD(a){this.a=a},
dE:function dE(a){this.a=a},
dR:function dR(a){this.a=a},
bw:function bw(a,b){this.a=a
this.b=b},
c2:function c2(){},
b3:function b3(a,b){this.a=a
this.$ti=b},
au:function au(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
v:function v(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
d4:function d4(a,b){this.a=a
this.b=b},
db:function db(a,b){this.a=a
this.b=b},
d8:function d8(a){this.a=a},
d9:function d9(a){this.a=a},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(a,b){this.a=a
this.b=b},
d6:function d6(a,b){this.a=a
this.b=b},
d5:function d5(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(a,b,c){this.a=a
this.b=b
this.c=c},
df:function df(a){this.a=a},
dd:function dd(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
c1:function c1(a){this.a=a
this.b=null},
ce:function ce(){},
dC:function dC(){},
dP:function dP(a,b){this.a=a
this.b=b},
di:function di(){},
dj:function dj(a,b){this.a=a
this.b=b},
eU(a,b,c){return A.jx(a,new A.ad(b.i("@<0>").B(c).i("ad<1,2>")))},
ee(a,b){return new A.ad(a.i("@<0>").B(b).i("ad<1,2>"))},
ef(a){var s,r={}
if(A.eE(a))return"{...}"
s=new A.z("")
try{$.ak.push(a)
s.a+="{"
r.a=!0
a.F(0,new A.cG(r,s))
s.a+="}"}finally{$.ak.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
e:function e(){},
P:function P(){},
cG:function cG(a,b){this.a=a
this.b=b},
ch:function ch(){},
aS:function aS(){},
at:function at(a,b){this.a=a
this.$ti=b},
aq:function aq(){},
bi:function bi(){},
jd(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.a8(r)
q=A.x(String(s),null,null)
throw A.a(q)}q=A.dF(p)
return q},
dF(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.c7(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.dF(a[s])
return a},
iG(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.hi()
else s=new Uint8Array(o)
for(r=J.ck(a),q=0;q<o;++q){p=r.k(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
iF(a,b,c,d){var s=a?$.hh():$.hg()
if(s==null)return null
if(0===c&&d===b.length)return A.fu(s,b)
return A.fu(s,b.subarray(c,d))},
fu(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
eL(a,b,c,d,e,f){if(B.c.a2(f,4)!==0)throw A.a(A.x("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.a(A.x("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.a(A.x("Invalid base64 padding, more than two '=' characters",a,b))},
iH(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
c7:function c7(a,b){this.a=a
this.b=b
this.c=null},
c8:function c8(a){this.a=a},
dz:function dz(){},
dy:function dy(){},
cm:function cm(){},
cn:function cn(){},
bz:function bz(){},
bB:function bB(){},
cr:function cr(){},
cv:function cv(){},
cu:function cu(){},
cD:function cD(){},
cE:function cE(a){this.a=a},
cV:function cV(){},
cX:function cX(){},
dA:function dA(a){this.b=0
this.c=a},
cW:function cW(a){this.a=a},
dx:function dx(a){this.a=a
this.b=16
this.c=0},
e1(a,b){var s=A.eY(a,b)
if(s!=null)return s
throw A.a(A.x(a,null,null))},
hz(a,b){a=A.a(a)
a.stack=b.h(0)
throw a
throw A.a("unreachable")},
eV(a,b,c,d){var s,r=c?J.hJ(a,d):J.hI(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
hN(a,b,c){var s,r,q=A.h([],c.i("o<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.e7)(a),++r)q.push(a[r])
q.$flags=1
return q},
eW(a,b,c){var s=A.hM(a,c)
return s},
hM(a,b){var s,r
if(Array.isArray(a))return A.h(a.slice(0),b.i("o<0>"))
s=A.h([],b.i("o<0>"))
for(r=J.a9(a);r.m();)s.push(r.gn())
return s},
f5(a,b,c){var s,r
A.eg(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.a(A.H(c,b,null,"end",null))
if(s===0)return""}r=A.hX(a,b,c)
return r},
hX(a,b,c){var s=a.length
if(b>=s)return""
return A.hU(a,b,c==null||c>s?s:c)},
f_(a,b){return new A.cA(a,A.eT(a,!1,b,!1,!1,!1))},
f4(a,b,c){var s=J.a9(b)
if(!s.m())return a
if(c.length===0){do a+=A.i(s.gn())
while(s.m())}else{a+=A.i(s.gn())
for(;s.m();)a=a+c+A.i(s.gn())}return a},
ft(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.e){s=$.he()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.C.H(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(a[o>>>4]&1<<(o&15))!==0)p+=A.Q(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
ix(a){var s,r,q
if(!$.hf())return A.iy(a)
s=new URLSearchParams()
a.F(0,new A.dw(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.a.j(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
f2(){return A.a6(new Error())},
cs(a){if(typeof a=="number"||A.ev(a)||a==null)return J.al(a)
if(typeof a=="string")return JSON.stringify(a)
return A.eZ(a)},
hA(a,b){A.cj(a,"error",t.K)
A.cj(b,"stackTrace",t.l)
A.hz(a,b)},
bv(a){return new A.bu(a)},
M(a,b){return new A.G(!1,null,b,a)},
eJ(a,b,c){return new A.G(!0,a,b,c)},
hV(a,b){return new A.aZ(null,null,!0,a,b,"Value not in range")},
H(a,b,c,d,e){return new A.aZ(b,c,!0,a,d,"Invalid value")},
b_(a,b,c){if(0>a||a>c)throw A.a(A.H(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.a(A.H(b,a,c,"end",null))
return b}return c},
eg(a,b){if(a<0)throw A.a(A.H(a,0,null,b,null))
return a},
ea(a,b,c,d){return new A.bC(b,!0,a,d,"Index out of range")},
bY(a){return new A.b2(a)},
f7(a){return new A.bV(a)},
f3(a){return new A.b1(a)},
aD(a){return new A.bA(a)},
x(a,b,c){return new A.ct(a,b,c)},
hH(a,b,c){var s,r
if(A.eE(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.h([],t.s)
$.ak.push(a)
try{A.ja(a,s)}finally{$.ak.pop()}r=A.f4(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
eb(a,b,c){var s,r
if(A.eE(a))return b+"..."+c
s=new A.z(b)
$.ak.push(a)
try{r=s
r.a=A.f4(r.a,a,", ")}finally{$.ak.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
ja(a,b){var s,r,q,p,o,n,m,l=a.gA(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.m())return
s=A.i(l.gn())
b.push(s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){b.push(A.i(p))
return}r=A.i(p)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.i(p)
r=A.i(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
hR(a,b,c,d){var s
if(B.i===c){s=B.c.gp(a)
b=J.X(b)
return A.ej(A.a1(A.a1($.e8(),s),b))}if(B.i===d){s=B.c.gp(a)
b=J.X(b)
c=J.X(c)
return A.ej(A.a1(A.a1(A.a1($.e8(),s),b),c))}s=B.c.gp(a)
b=J.X(b)
c=J.X(c)
d=J.X(d)
d=A.ej(A.a1(A.a1(A.a1(A.a1($.e8(),s),b),c),d))
return d},
c_(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=null,a4=a5.length
if(a4>=5){s=((a5.charCodeAt(4)^58)*3|a5.charCodeAt(0)^100|a5.charCodeAt(1)^97|a5.charCodeAt(2)^116|a5.charCodeAt(3)^97)>>>0
if(s===0)return A.f8(a4<a4?B.a.j(a5,0,a4):a5,5,a3).gb0()
else if(s===32)return A.f8(B.a.j(a5,5,a4),0,a3).gb0()}r=A.eV(8,0,!1,t.S)
r[0]=0
r[1]=-1
r[2]=-1
r[7]=-1
r[3]=0
r[4]=0
r[5]=a4
r[6]=a4
if(A.fO(a5,0,a4,0,r)>=14)r[7]=a4
q=r[1]
if(q>=0)if(A.fO(a5,0,q,20,r)===20)r[7]=q
p=r[2]+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(l<m)m=l
if(n<p)n=m
else if(n<=q)n=q+1
if(o<p)o=n
k=r[7]<0
j=a3
if(k){k=!1
if(!(p>q+3)){i=o>0
if(!(i&&o+1===n)){if(!B.a.v(a5,"\\",n))if(p>0)h=B.a.v(a5,"\\",p-1)||B.a.v(a5,"\\",p-2)
else h=!1
else h=!0
if(!h){if(!(m<a4&&m===n+2&&B.a.v(a5,"..",n)))h=m>n+2&&B.a.v(a5,"/..",m-3)
else h=!0
if(!h)if(q===4){if(B.a.v(a5,"file",0)){if(p<=0){if(!B.a.v(a5,"/",n)){g="file:///"
s=3}else{g="file://"
s=2}a5=g+B.a.j(a5,n,a4)
m+=s
l+=s
a4=a5.length
p=7
o=7
n=7}else if(n===m){++l
f=m+1
a5=B.a.I(a5,n,m,"/");++a4
m=f}j="file"}else if(B.a.v(a5,"http",0)){if(i&&o+3===n&&B.a.v(a5,"80",o+1)){l-=3
e=n-3
m-=3
a5=B.a.I(a5,o,n,"")
a4-=3
n=e}j="http"}}else if(q===5&&B.a.v(a5,"https",0)){if(i&&o+4===n&&B.a.v(a5,"443",o+1)){l-=4
e=n-4
m-=4
a5=B.a.I(a5,o,n,"")
a4-=3
n=e}j="https"}k=!h}}}}if(k)return new A.cd(a4<a5.length?B.a.j(a5,0,a4):a5,q,p,o,n,m,l,j)
if(j==null)if(q>0)j=A.iz(a5,0,q)
else{if(q===0)A.av(a5,0,"Invalid empty scheme")
j=""}d=a3
if(p>0){c=q+3
b=c<p?A.iA(a5,c,p-1):""
a=A.iu(a5,p,o,!1)
i=o+1
if(i<n){a0=A.eY(B.a.j(a5,i,n),a3)
d=A.iw(a0==null?A.h1(A.x("Invalid port",a5,i)):a0,j)}}else{a=a3
b=""}a1=A.iv(a5,n,m,a3,j,a!=null)
a2=m<l?A.eq(a5,m+1,l,a3):a3
return A.eo(j,b,a,d,a1,a2,l<a4?A.it(a5,l+1,a4):a3)},
fa(a){var s=t.N
return B.b.bD(A.h(a.split("&"),t.s),A.ee(s,s),new A.cU(B.e))},
i0(a,b,c){var s,r,q,p,o,n,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new A.cR(a),j=new Uint8Array(4)
for(s=b,r=s,q=0;s<c;++s){p=a.charCodeAt(s)
if(p!==46){if((p^48)>9)k.$2("invalid character",s)}else{if(q===3)k.$2(m,s)
o=A.e1(B.a.j(a,r,s),null)
if(o>255)k.$2(l,r)
n=q+1
j[q]=o
r=s+1
q=n}}if(q!==3)k.$2(m,c)
o=A.e1(B.a.j(a,r,c),null)
if(o>255)k.$2(l,r)
j[q]=o
return j},
f9(a,b,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=new A.cS(a),c=new A.cT(d,a)
if(a.length<2)d.$2("address is too short",e)
s=A.h([],t.t)
for(r=b,q=r,p=!1,o=!1;r<a0;++r){n=a.charCodeAt(r)
if(n===58){if(r===b){++r
if(a.charCodeAt(r)!==58)d.$2("invalid start colon.",r)
q=r}if(r===q){if(p)d.$2("only one wildcard `::` is allowed",r)
s.push(-1)
p=!0}else s.push(c.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)d.$2("too few parts",e)
m=q===a0
l=B.b.ga0(s)
if(m&&l!==-1)d.$2("expected a part after last `:`",a0)
if(!m)if(!o)s.push(c.$2(q,a0))
else{k=A.i0(a,q,a0)
s.push((k[0]<<8|k[1])>>>0)
s.push((k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)d.$2("an address with a wildcard must have less than 7 parts",e)}else if(s.length!==8)d.$2("an address without a wildcard must contain exactly 8 parts",e)
j=new Uint8Array(16)
for(l=s.length,i=9-l,r=0,h=0;r<l;++r){g=s[r]
if(g===-1)for(f=0;f<i;++f){j[h]=0
j[h+1]=0
h+=2}else{j[h]=B.c.W(g,8)
j[h+1]=g&255
h+=2}}return j},
eo(a,b,c,d,e,f,g){return new A.bj(a,b,c,d,e,f,g)},
fn(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
av(a,b,c){throw A.a(A.x(c,a,b))},
iw(a,b){if(a!=null&&a===A.fn(b))return null
return a},
iu(a,b,c,d){var s,r,q,p,o,n
if(b===c)return""
if(a.charCodeAt(b)===91){s=c-1
if(a.charCodeAt(s)!==93)A.av(a,b,"Missing end `]` to match `[` in host")
r=b+1
q=A.ir(a,r,s)
if(q<s){p=q+1
o=A.fs(a,B.a.v(a,"25",p)?q+3:p,s,"%25")}else o=""
A.f9(a,r,q)
return B.a.j(a,b,q).toLowerCase()+o+"]"}for(n=b;n<c;++n)if(a.charCodeAt(n)===58){q=B.a.a_(a,"%",b)
q=q>=b&&q<c?q:c
if(q<c){p=q+1
o=A.fs(a,B.a.v(a,"25",p)?q+3:p,c,"%25")}else o=""
A.f9(a,b,q)
return"["+B.a.j(a,b,q)+o+"]"}return A.iC(a,b,c)},
ir(a,b,c){var s=B.a.a_(a,"%",b)
return s>=b&&s<c?s:c},
fs(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=d!==""?new A.z(d):null
for(s=b,r=s,q=!0;s<c;){p=a.charCodeAt(s)
if(p===37){o=A.er(a,s,!0)
n=o==null
if(n&&q){s+=3
continue}if(i==null)i=new A.z("")
m=i.a+=B.a.j(a,r,s)
if(n)o=B.a.j(a,s,s+3)
else if(o==="%")A.av(a,s,"ZoneID should not contain % anymore")
i.a=m+o
s+=3
r=s
q=!0}else if(p<127&&(B.h[p>>>4]&1<<(p&15))!==0){if(q&&65<=p&&90>=p){if(i==null)i=new A.z("")
if(r<s){i.a+=B.a.j(a,r,s)
r=s}q=!1}++s}else{l=1
if((p&64512)===55296&&s+1<c){k=a.charCodeAt(s+1)
if((k&64512)===56320){p=(p&1023)<<10|k&1023|65536
l=2}}j=B.a.j(a,r,s)
if(i==null){i=new A.z("")
n=i}else n=i
n.a+=j
m=A.ep(p)
n.a+=m
s+=l
r=s}}if(i==null)return B.a.j(a,b,c)
if(r<c){j=B.a.j(a,r,c)
i.a+=j}n=i.a
return n.charCodeAt(0)==0?n:n},
iC(a,b,c){var s,r,q,p,o,n,m,l,k,j,i
for(s=b,r=s,q=null,p=!0;s<c;){o=a.charCodeAt(s)
if(o===37){n=A.er(a,s,!0)
m=n==null
if(m&&p){s+=3
continue}if(q==null)q=new A.z("")
l=B.a.j(a,r,s)
if(!p)l=l.toLowerCase()
k=q.a+=l
j=3
if(m)n=B.a.j(a,s,s+3)
else if(n==="%"){n="%25"
j=1}q.a=k+n
s+=j
r=s
p=!0}else if(o<127&&(B.a5[o>>>4]&1<<(o&15))!==0){if(p&&65<=o&&90>=o){if(q==null)q=new A.z("")
if(r<s){q.a+=B.a.j(a,r,s)
r=s}p=!1}++s}else if(o<=93&&(B.q[o>>>4]&1<<(o&15))!==0)A.av(a,s,"Invalid character")
else{j=1
if((o&64512)===55296&&s+1<c){i=a.charCodeAt(s+1)
if((i&64512)===56320){o=(o&1023)<<10|i&1023|65536
j=2}}l=B.a.j(a,r,s)
if(!p)l=l.toLowerCase()
if(q==null){q=new A.z("")
m=q}else m=q
m.a+=l
k=A.ep(o)
m.a+=k
s+=j
r=s}}if(q==null)return B.a.j(a,b,c)
if(r<c){l=B.a.j(a,r,c)
if(!p)l=l.toLowerCase()
q.a+=l}m=q.a
return m.charCodeAt(0)==0?m:m},
iz(a,b,c){var s,r,q
if(b===c)return""
if(!A.fp(a.charCodeAt(b)))A.av(a,b,"Scheme not starting with alphabetic character")
for(s=b,r=!1;s<c;++s){q=a.charCodeAt(s)
if(!(q<128&&(B.n[q>>>4]&1<<(q&15))!==0))A.av(a,s,"Illegal scheme character")
if(65<=q&&q<=90)r=!0}a=B.a.j(a,b,c)
return A.iq(r?a.toLowerCase():a)},
iq(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
iA(a,b,c){return A.bk(a,b,c,B.a4,!1,!1)},
iv(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.bk(a,b,c,B.o,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.a.u(s,"/"))s="/"+s
return A.iB(s,e,f)},
iB(a,b,c){var s=b.length===0
if(s&&!c&&!B.a.u(a,"/")&&!B.a.u(a,"\\"))return A.iD(a,!s||c)
return A.iE(a)},
eq(a,b,c,d){if(a!=null){if(d!=null)throw A.a(A.M("Both query and queryParameters specified",null))
return A.bk(a,b,c,B.f,!0,!1)}if(d==null)return null
return A.ix(d)},
iy(a){var s={},r=new A.z("")
s.a=""
a.F(0,new A.du(new A.dv(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
it(a,b,c){return A.bk(a,b,c,B.f,!0,!1)},
er(a,b,c){var s,r,q,p,o,n=b+2
if(n>=a.length)return"%"
s=a.charCodeAt(b+1)
r=a.charCodeAt(n)
q=A.dU(s)
p=A.dU(r)
if(q<0||p<0)return"%"
o=q*16+p
if(o<127&&(B.h[B.c.W(o,4)]&1<<(o&15))!==0)return A.Q(c&&65<=o&&90>=o?(o|32)>>>0:o)
if(s>=97||r>=97)return B.a.j(a,b,b+3).toUpperCase()
return null},
ep(a){var s,r,q,p,o,n="0123456789ABCDEF"
if(a<128){s=new Uint8Array(3)
s[0]=37
s[1]=n.charCodeAt(a>>>4)
s[2]=n.charCodeAt(a&15)}else{if(a>2047)if(a>65535){r=240
q=4}else{r=224
q=3}else{r=192
q=2}s=new Uint8Array(3*q)
for(p=0;--q,q>=0;r=128){o=B.c.br(a,6*q)&63|r
s[p]=37
s[p+1]=n.charCodeAt(o>>>4)
s[p+2]=n.charCodeAt(o&15)
p+=3}}return A.f5(s,0,null)},
bk(a,b,c,d,e,f){var s=A.fr(a,b,c,d,e,f)
return s==null?B.a.j(a,b,c):s},
fr(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null
for(s=!e,r=b,q=r,p=i;r<c;){o=a.charCodeAt(r)
if(o<127&&(d[o>>>4]&1<<(o&15))!==0)++r
else{n=1
if(o===37){m=A.er(a,r,!1)
if(m==null){r+=3
continue}if("%"===m)m="%25"
else n=3}else if(o===92&&f)m="/"
else if(s&&o<=93&&(B.q[o>>>4]&1<<(o&15))!==0){A.av(a,r,"Invalid character")
n=i
m=n}else{if((o&64512)===55296){l=r+1
if(l<c){k=a.charCodeAt(l)
if((k&64512)===56320){o=(o&1023)<<10|k&1023|65536
n=2}}}m=A.ep(o)}if(p==null){p=new A.z("")
l=p}else l=p
j=l.a+=B.a.j(a,q,r)
l.a=j+A.i(m)
r+=n
q=r}}if(p==null)return i
if(q<c){s=B.a.j(a,q,c)
p.a+=s}s=p.a
return s.charCodeAt(0)==0?s:s},
fq(a){if(B.a.u(a,"."))return!0
return B.a.aS(a,"/.")!==-1},
iE(a){var s,r,q,p,o,n
if(!A.fq(a))return a
s=A.h([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(J.F(n,"..")){if(s.length!==0){s.pop()
if(s.length===0)s.push("")}p=!0}else{p="."===n
if(!p)s.push(n)}}if(p)s.push("")
return B.b.aW(s,"/")},
iD(a,b){var s,r,q,p,o,n
if(!A.fq(a))return!b?A.fo(a):a
s=A.h([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){p=s.length!==0&&B.b.ga0(s)!==".."
if(p)s.pop()
else s.push("..")}else{p="."===n
if(!p)s.push(n)}}r=s.length
if(r!==0)r=r===1&&s[0].length===0
else r=!0
if(r)return"./"
if(p||B.b.ga0(s)==="..")s.push("")
if(!b)s[0]=A.fo(s[0])
return B.b.aW(s,"/")},
fo(a){var s,r,q=a.length
if(q>=2&&A.fp(a.charCodeAt(0)))for(s=1;s<q;++s){r=a.charCodeAt(s)
if(r===58)return B.a.j(a,0,s)+"%3A"+B.a.J(a,s+1)
if(r>127||(B.n[r>>>4]&1<<(r&15))===0)break}return a},
is(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=a.charCodeAt(b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.a(A.M("Invalid URL encoding",null))}}return s},
es(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=a.charCodeAt(o)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++o}if(s)if(B.e===d)return B.a.j(a,b,c)
else p=new A.by(B.a.j(a,b,c))
else{p=A.h([],t.t)
for(q=a.length,o=b;o<c;++o){r=a.charCodeAt(o)
if(r>127)throw A.a(A.M("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.a(A.M("Truncated URI",null))
p.push(A.is(a,o+1))
o+=2}else if(r===43)p.push(32)
else p.push(r)}}return B.an.H(p)},
fp(a){var s=a|32
return 97<=s&&s<=122},
f8(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.h([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.a(A.x(k,a,r))}}if(q<0&&r>b)throw A.a(A.x(k,a,r))
for(;p!==44;){j.push(r);++r
for(o=-1;r<s;++r){p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)j.push(o)
else{n=B.b.ga0(j)
if(p!==44||r!==n+7||!B.a.v(a,"base64",n+1))throw A.a(A.x("Expecting '='",a,r))
break}}j.push(r)
m=r+1
if((j.length&1)===1)a=B.t.bJ(a,m,s)
else{l=A.fr(a,m,s,B.f,!0,!1)
if(l!=null)a=B.a.I(a,m,s,l)}return new A.cQ(a,j,c)},
iP(){var s,r,q,p,o,n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",m=".",l=":",k="/",j="\\",i="?",h="#",g="/\\",f=J.eS(22,t.D)
for(s=0;s<22;++s)f[s]=new Uint8Array(96)
r=new A.dI(f)
q=new A.dJ()
p=new A.dK()
o=r.$2(0,225)
q.$3(o,n,1)
q.$3(o,m,14)
q.$3(o,l,34)
q.$3(o,k,3)
q.$3(o,j,227)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(14,225)
q.$3(o,n,1)
q.$3(o,m,15)
q.$3(o,l,34)
q.$3(o,g,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(15,225)
q.$3(o,n,1)
q.$3(o,"%",225)
q.$3(o,l,34)
q.$3(o,k,9)
q.$3(o,j,233)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(1,225)
q.$3(o,n,1)
q.$3(o,l,34)
q.$3(o,k,10)
q.$3(o,j,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(2,235)
q.$3(o,n,139)
q.$3(o,k,131)
q.$3(o,j,131)
q.$3(o,m,146)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(3,235)
q.$3(o,n,11)
q.$3(o,k,68)
q.$3(o,j,68)
q.$3(o,m,18)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(4,229)
q.$3(o,n,5)
p.$3(o,"AZ",229)
q.$3(o,l,102)
q.$3(o,"@",68)
q.$3(o,"[",232)
q.$3(o,k,138)
q.$3(o,j,138)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(5,229)
q.$3(o,n,5)
p.$3(o,"AZ",229)
q.$3(o,l,102)
q.$3(o,"@",68)
q.$3(o,k,138)
q.$3(o,j,138)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(6,231)
p.$3(o,"19",7)
q.$3(o,"@",68)
q.$3(o,k,138)
q.$3(o,j,138)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(7,231)
p.$3(o,"09",7)
q.$3(o,"@",68)
q.$3(o,k,138)
q.$3(o,j,138)
q.$3(o,i,172)
q.$3(o,h,205)
q.$3(r.$2(8,8),"]",5)
o=r.$2(9,235)
q.$3(o,n,11)
q.$3(o,m,16)
q.$3(o,g,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(16,235)
q.$3(o,n,11)
q.$3(o,m,17)
q.$3(o,g,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(17,235)
q.$3(o,n,11)
q.$3(o,k,9)
q.$3(o,j,233)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(10,235)
q.$3(o,n,11)
q.$3(o,m,18)
q.$3(o,k,10)
q.$3(o,j,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(18,235)
q.$3(o,n,11)
q.$3(o,m,19)
q.$3(o,g,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(19,235)
q.$3(o,n,11)
q.$3(o,g,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(11,235)
q.$3(o,n,11)
q.$3(o,k,10)
q.$3(o,j,234)
q.$3(o,i,172)
q.$3(o,h,205)
o=r.$2(12,236)
q.$3(o,n,12)
q.$3(o,i,12)
q.$3(o,h,205)
o=r.$2(13,237)
q.$3(o,n,13)
q.$3(o,i,13)
p.$3(r.$2(20,245),"az",21)
o=r.$2(21,245)
p.$3(o,"az",21)
p.$3(o,"09",21)
q.$3(o,"+-.",21)
return f},
fO(a,b,c,d,e){var s,r,q,p,o=$.hj()
for(s=b;s<c;++s){r=o[d]
q=a.charCodeAt(s)^96
p=r[q>95?31:q]
d=p&31
e[p>>>5]=s}return d},
dw:function dw(a){this.a=a},
d2:function d2(){},
l:function l(){},
bu:function bu(a){this.a=a},
R:function R(){},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aZ:function aZ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bC:function bC(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
b2:function b2(a){this.a=a},
bV:function bV(a){this.a=a},
b1:function b1(a){this.a=a},
bA:function bA(a){this.a=a},
bR:function bR(){},
b0:function b0(){},
d3:function d3(a){this.a=a},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
u:function u(){},
k:function k(){},
cf:function cf(){},
z:function z(a){this.a=a},
cU:function cU(a){this.a=a},
cR:function cR(a){this.a=a},
cS:function cS(a){this.a=a},
cT:function cT(a,b){this.a=a
this.b=b},
bj:function bj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
dv:function dv(a,b){this.a=a
this.b=b},
du:function du(a){this.a=a},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(a){this.a=a},
dJ:function dJ(){},
dK:function dK(){},
cd:function cd(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
c4:function c4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
a4(a){var s
if(typeof a=="function")throw A.a(A.M("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.iM,a)
s[$.eH()]=a
return s},
iM(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
e4(a,b){var s=new A.v($.r,b.i("v<0>")),r=new A.b3(s,b.i("b3<0>"))
a.then(A.aA(new A.e5(r),1),A.aA(new A.e6(r),1))
return s},
e5:function e5(a){this.a=a},
e6:function e6(a){this.a=a},
cI:function cI(a){this.a=a},
m:function m(a,b){this.a=a
this.b=b},
hD(a){var s,r,q,p,o,n,m,l,k="enclosedBy"
if(a.k(0,k)!=null){s=t.a.a(a.k(0,k))
r=new A.cq(A.fz(s.k(0,"name")),B.p[A.fx(s.k(0,"kind"))],A.fz(s.k(0,"href")))}else r=null
q=a.k(0,"name")
p=a.k(0,"qualifiedName")
o=A.fy(a.k(0,"packageRank"))
if(o==null)o=0
n=a.k(0,"href")
m=B.p[A.fx(a.k(0,"kind"))]
l=A.fy(a.k(0,"overriddenDepth"))
if(l==null)l=0
return new A.w(q,p,o,m,n,l,a.k(0,"desc"),r)},
A:function A(a,b){this.a=a
this.b=b},
cw:function cw(a){this.a=a},
cz:function cz(a,b){this.a=a
this.b=b},
cx:function cx(){},
cy:function cy(){},
w:function w(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
jC(){var s=self,r=s.document.getElementById("search-box"),q=s.document.getElementById("search-body"),p=s.document.getElementById("search-sidebar")
A.e4(s.window.fetch($.bs()+"index.json"),t.m).aq(new A.dZ(new A.e_(r,q,p),r,q,p),t.P)},
ek(a){var s=A.h([],t.O),r=A.h([],t.M)
return new A.dk(a,A.c_(self.window.location.href),s,r)},
iO(a,b){var s,r,q,p,o,n,m,l=self,k=l.document.createElement("div"),j=b.e
if(j==null)j=""
k.setAttribute("data-href",j)
k.classList.add("tt-suggestion")
s=l.document.createElement("span")
s.classList.add("tt-suggestion-title")
s.innerHTML=A.et(b.a+" "+b.d.h(0).toLowerCase(),a)
k.appendChild(s)
r=b.w
j=r!=null
if(j){s=l.document.createElement("span")
s.classList.add("tt-suggestion-container")
s.innerHTML="(in "+A.et(r.a,a)+")"
k.appendChild(s)}q=b.r
if(q!=null&&q.length!==0){s=l.document.createElement("blockquote")
s.classList.add("one-line-description")
p=l.document.createElement("textarea")
p.innerHTML=q
s.setAttribute("title",p.value)
s.innerHTML=A.et(q,a)
k.appendChild(s)}k.addEventListener("mousedown",A.a4(new A.dG()))
k.addEventListener("click",A.a4(new A.dH(b)))
if(j){j=r.a
o=r.b.h(0)
n=r.c
s=l.document.createElement("div")
s.classList.add("tt-container")
p=l.document.createElement("p")
p.textContent="Results from "
p.classList.add("tt-container-text")
m=l.document.createElement("a")
m.setAttribute("href",n)
m.innerHTML=j+" "+o
p.appendChild(m)
s.appendChild(p)
A.jb(s,k)}return k},
jb(a,b){var s,r=a.innerHTML
if(r.length===0)return
s=$.bm.k(0,r)
if(s!=null)s.appendChild(b)
else{a.appendChild(b)
$.bm.q(0,r,a)}},
et(a,b){return A.jT(a,A.f_(b,!1),new A.dL(),null)},
dM:function dM(){},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dk:function dk(a,b,c,d){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=$
_.f=null
_.r=""
_.w=c
_.x=d
_.y=-1},
dl:function dl(a){this.a=a},
dm:function dm(a,b){this.a=a
this.b=b},
dn:function dn(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
dG:function dG(){},
dH:function dH(a){this.a=a},
dL:function dL(){},
iW(){var s=self,r=s.document.getElementById("sidenav-left-toggle"),q=s.document.querySelector(".sidebar-offcanvas-left"),p=s.document.getElementById("overlay-under-drawer"),o=A.a4(new A.dN(q,p))
if(p!=null)p.addEventListener("click",o)
if(r!=null)r.addEventListener("click",o)},
iV(){var s,r,q,p,o=self,n=o.document.body
if(n==null)return
s=n.getAttribute("data-using-base-href")
if(s==null)return
if(s!=="true"){r=n.getAttribute("data-base-href")
if(r==null)return
q=r}else q=""
p=o.document.getElementById("dartdoc-main-content")
if(p==null)return
A.fK(q,p.getAttribute("data-above-sidebar"),o.document.getElementById("dartdoc-sidebar-left-content"))
A.fK(q,p.getAttribute("data-below-sidebar"),o.document.getElementById("dartdoc-sidebar-right"))},
fK(a,b,c){if(b==null||b.length===0||c==null)return
A.e4(self.window.fetch(a+A.i(b)),t.m).aq(new A.dO(c,a),t.P)},
fR(a,b){var s,r,q,p
if(b.nodeName.toLowerCase()==="a"){s=b.getAttribute("href")
if(s!=null)if(!A.c_(s).gaV())b.href=a+s}r=b.childNodes
for(q=0;q<r.length;++q){p=r.item(q)
if(p!=null)A.fR(a,p)}},
dN:function dN(a,b){this.a=a
this.b=b},
dO:function dO(a,b){this.a=a
this.b=b},
jD(){var s,r,q,p=self,o=p.document.body
if(o==null)return
s=p.document.getElementById("theme")
if(s==null)s=t.m.a(s)
r=new A.e0(s,o)
s.addEventListener("change",A.a4(new A.dY(r)))
q=p.window.localStorage.getItem("colorTheme")
if(q!=null){s.checked=q==="true"
r.$0()}},
e0:function e0(a,b){this.a=a
this.b=b},
dY:function dY(a){this.a=a},
jO(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
jU(a){A.eG(new A.aR("Field '"+a+"' has been assigned during initialization."),new Error())},
br(){A.eG(new A.aR("Field '' has been assigned during initialization."),new Error())},
jL(){A.iV()
A.iW()
A.jC()
var s=self.hljs
if(s!=null)s.highlightAll()
A.jD()}},B={}
var w=[A,J,B]
var $={}
A.ec.prototype={}
J.bD.prototype={
E(a,b){return a===b},
gp(a){return A.bT(a)},
h(a){return"Instance of '"+A.cK(a)+"'"},
gt(a){return A.ai(A.eu(this))}}
J.bE.prototype={
h(a){return String(a)},
gp(a){return a?519018:218159},
gt(a){return A.ai(t.y)},
$ij:1}
J.aM.prototype={
E(a,b){return null==b},
h(a){return"null"},
gp(a){return 0},
$ij:1,
$iu:1}
J.aP.prototype={$ip:1}
J.a_.prototype={
gp(a){return 0},
h(a){return String(a)}}
J.bS.prototype={}
J.ar.prototype={}
J.Z.prototype={
h(a){var s=a[$.eH()]
if(s==null)return this.bb(a)
return"JavaScript function for "+J.al(s)}}
J.aO.prototype={
gp(a){return 0},
h(a){return String(a)}}
J.aQ.prototype={
gp(a){return 0},
h(a){return String(a)}}
J.o.prototype={
Y(a,b){return new A.N(a,A.ah(a).i("@<1>").B(b).i("N<1,2>"))},
Z(a){a.$flags&1&&A.K(a,"clear")
a.length=0},
aW(a,b){var s,r=A.eV(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.i(a[s])
return r.join(b)},
bC(a,b,c){var s,r,q=a.length
for(s=b,r=0;r<q;++r){s=c.$2(s,a[r])
if(a.length!==q)throw A.a(A.aD(a))}return s},
bD(a,b,c){return this.bC(a,b,c,t.z)},
C(a,b){return a[b]},
ba(a,b,c){var s=a.length
if(b>s)throw A.a(A.H(b,0,s,"start",null))
if(c<b||c>s)throw A.a(A.H(c,b,s,"end",null))
if(b===c)return A.h([],A.ah(a))
return A.h(a.slice(b,c),A.ah(a))},
gbB(a){if(a.length>0)return a[0]
throw A.a(A.eR())},
ga0(a){var s=a.length
if(s>0)return a[s-1]
throw A.a(A.eR())},
b9(a,b){var s,r,q,p,o
a.$flags&2&&A.K(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.j_()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.ah(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.aA(b,2))
if(p>0)this.bp(a,p)},
bp(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
h(a){return A.eb(a,"[","]")},
gA(a){return new J.am(a,a.length,A.ah(a).i("am<1>"))},
gp(a){return A.bT(a)},
gl(a){return a.length},
k(a,b){if(!(b>=0&&b<a.length))throw A.a(A.eB(a,b))
return a[b]},
q(a,b,c){a.$flags&2&&A.K(a)
if(!(b>=0&&b<a.length))throw A.a(A.eB(a,b))
a[b]=c},
$ic:1,
$if:1}
J.cB.prototype={}
J.am.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.a(A.e7(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.aN.prototype={
aJ(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gal(b)
if(this.gal(a)===s)return 0
if(this.gal(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gal(a){return a===0?1/a<0:a<0},
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gp(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
a2(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
bs(a,b){return(a|0)===a?a/b|0:this.bt(a,b)},
bt(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.a(A.bY("Result of truncating division is "+A.i(s)+": "+A.i(a)+" ~/ "+b))},
W(a,b){var s
if(a>0)s=this.aE(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
br(a,b){if(0>b)throw A.a(A.jo(b))
return this.aE(a,b)},
aE(a,b){return b>31?0:a>>>b},
gt(a){return A.ai(t.H)},
$it:1}
J.aL.prototype={
gt(a){return A.ai(t.S)},
$ij:1,
$ib:1}
J.bF.prototype={
gt(a){return A.ai(t.i)},
$ij:1}
J.ac.prototype={
b3(a,b){return a+b},
I(a,b,c,d){var s=A.b_(b,c,a.length)
return a.substring(0,b)+d+a.substring(s)},
v(a,b,c){var s
if(c<0||c>a.length)throw A.a(A.H(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
u(a,b){return this.v(a,b,0)},
j(a,b,c){return a.substring(b,A.b_(b,c,a.length))},
J(a,b){return this.j(a,b,null)},
b6(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.a(B.B)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
a_(a,b,c){var s
if(c<0||c>a.length)throw A.a(A.H(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
aS(a,b){return this.a_(a,b,0)},
N(a,b){return A.jS(a,b,0)},
aJ(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
h(a){return a},
gp(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gt(a){return A.ai(t.N)},
gl(a){return a.length},
$ij:1,
$id:1}
A.a2.prototype={
gA(a){return new A.bx(J.a9(this.gM()),A.E(this).i("bx<1,2>"))},
gl(a){return J.bt(this.gM())},
C(a,b){return A.E(this).y[1].a(J.e9(this.gM(),b))},
h(a){return J.al(this.gM())}}
A.bx.prototype={
m(){return this.a.m()},
gn(){return this.$ti.y[1].a(this.a.gn())}}
A.aa.prototype={
gM(){return this.a}}
A.b5.prototype={$ic:1}
A.b4.prototype={
k(a,b){return this.$ti.y[1].a(J.hk(this.a,b))},
q(a,b,c){J.hl(this.a,b,this.$ti.c.a(c))},
$ic:1,
$if:1}
A.N.prototype={
Y(a,b){return new A.N(this.a,this.$ti.i("@<1>").B(b).i("N<1,2>"))},
gM(){return this.a}}
A.aR.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.by.prototype={
gl(a){return this.a.length},
k(a,b){return this.a.charCodeAt(b)}}
A.cL.prototype={}
A.c.prototype={}
A.J.prototype={
gA(a){var s=this
return new A.an(s,s.gl(s),A.E(s).i("an<J.E>"))}}
A.an.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.ck(q),o=p.gl(q)
if(r.b!==o)throw A.a(A.aD(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.C(q,s);++r.c
return!0}}
A.ae.prototype={
gA(a){return new A.ao(J.a9(this.a),this.b,A.E(this).i("ao<1,2>"))},
gl(a){return J.bt(this.a)},
C(a,b){return this.b.$1(J.e9(this.a,b))}}
A.aI.prototype={$ic:1}
A.ao.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gn())
return!0}s.a=null
return!1},
gn(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.af.prototype={
gl(a){return J.bt(this.a)},
C(a,b){return this.b.$1(J.e9(this.a,b))}}
A.aK.prototype={}
A.bX.prototype={
q(a,b,c){throw A.a(A.bY("Cannot modify an unmodifiable list"))}}
A.as.prototype={}
A.bl.prototype={}
A.cc.prototype={$r:"+item,matchPosition(1,2)",$s:1}
A.aE.prototype={
h(a){return A.ef(this)},
q(a,b,c){A.hy()},
$iy:1}
A.aG.prototype={
gl(a){return this.b.length},
gbm(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
O(a){if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
k(a,b){if(!this.O(b))return null
return this.b[this.a[b]]},
F(a,b){var s,r,q=this.gbm(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])}}
A.c9.prototype={
gn(){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.aF.prototype={}
A.aH.prototype={
gl(a){return this.b},
gA(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.c9(s,s.length,r.$ti.i("c9<1>"))},
N(a,b){if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.cO.prototype={
D(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.aY.prototype={
h(a){return"Null check operator used on a null value"}}
A.bG.prototype={
h(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.bW.prototype={
h(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.cJ.prototype={
h(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.aJ.prototype={}
A.bc.prototype={
h(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ia0:1}
A.ab.prototype={
h(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.h2(r==null?"unknown":r)+"'"},
gbS(){return this},
$C:"$1",
$R:1,
$D:null}
A.co.prototype={$C:"$0",$R:0}
A.cp.prototype={$C:"$2",$R:2}
A.cN.prototype={}
A.cM.prototype={
h(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.h2(s)+"'"}}
A.aC.prototype={
E(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aC))return!1
return this.$_target===b.$_target&&this.a===b.a},
gp(a){return(A.fZ(this.a)^A.bT(this.$_target))>>>0},
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cK(this.a)+"'")}}
A.c3.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.bU.prototype={
h(a){return"RuntimeError: "+this.a}}
A.ad.prototype={
gl(a){return this.a},
gP(){return new A.O(this,A.E(this).i("O<1>"))},
gb2(){var s=A.E(this)
return A.hO(new A.O(this,s.i("O<1>")),new A.cC(this),s.c,s.y[1])},
O(a){var s=this.b
if(s==null)return!1
return s[a]!=null},
k(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.bH(b)},
bH(a){var s,r,q=this.d
if(q==null)return null
s=q[this.aT(a)]
r=this.aU(s,a)
if(r<0)return null
return s[r].b},
q(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"){s=m.b
m.au(s==null?m.b=m.a9():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.au(r==null?m.c=m.a9():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.a9()
p=m.aT(b)
o=q[p]
if(o==null)q[p]=[m.aa(b,c)]
else{n=m.aU(o,b)
if(n>=0)o[n].b=c
else o.push(m.aa(b,c))}}},
Z(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.aB()}},
F(a,b){var s=this,r=s.e,q=s.r
for(;r!=null;){b.$2(r.a,r.b)
if(q!==s.r)throw A.a(A.aD(s))
r=r.c}},
au(a,b,c){var s=a[b]
if(s==null)a[b]=this.aa(b,c)
else s.b=c},
aB(){this.r=this.r+1&1073741823},
aa(a,b){var s=this,r=new A.cF(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.aB()
return r},
aT(a){return J.X(a)&1073741823},
aU(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.F(a[r].a,b))return r
return-1},
h(a){return A.ef(this)},
a9(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.cC.prototype={
$1(a){var s=this.a,r=s.k(0,a)
return r==null?A.E(s).y[1].a(r):r},
$S(){return A.E(this.a).i("2(1)")}}
A.cF.prototype={}
A.O.prototype={
gl(a){return this.a.a},
gA(a){var s=this.a,r=new A.bH(s,s.r)
r.c=s.e
return r}}
A.bH.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.a(A.aD(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.dV.prototype={
$1(a){return this.a(a)},
$S:10}
A.dW.prototype={
$2(a,b){return this.a(a,b)},
$S:11}
A.dX.prototype={
$1(a){return this.a(a)},
$S:12}
A.bb.prototype={
h(a){return this.aG(!1)},
aG(a){var s,r,q,p,o,n=this.bk(),m=this.aA(),l=(a?""+"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.eZ(o):l+A.i(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bk(){var s,r=this.$s
for(;$.dh.length<=r;)$.dh.push(null)
s=$.dh[r]
if(s==null){s=this.bf()
$.dh[r]=s}return s},
bf(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=t.K,j=J.eS(l,k)
for(s=0;s<l;++s)j[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
j[q]=r[s]}}j=A.hN(j,!1,k)
j.$flags=3
return j}}
A.cb.prototype={
aA(){return[this.a,this.b]},
E(a,b){if(b==null)return!1
return b instanceof A.cb&&this.$s===b.$s&&J.F(this.a,b.a)&&J.F(this.b,b.b)},
gp(a){return A.hR(this.$s,this.a,this.b,B.i)}}
A.cA.prototype={
h(a){return"RegExp/"+this.a+"/"+this.b.flags},
gbn(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.eT(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,!0)},
bj(a,b){var s,r=this.gbn()
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.ca(s)}}
A.ca.prototype={
gbz(){var s=this.b
return s.index+s[0].length},
k(a,b){return this.b[b]},
$icH:1,
$ieh:1}
A.cY.prototype={
gn(){var s=this.d
return s==null?t.F.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.bj(l,s)
if(p!=null){m.d=p
o=p.gbz()
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){r=l.charCodeAt(q)
if(r>=55296&&r<=56319){s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1}}
A.bI.prototype={
gt(a){return B.ab},
$ij:1}
A.aV.prototype={}
A.bJ.prototype={
gt(a){return B.ac},
$ij:1}
A.ap.prototype={
gl(a){return a.length},
$iD:1}
A.aT.prototype={
k(a,b){A.U(b,a,a.length)
return a[b]},
q(a,b,c){a.$flags&2&&A.K(a)
A.U(b,a,a.length)
a[b]=c},
$ic:1,
$if:1}
A.aU.prototype={
q(a,b,c){a.$flags&2&&A.K(a)
A.U(b,a,a.length)
a[b]=c},
$ic:1,
$if:1}
A.bK.prototype={
gt(a){return B.ad},
$ij:1}
A.bL.prototype={
gt(a){return B.ae},
$ij:1}
A.bM.prototype={
gt(a){return B.af},
k(a,b){A.U(b,a,a.length)
return a[b]},
$ij:1}
A.bN.prototype={
gt(a){return B.ag},
k(a,b){A.U(b,a,a.length)
return a[b]},
$ij:1}
A.bO.prototype={
gt(a){return B.ah},
k(a,b){A.U(b,a,a.length)
return a[b]},
$ij:1}
A.bP.prototype={
gt(a){return B.aj},
k(a,b){A.U(b,a,a.length)
return a[b]},
$ij:1}
A.bQ.prototype={
gt(a){return B.ak},
k(a,b){A.U(b,a,a.length)
return a[b]},
$ij:1}
A.aW.prototype={
gt(a){return B.al},
gl(a){return a.length},
k(a,b){A.U(b,a,a.length)
return a[b]},
$ij:1}
A.aX.prototype={
gt(a){return B.am},
gl(a){return a.length},
k(a,b){A.U(b,a,a.length)
return a[b]},
$ij:1,
$iag:1}
A.b7.prototype={}
A.b8.prototype={}
A.b9.prototype={}
A.ba.prototype={}
A.I.prototype={
i(a){return A.bh(v.typeUniverse,this,a)},
B(a){return A.fm(v.typeUniverse,this,a)}}
A.c6.prototype={}
A.dt.prototype={
h(a){return A.C(this.a,null)}}
A.c5.prototype={
h(a){return this.a}}
A.bd.prototype={$iR:1}
A.d_.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.cZ.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:13}
A.d0.prototype={
$0(){this.a.$0()},
$S:5}
A.d1.prototype={
$0(){this.a.$0()},
$S:5}
A.dr.prototype={
bc(a,b){if(self.setTimeout!=null)self.setTimeout(A.aA(new A.ds(this,b),0),a)
else throw A.a(A.bY("`setTimeout()` not found."))}}
A.ds.prototype={
$0(){this.b.$0()},
$S:0}
A.c0.prototype={
ae(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.av(a)
else{s=r.a
if(r.$ti.i("Y<1>").b(a))s.aw(a)
else s.a5(a)}},
af(a,b){var s=this.a
if(this.b)s.K(a,b)
else s.T(a,b)}}
A.dD.prototype={
$1(a){return this.a.$2(0,a)},
$S:2}
A.dE.prototype={
$2(a,b){this.a.$2(1,new A.aJ(a,b))},
$S:14}
A.dR.prototype={
$2(a,b){this.a(a,b)},
$S:15}
A.bw.prototype={
h(a){return A.i(this.a)},
$il:1,
gS(){return this.b}}
A.c2.prototype={
af(a,b){var s
A.cj(a,"error",t.K)
s=this.a
if((s.a&30)!==0)throw A.a(A.f3("Future already completed"))
if(b==null)b=A.eK(a)
s.T(a,b)},
aK(a){return this.af(a,null)}}
A.b3.prototype={
ae(a){var s=this.a
if((s.a&30)!==0)throw A.a(A.f3("Future already completed"))
s.av(a)}}
A.au.prototype={
bI(a){if((this.c&15)!==6)return!0
return this.b.b.ap(this.d,a.a)},
bE(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.C.b(r))q=o.bN(r,p,a.b)
else q=o.ap(r,p)
try{p=q
return p}catch(s){if(t.c.b(A.a8(s))){if((this.c&1)!==0)throw A.a(A.M("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.a(A.M("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.v.prototype={
aD(a){this.a=this.a&1|4
this.c=a},
ar(a,b,c){var s,r,q=$.r
if(q===B.d){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.a(A.eJ(b,"onError",u.c))}else if(b!=null)b=A.jf(b,q)
s=new A.v(q,c.i("v<0>"))
r=b==null?1:3
this.a4(new A.au(s,r,a,b,this.$ti.i("@<1>").B(c).i("au<1,2>")))
return s},
aq(a,b){return this.ar(a,null,b)},
aF(a,b,c){var s=new A.v($.r,c.i("v<0>"))
this.a4(new A.au(s,19,a,b,this.$ti.i("@<1>").B(c).i("au<1,2>")))
return s},
bq(a){this.a=this.a&1|16
this.c=a},
U(a){this.a=a.a&30|this.a&1
this.c=a.c},
a4(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.a4(a)
return}s.U(r)}A.ax(null,null,s.b,new A.d4(s,a))}},
ab(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.ab(a)
return}n.U(s)}m.a=n.V(a)
A.ax(null,null,n.b,new A.db(m,n))}},
ac(){var s=this.c
this.c=null
return this.V(s)},
V(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
be(a){var s,r,q,p=this
p.a^=2
try{a.ar(new A.d8(p),new A.d9(p),t.P)}catch(q){s=A.a8(q)
r=A.a6(q)
A.jQ(new A.da(p,s,r))}},
a5(a){var s=this,r=s.ac()
s.a=8
s.c=a
A.b6(s,r)},
K(a,b){var s=this.ac()
this.bq(A.cl(a,b))
A.b6(this,s)},
av(a){if(this.$ti.i("Y<1>").b(a)){this.aw(a)
return}this.bd(a)},
bd(a){this.a^=2
A.ax(null,null,this.b,new A.d6(this,a))},
aw(a){if(this.$ti.b(a)){A.i5(a,this)
return}this.be(a)},
T(a,b){this.a^=2
A.ax(null,null,this.b,new A.d5(this,a,b))},
$iY:1}
A.d4.prototype={
$0(){A.b6(this.a,this.b)},
$S:0}
A.db.prototype={
$0(){A.b6(this.b,this.a.a)},
$S:0}
A.d8.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.a5(p.$ti.c.a(a))}catch(q){s=A.a8(q)
r=A.a6(q)
p.K(s,r)}},
$S:4}
A.d9.prototype={
$2(a,b){this.a.K(a,b)},
$S:16}
A.da.prototype={
$0(){this.a.K(this.b,this.c)},
$S:0}
A.d7.prototype={
$0(){A.fc(this.a.a,this.b)},
$S:0}
A.d6.prototype={
$0(){this.a.a5(this.b)},
$S:0}
A.d5.prototype={
$0(){this.a.K(this.b,this.c)},
$S:0}
A.de.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.bL(q.d)}catch(p){s=A.a8(p)
r=A.a6(p)
q=m.c&&m.b.a.c.a===s
o=m.a
if(q)o.c=m.b.a.c
else o.c=A.cl(s,r)
o.b=!0
return}if(l instanceof A.v&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=l.c
q.b=!0}return}if(l instanceof A.v){n=m.b.a
q=m.a
q.c=l.aq(new A.df(n),t.z)
q.b=!1}},
$S:0}
A.df.prototype={
$1(a){return this.a},
$S:17}
A.dd.prototype={
$0(){var s,r,q,p,o
try{q=this.a
p=q.a
q.c=p.b.b.ap(p.d,this.b)}catch(o){s=A.a8(o)
r=A.a6(o)
q=this.a
q.c=A.cl(s,r)
q.b=!0}},
$S:0}
A.dc.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=m.a.a.c
p=m.b
if(p.a.bI(s)&&p.a.e!=null){p.c=p.a.bE(s)
p.b=!1}}catch(o){r=A.a8(o)
q=A.a6(o)
p=m.a.a.c
n=m.b
if(p.a===r)n.c=p
else n.c=A.cl(r,q)
n.b=!0}},
$S:0}
A.c1.prototype={}
A.ce.prototype={}
A.dC.prototype={}
A.dP.prototype={
$0(){A.hA(this.a,this.b)},
$S:0}
A.di.prototype={
bP(a){var s,r,q
try{if(B.d===$.r){a.$0()
return}A.fM(null,null,this,a)}catch(q){s=A.a8(q)
r=A.a6(q)
A.ex(s,r)}},
aH(a){return new A.dj(this,a)},
bM(a){if($.r===B.d)return a.$0()
return A.fM(null,null,this,a)},
bL(a){return this.bM(a,t.z)},
bQ(a,b){if($.r===B.d)return a.$1(b)
return A.jh(null,null,this,a,b)},
ap(a,b){var s=t.z
return this.bQ(a,b,s,s)},
bO(a,b,c){if($.r===B.d)return a.$2(b,c)
return A.jg(null,null,this,a,b,c)},
bN(a,b,c){var s=t.z
return this.bO(a,b,c,s,s,s)},
bK(a){return a},
aZ(a){var s=t.z
return this.bK(a,s,s,s)}}
A.dj.prototype={
$0(){return this.a.bP(this.b)},
$S:0}
A.e.prototype={
gA(a){return new A.an(a,this.gl(a),A.aB(a).i("an<e.E>"))},
C(a,b){return this.k(a,b)},
Y(a,b){return new A.N(a,A.aB(a).i("@<e.E>").B(b).i("N<1,2>"))},
bA(a,b,c,d){var s
A.b_(b,c,this.gl(a))
for(s=b;s<c;++s)this.q(a,s,d)},
h(a){return A.eb(a,"[","]")},
$ic:1,
$if:1}
A.P.prototype={
F(a,b){var s,r,q,p
for(s=this.gP(),s=s.gA(s),r=A.E(this).i("P.V");s.m();){q=s.gn()
p=this.k(0,q)
b.$2(q,p==null?r.a(p):p)}},
gl(a){var s=this.gP()
return s.gl(s)},
h(a){return A.ef(this)},
$iy:1}
A.cG.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.i(a)
s=r.a+=s
r.a=s+": "
s=A.i(b)
r.a+=s},
$S:18}
A.ch.prototype={
q(a,b,c){throw A.a(A.bY("Cannot modify unmodifiable map"))}}
A.aS.prototype={
k(a,b){return this.a.k(0,b)},
q(a,b,c){this.a.q(0,b,c)},
gl(a){var s=this.a
return s.gl(s)},
h(a){return this.a.h(0)},
$iy:1}
A.at.prototype={}
A.aq.prototype={
h(a){return A.eb(this,"{","}")},
C(a,b){var s,r
A.eg(b,"index")
s=this.gA(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.a(A.ea(b,b-r,this,"index"))},
$ic:1}
A.bi.prototype={}
A.c7.prototype={
k(a,b){var s,r=this.b
if(r==null)return this.c.k(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.bo(b):s}},
gl(a){return this.b==null?this.c.a:this.L().length},
gP(){if(this.b==null){var s=this.c
return new A.O(s,A.E(s).i("O<1>"))}return new A.c8(this)},
q(a,b,c){var s,r,q=this
if(q.b==null)q.c.q(0,b,c)
else if(q.O(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.bu().q(0,b,c)},
O(a){if(this.b==null)return this.c.O(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
F(a,b){var s,r,q,p,o=this
if(o.b==null)return o.c.F(0,b)
s=o.L()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.dF(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.a(A.aD(o))}},
L(){var s=this.c
if(s==null)s=this.c=A.h(Object.keys(this.a),t.s)
return s},
bu(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.ee(t.N,t.z)
r=n.L()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.q(0,o,n.k(0,o))}if(p===0)r.push("")
else B.b.Z(r)
n.a=n.b=null
return n.c=s},
bo(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.dF(this.a[a])
return this.b[a]=s}}
A.c8.prototype={
gl(a){return this.a.gl(0)},
C(a,b){var s=this.a
return s.b==null?s.gP().C(0,b):s.L()[b]},
gA(a){var s=this.a
if(s.b==null){s=s.gP()
s=s.gA(s)}else{s=s.L()
s=new J.am(s,s.length,A.ah(s).i("am<1>"))}return s}}
A.dz.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:6}
A.dy.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:6}
A.cm.prototype={
bJ(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a="Invalid base64 encoding length "
a2=A.b_(a1,a2,a0.length)
s=$.hd()
for(r=a1,q=r,p=null,o=-1,n=-1,m=0;r<a2;r=l){l=r+1
k=a0.charCodeAt(r)
if(k===37){j=l+2
if(j<=a2){i=A.dU(a0.charCodeAt(l))
h=A.dU(a0.charCodeAt(l+1))
g=i*16+h-(h&256)
if(g===37)g=-1
l=j}else g=-1}else g=k
if(0<=g&&g<=127){f=s[g]
if(f>=0){g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(f)
if(g===k)continue
k=g}else{if(f===-1){if(o<0){e=p==null?null:p.a.length
if(e==null)e=0
o=e+(r-q)
n=r}++m
if(k===61)continue}k=g}if(f!==-2){if(p==null){p=new A.z("")
e=p}else e=p
e.a+=B.a.j(a0,q,r)
d=A.Q(k)
e.a+=d
q=l
continue}}throw A.a(A.x("Invalid base64 data",a0,r))}if(p!=null){e=B.a.j(a0,q,a2)
e=p.a+=e
d=e.length
if(o>=0)A.eL(a0,n,a2,o,m,d)
else{c=B.c.a2(d-1,4)+1
if(c===1)throw A.a(A.x(a,a0,a2))
for(;c<4;){e+="="
p.a=e;++c}}e=p.a
return B.a.I(a0,a1,a2,e.charCodeAt(0)==0?e:e)}b=a2-a1
if(o>=0)A.eL(a0,n,a2,o,m,b)
else{c=B.c.a2(b,4)
if(c===1)throw A.a(A.x(a,a0,a2))
if(c>1)a0=B.a.I(a0,a2,a2,c===2?"==":"=")}return a0}}
A.cn.prototype={}
A.bz.prototype={}
A.bB.prototype={}
A.cr.prototype={}
A.cv.prototype={
h(a){return"unknown"}}
A.cu.prototype={
H(a){var s=this.bh(a,0,a.length)
return s==null?a:s},
bh(a,b,c){var s,r,q,p
for(s=b,r=null;s<c;++s){switch(a[s]){case"&":q="&amp;"
break
case'"':q="&quot;"
break
case"'":q="&#39;"
break
case"<":q="&lt;"
break
case">":q="&gt;"
break
case"/":q="&#47;"
break
default:q=null}if(q!=null){if(r==null)r=new A.z("")
if(s>b)r.a+=B.a.j(a,b,s)
r.a+=q
b=s+1}}if(r==null)return null
if(c>b){p=B.a.j(a,b,c)
r.a+=p}p=r.a
return p.charCodeAt(0)==0?p:p}}
A.cD.prototype={
bw(a,b){var s=A.jd(a,this.gby().a)
return s},
gby(){return B.H}}
A.cE.prototype={}
A.cV.prototype={}
A.cX.prototype={
H(a){var s,r,q,p=A.b_(0,null,a.length)
if(p===0)return new Uint8Array(0)
s=p*3
r=new Uint8Array(s)
q=new A.dA(r)
if(q.bl(a,0,p)!==p)q.ad()
return new Uint8Array(r.subarray(0,A.iN(0,q.b,s)))}}
A.dA.prototype={
ad(){var s=this,r=s.c,q=s.b,p=s.b=q+1
r.$flags&2&&A.K(r)
r[q]=239
q=s.b=p+1
r[p]=191
s.b=q+1
r[q]=189},
bv(a,b){var s,r,q,p,o=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=o.c
q=o.b
p=o.b=q+1
r.$flags&2&&A.K(r)
r[q]=s>>>18|240
q=o.b=p+1
r[p]=s>>>12&63|128
p=o.b=q+1
r[q]=s>>>6&63|128
o.b=p+1
r[p]=s&63|128
return!0}else{o.ad()
return!1}},
bl(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c&&(a.charCodeAt(c-1)&64512)===55296)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=b;p<c;++p){o=a.charCodeAt(p)
if(o<=127){n=k.b
if(n>=q)break
k.b=n+1
r&2&&A.K(s)
s[n]=o}else{n=o&64512
if(n===55296){if(k.b+4>q)break
m=p+1
if(k.bv(o,a.charCodeAt(m)))p=m}else if(n===56320){if(k.b+3>q)break
k.ad()}else if(o<=2047){n=k.b
l=n+1
if(l>=q)break
k.b=l
r&2&&A.K(s)
s[n]=o>>>6|192
k.b=l+1
s[l]=o&63|128}else{n=k.b
if(n+2>=q)break
l=k.b=n+1
r&2&&A.K(s)
s[n]=o>>>12|224
n=k.b=l+1
s[l]=o>>>6&63|128
k.b=n+1
s[n]=o&63|128}}}return p}}
A.cW.prototype={
H(a){return new A.dx(this.a).bi(a,0,null,!0)}}
A.dx.prototype={
bi(a,b,c,d){var s,r,q,p,o,n,m=this,l=A.b_(b,c,J.bt(a))
if(b===l)return""
if(a instanceof Uint8Array){s=a
r=s
q=0}else{r=A.iG(a,b,l)
l-=b
q=b
b=0}if(l-b>=15){p=m.a
o=A.iF(p,r,b,l)
if(o!=null){if(!p)return o
if(o.indexOf("\ufffd")<0)return o}}o=m.a6(r,b,l,!0)
p=m.b
if((p&1)!==0){n=A.iH(p)
m.b=0
throw A.a(A.x(n,a,q+m.c))}return o},
a6(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.c.bs(b+c,2)
r=q.a6(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.a6(a,s,c,d)}return q.bx(a,b,c,d)},
bx(a,b,c,d){var s,r,q,p,o,n,m,l=this,k=65533,j=l.b,i=l.c,h=new A.z(""),g=b+1,f=a[b]
$label0$0:for(s=l.a;!0;){for(;!0;g=p){r="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE".charCodeAt(f)&31
i=j<=32?f&61694>>>r:(f&63|i<<6)>>>0
j=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA".charCodeAt(j+r)
if(j===0){q=A.Q(i)
h.a+=q
if(g===c)break $label0$0
break}else if((j&1)!==0){if(s)switch(j){case 69:case 67:q=A.Q(k)
h.a+=q
break
case 65:q=A.Q(k)
h.a+=q;--g
break
default:q=A.Q(k)
q=h.a+=q
h.a=q+A.Q(k)
break}else{l.b=j
l.c=g-1
return""}j=0}if(g===c)break $label0$0
p=g+1
f=a[g]}p=g+1
f=a[g]
if(f<128){while(!0){if(!(p<c)){o=c
break}n=p+1
f=a[p]
if(f>=128){o=n-1
p=n
break}p=n}if(o-g<20)for(m=g;m<o;++m){q=A.Q(a[m])
h.a+=q}else{q=A.f5(a,g,o)
h.a+=q}if(o===c)break $label0$0
g=p}else g=p}if(d&&j>32)if(s){s=A.Q(k)
h.a+=s}else{l.b=77
l.c=c
return""}l.b=j
l.c=i
s=h.a
return s.charCodeAt(0)==0?s:s}}
A.dw.prototype={
$2(a,b){var s,r
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.a9(b),r=this.a;s.m();){b=s.gn()
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.iJ(b)}},
$S:7}
A.d2.prototype={
h(a){return this.az()}}
A.l.prototype={
gS(){return A.hT(this)}}
A.bu.prototype={
h(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cs(s)
return"Assertion failed"}}
A.R.prototype={}
A.G.prototype={
ga8(){return"Invalid argument"+(!this.a?"(s)":"")},
ga7(){return""},
h(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.ga8()+q+o
if(!s.a)return n
return n+s.ga7()+": "+A.cs(s.gak())},
gak(){return this.b}}
A.aZ.prototype={
gak(){return this.b},
ga8(){return"RangeError"},
ga7(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.i(q):""
else if(q==null)s=": Not greater than or equal to "+A.i(r)
else if(q>r)s=": Not in inclusive range "+A.i(r)+".."+A.i(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.i(r)
return s}}
A.bC.prototype={
gak(){return this.b},
ga8(){return"RangeError"},
ga7(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gl(a){return this.f}}
A.b2.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.bV.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.b1.prototype={
h(a){return"Bad state: "+this.a}}
A.bA.prototype={
h(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cs(s)+"."}}
A.bR.prototype={
h(a){return"Out of Memory"},
gS(){return null},
$il:1}
A.b0.prototype={
h(a){return"Stack Overflow"},
gS(){return null},
$il:1}
A.d3.prototype={
h(a){return"Exception: "+this.a}}
A.ct.prototype={
h(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.a.j(e,0,75)+"..."
return g+"\n"+e}for(r=1,q=0,p=!1,o=0;o<f;++o){n=e.charCodeAt(o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}g=r>1?g+(" (at line "+r+", character "+(f-q+1)+")\n"):g+(" (at character "+(f+1)+")\n")
m=e.length
for(o=f;o<m;++o){n=e.charCodeAt(o)
if(n===10||n===13){m=o
break}}l=""
if(m-q>78){k="..."
if(f-q<75){j=q+75
i=q}else{if(m-f<75){i=m-75
j=m
k=""}else{i=f-36
j=f+36}l="..."}}else{j=m
i=q
k=""}return g+l+B.a.j(e,i,j)+k+"\n"+B.a.b6(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.i(f)+")"):g}}
A.n.prototype={
Y(a,b){return A.hs(this,A.E(this).i("n.E"),b)},
gl(a){var s,r=this.gA(this)
for(s=0;r.m();)++s
return s},
C(a,b){var s,r
A.eg(b,"index")
s=this.gA(this)
for(r=b;s.m();){if(r===0)return s.gn();--r}throw A.a(A.ea(b,b-r,this,"index"))},
h(a){return A.hH(this,"(",")")}}
A.u.prototype={
gp(a){return A.k.prototype.gp.call(this,0)},
h(a){return"null"}}
A.k.prototype={$ik:1,
E(a,b){return this===b},
gp(a){return A.bT(this)},
h(a){return"Instance of '"+A.cK(this)+"'"},
gt(a){return A.jA(this)},
toString(){return this.h(this)}}
A.cf.prototype={
h(a){return""},
$ia0:1}
A.z.prototype={
gl(a){return this.a.length},
h(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.cU.prototype={
$2(a,b){var s,r,q,p=B.a.aS(b,"=")
if(p===-1){if(b!=="")a.q(0,A.es(b,0,b.length,this.a,!0),"")}else if(p!==0){s=B.a.j(b,0,p)
r=B.a.J(b,p+1)
q=this.a
a.q(0,A.es(s,0,s.length,q,!0),A.es(r,0,r.length,q,!0))}return a},
$S:19}
A.cR.prototype={
$2(a,b){throw A.a(A.x("Illegal IPv4 address, "+a,this.a,b))},
$S:20}
A.cS.prototype={
$2(a,b){throw A.a(A.x("Illegal IPv6 address, "+a,this.a,b))},
$S:21}
A.cT.prototype={
$2(a,b){var s
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
s=A.e1(B.a.j(this.b,a,b),16)
if(s<0||s>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return s},
$S:22}
A.bj.prototype={
gX(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?""+s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.i(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n!==$&&A.br()
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gp(a){var s,r=this,q=r.y
if(q===$){s=B.a.gp(r.gX())
r.y!==$&&A.br()
r.y=s
q=s}return q},
gan(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.fa(s==null?"":s)
r.z!==$&&A.br()
q=r.z=new A.at(s,t.h)}return q},
gb1(){return this.b},
gai(){var s=this.c
if(s==null)return""
if(B.a.u(s,"["))return B.a.j(s,1,s.length-1)
return s},
ga1(){var s=this.d
return s==null?A.fn(this.a):s},
gam(){var s=this.f
return s==null?"":s},
gaM(){var s=this.r
return s==null?"":s},
ao(a){var s,r,q,p,o=this,n=o.a,m=n==="file",l=o.b,k=o.d,j=o.c
if(!(j!=null))j=l.length!==0||k!=null||m?"":null
s=o.e
if(!m)r=j!=null&&s.length!==0
else r=!0
if(r&&!B.a.u(s,"/"))s="/"+s
q=s
p=A.eq(null,0,0,a)
return A.eo(n,l,j,k,q,p,o.r)},
gaV(){if(this.a!==""){var s=this.r
s=(s==null?"":s)===""}else s=!1
return s},
gaO(){return this.c!=null},
gaR(){return this.f!=null},
gaP(){return this.r!=null},
h(a){return this.gX()},
E(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.R.b(b))if(p.a===b.ga3())if(p.c!=null===b.gaO())if(p.b===b.gb1())if(p.gai()===b.gai())if(p.ga1()===b.ga1())if(p.e===b.gaY()){r=p.f
q=r==null
if(!q===b.gaR()){if(q)r=""
if(r===b.gam()){r=p.r
q=r==null
if(!q===b.gaP()){s=q?"":r
s=s===b.gaM()}}}}return s},
$ibZ:1,
ga3(){return this.a},
gaY(){return this.e}}
A.dv.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.ft(B.h,a,B.e,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.ft(B.h,b,B.e,!0)
s.a+=r}},
$S:23}
A.du.prototype={
$2(a,b){var s,r
if(b==null||typeof b=="string")this.a.$2(a,b)
else for(s=J.a9(b),r=this.a;s.m();)r.$2(a,s.gn())},
$S:7}
A.cQ.prototype={
gb0(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.a
s=o.b[0]+1
r=B.a.a_(m,"?",s)
q=m.length
if(r>=0){p=A.bk(m,r+1,q,B.f,!1,!1)
q=r}else p=n
m=o.c=new A.c4("data","",n,n,A.bk(m,s,q,B.o,!1,!1),p,n)}return m},
h(a){var s=this.a
return this.b[0]===-1?"data:"+s:s}}
A.dI.prototype={
$2(a,b){var s=this.a[a]
B.a7.bA(s,0,96,b)
return s},
$S:24}
A.dJ.prototype={
$3(a,b,c){var s,r,q
for(s=b.length,r=a.$flags|0,q=0;q<s;++q){r&2&&A.K(a)
a[b.charCodeAt(q)^96]=c}},
$S:8}
A.dK.prototype={
$3(a,b,c){var s,r,q
for(s=b.charCodeAt(0),r=b.charCodeAt(1),q=a.$flags|0;s<=r;++s){q&2&&A.K(a)
a[(s^96)>>>0]=c}},
$S:8}
A.cd.prototype={
gaO(){return this.c>0},
gaQ(){return this.c>0&&this.d+1<this.e},
gaR(){return this.f<this.r},
gaP(){return this.r<this.a.length},
gaV(){return this.b>0&&this.r>=this.a.length},
ga3(){var s=this.w
return s==null?this.w=this.bg():s},
bg(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.a.u(r.a,"http"))return"http"
if(q===5&&B.a.u(r.a,"https"))return"https"
if(s&&B.a.u(r.a,"file"))return"file"
if(q===7&&B.a.u(r.a,"package"))return"package"
return B.a.j(r.a,0,q)},
gb1(){var s=this.c,r=this.b+3
return s>r?B.a.j(this.a,r,s-1):""},
gai(){var s=this.c
return s>0?B.a.j(this.a,s,this.d):""},
ga1(){var s,r=this
if(r.gaQ())return A.e1(B.a.j(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&B.a.u(r.a,"http"))return 80
if(s===5&&B.a.u(r.a,"https"))return 443
return 0},
gaY(){return B.a.j(this.a,this.e,this.f)},
gam(){var s=this.f,r=this.r
return s<r?B.a.j(this.a,s+1,r):""},
gaM(){var s=this.r,r=this.a
return s<r.length?B.a.J(r,s+1):""},
gan(){if(this.f>=this.r)return B.a6
return new A.at(A.fa(this.gam()),t.h)},
ao(a){var s,r,q,p,o,n=this,m=null,l=n.ga3(),k=l==="file",j=n.c,i=j>0?B.a.j(n.a,n.b+3,j):"",h=n.gaQ()?n.ga1():m
j=n.c
if(j>0)s=B.a.j(n.a,j,n.d)
else s=i.length!==0||h!=null||k?"":m
j=n.a
r=B.a.j(j,n.e,n.f)
if(!k)q=s!=null&&r.length!==0
else q=!0
if(q&&!B.a.u(r,"/"))r="/"+r
p=A.eq(m,0,0,a)
q=n.r
o=q<j.length?B.a.J(j,q+1):m
return A.eo(l,i,s,h,r,p,o)},
gp(a){var s=this.x
return s==null?this.x=B.a.gp(this.a):s},
E(a,b){if(b==null)return!1
if(this===b)return!0
return t.R.b(b)&&this.a===b.h(0)},
h(a){return this.a},
$ibZ:1}
A.c4.prototype={}
A.e5.prototype={
$1(a){return this.a.ae(a)},
$S:2}
A.e6.prototype={
$1(a){if(a==null)return this.a.aK(new A.cI(a===undefined))
return this.a.aK(a)},
$S:2}
A.cI.prototype={
h(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.m.prototype={
az(){return"Kind."+this.b},
h(a){var s
switch(this.a){case 0:s="accessor"
break
case 1:s="constant"
break
case 2:s="constructor"
break
case 3:s="class"
break
case 4:s="dynamic"
break
case 5:s="enum"
break
case 6:s="extension"
break
case 7:s="extension type"
break
case 8:s="function"
break
case 9:s="library"
break
case 10:s="method"
break
case 11:s="mixin"
break
case 12:s="Never"
break
case 13:s="package"
break
case 14:s="parameter"
break
case 15:s="prefix"
break
case 16:s="property"
break
case 17:s="SDK"
break
case 18:s="topic"
break
case 19:s="top-level constant"
break
case 20:s="top-level property"
break
case 21:s="typedef"
break
case 22:s="type parameter"
break
default:s=null}return s}}
A.A.prototype={
az(){return"_MatchPosition."+this.b}}
A.cw.prototype={
aL(a){var s,r,q,p,o,n,m,l,k,j,i
if(a.length===0)return A.h([],t.M)
s=a.toLowerCase()
r=A.h([],t.r)
for(q=this.a,p=q.length,o=s.length>1,n="dart:"+s,m=0;m<q.length;q.length===p||(0,A.e7)(q),++m){l=q[m]
k=new A.cz(r,l)
j=l.a.toLowerCase()
i=l.b.toLowerCase()
if(j===s||i===s||j===n)k.$1(B.ao)
else if(o)if(B.a.u(j,s)||B.a.u(i,s))k.$1(B.ap)
else if(B.a.N(j,s)||B.a.N(i,s))k.$1(B.aq)}B.b.b9(r,new A.cx())
q=t.V
return A.eW(new A.af(r,new A.cy(),q),!0,q.i("J.E"))}}
A.cz.prototype={
$1(a){this.a.push(new A.cc(this.b,a))},
$S:25}
A.cx.prototype={
$2(a,b){var s,r,q=a.b.a-b.b.a
if(q!==0)return q
s=a.a
r=b.a
q=s.c-r.c
if(q!==0)return q
q=s.gaC()-r.gaC()
if(q!==0)return q
q=s.f-r.f
if(q!==0)return q
return s.a.length-r.a.length},
$S:26}
A.cy.prototype={
$1(a){return a.a},
$S:27}
A.w.prototype={
gaC(){var s=0
switch(this.d.a){case 3:break
case 5:break
case 6:break
case 7:break
case 11:break
case 19:break
case 20:break
case 21:break
case 0:s=1
break
case 1:s=1
break
case 2:s=1
break
case 8:s=1
break
case 10:s=1
break
case 16:s=1
break
case 9:s=2
break
case 13:s=2
break
case 18:s=2
break
case 4:s=3
break
case 12:s=3
break
case 14:s=3
break
case 15:s=3
break
case 17:s=3
break
case 22:s=3
break
default:s=null}return s}}
A.cq.prototype={}
A.dM.prototype={
$0(){var s,r=self.document.body
if(r==null)return""
if(J.F(r.getAttribute("data-using-base-href"),"false")){s=r.getAttribute("data-base-href")
return s==null?"":s}else return""},
$S:28}
A.e_.prototype={
$0(){A.jO("Could not activate search functionality.")
var s=this.a
if(s!=null)s.placeholder="Failed to initialize search"
s=this.b
if(s!=null)s.placeholder="Failed to initialize search"
s=this.c
if(s!=null)s.placeholder="Failed to initialize search"},
$S:0}
A.dZ.prototype={
$1(a){return this.b5(a)},
b5(a){var s=0,r=A.fL(t.P),q,p=this,o,n,m,l,k,j,i,h,g
var $async$$1=A.fS(function(b,c){if(b===1)return A.fB(c,r)
while(true)switch(s){case 0:if(!J.F(a.status,200)){p.a.$0()
s=1
break}i=J
h=t.j
g=B.A
s=3
return A.fA(A.e4(a.text(),t.N),$async$$1)
case 3:o=i.hm(h.a(g.bw(c,null)),t.a)
n=o.$ti.i("af<e.E,w>")
m=new A.cw(A.eW(new A.af(o,A.jR(),n),!0,n.i("J.E")))
n=self
l=A.c_(J.al(n.window.location)).gan().k(0,"search")
if(l!=null){k=m.aL(l)
if(k.length!==0){j=B.b.gbB(k).e
if(j!=null){n.window.location.assign($.bs()+j)
s=1
break}}}n=p.b
if(n!=null)A.ek(m).aj(n)
n=p.c
if(n!=null)A.ek(m).aj(n)
n=p.d
if(n!=null)A.ek(m).aj(n)
case 1:return A.fC(q,r)}})
return A.fD($async$$1,r)},
$S:9}
A.dk.prototype={
gG(){var s,r=this,q=r.c
if(q===$){s=self.document.createElement("div")
s.setAttribute("role","listbox")
s.setAttribute("aria-expanded","false")
s.style.display="none"
s.classList.add("tt-menu")
s.appendChild(r.gaX())
s.appendChild(r.gR())
r.c!==$&&A.br()
r.c=s
q=s}return q},
gaX(){var s,r=this.d
if(r===$){s=self.document.createElement("div")
s.classList.add("enter-search-message")
this.d!==$&&A.br()
this.d=s
r=s}return r},
gR(){var s,r=this.e
if(r===$){s=self.document.createElement("div")
s.classList.add("tt-search-results")
this.e!==$&&A.br()
this.e=s
r=s}return r},
aj(a){var s,r,q,p=this
a.disabled=!1
a.setAttribute("placeholder","Search API Docs")
s=self
s.document.addEventListener("keydown",A.a4(new A.dl(a)))
r=s.document.createElement("div")
r.classList.add("tt-wrapper")
a.replaceWith(r)
a.setAttribute("autocomplete","off")
a.setAttribute("spellcheck","false")
a.classList.add("tt-input")
r.appendChild(a)
r.appendChild(p.gG())
p.b7(a)
if(J.ho(s.window.location.href,"search.html")){q=p.b.gan().k(0,"q")
if(q==null)return
q=B.k.H(q)
$.ez=$.dQ
p.bG(q,!0)
p.b8(q)
p.ah()
$.ez=10}},
b8(a){var s,r,q,p,o,n=self,m=n.document.getElementById("dartdoc-main-content")
if(m==null)return
m.textContent=""
s=n.document.createElement("section")
s.classList.add("search-summary")
m.appendChild(s)
s=n.document.createElement("h2")
s.innerHTML="Search Results"
m.appendChild(s)
s=n.document.createElement("div")
s.classList.add("search-summary")
s.innerHTML=""+$.dQ+' results for "'+a+'"'
m.appendChild(s)
if($.bm.a!==0)for(n=$.bm.gb2(),r=A.E(n),n=new A.ao(J.a9(n.a),n.b,r.i("ao<1,2>")),r=r.y[1];n.m();){q=n.a
if(q==null)q=r.a(q)
m.appendChild(q)}else{s=n.document.createElement("div")
s.classList.add("search-summary")
s.innerHTML='There was not a match for "'+a+'". Want to try searching from additional Dart-related sites? '
p=A.c_("https://dart.dev/search?cx=011220921317074318178%3A_yy-tmb5t_i&ie=UTF-8&hl=en&q=").ao(A.eU(["q",a],t.N,t.z))
o=n.document.createElement("a")
o.setAttribute("href",p.gX())
o.textContent="Search on dart.dev."
s.appendChild(o)
m.appendChild(s)}},
ah(){var s=this.gG()
s.style.display="none"
s.setAttribute("aria-expanded","false")
return s},
b_(a,b,c){var s,r,q,p,o=this
o.x=A.h([],t.M)
s=o.w
B.b.Z(s)
$.bm.Z(0)
o.gR().textContent=""
r=b.length
if(r===0){o.ah()
return}for(q=0;q<b.length;b.length===r||(0,A.e7)(b),++q)s.push(A.iO(a,b[q]))
for(r=J.a9(c?$.bm.gb2():s);r.m();){p=r.gn()
o.gR().appendChild(p)}o.x=b
o.y=-1
if(o.gR().hasChildNodes()){r=o.gG()
r.style.display="block"
r.setAttribute("aria-expanded","true")}r=$.dQ
r=r>10?'Press "Enter" key to see all '+r+" results":""
o.gaX().textContent=r},
bR(a,b){return this.b_(a,b,!1)},
ag(a,b,c){var s,r,q,p=this
if(p.r===a&&!b)return
if(a.length===0){p.bR("",A.h([],t.M))
return}s=p.a.aL(a)
r=s.length
$.dQ=r
q=$.ez
if(r>q)s=B.b.ba(s,0,q)
p.r=a
p.b_(a,s,c)},
bG(a,b){return this.ag(a,!1,b)},
aN(a){return this.ag(a,!1,!1)},
bF(a,b){return this.ag(a,b,!1)},
aI(a){var s,r=this
r.y=-1
s=r.f
if(s!=null){a.value=s
r.f=null}r.ah()},
b7(a){var s=this
a.addEventListener("focus",A.a4(new A.dm(s,a)))
a.addEventListener("blur",A.a4(new A.dn(s,a)))
a.addEventListener("input",A.a4(new A.dp(s,a)))
a.addEventListener("keydown",A.a4(new A.dq(s,a)))}}
A.dl.prototype={
$1(a){var s
if(!J.F(a.key,"/"))return
s=self.document.activeElement
if(s==null||!B.aa.N(0,s.nodeName.toLowerCase())){a.preventDefault()
this.a.focus()}},
$S:1}
A.dm.prototype={
$1(a){this.a.bF(this.b.value,!0)},
$S:1}
A.dn.prototype={
$1(a){this.a.aI(this.b)},
$S:1}
A.dp.prototype={
$1(a){this.a.aN(this.b.value)},
$S:1}
A.dq.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(!J.F(a.type,"keydown"))return
if(J.F(a.code,"Enter")){a.preventDefault()
s=e.a
r=s.y
if(r!==-1){q=s.w[r].getAttribute("data-href")
if(q!=null)self.window.location.assign($.bs()+q)
return}else{p=B.k.H(s.r)
o=A.c_($.bs()+"search.html").ao(A.eU(["q",p],t.N,t.z))
self.window.location.assign(o.gX())
return}}s=e.a
r=s.w
n=r.length-1
m=s.y
if(J.F(a.code,"ArrowUp")){l=s.y
if(l===-1)s.y=n
else s.y=l-1}else if(J.F(a.code,"ArrowDown")){l=s.y
if(l===n)s.y=-1
else s.y=l+1}else if(J.F(a.code,"Escape"))s.aI(e.b)
else{if(s.f!=null){s.f=null
s.aN(e.b.value)}return}l=m!==-1
if(l)r[m].classList.remove("tt-cursor")
k=s.y
if(k!==-1){j=r[k]
j.classList.add("tt-cursor")
r=s.y
if(r===0)s.gG().scrollTop=0
else if(r===n)s.gG().scrollTop=s.gG().scrollHeight
else{i=j.offsetTop
h=s.gG().offsetHeight
if(i<h||h<i+j.offsetHeight)j.scrollIntoView()}if(s.f==null)s.f=e.b.value
e.b.value=s.x[s.y].a}else{g=s.f
if(g!=null){r=l
f=g}else{f=null
r=!1}if(r){e.b.value=f
s.f=null}}a.preventDefault()},
$S:1}
A.dG.prototype={
$1(a){a.preventDefault()},
$S:1}
A.dH.prototype={
$1(a){var s=this.a.e
if(s!=null){self.window.location.assign($.bs()+s)
a.preventDefault()}},
$S:1}
A.dL.prototype={
$1(a){return"<strong class='tt-highlight'>"+A.i(a.k(0,0))+"</strong>"},
$S:29}
A.dN.prototype={
$1(a){var s=this.a
if(s!=null)s.classList.toggle("active")
s=this.b
if(s!=null)s.classList.toggle("active")},
$S:1}
A.dO.prototype={
$1(a){return this.b4(a)},
b4(a){var s=0,r=A.fL(t.P),q,p=this,o,n
var $async$$1=A.fS(function(b,c){if(b===1)return A.fB(c,r)
while(true)switch(s){case 0:if(!J.F(a.status,200)){o=self.document.createElement("a")
o.href="https://dart.dev/tools/dart-doc#troubleshoot"
o.text="Failed to load sidebar. Visit dart.dev for help troubleshooting."
p.a.appendChild(o)
s=1
break}s=3
return A.fA(A.e4(a.text(),t.N),$async$$1)
case 3:n=c
o=self.document.createElement("div")
o.innerHTML=n
A.fR(p.b,o)
p.a.appendChild(o)
case 1:return A.fC(q,r)}})
return A.fD($async$$1,r)},
$S:9}
A.e0.prototype={
$0(){var s=this.a,r=this.b
if(s.checked){r.setAttribute("class","dark-theme")
s.setAttribute("value","dark-theme")
self.window.localStorage.setItem("colorTheme","true")}else{r.setAttribute("class","light-theme")
s.setAttribute("value","light-theme")
self.window.localStorage.setItem("colorTheme","false")}},
$S:0}
A.dY.prototype={
$1(a){this.a.$0()},
$S:1};(function aliases(){var s=J.a_.prototype
s.bb=s.h})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._static_1,q=hunkHelpers._static_0
s(J,"j_","hL",30)
r(A,"jp","i2",3)
r(A,"jq","i3",3)
r(A,"jr","i4",3)
q(A,"fU","jj",0)
r(A,"jR","hD",31)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.k,null)
q(A.k,[A.ec,J.bD,J.am,A.n,A.bx,A.l,A.e,A.cL,A.an,A.ao,A.aK,A.bX,A.bb,A.aE,A.c9,A.aq,A.cO,A.cJ,A.aJ,A.bc,A.ab,A.P,A.cF,A.bH,A.cA,A.ca,A.cY,A.I,A.c6,A.dt,A.dr,A.c0,A.bw,A.c2,A.au,A.v,A.c1,A.ce,A.dC,A.ch,A.aS,A.bz,A.bB,A.cv,A.dA,A.dx,A.d2,A.bR,A.b0,A.d3,A.ct,A.u,A.cf,A.z,A.bj,A.cQ,A.cd,A.cI,A.cw,A.w,A.cq,A.dk])
q(J.bD,[J.bE,J.aM,J.aP,J.aO,J.aQ,J.aN,J.ac])
q(J.aP,[J.a_,J.o,A.bI,A.aV])
q(J.a_,[J.bS,J.ar,J.Z])
r(J.cB,J.o)
q(J.aN,[J.aL,J.bF])
q(A.n,[A.a2,A.c,A.ae])
q(A.a2,[A.aa,A.bl])
r(A.b5,A.aa)
r(A.b4,A.bl)
r(A.N,A.b4)
q(A.l,[A.aR,A.R,A.bG,A.bW,A.c3,A.bU,A.c5,A.bu,A.G,A.b2,A.bV,A.b1,A.bA])
r(A.as,A.e)
r(A.by,A.as)
q(A.c,[A.J,A.O])
r(A.aI,A.ae)
q(A.J,[A.af,A.c8])
r(A.cb,A.bb)
r(A.cc,A.cb)
r(A.aG,A.aE)
r(A.aF,A.aq)
r(A.aH,A.aF)
r(A.aY,A.R)
q(A.ab,[A.co,A.cp,A.cN,A.cC,A.dV,A.dX,A.d_,A.cZ,A.dD,A.d8,A.df,A.dJ,A.dK,A.e5,A.e6,A.cz,A.cy,A.dZ,A.dl,A.dm,A.dn,A.dp,A.dq,A.dG,A.dH,A.dL,A.dN,A.dO,A.dY])
q(A.cN,[A.cM,A.aC])
q(A.P,[A.ad,A.c7])
q(A.cp,[A.dW,A.dE,A.dR,A.d9,A.cG,A.dw,A.cU,A.cR,A.cS,A.cT,A.dv,A.du,A.dI,A.cx])
q(A.aV,[A.bJ,A.ap])
q(A.ap,[A.b7,A.b9])
r(A.b8,A.b7)
r(A.aT,A.b8)
r(A.ba,A.b9)
r(A.aU,A.ba)
q(A.aT,[A.bK,A.bL])
q(A.aU,[A.bM,A.bN,A.bO,A.bP,A.bQ,A.aW,A.aX])
r(A.bd,A.c5)
q(A.co,[A.d0,A.d1,A.ds,A.d4,A.db,A.da,A.d7,A.d6,A.d5,A.de,A.dd,A.dc,A.dP,A.dj,A.dz,A.dy,A.dM,A.e_,A.e0])
r(A.b3,A.c2)
r(A.di,A.dC)
r(A.bi,A.aS)
r(A.at,A.bi)
q(A.bz,[A.cm,A.cr,A.cD])
q(A.bB,[A.cn,A.cu,A.cE,A.cX,A.cW])
r(A.cV,A.cr)
q(A.G,[A.aZ,A.bC])
r(A.c4,A.bj)
q(A.d2,[A.m,A.A])
s(A.as,A.bX)
s(A.bl,A.e)
s(A.b7,A.e)
s(A.b8,A.aK)
s(A.b9,A.e)
s(A.ba,A.aK)
s(A.bi,A.ch)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{b:"int",t:"double",jN:"num",d:"String",js:"bool",u:"Null",f:"List",k:"Object",y:"Map"},mangledNames:{},types:["~()","u(p)","~(@)","~(~())","u(@)","u()","@()","~(d,@)","~(ag,d,b)","Y<u>(p)","@(@)","@(@,d)","@(d)","u(~())","u(@,a0)","~(b,@)","u(k,a0)","v<@>(@)","~(k?,k?)","y<d,d>(y<d,d>,d)","~(d,b)","~(d,b?)","b(b,b)","~(d,d?)","ag(@,@)","~(A)","b(+item,matchPosition(w,A),+item,matchPosition(w,A))","w(+item,matchPosition(w,A))","d()","d(cH)","b(@,@)","w(y<d,@>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;item,matchPosition":(a,b)=>c=>c instanceof A.cc&&a.b(c.a)&&b.b(c.b)}}
A.im(v.typeUniverse,JSON.parse('{"bS":"a_","ar":"a_","Z":"a_","bE":{"j":[]},"aM":{"u":[],"j":[]},"aP":{"p":[]},"a_":{"p":[]},"o":{"f":["1"],"c":["1"],"p":[]},"cB":{"o":["1"],"f":["1"],"c":["1"],"p":[]},"aN":{"t":[]},"aL":{"t":[],"b":[],"j":[]},"bF":{"t":[],"j":[]},"ac":{"d":[],"j":[]},"a2":{"n":["2"]},"aa":{"a2":["1","2"],"n":["2"],"n.E":"2"},"b5":{"aa":["1","2"],"a2":["1","2"],"c":["2"],"n":["2"],"n.E":"2"},"b4":{"e":["2"],"f":["2"],"a2":["1","2"],"c":["2"],"n":["2"]},"N":{"b4":["1","2"],"e":["2"],"f":["2"],"a2":["1","2"],"c":["2"],"n":["2"],"e.E":"2","n.E":"2"},"aR":{"l":[]},"by":{"e":["b"],"f":["b"],"c":["b"],"e.E":"b"},"c":{"n":["1"]},"J":{"c":["1"],"n":["1"]},"ae":{"n":["2"],"n.E":"2"},"aI":{"ae":["1","2"],"c":["2"],"n":["2"],"n.E":"2"},"af":{"J":["2"],"c":["2"],"n":["2"],"J.E":"2","n.E":"2"},"as":{"e":["1"],"f":["1"],"c":["1"]},"aE":{"y":["1","2"]},"aG":{"y":["1","2"]},"aF":{"aq":["1"],"c":["1"]},"aH":{"aq":["1"],"c":["1"]},"aY":{"R":[],"l":[]},"bG":{"l":[]},"bW":{"l":[]},"bc":{"a0":[]},"c3":{"l":[]},"bU":{"l":[]},"ad":{"P":["1","2"],"y":["1","2"],"P.V":"2"},"O":{"c":["1"],"n":["1"],"n.E":"1"},"ca":{"eh":[],"cH":[]},"bI":{"p":[],"j":[]},"aV":{"p":[]},"bJ":{"p":[],"j":[]},"ap":{"D":["1"],"p":[]},"aT":{"e":["t"],"f":["t"],"D":["t"],"c":["t"],"p":[]},"aU":{"e":["b"],"f":["b"],"D":["b"],"c":["b"],"p":[]},"bK":{"e":["t"],"f":["t"],"D":["t"],"c":["t"],"p":[],"j":[],"e.E":"t"},"bL":{"e":["t"],"f":["t"],"D":["t"],"c":["t"],"p":[],"j":[],"e.E":"t"},"bM":{"e":["b"],"f":["b"],"D":["b"],"c":["b"],"p":[],"j":[],"e.E":"b"},"bN":{"e":["b"],"f":["b"],"D":["b"],"c":["b"],"p":[],"j":[],"e.E":"b"},"bO":{"e":["b"],"f":["b"],"D":["b"],"c":["b"],"p":[],"j":[],"e.E":"b"},"bP":{"e":["b"],"f":["b"],"D":["b"],"c":["b"],"p":[],"j":[],"e.E":"b"},"bQ":{"e":["b"],"f":["b"],"D":["b"],"c":["b"],"p":[],"j":[],"e.E":"b"},"aW":{"e":["b"],"f":["b"],"D":["b"],"c":["b"],"p":[],"j":[],"e.E":"b"},"aX":{"ag":[],"e":["b"],"f":["b"],"D":["b"],"c":["b"],"p":[],"j":[],"e.E":"b"},"c5":{"l":[]},"bd":{"R":[],"l":[]},"v":{"Y":["1"]},"bw":{"l":[]},"b3":{"c2":["1"]},"e":{"f":["1"],"c":["1"]},"P":{"y":["1","2"]},"aS":{"y":["1","2"]},"at":{"y":["1","2"]},"aq":{"c":["1"]},"c7":{"P":["d","@"],"y":["d","@"],"P.V":"@"},"c8":{"J":["d"],"c":["d"],"n":["d"],"J.E":"d","n.E":"d"},"f":{"c":["1"]},"eh":{"cH":[]},"bu":{"l":[]},"R":{"l":[]},"G":{"l":[]},"aZ":{"l":[]},"bC":{"l":[]},"b2":{"l":[]},"bV":{"l":[]},"b1":{"l":[]},"bA":{"l":[]},"bR":{"l":[]},"b0":{"l":[]},"cf":{"a0":[]},"bj":{"bZ":[]},"cd":{"bZ":[]},"c4":{"bZ":[]},"hG":{"f":["b"],"c":["b"]},"ag":{"f":["b"],"c":["b"]},"i_":{"f":["b"],"c":["b"]},"hE":{"f":["b"],"c":["b"]},"hY":{"f":["b"],"c":["b"]},"hF":{"f":["b"],"c":["b"]},"hZ":{"f":["b"],"c":["b"]},"hB":{"f":["t"],"c":["t"]},"hC":{"f":["t"],"c":["t"]}}'))
A.il(v.typeUniverse,JSON.parse('{"aK":1,"bX":1,"as":1,"bl":2,"aE":2,"aF":1,"bH":1,"ap":1,"ce":1,"ch":2,"aS":2,"bi":2,"bz":2,"bB":2}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.bp
return{U:s("c<@>"),Q:s("l"),Z:s("jZ"),M:s("o<w>"),O:s("o<p>"),r:s("o<+item,matchPosition(w,A)>"),s:s("o<d>"),b:s("o<@>"),t:s("o<b>"),T:s("aM"),m:s("p"),g:s("Z"),p:s("D<@>"),j:s("f<@>"),a:s("y<d,@>"),V:s("af<+item,matchPosition(w,A),w>"),P:s("u"),K:s("k"),L:s("k_"),d:s("+()"),F:s("eh"),l:s("a0"),N:s("d"),k:s("j"),c:s("R"),D:s("ag"),o:s("ar"),h:s("at<d,d>"),R:s("bZ"),e:s("v<@>"),y:s("js"),i:s("t"),z:s("@"),v:s("@(k)"),C:s("@(k,a0)"),S:s("b"),A:s("0&*"),_:s("k*"),W:s("Y<u>?"),X:s("k?"),H:s("jN")}})();(function constants(){var s=hunkHelpers.makeConstList
B.E=J.bD.prototype
B.b=J.o.prototype
B.c=J.aL.prototype
B.a=J.ac.prototype
B.F=J.Z.prototype
B.G=J.aP.prototype
B.a7=A.aX.prototype
B.r=J.bS.prototype
B.j=J.ar.prototype
B.ar=new A.cn()
B.t=new A.cm()
B.as=new A.cv()
B.k=new A.cu()
B.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.u=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.z=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.v=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.y=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.x=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.w=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.m=function(hooks) { return hooks; }

B.A=new A.cD()
B.B=new A.bR()
B.i=new A.cL()
B.e=new A.cV()
B.C=new A.cX()
B.d=new A.di()
B.D=new A.cf()
B.H=new A.cE(null)
B.a4=A.h(s([0,0,32722,12287,65534,34815,65534,18431]),t.t)
B.f=A.h(s([0,0,65490,45055,65535,34815,65534,18431]),t.t)
B.a5=A.h(s([0,0,32754,11263,65534,34815,65534,18431]),t.t)
B.n=A.h(s([0,0,26624,1023,65534,2047,65534,2047]),t.t)
B.o=A.h(s([0,0,65490,12287,65535,34815,65534,18431]),t.t)
B.I=new A.m(0,"accessor")
B.J=new A.m(1,"constant")
B.U=new A.m(2,"constructor")
B.Y=new A.m(3,"class_")
B.Z=new A.m(4,"dynamic")
B.a_=new A.m(5,"enum_")
B.a0=new A.m(6,"extension")
B.a1=new A.m(7,"extensionType")
B.a2=new A.m(8,"function")
B.a3=new A.m(9,"library")
B.K=new A.m(10,"method")
B.L=new A.m(11,"mixin")
B.M=new A.m(12,"never")
B.N=new A.m(13,"package")
B.O=new A.m(14,"parameter")
B.P=new A.m(15,"prefix")
B.Q=new A.m(16,"property")
B.R=new A.m(17,"sdk")
B.S=new A.m(18,"topic")
B.T=new A.m(19,"topLevelConstant")
B.V=new A.m(20,"topLevelProperty")
B.W=new A.m(21,"typedef")
B.X=new A.m(22,"typeParameter")
B.p=A.h(s([B.I,B.J,B.U,B.Y,B.Z,B.a_,B.a0,B.a1,B.a2,B.a3,B.K,B.L,B.M,B.N,B.O,B.P,B.Q,B.R,B.S,B.T,B.V,B.W,B.X]),A.bp("o<m>"))
B.q=A.h(s([0,0,32776,33792,1,10240,0,0]),t.t)
B.h=A.h(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
B.a8={}
B.a6=new A.aG(B.a8,[],A.bp("aG<d,d>"))
B.a9={input:0,textarea:1}
B.aa=new A.aH(B.a9,2,A.bp("aH<d>"))
B.ab=A.L("jW")
B.ac=A.L("jX")
B.ad=A.L("hB")
B.ae=A.L("hC")
B.af=A.L("hE")
B.ag=A.L("hF")
B.ah=A.L("hG")
B.ai=A.L("k")
B.aj=A.L("hY")
B.ak=A.L("hZ")
B.al=A.L("i_")
B.am=A.L("ag")
B.an=new A.cW(!1)
B.ao=new A.A(0,"isExactly")
B.ap=new A.A(1,"startsWith")
B.aq=new A.A(2,"contains")})();(function staticFields(){$.dg=null
$.ak=A.h([],A.bp("o<k>"))
$.eX=null
$.eO=null
$.eN=null
$.fW=null
$.fT=null
$.h0=null
$.dS=null
$.e2=null
$.eD=null
$.dh=A.h([],A.bp("o<f<k>?>"))
$.aw=null
$.bn=null
$.bo=null
$.ew=!1
$.r=B.d
$.ez=10
$.dQ=0
$.bm=A.ee(t.N,t.m)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"jY","eH",()=>A.jz("_$dart_dartClosure"))
s($,"k1","h3",()=>A.S(A.cP({
toString:function(){return"$receiver$"}})))
s($,"k2","h4",()=>A.S(A.cP({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"k3","h5",()=>A.S(A.cP(null)))
s($,"k4","h6",()=>A.S(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"k7","h9",()=>A.S(A.cP(void 0)))
s($,"k8","ha",()=>A.S(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"k6","h8",()=>A.S(A.f6(null)))
s($,"k5","h7",()=>A.S(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"ka","hc",()=>A.S(A.f6(void 0)))
s($,"k9","hb",()=>A.S(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"kb","eI",()=>A.i1())
s($,"kh","hi",()=>A.hQ(4096))
s($,"kf","hg",()=>new A.dz().$0())
s($,"kg","hh",()=>new A.dy().$0())
s($,"kc","hd",()=>A.hP(A.iQ(A.h([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"kd","he",()=>A.f_("^[\\-\\.0-9A-Z_a-z~]*$",!0))
s($,"ke","hf",()=>typeof URLSearchParams=="function")
s($,"kt","e8",()=>A.fZ(B.ai))
s($,"kv","hj",()=>A.iP())
s($,"ku","bs",()=>new A.dM().$0())})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.bI,ArrayBufferView:A.aV,DataView:A.bJ,Float32Array:A.bK,Float64Array:A.bL,Int16Array:A.bM,Int32Array:A.bN,Int8Array:A.bO,Uint16Array:A.bP,Uint32Array:A.bQ,Uint8ClampedArray:A.aW,CanvasPixelArray:A.aW,Uint8Array:A.aX})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.ap.$nativeSuperclassTag="ArrayBufferView"
A.b7.$nativeSuperclassTag="ArrayBufferView"
A.b8.$nativeSuperclassTag="ArrayBufferView"
A.aT.$nativeSuperclassTag="ArrayBufferView"
A.b9.$nativeSuperclassTag="ArrayBufferView"
A.ba.$nativeSuperclassTag="ArrayBufferView"
A.aU.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$0=function(){return this()}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.jL
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=docs.dart.js.map

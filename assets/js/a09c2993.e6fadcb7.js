(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{106:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(t),f=n,d=s["".concat(i,".").concat(f)]||s[f]||b[f]||c;return t?o.a.createElement(d,a(a({ref:r},l),{},{components:t})):o.a.createElement(d,a({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=f;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},93:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(7),c=(t(0),t(106)),i={title:"\u9879\u76ee\u4ecb\u7ecd",slug:"/"},a={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"\u9879\u76ee\u4ecb\u7ecd",description:"Derrick \u662f\u4e00\u4e2a\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u5bb9\u5668\u5316\u5e94\u7528\u7684\u5de5\u5177\u3002Derrick \u9002\u7528\u4e8e\u672c\u5730\u5f00\u53d1\u73af\u5883\uff0c\u80fd\u591f\u81ea\u52a8\u68c0\u6d4b\u9879\u76ee\u7684\u8bed\u8a00\u6846\u67b6\uff0c\u7136\u540e\u81ea\u52a8\u751f\u6210\u5bb9\u5668\u5316\u6240\u9700\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5305\u62ec\u4e0d\u9650\u4e8e\uff1a",source:"@site/docs/introduction.md",slug:"/",permalink:"/derrick/docs/",editUrl:"https://github.com/alibaba/derrick/edit/master/website/docs/introduction.md",version:"current",sidebar:"docs",next:{title:"\u9879\u76ee\u8bbe\u8ba1",permalink:"/derrick/docs/design"}},u=[],l={toc:u};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Derrick \u662f\u4e00\u4e2a\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u5bb9\u5668\u5316\u5e94\u7528\u7684\u5de5\u5177\u3002Derrick \u9002\u7528\u4e8e\u672c\u5730\u5f00\u53d1\u73af\u5883\uff0c\u80fd\u591f\u81ea\u52a8\u68c0\u6d4b\u9879\u76ee\u7684\u8bed\u8a00\u6846\u67b6\uff0c\u7136\u540e\u81ea\u52a8\u751f\u6210\u5bb9\u5668\u5316\u6240\u9700\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5305\u62ec\u4e0d\u9650\u4e8e\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Dockerfile"),Object(c.b)("li",{parentName:"ul"},"Kubernetes \u8d44\u6e90\u5b9a\u4e49"),Object(c.b)("li",{parentName:"ul"},"Helm Chart \u6a21\u677f"),Object(c.b)("li",{parentName:"ul"},"Kustomize \u6a21\u677f"),Object(c.b)("li",{parentName:"ul"},"\u66f4\u591a\u5728\u5b9e\u73b0\u4e2d (\u5982 Terraform \u6a21\u677f\u7b49)")),Object(c.b)("p",null,"\u8fd9\u4e9b\u914d\u7f6e\u6587\u4ef6\u80fd\u591f\u5e2e\u52a9\u7528\u6237\u6784\u5efa\u5bb9\u5668\u955c\u50cf\uff0c\u5229\u7528\u4e91\u8d44\u6e90\u642d\u8d77 k8s \u7b49\u57fa\u7840\u8bbe\u65bd,\u90e8\u7f72\u5230 K8s \u4e2d\uff0c\u7ba1\u7406\u4e0d\u540c\u73af\u5883\u7684\u914d\u7f6e\uff0c\u7b49\u7b49\u3002\u603b\u800c\u8a00\u4e4b\uff0cDerrick \u80fd\u591f\u5e2e\u52a9\u5f00\u53d1\u8005\u964d\u4f4e\u5bb9\u5668\u5316\u95e8\u69db\uff0c\u7b80\u5316\u90e8\u7f72\u64cd\u4f5c\u3002"))}p.isMDXComponent=!0}}]);
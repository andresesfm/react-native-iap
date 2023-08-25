"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[266],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(d,".").concat(m)]||u[m]||l[m]||o;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var d in r)hasOwnProperty.call(r,d)&&(c[d]=r[d]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8354:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const o={},i="validateReceiptAndroid",c={unversionedId:"api-reference/methods/android/validate-receipt-android",id:"api-reference/methods/android/validate-receipt-android",title:"validateReceiptAndroid",description:"Validate receipt.",source:"@site/docs/api-reference/methods/android/validate-receipt-android.md",sourceDirName:"api-reference/methods/android",slug:"/api-reference/methods/android/validate-receipt-android",permalink:"/docs/api-reference/methods/android/validate-receipt-android",draft:!1,editUrl:"https://github.com/dooboolab-community/react-native-iap/edit/main/docs/docs/api-reference/methods/android/validate-receipt-android.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"flushFailedPurchasesCachedAsPendingAndroid",permalink:"/docs/api-reference/methods/android/flush-failed-purchases-cached-as-pending-android"},next:{title:"validateReceiptAmazon",permalink:"/docs/api-reference/methods/amazon/validate-receipt-amazon"}},d={},s=[{value:"Signature",id:"signature",level:2},{value:"Usage",id:"usage",level:2}],p={toc:s},u="wrapper";function l(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"validatereceiptandroid"},(0,a.kt)("inlineCode",{parentName:"h1"},"validateReceiptAndroid")),(0,a.kt)("p",null,"Validate receipt."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This method is here for debugging purposes only. Including your\naccess token in the binary you ship to users is potentially dangerous.\nUse server side validation instead for your production builds.")),(0,a.kt)("h2",{id:"signature"},"Signature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"validateReceiptAndroid(\n  /** package name of your app. */\n  packageName: string,\n\n  /** product id for your in app product. */\n  productId: string,\n\n  /** token for your purchase. */\n  productToken: string,\n\n  /** accessToken from googleApis. */\n  accessToken: string,\n\n  /** whether this is a subscription or in-app product. `true` for subscription. */\n  isSub?: boolean,\n): Promise<ProductPurchase | SubscriptionPurchase>;\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport {Button} from 'react-native';\nimport {validateReceiptAndroid} from 'react-native-iap';\n\nconst App = () => {\n  const handlePurchase = async () => {\n    const response = await validateReceiptAndroid({\n      packageName: purchase.packageNameAndroid, \n      productId: purchase.productId, \n      productToken: purchase.purchaseToken, \n      accessToken: 'your-access-token', \n      isSub: true\n  });\n  };\n\n  return <Button title=\"Purchase\" onPress={handlePurchase} />;\n}\n")))}l.isMDXComponent=!0}}]);
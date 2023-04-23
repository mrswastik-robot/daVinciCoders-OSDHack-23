(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7hDj":function(module,e,t){"use strict";var r=t("RIqP"),n=t.n(r),a=t("3tO9"),o=t.n(a),i=t("q1tI"),u=t.n(i),c=t("qhky"),s=t("17x9"),l=t.n(s),d=t("MnCE"),g=t("8cuT"),p=t("pR6o"),f=t("+LJP"),v=t("TGWU"),m=t("sQ/U"),b=t("ti7j"),y=t("cVIm"),h=t("ROEb"),w=t("KMW/"),O=t("fRvP"),C=t.n(O),S,j="SEO";null===(S=w.a.addDefaults)||void 0===S||S.call(w.a,[C.a]);var L,k={get:function get(e,t){return w.a.get("SEO",e,t)},preview:function preview(e,t,r){return w.a.preview("SEO",e,t)}},R=t("lSNA"),x=t.n(R),P="seoRules",T="Metatag Rules",I="entityKeywords",M="Entity Keywords",E="sitemapOverrides",N="Sitemap Overrides",A="05912e90e83346abb96c261bf458b615",D,H=["index","enterprise","pages","courses","course-reviews","collections","instructors","partners","onDemandSpecializations","lectures","domainsAndSubdomains","queries","professional-certificate","university-programs","mastertrack","guided-projects"],U=["www","ca","es","de","fr","gb","in","jp","kr","mx","pt","ru","cn","tw"].reduce((function(e,t){return o()(o()({},e),{},x()({},t,"".concat(t,".coursera.org")))}),{}),F="resourceType",K=function getTransloaditConfig(e,t){switch(e){case"entityKeywords":if(t)return{key:A,templateId:"1ba1ae05ff3e4a559749b7e369fe0566"};return{key:A,templateId:"923892bf26ff48d9a1c7e4f0018a9413"};case"seoRules":if(t)return{key:A,templateId:"6d41047994d340da826153f711a45eba"};return{key:A,templateId:"3202578006bd11e8af18993749f06ea2"};case"sitemapOverrides":if(t)return{key:A,templateId:"db3cc4d3b2704694a98aee59aeb25976"};return{key:A,templateId:"0307ea835d0e4f57919a9c0b29a1230e"};default:return{key:"",templateId:""}}},z="seo-override.json",B="seo-override-test.json",W="entityKeywords-test.json",J="entityKeywords.json",q="sitemap-override-test.json",G="sitemap-override.json",Y=35,V="metatag-overrides.json",X=function confirmLocalUpload(e){var t,r;switch(e){case"entityKeywords":r="keywords",t="Entity Keywords";break;case"seoRules":r="metatag rules",t="Metatag Rules";break;case"sitemapOverrides":r="overrides",t="Sitemap Overrides";break;default:return r="",t="",""}return'Your file contains valid JSON. Clicking "yes" will overwrite the current '.concat(r," visible in the ").concat(t," Preview, but will not upload them to S3. Are you sure you want to proceed?")},Q=function editorContentSet(e){var t,r;switch(e){case"entityKeywords":r="entity keywords",t="Entity Keywords";break;case"seoRules":r="metatag overrides",t="Metatag Rules";break;case"sitemapOverrides":r="sitemap overrides",t="Sitemap Overrides";break;default:return r="",t="",""}return"New ".concat(r," written to the ").concat(t," Preview. Please verify the above window contains your ").concat(r," and that they are formatted correctly.")},Z=function editorContentNotSet(e){var t,r;switch(e){case"entityKeywords":r="keywords",t="Entity Keywords";break;case"seoRules":r="overrides",t="Metatag Rules";break;case"sitemapOverrides":r="sitemap overrides",t="Sitemap Overrides";break;default:return r="",t="",""}return"Could not set ".concat(r," in the ").concat(t," Preview.")},ee="Your file is either not valid JSON or could not be read. Please upload a valid JSON file.",te=t("f2vG"),re={regex:[],absolute:[]},ne=null;setInterval((function(){ne=null}),864e5);var ae=function fetchSeoRules(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(ne)return Promise.resolve(ne);var t=k.get("useSeoEditorTestFiles"),r=t?"seo-override-test.json":"seo-override.json",n=e?"https://s3.amazonaws.com/coursera-assets/seo-json-assets/".concat(r):"".concat(y.a.url.base).concat(r);return fetch(n,{cache:e?"no-cache":"default"}).then((function(e){var t=e.json();return ne=t,t}),(function(){return h.a.warn("Could not fetch SEO override rules, returning empty rules."),re}))},oe=function getSeoRules(e,t){var r=e.location,n=e.isInternalTool,a=void 0!==n&&n,o=t.dispatch;return ae(a).then((function(e){if(r){var t=Object(te.c)(r,e);o("UPDATE_SEO_RULES",t)}else o("UPDATE_SEO_RULES",e)})).catch((function(){return o("UPDATE_SEO_RULES",re)}))},ie=function getSeoRulesForNextApp(){return ae().catch((function(){return re}))},ue=function updateRules(e,t){var r;(0,e.dispatch)("UPDATE_SEO_RULES",t)},ce=t("yzzz"),se=t("YrOX"),le=t("fw5G"),de=t.n(le),ge={www:[{type:"language",languageCode:"en",courseraLocale:"en"}]},pe={de:[{type:"language",languageCode:"de",courseraLocale:"de"}],in:[{type:"region",countryName:"India",countryCode:"in",languageCode:"en",courseraLocale:"en-in"}],mx:[{type:"region",countryName:"Mexico",countryCode:"mx",languageCode:"es",courseraLocale:"es-mx"}],gb:[{type:"region",countryName:"Great Britain",countryCode:"gb",languageCode:"en",courseraLocale:"en-gb"}],jp:[{type:"region",countryName:"Japan",countryCode:"jp",languageCode:"ja",courseraLocale:"ja-jp"}],tw:[{type:"region",countryName:"Taiwan",countryCode:"tw",languageCode:"zh-tw",courseraLocale:"zh-tw"}],cn:[{type:"region",countryName:"China",countryCode:"cn",languageCode:"zh",courseraLocale:"zh-cn"}],kr:[{type:"region",countryName:"Korea",countryCode:"kr",languageCode:"ko",courseraLocale:"ko-kr"}],ca:[{type:"region",countryName:"Canada",countryCode:"ca",languageCode:"en",courseraLocale:"en-ca"}]},fe={de:[{type:"language",languageCode:"de",courseraLocale:"de"}],es:[{type:"language",languageCode:"es",courseraLocale:"es"}],fr:[{type:"language",languageCode:"fr",courseraLocale:"fr"}],gb:[{type:"region",countryName:"Great Britain",countryCode:"gb",languageCode:"en",courseraLocale:"en-gb"}],in:[{type:"region",countryName:"India",countryCode:"in",languageCode:"en",courseraLocale:"en-in"}],mx:[{type:"region",countryName:"Mexico",countryCode:"mx",languageCode:"es",courseraLocale:"es-mx"}],pt:[{type:"region",countryName:"Brazil",countryCode:"br",languageCode:"pt",courseraLocale:"pt-br"},{type:"language",languageCode:"pt",courseraLocale:"pt"}],ru:[{type:"language",languageCode:"ru",courseraLocale:"ru"}]},ve=o()(o()(o()({},fe),pe),ge);function isCourseraCountryId(e){return!!pe[e]}function isLegacyCourseraCountryId(e){return!!fe[e]}function getKnownSubdomainFromHost(e){var t,r=null==e?void 0:null===(t=e.split("."))||void 0===t?void 0:t[0];if(r&&isCourseraCountryId(r))return r;return}function getLegacySubdomainFromHost(e){var t,r=null==e?void 0:null===(t=e.split("."))||void 0===t?void 0:t[0];if(r&&isLegacyCourseraCountryId(r))return r;return}var me=function get(){var e,t,r;return getKnownSubdomainFromHost(null===(e=window)||void 0===e?void 0:null===(t=e.location)||void 0===t?void 0:t.hostname)},be=function getLegacySubdomainCountryCode(){var e,t,r;return getLegacySubdomainFromHost(null===(e=window)||void 0===e?void 0:null===(t=e.location)||void 0===t?void 0:t.hostname)},ye=function isInternationalSubdomain(){return!(!me()&&!be())},he=me,we=ye,Oe=t("zXDh"),Ce=60,Se=250,je=function removeLineBreakFromString(e){return e.replace(/(\r\n|\n|\r)/gm," ")},Le=function limitDescriptionLength(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Se;return e.length>t?"".concat(e.substring(0,e.lastIndexOf(String.fromCharCode(32),t-4)+1),"..."):e},ke=function isSubdomainWWW(e){return"www"===e||"pagetest"===e||"staging"===e},Re=function isProductPrimaryLanguageOnSupportedLanguageDomain(e,t){if(e===t)return!0;if(ke(t)&&"en"===e)return!0;if("pt"===t&&"pt-BR"===e)return!0;if(ke(t)&&"pt-BR"!==e&&!Oe.supportedLanguageSubdomains.includes(e))return!0;return!1},xe=function getPageUrl(e,t){if(!(e||t.hostname&&t.protocol))return null;var r;return e||"https://".concat(t.hostname).concat(t.pathname)},Pe=function getPageSubdomainAndPath(e,t){var r=xe(e,t);if(!r)return null;if(r.indexOf("https://coursera.org")>=0||!r.includes(".coursera.org"))return null;var n=new de.a(r);return{subdomain:n.host().split(".")[0],path:n.path()}},Te=function getSubdomainDetails(e,t){var r=Pe(t,e),n=null==r?void 0:r.subdomain,a;return{pageSubdomainAndPathname:r,pageSubdomain:n,isInternationalSubdomain:!ke(n)}},Ie=new de.a(y.a.url.base),Me=Ie.host().split(".").slice(1).join(".");function generateHref(e,t){var r=e.pathname,n;return new de.a("https://".concat(t,".").concat(Me)).setPath(r).toString()}var Ee=function defaultHrefLangOverrides(e,t){var r=t.query,n;if(t.hash||Object.keys(r).length)return[];return e};function generateHreflangLinks(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ee,r=arguments.length>2?arguments[2]:void 0,a;a=r?r.map((function(e){return o()(o()({},e),{},{rel:"alternate"})})):Object.keys(ve).flatMap((function(t){var r;return ve[t].flatMap((function(r){return{rel:"alternate",hreflang:r.courseraLocale,href:generateHref(e,t)}}))}));var i=[{rel:"alternate",hreflang:"x-default",href:generateHref(e,"www")}].concat(n()(a));if(r)return i;if(t)return t(i,e);return i}function generateLinkTagsForPaginatedPages(e,t,r){var n=e.absolutePageHref,a=e.absolutePrevPageHref,o=e.absoluteNextPageHref,i=e.canonicalLinkHrefOverride,u=e.productLocale,c=[],s=xe(n,t),l;if(u&&s){var d=Object.keys(ve).find((function(e){return ve[e].find((function(e){return e.courseraLocale===u.toLowerCase()}))})),g=new de.a(s),p;p=d?"".concat(d,".").concat(Me):Ie.host(),g.setHost(p),l=g.toString()}var f=(null==r?void 0:r.canonicalLinkHrefOverride)||i||l;return f&&c.push({rel:"canonical",href:f}),a&&c.push({rel:"prev",href:a}),o&&c.push({rel:"next",href:o}),c}var Ne=generateHref,Ae=t("0XPj"),De=t.n(Ae),He=t("R23d");function getMetaDescription(e,t,r,n){if(null!=r&&r.description&&Object.prototype.hasOwnProperty.call(r,"description"))return n?Le(r.description,n):r.description;var a=t.disableDescLimit,o=void 0!==a&&a,i=t.description,u=t.descriptionSuffix,c=t.disableCourseraDescriptionSuffix,s=void 0!==c&&c,l=e("Learn online and earn valuable credentials from top universities like Yale, Michigan, Stanford, and leading companies like Google and IBM. Join Coursera for free and transform your career with degrees, certificates, Specializations, & MOOCs in data science, computer science, business, and dozens of other topics."),d=i||"",g=s?d:"".concat(d," ").concat(l),p=je(g),f=Le(p,n),v=u?"".concat(f," ").concat(u):f;return i&&!o?v:p.trim()}var Ue=function checkIfPageHasBlackListedUrlParams(e){return Boolean(De()(He.b,e).length)};function generateMetaTitle(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;if(null!=n&&n.title&&Object.prototype.hasOwnProperty.call(n,"title"))return n.title;var a=t("Coursera | Online Courses & Credentials From Top Educators. Join for Free");return r?e||a:t("#{title} | Coursera",{title:e||a})}function generateMetaNameAndProperties(e,t,r,n){var a=t.absolutePageHref,o=t.disableCrawlerIndexing,i=void 0!==o&&o,u=t.useFollowForDisablingIndexing,c=void 0!==u&&u,s=t.enableViewportFitCover,l=t.productPrimaryLanguage,d=t.ogAndTwitterTitle,g=t.twitterCardWithLargeImage,p=t.title,f=t.disableCourseraSuffix,v=void 0!==f&&f,m=t.absoluteImageHref,b=void 0===m?He.c:m,y=t.descriptionLengthLimit,h,w=getMetaDescription(e,t,n,void 0===y?Se:y),O=getMetaDescription(e,t,n,Ce),C=[{name:"description",content:w},{name:"image",content:b},{property:"og:title",content:d||generateMetaTitle(p,e,v,n)},{property:"og:description",content:w},{property:"og:image",content:b},{property:"twitter:title",content:d||generateMetaTitle(p,e,v,n)},{property:"twitter:description",content:O},{property:"twitter:image:src",content:b},{property:"twitter:image",content:b},{property:"twitter:card",content:g?"summary_large_image":"summary"}];s&&C.push({property:"viewport",content:"width=device-width, initial-scale=1, viewport-fit=cover"});var S=n&&Object.prototype.hasOwnProperty.call(n,"disableCrawlerIndexing")?n.disableCrawlerIndexing:i,j=n&&Object.prototype.hasOwnProperty.call(n,"useFollowForDisablingIndexing")?n.useFollowForDisablingIndexing:c,L=Te(r,a),k=L.pageSubdomainAndPathname,R=L.pageSubdomain,x=Ue(Object.keys(r.query)),P=l&&k&&!Re(l,k.subdomain),T;return(R&&He.a.includes(R)||x||P||S)&&C.push({name:"robots",content:j?"noindex, follow":"noindex, nofollow"}),a&&C.push({property:"og:url",content:a}),C}var Fe=function generateOverrideRuleFromMetaTags(e){var t=e.canonicalURL,r=e.disableCrawlerIndexing,n=e.descriptionTag,a=e.titleTag;return{disableCrawlerIndexing:null===r?void 0:r,title:null!=a?a:void 0,description:null!=n?n:void 0,canonicalLinkHrefOverride:null!=t?t:void 0}},_e=getMetaDescription,Ke=Ue,ze=t("hS5U"),Be=t.n(ze),We=t("TjYC"),Je=t.n(We),qe=function CourseraMetatagsBaseComponent(e,t){var r=t.router.location,a,s=Object(se.b)().metaTags,l=e.metaNameAndProperties,d=e.hrefLangOverrides,g=e.paginationProperties,p=void 0===g?{}:g,f=e.seoOverrideRule,v=l.title,m=l.disableCourseraSuffix,b=Object(i.useMemo)((function(){var e;s?e=Fe(s):null!=f&&f.length&&(e=Object(te.d)(f));var t=Je.a.merge(Be.a),a=generateMetaTitle(v,t,m,e),i=generateHreflangLinks(r,d,null==s?void 0:s.hreflangLinks),u=generateLinkTagsForPaginatedPages(p,r,e),c=!d&&0===i.length,g;return{title:a,meta:generateMetaNameAndProperties(t,o()(o()({},l),{},{disableCrawlerIndexing:c||l.disableCrawlerIndexing}),r,e),link:[].concat(n()(i),n()(u))}}),[m,d,r,l,s,p,f,v]);return u.a.createElement(c.a,b)};qe.contextTypes={router:l.a.object.isRequired,fluxibleContext:l.a.object};var Ge=function CourseraMetatags(e,t){var r=t.router.location.pathname,n=Object(v.a)().hostname;return u.a.createElement(ce.a,{path:n+r,shouldSkip:!Object(te.b)()},u.a.createElement(qe,e))};Ge.contextTypes={router:l.a.object.isRequired,fluxibleContext:l.a.object};var Ye=Object(d.a)((function(){return m.a.isAuthenticatedUser()}),Object(d.o)((function(e){return e})),Object(d.b)(Object(d.o)((function(e){return o()(o()({},e),{},{appName:"search-v2"})})),Object(d.a)((function(e){var t=e.appName,r;return b.a.get("seoOverrideEnabledApps").includes(t)}),Object(d.b)(Object(f.a)((function(e){var t;return{location:e.location}})),Object(g.a)(["SeoRulesStore"],(function(e,t){var r=e.SeoRulesStore.seoRules;return o()(o()({},t),{},{seoRules:r})})),Object(d.a)((function(e){var t;return!e.seoRules}),Object(p.a)((function(e,t){var r=e.executeAction,n=t.location;r(oe.bind(null,{location:n,isInternalTool:!1}))})),Object(d.o)((function(e){return e}))),Object(g.a)(["SeoRulesStore"],(function(e,t){return o()(o()({},t),{},{seoOverrideRule:e.SeoRulesStore.getData()})}))))))(Ge),Ve=qe,Xe=t("VbXa"),Qe=t.n(Xe),Ze=function(e){function SimpleCourseraMetatags(t){var r,n;return n=e.call(this,t)||this,null!==(r=t.seoOverrideRule)&&void 0!==r&&r.length&&(n.overrideRule=Object(te.d)(t.seoOverrideRule)),n}var t;return Qe()(SimpleCourseraMetatags,e),SimpleCourseraMetatags.prototype.render=function render(){var e=this.props,t=e.title,r=e.disableCourseraSuffix,n=Je.a.merge(Be.a),a=this.context.router.location;return u.a.createElement(c.a,{title:generateMetaTitle(t,n,r,this.overrideRule),meta:generateMetaNameAndProperties(n,this.props,a,this.overrideRule)})},SimpleCourseraMetatags}(u.a.Component);Ze.contextTypes={router:l.a.object};var $e=Object(d.a)((function(){return m.a.isAuthenticatedUser()}),Object(d.o)((function(e){return e})),Object(d.b)(Object(d.o)((function(e){return o()(o()({},e),{},{appName:"search-v2"})})),Object(d.a)((function(e){var t=e.appName,r;return b.a.get("seoOverrideEnabledApps").includes(t)}),Object(d.b)(Object(f.a)((function(e){var t;return{location:e.location}})),Object(g.a)(["SeoRulesStore"],(function(e,t){var r=e.SeoRulesStore.seoRules;return o()(o()({},t),{},{seoRules:r})})),Object(d.a)((function(e){var t;return!e.seoRules}),Object(p.a)((function(e,t){var r=e.executeAction,n=t.location;r(oe.bind(null,{location:n,isInternalTool:!1}))})),Object(d.o)((function(e){return e}))),Object(g.a)(["SeoRulesStore"],(function(e,t){return o()(o()({},t),{},{seoOverrideRule:e.SeoRulesStore.getData()})}))))))(Ze);t.d(e,"a",(function(){return Ye}))},TjYC:function(module,exports,e){var t=e("c0gT"),r=t.default?t.default:{},n,a=(0,e("HdzH").default)(r);a.getLocale=function(){return"en"},module.exports=a},c0gT:function(module,exports){exports.default={"ar":true,"de":true,"es":true,"fr":true,"id":true,"ja":true,"kk":true,"ko":true,"pt":true,"ru":true,"tr":true,"uk":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},fRvP:function(module,exports){module.exports={name:"SEO",parameters:[{name:"useSeoEditorTestFiles",valid:[!0,!1],value:!1},{name:"shouldOptimizeMobileWebBrowsePage",valid:[!0,!1],value:!1},{name:"addContextualLinksToBrowseAndEntityPages",valid:[!0,!1],value:!1},{name:"showNewDirectoryApp",valid:[!0,!1],value:!1},{name:"enableNewDirectoryApp",valid:[!0,!1],value:!1}]}}}]);
//# sourceMappingURL=en.8.4f43aaa14c3483340c14.js.map
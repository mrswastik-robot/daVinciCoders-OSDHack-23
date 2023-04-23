(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["braze"],{"./src/udemy/js/braze/bootstrap.js":function(n,e,t){"use strict";t.r(e);t.d(e,"bootstrap",(function(){return S}));t.d(e,"bootstrapSubcategoryPage",(function(){return b}));t.d(e,"bootstrapCourseLandingPage",(function(){return f}));var r=t("./node_modules/@braze/web-sdk/appboy.min.js");var s=t.n(r);var i=t("./src/udemy/js/gql-codegen/api-platform-graphql.ts");var a=t("./src/udemy/js/utils/get-config-data.js");var o=t("./src/udemy/js/utils/get-request-data.js");var u=t("./src/udemy/js/utils/server-or-client.ts");var c=t("./src/udemy/js/utils/ud-api.js");var d=t("./src/udemy/js/utils/ud-api-stat.js");var l=t("./src/udemy/js/utils/ud-me.js");var p=t("./src/udemy/js/utils/ud-raven.js");var y=t("./src/udemy/js/utils/ud-user-agnostic-tracking-params.js");async function S(){window.appboy=s.a;const n=Object(a["a"])();const e=Object(o["a"])();const t=n.env==="PROD"?"5cefca91-d218-4b04-8bdd-c8876ec1908d":"4aa844ae-1f20-4f99-aeb9-3307f28c861d";const r=s.a.initialize(t,{baseUrl:"sdk.iad-03.braze.com",safariWebsitePushId:n.env==="PROD"?"web.com.udemy.prod":"web.com.udemy",allowUserSuppliedJavascript:true,contentSecurityNonce:window.nonceValue,enableSdkAuthentication:true,devicePropertyAllowlist:["browser","browserVersion","os","resolution","timeZone","userAgent"]});if(r===undefined||r===false){d["b"].increment("braze.web_sdk.initialized",{outcome:"fail"})}else{d["b"].increment("braze.web_sdk.initialized",{outcome:"success"})}s.a.openSession();if(l["a"].is_authenticated){const n=await g();s.a.changeUser(l["a"].id,n);s.a.subscribeToSdkAuthenticationFailures((n=>{if(n.userId==l["a"].id){g().then((n=>{s.a.setSdkAuthenticationSignature(n)}))}d["b"].increment("braze.web_sdk.authentication_failed",{code:n.errorCode})}))}else{const t=s.a.getUser();t.setCountry(n.marketplace_country.id);t.setLanguage(e.language)}if(y["a"].page_key==="discovery_subcategory"&&s.a.isPushSupported()&&!s.a.isPushBlocked()&&s.a.isPushPermissionGranted()){b(s.a)}if(u["a"].global.location.href.match(/http(s)?:\/\/.*\/course\/.*/gm)){f(s.a)}return s.a}function b(n){const e=document.querySelector(".ud-component--category--category");const t=e?JSON.parse(e.getAttribute("data-component-props")):{};if(t.pageObject){const e=t.pageObject.id;n.logCustomEvent("Viewed subcategory page",{subcategory_id:e})}}async function f(n){const e=document.body.getAttribute("data-clp-course-id");if(e){let t={};try{const n=await i["e"].fetcher({featureCodes:["web_push_optin_display"]})();const e=n.featureVariantAssignmentsByCodeAndAttributes;e.forEach((n=>{if(n.featureCode==="web_push_optin_display"){t=n.configuration}}))}catch(n){}n.logCustomEvent("Viewed CLP",{course_id:e,experiment:t.showModal});n.subscribeToInAppMessage((e=>{let t=true;if(e instanceof n.InAppMessage){const r=e.extras["msg-id"];if(r==="push-primer"){if(!n.isPushSupported()||n.isPushBlocked()){t=false}}}if(t){n.display.showInAppMessage(e)}}))}}async function g(){try{const n=await c["f"].get("/braze/auth/");return n.data.jwt}catch(n){p["a"].captureException(n)}}},"./src/udemy/js/gql-codegen/api-platform-graphql.ts":function(n,e,t){"use strict";var r=t("./node_modules/react-query/es/index.js");var s=t("./node_modules/js-cookie/src/js.cookie.js");var i=t.n(s);var a=undefined&&undefined.__awaiter||function(n,e,t,r){function s(n){return n instanceof t?n:new t((function(e){e(n)}))}return new(t||(t=Promise))((function(t,i){function a(n){try{u(r.next(n))}catch(n){i(n)}}function o(n){try{u(r["throw"](n))}catch(n){i(n)}}function u(n){n.done?t(n.value):s(n.value).then(a,o)}u((r=r.apply(n,e||[])).next())}))};const o=()=>{const n=i.a.getJSON()||{};if(n.ud_locale){const e=n.ud_locale.split("_").join("-");return{"Accept-Language":e}}};const u=(n,e,t)=>()=>a(void 0,void 0,void 0,(function*(){let r;if(t&&"_signal"in t){r=t._signal;delete t._signal}const s=yield fetch("/api/2022-03/graphql/",{method:"POST",headers:Object.assign(Object.assign({"Content-Type":"application/json"},o()),t!==null&&t!==void 0?t:{}),body:JSON.stringify({query:n,variables:e}),signal:r});const i=yield s.json();if(i.errors){const{message:n}=i.errors[0]||"Error..";throw new Error(n)}return i.data}));t.d(e,"a",(function(){return S}));t.d(e,"b",(function(){return g}));t.d(e,"c",(function(){return m}));t.d(e,"h",(function(){return E}));t.d(e,"d",(function(){return h}));t.d(e,"g",(function(){return R}));t.d(e,"i",(function(){return v}));t.d(e,"j",(function(){return N}));t.d(e,"f",(function(){return w}));t.d(e,"e",(function(){return M}));var c;(function(n){n["ClosedCaption"]="CLOSED_CAPTION";n["Subtitle"]="SUBTITLE"})(c||(c={}));var d;(function(n){n["Cplusplus"]="CPLUSPLUS";n["CsvProcessingWithPython"]="CSV_PROCESSING_WITH_PYTHON";n["CSharp"]="C_SHARP";n["CSharp_11"]="C_SHARP_11";n["Html"]="HTML";n["JavascriptEs6"]="JAVASCRIPT_ES6";n["Java_9"]="JAVA_9";n["Java_11"]="JAVA_11";n["Java_17"]="JAVA_17";n["Php_5"]="PHP_5";n["Php_7"]="PHP_7";n["Python_3_5"]="PYTHON_3_5";n["Python_3_8"]="PYTHON_3_8";n["Python_3_10"]="PYTHON_3_10";n["React_16"]="REACT_16";n["Ruby"]="RUBY";n["R_3_6"]="R_3_6";n["Scipy_1_4NumpyPandasSympyAndScikitLearn_0_23"]="SCIPY_1_4_NUMPY_PANDAS_SYMPY_AND_SCIKIT_LEARN_0_23";n["Sql"]="SQL";n["Sqlite_3"]="SQLITE_3";n["Swift_3"]="SWIFT_3";n["Swift_5"]="SWIFT_5"})(d||(d={}));var l;(function(n){n["Cpe"]="CPE"})(l||(l={}));var p;(function(n){n["Rating"]="RATING";n["Relevance"]="RELEVANCE";n["Reviews"]="REVIEWS";n["Time"]="TIME"})(p||(p={}));var y;(function(n){n["Aud"]="AUD";n["Brl"]="BRL";n["Cad"]="CAD";n["Dkk"]="DKK";n["Eur"]="EUR";n["Gbp"]="GBP";n["Idr"]="IDR";n["Ils"]="ILS";n["Inr"]="INR";n["Jpy"]="JPY";n["Krw"]="KRW";n["Mxn"]="MXN";n["Nok"]="NOK";n["Pln"]="PLN";n["Rub"]="RUB";n["Sgd"]="SGD";n["Thb"]="THB";n["Try"]="TRY";n["Twd"]="TWD";n["Usd"]="USD";n["Vnd"]="VND";n["Zar"]="ZAR"})(y||(y={}));var S;(function(n){n["Day"]="DAY";n["Month"]="MONTH";n["Week"]="WEEK";n["Year"]="YEAR"})(S||(S={}));var b;(function(n){n["AllLevels"]="ALL_LEVELS";n["Beginner"]="BEGINNER";n["Expert"]="EXPERT";n["Intermediate"]="INTERMEDIATE"})(b||(b={}));var f;(function(n){n["Af"]="AF";n["Ak"]="AK";n["Am"]="AM";n["Ar"]="AR";n["As"]="AS";n["Az"]="AZ";n["Be"]="BE";n["Bg"]="BG";n["Bm"]="BM";n["Bn"]="BN";n["Bo"]="BO";n["Br"]="BR";n["Bs"]="BS";n["Ca"]="CA";n["Ce"]="CE";n["Cs"]="CS";n["Cu"]="CU";n["Cy"]="CY";n["Da"]="DA";n["De"]="DE";n["Dz"]="DZ";n["Ee"]="EE";n["El"]="EL";n["En"]="EN";n["Eo"]="EO";n["Es"]="ES";n["Et"]="ET";n["Eu"]="EU";n["Fa"]="FA";n["Ff"]="FF";n["Fi"]="FI";n["Fo"]="FO";n["Fr"]="FR";n["Fy"]="FY";n["Ga"]="GA";n["Gd"]="GD";n["Gl"]="GL";n["Gu"]="GU";n["Gv"]="GV";n["Ha"]="HA";n["He"]="HE";n["Hi"]="HI";n["Hr"]="HR";n["Hu"]="HU";n["Hy"]="HY";n["Ia"]="IA";n["Id"]="ID";n["Ig"]="IG";n["Ii"]="II";n["Is"]="IS";n["It"]="IT";n["Ja"]="JA";n["Jv"]="JV";n["Ka"]="KA";n["Ki"]="KI";n["Kk"]="KK";n["Kl"]="KL";n["Km"]="KM";n["Kn"]="KN";n["Ko"]="KO";n["Ks"]="KS";n["Ku"]="KU";n["Kw"]="KW";n["Ky"]="KY";n["Lb"]="LB";n["Lg"]="LG";n["Ln"]="LN";n["Lo"]="LO";n["Lt"]="LT";n["Lu"]="LU";n["Lv"]="LV";n["Mg"]="MG";n["Mi"]="MI";n["Mk"]="MK";n["Ml"]="ML";n["Mn"]="MN";n["Mr"]="MR";n["Ms"]="MS";n["Mt"]="MT";n["My"]="MY";n["Nb"]="NB";n["Nd"]="ND";n["Ne"]="NE";n["Nl"]="NL";n["Nn"]="NN";n["No"]="NO";n["Om"]="OM";n["Or"]="OR";n["Os"]="OS";n["Pa"]="PA";n["Pl"]="PL";n["Ps"]="PS";n["Pt"]="PT";n["PtBr"]="PT_BR";n["PtPt"]="PT_PT";n["Qu"]="QU";n["Rm"]="RM";n["Rn"]="RN";n["Ro"]="RO";n["Ru"]="RU";n["Rw"]="RW";n["Sd"]="SD";n["Se"]="SE";n["Sg"]="SG";n["Si"]="SI";n["Sk"]="SK";n["Sl"]="SL";n["Sn"]="SN";n["So"]="SO";n["Sq"]="SQ";n["Sr"]="SR";n["Su"]="SU";n["Sv"]="SV";n["Sw"]="SW";n["Ta"]="TA";n["Te"]="TE";n["Tg"]="TG";n["Th"]="TH";n["Ti"]="TI";n["Tk"]="TK";n["To"]="TO";n["Tr"]="TR";n["Tt"]="TT";n["Ug"]="UG";n["Uk"]="UK";n["Ur"]="UR";n["Uz"]="UZ";n["Vi"]="VI";n["Vo"]="VO";n["Wo"]="WO";n["Xh"]="XH";n["Yi"]="YI";n["Yo"]="YO";n["Zh"]="ZH";n["ZhCn"]="ZH_CN";n["ZhTw"]="ZH_TW";n["Zu"]="ZU"})(f||(f={}));var g;(function(n){n["Consumersubscription"]="CONSUMERSUBSCRIPTION";n["Enterprise"]="ENTERPRISE";n["Team"]="TEAM";n["Udemypro"]="UDEMYPRO"})(g||(g={}));var m;(function(n){n["Active"]="ACTIVE";n["Canceled"]="CANCELED";n["Expired"]="EXPIRED";n["Future"]="FUTURE";n["Trial"]="TRIAL"})(m||(m={}));var P;(function(n){n["Popular"]="POPULAR";n["Trending"]="TRENDING"})(P||(P={}));var _;(function(n){n["ExtraLong"]="EXTRA_LONG";n["ExtraShort"]="EXTRA_SHORT";n["Long"]="LONG";n["Medium"]="MEDIUM";n["Short"]="SHORT"})(_||(_={}));const A=`\n    query subjectAreas {\n  badgeCertificationSubjectAreas {\n    id\n    name\n  }\n}\n    `;const E=(n,e)=>Object(r["useQuery"])(n===undefined?["subjectAreas"]:["subjectAreas",n],u(A,n),e);E.getKey=n=>n===undefined?["subjectAreas"]:["subjectAreas",n];E.fetcher=(n,e)=>u(A,n,e);const T=`\n    query badgeClassIssuerFilters {\n  badgeClassIssuers {\n    id\n    name\n  }\n}\n    `;const h=(n,e)=>Object(r["useQuery"])(n===undefined?["badgeClassIssuerFilters"]:["badgeClassIssuerFilters",n],u(T,n),e);h.getKey=n=>n===undefined?["badgeClassIssuerFilters"]:["badgeClassIssuerFilters",n];h.fetcher=(n,e)=>u(T,n,e);const I=`\n    query LabSearchResponse($query: String!, $filters: [SearchAggregationInputOption!]) {\n  searchLabs(query: $query, filters: $filters) {\n    count\n    trackingId\n    labs {\n      id\n      title\n      description\n      learningOutcomes\n      activities\n      prerequisites\n      minEstimatedTime\n      maxEstimatedTime\n      instructors {\n        name\n      }\n      topics {\n        id\n      }\n      instructors {\n        name\n      }\n      metadata {\n        trackingId\n      }\n    }\n  }\n}\n    `;const R=(n,e)=>Object(r["useQuery"])(["LabSearchResponse",n],u(I,n),e);R.getKey=n=>["LabSearchResponse",n];R.fetcher=(n,e)=>u(I,n,e);const C=`\n    query SubscriptionPlansByProductType {\n  subscriptionPlansByProductType {\n    id\n    productType\n    urlLearnMore\n    urlExpressCheckout\n    priceOptions {\n      ... on MonthlySubscriptionPlanPricingOption {\n        id\n        listPrice {\n          amount\n          currency\n        }\n        renewalInterval {\n          type\n          count\n        }\n        trial {\n          dateInterval {\n            type\n            count\n          }\n        }\n      }\n      ... on AnnualSubscriptionPlanPricingOption {\n        id\n        listPrice {\n          amount\n          currency\n        }\n        annualSavings {\n          amount\n          currency\n        }\n        monthlyPrice {\n          amount\n          currency\n        }\n        renewalInterval {\n          type\n          count\n        }\n        trial {\n          dateInterval {\n            type\n            count\n          }\n        }\n      }\n    }\n  }\n}\n    `;const v=(n,e)=>Object(r["useQuery"])(n===undefined?["SubscriptionPlansByProductType"]:["SubscriptionPlansByProductType",n],u(C,n),e);v.getKey=n=>n===undefined?["SubscriptionPlansByProductType"]:["SubscriptionPlansByProductType",n];v.fetcher=(n,e)=>u(C,n,e);const O=`\n    query SubscriptionPlans {\n  subscriptionPlans {\n    id\n    listPrice {\n      amount\n      currency\n    }\n    renewalInterval {\n      type\n      count\n    }\n    trial {\n      dateInterval {\n        type\n        count\n      }\n    }\n    productType\n  }\n}\n    `;const N=(n,e)=>Object(r["useQuery"])(n===undefined?["SubscriptionPlans"]:["SubscriptionPlans",n],u(O,n),e);N.getKey=n=>n===undefined?["SubscriptionPlans"]:["SubscriptionPlans",n];N.fetcher=(n,e)=>u(O,n,e);const L=`\n    query FetchCurrentSubscriptionEnrollment {\n  currentSubscriptionEnrollment {\n    id\n    subscriber {\n      __typename\n      ... on Organization {\n        id\n      }\n      ... on User {\n        id\n      }\n    }\n    checkoutReference\n    trialInterval {\n      type\n      count\n    }\n    renewalInterval {\n      type\n      count\n    }\n    startDate\n    endDate\n    cancelDate\n    status\n    licenseCount\n  }\n}\n    `;const w=(n,e)=>Object(r["useQuery"])(n===undefined?["FetchCurrentSubscriptionEnrollment"]:["FetchCurrentSubscriptionEnrollment",n],u(L,n),e);w.getKey=n=>n===undefined?["FetchCurrentSubscriptionEnrollment"]:["FetchCurrentSubscriptionEnrollment",n];w.fetcher=(n,e)=>u(L,n,e);const j=`\n    query FeatureVariantAssignments($featureCodes: [String!]!, $realtimeAttributes: [FeatureRequestAttributeInput!]) {\n  featureVariantAssignmentsByCodeAndAttributes(\n    featureCodes: $featureCodes\n    realtimeAttributes: $realtimeAttributes\n  ) {\n    featureCode\n    configuration\n    isInExperiment\n    experimentIds\n  }\n}\n    `;const M=(n,e)=>Object(r["useQuery"])(["FeatureVariantAssignments",n],u(j,n),e);M.getKey=n=>["FeatureVariantAssignments",n];M.fetcher=(n,e)=>u(j,n,e)}}]);
//# sourceMappingURL=braze.69ceec9473c1112a5a94.js.map
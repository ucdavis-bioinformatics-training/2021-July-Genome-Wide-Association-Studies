
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"243",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OnetrustActiveGroups"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.category.pageType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.querySelector){var a=document.querySelector('meta[property\\x3d\"og:type\"]');return a?a.getAttribute(\"content\"):null}})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],";return a?a:b?b:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"string\"===typeof a?a.replace(\/\u0026(?![#a-z0-9]+?;)\/g,\"and\").replace(\"\\x26amp;\",\"and\"):a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"string\"===typeof a?a.replace(\/^\\s+\/,\"\").replace(\/\\s+$\/,\"\").replace(\/\\s+\/,\" \"):a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.contentType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",10],8,16],"||window._pageMetaData[\"WT.cg_s\"]||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],",b=",["escape",["macro",9],8,16],",c=",["escape",["macro",11],8,16],";return b(a(c))})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=73;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"))}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"OnetrustActiveGroups"
    },{
      "function":"__jsm",
      "convert_true_to":"true",
      "convert_false_to":"false",
      "vtp_javascript":["template","(function(){return\"string\"===typeof ",["escape",["macro",14],8,16],"\u0026\u00260\u003C",["escape",["macro",14],8,16],".length?-1!==",["escape",["macro",14],8,16],".indexOf(\",C0009,\"):!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.querySelectorAll(\"#div-gpt-ad-top-1\").length})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.querySelectorAll(\"#div-gpt-ad-right-2\").length})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "convert_false_to":"(not set)",
      "vtp_javascript":["template","(function(){return document.querySelectorAll?!!document.querySelectorAll('a[href*\\x3d\"sci-hub\"]').length:null})()();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.deliveryPlatform"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(JSON.parse\u0026\u0026document.querySelector){var a=document.querySelector('script[type\\x3d\"application\/ld+json\"]');return a?JSON.parse(a.textContent):null}return null})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",19],8,16],"||(",["escape",["macro",20],8,16],"?\"aws\":\"(not set)\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",22],8,16],"||window._pageMetaData.citation_journal_title||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],",b=",["escape",["macro",9],8,16],",c=",["escape",["macro",23],8,16],";return b(a(c))})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.article.doi"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",25],8,16],";return a?a:window._pageMetaData.citation_doi\u0026\u0026\"string\"===typeof window._pageMetaData.citation_doi?window._pageMetaData.citation_doi.replace(\/^doi:\/,\"\"):null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"string\"===typeof a?a.split(\"\/\").join(\"-\"):a}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.publishedAtString"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",28],8,16],"||window._pageMetaData.citation_date||null})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",27],8,16],",b=",["escape",["macro",29],8,16],";return a(b)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.publishedAt"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",31],8,16],";if(b)return b;try{var a=(new Date(window._pageMetaData.citation_date)).getTime();return a\u0026\u0026!isNaN(a)?a:null}catch(c){return null}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.issue"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",33],8,16],"||window._pageMetaData.citation_issue||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.volume"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",35],8,16],"||window._pageMetaData.citation_volume||null})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_true_to":"1",
      "convert_false_to":"0",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.authorization.status"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",37],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.legacy.webtrendsSiteID"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",39],8,16],"||window._pageMetaData.site_id||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.profile.profileInfo.profileID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",41],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsLicenceType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",43],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsContentCategory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",45],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.legacy.webtrendsContentCollection"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",47],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsContentGroup"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",49],8,16],"||window._pageMetaData.product_name||window._pageMetaData.citation_journal_title||null})();"]
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],",b=",["escape",["macro",9],8,16],",c=",["escape",["macro",50],8,16],";return b(a(c))})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsContentSubGroup"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",52],8,16],"||window._pageMetaData[\"WT.cg_s\"]||null})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsPrimaryArticleType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",54],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.category.legacy.webtrendsSubjectTerms"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",56],8,16],"||\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.cms"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",58],8,16],"||(",["escape",["macro",20],8,16],"?\"polopoly\":null)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.authors"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return(",["escape",["macro",60],8,16],"||[]).join(\";\")||window._pageMetaData.citation_authors||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.title"
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",62],8,16],"||window._pageMetaData.citation_title||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.attributes.template"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",64],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"version"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",66],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.search.keywords"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",9],8,16],",a=",["escape",["macro",68],8,16],";return a?b(a):\"(not set)\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.profile.profileInfo.bpid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",70],8,16],"||null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page.attributes.featureFlags"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return!!a\u0026\u0026Array===a.constructor}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,e){var b=",["escape",["macro",73],8,16],",d=[];if(b(a)){b=a.length;for(var c=0;c\u003Cb;++c)d.push(e(a[c]))}return d}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",72],8,16],"||[],c=",["escape",["macro",74],8,16],";return c(b,function(a){return\"string\"===typeof a?a+\"\\x3dtrue\":a.name?[a.name,!!a.active].join(\"\\x3d\"):\"\"}).join(\";\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.features"
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",74],8,16],",c=",["escape",["macro",76],8,16],"||[];return b(c,function(a){return a.name?[a.name,!!a.present].join(\"\\x3d\"):\"\"}).join(\";\")||null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",65],8,16],",a=",["escape",["macro",24],8,16],",b=",["escape",["macro",53],8,16],";b=\/^editorial$|^world view$|^muse$|^seven days$|^news$|^news q and a$|^news explainer$|^news feature$|^comment$|^books and arts$|^books and arts q and a$|^correspondence$|^obituary$|^news.*views$|^news and views forum$|^futures$|^toolbox$|^career news$|^career feature$|^career q and a$|^career brief$|^career column$|^spotlight$|^career guide$|^technology feature$|^outlook$|^nature index$|^introduction$|^outline$|^correction$|^retraction$|^clarification$|^research highlight$|^research highlights$|^nature podcast$|^innovations in$|^nature careers podcast$|^nature briefing$|^arts review$|^book review$|^essay$|^news round\/.test(b);\na=\/^nature$\/.test(a);return\/magazine\/.test(c)||!0===b\u0026\u0026!0===a?\"magazine\":\"not magazine\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",24],8,16],".concat(",["escape",["macro",78],8,16],");return\/^naturemagazine$\/.test(a)?\"magazine nature\":",["escape",["macro",78],8,16],"})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.collection.id"
    },{
      "function":"__j",
      "vtp_name":"Krux.user"
    },{
      "function":"__j",
      "vtp_name":"Krux.segments"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"mkt-key",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.documentType"
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"briefingRedirectSource"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"unsupported\";\"connection\"in navigator\u0026\u0026(a=navigator.connection.saveData?\"on\":\"off\");return a})();"]
    },{
      "function":"__v",
      "convert_null_to":"(not set)",
      "convert_undefined_to":"(not set)",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"briefingRedirectEid"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"acdid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"idp_marker"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"user.profile.profileInfo.resolvedBy"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"VSNUO",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"content.manuscript.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"content.journal.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"content.person.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"page.clicked"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"page.topTab"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.manuscript.ms_nm"
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","2","group",["macro",7]],["map","index","3","group",["macro",12]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",13]],["map","fieldName","anonymizeIp","value","true"],["map","fieldName","allowAdFeatures","value",["macro",15]]],
      "vtp_trackerName":"",
      "vtp_metric":["list",["map","index","1","metric",["macro",16]],["map","index","2","metric",["macro",17]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",18]],["map","index","4","dimension",["macro",21]],["map","index","5","dimension",["macro",24]],["map","index","6","dimension",["macro",26]],["map","index","8","dimension",["macro",30]],["map","index","9","dimension",["macro",32]],["map","index","10","dimension",["macro",34]],["map","index","11","dimension",["macro",36]],["map","index","12","dimension",["macro",38]],["map","index","13","dimension",["macro",40]],["map","index","14","dimension",["macro",42]],["map","index","16","dimension",["macro",44]],["map","index","17","dimension",["macro",46]],["map","index","18","dimension",["macro",48]],["map","index","19","dimension",["macro",51]],["map","index","20","dimension",["macro",53]],["map","index","21","dimension",["macro",55]],["map","index","22","dimension",["macro",57]],["map","index","23","dimension",["macro",59]],["map","index","25","dimension",["macro",61]],["map","index","26","dimension",["macro",63]],["map","index","27","dimension",["macro",65]],["map","index","28","dimension",["macro",67]],["map","index","30","dimension",["macro",69]],["map","index","60","dimension",["macro",12]],["map","index","61","dimension",["macro",71]],["map","index","63","dimension",["macro",75]],["map","index","72","dimension",["macro",77]],["map","index","74","dimension",["macro",79]],["map","index","65","dimension",["macro",80]],["map","index","1","dimension",["macro",81]],["map","index","2","dimension",["macro",82]],["map","index","75","dimension",["macro",83]],["map","index","78","dimension",["macro",84]],["map","index","80","dimension",["macro",85]],["map","index","79","dimension",["macro",86]],["map","index","81","dimension",["macro",87]],["map","index","82","dimension",["macro",88]],["map","index","84","dimension",["macro",80]],["map","index","86","dimension",["macro",89]],["map","index","90","dimension",["macro",90]],["map","index","91","dimension",["macro",90]],["map","index","92","dimension",["macro",91]],["map","index","102","dimension",["macro",92]],["map","index","104","dimension",["macro",93]],["map","index","105","dimension",["macro",94]],["map","index","106","dimension",["macro",95]],["map","index","107","dimension",["macro",96]],["map","index","108","dimension",["macro",97]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-71668177-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-track-action"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-title"
    },{
      "function":"__aev",
      "convert_case_to":1,
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],",b=",["escape",["macro",6],8,16],";return a?a:b?b:null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",109],8,16],";return a\u0026\u0026\"journal\"===a?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\";return a})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return!0===window.accessDetailsLoaded?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",109],8,16],";return!a||\"article\"!==a\u0026\u0026\"figure\"!==a\u0026\u0026\"issue\"!==a\u0026\u0026\"table\"!==a\u0026\u0026\"metrics\"!==a\u0026\u0026\"compound\"!==a\u0026\u0026\"scheme\"!==a?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",109],8,16],";return!a||\"search_results\"!==a\u0026\u0026\"journal-info\"!==a\u0026\u0026\"collection\"!==a\u0026\u0026\"publisher-level-subject\"!==a\u0026\u0026\"journal-articles\"!==a\u0026\u0026\"advanced_search\"!==a\u0026\u0026\"volume\"!==a\u0026\u0026\"journal-level-subject\"!==a\u0026\u0026\"site-index\"!==a\u0026\u0026\"magazine-index-page\"!==a\u0026\u0026\"volumes\"!==a\u0026\u0026\"contact\"!==a\u0026\u0026\"collection-articles\"!==a\u0026\u0026\"collections\"!==a\u0026\u0026\"subjects-homepage\"!==a\u0026\u0026\"journal-subjects\"!==a\u0026\u0026\"collection-info\"!==a\u0026\u0026\"static\"!==a\u0026\u0026\"issue-page\"!==a\u0026\u0026\"magazine-index-latest-careers\"!==a\u0026\u0026\"magazine-index-latest-news\"!==\na\u0026\u0026\"nature-briefing-unsubscribe-page\"!==a\u0026\u0026\"magazine-index-latest-research-analysis\"!==a\u0026\u0026\"magazine-index-latest-opinion\"!==a\u0026\u0026\"magazine-index-latest-books-culture\"!==a?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return null})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"audioPlayerAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"audioPlayerId"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){return\"object\"===typeof a\u0026\u0026null!==a}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){do{if(b(a))return a;a=a.parentNode}while(a)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,b,c){var e=",["escape",["macro",121],8,16],";return e(d,function(a){return a.hasAttribute\u0026\u0026a.hasAttribute(b)\u0026\u0026(\"undefined\"===typeof c||a.getAttribute(b)===c)})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a,b){var c=",["escape",["macro",73],8,16],";return\"array\"===b\u0026\u0026!0===c(a)||typeof a===b?a:null}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,f){var g=",["escape",["macro",122],8,16],",d=function(){var c=g(b,\"data-track-component\");if(c)return c.getAttribute(\"data-track-component\");c=",["escape",["macro",64],8,16],";var a=",["escape",["macro",5],8,16],";return c\u0026\u0026a?c+\":\"+a:c||a||\"\"},a=function(){var a=g(b,\"data-track-component\");return a?a.getAttribute(\"data-track-component\")+\":\"+f:f};a=b.getAttribute(\"data-track-action\")||a();d=b.getAttribute(\"data-track-category\")||d();var e;(e=b.getAttribute(\"data-track-label\"))||(e=b.href\u0026\u0026window.location.hostname!==\nb.hostname?b.href:null);a={action:a,category:d,label:e};return a.label?a:null}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){window.dataLayer.push({event:\"interactive-event\",eventAction:a.action,eventCategory:a.category,eventLabel:a.label||void 0,eventValue:a.value||void 0,nonInteraction:a.nonInteraction||!1})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,a){var c=",["escape",["macro",122],8,16],",d=",["escape",["macro",124],8,16],",e=",["escape",["macro",125],8,16],";(b=c(b,\"data-track\",a))\u0026\u0026(a=d(b,a))\u0026\u0026e(a)}})();"]
    },{
      "function":"__u",
      "vtp_component":"PROTOCOL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"(not set)",
      "vtp_name":"backHalfContent"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"string\"===typeof ",["escape",["macro",14],8,16],"\u0026\u00260\u003C",["escape",["macro",14],8,16],".length?-1!==",["escape",["macro",14],8,16],".indexOf(\",C0008,\"):!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.open"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"country"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={journal:1,\"journal-info\":1,Collections:1,\"site-index\":1,advanced_search:1,search_results:1,\"subjects-homepage\":1,\"publisher-level-subject\":1,\"journal-level-subject\":1,\"journal-subjects\":1,\"journal-articles\":1,volumes:1,volume:1,issue:1,\"magazine-index-page\":1,\"magazine-index-latest-careers\":1,\"magazine-index-latest-news\":1,\"magazine-index-latest-research-analysis\":1,\"magazine-index-latest-opinion\":1,\"magazine-index-latest-books-culture\":1,collection:1,\"collection-info\":1,article:1,\nfigure:1,table:1,metrics:1,compound:1,scheme:1,contact:1};return a.hasOwnProperty(",["escape",["macro",5],8,16],")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.pcode"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"string\"===typeof ",["escape",["macro",14],8,16],"\u0026\u00260\u003C",["escape",["macro",14],8,16],".length?-1!==",["escape",["macro",14],8,16],".indexOf(\",C0009,\"):!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var b=\"; \"+document.cookie;a=b.split(\"; \"+a+\"\\x3d\");if(2===a.length)return a.pop().split(\";\").shift()}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return void 0!==",["escape",["macro",135],8,16],"(\"OptanonAlertBoxClosed\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={journal:1,\"journal-info\":1,Collections:1,\"site-index\":1,advanced_search:1,search_results:1,\"subjects-homepage\":1,\"publisher-level-subject\":1,\"journal-level-subject\":1,\"journal-subjects\":1,\"journal-articles\":1,volumes:1,volume:1,issue:1,\"magazine-index-page\":1,\"magazine-index-latest-careers\":1,\"magazine-index-latest-news\":1,\"magazine-index-latest-research-analysis\":1,\"magazine-index-latest-opinion\":1,\"magazine-index-latest-books-culture\":1,collection:1,\"collection-info\":1,article:1,\nfigure:1,table:1,metrics:1,compound:1,scheme:1,contact:1};return a.hasOwnProperty(",["escape",["macro",5],8,16],")})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"enableMarvellousMachine",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "convert_case_to":1,
      "convert_null_to":"(not set)",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",8],8,16],",b=",["escape",["macro",9],8,16],",c=",["escape",["macro",11],8,16],";return b(a(c))})();"]
    },{
      "function":"__jsm",
      "convert_null_to":"(not set)",
      "convert_true_to":"granted",
      "convert_false_to":"denied",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",37],8,16],"||null})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "convert_null_to":"fish",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.attributes.copyright.open"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.ga\u0026\u0026window.ga.getAll\u0026\u0026window.ga.getAll().length?window.ga.getAll()[0].get(\"clientId\"):null})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",82],8,16],";b=\/t8x81149p|t8x84p76g|t8x88awao|t8x9alusn\/.test(b);var a=",["escape",["macro",81],8,16],";a=\/[a-z]\/.test(a);return!0===b\u0026\u0026!0===a?\"usabilla survey SciRep ACD\":!0===a?\"usabilla survey\":\"do not include\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.contentInfo.author"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session.authentication.authenticationID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"content.journal.section"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-71668177-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"productId",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",85],8,16],",b=",["escape",["macro",87],8,16],";return a||b?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){if(b){var a=null,c=",["escape",["macro",72],8,16],";c\u0026\u0026(a=c.find(function(a){return a.name===b\u0026\u0026a.active}));return a\u0026\u0026a.active?!0:!1}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"nature\"===",["escape",["macro",133],8,16],"\u0026\u0026\"journal\"===",["escape",["macro",5],8,16],"})();"]
    },{
      "function":"__c",
      "vtp_value":"OneTrust Cookie Consent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.visibleTime"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",155],8,16],"?parseInt(",["escape",["macro",155],8,16],",10)\/1E3:0;return a.toString()+\"s\"})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollUnits",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollDirection",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":9999,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EBootstrapper=window.Bootstrapper||{};Bootstrapper.npg=Bootstrapper.npg||{};Bootstrapper.npg.utils=Bootstrapper.npg.utils||{};\nBootstrapper.npg.utils.Consent=function(){var c=function(){for(var b=document.cookie.split(\/;\\s*\/),a=0;b[a];++a)if(-1!==b[a].indexOf(\"OptanonConsent\\x3d\"))return b[a].split(\"\\x3d\").slice(1).join(\"\\x3d\");return\"\"};c=unescape(c());var d=(\/groups=([^\u0026]+)\/.exec(c)||[\"\",\"\"])[1].split(\",\");return{STRICTLY_NECESSARY:1,PERFORMANCE:2,FUNCTIONAL:3,TARGETING:4,allow:function(b){if(b===this.STRICTLY_NECESSARY)return!0;for(var a=0;d[a];++a)if(d[a]===b+\":0\")return!1;return!0}}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__opt",
      "priority":99,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-P8FX28R",
      "vtp_gaSettings":["macro",98],
      "tag_id":58
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Collections Event Exit",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"Exit Click",
      "vtp_eventLabel":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":39
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",99],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",100],
      "vtp_eventCategory":["macro",101],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",102],
      "vtp_eventLabel":["macro",103],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":43
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"reading",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"30-seconds-reading",
      "vtp_eventLabel":["macro",25],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":51
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"scroll-depth",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"scrolling",
      "vtp_eventLabel":["template",["macro",105],"%"],
      "vtp_enableEcommerce":false,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":63
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"author link - publication",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":311
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"author link - pubmed",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":314
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"author link - scholar",
      "vtp_eventLabel":"link",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":315
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"10-seconds-reading-methods",
      "vtp_eventLabel":["template",["macro",108],"-",["macro",25]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":391
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"10-seconds-reading-references",
      "vtp_eventLabel":["template",["macro",108],"-",["macro",25]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":400
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"article body",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"10-seconds-reading-figures",
      "vtp_eventLabel":["template",["macro",108],"-",["macro",25]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":402
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"OneTrust Cookie Consent",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"Banner Accept Cookies",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":409
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"OneTrust Cookie Consent",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"Preferences Allow All",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":410
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"OneTrust Cookie Consent",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"Preferences Save Settings",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":412
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_accountId":"60881",
      "vtp_tagType":"HOME_TAG",
      "vtp_siteType":["macro",111],
      "tag_id":428
    },{
      "function":"__ua",
      "metadata":["map"],
      "teardown_tags":["list",["tag",53,0]],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",98],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":433
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":"60881",
      "vtp_productID":["macro",26],
      "vtp_tagType":"PRODUCT_TAG",
      "vtp_siteType":["macro",111],
      "tag_id":453
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_accountId":"60881",
      "vtp_tagType":"LISTING_TAG",
      "vtp_listingID":["macro",116],
      "vtp_siteType":["macro",111],
      "tag_id":461
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"HTML Player Events",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":["macro",117],
      "vtp_eventLabel":["macro",118],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":511
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Click",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",98],
      "vtp_eventAction":"Approve Submission",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":571
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_77",
      "tag_id":572
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"10482319_145",
      "tag_id":573
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"10482319_193",
      "vtp_enableTriggerStartOption":true,
      "tag_id":574
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"25,50,75,100",
      "vtp_verticalThresholdOn":true,
      "vtp_triggerStartOption":"WINDOW_LOAD",
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"10482319_294",
      "vtp_enableTriggerStartOption":true,
      "tag_id":575
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_312",
      "tag_id":576
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_313",
      "tag_id":577
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"10482319_316",
      "tag_id":578
    },{
      "function":"__evl",
      "vtp_elementId":"onetrust-banner-sdk",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"10482319_376",
      "tag_id":579
    },{
      "function":"__evl",
      "vtp_elementId":"onetrust-banner-sdk",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_onScreenDuration":"10000",
      "vtp_uniqueTriggerId":"10482319_377",
      "tag_id":580
    },{
      "function":"__evl",
      "vtp_elementId":"onetrust-banner-sdk",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_onScreenDuration":"20000",
      "vtp_uniqueTriggerId":"10482319_378",
      "tag_id":581
    },{
      "function":"__evl",
      "vtp_elementId":"onetrust-banner-sdk",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_firingFrequency":"ONCE",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"50",
      "vtp_onScreenDuration":"30000",
      "vtp_uniqueTriggerId":"10482319_379",
      "tag_id":582
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_elementSelector":"div.c-article-body \u003E section",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_onScreenDuration":"10000",
      "vtp_uniqueTriggerId":"10482319_393",
      "tag_id":583
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_elementSelector":"div.c-article-body \u003E section .c-article-section__figure",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_onScreenDuration":"10000",
      "vtp_uniqueTriggerId":"10482319_399",
      "tag_id":584
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_elementSelector":"div.c-article-body \u003E section",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"1",
      "vtp_onScreenDuration":"10000",
      "vtp_uniqueTriggerId":"10482319_401",
      "tag_id":585
    },{
      "function":"__cl",
      "tag_id":586
    },{
      "function":"__cl",
      "tag_id":587
    },{
      "function":"__cl",
      "tag_id":588
    },{
      "function":"__cl",
      "tag_id":589
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","10482319_494_405","10482319_494_361"],
      "vtp_uniqueTriggerId":"10482319_494",
      "tag_id":590
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_494_405",
      "tag_id":591
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_494_361",
      "tag_id":593
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","10482319_495_361","10482319_495_406"],
      "vtp_uniqueTriggerId":"10482319_495",
      "tag_id":594
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_495_361",
      "tag_id":595
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_495_406",
      "tag_id":597
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","10482319_496_361","10482319_496_407"],
      "vtp_uniqueTriggerId":"10482319_496",
      "tag_id":598
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_496_361",
      "tag_id":599
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_496_407",
      "tag_id":601
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","10482319_497_361","10482319_497_408"],
      "vtp_uniqueTriggerId":"10482319_497",
      "tag_id":602
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_497_361",
      "tag_id":603
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"10482319_497_408",
      "tag_id":605
    },{
      "function":"__cl",
      "tag_id":606
    },{
      "function":"__cl",
      "tag_id":607
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",79,2]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(win,doc,undefined){var isArray=",["escape",["macro",73],8,16],";var isObject=",["escape",["macro",120],8,16],";var map=",["escape",["macro",74],8,16],";var closestByAttribute=",["escape",["macro",122],8,16],";var closest=",["escape",["macro",121],8,16],";var enforceDataType=",["escape",["macro",123],8,16],";var normaliseAnd=",["escape",["macro",8],8,16],";var normaliseWhitespace=",["escape",["macro",9],8,16],";var formatDate=",["escape",["macro",27],8,16],";var createEventPayload=",["escape",["macro",124],8,16],";var sendEvent=",["escape",["macro",125],8,16],";var eventHandler=",["escape",["macro",126],8,16],";var setupTracking=\nfunction(selector,eventName,handlerName){var elements=document.querySelectorAll(selector);if(!elements.length)return;Array.prototype.slice.call(elements).forEach(function(element){element.addEventListener(eventName,function(e){eventHandler(e.target,handlerName||eventName)})})};setupTracking('[data-track\\x3d\"click\"]',\"click\");setupTracking('[data-track\\x3d\"change\"]',\"change\");setupTracking('[data-track\\x3d\"download\"]',\"click\",\"download\");setupTracking('form[data-track\\x3d\"submit\"]',\"submit\");if(window.IntersectionObserver){var inViewElements=\ndocument.querySelectorAll('[data-track\\x3d\"in-view\"]');if(!inViewElements.length)return;var handleIntersect=function(entries,observer){entries.forEach(function(entry){if(entry.intersectionRatio\u003E.25){eventHandler(entry.target,\"in-view\");observer.unobserve(entry.target)}})};var observer=new IntersectionObserver(handleIntersect,{root:null,rootMargin:\"0px\",threshold:[0,.25,.75,1]});Array.prototype.slice.call(inViewElements).forEach(function(element){observer.observe(element)})}var sciHubLinks=document.querySelectorAll('a[href*\\x3d\"sci-hub\"],a[href*\\x3d\"dx.doi.org\"]');\nif(sciHubLinks.length)Array.prototype.slice.call(sciHubLinks).forEach(function(link){link.addEventListener(\"click\",function(){sendEvent({action:\"Click Event\",category:\"External Link\",label:this.href.indexOf(\"sci-hub\")!==-1?\"sci-hub\":\"dx.doi.org\"})})})})(window,document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];s=a.createElement(\"script\");s.type=\"text\/javascript\";s.async=!0;s.src=\"\/\/optanon.blob.core.windows.net\/consent\/ce47efd6-7cab-4c50-806d-b2e4fc5cd34d.js\";b.parentNode.insertBefore(s,b)})();function OptanonWrapper(){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":23
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar filterMeta=function(a){for(var b=[],e=0;a[e];++e)a[e].name\u0026\u0026b.push(a[e]);return b},translateMeta=function(a){var b={\"WT.cg_n\":\"product_name\",\"WT.site_id\":\"site_id\",\"WT.site_id_name\":\"site_id_name\",\"WT.registrant_id\":\"user_id\"};return b[a]||a},getMeta=function(a){var b=filterMeta(document.getElementsByTagName(\"meta\")||[]),e=document.getElementsByTagName(\"body\")||[],g=function(){for(var f=b.length,c={},d;f--;)if(d=translateMeta(b[f].name))c[d]?(\"string\"===typeof c[d]\u0026\u0026(c[d]=[c[d]]),c[d].push(b[f].content)):\nc[d]=b[f].content||\"\";c.keywords\u0026\u0026(c.keywords=c.keywords.replace(\/,\/g,\";\"));a(c)};e.length?g():b.length\u0026\u0026g()};getMeta(function(a){window._pageMetaData=a});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":24
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var m=function(e,g,f,k){this.get=function(a){a+=\"\\x3d\";for(var b=document.cookie.split(\";\"),c=0,l=b.length;c\u003Cl;c++){for(var d=b[c];\" \"==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null};this.set=function(a,b){var c=new Date;c.setTime(c.getTime()+6048E5);c=\"; expires\\x3d\"+c.toGMTString();document.cookie=a+\"\\x3d\"+b+c+\"; path\\x3d\/; \"};this.check=function(){var a=this.get(f);if(a)a=a.split(\":\");else if(100!=e)\"v\"==g\u0026\u0026(e=Math.random()\u003E=\ne\/100?0:100),a=[g,e,0],this.set(f,a.join(\":\"));else return!0;var b=a[1];if(100==b)return!0;switch(a[0]){case \"v\":return!1;case \"r\":return b=a[2]%Math.floor(100\/b),a[2]++,this.set(f,a.join(\":\")),!b}return!0};this.go=function(){if(this.check()){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=k+\"\\x26t\\x3d\"+(new Date).getTime();document.body\u0026\u0026document.body.appendChild(a)}};this.start=function(){var a=this;window.addEventListener?window.addEventListener(\"load\",function(){a.go()},\n!1):window.attachEvent\u0026\u0026window.attachEvent(\"onload\",function(){a.go()})}},h=document.createElement(\"div\");h.setAttribute(\"id\",\"SI_9LEO1QcbH9BEzFb\");document.body.appendChild(h);try{var n=new m(100,\"r\",\"QSI_S_SI_9LEO1QcbH9BEzFb\",\"https:\/\/zn7vxbjk81nhox2qf-springernature.siteintercept.qualtrics.com\/SIE\/?Q_SIID\\x3dSI_9LEO1QcbH9BEzFb\\x26Q_LOC\\x3d\"+encodeURIComponent(window.location.href));n.start()}catch(e){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s=document.getElementsByTagName(\"script\")[0],p=document.createElement(\"script\");p.async=\"async\";p.src=\"\/\/scripts.webcontentassessor.com\/scripts\/93dabb8d80079a87fec7bb6f67b807fce90e1688f8957ad7ad152bfd58ea01c2\";s.parentNode.insertBefore(p,s);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.querySelector\u0026\u0026function(g){if(g){var h={publisherName:\"SpringerNature\",imprint:\"Nature\",orderBeanReset:\"true\"},k=function(a){for(var b={},d=\/([^\u0026=]+)=?([^\u0026]*)\/g,e=a.substring(1);a=d.exec(e);)b[decodeURIComponent(a[1].replace(\/\\+\/g,\" \"))]=decodeURIComponent(a[2].replace(\/\\+\/g,\" \"));return b}(g.search),l=function(a,b){var d=a.protocol+\"\/\/\"+a.hostname+a.pathname,e=[];for(c in b)b.hasOwnProperty(c)\u0026\u0026e.push(c+\"\\x3d\"+encodeURIComponent(b[c]));var c=\"?\"+e.join(\"\\x26\");d+=c;a.setAttribute(\"href\",\nd)},f;for(f in h)h.hasOwnProperty(f)\u0026\u0026(k[f]=h[f]);l(g,k)}}(document.querySelector('a[href^\\x3d\"https:\/\/s100.copyright.com\"]'));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b,c,d,e){if(!b)for(b=b||{},window.permutive=b,b.q=[],b.config=e||{},b.config.projectId=c,b.config.apiKey=d,b.config.environment=b.config.environment||\"production\",a=\"addon identify track trigger query segment segments ready on once user consent\".split(\" \"),c=0;c\u003Ca.length;c++)d=a[c],b[d]=function(f){return function(){var g=Array.prototype.slice.call(arguments,0);b.q.push({functionName:f,arguments:g})}}(d)}(document,window.permutive,\"2e4b93d1-a8ae-4a89-8885-6109135ac0de\",\"7509d50f-8950-4699-a535-f9942eea50bf\",\n{consentRequired:!0});window.googletag=window.googletag||{};window.googletag.cmd=window.googletag.cmd||[];window.googletag.cmd.push(function(){if(0===window.googletag.pubads().getTargeting(\"permutive\").length){var a=window.localStorage.getItem(\"_pdfps\");window.googletag.pubads().setTargeting(\"permutive\",a?JSON.parse(a):[])}});permutive.readyWithTimeout=function(a,b,c){var d=!1,e=function(){d||(a(),d=!0)};(c=c||1\/0)!==1\/0\u0026\u0026window.setTimeout(e,c);permutive.ready(e,b)};\nvar NOT_SET=\"(not set)\",identity=function(a){return a},clean=function(a,b){return(b||identity)(a===NOT_SET||!a\u0026\u0026\"number\"!==typeof a?null:a)},bool=function(a){return a===NOT_SET?!1:!!a},lower=function(a){return\"string\"===typeof a?a.toLowerCase():a},strip=function(a){var b=0,c=0,d;for(d in a)++b,a.hasOwnProperty(d)\u0026\u0026null===a[d]\u0026\u0026(++c,delete a[d]);return b===c?null:a},pathSegments=function(){for(var a={},b=window.location.pathname.slice(1).split(\"\/\"),c=0,d=b.length;c\u003Cd;++c)2\u003Ec?a[\"level\"+(c+1)]=b[c]:\na.level2+=\"\/\"+b[c];return a},clientId=function(){return window.ga\u0026\u0026window.ga.getAll?window.ga.getAll()[0].get(\"clientId\"):null},gaClientId=clientId(),content=strip({article:strip({doi:clean(",["escape",["macro",25],8,16],"),title:clean(",["escape",["macro",62],8,16],"),type:clean(",["escape",["macro",5],8,16],",lower),keywords:clean(",["escape",["macro",56],8,16],",function(a){a=(a||\"\").split(\";\");return 0===a.length||1===a.length\u0026\u0026\"\"===a[0]?null:a})}),category:strip({contentType:clean(",["escape",["macro",10],8,16],",lower)}),path:pathSegments(),backHalf:bool(",["escape",["macro",128],8,16],")}),\npage=strip({pageType:clean(",["escape",["macro",5],8,16],",lower)}),journal=strip({title:clean(",["escape",["macro",22],8,16],",lower)}),user=strip({bpid:clean(",["escape",["macro",70],8,16],"),accessType:clean(",["escape",["macro",90],8,16],",lower),authorizationStatus:bool(",["escape",["macro",37],8,16],")}),model={page:strip({content:content,page:page,journal:journal,user:user})};",["escape",["macro",129],8,16],"?permutive.consent({opt_in:!0,token:\"CONSENT_CAPTURED\"}):permutive.consent({opt_in:!1});gaClientId\u0026\u0026permutive.identify([{id:gaClientId,tag:\"client-id\"}]);\npermutive.addon(\"web\",model);permutive.readyWithTimeout(function(){document.dispatchEvent(new CustomEvent(\"permutiveready\"));window.dataLayer.push({event:\"permutiveready\"})},\"realtime\",1500);\u003C\/script\u003E\n\u003Cscript async data-gtmsrc=\"https:\/\/cdn.permutive.com\/2e4b93d1-a8ae-4a89-8885-6109135ac0de-web.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":307
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var a=b.createElement(\"script\");a.setAttribute(\"async\",\"async\");a.src=\"https:\/\/scholar.google.com\/scholar_js\/casa.js\";b.head.appendChild(a)})(document);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":317
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer.push({event:\"ga-client-id-pushed-to-datalayer\",gaClientId:null});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":354
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar event=document.createEvent(\"Event\");event.initEvent(\"OneTrustGroupsUpdated\",!0,!0);document.dispatchEvent(event);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":360
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.permutive\u0026\u0026window.permutive.consent\u0026\u0026permutive.consent({opt_in:!0,token:\"CONSENT_CAPTURED\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":384
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.permutive\u0026\u0026window.permutive.consent\u0026\u0026permutive.consent({opt_in:!1});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":385
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E-1==document.location.href.search(\"appspot.com\")\u0026\u0026-1==document.referrer.search(\"appspot.com\")\u0026\u0026!function(b,c,d,g,a,e,f){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],e=c.createElement(d),e.async=!0,e.src=g,f=c.getElementsByTagName(d)[0],f.parentNode.insertBefore(e,f))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");\nfbq(\"dataProcessingOptions\",[\"LDU\"],0,0);fbq(\"init\",\"1229240860577415\");fbq(\"track\",\"PageView\");var bindFacebookClickEvent=function(b){for(var c=document.querySelectorAll('a[data-track-action\\x3d\"'+b+'\"]'),d=0;c[d];++d)c[d].addEventListener(\"click\",function(){fbq(\"trackCustom\",b.replace(\/\\s+\/g,\"_\").toLowerCase(),{journal:\"",["escape",["macro",22],7],"\"})},!1)},bindFacebookEvents=function(){for(var b=[\"Submit manuscript\",\"Sign up for alerts\",\"subscribe\"],c=0;b[c];++c)bindFacebookClickEvent(b[c])};bindFacebookEvents();\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1229240860577415\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":424
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o3xnx\");twq(\"track\",\"PageView\");twq(\"init\",\"o43y9\");twq(\"track\",\"PageView\");twq(\"init\",\"o3ef7\");twq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":426
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _hmt=_hmt||[];(function(){var a=document.createElement(\"script\");a.src=\"https:\/\/hm.baidu.com\/hm.js?485f8e597c8915da9aca0c37dca3f39f\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":441
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar c_id=\"14617931\",_comscore=window._comscore=_comscore||[];_comscore.push({c1:\"2\",c2:c_id});(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;var c=\"https:\"==document.location.protocol?\"https:\/\/sb\":\"http:\/\/b\";a.src=c+\".scorecardresearch.com\/beacon.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":444
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction splitKeys(b){var l=[],c=\"\",h=[],q=b.split(\";\");for(b=0;b\u003Cq.length;++b){void 0!==u\u0026\u0026(c=u);var k=q[b].split(\"\\x3d\");var u=k[0];u!==c\u0026\u0026(0\u003Cc.length\u0026\u00260\u003Cl.length\u0026\u0026h.push([c,l]),l=[]);if(2===k.length\u0026\u0026\"\"!==k[0]\u0026\u0026\"\"!==k[1]){var w=k[1].split(\",\");for(k=0;k\u003Cw.length;++k)l.push(w[k])}}0\u003Cu.length\u0026\u00260\u003Cl.length\u0026\u0026h.push([u,l]);return h}\nfunction getScript(b,l){var c=document.createElement(\"script\"),h=document.getElementsByTagName(\"script\")[0];c.async=1;c.onload=c.onreadystatechange=function(q,k){if(k||!c.readyState||\/loaded|complete\/.test(c.readyState))c.onload=c.onreadystatechange=null,c=void 0,k||l\u0026\u0026l()};c.src=b;h.parentNode.insertBefore(c,h)}\nfunction splitSizes(b){var l=[];if(null!==b){var c=-1!==b.indexOf(\"|\")?b.split(\"|\"):b.split(\",\");for(b=0;b\u003Cc.length;++b){var h=c[b].split(\"x\");var q=parseInt(h[0],10);var k=parseInt(h[1],10);2===h.length\u0026\u0026!isNaN(q)\u0026\u0026!isNaN(k)\u0026\u00260\u003C=q\u0026\u00260\u003C=k\u0026\u0026l.push([q,k])}}return l}function hasClass(b,l){var c,h=b.className.split(\/\\s+\/);b=0;for(c=h.length;b\u003Cc;++b)if(h[b]===l)return!0;return!1}\nfunction getAdContainers(){if(\"function\"===typeof document.getElementsByClassName)return document.getElementsByClassName(\"div-gpt-ad\");var b,l=[],c=document.getElementsByTagName(\"div\");for(b=0;c[b];++b)hasClass(c[b],\"div-gpt-ad\")\u0026\u0026l.push(c[b]);return l}function debounce(b,l){var c=null,h=null;return function(){var q=this,k=+new Date,u=arguments;c\u0026\u0026k\u003Cc+l?(clearTimeout(h),h=setTimeout(function(){c=k;b.apply(q,u)},l)):(c=k,b.apply(q,u))}}\nfunction addResizeEvent(b){window.addEventListener?window.addEventListener(\"resize\",b,!1):window.attachEvent(\"resize\",b)}function addScrollEvent(b){window.addEventListener?window.addEventListener(\"scroll\",b,!1):window.attachEvent(\"onscroll\",b)}function removeScrollEvent(b){window.removeEventListener?window.removeEventListener(\"scroll\",b,!1):window.detachEvent(\"scroll\",b)}function serveAdsFor(b){return-1!==b.indexOf(\"\/naturejobs\")?!1:!0}\nfunction initAds(b,l){var c=[],h,q=null;if(-1===b.location.search.indexOf(\"hide_ads\\x3dtrue\")\u0026\u0026serveAdsFor(b.location.pathname)){var k=function(a){var f=Math.max(l.clientHeight,b.innerHeight||0);return u(a,function(d){if(d.isOutOfPage||d.forceLoadOnInit)return!0;var e=document.getElementById(d.divId),m=e.getBoundingClientRect();m=m.top-300;m=f\u003Em;var v=null!==e.offsetParent;d=d.sizeArray\u0026\u0026d.sizeArray.length\u0026\u0026d.sizeArray[0].length\u0026\u00262===d.sizeArray[0][0];e=e.getAttribute(\"data-ad-type\")?-1===e.getAttribute(\"data-ad-type\").indexOf(\"top\"):\n!1;var y=770\u003Eb.innerWidth;return m\u0026\u0026v\u0026\u0026!1===y||d||m\u0026\u0026v\u0026\u0026y\u0026\u0026e})},u=function(a,f){for(var d=a.length,e=[];d--;)f(a[d],d)\u0026\u0026(e.push(a[d].slot),a.splice(d,1));e.length\u0026\u0026googletag.pubads().refresh(e);return a},w={\"career feature\":!0,\"career news\":!0,\"career q\\x26a\":!0,\"career brief\":!0,\"career column\":!0,spotlight:!0,\"career guide\":!0,\"technology feature\":!0,\"nature careers podcast\":!0},E=function(){var a=b.dataLayer?",["escape",["macro",133],8,16],":null;if(a)return a;if(-1!==b.location.hostname.indexOf(\"guide.labanimal\"))return a=\nb.location.pathname,a=-1!==a.indexOf(\"categ\")?\"products\":-1!==a.indexOf(\"supplier\")?\"suppliers\":\"homepage\",\"laban\/guide.labanimal\/\"+a;a=b.location.pathname.replace(\/^\\\/+\/,\"\").split(\"\/\");var f=b.location.hostname.split(\".\").slice(1).join(\".\");return a.length\u0026\u0026\"\"!==a[0]?a[0]:f},F=function(a){for(var f={},d=0;a[d];++d){var e=a[d].size;var m=\"2x2\"===a[d].size?window.dataLayer\u0026\u0026\"core media\"===",["escape",["macro",58],8,16],"\u0026\u0026-1!==b.location.pathname.indexOf(\"\/articles\/\")?3:0:0;f[e]={count:m,name:a[d].name}}return f}([{size:\"728x90\",\nname:\"LB\"},{size:\"300x250\",name:\"MPU\"},{size:\"160x600\",name:\"SKY\"},{size:\"970x250\",name:\"BB\"},{size:\"2x2\",name:\"NATIVE\"},{size:\"300x100\",name:\"REC\"},{size:\"180x150\",name:\"EVENTS\"},{size:\"160x60\",name:\"TILE\"}]),x=function(a,f,d,e){for(var m=!1,v=0;a[v];++v)a[v][0]===f\u0026\u0026null!==d\u0026\u0026(a[v][1]=e?a[v][1].concat(d):[d],m=!0);m||null===d||a.push([f,[d]]);return a},A=function(a,f,d){for(var e=0;a[e];++e)a[e][0]===f\u0026\u0026(a[e][0]=d);return a},B=function(a){for(var f=[],d=0;a[d];++d){var e=a[d],m=f,v=m.push,y=e.getAttribute(\"id\");\nvar g=e.getAttribute(\"data-gpt-unitpath\");var z=\"\/270604982\";0!==g.indexOf(\"\/\")\u0026\u0026(g=\"\/\"+g);0===g.indexOf(\"\/285\/\")\u0026\u0026(g=g.replace(\/^\\\/285\\\/[^\\\/]+\/,z+\"\/nature\/\"+E()));g=g.replace(\"\/nature\/laban\",\"\/laban\");g=g.replace(\"\/nature\/nature.com\/index\",\"\/nature\/nature\/homepage\");g=g.replace(\"\/collections\/collections\",\"\/collections\");g=g.replace(\"\/search\/search_results\",\"\/nature\/search\");g=g.replace(\/\\\/article$\/,\"\/articles\");g=g.replace(\/\\\/nature\\\/authors\\\/.*\/,\"\/nature\/nature\/authors\");-1!==b.location.hostname.indexOf(\"blogs\")\u0026\u0026\n(g=g.replace(\/\\\/nature\\\/.*\/,\"\/nature\/nature\/blogs\"));-1!==b.location.hostname.indexOf(\"natureindex\")\u0026\u0026(g=g.replace(\/\\\/nature\\\/.*\/,\"\/nature\/nature_index\"),\"\/\"===b.location.pathname\u0026\u0026(g+=\"\/homepage\"));window.dataLayer\u0026\u0026w[",["escape",["macro",10],8,16],"]\u0026\u0026(g=g.replace(\/\\\/articles$\/,\"\/naturecareers\"));a:{if(\/^\\\/nature\\\/articles\\\/?$\/.test(window.location.pathname)){var p=(\/^.*?(?:\\?|\u0026)type=([^\u0026]+)\/.exec(b.location.search)||[\"\",\"\"])[1];if(w[p.replace(\/-\/g,\" \").replace(\/ and \/,\"\\x26\")]){p=!0;break a}}p=!1}p\u0026\u0026(g=g.replace(\/\\\/article-list$\/,\n\"\/naturecareers\"));(p=document.querySelector('meta[name\\x3d\"brandedcontent\"]'))\u0026\u0026\"true\"===p.getAttribute(\"content\")\u0026\u0026(g=z+\"\/nature\/brandedcontent\");z=splitSizes(e.getAttribute(\"data-gpt-sizes\"));var n=e;p=d;var r=n;var t=-1!==b.location.search.indexOf(\"test\\x3dads\")?\";adtype\\x3dtest\":\"\";r=r.getAttribute(\"data-gpt-targeting\");t\u0026\u0026-1===r.indexOf(t)\u0026\u0026(r+=t);(t=",["escape",["macro",70],8,16],")\u0026\u0026(r+=\";bpid\\x3d\"+t.replace(\/;\/g,\",\"));t=(t=document.getElementById(\"login-button\"))\u0026\u0026\"none\"===t.style.display?\"y\":\"n\";r+=\n\";logged\\x3d\"+t;0===b.location.pathname.indexOf(\"\/collections\/\")\u0026\u0026(t=document.querySelector(\"span.hero-title-inner\"))\u0026\u0026(r+=\";sponsored\\x3d\"+t.innerText.replace(\/^\\s+\/,\"\").replace(\/\\s+$\/,\"\").replace(\/\\s+\/g,\"_\").replace(\/\\W+\/g,\"\"));r=A(splitKeys(r),\"artid\",\"articleid\");r=A(r,\"kw\",\"search\");n=n.getAttribute(\"data-gpt-sizes\");n=(n=F[n])?n.name+ ++n.count:null;n=x(r,\"pos\",n);p=x(n,\"tile\",p+1);n=b.location.pathname.split(\"\/\");n=3===n.length\u0026\u0026\"subjects\"===n[1]?n[2]:null;p=x(p,\"subject\",n);n=x(p,\"article\",\nwindow.dataLayer\u0026\u0026w[",["escape",["macro",10],8,16],"]?\"naturecareers\":null);p=window.dataLayer?",["escape",["macro",80],8,16],":null;p=x(n,\"collectionID\",p);p=x(p,\"type\",window.dataLayer\u0026\u0026\"core media\"===",["escape",["macro",58],8,16],"?\"fronthalf\":null,!0);v.call(m,{divId:y,adUnitPath:g,sizeArray:z,targeting:p,isOutOfPage:hasClass(e,\"out-of-page\"),forceLoadOnInit:!1,refreshed:!1})}return f},C=function(){googletag.cmd.push(function(){googletag.pubads().setRequestNonPersonalizedAds(",["escape",["macro",134],8,16],"?0:1);googletag.pubads().disableInitialLoad();\ngoogletag.enableServices();var a={};googletag.pubads().addEventListener(\"slotRenderEnded\",function(f){var d=f.slot\u0026\u0026f.slot.getSlotElementId?f.slot.getSlotElementId():null,e;a[d]=!f.isEmpty;(a[\"div-gpt-ad-native-2\"]||a[\"div-gpt-ad-native-1\"])\u0026\u0026(e=document.querySelector(\".c-paid-content\"))\u0026\u0026e.classList.remove(\"hide\");\"div-gpt-ad-billboard-2\"===d\u0026\u0026!1===f.isEmpty\u0026\u0026(e=document.getElementById(d),e.parentNode.parentNode.classList.add(\"pb40\"),e.parentNode.parentNode.classList.remove(\"pb20\"),e.parentNode.parentNode.classList.remove(\"hide\"));\nd\u0026\u0026f.isEmpty\u0026\u0026(e=document.getElementById(d),e.parentNode.parentNode.classList.remove(\"pb20\"),e.parentNode.classList.remove(\"ad-with-label\"))})});googletag.cmd.push(function(){for(var a=0;c[a];++a)try{c[a].slot=c[a].isOutOfPage?googletag.defineOutOfPageSlot(c[a].adUnitPath,c[a].divId).addService(googletag.pubads()):googletag.defineSlot(c[a].adUnitPath,c[a].sizeArray,c[a].divId).addService(googletag.pubads());for(var f=0,d=c[a].targeting.length;f\u003Cd;++f)if(2===c[a].targeting[f].length\u0026\u0026\"\"!==c[a].targeting[f][0]\u0026\u0026\n\"\"!==c[a].targeting[f][1]){if(\"pos\"===c[a].targeting[f][0]\u0026\u00260===c[a].targeting[f][1][0].indexOf(\"BB\")){h=c[a].slot;var e=googletag.sizeMapping().addSize([970,250],[3,3]).addSize([770,100],[4,4]).addSize([0,0],[5,5]).build();h.defineSizeMapping(e);h.setCollapseEmptyDiv(!0,!1)}c[a].slot.setTargeting(c[a].targeting[f][0],c[a].targeting[f][1])}}catch(m){console.log(\"failed to create slot for\",c[a])}});googletag.cmd.push(function(){for(var a=0;c[a];++a)googletag.display(c[a].divId)})},D=function(){q\u0026\u0026\nremoveScrollEvent(q);googletag.cmd.push(function(){c=k(c)});q=debounce(function(){googletag.cmd.push(function(){c=k(c);c.length||(removeScrollEvent(q),q=null)})},250);addScrollEvent(q)};getScript(\"\/\/www.googletagservices.com\/tag\/js\/gpt.js\",function(){b.googletag=b.googletag||{};b.googletag.cmd=b.googletag.cmd||[];c=B(getAdContainers());C();D();var a=969\u003Cb.innerWidth,f=769\u003Cb.innerWidth\u0026\u0026!a,d=770\u003Eb.innerWidth,e=debounce(function(){var m=b.innerWidth;970\u003C=m\u0026\u0026!a?(a=!0,d=f=!1,googletag.cmd.push(function(){googletag.pubads().refresh([h])})):\n770\u003Em\u0026\u0026!d?(f=a=!1,d=!0,googletag.cmd.push(function(){googletag.pubads().refresh([h])})):970\u003Em\u0026\u0026769\u003Cm\u0026\u0026!f\u0026\u0026(a=!1,f=!0,d=!1,googletag.cmd.push(function(){googletag.pubads().refresh([h])}))},250);addResizeEvent(e);document.addEventListener(\"refreshads\",function(){googletag.destroySlots();c=B(getAdContainers());C();D()},!1)})}}\n-1===window.location.hostname.indexOf(\"nature.com\")\u0026\u0026(\"complete\"===document.readyState||\"loaded\"===document.readyState||\"interactive\"===document.readyState?initAds(window,document.documentElement):document.addEventListener(\"load\",function(){initAds(window,document.documentElement)}));document.addEventListener(\"permutiveready\",function(){initAds(window,document.documentElement)},!1);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":451
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",80,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Edocument.addEventListener(\"accessdetailsloaded\",function(a){a=a.detail;var b={event:\"update-access-details\"};if(a){var c=a.institutional_business_partner_ids\u0026\u0026a.institutional_business_partner_ids.join?a.institutional_business_partner_ids.join(\";\"):\"\",d=a.resolved_by\u0026\u0026a.resolved_by.join?a.resolved_by.join(\";\"):\"\";b.user={};b.user.profile={};b.user.profile.profileInfo={resolvedBy:d||null,bpid:c||null};b.session={};b.session.authentication={};b.session.authentication.token=a.token||null;b.session.authentication.legacy=\n{}}window.dataLayer.push(b);window.accessDetailsLoaded=!0},!1);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":454
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",81,0]],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(e){function y(q,k){k\u0026\u0026(k+=(\/\\?\/.test(k)?\"\\x26\":\"?\")+\"lv\\x3d1\");e[q]||function(){var r=window,f=document,l=q,z=f.location.protocol,v=\"load\",E=0;(function(){function w(){a.P(v);a.w=1;e[l](\"_load\")}e[l]=function(){function d(){d.id=b;return e[l].apply(d,arguments)}var b=++E;var n=this\u0026\u0026this!=r?this.id||0:0;(a.s=a.s||[]).push([b,n,arguments]);d.then=function(m,g,h){var p=a.fh[b]=a.fh[b]||[],x=a.eh[b]=a.eh[b]||[],c=a.ph[b]=a.ph[b]||[];m\u0026\u0026p.push(m);g\u0026\u0026x.push(g);h\u0026\u0026c.push(h);\nreturn d};return d};var a=e[l]._={};a.fh={};a.eh={};a.ph={};a.l=k?k.replace(\/^\\\/\\\/\/,(\"https:\"==z?z:\"http:\")+\"\/\/\"):k;a.p={0:+new Date};a.P=function(d){a.p[d]=new Date-a.p[0]};a.w\u0026\u0026w();r.addEventListener?r.addEventListener(v,w,!1):r.attachEvent(\"on\"+v,w);var A=function(){function d(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",b,' onload\\x3d\"var d\\x3d',t,\";d.getElementsByTagName('head')[0].\",m,\"(d.\",g,\"('script')).\",h,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",b,\"\\x3e\"].join(\"\")}var b=\"body\",n=f[b];if(!n)return setTimeout(A,\n100);a.P(1);var m=\"appendChild\",g=\"createElement\",h=\"src\",p=f[g](\"div\"),x=p[m](f[g](\"div\")),c=f[g](\"iframe\"),t=\"document\";p.style.display=\"none\";n.insertBefore(p,n.firstChild).id=u+\"-\"+l;c.frameBorder=\"0\";c.id=u+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c[h]=\"javascript:false\");c.allowTransparency=\"true\";x[m](c);try{c.contentWindow[t].open()}catch(F){a.domain=f.domain;var B=\"javascript:var d\\x3d\"+t+\".open();d.domain\\x3d'\"+f.domain+\"';\";c[h]=B+\"void(0);\"}try{var C=c.contentWindow[t];C.write(d());\nC.close()}catch(F){c[h]=B+'d.write(\"'+d().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(A,0)})()}();e[q].lv=\"1\";return e[q]}var u=\"lightningjs\",D=window[u]=y(u);D.require=y;D.modules=e}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/c9624a2fb834.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":456
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",81,2]],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.lightningjs||function(e){function y(q,k){k\u0026\u0026(k+=(\/\\?\/.test(k)?\"\\x26\":\"?\")+\"lv\\x3d1\");e[q]||function(){var r=window,f=document,l=q,z=f.location.protocol,v=\"load\",E=0;(function(){function w(){a.P(v);a.w=1;e[l](\"_load\")}e[l]=function(){function d(){d.id=b;return e[l].apply(d,arguments)}var b=++E;var n=this\u0026\u0026this!=r?this.id||0:0;(a.s=a.s||[]).push([b,n,arguments]);d.then=function(m,g,h){var p=a.fh[b]=a.fh[b]||[],x=a.eh[b]=a.eh[b]||[],c=a.ph[b]=a.ph[b]||[];m\u0026\u0026p.push(m);g\u0026\u0026x.push(g);h\u0026\u0026c.push(h);\nreturn d};return d};var a=e[l]._={};a.fh={};a.eh={};a.ph={};a.l=k?k.replace(\/^\\\/\\\/\/,(\"https:\"==z?z:\"http:\")+\"\/\/\"):k;a.p={0:+new Date};a.P=function(d){a.p[d]=new Date-a.p[0]};a.w\u0026\u0026w();r.addEventListener?r.addEventListener(v,w,!1):r.attachEvent(\"on\"+v,w);var A=function(){function d(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",b,' onload\\x3d\"var d\\x3d',t,\";d.getElementsByTagName('head')[0].\",m,\"(d.\",g,\"('script')).\",h,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",b,\"\\x3e\"].join(\"\")}var b=\"body\",n=f[b];if(!n)return setTimeout(A,\n100);a.P(1);var m=\"appendChild\",g=\"createElement\",h=\"src\",p=f[g](\"div\"),x=p[m](f[g](\"div\")),c=f[g](\"iframe\"),t=\"document\";p.style.display=\"none\";n.insertBefore(p,n.firstChild).id=u+\"-\"+l;c.frameBorder=\"0\";c.id=u+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c[h]=\"javascript:false\");c.allowTransparency=\"true\";x[m](c);try{c.contentWindow[t].open()}catch(F){a.domain=f.domain;var B=\"javascript:var d\\x3d\"+t+\".open();d.domain\\x3d'\"+f.domain+\"';\";c[h]=B+\"void(0);\"}try{var C=c.contentWindow[t];C.write(d());\nC.close()}catch(F){c[h]=B+'d.write(\"'+d().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(A,0)})()}();e[q].lv=\"1\";return e[q]}var u=\"lightningjs\",D=window[u]=y(u);D.require=y;D.modules=e}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/b91e4719b0f6.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":460
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function d(c){switch(c.type){case \"play\":dataLayer.push({event:\"audio\",audioPlayerAction:\"Play\",audioPlayerId:c.target.id});break;case \"pause\":dataLayer.push({event:\"audio\",audioPlayerAction:\"Pause\",audioPlayerId:c.target.id});break;case \"ended\":dataLayer.push({event:\"audio\",audioPlayerAction:\"Complete\",audioPlayerId:c.target.id})}}for(var b=document.getElementsByTagName(\"audio\"),a=0;a\u003Cb.length;a++){if(!b[a].getAttribute(\"id\")){var e=\"player-\"+Math.random().toString(36).slice(2);b[a].setAttribute(\"id\",\ne)}b[a].addEventListener(\"play\",d,!1);b[a].addEventListener(\"pause\",d,!1);b[a].addEventListener(\"ended\",d,!1)}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":507
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",81,0]],
      "once_per_load":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lightningjs||function(e){function y(q,k){k\u0026\u0026(k+=(\/\\?\/.test(k)?\"\\x26\":\"?\")+\"lv\\x3d1\");e[q]||function(){var r=window,f=document,l=q,z=f.location.protocol,v=\"load\",E=0;(function(){function w(){a.P(v);a.w=1;e[l](\"_load\")}e[l]=function(){function d(){d.id=b;return e[l].apply(d,arguments)}var b=++E;var n=this\u0026\u0026this!=r?this.id||0:0;(a.s=a.s||[]).push([b,n,arguments]);d.then=function(m,g,h){var p=a.fh[b]=a.fh[b]||[],x=a.eh[b]=a.eh[b]||[],c=a.ph[b]=a.ph[b]||[];m\u0026\u0026p.push(m);g\u0026\u0026x.push(g);h\u0026\u0026c.push(h);\nreturn d};return d};var a=e[l]._={};a.fh={};a.eh={};a.ph={};a.l=k?k.replace(\/^\\\/\\\/\/,(\"https:\"==z?z:\"http:\")+\"\/\/\"):k;a.p={0:+new Date};a.P=function(d){a.p[d]=new Date-a.p[0]};a.w\u0026\u0026w();r.addEventListener?r.addEventListener(v,w,!1):r.attachEvent(\"on\"+v,w);var A=function(){function d(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",b,' onload\\x3d\"var d\\x3d',t,\";d.getElementsByTagName('head')[0].\",m,\"(d.\",g,\"('script')).\",h,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",b,\"\\x3e\"].join(\"\")}var b=\"body\",n=f[b];if(!n)return setTimeout(A,\n100);a.P(1);var m=\"appendChild\",g=\"createElement\",h=\"src\",p=f[g](\"div\"),x=p[m](f[g](\"div\")),c=f[g](\"iframe\"),t=\"document\";p.style.display=\"none\";n.insertBefore(p,n.firstChild).id=u+\"-\"+l;c.frameBorder=\"0\";c.id=u+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c[h]=\"javascript:false\");c.allowTransparency=\"true\";x[m](c);try{c.contentWindow[t].open()}catch(F){a.domain=f.domain;var B=\"javascript:var d\\x3d\"+t+\".open();d.domain\\x3d'\"+f.domain+\"';\";c[h]=B+\"void(0);\"}try{var C=c.contentWindow[t];C.write(d());\nC.close()}catch(F){c[h]=B+'d.write(\"'+d().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(A,0)})()}();e[q].lv=\"1\";return e[q]}var u=\"lightningjs\",D=window[u]=y(u);D.require=y;D.modules=e}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/0c17987d2a34.js\");\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":514
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",81,0]],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lightningjs||function(e){function y(q,k){k\u0026\u0026(k+=(\/\\?\/.test(k)?\"\\x26\":\"?\")+\"lv\\x3d1\");e[q]||function(){var r=window,f=document,l=q,z=f.location.protocol,v=\"load\",E=0;(function(){function w(){a.P(v);a.w=1;e[l](\"_load\")}e[l]=function(){function d(){d.id=b;return e[l].apply(d,arguments)}var b=++E;var n=this\u0026\u0026this!=r?this.id||0:0;(a.s=a.s||[]).push([b,n,arguments]);d.then=function(m,g,h){var p=a.fh[b]=a.fh[b]||[],x=a.eh[b]=a.eh[b]||[],c=a.ph[b]=a.ph[b]||[];m\u0026\u0026p.push(m);g\u0026\u0026x.push(g);h\u0026\u0026c.push(h);\nreturn d};return d};var a=e[l]._={};a.fh={};a.eh={};a.ph={};a.l=k?k.replace(\/^\\\/\\\/\/,(\"https:\"==z?z:\"http:\")+\"\/\/\"):k;a.p={0:+new Date};a.P=function(d){a.p[d]=new Date-a.p[0]};a.w\u0026\u0026w();r.addEventListener?r.addEventListener(v,w,!1):r.attachEvent(\"on\"+v,w);var A=function(){function d(){return[\"\\x3chead\\x3e\\x3c\/head\\x3e\\x3c\",b,' onload\\x3d\"var d\\x3d',t,\";d.getElementsByTagName('head')[0].\",m,\"(d.\",g,\"('script')).\",h,\"\\x3d'\",a.l,\"'\\\"\\x3e\\x3c\/\",b,\"\\x3e\"].join(\"\")}var b=\"body\",n=f[b];if(!n)return setTimeout(A,\n100);a.P(1);var m=\"appendChild\",g=\"createElement\",h=\"src\",p=f[g](\"div\"),x=p[m](f[g](\"div\")),c=f[g](\"iframe\"),t=\"document\";p.style.display=\"none\";n.insertBefore(p,n.firstChild).id=u+\"-\"+l;c.frameBorder=\"0\";c.id=u+\"-frame-\"+l;\/MSIE[ ]+6\/.test(navigator.userAgent)\u0026\u0026(c[h]=\"javascript:false\");c.allowTransparency=\"true\";x[m](c);try{c.contentWindow[t].open()}catch(F){a.domain=f.domain;var B=\"javascript:var d\\x3d\"+t+\".open();d.domain\\x3d'\"+f.domain+\"';\";c[h]=B+\"void(0);\"}try{var C=c.contentWindow[t];C.write(d());\nC.close()}catch(F){c[h]=B+'d.write(\"'+d().replace(\/\"\/g,String.fromCharCode(92)+'\"')+'\");d.close();'}a.P(2)};a.l\u0026\u0026setTimeout(A,0)})()}();e[q].lv=\"1\";return e[q]}var u=\"lightningjs\",D=window[u]=y(u);D.require=y;D.modules=e}({});window.usabilla_live=lightningjs.require(\"usabilla_live\",\"\/\/w.usabilla.com\/8ee9804e97c9.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":515
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(c,d,f,h,k){var e=[];k.forEach(function(a){c[a.v]=c[a.v]||[];e.push(function(){var g={ti:a.id};g.q=c[a.v];c[a.v]=new UET(g);c[a.v].push(\"pageLoad\")})});var b=d.createElement(f);b.src=h;b.async=1;b.onload=b.onreadystatechange=function(){var a=this.readyState;if(!a||\"loaded\"===a||\"complete\"===a){for(a=0;e[a];++a)e[a]();b.onload=b.onreadystatechange=null}};d=d.getElementsByTagName(f)[0];d.parentNode.insertBefore(b,d)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",[{v:\"uetq\",id:\"26100523\"},\n{v:\"uetq2\",id:\"12000044\"}]);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":522
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/maytrics.marvellousmachine.net\/?type=0\u0026amp;cid\n=48\u0026amp;language=en\u0026amp;extref=https%3A%2F%2Fwww.nature.com%2F\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":559
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" async data-gtmsrc=\"https:\/\/s.marvellousmachine.net\/\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":569
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar getClientId=function(){return window.ga\u0026\u0026window.ga.getAll\u0026\u0026window.ga.getAll().length?window.ga.getAll()[0].get(\"clientId\"):null};window.dataLayer.push({event:\"ga-client-id-pushed-to-datalayer\",gaClientId:getClientId()});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){if(\"function\"===typeof window.CustomEvent)return!1;var c=function(d,b){b=b||{};var e=document.createEvent(\"CustomEvent\");e.initCustomEvent(d,b.bubbles||!1,b.cancelable||!1,b.detail||a);return e};c.prototype=window.Event.prototype;window.CustomEvent=c})();var parse=function(a,c){try{return 200===a?JSON.parse(c):null}catch(d){return null}},dispatch=function(a){a=new CustomEvent(\"accessdetailsloaded\",{detail:a});document.dispatchEvent(a)};\nif(-1!==window.location.hostname.indexOf(\".nature.com\")){var transport=new XMLHttpRequest;transport.open(\"GET\",\"https:\/\/idp.nature.com\/exposed-details\",!0);transport.withCredentials=!0;transport.onreadystatechange=function(){4===transport.readyState\u0026\u0026dispatch(parse(transport.status,transport.responseText))};transport.send()}else dispatch(null);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":329
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",82,0]],
      "once_per_load":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.usabilla_live(\"data\",{custom:{kruxUser:",["escape",["macro",81],8,16],",kruxSegment:",["escape",["macro",82],8,16],",journalTitle:",["escape",["macro",24],8,16],",pageType:",["escape",["macro",7],8,16],",template:",["escape",["macro",64],8,16],",contentType:",["escape",["macro",139],8,16],",doi:",["escape",["macro",25],8,16],",abTestValue:",["escape",["macro",75],8,16],",authorization:",["escape",["macro",140],8,16],",bpid:",["escape",["macro",71],8,16],",primaryArticleType:",["escape",["macro",55],8,16],",referrer:",["escape",["macro",141],8,16],",openAcces:",["escape",["macro",142],8,16],",GAclientId:",["escape",["macro",143],8,16],",usabillaSurvey:",["escape",["macro",144],8,16],",\ncountry:",["escape",["macro",131],8,16],"}});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":345
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/collections\/hgnwmmsqfr\/events"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*aacr.*|.*cell\\-symposia.*|.*csh\\asia.*|.*meetings.*|.*ebi.*training.*|.*embl.*training.*|.*imb.*confer.*|.*asconacir.*|.*ature.*natureconfer.*|.*nyas.*events.*|.*ellcomegenomecam.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_77($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":",C0002,|,c0002,"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"interactive-event"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_145($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",104],
      "arg1":"local-www"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"\/srep"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"\/srep\/"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/articles"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_193($|,)))"
    },{
      "function":"_sw",
      "arg0":["macro",0],
      "arg1":"\/srep"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_294($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",106],
      "arg1":"author link - publication"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_312($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",106],
      "arg1":"author link - pubmed"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_313($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",106],
      "arg1":"author link - scholar"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_316($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",107],
      "arg1":"experimental|material|(meth\\w+\\b)|procedure",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_393($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",107],
      "arg1":"references|related links",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_401($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_399($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_494($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_495($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(^$|((^|,)10482319_497($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",110],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"OneTrustGroupsUpdated"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":",C0009,"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^\/briefing.*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"update-access-details"
    },{
      "function":"_sw",
      "arg0":["macro",112],
      "arg1":"mts-"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",113],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"OneTrustGroupsUpdated"
    },{
      "function":"_eq",
      "arg0":["macro",114],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",115],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"audio"
    },{
      "function":"_css",
      "arg0":["macro",119],
      "arg1":"table.tvs_simple_table \u003E tbody \u003E tr \u003E td \u003E table \u003E tbody \u003E tr \u003E td \u003E input"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",64],
      "arg1":"mosaic"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.load"
    },{
      "function":"_css",
      "arg0":["macro",119],
      "arg1":"#onetrust-accept-btn-handler"
    },{
      "function":"_css",
      "arg0":["macro",119],
      "arg1":"#accept-recommended-btn-handler"
    },{
      "function":"_css",
      "arg0":["macro",119],
      "arg1":"#onetrust-pc-btn-handler"
    },{
      "function":"_css",
      "arg0":["macro",119],
      "arg1":".save-preference-btn-handler"
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"press.nature.com"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(\/collections\/?)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^(www\\.nature\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",127],
      "arg1":"^(https?)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^\\\/(login|my-account|public\\\/n\\\/payment).*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"(idp|transfer|press)\\..*",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(\/nature\/journal\/.+?\/(?:(full)|(abs))\/.+?\\.html)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^(\/news\/.*?1\\.[0-9]+)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^\/news\/[0-9]{4}\/[0-9]+\/full\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"^\\\/(login|my-account|public\\\/n\\\/payment).*"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"(idp|transfer|press)\\..*"
    },{
      "function":"_cn",
      "arg0":["macro",112],
      "arg1":"natureindex.com"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"ga-client-id-pushed-to-datalayer"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":",C0008,"
    },{
      "function":"_eq",
      "arg0":["macro",130],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",131],
      "arg1":"CN"
    },{
      "function":"_eq",
      "arg0":["macro",132],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"(?i)blogs.nature.com",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^(local\\.nature\\.com(:[0-9]+)?)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",113],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^(local-www\\.nature\\.com(:\\d+)?)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"guide.labanimal.com"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^(.*?\\.natureasiapacific\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^(.*?\\.natureindex\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^((test-|staging-)?www\\.palgrave-journals\\.com)$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"^(www\\.labanimal\\.com)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"staging-guide.labanimal.com"
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"staging-www.nature.com"
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"test-guide.labanimal.com"
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"test-www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",112],
      "arg1":"test-www.nature.com|qa-snpaas-www.nature.com"
    },{
      "function":"_re",
      "arg0":["macro",87],
      "arg1":"(idp|transfer|press)\\..*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",136],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",64],
      "arg1":"bav"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"article"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"\\\/(login|register)\\\/*"
    },{
      "function":"_cn",
      "arg0":["macro",112],
      "arg1":"staging-idp.nature.com"
    },{
      "function":"_eq",
      "arg0":["macro",112],
      "arg1":"idp.nature.com"
    },{
      "function":"_eq",
      "arg0":["macro",137],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",138],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"\/"
    }],
  "rules":[
    [["if",0,1,2,3],["add",2]],
    [["if",6],["add",3]],
    [["if",7,8],["add",4]],
    [["if",9,10,11],["add",1]],
    [["if",11,12],["add",1]],
    [["if",13,14,15],["add",5]],
    [["if",14,16,17],["add",5]],
    [["if",2,18,19],["add",6]],
    [["if",2,20,21],["add",7]],
    [["if",2,22,23],["add",8]],
    [["if",24,25,26],["add",9]],
    [["if",25,27,28],["add",10]],
    [["if",25,29],["add",11]],
    [["if",30,31],["add",12]],
    [["if",30,32],["add",13]],
    [["if",30,33],["add",14]],
    [["if",34,35],["add",15]],
    [["if",35,37],["add",16]],
    [["if",35],["add",16,41,43,46,49,53,62,63,65,67,70]],
    [["if",38],["add",16,69]],
    [["if",39,40],["add",16]],
    [["if",35,43],["add",17]],
    [["if",35,44],["add",18]],
    [["if",45],["add",19]],
    [["if",4,40,46],["add",20]],
    [["if",11],["add",21,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,42,45,48,51,52,0,55,78]],
    [["if",11,48],["unless",47],["add",22]],
    [["if",49],["add",23,24]],
    [["if",40,50],["add",40]],
    [["if",40,51],["add",44]],
    [["if",40,52],["add",47]],
    [["if",40,53],["add",50]],
    [["if",54,55],["add",54]],
    [["if",55,56,57,58],["add",56]],
    [["if",11],["unless",59,60],["add",57]],
    [["if",55,61],["add",58]],
    [["if",55,62],["add",58]],
    [["if",55,63],["add",58]],
    [["if",67],["unless",64,65,66],["add",59]],
    [["if",11,48,69,70],["unless",47,71],["add",60]],
    [["if",5],["unless",4],["add",61],["block",2,4,5,6,7,8,9,10,11,12,13,14,16,19,53,67,73]],
    [["if",5],["unless",68],["add",64],["block",59,63,69,71,72,74,75]],
    [["if",35,72],["add",66]],
    [["if",35,73],["add",68]],
    [["if",35,74],["add",68]],
    [["if",35,75,76],["add",69]],
    [["if",35,76,77],["add",69]],
    [["if",35,78],["add",69]],
    [["if",35,76,79],["add",69]],
    [["if",35,80],["add",69]],
    [["if",35,76,81],["add",69]],
    [["if",35,82],["add",69]],
    [["if",35,83],["add",69]],
    [["if",35,76,84],["add",69]],
    [["if",35,85],["add",69]],
    [["if",35,76,86],["add",69]],
    [["if",35,74,76],["add",69]],
    [["if",35,73,76],["add",69]],
    [["if",35,87],["unless",59,88],["add",71]],
    [["if",35],["unless",59,60,90],["add",72]],
    [["if",55,91],["add",73]],
    [["if",35,92,93],["unless",90],["add",74]],
    [["if",35,92,94],["add",75]],
    [["if",35,95],["add",76]],
    [["if",11,96,97],["add",77]],
    [["if",5],["unless",36],["block",15,17,18,65,66,68,76,78]],
    [["if",41,42],["block",16,53]],
    [["if",5,89],["block",71,72,74,75]]]
},
"runtime":[[50,"__crto",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","injectScript"]],[52,"d","https://static.criteo.net/js/ld/ld.js"],[52,"e",["b","criteo_q"]],[41,"f"],[3,"f",[8,"event","viewHome"]],[38,[17,[15,"a"],"tagType"],[46,"LISTING_TAG","PRODUCT_TAG","BASKET_TAG","TRANSACTION_TAG"],[46,[5,[46,[3,"f",[8,"event","viewList","item",[17,[15,"a"],"listingID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewItem","item",[17,[15,"a"],"productID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewBasket","item",[17,[15,"a"],"basketArray"]]],[4]]],[5,[46,[3,"f",[8,"event","trackTransaction","id",[30,[17,[15,"a"],"TransactionID"],""],"item",[17,[15,"a"],"TransactionArray"]]],[4]]]]],["e",[8,"event","setAccount","account",[17,[15,"a"],"accountId"]],[8,"event","setHashedEmail","email",[30,[17,[15,"a"],"hashedEmail"],""]],[8,"event","setSiteType","type",[30,[17,[15,"a"],"siteType"],"d"]],[15,"f"]],["c",[15,"d"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"criteoStatic"]]]
,"permissions":{"__crto":{"access_globals":{"keys":[{"key":"criteo_q","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.criteo.net\/js\/ld\/ld.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__crto"]}

};

(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self,D=function(n,v){var w=n.split("."),q=C;w[0]in q||"undefined"==typeof q.execScript||q.execScript("var "+w[0]);for(var t;w.length&&(t=w.shift());)w.length||void 0===v?q=q[t]&&q[t]!==Object.prototype[t]?q[t]:q[t]={}:q[t]=v};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var E,F=function(){};
(function(){function n(h,m){h=h||"";m=m||{};for(var y in v)v.hasOwnProperty(y)&&(m.N&&(m["fix_"+y]=!0),m.G=m.G||m["fix_"+y]);var z={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},e={comment:function(){var a=h.indexOf("--\x3e");if(0<=a)return{content:h.substr(4,a),length:a+3}},endTag:function(){var a=h.match(q);if(a)return{tagName:a[1],length:a[0].length}},atomicTag:function(){var a=e.startTag();if(a){var b=h.slice(a.length);
if(b.match(new RegExp("</\\s*"+a.tagName+"\\s*>","i"))){var c=b.match(new RegExp("([\\s\\S]*?)</\\s*"+a.tagName+"\\s*>","i"));if(c)return{tagName:a.tagName,g:a.g,content:c[1],length:c[0].length+a.length}}}},startTag:function(){var a=h.match(w);if(a){var b={};a[2].replace(t,function(c,d,k,g,r){var u=k||g||r||B.test(d)&&d||null,l=document.createElement("div");l.innerHTML=u;b[d]=l.textContent||l.innerText||u});return{tagName:a[1],g:b,s:!!a[3],length:a[0].length}}},chars:function(){var a=h.indexOf("<");
return{length:0<=a?a:h.length}}},f=function(){for(var a in z)if(z[a].test(h)){var b=e[a]();return b?(b.type=b.type||a,b.text=h.substr(0,b.length),h=h.slice(b.length),b):null}};m.G&&function(){var a=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,b=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,c=[];c.H=function(){return this[this.length-1]};c.v=function(l){var p=this.H();return p&&p.tagName&&p.tagName.toUpperCase()===l.toUpperCase()};c.V=function(l){for(var p=
0,x;x=this[p];p++)if(x.tagName===l)return!0;return!1};var d=function(l){l&&"startTag"===l.type&&(l.s=a.test(l.tagName)||l.s);return l},k=f,g=function(){h="</"+c.pop().tagName+">"+h},r={startTag:function(l){var p=l.tagName;"TR"===p.toUpperCase()&&c.v("TABLE")?(h="<TBODY>"+h,u()):m.oa&&b.test(p)&&c.V(p)?c.v(p)?g():(h="</"+l.tagName+">"+h,u()):l.s||c.push(l)},endTag:function(l){c.H()?m.W&&!c.v(l.tagName)?g():c.pop():m.W&&(k(),u())}},u=function(){var l=h,p=d(k());h=l;if(p&&r[p.type])r[p.type](p)};f=function(){u();
return d(k())}}();return{append:function(a){h+=a},ea:f,sa:function(a){for(var b;(b=f())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var a=h;h="";return a},ta:function(){return h},stack:[]}}var v=function(){var h={},m=this.document.createElement("div");m.innerHTML="<P><I></P></I>";h.va="<P><I></P></I>"!==m.innerHTML;m.innerHTML="<P><i><P></P></i></P>";h.ua=2===m.childNodes.length;return h}(),w=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
q=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,t=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,B=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;n.supports=v;for(var A in v);E=n})();
(function(){function n(){}function v(e){return void 0!==e&&null!==e}function w(e,f,a){var b,c=e&&e.length||0;for(b=0;b<c;b++)f.call(a,e[b],b)}function q(e,f,a){for(var b in e)e.hasOwnProperty(b)&&f.call(a,b,e[b])}function t(e,f){q(f,function(a,b){e[a]=b});return e}function B(e,f){e=e||{};q(f,function(a,b){v(e[a])||(e[a]=b)});return e}function A(e){try{return y.call(e)}catch(a){var f=[];w(e,function(b){f.push(b)});return f}}var h={J:n,K:n,L:n,M:n,O:n,P:function(e){return e},done:n,error:function(e){throw e;
},fa:!1},m=this;if(!m.postscribe){var y=Array.prototype.slice,z=function(){function e(a,b,c){var d="data-ps-"+b;if(2===arguments.length){var k=a.getAttribute(d);return v(k)?String(k):k}v(c)&&""!==c?a.setAttribute(d,c):a.removeAttribute(d)}function f(a,b){var c=a.ownerDocument;t(this,{root:a,options:b,l:c.defaultView||c.parentWindow,i:c,o:E("",{N:!0}),u:[a],B:"",C:c.createElement(a.nodeName),j:[],h:[]});e(this.C,"proxyof",0)}f.prototype.write=function(){[].push.apply(this.h,arguments);for(var a;!this.m&&
this.h.length;)a=this.h.shift(),"function"===typeof a?this.U(a):this.D(a)};f.prototype.U=function(a){var b={type:"function",value:a.name||a.toString()};this.A(b);a.call(this.l,this.i);this.I(b)};f.prototype.D=function(a){this.o.append(a);for(var b,c=[],d,k;(b=this.o.ea())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(k=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.ka(c);d&&this.X(b);k&&this.Y(b)};f.prototype.ka=function(a){var b=this.R(a);
b.F&&(b.Z=this.B+b.F,this.B+=b.da,this.C.innerHTML=b.Z,this.ia())};f.prototype.R=function(a){var b=this.u.length,c=[],d=[],k=[];w(a,function(g){c.push(g.text);if(g.g){if(!/^noscript$/i.test(g.tagName)){var r=b++;d.push(g.text.replace(/(\/?>)/," data-ps-id="+r+" $1"));"ps-script"!==g.g.id&&"ps-style"!==g.g.id&&k.push("atomicTag"===g.type?"":"<"+g.tagName+" data-ps-proxyof="+r+(g.s?" />":">"))}}else d.push(g.text),k.push("endTag"===g.type?g.text:"")});return{wa:a,raw:c.join(""),F:d.join(""),da:k.join("")}};
f.prototype.ia=function(){for(var a,b=[this.C];v(a=b.shift());){var c=1===a.nodeType;if(!c||!e(a,"proxyof")){c&&(this.u[e(a,"id")]=a,e(a,"id",null));var d=a.parentNode&&e(a.parentNode,"proxyof");d&&this.u[d].appendChild(a)}b.unshift.apply(b,A(a.childNodes))}};f.prototype.X=function(a){var b=this.o.clear();b&&this.h.unshift(b);a.src=a.g.src||a.g.ma;a.src&&this.j.length?this.m=a:this.A(a);var c=this;this.ja(a,function(){c.I(a)})};f.prototype.Y=function(a){var b=this.o.clear();b&&this.h.unshift(b);a.type=
a.g.type||a.g.TYPE||"text/css";this.la(a);b&&this.write()};f.prototype.la=function(a){var b=this.T(a);this.aa(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:b.appendChild(this.i.createTextNode(a.content)))};f.prototype.T=function(a){var b=this.i.createElement(a.tagName);b.setAttribute("type",a.type);q(a.g,function(c,d){b.setAttribute(c,d)});return b};f.prototype.aa=function(a){this.D('<span id="ps-style"/>');var b=this.i.getElementById("ps-style");b.parentNode.replaceChild(a,
b)};f.prototype.A=function(a){a.ba=this.h;this.h=[];this.j.unshift(a)};f.prototype.I=function(a){a!==this.j[0]?this.options.error({message:"Bad script nesting or script finished twice"}):(this.j.shift(),this.write.apply(this,a.ba),!this.j.length&&this.m&&(this.A(this.m),this.m=null))};f.prototype.ja=function(a,b){var c=this.S(a),d=this.ha(c),k=this.options.J;a.src&&(c.src=a.src,this.ga(c,d?k:function(){b();k()}));try{this.$(c),a.src&&!d||b()}catch(g){this.options.error(g),b()}};f.prototype.S=function(a){var b=
this.i.createElement(a.tagName);q(a.g,function(c,d){b.setAttribute(c,d)});a.content&&(b.text=a.content);return b};f.prototype.$=function(a){this.D('<span id="ps-script"/>');var b=this.i.getElementById("ps-script");b.parentNode.replaceChild(a,b)};f.prototype.ga=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;t(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var k={message:"remote script failed "+
a.src};c();d(k);b()}})};f.prototype.ha=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.fa&&a.src&&a.hasAttribute("async"))};return f}();m.postscribe=function(){function e(){var d=b.shift(),k;d&&(k=d[d.length-1],k.K(),d.stream=f.apply(null,d),k.L())}function f(d,k,g){function r(x){x=g.P(x);c.write(x);g.M(x)}c=new z(d,g);c.id=a++;c.name=g.name||c.id;var u=d.ownerDocument,l={close:u.close,open:u.open,write:u.write,writeln:u.writeln};t(u,{close:n,open:n,write:function(){return r(A(arguments).join(""))},
writeln:function(){return r(A(arguments).join("")+"\n")}});var p=c.l.onerror||n;c.l.onerror=function(x,G,H){g.error({qa:x+" - "+G+":"+H});p.apply(c.l,arguments)};c.write(k,function(){t(u,l);c.l.onerror=p;g.done();c=null;e()});return c}var a=0,b=[],c=null;return t(function(d,k,g){"function"===typeof g&&(g={done:g});g=B(g,h);d=/^#/.test(d)?m.document.getElementById(d.substr(1)):d.pa?d[0]:d;var r=[d,k,g];d.ca={cancel:function(){r.stream?r.stream.abort():r[1]=n}};g.O(r);b.push(r);c||e();return d.ca},
{streams:{},ra:b,na:z})}();F=m.postscribe}})();D("google_tag_manager_external.postscribe.installPostscribe",function(){var n=window.google_tag_manager;n&&(n.postscribe||(n.postscribe=window.postscribe||F))});D("google_tag_manager_external.postscribe.getPostscribe",function(){return window.google_tag_manager.postscribe});}).call(this);
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var na=fa,oa=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Bj=b.prototype},pa=this||self,qa=function(a){return a};var ra=function(a,b){this.g=a;this.s=b};var sa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ua=function(){this.B={};this.F=!1;this.H={}},va=function(a,b){var c=[],d;for(d in a.B)if(a.B.hasOwnProperty(d))switch(d=d.substr(5),b){case 1:c.push(d);break;case 2:c.push(a.get(d));break;case 3:c.push([d,a.get(d)])}return c};ua.prototype.get=function(a){return this.B["dust."+a]};ua.prototype.set=function(a,b){this.F||(a="dust."+a,this.H.hasOwnProperty(a)||(this.B[a]=b))};
ua.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var wa=function(a,b){b="dust."+b;a.F||a.H.hasOwnProperty(b)||delete a.B[b]};ua.prototype.rb=function(){this.F=!0};var k=function(a){this.s=new ua;this.g=[];this.B=!1;a=a||[];for(var b in a)a.hasOwnProperty(b)&&(sa(b)?this.g[Number(b)]=a[Number(b)]:this.s.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if(!this.B)if("length"===a){if(!sa(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else sa(a)?this.g[Number(a)]=b:this.s.set(a,b)};aa.get=function(a){return"length"===a?this.length():sa(a)?this.g[Number(a)]:this.s.get(a)};aa.length=function(){return this.g.length};aa.qb=function(){for(var a=va(this.s,1),b=0;b<this.g.length;b++)a.push(b+"");return new k(a)};var xa=function(a,b){sa(b)?delete a.g[Number(b)]:wa(a.s,b)};aa=k.prototype;
aa.pop=function(){return this.g.pop()};aa.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.g.shift()};aa.splice=function(a,b,c){return new k(this.g.splice.apply(this.g,arguments))};aa.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};aa.has=function(a){return sa(a)&&this.g.hasOwnProperty(a)||this.s.has(a)};aa.rb=function(){this.B=!0;Object.freeze(this.g);this.s.rb()};var ya=function(){function a(f,g){if(b[f]){if(b[f].od+g>b[f].max)throw Error("Quota exceeded");b[f].od+=g}}var b={},c=void 0,d=void 0,e={Oi:function(f){c=f},lg:function(){c&&a(c,1)},Qi:function(f){d=f},sb:function(f){d&&a(d,f)},ej:function(f,g){b[f]=b[f]||{od:0};b[f].max=g},ri:function(f){return b[f]&&b[f].od||0},reset:function(){b={}},ci:a};e.onFnConsume=e.Oi;e.consumeFn=e.lg;e.onStorageConsume=e.Qi;e.consumeStorage=e.sb;e.setMax=e.ej;e.getConsumed=e.ri;e.reset=e.reset;e.consume=e.ci;return e};var za=function(a,b){this.B=a;this.R=function(c,d,e){return c.apply(d,e)};this.F=b;this.s=new ua;this.g=this.H=void 0};za.prototype.add=function(a,b){Ba(this,a,b,!1)};var Ba=function(a,b,c,d){if(!a.s.F)if(a.B.sb(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.s;e.set(b,c);e.H["dust."+b]=!0}else a.s.set(b,c)};
za.prototype.set=function(a,b){this.s.F||(!this.s.has(a)&&this.F&&this.F.has(a)?this.F.set(a,b):(this.B.sb(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.s.set(a,b)))};za.prototype.get=function(a){return this.s.has(a)?this.s.get(a):this.F?this.F.get(a):void 0};za.prototype.has=function(a){return!!this.s.has(a)||!(!this.F||!this.F.has(a))};var Da=function(a){var b=new za(a.B,a);a.H&&(b.H=a.H);b.R=a.R;b.g=a.g;return b};var Ea={},Fa=function(a,b){Ea[a]=Ea[a]||[];Ea[a][b]=!0},Ga=function(a){for(var b=[],c=Ea[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Ha=function(){},Ja=function(a){return"function"==typeof a},n=function(a){return"string"==typeof a},Ka=function(a){return"number"==typeof a&&!isNaN(a)},La=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&Fa("TAGGING",4):Fa("TAGGING",5);return b},Oa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Pa=function(a,b){if(a&&La(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Sa=function(a,b){if(!Ka(a)||!Ka(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ua=function(a,b){for(var c=new Ta,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Va=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Wa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Xa=
function(a){return Math.round(Number(a))||0},Ya=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Za=function(a){var b=[];if(La(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},$a=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},ab=function(){return new Date(Date.now())},bb=function(){return ab().getTime()},Ta=function(){this.prefix="gtm.";this.values={}};Ta.prototype.set=function(a,b){this.values[this.prefix+a]=b};
Ta.prototype.get=function(a){return this.values[this.prefix+a]};
var cb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},eb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},fb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},hb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},ib=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},jb=function(a,b){var c=A;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Oa(b,d))return}return d},kb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},lb=/^\w{1,9}$/,mb=function(a){var b=[];Va(a,function(c,d){lb.test(c)&&d&&b.push(c)});return b.join(",")};var nb=function(a,b){ua.call(this);this.R=a;this.Da=b};oa(nb,ua);nb.prototype.toString=function(){return this.R};nb.prototype.qb=function(){return new k(va(this,1))};nb.prototype.g=function(a,b){a.B.lg();return this.Da.apply(new pb(this,a),Array.prototype.slice.call(arguments,1))};nb.prototype.s=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var rb=function(a,b){for(var c,d=0;d<b.length&&!(c=qb(a,b[d]),c instanceof ra);d++);return c},qb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof nb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.H;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},pb=function(a,b){this.s=a;this.g=b},F=function(a,b){var c=a.g;return La(b)?qb(c,b):b},G=function(a){return a.s.R};var sb=function(){ua.call(this)};oa(sb,ua);sb.prototype.qb=function(){return new k(va(this,1))};var ub={control:function(a,b){return new ra(a,F(this,b))},fn:function(a,b,c){var d=this.g,e=F(this,b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.B.sb(a.length+f.length);return new nb(a,function(){return function(g){var h=Da(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=F(this,l[m]),l[m]instanceof ra)return l[m];for(var p=e.get("length"),q=
0;q<p;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new k(l));var r=rb(h,f);if(r instanceof ra)return"return"===r.g?r.s:r}}())},list:function(a){var b=this.g.B;b.sb(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=F(this,arguments[d]);"string"===typeof e&&b.sb(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.B,c=new sb,d=0;d<arguments.length-1;d+=2){var e=F(this,arguments[d])+"",f=F(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.sb(g);c.set(e,f)}return c},undefined:function(){}};var vb=function(){this.B=ya();this.g=new za(this.B)},wb=function(a,b,c){var d=new nb(b,c);d.rb();a.g.set(b,d)},xb=function(a,b,c){ub.hasOwnProperty(b)&&wb(a,c||b,ub[b])};vb.prototype.Lb=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.s(c)};vb.prototype.s=function(a){for(var b,c=0;c<arguments.length;c++)b=qb(this.g,arguments[c]);return b};vb.prototype.F=function(a,b){var c=Da(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=qb(c,arguments[e]);return d};var yb,Ab=function(){if(void 0===yb){var a=null,b=pa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:qa,createScript:qa,createScriptURL:qa})}catch(c){pa.console&&pa.console.error(c.message)}yb=a}else yb=a}return yb};var Cb=function(a,b){this.g=b===Bb?a:""};Cb.prototype.toString=function(){return this.g+""};var Bb={},Db=function(a){var b=Ab(),c=b?b.createScriptURL(a):a;return new Cb(c,Bb)};var Eb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Fb;a:{var Gb=pa.navigator;if(Gb){var Hb=Gb.userAgent;if(Hb){Fb=Hb;break a}}Fb=""}var Ib=function(a){return-1!=Fb.indexOf(a)};var Kb=function(a,b,c){this.g=c===Jb?a:""};Kb.prototype.toString=function(){return this.g.toString()};var Lb=function(a){return a instanceof Kb&&a.constructor===Kb?a.g:"type_error:SafeHtml"},Jb={},Mb=function(a){var b=Ab(),c=b?b.createHTML(a):a;return new Kb(c,null,Jb)},Nb=new Kb(pa.trustedTypes&&pa.trustedTypes.emptyHTML||"",0,Jb);var Ob=function(a,b){a.src=b instanceof Cb&&b.constructor===Cb?b.g:"type_error:TrustedResourceUrl";var c,d,e=(a.ownerDocument&&a.ownerDocument.defaultView||window).document,f=null===(d=e.querySelector)||void 0===d?void 0:d.call(e,"script[nonce]");(c=f?f.nonce||f.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)};var Pb=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Ub=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Vb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Lb(Nb);return!c.parentElement}),Wb=function(a,b){if(Vb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Lb(b)};var A=window,H=document,Xb=navigator,Yb=H.currentScript&&H.currentScript.src,Zb=function(a,b){var c=A[a];A[a]=void 0===c?b:c;return A[a]},$b=function(a){var b=H.getElementsByTagName("script")[0]||H.body||H.head;b.parentNode.insertBefore(a,b)},ac=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},bc={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},cc=function(a,b,c,d){var e=H.createElement("script");
d&&Va(d,function(f,g){f=f.toLowerCase();bc.hasOwnProperty(f)||e.setAttribute(f,g)});e.type="text/javascript";e.async=!0;Ob(e,Db(a));ac(e,b);c&&(e.onerror=c);$b(e);return e},dc=function(){if(Yb){var a=Yb.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},ec=function(a,b){var c=H.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=H.body&&H.body.lastChild||H.body||H.head;d.parentNode.insertBefore(c,
d);ac(c,b);void 0!==a&&(c.src=a);return c},fc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},gc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},hc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},J=function(a){A.setTimeout(a,0)},ic=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:
null},jc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},kc=function(a){var b=H.createElement("div"),c=Mb("A<div>"+a+"</div>");Wb(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},lc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},
mc=function(a){Xb.sendBeacon&&Xb.sendBeacon(a)||fc(a)},nc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var oc=function(a,b){return F(this,a)&&F(this,b)},pc=function(a,b){return F(this,a)===F(this,b)},qc=function(a,b){return F(this,a)||F(this,b)},rc=function(a,b){a=F(this,a);b=F(this,b);return-1<String(a).indexOf(String(b))},sc=function(a,b){a=String(F(this,a));b=String(F(this,b));return a.substring(0,b.length)===b},tc=function(a,b){a=F(this,a);b=F(this,b);switch(a){case "pageLocation":var c=A.location.href;b instanceof sb&&b.get("stripProtocol")&&(c=c.replace(/^https?:\/\//,""));return c}};var vc=function(){this.g=new vb;uc(this)};vc.prototype.Lb=function(a){return this.g.s(a)};var uc=function(a){xb(a.g,"map");var b=function(c,d){wb(a.g,c,d)};b("and",oc);b("contains",rc);b("equals",pc);b("or",qc);b("startsWith",sc);b("variable",tc)};var wc=function(a){if(a instanceof wc)return a;this.Ra=a};wc.prototype.toString=function(){return String(this.Ra)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var yc=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,zc=function(a){if(null==a)return String(a);var b=yc.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ac=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Bc=function(a){if(!a||"object"!=zc(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ac(a,"constructor")&&!Ac(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ac(a,b)},L=function(a,b){var c=b||("array"==zc(a)?[]:{}),d;for(d in a)if(Ac(a,d)){var e=a[d];"array"==zc(e)?("array"!=zc(c[d])&&(c[d]=[]),c[d]=L(e,c[d])):Bc(e)?(Bc(c[d])||(c[d]={}),c[d]=L(e,c[d])):c[d]=e}return c};var Dc=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=va(h,1),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=Oa(d,h);if(-1<l)return e[l];if(h instanceof k){var m=[];d.push(h);e.push(m);for(var p=h.qb(),q=0;q<p.length();q++)m[p.get(q)]=g(h.get(p.get(q)));return m}if(h instanceof sb){var r={};d.push(h);e.push(r);f(h,r);return r}if(h instanceof nb){var t=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Cc(u[v],b,!!c);var w=b?b.B:ya(),y=new za(w);
b&&(y.g=b.g);return g(h.g.apply(h,[y].concat(u)))};d.push(h);e.push(t);f(h,t);return t}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Cc=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Oa(d,
h);if(-1<l)return e[l];if(La(h)||Wa(h)){var m=new k([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(Bc(h)){var q=new sb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var r=new nb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Dc(F(this,v[w]),b,!!c);return g((0,this.g.R)(h,h,v))});d.push(h);e.push(r);f(h,r);return r}var t=typeof h;if(null===h||"string"===t||"number"===t||"boolean"===t)return h;};return g(a)};var Ec=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Fc=function(a){if(void 0===a||La(a)||Bc(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Gc={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Ec(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):xa(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Ec(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):xa(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Mc="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Nc=new ra("break"),Oc=new ra("continue"),Pc=function(a,b){return F(this,a)+F(this,b)},Qc=function(a,b){return F(this,a)&&F(this,b)},Rc=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Oa(Mc,b)){var d=Dc(c);return Cc(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var e=a.get(b);if(e instanceof nb){var f=Ec(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Oa(Gc.supportedMethods,b)){var g=
Ec(c);g.unshift(this.g);return Gc[b].apply(a,g)}}if(a instanceof nb||a instanceof sb){if(a.has(b)){var h=a.get(b);if(h instanceof nb){var l=Ec(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof nb?a.R:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Ec(c))}if(a instanceof wc&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Sc=function(a,b){a=F(this,a);if("string"!==
typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=F(this,b);c.set(a,d);return d},Tc=function(a){var b=Da(this.g),c=rb(b,Array.prototype.slice.apply(arguments));if(c instanceof ra)return c},Uc=function(){return Nc},Vc=function(a){for(var b=F(this,a),c=0;c<b.length;c++){var d=F(this,b[c]);if(d instanceof ra)return d}},Wc=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];
if("string"===typeof d){var e=F(this,arguments[c+1]);Ba(b,d,e,!0)}}},Xc=function(){return Oc},Yc=function(a,b,c){var d=new k;b=F(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,F(this,f))},Zc=function(a,b){return F(this,a)/F(this,b)},$c=function(a,b){a=F(this,a);b=F(this,b);var c=a instanceof wc,d=b instanceof wc;return c||d?c&&d?a.Ra==b.Ra:!1:a==b},ad=function(a){for(var b,c=0;c<arguments.length;c++)b=
F(this,arguments[c]);return b};function bd(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=rb(f,d);if(g instanceof ra){if("break"===g.g)break;if("return"===g.g)return g}}}function cd(a,b,c){if("string"===typeof b)return bd(a,function(){return b.length},function(f){return f},c);if(b instanceof sb||b instanceof k||b instanceof nb){var d=b.qb(),e=d.length();return bd(a,function(){return e},function(f){return d.get(f)},c)}}
var dd=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return cd(function(e){d.set(a,e);return d},b,c)},ed=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return cd(function(e){var f=Da(d);Ba(f,a,e,!0);return f},b,c)},fd=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return cd(function(e){var f=Da(d);f.add(a,e);return f},b,c)},hd=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return gd(function(e){d.set(a,e);return d},b,c)},id=
function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return gd(function(e){var f=Da(d);Ba(f,a,e,!0);return f},b,c)},jd=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);var d=this.g;return gd(function(e){var f=Da(d);f.add(a,e);return f},b,c)};
function gd(a,b,c){if("string"===typeof b)return bd(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof k)return bd(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var kd=function(a,b,c,d){function e(p,q){for(var r=0;r<f.length();r++){var t=f.get(r);q.add(t,p.get(t))}}var f=F(this,a);if(!(f instanceof k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=F(this,d);var h=Da(g);for(e(g,h);qb(h,b);){var l=rb(h,d);if(l instanceof ra){if("break"===l.g)break;if("return"===l.g)return l}var m=Da(g);e(h,m);qb(m,c);h=m}},ld=function(a){a=F(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},md=function(a,b){var c;a=F(this,a);b=F(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof sb||a instanceof k||a instanceof nb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:sa(b)&&(c=a[b]);else if(a instanceof wc)return;return c},nd=function(a,b){return F(this,a)>F(this,
b)},od=function(a,b){return F(this,a)>=F(this,b)},ud=function(a,b){a=F(this,a);b=F(this,b);a instanceof wc&&(a=a.Ra);b instanceof wc&&(b=b.Ra);return a===b},vd=function(a,b){return!ud.call(this,a,b)},wd=function(a,b,c){var d=[];F(this,a)?d=F(this,b):c&&(d=F(this,c));var e=rb(this.g,d);if(e instanceof ra)return e},xd=function(a,b){return F(this,a)<F(this,b)},yd=function(a,b){return F(this,a)<=F(this,b)},zd=function(a,b){return F(this,a)%F(this,b)},Ad=function(a,b){return F(this,a)*F(this,b)},Bd=function(a){return-F(this,
a)},Cd=function(a){return!F(this,a)},Dd=function(a,b){return!$c.call(this,a,b)},Ed=function(){return null},Fd=function(a,b){return F(this,a)||F(this,b)},Gd=function(a,b){var c=F(this,a);F(this,b);return c},Hd=function(a){return F(this,a)},Id=function(a){return Array.prototype.slice.apply(arguments)},Jd=function(a){return new ra("return",F(this,a))},Kd=function(a,b,c){a=F(this,a);b=F(this,b);c=F(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
nb||a instanceof k||a instanceof sb)&&a.set(b,c);return c},Ld=function(a,b){return F(this,a)-F(this,b)},Md=function(a,b,c){a=F(this,a);var d=F(this,b),e=F(this,c);if(!La(d)||!La(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===F(this,d[h]))if(f=F(this,e[h]),f instanceof ra){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=F(this,e[e.length-1]),f instanceof ra&&("return"===f.g||"continue"===
f.g)))return f},Nd=function(a,b,c){return F(this,a)?F(this,b):F(this,c)},Od=function(a){a=F(this,a);return a instanceof nb?"function":typeof a},Pd=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Qd=function(a,b,c,d){var e=F(this,d);if(F(this,c)){var f=rb(this.g,e);if(f instanceof ra){if("break"===f.g)return;if("return"===f.g)return f}}for(;F(this,a);){var g=rb(this.g,e);if(g instanceof ra){if("break"===g.g)break;if("return"===g.g)return g}F(this,
b)}},Rd=function(a){return~Number(F(this,a))},Sd=function(a,b){return Number(F(this,a))<<Number(F(this,b))},Td=function(a,b){return Number(F(this,a))>>Number(F(this,b))},Ud=function(a,b){return Number(F(this,a))>>>Number(F(this,b))},Vd=function(a,b){return Number(F(this,a))&Number(F(this,b))},Wd=function(a,b){return Number(F(this,a))^Number(F(this,b))},Xd=function(a,b){return Number(F(this,a))|Number(F(this,b))};var Zd=function(){this.g=new vb;Yd(this)};Zd.prototype.Lb=function(a){return $d(this.g.s(a))};
var ie=function(a,b){return $d(he.g.F(a,b))},Yd=function(a){var b=function(d,e){xb(a.g,d,String(e))};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){wb(a.g,String(d),e)};c(0,Pc);c(1,Qc);c(2,Rc);c(3,Sc);c(53,Tc);c(4,Uc);c(5,Vc);c(52,Wc);c(6,Xc);c(9,Vc);c(50,Yc);c(10,Zc);c(12,$c);c(13,ad);c(47,dd);c(54,ed);c(55,fd);c(63,kd);c(64,hd);c(65,id);c(66,jd);c(15,ld);c(16,md);c(17,md);c(18,nd);c(19,od);c(20,ud);c(21,vd);c(22,wd);c(23,xd);c(24,yd);c(25,zd);c(26,Ad);c(27,
Bd);c(28,Cd);c(29,Dd);c(45,Ed);c(30,Fd);c(32,Gd);c(33,Gd);c(34,Hd);c(35,Hd);c(46,Id);c(36,Jd);c(43,Kd);c(37,Ld);c(38,Md);c(39,Nd);c(40,Od);c(41,Pd);c(42,Qd);c(58,Rd);c(57,Sd);c(60,Td);c(61,Ud);c(56,Vd);c(62,Wd);c(59,Xd)},ke=function(){var a=he,b=je();wb(a.g,"require",b)},le=function(a,b){a.g.g.R=b};function $d(a){if(a instanceof ra||a instanceof nb||a instanceof k||a instanceof sb||a instanceof wc||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var me=function(){var a=function(b){return{toString:function(){return b}}};return{Xg:a("consent"),Gd:a("consent_always_fire"),pf:a("convert_case_to"),qf:a("convert_false_to"),rf:a("convert_null_to"),sf:a("convert_true_to"),tf:a("convert_undefined_to"),nj:a("debug_mode_metadata"),pb:a("function"),Ih:a("instance_name"),Kh:a("live_only"),Lh:a("malware_disabled"),Mh:a("metadata"),qj:a("original_activity_id"),rj:a("original_vendor_template_id"),Oh:a("once_per_event"),Uf:a("once_per_load"),tj:a("priority_override"),
uj:a("respected_consent_types"),Yf:a("setup_tags"),Zf:a("tag_id"),$f:a("teardown_tags")}}();
var ne=[],oe={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},pe=function(a){return oe[a]},qe=/[\x00\x22\x26\x27\x3c\x3e]/g;var ue=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,ve={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},we=function(a){return ve[a]};ne[7]=function(a){return String(a).replace(ue,we)};
ne[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(ue,we)+"'"}};var Ee=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Fe={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Ge=function(a){return Fe[a]};ne[16]=function(a){return a};var Ie;
var Je=[],Ke=[],Le=[],Me=[],Ne=[],Oe={},Pe,Qe,Re,Se=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Te=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Oe[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.jg&&b.jg(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===me.Gd.toString()&&a[f]){}d&&b&&b.ig&&(e.vtp_gtmCachedValues=b.ig);return void 0!==d?d(e):Ie(c,e,b)},Ve=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Ue(a[e],b,c));return d},Ue=function(a,b,c){if(La(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Ue(a[e],b,c));return d;case "macro":var f=
a[1];if(c[f])return;var g=Je[f];if(!g||b.Oe(g))return;c[f]=!0;try{var h=Ve(g,b,c);h.vtp_gtmEventId=b.id;d=Te(h,b);Re&&(d=Re.di(d,h))}catch(y){b.Ag&&b.Ag(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Ue(a[l],b,c)]=Ue(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var q=Ue(a[p],b,c);Qe&&(m=m||q===Qe.dd);d.push(q)}return Qe&&m?Qe.gi(d):d.join("");case "escape":d=Ue(a[1],b,c);if(Qe&&La(a[1])&&"macro"===a[1][0]&&Qe.Ci(a))return Qe.Ti(d);d=
String(d);for(var r=2;r<a.length;r++)ne[a[r]]&&(d=ne[a[r]](d));return d;case "tag":var t=a[1];if(!Me[t])throw Error("Unable to resolve tag reference "+t+".");return d={rg:a[2],index:t};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=We(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},We=function(a,b,c){try{return Pe(Ve(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Xe=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.s=a;this.g=c};oa(Xe,Error);function Ye(a,b){if(La(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Ye(a[c],b[c])}};var Ze=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.B=a;this.s=b;this.g=[]};oa(Ze,Error);var af=function(){return function(a,b){a instanceof Ze||(a=new Ze(a,$e));b&&a.g.push(b);throw a;}};function $e(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ka(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var df=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}for(var c=[],d=[],e=bf(a),f=0;f<Ke.length;f++){var g=Ke[f],h=cf(g,e);if(h){for(var l=g.add||[],m=0;m<l.length;m++)c[l[m]]=!0;b(g.block||[])}else null===h&&b(g.block||[]);}for(var p=[],q=0;q<Me.length;q++)c[q]&&!d[q]&&(p[q]=!0);return p},cf=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;if(2===e)return null}for(var f=
a.unless||[],g=0;g<f.length;g++){var h=b(f[g]);if(2===h)return null;if(1===h)return!1}return!0},bf=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=We(Le[c],a));return b[c]}};var ef={di:function(a,b){b[me.pf]&&"string"===typeof a&&(a=1==b[me.pf]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(me.rf)&&null===a&&(a=b[me.rf]);b.hasOwnProperty(me.tf)&&void 0===a&&(a=b[me.tf]);b.hasOwnProperty(me.sf)&&!0===a&&(a=b[me.sf]);b.hasOwnProperty(me.qf)&&!1===a&&(a=b[me.qf]);return a}};var ff=function(){this.g={}};function gf(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Xe(c,d,g);}}function hf(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));gf(e,b,d,g);gf(f,b,d,g)}}}};var pf=function(a){var b=jf.N,c=this;this.s=new ff;this.g={};var d={},e=hf(this.s,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Va(a,function(f,g){var h={};Va(g,function(l,m){var p=kf(l,m);h[l]=p.assert;d[l]||(d[l]=p.V)});c.g[f]=function(l,m){var p=h[l];if(!p)throw lf(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);p.apply(void 0,q);e.apply(void 0,q)}})},rf=function(a){return qf.g[a]||
function(){}};function kf(a,b){var c=Se(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=lf;try{return Te(c)}catch(d){return{assert:function(e){throw new Xe(e,{},"Permission "+e+" is unknown.");},V:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function lf(a,b,c){return new Xe(a,b,c)};var sf=!1;var tf={};tf.mj=Ya('');tf.ki=Ya('');var uf=sf,vf=tf.ki,wf=tf.mj;
var Lf=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Mf=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Lf(b,"/*")&&(b=b.slice(0,-2));Lf(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Nf=/^[a-z0-9-]+$/i,Of=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Qf=function(a,b){var c;if(!(c=!Pf(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Nf.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Of.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),q=p.slice(0,p.indexOf("/")),r;var t=l.hostname,u=q;if(0!==u.indexOf("*."))r=t.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=t.toLowerCase().indexOf(u.toLowerCase());r=-1===v?!1:t.length===u.length?
!0:t.length!==u.length+v?!1:"."===t[v-1]}if(r){var w=p.slice(p.indexOf("/"));h=Mf(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},Pf=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};var Rf=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Sf={Fn:"function",DustMap:"Object",List:"Array"},M=function(a,b,c){for(var d=0;d<b.length;d++){var e=Rf.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof nb?p="Fn":l instanceof k?p="List":l instanceof sb?p="DustMap":
l instanceof wc&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(Sf[h]||h)+".");}}};function Tf(a){return""+a}
function Uf(a,b){var c=[];return c};var Vf=function(a,b){var c=new nb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=F(this,d[e]);return b.apply(this,d)});c.rb();return c},Wf=function(a,b){var c=new sb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ja(e)?c.set(d,Vf(a+"_"+d,e)):(Ka(e)||n(e)||"boolean"==typeof e)&&c.set(d,e)}c.rb();return c};var Xf=function(a,b){M(G(this),["apiName:!string","message:?string"],arguments);var c={},d=new sb;return d=Wf("AssertApiSubject",c)};var Yf=function(a,b){M(G(this),["actual:?*","message:?string"],arguments);var c={},d=new sb;
return d=Wf("AssertThatSubject",c)};function Zf(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Dc(arguments[d],c));return Cc(a.apply(null,b))}}var ag=function(){for(var a=Math,b=$f,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Zf(a[e].bind(a)))}return c};var bg=function(a){var b;return b};var cg=function(a){var b;return b};var dg=function(a){M(G(this),["uri:!string"],arguments);return encodeURI(a)};var eg=function(a){M(G(this),["uri:!string"],arguments);return encodeURIComponent(a)};var fg=function(a){M(G(this),["message:?string"],arguments);};var gg=function(a,b){M(G(this),["min:!number","max:!number"],arguments);return Sa(a,b)};var hg=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.Xh.apply(null,Array.prototype.slice.call(arguments,1))};var ig=function(){hg(this,"read_container_data");var a=new sb;a.set("containerId",'GTM-NWDMT9Q');a.set("version",'243');a.set("environmentName",'');a.set("debugMode",uf);a.set("previewMode",wf);a.set("environmentMode",vf);a.rb();return a};var jg=function(){return(new Date).getTime()};var kg=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof nb)return"function";if(a instanceof wc){a=a.Ra;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var lg=function(a){function b(c){return function(d){try{return c(d)}catch(e){(uf||wf)&&a.call(this,e.message)}}}return{parse:b(function(c){return Cc(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Dc(c))})}};var mg=function(a){return Xa(Dc(a,this.g))};var ng=function(a){return Number(Dc(a,this.g))};var og=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var pg=function(a,b,c){var d=null,e=!1;return e?d:null};var $f="floor ceil round max min abs pow sqrt".split(" ");var qg=function(){var a={};return{si:function(b){return a.hasOwnProperty(b)?a[b]:void 0},fj:function(b,c){a[b]=c},reset:function(){a={}}}},rg=function(a,b){M(G(this),["apiName:!string","mock:?*"],arguments);};var sg={};
sg.keys=function(a){return new k};
sg.values=function(a){return new k};
sg.entries=function(a){return new k};sg.freeze=function(a){return a};var ug=function(){this.g={};this.s={};};ug.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
ug.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.s.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Ja(b)?Vf(a,b):Wf(a,b)};
var wg=function(a,b,c){if(a.s.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.s[b]=Ja(c)?Vf(b,c):Wf(b,c)};function vg(a,b){var c=void 0;return c};function xg(){var a={};return a};var N={cc:"_ee",kd:"_syn_or_mod",vj:"_uei",ee:"_eu",sj:"_pci",Wd:"event_callback",Tc:"event_timeout",Ea:"gtag.config",Na:"gtag.get",va:"purchase",Bb:"refund",ib:"begin_checkout",zb:"add_to_cart",Ab:"remove_from_cart",gh:"view_cart",xf:"add_to_wishlist",Ma:"view_item",wf:"view_promotion",vf:"select_promotion",Jd:"select_item",Oc:"view_item_list",uf:"add_payment_info",fh:"add_shipping_info",Za:"value_key",Ya:"value_callback",Fa:"allow_ad_personalization_signals",Zb:"restricted_data_processing",Vb:"allow_google_signals",
Ia:"cookie_expires",Wb:"cookie_update",ac:"session_duration",Yc:"session_engaged_time",Qa:"user_properties",ma:"transport_url",T:"ads_data_redaction",xa:"user_data",Xb:"first_party_collection",D:"ad_storage",I:"analytics_storage",Hd:"region",nf:"wait_for_update",Ha:"conversion_linker",Ga:"conversion_cookie_prefix",ia:"value",fa:"currency",Of:"trip_type",aa:"items",Hf:"passengers",Kd:"allow_custom_scripts",Gb:"session_id",Mf:"quantity",ob:"transaction_id",lb:"language",Sc:"country",Qc:"allow_enhanced_conversions",
Pd:"aw_merchant_id",Nd:"aw_feed_country",Od:"aw_feed_language",Md:"discount",Bf:"developer_id",$c:"delivery_postal_code",Vd:"estimated_delivery_date",Td:"shipping",ce:"new_customer",Qd:"customer_lifetime_value",Ud:"enhanced_conversions"};N.Rf=[N.va,N.Bb,N.ib,N.zb,N.Ab,N.gh,N.xf,N.Ma,N.wf,N.vf,N.Oc,N.Jd,N.uf,N.fh];N.Qf=[N.Fa,N.Vb,N.Wb];N.Sf=[N.Ia,N.Tc,N.ac,N.Yc];var zg=function(a){Fa("GTM",a)};var Ag=function(a,b){this.g=a;this.defaultValue=void 0===b?!1:b};var Bg=new Ag(1936,!0),Cg=new Ag(1933);var Eg=function(){var a=Dg;if(a.Me&&a.hasOwnProperty("Me"))return a.Me;var b=new a;return a.Me=b};var Dg=function(){var a={};this.g=function(b,c){return null!=a[b]?a[b]:c};this.s=function(){a[Cg.g]=!0}},Fg=function(a){return Eg().g(a.g,a.defaultValue)};var Gg=[];function Hg(){var a=Zb("google_tag_data",{});a.ics||(a.ics={entries:{},set:Ig,update:Jg,addListener:Kg,notifyListeners:Lg,active:!1,usedDefault:!1});return a.ics}
function Ig(a,b,c,d,e,f){var g=Hg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&n(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||p===e||(p===d?m!==e:!p&&!m)){var q=!!(f&&0<f&&void 0===l.update),r={region:p,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)h[a]=r;q&&A.setTimeout(function(){h[a]===r&&r.quiet&&(r.quiet=!1,Mg(a),Lg(),Fa("TAGGING",2))},f)}}}
function Jg(a,b){var c=Hg();c.active=!0;if(void 0!=b){var d=Ng(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Ng(a);f.quiet?(f.quiet=!1,Mg(a)):g!==d&&Mg(a)}}function Kg(a,b){Gg.push({Ae:a,mi:b})}function Mg(a){for(var b=0;b<Gg.length;++b){var c=Gg[b];La(c.Ae)&&-1!==c.Ae.indexOf(a)&&(c.Cg=!0)}}function Lg(a){for(var b=0;b<Gg.length;++b){var c=Gg[b];if(c.Cg){c.Cg=!1;try{c.mi({bi:a})}catch(d){}}}}
var Ng=function(a){var b=Hg().entries[a]||{};return void 0!==b.update?b.update:b.initial},Og=function(a){return(Hg().entries[a]||{}).initial},Pg=function(a){return!(Hg().entries[a]||{}).quiet},Qg=function(){return Fg(Cg)?Hg().active:!1},Rg=function(){return Hg().usedDefault},Sg=function(a,b){Hg().addListener(a,b)},Tg=function(a){Hg().notifyListeners(a)},Ug=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Pg(b[e]))return!0;return!1}if(c()){var d=!1;Sg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},
Vg=function(a,b){function c(){for(var f=[],g=0;g<d.length;g++){var h=d[g];!1===Ng(h)||e[h]||(f.push(h),e[h]=!0)}return f}var d=n(b)?[b]:b,e={};c().length!==d.length&&Sg(d,function(f){var g=c();0<g.length&&(f.Ae=g,a(f))})};function Wg(a){for(var b=[],c=0;c<Xg.length;c++){var d=a(Xg[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Xg=[N.D,N.I],Yg=function(a){var b=a[N.Hd];b&&zg(40);var c=a[N.nf];c&&zg(41);for(var d=La(b)?b:[b],e={Pb:0};e.Pb<d.length;e={Pb:e.Pb},++e.Pb)Va(a,function(f){return function(g,h){if(g!==N.Hd&&g!==N.nf){var l=d[f.Pb];Hg().set(g,h,l,"US","US-CA",c)}}}(e))},Zg=function(a,b){Va(a,function(c,d){Hg().update(c,d)});Tg(b)},fh=function(a){var b=Ng(a);return void 0!=b?b:!0},gh=function(){return"G1"+Wg(Ng)},hh=function(a,b){Sg(a,b)},ih=function(a,b){Vg(a,b)},jh=function(a,b){Ug(a,
b)};var lh=function(a){return kh?H.querySelectorAll(a):null},mh=function(a,b){if(!kh)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!H.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},nh=!1;if(H.querySelectorAll)try{var oh=H.querySelectorAll(":root");oh&&1==oh.length&&oh[0]==H.documentElement&&(nh=!0)}catch(a){}var kh=nh;var ph,qh=!1;var rh=function(a){if(H.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!A.getComputedStyle)return!0;var c=A.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=A.getComputedStyle(d,
null))}return!1};
var sh=function(){var a=H.body,b=H.documentElement||a&&a.parentElement,c,d;if(H.compatMode&&"BackCompat"!==H.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};zg(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},th=function(a){var b=sh(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var uh=[],vh=!(!A.IntersectionObserver||!A.IntersectionObserverEntry),wh=function(a,b,c){for(var d=new A.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var f=0;f<uh.length;f++)if(!uh[f])return uh[f]=d,f;return uh.push(d)-1},xh=function(a,b,c){function d(h,l){var m={top:0,bottom:0,right:0,left:0,width:0,height:0},p={boundingClientRect:h.getBoundingClientRect(),
intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:h,time:bb()};J(function(){return a(p)})}for(var e=[],f=[],g=0;g<b.length;g++)e.push(0),f.push(-1);c.sort(function(h,l){return h-l});return function(){for(var h=0;h<b.length;h++){var l=th(b[h]);if(l>e[h])for(;f[h]<c.length-1&&l>=c[f[h]+1];)d(b[h],l),f[h]++;else if(l<e[h])for(;0<=f[h]&&l<=c[f[h]];)d(b[h],l),f[h]--;e[h]=l}}},yh=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(vh){var e=!1;J(function(){e||
xh(a,b,c)()});return wh(function(f){e=!0;for(var g={Qb:0};g.Qb<f.length;g={Qb:g.Qb},g.Qb++)J(function(h){return function(){return a(f[h.Qb])}}(g))},b,c)}return A.setInterval(xh(a,b,c),1E3)},zh=function(a){vh?0<=a&&a<uh.length&&uh[a]&&(uh[a].disconnect(),uh[a]=void 0):A.clearInterval(a)};var Ah=/:[0-9]+$/,Bh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Eh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ch(a.protocol)||Ch(A.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
A.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||A.location.hostname).replace(Ah,"").toLowerCase());return Dh(a,b,c,d,e)},Dh=function(a,b,c,d,e){var f,g=Ch(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Fh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Ah,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Fa("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Oa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Bh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Ch=function(a){return a?a.replace(":",
"").toLowerCase():""},Fh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Gh=function(a){var b=H.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Fa("TAGGING",1),c="/"+c);var d=b.hostname.replace(Ah,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Hh=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),e=Gh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var Ih={},Jh=!0;var Lh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),Mh=new RegExp(/@(gmail|googlemail)\./i),Nh=new RegExp(/support|noreply/i),Oh="SCRIPT STYLE IMG SVG PATH BR".split(" "),Ph=["BR"],Qh={};
function Rh(a){var b;if(a===H.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=Rh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}function Sh(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}
function Th(a){if(0==a.length)return null;var b;b=Sh(a,function(c){return!Nh.test(c.sa)});b=Sh(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=Sh(b,function(c){return!rh(c.element)});return b[0]}
var Uh=function(a){var b=!a||!!a.zi,c=!a||!!a.Ai,d=b+"."+c;a&&a.sd&&a.sd.length&&(d+="."+a.sd.join("."));var e=Qh[d];if(e&&200>bb()-e.timestamp)return e.result;var f;var g=[],h=H.body;if(h){for(var l=h.querySelectorAll("*"),m=0;m<l.length&&1E4>m;m++){var p=l[m];if(!(0<=Oh.indexOf(p.tagName.toUpperCase()))){for(var q=!1,r=0;r<p.childElementCount&&1E4>r;r++)if(!(0<=Ph.indexOf(p.children[r].tagName.toUpperCase()))){q=!0;break}q||g.push(p)}}f={elements:g,status:1E4<l.length?"2":"1"}}else f={elements:g,
status:"4"};for(var t=f,u=t.elements,v=[],w=0;w<u.length;w++){var y=u[w],x=y.textContent;y.value&&(x=y.value);if(x){var z=x.match(Lh);if(z){var B=z[0],C;if(A.location){var E=Dh(A.location,"host",!0);C=0<=B.toLowerCase().indexOf(E)}else C=!1;C||v.push({element:y,sa:B})}}}var D;var I=a&&a.sd;if(I&&0!==I.length){for(var T=[],R=0;R<v.length;R++){for(var U=!0,S=0;S<I.length;S++){var P=I[S];if(P&&mh(v[R].element,P)){U=!1;break}}U&&T.push(v[R])}D=T}else D=v;var K=Th(D),W=[];if(K){var ca=K.element,O={sa:K.sa,
tagName:ca.tagName,type:1};b&&(O.querySelector=Rh(ca));c&&(O.isVisible=!rh(ca));W.push(O)}var ka={elements:W,status:10<v.length?"3":t.status};Qh[d]={timestamp:bb(),result:ka};return ka},Vh=function(a){return a.tagName+":"+a.isVisible+":"+a.sa.length+":"+Mh.test(a.sa)};var jf={},pi=null,qi=Math.random();jf.N="GTM-NWDMT9Q";jf.jd="770";jf.pj="";jf.Zg="ChEI8PO0hwYQ3cuxhd+UnPuQARIkAJIN4tyObeD4CO6XcTQwPuPGVImpsDBzATKXB/Eazh86orlNGgKwKQ\x3d\x3d";var ri={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},si={__paused:!0,__tg:!0},ti;for(ti in ri)ri.hasOwnProperty(ti)&&(si[ti]=!0);var ui="www.googletagmanager.com/gtm.js";
var vi=ui,wi=Ya(""),xi=null,yi=null,zi="https://www.googletagmanager.com/a?id="+jf.N+"&cv=243",Ai={},Bi={},Ci=function(){var a=pi.sequence||1;pi.sequence=a+1;return a};jf.Yg="";var Di={},Ei=new Ta,Fi={},Gi={},Ji={name:"dataLayer",set:function(a,b){L(kb(a,b),Fi);Hi()},get:function(a){return Ii(a,2)},reset:function(){Ei=new Ta;Fi={};Hi()}},Ii=function(a,b){return 2!=b?Ei.get(a):Ki(a)},Ki=function(a,b){var c=a.split(".");b=b||[];for(var d=Fi,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Oa(b,d))return}return d},Li=function(a,b){Gi.hasOwnProperty(a)||(Ei.set(a,b),L(kb(a,b),Fi),Hi())},Mi=function(){for(var a=["gtm.allowlist","gtm.blocklist",
"gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=Ii(c,1);if(La(d)||Bc(d))d=L(d);Gi[c]=d}},Hi=function(a){Va(Gi,function(b,c){Ei.set(b,c);L(kb(b,void 0),Fi);L(kb(b,c),Fi);a&&delete Gi[b]})},Oi=function(a,b,c){Di[a]=Di[a]||{};Di[a][b]=Ni(b,c)},Ni=function(a,b){var c,d=1!==(void 0===b?2:b)?Ki(a):Ei.get(a);"array"===zc(d)||"object"===zc(d)?c=L(d):c=d;return c},Pi=function(a,b){if(Di[a])return Di[a][b]},Qi=function(a,b){Di[a]&&delete Di[a][b]};var Vi={},Wi=function(a,b){if(A._gtmexpgrp&&A._gtmexpgrp.hasOwnProperty(a))return A._gtmexpgrp[a];void 0===Vi[a]&&(Vi[a]=Math.floor(Math.random()*b));return Vi[a]};function Xi(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};function Yi(a){return"null"!==a.origin};var aj=function(a,b,c,d){return Zi(d)?Xi(a,String(b||$i()),c):[]},dj=function(a,b,c,d,e){if(Zi(e)){var f=bj(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=cj(f,function(g){return g.rd},b);if(1===f.length)return f[0].id;f=cj(f,function(g){return g.Cc},c);return f[0]?f[0].id:void 0}}};function ej(a,b,c,d){var e=$i(),f=window;Yi(f)&&(f.document.cookie=a);var g=$i();return e!=g||void 0!=c&&0<=aj(b,g,!1,d).indexOf(c)}
var ij=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!Zi(c.Va))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=fj(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Mi);g=e(g,"samesite",
c.$i);c.bj&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=gj(),q=void 0,r=!1,t=0;t<p.length;++t){var u="none"!==p[t]?p[t]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}r=!0;if(!hj(u,c.path)&&ej(v,a,b,c.Va))return 0}if(q&&!r)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return hj(m,c.path)?1:ej(g,a,b,c.Va)?0:1},jj=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return ij(a,b,c)};
function cj(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function bj(a,b,c){for(var d=[],e=aj(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),rd:1*l[0]||1,Cc:1*l[1]||1}))}}return d}
var fj=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},kj=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,lj=/(^|\.)doubleclick\.net$/i,hj=function(a,b){return lj.test(window.document.location.hostname)||"/"===b&&kj.test(a)},$i=function(){return Yi(window)?window.document.cookie:""},gj=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;lj.test(e)||kj.test(e)||a.push("none");return a},Zi=function(a){if(!Fg(Cg)||!a||!Qg())return!0;if(!Pg(a))return!1;var b=Ng(a);return null==b?!0:!!b};var mj=function(){return[Math.round(2147483647*Math.random()),Math.round(bb()/1E3)].join(".")},pj=function(a,b,c,d,e){var f=nj(b);return dj(a,f,oj(c),d,e)},qj=function(a,b,c,d){var e=""+nj(c),f=oj(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},nj=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},oj=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function rj(a,b,c){var d,e=Number(null!=a.ub?a.ub:void 0);0!==e&&(d=new Date((b||bb())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var sj=["1"],tj={},xj=function(a){var b=uj(a.prefix);if(!tj[b]&&!vj(b,a.path,a.domain)){var c=mj();if(0===wj(b,c,a)){var d=Zb("google_tag_data",{});d._gcl_au?Fa("GTM",57):d._gcl_au=c}vj(b,a.path,a.domain)}};function wj(a,b,c){var d=qj(b,"1",c.domain,c.path),e=rj(c);e.Va="ad_storage";return jj(a,d,e)}function vj(a,b,c){var d=pj(a,b,c,sj,"ad_storage");d&&(tj[a]=d);return d}function uj(a){return(a||"_gcl")+"_au"};var yj=function(a){for(var b=[],c=H.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({ff:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(g,h){return h.timestamp-g.timestamp});return b};
function zj(a,b){var c=yj(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].ff]||(d[c[e].ff]=[]);var g={version:f[0],timestamp:1E3*Number(f[1]),Aa:f[2]};b&&3<f.length&&(g.labels=f.slice(3));d[c[e].ff].push(g)}}return d};function Aj(){for(var a=Bj,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Cj(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Bj,Dj;
function Ej(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=Dj[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Bj=Bj||Cj();Dj=Dj||Aj();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Fj;var Jj=function(){var a=Gj,b=Hj,c=Ij(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){gc(H,"mousedown",d);gc(H,"keyup",d);gc(H,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Kj=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Ij().decorators.push(f)},Lj=function(a,b,c){for(var d=Ij().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==H.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[q])||p&&0<=l[q].indexOf(m)){h=!0;break a}h=!1}if(h){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&fb(e,g.callback())}}return e},Ij=function(){var a=Zb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Mj=/(.*?)\*(.*?)\*(.*)/,Nj=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Oj=/^(?:www\.|m\.|amp\.)+/,Pj=/([^?#]+)(\?[^#]*)?(#.*)?/;function Qj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Sj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);Bj=Bj||Cj();Dj=Dj||Aj();for(var l=[],m=0;m<h.length;m+=3){var p=m+1<h.length,q=m+2<h.length,r=h.charCodeAt(m),t=p?h.charCodeAt(m+1):0,u=q?h.charCodeAt(m+2):0,v=r>>2,w=(r&3)<<4|t>>4,y=(t&15)<<2|u>>6,x=u&63;q||(x=64,p||(y=64));l.push(Bj[v],Bj[w],Bj[y],Bj[x])}g=l.join("");f.call(e,g)}}var z=b.join("*");return["1",Rj(z),
z].join("*")},Rj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Fj)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Fj=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Fj[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Uj=function(){return function(a){var b=Gh(A.location.href),
c=b.search.replace("?",""),d=Bh(c,"_gl",!1,!0)||"";a.query=Tj(d)||{};var e=Eh(b,"fragment").match(Qj("_gl"));a.fragment=Tj(e&&e[3]||"")||{}}},Vj=function(a){var b=Uj(),c=Ij();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(fb(d,e.query),a&&fb(d,e.fragment));return d},Tj=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Mj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=
0;p<b;++p)if(m===Rj(h,p)){l=!0;break a}l=!1}if(l){for(var q={},r=h?h.split("*"):[],t=0;t<r.length;t+=2)q[r[t]]=Ej(r[t+1]);return q}}}}catch(u){}};function Wj(a,b,c,d){function e(p){var q=p,r=Qj(a).exec(q),t=q;if(r){var u=r[2],v=r[4];t=r[1];v&&(t=t+u+v)}p=t;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+m}d=void 0===d?!1:d;var f=Pj.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function Xj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Lj(b,1,c),e=Lj(b,2,c),f=Lj(b,3,c);if(hb(d)){var g=Sj(d);c?Yj("_gl",g,a):Zj("_gl",g,a,!1)}if(!c&&hb(e)){var h=Sj(e);Zj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){Zj(m,p,q,void 0);break a}if("form"===q.tagName.toLowerCase()){Yj(m,p,q);break a}}"string"==typeof q&&Wj(m,p,q,void 0)}}
function Zj(a,b,c,d){if(c.href){var e=Wj(a,b,c.href,void 0===d?!1:d);Eb.test(e)&&(c.href=e)}}
function Yj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=H.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Wj(a,b,c.action);Eb.test(m)&&(c.action=m)}}}
var Gj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Xj(e,e.hostname)}}catch(g){}},Hj=function(a){try{if(a.action){var b=Eh(Gh(a.action),"host");Xj(a,b)}}catch(c){}},ak=function(a,b,c,d){Jj();Kj(a,b,"fragment"===c?2:1,!!d,!1)},bk=function(a,b){Jj();Kj(a,[Dh(A.location,"host",!0)],b,!0,!0)},ck=function(){var a=H.location.hostname,b=Nj.exec(H.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Oj,""),l=e.replace(Oj,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},dk=function(a,b){return!1===a?!1:a||b||ck()};var kk={};var lk=/^\w+$/,mk=/^[\w-]+$/,nk={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},ok=function(){if(!Fg(Cg)||!Qg())return!0;var a=Ng("ad_storage");return null==a?!0:!!a},pk=function(a,b){Pg("ad_storage")?ok()?a():Vg(a,"ad_storage"):b?Fa("TAGGING",3):Ug(function(){pk(a,!0)},["ad_storage"])},rk=function(a){return qk(a).map(function(b){return b.Aa})},qk=function(a){var b=[];if(!Yi(A)||!H.cookie)return b;var c=aj(a,H.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{Lc:d.Lc},e++){var f=sk(c[e]);if(null!=f){var g=f,h=g.version;d.Lc=g.Aa;var l=g.timestamp,m=g.labels,p=Pa(b,function(q){return function(r){return r.Aa===q.Lc}}(d));p?(p.timestamp=Math.max(p.timestamp,l),p.labels=tk(p.labels,m||[])):b.push({version:h,Aa:d.Lc,timestamp:l,labels:m})}}b.sort(function(q,r){return r.timestamp-q.timestamp});return uk(b)};function tk(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function vk(a){return a&&"string"==typeof a&&a.match(lk)?a:"_gcl"}
var xk=function(){var a=Gh(A.location.href),b=Eh(a,"query",!1,void 0,"gclid"),c=Eh(a,"query",!1,void 0,"gclsrc"),d=Eh(a,"query",!1,void 0,"wbraid"),e=Eh(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||Bh(f,"gclid",!1,void 0);c=c||Bh(f,"gclsrc",!1,void 0);d=d||Bh(f,"wbraid",!1,void 0)}return wk(b,c,e,d)},wk=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&mk.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==
a&&a.match(mk))switch(b){case void 0:f(a,"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},yk=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b}return!1},Ak=function(a){var b=xk();pk(function(){zk(b,a)})};
function zk(a,b,c,d){function e(p,q){var r=Bk(p,f);r&&(jj(r,q,g),h=!0)}b=b||{};d=d||[];var f=vk(b.prefix);c=c||bb();var g=rj(b,c,!0);g.Va="ad_storage";var h=!1,l=Math.round(c/1E3),m=function(p){var q=["GCL",l,p];0<d.length&&q.push(d.join("."));return q.join(".")};a.aw&&e("aw",m(a.aw[0]));a.dc&&e("dc",m(a.dc[0]));a.gf&&e("gf",m(a.gf[0]));a.ha&&e("ha",m(a.ha[0]));a.gp&&e("gp",m(a.gp[0]));(void 0==kk.enable_gbraid_cookie_write?0:kk.enable_gbraid_cookie_write)&&!h&&a.gb&&e("gb",m(a.gb[0]))}
var Dk=function(a,b){var c=Vj(!0);pk(function(){for(var d=vk(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==nk[f]){var g=Bk(f,d),h=c[g];if(h){var l=Math.min(Ck(h),bb()),m;b:{var p=l;if(Yi(A))for(var q=aj(g,H.cookie,void 0,"ad_storage"),r=0;r<q.length;++r)if(Ck(q[r])>p){m=!0;break b}m=!1}if(!m){var t=rj(b,l,!0);t.Va="ad_storage";jj(g,h,t)}}}}zk(wk(c.gclid,c.gclsrc),b)})},Bk=function(a,b){var c=nk[a];if(void 0!==c)return b+c},Ck=function(a){return 0!==Ek(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function sk(a){var b=Ek(a.split("."));return 0===b.length?null:{version:b[0],Aa:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function Ek(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!mk.test(a[2])?[]:a}
var Fk=function(a,b,c,d,e){if(La(b)&&Yi(A)){var f=vk(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Bk(a[l],f);if(m){var p=aj(m,H.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};pk(function(){ak(g,b,c,d)})}},uk=function(a){return a.filter(function(b){return mk.test(b.Aa)})},Gk=function(a,b){if(Yi(A)){for(var c=vk(b.prefix),d={},e=0;e<a.length;e++)nk[a[e]]&&(d[a[e]]=nk[a[e]]);pk(function(){Va(d,function(f,g){var h=aj(c+g,H.cookie,void 0,"ad_storage");h.sort(function(t,
u){return Ck(u)-Ck(t)});if(h.length){var l=h[0],m=Ck(l),p=0!==Ek(l.split(".")).length?l.split(".").slice(3):[],q={},r;r=0!==Ek(l.split(".")).length?l.split(".")[2]:void 0;q[f]=[r];zk(q,b,m,p)}})})}};function Hk(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Ik=function(a){function b(e,f,g){g&&(e[f]=g)}if(Qg()){var c=xk();if(Hk(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);bk(function(){return d},3);bk(function(){var e={};return e._up="1",e},1)}}};function Jk(a,b){var c=vk(b),d=Bk(a,c);if(!d)return 0;for(var e=qk(d),f=0,g=0;g<e.length;g++)f=Math.max(f,e[g].timestamp);return f}
function Kk(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var Lk=/^\d+\.fls\.doubleclick\.net$/;function Mk(a,b){Pg(N.D)?fh(N.D)?a():Vg(a,N.D):b?zg(42):jh(function(){Mk(a,!0)},[N.D])}function Nk(a){var b=Gh(A.location.href),c=Eh(b,"host",!1);if(c&&c.match(Lk)){var d=Eh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Ok(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=Nk("gcl"+a);if(d)return d.split(".")}var e=vk(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!fh(N.D)&&c,g;g=xk()[a]||[];if(0<g.length)return f?["0"]:g}var h=Bk(a,e);return h?rk(h):[]}function Pk(a){var b=[];Va(a,function(c,d){d=uk(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].Aa);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var Qk=function(a){var b=Nk("gac");return b?!fh(N.D)&&a?"0":decodeURIComponent(b):Pk(ok()?zj():{})},Rk=function(a){var b=Nk("gacgb");return b?!fh(N.D)&&a?"0":decodeURIComponent(b):Pk(ok()?zj("_gac_gb",!0):{})},Sk=function(a,b,c){var d=xk(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!yk(h,c)||e.push({Aa:f,He:h});!g||c&&"dc"!==c||e.push({Aa:g,He:"ds"});Mk(function(){xj(b);var l=tj[uj(b.prefix)],m=!1;if(l&&0<e.length)for(var p=pi.joined_auid=pi.joined_auid||{},q=0;q<e.length;q++){var r=e[q],t=r.Aa,u=r.He,v=(b.prefix||"_gcl")+"."+u+"."+t;if(!p[v]){var w="https://adservice.google.com/pagead/regclk";w="gb"===u?w+"?gbraid="+t+"&auid="+l:w+"?gclid="+t+"&auid="+l+"&gclsrc="+u;mc(w);m=p[v]=!0}}null==a&&(a=
m);if(a&&l){var y=uj(b.prefix),x=tj[y];x&&wj(y,x,b)}})},Tk=function(a){var b;if(Nk("gclaw")||Nk("gac")||0<(xk().aw||[]).length)b=!1;else{var c;if(0<(xk().gb||[]).length)c=!0;else{var d=Math.max(Jk("aw",a),Kk(ok()?zj():{}));c=Math.max(Jk("gb",a),Kk(ok()?zj("_gac_gb",!0):{}))>d}b=c}return b};var Uk=/[A-Z]+/,Vk=/\s/,Wk=function(a){if(n(a)&&(a=$a(a),!Vk.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Uk.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],O:d}}}}},Yk=function(a){for(var b={},c=0;c<a.length;++c){var d=Wk(a[c]);d&&(b[d.id]=d)}Xk(b);var e=[];Va(b,function(f,g){e.push(g)});return e};
function Xk(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.O[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Zk=function(){var a=!1;return a};var al=function(a,b,c,d){return(2===$k()||d||"http:"!=A.location.protocol?a:b)+c},$k=function(){var a=dc(),b;if(1===a)a:{var c=vi;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=H.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var nl=function(a){if(fh(N.D))return a;a=a.replace(/&url=([^&#]+)/,function(b,c){var d=Hh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)});a=a.replace(/&ref=([^&#]+)/,function(b,c){var d=Hh(decodeURIComponent(c));return"&ref="+encodeURIComponent(d)});return a},ol=function(){var a;if(!(a=wi)){var b;if(!0===A._gtmdgs)b=!0;else{var c=Xb&&Xb.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||
11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Xa("1");return Wi(1,100)<d?Wi(2,2):-1},pl=function(a){var b;if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var ql=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),rl={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},sl={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},tl="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ul=function(){var a=!1;return a},wl=function(a){var b=Ii("gtm.allowlist")||Ii("gtm.whitelist");b&&zg(9);ul()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&ib(Za(b),rl),d=Ii("gtm.blocklist")||
Ii("gtm.blacklist");d||(d=Ii("tagTypeBlacklist"))&&zg(3);d?zg(8):d=[];vl()&&(d=Za(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Oa(Za(d),"google")&&zg(2);var e=d&&ib(Za(d),sl),f={};return function(g){var h=g&&g[me.pb];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Bi[h]||[],m=a(h,l);if(b){var p;if(p=
m)a:{if(0>Oa(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Oa(c,l[q])){zg(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var r=!1;if(d){var t=0<=Oa(e,h);if(t)r=t;else{var u=Ua(e,l||[]);u&&zg(10);r=u}}var v=!m||r;v||!(0<=Oa(l,"sandboxedScripts"))||c&&-1!==Oa(c,"sandboxedScripts")||(v=Ua(e,tl));return f[h]=v}},vl=function(){return ql.test(A.location&&A.location.hostname)};var xl={active:!0,isAllowed:function(){return!0}},yl=function(a){var b=pi.zones;return b?b.checkState(jf.N,a):xl},zl=function(a){var b=pi.zones;!b&&a&&(b=pi.zones=a());return b};var Al=function(){},Bl=function(){};var Cl=!1,Dl=0,El=[];function Fl(a){if(!Cl){var b=H.createEventObject,c="complete"==H.readyState,d="interactive"==H.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Cl=!0;for(var e=0;e<El.length;e++)J(El[e])}El.push=function(){for(var f=0;f<arguments.length;f++)J(arguments[f]);return 0}}}function Gl(){if(!Cl&&140>Dl){Dl++;try{H.documentElement.doScroll("left"),Fl()}catch(a){A.setTimeout(Gl,50)}}}var Hl=function(a){Cl?a():El.push(a)};var Jl=function(a,b){this.g=!1;this.F=[];this.H={tags:[]};this.R=!1;this.s=this.B=0;Il(this,a,b)},Kl=function(a,b,c,d){if(si.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Bc(d)&&(e=L(d,e));e.id=c;e.status="timeout";return a.H.tags.push(e)-1},Ll=function(a,b,c,d){var e=a.H.tags[b];e&&(e.status=c,e.executionTime=d)},Ml=function(a){if(!a.g){for(var b=a.F,c=0;c<b.length;c++)b[c]();a.g=!0;a.F.length=0}},Il=function(a,b,c){Ja(b)&&a.kc(b);c&&A.setTimeout(function(){return Ml(a)},Number(c))};
Jl.prototype.kc=function(a){var b=this,c=eb(function(){return J(function(){a(jf.N,b.H)})});this.g?c():this.F.push(c)};var Nl=function(a){a.B++;return eb(function(){a.s++;a.R&&a.s>=a.B&&Ml(a)})};var Ol=function(){function a(d){return!Ka(d)||0>d?0:d}if(!pi._li&&A.performance&&A.performance.timing){var b=A.performance.timing.navigationStart,c=Ka(Ji.get("gtm.start"))?Ji.get("gtm.start"):0;pi._li={cst:a(c-b),cbt:a(yi-b)}}},Pl=function(a){A.performance&&A.performance.mark(jf.N+"_"+a+"_start")},Ql=function(a){if(A.performance){var b=jf.N+"_"+a+"_start",c=jf.N+"_"+a+"_duration";A.performance.measure(c,b);var d=A.performance.getEntriesByName(c)[0];A.performance.clearMarks(b);A.performance.clearMeasures(c);
var e=pi._p||{};void 0===e[a]&&(e[a]=d.duration,pi._p=e);return d.duration}},Rl=function(){if(A.performance&&A.performance.now){var a=pi._p||{};a.PAGEVIEW=A.performance.now();pi._p=a}};var Sl={},Tl=function(){return A.GoogleAnalyticsObject&&A[A.GoogleAnalyticsObject]},Ul=!1;
var Vl=function(a){A.GoogleAnalyticsObject||(A.GoogleAnalyticsObject=a||"ga");var b=A.GoogleAnalyticsObject;if(A[b])A.hasOwnProperty(b)||zg(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(ab());A[b]=c}Ol();return A[b]},Wl=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Tl();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Xl=function(a){if(!Qg())return;var b=Tl();b(a+"require","linker");b(a+"linker:passthrough",
!0);};
var Zl=function(a){},Yl=function(){return A.GoogleAnalyticsObject||"ga"},$l=function(a,b){return function(){var c=Tl(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var gm=function(a){},km=function(a){},lm=
function(){return"&tc="+Me.filter(function(a){return a}).length},om=function(){2022<=mm().length&&nm()},pm=function(a){return 0===a.indexOf("gtm.")?encodeURIComponent(a):"*"},rm=function(){qm||(qm=A.setTimeout(nm,500))},nm=function(){qm&&(A.clearTimeout(qm),qm=void 0);void 0===sm||tm[sm]&&!um&&!vm||(wm[sm]||xm.Di()||0>=ym--?(zg(1),wm[sm]=!0):(xm.Wi(),fc(mm(!0)),tm[sm]=!0,zm=Am=Bm=vm=um=""))},mm=function(a){var b=sm;if(void 0===b)return"";var c=Ga("GTM"),d=Ga("TAGGING");return[Cm,tm[b]?"":"&es=1",
Dm[b],gm(b),c?"&u="+c:"",d?"&ut="+d:"",lm(),um,vm,Bm,Am,km(a),zm,"&z=0"].join("")},Fm=function(){Cm=Em()},Em=function(){return[zi,"&v=3&t=t","&pid="+Sa(),"&rv="+jf.jd].join("")},jm=["L","S","Y"],fm=["S","E"],Gm={sampleRate:"0.005000",Rg:"",Qg:Number("5")},Hm=0<=H.location.search.indexOf("?gtm_latency=")||0<=H.location.search.indexOf("&gtm_latency="),Im;if(!(Im=Hm)){var Jm=Math.random(),Km=Gm.sampleRate;Im=Jm<Km}var Lm=Im,Mm={label:jf.N+" Container",children:[{label:"Initialization",children:[]}]},Cm=Em(),tm={},um="",vm="",zm="",Am="",im={},hm=!1,em={},Nm={},Bm="",sm=void 0,Dm={},wm={},qm=void 0,Om=2;0<Gm.Qg&&(Om=Gm.Qg);var xm=function(a,b){for(var c=0,d=[],e=0;e<a;++e)d.push(0);
return{Di:function(){return c<a?!1:bb()-d[c%a]<b},Wi:function(){var f=c++%a;d[f]=bb()}}}(Om,1E3),ym=1E3,Qm=function(a,b){if(Lm&&!wm[a]&&sm!==a){nm();sm=a;zm=um="";Dm[a]="&e="+pm(b)+"&eid="+a;rm();}},Rm=function(a,b,c,d){if(Lm&&b){var e,f=String(b[me.pb]||
"").replace(/_/g,"");0===f.indexOf("cvt")&&(f="cvt");e=f;var g=c+e;if(!wm[a]){a!==sm&&(nm(),sm=a);um=um?um+"."+g:"&tr="+g;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");
var l=(Oe[h]?"1":"2")+e;zm=zm?zm+"."+l:"&ti="+l;rm();om()}}};var Ym=function(a,b,c){if(Lm&&!wm[a]){a!==sm&&(nm(),
sm=a);var d=c+b;vm=vm?vm+"."+d:"&epr="+d;rm();om()}},Zm=function(a,b,c){};function $m(a,b,c,d){var e=Me[a],f=an(a,b,c,d);if(!f)return null;var g=Ue(e[me.Yf],c,[]);if(g&&g.length){var h=g[0];f=$m(h.index,{onSuccess:f,onFailure:1===h.rg?b.terminate:f,terminate:b.terminate},c,d)}return f}
function an(a,b,c,d){function e(){if(f[me.Lh])h();else{var w=Ve(f,c,[]);var y=w[me.Xg];if(null!=y)for(var x=0;x<y.length;x++)if(!fh(y[x])){h();return}var z=Kl(c.cb,String(f[me.pb]),Number(f[me.Zf]),w[me.Mh]),B=!1;w.vtp_gtmOnSuccess=function(){if(!B){B=!0;var D=bb()-E;Rm(c.id,Me[a],"5",D);Ll(c.cb,z,"success",
D);g()}};w.vtp_gtmOnFailure=function(){if(!B){B=!0;var D=bb()-E;Rm(c.id,Me[a],"6",D);Ll(c.cb,z,"failure",D);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;Rm(c.id,f,"1");var C=function(){var D=bb()-E;Rm(c.id,f,"7",D);Ll(c.cb,z,"exception",D);B||(B=!0,h())};var E=bb();try{Te(w,c)}catch(D){C(D)}}}var f=Me[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.Oe(f))return null;var m=Ue(f[me.$f],c,[]);if(m&&m.length){var p=m[0],q=$m(p.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!q)return null;g=q;h=2===p.rg?l:q}if(f[me.Uf]||f[me.Oh]){var r=f[me.Uf]?Ne:
c.gj,t=g,u=h;if(!r[a]){e=eb(e);var v=bn(a,r,e);g=v.onSuccess;h=v.onFailure}return function(){r[a](t,u)}}return e}function bn(a,b,c){var d=[],e=[];b[a]=cn(d,e,c);return{onSuccess:function(){b[a]=dn;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=en;for(var f=0;f<e.length;f++)e[f]()}}}function cn(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function dn(a){a()}function en(a,b){b()};var hn=function(a,b){for(var c=[],d=0;d<Me.length;d++)if(a[d]){var e=Me[d];var f=Nl(b.cb);try{var g=$m(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=c,l=h.push,m=d,p=e["function"];if(!p)throw"Error: No function name given for function call.";var q=Oe[p];l.call(h,{Mg:m,Dg:q?q.priorityOverride||0:0,Lb:g})}else fn(d,b),f()}catch(u){f()}}var r=b.cb;r.R=!0;r.s>=r.B&&Ml(r);c.sort(gn);for(var t=0;t<c.length;t++)c[t].Lb();
return 0<c.length};function gn(a,b){var c,d=b.Dg,e=a.Dg;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Mg,h=b.Mg;f=g>h?1:g<h?-1:0}return f}function fn(a,b){if(!Lm)return;var c=function(d){var e=b.Oe(Me[d])?"3":"4",f=Ue(Me[d][me.Yf],b,[]);f&&f.length&&c(f[0].index);Rm(b.id,Me[d],e);var g=Ue(Me[d][me.$f],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var jn=!1,pn=function(a){var b=bb(),c=a["gtm.uniqueEventId"],d=a.event;if("gtm.js"===d){if(jn)return!1;jn=!0;}var g=yl(c),h=!1;if(!g.active){if("gtm.js"!==d)return!1;h=!0;g=yl(Number.MAX_SAFE_INTEGER)}
Qm(c,d);var l=a.eventCallback,m=a.eventTimeout,p=l;var q={id:c,name:d,Oe:wl(g.isAllowed),gj:[],Ag:function(){zg(6)},jg:kn(c),cb:new Jl(p,m)};q.ig=ln();
mn(c,q.cb);var r=df(q);h&&(r=nn(r));var t=hn(r,q);"gtm.js"!==d&&"gtm.sync"!==d||Zl(jf.N);switch(d){case "gtm.init":t&&zg(20)}return on(r,t)};function kn(a){return function(b){Lm&&(Fc(b)||Zm(a,"input",b))}}
function mn(a,b){Oi(a,"event",1);Oi(a,"ecommerce",1);Oi(a,"gtm");Oi(a,"eventModel");}function ln(){var a={};a.event=Ni("event",1);a.ecommerce=Ni("ecommerce",1);a.gtm=Ni("gtm");a.eventModel=Ni("eventModel");return a}function nn(a){for(var b=[],c=0;c<a.length;c++)a[c]&&ri[String(Me[c][me.pb])]&&(b[c]=!0);return b}
function on(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Me[c]&&!si[String(Me[c][me.pb])])return!0;return!1}function qn(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Gh(""+c+b).href}}function rn(a,b){return sn()?qn(a,b):void 0}function sn(){var a=!1;return a};var tn=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0;this.isGtmEvent=!1},un=function(a){var b=new tn;b.eventModel=a;return b},vn=function(a,b){a.targetConfig=b;return a},wn=function(a,b){a.containerConfig=b;return a},xn=function(a,b){a.remoteConfig=b;return a},yn=function(a,
b){a.globalConfig=b;return a},zn=function(a,b){a.onSuccess=b;return a},An=function(a,b){a.setContainerTypeLoaded=b;return a},Bn=function(a,b){a.getContainerTypeLoaded=b;return a},Cn=function(a,b){a.onFailure=b;return a};
tn.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Dn=function(a){function b(e){Va(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Va(c,function(e){d.push(e)});return d},En=function(a,b){function c(f){Bc(f)&&Va(f,function(g,h){e=!0;d[g]=h})}var d={},e=!1;c(a.globalConfig[b]);c(a.remoteConfig[b]);c(a.containerConfig[b]);c(a.targetConfig[b]);c(a.eventModel[b]);return e?d:void 0};var Fn;if(3===jf.jd.length)Fn="g";else{var Gn="G";Fn=Gn}
var Hn={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Fn,OPT:"o"},In=function(a){var b=jf.N.split("-"),c=b[0].toUpperCase(),d=Hn[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===jf.jd.length){var g="w";f="2"+g}else f="";return f+d+jf.jd+e};function Jn(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c};var Kn=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var Ln=function(){return Ib("iPhone")&&!Ib("iPod")&&!Ib("iPad")};Ib("Opera");Ib("Trident")||Ib("MSIE");Ib("Edge");!Ib("Gecko")||-1!=Fb.toLowerCase().indexOf("webkit")&&!Ib("Edge")||Ib("Trident")||Ib("MSIE")||Ib("Edge");-1!=Fb.toLowerCase().indexOf("webkit")&&!Ib("Edge")&&Ib("Mobile");Ib("Macintosh");Ib("Windows");Ib("Linux")||Ib("CrOS");var Mn=pa.navigator||null;Mn&&(Mn.appVersion||"").indexOf("X11");Ib("Android");Ln();Ib("iPad");Ib("iPod");Ln()||Ib("iPad")||Ib("iPod");Fb.toLowerCase().indexOf("kaios");var Nn=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null},On=function(a){var b=H;b=void 0===b?window.document:b;if(!a||!b.head)return null;var c=document.createElement("meta");b.head.appendChild(c);c.httpEquiv="origin-trial";c.content=a;return c};var Pn=function(){};var Qn=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Rn=function(a,b){this.s=a;this.g=null;this.F={};this.R=0;this.H=void 0===b?500:b;this.B=null};oa(Rn,Pn);
var Tn=function(a){return"function"===typeof a.s.__tcfapi||null!=Sn(a)};
Rn.prototype.addEventListener=function(a){var b={},c=Ub(function(){return a(b)}),d=0;-1!==this.H&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.H));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=Qn(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Un(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Rn.prototype.removeEventListener=function(a){a&&a.listenerId&&Un(this,"removeEventListener",null,a.listenerId)};
var Wn=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=Vn(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||Fg(Bg)&&"CH"===a.publisherCC)?!0:m&&Vn(a.purpose.consents,b)}else l=!0;else l=
1===h?a.purpose&&a.vendor?Vn(a.purpose.legitimateInterests,b)&&Vn(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Vn=function(a,b){return!(!a||!a[b])},Un=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.s.__tcfapi){var e=a.s.__tcfapi;e(b,2,c,d)}else if(Sn(a)){Xn(a);var f=++a.R;a.F[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Sn=function(a){if(a.g)return a.g;a.g=Nn(a.s,"__tcfapiLocator");return a.g},
Xn=function(a){a.B||(a.B=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.F[c.callId](c.returnValue,c.success)}catch(d){}},Kn(a.s,a.B))};var Yn=!0;Yn=!1;var Zn={1:0,3:0,4:0,7:3,9:3,10:3},$n=Jn("",550),ao=Jn("",500);function bo(){var a=pi.tcf||{};return pi.tcf=a}
var co=function(a,b){this.B=a;this.g=b;this.s=bb();},eo=function(a){},fo=function(a){},lo=function(){var a=bo(),b=new Rn(A,Yn?3E3:-1),c=new co(b,a);if((go()?!0===A.gtag_enable_tcf_support:!1!==A.gtag_enable_tcf_support)&&!a.active&&("function"===typeof A.__tcfapi||Tn(b))){a.active=!0;a.Ec={};ho();var d=null;Yn?d=A.setTimeout(function(){io(a);jo(a);d=null},ao):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)io(a),jo(a),eo(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=ko(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in Zn)if(Zn.hasOwnProperty(h))if("1"===h){var l,m=e,p=!0;p=void 0===p?!1:p;var q;var r=m;!1===r.gdprApplies?q=!0:(void 0===r.internalErrorState&&(r.internalErrorState=Qn(r)),q="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===
r.eventStatus)?!0:!1);l=q?!1===m.gdprApplies||"tcunavailable"===m.tcString||void 0===m.gdprApplies&&!p||"string"!==typeof m.tcString||!m.tcString.length?!0:Wn(m,"1",0):!1;g["1"]=l}else g[h]=Wn(e,h,Zn[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.Ec=f,jo(a),eo(c))}}),fo(c)}catch(e){d&&(clearTimeout(d),d=null),io(a),jo(a)}}};function io(a){a.type="e";a.tcString="tcunavailable";Yn&&(a.Ec=ko())}function ho(){var a={},b=(a.ad_storage="denied",a.wait_for_update=$n,a);Yg(b)}
var go=function(){var a=!1;a=!0;return a};function ko(){var a={},b;for(b in Zn)Zn.hasOwnProperty(b)&&(a[b]=!0);return a}function jo(a){var b={},c=(b.ad_storage=a.Ec["1"]?"granted":"denied",b);mo();Zg(c,0)}
var no=function(){var a=bo();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},mo=function(){var a=bo();return a.active?a.tcString||"":""},oo=function(){var a=bo();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},po=function(a){if(!Zn.hasOwnProperty(String(a)))return!0;var b=bo();return b.active&&b.Ec?!!b.Ec[String(a)]:!0};var qo=!1;qo=!0;function ro(a){var b=String(A.location).split(/[?#]/)[0],c=jf.Zg||A._CONSENT_MODE_SALT,d;if(a){var e;if(c){var f=b+a+c,g=1,h,l,m;if(f)for(g=0,l=f.length-1;0<=l;l--)m=f.charCodeAt(l),g=(g<<6&268435455)+m+(m<<14),h=g&266338304,g=0!=h?g^h>>21:g;e=String(g)}else e="0";d=e}else d="";return d}
function so(a){function b(u){var v;pi.reported_gclid||(pi.reported_gclid={});v=pi.reported_gclid;var w;w=qo&&g&&(!Qg()||fh(N.D))?l+"."+(f.prefix||"_gcl")+(u?"gcu":"gcs"):l+(u?"gcu":"gcs");if(!v[w]){v[w]=!0;var y=[],x={},z=function(R,U){U&&(y.push(R+"="+encodeURIComponent(U)),x[R]=!0)},B="https://www.google.com";if(Qg()){var C=fh(N.D);z("gcs",gh());u&&z("gcu","1");Rg()&&z("gcd","G1"+Wg(Og));
pi.dedupe_gclid||(pi.dedupe_gclid=""+mj());z("rnd",pi.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&fh(N.D)){var E=rk("_gcl_aw");z("gclaw",E.join("."))}z("url",String(A.location).split(/[?#]/)[0]);z("dclid",to(d,p));var D=!1;D=!0;C||!d&&!D||(B="https://pagead2.googlesyndication.com")}
z("gdpr_consent",mo()),z("gdpr",oo());"1"===Vj(!1)._up&&z("gtm_up","1");z("gclid",to(d,l));z("gclsrc",m);if(!(x.gclid||x.dclid||x.gclaw)&&(z("gbraid",to(d,q)),!x.gbraid&&Qg()&&fh(N.D))){var I=rk("_gcl_gb");z("gclgb",I.join("."))}z("gtm",In(!e));qo&&g&&fh(N.D)&&(xj(f||{}),z("auid",tj[uj(f.prefix)]||""));
a.og&&z("did",a.og);var T=B+"/pagead/landing?"+y.join("&");mc(T)}}var c=!!a.ze,d=!!a.qa,e=a.W,f=void 0===a.pd?{}:a.pd,g=void 0===a.wd?!0:a.wd,h=xk(),l=h.gclid||"",m=h.gclsrc,p=h.dclid||"",q=h.gbraid||"",r=!c&&((!l||m&&"aw.ds"!==m?!1:!0)||q),t=Qg();if(r||t)t?jh(function(){b();fh(N.D)||ih(function(u){return b(!0,u.bi)},N.D)},[N.D]):b()}function to(a,b){var c=a&&!fh(N.D);return b&&c?"0":b}var yo=!1,zo=Number("200");function Ao(){if(!A.Promise)return!1;Ja(H.interestCohort)||yo||(yo=!0,On("A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"));return Ja(H.interestCohort)}
function Bo(){var a=pi.floc;if(a){var b=a.ts,c=a.floc;if(b&&c&&1E3>bb()-b)return Promise.resolve(c)}var d=void 0;try{d=Promise.race([H.interestCohort().then(function(e){pi.floc={ts:bb(),floc:e};return e}),new Promise(function(e){A.setTimeout(function(){return e()},zo)})]).catch(function(){})}catch(e){return}return d}var Bp=function(){var a=!0;po(7)&&po(9)&&po(10)||(a=!1);var b=!0;b=!1;b&&!xp()&&(a=!1);return a},xp=function(){var a=!0;po(3)&&po(4)||(a=!1);return a};var $p=!1;function aq(){var a=pi;return a.gcq=a.gcq||new bq}
var cq=function(a,b,c){aq().register(a,b,c)},dq=function(a,b,c,d){aq().push("event",[b,a],c,d)},eq=function(a,b){aq().push("config",[a],b)},fq=function(a,b,c,d){aq().push("get",[a,b],c,d)},gq=function(a){return aq().getRemoteConfig(a)},hq={},iq=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.s={};this.B=null;this.g=!1},jq=function(a,b,c,d,e){this.type=a;this.B=b;this.W=c||"";this.g=d;this.s=e},bq=function(){this.s={};this.B={};this.g=[];this.F={AW:!1,
UA:!1};this.enableDeferrableCommandAfterConfig=$p},kq=function(a,b){var c=Wk(b);return a.s[c.containerId]=a.s[c.containerId]||new iq},lq=function(a,b,c){if(b){var d=Wk(b);if(d&&1===kq(a,b).status){kq(a,b).status=2;var e={};Lm&&(e.timeoutId=A.setTimeout(function(){zg(38);rm()},3E3));a.push("require",[e],d.containerId);hq[d.containerId]=bb();if(Zk()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=A.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=rn(c,g)||h;cc(l)}}}},mq=function(a,b,c,d){if(d.W){var e=kq(a,d.W),f=e.B;if(f){var g=L(c),h=L(e.targetConfig[d.W]),l=L(e.containerConfig),m=L(e.remoteConfig),p=L(a.B),q=Ii("gtm.uniqueEventId"),r=Wk(d.W).prefix,t=Bn(An(Cn(zn(yn(xn(wn(vn(un(g),
h),l),m),p),function(){Ym(q,r,"2");}),function(){Ym(q,r,"3");}),function(u,v){a.F[u]=v}),function(u){return a.F[u]});try{Ym(q,r,"1");f(d.W,b,d.B,t)}catch(u){Ym(q,r,"4");}}}};
bq.prototype.register=function(a,b,c){var d=kq(this,a);if(3!==d.status){d.B=b;d.status=3;if(c){L(d.remoteConfig,c);d.remoteConfig=c}var e=Wk(a),f=hq[e.containerId];if(void 0!==f){var g=pi[e.containerId].bootstrap,h=e.prefix.toUpperCase();pi[e.containerId]._spx&&(h=h.toLowerCase());var l=Ii("gtm.uniqueEventId"),m=h,p=bb()-g;if(Lm&&!wm[l]){l!==sm&&(nm(),sm=l);var q=m+"."+Math.floor(g-
f)+"."+Math.floor(p);Am=Am?Am+","+q:"&cl="+q}delete hq[e.containerId]}this.flush()}};bq.prototype.push=function(a,b,c,d){var e=Math.floor(bb()/1E3);lq(this,c,b[0][N.ma]||this.B[N.ma]);$p&&c&&kq(this,c).g&&(d=!1);this.g.push(new jq(a,e,c,b,d));d||this.flush()};bq.prototype.insert=function(a,b,c){var d=Math.floor(bb()/1E3);0<this.g.length?this.g.splice(1,0,new jq(a,d,c,b,!1)):this.g.push(new jq(a,d,c,b,!1))};
bq.prototype.flush=function(a){for(var b=this,c=[],d=!1,e={};this.g.length;){var f=this.g[0];if(f.s)$p?!f.W||kq(this,f.W).g?(f.s=!1,this.g.push(f)):c.push(f):(f.s=!1,this.g.push(f)),this.g.shift();else{switch(f.type){case "require":if(3!==kq(this,f.W).status&&!a){$p&&this.g.push.apply(this.g,c);return}Lm&&A.clearTimeout(f.g[0].timeoutId);break;case "set":Va(f.g[0],function(r,t){L(kb(r,t),b.B)});break;case "config":e.La={};Va(f.g[0],function(r){return function(t,u){L(kb(t,u),r.La)}}(e));var g=!!e.La[N.ad];
delete e.La[N.ad];var h=kq(this,f.W),l=Wk(f.W),m=l.containerId===l.id;g||(m?h.containerConfig={}:h.targetConfig[f.W]={});h.g&&g||mq(this,N.Ea,e.La,f);h.g=!0;delete e.La[N.cc];m?L(e.La,h.containerConfig):L(e.La,h.targetConfig[f.W]);$p&&(d=!0);break;case "event":e.Kc={};Va(f.g[0],function(r){return function(t,u){L(kb(t,u),r.Kc)}}(e));mq(this,f.g[1],e.Kc,f);break;case "get":var p={},q=(p[N.Za]=f.g[0],p[N.Ya]=f.g[1],p);mq(this,N.Na,q,f)}this.g.shift();nq(this,f)}e={La:e.La,Kc:e.Kc}}$p&&(this.g.push.apply(this.g,
c),d&&this.flush())};var nq=function(a,b){if("require"!==b.type)if(b.W)for(var c=a.getCommandListeners(b.W)[b.type]||[],d=0;d<c.length;d++)c[d]();else for(var e in a.s)if(a.s.hasOwnProperty(e)){var f=a.s[e];if(f&&f.s)for(var g=f.s[b.type]||[],h=0;h<g.length;h++)g[h]()}};bq.prototype.getRemoteConfig=function(a){return kq(this,a).remoteConfig};bq.prototype.getCommandListeners=function(a){return kq(this,a).s};function oq(a,b){var c=this;};function pq(a,b,c){};function qq(a,b,c,d){};function rq(a){};var sq=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":nc(a,"className"),"gtm.elementId":a["for"]||ic(a,"id")||"","gtm.elementTarget":a.formTarget||nc(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||nc(a,"href")||a.src||a.code||a.codebase||"";return d},tq=function(a){pi.hasOwnProperty("autoEventsSettings")||(pi.autoEventsSettings={});var b=pi.autoEventsSettings;b.hasOwnProperty(a)||(b[a]=
{});return b[a]},uq=function(a,b,c){tq(a)[b]=c},vq=function(a,b,c,d){var e=tq(a),f=cb(e,b,d);e[b]=c(f)},wq=function(a,b,c){var d=tq(a);return cb(d,b,c)};var xq=["input","select","textarea"],yq=["button","hidden","image","reset","submit"],zq=function(a){var b=a.tagName.toLowerCase();return!Pa(xq,function(c){return c===b})||"input"===b&&Pa(yq,function(c){return c===a.type.toLowerCase()})?!1:!0},Aq=function(a){return a.form?a.form.tagName?a.form:H.getElementById(a.form):lc(a,["form"],100)},Bq=function(a,b,c){if(!a.elements)return 0;for(var d=b.dataset[c],e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(zq(g)){if(g.dataset[c]===d)return f;f++}}return 0};
function Fq(a){};var Gq={},Hq=[],Iq={},Jq=0,Kq=0;
function Rq(a,b){}
function Zq(a,b){}
;function $q(){};var ar={},br=[];
var ir=function(a,b){};

function lr(a,b){};var mr=/^\s*$/,nr,or=!1;
function zr(a,b){}function Ar(a,b,c){};var Br=!!A.MutationObserver,Cr=void 0,Dr=function(a){if(!Cr){var b=function(){var c=H.body;if(c)if(Br)(new MutationObserver(function(){for(var e=0;e<Cr.length;e++)J(Cr[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;gc(c,"DOMNodeInserted",function(){d||(d=!0,J(function(){d=!1;for(var e=0;e<Cr.length;e++)J(Cr[e])}))})}};Cr=[];H.body?b():J(b)}Cr.push(a)};var Fr=["www.youtube.com","www.youtube-nocookie.com"],Gr,Hr=!1,Ir=0;
function Sr(a,b){}function Tr(a,b){return!0};function Ur(a,b,c){};function Vr(a,b){var c;return c};function Wr(a){};function Xr(a){};var Yr=!1,Zr=[];function $r(){if(!Yr){Yr=!0;for(var a=0;a<Zr.length;a++)J(Zr[a])}}var as=function(a){Yr?J(a):Zr.push(a)};function bs(a){M(G(this),["listener:!Fn"],arguments);hg(this,"process_dom_events","window","load");as(Dc(a))};function cs(a){var b;return b};function ds(a,b){var c;var d=!1;var e=Cc(c,this.g,d);void 0===e&&void 0!==c&&zg(45);return e};function es(a){var b;return b};function fs(a,b){var c=null,d=!1;return Cc(c,this.g,d)};function gs(a){var b;M(G(this),["path:!string"],arguments);hg(this,"access_globals","readwrite",a);var c=a.split("."),d=jb(c,[A,H]),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Ja(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};var g=!1;return Cc(b,this.g,g)};function hs(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var is=new Ta;function js(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=is.get(e);f||(f=new RegExp(b,d),is.set(e,f));return f.test(a)}catch(g){return!1}}
function ks(a,b){function c(g){var h=Gh(g),l=Eh(h,"protocol"),m=Eh(h,"host",!0),p=Eh(h,"port"),q=Eh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function ls(a){return ms(a)?1:0}
function ms(a){var b=a.arg0,c=a.arg1;if(a.any_of&&La(c)){for(var d=0;d<c.length;d++){var e=L(a,{});L({arg1:c[d],any_of:void 0},e);if(ls(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(m){}}f=!1}return f;case "_ew":return hs(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Oa(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return js(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return ks(b,c)}return!1};function ns(a){return!1}var os;function ps(a){var b=!1;return b};var qs=function(a){var b;return b};function rs(a,b){b=void 0===b?!0:b;var c;return c};function ss(a){var b=null;return b};function ts(a,b){var c;return c};function us(a,b){var c;return c};function vs(a){var b="";return b};function ws(a,b){var c;return c};function xs(a){var b="";return b};function ys(){hg(this,"get_user_agent");return A.navigator.userAgent};function zs(a,b){};var As={};function Bs(a,b,c,d,e,f){f?e[f]?(e[f][0].push(c),e[f][1].push(d)):(e[f]=[[c],[d]],cc(a,function(){for(var g=e[f][0],h=0;h<g.length;h++)J(g[h]);g.push=function(l){J(l);return 0}},function(){for(var g=e[f][1],h=0;h<g.length;h++)J(g[h]);e[f]=null},b)):cc(a,c,d,b)}
function Cs(a,b,c,d){M(G(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);hg(this,"inject_script",a);var e=this.g;Bs(a,void 0,function(){b&&b.s(e)},function(){c&&c.s(e)},As,d);}var Ds=Object.freeze({dl:1,id:1}),Es={};
function Fs(a,b,c,d){};function Gs(a){var b=!0;return b};var Hs=function(){return!1},Is={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Js=["textContent","value","tagName","children","childElementCount"];
function Ks(a){var b;return b};function Ls(){};function Ms(a,b){var c;return c};function Ns(a){var b=void 0;return b};function Os(a,b){var c=!1;return c};function Ps(){var a="";return a};function Qs(){var a="";return a};var Rs=["set","get","config","event"];
function Ss(a,b,c){};function Ts(){};function Us(a,b,c,d){d=void 0===d?!1:d;};function Vs(a,b,c){};function Ws(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function Xs(a){M(G(this),["consentSettings:!DustMap"],arguments);for(var b=a.qb(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==N.Hd&&hg(this,"access_consent",e,"write")}Yg(Dc(a))};function Ys(a,b,c){return!1};function Zs(a,b,c){}
;var $s=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function at(a,b,c,d){var e=this;};function bt(a,b,c){}
;var ct={},dt={};ct.getItem=function(a){var b=null;return b};
ct.setItem=function(a,b){};
ct.removeItem=function(a){};ct.clear=function(){};var et=function(a){var b;return b};function ft(a){M(G(this),["consentSettings:!DustMap"],arguments);var b=Dc(a),c;for(c in b)b.hasOwnProperty(c)&&hg(this,"access_consent",c,"write");Zg(b)};var je=function(){var a=new ug;Zk()?(a.add("injectHiddenIframe",Ha),a.add("injectScript",Ha)):(a.add("injectHiddenIframe",zs),a.add("injectScript",Cs));var b=Vs;a.add("Math",ag());a.add("TestHelper",xg());a.add("addEventCallback",rq);a.add("aliasInWindow",Tr);a.add("assertApi",Xf);a.add("assertThat",Yf);a.add("callInWindow",
Vr);a.add("callLater",Wr);a.add("copyFromDataLayer",ds);a.add("copyFromWindow",es);a.add("createArgumentsQueue",fs);a.add("createQueue",gs);a.add("decodeUri",bg);a.add("decodeUriComponent",cg);a.add("encodeUri",dg);a.add("encodeUriComponent",eg);a.add("fail",fg);a.add("fromBase64",qs,!("atob"in A));a.add("generateRandom",gg);a.add("getContainerVersion",ig);a.add("getCookieValues",rs);a.add("getQueryParameters",ts);a.add("getReferrerQueryParameters",us);a.add("getReferrerUrl",vs);a.add("getTimestamp",
jg);a.add("getTimestampMillis",jg);a.add("getType",kg);a.add("getUrl",xs);a.add("localStorage",Is,!Hs());a.add("logToConsole",Ls);a.add("makeInteger",mg);a.add("makeNumber",ng);a.add("makeString",og);a.add("makeTableMap",pg);a.add("mock",rg);a.add("parseUrl",Ns);a.add("queryPermission",Os);a.add("readCharacterSet",Ps);a.add("readTitle",Qs);a.add("sendPixel",b);a.add("setCookie",Ws);a.add("setInWindow",Ys);a.add("sha256",at);a.add("templateStorage",ct);a.add("toBase64",et,!("btoa"in A));a.add("JSON",
lg(function(d){var e=this.g.g;e&&e.log.call(this,"error",d)}));var c=!1;
c=!0;c&&a.add("setDefaultConsentState",Xs);a.add("updateConsentState",ft);
a.add("isConsentGranted",Gs);a.add("addConsentListener",oq);
wg(a,"callOnWindowLoad",bs);Zk()?wg(a,"internal.injectScript",
Ha):wg(a,"internal.injectScript",Fs);return function(d){var e;if(a.g.hasOwnProperty(d))e=a.get(d,this);else{var f;if(f=a.s.hasOwnProperty(d)){var g=!1,h=this.g.g;if(h){var l=h.vc();if(l){0!==l.indexOf("__cvt_")&&(g=!0);}}f=g}if(f){var m=a.s.hasOwnProperty(d)?a.s[d]:void 0;e=m}else throw Error(d+" is not a valid API name.");}return e}};var gt=function(){return!1},ht=function(){var a={};return function(b,c,d){}};var he,qf;
function it(){var a=data.runtime||[],b=data.runtime_lines;he=new Zd;jt();Ie=function(e,f,g){kt(f);var h=new sb;Va(f,function(t,u){var v=Cc(u);void 0===v&&void 0!==u&&zg(44);h.set(t,v)});he.g.g.H=af();var l={Xh:rf(e),eventId:void 0!==g?g.id:void 0,kc:void 0!==g?function(t){return g.cb.kc(t)}:void 0,vc:function(){return e},log:function(){}};if(gt()){var m=ht(),
p=void 0,q=void 0;l.Ca={mc:{},Mb:function(t,u,v){1===u&&(p=t);7===u&&(q=v);m(t,u,v)},Re:qg()};l.log=function(t,u){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:t,source:q,message:v})}}}var r=ie(l,[e,h]);he.g.g.H=void 0;r instanceof ra&&"return"===r.g&&(r=r.s);return Dc(r)};ke();for(var c=0;c<a.length;c++){var d=a[c];if(!La(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Ye(d,b[c]);he.Lb(d)}}
function kt(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ja(b)&&(a.gtmOnSuccess=function(){J(b)});Ja(c)&&(a.gtmOnFailure=function(){J(c)})}function jt(){var a=he;pi.SANDBOXED_JS_SEMAPHORE=pi.SANDBOXED_JS_SEMAPHORE||0;le(a,function(b,c,d){pi.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{pi.SANDBOXED_JS_SEMAPHORE--}})}function lt(a){void 0!==a&&Va(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Bi[e]=Bi[e]||[];Bi[e].push(b)}})};var mt="HA GF G UA AW DC".split(" "),nt=!1,ot={},pt=!1;function qt(a,b){var c={event:a};b&&(c.eventModel=L(b),b[N.Wd]&&(c.eventCallback=b[N.Wd]),b[N.Tc]&&(c.eventTimeout=b[N.Tc]));return c}function rt(a){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:Ci()});return a["gtm.uniqueEventId"]}
function st(){return nt}
var vt={config:function(a){var b,c;c=rt(a);void 0===c&&(c=Ci());return b},consent:function(a){function b(){st()&&L(a[2],{subcommand:a[1]})}if(3===a.length){zg(39);var c=Ci(),d=a[1];"default"===d?(b(),Yg(a[2])):"update"===d&&(b(),Zg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&n(b)){var c;if(2<a.length){if(!Bc(a[2])&&
void 0!=a[2]||3<a.length)return;c=a[2]}var d=qt(b,c),e=void 0;e=rt(a),d["gtm.uniqueEventId"]=e;void 0===e&&Ci();return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime){pt=!0;st();var b={event:"gtm.js","gtm.start":a[1].getTime()};b["gtm.uniqueEventId"]=rt(a);return b}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=qf.s;d.g[b]?d.g[b].push(c):
d.g[b]=[c]}},set:function(a){var b;2==a.length&&Bc(a[1])?b=L(a[1]):3==a.length&&n(a[1])&&(b={},Bc(a[2])||La(a[2])?b[a[1]]=L(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},wt={policy:!0};var xt=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},zt=function(a){var b=yt(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Qt=function(a){if(Pt(a))return a;this.g=a};Qt.prototype.wi=function(){return this.g};var Pt=function(a){return!a||"object"!==zc(a)||Bc(a)?!1:"getUntrustedUpdateValue"in a};Qt.prototype.getUntrustedUpdateValue=Qt.prototype.wi;var Rt=[],St=!1,Tt=!1,Ut=!1,Vt=function(a){return A["dataLayer"].push(a)},Wt=function(a){var b=pi["dataLayer"],c=b?b.subscribers:1,d=0,e=a;return function(){++d===c&&(e(),e=null)}};
function Xt(a){var b=a._clear;Va(a,function(d,e){"_clear"!==d&&(b&&Li(d,void 0),Li(d,e))});xi||(xi=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Ci(),a["gtm.uniqueEventId"]=c,Li("gtm.uniqueEventId",c));return pn(a)}function Yt(){var a=Rt[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Wa(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function Zt(){for(var a=!1;!Ut&&0<Rt.length;){var b=!1;b=!0;if(b&&!Tt&&Yt()){var c={};Rt.unshift((c.event=
"gtm.init",c));Tt=!0}var d=!1;d=!0;if(d&&!St&&Yt()){var e={};Rt.unshift((e.event="gtm.init_consent",e));St=!0}Ut=!0;delete Fi.eventModel;Hi();var f=Rt.shift();if(null!=f){var g=Pt(f);
if(g){var h=f;f=Pt(h)?h.getUntrustedUpdateValue():void 0;Mi()}try{if(Ja(f))try{f.call(Ji)}catch(v){}else if(La(f)){var l=f;if(n(l[0])){var m=l[0].split("."),p=m.pop(),q=l.slice(1),r=Ii(m.join("."),2);if(void 0!==r&&null!==r)try{r[p].apply(r,q)}catch(v){}}}else{if(Wa(f)){a:{var t=f;if(t.length&&n(t[0])){var u=vt[t[0]];if(u&&(!g||!wt[t[0]])){f=u(t);break a}}f=void 0}if(!f){Ut=!1;continue}}a=Xt(f)||a}}finally{g&&Hi(!0)}}Ut=!1}
return!a}function $t(){var b=Zt();try{xt(A["dataLayer"],jf.N)}catch(c){}return b}
var bu=function(){var a=Zb("dataLayer",[]),b=Zb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Hl(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});as(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<pi.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Qt(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Rt.push.apply(Rt,e);if(300<
this.length)for(zg(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Zt()&&h};var d=a.slice(0);Rt.push.apply(Rt,d);if(au()){J($t)}},au=function(){var a=!0;return a};var cu={};cu.dd=new String("undefined");
var du=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===cu.dd?b:a[d]);return c.join("")}};du.prototype.toString=function(){return this.g("undefined")};du.prototype.valueOf=du.prototype.toString;cu.Qh=du;cu.pe={};cu.gi=function(a){return new du(a)};var eu={};cu.Xi=function(a,b){var c=Ci();eu[c]=[a,b];return c};cu.mg=function(a){var b=a?0:1;return function(c){var d=eu[c];if(d&&"function"===typeof d[b])d[b]();eu[c]=void 0}};cu.Ci=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};cu.Ti=function(a){if(a===cu.dd)return a;var b=Ci();cu.pe[b]=a;return'google_tag_manager["'+jf.N+'"].macro('+b+")"};cu.Ni=function(a,b,c){a instanceof cu.Qh&&(a=a.g(cu.Xi(b,c)),b=Ha);return{xi:a,onSuccess:b}};var pu=A.clearTimeout,qu=A.setTimeout,Q=function(a,b,c){if(Zk()){b&&J(b)}else return cc(a,b,c)},ru=function(){return new Date},su=function(){return A.location.href},tu=function(a){return Eh(Gh(a),"fragment")},uu=function(a){return Fh(Gh(a))},vu=function(a,b){return Ii(a,b||2)},wu=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Vt(a)):d=Vt(a);return d},xu=function(a,b){A[a]=b},V=function(a,b,c){b&&
(void 0===A[a]||c&&!A[a])&&(A[a]=b);return A[a]},yu=function(a,b,c){return aj(a,b,void 0===c?!0:!!c)},zu=function(a,b,c){return 0===jj(a,b,c)},Au=function(a,b){if(Zk()){b&&J(b)}else ec(a,b)},Bu=function(a){return!!wq(a,"init",!1)},Cu=function(a){uq(a,"init",!0)},Du=function(a){var b=vi+"?id="+encodeURIComponent(a)+"&l=dataLayer";Q(al("https://","http://",b))},Eu=function(a,b,c){Lm&&(Fc(a)||Zm(c,b,a))};
var Fu=cu.Ni;var bv=encodeURI,X=encodeURIComponent,cv=fc;var dv=function(a,b){if(!a)return!1;var c=Eh(Gh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var ev=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Lw(){return A.gaGlobal=A.gaGlobal||{}}var Mw=function(){var a=Lw();a.hid=a.hid||Sa();return a.hid},Nw=function(a,b){var c=Lw();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var kx=function(){if(Ja(A.__uspapi)){var a="";try{A.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&/^[\da-zA-Z-]{1,20}$/.test(d)&&(a=d)}})}catch(b){}return a}};var Fx=window,Gx=document,Hx=function(a){var b=Fx._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Fx["ga-disable-"+a])return!0;try{var c=Fx.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Xi("AMP_TOKEN",String(Gx.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Gx.getElementById("__gaOptOutExtension")?!0:!1};var Ix={};
function Lx(a){delete a.eventModel[N.cc];Nx(a.eventModel)}var Nx=function(a){Va(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[N.Qa]||{};Va(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Qx=function(a,b,c){dq(b,c,a)},Rx=function(a,b,c){dq(b,c,a,!0)},Zx=function(a,b){};
function Sx(a,b){}var Y={h:{}};
Y.h.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],B=x.split(","),C=0;C<B.length;C++){var E=Number(B[C]);if(isNaN(E))return[];p.test(B[C])||z.push(E)}return z}function c(){var x=0,z=0;return function(){var B=sh(),C=B.height;x=Math.max(v.scrollLeft+B.width,x);z=Math.max(v.scrollTop+C,z);return{Ce:x,De:z}}}function d(){t=V("self");
u=t.document;v=u.scrollingElement||u.body&&u.body.parentNode;y=c()}function e(x,z,B,C){var E=l(z),D={},I;for(I in E){D.yb=I;if(E.hasOwnProperty(D.yb)){var T=Number(D.yb);x<T||(wu({event:"gtm.scrollDepth","gtm.scrollThreshold":T,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":E[D.yb].join(",")}),vq("sdl",z,function(R){return function(U){delete U[R.yb];return U}}(D),{}))}D={yb:D.yb}}}function f(){var x=y(),z=x.Ce,B=x.De,C=z/v.scrollWidth*100,E=B/v.scrollHeight*100;e(z,"horiz.pix",
q.gd,r.Tf);e(C,"horiz.pct",q.fd,r.Tf);e(B,"vert.pix",q.gd,r.bg);e(E,"vert.pct",q.fd,r.bg);uq("sdl","pending",!1)}function g(){var x=250,z=!1;u.scrollingElement&&u.documentElement&&t.addEventListener&&(x=50,z=!0);var B=0,C=!1,E=function(){C?B=qu(E,x):(B=0,f(),Bu("sdl")&&!a()&&(hc(t,"scroll",D),hc(t,"resize",D),uq("sdl","init",!1)));C=!1},D=function(){z&&y();B?C=!0:(B=qu(E,x),uq("sdl","pending",!0))};return D}function h(x,z,B){if(z){var C=b(String(x));vq("sdl",B,function(E){for(var D=0;D<C.length;D++){var I=
String(C[D]);E.hasOwnProperty(I)||(E[I]=[]);E[I].push(z)}return E},{})}}function l(x){return wq("sdl",x,{})}function m(x){J(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,B=x.vtp_horizontalThresholdsPixels,C=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,D=x.vtp_verticalThresholdsPixels,I=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case q.gd:h(B,z,"horiz.pix");break;case q.fd:h(C,z,"horiz.pct")}switch(E){case q.gd:h(D,z,"vert.pix");break;case q.fd:h(I,
z,"vert.pct")}Bu("sdl")?wq("sdl","pending")||(w||(d(),w=!0),J(function(){return f()})):(d(),w=!0,v&&(Cu("sdl"),uq("sdl","pending",!0),J(function(){f();if(a()){var T=g();gc(t,"scroll",T);gc(t,"resize",T)}else uq("sdl","init",!1)})))}var p=/^\s*$/,q={fd:"PERCENT",gd:"PIXELS"},r={bg:"vertical",Tf:"horizontal"},t,u,v,w=!1,y;(function(x){Y.__sdl=x;Y.__sdl.m="sdl";Y.__sdl.o=!0;Y.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):as(function(){m(x)})})}();

Y.h.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.m="jsm";Y.__jsm.o=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");var d=c&&c.e&&c.e(b);Eu(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();Y.h.c=["google"],function(){(function(a){Y.__c=a;Y.__c.m="c";Y.__c.o=!0;Y.__c.priorityOverride=0})(function(a){Eu(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Y.h.e=["google"],function(){(function(a){Y.__e=a;Y.__e.m="e";Y.__e.o=!0;Y.__e.priorityOverride=0})(function(a){var b=String(Pi(a.vtp_gtmEventId,"event"));a.vtp_gtmCachedValues&&(b=String(a.vtp_gtmCachedValues.event));return b})}();
Y.h.f=["google"],function(){(function(a){Y.__f=a;Y.__f.m="f";Y.__f.o=!0;Y.__f.priorityOverride=0})(function(a){var b=vu("gtm.referrer",1)||H.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Eh(Gh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):uu(String(b)):String(b)})}();
Y.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=sq(c,"gtm.click");wu(d)}}(function(b){Y.__cl=b;Y.__cl.m="cl";Y.__cl.o=!0;Y.__cl.priorityOverride=0})(function(b){if(!Bu("cl")){var c=V("document");gc(c,"click",a,!0);Cu("cl")}J(b.vtp_gtmOnSuccess)})}();
Y.h.j=["google"],function(){(function(a){Y.__j=a;Y.__j.m="j";Y.__j.o=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=V(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];Eu(c,"j",a.vtp_gtmEventId);return c})}();Y.h.k=["google"],function(){(function(a){Y.__k=a;Y.__k.m="k";Y.__k.o=!0;Y.__k.priorityOverride=0})(function(a){return yu(a.vtp_name,vu("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid "+b+" request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.m="access_globals";Y.__access_globals.o=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,q,r){if(!n(r))throw d(p,{},"Key must be a string.");if("read"===q){if(-1<Oa(e,r))return}else if("write"===q){if(-1<Oa(f,r))return}else if("readwrite"===q){if(-1<Oa(f,r)&&-1<Oa(e,r))return}else if("execute"===q){if(-1<Oa(g,r))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(p,{},"Prohibited "+q+" on global variable: "+
r+".");},V:a}})}();
Y.h.tg=["google"],function(){function a(g){f.push(g);1<f.length||J(function(){var h=f.join(",");f=[];wu({event:"gtm.triggerGroup","gtm.triggers":h})})}function b(g,h){var l=c[h],m=l.indexOf(g);-1!==m&&(l.splice(m,1),l.length||a(h))}var c={},d={},e=[],f=[];(function(g){Y.__tg=g;Y.__tg.m="tg";Y.__tg.o=!0;Y.__tg.priorityOverride=0})(function(g){J(g.vtp_gtmOnSuccess);var h=g.vtp_uniqueTriggerId,l=g.vtp_triggerIds,m=g.vtp_firingId;
if(g.vtp_isListeningTag){var p=d[m];p?b(m,p):e.push(m)}else{c[h]=l;for(var q=0,r;r=l[q];q++)d[r]=h;for(var t=0;t<e.length;t++)b(e[t],h)}})}();
Y.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.m="u";Y.__u.o=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:vu("gtm.url",1))||su();var d=b[a("vtp_component")];if(!d||"URL"==d)return uu(String(c));var e=Gh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?La(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var q=Eh(e,"QUERY",void 0,void 0,m[p]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=Eh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.h.v=["google"],function(){(function(a){Y.__v=a;Y.__v.m="v";Y.__v.o=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=vu(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Eu(d,"v",a.vtp_gtmEventId);return d})}();
Y.h.tl=["google"],function(){function a(b){return function(){if(b.Qe&&b.Se>=b.Qe)b.Ne&&V("self").clearInterval(b.Ne);else{b.Se++;var c=ru().getTime();wu({event:b.K,"gtm.timerId":b.Ne,"gtm.timerEventNumber":b.Se,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Qe,"gtm.timerStartTime":b.Kg,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Kg,"gtm.triggers":b.lj})}}}(function(b){Y.__tl=b;Y.__tl.m="tl";Y.__tl.o=!0;Y.__tl.priorityOverride=0})(function(b){J(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{K:b.vtp_eventName,Se:0,interval:Number(b.vtp_interval),Qe:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),lj:String(b.vtp_uniqueTriggerId||"0"),Kg:ru().getTime()};c.Ne=V("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.h.ua=["google"],function(){function a(q){return fh(q)}function b(q,r,t){var u=!1;if(Qg()&&!u&&!e[q]){var v=!fh(N.I),w=function(){var y=Tl(),x="gtm"+Ci(),z=m(r);z["&gtm"]=In(!0);var B={name:x};l(z,B,!0);var C=void 0,E=B._useUp;y(function(){var D=y.getByName(t);D&&(C=D.get("clientId"))});
y("create",q,B);v&&fh(N.I)&&(v=!1,y(function(){var D=y.getByName(x);!D||D.get("clientId")===C&&E||(z["&gcs"]=gh(),z["&gcu"]="1",D.set(z),D.send("pageview"))}));y(function(){y.remove(x)})};Vg(w,N.I);Vg(w,N.D);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,
cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(q,r,t){var u=0;if(q)for(var v in q)if(!h[v]&&
q.hasOwnProperty(v)&&(t&&f[v]||!t&&void 0===f[v])){var w=g[v]?Ya(q[v]):q[v];"anonymizeIp"!=v||w||(w=void 0);r[v]=w;u++}return u},m=function(q){var r={};q.vtp_gaSettings&&L(ev(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);L(ev(q.vtp_fieldsToSet,"fieldName","value"),r);fh(N.I)||(r.storage="none");fh(N.D)||(r.allowAdFeatures=!1,r.storeGac=!1);Bp()||(r.allowAdFeatures=!1);xp()||(r.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&(r._x_19=q.vtp_transportUrl);if(Ya(r.urlPassthrough)){r._useUp=!0;var t=!1;Qg()&&!t&&(r._cs=a)}return r},p=function(q){function r(Ca,ma){void 0!==ma&&D("set",Ca,ma)}var t={},u={},v={},w={};if(q.vtp_gaSettings){var y=q.vtp_gaSettings;L(ev(y.vtp_contentGroup,"index","group"),u);L(ev(y.vtp_dimension,"index","dimension"),v);L(ev(y.vtp_metric,"index","metric"),w);var x=L(y);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=void 0;x.vtp_metric=
void 0;q=L(q,x)}L(ev(q.vtp_contentGroup,"index","group"),u);L(ev(q.vtp_dimension,"index","dimension"),v);L(ev(q.vtp_metric,"index","metric"),w);var z=m(q),B=Vl(q.vtp_functionName);if(Ja(B)){var C="",E="";q.vtp_setTrackerName&&"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(E=q.vtp_trackerName,C=E+"."):(E="gtm"+Ci(),C=E+".");var D=function(Ca){var ma=[].slice.call(arguments,0);ma[0]=C+ma[0];B.apply(window,ma)},I=function(Ca,ma){return void 0===ma?ma:Ca(ma)},T=function(Ca,ma){if(ma)for(var gb in ma)ma.hasOwnProperty(gb)&&
D("set",Ca+gb,ma[gb])},R=function(){},U={name:E};l(z,U,!0);var S=q.vtp_trackingId||t.trackingId;B("create",S,U);D("set","&gtm",In(!0));var P=!1;
Qg()&&!P&&(D("set","&gcs",gh()),b(S,q,E));z._x_19&&z._x_20&&!d[E]&&(d[E]=!0,B($l(E,String(z._x_20))));q.vtp_enableRecaptcha&&D("require","recaptcha","recaptcha.js");(function(Ca,ma){void 0!==q[ma]&&D("set",Ca,q[ma])})("nonInteraction","vtp_nonInteraction");T("contentGroup",u);T("dimension",v);T("metric",w);var K={};l(z,K,!1)&&D("set",K);var W;
q.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var Ca=z&&z.hitCallback;Ja(Ca)&&Ca();q.vtp_gtmOnSuccess()});var ca=function(Ca,ma){return void 0===q[Ca]?t[ma]:q[Ca]};if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(D("require","ec","ec.js"),R());var O={hitType:"event",eventCategory:String(ca("vtp_eventCategory","category")),eventAction:String(ca("vtp_eventAction","action")),eventLabel:I(String,
ca("vtp_eventLabel","label")),eventValue:I(Xa,ca("vtp_eventValue","value"))};l(W,O,!1);D("send",O);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==
q.vtp_trackType){}else if("TRACK_TIMING"==q.vtp_trackType){}else if("DECORATE_LINK"==
q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&
(D("require","ec","ec.js"),R());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var $g="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","displayfeatures",void 0,{cookieName:$g})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var ek="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",{cookieName:ek})}W?D("send","pageview",W):D("send","pageview");Ya(z.urlPassthrough)&&Xl(C)}if(!c){var pd=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(pd="internal/"+pd);c=!0;var ae=rn(z._x_19,"/analytics.js"),be=al("https:","http:","//www.google-analytics.com/"+pd,z&&!!z.forceSSL);Q("analytics.js"===pd&&ae?ae:be,function(){var Ca=
Tl();Ca&&Ca.loaded||q.vtp_gtmOnFailure();},q.vtp_gtmOnFailure)}}else J(q.vtp_gtmOnFailure)};(function(q){Y.__ua=q;Y.__ua.m="ua";Y.__ua.o=!0;Y.__ua.priorityOverride=0})(function(q){jh(function(){p(q)},
[N.I,N.D])})}();
Y.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.m="inject_script";Y.__inject_script.o=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!n(f))throw d(e,{},"Script URL must be a string.");try{if(Qf(Gh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},V:a}})}();


Y.h.opt=["google"],function(){function a(l){return fh(l)}var b,c={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},d={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,
legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},e={urlPassthrough:!0},f=function(l,m,p){var q=0;if(l)for(var r in l)if(!e[r]&&l.hasOwnProperty(r)&&(p&&c[r]||!p&&void 0===c[r])){var t=d[r]?Ya(l[r]):l[r];"anonymizeIp"!=r||t||(t=void 0);m[r]=t;q++}return q},g=function(l){var m={};l.vtp_gaSettings&&L(ev(l.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),m);L(ev(l.vtp_fieldsToSet,"fieldName","value"),m);
fh(N.I)||(m.storage="none");fh(N.D)||(m.allowAdFeatures=!1,m.storeGac=!1);Bp()||(m.allowAdFeatures=!1);xp()||(m.allowAdPersonalizationSignals=!1);l.vtp_transportUrl&&(m._x_19=l.vtp_transportUrl);if(Ya(m.urlPassthrough)){m._useUp=!0;var p=!1;Qg()&&!p&&(m._cs=a)}return m},h=function(l){if(l.vtp_gaSettings){var m=L(l.vtp_gaSettings);m.vtp_fieldsToSet=void 0;l=L(l,m)}var p=g(l),q=
Vl(l.vtp_functionName);if(Ja(q)){q.r=!0;var r="",t="";l.vtp_setTrackerName&&"string"===typeof l.vtp_trackerName?""!==l.vtp_trackerName&&(t=l.vtp_trackerName,r=t+"."):(t="gtm"+Ci(),r=t+".");var u={name:t};f(p,u,!0);var v={"&gtm":In(!0)};f(p,v,!1);var w=encodeURI(al("https:","http:","//www.google-analytics.com/"+(l.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!p.forceSSL));q("create",l.vtp_trackingId,u);q(r+"set",v);q(r+"require",l.vtp_optimizeContainerId,{dataLayer:"dataLayer"});
q(l.vtp_gtmOnSuccess);q(r+"require","render");b||(b=!0,Q(w,function(){return Tl().loaded||l.vtp_gtmOnFailure()},l.vtp_gtmOnFailure));var y=V("dataLayer"),x=y&&y.hide;x&&(x.end||!0===x["GTM-NWDMT9Q"])&&(x[l.vtp_optimizeContainerId]=!0)}else J(l.vtp_gtmOnFailure)};(function(l){Y.__opt=l;Y.__opt.m="opt";Y.__opt.o=!0;Y.__opt.priorityOverride=0})(function(l){jh(function(){h(l)},[N.I,N.D])})}();




Y.h.aev=["google"],function(){function a(t,u,v){var w=t||Pi(u,"gtm");if(w)return w[v]}function b(t,u,v,w,y){y||(y="element");var x=u+"."+v,z;if(p.hasOwnProperty(x))z=p[x];else{var B=a(t,u,y);if(B&&(z=w(B),p[x]=z,q.push(x),35<q.length)){var C=q.shift();delete p[C]}}return z}function c(t,u,v,w){var y=a(t,u,r[v]);return void 0!==y?y:w}function d(t,u){if(!t)return!1;var v=e(su());La(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++){var x=u[y];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(B){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(t))return!1}else{var z=x;if(0!=z.length){if(0<=e(t).indexOf(z))return!1;w.push(e(z))}}}return!dv(t,w)}function e(t){m.test(t)||(t="http://"+t);return Eh(Gh(t),"HOST",!0)}function f(t,u,v,w){switch(t){case "SUBMIT_TEXT":return b(u,v,"FORM."+t,g,"formSubmitElement")||w;case "LENGTH":var y=b(u,v,"FORM."+t,h);return void 0===y?w:y;case "INTERACTED_FIELD_ID":return l(u,v,"id",w);case "INTERACTED_FIELD_NAME":return l(u,
v,"name",w);case "INTERACTED_FIELD_TYPE":return l(u,v,"type",w);case "INTERACTED_FIELD_POSITION":var x=a(u,v,"interactedFormFieldPosition");return void 0===x?w:x;case "INTERACT_SEQUENCE_NUMBER":var z=a(u,v,"interactSequenceNumber");return void 0===z?w:z;default:return w}}function g(t){switch(t.tagName.toLowerCase()){case "input":return ic(t,"value");case "button":return jc(t);default:return null}}function h(t){if("form"===t.tagName.toLowerCase()&&t.elements){for(var u=0,v=0;v<t.elements.length;v++)zq(t.elements[v])&&
u++;return u}}function l(t,u,v,w){var y=a(t,u,"interactedFormField");return y&&ic(y,v)||w}var m=/^https?:\/\//i,p={},q=[],r={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(t){Y.__aev=t;Y.__aev.m="aev";Y.__aev.o=!0;Y.__aev.priorityOverride=
0})(function(t){var u=t.vtp_gtmEventId,v=t.vtp_defaultValue,w=t.vtp_varType,y;t.vtp_gtmCachedValues&&(y=t.vtp_gtmCachedValues.gtm);switch(w){case "TAG_NAME":var x=a(y,u,"element");return x&&x.tagName||v;case "TEXT":return b(y,u,w,jc)||v;case "URL":var z;a:{var B=String(a(y,u,"elementUrl")||v||""),C=Gh(B),E=String(t.vtp_component||"URL");switch(E){case "URL":z=B;break a;case "IS_OUTBOUND":z=
d(B,t.vtp_affiliatedDomains);break a;default:z=Eh(C,E,t.vtp_stripWww,t.vtp_defaultPages,t.vtp_queryKey)}}return z;case "ATTRIBUTE":var D;if(void 0===t.vtp_attribute)D=c(y,u,w,v);else{var I=t.vtp_attribute,T=a(y,u,"element");D=T&&ic(T,I)||v||""}return D;case "MD":var R=t.vtp_mdValue,U=b(y,u,"MD",lu);return R&&U?ou(U,R)||v:U||v;case "FORM":return f(String(t.vtp_component||"SUBMIT_TEXT"),y,u,v);default:var S=c(y,u,w,v);Eu(S,"aev",t.vtp_gtmEventId);return S}})}();

Y.h.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.m="gas";Y.__gas.o=!0;Y.__gas.priorityOverride=0})(function(a){var b=L(a),c=b;c[me.pb]=null;c[me.Ih]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();







Y.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=H.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,ac(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(r){J(g)}}}var b=function(d,e,f){Hl(function(){var g=google_tag_manager_external.postscribe.getPostscribe(),h={done:e},l=H.createElement("div");l.style.display="none";l.style.visibility="hidden";H.body.appendChild(l);try{g(l,d,h)}catch(m){J(f)}})};var c=function(d){if(H.body){var e=
d.vtp_gtmOnFailure,f=Fu(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.xi,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(H.body,kc(g),h,e)()}else qu(function(){c(d)},
200)};Y.__html=c;Y.__html.m="html";Y.__html.o=!0;Y.__html.priorityOverride=0}();






Y.h.lcl=[],function(){function a(){var c=V("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.zg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=lc(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=wq("lcl",h?"nv.mwt":"mwt",0),m;m=h?wq("lcl","nv.ids",[]):wq("lcl","ids",[]);if(m.length){var p=sq(g,"gtm.linkClick",m);if(b(f,g,c)&&!h&&l&&g.href){var q=!!Pa(String(nc(g,"rel")||"").split(" "),function(u){return"noreferrer"===u.toLowerCase()});
q&&zg(36);var r=V((nc(g,"target")||"_self").substring(1)),t=!0;if(wu(p,Wt(function(){var u;if(u=t&&r){var v;a:if(q){var w;try{w=new MouseEvent(f.type,{bubbles:!0})}catch(y){if(!c.createEvent){v=!1;break a}w=c.createEvent("MouseEvents");w.initEvent(f.type,!0,!0)}w.zg=!0;f.target.dispatchEvent(w);v=!0}else v=!1;u=!v}u&&(r.location.href=nc(g,"href"))}),l))t=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else wu(p,function(){},l||2E3);return!0}}};gc(c,"click",e,!1);gc(c,"auxclick",
e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=nc(d,"href"),g=f.indexOf("#"),h=nc(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=uu(f),m=uu(e.location);return l!==m}return!0}(function(c){Y.__lcl=c;Y.__lcl.m="lcl";Y.__lcl.o=!0;Y.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);
if(!f||0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(m){return Math.max(f,m)};vq("lcl","mwt",h,0);e||vq("lcl","nv.mwt",h,0)}var l=function(m){m.push(g);return m};vq("lcl","ids",l,[]);e||vq("lcl","nv.ids",l,[]);Bu("lcl")||(a(),Cu("lcl"));J(c.vtp_gtmOnSuccess)})}();
Y.h.evl=["google"],function(){function a(){var f=Number(vu("gtm.start"))||0;return ru().getTime()-f}function b(f,g,h,l){function m(){if(!rh(f.target)){g.has(d.hd)||g.set(d.hd,""+a());g.has(d.fe)||g.set(d.fe,""+a());var q=0;g.has(d.ld)&&(q=Number(g.get(d.ld)));q+=100;g.set(d.ld,""+q);if(q>=h){var r=sq(f.target,"gtm.elementVisibility",[g.g]),t=th(f.target);r["gtm.visibleRatio"]=Math.round(1E3*t)/10;r["gtm.visibleTime"]=h;r["gtm.visibleFirstTime"]=Number(g.get(d.fe));r["gtm.visibleLastTime"]=Number(g.get(d.hd));
wu(r);l()}}}if(!g.has(d.fc)&&(0==h&&m(),!g.has(d.Jb))){var p=V("self").setInterval(m,100);g.set(d.fc,p)}}function c(f){f.has(d.fc)&&(V("self").clearInterval(Number(f.get(d.fc))),f.s(d.fc))}var d={fc:"polling-id-",fe:"first-on-screen-",hd:"recent-on-screen-",ld:"total-visible-time-",Jb:"has-fired-"},e=function(f,g){this.element=f;this.g=g};e.prototype.has=function(f){return!!this.element.getAttribute("data-gtm-vis-"+f+this.g)};e.prototype.get=function(f){return this.element.getAttribute("data-gtm-vis-"+
f+this.g)};e.prototype.set=function(f,g){this.element.setAttribute("data-gtm-vis-"+f+this.g,g)};e.prototype.s=function(f){this.element.removeAttribute("data-gtm-vis-"+f+this.g)};(function(f){Y.__evl=f;Y.__evl.m="evl";Y.__evl.o=!0;Y.__evl.priorityOverride=0})(function(f){function g(){var y=!1,x=null;if("CSS"===l){try{x=lh(m)}catch(D){zg(46)}y=!!x&&v.length!=x.length}else if("ID"===l){var z=H.getElementById(m);z&&(x=[z],y=1!=v.length||v[0]!==z)}x||(x=[],y=0<v.length);if(y){for(var B=0;B<v.length;B++){var C=
new e(v[B],t);c(C)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&zh(w);0<v.length&&(w=yh(h,v,[r]))}}function h(y){var x=new e(y.target,t);y.intersectionRatio>=r?x.has(d.Jb)||b(y,x,q,"ONCE"===u?function(){for(var z=0;z<v.length;z++){var B=new e(v[z],t);B.set(d.Jb,"1");c(B)}zh(w);if(p&&Cr)for(var C=0;C<Cr.length;C++)Cr[C]===g&&Cr.splice(C,1)}:function(){x.set(d.Jb,"1");c(x)}):(c(x),"MANY_PER_ELEMENT"===u&&x.has(d.Jb)&&(x.s(d.Jb),x.s(d.ld)),x.s(d.hd))}var l=f.vtp_selectorType,m;"ID"===l?m=String(f.vtp_elementId):
"CSS"===l&&(m=String(f.vtp_elementSelector));var p=!!f.vtp_useDomChangeListener,q=f.vtp_useOnScreenDuration&&Number(f.vtp_onScreenDuration)||0,r=(Number(f.vtp_onScreenRatio)||50)/100,t=f.vtp_uniqueTriggerId,u=f.vtp_firingFrequency,v=[],w=-1;g();p&&Dr(g);J(f.vtp_gtmOnSuccess)})}();


var $x={};$x.macro=function(a){if(cu.pe.hasOwnProperty(a))return cu.pe[a]},$x.onHtmlSuccess=cu.mg(!0),$x.onHtmlFailure=cu.mg(!1);$x.dataLayer=Ji;$x.callback=function(a){Ai.hasOwnProperty(a)&&Ja(Ai[a])&&Ai[a]();delete Ai[a]};$x.bootstrap=0;$x._spx=!1;function ay(){pi[jf.N]=$x;fb(Bi,Y.h);Qe=Qe||cu;Re=ef}
function by(){var a=!1;a&&Pl("INIT");Eg().s();pi=A.google_tag_manager=A.google_tag_manager||{};lo();
kk.enable_gbraid_cookie_write=!0;if(pi[jf.N]){var b=pi.zones;b&&b.unregisterChild(jf.N);}else{for(var c=data.resource||{},d=c.macros||[],e=0;e<d.length;e++)Je.push(d[e]);for(var f=c.tags||[],g=0;g<f.length;g++)Me.push(f[g]);for(var h=c.predicates||[],l=0;l<h.length;l++)Le.push(h[l]);for(var m=c.rules||[],p=0;p<m.length;p++){for(var q=m[p],r={},t=
0;t<q.length;t++)r[q[t][0]]=Array.prototype.slice.call(q[t],1);Ke.push(r)}Oe=Y;Pe=ls;var u=data.permissions||{},v=data.sandboxed_scripts,w=data.security_groups;it();qf=new pf(u);if(void 0!==v)for(var y=["sandboxedScripts"],x=0;x<v.length;x++){var z=v[x].replace(/^_*/,"");Bi[z]=y}lt(w);ay();bu();Cl=!1;Dl=0;if("interactive"==H.readyState&&!H.createEventObject||"complete"==H.readyState)Fl();else{gc(H,"DOMContentLoaded",Fl);gc(H,"readystatechange",Fl);if(H.createEventObject&&H.documentElement.doScroll){var B=
!0;try{B=!A.frameElement}catch(T){}B&&Gl()}gc(A,"load",Fl)}Yr=!1;"complete"===H.readyState?$r():gc(A,"load",$r);Lm&&A.setInterval(Fm,864E5);
google_tag_manager_external.postscribe.installPostscribe();yi=(new Date).getTime();if(a){var I=Ql("INIT");
}}}
(function(a){if(!A["__TAGGY_INSTALLED"]){var b=!1;if(H.referrer){var c=Gh(H.referrer);b="cct.google"===Dh(c,"host")}if(!b){var d=aj("googTaggyReferrer");b=d.length&&d[0].length}b&&(A["__TAGGY_INSTALLED"]=!0,cc("https://cct.google/taggy/agent.js"))}var f=function(){var m=A["google.tagmanager.debugui2.queue"];m||(m=[],A["google.tagmanager.debugui2.queue"]=m,cc("https://www.googletagmanager.com/debug/bootstrap"));var p={messageType:"CONTAINER_STARTING",data:{scriptSource:Yb,containerProduct:"GTM",debug:!1}};p.data.resume=function(){a()};jf.Yg&&(p.data.initialPublish=!0);m.push(p)},g="x"===Eh(A.location,"query",!1,void 0,"gtm_debug");if(!g&&H.referrer){var h=Gh(H.referrer);g="tagassistant.google.com"===Dh(h,"host")}if(!g){var l=aj("__TAG_ASSISTANT");g=l.length&&l[0].length}A.__TAG_ASSISTANT_API&&(g=!0);g&&Yb?f():a()})(by);

})()

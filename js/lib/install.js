define(["require","jquery"],function(e){function i(e){return function(){return n[e].apply(n,arguments)}}function s(){var e=s[s.type+"Install"];e?e():s.trigger("error","unsupported install: "+s.type)}function o(e){s.state=e,s.trigger("change",s.state)}var t=e("jquery"),n=t({}),r;s.state="unknown",s.check=function(){var e=navigator.mozApps,t;navigator.mozApps?(s.type="mozilla",t=navigator.mozApps.getSelf(),t.onsuccess=function(){this.result?o("installed"):o("uninstalled")},t.onerror=function(e){s.error=e,o("error")}):typeof chrome!="undefined"&&chrome.webstore&&chrome.app?(s.type="chromeStore",chrome.app.isInstalled?o("installed"):o("uninstalled")):typeof window.navigator.standalone!="undefined"?(s.type="ios",window.navigator.standalone?o("installed"):o("uninstalled")):(s.type="unsupported",o("unsupported"))};var u=location.href.split("#")[0];return u=location.href.replace("index.html",""),s.mozillaInstallUrl=u+"/manifest.webapp",s.mozillaInstall=function(){var e=navigator.mozApps.install(s.mozillaInstallUrl);e.onsuccess=function(e){o("installed")},e.onerror=function(e){s.error=e,o("error")}},s.chromeInstallUrl=null,s.chromeInstall=function(){chrome.webstore.install(s.chromeInstallUrl,function(){o("installed")},function(e){s.error=e,o("error")})},s.iosInstall=function(){s.trigger("showiOSInstall",navigator.platform.toLowerCase())},s.on=i("on"),s.off=i("off"),s.trigger=i("trigger"),s.check(),s})
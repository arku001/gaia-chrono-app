define(["require","jquery","install"],function(e){function r(){t(function(){var e=t(".install-btn");n.state=="uninstalled"?e.show():(n.state=="installed"||n.state=="unsupported")&&e.hide()})}var t=e("jquery"),n=e("install");t(function(){t(".install-btn").click(n)}),n.on("change",r),n.on("error",function(e,n){t(".install-error").text(n.toString()).show()}),n.on("showiOSInstall",function(){var e=t(".install-ios-msg");e.show(),setTimeout(function(){e.hide()},8e3)})})
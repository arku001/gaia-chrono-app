define(["require","jquery"],function(e){function f(e,n,r){var i=t(e).get(0).clientHeight*r;t(n).animate({scrollTop:i},{duration:"0.3s",easing:"swing"})}function l(e){var t=Math.floor(e/3600),n=e%3600,r=Math.floor(n/60),i=n%60,s=Math.ceil(i),o={val:{h:t,m:r,s:s},name:{h:t<10?"0"+t:t,m:r<10?"0"+r:r,s:s<10?"0"+s:s}};return o}var t=e("jquery");for(var n=0;n<60;n++){var r=n<10?"0"+n:n,i=t("<li>",{role:"option","class":r}).html(r);t("#seconds").append(i)}for(var n=0;n<60;n++){var r=n<10?"0"+n:n,i=t("<li>",{role:"option","class":r}).html(r);t("#minutes").append(i)}for(var n=0;n<100;n++){var r=n<10?"0"+n:n,i=t("<li>",{role:"option","class":r}).html(r);t("#hours").append(i)}var s=undefined,o=undefined,u=undefined,a=0;return t("#reset_lap").live("click",function(){if(typeof s=="undefined")o=undefined,total_elapsed_secs=0,f(t("#seconds > li.00"),t("#seconds"),0),f(t("#minutes > li.00"),t("#minutes"),0),f(t("#hours > li.00"),t("#hours"),0);else{var e=Math.floor(Date.now()-o),n=l((a+e)/1e3);u(n)}}),t("#start_stop").live("click",function(){typeof o=="undefined"&&(o=Date.now()),s?(t("#start_stop").html("Start"),t("#reset_lap").html("Reset"),clearInterval(s),a+=Date.now()-o,s=undefined,o=undefined):(t("#start_stop").html("Stop"),t("#reset_lap").html("Lap"),s=setInterval(function(){var e=Math.floor(Date.now()-o),n=l((a+e)/1e3);f(t("#seconds > li."+n.name.s),t("#seconds"),n.val.s),f(t("#minutes > li."+n.name.m),t("#minutes"),n.val.m),f(t("#hours > li."+n.name.h),t("#hours"),n.val.h)},500))}),{setLapHandler:function(e){u=e}}})
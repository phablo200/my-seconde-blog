/*!CK:2762021756!*//*1443039433,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["OshVN"]); }

__d('onLoadedDataHTMLMediaElement',['EventListener','HTMLMediaElementReadyStates','invariant','setImmediate'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(m,n){!(m instanceof window.HTMLMediaElement)?j(0):undefined;if(m.readyState>=i.HAVE_CURRENT_DATA)k(n);return h.listen(m,'loadeddata',n);}l.once=function(m,n){var o=l(m,(function(){if(!o)return;o.remove();o=null;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];n.apply(this,q);}).bind(this));};f.exports=l;},null);
/*!CK:3010383750!*//*1443045896,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["ZlbKM"]); }

__d('NotificationPhotoThumbnail',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j){if(!j.media||!j.style_list||!j.style_list.length)return null;switch(j.style_list[0]){case 'new_album':case 'album':case 'application':case 'photo':case 'video':case 'video_autoplay':case 'video_inline':return j.media.image;default:return null;}}var i={getThumbnail:function(j,k,l){var m;if(j&&j.length){j.some(function(q){m=h(q);if(m)return true;return false;});if(m)return m;}if(l){var n=l.relevant_comments;if(n&&n.length){var o=n[0].attachments;if(o&&o.length){m=h(o[0]);if(m)return m;}}}if(k){var p=k.attachments;if(p&&p.length)return h(p[0]);}return null;}};f.exports=i;},null);
__d("XQuickPromotionSimpleLoggingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/qp\/action\/log\/",{qp_id:{type:"Int",required:true},qp_action:{type:"Enum",enumType:1},qp_instance_log_data:{type:"StringToStringMap",defaultValue:{}},qp_event:{type:"String"}});},null,{});
__d('QPRenderer',['$','CSS','XQuickPromotionSimpleLoggingController','AsyncSignal'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=function(q,event,r){var s=j.getURIBuilder().setInt('qp_id',q).setString('qp_event',event).setStringToStringMap('qp_instance_log_data',r).getURI();new k(s,{}).send();},m=function(q,r,s){var t=j.getURIBuilder().setInt('qp_id',q).setEnum('qp_action',r).setStringToStringMap('qp_instance_log_data',s).getURI();new k(t,{}).send();},n=function(q,r,s,t,u,v){p(q,s,h(t),v,function(){if(u)i.hide(r);});},o=function(q,r,s){r.show();l(q,'view',{});r.subscribe('cancel',function(){l(q,'dialog_cancel',{});});for(var t=0;t<s.length;t++){var u=s[t],v=h(u.element_id);p(q,u.action,v,u.instance_log_data,function(){if(u.should_close)r.hide();});if(u.action=='primary')v.focus();}},p=function(q,r,s,t,u){s.addEventListener('click',function(){var v=j.getURIBuilder().setInt('qp_id',q).setEnum('qp_action',r).setStringToStringMap('qp_instance_log_data',t).getURI();new k(v,{}).send();u();});};g.setAction=n;g.setDialogActionsAndShow=o;g.logAction=m;g.logEvent=l;},null);
__d('JewelQPLogging',['QPRenderer'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=false,j=null,k=false;function l(){if(k)return;if(i&&j){h.logEvent(j.promotion_id,'view',j.instance_log_data?j.instance_log_data:{});k=true;}}var m={onJewelOpened:function(){i=true;l();},updateQPLogData:function(n){j=n;l();}};f.exports=m;},null);
__d('RequestsJewel',['Animation','AccessibilityLogger','Arbiter','AsyncRequest','AsyncSignal','ChannelConstants','CSS','DOM','Event','LinkController','Parent','ScrollableArea','Vector','$','debounce','ge','shield','fbt','JewelQPLogging','requireWeak'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa){if(c.__markCompiled)c.__markCompiled();var ba=null;aa('FriendBrowserCheckboxController',function(ga){return ba=ga;});var ca=530,da=30,ea=160;Object.assign(fa,{instance:null,getInstance:function(){return fa.instance;},replaceJewelTitle:function(ga,ha){o.setContent(u(ga),ha);},updateFromDOM:function(){if(fa.instance)fa.instance.fromDom();},setInitialHeight:function(){if(fa.instance)fa.instance.setHeight();},maybeLoadJewel:function(){if(fa.instance)fa.instance.maybeLoadJewel();}});function fa(ga,ha,ia){'use strict';fa.instance=this;this.countNew=0;this.jewel=ga;this.jewelFlyoutCase=ga.getRoot();this.jewelFlyout=w('fbRequestsFlyout');this.newCountSpan=w('newRequestCount');this.folder=ha;this.doNewMarkRead=ia;this.openTimestamp=0;this.$RequestsJewel1={};this.$RequestsJewel2=0;this.shouldClearPredictionAssocOnClick=false;var ja=w('requestsMarkReadButton');if(ja)p.listen(ja,'click',x(this.$RequestsJewel3,this));this.jewel.subscribe('marked-seen',x(this.$RequestsJewel4,this));this.jewel.subscribe('closed',x(this.$RequestsJewel5,this));this.jewel.subscribe('updated',this.$RequestsJewel6.bind(this));this.jewel.subscribe('opened',this.$RequestsJewel7.bind(this));q.registerHandler(this.$RequestsJewel8.bind(this));j.subscribe(m.getArbiterType('jewel_requests_add'),this.$RequestsJewel9.bind(this));j.subscribe(m.getArbiterType('jewel_friending_notifs'),this.$RequestsJewel10.bind(this));j.subscribe(m.getArbiterType('jewel_requests_remove_old'),this.$RequestsJewel11.bind(this));j.subscribe(m.getArbiterType('friend_requests_seen'),this.$RequestsJewel12.bind(this));p.listen(this.jewelFlyout,'submit',(function(la){var ma=r.byClass(la.getTarget(),'objectListItem');if(ma){n.removeClass(ma,'jewelItemNew');n.addClass(ma,'jewelItemResponded');}}).bind(this));var ka=o.find(w('fbRequestsJewel'),'a[rel="toggle"]');p.listen(ka,'focus',(function(la){i.logFocusIn();}).bind(this));this.setupScroll();p.listen(window,'resize',v((function(){this.$RequestsJewel13();}).bind(this)));}fa.prototype.setupScroll=function(){'use strict';var ga=o.scry(this.jewelFlyout,'.uiScrollableAreaWrap')[0];if(ga){this.$RequestsJewel14=ga;this.$RequestsJewel15=0;this.$RequestsJewel16=p.listen(ga,'scroll',this.$RequestsJewel17.bind(this),p.Priority.$RequestsJewel18);}};fa.prototype.fromDom=function(){'use strict';o.scry(this.jewelFlyout,'.jewelItemList li.objectListItem').forEach((function(ga){var ha=ga.getAttribute('id');if(ha){var ia=w(ha+'_status'),ja=this.$RequestsJewel19(ha);if(ja.requester)this.$RequestsJewel1[ja.requester]=ha;++this.$RequestsJewel2;}}).bind(this));this.$RequestsJewel20();};fa.prototype.$RequestsJewel21=function(ga){'use strict';var ha=ga.match(/^(\d+)_(\d+)/);return ha?{requester:ha[1],type:ha[2]}:undefined;};fa.prototype.$RequestsJewel19=function(ga){'use strict';var ha=ga?this.$RequestsJewel21(ga):undefined,ia;if(ha&&ha.requester){ia=parseInt(ha.requester,10);if(isNaN(ia))ia=undefined;}var ja;if(ha&&ha.type){ja=parseInt(ha.type,10);if(isNaN(ja))ja=undefined;}return {requester:ia,type:ja};};fa.prototype.$RequestsJewel22=function(){'use strict';if(this.countNew>0)this.countNew-=1;};fa.prototype.$RequestsJewel8=function(ga,event){'use strict';var ha=r.byClass(ga,'jewelItemNew');if(ha&&r.byClass(ha,'fbRequestList')&&r.byClass(ha,'beeperEnabled')){var ia=this.$RequestsJewel21(ha.id);ia&&this.$RequestsJewel4(ia.requester,ia.type);this.$RequestsJewel22();j.inform('jewel/count-updated',{jewel:'requests',count:this.countNew});n.removeClass(ha,'jewelItemNew');}return true;};fa.prototype.$RequestsJewel23=function(){'use strict';return o.scry(this.jewelFlyout,'.uiScrollableArea')[0];};fa.prototype.$RequestsJewel17=function(){'use strict';var ga=o.scry(this.$RequestsJewel14,'.uiMorePager');if(!ga)return;var ha=ga.pop();if(ha){var ia=t.getElementPosition(ha,'viewport').y;if(ia>0)n.addClass(r.byClass(this.$RequestsJewel14,'uiScrollableArea'),'contentAfter');var ja=o.find(ha,'a');if(!ja)return;var ka=t.getElementPosition(ja,'viewport').y;if(ka==this.$RequestsJewel15)return;var la=t.getElementPosition(this.$RequestsJewel14,'viewport').y+t.getElementDimensions(this.$RequestsJewel14).y;if(ka-300<la&&ka>0){this.$RequestsJewel15=ka;var ma=ja.getAttribute('ajaxify');if(ma){new k(ma).setRelativeTo(ja).setStatusElement(r.byClass(ja,'stat_elem')).send();}else ba&&ba.getInstance('jewel').showMore();}}};fa.prototype.$RequestsJewel10=function(ga,ha){'use strict';if(!ha||this.jewel.isOpen())return;if(ha.obj.notif_type!=='friend_confirmed')return;if(w('fbRequestsJewelLoading')){new k().setURI('/ajax/requests/loader/').send();return;}var ia={};ia.reloadcontent=true;new k().setURI('/ajax/requests/loader/').setData(ia).send();};fa.prototype.$RequestsJewel9=function(ga,ha){'use strict';if(!ha)return;var ia=ha.obj.from,ja=ha.obj.suggester,ka=this.$RequestsJewel19(this.$RequestsJewel1[ia]).type,la=ka===19&&!ja;if(!la&&(ka||this.jewel.isOpen()))return;if(w('fbRequestsJewelLoading')){new k().setURI('/ajax/requests/loader/').send();}else{var ma={};ma.reloadcontent=true;new k().setURI('/ajax/requests/loader/').setData(ma).send();}};fa.prototype.$RequestsJewel11=function(ga,ha){'use strict';if(!ha||this.jewel.isOpen()||w('fbRequestsJewelLoading')!==null)return;var ia=this.$RequestsJewel1[ha.obj.from],ja=ia&&w(ia);if(ja){if(n.hasClass(ja,'jewelItemNew')){this.$RequestsJewel22();j.inform('jewel/count-updated',{jewel:'requests',count:this.countNew});}if(!n.hasClass(ja,'jewelItemResponded')){o.remove(ja);delete this.$RequestsJewel1[ha.obj.from];--this.$RequestsJewel2;this.$RequestsJewel20();}}};fa.prototype.$RequestsJewel3=function(){'use strict';this.jewel.markSeen();this.$RequestsJewel24();};fa.prototype.$RequestsJewel4=function(ga,ha){'use strict';var ia=o.scry(this.jewelFlyout,'li');new l('/ajax/gigaboxx/endpoint/UpdateLastSeenTime.php',{folder:this.folder,first_item:ia[0].id}).send();var ja=typeof ga!='undefined'&&typeof ha!='undefined'?{requester:ga,type:ha}:{};this.doNewMarkRead&&new l('/ajax/requests/mark_read/',ja).send();};fa.prototype.$RequestsJewel12=function(ga,ha){'use strict';j.inform('jewel/count-updated',{jewel:'requests',count:0});};fa.prototype.$RequestsJewel24=function(ga,ha){'use strict';o.scry(this.jewel.root,'li.jewelItemNew').forEach(function(ia){n.removeClass(ia,'jewelItemNew');});};fa.prototype.$RequestsJewel6=function(ga,ha){'use strict';this.countNew=ha.count;n.conditionClass(this.jewelFlyout,'beeperUnread',this.countNew>0);n.conditionClass(this.jewelFlyoutCase,'showRequests',this.countNew>0);if(this.newCountSpan){var ia=this.countNew==1?y._("{num} NOVA SOLICITA\u00c7\u00c3O",[y.param('num',this.countNew)]):y._({"*":"{num} NOVAS SOLICITA\u00c7\u00d5ES"},[y.param('num',this.countNew,[0])]);o.setContent(this.newCountSpan,ia);}};fa.prototype.$RequestsJewel20=function(){'use strict';o.scry(this.jewelFlyout,'li.empty').forEach((function(ga){n.conditionShow(ga,this.$RequestsJewel2<=0);}).bind(this));};fa.prototype.$RequestsJewel7=function(){'use strict';j.inform('requestsJewel/opened');var ga=w('fbRequestsJewelLoading'),ha=this.$RequestsJewel23();if(!ga&&!ha){this.unhandledRequest=true;}else if(ga){var ia=Date.now();if(this.openTimestamp+5000<ia){this.openTimestamp=ia;new k().setURI('/ajax/requests/loader/').setData({log_impressions:true}).send();}}else{var ja=Object.keys(this.$RequestsJewel1);if(ja.length>0)new k().setURI('/friends/requests/log_impressions').setData({ids:ja.join(','),ref:'jewel'}).send();}ha&&s.poke(ha);z.onJewelOpened();};fa.prototype.$RequestsJewel5=function(){'use strict';j.inform('requestsJewel/closed');this.$RequestsJewel24();};fa.prototype.$RequestsJewel25=function(){'use strict';return Math.min(Math.max(t.getViewportDimensions().y-ea,da),ca);};fa.prototype.$RequestsJewel13=function(){'use strict';if(this.$RequestsJewel23())new h(this.$RequestsJewel23()).to('height',this.$RequestsJewel25()+'px').duration(100).go();};fa.prototype.setHeight=function(){'use strict';this.$RequestsJewel23().style.height=this.$RequestsJewel25()+'px';};fa.prototype.maybeLoadJewel=function(){'use strict';if(this.unhandledRequest){this.unhandledRequest=false;this.$RequestsJewel7();}};f.exports=fa;},null);
__d('ModalMask',['DOM'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=null,j=0,k={show:function(){j++;if(!i){i=h.create('div',{id:'modalMaskOverlay'});h.appendContent(document.body,i);}},hide:function(){if(j){j--;if(!j&&i){h.remove(i);i=null;}}},getNode:function(){return i;}};f.exports=k;},null);
__d('PagesVoiceBar',['$','Arbiter','AsyncRequest','BlueBar','ChannelConstants','DOM','URI','ViewportBounds'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p='PagesVoiceBar/initialized',q='PagesVoiceBar/switchVoice',r='page_transition',s='pages_voice_bar_sync',t=null,u=null,v=false,w=false,x=o.addTop(0);function y(ea,fa){new j('/ajax/pages/switch_voice.php').setData(fa).setHandler(function(ga){ca();}).send();}function z(){t=null;}function aa(ea,fa){if(fa.obj.profile_id&&fa.obj.profile_id===t)ca();}function ba(ea){i.subscribe(p,ea);}function ca(){n.getNextURI().go();}var da={initVoiceBar:function(){if(w)return;u=h('pagesVoiceBarContent');i.subscribe(q,y);i.subscribe(r,z);i.subscribe(l.getArbiterType(s),aa);w=true;v=m.contains(k.getBar(),u);i.inform(p,null,i.BEHAVIOR_STATE);},update:function(ea,fa){ba(function(){t=fa;m.setContent(u,ea);var ga=u.offsetHeight;if(!v&&x.getSize()!==ga){x.remove();x=o.addTop(o.getTop()+ga);}});}};f.exports=da;},null);
__d('VideoPermalinkURI',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={isValid:function(i){return h.parse(i)!==null;},parse:function(i){if(this.isValidLegacy(i)){var j=i.getQueryData();if(j.v)return {video_id:j.v,set_token:j.set};return null;}var k=i.getPath();if(k[k.length-1]==='/')k=k.substring(0,k.length-1);var l=k.split('/');if(l.length>=3&&l[2]==='videos')if(l.length===4&&/^\d+$/.exec(l[3])!==null){return {video_id:l[3],set_token:null};}else if(l.length===5&&/^\d+$/.exec(l[4])!==null)return {video_id:l[4],set_token:l[3]};return null;},isValidLegacy:function(i){var j=i.getPath();if(j[j.length-1]==='/')j=j.substring(0,j.length-1);if(j==='/photo.php'||j==='/force_photo/photo.php'||j==='/photo'||j==='/force_photo/photo/index.php'||j==='/photo/index.php'||j==='/force_photo/photo'||j==='/video.php'||j==='/video/video.php')return true;return false;}};f.exports=h;},null);
__d('ViewasChromeBar',['Event','Arbiter','AsyncRequest','CSS','DOM','Focus','ModalMask','PageTransitionsRegistrar','Parent','cx','csx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s='ViewasChromeBar/initialized',t=null,u=false;function v(y){i.subscribe(s,y);}function w(y){k.addClass(y,"_7g7");var z=l.find(y,"._7g0");m.set(l.find(z,'.textInput'));}var x={initChromeBar:function(y){if(u)return;t=y;u=true;i.inform(s,null,i.BEHAVIOR_STATE);},update:function(y,z){v(function(){l.setContent(t,y);if(z)new j('/ajax/privacy/glasgow/viewas_bar_flyout_open').send();});},registerSpecificModeOnClick:function(y){h.listen(y,'click',w.bind(null,p.byClass(y,"_7f-")));},registerFlyoutModalMask:function(){n.show();o.registerHandler(n.hide,10);}};f.exports=x;},null);
__d('SearchPeopleFriendsOf',['TokenizeUtil','URI','fbt'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(l,m){'use strict';this.friendsOfUri=l;this.placementStrategy=m.placement_strategy;this.placementParams=m.placement_params;this.triggerStrategy=m.trigger_strategy;this.triggerParams=m.trigger_params;}k.prototype.injectInto=function(l,m){'use strict';if(!l||l.length===0||!this.$SearchPeopleFriendsOf1(l,m))return;if(l[0].type!=="user")return;var n=this.createFindAllFriendsOf(l[0].text,l[0].uid);this.$SearchPeopleFriendsOf2(n,l);};k.prototype.$SearchPeopleFriendsOf2=function(l,m){'use strict';var n=this.$SearchPeopleFriendsOf3(m);if(n==='last'){var o=m.filter(function(p){return p.type==='user';}).length;n=o;}m.splice(n,0,l);};k.prototype.$SearchPeopleFriendsOf1=function(l,m){'use strict';var n=this.$SearchPeopleFriendsOf4(this.triggerStrategy);return n(l,this.triggerParams,m);};k.prototype.$SearchPeopleFriendsOf3=function(l){'use strict';var m=this.$SearchPeopleFriendsOf4(this.placementStrategy);return m(l,this.placementParams);};k.prototype.$SearchPeopleFriendsOf4=function(l){'use strict';return this["$SearchPeopleFriendsOf_"+l];};k.prototype.$SearchPeopleFriendsOf5=function(l,m,n){'use strict';return false;};k.prototype.$SearchPeopleFriendsOf6=function(l,m,n){'use strict';return true;};k.prototype.$SearchPeopleFriendsOf7=function(l,m,n){'use strict';var o=parseInt(m,10),p=0;for(var q=0;q<l.length;q++){var r=l[q];if(r.type==='user'&&r.index_rank==-1)p++;if(p>o)return false;}return true;};k.prototype.$SearchPeopleFriendsOf8=function(l,m,n){'use strict';var o=parseInt(m,10),p=h.tokenize(n);p=p.map(function(x){return x.toLowerCase();});var q=0;for(var r=0;r<l.length;r++){var s=l[r];if(s.type!=='user'||s.index_rank!=-1)continue;var t=h.tokenize(s.text);t=t.map(function(x){return x.toLowerCase();});if(t.length<p.length)continue;var u=true;for(var v=0;v<p.length-1;v++)if(p[v]!==t[v]){u=false;break;}var w=p.length-1;if(u&&t[w].startsWith(p[w])){q++;if(q>=o)return false;}}return true;};k.prototype.$SearchPeopleFriendsOf9=function(l,m){'use strict';return "last";};k.prototype.$SearchPeopleFriendsOf10=function(l,m){'use strict';return 1;};k.prototype.createFindAllFriendsOf=function(l,m){'use strict';var n=j._("Amigos de {name}",[j.param('name',l)]),o=new i(this.friendsOfUri).addQueryData({q:"",init:'psm',fofid:m}).toString();return {uid:'people_search',type:'user',text:n,classNames:'seeAllUser',photo:'/images/search_typeahead/people_see_more.png',logType:'grammar',path:o};};f.exports=k;},null);
__d('TypeaheadRegulateMemorializedUsers',['TokenizeUtil'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){'use strict';this._typeahead=j;}i.prototype._filter=function(j,k){'use strict';if(j.type!=='user'||!j.memorialized)return true;var l=h.parse(j.text).tokens;if(l.length===1&&h.isExactMatch(k,j.text))return true;var m=this._typeahead.getData().getTextToIndex(j),n=h.parse(k).tokens;return n.length>1&&h.isQueryMatch(k,m);};i.prototype.enable=function(){'use strict';this._filterRegistry=this._typeahead.getData().addFilter(this._filter.bind(this));};i.prototype.disable=function(){'use strict';this._filterRegistry.remove();this._filterRegistry=null;};Object.assign(i.prototype,{_filterRegistry:null});f.exports=i;},null);
__d('legacy:RegulateMemorializedUsersTypeaheadBehavior',['TypeaheadRegulateMemorializedUsers'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};b.TypeaheadBehaviors.regulateMemorializedUsers=function(i){i.enableBehavior(h);};},3);
__d('SearchTypeaheadRenderer',['BadgeHelper','DOM','fbt','MusicButtonManager','TokenizeUtil','TypeaheadFacepile','URI','WWWBase','Locale','UnicodeBidi'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r=' \u00B7 ',s=false;function t(u,v){var w=[],x=u.photos||u.photo;if(x){if(x instanceof Array){x=m.render(x);}else x=i.create('img',{alt:'',src:x});w.push(x);if(u.song){w.push(i.create('span',{className:'playButton'}));w.push(i.create('span',{className:'playLoader'}));}}var y;if(u.text){var z=u.alias,aa=this.value,ba=u.text,ca=q.isDirectionRTL(ba),da=p.isRTL(),ea=ca&&!da?'rtl':!ca&&da?'ltr':'';y=[ba];if(z&&l.isQueryMatch(aa,z)&&!l.isQueryMatch(aa,ba))y.push(i.create('span',{className:'alias'},[' \xB7 '+z]));if(u.is_verified){y.push(h.renderBadge('xsmall','verified'));}else if(u.is_work_user)y.push(h.renderBadge('xsmall','work'));w.push(i.create('span',{className:'text',dir:ea},y));}if(u.category){var fa=[u.category];if(u.is_external)fa.push(i.create('span',{className:'arrow'}));var ga=u.message?'preCategory':'category';w.push(i.create('span',{className:ga},fa));}if(u.message)w.push(i.create('span',{className:'category'},[u.message]));var ha=u.subtextOverride||u.subtext;if(ha){var ia=[ha];if(u.saved_context){var ja=i.create('span',{className:'saved'},[u.saved_context]);ia.unshift(ja,r);}w.push(i.create('span',{className:'subtext'},ia));}var ka=u.classNames||u.type||'',la=u.is_external?'_blank':'',ma=!u.song&&u.path||'';if(ma){if(!/^https?\:\/\//.test(ma))ma=o.uri+ma.substr(1);ma+=(ma.indexOf('?')>0?'&':'?')+'ref=ts&fref=ts';}var na=i.create('a',{href:ma,rel:'ignore',target:la},w);if(u.song){na.id='mb_'+(Math.random()*1e+06|0);setTimeout(k.addButton.bind(null,u.song.provider,na.id,u.song.url,u.song.context,u.song.media_type),0);na.onclick=this.ignoreClick;}var oa=null;if(u.type==='header'){var pa=null,qa=null;if(u.uid==='recent'){qa=new n('/profile.php');qa.setQueryData({sk:'allactivity',log_filter:'search'});pa=j._("EDITAR");}else if(u.uid==='pymk'){qa=new n('/find-friends/browser/');pa=j._("Ver todos");}if(qa){oa=i.create('a',{href:qa,className:'typeaheadHeaderRightLink'},pa);na.setAttribute('class','typeaheadHeaderLeftLink');ka+=' typeaheadHeader';}}var ra=i.create('li',{className:ka},[na,oa]);if(u.text){ra.setAttribute('title',u.text);ra.setAttribute('aria-label',u.text);}if(this.showupadatedsuggestions&&!s){t.className+=' updatedSuggestionRows';s=true;}return ra;}t.className='search';f.exports=t;},null);
__d("XPrivacyCheckupSpawnDialogController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/privacy\/checkup\/dialog\/show\/",{source:{type:"Enum",enumType:1}});},null,{});
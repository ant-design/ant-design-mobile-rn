"use strict";(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[6317],{3811:function(t,n,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.outlineGlyphMap=void 0;var c=b(i(67294)),f=i(49817),u=["name","style","children","size","color"];function d(a){if(typeof WeakMap!="function")return null;var o=new WeakMap,r=new WeakMap;return(d=function(s){return s?r:o})(a)}function b(a,o){if(!o&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var r=d(o);if(r&&r.has(a))return r.get(a);var l={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in a)if(p!=="default"&&Object.prototype.hasOwnProperty.call(a,p)){var v=s?Object.getOwnPropertyDescriptor(a,p):null;v&&(v.get||v.set)?Object.defineProperty(l,p,v):l[p]=a[p]}return l.default=a,r&&r.set(a,l),l}function e(){return e=Object.assign||function(a){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(a[l]=r[l])}return a},e.apply(this,arguments)}function g(a,o){if(a==null)return{};var r=y(a,o),l,s;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(s=0;s<p.length;s++)l=p[s],!(o.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(a,l)&&(r[l]=a[l])}return r}function y(a,o){if(a==null)return{};var r={},l=Object.keys(a),s,p;for(p=0;p<l.length;p++)s=l[p],!(o.indexOf(s)>=0)&&(r[s]=a[s]);return r}function x(a,o){if(!(a instanceof o))throw new TypeError("Cannot call a class as a function")}function h(a,o){for(var r=0;r<o.length;r++){var l=o[r];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(a,l.key,l)}}function T(a,o,r){return o&&h(a.prototype,o),r&&h(a,r),a}function w(a,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(o&&o.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),o&&m(a,o)}function m(a,o){return m=Object.setPrototypeOf||function(l,s){return l.__proto__=s,l},m(a,o)}function B(a){var o=L();return function(){var l=S(a),s;if(o){var p=S(this).constructor;s=Reflect.construct(l,arguments,p)}else s=l.apply(this,arguments);return P(this,s)}}function P(a,o){return o&&(typeof o=="object"||typeof o=="function")?o:V(a)}function V(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function L(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}function S(a){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},S(a)}var C={"account-book":59905,aim:59906,alert:59907,alibaba:59908,"align-center":59909,"align-left":59910,"align-right":59911,"alipay-circle":59912,alipay:59913,aliwangwang:59914,aliyun:59915,amazon:59916,android:59917,"ant-cloud":59918,"ant-design":59919,apartment:59920,api:59921,apple:59922,"appstore-add":59923,appstore:59924,"area-chart":59925,"arrow-down":59926,"arrow-left":59927,"arrow-right":59928,"arrow-up":59929,"arrows-alt":59930,"audio-muted":59931,audio:59932,audit:59933,backward:59934,bank:59935,"bar-chart":59936,barcode:59937,bars:59938,"behance-square":59939,behance:59940,bell:59941,"bg-colors":59942,block:59943,bold:59944,book:59945,"border-bottom":59946,"border-horizontal":59947,"border-inner":59948,"border-left":59949,"border-outer":59950,"border-right":59951,"border-top":59952,"border-verticle":59953,border:59954,"borderless-table":59955,"box-plot":59956,branches:59957,bug:59958,build:59959,bulb:59960,calculator:59961,calendar:59962,camera:59963,car:59964,"caret-down":59965,"caret-left":59966,"caret-right":59967,"caret-up":59968,"carry-out":59969,"check-circle":59970,"check-square":59971,check:59972,chrome:59973,"ci-circle":59974,ci:59975,clear:59976,"clock-circle":59977,"close-circle":59978,"close-square":59979,close:59980,"cloud-download":59981,"cloud-server":59982,"cloud-sync":59983,"cloud-upload":59984,cloud:59985,cluster:59986,"code-sandbox":59987,code:59988,"codepen-circle":59989,codepen:59990,coffee:59991,"column-height":59992,"column-width":59993,comment:59994,compass:59995,compress:59996,"console-sql":59997,contacts:59998,container:59999,control:6e4,copy:60001,"copyright-circle":60002,copyright:60003,"credit-card":60004,crown:60005,"customer-service":60006,dash:60007,dashboard:60008,database:60009,"delete-column":60010,"delete-row":60011,delete:60012,"delivered-procedure":60013,"deployment-unit":60014,desktop:60015,diff:60016,dingding:60017,dingtalk:60018,disconnect:60019,dislike:60020,"dollar-circle":60021,dollar:60022,"dot-chart":60023,"double-left":60024,"double-right":60025,"down-circle":60026,"down-square":60027,down:60028,download:60029,drag:60030,"dribbble-square":60031,dribbble:60032,dropbox:60033,edit:60034,ellipsis:60035,enter:60036,environment:60037,"euro-circle":60038,euro:60039,exception:60040,"exclamation-circle":60041,exclamation:60042,"expand-alt":60043,expand:60044,experiment:60045,export:60046,"eye-invisible":60047,eye:60048,facebook:60049,fall:60050,"fast-backward":60051,"fast-forward":60052,"field-binary":60053,"field-number":60054,"field-string":60055,"field-time":60056,"file-add":60057,"file-done":60058,"file-excel":60059,"file-exclamation":60060,"file-gif":60061,"file-image":60062,"file-jpg":60063,"file-markdown":60064,"file-pdf":60065,"file-ppt":60066,"file-protect":60067,"file-search":60068,"file-sync":60069,"file-text":60070,"file-unknown":60071,"file-word":60072,"file-zip":60073,file:60074,filter:60075,fire:60076,flag:60077,"folder-add":60078,"folder-open":60079,"folder-view":60080,folder:60081,"font-colors":60082,"font-size":60083,fork:60084,form:60085,"format-painter":60086,forward:60087,frown:60088,"fullscreen-exit":60089,fullscreen:60090,function:60091,"fund-projection-screen":60092,"fund-view":60093,fund:60094,"funnel-plot":60095,gateway:60096,gif:60097,gift:60098,github:60099,gitlab:60100,global:60101,gold:60102,"google-plus":60103,google:60104,group:60105,hdd:60106,heart:60107,"heat-map":60108,highlight:60109,history:60110,holder:60111,home:60112,hourglass:60113,html5:60114,idcard:60115,ie:60116,import:60117,inbox:60118,"info-circle":60119,info:60120,"insert-row-above":60121,"insert-row-below":60122,"insert-row-left":60123,"insert-row-right":60124,instagram:60125,insurance:60126,interaction:60127,"issues-close":60128,italic:60129,key:60130,laptop:60131,layout:60132,"left-circle":60133,"left-square":60134,left:60135,like:60136,"line-chart":60137,"line-height":60138,line:60139,link:60140,linkedin:60141,"loading-3-quarters":60142,loading:60143,lock:60144,login:60145,logout:60146,"mac-command":60147,mail:60148,man:60149,"medicine-box":60150,"medium-workmark":60151,medium:60152,meh:60153,"menu-fold":60154,"menu-unfold":60155,menu:60156,"merge-cells":60157,message:60158,"minus-circle":60159,"minus-square":60160,minus:60161,mobile:60162,"money-collect":60163,monitor:60164,more:60165,"node-collapse":60166,"node-expand":60167,"node-index":60168,notification:60169,number:60170,"one-to-one":60171,"ordered-list":60172,"paper-clip":60173,partition:60174,"pause-circle":60175,pause:60176,"pay-circle":60177,percentage:60178,phone:60179,"pic-center":60180,"pic-left":60181,"pic-right":60182,picture:60183,"pie-chart":60184,"play-circle":60185,"play-square":60186,"plus-circle":60187,"plus-square":60188,plus:60189,"pound-circle":60190,pound:60191,poweroff:60192,printer:60193,profile:60194,project:60195,"property-safety":60196,"pull-request":60197,pushpin:60198,qq:60199,qrcode:60200,"question-circle":60201,question:60202,"radar-chart":60203,"radius-bottomleft":60204,"radius-bottomright":60205,"radius-setting":60206,"radius-upleft":60207,"radius-upright":60208,read:60209,reconciliation:60210,"red-envelope":60211,reddit:60212,redo:60213,reload:60214,rest:60215,retweet:60216,"right-circle":60217,"right-square":60218,right:60219,rise:60220,robot:60221,rocket:60222,rollback:60223,"rotate-left":60224,"rotate-right":60225,"safety-certificate":60226,safety:60227,save:60228,scan:60229,schedule:60230,scissor:60231,search:60232,"security-scan":60233,select:60234,send:60235,setting:60236,shake:60237,"share-alt":60238,shop:60239,"shopping-cart":60240,shopping:60241,shrink:60242,sisternode:60243,sketch:60244,skin:60245,skype:60246,"slack-square":60247,slack:60248,sliders:60249,"small-dash":60250,smile:60251,snippets:60252,solution:60253,"sort-ascending":60254,"sort-descending":60255,sound:60256,"split-cells":60257,star:60258,"step-backward":60259,"step-forward":60260,stock:60261,stop:60262,strikethrough:60263,subnode:60264,"swap-left":60265,"swap-right":60266,swap:60267,switcher:60268,sync:60269,table:60270,tablet:60271,tag:60272,tags:60273,"taobao-circle":60274,taobao:60275,team:60276,thunderbolt:60277,"to-top":60278,tool:60279,"trademark-circle":60280,trademark:60281,transaction:60282,translation:60283,trophy:60284,twitter:60285,underline:60286,undo:60287,ungroup:60288,unlock:60289,"unordered-list":60290,"up-circle":60291,"up-square":60292,up:60293,upload:60294,usb:60295,"user-add":60296,"user-delete":60297,"user-switch":60298,user:60299,"usergroup-add":60300,"usergroup-delete":60301,verified:60302,"vertical-align-bottom":60303,"vertical-align-middle":60304,"vertical-align-top":60305,"vertical-left":60306,"vertical-right":60307,"video-camera-add":60308,"video-camera":60309,wallet:60310,warning:60311,wechat:60312,"weibo-circle":60313,"weibo-square":60314,weibo:60315,"whats-app":60316,wifi:60317,windows:60318,woman:60319,yahoo:60320,youtube:60321,yuque:60322,zhihu:60323,"zoom-in":60324,"zoom-out":60325};n.outlineGlyphMap=C;var R=function(a){w(r,a);var o=B(r);function r(){return x(this,r),o.apply(this,arguments)}return T(r,[{key:"render",value:function(){var s=this.props,p=s.name,v=s.style,$=s.children,_=s.size,W=_===void 0?14:_,I=s.color,A=I===void 0?"black":I,E=g(s,u),F={fontFamily:"antoutline",fontWeight:"normal",fontStyle:"normal",fontSize:W,color:A},k=p?C[p]||"?":"";return typeof k=="number"&&(k=String.fromCharCode(k)),c.createElement(f.Text,e({},E,{style:[F,v]}),k,$)}}]),r}(c.PureComponent);n.default=R},17992:function(t,n,i){i.r(n),i.d(n,{default:function(){return m}});var c={year:"",month:"",day:"",hour:"",minute:"",am:"AM",pm:"PM"},f=i(97857),u=i.n(f),d={okText:"Ok",dismissText:"Cancel",extra:"please select"},b=u()(u()({},d),{},{DatePickerLocale:c}),e="${label} is not a valid ${type}",g={optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:e,method:e,array:e,object:e,number:e,date:e,boolean:e,integer:e,float:e,regexp:e,email:e,url:e,hex:e},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},y={confirmLabel:"Done",backspaceLabel:"Backspace",cancelKeyboardLabel:"CancelKeyboard"},x={done:"Loaded",loading:"Loading",refreshableTitlePull:"Pull down refresh",refreshableTitleRelease:"Release loading",refreshableTitleRefreshing:"Loading...",noData:"No data yet"},h={okText:"Ok",cancelText:"Cancel",buttonText:"Button"},T={prevText:"Prev",nextText:"Next"},w={cancelText:"Cancel"},m={locale:"en",DatePicker:b,DatePickerView:c,InputItem:y,Modal:h,Pagination:T,Picker:d,SearchBar:w,ListView:x,Form:g}},87973:function(t,n,i){i.r(n),i.d(n,{default:function(){return m}});var c={year:"",month:"",day:"",hour:"",minute:"",am:"AM",pm:"PM"},f=i(97857),u=i.n(f),d={okText:"OK",dismissText:"Cancelar",extra:"Seleccione"},b=u()(u()({},d),{},{DatePickerLocale:c}),e="${label} no es un ${type} v\xE1lido",g={optional:"(opcional)",defaultValidateMessages:{default:"Error de validaci\xF3n del campo ${label}",required:"Por favor ingresar ${label}",enum:"${label} debe ser uno de [${enum}]",whitespace:"${label} no puede ser un car\xE1cter en blanco",date:{format:"El formato de fecha de ${label} es inv\xE1lido",parse:"${label} no se puede convertir a una fecha",invalid:"${label} es una fecha inv\xE1lida"},types:{string:e,method:e,array:e,object:e,number:e,date:e,boolean:e,integer:e,float:e,regexp:e,email:e,url:e,hex:e},string:{len:"${label} debe tener ${len} caracteres",min:"${label} debe tener al menos ${min} caracteres",max:"${label} debe tener hasta ${max} caracteres",range:"${label} debe tener entre ${min}-${max} caracteres"},number:{len:"${label} debe ser igual a ${len}",min:"${label} valor m\xEDnimo es ${min}",max:"${label} valor m\xE1ximo es ${max}",range:"${label} debe estar entre ${min}-${max}"},array:{len:"Debe ser ${len} ${label}",min:"Al menos ${min} ${label}",max:"A lo mucho ${max} ${label}",range:"El monto de ${label} debe estar entre ${min}-${max}"},pattern:{mismatch:"${label} no coincide con el patr\xF3n ${pattern}"}}},y={confirmLabel:"OK",backspaceLabel:"Retroceso",cancelKeyboardLabel:"Cancelar Teclado"},x={done:"Finalizado",loading:"Cargando",refreshableTitlePull:"Desliza para actualizar",refreshableTitleRelease:"Suelta para actualizar",refreshableTitleRefreshing:"Cargando...",noData:"A\xFAn no hay datos"},h={okText:"Ok",cancelText:"Cancelar",buttonText:"Boton"},T={prevText:"Ant",nextText:"Sig"},w={cancelText:"Cancelar"},m={locale:"es",DatePicker:b,DatePickerView:c,InputItem:y,Modal:h,Pagination:T,Picker:d,SearchBar:w,ListView:x,Form:g}},87453:function(t,n,i){i.r(n),i.d(n,{default:function(){return m}});var c={year:"\u0633\u0627\u0644",month:"\u0645\u0627\u0647",day:"\u0631\u0648\u0632",hour:"\u0633\u0627\u0639\u062A",minute:"\u062F\u0642\u06CC\u0642\u0647",am:"\u0635\u0628\u062D",pm:"\u0628\u0639\u062F \u0627\u0632 \u0638\u0647\u0631"},f=i(97857),u=i.n(f),d={okText:"\u062A\u0627\u06CC\u06CC\u062F",dismissText:"\u0644\u063A\u0648",extra:"\u0644\u0637\u0641\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F"},b=u()(u()({},d),{},{DatePickerLocale:c}),e="${label} \u0627\u0632 \u0646\u0648\u0639 ${type} \u0645\u0639\u062A\u0628\u0631 \u0646\u06CC\u0633\u062A",g={optional:"(\u0627\u062E\u062A\u06CC\u0627\u0631\u06CC)",defaultValidateMessages:{default:"\u062E\u0637\u0627 \u062F\u0631 ${label}",required:"\u0641\u06CC\u0644\u062F ${label} \u0627\u062C\u0628\u0627\u0631\u06CC\u0633\u062A",enum:"${label} \u0628\u0627\u06CC\u062F \u06CC\u06A9\u06CC \u0627\u0632 [${enum}] \u0628\u0627\u0634\u062F",whitespace:"${label} \u0646\u0645\u06CC\u062A\u0648\u0627\u0646\u062F \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F",date:{format:"\u0633\u0627\u062E\u062A\u0627\u0631 \u062A\u0627\u0631\u06CC\u062E \u062F\u0631 ${label} \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A",parse:"${label} \u0642\u0627\u0628\u0644 \u062A\u0628\u062F\u06CC\u0644 \u0628\u0647 \u062A\u0627\u0631\u06CC\u062E \u0646\u06CC\u0633\u062A",invalid:"${label} \u062A\u0627\u0631\u06CC\u062E\u06CC \u0646\u0627 \u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A"},types:{string:e,method:e,array:e,object:e,number:e,date:e,boolean:e,integer:e,float:e,regexp:e,email:e,url:e,hex:e},string:{len:"${label} \u0628\u0627\u06CC\u062F ${len} \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631 \u0628\u0627\u0634\u062F",min:"${label} \u0628\u0627\u06CC\u062F \u062D\u062F\u0627\u0642\u0644 ${min} \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631 \u0628\u0627\u0634\u062F",max:"${label} \u0628\u0627\u06CC\u062F \u062D\u062F\u0627\u06A9\u062B\u0631 ${max} \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631 \u0628\u0627\u0634\u062F",range:"${label} \u0628\u0627\u06CC\u062F \u0628\u06CC\u0646 ${min}-${max} \u06A9\u0627\u0631\u0627\u06A9\u062A\u0631 \u0628\u0627\u0634\u062F"},number:{len:"${label} \u0628\u0627\u06CC\u062F \u0628\u0631\u0627\u0628\u0631 ${len}",min:"${label} \u062D\u062F\u0627\u0642\u0644 \u0645\u06CC\u062A\u0648\u0627\u0646\u062F ${min} \u0628\u0627\u0634\u062F",max:"${label} \u062D\u062F\u0627\u06A9\u062B\u0631 \u0645\u06CC\u062A\u0648\u0627\u0646\u062F ${max} \u0628\u0627\u0634\u062F",range:"${label} \u0628\u0627\u06CC\u062F \u0628\u06CC\u0646 ${min}-${max} \u0628\u0627\u0634\u062F"},array:{len:"\u062A\u0639\u062F\u0627\u062F ${label} \u0628\u0627\u06CC\u062F ${len} \u0628\u0627\u0634\u062F.",min:"\u062A\u0639\u062F\u0627\u062F ${label} \u062D\u062F\u0627\u0642\u0644 \u0628\u0627\u06CC\u062F ${min} \u0628\u0627\u0634\u062F",max:"\u062A\u0639\u062F\u0627\u062F ${label} \u062D\u062F\u0627\u06A9\u062B\u0631 \u0628\u0627\u06CC\u062F ${max} \u0628\u0627\u0634\u062F",range:"\u0645\u0642\u062F\u0627\u0631 ${label} \u0628\u0627\u06CC\u062F \u0628\u06CC\u0646 ${min}-${max} \u0628\u0627\u0634\u062F"},pattern:{mismatch:"\u0627\u0644\u06AF\u0648\u06CC ${label} \u0628\u0627 ${pattern} \u0628\u0631\u0627\u0628\u0631\u06CC \u0646\u0645\u06CC\u200C\u06A9\u0646\u062F"}}},y={confirmLabel:"\u062A\u0627\u06CC\u06CC\u062F",backspaceLabel:"\u0628\u0631\u06AF\u0634\u062A",cancelKeyboardLabel:"\u0644\u063A\u0648"},x={done:"\u0628\u0627\u0631 \u06AF\u0630\u0627\u0631\u06CC \u062A\u06A9\u0645\u06CC\u0644 \u0634\u062F",loading:"\u062F\u0631 \u062D\u0627\u0644 \u0628\u0627\u0631 \u06AF\u0630\u0627\u0631\u06CC",refreshableTitlePull:"\u0628\u0631\u0627\u06CC \u0628\u0627\u0631 \u06AF\u0630\u0627\u0631\u06CC \u0627\u0633\u06A9\u0631\u0648\u0644 \u06A9\u0646\u06CC\u062F",refreshableTitleRelease:"\u0644\u063A\u0648 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC",refreshableTitleRefreshing:"\u062F\u0631 \u062D\u0627\u0644 \u0628\u0627\u0631 \u06AF\u0630\u0627\u0631\u06CC ...",noData:"\u062F\u0627\u062F\u0647 \u0627\u06CC \u0645\u0648\u062C\u0648\u062F \u0646\u06CC\u0633\u062A"},h={okText:"\u062A\u0627\u06CC\u06CC\u062F",cancelText:"\u0644\u063A\u0648",buttonText:"\u062F\u06A9\u0645\u0647"},T={prevText:"\u0642\u0628\u0644\u06CC",nextText:"\u0628\u0639\u062F\u06CC"},w={cancelText:"\u0644\u063A\u0648"},m={locale:"fa",DatePicker:b,DatePickerView:c,InputItem:y,Modal:h,Pagination:T,Picker:d,SearchBar:w,ListView:x,Form:g}},27055:function(t,n,i){i.r(n),i.d(n,{default:function(){return m}});var c={year:"\uB144",month:"\uC6D4",day:"\uC77C",hour:"\uC2DC\uAC04",minute:"\uBD84",am:"\uC624\uC804",pm:"\uC624\uD6C4"},f=i(97857),u=i.n(f),d={okText:"\uD655\uC778",dismissText:"\uCDE8\uC18C",extra:"\uC120\uD0DD\uD574\uC8FC\uC138\uC694"},b=u()(u()({},d),{},{DatePickerLocale:c}),e="${label} \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 ${type}",g={optional:"(\uC120\uD0DD\uC0AC\uD56D)",defaultValidateMessages:{default:"\uD544\uB4DC \uC720\uD6A8\uC131 \uAC80\uC0AC \uC624\uB958 ${label}",required:"${label} \uC785\uB825\uD574 \uC8FC\uC138\uC694",enum:"${label} [${enum}] \uC911\uC5D0 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4",whitespace:"${label} \uBE44\uC6CC\uB458 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",date:{format:"${label} \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uB0A0\uC9DC \uD615\uC2DD\uC785\uB2C8\uB2E4",parse:"${label} \uB0A0\uC9DC \uD615\uC2DD\uC73C\uB85C \uBCC0\uD658\uB420 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4",invalid:"${label} \uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 \uB0A0\uC9DC\uC785\uB2C8\uB2E4"},types:{string:e,method:e,array:e,object:e,number:e,date:e,boolean:e,integer:e,float:e,regexp:e,email:e,url:e,hex:e},string:{len:"${label} ${len}\uAE00\uC790\uC5EC\uC57C \uD569\uB2C8\uB2E4",min:"${label} \uC801\uC5B4\uB3C4 ${min}\uAE00\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4",max:"${label} ${max}\uAE00\uC790 \uC774\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4",range:"${label} ${min}-${max}\uAE00\uC790 \uC0AC\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"},number:{len:"${label} \uAC12\uC740 ${len}\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4",min:"${label} \uCD5C\uC19F\uAC12\uC740 ${min}\uC785\uB2C8\uB2E4",max:"${label} \uCD5C\uB313\uAC12\uC740 ${max}\uC785\uB2C8\uB2E4",range:"${label} \uAC12\uC740 ${min}-${max} \uC0AC\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"},array:{len:"${len}\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4 ${label} ",min:"\uCD5C\uC18C ${min}\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4 ${label}",max:"\uCD5C\uB300 ${max}\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4 ${label}",range:"${label} ${min}-${max} \uC0AC\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4"},pattern:{mismatch:"${label} ${pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4"}}},y={confirmLabel:"\uD655\uC778",backspaceLabel:"\uC9C0\uC6B0\uAE30",cancelKeyboardLabel:"\uD0A4\uBCF4\uB4DC \uC228\uAE30\uAE30"},x={done:"\uC644\uB8CC",loading:"\uB85C\uB529\uC911",refreshableTitlePull:"\uB2F9\uACA8\uC11C \uC0C8\uB85C\uACE0\uCE68",refreshableTitleRelease:"\uB193\uC544\uC11C \uC0C8\uB85C\uACE0\uCE68",refreshableTitleRefreshing:"\uB85C\uB529\uC911...",noData:"\uB370\uC774\uD130 \uC5C6\uC74C"},h={okText:"\uD655\uC778",cancelText:"\uCDE8\uC18C",buttonText:"\uBC84\uD2BC"},T={prevText:"\uC774\uC804",nextText:"\uB2E4\uC74C"},w={cancelText:"\uCDE8\uC18C"},m={locale:"ko_KR",DatePicker:b,DatePickerView:c,InputItem:y,Modal:h,Pagination:T,Picker:d,SearchBar:w,ListView:x,Form:g}},74223:function(t,n,i){i.r(n),i.d(n,{default:function(){return m}});var c={year:"Ano",month:"M\xEAs",day:"Dia",hour:"Hora",minute:"Minuto",am:"AM",pm:"PM"},f=i(97857),u=i.n(f),d={okText:"Ok",dismissText:"Cancelar",extra:"Selecione"},b=u()(u()({},d),{},{DatePickerLocale:c}),e="${label} n\xE3o \xE9 um ${type} v\xE1lido",g={optional:"(opcional)",defaultValidateMessages:{default:"Erro ${label} na valida\xE7\xE3o de campo",required:"Por favor, insira ${label}",enum:"${label} deve ser um dos seguinte: [${enum}]",whitespace:"${label} n\xE3o pode ser um car\xE1cter vazio",date:{format:" O formato de data ${label} \xE9 inv\xE1lido",parse:"${label} n\xE3o pode ser convertido para uma data",invalid:"${label} \xE9 uma data inv\xE1lida"},types:{string:e,method:e,array:e,object:e,number:e,date:e,boolean:e,integer:e,float:e,regexp:e,email:e,url:e,hex:e},string:{len:"${label} deve possuir ${len} caracteres",min:"${label} deve possuir ao menos ${min} caracteres",max:"${label} deve possuir no m\xE1ximo ${max} caracteres",range:"${label} deve possuir entre ${min} e ${max} caracteres"},number:{len:"${label} deve ser igual \xE0 ${len}",min:"O valor m\xEDnimo de ${label} \xE9 ${min}",max:"O valor m\xE1ximo de ${label} \xE9 ${max}",range:"${label} deve estar entre ${min} e ${max}"},array:{len:"Deve ser ${len} ${label}",min:"No m\xEDnimo ${min} ${label}",max:"No m\xE1ximo ${max} ${label}",range:"A quantidade de ${label} deve estar entre ${min} e ${max}"},pattern:{mismatch:"${label} n\xE3o se encaixa no padr\xE3o ${pattern}"}}},y={confirmLabel:"Ok",backspaceLabel:"Voltar",cancelKeyboardLabel:"Fechar Teclado"},x={done:"Carregado",loading:"Carregando",refreshableTitlePull:"Arraste para baixo para atualizar",refreshableTitleRelease:"Iniciado carregamento",refreshableTitleRefreshing:"Carregando...",noData:"Sem dados"},h={okText:"Ok",cancelText:"Cancelar",buttonText:"Bot\xE3o"},T={prevText:"Ant.",nextText:"Pr\xF3x."},w={cancelText:"Cancelar"},m={locale:"pt_BR",DatePicker:b,DatePickerView:c,InputItem:y,Modal:h,Pagination:T,Picker:d,SearchBar:w,ListView:x,Form:g}},17481:function(t,n,i){i.r(n),i.d(n,{default:function(){return m}});var c={year:"",month:"",day:"",hour:"",minute:"",am:"AM",pm:"PM"},f=i(97857),u=i.n(f),d={okText:"\u041E\u043A",dismissText:"\u041E\u0442\u043C\u0435\u043D\u0430",extra:""},b=u()(u()({},d),{},{DatePickerLocale:c}),e="${label} \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0442\u0438\u043F\u043E\u043C ${type}",g={optional:"(\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",defaultValidateMessages:{default:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u043F\u043E\u043B\u044F ${label}",required:"\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 ${label}",enum:"${label} \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043E\u0434\u043D\u0438\u043C \u0438\u0437 [${enum}]",whitespace:"${label} \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C",date:{format:"${label} \u043D\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0434\u0430\u0442\u044B",parse:"${label} \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u043E \u0432 \u0434\u0430\u0442\u0443",invalid:"${label} \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0439 \u0434\u0430\u0442\u043E\u0439"},types:{string:e,method:e,array:e,object:e,number:e,date:e,boolean:e,integer:e,float:e,regexp:e,email:e,url:e,hex:e},string:{len:"${label} \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C ${len} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",min:"${label} \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u0430 ${min} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",max:"${label} \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u0430 ${max} \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",range:"\u0414\u043B\u0438\u043D\u0430 ${label} \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043C\u0435\u0436\u0434\u0443 ${min}-${max} \u0441\u0438\u043C\u0432\u043E\u043B\u0430\u043C\u0438"},number:{len:"${label} \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0440\u0430\u0432\u043D\u0430 ${len}",min:"${label} \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u0430 ${min}",max:"${label} \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u0430 ${max}",range:"${label} \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043C\u0435\u0436\u0434\u0443 ${min}-${max}"},array:{len:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 ${label} \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0440\u0430\u0432\u043D\u043E ${len}",min:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 ${label} \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u043E ${min}",max:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 ${label} \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u043E ${max}",range:"\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 ${label} \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043C\u0435\u0436\u0434\u0443 ${min} \u0438 ${max}"},pattern:{mismatch:"${label} \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${pattern}"}}},y={confirmLabel:"\u041E\u043A",backspaceLabel:"\u0432\u043E\u0437\u0432\u0440\u0430\u0442 \u043D\u0430 \u043E\u0434\u043D\u0443 \u043F\u043E\u0437\u0438\u0446\u0438\u044E",cancelKeyboardLabel:"\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0443"},x={done:"Loaded",loading:"Loading",refreshableTitlePull:"Pull down refresh",refreshableTitleRelease:"Release loading",refreshableTitleRefreshing:"Loading...",noData:"No data yet"},h={okText:"\u041E\u043A",cancelText:"\u041E\u0442\u043C\u0435\u043D\u0430",buttonText:"\u041A\u043D\u043E\u043F\u043A\u0430"},T={prevText:"\u041D\u0430\u0437\u0430\u0434",nextText:"\u0412\u043F\u0435\u0440\u0451\u0434"},w={cancelText:"\u041E\u0442\u043C\u0435\u043D\u0430"},m={locale:"ru",DatePicker:b,DatePickerView:c,InputItem:y,Modal:h,Pagination:T,Picker:d,SearchBar:w,ListView:x,Form:g}},40232:function(t,n,i){i.r(n),i.d(n,{default:function(){return m}});var c={year:"",month:"",day:"",hour:"",minute:"",am:"AM",pm:"PM"},f=i(97857),u=i.n(f),d={okText:"Ok",dismissText:"Avbryt",extra:"v\xE4nligen v\xE4lj"},b=u()(u()({},d),{},{DatePickerLocale:c}),e="${label} \xE4r inte en giltig ${type}",g={optional:"(valfritt)",defaultValidateMessages:{default:"F\xE4ltvalideringsfel f\xF6r ${label}",required:"V\xE4nligen fyll i ${label}",enum:"${label} m\xE5ste vara en av [${enum}]",whitespace:"${label} kan inte vara ett tomt tecken",date:{format:"${label} datumformatet \xE4r ogiltigt",parse:"${label} kan inte konverteras till ett datum",invalid:"${label} \xE4r ett ogiltigt datum"},types:{string:e,method:e,array:e,object:e,number:e,date:e,boolean:e,integer:e,float:e,regexp:e,email:e,url:e,hex:e},string:{len:"${label} m\xE5ste vara ${len} tecken",min:"${label} m\xE5ste vara minst ${min} tecken",max:"${label} m\xE5ste vara h\xF6gst ${max} tecken",range:"${label} m\xE5ste vara mellan ${min}-${max} tecken"},number:{len:"${label} m\xE5ste vara lika med ${len}",min:"${label} m\xE5ste vara minst ${min}",max:"${label} m\xE5ste vara h\xF6gst ${max}",range:"${label} m\xE5ste vara mellan ${min}-${max}"},array:{len:"M\xE5ste vara ${len} ${label}",min:"Minst ${min} ${label}",max:"H\xF6gst ${max} ${label}",range:"Antal ${label} m\xE5ste vara mellan ${min}-${max}"},pattern:{mismatch:"${label} st\xE4mmer inte \xF6verens med m\xF6nstret ${pattern}"}}},y={confirmLabel:"Ok",backspaceLabel:"Backspace",cancelKeyboardLabel:"CancelKeyboard"},x={done:"Loaded",loading:"Loading",refreshableTitlePull:"Pull down refresh",refreshableTitleRelease:"Release loading",refreshableTitleRefreshing:"Loading...",noData:"No data yet"},h={okText:"Ok",cancelText:"Avbryt",buttonText:"Knapp"},T={prevText:"F\xF6reg",nextText:"N\xE4sta"},w={cancelText:"Avbryt"},m={locale:"sv",DatePicker:b,DatePickerView:c,InputItem:y,Modal:h,Pagination:T,Picker:d,SearchBar:w,ListView:x,Form:g}},52392:function(t,n){n.Z=`export default (valid: boolean, component: string, message: string): void => {
  if (__DEV__ && !valid) {
    console.warn(\`Warning: [antd_mobile_rn: \${component}] \${message}\`)
  }
}
`},39804:function(t,n){n.Z=`import { Accordion, List } from '@ant-design/react-native'
import React from 'react'
import { View } from 'react-native'

export default class AccordionExmple extends React.Component<any, any> {
  state = {
    activeSections: [2, 0],
  }
  onChange = (activeSections: number[]) => {
    this.setState({ activeSections })
  }
  render() {
    return (
      <View style={{ marginTop: 80, marginBottom: 10 }}>
        <Accordion
          onChange={this.onChange}
          activeSections={this.state.activeSections}>
          <Accordion.Panel header="Title 1">
            <List>
              <List.Item>Content 1</List.Item>
              <List.Item>Content 2</List.Item>
              <List.Item>Content 3</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Title 2">
            this is panel content2 or other
          </Accordion.Panel>
          <Accordion.Panel header="Title 3">
            Text text text text text text text text text text text text text
            text text
          </Accordion.Panel>
        </Accordion>
      </View>
    )
  }
}
`},41652:function(t,n){n.Z=`import { ActionSheet, Button, Provider } from '@ant-design/react-native'
import React from 'react'
import { Platform, Text, View } from 'react-native'

export default class Test extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      clicked: 'none',
      text: '',
    }
  }
  render() {
    return (
      <Provider>
        <View style={{ marginTop: 30 }}>
          <View style={[{ padding: 8 }]}>
            <Button onPress={this.showActionSheet}>showActionSheet</Button>
          </View>
          <Text style={[{ padding: 8 }]}>
            clicked button: {this.state.clicked}
          </Text>
          <View style={[{ padding: 8 }]}>
            <Button onPress={this.showShareActionSheet}>
              showShareActionSheet
            </Button>
          </View>
          <Text style={[{ padding: 8 }]}>{this.state.text}</Text>
        </View>
      </Provider>
    )
  }
  showActionSheet = () => {
    const BUTTONS = [
      'Operation1',
      'Operation2',
      'Operation3',
      'Delete',
      'Cancel',
    ]
    ActionSheet.showActionSheetWithOptions(
      {
        title: 'Title',
        message: 'Description',
        options: BUTTONS,
        cancelButtonIndex: 4,
        destructiveButtonIndex: 3,
      },
      (buttonIndex: any) => {
        this.setState({ clicked: BUTTONS[buttonIndex] })
      },
    )
  }
  showShareActionSheet = () => {
    const opts: any = {
      message: 'Message to go with the shared url',
      title: 'Share Actionsheet',
    }

    if (Platform.OS === 'ios') {
      opts.url = 'https://www.alipay.com/'
      opts.tintColor = '#ff0000'
      opts.excludedActivityTypes = ['com.apple.UIKit.activity.PostToTwitter']
    }

    ActionSheet.showShareActionSheetWithOptions(
      opts,
      (error: any) => alert(error),
      (success: any, method: any) => {
        let text
        if (success) {
          text = \`Shared with \${method}\`
        } else {
          text = 'Did not share'
        }
        this.setState({ text })
      },
    )
  }
}

export const title = 'ActionSheet'
export const description = 'ActionSheet example'
`},97540:function(t,n){n.Z=`import { ActivityIndicator, Button, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class ActivityIndicatorExample extends React.Component<
  any,
  any
> {
  closeTimer: any
  constructor(props: any) {
    super(props)
    this.state = {
      animating: false,
    }
    this.loadingToast = this.loadingToast.bind(this)
  }

  componentWillUnmount() {
    clearTimeout(this.closeTimer)
  }

  loadingToast() {
    this.setState({ animating: !this.state.animating })
    this.closeTimer = setTimeout(() => {
      this.setState({ animating: !this.state.animating })
    }, 2000)
  }

  render() {
    return (
      <View style={[styles.demo]}>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Icon without text</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator />
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Icon with text</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator text="Loading..." />
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Dark Background</Text>
            </Flex.Item>
            <Flex.Item>
              <View style={[styles.darkBg]}>
                <ActivityIndicator color="#fff" />
              </View>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Large Size</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator size="large" />
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size="xl" style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Button onPress={this.loadingToast}>Click to show Toast</Button>
        </WingBlank>
        <ActivityIndicator
          animating={this.state.animating}
          toast
          size="large"
          text="Loading..."
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  demo: {
    marginTop: 20,
  },
  darkBg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 89,
    height: 89,
    backgroundColor: '#2B2F42',
  },
  gray: {
    backgroundColor: '#CCC',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
})
`},97277:function(t,n){n.Z=`import { Badge, WhiteSpace } from '@ant-design/react-native'
import React from 'react'
import { ScrollView, View } from 'react-native'

export default class BasicTagExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{ padding: 20 }}>
          <Badge text={9}>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={109} overflowCount={100}>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={109}>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text="new">
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={109} dot>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>

          <WhiteSpace size="lg" />

          <Badge text={33} corner>
            <View
              style={{
                width: 52,
                height: 52,
                backgroundColor: 'rgba(255, 140, 101, 0.15)',
              }}
            />
          </Badge>
        </View>
      </ScrollView>
    )
  }
}
`},92359:function(t,n){n.Z=`import { Button, Icon, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'

export default () => (
  <WingBlank>
    <WhiteSpace />
    <Button>default</Button>
    <WhiteSpace />
    <Button disabled>default disabled</Button>
    <WhiteSpace />

    <Button type="primary">primary</Button>
    <WhiteSpace />
    <Button type="primary" disabled>
      primary disabled
    </Button>
    <WhiteSpace />

    <Button type="warning">warning</Button>
    <WhiteSpace />
    <Button type="warning" disabled>
      warning disabled
    </Button>
    <WhiteSpace />

    <Button loading>loading button</Button>

    <Button activeStyle={false}>No click feedback</Button>
    <WhiteSpace />
    <Button underlayColor={'blue'}>Custom Underlay</Button>
    <Button activeStyle={{ backgroundColor: 'red' }}>
      custom feedback style
    </Button>
    <WhiteSpace />

    <Button
      styles={{
        rawText: { color: 'darkgray' },
      }}
      style={{
        backgroundColor: 'red',
      }}>
      custon background and text color
    </Button>

    <WingBlank
      style={{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Button type="ghost">ghost</Button>
      <Button type="ghost" disabled>
        ghost disabled
      </Button>
      <Button type="ghost" size="small">
        ghost
      </Button>
    </WingBlank>
    <WhiteSpace />

    <Button type="primary">
      <Icon name="login" />
    </Button>
  </WingBlank>
)
`},5628:function(t,n){n.Z=`import { Card, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { Text, View } from 'react-native'

export default class BasicCardExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ paddingTop: 30 }}>
        <WingBlank size="lg">
          <Card>
            <Card.Header
              title="This is title"
              thumbStyle={{ width: 30, height: 30 }}
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra="this is extra"
            />
            <Card.Body>
              <View style={{ height: 42 }}>
                <Text style={{ marginLeft: 16 }}>Card Content</Text>
              </View>
            </Card.Body>
            <Card.Footer
              content="footer content"
              extra="footer extra content"
            />
          </Card>
        </WingBlank>
        <WhiteSpace size="lg" />
        <Card full>
          <Card.Header
            title="Full Column"
            thumbStyle={{ width: 30, height: 30 }}
            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
            extra="this is extra"
          />
          <Card.Body>
            <View style={{ height: 42 }}>
              <Text style={{ marginLeft: 16 }}>Card Content</Text>
            </View>
          </Card.Body>
          <Card.Footer content="footer content" extra="footer extra content" />
        </Card>
      </View>
    )
  }
}
`},43187:function(t,n){n.Z=`import { ReactNode } from 'react'
import { ScrollViewProps, StyleProp, ViewStyle } from 'react-native'
import { CarouselStyle } from './style/index'

export interface CarouselProps extends ScrollViewProps {
  accessibilityLabel?: string
  autoplay?: boolean
  autoplayInterval?: number
  afterChange?: (index: number) => void
  children?: ReactNode
  dots?: boolean
  dotActiveStyle?: StyleProp<ViewStyle>
  dotStyle?: StyleProp<ViewStyle>
  infinite?: boolean
  lazy?: boolean | ((index: number) => boolean)
  renderLazyPlaceholder?: (index: number) => ReactNode
  pageStyle?: StyleProp<ViewStyle>
  pagination?: (props: PaginationProps) => ReactNode
  selectedIndex?: number
  style?: StyleProp<ViewStyle>
  styles?: Partial<CarouselStyle>
  vertical?: boolean
}

export interface PaginationProps {
  current: number
  count: number
  dotStyle?: StyleProp<ViewStyle>
  dotActiveStyle?: StyleProp<ViewStyle>
  styles: Partial<CarouselStyle>
  vertical?: boolean
}

export interface CarouselForwardedRef {
  scrollToStart: () => void
  scrollToEnd: () => void
  scrollNextPage: () => void
  goTo: (index: number, animated?: boolean) => void
}
`},91073:function(t,n){n.Z=`import { Button, Carousel } from '@ant-design/react-native'
import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native'

export default class BasicCarouselExample extends React.Component<any, any> {
  carousel: null | Carousel
  constructor(props: any) {
    super(props)
    this.state = {
      selectedIndex: 2,
      autoplay: true,
    }
  }
  onHorizontalSelectedIndexChange = (index: number) => {
    /* tslint:disable: no-console */
    console.log('horizontal change to', index)
    this.setState({ selectedIndex: index })
  }
  onVerticalSelectedIndexChange(index: number) {
    /* tslint:disable: no-console */
    console.log('vertical change to', index)
  }
  render() {
    return (
      <ScrollView style={{ paddingTop: 30 }}>
        <View style={{ paddingHorizontal: 15 }}>
          <Text>horizontal</Text>
          <Carousel
            style={styles.wrapper}
            selectedIndex={this.state.selectedIndex}
            autoplay
            infinite
            afterChange={this.onHorizontalSelectedIndexChange}
            ref={(ref) => (this.carousel = ref)}>
            <View
              style={[styles.containerHorizontal, { backgroundColor: 'red' }]}>
              <Text>Carousel 1</Text>
            </View>
            <View
              style={[styles.containerHorizontal, { backgroundColor: 'blue' }]}>
              <Text>Carousel 2</Text>
            </View>
            <View
              style={[
                styles.containerHorizontal,
                { backgroundColor: 'yellow' },
              ]}>
              <Text>Carousel 3</Text>
            </View>
            <View
              style={[styles.containerHorizontal, { backgroundColor: 'aqua' }]}>
              <Text>Carousel 4</Text>
            </View>
            <View
              style={[
                styles.containerHorizontal,
                { backgroundColor: 'fuchsia' },
              ]}>
              <Text>Carousel 5</Text>
            </View>
          </Carousel>
          <Button onPress={() => this.carousel && this.carousel.goTo(0)}>
            Go to 0
          </Button>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <Text>vertical</Text>
          <Carousel
            style={styles.wrapper}
            selectedIndex={1}
            autoplay={this.state.autoplay}
            infinite
            afterChange={this.onVerticalSelectedIndexChange}
            vertical>
            <View
              style={[styles.containerVertical, { backgroundColor: 'red' }]}>
              <Text>Carousel 1</Text>
            </View>
            <View
              style={[styles.containerVertical, { backgroundColor: 'blue' }]}>
              <Text>Carousel 2</Text>
            </View>
            <View
              style={[styles.containerVertical, { backgroundColor: 'yellow' }]}>
              <Text>Carousel 3</Text>
            </View>
            <View
              style={[styles.containerVertical, { backgroundColor: 'aqua' }]}>
              <Text>Carousel 4</Text>
            </View>
            <View
              style={[
                styles.containerVertical,
                { backgroundColor: 'fuchsia' },
              ]}>
              <Text>Carousel 5</Text>
            </View>
          </Carousel>
          <Button
            onPress={() => this.setState({ autoplay: !this.state.autoplay })}>
            {\`Toggle autoplay \${this.state.autoplay ? 'true' : 'false'}\`}
          </Button>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create<{
  wrapper: ViewStyle
  containerHorizontal: ViewStyle
  containerVertical: ViewStyle
  text: TextStyle
}>({
  wrapper: {
    backgroundColor: '#fff',
    width: '100%',
    height: 150,
  },
  containerHorizontal: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerVertical: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
})
`},56123:function(t,n){n.Z=`import React from 'react'
import {
  GestureResponderEvent,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  View,
} from 'react-native'
import devWarning from '../_util/devWarning'
import { WithTheme } from '../style'
import { CarouselProps, PaginationProps } from './PropsType'
import CarouselStyles from './style/index'
// fix: Compatible History
export { CarouselProps, PaginationProps } from './PropsType'

interface NativeScrollPoint {
  x: number
  y: number
}

export interface CarouselState {
  width: number
  height: number
  selectedIndex: number
  afterSelectedIndex: number
  offset: NativeScrollPoint
}

const defaultPagination = (props: PaginationProps) => {
  const { styles, current, vertical, count, dotStyle, dotActiveStyle } = props
  const positionStyle = vertical ? 'paginationY' : 'paginationX'
  const flexDirection = vertical ? 'column' : 'row'
  const arr: any = []
  for (let i = 0; i < count; i++) {
    arr.push(
      <View
        key={\`dot-\${i}\`}
        style={[
          styles.pointStyle,
          styles.spaceStyle,
          dotStyle,
          i === current && styles.pointActiveStyle,
          i === current && dotActiveStyle,
        ]}
      />,
    )
  }
  return (
    <View style={[styles.pagination, styles[positionStyle]]}>
      <View style={{ flexDirection }}>{arr}</View>
    </View>
  )
}
class Carousel extends React.PureComponent<CarouselProps, CarouselState> {
  static defaultProps = {
    accessibilityLabel: 'Carousel',
    pageStyle: {},

    infinite: false,
    dots: true,
    autoplay: false,
    autoplayInterval: 3000,
    selectedIndex: 0,
    vertical: false,
    pagination: defaultPagination,
    dotStyle: {},
    dotActiveStyle: {},
  }

  private count: number
  private scrollview = React.createRef<ScrollView>()

  constructor(props: CarouselProps) {
    super(props)
    const { children, selectedIndex } = this.props
    this.count = children ? React.Children.count(children) : 0
    const index =
      (this.count > 1 && Math.min(selectedIndex as number, this.count - 1)) || 0
    this.state = {
      width: 0,
      height: 0,
      selectedIndex: index,
      afterSelectedIndex: -1,
      offset: { x: 0, y: 0 },
    }
  }

  componentDidMount() {
    this.autoplay()
  }

  UNSAFE_componentWillReceiveProps(nextProps: CarouselProps) {
    const { autoplay, children, infinite, vertical } = nextProps
    const { width, height } = this.state
    if (autoplay !== this.props.autoplay) {
      if (autoplay) {
        this.autoplay(autoplay)
      } else {
        this.clearTimeout()
      }
    }

    if (
      children &&
      React.Children.count(children) === this.count &&
      infinite === this.props.infinite
    ) {
      return
    }
    this.count = React.Children.count(children) || 1
    const offset = vertical
      ? { x: 0, y: height * (infinite ? 1 : 0) }
      : { x: width * (infinite ? 1 : 0), y: 0 }
    this.setState(
      {
        afterSelectedIndex: -1,
        selectedIndex: 0,
        offset: offset,
      },
      () => {
        this.scrollview?.current?.scrollTo(offset)
        this.autoplay()
      },
    )
  }

  private autoplayTimer: ReturnType<typeof setTimeout> | undefined
  private isScrolling: boolean | undefined

  componentWillUnmount() {
    this.clearTimeout()
  }

  /**
   * Plathform: iOS & android
   * \u624B\u52BF\u4ECB\u5165\u65F6: onScrollBeginDrag -> onScrollEndDrag
   * **/
  private onScrollBeginDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    this.isScrolling = true

    if (this.props.onScrollBeginDrag) {
      this.props.onScrollBeginDrag(e)
    }
  }
  private onScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    this.isScrolling = false
    // fix: drag page in Perfect fit
    this.onScrollAnimationEnd(
      JSON.parse(JSON.stringify(e.nativeEvent.contentOffset)),
    )

    if (this.props.onScrollEndDrag) {
      this.props.onScrollEndDrag(e)
    }
  }

  /**
   * Plathform: web
   * \u624B\u52BF\u4ECB\u5165\u65F6: onTouchStart -> onScroll\u2026onScroll(\u53EA\u8981\u52A8\u4E86\u5C31\u4F1A\u89E6\u53D1) -> onTouchEnd -> onScroll(\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1)
   * autoplay: [onScroll...onScroll] -> onScroll(\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1)
   * **/
  private onTouchStartForWeb = (e: GestureResponderEvent) => {
    this.isScrolling = true
    if (this.props.onTouchStart) {
      this.props.onTouchStart(e)
    }
  }
  private onTouchEndForWeb = (e: GestureResponderEvent) => {
    this.isScrolling = false
    if (this.props.onTouchEnd) {
      this.props.onTouchEnd(e)
    }
  }

  private onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    // Simulate infinite pages
    if (this.props.infinite) {
      const contentOffset = JSON.parse(
        JSON.stringify(e.nativeEvent.contentOffset),
      )
      const { width, height } = this.state

      const offset = this.props.vertical ? 'y' : 'x'
      const maxOffset =
        (this.props.vertical ? height : width) * (this.count + 1)

      if (contentOffset[offset] <= 0) {
        contentOffset[offset] = 0
        this.updateIndex(contentOffset)
      } else if (contentOffset[offset] >= maxOffset) {
        contentOffset[offset] = maxOffset
        this.updateIndex(contentOffset)
      }
    }

    this.onScrollAnimationEnd(
      JSON.parse(JSON.stringify(e.nativeEvent.contentOffset)),
    )

    if (this.props.onScroll) {
      this.props.onScroll(e)
    }
  }
  /**
   * \u6240\u6709scroll\u4E8B\u4EF6\u7ED3\u675F\u65F6\u89E6\u53D1
   * **/
  private onScrollAnimationEnd = (currentOffset: NativeScrollPoint) => {
    const { x, y } = currentOffset
    const { width, height } = this.state
    // \u{1F31F} fix: \`onMomentumScrollEnd\` & \`onScrollAnimationEnd\` not support for web & android \u{1F31F}
    const isScrollAnimationEnd =
      !this.isScrolling &&
      (this.props.vertical ? y / height : x / width) % 1 === 0

    if (isScrollAnimationEnd) {
      this.updateIndex(currentOffset)
      this.autoplay()
      if (this.props.onScrollAnimationEnd) {
        this.props.onScrollAnimationEnd()
      }
    }
  }

  private clearTimeout = () => {
    if (this.autoplayTimer) {
      clearTimeout(this.autoplayTimer)
      this.autoplayTimer = undefined
    }
  }

  private onLayout = (e: LayoutChangeEvent) => {
    const { selectedIndex, infinite, vertical } = this.props
    const scrollIndex =
      (this.count > 1 && Math.min(selectedIndex as number, this.count - 1)) || 0
    const { width, height } = e.nativeEvent.layout
    const offset = vertical
      ? {
          x: 0,
          y: height * (scrollIndex + (infinite && this.count > 1 ? 1 : 0)),
        }
      : {
          x: width * (scrollIndex + (infinite && this.count > 1 ? 1 : 0)),
          y: 0,
        }
    this.setState(
      {
        width,
        height,
        offset,
      },
      () => {
        // web & android
        this.scrollview?.current?.scrollTo({ ...offset, animated: false })
        this.autoplay()
      },
    )
  }

  updateIndex = (currentOffset: NativeScrollPoint) => {
    const paramOffset = currentOffset

    let { selectedIndex } = this.state
    const { offset, width, height } = this.state

    const diff = this.props.vertical
      ? paramOffset.y - offset.y
      : paramOffset.x - offset.x

    if (!diff) {
      return
    }
    selectedIndex += Math.round(diff / (this.props.vertical ? height : width))
    if (this.props.infinite) {
      if (selectedIndex <= -1) {
        selectedIndex = this.count - 1
        if (this.props.vertical) {
          paramOffset.y = height * this.count
        } else {
          paramOffset.x = width * this.count
        }
      } else if (selectedIndex >= this.count) {
        selectedIndex = 0
        if (this.props.vertical) {
          paramOffset.y = height
        } else {
          paramOffset.x = width
        }
      }

      if (this.props.vertical) {
        if (paramOffset.y === height) {
          this.scrollToStart()
        } else if (paramOffset.y === this.count * height) {
          this.scrollToEnd()
        }
      } else {
        if (paramOffset.x === width) {
          this.scrollToStart()
        } else if (paramOffset.x === this.count * width) {
          this.scrollToEnd()
        }
      }
    }

    this.setState(
      {
        selectedIndex,
        offset: paramOffset,
      },
      () => {
        if (
          this.props.afterChange &&
          this.state.selectedIndex !== this.state.afterSelectedIndex
        ) {
          this.setState({ afterSelectedIndex: selectedIndex }, () => {
            this.props.afterChange?.(selectedIndex)
          })
        }
      },
    )
  }

  scrollToStart = () => {
    this.scrollview?.current?.scrollTo({
      x: this.props.vertical ? 0 : this.props.infinite ? this.state.width : 0,
      y: this.props.vertical
        ? this.props.infinite
          ? this.state.height
          : 0
        : 0,
      animated: false,
    })
  }

  scrollToEnd = () => {
    this.scrollview?.current?.scrollTo({
      x: this.props.vertical
        ? 0
        : this.state.width *
          (this.props.infinite ? this.count : this.count - 1),
      y: this.props.vertical
        ? this.state.height *
          (this.props.infinite ? this.count : this.count - 1)
        : 0,
      animated: false,
    })
  }

  scrollNextPage = () => {
    const { selectedIndex, width, height } = this.state
    if (this.isScrolling || this.count < 2) {
      return
    }
    const diff = selectedIndex + 1 + (this.props.infinite ? 1 : 0)
    this.scrollview?.current?.scrollTo(
      this.props.vertical
        ? { x: 0, y: diff * height }
        : { x: diff * width, y: 0 },
    )
  }

  /**
   * go to index
   * @param index
   * @param animated
   */
  public goTo(index: number, animated?: boolean) {
    const { width, height } = this.state

    const count = this.props.infinite ? this.count - 1 : this.count
    if (typeof index !== 'number' || index < 0 || index > count) {
      return devWarning(
        false,
        'Carousel',
        \`function goTo(index): \${'\`index\`'} must be between 0 - \${count} numbers\`,
      )
    }

    this.scrollview?.current?.scrollTo({
      x: this.props.vertical
        ? 0
        : (index + (this.props.infinite ? 1 : 0)) * width,
      y: this.props.vertical
        ? (index + (this.props.infinite ? 1 : 0)) * height
        : 0,
      animated,
    })
  }

  lazyLoad(child: React.ReactNode, index: number) {
    const { infinite, lazy, renderLazyPlaceholder } = this.props
    const { selectedIndex } = this.state
    if (!lazy) {
      return child
    }
    if (
      lazy &&
      typeof lazy === 'boolean' &&
      selectedIndex === index - (infinite ? 1 : 0)
    ) {
      return child
    }

    if (
      lazy &&
      typeof lazy === 'function' &&
      lazy(index - (infinite ? 1 : 0))
    ) {
      return child
    }

    return renderLazyPlaceholder?.(index)
  }

  render() {
    const { children, dots, infinite, accessibilityLabel, pageStyle } =
      this.props
    const { width, height, selectedIndex } = this.state
    if (!children) {
      return null
    }
    let pages
    const pageWidth = [pageStyle, { width, height }]
    if (this.count > 1) {
      const childrenArray = React.Children.toArray(children)
      if (infinite) {
        childrenArray.unshift(childrenArray[this.count - 1])
        childrenArray.push(childrenArray[1])
      }
      pages = childrenArray.map((child, index) => (
        <View
          key={\`carousel_\${index}\`}
          accessibilityLabel={\`\${accessibilityLabel}_\${index}\`}
          style={pageWidth}>
          {this.lazyLoad(child, index)}
        </View>
      ))
    } else {
      pages = <View style={pageWidth}>{children}</View>
    }
    return (
      <View onLayout={this.onLayout} style={this.props.style}>
        {this.renderScroll(pages)}
        {dots && this.renderDots(selectedIndex)}
      </View>
    )
  }

  private autoplay = (autoplay = this.props.autoplay) => {
    const { children, autoplayInterval } = this.props
    if (!Array.isArray(children) || !autoplay) {
      return
    }
    this.clearTimeout()
    this.autoplayTimer = setTimeout(() => {
      this.scrollNextPage()
    }, autoplayInterval)
  }

  private renderScroll = (pages: React.ReactNode) => {
    return (
      <ScrollView
        automaticallyAdjustContentInsets={false}
        directionalLockEnabled={true}
        disableIntervalMomentum={false}
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={Platform.OS === 'web' ? 0 : 16}
        {...this.props}
        style={undefined}
        ref={this.scrollview as any}
        horizontal={!this.props.vertical}
        pagingEnabled={true}
        contentOffset={this.state.offset}
        onScrollBeginDrag={this.onScrollBeginDrag}
        onScrollEndDrag={this.onScrollEndDrag}
        onScroll={this.onScroll}
        onTouchStart={this.onTouchStartForWeb}
        onTouchEnd={this.onTouchEndForWeb}
        onScrollAnimationEnd={undefined}>
        {pages}
      </ScrollView>
    )
  }

  private renderDots = (index: number) => {
    const { vertical, pagination, dotStyle, dotActiveStyle } = this.props
    if (!pagination) {
      return null
    }
    return (
      <WithTheme themeStyles={CarouselStyles} styles={this.props.styles}>
        {(styles) => {
          return pagination({
            styles,
            vertical,
            current: index,
            count: this.count,
            dotStyle,
            dotActiveStyle,
          })
        }}
      </WithTheme>
    )
  }
}

export default Carousel
`},11523:function(t,n){n.Z=`import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'

export interface CarouselStyle {
  pagination: ViewStyle
  paginationX: ViewStyle
  paginationY: ViewStyle
  pointStyle: ViewStyle
  pointActiveStyle: ViewStyle
  spaceStyle: ViewStyle
  wrapperStyle: ViewStyle
}
export default (theme: Theme) =>
  StyleSheet.create<CarouselStyle>({
    pagination: {
      position: 'absolute',
      alignItems: 'center',
    },
    paginationX: {
      bottom: 10,
      left: 0,
      right: 0,
    },
    paginationY: {
      right: 10,
      top: 0,
      bottom: 0,
    },
    pointStyle: {
      width: 8,
      height: 8,
      borderRadius: 8,
      backgroundColor: theme.color_icon_base,
    },
    pointActiveStyle: {
      backgroundColor: '#888',
    },
    spaceStyle: {
      marginHorizontal: theme.h_spacing_sm / 2,
      marginVertical: theme.v_spacing_sm / 2,
    },
    wrapperStyle: {
      overflow: 'hidden',
    },
  })
`},91842:function(t,n){n.Z=`import { Button, Checkbox, Flex, List, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { ScrollView } from 'react-native'
const AgreeItem = Checkbox.AgreeItem
const CheckboxItem = Checkbox.CheckboxItem

export default class BasicCheckboxExample extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context)
    this.state = {
      checked: true,
      disabled: false,

      checkBox1: true,
      agreeItem1: true,
      checkboxItem1: true,
    }
  }

  onChange = (e: { target: { checked: boolean } }) => {
    console.log(\`checked = \${e.target.checked}\`)
  }

  toggleChecked = () => {
    this.setState({ checked: !this.state.checked })
  }

  toggleDisable = () => {
    this.setState({ disabled: !this.state.disabled })
  }
  onChange2 = (e: { target: { checked: boolean } }) => {
    console.log('checked = ', e.target.checked)
    this.setState({
      checked: e.target.checked,
    })
  }

  render() {
    const label = \`\${this.state.checked ? 'Checked' : 'Unchecked'}-\${
      this.state.disabled ? 'Disabled' : 'Enabled'
    }\`
    return (
      <ScrollView>
        <List renderHeader="\u57FA\u672C\u7528\u6CD5">
          <List.Item
            thumb={<Checkbox onChange={this.onChange}>Checkbox</Checkbox>}
          />
        </List>
        <List renderHeader="\u4E0D\u53EF\u7528">
          <List.Item thumb={<Checkbox defaultChecked={false} disabled />} />
          <List.Item thumb={<Checkbox defaultChecked disabled />} />
        </List>
        <List
          renderHeader="\u53D7\u63A7\u7684Checkbox"
          renderFooter={
            <Flex>
              <Flex.Item style={{ margin: 10 }}>
                <Button
                  type="primary"
                  size="small"
                  onPress={this.toggleChecked}>
                  {!this.state.checked ? 'Check' : 'Uncheck'}
                </Button>
              </Flex.Item>
              <Flex.Item style={{ margin: 10 }}>
                <Button
                  type="primary"
                  size="small"
                  onPress={this.toggleDisable}>
                  {!this.state.disabled ? 'Disable' : 'Enable'}
                </Button>
              </Flex.Item>
            </Flex>
          }>
          <List.Item
            thumb={
              <Checkbox
                checked={this.state.checked}
                disabled={this.state.disabled}
                onChange={this.onChange2}>
                {label}
              </Checkbox>
            }
          />
        </List>
        <List renderHeader="AgreeItem">
          <AgreeItem>
            Agree agreement agreement agreement agreement agreement agreement
            agreement
          </AgreeItem>
        </List>
        <List renderHeader="CheckboxItem">
          <CheckboxItem
            checked={this.state.checkboxItem1}
            onChange={(event) => {
              this.setState({ checkboxItem1: event.target.checked })
            }}>
            Option 1
          </CheckboxItem>
          <CheckboxItem>Option 2</CheckboxItem>
          <CheckboxItem disabled>Option 3</CheckboxItem>
          <CheckboxItem disabled checked right>
            More...
          </CheckboxItem>
        </List>
        <List
          renderHeader={
            '\u5168\u9009\\n\u5728\u5B9E\u73B0\u5168\u9009\u6548\u679C\u65F6\uFF0C\u4F60\u53EF\u80FD\u4F1A\u7528\u5230 indeterminate \u5C5E\u6027\u3002'
          }>
          <CheckboxGroupExample />
        </List>
      </ScrollView>
    )
  }
}

const plainOptions = ['Apple', 'Pear', 'Orange']
const defaultCheckedList = ['Apple', 'Orange']

const CheckboxGroupExample = () => {
  const [checkedList, setCheckedList] = React.useState(
    new Set(defaultCheckedList),
  )
  const [indeterminate, setIndeterminate] = React.useState(true)
  const [checkAll, setCheckAll] = React.useState(false)

  const onChange = (value: any, e: { target: { checked: boolean } }) => {
    if (e.target.checked) {
      checkedList.add(value)
    } else {
      checkedList.delete(value)
    }

    setCheckedList(new Set(checkedList))
    setIndeterminate(
      !!checkedList.size && checkedList.size < plainOptions.length,
    )
    setCheckAll(checkedList.size === plainOptions.length)
  }

  const onCheckAllChange = (e: { target: { checked: boolean } }) => {
    setCheckedList(e.target.checked ? new Set(plainOptions) : new Set())
    setIndeterminate(false)
    setCheckAll(e.target.checked)
  }

  return (
    <>
      <CheckboxItem
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}>
        Check all
      </CheckboxItem>
      <WingBlank>
        {plainOptions.map((a) => (
          <CheckboxItem
            key={a}
            onChange={onChange.bind(this, a)}
            checked={checkedList.has(a)}>
            {a}
          </CheckboxItem>
        ))}
      </WingBlank>
    </>
  )
}
`},52393:function(t,n){n.Z=`import { ActivityIndicator, Collapse, Icon, List, Result } from '@ant-design/react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

export default function CollapseExmple() {
  return (
    <ScrollView>
      <List renderHeader="\u624B\u98CE\u7434\u6A21\u5F0F">
        <Collapse accordion>
          <Collapse.Panel key="1" title="\u7B2C\u4E00\u9879">
            \u624B\u98CE\u7434\u6A21\u5F0F\u53EA\u80FD\u540C\u65F6\u5C55\u5F00\u4E00\u4E2A
          </Collapse.Panel>
          <Collapse.Panel key="2" title="\u7B2C\u4E8C\u9879">
            \u624B\u98CE\u7434\u6A21\u5F0F\u53EA\u80FD\u540C\u65F6\u5C55\u5F00\u4E00\u4E2A
          </Collapse.Panel>
          <Collapse.Panel key="3" title="\u7B2C\u4E09\u9879">
            \u624B\u98CE\u7434\u6A21\u5F0F\u53EA\u80FD\u540C\u65F6\u5C55\u5F00\u4E00\u4E2A
          </Collapse.Panel>
        </Collapse>
      </List>
      <List renderHeader="\u81EA\u5B9A\u4E49\u6298\u53E0\u56FE\u6807">
        <Collapse
          defaultActiveKey={['1']}
          arrow={(active) =>
            active ? <Icon name="minus" /> : <Icon name="plus" />
          }>
          <Collapse.Panel key="1" title="\u7B2C\u4E00\u9879">
            \u4F60\u53EF\u4EE5\u901A\u8FC7 Collapse \u7684 arrow \u5C5E\u6027\u6765\u63A7\u5236\u5168\u90E8\u9762\u677F\u7684\u7BAD\u5934
          </Collapse.Panel>
          <Collapse.Panel
            key="2"
            title="\u7B2C\u4E8C\u9879"
            arrow={<Icon name="down-circle" />}>
            \u4E5F\u53EF\u4EE5\u901A\u8FC7 Collapse.Panel \u7684 arrow \u5C5E\u6027\u6765\u81EA\u5B9A\u4E49\u5355\u4E2A\u9762\u677F\u7684\u7BAD\u5934
          </Collapse.Panel>
          <Collapse.Panel
            key="3"
            title="\u7B2C\u4E09\u9879"
            arrow={(active) =>
              active ? (
                <Icon name="check-circle" />
              ) : (
                <Icon name="close-circle" />
              )
            }>
            \u5982\u679C\u4F60\u7ED9 arrow \u5C5E\u6027\u4F20\u5165\u7684\u662F\u662F\u4E00\u4E2A\u6E32\u67D3\u51FD\u6570\uFF0C\u90A3\u4E48
            @ant-design/react-native \u4E0D\u4F1A\u4E3A\u4F60\u589E\u52A0\u52A8\u753B\uFF0Carrow
            \u5C5E\u6027\u7684\u6548\u679C\u5C31\u5B8C\u5168\u4EA4\u7531\u4F60\u81EA\u5DF1\u6765\u63A7\u5236\u4E86
          </Collapse.Panel>
        </Collapse>
      </List>

      <List renderHeader="\u52A8\u6001\u5185\u5BB9">
        <Collapse accordion>
          <Collapse.Panel key="1" title="\u7B2C\u4E00\u9879" destroyOnClose>
            <DynamicContent message="\u4E0D\u53EF\u89C1\u65F6\u9500\u6BC1 destroyOnClose={true}" />
          </Collapse.Panel>
          <Collapse.Panel key="2" title="\u7B2C\u4E8C\u9879" forceRender>
            <DynamicContent message="\u9884\u52A0\u8F7D forceRender={true}" />
          </Collapse.Panel>
        </Collapse>
      </List>
    </ScrollView>
  )
}

function DynamicContent(props: { message: string }) {
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      setTimeout(() => {
        setFinished(true)
      }, 1000)
    }
    loadData()
  }, [])

  return finished ? (
    <Result title="\u5904\u7406\u6210\u529F" message={props.message} />
  ) : (
    <ActivityIndicator />
  )
}
`},33483:function(t,n){n.Z=`import { DatePickerView, DatePickerFilter } from '@ant-design/react-native'
import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'

const now = new Date()

export default () => {
  const [value, setValue] = useState<Date>(now)

  return (
    <ScrollView nestedScrollEnabled>
      <Text style={{ margin: 16 }}>\u57FA\u7840\u7528\u6CD5</Text>
      <DatePickerView />

      <Text style={{ margin: 16 }}>\u53D7\u63A7\u6A21\u5F0F</Text>
      <DatePickerView
        value={value}
        onChange={(val) => {
          setValue(val)
          console.log('onChange', val)
        }}
      />

      <Text style={{ margin: 16 }}>\u81EA\u5B9A\u4E49\u6BCF\u5217\u7684\u6E32\u67D3\u5185\u5BB9</Text>
      <DatePickerView defaultValue={now} renderLabel={labelRenderer} />

      <Text style={{ margin: 16 }}>\u5468\u9009\u62E9\u5668</Text>
      <DatePickerView
        onChange={(val) => console.log('onChange', val)}
        precision="week-day"
        defaultValue={now}
        renderLabel={weekdayLabelRenderer}
      />

      <Text style={{ margin: 16 }}>\u8FC7\u6EE4\u53EF\u4F9B\u9009\u62E9\u7684\u65F6\u95F4</Text>
      <DatePickerView
        defaultValue={now}
        precision="hour"
        renderLabel={labelRenderer}
        filter={dateFilter}
      />
    </ScrollView>
  )
}

const labelRenderer = (type: string, data: number) => {
  switch (type) {
    case 'year':
      return data + '\u5E74'
    case 'month':
      return data + '\u6708'
    case 'day':
      return data + '\u65E5'
    case 'hour':
      return data + '\u65F6'
    case 'minute':
      return data + '\u5206'
    case 'second':
      return data + '\u79D2'
    default:
      return data
  }
}

const weekdayLabelRenderer = (type: string, data: number) => {
  switch (type) {
    case 'year':
      return data + '\u5E74'
    case 'week':
      return data + '\u5468'
    case 'week-day':
      return weekdayToZh(data)
    default:
      return data
  }
}

const dateFilter: DatePickerFilter = {
  day: (_val, { date }) => {
    // \u53BB\u9664\u6240\u6709\u5468\u672B
    if (date.getDay() > 5 || date.getDay() === 0) {
      return false
    }
    return true
  },
  hour: (val: number) => {
    // \u53EA\u4FDD\u7559\u6BCF\u5929\u768414\u70B9\u523018\u70B9
    if (val < 14 || val > 18) {
      return false
    }
    return true
  },
}

const weekdayToZh = (weekday: number) => {
  switch (weekday) {
    case 1:
      return '\u5468\u4E00'
    case 2:
      return '\u5468\u4E8C'
    case 3:
      return '\u5468\u4E09'
    case 4:
      return '\u5468\u56DB'
    case 5:
      return '\u5468\u4E94'
    case 6:
      return '\u5468\u516D'
    case 7:
      return '\u5468\u65E5'
    default:
      return weekday
  }
}
`},91304:function(t,n){n.Z=`import { DatePicker, List, Provider } from '@ant-design/react-native'
import React from 'react'

export default class PopupExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      value: undefined,
    }
  }

  onChange = (value: any) => {
    this.setState({ value })
  }

  render() {
    return (
      <Provider>
        <List>
          <DatePicker
            value={this.state.value}
            precision="day"
            minDate={new Date(2015, 7, 6)}
            maxDate={new Date(2026, 11, 3)}
            onChange={this.onChange}
            format="YYYY-MM-DD">
            <List.Item arrow="horizontal">Select Date</List.Item>
          </DatePicker>
        </List>
      </Provider>
    )
  }
}
`},98130:function(t,n){n.Z=`import { Button, Drawer, List, WhiteSpace } from '@ant-design/react-native'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default class DrawerExample extends React.Component<any, any> {
  drawer: any

  onOpenChange = (isOpen: any) => {
    /* tslint:disable: no-console */
    console.log('\u662F\u5426\u6253\u5F00\u4E86 Drawer', isOpen.toString())
  }

  render() {
    const itemArr = Array.apply(null, Array(20))
      .map(function (_: any, i: any) {
        return i
      })
      .map((_i: any, index: any) => {
        if (index === 0) {
          return (
            <List.Item
              key={index}
              thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
              multipleLine>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text>Categories - {index}</Text>
                <Button
                  type="primary"
                  size="small"
                  onPress={() => this.drawer.closeDrawer()}>
                  close drawer
                </Button>
              </View>
            </List.Item>
          )
        }
        return (
          <List.Item
            key={index}
            thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png">
            <Text>Categories - {index}</Text>
          </List.Item>
        )
      })

    // Todo: https://github.com/DefinitelyTyped/DefinitelyTyped
    const sidebar = (
      <ScrollView style={[styles.container as any]}>
        <List>{itemArr}</List>
      </ScrollView>
    )

    return (
      <Drawer
        sidebar={sidebar}
        position="left"
        open={false}
        drawerRef={(el: any) => (this.drawer = el)}
        onOpenChange={this.onOpenChange}
        drawerBackgroundColor="#ccc">
        <View style={{ flex: 1, marginTop: 114, padding: 8 }}>
          <Button onPress={() => this.drawer && this.drawer.openDrawer()}>
            Open drawer
          </Button>
          <WhiteSpace />
        </View>
      </Drawer>
    )
  }
}
`},11453:function(t,n){n.Z=`import { Button, Flex, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'

const Circle = (props: any) => {
  const size = props.size || 20
  const style = {
    borderRadius: size / 2,
    backgroundColor: '#527fe4',
    width: size,
    height: size,
    margin: 1,
  }
  return <View style={style} />
}

export default class FlexExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <WingBlank style={{ marginTop: 20, marginBottom: 5 }}>
          <Text style={{ marginBottom: 10 }}>\u9879\u76EE\u7684\u6392\u5217\u65B9\u5411</Text>
          <Text>direction="row":\u4E3B\u8F74\u4E3A\u6C34\u5E73\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u5DE6\u7AEF</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <Button size="small">\u6309\u94AE1</Button>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <Button size="small">\u6309\u94AE2</Button>
            </Flex.Item>
            <Flex.Item style={{ paddingLeft: 4, paddingRight: 4 }}>
              <Button size="small">\u6309\u94AE3</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>direction="column":\u4E3B\u8F74\u4E3A\u5782\u76F4\u65B9\u5411\uFF0C\u8D77\u70B9\u5728\u4E0A\u6CBF</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex direction="column">
            <Flex.Item style={{ paddingBottom: 4 }}>
              <Button size="small">\u6309\u94AE1</Button>
            </Flex.Item>
            <Flex.Item style={{ paddingBottom: 4 }}>
              <Button size="small">\u6309\u94AE2</Button>
            </Flex.Item>
            <Flex.Item style={{ paddingBottom: 4 }}>
              <Button size="small">\u6309\u94AE3</Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            \u9879\u76EE\u5728\u4E3B\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F
          </Text>
          <Text>justify="start":\u5DE6\u5BF9\u9F50</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex justify="start">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>justify="center":\u5C45\u4E2D</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex justify="center">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>justify="end":\u53F3\u5BF9\u9F50</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex justify="end">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>justify="between":\u4E24\u7AEF\u5BF9\u9F50\uFF0C\u9879\u76EE\u4E4B\u95F4\u7684\u95F4\u9694\u90FD\u76F8\u7B49</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex justify="between">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>justify="around":\u6BCF\u4E2A\u9879\u76EE\u4E24\u4FA7\u7684\u95F4\u9694\u76F8\u7B49</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex justify="around">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>
            \u9879\u76EE\u5728\u4EA4\u53C9\u8F74\u4E0A\u7684\u5BF9\u9F50\u65B9\u5F0F
          </Text>
          <Text>align="start":\u4EA4\u53C9\u8F74\u7684\u8D77\u70B9\u5BF9\u9F50</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex align="start" style={{ height: 30 }}>
            <Text
              style={{
                fontSize: 20,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              \u515C\u515C
            </Text>
            <Text
              style={{
                fontSize: 18,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              \u515C\u515C
            </Text>
            <Text
              style={{
                fontSize: 16,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              \u515C\u515C
            </Text>
            <Text
              style={{
                fontSize: 14,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              \u515C\u515C
            </Text>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>align="center":\u4EA4\u53C9\u8F74\u7684\u4E2D\u70B9\u5BF9\u9F50</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex align="center" style={{ height: 30 }}>
            <Text
              style={{
                fontSize: 20,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              \u515C\u515C
            </Text>
            <Text
              style={{
                fontSize: 18,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              \u515C\u515C
            </Text>
            <Text
              style={{
                fontSize: 16,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              \u515C\u515C
            </Text>
            <Text
              style={{
                fontSize: 14,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              \u515C\u515C
            </Text>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>align="end":\u4EA4\u53C9\u8F74\u7684\u7EC8\u70B9\u5BF9\u9F50</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex align="end" style={{ height: 30 }}>
            <Text
              style={{
                fontSize: 20,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              \u515C\u515C
            </Text>
            <Text
              style={{
                fontSize: 18,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              \u515C\u515C
            </Text>
            <Text
              style={{
                fontSize: 16,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              \u515C\u515C
            </Text>
            <Text
              style={{
                fontSize: 14,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#527fe4',
              }}>
              \u515C\u515C
            </Text>
          </Flex>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>
            align="stretch":\u5982\u679C\u9879\u76EE\u672A\u8BBE\u7F6E\u9AD8\u5EA6\u6216\u8BBE\u4E3Aauto\uFF0C\u5C06\u5360\u6EE1\u6574\u4E2A\u5BB9\u5668\u7684\u9AD8\u5EA6
          </Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <WingBlank>
            <Flex align="stretch" style={{ height: 70 }}>
              <Text
                style={{
                  fontSize: 20,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#527fe4',
                }}>
                \u515C\u515C
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#527fe4',
                }}>
                \u515C\u515C
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#527fe4',
                }}>
                \u515C\u515C
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#527fe4',
                }}>
                \u515C\u515C
              </Text>
            </Flex>
          </WingBlank>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text style={{ marginBottom: 10 }}>\u662F\u5426\u6298\u884C</Text>
          <Text>wrap="wrap":\u6362\u884C</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <TouchableWithoutFeedback onPress={() => ({})}>
            <Flex wrap="wrap">
              {'ooooooooooooooooooooooooooooo'.split('').map((char, i) => (
                <Circle key={\`\${i}-\${char}\`} />
              ))}
            </Flex>
          </TouchableWithoutFeedback>
        </WingBlank>
        <WingBlank style={{ marginTop: 5, marginBottom: 5 }}>
          <Text>wrap="nowrap":\u4E0D\u6362\u884C</Text>
        </WingBlank>
        <WingBlank style={{ marginBottom: 5 }}>
          <Flex wrap="nowrap" onPress={() => ({})}>
            {'ooooooooooooooooooooooooooooo'.split('').map((char, i) => (
              <Circle key={\`\${i}-\${char}\`} />
            ))}
          </Flex>
        </WingBlank>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
      </ScrollView>
    )
  }
}
`},99805:function(t,n){n.Z=`import {
  Button,
  Form,
  Input,
  Picker,
  Provider,
  Radio,
  Flex as Row,
  Switch,
} from '@ant-design/react-native'
import type { FormProps } from '@ant-design/react-native/lib/form'
import { district } from 'antd-mobile-demo-data'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'


const Col = Row.Item

type FieldType = {
  username?: string
  password?: string
  remember?: string
  isDefault?: boolean
}

const FormExample: React.FC = () => {
  const [form] = Form.useForm()

  const onSubmit = () => {
    form.submit()
  }

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
    errorInfo,
  ) => {
    console.log('Failed:', errorInfo)
  }

  const pickerRef = React.useRef<any>(null)

  return (
    <Provider>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : undefined}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Form
            name="basic"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{
              doorNumber: '',
              username: '',
              phoneNumber: '',
              isDefault: false,
            }}
            renderHeader="\u6C34\u5E73\u5E03\u5C40\u83DC\u5355">
            <Form.Item
              label="\u5730\u5740"
              name="address"
              rules={[{ required: true, message: '\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A' }]}
              arrow="horizontal"
              onPress={() => {
                pickerRef.current.toggle()
              }}>
              <Picker data={district} cols={3} ref={pickerRef}>
                {({ extra, value, toggle }) => (
                  <Input
                    value={value?.length ? extra : undefined}
                    onFocus={toggle}
                    placeholder="\u7701/\u5E02/\u533A"
                  />
                )}
              </Picker>
            </Form.Item>

            <Form.Item
              label="\u6536\u8D27\u4EBA"
              name="username"
              extra={
                <Form.Item name="gender" noStyle>
                  <Radio.Group>
                    <Row>
                      <Radio value={1}>\u5148\u751F</Radio>
                      <Radio value={2}>\u5973\u58EB</Radio>
                    </Row>
                  </Radio.Group>
                </Form.Item>
              }>
              <Input placeholder="\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA\u59D3\u540D" />
            </Form.Item>

            <Form.Item
              label="\u624B\u673A\u53F7"
              name="phoneNumber"
              hasFeedback
              validateDebounce={500}
              rules={[{ pattern: /^1[3456789]\\d{9}$/ }, { required: true }]}>
              <Input type="number" placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7" />
            </Form.Item>

            <Form.Item
              label="\u8BBE\u4E3A\u9ED8\u8BA4"
              name="isDefault"
              wrapperStyle={{ alignItems: 'flex-end' }}
              valuePropName="checked">
              <Switch />
            </Form.Item>

            <Form.Item>
              <Row>
                <Col style={{ marginRight: 10 }}>
                  <Button onPress={() => form.resetFields()}>\u91CD\u7F6E</Button>
                </Col>
                <Col>
                  <Button type="primary" onPress={onSubmit}>
                    \u4FDD\u5B58
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
          <Form name="vertical" layout="vertical" renderHeader="\u5782\u76F4\u5E03\u5C40\u83DC\u5355">
            <Form.Item label="\u95EE\u9898\u63CF\u8FF0">
              <Input.TextArea
                placeholder="\u8BF7\u586B\u519910\u4E2A\u5B57\u4EE5\u4E0A\u7684\u95EE\u9898\u63CF\u8FF0\uFF0C\u4EE5\u4FBF\u6211\u4EEC\u63D0\u4F9B\u66F4\u597D\u7684\u670D\u52A1\u3002"
                maxLength={200}
                showCount
                rows={6}
              />
            </Form.Item>
            <Form.Item
              label="\u8054\u7CFB\u7535\u8BDD"
              name="phone"
              help="\u5982\u60A8\u9009\u62E9\u586B\u5199\u8054\u7CFB\u65B9\u5F0F\uFF0C\u8BE5\u4FE1\u606F\u5C06\u540C\u6B65\u81F3\u5F00\u53D1\u8005">
              <Input type="number" placeholder="\u9009\u586B\uFF0C\u8BF7\u586B\u5199\u60A8\u7684\u624B\u673A\u53F7\u7801" />
            </Form.Item>
          </Form>
        </ScrollView>
      </KeyboardAvoidingView>
    </Provider>
  )
}

export default FormExample
`},11276:function(t,n){n.Z=`import { Grid } from '@ant-design/react-native'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: \`Name\${i}\`,
}))

export default class BasicGridExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView>
        <View style={[{ margin: 10 }]}>
          <Text>Simple</Text>
        </View>
        <View style={[{ padding: 10 }]}>
          <Grid data={data} hasLine={false} />
        </View>

        <View style={[{ margin: 10 }]}>
          <Text>Carousel</Text>
        </View>
        <Grid
          data={data}
          columnNum={3}
          isCarousel
          carouselProps={{
            style: {
              width: '100%',
              height: 320,
            },
          }}
          onPress={(_el: any, index: any) => alert(index)}
        />
        <View style={[{ margin: 10 }]}>
          <Text>Custom GridCell Style</Text>
        </View>
        <Grid
          data={data}
          columnNum={3}
          itemStyle={{ height: 150, backgroundColor: '#ffff00' }}
        />
      </ScrollView>
    )
  }
}
`},66235:function(t,n){n.Z=`import {
  outlineGlyphMap,
  OutlineGlyphMapType,
} from '@ant-design/icons-react-native/lib/outline'
import { Grid, Icon, SearchBar, Toast } from '@ant-design/react-native'
import React from 'react'
import { ScrollView } from 'react-native'
const data = Object.keys(outlineGlyphMap).map((item: OutlineGlyphMapType) => ({
  icon: <Icon name={item} />,
  text: item,
}))
export default class IConDemo extends React.Component<any, any> {
  state = {
    data,
  }
  handlePress = (dataItem: { icon?: any; text?: string }) => {
    Toast.show(\`<Icon name="\${dataItem.text}" />\`)
  }
  render() {
    return (
      <ScrollView>
        <SearchBar
          placeholder="Search by icon name"
          onChange={(text) => {
            this.setState(() => ({
              data: data.filter((d) => d.text.match(new RegExp(text, 'gi'))),
            }))
          }}
        />
        <Grid
          data={this.state.data}
          columnNum={3}
          hasLine={false}
          onPress={this.handlePress}
        />
      </ScrollView>
    )
  }
}

export const title = 'Icon'
export const description = 'Icon Example'
`},87807:function(t,n){n.Z=`import { Button, InputItem, List } from '@ant-design/react-native'
import React from 'react'
import { ScrollView, Text } from 'react-native'

declare var jest: any

export default class BasicInputItemExample extends React.Component<any, any> {
  inputRef: any

  constructor(props: any) {
    super(props)
    this.state = {
      value: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      labelnum1: '',
      labelnum2: '',
      labelnum3: '',
      text: '',
      bankCard: '',
      phone: '',
      password: '',
      number: '',
    }
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <List renderHeader={'\u57FA\u672C'}>
          <InputItem
            clear
            error
            value={this.state.value}
            onChange={(value: any) => {
              this.setState({
                value,
              })
            }}
            extra="\u5143"
            placeholder="\u6709\u6807\u7B7E">
            \u8F93\u5165\u6846
          </InputItem>
          <InputItem
            clear
            value="\u4E0D\u53EF\u7F16\u8F91"
            onChange={(value: any) => {
              this.setState({
                value,
              })
            }}
            extra={<Text>\u5143</Text>}
            placeholder="\u4E0D\u53EF\u7F16\u8F91"
            editable={false}>
            \u8F93\u5165\u6846
          </InputItem>
          <InputItem
            clear
            value="disabled"
            onChange={(value: any) => {
              this.setState({
                value,
              })
            }}
            extra={<Text>\u5143</Text>}
            placeholder="disabled"
            disabled>
            \u8F93\u5165\u6846
          </InputItem>
          <InputItem
            clear
            value={this.state.value1}
            onChange={(value: any) => {
              this.setState({
                value1: value,
              })
            }}
            placeholder="\u65E0\u6807\u7B7E"
          />
          <InputItem
            defaultValue="xx"
            clear
            placeholder="\u81EA\u52A8\u83B7\u53D6\u5149\u6807"
            autoFocus={
              /* TODO: https://github.com/facebook/jest/issues/3707  */ typeof jest ===
              'undefined'
            }>
            \u6807\u9898
          </InputItem>
          <InputItem
            clear
            placeholder="\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8BE5\u8F93\u5165\u6846\u4F1A\u83B7\u53D6\u5149\u6807"
            ref={(el: any) => (this.inputRef = el)}>
            \u6807\u9898
          </InputItem>
          <List.Item>
            <Button
              onPress={() => {
                this.inputRef.focus()
              }}
              type="primary">
              \u70B9\u51FB\u83B7\u53D6\u5149\u6807
            </Button>
          </List.Item>
        </List>
        <List renderHeader={'\u56FA\u5B9A\u6807\u7B7E\u5B57\u6570'}>
          <InputItem
            clear
            value={this.state.labelnum1}
            onChange={(value: any) => {
              this.setState({
                labelnum1: value,
              })
            }}
            labelNumber={2}
            placeholder="\u4E24\u4E2A\u5B57\u6807\u7B7E">
            \u59D3\u540D
          </InputItem>
          <InputItem
            clear
            value={this.state.labelnum2}
            onChange={(value: any) => {
              this.setState({
                labelnum2: value,
              })
            }}
            labelNumber={3}
            placeholder="\u4E09\u4E2A\u5B57\u6807\u7B7E">
            \u6821\u9A8C\u7801
          </InputItem>
          <InputItem
            clear
            value={this.state.labelnum3}
            onChange={(value: any) => {
              this.setState({
                labelnum3: value,
              })
            }}
            labelNumber={4}
            placeholder="\u56DB\u4E2A\u5B57\u6807\u7B7E\uFF08\u9ED8\u8BA4\uFF09">
            \u56DB\u5B57\u6807\u7B7E
          </InputItem>
        </List>
        <List renderHeader={'\u683C\u5F0F'}>
          <InputItem
            clear
            error
            value={this.state.text}
            onChange={(value: any) => {
              this.setState({
                text: value,
              })
            }}
            placeholder="text">
            \u6587\u672C\u8F93\u5165
          </InputItem>
          <InputItem
            clear
            type="bankCard"
            value={this.state.bankcard}
            onChange={(value: any) => {
              this.setState({
                bankcard: value,
              })
            }}
            placeholder="bankCard">
            \u94F6\u884C\u5361
          </InputItem>
          <InputItem
            clear
            type="phone"
            value={this.state.phone}
            onChange={(value: any) => {
              this.setState({
                phone: value,
              })
            }}
            placeholder="phone">
            \u624B\u673A\u53F7
          </InputItem>
          <InputItem
            clear
            type="password"
            value={this.state.password}
            onChange={(value: any) => {
              this.setState({
                password: value,
              })
            }}
            placeholder="password">
            \u5BC6\u7801
          </InputItem>
          <InputItem
            clear
            type="number"
            value={this.state.number}
            onChange={(value: any) => {
              this.setState({
                number: value,
              })
            }}
            placeholder="number">
            \u6570\u5B57
          </InputItem>
        </List>
      </ScrollView>
    )
  }
}
`},27420:function(t,n){n.Z=`import { Input, List } from '@ant-design/react-native'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

export default function InputExample() {
  const [value, setValue] = React.useState('')
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : undefined}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <List renderHeader="\u57FA\u672C\u7528\u6CD5">
          <List.Item>
            <Input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />
          </List.Item>
        </List>
        <List renderHeader="\u53D7\u63A7\u6A21\u5F0F">
          <List.Item>
            <Input
              placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"
              value={value}
              onChangeText={setValue}
            />
          </List.Item>
        </List>
        <List renderHeader="\u5E26\u6E05\u9664\u6309\u94AE">
          <List.Item>
            <Input allowClear placeholder="allowClear" />
          </List.Item>
        </List>
        <List renderHeader="\u524D\u7F00\u548C\u540E\u7F00">
          <List.Item>
            <Input prefix="\u524D\u7F00" suffix="\u540E\u7F00" placeholder="prefix / suffix" />
          </List.Item>
        </List>
        <List renderHeader="\u5E26\u5B57\u6570\u63D0\u793A">
          <List.Item>
            <Input showCount placeholder="showCount" />
          </List.Item>
          <List.Item>
            <Input
              maxLength={5}
              showCount={{
                formatter: ({ count, maxLength }) => \`\${count}/\${maxLength}\`,
              }}
              placeholder="showCount.formatter"
            />
          </List.Item>
        </List>
        <List renderHeader="TextArea">
          <List.Item>
            <Input.TextArea
              rows={4}
              maxLength={100}
              showCount
              allowClear
              placeholder="\u56FA\u5B9A\u884C\u6570 row={4}"
            />
          </List.Item>
        </List>
        <List renderHeader="\u6839\u636E\u5185\u5BB9\u81EA\u52A8\u8C03\u6574\u9AD8\u5EA6">
          <List.Item>
            <Input.TextArea autoSize placeholder="autoSize={true}" />
          </List.Item>
          <List.Item>
            <Input.TextArea
              autoSize={{ minRows: 2, maxRows: 6 }}
              placeholder="autoSize={{ minRows: 2, maxRows: 6 }}"
            />
          </List.Item>
        </List>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
`},35484:function(t,n){n.Z=`import { ListView } from '@ant-design/react-native'
import React from 'react'
import { Text, View } from 'react-native'

export default class BasicListExample extends React.Component<any, any> {
  state = {
    layout: 'list',
  }
  sleep = (time: any) =>
    new Promise((resolve) => setTimeout(() => resolve(''), time))
  onFetch = async (
    page = 1,
    startFetch: (arg0: string[], arg1: number) => void,
    abortFetch: () => void,
  ) => {
    try {
      //This is required to determinate whether the first loading list is all loaded.
      let pageLimit = 30
      if (this.state.layout === 'grid') {
        pageLimit = 60
      }
      const skip = (page - 1) * pageLimit

      //Generate dummy data
      let rowData = Array.from(
        { length: pageLimit },
        (_, index) => \`item -> \${index + skip}\`,
      )

      //Simulate the end of the list if there is no more data returned from the server
      if (page === 3) {
        rowData = []
      }

      //Simulate the network loading in ES7 syntax (async/await)
      await this.sleep(2000)
      startFetch(rowData, pageLimit)
    } catch (err) {
      abortFetch() //manually stop the refresh or pagination if it encounters network error
    }
  }

  renderItem = (item: any) => {
    return (
      <View style={{ padding: 10 }}>
        <Text>{item}</Text>
      </View>
    )
  }

  render() {
    return (
      <ListView
        onFetch={this.onFetch}
        keyExtractor={(item: any, index: any) =>
          \`\${this.state.layout} - \${item} - \${index}\`
        }
        renderItem={this.renderItem}
        numColumns={this.state.layout === 'list' ? 1 : 3}
      />
    )
  }
}

export const title = 'ListView'
export const description = 'ListView Example'
`},46326:function(t,n){n.Z=`import { List } from '@ant-design/react-native'
import React from 'react'
import { Image, ScrollView, View } from 'react-native'

const Item = List.Item
const Brief = Item.Brief

export default class BasicListExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f9' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <List renderHeader={'basic'}>
          <Item data-seed="logId">
            \u6807\u9898\u6587\u5B57\u70B9\u51FB\u65E0\u53CD\u9988\uFF0C\u6587\u5B57\u8D85\u957F\u5219\u9690\u85CF\uFF0C\u6587\u5B57\u8D85\u957F\u5219\u9690\u85CF
          </Item>
          <Item wrap>
            \u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C
          </Item>
          <Item disabled extra="\u7BAD\u5934\u5411\u53F3" arrow="horizontal" onPress={() => {}}>
            \u6807\u9898\u6587\u5B57
          </Item>
          <Item extra="\u7BAD\u5934\u5411\u4E0B" arrow="down" onPress={() => {}}>
            \u6807\u9898\u6587\u5B57
          </Item>
          <Item extra="\u7BAD\u5934\u5411\u4E0A" arrow="up" onPress={() => {}}>
            \u6807\u9898\u6587\u5B57
          </Item>
          <Item extra="\u6CA1\u6709\u7BAD\u5934" arrow="empty">
            \u6807\u9898\u6587\u5B57
          </Item>
          <Item
            extra={
              <View>
                \u5185\u5BB9\u5185\u5BB9
                <Brief style={{ textAlign: 'right' }}>\u8F85\u52A9\u6587\u5B57\u5185\u5BB9</Brief>
              </View>
            }
            multipleLine>
            \u5782\u76F4\u5C45\u4E2D\u5BF9\u9F50
          </Item>
          <Item extra="\u5185\u5BB9\u5185\u5BB9" multipleLine>
            \u5782\u76F4\u5C45\u4E2D\u5BF9\u9F50<Brief>\u8F85\u52A9\u6587\u5B57\u5185\u5BB9</Brief>
          </Item>
          <Item
            wrap
            extra="\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C\u6587\u5B57\u8D85\u957F\u6298\u884C"
            multipleLine
            align="top"
            arrow="horizontal">
            \u9876\u90E8\u5BF9\u9F50
            <Brief>\u8F85\u52A9\u6587\u5B57\u5185\u5BB9\u8F85\u52A9\u6587\u5B57\u5185\u5BB9\u8F85\u52A9\u6587\u5B57\u5185\u5BB9\u8F85\u52A9\u6587\u5B57\u5185\u5BB9</Brief>
            <Brief>\u8F85\u52A9\u6587\u5B57\u5185\u5BB9</Brief>
          </Item>
          <Item
            extra={
              <View>
                \u5185\u5BB9\u5185\u5BB9
                <Brief style={{ textAlign: 'right' }}>\u8F85\u52A9\u6587\u5B57\u5185\u5BB9</Brief>
              </View>
            }
            multipleLine
            align="bottom">
            \u5E95\u90E8\u5BF9\u9F50
          </Item>
        </List>
        <List renderHeader={'\u5E26\u7F29\u7565\u56FE'}>
          <Item thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png">
            thumb
          </Item>
          <Item
            thumb="https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png"
            arrow="horizontal">
            thumb
          </Item>
          <Item
            extra={
              <Image
                source={{
                  uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png',
                }}
                style={{ width: 29, height: 29 }}
              />
            }
            arrow="horizontal">
            extra\u4E3AImage
          </Item>
        </List>
      </ScrollView>
    )
  }
}

export const title = 'List'
export const description = 'List Example'
`},15621:function(t,n){n.Z=`import {
  Button,
  List,
  Modal,
  Provider,
  Switch,
  Toast,
  WhiteSpace,
  WingBlank,
} from '@ant-design/react-native'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

export default class BasicModalExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      visible: false,
      visible1: false,
      visible2: false,
      modalType: 'portal',
    }
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
  }

  onClose1 = () => {
    this.setState({
      visible1: false,
    })
  }

  onClose2 = () => {
    this.setState({
      visible2: false,
    })
  }

  onButtonClick = () => {
    Modal.alert('Title', 'alert content', [
      { text: 'Cancel', onPress: () => console.log('cancel'), style: 'cancel' },
      { text: 'OK', onPress: () => console.log('ok') },
    ])
  }

  onButtonClickPromise = () => {
    Modal.alert('Title', 'promise button', [
      {
        text: 'Cancel',
        onPress: () => {
          Toast.info('onPress promise resolve', 1)
          return new Promise((resolve) => {
            setTimeout(resolve, 1000)
          })
        },
        style: 'cancel',
      },
      {
        text: 'Hold on',
        onPress: () => {
          Toast.info('onPress promise reject', 1)
          return new Promise((_, reject) => {
            setTimeout(reject, 1000)
          })
        },
      },
    ])
  }

  onButtonClick2 = () => {
    Modal.operation([
      { text: '\u6807\u4E3A\u672A\u8BFB', onPress: () => console.log('\u6807\u4E3A\u672A\u8BFB\u88AB\u70B9\u51FB\u4E86') },
      { text: '\u7F6E\u9876\u804A\u5929', onPress: () => console.log('\u7F6E\u9876\u804A\u5929\u88AB\u70B9\u51FB\u4E86') },
    ])
  }

  onButtonClick3 = () => {
    Modal.prompt(
      'Login',
      'Pleas input login information',
      (login: any, password: any) =>
        console.log(\`login: \${login}, password: \${password}\`),
      'login-password',
      '',
      ['Please input name', 'Please input password'],
    )
  }

  onButtonClick4 = () => {
    Modal.prompt(
      'Input password',
      'password message',
      (password: any) => console.log(\`password: \${password}\`),
      'secure-text',
      'defaultValue',
    )
  }

  onButtonClick5 = () => {
    Modal.prompt(
      'Name',
      'name message',
      (password: any) => console.log(\`password: \${password}\`),
      'default',
      '',
      ['please input name'],
    )
  }

  onButtonClick6 = () => {
    Modal.operation(
      [
        { text: '\u6807\u4E3A\u672A\u8BFB', onPress: () => console.log('\u6807\u4E3A\u672A\u8BFB\u88AB\u70B9\u51FB\u4E86') },
        { text: '\u7F6E\u9876\u804A\u5929', onPress: () => console.log('\u7F6E\u9876\u804A\u5929\u88AB\u70B9\u51FB\u4E86') },
      ],
      () => {
        console.log('\u8FD4\u56DE\u952E\u70B9\u51FB')
        return false
      },
    )
  }
  render() {
    const footerButtons = [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      { text: 'Ok', onPress: () => console.log('ok') },
    ]
    return (
      <Provider>
        <ScrollView style={{ marginTop: 20 }}>
          <List>
            <List.Item
              extra={
                <Switch
                  style={{ width: 70 }}
                  checked={this.state.modalType === 'modal'}
                  onChange={(val) => {
                    this.setState({ modalType: val ? 'modal' : 'portal' })
                  }}
                  checkedChildren="modal"
                  unCheckedChildren="portal"
                />
              }>
              \u5207\u6362modalType
              <List.Item.Brief>
                \`modalType='modal'\`\u65F6\u5C06\u8C03\u7528\u539F\u751FModal{' '}
              </List.Item.Brief>
            </List.Item>
          </List>
          <WingBlank>
            <Button onPress={() => this.setState({ visible: true })}>
              showModal
            </Button>
            <WhiteSpace />
            <Button onPress={() => this.setState({ visible1: true })}>
              transparent:false
            </Button>
            <WhiteSpace />
            <Button onPress={() => this.setState({ visible2: true })}>
              popup
            </Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClick}>Modal.alert</Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClickPromise}>
              Modal.alert (promise)
            </Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClick2}>Modal.opertation</Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClick6}>
              Modal.opertation (onBackHandler)
            </Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClick5}>
              Modal.prompt (default)
            </Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClick3}>
              Modal.prompt (login-password)
            </Button>
            <WhiteSpace />
            <Button onPress={this.onButtonClick4}>
              Modal.prompt (secure-text)
            </Button>
          </WingBlank>
          <Modal
            title="Title"
            transparent
            modalType={this.state.modalType}
            onClose={this.onClose}
            maskClosable
            visible={this.state.visible}
            closable
            footer={footerButtons}>
            <View style={{ paddingVertical: 20 }}>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
            </View>
            <Button type="primary" onPress={this.onClose}>
              close modal
            </Button>
          </Modal>
          <Modal
            transparent={false}
            modalType={this.state.modalType}
            visible={this.state.visible1}
            animationType="slide-up"
            onClose={this.onClose1}>
            <View style={{ paddingVertical: 220 }}>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
            </View>
            <Button
              type="primary"
              style={{ marginBottom: 10 }}
              onPress={() => Toast.info('Hello Toast in Modal now works')}>
              {this.state.modalType === 'portal'
                ? 'Hello Toast in Modal now works'
                : "Hello Toast not works when modalType='portal'"}
            </Button>
            <Button type="primary" onPress={this.onClose1}>
              close modal
            </Button>
          </Modal>
          <Modal
            popup
            modalType={this.state.modalType}
            visible={this.state.visible2}
            animationType="slide-up"
            onClose={this.onClose2}>
            <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
            </View>
            <Button type="primary" onPress={this.onClose2}>
              close modal
            </Button>
          </Modal>
        </ScrollView>
      </Provider>
    )
  }
}
`},69407:function(t,n){n.Z=`import {
  Icon,
  List,
  NoticeBar,
  Picker,
  Provider,
  Slider,
  Switch,
  WhiteSpace,
} from '@ant-design/react-native'
import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'

export default function NoticeBarExample() {
  return (
    <Provider>
      <ScrollView style={{ marginBottom: 40 }}>
        {true && (
          <>
            <List renderHeader={'\u81EA\u5B9A\u4E49\u989C\u8272'}>
              <WhiteSpace />
              <NoticeBar>\u9ED8\u8BA4</NoticeBar>
              <WhiteSpace />
              <NoticeBar
                styles={{
                  font: { color: '#ffffff' },
                  background: { backgroundColor: '#f4333c' },
                }}>
                \u9519\u8BEF
              </NoticeBar>
              <WhiteSpace />
              <NoticeBar
                styles={{
                  font: { color: '#108ee9' },
                  background: { backgroundColor: '#d0e4ff' },
                }}>
                \u4FE1\u606F
              </NoticeBar>
              <WhiteSpace />
            </List>
            <List renderHeader={'\u53EF\u5173\u95ED'}>
              <NoticeBar mode="closable">\u8FD9\u6761\u901A\u77E5\u53EF\u4EE5\u5173\u95ED</NoticeBar>
            </List>
            <List renderHeader={'\u8D85\u957F\u6EDA\u52A8'}>
              <WhiteSpace />
              <NoticeBar marqueeProps={{ loop: true }}>
                Notice: I can be a React component, multiple React components,
                or just some text.
              </NoticeBar>
              <WhiteSpace />
              <NoticeBar
                marqueeProps={{
                  loop: true,
                  autoFill: true,
                  trailing: 0,
                  spacing: 10,
                }}>
                autoFill&spacing
              </NoticeBar>
            </List>
            <List renderHeader={'\u81EA\u5B9A\u4E49'}>
              <WhiteSpace />
              <NoticeBar
                mode="link"
                onPress={() => {
                  console.log('onPress')
                }}>
                mode="link"
              </NoticeBar>
              <WhiteSpace />
              <NoticeBar
                mode="closable"
                icon={<Icon name="compass" style={{ color: '#f4333c' }} />}
                action={
                  <Icon name="close-circle" style={{ color: '#f4333c' }} />
                }>
                \u81EA\u5B9A\u4E49\u56FE\u6807
              </NoticeBar>
              <WhiteSpace />
              <NoticeBar
                marqueeProps={{ loop: true, autoFill: true }}
                mode="closable"
                action={<Text style={{ color: '#a1a1a1' }}>\u4E0D\u518D\u63D0\u793A</Text>}>
                \u81EA\u5B9A\u4E49\u53F3\u4FA7\u529F\u80FD\u533A Closable demo for \`action\`.
              </NoticeBar>
              <WhiteSpace />
            </List>
          </>
        )}
        <List renderHeader={'\u65B9\u5411/\u64AD\u653E/\u6682\u505C\u63A7\u5236'}>
          <ControlDemo />
        </List>
      </ScrollView>
    </Provider>
  )
}

function ControlDemo() {
  const [play, setPlay] = useState(true)
  const [autoFill, setAutoFill] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right' | 'up' | 'down'>(
    'left',
  )
  const [fps, setFps] = useState(40)
  return (
    <>
      <WhiteSpace />
      <NoticeBar
        marqueeProps={{
          play,
          autoFill,
          direction,
          fps,
          loop: 0,
        }}>
        Notice: I can be a React component, multiple React components, or just
        some text.
      </NoticeBar>
      <WhiteSpace />
      <List.Item extra={<Switch checked={play} onChange={setPlay} />}>
        Play
      </List.Item>
      <List.Item extra={<Switch checked={autoFill} onChange={setAutoFill} />}>
        AutoFill
      </List.Item>
      <Picker
        data={[
          { label: 'Left', value: 'left' },
          { label: 'Right', value: 'right' },
          { label: 'Up', value: 'up' },
          { label: 'Down', value: 'down' },
        ]}
        value={[direction]}
        onChange={(val) => setDirection(val[0] as any)}>
        <List.Item arrow="horizontal">Direction</List.Item>
      </Picker>
      <List.Item>
        <List.Item.Brief>\u901F\u5EA6fps: {fps}</List.Item.Brief>
        <Slider
          onAfterChange={setFps}
          ticks
          step={10}
          defaultValue={fps}
          popover
        />
      </List.Item>
    </>
  )
}
`},46841:function(t,n){n.Z=`import { Pagination, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'

const locale = {
  prevText: '\u4E0A\u4E00\u6B65',
  nextText: '\u4E0B\u4E00\u6B65',
}

export default class BasicPaginationExample extends React.Component<any, any> {
  render() {
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Pagination total={5} current={1} locale={locale} />

        <WhiteSpace size="lg" />
        <Pagination simple total={5} current={1} locale={locale} />

        <WhiteSpace size="lg" />
        <Pagination mode="number" total={5} current={3} />

        <WhiteSpace size="lg" />
        <Pagination mode="pointer" total={5} current={2} />
      </WingBlank>
    )
  }
}
`},1601:function(t,n){n.Z=`import { List, PickerView } from '@ant-design/react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const basicColumns = [
  [
    { label: '\u5468\u4E00', value: 'Mon' },
    { label: '\u5468\u4E8C', value: 'Tues' },
    { label: '\u5468\u4E09', value: 'Wed' },
    { label: '\u5468\u56DB', value: 'Thur' },
    { label: '\u5468\u4E94', value: 'Fri' },
  ],
  [
    { label: '\u4E0A\u5348', value: 'am' },
    { label: '\u4E0B\u5348', value: 'pm' },
  ],
]

export default class PickerViewExample extends React.Component {
  state = {
    value: undefined,
  }
  onChange = (value: any) => {
    this.setState({
      value,
    })
  }
  render() {
    return (
      <ScrollView
        nestedScrollEnabled // \u{1F6A9} Enables nested scrolling for Android API level 21+. Nested scrolling is supported by default on iOS.
      >
        <List renderHeader={'\u57FA\u7840\u7528\u6CD5'}>
          <PickerView data={basicColumns} cascade={false} />
        </List>
        <List renderHeader={'\u81EA\u5B9A\u4E49\u9AD8\u5EA6'}>
          <PickerView
            data={basicColumns}
            cascade={false}
            style={{ height: 450 }}
            itemHeight={55}
            itemStyle={{
              padding: 0,
            }}
          />
        </List>
        <List renderHeader={'\u53D7\u63A7\u6A21\u5F0F'}>
          <PickerView
            onChange={this.onChange}
            value={this.state.value}
            data={basicColumns}
            cascade={false}
          />
        </List>
      </ScrollView>
    )
  }
}
`},11202:function(t,n){n.Z=`import {
  Button,
  List,
  Picker,
  PickerValue,
  PickerValueExtend,
  Provider,
} from '@ant-design/react-native'
import { district } from 'antd-mobile-demo-data'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const CustomChildren = (props: any) => (
  <TouchableOpacity onPress={props.onPress}>
    <View
      style={{
        height: 36,
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text style={{ flex: 1 }}>{props.children}</Text>
      <Text style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>
        {props.extra}
      </Text>
    </View>
  </TouchableOpacity>
)

// visible\u7528\u6CD5
function BasicDemo() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<any[]>([])
  const [extend, setExtend] = useState<any>()
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingLeft: 16,
      }}>
      <Button
        type="primary"
        onPress={() => {
          setVisible(true)
        }}>
        \u9009\u62E9
      </Button>

      {/* extend\u6E32\u67D3\u6240\u9009\u503C */}
      <Text>
        {extend?.items?.map((item: any) => item.label).join(',') || ' \u672A\u9009\u62E9'}
      </Text>

      {/* visible\u63A7\u5236\u663E\u793A/\u9690\u85CF */}
      <Picker
        data={district}
        cols={3}
        onChange={setValue}
        onVisibleChange={(v) => {
          setVisible(v)
        }}
        visible={visible}
        value={value}
        onOk={(v: PickerValue[], ext: PickerValueExtend) => {
          setValue(v)
          setExtend(ext)
        }}
      />
    </View>
  )
}

export default class PopupExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
      value: [],
      pickerValue: [],
    }
  }
  onPress = () => {
    setTimeout(() => {
      this.setState({
        data: district,
      })
    }, 500)
  }
  onChange = (value: any) => {
    this.setState({ value })
  }

  render() {
    return (
      <Provider>
        <List renderHeader={'List Children'}>
          <Picker
            data={district}
            cols={3}
            value={this.state.value}
            onChange={this.onChange}>
            <List.Item arrow="horizontal">\u7701\u5E02\u9009\u62E9</List.Item>
          </Picker>
          <Picker
            data={this.state.data}
            cols={2}
            value={this.state.value}
            onChange={this.onChange}>
            <List.Item arrow="horizontal" onPress={this.onPress}>
              \u7701\u5E02\u9009\u62E9(\u5F02\u6B65\u52A0\u8F7D)
            </List.Item>
          </Picker>
          <Picker
            title="\u9009\u62E9\u5730\u533A"
            data={district}
            cols={2}
            value={this.state.pickerValue}
            onChange={(v: any) => this.setState({ pickerValue: v })}
            onOk={(v: any) => this.setState({ pickerValue: v })}>
            <CustomChildren>Customized children</CustomChildren>
          </Picker>
        </List>
        <List renderHeader={'visible \u63A7\u5236\u663E\u793A/\u9690\u85CF'}>
          <BasicDemo />
        </List>
      </Provider>
    )
  }
}
`},58695:function(t,n){n.Z=`import { List, Popover } from '@ant-design/react-native'
import React from 'react'
import { Easing, StyleSheet, Text, View } from 'react-native'

const Item = Popover.Item

export default class PopoverExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      selected: '',
    }
  }

  onSelect = (value: any) => {
    this.setState({
      // visible: false,
      selected: value,
    })
  }
  render() {
    let overlay = [1, 2, 3].map((i, index) => (
      <Item key={index} value={\`option \${i}\`}>
        <Text>option {i}</Text>
      </Item>
    ))
    overlay = overlay.concat([
      <Item key="4" value="disabled" disabled>
        <Text style={{ color: '#ddd' }}>disabled opt</Text>
      </Item>,
      <Item key="6" value="button ct" style={{ backgroundColor: '#efeff4' }}>
        <Text>\u5173\u95ED</Text>
      </Item>,
    ])
    return (
      <React.Fragment>
        <List>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) =>
            this.renderList(overlay, item),
          )}
        </List>
        <Popover
          overlay={
            <Popover.Item value={'test'}>
              <Text>\u81EA\u5B9A\u4E49\u7EC4\u4EF6 x</Text>
            </Popover.Item>
          }
          renderOverlayComponent={(nodes) => (
            <View>
              <Text
                style={{
                  paddingHorizontal: 9,
                  paddingTop: 16,
                  color: '#2b2b2b',
                  fontWeight: 'bold',
                }}>
                \u6211\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6title
              </Text>
              {nodes}
            </View>
          )}>
          <Text
            style={{
              margin: 16,
            }}>
            \u81EA\u5B9A\u4E49\u7EC4\u4EF6
          </Text>
        </Popover>
        <Popover
          overlay={overlay}
          useNativeDriver
          duration={200}
          easing={(show) => (show ? Easing.in(Easing.ease) : Easing.step0)}>
          <Text
            style={{
              margin: 16,
            }}>
            \u81EA\u5B9A\u4E49\u52A8\u753B
          </Text>
        </Popover>
        <View style={{ alignItems: 'center' }}>
          <Text
            style={{
              margin: 16,
              color: 'red',
            }}>
            \u5982\u679C\u4F60\u8BBE\u7F6E\u4E86 placement \u5C5E\u6027\u8BF7\u786E\u4FDD\u4F60\u7684\u5185\u5BB9\u591F\u4F4D\u7F6E\u663E\u793A\uFF0C\u9ED8\u8BA4\u662F auto
            \u81EA\u52A8\u8BA1\u7B97\u4F4D\u7F6E
          </Text>
          {['left', 'right', 'top', 'bottom'].map((p) => (
            <Popover
              key={p}
              overlay={
                <Popover.Item value={p}>
                  <Text>\u81EA\u5B9A\u4E49\u7EC4\u4EF6 {p}</Text>
                </Popover.Item>
              }
              placement={p as any}>
              <Text
                style={{
                  margin: 16,
                }}>
                {p}
              </Text>
            </Popover>
          ))}
        </View>
      </React.Fragment>
    )
  }

  private renderList(overlay: React.ReactNode[], key: number) {
    return (
      <List.Item
        key={key}
        extra={
          <Popover
            overlay={overlay}
            triggerStyle={styles.triggerStyle}
            onSelect={(v) =>
              this.setState({
                [\`selected\${key}\`]: v,
              })
            }>
            <Text>\u83DC\u5355</Text>
          </Popover>
        }>
        <View>
          <Text>\u9009\u62E9\u4E86\uFF1A{this.state[\`selected\${key}\`]}</Text>
        </View>
      </List.Item>
    )
  }
}

const styles = StyleSheet.create({
  triggerStyle: {
    paddingHorizontal: 6,
  },
})

export const title = 'Popover'
export const description = 'Popover example'
`},97925:function(t,n){n.Z=`import { Button, Progress, WhiteSpace } from '@ant-design/react-native'
import React from 'react'
import { Text, View, ViewStyle } from 'react-native'

export default class BasicProgressExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      percent: 40,
    }
  }

  onAdd = () => {
    let p = this.state.percent + 10
    if (this.state.percent >= 100) {
      p = 0
    }
    this.setState({ percent: p })
  }

  render() {
    const style = {
      marginTop: 80,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }
    return (
      <View>
        <Progress percent={90} position="fixed" />

        <View style={[style as ViewStyle]}>
          <View style={{ marginRight: 10, height: 4, flex: 1 }}>
            <Progress percent={this.state.percent} />
          </View>
          <Text>{this.state.percent}%</Text>
        </View>
        <Button
          style={{ width: 50, marginLeft: 10 }}
          type="ghost"
          size="small"
          onPress={this.onAdd}>
          (+-)10
        </Button>

        <WhiteSpace />
        <Progress percent={5} />
      </View>
    )
  }
}
`},87070:function(t,n){n.Z=`import {
  DatePicker,
  List,
  Pagination,
  Picker,
  Provider,
  SearchBar,
  WhiteSpace,
  WingBlank,
} from '@ant-design/react-native'
import enUS from '@ant-design/react-native/lib/locale-provider/en_US'
import esES from '@ant-design/react-native/lib/locale-provider/es_ES'
import faIR from '@ant-design/react-native/lib/locale-provider/fa_IR'
import koKR from '@ant-design/react-native/lib/locale-provider/ko_KR'
import ptBR from '@ant-design/react-native/lib/locale-provider/pt_BR'
import ruRU from '@ant-design/react-native/lib/locale-provider/ru_RU'
import svSE from '@ant-design/react-native/lib/locale-provider/sv_SE'
import zhCN from '@ant-design/react-native/lib/locale-provider/zh_CN'
import React from 'react'
import { View } from 'react-native'

const maxDate = new Date(2018, 11, 3, 22, 0)
const minDate = new Date(2015, 7, 6, 8, 30)

const seasons = [
  [
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  ],
  [
    {
      label: '\u6625',
      value: '\u6625',
    },
    {
      label: '\u590F',
      value: '\u590F',
    },
  ],
]

const Page = React.memo(() => (
  <View>
    <Pagination total={5} current={1} />
    <WhiteSpace />
    <List style={{ backgroundColor: 'white' }}>
      <DatePicker
        mode="date"
        title="Select date"
        minDate={minDate}
        maxDate={maxDate}>
        <List.Item arrow="horizontal">DatePicker</List.Item>
      </DatePicker>
      <Picker data={seasons} cascade={false}>
        <List.Item arrow="horizontal">Picker</List.Item>
      </Picker>
      <WhiteSpace />
      <SearchBar placeholder="Search" showCancelButton />
    </List>
  </View>
))

export default class LocaleProviderExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      locale: 'English',
    }
  }

  onChange = (value: any) => {
    this.setState({
      locale: value[0],
    })
  }

  render() {
    const { locale } = this.state
    const languages: Array<any> = [
      {
        value: '\u4E2D\u56FD',
        label: '\u4E2D\u56FD',
        language: zhCN,
      },
      {
        value: 'English',
        label: 'English',
        language: enUS,
      },
      {
        value: '\u0420\u0443\u0441\u0441\u043A\u0438\u0439',
        label: '\u0420\u0443\u0441\u0441\u043A\u0438\u0439',
        language: ruRU,
      },
      {
        value: 'Espa\xF1ol',
        label: 'Espa\xF1ol',
        language: esES,
      },
      {
        value: 'Portugu\xEAs - BR',
        label: 'Portugu\xEAs - BR',
        language: ptBR,
      },
      {
        value: 'Sverige',
        label: 'Sverige',
        language: svSE,
      },
      {
        value: 'Persian',
        label: 'Persian',
        language: faIR,
      },
      {
        value: '\uD55C\uAD6D',
        label: '\uD55C\uAD6D',
        language: koKR,
      },
    ]
    const currentLocale = languages.find(
      (item) => item.value === locale,
    ).language

    return (
      <Provider locale={currentLocale}>
        <WingBlank>
          <Picker
            data={languages}
            onChange={this.onChange}
            cols={1}
            value={[locale]}>
            <List.Item arrow="horizontal">Choose language</List.Item>
          </Picker>
          <WhiteSpace />
          <Page />
        </WingBlank>
      </Provider>
    )
  }
}
`},85678:function(t,n){n.Z=`import { Button, Flex, List, Radio, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { ScrollView } from 'react-native'
const RadioItem = Radio.RadioItem

type RadioValue = string | number
interface EventRadioGroup {
  target: { value: RadioValue }
}

interface EventRadioItem {
  target: { checked: boolean }
}
export default class BasicRadioExample extends React.Component<any, any> {
  state = {
    disabled: false,
    part1Value: 1,
    part2Value: 1,
    part3Value: 1,
  }

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    })
  }

  onChange = (part1Value: any, e: EventRadioItem) => {
    if (e.target.checked) {
      this.setState({ part1Value })
    }
  }

  onGroupChange2 = (e: EventRadioGroup) => {
    this.setState({
      part2Value: e.target.value,
    })
  }

  onGroupChange3 = (e: EventRadioGroup) => {
    this.setState({
      part3Value: e.target.value,
    })
  }

  render() {
    return (
      <ScrollView>
        <List renderHeader="\u57FA\u672C\u7528\u6CD5">
          <List.Item thumb={<Radio>Radio</Radio>} />
        </List>
        <List
          renderHeader="\u4E0D\u53EF\u7528"
          renderFooter={
            <Button type="primary" onPress={this.toggleDisabled}>
              Toggle disabled
            </Button>
          }>
          <List.Item>
            <Flex>
              <Radio defaultChecked={false} disabled={this.state.disabled}>
                Disabled
              </Radio>
              <WingBlank />
              <Radio disabled={this.state.disabled}>Disabled</Radio>
            </Flex>
          </List.Item>
        </List>
        <List renderHeader="RadioItem">
          <RadioItem
            checked={this.state.part1Value === 1}
            onChange={this.onChange.bind(this, 1)}>
            Use Ant Design Component
          </RadioItem>
          <RadioItem
            checked={this.state.part1Value === 2}
            onChange={this.onChange.bind(this, 2)}>
            Use Ant Design Component
          </RadioItem>
        </List>
        <List renderHeader={'\u5355\u9009\u7EC4\u5408 RadioGroup\\n\u4E00\u7EC4\u4E92\u65A5\u7684 Radio \u914D\u5408\u4F7F\u7528'}>
          <Radio.Group
            onChange={this.onGroupChange2}
            value={this.state.part2Value}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: 6,
            }}>
            <Radio value={1}>A</Radio>
            <Radio value={2}>B</Radio>
            <Radio value={3}>C</Radio>
            <Radio value={4}>D</Radio>
          </Radio.Group>
        </List>
        <List
          renderHeader={
            'Radio.Group \u5782\u76F4\\n\u5782\u76F4\u7684 Radio.Group\uFF0C\u914D\u5408\u66F4\u591A\u8F93\u5165\u6846\u9009\u9879'
          }>
          <Radio.Group
            onChange={this.onGroupChange3}
            value={this.state.part3Value}>
            <RadioItem value={1}>Option A</RadioItem>
            <RadioItem value={2}>Option B</RadioItem>
            <RadioItem value={3}>Option C</RadioItem>
            <RadioItem value={4} left>
              More...
            </RadioItem>
          </Radio.Group>
        </List>
        <List
          renderHeader={
            'Radio.Group \u7EC4\u5408 - \u914D\u7F6E\u65B9\u5F0F\\n\u53EF\u901A\u8FC7\u914D\u7F6E options \u53C2\u6570\u6765\u6E32\u67D3\u5355\u9009\u6846\u3002'
          }>
          <RadioGroupExample />
        </List>
      </ScrollView>
    )
  }
}

const plainOptions = ['Apple', 'Pear', 'Orange']
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
]
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
]

class RadioGroupExample extends React.Component {
  state = {
    value1: 'Apple',
    value2: 'Apple',
    value3: 'Apple',
  }

  onChange1 = (e: EventRadioGroup) => {
    console.log('radio1 checked', e.target.value)
    this.setState({
      value1: e.target.value,
    })
  }

  onChange2 = (e: EventRadioGroup) => {
    console.log('radio2 checked', e.target.value)
    this.setState({
      value2: e.target.value,
    })
  }

  onChange3 = (e: EventRadioGroup) => {
    console.log('radio3 checked', e.target.value)
    this.setState({
      value3: e.target.value,
    })
  }

  render() {
    const { value1, value2, value3 } = this.state
    return (
      <>
        <List renderHeader="PlainOptions">
          <Radio.Group
            options={plainOptions}
            onChange={this.onChange1}
            value={value1}
          />
        </List>
        <List renderHeader="Options">
          <Radio.Group
            options={options}
            onChange={this.onChange2}
            value={value2}
          />
        </List>
        <List renderHeader="OptionsWithDisabled">
          <Radio.Group
            options={optionsWithDisabled}
            onChange={this.onChange3}
            value={value3}
          />
        </List>
      </>
    )
  }
}
`},95794:function(t,n){n.Z=`import { Result } from '@ant-design/react-native'
import React from 'react'
import { Image, ScrollView, Text } from 'react-native'

export default class ResultExample extends React.Component<any, any> {
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#F5F5F9', flex: 1 }}>
        <Text style={{ margin: 10, color: '#999' }}>URI \u56FE\u7247</Text>
        <Result
          imgUrl={{
            uri: 'https://zos.alipayobjects.com/rmsportal/GcBguhrOdlYvGfnsXgrE.png',
          }}
          title="\u9A8C\u8BC1\u6210\u529F"
          message="\u6240\u63D0\u4EA4\u5185\u5BB9\u5DF2\u6210\u529F\u5B8C\u6210\u9A8C\u8BC1"
        />

        <Text style={{ margin: 10, color: '#999' }}>Image source</Text>
        <Result
          imgUrl={require('./alipay.png')}
          title="\u9A8C\u8BC1\u6210\u529F"
          message="\u6240\u63D0\u4EA4\u5185\u5BB9\u5DF2\u6210\u529F\u5B8C\u6210\u9A8C\u8BC1"
        />

        <Text style={{ margin: 10, color: '#999' }}>Image element</Text>
        <Result
          img={
            <Image
              source={require('./alipay.png')}
              style={{ width: 60, height: 60 }}
            />
          }
          title="\u9A8C\u8BC1\u6210\u529F"
          message={<Text>\u6240\u63D0\u4EA4\u5185\u5BB9\u5DF2\u6210\u529F\u5B8C\u6210\u9A8C\u8BC1</Text>}
        />

        <Text style={{ margin: 10, color: '#999' }}>\u542B button \u64CD\u4F5C</Text>
        <Result
          img={
            <Image
              source={require('./alipay.png')}
              style={{ width: 60, height: 60 }}
            />
          }
          title="\u9A8C\u8BC1\u6210\u529F"
          message="\u6240\u63D0\u4EA4\u5185\u5BB9\u5DF2\u6210\u529F\u5B8C\u6210\u9A8C\u8BC1"
          buttonText="\u5B8C\u6210"
          buttonType="primary"
          onButtonClick={(e: any) => alert(e.toString())}
        />
      </ScrollView>
    )
  }
}
`},90823:function(t,n){n.Z=`import { SearchBar } from '@ant-design/react-native'
import React from 'react'
import { Alert, View } from 'react-native'

export default class SearchBarDemo extends React.Component<any, any> {
  state = {
    value: '\u7F8E\u98DF',
  }

  onChange = (value: any) => {
    this.setState({ value })
  }

  clear = () => {
    this.setState({ value: '' })
  }

  render() {
    return (
      <View style={{ marginTop: 30 }}>
        <SearchBar defaultValue="\u521D\u59CB\u503C" placeholder="\u641C\u7D22" />
        <SearchBar
          value={this.state.value}
          placeholder="\u641C\u7D22"
          onSubmit={(value: any) => Alert.alert(value)}
          onCancel={this.clear}
          onChange={this.onChange}
          showCancelButton
        />
      </View>
    )
  }
}
`},30176:function(t,n){n.Z=`import { List, Provider, Slider, Switch, Toast } from '@ant-design/react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

export default function StepperExample() {
  useEffect(() => {
    Toast.config({ stackable: false })
  }, [])

  const [disabledStep, setDisabledStep] = useState(false)
  const [tapToSeek, setTapToSeek] = useState(true)
  const marks = {
    0: 0,
    // 20: 20,
    40: 40,
    60: '',
    80: 80,
    100: 100,
  }

  const toastValue = (value: number | [number, number]) => {
    let text = ''
    if (typeof value === 'number') {
      text = \`\${value}\`
    } else {
      text = \`[\${value.join(',')}]\`
    }
    Toast.show({ content: \`\u5F53\u524D\u9009\u4E2D\u503C\u4E3A\uFF1A\${text}\`, position: 'top' })
  }

  return (
    <Provider>
      <ScrollView>
        <List>
          <List.Item
            extra={
              <Switch
                checked={disabledStep}
                onChange={(val) => {
                  setDisabledStep(val)
                }}
              />
            }>
            Disabled Step
            <List.Item.Brief>
              \u662F\u5426\u7981\u7528\u6B65\u8DDD\uFF1B\u7981\u7528\u540E\`onChange\`\u5C06\u8FD4\u56DE\u5E26\u6709\u5C0F\u6570\u70B9\u7684\u503C
            </List.Item.Brief>
          </List.Item>
          <List.Item
            extra={
              <Switch
                checked={tapToSeek}
                onChange={(val) => {
                  setTapToSeek(val)
                }}
              />
            }>
            Tap To Seek
            <List.Item.Brief>
              \u662F\u5426\u5141\u8BB8\u70B9\u51FB\u6ED1\u5757\u8F68\u9053\u6765\u8BBE\u7F6Eslider\u503C
            </List.Item.Brief>
          </List.Item>
        </List>
        <List
          renderHeader={'\u57FA\u7840\u7528\u6CD5'}
          onStartShouldSetResponder={() => true}
          onTouchStart={(e) => e.stopPropagation()}>
          <List.Item>
            <Slider
              max={1}
              disabledStep={disabledStep}
              tapToSeek={tapToSeek}
              onChange={toastValue}
              onAfterChange={toastValue}
              onSlidingStart={(val, index) =>
                console.log('onSlidingStart', { val, index })
              }
              onSlidingComplete={(val, index) =>
                console.log('onSlidingComplete', { val, index })
              }
            />
          </List.Item>
        </List>
        <List renderHeader={'\u663E\u793A\u523B\u5EA6(ticks)\u5E76\u6307\u5B9A\u6B65\u8DDD(step)'}>
          <List.Item>
            <Slider
              ticks
              step={10}
              defaultValue={40}
              disabledStep={disabledStep}
              tapToSeek={tapToSeek}
            />
          </List.Item>
        </List>
        <List renderHeader={'\u4F20\u5165\u523B\u5EA6\u6807\u8BB0(marks)'}>
          <List.Item>
            <Slider
              marks={marks}
              ticks
              disabledStep={disabledStep}
              tapToSeek={tapToSeek}
            />
          </List.Item>
        </List>
        <List renderHeader={'\u6700\u5927(max)/\u6700\u5C0F\u503C(min)'}>
          <List.Item>
            <Slider
              step={100}
              min={100}
              max={1000}
              ticks
              onAfterChange={toastValue}
              disabledStep={disabledStep}
              tapToSeek={tapToSeek}
            />
          </List.Item>
        </List>
        <List renderHeader={'\u53CC\u6ED1\u5757(range)'}>
          <List.Item>
            <Slider
              marks={marks}
              ticks
              range
              defaultValue={[60, 40]}
              disabledStep={disabledStep}
              tapToSeek={tapToSeek}
            />
          </List.Item>
        </List>
        <List renderHeader={'\u5728\u62D6\u52A8\u65F6\u663E\u793A\u60AC\u6D6E\u63D0\u793A'}>
          <List.Item>
            <Slider popover disabledStep={disabledStep} tapToSeek={tapToSeek} />
          </List.Item>
        </List>
      </ScrollView>
    </Provider>
  )
}
`},70905:function(t,n){n.Z=`import { List, Provider, Stepper, Toast } from '@ant-design/react-native'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

export default function StepperExample() {
  return (
    <Provider>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : undefined}>
        <ScrollView>
          <List renderHeader={'\u57FA\u7840\u7528\u6CD5'}>
            <List.Item
              extra={
                <Stepper
                  defaultValue={1}
                  onChange={(value) => {
                    console.log(value)
                  }}
                />
              }>
              \u57FA\u7840\u7528\u6CD5
            </List.Item>
            <List.Item extra={<Stepper step={10} defaultValue={10} />}>
              \u6B65\u957F\u8BBE\u7F6E
            </List.Item>
            <List.Item extra={<Stepper min={-5} max={5} />}>
              \u9650\u5236\u8F93\u5165\u8303\u56F4
            </List.Item>
            <List.Item extra={<Stepper digits={1} />}>
              \u683C\u5F0F\u5316\u5230\u4E00\u4F4D\u5C0F\u6570
            </List.Item>
            <List.Item
              extra={
                <Stepper
                  defaultValue={93}
                  formatter={(value) => \`$ \${value}\`}
                  parser={(text) => parseFloat(text.replace('$', ''))}
                  onChange={(value) => {
                    console.log(value, typeof value)
                  }}
                />
              }>
              \u81EA\u5B9A\u4E49\u683C\u5F0F
            </List.Item>
          </List>
          <List renderHeader={'\u72B6\u6001/\u6837\u5F0F'}>
            <List.Item extra={<Stepper disabled />}>\u7981\u7528\u72B6\u6001</List.Item>
            <List.Item extra={<Stepper readOnly />}>\u8F93\u5165\u6846\u53EA\u8BFB\u72B6\u6001</List.Item>
            <List.Item
              extra={
                <Stepper
                  onFocus={() => {
                    Toast.info('\u83B7\u5F97\u7126\u70B9')
                  }}
                  onBlur={() => {
                    Toast.info('\u5931\u53BB\u7126\u70B9')
                  }}
                />
              }>
              \u83B7\u5F97/\u5931\u53BB\u7126\u70B9
            </List.Item>
            <List.Item
              extra={
                <Stepper
                  allowEmpty={true}
                  min={10}
                  max={20}
                  onChange={(value) => {
                    console.log(value)
                  }}
                />
              }>
              \u5141\u8BB8\u6E05\u7A7A
            </List.Item>
            <List.Item extra={<Stepper defaultValue={10000} step={10000} />}>
              \u81EA\u5B9A\u4E49\u6837\u5F0F
            </List.Item>
          </List>
          <StringModeExample />
        </ScrollView>
      </KeyboardAvoidingView>
    </Provider>
  )
}

const StringModeExample = () => {
  const [value, setValue] = React.useState('9999999999999999')
  return (
    <List renderHeader={'stringMode'}>
      <List.Item>
        <Stepper
          stringMode
          defaultValue="0.000000000000002"
          step="0.000000000000001"
          onChange={console.log}
          style={{ width: '100%' }}
        />
      </List.Item>
      <List renderHeader={'stringMode control'}>
        <List.Item>
          <Stepper
            stringMode
            value={value}
            step="13579"
            onChange={setValue}
            style={{ width: '100%' }}
          />
        </List.Item>
      </List>
    </List>
  )
}
`},59459:function(t,n){n.Z=`import { Icon, Steps, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
const Step = Steps.Step

export default class BasicTimelineExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      steps1: [
        { title: 'Finished', description: 'This is description' },
        { title: 'In Progress', description: 'This is description' },
        { title: 'Waiting', description: 'This is description' },
      ],
      steps2: [
        {
          title: 'Finished',
          description: 'This is description',
          status: 'finish',
        },
        {
          title: 'In Progress',
          description: 'This is description',
          status: 'process',
        },
        {
          title: 'Waiting',
          description: 'This is description',
          status: 'error',
        },
        {
          title: 'Waiting',
          description: 'This is description',
          status: 'wait',
        },
      ],
    }
  }
  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 60 }}>
          <WingBlank size="lg">
            <Steps size="small" current={1} direction="horizontal">
              {this.state.steps1.map((item: any, index: any) => (
                <Step
                  key={index}
                  title={
                    <View>
                      <Text>title:{item.title}</Text>
                    </View>
                  }
                  status={item.status}
                />
              ))}
            </Steps>
          </WingBlank>
        </View>
        <View style={{ marginTop: 60 }}>
          <WingBlank size="lg">
            <Steps size="small" current={1}>
              {this.state.steps1.map((item: any, index: any) => (
                <Step
                  key={index}
                  title={
                    <View>
                      <Text>title:{item.title}</Text>
                    </View>
                  }
                  description={
                    <View>
                      <Text>desc:{item.description}</Text>
                    </View>
                  }
                  status={item.status}
                />
              ))}
            </Steps>
          </WingBlank>
        </View>
        <View>
          <WingBlank size="lg">
            <Steps size="small">
              {this.state.steps2.map((item: any, index: any) => (
                <Step
                  key={index}
                  title={item.title}
                  description={item.description}
                  status={item.status}
                />
              ))}
            </Steps>
          </WingBlank>
        </View>
        <View>
          <WingBlank size="lg">
            <Steps current={1}>
              {this.state.steps1.map((item: any, index: any) => (
                <Step
                  key={index}
                  title={item.title}
                  description={item.description}
                  status={item.status}
                />
              ))}
            </Steps>
          </WingBlank>
        </View>
        <View>
          <WingBlank size="lg">
            <Steps>
              {this.state.steps2.map((item: any, index: any) => (
                <Step
                  key={index}
                  title={item.title}
                  description={item.description}
                  status={item.status}
                />
              ))}
            </Steps>
          </WingBlank>
        </View>
        <View>
          <WingBlank size="lg">
            <Steps current={1}>
              <Step
                key={0}
                title="Finished"
                description="This is description"
                status="finish"
              />
              <Step
                key={1}
                title="Progress"
                description="This is description"
                status="progress"
              />
              <Step
                key={2}
                title="Wait"
                description="This is description"
                status="wait"
                icon={<Icon name="down" size={20} color="white" />}
              />
            </Steps>
          </WingBlank>
        </View>
        <View>
          <WingBlank size="lg">
            <Steps current={1}>
              <Step
                key={0}
                title="Finished"
                description="This is description"
                status="finish"
                renderIcon={({ starting, waiting, error }) => {
                  let icon
                  if (starting) {
                    icon = <Icon name="home" />
                  } else if (waiting) {
                    icon = <Icon name="user" />
                  } else if (error) {
                    icon = <Icon name="star" />
                  }
                  return icon
                }}
              />
              <Step
                key={1}
                title="Progress"
                description="This is description"
                status="progress"
                renderIcon={({ starting, waiting, error }) => {
                  let icon
                  if (starting) {
                    icon = <Icon name="home" />
                  } else if (waiting) {
                    icon = <Icon name="user" />
                  } else if (error) {
                    icon = <Icon name="star" />
                  }
                  return icon
                }}
              />
              <Step
                key={2}
                title="Wait"
                description="This is description"
                status="wait"
                renderIcon={({ starting, waiting, error }) => {
                  let icon
                  if (starting) {
                    icon = <Icon name="home" />
                  } else if (waiting) {
                    icon = <Icon name="user" />
                  } else if (error) {
                    icon = <Icon name="star" />
                  }
                  return icon
                }}
              />
              <Step
                key={3}
                title="Wait"
                description="This is description"
                status="error"
                renderIcon={({ starting, waiting, error }) => {
                  let icon
                  if (starting) {
                    icon = <Icon name="home" />
                  } else if (waiting) {
                    icon = <Icon name="user" />
                  } else if (error) {
                    icon = <Icon name="star" />
                  }
                  return icon
                }}
              />
            </Steps>
          </WingBlank>
        </View>
      </ScrollView>
    )
  }
}
`},71024:function(t,n){n.Z=`import mergeWith from 'lodash.mergewith'
import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from 'react'
import defaultTheme from './themes/default'

export const ThemeContext = createContext(defaultTheme)
export type Theme = typeof defaultTheme & { [key: string]: any }
export type PartialTheme = Partial<Theme>
export interface ThemeProviderProps {
  value?: PartialTheme
  children?: ReactNode
}
export const ThemeProvider = (props: ThemeProviderProps) => {
  const { value, children } = props
  const theme = useMemo(() => ({ ...defaultTheme, ...value }), [value])
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
export interface UseThemeContextProps {
  theme?: PartialTheme
}

function customizer(objValue: any, srcValue: any) {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  } else {
    return [objValue, srcValue]
  }
}

// useTheme hook
export function useTheme<T>(props: {
  themeStyles: (theme: Theme) => T
  styles?: Partial<T>
}): T {
  const { themeStyles, styles } = props

  const theme = useContext(ThemeContext)

  const themeStylesMemo = useMemo(
    () => mergeWith(themeStyles(theme), styles, customizer),
    [styles, theme, themeStyles],
  )

  return themeStylesMemo
}

export interface WithThemeProps<T, S> {
  themeStyles?: (theme: Theme) => T
  styles?: S & { [key: string]: any }
  children: (
    // fix: styles[\`\${size}RawText\`]
    styles: T & { [key: string]: any },
    theme: Theme,
  ) => ReactNode
}

/**
 * Component can extends this props
 */
export type WithThemeStyles<T> = { styles?: Partial<T> }

export function WithTheme<T, S>(props: WithThemeProps<T, S>) {
  const { children, themeStyles, styles } = props

  const cache = useRef<T | any>(undefined)

  const getStyles = useCallback(
    (theme: Theme) => {
      if (!cache.current && themeStyles) {
        cache.current = themeStyles(theme)
      }

      if (cache.current) {
        return mergeWith(cache.current, styles, customizer)
      }
      return styles
    },
    [themeStyles, styles],
  )

  return (
    <ThemeContext.Consumer>
      {(theme) => children(getStyles(theme), theme)}
    </ThemeContext.Consumer>
  )
}
`},75975:function(t,n){n.Z=`const brandPrimary = '#108ee9'
const brandPrimaryTap = '#1284d6'

export default {
  // \u652F\u4ED8\u5B9D\u94B1\u5305\u9ED8\u8BA4\u4E3B\u9898
  // https://github.com/ant-design/ant-design-mobile/wiki/\u8BBE\u8BA1\u53D8\u91CF\u8868\u53CA\u547D\u540D\u89C4\u8303

  // \u8272\u5F69, NOTE: must use \`#000000\` instead of \`#000\`
  // https://facebook.github.io/react-native/docs/colors.html
  // 8-digit-hex to 4-digit hex https://css-tricks.com/8-digit-hex-codes/
  // https://www.chromestatus.com/feature/5685348285808640 chrome will support \`#RGBA\`
  // \u6587\u5B57\u8272
  color_text_base: '#000000', // \u57FA\u672C
  color_text_base_inverse: '#ffffff', // \u57FA\u672C _ \u53CD\u8272
  color_text_placeholder: '#bbbbbb', // \u6587\u672C\u6846\u63D0\u793A
  color_text_disabled: '#bbbbbb', // \u5931\u6548
  color_text_caption: '#888888', // \u8F85\u52A9\u63CF\u8FF0
  color_text_paragraph: '#333333', // \u6BB5\u843D
  color_link: brandPrimary, // \u94FE\u63A5
  color_icon_base: '#cccccc', // \u8BB8\u591A\u5C0F\u56FE\u6807\u7684\u80CC\u666F\uFF0C\u6BD4\u5982\u4E00\u4E9B\u5C0F\u5706\u70B9\uFF0C\u52A0\u51CF\u53F7

  // \u80CC\u666F\u8272
  fill_body: '#f5f5f9', // \u9875\u9762\u80CC\u666F
  fill_base: '#ffffff', // \u7EC4\u4EF6\u9ED8\u8BA4\u80CC\u666F
  fill_tap: '#dddddd', // \u7EC4\u4EF6\u9ED8\u8BA4\u80CC\u666F _ \u6309\u4E0B
  fill_disabled: '#dddddd', // \u901A\u7528\u5931\u6548\u80CC\u666F
  fill_mask: 'rgba(0, 0, 0, .4)', // \u906E\u7F69\u80CC\u666F
  fill_grey: '#f7f7f7',

  // \u5168\u5C40/\u54C1\u724C\u8272
  brand_primary: brandPrimary,
  brand_primary_tap: brandPrimaryTap,
  brand_success: '#6abf47',
  brand_warning: '#faad14',
  brand_error: '#f4333c', // \u9519\u8BEF(form validate)
  brand_important: '#ff5b05', // \u7528\u4E8E\u5C0F\u7EA2\u70B9

  // \u8FB9\u6846\u8272
  border_color_base: '#dddddd', // \u57FA\u7840\u7684
  border_color_thin: '#eeeeee', // \u66F4\u7EC6\u7684

  // \u5B57\u4F53\u5C3A\u5BF8
  // ---
  font_size_icontext: 10,
  font_size_caption_sm: 12,
  font_size_base: 14,
  font_size_subhead: 15,
  font_size_caption: 16,
  font_size_heading: 17,

  // \u5706\u89D2
  // ---
  radius_xs: 2,
  radius_sm: 3,
  radius_md: 5,
  radius_lg: 7,

  // \u8FB9\u6846\u5C3A\u5BF8
  // ---
  border_width_sm: 0.5,
  border_width_md: 1,
  border_width_lg: 2,

  // \u95F4\u8DDD
  // ---
  // \u6C34\u5E73\u95F4\u8DDD
  h_spacing_sm: 5,
  h_spacing_md: 8,
  h_spacing_lg: 15,

  // \u5782\u76F4\u95F4\u8DDD
  v_spacing_xs: 3,
  v_spacing_sm: 6,
  v_spacing_md: 9,
  v_spacing_lg: 15,
  v_spacing_xl: 21,

  // \u56FE\u6807\u5C3A\u5BF8
  // ---
  icon_size_xxs: 15,
  icon_size_xs: 18,
  icon_size_sm: 21,
  icon_size_md: 22, // \u5BFC\u822A\u6761\u4E0A\u7684\u56FE\u6807
  icon_size_lg: 36,

  // \u7EC4\u4EF6\u53D8\u91CF

  // action-sheet
  actionsheet_item_height: 50,
  actionsheet_item_font_size: 18,

  // button
  button_height: 47,
  button_font_size: 18,

  button_height_sm: 23,
  button_font_size_sm: 12,

  primary_button_fill: brandPrimary,
  primary_button_fill_tap: brandPrimaryTap,

  ghost_button_color: brandPrimary, // \u540C\u65F6\u5E94\u7528\u4E8E\u80CC\u666F\u3001\u6587\u5B57\u989C\u8272\u3001\u8FB9\u6846\u8272
  ghost_button_fill_tap: \`\${brandPrimary}99\`, // alpha 60%  https://codepen.io/chriscoyier/pen/XjbzAW

  warning_button_fill: '#e94f4f',
  warning_button_fill_tap: '#d24747',

  link_button_font_size: 16,

  // modal
  modal_font_size_heading: 18,
  modal_button_font_size: 18, // \u6309\u94AE\u5B57\u53F7
  modal_button_height: 50, // \u6309\u94AE\u9AD8\u5EA6

  // list
  list_item_height_sm: 35,
  list_item_height: 44,

  // tabs
  tabs_height: 42,
  tabs_font_size_heading: 15,

  // tab_bar
  tab_bar_fill: '#ebeeef',
  tab_bar_height: 50,

  // toast
  toast_fill: 'rgba(0, 0, 0, .8)',

  // search_bar
  search_bar_fill: '#efeff4',
  search_bar_height: 44,
  search_bar_input_height: 28,
  search_bar_font_size: 15,
  search_color_icon: '#bbbbbb', // input search icon \u7684\u80CC\u666F\u8272

  // notice_bar
  notice_bar_fill: '#fffada',
  notice_bar_height: 36,

  // checkbox
  checkbox_fill_disabled: '#f5f5f5',
  checkbox_border: '#d9d9d9',
  checkbox_border_disabled: '#b9b9b9',

  // switch
  switch_unchecked: '#cccccc',
  switch_unchecked_disabled: '#cccccc66', // switch_fill\u768440%\u900F\u660E\u5EA6

  // tag
  tag_height: 25,
  tag_small_height: 15,

  // picker
  picker_header_height: 44, // picker\u6807\u9898\u7684\u9AD8\u5EA6
  picker_item_height: 34, // picker item\u6700\u4F4E\u9AD8\u5EA6

  // form
  prefix_width: 65, // \u6C34\u5E73\u5E03\u5C40\u65F6\uFF0C\u8868\u5355\u9879\u7684\u6807\u7B7E\u5BBD\u5EA6
  prefix_padding: 6, // input item \u4E0A\u4E0B\u5185\u8FB9\u8DDD
  extra_max_width: '70%', // list extra\u5BBD\u5EA6

  // tooltip
  tooltip_dark: 'rgba(0, 0, 0, 0.9)',
  tooltip_border_radius: 8,
  tooltip_arrow_size: 8,

  toast_zindex: 1999,
  action_sheet_zindex: 1000,
  popup_zindex: 999,
  modal_zindex: 999,
  tooltip_zindex: 999,
  switch_inner_zindex: -1,
}
`},61416:function(t,n){n.Z=`import { List, SwipeAction } from '@ant-design/react-native'
import React from 'react'
import { View } from 'react-native'

export default class BasicSwipeActionExample extends React.Component<any, any> {
  asyncFunction = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('asd')
        resolve(123)
      }, 1500)
    })
  }

  render() {
    const right = [
      {
        text: 'More',
        onPress: async () => {
          await this.asyncFunction()
        },
        backgroundColor: 'orange',
        color: 'white',
      },
      {
        text: 'Delete',
        onPress: () => console.log('delete'),
        backgroundColor: 'red',
        color: 'white',
      },
    ]
    const left = [
      {
        text: 'Read',
        onPress: () => console.log('read'),
        backgroundColor: 'blue',
        color: 'white',
      },
      {
        text: 'Reply',
        onPress: () => console.log('reply'),
        backgroundColor: 'green',
        color: 'white',
      },
    ]

    return (
      <View style={{ paddingTop: 30 }}>
        <List>
          <SwipeAction
            right={right}
            left={left}
            closeOnAction
            closeOnTouchOutside>
            <List.Item extra="extra content">
              Simple example: left and right buttons
            </List.Item>
          </SwipeAction>
        </List>
        <List>
          <SwipeAction
            right={right}
            left={left}
            closeOnAction={false}
            closeOnTouchOutside
            onSwipeableOpen={() => console.log('open')}
            onSwipeableClose={() => console.log('close')}>
            <List.Item extra="extra content">
              Simple example: left and right buttons
            </List.Item>
          </SwipeAction>
        </List>
      </View>
    )
  }
}
`},37455:function(t,n){n.Z=`import { Button, Icon, List, Switch, WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default class SwitchExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      disabled: true,
      checked: false,
    }
  }

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    })
  }

  sleep1s = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
  }

  onChangeAsync = async (val: boolean) => {
    await this.sleep1s()
    this.setState({
      checked: val,
    })
  }

  render() {
    return (
      <ScrollView>
        <List renderHeader="\u57FA\u672C">
          <List.Item extra={<Switch />}>\u6700\u7B80\u5355\u7684\u7528\u6CD5</List.Item>
        </List>
        <List renderHeader="\u4E0D\u53EF\u7528">
          <List.Item extra={<Switch disabled={this.state.disabled} />}>
            Switch \u5931\u6548\u72B6\u6001
          </List.Item>
          <WhiteSpace />
          <WingBlank>
            <Button type="primary" onPress={this.toggle}>
              Toggle disabled
            </Button>
          </WingBlank>
        </List>
        <List renderHeader="\u6587\u5B57\u548C\u56FE\u6807">
          <List.Item
            extra={
              <Switch
                checkedChildren="\u5F00"
                unCheckedChildren="\u5173"
                defaultChecked
              />
            }
          />
          <List.Item
            extra={<Switch checkedChildren="1" unCheckedChildren="0" />}
          />
          <List.Item
            extra={
              <Switch
                checkedChildren={<Icon name="check" color="white" />}
                unCheckedChildren={<Icon name="close" color="white" />}
                defaultChecked
              />
            }
          />
        </List>
        <List renderHeader="\u52A0\u8F7D\u4E2D">
          <List.Item extra={<Switch checked loading />}>
            \u6807\u8BC6\u5F00\u5173\u64CD\u4F5C\u4ECD\u5728\u6267\u884C\u4E2D
          </List.Item>
          <List.Item extra={<Switch loading />} />
        </List>
        <List renderHeader="\u989C\u8272">
          <List.Item extra={<Switch checked color="red" />}>
            color="red"
          </List.Item>
        </List>
        <List renderHeader="\u5F02\u6B65">
          <List.Item
            extra={
              <Switch
                checked={this.state.checked}
                onChange={this.onChangeAsync}
              />
            }>
            onChange \u8FD4\u56DE Promise
          </List.Item>
        </List>
      </ScrollView>
    )
  }
}
`},58586:function(t,n){n.Z=`import { Icon, SearchBar, TabBar } from '@ant-design/react-native'
import React from 'react'
import { Text, View } from 'react-native'

export default class BasicTabBarExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      selectedTab: 'redTab',
    }
  }

  renderContent(pageText: any) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <SearchBar placeholder="Search" showCancelButton />
        <Text style={{ margin: 50 }}>{pageText}</Text>
      </View>
    )
  }

  onChangeTab(tabName: any) {
    this.setState({
      selectedTab: tabName,
    })
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5">
        <TabBar.Item
          title="Life"
          icon={<Icon name="home" />}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => this.onChangeTab('blueTab')}>
          {this.renderContent('Life Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="ordered-list" />}
          title="Koubei"
          badge={2}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => this.onChangeTab('redTab')}>
          {this.renderContent('Koubei Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="like" />}
          title="Friend"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => this.onChangeTab('greenTab')}>
          {this.renderContent('Friend Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="user" />}
          title="My"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => this.onChangeTab('yellowTab')}>
          {this.renderContent('My Tab')}
        </TabBar.Item>
      </TabBar>
    )
  }
}
`},78806:function(t,n){n.Z=`import React, { isValidElement } from 'react'
import {
  Animated,
  Dimensions,
  LayoutChangeEvent,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { Theme, WithTheme, WithThemeStyles } from '../style'
import { TabBarPropsType, TabData } from './PropsType'
import TabBarStyles, { TabBarStyle } from './style'

const WINDOW_WIDTH = Dimensions.get('window').width

export interface PropsType
  extends TabBarPropsType,
    WithThemeStyles<TabBarStyle> {
  scrollValue?: any
  tabStyle?: ViewStyle
  tabsContainerStyle?: ViewStyle
  keyboardShouldPersistTaps?: boolean
}

export interface StateType {
  _leftTabUnderline: Animated.Value
  _widthTabUnderline: Animated.Value
  _containerWidth: number
  _tabContainerWidth: number
}
export class DefaultTabBar extends React.PureComponent<PropsType, StateType> {
  static defaultProps = {
    animated: true,
    tabs: [],
    goToTab: () => {},
    activeTab: 0,
    page: 5,
    tabBarUnderlineStyle: {},
    tabBarBackgroundColor: '#fff',
    tabBarActiveTextColor: '',
    tabBarInactiveTextColor: '',
    tabBarTextStyle: {},
  }

  _tabsMeasurements: any[] = []
  _tabContainerMeasurements: any
  _containerMeasurements: any
  _scrollView: ScrollView
  _newLineLeft: number

  constructor(props: PropsType) {
    super(props)
    this.state = {
      _leftTabUnderline: new Animated.Value(0),
      _widthTabUnderline: new Animated.Value(0),
      _containerWidth: WINDOW_WIDTH,
      _tabContainerWidth: WINDOW_WIDTH,
    }
  }

  componentDidMount() {
    this.props.scrollValue.addListener(this.updateView)
  }

  updateView = (offset: any) => {
    const position = Math.floor(offset.value)
    const pageOffset = offset.value % 1
    const tabCount = this.props.tabs.length
    const lastTabPosition = tabCount - 1

    if (tabCount === 0 || offset.value < 0 || offset.value > lastTabPosition) {
      return
    }

    if (
      this.necessarilyMeasurementsCompleted(
        position,
        position === lastTabPosition,
      )
    ) {
      this.updateTabPanel(position, pageOffset)
      this.updateTabUnderline(position, pageOffset, tabCount)
    }
  }

  necessarilyMeasurementsCompleted(position: number, isLastTab: boolean) {
    return (
      this._tabsMeasurements[position] &&
      (isLastTab || this._tabsMeasurements[position + 1]) &&
      this._tabContainerMeasurements &&
      this._containerMeasurements
    )
  }

  updateTabPanel(position: number, pageOffset: number) {
    const containerWidth = this._containerMeasurements.width
    const tabWidth = this._tabsMeasurements[position].width
    const nextTabMeasurements = this._tabsMeasurements[position + 1]
    const nextTabWidth = (nextTabMeasurements && nextTabMeasurements.width) || 0
    const tabOffset = this._tabsMeasurements[position].left
    const absolutePageOffset = pageOffset * tabWidth
    let newScrollX = tabOffset + absolutePageOffset

    newScrollX -=
      (containerWidth -
        (1 - pageOffset) * tabWidth -
        pageOffset * nextTabWidth) /
      2
    newScrollX = newScrollX >= 0 ? newScrollX : 0

    if (Platform.OS === 'android') {
      this._scrollView?.scrollTo({ x: newScrollX, y: 0 })
    } else {
      const rightBoundScroll =
        this._tabContainerMeasurements.width - this._containerMeasurements.width
      newScrollX = newScrollX > rightBoundScroll ? rightBoundScroll : newScrollX
      this._scrollView?.scrollTo({ x: newScrollX, y: 0 })
    }
  }

  updateTabUnderline(position: number, pageOffset: number, tabCount: number) {
    if (position >= 0 && position <= tabCount - 1) {
      const nowLeft = this._tabsMeasurements[position].left
      const nowRight = this._tabsMeasurements[position].right
      const nextTabLeft = this._tabsMeasurements[position + 1]?.left || 0
      const nextTabRight = this._tabsMeasurements[position + 1]?.right || 0

      const newLineLeft = pageOffset * nextTabLeft + (1 - pageOffset) * nowLeft
      const newLineRight =
        pageOffset * nextTabRight + (1 - pageOffset) * nowRight

      if (this._newLineLeft === newLineLeft) {
        return
      }
      this._newLineLeft = newLineLeft
      if (this.props.animated) {
        Animated.timing(this.state._leftTabUnderline, {
          toValue: newLineLeft,
          useNativeDriver: false,
        }).start()
        Animated.timing(this.state._widthTabUnderline, {
          toValue: newLineRight - newLineLeft,
          useNativeDriver: false,
        }).start()
      } else {
        this.state._leftTabUnderline.setValue(newLineLeft)
        this.state._widthTabUnderline.setValue(newLineRight - newLineLeft)
      }
    }
  }

  onPress = (index: number) => {
    const { goToTab, onTabClick, tabs } = this.props
    // tslint:disable-next-line:no-unused-expression
    onTabClick && onTabClick(tabs[index], index)
    // tslint:disable-next-line:no-unused-expression
    goToTab && goToTab(index)
  }

  renderTab = (
    tab: TabData,
    index: number,
    width: number,
    onLayoutHandler: any,
    styles: ReturnType<typeof TabBarStyles>,
    theme: Theme,
  ) => {
    const {
      tabBarActiveTextColor: activeTextColor,
      tabBarInactiveTextColor: inactiveTextColor,
      tabBarTextStyle: textStyle,
      activeTab,
      renderTab,
    } = this.props
    const isTabActive = activeTab === index
    const textColor = isTabActive
      ? activeTextColor || theme.activeTextColor
      : inactiveTextColor || theme.inactiveTextColor

    return (
      <TouchableOpacity
        activeOpacity={1}
        key={\`\${tab.title}_\${index}\`}
        accessible
        accessibilityRole="button"
        onPress={() => this.onPress(index)}
        onLayout={onLayoutHandler}>
        <View
          style={{
            ...StyleSheet.flatten(styles.tab),
            minWidth: width,
            ...this.props.tabStyle,
          }}>
          {renderTab ? (
            renderTab(tab)
          ) : isValidElement(tab.title) ? (
            tab.title
          ) : (
            <Text
              style={[
                {
                  color: textColor,
                  ...StyleSheet.flatten(styles.textStyle),
                },
                textStyle,
              ]}>
              {tab.title}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    )
  }

  measureTab = (page: number, event: any) => {
    const { x, width, height } = event.nativeEvent.layout
    this._tabsMeasurements[page] = { left: x, right: x + width, width, height }
    this.updateView({ value: this.props.scrollValue._value })
  }

  getTabs = (styles: TabBarStyle, theme: Theme) => {
    const { tabs, page = 0 } = this.props
    return tabs.map((name, index) => {
      let tab = { title: name } as TabData
      if (tabs.length - 1 >= index) {
        tab = tabs[index]
      }
      const tabWidth = this.state._containerWidth / Math.min(page, tabs.length)

      return this.renderTab(
        tab,
        index,
        tabWidth,
        this.measureTab.bind(this, index),
        styles,
        theme,
      )
    })
  }

  getUnderLine = (styles: TabBarStyle) => {
    const { tabBarUnderlineStyle, renderUnderline } = this.props

    const tabUnderlineStyle = {
      position: 'absolute',
      bottom: 0,
      ...StyleSheet.flatten(styles.underline),
      ...StyleSheet.flatten(tabBarUnderlineStyle),
    }

    const dynamicTabUnderline = {
      left: this.state._leftTabUnderline,
      width: this.state._widthTabUnderline,
    }
    const underlineProps = {
      style: {
        ...dynamicTabUnderline,
        ...tabUnderlineStyle,
      },
    }
    return renderUnderline ? (
      renderUnderline(underlineProps.style)
    ) : (
      //@ts-ignore
      <Animated.View {...underlineProps} />
    )
  }

  render() {
    const {
      tabs,
      page = 0,
      tabBarBackgroundColor,
      tabsContainerStyle,
      keyboardShouldPersistTaps,
    } = this.props
    return (
      <WithTheme styles={this.props.styles} themeStyles={TabBarStyles}>
        {(styles, theme) => {
          return (
            <View
              style={[
                styles.container,
                {
                  backgroundColor: tabBarBackgroundColor,
                },
              ]}
              onLayout={this.onContainerLayout}>
              <ScrollView
                ref={(scrollView: any) => {
                  this._scrollView = scrollView
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                directionalLockEnabled
                bounces={false}
                scrollsToTop={false}
                scrollEnabled={tabs.length > page}
                keyboardShouldPersistTaps={keyboardShouldPersistTaps}
                renderToHardwareTextureAndroid>
                <View
                  style={[
                    styles.tabs,
                    tabsContainerStyle,
                    { backgroundColor: tabBarBackgroundColor },
                  ]}
                  onLayout={this.onTabContainerLayout}>
                  {this.getTabs(styles, theme)}
                  {this.getUnderLine(styles)}
                </View>
              </ScrollView>
            </View>
          )
        }}
      </WithTheme>
    )
  }

  onTabContainerLayout = (e: LayoutChangeEvent) => {
    this._tabContainerMeasurements = e.nativeEvent.layout
    const width = this._tabContainerMeasurements.width
    // fix: https://github.com/ant-design/ant-design-mobile-rn/issues/162
    // if (width < WINDOW_WIDTH) {
    // width = WINDOW_WIDTH;
    // }
    this.setState({ _tabContainerWidth: width })
    this.updateView({ value: this.props.scrollValue._value })
  }

  onContainerLayout = (e: LayoutChangeEvent) => {
    this._containerMeasurements = e.nativeEvent.layout
    this.setState({ _containerWidth: this._containerMeasurements.width })
    this.updateView({ value: this.props.scrollValue._value })
  }
}
`},94985:function(t,n){n.Z=`import React from 'react'
import { Animated, Dimensions, LayoutChangeEvent } from 'react-native'
import Carousel from '../carousel/index'
import { WithTheme, WithThemeStyles } from '../style'
import View from '../view'
import { DefaultTabBar } from './DefaultTabBar'
import { PropsType, TabData } from './PropsType'
import TabsStyles, { TabsStyle } from './style/tabs'

export interface StateType {
  currentTab: number
  scrollX: Animated.Value
  scrollValue: Animated.Value
  containerWidth: number
  containerHeight: number
  selectedIndex: number
}

let instanceId: number = 0
export interface TabsProps extends PropsType, WithThemeStyles<TabsStyle> {}
export class Tabs extends React.PureComponent<TabsProps, StateType> {
  static defaultProps: PropsType = {
    tabBarPosition: 'top',
    initialPage: 0,
    swipeable: true,
    animated: true,
    prerenderingSiblingsNumber: 1,
    tabs: [],
    destroyInactiveTab: false,
    usePaged: true,
    tabDirection: 'horizontal',
    distanceToChangeTab: 0.3,
    style: {},
  }
  static DefaultTabBar = DefaultTabBar

  carousel: Carousel | null

  protected instanceId: number
  protected prevCurrentTab: number
  protected tabCache: { [index: number]: React.ReactNode } = {}

  constructor(props: PropsType) {
    super(props)

    const width = Dimensions.get('window').width
    const pageIndex = this.getTabIndex(props)
    this.state = {
      currentTab: pageIndex,
      scrollX: new Animated.Value(pageIndex * width),
      scrollValue: new Animated.Value(pageIndex),
      containerWidth: width,
      containerHeight: 0,
      selectedIndex: 0,
    }
    this.instanceId = instanceId++
  }

  componentDidMount() {
    this.prevCurrentTab = this.state.currentTab
    this.state.scrollX.addListener(({ value }) => {
      const scrollValue = value / this.state.containerWidth
      this.state.scrollValue.setValue(scrollValue)
    })
  }

  renderContent = (getSubElements = this.getSubElements()) => {
    const { tabs, destroyInactiveTab } = this.props
    const { containerHeight = 0, containerWidth = 0, currentTab } = this.state
    const content = tabs.map((tab, index) => {
      const key = tab.key || \`tab_\${index}\`

      // update tab cache
      if (this.shouldRenderTab(index)) {
        this.tabCache[index] = this.getSubElement(tab, index, getSubElements)
      } else if (destroyInactiveTab) {
        this.tabCache[index] = undefined
      }

      return (
        <View
          key={key}
          style={[
            { width: containerWidth },
            containerHeight ? { height: containerHeight } : { flex: 1 },
          ]}>
          {this.tabCache[index]}
        </View>
      )
    })

    return (
      <Carousel
        key="$content"
        keyboardDismissMode="on-drag"
        pagination={() => null}
        selectedIndex={currentTab}
        afterChange={(index: number) => {
          typeof this.props.onChange === 'function' &&
            this.props.onChange(tabs[index], index)

          this.setState({ currentTab: index }, () => {
            this.state.scrollX.setValue(index * this.state.containerWidth)
          })
        }}
        scrollEnabled={this.props.swipeable}
        style={{
          height: containerHeight,
          width: containerWidth,
        }}
        ref={(ref) => (this.carousel = ref)}>
        {content}
      </Carousel>
    )
  }

  // \u5728ScrollView\u4E0B\u4F1A\u62FF\u4E0D\u5230\u6B63\u786E\u9AD8\u5EA6
  // \u6240\u4EE5\u5148\u5C55\u793A\u7B2C\u4E00\u4E2A\u62FF\u5230\u9AD8\u5EA6\u540E\u518D\u4EE5\u7B2C\u4E00\u4E2A\u9AD8\u5EA6\u4E3A\u57FA\u51C6\u6E32\u67D3\u6574\u4E2ACarousel
  handleLayout1 = (e: LayoutChangeEvent) => {
    const { height } = e.nativeEvent.layout
    requestAnimationFrame(() => {
      this.setState({ containerHeight: height })
    })
  }

  handleLayout2 = (e: LayoutChangeEvent) => {
    const { width } = e.nativeEvent.layout
    requestAnimationFrame(() => {
      this.scrollTo(this.state.currentTab, false)
    })
    if (Math.round(width) !== Math.round(this.state.containerWidth)) {
      this.setState({ containerWidth: width })
    }
  }

  scrollTo = (index: number, animated = true) => {
    if (this.carousel) {
      this.carousel.goTo(index, animated)
    }
  }

  render() {
    const {
      children,
      tabBarPosition,
      noRenderContent,
      keyboardShouldPersistTaps,
    } = this.props
    const { scrollX, scrollValue, containerWidth, containerHeight } = this.state

    const tabBarProps = {
      ...this.getTabBarBaseProps(),

      keyboardShouldPersistTaps,
      scrollX: scrollX,
      scrollValue: scrollValue,
      containerWidth: containerWidth,
    }

    return (
      <WithTheme styles={this.props.styles} themeStyles={TabsStyles}>
        {(styles) => {
          const content = [
            <View
              key="$tabbar"
              style={
                tabBarPosition === 'top'
                  ? styles.topTabBarSplitLine
                  : styles.bottomTabBarSplitLine
              }>
              {this.renderTabBar(tabBarProps, DefaultTabBar)}
            </View>,
            !noRenderContent && this.renderContent(),
          ]

          if (containerHeight === 0 && Array.isArray(children)) {
            return (
              <View
                style={[
                  { flexDirection: 'row' },
                  styles.container,
                  this.props.style,
                ]}
                onLayout={this.handleLayout1}>
                {React.Children.toArray(children)[0]}
              </View>
            )
          }

          return (
            <View
              style={[styles.container, this.props.style]}
              onLayout={this.handleLayout2}>
              {tabBarPosition === 'top' ? content : content.reverse()}
            </View>
          )
        }}
      </WithTheme>
    )
  }
  getTabIndex(props: PropsType) {
    const { page, initialPage, tabs } = props
    const param = (page !== undefined ? page : initialPage) || 0

    let index = 0
    if (typeof (param as any) === 'string') {
      tabs.forEach((t, i) => {
        if (t.key === param) {
          index = i
        }
      })
    } else {
      index = (param as number) || 0
    }
    return index < 0 ? 0 : index
  }

  isTabVertical = (direction = this.props.tabDirection) =>
    direction === 'vertical'

  shouldRenderTab = (idx: number) => {
    const { prerenderingSiblingsNumber = 0, usePaged } = this.props
    const { currentTab = 0 } = this.state

    return (
      !usePaged ||
      (currentTab - prerenderingSiblingsNumber <= idx &&
        idx <= currentTab + prerenderingSiblingsNumber)
    )
  }

  UNSAFE_componentWillReceiveProps(nextProps: PropsType) {
    if (this.props.page !== nextProps.page && nextProps.page !== undefined) {
      this.goToTab(this.getTabIndex(nextProps))
    }
  }

  componentDidUpdate() {
    this.prevCurrentTab = this.state.currentTab
  }

  getOffsetIndex = (
    current: number,
    width: number,
    threshold = this.props.distanceToChangeTab || 0,
  ) => {
    const ratio = Math.abs(current / width)
    const direction = ratio > this.state.currentTab ? '<' : '>'
    const index = Math.floor(ratio)
    switch (direction) {
      case '<':
        return ratio - index > threshold ? index + 1 : index
      case '>':
        return 1 - ratio + index > threshold ? index : index + 1
      default:
        return Math.round(ratio)
    }
  }

  goToTab(index: number) {
    if (this.carousel) {
      this.carousel.goTo(index, this.props.animated)
    }
    this.setState({ currentTab: index }, () => {
      this.state.scrollX.setValue(index * this.state.containerWidth)
    })
  }

  tabClickGoToTab(index: number) {
    this.goToTab(index)
  }

  getTabBarBaseProps() {
    const { currentTab } = this.state

    const {
      animated,
      onTabClick,
      tabBarActiveTextColor,
      tabBarBackgroundColor,
      tabBarInactiveTextColor,
      tabBarPosition,
      tabBarTextStyle,
      tabBarUnderlineStyle,
      renderTab,
      renderUnderline,
      tabs,
    } = this.props
    return {
      activeTab: currentTab,
      animated: !!animated,
      goToTab: this.tabClickGoToTab.bind(this),
      onTabClick,
      tabBarActiveTextColor,
      tabBarBackgroundColor,
      tabBarInactiveTextColor,
      tabBarPosition,
      tabBarTextStyle,
      tabBarUnderlineStyle,
      renderTab,
      renderUnderline,
      tabs,
      instanceId: this.instanceId,
    }
  }

  renderTabBar(tabBarProps: any, DefaultTabBarComponent: React.ComponentClass) {
    const { renderTabBar } = this.props
    if (renderTabBar === false) {
      return null
    } else if (renderTabBar) {
      return renderTabBar(tabBarProps)
    } else {
      return <DefaultTabBarComponent {...tabBarProps} />
    }
  }

  getSubElements = () => {
    const { children } = this.props
    const subElements: { [key: string]: React.ReactNode } = {}

    return (defaultPrefix: string = '$i$-') => {
      if (Array.isArray(children)) {
        children.forEach((child: any, index) => {
          if (child.key) {
            subElements[child.key] = child
          }
          subElements[\`\${defaultPrefix}\${index}\`] = child
        })
      }
      return subElements
    }
  }

  getSubElement(
    tab: TabData,
    index: number,
    subElements: (
      defaultPrefix: string,
      allPrefix: string,
    ) => { [key: string]: any },
    defaultPrefix: string = '$i$-',
    allPrefix: string = '$ALL$',
  ) {
    const key = tab.key || \`\${defaultPrefix}\${index}\`
    const elements = subElements(defaultPrefix, allPrefix)
    let component = elements[key] || elements[allPrefix]
    if (component instanceof Function) {
      component = component(tab, index)
    }
    return component || null
  }
}
`},88470:function(t,n){n.Z=`import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Tabs from '..'

const renderContent = (tab: any, index: any) => {
  const style = {
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#ddd',
  } as any
  const content = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
    return (
      <View key={\`\${index}_\${i}\`} style={style}>
        <Text>
          {tab.title} - {i}
        </Text>
      </View>
    )
  })
  return (
    <ScrollView key={index} style={{ backgroundColor: '#fff' }}>
      {content}
    </ScrollView>
  )
}

export default class BasicTabsExample extends React.Component<any, any> {
  render() {
    const tabs = [
      { title: 'First Tab' },
      { title: 'Second Tab' },
      { title: 'Third Tab' },
    ]
    const tabs2 = [
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' },
      { title: '6th Tab' },
      { title: '7th Tab' },
      { title: '8th Tab' },
      { title: '9th Tab' },
    ]
    const style = {
      alignItems: 'center',
      justifyContent: 'center',
      height: 150,
      backgroundColor: '#fff',
    } as any
    return (
      <View style={{ flex: 1 }}>
        <Tabs tabs={tabs}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
        <Text style={{ margin: 16 }}>Custom RenderTabBar</Text>
        <Tabs
          tabs={tabs}
          renderTabBar={(tabProps) => (
            <View
              style={{
                paddingHorizontal: 16,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              {tabProps.tabs.map((tab, i) => (
                // change the style to fit your needs
                <TouchableOpacity
                  activeOpacity={0.9}
                  key={tab.key || i}
                  style={{
                    // width: '30%',
                    padding: 6,
                  }}
                  onPress={() => {
                    const { goToTab, onTabClick } = tabProps
                    // tslint:disable-next-line:no-unused-expression
                    onTabClick && onTabClick(tabs[i], i)
                    // tslint:disable-next-line:no-unused-expression
                    goToTab && goToTab(i)
                  }}>
                  <Text
                    style={{
                      color: tabProps.activeTab === i ? 'green' : '#333333',
                    }}>
                    {tab.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}>
          <View style={style}>
            <Text>Content of First Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Second Tab</Text>
          </View>
          <View style={style}>
            <Text>Content of Third Tab</Text>
          </View>
        </Tabs>
        <View style={{ flex: 2 }}>
          <Tabs tabs={tabs2} initialPage={1} tabBarPosition="top">
            {tabs2.map((tab, index) => renderContent(tab, index))}
          </Tabs>
        </View>
      </View>
    )
  }
}

export const title = 'Tabs'
export const description = 'Tabs example'
`},49630:function(t,n){n.Z=`import { Tabs } from './Tabs'

export default Tabs
`},36498:function(t,n){n.Z=`import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface TabBarStyle {
  container: ViewStyle
  tabs: ViewStyle
  tab: ViewStyle
  underline: ViewStyle
  textStyle: TextStyle
}
export default (theme: Theme) =>
  StyleSheet.create<TabBarStyle>({
    container: {},
    tabs: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: theme.fill_base,
      justifyContent: 'space-around',
      shadowRadius: 0,
      shadowOpacity: 0,
      elevation: 0,
    },
    tab: {
      height: theme.tabs_height,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      flexDirection: 'row',
    },
    underline: {
      height: 2,
      backgroundColor: theme.brand_primary,
    },
    textStyle: {
      fontSize: theme.tabs_font_size_heading,
    },
  })
`},17779:function(t,n){n.Z=`import { StyleSheet, ViewStyle } from 'react-native'
import { Theme } from '../../style'
export interface TabsStyle {
  container: ViewStyle
  topTabBarSplitLine: ViewStyle
  bottomTabBarSplitLine: ViewStyle
}
export default (theme: Theme) =>
  StyleSheet.create<TabsStyle>({
    container: {
      flex: 1,
    },
    topTabBarSplitLine: {
      borderBottomColor: theme.border_color_base,
      borderBottomWidth: 1,
    },
    bottomTabBarSplitLine: {
      borderTopColor: theme.border_color_base,
      borderTopWidth: 1,
    },
  })
`},1957:function(t,n){n.Z=`import { Tag, WhiteSpace } from '@ant-design/react-native'
import React from 'react'
import { View } from 'react-native'

function onChange(selected: any) {
  console.log(\`tag selected: \${selected}\`)
}

export default class BasicTagExample extends React.Component<any, any> {
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Tag>Basic</Tag>
        <WhiteSpace />
        <Tag selected>Selected</Tag>
        <WhiteSpace />
        <Tag disabled>Disabled</Tag>
        <WhiteSpace />
        <Tag onChange={onChange}>Callback</Tag>
        <WhiteSpace />
        <Tag
          closable
          onClose={() => {
            console.log('onClose')
          }}
          afterClose={() => {
            console.log('afterClose')
          }}>
          Closable
        </Tag>
        <WhiteSpace />
        <Tag small>Small and Readonly</Tag>
        <WhiteSpace />
        <Tag
          onLongPress={() => {
            console.log('onLongPress')
          }}>
          LongPress
        </Tag>
      </View>
    )
  }
}
`},20738:function(t,n){n.Z=`import { List, TextareaItem, Toast } from '@ant-design/react-native'
import React from 'react'
import { ScrollView } from 'react-native'

export default class BasicTextAreaItemExample extends React.Component<
  any,
  any
> {
  constructor(props: any) {
    super(props)
    this.state = {
      val: '\u9ED8\u8BA4\u5E26value',
    }
  }

  onChange = (val: any) => {
    // console.log(val);
    this.setState({ val })
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <List renderHeader={'\u57FA\u672C'}>
          <TextareaItem rows={4} placeholder="\u56FA\u5B9A\u884C\u6570" />

          <TextareaItem rows={4} placeholder="\u591A\u884C\u5E26\u8BA1\u6570" count={100} />

          <TextareaItem
            rows={4}
            placeholder="\u9AD8\u5EA6\u81EA\u9002\u5E94"
            autoHeight
            style={{ paddingVertical: 5 }}
          />

          <TextareaItem value={this.state.val} onChange={this.onChange} />

          <TextareaItem value="\u4E0D\u53EF\u7F16\u8F91 editable = {false}" editable={false} />

          <TextareaItem clear={false} placeholder="\u4E0D\u663E\u793A\u6E05\u9664\u6309\u94AE" />

          <TextareaItem
            error
            defaultValue="\u62A5\u9519\u6837\u5F0F error={true}"
            onErrorClick={() => Toast.fail('Error message')}
          />
        </List>
      </ScrollView>
    )
  }
}
`},29256:function(t,n){n.Z=`import { Button, List, Provider, Switch, Toast } from '@ant-design/react-native'
import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, ScrollView, Text } from 'react-native'

const ToastExample = () => {
  const handler = useRef<number>()
  const [enableMask, setEnableMask] = useState(Toast.getConfig().mask)
  const [enableStack, setEnableStack] = useState(Toast.getConfig().stackable)

  return (
    <Provider>
      <ScrollView>
        <List>
          <List.Item
            extra={
              <Switch
                checked={enableMask}
                onChange={(mask) => {
                  Toast.config({ mask })
                  setEnableMask(Toast.getConfig().mask)
                }}
              />
            }>
            Enable mask
            <List.Item.Brief>\u662F\u5426\u663E\u793A\u900F\u660E\u8499\u5C42\uFF0C\u9632\u6B62\u89E6\u6478\u7A7F\u900F</List.Item.Brief>
          </List.Item>
          <List.Item
            extra={
              <Switch
                checked={enableStack}
                onChange={(stackable) => {
                  Toast.config({ stackable })
                  setEnableStack(Toast.getConfig().stackable)
                }}
              />
            }>
            Enable stackable
            <List.Item.Brief>\u662F\u5426\u5141\u8BB8\u53E0\u52A0\u663E\u793A</List.Item.Brief>
          </List.Item>
        </List>
        <List renderHeader="\u56FE\u6807">
          <Button
            onPress={() => {
              Toast.success('Success')
            }}>
            \u6210\u529F
          </Button>
          <Button
            onPress={() => {
              Toast.fail('Fail')
            }}>
            \u5931\u8D25
          </Button>
          <Button
            onPress={() => {
              Toast.offline('Network connection failed !!!')
            }}>
            \u7F51\u7EDC\u5931\u8D25
          </Button>
          <Button
            onPress={() => {
              Toast.loading('loading...')
            }}>
            \u52A0\u8F7D\u4E2D
          </Button>
          <Button
            onPress={() => {
              Toast.show({
                content: '\u4E0A\u4F20\u4E2D',
                icon: <ActivityIndicator />,
              })
            }}>
            \u81EA\u5B9A\u4E49\u56FE\u6807
          </Button>
        </List>
        <List renderHeader="\u66F4\u591A\u529F\u80FD">
          <Button
            onPress={() => {
              Toast.show({
                content: 'Hello World',
                position: 'top',
              })
            }}>
            \u9876\u90E8\u63D0\u793A
          </Button>
          <Button
            onPress={() => {
              Toast.show({
                content: 'Hello World',
                position: 'bottom',
              })
            }}>
            \u5E95\u90E8\u63D0\u793A
          </Button>
          <Button
            onPress={() => {
              Toast.show({
                icon: 'loading',
                content: <CountDownText />,
                duration: 5,
              })
            }}>
            \u52A8\u6001\u5185\u5BB9
          </Button>
        </List>
        <List renderHeader="\u624B\u52A8\u6E05\u9664">
          <Button
            onPress={() => {
              handler.current = Toast.show({
                content: '\u8FD9\u6761\u63D0\u793A\u4E0D\u4F1A\u81EA\u52A8\u6D88\u5931',
                duration: 0,
                position: 'top',
                mask: false,
              })
            }}>
            \u663E\u793A
          </Button>
          <Button
            onPress={() => {
              handler.current && Toast.remove(handler.current)
            }}>
            \u6E05\u9664
          </Button>
          <Button
            onPress={() => {
              Toast.removeAll()
            }}>
            \u5173\u95ED\u6240\u6709
          </Button>
        </List>
      </ScrollView>
    </Provider>
  )
}

export default ToastExample

const CountDownText = () => {
  const [count, setCount] = useState(5)
  const interval = useRef<any>()
  useEffect(() => {
    interval.current = setInterval(() => {
      setCount((x) => {
        if (x > 1) {
          return x - 1
        } else {
          return x
        }
      })
    }, 1000)
    return () => {
      interval.current && clearInterval(interval.current)
    }
  }, [])
  return <Text style={{ color: '#ffffff' }}>\u8FD8\u5269 {count} \u79D2</Text>
}
`},82188:function(t,n){n.Z=`import {
  Button,
  Icon,
  List,
  Provider,
  Toast,
  Tooltip,
} from '@ant-design/react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Action, TooltipProps } from '../PropsType'

const actions: Action[] = [
  { key: 'scan', icon: <Icon name="scan" />, text: '\u626B\u4E00\u626B' },
  { key: 'payment', icon: <Icon name="pay-circle" />, text: '\u4ED8\u94B1/\u6536\u94B1' },
  { key: 'bus', icon: <Icon name="qrcode" />, text: '\u4E58\u8F66\u7801' },
  { key: 'assistant', icon: <Icon name="ant-design" />, text: '\u667A\u80FD\u52A9\u7406' },
]

export default function TooltipExample() {
  const [placement, setPlacement] =
    useState<TooltipProps['placement']>('top-start')

  useEffect(() => {
    let current = 0

    const timer = setInterval(() => {
      if (current >= directionList.length - 1) {
        current = 0
      } else {
        current += 1
      }
      setPlacement(directionList[current])
    }, 2000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Provider>
      <ScrollView {...Tooltip.scrollProps}>
        <List renderHeader="\u57FA\u672C\u7528\u6CD5">
          <Tooltip
            content="Hello World"
            trigger="onPress"
            placement="right"
            defaultVisible>
            <Button style={{ alignSelf: 'flex-start', margin: 10 }}>
              \u70B9\u6211
            </Button>
          </Tooltip>
        </List>
        <List renderHeader="\u6DF1\u8272\u6C14\u6CE1">
          <Tooltip content="Hello World" placement="bottom" mode="dark" visible>
            <Button
              style={{ alignSelf: 'flex-start', margin: 10, marginBottom: 30 }}>
              \u70B9\u6211
            </Button>
          </Tooltip>
        </List>
        <List renderHeader="\u6C14\u6CE1\u4F4D\u7F6E">
          <Tooltip
            visible
            content={
              <View>
                <Text>Popover</Text>
                <Text>Content</Text>
              </View>
            }
            styles={{ arrow: { borderTopColor: 'yellow' } }}
            placement={placement}>
            <Button style={{ alignSelf: 'center', margin: 10 }}>
              {placement}
            </Button>
          </Tooltip>
        </List>
        <List renderHeader="\u6D45\u8272\u6C14\u6CE1\u83DC\u5355">
          <Tooltip.Menu
            actions={actions}
            placement="bottom-start"
            onAction={(node) => Toast.show(\`\u9009\u62E9\u4E86 \${node.text}\`)}
            trigger="onPress">
            <Button style={{ alignSelf: 'flex-start', margin: 10 }}>
              \u70B9\u6211
            </Button>
          </Tooltip.Menu>
        </List>
        <List renderHeader="\u6DF1\u8272\u6C14\u6CE1\u83DC\u5355">
          <Tooltip.Menu
            mode="dark"
            actions={actions}
            placement="bottom-start"
            onAction={(node) => Toast.show(\`\u9009\u62E9\u4E86 \${node.text}\`)}
            trigger="onPress">
            <Button style={{ alignSelf: 'flex-start', margin: 10 }}>
              \u70B9\u6211
            </Button>
          </Tooltip.Menu>
        </List>
        <List renderHeader="\u8D85\u8FC7\u6700\u5927\u6570\u91CF\uFF0C\u9690\u85CF\u6EDA\u52A8">
          <Tooltip.Menu
            actions={actions}
            maxCount={2}
            onAction={(node) => Toast.show(\`\u9009\u62E9\u4E86 \${node.text}\`)}
            placement="bottom-start"
            trigger="onPress">
            <Button style={{ alignSelf: 'flex-start', margin: 10 }}>
              \u70B9\u6211
            </Button>
          </Tooltip.Menu>
        </List>
      </ScrollView>
    </Provider>
  )
}

const directionList = [
  'top-start',
  'top',
  'top-end',
  'right-start',
  'right',
  'right-end',
  'bottom-end',
  'bottom',
  'bottom-start',
  'left-end',
  'left',
  'left-start',
] as const
`},97982:function(t,n){n.Z=`import { View } from '@ant-design/react-native'
import React from 'react'

export default class SafeViewExample extends React.Component<any, any> {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,
        }}>
        <View style={{ backgroundColor: 'blue', flex: 0.3 }} />
        <View style={{ backgroundColor: 'red', flex: 0.5 }} />
        <View>Hello World!</View>
      </View>
    )
  }
}
`},51562:function(t,n){n.Z=`import React from 'react'
import {
  StyleProp,
  Text,
  TextProps,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native'

export interface ViewInterface extends ViewProps, TextProps {
  children?: React.ReactNode | React.ReactText
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>
}
class AntmView extends React.PureComponent<ViewInterface> {
  render() {
    const { children, ...restProps } = this.props

    if (['number', 'string'].includes(typeof children)) {
      return <Text {...restProps} children={children} />
    }

    if (Array.isArray(children)) {
      if (children.some(React.isValidElement)) {
        return (
          <View {...restProps}>
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                return child
              }
              return <Text>{child}</Text>
            })}
          </View>
        )
      } else {
        return (
          <Text
            {...restProps}
            children={children.reduce((a, b) => (a || '') + '' + (b || ''), '')}
          />
        )
      }
    }

    return <View {...this.props} />
  }
}

export default AntmView
`},26030:function(t,n){n.Z=`import { WhiteSpace } from '@ant-design/react-native'
import React from 'react'
import { Text, View } from 'react-native'

const PlaceHolder = (props: any) => (
  <View
    style={{
      backgroundColor: '#fff',
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
    }}
    {...props}>
    <Text style={{ color: '#bbb' }}>Block</Text>
  </View>
)

export default class WhiteSpaceExample extends React.Component<any, any> {
  render() {
    return (
      <View>
        <WhiteSpace size="xs" />
        <PlaceHolder />

        <WhiteSpace size="sm" />
        <PlaceHolder />

        <WhiteSpace />
        <PlaceHolder />

        <WhiteSpace size="lg" />
        <PlaceHolder />

        <WhiteSpace size="xl" />
        <PlaceHolder />
      </View>
    )
  }
}
`},60342:function(t,n){n.Z=`import { WhiteSpace, WingBlank } from '@ant-design/react-native'
import React from 'react'
import { Text, View } from 'react-native'

const PlaceHolder = (props: any) => (
  <View
    style={{
      backgroundColor: '#fff',
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
    }}
    {...props}>
    <Text style={{ color: '#bbb' }}>Block</Text>
  </View>
)

export default class WingBlankExample extends React.Component<any, any> {
  render() {
    return (
      <View>
        <WhiteSpace />
        <WingBlank>
          <PlaceHolder />
        </WingBlank>

        <WhiteSpace size="lg" />
        <WingBlank size="md">
          <PlaceHolder />
        </WingBlank>

        <WhiteSpace size="lg" />
        <WingBlank size="sm">
          <PlaceHolder />
        </WingBlank>
      </View>
    )
  }
}
`}}]);

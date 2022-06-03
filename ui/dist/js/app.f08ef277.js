(function(){"use strict";var e={8645:function(e,t,s){var a=s(9242),o=s(3396);function r(e,t,s,a,r,n){const i=(0,o.up)("IndexComponent");return(0,o.wg)(),(0,o.j4)(i)}function n(e,t,s,a,r,n){const i=(0,o.up)("LoginForm"),l=(0,o.up)("LoadingModal");return(0,o.wg)(),(0,o.iD)("div",null,[r.showLoginForm?((0,o.wg)(),(0,o.j4)(i,{key:0,loginData:r.loginData},null,8,["loginData"])):(0,o.kq)("",!0),(0,o.Wm)(l)])}const i={id:"login-wrapper"},l={key:0,class:"login-wrapper-container container"},d={class:"row"},c={class:"col align-self-center login"},h=(0,o._)("h1",{class:"gtxt"},"Добро пожаловать!",-1),u=(0,o._)("h6",null,"Для продолжения войдите в свой аккаунт",-1),g={class:"form-group"},m={class:"form-group"},w={class:"login-form-footer"},p={class:"custom-control custom-switch"},k=(0,o._)("label",{class:"custom-control-label",for:"login-save-details"},"Запомнить меня",-1);function b(e,t,s,r,n,b){const v=(0,o.up)("DashboardForm");return(0,o.wg)(),(0,o.iD)("div",i,[b.showDashboard()?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",d,[(0,o._)("div",c,[h,u,(0,o._)("form",null,[(0,o._)("div",g,[(0,o.wy)((0,o._)("input",{type:"text",class:"custom-input form-control",id:"login-username",placeholder:"Имя пользователя","onUpdate:modelValue":t[0]||(t[0]=e=>n.username=e)},null,512),[[a.nr,n.username]])]),(0,o._)("div",m,[(0,o.wy)((0,o._)("input",{type:"password",class:"custom-input form-control",id:"login-password",placeholder:"Пароль","onUpdate:modelValue":t[1]||(t[1]=e=>n.password=e)},null,512),[[a.nr,n.password]])]),(0,o._)("div",w,[(0,o._)("div",p,[(0,o.wy)((0,o._)("input",{type:"checkbox",class:"custom-control-input",id:"login-save-details",checked:"","onUpdate:modelValue":t[2]||(t[2]=e=>n.remember=e)},null,512),[[a.e8,n.remember]]),k]),(0,o._)("button",{type:"button",class:"btn btn-dark",onClick:t[3]||(t[3]=e=>b.login())},"Войти")])])])])])),b.showDashboard()?((0,o.wg)(),(0,o.j4)(v,{key:1})):(0,o.kq)("",!0)])}function v(e,t,s,a,r,n){const i=(0,o.up)("DashboardHeader"),l=(0,o.up)("TabsContainer");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i),(0,o.Wm)(l)])}var _=s(7139);const y={id:"dashboard-header"},f={class:"",id:"a-name"},I={class:"exit-btn"};function x(e,t,s,a,r,n){return(0,o.wg)(),(0,o.iD)("header",y,[(0,o._)("h5",null,[(0,o._)("span",f,(0,_.zw)(n.getUsername()),1)]),(0,o._)("div",I,[(0,o._)("button",{type:"button",class:"btn btn-sm btn-dark",onClick:t[0]||(t[0]=e=>n.logout())}," Выйти ")])])}var C={name:"DashboardHeader",methods:{async logout(){await window.eel.logout()((e=>{e?this.$store.state.isLoggedIn=!1:this.toast("Не удалось выйти","error")}))},getUsername(){return this.$store.state.username}}},M=s(89);const D=(0,M.Z)(C,[["render",x]]);var W=D;const $={id:"dashboard-wrapper"},A={class:"container"},j={class:"row"},P={class:"col"},U={class:"nav nav-tabs",id:"accountsTablist"},L={class:"tab-content",id:"tabContent"};function T(e,t,s,a,r,n){const i=(0,o.up)("TabItem"),l=(0,o.up)("NewItem"),d=(0,o.up)("TabContent"),c=(0,o.up)("GalleryModal");return(0,o.wg)(),(0,o.iD)("div",$,[(0,o._)("div",A,[(0,o._)("div",j,[(0,o._)("div",P,[(0,o._)("ul",U,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.getWorksheets(),(e=>((0,o.wg)(),(0,o.j4)(i,{key:e.id,worksheet:e},null,8,["worksheet"])))),128)),(0,o.Wm)(l)])])]),(0,o._)("div",L,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.getWorksheets(),(e=>((0,o.wg)(),(0,o.j4)(d,{key:e.id,worksheet:e},null,8,["worksheet"])))),128))])]),(0,o.Wm)(c)])}const N={class:"nav-item add"};function Q(e,t,s,a,r,n){return(0,o.wg)(),(0,o.iD)("li",N,[(0,o._)("button",{class:"nav-link btn btn-success",id:"newAccountItem",type:"button",onClick:t[0]||(t[0]=e=>n.createNewAccount())}," + ")])}var G={name:"NewItem",methods:{async createNewAccount(){this.$store.commit("addWorksheet",{id:"tab"+Date.now(),username:"Новый профиль",password:"",image:"img/userpic.jpg",ua:""}),await this.timeout(100),window.jQuery("[data-bs-target]").last().trigger("click")}}};const H=(0,M.Z)(G,[["render",Q]]);var S=H;const Z=["id"],O=["data-bs-target"],F=["src"];function V(e,t,s,a,r,n){return(0,o.wg)(),(0,o.iD)("li",{class:"nav-item username",id:"parent"+this.worksheet.id},[(0,o._)("button",{class:"nav-link block-head","data-bs-toggle":"tab","data-bs-target":"#"+this.worksheet.id,type:"button"},[(0,o._)("img",{class:"profile-pic-small",src:this.worksheet.image},null,8,F),(0,o._)("span",null,(0,_.zw)(this.worksheet.username),1)],8,O),(0,o._)("button",{class:"btn btn-danger close",type:"button",onClick:t[0]||(t[0]=e=>n.closeTab())},"X")],8,Z)}var E={name:"TabItem",props:["worksheet"],methods:{async closeTab(){if(this.$store.state.sendingWorking[this.worksheet.id])this.toast("Вы не можете закрыть анкету прямо сейчас, дождитесь окончания отправки сообщений.","warning");else{var e=confirm("Вы уверенны что хотите закрыть эту анкету?");if(e){var t=this.worksheet.username;let e=await window.eel.closeTab(t)();!0===e?(this.$store.commit("removeWorksheet",this.worksheet),this.toast("Вы вышли из анкеты","success")):this.toast("Что-то пошло не так при закрытии вкладки.","error")}}}}};const Y=(0,M.Z)(E,[["render",V]]);var B=Y;const q=["id"],K={class:"row align-items-center"},z={class:"col-2"},J=["src"],X={class:"col-4"},R={class:"col-4"},ee={class:"col-2"},te={class:"row"},se={class:"col-10"},ae={class:"input-group input-group-sm",id:"ua-block"},oe={class:"col-2"},re={class:"row"},ne=(0,o._)("div",{class:"col-2"},[(0,o._)("span",{class:"block-head"},"Список ссылок")],-1),ie={class:"col-10"},le={class:"row"},de={class:"col"},ce={class:"row"},he={class:"col"},ue=(0,o._)("h6",{class:"block-head"},"Текст рассылки",-1),ge={class:"row"},me={class:"col"},we=(0,o._)("input",{type:"hidden","data-role":"gallery-image-data-id"},null,-1),pe=["src"],ke={class:"row"},be={class:"col"},ve=(0,o.Uk)(" Работаем..."),_e=(0,o._)("img",{class:"modal-loader",src:"img/loader_4.gif",width:"30",height:"30"},null,-1),ye=(0,o.Uk)(" Начать работу ");function fe(e,t,s,r,n,i){const l=(0,o.up)("ChatComponent"),d=(0,o.up)("TabProgress"),c=(0,o.up)("ErrorsModal");return(0,o.wg)(),(0,o.iD)("div",{class:"tab-pane fade",id:n.id},[(0,o._)("div",K,[(0,o._)("div",z,[(0,o._)("img",{"data-role":"profile-pic",src:n.image},null,8,J)]),(0,o._)("div",X,[(0,o.wy)((0,o._)("input",{type:"text",class:"custom-input form-control form-control-sm","data-role":"profile-username",placeholder:"Логин","onUpdate:modelValue":t[0]||(t[0]=e=>n.username=e)},null,512),[[a.nr,n.username]])]),(0,o._)("div",R,[(0,o.wy)((0,o._)("input",{type:"password",class:"custom-input form-control form-control-sm","data-role":"profile-password",placeholder:"Пароль","onUpdate:modelValue":t[1]||(t[1]=e=>n.password=e)},null,512),[[a.nr,n.password]])]),(0,o._)("div",ee,[(0,o._)("button",{"data-role":"profile-login-btn",type:"button",class:"btn btn-dark float-right",onClick:t[2]||(t[2]=e=>i.loginOnSite())},"Вход")])]),(0,o._)("div",te,[(0,o._)("div",se,[(0,o._)("div",ae,[(0,o.wy)((0,o._)("input",{type:"text",class:"custom-input form-control",placeholder:"User-Agent","data-role":"ua","aria-describedby":"basic-addon1","onUpdate:modelValue":t[3]||(t[3]=e=>n.ua=e)},null,512),[[a.nr,n.ua]])])]),(0,o._)("div",oe,[(0,o._)("button",{class:"btn btn-dark float-right",type:"button",onClick:t[4]||(t[4]=e=>i.setUserAgent())},"Сохранить")])]),(0,o._)("div",re,[ne,(0,o._)("div",ie,[(0,o._)("button",{class:"btn btn-dark float-right",type:"button",onClick:t[5]||(t[5]=e=>i.saveLinks())},"Сохранить ссылки"),(0,o._)("button",{class:"btn btn-dark float-right",type:"button",onClick:t[6]||(t[6]=e=>i.loadLinks()),style:{"margin-right":"5px"}},"Загрузить ссылки")])]),(0,o._)("div",le,[(0,o._)("div",de,[(0,o.wy)((0,o._)("textarea",{class:"block","onUpdate:modelValue":t[7]||(t[7]=e=>n.links=e)},null,512),[[a.nr,n.links]])])]),(0,o._)("div",ce,[(0,o._)("div",he,[ue,(0,o.wy)((0,o._)("textarea",{class:"block","data-role":"mail-text","onUpdate:modelValue":t[8]||(t[8]=e=>n.message=e)},null,512),[[a.nr,n.message]])])]),(0,o._)("div",ge,[(0,o._)("div",me,[we,(0,o._)("img",{src:this.$store.state.galleryActiveImageSrc[this.worksheet.id]??"img/userpic.jpg","data-role":"gallery-image-src",width:"70",height:"100"},null,8,pe),(0,o._)("button",{type:"button",class:"btn btn-dark",onClick:t[9]||(t[9]=e=>i.openGallery())},"Выбрать картинку")])]),(0,o._)("div",ke,[(0,o._)("div",be,[(0,o._)("button",{"data-role":"start-btn",type:"button",class:"btn btn-block btn-dark start-btn",onClick:t[10]||(t[10]=e=>i.start(n.id))},[this.isWorking(this.worksheet.id)?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[ve,_e],64)):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[ye],64))])])]),(0,o.Wm)(l,{worksheet:s.worksheet},null,8,["worksheet"]),(0,o.Wm)(d,{worksheet:s.worksheet},null,8,["worksheet"]),(0,o.Wm)(c,{worksheet:s.worksheet},null,8,["worksheet"])],8,q)}const Ie={class:"modal fade","data-role":"progressModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModal3Label","aria-hidden":"true"},xe={class:"modal-dialog modal-lg",role:"document"},Ce={class:"modal-content"},Me={class:"modal-header"},De=(0,o._)("h5",{class:"modal-title",id:"exampleModal3Label"},"Работаем...",-1),We=(0,o._)("br",null,null,-1),$e=(0,o._)("span",{"aria-hidden":"true"},"×",-1),Ae=[$e],je=(0,o._)("div",{class:"modal-body"},[(0,o._)("div",{class:"progress"},[(0,o._)("p",{class:"progress-text"},"0 из 1"),(0,o._)("div",{"data-role":"progress",class:"progress-bar progress-bar-striped bg-dark progress-bar-animated",role:"progressbar",style:{width:"0"}})]),(0,o._)("br"),(0,o._)("p",null,"Что бы перейди к другой анкете, нажмите вне окна что бы свернуть окно процесса.")],-1),Pe={class:"modal-footer"};function Ue(e,t,s,a,r,n){return(0,o.wg)(),(0,o.iD)("div",Ie,[(0,o._)("div",xe,[(0,o._)("div",Ce,[(0,o._)("div",Me,[De,We,(0,o._)("button",{type:"button",class:"close",onClick:t[0]||(t[0]=e=>n.closeProgressModal(this.worksheet.id)),"aria-label":"Close"},Ae)]),je,(0,o._)("div",Pe,[(0,o._)("button",{"data-role":"stop-btn",type:"button",class:"btn btn-dark",onClick:t[1]||(t[1]=e=>n.stop())},"Остановить")])])])])}var Le={name:"TabProgress",props:["worksheet"],methods:{closeProgressModal(e){window.jQuery("#"+e).find('[data-role="progressModal"]').modal("hide")},async stop(){await window.eel.add_mailing_messages({id:this.worksheet.id,links:[],message:this.message,ua:this.ua,dataId:this.$store.state.galleryActiveImageId[this.worksheet.id]})(),this.$store.state.sendingWorking[this.worksheet.id]=!1,window.jQuery("#"+this.worksheet.id).find('[data-role="progressModal"]').modal("hide")},mounted(){window.jQuery("#"+this.worksheet.id).find('[data-role="progressModal"]').draggable({handle:".modal-header"})}}};const Te=(0,M.Z)(Le,[["render",Ue]]);var Ne=Te;const Qe={class:"modal fade","data-role":"errorsModal",tabindex:"-1",role:"dialog","aria-hidden":"true"},Ge={class:"modal-dialog",role:"document"},He={class:"modal-content"},Se={class:"modal-header"},Ze=(0,o._)("h5",{class:"modal-title"},"Не обработанные ссылки!",-1),Oe=(0,o._)("span",{"aria-hidden":"true"},"×",-1),Fe=[Oe],Ve=(0,o._)("div",{class:"modal-body"},[(0,o._)("textarea",{"data-role":"errorLinks",rows:"15"})],-1),Ee={class:"modal-footer"};function Ye(e,t,s,a,r,n){return(0,o.wg)(),(0,o.iD)("div",Qe,[(0,o._)("div",Ge,[(0,o._)("div",He,[(0,o._)("div",Se,[Ze,(0,o._)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",onClick:t[0]||(t[0]=e=>n.closeErrorsModal())},Fe)]),Ve,(0,o._)("div",Ee,[(0,o._)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",onClick:t[1]||(t[1]=e=>n.closeErrorsModal())},"Закрыть")])])])])}var Be={props:["worksheet"],methods:{closeErrorsModal(){window.jQuery("#"+this.worksheet.id).find('[data-role="errorsModal"]').modal("hide")}},mounted(){window.jQuery("#"+this.worksheet.id).find('[data-role="errorsModal"]').modal({backdrop:!1}),window.jQuery("#"+this.worksheet.id).find('[data-role="errorsModal"]').draggable({handle:".modal-header"})}};const qe=(0,M.Z)(Be,[["render",Ye]]);var Ke=qe;const ze={style:{"margin-bottom":"10px"}},Je={class:"row"},Xe=(0,o._)("div",{class:"col-7"},[(0,o._)("h6",{class:"block-head"},"Сообщения для чатов:")],-1),Re={class:"col-5"},et={class:"row"},tt={class:"col"},st=(0,o.Uk)("Закончить отправку от сайта "),at=(0,o._)("img",{class:"modal-loader",src:"img/loader_4.gif",width:"30",height:"30"},null,-1),ot=[st,at],rt=(0,o.Uk)("Закончить отправку от расшерения "),nt=(0,o._)("img",{class:"modal-loader",src:"img/loader_4.gif",width:"30",height:"30"},null,-1),it=[rt,nt];function lt(e,t,s,r,n,i){return(0,o.wg)(),(0,o.iD)("div",ze,[(0,o._)("div",Je,[Xe,(0,o._)("div",Re,[(0,o._)("button",{type:"button",class:"btn btn-dark",onClick:t[0]||(t[0]=e=>i.loadMessages()),style:{float:"right"}},"Загрузить сообщения"),(0,o._)("button",{type:"button",class:"btn btn-dark",onClick:t[1]||(t[1]=e=>i.saveMessages()),style:{"margin-right":"5px",float:"right"}},"Сохранить сообщения")])]),(0,o._)("div",et,[(0,o._)("div",tt,[(0,o.wy)((0,o._)("textarea",{class:"block","data-role":"mail-text","onUpdate:modelValue":t[2]||(t[2]=e=>n.messages_one=e),placeholder:"Сообщения от сайта"},null,512),[[a.nr,n.messages_one]]),(0,o.wy)((0,o._)("textarea",{class:"block","data-role":"mail-text","onUpdate:modelValue":t[3]||(t[3]=e=>n.messages_two=e),placeholder:"Сообщения от расшерения"},null,512),[[a.nr,n.messages_two]]),n.siteProcessed?((0,o.wg)(),(0,o.iD)("button",{key:1,type:"button",class:"btn btn-danger",onClick:t[5]||(t[5]=e=>i.siteStop()),style:{"margin-right":"5px"}},ot)):((0,o.wg)(),(0,o.iD)("button",{key:0,type:"button",class:"btn btn-dark",onClick:t[4]||(t[4]=e=>i.siteStart()),style:{"margin-right":"5px"}},"Начать отправку от сайта")),n.extentionProcessed?((0,o.wg)(),(0,o.iD)("button",{key:3,type:"button",class:"btn btn-danger",onClick:t[7]||(t[7]=e=>i.extentionStop())},it)):((0,o.wg)(),(0,o.iD)("button",{key:2,type:"button",class:"btn btn-dark",onClick:t[6]||(t[6]=e=>i.extentionStart())},"Начать отправку от расшерения"))])])])}var dt={props:["worksheet"],data(){return{messages_one:"",messages_two:"",siteProcessed:!1,extentionProcessed:!1,siteInterval:null,siteNumber:0,extentionNumber:0}},created(){if("undefined"==typeof window.socketConnection&&(window.socketConnection=[]),"undefined"==typeof window.socketConnection[this.worksheet.id]){var e="wss://ws.dream-singles.com/ws";window.socketConnection[this.worksheet.id]=new WebSocket(e),window.socketConnection[this.worksheet.id].onopen=function(){console.log("Connection to socket "+e+" opened!")},window.socketConnection[this.worksheet.id].onmessage=function(e){console.log(e.data)}}},methods:{sendMessage(e){window.socketConnection[this.worksheet.id].send(JSON.stringify(e))},sendMessages(e,t){var s=this;"site"==t?this.siteNumber=0:this.extentionNumber=0;var a=3e4;e=e.split("\n"),e=e.filter((e=>e)),e.length>0&&("site"==t?(s.siteProcessed=!0,this.siteInterval=setInterval((function(){s.sendMessage({type:"start-auto-invite",payload:e[s.siteNumber],block:!0,ignore:!0}),s.siteNumber++,s.siteNumber==e.length&&(clearInterval(s.siteInterval),s.siteProcessed=!1,s.siteNumber=0)}),a)):(s.extentionProcessed=!0,this.extentionInterval=setInterval((function(){s.sendMessage({type:"start-auto-invite",payload:e[s.extentionNumber],block:!0,ignore:!0}),s.extentionNumber++,s.extentionNumber==e.length&&(clearInterval(s.extentionInterval),s.extentionProcessed=!1,s.extentionNumber=0)}),a)))},siteStop(){clearInterval(this.siteInterval),this.siteProcessed=!1},extentionStop(){clearInterval(this.extentionInterval),this.extentionProcessed=!1},siteStart(){this.sendMessages(this.messages_one,"site")},extentionStart(){this.sendMessages(this.messages_two,"extention")},async saveMessages(){var e=this.worksheet.username,t=this.messages_one,s=this.messages_two;if(e&&(t||s)){var a=confirm("Вы уверенны что хотите сохранить текущий список сообщений? Сохранённый будет перезаписан.");if(a){t=t.split("\n"),s=s.split("\n");let a=await window.eel.save_chat_messages(e,t,s)();!0===a?this.toast("Сообщения сохранены","success"):this.toast("Что-то пошло не так при сохранении сообщений.","error")}}else this.toast("Вам нужно сначало залогинится в анкету и ввести сообщения","warning");return!0},async loadMessages(){var e=this.worksheet.username;if(e){var t=confirm("Вы уверенны что хотите загрузить сохраненный список сообщений? Текущий будет утерян.");if(t){let t=await window.eel.load_chat_messages(e)();if(Array.isArray(t["messages_one"])||Array.isArray(t["messages_two"])){for(var s="",a="",o=0;o<t["messages_one"].length;o++)t["messages_one"][o]&&(s+=t["messages_one"][o]+"\n");for(var r=0;r<t["messages_two"].length;r++)t["messages_two"][r]&&(a+=t["messages_two"][r]+"\n");this.messages_one=s,this.messages_two=a,this.toast("Сообщения загруженны","success")}else this.toast("Что-то пошло не так при загрузке сообщений.","error")}}else this.toast("Вам нужно сначало залогинится в анкету","warning");return!0}}};const ct=(0,M.Z)(dt,[["render",lt]]);var ht=ct,ut={name:"TabContent",props:["worksheet"],components:{TabProgress:Ne,ErrorsModal:Ke,ChatComponent:ht},data(){return{id:this.worksheet.id,username:"Новый профиль"==this.worksheet.username?"":this.worksheet.username,password:this.worksheet.password,image:this.worksheet.image,ua:this.worksheet.ua,links:"",message:""}},methods:{async loginOnSite(){if(""==this.username||""==this.password||""==this.ua)this.toast("Пожалуйста, введите логин, пароль и User-Agent вашего браузера","warning");else{this.$store.state.loadingModalHidden=!1;let e=await window.eel.login_on_site(this.id,this.username,this.password,this.ua)();null!=e?(this.$store.commit("updateWorksheet",{id:this.id,username:this.username,password:this.password,image:e,ua:this.ua}),this.image=this.$store.getters.getWorksheet(this.worksheet.id).image):this.toast("Не удалось войти","error"),this.$store.state.loadingModalHidden=!0}},async setUserAgent(){var e=this.username,t=this.ua;if(!(""!=t&&/(opera|safari|firefox|(?!chrome))\/?\s*(\.?\d+(\.\d+)*)/i.test(t)&&t.length>=16))return this.toast("Пожалуйста, укажите User-Agent вашего браузера","warning"),!1;{let s=await window.eel.set_user_agent(t,e)();if(s)return this.toast("Успешно","success"),!0;this.toast("Что-то пошло не так с сохранением User-Agent","error")}},async saveLinks(){var e=this.username,t=this.links;if(e&&t){var s=confirm("Вы уверенны что хотите сохранить текущий список ссылок? Сохранённый будет перезаписан.");if(s){t=t.split("\n");let s=await window.eel.save_links(e,t)();!0===s?this.toast("Ссылки сохранены","success"):this.toast("Что-то пошло не так при сохранении ссылок.","error")}}else this.toast("Вам нужно сначало залогинится в анкету и ввести ссылки","warning");return!0},async loadLinks(){var e=this.username;if(e){var t=confirm("Вы уверенны что хотите загрузить сохраненный список ссылок? Текущий будет утерян.");if(t){let t=await window.eel.load_links(e)();if(Array.isArray(t)){for(var s="",a=0;a<t.length;a++)s+=t[a]+"\n";this.links=s,this.toast("Ссылки загруженны","success")}else this.toast("Что-то пошло не так загрузке ссылок.","error")}}else this.toast("Вам нужно сначало залогинится в анкету","warning");return!0},async openGallery(){var e=this.worksheet.ua,t=this.worksheet.id,s=this.worksheet.username,a=this.worksheet.password;window.jQuery("#galleryModal").modal("show"),this.$store.state.currentGalleryWorksheetId=t,this.$store.state.galleryImages=[];let o=await window.eel.load_gallery(t,s,a,e)();if(Array.isArray(o)&&o.length>0)for(var r in o)this.$store.commit("addGalleryImage",o[r]);else this.toast("Что-то пошло не так при загрузке галереи.","error")},async start(e){var t=this,s=window.jQuery.trim(this.links).split("\n");if(s!=[]&&""!=this.message&&""!=this.ua&&this.$store.state.galleryActiveImageId[this.worksheet.id])if(window.jQuery("#"+e).find('[data-role="progressModal"]').modal("show"),this.isWorking(e))window.jQuery("#"+e).find('[data-role="progressModal"]').modal("show");else{await window.eel.add_mailing_messages({id:this.worksheet.id,links:s,message:this.message,ua:this.ua,dataId:this.$store.state.galleryActiveImageId[this.worksheet.id]})(),this.$store.state.sendingWorking[e]=!0,this.updateProgressBar(e,0,s.length);let a=setInterval((async function(){let o=await window.eel.get_success_count(e)();if(o==s.length){t.updateProgressBar(e,o,s.length),clearInterval(a),t.toast("Рассылка завершена ("+t.worksheet.username+")","success"),window.jQuery("#"+e).find('[data-role="progressModal"]').modal("hide"),t.$store.state.sendingWorking[e]=!1;let i=await window.eel.get_errors_list(e)();if(i&&i.length>0){window.jQuery("#"+e).find('[data-role="errorsModal"]').modal("show");for(var r="",n=0;n<i.length;n++)r+=i[n]+"\n";window.jQuery("#"+e).find('[data-role="errorLinks"]').val(r)}}t.updateProgressBar(e,o,s.length)}),1e3)}else this.toast("Пожалуйста, укажите всю необходимую информацию для запуска рассылки","warning")},isWorking(e){return this.$store.state.sendingWorking[e]},updateProgressBar(e,t,s){window.jQuery("#"+e+" .progress-text").html(t+" из "+s),window.jQuery("#"+e+' [data-role="progress"]').css("width",t/s*100+"%")}}};const gt=(0,M.Z)(ut,[["render",fe]]);var mt=gt;const wt={class:"modal fade",id:"galleryModal",tabindex:"-1",role:"dialog","aria-hidden":"true"},pt={class:"modal-dialog",role:"document"},kt={class:"modal-content"},bt={class:"modal-header"},vt=(0,o._)("h5",{class:"modal-title"},"Галерея анкеты",-1),_t=(0,o._)("span",{"aria-hidden":"true"},"×",-1),yt=[_t],ft={class:"modal-body"},It={class:"gallery-items"},xt={class:"modal-footer"};function Ct(e,t,s,a,r,n){const i=(0,o.up)("GalleryImage");return(0,o.wg)(),(0,o.iD)("div",wt,[(0,o._)("div",pt,[(0,o._)("div",kt,[(0,o._)("div",bt,[vt,(0,o._)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",onClick:t[0]||(t[0]=e=>n.closeGallery())},yt)]),(0,o._)("div",ft,[(0,o._)("div",It,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.getImages(),(e=>((0,o.wg)(),(0,o.j4)(i,{key:e.dataId,src:e.src,dataId:e.dataId,worksheet:s.worksheet},null,8,["src","dataId","worksheet"])))),128))])]),(0,o._)("div",xt,[(0,o._)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",onClick:t[1]||(t[1]=e=>n.closeGallery())},"Отмена"),(0,o._)("button",{type:"button",class:"btn btn-success",onClick:t[2]||(t[2]=e=>n.closeGallery())},"Выбрать картинку")])])])])}const Mt={class:"gallery-item-wrapper"},Dt=["src","data-id"];function Wt(e,t,s,a,r,n){return(0,o.wg)(),(0,o.iD)("div",Mt,[(0,o._)("img",{class:(0,_.C_)({active:n.isActive()}),src:this.src,"data-id":this.dataId,width:"160",height:"200",onClick:t[0]||(t[0]=e=>n.makeActive())},null,10,Dt)])}var $t={props:["src","dataId","worksheet"],methods:{makeActive(){this.$store.state.galleryActiveImageId[this.$store.state.currentGalleryWorksheetId]=this.dataId,this.$store.state.galleryActiveImageSrc[this.$store.state.currentGalleryWorksheetId]=this.src},isActive(){return this.dataId==this.$store.state.galleryActiveImageId[this.$store.state.currentGalleryWorksheetId]}}};const At=(0,M.Z)($t,[["render",Wt]]);var jt=At,Pt={props:["worksheet"],components:{GalleryImage:jt},methods:{closeGallery(){window.jQuery("#galleryModal").modal("hide")},getImages(){return this.$store.state.galleryImages}},mounted(){window.jQuery("#galleryModal").draggable({handle:".modal-header"})}};const Ut=(0,M.Z)(Pt,[["render",Ct]]);var Lt=Ut,Tt={name:"WorksheetsContainer",components:{NewItem:S,TabItem:B,TabContent:mt,GalleryModal:Lt},methods:{async initWorksheets(){this.$store.state.loadingModalHidden=!1;let e=await window.eel.load_accounts()();for(var t in this.$store.commit("clearWorksheets"),e)this.$store.commit("addWorksheet",e[t]);this.$store.state.loadingModalHidden=!0},getWorksheets(){return this.$store.state.worksheets}},mounted(){this.initWorksheets()}};const Nt=(0,M.Z)(Tt,[["render",T]]);var Qt=Nt,Gt={name:"DashboardForm",components:{DashboardHeader:W,TabsContainer:Qt}};const Ht=(0,M.Z)(Gt,[["render",v]]);var St=Ht,Zt={name:"LoginForm",components:{DashboardForm:St},props:["loginData"],data(){return{username:this.loginData.username,password:this.loginData.password,remember:this.loginData.remember??!0}},methods:{async login(){if(""!=this.username&&""!=this.password){let e=await window.eel.login(this.username,this.password,this.remember)();e?(this.$store.state.isLoggedIn=!0,this.$store.state.username=this.username):this.toast("Не удалось войти","error")}else this.toast("Пожалуйста, введите логин и пароль","warning");return!0},showDashboard(){return this.$store.state.isLoggedIn}}};const Ot=(0,M.Z)(Zt,[["render",b]]);var Ft=Ot;const Vt={class:"background-modal",id:"loading-modal"},Et=(0,o._)("img",{class:"modal-loader",src:"img/loader_4.gif",width:"30",height:"30"},null,-1),Yt=[Et];function Bt(e,t,s,r,n,i){return(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",Vt,Yt,512)),[[a.F8,!i.isHidden()]])}var qt={methods:{isHidden(){return this.$store.state.loadingModalHidden}}};const Kt=(0,M.Z)(qt,[["render",Bt]]);var zt=Kt,Jt={name:"IndexComponent",components:{LoginForm:Ft,LoadingModal:zt},data(){return{showLoginForm:!1,loginData:{}}},methods:{async getAuth(){await window.eel.get_login_details()((e=>{null!=e&&(this.loginData.username=e["username"],this.loginData.password=e["password"],this.loginData.remember=!0),this.showLoginForm=!0}))}},mounted(){this.getAuth()}};const Xt=(0,M.Z)(Jt,[["render",n]]);var Rt=Xt,es={name:"App",components:{IndexComponent:Rt}};const ts=(0,M.Z)(es,[["render",r]]);var ss=ts,as=s(65);const os=(0,as.MT)({state:{isLoggedIn:!1,username:"",worksheets:[],galleryImages:[],loadingModalHidden:!0,galleryModalHidden:!0,galleryActiveImageId:[],galleryActiveImageSrc:[],currentGalleryWorksheetId:null,sendingWorking:{}},mutations:{clearWorksheets(e){e.worksheets=[]},addWorksheet(e,t){e.worksheets.push(t)},updateWorksheet(e,t){const s=e.worksheets.findIndex((e=>e.id===t.id));s>-1&&(e.worksheets[s]=t)},removeWorksheet(e,t){const s=e.worksheets.findIndex((e=>e.id===t.id));s>-1&&e.worksheets.splice(s,1)},addGalleryImage(e,t){e.galleryImages.push(t)}},getters:{getWorksheet:e=>t=>e.worksheets.find((e=>e.id===t))}});var rs=os,ns=s(2310),is=s.n(ns),ls={methods:{toast(e,t="info",s=2e3,a=!1){var o=null;switch(t){case"success":o="#56ab2f";break;case"warning":o="#f5af19";break;case"error":o="#DA4453";break;case"info":o="#1c92d2";break}is()({text:e,duration:s,close:a,backgroundColor:o}).showToast()}}},ds={methods:{timeout(e){return new Promise((t=>setTimeout(t,e)))}}};const cs=(0,a.ri)(ss);cs.mixin(ls),cs.mixin(ds),cs.use(rs),cs.mount("#vue-app")}},t={};function s(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(t,a,o,r){if(!a){var n=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],r=e[c][2];for(var i=!0,l=0;l<a.length;l++)(!1&r||n>=r)&&Object.keys(s.O).every((function(e){return s.O[e](a[l])}))?a.splice(l--,1):(i=!1,r<n&&(n=r));if(i){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[a,o,r]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,n=a[0],i=a[1],l=a[2],d=0;if(n.some((function(t){return 0!==e[t]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(l)var c=l(s)}for(t&&t(a);d<n.length;d++)r=n[d],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(c)},a=self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(8645)}));a=s.O(a)})();
//# sourceMappingURL=app.f08ef277.js.map
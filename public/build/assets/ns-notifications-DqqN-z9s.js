import{a as d,b as _}from"./bootstrap-B7E2wy_a.js";import{_ as f,e as p}from"./currency-ZXKMLAC0.js";import{n as v}from"./ns-prompt-popup-BbWKrSku.js";import{h as b}from"./components-CSb5I62o.js";import{t as x}from"./tax-BACo6kIE.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as k,o as c,c as r,b as t,t as a,f as u,n as y,F as w,e as N,g as C}from"./runtime-core.esm-bundler-DCfIpxDt.js";import"./ns-alert-popup-DDoxXsJC.js";import"./ns-avatar-image-C_oqdj76.js";import"./index.es-BED_8l8F.js";const E={name:"ns-notifications",data(){return{notifications:[],visible:!1,interval:null}},components:{nsCloseButton:b},mounted(){document.addEventListener("click",this.checkClickedItem),ns.websocket.enabled?Echo.private("ns.private-channel").listen("App\\Events\\NotificationDispatchedEvent",e=>{this.pushNotificationIfNew(e.notification)}).listen("App\\Events\\NotificationDeletedEvent",e=>{this.deleteNotificationIfExists(e.notification)}):this.interval=setInterval(()=>{this.loadNotifications()},15e3),this.loadNotifications()},unmounted(){clearInterval(this.interval)},methods:{__:f,timespan:x,nsNumberAbbreviate:p,pushNotificationIfNew(e){this.notifications.filter(s=>s.id===e.id).length>0||this.notifications.push(e)},deleteNotificationIfExists(e){const i=this.notifications.filter(s=>s.id===e.id);if(i.length>0){const s=this.notifications.indexOf(i[0]);this.notifications.splice(s,1)}},deleteAll(){Popup.show(v,{title:f("Confirm Your Action"),message:f("Would you like to clear all the notifications ?"),onAction:e=>{e&&d.delete("/api/notifications/all").subscribe(i=>{_.success(i.message).subscribe()})}})},checkClickedItem(e){let i;document.getElementById("notification-center")?i=document.getElementById("notification-center").contains(e.srcElement):i=!1;const s=document.getElementById("notification-button").contains(e.srcElement);!i&&!s&&this.visible&&(this.visible=!1)},loadNotifications(){d.get("/api/notifications").subscribe(e=>{this.notifications=e})},triggerLink(e){if(e.url!=="url")return window.open(e.url,"_blank")},closeNotice(e,i){d.delete(`/api/notifications/${i.id}`).subscribe(s=>{this.loadNotifications()}),e.stopPropagation()}}},I={id:"notificaton-wrapper"},A={key:0,class:"relative float-right"},B={class:"absolute -ml-6 -mt-8"},j={class:"bg-info-tertiary text-white w-8 h-8 rounded-full text-xs flex items-center justify-center"},L=t("i",{class:"las la-bell"},null,-1),P={key:0,class:"h-0 w-0",id:"notification-center"},V={class:"absolute left-0 top-0 sm:relative w-screen zoom-out-entrance anim-duration-300 h-5/7-screen sm:w-64 sm:h-108 flex flex-row-reverse"},z={class:"z-50 sm:rounded-lg shadow-lg h-full w-full md:mt-2 overflow-y-hidden flex flex-col"},D=t("h3",{class:"font-semibold hover:text-info-primary"},"Close",-1),F=[D],S={class:"overflow-y-auto flex flex-col flex-auto"},H=["onClick"],O={class:"flex items-center justify-between"},W={class:"font-semibold"},Y={class:"py-1 text-sm"},q={class:"flex justify-end"},G={class:"text-xs date"},J={key:0,class:"h-full w-full flex items-center justify-center"},K={class:"flex flex-col items-center"},M=t("i",{class:"las la-laugh-wink text-5xl text-primary"},null,-1),Q={class:"text-secondary text-sm"},R={class:"cursor-pointer clear-all"};function T(e,i,s,U,o,l){const h=k("ns-close-button");return c(),r("div",I,[t("div",{id:"notification-button",onClick:i[0]||(i[0]=n=>o.visible=!o.visible),class:y([o.visible?"panel-visible border-0 shadow-lg":"border panel-hidden","hover:shadow-lg hover:border-opacity-0 rounded-full h-12 w-12 cursor-pointer font-bold text-2xl justify-center items-center flex"])},[o.notifications.length>0?(c(),r("div",A,[t("div",B,[t("div",j,a(l.nsNumberAbbreviate(o.notifications.length,"abbreviate")),1)])])):u("",!0),L],2),o.visible?(c(),r("div",P,[t("div",V,[t("div",z,[t("div",{onClick:i[1]||(i[1]=n=>o.visible=!1),class:"sm:hidden p-2 cursor-pointer flex items-center justify-center border-b border-gray-200"},F),t("div",S,[(c(!0),r(w,null,N(o.notifications,n=>(c(),r("div",{key:n.id,class:"notification-card notice border-b"},[t("div",{class:"p-2 cursor-pointer",onClick:m=>l.triggerLink(n)},[t("div",O,[t("h1",W,a(n.title),1),C(h,{onClick:m=>l.closeNotice(m,n)},null,8,["onClick"])]),t("p",Y,a(n.description),1),t("div",q,[t("span",G,a(l.timespan(n.updated_at)),1)])],8,H)]))),128)),o.notifications.length===0?(c(),r("div",J,[t("div",K,[M,t("p",Q,a(l.__("Nothing to care about !")),1)])])):u("",!0)]),t("div",R,[t("h3",{onClick:i[2]||(i[2]=n=>l.deleteAll()),class:"text-sm p-2 flex items-center justify-center w-full font-semibold"},a(l.__("Clear All")),1)])])])])):u("",!0)])}const ce=g(E,[["render",T]]);export{ce as default};
webpackHotUpdatemojs_curve_editor(0,{86:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(88),d=r(o),u=a(4),i=r(u),s=a(57),_=a(72),n=r(_),p={translate:{x:150,y:0},resize_top:0,tempResize_top:0,resize_right:0,tempResize_right:0,resize_bottom:0,tempResize_bottom:0},l=function(){var e=arguments.length<=0||void 0===arguments[0]?p:arguments[0],t=arguments[1];switch(t.type){case"EDITOR_RESIZE":var a=t.data,r={data:a},o=r.type;console.log(o,a);var u="top"===o||"bottom"===o?a.x:a.y;return(0,i["default"])({},e,(0,d["default"])({},"tempResize_"+t.data.type,u));case"EDITOR_RESIZE_END":var s,_=t.data,n={data:_},l=n.type,c="top"===l||"bottom"===l?_.x:_.y;return(0,i["default"])({},e,(s={},(0,d["default"])(s,"resize_"+t.data.type,e["resize_"+t.data.type]+c),(0,d["default"])(s,"tempResize_"+t.data.type,0),s));case"EDITOR_TRANSLATE":return(0,i["default"])({},e,{translate:t.data})}return e},c=(0,s.createStore)((0,n["default"])(l,{filter:function(e,t,a){return e.isRecord}}));t["default"]=c}});
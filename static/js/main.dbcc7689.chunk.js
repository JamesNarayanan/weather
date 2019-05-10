(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(27)},20:function(e,t,a){},21:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),i=(a(19),a(20),a(1)),c=a(2),s=a(4),d=a(3),p=a(6),u=a(5),h=(a(21),a(7)),m=a.n(h),y=(a(25),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;var t,a,n=this.props.days[this.props.dayNum],l=n.icon;t="-",a="_",l=(l=l.replace(new RegExp(t,"g"),a)).toUpperCase();var o,i=n.apparentTemperatureMax,c=n.apparentTemperatureMin;return"si"===this.props.unit&&(i=5/9*(i-32),c=5/9*(c-32)),r.a.createElement("div",{id:"dayWrapper",className:"m-2 px-0 py-2 d-flex flex-column align-items-center rounded",onClick:function(){return e.props.onClick(e.props.dayNum)},style:{backgroundColor:this.props.selectedDay===this.props.dayNum?"rgba(0,0,0,.2)":"",width:"100px"}},r.a.createElement("div",{className:"h5 mb-0"},0===this.props.dayNum?"Today":(o=n.time,["Sun","Mon","Tue","Wed","Thur","Fri","Sat"][new Date(1e3*o).getDay()])),r.a.createElement(m.a,{className:"w-100 h-auto my-2",color:"white",icon:l,autoplay:!0}),r.a.createElement("div",{className:"my-0 d-flex h6"},r.a.createElement("div",null,Math.round(i),"\xb0")," \xa0\xa0 ",r.a.createElement("div",{className:"text-muted"},Math.round(c),"\xb0")))}}]),t}(n.Component)),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.days.length;t++)e.push(r.a.createElement(y,{dayNum:t,days:this.props.days,selectedDay:this.props.selectedDay,onClick:this.props.onDayClick,unit:this.props.unit}));return r.a.createElement("div",{className:"row justify-content-center"},e)}}]),t}(n.Component),v=a(11),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){if("individual"===this.props.type){var e=[];e.push(r.a.createElement("div",{className:"col px-0 position-sticky d-flex flex-column align-items-center text-center border-right border-dark",style:{minWidth:"140px",left:0,backgroundColor:"rgb(0,238,238)",zIndex:1}},r.a.createElement("div",{className:"w-75 border-bottom border-dark"},"Time"),r.a.createElement("div",null,"AM/PM"),r.a.createElement(m.a,{style:{width:"80px",height:"40px"},color:"white",icon:"CLOUDY",autoplay:!0}),r.a.createElement("div",null,"Temp \xb0","si"===this.props.unit?"C":"F"),r.a.createElement("div",{className:"w-100 border-top border-dark"},"Precip Chance"),r.a.createElement("div",{className:"w-100 border-top border-dark"},"Humidity"),r.a.createElement("div",{className:"w-100 border-top border-dark"},"Wind Speed ","si"===this.props.unit?"m/s":"m/h")));for(var t=0;t<this.props.hours.length;t++){var a=this.props.hours[t],n=new Date(1e3*a.time).getHours(),l="AM";n>=12&&(n-=12,l="PM"),0===n&&(n=12);var o=a.apparentTemperature,i=a.windSpeed;"si"===this.props.unit&&(o=5/9*(o-32),i/=2.237);var c=a.icon;O="-",j="_",c=(c=c.replace(new RegExp(O,"g"),j)).toUpperCase(),e.push(r.a.createElement("div",{className:"col px-0 d-flex flex-column align-items-center text-center ".concat(t!==this.props.hours.length-1?"border-right border-dark":""),style:{minWidth:"65px"}},r.a.createElement("div",{className:"w-75 border-bottom border-dark"},n),r.a.createElement("div",null,l),r.a.createElement(m.a,{style:{width:"80px",height:"40px"},color:"white",icon:c,autoplay:!0}),r.a.createElement("div",null,o.toFixed(1),"\xb0"),r.a.createElement("div",{className:"w-100 border-top border-dark"},Math.round(100*a.precipProbability),"%"),r.a.createElement("div",{className:"w-100 border-top border-dark"},Math.round(100*a.humidity),"%"),r.a.createElement("div",{className:"w-100 border-top border-dark"},i.toFixed(2))))}return r.a.createElement("div",{className:"d-flex flex-row border border-dark",style:{overflow:"scroll"}},e)}if("graph"===this.props.type){var s=[],d=["Temperature","Precipitation Chance"],p=parseInt(this.props.graphType);s.push(["Hour",d[p],{role:"tooltip",type:"string",p:{html:!0}}]);var u="decimal";1===p&&(u="percent");for(var h,y,b=0,f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],k=0;k<this.props.hours.length;k++){var E=this.props.hours[k];0===k&&(h=E.time);var g=[(E.time-h)/3600],C=void 0;0===p?(C=E.apparentTemperature,"si"===this.props.unit&&(C=5/9*(C-32),C=parseFloat(C.toFixed(2)))):1===p&&(C=parseFloat(E.precipProbability.toFixed(2))),g.push(C);var x="\xb0";1===p&&(x="%");var w=new Date(1e3*E.time),N=w.getHours(),T="AM";0===k?(N="Now",T=""):(0===N&&0!==k&&(y=0===b++?" Tomorrow":" "+f[w.getDay()]),N>=12&&(N-=12,T="PM"),0===N&&(N=12)),g.push('\n\t\t\t\t\t<div class="p-2 d-flex flex-column align-items-center text-center" style="font: 12pt Courier">\n\t\t\t\t\t<div class="w-75 mb-2 border-bottom border-dark">'.concat(N," ").concat(T).concat(y||"","</div>\n\t\t\t\t\t<div>").concat(1===p?100*C:C).concat(x).concat(1===p?E.precipType?" Chance of ".concat(E.precipType):" Chance of Precipitation":"","</div>\n\t\t\t\t\t</div>\n\t\t\t\t")),s.push(g)}return r.a.createElement("div",{className:"border border-dark rounded bg-shade"},r.a.createElement(v.a,{chartType:"ScatterChart",loader:r.a.createElement("div",{className:"text-center"},"Loading Chart"),data:s,options:{title:"".concat(d[p]," over the next 48 hours"),hAxis:{title:"Hour",gridlines:{color:"black"}},vAxis:{title:d[p],format:u,gridlines:{color:"black"}},legend:"none",colors:["white"],backgroundColor:"transparent",tooltip:{isHtml:!0}}}))}var O,j}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={width:0,height:0},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth})}},{key:"render",value:function(){var e=this.props.day,t=(e.apparentTemperatureHigh+e.apparentTemperatureLow)/2,a=e.windSpeed,n="m/h",l=e.precipAccumulation,o="in";"si"===this.props.unit&&(t=5/9*(t-32),a/=2.237,n="m/s",l*=2.54,o="cm");var i,c="h1";return this.state.width<=767&&(c=this.state.width<=575?"h4":"h3"),r.a.createElement("div",{className:"row mx-2 mb-3"},r.a.createElement("div",{className:"col-12 col-md-6 mb-3 mb-md-0 d-flex flex-column text-center text-md-left"},r.a.createElement("div",{className:"display-4"},(i=e.time,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(1e3*i).getDay()])),r.a.createElement("div",{className:"h3 text-capitalize"},e.precipProbability>=.3?e.precipType:""),r.a.createElement("div",{className:"display-1 mt-n3 mb-n2"},Math.round(t),"\xb0"),r.a.createElement("div",null,e.summary)),r.a.createElement("div",{className:"col-12 col-md-6 ".concat(c," font-weight-normal d-flex flex-column text-center text-md-left")},r.a.createElement("div",null,"Precipitation: ",Math.round(100*e.precipProbability),"%"),l&&"snow"===e.precipType&&e.precipProbability>=.3?r.a.createElement("div",null,"Accumulation: ","".concat(l.toFixed(2)," ").concat(o)):"",r.a.createElement("div",null,"Humidity: ",Math.round(100*e.humidity),"%"),r.a.createElement("div",null,"Wind Speed: ",a.toFixed(2)," ",n)))}}]),t}(n.Component),E={searchWeather:function(e,t){return fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/".concat("f22bbd8641b71b57cc2c0de39a62ff4d","/").concat(e,",").concat(t)).then(function(e){return e.json()}).then(function(e){if(e)return void 0===e.daily?null:(console.log(e),{days:e.daily,hours:e.hourly,minutes:e.minutely})})}},g=(a(26),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"preloader",style:{opacity:"1"}},r.a.createElement("svg",{version:"1.1",id:"sun",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"10px",height:"10px",viewBox:"0 0 10 10",enableBackground:"new 0 0 10 10",xmlSpace:"preserve",style:{opacity:"1",marginLeft:"0px",marginTop:"0px"}},r.a.createElement("g",null,r.a.createElement("path",{fill:"none",d:"M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z"}),r.a.createElement("path",{fill:"none",d:"M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z"}),r.a.createElement("path",{fill:"none",d:"M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z"}),r.a.createElement("path",{fill:"none",d:"M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z"}),r.a.createElement("path",{fill:"none",d:"M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z"}),r.a.createElement("path",{fill:"none",d:"M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z"}),r.a.createElement("path",{fill:"none",d:"M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z"}),r.a.createElement("path",{fill:"none",d:"M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z"}),r.a.createElement("path",{fill:"none",d:"M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z"}),r.a.createElement("path",{fill:"none",d:"M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z"}),r.a.createElement("path",{fill:"none",d:"M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z"}),r.a.createElement("path",{fill:"none",d:"M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z"}),r.a.createElement("path",{fill:"none",d:"M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z"}))),r.a.createElement("svg",{version:"1.1",id:"cloud",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"10px",height:"10px",viewBox:"0 0 10 10",enableBackground:"new 0 0 10 10",xmlSpace:"preserve"},r.a.createElement("path",{fill:"none",d:"M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z"})),r.a.createElement("div",{className:"rain"},r.a.createElement("span",{className:"drop"}),r.a.createElement("span",{className:"drop"}),r.a.createElement("span",{className:"drop"}),r.a.createElement("span",{className:"drop"}),r.a.createElement("span",{className:"drop"}),r.a.createElement("span",{className:"drop"}),r.a.createElement("span",{className:"drop"}),r.a.createElement("span",{className:"drop"}),r.a.createElement("span",{className:"drop"}),r.a.createElement("span",{className:"drop"})),r.a.createElement("div",{className:"text"},"LOOKING OUTSIDE FOR YOU... ONE SEC"))}}]),t}(n.Component)),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-12 col-sm-6 col-md-3 mx-auto p-3 border border-dark rounded"},r.a.createElement("div",{className:"row d-flex justify-content-center"},r.a.createElement("button",{className:"btn col-4 bg-shade",onClick:function(){return e.props.onTempClick("F")},style:{border:"im"===this.props.unit?"1px solid black":"none"}},"F\xb0"),r.a.createElement("button",{className:"btn col-4 bg-shade",onClick:function(){return e.props.onTempClick("C")},style:{border:"si"===this.props.unit?"1px solid black":"none"}},"C\xb0")),r.a.createElement("div",{className:"mt-3 text-center"},"Hourly Forecast"),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("button",{className:"btn col-4 col-sm-6 col-lg-5 col-xl-4 bg-shade",onClick:function(){return e.props.onHourlyClick("individual")},style:{border:"individual"===this.props.hourlyType?"1px solid black":"none"}},"Individual"),r.a.createElement("button",{className:"btn col-4 col-sm-5 col-lg-4 bg-shade",onClick:function(){return e.props.onHourlyClick("graph")},style:{border:"graph"===this.props.hourlyType?"1px solid black":"none"}},"Graph")),"graph"===this.props.hourlyType?r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("button",{className:"btn col bg-shade",onClick:function(){return e.props.onHourlyGraphTypeClick(0)},style:{border:0===this.props.hourlyGraphType?"1px solid black":"none"}},"Temperature"),r.a.createElement("button",{className:"btn col bg-shade",onClick:function(){return e.props.onHourlyGraphTypeClick(1)},style:{border:1===this.props.hourlyGraphType?"1px solid black":"none"}},"Precipitation Chance")):"")}}]),t}(n.Component),x=function(e){function t(e){var a;function n(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var r=a[n];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""}Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleDayClick=a.handleDayClick.bind(Object(p.a)(a)),a.handleTempClick=a.handleTempClick.bind(Object(p.a)(a)),a.handleHourlyClick=a.handleHourlyClick.bind(Object(p.a)(a)),a.handleHourlyGraphTypeClick=a.handleHourlyGraphTypeClick.bind(Object(p.a)(a)),a.handleMinutelyClick=a.handleMinutelyClick.bind(Object(p.a)(a)),a.getLocation=a.getLocation.bind(Object(p.a)(a)),a.getCurrentLocation=a.getCurrentLocation.bind(Object(p.a)(a)),a.handleKeyPress=a.handleKeyPress.bind(Object(p.a)(a));var r=n("lat"),l=n("lon"),o=n("unit");""===o&&(o="im");var c=n("hourlyType")||"individual",u=parseInt(n("hourlyGraphType"))||0,h=n("minutelyType")||"individual";return r&&l?(a.state={selectedDay:0,unit:o,haveLocation:!0,lat:r,lon:l,type:{hourly:c,minutely:h,hourlyGraph:u}},a.getLocation()):a.state={selectedDay:0,unit:o,haveLocation:!1,lat:"",lon:"",type:{hourly:c,minutely:h,hourlyGraph:u}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleDayClick",value:function(e){this.setState({selectedDay:e})}},{key:"handleTempClick",value:function(e){this.setState({unit:"F"===e?"im":"si"}),document.cookie="unit="+("F"===e?"im":"si")}},{key:"handleHourlyClick",value:function(e){this.setState({type:{hourly:e,minutely:this.state.type.minutely,hourlyGraph:this.state.type.hourlyGraph}}),document.cookie="hourlyType="+e}},{key:"handleHourlyGraphTypeClick",value:function(e){this.setState({type:{hourly:this.state.type.hourly,minutely:this.state.type.minutely,hourlyGraph:e}}),document.cookie="hourlyGraphType="+e}},{key:"handleMinutelyClick",value:function(e){this.setState({type:{hourly:this.state.type.hourly,minutely:e,hourlyGraph:this.state.type.hourlyGraph}}),document.cookie="minutelyType="+e}},{key:"getLocation",value:function(){var e=this,t=this.state.lat,a=this.state.lon;t&&a&&(this.setState({haveLocation:!0}),E.searchWeather(t,a).then(function(t){null==t?(e.setState({haveLocation:!1}),document.getElementById("console").style.display="block",document.getElementById("console").innerHTML="Invalid Location"):(e.setState({days:t.days.data,hours:t.hours.data,minutes:t.minutes.data}),document.cookie="lat="+e.state.lat,document.cookie="lon="+e.state.lon)}))}},{key:"getCurrentLocation",value:function(){var e=this;this.setState({haveLocation:!0}),navigator.geolocation.getCurrentPosition(function(t){e.setState({lat:t.coords.latitude,lon:t.coords.longitude}),e.getLocation()})}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&this.getLocation()}},{key:"render",value:function(){var e=this;function t(e){return r.a.createElement("a",{href:"https://darksky.net/poweredby/",target:"_blank",rel:"noopener noreferrer",className:"d-none d-sm-block"},r.a.createElement("img",{src:"darkSky.png",alt:"Dark Sky Logo",id:"darkSkyLogo",className:"mt-3 mr-3 rounded"}))}return this.state.haveLocation?this.state.days?r.a.createElement("div",{className:"container-fluid p-3 d-flex flex-column justify-content-center align-items-center"},r.a.createElement(C,{hourlyType:this.state.type.hourly,hourlyGraphType:this.state.type.hourlyGraph,minutelyType:this.state.type.minutely,onTempClick:this.handleTempClick,onHourlyClick:this.handleHourlyClick,onHourlyGraphTypeClick:this.handleHourlyGraphTypeClick,onMinutelyClick:this.handleMinutelyClick,unit:this.state.unit}),r.a.createElement("div",{className:"container h-auto mt-4 p-3 d-flex flex-column border border-dark rounded"},r.a.createElement("div",{className:"display-3 text-center mb-1"},"Weekly"),r.a.createElement(k,{day:this.state.days[this.state.selectedDay],unit:this.state.unit}),r.a.createElement(b,{days:this.state.days,onDayClick:this.handleDayClick,selectedDay:this.state.selectedDay,unit:this.state.unit})),r.a.createElement("div",{className:"container px-3 pb-3 h-auto mt-4 border border-dark rounded"},r.a.createElement("div",{className:"display-3 text-center mb-1"},"Hourly"),r.a.createElement(f,{hours:this.state.hours,unit:this.state.unit,type:this.state.type.hourly,graphType:this.state.type.hourlyGraph})),r.a.createElement(t,null)):r.a.createElement(g,null):r.a.createElement("div",{className:"container-fluid d-flex flex-column align-items-center"},r.a.createElement("div",{id:"console"}),r.a.createElement("button",{className:"btn mt-3 bg-shade",onClick:this.getCurrentLocation},"Get Current Location"),r.a.createElement("div",{className:"m-4"},"Or"),r.a.createElement("div",{className:"container p-3 d-flex flex-column align-items-center bg-shade"},r.a.createElement("div",null,"Enter a location"),r.a.createElement("div",{className:"row my-2"},r.a.createElement("input",{className:"col-12 col-md mx-md-2 px-2 py-1 border-0 bg-shade",placeholder:"Latitude",type:"number",value:this.state.lat,onChange:function(t){return Math.abs(t.target.value)>180?e.setState({lat:t.target.value/Math.abs(t.target.value)*180}):e.setState({lat:t.target.value})},onKeyPress:this.handleKeyPress}),r.a.createElement("input",{className:"col-12 col-md mx-md-2 mt-1 mt-md-0 px-2 py-1 border-0 bg-shade",placeholder:"Longitude",type:"number",value:this.state.lon,onChange:function(t){return Math.abs(t.target.value)>180?e.setState({lon:t.target.value/Math.abs(t.target.value)*180}):e.setState({lon:t.target.value})},onKeyPress:this.handleKeyPress})),r.a.createElement("button",{className:"btn bg-shade",onClick:this.getLocation},"Submit")),r.a.createElement(t,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.dbcc7689.chunk.js.map
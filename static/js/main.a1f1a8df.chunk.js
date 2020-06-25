(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),s=a.n(l),i=(a(12),a(13),a(14),a(1)),o=a.n(i);a(18);class c extends n.Component{render(){var e,t,a=this.props.days[this.props.dayNum],n=a.icon;e="-",t="_",n=(n=n.replace(new RegExp(e,"g"),t)).toUpperCase();var l,s=a.apparentTemperatureMax,i=a.apparentTemperatureMin;return"si"===this.props.unit&&(s=5/9*(s-32),i=5/9*(i-32)),r.a.createElement("div",{id:"dayWrapper",className:"m-2 px-0 py-2 d-flex flex-column align-items-center rounded",onClick:()=>this.props.onClick(this.props.dayNum),style:{backgroundColor:this.props.selectedDay===this.props.dayNum?"rgba(0,0,0,.2)":"",width:"100px"}},r.a.createElement("div",{className:"h5 mb-0"},0===this.props.dayNum?"Today":(l=a.time,["Sun","Mon","Tue","Wed","Thur","Fri","Sat"][new Date(1e3*l).getDay()])),r.a.createElement(o.a,{className:"w-100 h-auto my-2",color:"white",icon:n,autoplay:!0}),r.a.createElement("div",{className:"my-0 d-flex h6"},r.a.createElement("div",null,Math.round(s),"\xb0")," \xa0\xa0 ",r.a.createElement("div",{className:"text-muted"},Math.round(i),"\xb0")))}}var d=c;class p extends n.Component{render(){for(var e=[],t=0;t<this.props.days.length;t++)e.push(r.a.createElement(d,{dayNum:t,days:this.props.days,selectedDay:this.props.selectedDay,onClick:this.props.onDayClick,unit:this.props.unit}));return r.a.createElement("div",{className:"row justify-content-center"},e)}}var h=p,m=a(5);class u extends n.Component{render(){if("individual"===this.props.type){let a=[];a.push(r.a.createElement("div",{className:"col px-0 position-sticky d-flex flex-column align-items-center text-center border-right border-dark",style:{minWidth:"140px",left:0,backgroundColor:"rgb(0,238,238)",zIndex:1}},r.a.createElement("div",{className:"w-75 border-bottom border-dark"},"Time"),r.a.createElement("div",null,"AM/PM"),r.a.createElement(o.a,{style:{width:"80px",height:"40px"},color:"white",icon:"CLOUDY",autoplay:!0}),r.a.createElement("div",null,"Temp \xb0","si"===this.props.unit?"C":"F"),r.a.createElement("div",{className:"w-100 border-top border-dark"},"Precip Chance"),r.a.createElement("div",{className:"w-100 border-top border-dark"},"Humidity"),r.a.createElement("div",{className:"w-100 border-top border-dark"},"Wind Speed ","si"===this.props.unit?"m/s":"m/h")));for(let n=0;n<this.props.hours.length;n++){let l=this.props.hours[n],s=new Date(1e3*l.time).getHours(),i="AM";s>=12&&(s-=12,i="PM"),0===s&&(s=12);let c=l.apparentTemperature,d=l.windSpeed;"si"===this.props.unit&&(c=5/9*(c-32),d/=2.237);let p=l.icon;e="-",t="_",p=p.replace(new RegExp(e,"g"),t),p=p.toUpperCase(),a.push(r.a.createElement("div",{className:"col px-0 d-flex flex-column align-items-center text-center ".concat(n!==this.props.hours.length-1?"border-right border-dark":""),style:{minWidth:"65px"}},r.a.createElement("div",{className:"w-75 border-bottom border-dark"},s),r.a.createElement("div",null,i),r.a.createElement(o.a,{style:{width:"80px",height:"40px"},color:"white",icon:p,autoplay:!0}),r.a.createElement("div",null,c.toFixed(1),"\xb0"),r.a.createElement("div",{className:"w-100 border-top border-dark"},Math.round(100*l.precipProbability),"%"),r.a.createElement("div",{className:"w-100 border-top border-dark"},Math.round(100*l.humidity),"%"),r.a.createElement("div",{className:"w-100 border-top border-dark"},d.toFixed(2))))}return r.a.createElement("div",{className:"d-flex flex-row border border-dark",style:{overflow:"scroll"}},a)}if("graph"===this.props.type){let e=[],t=["Temperature","Precipitation Chance"],a=parseInt(this.props.graphType);e.push(["Hour",t[a],{role:"tooltip",type:"string",p:{html:!0}}]);let n="decimal";1===a&&(n="percent");let l,s,i=0,o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];for(let r=0;r<this.props.hours.length;r++){let t=this.props.hours[r];0===r&&(l=t.time);let n,c=[(t.time-l)/3600];0===a?(n=t.apparentTemperature,"si"===this.props.unit&&(n=5/9*(n-32),n=parseFloat(n.toFixed(2)))):1===a&&(n=parseFloat(t.precipProbability.toFixed(2))),c.push(n);let d="\xb0";1===a&&(d="%");let p=new Date(1e3*t.time),h=p.getHours(),m="AM";0===r?(h="Now",m=""):(0===h&&0!==r&&(s=0===i++?" Tomorrow":" "+o[p.getDay()]),h>=12&&(h-=12,m="PM"),0===h&&(h=12)),c.push('\n\t\t\t\t\t<div class="p-2 d-flex flex-column align-items-center text-center" style="font: 12pt Courier">\n\t\t\t\t\t<div class="w-75 mb-2 border-bottom border-dark">'.concat(h," ").concat(m).concat(s||"","</div>\n\t\t\t\t\t<div>").concat(1===a?100*n:n).concat(d).concat(1===a?t.precipType?" Chance of ".concat(t.precipType):" Chance of Precipitation":"","</div>\n\t\t\t\t\t</div>\n\t\t\t\t")),e.push(c)}return r.a.createElement("div",{className:"border border-dark rounded bg-shade"},r.a.createElement(m.a,{chartType:"ScatterChart",loader:r.a.createElement("div",{className:"text-center"},"Loading Chart"),data:e,options:{title:"".concat(t[a]," over the next 48 hours"),hAxis:{title:"Hour",gridlines:{color:"black"}},vAxis:{title:t[a],format:n,gridlines:{color:"black"}},legend:"none",colors:["white"],backgroundColor:"transparent",tooltip:{isHtml:!0}}}))}var e,t}}var y=u;class b extends n.Component{constructor(e){super(e),this.state={width:0,height:0},this.updateWindowDimensions=this.updateWindowDimensions.bind(this)}componentDidMount(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}componentWillUnmount(){window.removeEventListener("resize",this.updateWindowDimensions)}updateWindowDimensions(){this.setState({width:window.innerWidth})}render(){var e=this.props.day,t=(e.apparentTemperatureHigh+e.apparentTemperatureLow)/2,a=e.windSpeed,n="m/h",l=e.precipAccumulation,s="in";"si"===this.props.unit&&(t=5/9*(t-32),a/=2.237,n="m/s",l*=2.54,s="cm");var i,o="h1";return this.state.width<=767&&(o=this.state.width<=575?"h4":"h3"),r.a.createElement("div",{className:"row mx-2 mb-3"},r.a.createElement("div",{className:"col-12 col-md-6 mb-3 mb-md-0 d-flex flex-column text-center text-md-left"},r.a.createElement("div",{className:"display-4"},(i=e.time,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(1e3*i).getDay()])),r.a.createElement("div",{className:"h3 text-capitalize"},e.precipProbability>=.3?e.precipType:""),r.a.createElement("div",{className:"display-1 mt-n3 mb-n2"},Math.round(t),"\xb0"),r.a.createElement("div",null,e.summary)),r.a.createElement("div",{className:"col-12 col-md-6 ".concat(o," font-weight-normal d-flex flex-column text-center text-md-left")},r.a.createElement("div",null,"Precipitation: ",Math.round(100*e.precipProbability),"%"),l&&"snow"===e.precipType&&e.precipProbability>=.3?r.a.createElement("div",null,"Accumulation: ","".concat(l.toFixed(2)," ").concat(s)):"",r.a.createElement("div",null,"Humidity: ",Math.round(100*e.humidity),"%"),r.a.createElement("div",null,"Wind Speed: ",a.toFixed(2)," ",n)))}}var v=b;var E={searchWeather:(e,t)=>fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/".concat("f22bbd8641b71b57cc2c0de39a62ff4d","/").concat(e,",").concat(t)).then(e=>e.json()).then(e=>{if(e)return void 0===e.daily?null:(console.log(e),{days:e.daily,hours:e.hourly,minutes:e.minutely})})};a(19);class g extends n.Component{render(){return r.a.createElement("div",{className:"preloader",style:{opacity:"1"}},r.a.createElement("svg",{version:"1.1",id:"sun",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"10px",height:"10px",viewBox:"0 0 10 10",enableBackground:"new 0 0 10 10",xmlSpace:"preserve",style:{opacity:"1",marginLeft:"0px",marginTop:"0px"}},r.a.createElement("g",null,r.a.createElement("path",{fill:"none",d:"M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z"}),r.a.createElement("path",{fill:"none",d:"M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z"}),r.a.createElement("path",{fill:"none",d:"M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z"}),r.a.createElement("path",{fill:"none",d:"M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z"}),r.a.createElement("path",{fill:"none",d:"M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z"}),r.a.createElement("path",{fill:"none",d:"M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z"}),r.a.createElement("path",{fill:"none",d:"M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z"}),r.a.createElement("path",{fill:"none",d:"M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z"}),r.a.createElement("path",{fill:"none",d:"M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z"}),r.a.createElement("path",{fill:"none",d:"M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z"}),r.a.createElement("path",{fill:"none",d:"M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z"}),r.a.createElement("path",{fill:"none",d:"M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z"}),r.a.createElement("path",{fill:"none",d:"M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z"}))),r.a.createElement("svg",{version:"1.1",id:"cloud",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"10px",height:"10px",viewBox:"0 0 10 10",enableBackground:"new 0 0 10 10",xmlSpace:"preserve"},r.a.createElement("path",{fill:"none",d:"M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z"})),r.a.createElement("div",{className:"rain"},r.a.createElement("span",{className:"drop"}),r.a.createElement("span",{className:"drop"}),r.a.createElement("span",{className:"drop"}),r.a.createElement("span",{className:"drop"}),r.a.createElement("span",{className:"drop"}),r.a.createElement("span",{className:"drop"}),r.a.createElement("span",{className:"drop"}),r.a.createElement("span",{className:"drop"}),r.a.createElement("span",{className:"drop"}),r.a.createElement("span",{className:"drop"})),r.a.createElement("div",{className:"text"},"LOOKING OUTSIDE FOR YOU... ONE SEC"))}}var C=g;class x extends n.Component{render(){return r.a.createElement("div",{className:"col-12 col-sm-6 col-md-3 mx-auto p-3 border border-dark rounded"},r.a.createElement("div",{className:"row d-flex justify-content-center"},r.a.createElement("button",{className:"btn col-4 bg-shade",onClick:()=>this.props.onTempClick("F"),style:{border:"im"===this.props.unit?"1px solid black":"none"}},"F\xb0"),r.a.createElement("button",{className:"btn col-4 bg-shade",onClick:()=>this.props.onTempClick("C"),style:{border:"si"===this.props.unit?"1px solid black":"none"}},"C\xb0")),r.a.createElement("div",{className:"mt-3 text-center"},"Hourly Forecast"),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("button",{className:"btn col-4 col-sm-6 col-lg-5 col-xl-4 bg-shade",onClick:()=>this.props.onHourlyClick("individual"),style:{border:"individual"===this.props.hourlyType?"1px solid black":"none"}},"Individual"),r.a.createElement("button",{className:"btn col-4 col-sm-5 col-lg-4 bg-shade",onClick:()=>this.props.onHourlyClick("graph"),style:{border:"graph"===this.props.hourlyType?"1px solid black":"none"}},"Graph")),"graph"===this.props.hourlyType?r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("button",{className:"btn col bg-shade",onClick:()=>this.props.onHourlyGraphTypeClick(0),style:{border:0===this.props.hourlyGraphType?"1px solid black":"none"}},"Temperature"),r.a.createElement("button",{className:"btn col bg-shade",onClick:()=>this.props.onHourlyGraphTypeClick(1),style:{border:1===this.props.hourlyGraphType?"1px solid black":"none"}},"Precipitation Chance")):"")}}var k=x;class w extends n.Component{constructor(e){function t(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var r=a[n];" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""}super(e),this.handleDayClick=this.handleDayClick.bind(this),this.handleTempClick=this.handleTempClick.bind(this),this.handleHourlyClick=this.handleHourlyClick.bind(this),this.handleHourlyGraphTypeClick=this.handleHourlyGraphTypeClick.bind(this),this.handleMinutelyClick=this.handleMinutelyClick.bind(this),this.getLocation=this.getLocation.bind(this),this.getCurrentLocation=this.getCurrentLocation.bind(this),this.handleKeyPress=this.handleKeyPress.bind(this);var a=t("lat"),n=t("lon"),r=t("unit");""===r&&(r="im");var l=t("hourlyType")||"individual",s=parseInt(t("hourlyGraphType"))||0,i=t("minutelyType")||"individual";a&&n?(this.state={selectedDay:0,unit:r,haveLocation:!0,lat:a,lon:n,type:{hourly:l,minutely:i,hourlyGraph:s}},this.getLocation()):this.state={selectedDay:0,unit:r,haveLocation:!1,lat:"",lon:"",type:{hourly:l,minutely:i,hourlyGraph:s}}}handleDayClick(e){this.setState({selectedDay:e})}handleTempClick(e){this.setState({unit:"F"===e?"im":"si"}),document.cookie="unit="+("F"===e?"im":"si")}handleHourlyClick(e){this.setState({type:{hourly:e,minutely:this.state.type.minutely,hourlyGraph:this.state.type.hourlyGraph}}),document.cookie="hourlyType="+e}handleHourlyGraphTypeClick(e){this.setState({type:{hourly:this.state.type.hourly,minutely:this.state.type.minutely,hourlyGraph:e}}),document.cookie="hourlyGraphType="+e}handleMinutelyClick(e){this.setState({type:{hourly:this.state.type.hourly,minutely:e,hourlyGraph:this.state.type.hourlyGraph}}),document.cookie="minutelyType="+e}getLocation(){var e=this.state.lat,t=this.state.lon;e&&t&&(this.setState({haveLocation:!0}),E.searchWeather(e,t).then(e=>{null==e?(this.setState({haveLocation:!1}),document.getElementById("console").style.display="block",document.getElementById("console").innerHTML="Invalid Location"):(this.setState({days:e.days.data,hours:e.hours.data,minutes:e.minutes.data}),document.cookie="lat="+this.state.lat,document.cookie="lon="+this.state.lon)}))}getCurrentLocation(){this.setState({haveLocation:!0}),navigator.geolocation.getCurrentPosition(e=>{this.setState({lat:e.coords.latitude,lon:e.coords.longitude}),this.getLocation()})}handleKeyPress(e){"Enter"===e.key&&this.getLocation()}render(){function e(e){return r.a.createElement("a",{href:"https://darksky.net/poweredby/",target:"_blank",rel:"noopener noreferrer",className:"d-none d-sm-block"},r.a.createElement("img",{src:"darkSky.png",alt:"Dark Sky Logo",id:"darkSkyLogo",className:"mt-3 mr-3 rounded"}))}return this.state.haveLocation?this.state.days?r.a.createElement("div",{className:"container-fluid p-3 d-flex flex-column justify-content-center align-items-center"},r.a.createElement(k,{hourlyType:this.state.type.hourly,hourlyGraphType:this.state.type.hourlyGraph,minutelyType:this.state.type.minutely,onTempClick:this.handleTempClick,onHourlyClick:this.handleHourlyClick,onHourlyGraphTypeClick:this.handleHourlyGraphTypeClick,onMinutelyClick:this.handleMinutelyClick,unit:this.state.unit}),r.a.createElement("div",{className:"container h-auto mt-4 p-3 d-flex flex-column border border-dark rounded"},r.a.createElement("div",{className:"display-3 text-center mb-1"},"Weekly"),r.a.createElement(v,{day:this.state.days[this.state.selectedDay],unit:this.state.unit}),r.a.createElement(h,{days:this.state.days,onDayClick:this.handleDayClick,selectedDay:this.state.selectedDay,unit:this.state.unit})),r.a.createElement("div",{className:"container px-3 pb-3 h-auto mt-4 border border-dark rounded"},r.a.createElement("div",{className:"display-3 text-center mb-1"},"Hourly"),r.a.createElement(y,{hours:this.state.hours,unit:this.state.unit,type:this.state.type.hourly,graphType:this.state.type.hourlyGraph})),r.a.createElement(e,null)):r.a.createElement(C,null):r.a.createElement("div",{className:"container-fluid d-flex flex-column align-items-center"},r.a.createElement("div",{id:"console"}),r.a.createElement("button",{className:"btn mt-3 bg-shade",onClick:this.getCurrentLocation},"Get Current Location"),r.a.createElement("div",{className:"m-4"},"Or"),r.a.createElement("div",{className:"container p-3 d-flex flex-column align-items-center bg-shade"},r.a.createElement("div",null,"Enter a location"),r.a.createElement("div",{className:"row my-2"},r.a.createElement("input",{className:"col-12 col-md mx-md-2 px-2 py-1 border-0 bg-shade",placeholder:"Latitude",type:"number",value:this.state.lat,onChange:e=>Math.abs(e.target.value)>180?this.setState({lat:e.target.value/Math.abs(e.target.value)*180}):this.setState({lat:e.target.value}),onKeyPress:this.handleKeyPress}),r.a.createElement("input",{className:"col-12 col-md mx-md-2 mt-1 mt-md-0 px-2 py-1 border-0 bg-shade",placeholder:"Longitude",type:"number",value:this.state.lon,onChange:e=>Math.abs(e.target.value)>180?this.setState({lon:e.target.value/Math.abs(e.target.value)*180}):this.setState({lon:e.target.value}),onKeyPress:this.handleKeyPress})),r.a.createElement("button",{className:"btn bg-shade",onClick:this.getLocation},"Submit")),r.a.createElement(e,null))}}var f=w;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}],[[7,1,2]]]);
//# sourceMappingURL=main.a1f1a8df.chunk.js.map
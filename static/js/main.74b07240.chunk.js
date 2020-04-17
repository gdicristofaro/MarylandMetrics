(this["webpackJsonpmaryland-metrics"]=this["webpackJsonpmaryland-metrics"]||[]).push([[0],{205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),l=a.n(o),i=(a(87),a(76)),c=a(51),s=a.n(c),u="STMA",d="STMA_DELTA",m="STMA_PERC_DELTA",h={},f=function(e){return Math.round(1e3*e)/1e3};h.PercentDelta=function(e){var t=e.TotalCases,a=e.CaseDelta;return t?f(a/t):""},h.ReportDate=function(e){return s()(new Date(e.ReportDate)).format("MM/DD/YYYY")},h[d]=function(e,t){return t&&t[u]?(e[u]-t[u]).toString():""},h[m]=function(e,t){return t&&t[u]?f((e[u]-t[u])/e[u]):""};var C=["ALLE","ANNE","BALT","BCITY","CALV","CARO","CARR","CECI","CHAR","DORC","FRED","GARR","HARF","HOWA","KENT","MONT","PRIN","QUEE","SOME","STMA","TALB","WASH","WICO","WORC"],p=["ReportDate","TotalCases","CaseDelta","PercentDelta",u,d,m,"ALLE","ANNE","BALT","BCITY","CALV","CARO","CARR","CECI","CHAR","DORC","FRED","GARR","HARF","HOWA","KENT","MONT","PRIN","QUEE","SOME","TALB","WASH","WICO","WORC","deaths","deathALLE","deathANNE","deathBALT","deathBCITY","deathCALV","deathCARO","deathCARR","deathCECI","deathCHAR","deathDORC","deathFRED","deathGARR","deathHARF","deathHOWA","deathKENT","deathMONT","deathPRIN","deathQUEE","deathSTMA","deathSOME","deathTALB","deathWASH","deathWICO","deathWORC"],E=a(224),R=a(226),A=a(230),g=a(229),v=a(225),y=a(227),D=a(228),T=["PercentDelta",m],O=function(e){var t=p,a=e.data;return r.a.createElement(E.a,null,r.a.createElement(v.a,{style:{maxHeight:600}},r.a.createElement(R.a,{stickyHeader:!0,"aria-label":"sticky table",size:"small"},r.a.createElement(y.a,null,r.a.createElement(D.a,null,t.map((function(e){return r.a.createElement(g.a,{key:e,align:"left"},e)})))),r.a.createElement(A.a,null,a.map((function(e){return r.a.createElement(D.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.code},t.map((function(t){var a,n=e[t];return r.a.createElement(g.a,{key:t,align:"left"},T.indexOf(t)>=0?(a=n)?Math.round(1e3*a)/10+"%":"":n)})))}))))))},b=a(232),L=a(233),M=a(74),S=function(e){var t=e.lines,a=e.title,n=e.dateLabels,o=e.logarithmic,l=e.displayLegend,i=e.height,c={labels:n,datasets:t.map((function(e){return{label:e.title,fill:!!e.fillColor,lineTension:.1,backgroundColor:e.fillColor,borderColor:e.lineColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:e.lineColor,pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:e.lineColor,pointHoverBorderColor:e.lineColor,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e.values}}))},s={title:{text:a,display:!0},responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{display:!0}],yAxes:[{display:!0,type:o?"logarithmic":void 0}]},legend:{display:l,position:"bottom"}};return r.a.createElement("div",{style:{height:i||300,marginBottom:0}},r.a.createElement(M.a,{data:c,options:s}))},B=function(e){return e?e.reduce((function(e,t){return e+t}),0)/e.length:0},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,a=Math.floor(t),n=a,r=Math.floor(n/2),o=n-r,l=e.length;return e.map((function(t,a){return B(e.slice(Math.max(0,a-r),Math.min(l,a+o)))}))},k=a(184).convertArrayToCSV,W=a(189),I=(0,a(190).default)({count:30}).map((function(e){return e.toString()})),N=function(e){var t=["52, 163, 73","51, 72, 176","145, 36, 36"];return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{padding:"1rem"},r.a.createElement(O,e),r.a.createElement(L.a,{onClick:function(){return W(k(e.data),"data.csv","text/csv")}},"Download CSV")),["TotalCases","CaseDelta","PercentDelta",u,d,m].map((function(a,n){return r.a.createElement(b.a,{padding:"1rem"},r.a.createElement(S,{displayLegend:!1,logarithmic:!1,dateLabels:e.data.map((function(e){return e.ReportDate})),lines:[{lineColor:"rgb(".concat(t[n%t.length],")"),fillColor:"rgb(".concat(t[n%t.length],", 0.35)"),title:a,values:e.data.map((function(e){return e[a]}))}],title:a,key:a}))})),[{title:"Cases by County",datasets:C.map((function(t){return{title:t,data:e.data.map((function(e){return e[t]}))}}))},{title:"5-Day Moving Average",datasets:C.map((function(t){return{title:t,data:H(e.data.map((function(e){return e[t]})))}}))}].map((function(t){return r.a.createElement(b.a,{padding:"1rem"},r.a.createElement(S,{height:"90vh",displayLegend:!0,logarithmic:!0,dateLabels:e.data.map((function(e){return e.ReportDate})),lines:t.datasets.map((function(e,t){return{lineColor:I[t],title:e.title,values:e.data}})),title:t.title,key:t.title}))})))},w=function(e){return r.a.createElement("h1",null,"ERROR: ",e.message)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));fetch("https://services.arcgis.com/njFNhDsUCentVYJW/arcgis/rest/services/MASTER_CaseTracker_1/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=ReportDate%20asc&resultOffset=0&resultRecordCount=2000&cacheHint=true").then((function(e){return e.json()})).then((function(e){var t=e.features.map((function(e){return e.attributes}));return t.map((function(e,a){var n,r={},o=Object(i.a)(p);try{for(o.s();!(n=o.n()).done;){var l=n.value;h[l]?r[l]=h[l](e,a>0?t[a-1]:void 0):r[l]=e[l]}}catch(c){o.e(c)}finally{o.f()}return r}))})).then((function(e){l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,{data:e})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))})).catch((function(e){console.log("ERROR:",e),l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,{message:e})),document.getElementById("root"))}))},82:function(e,t,a){e.exports=a(205)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.74b07240.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(46)},26:function(e,t,n){},27:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),s=n.n(i),c=(n(26),n(2)),o=n(3),u=n(5),l=n(4),h=n(6),p=(n(27),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={showDetails:!1},n.handleShowDetails=function(){!1===n.state.showDetails?n.setState({showDetails:!0}):n.setState({showDetails:!1})},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showDetails;return r.a.createElement("div",{className:"event"},r.a.createElement("div",{className:"event__Overview"},r.a.createElement("p",{className:"event__Overview--name"},this.props.event.name),r.a.createElement("p",{className:"event__Overview--localDate"},this.props.event.local_date),r.a.createElement("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()}},"show details")),t&&r.a.createElement("div",{className:"event__Details"},r.a.createElement("p",{className:"event__Details--description"},this.props.event.description)))}}]),t}(a.Component)),d=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.props.events.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(p,{event:e}))}))}}]),t}(a.Component),m=n(7),v=n.n(m),f=n(8),g=n(9),b=n.n(g),w={city:{id:1007700,city:"M\xfcnchen",lat:48.14,lon:11.58,state:"",country:"de",zip:"meetup3",member_count:1257},events:[{created:1563825339e3,duration:9e6,id:"263370107",name:"Microservices mit dem MicroProfile 3.x",rsvp_limit:80,date_in_series_pattern:!1,status:"upcoming",time:15669252e5,local_date:"2019-08-27",local_time:"19:00",updated:1563825339e3,utc_offset:72e5,waitlist_count:79,yes_rsvp_count:80,venue:{id:26266792,name:"adesso AG",lat:53.54524230957031,lon:9.950983047485352,repinned:!1,address_1:"Gro\xdfe Elbstra\xdfe 36",city:"Hamburg",country:"de",localized_country_name:"Deutschland"},group:{created:1387402147e3,name:"Java User Group Hamburg",id:11500362,join_mode:"open",lat:53.54999923706055,lon:10,urlname:"jug-hamburg",who:"Mitglieder",localized_location:"Hamburg, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/jug-hamburg/events/263370107/",description:"<p>Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ",visibility:"public",member_pay_fee:!1}]};function y(){return(y=Object(f.a)(v.a.mark(function e(t){var n,a,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,E();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,b.a.get(a);case 9:return r=e.sent,e.abrupt("return",r.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}function _(e,t,n){return k.apply(this,arguments)}function k(){return(k=Object(f.a)(v.a.mark(function e(t,n,a){var r,i,s;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",w.events);case 2:return e.next=4,E();case 4:if(!(r=e.sent)){e.next=13;break}return i="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+r,t&&n&&(i+="&lat="+t+"&lon="+n),a&&(i+="&page="+a),e.next=11,b.a.get(i);case 11:return s=e.sent,e.abrupt("return",s.data);case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}function E(){var e=localStorage.getItem("access_token");if(!e){var t=new URLSearchParams(window.location.search).get("code");return t?O("get",t):(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=p7ek3hd2gcir2hpcvsih91or6d&response_type=code&redirect_uri=https://guennithegun.github.io/meetup/",null)}var n=localStorage.getItem("last_saved_time");return e&&Date.now()-n<36e5?e:O("renew",localStorage.getItem("refresh_token"))}function O(e,t){return j.apply(this,arguments)}function j(){return(j=Object(f.a)(v.a.mark(function e(t,n){var a,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://977jsu04r2.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://977jsu04r2.execute-api.eu-central-1.amazonaws.com/dev/api/refreshtoken/"+n),e.next=3,b.a.get(a);case 3:return r=e.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",r.data.access_token);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}var S=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",suggestions:[]},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t}),function(e){return y.apply(this,arguments)}(t).then(function(e){return n.setState({suggestions:e})})},n.handleItemClicked=function(e,t,a){n.setState({query:e,suggestions:[]}),n.props.updateEvents(t,a)},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,placeholder:this.props.defaultCity}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map(function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)})))}}]),t}(a.Component),z=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={numberOfEvents:32},n.handleInputChanged=function(e){var t=e.target.value;n.props.updateEvents(null,null,t)},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("label",null,"Number of Events: "),r.a.createElement("input",{type:"text",id:"numberOfEvents__input",value:this.state.numberOfEvents,onChange:this.handleInputChanged}))}}]),t}(a.Component),C=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={events:[],page:null,defaultCity:"",lat:null,lon:null},n.updateEvents=function(e,t,a){e&&t?_(e,t,n.state.page).then(function(e){return n.setState({events:e.events,lat:e.city.lat,lon:e.city.lon})}):a?_(n.state.lat,n.state.lon,a).then(function(e){return n.setState({events:e.events,page:a})}):_(n.state.lat,n.state.lon,n.state.page).then(function(e){return n.setState({events:e.events})})},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;_().then(function(t){return e.setState({events:t.events,defaultCity:t.city.city,lat:t.city.lat,lon:t.city.lon})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,{updateEvents:this.updateEvents,defaultCity:this.state.defaultCity}),r.a.createElement(d,{events:this.state.events}),r.a.createElement(z,{updateEvents:this.updateEvents,numberOfEvents:this.state.events.length,lat:this.state.lat,lon:this.state.lon}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.54f3eabe.chunk.js.map
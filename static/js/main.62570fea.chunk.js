(this.webpackJsonpcovidToday=this.webpackJsonpcovidToday||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=(n(12),n(13),n(1)),i=n(2),s=n(4),u=n(3),h=function(e){e.id;var t=e.countryName,n=e.totalConfirmed,a=e.totalDeaths,o=e.newDeaths,c=e.newConfirmed,l=e.countryCode;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-7"},r.a.createElement("h1",null,t),r.a.createElement("img",{src:"https://www.countryflags.io/".concat(l,"/shiny/64.png")}),r.a.createElement("h3",null,"Total confirmed:"),r.a.createElement("p",null,n),r.a.createElement("h3",null,"New cases:"),r.a.createElement("p",null,c),r.a.createElement("h3",null,"New deaths:"),r.a.createElement("p",null,o),r.a.createElement("h3",null,"Total deaths:"),r.a.createElement("p",null,a))},m=function(e){var t=e.countries;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(h,{key:t,countryName:e.Country,totalConfirmed:e.TotalConfirmed,newConfirmed:e.NewConfirmed,newDeaths:e.NewDeaths,totalDeaths:e.TotalDeaths,countryCode:e.CountryCode})})))},d=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{type:"search",placeholder:"search a country",className:"pa3 bab--green bg-lightest-blue ma3",onChange:t}))},f=(n(14),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooooops. This is not good"):this.props.children}}]),n}(a.Component)),p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChange=function(t){console.log(t.target.value);var n=t.target.value;e.setState((function(){return{searchfield:n}}))},e.state={countries:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(t){return console.log(t.Global.NewConfirmed),e.setState({countries:t.Countries})}))}},{key:"render",value:function(){var e=this.state,t=e.countries,n=e.searchfield,a=t.filter((function(e){return e.Country.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("header",null,r.a.createElement("h1",{className:"title"},"Today's Covid-19 data"),r.a.createElement("h3",null,"Data sourced from Johns Hopkins CSSE through ",r.a.createElement("a",{href:"https://covid19api.com"}," Covid19api"))),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(m,{countries:a}))):r.a.createElement("h1",null,"Loading")}}]),n}(a.Component);c.a.render(r.a.createElement("div",null,r.a.createElement(p,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.62570fea.chunk.js.map
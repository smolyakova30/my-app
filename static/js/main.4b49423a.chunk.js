(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e){e.exports=JSON.parse('[{"id":1,"name":"Budget Tracker","image":"https://raw.githubusercontent.com/smolyakova30/my-app/main/src/components/Projects/budget.JPG","github":"https://github.com/smolyakova30/budgetTracker","deploy":"https://evening-oasis-49511.herokuapp.com/","topics":"This is budget tracker application to allow for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection."},{"id":2,"name":"Weather dashboard","image":"https://raw.githubusercontent.com/smolyakova30/my-app/main/src/components/Projects/weather.JPG","github":"https://github.com/smolyakova30/weather-dashboard","deploy":"https://smolyakova30.github.io/weather-dashboard/","topics":"This is the weather application that displays current weather information as well as a five-day forecast for the user-selected city."},{"id":3,"name":"Work Day Scheduler","image":"https://raw.githubusercontent.com/smolyakova30/my-app/main/src/components/Projects/scheduler.JPG","github":"https://github.com/smolyakova30/workDayScheduler","deploy":"https://smolyakova30.github.io/workDayScheduler/","topics":"This is a simple calendar application that allows a user to save events for each hour of the day."},{"id":4,"name":"Note taker","image":"https://raw.githubusercontent.com/smolyakova30/my-app/main/src/components/Projects/note.JPG","github":"https://github.com/smolyakova30/note-taker","deploy":"https://infinite-wave-70308.herokuapp.com/","topics":"This is application called \'Note Taker\' that can be used to write and save notes."},{"id":5,"name":"Volley-all (group project)","image":"https://raw.githubusercontent.com/smolyakova30/my-app/main/src/components/Projects/screenshot-login.png","github":"https://github.com/rrcampbell-exe/volley-all","deploy":"https://volley-all.herokuapp.com/login","topics":"Volley-All is a full-stack application that helps taverns and bars manage their recreational volleyball leagues."},{"id":6,"name":"Travel Utopia (group project)","image":"https://raw.githubusercontent.com/smolyakova30/my-app/main/src/components/Projects/Utopia.png","github":"https://github.com/corpraider/Utopia2","deploy":"https://corpraider.github.io/Utopia2/","topics":"This is a website application that allows a user to search for information on any city. "}]')},35:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(12),i=a.n(n),o=(a(35),a(21)),l=a(22),r=a(29),j=a(28),m=a(10),b=a(4),h=a(1);var d=function(){return Object(h.jsxs)("section",{className:"container",children:[Object(h.jsx)("h2",{className:"top-title",children:"Olga Smolyakov"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{style:{alignItems:"center"},children:[Object(h.jsx)("img",{className:"mb-5",id:"avatar",src:"https://avatars.githubusercontent.com/u/58537097?s=400&u=1290b2e7cbfa61c9a6cae296d8de9dd166466eb1&v=4",alt:"Olga Smolyakov"}),Object(h.jsx)("p",{children:"I am a Web Developer located in Wisconsin, US. I have a passion in web development. Currently, I am enrolled into University of Wisconsin extended bootcamp to become a full-stack developer!"}),Object(h.jsx)("p",{children:"Creative, well organized, independent with attention to details. Fan of travels (visited 10 countries and not planning to stop), books, TV series and dogs."}),Object(h.jsx)("p",{children:"Interested in front-end development and working with creative people!"})]})]})},p=a(13),u=a(5),O=a(19);var g=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(O.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)({name:!1,email:!1,comment:!1,message:""}),i=Object(O.a)(n,2),o=i[0],l=i[1],r=a.name,j=a.email,m=a.message;function b(e){if("name"===e.target.name)e.target.value.length?l(Object(u.a)(Object(u.a)({},o),{},{name:!1})):l(Object(u.a)(Object(u.a)({},o),{},{name:!0}));else if(e.target.value.length?l(Object(u.a)(Object(u.a)({},o),{},{name:!1})):l(Object(u.a)(Object(u.a)({},o),{},{name:!0,message:"Enter your name"})),"email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);l(t?Object(u.a)(Object(u.a)({},o),{},{email:!1}):Object(u.a)(Object(u.a)({},o),{},{email:!0,message:"Enter a valid email"}))}else e.target.value.length?l(Object(u.a)(Object(u.a)({},o),{},{email:!1})):l(Object(u.a)(Object(u.a)({},o),{},{email:!0,message:"Enter an email"}));o||s(Object(u.a)(Object(u.a)({},a),{},Object(p.a)({},e.target.name,e.target.value)))}return Object(h.jsxs)("section",{className:"container",children:[Object(h.jsx)("h2",{"data-testid":"h1tag",className:"top-title",children:"Get In Touch"}),Object(h.jsx)("hr",{}),Object(h.jsxs)("form",{class:"justify-content-center",id:"contact-form",children:[Object(h.jsxs)("div",{class:"mt-5",children:[Object(h.jsx)("label",{htmlFor:"name",children:"Enter your name:"}),Object(h.jsx)("input",{class:"form-control",type:"text",name:"name",defaultValue:r,onBlur:b})]}),o.name&&Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"error-text",children:"Please enter your name"})}),Object(h.jsxs)("div",{class:"mt-5",children:[Object(h.jsx)("label",{htmlFor:"email",children:"Your email:"}),Object(h.jsx)("input",{class:"form-control",type:"email",name:"email",defaultValue:j,onBlur:b})]}),o.email&&Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"error-text",children:o.message})}),Object(h.jsxs)("div",{class:"mt-5",children:[Object(h.jsx)("label",{htmlFor:"message",children:"Say something:"}),Object(h.jsx)("textarea",{class:"form-control",name:"message",defaultValue:m,onBlur:b,rows:"7"})]}),o.comment&&Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"error-text",children:"Enter a real comment"})}),Object(h.jsx)("div",{class:"mt-5 mb-5",children:Object(h.jsx)("button",{"data-testid":"button",class:"btn btn-outline-success",type:"submit",onSubmit:function(e){e.preventDefault()},children:"Submit"})})]})]})},x=a(46);var v=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)(x.a,{expand:"lg",bg:"success bg-gradient",sticky:"top",children:[Object(h.jsx)(m.b,{className:"nav-link",to:"/",children:Object(h.jsx)("div",{class:"text-light",children:Object(h.jsx)("h4",{class:"nav-title-font",children:"Olga Smolyakov"})})}),Object(h.jsxs)("ul",{class:"navbar-nav ml-auto navitem-indent",children:[Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)(m.b,{to:"/about",children:Object(h.jsx)("div",{class:"nav-font text-light",children:"About Me"})})}),Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)(m.b,{to:"/portfolio",children:Object(h.jsx)("div",{class:"nav-font text-light",children:"Portfolio"})})}),Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)(m.b,{to:"/resume",children:Object(h.jsx)("div",{class:"nav-font text-light",children:"Resume"})})}),Object(h.jsx)("li",{class:"nav-item",children:Object(h.jsx)(m.b,{to:"/contact",children:Object(h.jsx)("div",{class:"nav-font text-light",children:"Contact"})})})]})]})})};a(16);var f=function(e){return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("div",{className:"img-container",children:Object(h.jsx)("img",{alt:e.name,src:e.image})}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("p",{className:"card-title",children:e.name}),Object(h.jsxs)("p",{class:"proj-icons-container",children:[Object(h.jsx)("a",{href:e.github,children:Object(h.jsx)("img",{class:"project-icon",src:"https://img.icons8.com/fluent/48/000000/github.png",alt:"GitHub Repo"})}),Object(h.jsx)("a",{href:e.deploy,children:Object(h.jsx)("img",{class:"project-icon",src:"https://img.icons8.com/fluent/48/000000/online.png",alt:"Live Application"})})]}),Object(h.jsxs)("p",{class:"topics",children:["(",e.topics,")"]})]})]})},y=a(27);function k(e){return Object(h.jsx)("div",{className:"wrapper",children:e.children})}var w=function(){return Object(h.jsxs)("section",{className:"container mb-5",children:[Object(h.jsxs)("div",{className:"project",children:[Object(h.jsx)("h2",{className:"top-title",children:"My projects"}),Object(h.jsx)("hr",{})]}),Object(h.jsx)(k,{id:"card-data",children:y.map((function(e){return Object(h.jsx)(f,{image:e.image,name:e.name,github:e.github,deploy:e.deploy,topics:e.topics},e.id)}))})]})};var N=function(){return Object(h.jsxs)("section",{class:"container",children:[Object(h.jsx)("h2",{className:"top-title",children:"Resume"}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{class:"mt-5",children:[Object(h.jsx)("h2",{className:"top-title",children:"Olga Smolyakov"}),Object(h.jsx)("ul",{children:Object(h.jsx)("li",{children:"If you are interested to know more about me, please download my resume here:"})}),Object(h.jsx)("a",{href:"https://github.com/smolyakova30/my-app/blob/main/src/components/resume/Olga_Smolyakova%20-%20with%20linkedIn.DOCX?raw=true",class:"link",children:"Click HERE to download"})]})})]})},S=function(e){Object(r.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(h.jsxs)(m.a,{children:[Object(h.jsx)("header",{children:Object(h.jsx)(v,{})}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(h.jsx)(b.a,{to:"/about"})}}),Object(h.jsx)(b.b,{path:"/about",component:d}),Object(h.jsx)(b.b,{path:"/portfolio",component:w}),Object(h.jsx)(b.b,{path:"/contact",component:g}),Object(h.jsx)(b.b,{path:"/resume",component:N})]})]})}}]),a}(c.Component),P=S;var T=function(){return Object(h.jsxs)("footer",{className:"footer bg-success bg-gradient fixed-bottom",children:[Object(h.jsx)("a",{href:"https://github.com/smolyakova30",children:Object(h.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/github.png",alt:"Github",className:"icon"})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/olga-s-9724921b4/",children:Object(h.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/linkedin.png",alt:"LinkedIn",className:"icon"})})]})};a(42);var I=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(P,{}),Object(h.jsx)(T,{})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root")),C()}},[[43,1,2]]]);
//# sourceMappingURL=main.4b49423a.chunk.js.map
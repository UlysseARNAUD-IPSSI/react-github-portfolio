(this["webpackJsonpreact-github-portfolio"]=this["webpackJsonpreact-github-portfolio"]||[]).push([[0],{21:function(e,i,t){},22:function(e,i,t){},28:function(e,i,t){},29:function(e,i,t){},30:function(e,i,t){},31:function(e,i,t){"use strict";t.r(i);var s=t(0),o=t(2),r=t.n(o),a=t(10),n=t.n(a),l=(t(21),t(14)),c=t(6),u=t(11),d=t(12),h=t(5),p=t(15),b=t(13),j=(t(22),t(3)),m=t(4);t(28);var f=function(e){console.log("Profile",{props:e});var i=e.login,t=(e.id,e.node_id,e.avatar_url),o=(e.gravatar_id,e.url,e.html_url),r=(e.followers_url,e.following_url,e.gists_url,e.company),a=(e.starred_url,e.subscriptions_url,e.organizations_url,e.repos_url,e.events_url,e.received_events_url,e.type,e.site_admin,e.name),n=e.location,l=e.bio,c=e.handleBackClick,u={backgroundImage:"url(".concat(t,")")};return Object(s.jsxs)("article",{className:"Profile",children:[Object(s.jsx)("div",{className:"avatar",style:u}),Object(s.jsxs)("div",{className:"Profile-description",children:[a?Object(s.jsx)("div",{className:"username",children:a}):null,i?Object(s.jsx)("a",{href:o,children:Object(s.jsxs)("div",{className:"login",children:["@",i]})}):null,l?Object(s.jsx)("div",{className:"bio",children:l}):null]}),Object(s.jsxs)("div",{className:"Profile-status",children:[r?Object(s.jsxs)("div",{className:"company",children:[Object(s.jsx)(j.a,{icon:m.f}),"\xa0",r]}):null,n?Object(s.jsxs)("div",{className:"location",children:[Object(s.jsx)(j.a,{icon:m.d}),"\xa0",n]}):null]}),Object(s.jsx)("div",{className:"Profile-footer",children:Object(s.jsx)("button",{onClick:c,children:"Retour"})})]})};t(29),t(30);var v=function(e){var i=e.name,t=e.description,o=e.language,r=e.stargazers_count,a=e.forks,n=e.html_url,l=e.handleRepositoryClick,c=e.fork;return Object(s.jsxs)("article",{className:"Repository","data-url":n,onClick:l,"data-is-fork":c,children:[Object(s.jsx)("span",{className:"Repository-name",children:i}),Object(s.jsx)("span",{className:"Repository-description",children:t}),Object(s.jsxs)("div",{className:"Repository-infos",children:[Object(s.jsxs)("span",{className:"Repository-infos-language",children:[Object(s.jsx)(j.a,{icon:m.b}),"\xa0",o]}),Object(s.jsxs)("span",{className:"Repository-infos-stars",children:[Object(s.jsx)(j.a,{icon:m.e}),"\xa0",r]}),Object(s.jsxs)("span",{className:"Repository-infos-stars",children:[Object(s.jsx)(j.a,{icon:m.c}),"\xa0",a]})]})]})};var O=function(e){var i=e.repositories,t=e.handleRepositoryClick;return"string"===typeof i&&(i=JSON.parse(i)),Object(s.jsx)("section",{className:"Repositories",children:i?i.map((function(e){return Object(s.jsx)(v,Object(c.a)(Object(c.a)({},e),{},{handleRepositoryClick:t}),e.id)})):Object(s.jsx)("article",{children:"No repository found"})})},y=function(e){Object(p.a)(t,e);var i=Object(b.a)(t);function t(e){var s;return Object(u.a)(this,t),(s=i.call(this,e)).state={profile:localStorage.getItem(t.KEY_PROFILE_CACHE),repositories:localStorage.getItem(t.KEY_REPOSITORIES_CACHE),repositoriesVisibility:localStorage.getItem(t.KEY_REPOSITORIES_VISIBILITY_CACHE)},s.updateProfile=s.updateProfile.bind(Object(h.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(h.a)(s)),s.handleRepositoryClick=s.handleRepositoryClick.bind(Object(h.a)(s)),s.handleRepositoriesVisibilityClick=s.handleRepositoriesVisibilityClick.bind(Object(h.a)(s)),s}return Object(d.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",t.handleDocumentKeypress,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",t.handleDocumentKeypress,!1)}},{key:"render",value:function(){var e=this.state,i=e.profile,o=e.repositories;return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("section",{className:"App-section",children:[Object(s.jsx)("section",{className:"App-section-main show",children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("h1",{children:["Select a github profile",Object(s.jsx)("br",{}),"to generate a portfolio"]}),Object(s.jsxs)("form",{action:"#",name:"github-profile",children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("input",{type:"text",name:"username",id:"username",placeholder:" "}),Object(s.jsx)("label",{htmlFor:"username",children:"Pseudo Github"})]}),Object(s.jsx)("button",{role:"button",type:"submit",onClick:this.handleSubmit,children:Object(s.jsx)(j.a,{icon:m.a})}),Object(s.jsxs)("aside",{class:"error-helper-wrapper",children:[Object(s.jsx)("small",{className:"error-helper","aria-labelledby":"unknown-user",children:"Unknown user"}),Object(s.jsx)("small",{className:"error-helper","aria-labelledby":"invalid-username",children:"Invalid username"})]})]})]})}),Object(s.jsxs)("section",{className:"App-section-portfolio hide",children:[Object(s.jsx)("aside",{className:"App-section-portfolio-profile",children:Object(s.jsx)(f,Object(c.a)(Object(c.a)({},i),{},{handleBackClick:t.handleBackClick}))}),Object(s.jsxs)("section",{className:"App-section-portfolio-repositories",children:[Object(s.jsxs)("header",{className:"App-section-portfolio-repositories-header",children:[Object(s.jsx)("h2",{children:"Repositories"}),Object(s.jsx)("div",{className:"App-section-portfolio-repositories-actions",children:Object(s.jsxs)("div",{className:"list-button",children:[Object(s.jsx)("button",{className:"active","data-value":"all",onClick:this.handleRepositoriesVisibilityClick,children:"All"}),Object(s.jsx)("button",{"data-value":"owns",onClick:this.handleRepositoriesVisibilityClick,children:"Owns"}),Object(s.jsx)("button",{"data-value":"forks",onClick:this.handleRepositoriesVisibilityClick,children:"Forks"})]})})]}),Object(s.jsx)(O,{repositories:o,handleRepositoryClick:this.handleRepositoryClick})]})]})]})})}},{key:"handleSubmit",value:function(e){var i=this;e.preventDefault();var s=document.forms["github-profile"].elements.username.value;if(s){var o="https://api.github.com/users/".concat(s);fetch(o).then((function(e){return e.json()})).then((function(e){var s=e.message;if(s&&"Not Found"===s)t.handleErrorUnknownUser();else{t.removeClassHasErrorForFormGithubProfile(),i.updateProfile(e);var o=e.repos_url;fetch(o).then((function(e){return e.json()})).then((function(e){i.updateRepositories(e),t.showPortfolioSection()})).catch((function(e){return console.log}))}})).catch((function(e){return console.error}))}else t.handleErrorInvalidUsername()}},{key:"handleRepositoryClick",value:function(e){e.preventDefault();var i=e.target.dataset.url;window.location.href=i}},{key:"handleRepositoriesVisibilityClick",value:function(e){e.preventDefault();var i=e.target,s=i.dataset.value,o=i.closest(".list-button").querySelector("button.active");o&&o.classList.remove("active"),i.classList.add("active"),this.updateRepositoriesVisibility(s),t.toggleRepositoriesVisibility()}},{key:"updateProfile",value:function(e){console.log("App : updateProfile()",{profile:e}),e||(e={}),localStorage.setItem(t.KEY_PROFILE_CACHE,JSON.stringify(e)),this.setState({profile:e})}},{key:"updateRepositories",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("App : updateRepositories()",{repositories:e}),e||(e={}),localStorage.setItem(t.KEY_REPOSITORIES_CACHE,JSON.stringify(e)),this.setState({repositories:e})}},{key:"updateRepositoriesVisibility",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";console.log("App : updateRepositoriesVisibility()",{repositoriesVisibility:e}),localStorage.setItem(t.KEY_REPOSITORIES_VISIBILITY_CACHE,e),this.setState({repositoriesVisibility:e})}}],[{key:"showPortfolioSection",value:function(){var e=document.querySelector(".App-section-portfolio");e.classList.add("show"),e.classList.remove("hide"),document.querySelector(".App-section-main").classList.add("hide")}},{key:"showMainSection",value:function(){var e=document.querySelector(".App-section-main");e.classList.add("show"),e.classList.remove("hide"),document.querySelector(".App-section-portfolio").classList.add("hide")}},{key:"handleDocumentKeypress",value:function(e){27===e.keyCode&&t.showMainSection()}},{key:"toggleRepositoriesVisibility",value:function(){var e=localStorage.getItem(t.KEY_REPOSITORIES_VISIBILITY_CACHE);if(e){var i,s=document.querySelectorAll(".Repository"),o=Object(l.a)(s);try{for(o.s();!(i=o.n()).done;){var r=i.value,a=r.dataset.isFork;"owns"!==e||"true"!==a?"forks"!==e||"false"!==a?r.classList.remove("hide"):r.classList.add("hide"):r.classList.add("hide")}}catch(n){o.e(n)}finally{o.f()}}}},{key:"handleErrorUnknownUser",value:function(){t.removeClassHasErrorForFormGithubProfile("invalid-username"),t.addClassHasErrorForFormGithubProfile("unknown-user")}},{key:"handleErrorInvalidUsername",value:function(){t.removeClassHasErrorForFormGithubProfile("unknown-user"),t.addClassHasErrorForFormGithubProfile("invalid-username")}},{key:"addClassHasErrorForFormGithubProfile",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"unknown-user",i=document.forms["github-profile"];i.classList.add("has-error"),i.classList.add("has-error-"+e)}},{key:"removeClassHasErrorForFormGithubProfile",value:function(){var e=document.forms["github-profile"];e.classList.remove("has-error"),e.classList.remove("has-error-unknown-user"),e.classList.remove("has-error-invalid-username")}},{key:"handleBackClick",value:function(e){e.preventDefault(),t.showMainSection()}}]),t}(r.a.Component);y.KEY_PROFILE_CACHE="github_portfolio_profile_cache",y.KEY_REPOSITORIES_CACHE="github_portfolio_repositories_cache",y.KEY_REPOSITORIES_VISIBILITY_CACHE="github_portfolio_repositories_visibility_cache";var k=y,g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then((function(i){var t=i.getCLS,s=i.getFID,o=i.getFCP,r=i.getLCP,a=i.getTTFB;t(e),s(e),o(e),r(e),a(e)}))};n.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root")),g()}},[[31,1,2]]]);
//# sourceMappingURL=main.e72986b7.chunk.js.map
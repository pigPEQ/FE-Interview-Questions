(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{934:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"session登录态判断处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session登录态判断处理"}},[s._v("#")]),s._v(" session登录态判断处理")]),s._v(" "),a("h2",{attrs:{id:"使用session中间件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用session中间件"}},[s._v("#")]),s._v(" 使用session中间件")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// code ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" session "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'koa-session-minimal'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" MysqlStore "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'koa-mysql-session'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./../config'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// code ...")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Koa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// session存储配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" sessionMysqlConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DATABASE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HOST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 配置session中间件")]),s._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("session")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'USER_SID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MysqlStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sessionMysqlConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// code ...")]),s._v("\n")])])]),a("h2",{attrs:{id:"登录成功后设置session到mysql和设置sessionid到cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录成功后设置session到mysql和设置sessionid到cookie"}},[s._v("#")]),s._v(" 登录成功后设置session到MySQL和设置sessionId到cookie")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" session "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("session\nsession"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isLogin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nsession"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" userResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name\nsession"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userId "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" userResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id\n")])])]),a("h2",{attrs:{id:"需要判断登录态页面进行session判断"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需要判断登录态页面进行session判断"}},[s._v("#")]),s._v(" 需要判断登录态页面进行session判断")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("indexPage")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("ctx")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 判断是否有session")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("session "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isLogin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("userName "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" title "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'work页面'")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'work'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 没有登录态则跳转到错误页面")]),s._v("\n      ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("redirect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/error'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
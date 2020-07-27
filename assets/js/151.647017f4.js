(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{766:function(_,v,t){"use strict";t.r(v);var r=t(10),a=Object(r.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"沙盒：页面和系统之间的隔离墙"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#沙盒：页面和系统之间的隔离墙"}},[_._v("#")]),_._v(" 沙盒：页面和系统之间的隔离墙")]),_._v(" "),t("p",[t("strong",[_._v("从稳定性视角来看，单进程架构的浏览器是不稳定的")]),_._v("，因为只要浏览器进程中的任意一个功能出现异常都有可能影响到整个浏览器，如页面卡死、浏览器崩溃等。不过浏览器的稳定性并不是本文讨论的重点，我们今天主要聊的是"),t("strong",[_._v("浏览器架构是如何影响到操作系统安全的")])]),_._v(" "),t("p",[_._v("浏览器本身的漏洞是单进程浏览器的一个主要问题，如果浏览器被曝出存在漏洞，那么在这些漏洞没有被及时修复的情况下，黑客就有可能通过恶意的页面向浏览器中注入恶意程序，其中最常见的攻击方式是利用"),t("strong",[_._v("缓冲区溢出")]),_._v("，不过需要"),t("strong",[_._v("注意这种类型的攻击和 XSS 注入的脚本是不一样的")])]),_._v(" "),t("ul",[t("li",[_._v("XSS 攻击只是将恶意的 JavaScript 脚本注入到页面中，虽然能窃取一些 Cookie 相关的数据，但是 XSS 无法对操作系统进行攻击。")]),_._v(" "),t("li",[_._v("而通过浏览器漏洞进行的攻击是可以入侵到浏览器进程内部的，可以读取和修改浏览器进程内部的任意内容，还可以穿透浏览器，在用户的操作系统上悄悄地安装恶意软件、监听用户键盘输入信息以及读取用户硬盘上的文件内容。")])]),_._v(" "),t("blockquote",[t("p",[_._v("和 XSS 攻击页面相比，这类攻击无疑是枚“核弹”，它会将整个操作系统的内容都暴露给黑客，这样我们操作系统上所有的资料都是不安全的了。")])]),_._v(" "),t("h2",{attrs:{id:"安全视角下的多进程架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全视角下的多进程架构"}},[_._v("#")]),_._v(" 安全视角下的多进程架构")]),_._v(" "),t("p",[_._v("现代浏览器的设计目标是"),t("strong",[_._v("安全、快速")]),_._v("和"),t("strong",[_._v("稳定")]),_._v("，而这种核弹级杀伤力的安全问题就是一个很大的潜在威胁，因此在设计现代浏览器的体系架构时，需要解决这个问题。")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://blog.poetries.top/img-repo/2019/11/110.png",alt:""}})]),_._v(" "),t("p",[_._v("观察上图，我们知道浏览器被划分为"),t("strong",[_._v("浏览器内核")]),_._v("和"),t("strong",[_._v("渲染内核")]),_._v("两个核心模块，其中浏览器内核是由网络进程、浏览器主进程和 GPU 进程组成的，渲染内核就是渲染进程。那如果我们在浏览器中打开一个页面，这两个模块是怎么配合的呢？")]),_._v(" "),t("p",[_._v("所有的网络资源都是通过浏览器内核来下载的，下载后的资源会通过 IPC 将其提交给渲染进程（浏览器内核和渲染进程之间都是通过 IPC 来通信的）。然后渲染进程会对这些资源进行解析、绘制等操作，最终生成一幅图片。但是渲染进程并不负责将图片显示到界面上，而是将最终生成的图片提交给浏览器内核模块，由浏览器内核模块负责显示这张图片。")]),_._v(" "),t("p",[_._v("设计现代浏览器体系架构时，将浏览器划分为不同的进程是为了增加其稳定性。虽然设计成了多进程架构，不过这些模块之间的沟通方式却有些复杂，也许你还有以下问题：")]),_._v(" "),t("ul",[t("li",[_._v("为什么一定要通过浏览器内核去请求资源，再将数据转发给渲染进程，而不直接从进程内部去请求网络资源？")]),_._v(" "),t("li",[_._v("为什么渲染进程只负责生成页面图片，生成图片还要经过 IPC 通知浏览器内核模块，然后让浏览器内核去负责展示图片？")])]),_._v(" "),t("p",[_._v("通过以上方式不是增加了工程的复杂度吗？")]),_._v(" "),t("p",[_._v("要解释现代浏览器为什么要把这个流程弄得这么复杂，我们就得从系统安全的角度来分析。")]),_._v(" "),t("h2",{attrs:{id:"安全沙箱"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全沙箱"}},[_._v("#")]),_._v(" 安全沙箱")]),_._v(" "),t("p",[_._v("不过在解释这些问题之前，我们得先看看什么是安全沙箱。")]),_._v(" "),t("p",[_._v("上面我们分析过了，由于渲染进程需要执行 DOM 解析、CSS 解析、网络图片解码等操作，如果渲染进程中存在系统级别的漏洞，那么以上操作就有可能让恶意的站点获取到渲染进程的控制权限，进而又获取操作系统的控制权限，这对于用户来说是非常危险的。")]),_._v(" "),t("p",[_._v("因为网络资源的内容存在着各种可能性，所以浏览器会默认所有的网络资源都是不可信的，都是不安全的。但谁也不能保证浏览器不存在漏洞，只要出现漏洞，黑客就可以通过网络内容对用户发起攻击。")]),_._v(" "),t("p",[_._v("我们知道，如果你下载了一个恶意程序，但是没有执行它，那么恶意程序是不会生效的。同理，浏览器之于网络内容也是如此，浏览器可以安全地下载各种网络资源，但是如果要执行这些网络资源，比如解析 HTML、解析 CSS、执行 JavaScript、图片编解码等操作，就需要非常谨慎了，因为一不小心，黑客就会利用这些操作对含有漏洞的浏览器发起攻击。")]),_._v(" "),t("p",[_._v("基于以上原因，我们需要在渲染进程和操作系统之间建一道墙，即便渲染进程由于存在漏洞被黑客攻击，但由于这道墙，黑客就获取不到渲染进程之外的任何操作权限。"),t("strong",[_._v("将渲染进程和操作系统隔离的这道墙就是我们要聊的安全沙箱")])]),_._v(" "),t("p",[_._v("浏览器中的安全沙箱是利用操作系统提供的安全技术，让渲染进程在执行过程中无法访问或者修改操作系统中的数据，在渲染进程需要访问系统资源的时候，需要通过浏览器内核来实现，然后将访问的结果通过 IPC 转发给渲染进程。")]),_._v(" "),t("p",[_._v("安全沙箱最小的保护单位是进程。因为单进程浏览器需要频繁访问或者修改操作系统的数据，所以单进程浏览器是无法被安全沙箱保护的，而现代浏览器采用的多进程架构使得安全沙箱可以发挥作用。")]),_._v(" "),t("h2",{attrs:{id:"安全沙箱如何影响各个模块功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安全沙箱如何影响各个模块功能"}},[_._v("#")]),_._v(" 安全沙箱如何影响各个模块功能")]),_._v(" "),t("p",[_._v("我们知道安全沙箱最小的保护单位是进程，并且能限制进程对操作系统资源的访问和修改，这就意味着如果要让安全沙箱应用在某个进程上，那么这个进程必须没有读写操作系统的功能，比如读写本地文件、发起网络请求、调用 GPU 接口等。")]),_._v(" "),t("p",[_._v("了解了被安全沙箱保护的进程会有一系列的受限操作之后，接下来我们就可以分析渲染进程和浏览器内核各自都有哪些职责，如下图：")]),_._v(" "),t("p",[t("img",{attrs:{src:"http://blog.poetries.top/img-repo/2019/11/111.png",alt:""}})]),_._v(" "),t("p",[_._v("通过该图，我们可以看到由于渲染进程需要安全沙箱的保护，因此需要把在渲染进程内部涉及到和系统交互的功能都转移到浏览器内核中去实现。")]),_._v(" "),t("p",[t("strong",[_._v("那安全沙箱是如何影响到各个模块功能的呢？")])]),_._v(" "),t("h3",{attrs:{id:"_1-持久存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-持久存储"}},[_._v("#")]),_._v(" 1. 持久存储")]),_._v(" "),t("p",[_._v("我们先来看看安全沙箱是如何影响到浏览器持久存储的。由于安全沙箱需要负责确保渲染进程无法直接访问用户的文件系统，但是在渲染进程内部有访问 Cookie 的需求、有上传文件的需求，为了解决这些文件的访问需求，所以现代浏览器将读写文件的操作全部放在了浏览器内核中实现，然后通过 IPC 将操作结果转发给渲染进程。")]),_._v(" "),t("p",[_._v("具体地讲，如下文件内容的读写都是在浏览器内核中完成的：")]),_._v(" "),t("ul",[t("li",[_._v("存储 Cookie 数据的读写。通常浏览器内核会维护一个存放所有 Cookie 的 Cookie 数据库，然后当渲染进程通过 JavaScript 来读取 Cookie 时，渲染进程会通过 IPC 将读取 Cookie 的信息发送给浏览器内核，浏览器内核读取 Cookie 之后再将内容返回给渲染进程。")]),_._v(" "),t("li",[_._v("一些缓存文件的读写也是由浏览器内核实现的，比如网络文件缓存的读取。")])]),_._v(" "),t("h3",{attrs:{id:"_2-网络访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-网络访问"}},[_._v("#")]),_._v(" 2. 网络访问")]),_._v(" "),t("p",[_._v("同样有了安全沙箱的保护，在渲染进程内部也是不能直接访问网络的，如果要访问网络，则需要通过浏览器内核。不过浏览器内核在处理 URL 请求之前，会检查渲染进程是否有权限请求该 URL，比如检查 XMLHttpRequest 或者 Fetch 是否是跨站点请求，或者检测 HTTPS 的站点中是否包含了 HTTP 的请求。")]),_._v(" "),t("h3",{attrs:{id:"_3-用户交互"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-用户交互"}},[_._v("#")]),_._v(" 3. 用户交互")]),_._v(" "),t("p",[_._v("渲染进程实现了安全沙箱，还影响到了一个非常重要的用户交互功能。")]),_._v(" "),t("p",[_._v("通常情况下，如果你要实现一个 UI 程序，操作系统会提供一个界面给你，该界面允许应用程序与用户交互，允许应用程序在该界面上进行绘制，比如 Windows 提供的是 HWND，Linux 提供的 X Window，我们就把 HWND 和 X Window 统称为窗口句柄。应用程序可以在窗口句柄上进行绘制和接收键盘鼠标消息。")]),_._v(" "),t("p",[_._v("不过在现代浏览器中，由于每个渲染进程都有安全沙箱的保护，所以在渲染进程内部是无法直接操作窗口句柄的，这也是为了限制渲染进程监控到用户的输入事件。")]),_._v(" "),t("p",[_._v("由于渲染进程不能直接访问"),t("strong",[_._v("窗口句柄")]),_._v("，所以渲染进程需要完成以下两点大的改变。")]),_._v(" "),t("ul",[t("li",[_._v("第一点，渲染进程需要渲染出位图。为了向用户显示渲染进程渲染出来的位图，渲染进程需要将生成好的位图发送到浏览器内核，然后浏览器内核将位图复制到屏幕上。")]),_._v(" "),t("li",[_._v("第二点，操作系统没有将用户输入事件直接传递给渲染进程，而是将这些事件传递给浏览器内核。然后浏览器内核再根据当前浏览器界面的状态来判断如何调度这些事件，如果当前焦点位于浏览器地址栏中，则输入事件会在浏览器内核内部处理；如果当前焦点在页面的区域内，则浏览器内核会将输入事件转发给渲染进程。")])]),_._v(" "),t("p",[_._v("之所以这样设计，就是为了限制渲染进程有监控到用户输入事件的能力，所以所有的键盘鼠标事件都是由浏览器内核来接收的，然后浏览器内核再通过 IPC 将这些事件发送给渲染进程。")]),_._v(" "),t("p",[_._v("上面我们分析了由于渲染进程引入了安全沙箱，所以浏览器的持久存储、网络访问和用户交互等功能都不能在渲染进程内直接使用了，因此我们需要把这些功能迁移到浏览器内核中去实现，这让原本比较简单的流程变得复杂了。")]),_._v(" "),t("h2",{attrs:{id:"站点隔离（site-isolation）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#站点隔离（site-isolation）"}},[_._v("#")]),_._v(" 站点隔离（Site Isolation）")]),_._v(" "),t("p",[_._v("所谓站点隔离是指 Chrome 将同一站点（包含了相同根域名和相同协议的地址）中相互关联的页面放到同一个渲染进程中执行。")]),_._v(" "),t("p",[_._v("最开始 Chrome 划分渲染进程是以标签页为单位，也就是说整个标签页会被划分给某个渲染进程。但是，按照标签页划分渲染进程存在一些问题，原因就是一个标签页中可能包含了多个 iframe，而这些 iframe 又有可能来自于不同的站点，这就导致了多个不同站点中的内容通过 iframe 同时运行在同一个渲染进程中。")]),_._v(" "),t("p",[_._v("目前所有操作系统都面临着两个 A 级漏洞——幽灵（Spectre）和熔毁（Meltdown），这两个漏洞是由处理器架构导致的，很难修补，黑客通过这两个漏洞可以直接入侵到进程的内部，如果入侵的进程没有安全沙箱的保护，那么黑客还可以发起对操作系统的攻击。")]),_._v(" "),t("p",[_._v("所以如果一个银行站点包含了一个恶意 iframe，然后这个恶意的 iframe 利用这两个 A 级漏洞去入侵渲染进程，那么恶意程序就能读取银行站点渲染进程内的所有内容了，这对于用户来说就存在很大的风险了。")]),_._v(" "),t("p",[_._v("因此 Chrome 几年前就开始重构代码，将标签级的渲染进程重构为 iframe 级的渲染进程，然后严格按照同一站点的策略来分配渲染进程，这就是 Chrome 中的站点隔离。")]),_._v(" "),t("p",[_._v("实现了站点隔离，就可以将恶意的 iframe 隔离在恶意进程内部，使得它无法继续访问其他 iframe 进程的内容，因此也就无法攻击其他站点了。")]),_._v(" "),t("p",[_._v("值得注意是，2019 年 10 月 20 日 Chrome 团队宣布安卓版的 Chrome 已经全面支持站点隔离")])])}),[],!1,null,null,null);v.default=a.exports}}]);
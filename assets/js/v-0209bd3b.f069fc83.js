"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[78508],{33071:(e,r,l)=>{l.r(r),l.d(r,{data:()=>t});const t={key:"v-0209bd3b",path:"/guide/adapters/flashing/flashing_the_cc2531.html",title:"Flashing the CC2531 USB stick",lang:"en-US",frontmatter:{pageClass:"content-page"},excerpt:"",headers:[{level:2,title:"Required hardware",slug:"required-hardware",children:[]},{level:2,title:"Windows",slug:"windows",children:[]},{level:2,title:"Linux or MacOS",slug:"linux-or-macos",children:[]}],filePathRelative:"guide/adapters/flashing/flashing_the_cc2531.md",git:{updatedTime:1644861313e3}}},97330:(e,r,l)=>{l.r(r),l.d(r,{default:()=>Ye});var t=l(66252),n=l(22743),a=l(54256),o=l(18523),i=l(30948);const s=(0,t._)("h1",{id:"flashing-the-cc2531-usb-stick",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#flashing-the-cc2531-usb-stick","aria-hidden":"true"},"#"),(0,t.Uk)(" Flashing the CC2531 USB stick")],-1),A=(0,t.Uk)("The firmware can be flashed with multiple devices. The easiest but most expensive option is with the "),u=(0,t._)("em",null,"CC Debugger",-1),h=(0,t.Uk)(" from Texas Instruments, which is described on this page. However, you can also use a "),c=(0,t._)("em",null,"Raspberry Pi",-1),d=(0,t.Uk)(" or a MCU like the "),g=(0,t._)("em",null,"Arduino Uno",-1),k=(0,t.Uk)(" or the cheap "),b=(0,t._)("em",null,"ESP8266",-1),m=(0,t.Uk)(" with four dupont cables and optionally a downloader cable. Information about these methods can be found here: "),p=(0,t.Uk)("Alternative firmware flashing methods"),f=(0,t.Uk)("."),w=(0,t._)("strong",null,"NOTE 1",-1),_=(0,t.Uk)(": In case you are already running a Zigbee network: reflashing does not require repairing of all devices, see "),U=(0,t.Uk)("What does and does not require repairing of all devices?"),C=(0,t._)("strong",null,"NOTE 2",-1),E=(0,t.Uk)(": In this tutorial we will flash the default firmware. For larger network (20+) or when experiencing stability problems the "),x={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/source_routing",target:"_blank",rel:"noopener noreferrer"},v=(0,t.Uk)("source routing firmware"),B=(0,t.Uk)(" is recommended. This firmware has a limitation of 5 direct children so make sure to have enough routers in your network."),S=(0,t._)("strong",null,"NOTE 3",-1),Q=(0,t.Uk)(": The CC2531 USB dongle can be flashed also with the "),F={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/default",target:"_blank",rel:"noopener noreferrer"},y=(0,t.Uk)("CC2530 firmware"),H=(0,t.Uk)(" to be operated via the P0.2/P0.3 serial pins (which are the first one and the second one of the IO expansion port). Be careful when using the CC2531 in association with an ESP8266 (as if it were the "),R=(0,t.Uk)("CC2530"),M=(0,t.Uk)("): the onboard USB power supply may not be able to power an additional ESP8266 without overheating/failing."),P=(0,t._)("h2",{id:"required-hardware",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#required-hardware","aria-hidden":"true"},"#"),(0,t.Uk)(" Required hardware")],-1),T=(0,t._)("p",null,"The following additional hardware is required in order to flash the CC2531:",-1),J=(0,t._)("table",null,[(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"Name"),(0,t._)("th",null,"Price"),(0,t._)("th",null,"Picture")])]),(0,t._)("tbody",null,[(0,t._)("tr",null,[(0,t._)("td",null,"CC debugger"),(0,t._)("td",null,"+-9$ on AliExpress"),(0,t._)("td",null,[(0,t._)("img",{src:n,alt:"CC debugger"})])]),(0,t._)("tr",null,[(0,t._)("td",null,"CC2531 downloader cable"),(0,t._)("td",null,"+-2$ on AliExpress"),(0,t._)("td",null,[(0,t._)("img",{src:a,alt:"Downloader cable CC2531"})])])])],-1),D=(0,t._)("h2",{id:"windows",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),(0,t.Uk)(" Windows")],-1),W=(0,t.Uk)("Install "),I={href:"http://www.ti.com/tool/flash-programmer",target:"_blank",rel:"noopener noreferrer"},O=(0,t.Uk)("SmartRF Flash programmer"),q=(0,t.Uk)(" ("),z=(0,t._)("strong",null,"NOT V2",-1),L=(0,t.Uk)("). This software is free but requires a Texas Instruments account in order to download."),G=(0,t.Uk)("Install the "),Y={href:"http://www.ti.com/lit/zip/swrc212",target:"_blank",rel:"noopener noreferrer"},Z=(0,t.Uk)("CC debugger driver"),j=(0,t.Uk)(" on your PC (Windows only). Before continuing, verify that the CC Debugger driver has been installed correctly. See "),X={href:"http://www.ti.com/lit/ug/swru197h/swru197h.pdf",target:"_blank",rel:"noopener noreferrer"},K=(0,t.Uk)("Figure 1. Verify Correct Driver Installation @ Chapter 5.1"),V=(0,t.Uk)(". In case the CC Debugger is not recognized correctly "),N={href:"https://www.youtube.com/watch?v=jyKrxxXOvQY",target:"_blank",rel:"noopener noreferrer"},$=(0,t.Uk)("install the driver manually"),ee=(0,t.Uk)("."),re=(0,t._)("li",null,[(0,t.Uk)("Connect "),(0,t._)("code",null,"CC debugger --\x3e Downloader cable CC2531 --\x3e CC2531 USB sniffer"),(0,t.Uk)(".")],-1),le=(0,t._)("li",null,[(0,t.Uk)("Connect "),(0,t._)("strong",null,"BOTH"),(0,t.Uk)(" the "),(0,t._)("code",null,"CC2531 USB sniffer"),(0,t.Uk)(" and the "),(0,t._)("code",null,"CC debugger"),(0,t.Uk)(" to your PC using USB.")],-1),te=(0,t.Uk)("If the light on the CC debugger is RED press set reset button on the CC debugger. The light on the CC debugger should now turn GREEN. If not use "),ne={href:"http://www.ti.com/lit/ug/swru197h/swru197h.pdf",target:"_blank",rel:"noopener noreferrer"},ae=(0,t.Uk)("CC debugger user guide"),oe=(0,t.Uk)(" to troubleshoot your problem. "),ie=(0,t._)("img",{src:o,alt:"How to connect"},null,-1),se=(0,t.Uk)("Download the firmware "),Ae={href:"https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip",target:"_blank",rel:"noopener noreferrer"},ue=(0,t.Uk)("CC2531_DEFAULT_20211115.zip"),he=(0,t._)("li",null,[(0,t.Uk)("Start SmartRF Flash Programmer, setup as shown below and press "),(0,t._)("code",null,"Perform actions"),(0,t.Uk)(". Make sure to select the "),(0,t._)("code",null,".hex"),(0,t.Uk)(" file, not the "),(0,t._)("code",null,".bin"),(0,t.Uk)(" file! "),(0,t._)("img",{src:i,alt:"SmartRF Flash Programmer"})],-1),ce=(0,t._)("h2",{id:"linux-or-macos",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#linux-or-macos","aria-hidden":"true"},"#"),(0,t.Uk)(" Linux or MacOS")],-1),de=(0,t.Uk)("Credits to "),ge={href:"https://github.com/frans-Willem",target:"_blank",rel:"noopener noreferrer"},ke=(0,t.Uk)("@Frans-Willem"),be=(0,t.Uk)(" for majority of instructions."),me=(0,t.Uk)("Install prerequisites for "),pe={href:"https://github.com/dashesy/cc-tool",target:"_blank",rel:"noopener noreferrer"},fe=(0,t.Uk)("CC-Tool"),we=(0,t.Uk)(" using a package manager (e.g. "),_e={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},Ue=(0,t.Uk)("Homebrew"),Ce=(0,t.Uk)(" for macOS)"),Ee=(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Uk)("Ubuntu (version >= 20.04): install cc-tool with "),(0,t._)("code",null,"sudo apt install cc-tool"),(0,t.Uk)(" & go on with 3.")]),(0,t._)("li",null,"Ubuntu/Debian: libusb-1.0-0-dev, libboost-all-dev, autoconf, libtool"),(0,t._)("li",null,"Fedora: dh-autoreconf, boost-devel, libusb1-devel, gcc-c++"),(0,t._)("li",null,"Archlinux: dh-autoreconf, libusb, boost"),(0,t._)("li",null,"macOS: brew install autoconf automake libusb boost pkgconfig libtool"),(0,t._)("li",null,"Raspbian: dh-autoreconf, libusb-1.0-0-dev, libboost-all-dev")],-1),xe=(0,t._)("ol",{start:"2"},[(0,t._)("li",null,"Build cc-tool")],-1),ve=(0,t._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,t._)("pre",{class:"language-bash"},[(0,t._)("code",null,[(0,t._)("span",{class:"token function"},"git"),(0,t.Uk)(" clone https://github.com/dashesy/cc-tool.git\n"),(0,t._)("span",{class:"token builtin class-name"},"cd"),(0,t.Uk)(" cc-tool\n./bootstrap\n./configure\n"),(0,t._)("span",{class:"token function"},"make"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br")])],-1),Be={start:"3"},Se=(0,t._)("li",null,[(0,t.Uk)("Connect "),(0,t._)("code",null,"CC debugger --\x3e Downloader cable CC2531 --\x3e CC2531 USB sniffer"),(0,t.Uk)(".")],-1),Qe=(0,t._)("li",null,[(0,t.Uk)("Connect "),(0,t._)("strong",null,"BOTH"),(0,t.Uk)(" the "),(0,t._)("code",null,"CC2531 USB sniffer"),(0,t.Uk)(" and the "),(0,t._)("code",null,"CC debugger"),(0,t.Uk)(" to your PC using USB.")],-1),Fe=(0,t.Uk)("If the light on the CC debugger is RED, press the Reset button on the CC debugger. The light on the CC debugger should now turn GREEN. If not, try to reboot and retry or follow the "),ye={href:"http://www.ti.com/lit/ug/swru197h/swru197h.pdf",target:"_blank",rel:"noopener noreferrer"},He=(0,t.Uk)("CC debugger user guide"),Re=(0,t.Uk)(" to troubleshoot your problem. "),Me=(0,t._)("img",{src:o,alt:"How to connect"},null,-1),Pe=(0,t.Uk)("Download the firmware "),Te={href:"https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip",target:"_blank",rel:"noopener noreferrer"},Je=(0,t.Uk)("CC2531_DEFAULT_20211115.zip"),De=(0,t.Uk)("."),We=(0,t._)("li",null,"Flash your firmware:",-1),Ie=(0,t._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,t._)("pre",{class:"language-text"},[(0,t._)("code",null,"sudo ./cc-tool -e -w CC2531ZNP-Prod.hex\n")]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br")])],-1),Oe=(0,t._)("h1",{id:"how-to-check-the-installed-firmware-version",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#how-to-check-the-installed-firmware-version","aria-hidden":"true"},"#"),(0,t.Uk)(" How-to check the installed firmware version")],-1),qe=(0,t._)("p",null,"Zigbee2MQTT will output the installed firmware version to the Zigbee2MQTT log on startup:",-1),ze=(0,t._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,t._)("pre",{class:"language-text"},[(0,t._)("code",null,'Zigbee2MQTT:info  2019-11-09T13:01:14: Coordinator firmware version: \'{"type":"zStack30x","meta":{"transportrev":2,"product":2,"majorrel":2,"minorrel":7,"maintrel":2,"revision":20190425}}\'\n')]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br")])],-1),Le=(0,t._)("p",null,[(0,t.Uk)("In the above example the version is "),(0,t._)("code",null,"20190425"),(0,t.Uk)(".")],-1),Ge={},Ye=(0,l(83744).Z)(Ge,[["render",function(e,r){const l=(0,t.up)("RouterLink"),n=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[s,(0,t._)("p",null,[A,u,h,c,d,g,k,b,m,(0,t.Wm)(l,{to:"/guide/adapters/flashing/alternative_flashing_methods.html"},{default:(0,t.w5)((()=>[p])),_:1}),f]),(0,t._)("p",null,[w,_,(0,t.Wm)(l,{to:"/guide/faq/#what-does-and-does-not-require-repairing-of-all-devices"},{default:(0,t.w5)((()=>[U])),_:1})]),(0,t._)("p",null,[C,E,(0,t._)("a",x,[v,(0,t.Wm)(n)]),B]),(0,t._)("p",null,[S,Q,(0,t._)("a",F,[y,(0,t.Wm)(n)]),H,(0,t.Wm)(l,{to:"/guide/adapters/flashing/connecting_cc2530.html#via-an-esp8266"},{default:(0,t.w5)((()=>[R])),_:1}),M]),P,T,J,D,(0,t._)("ol",null,[(0,t._)("li",null,[W,(0,t._)("a",I,[O,(0,t.Wm)(n)]),q,z,L]),(0,t._)("li",null,[G,(0,t._)("a",Y,[Z,(0,t.Wm)(n)]),j,(0,t._)("a",X,[K,(0,t.Wm)(n)]),V,(0,t._)("a",N,[$,(0,t.Wm)(n)]),ee]),re,le,(0,t._)("li",null,[te,(0,t._)("a",ne,[ae,(0,t.Wm)(n)]),oe,ie]),(0,t._)("li",null,[se,(0,t._)("a",Ae,[ue,(0,t.Wm)(n)])]),he]),ce,(0,t._)("p",null,[de,(0,t._)("a",ge,[ke,(0,t.Wm)(n)]),be]),(0,t._)("ol",null,[(0,t._)("li",null,[me,(0,t._)("a",pe,[fe,(0,t.Wm)(n)]),we,(0,t._)("a",_e,[Ue,(0,t.Wm)(n)]),Ce])]),Ee,xe,ve,(0,t._)("ol",Be,[Se,Qe,(0,t._)("li",null,[Fe,(0,t._)("a",ye,[He,(0,t.Wm)(n)]),Re,Me]),(0,t._)("li",null,[Pe,(0,t._)("a",Te,[Je,(0,t.Wm)(n)]),De]),We]),Ie,Oe,qe,ze,Le],64)}]])},83744:(e,r)=>{r.Z=(e,r)=>{for(const[l,t]of r)e[l]=t;return e}},22743:e=>{e.exports="data:image/jpeg;base64,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"},18523:(e,r,l)=>{e.exports=l.p+"assets/img/connected.843d662a.jpg"},54256:(e,r,l)=>{e.exports=l.p+"assets/img/downloader_cable.720e6aa2.png"},30948:(e,r,l)=>{e.exports=l.p+"assets/img/smartrf.f6080d0e.png"}}]);
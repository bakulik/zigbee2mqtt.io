"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[12032],{97087:(e,n,i)=>{i.r(n),i.d(n,{data:()=>l});const l={key:"v-14f447a8",path:"/guide/installation/04_windows.html",title:"Windows",lang:"en-US",frontmatter:{next:"../configuration/",pageClass:"content-page"},excerpt:"",headers:[{level:2,title:"Determine which COM port is assigned to your device",slug:"determine-which-com-port-is-assigned-to-your-device",children:[]},{level:2,title:"Installing",slug:"installing",children:[]},{level:2,title:"Configuring",slug:"configuring",children:[]},{level:2,title:"Starting Zigbee2MQTT",slug:"starting-zigbee2mqtt",children:[]}],filePathRelative:"guide/installation/04_windows.md",git:{updatedTime:1644861313e3}}},50812:(e,n,i)=>{i.r(n),i.d(n,{default:()=>z});var l=i(66252),a=i(20765);const s=(0,l._)("h1",{id:"windows",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#windows","aria-hidden":"true"},"#"),(0,l.Uk)(" Windows")],-1),t=(0,l._)("h2",{id:"determine-which-com-port-is-assigned-to-your-device",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#determine-which-com-port-is-assigned-to-your-device","aria-hidden":"true"},"#"),(0,l.Uk)(" Determine which COM port is assigned to your device")],-1),r=(0,l._)("ol",null,[(0,l._)("li",null,"Connect your sniffer device"),(0,l._)("li",null,[(0,l.Uk)("Open up Start menu and start typing "),(0,l._)("code",null,"Device Manager")]),(0,l._)("li",null,[(0,l.Uk)("Expand "),(0,l._)("code",null,"Ports (COM & LPT)")]),(0,l._)("li",null,[(0,l.Uk)("Look for a node similar to "),(0,l._)("code",null,"USB Serial Device (COM4)")]),(0,l._)("li",null,"Take note of the port number, it will be needed during configuration")],-1),o=(0,l._)("p",null,[(0,l._)("img",{src:a,alt:"Device Manager"})],-1),u=(0,l._)("h2",{id:"installing",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#installing","aria-hidden":"true"},"#"),(0,l.Uk)(" Installing")],-1),c=(0,l.Uk)("Download and install Node.js 14 LTS from "),d={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},g=(0,l.Uk)("their website"),h=(0,l._)("li",null,[(0,l.Uk)("Open up a "),(0,l._)("code",null,"Command prompt"),(0,l.Uk)(" or "),(0,l._)("code",null,"Powershell"),(0,l.Uk)(" from the Start menu (Powershell has prettier colors)")],-1),p=(0,l._)("li",null,[(0,l.Uk)("Verify Node.js was successfully installed"),(0,l._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,"node --version\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br")])])],-1),b=(0,l.Uk)("Choose a suitable directory for Zigbee2MQTT and copy all the files from the "),_={href:"https://github.com/koenkk/zigbee2mqtt",target:"_blank",rel:"noopener noreferrer"},m=(0,l.Uk)("Zigbee2MQTT repository"),f=(0,l.uE)('<ul><li>if you prefer to use git (which you should), just clone the whole repository<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:Koenkk/zigbee2mqtt.git\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li>otherwise use the green <code>Clone or download</code> button to download the zip archive, then extract it</li></ul>',1),k=(0,l.uE)('<li>Change to the newly created directory and install dependencies with Node.js own package manager <code>npm</code><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> ci\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>',1),v=(0,l._)("h2",{id:"configuring",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#configuring","aria-hidden":"true"},"#"),(0,l.Uk)(" Configuring")],-1),w=(0,l._)("ol",null,[(0,l._)("li",null,[(0,l.Uk)("Open "),(0,l._)("code",null,"data\\configuration.yaml"),(0,l.Uk)(" in a text editor")]),(0,l._)("li",null,[(0,l.Uk)("Change the serial port configuration to match your setup"),(0,l._)("div",{class:"language-yaml ext-yml line-numbers-mode"},[(0,l._)("pre",{class:"language-yaml"},[(0,l._)("code",null,[(0,l._)("span",{class:"token key atrule"},"serial"),(0,l._)("span",{class:"token punctuation"},":"),(0,l.Uk)("\n    "),(0,l._)("span",{class:"token key atrule"},"port"),(0,l._)("span",{class:"token punctuation"},":"),(0,l.Uk)(" \\\\.\\COM4\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br")])])]),(0,l._)("li",null,"Make sure other settings are correct as well"),(0,l._)("li",null,"Save and exit")],-1),y=(0,l._)("p",null,"Congratulations, you're now ready to start your Zigbee2MQTT installation",-1),T=(0,l._)("h2",{id:"starting-zigbee2mqtt",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#starting-zigbee2mqtt","aria-hidden":"true"},"#"),(0,l.Uk)(" Starting Zigbee2MQTT")],-1),U=(0,l._)("p",null,"Just change to the root directory of your installation and run the application:",-1),M=(0,l._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token function"},"npm"),(0,l.Uk)(" start\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br")])],-1),x=(0,l._)("p",null,"A successful setup produces an output similar to this:",-1),C=(0,l._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"> zigbee2mqtt@1.6.0 start C:\\Users\\me\\Documents\\GitHub\\zigbee2mqtt\n> node index.js\n\n  Zigbee2MQTT:info 2019-10-18 10:56:22 PM Logging to directory: 'D:\\Documents\\GitHub\\zigbee2mqtt\\data\\log\\2019-10-18.22-56-22'\n  Zigbee2MQTT:info 2019-10-18 10:56:22 PM Starting Zigbee2MQTT version 1.6.0 (commit #e26ad2a)\n  Zigbee2MQTT:info 2019-10-18 10:56:22 PM Starting zigbee-shepherd\n  Zigbee2MQTT:info 2019-10-18 10:56:24 PM zigbee-shepherd started\n  Zigbee2MQTT:info 2019-10-18 10:56:24 PM Coordinator firmware version: '20190608'\n")]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"7"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"8"),(0,l._)("br")])],-1),Z=(0,l._)("p",null,[(0,l.Uk)("The "),(0,l._)("code",null,"Coordinator firmware version: '20190608'"),(0,l.Uk)(" entry means that Zigbee2MQTT has successfully communicated with the USB sniffer.")],-1),Q=(0,l._)("p",null,[(0,l.Uk)("Zigbee2MQTT can be stopped anytime by pressing "),(0,l._)("code",null,"CTRL + C"),(0,l.Uk)(" and then confirming with "),(0,l._)("code",null,"Y"),(0,l.Uk)(".")],-1),S={},z=(0,i(83744).Z)(S,[["render",function(e,n){const i=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[s,t,r,o,u,(0,l._)("ol",null,[(0,l._)("li",null,[c,(0,l._)("a",d,[g,(0,l.Wm)(i)])]),h,p,(0,l._)("li",null,[b,(0,l._)("a",_,[m,(0,l.Wm)(i)]),f]),k]),v,w,y,T,U,M,x,C,Z,Q],64)}]])},83744:(e,n)=>{n.Z=(e,n)=>{for(const[i,l]of n)e[i]=l;return e}},20765:(e,n,i)=>{e.exports=i.p+"assets/img/devicemanager.15b524ea.png"}}]);
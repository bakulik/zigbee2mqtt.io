"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[20896],{95617:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-1915b69e",path:"/devices/SRSC-M01.html",title:"Xiaomi SRSC-M01 control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi SRSC-M01 control via MQTT",description:"Integrate your Xiaomi SRSC-M01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-08-01T20:41:55.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Cover",slug:"cover",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SRSC-M01.md",git:{updatedTime:1644861313e3}}},49077:(e,t,o)=>{o.r(t),o.d(t,{default:()=>h});var i=o(66252);const a=(0,i.uE)('<h1 id="xiaomi-srsc-m01" tabindex="-1"><a class="header-anchor" href="#xiaomi-srsc-m01" aria-hidden="true">#</a> Xiaomi SRSC-M01</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SRSC-M01</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara roller shade motor</td></tr><tr><td>Exposes</td><td>cover (state, position), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SRSC-M01.jpg" alt="Xiaomi SRSC-M01"></td></tr></tbody></table><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',3),d=(0,i.Uk)("This device supports OTA updates, for more information see "),r=(0,i.Uk)("OTA updates"),s=(0,i.Uk)("."),c=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),u=(0,i.Uk)("How to use device type specific configuration"),l=(0,i.uE)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. To read the current state of this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',6),n={},h=(0,o(83744).Z)(n,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("p",null,[d,(0,i.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[r])),_:1}),s]),c,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[u])),_:1})])]),l],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);
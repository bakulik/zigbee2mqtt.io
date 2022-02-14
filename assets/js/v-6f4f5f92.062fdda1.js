"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[23156],{91601:(e,t,i)=>{i.r(t),i.d(t,{data:()=>r});const r={key:"v-6f4f5f92",path:"/devices/SLT2.html",title:"Hive SLT2 control via MQTT",lang:"en-US",frontmatter:{title:"Hive SLT2 control via MQTT",description:"Integrate your Hive SLT2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-05-19T20:48:40.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SLT2.md",git:{updatedTime:1644861313e3}}},55191:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});const r=(0,i(66252).uE)('<h1 id="hive-slt2" tabindex="-1"><a class="header-anchor" href="#hive-slt2" aria-hidden="true">#</a> Hive SLT2</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SLT2</td></tr><tr><td>Vendor</td><td>Hive</td></tr><tr><td>Description</td><td>Heating thermostat remote control</td></tr><tr><td>Exposes</td><td>battery, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SLT2.jpg" alt="Hive SLT2"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To pair the thermostat controller to both Zigbee2MQTT and the thermostat receiver, a factory reset will need to be performed. To begin a factory reset:</p><ol><li>remove a battery</li><li>press and hold both the &quot;+&quot; and &quot;-&quot; buttons together</li><li>reinsert the battery (with the buttons remained pressed)</li><li>wait until the word &quot;FIND&quot; appears on screen (around 10 seconds)</li><li>once paired, the word &quot;FIND&quot; disappears and the temperature will be displayed</li></ol><p>Zigbee2MQTT should have found the thermostat. If the word &quot;REJOIN&quot; appears on screen, the buttons were released too early and the process must be repeated. The controller should be able to control the boiler whilst still reporting to Zigbee2MQTT.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),a={},o=(0,i(83744).Z)(a,[["render",function(e,t){return r}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,r]of t)e[i]=r;return e}}}]);
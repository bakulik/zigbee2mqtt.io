"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[50115],{42441:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-b1567db8",path:"/guide/adapters/flashing/alternative_flashing_methods.html",title:"Alternative flashing methods",lang:"en-US",frontmatter:{pageClass:"content-page"},excerpt:"",headers:[{level:3,title:"With Raspberry Pi (~3min)",slug:"with-raspberry-pi-3min",children:[]},{level:3,title:"Via Arduino Uno/ESP8266 with CCLoader (~3min)",slug:"via-arduino-uno-esp8266-with-ccloader-3min",children:[]},{level:3,title:"Via Arduino/ESP8266 with CCLib (~3hrs)",slug:"via-arduino-esp8266-with-cclib-3hrs",children:[]}],filePathRelative:"guide/adapters/flashing/alternative_flashing_methods.md",git:{updatedTime:1644861313e3}}},89501:(e,n,a)=>{a.r(n),a.d(n,{default:()=>cn});var s=a(66252),r=a(9089),t=a(54256),l=a(60104),i=a(67477),o=a(69834);const d=(0,s._)("h1",{id:"alternative-flashing-methods",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#alternative-flashing-methods","aria-hidden":"true"},"#"),(0,s.Uk)(" Alternative flashing methods")],-1),u=(0,s._)("h3",{id:"with-raspberry-pi-3min",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#with-raspberry-pi-3min","aria-hidden":"true"},"#"),(0,s.Uk)(" With Raspberry Pi (~3min)")],-1),c=(0,s.Uk)("Install "),p={href:"http://wiringpi.com/download-and-install/",target:"_blank",rel:"noopener noreferrer"},_=(0,s.Uk)("wiringPi"),b=(0,s.Uk)(", if not already installed."),h=(0,s.Uk)("Install "),m={href:"https://github.com/jmichault/flash_cc2531",target:"_blank",rel:"noopener noreferrer"},g=(0,s.Uk)("flash_cc2531"),C=(0,s.Uk)(" :"),f=(0,s._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s._)("span",{class:"token function"},"git"),(0,s.Uk)(" clone https://github.com/jmichault/flash_cc2531.git\n")])]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br")])],-1),k=(0,s._)("ol",{start:"3"},[(0,s._)("li",null,"Connect the following pins of the debug port to the GPIO port :")],-1),x=(0,s._)("ul",null,[(0,s._)("li",null,"pin 1 (GND) --\x3e pin 39 (GND)"),(0,s._)("li",null,"pin 7 (reset) --\x3e pin 35 (GPIO24, BCM19)"),(0,s._)("li",null,"pin 3 (DC) --\x3e pin 36 (GPIO27, BCM16)"),(0,s._)("li",null,"pin 4 (DD) --\x3e pin 38 (GPIO28, BCM20)")],-1),w=(0,s._)("p",null,[(0,s._)("img",{src:r,alt:""})],-1),v=(0,s._)("p",null,"Optionally, connecting Target Voltage Sense to a 3.3v source (Red wire) eliminates the need to plug the device into a usb port, so optionally connect the following too:",-1),U=(0,s._)("ul",null,[(0,s._)("li",null,"pin 2 (Target Voltage Sense) --\x3e pin 1 or pin 17 (3.3v) on Raspi")],-1),D=(0,s.Uk)("See above for the dispositions of pins on CC2531, and at "),y={href:"https://pinout.xyz/",target:"_blank",rel:"noopener noreferrer"},P=(0,s.Uk)("https://pinout.xyz/"),L=(0,s.Uk)(" for pins on Raspberry."),E=(0,s._)("p",null,[(0,s.Uk)("A downloader cable CC2531 "),(0,s._)("img",{src:t,alt:""}),(0,s.Uk)(" and 4 Dupont line Female to Female are perfect for this purpose. If you don't want to buy a downloader cable, you need to bend the debug pins outwards to be able to connect your Dupont cables since the pins are too close together to connect the Dupont cables directly.")],-1),S=(0,s._)("p",null,"Now insert the usb dongle in an USB port :",-1),A=(0,s._)("p",null,[(0,s._)("img",{src:"https://raw.githubusercontent.com/jmichault/files/master/Raspberry-CC2531.jpg",alt:""})],-1),M=(0,s._)("ol",{start:"4"},[(0,s._)("li",null,"Test by running :")],-1),O=(0,s._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s._)("span",{class:"token builtin class-name"},"cd"),(0,s.Uk)(" flash_cc2531\n./cc_chipid\n")])]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br")])],-1),I=(0,s._)("p",null,"it should return :",-1),N=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"  ID = b524.\n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br")])],-1),R=(0,s._)("p",null,"If you see 0000 or ffff, something is wrong and you should probably check your wiring.",-1),T={start:"5"},W=(0,s.Uk)("Download and extract the latest firmware "),F={href:"https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip",target:"_blank",rel:"noopener noreferrer"},G=(0,s.Uk)("CC2531_DEFAULT_20211115.zip"),B=(0,s.Uk)("."),Z=(0,s._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,[(0,s._)("span",{class:"token builtin class-name"},"cd"),(0,s.Uk)(" ~/flash_cc2531       "),(0,s._)("span",{class:"token comment"},"#assuming you git-cloned the program to your home directory"),(0,s.Uk)("\n"),(0,s._)("span",{class:"token function"},"wget"),(0,s.Uk)(" https://github.com/Koenkk/Z-Stack-firmware/raw/master/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip\n"),(0,s._)("span",{class:"token function"},"unzip"),(0,s.Uk)(" CC2531_DEFAULT_20211115.zip  \n")])]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br")])],-1),j=(0,s._)("ol",{start:"6"},[(0,s._)("li",null,"Erase and flash the CC2531 :")],-1),K=(0,s._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,s._)("pre",{class:"language-bash"},[(0,s._)("code",null,"./cc_erase\n./cc_write CC2531ZNP-Prod.hex\n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br")])],-1),z=(0,s._)("p",null,"It takes around 3 minutes.",-1),V=(0,s._)("h3",{id:"via-arduino-uno-esp8266-with-ccloader-3min",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#via-arduino-uno-esp8266-with-ccloader-3min","aria-hidden":"true"},"#"),(0,s.Uk)(" Via Arduino Uno/ESP8266 with CCLoader (~3min)")],-1),H=(0,s._)("p",null,[(0,s._)("strong",null,"This has been tested with a Genuine Arduino Uno, an Arduino Pro Micro - China clone, and a NodeMCU ESP8266 and is significantly faster than CCLib")],-1),q=(0,s._)("h4",{id:"prepare-the-firmware",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#prepare-the-firmware","aria-hidden":"true"},"#"),(0,s.Uk)(" Prepare the firmware")],-1),J=(0,s.Uk)("Download the correct firmware (in this example we'll be using the "),X={href:"https://github.com/Koenkk/Z-Stack-firmware/blob/master/coordinator/Z-Stack_Home_1.2/bin/",target:"_blank",rel:"noopener noreferrer"},Y=(0,s.Uk)("CC2531 firmware"),Q=(0,s.Uk)(")"),$=(0,s._)("p",null,[(0,s.Uk)("Unpack firmware and convert the hex file to binary using "),(0,s._)("code",null,"objcopy"),(0,s.Uk)(" (do not use the included binary file!)")],-1),ee=(0,s._)("em",null,[(0,s._)("strong",null,"Windows")],-1),ne=(0,s.Uk)(": download "),ae=(0,s._)("code",null,"objcopy.exe",-1),se=(0,s.Uk)(" as per "),re={href:"https://stackoverflow.com/questions/11054534/how-to-use-install-gnu-binutils-objdump",target:"_blank",rel:"noopener noreferrer"},te=(0,s.Uk)("this"),le=(0,s.Uk)(" answer from StackOverflow."),ie=(0,s.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>objcopy.exe --gap-fill 0xFF --pad-to 0x040000 -I ihex CC2531ZNP-Prod.hex -O binary CC2531ZNP-Prod.bin\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Linux or Bash on Ubuntu on Windows</strong>: install the <code>binutils</code> package using your package manager</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>objcopy --gap-fill 0xFF --pad-to 0x040000 -I ihex CC2531ZNP-Prod.hex -O binary /tmp/CC2531ZNP-Prod.bin\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',3),oe=(0,s._)("h4",{id:"prepare-ccloader",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#prepare-ccloader","aria-hidden":"true"},"#"),(0,s.Uk)(" Prepare CCLoader")],-1),de=(0,s.Uk)("Download and unpack "),ue={href:"https://github.com/RedBearLab/CCLoader",target:"_blank",rel:"noopener noreferrer"},ce=(0,s.Uk)("CCLoader"),pe=(0,s.uE)('<li>On Windows you can use the precompiled <code>CCloader.exe</code></li><li>On Linux you have to compile <code>CCLoader</code> yourself so change directory to <code>CCLoader/SourceCode/Linux</code>, and run<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>gcc main.c -o CCLoader\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>',2),_e=(0,s._)("h4",{id:"flashing-the-arduino-or-esp8266-and-the-cc2531-device",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#flashing-the-arduino-or-esp8266-and-the-cc2531-device","aria-hidden":"true"},"#"),(0,s.Uk)(" Flashing the Arduino or ESP8266 and the CC2531 device")],-1),be=(0,s._)("ol",null,[(0,s._)("li",null,"For Arduino, leave the pins set as default in 'Arduino\\CCLoader\\CCLoader.ino' (lines 86-90):")],-1),he=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"// Debug control pins & the indicate LED\nint DD = 6;\nint DC = 5;\nint RESET = 4;\nint LED = 13;\n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"4"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"5"),(0,s._)("br")])],-1),me=(0,s._)("p",null,"For ESP8266 (NodeMCU or WeMos D1 Mini) edit those pins in 'Arduino\\CCLoader\\CCLoader.ino' (lines 86-90) to usable pins for the ESP8266, these worked for me (note that the number is the GPIO number, not the label on the NodeMCU):",-1),ge=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"// Debug control pins & the indicate LED\nint DD = 14; //GPIO14=D5 on NodeMCU/WeMos D1 Mini\nint DC = 4; //GPIO4=D2 on NodeMCU/WeMos D1 Mini\nint RESET = 5; //GPIO5=D1 on NodeMCU/WeMos D1 Mini\nint LED = 2; //GPIO2=D4 and the Blue LED on the WeMos D1 Mini and the ESP-12E module on the NodeMCU, or can use GPIO16=D0 for the other Blue LED on NodeMCU\n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"4"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"5"),(0,s._)("br")])],-1),Ce=(0,s.Uk)("Flash Arduino Uno or ESP8266 board with "),fe=(0,s._)("code",null,"Arduino\\CCLoader\\CCLoader.ino",-1),ke=(0,s.Uk)(" (For NodeMCU on Windows: install "),xe={href:"https://www.arduino.cc/en/main/software",target:"_blank",rel:"noopener noreferrer"},we=(0,s.Uk)("the Arduino IDE"),ve=(0,s.Uk)(', then in Preferences, add the following URL to the Additional Boards Manager URL field: http://arduino.esp8266.com/stable/package_esp8266com_index.json , then go to the Boards Manager and install the esp8266 package, then set the board to "NodeMCU 1.0 (ESP-12E module)" or if you are using a WeMos D1 Mini set it to "LOLIN(WEMOS) D1 R2 & Mini", then set Port to the correct COM port (it was COM3 for me with a NodeMCU), then Upload the sketch.)'),Ue=(0,s.uE)('<li><p>Note the COM port number or device name as this will be used later</p></li><li><p>Connect Arduino pins as described below to the debug header of the CC device</p><table><thead><tr><th>Arduino</th><th>CC Pin</th><th>CC Name</th></tr></thead><tbody><tr><td>GND</td><td>1</td><td>GND</td></tr><tr><td>D4</td><td>7</td><td>RESETn</td></tr><tr><td>D5</td><td>3</td><td>DC (Debug Clock)</td></tr><tr><td>D6</td><td>4</td><td>DD (Debug Data)</td></tr></tbody></table><p><img src="https://www.waveshare.com/img/devkit/CC-Debugger/CC-Debugger-JTAG-Header.jpg" alt=""></p><p>If you have a 3.3V Arduino you can optionaly connect <code>3.3V -&gt; Target Voltage Sense (Pin 2)</code> and program the CC2531 without connecting the CC2531 to USB (in the next step).</p><p>Connect the ESP8266 pins as described below to the debug header of the CC device</p><table><thead><tr><th>ESP8266</th><th>CC Pin</th><th>CC Name</th></tr></thead><tbody><tr><td>GND</td><td>1</td><td>GND</td></tr><tr><td>D1/GPIO5</td><td>7</td><td>RESETn</td></tr><tr><td>D2/GPIO4</td><td>3</td><td>DC (Debug Clock)</td></tr><tr><td>D5/GPIO14</td><td>4</td><td>DD (Debug Data)</td></tr></tbody></table><p><img src="https://user-images.githubusercontent.com/35885181/67834765-dcab2280-faad-11e9-8755-971f0e456217.jpg" alt="C2531 debug pins"><img src="https://user-images.githubusercontent.com/35885181/67834764-dc128c00-faad-11e9-8e06-0937e1bb6790.jpg" alt="CC2531 stick and NodeMCU"></p></li><li><p>Connect Arduino/ESP8266 first, then within a couple seconds connect the CC2531 to USB power</p></li><li><p>Place the prepared <code>CC2531ZNP-Prod.bin</code> next to the executable file</p></li><li><p>Start the flashing process</p><p><strong>Windows</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CCLoader_x86_64.exe [Number of the COM port] CC2531ZNP-Prod.bin 0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><em>Example:</em> Arduino UNO on COM7</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CCLoader_x86_64.exe 7 CC2531ZNP-Prod.bin 0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Linux</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./CCLoader [Name of the USB device] CC2531ZNP-Prod.bin 0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><em>Example:</em> Arduino Uno on <code>/dev/ttyACM0</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./CCLoader /dev/ttyACM0 CC2531ZNP-Prod.bin 0\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li>',5),De=(0,s._)("p",null,"It should be done in a few minutes.",-1),ye=(0,s._)("p",null,[(0,s.Uk)("If burning fails/gets stuck at "),(0,s._)("code",null,"Request sent already! Waiting for respond..."),(0,s.Uk)(" - try again, check your wiring, try using "),(0,s._)("code",null,"1"),(0,s.Uk)(" instead of "),(0,s._)("code",null,"0"),(0,s.Uk)(" as the last parameter. Or try run command with "),(0,s._)("code",null,"sudo"),(0,s.Uk)(".")],-1),Pe=(0,s._)("h3",{id:"via-arduino-esp8266-with-cclib-3hrs",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#via-arduino-esp8266-with-cclib-3hrs","aria-hidden":"true"},"#"),(0,s.Uk)(" Via Arduino/ESP8266 with CCLib (~3hrs)")],-1),Le=(0,s._)("p",null,[(0,s.Uk)("Flashing firmware via Arduino is implemented using the project https://github.com/wavesoft/CCLib "),(0,s._)("strong",null,"But with minor improvements!!!")],-1),Ee={href:"https://github.com/AndrewLinden",target:"_blank",rel:"noopener noreferrer"},Se=(0,s.Uk)("AndrewLinden"),Ae=(0,s.Uk)(" described that he was able to flash CC2531 using CCLib "),Me={href:"https://github.com/wavesoft/CCLib/issues/19",target:"_blank",rel:"noopener noreferrer"},Oe=(0,s.Uk)("with comments"),Ie=(0,s.Uk)("."),Ne=(0,s.Uk)("As described "),Re={href:"https://github.com/kirovilya/CCLib",target:"_blank",rel:"noopener noreferrer"},Te=(0,s.Uk)("I made a fork of the CCLib library with minor changes"),We=(0,s.Uk)(" for flashing firmware via Arduino:"),Fe=(0,s._)("ul",null,[(0,s._)("li",null,"Timeouts of operations"),(0,s._)("li",null,"After opening the port (I have in Windows 7) Arduino reboots and, accordingly, does not respond to requests - made a 3 seconds pause (found somewhere in internet)."),(0,s._)("li",null,[(0,s.Uk)("The port speed is reduced to 9600, because at another speed leaving communication errors: "),(0,s._)("code",null,"ERROR: Could not read from the serial port!")])],-1),Ge=(0,s._)("p",null,"Flashing process:",-1),Be=(0,s._)("ol",null,[(0,s._)("li",null,[(0,s._)("p",null,"Download and unpack the archive with the library https://github.com/kirovilya/CCLib.")]),(0,s._)("li",null,[(0,s._)("p",null,"Flashing Arduino sketch via Arduino IDE CCLib\\Arduino\\CCLib\\Examples\\CCLib_proxy\\CCLib_proxy.ino")])],-1),Ze=(0,s._)("p",null,[(0,s._)("strong",null,"If flashing via esp8266 (wemos d1 mini), you need change connection (p. 5) and Pinout configuration in Arduino/CCLib/Examples/CCLib_proxy/CCLib_proxy.ino:")],-1),je=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"int CC_RST   = 5;\nint CC_DC    = 4;\nint CC_DD_I  = 14;\nint CC_DD_O  = 12;\n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"4"),(0,s._)("br")])],-1),Ke=(0,s._)("ol",{start:"3"},[(0,s._)("li",null,[(0,s._)("p",null,"Install Python 2.7 or later (tested with python 2.7.13), if not installed")]),(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("Install pyserial 3.0.1, if not installed "),(0,s._)("code",null,"pip install -r CCLib\\Python\\requirements.txt"),(0,s.Uk)(" or "),(0,s._)("code",null,"pip install pyserial==3.0.1")])]),(0,s._)("li",null,[(0,s._)("p",null,[(0,s.Uk)("Connect the contacts as described https://github.com/kirovilya/CCLib#1-prepare-your-arduino-board "),(0,s._)("strong",null,"But in my case, I connected completely without resistors, combined the contacts CC_DD_I and CC_DD_O together and connected to the DD pin of the DEBUG connector!")])])],-1),ze=(0,s._)("p",null,[(0,s._)("img",{src:"https://www.waveshare.com/img/devkit/CC-Debugger/CC-Debugger-JTAG-Header.jpg",alt:""})],-1),Ve=(0,s._)("p",null,"I connected only 3 specified contacts and GND. During the firmware, the stick and Arduino must be connected to the USB.",-1),He=(0,s._)("p",null,[(0,s._)("img",{src:l,alt:""}),(0,s._)("img",{src:i,alt:""}),(0,s._)("img",{src:o,alt:""})],-1),qe=(0,s._)("ol",{start:"6"},[(0,s._)("li",null,"After that, try to get information about the chip - if it works, then the connection is correct (example for COM9 port - Arduino port):")],-1),Je=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"C:\\Projects\\CCLib\\Python>python cc_info.py -p COM9\nINFO: Found a CC2531 chip on COM9\n\nChip information:\n      Chip ID : 0xb524\n   Flash size : 256 Kb\n    Page size : 2 Kb\n    SRAM size : 8 Kb\n          USB : Yes\n\nDevice information:\n IEEE Address : 00124b0014aa\n           PC : 0000\n\nDebug status:\n [ ] CHIP_ERASE_BUSY\n [ ] PCON_IDLE\n [X] CPU_HALTED\n [ ] PM_ACTIVE\n [ ] HALT_STATUS\n [ ] DEBUG_LOCKED\n [X] OSCILLATOR_STABLE\n [ ] STACK_OVERFLOW\n\nDebug config:\n [ ] SOFT_POWER_MODE\n [ ] TIMERS_OFF\n [X] DMA_PAUSE\n [X] TIMER_SUSPEND\n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"4"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"5"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"6"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"7"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"8"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"9"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"10"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"11"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"12"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"13"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"14"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"15"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"16"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"17"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"18"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"19"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"20"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"21"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"22"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"23"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"24"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"25"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"26"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"27"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"28"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"29"),(0,s._)("br")])],-1),Xe={href:"https://github.com/wavesoft/CCLib/issues/22#issuecomment-384452424",target:"_blank",rel:"noopener noreferrer"},Ye=(0,s.Uk)("Another example of connection on MacOS"),Qe={start:"7"},$e=(0,s.Uk)("If everything is successful, download "),en={href:"https://github.com/Koenkk/Z-Stack-firmware/blob/master/coordinator/Z-Stack_Home_1.2/bin/",target:"_blank",rel:"noopener noreferrer"},nn=(0,s.Uk)("the firmware"),an=(0,s.Uk)(". Before we flash the firmware we need to make a modification to it. Open the "),sn=(0,s._)("code",null,".hex",-1),rn=(0,s.Uk)(" file in a text editor and "),tn=(0,s._)("strong",null,"remove the second last line",-1),ln=(0,s.Uk)(". Now save the file."),on=(0,s._)("li",null,[(0,s._)("p",null,"Start the flashing firmware (it takes a long time, about 2-3 hours):")],-1),dn=(0,s._)("div",{class:"language-text ext-text line-numbers-mode"},[(0,s._)("pre",{class:"language-text"},[(0,s._)("code",null,"C:\\Projects\\ZigBee>python cc_write_flash.py -e -p COM9 --in=CC2531ZNP-Pro-Secure_LinkKeyJoin_mod.hex\nINFO: Found a CC2531 chip on COM9\n\nChip information:\n      Chip ID : 0xb524\n   Flash size : 256 Kb\n    Page size : 2 Kb\n    SRAM size : 8 Kb\n          USB : Yes\nSections in CC2531ZNP-Pro-Secure_LinkKeyJoin_mod.hex:\n\n Addr.    Size\n-------- -------------\n 0x0000   8176 B\n 0x1ff6   10 B\n 0x3fff0   1 B\n 0x2000   239616 B\n\nThis is going to ERASE and REPROGRAM the chip. Are you sure? <y/N>:  y\n\nFlashing:\n - Chip erase...\n - Flashing 4 memory blocks...\n -> 0x0000 : 8176 bytes\n    Progress 100%... OK\n -> 0x1ff6 : 10 bytes\n    Progress 100%... OK\n -> 0x3fff0 : 1 bytes\n    Progress 100%... OK\n -> 0x2000 : 239616 bytes\n    Progress 100%... OK\n\nCompleted\n")]),(0,s._)("div",{class:"line-numbers"},[(0,s._)("span",{class:"line-number"},"1"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"2"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"3"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"4"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"5"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"6"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"7"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"8"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"9"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"10"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"11"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"12"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"13"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"14"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"15"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"16"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"17"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"18"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"19"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"20"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"21"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"22"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"23"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"24"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"25"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"26"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"27"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"28"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"29"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"30"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"31"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"32"),(0,s._)("br"),(0,s._)("span",{class:"line-number"},"33"),(0,s._)("br")])],-1),un={},cn=(0,a(83744).Z)(un,[["render",function(e,n){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[d,u,(0,s._)("ol",null,[(0,s._)("li",null,[(0,s._)("p",null,[c,(0,s._)("a",p,[_,(0,s.Wm)(a)]),b])]),(0,s._)("li",null,[(0,s._)("p",null,[h,(0,s._)("a",m,[g,(0,s.Wm)(a)]),C])])]),f,k,x,w,v,U,(0,s._)("p",null,[D,(0,s._)("a",y,[P,(0,s.Wm)(a)]),L]),E,S,A,M,O,I,N,R,(0,s._)("ol",T,[(0,s._)("li",null,[W,(0,s._)("a",F,[G,(0,s.Wm)(a)]),B])]),Z,j,K,z,V,H,q,(0,s._)("ol",null,[(0,s._)("li",null,[(0,s._)("p",null,[J,(0,s._)("a",X,[Y,(0,s.Wm)(a)]),Q])]),(0,s._)("li",null,[$,(0,s._)("p",null,[ee,ne,ae,se,(0,s._)("a",re,[te,(0,s.Wm)(a)]),le]),ie])]),oe,(0,s._)("ol",null,[(0,s._)("li",null,[de,(0,s._)("a",ue,[ce,(0,s.Wm)(a)])]),pe]),_e,be,he,me,ge,(0,s._)("ol",null,[(0,s._)("li",null,[(0,s._)("p",null,[Ce,fe,ke,(0,s._)("a",xe,[we,(0,s.Wm)(a)]),ve])]),Ue]),De,ye,Pe,Le,(0,s._)("p",null,[(0,s._)("a",Ee,[Se,(0,s.Wm)(a)]),Ae,(0,s._)("a",Me,[Oe,(0,s.Wm)(a)]),Ie]),(0,s._)("p",null,[Ne,(0,s._)("a",Re,[Te,(0,s.Wm)(a)]),We]),Fe,Ge,Be,Ze,je,Ke,ze,Ve,He,qe,Je,(0,s._)("p",null,[(0,s._)("a",Xe,[Ye,(0,s.Wm)(a)])]),(0,s._)("ol",Qe,[(0,s._)("li",null,[(0,s._)("p",null,[$e,(0,s._)("a",en,[nn,(0,s.Wm)(a)]),an,sn,rn,tn,ln])]),on]),dn],64)}]])},83744:(e,n)=>{n.Z=(e,n)=>{for(const[a,s]of n)e[a]=s;return e}},9089:(e,n,a)=>{e.exports=a.p+"assets/img/CC2531_wiring_raspi-header.5711ef70.jpg"},54256:(e,n,a)=>{e.exports=a.p+"assets/img/downloader_cable.720e6aa2.png"},69834:(e,n,a)=>{e.exports=a.p+"assets/img/IMG_20180110_234401.a8ca2bd3.jpg"},67477:(e,n,a)=>{e.exports=a.p+"assets/img/IMG_20180111_193923.a5a7d7ba.jpg"},60104:(e,n,a)=>{e.exports=a.p+"assets/img/IMG_20180111_193941.03eceed6.jpg"}}]);
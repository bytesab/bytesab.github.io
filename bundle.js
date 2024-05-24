(()=>{"use strict";var n,e,t={497:(n,e,t)=>{t(489),console.log("hey"),n.hot.accept();var r=document.querySelector(".navbar");window.addEventListener("scroll",(function(){window.scrollY<320?r.style.maxHeight="0px":r.style.maxHeight=""}))},408:(n,e,t)=>{t.r(e),t.d(e,{default:()=>p});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),s=t(417),d=t.n(s),c=new URL(t(148),t.b),l=a()(o()),u=d()(c);l.push([n.id,`/*\n! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured \`sans\` font-family by default.\n5. Use the user's configured \`sans\` font-feature-settings by default.\n6. Use the user's configured \`sans\` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured \`mono\` font-family by default.\n2. Use the user's configured \`mono\` font-feature-settings by default.\n3. Use the user's configured \`mono\` font-variation-settings by default.\n4. Correct the odd \`em\` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \`inherit\` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.right-8 {\n  right: 2rem;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-20 {\n  z-index: 20;\n}\n.z-30 {\n  z-index: 30;\n}\n.m-\\[2\\.5\\%\\] {\n  margin: 2.5%;\n}\n.m-\\[5\\%\\] {\n  margin: 5%;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.mb-12 {\n  margin-bottom: 3rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mb-8 {\n  margin-bottom: 2rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.mr-8 {\n  margin-right: 2rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.hidden {\n  display: none;\n}\n.h-16 {\n  height: 4rem;\n}\n.h-56 {\n  height: 14rem;\n}\n.h-\\[28rem\\] {\n  height: 28rem;\n}\n.h-full {\n  height: 100%;\n}\n.w-52 {\n  width: 13rem;\n}\n.w-56 {\n  width: 14rem;\n}\n.w-72 {\n  width: 18rem;\n}\n.w-\\[90\\%\\] {\n  width: 90%;\n}\n.w-\\[95\\%\\] {\n  width: 95%;\n}\n.w-auto {\n  width: auto;\n}\n.w-full {\n  width: 100%;\n}\n.max-w-\\[80rem\\] {\n  max-width: 80rem;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.select-none {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-row-reverse {\n  flex-direction: row-reverse;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.bg-primary {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 153 51 / var(--tw-bg-opacity));\n}\n.bg-quaternary {\n  --tw-bg-opacity: 1;\n  background-color: rgb(252 240 212 / var(--tw-bg-opacity));\n}\n.bg-secondary {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 179 102 / var(--tw-bg-opacity));\n}\n.bg-teritary {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 204 153 / var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.object-contain {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.p-6 {\n  padding: 1.5rem;\n}\n.p-8 {\n  padding: 2rem;\n}\n.px-16 {\n  padding-left: 4rem;\n  padding-right: 4rem;\n}\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-\\[2\\.5rem\\] {\n  font-size: 2.5rem;\n}\n.text-\\[4rem\\] {\n  font-size: 4rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-extrabold {\n  font-weight: 800;\n}\n.text-primary {\n  --tw-text-opacity: 1;\n  color: rgb(255 153 51 / var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n* {\n    font-family: "Space Mono", monospace;\n    font-weight: 400;\n    font-style: normal;\n}\n\nhtml {\n    scroll-behavior: smooth;\n    scroll-padding-top: 4rem;\n}\n\n.centervh {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.navbarbtn {\n  height: 3.5rem;\n  cursor: pointer;\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@media (min-width: 768px) {\n\n  .navbarbtn {\n    margin: 0.25rem;\n    padding: 0.75rem;\n  }\n}\n\n.navbarbtn:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\n\n.navbar {\n    filter: drop-shadow(rgb(0 0 0 / 20%) 0 10px 10px);\n}\n\n.orange-underline {\n    background-image: linear-gradient(120deg, #FF9933 0%, #FF9933 100%);\n    background-repeat: no-repeat;\n    background-size: 100% 0.25em;\n    background-position: 0 89%;\n    padding-left: 3px;\n}\n\n.stripes {\n    background: repeating-linear-gradient(45deg,\n            #FFCC99,\n            #FFCC99 10px,\n            #FCF0D4 10px,\n            #FCF0D4 20px);\n    opacity: 0.5;\n}\n\n.drop {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    transform: translate(-8px, 8px);\n}\n\n.myshadow {\n    filter: drop-shadow(rgb(0 0 0 / 20%) -10px 10px 10px);\n}\n\n.projecthover:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 204 153 / var(--tw-bg-opacity));\n}\n\n.titlefont {\n    font-family: "Poetsen One", sans-serif;\n}\n\n.githublink {\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center 100%;\n    background-image: url(${u})\n}\n\n.\\*\\:m-4 > * {\n  margin: 1rem;\n}\n\n.\\*\\:my-4 > * {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.\\*\\:mb-4 > * {\n  margin-bottom: 1rem;\n}\n\n.\\*\\:mb-8 > * {\n  margin-bottom: 2rem;\n}\n\n.\\*\\:mr-4 > * {\n  margin-right: 1rem;\n}\n\n.\\*\\:h-1\\/3 > * {\n  height: 33.333333%;\n}\n\n.\\*\\:w-full > * {\n  width: 100%;\n}\n\n.\\*\\:bg-quaternary > * {\n  --tw-bg-opacity: 1;\n  background-color: rgb(252 240 212 / var(--tw-bg-opacity));\n}\n\n.\\*\\:p-1 > * {\n  padding: 0.25rem;\n}\n\n@media (min-width: 768px) {\n\n  .md\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .md\\:mr-8 {\n    margin-right: 2rem;\n  }\n\n  .md\\:block {\n    display: block;\n  }\n\n  .md\\:hidden {\n    display: none;\n  }\n\n  .md\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .md\\:w-1\\/3 {\n    width: 33.333333%;\n  }\n\n  .md\\:w-2\\/3 {\n    width: 66.666667%;\n  }\n\n  .md\\:w-\\[85\\%\\] {\n    width: 85%;\n  }\n\n  .md\\:w-\\[90\\%\\] {\n    width: 90%;\n  }\n\n  .md\\:w-\\[93\\%\\] {\n    width: 93%;\n  }\n\n  .md\\:flex-row {\n    flex-direction: row;\n  }\n\n  .md\\:justify-start {\n    justify-content: flex-start;\n  }\n\n  .md\\:justify-end {\n    justify-content: flex-end;\n  }\n\n  .md\\:px-16 {\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\n\n  .md\\:text-left {\n    text-align: left;\n  }\n\n  .md\\:hover\\:w-\\[95\\%\\]:hover {\n    width: 95%;\n  }\n\n  .md\\:hover\\:w-\\[98\\%\\]:hover {\n    width: 98%;\n  }\n\n  .md\\:hover\\:w-full:hover {\n    width: 100%;\n  }\n}`,""]);const p=l},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(a[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},489:(n,e,t)=>{var r=t(72),o=t.n(r),i=t(825),a=t.n(i),s=t(659),d=t.n(s),c=t(56),l=t.n(c),u=t(540),p=t.n(u),f=t(113),h=t.n(f),m=t(408),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=d().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p();var b=o()(m.default,g);if(!m.default.locals||n.hot.invalidate){var w=!m.default.locals,y=w?m:m.default.locals;n.hot.accept(408,(e=>{m=t(408),function(n,e,t){if(!n&&e||n&&!e)return!1;var r;for(r in n)if((!t||"default"!==r)&&n[r]!==e[r])return!1;for(r in e)if(!(t&&"default"===r||n[r]))return!1;return!0}(y,w?m:m.default.locals,w)?(y=w?m:m.default.locals,b(m.default)):n.hot.invalidate()}))}n.hot.dispose((function(){b()})),m.default&&m.default.locals&&m.default.locals},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var d=n[s],c=r.base?d[0]+r.base:d[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var p=t(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var d=r(n,o),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},148:n=>{n.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTEyIDBDNS4zNzQgMCAwIDUuMzczIDAgMTJjMCA1LjMwMiAzLjQzOCA5LjggOC4yMDcgMTEuMzg3LjU5OS4xMTEuNzkzLS4yNjEuNzkzLS41Nzd2LTIuMjM0Yy0zLjMzOC43MjYtNC4wMzMtMS40MTYtNC4wMzMtMS40MTYtLjU0Ni0xLjM4Ny0xLjMzMy0xLjc1Ni0xLjMzMy0xLjc1Ni0xLjA4OS0uNzQ1LjA4My0uNzI5LjA4My0uNzI5IDEuMjA1LjA4NCAxLjgzOSAxLjIzNyAxLjgzOSAxLjIzNyAxLjA3IDEuODM0IDIuODA3IDEuMzA0IDMuNDkyLjk5Ny4xMDctLjc3NS40MTgtMS4zMDUuNzYyLTEuNjA0LTIuNjY1LS4zMDUtNS40NjctMS4zMzQtNS40NjctNS45MzEgMC0xLjMxMS40NjktMi4zODEgMS4yMzYtMy4yMjEtLjEyNC0uMzAzLS41MzUtMS41MjQuMTE3LTMuMTc2IDAgMCAxLjAwOC0uMzIyIDMuMzAxIDEuMjNBMTEuNTA5IDExLjUwOSAwIDAxMTIgNS44MDNjMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2QzIwLjU2NiAyMS43OTcgMjQgMTcuMyAyNCAxMmMwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg=="}},r={};function o(n){var e=r[n];if(void 0!==e){if(void 0!==e.error)throw e.error;return e.exports}var i=r[n]={id:n,exports:{}};try{var a={id:n,module:i,factory:t[n],require:o};o.i.forEach((function(n){n(a)})),i=a.module,a.factory.call(i.exports,i,i.exports,a.require)}catch(n){throw i.error=n,n}return i.exports}o.m=t,o.c=r,o.i=[],o.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return o.d(e,{a:e}),e},o.d=(n,e)=>{for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.hu=n=>n+"."+o.h()+".hot-update.js",o.miniCssF=n=>{},o.hmrF=()=>"main."+o.h()+".hot-update.json",o.h=()=>"d81ac1c4318da0626fd6",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n={},e="portfolio-website:",o.l=(t,r,i,a)=>{if(n[t])n[t].push(r);else{var s,d;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==e+i){s=u;break}}s||(d=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",e+i),s.src=t),n[t]=[r];var p=(e,r)=>{s.onerror=s.onload=null,clearTimeout(f);var o=n[t];if(delete n[t],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((n=>n(r))),e)return e(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),d&&document.head.appendChild(s)}},o.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n,e,t,r={},i=o.c,a=[],s=[],d="idle",c=0,l=[];function u(n){d=n;for(var e=[],t=0;t<s.length;t++)e[t]=s[t].call(null,n);return Promise.all(e).then((function(){}))}function p(){0==--c&&u("ready").then((function(){if(0===c){var n=l;l=[];for(var e=0;e<n.length;e++)n[e]()}}))}function f(n){if("idle"!==d)throw new Error("check() is only allowed in idle status");return u("check").then(o.hmrM).then((function(t){return t?u("prepare").then((function(){var r=[];return e=[],Promise.all(Object.keys(o.hmrC).reduce((function(n,i){return o.hmrC[i](t.c,t.r,t.m,n,e,r),n}),[])).then((function(){return e=function(){return n?m(n):u("ready").then((function(){return r}))},0===c?e():new Promise((function(n){l.push((function(){n(e())}))}));var e}))})):u(g()?"ready":"idle").then((function(){return null}))}))}function h(n){return"ready"!==d?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+d+")")})):m(n)}function m(n){n=n||{},g();var r=e.map((function(e){return e(n)}));e=void 0;var o=r.map((function(n){return n.error})).filter(Boolean);if(o.length>0)return u("abort").then((function(){throw o[0]}));var i=u("dispose");r.forEach((function(n){n.dispose&&n.dispose()}));var a,s=u("apply"),d=function(n){a||(a=n)},c=[];return r.forEach((function(n){if(n.apply){var e=n.apply(d);if(e)for(var t=0;t<e.length;t++)c.push(e[t])}})),Promise.all([i,s]).then((function(){return a?u("fail").then((function(){throw a})):t?m(n).then((function(n){return c.forEach((function(e){n.indexOf(e)<0&&n.push(e)})),n})):u("idle").then((function(){return c}))}))}function g(){if(t)return e||(e=[]),Object.keys(o.hmrI).forEach((function(n){t.forEach((function(t){o.hmrI[n](t,e)}))})),t=void 0,!0}o.hmrD=r,o.i.push((function(l){var m,g,b,w,y=l.module,v=function(e,t){var r=i[t];if(!r)return e;var o=function(o){if(r.hot.active){if(i[o]){var s=i[o].parents;-1===s.indexOf(t)&&s.push(t)}else a=[t],n=o;-1===r.children.indexOf(o)&&r.children.push(o)}else console.warn("[HMR] unexpected require("+o+") from disposed module "+t),a=[];return e(o)},s=function(n){return{configurable:!0,enumerable:!0,get:function(){return e[n]},set:function(t){e[n]=t}}};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&"e"!==l&&Object.defineProperty(o,l,s(l));return o.e=function(n,t){return function(n){switch(d){case"ready":u("prepare");case"prepare":return c++,n.then(p,p),n;default:return n}}(e.e(n,t))},o}(l.require,l.id);y.hot=(m=l.id,g=y,w={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:b=n!==m,_requireSelf:function(){a=g.parents.slice(),n=b?void 0:m,o(m)},active:!0,accept:function(n,e,t){if(void 0===n)w._selfAccepted=!0;else if("function"==typeof n)w._selfAccepted=n;else if("object"==typeof n&&null!==n)for(var r=0;r<n.length;r++)w._acceptedDependencies[n[r]]=e||function(){},w._acceptedErrorHandlers[n[r]]=t;else w._acceptedDependencies[n]=e||function(){},w._acceptedErrorHandlers[n]=t},decline:function(n){if(void 0===n)w._selfDeclined=!0;else if("object"==typeof n&&null!==n)for(var e=0;e<n.length;e++)w._declinedDependencies[n[e]]=!0;else w._declinedDependencies[n]=!0},dispose:function(n){w._disposeHandlers.push(n)},addDisposeHandler:function(n){w._disposeHandlers.push(n)},removeDisposeHandler:function(n){var e=w._disposeHandlers.indexOf(n);e>=0&&w._disposeHandlers.splice(e,1)},invalidate:function(){switch(this._selfInvalidated=!0,d){case"idle":e=[],Object.keys(o.hmrI).forEach((function(n){o.hmrI[n](m,e)})),u("ready");break;case"ready":Object.keys(o.hmrI).forEach((function(n){o.hmrI[n](m,e)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(m)}},check:f,apply:h,status:function(n){if(!n)return d;s.push(n)},addStatusHandler:function(n){s.push(n)},removeStatusHandler:function(n){var e=s.indexOf(n);e>=0&&s.splice(e,1)},data:r[m]},n=void 0,w),y.parents=a,y.children=[],a=[],l.require=v})),o.hmrC={},o.hmrI={}})(),(()=>{var n;o.g.importScripts&&(n=o.g.location+"");var e=o.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=n})(),(()=>{if("undefined"!=typeof document){var n=[],e=[],t=t=>({dispose:()=>{for(var e=0;e<n.length;e++){var t=n[e];t.parentNode&&t.parentNode.removeChild(t)}n.length=0},apply:()=>{for(var n=0;n<e.length;n++)e[n].rel="stylesheet";e.length=0}});o.hmrC.miniCss=(r,i,a,s,d,c)=>{d.push(t),r.forEach((t=>{var r=o.miniCssF(t),i=o.p+r,a=((n,e)=>{for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=(a=t[r]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===n||o===e))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var a;if((o=(a=i[r]).getAttribute("data-href"))===n||o===e)return a}})(r,i);a&&s.push(new Promise(((r,s)=>{var d=((n,e,t,r,i)=>{var a=document.createElement("link");return a.rel="stylesheet",a.type="text/css",o.nc&&(a.nonce=o.nc),a.onerror=a.onload=t=>{if(a.onerror=a.onload=null,"load"===t.type)r();else{var o=t&&t.type,s=t&&t.target&&t.target.href||e,d=new Error("Loading CSS chunk "+n+" failed.\n("+o+": "+s+")");d.name="ChunkLoadError",d.code="CSS_CHUNK_LOAD_FAILED",d.type=o,d.request=s,a.parentNode&&a.parentNode.removeChild(a),i(d)}},a.href=e,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a})(t,i,a,(()=>{d.as="style",d.rel="preload",r()}),s);n.push(a),e.push(d)})))}))}}})(),(()=>{o.b=document.baseURI||self.location.href;var n,e,t,r,i,a=o.hmrS_jsonp=o.hmrS_jsonp||{792:0},s={};function d(e,t){return n=t,new Promise(((n,t)=>{s[e]=n;var r=o.p+o.hu(e),i=new Error;o.l(r,(n=>{if(s[e]){s[e]=void 0;var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;i.message="Loading hot update chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,t(i)}}))}))}function c(n){function s(n){for(var e=[n],t={},r=e.map((function(n){return{chain:[n],id:n}}));r.length>0;){var i=r.pop(),a=i.id,s=i.chain,c=o.c[a];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:a};if(c.hot._main)return{type:"unaccepted",chain:s,moduleId:a};for(var l=0;l<c.parents.length;l++){var u=c.parents[l],p=o.c[u];if(p){if(p.hot._declinedDependencies[a])return{type:"declined",chain:s.concat([u]),moduleId:a,parentId:u};-1===e.indexOf(u)&&(p.hot._acceptedDependencies[a]?(t[u]||(t[u]=[]),d(t[u],[a])):(delete t[u],e.push(u),r.push({chain:s.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:n,outdatedModules:e,outdatedDependencies:t}}function d(n,e){for(var t=0;t<e.length;t++){var r=e[t];-1===n.indexOf(r)&&n.push(r)}}o.f&&delete o.f.jsonpHmr,e=void 0;var c={},l=[],u={},p=function(n){console.warn("[HMR] unexpected require("+n.id+") to disposed module")};for(var f in t)if(o.o(t,f)){var h,m=t[f],g=!1,b=!1,w=!1,y="";switch((h=m?s(f):{type:"disposed",moduleId:f}).chain&&(y="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":n.onDeclined&&n.onDeclined(h),n.ignoreDeclined||(g=new Error("Aborted because of self decline: "+h.moduleId+y));break;case"declined":n.onDeclined&&n.onDeclined(h),n.ignoreDeclined||(g=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+y));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(h),n.ignoreUnaccepted||(g=new Error("Aborted because "+f+" is not accepted"+y));break;case"accepted":n.onAccepted&&n.onAccepted(h),b=!0;break;case"disposed":n.onDisposed&&n.onDisposed(h),w=!0;break;default:throw new Error("Unexception type "+h.type)}if(g)return{error:g};if(b)for(f in u[f]=m,d(l,h.outdatedModules),h.outdatedDependencies)o.o(h.outdatedDependencies,f)&&(c[f]||(c[f]=[]),d(c[f],h.outdatedDependencies[f]));w&&(d(l,[h.moduleId]),u[f]=p)}t=void 0;for(var v,x=[],M=0;M<l.length;M++){var k=l[M],j=o.c[k];j&&(j.hot._selfAccepted||j.hot._main)&&u[k]!==p&&!j.hot._selfInvalidated&&x.push({module:k,require:j.hot._requireSelf,errorHandler:j.hot._selfAccepted})}return{dispose:function(){var n;r.forEach((function(n){delete a[n]})),r=void 0;for(var e,t=l.slice();t.length>0;){var i=t.pop(),s=o.c[i];if(s){var d={},u=s.hot._disposeHandlers;for(M=0;M<u.length;M++)u[M].call(null,d);for(o.hmrD[i]=d,s.hot.active=!1,delete o.c[i],delete c[i],M=0;M<s.children.length;M++){var p=o.c[s.children[M]];p&&(n=p.parents.indexOf(i))>=0&&p.parents.splice(n,1)}}}for(var f in c)if(o.o(c,f)&&(s=o.c[f]))for(v=c[f],M=0;M<v.length;M++)e=v[M],(n=s.children.indexOf(e))>=0&&s.children.splice(n,1)},apply:function(e){for(var t in u)o.o(u,t)&&(o.m[t]=u[t]);for(var r=0;r<i.length;r++)i[r](o);for(var a in c)if(o.o(c,a)){var s=o.c[a];if(s){v=c[a];for(var d=[],p=[],f=[],h=0;h<v.length;h++){var m=v[h],g=s.hot._acceptedDependencies[m],b=s.hot._acceptedErrorHandlers[m];if(g){if(-1!==d.indexOf(g))continue;d.push(g),p.push(b),f.push(m)}}for(var w=0;w<d.length;w++)try{d[w].call(null,v)}catch(t){if("function"==typeof p[w])try{p[w](t,{moduleId:a,dependencyId:f[w]})}catch(r){n.onErrored&&n.onErrored({type:"accept-error-handler-errored",moduleId:a,dependencyId:f[w],error:r,originalError:t}),n.ignoreErrored||(e(r),e(t))}else n.onErrored&&n.onErrored({type:"accept-errored",moduleId:a,dependencyId:f[w],error:t}),n.ignoreErrored||e(t)}}}for(var y=0;y<x.length;y++){var M=x[y],k=M.module;try{M.require(k)}catch(t){if("function"==typeof M.errorHandler)try{M.errorHandler(t,{moduleId:k,module:o.c[k]})}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:k,error:r,originalError:t}),n.ignoreErrored||(e(r),e(t))}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:k,error:t}),n.ignoreErrored||e(t)}}return l}}}self.webpackHotUpdateportfolio_website=(e,r,a)=>{for(var d in r)o.o(r,d)&&(t[d]=r[d],n&&n.push(d));a&&i.push(a),s[e]&&(s[e](),s[e]=void 0)},o.hmrI.jsonp=function(n,e){t||(t={},i=[],r=[],e.push(c)),o.o(t,n)||(t[n]=o.m[n])},o.hmrC.jsonp=function(n,s,l,u,p,f){p.push(c),e={},r=s,t=l.reduce((function(n,e){return n[e]=!1,n}),{}),i=[],n.forEach((function(n){o.o(a,n)&&void 0!==a[n]?(u.push(d(n,f)),e[n]=!0):e[n]=!1})),o.f&&(o.f.jsonpHmr=function(n,t){e&&o.o(e,n)&&!e[n]&&(t.push(d(n)),e[n]=!0)})},o.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then((n=>{if(404!==n.status){if(!n.ok)throw new Error("Failed to fetch update manifest "+n.statusText);return n.json()}}))}})(),o.nc=void 0,o(497)})();
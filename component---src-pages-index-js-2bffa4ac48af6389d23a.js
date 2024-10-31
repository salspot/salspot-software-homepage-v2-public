"use strict";(self.webpackChunknew_salspot_software_landing=self.webpackChunknew_salspot_software_landing||[]).push([[678],{3723:function(e,t,a){a.d(t,{G:function(){return M},L:function(){return g},M:function(){return S},P:function(){return E},_:function(){return o},a:function(){return s},b:function(){return d},c:function(){return c},g:function(){return m},h:function(){return l}});var n=a(7294),r=(a(2369),a(5697)),i=a.n(r);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a,n,r){return void 0===r&&(r={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function m(e,t,a,n,r,i,o,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=o(e,u);return n.createElement(n.Fragment,null,n.createElement(p,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:r,alt:i="",shouldLoad:l}=e,c=o(e,h);return n.createElement("img",s({},c,{decoding:"async",loading:r,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,i=o(e,f);const l=i.sizes||(null==t?void 0:t.sizes),c=n.createElement(y,s({},i,t,{sizes:l,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return n.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:l})})),c):c};var b;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},v.displayName="Picture",v.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,w);return t?n.createElement(v,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:r.string,sources:null==(b=v.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const S=function(e){return n.createElement(n.Fragment,null,n.createElement(v,s({},e)),n.createElement("noscript",null,n.createElement(v,s({},e,{shouldLoad:!0}))))};S.displayName="MainImage",S.propTypes=v.propTypes;const k=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),s=3;s<n;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:i().object.isRequired,alt:k},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],T=new Set;let C,O;const I=function(e){let{as:t="div",image:r,style:i,backgroundColor:c,className:d,class:m,onStartLoad:u,onLoad:p,onError:g}=e,h=o(e,x);const{width:f,height:y,layout:v}=r,b=function(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}(f,y,v),{style:w,className:E}=b,S=o(b,L),k=(0,n.useRef)(),N=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);m&&(d=m);const I=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,f,y);return(0,n.useEffect)((()=>{C||(C=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==u||u({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(N);if(O&&T.has(N))return;let t,n;return C.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;k.current&&(k.current.innerHTML=a(s({isLoading:!0,isLoaded:T.has(N),image:r},h)),T.has(N)||(t=requestAnimationFrame((()=>{k.current&&(n=o(k.current,N,T,i,u,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{T.has(N)&&O&&(k.current.innerHTML=O(s({isLoading:T.has(N),isLoaded:T.has(N),image:r},h)),null==u||u({wasCached:!0}),null==p||p({wasCached:!0}))}),[r]),(0,n.createElement)(t,s({},S,{style:s({},w,i,{backgroundColor:c}),className:E+(d?" "+d:""),ref:k,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},M=(0,n.memo)((function(e){return e.image?(0,n.createElement)(I,e):null}));M.propTypes=N,M.displayName="GatsbyImage";const W=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],A=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},_=new Set(["fixed","fullWidth","constrained"]),j={src:i().string.isRequired,alt:k,width:A,height:A,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!_.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},B=(R=M,function(e){let{src:t,__imageData:a,__error:r}=e,i=o(e,W);return r&&console.warn(r),a?n.createElement(R,s({image:a},i)):(console.warn("Image not loaded",t),null)});var R;B.displayName="StaticImage",B.propTypes=j},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,n=!1;for(let r=0;r<e.length;r++){const i=e[r];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,n=a,a=!0,r++):a&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,r-1)+"-"+e.slice(r-1),n=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},2775:function(e,t,a){var n=a(7294);t.Z=e=>{let{message:t,url:a,ctaMessage:r}=e;return n.createElement("section",{className:"splashstrip color"},n.createElement("div",{className:"bg-pattern"}),n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-8"},n.createElement("div",{className:"message"},t)),n.createElement("div",{className:"col-md-4"},n.createElement("div",{className:"button-group"},n.createElement("a",{href:a},n.createElement("button",{type:"button",className:"btn action-btn","aria-label":"Lets get started"},n.createElement("span",{className:"btn-title ng-binding"},r))))))))}},1421:function(e,t,a){var n=a(7294);t.Z=e=>{let{children:t}=e;return n.createElement("div",{className:"services"},n.createElement("section",{className:"approach "},n.createElement("div",{className:"study-cases"},n.createElement("div",{className:"title-block"},n.createElement("h6",null,"Our work our pride"),n.createElement("h5",null,"Industry case studies")),t)))}},2718:function(e,t,a){a.d(t,{j:function(){return o}});var n=a(7294),r=a(50),i=a(1082),s=a(3723);const o={LEFT:"left",RIGHT:"right"};t.Z=e=>{let{style:t=o.LEFT,content:a={},elementIndex:l}=e;const{title:c,description:d,accordionList:m,slug:u,imgSrc:p,imgAlt:g,showSeeMoreButton:h}=a,f=((0,s.c)(p),{right:["col-lg-4 order-lg-last top","col-lg-8"],left:["col-lg-4 top","col-lg-8"]});if(!a.title)return"";const y=m&&m.map(((e,t)=>n.createElement(r.Z.Item,{key:(null==l?void 0:l.toString())+t.toString(),eventKey:(null==l?void 0:l.toString())+t.toString()},n.createElement(r.Z.Header,null,e.title),n.createElement(r.Z.Body,null,e.body))));return n.createElement("article",{className:"row discovery"},n.createElement("div",{className:f[t][0]},n.createElement("div",{className:"block-text "+t},n.createElement("h3",null,n.createElement("small",null," "),c),n.createElement("p",null,d),n.createElement(r.Z,{flush:!0,alwaysOpen:!0},y),h&&n.createElement("div",{className:"case-study-item-cta"},n.createElement(i.Link,{to:u,activeClassName:"active",className:"default-btn"},"See more")))),n.createElement("div",{className:f[t][1]},n.createElement("div",{className:"block-image"},n.createElement("div",{className:"bg-overlay"}),n.createElement("img",{className:"case-study-image",alt:g,src:(0,i.withPrefix)(p)}))))}},2735:function(e,t){t.Z={solarBlocks:{title:"Innovating Energy Investing - Blockchain Web3",description:"Our client is dedicated to harnessing the power of blockchain and decentralized applications to reshape the way solar energy investments are made.",slug:"/case-studies/innovating-energy-investing",showSeeMoreButton:!1,imgSrc:"/solar-blocks-mock.jpg",imgAlt:"Innovating Energy Investing - Blockchain Web3",accordionList:[{title:"Revolutionizing Investment Opportunities",body:"Our client empowers innovative investment models by leveraging technology to connect NFTs with real-world assets. This approach enables individuals to invest in renewable energy with tangible benefits."},{title:"Generating Sustainable Revenue",body:"Our solution allows investors to earn passive income by participating in clean energy production. Our engineering team facilitates the seamless integration of energy generation and investment, ensuring profitability for our clients."},{title:"Driving Sustainable Change",body:"By enabling investments in solar energy, we help our clients contribute to a greener future while enjoying financial returns."}]},enhancedTravel:{title:"Working together with a Leading Travel Services Company",description:"Our client, a major name in holiday and travel services, sought to boost their software team to meet rising demands. Salspot Software stepped in to integrate seamlessly, ensuring rapid deployment and robust solutions without disrupting their established workflows.",slug:"/case-studies/enhancing-travel-experiences",showSeeMoreButton:!1,imgSrc:"/mockup-holiday-availability-full.jpg",imgAlt:"Enhancing Travel Experiences",accordionList:[{title:"Challenge: Expanding Software Resources Quickly",body:"With growing demand, our client needed skilled developers who could adapt smoothly into their team and processes. Our goal was to integrate seamlessly into their team, adapting to their processes and work culture."},{title:"Solution: Embedded Team and Agile Project Management",body:"Salspot Software embedded developers directly into the client’s agile workflows, adapting to their internal processes and communication channels. This close collaboration enabled allowed us to provide solutions efficiently without disrupting the client’s established routines."},{title:"Outcome: Enhanced Service Quality and Reduced Time-to-Market",body:"Our involvement helped accelerate feature rollouts and maintain high service quality, enhancing the user experience."}]},fsm:{title:"Optimizing Software Solutions for a Field Service Management Leader",description:"We supported the transformation of a field service management system, enabling better performance across all platforms. Our solutions empowered technicians with real-time data and improved responsiveness for enhanced service quality.",slug:"/case-studies/fsm-solution",showSeeMoreButton:!1,imgSrc:"/fsm-mockup.jpg",imgAlt:"Dora ai Translator",accordionList:[{title:"Challenge: Meeting Complex Field Service Demands",body:"The client required additional technical expertise to address the complex needs of field service management, including real-time data handling and system integration."},{title:"Solution: Enhanced Performance through Read Model Architecture",body:"Our team implemented a read model architecture, designed to boost performance by streamlining data retrieval and optimizing query responses within their platform."},{title:"Outcome: Increased System Efficiency and Reliability",body:"With the new architecture in place, the system’s overall performance and responsiveness improved, providing a faster and more reliable experience for end-users."}]},emila:{title:"Scaling On-Demand Service for the Modern Customer",description:"Our client, a top service marketplace, sought a complete overhaul of their platform to improve performance and scalability. Salspot Software integrated with their team, delivering a full backend and frontend rewrite to elevate user experience and system efficiency.",slug:"/case-studies/on-demand-service-platform",showSeeMoreButton:!1,imgSrc:"/crowdsource-fsm.jpg",imgAlt:"On demand service platform",accordionList:[{title:"Challenge: Addressing Scalability and User Experience Needs",body:"The client needed a robust solution to handle rising user demands and improve the overall performance and reliability of their platform."},{title:"Solution: Comprehensive Backend and Frontend Redesign",body:"Our joined team undertook a complete rewrite of both backend and frontend components, optimizing architecture to support scalability and faster, smoother operations."},{title:"Outcome: Enhanced Platform Performance and User Satisfaction",body:"The new solution significantly boosted system performance and reliability, resulting in a seamless experience for both users and service providers."}]},iControl:{title:"Smart Home Management",description:"We partnered with a leading smart home platform to enhance user experience and system reliability. Our solutions improved device integration, making it easier for customers to manage their home security and automation with confidence and convenience.",slug:"/case-studies/smart-home-management",showSeeMoreButton:!1,imgSrc:"/smart-home-management-3.jpg",imgAlt:"Smart Home Management",accordionList:[{title:"Enhancing Smart Home Solutions",body:"We worked on improving a smart home platform that lets users easily manage everything from security systems to thermostats. Our technology made it more intuitive for customers to control their homes from anywhere."},{title:"Improving System Reliability",body:"Our engineers helped boost the reliability of the system, ensuring that users could count on real-time alerts and smooth communication between devices. This increased trust in the platform and improved user experience."},{title:"Supporting Seamless Integration",body:"We made it easier for the platform to integrate with a wide range of devices and services, giving users more options to customize their smart home setup. This flexibility allowed the company to better meet diverse customer needs."}]},timeToEat:{title:"Reducing Food Waste with an Easy-to-Use App",description:"We developed a platform that helps people find local restaurants and stores offering surplus food at discounted prices. By making it simple and accessible, this app encourages sustainable eating while giving users access to affordable meals and supporting local businesses.",slug:"/case-studies/reducing-food-waste",showSeeMoreButton:!1,imgSrc:"/time-to-eat-mock-crop.jpg",imgAlt:"Reducing Food Waste with an Easy-to-Use App",accordionList:[{title:"Helping Cut Down on Food Waste",body:"We developed an effective app that connects people with local restaurants and stores offering surplus food at discounted prices. It’s a win-win: less food goes to waste, and customers get great deals on meals."},{title:"Making the App Easy to Use",body:"We focused on creating a super user-friendly experience. From browsing nearby food options to picking up orders, the app is designed to make the whole process quick and hassle-free."},{title:"Encouraging Sustainability in Local Communities",body:"Our platform helps local businesses reduce waste and engage with their communities. By using the app, customers are supporting sustainability efforts while also enjoying affordable food."}]},coopCh:{title:"Building a Full-Feature Frontend for One of Switzerland’s Largest Supermarkets",description:"We developed the complete frontend for one of Switzerland’s top supermarket chains, transforming their limited online store into a fully-featured, high-performance platform.",slug:"/case-studies/swiss-supermarket-frontend",showSeeMoreButton:!1,imgSrc:"/swiss-supermarket.jpg",imgAlt:"On demand service platform",accordionList:[{title:"Enhancing the User Experience",body:"We transformed the online shopping experience by creating a user-friendly interface that simplifies product discovery. This intuitive design encourages customer engagement and helps shoppers find what they need quickly and efficiently."},{title:"Building a Feature-Rich Platform",body:"Our team developed a comprehensive frontend that includes advanced features like personalized recommendations, easy navigation, and a streamlined checkout process."},{title:"Ensuring Robust Compatibility",body:"We focused on delivering a seamless experience across all major browsers, including older versions like IE11. By eliminating compatibility issues, we ensured that every customer could access the platform without barriers."}]},coopBrands:{title:"Frontend Development for Swiss Supermarket's Diverse Brand Ecosystem",description:"We partnered with a major retail group to boost the online presence of multiple brands in their portfolio. Our team delivered optimized, user-friendly frontends for each brand, enhancing user experience and engagement across all digital platforms.",slug:"/case-studies/swiss-supermarket-brands",showSeeMoreButton:!1,imgSrc:"/swiss-supermarket-brands.jpg",imgAlt:"Swiss Supermarket Brands",accordionList:[{title:"Tailored User Experiences for Varied Audiences",body:"We developed distinct, engaging interfaces for each brand. By aligning with target audiences and product offerings, we created experiences that resonate with customers and build brand loyalty."},{title:"Streamlined Navigation and Enhanced Usability",body:"Usability was a top priority, enabling customers to navigate extensive product catalogs effortlessly. With clear, intuitive layouts and strong calls-to-action, we crafted a smooth shopping experience that encourages exploration and satisfaction."},{title:"Optimized Performance and Cross-Brand Compatibility",body:"We optimized performance to ensure fast loading and smooth functionality across devices and browsers. By addressing compatibility, even with older browsers, we ensured that every customer could engage with the platforms seamlessly."}]}}},2933:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var n=a(7294),r=a(3842),i=a(1126),s=a(8306),o=a(1721);let l=function(e){function t(t){var a;return(a=e.call(this,t)||this).next=()=>{a._ismounted&&(a.updateText(a.props.phrasesToDecode[a.counter]).then((()=>{setTimeout(a.next,2500)})),a.counter=a.counter+1===a.props.phrasesToDecode.length?0:a.counter+1)},a.updateText=e=>{if(!a._ismounted)return;const t=a.state.text,n=Math.max(t.length,e.length),r=new Promise((e=>a.resolve=e));a.queue=[];for(let i=0;i<n;i++){const n=t[i]||"",r=e[i]||"",s=Math.floor(40*Math.random()),o=s+Math.floor(40*Math.random());a.queue.push({from:n,to:r,start:s,end:o})}return cancelAnimationFrame(a.frameRequest),a.frame=0,a.update(),r},a.update=()=>{let e="",t=0;for(let n=0,r=a.queue.length;n<r;n++){let{from:r,to:i,start:s,end:o,char:l}=a.queue[n];a.frame>=o?(t++,e+=i):a.frame>=s?((!l||Math.random()<.28)&&(l=a.randomChar(),a.queue[n].char=l),e+=l):e+=r}a.setState({text:e}),t===a.queue.length?a.resolve():(a.frameRequest=requestAnimationFrame(a.update),a.frame++)},a.randomChar=()=>a.chars[Math.floor(Math.random()*a.chars.length)],a.state={text:"initial",unmounted:!1},a.chars="!<>-_\\/[]{}—=+*^?#________",a.counter=0,a}(0,o.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){this._ismounted=!0,this.next()},a.componentWillUnmount=function(){this._ismounted=!1},a.render=function(){return n.createElement("span",null,this.state.text)},t}(n.Component);var c=a.p+"static/dora-ai-home-video-banner-8fa542db07db1c0766ef7fdf54f0d8f2.mp4";var d=()=>n.createElement("div",{className:"banner video-wrapper"},n.createElement("div",{className:"container-fluid"},n.createElement("div",{className:"video-blurb"},n.createElement("div",{className:"row"},n.createElement("h1",null,"Tech forward. Human focused."),n.createElement("div",{className:"tagline show-on-desktop ng-isolate-scope"},"We're a software development agency ",n.createElement("span",{className:"highlight"},"building technology")," for",n.createElement("br",null),n.createElement("span",{className:"textdecode"},n.createElement(l,{phrasesToDecode:["the world's leading companies.","machine learning & augmented reality.","crypto & nft marketplaces.","fractional investing platforms.","auction marketplaces & bidding platforms.","healthcare & biotech.","online hypermarkets & online stores.","smart devices & connected vehicles.","think tanks, nonprofits, and NGOs.","the media & entertainment industry.","researchers and scientists.","real-time collaboration platforms."]})))))),n.createElement("div",{className:"video-block"},n.createElement("div",{className:"video-block-container"},n.createElement("div",{className:"bg-overlay"}),n.createElement("video",{loop:!0,autoPlay:!0,playsInline:!0,muted:!0,src:c,type:"video/mp4",reveal:"fadeIn","data-sr-id":"6"})))),m=a(2775),u=a.p+"static/info-banner-default-01cd09a74c69f46e49ead0c061624e7d.jpg";var p=()=>n.createElement("section",{className:"module dark whatwecreate "},n.createElement("div",{className:"container"},n.createElement("div",{className:"block text-left"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 left"},n.createElement("div",{className:"title"},"What we create"),n.createElement("h3",{className:""},"A full offering of creative services"),n.createElement("div",{className:"blurb"},"Leverage the latest software design practices and level-up your product. From gamification and UI/UX design to consumer insights and interactive prototyping, we'll help you de-risk your product decisions and bring home the ROI."),n.createElement("div",{className:"cta-button"},n.createElement("a",{className:"btn action-btn row","aria-label":"Our Contact Page",href:"/contact"},"Let's Inspire"))),n.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 right"},n.createElement("div",null," "))))),n.createElement("div",{className:"hero-container"},n.createElement("div",null,n.createElement("div",{className:"bg-overlay"}),n.createElement("img",{className:"hero-image",alt:"Salspot Software",src:u}))));var g=a(2718),h=a(2735),f=a(1421);var y=()=>n.createElement(s.Z,null,n.createElement(r.Z,{className:"navbar-fixed-top"}),n.createElement(d,null),n.createElement(f.Z,null,n.createElement(g.Z,{style:g.j.RIGHT,content:h.Z.solarBlocks,elementIndex:1}),n.createElement(g.Z,{style:g.j.LEFT,content:h.Z.enhancedTravel,elementIndex:2}),n.createElement(g.Z,{style:g.j.RIGHT,content:h.Z.fsm,elementIndex:3}),n.createElement(g.Z,{style:g.j.LEFT,content:h.Z.emila,elementIndex:4})),n.createElement(p,null),n.createElement(m.Z,{message:"Need a development partner?",url:"/contact",ctaMessage:"lets get started"}),n.createElement(i.Z,null))}}]);
//# sourceMappingURL=component---src-pages-index-js-2bffa4ac48af6389d23a.js.map
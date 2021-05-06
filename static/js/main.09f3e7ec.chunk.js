(this["webpackJsonpvinay-komaravolu-portfolio"]=this["webpackJsonpvinay-komaravolu-portfolio"]||[]).push([[0],{57:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var i=a(2),s=a(3),l=a.n(s),n=a(30),c=a.n(n),r=(a(57),a(0)),o=a(1),d=a(12),p=a(4),m=a(5),h=a(15),x=a.p+"static/media/Vinay_Komaravolu_Resume.8249bffb.pdf",u=a(52),j=a(9),b=a(13),f=a(17),g=a(6),v=a(24),y=a(41),O=a.p+"static/media/vinay3d.44bc44a9.glb",w=a.p+"static/media/cpu.55fb8710.glb";function N(){return Object(i.jsxs)("mesh",{children:[Object(i.jsx)("boxBufferGeometry",{attach:"geometry",args:[1,1,1]}),Object(i.jsx)("meshStandardMaterial",{attach:"material",transparent:!0,opacity:.5})]})}function k(e){e.scale;var t=Object(f.a)(e,["scale"]),a=Object(s.useRef)(),l=Object(v.c)(y.a,O),n=l.scene,c=l.animations,r=Object(s.useState)((function(){return new g.AnimationMixer(n)})),o=Object(b.a)(r,1)[0];return Object(s.useEffect)((function(){o.clipAction(c[1],a.current).play()}),[c,o]),Object(v.b)((function(e,t){o.update(.5*t);a.current.scale.x=35,a.current.scale.y=35,a.current.scale.z=35})),Object(i.jsx)("primitive",Object(j.a)(Object(j.a)({},t),{},{object:n,rotation:[.1,-.3,0],position:[0,-20,-3],ref:a}))}function T(e){e.scale;var t=Object(f.a)(e,["scale"]),a=Object(s.useRef)(),l=Object(v.c)(y.a,w).scene;return Object(v.b)((function(e,t){a.current.scale.x=1,a.current.scale.y=1,a.current.scale.z=1,a.current.rotation.z+=t,a.current.rotation.x+=t})),Object(i.jsx)("primitive",Object(j.a)(Object(j.a)({},t),{},{object:l,rotation:[.1,-.3,0],position:[-10,0,-5],ref:a}))}var C=function(){return Object(i.jsxs)(v.a,{tabindex:"0",camera:{position:[0,0,10]},children:[Object(i.jsx)("ambientLight",{intensity:.5}),Object(i.jsx)("spotLight",{intensity:.8,position:[300,300,400]}),Object(i.jsxs)(s.Suspense,{fallback:Object(i.jsx)(N,{}),children:[Object(i.jsx)(k,{}),Object(i.jsx)(T,{})]})]})};var L=function(){return Object(i.jsxs)("div",{id:"skills",className:"flex p-4 flex-col flex-nowrap w-full h-full ",children:[Object(i.jsx)("div",{className:"text-secondary font-bold pl-4 pr-4",children:"About me"}),Object(i.jsxs)("div",{className:"m-auto flex justify-center h-full w-full pr-12 pl-12 pt-24 pb-24",children:[Object(i.jsxs)("div",{className:"flex flex-wrap content-center h-full w-full p-28",children:[Object(i.jsx)("h3",{className:"text-secondary font-bold text-2xl",children:"I am a University of Toronto computer science graduate who has a passion for graphics programming and web development. I am someone looking for new experiences and opportunities to showcase and apply my knowledge!"}),Object(i.jsx)("h3",{className:"text-secondary font-bold text-xl pt-4",children:"In my free time I like to hang out with me friends, work on side projects, watch shows, and play video games!"})]}),Object(i.jsx)("div",{className:"w-full h-5/6",children:Object(i.jsx)(C,{})})]})]})},G=a(86);var S=function(e){var t=e.text,a=e.customClass;return Object(i.jsx)(G.a.div,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"m-1.5 pr-2 pl-2 pt-1 pb-1 rounded-2xl text-sm font-medium ".concat(a," "),children:t})},V=[{title:"Lumen",link:"https://github.com/vinaykomaravolu/Lumen",description:"Lumen is a 3D platformer with growing/shrinking mechanics and an emphasis on fast-paced \u201cspeedrunning\u201d gameplay using a dynamic movement system.",image:"/images/lumen.jpg",tags:["Game Development"],tech:["Unity","C#","Blender"]},{title:"Cyberity App",link:"https://github.com/dcsil/Cyberity-App",description:"Cyberity aims to provide a safer work environment for companies and prevent insider threats. This is a web application to analyze user behavior via logs and identify insider threats.",image:"/images/cyberity.jpg",tags:["Cybersecurity","Web App"],tech:["React","Material UI","Javascript","Python","Flask"]},{title:"VRRaytracer",link:"https://github.com/vinaykomaravolu/VRRaytracer",description:"This is my version of a randomized raytracer. Instead of sending a ray at every pixel into the scene, it sends a ray at every pixel in a random direction. ",image:"/images/vraytracer.jpg",tags:["Graphics","Raytracing"],tech:["C++"]},{title:"DaTeam SDC App",link:"https://github.com/csc302-spring-2021/proj-DaTeam",description:"Web application with a minimalistic and crisp design that allowed doctors to easily create/view/modify standardized medical notes and store it in a database. This data can then be processed by health organizations.",image:"/images/sdc.gif",tags:["Health","Web App"],tech:["React","TailwinCss","Typscript","SQL","Express","Figma"]},{title:"OpenGL Graphics Engine",link:"https://github.com/vinaykomaravolu/OpenGL-Graphics-Engine",description:"Graphics Engine made from the ground up entirely using OpenGL, GLFW, C++, GLSL. This engine enables user to easily load models and textures for rendering and viewing.",image:"/images/castle.gif",tags:["Graphics","Model View"],tech:["C++","OpenGL","OpenAL","GLSL","GLFW","ImGUI"]},{title:"VText",link:"https://github.com/vinaykomaravolu/VText",description:"VText is a Windows text/Code editor made entirely from C++, GLSL, GLFW, openGL, and Imgui. VText allows the user to create file/directories, edit new and old files, and run python files. VText also uses runs Windows Command Prompt commands and displays the output in the text editor itself.",image:"/images/vtext.jpg",tags:["Graphics","Text Editor"],tech:["C++","Python","OpenGL","GLSL","GLFW","ImGUI"]},{title:"VPlayer",link:"https://github.com/vinaykomaravolu/vplayer",description:"Native desktop music player for Windows, Linux, Mac.",image:"/images/vplayer.jpg",tags:["Native Desktop App","Music Player"],tech:["React","Electron","Typescript","TailwindCss","Lowdb","Figma"]},{title:"Image Repository",link:"https://github.com/vinaykomaravolu/Vinay-Image-Repository",description:"Image repository for uploading images to a public view space. This was created fro the shopify challenge.",image:"/images/vimage.jpg",tags:["Web App","Image Repository"],tech:["React","Python","Javascript","Material UI","MongoDB","Flask"]},{title:"Shoppies",link:"https://github.com/vinaykomaravolu/Vinay-Shoppies",description:"Movie nominating web application. This was created for the shopify challenge.",image:"/images/vshoppies.jpg",tags:["Web App","Movie Nominations"],tech:["React","Python","Javascript","Material UI","MongoDB","Flask"]}],D=[{title:"AMD Vulkan Developer",description:"After my 3rd year at University of Toronto I was fortunate enough to get a Job at AMD as a Vulkan Developer where I was able to partake in challanges just like a regular employer. It was here that I was able to meet some amazing people who have helped me through my journey!",image:"/images/amd.jpg",tags:["Graphics","Vulkan","Google Stadia","C++","Python","Visual Studio","Drivers","Virtualization"],date:"May 2019 - May 2020",workdone:[{header:"Vulkan",content:["Debugging and modifying Vulkan drivers for the API and latest graphics cards.","Debugged games with passthrough configurations and VM configurations.","Optimized Vulkan drivers for performance and stability using C++.","Worked with AMD partnered games and software developers in debugging applications."]},{header:"Google Stadia",content:["Ownership of Google Stadia\u2019s internal test bundle used by various teams.","Improved Vulkan paradigms and performance of their software by working with Google Stadia team in debugging, testing, and implementing example applications.","Compiled findings of Vulkan extension optimization that was tested on Linux VM\u2019s for the Google Stadia team."]}]}],E={title:"University of Toronto",description:"University of toronto",image:"/images/uoft.png",degree:"Bachelors  Computer Science",GPA:"3.5",date:"September 2016 - April 2021",courses:["Computer Graphics","Web Dev","Programming Languages","Software Design","Business of Software","Engineering Large Softwares","Operating Systems","Human Computer Interaction","Artifical Intelligence","Algorithm Design","Video Game Design","Machine Learning","Software Tools/ System Programming","Statistics & Probability","Linear Algebra"]},I=[{title:"Technical Languages",content:["C++","Javascript","Typescript","Python","C#","Bash","GLSL"]},{title:"Web Technologies",content:["React","TailwindCSS","Flask","Material UI","Electron","Github Actions","MongoDB","ExpressJs"]},{title:"Graphics Technologies",content:["OpenGl","Vulkan","OpenAL"]},{title:"Tools & Softwares",content:["Blender","Unity","Git","Visual Studio","Visual Studio Code","CMake","TeamCity","Perforce","Docker","VirtualBox","Figma"]}];var M=function(){return Object(i.jsxs)("div",{id:"education",className:"flex p-4 flex-col h-full w-full",children:[Object(i.jsx)("div",{className:"text-secondary font-bold pl-4 pr-4",children:"Education"}),Object(i.jsx)("div",{className:"flex flex-nowrwap h-screen justify-center items-center ",children:Object(i.jsx)("div",{className:"w-5/6 h-4/5 rounded-lg text-secondary",children:Object(i.jsxs)("div",{className:"grid grid-cols-3 rounded-xl ",children:[Object(i.jsx)("div",{className:"col-span-1 w-full h-full",children:Object(i.jsx)("img",{src:""+E.image,className:"object-scale-down rounded-lg w-full h-full"})}),Object(i.jsx)("div",{className:"col-span-2 pt-8 pl-8 pr-8",children:Object(i.jsxs)("div",{id:"Card",className:"grid grid-cols-1 divide-y-2 divide-primary",children:[Object(i.jsx)("div",{className:"p-4 font-bold text-5x",id:"Title",children:E.title}),Object(i.jsx)("div",{className:"pl-4 pt-1 pr-4 font-bold text-xl",id:"Title",children:"Study Term"}),Object(i.jsx)("div",{className:"m-2 pr-2 pl-2 pt-1 pb-1 rounded-2xl text-base font-medium text-white",children:E.date}),Object(i.jsx)("div",{className:"pl-4 pt-1 pr-4 font-bold text-xl",id:"Title",children:"Degree"}),Object(i.jsx)("div",{className:"m-2 pr-2 pl-2 pt-1 pb-1 rounded-2xl text-base font-medium text-white",children:E.degree}),Object(i.jsx)("div",{className:"pl-4 pt-1 pr-4 font-bold text-xl",id:"Title",children:"GPA"}),Object(i.jsx)("div",{className:"m-2 pr-2 pl-2 pt-1 pb-1 rounded-2xl text-base font-medium text-white",children:E.GPA}),Object(i.jsx)("div",{className:"pl-4 pt-1 pr-4 font-bold text-xl",id:"Title",children:"Courses Completed"}),Object(i.jsx)("div",{className:"flex flex-wrap pt-4 pb-4 pr-2 pl-2",children:E.courses.map((function(e){return Object(i.jsx)(S,{customClass:"bg-primary text-white border-2 border-secondary",text:e})}))})]})})]})})})]})};a(46);var A=function(e){var t=e.experienceData;return Object(i.jsx)("div",{className:"p-4 m-4 rounded-lg text-secondary w-full h-3/4 ",children:Object(i.jsxs)("div",{className:"grid grid-cols-4 gap-4 rounded-xl w-full",children:[Object(i.jsxs)("div",{className:"col-span-2 ",children:[Object(i.jsx)("img",{src:""+t.image,className:"rounded-lg w-full"}),Object(i.jsx)("div",{className:"flex flex-wrap pt-4 pb-4",children:t.tags.map((function(e){return Object(i.jsx)(S,{customClass:"bg-secondary text-primary",text:e})}))})]}),Object(i.jsx)("div",{className:"pl-8 pr-8 col-span-1",children:Object(i.jsxs)("div",{id:"Card",className:"grid grid-cols-1 text-2xl divide-y-2 divide-primary",children:[Object(i.jsx)("div",{className:"p-4 font-bold",id:"Title",children:t.title}),Object(i.jsx)("div",{className:"text-lg text-white p-4",children:t.description}),Object(i.jsx)("div",{className:"pl-4 pt-1 pr-4 font-bold text-xl",id:"Title",children:"Responsibilities"}),Object(i.jsx)("div",{className:"m-1.5 pr-2 pl-2 pt-1 pb-1 rounded-2xl text-sm font-medium text-white",children:t.date})]})}),Object(i.jsxs)("div",{className:"col-span-1",children:[Object(i.jsx)("div",{className:"pl-4 pt-1 pr-4 font-bold text-xl",id:"Title"}),Object(i.jsx)("div",{className:" w-full h-auto pl-2 pb-4 pr-2 m-2 h-8 overflow-y-hidden",children:t.workdone.map((function(e){return Object(i.jsxs)("div",{className:"bg-primary2 rounded-2xl p-2 m-2 h-full",children:[Object(i.jsx)("div",{className:"font-bold text-base",id:"Title",children:e.header}),Object(i.jsx)("div",{className:"text-base text-white text-base pl-8",children:Object(i.jsx)("ul",{class:"list-disc",children:e.content.map((function(e){return Object(i.jsx)("li",{children:e})}))})})]})}))})]})]})})};var P=function(){return Object(i.jsx)("div",{id:"experience",className:"flex p-4 flex-col h-full w-full",children:Object(i.jsxs)("div",{className:"",children:[Object(i.jsx)("div",{className:"text-secondary font-bold pl-10 pr-10",children:"Experience"}),Object(i.jsx)("div",{className:"flex flex-nowrwap h-full justify-center items-center ",children:D.map((function(e){return Object(i.jsx)("div",{className:"p-4",children:Object(i.jsx)(A,{experienceData:e})})}))}),"            "]})})};var R=function(e){var t=e.projectData;return Object(i.jsx)("a",{className:"p-4 m-4 rounded-lg text-secondary",href:t.link,target:"_blank",rel:"noopener noreferrer",children:Object(i.jsxs)("div",{className:"hover:bg-primary2 rounded-xl",children:[Object(i.jsx)("img",{src:""+t.image,className:"rounded-lg object-fill w-full"}),Object(i.jsxs)("div",{id:"Card",className:"grid grid-cols-1 text-2xl divide-y-2 divide-primary",children:[Object(i.jsx)("div",{className:"p-4 font-bold",id:"Title",children:t.title}),Object(i.jsx)("div",{className:"text-lg text-white p-4",children:t.description})]}),Object(i.jsx)("div",{className:"flex flex-wrap",children:t.tags.map((function(e){return Object(i.jsx)(S,{customClass:"bg-secondary text-primary",text:e})}))}),Object(i.jsx)("div",{className:"flex flex-wrap",children:t.tech.map((function(e){return Object(i.jsx)(S,{customClass:"bg-primary text-white border-2 border-secondary",text:e})}))})]})})},z=a(51),B=a.n(z);var F=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"text-secondary font-bold pl-12 pr-12 pt-4 pb-4",children:"Projects"}),Object(i.jsx)("div",{id:"projects",className:"pl-32 pr-32 w-auto h-6/7",children:Object(i.jsx)("div",{children:Object(i.jsx)(B.a,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,autoPlay:!0,centerMode:!1,className:"",containerClass:"container",dotListClass:"",draggable:!0,focusOnSelect:!1,infinite:!0,itemClass:"",keyBoardControl:!0,minimumTouchDrag:80,renderButtonGroupOutside:!0,renderDotsOutside:!1,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:3,partialVisibilityGutter:40},mobile:{breakpoint:{max:464,min:0},items:1,partialVisibilityGutter:30},tablet:{breakpoint:{max:1024,min:464},items:2,partialVisibilityGutter:30}},showDots:!1,sliderClass:"",slidesToSlide:1,swipeable:!0,children:V.map((function(e){return Object(i.jsx)("div",{className:"p-4",children:Object(i.jsx)(R,{projectData:e})})}))})})})]})};var W=function(){return Object(i.jsxs)("div",{id:"skills",className:"flex p-4  flex-col flex-nowrap w-full h-full",children:[Object(i.jsx)("div",{className:"text-secondary font-bold pl-12 pr-12 pt-4 pb-4",children:"Skills"}),Object(i.jsx)("div",{className:"m-auto flex justify-center p-52",children:I.map((function(e){return Object(i.jsxs)("div",{className:"p-4 m-4 bg-primary2 rounded-3xl font-bold text-secondary text-xl w-auto h-auto",children:[e.title,Object(i.jsx)("div",{className:"flex flex-row flex-wrap pt-6",children:e.content.map((function(e){return Object(i.jsx)(S,{customClass:"bg-primary border-secondary  text-lg",text:e})}))})]})}))})]})};var H=function(e){var t=e.isTop;return Object(i.jsxs)("div",{id:"skills",className:"flex p-4  flex-col flex-nowrap w-full h-full ",children:[Object(i.jsxs)("div",{className:"m-auto flex justify-center p-28 h-full",children:[Object(i.jsx)("div",{className:"flex flex-wrap content-center h-full w-5/6",children:Object(i.jsx)("h3",{className:"text-secondary font-bold text-9xl",children:"Hi, I'm Vinay!"})}),Object(i.jsx)("div",{className:"w-1/2",children:Object(i.jsx)("img",{src:"./images/vinay.png",className:"  object-scale-down rounded-lg w-full h-full "})})]}),Object(i.jsx)("div",{className:" m-auto flex flex-col justify-center h-1/2 text-secondary",children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"animate-bounce h-16 w-16",viewBox:"0 0 20 20",fill:"currentColor",children:t?Object(i.jsx)("path",{fillRule:"evenodd",d:"M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z",clipRule:"evenodd"}):null})})]})};var U=function(e){var t=e.toTop;return Object(i.jsx)("div",{id:"skills",className:"flex p-4  flex-col flex-nowrap w-full h-full ",children:Object(i.jsx)("div",{className:"flex flex-col flex-wrap content-center h-full w-full",children:Object(i.jsx)(G.a.button,{onClick:function(){t()},whileHover:{scale:1.2},whileTap:{scale:.9},type:"button",className:"text-secondary focus:outline-none font-bold text-3xl",children:"Go to Top!"})})})},J=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).handleScroll=function(e){window.scrollY<100?i.setState({toTopEnable:!1}):i.setState({toTopEnable:!0})},i.scrollToTop=i.scrollToTop.bind(Object(d.a)(i)),i.state={toTopEnable:!1},i}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"scrollToTop",value:function(){h.animateScroll.scrollToTop()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"relative z-1090",children:[Object(i.jsxs)("nav",{className:"flex top-0 flex-row-reverse bg-primary w-full fixed",children:[Object(i.jsxs)("div",{className:" z-10 pr-4 pt-2 pb-2 bl-2",children:[Object(i.jsx)(G.a.button,{className:"focus:outline-none",whileHover:{scale:1.1},whileTap:{scale:.9},children:Object(i.jsx)(h.Link,{activeClass:"active",className:"focus:none aboutme p-3 text-lg text-secondary hover:text-secondaryh",to:"aboutme",spy:!0,smooth:!0,duration:500,children:"About Me"})}),Object(i.jsx)(G.a.button,{className:"focus:outline-none",whileHover:{scale:1.1},whileTap:{scale:.9},children:Object(i.jsx)(h.Link,{activeClass:"active",className:"education  p-3 text-lg text-secondary hover:text-secondaryh",to:"education",spy:!0,smooth:!0,duration:500,children:"Education"})}),Object(i.jsx)(G.a.button,{className:"focus:outline-none",whileHover:{scale:1.1},whileTap:{scale:.9},children:Object(i.jsx)(h.Link,{activeClass:"active",className:"experience  p-3 text-lg text-secondary hover:text-secondaryh",to:"experience",spy:!0,smooth:!0,duration:500,children:"Experience"})}),Object(i.jsx)(G.a.button,{className:"focus:outline-none",whileHover:{scale:1.1},whileTap:{scale:.9},children:Object(i.jsx)(h.Link,{activeClass:"active",className:"education  p-3 text-lg text-secondary hover:text-secondaryh",to:"skills",spy:!0,smooth:!0,duration:500,children:"Skills"})}),Object(i.jsx)(G.a.button,{className:"focus:outline-none",whileHover:{scale:1.1},whileTap:{scale:.9},children:Object(i.jsx)(h.Link,{activeClass:"active",className:"projects  p-3 text-lg text-secondary hover:text-secondaryh",to:"projects",spy:!0,smooth:!0,duration:500,children:"Projects"})})]}),this.state.toTopEnable?Object(i.jsxs)("div",{class:"fixed animate-bounce flex flex-nowrap bottom-16 focus:outline-none right-0 p-5",children:[Object(i.jsx)("button",{"data-tip":!0,"data-for":"gototop",type:"button",onClick:this.scrollToTop,className:"focus:outline-none  h-10 w-10 p-3 text-lg text-secondary hover:text-secondaryh",children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",viewBox:"0 0 24 24",fill:"currentColor",children:Object(i.jsx)("path",{"fill-rule":"evenodd",d:"M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z","clip-rule":"evenodd"})})}),Object(i.jsx)(u.a,{id:"gototop",type:"warning",children:Object(i.jsx)("span",{children:"Go to the top!"})})]}):null,Object(i.jsxs)("div",{class:"fixed flex flex-row-reverse flex-nowrap bottom-0 right-4 z-50 bg-primary w-full",children:[Object(i.jsx)(G.a.a,{target:"_blank",whileHover:{scale:1.1},whileTap:{scale:.9},rel:"noopener noreferrer",className:" p-3 text-lg text-secondary hover:text-secondaryh",href:"https://www.linkedin.com/in/vinay-komaravolu/",children:"LinkedIn"}),Object(i.jsx)(G.a.a,{a:!0,target:"_blank",whileHover:{scale:1.1},whileTap:{scale:.9},rel:"noopener noreferrer",className:" p-3 text-lg text-secondary hover:text-secondaryh",href:"https://github.com/vinaykomaravolu",children:"GitHub"}),Object(i.jsx)(G.a.a,{target:"_blank",whileHover:{scale:1.1},whileTap:{scale:.9},rel:"noopener noreferrer",className:" p-3 text-lg text-secondary hover:text-secondaryh",href:x,children:"Resume"}),Object(i.jsx)(G.a.a,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"p-3 text-lg text-secondary hover:text-secondaryh",href:"mailto:vinay.komaravolu@gmail.com",children:"Email"})]})]}),Object(i.jsx)(h.Element,{name:"home",className:"element",children:Object(i.jsx)(H,{isTop:!this.state.toTopEnable})}),Object(i.jsx)(h.Element,{name:"aboutme",className:"element",children:Object(i.jsx)(L,{})}),Object(i.jsx)(h.Element,{name:"education",className:"element",children:Object(i.jsx)(M,{})}),Object(i.jsx)(h.Element,{name:"experience",className:"element",children:Object(i.jsx)(P,{})}),Object(i.jsx)(h.Element,{name:"skills",className:"element",children:Object(i.jsx)(W,{})}),Object(i.jsx)(h.Element,{name:"projects",className:"element",children:Object(i.jsx)(F,{})}),Object(i.jsx)(h.Element,{name:"projects",className:"w-screen h-48",children:Object(i.jsx)(U,{toTop:this.scrollToTop})})]})}}]),a}(l.a.Component),_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,87)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,l=t.getLCP,n=t.getTTFB;a(e),i(e),s(e),l(e),n(e)}))};c.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(J,{})}),document.getElementById("root")),_()}},[[83,1,2]]]);
//# sourceMappingURL=main.09f3e7ec.chunk.js.map
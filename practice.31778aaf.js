function o(o){return new Promise(((e,n)=>{console.log(`Fetching data for ${o}`),setTimeout((()=>{n("error")}),2e3)}))}console.log(o("Andrii")),o("Andrii").then((e=>{console.log(e),console.log(o("Andrii"))})).catch((o=>{console.log(o)}));
//# sourceMappingURL=practice.31778aaf.js.map

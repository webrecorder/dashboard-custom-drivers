/* eslint-disable no-undef */
const puppeteer = require("puppeteer-core");
async function dashboard10(frames){
  
}

module.exports = async ({data, page, crawler}) => {
  
dashboards = {
  '9': {'tabs': 1},
  '10': {'tabs': 1},
  '12': {'tabs': 2},
  '14': {'tabs': 6}
}

  const {url} = data;
  if (!await crawler.isHTML(url)) {
    await crawler.directFetchCapture(url);
    return;
  }

  const gotoOpts = {
    waitUntil: crawler.params.waitUntil,
    timeout: 2147483647
  };

  try {
    await page.goto(url, {timeout:2147483647});
    await requestIndividualDashboards(1);

    for (k = 3; k <= 16; k++){
      await requestIndividualDashboards(k);
    }
    await requestIndividualDashboards(1);

    for (k = 2; k <= 13; k++){
      await requestIndividualDashboards(k);
    }
  } 
  catch (e) {
    console.log(`Load timeout for ${url}`, e);
  }

  
  async function getTabs(frame, number_of_frames) {
    for (i = 0; i <= number_of_frames; i++) { 
      console.log("item clicked");
      console.log(i);
      await frame.waitForSelector(`.dijitTabContainerTop-tabs #tableauTabbedNavigation_tab_${i}`);
      await frame.click(`.dijitTabContainerTop-tabs #tableauTabbedNavigation_tab_${i}`);
      await crawler.sleep(4000);    
    }
  }
  
  async function requestIndividualDashboards(i) {
    console.log(`begin processing dashboard ${i}`);
    
    await page.waitForSelector("#navigator > div > .menu-icon > .slide-menu-open-box > .fas", {timeout:2147483647});
    await page.click("#navigator > div > .menu-icon > .slide-menu-open-box > .fas", {timeout:2147483647});
    console.log("side nav bar opened");

    await page.waitForSelector(`#navigator > div > #sidebar-nav > .list-group-item:nth-child(${i}) > .capturedLink`, {timeout:2147483647});
    await page.click(`#navigator > div > #sidebar-nav > .list-group-item:nth-child(${i}) > .capturedLink`, {timeout:2147483647});
    console.log("clicked");

    await page.reload({ waitUntil: ["networkidle0", "networkidle2", "domcontentloaded"], timeout:2147483647 });
    console.log("reloaded");
    
    let frames = await page.frames();
   
    for (j = 0; j < frames.length; j++) {  
      if (frames[j]._url.includes("tableau")){
        
        console.log("tableau dashboard found");
        console.log(i.toString())
        
        const frame = frames.find(f => f.url() === frames[j]._url);
        
        if (i.toString() in dashboards){
          console.log("custom config found")
          if ('tabs' in dashboards[i]){
            console.log(`getting #{dashboards[i]['tabs']} tabs from #{i}`)
            await getTabs(frame, dashboards[i]['tabs']);
          }
        }
        
        await page.goto(frames[j]._url, {timeout:2147483647});
        await page.reload({ waitUntil: ["networkidle0", "networkidle2", "domcontentloaded"], timeout:2147483647 });
  
   
        console.log("navigate back to main dashboard");  
        await page.goto(url, {timeout:2147483647});
      }
    }
  }
};


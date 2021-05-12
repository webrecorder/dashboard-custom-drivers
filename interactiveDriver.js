/* eslint-disable no-undef */
const puppeteer = require("puppeteer-core");
 async function dashboard10(frames){
  
}

module.exports = async ({data, page, crawler}) => {
  


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
    await page.goto(url, {timeout:2147483647})
    await requestIndividualDashboards(url, 12)
  } 
  catch (e) {
    console.log(`Load timeout for ${url}`, e);
  }

 async function requestIndividualDashboards(url, i) {
   console.log("request individual dashboard")
   await page.waitForSelector('#navigator > div > .menu-icon > .slide-menu-open-box > .fas', {timeout:2147483647})
   await page.click('#navigator > div > .menu-icon > .slide-menu-open-box > .fas', {timeout:2147483647})
   console.log("side nav bar opened")
   await page.waitForSelector(`#navigator > div > #sidebar-nav > .list-group-item:nth-child(${i}) > .capturedLink`, {timeout:2147483647})
   await page.click(`#navigator > div > #sidebar-nav > .list-group-item:nth-child(${i}) > .capturedLink`, {timeout:2147483647})
   console.log("clicked")
   await page.reload({ waitUntil: ["networkidle0", "networkidle2", "domcontentloaded"], timeout:2147483647 });
   console.log("reloaded")
   let frames = await page.frames()
   const frame_4966 = frames.find(f => f.url() === 'https://tableau.azdhs.gov/views/EMResourceBeds/ICUBedUsageAvailability?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Ftableau.azdhs.gov%2F&:embed_code_version=3&:tabs=yes&:toolbar=no&:showAppBanner=false&:display_spinner=no&iframeSizedToWindow=true&:loadOrderID=0')
    await frame_4966.waitForSelector('.dijitTabContainerTop-tabs #tableauTabbedNavigation_tab_1')
    await frame_4966.click('.dijitTabContainerTop-tabs #tableauTabbedNavigation_tab_1')
    await crawler.sleep(2000)

    await frame_4966.waitForSelector('#main-content > #dashboard-viewport > #dashboard-spacer #tabZoneId4')
    await frame_4966.click('#main-content > #dashboard-viewport > #dashboard-spacer #tabZoneId4')
    await crawler.sleep(2000)

    await frame_4966.waitForSelector('.dijitTabContainerTop-tabs #tableauTabbedNavigation_tab_2')
    await frame_4966.click('.dijitTabContainerTop-tabs #tableauTabbedNavigation_tab_2')
    await crawler.sleep(2000)

    await frame_4966.waitForSelector('.dijitTabContainerTop-tabs #tableauTabbedNavigation_tab_1')
    await frame_4966.click('.dijitTabContainerTop-tabs #tableauTabbedNavigation_tab_1')
    await crawler.sleep(2000)

    await frame_4966.waitForSelector('.dijitTabContainerTop-tabs #tableauTabbedNavigation_tab_0')
    await frame_4966.click('.dijitTabContainerTop-tabs #tableauTabbedNavigation_tab_0')
    await crawler.sleep(2000)


   for (j = 0; j < frames.length; j++) {  
      if (frames[j]._url.includes('tableau')){
        console.log("tableau dashboard found")
        await page.goto(frames[j]._url, {timeout:2147483647})
        await page.reload({ waitUntil: ["networkidle0", "networkidle2", "domcontentloaded"], timeout:2147483647 });
  
   
        console.log("navigate back to main dashboard")  
        await page.goto(url, {timeout:2147483647})
      }
    }
  }
}


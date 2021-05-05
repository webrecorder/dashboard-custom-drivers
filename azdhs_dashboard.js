/* eslint-disable no-undef */
const puppeteer = require("puppeteer-core");

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
    await requestIndividualDashboards(1)
    for (i = 3; i <= 16; i++) {  
        await requestIndividualDashboards(i)
    }
    
    await requestIndividualDashboards(2)
    for (i = 3; i <= 13; i++) {  
        await requestIndividualDashboards(i)
    }
  } 
  catch (e) {
    console.log(`Load timeout for ${url}`, e);
  }


 async function requestIndividualDashboards(i) {
   console.log("request individual dashboard")
   await page.waitForSelector('#navigator > div > .menu-icon > .slide-menu-open-box > .fas', {timeout:2147483647})
   await page.click('#navigator > div > .menu-icon > .slide-menu-open-box > .fas', {timeout:2147483647})
   console.log("side nav bar opened")
   await page.waitForSelector(`#navigator > div > #sidebar-nav > .list-group-item:nth-child(${i}) > .capturedLink`, {timeout:2147483647})
   await page.click(`#navigator > div > #sidebar-nav > .list-group-item:nth-child(${i}) > .capturedLink`, {timeout:2147483647})
   console.log("clicked")
   await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"], timeout:2147483647 });
   console.log("reloaded")
 }
 
 };

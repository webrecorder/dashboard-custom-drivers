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
    timeout: 100000000
  };
  
  try {
    await page.goto(url, gotoOpts);
    await page.goto('https://tableau.azdhs.gov/views/COVID-19Summary/Overview2?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Ftableau.azdhs.gov%2F&:embed_code_version=3&:tabs=no&:toolbar=no&:showAppBanner=false&:display_spinner=no&iframeSizedToWindow=true&:loadOrderID=0')
    
    
    let frames = await page.frames()
    const frame_1678 = frames.find(f => f.url() === 'https://tableau.azdhs.gov/views/COVID-19Summary/Overview2?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Ftableau.azdhs.gov%2F&:embed_code_version=3&:tabs=no&:toolbar=no&:showAppBanner=false&:display_spinner=no&iframeSizedToWindow=true&:loadOrderID=0')
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-ubertipContent > .tab-ubertipTooltip > span > div:nth-child(1) > span:nth-child(1)')
    await frame_1678.click('.tab-ubertipContent > .tab-ubertipTooltip > span > div:nth-child(1) > span:nth-child(1)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('#tableau_base_widget_ParameterControl_15 > .ParameterControlBox > .PCContent > .tabComboBox > .tabComboBoxNameContainer')
    await frame_1678.click('#tableau_base_widget_ParameterControl_15 > .ParameterControlBox > .PCContent > .tabComboBox > .tabComboBoxNameContainer')
    
    await frame_1678.waitForSelector('.tundra > #tab-ui-id-1619834128852 > .tabMenuContent > #tab-menuItem2 > .tabMenuItemNameArea')
    await frame_1678.click('.tundra > #tab-ui-id-1619834128852 > .tabMenuContent > #tab-menuItem2 > .tabMenuItemNameArea')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
    await frame_1678.waitForSelector('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    await frame_1678.click('.tab-clip > #view13531545538510163046_11974585255807820909 > .tvScrollContainer > .tvimagesContainer > .tabCanvas:nth-child(2)')
    
  } catch (e) {
    console.log(`Load timeout for ${url}`, e);
  }

 };
 



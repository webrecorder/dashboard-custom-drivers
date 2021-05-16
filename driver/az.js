
let first = true;


module.exports = async ({data, page, crawler}) => {
  const {url} = data;

  await crawler.loadPage(page, url);

  if (first) {
    //crawler.excludes = [/sidebar-nav|contentHead|search/];

    await page.waitForSelector("#navigator > div > .menu-icon > .slide-menu-open-box > .fas");
    await page.click("#navigator > div > .menu-icon > .slide-menu-open-box > .fas");
    await crawler.sleep(1000);
    await page.click(".slide-menu-close-btn");
    first = false;
  }

  const frames = await page.frames();
  let frame = frames.find(f => f.url().indexOf("tableau") > 0);

  if (frame) {
    await tryTableau(frame, crawler);
  } else {
    frame = frames.find(f => f.url().indexOf("arcgis") > 0);

    if (frame) {
      await tryMap(page, frame, crawler);
    }
  }

  await crawler.sleep(2000);
  await crawler.awaitPendingClear();
};

async function hoverClickTableau(frame, crawler) {
  let count = 1; 

  while (true) {
    try {
      await frame.hover(`.tab-zone:nth-child(${count})`);
      await crawler.sleep(50);
      await frame.click(`.tab-zone:nth-child(${count})`);
      count++;
      await crawler.sleep(200);
    } catch (e) {
      console.log("done, hovered: " + count);
      break;
    }
  }
}

async function tryTableau(frame, crawler) {
  const tabs = await frame.$$(".dijitTabContainerTop-tabs > div");
  let tabCount = 1;

  while (true) {
    await hoverClickTableau(frame, crawler);

    if (tabCount < tabs.length) {
      console.log(`Clicking on ${tabCount + 1} of ${tabs.length} tabs`);
      await tabs[tabCount++].click();
      await crawler.sleep(1000);
    } else {
      break;
    }
  }

  if (tabs.length) {
    console.log("Clicking on first tab");
    await tabs[0].click();
    await crawler.sleep(1000);
  }
}

async function tryMap(page, frame, crawler) {
  await page.click(".enter-fullscreen");

  for (let i = 0; i < 3; i++) {
    const sel = await frame.waitForSelector(".esri-icon-plus");
    if (!sel) {
      continue;
    }
    await sel.click();
    await crawler.sleep(500);
  }

  await page.click(".exit-fullscreen");
}





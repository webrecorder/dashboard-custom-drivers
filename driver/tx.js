module.exports = async ({data, page, crawler}) => {
  const {url} = data;

  await crawler.loadPage(page, url);

  await crawler.sleep(1000);

  const labels = await page.$$("label");

  let count = 0;

  for (const label of labels) {
    console.log(`click on option ${++count} of ${labels.length}`);
    await label.click();
    await crawler.sleep(1000);
  }

  for (let i = 0; i < 2; i++) {
    const sel = await page.waitForSelector(".esri-icon-minus");
    if (!sel) {
      continue;
    }
    console.log("zooming out");
    await sel.click();
    await crawler.sleep(500);
  }


  for (let i = 0; i < 5; i++) {
    const sel = await page.waitForSelector(".esri-icon-plus");
    if (!sel) {
      continue;
    }
    console.log("zooming in");
    await sel.click();
    await crawler.sleep(500);
  }
};




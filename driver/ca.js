

module.exports = async ({data, page, crawler}) => {
  const {url} = data;

  await crawler.loadPage(page, url);

  try {
    let frame = null;

    for (const f of await page.frames()) {
      // find last, not first frame
      if (f.url().indexOf("tableau") > 0) {
        frame = f;
      }
    }

    if (!frame) {
      frame = page.mainFrame();
    } else {
      await frame.click("span.tabComboBox");
      await crawler.sleep(2000);
    }

    const elems = await frame.$$(".tabMenuMenuItem");
    const numElem = elems.length;
    console.log("Num Dropdown Elements", numElem);

    const timeout = 90000;

    for (let i = numElem; i >= 1; i--) {
      console.log("Clicking on elem: " + i);
      const sel = await frame.waitForSelector(`.tabMenuMenuItem:nth-child(${i})`, {timeout});
      await sel.click();
      await crawler.sleep(2000);
      await frame.waitForSelector("#loadingSpinner", {hidden: true, timeout});
      await crawler.sleep(2000);

      if (i == 1) {
        break;
      }

      const combo = await frame.waitForSelector("span.tabComboBox", {timeout});
      await combo.click();
      console.log("Combo Clicked");
      await crawler.sleep(2000);
    }

  } catch(e) {
    console.log("Selector not found", e);
  }
};

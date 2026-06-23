const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 960 });
  await page.goto('http://localhost:3000/pt', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Hero — at top
  await page.screenshot({ path: '/tmp/s4-hero.png' });

  // Slow scroll to trigger animations
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 200) {
    await page.evaluate((sy) => window.scrollTo(0, sy), y);
    await page.waitForTimeout(60);
  }

  // Section shots
  await page.evaluate(() => document.getElementById('about')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(400);
  await page.screenshot({ path: '/tmp/s4-about.png' });

  await page.evaluate(() => window.scrollBy(0, 960));
  await page.waitForTimeout(400);
  await page.screenshot({ path: '/tmp/s4-experience.png' });

  await page.evaluate(() => document.getElementById('skills')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(400);
  await page.screenshot({ path: '/tmp/s4-skills.png' });

  await page.evaluate(() => document.getElementById('works')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(400);
  await page.screenshot({ path: '/tmp/s4-works.png' });

  const fullHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log('Page height:', fullHeight);

  await browser.close();
  console.log('done');
})();

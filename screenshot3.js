const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/pt', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Scroll slowly through the whole page to trigger whileInView animations
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 200) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(80);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(800);

  // Hero
  await page.screenshot({ path: '/tmp/s3-hero.png' });

  // About (welcome)
  await page.evaluate(() => document.getElementById('about')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/s3-about.png' });

  // Scroll to experience gradient
  await page.evaluate(() => window.scrollBy(0, 900));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/s3-experience.png' });

  // Skills
  await page.evaluate(() => document.getElementById('skills')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/s3-skills.png' });

  // Works
  await page.evaluate(() => document.getElementById('works')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(500);
  await page.screenshot({ path: '/tmp/s3-works.png' });

  // Full page after animations triggered
  const fullHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log('Full page height:', fullHeight);
  await page.screenshot({ path: '/tmp/s3-full.png', fullPage: true });

  await browser.close();
  console.log('done');
})();

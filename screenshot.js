const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 960 });

  await page.goto('http://localhost:3000/pt', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Hero
  await page.screenshot({ path: '/tmp/portfolio-hero.png', fullPage: false });

  // Scroll to about
  await page.evaluate(() => document.getElementById('about')?.scrollIntoView());
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/tmp/portfolio-about.png', fullPage: false });

  // Scroll to gradient experience
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/tmp/portfolio-experience.png', fullPage: false });

  // Scroll to skills
  await page.evaluate(() => document.getElementById('skills')?.scrollIntoView());
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/tmp/portfolio-skills.png', fullPage: false });

  // Scroll to works
  await page.evaluate(() => document.getElementById('works')?.scrollIntoView());
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/tmp/portfolio-works.png', fullPage: false });

  // Full page
  await page.goto('http://localhost:3000/pt', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/tmp/portfolio-full.png', fullPage: true });

  await browser.close();
  console.log('done');
})();

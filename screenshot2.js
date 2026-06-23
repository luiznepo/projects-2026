const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // 1440px - viewport mais comum
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/pt', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);

  await page.screenshot({ path: '/tmp/p2-hero.png' });

  await page.evaluate(() => document.getElementById('about')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(600);
  await page.screenshot({ path: '/tmp/p2-about.png' });

  await page.evaluate(() => document.getElementById('skills')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(600);
  await page.screenshot({ path: '/tmp/p2-skills.png' });

  await page.evaluate(() => document.getElementById('works')?.scrollIntoView({ behavior: 'instant' }));
  await page.waitForTimeout(600);
  await page.screenshot({ path: '/tmp/p2-works.png' });

  // Full page at 1440
  await page.goto('http://localhost:3000/pt', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/tmp/p2-full.png', fullPage: true });

  // Check main element computed style
  const mainPadding = await page.evaluate(() => {
    const main = document.querySelector('main');
    const style = window.getComputedStyle(main);
    return { paddingLeft: style.paddingLeft, paddingTop: style.paddingTop, width: style.width };
  });
  console.log('main styles:', JSON.stringify(mainPadding));

  // Check skills section
  const skillsLayout = await page.evaluate(() => {
    const section = document.getElementById('skills');
    if (!section) return 'not found';
    const rect = section.getBoundingClientRect();
    const firstFlex = section.querySelector('.flex.gap-\\[50px\\]');
    if (!firstFlex) return { sectionRect: { left: rect.left, width: rect.width }, flexFound: false };
    const children = Array.from(firstFlex.children).map(c => ({
      width: c.getBoundingClientRect().width,
      left: c.getBoundingClientRect().left,
    }));
    return { sectionRect: { left: rect.left, width: rect.width }, flexChildren: children };
  });
  console.log('skills layout:', JSON.stringify(skillsLayout));

  await browser.close();
})();

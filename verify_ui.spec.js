import { test } from '@playwright/test';

test('verify ui', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });

  // Login page
  await page.goto('http://localhost:5173/login');
  await page.screenshot({ path: 'screenshots/login.png' });

  // Home page
  await page.goto('http://localhost:5173/home');
  await page.screenshot({ path: 'screenshots/home.png' });

  // Movimientos page
  await page.goto('http://localhost:5173/movimientos');
  await page.screenshot({ path: 'screenshots/movimientos.png' });
});

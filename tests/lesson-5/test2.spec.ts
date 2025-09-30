import { test } from '@playwright/test';

test('Add product to Cart', async ({ page }) => {
    await test.step('Navigate Page', async () => {
        await page.goto('https://material.playwrightvn.com/')
    });

    await test.step('Refer Product Page', async () => {
        await page.locator('//a[text() = "Bài học 2: Product page"]').click();
    });

    await test.step('Add product 1', async () => {
        const btnAddCartPro1 = page.locator('//button[@class="add-to-cart" and @data-product-id = "1"]');
        for (let i = 0; i < 2; i++) {
            await btnAddCartPro1.click();
        }
    });

    await test.step('Add product 2', async () => {
        const btnAddCartPro2 = page.locator('//button[@class="add-to-cart" and @data-product-id = "2"]');
        for (let i = 0; i < 3; i++) {
            await btnAddCartPro2.click();
        }
    });

    await test.step('Add product 3', async () => {
        await page.locator('//button[@class="add-to-cart" and @data-product-id = "3"]').click();
    });
}); 
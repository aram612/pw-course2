import { test } from '@playwright/test';

test('Create Todo Item', async ({ page }) => {
    await test.step('Navigate Page', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step('Refer Todo Page', async () => {
        await page.locator('//a[text() = "Bài học 3: Todo page"]').click();
    });

    await test.step('Add item', async () => {
        const textInput = page.locator('//input[@type="text" and @placeholder="Enter a new task"]');
        const btnAdd = page.locator('//button[@id="add-task"]');
        for (let i = 1; i <= 100; i++) {
            await textInput.fill(`Todo ${i}`);
            await btnAdd.click();
        }
    });

    await test.step('Delete item odd', async () => {
        page.on('dialog', async dialog => dialog.accept());
        for (let i = 1; i <= 100; i++) {
            if (i % 2 !== 0) {
                await page.click(`//button[@id="todo-${i}-delete"]`);
            }
        }
    });
});
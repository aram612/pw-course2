import { test } from '@playwright/test';

test('Input data', async ({ page }) => {
    await test.step('Navigate page', async () => {
        await page.goto('https://material.playwrightvn.com/')
    });

    await test.step('Refer Register Page', async () => {
        await page.locator('//a[text()="Bài học 1: Register Page (có đủ các element)"]').click();
    })

    await test.step('Enter data', async () => {
        await page.locator('//input[@id="username"]').pressSequentially('aram612', { delay: 500 });
        await page.locator('//input[@id="email"]').pressSequentially('aram612@gmail.com', { delay: 500 });
        await page.locator('//input[@id="male"]').check();

        const checkHobbies = async (value: string) => {
            const checkbox = page.locator(`//input[@name="hobbies" and @value="${value}"]`);
            await checkbox.check();
        };

        checkHobbies('reading');

        await page.locator('//select[@id="interests"]').selectOption({ index: 1 });
        await page.locator('//select[@id="country"]').selectOption({ value: 'uk' })
        await page.locator('//input[@type="date" and @id="dob"]').fill('1997-12-06');
        await page.locator('//input[@type="file"]').setInputFiles('data-test/avatar.jpg');
        await page.locator('//textarea[@id="bio"]').fill('mou shindeiru');
        await page.locator('//input[@type="range"]').fill('8');
        await page.locator('//input[@type="color"]').fill('#b6bbd3');
        await page.locator('//div[@class="tooltip" and contains(text(), "Hover over me")]').hover();

        const tooltipHover = page.locator('//span[@class="tooltiptext"]');
        if (await tooltipHover.isVisible()) {
            await page.locator('//label[text()="Subscribe"]').click();
        }

        /*Không hiểu sao đoạn này luôn báo lỗi, em chưa rõ chỗ này. Trên DOM cả khi click hay không click thì cũng không có thay đổi về DOM. Khoai quá
        const featureSwitch = page.locator('//input[@id="toggleOption"]');
        if (await featureSwitch.isChecked() === false) {
             featureSwitch.check();
        } */

        /* await page.locator('//input[@type="date" and @id="customDate"]').fill('2025-12-06');
        element này sau khi chạy báo lỗi thì xem lại mới thấy có attr "readonly". Với case này theo tìm hiểu có thể dùng JS để loại bỏ thuộc tính readonly sau đó fill data 
        như bình thường. Nhưng em không biết làm. Em xin cách ạ */
    });

    await test.step('Click button', async () => {
        await page.locator('//button[@type="submit"]').click();
    });
});
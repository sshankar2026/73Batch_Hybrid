//Actaul automation Test Steps;
import {test} from '@playwright/test';
import {General} from '../lib/General';

test('TC001', async ({ page }) => {
    //----Test Steps
 let obj = new General(page);
 await obj.openApplication();
 await obj.login();
 await obj.logout();
});
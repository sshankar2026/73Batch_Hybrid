//To provide all re-usable functions / methods related to whole application
//user-defined functions / methods
import {Global} from "./Global";
export class General extends Global {
async openApplication() {
await this.page.goto(this.url);
console.log("Application Opened");
}
async login() {
await this.page.locator(this.textbox_loginame).fill(this.username);
await this.page.locator(this.textbox_password).fill(this.password);
await this.page.locator(this.button_login).click();
console.log("Login is completed");
}


async logout() {
await this.page.locator(this.link_logout).click();
console.log("Logout is completed");
}

async addNewEmployee() {
const frame = this.page.frameLocator(this.frame_empinfo);
await frame.locator(this.button_addemp).click();
await frame.locator(this.textbox_empfirstname).fill(this.empfirstname);
await frame.locator(this.textbox_emplastname).fill(this.emplastname);
await frame.locator(this.button_saveemp).click();
console.log("New Employee Added");
}






}
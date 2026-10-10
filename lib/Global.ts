//To Provide Test Data & Objects Related to whole application
import {Page} from "@playwright/test";
export class Global {
    constructor(public page: Page) {
       // this.page = page;
    }
//************Test Data********* */
public url:string = "https://ctcorphyd.com/SureshIT/login.php";
public username:string = "sureshit";
public password:string = "sureshit";
public empfirstname:string = "Suresh";
public emplastname:string = "Hyderabad";

public frame_empinfo : string      = "//iframe[@name='rightMenu']";
public button_addemp : string      = "//input[@value='Add']";
public textbox_empfirstname : string = "//input[@name='txtEmpFirstName']";
public textbox_emplastname : string  = "//input[@name='txtEmpLastName']";
public button_saveemp : string       = "//input[@id='btnEdit']";

//************Objects / Elements******* */
public textbox_loginame : string = "//input[@name='txtUserName']";
public textbox_password : string = "//input[@name='txtPassword']";
public button_login : string     = "//input[@name='Submit']";
public link_logout : string      = "//a[text()='Logout']";
}
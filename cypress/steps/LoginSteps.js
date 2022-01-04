import LoginPage from "../page_objects/LoginPage";

export default class LoginSteps{
    static login(username, password){
        LoginPage.usernameInput().clear().type(username)
        LoginPage.passwordInput().clear().type(password)
        LoginPage.submitButton().click()
    }
}
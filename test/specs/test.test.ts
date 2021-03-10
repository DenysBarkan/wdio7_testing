import loginPage from "../pageobjects/login.page"
import { Application } from "../pageobjects/Application"


describe('testing describe', function(){
    const App = new Application

    it('console', function(){
        loginPage.open()
        let ur = browser.getUrl()
        App.fun.consoler(ur)
    })
})
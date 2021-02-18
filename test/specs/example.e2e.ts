import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        // expect(SecurePage.flashAlert).toBeExisting();
        // expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!');

            SecurePage.flashAlert.isExisting().should.to.be.true

    });


    it('testing autocomplete', ()=>{
        // type browser.getU   pay attention to the autocomplete list
        
    })
});



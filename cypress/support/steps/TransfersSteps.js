import TransfersPage from "../page_objects/TransfersPage";
/*
Features:
1. Business steps layer
*/
export default class TransfersSteps {
    static fillAndSubmitForm(debit, credit, amount, text) {
        TransfersPage.debitFromDropDown().click()
        TransfersPage.dropDownOption().contains(debit).click()
        TransfersPage.creditToDropDown().click()
        TransfersPage.dropDownOption().contains(credit).click()
        TransfersPage.amountToTransferInput().type(amount)
        TransfersPage.descriptionTextArea().type(text)
        TransfersPage.submitButton().click()
        TransfersPage.confirmButton().click()
    }
}


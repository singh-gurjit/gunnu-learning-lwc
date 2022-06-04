import { LightningElement, wire, track } from 'lwc';
import getAccountList from '@salesforce/apex/ManageAccountsController.getAccountList'

export default class ManageAccountsApp extends LightningElement {

    showManageAccountsNotificationModal
    showManageAccountsNewAccount
    @track accountsArray = []
    @track accountsArrayToDisplay = []

    //@track totalRecords = this.accountsArrayToDisplay.length

    get totalRecords() {
        return this.accountsArrayToDisplay.length
    }

    @wire(getAccountList)
    handleAccountList(result) {

        if (result.data) {
            this.accountsArray = JSON.parse(JSON.stringify(result.data))
            this.accountsArrayToDisplay = JSON.parse(JSON.stringify(result.data))
        } else if (result.error) {
            console.error('There is an error', result.error)
        }
    }

    handleSearchChange(event) {
        let inputValue = event.detail
        inputValue = inputValue.toLowerCase()
        this.accountsArrayToDisplay = this.accountsArray.filter(data => data.Name.toLowerCase().includes(inputValue))

    }

    handleShowHideAccountModal() {
        this.showManageAccountsNewAccount = !this.showManageAccountsNewAccount
    }
}
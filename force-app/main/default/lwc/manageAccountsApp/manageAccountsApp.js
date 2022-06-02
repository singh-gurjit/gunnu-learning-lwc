import { LightningElement, wire, track } from 'lwc';
import getAccountList from '@salesforce/apex/ManageAccountsController.getAccountList'

export default class ManageAccountsApp extends LightningElement {

    showManageAccountsNotificationModal
    showManageAccountsNewAccount
    @track accountsArray = []

    @wire(getAccountList)
    handleAccountList(result) {

        if (result.data) {
            this.accountsArray = JSON.parse(JSON.stringify(result.data))
        } else if (result.error) {
            console.error('There is an error', result.error)
        }
    }
}
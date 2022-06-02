import { LightningElement, wire, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountsController.getAccountList'

export default class AccountList extends LightningElement {

    @track accountsArray = []
    @track contactsArray = []
    showContactListModal

    @wire(getAccountList)
    handleAccountList(result) {

        if (result.data) {
            // console.log('gurjit data', JSON.stringify(result.data))
            this.accountsArray = result.data // this data is read only and cannot be modified.
        } else if (result.error) {
            console.error('There is an error', result.error)
        }
    }

    handleShowHideContactList(event) {

        const accountId = event.target.dataset.id
        //this.showContactListModal = this.showContactListModal ? false : true

        //above and below if else condition does the same job
        if (this.showContactListModal) {
            this.showContactListModal = false
        } else {
            this.showContactListModal = true
            this.populateContactsArray(accountId)
        }
    }

    populateContactsArray(accountId) {
        /*   for (const accont of this.accountsArray) {
              if (accountId == accont.Id) {
                  this.contactsArray = accont.Contacts
                  break;
              }
          } */

        // above and below code does the same job

        this.contactsArray = this.accountsArray.find((account) => account.Id == accountId).Contacts
    }
}
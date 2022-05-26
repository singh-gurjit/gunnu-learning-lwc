import { LightningElement, wire, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountsController.getAccountList'
import getContactList from '@salesforce/apex/AccountsController.getContactList'

var accountIdTemp

export default class AccountList extends LightningElement {


    // constructor() {
    //     //this will execute first even before component inserted to the dom.
    // }

    @track accountsArray = []
    @track contactsArray = []
    accountId
    showContactListModal
    showSpinner = true

    async connectedCallback() {
        //execute this line
        /*         getAccountList()
                    .then(result => {
                        this.accountsArray = result
                        console.log('gurjit result is ', JSON.stringify(result))
                    }).catch(error => console.error('There is an error', error))
                console.log('gurjit line 22', JSON.stringify(this.accountsArray)) */

        this.accountsArray = await getAccountList()
        console.log('gurjit is ', JSON.stringify(this.accountsArray))
    }

    @wire(getAccountList)
    handleAccountList(result) {

        if (result.data) {

            // console.log('gurjit data', JSON.stringify(result.data))
            this.accountsArray = result.data // this data is read only and cannot be modified.
            this.showSpinner = false
        } else if (result.error) {
            console.error('There is an error', result.error)
        }
    }

    @wire(getContactList, { accountId: '$accountId' })
    getContactListHandler(result) {

        const { data, error } = result
        if (data) {
            this.contactsArray = data
            this.showSpinner = false
            this.showContactListModal = true
        } else if (error) {
            console.error('There is an error', error)
        }
    }

    handleShowHideContactList(event) {

        //this.showContactListModal = this.showContactListModal ? false : true

        //above and below if else condition does the same job
        if (this.showContactListModal) {
            this.showContactListModal = false
        } else {
            accountIdTemp = event.target.dataset.id
            if (accountIdTemp != this.accountId) {
                this.showSpinner = true
            } else {
                this.showContactListModal = true
            }
            this.accountId = accountIdTemp
            // this.contactsArray = await getContactList({ accountId })
            // this.showContactListModal = true
            // this.showSpinner = false

            /*  getContactList({ accountId })
                 .then(() => {
                     // this will execute once the promise is resolved!
                 })
             this.showContactListModal = true
             this.showSpinner = false */
            //all the lines from here will not wait for the promise to resolve


            //this.populateContactsArray(accountId)
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
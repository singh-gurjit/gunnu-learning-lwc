import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ManageAccountsNewAccount extends LightningElement {

    objectApiName = ACCOUNT_OBJECT
    fields = { NAME_FIELD, TYPE_FIELD };
    showSpinner

    handleSuccess() {
        this.showSpinner = false
        this.showToast('Success', 'Record Created Successfuly', 'success')
        this.handleCancel()
    }

    handleSubmit() {
        this.showSpinner = true
    }

    handleCancel() {
        const event = new CustomEvent('close')
        this.dispatchEvent(event)
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title,
            message,
            variant
        });
        this.dispatchEvent(event);
    }
}
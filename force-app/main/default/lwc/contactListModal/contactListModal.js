import { LightningElement, api } from 'lwc';

export default class ContactListModal extends LightningElement {

    @api contactsArray = []

    connectedCallback() {
        //contactsArray would be availabel here.
        // but whenever any change occuers in contactsArray that won't be availabel here.
    }

    handleClose() {
        const event = new CustomEvent('close')
        this.dispatchEvent(event)
    }
}
import { LightningElement, api } from 'lwc';

export default class ContactListModal extends LightningElement {

    @api contactsArray = []

    handleClose() {
        const event = new CustomEvent('close')
        this.dispatchEvent(event)
    }
}
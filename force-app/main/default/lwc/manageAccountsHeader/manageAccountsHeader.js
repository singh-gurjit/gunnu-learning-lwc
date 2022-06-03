import { LightningElement } from 'lwc';

export default class ManageAccountsHeader extends LightningElement {

    handleSearchChange(event) {
        this.dispatchEvent(new CustomEvent('searchchange', {
            detail: event.target.value
        }))
    }
}
import { LightningElement, api } from 'lwc';

export default class ManageAccountsHeader extends LightningElement {

    @api totalRecords

    handleSearchChange(event) {
        this.dispatchEvent(new CustomEvent('searchchange', {
            detail: event.target.value
        }))
    }

    handleNewAccountModal() {
        this.dispatchEvent(new CustomEvent('showaccountmodal'))
    }
}
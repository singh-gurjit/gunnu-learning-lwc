import { LightningElement, api, track } from 'lwc';

var numberOfRecordToDiplay = 5

export default class ManageAccountDatatable extends LightningElement {

    totalPages
    currentPage
    @track _accountsArray
    @api get accountsArray() {
        return this._accountsArray
    }
    set accountsArray(value) {
        this._accountsArray = JSON.parse(JSON.stringify(value))
        this.accountsArrayToDisplay = this._accountsArray.slice(0, numberOfRecordToDiplay)
        this.totalPages = Math.ceil(this._accountsArray.length / numberOfRecordToDiplay)
        this.currentPage = 1
    }
    @track accountsArrayToDisplay
    showManageAccountsDatatable


    get disablePreviousButton() {
        return this.currentPage == 1
    }

    get disableNextButton() {
        return this.currentPage == this.totalPages
    }


    handleFirstPage() {
        this.currentPage = 1
        this.accountsArrayToDisplay = this.accountsArray.slice(0, numberOfRecordToDiplay)
    }

    handlePreviousPage() {
        --this.currentPage
        this.accountsArrayToDisplay = this.accountsArray.slice((numberOfRecordToDiplay * this.currentPage - numberOfRecordToDiplay), numberOfRecordToDiplay * this.currentPage)
    }

    handleNextPage() {
        this.accountsArrayToDisplay = this.accountsArray.slice(numberOfRecordToDiplay * this.currentPage, (numberOfRecordToDiplay * this.currentPage + numberOfRecordToDiplay))
        //this.currentPage = this.currentPage + 1
        ++this.currentPage
    }

    handleLastPage() {
        this.currentPage = this.totalPages
        let startPoint = this.accountsArray.length % numberOfRecordToDiplay || numberOfRecordToDiplay
        startPoint = this.accountsArray.length - startPoint - 1
        const endPoint = this.accountsArray.length - 1
        this.accountsArrayToDisplay = this.accountsArray.slice(startPoint, endPoint)
    }
}





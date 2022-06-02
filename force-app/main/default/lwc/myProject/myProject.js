import { LightningElement, wire, track } from 'lwc';
import getAccList from '@salesforce/apex/accountController2.getAccList';
const columns = [
    { label: 'Account', fieldName: 'Name', type: 'text' },
    { label: 'ID', fieldName: 'ID', type: 'text'},
];
export default class MyProject extends LightningElement {
    @track accArray = []
    @wire(getAccList)
    column = columns
    handleAccList(result){
        //console.log('karan',JSON.stringify(result))
        if(result.data){
            this.accArray = result.data
        }
     else if(result.error) {
       console.error('There is an error', result.error)
    }
}

}
import { LightningElement, api, track } from 'lwc';

export default class MyHeader extends LightningElement {

    @api appName = 'Gurjits'

    myName = 'gurjit Singh'

    @track myNonPrimitiveDataType  = {
        name: 'gunni',
        age: 32,
        sex: 'male'
    }

    handleMyButton() {
        this.myNonPrimitiveDataType.name = 'gurjit singh'
        alert('my button clicked')
    }

}
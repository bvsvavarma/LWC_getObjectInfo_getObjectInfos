import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class GetObjectInfoLwc extends LightningElement {
    accountInfo;
    errors;
    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
        accountInfoFunction({data, error}){
            if(data){
                console.log("Account Info Data", data);
                this.accountInfo = data;
                this.errors = null;
            }else if(error){
                console.log("error", error);
                this.errors = error;
                this.accountInfo = null;
            }
        }
}
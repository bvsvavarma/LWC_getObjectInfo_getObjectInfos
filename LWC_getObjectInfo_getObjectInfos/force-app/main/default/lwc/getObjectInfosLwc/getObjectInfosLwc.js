import { LightningElement, wire } from 'lwc';
import { getObjectInfos } from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
export default class GetObjectInfosLwc extends LightningElement {
    objectInfos;
    errors;
    @wire(getObjectInfos, 
        { objectApiNames: [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT] })
        objectInfosFunction({data, error}){
            if(data){
                console.log("Object Infos Data", data);
                this.objectInfos = data;
                this.errors = null;
            } else if(error){
                console.log("error", error);
                this.errors = error;
                this.objectInfos= null;
            }
        }
}
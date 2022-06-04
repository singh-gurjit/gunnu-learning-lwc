public with sharing class ManageAccountsController {
    
    @auraEnabled(cacheable = true) 
    public static Account[] getAccountList() {
        return [SELECT Id, Name, phone FROM Account];
    }
}
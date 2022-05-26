public with sharing class AccountsController {

   @auraEnabled(cacheable = true) 
   public static Account[] getAccountList() {
       return [SELECT Id, Name, phone FROM Account];
   }

   @AuraEnabled(cacheable = true)
   public static Contact[] getContactList(Id accountId) {
       return [SELECT id, Name FROM contact WHERE AccountID =: accountId];
   }
}

public with sharing class AccountsController {

   @auraEnabled(cacheable = true) 
   public static Account[] getAccountList() {
       return [SELECT Id, Name FROM Account];
   }
}

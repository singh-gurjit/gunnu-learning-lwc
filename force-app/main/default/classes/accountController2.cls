public with sharing class accountController2 {
    @AuraEnabled(Cacheable = true)
        public static Account[] getAccList(){
        return [SELECT Id, Name FROM Account];

    }
}
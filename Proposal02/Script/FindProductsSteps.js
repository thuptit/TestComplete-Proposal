const home = require('HomeSmartStorePage')
const mobilePhone = require("MobilePhoneSmartStorePage")

const homePage = home.createPage()
const mobilePhonePage = mobilePhone.createPage()

Given("I navigate to home page of Smart Store website", function (){
  homePage.navigateToPage();
});

When("I click {arg} category", function (param1){
  homePage.clickMobilePhoneArticle(param1);
});

Then("I see {arg} products in page category", function (param1){
  mobilePhonePage.hasLength(param1);  
});

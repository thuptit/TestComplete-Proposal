const base = require("BasePage")
function createPage(){
  return new MobilePhoneSmartStorePage()
}
class MobilePhoneSmartStorePage extends base.BasePage {
  constructor(){
    super('https://smartbearstore.smartbear.com/samples/TestComplete14/smartstore/apple*')
  }
  
  //actions
  hasLength(nums){
    this.wait();
    aqObject.CompareProperty(this.gridItems.length, cmpEqual, nums);
  }
  
  //properties
  get gridItems(){
    return this.page.FindElements("//div[@class='product-list-container']//div[2]//article")
  }
}
module.exports = {
  createPage,
  MobilePhoneSmartStorePage
}
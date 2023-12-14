const base = require("BasePage")

function createPage(){
  return new SearchResultSmartStorePage();
}

class SearchResultSmartStorePage extends base.BasePage{
  constructor(){
    super('https://smartbearstore.smartbear.com/samples/TestComplete14/smartstore/search*')
  }
  hasItem(nameItem){
    aqObject.CheckProperty(this.itemName, "contentText", cmpEqual, nameItem);
    this.closeBrowser();
  }
  get itemName(){
    return this.page.FindElement("//span[.='Phone Minus']"); 
  }
}

module.exports = {
  createPage,
  SearchResultSmartStorePage
}
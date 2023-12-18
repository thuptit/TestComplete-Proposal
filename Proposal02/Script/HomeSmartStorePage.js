const base = require('BasePage')
function createPage(){
  return new HomeSmartStorePage();
}
class HomeSmartStorePage extends base.BasePage {
  constructor(){
    super('https://smartbearstore.smartbear.com/samples/TestComplete14/smartstore/')
  }
  searchItem(searchText){
    this.textboxInstaSearch.SetText("Phone");
    this.buttonSearch.ClickButton();
  }
  get textboxInstaSearch(){
    return this.page.FindElement('#instasearch')
  }
  get buttonSearch(){
    return this.page.FindElement("//button[@title='Search']")
  }
}

module.exports = {
  createPage,
  HomeSmartStorePage
}
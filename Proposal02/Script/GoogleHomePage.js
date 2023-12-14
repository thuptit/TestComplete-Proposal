﻿const pageBase = require('BasePage')
function createPage(){
  return new GoogleHomePage();
}
class GoogleHomePage extends pageBase.BasePage {
  constructor(){
    super()
  }
  //actions
  fillSearch(searchText){
    this.screetshot(this.page);
    this.pannel.Click();
    this.formSearch.Click();
    this.formSearch.Keys(searchText + "[Enter]");
    this.wait();
  }
  
  //properties
  get formSearch(){
    return this.page.FindElement("//textarea[@title='Tìm kiếm']");
  }
  get pannel() {
    return this.page.FindElement("//div[contains(@class, 'SDkEP')]");
  }
}

module.exports = {
  createPage,
  GoogleHomePage
}
﻿const pageBase = require('BasePage')
function createPage(){
  return new GoogleHomePage();
}
class GoogleHomePage extends pageBase.BasePage {
  constructor(){
    super("https://www.google.com.vn/")
  }
  //actions
  fillSearch(searchText){
    this.pannel.Click();
    this.formSearch.Click();
    this.formSearch.Keys(searchText + "[Enter]");
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
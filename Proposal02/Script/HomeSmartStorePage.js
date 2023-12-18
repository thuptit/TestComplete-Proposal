﻿const base = require('BasePage')
function createPage(){
  return new HomeSmartStorePage();
}
class HomeSmartStorePage extends base.BasePage {
  constructor(){
    super('https://smartbearstore.smartbear.com/samples/TestComplete14/smartstore')
    this.articleName = ''
  }
  
  //actions
  searchItem(searchText){
    this.textboxInstaSearch.SetText("Phone");
    this.buttonSearch.ClickButton();
  }
  clickMobilePhoneArticle(name){
    this.articleName = name;
    this.article.textNote.Click();
  }
  
  //properties
  get textboxInstaSearch(){
    return this.page.FindElement('#instasearch')
  }
  get buttonSearch(){
    return this.page.FindElement("//button[@title='Search']")
  }
  get article(){
    const element = this.page.FindElement(`//article[contains(., '${this.articleName}')]`);
    const textNote = element.FindElement("//div[@id='content-center']//article//a/span")
    return {
      element,
      textNote
    };
  }
}

module.exports = {
  createPage,
  HomeSmartStorePage
}
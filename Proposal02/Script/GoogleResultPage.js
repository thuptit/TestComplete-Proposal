const pageBase = require('BasePage')
function createPage(){
  return new GoogleResultPage();
}
class GoogleResultPage extends pageBase.BasePage{
  constructor(){
    super('https://www.google.com.vn/search*')
  }
  
  //actions
  isValidResult(expectedResult){ 
    this.wait()
    aqObject.CheckProperty(this.resultSearch, "contentText", cmpContains, expectedResult);
  }
  
  //properties
  get resultSearch(){
    return this.page.FindElement("#result-stats");
  }
}
module.exports = {
  createPage,
  GoogleResultPage
}
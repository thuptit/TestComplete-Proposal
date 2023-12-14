class BasePage {
  //default url is match for current page active
  constructor(url = '*'){
    this.ide = btEdge;
    this.pageUrl = url;
  }
  
  //actions
  navigateTo(url){
    Browsers.Item(this.ide).Navigate(url);
    this.windowMaximize();
  }
  navigateToPage(){
    Browsers.Item(this.ide).Navigate(this.pageUrl);
  }
  windowMaximize(){
    Sys.Browser().BrowserWindow(0).Maximize();
  }
  windowMinimize(){
    Sys.Browser().BrowserWindow(0).Minimize();
  }
  closeBrowser(){
    Sys.Browser().Close();
  }
  wait(){
    this.page.Wait();
  }
  waitForElement(element, delayTime = 500){
    let count = 0;
    do
    {
      var obj = this.page.WaitElement(element, delayTime);
      count++;
    }
    while (!obj.Exists && count <= 10)
  }
  screetshot(e, fileName = ''){
    const capture = e.Picture();
    if(fileName === ''){
      fileName = 'unknownname_';
    }
    
    const currentDate = new Date();
    const timestamp = currentDate.toISOString().replace(/[-:.]/g, '');
    fileName += timestamp + '.png';
    const folder = createDirectoryIfExist();
    capture.SaveToFile(combinePath(folder,fileName));
    
    function combinePath(folder, fileName){
      return folder + "\\" + fileName;
    }
    function createDirectoryIfExist(){
      let relativePath = Project.Path + "\\" + "Screenshots";
      if (!aqFileSystem.Exists(relativePath))
          aqFileSystem.CreateFolder(relativePath);
      return relativePath;
    }
  }
  
  //properties
  get page(){
    return Sys.Browser().Page(this.pageUrl);
  }
}
module.exports.BasePage = BasePage

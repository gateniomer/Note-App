export default class Note{
  constructor(id,title,body){
    this.id=id;
    this.title=title;
    this.body=body;
    this.tags = [];
    this.options =  {
      pinTop: false,
      highlighted: false
    };
  }
  isPinnedTop(){
    if(this.options.hasOwnProperty('pinTop')){
      if(this.options.pinTop){
        return true;
      }
    }
    return false;
  }
  highlight(bool){
    this.options.highlighted=bool;
  }

}
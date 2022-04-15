export default class Observable{
  constructor(){
    this.observers = [];
  }

  subscribe(event,func){
    const observer = {
      event: event,
      func: func
    }
    this.observers.push(observer);
  }

  unsubscribe(event,func){
    this.observers.forEach((observer,index) => {
      if(observer.event === event && observer.func === func){
        this.observers.splice(index,1);
      }
    });
  }
  fire(event,data){
    this.observers.forEach(observer => {
      if(observer.event === event){
        (data!==null) ? observer.func(data) : observer.func();
      }
    });
  }
}
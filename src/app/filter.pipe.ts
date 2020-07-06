import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name:'filter',
  pure:false // impure pipe
})

export class FilterPipe implements PipeTransform {

  transform(value:any,filterString:string,propName:string) {

    if(value.length === 0 || filterString === '') {

      return value;

    }
  const filterArr = [];
    for (const item of value ) {

      if(item[propName] === filterString)
        filterArr.push(item)
    }
    return filterArr;
  }
}

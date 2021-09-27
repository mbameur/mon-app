import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'replaceComma'})

export class ReplaceComma implements PipeTransform{

  transform(value: any):string{
    if(!!value){
      return value.toString().replace(/,/g, '.');
    }else{
      return '';
    }
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class DataSearchPipe implements PipeTransform {

  transform(value: any[],searchText:any,property:string): any[] {

    if(searchText )
    {

               return value.filter((it:any)=>{return it["distributorId"].includes(searchText) || it["deliveryStatus"].includes(searchText) });
               //return value.filter((it:any)=>{return it[category].includes(searchText) });
    }
    else
        return value;

}

}

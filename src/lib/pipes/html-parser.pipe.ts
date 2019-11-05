import { Pipe, PipeTransform } from '@angular/core';
import { HtmlParserService } from '../html-parser.service';

@Pipe({
  name: 'htmlParser'
})
export class HtmlParserPipe implements PipeTransform {

  transform(value: string): string {
    return HtmlParserService.parse(value);
  }

}

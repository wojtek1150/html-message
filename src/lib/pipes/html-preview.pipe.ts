import { Pipe, PipeTransform } from '@angular/core';
import { REG_OUTLOCK } from '../html-parser.service';

@Pipe({
  name: 'htmlPreview'
})
export class HtmlPreviewPipe implements PipeTransform {

  transform(value: string, length: number): string {
    return value
      .replace(REG_OUTLOCK, '')
      .replace(/<[^>]*>?/gm, '')
      .replace('&nbsp;', ' ')
      .substr(0, length === -1 ? Infinity : length);
  }

}

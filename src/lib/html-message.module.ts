import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlMessageComponent } from './components/html-message.component';
import { HtmlPreviewMessageComponent } from './components/html-preview-message.component';

import { HtmlParserPipe } from './pipes/html-parser.pipe';
import { HtmlPreviewPipe } from './pipes/html-preview.pipe';
import { SafeHtmlPipe } from './pipes/save-html.pipe';

@NgModule({
  declarations: [
    HtmlMessageComponent,
    HtmlPreviewMessageComponent,
    HtmlParserPipe,
    HtmlPreviewPipe,
    SafeHtmlPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [HtmlMessageComponent, HtmlPreviewMessageComponent]
})
export class HtmlMessageModule {}

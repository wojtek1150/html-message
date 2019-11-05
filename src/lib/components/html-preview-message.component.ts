import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lib-html-message-preview',
  template: `
    <p>{{message | htmlPreview:length}}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HtmlPreviewMessageComponent {
  @Input() message: string;
  @Input() length = 100;
}

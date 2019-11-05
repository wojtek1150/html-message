import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-html-message',
  template: `
    <div class="message" [innerHtml]="message | htmlParser | safeHtml"></div>
  `,
  styleUrls: ['./html-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class HtmlMessageComponent {
  @Input() message: string;
}

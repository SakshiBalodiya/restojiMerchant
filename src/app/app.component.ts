import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private translate: TranslateService,) {
    this.translate.setDefaultLang('en');
  }
}

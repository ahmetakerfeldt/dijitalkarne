import {NgModule} from '@angular/core';
import {DefaultLayoutComponent} from './default-layout.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SharedModule} from "@shared/shared.module";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    DefaultLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LayoutModule {
}

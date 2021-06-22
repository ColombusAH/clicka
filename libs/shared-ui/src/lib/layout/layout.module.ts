import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SidebarItemDirective } from './directives/sidebar-link.directive';
import { LanguageDirectionService } from './services/language-direction.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LayoutComponent,
    SidebarItemDirective,
  ],
  imports: [CommonModule, RouterModule],
  providers: [LanguageDirectionService],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LayoutComponent,
    SidebarItemDirective,
  ],
})
export class LayoutModule {}

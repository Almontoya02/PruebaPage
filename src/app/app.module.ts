import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterCComponent } from './components/footer-c/footer-c.component';
import { OptionsComponent } from './components/options/options.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MainImageComponent } from './components/main-image/main-image.component';
import { CarouseliComponent } from './components/carouseli/carouseli.component';
import { CardCarouselComponent } from './components/card-carousel/card-carousel.component';
import { CardColectionComponent } from './components/card-colection/card-colection.component';
import { TabcolectionComponent } from './components/tabcolection/tabcolection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterCComponent,
    OptionsComponent,
    MainPageComponent,
    MainImageComponent,
    CarouseliComponent,
    CardCarouselComponent,
    CardColectionComponent,
    TabcolectionComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

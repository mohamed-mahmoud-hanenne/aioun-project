import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HistoireComponent } from './components/histoire/histoire.component';
import { CultureComponent } from './components/culture/culture.component';
import { PolitiqueComponent } from './components/politique/politique.component';
import { AboutComponent } from './components/about/about.component';
import { SportComponent } from './components/sport/sport.component';
import { ContactComponent } from './components/contact/contact.component';
import { TourismeComponent } from './components/tourisme/tourisme.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'histoire',component:HistoireComponent},
    {path:'culture', component:CultureComponent},
    {path:'tourisme', component:TourismeComponent},
    {path:'politique', component:PolitiqueComponent},
    {path:'sport', component:SportComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    { path: '**', redirectTo: '' }

];

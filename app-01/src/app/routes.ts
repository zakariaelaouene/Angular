import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About page',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact page',
  },
];

export { routeConfig };

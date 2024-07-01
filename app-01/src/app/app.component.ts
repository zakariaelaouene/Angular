import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `<nav style="display: flex; justify-content: center; gap: 1rem">
      <a routerLink="/home" class="text-primary">Home</a>
      <a routerLink="/about" class="text-primary">About</a>
      <a routerLink="/contact" class="text-primary">Contact</a>
    </nav>
    <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'hello world';
  updateTitle() {
    this.title = 'hello Angular';
  }
}

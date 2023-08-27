import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home.component'

@Component({
  standalone: true,
  imports: [HomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jacobshandmadeguitars'
}

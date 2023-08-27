import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { TrackByPropertyDirective } from './trackBy.directive'

@Component({
  selector: 'app-link-buttons',
  standalone: true,
  imports: [CommonModule, TrackByPropertyDirective],
  template: `
    <section class="links">
      <ul>
        <li class="shake" *ngFor="let link of links; trackByProperty: 'url'">
          <a [href]="link.url" target="_blank" rel="noopener" class="link">
            <i [class]="link.icon"></i> {{ link.text }}
          </a>
        </li>
      </ul>
    </section>
  `,
  styleUrls: ['./link-button.component.css'],
})
export class LinkButtonComponent {
  links = [
    {
      url: 'mailto:georgejacobs33@gmail.com',
      icon: 'far fa-file',
      text: 'Custom Guitar Build Inquiry',
    },
    {
      url: 'https://www.youtube.com/channel/UCWGpm8uEFC2qqG54TEq-gPw',
      icon: 'fab fa-youtube',
      text: 'Guitar Build Demos',
    },
    {
      url: 'https://www.ebay.com/str/jacobsguitars305',
      icon: 'fa-solid fa-shop"',
      text: 'Ebay Store',
    },
    {
      url: 'https://open.spotify.com/artist/0jpb664GxtP1tjmWz39U3G?si=1SMqB09tRp6Ou-Elmi7vvg',
      icon: 'fab fa-spotify',
      text: 'Listen on Spotify',
    },
    {
      url: 'https://www.youtube.com/c/GeorgeJacobs',
      icon: 'fab fa-youtube',
      text: 'Subscribe on Youtube',
    },
    {
      url: 'https://www.instagram.com/georgejacobsig/',
      icon: 'fab fa-instagram',
      text: 'Instagram',
    },
    {
      url: 'https://twitter.com/GeorgeJacobsMM',
      icon: 'fab fa-twitter',
      text: 'Twitter',
    },
    {
      url: 'https://www.facebook.com/georgeguitars7/',
      icon: 'fab fa-facebook',
      text: 'Facebook',
    },
    {
      url: 'mailto:georgejacobs33@gmail.com',
      icon: 'far fa-envelope',
      text: 'Email Me',
    },
  ]
}

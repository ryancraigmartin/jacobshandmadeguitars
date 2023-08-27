import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Component, ViewEncapsulation } from '@angular/core'
import { LinkButtonComponent } from './link-button.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, LinkButtonComponent],
  template: `<div class="flex flex-col items-center justify-center min-h-screen p-4">
    <div class="wrap">
      <div class="profile">
        <img
          class="photo shake"
          ngSrc="../assets/profile.webp"
          height="250"
          width="250"
          alt="Profile photo of George Jacobs"
        />
        <h1 class="profile_name">Jacobs Handmade Guitars</h1>
        <h2 class="at">by Miami-based Luthier and Musician George Jacobs</h2>
        <div class="card">
          <p class="card-text">Interested in a custom build?</p>
          <p class="card-text">Shoot me an email! ✉️</p>
          <p class="card-text">
            <a href="mailto:george@jacobshandmadeguitars.com">georgejacobs33@gmail.com</a>
          </p>
        </div>
      </div>

      <app-link-buttons />

      <div class="about-section">
        <details>
          <summary>About Miami Luthier George Jacobs</summary>
          <p>
            Greetings! I'm George Jacobs, a skilled guitar craftsman based in sunny Miami, Florida.
            With a passion for playing and an unrelenting pursuit of the perfect tone, I pour my
            heart and expertise into crafting exceptional guitars that far surpass those you'd find
            at generic stores. The best part? My premium guitars come at a fraction of the cost
            you'd expect elsewhere.
          </p>
          <p>
            At the core of my music and craftsmanship is a dedication to my Lord and Savior, Jesus
            Christ, the source of inspiration behind every creation. My devotion to the living and
            True God drives the artistry and soulfulness that resonate through my guitars.
          </p>
          <p>
            Beyond guitars, I recognize the emptiness that often accompanies material pursuits. Many
            try to fill the void with substances, pleasure, or wealth, only to find it persistently
            hollow. Having walked that path, I can empathize. However, my journey took a turn.
            Stripped of the superficial, I found restoration through Christ's mercy. I'm not here to
            preach but to share a story of transformation – a story woven into every guitar I
            create. Your search for superior craftsmanship ends here. Browse with confidence – thank
            you for considering my work.
          </p>
          <h4>
            <a href="mailto:georgejacobs33@gmail.com">
              <i class="far fa-envelope"></i> <em> Email me today!</em></a
            >
            Custom builds and financing available! Don't hesitate to reach out to begin crafting
            your dream guitar.
          </h4>
        </details>
      </div>

      <footer>
        <div style="text-align: center; padding-top: 10px;">&copy; 2023 Jacobs Handmade Guitars.</div>
        <div style="text-align: center; ">All rights reserved.</div>
      </footer>
    </div>
  </div>`,
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {}

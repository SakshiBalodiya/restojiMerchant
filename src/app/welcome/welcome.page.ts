import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { register } from 'swiper/element/bundle'; // Register Swiper elements

register(); // Register the Swiper elements

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  @ViewChild('swiper', { static: false }) swiperEl!: ElementRef; // Reference to the Swiper element

  constructor() {}

  ngOnInit() {}

  nextSlide() {
    const swiperInstance = this.swiperEl.nativeElement.swiper; // Access Swiper instance from the element
    swiperInstance.slideNext(); // Navigate to the next slide programmatically
  }
}

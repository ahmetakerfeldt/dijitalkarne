import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[scrollAnimate]'
})
export class ScrollAnimateDirective implements AfterViewInit {

  @Input('scrollAnimate') animationClass!: string;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('animate__animated', this.animationClass);
          observer.unobserve(this.el.nativeElement);
        }
      });
    }, {threshold: 0.1});
    observer.observe(this.el.nativeElement);
  }
}

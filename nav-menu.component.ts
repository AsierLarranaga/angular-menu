import { Component, OnInit, HostListener } from '@angular/core';
import { as_class_manager } from 'src/app/as_modules/as_class_manager';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.sass']
})

export class NavMenuComponent implements OnInit {

  navBox: HTMLElement;
  navUl: HTMLElement;
  navLi: HTMLCollection;
  as_scroll: as_class_manager;
  windowScrollY: number;

  navTopLine: HTMLElement;

  delayLi: number;
  delayBox: number;

  constructor() { }

  ngOnInit() {

    this.navBox = document.getElementById('main-nav-box');
    this.navUl = document.getElementById('main-nav-mobile');
    this.navLi = this.navUl.getElementsByTagName('li');
    this.as_scroll = new as_class_manager();
    this.windowScrollY = window.scrollY;

    this.navTopLine = document.getElementById('nav-top-line');

    this.delayLi = 100;
    this.delayBox = (this.delayLi * this.navLi.length) - this.delayLi;

    changeNavBox(this.navLi, this.delayLi, this.delayBox);
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent() {

    if (window.scrollY > this.windowScrollY && window.scrollY > 100) {

      this.as_scroll.as_toggleElementClass(this.navBox, 'nav-position', 'nav-top-position');
      this.as_scroll.as_toggleElementClass(this.navUl, 'ul-position', 'ul-top-position');

      if (this.navTopLine.classList.contains('change-top-line')) {

        this.as_scroll.as_toggleElementsClass(this.navLi, 'show-to-left', 'hide-to-right');
      }
      
    } else {

      this.as_scroll.as_toggleElementClass(this.navBox, 'nav-top-position', 'nav-position');
      this.as_scroll.as_toggleElementClass(this.navUl, 'ul-top-position', 'ul-position');

      if (this.navTopLine.classList.contains('change-top-line')) {

        this.as_scroll.as_toggleElementsClass(this.navLi, 'hide-to-right', 'show-to-left');
      }
    }
    this.windowScrollY = window.scrollY;
  }
}

function changeNavBox(navLi:HTMLCollection, delayLi:number, delayBox:number) {

  hideMobileNav(navLi);

  const mainNavBox = document.getElementById('main-nav-box');

  mainNavBox.addEventListener('click', function() {

      mobileBoxAnimation(delayBox);
      mobileNavAnimation(navLi, delayLi);
  });

  for (let i=0; i<navLi.length; i++) {

      navLi[i].addEventListener('click', function() {

          mobileBoxAnimation(delayBox);
          mobileNavAnimation(navLi, delayLi);
      });
  }
}

function hideMobileNav(navLi:HTMLCollection) {

  for (let i=0; i<navLi.length; i++) {
      navLi[i].classList.add('hide-to-right');
  }
}

function mobileBoxAnimation(delayBox:number) {

  const navTopLine = document.getElementById('nav-top-line');
  const navCenterLine = document.getElementById('nav-center-line');
  const navBottomLine = document.getElementById('nav-bottom-line');
  const mainNavMobile = document.getElementById('main-nav-mobile');
  let navElement = new as_class_manager();

  if (navTopLine.classList.contains('nav-top-line') && navCenterLine.classList.contains('nav-center-line') && navBottomLine.classList.contains('nav-bottom-line') && mainNavMobile.classList.contains('main-nav-mobile')) {

    setTimeout(function() {

      navElement.as_toggleElementClass(navTopLine, 'nav-top-line', 'change-top-line');
      navElement.as_toggleElementClass(navCenterLine, 'nav-center-line', 'change-center-line');
      navElement.as_toggleElementClass(navBottomLine, 'nav-bottom-line', 'change-bottom-line');

    }, delayBox);

  } else {

    setTimeout(function() {

      navElement.as_toggleElementClass(navTopLine, 'change-top-line', 'nav-top-line');
      navElement.as_toggleElementClass(navCenterLine, 'change-center-line', 'nav-center-line');
      navElement.as_toggleElementClass(navBottomLine, 'change-bottom-line', 'nav-bottom-line');

    }, delayBox);
  }
}

function mobileNavAnimation(navLi:HTMLCollection, delayLi:number) {

  for (let i=0; i<navLi.length; i++) {

      if (navLi[i].classList.contains('hide-to-right')) {

          showToLeft(navLi, delayLi);
      
      } else if (navLi[i].classList.contains('show-to-left')) {

          hideToRight(navLi, delayLi);
      }
  }
}

function hideToRight(elements:HTMLCollection, delayLi:number) {

  for (let i=0; i<elements.length; i++) {

      setTimeout(function() {

          elements[i].classList.remove('show-to-left');
          elements[i].classList.add('hide-to-right');

      }, i*delayLi);
  }
}

function showToLeft(elements:HTMLCollection, delayLi:number) {

  for (let i=0; i<elements.length; i++) {

      setTimeout(function() {

          elements[i].classList.remove('hide-to-right');
          elements[i].classList.add('show-to-left');

      }, i*delayLi);
  }
}

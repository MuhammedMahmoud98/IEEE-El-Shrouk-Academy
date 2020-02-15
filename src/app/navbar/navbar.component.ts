import { Component, OnInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.sideBarToggler();
    this.shadowClose();
    this.closeIcon();
  }

  sideBarToggler()
  {
    $(".three-lines").click((e)=>
    {
      $(".side-bar-parent").animate({left:"0"},500,function()
      {
        $(".side-bar-child").animate({left:"0"},500);
      });
    });
  }

  shadowClose()
  {
    let parent = document.querySelector(".side-bar-parent");
    $(parent).click(function(e)
    {      
      
      if(e.target == parent)
      {
        $(".side-bar-child").animate({left:"-100%"},500,function()
        {
          $(".side-bar-parent").animate({left:"-100%"},200);
        });
      }
      
    });
  }

  closeIcon()
  {
    let parent = document.querySelector(".side-bar-parent");
    let child = document.querySelector(".side-bar-child");
    $(".close-icon").click(function()
    {    
      $(child).animate({left:"-100%"},500,function()
      {
        $(parent).animate({left:"-100%"},200);
      });
    });
  }

}

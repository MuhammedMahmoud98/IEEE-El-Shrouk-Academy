import { Component } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor()
  {
    $(document).ready(function()
    {
      $(".loading-page").fadeOut(2000);
    });
  }
  
  ngOnInit() {

    $(window).scroll(function()
    {
      if($(window).scrollTop() > 200)
      {
        $(".page-up").fadeIn(300);
      }
      else
      {
        $(".page-up").fadeOut(300);
      }
    });



    $(".page-up").click(function(){
      $("html,body").animate({scrollTop: 0},1000);
    });
    
  }
  toggler:boolean= false;

  toggleMe()
  {
    let parent = document.querySelector(".link-content");
    this.toggler = !this.toggler;
    if(this.toggler == true)
    {
        $(parent).animate({left:"0"},500);
    }
    else if(this.toggler == false)
    {
      $(parent).animate({left:"-100%"},500);
    }
  }

}

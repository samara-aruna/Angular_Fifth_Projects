import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent 
{
  public num1!:number;
  public num2!:number;
  public result!:number;

  Sum()
  {
    this.result = this.num1 + this.num2;
  }

  Sub()
  {
    this.result = this.num1-this.num2;
  }

  Mul()
  {
    this.result = this.num1+this.num2;
  }

  Div()
  {
    this.result=this.num1/this.num2;
  }

}

import { Component, Input } from '@angular/core';
import { iPost } from '../../../models/ipost';


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {

singlePostArray: iPost[]=[];

@Input() p!: iPost;

show:boolean=false


toggleForm(){this.show=!this.show} //metodo per cambiare il valore di show per renderlo invisibile


















}

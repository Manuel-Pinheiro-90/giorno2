import { Component } from '@angular/core';

import { iPost } from '../../models/ipost';
import { PostsService } from '../../service/posts.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  filter!:string;
articleArr:iPost[]=[]
firstPost!:iPost;
  randomPosts:iPost[] = [];
  alltags:string[]=[]

  constructor(private postsSvc: PostsService) {}

  ngOnInit(){



      let firstPost = this.postsSvc.getFirstPost() //esegue la funzione e recupara il primo

      if(firstPost){ //se firstst post c'è allora diventa il primo elemento dell'array
        this.firstPost = firstPost
      }

      this.randomPosts = this.postsSvc.getRandomPosts()


      this.articleArr = this.postsSvc.getAllposts();

  this.alltags=this.postsSvc.getUniqueTags()





    }


    filterByTag(event:any,tag:string){
      console.log(event);

      event.target.classList.add('activeFilter')
      this.filter= tag
      this.articleArr = this.postsSvc.getPostsByTag(tag)
    }









}



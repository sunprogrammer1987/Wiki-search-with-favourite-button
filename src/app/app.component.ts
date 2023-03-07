import { Component } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wiki';
  searchTerm: any;
  results: any = [];

  totalResults: any;
  page: number = 1;
  list:any[]=[];
  constructor(private wiki: WikiService) {}
  addFavourite(item:string,data:any){
    this.list.push({id:this.list.length,pageid:data.pageid,title:data.title})
  }
  removefavourite(id:number){
    this.list = this.list.filter(item =>item.id!== id);
  }
  onSubmit() {
    this.wiki.search(this.searchTerm).subscribe((res: any) => {
      this.results = res.query.search;

      this.totalResults = res.query.search.length;
      console.log(res);
    });
  }
}
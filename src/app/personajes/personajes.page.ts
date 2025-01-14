import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
  standalone: false,
})
export class PersonajesPage implements OnInit {

  characters=[{id:'',name:'',image:''}];
  constructor(private http:HttpClient) { }

  async ngOnInit() {
    this.http
    .get<any>("htpps://rickandmortyapi.com/api/character")
    .subscribe((res)=>{
      console.log(res)
      this.characters=res.results;
    })
  }

}

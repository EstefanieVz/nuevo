import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParameterCodec } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {
profileId:any;
character:any;
name:any;
status:any;
location:any;
origin:any;
type:any;
  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    this.profileId=this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('https://rickandmortyapi.com/api/character/'+this.profileId).subscribe(res=>
      this.character=res);
  }

}

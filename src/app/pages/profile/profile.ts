import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  name: string = 'Nicolas'
  mail: string = 'nicolassabogal85@gmail.com'
}

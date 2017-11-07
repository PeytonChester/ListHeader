import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class DataProvider {

  playlists: any = [
      //list one
    {
      playlistName: "Fire",
      songs: [
        {
          songTitle: "By Any Means",
          artist: "ScHoolboy Q",
          length: "3:34"
        },
        {
          songTitle: "For My People",
          artist: "Joey BadA$$",
          length: "3:53"
        },
        {
          songTitle: "Jump Off the Roof",
          artist: "Vince Staples",
          length: "3:44"
        },
        {
          songTitle: "The Helium Balloon",
          artist: "Wale",
          length: "4:48"
        },
        {
          songTitle: "No Role Modelz",
          artist: "J. Cole",
          length: "4:53"
        }
      ]
    },
      //list two
    {
      playlistName: "Feeling Good",
      songs: [
        {
          songTitle: "Soul Food",
          artist: "Big K.R.I.t.",
          length: "3:49"
        },
        {
          songTitle: "Summertime",
          artist: "Vince Staples",
          length: "4:19"
        },
        {
          songTitle: "Whiskey Eyes",
          artist: "French Montana",
          length: "4:44"
        },
        {
          songTitle: "The Stakeout",
          artist: "Russ",
          length: "2:51"
        },
        {
          songTitle: "Walk On Water",
          artist: "A$AP MOB",
          length: "3:56"
        }
      ]
    },
      //list three
    {
      playlistName: "Soul",
      songs: [
        {
          songTitle: "The Three of Me",
          artist: "William Bell",
          length: "3:24",
        },
        {
          songTitle: "All Your Stories",
          artist: "William Bell",
          length: "2:57",
        },
        {
          songTitle: "Changes",
          artist: "Charles Bradley",
          length: "5:43",
        },
        {
          songTitle: "Deliver Me",
          artist: "The Milk",
          length: "4:29",
        },
        {
          songTitle: "Shine",
          artist: "Leon Bridges",
          length: "3:39",
        }
      ]
    }
];

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

}

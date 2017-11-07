import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  homePlaylists:any;

  constructor(public navCtrl: NavController, public data:DataProvider) {

  }

  ionViewDidLoad() {
    //bring in the list and store it in the variable we declared called 'playlistHeaders'
    this.homePlaylists = this.data.playlists;
  }

  //voide because it doesn't return anything
  songClicked(playlistSong):void {
    this.navCtrl.push( 'DescriptionPage', playlistSong );
  }

}






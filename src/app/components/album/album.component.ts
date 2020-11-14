import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../Artist';
import { Album } from '../../Album';
import { SpotifyService } from '../../services/spotify.service';
import { Pipe } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album[];

  constructor(
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute) {

  }

  ngOnInit() {
    this._route.params
      .pipe(map(params => params['id']))
      .subscribe((id) => {
        this._spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          })
      });
  }
}
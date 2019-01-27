import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StreamerConstants } from '../../constants/streamer-constants';
import { environment } from '../../../environments/environment';
import { SteamGame } from 'src/app/models/steam/steam-game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SteamService {

  private BASE_ROUTE = 'steam/';

  /**
   * Create our service with http client
   * @param _http HttpClient to perform restful calls with
   */
  constructor(private _http: HttpClient) { }

  /**
   * Get the steam user library
   */
  public getLibrary(): Observable<SteamGame> {
    return this._http.get<SteamGame>(
      environment.twitchWebIntegratorUrl + this.BASE_ROUTE + 'library/' + StreamerConstants.CHANNEL_NAME
      );
  }
  /**
   * Get the steam users library amount
   */
  public getLibraryAmount(): Observable<SteamGame> {
    return this._http.get<SteamGame>(
      environment.twitchWebIntegratorUrl + this.BASE_ROUTE + 'library/' + StreamerConstants.CHANNEL_NAME + '/amount'
      );
  }
}

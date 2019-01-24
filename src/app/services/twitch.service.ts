import { Injectable } from '@angular/core';
import { TwitchUser } from '../models/twitch-user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TwitchFollower } from '../models/twitch-follower';
import { StreamerConstants } from '../constants/streamer-constants';
import { environment } from '../../environments/environment';

/**
 * Twitch service to interact with twitch data
 */
@Injectable({
  providedIn: 'root'
})
export class TwitchService {

  /**
   * Create our service with http client
   * @param _http HttpClient to perform restful calls with
   */
  constructor(private _http: HttpClient) { }

  /**
   * Get the twitch user
   */
  public getUser(): Observable<TwitchUser> {
    return this._http.get<TwitchUser>(
      environment.twitchWebIntegratorUrl + 'user?channelName=' + StreamerConstants.CHANNEL_NAME
      );
  }

  /**
   * Get the twitch followers
   */
  public getRecentFollowers(): Observable<TwitchFollower[]> {
    return this._http.get<TwitchFollower[]>(
      environment.twitchWebIntegratorUrl + 'recent/followers?channelName=' + StreamerConstants.CHANNEL_NAME
      );
  }

  /**
   * Get the twitch follower total
   */
  public getTotalFollowers(): Observable<number> {
    return this._http.get<number>(
      environment.twitchWebIntegratorUrl + 'total/followers?channelName=' + StreamerConstants.CHANNEL_NAME
    );
  }
}

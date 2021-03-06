import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(
    private http: HttpClient
  ) { }

  public getAll() {
    return this.http.get(environment.api.url + 'channel/');
  }

  public get(channelId: string) {
    return this.http.get(environment.api.url + `channel/${channelId}`);
  }
}

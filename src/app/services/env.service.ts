import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'https://gamescritic.000webhostapp.com/';

  constructor() { }
}

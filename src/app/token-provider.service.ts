import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenProviderService {

  constructor() { }

  load(){
    // Código que checa la token de acceso
    console.log("TokenProviderService class load method called");
  }
}

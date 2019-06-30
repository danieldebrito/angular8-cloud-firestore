import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private authService: AngularFireAuth) { }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.authService.auth.signInWithEmailAndPassword(email, password)
      .then(datos => resolve(datos),
      error => reject(error)
      );
    });
  }

  getAuth() {
    return this.authService.authState.pipe(
      map( auth => auth)
    );
  }

  registrarse(email: string, password: string){
    return new Promise((resolve, reject) => {
        this.authService.auth.createUserWithEmailAndPassword(email, password)
         .then(datos => resolve(datos),
         error => reject(error));
    });
}

  logout() {
    this.authService.auth.signOut();
  }
}

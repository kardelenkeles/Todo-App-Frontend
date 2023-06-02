import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() {
  }

  auth(username: string, password: string) {
    if (username === 'keles' && password === 'keles') {
      sessionStorage.setItem('authenticateUser',username);
      return true;
    }
    return false;
  }


  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser')
    return !(user ===  null)
  }

  logout(){
    sessionStorage.removeItem('authenticateUser')
  }
}

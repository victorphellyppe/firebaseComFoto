import { User } from './../interfaces/user';
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: Auth) { }

  async register(usr: User) {
    try{
    const user = await createUserWithEmailAndPassword(this.auth, usr.email, usr.password);
    return user;
    } catch(e) {
      return null;
    }
  }
  async login({email, password}) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email,password);
      return user;
    } catch (e) {
      return null;
    }
  }
  logout() {
    return signOut(this.auth);
  }
}

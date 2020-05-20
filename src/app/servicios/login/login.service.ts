import { Injectable, NgZone, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/app/interfaces/usuario/usuario';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiServer = "http://localhost:5000/my-project-1470522162116/us-central1/app";

  userData: any; // Save logged in user data
  isLoggedIn$ = new EventEmitter<boolean>();

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when 
  logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
        localStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/']);
        this.isLoggedIn$.emit(true);
      } else {
        localStorage.removeItem('isLoggedIn');
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
        this.isLoggedIn$.emit(false);
      }
    });

  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log("todo ok: ");
        console.log(result);
        // this.ngZone.run(() => {
        //   this.router.navigate(['/']);
        // });
        this.SetUserData(result.user);
      }).catch((error) => {
        // window.alert(error.message)
        console.log("error: ");
        console.log(error);
      })
  }

  // Sign up with email/password
  SignUp(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign 
        up and returns promise */
        // this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        // window.alert(error.message)
        console.log(error.message);

      })
  }

  // Send email verfificaiton when new user sign up
  // Email verification when new user register
  SendVerificationMail() {
    return this.afAuth.currentUser.then(u => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email']);
      })
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: any = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    // console.log(userData);

    return userRef.set(userData, {
      merge: true
    })
  }

  // Sign out 
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('isLoggedIn');
      this.router.navigate(['login']);
    })
  }


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  loginEmailAndPassword(usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.apiServer + '/login/emaialandpassword', JSON.stringify(usuario), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  cerrarSesion() {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/login']);
  }


  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}

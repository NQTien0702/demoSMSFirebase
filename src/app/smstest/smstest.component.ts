import { Component } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-smstest',
  templateUrl: './smstest.component.html',
  styleUrl: './smstest.component.scss'
})
export class SmstestComponent {
  numberPhone: any;
  //hello
  constructor(private afAuth: AngularFireAuth) {}

  async sendVerificationCode() {
    try {
      const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        size: 'invisible'
      });

      const confirmationResult = await this.afAuth.signInWithPhoneNumber("+84377299071", appVerifier);
      console.log("Mã xác minh đã được gửi", confirmationResult.verificationId);
    } catch (error) {
      console.error("Lỗi khi gửi mã xác minh:", error);
    }
  }
}

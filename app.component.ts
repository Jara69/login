import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-example';
  private password = '';
  private name = '';
  private printCorrect = '';
  private printIncorrect = '';
  private logged = false;
  clickLogin() {
    if ( this.name === 'Jaroslav' && this.password === '123') {

      this.logged = true;
      this.printCorrect = 'Přihlášení proběhlo úspěšně!';
    } else {
      this.logged = false;
      this.printIncorrect = 'Nesprávné heslo nebo přihlašovací jméno!';
    }
  }

}

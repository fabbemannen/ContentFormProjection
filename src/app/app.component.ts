import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from './dialogs/user-dialog/User';
import { UserDialogComponent } from './dialogs/user-dialog/user-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) { }

  title = 'Content Form Projection';
  userData = new User();

  openUserDialog() {
    if (this.userData == undefined) {
      this.userData;
    }
    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: this.userData,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userData = result;
      if (result == undefined || result == "") { //Handle this better
        this.userData = new User();
      }
    });
  }
}

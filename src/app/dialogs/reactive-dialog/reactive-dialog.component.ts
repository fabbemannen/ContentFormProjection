import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../user-dialog/User';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-dialog',
  templateUrl: './reactive-dialog.component.html',
  styleUrls: ['./reactive-dialog.component.scss']
})
export class ReactiveDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ReactiveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
  ) { }

  form = new FormGroup({
    firstName: new FormControl(this.data.firstName),
    lastName: new FormControl(this.data.lastName),
  });

  ngOnInit(): void {
    this.form.valueChanges.subscribe(changes => {
      Object.assign(this.data, changes as User);
    })
  }
}
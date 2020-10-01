import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myGroup = this.formBuilder.group({
      fullName: [null, [Validators.required, Validators.minLength(3)]],
      user: [null, Validators.required],
      password: [null, Validators.required]
    });
    // this.formGroup = new FormGroup(
    //   {
    //     fullName: new FormControl(),
    //     user: new FormControl(),
    //     password: new FormControl()
    //   }
    // );
  }
  ngOnInit(): void {
  }

  register(): void {
    if (this.myGroup.valid) {
      console.log('datos no válidos');
    } else {
      console.log('redirect to home');
    }
    console.log(this.myGroup.get('fullName'));
  }

}

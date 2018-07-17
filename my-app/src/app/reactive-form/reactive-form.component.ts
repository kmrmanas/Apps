import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ReactFormService } from 'src/app/react-form.service';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userForm:FormGroup;
  constructor(private fb: FormBuilder, private reactFormService:ReactFormService) { 
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      title:'',
      body: '',
      userId: 1
    });
  }

  ngOnInit() {
  }
  onSubmit() {
   this.reactFormService.setUserData(this.userForm.value);
  }
}

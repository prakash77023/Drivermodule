import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.css']
})
export class DriverProfileComponent implements OnInit {
  loginform:FormGroup


  constructor() {
    this.loginform=new FormGroup({
      uname:new FormControl("",[Validators.required]),
      emailid:new FormControl("",[Validators.required]),
      mobile:new FormControl("",[Validators.required]),
      pwd:new FormControl("",[Validators.required]),
      lno:new FormControl("",[Validators.required]),
      cid:new FormControl("",[Validators.required])
      
    })

    
 

   }

  ngOnInit() {
  }

}

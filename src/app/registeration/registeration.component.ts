import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { checkPassMatch,ConfirmPassVaildators } from '../validations/passwordValidators.validators';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.sass']
})
export class RegisterationComponent {
  defaultselevted:string='Where You Hear About Us'

  constructor(private fb:FormBuilder)
  {

  }


  registerationForm=this.fb.group({
    user_name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern(`^[A-Z][A-Za-z]{2,8}$`)]],
    password:['',[Validators.required,Validators.min(5),Validators.max(12),Validators.pattern(`^[A-z][A-za-z]{2,8}$`)]],
    confirmPassword:['',[Validators.required,Validators.min(5),Validators.max(12),Validators.pattern(`^[A-z][A-za-z]{2,8}$`)]],
    email:['',Validators.required,Validators.email],
    Selection:[''],


  },{validator:[ConfirmPassVaildators]})



  get pass()
  {
    return this.registerationForm.get('password');
  }

  get confirmpass()
  {
    return this.registerationForm.get('confirmPassword');
  }
  get state()
  {
    return this.registerationForm.get('state');
  }

  get email()
  {
    return this.registerationForm.get('email');
  }


  submitted()
  {
    console.log("submitted");
    console.log(this.registerationForm.value)
  }




    // setEmailValidators()
    // {
    //   this.registerationForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>
    //     {
    //       if(checkedValue)
    //       {
    //         this.email?.setValidators(Validators.required);
    //       }
    //       else
    //       {
    //         this.email?.clearValidators();
    //       }
    //       this.email?.updateValueAndValidity();


    //     })
    // }

}


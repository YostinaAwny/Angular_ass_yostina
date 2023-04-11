import { AbstractControl } from "@angular/forms";

export function checkPassMatch(control:AbstractControl)
{
  const pass = control.get('password');
  const confirmPass = control.get('confirmPassword');

  if(pass?.pristine || confirmPass?.pristine)
  {
    return null
  }
  else
  {
  return pass && confirmPass && pass.value!=confirmPass.value ? {'misMatch':true}
    :null;
  }
}
export function ConfirmPassVaildators(control:AbstractControl)
{
  const password=control.get('password');
  const ConfirmPass=control.get('confirmPassword');

  return password && ConfirmPass && password.value!=ConfirmPass.value
  ? {'misMatch':{value:true}}
  :null

}


  // if(pass?.value != null && confirmPass?.value != null && pass?.value != confirmPass?.value)
  // {
  //   return {'misMatch':true}
  // }
  // else
  // {
  //   return null
  // }

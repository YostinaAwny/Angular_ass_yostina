import { AbstractControl, FormControl } from "@angular/forms";

export function forbiddenNameValidator(control:AbstractControl)
{
  const forbidden = /admin/.test(control.value);
  return forbidden ? {'forbiddenName':{value:control.value}} : null;


}

export function forbiddenUserName(reg:RegExp)
{
  return(control:AbstractControl)=>{
    const forbidden = reg.test(control.value);
    return forbidden ? {'forbiddenUser':{value:control.value}} :null;
  }
}
export function NamesValidator(control:AbstractControl)
{
    const name=/(admin|adminstrator)/.test(control.value);

    return name ? {'NotAllowedNames':{value:control.value}} : null;

}






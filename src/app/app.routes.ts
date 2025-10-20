import { Routes } from '@angular/router';
import { SignIn } from './Auth/login/sign-in/sign-in';
import { Verify } from './Auth/login/verify/verify';
import { Forget } from './Auth/forget/forget/forget';
import { SetNewPassword } from './Auth/forget/set-new-password/set-new-password';
import { PasswprdUpdated } from './Auth/forget/password-updated/password-updated';
import { CreateAccount } from './Auth/register/create-account/create-account';
import { PersnalAccount } from './Auth/register/persnal-account/persnal-account/persnal-account';
import { Idin } from './Auth/register/persnal-account/idin/idin';
import { CreateSuccessfull } from './Auth/register/persnal-account/create-successfull/create-successfull';
import { BussnissAccountCreatedSuccessfully } from './Auth/register/persnal-account/bussniss-account-created-successfully/bussniss-account-created-successfully';
import { PersnalFaAuthentication } from './Auth/register/persnal-account/persnal-fa-authentication/persnal-fa-authentication';
import { ManualRegistration } from './Auth/register/persnal-account/Menual/manual-registration/manual-registration';

export const routes: Routes = [

    { path:"", redirectTo: "login", pathMatch: "full" },
    {path:"login",component:SignIn},
    {path:"verify", component: Verify},
    {path:"forget",component:Forget},
    {path:"set-new-password", component:SetNewPassword},
    {path:"password-updated", component:PasswprdUpdated},
    {path:"register", component:CreateAccount},
    {path:"persnal-account",component:PersnalAccount},
    {path:"idin-registration",component:Idin},
    {path:"registration-complete",component:CreateSuccessfull},
    {path:"persnal-fa-authentication",component:BussnissAccountCreatedSuccessfully},
    {path:"2fa-authentication",component:PersnalFaAuthentication},
    {path:"manual-registration",component:ManualRegistration},
    {path:"**", redirectTo: "login"},




];

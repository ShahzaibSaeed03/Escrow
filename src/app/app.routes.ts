import { Routes } from '@angular/router';
import { SignIn } from './Auth/login/sign-in/sign-in';
import { Verify } from './Auth/login/verify/verify';
import { Forget } from './Auth/forget/forget/forget';
import { SetNewPassword } from './Auth/forget/set-new-password/set-new-password';
import { PasswordUpdated } from './Auth/forget/password-updated/password-updated';
import { CreateAccount } from './Auth/register/create-account/create-account';
import { PersnalAccount } from './Auth/register/persnal-account/persnal-account/persnal-account';
import { Idin } from './Auth/register/persnal-account/idin/idin';
import { CreateSuccessfull } from './Auth/register/persnal-account/create-successfull/create-successfull';
import { BussnissAccountCreatedSuccessfully } from './Auth/register/persnal-account/bussniss-account-created-successfully/bussniss-account-created-successfully';
import { PersnalFaAuthentication } from './Auth/register/persnal-account/persnal-fa-authentication/persnal-fa-authentication';
import { ManualRegistration } from './Auth/register/persnal-account/Menual/manual-registration/manual-registration';
import { PersnalMain } from './Perasnal-dashboard/persnal-main/persnal-main';
import { PersnalEmptystate } from './Perasnal-dashboard/persnal-emptystate/persnal-emptystate';
import { Profile } from './share/profile/profile';
import { Dashboard } from './Perasnal-dashboard/dashboard/dashboard';
import { Support } from './support/support/support';
import { UserManual } from './support/user-manual/user-manual';
import { UserManualDeatils } from './support/user-manual-deatils/user-manual-deatils';
import { UpdateSection } from './support/update-section/update-section';
import { UpdateSectionDetails } from './support/update-section-details/update-section-details';
import { CreateProject } from './Perasnal-dashboard/create-project/create-project/create-project';
import { PernalDetailsMain } from './Perasnal-dashboard/persnal-details/pernal-details-main/pernal-details-main';
import { Overview } from './Perasnal-dashboard/persnal-details/overview/overview';
import { Milestone } from './Perasnal-dashboard/persnal-details/milestone/milestone';
import { File } from './Perasnal-dashboard/persnal-details/file/file';
import { Payment } from './Perasnal-dashboard/persnal-details/payment/payment';
import { Log } from './Perasnal-dashboard/persnal-details/log/log';

export const routes: Routes = [

    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: SignIn },
    { path: "verify", component: Verify },
    { path: "forget", component: Forget },
    { path: "set-new-password", component: SetNewPassword },
    { path: "password-updated", component: PasswordUpdated },
    { path: "register", component: CreateAccount },
    { path: "persnal-account", component: PersnalAccount },
    { path: "idin-registration", component: Idin },
    { path: "registration-complete", component: CreateSuccessfull },
    { path: "persnal-fa-authentication", component: BussnissAccountCreatedSuccessfully },
    { path: "2fa-authentication", component: PersnalFaAuthentication },
    { path: "manual-registration", component: ManualRegistration },
    { path: "profile", component: Profile },
    {
        path: "persnal-dashboard",
        component: PersnalMain,
        children: [
            // Default child redirect
            {
                path: "",
                redirectTo: "emptystate",
                pathMatch: "full"
            },
            {
                path: "dashboard",
                component: Dashboard
            },
            // Child component route
            {
                path: "emptystate",
                component: PersnalEmptystate
            },
            {
                path: "create-project", component: CreateProject
            },
            {
                path: "support",
                component: Support
            },
            {
                path: "user-manual",
                component: UserManual,

            },
            {
                path: "user-manual-details", component: UserManualDeatils,
            },
            { path: "user-updates", component: UpdateSection },
            { path: 'user-update-details', component: UpdateSectionDetails },
            {path:"persnal-details",component:PernalDetailsMain,
                children:[
                    {path:"",redirectTo:"overview",pathMatch:"full"},
                    {path:"overview",component:Overview},
                    {path:"milestone",component:Milestone},
                    {path:"file",component:File},
                    {path:"payments",component:Payment},
                    {path:"log",component:Log},
                    

                ]
            }

        ]
    }
    ,
    { path: "**", redirectTo: "login" },




];

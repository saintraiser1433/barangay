import { Routes } from '@angular/router';
import { EndOfficialComponent } from './end-official/end-official.component';
import { ListOfficialComponent } from './list-official/list-official.component';
import { FormOfficialComponent } from './form-official/form-official.component';

export const officialRoute: Routes = [
    {path :'form-official', component:FormOfficialComponent},
    {path :'list-official', component:ListOfficialComponent},
    {path :'end-official', component:EndOfficialComponent},
];

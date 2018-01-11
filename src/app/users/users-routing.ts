import {NgModule} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import {UserListComponent} from "./user-list/user-list.component"
import {UserViewComponent} from "./user-view/user-view.component"

const routes: Routes =
[
    {
        path: 'users',
        component: UserListComponent
    },
    {
        path:'usersView/:seed',
        component: UserViewComponent
    }
];

@NgModule({
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]
})

export class UsersRoutingModule {}
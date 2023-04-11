import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ProductsComponent } from './products/products.component';
import { PostsComponent } from './posts/posts.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ParentComponent } from './parent/parent.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './comments/comments.component';
import { WithoutdiscountsComponent } from './withoutdiscounts/withoutdiscounts.component';
import { DiscountComponent } from './discount/discount.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotesComponent } from './notes/notes.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'user',component:UserComponent},
  {path:'products',component:ProductsComponent,
  children:[{path:'withoutdiscounts',component:WithoutdiscountsComponent},
  {path:'discount',component:DiscountComponent}]},
  {path:'posts',component:PostsComponent},
  {path:'posts/:postId/:comments',component:CommentsComponent},
  {path:'parent',component:ParentComponent},
  {path:'register',component:RegisterationComponent},
  {path:'login',component:LoginComponent},
  {path:'notes',component:NotesComponent},

  {path:'**',component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

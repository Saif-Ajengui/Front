import { NgModule } from "@angular/core";
import { CommonModule,DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { DashboardComponent } from "./dashboard.component";
import { SalesRatioComponent } from "./dashboard-components/sales-ratio/sales-ratio.component";
import { FeedsComponent } from "./dashboard-components/feeds/feeds.component";
import { TopSellingComponent } from "./dashboard-components/top-selling/top-selling.component";
import { TopCardsComponent } from "./dashboard-components/top-cards/top-cards.component";
import { BlogCardsComponent } from "./dashboard-components/blog-cards/blog-cards.component";
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { TchatComponent } from "../tchat/tchat.component";



const routes: Routes = [
  {
    path: "",
    data: {
      title: "Dashboard",
      urls: [{ title: "Dashboard", url: "/dashboard" }, { title: "Dashboard" }],
    },
    component: DashboardComponent,
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  { path: 'chat',
   component: TchatComponent }
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule,
  ],
  declarations: [
    DashboardComponent,
    SalesRatioComponent,
    UserProfileComponent,
    FeedsComponent,
    TopSellingComponent,
    TopCardsComponent,
    BlogCardsComponent
  ],
  providers: [
    DatePipe,
  ]
})
export class DashboardModule {}

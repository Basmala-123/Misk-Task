import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from "../shared/components/components.module";


@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        ClientRoutingModule,
        ComponentsModule
    ]
})
export class ClientModule { }

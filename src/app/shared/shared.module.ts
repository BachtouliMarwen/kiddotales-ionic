import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs/tabs.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { StoryCardComponent } from './story-card/story-card.component';
import { AdminTabsComponent } from './admin-tabs/admin-tabs.component';


@NgModule({
  declarations: [
    TabsComponent,
    CategoryItemComponent,
    SearchBarComponent,
    StoryCardComponent,
    AdminTabsComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [TabsComponent, CategoryItemComponent,
    SearchBarComponent, StoryCardComponent, AdminTabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }

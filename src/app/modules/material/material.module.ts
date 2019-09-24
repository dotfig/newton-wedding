import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatProgressBarModule,
  MatExpansionModule, MatDatepickerModule, MatSelectModule, MatRadioModule, MatIconModule, MatToolbarModule, MatDialogModule, MatAutocompleteModule, MatMenuModule, MatTooltipModule, MatSidenavModule,
  MatTabsModule, MatBadgeModule, MatTreeModule, MatSlideToggleModule
} from '@angular/material';

import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatProgressBarModule,
    MatExpansionModule, MatDatepickerModule, MatSelectModule, MatRadioModule, MatIconModule, MatToolbarModule, MatDialogModule, MatAutocompleteModule, MatMenuModule, MatTooltipModule, MatSidenavModule,
    MatTabsModule, MatBadgeModule, MatTreeModule, MatSlideToggleModule, DragDropModule
  ],
  exports: [
    MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatProgressBarModule,
    MatExpansionModule, MatDatepickerModule, MatSelectModule, MatRadioModule, MatIconModule, MatToolbarModule, MatDialogModule, MatAutocompleteModule, MatMenuModule, MatTooltipModule, MatSidenavModule,
    MatTabsModule, MatBadgeModule, MatTreeModule, MatSlideToggleModule, DragDropModule
  ]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';

// Material Design
import {
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatListModule,
  MatGridListModule,
  MatMenuModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatTableModule,
} from '@angular/material';

const materialModules = [
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatListModule,
  MatGridListModule,
  MatMenuModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatTableModule,
];
@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
  declarations: [],
})
export class MaterialModule {}

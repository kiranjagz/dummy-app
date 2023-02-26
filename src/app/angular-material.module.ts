import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  exports: [MatToolbarModule, MatButtonModule, MatTableModule, MatProgressSpinnerModule, MatCardModule],
})
export class AngularMaterialModule {}

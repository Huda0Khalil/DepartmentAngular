import { Component, Inject } from '@angular/core';
import { MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.css'
})
export class ConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string, type: string }

  ) {}
  onConfirm(): void {
    this.dialogRef.close(true);  // Return true when confirming
  }

  onCancel(): void {
    this.dialogRef.close(false); // Return false when canceling
  }
}

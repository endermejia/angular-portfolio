import {Component} from '@angular/core';
import {DialogService} from '../../services/dialog.service';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
    constructor(
        private dialogService: DialogService
    ) {
    }

    get title(): string {
        return this.dialogService.getDialogData().title;
    }

    get message(): string {
        return this.dialogService.getDialogData().message;
    }

    onConfirm() {
        this.dialogService.close(true);
    }

    onCancel() {
        this.dialogService.close(false);
    }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {DialogService} from '../../services/dialog.service';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {

    title: string;
    message: string;

    constructor(
        private dialogService: DialogService
    ) {
    }

    ngOnInit() {
        this.dialogService.dialogData.subscribe((data: { title: string, message: string }) => {
            this.title = data.title;
            this.message = data.message;
            document.getElementById('buttonDialog').click();
        });
    }

    onConfirm() {
        this.dialogService.close(true);
    }

    onCancel() {
        this.dialogService.close(false);
    }
}

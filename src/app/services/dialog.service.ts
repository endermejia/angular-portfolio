import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DialogService {
    private dialogRef: Subject<boolean> = new Subject<boolean>();
    private dialogData: { title: string, message: string };

    open(title: string, message: string): Observable<boolean> {
        this.dialogData = { title, message };
        this.dialogRef.next(true);
        return this.dialogRef.asObservable();
    }

    close(response: boolean) {
        this.dialogRef.next(response);
        this.dialogRef.complete();
    }

    getDialogData(): { title: string, message: string } {
        return this.dialogData;
    }
}

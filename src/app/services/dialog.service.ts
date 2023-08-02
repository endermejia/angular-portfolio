import {Injectable, OnDestroy} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class DialogService implements OnDestroy{
    constructor() {
    }

    private _resultSubject = new Subject<boolean>();
    private _dialogData = new Subject<{ title: string, message: string }>();

    open(title: string, message: string): Observable<boolean> {
        this._dialogData.next({title, message});
        return this._resultSubject.asObservable();
    }

    close(confirm: boolean): void {
        this._resultSubject.next(confirm);
    }

    get dialogData(): Observable<{ title: string, message: string }> {
        return this._dialogData;
    }

    ngOnDestroy(): void {
        this._dialogData.unsubscribe();
    }

}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class EventService {

//   constructor() { }
// }


/** Module */
import {EventEmitter, Output} from '@angular/core';

export class EventService {

    dispatcher: EventEmitter<any> = new EventEmitter();
    userDispatcher: EventEmitter<any> = new EventEmitter();
    @Output() emit_update_user = new EventEmitter();

    constructor() {
    }
    userEvent(data) {
        this.userDispatcher.emit(data);
    }
}

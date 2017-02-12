import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LoadedPageService {

  private loadedSource:Subject<boolean>=new Subject<boolean>();

  loadedStream = this.loadedSource.asObservable();

  constructor() { }

  submit(b:boolean){
    this.loadedSource.next(b);
  }


}

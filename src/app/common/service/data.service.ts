import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
	private search = new BehaviorSubject<number>(0);
	currentValueName = this.search.asObservable();

	searchItem(id: number): void {
		this.search.next(id);
	}
}

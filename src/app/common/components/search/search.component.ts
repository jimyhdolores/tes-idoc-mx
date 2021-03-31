import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from './../../service/data.service';
@Component({
	selector: 'app-search-component',
	templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
	@Input() textHint: string;

	public searchForm: FormGroup;
	constructor(private fb: FormBuilder, private service: DataService) {}

	ngOnInit(): void {
		this.searchForm = this.fb.group({
			search: [null]
		});

		this.searchForm.valueChanges.subscribe(() => {
			let idFilter = 0;
			if (this.searchForm.get('search').value) {
				idFilter = this.searchForm.get('search').value as number;
			}
			this.keyUpFilter(idFilter);
		});
	}

	keyUpFilter(id: number): void {
		this.service.searchItem(id);
	}
}

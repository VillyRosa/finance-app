import { Component, Input } from '@angular/core';
import { ITableRow } from 'src/app/interfaces/tableRow';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() showSearch: boolean = true;
  @Input() searchPlaceholder: string = '';
  @Input() showSortSelect: boolean = true;
  @Input() showCategorySelect: boolean = true;
  @Input() columns: string[] = [];
  @Input() rows: ITableRow[] = [];

  public toString(value: string | number): string {
    return String(value);
  }

  public toNumber(value: string | number): number {
    return Number(value);
  }

}

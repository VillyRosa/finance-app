import { Component, OnInit } from '@angular/core';
import { IPot } from 'src/app/interfaces/pot';
import { PotsService } from 'src/app/services/pots.service';

@Component({
  selector: 'app-pots',
  templateUrl: './pots.component.html',
  styleUrls: ['./pots.component.scss']
})
export class PotsComponent implements OnInit {

  public pots: IPot[] = [];

  constructor(private potsService: PotsService) {}

  public ngOnInit(): void {
    this.potsService.getAll().subscribe((pots) => {
      this.pots = pots;
    });
  }

}

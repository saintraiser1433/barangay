import { Component, DestroyRef, inject,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficialService } from 'app/core/services/official.service';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-list-official',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-official.component.html',
  styleUrls: ['./list-official.component.css']
})
export class ListOfficialComponent implements OnInit {
  dataSource:any[] = [];
  private destroyRef = inject(DestroyRef);
  officialService = inject(OfficialService);


  ngOnInit(): void {
    this.officialService.loadOfficial().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(val =>{
      this.dataSource = val;
    })
  }

  onDelete(id){
    this.officialService.deleteOfficial(id);
  }
  onUpdate(id,data){
    this.officialService.updateOfficial(id,data);

  }

}

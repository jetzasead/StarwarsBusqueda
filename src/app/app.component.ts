import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ApiUsuariosService } from './api-usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  displayedColumns = ['name', 'mass', 'height'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: ApiUsuariosService) {}

  ngOnInit() {



    this.RenderDataTable();
  }

  RenderDataTable() {
    this.dataService.getUsuarios()
      .subscribe(
      res => {

        console.log(res.results);
        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res.results;

        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log('Se produjo un error mientras intentaba recuperar los personajes' + error);
      });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}

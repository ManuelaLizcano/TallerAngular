import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieServiceService } from './serieService.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  

  
  
  constructor(private serieService:SerieServiceService) { }
  public series: Array<Serie>=[];
  public avgSeason: number=0;
  public contador: number=0;
  public avgSeasonResultado: number=0;

  getSeries(){
    this.serieService.getSerie().subscribe((series)=>{
      this.series=series;
      this.getAvgSeason();
    })
  }
  
  
  getAvgSeason(){
    for(let i of this.series){
      this.avgSeason+=i.seasons;
      this.contador+=1;
    }  
    this.avgSeasonResultado=this.avgSeason/this.contador;
  }
  

  getSerieList():Array<Serie>{
    return dataSeries;
  }
  ngOnInit() {
    this.getSeries();
  }
 
}

import { PanphletService } from './../../service/panphlet/panphlet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panphlet-add',
  templateUrl: './panphlet-add.component.html'
})
export class PanphletAddComponent implements OnInit {
  panphlet: any;

  constructor(
  private panphletService: PanphletService
  ) { }

  save(id,initialDate,endDate,imageUrl, imageUrl2) {
  this.panphlet = {id:id,initialDate:initialDate,endDate:endDate,panphletUrl:[imageUrl, imageUrl2]};
  JSON.stringify(this.panphlet);
  console.log(this.panphlet);
  this.panphletService.save(this.panphlet).subscribe( success => {
  alert('Panfleto adicionado com sucesso!')},
  error => {
    alert('erro');
  })
  window.location.href = "/panphlet";
 }

  ngOnInit() {
  }

}

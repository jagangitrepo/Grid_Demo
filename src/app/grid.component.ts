import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'grid-elem',
  template: `<button style="width:100px; height: 100px;" [style.background]="bgcolor" (click)="toggle()">{{index}}</button> {{check()}}`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridElementComponent  {
  @Input() index: string;
  @Input() bgcolor: string;
  toggle(){
    ((this.bgcolor === "red")? this.bgcolor = "" : this.bgcolor = "red");
  }
  check()
  {
      console.log("Grid-Element: ", this.index, " Checked..")
  }
}

@Component({
  selector: 'grid-list',
  template: `<div class="wrapper"> <grid-elem  *ngFor="let obj of ilist" [index]="obj" [bgcolor]="blue"> {{check()}}</grid-elem> </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridListComponent  {
  @Input() ilist: string[];
  check()
  {
      console.log("Grid-List: Checked..")
  }
}

@Component({
  selector: 'grid',
  template: `<grid-list [ilist]="list"> {{check()}} </grid-list>`
})
export class GridComponent  {
  list=["1","2","3","1","2","3", "1","2","3","1","2","3"  ];
  check()
  {
      console.log("Grid-Component: Checked..")
  }
}

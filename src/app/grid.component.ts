import { Component, Input, ChangeDetectionStrategy , ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'grid-elem',
  template: `<button style="width:100px; height: 100px;" [style.background]="bgcolor" (click)="toggle()">{{index}}</button> <p>{{ check() }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridElementComponent  {
  @Input() index: string;
  @Input() bgcolor: string;
  constructor(private cd:ChangeDetectorRef){}
  toggle(){
    ((this.bgcolor === "red")? this.bgcolor = "" : this.bgcolor = "red");
    //this.cd.detectChanges(); // Start with triggerred component and also trigger from the root.
    //this.cd.markForCheck(); // Trigger from the root view node on next Cd cycle.
  }
  check()
  {
      console.log("Grid-Element: ", this.index, " Checked..")
  }
}

@Component({
  selector: 'grid-list',
  template: `<div class="wrapper">  <grid-elem  *ngFor="let obj of ilist" [index]="obj" [bgcolor]="blue"> </grid-elem></div> <p>{{ check() }}</p>`,
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
  template: `<grid-list [ilist]="list"></grid-list> <p>{{ check() }}</p> `
})
export class GridComponent  {
  list=["1","2","3","4","5","6","7","8","9"];
  check()
  {
      console.log("Grid-Component: Checked..")
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from '../group.service'; 

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.css']
})
export class GroupItemComponent implements OnInit {

@Input() group:any;
  
  constructor(private groupService:GroupService) { }

  ngOnInit() {
  }

    groupSelected(group:any){
        this.groupService._setGroup(group);
  }

}

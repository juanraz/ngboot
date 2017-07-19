import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service'; 

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  private groups:any;
  private displayingGroups:any;
  private currentPage:number = 0;
  private totalPages:number = 0;
  private byPage:number = 10;

  constructor(private groupService:GroupService) { }

  ngOnInit() {
        this.groupService.getGroups().then(data=> { 
        this.groups = data.responseObject;
            var totalGroups:number = this.groups.length;
            this.totalPages=Math.ceil(totalGroups/this.byPage);
        this.setPage(1);
/*        if(totalGroups>0){
          this.groupService._setUser(this.displayingGroups[0]);
        }*/
      });

  }

        next(){
        if(this.currentPage<this.totalPages){
          this.currentPage++;
          this.setPage(this.currentPage);
        }
      }
      prev(){
        if(this.currentPage>1){
          this.currentPage--;
          this.setPage(this.currentPage);
        }
      }
      setPage(page:number){
                this.displayingGroups = this.groups.slice(page-1,page+(this.byPage-1));
                this.currentPage  = page;
                
      }


}

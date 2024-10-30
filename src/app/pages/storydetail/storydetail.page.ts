/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Story } from 'src/app/models/story.model';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { LikedlistService } from 'src/app/services/likedlist.service';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-storydetail',
  templateUrl: './storydetail.page.html',
  styleUrls: ['./storydetail.page.scss'],
})
export class StorydetailPage implements OnInit {

  story!: Story;
  isLiked: boolean = false;
  userId$: Observable<string | null>;

  constructor(
    private route: ActivatedRoute,
    private storyService: StoryService,
    private likedListService: LikedlistService,
    private authService: AuthServiceService,
  ) {
    this.userId$ = this.authService.getCurrentUserId();
  }

  ngOnInit() {
    const storyId= this.route.snapshot.paramMap.get('id');
    if (storyId){
      this.storyService.getStoryById(storyId).subscribe((data) =>{
        this.story = data;
        this.checkIfLiked(storyId)
      });
    }
  }

  checkIfLiked(storyId: string) {
    this.userId$.subscribe(userId => {
      if (userId) {
        this.likedListService.getLikedList(userId).subscribe(likedList => {
          this.isLiked = likedList?.likedStoryIds.includes(storyId);
        });
      }
    });
  }

  toggleLike() {
    if (this.story) {
      this.userId$.subscribe(userId => {
        if (userId) {
          this.likedListService.toggleLike(userId, this.story.id!).subscribe(() => {
            this.isLiked = !this.isLiked; 
          }, error => {
            console.error('Error toggling like:', error);
          });
        }
      });
    }
  }
}

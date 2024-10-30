/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Story } from 'src/app/models/story.model';

@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.scss'],
})
export class StoryCardComponent  implements OnInit {

  @Input() story!: Story;

  constructor(
    private router: Router
  ) { }

  goToStoryDetail(storyId: string){
    this.router.navigate(['/storydetail', storyId])
  }

  ngOnInit() {}

}

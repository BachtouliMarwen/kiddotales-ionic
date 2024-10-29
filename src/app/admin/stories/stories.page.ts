/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Story } from 'src/app/models/story.model';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.page.html',
  styleUrls: ['./stories.page.scss'],
})
export class StoriesPage implements OnInit {

  stories: Story[] = []

  constructor(
    private storyService: StoryService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.loadStories();
  }

  loadStories(){
    this.storyService.getStories().subscribe((data) => {
      this.stories = data;
    })
  }

  editStory(storyId: string | undefined ) {
    if (storyId){
      this.router.navigate(['/storyedit', storyId]);
    }    
  }

  async confirmDelete(storyId: string) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Do you really want to delete this story?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => this.deleteStory(storyId),
        },
      ],
    });

    await alert.present();
  }

  deleteStory(StoryId: string) {
    this.storyService.deleteStory(StoryId)
    .then(() => {
      console.log('Story deleted'); 
    }).catch((error) => {
      console.error('Error deleting Story: ', error);
    });
  }
}

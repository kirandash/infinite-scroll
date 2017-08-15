import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';

@Component({
  selector: 'is-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit {
  
  images = new BehaviorSubject([]);

  group = 3;
  endKey = '';
  finished = false;

  constructor(private _imageService: ImageService) { }

  ngOnInit() {
  	this.getImages();
  }

  onScroll() {
  	this.getImages();
  }

  private getImages(key?) {
  	if(this.finished) return;

  	this._imageService.
  		getImages(this.group+1, this.endKey)
  		.do(images=> {
  			this.endKey = _.last(images)['$key']
  			const newImages = _.slice(images, 0 , this.group)
  			console.log(newImages);
  			const currentImages = this.images.getValue();
  			console.log(currentImages);

  			if(this.endKey == _.last(newImages)['$key']) {
  				this.finished = true;
  			}

  			this.images.next(_.concat(currentImages, newImages));
  		})
  		.take(1)
  		.subscribe();
  }

}

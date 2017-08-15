import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

@Injectable()
export class ImageService {

  constructor(private db: AngularFireDatabase) { }

  getImages(group, endKey?) {
  	let query = {
  		orderByKey: true,
  		limitToFirst: group
  	}

  	if(endKey) query['startAt'] = endKey;

  	return this.db.list('/uploads/', {
  		query
  	})
  }

}

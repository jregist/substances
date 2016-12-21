import {Injectable} from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import {Substance} from '../shared/Substance';

@Injectable()
export class FirebaseService {
  substances: FirebaseListObservable<Substance[]>;
  substance: Substance;
  private item: FirebaseObjectObservable<any>;
  
  constructor(private af: AngularFire) {
      
  }

 /*   getCategories() {
      this.categories = this.af.database.list('/categories') as FirebaseListObservable<Category[]>
      return this.categories;
    }*/

    getSubstances(group:string = null) {
       if (group != null && group != "0") {
        this.substances = this.af.database.list('/', {
          query: {
            orderByChild: 'grouping',
            equalTo: group
          }
        }) as FirebaseListObservable<Substance[]>
      }
      else {
        this.substances = this.af.database.list('/') as FirebaseListObservable<Substance[]>
      }
      return this.substances;
    }

    getSubstance(substanceId: number) {
        this.item = this.af.database.object('/'+substanceId);
        this.item.subscribe(item => {
            substance => this.substance = item;
          });
          console.log('this : ' + this.substance);
          return this.substance;
      }
      
/*    addBusiness(newBusiness) {
      this.businesses.push(newBusiness);
    }

    updateBusiness(key, updBusiness) {
      this.businesses.update(key, updBusiness);
    }

    deleteBusiness(key) {
      this.businesses.remove(key);
    }
    */
}
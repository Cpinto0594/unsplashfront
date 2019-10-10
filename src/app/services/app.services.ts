import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppServices {
    API_URL       ="https://unsplashtestruby.herokuapp.com"
    SEARCH_IMAGES = `${this.API_URL}/api/v1/photos/search`;
    RANDOM_IMAGES = `${this.API_URL}/api/v1/photos/random`;
    USERLIKE      = `${this.API_URL}/api/v1/photos/PHOTO_ID/like`
    USERFAVS      = `${this.API_URL}/api/v1/photos/user_liked_photos`



    constructor(
        private http: HttpClient
    ) {

    }


    randomImages(): Observable<any> {
        return this.http.get(this.RANDOM_IMAGES);
    }

    findImages(text): Observable<any> {
        return this.http.get(this.SEARCH_IMAGES, {
            params: {
                query: text
            }
        });
    }

    likeImage(imageid): Observable<any> {
        return this.http.post(this.USERLIKE.replace("PHOTO_ID", imageid), {});
    }

    unlikeImage(imageid): Observable<any> {
        return this.http.delete(this.USERLIKE.replace("PHOTO_ID", imageid));
    }

    favImages(): Observable<any> {
        return this.http.get(this.USERFAVS);
    }

}
import { Component, OnInit } from '@angular/core';
import { IHotel } from './hotel';
import { HotelListService } from './hotel-list.service';


@Component ({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit{

  public title = 'Liste hotels';
  public filteredHotels: IHotel[] = [];
  public showBadge: boolean | undefined;
  private hotelFiltre = '';


  public receiveRating:string | undefined;

  public get  hotelFilter(): string {
    return this.hotelFiltre;
  }

  public set hotelFilter(filter: string){
    this.hotelFiltre = filter;

    this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFiltre) : this.hotels;
  }

  public  hotels: IHotel[] = [];
  public errMsg: string | undefined;
  /*
  private hotelListService : HotelListService;

  constructor(private hotelListService:
    HotelListService){
      this.hotelListService = hotelListService;
    }
    oder so
  */

  constructor(private hotelListService:
    HotelListService){}

    ngOnInit() {
      // code for lifecycle hook
      this.hotelListService.getHotels().subscribe({
        next: hotels => {
          this.hotels = hotels;
          this.filteredHotels = this.hotels;
        },
        error: err => this.errMsg = err
      });
      this.hotelFilter = '';
    }

public toggleIsNewBadge(): void{
  this.showBadge = !this.showBadge;
}

//Methode de filtre
private filterHotels(criteria: string): IHotel[]{
  criteria = criteria.toLowerCase();

  const res = this.hotels.filter(
    (hotel: IHotel) => hotel.hotelName.toLowerCase().indexOf(criteria) != -1
  );
  return res;
}

public receivedRatingClick(message:string):void{
    this.receiveRating = message;

}

}



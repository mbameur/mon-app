import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";


@Component ({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})

export class StarRatingComponent implements OnChanges{
  public starWidth: number | undefined;

  @Output()
  public startRatingCliked : EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public rating: number = 2


  public sendRating():void {
    this.startRatingCliked.emit(`La note est de ${this.rating}`);
  }

  ngOnChanges(){
    this.starWidth = this.rating * 125 / 5;
  }
}

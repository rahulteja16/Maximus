import { Component, OnInit } from '@angular/core';
import { SliderService } from './slider.service';


@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {
    sliderData = [];
    constructor(private SliderService: SliderService) { }
    nextLeft() {
        console.log('its working');
    }
    nextRight() {
        console.log('its working');
    }
    ngOnInit() {
        this.sliderData = this.SliderService.getSliderData();
    };

};



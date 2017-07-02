import { Slider } from '../models/slider.model';

export class SliderService {
    private SliderData: Slider[] = [
        new Slider('../assets/big.jpg', 'Fashion', 'http://google.com'),
        new Slider('../assets/big.jpg', 'Electronics', 'http://google.com'),
        new Slider('../assets/big.jpg', 'General', 'http://google.com'),
    ]
    getSliderData() {
         return this.SliderData.slice();
    }
}

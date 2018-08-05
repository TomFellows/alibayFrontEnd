import React, { Component } from 'react';
import '../CSS/Global.css';
import Image from './Image.js';
import HighlightArea from './HighlightArea.js'


class Carousel extends Component {
   
    // constructor(props) {
    //     super(props),
    //         this.state = { src: "carousel1.jpg" }
    //     this.changePicture = this.changePicture.bind(this)
    // }
    // componentDidMount() {
    //     setInterval(this.changePicture
    //         , 3000)
    //     this.state = { imageNo: 1 }
        
    // }

    // changePicture() {
    //     this.setState({ imageNo: this.state.imageNo + 1 })
    //     if(this.state.imageNo === 4){
    //         this.setState({ imageNo: 1})
    //     }
       
    //     this.setState({ src: `carousel${this.state.imageNo}.jpg` })
        
    // }


    // render() {
    //     return (
    //         <div>
               
    //             <img src={this.state.src} className="carousel" />

    //         </div>
    //     );
    // }

    render() {
        return (
            <div>
               
               <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="carousel1.jpg" alt="First slide" className = "carousel"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="carousel2.jpg" alt="Second slide" className = "carousel"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="carousel3.jpg" alt="Third slide" className = "carousel"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>

           
        );
    }

    


    
}


export default Carousel;

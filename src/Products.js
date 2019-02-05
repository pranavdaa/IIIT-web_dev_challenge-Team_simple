import React, {PureComponent} from 'react';
import { Row, Col } from 'react-bootstrap';
import Cardholder from './Cardholder';
import image9 from './image9.jpg';
import image10 from './image10.jpg';
import image11 from './image11.jpg';
import image12 from './image12.png';
import image13 from './image13.jpg';
import image14 from './image14.jpg';

export default class Products extends PureComponent{
	render(){
		return(
			<div>
				<Row>
					<Col md={4}>
		  				<Cardholder name="Art 1" description="Panting of the era" image={image9}/>
		  			</Col>
		  			<Col md={4}>
		  				<Cardholder name="Art 2" description="This was panted by picasso" image={image10}/>
		  			</Col>
		  			<Col md={4}>
		  				<Cardholder name="Art 3" description="A master piece by khalid husani" image={image11}/>
		  			</Col>
		  		</Row>
		  		<Row className="row">
					<Col md={4}>
		  				<Cardholder name="Art 4" description="MF husans last pience of art" image={image12}/>
		  			</Col>
			  		<Col md={4}>
			  			<Cardholder name="Art 5" description="this is some serious shit" image={image13}/>
			  		</Col>
			  		<Col md={4}>
			  			<Cardholder name="Art 6" description="LAst but not the least" image={image14}/>
			  		</Col>
		  		</Row>
			</div>
		);
	}
}

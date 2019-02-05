import React, { Component } from 'react'
import PubNubReact from 'pubnub-react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Cards from './Cards'


export default class Dashboard extends Component {
	constructor(props) {
    	super(props);
			this.state = {highest: 0, people: 0};
			//this.last_message = 0;
    	this.pubnub = new PubNubReact({
            publishKey: 'pub-c-a6ebcb42-de10-4419-addd-84cc814707e3',
            subscribeKey: 'sub-c-9768d6c8-288e-11e9-af7c-c69eed1db94e'
        });
    	this.pubnub.init(this);
			// this.state = { highest : 0 };
			console.log({ pubnub: this.pubnub });

    }

		componentWillMount() {
			this.pubnub.subscribe({
					channels: ['art1'],
					withPresence: true
			});
			this.pubnub.getMessage('art1', (msg) => {
					console.log('***'+msg.message);
					//this.last_message = msg.message;
					this.setState ({
						highest: msg.message
					});
			});
			this.pubnub.hereNow({
				channels: ["art1"],
				includeState: true
			},(status,response)=> {
				console.log(response.totalOccupancy);
				this.setState ({
					people: response.totalOccupancy
				});
			});

		}

	render() {
		const messages = this.pubnub.getMessage('art1');
		const presence = this.pubnub.hereNow('art1');
	    return (
	    		<div>
						<Cards data={messages.length} highest={this.state.highest} people={this.state.people}/>

						<br/>
						<br/>
							<ListGroup flush>{messages.map((m, index) => <ListGroupItem><h1 key={'message' + index}>{m.message}</h1></ListGroupItem>)}</ListGroup>
					</div>
				);
	}
}

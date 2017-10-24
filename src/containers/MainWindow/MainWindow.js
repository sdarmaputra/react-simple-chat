import React from 'react';

import WindowTopBar from '../../components/WindowTopBar';
import MessageWindow from '../../components/MessageWindow';
import InputWindow from '../../components/InputWindow';

const messages = [
	{
		meta: 'Surya',
		date: 'Oct 21, 22:10',
		content: 'Helloooooo'
	},
	{
		meta: 'Jon',
		date: 'Oct 21, 22:14',
		content: 'Helloooooowwwww'
	}
];

class MainWindow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: messages
		}
		this.scrollToLastMessage = this.scrollToLastMessage.bind(this);
	}

	scrollToLastMessage() {
		console.log(this.messageWindow.scrollHeight)
		this.messageWindow.scrollTop = this.messageWindow.scrollHeight;
	}

	render() {
		return(
			<div className='main-window'>
				<div className='main-window__top-bar'>
					<WindowTopBar title='Window title' meta='meta' />
				</div>
				<div ref={element => this.messageWindow = element} className='main-window__message-window'>
					<MessageWindow messages={this.state.messages} />
				</div>
				<div className='main-window__input-window'>
					<InputWindow placeholder='Say something...' onSubmit={(input) => {
						this.setState({
							messages: [
								...this.state.messages,
								{ meta: 'Jon', date: 'Oct 24, 23:30', content: input }
							]
						}, this.scrollToLastMessage);
					}} />
				</div>
			</div>
		);
	}
}

export default MainWindow;

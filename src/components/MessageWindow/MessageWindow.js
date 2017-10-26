import React from 'react';

import MessageBox from '../MessageBox';
import Badge from '../Badge';

const MessageWindow = (props) => (
	<div className='message-window'>
		{
			props.messages && props.messages.map((message, index) => {
				const component = message.type && message.type === 'badge' ? <Badge key={`badge-${index}`} content={message.content} /> : <MessageBox key={`message-${index}`} meta={message.meta} date={message.date} content={message.content} />
				return component;
			})
		}
	</div>
);

export default MessageWindow;

import { expect } from 'chai';

import reducer from './openedMessageReducer';
import * as types from '../constants/openedMessage';

describe('openedMessageReducer', function() {
	beforeEach(function() {
		this.initialState = {
			contact: {
				id: null,
				title: null,
				meta: null,
				date: null,
				image: null
			},
			messageType: null,
			messageId: null
		};
	});

	it('should return initial state', function() {
		expect(reducer(undefined, {})).to.be.deep.equal(this.initialState);
	});

	it('should handle OPEN_MESSAGE', function() {
		const contact = {
			id: 'c01',
			title: 'Contact 1'
		};
		const messageId = 'm01';
		const messageType = 'message';
		expect(reducer(this.initialState, {
			type: types.OPEN_MESSAGE,
			contact,
			messageId,
			messageType
		})).to.be.deep.equal({
			contact: Object.assign({}, contact),
			messageId,
			messageType
		});
	});
	
	it('should handle UPDATE_OPENED_MESSAGE', function() {
		const contact = {
			id: 'c01',
			title: 'Contact 1'
		};
		const updatedContact = {
			title: 'Updated'
		};
		const messageId = 'm01';
		const messageType = 'message';
		const openedMessage = reducer(this.initialState, {
			type: types.OPEN_MESSAGE,
			contact,
			messageId,
			messageType
		});
		expect(openedMessage).to.be.deep.equal({
			contact: Object.assign({}, contact),
			messageId,
			messageType
		});
		expect(reducer(openedMessage, {
			type: types.UPDATE_OPENED_MESSAGE,
			contact: updatedContact,
			messageId
		})).to.be.deep.equal({
			contact: Object.assign({}, contact, updatedContact),
			messageId,
			messageType
		});
		expect(reducer(openedMessage, {
			type: types.UPDATE_OPENED_MESSAGE,
			contact: updatedContact,
			messageId: 'unavailable'
		})).to.be.deep.equal(openedMessage);
	});
});

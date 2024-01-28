import jsdom from 'jsdom';

import { Component, Header, Card, Main, Footer } from '../js/util.js';

const { JSDOM } = jsdom;

describe('DOM', () => {
	beforeEach(() => {
		const { document } = new JSDOM(
			`<!DOCTYPE html><html><body></body></html>`
		).window;
		global.document = document;
	});

	it("should be able to create element via 'Component' class method", () => {
		const component = new Component();
		const subtitleEl = component.createElement(
			'p',
			'highlight',
			'Lorem ipsum'
		);
		document.body.appendChild(subtitleEl);

		const isSubtitleElExist = !!document.querySelector('.highlight');
		expect(isSubtitleElExist).not.toBeNull();
	});

	it("should be able to return element attribute data via 'Component' class method", () => {
		const component = new Component();
		const titleData = component.createElementAttribute(
			'title',
			'necessary stuff'
		);

		const expectedTitleData = {
			name: 'title',
			value: 'necessary stuff',
		};

		expect(titleData).toEqual(expectedTitleData);
	});

	it("should be able to create header element via 'Header' class", () => {
		const header = new Header();
		const headerEl = header.render();
		document.body.appendChild(headerEl);

		const isHeaderElExist = !!document.querySelector('header');
		expect(isHeaderElExist).not.toBeNull();
	});

	it("should be able to create card element via 'Card' class", () => {
		const card = new Card();
		const cardEl = card.render();
		document.body.appendChild(cardEl);

		const isCardElExist = !!document.querySelector('.card');
		expect(isCardElExist).not.toBeNull();
	});

	it("should be able to create main element via 'Main' class", () => {
		const main = new Main();
		const mainEl = main.render();
		document.body.appendChild(mainEl);

		const isMainElExist = !!document.querySelector('main');
		expect(isMainElExist).not.toBeNull();
	});

	it("should be able to create footer element via 'Footer' class", () => {
		const footer = new Footer();
		const footerEl = footer.render();
		document.body.appendChild(footerEl);

		const isFooterElExist = !!document.querySelector('footer');
		expect(isFooterElExist).not.toBeNull();
	});
});

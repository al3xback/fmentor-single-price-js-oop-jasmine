class Component {
	createElementAttribute(name, value) {
		return {
			name,
			value,
		};
	}

	createElement(tag, className, text, attributes) {
		const newElement = document.createElement(tag);
		if (className) {
			newElement.className = className;
		}
		newElement.textContent = text || '';
		if (attributes && attributes.length > 0) {
			for (const attr of attributes) {
				newElement.setAttribute(attr.name, attr.value);
			}
		}
		return newElement;
	}
}

class Header extends Component {
	render() {
		const headerEl = this.createElement('header');

		const headerTitleEl = this.createElement(
			'h1',
			'sr-only',
			'Single price grid component'
		);

		headerEl.appendChild(headerTitleEl);

		return headerEl;
	}
}

class Card extends Component {
	render() {
		const cardEl = this.createElement('article', 'card');

		/* section join community */
		const sectionJoinCommunityEl = this.createElement(
			'section',
			'card__block card__block--join-community'
		);

		const sectionJoinCommunityTitleEl = this.createElement(
			'h2',
			'card__title',
			'Join our community'
		);

		const sectionJoinCommunitySubtitleEl = this.createElement(
			'mark',
			'card__mark',
			'30-day, hassle-free money back guarantee'
		);

		const sectionJoinCommunityDescriptionEl = this.createElement(
			'p',
			'card__desc',
			'Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.'
		);

		sectionJoinCommunityEl.appendChild(sectionJoinCommunityTitleEl);
		sectionJoinCommunityEl.appendChild(sectionJoinCommunitySubtitleEl);
		sectionJoinCommunityEl.appendChild(sectionJoinCommunityDescriptionEl);

		/* section group */
		const sectionGroupEl = this.createElement('div', 'card__group');

		/* section monthly subscription */
		const sectionMonthlySubscriptionEl = this.createElement(
			'section',
			'card__block card__block--monthly-subsription'
		);

		const sectionMonthlySubscriptionTitleEl = this.createElement(
			'h3',
			'card__title',
			'Monthly Subscription'
		);

		const sectionMonthlySubscriptionPriceEl = this.createElement(
			'p',
			'card__price'
		);

		const sectionMonthlySubscriptionPriceAmountEl = this.createElement(
			'span',
			'num',
			'$29'
		);

		const sectionMonthlySubscriptionPriceLabelEl = this.createElement(
			'span',
			'label',
			'per month'
		);

		sectionMonthlySubscriptionPriceEl.appendChild(
			sectionMonthlySubscriptionPriceAmountEl
		);
		sectionMonthlySubscriptionPriceEl.appendChild(
			sectionMonthlySubscriptionPriceLabelEl
		);

		const sectionMonthlySubscriptionDescriptionEl = this.createElement(
			'p',
			'card__desc',
			'Full access for less than $1 a day'
		);

		const sectionMonthlySubscriptionLinkEl = this.createElement(
			'a',
			'btn btn--primary btn--full',
			'Sign Up',
			[this.createElementAttribute('href', '#')]
		);

		sectionMonthlySubscriptionEl.appendChild(
			sectionMonthlySubscriptionTitleEl
		);
		sectionMonthlySubscriptionEl.appendChild(
			sectionMonthlySubscriptionPriceEl
		);
		sectionMonthlySubscriptionEl.appendChild(
			sectionMonthlySubscriptionDescriptionEl
		);
		sectionMonthlySubscriptionEl.appendChild(
			sectionMonthlySubscriptionLinkEl
		);

		/* section why us */
		const sectionWhyUsEl = this.createElement(
			'section',
			'card__block card__block--why-us'
		);

		const sectionWhyUsTitleEl = this.createElement(
			'h3',
			'card__title',
			'Why Us'
		);

		const sectionWhyUsListEl = this.createElement('ul', 'card__list');

		const benefits = [
			'Tutorials by industry experts',
			'Peer & expert code review',
			'Coding exercises',
			'Access to our GitHub repos',
			'Community forum',
			'Flashcard decks',
			'New videos every week',
		];

		for (const benefit of benefits) {
			const sectionWhyUsListItemEl = this.createElement(
				'li',
				null,
				benefit
			);

			sectionWhyUsListEl.appendChild(sectionWhyUsListItemEl);
		}

		sectionWhyUsEl.appendChild(sectionWhyUsTitleEl);
		sectionWhyUsEl.appendChild(sectionWhyUsListEl);

		sectionGroupEl.appendChild(sectionMonthlySubscriptionEl);
		sectionGroupEl.appendChild(sectionWhyUsEl);

		cardEl.appendChild(sectionJoinCommunityEl);
		cardEl.appendChild(sectionGroupEl);

		return cardEl;
	}
}

class Main extends Component {
	render() {
		const mainEl = this.createElement('main');

		const mainContainerEl = this.createElement('div', 'container');

		const card = new Card();
		const cardEl = card.render();

		mainContainerEl.appendChild(cardEl);

		mainEl.appendChild(mainContainerEl);

		return mainEl;
	}
}

class Footer extends Component {
	render() {
		const footerEl = this.createElement('footer');

		const footerContainerEl = this.createElement('div', 'container');

		const footerTextEl = this.createElement('p', null, 'Challenge by ');

		const footerTextLinkCreatorEl = this.createElement(
			'a',
			'btn btn--link',
			'Frontend Mentor',
			[
				this.createElementAttribute(
					'href',
					'https://www.frontendmentor.io?ref=challenge'
				),
				this.createElementAttribute('rel', 'noopener'),
				this.createElementAttribute('target', '_blank'),
			]
		);

		const footerTextLinkCoderEl = this.createElement(
			'a',
			'btn btn--link',
			'al3xback',
			[
				this.createElementAttribute(
					'href',
					'https://github.com/al3xback'
				),
				this.createElementAttribute('rel', 'noopener'),
				this.createElementAttribute('target', '_blank'),
			]
		);

		footerTextEl.appendChild(footerTextLinkCreatorEl);
		footerTextEl.append('. Coded by ');
		footerTextEl.appendChild(footerTextLinkCoderEl);

		footerContainerEl.appendChild(footerTextEl);

		footerEl.appendChild(footerContainerEl);

		return footerEl;
	}
}

export { Component, Header, Card, Main, Footer };

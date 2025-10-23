import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Gloss from './gloss.svelte';

describe('Gloss component', () => {
	it('should apply custom class', async () => {
		const { container } = render(Gloss, {
			props: {
				i: 'custom-class',
			},
		});
		
		const div = container.querySelector('.custom-class');
		expect(div).toBeTruthy();
	});

	it('should render with empty string class when not provided', async () => {
		const { container } = render(Gloss, {
			props: {},
		});
		
		const main = container.querySelector('main');
		expect(main).toBeTruthy();
	});

	it('should have main element', async () => {
		const { container } = render(Gloss, {
			props: {
				i: 'test-class',
			},
		});
		
		const main = container.querySelector('main');
		expect(main).toBeTruthy();
	});
});

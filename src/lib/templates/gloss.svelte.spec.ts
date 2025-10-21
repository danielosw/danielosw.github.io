import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Gloss from './gloss.svelte';

describe('Gloss component', () => {
	it('should render children content', async () => {
		render(Gloss, {
			props: {
				i: 'test-class',
			},
			slots: {
				default: '<div>Test Content</div>',
			},
		});
		
		const text = page.getByText('Test Content');
		await expect.element(text).toBeInTheDocument();
	});

	it('should apply custom class', async () => {
		const { container } = render(Gloss, {
			props: {
				i: 'custom-class',
			},
			slots: {
				default: '<div>Content</div>',
			},
		});
		
		const div = container.querySelector('.custom-class');
		expect(div).toBeTruthy();
	});

	it('should render without class when not provided', async () => {
		render(Gloss, {
			slots: {
				default: '<div>Content</div>',
			},
		});
		
		const text = page.getByText('Content');
		await expect.element(text).toBeInTheDocument();
	});
});

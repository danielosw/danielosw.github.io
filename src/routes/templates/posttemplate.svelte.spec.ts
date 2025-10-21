import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import PostTemplate from './posttemplate.svelte';

describe('PostTemplate component', () => {
	it('should render with title', async () => {
		render(PostTemplate, {
			props: {
				title: 'Test Post',
			},
		});
		
		const titleLink = page.getByRole('link', { name: 'Test Post' });
		await expect.element(titleLink).toBeInTheDocument();
	});

	it('should generate correct href from title', async () => {
		render(PostTemplate, {
			props: {
				title: 'my post',
			},
		});
		
		const link = page.getByRole('link', { name: 'my post' });
		await expect.element(link).toHaveAttribute('href', '/details/mypost');
	});

	it('should handle title with multiple spaces', async () => {
		render(PostTemplate, {
			props: {
				title: 'ai thoughts',
			},
		});
		
		const link = page.getByRole('link', { name: 'ai thoughts' });
		await expect.element(link).toHaveAttribute('href', '/details/aithoughts');
	});

	it('should use placeholder title when not provided', async () => {
		render(PostTemplate, {
			props: {},
		});
		
		const placeholderLink = page.getByRole('link', { name: 'placeholder' });
		await expect.element(placeholderLink).toBeInTheDocument();
	});

	it('should have blogbox structure', async () => {
		const { container } = render(PostTemplate, {
			props: {
				title: 'Test',
			},
		});
		
		const blogbox = container.querySelector('.blogbox');
		expect(blogbox).toBeTruthy();
	});
});

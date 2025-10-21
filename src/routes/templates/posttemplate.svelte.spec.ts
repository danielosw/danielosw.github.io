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
			slots: {
				default: 'Test content',
			},
		});
		
		const titleLink = page.getByRole('link', { name: 'Test Post' });
		await expect.element(titleLink).toBeInTheDocument();
	});

	it('should render children content', async () => {
		render(PostTemplate, {
			props: {
				title: 'Test Post',
			},
			slots: {
				default: 'This is my test content',
			},
		});
		
		const content = page.getByText('This is my test content');
		await expect.element(content).toBeInTheDocument();
	});

	it('should generate correct href from title', async () => {
		render(PostTemplate, {
			props: {
				title: 'my post',
			},
			slots: {
				default: 'Content',
			},
		});
		
		const link = page.getByRole('link', { name: 'my post' });
		await expect.element(link).toHaveAttribute('href', '/details/mypost');
	});

	it('should use placeholder title when not provided', async () => {
		render(PostTemplate, {
			slots: {
				default: 'Content',
			},
		});
		
		const placeholderLink = page.getByRole('link', { name: 'placeholder' });
		await expect.element(placeholderLink).toBeInTheDocument();
	});

	it('should have blogbox structure', async () => {
		const { container } = render(PostTemplate, {
			props: {
				title: 'Test',
			},
			slots: {
				default: 'Content',
			},
		});
		
		const blogbox = container.querySelector('.blogbox');
		expect(blogbox).toBeTruthy();
	});
});

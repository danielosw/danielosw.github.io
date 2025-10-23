import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import BlogPage from './+page.svelte';

describe('Blog page', () => {
	it('should render blog post', async () => {
		render(BlogPage);
		
		const postLink = page.getByRole('link', { name: /ai thoughts/i });
		await expect.element(postLink).toBeInTheDocument();
	});

	it('should render post description', async () => {
		render(BlogPage);
		
		const description = page.getByText(/A post about my thoughts on ai/i);
		await expect.element(description).toBeInTheDocument();
	});

	it('should have correct blog structure', async () => {
		const { container } = render(BlogPage);
		
		const blogwrap = container.querySelector('.blogwrap');
		expect(blogwrap).toBeTruthy();
	});

	it('should have post link with correct href', async () => {
		render(BlogPage);
		
		const postLink = page.getByRole('link', { name: /ai thoughts/i });
		await expect.element(postLink).toHaveAttribute('href', '/details/aithoughts');
	});
});

import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('Home page', () => {
	it('should render welcome message', async () => {
		render(Page);
		
		const text = page.getByText(/Hello! I am Daniel/i);
		await expect.element(text).toBeInTheDocument();
	});

	it('should render navigation links', async () => {
		render(Page);
		
		const huntingBeesLink = page.getByRole('link', { name: /fallen london calculators/i });
		const blogLink = page.getByRole('link', { name: /My blog/i });
		const portfolioLink = page.getByRole('link', { name: /My portfolio/i });
		
		await expect.element(huntingBeesLink).toBeInTheDocument();
		await expect.element(blogLink).toBeInTheDocument();
		await expect.element(portfolioLink).toBeInTheDocument();
	});

	it('should have correct link hrefs', async () => {
		render(Page);
		
		const huntingBeesLink = page.getByRole('link', { name: /fallen london calculators/i });
		const blogLink = page.getByRole('link', { name: /My blog/i });
		const portfolioLink = page.getByRole('link', { name: /My portfolio/i });
		
		await expect.element(huntingBeesLink).toHaveAttribute('href', '/huntingbees');
		await expect.element(blogLink).toHaveAttribute('href', '/blog');
		await expect.element(portfolioLink).toHaveAttribute('href', '/portfolio');
	});
});

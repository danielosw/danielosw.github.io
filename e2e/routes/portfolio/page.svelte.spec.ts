import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import PortfolioPage from './+page.svelte';

describe('Portfolio page', () => {
	it('should render portfolio item', async () => {
		render(PortfolioPage);
		
		const portfolioLink = page.getByRole('link');
		await expect.element(portfolioLink).toBeInTheDocument();
	});


	it('should render portfolio image', async () => {
		render(PortfolioPage);
		
		const image = page.getByRole('img');
		await expect.element(image).toBeInTheDocument();
	});

	it('should have correct portfolio structure', async () => {
		const { container } = render(PortfolioPage);
		
		const portwrap = container.querySelector('.portwrap');
		expect(portwrap).toBeTruthy();
	});

	it('should have portfolio link with correct href', async () => {
		render(PortfolioPage);
		
		const link = page.getByRole('link');
		await expect.element(link).toHaveAttribute('href', '/');
	});
});

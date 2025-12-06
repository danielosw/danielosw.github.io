import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import PortfolioSpot from './portfoliospot.svelte';

describe('PortfolioSpot component', () => {
	it('should render with title', async () => {
		render(PortfolioSpot, {
			props: {
				title: 'My Project',
				href: '/portfolio/project',
				imgsrc: '/image.png',
			},
		});

		const title = page.getByRole('heading', { name: 'My Project' });
		await expect.element(title).toBeInTheDocument();
	});

	it('should render image with correct src', async () => {
		render(PortfolioSpot, {
			props: {
				title: 'Test',
				href: '/portfolio/test',
				imgsrc: '/test.png',
				alt: 'Test image',
			},
		});

		const image = page.getByRole('img', { name: 'Test image' });
		await expect.element(image).toBeInTheDocument();
		await expect.element(image).toHaveAttribute('src', '/test.png');
	});

	it('should have link with correct href', async () => {
		render(PortfolioSpot, {
			props: {
				title: 'Test',
				href: '/portfolio/my-link',
				imgsrc: '/test.png',
			},
		});

		const link = page.getByRole('link');
		await expect.element(link).toHaveAttribute('href', '/portfolio/Test');
	});

	it('should use placeholder values when props not provided', async () => {
		render(PortfolioSpot, {
			props: {},
		});

		const title = page.getByRole('heading', { name: 'placeholder' });
		await expect.element(title).toBeInTheDocument();
	});

	it('should have correct wrapper class', async () => {
		const { container } = render(PortfolioSpot, {
			props: {
				title: 'Test',
				href: '/portfolio/test',
				imgsrc: '/test.png',
			},
		});

		const wrapper = container.querySelector('.indiportwrap');
		await expect(wrapper).toBeTruthy();
	});
});

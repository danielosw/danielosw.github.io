import { page } from '@vitest/browser/context';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import PortfolioSpot from './portfoliospot.svelte';

describe('PortfolioSpot component', () => {
	it('should render with title and content', async () => {
		render(PortfolioSpot, {
			props: {
				title: 'My Project',
				href: '/project',
				imgsrc: '/image.png',
			},
			slots: {
				default: 'Project description',
			},
		});
		
		const title = page.getByRole('heading', { name: 'My Project' });
		const description = page.getByText('Project description');
		
		await expect.element(title).toBeInTheDocument();
		await expect.element(description).toBeInTheDocument();
	});

	it('should render image with correct src', async () => {
		render(PortfolioSpot, {
			props: {
				title: 'Test',
				href: '/test',
				imgsrc: '/test.png',
				alt: 'Test image',
			},
			slots: {
				default: 'Content',
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
				href: '/my-link',
				imgsrc: '/test.png',
			},
			slots: {
				default: 'Content',
			},
		});
		
		const link = page.getByRole('link');
		await expect.element(link).toHaveAttribute('href', '/my-link');
	});

	it('should use placeholder values when props not provided', async () => {
		render(PortfolioSpot, {
			slots: {
				default: 'Content',
			},
		});
		
		const title = page.getByRole('heading', { name: 'placeholder' });
		await expect.element(title).toBeInTheDocument();
	});

	it('should render children content', async () => {
		render(PortfolioSpot, {
			props: {
				title: 'Test',
				href: '/test',
				imgsrc: '/test.png',
			},
			slots: {
				default: 'This is the child content',
			},
		});
		
		const content = page.getByText('This is the child content');
		await expect.element(content).toBeInTheDocument();
	});
});

import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Footer from './footer.svelte';

describe('Footer component', () => {
	it('should render license information', async () => {
		render(Footer);
		
		const agplText = page.getByText(/AGPL 3.0/i);
		const ccText = page.getByText(/Creative Commons/i);
		
		await expect.element(agplText).toBeInTheDocument();
		await expect.element(ccText).toBeInTheDocument();
	});

	it('should mention code licensing', async () => {
		render(Footer);
		
		const codeText = page.getByText(/All code is licenced/i);
		await expect.element(codeText).toBeInTheDocument();
	});

	it('should mention non-code writings licensing', async () => {
		render(Footer);
		
		const writingsText = page.getByText(/All non-code writings/i);
		await expect.element(writingsText).toBeInTheDocument();
	});

	it('should have footer class', async () => {
		const { container } = render(Footer);
		
		const footer = container.querySelector('.footer');
		expect(footer).toBeTruthy();
	});
});

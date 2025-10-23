import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import HuntingBeesPage from './+page.svelte';

describe('HuntingBees calculator page', () => {
	it('should render calculator form', async () => {
		render(HuntingBeesPage);
		
		const input = page.getByPlaceholder(/enter bee amount/i);
		const submitButton = page.getByRole('button', { name: /submit/i });
		
		await expect.element(input).toBeInTheDocument();
		await expect.element(submitButton).toBeInTheDocument();
	});


	it('should have links to wiki pages', async () => {
		render(HuntingBeesPage);
		
		const ambushLink = page.getByRole('link', { name: /set an ambush/i });
		const carnageLink = page.getByRole('link', { name: /sow carnage/i });
		
		await expect.element(ambushLink).toBeInTheDocument();
		await expect.element(carnageLink).toBeInTheDocument();
	});

	it('should display all result fields', async () => {
		render(HuntingBeesPage);
		
		const beesText = page.getByText(/Bees caught:/i);
		const hintsText = page.getByText(/hints got:/i);
		const cluesText = page.getByText(/clues got:/i);
		const secretsText = page.getByText(/secrets got:/i);
		const talesText = page.getByText(/tales got:/i);
		const implicationsText = page.getByText(/implications got:/i);
		const incunabulumsText = page.getByText(/incunabulums got:/i);
		const actionsText = page.getByText(/actions taken catching:/i);
		
		await expect.element(beesText).toBeInTheDocument();
		await expect.element(hintsText).toBeInTheDocument();
		await expect.element(cluesText).toBeInTheDocument();
		await expect.element(secretsText).toBeInTheDocument();
		await expect.element(talesText).toBeInTheDocument();
		await expect.element(implicationsText).toBeInTheDocument();
		await expect.element(incunabulumsText).toBeInTheDocument();
		await expect.element(actionsText).toBeInTheDocument();
	});

	it('should have disabled submit button initially', async () => {
		render(HuntingBeesPage);
		
		const submitButton = page.getByRole('button', { name: /submit/i });
		await expect.element(submitButton).toBeDisabled();
	});

	it('should display zero values initially', async () => {
		render(HuntingBeesPage);
		
		const beesText = page.getByText('Bees caught: 0');
		const hintsText = page.getByText('hints got: 0');
		
		await expect.element(beesText).toBeInTheDocument();
		await expect.element(hintsText).toBeInTheDocument();
	});
});

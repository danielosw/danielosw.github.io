import { describe, it, expect } from 'vitest';
import { prerender } from './+layout';

describe('Root layout configuration', () => {
	it('should have prerender enabled', () => {
		expect(prerender).toBe(true);
	});
});

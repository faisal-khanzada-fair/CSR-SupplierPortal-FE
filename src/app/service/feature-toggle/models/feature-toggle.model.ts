// Build me with only the properties we will actually use from the API
export class FeatureToggle {
	constructor(toggles: string[]) {
		this.toggles = toggles;
	}

	toggles: string[];
}

export type CharacterDictionary = {
	character: {
		uniqueId: string;
		info: {
			name: string;
			age: number;
			class: string;
			profession: string;
			country: string;
			backstory: string;
			buffs: string[];
			debuffs: string[];
		};
		gear: {
			hatHelm: string;
			neck: string;
			shoulder: string;
			chest: string;
			gloves: string;
			rings: string[];
			belt: string;
			pants: string;
			boots: string;
			extra: string;
		};
		team: {
			petFamiliar: string;
			companion: string;
			follower: string;
			professionMate: string;
			townPerson: string;
			zombie: string;
		};
	};

	busyActions: {
		tasks: {
			items: string[];
			description: string;
		};
		quests: {
			items: string[];
			description: string;
		};
		expeditions: {
			items: string[];
			description: string;
		};
	};

	ruledRegion: {
		innerGrounds: {
			items: string[];
			description: string;
		};
		outerGrounds: {
			items: string[];
			description: string;
		};
		outThere: {
			items: string[];
			description: string;
		};
	};
};

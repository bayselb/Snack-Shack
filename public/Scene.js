class ExternalScene extends window.BaseScene {
  constructor() {
    super({
      name: "test_island",
      player: {
        spawn: {
          x: 210,
          y: 280,
        },
      },
      // map: {
      //   tilesetUrl: "http://localhost:3002/tilesheet.png",
      // },
      // mmo: {
      //   enabled: true,
      //   url: "ws://localhost:2567",
      //   roomId: "community_island",
      // },
    });
  }

  create() {
    super.create();

    const npcClothing = {
      body: "Goblin Potion",
      hat: "Pirate Hat",
      hair: "Buzz Cut",
      shirt: "SFL T-Shirt",
      pants: "Farmer Pants",
      tool: "Pirate Scimitar",
    };

    this.initialiseNPCs([
      {
        x: 240,
        y: 320,
        npc: "geoff",
        clothing: npcClothing,
        onClick: () => {
          window.openModal({
            npc: {
              name: "Geoff",
              clothing: npcClothing,
            },
            jsx: "Howdy farmer! Welcome to the test community island, stay safe out there.",
          });
        },
      },
    ]);
  }
}

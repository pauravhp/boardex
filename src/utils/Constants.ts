export const boardgameGHAPI =
	"https://middleman-api-8d134831a182.herokuapp.com/api/v1";
export const boardgamesGHRoute = `${boardgameGHAPI}/board_games`;

export const boardgameAPI = "https://boardgamegeek.com/xmlapi2";
export const boardgamesRoute = `${boardgameAPI}/hot?type=boardgame`;
export const boardgameRoute = `${boardgameAPI}/thing?videos=1&type=boardgame,boardgamexpansion&stats=1&ratingcomments=1&id=`;
export const boradgameSearchRoute = `${boardgameAPI}/search?type=boardgame&query=`;

export const boardgameTabs = {
	description: "description",
	mechanics: "mechanics",
	achievements: "achievements",
	reviews: "reviews",
};

export const categoryIconNames: Record<string, string> = {
	Adventure: "travel_explore",
	Ancient: "history",
	Animals: "pets",
	"Card Game": "credit_card",
	Civilization: "domain",
	"Collectible Components": "store",
	"Comic Book": "menu_book",
	Economic: "account_balance_wallet",
	Educational: "school",
	Exploration: "explore",
	Fantasy: "star",
	Fighting: "sports_esports",
	Horror: "nightlight_round",
	Miniatures: "developer_mode",
	Movies: "movie",
	Negotiation: "forum",
	"Novel-based": "book",
	Political: "gavel",
	Racing: "directions_car",
	"Science Fiction": "science",
	"Space Exploration": "rocket",
	"Territory Building": "home",
	Trains: "train",
	Transportation: "subway",
	Travel: "flight",
	"Video Game Theme": "videogame_asset",
	Wargame: "shield",
};

export const categoryColors: Record<string, string> = {
	Adventure: "#ff5733", // Example color for Adventure
	Ancient: "#8e44ad", // Example color for Ancient
	Animals: "#2ecc71", // Example color for Animals
	"Card Game": "#f39c12", // Example color for Card Game
	Civilization: "#3498db", // Example color for Civilization
	"Collectible Components": "#1abc9c", // Example color for Collectible Components
	"Comic Book": "#e74c3c", // Example color for Comic Book
	Economic: "#9b59b6", // Example color for Economic
	Educational: "#2980b9", // Example color for Educational
	Exploration: "#f1c40f", // Example color for Exploration
	Fantasy: "#e67e22", // Example color for Fantasy
	Fighting: "#16a085", // Example color for Fighting
	Horror: "#34495e", // Example color for Horror
	Miniatures: "#95a5a6", // Example color for Miniatures
	Movies: "#7f8c8d", // Example color for Movies/TV
	Negotiation: "#2c3e50", // Example color for Negotiation
	"Novel-based": "#1f77b4", // Example color for Novel-based
	Political: "#f39c12", // Example color for Political
	Racing: "#9b59b6", // Example color for Racing
	"Science Fiction": "#e74c3c", // Example color for Science Fiction
	"Space Exploration": "#3498db", // Example color for Space Exploration
	"Territory Building": "#1abc9c", // Example color for Territory Building
	Trains: "#6a3937",
	Transportation: "#bdf2bf",
	Travel: "#ff5733", // Example color for Travel
	"Video Game Theme": "#8e44ad", // Example color for Video Game Theme
	Wargame: "#e67e22", // Example color for Wargame
};

export const mechanicIconNames: Record<string, string> = {
	"Action Points": "control_point",
	"Action Retrieval": "autorenew",
	"Area Majority": "flag",
	"Area Movement": "map",
	"Area-Impulse": "change_history",
	"Automatic Resource Growth": "data_usage",
	Campaign: "card_giftcard",
	"Card Play Conflict Resolution": "event_note",
	"Catch the Leader": "person_pin_circle",
	"Command Cards": "military_tech",
	"Communication Limits": "network_cell",
	Contracts: "assignment_turned_in",
	"Cooperative Game": "group_work",
	"Deck Construction": "deck",
	"Deck, Bag, and Pool Building": "card_membership",
	"Dice Rolling": "casino",
	"End Game Bonuses": "star_rate",
	Events: "event",
	"Grid Movement": "grid_on",
	"Hand Management": "handyman",
	"Hexagon Grid": "grid_3x3",
	Income: "account_balance",
	Interrupts: "pause_circle_filled",
	Layering: "layers",
	"Melding and Splaying": "pan_tool",
	"Modular Board": "apps",
	"Multi-Use Cards": "credit_card",
	"Open Drafting": "select_all",
	Ownership: "verified_user",
	"Pattern Building": "format_shapes",
	"Programmed Movement": "subtitles",
	"Push Your Luck": "shuffle",
	Race: "directions_run",
	"Resource to Move": "directions_car",
	"Role Playing": "person",
	Rondel: "restore_page",
	Scenario: "location_on",
	"Set Collection": "collections",
	Simulation: "simulation",
	"Simultaneous Action Selection": "timer",
	Solo: "vpn_key",
	Tags: "local_offer",
	"Tech Trees": "track_changes",
	"Tile Placement": "add_road",
	"Track Movement": "railway_alert",
	"Turn Order: Progressive": "trending_up",
	"Variable Player Powers": "accessibility",
	"Variable Set-up": "swap_horiz",
	"Worker Placement": "build",
	"Worker Placement with Dice Workers": "casino",
};

export const mechanicColors: Record<string, string> = {
	"Action Points": "#3498db", // Blue - Represents strategy and turn management
	"Action Retrieval": "#2ecc71", // Green - Represents recovery or resource management
	"Area Majority": "#f39c12", // Yellow - Represents control or influence over areas
	"Area Movement": "#e74c3c", // Red - Movement-focused, urgency, and decision-making
	"Area-Impulse": "#8e44ad", // Purple - Strategy and decision-making with effects
	"Automatic Resource Growth": "#27ae60", // Green - Resource growth over time
	Campaign: "#9b59b6", // Purple - Multi-phase progression
	"Card Play Conflict Resolution": "#f1c40f", // Yellow - Conflict and strategic resolution
	"Catch the Leader": "#e67e22", // Orange - Competitive mechanics
	"Command Cards": "#2980b9", // Blue - Military or command-based strategies
	"Communication Limits": "#34495e", // Dark Grey - Limits and restrictions
	Contracts: "#2c3e50", // Dark Blue - Deals, terms, and agreements
	"Cooperative Game": "#16a085", // Teal - Cooperation and teamwork
	"Deck Construction": "#d35400", // Orange - Creating and customizing decks
	"Deck, Bag, and Pool Building": "#f39c12", // Yellow - Collection mechanics
	"Dice Rolling": "#bdc3c7", // Light Grey - Luck-based mechanics
	"End Game Bonuses": "#f1c40f", // Yellow - Bonus rewards for endgame
	Events: "#e74c3c", // Red - Event-driven gameplay, surprises
	"Grid Movement": "#3498db", // Blue - Grid-based movement and strategy
	"Hand Management": "#9b59b6", // Purple - Managing cards or resources in hand
	"Hexagon Grid": "#1abc9c", // Green - Grid-based mechanics with hexagonal layout
	Income: "#27ae60", // Green - Represents wealth generation
	Interrupts: "#f39c12", // Yellow - Interrupt actions or pause mechanics
	Layering: "#8e44ad", // Purple - Layered strategies or mechanics
	"Melding and Splaying": "#d35400", // Orange - Merging and organizing components
	"Modular Board": "#3498db", // Blue - Customizable board configurations
	"Multi-Use Cards": "#16a085", // Teal - Cards with multiple uses or roles
	"Open Drafting": "#2ecc71", // Green - Drafting mechanics, picking items
	Ownership: "#9b59b6", // Purple - Ownership-based mechanics
	"Pattern Building": "#f39c12", // Yellow - Creating patterns or structures
	"Programmed Movement": "#e67e22", // Orange - Planning and executing movements
	"Push Your Luck": "#f1c40f", // Yellow - Risk-taking and betting mechanics
	Race: "#e74c3c", // Red - Racing and time-based mechanics
	"Resource to Move": "#27ae60", // Green - Resource-based movement mechanics
	"Role Playing": "#9b59b6", // Purple - Character-driven gameplay
	Rondel: "#2ecc71", // Green - Circular progression-based mechanics
	Scenario: "#34495e", // Dark Grey - Scenario-driven, story-based mechanics
	"Set Collection": "#f39c12", // Yellow - Collecting sets of items or cards
	Simulation: "#7f8c8d", // Grey - Simulating real-world actions
	"Simultaneous Action Selection": "#2980b9", // Blue - Players choose actions simultaneously
	Solo: "#9b59b6", // Purple - Single-player mechanics
	Tags: "#e74c3c", // Red - Labeled actions or classifications
	"Tech Trees": "#16a085", // Teal - Technology progression mechanics
	"Tile Placement": "#f39c12", // Yellow - Placing tiles for strategy or board design
	"Track Movement": "#3498db", // Blue - Moving along tracks or paths
	"Turn Order: Progressive": "#e67e22", // Orange - Turn-based mechanics that progress
	"Variable Player Powers": "#9b59b6", // Purple - Differentiating player abilities
	"Variable Set-up": "#f1c40f", // Yellow - Changing game set-ups for variety
	"Worker Placement": "#27ae60", // Green - Placing workers in strategic positions
	"Worker Placement with Dice Workers": "#ecf0f1", // Light Grey - Dice-driven worker placement
};

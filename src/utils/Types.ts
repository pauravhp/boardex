export interface AppTypeInitialState {
	toasts: string[];
	userInfo: undefined | { email: string };
	currentBoardGameTab: string;
}

export interface BoardGameTypeInitialState {
	allInitialBoardGame: undefined | genericBoardGameType[];
	randomBoardGames: undefined | GeneratedBoardGameType[];
	searchResultBoardGames: undefined | genericBoardGameType[];
	compareQueue: GeneratedBoardGameType[];
	userBoardGames: UserBoardGameType[];
	currentBoardGame: GeneratedBoardGameType | undefined;
}

export interface genericBoardGameType {
	id: string | null;
	name: string | null;
	rank: string | null;
	thumbnail: string | null;
	yearpublished: string | null;
}

// Can include rank from hot items api call, use them within a fire image to indicate
// it is ranked 31 in the hot 50 for example. Although, bgs from search API calls might
// not have a rank
export interface GeneratedBoardGameType {
	id: string | null;
	namePrimary: string | null;
	nameAlt: string | null;
	thumbnail: string | null;
	image: string | null;
	description: string | null;
	yearpublished: string | null;
	minplayers: string | null;
	maxplayers: string | null;
	playingtime: string | null;
	minage: string | null;
	categories: string[] | null;
	mechanics: string[] | null;
	video1: VideoType | null;
	video2: VideoType | null;
	videoUnboxing: VideoType | null;
	videoInstructional: VideoType | null;
	ratingAvg: string | null;
	ratingBayes: string | null;
	reviews: ReviewType[];
	bgRank: string | null;
	wishlist: string | null;
}

export interface VideoType {
	id: string | null;
	title: string | null;
	category: string | null;
	link: string | null;
}

export interface UserBoardGameType extends GeneratedBoardGameType {
	firebaseId?: string;
}

export interface ReviewType {
	username: string;
	rating: string;
	comment: string;
}

// export interface CurrentBoardGameType extends GeneratedBoardGameType {
// 	reviews: ReviewType[];
// }

export class Content {
    constructor(
        public title: String,
        public description: String,
        public platforms: Array<String>,
        public images: Array<String>,
        public isSerie: boolean,
        public episodes: Array<String>,
        public time: String
    ) { }
}
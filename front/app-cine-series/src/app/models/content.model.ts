import { Duration } from "@js-joda/core";

export class Content {
    constructor(
        public title: String,
        public description: String,
        public platforms: Array<String>,
        public images: Array<String>,
        public isSerie: boolean,
        public saisons: Array<String>,
        public time: Duration
    ) { }
}
export interface Track {
    album: Album;
    artists: Array<Artist>;
    available_markets: Array<string>;
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalId;
    external_urls: ExternalUrl;
    href: string;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    linked_from: Track;
    name: string;
    popularity: number;
    preview_url: string;
    restrictions: TrackRestriction;
    track_number: number;
    type: string;
    uri: string;
}

export interface Album {
    album_group: string;
    album_type: string;
    artists: Array<Artist>;
    available_markets: Array<string>;
    external_urls: ExternalUrl;
    href: string;
    id: string;
    images: Array<Image>;
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions: AlbumRestriction;
    type: string;
    uri: string;
}

export interface Artist {
    external_urls: ExternalUrl;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface ExternalId {
    ean: string;
    isrc: string;
    upc: string;
}

export interface ExternalUrl {
    spotify: string;
}

export interface TrackRestriction {
    reason: string;
}

export interface Image {
    height: number;
    url: string;
    width: number;
}

export interface AlbumRestriction {
    reason: string;
}
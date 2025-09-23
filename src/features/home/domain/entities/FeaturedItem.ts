export interface FeaturedItemProps {
    id: string;
    title: string;
    category: '맛집' | '여행지' | '페스티벌' | string;
}

export class FeaturedItem {
    readonly id: string;
    readonly title: string;
    readonly category: string;

    constructor(props: FeaturedItemProps) {
        if (!props.id || !props.title) {
            throw new Error('FeaturedItem requires id and title');
        }
        this.id = props.id;
        this.title = props.title;
        this.category = props.category;
    }
}



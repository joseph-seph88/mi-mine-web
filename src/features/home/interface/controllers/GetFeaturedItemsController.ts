import { GetFeaturedItems } from '../../application/use-cases/GetFeaturedItems';

export class GetFeaturedItemsController {
    private readonly useCase: GetFeaturedItems;

    constructor(useCase: GetFeaturedItems) {
        this.useCase = useCase;
    }

    async handle() {
        const items = await this.useCase.execute();
        return items.map((i) => ({ id: i.id, title: i.title, category: i.category }));
    }
}



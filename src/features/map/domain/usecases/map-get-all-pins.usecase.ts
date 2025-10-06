import { MapRepository } from '../repositories/map.repository';
import { MapPin } from '../entities/map-pin';
import { MapRepositoryImpl } from '../../infrastructure/repositories/map.repository.impl';

export class MapGetAllPinsUsecase {
    private readonly repository: MapRepository;

    constructor(repository: MapRepository = new MapRepositoryImpl()) {
        this.repository = repository;
    }

    async execute(): Promise<MapPin[]> {
        return this.repository.getAllPins();
    }
}



import { MapPin } from '../entities/map-pin';

export interface MapRepository {
    getAllPins(): Promise<MapPin[]>;
}



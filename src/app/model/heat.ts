import { Participation } from "./participation";

export interface Heat {
    id: number;
    participations: Participation[];
}
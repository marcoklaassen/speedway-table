import { Color } from "./color";
import { Driver } from "./driver";

export interface Participation {
    driver: Driver;
    color: Color;
    points: number;
}
export interface TimeOption {
    label: string;
    value: number;
    default?: boolean;
}

export interface ILabelValue {
    label: string;
    value: string;
}

export interface ModeEnum {
    [key: string]: ILabelValue;
}

export interface IExample {
    first: number;
    second: number;
    operator: string;
    result: number;
}

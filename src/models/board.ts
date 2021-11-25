export interface BoardValues {
    values: any;
    getKeyFromIndex: (index: number) => void | any;
    handleClick: (key: number) => void | any;
    getLabel: (value: any) => void | any;
}

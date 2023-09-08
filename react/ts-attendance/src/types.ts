export type ts_data = {
    name: string
    id: number
};

export type ts_action = {
    type: string,
    d: {
        name: string
        id: number
    }[]
}

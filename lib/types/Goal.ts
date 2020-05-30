export interface Goal {
    id: string
    name: string
    description: string
    parent?: string | Goal
    deleted: boolean
    rank: number
}
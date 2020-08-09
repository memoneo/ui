export interface SelectionType {
    id: string
    displayName: string
    items: SelectionTypeItem[]
    createdAt: string
    deleted: boolean
}

export interface SelectionTypeItem {
    id: string
    displayName: string
    deleted: boolean
}
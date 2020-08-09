export interface Goal {
    id: string
    name: string
    description: string
    parent?: string | Goal
    deleted: boolean
    rank: number
    progress: number
    status: GoalStatus
}

export type GoalStatus = "on_hold" | "active" | "cancelled"
import { Dayjs } from "dayjs"
import { SelectionType } from "./SelectionType"

export interface Topic {
  id: string
  name: string
  description: string
  typeInfo: TopicTypeInfo
  optional: boolean
  deleted: boolean
}

export interface TopicTypeInfo {
  type: TopicType
  data?: TopicTypeInfoData
}

export type TopicTypeInfoData = SelectionType | undefined

export type TopicType = "text-simple" | "text-5rated" | "selection" | "person-selection" | "goal-selection"

export interface TopicLog {
  id: string
  dateType: TopicLogDateType
}

export type TopicLogDateType = "daily" | "weekly" | "monthly" | "yearly"

export interface TopicLogWithDatesAsString extends TopicLog {
  date: string
  createdAt: string
}

export interface TopicLogWithDatesAsDayJs extends TopicLog {
  date: Dayjs
  createdAt: Dayjs
}

export type TopicLogValueType = TopicType

interface TopicLogValueText {
  text: string
}

export interface TopicLogValueTextFiveRated extends TopicLogValueText {
  rating: number
}

export interface TopicLogValueTextSimple extends TopicLogValueText {}

export type TopicLogValue =
  | TopicLogValueTextSimple
  | TopicLogValueTextFiveRated
  | TopicLogValueSelection
  | TopicLogValuePersonSelection
  | TopicLogValueGoalSelection

export interface TopicLogValueSelection {
  selection: string[]
}

export interface TopicLogValuePersonSelection {
  personSelection: string[]
}

export interface TopicLogValueGoalSelection {
  goalSelection: string[]
}

export interface TopicLogValueContainer<T extends TopicLogValue> {
  topicId: string
  topicLogId: string
  type: TopicLogValueType
  value: T
  encrypted: boolean
}

export interface TopicTypeInfoSelectionData extends TopicTypeInfo {
  selectionTypeId: string
}
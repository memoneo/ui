import { Topic } from "./Topic"

export interface User {
    id: string
    mail: string
    name: string
    topicInfo: UserTopicInfo
}

export interface UserTopicInfo {
    personalTopics: Topic[]
}
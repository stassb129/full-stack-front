export type ClientType = {
    id: string
    name: string
    surname: string
    gender: GenderType
    age: number
    phoneNumber: string
    email: string
    subscriptionType: SubscriptionType
}
export enum SubscriptionType {
    BASIC = 'basic',
    STANDARD = 'standard',
    PREMIUM = 'premium'
}
export enum GenderType {
    MALE= 'male',
    FEMALE = 'female',
    ANOTHER = 'another'
}
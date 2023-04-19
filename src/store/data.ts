import {ClientType, GenderType, SubscriptionType} from "./types";
import {v1} from 'uuid';

export type StoreType = {
    clients: ClientType[]
}

export const store: StoreType = {
    clients: [
        {
            id: v1(),
            name: 'StanIsLave',
            surname: 'Kumasinsky',
            age: 22,
            gender: GenderType.MALE,
            phoneNumber: '+375-44-522-03-80',
            email: 'zalupa_konec@mail.com',
            subscriptionType: SubscriptionType.PREMIUM
        }
    ]
}
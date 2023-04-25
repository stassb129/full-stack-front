import React, {FC, useState} from 'react';
import {ClientType} from "../../store/types";

type ClientPageProps = {
    clients: ClientType[]
}
const ClientsPage: FC<ClientPageProps> = (props) => {
    const [clientsState, setClientsState] = useState<ClientType[]>(props.clients)
        return (
            <div>

                {clientsState.map((e) => <div>
                    <div>{e.name}</div>
                    <div>{e.age}</div>
                    <div>{e.surname}</div>
                    <hr/>
                </div>)}


            </div>


        );
    }
;

export default ClientsPage;
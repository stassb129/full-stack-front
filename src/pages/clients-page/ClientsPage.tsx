import React, {FC} from 'react';
import {ClientType} from "../../store/types";

type ClientPageProps = {
    clients: ClientType[]
}
const ClientsPage: FC<ClientPageProps> = (props) => {
    return (<div>
            <div>

            </div>
            <hr/>
            <div></div>
        </div>

    );
};

export default ClientsPage;
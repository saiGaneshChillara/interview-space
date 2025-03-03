<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState} from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> 1bb042d (Project completed)
=======
import { useEffect, useState } from "react";
>>>>>>> 1bb042d1cee8b08cb1a5b2b772d8f23478f4d538
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

const useGetCallById = (id: string | string[]) => {
    const [call, setCall] = useState<Call>();
<<<<<<< HEAD
<<<<<<< HEAD
    const [isLoading, setIsLoading] = useState(false);
=======
    const [isCallLoading, setIsCallLoading] = useState(false);
>>>>>>> 1bb042d (Project completed)
=======
    const [isCallLoading, setIsCallLoading] = useState(false);
>>>>>>> 1bb042d1cee8b08cb1a5b2b772d8f23478f4d538

    const client = useStreamVideoClient();

    useEffect(() => {
        if (!client) return;

        const getCall = async () => {
            try {
<<<<<<< HEAD
<<<<<<< HEAD
                const { calls } = await client.queryCalls({
                    filter_conditions: { id }
                });
=======
                const { calls } = await client.queryCalls({ filter_conditions: { id }});
>>>>>>> 1bb042d (Project completed)
=======
                const { calls } = await client.queryCalls({ filter_conditions: { id }});
>>>>>>> 1bb042d1cee8b08cb1a5b2b772d8f23478f4d538

                if (calls.length > 0) setCall(calls[0]);
            } catch (err) {
                console.error(err);
                setCall(undefined);
            } finally {
<<<<<<< HEAD
<<<<<<< HEAD
                setIsLoading(false);
=======
                setIsCallLoading(false);
>>>>>>> 1bb042d (Project completed)
=======
                setIsCallLoading(false);
>>>>>>> 1bb042d1cee8b08cb1a5b2b772d8f23478f4d538
            }
        };

        getCall();
    }, [client, id]);

<<<<<<< HEAD
<<<<<<< HEAD
    return { call, isLoading };
=======
    return {call, isCallLoading};
>>>>>>> 1bb042d (Project completed)
=======
    return {call, isCallLoading};
>>>>>>> 1bb042d1cee8b08cb1a5b2b772d8f23478f4d538
};

export default useGetCallById;
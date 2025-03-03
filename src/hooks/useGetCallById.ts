<<<<<<< HEAD
import { useEffect, useState} from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> 1bb042d (Project completed)
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

const useGetCallById = (id: string | string[]) => {
    const [call, setCall] = useState<Call>();
<<<<<<< HEAD
    const [isLoading, setIsLoading] = useState(false);
=======
    const [isCallLoading, setIsCallLoading] = useState(false);
>>>>>>> 1bb042d (Project completed)

    const client = useStreamVideoClient();

    useEffect(() => {
        if (!client) return;

        const getCall = async () => {
            try {
<<<<<<< HEAD
                const { calls } = await client.queryCalls({
                    filter_conditions: { id }
                });
=======
                const { calls } = await client.queryCalls({ filter_conditions: { id }});
>>>>>>> 1bb042d (Project completed)

                if (calls.length > 0) setCall(calls[0]);
            } catch (err) {
                console.error(err);
                setCall(undefined);
            } finally {
<<<<<<< HEAD
                setIsLoading(false);
=======
                setIsCallLoading(false);
>>>>>>> 1bb042d (Project completed)
            }
        };

        getCall();
    }, [client, id]);

<<<<<<< HEAD
    return { call, isLoading };
=======
    return {call, isCallLoading};
>>>>>>> 1bb042d (Project completed)
};

export default useGetCallById;
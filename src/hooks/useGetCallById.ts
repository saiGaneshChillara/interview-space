import { useEffect, useState} from "react";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

const useGetCallById = (id: string | string[]) => {
    const [call, setCall] = useState<Call>();
    const [isLoading, setIsLoading] = useState(false);

    const client = useStreamVideoClient();

    useEffect(() => {
        if (!client) return;

        const getCall = async () => {
            try {
                const { calls } = await client.queryCalls({
                    filter_conditions: { id }
                });

                if (calls.length > 0) setCall(calls[0]);
            } catch (err) {
                console.error(err);
                setCall(undefined);
            } finally {
                setIsLoading(false);
            }
        };

        getCall();
    }, [client, id]);

    return { call, isLoading };
};

export default useGetCallById;
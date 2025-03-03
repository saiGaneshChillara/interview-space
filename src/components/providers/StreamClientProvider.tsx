"use client";

import { useUser } from "@clerk/nextjs";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";
import LoaderUI from "../LoaderUI";
import { streamTokenProvider } from "../../actions/stream.actions";

const StreamProvider = ({ children }: { children: ReactNode }) => {
    const [streamVideoClient, setStreamVideoClient] = useState<StreamVideoClient>();
    const { user, isLoaded } = useUser();

    useEffect(() => {
        if (!isLoaded || !user) return;

        const client = new StreamVideoClient({
            apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY!,
            user: {
                id: user?.id,
                name: user?.firstName || "" + " " + user?.lastName || "" || user?.id,
            },
            tokenProvider: streamTokenProvider,
        });

        setStreamVideoClient(client);
    }, [user, isLoaded]);

    if (!streamVideoClient) return <LoaderUI />;

    return (
        <StreamVideo client={streamVideoClient}>{children}</StreamVideo>
    );
};

export default StreamProvider;
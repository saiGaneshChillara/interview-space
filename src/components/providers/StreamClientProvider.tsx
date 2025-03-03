"use client";

<<<<<<< HEAD
import { ReactNode, useEffect, useState } from "react";
import { StreamVideoClient, StreamVideo } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import LoaderUI from "./LoaderUI";
import { streamTokenProvider } from "@/actions/stream.action";

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
=======
import { useUser } from "@clerk/nextjs";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";
import LoaderUI from "../LoaderUI";
import { streamTokenProvider } from "../../actions/stream.actions";

const StreamProvider = ({ children }: { children: ReactNode }) => {
>>>>>>> 1bb042d (Project completed)
    const [streamVideoClient, setStreamVideoClient] = useState<StreamVideoClient>();
    const { user, isLoaded } = useUser();

    useEffect(() => {
        if (!isLoaded || !user) return;

        const client = new StreamVideoClient({
            apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY!,
            user: {
                id: user?.id,
                name: user?.firstName || "" + " " + user?.lastName || "" || user?.id,
<<<<<<< HEAD
                image: user?.imageUrl,
=======
>>>>>>> 1bb042d (Project completed)
            },
            tokenProvider: streamTokenProvider,
        });

        setStreamVideoClient(client);
    }, [user, isLoaded]);

    if (!streamVideoClient) return <LoaderUI />;

    return (
<<<<<<< HEAD
        <StreamVideo client={streamVideoClient}>
            {children}
        </StreamVideo>
    );

};

export default StreamVideoProvider;
=======
        <StreamVideo client={streamVideoClient}>{children}</StreamVideo>
    );
};

export default StreamProvider;
>>>>>>> 1bb042d (Project completed)

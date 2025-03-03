"use client";

<<<<<<< HEAD
<<<<<<< HEAD
import { ReactNode, useEffect, useState } from "react";
import { StreamVideoClient, StreamVideo } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import LoaderUI from "./LoaderUI";
import { streamTokenProvider } from "@/actions/stream.action";

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
=======
=======
>>>>>>> 1bb042d1cee8b08cb1a5b2b772d8f23478f4d538
import { useUser } from "@clerk/nextjs";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";
import LoaderUI from "../LoaderUI";
import { streamTokenProvider } from "../../actions/stream.actions";

const StreamProvider = ({ children }: { children: ReactNode }) => {
<<<<<<< HEAD
>>>>>>> 1bb042d (Project completed)
=======
>>>>>>> 1bb042d1cee8b08cb1a5b2b772d8f23478f4d538
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
<<<<<<< HEAD
                image: user?.imageUrl,
=======
>>>>>>> 1bb042d (Project completed)
=======
>>>>>>> 1bb042d1cee8b08cb1a5b2b772d8f23478f4d538
            },
            tokenProvider: streamTokenProvider,
        });

        setStreamVideoClient(client);
    }, [user, isLoaded]);

    if (!streamVideoClient) return <LoaderUI />;

    return (
<<<<<<< HEAD
<<<<<<< HEAD
        <StreamVideo client={streamVideoClient}>
            {children}
        </StreamVideo>
    );

};

export default StreamVideoProvider;
=======
=======
>>>>>>> 1bb042d1cee8b08cb1a5b2b772d8f23478f4d538
        <StreamVideo client={streamVideoClient}>{children}</StreamVideo>
    );
};

<<<<<<< HEAD
export default StreamProvider;
>>>>>>> 1bb042d (Project completed)
=======
export default StreamProvider;
>>>>>>> 1bb042d1cee8b08cb1a5b2b772d8f23478f4d538

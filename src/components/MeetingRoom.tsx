<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

function MeetingRoom() {
  return (
    <div>MeetingRoom</div>
=======
=======
>>>>>>> 1bb042d1cee8b08cb1a5b2b772d8f23478f4d538
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { CallControls, CallingState, CallParticipantsList, PaginatedGridLayout, SpeakerLayout, useCallStateHooks } from '@stream-io/video-react-sdk';
import { LayoutListIcon, LoaderIcon, UsersIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable';
import EndCallButton from './EndCallButton';
import CodeEditor from './CodeEditor';

const MeetingRoom = () => {
  const router = useRouter();

  const [layout, setLayout] = useState<"grid" | "speaker">();
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) {
    return (
      <div className="h-96 flex items-center justify-center">
        <LoaderIcon className="size-6 animate-spin" />
      </div>
    );
  }

  return (
    <div className='h-[calc(100vh-4rem-1px)]'>
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel defaultSize={35} minSize={25} maxSize={65} className='relative'>
          {/* Video layout */}
          <div className="absolute inset-0">
            {layout === "grid" ? <PaginatedGridLayout /> : <SpeakerLayout />}
            {/* Participants list */}
            {showParticipants && (
              <div className="absolute right-0 top-0 h-full w-[300px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <CallParticipantsList onClose={() => setShowParticipants(false)} />
              </div>
            )}
          </div>
          {/* Video Controls */}
          <div className="absolute bottom-4 left-0 right-0">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 flex-wrap justify-center px-4">
                <CallControls onLeave={() => router.push("/")} />
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant={"outline"} size={"icon"} className='size-10'>
                        <LayoutListIcon className='size-4' />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setLayout("grid")}>Grid View</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setLayout("speaker")}>Speaker View</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button variant={"outline"} size={"icon"} className="h-10 w-10" onClick={() => setShowParticipants(!showParticipants)}>
                    <UsersIcon className='size-4' />
                  </Button>
                  <EndCallButton />
                </div>
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={65} minSize={25}>
          <CodeEditor />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
<<<<<<< HEAD
>>>>>>> 1bb042d (Project completed)
=======
>>>>>>> 1bb042d1cee8b08cb1a5b2b772d8f23478f4d538
  );
};

export default MeetingRoom;
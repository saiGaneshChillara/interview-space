<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import useMeetingActions from "@/hooks/useMeetingActions";

=======
=======
>>>>>>> 1bb042d1cee8b08cb1a5b2b772d8f23478f4d538
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { useState } from 'react';
import { Button } from './ui/button';
import { DialogHeader } from './ui/dialog';
import { Input } from './ui/input';
import useMeetingActions from "@/hooks/useMeetingActions";
<<<<<<< HEAD
>>>>>>> 1bb042d (Project completed)
=======
>>>>>>> 1bb042d1cee8b08cb1a5b2b772d8f23478f4d538
interface MeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
<<<<<<< HEAD
<<<<<<< HEAD
    isJoiningMetting: boolean;
}

function MeetingModal({ isOpen, onClose, title, isJoiningMetting }: MeetingModalProps) {
=======
    isJoinMeeting: boolean;
}
const MeetingModal = ({ isOpen, onClose, title, isJoinMeeting }: MeetingModalProps) => {
>>>>>>> 1bb042d (Project completed)
=======
    isJoinMeeting: boolean;
}
const MeetingModal = ({ isOpen, onClose, title, isJoinMeeting }: MeetingModalProps) => {
>>>>>>> 1bb042d1cee8b08cb1a5b2b772d8f23478f4d538
    const [meetingUrl, setMeetingUrl] = useState("");

    const { createMeeting, joinMeeting } = useMeetingActions();

    const handleStart = () => {
<<<<<<< HEAD
<<<<<<< HEAD
        if (isJoiningMetting) {
            const meetingId = meetingUrl.split("/").pop();
=======
        if (isJoinMeeting) {
            const meetingId = meetingUrl.split("/").pop();

>>>>>>> 1bb042d (Project completed)
=======
        if (isJoinMeeting) {
            const meetingId = meetingUrl.split("/").pop();

>>>>>>> 1bb042d1cee8b08cb1a5b2b772d8f23478f4d538
            if (meetingId) joinMeeting(meetingId);
        } else {
            createMeeting();
        }
<<<<<<< HEAD
<<<<<<< HEAD
        setMeetingUrl("");
        onClose();
    };
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                    {isJoiningMetting && (
                        <Input
                            placeholder="Paste meeting link here..."
                            value={meetingUrl}
                            onChange={(e) => setMeetingUrl(e.target.value)}
                        />
                    )}
                    <div className="flex justify-end gap-3">
                        <Button variant={"outline"} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button onClick={handleStart} disabled={isJoiningMetting && !meetingUrl.trim()}>{isJoiningMetting ? "Join Meeting" : "Start Meeting"}</Button>
=======
=======
>>>>>>> 1bb042d1cee8b08cb1a5b2b772d8f23478f4d538

        setMeetingUrl("");
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                    {isJoinMeeting && (
                        <Input placeholder='Paste meeting link here' value={meetingUrl} onChange={(e) => setMeetingUrl(e.target.value)} />
                    )}

                    <div className="felx justify-end gap-3">
                        <Button variant={"outline"} onClick={onClose}>Cancel</Button>
                        <Button onClick={handleStart} disabled={isJoinMeeting && !meetingUrl.trim()}>
                            {isJoinMeeting ? "Join Meeting" : "Start Meeting"}
                        </Button>
<<<<<<< HEAD
>>>>>>> 1bb042d (Project completed)
=======
>>>>>>> 1bb042d1cee8b08cb1a5b2b772d8f23478f4d538
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default MeetingModal;
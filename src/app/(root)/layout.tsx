import StreamClientProvider from "@/components/providers/StreamClientProvider";

<<<<<<< HEAD
<<<<<<< HEAD
const Layout = ({ children }: {children: React.ReactNode}) => {
=======
const Layout = ({ children }: { children: React.ReactNode}) => {
>>>>>>> 1bb042d (Project completed)
=======
const Layout = ({ children }: { children: React.ReactNode}) => {
>>>>>>> 1bb042d1cee8b08cb1a5b2b772d8f23478f4d538
    return (
        <StreamClientProvider>{children}</StreamClientProvider>
    );
};

export default Layout;
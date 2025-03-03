import StreamClientProvider from "@/components/providers/StreamClientProvider";

<<<<<<< HEAD
const Layout = ({ children }: {children: React.ReactNode}) => {
=======
const Layout = ({ children }: { children: React.ReactNode}) => {
>>>>>>> 1bb042d (Project completed)
    return (
        <StreamClientProvider>{children}</StreamClientProvider>
    );
};

export default Layout;
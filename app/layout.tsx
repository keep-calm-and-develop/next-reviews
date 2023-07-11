import type { PropsWithChildren } from 'react';

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <header>
                    [Header]
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    [Footer]
                </footer>
            </body>
        </html>
    );
};

export default RootLayout;

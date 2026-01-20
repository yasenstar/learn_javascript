export const metadata = {
    title: 'Next.js',
    description: "Yasen's Next App"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}